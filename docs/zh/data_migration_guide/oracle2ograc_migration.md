---
description: 本文介绍 openGauss Oracle 迁移 oGRAC 工具介绍 的相关内容，涵盖 目的、迁移前准备 等内容。
keywords: [openGauss, Oracle 迁移 oGRAC 工具介绍, 数据迁移, 目的, 迁移前准备]
---

#  Oracle 迁移 oGRAC 工具介绍
## 目的

本文旨在对openGauss-FullReplicate工具实现Oracle到oGRAC数据迁移流程进行介绍，指导用户如何完成工具安装、并使用工具完成数据迁移。该工具提供了从 Oracle 到 oGRAC 全量数据和对象的迁移能力，全量数据迁移采用多表并行迁移，全量对象支持表、约束、索引、外键、视图、函数、触发器、存储过程和序列的迁移。

## 迁移前准备
### 迁移注意事项
- 创建 oGRAC 目标端数据库时，需要指定数据库编码格式与源端一致,并确保源端与目标端时区一致性
- 要求Oracle版本为19
- 虚拟列（Virtual Column）在迁移时会自动过滤，不迁移到目标端
- 引用分区表（基于外键关系分区）暂不支持迁移
- 系统分区表（应用程序控制分区）暂不支持迁移
- 虚拟列分区表（基于虚拟列分区）暂不支持迁移
- 函数索引（Function-based Index）仅支持部分函数表达式
- 几何类型（geometry和geography）暂不支持迁移
- 视图、函数、触发器和存储过程目前仅支持迁移流程，迁移成功还需语法兼容
- 不支持oracle物化视图迁移(Materialized View)

### 更新Oracle表统计信息

为了确保迁移过程的效率和准确性，建议在迁移前执行以下操作：

1. **更新Oracle表统计信息**：执行以下命令更新指定schema的表统计信息，这将有助于DataX生成更优的执行计划：

   ```sql
   EXEC DBMS_STATS.GATHER_SCHEMA_STATS('YOUR_SCHEMA_NAME', cascade=>TRUE);
   SELECT table_name, num_rows, last_analyzed FROM user_tables;
   ```

   其中 `YOUR_SCHEMA_NAME` 是您要迁移的Oracle schema名称。

2. **检查表空间使用情况**：确保目标端oGRAC数据库有足够的表空间用于迁移操作。
### 迁移过程中部分临时文件说明
   迁移过程中，工具会记录迁移进度。迁移完成后，工具会在 `process/` 目录下生成多个JSON文件，记录各类对象的迁移进度和详情。

   **process/ 目录下的文件列表：**
   - `datax_table.json` - 表迁移进度
   - `primarykey.json` - 主键迁移进度
   - `foreignkey.json` - 外键迁移进度
   - `index.json` - 索引迁移进度
   - `constraint.json` - 约束迁移进度
   - `view.json` - 视图迁移进度
   - `function.json` - 函数迁移进度
   - `trigger.json` - 触发器迁移进度
   - `procedure.json` - 存储过程迁移进度
   - `sequence.json` - 序列迁移进度
   - `migration_error.log` - 迁移错误日志

   进度本身发生异常不影响整体迁移流程。另外migration_error.log 迁移错误日志不区分对象类型，所有对象迁移错误都会记录在该文件中。

## 安装方法

### 安装环境要求

由于工具使用Java编写，因此需要提前安装Java运行环境，版本要求Java 17+。

### 安装包下载

安装包下载地址：https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-FullReplicate-7.0.0-RC3.tar.gz
其中7.0.0-RC3表示当前版本号。

```bash
wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-FullReplicate-7.0.0-RC3.tar.gz
```

### 安装包解压

下载完成后，解压压缩包。

```
tar -zxvf openGauss-FullReplicate-7.0.0-RC3.tar.gz
```

解压后参考目录如下：

```text
openGauss-FullReplicate/
openGauss-FullReplicate/config/
openGauss-FullReplicate/config/config.yml
openGauss-FullReplicate/build_commit_id.log
openGauss-FullReplicate/openGauss-FullReplicate-7.0.0-RC3.jar
```

其中openGauss-FullReplicate-7.0.0-RC3.jar为工具的主程序，config文件夹下为配置文件模板。

## 配置文件说明
配置文件使用yaml文件规则配置，需要特别注意对齐，缩进表示层级关系，缩进时不允许使用Tab键，只允许使用空格，缩进的空格数目不重要，但相同层级的元素左侧需要对齐。
数据库用户名称使用大写用户名。

```yaml
# global settings
# 是否记录进度
isDumpJson: true
# 进度文件地址
statusDir: ./process
# 目标数据库类型，如：opengauss, ograc
targetType: ograc
# 目标端数据库配置
ogConn:
  host: "192.168.0.2"
  port: 1611
  # ograc 用户名 使用大写用户名
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
  # 线程队列容量
  threadQueueCapacity: 20000
  # 源端数据库连接信息
  dbConn:
    host: "192.168.0.1"
    port: "1521"
    # oracle 用户名 使用大写用户名
    user: "SCOTT"
    password: "password"
    database: "ORCL"
    charset: 'utf8'
    connectTimeout: 10
  # schema映射关系
  schemaMappings:
    SCOTT: ogtest
datax:
  dataxHome: datax
  enableKeepDataXTemporaryConfig: true
  enableOutputDataxLogs: false
```
### 配置参数详细信息

#### 全局配置参数

| 参数名         | 类型    | 必填 | 默认值 | 描述                                 |
| :------------- | :------ | :--- | :----- | :----------------------------------- |
| `isDumpJson`   | Boolean | 是   | -      | 是否记录进度                         |
| `statusDir`    | String  | 否   | -      | 进度文件地址                         |
| `targetType`   | String  | 否   | -      | 目标数据库类型，如：opengauss, ograc |
| `ogConn`       | Object  | 是   | -      | OGRAC数据库连接配置                  |
| `sourceConfig` | Object  | 是   | -      | 源数据库配置                         |
| `datax`        | Object  | 否   | -      | DataX配置                            |

#### 数据库连接配置 (DatabaseConfig)

| 参数名           | 类型    | 必填 | 默认值 | 描述               |
| :--------------- | :------ | :--- | :----- | :----------------- |
| `host`           | String  | 是   | -      | 数据库主机地址     |
| `port`           | Integer | 是   | -      | 数据库端口         |
| `user`           | String  | 是   | -      | 数据库用户名       |
| `password`       | String  | 是   | -      | 数据库密码         |
| `database`       | String  | 是   | -      | 数据库名称         |
| `charset`        | String  | 否   | -      | 字符集             |
| `connectTimeout` | Integer | 否   | -      | 连接超时时间（秒） |
| `params`         | Object  | 否   | -      | 其他连接参数       |

#### 源数据库配置 (SourceConfig)

| 参数名                | 类型    | 必填 | 默认值 | 描述               |
| :-------------------- | :------ | :--- | :----- | :----------------- |
| `readerNum`           | Integer | 是   | -      | 查询表的线程数     |
| `writerNum`           | Integer | 是   | -      | 写表的线程数       |
| `threadQueueCapacity` | Integer | 否   | -      | 线程队列容量       |
| `dbConn`              | Object  | 是   | -      | 源端数据库连接信息 |
| `schemaMappings`      | Object  | 是   | -      | schema映射关系     |

#### DataX配置 (DataXParamConfig)

| 参数名                           | 类型    | 必填 | 默认值 | 描述                  |
| :------------------------------- | :------ | :--- | :----- | :-------------------- |
| `dataxHome`                      | String  | 否   | -      | DataX主目录           |
| `readerName`                     | String  | 否   | -      | 读取器名称            |
| `writerName`                     | String  | 否   | -      | 写入器名称            |
| `channel`                        | Integer | 否   | -      | 通道数                |
| `errorRecordLimit`               | Integer | 否   | -      | 错误记录限制          |
| `errorPercentageLimit`           | Double  | 否   | -      | 错误百分比限制        |
| `readBatchSize`                  | Integer | 否   | -      | 读取批大小            |
| `readTimeout`                    | Integer | 否   | -      | 读取超时              |
| `writeBatchSize`                 | Integer | 否   | -      | 写入批大小            |
| `writeTimeout`                   | Integer | 否   | -      | 写入超时              |
| `enableBatchWrite`               | Boolean | 否   | -      | 是否启用批写入        |
| `enablePrepareStatement`         | Boolean | 否   | -      | 是否启用预处理语句    |
| `batchWriteSize`                 | Integer | 否   | -      | 批写入大小            |
| `retryTimes`                     | Integer | 否   | -      | 重试次数              |
| `retryInterval`                  | Integer | 否   | -      | 重试间隔              |
| `enableKeepDataXTemporaryConfig` | Boolean | 否   | false  | 是否保留DataX临时配置 |
| `enableOutputDataxLogs`          | Boolean | 否   | false  | 是否输出DataX日志     |

## 迁移命令

完成配置文件配置后，即可开始迁移，迁移命令参考如下：

其中， --start参数为迁移的对象类型，--source参数为源端数据库类型，支持oracle，--config参数为配置文件路径。

迁移命令不支持并行执行（同时执行表，索引等迁移命令）

```bash
# 迁移表
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start datax_table --source oracle --config /**/**/config.yml

# 迁移主键
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start primarykey --source oracle --config /**/**/config.yml

# 迁移外键
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start foreignkey --source oracle --config /**/**/config.yml

# 迁移索引
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start index --source oracle --config /**/**/config.yml

# 迁移约束
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start constraint --source oracle --config /**/**/config.yml

# 迁移视图
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start view --source oracle --config /**/**/config.yml

# 迁移函数
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start function --source oracle --config /**/**/config.yml

# 迁移触发器
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start trigger --source oracle --config /**/**/config.yml

# 迁移存储过程
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start procedure --source oracle --config /**/**/config.yml

# 迁移序列
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start sequence --source oracle --config /**/**/config.yml
```

## 默认的类型转换规则

### 列类型转换

| Oracle                            | oGRAC                             | 备注                                                 |
| :-------------------------------- | :-------------------------------- | :--------------------------------------------------- |
| **数值类型**                      |                                   |                                                      |
| NUMBER                            | NUMBER                            | 保持精度                                             |
| NUMBER                            | BIGINT                            | 自增类型                                             |
| NUMBER(p)                         | NUMBER(p)                         | 保持精度                                             |
| NUMBER(p,s)                       | NUMBER(p,s)                       | 保持精度和小数位                                     |
| FLOAT                             | DOUBLE PRECISION                  | 转换为DOUBLE PRECISION                               |
| FLOAT(n)                          | DECIMAL(38, 12)                   | 转换为DECIMAL(38, 12)                                |
| BINARY_FLOAT                      | BINARY_FLOAT                      | 类型名称一致                                         |
| BINARY_DOUBLE                     | BINARY_DOUBLE                     | 类型名称一致                                         |
| DOUBLE PRECISION                  | DOUBLE PRECISION                  | 类型名称一致                                         |
| **字符串类型**                    |                                   |                                                      |
| CHAR(n)                           | CHAR(n)                           | 保持长度，默认为BYTE                                 |
| CHAR(n CHAR)                      | CHAR(n CHAR)                      | 保持原类型，保持CHAR语义                             |
| VARCHAR2(n)                       | VARCHAR2(n BYTE)                  | 保持长度，默认为BYTE                                 |
| VARCHAR2(n CHAR)                  | VARCHAR2(n CHAR)                  | 保持CHAR语义                                         |
| NCHAR(n)                          | NCHAR(n)                          | 保持原样                                             |
| NVARCHAR2(n CHAR)                 | NVARCHAR2(n CHAR)                 | 保持原样                                             |
| CLOB                              | CLOB                              | 类型名称一致                                         |
| NCLOB                             | CLOB                              | 转换为CLOB                                           |
| **大对象类型**                    |                                   |                                                      |
| BLOB                              | BLOB                              | 类型名称一致                                         |
| NBLOB                             | BLOB                              | 转换为BLOB                                           |
| RAW(n)                            | RAW(n)                            | 保持原类型，包含长度信息                             |
| LONG RAW                          | BLOB                              | 转换为BLOB                                           |
| BFILE                             |                                   | 不兼容，抛出异常                                     |
| **日期时间类型**                  |                                   |                                                      |
| DATE                              | DATETIME                          | 类型转换                                             |
| TIMESTAMP                         | TIMESTAMP                         | 类型名称一致                                         |
| TIMESTAMP(p)                      | TIMESTAMP(p)                      | 当精度<=6时保持原类型                                |
| TIMESTAMP(p)                      | TIMESTAMP(6)                      | 当精度>6时转换为TIMESTAMP(6)                         |
| TIMESTAMP WITH TIME ZONE          | TIMESTAMP WITH TIME ZONE          | 类型名称一致                                         |
| TIMESTAMP(p) WITH TIME ZONE       | TIMESTAMP(p) WITH TIME ZONE       | 当精度<=6时保持原类型                                |
| TIMESTAMP(p) WITH TIME ZONE       | TIMESTAMP(6) WITH TIME ZONE       | 当精度>6时转换为TIMESTAMP(6) WITH TIME ZONE          |
| TIMESTAMP WITH LOCAL TIME ZONE    | TIMESTAMP WITH LOCAL TIME ZONE    | 类型名称一致                                         |
| TIMESTAMP(p) WITH LOCAL TIME ZONE | TIMESTAMP(p) WITH LOCAL TIME ZONE | 当精度<=6时保持原类型                                |
| TIMESTAMP(p) WITH LOCAL TIME ZONE | TIMESTAMP(6) WITH LOCAL TIME ZONE | 当精度>6时转换为TIMESTAMP(6) WITH LOCAL TIME ZONE    |
| INTERVAL YEAR TO MONTH            | INTERVAL YEAR TO MONTH            | 类型名称一致                                         |
| INTERVAL YEAR(n) TO MONTH         | INTERVAL YEAR(4) TO MONTH         | 当长度>4时转换为INTERVAL YEAR(4) TO MONTH            |
| INTERVAL DAY TO SECOND            | INTERVAL DAY TO SECOND            | 类型名称一致                                         |
| INTERVAL DAY(n) TO SECOND(m)      | INTERVAL DAY(n) TO SECOND(m)      | 当长度<=6且精度<=6时保持原类型                       |
| INTERVAL DAY(n) TO SECOND(m)      | INTERVAL DAY(6) TO SECOND(6)      | 当长度>6或精度>6时转换为INTERVAL DAY(6) TO SECOND(6) |
| **特殊类型**                      |                                   |                                                      |
| XMLTYPE                           | CLOB                               | 转换为CLOB                                           |
| JSON                              |                                   | 不兼容，抛出异常                                     |
| ANYDATA                           |                                   | 不兼容，抛出异常                                     |

### 索引类型转换

| Oracle               | oGRAC           | 备注                           |
| :------------------- | :-------------- | :----------------------------- |
| **标准索引**         |                 |                                |
| B-tree Index         | B-tree Index    | 完全兼容                       |
| Unique Index         | Unique Index    | 完全兼容                       |
| Non-Unique Index     | B-tree Index    | 完全兼容                       |
| **特殊索引**         |                 |                                |
| Reverse Key Index    | B-tree Index    | 完全兼容                       |
| Function-based Index | Function Index  | 部分兼容，仅支持特定函数       |
| Composite Index      | Composite Index | 完全兼容，复合索引最多支持16列 |
| Bitmap Index         | B-tree Index    | 转为普通索引                   |
| **不支持的索引**     |                 |                                |
| Full-Text Index      | -               | 不兼容，Oracle Text索引        |
| Domain Index         | -               | 不兼容，如CTXSYS.CONTEXT       |
| Spatial Index        | Gist Index      | 不兼容                         |
| XML Index            | -               | 不兼容                         |
| Filtered Index       | Partial Index   | 不兼容                         |


#### 函数索引支持的函数列表

oGRAC函数索引仅支持以下函数表达式：

| 函数名        | 说明               | 示例                                                   |
| :------------ | :----------------- | :----------------------------------------------------- |
| ABS           | 绝对值             | ABS(num_col)                                           |
| CHARTOROWID   | 字符串转ROWID      | CHARTOROWID(rowid_str_col)                             |
| DECODE        | 条件判断           | DECODE(int_col, 0, 'ZERO', 1, 'ONE', 'OTHER')          |
| LOWER         | 转小写             | LOWER(char_col)                                        |
| NVL           | 空值替换           | NVL(nullable_col, 0)                                   |
| NVL2          | 空值条件替换       | NVL2(nullable_col, 1, 0)                               |
| REGEXP_INSTR  | 正则表达式匹配位置 | REGEXP_INSTR(text_col, 'word')                         |
| REGEXP_SUBSTR | 正则表达式提取子串 | REGEXP_SUBSTR(text_col, '[a-zA-Z]+')                   |
| REVERSE       | 字符串反转         | REVERSE(char_col)                                      |
| SUBSTR        | 字符串截取         | SUBSTR(text_col, 1, 20)                                |
| SUBSTRB       | 字节截取           | SUBSTRB(text_col, 1, 20)                               |
| TO_CHAR       | 转字符串           | TO_CHAR(date_col)                                      |
| TO_DATE       | 转日期             | TO_DATE(TO_CHAR(date_col, 'yyyy-mm-dd'), 'yyyy-mm-dd') |
| TO_NUMBER     | 转数字             | TO_NUMBER(TO_CHAR(num_col))                            |
| TRIM          | 去除空格           | TRIM(text_col)                                         |
| TRUNC         | 数字截断           | TRUNC(num_col)                                         |
| TRUNC         | 日期截断           | TRUNC(date_col, 'yyyy')                                |
| UPPER         | 转大写             | UPPER(char_col)                                        |

#### 函数索引不支持的函数列表

oGRAC函数索引不支持以下函数表达式用法：

| 函数名                | 说明           | 原因             |
| :-------------------- | :------------- | :--------------- |
| `upper('constant')`   | 常量转大写     | 不支持常量表达式 |
| `nvl(c_text,c_test2)` | 多参数空值替换 | 暂不支持         |
| `upper(c_json_lob)`   | JSON LOB转大写 | 不支持LOB类型    |
| `nvm(c_arr,c_arr)`    | 数组空值替换   | 不支持数组类型   |

#### 主键迁移说明

##### 普通主键迁移
普通主键（非自增主键）直接迁移到oGRAC数据库，保持原有的数据类型和约束定义。

#####  Oracle自增主键迁移

Oracle的自增主键（IDENTITY列）迁移到oGRAC时遵循以下规则：

**数据类型转换：**
- Oracle `NUMBER` 类型的自增列 → oGRAC `BIGINT` 类型

**IDENTITY模式转换：**

| Oracle 定义                                                  | oGRAC 转换结果                                       | 说明                               |
| ------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------- |
| `colName NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY`    | `colName BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY` | ALWAYS模式转换为AUTO_INCREMENT     |
| `colName NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY` | `colName BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY` | BY DEFAULT模式转换为AUTO_INCREMENT |

**oGRAC自增键约束要求：**
- 自增列必须为整数类型（INT/BIGINT）
- 自增列必须定义为主键或唯一键

**类型对应关系：**
- oGRAC `SERIAL PRIMARY KEY` / `AUTO_INCREMENT NOT NULL PRIMARY KEY` → 对应 Oracle `GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY`

**注意事项：**
- oGRAC自增类型不支持Oracle的IDENTITY列ALWAYS模式，统一转换为`AUTO_INCREMENT`
- 自增列的起始值和步长等属性在迁移时会保留

####  分区表迁移 
   分区表迁移时，分区及子分区对应表空间会根据表空间名称进行映射。如果目标端存在同名表空间，则使用该表空间；若不存在同名表空间，系统会自动去除 TABLESPACE 子句，采用当前用户的默认表空间，无需手动创建分区对应表空间。
#### 中文编码与乱码问题处理

#####  编码要求

为确保中文数据正确迁移，源端Oracle和目标端oGRAC数据库必须满足以下编码要求：

| 数据库 | 编码要求      | 推荐字符集    |
| ------ | ------------- | ------------- |
| oGRAC  | 必须为UTF-8   | UTF-8（默认） |
| Oracle | 必须支持UTF-8 | AL32UTF8      |

#####  检查Oracle数据库字符集

执行以下SQL检查Oracle数据库字符集：

```sql
SELECT USERENV('language') FROM DUAL;
```

**预期输出**：
```
AMERICAN_AMERICA.AL32UTF8
```

AL32UTF8 是 Oracle 完整的 UTF-8 实现，支持所有 Unicode 字符。

#####  乱码问题排查

**乱码常见原因**：
1. **客户端NLS_LANG设置不正确**：客户端字符集与服务器不一致
2. **数据已损坏**：使用错误编码插入的数据可能已永久损坏
3. **JDBC连接编码未正确配置**：驱动连接参数encoding/nencoding设置不当

#####  验证数据是否损坏

运行以下命令检查数据是否真的损坏：

```sql
SELECT DUMP(column_name, 1016) FROM table_name WHERE condition;
```

**判断结果**：
- 如果返回 `3F`（问号 `?` 的ASCII码），说明数据已损坏，需要重新插入
- 如果返回合法的UTF-8字节（例如 `e4 b8 ad e6 96 87` 表示"中文"），说明数据完好，只是显示问题

#####  环境配置

**1. 设置Shell环境变量**

```bash
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
echo "export LANG=C.UTF-8" >> ~/.bashrc
echo "export LC_ALL=C.UTF-8" >> ~/.bashrc
```

**2. 设置Oracle客户端NLS_LANG**

```bash
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8
echo "export NLS_LANG=AMERICAN_AMERICA.AL32UTF8" >> ~/.bashrc
```

**验证环境**：
```sql
SQL> SELECT '测试中文' FROM DUAL;

'测试中文'
------------
测试中文
```
##### 注意事项

- 创建oGRAC目标数据库时，务必指定UTF-8编码
- 确保源端与目标端时区一致性
- DataX迁移工具默认使用UTF-8编码，但需确保JVM环境变量正确设置
- 如果数据已损坏（显示为问号`?`），需从原始数据源重新导入

##  迁移建议

###  执行机器配置要求

为了确保迁移工具的正常运行和最佳性能，执行机器需要满足以下配置要求：

####  硬件配置

| 配置项   | 最低要求 | 推荐配置    | 说明                                |
| -------- | -------- | ----------- | ----------------------------------- |
| CPU      | 4核      | 8核及以上   | 并发处理能力，影响多表并行迁移速度  |
| 内存     | 8GB      | 16GB及以上  | 用于JVM运行和DataX处理              |
| 磁盘空间 | 50GB     | 100GB及以上 | 用于存放工具、DataX、临时文件和日志 |

####  内存大小约束

根据迁移数据量和表大小，执行机器需要足够的内存来支持JVM和DataX的运行：

1. **JVM内存约束**：
   - 工具本身需要至少2GB内存
   - DataX根据表大小自动调整JVM参数，最大可能需要4GB内存
   - 并发迁移多个大表时，内存需求会增加

2. **内存使用估算**：
   - 小数据量迁移（<100万行）：8GB内存足够
   - 中等数据量迁移（100万-1000万行）：16GB内存推荐
   - 大数据量迁移（>1000万行）：32GB内存推荐

3. **内存配置建议**：
   - 执行迁移命令时，可通过 `-Xmx` 参数调整JVM最大内存
   - 示例：`java -Xmx8g -jar openGauss-FullReplicate-7.0.0-RC3.jar --start datax_table --source oracle --config config.yml`
   - 确保执行机器有足够的物理内存，避免使用过多交换空间

####  操作系统要求

- **操作系统**：Linux (推荐) 或 Windows
- **文件系统**：建议使用SSD存储，提高临时文件读写速度
- **网络**：源数据库和目标数据库之间的网络带宽至少1Gbps，延迟<10ms

###  并发度配置

当前配置文件默认并发度为4个线程查询表和4个线程写表：

- **查询表的线程数 (readerNum): 4**
- **写表的线程数 (writerNum): 4**

这些配置决定了迁移过程中同时处理的表数量，影响整体迁移速度和系统资源占用。

###  DataX配置策略

迁移工具使用 `GeneralDataXConfigStrategy` 作为DataX的配置策略，主要特点如下：

#### 动态Channel配置

根据表大小自动调整DataX的Channel数量：

| 表行数            | Channel数                  |
| ----------------- | -------------------------- |
| ≤10,000           | 1                          |
| 10,000-100,000    | 2                          |
| 100,000-1,000,000 | 4                          |
| >1,000,000        | 最多8个，或CPU核心数的一半 |

####  JVM参数配置

根据表大小自动调整JVM参数：

| 表行数               | JVM参数           |
| -------------------- | ----------------- |
| ≤10,000              | -Xms512m -Xmx512m |
| 10,000-1,000,000     | -Xms1g -Xmx1g     |
| 1,000,000-10,000,000 | -Xms2g -Xmx2g     |
| >10,000,000          | -Xms4g -Xmx4g     |

####  批处理大小配置

根据表大小自动调整批处理大小：

| 表行数               | 批处理大小 |
| -------------------- | ---------- |
| ≤10,000              | 500        |
| 10,000-1,000,000     | 1,000      |
| 1,000,000-10,000,000 | 2,000      |
| >10,000,000          | 4,000      |

####  分片策略

- **有单一主键的表**：使用主键作为分片键
- **无主键或多主键的表**：使用DataX-OracleReader的默认分片策略，根据表大小自动调整分片数量

####  根据最大表与并发度评估迁移工具的内存占用

迁移工具预估内存大小计算

1. **基础内存需求**
   - 迁移工具本身：至少2GB内存

2. **DataX任务内存需求**
   - 根据并发度参数（writerNum: 4），最多同时运行4个DataX任务，每个任务的内存需求如下：
   
   | 表大小                 | 单个DataX任务内存 | 4个任务最大内存 |
   | ---------------------- | ----------------- | --------------- |
   | ≤10,000行              | 512MB             | 2GB             |
   | 10,000-1,000,000行     | 1GB               | 4GB             |
   | 1,000,000-10,000,000行 | 2GB               | 8GB             |
   | >10,000,000行          | 4GB               | 16GB            |

3. **总内存需求**
   - **最小预估**：工具本身(2GB) + 4个小表(2GB) = 4GB
   - **中等预估**：工具本身(2GB) + 4个中等表(4GB) = 6GB
   - **最大预估**：工具本身(2GB) + 4个超大表(16GB) = 18GB

4. **实际建议**
   - **小数据量迁移**（主要是小表）：8GB内存足够
   - **中等数据量迁移**（包含中等表）：16GB内存推荐
   - **大数据量迁移**（包含大表或超大表）：32GB内存推荐

这些预估基于迁移工具的配置参数，实际使用时应根据具体的表大小分布和服务器资源情况进行调整。
