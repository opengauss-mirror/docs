# gs\_ddr

## Context<a name="zh-cn_topic_0287275995_section431817462"></a>

To simplify the manual deployment and use of dual-cluster resource pooling (dual-cluster networking or dual-cluster Dorado storage) and provide users with a simpler and faster experience, `openGauss` provides `gs_ddr`.

This tool provides functions such as automatic DR establishment, DR failover, planned primary/standby failover, DR removal, DR status monitoring, and displaying the help information and version number.

## Constraints<a name="zh-cn_topic_0287275995_section1372118241094"></a>

- The two clusters for setting up DR must be clusters that support the `cm` tool.
- The primary and standby clusters for which a DR relationship is to be established must have the same version.
- A cascaded standby node cannot exist before the DR dual-cluster is established.
- The initial database user name and password of the two clusters for setting up DR must be the same. All commands must be executed by the database user.
- If data inconsistency occurs between the two clusters for setting up DR, a full `build` will be performed on the DR cluster to initialize the cluster when the DR setup command is executed. Therefore, you need to confirm the data before setting up DR.
- The DR setup command and planned primary/standby failover command must be executed in both the primary and standby clusters (the execution node can be either the primary or standby node in the cluster). This is because the primary and standby clusters interact with each other during the execution.
- Before the DR relationship is established, you need to create a DR user on the primary cluster for DR authentication. The primary and standby clusters must use the same DR username and password. After a DR relationship is established, the user password cannot be changed. You can remove the DR relationship, modify the username and password, and establish the DR relationship again. The DR user password cannot contain the following characters: “| ;&$<>`'"{}()[]~*?!\ and spaces.
- When a DR relationship is established, if the number of cluster replicas is less than or equal to 2, `most_available_sync` is set to `on`. After the DR relationship is removed or `failover` is performed, this parameter is not restored to the initial value to ensure that the cluster is in the maximum availability mode.
- When a DR relationship is established, `synchronous_commit` is set to `on`. When the DR relationship is removed or the cluster is promoted to primary after the `failover`, the initial value is restored. The DR cluster can be read but cannot be written.
- After the DR cluster is promoted to primary by running the `failover` command, the DR relationship between the DR cluster and the original primary cluster becomes invalid. You need to re-establish the DR relationship.
- If the majority of `DNs` in the DR cluster are faulty or all `CMSs` and `DNs` are faulty, the DR relationship cannot be established, the DR cluster cannot be promoted to primary, and cannot be used. In this case, you need to rebuild the DR cluster.
- If a forcible failover is performed on the primary cluster, you need to rebuild the DR cluster.
- Both the primary and standby clusters support full backup and incremental backup using `gs_probackup`.
- After the DR relationship is established, the DN port cannot be changed.
- GUC parameters cannot be synchronized between the primary database instance and the DR database instance in a DR relationship.
- The primary and standby clusters do not support node replacement and repair, copy addition and reduction, or DCF mode.
- If the DR database instance has two copies and one copy is damaged, the DR database instance can still be promoted to primary to provide services. If the remaining copies are also damaged, data loss is inevitable.
- The clusters cannot be upgraded in DR state. You need to remove the DR relationship, upgrade the primary and standby clusters separately, and then establish the DR relationship again.
- When selecting the `IP` address for streaming replication-based DR between two clusters, you are advised to separate the network plane in the cluster from the cross-cluster network plane to balance pressure and improve security.
- During the upgrade, operations such as DR relationship establishment, primary/standby failover, DR promotion, DR relationship query, and DR relationship removal are not supported.
- You need to run the `gs_ddr` command as the `omm` user.

## Prerequisites

- Two resource pooling single clusters have been established.
- The users of the two resource pooling single clusters are the same.

## Syntax<a name="section95636533613"></a>

- Establishing a DR relationship

    ```python
    gs_ddr -t start -m [primary|disaster_standby] --disaster_type [dorado|stream] [-X XMLFILE] [--json JSONFILE] [--time-out=SECS] [-l LOGFILE]
    ```

    >[!NOTE]
    >
    >This command must be executed in both the primary and standby clusters.
    >
    >The default value of the `--disaster_type` parameter is `dorado`. You only need to specify the value when setting up the DR relationship. You do not need to specify the value in subsequent commands.

- Performing an unplanned DR failover

    ```python
    gs_ddr -t failover [-l LOGFILE]
    ```

    >[!NOTE]
    >
    >Note: This command can be executed only on the first standby node of the standby cluster. After the command is executed, the DR relationship is removed. There are two use cases:
    >
    >1. The primary cluster is abnormal (for example, the cluster is destroyed or breaks down). The standby cluster needs to be disconnected from the DR relationship and provide services for external systems.
    >
    >2. The DR relationship is removed. The standby cluster needs to be disconnected from the DR relationship and restore to a normal single cluster.

- Performing a planned primary/standby failover

    ```python
    gs_ddr -t switchover -m [primary|disaster_standby] [--time-out=SECS] [-l LOGFILE] 
    ```

    >[!NOTE]
    >
    >This command must be executed once in both the primary and standby clusters. After the command is executed, the primary cluster is demoted to standby and the standby cluster is promoted to primary.

- Removing the DR relationship

    ```python
    gs_ddr -t stop [-X XMLFILE] [--json JSONFILE] [-l LOGFILE]
    ```

    >[!NOTE]
    >
    >This command can be executed only on the first node of the primary cluster. After the command is executed, the DR relationship is removed. In this case, the status of the primary cluster is `Normal` when you run the `gs_ddr -t query` command, indicating that the primary cluster has been restored to a normal single cluster.
    >
    >To disconnect the standby cluster from the DR relationship, you also need to run the `gs_ddr -t failover` command on the first standby node.

- Monitoring the DR status

    ```python
    gs_ddr -t query [-l LOGFILE]
    ```

    >[!NOTE]
    >
    >This command can be executed on any node of the two clusters to query the status or task progress.

## Parameters<a name="zh-cn_topic_0287275995_section16817173615"></a>

`gs_ddr` parameters are classified into the following types:

- Common parameters:
    - -t

        Specifies the task type of the `gs_ddr` command.

        Value range: **start**, **failover**, **switchover**, **stop**, or **query**.

    - -l

        Specifies a log file and its storage path.

        Default value: `$GAUSSLOG/om/gs_ddr-YYYY-MM-DD_hhmmss.log`

    - -?, --help

        Displays help information.

    - -V, --version

        Displays version information.

- Parameters for establishing DR relationship:
    - -m

        Expected role of the cluster in the DR relationship.

        Value range: `primary`\ (primary cluster) or `disaster_standby`\ (standby cluster)

    - -X

        XML file used during cluster installation. DR information can be configured in the XML file for DR establishment. That is, three columns (`localStreamIpmap1`, `remoteStreamIpmap1`, and `remotedataPortBase`) can be extended based on the XML file.

        The configuration of the new fields is as follows:

        ```xml
        <!-- Node deployment information on each server -->
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

        >[!NOTE]
        >
        >In `localStreamIpmap1` and `remoteStreamIpmap1`, the `SSH` trusted channel `IP` is the trusted (secure) external `IP`, and the streaming replication `IP` is the `IP` used for primary/standby replication. If there is no external `IP`, you can set it to the streaming replication `IP`.
        >
        >The following uses `localStreamIpmap1` as an example to describe how to configure `IP` mapping. In the `value` parameter of `localStreamIpmap1`, there are two brackets, indicating that the cluster contains two nodes. In each bracket, the `IP` mapping is displayed as follows: (`SSH` trusted channel `IP`, streaming replication `IP`), which is the mapping between two `IPs`.
        >
        >`remotedataPortBase` indicates the port number of the primary `DN` in the peer cluster.

    - --json

        JSON file containing DR information.

        The JSON file is configured as follows:

        ```json
        {
            "remoteClusterConf": {
                "port": 26000,
                "shards": [[
                    {"ip": "10.244.45.144", "dataIp": "172.31.2.200"},
                    {"ip": "10.244.45.40", "dataIp": "172.31.0.38"},
                    {"ip": "10.244.46.138", "dataIp": "172.31.11.145"},
                    {"ip": "10.244.48.60", "dataIp": "172.31.9.37"},
                    {"ip": "10.244.47.240", "dataIp": "172.31.11.125"}
                ]]
            },
            "localClusterConf": {
                "port": 26000,
                "shards": [[
                    {"ip": "10.244.44.216", "dataIp": "172.31.12.58"},
                    {"ip": "10.244.45.120", "dataIp": "172.31.0.91"}
                ]]
            }
        }
        ```

        >[!NOTE]
        >`remoteClusterConf` indicates the `dn` shard information of the peer cluster, in which `port` indicates the port of the primary `dn` in the peer cluster.
        >
        >`localClusterConf` indicates the `dn` shard information of the local cluster, in which `port` indicates the port of the primary `dn` in the local cluster.
        >
        >`IP` in `shards` is the `IP` of the `SSH` trusted channel, that is, the trusted (secure) external `IP`. The streaming replication `IP` is used for primary/standby replication. If there is no external `IP`, you can set it to the streaming replication `IP`.
        >
        >Note: You can configure the DR information by setting either `-X` or `--json`. If both parameters are delivered in the command line, the JSON file prevails.

    - --time-out=SECS

        Specifies the timeout period. The primary cluster waits for the connection to the standby cluster. If the connection times out, the OM script automatically exits. The unit is second.

        Value range: a positive integer. The recommended value is 1200.

        Default value: 1200

        >[!NOTE]
        >
        >The `build` and `start` clusters have their own timeout settings. For the `build` cluster, the default timeout period is 1209600 seconds (14 days). If a build is not completed within this period, the cluster automatically exits.
        >
        >For the `start` cluster, the default timeout period is 604800 seconds (one week). If a startup is not completed within this period, the cluster automatically exits. If `--time-out=SECS` is not specified, the `build` cluster will not automatically exit after 1,200 seconds, and the `start` cluster will not automatically exit after 1,200 seconds.

    - --disaster_type

        Specifies the dual-cluster type during setup. The default value is `dorado`. If this parameter is not specified in the `start` command, the dual-cluster resource pooling storage replication is set up by default.

    - -f
    
        During DR setup, forcibly removes the temporary flag file generated by the `start` command to enable the setup process to start from the beginning instead of resuming from the last interruption.   

- Parameters for removing DR:
    - -X

        DR information configured in the XML file during cluster installation. That is, three columns ("localStreamIpmap1", "remoteStreamIpmap1" and remotedataPortBase) need to be extended.

    - --json

        JSON file containing local and peer DR information.

        >[!NOTE]
        >
        >-For details about how to configure **-X** and **--json**, see the parameters for establishing DR relationship in this section.

- DR query parameters:
    - None
    
    The DR status query result is described as follows:

<a name="zh-cn_topic_0287275995_table1171617665"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275995_row918131719617"><th class="cellrowborder" valign="top" width="16.29162916291629%" id="mcps1.1.6.1.1"><p id="zh-cn_topic_0287275995_p18181171612"><a name="zh-cn_topic_0287275995_p18181171612"></a><a name="zh-cn_topic_0287275995_p18181171612"></a>Project</p>
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
<td class="cellrowborder" rowspan="12" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p19358933111319"><a name="p19358933111319"></a><a name="p19358933111319"></a>Status of database instances in the two DR clusters</p>
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
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p199231717184"><a name="p199231717184"></a><a name="p199231717184"></a>The database instance does not participate in dual-cluster DR.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p1919212412160"><a name="p1919212412160"></a><a name="p1919212412160"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row020217369"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1630142871312"><a name="p1630142871312"></a><a name="p1630142871312"></a>full_backup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8909171188"><a name="p8909171188"></a><a name="p8909171188"></a>Full data replication in the primary database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1694192163015"><a name="p1694192163015"></a><a name="p1694192163015"></a>This status is available only for the primary database instance in dual-cluster DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row62461715613"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p9301102814139"><a name="p9301102814139"></a><a name="p9301102814139"></a>archive</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18886172181"><a name="p18886172181"></a><a name="p18886172181"></a>Log replication in the primary database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1452675710199"><a name="p1452675710199"></a><a name="p1452675710199"></a>This status is available only for the primary database instance in dual-cluster DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row1525317264"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p0301228171318"><a name="p0301228171318"></a><a name="p0301228171318"></a>backup_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1682453175316"><a name="p1682453175316"></a><a name="p1682453175316"></a>Full data replication in the primary database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p5193175871910"><a name="p5193175871910"></a><a name="p5193175871910"></a>This status is available only for the primary database instance in the dual-cluster DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row122515171668"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p73021028101310"><a name="p73021028101310"></a><a name="p73021028101310"></a>archive_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8836178184"><a name="p8836178184"></a><a name="p8836178184"></a>Log replication in the primary database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1190145871911"><a name="p1190145871911"></a><a name="p1190145871911"></a>This status is only available for the primary database instance in the dual-cluster DR.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row626181719616"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p13302172816136"><a name="p13302172816136"></a><a name="p13302172816136"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13817176181"><a name="p13817176181"></a><a name="p13817176181"></a>Planned primary/standby failover is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p171708419168"><a name="p171708419168"></a><a name="p171708419168"></a>This status is available for both the primary and standby database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row18919132101614"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1919102171616"><a name="p1919102171616"></a><a name="p1919102171616"></a>restore</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p16791117121814"><a name="p16791117121814"></a><a name="p16791117121814"></a>Full data restoration in the DR database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p6919132117162"><a name="p6919132117162"></a><a name="p6919132117162"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row1617510180165"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p171761318181613"><a name="p171761318181613"></a><a name="p171761318181613"></a>restore_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13176718131611"><a name="p13176718131611"></a><a name="p13176718131611"></a>Full data restoration in the DR database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p2176121841617"><a name="p2176121841617"></a><a name="p2176121841617"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row159151418175"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1060191418174"><a name="p1060191418174"></a><a name="p1060191418174"></a>recovery</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p106011461719"><a name="p106011461719"></a><a name="p106011461719"></a>Log replication in the DR database instance is in progress.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p360814151712"><a name="p360814151712"></a><a name="p360814151712"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row424671061713"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p4246710121719"><a name="p4246710121719"></a><a name="p4246710121719"></a>recovery_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1246181091710"><a name="p1246181091710"></a><a name="p1246181091710"></a>Log replication in the DR database instance fails.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p924661021719"><a name="p924661021719"></a><a name="p924661021719"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row73601340177"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p153611411712"><a name="p153611411712"></a><a name="p153611411712"></a>promote</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p15361642176"><a name="p15361642176"></a><a name="p15361642176"></a>The DR database instance is being promoted to primary.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1036164121712"><a name="p1036164121712"></a><a name="p1036164121712"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row15245270173"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p172452075178"><a name="p172452075178"></a><a name="p172452075178"></a>promote_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18246175179"><a name="p18246175179"></a><a name="p18246175179"></a>The DR database instance fails to promote to primary.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p14246147171716"><a name="p14246147171716"></a><a name="p14246147171716"></a>This status is available only for DR database instances in dual-cluster DR.</p>
</td>
</tr>
<tr id="row14821817175"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p194821316173"><a name="p194821316173"></a><a name="p194821316173"></a>hadr_switchover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1648251191717"><a name="p1648251191717"></a><a name="p1648251191717"></a>Progress of the planned failover between the primary and standby database instances in dual-cluster DR</p>
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
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1590754152317"><a name="p1590754152317"></a><a name="p1590754152317"></a>Progress of promoting a dual-cluster DR database instance to primary</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p22617589162"><a name="p22617589162"></a><a name="p22617589162"></a>Percentage</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p826258151613"><a name="p826258151613"></a><a name="p826258151613"></a>Switchover progress.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p92685801614"><a name="p92685801614"></a><a name="p92685801614"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Example 1: Resource pooling of Dorado dual-cluster storage<a name="section1428616494387"></a>

    Note: When the gs_ddr tool is used to set up or operate the Dorado dual-cluster storage, the tool needs to interact with the Dorado control platform DeviceManger. The specific interaction method will be inserted into the examples of each function.

- Establish a DR relationship in a primary cluster.

    ```shell
    gs_ddr -t start -m primary --json /usr4/og_sf_ff/dc.json
    --------------------------------------------------------------------------------
    Dorado disaster recovery start 09cb445ee6d311ef897e78b46a3ff63e
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully set ss_double_cluster_mode
    Successfully set cm_guc.
    Please ensure that the "Remote Replication Pairs" configured correctly between 
    the primary cluster and the disaster recovery cluster, with Replication Mode in "Synchronous" state.
    Ready to move on (yes/no)? yes
    Waiting for the main standby connection.
    And now, on the standby cluster execute the command:
    gs_ddr -t start -m disaster_standby [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Main standby already connected.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

- Establish a DR relationship in a standby cluster.

    ```shell
    gs_ddr -t start -m disaster_standby --json /usr4/og_sf_ff/dc.json
    --------------------------------------------------------------------------------
    Dorado disaster recovery start 0ce99a28e6d311efa82ef82e3f372fc4
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Successfully set ss_double_cluster_mode
    Start start dssserver in main standby node.
    Successfully Start dssserver on node [openGauss79]
    Start build main standby datanode in disaster standby cluster.
    And now, on the primary cluster execute the command:
    gs_ddr -t start -m primary [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Successfully build main standby in disaster standby cluster on node [openGauss79]
    Stop dssserver instance on main standby node.
    Successfully stop dssserver before start cluster on node [openGauss79]
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_standby.
    Successfully set cm_guc.
    Please ensure that the "Remote Replication Pairs" configured correctly between 
    the primary cluster and the disaster recovery cluster, with Replication Mode in "Synchronous" state.
    Ready to move on (yes/no)? yes
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

    Note: When `Ready to move on (yes/no)?` is displayed for both the primary and secondary clusters, perform the following operations on `DeviceManager`:

    Choose `Data Protection` > `LUNs` > `Remote Replication Pairs`, find your disk, and double-click it to go to the UI. Check the synchronization direction between the local and remote resources and ensure that the secondary resource protection status on the UI panel is Read/Write.

    After the preceding steps are complete, click `Operation` in the upper right corner and enable secondary resource protection. At this time, the secondary resource protection status is Read-only. Click `Operation` again and click the sync button. When `Normal` is displayed between the local and remote resources,

    return to the environment and enter `yes` in the primary and secondary clusters. Wait until the setup is complete.

- Demote a primary cluster to standby as planned.

    ```shell
    gs_ddr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover fba8f95ee6d511efa2bc78b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: dorado.
    And now, on the disaster_standby cluster execute the command:
    gs_ddr -t switchover -m primary
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Stopping the cluster.
    Successfully stopped the cluster.
    Successfully do_first_stage_for_switchover.
    Please manually switchover the primary and secondary replication relationship of the "Remote Replication Pairs"
    in Device Manager, and ensure the "Local Resource Role" is Secondary.Ready to move on (yes/no)? yes
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_standby.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    The cluster status is Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

- Promote a standby cluster to primary as planned.

    ```shell
    gs_ddr -t switchover -m primary 
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0010eb1ee6d611efae78f82e3f372fc4
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: dorado.
    And now, on the primary cluster execute the command:
    gs_ddr -t switchover -m disaster_standby
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Successfully do_first_stage_for_switchover.
    Please ensure that the "Remote Replication Pairs" configured correctly, 
    and check the "Local Resource Role" is Primary.Ready to move on (yes/no)? yes
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss79]
    Waiting cluster normal.
    Successfully started datanode instances.
    Waiting for the main standby connection.
    Main standby already connected.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

    Note: When `Ready to move on (yes/no)?` is displayed for both the primary and secondary clusters, perform the following operations on `DeviceManager`:

    Choose `Data Protection` > `LUNs` > `Remote Replication Pair`, find your disk, and double-click it to go to the UI. Click `Operation` in the upper right corner, click the failover button, and confirm the operation.

    Then, return to the environment and enter `yes` in the primary and standby clusters. Wait until the failover between the primary and standby clusters is complete.

- Promote a DR cluster to primary.

    ```shell
    gs_ddr -t failover
    --------------------------------------------------------------------------------
    Dorado disaster recovery failover 5078895ce6d811ef859678b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster recovery failover.
    Got the step for action:[failover].
    Successfully check cluster status is: Normal.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: dorado.
    Successfully do_first_stage_for_switchover.
    Please ensure that the "Remote Replication Pairs" configured correctly, 
    and check the "Local Resource Role" is Primary.Ready to move on (yes/no)? yes
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss115]
    Waiting cluster normal.
    Successfully started datanode instances.
    Successfully removed step file.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery failover.
    ```

    Note: When `Ready to move on (yes/no)?` is displayed for the primary cluster, perform the following operations on DeviceManager:

    Choose `Data Protection` > `LUNs` > `Remote Replication Pair`, find your disk, and double-click it to go to the UI. Click `Operation` in the upper right corner, select `Split`, and confirm the operation.

    Click `Operation` again and disable secondary resource protection. The secondary resource protection status on the UI is Read/Write. Then, return to the environment and enter `yes` in the standby cluster. Wait until the standby cluster is promoted to primary.

- Remove the DR relationship from the primary cluster.

    ```shell
    gs_ddr -t stop --json /usr4/og_sf_ff/dc.json
    --------------------------------------------------------------------------------
    Dorado disaster recovery stop f0308324e6d711efa0f9f82e3f372fc4
    --------------------------------------------------------------------------------
    Start remove dorado disaster recovery relationship.
    Got the step for action:[stop].
    Successfully check cluster status is: Normal.
    Check cluster type succeed.
    Starting remove all node dn instances repl infos.
    Successfully remove all node dn instances repl infos.
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Start remove cluster file.
    Finished remove cluster file.
    Successfully check cluster status is: Normal.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery stop.
    ```

- Query the DR status.

    ```shell
    gs_ddr -t query
    --------------------------------------------------------------------------------
    Dorado disaster recovery query 6650b2ece6d611ef8cb278b46a3ffcce
    --------------------------------------------------------------------------------
    Start dorado disaster query.
    Start check archive.
    Start check recovery.
    Successfully executed dorado disaster recovery query, result:
    {'ddr_cluster_stat': 'recovery', 'ddr_failover_stat': '', 'ddr_switchover_stat': ''}
    ```

## Example 2: Dual-cluster network with resource pooling<a name="section1428616494387"></a>

- Establish a DR relationship in a primary cluster.

    ```shell
    gs_ddr -t start -m primary --disaster_type stream -X /usr1/og_sf_bot/11.xml
    --------------------------------------------------------------------------------
    Dorado disaster recovery start e3e94128062611f0aae378b46a3ff63e
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully set ss_double_cluster_mode
    Successfully set cm_guc.
    Waiting for the main standby connection.
    And now, on the standby cluster execute the command:
    gs_ddr -t start -m disaster_standby [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Main standby already connected.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

- Establish a DR relationship in a standby cluster.

    ```shell
    gs_ddr -t start -m disaster_standby --disaster_type stream -X /usr1/og_sf_bot/11.xml
    --------------------------------------------------------------------------------
    Dorado disaster recovery start e4cc4810062611f0bba5f82e3f372fc4
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Successfully set ss_double_cluster_mode
    Start dssserver in main standby node.
    Successfully Start dssserver on node [openGauss79]
    Start build main standby datanode in disaster standby cluster.
    And now, on the primary cluster execute the command:
    gs_ddr -t start -m primary [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Successfully build main standby in disaster standby cluster on node [openGauss79]
    Stop dssserver instance on main standby node.
    Successfully stop dssserver before start cluster on node [openGauss79]
    Successfully set cm_guc.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

- Demote a primary cluster to standby as planned.

    ```shell
    gs_ddr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0bf72e54062811f0be3a78b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: stream.
    And now, on the disaster_standby cluster execute the command:
    gs_ddr -t switchover -m primary
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Stopping the cluster.
    Successfully stopped the cluster.
    Successfully do_first_stage_for_switchover.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    The cluster status is Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

- Promote a standby cluster to primary as planned.

    ```shell
    gs_ddr -t switchover -m primary
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0cb56a2c062811f09579f82e3f372fc4
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: stream.
    And now, on the primary cluster execute the command:
    gs_ddr -t switchover -m disaster_standby
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Successfully do_first_stage_for_switchover.
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss79]
    Waiting cluster normal.
    Successfully started datanode instances.
    Waiting for the main standby connection.
    Main standby already connected.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

- Promote a DR cluster to primary.

    ```shell
    gs_ddr -t failover
    --------------------------------------------------------------------------------
    Dorado disaster recovery failover 5a38ee1c062911f0885078b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster recovery failover.
    Got the step for action:[failover].
    Successfully check cluster status is: Normal.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: stream.
    Successfully do_first_stage_for_switchover.
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss115]
    Waiting cluster normal.
    Successfully started datanode instances.
    Successfully removed step file.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery failover.
    ```

- Remove the DR relationship from the primary cluster.

    ```shell
    gs_ddr -t stop -X /usr1/og_sf_bot/11.xml
    --------------------------------------------------------------------------------
    Dorado disaster recovery stop f0f5a698062811f0bb4ef82e3f372fc4
    --------------------------------------------------------------------------------
    Start remove dorado disaster recovery relationship.
    Got the step for action:[stop].
    Successfully check cluster status is: Normal.
    Check cluster type succeed.
    Starting remove all node dn instances repl infos.
    Successfully remove all node dn instances repl infos.
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Start remove cluster file.
    Finished remove cluster file.
    Successfully check cluster status is: Normal.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery stop.
    ```

- Query the DR status.

    ```shell
    gs_ddr -t query
    --------------------------------------------------------------------------------
    Dorado disaster recovery query a4a30d52062911f0a1f378b46a3ffcce
    --------------------------------------------------------------------------------
    Start dorado disaster query.
    Start check archive.
    Start check recovery.
    Successfully executed dorado disaster recovery query, result:
    {'ddr_cluster_stat': 'normal', 'ddr_failover_stat': '', 'ddr_switchover_stat': ''}
    ```
