# Using gs\_restore to Import Data<a name="EN-US_TOPIC_0289900222"></a>

## Scenarios<a name="en-us_topic_0283137171_en-us_topic_0237121137_section17330121375310"></a>

**gs\_restore**  is an import tool provided by the openGauss database. You can use this tool to import the files exported by  **gs\_dump**  to a database.  **gs\_restore**  can import the files in .tar, custom, or directory format.

**gs\_restore**  can:

-   Import data to a database.

    If a database is specified, data is imported to the database. If multiple databases are specified, the password for connecting to each database also needs to be specified. During data import, the generated columns are automatically updated and saved as common columns.

-   Import data to a script.

    If no database is specified, a script containing the SQL statement to recreate the database is created and written to a file or standard output. This script output is equivalent to the plain text output of  **gs\_dump**.


You can specify and sort the data to import.

## Procedure<a name="en-us_topic_0283137171_en-us_topic_0237121137_section3467125218532"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**gs\_restore**  incrementally imports data by default. To prevent data exception caused by consecutive imports, use the  **-e**  and  **-c**  parameters for each import.  **-c**  indicates that existing data is deleted from the target database before each import.  **-e**  indicates that the system ignores the import task with an error \(error message is displayed after the import process is complete\) and proceeds with the next by default. Therefore, you need to exit the system if an error occurs when you send the SQL statement to the database.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Use  **gs\_restore**  to import all object definitions from the exported file of the entire  **postgres**  database to the  **backupdb**  database.

    ```
    gs_restore -U jack /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb -s -e -c
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283137171_en-us_topic_0237121137_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137171_en-us_topic_0237121137_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137171_en-us_topic_0237121137_p48382816258"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p48382816258"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137171_en-us_topic_0237121137_p18332812257"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18332812257"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137171_en-us_topic_0237121137_p583122816257"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p583122816257"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137171_en-us_topic_0237121137_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p3830287252"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p3830287252"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p8232111218592"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p8232111218592"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p8232111218592"></a>Username for database connection.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1583152842510"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1583152842510"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p89920588539"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p89920588539"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p69431335210"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p69431335210"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283137171_en-us_topic_0237121137_ul194074341627"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_ul194074341627"></a><ul id="en-us_topic_0283137171_en-us_topic_0237121137_ul194074341627"><li>The <strong id="b2024915416541"><a name="b2024915416541"></a><a name="b2024915416541"></a>-W</strong> parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying the <strong id="b11133186175513"><a name="b11133186175513"></a><a name="b11133186175513"></a>-W</strong> parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1898043113581"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1898043113581"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row4650191445011"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p9650161425019"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p9650161425019"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p9650161425019"></a>-d</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1565110140508"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1565110140508"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1565110140508"></a>Name of a database to which data will be imported.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p7651201455010"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p7651201455010"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p7651201455010"></a>-d backupdb</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p84119521250"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p84119521250"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p14838631464"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p14838631464"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p341117521853"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p341117521853"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p341117521853"></a>-p <span id="en-us_topic_0283137171_en-us_topic_0237121137_text986814282459"><a name="en-us_topic_0283137171_en-us_topic_0237121137_text986814282459"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_text986814282459"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row1362511481379"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p195642019125512"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p195642019125512"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p195642019125512"></a>-e</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p18979244175512"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18979244175512"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18979244175512"></a>Exits if an error occurs when you send the SQL statement to the database. Error messages are displayed after the import process is complete.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p12782147122820"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p12782147122820"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p12782147122820"></a>N/A</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row057817297550"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1557922912557"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1557922912557"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1557922912557"></a>-c</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1762611020568"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1762611020568"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1762611020568"></a>Cleans existing objects from the target database before the import.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p55791029105515"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p55791029105515"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p55791029105515"></a>N/A</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137171_en-us_topic_0237121137_row1339718574716"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p18625164815715"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18625164815715"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p18625164815715"></a>-s</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1962511481717"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1962511481717"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1962511481717"></a>Imports only object definitions in schemas and does not import data. Sequence values will also not be imported.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137171_en-us_topic_0237121137_p1662514481776"><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1662514481776"></a><a name="en-us_topic_0283137171_en-us_topic_0237121137_p1662514481776"></a>N/A</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_restore" in  _Tool Reference_.


## Examples<a name="en-us_topic_0283137171_en-us_topic_0237121137_section19717152710548"></a>

Example 1: Run  **gs\_restore**  to import data and all object definitions of the  **postgres**  database from the  **MPPDB\_backup.dmp**  file \(custom format\).

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb
Password:
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore: total time: 13053  ms
```

Example 2: Run  **gs\_restore**  to import data and all object definitions of the  **postgres**  database from the  **MPPDB\_backup.tar**  file.

```
gs_restore backup/MPPDB_backup.tar -p 8000 -d backupdb 
gs_restore[2017-07-21 19:21:32]: restore operation successful
gs_restore[2017-07-21 19:21:32]: total time: 21203  ms
```

Example 3: Run  **gs\_restore**  to import data and all object definitions of the  **postgres**  database from the  **MPPDB\_backup**  directory.

```
gs_restore backup/MPPDB_backup -p 8000 -d backupdb
gs_restore[2017-07-21 19:26:46]: restore operation successful
gs_restore[2017-07-21 19:26:46]: total time: 21003  ms
```

Example 4: Run  **gs\_restore**  to import all object definitions of the  **postgres**  database to the  **backupdb**  database. Before the import, complete definitions and data exist in the database. After the import, all object definitions exist in the  **backupdb**  database and no data exists in the table.

```
gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb -s -e -c 
Password:
gs_restore[2017-07-21 19:46:27]: restore operation successful
gs_restore[2017-07-21 19:46:27]: total time: 32993  ms
```

Example 5: Run  **gs\_restore**  to import data and all definitions in the  **PUBLIC**  schema from the  **MPPDB\_backup.dmp**  file. Existing objects are deleted from the target database before the import. If an existing object references to an object in another schema, manually delete the referenced object first.

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -n PUBLIC
gs_restore: [archiver (db)] Error while PROCESSING TOC:
gs_restore: [archiver (db)] Error from TOC entry 313; 1259 337399 TABLE table1 gaussdba
gs_restore: [archiver (db)] could not execute query: ERROR:  cannot drop table table1 because other objects depend on it
DETAIL:  view t1.v1 depends on table table1
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
Command was: DROP TABLE public.table1;
```

Manually delete the referenced object and create it again after the import is complete.

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -n PUBLIC
gs_restore[2017-07-21 19:52:26]: restore operation successful
gs_restore[2017-07-21 19:52:26]: total time: 2203  ms
```

Example 6: Run  **gs\_restore**  to import the definition of the  **hr.staffs**  table in the  **hr**  schema from the  **MPPDB\_backup.dmp**  file. Before the import, the  **hr.staffs**  table does not exist. Ensure that the hr schema exists.

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -s -n hr -t staffs
gs_restore[2017-07-21 19:56:29]: restore operation successful
gs_restore[2017-07-21 19:56:29]: total time: 21000  ms
```

Example 7: Run  **gs\_restore**  to import data of the  **hr.staffs**  table in  **hr**  schema from the  **MPPDB\_backup.dmp**  file. Before the import, the  **hr.staffs**  table does not contain data. Ensure that the hr schema exists.

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -a -n hr -t staffs
gs_restore[2017-07-21 20:12:32]: restore operation successful
gs_restore[2017-07-21 20:12:32]: total time: 20203  ms
```

Example 8: Run  **gs\_restore**  to import the definition of the  **hr.staffs**  table. Before the import, the  **hr.staffs**  table exists.

```
human_resource=# select * from hr.staffs;
 staff_id | first_name  |  last_name  |  email   |    phone_number    |      hire_date      | employment_id |  salary  | commission_pct | manager_id | section_id 
----------+-------------+-------------+----------+--------------------+---------------------+---------------+----------+----------------+------------+------------
      200 | Jennifer    | Whalen      | JWHALEN  | 515.123.4444       | 1987-09-17 00:00:00 | AD_ASST       |  4400.00 |                |        101 |         10
      201 | Michael     | Hartstein   | MHARTSTE | 515.123.5555       | 1996-02-17 00:00:00 | MK_MAN        | 13000.00 |                |        100 |         20

gsql -d human_resource -p 8000

gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

human_resource=# drop table hr.staffs CASCADE;
NOTICE:  drop cascades to view hr.staff_details_view
DROP TABLE

gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d human_resource -n hr -t staffs -s -e 
Password:
restore operation successful
total time: 904  ms

human_resource=# select * from hr.staffs;
 staff_id | first_name | last_name | email | phone_number | hire_date | employment_id | salary | commission_pct | manager_id | section_id 
----------+------------+-----------+-------+--------------+-----------+---------------+--------+----------------+------------+------------
(0 rows)
```

Example 9: Run  **gs\_restore**  to import data and definitions of the  **staffs**  and  **areas**  tables. Before the import, the  **staffs**  and  **areas**  tables do not exist.

```
human_resource=# \d
                                 List of relations
 Schema |        Name        | Type  |  Owner   |             Storage              
--------+--------------------+-------+----------+----------------------------------
 hr     | employment_history | table | omm | {orientation=row,compression=no}
 hr     | employments        | table | omm | {orientation=row,compression=no}
 hr     | places             | table | omm | {orientation=row,compression=no}
 hr     | sections           | table | omm | {orientation=row,compression=no}
 hr     | states             | table | omm | {orientation=row,compression=no}
(5 rows)

gs_restore /home/gaussdb/backup/MPPDB_backup.tar -p 8000 -d human_resource -n hr -t staffs -n hr -t areas 
Password:
restore operation successful
total time: 724  ms

human_resource=# \d
                                 List of relations
 Schema |        Name        | Type  |  Owner   |             Storage              
--------+--------------------+-------+----------+----------------------------------
 hr     | areas              | table | omm | {orientation=row,compression=no}
 hr     | employment_history | table | omm | {orientation=row,compression=no}
 hr     | employments        | table | omm | {orientation=row,compression=no}
 hr     | places             | table | omm | {orientation=row,compression=no}
 hr     | sections           | table | omm | {orientation=row,compression=no}
 hr     | staffs             | table | omm | {orientation=row,compression=no}
 hr     | states             | table | omm | {orientation=row,compression=no}
(7 rows)

human_resource=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

Example 10: Run  **gs\_restore**  to import data and all object definitions in the  **hr**  schema.

```
gs_restore /home/omm/backup/MPPDB_backup1.dmp -p 8000 -d backupdb -n hr -e
Password:
restore operation successful
total time: 702  ms
```

Example 11: Run  **gs\_restore**  to import all object definitions in the  **hr**  and  **hr1**  schemas to the  **backupdb**  database.

```
gs_restore /home/omm/backup/MPPDB_backup2.dmp -p 8000 -d backupdb -n hr -n hr1 -s
Password:
restore operation successful
total time: 665  ms
```

Example 12: Run  **gs\_restore**  to import the files exported from the  **human\_resource**  database to the  **backupdb**  database.

```
openGauss=# create database backupdb;
CREATE DATABASE

gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb
restore operation successful
total time: 23472  ms

gsql -d backupdb -p 8000 -r

gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

backupdb=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

Example 13:  **user1**  does not have the permission to import data from an exported file to the  **backupdb**  database and  **role1**  has this permission. To import the exported data to the  **backupdb**  database, you can set  **--role**  to  **role1**  in the  **gs\_restore**  command.

```
human_resource=# CREATE USER user1 IDENTIFIED BY "1234@abc";
CREATE ROLE role1 with SYSADMIN IDENTIFIED BY "abc@1234";
gs_restore -U user1 /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb --role role1 --rolepassword abc@1234
Password:
restore operation successful
total time: 554  ms

gsql -d backupdb -p 8000 -r 

gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

backupdb=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

