# SHOW CREATE VIEW

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

它返回可用于重新创建命名视图的确切字符串。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

character_set_client是client_encoding创建例程时系统变量的会话值。 

collation_connection是lc_collate创建数据库时指定的值。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE VIEW view_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **view_name**

    视图名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建视图
openGauss=# create view tt19v as
openGauss-# select 'foo'::text = any(array['abc','def','foo']::text[]) c1,
openGauss-#        'foo'::text = any((select array['abc','def','foo']::text[])::text[]) c2;
CREATE VIEW
--查询视图创建语句
openGauss=# show create view tt19v;
 View  |                                                                                      Create View                                                            
                           | character_set_client | collation_connection 
-------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------
 tt19v | CREATE OR REPLACE VIEW public.tt19v AS                                                                                                                      
                          +| UTF8                 | en_US.UTF-8
       | SELECT ('foo'::text = ANY (ARRAY['abc'::text, 'def'::text, 'foo'::text])) AS c1, ('foo'::text = ANY ((SELECT ARRAY['abc'::text, 'def'::text, 'foo'::text] AS "array")::text[])) AS c2; |                      | 
(1 row)
```
