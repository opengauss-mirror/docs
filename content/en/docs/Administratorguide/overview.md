# Overview<a name="EN-US_TOPIC_0242215084"></a>

For database security purposes, openGauss provides two backup types, multiple backup and restoration solutions, and data reliability assurance mechanisms.

Backup and restoration can be logically or physically performed.

-   Logical backup and restoration: backs up data by logically exporting data. This method can dump data that is backed up at a certain time point, and restore data only to this backup point. A logical backup does not back up data processed between failure occurrence and the last backup. It applies to scenarios where data rarely changes. Such data damaged due to misoperation can be quickly restored using a logical backup. To restore all the data in a database through logical backup, rebuild a database and import the backup data. Logical backup is not recommended for databases requiring high data availability because it takes a long time for data restoration. Logical backup is a major approach to migrate and transfer data because it can be performed on any platform.
-   Physical backup and restoration: copies physical files in the unit of disk blocks from the primary node to the standby node to back up a database. A database can be restored using backup files, such as data files and archive log files. Physical backup is usually used for full backup, quickly backing up and restoring data with low costs if properly planned.

    The two data backup and restoration solutions supported by openGauss are as follows. Methods for restoring data in case of an exception differ for different backup and restoration solutions.

    **Table  1**  Comparison between logical and physical backup and restoration

    <a name="en-us_topic_0237088826_en-us_topic_0100209712_table27885501925"></a>
    <table><thead align="left"><tr id="en-us_topic_0237088826_en-us_topic_0100209712_row14787750721"><th class="cellrowborder" valign="top" width="16.27%" id="mcps1.2.5.1.1"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p778712501020"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p778712501020"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p778712501020"></a>Backup Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.65%" id="mcps1.2.5.1.2"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p137878504210"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p137878504210"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p137878504210"></a>Application Scenario</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.08%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p10787185018220"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p10787185018220"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p10787185018220"></a>Media</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p67873501217"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p67873501217"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p67873501217"></a>Advantage and Disadvantage</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237088826_en-us_topic_0100209712_row13788175014218"><td class="cellrowborder" valign="top" width="16.27%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p878712501822"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p878712501822"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p878712501822"></a>Logical backup and restoration</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.65%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237088826_p123752428539"><a name="en-us_topic_0237088826_p123752428539"></a><a name="en-us_topic_0237088826_p123752428539"></a>Small volume of data needs to be processed.</p>
    <p id="en-us_topic_0237088826_en-us_topic_0100209712_p187871550222"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p187871550222"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p187871550222"></a>Currently, it is used for the backup and restoration of one or more tables.</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="14.08%" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0237088826_ul613420655320"></a><a name="en-us_topic_0237088826_ul613420655320"></a><ul id="en-us_topic_0237088826_ul613420655320"><li>Disk</li><li>SSD</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p1378745012214"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p1378745012214"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p1378745012214"></a>Backing up a small amount of data (for specified objects) is efficient and flexible.</p>
    <p id="en-us_topic_0237088826_en-us_topic_0100209712_p18788105014214"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p18788105014214"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p18788105014214"></a>For a large volume of data, backup requires a long period of time.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237088826_en-us_topic_0100209712_row157883507215"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p18788450327"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p18788450327"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p18788450327"></a>Physical backup and restoration</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237088826_p32893447533"><a name="en-us_topic_0237088826_p32893447533"></a><a name="en-us_topic_0237088826_p32893447533"></a>Huge volume of data needs to be processed. It is mainly used for full backup and restoration as well as the backup and restoration of all WAL archive and run logs in the database.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p278812501020"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p278812501020"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p278812501020"></a>Backing up a huge amount of data is efficient.</p>
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

    There are many factors that need to be considered while you select a backup policy on the live network, such as backup objects, data volume, and network configuration.  [Table 2](#en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218)  lists available backup policies and applicable scenarios for each backup policy.

    **Table  2**  Backup policies and scenarios

    <a name="en-us_topic_0237088826_en-us_topic_0100209712_table1179095017218"></a>
    <table><thead align="left"><tr id="en-us_topic_0237088826_en-us_topic_0100209712_row878975011216"><th class="cellrowborder" valign="top" width="11.29112911291129%" id="mcps1.2.5.1.1"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p87891650728"></a>Backup Policy</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.21242124212421%" id="mcps1.2.5.1.2"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p197897505215"></a>Key Performance Factor</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.951595159515952%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p67894501217"></a>Typical Data Volume</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.544854485448546%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237088826_p15847132035410"><a name="en-us_topic_0237088826_p15847132035410"></a><a name="en-us_topic_0237088826_p15847132035410"></a>Performance Specifications</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237088826_en-us_topic_0100209712_row1678918505219"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p1578914506218"></a>Cluster backup</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"></a><ul id="en-us_topic_0237088826_en-us_topic_0100209712_ul1178955013215"><li>Data amount</li><li>Network configuration</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p137891350921"></a>Data volume: PB level</p>
    <p id="en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p147895501622"></a>Object quantity: about 1 million</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237088826_p89604485347"><a name="en-us_topic_0237088826_p89604485347"></a><a name="en-us_topic_0237088826_p89604485347"></a>Backup:</p>
    <a name="en-us_topic_0237088826_ul19663753143411"></a><a name="en-us_topic_0237088826_ul19663753143411"></a><ul id="en-us_topic_0237088826_ul19663753143411"><li>Data transfer rate on each host: 80 Mbit/s (NBU/EISOO+Disk)</li><li>Disk I/O rate (SSD/HDD): about 90%</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237088826_en-us_topic_0100209712_row8790175018215"><td class="cellrowborder" valign="top" width="11.29112911291129%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p17907501929"></a>Table backup</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.21242124212421%" headers="mcps1.2.5.1.2 "><a name="en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"></a><ul id="en-us_topic_0237088826_en-us_topic_0100209712_ul17901150926"><li>Schema where the table to be backed up resides</li><li>Network configuration (NBU)</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="15.951595159515952%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"><a name="en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a><a name="en-us_topic_0237088826_en-us_topic_0100209712_p779035016210"></a>Data volume: 10 TB level</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.544854485448546%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237088826_p38521820175415"><a name="en-us_topic_0237088826_p38521820175415"></a><a name="en-us_topic_0237088826_p38521820175415"></a>Backup: depends on query performance rate and I/O rate</p>
    <div class="note" id="en-us_topic_0237088826_note12046337427"><a name="en-us_topic_0237088826_note12046337427"></a><a name="en-us_topic_0237088826_note12046337427"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237088826_p1856419442426"><a name="en-us_topic_0237088826_p1856419442426"></a><a name="en-us_topic_0237088826_p1856419442426"></a>For multi-table backup, the backup time is calculated as follows:</p>
    <pre class="screen" id="en-us_topic_0237088826_screen10251104105812"><a name="en-us_topic_0237088826_screen10251104105812"></a><a name="en-us_topic_0237088826_screen10251104105812"></a>Total time = Number of tables x Starting time + Total data volume/Data backup speed</pre>
    <p id="en-us_topic_0237088826_p177603013578"><a name="en-us_topic_0237088826_p177603013578"></a><a name="en-us_topic_0237088826_p177603013578"></a>In the preceding information:</p>
    <a name="en-us_topic_0237088826_ul940073335719"></a><a name="en-us_topic_0237088826_ul940073335719"></a><ul id="en-us_topic_0237088826_ul940073335719"><li>The starting time of a disk is about 5s. The starting time of an NBU is longer than that of a disk (depending on the NBU deployment).</li><li>The data backup speed is about 50 MB/s on a single node. (The speed is evaluated based on the backup of a 1 GB table from a physical host to a local disk.)</li></ul>
    <p id="en-us_topic_0237088826_p92312954310"><a name="en-us_topic_0237088826_p92312954310"></a><a name="en-us_topic_0237088826_p92312954310"></a>The smaller the table is, the lower the backup performance will be.</p>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>


