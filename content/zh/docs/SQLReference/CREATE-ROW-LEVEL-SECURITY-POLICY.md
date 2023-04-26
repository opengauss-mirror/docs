# CREATE ROW LEVEL SECURITY POLICY<a name="ZH-CN_TOPIC_0289901001"></a>

## 功能描述<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section196521854173211"></a>

对表创建行访问控制策略。

当对表创建了行访问控制策略，只有打开该表的行访问控制开关\(ALTER TABLE ... ENABLE ROW LEVEL SECURITY\)，策略才能生效。否则不生效。

当前行访问控制影响数据表的读取操作\(SELECT、UPDATE、DELETE\)，暂不影响数据表的写入操作\(INSERT、MERGE INTO\)。表所有者或系统管理员可以在USING子句中创建表达式，在客户端执行数据表读取操作时，数据库后台在查询重写阶段会将满足条件的表达式拼接并应用到执行计划中。针对数据表的每一条元组，当USING表达式返回TRUE时，元组对当前用户可见，当USING表达式返回FALSE或NULL时，元组对当前用户不可见。

行访问控制策略名称是针对表的，同一个数据表上不能有同名的行访问控制策略；对不同的数据表，可以有同名的行访问控制策略。

行访问控制策略可以应用到指定的操作\(SELECT、UPDATE、DELETE、ALL\)，ALL表示会影响SELECT、UPDATE、DELETE三种操作；定义行访问控制策略时，若未指定受影响的相关操作，默认为ALL。

行访问控制策略可以应用到指定的用户\(角色\)，也可应用到全部用户\(PUBLIC\)；定义行访问控制策略时，若未指定受影响的用户，默认为PUBLIC。

## 注意事项<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section12765201893310"></a>

-   支持对行存表、行存分区表、列存表、列存分区表、unlogged表、hash表定义行访问控制策略。
-   不支持外表、本地临时表定义行访问控制策略。
-   不支持对视图定义行访问控制策略。
-   同一张表上可以创建多个行访问控制策略，一张表最多创建100个行访问控制策略。
-   系统管理员不受行访问控制影响，可以查看表的全量数据。
-   通过SQL语句、视图、函数、存储过程查询包含行访问控制策略的表，都会受影响。

## 语法格式<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section16798192723415"></a>

```
CREATE [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
     [ AS { PERMISSIVE | RESTRICTIVE } ]
     [ FOR { ALL | SELECT | UPDATE | DELETE } ]
     [ TO { role_name | PUBLIC | CURRENT_USER | SESSION_USER } [, ...] ]
     USING ( using_expression )
```

## 参数说明<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section11851526346"></a>

-   **policy\_name**

    行访问控制策略名称，同一个数据表上行访问控制策略名称不能相同。

-   **table\_name**

    行访问控制策略的表名。

-   **PERMISSIVE | RESTRICTIVE**

    PERMISSIVE指定行访问控制策略为宽容性策略，宽容性策略的条件用OR表达式拼接。

    RESTRICTIVE指定行访问控制策略为限制性策略，限制性策略的条件用AND表达式拼接。拼接方式如下：

    ```
    (using_expression_permissive_1 OR using_expression_permissive_2 ...) AND (using_expression_restrictive_1 AND using_expression_restrictive_2 ...)
    ```

    缺省值为PERMISSIVE。

-   **command**

    当前行访问控制影响的SQL操作，可指定操作包括：ALL、SELECT、UPDATE、DELETE。当未指定时，ALL为默认值，涵盖SELECT、UPDATE、DELETE操作。

    当command为SELECT时，SELECT类操作受行访问控制的影响，只能查看到满足条件\(using\_expression返回值为TRUE\)的元组数据，受影响的操作包括SELECT、SELECT FOR UPDATE/SHARE、UPDATE ... RETURNING、DELETE ... RETURNING。不允许修改、删除受到访问限制的数据。

    当command为UPDATE时，UPDATE类操作受行访问控制的影响，只能更新满足条件\(using\_expression返回值为TRUE\)的元组数据，受影响的操作包括UPDATE、 UPDATE ... RETURNING、 SELECT ... FOR UPDATE/SHARE。

    当command为DELETE时，DELETE类操作受行访问控制的影响，只能删除满足条件\(using\_expression返回值为TRUE\)的元组数据，受影响的操作包括DELETE、 DELETE ... RETURNING。

    行访问控制策略与适配的SQL语法关系参加下表：

    **表 1**  ROW LEVEL SECURITY策略与适配SQL语法关系

    <a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_table198047342176"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row14804134141720"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p15480134519170"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p15480134519170"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p15480134519170"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b8481194541719"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b8481194541719"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b8481194541719"></a><span>Command</span></strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p68052034131718"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p68052034131718"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p68052034131718"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b3812145191717"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b3812145191717"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b3812145191717"></a><span>SELECT/ALL policy</span></strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1780563415176"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1780563415176"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1780563415176"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b17590205616174"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b17590205616174"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b17590205616174"></a><span>UPDATE/ALL policy</span></strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p999710011189"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p999710011189"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p999710011189"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b2099717014181"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b2099717014181"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b2099717014181"></a><span>DELETE/ALL policy</span></strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row8805153420177"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p198427121816"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p198427121816"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p198427121816"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b39847712186"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b39847712186"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b39847712186"></a>SELECT</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11691414151820"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11691414151820"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11691414151820"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2069141491810"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2069141491810"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2069141491810"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96911141181"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96911141181"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96911141181"></a>No</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row88060345170"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p119842715181"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p119842715181"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p119842715181"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b179841175185"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b179841175185"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b179841175185"></a>SELECT FOR UPDATE/SHARE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p18691161415188"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p18691161415188"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p18691161415188"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96921114181819"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96921114181819"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p96921114181819"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p9692814151819"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p9692814151819"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p9692814151819"></a>No</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row28066347171"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p99841079188"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p99841079188"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p99841079188"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119841971185"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119841971185"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119841971185"></a>UPDATE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1769241415186"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1769241415186"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1769241415186"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p46921714201817"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p46921714201817"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p46921714201817"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p126921514111820"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p126921514111820"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p126921514111820"></a>No</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row7807434141711"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p098513761813"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p098513761813"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p098513761813"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b189853718182"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b189853718182"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b189853718182"></a>UPDATE RETURNING</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p8693191411810"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p8693191411810"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p8693191411810"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11693114171815"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11693114171815"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p11693114171815"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1869315142184"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1869315142184"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1869315142184"></a>No</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row980723420178"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p59855771815"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p59855771815"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p59855771815"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b1298517171813"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b1298517171813"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b1298517171813"></a>DELETE</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p869361491810"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p869361491810"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p869361491810"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1369451421818"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1369451421818"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1369451421818"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269413146181"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269413146181"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269413146181"></a>Existing row</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_row5809133491710"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1698557101810"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1698557101810"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1698557101810"></a><strong id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119851970188"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119851970188"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_b119851970188"></a>DELETE RETURNING</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2694171421811"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2694171421811"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p2694171421811"></a>Existing row</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269401481815"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269401481815"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p1269401481815"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p19694121417189"><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p19694121417189"></a><a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_p19694121417189"></a>Existing row</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **role\_name**

    行访问控制影响的数据库用户。

    当未指定时，PUBLIC为默认值，PUBLIC表示影响所有数据库用户，可以指定多个受影响的数据库用户。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >系统管理员不受行访问控制特性影响。


-   **using\_expression**

    行访问控制的表达式（返回boolean值）。

    条件表达式中不能包含AGG函数和窗口（WINDOW）函数。在查询重写阶段，如果数据表的行访问控制开关打开，满足条件的表达式会添加到计划树中。针对数据表的每条元组，会进行表达式计算，只有表达式返回值为TRUE时，行数据对用户才可见（SELECT、UPDATE、DELETE）；当表达式返回FALSE时，该元组对当前用户不可见，用户无法通过SELECT语句查看此元组，无法通过UPDATE语句更新此元组，无法通过DELETE语句删除此元组。


## 示例<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section17979101023515"></a>

```
--创建用户alice
openGauss=# CREATE USER alice PASSWORD 'xxxxxxxxx';

--创建用户bob
openGauss=# CREATE USER bob PASSWORD 'xxxxxxxxx';

--创建数据表all_data
openGauss=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

--向数据表插入数据
openGauss=# INSERT INTO all_data VALUES(1, 'alice', 'alice data');
openGauss=# INSERT INTO all_data VALUES(2, 'bob', 'bob data');
openGauss=# INSERT INTO all_data VALUES(3, 'peter', 'peter data');

--将表all_data的读取权限赋予alice和bob用户
openGauss=# GRANT SELECT ON all_data TO alice, bob;

--打开行访问控制策略开关
openGauss=# ALTER TABLE all_data ENABLE ROW LEVEL SECURITY;

--创建行访问控制策略，当前用户只能查看用户自身的数据
openGauss=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);

--查看表all_data相关信息
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_rls" FOR ALL
      To public
      USING (((role)::name = "current_user"()))
Has OIDs: no
Options: orientation=row, compression=no, enable_rowsecurity=true

--当前用户执行SELECT操作
openGauss=# SELECT * FROM all_data;
 id | role  |    data
----+-------+------------
  1 | alice | alice data
  2 | bob   | bob data
  3 | peter | peter data
(3 rows)

openGauss=# EXPLAIN(COSTS OFF) SELECT * FROM all_data;
      QUERY PLAN
----------------------
 Seq Scan on all_data
(1 row)

--切换至alice用户执行SELECT操作
openGauss=# SELECT * FROM all_data;
 id | role  |    data
----+-------+------------
  1 | alice | alice data
(1 row)

openGauss=# EXPLAIN(COSTS OFF) SELECT * FROM all_data;
 QUERY PLAN
----------------------------------------------------------------
 Seq Scan on all_data
   Filter: ((role)::name = 'alice'::name)
 Notice: This query is influenced by row level security feature
(3 rows)
 
```

## 相关链接<a name="zh-cn_topic_0283137345_zh-cn_topic_0237122109_section1426016489355"></a>

[DROP ROW LEVEL SECURITY POLICY](DROP-ROW-LEVEL-SECURITY-POLICY.md)，[ALTER ROW LEVEL SECURITY POLICY](ALTER-ROW-LEVEL-SECURITY-POLICY.md)

