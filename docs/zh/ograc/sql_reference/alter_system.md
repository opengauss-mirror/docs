# ALTER SYSTEM

#### 功能描述

修改数据库系统参数或执行特定的系统级操作。

#### 注意事项

执行该语句需要拥有 ALTER SYSTEM 系统权限。

#### 语法格式

ALTER SYSTEM

 { DUMP DATAFILE file_id PAGE page_id

 | SWITCH LOGFILE

 | SET parameter_name = parameter_value [ SCOPE = { MEMORY | PFILE | BOTH } ]

 | LOAD DICTIONARY FOR [ schema_name.]object_name

 | INIT DICTIONARY | RELOAD {HBA | PBL} CONFIG

 | REFRESH SYSDBA PRIVILEGE

 | KILL SESSION 'session_id,serial'

 | RESET STATISTIC | CHECKPOINT

 |{ ADD | DELETE } LSNR_ADDR LISTENING_IP

 |{ ADD | DELETE } HBA ENTRY hba_conf_entry

 | FLUSH {BUFFER | SQLPOOL}

 | DUMP CTRLFILE

 | DEBUG MODE debug_parameter_name = debug_parameter_value

 | DUMP CATALOG { TABLE table_name | USER user_name } [ TO 'folders' ]

 | RECYCLE SHAREDPOOL [FORCE]

 | REPAIR CATALOG }

#### 参数说明

- **DUMP DATAFILE** ***file_id*** **PAGE** ***page_id***

导出指定数据文件的特定页。

- ***file_id***

文件编号，取值范围[0, 2147483648)。可通过查询DBA视图ADM_DATA_FILES中的FILE_ID字段获取。

- ***page_id***

页编号，取值范围[1, 2147483648)，正整数，必须小于文件使用页数的高水位线。

高水位线可通过查询动态性能视图DV_DATA_FILES的HIGH_WATER_MARK字段获取。

- **SWITCH LOGFILE**

切换当前日志文件。

- **SET** ***parameter_name*** **=** ***parameter_value*** **[ SCOPE = { MEMORY | PFILE | BOTH } ]**

修改系统参数。SCOPE指定为PFILE和BOTH时，参数将被保存在Zenith.ini配置文件中。`SCOPE` 定义生效范围：  
• **MEMORY**：仅内存生效，重启失效 。只适用于动态参数，不允许静态参数使用此模式设置。
• **PFILE**：仅写入配置文件，重启生效  。动态参数与静态参数都一样可以。也是静态参数唯一可以使用的方式。
• **BOTH**：既写入到初始化参数文件，也在内存上修改，立即生效。同样也只适用于动态参数，静态参数则不允许。（默认）

- LOAD DICTIONARY FOR [*****schema_name*****].*****object_name***

加载对象到数字字典中。

- **INIT DICTIONARY**

加载除系统表以外的entry（系统视图，动态视图，sequence，role等）。

前提：进入restricted模式，且确保已经通过“ALTER SYSTEM LOAD DICTIONARY FOR [schema_name].object_name;”加载所有系统表。

- **RELOAD {HBA | PBL} CONFIG**

在线加载oghba.conf文件，使白名单配置生效。

在线加载pbl.conf文件，使弱口令配置生效。

- **REFRESH SYSDBA PRIVILEGE**

在线刷新 sysdba 免密登录的密文和加密密钥。不影响已连接客户端，新连接将使用新密钥。

- **KILL SESSION** ***'******session_id******,******serial******'***

kill会话，session_id是会话ID，serial是序列号ID。

- **RESET STATISTIC**

清空动态视图DV_SYS_STATS的计数。

- **CHECKPOINT**

为当前实例执行检查点，确保已提交事务的所有更改写入磁盘。

- **{ ADD | DELETE } LSNR_ADDR** ***LISTENING_IP***

要增/删的监听 IP 地址（需引号包裹）。当前 最多支持 8 个监听 IP。

增加一个不存在网卡IP地址作为浮动监听IP时，直接返回报错。

**注意**：删除正在使用的 IP 会导致相关连接中断并回滚事务。

- **{ ADD | DELETE } HBA ENTRY** ***hba_conf_entry***

向用户白名单文件oghba.conf中增加或删除一条用户白名单。

- ***hba_conf_entry***

格式为'type user address'，参数说明请参考表1。

| 参数                                                      | 描述                       | 备注                                                                                                         |
| ------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| type                                                    | 建立连接的类型。                 | 连接类型：                                                                                                      |
| <br/>- host：普通 TCP 或 SSL 连接。                            |                          |                                                                                                            |
| <br/>- hostssl：仅 SSL 连接（若服务端开启 SSL 而客户端未配置，则拒绝连接）。      |                          |                                                                                                            |
| user                                                    | 允许访问数据库的指定用户。            | * 表示所有用户。<br/>若用户名含特殊字符（如 #、*、TAB），需用双引号包裹，如 "#abc"。单行仅能指定一个用户。                                            |
| address                                                 | 允许访问的 IP 地址范围（支持逗号分隔多个）。 | IP地址支持IPV4、IPV6地址、或指定子网掩码长度表示一个子网网段。支持格式：<br/><br/>- IPv4/IPv6 单地址：192.168.1.111、20AB::9217:acff:feab:fcd0 |
| <br/>- 子网掩码：192.168.2.0/24、20CD::2654:addf:3ab2:fed0/64 |                          |                                                                                                            |
| <br/>- 全网段：*.*.*.* 或 0.0.0.0/0                          |                          |                                                                                                            |

- **FLUSH BUFFER**

清空数据库缓存数据。

- **FLUSH SQLPOOL**

清空SQL池缓存数据。

- **DUMP CTRLFILE**

导出控制文件信息。

- **DEBUG MODE** ***debug_parameter_name*** **=** ***debug_parameter_value***

调试参数名（仅限开发使用，用户禁止修改，否则会造成数据库异常）。立即生效，所有debug参数不会写入配置文件，仅保存在内存中，重启后可还原。

调试参数仅限开发调试使用，用户禁止修改，否则会造成数据库异常。

    DUMP CATALOG TABLE *table_name*

    导出指定表的数据字典内存信息及关联索引信息。

    DUMP CATALOG USER *user_name*

    导出指定用户的数据字典内存信息。

    [ TO '*folder*s']

    指定dump输出目录（默认存放于 `trc` 文件夹）。

    导出文件上限为 10 MB，超过10M则报错，需将文件删除后SYS 用户可导出所有用户信息；普通用户仅可导出自身信息；DBA 用户可导出普通用户和其他 DBA 用户信息。重新进行DUMP操作。

    SYS用户可以DUMP所有用户的信息；普通用户只可以DUMP自己的信息；DBA用户可以DUMP普通用户和其他DBA用户下的信息。

- **RECYCLE SHAREDPOOL [FORCE]**

回收DC POOL/SQL POOL到共享区。

FORCE表示会强制把SQL POOL里面所有软解析标志为FALSE。

- **REPAIR CATALOG**

修复核心系统表列定义不一致的场景（如升级后二进制记录与 data 中表结构不符）。

#### 示例

- dump数据文件的指定页。

```
--删除表空间
DROP TABLESPACE IF EXISTS test_space;
```

```
--创建表空间
CREATE TABLESPACE video_space DATAFILE 'test_dfile1' SIZE 32M;
```

```
--查询FILE_ID
SELECT FILE_NAME,FILE_ID FROM ADM_DATA_FILES WHERE FILE_NAME='/opt/ograc/data/data/test_dfile1';
```

```
--查询数据文件的高水位线
SELECT * FROM DV_DATA_FILES WHERE FILE_NAME='/opt/ograc/data/data/test_dfile1';
```

```
--导出数据文件第一页（假设 FILE_ID=17）
ALTER SYSTEM DUMP datafile 17 PAGE 1;
```

切换日志文件。

```
ALTER SYSTEM SWITCH LOGFILE;
```

- 修改参数UNDO_RETENTION_TIME的值为1200秒，只在内存上修改（立即生效，重启失效）。

```
--查询当前值
SHOW PARAMETER UNDO_RETENTION_TIME;
```

```
--修改值
ALTER SYSTEM SET UNDO_RETENTION_TIME=1200 SCOPE=MEMORY;
```

- 加载表到数据字典中。

```
--删除表education。
DROP TABLE IF EXISTS education;
--创建表education。
CREATE TABLE education(staff_id INT, highest_degree CHAR(8) NOT NULL, graduate_school VARCHAR(64), graduate_date DATETIME, education_note VARCHAR(70));
--加载表education到数据字典中。
ALTER SYSTEM LOAD DICTIONARY FOR education;
```

- 加载除系统表以外的其余类型entry（系统视图，动态视图，sequence，role等）。

前提：已进入 restricted 模式并确保所有系统表已经通过ALTER SYSTEM LOAD DICTIONARY FOR [schema_name].object_name 语句加载后。

```
ALTER SYSTEM INIT DICTIONARY;
```

- 在线加载oghba.conf文件。

```
ALTER SYSTEM RELOAD HBA CONFIG;
```

- 增加监听IP地址。

```
ALTER SYSTEM ADD LSNR_ADDR '10.10.10.11';
```

- 删除监听IP地址。
  
  ```
  ALTER SYSTEM DELETE LSNR_ADDR '10.10.10.11';
  ```

- 刷新sysdba免密登录的密文、加密密钥。
  
  ```
  ALTER SYSTEM REFRESH SYSDBA PRIVILEGE;
  ```

- 清理动态视图DV_SYS_STATS统计信息。
  
  ```
  ALTER SYSTEM RESET STATISTIC;
  ```

- 为当前事务设置检查点。
  
  ```
  ALTER SYSTEM CHECKPOINT;
  ```

- 清空缓存数据。
  
  清空数据库缓存数据。

```
ALTER SYSTEM FLUSH BUFFER;
```

        清空SQL池缓存数据。

```
ALTER SYSTEM FLUSH SQLPOOL;
```

- 导出控制文件信息。
  
  ```
  ALTER SYSTEM DUMP CTRLFILE;
  ```

- 修改数据库调试参数。
  
  ```
  ALTER SYSTEM DEBUG MODE _MRP_RES_LOGSIZE = 1G;
  ```

- 导出数据字典信息。

```
ALTER SYSTEM DUMP CATALOG TABLE TEST;
ALTER SYSTEM DUMP CATALOG USER TEST;
```

- 
