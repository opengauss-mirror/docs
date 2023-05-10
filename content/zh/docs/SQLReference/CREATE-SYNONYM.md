# CREATE SYNONYM

## 功能描述<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

创建一个同义词对象。同义词是数据库对象的别名，用于记录与其他数据库对象名间的映射关系，用户可以使用同义词访问关联的数据库对象。

## 注意事项<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_section93413620440"></a>

-   定义同义词的用户成为其所有者。
-   若指定模式名称，则同义词在指定模式中创建。否则，在当前模式创建。
-   支持通过同义词访问的数据库对象包括：表、视图、函数和存储过程以及package中的存储过程和函数，不支持package中变量的引用。
-   使用同义词时，用户需要具有对关联对象的相应权限。
-   支持使用同义词的DML语句包括：SELECT、INSERT、UPDATE、DELETE、EXPLAIN、CALL、REFRESH。
-   不建议对临时表创建同义词。如果需要创建的话，需要指定同义词的目标临时表的模式名，否则无法正常使用该同义词，并且在当前会话结束前执行DROP SYNONYM命令。
-   删除原对象后，与之关联同义词不会被级联删除，继续访问该同义词会报错，并提示已失效。
-   被授予了CREATE ANY SYNONYM权限的用户能够在用户模式下创建同义词。
-   不可与同一模式下已存在的表、视图、函数以及存储过程产生命名冲突。

## 语法格式<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_zh-cn_topic_0059777835_sebcad83e099e46b0ba586829e634d144"></a>

```
CREATE [ OR REPLACE ] SYNONYM synonym_name 
    FOR object_name;
```

## 参数说明<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_section1549681213574"></a>

-   **synonym**

    创建的同义词名字，可以带模式名。

    取值范围：字符串，要符合标识符的命名规范。

-   **object\_name**

    关联的对象名字，可以带模式名。

    取值范围：字符串，要符合标识符的命名规范。

    >![](public_sys-resources/icon-note.png) **说明：**
    > 
    >object\_name可以是不存在的对象名称。


## 示例<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_section1853433744413"></a>

```
--创建模式ot。
openGauss=# CREATE SCHEMA ot;

--创建表ot.t1及其同义词t1。
openGauss=# CREATE TABLE ot.t1(id int, name varchar2(10));
openGauss=# CREATE OR REPLACE SYNONYM t1 FOR ot.t1;

--使用同义词t1。
openGauss=# SELECT * FROM t1;
openGauss=# INSERT INTO t1 VALUES (1, 'ada'), (2, 'bob');
openGauss=# UPDATE t1 SET t1.name = 'cici' WHERE t1.id = 2;

--创建同义词v1及其关联视图ot.v_t1。
openGauss=# CREATE SYNONYM v1 FOR ot.v_t1;
openGauss=# CREATE VIEW ot.v_t1 AS SELECT * FROM ot.t1;

--使用同义词v1。
openGauss=# SELECT * FROM v1;

--创建重载函数ot.add及其同义词add。
openGauss=# CREATE OR REPLACE FUNCTION ot.add(a integer, b integer) RETURNS integer AS
$$
SELECT $1 + $2
$$
LANGUAGE sql;

openGauss=# CREATE OR REPLACE FUNCTION ot.add(a decimal(5,2), b decimal(5,2)) RETURNS decimal(5,2) AS
$$
SELECT $1 + $2
$$
LANGUAGE sql;

openGauss=# CREATE OR REPLACE SYNONYM add FOR ot.add;

--使用同义词add。
openGauss=# SELECT add(1,2);
openGauss=# SELECT add(1.2,2.3);

--创建存储过程ot.register及其同义词register。
openGauss=# CREATE PROCEDURE ot.register(n_id integer, n_name varchar2(10))
SECURITY INVOKER
AS
BEGIN
    INSERT INTO ot.t1 VALUES(n_id, n_name);
END;
/

openGauss=# CREATE OR REPLACE SYNONYM register FOR ot.register;

--使用同义词register，调用存储过程。
openGauss=# CALL register(3,'mia');

--删除同义词。
openGauss=# DROP SYNONYM t1;
openGauss=# DROP SYNONYM IF EXISTS v1;
openGauss=# DROP SYNONYM IF EXISTS add;
openGauss=# DROP SYNONYM register;
openGauss=# DROP SCHEMA ot CASCADE;
```

## 相关链接<a name="zh-cn_topic_0283136599_zh-cn_topic_0237122116_zh-cn_topic_0059778825_section184942174514"></a>

[ALTER SYNONYM](ALTER-SYNONYM.md)，[DROP SYNONYM](DROP-SYNONYM.md)

