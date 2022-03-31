# Overview<a name="EN-US_TOPIC_0289897023"></a>

For database security purposes, openGauss provides three backup and restoration types, multiple backup and restoration solutions, and data reliability assurance mechanisms during backup and restoration.

Backup and restoration can be classified into logical backup and restoration, physical backup and restoration, and flashback.

-   Logical backup and restoration: backs up data by logically exporting data. This method can dump data that is backed up at a certain time point, and restore data only to this backup point. A logical backup does not back up data processed between failure occurrence and the last backup. It applies to scenarios where data rarely changes. Such data damaged due to misoperation can be quickly restored using a logical backup. To restore all the data in a database through logical backup, rebuild a database and import the backup data. Logical backup is not recommended for databases requiring high data availability because it takes a long time for data restoration. Logical backup is a major approach to migrate and transfer data because it can be performed on any platform.
-   Physical backup and restoration: copies physical files in the unit of disk blocks from the primary node to the standby node to back up a database. A database can be restored using backup files, such as data files and archive log files. A physical backup is useful when you need to quickly back up and restore the complete database within a short period of time. Backup and restoration can be implemented at low costs through proper planning.
-   Flashback: This function is used to restore dropped tables from the recycle bin. Like in a Window OS, dropped table information is stored in the recycle bin of databases. The MVCC mechanism is used to restore data to a specified point in time or change sequence number \(CSN\).

    The three data backup and restoration solutions supported by openGauss are as follows. Methods for restoring data in case of an exception differ for different backup and restoration solutions.

    **Table  1**  Comparison of three backup and restoration types

    <a name="table47805644419"></a>
    <table><thead align="left"><tr id="row1778011634414"><th class="cellrowborder" valign="top" width="12.5874825034993%" id="mcps1.2.7.1.1"><p id="p4543144810507"><a name="p4543144810507"></a><a name="p4543144810507"></a>Backup Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="18.646270745850828%" id="mcps1.2.7.1.2"><p id="p85431248115015"><a name="p85431248115015"></a><a name="p85431248115015"></a>Application Scenario</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.568286342731454%" id="mcps1.2.7.1.3"><p id="p14543104885016"><a name="p14543104885016"></a><a name="p14543104885016"></a>Media</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.738052389522096%" id="mcps1.2.7.1.4"><p id="p25431848175010"><a name="p25431848175010"></a><a name="p25431848175010"></a>Tool Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.376924615076984%" id="mcps1.2.7.1.5"><p id="p14543848115016"><a name="p14543848115016"></a><a name="p14543848115016"></a>Recovery Time</p>
    </th>
    <th class="cellrowborder" valign="top" width="35.08298340331933%" id="mcps1.2.7.1.6"><p id="p5543194885017"><a name="p5543194885017"></a><a name="p5543194885017"></a>Advantage and Disadvantage</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row87801664419"><td class="cellrowborder" rowspan="2" valign="top" width="12.5874825034993%" headers="mcps1.2.7.1.1 "><p id="p444519819513"><a name="p444519819513"></a><a name="p444519819513"></a>Logical backup and restoration</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="18.646270745850828%" headers="mcps1.2.7.1.2 "><p id="p4445198155115"><a name="p4445198155115"></a><a name="p4445198155115"></a>Small volume of data needs to be processed.</p>
    <p id="p134452815118"><a name="p134452815118"></a><a name="p134452815118"></a>You can back up a single table, multiple tables, a single database, or all databases. The backup data needs to be restored using gsql or gs_restore. When the data volume is large, the restoration takes a long time.</p>
    </td>
    <td class="cellrowborder" rowspan="6" valign="top" width="8.568286342731454%" headers="mcps1.2.7.1.3 "><p id="p13519154155315"><a name="p13519154155315"></a><a name="p13519154155315"></a>Disk:</p>
    <p id="p175191540534"><a name="p175191540534"></a><a name="p175191540534"></a>SSD</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.738052389522096%" headers="mcps1.2.7.1.4 "><p id="p4242171416513"><a name="p4242171416513"></a><a name="p4242171416513"></a>gs_dump</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.376924615076984%" headers="mcps1.2.7.1.5 "><p id="p224211413513"><a name="p224211413513"></a><a name="p224211413513"></a>It takes a long time to restore data in plain-text format. It takes a moderate time to restore data in archive format.</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.08298340331933%" headers="mcps1.2.7.1.6 "><p id="p22427143514"><a name="p22427143514"></a><a name="p22427143514"></a>This tool is used to export database information. Users can export a database or its objects (such as schemas, tables, and views). The database can be the default <strong id="b1546935845"><a name="b1546935845"></a><a name="b1546935845"></a>postgres</strong> database or a user-specified database. The exported file can be in plain-text format or archive format. Data in plain-text format can be restored only by using gsql, which takes a long time. Data in archive format can be restored only by using gs_restore. The restoration time is shorter than that of the plain-text format.</p>
    </td>
    </tr>
    <tr id="row97805664417"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p152421514195112"><a name="p152421514195112"></a><a name="p152421514195112"></a>gs_dumpall</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p1024291445116"><a name="p1024291445116"></a><a name="p1024291445116"></a>Long data recovery time.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p224201425115"><a name="p224201425115"></a><a name="p224201425115"></a>This tool is used to export all information of the <span id="text85008448278"><a name="text85008448278"></a><a name="text85008448278"></a>openGauss</span> database, including the data of the default <strong id="b165001244152710"><a name="b165001244152710"></a><a name="b165001244152710"></a>postgres</strong> database, data of user-specified databases, and global objects of all <span id="text445811215313"><a name="text445811215313"></a><a name="text445811215313"></a>openGauss</span> databases.</p>
    <p id="p124201415112"><a name="p124201415112"></a><a name="p124201415112"></a>Only data in plain-text format can be exported. The exported data can be restored only by using <strong id="b142811583272"><a name="b142811583272"></a><a name="b142811583272"></a>gsql</strong>, which takes a long time.</p>
    </td>
    </tr>
    <tr id="row10781263441"><td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.7.1.1 "><p id="p1214182115117"><a name="p1214182115117"></a><a name="p1214182115117"></a>Physical backup and restoration</p>
    </td>
    <td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.7.1.2 "><p id="p19141221165111"><a name="p19141221165111"></a><a name="p19141221165111"></a>Huge volume of data needs to be processed. It is mainly used for full backup and restoration as well as the backup of all WAL archive and run logs in the database.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p115692710513"><a name="p115692710513"></a><a name="p115692710513"></a>gs_backup</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="p175672712518"><a name="p175672712518"></a><a name="p175672712518"></a>Small data volume and fast data recovery.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="p19566270517"><a name="p19566270517"></a><a name="p19566270517"></a>The OM tool for exporting database information can be used to export database parameter files and binary files. It helps <span id="text1450811514315"><a name="text1450811514315"></a><a name="text1450811514315"></a>openGauss</span> to back up and restore important data, and display help and version information. During the backup, you can select the type of the backup content. During the restoration, ensure that the backup file exists in the backup directory of each node. During cluster restoration, the cluster information in the static configuration file is used for restoration. It takes a short time to restore only parameter files.</p>
    </td>
    </tr>
    <tr id="row127818664411"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p1156327165118"><a name="p1156327165118"></a><a name="p1156327165118"></a>gs_basebackup</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p656102785112"><a name="p656102785112"></a><a name="p656102785112"></a>During the restoration, you can directly copy and replace the original files, or directly start the database on the backup database. The restoration takes a short time.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p19561527185112"><a name="p19561527185112"></a><a name="p19561527185112"></a>This too is used to fully copy the binary files of the server database. Only the database at a certain time point can be backed up. With PITR, you can restore data to a time point after the full backup time point.</p>
    </td>
    </tr>
    <tr id="row378116610447"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p5561279519"><a name="p5561279519"></a><a name="p5561279519"></a>gs_probackup</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p165682717510"><a name="p165682717510"></a><a name="p165682717510"></a>Data can be directly restored to a backup point and the database can be started on the backup database. The restoration takes a short time.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p1956127115114"><a name="p1956127115114"></a><a name="p1956127115114"></a><strong id="b1258182833310"><a name="b1258182833310"></a><a name="b1258182833310"></a>gs_probackup</strong> is a tool used to manage <span id="text191286893113"><a name="text191286893113"></a><a name="text191286893113"></a>openGauss</span> backup and restoration. It periodically backs up <span id="text16885886315"><a name="text16885886315"></a><a name="text16885886315"></a>openGauss</span> instances. It supports the physical backup of a standalone database or a primary database node in a cluster. It supports the backup of contents in external directories, such as script files, configuration files, log files, and dump files. It supports incremental backup, periodic backup, and remote backup. The time required for incremental backup is shorter than that for full backup. You only need to back up the modified files. Currently, the data directory is backed up by default. If the tablespace is not in the data directory, you need to manually specify the tablespace directory to be backed up. Currently, data can be backed up only on the primary node.</p>
    </td>
    </tr>
    <tr id="row18629729105219"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p11289403528"><a name="p11289403528"></a><a name="p11289403528"></a>Flashback restoration</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p1912814019529"><a name="p1912814019529"></a><a name="p1912814019529"></a>Applicable to:</p>
    <p id="p111281040155215"><a name="p111281040155215"></a><a name="p111281040155215"></a>1. A table is deleted by mistake.</p>
    <p id="p9128184012524"><a name="p9128184012524"></a><a name="p9128184012524"></a>2. Data in the tables needs to be restored to a specified time point or CSN.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p41281540175218"><a name="p41281540175218"></a><a name="p41281540175218"></a>None</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="p1612834011522"><a name="p1612834011522"></a><a name="p1612834011522"></a>You can restore a table to the status at a specified time point or before the table structure is deleted. The restoration takes a short time.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="p1512804015522"><a name="p1512804015522"></a><a name="p1512804015522"></a>Flashback can selectively and efficiently undo the impact of a committed transaction and recover from a human error. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup or PITR. The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the committed data before the database is modified. The restoration time is irrelevant to the database size.</p>
    <p id="p15128740165210"><a name="p15128740165210"></a><a name="p15128740165210"></a>Flashback supports two recovery modes:</p>
    <a name="ul15128740175218"></a><a name="ul15128740175218"></a><ul id="ul15128740175218"><li>Multi-version data restoration based on MVCC: applicable to the query and restoration of data that is deleted, updated, or inserted by mistake. You can configure the retention period of the old version and run the corresponding query or restoration command to query or restore data to a specified time point or CSN.</li><li>Recovery based on the recycle bin (similar to that on Windows OS): This method is applicable to the recovery of tables that are dropped or truncated by mistake. You can configure the recycle bin switch and run the corresponding restoration command to restore the tables that are dropped or truncated by mistake.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

    While backing up and restoring data, take the following aspects into consideration:

    -   Whether the impact of data backup on services is acceptable
    -   Database restoration efficiency

        To minimize the impact of database faults, try to minimize the restoration duration, achieving the highest restoration efficiency.

    -   Data restorability

        Minimize data loss after the database is invalidated.

    -   Database restoration cost

    There are many factors that need to be considered while you select a backup policy on the live network, such as backup objects, data volume, and network configuration.  [Table 2](#en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218)  lists available backup policies and applicable scenarios for each backup policy.

    **Table  2**  Backup policies and scenarios

    <a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218"></a>
    <table><thead align="left"><tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row878975011216"><th class="cellrowborder" valign="top" width="11.29112911291129%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a>Backup Policy</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.21242124212421%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a>Key Performance Factor</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.951595159515952%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a>Typical Data Volume</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.544854485448546%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"></a>Performance Specifications</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row1678918505219"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a>Database instance backup</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"><li><span>Data amount</span></li><li><span>Network configuration</span></li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a>Data volume: PB level</p>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a>Object quantity: about 1 million</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"></a>Backup:</p>
    <a name="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"><li><span>Data transfer rate on each host: 80 Mbit/s (NBU/EISOO+Disk)</span></li><li><span>Disk I/O rate (SSD/HDD): about 90%</span></li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row8790175018215"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a>Table backup</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"><li><span>Schema where the table to be backed up resides</span></li><li>Network configuration (NBU)</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a>Data volume: 10 TB level</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"></a>Backup: depends on query performance rate and I/O rate</p>
    <div class="note" id="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"><a name="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"></a>For multi-table backup, the backup time is calculated as follows:</p>
    <pre class="screen" id="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"><a name="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"></a>Total time = Number of tables x Starting time + Total data volume/Data backup speed</pre>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"></a>In the preceding information:</p>
    <a name="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"><li>The starting time of a disk is about 5s. The starting time of an NBU is longer than that of a disk (depending on the NBU deployment).</li><li>The data backup speed is about 50 MB/s on a single node. (The speed is evaluated based on the backup of a 1 GB table from a physical host to a local disk.)</li></ul>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"></a>The smaller the table is, the lower the backup performance will be.</p>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>


