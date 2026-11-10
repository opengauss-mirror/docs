# 实例IO

实例IO报告提供实例IO的多维度统计视图，支持按线程类型（Thread Type）、文件类型（File Type）、数据库（Database）、表空间（Tablespace）、数据库对象类型（Database Object Type）、数据库对象路径（Database Object Path）六个维度进行IO统计，帮助DBA从不同层面定位实例IO热点。

## 线程类型（Thread Type）

线程类型维度展示实例IO按线程角色（如WalWriter、PageWriter、Worker、Startup等）统计的读写次数、读写数据量、读写耗时及缓存命中、淘汰、fsync等指标。列名称及描述如下表所示。

**表 1**  线程类型主要内容

<a name="table_instance_io_thread_type"></a>
<table><thead align="left"><tr id="row_thread_type_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.thread_type.1.1"><p id="p_thread_type_1"><a name="p_thread_type_1"></a><a name="p_thread_type_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.thread_type.1.2"><p id="p_thread_type_2"><a name="p_thread_type_2"></a><a name="p_thread_type_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_thread_type_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_1_1"><a name="p_tt_1_1"></a><a name="p_tt_1_1"></a>Role Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_1_2"><a name="p_tt_1_2"></a><a name="p_tt_1_2"></a>线程角色名称（如WalWriter、PageWriter、Worker、Startup等）。</p>
</td>
</tr>
<tr id="row_thread_type_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_2_1"><a name="p_tt_2_1"></a><a name="p_tt_2_1"></a>Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_2_2"><a name="p_tt_2_2"></a><a name="p_tt_2_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_thread_type_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_3_1"><a name="p_tt_3_1"></a><a name="p_tt_3_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_3_2"><a name="p_tt_3_2"></a><a name="p_tt_3_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_thread_type_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_4_1"><a name="p_tt_4_1"></a><a name="p_tt_4_1"></a>Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_4_2"><a name="p_tt_4_2"></a><a name="p_tt_4_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_thread_type_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_5_1"><a name="p_tt_5_1"></a><a name="p_tt_5_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_5_2"><a name="p_tt_5_2"></a><a name="p_tt_5_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_thread_type_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_6_1"><a name="p_tt_6_1"></a><a name="p_tt_6_1"></a>Read MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_6_2"><a name="p_tt_6_2"></a><a name="p_tt_6_2"></a>读取数据量总大小（MB）。</p>
</td>
</tr>
<tr id="row_thread_type_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_7_1"><a name="p_tt_7_1"></a><a name="p_tt_7_1"></a>Per Sec Read MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_7_2"><a name="p_tt_7_2"></a><a name="p_tt_7_2"></a>每秒读取数据量大小（MB/s）。</p>
</td>
</tr>
<tr id="row_thread_type_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_8_1"><a name="p_tt_8_1"></a><a name="p_tt_8_1"></a>Write MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_8_2"><a name="p_tt_8_2"></a><a name="p_tt_8_2"></a>写入数据量总大小（MB）。</p>
</td>
</tr>
<tr id="row_thread_type_9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_9_1"><a name="p_tt_9_1"></a><a name="p_tt_9_1"></a>Per Sec Write MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_9_2"><a name="p_tt_9_2"></a><a name="p_tt_9_2"></a>每秒写入数据量大小（MB/s）。</p>
</td>
</tr>
<tr id="row_thread_type_10"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_10_1"><a name="p_tt_10_1"></a><a name="p_tt_10_1"></a>Read Time ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_10_2"><a name="p_tt_10_2"></a><a name="p_tt_10_2"></a>读取操作总耗时（毫秒）。</p>
</td>
</tr>
<tr id="row_thread_type_11"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_11_1"><a name="p_tt_11_1"></a><a name="p_tt_11_1"></a>Write Time ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_11_2"><a name="p_tt_11_2"></a><a name="p_tt_11_2"></a>写入操作总耗时（毫秒）。</p>
</td>
</tr>
<tr id="row_thread_type_12"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_12_1"><a name="p_tt_12_1"></a><a name="p_tt_12_1"></a>Hits</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_12_2"><a name="p_tt_12_2"></a><a name="p_tt_12_2"></a>缓冲区命中次数。</p>
</td>
</tr>
<tr id="row_thread_type_13"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_13_1"><a name="p_tt_13_1"></a><a name="p_tt_13_1"></a>Evictions</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_13_2"><a name="p_tt_13_2"></a><a name="p_tt_13_2"></a>缓冲区淘汰次数。</p>
</td>
</tr>
<tr id="row_thread_type_14"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_14_1"><a name="p_tt_14_1"></a><a name="p_tt_14_1"></a>Fsyncs</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_14_2"><a name="p_tt_14_2"></a><a name="p_tt_14_2"></a>fsync调用次数。</p>
</td>
</tr>
<tr id="row_thread_type_15"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.thread_type.1.1 "><p id="p_tt_15_1"><a name="p_tt_15_1"></a><a name="p_tt_15_1"></a>Fsync Time ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.thread_type.1.2 "><p id="p_tt_15_2"><a name="p_tt_15_2"></a><a name="p_tt_15_2"></a>fsync总耗时（毫秒）。</p>
</td>
</tr>
</tbody>
</table>

## 文件类型（File Type）

文件类型维度展示实例IO按文件类型（Data File：数据/索引文件，WAL Log：Redo日志文件）统计的读写次数、IO数据量（MB）及读写耗时等指标。列名称及描述如下表所示。

**表 2**  文件类型主要内容

<a name="table_instance_io_file_type"></a>
<table><thead align="left"><tr id="row_file_type_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.file_type.1.1"><p id="p_file_type_1"><a name="p_file_type_1"></a><a name="p_file_type_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.file_type.1.2"><p id="p_file_type_2"><a name="p_file_type_2"></a><a name="p_file_type_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_file_type_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_1_1"><a name="p_ft_1_1"></a><a name="p_ft_1_1"></a>File Type</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_1_2"><a name="p_ft_1_2"></a><a name="p_ft_1_2"></a>文件类型（Data File：数据/索引文件；WAL Log：Redo日志文件）。</p>
</td>
</tr>
<tr id="row_file_type_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_2_1"><a name="p_ft_2_1"></a><a name="p_ft_2_1"></a>Total Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_2_2"><a name="p_ft_2_2"></a><a name="p_ft_2_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_file_type_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_3_1"><a name="p_ft_3_1"></a><a name="p_ft_3_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_3_2"><a name="p_ft_3_2"></a><a name="p_ft_3_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_file_type_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_4_1"><a name="p_ft_4_1"></a><a name="p_ft_4_1"></a>Total Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_4_2"><a name="p_ft_4_2"></a><a name="p_ft_4_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_file_type_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_5_1"><a name="p_ft_5_1"></a><a name="p_ft_5_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_5_2"><a name="p_ft_5_2"></a><a name="p_ft_5_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_file_type_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_6_1"><a name="p_ft_6_1"></a><a name="p_ft_6_1"></a>Total IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_6_2"><a name="p_ft_6_2"></a><a name="p_ft_6_2"></a>总I/O数据量大小（MB）。</p>
</td>
</tr>
<tr id="row_file_type_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_7_1"><a name="p_ft_7_1"></a><a name="p_ft_7_1"></a>Per Sec IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_7_2"><a name="p_ft_7_2"></a><a name="p_ft_7_2"></a>每秒I/O数据量大小（MB/s）。</p>
</td>
</tr>
<tr id="row_file_type_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_8_1"><a name="p_ft_8_1"></a><a name="p_ft_8_1"></a>Per Sec Read ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_8_2"><a name="p_ft_8_2"></a><a name="p_ft_8_2"></a>每秒读取操作耗时（毫秒）。</p>
</td>
</tr>
<tr id="row_file_type_9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.file_type.1.1 "><p id="p_ft_9_1"><a name="p_ft_9_1"></a><a name="p_ft_9_1"></a>Per Sec Write ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.file_type.1.2 "><p id="p_ft_9_2"><a name="p_ft_9_2"></a><a name="p_ft_9_2"></a>每秒写入操作耗时（毫秒）。</p>
</td>
</tr>
</tbody>
</table>

## 数据库（Database）

数据库维度展示实例IO按数据库统计的读写次数、IO数据量（MB）等指标，数据库名称为空时表示全局共享文件。列名称及描述如下表所示。

**表 3**  数据库主要内容

<a name="table_instance_io_database"></a>
<table><thead align="left"><tr id="row_database_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.database.1.1"><p id="p_database_1"><a name="p_database_1"></a><a name="p_database_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.database.1.2"><p id="p_database_2"><a name="p_database_2"></a><a name="p_database_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_database_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_1_1"><a name="p_db_1_1"></a><a name="p_db_1_1"></a>Database</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_1_2"><a name="p_db_1_2"></a><a name="p_db_1_2"></a>数据库名称（为空时表示全局共享文件）。</p>
</td>
</tr>
<tr id="row_database_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_2_1"><a name="p_db_2_1"></a><a name="p_db_2_1"></a>Total Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_2_2"><a name="p_db_2_2"></a><a name="p_db_2_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_database_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_3_1"><a name="p_db_3_1"></a><a name="p_db_3_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_3_2"><a name="p_db_3_2"></a><a name="p_db_3_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_database_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_4_1"><a name="p_db_4_1"></a><a name="p_db_4_1"></a>Total Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_4_2"><a name="p_db_4_2"></a><a name="p_db_4_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_database_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_5_1"><a name="p_db_5_1"></a><a name="p_db_5_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_5_2"><a name="p_db_5_2"></a><a name="p_db_5_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_database_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_6_1"><a name="p_db_6_1"></a><a name="p_db_6_1"></a>Total IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_6_2"><a name="p_db_6_2"></a><a name="p_db_6_2"></a>总I/O数据量大小（MB）。</p>
</td>
</tr>
<tr id="row_database_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.database.1.1 "><p id="p_db_7_1"><a name="p_db_7_1"></a><a name="p_db_7_1"></a>Per Sec IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.database.1.2 "><p id="p_db_7_2"><a name="p_db_7_2"></a><a name="p_db_7_2"></a>每秒I/O数据量大小（MB/s）。</p>
</td>
</tr>
</tbody>
</table>

## 表空间（Tablespace）

表空间维度展示实例IO按表空间统计的读写次数、IO数据量（MB）等指标。列名称及描述如下表所示。

**表 4**  表空间主要内容

<a name="table_instance_io_tablespace"></a>
<table><thead align="left"><tr id="row_tablespace_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.tablespace.1.1"><p id="p_tablespace_1"><a name="p_tablespace_1"></a><a name="p_tablespace_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.tablespace.1.2"><p id="p_tablespace_2"><a name="p_tablespace_2"></a><a name="p_tablespace_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_tablespace_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_1_1"><a name="p_ts_1_1"></a><a name="p_ts_1_1"></a>Tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_1_2"><a name="p_ts_1_2"></a><a name="p_ts_1_2"></a>表空间名称。</p>
</td>
</tr>
<tr id="row_tablespace_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_2_1"><a name="p_ts_2_1"></a><a name="p_ts_2_1"></a>Total Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_2_2"><a name="p_ts_2_2"></a><a name="p_ts_2_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_tablespace_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_3_1"><a name="p_ts_3_1"></a><a name="p_ts_3_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_3_2"><a name="p_ts_3_2"></a><a name="p_ts_3_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_tablespace_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_4_1"><a name="p_ts_4_1"></a><a name="p_ts_4_1"></a>Total Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_4_2"><a name="p_ts_4_2"></a><a name="p_ts_4_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_tablespace_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_5_1"><a name="p_ts_5_1"></a><a name="p_ts_5_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_5_2"><a name="p_ts_5_2"></a><a name="p_ts_5_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_tablespace_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_6_1"><a name="p_ts_6_1"></a><a name="p_ts_6_1"></a>Total IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_6_2"><a name="p_ts_6_2"></a><a name="p_ts_6_2"></a>总I/O数据量大小（MB）。</p>
</td>
</tr>
<tr id="row_tablespace_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.tablespace.1.1 "><p id="p_ts_7_1"><a name="p_ts_7_1"></a><a name="p_ts_7_1"></a>Per Sec IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.tablespace.1.2 "><p id="p_ts_7_2"><a name="p_ts_7_2"></a><a name="p_ts_7_2"></a>每秒I/O数据量大小（MB/s）。</p>
</td>
</tr>
</tbody>
</table>

## 数据库对象类型（Database Object Type）

数据库对象类型维度展示实例IO按对象类型（TABLE：普通表，INDEX：索引，TOAST TABLE：TOAST大字段存储表，SEQUENCE：序列，MATERIALIZED VIEW：物化视图，OTHER：全局共享对象及其他关联对象）统计的对象数量、读写次数、IO数据量（MB）等指标。列名称及描述如下表所示。

**表 5**  数据库对象类型主要内容

<a name="table_instance_io_object_type"></a>
<table><thead align="left"><tr id="row_object_type_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.object_type.1.1"><p id="p_object_type_1"><a name="p_object_type_1"></a><a name="p_object_type_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.object_type.1.2"><p id="p_object_type_2"><a name="p_object_type_2"></a><a name="p_object_type_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_object_type_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_1_1"><a name="p_ot_1_1"></a><a name="p_ot_1_1"></a>Object Type</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_1_2"><a name="p_ot_1_2"></a><a name="p_ot_1_2"></a>对象类型（TABLE：普通表；INDEX：索引；TOAST TABLE：TOAST大字段存储表；SEQUENCE：序列；MATERIALIZED VIEW：物化视图；OTHER：全局共享对象及其他关联对象）。</p>
</td>
</tr>
<tr id="row_object_type_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_2_1"><a name="p_ot_2_1"></a><a name="p_ot_2_1"></a>Object Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_2_2"><a name="p_ot_2_2"></a><a name="p_ot_2_2"></a>该类型的对象数量。</p>
</td>
</tr>
<tr id="row_object_type_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_3_1"><a name="p_ot_3_1"></a><a name="p_ot_3_1"></a>Total Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_3_2"><a name="p_ot_3_2"></a><a name="p_ot_3_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_object_type_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_4_1"><a name="p_ot_4_1"></a><a name="p_ot_4_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_4_2"><a name="p_ot_4_2"></a><a name="p_ot_4_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_object_type_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_5_1"><a name="p_ot_5_1"></a><a name="p_ot_5_1"></a>Total Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_5_2"><a name="p_ot_5_2"></a><a name="p_ot_5_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_object_type_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_6_1"><a name="p_ot_6_1"></a><a name="p_ot_6_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_6_2"><a name="p_ot_6_2"></a><a name="p_ot_6_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_object_type_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_7_1"><a name="p_ot_7_1"></a><a name="p_ot_7_1"></a>Total IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_7_2"><a name="p_ot_7_2"></a><a name="p_ot_7_2"></a>总I/O数据量大小（MB）。</p>
</td>
</tr>
<tr id="row_object_type_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_type.1.1 "><p id="p_ot_8_1"><a name="p_ot_8_1"></a><a name="p_ot_8_1"></a>Per Sec IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_type.1.2 "><p id="p_ot_8_2"><a name="p_ot_8_2"></a><a name="p_ot_8_2"></a>每秒I/O数据量大小（MB/s）。</p>
</td>
</tr>
</tbody>
</table>

## 数据库对象路径（Database Object Path）

数据库对象路径维度展示实例IO按物理文件路径统计的数据库、表空间、对象名称及读写次数、IO数据量（MB）等指标。列名称及描述如下表所示。

**表 6**  数据库对象路径主要内容

<a name="table_instance_io_object_path"></a>
<table><thead align="left"><tr id="row_object_path_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.object_path.1.1"><p id="p_object_path_1"><a name="p_object_path_1"></a><a name="p_object_path_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.object_path.1.2"><p id="p_object_path_2"><a name="p_object_path_2"></a><a name="p_object_path_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_object_path_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_1_1"><a name="p_op_1_1"></a><a name="p_op_1_1"></a>File Path</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_1_2"><a name="p_op_1_2"></a><a name="p_op_1_2"></a>物理文件路径（如 pg_default/14941）。</p>
</td>
</tr>
<tr id="row_object_path_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_2_1"><a name="p_op_2_1"></a><a name="p_op_2_1"></a>Database</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_2_2"><a name="p_op_2_2"></a><a name="p_op_2_2"></a>数据库名称。</p>
</td>
</tr>
<tr id="row_object_path_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_3_1"><a name="p_op_3_1"></a><a name="p_op_3_1"></a>Tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_3_2"><a name="p_op_3_2"></a><a name="p_op_3_2"></a>表空间名称。</p>
</td>
</tr>
<tr id="row_object_path_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_4_1"><a name="p_op_4_1"></a><a name="p_op_4_1"></a>Object Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_4_2"><a name="p_op_4_2"></a><a name="p_op_4_2"></a>对象名称（表、索引等）。</p>
</td>
</tr>
<tr id="row_object_path_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_5_1"><a name="p_op_5_1"></a><a name="p_op_5_1"></a>Total Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_5_2"><a name="p_op_5_2"></a><a name="p_op_5_2"></a>读取操作总次数。</p>
</td>
</tr>
<tr id="row_object_path_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_6_1"><a name="p_op_6_1"></a><a name="p_op_6_1"></a>Per Sec Reads</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_6_2"><a name="p_op_6_2"></a><a name="p_op_6_2"></a>每秒读取操作次数。</p>
</td>
</tr>
<tr id="row_object_path_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_7_1"><a name="p_op_7_1"></a><a name="p_op_7_1"></a>Total Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_7_2"><a name="p_op_7_2"></a><a name="p_op_7_2"></a>写入操作总次数。</p>
</td>
</tr>
<tr id="row_object_path_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_8_1"><a name="p_op_8_1"></a><a name="p_op_8_1"></a>Per Sec Writes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_8_2"><a name="p_op_8_2"></a><a name="p_op_8_2"></a>每秒写入操作次数。</p>
</td>
</tr>
<tr id="row_object_path_9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_9_1"><a name="p_op_9_1"></a><a name="p_op_9_1"></a>Total IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_9_2"><a name="p_op_9_2"></a><a name="p_op_9_2"></a>总I/O数据量大小（MB）。</p>
</td>
</tr>
<tr id="row_object_path_10"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.object_path.1.1 "><p id="p_op_10_1"><a name="p_op_10_1"></a><a name="p_op_10_1"></a>Per Sec IO MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.object_path.1.2 "><p id="p_op_10_2"><a name="p_op_10_2"></a><a name="p_op_10_2"></a>每秒I/O数据量大小（MB/s）。</p>
</td>
</tr>
</tbody>
</table>

## 备注

>[!NOTE]说明
>
> 1. **差分统计**：报表中的所有指标均为两次快照之间的增量，而非累计值；计数出现负向抖动时按 0 处理。
>
> 2. **仅统计用户侧 IO**：快照机制自身的写入不计入报表，各卡片指标只反映用户视角的 IO 开销。
>
> 3. **仅展示活跃对象**：统计区间内没有 IO 增量的对象不会出现在报表中，避免全零行干扰；指标显示为 — 表示该项统计不可用。
>
> 4. **指标口径**：文件类型、数据库、表空间、数据库对象类型、数据库对象路径五类卡片统一提供 Reads/Writes、Per Sec Reads/Writes、Total IO MB、Per Sec IO MB 六类指标；IO 量折算为 MB，并按快照间隔换算为每秒值；单位统一标注在列头，数据单元格不带单位。线程类型卡片按读、写方向分别统计 Read MB/Write MB 及对应每秒值，不提供 Total IO MB，并额外提供读写耗时、缓存命中/淘汰、fsync 次数与耗时。
>
> 5. **对象解析**：表、索引、TOAST 表、序列、物化视图按元数据解析为对应对象类型，无法解析的对象（如全局共享文件、跨库文件）统一归为 OTHER；对象名称以当前元数据为准，已删除对象按快照留存信息尽力还原。
>
> 6. **对象路径**：数据库对象路径卡片按区间内总 IO 量（物理读块 + 物理写块）倒序取前 10 个文件；默认表空间文件路径为 `pg_default/<filenum>`，自定义表空间为 `<spcname>/<filenum>`。
>
> 7. **精度说明**：文件级计数在个别场景（如 DDL 交换文件）下可能存在短暂延迟，属于采样机制的正常特性，不影响对 IO 趋势的判断。