# Exporting a Schema<a name="EN-US_TOPIC_0000001163057656"></a>

You can use  **gs\_dump**  to export data and all object definitions of a schema from openGauss. You can export one or more specified schemas as needed. You can specify the information to export as follows:

-   Export full information of a schema, including its data and object definitions.
-   Export data of a schema, excluding its object definitions.
-   Export the object definitions of a schema, including the definitions of tables, stored procedures, and indexes.

## Procedure<a name="en-us_topic_0283136726_en-us_topic_0237121170_en-us_topic_0096392705_se1377b9a87714047bb07fd6d163c6734"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run  **gs\_dump**  to export the  **hr**  and  **public**  schemas.

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


## Examples<a name="en-us_topic_0283136726_en-us_topic_0237121170_en-us_topic_0096392705_s221cf543e4004d598aa6fafa8b79f843"></a>

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

