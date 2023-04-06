# Using CSV Log Output<a name="EN-US_TOPIC_0289900524"></a>

## Prerequisites<a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_s429dec1a2f1348e290437382aa165032"></a>

-   The  **[log\_destination](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_sb6c9884f69bd4765a60f80810c94f194)**  parameter is set to  **csvlog**.
-   The  **[logging\_collector](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_s61d6090c04ee464fb54f8b31936ba818)**  parameter is set to  **on**.

## Definition of csvlog<a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_sa05c5f4e9e53421584d0bfd757ed1247"></a>

Log lines are emitted in comma separated values \(CSV\) format.

An example table definition for storing CSV-format log output is shown as follows:

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

For details, see  [Table 1](#en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_table44188316).

**Table  1**  Meaning of each csvlog field

<a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_table44188316"></a>
<table><thead align="left"><tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row7547926"><th class="cellrowborder" valign="top" width="15.93%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7402308"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7402308"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7402308"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="16.89%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62716086"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62716086"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62716086"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="15.86%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46838229"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46838229"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46838229"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="51.32%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p35800200"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p35800200"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p35800200"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row14135096"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4092108"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4092108"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4092108"></a>log_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p63025325"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p63025325"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p63025325"></a>Timestamp in milliseconds</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4777666"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4777666"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p4777666"></a>module</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p51446643"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p51446643"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p51446643"></a>Module to which the log belongs</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_row102249302459"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_p1222420304458"><a name="en-us_topic_0283136999_en-us_topic_0237124724_p1222420304458"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_p1222420304458"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_p20224183034520"><a name="en-us_topic_0283136999_en-us_topic_0237124724_p20224183034520"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_p20224183034520"></a>Node name</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_p1224830164510"><a name="en-us_topic_0283136999_en-us_topic_0237124724_p1224830164510"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_p1224830164510"></a>error_severity</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_p10224193013453"><a name="en-us_topic_0283136999_en-us_topic_0237124724_p10224193013453"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_p10224193013453"></a>ERRORSTATE code</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row60366610"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57857274"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57857274"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57857274"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55927602"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55927602"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55927602"></a>Username</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p33841890"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p33841890"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p33841890"></a>sql_state_code</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p56838579"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p56838579"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p56838579"></a>SQLSTATE code</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row41785167"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29155380"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29155380"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29155380"></a>database_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12775565"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12775565"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12775565"></a>Database name </p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28187843"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28187843"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28187843"></a>message</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p1513917"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p1513917"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p1513917"></a>Error message</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row13625255"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29903875"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29903875"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p29903875"></a>process_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6294807"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6294807"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6294807"></a>Process ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40117388"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40117388"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40117388"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28283018"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28283018"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p28283018"></a>Detailed error message</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row53220571"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p15899000"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p15899000"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p15899000"></a>connection_from</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12750642"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12750642"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p12750642"></a>Port number of the client host</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26169072"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26169072"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26169072"></a>hint</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p39320091"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p39320091"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p39320091"></a>Prompt message</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row18336500"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p8861549"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p8861549"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p8861549"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46696838"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46696838"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46696838"></a>Session ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p24347495"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p24347495"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p24347495"></a>internal_query</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25990073"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25990073"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25990073"></a>Internal query (This field is used to query the information leading to errors if any.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row32584067"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p22063809"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p22063809"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p22063809"></a>session_line_num</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p42338115"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p42338115"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p42338115"></a>Number of lines in each session</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6835314"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6835314"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p6835314"></a>internal_query_pos</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p16789557"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p16789557"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p16789557"></a>Pointer for an internal query</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row16888290"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25774239"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25774239"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p25774239"></a>command_tag</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7338596"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7338596"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p7338596"></a>Command tag</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57555418"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57555418"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p57555418"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31477288"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31477288"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31477288"></a>Environment</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row14860144"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62821047"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62821047"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p62821047"></a>session_start_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55340009"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55340009"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p55340009"></a>Start time of a session</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p53355760"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p53355760"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p53355760"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26849332"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26849332"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p26849332"></a>Character count at the position where errors occur</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row40317400"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p44483969"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p44483969"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p44483969"></a>virtual_transaction_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46431771"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46431771"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p46431771"></a>Regular transaction</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p2877134"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p2877134"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p2877134"></a>query_pos</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31721281"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31721281"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31721281"></a>Pointer at the position where errors occur</p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row19286940"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p18738312"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p18738312"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p18738312"></a>transaction_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p41408300"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p41408300"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p41408300"></a>Transaction ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p65738033"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p65738033"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p65738033"></a>location</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p23180479"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p23180479"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p23180479"></a>Position where errors occur in the <span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span> source code if <strong id="b12601029145312"><a name="b12601029145312"></a><a name="b12601029145312"></a><a href="logging-content.md#en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s0c617c9fa21a44c4a10480d28b5cd208">log_error_verbosity</a></strong> is set to <strong id="b10616294534"><a name="b10616294534"></a><a name="b10616294534"></a>verbose</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_row7297720"><td class="cellrowborder" valign="top" width="15.93%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p54244453"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p54244453"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p54244453"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.89%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31724591"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31724591"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p31724591"></a>Query ID</p>
</td>
<td class="cellrowborder" valign="top" width="15.86%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p19555069"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p19555069"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p19555069"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="51.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40456760"><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40456760"></a><a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_en-us_topic_0058967802_p40456760"></a>Application name</p>
</td>
</tr>
</tbody>
</table>

Run the following command to import a log file to this table:

```
COPY gaussdb_log FROM '/opt/data/pg_log/logfile.csv' WITH csv;
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The log name \(**logfile.csv**\) here needs to be replaced with the name of a log generated.

## Simplifying Input<a name="en-us_topic_0283136999_en-us_topic_0237124724_en-us_topic_0059779007_s7025be501c46413a9d63291fc8a2f130"></a>

Simplify importing CSV log files by performing the following operations:

-   Set  **[log\_filename](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_s3226ae3209154e249928c24ec67c5809)**  and  **[log\_rotation\_age](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_s3ce09b8a7ae543b18fae13a821a725a5)**  to provide a consistent, predictable naming solution for log files. By doing this, you can predict when an individual log file is complete and ready to be imported.
-   Set  **[log\_rotation\_size](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_s282e72143bb14915bedb4b432586b07e)**  to  **0**  to disable size-based log rollback, as it makes the log file name difficult to predict.
-   Set  **[log\_truncate\_on\_rotation](logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_s143b6d35ddbe48b8810106a4d3929e8a)**  to  **on**  so that old log data cannot be mixed with the new one in the same file.

