# Hints<a name="ZH-CN_TOPIC_0000001399380057"></a>

   hint以一种特殊的注释方式，其具有固定的格式和位置出现在SQL语句的SQL文本中，从而影响优化器对于执行计划的选择，可用于指导优化器生成更高效的查询计划。

## Hints使用
   (1) hint必须跟在select、update、insert、delete关键字后面，以下是hint语法：
   ```
   /*+ hint(string) hint(string)... */
   ```
   (2) 参数解释：
   - 加号（+）使数据库将注释解析成提示列表，加号必须紧跟在注释分隔符之后，不允许有空格。
   - hint可以是Hint一览表中的任意一个类型。加号与hint之间的空格可有可无。如果/*+ */结构内部包含多个hint,至少使用一个空格进行hint类型分隔。
   - string是其他可以穿插在hints中的注释字符串。

   (3) 特殊场景
   在某些情况下，数据库会忽略提示，并且不会返回错误。
   - 提示包含拼写错误或语法错误。但是，数据库会在同一注释中考虑其他正确指定的提示。
   - 包含提示的注释不紧跟在select、update、insert、delete关键字后面。
   - 提示的组合相互冲突。但是，数据库会在同一注释中考虑其他不冲突的提示。
    

## Hint一览表

按照功能类别列出全部的提示。

**表 1**  变量说明

<a name="zh-cn_topic_0283136979"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136979"><th class="cellrowborder" valign="top" width="15.701570157015702%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>类别</p>
</th>
 <th class="cellrowborder" valign="top" width="32.753275327532755%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_02831369798"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>语法</p>
</th>
<th class="cellrowborder" valign="top" width="51.54515451545154%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136979"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>优化器方法</p>
</td>
<td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a><a id="zh-cn_topic_0283136979"></a>RLUE</p>
</td>
<td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>提示优化器使用RBO模式</p>
</td>
<tr>
    <td rowspan="5">路径访问</td>
    <td>FULL</td>
    <td>指示优化器对指定的表使用全表扫描</td>
</tr>
<tr>
    <td>INDEX</td>
    <td>提示对指定的表使用指定的索引扫描</td>
</tr>
<tr>
    <td>INDEX_ASC</td>
    <td>提示优化器对指定的表使用升序索引扫描</td>
</tr>
<tr>
    <td>INDEX_DESC</td>
    <td>提示优化器对指定的表使用降序索引扫描</td>
</tr>
<tr>
    <td>NO_INDEX</td>
    <td>提示优化器不要对指定的表使用一个或多个索引。</td>
</tr>
<tr>
    <td rowspan="2">关联顺序</td>
    <td>LEADING</td>
    <td>指示优化器使用指定的表顺序作为执行计划中的前缀</td>
</tr>
<tr>
    <td>ORDERED</td>
    <td>提示优化器按照from子句中的表的顺序连接表</td>
</tr>

<tr>
    <td rowspan="3">关联方式</td>
    <td>USE_NL</td>
    <td>提示优化器将指定的表作为被驱动表，以嵌套循环连接的方式将每个指定的表连接起来。</td>
</tr>
<tr>
    <td>USE_HASH</td>
    <td>提示优化器将指定的表作为被驱动表，以哈希连接的方式将每个指定的表连接起来。</td>
</tr>
<tr>
    <td>USE_MERGE/td>
    <td>提示优化器将指定的表作为被驱动表，以归并连接的方式将每个指定的表连接起来。</td>
</tr>

<tr>
    <td rowspan="1">其它</td>
    <td>OPT_PARAM</td>
    <td>提示优化器使用此参数替换系统参数执行此sql语句。</td>
</tr>

</tbody>
</table>


## RLUE
提示优化器使用RBO模式，语法如下所示：
```
/*+ RULE */
```

注意：使用RULE提示会强制优化器使用基于规则的优化器来执行该语句。但是，如果SQL语句中使用了基于规则的优化器不支持的构造（例如，某些类型的连接或索引），则可能无法使用该提示。

## FULL
指示优化器对指定的表使用全表扫描,语法如下所示：
```
/*+ FULL(tablename1 tablename2 [...]) */
```

注意：
- 这个提示只对所指定的表进行全表扫描，而不是查询中的所有表。

参数说明：
- tablename1：表名，表名与表名之间用空格隔开。
- full中参数只有一个，表示优化器只对这张表选择全表扫描。
- full中有多个参数，表示优化器只对参数所表示的每张表都选择全表扫描。

发生冲突的hint类型：
- INDEX： full与index同时出现时，hint失效。在语法层就会失效，不会进入计划层。


## INDEX
告诉优化器对指定表通过索引方式访问数据，语法如下所示：
```
select /*+ index(tablename1 [index_name1] [index_name2] [...])*/* from table_name where ...
```
注意：
- 这个提示只对所指定的表生效。

参数说明：
- tablename1：必选参数，表名
- index_name1: 可选参数，tablename1上的索引，表名与索引名之间用空格隔开，索引名与索引名之间用空格隔开
- 可以有多个索引名

规则说明：
- 规则1：index参数中只指定表名，没有指定使用索引名，表示必须使用索引，会从表中的所有索引中选择最优的一个索引。即使索引比全表扫描的代价大，也会选择索引，不考虑全表扫描。
- 规则2：index参数中只指定表名的部分索引，表示必须使用索引且只使用指定索引名的索引，忽略其它索引。即使其它未指定索引的代价比指定索引代价更优，也会忽略其它未指定索引，且不考虑全表扫描。
- 规则3：当表上没有hint所指定的index的时候，并不会考虑hint没有指定但表上存在的索引，因此会使用全表扫描。例如hint_test1表上没有创建t1_idx3索引，hint也没有指定其他可用索引，所以使用full scan。
- 规则4：当表上hint所指定的index与过滤条件中列信息不匹配时，无法使用hint所指定的索引。同时如果hint没有指定其它含有过滤条件中列信息的索引时，则会直接使用全表扫描full scan。

无效情况：
- 只指定索引，没有指定表名，hint无效。在语法层就会失效，不会进入计划层。
- 指定表名不在sql语句访问中，hint无效。在语法层就会失效，不会进入计划层。

发生冲突的hint类型：
- FULL：index与full同时出现时，hint失效。在语法层就会失效，不会进入计划层。

## INDEX_ASC
利用索引从表中读取数据时，引导优化器对提示中所指定索引的索引列值按照升序使用范围扫描。
```
select /*+ index_asc(tablename1 [index_name1] [index_name2] [...])*/* from table_name where ...
```

参数说明：
- tablename1：必选参数，表名
- index_name1: 可选参数，tablename1上的索引，表名与索引名之间用空格隔开，索引名与索引名之间用空格隔开
- 可以有多个索引名。

规则说明：
- 规则1：如果参数只有表名，但是没有指定任何索引，说明必须使用索引，且以升序扫描。
- 规则2：index_asc 和 order by 不冲突
- 规则3：index_asc 和 order by column_name desc 冲突，hint_asc 索引是失效的，最后order by为主，使用QUERY SORT ORDER BY算子。

## INDEX_DESC
提示优化器对指定的表使用降序索引扫描，如果该语句使用索引范围扫描，明确指定降序扫描范围。
```
select /*+ index_desc(tablename1 [index_name1] [index_name2] [...])*/* from table_name where ...
```

参数说明：
- tablename1：必选参数，表名
- index_name1: 可选参数，tablename1上的索引，表名与索引名之间用空格隔开，索引名与索引名之间用空格隔开
- 可以有多个索引名。

规则说明：
- 规则1：如果参数只有表名，但是没有指定任何索引，说明必须使用索引，且以降序扫描。
- 规则2：index_asc 和 order by column_name desc 不冲突。
- 规则3：index_asc 和 order by (asc)冲突，hint_desc 索引是失效的，最后order by为主，使用QUERY SORT ORDER BY算子。

## NO_INDEX

告诉优化器对指定表不允许使用索引。这个提示会禁止优化器使用指定索引。可以在删除不必要的索引之前在许多查询中禁止索引, 语法如下所示：
```
select /*+ no_index(tablename1 [index_name1] [index_name2] [...])*/* from table_name where ...
```

参数说明：
- tablename1：必选参数，表名
- index_name1: 可选参数，tablename1上的索引，表名与索引名之间用空格隔开，索引名与索引名之间用空格隔开
- 可以有多个索引名。

规则：
- 规则1；如果参数只有表名，但是没有指定任何索引，说明对整个表不使用索引，则会对该表执行全表扫描。
- 规则2：指定索引名，表示不适用指定索引，会考虑其它未指定索引t1_idx0，并且会考虑full scan，最后选最优计划。

发生冲突的hint类型：
index：no_index和index同时使用时，hint失效。在语法层就会失效，不会进入计划层。

## LEADING
在一个多表关联的查询中，告诉优化器首先要访问哪个表上的数据，语法如下：
```
/*+ LEADING (table_name1 [table_name2 ...]) */
```

参数说明：
- tablename1：必选参数，表名。table_name2:table_name2：表名。参数至少有一个表。

规则：
- 规则1；如果参数时多个表，指以参数顺序来指定扫描顺序先后。
- 规则2：leading后面没有指定的表，扫描顺序必须在指定表的后面扫描，未指定表之间的扫描顺序由原本执行计划决定。
- 规则3：可以结合关联方式中的hint类型使用，以获取更优的执行计划。

发生冲突的hint类型：
OERRDERED: LEADING与OERRDERED同时使用时，hint失效。在语法层就会失效，不会进入计划层。


## ORDERED
引导优化器按照from中所描述的表的顺序执行连接，语法如下：
```
/*+ ORDERED */
```

参数说明：
- 不需要任何参数。

规则：
- 规则1；不需要传入参数，会对所有from中描述的表进行顺序连接，即将执行计划中表的扫描顺序与表在from中出现的先后顺序一致。

发生冲突的hint类型：
LEADING: LEADING与OERRDERED同时使用时，hint失效。在语法层就会失效，不会进入计划层。

## USE_NL
使用该提示引导优化器按照nested loop连接方式进行join，只是指出表连接方式，对于表连接顺序不会有任何影响，语法如下：
```
/*+ USE_NL(table_name1 [table_name2 ...])*/
```

参数说明：
-table_name1:表名，提示优化器将指定的表作为被驱动表。

规则说明：
- 规则1：参数传入表，提示优化器将指定的表作为被驱动表，以嵌套循环连接的方式将每个指定的表连接起来。
- 规则2：如果只有一个表，由于是将指定的表作为被驱动表构建执行计划，因此不一定是nested loop连接方式。如果是2个表，这两个表的连接结果是nested loop连接方式。


## USE_HASH
该提示引导优化器按照哈希连接方式执行连接。在执行哈希连接时，如果由于某一边的表比较小，从而可以在内存中实现哈希连接，所以可根据实际情况进行hint指定，语法如下：
```
/*+ USE_HASH(table_name1 [table_name2 ...])*/
```

参数说明：
-table_name1:表名，提示优化器将指定的表作为被驱动表。

规则说明：
- 规则1：参数传入表，提示优化器将指定的表作为被驱动表，以哈希连接的方式将每个指定的表连接起来。
- 规则2：如果只有一个表，由于是将指定的表作为被驱动表构建执行计划，因此不一定是哈希连接方式。如果是2个表，这两个表的连接结果是哈希连接方式。


## USE_MERGE
use_merge: 引导优化器按照merge连接方式执行表连接，语法如下：
```
/*+ USE_MERGE(table_name1 [table_name2 ...])*/
```

参数说明：
-table_name1:表名，提示优化器将指定的表作为被驱动表。

规则说明：
- 规则1：参数传入表，提示优化器将指定的表作为被驱动表，以归并连接的方式将每个指定的表连接起来。
- 规则2：如果只有一个表，由于是将指定的表作为被驱动表构建执行计划，因此不一定是merge连接方式。如果是2个表，这两个表的连接结果是merge连接方式。