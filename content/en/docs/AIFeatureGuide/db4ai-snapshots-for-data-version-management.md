# DB4AI-Snapshots for Data Version Management<a name="EN-US_TOPIC_0000001149626401"></a>

DB4AI-Snapshots is used by the DB4AI module to manage dataset versions. With the DB4AI-Snapshots component, developers can easily and quickly perform data preprocessing operations such as feature filtering and type conversion. In addition, developers can perform version control on training datasets like Git. After a data table snapshot is created, it can be used as a view. However, once the data table snapshot is released, it is fixed as static data. To modify the content of this data table snapshot, you need to create a data table snapshot with a different version number.

## Lifecycle of DB4AI-Snapshots<a name="section972912984818"></a>

DB4AI-Snapshots can be published, archived, or purged. After being published, DB4AI-Snapshots can be used. Archived DB4AI-Snapshots are in the archiving period and will not be used to train new models. Instead, old data is used to verify new models. Purged DB4AI-Snapshots will not be found in the database system.

Note that the DB4AI-Snapshots function is used to provide unified training data for users. Team members can use the specified training data to retrain the machine learning models, facilitating collaboration between users. Therefore, the DB4AI-Snapshots feature is not supported in scenarios where user data conversion is not supported, such as  **private users**  and  **separation of duty**  \(**enableSeparationOfDuty**  set to  **ON**\).

You can run the  **CREATE SNAPSHOT**  statement to create a data table snapshot. The created snapshot is in the published state by default. You can create a table snapshot in either  **MSS**  or  **CSS**  mode, which can be configured using the GUC parameter  **db4ai\_snapshot\_mode**. For the MSS mode, it is realized by materialization algorithm where data entity of original datasets is stored. The CSS mode is implemented based on a relative calculation algorithm where incremental data information is stored. The metadata of the data table snapshot is stored in the system directory of DB4AI. You can view it in the  **db4ai.snapshot**  system catalog.

You can run the  **ARCHIVE SNAPSHOT**  statement to mark a data table snapshot as archived, and run the  **PUBLISH SNAPSHOT**  statement to mark it as published again. The state of a data table snapshot is marked to help data scientists work together as a team.

If a table snapshot is no longer useful, you can run the  **PURGE SNAPSHOT**  statement to permanently delete it and restore the storage space.

## DB4AI-Snapshots Usage Guide<a name="section9973130101017"></a>

1.  Create a table and insert table data.

    If a data table exists in the database, you can create a data table snapshot based on the existing data table. To facilitate subsequent demonstration, create a data table named  **t1**  and insert test data into the table.

    ```
    create table t1 (id int, name varchar);
    insert into t1 values (1, 'zhangsan');
    insert into t1 values (2, 'lisi');
    insert into t1 values (3, 'wangwu');
    insert into t1 values (4, 'lisa');
    insert into t1 values (5, 'jack');
    ```

    Run the following SQL statement to query the content of the collocation data table:

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

2.  Use DB4AI-Snapshots.
    -   Create DB4AI-Snapshots.

        -   Example 1: CREATE SNAPSHOT... AS

            In the following example, the default version separator is an at sign \(@\), and the default subversion separator is a period \(.\). You can set the separator by setting the  **db4ai\_snapshot\_version\_delimiter**  and  **db4ai\_snapshot\_version\_separator**  parameters.

            ```
            create snapshot s1@1.0 comment is 'first version' as select * from t1;
            schema |  name
            --------+--------
             public | s1@1.0
            (1 row)
            ```

            The command output indicates that a snapshot has been created for data table  **s1**  and the version number is  **1.0**. A created data table snapshot can be queried in the same way as a common view, but cannot be updated using the  **INSERT INTO**  statement. For example, you can use any of the following statements to query the content of data table snapshot  **s1**  of version 1.0:

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

            You can run the following SQL statement to modify the content of the  **t1**  data table:

            ```
            UPDATE t1 SET name = 'tom' where id = 4;
            insert into t1 values (6, 'john');
            insert into t1 values (7, 'tim');
            ```

            When content of data table  **t1**  is retrieved again, it is found that although the content of data table  **t1**  has changed, the query result of data table snapshot  **s1@1.0**  does not change. Because data in data table  **t1**  has changed, to use content of the current data table as a version 2.0, you can create snapshot  **s1@2.0**  by using the following SQL statement:

            ```
            create snapshot s1@2.0 as select * from t1;
            ```

            According to the foregoing example, it can be found that the data table snapshot can solidify content of a data table, to avoid instability during training of a machine learning model caused by data modification in the process, and can also avoid a lock conflict caused when multiple users access and modify the same table at the same time.

        -   Example 2: CREATE SNAPSHOT... FROM

            You can run an SQL statement to inherit a created data table snapshot and generate a new data table snapshot based on the data modification. Example:

            ```
            create snapshot s1@3.0 from @1.0 comment is 'inherits from @1.0' using (INSERT VALUES(6, 'john'), (7, 'tim'); DELETE WHERE id = 1);
            schema |  name
            --------+--------
             public | s1@3.0
            (1 row)
            ```

            Where, @ is the data table snapshot version separator and the from clause is followed by the existing data table snapshot, in the format of @ + version number. You can add an operation keyword \(such as  **INSERT**,  **UPDATE**,  **DELETE**, or  **ALTER**\) after the  **USING**  keyword. In the  **INSERT INTO**  and  **DELETE FROM**  statements, clauses related to data table snapshot names, such as  **INTO**  and  **FROM**, can be omitted. For details, see  [AI Feature Functions](../SQLReference/ai-feature-functions.md).

            In the example, based on the  **s1@1.0**  snapshot, insert two pieces of data and delete one piece of data to generate a new snapshot  **s1@3.0**. Then, retrieve  **s1@3.0**.

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


    -   Delete the data table snapshot  **SNAPSHOT**.

        ```
        purge snapshot s1@3.0;
        schema |  name
        --------+--------
         public | s1@3.0
        (1 row)
        ```

        At this time, no data can be retrieved from  **s1@3.0**, and the records of the data table snapshot in the  **db4ai.snapshot**  view are cleared. Deleting the data table snapshot of this version does not affect the data table snapshots of other versions.

    -   Sample from a data table snapshot.

        Example: Use the sampling rate 0.5 to extract data from snapshot  **s1**.

        ```
        sample snapshot s1@2.0 stratify by name as nick at ratio .5;
        schema |    name
        --------+------------
         public | s1nick@2.0
        (1 row)
        ```

        You can use this function to create a training set and a test set. For example:

        ```
        SAMPLE SNAPSHOT s1@2.0  STRATIFY BY name AS _test AT RATIO .2, AS _train AT RATIO .8 COMMENT IS 'training';
        schema |      name
        --------+----------------
         public | s1_test@2.0
         public | s1_train@2.0
        (2 rows)
        ```

    -   Publish a data table snapshot.

        Run the following SQL statement to mark the data table snapshot  **s1@2.0**  as published:

        ```
        publish snapshot s1@2.0;
        schema |  name
        --------+--------
         public | s1@2.0
        (1 row)
        ```

    -   Archive a data table snapshot.

        Run the following statement to mark the data table snapshot as archived:

        ```
        archive snapshot s1@2.0;
        schema |  name
        --------+--------
         public | s1@2.0
        (1 row)
        ```

        You can use the views provided by DB4AI-Snapshots to view the status of the current data table snapshot and other information.

        ```
        select * from db4ai.snapshot;
        id | parent_id | matrix_id | root_id | schema |    name    | owner  |                 commands                 | comment | published | archived |          created           | row_count
        ----+-----------+-----------+---------+--------+------------+--------+------------------------------------------+---------+-----------+----------+----------------------------+-----------
          1 |           |           |       1 | public | s1@2.0     | omm | {"select *","from t1 where id > 3",NULL} |         | t         | f        | 2021-04-17 09:24:11.139868 |         2
          2 |         1 |           |       1 | public | s1nick@2.0 | omm | {"SAMPLE nick .5 {name}"}                |         | f         | f        | 2021-04-17 10:02:31.73923  |         0
        ```

3.  Perform troubleshooting in case of exceptions.
    -   The data table or DB4AI snapshot does not exist.

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

    -   Before deleting a snapshot, ensure that other snapshots that depend on it have been deleted.

        ```
        purge snapshot s1@1.0;
        ERROR:  cannot purge root snapshot 'public."s1@1.0"' having dependent snapshots
        HINT:  purge all dependent snapshots first
        CONTEXT:  referenced column: purge_snapshot_internal
        SQL statement "SELECT db4ai.purge_snapshot_internal(i_schema, i_name)"
        PL/pgSQL function db4ai.purge_snapshot(name,name) line 71 at PERFORM
        ```

4.  Set GUC parameters.
    -   db4ai\_snapshot\_mode:

        There are two snapshot modes: MSS \(materialized mode, used to store data entities\) and CSS \(computing mode, used to store incremental information\). The snapshot mode can be switched between MSS and CSS. The default snapshot mode is MSS.

    -   db4ai\_snapshot\_version\_delimiter:

        Used to set the data table snapshot version separator. The at sign \(@\) is the default data table snapshot version separator.

    -   db4ai\_snapshot\_version\_separator

        Used to set the data table snapshot subversion separator. The period \(.\) is the default data table snapshot subversion separator.

5.  View the snapshot details of a data table in the DB4AI schema by using  **db4ai.snapshot**.

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


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The DB4AI namespace is a private domain of this function. Functional indexes cannot be created in the DB4AI namespace.

