# Overview<a name="EN-US_TOPIC_0289899921"></a>

openGauss provides  **gs\_dump**  and  **gs\_dumpall**  to export required database objects and related information. You can use a tool to import the exported data to a target database for database migration.  **gs\_dump**  exports a single database or its objects.  **gs\_dumpall**  exports all databases or global objects in  openGauss. For details, see  [Table 1](#en-us_topic_0283136743_en-us_topic_0237121167_table08278213504).

**Table  1**  Scenarios

<a name="en-us_topic_0283136743_en-us_topic_0237121167_table08278213504"></a>
<table><thead align="left"><tr id="en-us_topic_0283136743_en-us_topic_0237121167_row2831521105012"><th class="cellrowborder" valign="top" width="12.97%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136743_en-us_topic_0237121167_p18835192113509"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p18835192113509"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p18835192113509"></a>Application Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="41.61%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136743_en-us_topic_0237121167_p13836621145020"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p13836621145020"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p13836621145020"></a>Export Granularity</p>
</th>
<th class="cellrowborder" valign="top" width="16.1%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136743_en-us_topic_0237121167_p1212911301660"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1212911301660"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1212911301660"></a>Export Format</p>
</th>
<th class="cellrowborder" valign="top" width="29.32%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136743_en-us_topic_0237121167_p1996105810478"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1996105810478"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1996105810478"></a>Import Method</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136743_en-us_topic_0237121167_row139011427201518"><td class="cellrowborder" rowspan="3" valign="top" width="12.97%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p1190212731520"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1190212731520"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1190212731520"></a>Exporting a single database</p>
</td>
<td class="cellrowborder" valign="top" width="41.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p21091513163"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p21091513163"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p21091513163"></a><a href="exporting-a-database.md">Database-level export</a></p>
<a name="en-us_topic_0283136743_en-us_topic_0237121167_ul118341222101716"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul118341222101716"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul118341222101716"><li>Export full information.<p id="en-us_topic_0283136743_en-us_topic_0237121167_p24138391172"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p24138391172"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p24138391172"></a>You can use the exported information to create a database containing the same data as the current one.</p>
</li><li>Export all object definitions of a database, including the definitions of the database, functions, schemas, tables, indexes, and stored procedures.<p id="en-us_topic_0283136743_en-us_topic_0237121167_p12620187198"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p12620187198"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p12620187198"></a>You can use the exported object definitions to quickly create a database that is the same as the current one, except that the new database does not have data.</p>
</li><li>Export data only.</li></ul>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="16.1%" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul6884122713717"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul6884122713717"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul6884122713717"><li>Plaintext</li><li>Custom</li><li>Directory</li><li>.tar</li></ul>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="29.32%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul3303122921718"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul3303122921718"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul3303122921718"><li>For details about how to import data files in text format, see <a href="using-a-gsql-meta-command-to-import-data.md">Using a gsql Meta-Command to Import Data</a>.</li><li>For details about how to import data files in .tar, directory, or custom format, see <a href="using-gs_restore-to-import-data.md">Using gs_restore to Import Data</a>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136743_en-us_topic_0237121167_row14846172111503"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p1591231313911"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1591231313911"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1591231313911"></a><a href="exporting-a-schema.md">Schema-level export</a></p>
<a name="en-us_topic_0283136743_en-us_topic_0237121167_ul1168718192398"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul1168718192398"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul1168718192398"><li>Export full information of a schema.</li><li>Export data of a schema.</li><li>Export all object definitions of a schema, including the definitions of tables, stored procedures, and indexes.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136743_en-us_topic_0237121167_row1799102615586"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><div class="p" id="en-us_topic_0283136743_en-us_topic_0237121167_p11531183413323"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p11531183413323"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p11531183413323"></a><a href="exporting-a-table.md">Table-level export</a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul1315583911272"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul1315583911272"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul1315583911272"><li>Export full information of a table.</li><li>Export data of a table.</li><li>Export the definition of a table.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136743_en-us_topic_0237121167_row897814336119"><td class="cellrowborder" rowspan="2" valign="top" width="12.97%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p1982611595111"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1982611595111"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1982611595111"></a>Exporting all databases</p>
</td>
<td class="cellrowborder" valign="top" width="41.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p04581552191112"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p04581552191112"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p04581552191112"></a><a href="exporting-all-databases-9.md">Database-level export</a></p>
<a name="en-us_topic_0283136743_en-us_topic_0237121167_ul85791032162816"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul85791032162816"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul85791032162816"><li>Export full information.<p id="en-us_topic_0283136743_en-us_topic_0237121167_p1058243202816"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1058243202816"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1058243202816"></a>You can use the exported information to create a host environment containing the same databases, global objects, and data as the current one.</p>
</li><li>Export all object definitions of a database, including the definitions of tablespaces, databases, functions, schemas, tables, indexes, and stored procedures.<p id="en-us_topic_0283136743_en-us_topic_0237121167_p958623215282"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p958623215282"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p958623215282"></a>You can use the exported object definitions to quickly create a host environment that is the same as the current one, containing the same databases and tablespaces but no data.</p>
</li><li>Export data only.</li></ul>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="16.1%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p79781033141112"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p79781033141112"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p79781033141112"></a>Plaintext</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="29.32%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136743_en-us_topic_0237121167_p4978533161118"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p4978533161118"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p4978533161118"></a>For details about how to import data files, see <a href="using-a-gsql-meta-command-to-import-data.md">Using a gsql Meta-Command to Import Data</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136743_en-us_topic_0237121167_row77541130171112"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><div class="p" id="en-us_topic_0283136743_en-us_topic_0237121167_p1914077194118"><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1914077194118"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_p1914077194118"></a><a href="exporting-all-databases.md">Global object export</a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul181421273418"></a><a name="en-us_topic_0283136743_en-us_topic_0237121167_ul181421273418"></a><ul id="en-us_topic_0283136743_en-us_topic_0237121167_ul181421273418"><li>Export tablespaces.</li><li>Export roles.</li><li>Export tablespaces and roles.</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

**gs\_dump**  and  **gs\_dumpall**  use  **-U**  to specify the user that performs the export. If the specified user does not have the required permissions, data cannot be exported. In this case, you can set  **--role**  in the  **gs\_dump**  or  **gs\_dumpall**  command to the role that has the permissions. Then,  **gs\_dump**  or  **gs\_dumpall**  uses the specified role to export data. See  [Data Export By a User Without Required Permissions](data-export-by-a-user-without-required-permissions.md)  for application scenarios and  [Table 1](#en-us_topic_0283136743_en-us_topic_0237121167_table08278213504)  for operation details.

**gs\_dump**  and  **gs\_dumpall**  encrypt the exported data files. These files are decrypted before being imported. In this way, data disclosure is prevented, protecting database security. Note that if the exported database contains stored procedures, you cannot use the  **gsql**  command to restore the plain-text file encrypted using  **gs\_dump**. In this case, use the other three modes to export the database and use  **gs\_restore **to restore the database.

When  **gs\_dump**  or  **gs\_dumpall**  is used to export data, other users can still access \(read and write\) the databases.

**gs\_dump**  and  **gs\_dumpall**  can export complete, consistent data. For example, if  **gs\_dump**  is executed to export database A or  **gs\_dumpall**  is executed to export all databases from openGauss at T1, data of database A or all databases in openGauss at that time point will be exported, and modifications on the databases after that time point will not be exported.

## Precautions<a name="en-us_topic_0283136743_en-us_topic_0237121167_section969916571299"></a>

-   Do not modify an exported file or its content. Otherwise, restoration may fail.
-   If there are more than 500,000 objects \(data tables, views, and indexes\) in a database, you are advised to use  **gs\_guc**  to set the following parameters for database nodes. This operation is not required if the parameter values are greater than the recommended ones.

    ```
    gs_guc set  -D /gaussdb/data/datanode -c 'max_prepared_transactions = 1000'
    gs_guc set  -D /gaussdb/data/datanode -c 'max_locks_per_transaction = 512'
    ```

-   For data consistency and integrity,  **gs\_dump**  and  **gs\_dumpall**  set a share lock for a table to dump. If a share lock has been set for the table in other transactions,  **gs\_dump**  and  **gs\_dumpall**  lock the table after it is released. If the table cannot be locked within the specified time, the dump fails. You can customize the timeout duration to wait for lock release by specifying the  **--lock-wait-timeout**  parameter.
-   During an export,  **gs\_dumpall**  reads all tables in a database. Therefore, you need to connect to the database as openGauss administrator to export a complete file. When you use  **gsql**  to execute SQL scripts, administrator permissions are also required to add users and user groups, and create databases.

