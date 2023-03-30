# Data Export By a User Without Required Permissions<a name="EN-US_TOPIC_0289899959"></a>

**gs\_dump**  and  **gs\_dumpall**  use  **-U**  to specify the user that performs the export. If the specified user does not have the required permissions, data cannot be exported. In this case, you need to assign the permission to a user who does not have the permission, and then set the  **--role**  parameter in the export command to specify the role with the permission. Then,  **gs\_dump**  or  **gs\_dumpall**  uses the  **--role**  parameter to specify a role to export data.

## Procedure<a name="en-us_topic_0283136762_en-us_topic_0237121175_en-us_topic_0096393674_s29032edccba443edb1990c4715fcc047"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Use  **gs\_dump**  to export data of the  **human\_resource**  database.

    User  **jack**  does not have the permissions to export data of the  **human\_resource**  database and the role  **role1**  has this permission. To export data of the  **human\_resource**  database, you need to assign the permission of  **role1**  to  **jack**  and set  **--role**  to  **role1**  in the export command. The exported files are in .tar format.

    ```
    gs_dump -U jack -f /home/omm/backup/MPPDB_backup.tar -p 8000 human_resource --role role1 --rolepassword  abc@1234 -F t
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283136762_en-us_topic_0237121175_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136762_en-us_topic_0237121175_row10837281257"><th class="cellrowborder" valign="top" width="24.169999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136762_en-us_topic_0237121175_p48382816258"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p48382816258"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136762_en-us_topic_0237121175_p18332812257"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p18332812257"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136762_en-us_topic_0237121175_p583122816257"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p583122816257"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1483528152520"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p3830287252"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p3830287252"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p8232111218592"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8232111218592"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8232111218592"></a>Username for database connection.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p1583152842510"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1583152842510"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row199295855317"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p89920588539"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p89920588539"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p69431335210"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p69431335210"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283136762_en-us_topic_0237121175_ul194074341627"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_ul194074341627"></a><ul id="en-us_topic_0283136762_en-us_topic_0237121175_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying the <strong id="b1979615923317"><a name="b1979615923317"></a><a name="b1979615923317"></a>-W</strong> parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p1898043113581"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1898043113581"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1823810139566"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p11238171316560"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p11238171316560"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p323861311565"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p323861311565"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p11238513175619"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p11238513175619"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p11238513175619"></a>-f /home/<span id="en-us_topic_0283136762_en-us_topic_0237121175_text8898641105316"><a name="en-us_topic_0283136762_en-us_topic_0237121175_text8898641105316"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_text8898641105316"></a>omm</span>/backup/MPPDB_backup.tar</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row9411195215519"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p84119521250"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p84119521250"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p14838631464"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p14838631464"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p341117521853"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p341117521853"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p341117521853"></a>-p <span id="en-us_topic_0283136762_en-us_topic_0237121175_text7679194345113"><a name="en-us_topic_0283136762_en-us_topic_0237121175_text7679194345113"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_text7679194345113"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1362511481379"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p8782872280"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8782872280"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p1278211752814"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1278211752814"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1278211752814"></a>Name of the database to export.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p12782147122820"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p12782147122820"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p12782147122820"></a>human_resource</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1280163131716"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p14801831178"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p14801831178"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p14801831178"></a>--role</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p8618101717583"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8618101717583"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p8618101717583"></a>Role name for the export operation. After this parameter is set, the <strong id="en-us_topic_0237121175_b626182131913"><a name="en-us_topic_0237121175_b626182131913"></a><a name="en-us_topic_0237121175_b626182131913"></a>SET ROLE</strong> command will be issued after <strong id="en-us_topic_0237121175_b19266142120198"><a name="en-us_topic_0237121175_b19266142120198"></a><a name="en-us_topic_0237121175_b19266142120198"></a>gs_dump</strong> or <strong id="en-us_topic_0237121175_b16267821141917"><a name="en-us_topic_0237121175_b16267821141917"></a><a name="en-us_topic_0237121175_b16267821141917"></a>gs_dumpall</strong> connects to the database. It is useful when the user specified by <strong id="en-us_topic_0237121175_b83835236199"><a name="en-us_topic_0237121175_b83835236199"></a><a name="en-us_topic_0237121175_b83835236199"></a>-U</strong> does not have the permissions required by <strong id="en-us_topic_0237121175_b1538472321917"><a name="en-us_topic_0237121175_b1538472321917"></a><a name="en-us_topic_0237121175_b1538472321917"></a>gs_dump</strong> or <strong id="en-us_topic_0237121175_b11385223171915"><a name="en-us_topic_0237121175_b11385223171915"></a><a name="en-us_topic_0237121175_b11385223171915"></a>gs_dumpall</strong>. This parameter allows you to switch to a role with the required permissions.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p66581345155917"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p66581345155917"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p66581345155917"></a>-r role1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1899681910160"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p18625164815715"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p18625164815715"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p18625164815715"></a>--rolepassword</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p1962511481717"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1962511481717"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1962511481717"></a>Role password.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p1662514481776"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1662514481776"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p1662514481776"></a>--rolepassword  abc@1234</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136762_en-us_topic_0237121175_row1885993510341"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p141711116303"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p141711116303"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p9417511183018"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p9417511183018"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p9417511183018"></a>Select the format of file to export. The values of <strong id="en-us_topic_0237121175_b20989547101910"><a name="en-us_topic_0237121175_b20989547101910"></a><a name="en-us_topic_0237121175_b20989547101910"></a>-F</strong> are as follows:</p>
    <a name="en-us_topic_0283136762_en-us_topic_0237121175_ul4489102813339"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_ul4489102813339"></a><ul id="en-us_topic_0283136762_en-us_topic_0237121175_ul4489102813339"><li><strong id="en-us_topic_0237121175_b1114124961913"><a name="en-us_topic_0237121175_b1114124961913"></a><a name="en-us_topic_0237121175_b1114124961913"></a>p</strong>: plaintext</li><li><strong id="en-us_topic_0237121175_b2784552151913"><a name="en-us_topic_0237121175_b2784552151913"></a><a name="en-us_topic_0237121175_b2784552151913"></a>c</strong>: custom</li><li><strong id="en-us_topic_0237121175_b1274885318195"><a name="en-us_topic_0237121175_b1274885318195"></a><a name="en-us_topic_0237121175_b1274885318195"></a>d</strong>: directory</li><li><strong id="en-us_topic_0237121175_b13696654101919"><a name="en-us_topic_0237121175_b13696654101919"></a><a name="en-us_topic_0237121175_b13696654101919"></a>t</strong>: .tar</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136762_en-us_topic_0237121175_p4417181118302"><a name="en-us_topic_0283136762_en-us_topic_0237121175_p4417181118302"></a><a name="en-us_topic_0283136762_en-us_topic_0237121175_p4417181118302"></a>-F t</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dump" or "Server Tools \> gs\_dumpall" in the  _Tool Reference_.


## Examples<a name="en-us_topic_0283136762_en-us_topic_0237121175_en-us_topic_0096393674_sed072bab085e4087b15699dfeda9a662"></a>

Example 1: User  **jack**  does not have the permissions required to export data of the  **human\_resource**  database using  **gs\_dump**  and the role  **role1**  has the permissions. To export data of the  **human\_resource**  database, you can set  **--role**  to  **role1**  in the  **gs\_dump**  command. The exported files are in .tar format.

```
human_resource=# CREATE USER jack IDENTIFIED BY "1234@abc";
CREATE ROLE
human_resource=# GRANT role1 TO jack;
GRANT ROLE

gs_dump -U jack -f /home/omm/backup/MPPDB_backup11.tar -p 8000 human_resource --role role1 --rolepassword abc@1234 -F t
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:21:10]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:21:10]: total time: 4239  ms
```

Example 2: User  **jack**  does not have the permissions required to export the  **public**  schema using  **gs\_dump**  and the role  **role1**  has the permissions. To export the  **public**  schema, you can set  **--role**  to  **role1**  in the  **gs\_dump**  command. The exported files are in .tar format.

```
human_resource=# CREATE USER jack IDENTIFIED BY "1234@abc";
CREATE ROLE
human_resource=# GRANT role1 TO jack;
GRANT ROLE

gs_dump -U jack -f /home/omm/backup/MPPDB_backup12.tar -p 8000 human_resource -n public --role role1 --rolepassword abc@1234 -F t
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:21:10]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:21:10]: total time: 3278  ms
```

Example 3: User  **jack**  does not have the permissions required to export all databases in a cluster using  **gs\_dumpall**  and the role  **role1**  \(cluster administrator\) has the permissions. To export all the databases, you can set  **--role**  to  **role1**  in the  **gs\_dumpall**  command. The exported files are in text format.

```
human_resource=# CREATE USER jack IDENTIFIED BY "1234@abc";
CREATE ROLE
human_resource=# GRANT role1 TO jack;
GRANT ROLE

gs_dumpall -U jack -f /home/omm/backup/MPPDB_backup.sql -p 8000 --role role1 --rolepassword abc@1234
Password:
gs_dumpall[port='8000'][human_resource][2018-11-14 17:26:18]: dumpall operation successful
gs_dumpall[port='8000'][human_resource][2018-11-14 17:26:18]: total time: 6437  ms
```

