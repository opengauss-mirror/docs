# 配置Ustore

Ustore存储引擎，又名In-place Update存储引擎（原地更新），是openGauss 内核新增的一种存储模式。此前的版本使用的行存储引擎是Append Update（追加更新）模式。追加更新对于业务中的增、删以及HOT（HeapOnly Tuple）Update（即同一页面内更新）有很好的表现，但对于跨数据页面的非HOT UPDATE场景，垃圾回收不够高效。因此，Ustore存储引擎应运而生。

## 设计原理<a name="section101901757153119"></a>

Ustore存储引擎将最新版本的“有效数据”和历史版本的“垃圾数据”分离存储。将最新版本的“有效数据”存储在数据页面上，并单独开辟一段UNDO空间，用于统一管理历史版本的“垃圾数据”，因此数据空间不会由于频繁更新而膨胀，“垃圾数据”集中回收效率更高。

Ustore存储引擎采用NUMA-aware的UNDO子系统设计，使得UNDO子系统可以在多核平台上有效扩展；同时采用多版本索引技术，解决索引清理问题，有效提升了存储空间的回收复用效率。

Ustore存储引擎结合UNDO空间，可以实现更高效、更全面的闪回查询和回收站机制，能快速回退人为“误操作”，为openGauss提供了更丰富的企业级功能。

## 核心优势<a name="section69751648124511"></a>

-   **高性能：**对插入、更新、删除等不同负载的业务，性能以及资源使用表现相对均衡。更新操作采用原地更新模式在频繁更新类的业务场景下可拥有更高、更平稳的性能表现。适应“短”（事务短）、“频”（更新操作频繁）、“快”（性能要求高）的典型OLTP类业务场景。
-   **高效存储：**支持最大限度的原位更新, 极大节约了空间；将回滚段、数据页面分离存储，具备更高效、平稳的IO使用能力，UNDO子系统采用NUMA-aware设计，具有更好的多核扩展性，UNDO空间统一分配，集中回收，复用效率更高，存储空间使用更加高效、平稳。
-   **细粒度资源控制：**Ustore引擎提供多维度的事务“监管”方式，可基于事务运行时长、单事务使用UNDO空间大小、以及整体UNDO空间限制等方式对事务运行进行“监管”，防止异常、非预期内的行为出现，方便数据库管理员对数据库系统资源使用进行规范和约束。

Ustore存储引擎可以在数据频繁更新场景下性能依旧稳如泰山，使业务系统运行更加平稳，适应更多业务场景和工作负载，特别是对性能和稳定性有更高要求的金融核心业务场景。

## 使用指导<a name="section2190298487"></a>

USTORE与原有的ASTORE\(Append Update\)存储引擎并存。USTORE存储引擎屏蔽了存储层实现的细节，SQL语法和原有的ASTORE存储引擎使用基本保持一致，唯一差别是建表和建索引有些细微区别。

-   **创建表的方式**

    USTORE存储引擎含有undo log，创建USTORE存储引擎表的时候需要提前在postgresql.conf中配置undo\_zone\_count的值，该参数代表的时候undo log的一种资源个数，建议配置为16384，即“undo\_zone\_count=16384”，配置完成后要重启数据库。

    \[postgresql.conf配置\]

    ```
    undo_zone_count=16384
    ```

    -   **创建方式1：创建表时指定存储引擎类型**

    ```
    create table test(id int, age int, name varchar(10)) with (storage_type=ustore);
    ```

    -   **创建方式2：GUC参数配置指定USTORE存储引擎**


1.  数据库启动之前，在postgresql.conf中设置“enable\_default\_ustore\_table=on”，默认指定用户创建表时使用USTORE存储引擎。

    \[postgresql.conf配置\]

    ```
    enable_default_ustore_table=on
    ```

2.  创建表。

    ```
    create table test(id int, age int, name varchar(10));
    ```


-   **创建索引的方式**

    USTORE存储引擎使用的索引为UBtree， UBtree是专门给USTORE存储引擎开发的索引，也是该引擎目前唯一支持的索引类型。

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
        openGauss=# create index ubt_idx on test(age);
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
            "ubt_idx" ubtree (age) WITH (storage_type=USTORE) TBALESPACE pg_default
        Has OIDs: no
        Options: orientation=row, storage_type=ustore, compression=no
        ```

    -   **创建方式2：创建索引时使用using关键字指定索引类型为“ubtree”**

        ```
        openGauss=# create index ubt_idx on test using ubtree(age);
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
            "ubt_idx" ubtree (age) WITH (storage_type=USTORE) TBALESPACE pg_default
        Has OIDs: no
        Options: orientation=row, storage_type=ustore, compression=no
        ```



