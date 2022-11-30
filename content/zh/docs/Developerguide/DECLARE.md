# DECLARE<a name="ZH-CN_TOPIC_0289900564"></a>

## 功能描述<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_sf3fcf0507ea74a0ba4c4b4cbf0a0a8ba"></a>

DECLARE命令既可以定义一个游标，用于在一个大的查询里面检索少数几行数据，也可以作为一个匿名块的开始。

本节主要描述定义为游标的用法，开启匿名块的用法见[BEGIN](BEGIN.md)。

为了处理SQL语句，存储过程进程分配一段内存区域来保存上下文联系。游标是指向上下文区域的句柄或指针。借助游标，存储过程可以控制上下文区域的变化。

通常游标和SELECT一样返回文本格式。因为数据在系统内部是用二进制格式存储的，系统必须对数据做一定转换以生成文本格式。一旦数据是以文本形式返回，客户端应用需要把它们转换成二进制进行操作。使用FETCH语句，游标可以返回文本或二进制格式。

## 注意事项<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_s8f58e1ff1b9849b2845f196df6352f13"></a>

-   游标命令只能在事务块里使用。
-   应该小心使用二进制游标。文本格式一般都比对应的二进制格式占用的存储空间大。二进制游标返回内部二进制形态的数据，可能更易于操作。如果想以文本方式显示数据，则以文本方式检索会为用户节约很多客户端的工作。比如，如果查询从某个整数列返回1，在缺省的游标里将获得一个字符串1，但在二进制游标里将得到一个4字节的包含该数值内部形式的数值（大端顺序）。

## 语法格式<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_s77068dc6043742e086ef7bfea9075223"></a>

-   定义游标

    ```
    DECLARE cursor_name [ BINARY ] [ NO SCROLL ]
        CURSOR [ { WITH | WITHOUT } HOLD ] FOR query ;
    ```

-   开启匿名块

    ```
    [DECLARE [declare_statements]]
    BEGIN
    execution_statements
    END;
    /
    ```


## 参数说明<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_safdd83ccfa754a3188de60962295adad"></a>

-   **cursor\_name**

    将要创建的游标名。

    取值范围：遵循数据库对象命名规范。

-   **BINARY**

    指明游标以二进制而不是文本格式返回数据。

-   **NO SCROLL**

    声明游标检索数据行的方式。

    -   NO SCROLL：声明该游标不能用于以倒序的方式检索数据行。
    -   未声明：根据执行计划的不同，自动判断该游标是否可以用于以倒序的方式检索数据行。

-   **WITH HOLD**

    **WITHOUT HOLD**

    声明当创建游标的事务结束后，游标是否能继续使用。

    -   WITH HOLD：声明该游标在创建它的事务结束后仍可继续使用。
    -   WITHOUT HOLD：声明该游标在创建它的事务之外不能再继续使用，此游标将在事务结束时被自动关闭。
    -   如果不指定WITH HOLD或WITHOUT HOLD，默认行为是WITHOUT HOLD。

-   **query**

    使用SELECT或VALUES子句指定游标返回的行。

    取值范围：SELECT或VALUES子句。

-   **declare\_statements**

    声明变量，包括变量名和变量类型，如“sales\_cnt int”。

-   **execution\_statements**

    匿名块中要执行的语句。

    取值范围：已存在的函数名称。


## 示例<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_s5587dfafbfee44509237e4eb718ccc55"></a>

定义游标示例请参考FETCH的[示例](FETCH.md#zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_s1ee72832a27547e4949061a010e24578)。

## 相关链接<a name="zh-cn_topic_0283137571_zh-cn_topic_0237122130_zh-cn_topic_0059777616_sb9bc0f8b2b464231a9dc551fa79f0485"></a>

[BEGIN](BEGIN.md)，[FETCH](FETCH.md)
