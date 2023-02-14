# BEGIN

## 功能描述<a name="zh-cn_topic_0283137310_zh-cn_topic_0237122087_zh-cn_topic_0059778122_s575f09bb20db48a4a74f6544c1593758"></a>

BEGIN可以用于开始一个匿名块，也可以用于开始一个事务。本节描述用BEGIN开始匿名块的语法，以BEGIN开始事务的语法见[START TRANSACTION](START-TRANSACTION.md)。

匿名块是能够动态地创建和执行过程代码的结构，而不需要以持久化的方式将代码作为数据库对象储存在数据库中。

## 注意事项<a name="zh-cn_topic_0283137310_zh-cn_topic_0237122087_zh-cn_topic_0059778122_sdc4b0a2020cb4122a1e23f44459b54dc"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137310_zh-cn_topic_0237122087_zh-cn_topic_0059778122_s9591de70a4254764b3ec5daed66d030a"></a>

-   开启匿名块

    ```
    [DECLARE [declare_statements]]
    BEGIN
    execution_statements
    END;
    /
    ```

-   开启事务

    ```
    BEGIN [ WORK | TRANSACTION ]
      [
        {
           ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
           | { READ WRITE | READ ONLY }
          } [, ...]
      ];
    ```


## 参数说明<a name="zh-cn_topic_0283137310_zh-cn_topic_0237122087_zh-cn_topic_0059778122_scabeb8532e944460bef66392557a9480"></a>

-   **declare\_statements**

    声明变量，包括变量名和变量类型，如“sales\_cnt int”。

-   **execution\_statements**

    匿名块中要执行的语句。

    取值范围：DML操作\(数据操纵操作：select、insert、delete、update\)或系统表中已注册的函数名称。


## 示例<a name="zh-cn_topic_0283137310_section41260277018"></a>

无。

## 相关链接<a name="zh-cn_topic_0283137310_zh-cn_topic_0237122087_zh-cn_topic_0059778122_section552105014012"></a>

[START TRANSACTION](START-TRANSACTION.md)
