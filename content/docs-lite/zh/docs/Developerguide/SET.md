# SET<a name="ZH-CN_TOPIC_0289899950"></a>

## 功能描述<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s8a5c6264f78f49e3aa93f388d68cd3e6"></a>

用于修改运行时配置参数。

## 注意事项<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s8cb7444b58764d99913a4cc61f397f9f"></a>

大多数运行时参数都可以用SET在运行时设置，但有些则在服务运行过程中或会话开始之后不能修改。

## 语法格式<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s29888afda1844d6f9fc677f1b59b5b7d"></a>

-   设置所处的时区。

    ```
    SET [ SESSION | LOCAL ] TIME ZONE { timezone | LOCAL | DEFAULT };
    ```

-   设置所属的模式。

    ```
    SET [ SESSION | LOCAL ] 
        {CURRENT_SCHEMA { TO | = } { schema | DEFAULT }
        | SCHEMA 'schema'};
    ```

-   设置客户端编码集。

    ```
    SET [ SESSION | LOCAL ] NAMES encoding_name;
    ```

-   设置XML的解析方式。

    ```
    SET [ SESSION | LOCAL ] XML OPTION { DOCUMENT | CONTENT };
    ```

-   设置其他运行时参数。

    ```
    SET [ LOCAL | SESSION ]
        { {config_parameter { { TO | = } { value | DEFAULT } 
                            | FROM CURRENT }}};
    ```


## 参数说明<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s39823c7ebd854a9f9c761b3a32b1c3c3"></a>

-   **SESSION**

    声明的参数只对当前会话起作用。如果SESSION和LOCAL都没出现，则SESSION为缺省值。

    如果在事务中执行了此命令，命令的产生影响将在事务回滚之后消失。如果该事务已提交，影响将持续到会话的结束，除非被另外一个SET命令重置参数。

-   **LOCAL**

    声明的参数只在当前事务中有效。在COMMIT或ROLLBACK之后，会话级别的设置将再次生效。

    不论事务是否提交，此命令的影响只持续到当前事务结束。一个特例是：在一个事务里面，即有SET命令，又有SET LOCAL命令，且SET LOCAL在SET后面，则在事务结束之前，SET LOCAL命令会起作用，但事务提交之后，则是SET命令会生效。

-   **TIME ZONE timezone**

    用于指定当前会话的本地时区。

    取值范围：有效的本地时区。该选项对应的运行时参数名称为TimeZone，DEFAULT缺省值为PRC。

-   **CURRENT\_SCHEMA**

    **schema**

    CURRENT\_SCHEMA用于指定当前的模式。

    取值范围：已存在模式名称。如果模式名不存在，会导致CURRENT\_SCHEMA值为空。

-   **SCHEMA schema**

    同CURRENT\_SCHEMA。此处的schema是个字符串。

    例如：set schema  'public';

-   **NAMES encoding\_name**

    用于设置客户端的字符编码。等价于set client\_encoding to encoding\_name。

    取值范围：有效的字符编码。该选项对应的运行时参数名称为client\_encoding，默认编码为UTF8。

-   **XML OPTION option**

    用于设置XML的解析方式。

    取值范围：CONTENT（缺省）、DOCUMENT

-   **config\_parameter**

    可设置的运行时参数的名称。可用的运行时参数可以使用SHOW ALL命令查看。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >部分通过SHOW ALL查看的参数不能通过SET设置。如max\_datanodes。

-   **value**

    config\_parameter的新值。可以声明为字符串常量、标识符、数字，或者逗号分隔的列表。DEFAULT用于把这些参数设置为它们的缺省值。


## 示例<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s51d29fa208274032a4e5308b57638421"></a>

```
--设置模式搜索路径。    
openGauss=# SET search_path TO tpcds, public;

--把日期时间风格设置为传统的 POSTGRES 风格(日在月前)。
openGauss=# SET datestyle TO postgres,dmy;
```

## 相关链接<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_sb71b84f08d92434d9974424733f4b326"></a>

[RESET](RESET.md)，[SHOW](SHOW.md)

