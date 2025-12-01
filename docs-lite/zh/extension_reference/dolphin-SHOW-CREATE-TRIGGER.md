# SHOW CREATE TRIGGER

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

它返回可用于重新创建命名触发器的确切字符串。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

sql_mode是查询时的会话值,b数据库在这里展示的是创建例程时绑定的sql_mode，opengauss这里展示的是会话的值，因为opengauss在创建例程时不会将例程与sql_mode绑定。

character_set_client是client_encoding 创建例程时系统变量 的会话值 。

collation_connection是lc_collate 创建数据库时指定的值。

Database Collation是lc_collate 创建数据库时指定的值。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE TRIGGER trigger_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **trigger_name**

    触发器名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查询触发器创建语句
openGauss=# show create trigger before_ins_stmt_trig;
       Trigger        |              sql_mode               |                                                        SQL Original Statement                          
                              | character_set_client | collation_connection | Database Collation 
----------------------+-------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------
 before_ins_stmt_trig | sql_mode_strict,sql_mode_full_group | CREATE TRIGGER before_ins_stmt_trig BEFORE INSERT ON main_table FOR EACH STATEMENT EXECUTE PROCEDURE trigger_func('before_ins_stmt') | UTF8                 | en_US.UTF-8          | en_US.UTF-8
(1 row)
```
