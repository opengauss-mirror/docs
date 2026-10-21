---
description: This document describes gs\_ddr in openGauss, covering topics such as Background, Constraints.
keywords: [openGauss, gs\_ddr, tools and commands, Background, Constraints]
---

# gs\_ddr

## Background<a name="zh-cn_topic_0287275995_section431817462"></a>

To simplify the manual deployment and usage of resource pooling dual-cluster [network dual-cluster | Dorado storage dual-cluster], and to provide users with a simpler and faster experience, `openGauss` provides the `gs_ddr` tool.

This tool completes automated disaster recovery setup, disaster failover, planned primary-standby switchover, disaster recovery removal, disaster recovery status monitoring, help information display, and version number display.

## Constraints<a name="zh-cn_topic_0287275995_section1372118241094"></a>

- Both clusters in the disaster recovery setup must be clusters equipped with the `cm` tool.
- The primary and standby clusters in the disaster recovery setup must have the same version number.
- The existence of cascaded standbys is not supported before setting up the disaster recovery dual-cluster.
- The initial database users and passwords of the two clusters for disaster recovery setup must be identical. All commands must be executed under the database user.
- If the data of the two clusters for disaster recovery setup is inconsistent, executing the disaster recovery setup command will trigger a full `build` of the standby cluster to complete initialization. Confirm carefully before setup.
- To execute the disaster recovery setup command and planned primary-standby switchover command, you must run the corresponding command on both the primary and standby clusters simultaneously. This is because the execution processes on both clusters interact and wait for each other.
- Before setting up the disaster recovery relationship, create a disaster recovery user on the primary cluster for disaster recovery authentication. The primary and standby clusters must use the same disaster recovery username and password. Once the disaster recovery relationship is established, the password cannot be changed. To change the disaster recovery username or password, you must remove the disaster recovery relationship and rebuild it using the new disaster recovery user. The disaster recovery user password must not contain the following characters: "| ;&$<>\`'"{()}[]~\*?!\n-whitespace".
- When setting up the disaster recovery relationship, if the number of replicas in the cluster is <= 2, `most_available_sync` will be set to `on`. This parameter will not revert to its initial value after disaster recovery removal or `failover`, ensuring the cluster remains in maximum availability mode.
- When setting up the disaster recovery relationship, `synchronous_commit` will be set to `on`. It will revert to its initial value upon disaster recovery removal or `failover` promotion. The standby cluster is read-only and not writable.
- After the standby cluster is promoted to primary via the `failover` command, the disaster recovery relationship with the original primary cluster becomes invalid. You must rebuild the disaster recovery relationship.
- If the majority of DNs in the standby cluster fail, or if all CMS and DN instances fail, disaster recovery cannot be started, the standby cluster cannot be promoted to primary, and it cannot serve as a standby cluster. You must rebuild the standby cluster.
- If a forced switchover operation is performed on the primary cluster, you must rebuild the standby cluster.
- Both primary and standby clusters support full and incremental backups using the `gs_probackup` tool.
- After the disaster recovery relationship is established, modifying the DN instance port is not supported.
- GUC parameter synchronization is not supported between the primary and standby database instances in a disaster recovery relationship.
- Node replacement, repair, replica scaling, and DCF mode are not supported for either primary or standby clusters.
- When the standby database instance has 2 replicas, it can still be promoted to primary and provide services if 1 replica fails. However, if the remaining replica also fails, unavoidable data loss will occur.
- Disaster recovery status does not support upgrades. You must remove the disaster recovery relationship, upgrade the primary and standby clusters separately, and then rebuild the dual-cluster.
- For the selection of IP addresses for disaster recovery dual-cluster streaming replication, it is recommended to separate the intra-cluster network plane from the cross-cluster network plane to facilitate load distribution and improve security.
- Upgrades do not support disaster recovery setup, primary-standby switchover, disaster failover, disaster query, or disaster recovery removal operations.
- You must execute the `gs_ddr` command as the operating system user `omm`.

## Prerequisites

- Two resource pooling single-clusters must be pre-built.
- The users of the two resource pooling single-clusters must be the same.

## Syntax<a name="section95636533613"></a>

- Disaster Recovery Setup

    ```python
    gs_ddr -t start -m [primary|disaster_standby] --disaster_type [dorado|stream] [-X XMLFILE] [--json JSONFILE] [--time-out=SECS] [-l LOGFILE]
    ```

    >[!NOTE] Note
    >
    >You must execute this command once on both the primary cluster and the standby cluster.
    >
    >The `--disaster_type` parameter defaults to `dorado`. You only need to specify it during disaster recovery setup; subsequent commands do not require it.

- Unplanned Disaster Failover

    ```python
    gs_ddr -t failover [-l LOGFILE]
    ```

    >[!NOTE] Note
    >
    >Note: This command can only be executed on the first standby node of the standby cluster. After execution, the disaster recovery relationship is removed. There are two usage scenarios:
    >
    >First, when the primary cluster is abnormal (destroyed, down, etc.), the standby cluster needs to exit the disaster recovery state and provide services externally.
    >
    >Second, when the disaster recovery relationship is torn down, the standby cluster needs to exit the disaster recovery state and recover to a normal single cluster.

- Planned Primary-Standby Switchover

    ```python
    gs_ddr -t switchover -m [primary|disaster_standby] [--time-out=SECS] [-l LOGFILE] 
    ```

    >[!NOTE] Note
    >
    >You must execute this command once on both the primary cluster and the standby cluster: the primary demotes to standby, and the standby promotes to primary.

- Disaster Recovery Removal

    ```python
    gs_ddr -t stop [-X XMLFILE] [--json JSONFILE] [-l LOGFILE]
    ```

    >[!NOTE] Note
    >
    >This command can only be executed on the first node of the primary cluster. After execution, the disaster recovery relationship is torn down. At this point, querying the primary cluster status using the `gs_ddr -t query` command shows `Normal`, indicating that the primary cluster has recovered to a normal single cluster.
    >
    >For the standby cluster to exit the disaster recovery state, you must also execute the `gs_ddr -t failover` command on the first standby node to make the standby cluster exit the disaster recovery state.

- Disaster Recovery Status Monitoring

    ```python
    gs_ddr -t query [-l LOGFILE]
    ```

    >[!NOTE] Note
    >
    >This command can be executed on any node of the dual-cluster to query status or task progress.

## Parameter Description<a name="zh-cn_topic_0287275995_section16817173615"></a>

The `gs_ddr` parameters can be classified into the following categories:

- General Parameters:
    - -t

        Task type for the `gs_ddr` command.

        Value range: start, failover, switchover, stop, query.

    - -l

        Specifies the log file and its storage path.

        Default value: `$GAUSSLOG/om/gs_ddr-YYYY-MM-DD_hhmmss.log`

    - -?, --help

        Displays help information.

    - -V, --version

        Displays version number information.

- Disaster Recovery Setup Parameters:
    - -m

        Expected role of this cluster in the disaster recovery relationship.

        Value range: `primary` (primary cluster) or `disaster_standby` (standby cluster).

    - -X

        The `xml` file used during cluster installation. The `xml` can also be configured with disaster recovery information for disaster recovery setup, extending three fields (`localStreamIpmap1`, `remoteStreamIpmap1`, `remotedataPortBase`) based on the installation `xml`.

        The configuration method for the added fields is as follows:

        ```xml
        <!-- Node deployment information on each server -->
        <DEVICELIST>
        <DEVICE sn="pekpomdev00038">
        <!-- Number of primary DNs to deploy on the current host -->
        <PARAM name="dataNum" value="1"/>
        <!-- Base port number for primary DNs -->
        <PARAM name="dataPortBase" value="26000"/>

        <!-- IP mapping for SSH trusted channels and streaming replication of DN shards in the local cluster -->
        <PARAM name="localStreamIpmap1" value="(10.244.44.216,172.31.12.58),(10.244.45.120,172.31.0.91)"/>
        <!-- IP mapping for SSH trusted channels and streaming replication of DN shards in the remote cluster -->
        <PARAM name="remoteStreamIpmap1" value="(10.244.45.144,172.31.2.200),(10.244.45.40,172.31.0.38),(10.244.46.138,172.31.11.145),(10.244.48.60,172.31.9.37),(10.244.47.240,172.31.11.125)"/>
        <!-- Primary DN port number of the remote cluster -->
        <PARAM name="remotedataPortBase" value="26000"/>
        
        </DEVICE>
        ```

        >[!NOTE] Note
        >
        >In `localStreamIpmap1` and `remoteStreamIpmap1`, the SSH trusted channel IP is the trusted (secure) external network IP; the streaming replication IP is the IP used for primary-standby replication. If there is no external network IP, you can configure it as the streaming replication IP.
        >
        >Taking `localStreamIpmap1` as an example, the method for configuring IP mapping is introduced: In the `value` of the `localStreamIpmap1` parameter, there are two pairs of parentheses, indicating that the cluster scale is two nodes. Within each pair of parentheses, the IP mapping is displayed as (SSH trusted channel IP, streaming replication IP), representing the mapping relationship between the two IPs.
        >
        >`remotedataPortBase` is the primary DN port number of the remote cluster.

    - --json

        A `json` file containing disaster recovery information.

        The configuration method for the `json` file is as follows:

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

        >[!NOTE] Note
        >`remoteClusterConf` contains the DN shard information of the remote cluster, where `port` is the primary DN port of the remote cluster.
        >
        >`localClusterConf` contains the DN shard information of the local cluster, where `port` is the primary DN port of the local cluster.
        >
        >The `ip` in `shards` is the SSH trusted channel IP, i.e., the trusted (secure) external network IP; `dataIp` is the streaming replication IP, i.e., the IP used for primary-standby replication. If there is no external network IP, you can configure it as the streaming replication IP.
        >
        >Note: The `-X` and `--json` parameters support alternative configuration methods for disaster recovery information. If both parameters are provided on the command line, the `json` parameter takes precedence.

    - --time-out=SECS

        Specifies the timeout period. The primary cluster waits for the standby cluster to connect. If the timeout is reached, it is considered a failure and the `om` script exits automatically. Unit: s.

        Value range: Positive integer. Recommended value: 1200.

        Default value: 1200.

        >[!NOTE] Note
        >
        >It should be noted that `build` and `start` clusters have their own timeout settings. For the `build` cluster, the default timeout is 1209600 seconds (14 days). If the build operation is not completed within this time, it will exit automatically.
        >
        >For the `start` cluster, the default timeout is 604800 seconds (one week). If the start operation is not completed within this time, it will exit automatically. If the `--time-out=SECS` parameter is not specified, the `build` cluster will not exit automatically after 1200 seconds; similarly, the `start` cluster will not exit automatically after 1200 seconds.

    - --disaster_type

        Used to specify the dual-cluster type during setup. The default value is `dorado`. If this parameter is not specified in the `start` command, <span style="color: red;">a resource pooling storage replication dual-cluster is built by default.</span>

    - -f
    
        During disaster recovery setup, forcibly removes the temporary flag file generated by the `start` command, allowing the setup process to start from the beginning rather than resuming from the last interrupted position.

- Disaster Recovery Removal Parameters:
    - -X

        The `xml` file used during cluster installation, which requires additional disaster recovery information configuration, extending three fields ("localStreamIpmap1", "remoteStreamIpmap1", "remotedataPortBase").

    - --json

        A `json` file containing disaster recovery information for both the local and remote ends.

        >[!NOTE] Note
        >
        >For the configuration methods of `-X` and `--json`, please refer to the disaster recovery setup parameter configuration in this section.

- Disaster Recovery Query Parameters:
    - None
    
    The disaster recovery status query result descriptions are as follows:

<a name="zh-cn_topic_0287275995_table1171617665"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275995_row918131719617"><th class="cellrowborder" valign="top" width="16.29162916291629%" id="mcps1.1.6.1.1"><p id="zh-cn_topic_0287275995_p18181171612"><a name="zh-cn_topic_0287275995_p18181171612"></a><a name="zh-cn_topic_0287275995_p18181171612"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="12.49124912491249%" id="mcps1.1.6.1.2"><p id="p235823320131"><a name="p235823320131"></a><a name="p235823320131"></a>Meaning</p>
</th>
<th class="cellrowborder" valign="top" width="10.221022102210222%" id="mcps1.1.6.1.3"><p id="p18300828151317"><a name="p18300828151317"></a><a name="p18300828151317"></a>Value</p>
</th>
<th class="cellrowborder" valign="top" width="32.54325432543255%" id="mcps1.1.6.1.4"><p id="zh-cn_topic_0287275995_p18185171620"><a name="zh-cn_topic_0287275995_p18185171620"></a><a name="zh-cn_topic_0287275995_p18185171620"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="28.45284528452845%" id="mcps1.1.6.1.5"><p id="zh-cn_topic_0287275995_p141817173612"><a name="zh-cn_topic_0287275995_p141817173612"></a><a name="zh-cn_topic_0287275995_p141817173612"></a>Remarks</p>
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
<td class="cellrowborder" rowspan="12" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p19358933111319"><a name="p19358933111319"></a><a name="p19358933111319"></a>Database instance status in disaster recovery dual-cluster</p>
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
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p199231717184"><a name="p199231717184"></a><a name="p199231717184"></a>Indicates that this database instance does not participate in the disaster recovery dual-cluster.</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p1919212412160"><a name="p1919212412160"></a><a name="p1919212412160"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row020217369"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1630142871312"><a name="p1630142871312"></a><a name="p1630142871312"></a>full_backup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8909171188"><a name="p8909171188"></a><a name="p8909171188"></a>Full data copy of the primary database instance in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1694192163015"><a name="p1694192163015"></a><a name="p1694192163015"></a>Only the primary database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row62461715613"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p9301102814139"><a name="p9301102814139"></a><a name="p9301102814139"></a>archive</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18886172181"><a name="p18886172181"></a><a name="p18886172181"></a>Log replication of the primary database instance in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1452675710199"><a name="p1452675710199"></a><a name="p1452675710199"></a>Only the primary database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row1525317264"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p7301228171318"><a name="p7301228171318"></a><a name="p7301228171318"></a>backup_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1682453175316"><a name="p1682453175316"></a><a name="p1682453175316"></a>Full data copy of the primary database instance failed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p5193175871910"><a name="p5193175871910"></a><a name="p5193175871910"></a>Only the primary database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row122515171668"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p73021028101310"><a name="p73021028101310"></a><a name="p73021028101310"></a>archive_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8836178184"><a name="p8836178184"></a><a name="p8836178184"></a>Log replication of the primary database instance failed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1190145871911"><a name="p1190145871911"></a><a name="p1190145871911"></a>Only the primary database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row626181719616"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p13302172816136"><a name="p13302172816136"></a><a name="p13302172816136"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13817176181"><a name="p13817176181"></a><a name="p13817176181"></a>Planned primary-standby switchover in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p171708419168"><a name="p171708419168"></a><a name="p171708419168"></a>Both primary and standby database instances in the disaster recovery dual-cluster have this status.</p>
</td>
</tr>
<tr id="row18919132101614"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1919102171616"><a name="p1919102171616"></a><a name="p1919102171616"></a>restore</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p16791117121814"><a name="p16791117121814"></a><a name="p16791117121814"></a>Full data restoration of the standby database instance in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p6919132117162"><a name="p6919132117162"></a><a name="p6919132117162"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row1617510180165"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p171761318181613"><a name="p171761318181613"></a><a name="p171761318181613"></a>restore_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13176718131611"><a name="p13176718131611"></a><a name="p13176718131611"></a>Full backup restoration of the standby database instance failed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p2176121841617"><a name="p2176121841617"></a><a name="p2176121841617"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row159151418175"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1060191418174"><a name="p1060191418174"></a><a name="p1060191418174"></a>recovery</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p106011461719"><a name="p106011461719"></a><a name="p106011461719"></a>Log replication of the standby database instance in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p360814151712"><a name="p360814151712"></a><a name="p360814151712"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row424671061713"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p4246710121719"><a name="p4246710121719"></a><a name="p4246710121719"></a>recovery_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1246181091710"><a name="p1246181091710"></a><a name="p1246181091710"></a>Log replication of the standby database instance failed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p924661021719"><a name="p924661021719"></a><a name="p924661021719"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row73601340177"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p153611411712"><a name="p153611411712"></a><a name="p153611411712"></a>promote</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p15361642176"><a name="p15361642176"></a><a name="p15361642176"></a>Standby database instance promotion to primary in progress</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1036164121712"><a name="p1036164121712"></a><a name="p1036164121712"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row15245270173"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p172452075178"><a name="p172452075178"></a><a name="p172452075178"></a>promote_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18246175179"><a name="p18246175179"></a><a name="p18246175179"></a>Standby database instance promotion to primary failed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p14246147171716"><a name="p14246147171716"></a><a name="p14246147171716"></a>Only the standby database instance in the disaster recovery dual-cluster has this status.</p>
</td>
</tr>
<tr id="row14821817175"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p194821316173"><a name="p194821316173"></a><a name="p194821316173"></a>hadr_switchover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1648251191717"><a name="p1648251191717"></a><a name="p1648251191717"></a>Progress display of planned primary-standby switchover in disaster recovery dual-cluster</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p148214131710"><a name="p148214131710"></a><a name="p148214131710"></a>Percentage</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p948316111170"><a name="p948316111170"></a><a name="p948316111170"></a>Switchover progress display</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p13483219177"><a name="p13483219177"></a><a name="p13483219177"></a>-</p>
</td>
</tr>
<tr id="row42595841618"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p8256584165"><a name="p8256584165"></a><a name="p8256584165"></a>hadr_failover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1590754152317"><a name="p1590754152317"></a><a name="p1590754152317"></a>Progress display of standby database instance promotion to primary in disaster recovery dual-cluster</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p22617589162"><a name="p22617589162"></a><a name="p22617589162"></a>Percentage</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p826258151613"><a name="p826258151613"></a><a name="p826258151613"></a>Switchover progress display</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p92685801614"><a name="p92685801614"></a><a name="p92685801614"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Example 1: Resource Pooling Dorado Storage Dual-Cluster<a name="section1428616494387"></a>

    Special Note: When using the gs_ddr tool to build or operate a Dorado storage dual-cluster, interaction with the Dorado control platform DeviceManager is required. The specific interaction methods are inserted into the examples for each feature.

- Build disaster recovery relationship on the primary cluster.

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
    And now, on the standby cluster exectue the command:
    gs_ddr -t start -m disaster_standby [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Main standby already connected.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

- Build disaster recovery relationship on the standby cluster.

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
    And now, on the primary cluster exectue the command:
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

    Note: When both the primary and standby clusters display `Ready to move on (yes/no)?`, perform the following operations on the `DeviceManager`:

    Go to **Data Protection** > **LUNs** > **Remote Replication Pairs**, find your disk, and double-click to enter the UI interface. Check that the synchronization direction between **Local Resource** and **Remote Resource** and the remote resource protection status on the UI panel are readable and writable.

    After completing the above steps, click **Operation** in the upper right corner and select **Enable Protection for Secondary Resource**. At this point, the remote resource protection status becomes read-only. Click **Operation** again and select **Synchronize**. Wait until the word `Normal` appears between **Local Resource** and **Remote Resource**.

    Return to the environment and enter `yes` on both the primary and standby clusters respectively, then wait for the setup to complete.

- Perform planned demotion of the primary cluster to standby.

    ```shell
    gs_ddr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover fba8f95ee6d511efa2bc78b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: dorado.
    And now, on the disaster_standby cluster exectue the command:
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

- Perform planned promotion of the standby cluster to primary.

    ```shell
    gs_ddr -t switchover -m primary 
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0010eb1ee6d611efae78f82e3f372fc4
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: dorado.
    And now, on the primary cluster exectue the command:
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

    Note: When both the primary and standby clusters display `Ready to move on (yes/no)?`, perform the following operations on the `DeviceManager`:

    Go to **Data Protection** > **LUNs** > **Remote Replication Pairs**, find your disk, and double-click to enter the UI interface. Click **Operation** in the upper right corner, select **Primary/Secondary Switchover** and confirm.

    Then return to the environment and enter `yes` on both the primary and standby clusters respectively, then wait for the primary-standby switchover to complete.

- Fail over to the standby cluster.

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

    Note: When the primary cluster displays `Ready to move on (yes/no)?`, perform the following operations on the `DeviceManager`:

    Go to **Data Protection** > **LUNs** > **Remote Replication Pairs**, find your disk, and double-click to enter the UI interface. Click **Operation** in the upper right corner, select **Split** and confirm.

    Click **Operation** again and select **Disable Protection for Secondary Resource**. At this point, the remote resource protection status on the UI interface becomes readable and writable. Then return to the environment, enter `yes` on the standby cluster, and wait for the disaster failover to complete.

- Remove disaster recovery on the primary cluster.

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

- Query disaster recovery status.

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

## Example 2: Resource Pooling Network Dual-Cluster<a name="section1428616494387"></a>

- Build disaster recovery relationship on the primary cluster.

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
    And now, on the standby cluster exectue the command:
    gs_ddr -t start -m disaster_standby [-X /path/of/xml | --json /path/of/json] --disaster_type [dorado|stream]
    Main standby already connected.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

- Build disaster recovery relationship on the standby cluster.

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
    And now, on the primary cluster exectue the command:
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

- Perform planned demotion of the primary cluster to standby.

    ```shell
    gs_ddr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0bf72e54062811f0be3a78b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: stream.
    And now, on the disaster_standby cluster exectue the command:
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

- Perform planned promotion of the standby cluster to primary.

    ```shell
    gs_ddr -t switchover -m primary
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0cb56a2c062811f09579f82e3f372fc4
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully get the para disaster_type: stream.
    And now, on the primary cluster exectue the command:
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

- Fail over to the standby cluster.

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

- Remove disaster recovery on the primary cluster.

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

- Query disaster recovery status.

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
