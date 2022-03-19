# DB4AI-Snapshots数据版本管理<a name="ZH-CN_TOPIC_0000001149626401"></a>

DB4AI-Snapshots是DB4AI模块用于管理数据集版本的功能。通过DB4ai-Snapshots组件，开发者可以简单、快速地进行特征筛选、类型转换等数据预处理操作，同时还可以像git一样对训练数据集进行版本控制。数据表快照创建成功后可以像视图一样进行使用，但是一经发布后，数据表快照便固化为不可变的静态数据，如需修改该数据表快照的内容，需要创建一个版本号不同的新数据表快照。

## DB4AI-Snapshots的生命周期<a name="section972912984818"></a>

DB4AI-Snapshots的状态包括published、archived以及purged。其中，published可以用于标记该DB4AI-Snapshots 已经发布，可以进行使用。archived表示当前 DB4AI-Snapshots 处于“存档期”，一般不进行新模型的训练，而是利用旧数据对新的模型进行验证。purged则是该DB4AI-Snapshots 已经被删除的状态，在数据库系统中无法再检索到。

需要注意的是快照管理功能是为了给用户提供统一的训练数据，不同团队成员可以使用给定的训练数据来重新训练机器学习模型，方便用户间协同。为此**私有用户**和**三权分立**状态\(enableSeparationOfDuty=ON\)等涉及不支持用户数据转写等情况将不支持Snapshot特性。

用户可以通过“CREATE SNAPSHOT”语句创建数据表快照，创建好的快照默认即为published状态。可以采用两种模式创建数据表快照，即为MSS以及CSS模式，它们可以通过GUC参数db4ai\_snapshot\_mode进行配置。对于MSS模式，它是采用物化算法进行实现的，存储了原始数据集的数据实体；CSS则是基于相对计算算法实现的，存储的是数据的增量信息。数据表快照的元信息存储在DB4AI的系统目录中。可以通过db4ai.snapshot 系统表查看到。

可以通过“ARCHIVE SNAPSHOT”语句将某一个数据表快照标记为archived状态，可以通过“PUBLISH SNAPSHOT”语句将其再度标记为published状态。标记数据表快照的状态，是为了帮助数据科学家进行团队合作使用的。

当一个数据表快照已经丧失存在价值时，可以通过“PURGE SNAPSHOT”语句删除它，以便永久删除其数据并恢复存储空间。

## DB4AI-Snapshots使用指导<a name="section9973130101017"></a>

1.  创建表以及插入表数据。

    数据库内存在已有的数据表，可根据该已有的数据表创建对应的数据表快照。为了后续演示，在此处新建一个名为 t1 的数据表，并向其中插入测试数据。

    ```
    create table t1 (id int, name varchar);
    insert into t1 values (1, 'zhangsan');
    insert into t1 values (2, 'lisi');
    insert into t1 values (3, 'wangwu');
    insert into t1 values (4, 'lisa');
    insert into t1 values (5, 'jack');
    ```

    通过SQL语句，查询搭配数据表内容。

    ```
    SELECT * FROM t1;
    id |   name
    ----+----------
      1 | zhangsan
      2 | lisi
      3 | wangwu
      4 | lisa
      5 | jack
    (5 rows)
    ```

2.  使用DB4AI-Snapshots。
    -   创建DB4AI-Snapshots

        -   示例1：CREATE SNAPSHOT…AS

            示例如下，其中，默认版本分隔符为 “@”, 默认子版本分割符为 “.”，该分割符可以分别通过GUC参数db4ai\_snapshot\_version\_delimiter以及db4ai\_snapshot\_version\_separator进行设置。

            ```
            create snapshot s1@1.0 comment is 'first version' as select * from t1;
            schema |  name
            --------+--------
             public | s1@1.0
            (1 row)
            ```

            上述结果提示已经创建了数据表 s1的快照，版本号为 1.0。创建好后的数据表快照可以像使用一般视图一样进行查询，但不支持通过“INSERT INTO”语句进行更新。例如下面几种语句都可以查询到数据表快照s1的对应版本 1.0的内容：

            ```
            SELECT * FROM s1@1.0;
            SELECT * FROM public.s1@1.0;
            SELECT * FROM public . s1 @ 1.0;
            id |   name
            ----+----------
              1 | zhangsan
              2 | lisi
              3 | wangwu
              4 | lisa
              5 | jack
            (5 rows)
            ```

            可以通过下列SQL语句修改数据表t1的内容：

            ```
            UPDATE t1 SET name = 'tom' where id = 4;
            insert into t1 values (6, 'john');
            insert into t1 values (7, 'tim');
            ```

            再检索数据表t1的内容时，发现虽然数据表t1的内容已经发生变化，但是数据表快照 s1@1.0 版本的查询结果并未发生变化。由于数据表t1的数据已经发生了改变，如果将当前数据表的内容作为版本2.0，则可创建快照**s1@2.0**,创建的SQL语句如下：

            ```
            create snapshot s1@2.0 as select * from t1;
            ```

            通过上述例子，我们可以发现，数据表快照可以固化数据表的内容，避免中途对数据的改动造成机器学习模型训练时的不稳定，同时可以避免多用户同时访问、修改同一个表时造成的锁冲突。

        -   示例2：CREATE SNAPSHOT…FROM

            SQL语句可以对一个已经创建好的数据表快照进行继承，利用在此基础上进行的数据修改产生一个新的数据表快照。例如：

            ```
            create snapshot s1@3.0 from @1.0 comment is 'inherits from @1.0' using (INSERT VALUES(6, 'john'), (7, 'tim'); DELETE WHERE id = 1);
            schema |  name
            --------+--------
             public | s1@3.0
            (1 row)
            ```

            其中，“@”为数据表快照的版本分隔符，from子句后加上已存在的数据表快照，用法为“@”+版本号，USING关键字后加入可选的几个操作关键字（INSERT …/UPDATE …/DELETE …/ALTER …）,其中 “INSERT INTO”以及“DELETE FROM”语句中的“INTO”、“FROM”等与数据表快照名字相关联的子句可以省略，具体可以参考[AI特性函数](zh-cn_topic_0303599451.md)。

            示例中，基于前述s1@1.0快照，插入2条数据，删除1条新的数据，新生成的快照s1@3.0，检索该s1@3.0：

            ```
            SELECT * FROM s1@3.0;
            id |   name
            ----+----------
              2 | lisi
              3 | wangwu
              4 | lisa
              5 | jack
              6 | john
              7 | tim
            (7 rows)
            ```


    -   删除数据表快照SNAPSHOT
    
        ```
        purge snapshot s1@3.0;
        schema |  name
        --------+--------
         public | s1@3.0
        (1 row)
        ```
    
        此时，已经无法再从s1@3.0 中检索到数据了，同时该数据表快照在db4ai.snapshot视图中的记录也会被清除。删除该版本的数据表快照不会影响其他版本的数据表快照。
    
    -   从数据表快照中采样
    
        示例：从snapshot s1中抽取数据，使用0.5抽样率。
    
        ```
        sample snapshot s1@2.0 stratify by name as nick at ratio .5;
        schema |    name
        --------+------------
         public | s1nick@2.0
        (1 row)
        ```
    
        可以利用该功能创建训练集与测试集，例如：
    
        ```
        SAMPLE SNAPSHOT s1@2.0  STRATIFY BY name AS _test AT RATIO .2, AS _train AT RATIO .8 COMMENT IS 'training';
        schema |      name
        --------+----------------
         public | s1_test@2.0
         public | s1_train@2.0
        (2 rows)
        ```
    
    -   发布数据表快照
    
        采用下述SQL语句将数据表快照 s1@2.0 标记为published 状态：
    
        ```
        publish snapshot s1@2.0;
        schema |  name
        --------+--------
         public | s1@2.0
        (1 row)
        ```
    
    -   存档数据表快照
    
        采用下述语句可以将数据表快照标记为 archived 状态：
    
        ```
        archive snapshot s1@2.0;
        schema |  name
        --------+--------
         public | s1@2.0
        (1 row)
        ```
    
        可以通过db4ai-snapshots提供的视图查看当前数据表快照的状态以及其他信息：
    
        ```
        select * from db4ai.snapshot;
        id | parent_id | matrix_id | root_id | schema |    name    | owner  |                 commands                 | comment | published | archived |          created           | row_count
        ----+-----------+-----------+---------+--------+------------+--------+------------------------------------------+---------+-----------+----------+----------------------------+-----------
          1 |           |           |       1 | public | s1@2.0     | omm | {"select *","from t1 where id > 3",NULL} |         | t         | f        | 2021-04-17 09:24:11.139868 |         2
          2 |         1 |           |       1 | public | s1nick@2.0 | omm | {"SAMPLE nick .5 {name}"}                |         | f         | f        | 2021-04-17 10:02:31.73923  |         0
        ```

3.  异常场景
    -   数据表或db4ai-snapshots不存在时。

        ```
        purge snapshot s1nick@2.0;
        publish snapshot s1nick@2.0;
        ---------
        ERROR:  snapshot public."s1nick@2.0" does not exist
        CONTEXT:  PL/pgSQL function db4ai.publish_snapshot(name,name) line 11 at assignment
         
        archive snapshot s1nick@2.0;
        ----------
        ERROR:  snapshot public."s1nick@2.0" does not exist
        CONTEXT:  PL/pgSQL function db4ai.archive_snapshot(name,name) line 11 at assignment
        ```

    -   删除snapshot时，有依赖该快照的其他snapshot，需先确保删除对本快照所依赖的其他快照。

        ```
        purge snapshot s1@1.0;
        ERROR:  cannot purge root snapshot 'public."s1@1.0"' having dependent snapshots
        HINT:  purge all dependent snapshots first
        CONTEXT:  referenced column: purge_snapshot_internal
        SQL statement "SELECT db4ai.purge_snapshot_internal(i_schema, i_name)"
        PL/pgSQL function db4ai.purge_snapshot(name,name) line 71 at PERFORM
        ```

4.  相关GUC参数
    -   db4ai\_snapshot\_mode：

        Snapshot有2种模式：MSS（物化模式，存储数据实体）和CSS（计算模式，存储增量信息）。Snapshot可在MSS和CSS之间切换快照模式，默认是MSS模式。

    -   db4ai\_snapshot\_version\_delimiter：

        该参数为数据表快照版本分隔符。“@”为数据表快照的默认版本分隔符。

    -   db4ai\_snapshot\_version\_separator

        该参数为数据表快照子版本分隔符。“.”为数据表快照的默认版本分隔符。

5.  DB4AI Schema下的数据表快照详情db4ai.snapshot。

    ```
    openGauss=# \d db4ai.snapshot
                           Table "db4ai.snapshot"
      Column   |            Type             |         Modifiers
    -----------+-----------------------------+---------------------------
     id        | bigint                      |
     parent_id | bigint                      |
     matrix_id | bigint                      |
     root_id   | bigint                      |
     schema    | name                        | not null
     name      | name                        | not null
     owner     | name                        | not null
     commands  | text[]                      | not null
     comment   | text                        |
     published | boolean                     | not null default false
     archived  | boolean                     | not null default false
     created   | timestamp without time zone | default pg_systimestamp()
     row_count | bigint                      | not null
    Indexes:
        "snapshot_pkey" PRIMARY KEY, btree (schema, name) TABLESPACE pg_default
        "snapshot_id_key" UNIQUE CONSTRAINT, btree (id) TABLESPACE pg_default
    ```


>![](public_sys-resources/icon-note.gif) **说明：** 
>命名空间DB4AI是本功能的私有域，不支持在DB4AI的命令空间下创建函数索引（functional index）。

