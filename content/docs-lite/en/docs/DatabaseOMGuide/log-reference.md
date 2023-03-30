# Log Reference<a name="EN-US_TOPIC_0289897020"></a>

## Log Overview<a name="en-us_topic_0283140584_section1680963115278"></a>

During database running, a large number of logs are generated, including write-ahead logs \(WALs, also called Xlogs\) for ensuring database security and reliability and run logs and operation logs for daily database maintenance. If the database is faulty, you can refer to these logs to locate the fault and restore the database.

**Log Type**

The following table describes details about log types.

**Table  1**  Log types

<a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_t9de5b3305fcf42359d23d4787f928a91"></a>
<table><thead align="left"><tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_r1fd5f6d21ad341329ea3199cc593cd11"><th class="cellrowborder" valign="top" width="15.72%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="84.28%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_rca47499877d54688a6d3723bc521e570"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"></a>System log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"></a>Logs generated during database running. They are used to record abnormal process information.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_r903cc73d08c74c72be5fd27832ad6e64"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"></a>Operation log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"></a>Logs generated when a client tool (such as <strong id="en-us_topic_0237088896_b1647624612321"><a name="en-us_topic_0237088896_b1647624612321"></a><a name="en-us_topic_0237088896_b1647624612321"></a>gs_guc</strong>) is operating databases.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_rc6631cbc6c524e09b77f5b0507ae370f"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"></a>Trace log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"></a>After the database instance on which the trace function is enabled is specified using the gstrace tool, a large number of trace logs are recorded. They are used to analyze database exceptions.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_rb7fbdaf07a2a4575a1ba0aa9e2bf9555"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"></a>Black box log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"></a>Logs generated when the database system breaks down. You can analyze the process context when the fault occurs based on the heap and stack information in the logs to facilitate fault locating. A black box dumps stack, heap, and register information about processes and threads when a system breaks down.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_r01e37dd994b04eb69c8aab2f4c97f9de"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"></a>Audit log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"></a>Logs used to record some of the database user operations after the database audit function is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_rbf07b66e42bf40e6acb61b93a225dcc4"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"></a>WAL</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"></a>Logs used to restore a damaged database. They are also called redo logs. You are advised to routinely back up WALs.</p>
</td>
</tr>
<tr id="en-us_topic_0283140584_en-us_topic_0237088896_row662551312317"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_p262631313239"><a name="en-us_topic_0283140584_en-us_topic_0237088896_p262631313239"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_p262631313239"></a>Performance log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140584_en-us_topic_0237088896_p176261113142310"><a name="en-us_topic_0283140584_en-us_topic_0237088896_p176261113142310"></a><a name="en-us_topic_0283140584_en-us_topic_0237088896_p176261113142310"></a>Logs used to record the status of physical resources and the performance of access to external resources (such as disks).</p>
</td>
</tr>
</tbody>
</table>

## System Log<a name="en-us_topic_0283140584_section13479185217289"></a>

System logs include those generated by database nodes when openGauss is running, and those generated when openGauss is deployed. If an error occurs during openGauss running, you can locate the cause and troubleshoot it based on system logs.

**Log Storage Directory**

The run logs of database nodes are stored in the corresponding folders in the  **/var/log/gaussdb**/_username_**/pg\_log**  directory.

Logs generated during the installation and uninstallation of openGauss are stored in the same directory as the installation and uninstallation script.

**Log Naming Rules**

-   The name format of database node run logs is:

    **postgresql-**_creation time_**.log**

    By default, a new log file is generated at 0:00 every day, or when the size of the latest log file exceeds 16 MB or a database instance \(database node\) is restarted.


-   The name formats of CM run logs are:

    -   cm\_agent logs:  **cm\_agent-**_creation time_**.log**,  **cm\_agent-**_creation time_**-current.log**,  **system\_call-**_creation time_**.log**, and  **system\_call-**_creation time_**-current.log**
    -   cm\_server logs:  **cm\_server-**_creation time_**.log**,  **cm\_server**_creation time_**-current.log**,  **key\_event-**_creation time_**.log**, and  **key\_event-**_creation time_**-current.log**
    -   om\_monitor logs:  **om\_monitor-**_creation time_**.log**  and  **om\_monitor-**_creation time_**-current.log**

    Logs whose names do not contain  **current**  are historical log files. Logs whose names contain  **current**  are current log files. When a process is called for the first time, a log file whose name contains  **current**  is created. If the size of this file exceeds 16 MB, the file is renamed in the historical log file name format, and a new log file is generated at the current time point.


**Log Content Description**

-   Content of a line in a database node log:

    Date+Time+Time zone+Username+Database name+Session ID+Log level+Log content


-   By default, a line in a cm\_agent, cm\_server, om\_monitor log is arranged in the following format:

    Time+Time zone+Session ID+Log content

    The  **SYSTEM\_CALL**  log records tool commands called by cm\_agent.

    By default, a line in a key\_event log is arranged in the following format: Time+Thread ID+Thread name:Key event type+Arbitration object instance ID+Arbitration details


## Operation Log<a name="en-us_topic_0283140584_section334253173120"></a>

Operation logs are generated when database tools are used by a database administrator or called by openGauss. If openGauss is faulty, you can backtrack user operations on the database and reproduce the fault based on the operation logs.

**Log Storage Directory**

The default path is  _$GAUSSLOG_**/bin**. If the environmental variable  **$GAUSSLOG**  does not exist or its value is empty, the log information generated for a tool will be displayed, but not recorded in the log file of the tool.

**Log Naming Rules**

The log file name format is as follows:

-   _tool name_**-**_log creation time_**.log**
-   _tool name_**-**_log creation time_**-current.log**

_tool name_**-**_log creation time_**.log**  is a historical log file, and  _tool name_**-**_log creation time_**-current.log**  is a current log file.

If the size of a log file exceeds 16 MB, the next time the tool is called, the log file is renamed in the historical log file name format, and a new log file is generated at the current time point.

For example,  **gs\_guc-2015-01-16\_183728-current.log**  is renamed as  **gs\_guc-2015-01-16\_183728.log**, and  **gs\_guc-2015-01-17\_142216-current.log**  is generated.

**Maintenance Suggestions**

You are advised to dump expired logs periodically to save disk space and prevent important logs from being lost.

## Audit Log<a name="en-us_topic_0283140584_section580165217352"></a>

After the audit function is enabled, a large number of audit logs will be generated, which occupy large storage space. You can customize an audit log maintenance policy based on the size of available storage space.

For details, see "Database Security Management \> Configuring Database Audit \> Maintaining Audit Logs" in the  _Developer Guide_.

## WAL<a name="en-us_topic_0283140584_section1842844603615"></a>

In a system using write-ahead logs \(WALs or Xlogs\), all data file modifications are written to a log before they are applied. That is, the corresponding log must be written into a permanent memory before a data file is modified. You can use WALs to restore openGauss if the system crashes.

**Log Storage Directory**

Take a DN as an example. Its WALs are stored in the  **/gaussdb/data/data\_dn****/pg\_xlog**  directory.

**/gaussdb/data/data\_dn**  is the data directory of a node in openGauss.

**Log Naming Rules**

Log files are saved as segment files. Each segment is 16 MB and is divided into multiple 8 KB pages. The name of a WAL file consists of 24 hexadecimal characters. Each name has three parts, with each part having eight hexadecimal characters. The first part indicates the time line, the second part indicates the log file identifier, and the third part indicates the file segment identifier. A time line starts from 1, and a log file identifier and a file segment identifier start from 0.

For example, the name of the first transaction log is  **000000010000000000000000**.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The numbers in each part are used in ascending order in succession. Exhausting all available numbers takes a long time, and the numbers will start from zero again after they reach the maximum.

**Log Content Description**

The content of WALs depends on the types of recorded transactions. WALs can be used to restore a system after the system breaks down.

By default, openGauss reads WALs for system restoration during each startup.

**Maintenance Suggestions**

WALs are important for database restoration. You are advised to routinely back up WALs.

## Performance Log<a name="en-us_topic_0283140584_section209649342396"></a>

Performance logs focus on the access performance of external resources. Performance logs are used to record the status of physical resources and the performance of access to external resources \(such as disks\). When a performance issue occurs, you can locate the cause using performance logs, which greatly improves troubleshooting efficiency.

**Log Storage Directory**

The performance logs of the database node are stored in the directories under  _$GAUSSLOG_**/gs\_profile**.

**Log Naming Rules**

The name format of database node performance logs is:

**postgresql-**_creation time_**.prf**

By default, a new log file is generated at 0:00 every day, or when the latest log file exceeds 20 MB or a database instance \(database node\) is restarted.

**Log Content Description**

Content of a line in a database node log:

_Host name_+_Date_+_Time_+_Instance name_+_Thread number_+_Log content_

