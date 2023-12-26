# Enabling the UWAL Feature<a name="EN-US_TOPIC_0000001741361428"></a>

To enable the UWAL feature, modify the configuration file and restart the database for the modification to take effect.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Once the UWAL feature is enabled, it cannot be disabled.

## Prerequisites<a name="en-us_topic_0000001666458629_section1830203416614"></a>

-   The openGauss version that contains the UWAL feature has been installed on the active and standby nodes.
-   The UWAL feature has been deployed in one-click mode.

## Procedure<a name="en-us_topic_0000001666458629_section124991926975"></a>

1.  Log in to the management node as the database administrator.
2.  Modify the  **postgresql.conf**  file of the database.
    1.  Open the  **postgresql.conf**  file.

        ```
        vim postgresql.conf
        ```

    2.  Press  **i**  to enter the insert mode and add the following parameters to the end of the file. One active node and one standby node are used as an example. Set the parameters based on the actual environment. For details about the parameters, see  [Table 1](#en-us_topic_0000001666458629_table135651186916).

        ```
        replconninfo1='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.207 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.207 remoteuwalport=9991'
        enable_uwal = on
        uwal_config = '{"uwal_nodeid": 0, "uwal_ip": "10.10.10.201", "uwal_port": 9991, "uwal_protocol": "tcp", "cpu_bind_switch": "true", "cpu_bind_start": 1, "cpu_bind_num": 3}'
        uwal_disk_size = 8589934592
        uwal_devices_path = '/home/Data/uwal/'
        uwal_log_path = '/home/Data/opengauss_master/uwal_log'
        uwal_rpc_compression_switch = true
        uwal_rpc_flowcontrol_switch = true
        uwal_rpc_flowcontrol_value = 128
        uwal_async_append_switch = false
        application_name = 'node201'
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   If there are one active node and two standby nodes, add the  **replconninfo2**  parameter to the next line of the  **replconninfo1**  parameter. For example:
        >    ```
        >    replconninfo2='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.208 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.208 remoteuwalport=9991'
        >    ```
        >-   If there are one active node and  _N_  standby nodes, add parameters  **replconninfo2**  to  **replconninfo**_**N**_  in sequence.

        **Table  1**  UWAL configuration parameters

        <a name="en-us_topic_0000001666458629_table135651186916"></a>
        <table><thead align="left"><tr id="en-us_topic_0000001666458629_row25651989917"><th class="cellrowborder" valign="top" width="23.126556486302924%" id="mcps1.2.5.1.1"><p id="en-us_topic_0000001666458629_p656518814920"><a name="en-us_topic_0000001666458629_p656518814920"></a><a name="en-us_topic_0000001666458629_p656518814920"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="8.071088974417027%" id="mcps1.2.5.1.2"><p id="en-us_topic_0000001666458629_p1588918155523"><a name="en-us_topic_0000001666458629_p1588918155523"></a><a name="en-us_topic_0000001666458629_p1588918155523"></a>Type</p>
        </th>
        <th class="cellrowborder" valign="top" width="44.60040751641386%" id="mcps1.2.5.1.3"><p id="en-us_topic_0000001666458629_p156538994"><a name="en-us_topic_0000001666458629_p156538994"></a><a name="en-us_topic_0000001666458629_p156538994"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="24.2019470228662%" id="mcps1.2.5.1.4"><p id="en-us_topic_0000001666458629_p756568792"><a name="en-us_topic_0000001666458629_p756568792"></a><a name="en-us_topic_0000001666458629_p756568792"></a>Value Range</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0000001666458629_row1344716210013"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p15447202403"><a name="en-us_topic_0000001666458629_p15447202403"></a><a name="en-us_topic_0000001666458629_p15447202403"></a>replconninfo{N}</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p4447122006"><a name="en-us_topic_0000001666458629_p4447122006"></a><a name="en-us_topic_0000001666458629_p4447122006"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p12291125152313"><a name="en-us_topic_0000001666458629_p12291125152313"></a><a name="en-us_topic_0000001666458629_p12291125152313"></a>Configures the IP address and port number of the remote UWAL node. Add <strong id="en-us_topic_0000001666458629_b672042117595"><a name="en-us_topic_0000001666458629_b672042117595"></a><a name="en-us_topic_0000001666458629_b672042117595"></a>remotenodeid</strong> (<strong id="en-us_topic_0000001666458629_b3886172635911"><a name="en-us_topic_0000001666458629_b3886172635911"></a><a name="en-us_topic_0000001666458629_b3886172635911"></a>uwal_nodeid</strong> of the remote node), <strong id="en-us_topic_0000001666458629_b12336173695913"><a name="en-us_topic_0000001666458629_b12336173695913"></a><a name="en-us_topic_0000001666458629_b12336173695913"></a>remoteuwalhost</strong> (<strong id="en-us_topic_0000001666458629_b121021840185914"><a name="en-us_topic_0000001666458629_b121021840185914"></a><a name="en-us_topic_0000001666458629_b121021840185914"></a>uwal_ip</strong> of the remote node), and <strong id="en-us_topic_0000001666458629_b172327115014"><a name="en-us_topic_0000001666458629_b172327115014"></a><a name="en-us_topic_0000001666458629_b172327115014"></a>remoteuwalport</strong> (<strong id="en-us_topic_0000001666458629_b2092294606"><a name="en-us_topic_0000001666458629_b2092294606"></a><a name="en-us_topic_0000001666458629_b2092294606"></a>uwal_port</strong> of the remote node) to the end of the original parameters. <span class="parmvalue" id="en-us_topic_0000001666458629_parmvalue10543195803112"><a name="en-us_topic_0000001666458629_parmvalue10543195803112"></a><a name="en-us_topic_0000001666458629_parmvalue10543195803112"></a><b>N</b></span> specifies the information about the <em id="en-us_topic_0000001666458629_i13971812771"><a name="en-us_topic_0000001666458629_i13971812771"></a><a name="en-us_topic_0000001666458629_i13971812771"></a>N</em>th node to be listened on and authenticated by the current node.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p11263735204712"><a name="en-us_topic_0000001666458629_p11263735204712"></a><a name="en-us_topic_0000001666458629_p11263735204712"></a>Character string. An empty string indicates that no information about the <em id="en-us_topic_0000001666458629_i13952538174210"><a name="en-us_topic_0000001666458629_i13952538174210"></a><a name="en-us_topic_0000001666458629_i13952538174210"></a>N</em>th node is configured.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row14252637115317"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p8252203735311"><a name="en-us_topic_0000001666458629_p8252203735311"></a><a name="en-us_topic_0000001666458629_p8252203735311"></a>enable_uwal</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p152521637135313"><a name="en-us_topic_0000001666458629_p152521637135313"></a><a name="en-us_topic_0000001666458629_p152521637135313"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p625212379535"><a name="en-us_topic_0000001666458629_p625212379535"></a><a name="en-us_topic_0000001666458629_p625212379535"></a>Specifies whether to enable the UWAL feature.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul1730195610532"></a><a name="en-us_topic_0000001666458629_ul1730195610532"></a><ul id="en-us_topic_0000001666458629_ul1730195610532"><li><strong id="en-us_topic_0000001666458629_b1452384910287"><a name="en-us_topic_0000001666458629_b1452384910287"></a><a name="en-us_topic_0000001666458629_b1452384910287"></a>on</strong>: enable.</li><li><strong id="en-us_topic_0000001666458629_b6504818122920"><a name="en-us_topic_0000001666458629_b6504818122920"></a><a name="en-us_topic_0000001666458629_b6504818122920"></a>off</strong>: disable.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row459675018428"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p859675013425"><a name="en-us_topic_0000001666458629_p859675013425"></a><a name="en-us_topic_0000001666458629_p859675013425"></a>uwal_config</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p2596195011427"><a name="en-us_topic_0000001666458629_p2596195011427"></a><a name="en-us_topic_0000001666458629_p2596195011427"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p1473010295313"><a name="en-us_topic_0000001666458629_p1473010295313"></a><a name="en-us_topic_0000001666458629_p1473010295313"></a>UWAL configuration.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p059665015426"><a name="en-us_topic_0000001666458629_p059665015426"></a><a name="en-us_topic_0000001666458629_p059665015426"></a>Character string of the JSON type.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row4407698390"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p1840715973919"><a name="en-us_topic_0000001666458629_p1840715973919"></a><a name="en-us_topic_0000001666458629_p1840715973919"></a>uwal_disk_size</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p1140717915395"><a name="en-us_topic_0000001666458629_p1140717915395"></a><a name="en-us_topic_0000001666458629_p1140717915395"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p17407792391"><a name="en-us_topic_0000001666458629_p17407792391"></a><a name="en-us_topic_0000001666458629_p17407792391"></a>Disk size occupied by UWAL. The value cannot exceed the total disk size. Unit: byte.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p16829854115014"><a name="en-us_topic_0000001666458629_p16829854115014"></a><a name="en-us_topic_0000001666458629_p16829854115014"></a>Minimum value: <strong id="en-us_topic_0000001666458629_b76064162412"><a name="en-us_topic_0000001666458629_b76064162412"></a><a name="en-us_topic_0000001666458629_b76064162412"></a>8589934592</strong></p>
        <p id="en-us_topic_0000001666458629_p17120172118219"><a name="en-us_topic_0000001666458629_p17120172118219"></a><a name="en-us_topic_0000001666458629_p17120172118219"></a>Maximum value: <strong id="en-us_topic_0000001666458629_b4234201910417"><a name="en-us_topic_0000001666458629_b4234201910417"></a><a name="en-us_topic_0000001666458629_b4234201910417"></a>4398046511104</strong></p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row124911412194316"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p1849211210431"><a name="en-us_topic_0000001666458629_p1849211210431"></a><a name="en-us_topic_0000001666458629_p1849211210431"></a>uwal_devices_path</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p949214126432"><a name="en-us_topic_0000001666458629_p949214126432"></a><a name="en-us_topic_0000001666458629_p949214126432"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p649211210432"><a name="en-us_topic_0000001666458629_p649211210432"></a><a name="en-us_topic_0000001666458629_p649211210432"></a>Path for storing UWAL files. The path must be an existing path. It is the input parameter name when the UwalInit() function is invoked.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p13444115913211"><a name="en-us_topic_0000001666458629_p13444115913211"></a><a name="en-us_topic_0000001666458629_p13444115913211"></a>Character string of the file storage path.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row138231819439"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p1138281811439"><a name="en-us_topic_0000001666458629_p1138281811439"></a><a name="en-us_topic_0000001666458629_p1138281811439"></a>uwal_log_path</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p11382161815431"><a name="en-us_topic_0000001666458629_p11382161815431"></a><a name="en-us_topic_0000001666458629_p11382161815431"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p1832318524495"><a name="en-us_topic_0000001666458629_p1832318524495"></a><a name="en-us_topic_0000001666458629_p1832318524495"></a>Path for storing UWAL log files. The path must be an existing path.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p19301132112335"><a name="en-us_topic_0000001666458629_p19301132112335"></a><a name="en-us_topic_0000001666458629_p19301132112335"></a>Character string of the file storage path.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row15325134455119"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p143269444516"><a name="en-us_topic_0000001666458629_p143269444516"></a><a name="en-us_topic_0000001666458629_p143269444516"></a>uwal_rpc_compression_switch</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p9792504515"><a name="en-us_topic_0000001666458629_p9792504515"></a><a name="en-us_topic_0000001666458629_p9792504515"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p17326344185111"><a name="en-us_topic_0000001666458629_p17326344185111"></a><a name="en-us_topic_0000001666458629_p17326344185111"></a>Specifies whether to enable compressed transfer.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul723414185211"></a><a name="en-us_topic_0000001666458629_ul723414185211"></a><ul id="en-us_topic_0000001666458629_ul723414185211"><li><strong id="en-us_topic_0000001666458629_b46211635163012"><a name="en-us_topic_0000001666458629_b46211635163012"></a><a name="en-us_topic_0000001666458629_b46211635163012"></a>true</strong>: enable.</li><li><strong id="en-us_topic_0000001666458629_b1526114493016"><a name="en-us_topic_0000001666458629_b1526114493016"></a><a name="en-us_topic_0000001666458629_b1526114493016"></a>false</strong>: disable.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row20803334125218"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p680363414522"><a name="en-us_topic_0000001666458629_p680363414522"></a><a name="en-us_topic_0000001666458629_p680363414522"></a>uwal_rpc_flowcontrol_switch</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p26042047125212"><a name="en-us_topic_0000001666458629_p26042047125212"></a><a name="en-us_topic_0000001666458629_p26042047125212"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p1560715215815"><a name="en-us_topic_0000001666458629_p1560715215815"></a><a name="en-us_topic_0000001666458629_p1560715215815"></a>Specifies whether to enable flow control for the asynchronous standby database. This parameter is set on the active database.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul175600166531"></a><a name="en-us_topic_0000001666458629_ul175600166531"></a><ul id="en-us_topic_0000001666458629_ul175600166531"><li><strong id="en-us_topic_0000001666458629_b3132859183014"><a name="en-us_topic_0000001666458629_b3132859183014"></a><a name="en-us_topic_0000001666458629_b3132859183014"></a>on</strong>: enable.</li><li><strong id="en-us_topic_0000001666458629_b024329143120"><a name="en-us_topic_0000001666458629_b024329143120"></a><a name="en-us_topic_0000001666458629_b024329143120"></a>off</strong>: disable.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row1861817512539"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p106188514539"><a name="en-us_topic_0000001666458629_p106188514539"></a><a name="en-us_topic_0000001666458629_p106188514539"></a>uwal_rpc_flowcontrol_value</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p3618115110538"><a name="en-us_topic_0000001666458629_p3618115110538"></a><a name="en-us_topic_0000001666458629_p3618115110538"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p176184512531"><a name="en-us_topic_0000001666458629_p176184512531"></a><a name="en-us_topic_0000001666458629_p176184512531"></a>Flow control threshold of the asynchronous standby database. Unit: MB.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p637754013113"><a name="en-us_topic_0000001666458629_p637754013113"></a><a name="en-us_topic_0000001666458629_p637754013113"></a>8–2048</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row10727151734917"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p177273171495"><a name="en-us_topic_0000001666458629_p177273171495"></a><a name="en-us_topic_0000001666458629_p177273171495"></a>uwal_async_append_switch</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p16727181734910"><a name="en-us_topic_0000001666458629_p16727181734910"></a><a name="en-us_topic_0000001666458629_p16727181734910"></a>Boolean</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p197271417124919"><a name="en-us_topic_0000001666458629_p197271417124919"></a><a name="en-us_topic_0000001666458629_p197271417124919"></a>Specifies whether UWAL uses synchronous write or asynchronous write.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul3411546175514"></a><a name="en-us_topic_0000001666458629_ul3411546175514"></a><ul id="en-us_topic_0000001666458629_ul3411546175514"><li><strong id="en-us_topic_0000001666458629_b23191546183114"><a name="en-us_topic_0000001666458629_b23191546183114"></a><a name="en-us_topic_0000001666458629_b23191546183114"></a>true</strong>: Asynchronous write is used.</li><li><strong id="en-us_topic_0000001666458629_b1279241123217"><a name="en-us_topic_0000001666458629_b1279241123217"></a><a name="en-us_topic_0000001666458629_b1279241123217"></a>false</strong>: Synchronous write is used.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row152985345311"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p92987341734"><a name="en-us_topic_0000001666458629_p92987341734"></a><a name="en-us_topic_0000001666458629_p92987341734"></a>application_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p17299143412311"><a name="en-us_topic_0000001666458629_p17299143412311"></a><a name="en-us_topic_0000001666458629_p17299143412311"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p1529919348319"><a name="en-us_topic_0000001666458629_p1529919348319"></a><a name="en-us_topic_0000001666458629_p1529919348319"></a>Specifies the client name used in the current connection request.</p>
        </td>
        <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p1529911344310"><a name="en-us_topic_0000001666458629_p1529911344310"></a><a name="en-us_topic_0000001666458629_p1529911344310"></a>Any character string.</p>
        </td>
        </tr>
        </tbody>
        </table>

        **Table  2**  uwal\_config parameters

        <a name="en-us_topic_0000001666458629_table1040322664419"></a>
        <table><thead align="left"><tr id="en-us_topic_0000001666458629_row04034268441"><th class="cellrowborder" valign="top" width="19.966082532504238%" id="mcps1.2.5.1.1"><p id="en-us_topic_0000001666458629_p111461143194516"><a name="en-us_topic_0000001666458629_p111461143194516"></a><a name="en-us_topic_0000001666458629_p111461143194516"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="11.430186546071225%" id="mcps1.2.5.1.2"><p id="en-us_topic_0000001666458629_p10146124311459"><a name="en-us_topic_0000001666458629_p10146124311459"></a><a name="en-us_topic_0000001666458629_p10146124311459"></a>Type</p>
        </th>
        <th class="cellrowborder" valign="top" width="37.79536461277557%" id="mcps1.2.5.1.3"><p id="en-us_topic_0000001666458629_p81461543204519"><a name="en-us_topic_0000001666458629_p81461543204519"></a><a name="en-us_topic_0000001666458629_p81461543204519"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="30.808366308648953%" id="mcps1.2.5.1.4"><p id="en-us_topic_0000001666458629_p4146124313457"><a name="en-us_topic_0000001666458629_p4146124313457"></a><a name="en-us_topic_0000001666458629_p4146124313457"></a>Value Range</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0000001666458629_row1840492611441"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p159511917154511"><a name="en-us_topic_0000001666458629_p159511917154511"></a><a name="en-us_topic_0000001666458629_p159511917154511"></a>uwal_nodeid</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p18951517184518"><a name="en-us_topic_0000001666458629_p18951517184518"></a><a name="en-us_topic_0000001666458629_p18951517184518"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p095114178458"><a name="en-us_topic_0000001666458629_p095114178458"></a><a name="en-us_topic_0000001666458629_p095114178458"></a>ID of the current UWAL node.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p595111754512"><a name="en-us_topic_0000001666458629_p595111754512"></a><a name="en-us_topic_0000001666458629_p595111754512"></a>0–7</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row4404142620442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p69511017174510"><a name="en-us_topic_0000001666458629_p69511017174510"></a><a name="en-us_topic_0000001666458629_p69511017174510"></a>uwal_ip</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p19511617154512"><a name="en-us_topic_0000001666458629_p19511617154512"></a><a name="en-us_topic_0000001666458629_p19511617154512"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p1795101715458"><a name="en-us_topic_0000001666458629_p1795101715458"></a><a name="en-us_topic_0000001666458629_p1795101715458"></a>UWAL listening address, which is the input parameter name when the UwalInit() function is invoked.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p795111794512"><a name="en-us_topic_0000001666458629_p795111794512"></a><a name="en-us_topic_0000001666458629_p795111794512"></a>IPv4</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row44041726104418"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p14951161784518"><a name="en-us_topic_0000001666458629_p14951161784518"></a><a name="en-us_topic_0000001666458629_p14951161784518"></a>uwal_port</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p20951317134520"><a name="en-us_topic_0000001666458629_p20951317134520"></a><a name="en-us_topic_0000001666458629_p20951317134520"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p895117171458"><a name="en-us_topic_0000001666458629_p895117171458"></a><a name="en-us_topic_0000001666458629_p895117171458"></a>UWAL listening port, which is the input parameter name when the UwalInit() function is invoked.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p119516171453"><a name="en-us_topic_0000001666458629_p119516171453"></a><a name="en-us_topic_0000001666458629_p119516171453"></a>9000–65535</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row14404182611442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p8951161719452"><a name="en-us_topic_0000001666458629_p8951161719452"></a><a name="en-us_topic_0000001666458629_p8951161719452"></a>uwal_protocol</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p149511317134514"><a name="en-us_topic_0000001666458629_p149511317134514"></a><a name="en-us_topic_0000001666458629_p149511317134514"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p695113171452"><a name="en-us_topic_0000001666458629_p695113171452"></a><a name="en-us_topic_0000001666458629_p695113171452"></a>(Optional) Connection protocol of the current node, which is the input parameter name when the UwalInit() function is invoked.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul795119174457"></a><a name="en-us_topic_0000001666458629_ul795119174457"></a><ul id="en-us_topic_0000001666458629_ul795119174457"><li>tcp</li><li>rdma</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row7404142611449"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p59524178454"><a name="en-us_topic_0000001666458629_p59524178454"></a><a name="en-us_topic_0000001666458629_p59524178454"></a>cpu_bind_switch</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p139521917124511"><a name="en-us_topic_0000001666458629_p139521917124511"></a><a name="en-us_topic_0000001666458629_p139521917124511"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p995281715454"><a name="en-us_topic_0000001666458629_p995281715454"></a><a name="en-us_topic_0000001666458629_p995281715454"></a>(Optional) Specifies whether to enable core binding for UWAL core threads.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0000001666458629_ul495219179451"></a><a name="en-us_topic_0000001666458629_ul495219179451"></a><ul id="en-us_topic_0000001666458629_ul495219179451"><li><strong id="en-us_topic_0000001666458629_b333733943320"><a name="en-us_topic_0000001666458629_b333733943320"></a><a name="en-us_topic_0000001666458629_b333733943320"></a>true</strong>: enable.</li><li><strong id="en-us_topic_0000001666458629_b1915194816338"><a name="en-us_topic_0000001666458629_b1915194816338"></a><a name="en-us_topic_0000001666458629_b1915194816338"></a>false</strong>: disable.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row19404926124410"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p1695231715458"><a name="en-us_topic_0000001666458629_p1695231715458"></a><a name="en-us_topic_0000001666458629_p1695231715458"></a>cpu_bind_start</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p1952317184512"><a name="en-us_topic_0000001666458629_p1952317184512"></a><a name="en-us_topic_0000001666458629_p1952317184512"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p199521217134513"><a name="en-us_topic_0000001666458629_p199521217134513"></a><a name="en-us_topic_0000001666458629_p199521217134513"></a>(Optional) Start CPU core used for UWAL core binding.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p49528172459"><a name="en-us_topic_0000001666458629_p49528172459"></a><a name="en-us_topic_0000001666458629_p49528172459"></a>0–1024</p>
        </td>
        </tr>
        <tr id="en-us_topic_0000001666458629_row204058264440"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0000001666458629_p4952717194510"><a name="en-us_topic_0000001666458629_p4952717194510"></a><a name="en-us_topic_0000001666458629_p4952717194510"></a>cpu_bind_num</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0000001666458629_p1095211714511"><a name="en-us_topic_0000001666458629_p1095211714511"></a><a name="en-us_topic_0000001666458629_p1095211714511"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0000001666458629_p89529171458"><a name="en-us_topic_0000001666458629_p89529171458"></a><a name="en-us_topic_0000001666458629_p89529171458"></a>(Optional) Number of CPU cores bound to UWAL.</p>
        </td>
        <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0000001666458629_p1795231715454"><a name="en-us_topic_0000001666458629_p1795231715454"></a><a name="en-us_topic_0000001666458629_p1795231715454"></a>2–16</p>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

3.  Restart the database to enable the UWAL feature.
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

4.  Verify that the UWAL feature is successfully enabled.

    ```
    gsql -d postgres -p 16600 -c "show enable_uwal"
    ```

    If the following information is displayed, the feature is enabled successfully:

    ```
     enable_uwal
    -------------------
     on
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **-p 16600**:  **16600**  indicates the database port number. Change it based on the actual environment.
    >-   To view UWAL log files, go to the path specified by  **uwal\_log\_path**  and run the following command:
    >    ```
    >    cat uwal*.log
    >    ```

