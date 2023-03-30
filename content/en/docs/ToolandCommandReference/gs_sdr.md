# gs\_sdr<a name="ZH-CN_TOPIC_0000001263109824"></a>

## Background<a name="en-us_topic_0287275995_section431817462"></a>

openGauss 3.1.0 and later versions provide the gs\_sdr tool to implement cross-region remote DR without using additional storage media. The tool provides functions such as streaming DR establishment, DR switchover, planned primary/standby switchover, DR removal, DR status monitoring, and displaying the help information and version number.

## Prerequisites<a name="en-us_topic_0287275995_section1372118241094"></a>

Log in to the OS as the OS user **omm** to run the **gs\_sdr** command.

## Syntax<a name="section95636533613"></a>

-   Establishing a DR Relationship

    ```
    gs_sdr -t start -m [primary|disaster_standby] [-U DR_USERNAME] [-W DR_PASSWORD] [-X XMLFILE] [--json JSONFILE] [--time-out=SECS] [-l LOGFILE]
    ```

-   Promoting DR Instance to Primary

    ```
    gs_sdr -t failover [-l LOGFILE] 
    ```

-   Planned Primary/Standby Switchover

    ```
    gs_sdr -t switchover -m [primary|disaster_standby] [--time-out=SECS] [-l LOGFILE]
    ```

-   DR Removal

    ```
    gs_sdr -t stop [-X XMLFILE] [--json JSONFILE] [-l LOGFILE]
    ```


-   Monitoring DR Status

    ```
    gs_sdr -t query [-l LOGFILE]
    ```


## Parameter Description<a name="en-us_topic_0287275995_section16817173615"></a>

**gs\_sdr** has the following types of parameters:

-   Common parameters
    -   -t

        Specifies the type of the **gs\_sdr** command.

        Value range: **start**, **failover**, **switchover**, **stop**, or **query**.

    -   -l

        Specifies a log file and its storage path.

        Default value: **$GAUSSLOG/om/gs\_sdr-YYYY-MM-DD\_hhmmss.log**

    -   -?, --help

        Display the help information.

    -   -V, --version

        Displays version information.


-   Parameters for establishing DR relationship:
    -   -m

        Expected role of the cluster in the DR relationship.

        Value range: **primary** or **disaster_standby**.

    -   -U

        Name of the DR user with the streaming replication permission.

    -   -W

        Password of the DR user.

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >
        >1. Before the DR relationship is established, you need to create a DR user on the primary cluster for DR authentication. The primary and standby clusters must use the same DR username and password. After a DR relationship is established, the user password cannot be changed. You can remove the DR relationship, modify the username and password, and establish the DR relationship again. The DR user password cannot contain blank characters and the following characters: |;&$<>`\'"{}()[]~*?!\n
        >2. If the **-U** and **-W** parameters are not input in the command line, they can be input in interactive mode during the establishment.

    -   -X

        XML file used during cluster installation. DR information can be configured in the XML file for DR establishment. That is, three columns ("localStreamIpmap1", "remoteStreamIpmap1" and remotedataPortBase) can be extended based on the XML file.

        The following describes how to configure the new columns. The information in bold is an example. Each line of information has a comment.

        ```
        <!-- Information about the node deployment on each server -->
        <DEVICELIST>
        <DEVICE sn="pekpomdev00038">
        <!-- Number of primary DNs that need to be deployed on the current host -->
        <PARAM name="dataNum" value="1"/>
        <!-- Basic port number of the primary DN -->
        <PARAM name="dataPortBase" value="26000"/>
        <!--Mapping between the SSH reliable channel IP address and streaming replication IP address of each DN shard node in the cluster -->
        <PARAM name="localStreamIpmap1" value="(10.244.44.216,172.31.12.58),(10.244.45.120,172.31.0.91)"/>
        <!--Mapping between the SSH reliable channel IP address and streaming replication IP address of each DN shard node in the peer cluster -->
        <PARAM name="remoteStreamIpmap1" value="(10.244.45.144,172.31.2.200),(10.244.45.40,172.31.0.38),(10.244.46.138,172.31.11.145),(10.244.48.60,172.31.9.37),(10.244.47.240,172.31.11.125)"/>
        <!--Port number of the primary DN in the peer cluster -->
        <PARAM name="remotedataPortBase" value="26000"/>
        </DEVICE>
        ```

    -   --json

        JSON file containing DR information.

        The following describes how to configure the JSON file. The information in bold is an example.

        ```
        {"remoteClusterConf": {"port": 26000, "shards": [[{"ip": "10.244.45.144", "dataIp": "172.31.2.200"}, {"ip": "10.244.45.40", "dataIp": "172.31.0.38"}, {"ip": "10.244.46.138", "dataIp": "172.31.11.145"}, {"ip": "10.244.48.60", "dataIp": "172.31.9.37"}, {"ip": "10.244.47.240", "dataIp": "172.31.11.125"}]]}, "localClusterConf": {"port": 26000, "shards": [[{"ip": "10.244.44.216", "dataIp": "172.31.12.58"}, {"ip": "10.244.45.120", "dataIp": "172.31.0.91"}]]}}
        Parameter description:
        # remoteClusterConf: DN shard information of the peer cluster. In the preceding command, port indicates the port of the primary DN in the peer cluster, and {"ip": "10.244.45.144", "dtaIp": "172.31.2.200"} indicates the mapping between the SSH reliable channel IP address and streaming replication IP address of each DN shard node in the peer cluster.
        # localClusterConf: DN shard information of the cluster. In the preceding command, port indicates the port of the primary DN in the cluster, and {"ip": "10.244.44.216", "dtaIp": "172.31.12.58"} indicates the mapping between the SSH reliable channel IP address and streaming replication IP address of each DN shard node in the cluster.
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >
        >-Either **-X** or **--json** can be used to configure DR information. If both parameters are delivered in the command, the JSON file prevails.

    -   --time-out=SECS

        Specifies the timeout period. The primary cluster waits for the connection to the standby cluster. If the connection times out, the OM script automatically exits. Unit: s

        Value range: a positive integer. The recommended value is **1200**.

        Default value: **1200**


-   Parameters for switching a DR node to primary:
    
    None.
    
-   Parameters for removing DR:
    -   -X

        DR information configured in the XML file during cluster installation. That is, three columns ("localStreamIpmap1", "remoteStreamIpmap1" and remotedataPortBase) need to be extended.

    -   --json

        JSON file containing local and peer DR information.

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >
        >-For details about how to configure **-X** and **--json**, see the parameters for establishing DR relationship in this section.


-   DR query parameters:
    -   None.
    
    The DR status query result is described as follows:


<a name="zh-cn_topic_0287275995_table1171617665"></a>
<table><thead align="left"><tr id="en-us_topic_0287275995_row918131719617"><th class="cellrowborder" valign="top" width="16.29162916291629%" id="mcps1.1.6.1.1"><p id="en-us_topic_0287275995_p18181171612"><a name="en-us_topic_0287275995_p18181171612"></a><a name="en-us_topic_0287275995_p18181171612"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="12.49124912491249%" id="mcps1.1.6.1.2"><p id="p235823320131"><a name="p235823320131"></a><a name="p235823320131"></a>Meaning</p>
</th>
<th class="cellrowborder" valign="top" width="10.221022102210222%" id="mcps1.1.6.1.3"><p id="p18300828151317"><a name="p18300828151317"></a><a name="p18300828151317"></a>Value</p>
</th>
<th class="cellrowborder" valign="top" width="32.54325432543255%" id="mcps1.1.6.1.4"><p id="en-us_topic_0287275995_p18185171620"><a name="en-us_topic_0287275995_p18185171620"></a><a name="en-us_topic_0287275995_p18185171620"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="28.45284528452845%" id="mcps1.1.6.1.5"><p id="en-us_topic_0287275995_p141817173612"><a name="en-us_topic_0287275995_p141817173612"></a><a name="en-us_topic_0287275995_p141817173612"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275995_row1181917465"><td class="cellrowborder" rowspan="12" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="zh-cn_topic_0287275995_p51816176618"><a name="zh-cn_topic_0287275995_p51816176618"></a><a name="zh-cn_topic_0287275995_p51816176618"></a>hadr_cluster_stat</p>
<p id="p1880163681713"><a name="p1880163681713"></a><a name="p1880163681713"></a></p>
<p id="p18877836101715"><a name="p18877836101715"></a><a name="p18877836101715"></a></p>
<p id="p6875163621715"><a name="p6875163621715"></a><a name="p6875163621715"></a></p>
<p id="p587317364176"><a name="p587317364176"></a><a name="p587317364176"></a></p>
<p id="p1887173613178"><a name="p1887173613178"></a><a name="p1887173613178"></a></p>
<p id="p586993619175"><a name="p586993619175"></a><a name="p586993619175"></a></p>
<p id="p817614184168"><a name="p817614184168"></a><a name="p817614184168"></a></p>
<p id="p46021414173"><a name="p46021414173"></a><a name="p46021414173"></a></p>
<p id="p18246410151717"><a name="p18246410151717"></a><a name="p18246410151717"></a></p>
<p id="p1136134191716"><a name="p1136134191716"></a><a name="p1136134191716"></a></p>
<p id="p1924515721712"><a name="p1924515721712"></a><a name="p1924515721712"></a></p>
</td>
<td class="cellrowborder" rowspan="12" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p19358933111319"><a name="p19358933111319"></a><a name="p19358933111319"></a>Database instance status in streaming DR</p>
<p id="p18358123312134"><a name="p18358123312134"></a><a name="p18358123312134"></a></p>
<p id="p1035843311138"><a name="p1035843311138"></a><a name="p1035843311138"></a></p>
<p id="p11359433181316"><a name="p11359433181316"></a><a name="p11359433181316"></a></p>
<p id="p123591033161312"><a name="p123591033161312"></a><a name="p123591033161312"></a></p>
<p id="p133591533191317"><a name="p133591533191317"></a><a name="p133591533191317"></a></p>
<p id="p129190214163"><a name="p129190214163"></a><a name="p129190214163"></a></p>
<p id="p817661811168"><a name="p817661811168"></a><a name="p817661811168"></a></p>
<p id="p1460014181716"><a name="p1460014181716"></a><a name="p1460014181716"></a></p>
<p id="p162468102175"><a name="p162468102175"></a><a name="p162468102175"></a></p>
<p id="p736113415173"><a name="p736113415173"></a><a name="p736113415173"></a></p>
<p id="p18245875178"><a name="p18245875178"></a><a name="p18245875178"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p18301228161319"><a name="p18301228161319"></a><a name="p18301228161319"></a>normal</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p199231717184"><a name="p199231717184"></a><a name="p199231717184"></a>The database instance does not participate in streaming DR.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p1919212412160"><a name="p1919212412160"></a><a name="p1919212412160"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row020217369"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1630142871312"><a name="p1630142871312"></a><a name="p1630142871312"></a>full_backup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8909171188"><a name="p8909171188"></a><a name="p8909171188"></a>Full data replication in the primary database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1694192163015"><a name="p1694192163015"></a><a name="p1694192163015"></a>This status is available only for the primary database instance in streaming DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row62461715613"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p9301102814139"><a name="p9301102814139"></a><a name="p9301102814139"></a>archive</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18886172181"><a name="p18886172181"></a><a name="p18886172181"></a>Streaming log replication in the primary database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1452675710199"><a name="p1452675710199"></a><a name="p1452675710199"></a>This status is available only for the primary database instance in streaming DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row1525317264"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p0301228171318"><a name="p0301228171318"></a><a name="p0301228171318"></a>backup_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1682453175316"><a name="p1682453175316"></a><a name="p1682453175316"></a>Full data replication in the primary database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p5193175871910"><a name="p5193175871910"></a><a name="p5193175871910"></a>This status is available only for the primary database instance in streaming DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row122515171668"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p73021028101310"><a name="p73021028101310"></a><a name="p73021028101310"></a>archive_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8836178184"><a name="p8836178184"></a><a name="p8836178184"></a>Streaming log replication in the primary database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1190145871911"><a name="p1190145871911"></a><a name="p1190145871911"></a>This status is available only for the primary database instance in streaming DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row626181719616"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p13302172816136"><a name="p13302172816136"></a><a name="p13302172816136"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13817176181"><a name="p13817176181"></a><a name="p13817176181"></a>Planned primary/standby switchover is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p171708419168"><a name="p171708419168"></a><a name="p171708419168"></a>This status is available for both the primary and standby database instances in streaming DR.</p>
</td>
</tr>
<tr id="row18919132101614"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1919102171616"><a name="p1919102171616"></a><a name="p1919102171616"></a>restore</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p16791117121814"><a name="p16791117121814"></a><a name="p16791117121814"></a>Full data restoration in the DR database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p6919132117162"><a name="p6919132117162"></a><a name="p6919132117162"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row1617510180165"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p171761318181613"><a name="p171761318181613"></a><a name="p171761318181613"></a>restore_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13176718131611"><a name="p13176718131611"></a><a name="p13176718131611"></a>Full data restoration in the DR database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p2176121841617"><a name="p2176121841617"></a><a name="p2176121841617"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row159151418175"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1060191418174"><a name="p1060191418174"></a><a name="p1060191418174"></a>recovery</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p106011461719"><a name="p106011461719"></a><a name="p106011461719"></a>Streaming log replication in the DR database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p360814151712"><a name="p360814151712"></a><a name="p360814151712"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row424671061713"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p4246710121719"><a name="p4246710121719"></a><a name="p4246710121719"></a>recovery_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1246181091710"><a name="p1246181091710"></a><a name="p1246181091710"></a>Streaming log replication in the DR database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p924661021719"><a name="p924661021719"></a><a name="p924661021719"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row73601340177"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p153611411712"><a name="p153611411712"></a><a name="p153611411712"></a>promote</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p15361642176"><a name="p15361642176"></a><a name="p15361642176"></a>The DR database instance is being promoted to primary.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1036164121712"><a name="p1036164121712"></a><a name="p1036164121712"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row15245270173"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p172452075178"><a name="p172452075178"></a><a name="p172452075178"></a>promote_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18246175179"><a name="p18246175179"></a><a name="p18246175179"></a>The DR database instance fails to promote to primary.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p14246147171716"><a name="p14246147171716"></a><a name="p14246147171716"></a>This status is available only for DR database instances in streaming DR.</p>
</td>
</tr>
<tr id="row14821817175"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p194821316173"><a name="p194821316173"></a><a name="p194821316173"></a>hadr_switchover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1648251191717"><a name="p1648251191717"></a><a name="p1648251191717"></a>Progress of the planned switchover between the primary and standby database instances in streaming DR</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p148214131710"><a name="p148214131710"></a><a name="p148214131710"></a>Percentage</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p948316111170"><a name="p948316111170"></a><a name="p948316111170"></a>Switchover progress.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p13483219177"><a name="p13483219177"></a><a name="p13483219177"></a>-</p>
</td>
</tr>
<tr id="row42595841618"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p8256584165"><a name="p8256584165"></a><a name="p8256584165"></a>hadr_failover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1590754152317"><a name="p1590754152317"></a><a name="p1590754152317"></a>Progress of promoting a streaming DR database instance to primary</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p22617589162"><a name="p22617589162"></a><a name="p22617589162"></a>Percentage</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p826258151613"><a name="p826258151613"></a><a name="p826258151613"></a>Switchover progress.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p92685801614"><a name="p92685801614"></a><a name="p92685801614"></a>-</p>
</td>
</tr>
<tr id="row17474054111620"><td class="cellrowborder" rowspan="2" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p1047415451616"><a name="p1047415451616"></a><a name="p1047415451616"></a>RTO</p>
<p id="p1148483862115"><a name="p1148483862115"></a><a name="p1148483862115"></a></p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1882919513319"><a name="p1882919513319"></a><a name="p1882919513319"></a>Time required for data restoration when a disaster occurs</p>
<p id="p134842038152120"><a name="p134842038152120"></a><a name="p134842038152120"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p194751454171616"><a name="p194751454171616"></a><a name="p194751454171616"></a>Null</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p0475165419163"><a name="p0475165419163"></a><a name="p0475165419163"></a>Streaming DR is interrupted due to database instance shutdown or network exceptions.</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p15475195421610"><a name="p15475195421610"></a><a name="p15475195421610"></a>Only the primary database instance can be queried in streaming DR.</p>
<p id="p64840389213"><a name="p64840389213"></a><a name="p64840389213"></a></p>
</td>
</tr>
<tr id="row1848333882114"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p12484638152111"><a name="p12484638152111"></a><a name="p12484638152111"></a>Not null</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p4484538102113"><a name="p4484538102113"></a><a name="p4484538102113"></a>Time required for data restoration \(unit: s\)</p>
</td>
</tr>
<tr id="row5191051121616"><td class="cellrowborder" rowspan="2" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p20192165113165"><a name="p20192165113165"></a><a name="p20192165113165"></a>RPO</p>
<p id="p768414465165"><a name="p768414465165"></a><a name="p768414465165"></a></p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p819245171615"><a name="p819245171615"></a><a name="p819245171615"></a>Data loss duration of the database instance when a disaster occurs.</p>
<p id="p17675104641612"><a name="p17675104641612"></a><a name="p17675104641612"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p4192751161612"><a name="p4192751161612"></a><a name="p4192751161612"></a>Null</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p819210515167"><a name="p819210515167"></a><a name="p819210515167"></a>Streaming DR is interrupted due to database instance shutdown or network exceptions.</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p91921651151613"><a name="p91921651151613"></a><a name="p91921651151613"></a>Only the primary database instance can be queried in streaming DR.</p>
<p id="p7991201015166"><a name="p7991201015166"></a><a name="p7991201015166"></a></p>
</td>
</tr>
<tr id="en-us_topic_0287275995_row11262171166"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p186731346181611"><a name="p186731346181611"></a><a name="p186731346181611"></a>Non null</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13670124611616"><a name="p13670124611616"></a><a name="p13670124611616"></a>Duration in which data of the database instance may be lost, in seconds.</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="section1428616494387"></a>

-   Establish a DR relationship in a primary cluster.

    ```
    gs_sdr -t start -m primary -X /opt/install_streaming_primary_cluster.xml --time-out=1200 -U 'hadr_user' -W 'opengauss@123'
    --------------------------------------------------------------------------------
    Streaming disaster recovery start 2b9bc268d8a111ecb679fa163e2f2d28
    --------------------------------------------------------------------------------
    Start create streaming disaster relationship ...
    Got step:[-1] for action:[start].
    Start first step of streaming start.
    Start common config step of streaming start.
    Start generate hadr key files.
    Streaming key files already exist.
    Finished generate and distribute hadr key files.
    Start encrypt hadr user info.
    Successfully encrypt hadr user info.
    Start save hadr user info into database.
    Successfully save hadr user info into database.
    Start update pg_hba config.
    Successfully update pg_hba config.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Successfully check instance status.
    Successfully check cm_ctl is available.
    Successfully check cluster is not under upgrade opts.
    Start checking disaster recovery user.
    Successfully check disaster recovery user.
    Start prepare secure files.
    Start copy hadr user key files.
    Successfully copy secure files.
    Start fourth step of streaming start.
    Starting reload wal_keep_segments value: 16384.
    Successfully reload wal_keep_segments value: 16384.
    Start fifth step of streaming start.
    Successfully set [/omm/CMServer/backup_open][0].
    Start sixth step of streaming start.
    Start seventh step of streaming start.
    Start eighth step of streaming start.
    Waiting main standby connection..
    Main standby already connected.
    Successfully check cluster status is: Normal
    Start ninth step of streaming start.
    Starting reload wal_keep_segments value: {'6001': '128'}.
    Successfully reload wal_keep_segments value: {'6001': '128'}.
    Successfully removed step file.
    Successfully do streaming disaster recovery start.
    ```

-   Establish a DR relationship in a standby cluster.

    ```
    gs_sdr -t start -m disaster_standby -X /opt/install_streaming_standby_cluster.xml --time-out=1200 -U 'hadr_user' -W 'opengauss@123'
    --------------------------------------------------------------------------------
    Streaming disaster recovery start e34ec1e4d8a111ecb617fa163e77e94a
    --------------------------------------------------------------------------------
    Start create streaming disaster relationship ...
    Got step:[-1] for action:[start].
    Start first step of streaming start.
    Start common config step of streaming start.
    Start update pg_hba config.
    Successfully update pg_hba config.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Successfully check instance status.
    Successfully check cm_ctl is available.
    Successfully check cluster is not under upgrade opts.
    Start build key files from remote cluster.
    Start copy hadr user key files.
    Successfully build and distribute key files to all nodes.
    Start fourth step of streaming start.
    Start fifth step of streaming start.
    Successfully set [/omm/CMServer/backup_open][2].
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Start sixth step of streaming start.
    Start seventh step of streaming start.
    Start eighth step of streaming start.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Start ninth step of streaming start.
    Successfully removed step file.
    Successfully do streaming disaster recovery start.
    ```

-   Demote a primary cluster to standby as planned.

    ```
    gs_sdr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Streaming disaster recovery switchover 6897d15ed8a411ec82acfa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster switchover ...
    Streaming disaster cluster switchover...
    Successfully check cluster status is: Normal
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully check cluster is not under upgrade opts.
    Got step:[-1] for action:[switchover].
    Stopping the cluster.
    Successfully stopped the cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Start checking truncation, please wait...
    Stopping the cluster.
    Successfully stopped the cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    .
    The cluster status is Normal.
    Successfully removed step file.
    Successfully do streaming disaster recovery switchover.
    ```

-   Promote a standby cluster to primary as planned.

    ```
    gs_sdr -t switchover -m primary
    --------------------------------------------------------------------------------
    Streaming disaster recovery switchover 20542bbcd8a511ecbbdbfa163e77e94a
    --------------------------------------------------------------------------------
    Start streaming disaster switchover ...
    Streaming disaster cluster switchover...
    Waiting for cluster and instances normal...
    Successfully check cluster status is: Normal
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully check cluster is not under upgrade opts.
    Waiting for switchover barrier...
    Got step:[-1] for action:[switchover].
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Successfully removed step file.
    Successfully do streaming disaster recovery switchover.
    ```

-   Promote a DR cluster to primary.

    ```
    gs_sdr -t failover
    --------------------------------------------------------------------------------
    Streaming disaster recovery failover 65535214d8a611ecb804fa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster failover ...
    Got step:[-1] for action:[failover].
    Successfully check cluster status is: Normal
    Successfully check cluster is not under upgrade opts.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Got step:[-1] for action:[failover].
    Starting drop all node replication slots
    Finished drop all node replication slots
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Start remove replconninfo for instance:6001
    Start remove replconninfo for instance:6002
    Start remove replconninfo for instance:6003
    Start remove replconninfo for instance:6005
    Start remove replconninfo for instance:6004
    Successfully removed replconninfo for instance:6001
    Successfully removed replconninfo for instance:6004
    Successfully removed replconninfo for instance:6003
    Successfully removed replconninfo for instance:6002
    Successfully removed replconninfo for instance:6005
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Try to clean hadr user info.
    Successfully clean hadr user info from database.
    Successfully removed step file.
    Successfully do streaming disaster recovery failover.
    ```

-   Remove a primary cluster DR.

    ```
    gs_sdr -t stop -X /opt/install_streaming_standby_cluster.xml
    --------------------------------------------------------------------------------
    Streaming disaster recovery stop dae8539ed8a611ecade9fa163e77e94a
    --------------------------------------------------------------------------------
    Start remove streaming disaster relationship ...
    Got step:[-1] for action:[stop].
    Start first step of streaming stop.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Check cluster type succeed.
    Successfully check cluster is not under upgrade opts.
    Start third step of streaming stop.
    Start remove replconninfo for instance:6001
    Start remove replconninfo for instance:6002
    Successfully removed replconninfo for instance:6001
    Successfully removed replconninfo for instance:6002
    Start remove cluster file.
    Finished remove cluster file.
    Start fourth step of streaming stop.
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Start fifth step of streaming start.
    Starting drop all node replication slots
    Finished drop all node replication slots
    Start sixth step of streaming stop.
    Successfully check cluster status is: Normal
    Try to clean hadr user info.
    Successfully clean hadr user info from database.
    Successfully removed step file.
    Successfully do streaming disaster recovery stop.
    ```

-   Query the DR status.

    ```
    gs_sdr -t query
    --------------------------------------------------------------------------------
    Streaming disaster recovery query 1201b062d8a411eca83efa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster query ...
    Successfully check cluster is not under upgrade opts.
    Start check archive.
    Start check recovery.
    Start check RPO & RTO.
    Successfully execute streaming disaster recovery query, result:
    {'hadr_cluster_stat': 'archive', 'hadr_failover_stat': '', 'hadr_switchover_stat': '', 'RPO': '0', 'RTO': '0'}
    ```
