# Backup and Restoration<a name="EN-US_TOPIC_0242215083"></a>

<!-- TOC -->

- [Overview](#overview)
- [Physical Backup and Restoration](#physical-backup-and-restoration)
- [Logical Backup and Restoration](#logical-backup-and-restoration)
- [Flashback Restoration](#Flashback Restoration)


## Overview

For database security purposes, openGauss provides three backup and restoration types, multiple backup and restoration solutions, and data reliability assurance mechanisms during backup and restoration.

Backup and restoration can be classified into logical backup and restoration, physical backup and restoration, and flashback.

- Logical backup and restoration: backs up data by logically exporting data. This method can dump data that is backed up at a certain time point, and restore data only to this backup point. A logical backup does not back up data processed between failure occurrence and the last backup. It applies to scenarios where data rarely changes. Such data damaged due to misoperation can be quickly restored using a logical backup. To restore all the data in a database through logical backup, rebuild a database and import the backup data. Logical backup is not recommended for databases requiring high data availability because it takes a long time for data restoration. Logical backup is a major approach to migrate and transfer data because it can be performed on any platform.

-  Physical backup and restoration: copies physical file in the unit of disk blocks from the primary node to the standby node to back up a database. A database can be restored using backup files such as data files and archive log files. A physical backup is useful when you need to quickly back up and restore the complete database within a short period of time. Backup and restoration can be implemented at low costs through proper planning.

- Flashback: This function is used to restore dropped tables from the recycle bin. Like in a Window OS, dropped table information is stored in the recycle bin of databases. The MVCC mechanism is used to restore data to a specified point in time or change sequence number \(CSN\).

  The three data backup and restoration solutions supported by openGauss are as follows. Methods for restoring data in case of an exception differ for different backup and restoration solutions.

  **Table  1**  Comparison of three backup and restoration types

  <a name="table182721944194219"></a>

  <table><thead align="left"><tr id="row5273174413421"><th class="cellrowborder" valign="top" width="11.317736452709457%" id="mcps1.2.7.1.1"><p id="p127311442429"><a name="p127311442429"></a><a name="p127311442429"></a>Backup Type</p>
  </th>
  <th class="cellrowborder" valign="top" width="18.95620875824835%" id="mcps1.2.7.1.2"><p id="p15273944124214"><a name="p15273944124214"></a><a name="p15273944124214"></a>Application Scenario</p>
  </th>
  <th class="cellrowborder" valign="top" width="7.638472305538892%" id="mcps1.2.7.1.3"><p id="p1273164420422"><a name="p1273164420422"></a><a name="p1273164420422"></a>Media</p>
  </th>
  <th class="cellrowborder" valign="top" width="10.687862427514498%" id="mcps1.2.7.1.4"><p id="p1927310448424"><a name="p1927310448424"></a><a name="p1927310448424"></a>Tool Name</p>
  </th>
  <th class="cellrowborder" valign="top" width="16.076784643071385%" id="mcps1.2.7.1.5"><p id="p82731644104213"><a name="p82731644104213"></a><a name="p82731644104213"></a>Recovery Time</p>
  </th>
  <th class="cellrowborder" valign="top" width="35.32293541291742%" id="mcps1.2.7.1.6"><p id="p11274244134212"><a name="p11274244134212"></a><a name="p11274244134212"></a>Advantage and Disadvantage</p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="row9274644124210"><td class="cellrowborder" rowspan="2" valign="top" width="11.317736452709457%" headers="mcps1.2.7.1.1 "><p id="p624553011566"><a name="p624553011566"></a><a name="p624553011566"></a>Logical backup and restoration</p>
  </td>
  <td class="cellrowborder" rowspan="2" valign="top" width="18.95620875824835%" headers="mcps1.2.7.1.2 "><p id="p205421250607"><a name="p205421250607"></a><a name="p205421250607"></a>Small volume of data needs to be processed.</p>
  <p id="p454212501404"><a name="p454212501404"></a><a name="p454212501404"></a>You can back up a single table, multiple tables, a single database, or all databases. The backup data needs to be restored using gsql or gs_restore. When the data volume is large, the restoration takes a long time.</p>
  </td>
  <td class="cellrowborder" rowspan="6" valign="top" width="7.638472305538892%" headers="mcps1.2.7.1.3 "><p id="p993343912119"><a name="p993343912119"></a><a name="p993343912119"></a>Disk:</p>
  <p id="p593453917114"><a name="p593453917114"></a><a name="p593453917114"></a>SSD</p>
  <p id="p1324262116403"><a name="p1324262116403"></a><a name="p1324262116403"></a></p>
  </td>
  <td class="cellrowborder" valign="top" width="10.687862427514498%" headers="mcps1.2.7.1.4 "><p id="p20778124119545"><a name="p20778124119545"></a><a name="p20778124119545"></a>gs_dump</p>
  </td>
  <td class="cellrowborder" valign="top" width="16.076784643071385%" headers="mcps1.2.7.1.5 "><p id="p1353016453558"><a name="p1353016453558"></a><a name="p1353016453558"></a>It takes a long time to restore data in plain-text format. It takes a moderate time to restore data in archive format./p>
  </td>
  <td class="cellrowborder" valign="top" width="35.32293541291742%" headers="mcps1.2.7.1.6 "><p id="p9674335420"><a name="p9674335420"></a><a name="p9674335420"></a>This tool is used to export database information. Users can export a database or its objects (such as schemas, tables, and views). The database can be the default <strong id="b64881672652718"><a name="b64881672652718"></a><a name="b64881672652718"></a>postgres</strong> database or a user-specified database. The exported file can be in plain-text format or archive format. Data in plain-text format can be restored only by using gsql, which takes a long time. Data in archive format can be restored only by using gs_restore. The restoration time is shorter than that of the plain-text format.</p>
  </td>
  </tr>
  <tr id="row52741448422"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p8778641135420"><a name="p8778641135420"></a><a name="p8778641135420"></a>gs_dumpall</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p105305457553"><a name="p105305457553"></a><a name="p105305457553"></a>Long data recovery time</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p374692411219"><a name="p374692411219"></a><a name="p374692411219"></a>This tool is used to export all information of the openGauss database, including the data of the default <strong id="b139744453952718"><a name="b139744453952718"></a><a name="b139744453952718"></a>postgres</strong> database, data of user-specified databases, and global objects of all openGauss databases.</p>
  <p id="p174610241526"><a name="p174610241526"></a><a name="p174610241526"></a>Only data in plain-text format can be exported. The exported data can be restored only by using gsql, which takes a long time.</p>
  </td>
  </tr>
  <tr id="row827574454213"><td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.7.1.1 "><p id="p1686222613013"><a name="p1686222613013"></a><a name="p1686222613013"></a>Physical backup and restoration</p>
  </td>
  <td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.7.1.2 "><p id="p2091294755615"><a name="p2091294755615"></a><a name="p2091294755615"></a>Huge volume of data needs to be processed. It is mainly used for full backup and restoration as well as the backup of all WAL archive and run logs in the database.</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p137792041115417"><a name="p137792041115417"></a><a name="p137792041115417"></a>gs_backup</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="p105311745185514"><a name="p105311745185514"></a><a name="p105311745185514"></a>Small data volume and fast data recovery</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="p87466241829"><a name="p87466241829"></a><a name="p87466241829"></a>The OM tool for exporting database information can be used to export database parameter files and binary files. It helps the openGauss to back up and restore important data, and display help and version information. During the backup, you can select the type of the backup content. During the restoration, ensure that the backup file exists in the backup directory of each node. During cluster restoration, the cluster information in the static configuration file is used for restoration. It takes a short time to restore only parameter files.</p>
  </td>
  </tr>
  <tr id="row13276194494218"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p1377994145414"><a name="p1377994145414"></a><a name="p1377994145414"></a>gs_basebackup</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p1653114535511"><a name="p1653114535511"></a><a name="p1653114535511"></a>During the restoration, you can directly copy and replace the original files, or directly start the database on the backup database. The restoration takes a short time.</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p127471724328"><a name="p127471724328"></a><a name="p127471724328"></a>This too is used to fully copy the binary files of the server database. Only the database at a certain time point can be backed up. With PITR, you can restore data to a time point after the full backup time point.</p>
  </td>
  </tr>
  <tr id="row7277204414212"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p1577914110543"><a name="p1577914110543"></a><a name="p1577914110543"></a>gs_probackup</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p125311445195513"><a name="p125311445195513"></a><a name="p125311445195513"></a>Data can be directly restored to a backup point and the database can be started on the backup database. The restoration takes a short time.</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p12747624021"><a name="p12747624021"></a><a name="p12747624021"></a><strong id="b131510755852718"><a name="b131510755852718"></a><a name="b131510755852718"></a>gs_probackup</strong> is a tool used to manage openGauss database backup and restoration. It periodically backs up openGauss instances. It supports the physical backup of a standalone database or a primary database node in a cluster. It supports the backup of contents in external directories, such as script files, configuration files, log files, and dump files. It supports incremental backup, periodic backup, and remote backup. The time required for incremental backup is shorter than that for full backup. You only need to back up the modified files. Currently, the data directory is backed up by default. If the tablespace is not in the data directory, you need to manually specify the tablespace directory to be backed up. Currently, data can be backed up only on the primary node.</p>
  </td>
  </tr>
  <tr id="row1924214217407"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p1342320295404"><a name="p1342320295404"></a><a name="p1342320295404"></a>Flashback</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p18944161524513"><a name="p18944161524513"></a><a name="p18944161524513"></a>Applicable to:</p>
  <p id="p58718375443"><a name="p58718375443"></a><a name="p58718375443"></a>1) A table is deleted by mistake.</p>
  <p id="p138715371447"><a name="p138715371447"></a><a name="p138715371447"></a>2) Data in the tables needs to be restored to a specified time point or CSN.</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p5242152134010"><a name="p5242152134010"></a><a name="p5242152134010"></a>None</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="p8243152114409"><a name="p8243152114409"></a><a name="p8243152114409"></a>You can restore a table to the status at a specified time point or before the table structure is deleted.The restoration takes a short time.</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="p1124322124010"><a name="p1124322124010"></a><a name="p1124322124010"></a>Flashback can selectively and efficiently undo the impact of a committed transaction and recover from a human error. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup or PITR. The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the committed data before the database is modified. The restoration time is irrelevant to the database size.</p>
  <p id="p022514511611"><a name="p022514511611"></a><a name="p022514511611"></a>Flashback supports two recovery modes:</p>
  <a name="ul13189750102419"></a><a name="ul13189750102419"></a><ul id="ul13189750102419"><li>Multi-version data restoration based on MVCC: applicable to the query and restoration of data that is deleted, updated, or inserted by mistake. You can configure the retention period of the old version and run the corresponding query or restoration command to query or restore data to a specified time point or CSN.</li><li>Recovery based on the recycle bin (similar to that on Windows OS): This method is applicable to the recovery of tables that are dropped or truncated by mistake. You can configure the recycle bin switch and run the corresponding restoration command to restore the tables that are dropped or truncated by mistake.</li></ul>
  </td>
  </tr>
  </tbody>
  </table>


  While backing up and restoring data, take the following aspects into consideration:

  - Whether the impact of data backup on services is acceptable

  - Database restoration efficiency

    To minimize the impact of database faults, try to minimize the restoration duration, achieving the highest restoration efficiency.

  - Data restorability

    Minimize data loss after the database is invalidated.

  - Database restoration cost

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


## Physical Backup and Restoration


### gs\_basebackup

#### Background

After openGauss is deployed, problems and exceptions may occur during database running.  **gs\_basebackup**, provided by openGauss, is used to perform basic physical backup.  **gs\_basebackup**  copies the binary files of the database on the server using a replication protocol. To remotely execute  **gs\_basebackup**, you need to use the system administrator account.  **gs\_basebackup**  supports hot backup and compressed backup.

![](public_sys-resources/icon-note.gif) **NOTE:** 

-   **gs\_basebackup**  supports only full backup.

-   **gs\_basebackup**  supports hot backup and compressed backup.

-   **gs\_basebackup**  cannot back up tablespaces containing absolute paths on the same server. This is because the absolute path is unique on the same machine, and brings about conflicts. However, it can back up tablespaces containing absolute paths on different machines.

-   If the functions of incremental checkpoint and dual-write are enabled,  **gs\_basebackup**  also backs up dual-write files.

-   If the  **pg\_xlog**  directory is a soft link, no soft link is created during backup. Data is directly backed up to the  **pg\_xlog**  directory in the destination path.

-   If the backup permission is revoked during the backup, the backup may fail or the backup data may be unavailable.

-   openGauss does not support version upgrade.

#### Prerequisites<a name="en-us_topic_0237152406_en-us_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   The openGauss database can be connected.

-   User permissions are not revoked during the backup.

-   In the  **pg\_hba.conf**  file, the replication connection is allowed and the connection is established by a system administrator.

-   If the Xlog transmission mode is  **stream**, the number of  **max\_wal\_senders**  must be configured to at least one.

-   If the Xlog transmission mode is  **fetch**, the  **wal\_keep\_segments**  parameter must be set to a large value so that logs are not removed before the backup ends.

-   During the restoration, backup files exist in the backup directory on all the nodes. If backup files are lost on any node, copy them to it from another node.


#### Syntax<a name="en-us_topic_0237152406_en-us_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

- Display help information.

  ```
  gs_basebackup -? | --help
  ```

- Display version information.

  ```
  gs_basebackup -V | --version
  ```


#### Parameter Description<a name="en-us_topic_0237152406_en-us_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

The  **gs\_basebackup**  tool can use the following types of parameters:

- -D directory

  Directory for storing backup files. This parameter is mandatory.


- Common parameters

  - -c, --checkpoint=fast|spread

    Sets the checkpoint mode to  **fast**  or  **spread**  \(default\).

  - -l, --label=LABEL

    Adds tags for the backup.

  - -P, --progress

    Enables the progress report.

  - -v, --verbose

    Enables the verbose mode.

  - -V, --version

    Prints the version and exits.

  - -?, --help

    Displays  **gs\_basebackup**  command parameters.

  - -T, –tablespace-mapping=olddir=newdir

    During the backup, the tablespace in the  **olddir**  directory is relocated to the  **newdir**  directory. For this to take effect,  **olddir**  must exactly match the path where the tablespace is located \(but it is not an error if the backup does not contain the tablespaces in  **olddir**\).  **olddir**  and  **newdir**  must be absolute paths. If a path happens to contain an equal sign \(=\), you can escape it with a backslash \(\\\). This option can be used multiple times for multiple tablespaces.

  - -F, –format=plain|tar

    Sets the output format to  **plain**  \(default\) or  **tar**. If this parameter is not set, the default value  **–format=plain**  is used. The plain format writes the output as a flat file, using the same layout as the current data directory and tablespace. When the cluster has no extra tablespace, the entire database is placed in the target directory. If the cluster contains additional tablespaces, the primary data directory will be placed in the target directory, but all other tablespaces will be placed in the same absolute path on the server. The tar mode writes the output as a tar file in the target directory. The primary data directory is written to a file named  **base.tar**, and other tablespaces are named after their OIDs. The generated .tar package must be decompressed using the  **gs\_tar**  command.

  - -X, –xlog-method=fetch|stream

    Sets the Xlog transmission mode. If this parameter is not set, the default value  **–xlog-method=stream**  is used. The required write-ahead log files \(WALs\) are included in the backup. This includes all WALs generated during the backup. In fetch mode, WAL files are collected at the end of the backup. Therefore, the  **wal\_keep\_segments**  parameter must be set to a large value so that logs are not removed before the backup ends. If it has been rotated when the log is to be transmitted, the backup fails and is unavailable. In stream mode, WALs are streamed when a backup is created. This will open a second connection to the server and start streaming WALs while the backup is running. Therefore, it will use up to two connections configured by the  **max\_wal\_senders**  parameter. As long as the client can receive WALs, no additional WALs need to be stored on the host.

  - -x, –xlog

    Equivalent to using  **-X**  with the fetch method.

  - -Z –compress=level

    Enables gzip compression for the output of the tar file and sets the compression level \(0 to 9, where 0 indicates no compression and 9 indicates the best compression\). The compression is available only when the tar format is used. The suffix .gz is automatically added to the end of all .tar file names.

  - -z

    Enables gzip compression for tar file output and uses the default compression level. The compression is available only when the tar format is used. The suffix .gz is automatically added to the end of all .tar file names.
    
  - -t, –rw-timeout
  
    Sets the checkpoint time limit during backup. The default value is 120s. If the full checkpoint of the database is time-consuming, you can increase the value of  **rw-timeout**.


- Connection parameters

  - -h, --host=HOSTNAME

    Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket.

  - -p, --port=PORT

    Specifies the port number of the database server.

    You can modify the default port number using this parameter.

  - -U, --username=USERNAME

    Specifies the user that connects to the database.

  - -s, --status-interval=INTERVAL

    Specifies the time for sending status packets to the server, in seconds.

  - -w,--no-password

    Never issues a password prompt.

  - -W, --password

    Issues a password prompt when the  **-U**  parameter is used to connect to a local or remote database.

#### Example<a name="en-us_topic_0249632270_en-us_topic_0237152406_en-us_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

```
gs_basebackup -D /home/test/trunk/install/data/backup -h 127.0.0.1 -p 21233
INFO:  The starting position of the xlog copy of the full build is: 0/1B800000. The slot minimum LSN is: 0/1B800000.
```

#### Restoring Data from Backup Files<a name="en-us_topic_0249632270_section161121221193110"></a>

If a database is faulty, restore it from backup files.  **gs\_basebackup**  backs up the database in binary mode. Therefore, you can directly copy and replace the original files or start the database on the backup database.

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   If the current database instance is running, a port conflict may occur when you start the database from the backup file. In this case, you need to modify the port parameter in the configuration file or specify a port when starting the database.  
-   If the current backup file is a primary/standby database, you may need to modify the replication connections between the master and slave databases, such as,  **replconninfo1**  and  **replconninfo2**  in the  **postgresql.conf**  file.  
-   If the data_directory parameter in the postgresql.conf configuration file is enabled and configurd and the backup directory is used to start the database, the database fails to be started because the value of data_directory isdifferent from the backup directory. You can change the value of data_directory to a new data directory or comment out this parameter.

To restore the original database, perform the following steps:

1.  Stop the database server. For details, see  _Administrator Guide_.
2.  Copy the original database and all tablespaces to another location for future use.
3.  Delete all or part of the files from the original database.
4.  Use the database system user rights to restore the required database files from the backup.
5.  If a link file exists in the database, modify the link file so that it can be linked to the correct file.
6.  Restart the database server and check the database content to ensure that the database is restored to the required status.

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   Incremental restoration from backup files is not supported.   
-   After the restoration, check that the link file in the database is linked to the correct file.  


### PITR Recovery

#### Background<a name="section1093619499159"></a>

When a database breaks down or needs to be rolled back to a previous state, the point-in-time recovery \(PITR\) function of openGauss can be used to restore the database to any point in time after the backup and archive data is generated.

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   PITR can only be restored to a point in time after the physical backup data is generated.  
-   Only the primary node can be restored using PITR. The standby node needs to be fully built to synchronize data with the primary node.  

#### Prerequisites<a name="section5133181313201"></a>

-   Full data files have been physically backed up.
-   WAL log files have been archived.

#### PITR Recovery Process<a name="section162231757172114"></a>

1.  Replace the target database directory with the physical backup files.
2.  Delete all files in the database directory  **pg\_xlog/**.
3.  Copy the archived WAL log file to the  **pg\_xlog**  file. \(Or you can configure  **restore\_command**  in the  **recovery.conf**  file to skip this step.\)
4.  Create the recovery command file  **recovery.conf**  in the database directory and specify the database recovery degree.
5.  Start the database.
6.  Connect to the database and check whether the database is recovered to the expected status.
7.  If the expected status is reached, run the  **pg\_xlog\_replay\_resume\(\)**  command so that the primary node can provide services externally.

#### Configuring the recovery.conf File<a name="section1847655332317"></a>

**Archive Recovery Configuration**

-   restore\_command = string

The  **shell**  command is used to obtain the archived WAL files among the WAL file series. Any %f in the string is replaced by the name of the file to retrieve from the archive, and any %p is replaced by the path name to copy it to on the server. Any %r is replaced by the name of the file containing the last valid restart point.

For example:

```
restore_command = 'cp /mnt/server/archivedir/%f %p'
```

-   archive\_cleanup\_command = string

This option parameter declares a  **shell**  command that is executed each time the system is restarted.  **archive\_cleanup\_command**  provides a mechanism for deleting unnecessary archived WAL files from the standby database. Any %r is replaced by the name of the file containing the last valid restart point. That is the earliest file that must be kept to allow recovery to be restartable, so all files older than %r can be safely removed.

For example:

```
archive_cleanup_command = 'pg_archivecleanup /mnt/server/archivedir %r'
```

If multiple standby servers need to be recovered from the same archive path, ensure that WAL files are not deleted from any standby server before the recovery.

-   recovery\_end\_command = string

This parameter is optional and is used to declare a  **shell**  command that is executed only when the recovery is complete.  **recovery\_end\_command**  provides a cleanup mechanism for future replication and recovery.

**Recovery Object Configuration**

-   recovery\_target\_name = string

This parameter declares that the name is recovered to a recovery point created using pg\_create\_restore\_point\(\).

For example:

```
recovery_target_name = 'restore_point_1'
```

-   recovery\_target\_time = timestamp

This parameter declares that the name is recovered to a specified timestamp.

For example:

```
recovery_target_time = '2020-01-01 12:00:00'
```

-   recovery\_target\_xid = string

This parameter declares that the name is recovered to a transaction ID.

For example:

```
recovery_target_xid = '3000'
```

-   recovery\_target\_lsn = string

This parameter declares that the name is recovered to the LSN specified by log.

For example:

```
recovery_target_lsn = '0/0FFFFFF'
```

-   recovery\_target\_inclusive = boolean

This parameter declares whether to stop the recovery after the recovery target is specified \(**true**\) or before the recovery target is specified \(**false**\). This declaration supports only the recovery targets  **recovery\_target\_time**,  **recovery\_target\_xid**, and  **recovery\_target\_lsn**.

For example:

```
recovery_target_inclusive = true
```

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   Only one of the four configuration items  **recovery\_target\_name**,  **recovery\_target\_time**,  **recovery\_target\_xid**, and  **recovery\_target\_lsn**  can be used at a time.  
-   If no recovery targets are configured or the configured target does not exist, data is recovered to the latest WAL log point by default.  

### gs\_probackup

#### Background<a name="en-us_topic_0289899221_en-us_topic_0287276008_section779474172017"></a>

**gs\_probackup**  is a tool used to manage openGauss database backup and restoration. It periodically backs up the openGauss instances so that the server can be restored when the database is faulty.

-   It supports the physical backup of a standalone database, a primary node, or a standby node of the primary node database.
-   It supports the backup of contents in external directories, such as script files, configuration files, log files, and dump files.
-   It supports incremental backup, periodic backup, and remote backup.
-   It supports settings on the backup retention policy.

#### Prerequisites<a name="en-us_topic_0289899221_en-us_topic_0287276008_section95951827112520"></a>

-   The openGauss database can be connected.
-   To use PTRACK incremental backup, manually add  **enable\_cbm\_tracking = on**  to  **postgresql.conf**.
-   To prevent Xlogs from being cleared before the transmission is complete, increase the value of  **wal\_keep\_segments**  in the  **postgresql.conf**  file.

#### Important Notes<a name="en-us_topic_0289899221_en-us_topic_0287276008_section6439171332614"></a>

-   The backup must be performed by the user who runs the database server.
-   The major version number of the database server to be backed up must be the same as that of the database server to be restored.
-   To back up a database in remote mode using SSH, install the database of the same major version on the local and remote hosts, and run the  **ssh-copy-id remote\_user@remote\_host**  command to set an SSH connection without a password between the local host backup user and the remote host database user.
-   In remote mode, only the subcommands  **add-instance**,  **backup**, and  **restore**  can be executed.
-   Before running the  **restore**  subcommand, stop the gaussdb process.
-   If a user-defined tablespace exists, add the  **--external-dirs**  parameter when backing up the tablespace. Otherwise, the tablespace will not be backed up.
-   If a large amount of data needs to be backed up, adjust the values of  **session\_timeout**  and  **wal\_sender\_timeout**  in the  **postgresql.conf**  file to prevent backup timeout. In addition, adjust the value of  **--rw-timeout**  in the backup command line parameters.
-   When using the  **-T**  option to redirect the external directory in the backup to a new directory during restoration, specify the  **--external-mapping**  parameter.
-   After an incremental backup is restored, the created logical replication slot is unavailable and needs to be deleted and recreated.
-   When remote backup is used, ensure that the clock of the remote server is synchronized with that of the backup server. Otherwise,  **gaussdb**  may fail to be started when  **--recovery-target-time**  is used for restoration.
-   When remote backup is valid \(**remote-proto=ssh**\), ensure that  **-h**  and  **--remote-host **specify the same server. When remote backup is invalid, if the  **-h**  option is specified, ensure that  **-h**  specifies the local address or local host name.
-   Currently, logical replication slots cannot be backed up.

#### Command Description<a name="en-us_topic_0289899221_en-us_topic_0287276008_section86861610172816"></a>

- Print the  **gs\_probackup**  version.

  ```
  gs_probackup -V|--version
  gs_probackup version
  ```

- Display brief information about the  **gs\_probackup**  command. Alternatively, display details about parameters of a specified subcommand of  **gs\_probackup**.

  ```
  gs_probackup -?|--help
  gs_probackup help [command]
  ```

- Initialize the backup directory in  **backup-path**. The backup directory stores the contents that have been backed up. If the  **backup-path**  backup path exists, it must be empty.

  ```
  gs_probackup init -B backup-path [--help]
  ```

- Initialize a new backup instance in the backup directory of  **backup-path**  and generate the  **pg\_probackup.conf**  configuration file, which saves the  **gs\_probackup **settings of the specified data directory  **pgdata-path**.

  ```
  gs_probackup add-instance -B backup-path -D pgdata-path --instance=instance_name
  [-E external-directories-paths]
  [remote_options]
  [--help]
  ```

- Delete the backup content related to the specified instance from the  **backup-path**  directory.

  ```
  gs_probackup del-instance -B backup-path --instance=instance_name
  [--help]
  ```

- Add the specified connection, compression, and log-related settings to the  **pg\_probackup.conf**  configuration file or modify the existing settings. You are not advised to manually edit the  **pg\_probackup.conf**  configuration file.

  ```
  gs_probackup set-config -B backup-path --instance=instance_name
  [-D pgdata-path] [-E external-directories-paths] [--archive-timeout=timeout]
  [--retention-redundancy=retention-redundancy] [--retention-window=retention-window] [--wal-depth=wal-depth]
  [--compress-algorithm=compress-algorithm] [--compress-level=compress-level]
  [-d dbname] [-h hostname] [-p port] [-U username]
  [logging_options] [remote_options]
  [--help]
  ```

- Add the backup-related settings to the  **backup.control**  configuration file or modify the settings.

  ```
  gs_probackup set-backup -B backup-path --instance=instance_name -i backup-id
  [--note=text] [pinning_options]
  [--help]
  ```

- Display the content of the  **pg\_probackup.conf**  configuration file in the backup directory. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

  ```
  gs_probackup show-config -B backup-path --instance=instance_name
  [--format=plain|json]
  [--help]
  ```

- Display the contents of the backup directory. If  **instance\_name**  and  **backup\_id**  are specified, detailed information about the backup is displayed. You can specify  **--format=json**  to display the information in JSON format. By default, the plain text format is used.

  ```
  gs_probackup show -B backup-path
  [--instance=instance_name [-i backup-id]] [--archive] [--format=plain|json]
  [--help]
  ```

- Create a backup for a specified database instance.

  ```
  gs_probackup backup -B backup-path --instance=instance_name -b backup-mode
  [-D pgdata-path] [-C] [-S slot-name] [--temp-slot] [--backup-pg-log] [-j threads_num] [--progress]
  [--no-validate] [--skip-block-validation] [-E external-directories-paths] [--no-sync] [--note=text]
  [--archive-timeout=timeout] [-t rwtimeout]
  [logging_options] [retention_options] [compression_options]
  [connection_options] [remote_options] [pinning_options]
  [--help]
  ```

- Restore a specified instance from the backup copy in the  **backup-path**  directory. If an instance to be restored is specified,  **gs\_probackup**  will look for its latest backup and restore it to the specified recovery target. Otherwise, the latest backup of any instance is used.

  ```
  gs_probackup restore -B backup-path --instance=instance_name
  [-D pgdata-path] [-i backup_id] [-j threads_num] [--progress] [--force] [--no-sync] [--no-validate] [--skip-block-validation]
  [--external-mapping=OLDDIR=NEWDIR] [-T OLDDIR=NEWDIR] [--skip-external-dirs] [-I incremental_mode]
  [recovery_options] [remote_options] [logging_options]
  [--help]
  ```

- Merge all incremental backups between the specified incremental backup and its parent full backup into the parent full backup. The parent full backup will receive all merged data, while the merged incremental backup will be deleted as redundancy.

  ```
  gs_probackup merge -B backup-path --instance=instance_name -i backup_id
  [-j threads_num] [--progress] [logging_options]
  [--help]
  ```

- Delete a specified backup or delete backups that do not meet the current retention policy.

  ```
  gs_probackup delete -B backup-path --instance=instance_name
  [-i backup-id | --delete-expired | --merge-expired | --status=backup_status]
  [--delete-wal] [-j threads_num] [--progress]
  [--retention-redundancy=retention-redundancy] [--retention-window=retention-window]
  [--wal-depth=wal-depth] [--dry-run]
  [logging_options]
  [--help]
  ```

- Verify that all files required for restoring the database exist and are not damaged. If  **instance\_name **is not specified,  **gs\_probackup **verifies all available backups in the backup directory. If  **instance\_name **is specified and no additional options are specified,  **gs\_probackup **verifies all available backups for this backup instance. If both  **instance\_name **and  **backup-id **or recovery objective-related options are specified,  **gs\_probackup **checks whether these options can be used to restore the database.

  ```
  gs_probackup validate -B backup-path
  [--instance=instance_name] [-i backup-id]
  [-j threads_num] [--progress] [--skip-block-validation]
  [--recovery-target-time=time | --recovery-target-xid=xid | --recovery-target-lsn=lsn | --recovery-target-name=target-name]
  [--recovery-target-inclusive=boolean]
  [logging_options]
  [--help] 
  ```


#### Parameter Description<a name="en-us_topic_0289899221_en-us_topic_0287276008_section520716591338"></a>

**Common parameters**

- command

  Specifies subcommands except  **version**  and  **help**:  **init**,  **add-instance**,  **del-instance**,  **set-config**,  **set-backup**,  **show-config**,  **show**,  **backup**,  **restore**,  **merge**,  **delete**, and  **validate**.

- -?, --help

  Displays help information about the command line parameters of  **gs\_probackup**  and exits.

  Only  **--help**  can be used in subcommands;  **-?**  is forbidden.

- -V, --version

  Prints the  **gs\_probackup**  version and exits.

- -B  _backup-path_, --backup-path=_backup-path_

  Backup path.

  System environment variable:  _$BACKUP\_PATH_

- -D  _pgdata-path_, --pgdata=_pgdata-path_

  Path of the data directory.

  System environment variable:  _$PGDATA_

- --instance=_instance\_name_

  Instance name.

- -i  _backup-id_, --backup-id=_backup-id_

  Unique identifier of a backup.

- --format=_format_

  Specifies format of the backup information to be displayed. The plain and JSON formats are supported.

  Default value:  **plain**

- --status=_backup\_status_

  Deletes all backups in a specified state. The states are as follows:

  -   **OK**: Backup is complete and valid.
  -   **DONE**: Backup has been completed but not verified.
  -   **RUNNING**: Backup is in progress.
  -   **MERGING**: Backups are being merged.
  -   **DELETING**: Backup is being deleted.
  -   **CORRUPT**: Some backup files are damaged.
  -   **ERROR**: Backup fails due to an unexpected error.
  -   **ORPHAN**: Backup is invalid because one of its parent backups is corrupted or lost.

- -j  _threads\_num_, --threads=_threads\_num_

  Sets the number of concurrent threads for the backup, restoration, and combination processes.

- --archive

  Displays WAL archiving information.

- --progress

  Displays progress.

- --note=_text_

  Adds a note to the backup.


**Backup-related parameters**

- -b  _backup-mode_, --backup-mode=_backup-mode_

  Specifies the backup mode. The value can be  **FULL**  or  **PTRACK**.

  **FULL**: creates a full backup. The full backup contains all data files.

  **PTRACK**: creates a PTRACK incremental backup.

- -C, --smooth-checkpoint

  Expands checkpoints within a period of time. By default,  **gs\_probackup**  attempts to complete checkpoints as soon as possible.

- -S  _slot-name_, --slot=_slot-name_

  Specifies the replication slot for WAL stream processing.

- --temp-slot

  Creates a temporary physical replication slot for WAL stream processing in the backup instance to ensure that all required WAL segments are still available during the backup.

  The default slot name is  **pg\_probackup\_slot**, which can be changed using the  **--slot/-S**  option.

- --backup-pg-log

  Includes the log directory in the backup. This directory typically contains log messages. By default, the log directory is not included. If the default log path is changed, you can use the  **-E**  parameter to back up log files. The following describes how to use the  **-E**  parameter.

- -E  _external-directories-paths_, --external-dirs=_external-directories-paths_

  Includes the specified directory in the backup. This option is useful for backing up scripts in external data directories, sql dumps, and configuration files. To back up multiple external directories, use colons \(:\) to separate their paths in Unix.

  Example: -E /tmp/dir1:/tmp/dir2

- --skip-block-validation

  Disables block-level verification to speed up backup.

- --no-validate

  Skips the automatic verification when the backup is complete.

- --no-sync

  Disables backup file synchronization to the disk.

- --archive-timeout=_timeout_

  Specifies timeout interval for streaming processing, in seconds.

  Default value:  **300**

- -t rwtimeout

  Specifies timeout interval for a connection, in seconds.

  Default value:  **120**


**Restoration-related parameters**

- -I, --incremental-mode=none|checksum|lsn

  Reuses the valid pages available in PGDATA if they are not modified.

  Default value:  **none**

- --external-mapping=_OLDDIR=NEWDIR_

  During restoration, the external directory contained in the backup is moved from  **OLDDIR **to  **NEWDIR**.  **OLDDIR**  and  **NEWDIR**  must be absolute paths. If the path contains an equal sign \(=\), use a backslash \(\\\) to escape. This option can be specified for multiple directories.

- -T  _OLDDIR=NEWDIR_, --tablespace-mapping=_OLDDIR=NEWDIR_

  Relocates the tablespace from the  **OLDDIR**  directory to the  **NEWDIR**  directory during the restoration.  **OLDDIR**  and  **NEWDIR**  must be absolute paths. If the path contains an equal sign \(=\), use a backslash \(\\\) to escape. This parameter can be specified multiple times for multiple tablespaces. This parameter must be used together with  **--external-mapping**.

- --skip-external-dirs

  Skips the external directories in the backup that are specified using the  **--external-dirs**  option. The contents of these directories will not be restored.

- --skip-block-validation

  Skips block-level verification to speed up verification. During the automatic verification before the restoration, only file-level verification is performed.

- --no-validate

  Skips the backup verification.

- --force

  Specifies the invalid state that allows ignoring backup. This flag can be used if data needs to be restored from a damaged or invalid backup. Exercise caution when using it.


**Recovery objective-related parameters \(recovery\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Currently, continuous WAL archiving PITR cannot be configured. Therefore, parameter usage is restricted as follows:
>To use continuously archived WAL logs for PITR, perform the following steps:
>
>1.  Replace the target database directory with the physical backup files.
>2.  Delete all files in the database directory  **pg\_xlog/**.
>3.  Copy the archived WAL log file to the  **pg\_xlog**  file. \(Or you can configure  **restore\_command**  in the  **recovery.conf**  file to skip this step.\)
>4.  Create the recovery command file  **recovery.conf**  in the database directory and specify the database recovery degree.
>5.  Start the database.
>6.  Connect to the database and check whether the database is recovered to the expected status. If the expected status is reached, run the  **pg\_xlog\_replay\_resume\(\)**  command so that the primary node can provide services externally.

- --recovery-target-lsn=_lsn_

  Specifies LSN to be restored. Currently, only the backup stop LSN can be specified.

- --recovery-target-name=_target-name_

  Specifies named savepoint to which data is restored. You can obtain the savepoint by viewing the recovery-name column in the backup.

- --recovery-target-time=_time_

  Specifies time to which data is restored. Currently, only recovery-time can be specified.

- --recovery-target-xid=_xid_

  Specifies transaction ID to which data is restored. Currently, only recovery-xid can be specified.

- --recovery-target-inclusive=_boolean_

  When this parameter is set to  **true**, the recovery target will include the specified content.

  When this parameter is set to  **false**, the recovery target will not include the specified content.

  This parameter must be used together with  **--recovery-target-name**,  **--recovery-target-time**,  **--recovery-target-lsn**, or  **--recovery-target-xid**.


**Retention-related parameters \(retention\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  and  **delete**  commands.

- --retention-redundancy=_retention-redundancy_

  Number of full backups retained in the data directory. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

  Default value:  **0**

- --retention-window=_retention-window_

  Specifies the retention period. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

  Default value:  **0**

- --wal-depth=_wal-depth_

  Latest number of valid backups that must be retained on each timeline to perform the PITR capability. The value must be a positive integer. The value  **0**  indicates that the setting is disabled.

  Default value:  **0**

- --delete-wal

  Deletes unnecessary WAL files from any existing backup.

- --delete-expired

  Deletes the backups that do not comply with the retention policy defined in the  **pg\_probackup.conf**  configuration file.

- --merge-expired

  Merges the oldest incremental backup that meets the retention policy requirements with its expired parent backup.

- --dry-run

  Displays the status of all available backups. Expired backups will not be deleted or merged.


**Fixed backup-related parameters \(pinning\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>To exclude certain backups from the established retention policy, you can use the following parameters with the  **backup**  and  **set-backup**  commands.

- --ttl=_interval_

  Specifies a fixed amount of time to back up data from the restoration time. The value must be a positive integer. The value  **0**  indicates that the backup is canceled.

  Supported unit: ms, s, min, h, d \(default value:  **s**\)

  For example,  **--ttl=30d**.

- --expire-time=_time_

  Specifies the timestamp when the backup is invalid. The time stamp must comply with the ISO-8601 standard.

  For example,  **--expire-time='2020-01-01 00:00:00+03'**.


**Log-related parameters \(logging\_options\)**

Log levels:  **verbose**,  **log**,  **info**,  **warning**,  **error**, and  **off**.

- --log-level-console=_log-level-console_

  Sets the level of logs to be sent to the console. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log recording function of the console is disabled.

  Default value:  **info**

- --log-level-file=_log-level-file_

  Sets the level of logs to be sent to the log file. Each level contains all the levels following it. A higher level indicates fewer messages sent. If this parameter is set to  **off**, the log file recording function is disabled.

  Default value:  **off**

- --log-filename=_log-filename_

  Specifies the name of the log file to be created. The file name can use the strftime mode. Therefore,  **%-escapes**  can be used to specify the file name that changes with time.

  For example, if the  **pg\_probackup-%u.log**  mode is specified, pg\_probackup generates a log file each day of the week, with  **%u**  replaced by the corresponding decimal number, that is,  **pg\_probackup-1.log**  indicates Monday.  **pg\_probackup-2.log**  indicates Tuesday, and so on.

  This parameter is valid if the  **--log-level-file**  parameter is specified to enable log file recording.

  Default value:  **"pg\_probackup.log"**

- --error-log-filename=_error-log-filename_

  Specifies the name of the log file that is used only for error logs. The specifying method is the same as that of the  **--log-filename**  parameter.

  It is used for troubleshooting and monitoring.

- --log-directory=_log-directory_

  Specifies the directory where log files are created. The value must be an absolute path. This directory is created when the first log is written.

  Default value:  **$BACKUP\_PATH/log**

- --log-rotation-size=_log-rotation-size_

  Specifies the maximum size of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The value  **0**  indicates that the file size-based loop is disabled.

  The unit can be KB, MB, GB, or TB. The default unit is  **KB**.

  Default value:  **0**

- --log-rotation-age=_log-rotation-age_

  Maximum life cycle of a log file. If the maximum size is reached, the log file will be circulated after the  **gs\_probackup**  command is executed. The  **help**  and  **version**  commands will not lead to a log file circulation. The  **$BACKUP\_PATH/log/log\_rotation**  directory saves the time of the last created log file. The value  **0**  indicates that the time-based loop is disabled.

  Supported unit: ms, s, min, h, d \(default value:  **min**\)

  Default value:  **0**


**Connection-related parameters \(connection\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

- -d  _dbname_, --pgdatabase=_dbname_

  Specifies the name of the database to connect to. This connection is only used to manage the backup process. Therefore, you can connect to any existing database. If this parameter is not specified in the command line, the  _PGDATABASE_  environment variable, or the  **pg\_probackup.conf**  configuration file,  **gs\_probackup**  attempts to obtain the value from the  _PGUSER_  environment variable. If the  _PGUSER_  variable is not set, the value is obtained from the current user name.

  System environment variable:  _$PGDATABASE_

- -h  _hostname_, --pghost=_hostname_

  Specifies the host name of the system on which the server is running. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket.

  System environment variable:  _$PGHOST_

  Default value:  **local socket**

- -p  _port_, --pgport=_p__ort_

  Specifies the TCP port or local Unix domain socket file name extension on which the server is listening for connections.

  System environment variable:  _$PGPORT_

  Default value:  **5432**

- -U  _username_, --pguser=_username_

  Specifies the username of the host to be connected.

  System environment variable:  _$PGUSER_

- -w, --no-password

  Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and the scripts that require no user password.

- -W  _password_, --password=_password_

  User password for database connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  parameter. If the  **-W**  parameter is not provided and you are not a system administrator, the system will ask you to enter a password.


**Compression-related parameters \(compression\_options\)**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The following parameters can be used together with the  **backup**  command.

- --compress-algorithm=_compress-algorithm_

  Specifies the algorithm used to compress data file.

  The value can be  **zlib**,  **pglz**, or  **none**. If  **zlib**  or  **pglz**  is set, compression is enabled. By default, the compression function is disabled.

  Default value:  **none**

- --compress-level=_compress-level_

  Specifies the compression level. Value range: 0–9

  -   **0**  indicates no compression.
  -   **1**  indicates that the compression ratio is the lowest and processing speed the fastest.
  -   **9**  indicates that the compression ratio is the highest and processing speed the slowest.
  -   This parameter can be used together with  **--compress-algorithm**.

  Default value:  **1**

- --compress

  Compresses with  **--compress-algorithm=zlib**  and  **--compress-level=1**.


**Remote mode-related parameters \(remote\_options\)**

>![](/public_sys-resources/icon-note.gif) **NOTE:** 
>The following are parameters that remotely run  **gs\_probackup**  through SSH, and can be used together with the  **add-instance**,  **set-config**,  **backup**, and  **restore**  commands.

- --remote-proto=_protocol_

  Specifies the protocol used for remote operations. Currently, only the SSH protocol is supported. Valid value:

  **ssh**: enables the remote backup mode through SSH. This is the default.

  **none**: The remote mode is disabled explicitly.

  If  **--remote-host**  is specified, this parameter can be omitted.

- --remote-host=_destination_

  Specifies the IP address or host name of the remote host to be connected.

- --remote-port=_port_

  Specifies the port number of the remote host to be connected.

  Default value:  **22**

- --remote-user=_username_

  Specifies the remote host user for SSH connection. If this parameter is not specified, the user who initiates the SSH connection is used.

  Default value: the current user.

- --remote-path=_path_

  Specifies the installation directory of  **gs\_probackup**  in the remote system.

  Default value: current path

- --remote-libpath=*libpath*

  Specifies the lib directory where  **gs_probackup**  is installed in the remote system.

- --ssh-options=_ssh\_options_

  Specifies the character string of the SSH command line parameter.

  Example: --ssh-options='-c cipher\_spec -F configfile'

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >
  >-   If the server does not respond due to a temporary network fault,  **gs\_probackup **will exit after waiting for  _archive-timeout_  seconds \(300 seconds is set by default\).
  >-   If the LSN of the standby server is different from that of the primary server, the database continuously updates the following log information. In this case, you need to rebuild the standby server.
  >
  >```
  >LOG: walsender thread shut down
  >LOG: walsender thread started
  >LOG: received wal replication command: IDENTIFY_VERSION
  >LOG: received wal replication command: IDENTIFY_MODE
  >LOG: received wal replication command: IDENTIFY_SYSTEM
  >LOG: received wal replication command: IDENTIFY_CONSISTENCE 0/D0002D8
  >LOG: remote request lsn/crc: [xxxxx] local max lsn/crc: [xxxxx]
  >```



#### Backup Process<a name="en-us_topic_0289899221_en-us_topic_0287276008_section1735727125216"></a>

1. Initialize the backup directory. Create the  **backups/**  and  **wal/**  subdirectories in the specified directory to store backup files and WAL files respectively.

   ```
   gs_probackup init -B backup_dir
   ```

2. Add a new backup instance.  **gs\_probackup**  can store backups of multiple database instances in the same backup directory.

   ```
   gs_probackup add-instance -B backup_dir -D data_dir --instance instance_name
   ```

3. Create a backup for a specified database instance. Before performing an incremental backup, you must create at least one full backup.

   ```
   gs_probackup backup -B backup_dir --instance instance_name -b backup_mode
   ```

4. Restore data from the backup of a specified instance.

   ```
   gs_probackup restore -B backup_dir --instance instance_name -D pgdata-path -i backup_id
   ```


#### Troubleshooting<a name="en-us_topic_0289899221_section1494010372368"></a>

<a name="en-us_topic_0289899221_table580714103714"></a>

<table><thead align="left"><tr id="en-us_topic_0289899221_row1881191415371"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0289899221_p88111145376"><a name="en-us_topic_0289899221_p88111145376"></a><a name="en-us_topic_0289899221_p88111145376"></a>Problem Description</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0289899221_p3811314113715"><a name="en-us_topic_0289899221_p3811314113715"></a><a name="en-us_topic_0289899221_p3811314113715"></a>Cause and Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0289899221_row128119141370"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0289899221_p1137341385614"><a name="en-us_topic_0289899221_p1137341385614"></a><a name="en-us_topic_0289899221_p1137341385614"></a>ERROR: query failed: ERROR: canceling statement due to conflict with recovery</p>
<p id="en-us_topic_0289899221_p3250176192018"><a name="en-us_topic_0289899221_p3250176192018"></a><a name="en-us_topic_0289899221_p3250176192018"></a> </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0289899221_p1177019484135"><a name="en-us_topic_0289899221_p1177019484135"></a><a name="en-us_topic_0289899221_p1177019484135"></a><strong id="en-us_topic_0289899221_b5514131818519"><a name="en-us_topic_0289899221_b5514131818519"></a><a name="en-us_topic_0289899221_b5514131818519"></a>Cause</strong>: The operation performed on the standby node is accessing the storage row. The corresponding row is modified or deleted on the primary node, and the Xlog is replayed on the standby node. As a result, the operation is canceled on the standby node.</p>
<p id="en-us_topic_0289899221_p1694692172319"><a name="en-us_topic_0289899221_p1694692172319"></a><a name="en-us_topic_0289899221_p1694692172319"></a>Solution:</p>
<p id="en-us_topic_0289899221_p237491316569"><a name="en-us_topic_0289899221_p237491316569"></a><a name="en-us_topic_0289899221_p237491316569"></a>1. Increase the values of the following parameters:</p>
<p id="en-us_topic_0289899221_p3696105218208"><a name="en-us_topic_0289899221_p3696105218208"></a><a name="en-us_topic_0289899221_p3696105218208"></a>max_standby_archive_delay</p>
<p id="en-us_topic_0289899221_p9696105215208"><a name="en-us_topic_0289899221_p9696105215208"></a><a name="en-us_topic_0289899221_p9696105215208"></a>max_standby_streaming_delay</p>
<p id="en-us_topic_0289899221_p317036192310"><a name="en-us_topic_0289899221_p317036192310"></a><a name="en-us_topic_0289899221_p317036192310"></a>2. Add the following configuration item:</p>
<p id="en-us_topic_0289899221_p1286010362416"><a name="en-us_topic_0289899221_p1286010362416"></a><a name="en-us_topic_0289899221_p1286010362416"></a>hot_standby_feedback = on</p>
</td>
</tr>
</tbody>
</table>



## Logical Backup and Restoration


### gs\_dump

#### Background<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_section1271019596335"></a>

gs\_dump, provided by openGauss, is used to export database information. You can export a database or its objects \(such as schemas, tables, and views\). The database can be the default postgres database or a user-specified database.

**gs\_dump**  is executed by OS user  **omm**.

When  **gs\_dump**  is used to export data, other users can still access \(read and write\) openGauss databases.

**gs\_dump**  can export complete, consistent data. For example, if  **gs\_dump**  is started to export database A at T1, data of the database at that time point will be exported, and modifications on the database after that time point will not be exported.

The generated columns are not dumped during  **gs\_dump**  is used.

**gs\_dump**  supports the export of text files that are compatible with the V1 database.

**gs\_dump**  can export database information to a plain-text SQL script file or archive file.

-   Plain-text SQL script: It contains the SQL statements required to restore the database. You can use gsql to execute the SQL script. With only a little modification, the SQL script can rebuild a database on other hosts or database products.
-   Archive file: It contains data required to restore the database. It can be a tar-, directory-, or custom-format archive. For details, see  [Table 1](#en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5). The export result must be used with  **gs\_restore**to restore the database. The system allows users to select or even to sort the content to be imported.

#### Functions<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s59719e8badd54d11a09df49f558d8b20"></a>

**gs\_dump**  can create export files in four formats, which are specified by  **-F**  or  **--format=**, as listed in  [Table 1](#en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5).

**Table  1**  Formats of exported files

<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5"></a>

<table><thead align="left"><tr id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_r4ef849d8960e48aca0b7d7b3cb862f51"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.6.1.1"><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"></a>Format</p>
</th>
<th class="cellrowborder" valign="top" width="9.8%" id="mcps1.2.6.1.2"><p id="en-us_topic_0249632271_en-us_topic_0237152335_p4587167183616"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p4587167183616"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p4587167183616"></a>Value of <strong id="en-us_topic_0249632271_b127678166527"><a name="en-us_topic_0249632271_b127678166527"></a><a name="en-us_topic_0249632271_b127678166527"></a>-F</strong></p>
</th>
<th class="cellrowborder" valign="top" width="30.78%" id="mcps1.2.6.1.3"><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="20.65%" id="mcps1.2.6.1.4"><p id="en-us_topic_0249632271_en-us_topic_0237152335_p6978831508"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p6978831508"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p6978831508"></a>Suggestion</p>
</th>
<th class="cellrowborder" valign="top" width="25.990000000000002%" id="mcps1.2.6.1.5"><p id="en-us_topic_0249632271_en-us_topic_0237152335_p2063187163819"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p2063187163819"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p2063187163819"></a>Corresponding Import Tool</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_r1daa8251bad14980afdd5cb2d8265dc3"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_en-us_topic_0020757891_p20432820450"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_en-us_topic_0020757891_p20432820450"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_en-us_topic_0020757891_p20432820450"></a>Plain-text</p>
</td>
<td class="cellrowborder" valign="top" width="9.8%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p859110714363"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p859110714363"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p859110714363"></a>p</p>
</td>
<td class="cellrowborder" valign="top" width="30.78%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p1374812518463"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p1374812518463"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p1374812518463"></a>A plain-text script file containing SQL statements and commands. The commands can be executed on <strong id="en-us_topic_0249632271_b1564965217536"><a name="en-us_topic_0249632271_b1564965217536"></a><a name="en-us_topic_0249632271_b1564965217536"></a>gsql</strong>, a command line terminal, to recreate database objects and load table data.</p>
</td>
<td class="cellrowborder" valign="top" width="20.65%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p130319266504"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p130319266504"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p130319266504"></a>You are advised to use plain-text exported files for small databases.</p>
</td>
<td class="cellrowborder" valign="top" width="25.990000000000002%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p18632714386"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p18632714386"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p18632714386"></a>Before using <a href="en-us_topic_0249632261.md"><strong id="en-us_topic_0249632271_b1334175245418"><a name="en-us_topic_0249632271_b1334175245418"></a><a name="en-us_topic_0249632271_b1334175245418"></a>gsql</strong></a> to restore database objects, you can use a text editor to edit the plain-text export file as required.</p>
</td>
</tr>
<tr id="en-us_topic_0249632271_en-us_topic_0237152335_row14339208493"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af130ab9de506445ca1707d7e363597d0"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af130ab9de506445ca1707d7e363597d0"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_af130ab9de506445ca1707d7e363597d0"></a>Custom</p>
</td>
<td class="cellrowborder" valign="top" width="9.8%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p16594177133618"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p16594177133618"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p16594177133618"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="30.78%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p2018045019462"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p2018045019462"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p2018045019462"></a>A binary file that allows the restoration of all or selected database objects from an exported file.</p>
</td>
<td class="cellrowborder" valign="top" width="20.65%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p205841643165011"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p205841643165011"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p205841643165011"></a>You are advised to use custom-format archive files for medium or large database.</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="25.990000000000002%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p146377143811"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p146377143811"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p146377143811"></a>You can use <a href="gs_restore.md#EN-US_TOPIC_0250273519"><strong id="en-us_topic_0249632271_b19627238123819"><a name="en-us_topic_0249632271_b19627238123819"></a><a name="en-us_topic_0249632271_b19627238123819"></a>gs_restore</strong></a> to import database objects from a custom-format archive.</p>
</td>
</tr>
<tr id="en-us_topic_0249632271_en-us_topic_0237152335_row1377584264920"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"></a>Directory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p155963793619"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p155963793619"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p155963793619"></a>d</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p141347125538"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p141347125538"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p141347125538"></a>A directory containing directory files and the data files of tables and BLOB objects.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p430501165117"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p430501165117"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p430501165117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_r582ac840af8345f89e90400138f92148"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"></a>.tar</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p10597975361"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p10597975361"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p10597975361"></a>t</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p27801606479"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p27801606479"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p27801606479"></a>A tar-format archive that allows the restoration of all or selected database objects from an exported file. It cannot be further compressed and has an 8-GB limitation on the size of a single table.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0249632271_en-us_topic_0237152335_p8184143515"><a name="en-us_topic_0249632271_en-us_topic_0237152335_p8184143515"></a><a name="en-us_topic_0249632271_en-us_topic_0237152335_p8184143515"></a>-</p>
</td>
</tr>
</tbody>
</table>
![](public_sys-resources/icon-note.gif) **NOTE:**   
To reduce the size of an exported file, you can use the gs\_dump tool to compress it to a directory archive file or custom-format file. When a directory archive or custom-format archive is generated, a medium level of compression is applied by default. Archived exported files cannot be compressed using  **gs\_dump**.

#### Precautions<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s75e900efd4f04a2bb39914ec1d8f971f"></a>

-   Do not modify an exported file or its content. Otherwise, restoration may fail.
-   To ensure the data consistency and integrity,  **gs\_dump**  acquires a share lock on a table to be dumped. If another transaction has acquired a share lock on the table,  **gs\_dump**  waits until this lock is released and then locks the table for dumping. If the table cannot be locked within the specified time, the dump fails. You can customize the timeout duration to wait for lock release by specifying the  **--lock-wait-timeout**  option.
-   Stored procedures and functions cannot be exported in encrypted mode.

#### Syntax<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s884f9e03cedd408cbe7ce5303df97df6"></a>

```
gs_dump [OPTION]... [DBNAME]
```

![](public_sys-resources/icon-note.gif) **NOTE:**   
_DBNAME_  does not follow a short or long option. It specifies the database to be connected.  
For example:  
Specify  _DBNAME_  without a  **-d**  option preceding it.

```
gs_dump -p port_number  postgres -f dump1.sql
```
or
```
export PGDATABASE=postgres 
```
```
 gs_dump -p port_number -f dump1.sql
```
Environment variable:  _PGDATABASE_

#### Parameter Description<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s6822518f650f4ad4ab67d1084cd8ffdd"></a>

Common parameters

-   -f, --file=FILENAME

    Sends the output to the specified file or directory. If this parameter is omitted, the standard output is generated. If the output format is  **\(-F c/-F d/-F t\)**, the  **-f**  parameter must be specified. If the value of the  **-f**  parameter contains a directory, the current user must have the read and write permissions on the directory, and the directory cannot be an existing one.

-   -F, --format=c|d|t|p

    Selects the exported file format. The format can be:

    -   **p|plain**: Generates a text SQL script file. This is the default value.
    -   **c|custom**: Outputs a custom-format archive as a directory to be used as the input of  **gs\_restore**. This is the most flexible output format in which users can manually select it and reorder the archived items during restoration. An archive in this format is compressed by default.
    -   **d|directory**: Creates a directory containing directory files and the data files of tables and BLOBs.
    -   **t|tar**: Outputs a .tar archive as the input of  **gs\_restore**. The .tar format is compatible with the directory format. Extracting a .tar archive generates a valid directory-format archive. However, the .tar archive cannot be further compressed and has an 8-GB limitation on the size of a single table. The order of table data items cannot be changed during restoration.

        A .tar archive can be used as input of  **gsql**.


-   -v, --verbose

    Specifies the verbose mode. If it is specified,  **gs\_dump**  writes detailed object comments and the number of startups/stops to the dump file, and progress messages to standard error.

-   -V, --version

    Prints the  **gs\_dump**  version and exits.

-   -Z, --compress=0-9

    Specifies the used compression level.

    Value range: 0-9

    -   **0**  indicates no compression.
    -   **1**  indicates that the compression ratio is the lowest and processing speed the fastest.
    -   **9**  indicates that the compression ratio is the highest and processing speed the slowest.

    For the custom-format archive, this option specifies the compression level of a single table data segment. By default, data is compressed at a medium level. The plain-text and .tar archive formats do not support compression currently.

-   --lock-wait-timeout=TIMEOUT

    Do not keep waiting to obtain shared table locks since the beginning of the dump. Consider it as failed if you are unable to lock a table within the specified time. The timeout period can be specified in any of the formats accepted by  **SET statement\_timeout**.

-   -?, --help

    Displays help about  **gs\_dump**  parameters and exits.


Dump parameters:

-   -a, --data-only

    Generates only the data, not the schema \(data definition\). Dump the table data, big objects, and sequence values.

-   -b, --blobs

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   -c, --clean

    Before writing the command of creating database objects into the backup file, writes the command of clearing \(deleting\) database objects to the backup files. \(If no objects exist in the target database,  **gs\_restore**  probably displays some error information.\)

    This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

-   -C, --create

    The backup file content starts with the commands of creating the database and connecting to the created database. \(If the command script is executed in this mode, you can specify any database to run the command for creating a database. The data is restored to the created database instead of the specified database.\)

    This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

-   -E, --encoding=ENCODING

    Creates a dump file in the specified character set encoding. By default, the dump file is created in the database encoding. \(Alternatively, you can set the environment variable  **PGCLIENTENCODING**  to the required dump encoding.\)

-   -n, --schema=SCHEMA

    Dumps only schemas matching the schema names. This option contains the schema and all its contained objects. If this option is not specified, all non-system schemas in the target database will be dumped. Multiple schemas can be selected by specifying multiple  **-n**  options. The schema parameter is interpreted as a pattern according to the same rules used by the  **\\d**  command of  **gsql**. Therefore, multiple schemas can also be selected by writing wildcard characters in the pattern. When you use wildcard characters, quote the pattern to prevent the shell from expanding the wildcard characters.

    ![](public_sys-resources/icon-note.gif) **NOTE:**     
    -   If  **-n**  is specified,  **gs\_dump**  does not dump any other database objects which the selected schemas might depend upon. Therefore, there is no guarantee that the results of a specific-schema dump can be automatically restored to an empty database.  
    -   If  **-n**  is specified, the non-schema objects are not dumped.  

    Multiple schemas can be dumped. Entering  **-n **_schemaname_  multiple times dumps multiple schemas.

    For example:

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -n sch1 -n sch2
    ```

    In the preceding example,  **sch1**  and  **sch2**  are dumped.

-   -N, --exclude-schema=SCHEMA

    Does not dump any schemas matching the schemas pattern. The pattern is interpreted according to the same rules as for  **-n**.  **-N**  can be specified multiple times to exclude schemas matching any of the specified patterns.

    When both  **-n**  and  **-N**  are specified, the schemas that match at least one  **-n**  option but no  **-N**  is dumped. If  **-N**  is specified and  **-n**  is not, the schemas matching  **-N**  are excluded from what is normally dumped.

    Dump allows you to exclude multiple schemas during dumping.

    Specify  **-N exclude schema name**  to exclude multiple schemas during dumping.

    For example:

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -N sch1 -N sch2
    ```

    In the preceding example,  **sch1**  and  **sch2**  will be excluded during the dumping.

-   -o, --oids

    Dumps object identifiers \(OIDs\) as parts of the data in each table. Use this option if your application references the OID columns in some way. If the preceding situation does not occur, do not use this parameter.

-   -O, --no-owner

    Do not output commands to set ownership of objects to match the original database. By default,  **gs\_dump**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  statement to set ownership of created database objects. These statements will fail when the script is running unless it is started by a system administrator \(or the same user that owns all of the objects in the script\). To make a script that can be stored by any user and give the user ownership of all objects, specify  **-O**.

    This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

-   <a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd"></a>-s, --schema-only

    Dumps only the object definition \(schema\) but not data.

-   -S, --sysadmin=NAME

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   -t, --table=TABLE

    Specifies a list of tables, views, sequences, or foreign tables to be dumped. You can use multiple  **-t**  parameters or wildcard characters to specify tables.

    When you use wildcard characters, quote patterns to prevent the shell from expanding the wildcard characters.

    The  **-n**  and  **-N**  options have no effect when  **-t**  is used, because tables selected by using  **-t**  will be dumped regardless of those options.

    ![](public_sys-resources/icon-note.gif) **NOTE:**   
    -   The number of  **-t**  parameters must be less than or equal to 100.  
    -   If the number of  **-t**  parameters is greater than 100, you are advised to use the  **--include-table-file**  parameter to replace some  **-t**  parameters.  
    -   If  **-t**  is specified,  **gs\_dump**  does not dump any other database objects which the selected tables might depend upon. Therefore, there is no guarantee that the results of a specific-table dump can be automatically restored to an empty database.  
    -   **-t tablename**  only dumps visible tables in the default search path.  **-t '\*.tablename'**  dumps  _tablename_  tables in all the schemas of the dumped database.  **-t schema.table**  dumps tables in a specific schema.  
    -   **-t tablename**  does not export trigger information from a table.  

    For example:

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -t schema1.table1 -t schema2.table2
    ```

    In the preceding example,  **schema1.table1**  and  **schema2.table2**  are dumped.

-   --include-table-file=FILENAME

    Specifies the table file to be dumped.

-   -T, --exclude-table=TABLE

    Specifies a list of tables, views, sequences, or foreign tables not to be dumped. You can use multiple  **-T**  parameters or wildcard characters to specify tables.

    When  **-t**  and  **-T**  are input, the object will be stored in  **-t**  list not  **-T**  table object. 

    For example:

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -T table1 -T table2
    ```

    In the preceding example,  **table1**  and  **table2**  are excluded from the dumping.

-   --exclude-table-file=FILENAME

    Specifies the table files that do not need to be dumped.

    ![](public_sys-resources/icon-note.gif) **NOTE:**   
    Same as  **--include-table-file**, the content format of this parameter is as follows:  
    schema1.table1
    schema2.table2
    ......

-   -x, --no-privileges|--no-acl

    Prevents the dumping of access permissions \(grant/revoke commands\).

- -q, --target

  Exports text files compatible with databases of other versions. Currently, parameters of V1 and V5 are supported. The V1 parameters are used to export data from the V5 database as a text file compatible with V1. The V5 parameters are used to export data from the V5 database as a V5 text file, reducing errors that may occur during V5 import.

  When using the V1 parameters, you are advised to use them along with parameters such as  **--exclude-guc="enable\_cluster\_resize"**,  **--exclude-function**, and  **--exclude-with**. Otherwise, an error may be reported during V1 import.

- --exclude-guc

  Specifies the  **set**  command that does not contain related GUC parameters in the exported text file. Currently, only  **enable\_cluster\_resize**  is supported.

- --exclude-function

  Specifies that functions and stored procedures are not exported.

- --exclude-with

  Specifies that the description such as  **WITH\(orientation=row, compression=on\)**  is not added to the end of the exported table definition.

-   --binary-upgrade

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --binary-upgrade-usermap="USER1=USER2"

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --column-inserts|--attribute-inserts

    Exports data by running the  **INSERT**  command with explicit column names  **\{INSERT INTO table \(column, ...\) VALUES ...\}**. This will cause a slow restoration. However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content.

-   --disable-dollar-quoting

    Disables the use of dollar sign \($\) for function bodies, and forces them to be quoted using the SQL standard string syntax.

-   --disable-triggers

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --exclude-table-data=TABLE

    Does not dump data that matches any of table patterns. The pattern is interpreted according to the same rules as for  **-t**.

    **--exclude-table-data**  can be entered more than once to exclude tables matching any of several patterns. When you need the specified table definition rather than data in the table, this option is helpful.

    To exclude data of all tables in the database, see  [--schema-only](#en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd).

-   --inserts

    Dumps data by the  **INSERT**  statement \(rather than  **COPY**\). This will cause a slow restoration.

    However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content. The restoration may fail if you rearrange the column order. The  **--column-inserts**  option is unaffected against column order changes, though even slower.

-   --no-publications

    No dump publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No dump subscriptions are performed.

- --no-tablespaces

  Does not issue commands to select tablespaces. All the objects will be created during restoration, no matter which tablespace is selected when using this option.

-   --no-security-labels

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --no-tablespaces

    Does not issue commands to select tablespaces. All the objects will be created during restoration, no matter which tablespace is selected when using this option.

    This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

-   --no-unlogged-table-data

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --non-lock-table

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --include-alter-table

    Dumps deleted columns of tables. This option records deleted columns.

-   --quote-all-identifiers

    Forcibly quotes all identifiers. This parameter is useful when you dump a database for migration to a later version, in which additional keywords may be introduced.

-   --section=SECTION

    Specifies dumped name sections \(pre-data, data, or post-data\).

-   --serializable-deferrable

    Uses a serializable transaction for the dump to ensure that the used snapshot is consistent with later database status. Perform this operation at a time point in the transaction flow, at which everything is normal. This ensures successful transaction and avoids serialization failures of other transactions, which requires serialization again.

    This option has no benefits for disaster recovery. During the upgrade of the original database, loading a database copy as a report or loading other shared read-only dump is helpful. If the option does not exist, dump reveals a status which is different from the submitted sequence status of any transaction.

    This option will make no difference if there are no active read-write transactions when  **gs\_dump**  is started. If the read-write transactions are in active status, the dump start time will be delayed for an uncertain period.

-   --use-set-session-authorization

    Specifies that the standard SQL  **SET SESSION AUTHORIZATION**  command rather than  **ALTER OWNER**  is returned to ensure the object ownership. This makes dumping more standard. However, if a dump file contains objects that have historical problems, restoration may fail. A dump using  **SET SESSION AUTHORIZATION**  requires the system administrator permissions, whereas  **ALTER OWNER**  requires lower permissions.

-   --with-encryption=AES128

    Specifies that dumping data needs to be encrypted using AES128.

- --with-key=KEY

  The AES128 key rules are as follows:

  -   Consists of 8 to 16 characters.
-   Contains at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).
  
-   --with-salt=RANDVALUES

    **gs\_dumpall**  uses this parameter to transfer a random value.

- --include-extensions

  Includes extensions in the dump.

-   --include-depend-objs

    Includes information about the objects that depend on the specified object in the backup result. This parameter takes effect only if the  **-t**  or  **--include-table-file**  parameter is specified.

-   --exclude-self

    Excludes information about the specified object from the backup result. This parameter takes effect only if the  **-t**  or  **--include-table-file**  parameter is specified.

-   --pipeline

    Uses a pipe to transmit the password. This parameter cannot be used on devices.

-   --dont-overwrite-file

    The existing files in plain-text, .tar, and custom formats will be overwritten. This option is not used for the directory format.

    For example:

    Assume that the  **backup.sql**  file exists in the current directory. If you specify  **-f backup.sql**  in the input command, and the  **backup.sql**  file is generated in the current directory, the original file will be overwritten.

    If the backup file already exists and  **--dont-overwrite-file**  is specified, an error will be reported with the message that the dump file exists.

    ```
    gs_dump -p port_number postgres -f backup.sql -F plain --dont-overwrite-file
    ```


![](public_sys-resources/icon-note.gif) **NOTE:**   
-   The  **-s/--schema-only**  and  **-a/--data-only**  parameters do not coexist.  
-   The  **-c/--clean**  and  **-a/--data-only**  parameters do not coexist.  
-   **--inserts/--column-inserts**  and  **-o/--oids**  do not coexist, because  **OIDS**  cannot be set using the  **INSERT**  statement.  
-   **--role**  must be used in conjunction with  **--rolepassword**.  
-   **--binary-upgrade-usermap**  must be used in conjunction with  **--binary-upgrade**.  
-   **--include-depend-objs**  or  **--exclude-self**  takes effect only when  **-t**  or  **--include-table-file**  is specified.  
-   **--exclude-self**  must be used in conjunction with  **--include-depend-objs**.  

Connection parameters:

-   -h, --host=HOSTNAME

    Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the  **PGHOST**  environment variable \(if available\). Otherwise, a Unix domain socket connection is attempted. 

    This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

    Example:  _host name_

    Environment variable:  **PGHOST**

-   -p, --port=PORT

    Specifies the host port number. If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the host port number plus 1.

    Environment variable:  **PGPORT**

-   -U, --username=NAME

    Specifies the username of the host to be connected.

    If the username of the host to be connected is not specified, the system administrator is used by default.

    Environment variable:  **PGUSER**

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

-   -W, --password=PASSWORD

    Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the Dump Restore tool will ask you to enter a password.

-   --role=ROLENAME

    Specifies a role name to be used for creating the dump. If this option is selected, the  **SET ROLE**  command will be issued after the database is connected to  **gs\_dump**. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by  **gs\_dump**. It allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as a super administrator. This option allows dumping data without violating the policy.

-   --rolepassword=ROLEPASSWORD

    Specifies the password for a role.


#### Notice<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s7390a5e2be45435687f910284792c8c6"></a>

If any local additions need to be added to the template1 database in openGauss, restore the output of  **gs\_dump**  into an empty database with caution. Otherwise, you are likely to obtain errors due to duplicate definitions of the added objects. To create an empty database without any local additions, copy data from template0 rather than template1. Example:

```
CREATE DATABASE foo WITH TEMPLATE template0;
```

The .tar file size must be smaller than 8 GB. \(This is the .tar file format limitations.\) The total size of a .tar archive and any of the other output formats are not limited, except possibly by the OS.

The dump file generated by  **gs\_dump**  does not contain the statistics used by the optimizer to make execution plans. Therefore, you are advised to run  **ANALYZE**  after restoring from a dump file to ensure optimal performance. The dump file does not contain any  **ALTER DATABASE ... SET**  commands. These settings are dumped by  **gs\_dumpall**, along with database users and other installation settings.

#### Examples<a name="en-us_topic_0249632271_en-us_topic_0237152335_s969fde25c47f45ed897e29d208d57649"></a>

Use  **gs\_dump**  to dump a database as a SQL text file or a file in other formats.

In the following examples,  **Bigdata@123**  indicates the password for the database user.  **backup/MPPDB\_backup.sql**  indicates an exported file where  **backup**  indicates the relative path of the current directory.  **37300**  indicates the port number of the database server.  **postgres**  indicates the name of the database to be accessed.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Before exporting files, ensure that the directory exists and you have the read and write permissions on the directory.

Example 1: Use  **gs\_dump**  to export the full information of the postgres database. The exported  **MPPDB\_backup.sql**  file is in plain-text format.

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.sql -p 37300 postgres -F p
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: The total objects number is 356.
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: [100.00%] 356 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: total time: 1274  ms
```

Use  **gsql**  to import data from the exported plain-text file.

Example 2: Use  **gs\_dump**  to export the full information of the postgres database. The exported  **MPPDB\_backup.tar**  file is in .tar format.

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.tar -p 37300 postgres -F t
gs_dump[port='37300'][postgres][2018-06-27 10:02:24]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: total time: 50086  ms
```

Example 3: Use  **gs\_dump**  to export the full information of the postgres database. The exported  **MPPDB\_backup.dmp**  file is in custom format.

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.dmp -p 37300 postgres -F c
gs_dump[port='37300'][postgres][2018-06-27 10:05:40]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: total time: 36620  ms
```

Example 4: Use  **gs\_dump**  to export the full information of the postgres database. The exported  **MPPDB\_backup**  file is in directory format.

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup -p 37300  postgres -F d
gs_dump[port='37300'][postgres][2018-06-27 10:16:04]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: total time: 33977  ms 
```

Example 5: Use  **gs\_dump**  to export the information of the postgres database, excluding the information of the table specified in the  **/home/MPPDB\_temp.sql**  file. The exported  **MPPDB\_backup.sql**  file is in plain-text format.

```
gs_dump -U omm -W Bigdata@123 -p 37300 postgres --exclude-table-file=/home/MPPDB_temp.sql -f backup/MPPDB_backup.sql
gs_dump[port='37300'][postgres][2018-06-27 10:37:01]: The total objects number is 1367.
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: [100.00%] 1367 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: total time: 37017  ms
```

Example 6: Use  **gs\_dump**  to export only the information about the views that depend on the  **testtable**  table. Create another  **testtable**  table, and then restore the views that depend on it.

-   Back up only the views that depend on the  **testtable**  table.

    ```
    gs_dump -s -p 37300 postgres -t PUBLIC.testtable --include-depend-objs --exclude-self -f backup/MPPDB_backup.sql -F p
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: The total objects number is 331.
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: [100.00%] 331 objects have been dumped.
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: dump database postgres successfully
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: total time: 327  ms
    ```

-   Change the name of the  **testtable**  table.

    ```
    gsql -p 37300 postgres -r -c "ALTER TABLE PUBLIC.testtable RENAME TO testtable_bak;"
    ```

-   Create another  **testtable**  table.

    ```
    CREATE TABLE PUBLIC.testtable(a int, b int, c int);
    ```

-   Restore the views for the new  **testtable**  table.

    ```
    gsql -p 37300 postgres -r -f backup/MPPDB_backup.sql
    ```

### gs\_dumpall

#### Background<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_section31221112348"></a>

**gs\_dumpall**, provided by openGauss, is used to export all openGauss database information, including data of the default database postgres, user-defined databases, and common global objects of all openGauss databases.

**gs\_dumpall**  is executed by OS user  **omm**.

When  **gs\_dumpall**  is used to export data, other users can still access \(read and write\) openGauss databases.

**gs\_dumpall**  can export complete, consistent data. For example, if  **gs\_dumpall**  is started to export openGauss database at T1, data of the database at that time point will be exported, and modifications on the database after that time point will not be exported.

The generated columns are not dumped during  **gs\_dumpall**  is used.

**gs\_dumpall**  exports all openGauss databases in two parts:

-   **gs\_dumpall**  exports all global objects, including information about database users and groups, tablespaces, and attributes \(for example, global access permissions\).
-   **gs\_dumpall**  invokes  **gs\_dump**  to export SQL scripts from each openGauss database, which contain all the SQL statements required to restore databases.

The exported files are both plain-text SQL scripts. Use  gsql to execute them to restore openGauss databases.

#### Precautions<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_s67532b3f6d2a42e183672fae6c4ba753"></a>

-   Do not modify an exported file or its content. Otherwise, restoration may fail.
-   To ensure the data consistency and integrity,  **gs\_dumpall**  acquires a share lock on a table to be dumped. If another transaction has acquired a share lock on the table,  **gs\_dumpall**  waits until this lock is released and then locks the table for dumping. If the table cannot be locked within the specified time, the dump fails. You can customize the timeout duration to wait for lock release by specifying the  **--lock-wait-timeout**  parameter.
-   During an export,  **gs\_dumpall**  reads all tables in a database. Therefore, you need to connect to the database as an openGauss administrator to export a complete file. When you use  **gsql**  to execute SQL scripts, cluster administrator permissions are also required to add users and user groups, and create databases.

#### Syntax<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_s991ca5afb6574130a742db3732d6f577"></a>

```
gs_dumpall [OPTION]...
```

#### Parameter Description<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_s8a1ffa824f1b4371a430896ee8fd2020"></a>

Common parameters:

-   -f, --filename=FILENAME

    Sends the output to the specified file. If this parameter is omitted, the standard output is generated.

-   -v, --verbose

    Specifies the verbose mode. If it is specified,  **gs\_dumpall**  writes detailed object comments and number of startups/stops to the dump file, and progress messages to standard error.

-   -V, --version

    Prints the  _gs\_dumpall_  version and exits.

-   --lock-wait-timeout=TIMEOUT

    Do not keep waiting to obtain shared table locks at the beginning of the dump. Consider it as failed if you are unable to lock a table within the specified time. The timeout period can be specified in any of the formats accepted by  **SET statement\_timeout**.

-   -?, --help

    Displays help about  **gs\_dumpall**  parameters and exits.


Dump parameters:

-   -a, --data-only

    Dumps only the data, not the schema \(data definition\).

-   -c, --clean

    Runs SQL statements to delete databases before rebuilding them. Statements for dumping roles and tablespaces are added.

-   -g, --globals-only

    Dumps only global objects \(roles and tablespaces\) but no databases.

-   -o, --oids

    Dumps object identifiers \(OIDs\) as parts of the data in each table. Use this parameter if your application references the OID columns in some way. If the preceding situation does not occur, do not use this parameter.

-   -O, --no-owner

    Do not output commands to set ownership of objects to match the original database. By default,  **gs\_dumpall**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  command to set ownership of created schema objects. These statements will fail when the script is running unless it is started by a system administrator \(or the same user that owns all of the objects in the script\). To make a script that can be stored by any user and give the user ownership of all objects, specify  **-O**.

-   -r, --roles-only

    Dumps only roles but not databases or tablespaces.

-   -s, --schema-only

    Dumps only the object definition \(schema\) but not data.

-   -S, --sysadmin=NAME

    Name of the system administrator during the dump.

-   -t, --tablespaces-only

    Dumps only tablespaces but not databases or roles.

-   -x, --no-privileges

    Prevents the dumping of access permissions \(grant/revoke commands\).

-   --column-inserts|--attribute-inserts

    Exports data by running the  **INSERT**  command with explicit column names  **\{INSERT INTO table \(column, ...\) VALUES ...\}**. This will cause a slow restoration. However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content.

-   --disable-dollar-quoting

    Disables the use of dollar sign \($\) for function bodies, and forces them to be quoted using the SQL standard string syntax.

-   --disable-triggers

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --inserts

    Dumps data by the  **INSERT**  statement \(rather than  **COPY**\). This will cause a slow restoration. The restoration may fail if you rearrange the column order. The  **--column-inserts**  option is unaffected against column order changes, though even slower.

-   --no-publications

    No dump publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No dump subscriptions are performed.

-   --no-tablespaces

    Does not generate output statements to create tablespaces or select tablespaces for objects. All the objects will be created during the restoration process, no matter which tablespace is selected when using this option.

-   --no-unlogged-table-data

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --include-alter-table

    Exports information about deleted columns in the table.

-   --quote-all-identifiers

    Forcibly quotes all identifiers. This parameter is useful when you dump a database for migration to a later version, in which additional keywords may be introduced.

-   --dont-overwrite-file

    Does not overwrite the current file.

-   --use-set-session-authorization

    Specifies that the standard SQL  **SET SESSION AUTHORIZATION**  command rather than  **ALTER OWNER**  is returned to ensure the object ownership. This makes dumping more standard. However, if a dump file contains objects that have historical problems, restoration may fail. A dump using  **SET SESSION AUTHORIZATION**  requires the system administrator rights, whereas  **ALTER OWNER**  requires lower permissions.

-   --with-encryption=AES128

    Specifies that dumping data needs to be encrypted using AES128.

- --with-key=KEY

  The AES128 key rules are as follows:

  -   Consists of 8 to 16 characters.
  -   Contains at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).

- --include-extensions

  Backs up all CREATE EXTENSION statements if the  **include-extensions**  parameter is set.

-   --include-templatedb

    Includes template databases during the dump.

-   --binary-upgrade

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --binary-upgrade-usermap="USER1=USER2"

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --non-lock-table

    This parameter is used only by the OM tool.

-   --tablespaces-postfix

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --parallel-jobs

    Specifies the number of concurrent backup processes. The value range is 1-1000.
    
-   --pipeline

    Uses a pipe to transmit the password. This parameter cannot be used on devices.


![](public_sys-resources/icon-note.gif) **NOTE:**   
-   The  **-g/--globals-only**  and  **-r/--roles-only**  parameters do not coexist.  
-   The  **-g/--globals-only**  and  **-t/--tablespaces-only**  parameters do not coexist.  
-   The  **-r/--roles-only**  and  **-t/--tablespaces-only**  parameters do not coexist.  
-   The  **-s/--schema-only**  and  **-a/--data-only**  parameters do not coexist.  
-   The  **-r/--roles-only**  and  **-a/--data-only**  parameters do not coexist.  
-   The  **-t/--tablespaces-only**  and  **-a/--data-only**  parameters do not coexist.  
-   The  **-g/--globals-only**  and  **-a/--data-only**  parameters do not coexist.  
-   **--tablespaces-postfix**  must be used in conjunction with  **--binary-upgrade**.  
-   **--binary-upgrade-usermap**  must be used in conjunction with  **--binary-upgrade**.  
-   **--parallel-jobs**  must be used in conjunction with  **-f/--file**.  

Connection parameters:

-   -h, --host

    Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the PGHOST environment \(if variable\). Otherwise, a Unix domain socket connection is attempted.

    This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

    Environment Variable:  _PGHOST_

-   -l, --database

    Specifies the name of the database connected to dump all objects and discover other databases to be dumped. If this parameter is not specified, the  **postgres**  database will be used. If the  **postgres**  database does not exist,  **template1**  will be used.

-   -p, --port

    TCP port or the local Unix-domain socket file extension on which the server is listening for connections. The default value is the  _PGPORT_  environment variable.

    If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the listening port number plus 1.

    Environment variable:  _PGPORT_

-   -U, --username

    Specifies the user name to connect to.

    Environment variable:  _PGUSER_

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

-   -W, --password

    Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the Dump Restore tool will ask you to enter a password.

-   --role

    Specifies a role name to be used for creating the dump. This option causes  **gs\_dumpall**  to issue the  **SET ROLE**  statement after connecting to the database. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by the  **gs\_dumpall**. It allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as a system administrator. This option allows dumping data without violating the policy.

-   --rolepassword

    Specifies the password of the specific role.


#### Notice<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_sc99dfbcba3eb44e59598baa7edd2d140"></a>

**gs\_dumpall**  internally invokes  **gs\_dump**. For details about the diagnosis information, see  gs\_dump.

Once  **gs\_dumpall**  is restored, run ANALYZE on each database so that the optimizer can provide useful statistics.

**gs\_dumpall**  requires all needed tablespace directories to exit before the restoration. Otherwise, database creation will fail if the databases are in non-default locations.

#### Examples<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_sb56721027dde49e1bf8c5df9685d2f2f"></a>

Use  **gs\_dumpall**  to export all openGauss databases at a time.

![](public_sys-resources/icon-note.gif) **NOTE:** 
**gs\_dumpall**  supports only plain-text format export. Therefore, only  **gsql**  can be used to restore a file exported using  **gs\_dumpall**.

```
gs_dumpall -f backup/bkp2.sql -p 37300
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:09]: The total objects number is 2371.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:35]: [100.00%] 2371 objects have been dumped.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: dump database dbname='postgres' successfully
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: total time: 55567  ms
gs_dumpall[port='37300'][2018-06-27 09:55:46]: dumpall operation successful
gs_dumpall[port='37300'][2018-06-27 09:55:46]: total time: 56088  ms
```

### gs\_restore

#### Background<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_section182531928123515"></a>

**gs\_restore**, provided by openGauss, is used to import data that was exported using  **gs\_dump**. It can also be used to import files exported by  **gs\_dump**.

**gs\_restore**  is executed by OS user  **omm**.

It has the following functions:

-   Importing data to the database

    If a database is specified, data is imported to the database. For parallel import, the password for connecting to the database is required. During data import, the generated columns are automatically updated and saved as common columns.

-   Importing data to the script file

    If the database storing imported data is not specified, a script containing the SQL statement to recreate the database is created and written to a file or standard output. This script output is equivalent to the plain text output format of  **gs\_dump**.


#### Command Format<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_s5a64660d88db4dfb8e2b35d0b4645264"></a>

```
gs_restore [OPTION]... FILE
```

>![](public_sys-resources/icon-note.gif) **NOTE:**    
>-   **FILE**  does not have a short or long parameter. It is used to specify the location for the archive files.   
>-   The  **dbname**  or  **-l**  parameter is required as prerequisites. Users cannot enter  **dbname**  and  **-l**  parameters at the same time.  
>-   **gs\_restore**  incrementally imports data by default. To prevent data exceptions caused by multiple import operations, you are advised to use the  **-c**  parameter during the import. Before recreating database objects, delete the database objects that already exist in the database to be restored.  
>-   There is no option to control log printing. To hide logs, redirect the logs to the log file. If a large amount of table data needs to be restored, the table data will be restored in batches. Therefore, the log indicating that the table data has been imported is generated for multiple times.  

#### Parameter Description<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_sc666a8c818084bad8e23afd6e79dd659"></a>

Common parameters

-   -d, --dbname=NAME

    Connects to the  **dbname**  database and imports data to the database.

-   -f, --file=FILENAME

    Specifies the output file for the generated script, or uses the output file in the list specified using  **-l**.

    The default is the standard output.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >**-f**  cannot be used in conjunction with  **-d**.  

-   -F, --format=c|d|t

    Specifies the format of the archive. The format does not need to be specified because the  _gs\_restore_  determines the format automatically.

    Value range:

    -   **c/custom**: The archive form is the customized format in  gs\_dump.
    -   **d/directory**: The archive form is a directory archive format.
    -   **t/tar**: The archive form is a .tar archive format.

-   -l, --list

    Lists the forms of the archive. The operation output can be used for the input of the  **-L**  parameter. If filtering parameters, such as  **-n**  or  **-t**, are used together with  **-l**, they will restrict the listed items.

-   -v, --verbose

    Specifies the verbose mode.

-   -V, --version

    Prints the  **gs\_restore**  version and exits.

-   -?, --help

    Displays help information about the parameters of  **gs\_restore**  and exits.


Parameters for importing data

-   -a, -data-only

    Imports only the data, not the schema \(data definition\).  **gs\_restore**  incrementally imports data.

-   -c, --clean

    Cleans \(deletes\) existing database objects in the database to be restored before recreating them.

-   , --create

    Specifies that the CREATE DATABASE statement is used to create a database before data is imported to the database. \(After this parameter is specified, the database specified by  **-d**  is used only for executing the  **CREATE DATABASE**  command, and all data is still imported to the created database.\)

-   -e, --exit-on-error

    Exits if an error occurs when you send the SQL statement to the database. If you do not exit, the commands will still be sent and error information will be displayed when the import ends.

-   -I, --index=NAME

    Imports only the definition of the specified index. Multiple indexes can be imported. Enter  **-I**_ index_  multiple times to import multiple indexes.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -I Index1 -I Index2 backup/MPPDB_backup.tar
    ```

    In this example,  _Index1_  and  _Index2_  will be imported.

-   -j, --jobs=NUM

    Specifies the number of concurrent, the most time-consuming jobs of  **gs\_restore**  \(such as loading data, creating indexes, or creating constraints\). This parameter can greatly reduce the time to import a large database to a server running on a multiprocessor machine.

    Each job is one process or one thread, depending on the OS; and uses a separate connection to the server.

    The optimal value for this option depends on the server hardware setting, the client, the network, the number of CPU cores, and disk settings. It is recommended that the parameter be set to the number of CPU cores on the server. In addition, a larger value can also lead to faster import in many cases. However, an overly large value will lead to decreased performance because of thrashing.

    This parameter supports custom-format archives only. The input file must be a regular file \(not the pipe file\). This parameter can be ignored when you select the script method rather than connect to a database server. In addition, multiple jobs cannot be used in conjunction with the  **--single-transaction**  parameter.

-   -L, --use-list=FILENAME

    Imports only archive elements that are listed in  **list-file**  and imports them in the order that they appear in the file. If filtering parameters, such as  **-n**  or  **-t**, are used in conjunction with  **-L**, they will further limit the items to be imported.

    **list-file**  is normally created by editing the output of a previous  **-l**  parameter. File lines can be moved or removed, and can also be commented out by placing a semicolon \(;\) at the beginning of the row. 

-   -n, --schema=NAME

    Restores only objects that are listed in schemas.

    This parameter can be used in conjunction with the  **-t**  parameter to import a specific table.

    Entering  **-n **_schemaname_  multiple times can import multiple schemas.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -n sch1 -n sch2 backup/MPPDB_backup.tar
    ```

    In this example,  **sch1**  and  **sch2**  will be imported.

-   -O, --no-owner

    Do not output commands to set ownership of objects to match the original database. By default,  **gs\_restore**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  statement to set ownership of created schema elements. Unless the system administrator or the user who has all the objects in the script initially accesses the database. Otherwise, the statement will fail. Any user name can be used for the initial connection using  **-O**, and this user will own all the created objects.

-   -P, --function=NAME\(args\)

    Imports only listed functions. You need to correctly spell the function name and the parameter based on the contents of the dump file in which the function exists.

    Entering  **-P**  alone means importing all function-name\(args\) functions in a file. Entering  **-P**  with  **-n**  means importing the function-name\(args\) functions in a specified schema. Entering  **-P**  multiple times and using  **-n**  once means that all imported functions are in the  **-n**  schema by default.

    You can enter  **-n schema-name -P 'function-name\(args\)'**  multiple times to import functions in specified schemas.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -n test1 -P 'Func1(integer)' -n test2 -P 'Func2(integer)' backup/MPPDB_backup.tar
    ```

    In this example, both  **Func1 \(i integer\)**  in the  **test1**  schema and  **Func2 \(j integer\)**  in the  **test2**  schema will be imported.

-   -s, --schema-only

    Imports only schemas \(data definitions\), instead of data \(table content\). The current sequence value will not be imported.

-   -S, --sysadmin=NAME

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   -t, --table=NAME

    Imports only listed table definitions or data, or both. This parameter can be used in conjunction with the  **-n**  parameter to specify a table object in a schema. When  **-n**  is not entered, the default schema is PUBLIC. Entering  **-n **_schemaname_** -t **_tablename_  multiple times can import multiple tables in a specified schema.

    For example:

    Import  **table1**  in the  **PUBLIC**  schema.

    ```
    gs_restore -h host_name -p port_number -d postgres -t table1 backup/MPPDB_backup.tar
    ```

    Import  **test1**  in the  **test1**  schema and  **test2**  in the  **test2**  schema.

    ```
    gs_restore -h host_name -p port_number -d postgres -n test1 -t test1 -n test2 -t test2 backup/MPPDB_backup.tar
    ```

    Import  **table1**  in the  **PUBLIC**  schema and  **test1**  in the  **test1**  schema.

    ```
    gs_restore -h host_name -p port_number -d postgres -n PUBLIC -t table1 -n test1 -t table1 backup/MPPDB_backup.tar
    ```

-   -T, --trigger=NAME

    This parameter is reserved for extension.

-   -x, --no-privileges/--no-acl

    Prevents the import of access permissions \(**GRANT**/**REVOKE**  commands\).

-   -1, --single-transaction

    Executes import as a single transaction \(that is, commands are wrapped in  **BEGIN**/**COMMIT**\).

    This parameter ensures that either all the commands are completed successfully or no application is changed. This parameter means  **--exit-on-error**. 

-   --disable-triggers

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --no-data-for-failed-tables

    By default, table data will be imported even if the statement to create a table fails \(for example, the table already exists\). Data in such table is skipped using this parameter. This operation is useful if the target database already contains the desired table contents.

    This parameter takes effect only when you import data directly into a database, not when you output SQL scripts.

-   --no-publications

    No import publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No import subscriptions are performed.

-   --no-tablespaces

    Tablespaces excluding specified ones All objects will be created during the import process no matter which tablespace is selected when using this option.

-   --section=SECTION

    Imports the listed sections \(such as pre-data, data, or post-data\).

-   --use-set-session-authorization

    Is used for plain-text backup.

    Outputs the  **SET SESSION AUTHORIZATION**  statement instead of the  **ALTER OWNER**  statement to determine object ownership. This parameter makes dump more standards-compatible. If the records of objects in exported files are referenced, import may fail. Only administrators can use the  **SET SESSION AUTHORIZATION**  statement to dump data, and the administrators must manually change and verify the passwords of exported files by referencing the  **SET SESSION AUTHORIZATION**  statement before import. The  **ALTER OWNER**  statement requires lower permissions.
    
-   --pipeline

    Uses a pipe to transmit the password. This parameter cannot be used on devices.



![](public_sys-resources/icon-notice.gif) **NOTICE:** 
-   If any local additions need to be added to the template1 database during the installation, restore the output of  **gs\_restore**  into an empty database with caution. Otherwise, you are likely to obtain errors due to duplicate definitions of the added objects. To create an empty database without any local additions, copy data from template0 rather than template1. Example:
```
CREATE DATABASE foo WITH TEMPLATE template0;
```
-   **gs\_restore**  cannot import large objects selectively. For example, it can only import the objects of a specified table. If an archive contains large objects, all large objects will be imported, or none of them will be restored if they are excluded by using  **-L**,  **-t**, or other parameters.

![](public_sys-resources/icon-note.gif) **NOTE:**   
1. The  **-d/--dbname**  and  **-f/--file**  parameters do not coexist.  
2. The  **-s/--schema-only**  and  **-a/--data-only**  parameters do not coexist.  
3. The  **-c/--clean**  and  **-a/--data-only**  parameters do not coexist.  
4. When  **--single-transaction**  is used,  **-j/--jobs**  must be a single job.  
5.  **--role**  must be used in conjunction with  **--rolepassword**.  

Connection parameters:

-   -h, --host=HOSTNAME

    Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the  _PGHOST_  environment variable. If it is not set, a UNIX domain socket connection is attempted.

    This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

-   -p, --port=PORT

    TCP port or the local Unix-domain socket file extension on which the server is listening for connections. The default value is the  _PGPORT_  environment variable.

    If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the listening port number plus 1.

-   -U, --username=NAME

    Specifies the user name to connect to.

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

-   -W, --password=PASSWORD

    User password for database connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  parameter. If the  **-W**  parameter is not provided and you are not a system administrator,  **gs\_restore**  will ask you to enter a password.

-   --role=ROLENAME

    Specifies a role name for the import operation. If this parameter is selected, the  **SET ROLE**  statement will be issued after  **gs\_restore**  connects to the database. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by  **gs\_restore**. This parameter allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as the initial user. This parameter allows data to be imported without violating the policy.

-   --rolepassword=ROLEPASSWORD

    Role password.


#### Example<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_s87e334fd72aa475782287207b9d7fb79"></a>

Special case: Execute the  **gsql**  tool. Run the following commands to import the  **MPPDB\_backup.sql**  file in the export folder \(in plain-text format\) generated by  **gs\_dump**/**gs\_dumpall**  to the  **postgres**  database:

```
gsql -d postgres -p 5432 -W Bigdata@123 -f /home/omm/test/MPPDB_backup.sql
SET
SET
SET
SET
SET
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
CREATE INDEX
CREATE INDEX
CREATE INDEX
SET
CREATE INDEX
REVOKE
REVOKE
GRANT
GRANT
total time: 30476  ms
```

**gs\_restore**  is used to import the files exported by  **gs\_dump**.

Example 1: Execute the  **gs\_restore**  tool to import the exported  **MPPDB\_backup.dmp**  file \(custom format\) to the  **postgres**  database.

```
gs_restore -W Bigdata@123 backup/MPPDB_backup.dmp -p 5432 -d postgres
gs_restore: restore operation successful
gs_restore: total time: 13053  ms
```

Example 2: Execute the  **gs\_restore**  tool to import the exported  **MPPDB\_backup.tar**  file \(.tar format\) to the  **postgres**  database.

```
gs_restore backup/MPPDB_backup.tar -p 5432 -d postgres 
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21203  ms
```

Example 3: Execute the  **gs\_restore**  tool to import the exported  **MPPDB\_backup**  file \(directory format\) to the  **postgres**  database.

```
gs_restore backup/MPPDB_backup -p 5432 -d postgres
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21003  ms
```

Example 4: Execute the  **gs\_restore**  tool and run the following commands to import the  **MPPDB\_backup.dmp**  file \(in custom format\). Specifically, import all the object definitions and data in the  **PUBLIC**  schema. Existing objects are deleted from the target database before the import. If an existing object references to an object in another schema, you need to manually delete the referenced object first.

```
gs_restore backup/MPPDB_backup.dmp -p 5432 -d postgres -e -c -n PUBLIC
gs_restore: [archiver (db)] Error while PROCESSING TOC:
gs_restore: [archiver (db)] Error from TOC entry 313; 1259 337399 TABLE table1 gaussdba
gs_restore: [archiver (db)] could not execute query: ERROR:  cannot drop table table1 because other objects depend on it
DETAIL:  view t1.v1 depends on table table1
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
    Command was: DROP TABLE public.table1;
```

Manually delete the referenced object and create it again after the import is complete.

```
gs_restore backup/MPPDB_backup.dmp -p 5432 -d postgres -e -c -n PUBLIC
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 2203  ms
```

Example 5: Execute the  **gs\_restore**  tool and run the following commands to import the  **MPPDB\_backup.dmp**  file \(in custom format\). Specifically, import only the definition of  **table1**  in the  **PUBLIC**  schema.

```
gs_restore backup/MPPDB_backup.dmp -p 5432 -d postgres -e -c -s -n PUBLIC -t table1
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21000  ms
```

Example 6: Execute the  **gs\_restore**  tool and run the following commands to import the  **MPPDB\_backup.dmp**  file \(in custom format\). Specifically, import only the data of  **table1**  in the  **PUBLIC**  schema.

```
gs_restore backup/MPPDB_backup.dmp -p 5432 -d postgres -e -a -n PUBLIC -t table1
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 20203  ms
```

# Flashback Restoration

Flashback restoration is a part of the database recovery technology. It can be used to selectively cancel the impact of a committed transaction and restore data from incorrect manual operations. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup and PITR. The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the submitted data before the database is modified. The restoration time is irrelevant to the database size.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>The Astore engine does not support the flashback function.

## Flashback Query<a name="EN-US_TOPIC_0000001101515352"></a>

### Context<a name="section028145412219"></a>

Flashback query enables you to query a snapshot of a table at a certain time point in the past. This feature can be used to view and logically rebuild damaged data that is accidentally deleted or modified. The flashback query is based on the MVCC mechanism. You can retrieve and query the old version to obtain the data of the specified old version.

### Prerequisites

- The **undo_retention_time** parameter has been set for specifying the retention period of undo logs.

### Syntax<a name="section1489051111232"></a>

```
{[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
[ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
[TIMECAPSULE { TIMESTAMP | CSN } expression ]
|( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
|with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
|function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
|function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
|from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
```

In the syntax tree,  **TIMECAPSULE \{TIMESTAMP | CSN\} expression**  is a new expression for the flashback function.  **TIMECAPSULE**  indicates that the flashback function is used.  **TIMESTAMP**  and  **CSN**  indicate that the flashback function uses specific time point information or commit sequence number \(CSN\) information.

### Parameter Description<a name="section1446502852320"></a>

-   TIMESTAMP
    -   Specifies a history time point of the table data to be queried.


-   CSN
    -   Specifies a logical commit time point of the data in the entire database to be queried. Each CSN in the database represents a consistency point of the entire database. To query the data under a CSN means to query the data related to the consistency point in the database through SQL statements.


### Examples<a name="section128804136369"></a>

- Example 1:

  ```
  SELECT * FROM t1 TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
  ```

- Example 2:

  ```
  SELECT * FROM t1 TIMECAPSULE CSN 9617;
  ```

- Example 3:

  ```
  SELECT * FROM t1 AS t TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
  ```

- Example 4:

  ```
  SELECT * FROM t1 AS t TIMECAPSULE CSN 9617;
  ```

## Flashback Table<a name="EN-US_TOPIC_0000001101555362"></a>

### Context<a name="section116901421161613"></a>

Flashback table enables you to restore a table to a specific point in time. When only one table or a group of tables are logically damaged instead of the entire database, this feature can be used to quickly restore the table data. Based on the MVCC mechanism, the flashback table deletes incremental data at a specified time point and after the specified time point and retrieves the data deleted at the specified time point and the current time point to restore table-level data.

### Prerequisites

- The **undo_retention_time** parameter has been set for specifying the retention period of undo logs.

### Syntax<a name="section510120469162"></a>

```
TIMECAPSULE TABLE table_name TO { TIMESTAMP | CSN } expression
```

### Examples<a name="section20833135217166"></a>

```
TIMECAPSULE TABLE t1 TO TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
TIMECAPSULE TABLE t1 TO CSN 9617;
```

## Flashback DROP/TRUNCATE<a name="EN-US_TOPIC_0000001148115319"></a>

### Context<a name="section5637175821615"></a>

Flashback drop enables you to restore tables that are dropped by mistake and their auxiliary structures, such as indexes and table constraints, from the recycle bin. Flashback drop is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore dropped tables.

Flashback truncate enables you to restore tables that are truncated by mistake and restore the physical data of the truncated tables and indexes from the recycle bin. Flashback truncate is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore truncated tables.

### Prerequisites<a name="section17975164121712"></a>

-   The  **enable\_recyclebin**  parameter has been set for enabling the recycle bin.
-   The  **recyclebin\_retention\_time**  parameter has been set for specifying the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

### Syntax<a name="section12145151281719"></a>

- Drop a table.

  ```
  DROP TABLE table_name [PURGE]
  ```


- Purge objects in the recycle bin.

  ```
  PURGE { TABLE { table_name }
  | INDEX { index_name }
  | RECYCLEBIN
  }
  ```


- Flash back a dropped table.

  ```
  TIMECAPSULE TABLE { table_name } TO BEFORE DROP [RENAME TO new_tablename]
  ```


- Truncate a table.

  ```
  TRUNCATE TABLE { table_name } [ PURGE ]
  ```

- Flash back a truncated table.

  ```
  TIMECAPSULE TABLE { table_name } TO BEFORE TRUNCATE
  ```


### Parameter Description<a name="section16105182016179"></a>

-   DROP/TRUNCATE TABLE table\_name PURGE
    -   Purges table data in the recycle bin by default.


- PURGE RECYCLEBIN

  -   Purges objects in the recycle bin.

- **TO BEFORE DROP**

  Retrieves dropped tables and their subobjects from the recycle bin.

  You can specify either the original user-specified name of the table or the system-generated name assigned to the object when it was dropped.

  -   System-generated recycle bin object names are unique. Therefore, if you specify the system-generated name, the database retrieves that specified object. To see the contents of your recycle bin, run  **select  \* from pg\_recyclebin;**.
  -   If you specify the user-specified name and the recycle bin contains more than one object of that name, the database retrieves the object that was moved to the recycle bin most recently. If you want to retrieve an older version of the table, then do one of these things:

      -   Specify the system-generated recycle bin name of the table you want to retrieve.

      -   Run  **TIMECAPSULE TABLE ... TO BEFORE  DROP**  statements until you retrieve the table you want.
  -   When a dropped table is restored, only the base table name is restored, and the names of other subobjects remain the same as those in the recycle bin. You can run the DDL command to manually change the names of subobjects as required.
  -   The recycle bin does not support write operations such as DML, DCL, and DDL, and does not support DQL query operations \(supported in later versions\).
  -   Between the flashback point and the current point, a statement has been executed to modify the table structure or to affect the physical structure. Therefore, the flashback fails. The error message "ERROR: The table definition of %s has been changed." is displayed when flashback is performed on a table where DDL operations have been performed. The error message "ERROR: recycle object %s desired does not exis" is displayed when flashback is performed on DDL operations, such as changing namespaces and table names.

- **RENAME  TO**

  Specifies a new name for the table retrieved from the recycle bin.

- **TO BEFORE TRUNCATE**

  Flashes back to the point in time before the TRUNCATE operation.


### Syntax Example<a name="section19448202620171"></a>

```
DROP TABLE t1 PURGE;

PURGE TABLE t1;
PURGE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE INDEX i1;
PURGE INDEX "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE RECYCLEBIN;

TIMECAPSULE TABLE t1 TO BEFORE DROP;
TIMECAPSULE TABLE t1 TO BEFORE DROP RENAME TO new_t1;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP RENAME TO new_t1;
```

