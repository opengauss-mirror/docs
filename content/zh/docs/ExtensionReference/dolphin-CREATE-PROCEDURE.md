# CREATE PROCEDURE<a name="ZH-CN_TOPIC_0289900087"></a>

## 功能描述<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_s824c141a39964bd39575295aebb98d67"></a>

创建一个新的存储过程。

## 注意事项<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_s8e31b13bfac744069adb47a99f52d6fe"></a>

相比于原始的openGauss，dolphin对于CREATE PROCEDURE语法的修改为：

1. 增加 LANGUAGE 选项。

2. 增加语法兼容项 [NOT] DETERMINISTIC。

3. 增加语法兼容项 { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } 。

4. 增加语法兼容项 SQL SECURITY { DEFINER | INVOKER }。

5. 兼容MySQL的创建存储过程的语法格式

6. 兼容创建存储过程紧跟单条查询语句

## 语法格式<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

- openGauss 原始创建存储过程的语法。

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    [ ( {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...]) ]
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL |SQL ] SECURITY INVOKER | [ EXTERNAL|SQL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
       | {DETERMINISTIC | NOT DETERMINISTIC}
       | LANGUAGE lang_name
       | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    ][ ... ]
 { IS | AS }
plsql_body
/
```

- 使用MySQL 的格式进行创建存储过程。

  注意：使用MMySQL 的格式创建时，需要在客户端使用delimiter 命令设置结束符。

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    ( [ {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...] ] )
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL |SQL ] SECURITY INVOKER | [ EXTERNAL|SQL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
       | {DETERMINISTIC | NOT DETERMINISTIC}
       | LANGUAGE lang_name
       | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    ][ ... ]
	routine_body
```

- 创建存储过程紧跟单条查询语句。

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    ( [ {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...] ] )
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL |SQL ] SECURITY INVOKER | [ EXTERNAL|SQL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
       | {DETERMINISTIC | NOT DETERMINISTIC}
       | LANGUAGE lang_name
       | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    ][ ... ]
	select_stmt
```

## 参数说明<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

- **LANGUAGE  lang_name**

  用以实现存储过程的语言的名称。默认值 plpgsql。

- **SQL SECURITY INVOKER**
 
  表明该存储过程将带着调用它的用户的权限执行。该参数可以省略。

  SQL SECURITY INVOKER和SECURITY INVOKER和AUTHID CURRENT\_USER的功能相同。

- **SQL SECURITY DEFINER**

  声明该存储过程将以创建它的用户的权限执行。

  SQL SECURITY DEFINER和AUTHID DEFINER和SECURITY DEFINER的功能相同。

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  语法兼容项。

## 示例<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_s414adb8f7846482184cbbd960d4adfcf"></a>

```
--创建存储过程使用单条查询语句，显示为CREATE FUNCTION
openGauss=#  create procedure procxx() select a from t1;
CREATE FUNCTION

--结果集类似RETURNS SETOF RECORD
openGauss=# select procxx();
 procxx
--------
 (1)
 (2)
(2 rows)

```

## 相关链接<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sfe39b39f278f4933914a438f40c63954"></a>

[CREATE PROCEDURE](../SQLReference/CREATE-PROCEDURE.md)