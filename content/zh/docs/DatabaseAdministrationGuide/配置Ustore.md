# 配置Ustore

## 使用指导<a name="section2190298487"></a>

Ustore与原有的ASTORE(Append Update)存储引擎并存。Ustore存储引擎屏蔽了存储层实现的细节，SQL语法和原有的ASTORE存储引擎使用基本保持一致，唯一差别是建表和建索引有些细微区别。

- **创建表的方式**

  - **创建方式1：创建表时指定存储引擎类型**

  ```sql
  create table test(id int, age int, name varchar(10)) with (storage_type=ustore);
  ```

  - **创建方式2：GUC参数配置指定Ustore存储引擎**

    1. 数据库启动之前，在postgresql.conf中设置“enable_default_ustore_table=on”，默认指定用户创建表时使用Ustore存储引擎。

       [postgresql.conf配置]

       ```
       enable_default_ustore_table=on
       ```

    2. 创建表。

       ```
       create table test(id int, age int, name varchar(10));
       ```

-   **创建索引的方式**

    Ustore存储引擎使用的索引为UBtree， UBtree是专门给Ustore存储引擎开发的索引，也是该引擎目前唯一支持的索引类型。

    假定有如下test表结构，计划在test表的age列上增加一个UBtree索引。

    ```
    openGauss=# \d+  test
                             Table "public.test"
     Column |  Type                 | Modifiers | Storage  | Stats target | Description
    --------+-----------------------+-----------+----------+--------------+-------------
     id     | integer               |           | plain    |              |
     age    | integer               |           | plain    |              |
     name   | character varying(10) |           | extended |              |
    ```

    -   **创建方式1：不指定创建索引类型，默认创建UBtree索引**

        ```
        create index ubt_idx on test(age);
        ```

        ```
        openGauss=# \d+  test
                                        Table "public.test"
         Column |  Type                 | Modifiers | Storage  | Stats target | Description
        --------+-----------------------+-----------+----------+--------------+-------------
         id     | integer               |           | plain    |              |
         age    | integer               |           | plain    |              |
         name   | character varying(10) |           | extended |              |
        Indexes:
            "ubt_idx" ubtree (age) WITH (storage_type=ustore) TBALESPACE pg_default
        Has OIDs: no
        Options: orientation=row, compression=no, storage_type=ustore
        ```

    -   **创建方式2：创建索引时使用using关键字指定索引类型为“UBtree”**

        ```
        create index ubt_idx on test using ubtree(age);
        ```

        ```
        openGauss=# \d+  test
                                        Table "public.test"
         Column |  Type                 | Modifiers | Storage  | Stats target | Description
        --------+-----------------------+-----------+----------+--------------+-------------
         id     | integer               |           | plain    |              |
         age    | integer               |           | plain    |              |
         name   | character varying(10) |           | extended |              |
        Indexes:
            "ubt_idx" ubtree (age) WITH (storage_type=ustore) TBALESPACE pg_default
        Has OIDs: no
        Options: orientation=row, compression=no, storage_type=ustore
        ```
