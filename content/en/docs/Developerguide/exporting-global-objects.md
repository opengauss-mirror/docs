# Exporting Global Objects<a name="EN-US_TOPIC_0000001208299131"></a>

You can use  **gs\_dumpall**  to export global objects, including database users, user groups, tablespaces, and attributes \(for example, global access permissions\), from openGauss.

## Procedure<a name="en-us_topic_0283137605_en-us_topic_0237121174_section5854958132810"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run  **gs\_dumpall**  to export global tablespaces.

    ```
    gs_dumpall -U omm -f /home/omm/backup/MPPDB_tablespace.sql -p 8000 -t
    Password:
    ```

    **Table  1**  Common parameters

    <a name="en-us_topic_0283137605_en-us_topic_0237121174_table1781122816253"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137605_en-us_topic_0237121174_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137605_en-us_topic_0237121174_p48382816258"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p48382816258"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p48382816258"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137605_en-us_topic_0237121174_p18332812257"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p18332812257"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p18332812257"></a>Parameter Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137605_en-us_topic_0237121174_p583122816257"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p583122816257"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p583122816257"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137605_en-us_topic_0237121174_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p3830287252"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p3830287252"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p8232111218592"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p8232111218592"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p8232111218592"></a>Username for database connection. The user must be the <span>openGauss</span> administrator.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p1583152842510"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1583152842510"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1583152842510"></a>-U <span id="en-us_topic_0283137605_en-us_topic_0237121174_text086013275487"><a name="en-us_topic_0283137605_en-us_topic_0237121174_text086013275487"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_text086013275487"></a>omm</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137605_en-us_topic_0237121174_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p89920588539"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p89920588539"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p69431335210"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p69431335210"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p69431335210"></a>User password for database connection.</p>
    <a name="en-us_topic_0283137605_en-us_topic_0237121174_ul194074341627"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_ul194074341627"></a><ul id="en-us_topic_0283137605_en-us_topic_0237121174_ul194074341627"><li>This parameter is not required for database administrators if the trust policy is used for authentication.</li><li>If you connect to the database without specifying this parameter and you are not a database administrator, you will be prompted to enter the password.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p1898043113581"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1898043113581"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137605_en-us_topic_0237121174_row1823810139566"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p11238171316560"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p11238171316560"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p323861311565"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p323861311565"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p323861311565"></a>Folder to store exported files. If this parameter is not specified, the exported files are stored in the standard output.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p11238513175619"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p11238513175619"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p11238513175619"></a>-f /home/<span id="en-us_topic_0283137605_en-us_topic_0237121174_text45761636125319"><a name="en-us_topic_0283137605_en-us_topic_0237121174_text45761636125319"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_text45761636125319"></a>omm</span>/backup/<em id="en-us_topic_0283137605_en-us_topic_0237121174_i022863611191"><a name="en-us_topic_0283137605_en-us_topic_0237121174_i022863611191"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_i022863611191"></a>MPPDB_tablespace</em>.sql</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137605_en-us_topic_0237121174_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p84119521250"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p84119521250"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p14838631464"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p14838631464"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p14838631464"></a>TCP port or the local Unix-domain socket file name extension on which the server is listening for connections.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p341117521853"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p341117521853"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p341117521853"></a>-p <span id="en-us_topic_0283137605_en-us_topic_0237121174_text11526133105112"><a name="en-us_topic_0283137605_en-us_topic_0237121174_text11526133105112"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_text11526133105112"></a>8000</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137605_en-us_topic_0237121174_row1339718574716"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p18625164815715"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p18625164815715"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p18625164815715"></a>-t</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p1962511481717"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1962511481717"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1962511481717"></a>Dumps only tablespaces. You can also use <strong id="en-us_topic_0237121174_b1375718102153"><a name="en-us_topic_0237121174_b1375718102153"></a><a name="en-us_topic_0237121174_b1375718102153"></a>--tablespaces-only</strong> alternatively.</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137605_en-us_topic_0237121174_p1662514481776"><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1662514481776"></a><a name="en-us_topic_0283137605_en-us_topic_0237121174_p1662514481776"></a>-t</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about other parameters, see "Server Tools \> gs\_dumpall" in the  _Tool Reference_.


## Examples<a name="en-us_topic_0283137605_en-us_topic_0237121174_section191141882614"></a>

Example 1: Run  **gs\_dumpall**  as the administrator  **omm**  to export global tablespaces and users of all databases. The exported files are in text format.

```
gs_dumpall -U omm -f /home/omm/backup/MPPDB_globals.sql -p 8000 -g
Password:
gs_dumpall[port='8000'][2018-11-14 19:06:24]: dumpall operation successful
gs_dumpall[port='8000'][2018-11-14 19:06:24]: total time: 1150  ms
```

Example 2: Run  **gs\_dumpall**  as the administrator  **omm**  to export global tablespaces of all databases, encrypt the exported files, and store them in text format.

```
gs_dumpall -U omm -f /home/omm/backup/MPPDB_tablespace.sql -p 8000 -t --with-encryption AES128 --with-key 1212121212121212
Password:
gs_dumpall[port='8000'][2018-11-14 19:00:58]: dumpall operation successful
gs_dumpall[port='8000'][2018-11-14 19:00:58]: total time: 186  ms
```

Example 3: Run  **gs\_dumpall**  as the administrator  **omm**  to export global users of all databases. The exported files are in text format.

```
gs_dumpall -U omm -f /home/omm/backup/MPPDB_user.sql -p 8000 -r
Password:
gs_dumpall[port='8000'][2018-11-14 19:03:18]: dumpall operation successful
gs_dumpall[port='8000'][2018-11-14 19:03:18]: total time: 162  ms
```

