---
description: This document describes Resource Pooling Dorado Dual-Cluster Deployment in openGauss, covering topics such as Content Overview, Manual Deployment Example for Intra-City Dual-Center.
keywords: [openGauss, Resource Pooling Dorado Dual-Cluster Deployment, database administration, Content Overview, Manual Deployment Example for Intra-City Dual-Center]
---

# Resource Pooling Dorado Dual-Cluster Deployment

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:46:36.143Z pushedAt=2026-09-24T07:41:29.881Z -->

## Content Overview

openGauss resource pooling is a new cluster architecture introduced by openGauss. Through the DMS and DSS components, it enables shared underlying storage data among multiple nodes in the cluster and real-time memory sharing between nodes, thereby achieving the goals of saving underlying storage resources and supporting a single-write-multiple-read mode with real-time consistent reads within the cluster. This document primarily describes the deployment of an intra-city dual-DC solution based on log consolidation for resource pooling.

  - In the enterprise edition installation package officially released in the community, if an intra-city dual-DC resource pooling setup is required, the hardware must include storage arrays, servers, and optical switches, and the CM and OM components must be deployed.

  - The current version supports deploying resource pooling primary/standby dual-cluster disaster recovery only under the implementation where local xlog and remote synchronous replication xlog coexist.

## Manual Deployment Example for Intra-City Dual-Center <a name="section188071153201818"></a>

For resource pooling deployment, use the OM management tool to deploy two resource pooling single clusters, and then configure disaster recovery parameters to set up an intra-city dual-center.

>[!NOTE] Note
>The manual installation here refers to using the OM management tool to execute relevant commands for resource pooling cluster installation and deployment after project compilation. For regular openGauss installation, see *Installation Guide*.

- Prerequisites
    - The project code has been compiled. For compilation instructions, see [Software Installation and Compilation](../compilation_guide/compiling_the_version.md).
    - The primary and standby storage devices have been mounted with disk array LUN devices, and the Ultrapath multipathing software has been installed, making the disk array devices available.

- Restrictions
    - Two properly functioning Dorado storage systems are required, and two resource pooling clusters need to be set up.
    - To support log consolidation, all xlog logs within the cluster must be stored on a single volume.

- Networking Mode

    <table>
    <tbody>
    <tr>
        <td rowspan='2'>Production center</td>
        <td rowspan='2'>Primary side</td>
        <td>Service computing node 0</td>
        <td>10.0.0.10</td>
        <td rowspan='2'>Primary storage</td>
        <td rowspan='2'>Dorado1</td>
    </tr>
        <td>Service computing node 1</td>
        <td>10.0.0.20</td>
    <tr>
        <td rowspan='2'>Disaster recovery center</td>
        <td rowspan='2'>Standby end</td>
        <td>Service computing node 0</td>
        <td>20.0.0.10</td>
        <td rowspan='2'>Standby storage</td>
        <td rowspan='2'>Dorado2</td>
    </tr>
        <td>Service computing node 1</td>
        <td>20.0.0.20</td>
    </tbody>
    </table>

- Procedure

    Step 1: Create the LUNs required for resource pooling and the LUN corresponding to the xlog volume for remote synchronous replication on the primary storage, and map all LUNs to the service computing nodes.
    - Ensure that the same Dorado LUN is mapped to the same drive letter across all machines in a cluster. If the drive letters are inconsistent, you can create soft links to make the drive letters exposed to openGauss consistent.
    - For example, if the disk with WWN 00000000000001 has the drive letter sd0 on node 0 of the primary cluster and sd1 on node 1 of the primary cluster, you can use the following method:

        ```
        ll /dev/disk/by-id             // Check the WWN corresponding to the LUN to determine the specific drive letter.
        ln -s /dev/sd0 /dev/data      // Execute on node 0. [It is recommended to create a soft link for all four drive letters.]
        ln -s /dev/sd1 /dev/data      // Execute on node 1. [It is recommended to create a soft link for all four drive letters.]
        ```

        Then use /dev/data as the available disk.

        <table>
        <tbody>
        <tr>
            <td rowspan='1'>LUN</td>
            <td rowspan='1'>Drive Letter</td>
        </tr>
        <tr>
            <td rowspan='1'>data</td>
            <td rowspan='1'>/dev/sda</td>
        </tr>
        <tr>
            <td rowspan='1'>xlog</td>
            <td rowspan='1'>/dev/sdb</td>
        </tr>
        <tr>
            <td rowspan='1'>votingDiskPath</td>
            <td rowspan='1'>/dev/sdc</td>
        </tr>
        <tr>
            <td rowspan='1'>shareDiskDir</td>
            <td rowspan='1'>/dev/sdd</td>
        </tr>
        </tbody>
        </table>

- Storage array operation steps

    >[!NOTE]Note
    >
    >- DeviceManager is a web page configured for managing storage devices after the storage device is available.
    >- Canceling resource protection can be performed in DeviceManager of either the primary cluster or the standby cluster, with the same effect. The relationship must be changed to split before canceling resource protection.
    >- If the drive letter cannot be found during the first scan or query, use iscsiadm -m node --logoutall=all and iscsiadm -m node -p ip -l to disconnect and re-login. Note that this operation affects all connected storage devices and may impact other users. Exercise caution when performing this operation. Here, ip is the IP address of the storage device, which can be queried using iscsiadm -m node.

    1. Log in to DeviceManager of the primary cluster, and choose **Services -> LUN Groups -> Create** to create a LUN group for the primary cluster.

    2. Log in to DeviceManager of the primary cluster, and choose **Data Protection -> LUNs -> Remote Replication Pairs -> Create** to create a remote replication pair for the xlog volume. After the operation is complete, DeviceManager automatically creates a volume on the peer end that has a synchronous replication relationship with the local xlog volume.

    3. Click the created remote replication pair, and choose **Operations -> Split** to split the remote replication pair created in the previous step. This step is performed to bring up the primary and standby clusters separately.

    4. Log in to DeviceManager of the standby cluster, perform the same LUN creation operation, click **Member LUNs -> Add** in the created LUN group, select the xlog volume already created on the primary cluster, add the xlog disk, and create and map the remaining three LUNs on the standby cluster storage.

    5. On the standby cluster DeviceManager, choose <b>Data Protection -> LUN -> Remote Replication Pair</b>, then search for the created remote replication pair, and use <b>Operation -> Cancel Resource Protection</b> to make the secondary end readable and writable.

    6. In <b>Service -> LUN Group -> LUN</b>, search for the name of the LUN just created, and query the local WWN for mapping to the corresponding drive letter on the server. As the root user on the server, run the rescan-scsi-bus.sh script to scan the created LUN group, and run <b>ll /dev/disk/by-id | grep xxx</b> to query the corresponding drive letter.

    Step 2: Prepare the XML file on the primary storage.

    For configuration instructions, see the database name and directory configuration descriptions in [Creating an XML Configuration File](../installation_guide/creating_an_xml_configuration_file.md).

    Prepare the XML file required for the resource pooling cluster based on the configuration instructions. The following example uses one primary and one standby:

        <?xml version="1.0" encoding="UTF-8"?>
        <ROOT>
            <!-- openGauss overall information -->
            <CLUSTER>
                <!-- Database name -->
                <PARAM name="clusterName" value="cluster" />
                <!-- Database node name (hostname). -->
                <PARAM name="nodeNames" value="node1,node2" />
                <!-- Database installation directory. -->
                <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
                <!-- Log directory. -->
                <PARAM name="gaussdbLogPath" value="/opt/huawei/install/log" />
                <!-- Temporary file directory-->
                <PARAM name="tmphuaweidbPath" value="/opt/huawei/install/tmp"/>
                <!-- Database tool directory-->
                <PARAM name="gaussdbToolPath" value="/opt/huawei/install/tool" />
                <!-- Database core file directory -->
                <PARAM name="corePath" value="/opt/huawei/install/corefile"/>
                <!-- Node IPs, corresponding one-to-one with the database node name list -->
                <PARAM name="backIp1s" value="10.0.0.10,10.0.0.20"/>
                <PARAM name="clusterType" value="single-inst"/>
                <PARAM name="enable_dss" value="on"/>
                <PARAM name="dss_home" value="/opt/huawei/install/dss_home"/>
                <PARAM name="dss_vg_info" value="data:/dev/sda,log0:/dev/sdb"/>
                <PARAM name="votingDiskPath" value="/dev/sdc"/>
                <PARAM name="shareDiskDir" value="/dev/sdd"/>
                <PARAM name="ss_dss_vg_name" value="data"/>
                <PARAM name="dss_ssl_enable" value="on"/>
            </CLUSTER>
            <!-- Node deployment information on each server -->
            <DEVICELIST>
                <!-- Node deployment information on node 1, where the value of "name" is configured as the host name (hostname) -->
                <DEVICE sn="node1">
                    <PARAM name="name" value="node1"/>
                    <PARAM name="azName" value="AZ1"/>
                    <PARAM name="azPriority" value="1"/>
                    <PARAM name="backIp1" value="10.0.0.10"/>
                    <PARAM name="sshIp1" value="10.0.0.10"/>

                    <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
                    <PARAM name="cmsNum" value="1"/>
                    <PARAM name="cmServerPortBase" value="27000"/>
                    <PARAM name="cmServerListenIp1" value="10.0.0.10,10.0.0.20"/>
                    <PARAM name="cmServerlevel" value="1"/>
                    <PARAM name="cmServerRelation" value="node1,node2"/>

                    <PARAM name="dataNum" value="1"/>
                    <PARAM name="dataPortBase" value="25400"/>
                    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2,/opt/huawei/install/data/dn"/>
                </DEVICE>

               <!-- Node deployment information on node 2, where the value of "name" is configured as the host name. -->
                <DEVICE sn="node2">
                    <PARAM name="name" value="node2"/>
                    <PARAM name="azName" value="AZ1"/>
                    <PARAM name="azPriority" value="1"/>
                    <PARAM name="backIp1" value="10.0.0.20"/>
                    <PARAM name="sshIp1" value="10.0.0.20"/>
                    <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
                </DEVICE>
            </DEVICELIST>
        </ROOT>

    Save the XML file to /opt/software/openGauss/cluster_config.xml.

    Tip: You need to modify the node name, node IP, directory, drive letter, and port number.

    Step 3: Perform the following operations on the primary storage to install and deploy the primary cluster. The installation user is omm.

    Perform the steps in [*Documentation > Installation Guide > Enterprise Edition Installation > Installing openGauss > Initializing the Installation Environment*](../installation_guide/initializing_the_installation_environment.md).

    The simplified steps are as follows:

        su - root 
        mkdir -p /opt/software/openGauss
        chmod 755 -R /opt/software
        Place the downloaded installation package in the /opt/software/openGauss directory.

        cd /opt/software/openGauss
        tar -zxvf openGauss-All-x.x.x-openEuler20.03-x86_64.tar.gz
        tar -zxvf openGauss-OM-x.x.x-openEuler20.03-x86_64.tar.gz

        cd /opt/software/openGauss/script
        ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --sep-env-file=/home/omm/env

        su - omm
        source /home/omm/env
        gs_install -X /opt/software/openGauss/cluster_config.xml

    Parameter description:
    + sep-env-file           Separates environment variables. The parameter value is a file directory accessible to the installation user omm.
    + omm                    Operating system user.
    + dbgrp                  Operating system user group.

    Step 4: Query the primary cluster status.

    After the disaster recovery relationship is established, it becomes the primary cluster; before the disaster recovery relationship is established, it remains a resource pooling single cluster.

        [huawei@node1 dn_6001]$ cm_ctl query -Cvidp
        [  CMServer State   ]

        node           node_ip         instance                           state

        1  node1 10.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 10.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]

        node           node_ip         res_name instance  state

        1  node1 10.0.0.10   dms_res  6001      OnLine
        2  node2 10.0.0.20   dms_res  6002      OnLine
        1  node1 10.0.0.10   dss      20001     OnLine
        2  node2 10.0.0.20   dss      20002     OnLine

        [   Cluster State   ]

        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL

        [  Datanode State   ]

        node           node_ip         instance                             state            | node           node_ip         instance                             state

        1  node1 10.0.0.10   6001 25400  /opt/huawei/install/data/dn P Primary Normal | 2  node2 10.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal

    Step 5: Prepare LUNs and XML files on the standby storage. The procedure is the same as Step 1 and Step 2.

    `Tip`: You need to modify the node name, node IP, directory, drive letter, and port number.

    Step 6: Perform the following operations on the standby storage to install and deploy the standby cluster. The installation user is omm.

    The simplified steps are as follows:

        su - root 
        mkdir -p /opt/software/openGauss
        chmod 755 -R /opt/software
        Place the downloaded installation package in the /opt/software/openGauss directory.

        cd /opt/software/openGauss
        tar -zxvf openGauss-All-x.x.x-openEuler20.03-x86_64.tar.gz
        tar -zxvf openGauss-OM-x.x.x-openEuler20.03-x86_64.tar.gz

        cd /opt/software/openGauss/script
        gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --sep-env-file=/home/omm/env

        su - omm
        gs_install -X /opt/software/openGauss/cluster_config.xml

    Step 7: Query the status of the cluster on the standby storage (which becomes the standby cluster after the disaster recovery relationship is established).

        After the disaster recovery relationship is established, it becomes the standby cluster. Before that, it remains a resource pooling single cluster.
        [omm@node1 dn_6001]$ cm_ctl query -Cvidp
        [  CMServer State   ]

        node           node_ip         instance                           state

        1  node1 20.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 20.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]

        node           node_ip         res_name instance  state

        1  node1 20.0.0.10   dms_res  6001      OnLine
        2  node2 20.0.0.20   dms_res  6002      OnLine
        1  node1 20.0.0.10   dss      20001     OnLine
        2  node2 20.0.0.20   dss      20002     OnLine

        [   Cluster State   ]

        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL

        [  Datanode State   ]

        node           node_ip         instance                             state            | node           node_ip         instance                             state

        1  node1 20.0.0.10   6001 25400  /opt/huawei/install/data/dn P Primary Normal | 2  node2 20.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal

    Step 8: Stop the primary cluster, configure disaster recovery parameters, and restart the primary cluster.

        cm_ctl stop

        Primary node
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "application_name = 'dn_master_0'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.20 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"

        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        In the $DSS_HOME/cfg/dss_inst.ini file, modify
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID

        Standby node
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_master_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.20 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"

        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        Modify the following in the $DSS_HOME/cfg/dss_inst.ini file:
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID

        Set the primary cluster cm parameters:
        cm_ctl set --param --agent -k ss_double_cluster_mode=1
        cm_ctl set --param --server -k ss_double_cluster_mode=1

        Start the primary cluster:
        cm_ctl start

    Parameter description:
    + cross_cluster_replconninfo     Connection information established between the primary and standby clusters. localport is the database HA port (dataPortBase in the XML used in the preceding example. When the thread pool enable_thread_pool is enabled, it must be configured as the actual HAPort).

    Tip: gs_guc is a configuration file modification tool provided by openGauss. You can also manually write the content within the double quotation marks above into the postgresql.conf and pg_hba.conf files under /opt/huawei/install/data/dn ($PGDATA).

    Step 9: Stop the resource pooling single cluster on the standby storage (which becomes the standby cluster after the disaster recovery relationship is established), and configure disaster recovery parameters.

        cm_ctl stop

        On the primary node:
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_0'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.20 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"

        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

        In the $DSS_HOME/cfg/dss_inst.ini file, modify
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID

        Standby node
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.20 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"

        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

        In the $DSS_HOME/cfg/dss_inst.ini file, modify
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID

    Step 10: Start the first standby dssserver and perform build.

        export DSS_MAINTAIN=TRUE                                                        // Enable DSS manual mode.
        dssserver -D /opt/huawei/install/dss_home &                                     // Start dssserver. -D specifies $DSS_HOME.
        gs_ctl build -D /opt/huawei/install/data/dn -b cross_cluster_full -q
        dsscmd stopdss                                                                  // Stop dssserver in manual mode.
        export DSS_MAINTAIN=FALSE

        Tip: The build command must include -q, which means the database is not started after a successful build.

    Step 11: Configure CM parameters for the standby cluster and restart the standby cluster.

        cm_ctl set --param --agent -k ss_double_cluster_mode=2
        cm_ctl set --param --server -k ss_double_cluster_mode=2
        Add the following line to the $DSS_HOME/cfg/dss_inst.ini file (this modification is required on all nodes of the standby cluster; dsscmd setcfg requires dssserver to be online, so modify it manually here):
        CLUSTER_RUN_MODE=cluster_standby

        Switch the synchronization replication relationship from split to synchronization (critical).

        cm_ctl start

    Supplementary notes:
    + The step of switching the synchronization replication relationship here is critical. You need to log in to the DeviceManager of the primary cluster, select **Data Protection -> LUN -> Remote Replication Pair**, click the previously created remote replication pair, and change the synchronization replication relationship to synchronization through **Operations -> Synchronization**.

    Step 12: Query the cluster status.

        The query result of the primary cluster using cm_ctl query -Cvidp is the same as that in Step 7.
        The query result of the standby cluster is as follows: standby cluster node 0 changes from Primary before the disaster recovery relationship is established to Main Standby after the disaster recovery relationship is established.

        [mpp@node2 dn_6002]$ cm_ctl query -Cvidp
        [  CMServer State   ]

        node           node_ip         instance                           state

        1  node1 20.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 20.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]

        node           node_ip         res_name instance  state

        1  node1 20.0.0.10   dms_res  6001      OnLine
        2  node2 20.0.0.20   dms_res  6002      OnLine
        1  node1 20.0.0.10   dss      20001     OnLine
        2  node2 20.0.0.20   dss      20002     OnLine

        [   Cluster State   ]

        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL

        [  Datanode State   ]

        node           node_ip         instance                             state            | node           node_ip         instance                             state

        1  node1 20.0.0.10   6001 25400  /opt/huawei/install/data/dn P Main Standby Normal | 2  node2 20.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal

    Step 13: Execute queries on the primary cluster host and the primary standby node of the standby cluster to observe streaming replication information.

        Primary node 0 of the primary cluster
        [omm@node1 dn]$ gs_ctl query -D /opt/huawei/install/data/dn
        [2023-04-18 09:38:34.397][1498175][][gs_ctl]: gs_ctl query ,datadir is /opt/huawei/install/data/dn
        HA state:
                local_role                     : Primary
                static_connections             : 2
                db_state                       : Normal
                detail_information             : Normal

        Senders info:
                sender_pid                     : 1456376
                local_role                     : Primary
                peer_role                      : StandbyCluster_Standby
                peer_state                     : Normal
                state                          : Streaming
                sender_sent_location           : 2/5C8
                sender_write_location          : 2/5C8
                sender_flush_location          : 2/5C8
                sender_replay_location         : 2/5C8
                receiver_received_location     : 2/5C8
                receiver_write_location        : 2/5C8
                receiver_flush_location        : 2/5C8
                receiver_replay_location       : 2/5C8
                sync_percent                   : 100%
                sync_state                     : Async
                sync_priority                  : 0
                sync_most_available            : Off
                channel                        : 10.0.0.10:25400-->20.0.0.10:43350

        Receiver info:
        No information

        Standby cluster first standby node 0
        [omm@nodename pg_log]$ gs_ctl query -D /opt/huawei/install/data/dn
        [2023-04-18 11:33:09.288][2760315][][gs_ctl]: gs_ctl query ,datadir is /opt/huawei/install/data/dn
        HA state:
                local_role                     : Main Standby
                static_connections             : 2
                db_state                       : Normal
                detail_information             : Normal

        Senders info:
        No information
        Receiver info:
                receiver_pid                   : 1901181
                local_role                     : Standby
                peer_role                      : Primary
                peer_state                     : Normal
                state                          : Normal 
                sender_sent_location           : 2/5C8
                sender_write_location          : 2/5C8
                sender_flush_location          : 2/5C8
                sender_replay_location         : 2/5C8
                receiver_received_location     : 2/5C8
                receiver_write_location        : 2/5C8
                receiver_flush_location        : 2/5C8
                receiver_replay_location       : 2/5C8
                sync_percent                   : 100%
                channel                        : 20.0.0.10:43350<--10.0.0.10:25400

    Step 14: Switching the primary/standby relationship between clusters

        1. Stop the primary cluster (skip this step if it cannot be stopped).

        2. Adjust the synchronization pair on DeviceManager: 1) Split, 2) Cancel resource protection from the secondary, 3) Reverse the synchronization direction.

        3. Modify the DSS parameters on all nodes of the original standby cluster.
        dsscmd setcfg -n CLUSTER_RUN_MODE -v cluster_primary

        4. Modify the CM parameters on the primary standby node of the original standby cluster.
        cm_ctl set --param --agent -k ss_double_cluster_mode=1
        cm_ctl set --param --server -k ss_double_cluster_mode=1
        cm_ctl reload --param --agent
        cm_ctl reload --param --server

        5. Execute the following on the primary standby node of the original standby cluster:
        gs_ctl failover [-D $PGDATA]

        6. After the promotion to primary is complete, run cm_ctl query -Cvipd to query the status of the new primary cluster. (If the original primary cluster is already damaged, the procedure ends here.)

        7. Perform a full build on the original primary cluster. (This step can be skipped for planned switchovers.)
        export DSS_MAINTAIN=TRUE
        dssserver -D /opt/huawei/install/dss_home & 
        gs_ctl build -b cross_cluster_full -q
        dsscmd stopdss
        export DSS_MAINTAIN=FALSE       

        8. Modify the DSS parameters on all nodes of the original primary cluster.
        In the $DSS_HOME/cfg/dss_inst.ini file, adjust
        CLUSTER_RUN_MODE=cluster_standby

        9. Modify cm parameters on the original primary cluster primary node.
        cm_ctl set --param --agent -k ss_double_cluster_mode=2
        cm_ctl set --param --server -k ss_double_cluster_mode=2

        10. Adjust the synchronization pair on device manage: 1. Enable from resource protection, 2. Synchronization

        11. Start the new standby cluster.
        cm_ctl start

## FAQ

I. How to Scale Out a Dual-Cluster

Data disks can be scaled out directly using dsscmd adv. Xlog disks require the following steps:

1. Stop the standby cluster.
2. Prepare a LUN of the same size on both the primary and standby clusters simultaneously, establish a remote synchronization relationship, and ensure that the drive letter exposed to the database is consistent on both sides. For details, see Step 1 of this document.
   3. Split the original xlog pair from the newly added pair and cancel the resource protection.
   4. Perform online dsscmd adv scale-out on the primary cluster.
   5. Perform offline dsscmd adv scale-out on the standby cluster.
   6. Synchronize both pairs. After both synchronizations are complete, start the standby cluster.

II. How to Remove and Establish Disaster Recovery for the Dual-Cluster

Use the gs_ddr tool for this purpose. For specific operation commands, see [gs_ddr](./../tool_and_commandreference/gs_ddr.md).

III. How to uninstall the dual-cluster

Run the gs_uninstall --delete-data command on both the primary cluster and the standby cluster. For specific operation command details, see [gs_uninstall](./../tool_and_commandreference/gs_uninstall.md).
