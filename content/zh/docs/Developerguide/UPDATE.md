# UPDATE<a name="ZH-CN_TOPIC_0242370658"></a>

## 功能描述<a name="zh-cn_topic_0237122194_zh-cn_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 注意事项<a name="zh-cn_topic_0237122194_zh-cn_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

-   要修改表，用户必须对该表有UPDATE权限。
-   对expression或condition条件里涉及到的任何表要有SELECT权限。
-   对于列存表，暂时不支持RETURNING子句。
-   列存表不支持结果不确定的更新\(non-deterministic update\)。试图对列存表用多行数据更新一行时会报错。
-   列存表的更新操作，旧记录空间不会回收，需要执行VACUUM FULL table\_name进行清理。
-   对于列存复制表，暂不支持UPDATE操作。

## 语法格式<a name="zh-cn_topic_0237122194_zh-cn_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>

```
UPDATE [ ONLY ] table_name [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ RETURNING {* 
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

where sub_query can be:
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
```

## 参数说明<a name="zh-cn_topic_0237122194_zh-cn_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

-   **table\_name**

    要更新的表名，可以使用模式修饰。

    取值范围：已存在的表名称。

-   **alias**

    目标表的别名。

    取值范围：字符串，符合标识符命名规范。

-   **column\_name**

    要修改的字段名。

    支持使用目标表的别名加字段名来引用这个字段。例如：

    UPDATE foo AS f SET f.col\_name = 'postgres';

    取值范围：已存在的字段名。

-   **expression**

    赋给字段的值或表达式。

-   **DEFAULT**

    用对应字段的缺省值填充该字段。

    如果没有缺省值，则为NULL。

-   **sub\_query**

    子查询。

    使用同一数据库里其他表的信息来更新一个表可以使用子查询的方法。其中SELECT子句具体介绍请参考[SELECT](SELECT.md)。

-   **from\_list**

    一个表的表达式列表，允许在WHERE条件里使用其他表的字段。与在一个SELECT语句的FROM子句里声明表列表类似。

    >![](public_sys-resources/icon-notice.gif) **须知：**   
    >目标表绝对不能出现在from\_list里，除非在使用一个自连接（此时它必须以from\_list的别名出现）。  

-   **condition**

    一个返回Boolean类型结果的表达式。只有这个表达式返回true的行才会被更新。

-   **output\_expression**

    在所有需要更新的行都被更新之后，UPDATE命令用于计算返回值的表达式。

    取值范围：使用任何table以及FROM中列出的表的字段。\*表示返回所有字段。

-   **output\_name**

    字段的返回名称。


## 示例<a name="zh-cn_topic_0237122194_zh-cn_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

```
--创建表student1。
postgres=# CREATE TABLE student1
(
   stuno     int,
   classno   int 
);

--插入数据。
postgres=# INSERT INTO student1 VALUES(1,1);
postgres=# INSERT INTO student1 VALUES(2,2);
postgres=# INSERT INTO student1 VALUES(3,3);

--查看数据。
postgres=# SELECT * FROM student1;

--直接更新所有记录的值。
postgres=# UPDATE student1 SET classno = classno*2;

--查看数据。
postgres=# SELECT * FROM student1;

--删除表。
postgres=# DROP TABLE student1;
```

