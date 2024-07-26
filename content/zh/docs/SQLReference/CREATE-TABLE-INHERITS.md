# CREATE TABLE INHERITS<a name="ZH-CN_TOPIC_0289900337"></a>

## 功能描述<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sf99d8ce0a2bf4859q21d4835e23639b1"></a>

根据查询结果创建继承表。继承表的子表可以完全继承父表结构，也可以在父表结构的基础上添加字段，并且可以继承多父表或进行次级继承。
继承表有一个可设置的guc参数sql_inheritance（默认为on），它控制父表的操作是否可以访问子表，默认情况下父表可以查询包含子表在内的所有数据，关闭它时父表的只能查询/更新自己。

继承表具有以下特点:
-   表访问权限并不会被自动继承。
-   可以用/d+ father来查看父表下所有子表。
-   临时表可以继承临时表和普通表，普通表不能继承临时表。
-   当多个父表的字段相同时会进行融合，不同则会抛出错误。
-   存在子表时无法删除父表，用cascade删除父表的话，子表也会被删除。
-   子表不使用including all子句只会继承父表的非空、默认值和检查三种约束(父表对这几种约束的修改会同步作用于子表)。
-   子表使用including all子句才可以额外继承索引、唯一、主键、外键约束(但父表对这几种约束的修改不会同步作用于子表)。
-   子表不使用like parent_name子句时，父表对列进行删除的话，子表列也会被删除。
-   子表使用like parent_name子句时，子表拥有和父表同名的独立字段，当父表对列进行删除时不会作用于子表。
-   假如外键f_id指定外表t1，而t2是t1的子表，t2中存在id为3的数据，但t1中不存在id为3的数据，那么f_id不能是3，外键约束只包含指定的外表的数据，不包含该外表的子表。

## 注意事项<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s12767007911226c5e1823f6cdf27d915"></a>

-   继承表功能和mysql的多表更新功能冲突，不可以在B库建继承表。
-   不支持继承和分区表或者MOT表（及其他外表）同时存在的情况。
-   支持ustore和段页式，但这两种情况不能使用"like fathername including all"语句。
-   列存不支持继承表。

## 语法格式<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] 
TABLE table_name( [ {LIKE parent_name} [INCLUDING ALL]} ] )
[ INHERITS ( parent_table [, ... ] ) ]
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ TABLESPACE tablespace_name ];
```

>
> -   更多参数细节说明可参考[CREATE TABLE](CREATE-TABLE.md)章节。

## 参数说明<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **UNLOGGED**

    指定表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是，它也是不安全的，非日志表在冲突或异常关机后会被自动删截。非日志表中的内容也不会被复制到备用服务器中。在该类表中创建的索引也不会被自动记录。

    -   使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。
    -   故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。

-   **GLOBAL | LOCAL**

    创建临时表时可以在TEMP或TEMPORARY前指定GLOBAL或LOCAL关键字。如果指定GLOBAL关键字，openGauss会创建全局临时表，否则openGauss会创建本地临时表。

-   **TEMPORARY | TEMP**

    如果指定TEMP或TEMPORARY关键字，则创建的表为临时表。临时表分为全局临时表和本地临时表两种类型。创建临时表时如果指定GLOBAL关键字则为全局临时表，否则为本地临时表。

    全局临时表的元数据对所有会话可见，会话结束后元数据继续存在。会话与会话之间的用户数据、索引和统计信息相互隔离，每个会话只能看到和更改自己提交的数据。全局临时表有两种模式：一种是基于会话级别的\(ON COMMIT PRESERVE ROWS\), 当会话结束时自动清空用户数据；一种是基于事务级别的\(ON COMMIT DELETE ROWS\), 当执行commit或rollback时自动清空用户数据。建表时如果没有指定ON COMMIT选项，则缺省为会话级别。与本地临时表不同，全局临时表建表时可以指定非pg\_temp\_开头的schema。

    本地临时表只在当前会话可见，本会话结束后会自动删除。因此，在除当前会话连接的数据库节点故障时，仍然可以在当前会话上创建和使用临时表。由于临时表只在当前会话创建，对于涉及对临时表操作的DDL语句，会产生DDL失败的报错。因此，建议DDL语句中不要对临时表进行操作。TEMP和TEMPORARY等价。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   本地临时表通过每个会话独立的以pg\_temp开头的schema来保证只对当前会话可见，因此，不建议用户在日常操作中手动删除以pg\_temp，pg\_toast\_temp开头的schema。
    >-   如果建表时不指定TEMPORARY/TEMP关键字，而指定表的schema为当前会话的pg\_temp\_开头的schema，则此表会被创建为临时表。
    >-   ALTER/DROP全局临时表和索引，如果其它会话正在使用它，禁止操作。
    >-   全局临时表的DDL只会影响当前会话的用户数据和索引。例如truncate、reindex、analyze只对当前会话有效。

-   **table\_name**

    要创建的继承表子表的表名。

    取值范围：字符串，要符合标识符的命名规范。

-   **parent\_name**

    要继承的父表的表名。

    取值范围：字符串，要符合标识符的命名规范。

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。参数的详细说明如下所示。

    -   FILLFACTOR

        一个表的填充因子（fillfactor）是一个介于10和100之间的百分数。Astore的默认值是100（完全填充），Ustore的默认值是92。如果指定了较小的填充因子，INSERT操作仅按照填充因子指定的百分率填充表页。每个页上的剩余空间将用于在该页上更新行，这就使得UPDATE有机会在同一页上放置同一条记录的新版本，这比把新版本放置在其他页上更有效。对于一个从不更新的表将填充因子设为100是最佳选择，但是对于频繁更新的表，选择较小的填充因子则更加合适。该参数只对行存表有效。

        取值范围：10\~100

    -   ORIENTATION

        取值范围：

        COLUMN：表的数据将以列式存储。

        ROW（缺省值）：表的数据将以行式存储。

    -   COMPRESSION

        指定表数据的压缩级别，它决定了表数据的压缩比以及压缩时间。一般来讲，压缩级别越高，压缩比也越大，压缩时间也越长；反之亦然。实际压缩比取决于加载的表数据的分布特征。

        取值范围：

        列存表的有效值为YES/NO/LOW/MIDDLE/HIGH，默认值为LOW。

        行存表不支持压缩。

    -   MAX\_BATCHROW

        指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。

        取值范围：10000\~60000

-   **TABLESPACE tablespace\_name**

    指定新表将要在tablespace\_name表空间内创建。如果没有声明，将使用默认表空间。


## 示例<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa7f3723e108f960663c293cb012e1a2c"></a>

```
--创建两张父表
openGauss=# CREATE TABLE father
(
    id int NOT NULL,
    md_attr CHARACTER VARYING(32) UNIQUE,
    num int DEFAULT 2,
    salary REAL CHECK(SALARY > 0),
    CONSTRAINT pk_father_z82rgvse PRIMARY KEY (id)
);

openGauss=# CREATE TABLE father2
(
    id int UNIQUE,
	md_attr CHARACTER VARYING(32) not null,
    CONSTRAINT pk_father2_z82rgvse PRIMARY KEY (id)
);

--创建一张子表，父表删除列时子表列会被删除
openGauss=# CREATE TABLE kid_2021() inherits(father);

--使用like father创建一张子表，父表删除列时子表列不会被删除
openGauss=# CREATE TABLE kid_2021(like father) inherits(father);

--使用like father including all创建一张子表，可额外继承主键约束和唯一约束
openGauss=# CREATE TABLE kid_2022(like father including all) inherits(father);

--多表继承，父表同列会被合并
openGauss=# CREATE TABLE kid_2023() inherits(father,father2);

--临时表可以是普通表的子表，但不可以是普通表的父表，临时表可以继承临时表
openGauss=# CREATE TEMPORARY TABLES kid_2024() inherits(father);

--查询父表及子表的数据，可以在表名加上*，也可以省略不加
openGauss=# select * from father*;
openGauss=# select * from father;

--只查询父表的数据
openGauss=# select * from only father;

--删除表
openGauss=# drop table father cascade;
openGauss=# drop table father2 cascade;
```

## 相关链接<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa1d8ac1ba9fc4ce58ecdfe394f457188"></a>

[CREATE TABLE](CREATE-TABLE.md)，[ALTER TABLE INHERIT](ALTER-TABLE-INHERIT.md)