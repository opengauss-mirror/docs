---
description: This document describes Resource Pooling Network Dual-Cluster Deployment in openGauss, covering topics such as Content Overview, Example of Manually Deploying a Network Dual-Cluster.
keywords: [openGauss, Resource Pooling Network Dual-Cluster Deployment, database administration, Content Overview, Example of Manually Deploying a Network Dual-Cluster]
---

# Resource Pooling Network Dual-Cluster Deployment

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:46:24.856Z pushedAt=2026-09-11T11:30:48.333Z -->

## Content Overview

openGauss resource pooling is a new cluster architecture introduced by openGauss. Through the DMS and DSS components, it enables shared underlying storage data among multiple nodes in the cluster and real-time memory sharing between nodes, thereby saving underlying storage resources and supporting one-write-multiple-read and real-time consistent reads within the cluster. This document primarily describes the deployment of a network dual-cluster based on resource pooling.

  - In the enterprise edition installation package officially released on the community, if a resource pooling network dual-cluster needs to be set up, the required hardware includes disk arrays, servers, and optical switches, and the CM and OM components must be deployed.

## Example of Manually Deploying a Network Dual-Cluster<a name="section188071153201818"></a>

For resource pooling deployment, use the OM management tool to deploy two resource pooling single clusters, and then configure disaster recovery parameters to build a network dual-cluster.

>[!NOTE]
>Manual installation here refers to using the OM management tool to execute relevant commands for resource pooling cluster installation and deployment after project compilation. For regular openGauss installation, refer to the *Installation Guide*.

- Prerequisites
    - The project has completed code compilation. For compilation instructions, see [Software Installation and Compilation](../compilation_guide/compiling_the_version.md).
    - The primary and standby storage arrays have been mounted with LUN devices, and the storage array devices are available.

- Restrictions
    - A properly functioning Dorado storage system is required to set up two resource pooling clusters (at least 2+2 compute nodes).

- Networking Mode

    <table>
    <tbody>
    <tr>
        <td rowspan='2'>Production Center</td>
        <td rowspan='2'>Primary site</td>
        <td>Service computing node 0</td>
        <td>10.0.0.10</td>
        <td rowspan='2'>Primary storage</td>
        <td rowspan='2'>Dorado1</td>
    </tr>
        <td>Service computing node 1</td>
        <td>10.0.0.20</td>
    <tr>
        <td rowspan='2'>Disaster recovery center</td>
        <td rowspan='2'>Standby side</td>
        <td>Service computing node 0</td>
        <td>20.0.0.10</td>
        <td rowspan='2'>Standby storage</td>
        <td rowspan='2'>Dorado2</td>
    </tr>
        <td>Service computing node 1</td>
        <td>20.0.0.20</td>
    </tbody>
    </table>

- Steps

    Step 1: Create the LUNs required for resource pooling on the primary storage, and map all LUNs to the service computing nodes.
    - Ensure that the same Dorado LUN is mapped to the same drive letter across multiple machines within a cluster. If the drive letters are inconsistent, you can use soft links to make the drive letters exposed to openGauss consistent.
    - For example, if the disk with WWN 00000000000001 has the drive letter sda on node 0 of the primary cluster and sdb on node 1 of the primary cluster, you can use the following method:

        ```
        ll /dev/disk/by-id             // Check the WWN corresponding to the LUN to determine the specific drive letter.
        ln -s /dev/sda /dev/first      // Execute on node 0.
        ln -s /dev/sdb /dev/first      // Execute on node 1.
        ```

        Then use /dev/first as the available disk.

        <table>
        <tbody>
        <tr>
            <td rowspan='1'>LUN</td>
            <td rowspan='1'>Drive letter</td>
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

    Step 2: Prepare the XML file on the primary storage.

    For configuration instructions, see [*Documentation > Installation Guide > Enterprise Edition Installation > Installing openGauss > Creating an XML Configuration File > Configuring the Database Name and Directories*](../installation_guide/creating_an_xml_configuration_file.md).

    Prepare the XML file required for the resource pooling cluster according to the configuration instructions. The following example uses one primary and one standby:

        <?xml version="1.0" encoding="UTF-8"?>
        <ROOT>
            <!-- openGauss overall information -->
            <CLUSTER>
                <!-- Database name -->
                <PARAM name="clusterName" value="cluster" />
                <!-- Database node name (hostname) -->
                <PARAM name="nodeNames" value="node1,node2" />
                <!-- Database installation directory -->
                <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
                <!-- Log directory -->
                <PARAM name="gaussdbLogPath" value="/opt/huawei/install/log" />
                <!-- Temporary file directory -->
                <PARAM name="tmphuaweidbPath" value="/opt/huawei/install/tmp"/>
                <!-- Database tool directory -->
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
                <!-- Deployment information on node 1. The value of "name" is configured as the hostname. -->
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

                <!-- Node deployment information on node 2, where the value of "name" is configured as the host name (hostname) -->
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

    `Tips`: Users need to modify the node name, node IP, directory, drive letter, and port number.

    Step 3: Perform the following operations on the primary storage to install and deploy the primary cluster. The installation user is omm.

    Perform the steps in [*Documentation -> Installation Guide -> Enterprise Edition Installation -> Installing openGauss -> Initializing the Installation Environment*](../installation_guide/creating_an_xml_configuration_file.md).

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
    + omm                    Operating system user
    + dbgrp                  Operating system user group

    Step 4: Query the primary cluster status.

    After the disaster recovery relationship is established, it is the primary cluster; before the disaster recovery relationship is established, it is still a resource pooling single cluster.

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

    Step 5: Prepare LUNs and XML files on the standby storage. Same as Step 1 and Step 2.

    `Tips`: You need to modify the node name, node IP, directory, drive letter, and port number.

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
        ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --sep-env-file=/home/omm/env

        su - omm
        gs_install -X /opt/software/openGauss/cluster_config.xml

    Step 7: Query the status of the cluster on the standby storage (which becomes the standby cluster after the disaster recovery relationship is established).

        After the disaster recovery relationship is established, it becomes the standby cluster; before the disaster recovery relationship is established, it remains a resource pooling single cluster.
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
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = stream"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.20 remoteport=25400'"

        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        Standby node
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_master_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = stream"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.20 remoteport=25400'"

        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        Set the primary cluster CM parameters
        cm_ctl set --param --agent -k ss_double_cluster_mode=1
        cm_ctl set --param --server -k ss_double_cluster_mode=1

        Start the primary cluster
        cm_ctl start

    Parameter description:
    + -N: specifies the node name, indicating that the configuration of this node is to be modified.
    + -D: specifies the database directory.
    + -c: Specifies to modify or add content in the postgresql.conf file.
    + -h: Specifies to modify or add content in the pg_hba.conf file.
    + application_name: Database node name.
    + ss_disaster_mode: Database disaster recovery mode, where stream indicates stream replication and dorado indicates Dorado storage.
    + cross_cluster_replconninfo: Connection information established between the primary and standby clusters. localport is the database HA port (the dataPortBase in the XML used in the above example; when the thread pool enable_thread_pool is enabled, it must be configured as the actual HAPort), localhost is the current node IP, and remotehost is the standby cluster IP.
    + ss_double_cluster_mode: cluster mode, where 1 indicates the primary cluster of a dual-cluster, 2 indicates the standby cluster of a dual-cluster, and 0 indicates a single cluster. The default value is 0.

    `Tips`: gs_guc is a configuration file modification tool provided by openGauss. You can also manually write the content enclosed in double quotation marks above into the postgresql.conf and pg_hba.conf files under /opt/huawei/install/data/dn($PGDATA).

    Step 9: Stop the resource pooling single cluster on the standby storage (which becomes the standby cluster after the disaster recovery relationship is established), and configure disaster recovery parameters.

        cm_ctl stop

        Primary node
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_0'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = stream"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.20 remoteport=25400'"

        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

        Standby node
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = stream"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.20 remoteport=25400'"

        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

    Step 10: Start the primary standby dssserver and execute build.

        export DSS_MAINTAIN=TRUE                                                        // Enable DSS manual mode.
        dssserver -D /opt/huawei/install/dss_home &                                     // Start dssserver. -D specifies $DSS_HOME.
        gs_ctl build -D /opt/huawei/install/data/dn -b cross_cluster_full -q
        dsscmd stopdss                                                                  // Stop dssserver in manual mode.

        `Tips`: The -q option must be added for build, which means the database will not be started after a successful build.

    Step 11: Configure CM parameters for the standby cluster and restart the standby cluster

        cm_ctl set --param --agent -k ss_double_cluster_mode=2
        cm_ctl set --param --server -k ss_double_cluster_mode=2
        cm_ctl start

    Step 12: Query the cluster status

        The query result of the primary cluster using cm_ctl query -Cvidp is the same as that in Step 7.
        The query result of the standby cluster is as follows: Node 0 of the standby cluster changes from primary before the disaster recovery relationship is established to Main Standby after the disaster recovery relationship is established.

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

    Step 13: Execute queries on the primary cluster host and the standby cluster first standby to observe streaming replication information.

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

    Parameter description:
    + sync_state: Synchronization state. sync indicates synchronous, and Async indicates asynchronous. This state is controlled by the cluster parameter synchronous_standby_names. For details, see the synchronous_standby_names parameter description in [Settings](../database_reference/settings.md).
