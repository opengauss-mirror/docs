# CREATE SEQUENCE<a name="ZH-CN_TOPIC_0289899862"></a>

## 功能描述<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section11152141914129"></a>

CREATE SEQUENCE用于向当前数据库里增加一个新的序列。序列的Owner为创建此序列的用户。

## 注意事项<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section192715972011"></a>

-   Sequence是一个存放等差数列的特殊表。这个表没有实际意义，通常用于为行或者表生成唯一的标识符。
-   如果给出一个模式名，则该序列就在给定的模式中创建，否则会在当前模式中创建。序列名必须和同一个模式中的其他序列、表、索引、视图或外表的名称不同。
-   创建序列后，在表中使用序列的nextval\(\)函数和generate\_series\(1,N\)函数对表插入数据，请保证nextval的可调用次数大于等于N+1次，否则会因为generate\_series\(\)函数会调用N+1次而导致报错。
-   Sequence默认最大值为2^63-1，如果使用了Large标识则最大值可以支持到2^127-1。
-   被授予CREATE ANY SEQUENCE权限的用户，可以在public模式和用户模式下创建序列。

## 语法格式<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section1963019544155"></a>

```
CREATE  [ LARGE ] SEQUENCE name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE | NOMINVALUE ] [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE] 
    [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE | NOCYCLE ] 
    [ OWNED BY { table_name.column_name | NONE } ];
```

## 参数说明<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section969884316205"></a>

-   **name**

    将要创建的序列名称。

    取值范围: 仅可以使用小写字母（a\~z）、 大写字母（A\~Z）、数字和特殊字符“\#”，“\_”，“$”的组合。

-   **increment**

    指定序列的步长。一个正数将生成一个递增的序列，一个负数将生成一个递减的序列。

    缺省值为1。

-   **MINVALUE minvalue | NO MINVALUE| NOMINVALUE**

    执行序列的最小值。如果没有声明minvalue或者声明了NO MINVALUE，则递增序列的缺省值为1，递减序列的缺省值为-2<sup>63</sup>+1。NOMINVALUE等价于NO MINVALUE

-   **MAXVALUE maxvalue | NO MAXVALUE| NOMAXVALUE**

    执行序列的最大值。如果没有声明maxvalue或者声明了NO MAXVALUE，则递增序列的缺省值为2<sup>63</sup>-1，递减序列的缺省值为-1。NOMAXVALUE等价于NO MAXVALUE

-   **start**

    指定序列的起始值。缺省值：对于递增序列为minvalue，递减序列为maxvalue。

-   **cache**

    为了快速访问，而在内存中预先存储序列号的个数。

    缺省值为1，表示一次只能生成一个值，也就是没有缓存。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >不建议同时定义cache和maxvalue或minvalue。因为定义cache后不能保证序列的连续性，可能会产生空洞，造成序列号段浪费。

-   **CYCLE**

    用于使序列达到maxvalue或者minvalue后可循环并继续下去。

    如果声明了NO CYCLE，则在序列达到其最大值后任何对nextval的调用都会返回一个错误。

    NOCYCLE的作用等价于NO CYCLE。

    缺省值为NO CYCLE。

    若定义序列为CYCLE，则不能保证序列的唯一性。

-   **OWNED BY**

    将序列和一个表的指定字段进行关联。这样，在删除那个字段或其所在表的时候会自动删除已关联的序列。关联的表和序列的所有者必须是同一个用户，并且在同一个模式中。需要注意的是，通过指定OWNED BY，仅仅是建立了表的对应列和sequence之间关联关系，并不会在插入数据时在该列上产生自增序列。

    缺省值为OWNED BY NONE，表示不存在这样的关联。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >通过OWNED BY创建的Sequence不建议用于其他表，如果希望多个表共享Sequence，该Sequence不应该从属于特定表。


## 示例<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section17779175211714"></a>

创建一个名为serial的递增序列，从101开始：

```
openGauss=# CREATE SEQUENCE serial
 START 101
 CACHE 20;
```

从序列中选出下一个数字：

```
openGauss=# SELECT nextval('serial');
 nextval 
 ---------
      101
```

从序列中选出下一个数字：

```
openGauss=# SELECT nextval('serial');
 nextval 
 ---------
      102
```

创建与表关联的序列：

```
openGauss=# CREATE TABLE customer_address
(
    ca_address_sk             integer               not null,
    ca_address_id             char(16)              not null,
    ca_street_number          char(10)                      ,
    ca_street_name            varchar(60)                   ,
    ca_street_type            char(15)                      ,
    ca_suite_number           char(10)                      ,
    ca_city                   varchar(60)                   ,
    ca_county                 varchar(30)                   ,
    ca_state                  char(2)                       ,
    ca_zip                    char(10)                      ,
    ca_country                varchar(20)                   ,
    ca_gmt_offset             decimal(5,2)                  ,
    ca_location_type          char(20)                     
);

openGauss=# CREATE SEQUENCE serial1
 START 101
 CACHE 20
OWNED BY customer_address.ca_address_sk;
--删除表和序列
openGauss=# DROP TABLE customer_address;
openGauss=# DROP SEQUENCE serial cascade;
openGauss=# DROP SEQUENCE serial1 cascade;
```

## 相关链接<a name="zh-cn_topic_0283137208_zh-cn_topic_0237122114_zh-cn_topic_0059778825_section184942174514"></a>

[DROP SEQUENCE](DROP-SEQUENCE.md)，[ALTER SEQUENCE](ALTER-SEQUENCE.md)

