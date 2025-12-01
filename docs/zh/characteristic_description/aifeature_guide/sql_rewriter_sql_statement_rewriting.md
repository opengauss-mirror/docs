# SQL Rewriter<a name="ZH-CN_TOPIC_0000002294471381"></a>

## 概述<a name="ZH-CN_TOPIC_0000002259861270"></a>

SQL Rewriter是一个SQL改写工具，根据预先设定的规则，将查询语句转换为更为高效或更为规范的形式，使得查询效率得以提升。

>[!NOTE]说明 
>
>- 本功能不适用包含子查询的语句。
>- 本功能只支持SELECT语句和对整个表格进行删除的DELETE语句。
>- 本功能包含12个改写规则，对不符合改写规则的语句，将不会进行处理。
>- 本功能会对原始查询语句和改写后语句进行屏幕输出，不建议对包含涉敏感信息的SQL语句进行改写。
>- union转union all规则避免了去重，从而提升了查询性能，所得结果有可能存在冗余。
>- 语句中若包含“order by”+ 指定列名或“group by”+ 指定列名，将无法适用SelfJoin规则。
>- 工具不保证查询语句等价转换，其目的是提升查询语句效率，一些推荐结果，需要结合业务实践进行优化，例如显性要求指定select的字段名。

## 使用指导<a name="ZH-CN_TOPIC_0000002259758168"></a>

### 前提条件<a name="zh-cn_topic_0000001714949153_section11307523175912"></a>

数据库状态正常、连接正常。

### 使用方法示例<a name="zh-cn_topic_0000001714949153_section12324135224"></a>

以tpcc数据库为例：

```
gs_dbmind component sql_rewriter 5030 tpcc queries.sql --db-host 127.0.0.1 --db-user myname --schema public
```

queries.sql为需要改写的SQL文件，内容如下：

```
DELETE FROM bmsql_config;
DELETE FROM bmsql_config WHERE cfg_name='1';
```

结果为多个改写后的查询语句，显示在屏幕（无法改写的语句，显示为空），如下：

```
+--------------------------------------------------------------------------+------------------------------+
| Raw SQL                                                                  | Rewritten SQL                |
+--------------------------------------------------------------------------+------------------------------+
| DELETE FROM bmsql_config;                                                | TRUNCATE TABLE bmsql_config; |
| DELETE FROM bmsql_config WHERE cfg_name='1';                             |                              |
+--------------------------------------------------------------------------+------------------------------+
```

## 获取帮助<a name="ZH-CN_TOPIC_0000002294398317"></a>

使用SQL Rewriter前，您可以通过以下指令获取帮助。

```
gs_dbmind component sql_rewriter --help
```

显示如下帮助信息：

```
usage:  [-h] [--db-host DB_HOST] [--db-user DB_USER] [--schema SCHEMA]
        [-v] db_port database file

SQL Rewriter

positional arguments:
  db_port            Port for database
  database           Name for database
  file               File containing SQL statements which need to rewrite

optional arguments:
  -h, --help         show this help message and exit
  --db-host DB_HOST  Host for database
  --db-user DB_USER  Username for database log-in
  --schema SCHEMA    Schema name for the current business data
  -v, --version      show program's version number and exit
```

密码通过管道输入或交互式输入，对于免密用户，任意输入都可通过检验。

## 命令参考<a name="ZH-CN_TOPIC_0000002294471385"></a>

**表 1**  命令行参数说明

<a name="zh-cn_topic_0000001714829065_table8333140153713"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829065_row1333364033712"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0000001714829065_p19333940103713"><a name="zh-cn_topic_0000001714829065_p19333940103713"></a><a name="zh-cn_topic_0000001714829065_p19333940103713"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0000001714829065_p733334012373"><a name="zh-cn_topic_0000001714829065_p733334012373"></a><a name="zh-cn_topic_0000001714829065_p733334012373"></a>释义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829065_row101341833152610"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p213423312267"><a name="zh-cn_topic_0000001714829065_p213423312267"></a><a name="zh-cn_topic_0000001714829065_p213423312267"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p713493352618"><a name="zh-cn_topic_0000001714829065_p713493352618"></a><a name="zh-cn_topic_0000001714829065_p713493352618"></a>帮助命令。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row14333124063712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p183331740153717"><a name="zh-cn_topic_0000001714829065_p183331740153717"></a><a name="zh-cn_topic_0000001714829065_p183331740153717"></a>db_port</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p2333144013378"><a name="zh-cn_topic_0000001714829065_p2333144013378"></a><a name="zh-cn_topic_0000001714829065_p2333144013378"></a>数据库端口号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row123331540183712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p4333194033717"><a name="zh-cn_topic_0000001714829065_p4333194033717"></a><a name="zh-cn_topic_0000001714829065_p4333194033717"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p4333640173713"><a name="zh-cn_topic_0000001714829065_p4333640173713"></a><a name="zh-cn_topic_0000001714829065_p4333640173713"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row2333184013376"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p123338404377"><a name="zh-cn_topic_0000001714829065_p123338404377"></a><a name="zh-cn_topic_0000001714829065_p123338404377"></a>file</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p633344016371"><a name="zh-cn_topic_0000001714829065_p633344016371"></a><a name="zh-cn_topic_0000001714829065_p633344016371"></a>包含多个查询语句的文件路径。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row167521385392"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p97521538193914"><a name="zh-cn_topic_0000001714829065_p97521538193914"></a><a name="zh-cn_topic_0000001714829065_p97521538193914"></a>--db-host</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p1775223813916"><a name="zh-cn_topic_0000001714829065_p1775223813916"></a><a name="zh-cn_topic_0000001714829065_p1775223813916"></a>（可选）数据库主机号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row514364417396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p814364412392"><a name="zh-cn_topic_0000001714829065_p814364412392"></a><a name="zh-cn_topic_0000001714829065_p814364412392"></a>--db-user</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p17143244203914"><a name="zh-cn_topic_0000001714829065_p17143244203914"></a><a name="zh-cn_topic_0000001714829065_p17143244203914"></a>（可选）数据库用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row7406202412015"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p44063240020"><a name="zh-cn_topic_0000001714829065_p44063240020"></a><a name="zh-cn_topic_0000001714829065_p44063240020"></a>--schema</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p1840632416018"><a name="zh-cn_topic_0000001714829065_p1840632416018"></a><a name="zh-cn_topic_0000001714829065_p1840632416018"></a>（可选）模式，不指定时默认为public。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829065_row445084613267"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714829065_p18450846192614"><a name="zh-cn_topic_0000001714829065_p18450846192614"></a><a name="zh-cn_topic_0000001714829065_p18450846192614"></a>-v, --version</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714829065_p845024615262"><a name="zh-cn_topic_0000001714829065_p845024615262"></a><a name="zh-cn_topic_0000001714829065_p845024615262"></a>获取版本号。</p>
</td>
</tr>
</tbody>
</table>

## 常见问题处理<a name="ZH-CN_TOPIC_0000002259861274"></a>

- SQL无法改写：请查看SQL是否符合改写规则或SQL语法是否正确。
