# Exporting a Single Database<a name="EN-US_TOPIC_0242370318"></a>

## Exporting a Database<a name="EN-US_TOPIC_0000001162579664"></a>

You can use  **gs\_dump**  to export data and all object definitions of a database from openGauss. You can specify the information to export as follows:

- Export full information of a database, including its data and all object definitions.

    You can use the exported information to create a database containing the same data as the current one.

- Export all object definitions of a database, including the definitions of the database, functions, schemas, tables, indexes, and stored procedures.

    You can use the exported object definitions to quickly create a database that is the same as the current one, except that the new database does not have data.

- Export data of a database.

### Procedure<a name="en-us_topic_0283136854_en-us_topic_0237121169_en-us_topic_0096392335_s3e29cf3b34314c088216013e01293af6"></a>

1. Log in as the OS user  **omm**  to the primary node of the database.
2. Use gs\_dump to export data of the  **userdatabase**  database.

    ```
    gs_dump -U jack -f /home/omm/backup/userdatabase_backup.tar -p 8000 postgres -F t 
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283136854_en-us_topic_0237121169_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136854_en-us_topic_0237121169_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136854_en-us_topic_0237121169_p48382816258"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p48382816258"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136854_en-us_topic_0237121169_p18332812257"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p18332812257"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136854_en-us_topic_0237121169_p583122816257"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p583122816257"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136854_en-us_topic_0237121169_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p3830287252"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p3830287252"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p8232111218592"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p8232111218592"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p8232111218592"></a>Username for database connection.</p>
    <div class="note" id="en-us_topic_0283136854_en-us_topic_0237121169_note02310422912"><a name="en-us_topic_0283136854_en-us_topic_0237121169_note02310422912"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_note02310422912"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136854_en-us_topic_0237121169_p152354213910"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p152354213910"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p152354213910"></a>If the username is not specified, the initial system administrator created during installation is used for connection by default.</p>
    </div></div>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p1583152842510"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1583152842510"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136854_en-us_topic_0237121169_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p89920588539"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p89920588539"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p69431335210"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p69431335210"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283136854_en-us_topic_0237121169_ul194074341627"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_ul194074341627"></a><ul id="en-us_topic_0283136854_en-us_topic_0237121169_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying this parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p1898043113581"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1898043113581"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136854_en-us_topic_0237121169_row1823810139566"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p11238171316560"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p11238171316560"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p11238513175619"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p11238513175619"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p11238513175619"></a>-f /home/<span id="en-us_topic_0283136854_en-us_topic_0237121169_text550520295319"><a name="en-us_topic_0283136854_en-us_topic_0237121169_text550520295319"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_text550520295319"></a>omm</span>/backup/<em id="i189217515234"><a name="i189217515234"></a><a name="i189217515234"></a>postgres</em>_backup.tar</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136854_en-us_topic_0237121169_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p84119521250"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p84119521250"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p14838631464"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p14838631464"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p341117521853"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p341117521853"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p341117521853"></a>-p <span id="en-us_topic_0283136854_en-us_topic_0237121169_text74171210135017"><a name="en-us_topic_0283136854_en-us_topic_0237121169_text74171210135017"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_text74171210135017"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136854_en-us_topic_0237121169_row1362511481379"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p8782872280"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p8782872280"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"></a>Name of the database to export.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p12782147122820"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p12782147122820"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p12782147122820"></a>postgres</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136854_en-us_topic_0237121169_row1885993510341"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p141711116303"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p141711116303"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p9417511183018"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p9417511183018"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p9417511183018"></a>Select the format of file to export. The values of <strong id="en-us_topic_0237121169_b122016542017"><a name="en-us_topic_0237121169_b122016542017"></a><a name="en-us_topic_0237121169_b122016542017"></a>-F</strong> are as follows:</p>
    <a name="en-us_topic_0283136854_en-us_topic_0237121169_ul4489102813339"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_ul4489102813339"></a><ul id="en-us_topic_0283136854_en-us_topic_0237121169_ul4489102813339"><li><strong id="en-us_topic_0237121169_b756314111111"><a name="en-us_topic_0237121169_b756314111111"></a><a name="en-us_topic_0237121169_b756314111111"></a>p</strong>: plaintext</li><li><strong id="en-us_topic_0237121169_b218353615"><a name="en-us_topic_0237121169_b218353615"></a><a name="en-us_topic_0237121169_b218353615"></a>c</strong>: custom</li><li><strong id="en-us_topic_0237121169_b12234749115"><a name="en-us_topic_0237121169_b12234749115"></a><a name="en-us_topic_0237121169_b12234749115"></a>d</strong>: directory</li><li><strong id="en-us_topic_0237121169_b151841650120"><a name="en-us_topic_0237121169_b151841650120"></a><a name="en-us_topic_0237121169_b151841650120"></a>t</strong>: .tar</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p4417181118302"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p4417181118302"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p4417181118302"></a>-F t</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dump" in the  _Tool Reference_.

## Examples<a name="en-us_topic_0283136854_en-us_topic_0237121169_en-us_topic_0096392335_s3e34e9e7c7e948d49d1f24d6038514c0"></a>

Example 1: Run  **gs\_dump**  to export full information of the  **postgres**  database and compress the exported files in .sql format.

```
gs_dump -f /home/omm/backup/postgres_backup.sql -p 8000 postgres -Z 8 -F p
Password:
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: total time: 3793  ms
```

Example 2: Run  **gs\_dump**  to export data of the  **postgres**  database, excluding object definitions. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/postgres_data_backup.dmp -p 8000 postgres -a -F c
Password:
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: total time: 3793  ms
```

Example 3: Run  **gs\_dump**  to export object definitions of the  **postgres**  database. The exported files are in .sql format.

```
gs_dump -f /home/omm/backup/postgres_def_backup.sql -p 8000 postgres -s -F p
Password:
gs_dump[port='8000'][postgres][2017-07-20 15:04:14]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-20 15:04:14]: total time: 472 ms
```

Example 4: Run  **gs\_dump**  to export object definitions of the  **postgres**  database. The exported files are in text format and are encrypted.

```
gs_dump -f /home/omm/backup/postgres_def_backup.sql -p 8000 postgres --with-encryption AES128 --with-key 1234567812345678 -s -F p
Password:
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: dump database postgres successfully
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: total time: 1161  ms
```

## Exporting a Schema<a name="EN-US_TOPIC_0000001163057656"></a>

You can use  **gs\_dump**  to export data and all object definitions of a schema from openGauss. You can export one or more specified schemas as needed. You can specify the information to export as follows:

- Export full information of a schema, including its data and object definitions.
- Export data of a schema, excluding its object definitions.
- Export the object definitions of a schema, including the definitions of tables, stored procedures, and indexes.

### Procedure<a name="en-us_topic_0283136726_en-us_topic_0237121170_en-us_topic_0096392705_se1377b9a87714047bb07fd6d163c6734"></a>

1. Log in as the OS user  **omm**  to the primary node of the database.
2. Run  **gs\_dump**  to export the  **hr**  and  **public**  schemas.

    ```
    gs_dump -U jack -f /home/omm/backup/MPPDB_schema_backup -p 8000 human_resource -n hr -n public -F d 
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283136726_en-us_topic_0237121170_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136726_en-us_topic_0237121170_row10837281257"><th class="cellrowborder" valign="top" width="24.169999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136726_en-us_topic_0237121170_p48382816258"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p48382816258"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136726_en-us_topic_0237121170_p18332812257"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p18332812257"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136726_en-us_topic_0237121170_p583122816257"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p583122816257"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136726_en-us_topic_0237121170_row1483528152520"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p3830287252"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p3830287252"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p8232111218592"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p8232111218592"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p8232111218592"></a>Username for database connection.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p1583152842510"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1583152842510"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row199295855317"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p89920588539"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p89920588539"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p69431335210"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p69431335210"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283136726_en-us_topic_0237121170_ul194074341627"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_ul194074341627"></a><ul id="en-us_topic_0283136726_en-us_topic_0237121170_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying this parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p1898043113581"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1898043113581"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row1823810139566"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p11238171316560"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p11238171316560"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p323861311565"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p323861311565"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p11238513175619"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p11238513175619"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p11238513175619"></a>-f /home/<span id="en-us_topic_0283136726_en-us_topic_0237121170_text1189611819533"><a name="en-us_topic_0283136726_en-us_topic_0237121170_text1189611819533"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_text1189611819533"></a>omm</span>/backup/MPPDB<em id="en-us_topic_0283136726_en-us_topic_0237121170_i158581933132416"><a name="en-us_topic_0283136726_en-us_topic_0237121170_i158581933132416"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_i158581933132416"></a>_</em>schema_backup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row9411195215519"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p84119521250"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p84119521250"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p14838631464"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p14838631464"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p341117521853"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p341117521853"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p341117521853"></a>-p <span id="en-us_topic_0283136726_en-us_topic_0237121170_text6660142225020"><a name="en-us_topic_0283136726_en-us_topic_0237121170_text6660142225020"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_text6660142225020"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row1362511481379"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p8782872280"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p8782872280"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p1278211752814"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1278211752814"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p1278211752814"></a>Name of the database to export.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p12782147122820"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p12782147122820"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p12782147122820"></a>human_resource</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row1280163131716"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p14801831178"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p14801831178"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p14801831178"></a>-n</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p2391133813175"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p2391133813175"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p2391133813175"></a>Names of schemas to export. Data of the specified schemas will also be exported.</p>
    <a name="en-us_topic_0283136726_en-us_topic_0237121170_ul11933635102416"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_ul11933635102416"></a><ul id="en-us_topic_0283136726_en-us_topic_0237121170_ul11933635102416"><li>Single schema: Enter <strong id="en-us_topic_0237121170_b1527019211918"><a name="en-us_topic_0237121170_b1527019211918"></a><a name="en-us_topic_0237121170_b1527019211918"></a>-n</strong> <em id="en-us_topic_0237121170_i32761326915"><a name="en-us_topic_0237121170_i32761326915"></a><a name="en-us_topic_0237121170_i32761326915"></a>schemaname</em>.</li><li>Multiple schemas: Enter <strong id="en-us_topic_0237121170_b3428121014917"><a name="en-us_topic_0237121170_b3428121014917"></a><a name="en-us_topic_0237121170_b3428121014917"></a>-n</strong> <em id="en-us_topic_0237121170_i54342101694"><a name="en-us_topic_0237121170_i54342101694"></a><a name="en-us_topic_0237121170_i54342101694"></a>schemaname</em> for each schema.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136726_en-us_topic_0237121170_ul13923102591912"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_ul13923102591912"></a><ul id="en-us_topic_0283136726_en-us_topic_0237121170_ul13923102591912"><li>Single schemas: <strong id="en-us_topic_0237121170_b1699691118910"><a name="en-us_topic_0237121170_b1699691118910"></a><a name="en-us_topic_0237121170_b1699691118910"></a>-n hr</strong></li><li>Multiple schemas: <strong id="en-us_topic_0237121170_b56151013292"><a name="en-us_topic_0237121170_b56151013292"></a><a name="en-us_topic_0237121170_b56151013292"></a>-n hr -n public</strong></li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283136726_en-us_topic_0237121170_row1885993510341"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p141711116303"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p141711116303"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p9417511183018"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p9417511183018"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p9417511183018"></a>Select the format of file to export. The values of <strong id="en-us_topic_0237121170_b17853121518912"><a name="en-us_topic_0237121170_b17853121518912"></a><a name="en-us_topic_0237121170_b17853121518912"></a>-F</strong> are as follows:</p>
    <a name="en-us_topic_0283136726_en-us_topic_0237121170_ul4489102813339"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_ul4489102813339"></a><ul id="en-us_topic_0283136726_en-us_topic_0237121170_ul4489102813339"><li><strong id="en-us_topic_0237121170_b14781022594"><a name="en-us_topic_0237121170_b14781022594"></a><a name="en-us_topic_0237121170_b14781022594"></a>p</strong>: plaintext</li><li><strong id="en-us_topic_0237121170_b182607239919"><a name="en-us_topic_0237121170_b182607239919"></a><a name="en-us_topic_0237121170_b182607239919"></a>c</strong>: custom</li><li><strong id="en-us_topic_0237121170_b109781824698"><a name="en-us_topic_0237121170_b109781824698"></a><a name="en-us_topic_0237121170_b109781824698"></a>d</strong>: directory</li><li><strong id="en-us_topic_0237121170_b775112251910"><a name="en-us_topic_0237121170_b775112251910"></a><a name="en-us_topic_0237121170_b775112251910"></a>t</strong>: .tar</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136726_en-us_topic_0237121170_p4417181118302"><a name="en-us_topic_0283136726_en-us_topic_0237121170_p4417181118302"></a><a name="en-us_topic_0283136726_en-us_topic_0237121170_p4417181118302"></a>-F d</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dump" in the  _Tool Reference_.

### Examples<a name="en-us_topic_0283136726_en-us_topic_0237121170_en-us_topic_0096392705_s221cf543e4004d598aa6fafa8b79f843"></a>

Example 1: Run  **gs\_dump**  to export full information of the  **hr**  schema. The exported files are compressed and stored in text format.

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup.sql -p 8000 human_resource -n hr -Z 6 -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:05:55]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:05:55]: total time: 2425  ms
```

Example 2: Run  **gs\_dump**  to export data of the  **hr**  schema. The exported files are in .tar format.

```
gs_dump -f /home/omm/backup/MPPDB_schema_data_backup.tar -p 8000 human_resource -n hr -a -F t
Password:
gs_dump[port='8000'][human_resource][2018-11-14 15:07:16]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 15:07:16]: total time: 1865  ms
```

Example 3: Run  **gs\_dump**  to export the object definitions of the  **hr**  schema. The exported files are stored in a directory.

```
gs_dump -f /home/omm/backup/MPPDB_schema_def_backup -p 8000 human_resource -n hr -s -F d
Password:
gs_dump[port='8000'][human_resource][2018-11-14 15:11:34]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 15:11:34]: total time: 1652  ms
```

Example 4: Run  **gs\_dump**  to export the  **human\_resource**  database excluding the  **hr**  schema. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup.dmp -p 8000 human_resource -N hr -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:06:31]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:06:31]: total time: 2522  ms
```

Example 5: Run  **gs\_dump**  to export the object definitions of the  **hr**  and  **public**  schemas, encrypt the exported files, and store them in .tar format.

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup1.tar -p 8000 human_resource -n hr -n public -s --with-encryption AES128 --with-key 1234567812345678 -F t
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:07:16]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:07:16]: total time: 2132  ms
```

Example 6: Run  **gs\_dump**  to export the  **human\_resource**  database excluding the  **hr**  and  **public**  schemas. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup2.dmp -p 8000 human_resource -N hr -N public -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:07:55]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:07:55]: total time: 2296  ms
```

Example 7: Run  **gs\_dump**  to export all tables \(views, sequences, and foreign tables are also included\) in the  **public**  schema and the  **staffs**  table in the  **hr**  schema, including data and table definition. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/MPPDB_backup3.dmp -p 8000 human_resource -t public.* -t hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: total time: 896  ms
```

## Exporting a Table<a name="EN-US_TOPIC_0000001162579696"></a>

You can use  **gs\_dump**  to export data and definition of a table-level object from openGauss. Views, sequences, and foreign tables are special tables. You can export one or more specified tables as needed. You can specify the information to export as follows:

- Export full information of a table, including its data and definition.
- Export data of a table.
- Export the definition of a table.

### Procedure<a name="en-us_topic_0283137162_en-us_topic_0237121171_en-us_topic_0096393572_sfe5d77987a274a64aaf2d58f17c4a2b9"></a>

1. Log in as the OS user  **omm**  to the primary node of the database.
2. Run  **gs\_dump**  to export the  **hr.staffs**  and  **hr.employments**  tables.

    ```
    gs_dump -U jack -f /home/omm/backup/MPPDB_table_backup -p 8000 human_resource -t hr.staffs -t hr.employments -F d
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283137162_en-us_topic_0237121171_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137162_en-us_topic_0237121171_row10837281257"><th class="cellrowborder" valign="top" width="24.169999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137162_en-us_topic_0237121171_p48382816258"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p48382816258"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137162_en-us_topic_0237121171_p18332812257"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p18332812257"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137162_en-us_topic_0237121171_p583122816257"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p583122816257"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137162_en-us_topic_0237121171_row1483528152520"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p3830287252"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p3830287252"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p8232111218592"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p8232111218592"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p8232111218592"></a>Username for database connection.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p1583152842510"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1583152842510"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row199295855317"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p89920588539"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p89920588539"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p69431335210"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p69431335210"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283137162_en-us_topic_0237121171_ul194074341627"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_ul194074341627"></a><ul id="en-us_topic_0283137162_en-us_topic_0237121171_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying this parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p1898043113581"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1898043113581"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row1823810139566"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p11238171316560"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p11238171316560"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p323861311565"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p323861311565"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p11238513175619"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p11238513175619"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p11238513175619"></a>-f /home/<span id="en-us_topic_0283137162_en-us_topic_0237121171_text7666916195320"><a name="en-us_topic_0283137162_en-us_topic_0237121171_text7666916195320"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_text7666916195320"></a>omm</span>/backup/MPPDB_table_backup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row9411195215519"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p84119521250"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p84119521250"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p14838631464"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p14838631464"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p341117521853"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p341117521853"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p341117521853"></a>-p <span id="en-us_topic_0283137162_en-us_topic_0237121171_text139416479502"><a name="en-us_topic_0283137162_en-us_topic_0237121171_text139416479502"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_text139416479502"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row1362511481379"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p8782872280"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p8782872280"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p1278211752814"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1278211752814"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p1278211752814"></a>Name of the database to export.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p12782147122820"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p12782147122820"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p12782147122820"></a>human_resource</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row1280163131716"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p14801831178"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p14801831178"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p14801831178"></a>-t</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p13668104114117"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p13668104114117"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p13668104114117"></a>Table (or view, sequence, foreign table) to export. You can specify multiple tables by listing them or using wildcard characters. When you use wildcard characters, quote wildcard patterns with single quotation marks ('') to prevent the shell from expanding the wildcard characters.</p>
    <a name="en-us_topic_0283137162_en-us_topic_0237121171_ul11933635102416"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_ul11933635102416"></a><ul id="en-us_topic_0283137162_en-us_topic_0237121171_ul11933635102416"><li>Single table: Enter <strong id="en-us_topic_0237121171_b178771347101012"><a name="en-us_topic_0237121171_b178771347101012"></a><a name="en-us_topic_0237121171_b178771347101012"></a>-t</strong> <em id="en-us_topic_0237121171_i788217478100"><a name="en-us_topic_0237121171_i788217478100"></a><a name="en-us_topic_0237121171_i788217478100"></a>schema.table</em>.</li><li>Multiple tables: Enter <strong id="en-us_topic_0237121171_b292017481109"><a name="en-us_topic_0237121171_b292017481109"></a><a name="en-us_topic_0237121171_b292017481109"></a>-t</strong> <em id="en-us_topic_0237121171_i109201448181015"><a name="en-us_topic_0237121171_i109201448181015"></a><a name="en-us_topic_0237121171_i109201448181015"></a>schema.table</em> for each table.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137162_en-us_topic_0237121171_ul13923102591912"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_ul13923102591912"></a><ul id="en-us_topic_0283137162_en-us_topic_0237121171_ul13923102591912"><li>Single table: <strong id="en-us_topic_0237121171_b910115151013"><a name="en-us_topic_0237121171_b910115151013"></a><a name="en-us_topic_0237121171_b910115151013"></a>-t hr.staffs</strong></li><li>Multiple tables: <strong id="en-us_topic_0237121171_b12179115210103"><a name="en-us_topic_0237121171_b12179115210103"></a><a name="en-us_topic_0237121171_b12179115210103"></a>-t hr.staffs -t hr.employments</strong></li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137162_en-us_topic_0237121171_row1885993510341"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p141711116303"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p141711116303"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p9417511183018"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p9417511183018"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p9417511183018"></a>Select the format of file to export. The values of <strong id="en-us_topic_0237121171_b1230854161013"><a name="en-us_topic_0237121171_b1230854161013"></a><a name="en-us_topic_0237121171_b1230854161013"></a>-F</strong> are as follows:</p>
    <a name="en-us_topic_0283137162_en-us_topic_0237121171_ul4489102813339"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_ul4489102813339"></a><ul id="en-us_topic_0283137162_en-us_topic_0237121171_ul4489102813339"><li><strong id="en-us_topic_0237121171_b27693558106"><a name="en-us_topic_0237121171_b27693558106"></a><a name="en-us_topic_0237121171_b27693558106"></a>p</strong>: plaintext</li><li><strong id="en-us_topic_0237121171_b15591956171019"><a name="en-us_topic_0237121171_b15591956171019"></a><a name="en-us_topic_0237121171_b15591956171019"></a>c</strong>: custom</li><li><strong id="en-us_topic_0237121171_b6910145751014"><a name="en-us_topic_0237121171_b6910145751014"></a><a name="en-us_topic_0237121171_b6910145751014"></a>d</strong>: directory</li><li><strong id="en-us_topic_0237121171_b184331658171015"><a name="en-us_topic_0237121171_b184331658171015"></a><a name="en-us_topic_0237121171_b184331658171015"></a>t</strong>: .tar</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137162_en-us_topic_0237121171_p4417181118302"><a name="en-us_topic_0283137162_en-us_topic_0237121171_p4417181118302"></a><a name="en-us_topic_0283137162_en-us_topic_0237121171_p4417181118302"></a>-F d</p>
    </td>
    </tr>
    <tr id="row181041853810"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="p17105887382"><a name="p17105887382"></a><a name="p17105887382"></a>-T</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"><a name="en-us_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"></a><a name="en-us_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"></a>Specifies a list of tables, views, sequences, or foreign tables not to be dumped. You can use multiple <strong id="b12902181745012"><a name="b12902181745012"></a><a name="b12902181745012"></a>-t</strong> parameters or wildcard characters to specify tables.</p>
    <p id="en-us_topic_0059777770_a823790546d6f47358367ccf300001ab8"><a name="en-us_topic_0059777770_a823790546d6f47358367ccf300001ab8"></a><a name="en-us_topic_0059777770_a823790546d6f47358367ccf300001ab8"></a>When <strong id="b134051721155011"><a name="b134051721155011"></a><a name="b134051721155011"></a>-t</strong> and <strong id="b114061721195017"><a name="b114061721195017"></a><a name="b114061721195017"></a>-T</strong> are input, the object will be stored in <strong id="b1540612119503"><a name="b1540612119503"></a><a name="b1540612119503"></a>-t</strong> list not <strong id="b94061221105014"><a name="b94061221105014"></a><a name="b94061221105014"></a>-T</strong> table object. </p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="p1210515817388"><a name="p1210515817388"></a><a name="p1210515817388"></a>-T <em id="en-us_topic_0059777770_en-us_topic_0058968121_i103466412093"><a name="en-us_topic_0059777770_en-us_topic_0058968121_i103466412093"></a><a name="en-us_topic_0059777770_en-us_topic_0058968121_i103466412093"></a>table1</em></p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dump" in the  *Tool Reference*.

### Examples<a name="en-us_topic_0283137162_en-us_topic_0237121171_en-us_topic_0096393572_s2612a8b058f24a14b1dfa8efd6f4c410"></a>

Example 1: Run  **gs\_dump**  to export definitions and data of the  **hr.staffs**  table. The exported files are in text format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup.sql -p 8000 human_resource -t hr.staffs -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:05:10]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:05:10]: total time: 3116  ms
```

Example 2: Run  **gs\_dump**  to export data of the  **hr.staffs**  table. The exported files are in .tar format.

```
gs_dump -f /home/omm/backup/MPPDB_table_data_backup.tar -p 8000 human_resource -t hr.staffs -a -F t 
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:04:26]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:04:26]: total time: 2570  ms
```

Example 3: Run  **gs\_dump**  to export the definition of the  **hr.staffs**  table. The exported files are stored in a directory.

```
gs_dump -f /home/omm/backup/MPPDB_table_def_backup -p 8000 human_resource -t hr.staffs -s -F d 
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:03:09]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:03:09]: total time: 2297  ms 
```

Example 4: Run  **gs\_dump**  to export the  **human\_resource**  database excluding the  **hr.staffs**  table. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup4.dmp -p 8000 human_resource -T hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:14:11]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:14:11]: total time: 2450  ms
```

Example 5: Run  **gs\_dump**  to export the  **hr.staffs**  and  **hr.employments**  tables. The exported files are in text format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup1.sql -p 8000 human_resource -t hr.staffs -t hr.employments -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:19:42]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:19:42]: total time: 2414  ms
```

Example 6: Run  **gs\_dump**  to export the  **human\_resource**  database excluding the  **hr.staffs**  and  **hr.employments**  tables. The exported files are in text format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup2.sql -p 8000 human_resource -T hr.staffs -T hr.employments -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:21:02]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:21:02]: total time: 3165  ms
```

Example 7: Run  **gs\_dump**  to export data and definition of the  **hr.staffs**  table, and the definition of the  **hr.employments**  table. The exported files are in .tar format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup3.tar -p 8000 human_resource -t hr.staffs -t hr.employments --exclude-table-data hr.employments -F t
Password:
gs_dump[port='8000'][human_resource][2018-11-14 11:32:02]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 11:32:02]: total time: 1645  ms
```

Example 8: Run  **gs\_dump**  to export data and definition of the  **hr.staffs**  table, encrypt the exported files, and store them in text format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup4.sql -p 8000 human_resource -t hr.staffs --with-encryption AES128 --with-key 1212121212121212 -F p
Password:
gs_dump[port='8000'][human_resource][2018-11-14 11:35:30]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 11:35:30]: total time: 6708  ms
```

Example 9: Run  **gs\_dump**  to export all tables \(views, sequences, and foreign tables are also included\) in the  **public**  schema and the  **staffs**  table in the  **hr**  schema, including data and table definition. The exported files are in a custom format.

```
gs_dump -f /home/omm/backup/MPPDB_table_backup5.dmp -p 8000 human_resource -t public.* -t hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: total time: 896  ms
```

Example 10: Run  **gs\_dump**  to export the definition of the view referencing to the  **test1**  table in the  **t1**  schema. The exported files are in a custom format.

```
gs_dump -U jack -f /home/omm/backup/MPPDB_view_backup6 -p 8000 human_resource -t t1.test1 --include-depend-objs --exclude-self -F d
Password:
gs_dump[port='8000'][jack][2018-11-14 17:21:18]: dump database human_resource successfully
gs_dump[port='8000'][jack][2018-11-14 17:21:23]: total time: 4239  ms
```
