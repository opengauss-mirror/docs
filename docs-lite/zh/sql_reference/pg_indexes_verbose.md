# PG\_INDEXES\_VERBOSE
PG\_INDEXES\_VERBOSE视图可查询索引是否被其他索引覆盖。

**表 1**  PG\_INDEXES\_VERBOSE字段

<a name="table95071716277"></a>
<table><thead align="left"><tr id="row650117172719"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="p1505176271"><a name="p1505176271"></a><a name="p1505176271"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.69%" id="mcps1.2.4.1.2"><p id="p350141722716"><a name="p350141722716"></a><a name="p350141722716"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="p150141710279"><a name="p150141710279"></a><a name="p150141710279"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row150181752713"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p20501717152716"><a name="p20501717152716"></a><a name="p20501717152716"></a>indrelid</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p165031792718"><a name="p165031792718"></a><a name="p165031792718"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p145010176270"><a name="p145010176270"></a><a name="p145010176270"></a>表 oid</p>
</td>
</tr>
<tr id="row1850161732714"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p450817152719"><a name="p450817152719"></a><a name="p450817152719"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p077918823010"><a name="p077918823010"></a><a name="p077918823010"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p145071752718"><a name="p145071752718"></a><a name="p145071752718"></a>索引 oid</p>
</td>
</tr>
<tr id="row13501017192710"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p950141762710"><a name="p950141762710"></a><a name="p950141762710"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p135012174277"><a name="p135012174277"></a><a name="p135012174277"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p550317192715"><a name="p550317192715"></a><a name="p550317192715"></a>表名</p>
</td>
</tr>
<tr id="row1750141772714"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p16501517112711"><a name="p16501517112711"></a><a name="p16501517112711"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p175041712716"><a name="p175041712716"></a><a name="p175041712716"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p050617162714"><a name="p050617162714"></a><a name="p050617162714"></a>schema 名</p>
</td>
</tr>
<tr id="row19501317112710"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p14501017202719"><a name="p14501017202719"></a><a name="p14501017202719"></a>indexname</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p16208824303"><a name="p16208824303"></a><a name="p16208824303"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p250121742718"><a name="p250121742718"></a><a name="p250121742718"></a>索引名</p>
</td>
</tr>
<tr id="row105041714277"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p250717112710"><a name="p250717112710"></a><a name="p250717112710"></a>amname</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p95117173277"><a name="p95117173277"></a><a name="p95117173277"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p551101742718"><a name="p551101742718"></a><a name="p551101742718"></a>索引类型</p>
</td>
</tr>
<tr id="row12335949202917"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p13352049102912"><a name="p13352049102912"></a><a name="p13352049102912"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p118599567297"><a name="p118599567297"></a><a name="p118599567297"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p3336649132918"><a name="p3336649132918"></a><a name="p3336649132918"></a>从 pg_stat_all_indexes 获取的统计信息</p>
</td>
</tr>
<tr id="row12335949202917"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p13352049102912"><a name="p13352049102912"></a><a name="p13352049102912"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p118599567297"><a name="p118599567297"></a><a name="p118599567297"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p3336649132918"><a name="p3336649132918"></a><a name="p3336649132918"></a>从 pg_stat_all_indexes 获取的统计信息</p>
</td>
</tr>
<tr id="row12335949202917"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p13352049102912"><a name="p13352049102912"></a><a name="p13352049102912"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p118599567297"><a name="p118599567297"></a><a name="p118599567297"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p3336649132918"><a name="p3336649132918"></a><a name="p3336649132918"></a>从 pg_stat_all_indexes 获取的统计信息</p>
</td>
</tr>
<tr id="row12335949202917"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p13352049102912"><a name="p13352049102912"></a><a name="p13352049102912"></a>overlap_indexes</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p118599567297"><a name="p118599567297"></a><a name="p118599567297"></a>[]json</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p3336649132918"><a name="p3336649132918"></a><a name="p3336649132918"></a>覆盖了当前索引的索引信息</p>
</td>
</tr>
</tbody>
</table>
