# Overview<a name="EN-US_TOPIC_0289897023"></a>

For database security purposes, openGauss provides three backup types, multiple backup and restoration solutions, and data reliability assurance mechanisms.

Backup and restoration can be classified into logical backup and restoration and flashback restoration.

-   Logical backup and restoration: backs up data by logically exporting data. This method can dump data that is backed up at a certain time point, and restore data only to this backup point. Logical backup does not back up data processed between failure occurrence and the last backup. It is suitable when data rarely changes. If such data is damaged due to misoperations, it can be quickly restored through logical backup. To restore all the data in a database through logical backup, rebuild a database and import the backup data. Logical backup is not recommended for databases requiring high data availability because it takes a long time for data restoration. Logical backup is a major approach to migrate and transfer data because it can be performed on any platform.
-   Flashback restoration: This function is used to restore dropped tables from the recycle bin. Like in a Window OS, dropped tables are stored in the recycle bin of databases. The MVCC mechanism is used to restore data to a specified point in time or change sequence number (CSN).

    The three data backup and restoration solutions supported by openGauss are as follows. Methods for restoring data in case of an exception differ for different backup and restoration solutions.

    **Table 1** Comparison between logical backup and restoration and flashback restoration

    <a name="table47805644419"></a>
    <table><thead align="left"><tr id="row1778011634414"><th class="cellrowborder" valign="top" width="12.5874825034993%" id="mcps1.2.7.1.1"><p id="p4543144810507"><a name="p4543144810507"></a><a name="p4543144810507"></a><strong>Backup Type</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="18.646270745850828%" id="mcps1.2.7.1.2"><p id="p85431248115015"><a name="p85431248115015"></a><a name="p85431248115015"></a><strong>Application Scenario</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="8.568286342731454%" id="mcps1.2.7.1.3"><p id="p14543104885016"><a name="p14543104885016"></a><a name="p14543104885016"></a><strong>Media Supported</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="9.738052389522096%" id="mcps1.2.7.1.4"><p id="p25431848175010"><a name="p25431848175010"></a><a name="p25431848175010"></a><strong>Tool</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="15.376924615076984%" id="mcps1.2.7.1.5"><p id="p14543848115016"><a name="p14543848115016"></a><a name="p14543848115016"></a><strong>Restoration Time</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="35.08298340331933%" id="mcps1.2.7.1.6"><p id="p5543194885017"><a name="p5543194885017"></a><a name="p5543194885017"></a><strong>Advantage and Disadvantage</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row87801664419"><td class="cellrowborder" rowspan="2" valign="top" width="12.5874825034993%" headers="mcps1.2.7.1.1 "><p id="p444519819513"><a name="p444519819513"></a><a name="p444519819513"></a>Logical backup and restoration</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="18.646270745850828%" headers="mcps1.2.7.1.2 "><p id="p4445198155115"><a name="p4445198155115"></a><a name="p4445198155115"></a>Small volume of data needs to be processed.</p>
    <p id="p134452815118"><a name="p134452815118"></a><a name="p134452815118"></a>You can back up a single table, multiple tables, a single database, or all databases. The backup data needs to be restored using gsql or gs_restore. When the data volume is large, the restoration takes a long time.</p>
    </td>
    <td class="cellrowborder" rowspan="6" valign="top" width="8.568286342731454%" headers="mcps1.2.7.1.3 "><p id="p13519154155315"><a name="p13519154155315"></a><a name="p13519154155315"></a>Disk</p>
    <p id="p175191540534"><a name="p175191540534"></a><a name="p175191540534"></a>SSD</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.738052389522096%" headers="mcps1.2.7.1.4 "><p id="p4242171416513"><a name="p4242171416513"></a><a name="p4242171416513"></a>gs_dump</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.376924615076984%" headers="mcps1.2.7.1.5 "><p id="p224211413513"><a name="p224211413513"></a><a name="p224211413513"></a>It takes a long time to restore data in plain-text format. It takes a moderate time to restore data in archive format.</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.08298340331933%" headers="mcps1.2.7.1.6 "><p id="p22427143514"><a name="p22427143514"></a><a name="p22427143514"></a>This tool is used to export database information. Users can export a database or its objects (such as schemas, tables, and views). The database can be the default <strong>postgres</strong> database or a user-specified database. The exported file can be in plain-text format or archive format. Data in plain-text format can be restored only by using gsql, which takes a long time. Data in archive format can be restored only by using gs_restore. The restoration time is shorter than that for the plain-text format.</p>
    </td>
    </tr>
    <tr id="row97805664417"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p152421514195112"><a name="p152421514195112"></a><a name="p152421514195112"></a>gs_dumpall</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p1024291445116"><a name="p1024291445116"></a><a name="p1024291445116"></a>It takes a long time to restore data.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p224201425115"><a name="p224201425115"></a><a name="p224201425115"></a>This tool is used to export all information of the <span id="text1033411183119"><a name="text1033411183119"></a><a name="text1033411183119"></a>openGauss</span>database, including the data of the default <strong>postgres</strong> database, data of user-specified databases, and global objects of all <span id="text445811215313"><a name="text445811215313"></a><a name="text445811215313"></a>openGauss</span>databases.</p>
    <p id="p124201415112"><a name="p124201415112"></a><a name="p124201415112"></a>Only data in plain-text format can be exported. The exported data can be restored only by using gsql, which takes a long time.</p>
    </td>
    </tr>
    <tr id="row18629729105219"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="p11289403528"><a name="p11289403528"></a><a name="p11289403528"></a>Flashback restoration</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="p1912814019529"><a name="p1912814019529"></a><a name="p1912814019529"></a>Applicable to:</p>
    <p id="p111281040155215"><a name="p111281040155215"></a><a name="p111281040155215"></a>1. A table is deleted by mistake.</p>
    <p id="p9128184012524"><a name="p9128184012524"></a><a name="p9128184012524"></a>2. Data in a table needs to be restored to a specified time point or CSN.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="p41281540175218"><a name="p41281540175218"></a><a name="p41281540175218"></a>None</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="p1612834011522"><a name="p1612834011522"></a><a name="p1612834011522"></a>You can restore a table to the state at a specified time point or before the table structure is deleted. The restoration takes a short time.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="p1512804015522"><a name="p1512804015522"></a><a name="p1512804015522"></a>The flashback technology can selectively and efficiently undo the impact of a committed transaction and recover from a human error. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup or point-in-time recovery (PITR). The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the committed data before the database is modified. The restoration time is irrelevant to the database size.</p>
    <p id="p15128740165210"><a name="p15128740165210"></a><a name="p15128740165210"></a>Flashback supports two restoration modes:</p>
    <a name="ul15128740175218"></a><a name="ul15128740175218"></a><ul id="ul15128740175218"><li>Multi-version data restoration based on MVCC: This method is applicable to the query and restoration of data that is deleted, updated, or inserted by mistake. You can configure the retention period of the old version and run the corresponding query or restoration command to query or restore data to a specified time point or CSN. </li><li>Recovery based on the recycle bin (similar to that on Windows OS): This method is applicable to the restoration of tables that are dropped or truncated by mistake. You can configure the recycle bin switch and run the corresponding restoration command to restore the tables that are dropped or truncated by mistake.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>
    
    
    While backing up and restoring data, take the following aspects into consideration:
    
    -   Ensure that the backup impact on services is within an acceptable scope.
    -   Database restoration efficiency.
    
        To minimize the impact of database faults, minimize the restoration time to maximize the restoration efficiency.
    
    -   Data restorability
    
        If a database fails, try to minimize the data loss.
    
    -   Database restoration cost
    
    There are many factors that need to be considered while you select a backup policy on the live network, such as backup objects, data volume, and network configuration. [Table 2](#en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218) lists available backup policies and applicable scenarios for each backup policy.
    
    **Table 2** Typical scenarios of backup policies
    
    <a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218"></a>
    <table><thead align="left"><tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row878975011216"><th class="cellrowborder" valign="top" width="11.29112911291129%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a><strong id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b0789750629"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b0789750629"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b0789750629"></a><strong>Backup Policy</strong></strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="24.21242124212421%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a><strong id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b7789550226"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b7789550226"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b7789550226"></a><strong>Key Performance Factor</strong></strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="15.951595159515952%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a><strong id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b1178912508215"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b1178912508215"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_b1178912508215"></a><strong>Typical Data Volume</strong></strong></p>
</th>
    <th class="cellrowborder" valign="top" width="48.544854485448546%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p15847132035410"></a><strong id="en-us_topic_0283140581_en-us_topic_0237088826_b11848182019545"><a name="en-us_topic_0283140581_en-us_topic_0237088826_b11848182019545"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_b11848182019545"></a><strong>Performance Specifications</strong></strong></p>
</th>
    </tr>
    </thead>
<tbody><tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row1678918505219"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a>Database instance backup</p>
    </td>
<td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"><li><span>Data size</span></li><li><span>Network configuration</span></li></ul>
    </td>
<td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a>Data: PB level</p>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a>Objects: about 1 million</p>
</td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p89604485347"></a>Backup:</p>
<a name="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_ul19663753143411"><li><span>Data transfer rate on each host: 80 Mbit/s (NBU/EISOO + Disk)</span></li><li><span>Disk I/O rate (SSD/HDD): about 90%</span></li></ul>
    </td>
</tr>
    <tr id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_row8790175018215"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a>Table backup</p>
</td>
    <td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"><li><span>Schema where the table to be backed up resides</span></li><li>Network configuration (NBU)</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a>Data: 10 TB level</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p38521820175415"></a> Backup: depends on query performance rate and I/O rate.</p>
    <div class="note" id="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"><a name="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_note12046337427"></a><span class="notetitle"> Note: </span><div class="notebody"><p id="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p1856419442426"></a>For multi-table backup, the backup time is calculated as follows:</p>
    <pre class="screen" id="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"><a name="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_screen10251104105812"></a>Total time = Number of tables x Starting time + Total data volume/Data backup speed</pre>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p177603013578"></a>In which:</p>
    <a name="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"></a><ul id="en-us_topic_0283140581_en-us_topic_0237088826_ul940073335719"><li>The starting time of a disk is about 5s. The starting time of an NBU is longer than that of a disk (depending on the NBU deployment). </li><li>The data backup speed is about 50 MB/s on a single node. (The speed is evaluated based on the backup of a 1 GB table from a physical host to a local disk.)</li></ul>
    <p id="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"><a name="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"></a><a name="en-us_topic_0283140581_en-us_topic_0237088826_p92312954310"></a>The smaller the table is, the lower the backup performance will be.</p>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>
