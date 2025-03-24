# Python SDK对接向量数据库
本文介绍如何使用Python语言调用openGauss向量数据库

## 环境准备
限制：python3.11及以上
- 在线安装
```bash
pip3 install psycopg2
```
- 离线安装

开发者可以直接到[pypi官网](https://pypi.org/project/psycopg2/)下载psycopg2并安装。
```bash
pip3 install YourPath/psycopg2.whl
```

## 基本操作
### 1.连接数据库
```python
import psycopg2
from psycopg2 import sql
import numpy as np
from typing import List

def create_connection(dbname:str, user:str, password:str, host:str, port:int):
    conn = psycopg2.connect(
        dbname = dbname,
        user = user,
        password = password,
        host = host,
        port = port
    )
    cursor = conn.cursor()
    return conn, cursor
```
### 2.创建表
```python
def create_table(conn, cursor, table_name:str, dim:int):
    cursor.execute(
        sql.SQL(
            "CREATE TABLE IF NOT EXISTS public.{table_name} (id BIGINT PRIMARY KEY, embedding vector({dim}));"
        ).format(table_name = sql.Identifier(table_name), dim = sql.Literal(dim))
    )
    conn.commit()
```

### 3.创建索引
```python
def create_index(conn, cursor, table_name:str, index_name:str):
    cursor.execute(
        sql.SQL(
            """
            CREATE INDEX IF NOT EXISTS {index_name} ON public.{table_name}
            USING hnsw (embedding vector_l2_ops);
            """
        ).format(index_name = sql.Identifier(index_name), table_name = sql.Identifier(table_name))
    )
    conn.commit()
```

### 4.插入/删除/更新数据
- 批量插入
```python
def insert(conn, cursor, table_name:str, embeddings:List[List[float]], ids:List[int]):
    data = list(zip(ids, embeddings))
    cursor.executemany(
        sql.SQL("INSERT INTO public.{table_name} (id, embedding) VALUES(%s, %s);")
        .format(table_name = sql.Identifier(table_name)), data
    )
    conn.commit()
```

- 删除
```python
def delete(conn, cursor, table_name:str, ids:List[int]):
    cursor.execute(
        sql.SQL(
            "DELETE FROM public.{table_name} WHERE id IN ({ids});"
        ).format(table_name = sql.Identifier(table_name), ids = sql.SQL(',').join(map(sql.Literal, ids)))
    )
    delete_count = cursor.rowcount
    conn.commit()
    return delete_count
```

- 更新
```python
def update(conn, cursor, table_name:str, id:int, vector:List[List[float]]):
    cursor.execute(
        sql.SQL(
            "UPDATE public.{table_name} SET embedding = %s WHERE id = %s;"
        ).format(table_name = sql.Identifier(table_name)), (vector ,id)
    )
    conn.commit()
```

### 5.查询
```python
# 串行批量查询
def select(conn, cursor, table_name:str, queries:List[List[float]], topk:int):
    ids = []
    for emb in queries:
        cursor.execute(
            sql.SQL(
                "SELECT * FROM public.{table_name} ORDER BY embedding <-> %s::vector LIMIT %s::int;"
            ).format(table_name = sql.Identifier(table_name)), (emb, topk)
        )
        conn.commit()
        result = cursor.fetchall()
        ids.append([int(i[0]) for i in result])
    return ids
```

### 6.删除表
```python
def drop_table(conn, cursor, table_name:str):
    cursor.execute(
        sql.SQL(
            "DROP TABLE IF EXISTS public.{table_name};"
        ).format(table_name = sql.Identifier(table_name))
    )
    conn.commit()
```

### 7.关闭连接
```python
def close_connection(conn, cursor):
    conn.close()
    cursor.close()
```

## 用例
```python
conn, cursor = create_connection("testdb", "test_user", YourPassword, "localhost", 5432)
create_table(conn, cursor, "test_table1", 3)
create_index(conn, cursor, "test_table1", "idx_test1")
insert(conn, cursor, "test_table1", [[1.2, 3, 5], [4.3, 5.2, 1]], [0, 1])
delete(conn, cursor, "test_table1", [0])
update(conn, cursor, "test_table1", 1, [1, 3, 3])
select(conn, cursor, "test_table1", [[1, 2, 2], [3, 5, 1]], 2)
drop_table(conn, cursor, "test_table1")
close_connection(conn, cursor)
```