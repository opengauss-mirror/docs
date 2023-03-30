# Exporting All Databases<a name="EN-US_TOPIC_0242370323"></a>

You can use  **gs\_dumpall**  to export full information of all databases in openGauss, including information about each database and global objects in openGauss. You can specify the information to export as follows:

-   Export full information of all databases, including information about each database and global objects \(such as roles and tablespaces\) in openGauss.

    You can use the exported information to create a host environment containing the same databases, global objects, and data as the current one.

-   Export data of all databases, excluding all object definitions and global objects.
-   Export all object definitions of all databases, including the definitions of tablespaces, databases, functions, schemas, tables, indexes, and stored procedures.

    You can use the exported object definitions to quickly create a host environment that is the same as the current one, containing the same databases and tablespaces but no data.


## Procedure<a name="en-us_topic_0237121173_en-us_topic_0096392335_s3e29cf3b34314c088216013e01293af6"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run  **gs\_dumpall**  to export full information of all databases.

    ```
    gs_dumpall -W Bigdata@123 -U omm -f /home/omm/backup/MPPDB_backup.sql -p 8000 
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0237121173_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121173_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237121173_p48382816258"><a name="en-us_topic_0237121173_p48382816258"></a><a name="en-us_topic_0237121173_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237121173_p18332812257"><a name="en-us_topic_0237121173_p18332812257"></a><a name="en-us_topic_0237121173_p18332812257"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237121173_p583122816257"><a name="en-us_topic_0237121173_p583122816257"></a><a name="en-us_topic_0237121173_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121173_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121173_p3830287252"><a name="en-us_topic_0237121173_p3830287252"></a><a name="en-us_topic_0237121173_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121173_p8232111218592"><a name="en-us_topic_0237121173_p8232111218592"></a><a name="en-us_topic_0237121173_p8232111218592"></a>Username for database connection. The user must be an openGauss administrator.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121173_p1583152842510"><a name="en-us_topic_0237121173_p1583152842510"></a><a name="en-us_topic_0237121173_p1583152842510"></a>-U <span id="en-us_topic_0237121173_text12918893481"><a name="en-us_topic_0237121173_text12918893481"></a><a name="en-us_topic_0237121173_text12918893481"></a>omm</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121173_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121173_p89920588539"><a name="en-us_topic_0237121173_p89920588539"></a><a name="en-us_topic_0237121173_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121173_p69431335210"><a name="en-us_topic_0237121173_p69431335210"></a><a name="en-us_topic_0237121173_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0237121173_ul194074341627"></a><a name="en-us_topic_0237121173_ul194074341627"></a><ul id="en-us_topic_0237121173_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying this parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121173_p1898043113581"><a name="en-us_topic_0237121173_p1898043113581"></a><a name="en-us_topic_0237121173_p1898043113581"></a>-W Bigdata@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121173_row1823810139566"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121173_p11238171316560"><a name="en-us_topic_0237121173_p11238171316560"></a><a name="en-us_topic_0237121173_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121173_p323861311565"><a name="en-us_topic_0237121173_p323861311565"></a><a name="en-us_topic_0237121173_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121173_p11238513175619"><a name="en-us_topic_0237121173_p11238513175619"></a><a name="en-us_topic_0237121173_p11238513175619"></a>-f /home/<span id="en-us_topic_0237121173_text153463112535"><a name="en-us_topic_0237121173_text153463112535"></a><a name="en-us_topic_0237121173_text153463112535"></a>omm</span>/backup/MPPDB_backup.sql</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121173_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121173_p84119521250"><a name="en-us_topic_0237121173_p84119521250"></a><a name="en-us_topic_0237121173_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121173_p14838631464"><a name="en-us_topic_0237121173_p14838631464"></a><a name="en-us_topic_0237121173_p14838631464"></a>TCP port or local Unix-domain socket file extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121173_p341117521853"><a name="en-us_topic_0237121173_p341117521853"></a><a name="en-us_topic_0237121173_p341117521853"></a>-p <span id="en-us_topic_0237121173_text1275116185515"><a name="en-us_topic_0237121173_text1275116185515"></a><a name="en-us_topic_0237121173_text1275116185515"></a>8000</span></p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dumpall" in the  _Tool Reference_.


## Examples<a name="en-us_topic_0237121173_en-us_topic_0096392335_s3e34e9e7c7e948d49d1f24d6038514c0"></a>

Example 1: Run  **gs\_dumpall**  as the cluster administrator  **omm**  to export full information of all databases in a cluster. After the command is executed, a large amount of output information will be displayed.  **total time**  will be displayed at the end of the information, indicating that the backup is successful. In this example, only relative output information is included.

```
gs_dumpall -W Bigdata@123 -U omm -f /home/omm/backup/MPPDB_backup.sql -p 8000 
gs_dumpall[port='8000'][2017-07-21 15:57:31]: dumpall operation successful
gs_dumpall[port='8000'][2017-07-21 15:57:31]: total time: 9627  ms
```

Example 2: Run  **gs\_dumpall**  as the cluster administrator  **omm**  to export object definitions of all databases in a cluster. The exported files are in text format. After the command is executed, a large amount of output information will be displayed.  **total time**  will be displayed at the end of the information, indicating that the backup is successful. In this example, only relative output information is included.

```
gs_dumpall -W Bigdata@123 -U omm -f /home/omm/backup/MPPDB_backup.sql -p 8000 -s 
gs_dumpall[port='8000'][2018-11-14 11:28:14]: dumpall operation successful
gs_dumpall[port='8000'][2018-11-14 11:28:14]: total time: 4147  ms
```

Example 3: Run  **gs\_dumpall**  to export data of all databases in a cluster, encrypt the exported files, and store them in text format. After the command is executed, a large amount of output information will be displayed.  **total time**  will be displayed at the end of the information, indicating that the backup is successful. In this example, only relative output information is included.

```
gs_dumpall -f /home/omm/backup/MPPDB_backup.sql -p 8000 -a --with-encryption AES128 --with-key 1234567812345678
gs_dumpall[port='8000'][2018-11-14 11:32:26]: dumpall operation successful
gs_dumpall[port='8000'][2018-11-14 11:23:26]: total time: 4147  ms
```

