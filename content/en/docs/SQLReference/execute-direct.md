# EXECUTE DIRECT<a name="EN-US_TOPIC_0000001197786203"></a>

## Function<a name="en-us_topic_0059779060_s1b14773726ac4469a14e509530a7a957"></a>

**EXECUTE DIRECT**  executes an SQL statement on a specified node. Generally, the cluster automatically allocates an SQL statement to proper nodes.  **EXECUTE DIRECT**  is mainly used for database maintenance and testing.

## Precautions<a name="en-us_topic_0059779060_s8aed237cc11e48bcb20d63f3ed081327"></a>

-   When  **enable\_nonsysadmin\_execute\_direct**  is set to  **off**, only the system administrator and monitoring administrator can execute  **EXECUTE DIRECT**.
-   To ensure data consistency across nodes, only the  **SELECT**  statement can be used. Transaction statements, DDL, and DML cannot be used.
-   When the stddev aggregation calculation is performed on a specified DN using such statements, the result set is returned in triplet. For example, \{3, 8, 30\} indicates that the count result is 3, the sum result is 8, and the sum of squares is 30. When the AVG aggregation calculation is performed on a specified DN using such statements, the result set is returned in a binary tuple. For example, \{4,2\} indicates that the sum result is 4 and the count result is 2. Note: When data is stored in columns, the result of calling the AVG function is not defined. Use the  **stddev\_samp**  function.
-   When multiple nodes are specified, aggregate functions are not supported. If the query contains an aggregate function, the message "EXECUTE DIRECT on multinode not support agg functions." is returned.
-   CNs do not store user table data. Therefore, do not execute  **SELECT**  for querying user tables on a CN.
-   If the SQL statement to be executed is also  **EXECUTE DIRECT**, do not nest it into  **EXECUTE DIRECT**; instead, directly execute the inner  **EXECUTE DIRECT**.
-   The query result of the aggregate function is inconsistent with that on the CN. Multiple pieces of information are returned. The  **array\_avg**  function is not supported.

## Syntax<a name="en-us_topic_0059779060_s24ab1cb591b54a43af5fe6d87cc067a1"></a>

```
EXECUTE DIRECT ON ( nodename [, ... ] ) query ;
EXECUTE DIRECT ON { COORDINATORS | DATANODES | ALL } query;
```

## Parameter Description<a name="en-us_topic_0059779060_s5c57cb1e5e8740dcb15254b0ee05e666"></a>

-   nodename

    Specifies the node name.

    Value range: an existing node name

-   query

    Specifies the SQL statement to be executed.

-   COORDINATORS

    Runs the query statement on all CNs.

-   DATANODES

    Runs the query statement on all DNs.

-   ALL

    Runs the query statement on all CNs and DNs.


## Examples<a name="en-us_topic_0059779060_s11a931f26ab344c1aab49ebd522ee0ad"></a>

```
-- Query the node distribution status of the current database instance.
openGauss=# SELECT * FROM pgxc_node;
 node_name   | node_type | node_port |   node_host    | node_port1 |   node_host1   | hostis_primary | nodeis_primary | nodeis_preferred |   node_id   | sctp_port | control_port | sctp_port1 | control_port1 
--------------+-----------+-----------+----------------+------------+----------------+----------------+----------------+------------------+-------------+-----------+--------------+------------+---------------
 cn_5001      | C         |      8050 | 10.180.155.74  |       8050 | 10.180.155.74  | t              | f              | f                |  1120683504 |         0 |            0 |          0 |             0
 cn_5003      | C         |      8050 | 10.180.157.130 |       8050 | 10.180.157.130 | t              | f              | f                |  -125853378 |         0 |            0 |          0 |             0
 dn_6001_6002 | D         |     40050 | 10.180.155.74  |      45050 | 10.146.187.231 | t              | f              | f                |  1644780306 |     40052 |        40052 |      45052 |         45052
 dn_6003_6004 | D         |     40050 | 10.146.187.231 |      45050 | 10.180.157.130 | t              | f              | f                |  -966646068 |     40052 |        40052 |      45052 |         45052
 dn_6005_6006 | D         |     40050 | 10.180.157.130 |      45050 | 10.180.155.74  | t              | f              | f                |   868850011 |     40052 |        40052 |      45052 |         45052
 cn_5002      | C         |      8050 | localhost      |       8050 | localhost      | t              | f              | f                | -1736975100 |         0 |            0 |          0 |             0
(6 rows)

-- Query records in the tpcds.customer_address table on dn_6001_6002.
openGauss=# EXECUTE DIRECT ON(dn_6001_6002) 'select count(*) from tpcds.customer_address';
 count 
-------
 16922
(1 row)

-- Query all records in the tpcds.customer_address table.
openGauss=# SELECT count(*) FROM tpcds.customer_address;
 count 
-------
 50000
(1 row)
```

