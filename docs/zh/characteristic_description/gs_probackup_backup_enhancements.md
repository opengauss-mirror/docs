---
description: 本文介绍 openGauss gs_probackup备份增强 的相关内容，涵盖 可获得性、特性简介 等内容。
keywords: [openGauss, gs_probackup备份增强, 特性描述, 可获得性, 特性简介]
---

# gs_probackup备份增强

## 可获得性<a name="section56086982"></a>

本特性自openGauss 8.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_probackup支持累积增量备份和备份加密。累积增量备份减少恢复所需依赖的备份数量，备份加密保护备份数据的机密性和完整性。两个特性可以独立使用，也可以组合使用。

## 客户价值<a name="section46751668"></a>

通过gs_probackup备份增强，可以达成以下目的：

- 通过累积增量备份缩短恢复链，恢复指定时间点时只需要使用全量备份和对应的一个累积增量备份。
- 在备份数据写入时直接进行加密，避免备份目录长期保留明文数据。
- 在不解密整个备份的情况下执行备份编目、删除、校验和恢复等操作，降低大规模备份的管理成本。
- 通过认证加密和备份元数据完整性保护，及时发现备份数据或恢复链信息被篡改的情况。
- 在不重写备份数据文件的情况下更换加密口令，满足密钥轮换需求。

## 特性描述<a name="section18111828"></a>

### 累积增量备份

gs_probackup原有的PTRACK增量备份默认基于当前备份链的链尾生成差异增量。例如，连续执行增量备份时，备份链如下：

```text
FULL → P1 → P2 → P3
```

恢复到P3时需要依次应用FULL、P1、P2和P3。启用累积增量备份后，每个增量备份直接以当前时间线内最近一次有效的FULL备份为父备份，备份链如下：

```text
        ┌── C1
FULL ───┼── C2
        └── C3
```

恢复到C3时只需要使用FULL和C3，从而将恢复链长度固定为两个备份。累积增量备份仍然使用PTRACK和CBM机制，只扩大CBM的查询范围，不需要扫描全部数据文件。

累积增量备份示例：

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b ptrack --incremental-type=cumulative
```

也可以使用以下别名：

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b ptrack --from-full
```

### 备份加密

备份加密将加密过程下沉到备份文件写入路径，在备份数据写入时直接完成加密，密文直接落盘。备份产物仍然保持目录结构，不会被封装成一个需要整体解密的加密包；目录中的文件分别使用独立的加密容器保存。

加密过程的顺序为：

```text
页级压缩 → 分块认证加密 → 写入备份目录
```

当前加密备份使用AES-128-GCM。数据文件按照数据块分别进行认证加密，每个数据块都有完整性校验信息，支持按需读取和校验。发生错误口令、数据篡改、数据截断或数据块位置变化时，校验会失败并报告错误。

备份加密支持以下密钥来源：

- 口令；
- keyfile；
- `GS_PROBACKUP_PASSPHRASE`环境变量；
- 交互式终端输入。

其中口令（`--encrypt-key`）和keyfile（`--encrypt-key-file`）不能同时指定，同时指定时命令报错退出。命令行未指定密钥材料时，依次使用`GS_PROBACKUP_PASSPHRASE`环境变量和交互式终端输入。

每个备份使用独立的数据加密密钥。用户口令用于保护该数据加密密钥，而不是直接用于加密全部备份数据，因此更换口令时不需要重新加密数据文件。

加密备份示例：

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b full --encrypt --encrypt-key-file=/path/to/backup.key
```

加密备份支持以下管理操作：

- `show`和`delete`可以直接读取或管理备份目录中的编目信息，不需要解密全部备份数据；
- `validate`只读取并校验需要验证的文件或数据块；
- `restore`按恢复过程实际需要读取和解密备份数据；
- `rekey`可以更换指定备份的加密口令，不需要重写数据文件。

## 特性增强<a name="section28788730"></a>

### 累积增量备份

累积增量备份提供以下增强能力：

- 增加`--incremental-type=cumulative`参数，明确指定使用累积增量备份；
- 增加`--from-full`参数，作为累积增量备份的简化写法；
- 支持通过`--parent-backup-id`显式指定累积增量备份的父全量备份；
- CBM范围不足时默认报错，避免静默降级后改变用户预期的恢复代价；
- 支持通过`--cumulative-fallback=differential`显式降级为差异增量备份；
- 识别多分支备份链，避免`merge`或留存策略操作破坏其他恢复点；
- 备份期间保护父备份链，避免并发删除或合并导致备份链失效。

### 备份加密

备份加密提供以下增强能力：

- 增加`--encrypt`及相关加密参数；
- 采用按文件、按数据块的认证加密格式，支持按需访问；
- 加密数据直接写入备份目录，减少明文中间态和额外的数据读写；
- `backup.control`等编目所需元数据保持可管理，并通过完整性校验保护；
- 支持口令、keyfile、环境变量和交互式终端等密钥提供方式；
- 增加`rekey`子命令，支持在不重写数据文件的情况下更换加密口令；
- 保留旧加密备份格式的读取兼容能力，新的备份使用新的加密格式。

## 使用方式<a name="section76531946143616"></a>

### 创建累积增量备份

执行累积增量备份前，需要满足PTRACK增量备份的前提条件，并且当前实例至少存在一个有效的FULL备份。

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b full

gs_probackup backup -B backup-path --instance=instance_name \
    -b ptrack --incremental-type=cumulative
```

### 创建加密备份

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b full --encrypt --encrypt-key-file=/path/to/backup.key
```

### 创建加密的累积增量备份

```bash
gs_probackup backup -B backup-path --instance=instance_name \
    -b ptrack --incremental-type=cumulative \
    --encrypt --encrypt-key-file=/path/to/backup.key
```

### 恢复和校验加密备份

恢复和校验时只需要提供解密所需的密钥材料，不需要再次指定`--encrypt`参数：

```bash
gs_probackup restore -B backup-path --instance=instance_name \
    -i backup-id -D pgdata-path --encrypt-key-file=/path/to/backup.key

gs_probackup validate -B backup-path --instance=instance_name \
    -i backup-id --encrypt-key-file=/path/to/backup.key
```

### 更换加密口令

更换口令时需要同时提供备份当前的密钥材料和新的密钥材料：

```bash
gs_probackup rekey -B backup-path --instance=instance_name \
    -i backup-id --encrypt-key-file=/path/to/backup.key \
    --new-encrypt-key-file=/path/to/new-backup.key
```

## 特性约束<a name="section06531946143616"></a>

- 累积增量备份只能用于PTRACK增量备份，不能用于FULL备份。
- 执行PTRACK增量备份前，需要打开`enable_cbm_tracking`，并且至少完成一次FULL备份。
- 累积增量备份只在当前时间线内选择父FULL备份，不跨时间线选择父备份。
- `--parent-backup-id`不能与累积增量模式同时用于指定冲突的父备份语义。
- CBM无法覆盖父FULL备份到当前备份的范围时，默认操作失败；需要降级时必须显式指定降级参数。
- 多分支备份链执行`merge`或留存策略操作时，需要避免删除或合并仍被其他恢复点依赖的备份。
- 同一恢复链应使用一致的密钥材料。只对恢复链中的部分备份更换口令，可能导致该恢复链无法使用一份密钥材料完成恢复。
- 新加密备份需要使用支持新格式的`gs_probackup`版本读取，老版本工具不能静默读取新格式备份。
- 加密备份支持远程备份模式，不支持备份到兼容S3协议的对象存储，也不支持资源池化模式，后两种场景在参数校验阶段直接报错。
- 加密密钥不应直接写入脚本、日志或命令历史；生产环境建议使用权限受限的keyfile或安全的密钥管理方式。

## 依赖关系<a name="section57771982"></a>

累积增量备份依赖PTRACK和CBM增量跟踪能力。备份加密依赖`gs_probackup`自身的加密能力和加密参数配置，不改变openGauss数据库内核、系统表或页级压缩逻辑。

详细的命令参数、备份恢复流程和版本限制，请参见[gs_probackup](../tool_and_commandreference/gs_probackup.md)命令参考。
