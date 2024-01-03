# ALTER TABLE INHERIT

## 功能描述<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_s7554a451a2e8434ac6abac385bba71e9"></a>

修改继承表，包括将普通表改为继承表及将继承表改为普通表。

## 注意事项<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_s6a18169201b2335fab67e21579272c81"></a>

-   只有完全包含父表结构的表才能被改为子表。
-   解除继承关系后，虽然不再是子表，但还是留有从父表继承的同名属性列，已有的数据也不会被删除。
-   修改父表的表结构，继承表也跟随着变化。
-   修改父表的数据，继承表的数据会被一起更新。
-   从父表继承的非空、默认值和检查三种约束不能被删除或修改。
-   使用like parent_name建表的话，父表删除了某列，子表列不会被删除。
-   不使用like parent_name建表的话，父表删除了某列，子表列会被删除。
-   使用including all从父表继承的索引、唯一、主键、外键约束可以被删除或修改。

## 语法格式<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_s54ad19af647d4983a3bc61bb7a645180"></a>

```
ALTER TABLE table_name { inherit | no inherit } parent_name;
```
>
> -   更多参数细节说明可参考[ALTER TABLE](ALTER-TABLE.md)章节。

## 参数说明<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_sfb7a4cb223ab41709a1677119a8d42100"></a>

-   **table\_name**

    继承表子表的表名。

    取值范围：字符串，要符合标识符的命名规范。

-   **parent\_name**

    要继承的父表的表名。

    取值范围：字符串，要符合标识符的命名规范。

## 示例<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_s23d0121ee3075db3961f76d2d8e16acc"></a>

```
--创建两张父表
openGauss=# CREATE TABLE father
(
    id int NOT NULL,
    md_attr CHARACTER VARYING(32) UNIQUE,
    num int DEFAULT 2,
    salary REAL CHECK(SALARY > 0),
    CONSTRAINT pk_father_z83rgvsefn PRIMARY KEY (id)
);
openGauss=# CREATE TABLE father2 (id int);

--创建子表
openGauss=# CREATE TABLE child (id int);
openGauss=# ALTER TABLE child inherit father2;
openGauss=# CREATE TABLE child2() inherits(father);
openGauss=# CREATE TABLE child3(like father) inherits(father);

--修改父表的表结构，子表也跟随着变化。
openGauss=# ALTER TABLE father alter COLUMN id type CHAR;

--父表删除列
openGauss=# ALTER TABLE father DROP COLUMN if exists salary;

--不用like father建表的话，子表列会被删除
openGauss=# \d+ child2

--用like father建表的话，子表列不会被删除
openGauss=# \d+ child3

--解除继承关系
openGauss=# ALTER TABLE child no inherit father2;

--删除表
openGauss=# drop table father cascade;
openGauss=# drop table child cascade;
openGauss=# drop table father2 cascade;
```

## 相关链接<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122090_zh-cn_topic_0059778762_s267aeb502b5546f69f580c79c0a728df"></a>

[CREATE TABLE INHERITS](CREATE-TABLE-INHERITS.md)，[DROP TABLE](DROP-TABLE.md)