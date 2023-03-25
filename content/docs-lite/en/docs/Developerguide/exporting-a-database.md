# Exporting a Database<a name="EN-US_TOPIC_0289899839"></a>

You can use  **gs\_dump**  to export data and all object definitions of a database from openGauss. You can specify the information to export as follows:

-   Export full information of a database, including its data and all object definitions.

    You can use the exported information to create a database containing the same data as the current one.

-   Export all object definitions of a database, including the definitions of the database, functions, schemas, tables, indexes, and stored procedures.

    You can use the exported object definitions to quickly create a database that is the same as the current one, except that the new database does not have data.

-   Export data of a database.

## Procedure<a name="en-us_topic_0283136854_en-us_topic_0237121169_en-us_topic_0096392335_s3e29cf3b34314c088216013e01293af6"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Use  **gs\_dump**  to export data of the  **userdatabase**  database.

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
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output. If the output format is (-F c/-F d/-F t), the <strong>-f</strong> parameter must be specified.</p>
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
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"></a><a name="en-us_topic_0283136854_en-us_topic_0237121169_p1278211752814"></a>Name of the database to be exported.</p>
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

    For details about other parameters, see "Server Tools \> gs\_dump" in  _Tool Reference_.


## Examples<a name="en-us_topic_0283136854_en-us_topic_0237121169_en-us_topic_0096392335_s3e34e9e7c7e948d49d1f24d6038514c0"></a>

Example 1: Run  **gs\_dump**  to export full information of the  **postgres**  database. The exported file is in SQL text format.

```
gs_dump -f /home/omm/backup/postgres_backup.sql -p 8000 postgres -F p
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
gs_dump -f /home/omm/backup/postgres_def_backup.sql -p 8000 postgres --with-encryption AES128 --with-key abcdefg_?1234567 -s -F p
Password:
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: dump database postgres successfully
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: total time: 1161  ms
```

