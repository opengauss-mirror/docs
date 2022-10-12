# SQL编写<a name="ZH-CN_TOPIC_0000001149508025"></a>

## DDL<a name="section60205875143313"></a>

-   【建议】在openGauss中，建议DDL（建表、comments等）操作统一执行，在批处理作业中尽量避免DDL操作。避免大量并发事务对性能的影响。
-   【建议】在非日志表（unlogged table）使用完后，立即执行数据清理（truncate）操作。因为在异常场景下，openGauss不保证非日志表\(unlogged table\)数据的安全性。
-   【建议】临时表和非日志表的存储方式建议和基表相同。当基表为行存（列存）表时，临时表和非日志表也推荐创建为行存（列存）表，可以避免行列混合关联带来的高计算代价。
-   【建议】索引字段的总长度不超过50字节。否则，索引大小会膨胀比较严重，带来较大的存储开销，同时索引性能也会下降。
-   【建议】不要使用DROP…CASCADE方式删除对象，除非已经明确对象间的依赖关系，以免误删。

## 数据加载和卸载<a name="section45234071153513"></a>

-   【建议】在insert语句中显式给出插入的字段列表。例如：

    ```
    INSERT INTO task(name,id,comment) VALUES ('task1','100','第100个任务');
    ```

-   【建议】在批量数据入库之后，或者数据增量达到一定阈值后，建议对表进行analyze操作，防止统计信息不准确而导致的执行计划劣化。
-   【建议】如果要清理表中的所有数据，建议使用truncate table方式，不要使用delete table方式。delete table方式删除性能差，且不会释放那些已经删除了的数据占用的磁盘空间。

## 类型转换<a name="section28537273145311"></a>

-   【建议】在需要数据类型转换（不同数据类型进行比较或转换）时，使用强制类型转换，以防隐式类型转换结果与预期不符。
-   【建议】在查询中，对常量要显式指定数据类型，不要试图依赖任何隐式的数据类型转换。
-   【关注】若sql\_compatibility参数设置为A，在导入数据时，空字符串会自动转化为NULL。如果需要保留空字符串需要sql\_compatibility参数设置为C。

## 查询操作<a name="section48841047154511"></a>

-   【建议】除ETL程序外，应该尽量避免向客户端返回大量结果集的操作。如果结果集过大，应考虑业务设计是否合理。
-   【建议】使用事务方式执行DDL和DML操作。例如，truncate table、update table、delete table、drop table等操作，一旦执行提交就无法恢复。对于这类操作，建议使用事务进行封装，必要时可以进行回滚。
-   【建议】在查询编写时，建议明确列出查询涉及的所有字段，不建议使用“SELECT \*”这种写法。一方面基于性能考虑，尽量减少查询输出列；另一方面避免增删字段对前端业务兼容性的影响。
-   【建议】在访问表对象时带上schema前缀，可以避免因schema切换导致访问到非预期的表。
-   【建议】超过3张表或视图进行关联（特别是full join）时，执行代价难以估算。建议使用WITH TABLE AS语句创建中间临时表的方式增加SQL语句的可读性。
-   【建议】尽量避免使用笛卡尔积和Full join。这些操作会造成结果集的急剧膨胀，同时其执行性能也很低。
-   【关注】NULL值的比较只能使用IS NULL或者IS NOT NULL的方式判断，其他任何形式的逻辑判断都返回NULL。例如：NULL<\>NULL、NULL=NULL和NULL<\>1返回结果都是NULL，而不是期望的布尔值。
-   【关注】需要统计表中所有记录数时，不要使用count\(col\)来替代count\(\*\)。count\(\*\)会统计NULL值（真实行数），而count\(col\)不会统计。
-   【关注】在执行count\(col\)时，将“值为NULL”的记录行计数为0。在执行sum\(col\)时，当所有记录都为NULL时，最终将返回NULL；当不全为NULL时，“值为NULL”的记录行将被计数为0。
-   【关注】count\(多个字段\)时，多个字段名必须用圆括号括起来。例如，count\( \(col1,col2,col3\) \)。注意：通过多字段统计行数时，即使所选字段都为NULL，该行也被计数，效果与count\(\*\)一致。
-   【关注】count\(distinct col\)用来计算该列不重复的非NULL的数量，NULL将不被计数。
-   【关注】count\(distinct \(col1,col2,...\)\)用来统计多列的唯一值数量，当所有统计字段都为NULL时，也会被计数，同时这些记录被认为是相同的。
-   【建议】使用连接操作符“||”替换concat函数进行字符串连接。因为concat函数生成的执行计划不能下推，导致查询性能严重劣化。
-   【建议】使用下面时间相关的宏替换now函数来获取当前时间。因为now函数生成的执行计划无法下推，导致查询性能严重劣化。

    **表 1**  时间相关的宏

    <a name="table10471934805"></a>
    <table><thead align="left"><tr id="row9441634806"><th class="cellrowborder" valign="top" width="33.52%" id="mcps1.2.4.1.1"><p id="p14333416017"><a name="p14333416017"></a><a name="p14333416017"></a><strong id="b1443534204"><a name="b1443534204"></a><a name="b1443534204"></a>宏名称</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.15%" id="mcps1.2.4.1.2"><p id="p444193417016"><a name="p444193417016"></a><a name="p444193417016"></a><strong id="b20441634205"><a name="b20441634205"></a><a name="b20441634205"></a>描述</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33%" id="mcps1.2.4.1.3"><p id="p134420341604"><a name="p134420341604"></a><a name="p134420341604"></a><strong id="b104453419010"><a name="b104453419010"></a><a name="b104453419010"></a>示例</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row844334102"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p4444345015"><a name="p4444345015"></a><a name="p4444345015"></a>CURRENT_DATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p644133419019"><a name="p644133419019"></a><a name="p644133419019"></a>获取当前日期，不包含时分秒。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen5951115464718"></a><a name="screen5951115464718"></a><pre class="screen" codetype="Sql" id="screen5951115464718"><span id="text16770185141319"><a name="text16770185141319"></a><a name="text16770185141319"></a>openGauss=# </span>select CURRENT_DATE;
    date
    ------------
    2018-02-02
    (1 row)</pre>
    </td>
    </tr>
    <tr id="row12477343017"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p244734307"><a name="p244734307"></a><a name="p244734307"></a>CURRENT_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p64711341207"><a name="p64711341207"></a><a name="p64711341207"></a>获取当前时间，不包含年月日。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen240216513483"></a><a name="screen240216513483"></a><pre class="screen" codetype="Sql" id="screen240216513483"><span id="text158172008141"><a name="text158172008141"></a><a name="text158172008141"></a>openGauss=# </span>select CURRENT_TIME;
    timetz
    --------------------
    00:39:34.633938+08
    (1 row)</pre>
    </td>
    </tr>
    <tr id="row3474347010"><td class="cellrowborder" valign="top" width="33.52%" headers="mcps1.2.4.1.1 "><p id="p6473344013"><a name="p6473344013"></a><a name="p6473344013"></a>CURRENT_TIMESTAMP(n)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.15%" headers="mcps1.2.4.1.2 "><p id="p84773419010"><a name="p84773419010"></a><a name="p84773419010"></a>获取当前日期和时间，包含年月日时分秒。</p>
    <div class="note" id="note1058016589914"><a name="note1058016589914"></a><a name="note1058016589914"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p75814581092"><a name="p75814581092"></a><a name="p75814581092"></a>n表示存储的毫秒位数。</p>
    </div></div>
    </td>
    <td class="cellrowborder" valign="top" width="33.33%" headers="mcps1.2.4.1.3 "><a name="screen23871411134810"></a><a name="screen23871411134810"></a><pre class="screen" codetype="Sql" id="screen23871411134810"><span id="text3942673146"><a name="text3942673146"></a><a name="text3942673146"></a>openGauss=# </span>select CURRENT_TIMESTAMP(6);
    timestamptz
    -------------------------------
    2018-02-02 00:39:55.231689+08
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>

-   【建议】尽量避免标量子查询语句的出现。标量子查询是出现在select语句输出列表中的子查询，在下面例子中，下划线部分即为一个标量子查询语句：

    ```
    SELECT id, (SELECT COUNT(*) FROM films f WHERE f.did = s.id) FROM staffs_p1 s;
    ```

    标量子查询往往会导致查询性能急剧劣化，在应用开发过程中，应当根据业务逻辑，对标量子查询进行等价转换，将其写为表关联。

-   【建议】在where子句中，应当对过滤条件进行排序，把选择读较小（筛选出的记录数较少）的条件排在前面。
-   【建议】where子句中的过滤条件，尽量符合单边规则。即把字段名放在比较条件的一边，优化器在某些场景下会自动进行剪枝优化。形如col op expression，其中col为表的一个列，op为‘=’、‘\>’的等比较操作符，expression为不含列名的表达式。例如，

    ```
    SELECT id, from_image_id, from_person_id, from_video_id FROM face_data WHERE current_timestamp(6) - time < '1 days'::interval;
    ```

    改写为：

    ```
    SELECT id, from_image_id, from_person_id, from_video_id FROM face_data where time >  current_timestamp(6) - '1 days'::interval;
    ```

-   【建议】尽量避免不必要的排序操作。排序需要耗费大量的内存及CPU，如果业务逻辑许可，可以组合使用order by和limit，减小资源开销。openGauss默认按照ASC & NULL LAST进行排序。
-   【建议】使用ORDER BY子句进行排序时，显式指定排序方式（ASC/DESC），NULL的排序方式（NULL FIRST/NULL LAST）。
-   【建议】不要单独依赖limit子句返回特定顺序的结果集。如果部分特定结果集，可以将ORDER BY子句与Limit子句组合使用，必要时也可以使用offset跳过特定结果。
-   【建议】在保障业务逻辑准确的情况下，建议尽量使用UNION ALL来代替UNION。
-   【建议】如果过滤条件只有OR表达式，可以将OR表达式转化为UNION ALL以提升性能。使用OR的SQL语句经常无法优化，导致执行速度慢。例如，将下面语句

    ```
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 300 AND inline=301) OR (cdp= 301 AND inline=302) OR (cdp= 302 ANDinline=301);
    ```

    转换为：

    ```
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 300 AND inline=301) 
    union all
    SELECT * FROM scdc.pub_menu 
    WHERE (cdp= 301 AND inline=302) 
    union all 
    SELECT * FROM tablename 
    WHERE (cdp= 302 AND inline=301)
    ```

-   【建议】当in\(val1, val2, val3…\)表达式中字段较多时，建议使用in \(values \(va11\), \(val2\),\(val3\)…\)语句进行替换。优化器会自动把in约束转换为非关联子查询，从而提升查询性能。
-   【建议】在关联字段不存在NULL值的情况下，使用\(not\) exist代替\(not\) in。例如，在下面查询语句中，当T1.C1列不存在NULL值时，可以先为T1.C1字段添加NOT NULL约束，再进行如下改写。

    ```
    SELECT * FROM T1 WHERE T1.C1 NOT IN (SELECT T2.C2 FROM T2);
    ```

    可以改写为：

    ```
    SELECT * FROM T1 WHERE NOT EXISTS (SELECT  * FROM T1,T2 WHERE T1.C1=T2.C2);
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   如果不能保证T1.C1列的值为NOT NULL的情况下，就不能进行上述改写。
    >-   如果T1.C1为子查询的输出，要根据业务逻辑确认其输出是否为NOT NULL。

-   【建议】通过游标进行翻页查询，而不是使用LIMIT OFFSET语法，避免多次执行带来的资源开销。游标必须在事务中使用，执行完后务必关闭游标并提交事务。

