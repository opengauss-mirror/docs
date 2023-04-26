# 使用CSV格式写日志<a name="ZH-CN_TOPIC_0242371514"></a>

## 前提条件<a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_s429dec1a2f1348e290437382aa165032"></a>

-   [log\_destination](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_sb6c9884f69bd4765a60f80810c94f194)的值设置为csvlog。
-   [logging\_collector](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_s61d6090c04ee464fb54f8b31936ba818)的值设置为on。

## csvlog定义<a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_sa05c5f4e9e53421584d0bfd757ed1247"></a>

以“逗号分隔值” 即CSV（Comma Separated Value）的形式发出日志。

以下是简单的用来存储CSV形式日志输出的表定义：

```
CREATE TABLE gaussdb_log
(
log_time timestamp(3) with time zone,
node_name text,
user_name text,
database_name text,
process_id bigint,
connection_from text,
"session_id" text,
session_line_num bigint,
command_tag text,
session_start_time timestamp with time zone,
virtual_transaction_id text,
transaction_id bigint,
query_id bigint,
module text,
error_severity text,
sql_state_code text,
message text,
detail text,
hint text,
internal_query text,
internal_query_pos integer,
context text,
query text,
query_pos integer,
location text,
application_name text
);
```

详细说明请参见[表1](#zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_table44188316)。

**表 1**  csvlog字段含义表

<a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_table44188316"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row7547926"><th class="cellrowborder" valign="top" width="15.93%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7402308"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7402308"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7402308"></a>字段名</p>
</th>
<th class="cellrowborder" valign="top" width="16.89%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62716086"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62716086"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62716086"></a>字段含义</p>
</th>
<th class="cellrowborder" valign="top" width="15.86%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46838229"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46838229"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46838229"></a>字段名</p>
</th>
<th class="cellrowborder" valign="top" width="51.32%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p35800200"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p35800200"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p35800200"></a>字段含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row14135096"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4092108"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4092108"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4092108"></a>log_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p63025325"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p63025325"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p63025325"></a>毫秒级的时间戳</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4777666"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4777666"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p4777666"></a>module</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p51446643"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p51446643"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p51446643"></a>日志所属模块</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_row102249302459"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_p1222420304458"><a name="zh-cn_topic_0237124724_p1222420304458"></a><a name="zh-cn_topic_0237124724_p1222420304458"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_p20224183034520"><a name="zh-cn_topic_0237124724_p20224183034520"></a><a name="zh-cn_topic_0237124724_p20224183034520"></a>节点名称</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_p1224830164510"><a name="zh-cn_topic_0237124724_p1224830164510"></a><a name="zh-cn_topic_0237124724_p1224830164510"></a>error_severity</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_p10224193013453"><a name="zh-cn_topic_0237124724_p10224193013453"></a><a name="zh-cn_topic_0237124724_p10224193013453"></a>ERRORSTATE代码</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row60366610"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57857274"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57857274"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57857274"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55927602"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55927602"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55927602"></a>用户名</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p33841890"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p33841890"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p33841890"></a>sql_state_code</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p56838579"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p56838579"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p56838579"></a>SQLSTATE代码</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row41785167"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29155380"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29155380"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29155380"></a>database_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12775565"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12775565"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12775565"></a>数据库名</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28187843"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28187843"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28187843"></a>message</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p1513917"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p1513917"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p1513917"></a>错误消息</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row13625255"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29903875"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29903875"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p29903875"></a>process_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6294807"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6294807"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6294807"></a>进程ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40117388"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40117388"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40117388"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28283018"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28283018"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p28283018"></a>详细错误消息</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row53220571"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p15899000"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p15899000"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p15899000"></a>connection_from</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12750642"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12750642"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p12750642"></a>客户主机：端口号</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26169072"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26169072"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26169072"></a>hint</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p39320091"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p39320091"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p39320091"></a>提示</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row18336500"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p8861549"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p8861549"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p8861549"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46696838"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46696838"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46696838"></a>会话ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p24347495"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p24347495"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p24347495"></a>internal_query</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25990073"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25990073"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25990073"></a>内部查询（查询那些导致错误的信息，如果有的话）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row32584067"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p22063809"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p22063809"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p22063809"></a>session_line_num</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p42338115"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p42338115"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p42338115"></a>每个会话的行数</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6835314"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6835314"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p6835314"></a>internal_query_pos</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p16789557"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p16789557"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p16789557"></a>内部查询指针</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row16888290"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25774239"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25774239"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p25774239"></a>command_tag</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7338596"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7338596"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p7338596"></a>命令标签</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57555418"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57555418"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p57555418"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31477288"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31477288"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31477288"></a>环境</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row14860144"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62821047"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62821047"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p62821047"></a>session_start_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55340009"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55340009"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p55340009"></a>会话开始时间</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p53355760"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p53355760"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p53355760"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26849332"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26849332"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p26849332"></a>错误发生位置的字符统计</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row40317400"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p44483969"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p44483969"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p44483969"></a>virtual_transaction_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46431771"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46431771"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p46431771"></a>常规事务</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p2877134"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p2877134"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p2877134"></a>query_pos</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31721281"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31721281"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31721281"></a>错误发生位置指针</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row19286940"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p18738312"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p18738312"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p18738312"></a>transaction_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p41408300"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p41408300"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p41408300"></a>事务ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p65738033"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p65738033"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p65738033"></a>location</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p23180479"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p23180479"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p23180479"></a>在<span id="zh-cn_topic_0237124724_text31772042204913"><a name="zh-cn_topic_0237124724_text31772042204913"></a><a name="zh-cn_topic_0237124724_text31772042204913"></a><span id="text1021313587256"><a name="text1021313587256"></a><a name="text1021313587256"></a>openGauss</span></span>源代码中错误的位置（如果<a href="记录日志的内容.md#zh-cn_topic_0237124723_zh-cn_topic_0059778400_s0c617c9fa21a44c4a10480d28b5cd208">log_error_verbosity</a>的值设为verbose）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_row7297720"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p54244453"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p54244453"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p54244453"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31724591"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31724591"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p31724591"></a>查询ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p19555069"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p19555069"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p19555069"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40456760"><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40456760"></a><a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_zh-cn_topic_0058967802_p40456760"></a>应用名称</p>
</td>
</tr>
</tbody>
</table>

使用COPY FROM命令将日志文件导入这个表：

```
COPY gaussdb_log FROM '/opt/data/pg_log/logfile.csv' WITH csv;
```

>![](public_sys-resources/icon-note.png) **说明：**   
>此处的日志名“logfile.csv”要换成实际生成的日志的名称。  

## 简化输入<a name="zh-cn_topic_0237124724_zh-cn_topic_0059779007_s7025be501c46413a9d63291fc8a2f130"></a>

简化输入到CSV日志文件，可以通过如下操作：

-   设置[log\_filename](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_s3226ae3209154e249928c24ec67c5809)和[log\_rotation\_age](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_s3ce09b8a7ae543b18fae13a821a725a5)，为日志文件提供一个一致的、可预测的命名方案。通过日志文件名，预测一个独立的日志文件完成并进入准备导入状态的时间。
-   将[log\_rotation\_size](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_s282e72143bb14915bedb4b432586b07e)设为0来终止基于尺寸的日志回滚，因为基于尺寸的日志回滚让预测日志文件名变得非常的困难。
-   将[log\_truncate\_on\_rotation](记录日志的位置.md#zh-cn_topic_0237124721_zh-cn_topic_0059778787_s143b6d35ddbe48b8810106a4d3929e8a)设为on以便区分在同一日志文件中旧的日志数据和新的日志数据。

