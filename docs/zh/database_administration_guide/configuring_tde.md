---
description: 本文介绍 openGauss 设置透明数据加密（TDE） 的相关内容，涵盖 概述、前提条件 等内容。
keywords: [openGauss, 设置透明数据加密（TDE）, 数据库管理, 概述, 前提条件]
---

# 设置透明数据加密（TDE）

## 概述<a name="section1326254143019"></a>

透明数据加密（Transparent Data Encryption），是数据库在将数据写入存储介质时对数据进行加密，从存储介质中读取数据时自动解密，防止攻击者绕过数据库认证机制直接读取数据文件中的数据，以解决静态数据泄露问题。该功能对于应用层几乎透明无感知，用户可根据需要决定是否启用透明数据加密功能。

openGauss支持两种密钥管理方式，通过GUC参数tde\_key\_provider选择：

- KMS方式（默认）：对接华为云KMS服务，由KMS托管根密钥和主密钥。
- 内生国密方式（SDF）：通过GM/T 0018标准的SDF接口调用服务器内置的国密密码模块（鲲鹏TEE），由密码模块保护密钥并执行SM4运算，无需外置加密卡，也无需对接外部KMS。

内生国密方式的特性说明和约束请参考[透明数据加密支持内生国密](../characteristic_description/resource_pooling_transparent_data_encryption.md)。

## 前提条件<a name="section756657103117"></a>

通用前提条件：

- 需要将GUC参数[enable\_tde](../database_reference/security_configuration.md#section17961238192110)设置为on，开启数据库透明数据加密开关。

使用KMS方式时：

- 需要由密钥管理服务KMS对数据加密密钥提供保护，数据库可以正常访问KMS服务。KMS服务可在[华为云数据加密服务DEW](https://www.huaweicloud.com/product/dew.html)申请开通。
- 需要正确设置数据库实例主密钥ID参数[tde\_cmk\_id](../database_reference/security_configuration.md#section4132027193410)。

使用内生国密（SDF）方式时：

- 仅支持资源池化部署。
- 服务器需要具备内置国密密码模块和TEE运行环境，并已安装符合GM/T 0018标准的SDF动态库（鲲鹏BoostKit的libsdf.so），该库需要提供ECM密钥管理扩展接口。
- 需要以root用户使用gs\_tde\_sdf工具提前完成主密钥（SM4 KEK）的创建与分发。数据库不会自动创建或导入KEK。
- 每个数据节点都需要本地保存SDF配置文件、加密后的KEK访问口令文件及其.key伴随文件，并保证数据库操作系统用户可读、密码模块设备可访问。
- gs\_tde\_sdf工具依赖Python 3和系统OpenSSL的libcrypto库。

## 背景信息<a name="section1049011225714"></a>

透明数据加密支持表级密钥存储，实现对行存表加密。两种密钥管理方式共同遵循以下约束：

- 支持heap存储行存表加密。
- 不支持列存表加密，不支持物化视图加密，不支持Ustore存储引擎加密。
- 不支持索引和Sequence加密，不支持XLOG日志加密，不支持MOT内存表加密，不支持系统表加密。
- 不支持TOAST表加密。表级加密只覆盖主表堆页面的元组数据区，大字段实际存放在TOAST表中时不受该表的加密设置保护。
- 如果在创建表时未开启加密功能或指定加密算法，后续无法再切换为加密表。
- 对于已分配加密密钥的表，切换表的加密和非加密状态，不会更换密钥和加密算法。
- 数据密钥轮转只有开启表加密功能时才支持轮转。
- 关闭enable\_tde后，禁止创建新的加密表；对已加密页面的写入会被拒绝，且关闭开关不会解密已有数据。
- 加密表的查询性能比不加密时会有所劣化，对于性能有较高要求的情况下需谨慎开启加密功能。

使用KMS方式时，还需要遵循以下约束：

- 用户在创建表时可以指定加密算法，加密算法一旦指定不可更改。如果创建表时设置enable\_tde为on，但是不指定加密算法encrypt\_algo，则默认使用AES\_128\_CTR加密算法。
- 不支持单数据库实例跨region的多副本主备同步，不支持单数据库实例跨region的扩容，不支持跨region的备份恢复、数据库实例容灾和数据迁移场景。
- 混合云场景如果使用华为云KMS和管控面功能，则可以支持透明数据加密，其他KMS服务如果接口不兼容则无法支持。

使用内生国密（SDF）方式时，还需要遵循以下约束：

- 仅支持SM4\_CTR加密算法，默认使用SM4\_CTR。
- 每个集群使用一个固定的KEK槽位（取值范围1～1000），所有数据节点必须导入同一个KEK并使用相同槽位。部署后不得更换KEK、槽位或用其他KEK覆盖同名槽位，否则已加密数据无法解密。
- KMS方式与SDF方式不能混用，修改tde\_key\_provider不会迁移已有加密数据。

## 密钥管理机制<a name="section920142711513"></a>

透明数据加密功能中数据的加密和解密都依赖于安全可靠的密钥管理机制。本功能采用三层密钥结构实现密钥管理机制，即根密钥（RK）、主密钥（CMK）和数据加密密钥（DEK）。主密钥由根密钥加密保护，数据加密密钥由主密钥加密保护。数据加密密钥用于对用户数据进行加密和解密，每个表对应一个数据加密密钥。

KMS方式下，根密钥和主密钥保存在KMS服务中，数据加密密钥通过向KMS服务申请创建，创建成功可同时返回密钥明文和密文。数据加密密钥明文在内存中会使用hash表进行缓存减少访问KMS频次以提升性能，密钥明文只存在内存中使用不会落盘，并且支持自动淘汰机制删除不常使用的密钥明文，只保存最近1天内使用的密钥明文。数据加密密钥密文保存在数据库中并落盘持久化。对用户表数据加解密时，如果内存中没有对应密钥明文则需向KMS申请对数据密钥解密后再使用。

内生国密（SDF）方式下，根密钥由TEE/密码模块内部的硬件根密钥承担，不出设备也不可导出，数据库不感知也不管理；主密钥为gs\_tde\_sdf在密码模块槽位内创建的SM4 KEK（即CMK），由根密钥保护，数据库使用预先配置的访问口令申请其访问权限。KEK槽位被编码为主密钥ID（形如00000000-0000-0000-0000-00000000006a的UUID文本，最后12位十六进制数为槽位号），用于复用原有的CMK字段和页面、WAL格式。数据加密密钥由主密钥（KEK）在密码模块内封装保护，数据库只保存DEK密文信封和DEK句柄，不接触DEK明文。DEK密文信封包含被主密钥封装的DEK、用于认证信封的封装密钥以及HMAC-SM3校验值，在首次导入某个信封时校验。数据库启动时打开密码设备并建立一个常驻的共享会话，完成KEK授权和SM4-CTR自检；运行期按"主密钥ID+DEK密文信封"缓存DEK句柄，缓存满时按CLOCK策略淘汰，淘汰只释放模块内句柄，不删除持久化的信封。gs\_tde\_sdf创建的是主密钥（KEK），根密钥由TEE硬件提供，数据库和工具都不接触根密钥。

## 表级加密方案<a name="section8693143685716"></a>

允许用户在创建表时指定是否对表进行加密和使用的加密算法，加密算法支持AES\_128\_CTR和SM4\_CTR两种算法（SDF方式仅支持SM4\_CTR），算法一旦指定不可更改。对于创建表时指定为加密的表，数据库会自动为该表申请创建数据加密密钥，并将加密算法、密钥密文和对应主密钥ID等参数使用"keyword=value"格式保存在pg\_class系统表中的reloptions字段中。

对于加密表，允许用户切换表的加密状态，即将加密表切换为非加密表，或将非加密表切换为加密表。如果在创建表时未使能加密功能，后续无法再切换为加密表。

对于加密表，支持数据加密密钥轮转。密钥轮转后，使用旧密钥加密的数据仍使用旧密钥解密，新写入的数据使用新密钥加密。密钥轮转时不更换加密算法。SDF方式下轮转生成的DEK仍由同一个主密钥（KEK）保护。

对于行存表，每次加解密的最小数据单元为一个8K大小的page页面，每次对page页面加密时会通过安全随机数接口生成IV值，并将IV值和密钥密文、主密钥ID等信息保存在页面中一起写入存储介质。SDF方式下，页面尾部保存的是DEK密文信封、IV和算法标识，DEK明文始终不出密码模块。对于加密表由于page页面中需要保存加密密钥信息，相比不加密时占用存储空间膨胀约2.5%。

## 配置内生国密（SDF）方式<a name="section_sdf_tde_config"></a>

下面以槽位107、数据库安装目录/data/ccos/install/app、数据目录/data/ccos/install/data/dn、数据库操作系统用户ccos为例，说明SDF方式的配置步骤。实际使用时请替换为规划好的槽位、路径和用户。

### 步骤1：创建主密钥（KEK）并生成本地文件<a name="section_sdf_create_backup"></a>

在任意一个数据节点上，以root用户确认目标槽位未被占用：

```
# /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so query-key \
  --key-index 107
Local SM4 KEK slot 107: empty (available).
```

如果输出为"occupied (key already exists)"，表示该槽位已被占用，需要选择其他槽位；槽位被占用并不代表其中就是期望的KEK，请勿直接复用。

选择一个未占用的槽位创建KEK，导出受保护备份，并生成该节点的KEK访问口令文件和SDF配置文件：

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

该命令会提示输入KEK访问口令（8～128字节，不能包含NUL、回车和换行），在密码模块内创建SM4 KEK，并生成受保护的备份文件。备份文件包含槽位、受保护的密钥备份、盐值、验证挑战和完整性校验值，请妥善保管，用于节点替换或灾难恢复。

该命令还会：

- 将KEK访问口令使用OpenSSL AES-256-GCM加密后保存到指定的口令文件，并在同一路径追加.key后缀保存随机生成的32字节保护密钥。两个文件均属主为指定数据库用户、权限为0600。已存在且内容一致的密钥对会被复用，内容不一致会被拒绝。
- 在指定路径生成sdf\_info.json，属主为数据库用户、权限为0600。

生成的sdf\_info.json内容如下：

```json
{
  "kek_index": 107,
  "library_path": "/usr/lib64/libsdf.so",
  "password_file": "/data/ccos/tde_sdf.password"
}
```

三个字段均为必填项，不能增加版本号或其他字段，也不能有重复字段和多余内容。kek\_index为1～1000的整数，路径必须为绝对路径。文件必须是普通文件，属主为数据库操作系统用户，权限为0600，大小小于4096字节。数据目录以实例实际的数据目录为准，工具不会通过环境变量推断。

如果SDF动态库不在默认路径，请在执行工具时通过`--library`指定，例如`--library /opt/boostkit/libsdf.so`。

> [!NOTE]说明
> - 执行前需要先由数据库用户在数据目录下创建tde\_config目录，例如`mkdir -p /data/ccos/install/data/dn/tde_config`，并确保备份文件、口令文件所在目录已存在。
> - 如果数据库操作系统用户或数据目录尚未准备好，可以先只执行不带--runtime-password-file、--database-user和--emit-config的create-backup命令完成KEK创建，待环境就绪后再执行一次带这些选项的import-backup生成本地文件。
> - --emit-config要求--runtime-password-file和--database-user同时指定，且--library和口令文件必须使用绝对路径。
> - 目标文件已存在且内容不同时工具不会覆盖；如发布过程被中断，请先检查口令文件、.key文件和配置文件再重试。

> [!WARNING]注意
> - 备份文件发布前失败时，工具会尝试删除本次新建的KEK；一旦开始发布备份，发生错误或中断（包括Ctrl+C）会保留KEK并提示检查备份文件和密钥槽位。如果无法确认发布状态，请先检查两者再重试。
> - 不要删除或替换已投入使用的KEK，也不要在同一槽位创建不相关的新KEK，否则已加密数据无法解密。

### 步骤2：在其他数据节点导入KEK并生成本地文件<a name="section_sdf_import_backup"></a>

将备份文件通过安全的文件传输方式分发到集群内所有其他数据节点，在每个节点上以root用户执行。导入不需要指定槽位，槽位由备份文件决定：

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

导入总是使用备份文件中记录的槽位，不支持指定其他槽位，也不会覆盖已占用的槽位。工具会使用输入的口令授权KEK，并通过解密源节点的验证挑战来确认KEK一致；仅槽位相同不能证明KEK相同。重复执行导入会对已有KEK进行校验，是安全的。口令文件、.key文件和sdf\_info.json的生成规则与步骤1相同。

### 步骤3：设置GUC参数并重启数据库<a name="section_sdf_set_guc"></a>

在所有数据节点上设置透明数据加密开关和密钥管理方式：

```
gs_guc set -Z datanode -N all -I all -c "enable_tde=on" -c "tde_key_provider=sdf"
```

`enable_tde`和`tde_key_provider`均为POSTMASTER类型参数，设置后需要重启数据库生效：

```
gs_om -t restart
```

> [!WARNING]注意
> - SDF方式仅支持资源池化部署。请勿在未开启DMS和DSS的节点（例如纯CN节点）上设置`tde_key_provider=sdf`，否则该实例会启动失败。
> - 修改tde\_key\_provider不会迁移已有加密数据。已经使用KMS方式加密的表必须继续使用KMS方式访问。

### 步骤4：验证<a name="section_sdf_verify"></a>

数据库启动后，确认参数已生效：

```
openGauss=# SHOW tde_key_provider;
 tde_key_provider
------------------
 sdf
(1 row)
```

创建加密表并验证读写：

```
openGauss=# CREATE TABLE tde_sdf_test (a int, b text) WITH (enable_tde = on, encrypt_algo = 'SM4_CTR');
openGauss=# INSERT INTO tde_sdf_test VALUES (1, 'sdf tde');
openGauss=# SELECT * FROM tde_sdf_test;
 a |    b
---+---------
 1 | sdf tde
(1 row)
```

重启数据库后再次查询该表，确认数据可以正常解密。如果数据库启动失败，请根据错误信息检查以下内容：

- 错误信息包含"could not initialize SDF TDE provider"时，检查sdf\_info.json的三个字段、文件权限和所属用户，以及SDF动态库路径和密码模块是否可用。
- 错误信息包含"SDF TDE requires resource pooling with DMS and DSS enabled"时，确认已同时开启ss\_enable\_dms和ss\_enable\_dss。
- 错误信息包含"MAC verification failed"或KEK授权失败时，确认该节点导入的是同一个KEK、口令正确且槽位一致。


## 创建加密表<a name="section178015477237"></a>

登录数据库，创建加密表tde\_test1，加密状态为开启，指定加密算法为AES\_128\_CTR（KMS方式）：

```
openGauss=# CREATE TABLE tde_test (a int, b text) with (enable_tde = on, encrypt_algo = 'AES_128_CTR');
```

创建加密表tde\_test2，加密状态为开启，不指定加密算法，则KMS方式下加密算法默认为AES\_128\_CTR：

```
openGauss=# CREATE TABLE tde_test2 (a int, b text) with (enable_tde = on);
```

创建加密表tde\_test3，加密状态为关闭，指定加密算法为SM4\_CTR：

```
openGauss=# CREATE TABLE tde_test3 (a int, b text) with (enable_tde = off, encrypt_algo = 'SM4_CTR');
```

SDF方式下创建加密表时只能使用SM4\_CTR，不指定加密算法时默认使用SM4\_CTR：

```
openGauss=# CREATE TABLE tde_test4 (a int, b text) with (enable_tde = on, encrypt_algo = 'SM4_CTR');
```

## 切换加密表加密开关<a name="section1287104795218"></a>

登录数据库，将加密表tde\_test1的加密开关置为off：

```
openGauss=# ALTER TABLE tde_test1 SET (enable_tde=off);
```

将加密表tde\_test1的加密开关置为on：

```
openGauss=# ALTER TABLE tde_test1 SET (enable_tde=on);
```

## 对加密表进行密钥轮转<a name="section186955010234"></a>

登录数据库，对加密表tde\_test1进行密钥轮转：

```
openGauss=# ALTER TABLE tde_test1 ENCRYPTION KEY ROTATION;
```

SDF方式下，轮转生成的DEK仍由当前部署的主密钥（KEK）保护，主密钥本身不变；旧数据仍使用旧DEK解密。

## 备份与恢复<a name="section_sdf_backup"></a>

使用内生国密（SDF）方式时，除数据库数据备份外，还必须把以下节点本地文件纳入备份与恢复清单：

- 每个数据节点的tde\_config/sdf\_info.json。
- 每个数据节点的KEK访问口令文件及其.key伴随文件。
- 创建KEK时导出的受保护备份文件。

这些文件位于节点本地数据目录或本地受保护存储中，DSS共享存储快照不包含它们，不能仅依赖存储快照或只备份数据文件。

恢复或新增数据节点时，请按以下顺序操作：

1. 恢复数据库数据和实例目录。
2. 使用gs\_tde\_sdf导入原来的KEK备份，确认KEK校验通过。
3. 放置该节点的sdf\_info.json、口令文件和.key文件，确认属主和权限正确。
4. 启动数据库。

KMS方式与SDF方式之间不能通过修改配置迁移已有加密数据。如需更换密钥管理方式，需要将数据以明文重新导入新表后再加密，不能直接复用原有加密表。
