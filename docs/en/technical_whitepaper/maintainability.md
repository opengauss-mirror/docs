# Maintainability<a name="EN-US_CONCEPT_0289895660"></a>

## Workload Diagnosis Report<a name="en-us_concept_0283139006_section16308432469"></a>

The workload diagnosis report \(WDR\) generates a performance report between two different time points based on the system performance snapshot data at two different time points. The report is used to diagnose database kernel performance faults.

The WDR performance snapshot data is stored in the snapshot schema of the **postgres** database. The default collection and retention policies are as follows:

-   A snapshot is collected every hour \(wdr\_snapshot\_interval=1h\).
-   It is retained for 8 days \(wdr\_snapshot\_retention\_days=8\).

WDR depends on the following two components:

-   SNAPSHOT: The performance snapshot can be configured to collect a certain amount of performance data from the kernel at a specified interval and store the data in the user tablespace. Any snapshot can be used as a performance baseline for comparison with other snapshots.
-   WDR Reporter: This tool analyzes the overall system performance based on two snapshots, calculates the changes of more specific performance indicators between the two time periods, and generates summarized and detailed performance data. For details, see  [Table 1](#en-us_concept_0283139006_en-us_concept_0238164494_table14895120191613)  and  [Table 2](#en-us_concept_0283139006_en-us_concept_0238164494_table23331848193120).

**Table  1**  Summarized diagnosis report

<a name="en-us_concept_0283139006_en-us_concept_0238164494_table14895120191613"></a>
<table><thead align="left"><tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1889513016163"><th class="cellrowborder" valign="top" width="24.77%" id="mcps1.2.3.1.1"><p id="en-us_concept_0283139006_en-us_concept_0238164494_p689512091618"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p689512091618"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p689512091618"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.22999999999999%" id="mcps1.2.3.1.2"><p id="en-us_concept_0283139006_en-us_concept_0238164494_p118951404165"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p118951404165"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p118951404165"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1189517019163"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p16896205162"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p16896205162"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p16896205162"></a>Database Stat</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p7110144513222"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p7110144513222"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p7110144513222"></a>Evaluates the load and I/O status of the current database. Load and I/O are the most important indicators of the TP system.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p15896180171619"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p15896180171619"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p15896180171619"></a>The statistics include the number of sessions connected to the database, number of committed and rolled back transactions, number of read disk blocks, number of disk blocks found in the cache, number of rows returned, captured, inserted, updated, and deleted through database query, number of conflicts and deadlocks, usage of temporary files, and I/O read/write time.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row589614018168"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p2896170181618"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p2896170181618"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p2896170181618"></a>Load Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p2089612013161"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p2089612013161"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p2089612013161"></a>Evaluates the current system load from the time, I/O, transaction, and SQL dimensions.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p161691350122212"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p161691350122212"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p161691350122212"></a>The statistics include the job running elapse time, CPU time, daily transaction quality, logical and physical read volume, read and write I/O times and size, login and logout times, SQL, transaction execution volume, and SQL P85 and P90 response time.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row889614011167"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p11896801161"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11896801161"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11896801161"></a>Instance Efficiency Percentages</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p146120311858"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p146120311858"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p146120311858"></a>Evaluates the cache efficiency of the current system.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p1989610091613"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1989610091613"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1989610091613"></a>The statistics include the database cache hit ratio.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row189630111613"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p148961007164"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p148961007164"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p148961007164"></a>Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p115276341657"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p115276341657"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p115276341657"></a>Evaluates the performance of key system kernel resources and key events.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p789680191613"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p789680191613"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p789680191613"></a>The statistics include the number of times that the key time of the database kernel occurs and the waiting time.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row20583178178"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p559717121712"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p559717121712"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p559717121712"></a>Wait Classes</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p11553691966"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11553691966"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11553691966"></a>Evaluates the performance of key events in the system.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p11595172176"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11595172176"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11595172176"></a>The statistics include the release of the data kernel in the main types of waiting events, such as STATUS, LWLOCK_EVENT, LOCK_EVENT, and IO_EVENT.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1737892971715"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p1437872931714"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1437872931714"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1437872931714"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p1437842910178"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1437842910178"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1437842910178"></a>Includes time release of the CPU in user mode, kernel mode, wait I/O, and idle mode.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row13154183712171"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p515514378179"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p515514378179"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p515514378179"></a>IO Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p13155133710173"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p13155133710173"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p13155133710173"></a>Includes the number of database I/O times, database I/O data volume, number of redo I/O times, and redo I/O volume.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row123476454170"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p934714512178"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p934714512178"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p934714512178"></a>Memory Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p434712455175"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p434712455175"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p434712455175"></a>Includes maximum process memory, used process memory, maximum shared memory, and used shared memory.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Detailed diagnosis report

<a name="en-us_concept_0283139006_en-us_concept_0238164494_table23331848193120"></a>
<table><thead align="left"><tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1533312481318"><th class="cellrowborder" valign="top" width="24.93%" id="mcps1.2.3.1.1"><p id="en-us_concept_0283139006_en-us_concept_0238164494_p5333948203119"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p5333948203119"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p5333948203119"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.07000000000001%" id="mcps1.2.3.1.2"><p id="en-us_concept_0283139006_en-us_concept_0238164494_p17333144823110"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p17333144823110"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p17333144823110"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1533315480312"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p113331448163118"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p113331448163118"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p113331448163118"></a>Time Model</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p18455944461"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p18455944461"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p18455944461"></a>Evaluates the performance of the current system in the time dimension.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p33332484313"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p33332484313"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p33332484313"></a>The statistics include time consumed by the system in each phase, including the kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, and I/O time.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1233374883113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p10333948163119"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p10333948163119"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p10333948163119"></a>SQL Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p367217315715"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p367217315715"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p367217315715"></a>Diagnoses SQL statement performance problems.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p103331848113117"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p103331848113117"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p103331848113117"></a>The statistics include normalized SQL performance indicators in multiple dimensions: elapsed time, CPU time, rows returned, tuple reads, executions, physical reads, and logical reads. The indicators can be classified into execution time, number of execution times, row activity, and cache I/O.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1933324873111"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p183331348193119"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p183331348193119"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p183331348193119"></a>Wait Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p39281554285"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p39281554285"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p39281554285"></a>Diagnoses performance of key system resources and key time in detail.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p933314823114"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p933314823114"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p933314823114"></a>The statistics include the performance of all key events in a period of time, including the number of events and the time consumed.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row3334148183116"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p4334204817319"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p4334204817319"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p4334204817319"></a>Cache IO Stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p77092138917"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p77092138917"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p77092138917"></a>Diagnoses the performance of user tables and indexes.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p73341848193110"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p73341848193110"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p73341848193110"></a>The statistics include read and write operations on all user tables and indexes, and the cache hit ratio.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row233424816311"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p133474810318"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p133474810318"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p133474810318"></a>Utility status</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p178211436699"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p178211436699"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p178211436699"></a>Diagnoses the performance of backend jobs.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p1334134843114"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1334134843114"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1334134843114"></a>The statistics include the performance of backend operations such as page operation and replication.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row123341448113113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p11334848143110"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11334848143110"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p11334848143110"></a>Object stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p14405135119915"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p14405135119915"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p14405135119915"></a>Diagnoses the performance of database objects.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p6334174863119"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p6334174863119"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p6334174863119"></a>The statistics include user tables, tables on indexes, index scan activities, insert, update, and delete activities, number of valid rows, and table maintenance status.</p>
</td>
</tr>
<tr id="en-us_concept_0283139006_en-us_concept_0238164494_row1427793219359"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p32775326355"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p32775326355"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p32775326355"></a>Configuration settings</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139006_en-us_concept_0238164494_p1119216811109"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1119216811109"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p1119216811109"></a>Determines whether the configuration is changed.</p>
<p id="en-us_concept_0283139006_en-us_concept_0238164494_p142774327353"><a name="en-us_concept_0283139006_en-us_concept_0238164494_p142774327353"></a><a name="en-us_concept_0283139006_en-us_concept_0238164494_p142774327353"></a>It is a snapshot that contains all current configuration parameters.</p>
</td>
</tr>
</tbody>
</table>

Benefits:

-   WDR is the main method for diagnosing long-term performance problems. Based on the performance baseline of a snapshot, performance analysis is performed from multiple dimensions, helping DBAs understand the system load, performance of each component, and performance bottlenecks.
-   Snapshots are also an important data source for subsequent performance problem self-diagnosis and self-optimization suggestions.

## Slow SQL Diagnosis<a name="section565313549522"></a>

Slow SQL records information about all jobs whose execution time exceeds the threshold.

Historical slow SQL provides table-based and function-based query interfaces. You can query the execution plan, start time, end time, query statement, row activity, kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, I/O time, network overhead, and lock overhead. All information is anonymized.

Slow SQL provides detailed information required for slow SQL diagnosis. You can diagnose performance problems of specific slow SQL statements offline without reproducing the problem. The table-based and function-based APIs help users collect statistics on slow SQL indicators and connect to third-party platforms.
