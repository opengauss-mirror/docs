# Enabling the SCRLock Feature<a name="EN-US_TOPIC_0000001684856952"></a>

To enable the SCRLock feature, modify the configuration file and restart the database for the modification to take effect.

## Prerequisites<a name="section1830203416614"></a>

-   The openGauss version that contains the SCRLock feature has been installed on the active and standby nodes.
-   The SCRLock feature has been deployed in one-click mode.

## Procedure<a name="section1490394153919"></a>

1.  Log in to the management node as the database administrator.
2.  Modify the  **postgresql.conf**  file of the database.
    1.  Open the  **postgresql.conf**  file.

        ```
        vim postgresql.conf
        ```

    2.  Press  **i**  to enter the insert mode, find the following parameters, and modify them as required.  [Table 1](#table2032119112819)  describes the parameters.

        ```
        ss_enable_scrlock = off
        ss_enable_srclock_sleep_mode = off
        ss_scrlock_server_port = 8000
        ss_scrlock_worker_count = 2
        ss_scrlock_worker_bind_core = ''
        ss_scrlock_server_bind_core = ''
        ```

        **Table  1**  SCRLock configuration parameters

        <a name="table2032119112819"></a>
        <table><thead align="left"><tr id="row153213142814"><th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.1"><p id="p1032118122817"><a name="p1032118122817"></a><a name="p1032118122817"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="11.32%" id="mcps1.2.6.1.2"><p id="p12321612289"><a name="p12321612289"></a><a name="p12321612289"></a>Type</p>
        </th>
        <th class="cellrowborder" valign="top" width="27.68%" id="mcps1.2.6.1.3"><p id="p1792134743014"><a name="p1792134743014"></a><a name="p1792134743014"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="31.869999999999997%" id="mcps1.2.6.1.4"><p id="p03212162814"><a name="p03212162814"></a><a name="p03212162814"></a>Value Range</p>
        </th>
        <th class="cellrowborder" valign="top" width="9.13%" id="mcps1.2.6.1.5"><p id="p133211811288"><a name="p133211811288"></a><a name="p133211811288"></a>Default Value</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row113217112281"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p16921116152919"><a name="p16921116152919"></a><a name="p16921116152919"></a>ss_enable_scrlock</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p33216114289"><a name="p33216114289"></a><a name="p33216114289"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p10321616286"><a name="p10321616286"></a><a name="p10321616286"></a>Specifies whether to enable SCRLock.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul259918256327"></a><a name="ul259918256327"></a><ul id="ul259918256327"><li><strong id="b43081815165312"><a name="b43081815165312"></a><a name="b43081815165312"></a>on</strong>: enable.</li><li><strong id="b3105142211534"><a name="b3105142211534"></a><a name="b3105142211534"></a>off</strong>: disable.</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p173219132818"><a name="p173219132818"></a><a name="p173219132818"></a>off</p>
        </td>
        </tr>
        <tr id="row1032171132813"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p962235515324"><a name="p962235515324"></a><a name="p962235515324"></a>ss_enable_scrlock_sleep_mode</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p173226192810"><a name="p173226192810"></a><a name="p173226192810"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p732212192811"><a name="p732212192811"></a><a name="p732212192811"></a>Specifies whether to enable the SCRLock sleep mode.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul035519605310"></a><a name="ul035519605310"></a><ul id="ul035519605310"><li><strong id="b8527124935317"><a name="b8527124935317"></a><a name="b8527124935317"></a>on</strong>: enable.</li><li><strong id="b12367135911538"><a name="b12367135911538"></a><a name="b12367135911538"></a>off</strong>: disable.</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p432251152820"><a name="p432251152820"></a><a name="p432251152820"></a>on</p>
        </td>
        </tr>
        <tr id="row632219111286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p13393103633316"><a name="p13393103633316"></a><a name="p13393103633316"></a>ss_scrlock_server_port</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p53227110289"><a name="p53227110289"></a><a name="p53227110289"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p13221810289"><a name="p13221810289"></a><a name="p13221810289"></a>Specifies the listening port number of the SCRLock server.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p1920015242136"><a name="p1920015242136"></a><a name="p1920015242136"></a>1024–65535</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p18913214346"><a name="p18913214346"></a><a name="p18913214346"></a>8000</p>
        </td>
        </tr>
        <tr id="row832210117286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p10497618113418"><a name="p10497618113418"></a><a name="p10497618113418"></a>ss_scrlock_worker_count</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p13224115281"><a name="p13224115281"></a><a name="p13224115281"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p332217114288"><a name="p332217114288"></a><a name="p332217114288"></a>Specifies the number of workers on the SCRLock client.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p36595403134"><a name="p36595403134"></a><a name="p36595403134"></a>2–16</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p163223112288"><a name="p163223112288"></a><a name="p163223112288"></a>2</p>
        </td>
        </tr>
        <tr id="row1532261192810"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p8930195020342"><a name="p8930195020342"></a><a name="p8930195020342"></a>ss_scrlock_worker_bind_core</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p1032219172810"><a name="p1032219172810"></a><a name="p1032219172810"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p1728795315350"><a name="p1728795315350"></a><a name="p1728795315350"></a>Specifies the start and end CPU cores bound to SCRLock workers.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p163221915285"><a name="p163221915285"></a><a name="p163221915285"></a>Format: "Start_CPU_core_index End_CPU_core_index". Separate the two indexes with a space. Example: <strong id="b14503203115170"><a name="b14503203115170"></a><a name="b14503203115170"></a>10 15</strong></p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p1632214122810"><a name="p1632214122810"></a><a name="p1632214122810"></a>""</p>
        </td>
        </tr>
        <tr id="row632218172820"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p4128839123517"><a name="p4128839123517"></a><a name="p4128839123517"></a>ss_scrlock_server_bind_core</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p73229115286"><a name="p73229115286"></a><a name="p73229115286"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p2032210192820"><a name="p2032210192820"></a><a name="p2032210192820"></a>Specifies the start and end CPU cores bound to the SCRLock server.</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p193221162818"><a name="p193221162818"></a><a name="p193221162818"></a>Format: "Start_CPU_core_index End_CPU_core_index". Separate the two indexes with a space. Example: <strong id="b12881145161714"><a name="b12881145161714"></a><a name="b12881145161714"></a>10 15</strong></p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p83223110285"><a name="p83223110285"></a><a name="p83223110285"></a>""</p>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

3.  Restart the database to enable the SCRLock feature.
    1.  Stop openGauss.

        ```
        cm_ctl stop
        ```

    2.  Start openGauss.

        ```
        cm_ctl start
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >If the startup fails, rectify the fault based on the  **postgresql-**_YYYY-MM-DD\_HHMMSS_**.log**  file in the openGauss log directory.

4.  Verify that the SCRLock feature is successfully enabled.

    ```
    gsql -d postgres -p 16600 -c "show ss_enable_scrlock"
    ```

    If the following information is displayed, the feature is enabled successfully:

    ```
     ss_enable_scrlock
    -------------------
     on
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **-p 16600**:  **16600**  indicates the database port number. Change it based on the actual environment.
    >-   To view SCRLock log files, run the following command to view the last 20 lines:
    >    ```
    >    tail -fn20 ${GAUSSLOG}/pg_log/scrlock*.log
    >    ```

