# CREATE TABLE

## 功能描述

CREATE TABLE用于创建表

## 注意事项

- 创建当前用户的表需要有CREATE TABLE权限，创建其他普通用户的表需要有CREATE ANY TABLE权限，普通用户不可创建SYS表
- 自增列只支持int/bigint类型，一个表只支持一个自增列，自增列必须是主键或唯一索引
- 外键引用默认引用父表的主键，没有主键报错
- CHECK约束限制字段数量最大16个
- 创建本地临时表时需要开启LOCAL_TEMPORARY_TABLE_ENABLED, 表名以#开头，不支持ON COMMIT DELETE ROWS
- 临时表的BLOB被定义为RAW(8000), CLOB被定义为VARCHAR(8000B)

## 语法格式

```
CREATE [[GLOBAL] TEMPORARY] TABLE [IF NOT EXISTS] [schema_name.]table_name
    {({column_def_clause}[,...] [external_constraint][,...])} | {AS query}
    [ON COMMIT {DELETE|PRESERVE} ROWS]
    [physical_properties_clause]
    [table_attr_clause]
    [CRMODE PAGE]
```

**column_def_clause:**

```
    column_name {datatype | SERIAL}
    [DEFAULT expr [ON UPDATE expr]]
    [AUTO_INCREMENT]
    [COMMENT 'comment_str']
    [COLLATE collation_name]
    [col_level_constraint][...]
```

**col_level_constraint:**

```
    CONSTRAINT constraint_name {[NOT] NULL
                                | UNIQUE
                                | PRIMARY KEY
                                | CHECK(expr)
                                | refenence_clause }[...]
```

**refenence_clause:**

```
    REFRENCES [schema_name.]table_name[(column_name)] [ON DELETE {CASCADE | SET NULL}]
```

**external_constraint:**

```
    CONSTRAINT constraint_name {UNIQUE(column_name[,...]) [using_index_clause]
                                | PRIMARY KEY(column_name[,...]) [using_index_clause]
                                | CHECK(expr)
                                | FOREIGN KEY(column_name[,...]) refenence_extend_clause}
```

**using_index_clause:**

```
    USING INDEX [ INITRANS int
                | PCTFREE int
                | TABLESPACE tablespace_name
                | LOCAL
              ]
```

**refenence_extend_clause:**

```
    REFRENCES [schema_name.]table_name[(column_name[,...])] [ON DELETE {CASCADE | SET NULL}]
```

**physical_properties_clause**

```
    segment_attr_clause
    | ORGANIZATION EXTERNAL external_table_clause
    | FORMAT ({ASF|CSF})
```

**segment_attr_clause**

```
    { physical_attr_clause | TABLESPACE tablespace_name}[ ...]
```

**physical_attr_clause**

```
    {
        PCTFREE int
        | INITRANS int
        | MAXTRANS int
        | storage_clause
    }[ ...]
```

**storage_clause**

```
    STORAGE ({INITIAL int [K|M|G|T] | MAXSIZE {UNLIMITED | int [K|M|G|T]}}[ ...])
```

**external_table_clause**

```
    ([TYPE LOADER] external_data_properties)
```

**external_data_properties**

```
    DIRECTORY directory_name
    [ACCESS PARAMETERS (opaque_format_spec)]
    LOCATION location_name
```

**opaque_format_spec**

```
    RECORDS DELIMITED BY records_delimiter FIELDS TERMINATED BY fields_term
```

**table_attr_clause**

```
    [column_attr_clause]
    [AUTO_INCREMENT [=] value]
    [AS subqery]
```

**column_attr_clause**

```
    [LOB (LOB_item) STORE AS {[(LOB_parameters)]}]
    [APPENDONLY {ON|OFF}]
```

**LOB_parameters**

```
    [TABLESPACE tablespace_name | {ENABLE | DISABLE} STORAGE IN ROW][ ...]
```

## 参数说明

- TEMPORARY: 本地临时表
- GLOBAL TEMPORARY: 全局临时表 
- ON COMMIT DELETE ROWS: 事务级临时表，事务结束时会清空数据，不会删除表定义。默认行为
- ON COMMIT PRESERVE ROWS: 会话级临时表，会话结束时会清空数据，不会删除表定义
- CRMODE：MVCC模式。PAGE是页级MVCC, 默认值为CR_MODE配置
- SERIAL: 自增列，和AUTO_INCREMENT的区别在于SERIAL默认数据类型是BIGINT
- DEFAULT expr [ON UPDATE expr]: 列默认值。ON UPDATE expr是兼容语法，UPDATE行数据不知道该列取update默认值填充
- COLLATE：字符序，支持UTF8_BIN（区分大小写）, UTF8_GENERAL_CI（不区分大小写）, UTF8_UNICODE_CI（不区分大小写）, GBK_BIN（区分大小写）, GBK_CHINESE_CI（不区分大小写）
- REFRENCES [schema_name.]table_name[(column_name)] ON DELETE CASCADE: 外键级联设置。外表删除时本表删除
- REFRENCES [schema_name.]table_name[(column_name)] ON DELETE SET NULL：外键级联设置。外表删除时本表设置为NULL
- USING INDEX：为约束指定索引属性
- INITRANS: 初始化数据库事务槽个数
- MAXTRANS: 数据库事务槽最大个数
- FORMAT ({ASF|CSF}): 行格式, 默认为ASF(Aligned Stream Format)，临时表不支持CSF(Compact Stream Format)
- STORAGE ({INITIAL int [K|M|G|T] | MAXSIZE {UNLIMITED | int [K|M|G|T]}}[ ...]): INITIAL指定表初始大小, MAXSIZE表存储的最大值, UNLIMITED代表无限存储
- RECORDS DELIMITED BY records_delimiter FIELDS TERMINATED BY fields_term: 外部表记录分割符和字段分隔符.records_delimiter支持单字符或者newline， fields_term支持单字符
- ORGANIZATION EXTERNAL： 外部表相关。外部表列不支持LOB类型
- TYPE LOADER: 数据库转换类型。LOADER是文本转换
- DIRECTORY：外部表所在目录名称，需要使用CREATE DIRECTORY提前创建
- ACCESS PARAMETERS: 转换参数
- LOCATION: 文件名称
- AUTO_INCREMENT [=] value: 自增初始值
- APPENDONLY {ON|OFF}: 追加写。如果开启后不同线程写一张表会申请新的页做擦或许，减少锁等待，但页空间浪费较多。默认关闭
- LOB (LOB_item) STORE AS： 指定lob字段（LOB_ITEM）单独segment存储
    - ENABLE  STORAGE IN ROW：行内存储
    - DISABLE STORAGE IN ROW：行外存储

## 示例

```SQL
-- 1. 简单员工表
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) CHECK (salary > 0),
    dept_id INT
);

-- 2. 带外键和注释
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(50) COMMENT '部门名称',
    manager_id INT
);

-- 全局临时表
CREATE GLOBAL TEMPORARY TABLE temp_data (
    session_id VARCHAR(50)
) ON COMMIT DELETE ROWS;

-- 会话级临时表
CREATE TEMPORARY TABLE #session_cache (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT
) ON COMMIT PRESERVE ROWS;

-- 列级约束
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 0),
    status VARCHAR(10) DEFAULT 'ACTIVE'
);

-- 表级外键
CREATE TABLE orders (
    order_id SERIAL,
    user_id INT,
    CONSTRAINT pk_order PRIMARY KEY (order_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) 
        REFERENCES users(user_id) ON DELETE CASCADE
);

-- 指定表空间和存储
CREATE TABLE large_logs (
    log_id SERIAL PRIMARY KEY,
    log_time TIMESTAMP,
    message TEXT
) TABLESPACE log_ts
  PCTFREE 10
  STORAGE (INITIAL 100M MAXSIZE 2G);

-- 带BLOB的表
CREATE TABLE documents (
    doc_id SERIAL PRIMARY KEY,
    doc_content BLOB
) LOB (doc_content) STORE AS (TABLESPACE lob_ts);

-- CATS
CREATE TABLE sales_summary
AS
SELECT product_id, SUM(quantity) as total_qty
FROM sales
GROUP BY product_id;

-- 创建页级MVCC表
CREATE TABLE page_mvcc_table (
    id SERIAL PRIMARY KEY,
    log_data TEXT,
    created_time TIMESTAMP
) CRMODE PAGE;

-- 仅指定物理属性，使用默认表空间
CREATE TABLE logs (
    log_id SERIAL PRIMARY KEY,
    log_time TIMESTAMP
)
PCTFREE 5
INITRANS 2
MAXTRANS 255
STORAGE (INITIAL 100M MAXSIZE 1G);

-- 使用ASF格式创建表
CREATE TABLE user_profiles (
    user_id SERIAL PRIMARY KEY,
    profile_data JSONB,
    preferences JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
FORMAT ASF;

-- 只指定DIRECTORY和LOCATION
CREATE TABLE external_simple (
    id INT,
    name VARCHAR(50)
)
ORGANIZATION EXTERNAL (
    DIRECTORY data_dir
    LOCATION 'simple.csv'
);
```
