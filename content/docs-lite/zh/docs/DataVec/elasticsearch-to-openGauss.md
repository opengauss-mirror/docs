# 从ElasticSearch迁移至openGauss

本教程通过Python编程语言，支持将ElasticSearch数据迁移至openGauss实例中

## 环境准备
- 已部署7.3 及以上版本的ElasticSearch实例
- 已部署7.0.0-RC1 及以上版本的openGauss实例
- 已安装3.8 及以上版本的Python环境
- 已安装涉及的Python库

```python
pip3 install psycopg2
```

## 迁移操作

1. 参考如下迁移脚本elasticSearchToOpenGauss.py，根据本地部署的elasticsearch与openGauss进行配置修改：

elasticsearchToOpenGauss.py迁移脚本如下：
```python
import requests
import psycopg2
import json
import re
import requests
from typing import List, Dict, Any, Optional, Union

# Elasticsearch 配置信息
es_url = 'http://ip:port'  # Elasticsearch 服务器地址
es_index = 'your_es_index'  # Elasticsearch 索引名

# openGauss 配置信息
db_host = '127.0.0.1'
db_port = 5432
db_name = 'your_opengauss_db'
db_user = 'user_name'
db_password = 'Sample@123'

RESERVED_KEYWORDS = {
    "select", "insert", "update", "delete", "drop", "table", "from", "where", "group",
    "by", "having", "order", "limit", "join", "inner", "left", "right", "full", "union",
    "all", "distinct", "as", "on", "and", "or", "not", "null", "true", "false", "case",
    "when", "then", "else", "end", "exists", "like", "in", "between", "is", "like",
    "references", "foreign", "primary", "key", "unique", "check", "default", "constraint",
    "index", "unique", "varchar", "text", "int", "bigint", "smallint", "boolean", "timestamp"
}
# 从 Elasticsearch 获取数据
def fetch_data_from_es():
    query = {
        "query": {
            "match_all": {}
        },
        "_source": True  # 获取所有字段
    }
    response = requests.get(f'{es_url}/{es_index}/_search', json=query)
    if response.status_code == 200:
        return response.json()['hits']['hits']
    else:
        raise Exception(f"Failed to fetch data from Elasticsearch: {response.status_code}, {response.text}")


# 获取索引映射信息
def fetch_mapping(es_url, es_index):
    response = requests.get(f'{es_url}/{es_index}/_mapping')
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to fetch mapping: {response.status_code}, {response.text}")


def get_field_type(es_url: str, es_index: str, field_name: str) -> str:
    """ 获取 Elasticsearch 字段的类型 """
    mappings = fetch_mapping(es_url, es_index)
    print(f"Field name: {field_name}")
    print(f"map: {mappings}")
    # 获取 properties 字段
    properties = mappings.get(es_index, {}).get('mappings', {}).get('properties', {})
    # 遍历并查找字段的类型
    field_type = 'text'  # 默认类型为 'text'
    if field_name in properties:
        field_type = properties[field_name].get('type', 'text')
    elif 'fields' in properties.get(field_name, {}):
        # 如果字段有子字段（比如 keyword），获取 'keyword' 类型
        field_type = properties[field_name]['fields'].get('keyword', {}).get('type', 'text')
    return field_type

def convert_dict_to_jsonb(value):
    # 如果 value 是字典类型，递归调用该函数处理其中的每个元素
    if isinstance(value, dict):
        return json.dumps({k: convert_dict_to_jsonb(v) for k, v in value.items()})
    # 如果 value 是列表类型，递归处理其中的每个元素
    elif isinstance(value, list):
        return json.dumps([convert_dict_to_jsonb(v) for v in value])
    # 如果是其他类型（如字符串、数字），直接返回该值
    else:
        return value

# 映射 Elasticsearch 数据类型到 openGauss 类型
def map_to_opengauss_type(es_type: str, dim: Optional[int] = None) -> str:
    """Map Elasticsearch types to openGauss types"""
    if isinstance(es_type, (dict, list)):  # 如果 es_type 是字典类型，则需要特殊处理
        return 'JSONB'
    type_map = {
        "long": "BIGINT",  # 大整数
        "integer": "INTEGER",  # 整数
        "short": "SMALLINT",  # 小整数
        "byte": "SMALLINT",  # 小字节
        "float": "REAL",  # 浮点数
        "double": "DOUBLE PRECISION",  # 双精度浮点数
        "boolean": "BOOLEAN",  # 布尔值
        "keyword": "VARCHAR",  # 关键字（字符串类型）
        "text": "TEXT",  # 长文本
        "date": "TIMESTAMP",  # 日期类型
        "binary": "BYTEA",  # 二进制数据
        "geo_point": "POINT",  # 地理坐标（经纬度）
        "geo_shape": "GEOMETRY",  # 复杂地理形状
        "nested": "JSONB",  # 嵌套对象
        "object": "JSONB",  # 对象
        "ip": "INET",  # IP 地址
        "scaled_float": "REAL",  # 扩展浮动类型（带缩放的浮动）
        "float_vector": f"VECTOR({dim})" if dim else "VECTOR",  # 浮动向量类型
        "dense_vector": f"VECTOR({dim})" if dim else "VECTOR",  # 稠密向量类型
        "binary_vector": f"BIT({dim})" if dim else "BIT",  # 二进制向量类型
        "half_float": "REAL",  # 半精度浮动
        "unsigned_long": "BIGINT",  # 无符号长整数
        "date_nanos": "TIMESTAMP",  # 高精度日期时间
        "alias": "TEXT",  # 别名（通常是字段的别名）
    }

    # 如果 es_type 在映射表中，直接返回映射后的类型
    if es_type in type_map:
        print(f"es_type:{es_type} ----- og_type: {type_map[es_type]}")
        return type_map[es_type]
    else:
        print(f"Warning: Unsupported Elasticsearch type '{es_type}', defaulting to 'TEXT'")
        return 'TEXT'  # 默认使用 TEXT 类型


# 函数：将非法字符替换为下划线
def sanitize_name(field_name: str) -> str:
    """处理字段名，确保不会与保留字冲突，且将非字母数字字符替换为下划线"""
    # 将所有非字母数字字符替换为下划线
    sanitized_name = re.sub(r'[^a-zA-Z0-9_]', '_', field_name)

    # 如果是保留字，则加双引号
    if sanitized_name.lower() in RESERVED_KEYWORDS:
        return f'"{sanitized_name}"'

    return sanitized_name


# 创建 openGauss 表
def create_table_in_opengauss(es_url, es_index, table_name):
    columns_definition = ['id VARCHAR PRIMARY KEY']  # 增加 id 主键字段
    seen_fields = set()  # 用于记录已经处理过的字段名

    # 获取 properties 字段
    properties = fetch_mapping(es_url, es_index).get(es_index, {}).get('mappings', {}).get('properties', {})

    # 遍历每个字段
    for field, field_info in properties.items():
        # 如果该字段已经处理过，跳过
        if field in seen_fields:
            continue
        # 获取字段的类型
        es_type = field_info.get('type', 'text')
        dim = field_info.get('dims', 0) if isinstance(field_info, dict) else 0
        field_type = map_to_opengauss_type(es_type, dim)
        sanitized_field_name = sanitize_name(field)
        seen_fields.add(field)
        columns_definition.append(f"{sanitized_field_name} {field_type}")
    # 生成表创建 SQL
    columns_str = ", ".join(columns_definition)
    create_table_sql = f"DROP TABLE IF EXISTS {sanitize_name(table_name)}; CREATE TABLE {sanitize_name(table_name)} ({columns_str});"
    try:
        # 建立数据库连接并执行创建表 SQL
        connection = psycopg2.connect(
            host=db_host,
            port=db_port,
            dbname=db_name,
            user=db_user,
            password=db_password
        )
        cursor = connection.cursor()
        cursor.execute(create_table_sql)
        connection.commit()
        print(f"Table {sanitize_name(table_name)} created successfully.")
    except Exception as e:
        print(f"Error while creating table {sanitize_name(table_name)}: {e}")
    finally:
        if connection:
            cursor.close()
            connection.close()

# 将数据插入到 openGauss 表中
def insert_data_to_opengauss(table_name, es_source, es_id):
    try:
        # 建立数据库连接
        connection = psycopg2.connect(
            host=db_host,
            port=db_port,
            dbname=db_name,
            user=db_user,
            password=db_password
        )
        cursor = connection.cursor()

        # 动态生成插入 SQL 语句
        sanitized_columns = ['id'] + [sanitize_name(col) for col in es_source.keys()]  # 清理列名
        values = [es_id]

        # 处理每一列的数据类型，必要时进行转换
        for column in es_source:
            value = es_source[column]
            if isinstance(value, (dict, list)):
                # 如果是字典类型，转换为 JSONB
                value = convert_dict_to_jsonb(value)
            values.append(value)

        columns_str = ', '.join(sanitized_columns)
        values_str = ', '.join(['%s'] * len(values))

        insert_sql = f"INSERT INTO {sanitize_name(table_name)} ({columns_str}) VALUES ({values_str})"
        cursor.execute(insert_sql, values)

        # 提交事务
        connection.commit()

    except Exception as e:
        print(f"Error while inserting data into {table_name}: {e}")
    finally:
        if connection:
            cursor.close()
            connection.close()

# 主函数
def main():
    try:
        es_data = fetch_data_from_es()
        table_name = es_index  # 可以使用索引名作为表名

        create_table_in_opengauss(es_url, es_index, table_name)
        for record in es_data:
            es_source = record['_source']  # 获取 Elasticsearch 文档中的数据
            es_id = record['_id']
            insert_data_to_opengauss(table_name, es_source, es_id)
        print(f"Successfully inserted data into table {table_name}.")


    except Exception as e:
        print(f"Migration failed: {e}")


if __name__ == "__main__":
    main()

```

2. 运行迁移脚本，并查看输出结果：
```
python3 elasticSearchToOpenGauss.py
```

4. 登录openGauss，查看数据是否完成迁移：

   4.1 进入容器：
    ```
    $ docker exec -it <CONTAINER ID> bash
    ```

   4.2 登录`omm`超级用户：
    ```
    $ su omm
    $ gsql -d postgres -p 5432
    ```

   4.3 查看迁移表数据量：
    ```
    $ select count(*) from test;
    ```