# 使用指导<a name="ZH-CN_TOPIC_0000002259758168"></a>

## 前提条件<a name="zh-cn_topic_0000001714949153_section11307523175912"></a>

数据库状态正常、连接正常。

## 使用方法示例<a name="zh-cn_topic_0000001714949153_section12324135224"></a>

以tpcc数据库为例：

```
gs_dbmind component sql_rewriter 5030 tpcc queries.sql --db-host 127.0.0.1 --db-user myname --schema public
```

queries.sql为需要改写的SQL文件，内容如下：

```
DELETE FROM bmsql_config;
DELETE FROM bmsql_config WHERE cfg_name='1';
```

结果为多个改写后的查询语句，显示在屏幕（无法改写的语句，显示为空），如下：

```
+--------------------------------------------------------------------------+------------------------------+
| Raw SQL                                                                  | Rewritten SQL                |
+--------------------------------------------------------------------------+------------------------------+
| DELETE FROM bmsql_config;                                                | TRUNCATE TABLE bmsql_config; |
| DELETE FROM bmsql_config WHERE cfg_name='1';                             |                              |
+--------------------------------------------------------------------------+------------------------------+
```

