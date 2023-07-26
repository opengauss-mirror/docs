# CALL

## 功能描述<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_s17e49a7670334c61978f059adf2cb65d"></a>

使用CALL命令可以调用已定义的函数和存储过程。

## 注意事项<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sdf7f29bdebc44178a9581f41f4257f09"></a>

相比于原始的openGauss，dolphin对于CALL语法的修改为：

1. 可以使用CALL语法调用含有查询语句的存储过程。

2. 可以MySQL 5.7.x的客户端工具，mysql-connector-java-5.1.47使用CALL语法调用含有查询语句的存储过程。 

## 语法格式<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sdf8eb47ae3d945fea7582a7753cdd985"></a>

```
CALL [schema.|package.] {func_name| procedure_name} ( param_expr );
```

## 参数说明<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sf183d9684eb54414b8f5c370a1c7038b"></a>

-   **schema**

    函数或存储过程所在的模式名称。

-   **package**

    函数或存储过程所在的package名称。

-   **func\_name**

    所调用函数或存储过程的名称。

    取值范围：已存在的函数名称。

-   **param\_expr**

    参数列表可以用符号“:=”或者“=\>”将参数名和参数值隔开，这种方法的好处是参数可以以任意顺序排列。若参数列表中仅出现参数值，则参数值的排列顺序必须和函数或存储过程定义时的相同。

    取值范围：已存在的函数参数名称或存储过程参数名称。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >当开启参数dolphin.sql_mode 为 'block_return_multi_results' 使用call调用存储存储过程或者函数时会有以下限制：
    - 必须使用用户自定义变量作为输出参数。
    - 只能支持调用plpgsql语言的存储过程。


## 示例<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_s299dc001fa4b48cd9b56412a73db23c0"></a>

```
--设置参数
openGauss=# set dolphin.sql_mode = 'block_return_multi_results';

--创建一个存储过程，返回多个查询语句的结果。
openGauss=# CREATE   PROCEDURE proc_a_2 ()  as 
begin
	select * from t;
	select * from test_1;
end;
/

--调用存储过程。
openGauss=# call proc_a_2();

```
## 相关链接<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sfe39b39f278f4933914a438f40c63954"></a>

[CALL](../SQLReference/CALL.md)

