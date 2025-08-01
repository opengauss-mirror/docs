# CREATE VIEW

## 功能描述<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

创建一个视图。视图与基本表不同，是一个虚拟的表。数据库中仅存放视图的定义，而不存放视图对应的数据，这些数据仍存放在原来的基本表中。若基本表中的数据发生变化，从视图中查询出的数据也随之改变。从这个意义上讲，视图就像一个窗口，透过它可以看到数据库中用户感兴趣的数据及变化。

## 注意事项<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

被授予CREATE ANY TABLE权限的用户，可以在public模式和用户模式下创建视图。
不可与同一模式下已存在的synonym产生命名冲突。

## 语法格式<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE [ OR REPLACE ] [ DEFINER = user ] [ SQL SECURITY { DEFINER | INVOKER } ] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ];
```

>![](public_sys-resources/icon-note.png) **说明：** 
>-   创建视图时使用WITH\(security\_barrier\)可以创建一个相对安全的视图，避免攻击者利用低成本函数的RAISE语句打印出隐藏的基表数据。
>-   当视图创建后，不允许使用REPLACE修改本视图当中的列名，也不允许删除列。

## 参数说明<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

-   **OR REPLACE**

    当CREATE VIEW中存在OR REPLACE时，表示若以前存在该视图就进行替换，但新查询不能改变原查询的列定义，包括顺序、列名、数据类型、类型精度等，只可在列表末尾添加其他的列。

- **DEFINER = user**

  指定user作为视图的属主。该选项仅在B兼容模式下使用。

- **SQL SECURITY { DEFINER | INVOKER }**

  指定视图调用时检查访问权限时要使用的鉴权用户。该选项仅在B兼容模式下使用。
  - DEFINER: 默认值,表示使用视图的DEFINER权限对视图内部定义的关系鉴权。
  - INVOKER: 表示使用视图当前的调用者的权限对视图内部定义的关系鉴权。
  security_option 具有传递性，外层视图的security_option会影响内层视图对当前INVOKER的判断。

-   **TEMP | TEMPORARY**

    创建临时视图。

-   **view\_name**

    要创建的视图名称。可以用模式修饰。

    取值范围：字符串，符合标识符命名规范。

-   **column\_name**

    可选的名称列表，用作视图的字段名。如果没有给出，字段名取自查询中的字段名。

    取值范围：字符串，符合标识符命名规范。

-   **view\_option\_name \[= view\_option\_value\]**

    该子句为视图指定一个可选的参数。

    -   **security\_barrier**

        当VIEW试图提供行级安全时，应使用该参数。
        
        取值范围：Boolean类型，TRUE、FALSE。
    
    -   **check\_option**

        指定该视图的检查选项。

        取值范围：LOCAL、CASCADED。

-   **query**

    为视图提供行和列的SELECT或VALUES语句。

-   **WITH [ CASCADED | LOCAL ] CHECK OPTION**

    该选项控制自动更新视图的行为，对视图的insert和update，要检查确保新行满足视图定义的条件，即新行可以通过视图看到。如果没有通过检查，则拒绝修改。如果没有添加该选项，则允许通过对视图的insert和update来创建该视图不可见的行。支持下列检查选项：

    -   **LOCAL**

        只检查视图本身直接定义的条件，除非底层视图也定义了CHECK OPTION，否则它们定义的条件都不检查。

    -   **CASCADED**

        检查该视图和所有底层视图定义的条件。如果仅声明了CHECK OPTION，没有声明LOCAL和CASCADED，默认是CASCADED。
    
    >![](public_sys-resources/icon-caution.png) **注意：** 
    >1. 只有在可自动更新、没有INSTEAD OF触发器或者INSTEAD规则的视图上才支持CHECK OPTION。如果一个自动更新的视图被定义在一个具有INSTEAD OF触发器的视图上，那么CHECK OPTION可以被用来检查该自动更新视图上的条件，但具有INSTEAD OF触发器的视图上的条件不会被检查。如果该视图或者任何底层关系具有导致INSERT或UPDATE命令被重写的INSTEAD规则，那么在被重写的查询中将忽略所有检查选项，包括任何来自定义在有STEAD规则关系上的可自动更新视图的检查。
    >2. 基于MySQL外表的视图不支持CHECK OPTION选项。

## 可自动更新视图<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

简单视图是可自动更新的。在视图上执行UPDATE语句时，如果视图满足以下条件，那么它就是可自动更新的。

* 视图的FROM列表中可以有多项，但这些项必须是一个表、另一个视图或者一个子查询。
* 视图定义的顶层不能包含WITH、DISTINCT、GROUP BY、HAVING、LIMIT、OFFSET子句的视图。
* 视图定义的顶层不能包含集合操作（UNION、INTERSECT、EXCEPT）的视图。
* 视图的目标列表中不能包含聚集函数、窗口函数或者返回集合的函数。
* 如果UPDATE的目标列属于视图的一个子查询或子视图，那么这个子查询或子视图也需要满足上述可自动更新的条件。

在视图上执行DELETE语句时，除了上述执行UPDATE语句的条件，还需要额外满足如下条件。

* 视图FROM列表中的所有子查询和子视图都是满足可自动更新条件的。
* 视图FROM列表中没有由全外连接或交叉连接的方式连接的项，且除了由左外连接或右外连接的方式连接的表，其他表之中最多只能有一个没有唯一键的表。

在视图上执行INSERT语句，或声明CHECK OPTION时，还需要额外满足如下条件。

* 视图的FROM列表中只有一项，并且必须是一个表或者是另一个可自动更新视图（不能是子查询）。

一个可自动更新的视图可以混合可更新列以及不可更新列。如果一个列是对底层关系中一个可更新列的简单引用，则它是可更新的。否则该列是只读的，并且在一个INSERT或者UPDATE语句尝试对它赋值时会报错。

如果视图是可自动更新的，系统将把视图上的任何INSERT、UPDATE或者DELETE语句转换成在底层关系上的对应语句。

如果一个可自动更新的视图包含一个WHERE条件，该条件会限制底层关系的哪些行可以被该视图上的UPDATE以及DELETE语句修改。不过，一个允许被UPDATE修改的行可能让该行不再满足WHERE条件，并且因此也不再能从视图中可见。类似的，一个INSERT命令可能插入不满足WHERE条件的行，因此从该视图中看不到这些行。CHECK OPTION可以用来阻止INSERT和UPDATE命令创建这类从视图中无法看到的行。

一个更加复杂的、不满足上述条件的视图默认是只读的，系统不允许在该视图上执行INSERT、UPDATE和DELETE语句。可以通过在该视图上创建一个INSTEAD OF触发器来获得可更新视图的效果，该触发器必须把该视图上尝试的插入转换成其他表上合法的动作，更多信息请见[CREATE TRIGGER](CREATE-TRIGGER.md)。另一种方式是创建规则（见[CREATE RULE](CREATE-RULE.md)）。

注意在视图上执行插入、更新或删除的用户必须具有该视图上相应的插入、更新或删除特权。此外，视图的所有者必须拥有底层关系上对应的权限，但执行的用户并不需要底层关系上的任何权限。

## 示例<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
--创建字段spcname为pg_default组成的视图。
openGauss=# CREATE VIEW myView AS
    SELECT * FROM pg_tablespace WHERE spcname = 'pg_default';

--查看视图。
openGauss=# SELECT * FROM myView ;

--删除视图myView。
openGauss=# DROP VIEW myView;

--创建基表，并插入数据。
openGauss=# CREATE TABLE base_tbl (a int PRIMARY KEY, b text DEFAULT 'Unspecified');
openGauss=# INSERT INTO base_tbl values (1, 'insertTable');

--创建视图
openGauss=# CREATE VIEW ro_view1 AS SELECT a, b FROM base_tbl;

--视图插入、更新和删除数据
openGauss=# INSERT INTO ro_view1 values (2, 'insertView');
openGauss=# UPDATE ro_view1 SET b = 'updateView' WHERE a = 1;
openGauss=# DELETE FROM ro_view1 WHERE a= 2;

--创建check option视图
openGauss=# CREATE VIEW ro_view2 AS SELECT a, b FROM base_tbl WHERE a > 10 WITH CHECK OPTION;

--往基表插入视图不可见的数据
openGauss=# INSERT INTO base_tbl values (15, 'insertTable');

--插入、更新视图不可见数据失败
openGauss=# INSERT INTO ro_view2 values (5, 'insertView');
openGauss=# UPDATE ro_view2 SET a = 5 WHERE a = 15;

--创建视图指定security_option
openGauss=# create or replace definer=use_a_1144425 view v1 as select * from sql_security_1144425;
openGauss=# create sql security invoker view v2 as select * from sql_security_1144425;

--创建多表视图
openGauss=# CREATE TABLE dept(deptno INT NOT NULL, dname VARCHAR(14), loc VARCHAR(13), CONSTRAINT pk_dept PRIMARY KEY(deptno));
openGauss=# INSERT INTO dept VALUES (10,'ACCOUNTING','NEW YORK'); 
openGauss=# CREATE TABLE emp (empno int NOT NULL PRIMARY KEY, ename VARCHAR(10), job VARCHAR(9), deptno int,
openGauss-# CONSTRAINT fk_deptno FOREIGN KEY(deptno) REFERENCES dept(deptno));
openGauss=# INSERT INTO emp VALUES (7782,'CLARK','MANAGER',10);
openGauss=# INSERT INTO emp VALUES (7934,'MILLER','CLERK',10);
openGauss=# CREATE VIEW multv1 AS SELECT emp.empno, emp.ename, emp.job, dept.* FROM dept, emp 
openGauss-# WHERE dept.deptno = emp.deptno;

--多表视图更新、删除数据
openGauss=# UPDATE multv1 SET ENAME='ABCD', JOB='SALESMAN' WHERE EMPNO=7934;
openGauss=# DELETE FROM multv1 WHERE EMPNO=7934;

--基表不是表、子视图或子查询的视图更新、删除数据失败
openGauss=# CREATE VIEW multv2 AS SELECT * FROM emp JOIN UPPER('foo') AS f ON true;
openGauss=# UPDATE multv2 SET f = 'a';
openGauss=# DELETE FROM multv2;

-- 基表之间交叉连接的视图删除数据失败
openGauss=# CREATE VIEW multv3 AS SELECT emp.empno, emp.ename, emp.job, dept.* FROM dept CROSS JOIN emp;
openGauss=# DELETE FROM mutlv3;
```

## 相关链接<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER VIEW](ALTER-VIEW.md)，[DROP VIEW](DROP-VIEW.md)

