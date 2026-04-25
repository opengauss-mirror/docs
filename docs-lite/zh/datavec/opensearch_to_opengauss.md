# 从OpenSearch迁移至openGauss

本文档详细介绍 OpenSearch 至 openGauss 数据迁移工具的使用方法及核心迁移规则，帮助用户高效、准确地完成数据迁移工作。

## 环境准备

### 版本限制

| 组件       | 版本要求                   |
| :--------- | :------------------------- |
| OpenSearch | 1.3.4 及以上               |
| openGauss  | 7.0.0-RC1 及以上向量数据库 |
| Python     | 3.7 及以上                 |

### Python 依赖安装

```bash
# openGauss 数据库驱动
pip3 install psycopg2

# OpenSearch 官方 Python 客户端
pip3 install opensearch-py
```

## 工具简介

### 功能概述

本迁移工具支持将 OpenSearch 中的索引完整迁移至 openGauss 数据库：

- 索引映射（Mapping）中的字段 → openGauss 表结构
- 索引存储的文档 → openGauss 表数据

### 运行模式

工具提供三种运行模式，适配不同迁移阶段的需求：

| 模式 | 命令      | 功能说明                                                     |
| :--- | :-------- | :----------------------------------------------------------- |
| 导出 | `export`  | 将 OpenSearch 索引的 Mapping 导出为字段描述 CSV，文档数据导出为数据 CSV |
| 导入 | `import`  | 读取字段描述 CSV 在 openGauss 中建表，通过 `COPY` 命令高效导入数据CSV |
| 迁移 | `migrate` | 一键完成“导出+导入”全流程                                    |

## 迁移工具

### 配置文件

创建 `config.ini` 文件，参考以下模板进行配置：

```ini
[opensearch]
# OpenSearch连接配置（导出、迁移时生效）
host = localhost
port = 9200
username = 
password = 
use_ssl = false
# 索引名称（导入、导出、迁移共用）
index = my_index

[opengauss]
# openGauss数据库连接配置（导入、迁移时生效）
host = localhost
port = 5432
database = your_database
# 请使用md5加密用户
username = your_username
password = ******
# 目标数据库schema，默认为public，配置成其他schema时，需要确保该schema存在
schema = public
# 目标表名（可选，如果不指定则使用索引名作为表名）
table_name = 

[storage]
# CSV文件存储目录（导入、导出、迁移时生效）
data_dir = output

[export]
# 导出配置项（导出、迁移时生效）
scroll_size = 1000
scroll_time = 5m
# 每个CSV文件存储的数据行数（不含表头），0或负数表示不分片
csv_rows_per_file = 1000000

[migrate]
# 迁移模式配置项（迁移时生效）
# 是否保留导出的CSV文件（true/false）
keep_files = false
```

### 迁移脚本

创建`opensearch2opengauss.py`文件，并填充如下代码：

```python
from typing import Dict, Any, List, Tuple, Optional
import csv
import io
import json
import configparser
import sys
import os
import argparse
import glob
import re
import logging
from opensearchpy import OpenSearch
import psycopg2
from psycopg2 import sql


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stdout
)
logger = logging.getLogger(__name__)


class OpenSearchToOpenGaussMigrator:
    """OpenSearch到openGauss迁移工具"""
    
    OPENGAUSS_KEYWORDS = {
        "select", "insert", "update", "delete", "drop", "table", "from", "where", "group",
        "by", "having", "order", "limit", "join", "inner", "left", "right", "full", "union",
        "all", "distinct", "as", "on", "and", "or", "not", "null", "true", "false", "case",
        "when", "then", "else", "end", "exists", "like", "in", "between", "is", "like",
        "references", "foreign", "primary", "key", "unique", "check", "default", "constraint",
        "index", "varchar", "text", "int", "bigint", "smallint", "boolean", "timestamp", "user"
    }
    
    TYPE_MAPPING = {
        "byte": "smallint",
        "short": "smallint",
        "integer": "integer",
        "long": "bigint",
        "float": "real",
        "double": "float8",
        "half_float": "real",
        "keyword": "text",
        "text": "text",
        "binary": "bytea",
        "boolean": "boolean",
        "date": "timestamp",
        "date_nanos": "text",
        "ip": "inet",
        "integer_range": "int4range",
        "long_range": "int8range",
        "float_range": "numrange",
        "double_range": "numrange",
        "date_range": "tsrange",
        "object": "jsonb",
        "nested": "jsonb",
        "geo_point": "point",
        "knn_vector": "vector",
        "_id": "text",
        "join:name": "text",
        "join:parent": "text",
    }
```

## 脚本使用

### 导出模式（export）

**命令示例：**

```bash
# 使用默认配置（当前目录下的 config.ini）
python3 opensearch2opengauss.py export

# 指定配置文件路径
python3 opensearch2opengauss.py export --config /path/to/config.ini

# 指定配置文件及索引名（覆盖配置文件中的索引）
python3 opensearch2opengauss.py export --config config.ini --index my_other_index
```

**参数说明：**

| 参数       | 说明                                                  |
| :--------- | :---------------------------------------------------- |
| `export`   | 指定运行模式为导出                                    |
| `--config` | 配置文件路径，不指定时默认为当前目录下的 `config.ini` |
| `--index`  | 指定要导出的索引名，不指定时使用配置文件中的索引名    |

**输出文件：**

导出成功后，在 `storage.data_dir` 指定目录下生成以下文件（以默认 `output/` 为例）：

```tex
output/
├── my_index_1.csv      # 文档数据分片文件 1
├── my_index_2.csv      # 文档数据分片文件 2
├── my_index_3.csv      # 文档数据分片文件 3
├── ...
└── my_index_fields.csv # 索引结构（字段描述）文件
```

### 导入模式（import）

**前置条件：**

请确保导出模式生成的文件已放置在 `storage.data_dir` 指定目录下，且不支持修改原始文件名及文件内容。

**命令示例：**

```bash
# 使用默认配置导入（当前目录下的 config.ini）
python3 opensearch2opengauss.py import

# 指定配置文件
python3 opensearch2opengauss.py import --config config.ini

# 指定配置文件、索引名及目标表名
python3 opensearch2opengauss.py import --config config.ini --index my_index --table my_table
```

**参数说明：**

| 参数       | 说明                                                  |
| :--------- | :---------------------------------------------------- |
| `import`   | 指定运行模式为导入                                    |
| `--config` | 配置文件路径，不指定时默认为当前目录下的 `config.ini` |
| `--index`  | 指定要导入的索引名，不指定时使用配置文件中的索引名    |
| `--table`  | 指定导入后的表名，优先级：命令行 > 配置文件 > 索引名  |

### 迁移模式（migrate）

**命令示例：**

```bash
# 使用默认配置迁移（当前目录下的 config.ini）
python3 opensearch2opengauss.py migrate

# 指定配置文件
python3 opensearch2opengauss.py migrate --config config.ini

# 指定配置文件、索引名及目标表名
python3 opensearch2opengauss.py migrate --config config.ini --index my_index --table my_table
```

**参数说明：**

| 参数       | 说明                                                  |
| :--------- | :---------------------------------------------------- |
| `migrate`  | 指定运行模式为迁移                                    |
| `--config` | 配置文件路径，不指定时默认为当前目录下的 `config.ini` |
| `--index`  | 指定要迁移的索引名，不指定时使用配置文件中的索引名    |
| `--table`  | 指定迁移后的表名，优先级：命令行 > 配置文件 > 索引名  |

### 生成默认配置文件

当配置文件不存在时，运行任意模式命令，脚本会自动生成默认配置文件。

- 命令中指定 `--config` 参数：在指定路径生成配置文件
- 命令中未指定 `--config` 参数：在当前目录下生成 `config.ini`

## 迁移逻辑说明

### 索引映射到表结构

工具查询 OpenSearch 索引映射，将各字段映射为 openGauss 表字段，并额外保留 OpenSearch 元数据字段 `_id` 作为表主键。

**索引映射示例：**

```json
{
  "vector_demo": {
    "mappings": {
      "properties": {
        "category": { "type": "keyword" },
        "description": { "type": "text" },
        "embedding": { "type": "knn_vector", "dimension": 5 },
        "id": { "type": "keyword" },
        "name": { "type": "text" },
        "price": { "type": "float" }
      }
    }
  }
}
```

**迁移后表结构：**

```tex
   Column    |   Type    | Modifiers | Storage  | Description 
-------------+-----------+-----------+----------+-------------
 _id         | text      | not null  | extended | 
 category    | text      |           | extended | 
 description | text      |           | extended | 
 embedding   | vector(5) |           | external | 
 id          | text      |           | extended | 
 name        | text      |           | extended | 
 price       | real      |           | plain    | 

Indexes:
    "vector_demo_pkey" PRIMARY KEY, btree (_id)

Has OIDs: no
Options: orientation=row, compression=no
```

### 数据类型映射规则

工具内置 `TYPE_MAPPING` 映射表，将 OpenSearch 字段类型转换为对应的 openGauss 数据类型，实际以代码中`TYPE_MAPPING`为准，对于 `TYPE_MAPPING` 映射表中未映射的源端字段类型，统一映射为 openGauss TEXT类型。部分映射规则如下：

| OpenSearch 类型       | openGauss 类型 |
| :-------------------- | :------------- |
| `keyword`, `text`     | `TEXT`         |
| `byte`, `short`       | `SMALLINT`     |
| `integer`             | `INTEGER`      |
| `long`                | `BIGINT`       |
| `float`, `half_float` | `REAL`         |
| `double`              | `FLOAT8`       |
| `boolean`             | `BOOLEAN`      |
| `date`                | `TIMESTAMP`    |
| `binary`              | `BYTEA`        |
| `ip`                  | `INET`         |
| `geo_point`           | `POINT`        |
| `knn_vector`          | `VECTOR(n)`    |
| `_id`                 | `TEXT`         |
| ...                   | ...            |

### 数组数据迁移规则

OpenSearch中字段可能包含多个值（Array），迁移时工具自动检测字段值是否为数组（Python `list` 类型），并按下述规则处理：

| 数组元素类型 | 迁移后类型                | 说明                                                   |
|:-------| :------------------------ | :----------------------------------------------------- |
| 数值相关类型 | `INTEGER[]` / `REAL[]` 等 | 转换为 openGauss 原生数组类型                          |
| 文本相关类型 | `TEXT`                    | 存储为TEXT类型，内容为数组格式的文本，便于建立全文索引 |
| 向量类型   | `VECTOR`                  | 按向量类型处理                                         |

### 对象类型迁移规则

#### nested / object 扁平化

OpenSearch 中的嵌套对象（如 `user.address.city`）在迁移时会被**扁平化处理**，嵌套层级用下划线（`_`）连接：

```text
原字段：user.address.city
迁移后：user_address_city
```

#### join 类型拆分

脚本识别 `join` 类型后，自动拆分为两个独立字段，以保留父子文档间的关联关系。

| 拆分后字段            | 类型 | 说明      |
| :-------------------- | :--- | :-------- |
| `{join_field}.name`   | TEXT | 关系名称  |
| `{join_field}.parent` | TEXT | 父文档_id |

### 关键字冲突处理

由于 OpenSearch 与 openGauss 关键字不同，为避免使用索引信息构造的建表语句中的表名和字段名与 openGauss 关键字冲突，出现 SQL 语法错误，导致创建表结构失败。工具内置了 OPENGAUSS_KEYWORDS 集合，在表名与字段名处理时，如果遇到表名和字段名命中该集合中关键字的情况，迁移工具自动在原始名称后添加下划线（`_`）作为后缀。例如，`user` 将转换为 `user_`。
