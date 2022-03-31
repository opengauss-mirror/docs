# WDR<a name="EN-US_TOPIC_0000001105235298"></a>

## Availability<a name="section11239174173316"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section2238114973310"></a>

The workload diagnosis report \(WDR\) provides database performance diagnosis reports based on the baseline performance and incremental data that reflects performance changes.

## Benefits<a name="section1938191193419"></a>

-   The WDR is the main method for diagnosing long-term performance problems. Based on the performance baseline of a snapshot, performance analysis is performed from multiple dimensions, helping DBAs understand the system load, performance of each component, and performance bottlenecks.
-   Snapshots are also an important data source for self-diagnosis and self-optimization suggestions on subsequent performance problems.

## Description<a name="section49337943415"></a>

The WDR generates a performance report between two different time points based on the system performance snapshot data at these time points. The report is used to diagnose database kernel performance faults.

You can use generate\_wdr\_report\(...\) to generate a performance report based on two performance snapshots.

The WDR depends on the following two components:

-   Snapshot: The performance snapshot can be configured to collect a certain amount of performance data from the kernel at a specified interval and store the data in the user tablespace. Any snapshot can be used as a performance baseline for comparison with other snapshots.
-   WDR Reporter: This tool analyzes the overall system performance based on two snapshots, calculates the changes of more specific performance indicators between the two time points, and generates summarized and detailed performance data. For details, see  [Table 1](#table14895120191613)  and  [Table 2](#table23331848193120).

**Table  1**  Summarized diagnosis report

<a name="table14895120191613"></a>
<table><thead align="left"><tr id="row1889513016163"><th class="cellrowborder" valign="top" width="24.759999999999998%" id="mcps1.2.3.1.1"><p id="p689512091618"><a name="p689512091618"></a><a name="p689512091618"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.24%" id="mcps1.2.3.1.2"><p id="p118951404165"><a name="p118951404165"></a><a name="p118951404165"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1189517019163"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p16896205162"><a name="p16896205162"></a><a name="p16896205162"></a>Database Stat</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p7110144513222"><a name="p7110144513222"></a><a name="p7110144513222"></a>Evaluates the load and I/O status of the current database. Load and I/O are the most important indicators of the TP system.</p>
<p id="p15896180171619"><a name="p15896180171619"></a><a name="p15896180171619"></a>The statistics include the number of sessions connected to the database, number of committed and rolled back transactions, number of read disk blocks, number of disk blocks found in the cache, number of rows returned, captured, inserted, updated, and deleted through database query, number of conflicts and deadlocks, usage of temporary files, and I/O read/write time.</p>
</td>
</tr>
<tr id="row589614018168"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p2896170181618"><a name="p2896170181618"></a><a name="p2896170181618"></a>Load Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p2089612013161"><a name="p2089612013161"></a><a name="p2089612013161"></a>Evaluates the current system load from the time, I/O, transaction, and SQL dimensions.</p>
<p id="p161691350122212"><a name="p161691350122212"></a><a name="p161691350122212"></a>The statistics include the job running elapse time, CPU time, daily transaction quality, logical and physical read volume, read and write I/O times and size, login and logout times, SQL, transaction execution volume, and SQL P80 and P95 response time.</p>
</td>
</tr>
<tr id="row889614011167"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p11896801161"><a name="p11896801161"></a><a name="p11896801161"></a>Instance Efficiency Percentages</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p146120311858"><a name="p146120311858"></a><a name="p146120311858"></a>Evaluates the cache efficiency of the current system.</p>
<p id="p1989610091613"><a name="p1989610091613"></a><a name="p1989610091613"></a>The statistics include the database cache hit ratio.</p>
</td>
</tr>
<tr id="row189630111613"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p148961007164"><a name="p148961007164"></a><a name="p148961007164"></a>Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p115276341657"><a name="p115276341657"></a><a name="p115276341657"></a>Evaluates the performance of key system kernel resources and key events.</p>
<p id="p789680191613"><a name="p789680191613"></a><a name="p789680191613"></a>The statistics include the number of times that the key events of the database kernel occur and the waiting time.</p>
</td>
</tr>
<tr id="row20583178178"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p559717121712"><a name="p559717121712"></a><a name="p559717121712"></a>Wait Classes</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p11553691966"><a name="p11553691966"></a><a name="p11553691966"></a>Evaluates the performance of key events in the system.</p>
<p id="p11595172176"><a name="p11595172176"></a><a name="p11595172176"></a>The statistics include the release of the data kernel in the main types of wait events, such as <strong id="b62382322210"><a name="b62382322210"></a><a name="b62382322210"></a>STATUS</strong>, <strong id="b69051319122218"><a name="b69051319122218"></a><a name="b69051319122218"></a>LWLOCK_EVENT</strong>, <strong id="b442142392219"><a name="b442142392219"></a><a name="b442142392219"></a>LOCK_EVENT</strong>, and <strong id="b457143232213"><a name="b457143232213"></a><a name="b457143232213"></a>IO_EVENT</strong>.</p>
</td>
</tr>
<tr id="row1737892971715"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p1437872931714"><a name="p1437872931714"></a><a name="p1437872931714"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p1437842910178"><a name="p1437842910178"></a><a name="p1437842910178"></a>Includes time release of the CPU in user mode, kernel mode, I/O wait mode, or idle mode.</p>
</td>
</tr>
<tr id="row13154183712171"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p515514378179"><a name="p515514378179"></a><a name="p515514378179"></a>IO Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p13155133710173"><a name="p13155133710173"></a><a name="p13155133710173"></a>Includes the number of database I/O times, database I/O data volume, number of redo I/O times, and redo I/O volume.</p>
</td>
</tr>
<tr id="row123476454170"><td class="cellrowborder" valign="top" width="24.759999999999998%" headers="mcps1.2.3.1.1 "><p id="p934714512178"><a name="p934714512178"></a><a name="p934714512178"></a>Memory Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.24%" headers="mcps1.2.3.1.2 "><p id="p434712455175"><a name="p434712455175"></a><a name="p434712455175"></a>Includes maximum process memory, used process memory, maximum shared memory, and used shared memory.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Detailed diagnosis report

<a name="table23331848193120"></a>
<table><thead align="left"><tr id="row1533312481318"><th class="cellrowborder" valign="top" width="24.93%" id="mcps1.2.3.1.1"><p id="p5333948203119"><a name="p5333948203119"></a><a name="p5333948203119"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.07000000000001%" id="mcps1.2.3.1.2"><p id="p17333144823110"><a name="p17333144823110"></a><a name="p17333144823110"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1533315480312"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p113331448163118"><a name="p113331448163118"></a><a name="p113331448163118"></a>Time Model</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p18455944461"><a name="p18455944461"></a><a name="p18455944461"></a>Evaluates the performance of the current system in the time dimension.</p>
<p id="p33332484313"><a name="p33332484313"></a><a name="p33332484313"></a>The statistics include time consumed by the system in each phase, including the kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, and I/O time.</p>
</td>
</tr>
<tr id="row1233374883113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p10333948163119"><a name="p10333948163119"></a><a name="p10333948163119"></a>SQL Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p367217315715"><a name="p367217315715"></a><a name="p367217315715"></a>Diagnoses SQL statement performance problems.</p>
<p id="p103331848113117"><a name="p103331848113117"></a><a name="p103331848113117"></a>The statistics include normalized SQL performance indicators in multiple dimensions: elapsed time, CPU time, rows returned, tuple reads, executions, physical reads, and logical reads. The indicators can be classified into execution time, number of execution times, row activity, and cache I/O.</p>
</td>
</tr>
<tr id="row1933324873111"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p183331348193119"><a name="p183331348193119"></a><a name="p183331348193119"></a>Wait Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p39281554285"><a name="p39281554285"></a><a name="p39281554285"></a>Diagnoses performance of key system resources and key time in detail.</p>
<p id="p933314823114"><a name="p933314823114"></a><a name="p933314823114"></a>The statistics include the performance of all key events in a period of time, including the number of events and the time consumed.</p>
</td>
</tr>
<tr id="row3334148183116"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p4334204817319"><a name="p4334204817319"></a><a name="p4334204817319"></a>Cache IO Stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p77092138917"><a name="p77092138917"></a><a name="p77092138917"></a>Diagnoses the performance of user tables and indexes.</p>
<p id="p73341848193110"><a name="p73341848193110"></a><a name="p73341848193110"></a>The statistics include read and write operations on all user tables and indexes, and the cache hit ratio.</p>
</td>
</tr>
<tr id="row233424816311"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p133474810318"><a name="p133474810318"></a><a name="p133474810318"></a>Utility status</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p178211436699"><a name="p178211436699"></a><a name="p178211436699"></a>Diagnoses the background task performance.</p>
<p id="p1334134843114"><a name="p1334134843114"></a><a name="p1334134843114"></a>The statistics include the performance of background tasks such as replication.</p>
</td>
</tr>
<tr id="row123341448113113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p11334848143110"><a name="p11334848143110"></a><a name="p11334848143110"></a>Object stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p14405135119915"><a name="p14405135119915"></a><a name="p14405135119915"></a>Diagnoses the performance of database objects.</p>
<p id="p6334174863119"><a name="p6334174863119"></a><a name="p6334174863119"></a>The statistics include user tables, tables on indexes, index scan activities, as well as insert, update, and delete activities, number of valid rows, and table maintenance status.</p>
</td>
</tr>
<tr id="row1427793219359"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p32775326355"><a name="p32775326355"></a><a name="p32775326355"></a>Configuration settings</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p1119216811109"><a name="p1119216811109"></a><a name="p1119216811109"></a>Determines whether the configuration is changed.</p>
<p id="p142774327353"><a name="p142774327353"></a><a name="p142774327353"></a>It is a snapshot that contains all current configuration parameters.</p>
</td>
</tr>
<tr id="row2043833913517"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="p1243943915518"><a name="p1243943915518"></a><a name="p1243943915518"></a>SQL detail</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="p1843917398519"><a name="p1843917398519"></a><a name="p1843917398519"></a>Displays information about unique query text.</p>
</td>
</tr>
</tbody>
</table>

## Enhancements<a name="section9602018103411"></a>

None.

## Constraints<a name="section1956417145819"></a>

-   The WDR snapshot collects performance data of different databases. If there are a large number of databases or tables in the database instance, it takes a long time to create a WDR snapshot.
-   If WDR snapshot is performed when a large number of DDL statements are executed, WDR snapshot may fail.
-   When the database is dropped, WDR snapshot may fail.

## Dependencies<a name="section15876411599"></a>

None.

