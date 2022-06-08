# Overview<a name="EN-US_TOPIC_0000001147207387"></a>

## Background<a name="section129831239555"></a>

The ledger database, which integrates a blockchain idea, records a user operation in two types of historical tables: a user history table and a global blockchain table. When a user creates a tamper-proof user table, the system automatically adds a hash column to the table to save the hash summary of each row of data. In blockchain schema, a user history table is created to record the change behavior of each data record in the user table. The user's modification to the tamper-proof user table will be recorded in the global blockchain table. Because the history table can only be appended and cannot be modified, the records in the history table are connected to form the modification history of the tamper-proof user table.

The name and structure of the user history table are as follows:

**Table  1**  Columns in the blockchain.<_schemaname_\>\_<_tablename_\>\_hist user history table

<a name="en-us_topic_0059778793_t611ff04302e6463c8850c39d3e1d78fb"></a>
<table><thead align="left"><tr id="en-us_topic_0059778793_r8d98f172fcb143a4b42b10577220d355"><th class="cellrowborder" valign="top" width="27.200000000000003%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"><a name="en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"></a><a name="en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"></a>Column Name</p>
</th>
<th class="cellrowborder" valign="top" width="25.369999999999997%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"><a name="en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"></a><a name="en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"></a>Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"><a name="en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"></a><a name="en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778793_r2604828d09ad4f47ab4f2c1801948ebd"><td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.1 "><p id="p76412036838"><a name="p76412036838"></a><a name="p76412036838"></a>rec_num</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"><a name="en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"></a><a name="en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"><a name="en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"></a><a name="en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"></a>Sequence number of a row-level modification operation in the history table</p>
</td>
</tr>
<tr id="row188802051532"><td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.1 "><p id="p488010511231"><a name="p488010511231"></a><a name="p488010511231"></a>hash_ins</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%" headers="mcps1.2.4.1.2 "><p id="p9880175111311"><a name="p9880175111311"></a><a name="p9880175111311"></a>hash16</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p68801451338"><a name="p68801451338"></a><a name="p68801451338"></a>Hash value of the data row inserted by the INSERT or UPDATE operation</p>
</td>
</tr>
<tr id="row20374949435"><td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.1 "><p id="p15375174920315"><a name="p15375174920315"></a><a name="p15375174920315"></a>hash_del</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%" headers="mcps1.2.4.1.2 "><p id="p637544915318"><a name="p637544915318"></a><a name="p637544915318"></a>hash16</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p1037514918315"><a name="p1037514918315"></a><a name="p1037514918315"></a>Hash value of the data row deleted by the DELETE or UPDATE operation</p>
</td>
</tr>
<tr id="row1749114716320"><td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.1 "><p id="p104911471314"><a name="p104911471314"></a><a name="p104911471314"></a>pre_hash</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%" headers="mcps1.2.4.1.2 "><p id="p5491194713312"><a name="p5491194713312"></a><a name="p5491194713312"></a>hash32</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p84911047933"><a name="p84911047933"></a><a name="p84911047933"></a>Summary of the data in the history table of the current user</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Mapping between hash\_ins and hash\_del

<a name="table1712691518810"></a>
<table><tbody><tr id="row412716150813"><td class="cellrowborder" valign="top" width="27.200000000000003%"><p id="p412711151286"><a name="p412711151286"></a><a name="p412711151286"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%"><p id="p0127515787"><a name="p0127515787"></a><a name="p0127515787"></a>hash_ins</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%"><p id="p1712719151286"><a name="p1712719151286"></a><a name="p1712719151286"></a>hash_del</p>
</td>
</tr>
<tr id="row1012717158818"><td class="cellrowborder" valign="top" width="27.200000000000003%"><p id="p11277152819"><a name="p11277152819"></a><a name="p11277152819"></a>INSERT</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%"><p id="p1012771512819"><a name="p1012771512819"></a><a name="p1012771512819"></a>(√) Hash value of the inserted row</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%"><p id="p1312720151784"><a name="p1312720151784"></a><a name="p1312720151784"></a>Empty</p>
</td>
</tr>
<tr id="row1112751515817"><td class="cellrowborder" valign="top" width="27.200000000000003%"><p id="p212731515814"><a name="p212731515814"></a><a name="p212731515814"></a>DELETE</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%"><p id="p1512712151582"><a name="p1512712151582"></a><a name="p1512712151582"></a>Empty</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%"><p id="p997614511292"><a name="p997614511292"></a><a name="p997614511292"></a>(√) Hash value of the deleted row</p>
</td>
</tr>
<tr id="row6127141510814"><td class="cellrowborder" valign="top" width="27.200000000000003%"><p id="p41278157811"><a name="p41278157811"></a><a name="p41278157811"></a>UPDATE</p>
</td>
<td class="cellrowborder" valign="top" width="25.369999999999997%"><p id="p176821056192"><a name="p176821056192"></a><a name="p176821056192"></a>(√) Hash value of the newly inserted data</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%"><p id="p254616587913"><a name="p254616587913"></a><a name="p254616587913"></a>(√) Hash value of the row before deletion</p>
</td>
</tr>
</tbody>
</table>

## Procedure<a name="section1993385411913"></a>

1.  Create a schema in tamper-proof schema.

    For example, create  **ledgernsp**  in tamper-proof schema.

    ```
    openGauss=# CREATE SCHEMA ledgernsp WITH BLOCKCHAIN;
    ```

2.  Create a tamper-proof user table in tamper-proof schema.

    For example, create a tamper-proof user table  **ledgernsp.usertable**.

    ```
    openGauss=# CREATE TABLE ledgernsp.usertable(id int, name text);
    ```

    Check the structure of the tamper-proof user table and the corresponding user history table.

    ```
    openGauss=# \d+ ledgernsp.usertable;
    openGauss=# \d+ blockchain.ledgernsp_usertable_hist;
    ```

    The command output is as follows:

    ```
    openGauss=# \d+ ledgernsp.usertable;
                         Table "ledgernsp.usertable"
     Column |  Type   | Modifiers | Storage  | Stats target | Description
    --------+---------+-----------+----------+--------------+-------------
     id     | integer |           | plain    |              |
     name   | text    |           | extended |              |
     hash   | hash16  |           | plain    |              |
    Has OIDs: no
    Distribute By: HASH(id)
    Location Nodes: ALL DATANODES
    Options: orientation=row, compression=no
    History table name: ledgernsp_usertable_hist
    
    openGauss=# \d+ blockchain.ledgernsp_usertable_hist;
                 Table "blockchain.ledgernsp_usertable_hist"
      Column  |  Type  | Modifiers | Storage | Stats target | Description
    ----------+--------+-----------+---------+--------------+-------------
     rec_num  | bigint |           | plain   |              |
     hash_ins | hash16 |           | plain   |              |
     hash_del | hash16 |           | plain   |              |
     pre_hash | hash32 |           | plain   |              |
    Indexes:
        "gs_hist_16388_index" PRIMARY KEY, btree (rec_num int4_ops) TABLESPACE pg_default
    Has OIDs: no
    Options: internal_mask=263
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Tamper-proof tables cannot be non-row-store tables, temporary tables, foreign tables, or unlogged tables. Non-row-store tables do not have the temper-proof attribute.
    >-   When a temper-proof table is created, a system column named  **hash**  is automatically added. Therefore, the maximum number of columns in the temper-proof table is 1599.

3.  Modify the data in the tamper-proof user table.

    For example, execute  **INSERT**,  **UPDATE**, or  **DELETE**  on the tamper-proof user table.

    ```
    openGauss=# INSERT INTO ledgernsp.usertable VALUES(1, 'alex'), (2, 'bob'), (3, 'peter');
    INSERT 0 3
    openGauss=# SELECT *, hash FROM ledgernsp.usertable ORDER BY id;
     id | name  |       hash
    ----+-------+------------------
      1 | alex  | 1f2e543c580cb8c5
      2 | bob   | 8fcd74a8a6a4b484
      3 | peter | f51b4b1b12d0354b
    (3 rows)
    
    openGauss=# UPDATE ledgernsp.usertable SET name = 'bob2' WHERE id = 2;
    UPDATE 1
    openGauss=# SELECT *, hash FROM ledgernsp.usertable ORDER BY id;
     id | name  |       hash
    ----+-------+------------------
      1 | alex  | 1f2e543c580cb8c5
      2 | bob2  | 437761affbb7c605
      3 | peter | f51b4b1b12d0354b
    (3 rows)
    
    openGauss=# DELETE FROM ledgernsp.usertable WHERE id = 3;
    DELETE 1
    openGauss=# SELECT *, hash FROM ledgernsp.usertable ORDER BY id;
     id | name |       hash
    ----+------+------------------
      1 | alex | 1f2e543c580cb8c5
      2 | bob2 | 437761affbb7c605
    (2 rows)
    ```


