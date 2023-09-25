# SHOW VARIABLES

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

SHOW VARIABLES显示系统变量的值。 该语句不需要任何特权。它仅需要连接到服务器的能力。
可以追加like和where子句来进行更进一步的匹配。

SHOW VARIABLES接受可选GLOBAL或SESSION可变范围修饰符：

- 使用GLOBAL修饰符，该语句显示全局系统变量值。这些是用于初始化与opengauss的新连接的相应会话变量的值。如果变量没有全局值，则不会显示任何值。
- 使用SESSION修饰符，该语句显示对当前连接有效的系统变量值。
- 如果不存在修饰符，则默认值为SESSION。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [GLOBAL | SESSION] VARIABLES [LIKE 'pattern' | WHERE expr];
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[GLOBAL | SESSION]**

  global表示查询guc参数的默认值。
  session表示查询guc参数的会话值。

- **[LIKE 'pattern' | WHERE expr]**

  匹配表达式。


## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查询以v开头的guc参数
openGauss=# show variables like 'v%';
       Variable_name        |   Value    
----------------------------+------------
 vacuum_cost_delay          | 0
 vacuum_cost_limit          | 200
 vacuum_cost_page_dirty     | 20
 vacuum_cost_page_hit       | 1
 vacuum_cost_page_miss      | 10
 vacuum_defer_cleanup_age   | 0
 vacuum_freeze_min_age      | 2000000000
 vacuum_freeze_table_age    | 4000000000
 vacuum_gtt_defer_check_age | 10000
 var_eq_const_selectivity   | off
 version_retention_age      | 0
(11 rows)
```
