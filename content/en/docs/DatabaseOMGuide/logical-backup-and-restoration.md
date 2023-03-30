# Logical Backup and Restoration


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

![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   
To reduce the size of an exported file, you can use the gs\_dump tool to compress it to a directory archive file or custom-format file. When a directory archive or custom-format archive is generated, a medium level of compression is applied by default. Archived exported files cannot be compressed using  **gs\_dump**.



#### Precautions<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s75e900efd4f04a2bb39914ec1d8f971f"></a>

-   Do not modify an exported file or its content. Otherwise, restoration may fail.
-   To ensure the data consistency and integrity,  **gs\_dump**  acquires a share lock on a table to be dumped. If another transaction has acquired a share lock on the table,  **gs\_dump**  waits until this lock is released and then locks the table for dumping. If the table cannot be locked within the specified time, the dump fails. You can customize the timeout duration to wait for lock release by specifying the  **--lock-wait-timeout**  option.
-   Stored procedures and functions cannot be exported in encrypted mode.



#### Syntax<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s884f9e03cedd408cbe7ce5303df97df6"></a>

```
gs_dump [OPTION]... [DBNAME]
```

![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   
*DBNAME*  does not follow a short or long option. It specifies the database to be connected.  
For example:  
Specify  *DBNAME*  without a  **-d**  option preceding it.

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

Environment variable:  *PGDATABASE*



#### Parameter Description<a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_s6822518f650f4ad4ab67d1084cd8ffdd"></a>

Common parameters

- -f, --file=FILENAME

  Sends the output to the specified file or directory. If this parameter is omitted, the standard output is generated. If the output format is  **\(-F c/-F d/-F t\)**, the  **-f**  parameter must be specified. If the value of the  **-f**  parameter contains a directory, the current user must have the read and write permissions on the directory, and the directory cannot be an existing one.

- -F, --format=c|d|t|p

  Selects the exported file format. The format can be:

  - **p|plain**: Generates a text SQL script file. This is the default value.

  - **c|custom**: Outputs a custom-format archive as a directory to be used as the input of  **gs\_restore**. This is the most flexible output format in which users can manually select it and reorder the archived items during restoration. An archive in this format is compressed by default.

  - **d|directory**: Creates a directory containing directory files and the data files of tables and BLOBs.

  - **t|tar**: Outputs a .tar archive as the input of  **gs\_restore**. The .tar format is compatible with the directory format. Extracting a .tar archive generates a valid directory-format archive. However, the .tar archive cannot be further compressed and has an 8-GB limitation on the size of a single table. The order of table data items cannot be changed during restoration.

    A .tar archive can be used as input of  **gsql**.


- -v, --verbose

  Specifies the verbose mode. If it is specified,  **gs\_dump**  writes detailed object comments and the number of startups/stops to the dump file, and progress messages to standard error.

- -V, --version

  Prints the  **gs\_dump**  version and exits.

- -Z, --compress=0-9

  Specifies the used compression level.

  Value range: 0-9

  -   **0**  indicates no compression.
  -   **1**  indicates that the compression ratio is the lowest and processing speed the fastest.
  -   **9**  indicates that the compression ratio is the highest and processing speed the slowest.

  For the custom-format archive, this option specifies the compression level of a single table data segment. By default, data is compressed at a medium level. The plain-text and .tar archive formats do not support compression currently.

- --lock-wait-timeout=TIMEOUT

  Do not keep waiting to obtain shared table locks since the beginning of the dump. Consider it as failed if you are unable to lock a table within the specified time. The timeout period can be specified in any of the formats accepted by  **SET statement\_timeout**.

- -?, --help

  Displays help about  **gs\_dump**  parameters and exits.


Dump parameters:

- -a, --data-only

  Generates only the data, not the schema \(data definition\). Dump the table data, big objects, and sequence values.

- -b, --blobs

  Specifies a reserved port for function expansion. This parameter is not recommended.

- -c, --clean

  Before writing the command of creating database objects into the backup file, writes the command of clearing \(deleting\) database objects to the backup files. \(If no objects exist in the target database,  **gs\_restore**  probably displays some error information.\)

  This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

- -C, --create

  The backup file content starts with the commands of creating the database and connecting to the created database. \(If the command script is executed in this mode, you can specify any database to run the command for creating a database. The data is restored to the created database instead of the specified database.\)

  This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

- -E, --encoding=ENCODING

  Creates a dump file in the specified character set encoding. By default, the dump file is created in the database encoding. \(Alternatively, you can set the environment variable  **PGCLIENTENCODING**  to the required dump encoding.\)

- -n, --schema=SCHEMA

  Dumps only schemas matching the schema names. This option contains the schema and all its contained objects. If this option is not specified, all non-system schemas in the target database will be dumped. Multiple schemas can be selected by specifying multiple  **-n**  options. The schema parameter is interpreted as a pattern according to the same rules used by the  **\\d**  command of  **gsql**. Therefore, multiple schemas can also be selected by writing wildcard characters in the pattern. When you use wildcard characters, quote the pattern to prevent the shell from expanding the wildcard characters.

  ![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**     

  -   If  **-n**  is specified,  **gs\_dump**  does not dump any other database objects which the selected schemas might depend upon. Therefore, there is no guarantee that the results of a specific-schema dump can be automatically restored to an empty database.  
  -   If  **-n**  is specified, the non-schema objects are not dumped.  

  Multiple schemas can be dumped. Entering  **-n ***schemaname*  multiple times dumps multiple schemas.

  For example:

  ```
  gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -n sch1 -n sch2
  ```

  In the preceding example,  **sch1**  and  **sch2**  are dumped.

- -N, --exclude-schema=SCHEMA

  Does not dump any schemas matching the schemas pattern. The pattern is interpreted according to the same rules as for  **-n**.  **-N**  can be specified multiple times to exclude schemas matching any of the specified patterns.

  When both  **-n**  and  **-N**  are specified, the schemas that match at least one  **-n**  option but no  **-N**  is dumped. If  **-N**  is specified and  **-n**  is not, the schemas matching  **-N**  are excluded from what is normally dumped.

  Dump allows you to exclude multiple schemas during dumping.

  Specify  **-N exclude schema name**  to exclude multiple schemas during dumping.

  For example:

  ```
  gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -N sch1 -N sch2
  ```

  In the preceding example,  **sch1**  and  **sch2**  will be excluded during the dumping.

- -o, --oids

  Dumps object identifiers \(OIDs\) as parts of the data in each table. Use this option if your application references the OID columns in some way. If the preceding situation does not occur, do not use this parameter.

- -O, --no-owner

  Do not output commands to set ownership of objects to match the original database. By default,  **gs\_dump**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  statement to set ownership of created database objects. These statements will fail when the script is running unless it is started by a system administrator \(or the same user that owns all of the objects in the script\). To make a script that can be stored by any user and give the user ownership of all objects, specify  **-O**.

  This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

- <a name="en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd"></a>-s, --schema-only

  Dumps only the object definition \(schema\) but not data.

- -S, --sysadmin=NAME

  Specifies a reserved port for function expansion. This parameter is not recommended.

- -t, --table=TABLE

  Specifies a list of tables, views, sequences, or foreign tables to be dumped. You can use multiple  **-t**  parameters or wildcard characters to specify tables.

  When you use wildcard characters, quote patterns to prevent the shell from expanding the wildcard characters.

  The  **-n**  and  **-N**  options have no effect when  **-t**  is used, because tables selected by using  **-t**  will be dumped regardless of those options.

  ![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   

  -   The number of  **-t**  parameters must be less than or equal to 100.  
  -   If the number of  **-t**  parameters is greater than 100, you are advised to use the  **--include-table-file**  parameter to replace some  **-t**  parameters.  
  -   If  **-t**  is specified,  **gs\_dump**  does not dump any other database objects which the selected tables might depend upon. Therefore, there is no guarantee that the results of a specific-table dump can be automatically restored to an empty database.  
  -   **-t tablename**  only dumps visible tables in the default search path.  **-t '\*.tablename'**  dumps  *tablename*  tables in all the schemas of the dumped database.  **-t schema.table**  dumps tables in a specific schema.  
  -   **-t tablename**  does not export trigger information from a table.  



    For example:
    
    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -t schema1.table1 -t schema2.table2
    ```
    
    In the preceding example,  **schema1.table1**  and  **schema2.table2**  are dumped.

- --include-table-file=FILENAME

  Specifies the table file to be dumped.

- -T, --exclude-table=TABLE

  Specifies a list of tables, views, sequences, or foreign tables not to be dumped. You can use multiple  **-T**  parameters or wildcard characters to specify tables.

  When  **-t**  and  **-T**  are input, the object will be stored in  **-t**  list not  **-T**  table object. 

  For example:

  ```
  gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -T table1 -T table2
  ```

  In the preceding example,  **table1**  and  **table2**  are excluded from the dumping.

- --exclude-table-file=FILENAME

  Specifies the table files that do not need to be dumped.

  ![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   
  Same as  **--include-table-file**, the content format of this parameter is as follows:  
  schema1.table1
  schema2.table2
  ......

- -x, --no-privileges|--no-acl

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

- --binary-upgrade

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --binary-upgrade-usermap="USER1=USER2"

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --column-inserts|--attribute-inserts

  Exports data by running the  **INSERT**  command with explicit column names  **\{INSERT INTO table \(column, ...\) VALUES ...\}**. This will cause a slow restoration. However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content.

- --disable-dollar-quoting

  Disables the use of dollar sign \($\) for function bodies, and forces them to be quoted using the SQL standard string syntax.

- --disable-triggers

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --exclude-table-data=TABLE

  Does not dump data that matches any of table patterns. The pattern is interpreted according to the same rules as for  **-t**.

  **--exclude-table-data**  can be entered more than once to exclude tables matching any of several patterns. When you need the specified table definition rather than data in the table, this option is helpful.

  To exclude data of all tables in the database, see  [--schema-only](#en-us_topic_0249632271_en-us_topic_0237152335_en-us_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd).

- --inserts

  Dumps data by the  **INSERT**  statement \(rather than  **COPY**\). This will cause a slow restoration.

  However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content. The restoration may fail if you rearrange the column order. The  **--column-inserts**  option is unaffected against column order changes, though even slower.

- --no-publications

  No dump publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No dump subscriptions are performed.

- --no-tablespaces

  Does not issue commands to select tablespaces. All the objects will be created during restoration, no matter which tablespace is selected when using this option.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-tablespaces

  Does not issue commands to select tablespaces. All the objects will be created during restoration, no matter which tablespace is selected when using this option.

  This parameter is used only for the plain-text format. For the archive format, you can specify the option when using  **gs\_restore**.

- --no-unlogged-table-data

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --non-lock-table

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --include-alter-table

  Dumps deleted columns of tables. This option records deleted columns.

- --quote-all-identifiers

  Forcibly quotes all identifiers. This parameter is useful when you dump a database for migration to a later version, in which additional keywords may be introduced.

- --section=SECTION

  Specifies dumped name sections \(pre-data, data, or post-data\).

- --serializable-deferrable

  Uses a serializable transaction for the dump to ensure that the used snapshot is consistent with later database status. Perform this operation at a time point in the transaction flow, at which everything is normal. This ensures successful transaction and avoids serialization failures of other transactions, which requires serialization again.

  This option has no benefits for disaster recovery. During the upgrade of the original database, loading a database copy as a report or loading other shared read-only dump is helpful. If the option does not exist, dump reveals a status which is different from the submitted sequence status of any transaction.

  This option will make no difference if there are no active read-write transactions when  **gs\_dump**  is started. If the read-write transactions are in active status, the dump start time will be delayed for an uncertain period.

- --use-set-session-authorization

  Specifies that the standard SQL  **SET SESSION AUTHORIZATION**  command rather than  **ALTER OWNER**  is returned to ensure the object ownership. This makes dumping more standard. However, if a dump file contains objects that have historical problems, restoration may fail. A dump using  **SET SESSION AUTHORIZATION**  requires the system administrator permissions, whereas  **ALTER OWNER**  requires lower permissions.

- --with-encryption=AES128

  Specifies that dumping data needs to be encrypted using AES128.

- --with-key=KEY

  The AES128 key rules are as follows:

  -   Consists of 8 to 16 characters.

- Contains at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).

- --with-salt=RANDVALUES

  **gs\_dumpall**  uses this parameter to transfer a random value.

- --include-extensions

  Includes extensions in the dump.

- --include-depend-objs

  Includes information about the objects that depend on the specified object in the backup result. This parameter takes effect only if the  **-t**  or  **--include-table-file**  parameter is specified.

- --exclude-self

  Excludes information about the specified object from the backup result. This parameter takes effect only if the  **-t**  or  **--include-table-file**  parameter is specified.

- --pipeline

  Uses a pipe to transmit the password. This parameter cannot be used on devices.

- --dont-overwrite-file

  The existing files in plain-text, .tar, and custom formats will be overwritten. This option is not used for the directory format.

  For example:

  Assume that the  **backup.sql**  file exists in the current directory. If you specify  **-f backup.sql**  in the input command, and the  **backup.sql**  file is generated in the current directory, the original file will be overwritten.

  If the backup file already exists and  **--dont-overwrite-file**  is specified, an error will be reported with the message that the dump file exists.

  ```
  gs_dump -p port_number postgres -f backup.sql -F plain --dont-overwrite-file
  ```


![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   

-   The  **-s/--schema-only**  and  **-a/--data-only**  parameters do not coexist.  
-   The  **-c/--clean**  and  **-a/--data-only**  parameters do not coexist.  
-   **--inserts/--column-inserts**  and  **-o/--oids**  do not coexist, because  **OIDS**  cannot be set using the  **INSERT**  statement.  
-   **--role**  must be used in conjunction with  **--rolepassword**.  
-   **--binary-upgrade-usermap**  must be used in conjunction with  **--binary-upgrade**.  
-   **--include-depend-objs**  or  **--exclude-self**  takes effect only when  **-t**  or  **--include-table-file**  is specified.  
-   **--exclude-self**  must be used in conjunction with  **--include-depend-objs**.  



Connection parameters:

- -h, --host=HOSTNAME

  Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the  **PGHOST**  environment variable \(if available\). Otherwise, a Unix domain socket connection is attempted. 

  This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

  Example:  *host name*

  Environment variable:  **PGHOST**

- -p, --port=PORT

  Specifies the host port number. If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the host port number plus 1.

  Environment variable:  **PGPORT**

- -U, --username=NAME

  Specifies the username of the host to be connected.

  If the username of the host to be connected is not specified, the system administrator is used by default.

  Environment variable:  **PGUSER**

- -w, --no-password

  Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

- -W, --password=PASSWORD

  Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the Dump Restore tool will ask you to enter a password.

- --role=ROLENAME

  Specifies a role name to be used for creating the dump. If this option is selected, the  **SET ROLE**  command will be issued after the database is connected to  **gs\_dump**. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by  **gs\_dump**. It allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as a super administrator. This option allows dumping data without violating the policy.

- --rolepassword=ROLEPASSWORD

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

In the following examples, **Bigdata@123** indicates the password of the database user. **backup/MPPDB\_backup.sql** indicates an exported file where **backup** indicates the relative path of the current directory. **37300** indicates the port number of the database server. **postgres** indicates the name of the database to be accessed. Before exporting files, ensure that the directory exists and you have the read and write permissions on the directory. 

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

- Back up only the views that depend on the  **testtable**  table.

  ```
  gs_dump -s -p 37300 postgres -t PUBLIC.testtable --include-depend-objs --exclude-self -f backup/MPPDB_backup.sql -F p
  gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: The total objects number is 331.
  gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: [100.00%] 331 objects have been dumped.
  gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: dump database postgres successfully
  gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: total time: 327  ms
  ```

- Change the name of the  **testtable**  table.

  ```
  gsql -p 37300 postgres -r -c "ALTER TABLE PUBLIC.testtable RENAME TO testtable_bak;"
  ```

- Create another  **testtable**  table.

  ```
  CREATE TABLE PUBLIC.testtable(a int, b int, c int);
  ```

- Restore the views for the new  **testtable**  table.

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

- -f, --filename=FILENAME

  Sends the output to the specified file. If this parameter is omitted, the standard output is generated.

- -v, --verbose

  Specifies the verbose mode. If it is specified,  **gs\_dumpall**  writes detailed object comments and number of startups/stops to the dump file, and progress messages to standard error.

- -V, --version

  Prints the  *gs\*dumpall_  version and exits.

- --lock-wait-timeout=TIMEOUT

  Do not keep waiting to obtain shared table locks at the beginning of the dump. Consider it as failed if you are unable to lock a table within the specified time. The timeout period can be specified in any of the formats accepted by  **SET statement\_timeout**.

- -?, --help

  Displays help about  **gs\_dumpall**  parameters and exits.


Dump parameters:

- -a, --data-only

  Dumps only the data, not the schema \(data definition\).

- -c, --clean

  Runs SQL statements to delete databases before rebuilding them. Statements for dumping roles and tablespaces are added.

- -g, --globals-only

  Dumps only global objects \(roles and tablespaces\) but no databases.

- -o, --oids

  Dumps object identifiers \(OIDs\) as parts of the data in each table. Use this parameter if your application references the OID columns in some way. If the preceding situation does not occur, do not use this parameter.

- -O, --no-owner

  Do not output commands to set ownership of objects to match the original database. By default,  **gs\_dumpall**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  command to set ownership of created schema objects. These statements will fail when the script is running unless it is started by a system administrator \(or the same user that owns all of the objects in the script\). To make a script that can be stored by any user and give the user ownership of all objects, specify  **-O**.

- -r, --roles-only

  Dumps only roles but not databases or tablespaces.

- -s, --schema-only

  Dumps only the object definition \(schema\) but not data.

- -S, --sysadmin=NAME

  Name of the system administrator during the dump.

- -t, --tablespaces-only

  Dumps only tablespaces but not databases or roles.

- -x, --no-privileges

  Prevents the dumping of access permissions \(grant/revoke commands\).

- --column-inserts|--attribute-inserts

  Exports data by running the  **INSERT**  command with explicit column names  **\{INSERT INTO table \(column, ...\) VALUES ...\}**. This will cause a slow restoration. However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content.

- --disable-dollar-quoting

  Disables the use of dollar sign \($\) for function bodies, and forces them to be quoted using the SQL standard string syntax.

- --disable-triggers

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --inserts

  Dumps data by the  **INSERT**  statement \(rather than  **COPY**\). This will cause a slow restoration. The restoration may fail if you rearrange the column order. The  **--column-inserts**  option is unaffected against column order changes, though even slower.

- --no-publications

  No dump publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No dump subscriptions are performed.

- --no-tablespaces

  Does not generate output statements to create tablespaces or select tablespaces for objects. All the objects will be created during the restoration process, no matter which tablespace is selected when using this option.

- --no-unlogged-table-data

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --include-alter-table

  Exports information about deleted columns in the table.

- --quote-all-identifiers

  Forcibly quotes all identifiers. This parameter is useful when you dump a database for migration to a later version, in which additional keywords may be introduced.

- --dont-overwrite-file

  Does not overwrite the current file.

- --use-set-session-authorization

  Specifies that the standard SQL  **SET SESSION AUTHORIZATION**  command rather than  **ALTER OWNER**  is returned to ensure the object ownership. This makes dumping more standard. However, if a dump file contains objects that have historical problems, restoration may fail. A dump using  **SET SESSION AUTHORIZATION**  requires the system administrator rights, whereas  **ALTER OWNER**  requires lower permissions.

- --with-encryption=AES128

  Specifies that dumping data needs to be encrypted using AES128.

- --with-key=KEY

  The AES128 key rules are as follows:

  -   Consists of 8 to 16 characters.
  -   Contains at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).

- --include-extensions

  Backs up all CREATE EXTENSION statements if the  **include-extensions**  parameter is set.

- --include-templatedb

  Includes template databases during the dump.

- --binary-upgrade

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --binary-upgrade-usermap="USER1=USER2"

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --non-lock-table

  This parameter is used only by the OM tool.

- --tablespaces-postfix

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --parallel-jobs

  Specifies the number of concurrent backup processes. The value range is 1-1000.

- --pipeline

  Uses a pipe to transmit the password. This parameter cannot be used on devices.


![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   

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

- -h, --host

  Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the PGHOST environment \(if variable\). Otherwise, a Unix domain socket connection is attempted.

  This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

  Environment Variable:  *PGHOST*

- -l, --database

  Specifies the name of the database connected to dump all objects and discover other databases to be dumped. If this parameter is not specified, the  **postgres**  database will be used. If the  **postgres**  database does not exist,  **template1**  will be used.

- -p, --port

  TCP port or the local Unix-domain socket file extension on which the server is listening for connections. The default value is the  *PGPORT*  environment variable.

  If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the listening port number plus 1.

  Environment variable:  *PGPORT*

- -U, --username

  Specifies the user name to connect to.

  Environment variable:  *PGUSER*

- -w, --no-password

  Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

- -W, --password

  Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the Dump Restore tool will ask you to enter a password.

- --role

  Specifies a role name to be used for creating the dump. This option causes  **gs\_dumpall**  to issue the  **SET ROLE**  statement after connecting to the database. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by the  **gs\_dumpall**. It allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as a system administrator. This option allows dumping data without violating the policy.

- --rolepassword

  Specifies the password of the specific role.


#### Notice<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_sc99dfbcba3eb44e59598baa7edd2d140"></a>

**gs\_dumpall**  internally invokes  **gs\_dump**. For details about the diagnosis information, see  gs\_dump.

Once  **gs\_dumpall**  is restored, run ANALYZE on each database so that the optimizer can provide useful statistics.

**gs\_dumpall**  requires all needed tablespace directories to exit before the restoration. Otherwise, database creation will fail if the databases are in non-default locations.

#### Examples<a name="en-us_topic_0249632251_en-us_topic_0237152336_en-us_topic_0059778372_sb56721027dde49e1bf8c5df9685d2f2f"></a>

Use  **gs\_dumpall**  to export all openGauss databases at a time.

![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:** 
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

- Importing data to the database

  If a database is specified, data is imported to the database. For parallel import, the password for connecting to the database is required. During data import, the generated columns are automatically updated and saved as common columns.

- Importing data to the script file

  If the database storing imported data is not specified, a script containing the SQL statement to recreate the database is created and written to a file or standard output. This script output is equivalent to the plain text output format of  **gs\_dump**.


#### Command Format<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_s5a64660d88db4dfb8e2b35d0b4645264"></a>

```
gs_restore [OPTION]... FILE
```

>![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**    
>
>-   **FILE**  does not have a short or long parameter. It is used to specify the location for the archive files.   
>-   The  **dbname**  or  **-l**  parameter is required as prerequisites. Users cannot enter  **dbname**  and  **-l**  parameters at the same time.  
>-   **gs\_restore**  incrementally imports data by default. To prevent data exceptions caused by multiple import operations, you are advised to use the  **-c**  parameter during the import. Before recreating database objects, delete the database objects that already exist in the database to be restored.  
>-   There is no option to control log printing. To hide logs, redirect the logs to the log file. If a large amount of table data needs to be restored, the table data will be restored in batches. Therefore, the log indicating that the table data has been imported is generated for multiple times.  

#### Parameter Description<a name="en-us_topic_0249632267_en-us_topic_0237152343_en-us_topic_0059777561_sc666a8c818084bad8e23afd6e79dd659"></a>

Common parameters

- -d, --dbname=NAME

  Connects to the  **dbname**  database and imports data to the database.

- -f, --file=FILENAME

  Specifies the output file for the generated script, or uses the output file in the list specified using  **-l**.

  The default is the standard output.

  >![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   
  >**-f**  cannot be used in conjunction with  **-d**.  

- -F, --format=c|d|t

  Specifies the format of the archive. The format does not need to be specified because the  *gs\*restore_  determines the format automatically.

  Value range:

  -   **c/custom**: The archive form is the customized format in  gs\_dump.
  -   **d/directory**: The archive form is a directory archive format.
  -   **t/tar**: The archive form is a .tar archive format.

- -l, --list

  Lists the forms of the archive. The operation output can be used for the input of the  **-L**  parameter. If filtering parameters, such as  **-n**  or  **-t**, are used together with  **-l**, they will restrict the listed items.

- -v, --verbose

  Specifies the verbose mode.

- -V, --version

  Prints the  **gs\_restore**  version and exits.

- -?, --help

  Displays help information about the parameters of  **gs\_restore**  and exits.


Parameters for importing data

- -a, -data-only

  Imports only the data, not the schema \(data definition\).  **gs\_restore**  incrementally imports data.

- -c, --clean

  Cleans \(deletes\) existing database objects in the database to be restored before recreating them.

- , --create

  Specifies that the CREATE DATABASE statement is used to create a database before data is imported to the database. \(After this parameter is specified, the database specified by  **-d**  is used only for executing the  **CREATE DATABASE**  command, and all data is still imported to the created database.\)

- -e, --exit-on-error

  Exits if an error occurs when you send the SQL statement to the database. If you do not exit, the commands will still be sent and error information will be displayed when the import ends.

- -I, --index=NAME

  Imports only the definition of the specified index. Multiple indexes can be imported. Enter  **-I**_ index_  multiple times to import multiple indexes.

  For example:

  ```
  gs_restore -h host_name -p port_number -d postgres -I Index1 -I Index2 backup/MPPDB_backup.tar
  ```

  In this example,  *Index1*  and  *Index2*  will be imported.

- -j, --jobs=NUM

  Specifies the number of concurrent, the most time-consuming jobs of  **gs\_restore**  \(such as loading data, creating indexes, or creating constraints\). This parameter can greatly reduce the time to import a large database to a server running on a multiprocessor machine.

  Each job is one process or one thread, depending on the OS; and uses a separate connection to the server.

  The optimal value for this option depends on the server hardware setting, the client, the network, the number of CPU cores, and disk settings. It is recommended that the parameter be set to the number of CPU cores on the server. In addition, a larger value can also lead to faster import in many cases. However, an overly large value will lead to decreased performance because of thrashing.

  This parameter supports custom-format archives only. The input file must be a regular file \(not the pipe file\). This parameter can be ignored when you select the script method rather than connect to a database server. In addition, multiple jobs cannot be used in conjunction with the  **--single-transaction**  parameter.

- -L, --use-list=FILENAME

  Imports only archive elements that are listed in  **list-file**  and imports them in the order that they appear in the file. If filtering parameters, such as  **-n**  or  **-t**, are used in conjunction with  **-L**, they will further limit the items to be imported.

  **list-file**  is normally created by editing the output of a previous  **-l**  parameter. File lines can be moved or removed, and can also be commented out by placing a semicolon \(;\) at the beginning of the row. 

- -n, --schema=NAME

  Restores only objects that are listed in schemas.

  This parameter can be used in conjunction with the  **-t**  parameter to import a specific table.

  Entering  **-n ***schemaname*  multiple times can import multiple schemas.

  For example:

  ```
  gs_restore -h host_name -p port_number -d postgres -n sch1 -n sch2 backup/MPPDB_backup.tar
  ```

  In this example,  **sch1**  and  **sch2**  will be imported.

- -O, --no-owner

  Do not output commands to set ownership of objects to match the original database. By default,  **gs\_restore**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  statement to set ownership of created schema elements. Unless the system administrator or the user who has all the objects in the script initially accesses the database. Otherwise, the statement will fail. Any user name can be used for the initial connection using  **-O**, and this user will own all the created objects.

- -P, --function=NAME\(args\)

  Imports only listed functions. You need to correctly spell the function name and the parameter based on the contents of the dump file in which the function exists.

  Entering  **-P**  alone means importing all function-name\(args\) functions in a file. Entering  **-P**  with  **-n**  means importing the function-name\(args\) functions in a specified schema. Entering  **-P**  multiple times and using  **-n**  once means that all imported functions are in the  **-n**  schema by default.

  You can enter  **-n schema-name -P 'function-name\(args\)'**  multiple times to import functions in specified schemas.

  For example:

  ```
  gs_restore -h host_name -p port_number -d postgres -n test1 -P 'Func1(integer)' -n test2 -P 'Func2(integer)' backup/MPPDB_backup.tar
  ```

  In this example, both  **Func1 \(i integer\)**  in the  **test1**  schema and  **Func2 \(j integer\)**  in the  **test2**  schema will be imported.

- -s, --schema-only

  Imports only schemas \(data definitions\), instead of data \(table content\). The current sequence value will not be imported.

- -S, --sysadmin=NAME

  Specifies a reserved port for function expansion. This parameter is not recommended.

- -t, --table=NAME

  Imports only listed table definitions or data, or both. This parameter can be used in conjunction with the  **-n**  parameter to specify a table object in a schema. When  **-n**  is not entered, the default schema is PUBLIC. Entering  **-n ***schemaname*** -t ***tablename*  multiple times can import multiple tables in a specified schema.

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

- -T, --trigger=NAME

  This parameter is reserved for extension.

- -x, --no-privileges/--no-acl

  Prevents the import of access permissions \(**GRANT**/**REVOKE**  commands\).

- -1, --single-transaction

  Executes import as a single transaction \(that is, commands are wrapped in  **BEGIN**/**COMMIT**\).

  This parameter ensures that either all the commands are completed successfully or no application is changed. This parameter means  **--exit-on-error**. 

- --disable-triggers

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-data-for-failed-tables

  By default, table data will be imported even if the statement to create a table fails \(for example, the table already exists\). Data in such table is skipped using this parameter. This operation is useful if the target database already contains the desired table contents.

  This parameter takes effect only when you import data directly into a database, not when you output SQL scripts.

- --no-publications

  No import publications are performed.

- --no-security-labels

  Specifies a reserved port for function expansion. This parameter is not recommended.

- --no-subscriptions

  No import subscriptions are performed.

- --no-tablespaces

  Tablespaces excluding specified ones All objects will be created during the import process no matter which tablespace is selected when using this option.

- --section=SECTION

  Imports the listed sections \(such as pre-data, data, or post-data\).

- --use-set-session-authorization

  Is used for plain-text backup.

  Outputs the  **SET SESSION AUTHORIZATION**  statement instead of the  **ALTER OWNER**  statement to determine object ownership. This parameter makes dump more standards-compatible. If the records of objects in exported files are referenced, import may fail. Only administrators can use the  **SET SESSION AUTHORIZATION**  statement to dump data, and the administrators must manually change and verify the passwords of exported files by referencing the  **SET SESSION AUTHORIZATION**  statement before import. The  **ALTER OWNER**  statement requires lower permissions.

- --pipeline

  Uses a pipe to transmit the password. This parameter cannot be used on devices.



![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-notice.gif) **NOTICE:** 

-   If any local additions need to be added to the template1 database during the installation, restore the output of  **gs\_restore**  into an empty database with caution. Otherwise, you are likely to obtain errors due to duplicate definitions of the added objects. To create an empty database without any local additions, copy data from template0 rather than template1. Example:

```
CREATE DATABASE foo WITH TEMPLATE template0;
```

-   **gs\_restore**  cannot import large objects selectively. For example, it can only import the objects of a specified table. If an archive contains large objects, all large objects will be imported, or none of them will be restored if they are excluded by using  **-L**,  **-t**, or other parameters.

![](F:/opengauss-docs/docs/content/en/docs/Administratorguide/public_sys-resources/icon-note.gif) **NOTE:**   

1. The  **-d/--dbname**  and  **-f/--file**  parameters do not coexist.  
2. The  **-s/--schema-only**  and  **-a/--data-only**  parameters do not coexist.  
3. The  **-c/--clean**  and  **-a/--data-only**  parameters do not coexist.  
4. When  **--single-transaction**  is used,  **-j/--jobs**  must be a single job.  
5. **--role**  must be used in conjunction with  **--rolepassword**.  

Connection parameters:

- -h, --host=HOSTNAME

  Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the UNIX domain socket. The default value is taken from the  *PGHOST*  environment variable. If it is not set, a UNIX domain socket connection is attempted.

  This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

- -p, --port=PORT

  TCP port or the local Unix-domain socket file extension on which the server is listening for connections. The default value is the  *PGPORT*  environment variable.

  If the thread pool function is enabled, you are advised to use  **pooler port**, that is, the listening port number plus 1.

- -U, --username=NAME

  Specifies the user name to connect to.

- -w, --no-password

  Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways. This parameter is useful in batch jobs and scripts in which no user password is required.

- -W, --password=PASSWORD

  User password for database connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  parameter. If the  **-W**  parameter is not provided and you are not a system administrator,  **gs\_restore**  will ask you to enter a password.

- --role=ROLENAME

  Specifies a role name for the import operation. If this parameter is selected, the  **SET ROLE**  statement will be issued after  **gs\_restore**  connects to the database. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by  **gs\_restore**. This parameter allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as the initial user. This parameter allows data to be imported without violating the policy.

- --rolepassword=ROLEPASSWORD

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



### gs\_backup<a name="ZH-CN_TOPIC_0000001179389636"></a>

#### Background<a name="en-us_topic_0289899241_en-us_topic_0287276003_en-us_topic_0237152406_en-us_topic_0059777806_section48401199395"></a>

After openGauss is deployed, problems and exceptions may occur during database running. **gs\_backup** is provided by openGauss to back up openGauss, restore important data, and display help and version information.

#### Prerequisites<a name="en-us_topic_0289899241_en-us_topic_0287276003_en-us_topic_0237152406_en-us_topic_0059777806_s9649938409774ccdbc6993a90ccb777a"></a>

-   openGauss can be connected.
-   During the restoration, backup files exist in the backup directory on all the nodes.
-   Log in to the OS as the OS user **omm** to run the **gs\_backup** command.

#### Syntax<a name="en-us_topic_0289899241_en-us_topic_0287276003_en-us_topic_0237152406_en-us_topic_0059777806_sa0c0a7aa3d4042fd81017d22ca1e8cac"></a>

- Back up the database host.

  ```
  gs_backup -t backup --backup-dir=BACKUPDIR [-h HOSTNAME] [--parameter] [--binary] [--all] [-l LOGFILE]
  ```

- Restore the database host.

  ```
  gs_backup -t restore --backup-dir=BACKUPDIR [-h HOSTNAME] [--parameter] [--binary] [--all] [-l LOGFILE] [--force]
  ```

- Display the help information.

  ```
  gs_backup -? | --help
  ```

- Display the version number.

  ```
  gs_backup -V | --version
  ```


#### Parameter Description<a name="en-us_topic_0289899241_en-us_topic_0287276003_en-us_topic_0237152406_en-us_topic_0059777806_s2fa71feeaad041f293de868e52bb5907"></a>

**gs\_backup** has the following types of parameters:

- Parameters for backing up the database host:

  - -h

    Specifies the host name for storing the backup files

    Value range: a host name If the host name is not specified, the current database instance is backed up.

  - --backup-dir=BACKUPDIR

    Specifies the backup file path.

  - --parameter

    Backs up parameter files. If **--parameter**, **--binary**, and **--all** are not specified, only parameters files are backed up.

  - --binary

    Backs up the binary files in the **app** directory.

  - --all

    Backs up the binary files **pg\_hba.conf** and **postgsql.conf** in the **app** directory.

  - -l

    Specifies a log file and its save path.

    Default value: **$GAUSSLOG/om/gs\_backup-YYYY-MM-DD\_hhmmss.log**


- Parameters for restoring the database host:

  - -h

    Specifies the name of the host to be restored.

    Value range: a host name If the name of the host is not specified, the corresponding backup node is restored.

  - --backup-dir=BACKUPDIR

    Specifies the path for obtaining the files for restoration.

  - --parameter

    Restores parameter files. If **--parameter**, **--binary**, and **--all** are not specified, only parameters files are restored.

  - --binary

    Restores binary files.

  - --all

    Restores binary files and parameter files.

  - -l

    Specifies a log file and its save path.

    Default value: **$GAUSSLOG/om/gs\_backup-YYYY-MM-DD\_hhmmss.log**

  - --force

    Forcibly restores static files on a node after the files are lost. This parameter is valid only when **--all** or **--binary** is used together.


- Other parameters:

  - -?, --help

    Displays the help information.

  - -V, --version

    Displays the version number.

  - -t

    Specifies the operation type.

    The value can be **backup** or **restore**.



#### Example<a name="en-us_topic_0289899241_en-us_topic_0287276003_en-us_topic_0237152406_en-us_topic_0059777806_sdebe53579dba4bb8a7dad8e21dbcb342"></a>

- Run the **gs\_backup** script to back up the database host.

  ```
  gs_backup -t backup --backup-dir=/opt/software/gaussdb/backup_dir -h plat1 --parameter
  Backing up openGauss.
  Parsing configuration files.
  Successfully parsed the configuration file.
  Performing remote backup.
  Remote backup succeeded.
  Successfully backed up openGauss.
  ```

- Run the **gs\_backup** script to restore the database host.

  ```
  gs_backup -t restore --backup-dir=/opt/software/gaussdb/backup_dir -h plat1 --parameter
  Restoring openGauss.
  Parsing the configuration file.
  Successfully parsed configuration files.
  Performing remote restoration.
  Remote restoration succeeded.
  Successfully restored openGauss.
  ```
