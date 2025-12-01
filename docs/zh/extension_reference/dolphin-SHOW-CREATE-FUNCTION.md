# SHOW CREATE FUNCTION

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

它返回可用于重新创建命名函数的确切字符串。 类似的语句 SHOW CREATE PROCEDURE 显示有关存储函数的信息。
要使用任一语句，您必须具有全局 SELECT 特权。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

sql_mode是查询时的会话值,b数据库在这里展示的是创建例程时绑定的sql_mode,opengauss这里展示的是会话的值,因为opengauss在创建例程时不会将例程与sql_mode绑定。

character_set_client 是 client_encoding 创建例程时系统变量 的会话值 。 

collation_connection 是 lc_collate 创建数据库时指定的值。 

Database Collation 是 lc_collate 创建数据库时指定的值。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE FUNCTION func_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **func_name**

    函数名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建函数
openGauss=# CREATE FUNCTION functest_A_1(text, date) RETURNS bool LANGUAGE 'sql'
       AS 'SELECT $1 = ''abcd'' AND $2 > ''2001-01-01''';
CREATE FUNCTION
--查询函数创建语句
openGauss=# show create function functest_A_1;
   Function   |                         Create Function                          |              sql_mode               | character_set_client | collation_connection 
| Database Collation 
--------------+------------------------------------------------------------------+-------------------------------------+----------------------+----------------------+--------------------
 functest_a_1 | CREATE OR REPLACE FUNCTION public.functest_a_1(text, date)      +| sql_mode_strict,sql_mode_full_group | UTF8                 | en_US.UTF-8          
| en_US.UTF-8
              |  RETURNS boolean                                                +|                                     |                      |                      
| 
              |  LANGUAGE sql                                                   +|                                     |                      |                      
| 
              |  NOT FENCED NOT SHIPPABLE                                       +|                                     |                      |                      
| 
              | AS $function$SELECT $1 = 'abcd' AND $2 > '2001-01-01'$function$;+|                                     |                      |                      
| 
              |                                                                  |                                     |                      |                      
| 
(1 row)
```
