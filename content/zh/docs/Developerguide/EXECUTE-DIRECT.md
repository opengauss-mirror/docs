# EXECUTE DIRECT

## 功能描述<a name="zh-cn_topic_0059779060_s1b14773726ac4469a14e509530a7a957"></a>

在指定的节点上执行SQL语句。一般情况下，SQL语句的执行是由集群负载自动分配到合适的节点上，execute direct主要用于数据库维护和测试。

## 注意事项<a name="zh-cn_topic_0059779060_s8aed237cc11e48bcb20d63f3ed081327"></a>

-   当enable\_nonsysadmin\_execute\_direct=off时，只有系统管理员和监控管理员才能执行EXECUTE DIRECT。
-   为了各个节点上数据的一致性，SQL语句仅支持SELECT，不允许执行事务语句、DDL、DML。
-   使用此类型语句在指定的DN执行stddev聚集计算时，返回结果集是以三元数组形式返回，如\{3, 8, 30\}，表示count结果为3，sum结果为8，平方和为30。使用此类型语句在指定的DN执行AVG聚集计算时，返回结果集以二元组形式返回，如\{4，2\}，表示sum结果为4，count结果为2。注意，当数据为列存时，调用avg函数结果未定义，请使用stddev\_samp函数。
-   当指定多个节点时，不支持agg函数，当query中包含agg函数时，会返回“EXECUTE DIRECT on multinode not support agg functions.”
-   由于CN节点不存储用户表数据，不允许指定CN节点执行用户表上的SELECT查询。
-   不允许执行嵌套的EXECUTE DIRECT语句，即执行的SQL语句不能同样是EXECUTE DIRECT语句，此时可直接执行最内层EXECUTE DIRECT语句代替。
-   agg函数查询结果与直接在CN上查询不一致，会返回多个信息，不支持array\_avg函数。

## 语法格式<a name="zh-cn_topic_0059779060_s24ab1cb591b54a43af5fe6d87cc067a1"></a>

```
EXECUTE DIRECT ON ( nodename [, ... ] ) query ;
EXECUTE DIRECT ON { COORDINATORS | DATANODES | ALL } query;
```

## 参数说明<a name="zh-cn_topic_0059779060_s5c57cb1e5e8740dcb15254b0ee05e666"></a>

-   nodename

    节点名称。

    取值范围：已存在的节点。

-   query

    要执行查询语句。

-   COORDINATORS

    在所有coordinator执行查询语句。

-   DATANODES

    在所有datanode执行查询语句。

-   ALL

    在所有coordinator和datanode执行查询语句。


## 示例<a name="zh-cn_topic_0059779060_s11a931f26ab344c1aab49ebd522ee0ad"></a>

```
--查询当前数据库实例的节点分布状态。
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

--查询dn_6001_6002上tpcds.customer_address记录。
openGauss=# EXECUTE DIRECT ON(dn_6001_6002) 'select count(*) from tpcds.customer_address';
 count
-------
 16922
(1 row)

--查询tpcds.customer_address所有记录。
openGauss=# SELECT count(*) FROM tpcds.customer_address;
 count
-------
 50000
(1 row)
```
