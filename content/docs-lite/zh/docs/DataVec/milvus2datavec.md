# 从Milvus迁移至openGauss DataVec

本教程通过Python编程语言，支持将本地Milvus数据迁移至openGauss DataVec实例中

## 环境准备
- 已部署2.3 及以上版本的Milvus实例
- 已部署7.0.0-RC1 及以上版本的openGauss实例，容器部署参考[容器镜像安装](../InstallationGuide/容器镜像安装.md)
- 已安装3.8 及以上版本的Python环境
- 已安装涉及的Python库

```python
pip3 install psycopg2
pip3 install pymilvus==2.4.9
pip3 install numpy
```

## 迁移操作

1. 参考如下迁移脚本milvus2datavec.py及配置文件config.ini，根据本地部署的Milvus与openGauss进行配置修改：

迁移配置文件config.ini如下：
```
[Milvus]
host = localhost
port = 19530

[openGauss]
user = postgres
password = xxxxxx
port = 5432
database = postgres

[Table]
milvus_collection_name = test
opengauss_table_name = test
```

milvus2datavec.py迁移脚本如下：
```python
import psycopg2
import csv
from pymilvus import connections, Collection
from concurrent.futures import ThreadPoolExecutor
import configparser
import numpy as np
import re
import os

# Read database configuration from config.ini
config = configparser.ConfigParser()
config.read('config.ini')

# Connect to Milvus
def connect_milvus():
    milvus_host = config.get('Milvus', 'host')
    milvus_port = config.get('Milvus', 'port')
    try:
        connections.connect(alias="default", host=milvus_host, port=milvus_port)
        print("Connected to Milvus successfully!")
    except Exception as e:
        print(f"Failed to connect to Milvus: {e}")

# Query data from Milvus collection in pages
def query_milvus_paginated(collection_name, limit=1000, offset=0):
    collection = Collection(collection_name)
    collection.load()
    results = collection.query(expr="", output_fields=[field.name for field in collection.schema.fields], limit=limit, offset=offset)
    return results

# Connect to openGauss
def connect_opengauss():
    opengauss_user = config.get('openGauss', 'user')
    opengauss_password = config.get('openGauss', 'password')
    opengauss_host = config.get('openGauss', 'host')
    opengauss_port = config.get('openGauss', 'port')
    opengauss_database = config.get('openGauss', 'database')
    try:
        conn = psycopg2.connect(
            user=opengauss_user,
            password=opengauss_password,
            host=opengauss_host,
            port=opengauss_port,
            database=opengauss_database
        )
        print("Connected to openGauss successfully!")
        return conn
    except Exception as e:
        print(f"Failed to connect to openGauss: {e}")
        return None

# Define the data type mapping from Milvus to openGauss
def milvus_to_opengauss_type(milvus_field_type):
    type_mapping = {
        "Int64": "BIGINT",
        "Int8": "SMALLINT",
        "Int16": "SMALLINT",
        "Int32": "INTEGER",
        "Float": "FLOAT",
        "Double": "DOUBLE PRECISION",
        "VarChar": "VARCHAR",
        "String": "TEXT",
        "Json": "TEXT",
        "FLOAT_VECTOR": "VECTOR",
        "BINARY_VECTOR": "BIT",
        "SPARSE_FLOAT_VECTOR": "SPARSEVECTOR",
        "Bool": "BOOLEAN",

    }
    return type_mapping.get(milvus_field_type, "TEXT")

# Create a table in openGauss
def create_table_opengauss(conn, table_name, fields, collection):
    cursor = conn.cursor()
    columns = []
    for field in fields:
        # Manually find the field with the specified name
        milvus_field = next((f for f in collection.schema.fields if f.name == field), None)
        if milvus_field:
            opengauss_type = milvus_to_opengauss_type(milvus_field.dtype.name)
            columns.append(f"{field} {opengauss_type}")
        else:
            print(f"Field {field} not found in collection schema.")
    columns_str = ", ".join(columns)
    create_table_query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_str});"
    try:
        cursor.execute(create_table_query)
        conn.commit()
        print(f"Table {table_name} created successfully!")
    except Exception as e:
        print(f"Failed to create table: {e}")
    finally:
        cursor.close()

# Save Milvus data to a CSV file in batches
def save_to_csv_batch(data, fields, csv_file_path):
    with open(csv_file_path, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fields)
        if csvfile.tell() == 0:
            writer.writeheader()
        for row in data:
            new_row = {}
            for field in fields:
                value = row[field]
                milvus_field = next((f for f in collection.schema.fields if f.name == field), None)
                if milvus_field:
                    if isinstance(value, (list, np.ndarray)):
                        new_row[field] = "[" + ", ".join(str(x) for x in value) + "]"
                    else:
                        new_row[field] = str(value)

            writer.writerow(new_row)
    print(f"Batch data saved to {csv_file_path} successfully!")

# Export data from Milvus to a CSV file
def export_milvus_to_csv(milvus_collection_name, csv_file_path, limit=1000):
    offset = 0
    collection = Collection(milvus_collection_name)
    collection.load()
    initial_data = query_milvus_paginated(milvus_collection_name, limit=1)
    fields = [field.name for field in collection.schema.fields]

    while True:
        milvus_data = query_milvus_paginated(milvus_collection_name, limit=limit, offset=offset)
        if not milvus_data:
            break
        save_to_csv_batch(milvus_data, fields, csv_file_path)
        offset += limit

# Import data from a CSV file to openGauss
def import_csv_to_opengauss(conn, table_name, csv_file_path, fields):
    cursor = conn.cursor()
    try:
        # Truncate the target table
        cursor.execute(f"TRUNCATE TABLE {table_name};")
        with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
            columns = ', '.join(fields)
            copy_query = f"COPY {table_name} ({columns}) FROM STDIN WITH (FORMAT CSV, HEADER);"
            cursor.copy_expert(copy_query, csvfile)
        conn.commit()
        print("Data imported from CSV to openGauss successfully!")
    except Exception as e:
        print(f"Failed to import data from CSV to openGauss: {e}")
    finally:
        cursor.close()

if __name__ == "__main__":
    # Read table name from config file
    milvus_collection_name = config.get('Table', 'milvus_collection_name')
    opengauss_table_name = config.get('Table', 'opengauss_table_name')

    # Generate the CSV file path based on the table name
    output_folder = 'output'
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    #csv_file_path = f'{opengauss_table_name}.csv'

    # Generate the CSV file path based on the table name
    csv_file_path = os.path.join(output_folder, f'{milvus_collection_name}.csv')

    # Connect to Milvus
    connect_milvus()
    collection = Collection(milvus_collection_name)
    collection.load()
    initial_data = query_milvus_paginated(milvus_collection_name, limit=1)
    fields = [field.name for field in collection.schema.fields]

    # Connect to openGauss
    opengauss_conn = connect_opengauss()

    if opengauss_conn:
        # Create a table in openGauss
        create_table_opengauss(opengauss_conn, opengauss_table_name, fields, collection)

        # Export data from Milvus to a CSV file
        export_milvus_to_csv(milvus_collection_name, csv_file_path)

        # Import data from a CSV file to openGauss
        import_csv_to_opengauss(opengauss_conn, opengauss_table_name, csv_file_path, fields)

        opengauss_conn.close()

```

2. 将迁移脚本、配置文件放置在同一目录下，层级如下：
```
├── milvus2datavec.py
└── config.ini
```

3. 运行迁移脚本，并查看输出结果：
```
python3 milvus2datavec.py
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