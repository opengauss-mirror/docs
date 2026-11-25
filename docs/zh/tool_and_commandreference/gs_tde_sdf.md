# gs\_tde\_sdf

## 背景信息<a name="section_gs_tde_sdf_background"></a>

gs\_tde\_sdf是openGauss透明数据加密（TDE）内生国密（SDF）方式的密钥管理工具，用于查询国密密码模块中的KEK槽位、创建KEK并导出受保护备份、在其他数据节点导入KEK并校验一致性，以及生成节点本地的KEK访问口令文件和SDF配置文件。本工具创建和分发的是主密钥（KEK），根密钥由TEE硬件提供，工具不创建、不导出、也不管理根密钥。gs\_tde\_sdf是独立的密钥管理工具，可以在数据库安装前后执行。工具通过GM/T 0018标准的SDF接口以及密码模块提供的ECM密钥管理扩展接口访问密码设备，需要目标系统已安装兼容的SDF动态库（鲲鹏BoostKit的libsdf.so）。

## 注意事项<a name="section_gs_tde_sdf_notes"></a>

- 密钥管理命令必须使用root用户执行。生成口令文件和配置文件时，工具会将文件属主设置为指定的数据库操作系统用户。

- 工具依赖Python 3和系统OpenSSL的libcrypto库，不需要额外安装Python加密包。

- 同一个集群的所有数据节点必须使用相同的KEK和相同的槽位。槽位取值范围为1～1000。

- 槽位被占用不能证明其中就是期望的KEK。校验KEK是否一致必须使用import-backup和受保护备份文件，不能仅比较槽位号。

- 工具不会覆盖已存在的备份文件，也不会覆盖内容不同的已有口令文件或配置文件；内容一致的已有口令文件和配置文件会被复用。请先确认目标路径上没有需要保留的文件。

- 受保护备份文件包含受保护的密钥备份和完整性校验值，校验值只能发现损坏，不能防止恶意替换。请通过安全渠道分发并妥善保管备份文件。

- KEK访问口令在交互式提示中输入，长度为8～128字节，不能包含NULL、回车和换行。口令不会出现在命令行参数中。

- 修改tde\_key\_provider或sdf\_info.json不会迁移已有加密数据。已使用KMS方式加密的数据必须继续使用KMS方式访问，反之亦然。

- SDF内生国密加解密仅支持资源池化部署下开启。

## 语法<a name="section_gs_tde_sdf_syntax"></a>

```
gs_tde_sdf [--library=LIBRARY] { query-key | create-backup | import-backup } [OPTION]...
```

## 参数说明<a name="section_gs_tde_sdf_params"></a>

通用参数：

- --library=LIBRARY

    指定SDF动态库的路径，默认取环境变量SDF\_LIBRARY的值，未设置时默认为/usr/lib64/libsdf.so。该参数必须放在子命令之前。

- -h, --help

    显示帮助信息。

query-key子命令参数：

- --key-index=INDEX

    待查询的KEK槽位号，取值范围为1～1000。命令不会请求口令，也不会创建、导出、导入或删除密钥。

create-backup子命令参数：

- --key-index=INDEX

    新建KEK使用的槽位号，取值范围为1～1000，且该槽位必须未被占用。工具会自动叠加SM4密钥类型编码。

- --backup-file=FILE

    新生成的受保护备份文件路径。文件所在目录必须已存在，工具拒绝覆盖已存在的文件。

- --runtime-password-file=FILE

    将KEK访问口令加密后保存到指定文件，并生成同名的.key伴随文件，需要同时指定--database-user。

- --database-user=USER

    口令文件和配置文件的所有者，取值为数据库操作系统用户。需要与--runtime-password-file或--emit-config配合使用。

- --emit-config=PATH

    生成SDF配置文件sdf\_info.json。需要同时指定--runtime-password-file和--database-user，并且--library和口令文件必须为绝对路径。

import-backup子命令不使用--key-index参数，KEK槽位由备份文件中记录的槽位决定，可用参数如下：

- --backup-file=FILE

    create-backup生成的受保护备份文件。导入总是使用备份文件中记录的槽位，不支持指定其他槽位。

- --runtime-password-file=FILE

    含义与create-backup同名参数相同。

- --database-user=USER

    含义与create-backup同名参数相同。

- --emit-config=PATH

    含义与create-backup同名参数相同。

## 使用说明<a name="section_gs_tde_sdf_usage"></a>

### 受保护备份文件<a name="section_gs_tde_sdf_backup_file"></a>

备份文件为JSON格式，包含KEK槽位、受保护的密钥备份、盐值、验证挑战和完整性校验值，不包含随机生成的CMK UUID。

创建备份时，工具会先在密码模块内创建KEK，再导出受保护备份。如果在备份发布前失败，工具会尝试删除本次新建的KEK；一旦开始发布备份，发生错误或中断（包括Ctrl+C）会保留KEK，并提示检查备份文件和密钥槽位。如果无法确认发布状态，请先检查两者再重试。

备份文件记录了创建时的KEK槽位，import-backup始终导入到该槽位，不提供指定其他槽位的参数。导入时，如果槽位为空，工具会先导入备份再校验；如果槽位已有KEK，则直接校验其是否与备份一致。重复执行导入是安全的。校验通过前失败时，工具会尝试删除本次新导入的KEK；校验通过后，即使可选的本地文件生成失败，KEK也会保留。

### 运行口令文件和SDF配置文件<a name="section_gs_tde_sdf_files"></a>

指定--runtime-password-file后，口令文件内容由8字节"OGSDFP01"、12字节随机nonce、密文和16字节认证标签组成，在同一路径后追加.key后缀的文件保存32字节随机保护密钥。两个文件均设置为0600权限，属主为--database-user指定的用户。工具会拒绝不成对的文件，以及内容不一致的已有文件。

指定--emit-config后，工具生成如下三个字段的配置文件：

```json
{
  "kek_index": 107,
  "library_path": "/usr/lib64/libsdf.so",
  "password_file": "/data/ccos/tde_sdf.password"
}
```

三个字段均为必填项。kek\_index为1～1000的整数，路径必须为绝对路径。文件必须是普通文件，属主为数据库操作系统用户，权限为0600，大小小于4096字节。工具只保证配置文件的结构正确，动态库能否加载、KEK是否存在、口令能否授权以及密码模块是否可用，由数据库启动时检查。

### 启用SDF方式<a name="section_gs_tde_sdf_enable"></a>

完成KEK分发和节点本地文件准备后，在所有数据节点上设置以下参数并重启数据库：

```
gs_guc set -Z datanode -N all -I all -c "enable_tde=on" -c "tde_key_provider=sdf"
gs_om -t restart
```

SDF配置文件只在数据库启动时读取，修改后需要重启。如果只替换了口令文件和.key文件，可以对数据库执行SIGHUP重新加载。

## 示例<a name="section_gs_tde_sdf_examples"></a>

查询本地槽位107是否被占用：

```
# /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so query-key \
  --key-index 107
Local SM4 KEK slot 107: empty (available).
```

在任意一个数据节点上创建主密钥（KEK），同时导出受保护备份并生成本节点的访问口令文件和SDF配置文件：

```
# /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so create-backup \
  --key-index 107 \
  --backup-file /data/ccos/kek-backup.json \
  --runtime-password-file /data/ccos/tde_sdf.password \
  --database-user ccos \
  --emit-config /data/ccos/install/data/dn/tde_config/sdf_info.json
New SDF KEK password:
Confirm SDF KEK password:
Local SDF configuration file=/data/ccos/install/data/dn/tde_config/sdf_info.json
Created protected SDF SM4 KEK backup.
SDF key index=107
Backup file=/data/ccos/kek-backup.json
Local runtime password file=/data/ccos/tde_sdf.password
Import this backup into the same slot on every eligible node before enabling SDF TDE.
```

将备份文件分发到其他数据节点，导入KEK并生成本地文件（无需指定槽位，槽位由备份文件决定）：

```
# /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so import-backup \
  --backup-file /data/ccos/kek-backup.json \
  --runtime-password-file /data/ccos/tde_sdf.password \
  --database-user ccos \
  --emit-config /data/ccos/install/data/dn/tde_config/sdf_info.json
SDF KEK password:
Local SDF configuration file=/data/ccos/install/data/dn/tde_config/sdf_info.json
Verified local SM4 KEK against the source-node verification record.
SDF key index=107
Local runtime password file=/data/ccos/tde_sdf.password
```

如果数据库操作系统用户或数据目录尚未准备好，可以先只导入KEK，待环境就绪后再执行带本地文件选项的import-backup：

```
# /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so import-backup \
  --backup-file /data/ccos/kek-backup.json
SDF KEK password:
Verified local SM4 KEK against the source-node verification record.
SDF key index=107
```

命令执行成功返回0，失败时返回1，并在标准错误输出以"gs_tde_sdf:"开头打印错误信息。
