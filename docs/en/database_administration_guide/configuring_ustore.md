# Configuring Ustore

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:42:42.085Z pushedAt=2026-07-29T09:46:30.201Z -->

## Usage Guide<a name="section2190298487"></a>

Ustore coexists with the original ASTORE (Append Update) storage engine. The Ustore storage engine abstracts away the implementation details of the storage layer, and its SQL syntax remains largely consistent with that of the original ASTORE storage engine. The only differences are in table creation and index creation.

- **Table creation methods**

  - **Creation method 1: Specify the storage engine type when creating a table**

  ```sql
  create table test(id int, age int, name varchar(10)) with (storage_type=ustore);
  ```

  - **Creation method 2: Specify the Ustore storage engine through GUC parameter configuration**

    1. Before the database starts, set "enable_default_ustore_table=on" in postgresql.conf to specify that the Ustore storage engine is used by default when users create tables.

       [postgresql.conf configuration]

       ```
       enable_default_ustore_table=on
       ```

    2. Create the table.

       ```
       create table test(id int, age int, name varchar(10));
       ```

- **Index creation method**

    The index used by the Ustore storage engine is UBtree. UBtree is an index specifically developed for the Ustore storage engine and is currently the only index type supported by this engine.

    Consider the following test table. A UBtree index is to be created on its age column.

    ```
    openGauss=# \d+  test
                             Table "public.test"
     Column |  Type                 | Modifiers | Storage  | Stats target | Description
    --------+-----------------------+-----------+----------+--------------+-------------
     id     | integer               |           | plain    |              |
     age    | integer               |           | plain    |              |
     name   | character varying(10) |           | extended |              |
    ```

    - **Creation method 1: Create an index without specifying the index type, and a UBtree index is created by default**

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

    - **Creation method 2: Use the using keyword to specify the index type as "UBtree" when creating an index**

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