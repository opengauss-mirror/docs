# SQLServer全量迁移

## oG_datasync_full_migration工具介绍

oG_datasync_full_migration是一个用Java编写的SQLServer到openGauss的离线迁移工具。该工具提供了全量数据、对象的复制。全量数据复制采用多表并行复制，
全量对象支持表、约束、索引、外键、视图、函数、触发器、存储过程和序列的复制。

## 注意事项

### 一般性限制

- 工具支持的SQLServer版本为2016+，openGauss版本为7.0.0+
- 创建openGauss迁移库时需要指定编码格式与SQLServer一致
- 列存储索引、全文索引、xml索引、包含列索引以及索引的填充因子暂不支持迁移
- time、datetime2、datetimeoffset在SQL Server中精度默认为7，openGauss仅支持0-6，通过配置文件的isTimeMigrate参数控制是否接受精度损失
- SQL Server中money和smallmoney数据类型精确到它们所代表的货币单位的万分之一，openGauss的money类型精确到它们所代表的货币单位的百分之一，该参数控制是否迁移货币类型
- 表和列的注释暂不支持迁移
- 几何类型（geometry和geography）暂不支持迁移
- SQL Server的real（4字节）精度约为7位十进制数字，float（8字节）类型约为15~16位十进制数字，openGauss分别为6位和15位，迁移前后可能有有微小差别
- 由于SQL Server分区表底层均基于Range分区实现，所以目前迁移到openGauss均为Range类型
- 视图、函数、触发器和存储过程目前仅支持迁移流程，迁移成功还需语法兼容

### 对象迁移限制

- 由于内核兼容性在持续增强，对象迁移采用先透传再翻译的原则进行，即先直接透传对象创建语句在openGauss端执行，若执行失败，再借助开源三方件druid进行翻译。

## 使用指南

### 安装方法

安装包下载地址：<https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/full-oG_datasync_full_migration-7.0.0rc2.tar.gz>
其中7.0.0rc2表示当前版本号。
下载完成后，解压压缩包

```
tar -zxvf oG_datasync_full_migration-7.0.0rc2.tar.gz
```

解压后的oG_datasync_full_migration文件夹中有一个config文件夹以及一个jar包，config文件夹下存储配置文件模板。

### 配置文件说明

配置文件使用yaml文件规则配置，需要特别注意对齐，缩进表示层级关系，缩进时不允许使用Tab键，只允许使用空格，缩进的空格数目不重要，但相同层级的元素左侧需要对齐。

```
# global settings
# 是否记录进度
isDumpJson: true
# 是否删除迁移成功的csv文件
isDeleteCsv: true
# 是否保留原有schema
isKeepExistingSchema: false
# 目标端数据库配置
ogConn:
host: "192.168.0.2"
port: 5432
user: "username"
password: "password"
database: "database"
charset: "utf8"
params:
sourceConfig:
# 查询表的线程数
readerNum: 4
# 写表的线程数
writerNum: 4
# 全量数据文件大小划分配置，支持K、M、G大小配置，没有单位默认按照M单位处理，默认值为 2M
fileSize: 2M
# 源端数据库连接信息
dbConn:
host: "192.168.0.1"
port: "1433"
user: "username"
password: "password"
database: "database"
charset: 'utf8'
connectTimeout: 10
# schema映射关系
schemaMappings:
test: ogtest
# 复制表白名单，不配置则复制所有表
limitTables:
- test.Students
# 复制表黑名单
skipTables:
# 目标端建表添加with(segment=on)选项；opengauss迁移至openGauss时，源端表有with(segment=on)，迁移时会默认添加
addSegmentTables:
csvDir: /**/**
# sqlserver中time,datetime2和datetimeoffset类型精度为0-7，openGauss中对应类型精度为0-6，可能会有精度损失，该参数控制是否迁移这三种类型
isTimeMigrate: true
# sqlserver中money和smallmoney数据类型精确到它们所代表的货币单位的万分之一，openGauss的money类型精确到它们所代表的货币单位的百分之一，该参数控制是否迁移货币类型
isMoneyMigrate: true
# 是否迁移源库的默认值到openGauss
isMigrateDefaultValue: Yes
# 是否记录快照
isRecordSnapshot: No
```

### 迁移命令

- 迁移表

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start table --source sqlserver --config /**/**/config.yml`

- 迁移主键

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start primarykey --source sqlserver --config /**/**/config.yml`

- 迁移外键

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start foreignkey --source sqlserver --config /**/**/config.yml`

- 迁移索引

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start index --source sqlserver --config /**/**/config.yml`

- 迁移视图

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start view --source sqlserver --config /**/**/config.yml`

- 迁移函数

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start function --source sqlserver --config /**/**/config.yml`

- 迁移触发器

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start trigger --source sqlserver --config /**/**/config.yml`

- 迁移存储过程

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start procedure --source sqlserver --config /**/**/config.yml`

- 迁移序列

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start sequence --source sqlserver --config /**/**/config.yml`

## 默认的类型转换规则

### 列类型转换

| SQL Server       | openGauss                      | 备注                                                                    |
|:-----------------|:-------------------------------|:----------------------------------------------------------------------|
| tinyint          | tinyint                        | 兼容                                                                    |
| smallint         | smallint                       | 兼容                                                                    |
| int              | int                            | 兼容                                                                    |
| bigint           | bigint                         | 兼容                                                                    |
| bit              | boolean                        | 兼容                                                                    |
| decimal          | decimal                        | 兼容                                                                    |
| numeric          | numeric                        | 兼容                                                                    |
| money            | money                          | 兼容                                                                    |
| smallmoney       | money                          | 兼容                                                                    |
| float            | float                          | 兼容，float(24)会以real类型迁移                                                |
| real             | real                           | 兼容，相当于float(24)                                                       |
| double precision | float                          | 兼容，相当于float(53)                                                       |
| char             | char                           | 兼容                                                                    |
| varchar          | varchar                        | 兼容                                                                    |
| nchar            | nchar                          | 兼容                                                                    |
| nvarchar         | nvarchar                       | 兼容                                                                    |
| ntext            | text                           | 兼容                                                                    |
| binary           | bytea                          | 兼容，bytea不指定长度，最大为1GB-8203字节                                           |
| varbinary        | bytea                          | 兼容，bytea不指定长度，最大为1GB-8203字节                                           |
| image            | text                           | 暂未支持longtext类型，后续兼容性适配，超范围的文本会报错                                      |
| text             | text                           | 暂未支持longtext类型，后续兼容性适配，超范围的文本会报错                                      |
| date             | date                           | 兼容                                                                    |
| datetime         | timestamp                      | 兼容                                                                    |
| smalldatetime    | timestamp                      | 兼容                                                                    |
| time             | time[(p)][without time zone]   | SQL Server精度0-7，默认7，openGauss仅支持0-6，通过配置文件的isTimeMigrate参数控制是否接受精度损失  |
| datetime2        | timestamp                      | SQL Server精度0-7，默认7，openGauss仅支持0-6，通过配置文件的isTimeMigrate参数控制是否接受精度损失  |
| datetimeoffset   | timestamp[(p)][with time zone] | SQL Server精度0-7，默认7，openGauss仅支持0-6，通过配置文件的isTimeMigrate参数控制是否接受精度损失  |
| hierarchyid      | nvarchar(4000)                 | 不兼容                                                                   |
| json             | jsonb                          | SQLServer的json类型底层为nvarchar                                           |
| rowversion       | timestamp                      | jdbc查询该类型为timestamp                                                   |
| sql_variant      |                                | 暂不支持，后续兼容性适配                                                          |
| uniqueidentifier | uuid                           | 兼容                                                                    |
| xml              | xml                            | 兼容                                                                    |

### 索引类型转换

| SQL Server          | openGauss    | 备注             |
|:--------------------|:-------------|:---------------|
| Clustered Index     | B-tree Index | 待兼容性支持         |
| Non-Clustered Index | B-tree Index | 待兼容性支持         |
| Unique Index        | Unique Index | 待兼容性支持         |
| Full-Text Index     |              | 不兼容            |
| Spatial Index       | Gist Index   | 兼容             |
| XML Index           |              | 不兼容            |
| Filtered Index      | 索引including列 | 仅Ustore类型数据库支持 |
