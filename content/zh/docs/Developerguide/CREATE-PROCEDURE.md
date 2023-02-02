# CREATE PROCEDURE<a name="ZH-CN_TOPIC_0289900087"></a>

## 功能描述<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_s824c141a39964bd39575295aebb98d67"></a>

创建一个新的存储过程。

## 注意事项<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_s8e31b13bfac744069adb47a99f52d6fe"></a>

-   如果创建存储过程时参数或返回值带有精度，不进行精度检测。
-   创建存储过程时，存储过程定义中对表对象的操作建议都显示指定模式，否则可能会导致存储过程执行异常。
-   在创建存储过程时，存储过程内部通过SET语句设置current\_schema和search\_path无效。执行完函数search\_path和current\_schema与执行函数前的search\_path和current\_schema保持一致。
-   如果存储过程参数中带有出参，SELECT调用存储过程必须缺省出参，CALL调用存储过程调用非重载函数时必须指定出参，对于重载的package函数，out参数可以缺省，具体信息参见[CALL](CALL.md)的示例。
-   存储过程指定package属性时支持重载。
-    不能创建仅形参名字不同（存储过程名和参数列表类型都一样）的重载存储过程。
-    不能创建与函数拥有相同名称和参数列表的存储过程。
-   在存储过程内部使用未声明的变量，存储过程被调用时会报错。
-   在创建procedure时，不能在avg函数外面嵌套其他agg函数，或者其他系统函数。
-   在存储过程内部调用其它无参数的存储过程时，可以省略括号，直接使用存储过程名进行调用。
-   在存储过程内部调用其他有出参的函数，如果在赋值表达式中调用时，被调函数的出参可以省略，给出了也会被忽略。
-   存储过程支持参数注释的查看与导出、导入。
-   存储过程支持介于IS/AS与plsql\_body之间的注释的查看与导出、导入。
-   存储过程默认为SECURITY INVOKER权限，如果想将默认行为改为SECURITY DEFINER权限，需要设置guc参数behavior\_compat\_options='plsql\_security\_definer'。
-   被授予CREATE ANY FUNCTION权限的用户，可以在用户模式下创建/替换存储过程。
-   out/inout参数必须传入变量，不能够传入常量。
-   集中式环境下，想要调用in参数相同，out参数不同的存储过程，需要设置guc参数behavior\_compat\_options='proc\_outparam\_override',并且打开参数后，无论使用select还是call调用存储过程，都必须加上out参数。打开参数后，不支持使用perform调用存储过程或函数。

## 语法格式<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    [ ( {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...]) ]
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
    ][ ... ]
 { IS | AS } 
plsql_body 
/
```

## 参数说明<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

-   **OR REPLACE**

    当存在同名的存储过程时，替换原来的定义。

-   **procedure\_name**

    创建的存储过程名称，可以带有模式名。

    取值范围：字符串，要符合标识符的命名规范。

-   **argmode**

    参数的模式。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >VARIADIC用于声明数组类型的参数。

    取值范围： IN、OUT、INOUT或VARIADIC。缺省值是IN。只有OUT模式的参数能跟在VARIADIC参数之后。

-   **argname**

    参数的名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **argtype**

    参数的数据类型。可以使用%TYPE或%ROWTYPE间接引用变量或表的类型，详细可参考存储过程章节[定义变量](定义变量.md)。

    取值范围：可用的数据类型。

-   **configuration\_parameter**
    -   **value**

        把指定的配置参数设置为给定的值。如果value是DEFAULT，则在新的会话中使用系统的缺省设置。OFF关闭设置。

        取值范围：字符串

        -   DEFAULT
        -   OFF
        -   指定默认值。

    -   **from current**

        取当前会话中的值设置为configuration\_parameter的值。


-   **IMMUTABLE、STABLE**等

    行为约束可选项。各参数的功能与CREATE FUNCTION类似，详细说明见[CREATE FUNCTION](CREATE-FUNCTION.md)

-   **COMMENT text**

    指定存储过程注释。    

-   **plsql\_body**

    PL/SQL存储过程体。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >当在存储过程体中进行创建用户等涉及用户密码相关操作时，系统表及csv日志中会记录密码的明文。因此不建议用户在存储过程体中进行涉及用户密码的相关操作。


>![](public_sys-resources/icon-note.gif) **说明：** 
>argname和argmode的顺序没有严格要求，推荐按照argname、argmode、argtype的顺序使用。

## 相关链接<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sfe39b39f278f4933914a438f40c63954"></a>

[DROP PROCEDURE](DROP-PROCEDURE.md)

## 优化建议<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_section60380346161036"></a>

-   analyse | analyze

    -   不支持在事务或匿名块中执行analyze 。
    -   不支持在函数或存储过程中执行analyze操作。

