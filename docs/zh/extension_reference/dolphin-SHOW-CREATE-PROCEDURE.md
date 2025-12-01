# SHOW CREATE PROCEDURE

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

它返回可用于重新创建命名存储过程的确切字符串。 类似的语句 SHOW CREATE FUNCTION 显示有关存储函数的信息。
要使用任一语句，您必须具有全局 SELECT 特权。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

sql_mode是查询时的会话值,b数据库在这里展示的是创建例程时绑定的sql_mode,opengauss这里展示的是会话的值，因为opengauss在创建例程时不会将例程与sql_mode绑定。

character_set_client 是 client_encoding 创建例程时系统变量 的会话值 。

collation_connection 是 lc_collate 创建数据库时指定的值。

Database Collation 是 lc_collate 创建数据库时指定的值。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE PROCEDURE proc_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **proc_name**

    存储过程名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建存储过程
openGauss=# create procedure test_procedure_test(int,int)
openGauss-# SHIPPABLE IMMUTABLE
openGauss-# as
openGauss$# begin
openGauss$# select $1 + $2;
openGauss$# end;
openGauss$# /
CREATE PROCEDURE
--查询存储过程创建语句
openGauss=# show create procedure test_procedure_test;
      Procedure      |                        Create Procedure                         |              sql_mode               | character_set_client | collation_connection | Database Collation 
---------------------+-----------------------------------------------------------------+-------------------------------------+----------------------+----------------------+--------------------
 test_procedure_test | CREATE OR REPLACE PROCEDURE public.test_procedure_test(int,int)+| sql_mode_strict,sql_mode_full_group | UTF8                 | en_US.UTF-8    
      | en_US.UTF-8
                     |  IMMUTABLE SHIPPABLE                                           +|                                     |                      |                
      | 
                     | AS  DECLARE                                                    +|                                     |                      |                
      | 
                     | begin                                                          +|                                     |                      |                
      | 
                     | select $1 + $2;                                                +|                                     |                      |                
      | 
                     | end;                                                           +|                                     |                      |                
      | 
                     | /                                                              +|                                     |                      |                
      | 
                     |                                                                 |                                     |                      |                
      | 
(1 row)
```
