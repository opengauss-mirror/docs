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

+ 在兼容B模式（sql\_compatibility = 'B'）下设置参数。

  ```
  SET [ SESSION | @@SESSION. | @@]
        { {config_parameter = { expr | DEFAULT }}};
  SET { GLOBAL | @@GLOBAL.}
        { {config_parameter = { expr | DEFAULT }}}
  ```

  

+ 设置自定义用户变量。

  ```
  SET @var_name := expr [, @var_name := expr] ...
  SET @var_name = expr [, @var_name = expr] ...
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

    取值范围：有效的本地时区。该选项对应的运行时参数名称为TimeZone，DEFAULT缺省值为GMT。

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

+ **SESSION | @@SESSION. | @@**

  声明的参数生效方式为superuser、user，可通过pg\_settings系统视图的context字段确定，如果没有出现GLOBAL /SESSION，则SESSION为缺省值。支持config\_parameter赋值为表达式。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >- SET SESSION 只有在兼容B模式下（sql\_compatibility = 'B'）支持，并且GUC参数b\_format\_behavior\_compat\_options设置值包含 enable\_set\_variables的场景下才支持（set b\_format\_behavior\_compat\_options = 'enable\_set\_variables'\)。
  >- 使用@@config\_parameter进行操作符运算时，尽量使用空格隔开。比如set @config\_parameter1=@config\_parameter1\*2; 命令中，会将=@当做操作符，可将其修改为set @config\_parameter1= @config\_parameter1 \* 2 。

+ **GLOBAL | @@GLOBAL.**

  声明的参数生效范围为postmaster、sighup、backend，可通过pg\_settings系统视图的context字段确定。设置参数范围和生效方式与ALTER SYSTEM SET 语法相同。支持config\_parameter赋值为表达式。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >SET GLOBAL只有在兼容B模式下（sql\_compatibility = 'B'）支持，并且GUC参数b\_format\_behavior\_compat\_options 设置值包含 enable\_set\_variables 的场景下才支持（set b\_format\_behavior\_compat\_options = 'enable\_set\_variables'\)。

+ **var\_name**

  自定义变量名。变量名只能由数字、字母、下划线（\_），点（.）、$组成，如果使用单引号、双引号等引用时，则可以使用其他字符，如'var\_name'，“var\_name”，\`var\_name\`。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >-    SET自定义用户变量的只有在B模式下（sql_compatibility = B）支持，并且GUC参数enable_set_variable_b_format打开的场景下才支持（enable_set_variable_b_format = on）或者GUC参数b_format_behavior_compat_options设置值包含enable_set_variables的场景下也支持（即b_format_behavior_compat_options = 'enable_set_variables'）。
  >-   自定义变量只会存储整型、浮点型、字符串、位串和NULL。对于BOOLEAN、INT1、INT2、INT4、INT8类型会转为INT8类型；FLOAT4、FLOAT8、NUMBERIC会转化为FLOAT8进行存储（需要注意浮点型可能会有精度丢失）；BIT类型以BIT存储，VARBIT类型以VARBIT存储；NULL值以NULL存储；其他类型若可转化为字符串，则转为TEXT存储。
  >-   使用@var\_name进行操作符运算时，尽量使用空格隔开。比如set @v1=@v2+1;命令中，会将=@当做操作符，可将其修改为set @v1= @v2+1。
  >-   当sql\_compatibility = 'B' && b\_format\_behavior\_compat\_options = 'enable\_set\_variables'时，对于数据库原始的@ expr，请参考[数字操作符](数字操作函数和操作符.md#zh-cn_topic_0283136987_zh-cn_topic_0237121971_zh-cn_topic_0059777932_s00454841bcf24ad18eed980c0e3a2f75)，@需要与expr有空格，否则会将其解析成用户变量。
  >-   未初始化的变量值为NULL。
  >-   prepare语句中用户自定义变量存储的字符串只支持select/insert/update/delete/merge语法。
  >-   对于连续赋值的场景，只支持@var\_name1 := @var\_name2 := … := expr和@var\_name1 = @var\_name2 := … := expr，等号只有放在首位才表示赋值，其他位置表示比较操作符。

+ **expr**

  表达式，支持可直接或间接转为整型、浮点型、字符串、位串和NULL的表达式。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >字符串表达式中避免包含口令等敏感信息的函数，如加解密类函数gs\_encrypt，gs\_decrypt等，防止敏感信息泄露。

  


## 示例<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s51d29fa208274032a4e5308b57638421"></a>

```
--设置模式搜索路径。    
openGauss=# SET search_path TO tpcds, public;

--把日期时间风格设置为传统的 POSTGRES 风格(日在月前)。
openGauss=# SET datestyle TO postgres,dmy;

--SET自定义用户变量的功能
openGauss=# create database user_var dbcompatibility 'b';
openGauss=# \c user_var
user_var=# SET b_format_behavior_compat_options = enable_set_variables;
user_var=# SET @v1 := 1, @v2 := 1.1, @v3 := true, @v4 := 'dasda', @v5 := x'41';
--查询自定义用户变量
user_var=# select @v1, @v2, @v3, @v4, @v5, @v6, @v7;
--PREPARE语法使用自定义用户变量
user_var=# SET @sql = 'select 1';
user_var=# PREPARE stmt as @sql;
user_var=# EXECUTE stmt;

--设置B兼容性参数
openGauss=# create database test_set dbcompatibility 'B';
openGauss=# \c test_set
test_set=# set b_format_behavior_compat_options = 'enable_set_variables';

--session变量设置
test_set=# set @@codegen_cost_threshold = 10000;
test_set=# set @@session.codegen_cost_threshold = @@codegen_cost_threshold * 2;

--global变量设置
test_set=#set global most_available_sync = t;
test_set=#set @@global.most_available_sync = t;

```

## 相关链接<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_sb71b84f08d92434d9974424733f4b326"></a>

[RESET](RESET.md)，[SHOW](SHOW.md)

