# Two-City Three-DC DR

To implement cross-region DR, you need to deploy two database instances, one primary database instance and one DR database instance. The primary database instance and DR database instance are usually deployed in two cities far away from each other. Full and incremental data synchronization is implemented between database instances by using storage media or without using storage media. A regional fault occurs in the primary database instance (production database instance) and data cannot be restored. You can enable the DR database instance to be promoted to primary to take over services.

openGauss provides the streaming replication-based remote DR solution.

## Streaming Replication-based Remote DR Solution

### Overview

In openGauss 3.1.0 and later versions, the two-city three-DC DR solution is provided.

### Specifications and Restrictions

This section describes the feature specifications and restrictions of this solution. Management personnel must pay special attention to this section.

#### Feature Specifications

- The network latency within the primary or DR database instance must be less than or equal to 10 ms, and the network latency between the primary and standby database instances must be less than or equal to 100 ms. The DR can run normally within the range of the required network latency. Otherwise, the primary and standby database instances will be disconnected.

- The following table lists the log generation speeds in the primary database instance supported by different hardware specifications when the network bandwidth is not a bottleneck and the parallel playback function is enabled in the DR database instance. The RPO and RTO can be ensured only under the log generation speed.

  **Table 1** Log generation speed in typical configurations

  <a name="table17799174017294"></a>

  <table><thead align="left"><tr id="row128001840172918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p38001240152916"><a name="p38001240152916"></a><a name="p38001240152916"></a>Typical Configuration</p>
  </th>
  <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3800204013293"><a name="p3800204013293"></a><a name="p3800204013293"></a>Log Generation Speed of the Primary Database Instance</p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="row38001640102916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p15800940112913"><a name="p15800940112913"></a><a name="p15800940112913"></a>96U/768G/SATA SSD</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1280016403297"><a name="p1280016403297"></a><a name="p1280016403297"></a>&lt;=10MB/s</p>
  </td>
  </tr>
  <tr id="row179471532813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p137941115112820"><a name="p137941115112820"></a><a name="p137941115112820"></a>128U/2T/NVMe SSD</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7794015152814"><a name="p7794015152814"></a><a name="p7794015152814"></a>&lt;=40MB/s</p>
  </td>
  </tr>
  </tbody>
  </table>

- If hybrid disk deployment is used, use the specifications of the low configuration. For example, if the database instance contains both NVMe and SATA disks, the specifications for SATA disks is used.

- A certain amount of data can be lost when the DR database instance is promoted to primary, and the RPO is less than or equal to 10 seconds. When the DR database instance is normal, the RTO for promoting the DR database instance to primary is less than or equal to 10 minutes. When the DR database instance is degraded, the RTO for promoting the DR database instance to primary is within 20 minutes.

- Practice: Planned primary/standby database instance switchover, no data loss, RPO = 0, RTO ≤ 20 minutes \(including the processes of demoting the primary database instance to the DR instance and promoting the DR database instance to the primary database instance\)

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>Tests show that the maximum write rate of SATA SSDs is about 240 MB/s, that of SAS SSDs is over 500 MB/s, and that of NVMe SSDs is even better. If the hardware conditions do not meet the preceding specifications, the single-shard log generation speed in the primary database instance must be reduced to ensure the RPO and RTO.
>
>Resources such as file handles and memory are used up in the primary and standby database instances. As a result, the RPO and RTO cannot be ensured.

#### Feature Constraints

-  Before the DR relationship is established, you need to create a DR user with the streaming replication permission on the primary cluster for DR authentication. The primary and standby clusters must use the same DR username and password. After a DR relationship is established, the user password cannot be changed. You can remove the DR relationship, modify the username and password, and establish the DR relationship again. The DR user password cannot contain blank characters and the following characters: |;&$<>`\'"{}()[]~*?!\n
-  The versions of the primary and standby clusters for which a DR relationship is to be established must be the same.
- The first standby and cascaded standby nodes cannot exist before streaming DR is established.
-  When the DR relationship is established, if the number of cluster copies is less than or equal to 2, **most\_available\_sync** is set to **on**. After the DR relationship is removed or a failover occurs, **most\_available\_sync** is not restored to the initial value, ensuring that the cluster is in maximum availability mode.
-  When the DR relationship is established, **synchronous\_commit** is set to **on**. After the DR relationship is removed or a failover occurs, **synchronous\_commit** is restored to the initial value.
-  The DR cluster can be read but cannot be written.
-  After the DR cluster is promoted to primary by running the failover command, the DR relationship between the DR cluster and the original primary cluster becomes invalid. You need to re-establish the DR relationship.
- The DR relationship can be set up only when the primary and DR database instances are normal. Only when the primary database instance is normal and the DR database instance has been promoted to primary, the DR relationship can be canceled for the primary database instance. When both the primary and DR database instances are normal, you can execute a planned switchover between the primary database instance and the DR database instance. If the DR database instance is neither normal nor degraded, it cannot be promoted to primary and cannot provide DR services. In this case, you need to manually repair or rebuild the DR database instance.
- If the majority DNs of the DR cluster are faulty or all CMS and DNs are faulty, the DR relationship cannot be established, the DR cluster cannot be promoted to primary, and cannot be used. In this case, you need to rebuild the DR cluster.
- If a forcible switchover is performed on the primary cluster, you need to rebuild the DR cluster.
-  Both the primary and DR clusters support full backup and incremental backup using gs\_probackup. In the DR state, neither the primary cluster nor the DR cluster can be restored. If the primary database instance needs to be restored, remove the DR relationship first. After the backup and restoration are complete, re-establish the DR relationship.
- After the DR relationship is established, the DN port cannot be changed.
-  GUC parameters cannot be synchronized between the primary database instance and the DR database instance in a DR relationship.
- The primary and standby clusters do not support node replacement and repair, copy addition and reduction, or DCF mode.
- If the DR database instance has two copies and one copy is damaged, the DR database instance can still be promoted to primary to provide services. If the remaining copies are also damaged, data loss is inevitable.
- In the DR state, only gray upgrade is supported and the original upgrade constraints are inherited. In the DR state, the upgrade must comply with the following sequence: upgrade the primary cluster, upgrade the standby cluster, submit the standby cluster, and then submit the primary cluster.
- When selecting the IP address for streaming replication-based remote DR, you are advised to separate the network plane in the cluster from the cross-cluster network plane to balance pressure and improve security.

### GUC Parameter Settings That Affect DR Performance<a name="EN-US_TOPIC_0000001276547749"></a>

#### Impact of Checkpoint-related Parameter Settings<a name="section1564175012403"></a>

-   The DR performance metric described in "Feature Specifications" is measured when the parameters related to checkpoints are set to default values.
-   For details about checkpoint parameters, see "GUC Parameters \> Write Ahead Log \> Checkpoints" in *Developer Guide*. When **enable\_incremental\_checkpoint** is set to **on**, the maximum interval between automatic WAL checkpoints is determined by the value of **incremental\_checkpoint\_timeout**. If the default value is not used and you set it to a larger value, a large number of logs need to be replayed when the instance is restarted. As a result, the specified RTO cannot be ensured.

#### Impact of Ultimate RTO-related Parameter Settings<a name="section129219253118"></a>

For details about the parameters related to ultimate RTO, see the description of the **recovery\_parse\_workers** and **recovery\_redo\_workers** parameters in "GUC Parameters \> Write Ahead Log \> Log Replay" in *Developer Guide*. To enable ultimate RTO, ensure that the number of logical CPUs on each host is greater than the number of extra threads started after ultimate RTO is enabled. Otherwise, threads may contend for CPU resources. As a result, some operations in the DR process take a long time and cannot meet the specified DR performance metric. The formula of calculating the number of extra threads started after ultimate RTO is enabled is as follows: \(**recovery\_parse\_workers** x \(**recovery\_redo\_workers** + 2\) + 5\) x Number of DN instances on each host.

### Basic Operations<a name="EN-US_TOPIC_0000001262512081"></a>

#### Establishing a DR Relationship<a name="EN-US_TOPIC_0000001217672260"></a>

##### Evaluating the Service Load of the Primary Database Instance Before Establishing the DR Relationship<a name="section6899193815717"></a>

**Data Volume**

- The amount of data stored in the primary database instance directly affects the amount of data to be transmitted during the establishment of the DR relationship. In addition, the remote network bandwidth also affects the duration of the DR relationship establishment. You can set the timeout interval by changing the value of **time-out** of the DR relationship establishment interface as required. The default value is 20 minutes. The timeout interval is determined by the data volume of the primary database instance before the DR relationship is established and the available remote network bandwidth. The formula is as follows: Data volume/Transmission rate = Time required.

  For example, if the primary database instance has 100 TB data and the available bandwidth between remote database instances is 512 Mbps (transmission rate: 64 MB/s), it takes 1638400s (100 x 1024 x 1024/64, about 19 days) to transmit the data during establishment of the DR relationship.


**Log Generation Rate**

- The log generation rate affects the amount of logs that need to be retained in the primary database instance during establishment of the DR relationship. After full data restoration is complete, the DR database instance establishes a streaming replication relationship with the primary database instance. If the primary database instance does not retain the logs, the streaming replication relationship may fail to be established.

  For example, if the establishment process lasts for two days, logs generated within the two days must be retained in the local disk of the primary database instance before the DR relationship is established.

- If the log generation rate of the primary database instance is greater than the remote transmission bandwidth, or if the bandwidth is sufficient but the log generation rate of the primary database instance is greater than the log replay rate of the DR database instance, the RPO/RTO as specified in "Feature Specifications" cannot be ensured.

##### Interfaces for Establishing the DR Relationship<a name="section9319195834315"></a>

During the establishment of the DR relationship, you must send setup requests to the primary and standby database instances. For details, see the gs\_sdr tool in *Tool Reference*.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>-   During establishment of the DR relationship, the DR username and password need to be delivered to the primary and DR database instances for inter-database instance authentication. The user permission is **Replication**, which is specific for replication.
>-   Before setting up a DR relationship, you must create a DR user in the primary cluster.
>-   After the DR relationship is established, the user password cannot be modified. It is used throughout the DR lifecycle. You can remove the DR relationship, modify the username and password, and establish the DR relationship again.
>-   You can set the timeout interval by changing the value of **time\_out** as required. The default value is 20 minutes. The timeout interval is determined by the data volume of the primary database instance before the DR relationship is established and the available remote network bandwidth. The formula is as follows: Data volume/Transmission rate = Time required.
>    For example, if the primary database instance has 100 TB data and the available bandwidth between remote database instances is 512 Mbps (transmission rate: 64 MB/s), it takes 1638400s (100 x 1024 x 1024/64, about 19 days) to transmit the data during establishment of the DR relationship.

#### DR Database Instance Failover<a name="EN-US_TOPIC_0000001217832244"></a>

Send a request to the DR database instance to promote the DR database instance to primary. For details, see the gs\_sdr tool in *Tool Reference*.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>
>-   After the DR database instance is promoted to primary, the DR information is cleared.
>-   If the primary database instance is normal and is processing services, you can run this command to remove the DR relationship from the DR database instance. After this command is executed, the DR database instance does not receive logs from the primary database instance anymore. As a result, the RPO value keeps increasing until the primary and standby database instances are disconnected. Then, the RPO value is null. For details about how to query the RPO value, see "Querying the DR Status of the Primary and Standby Database Instances."

#### Removing DR Information from the Primary Database Instance<a name="EN-US_TOPIC_0000001262792037"></a>

Send a request for clearing DR information to the primary database instance. For details, see the gs\_sdr tool in *Tool Reference*.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>
>-   This operation will remove the DR information from the primary database instance.
>-   This operation can be performed on the primary database instance only after the DR database instance is promoted to primary. If you perform this operation on the DR database instance before it is promoted to primary, the DR relationship will be damaged.

#### Planned Switchover<a name="EN-US_TOPIC_0000001262632081"></a>

Send a planned switchover request to the primary and standby database instances. For details, see the gs\_sdr tool in *Tool Reference*.

#### Querying the DR Status of the Primary and Standby Database Instances <a name="EN-US_TOPIC_0000001262912023"></a>

Send a DR status query request to the primary and standby database instances. For details, see the gs\_sdr tool in *Tool Reference*.

#### Upgrading the Primary and Standby Database Instances in a DR Relationship<a name="EN-US_TOPIC_0000001218152192"></a>

##### Major Version Upgrade<a name="section02171934143419"></a>

1.  Upgrade the primary database instance first. After the upgrade of the primary database instance is complete, upgrade the DR database instance.
2.  After the upgrade of the DR database instance is complete, commit the DR database instance first and then the primary database instance.

##### Minor Version Upgrade<a name="section132691016174618"></a>

1.  Upgrade the primary and standby database instances at the same time.
2.  After the upgrade is complete, commit the DR database instance first and then the primary database instance.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>
>-   Before committing the standby database instance, ensure that the upgrade of the primary database instance is complete.
>-   Commit the standby database instance first and then the primary database instance.
>-   After the standby database instance is committed, the primary database instance cannot be rolled back.
>-   During the upgrade, do not perform a switchover between the primary and standby database instances.

### Troubleshooting<a name="EN-US_TOPIC_0000001217672262"></a>

This section lists the frequently asked questions (FAQs) about the streaming replication-based remote DR solution and provides troubleshooting procedures.

The following tables list the symptoms, causes, and solutions of different operations.

#### Exception in Establishing the DR Relationship<a name="section12239185113"></a>

**Table** Errors that may occur during establishment of the DR relationship

<a name="table1122311841111"></a>

<table><thead align="left"><tr id="row32240187117"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p152248182110"><a name="p152248182110"></a><a name="p152248182110"></a><strong id="b15224171891116"><a name="b15224171891116"></a><a name="b15224171891116"></a>Symptom</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p62243182118"><a name="p62243182118"></a><a name="p62243182118"></a><strong id="b112248189114"><a name="b112248189114"></a><a name="b112248189114"></a>Cause and Solution</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>The following error is returned when the primary database instance establishes the DR relationship:
<p id="p622421816118"><a name="p622421816118"></a><a name="p622421816118"></a>Result exception error : Failed to do check main standby connection. Because Waiting timeout: XXs.</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a>Cause:</strong> When the data volume of the primary database instance is large or the remote network bandwidth is small, the primary database instance may exit the DR relationship establishment process due to timeout before data replication is complete in the DR database instance.</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a> Solution:</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>If the DR database instance is establishing or has established the DR relationship, you can reenter the DR relationship establishment process of the primary database instance. The primary database instance will enter the state of waiting for DR connection again. Before reentering the process, you can estimate the timeout interval again and set the timeout interval parameter based on the data volume of the primary database instance and the remote network bandwidth. </li><li>If the DR database instance also fails to establish the DR relationship, rectify the fault in the DR database instance and then establish the DR relationship again.</li></ul>
</td>
</tr>
    <tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>During the DR relationship establishment, the DR relationship fails to be established because the primary DN in the primary cluster is switched over.</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a> Cause:</strong> The primary DN of the primary cluster is switched over. The DR cluster is disconnected from the primary cluster for data build. As a result, the DR relationship fails to be established.</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a> Solution:</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>Check whether the primary/standby switchover in the primary cluster is manually performed. If yes, stop the switchover. If no, ignore it. Issue the establishment command again.</li></ul>
</td>
</tr>
</tbody>
</table>



#### Exception in Promoting the DR Database Instance to Primary (Failover)<a name="section11920103834912"></a>

**Table** Errors that may occur when the DR database instance is promoted to primary (failover)

<a name="table3165100125214"></a>

<table><thead align="left"><tr id="row131654015210"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p131651103522"><a name="p131651103522"></a><a name="p131651103522"></a><strong id="b316511012527"><a name="b316511012527"></a><a name="b316511012527"></a>Symptom</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p1916513085211"><a name="p1916513085211"></a><a name="p1916513085211"></a><strong id="b121659014521"><a name="b121659014521"></a><a name="b121659014521"></a>Cause and Solution</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1416617018523"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p01668035216"><a name="p01668035216"></a><a name="p01668035216"></a>A faulty node in the DR database instance is not promoted to primary.</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p1216618005217"><a name="p1216618005217"></a><a name="p1216618005217"></a><strong id="b1816619055218"><a name="b1816619055218"></a><a name="b1816619055218"></a> Cause:</strong> A node is disconnected from the DR database instance due to server breakdown or network interruption and fails to promote to primary.</p>
<div class="p" id="p17166100175215"><a name="p17166100175215"></a><a name="p17166100175215"></a><strong id="b21664012527"><a name="b21664012527"></a><a name="b21664012527"></a>Solution: </strong><a name="ol164751524152310"></a><a name="ol164751524152310"></a><ol id="ol164751524152310"><li>After the faulty node is recovered, add the node to the database instance again. </li><li>Modify the parameters related to the database instance DR mode in the CMS and CMA to switch back to the primary database instance configuration:<pre class="screen" id="screen158157388235"><a name="screen158157388235"></a><a name="screen158157388235"></a>gs_guc set -Z cmserver -N all -I all -c "backup_open = 0"
gs_guc set -Z cmagent -N all -I all -c "agent_backup_open=0"
gs_guc set -Z cmagent -N all -I all -c "disaster_recovery_type= 0"</pre>
</li><li>Connect to the faulty node, query the CMS and CMA process IDs, and run the **kill -9** command to kill the processes. The processes will be restarted by the OM Monitor to make the setting of CMS and CMA parameters take effect. </li><li>Run **cm_ctl start-n NODEID -D DATADIR** to manually restore the node.</li></ol>
</div>
</td>
</tr>
</tbody>
</table>


#### Planned Switchover Exception<a name="section1282142716550"></a>

**Table** Errors that may occur during planned switchover

<a name="table19231757135517"></a>

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>Symptom</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>Cause and Solution</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>The following error is returned during a planned switchover in the primary database instance:
<p id="p6923175745511"><a name="p6923175745511"></a><a name="p6923175745511"></a>Result exception error : Failed to generate switchover barrier before switchover</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>Cause: </strong>When the primary database instance receives a planned switchover command, a switchover barrier is generated before the primary database instance is demoted to standby. This barrier ensures that the replication of logs of all CNs and DN shards in the primary and standby database instances stops at a specified checkpoint. If a switchover barrier fails to be generated in the primary database instance due to reasons such as network jitter in the primary database instance, the planned switchover will be canceled.</p>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a> Solution: </strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>If a planned switchover command times out in the DR database instance, the planned switchover can be reentered between the primary and DR database instances. </li><li>If logs fail to be truncated after multiple switchover operations are performed, you need to further analyze the log files related to streaming DR.</li></ul>
</td>
</tr>
<tr id="row09241574559"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p1892435714553"><a name="p1892435714553"></a><a name="p1892435714553"></a>Result exception error : Failed to do check switchover_barrier on all main standby dn and cn. Because check timeout: XXs</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p99249578555"><a name="p99249578555"></a><a name="p99249578555"></a><strong id="b41411021113310"><a name="b41411021113310"></a><a name="b41411021113310"></a>Cause: </strong>After the DR database instance receives a planned switchover command, it checks whether a switchover barrier has been received on all CNs and the first standby DN before being promoted to primary. This ensures that the replication of logs of all CNs and DN shards in the primary and standby database instances stops at a specified checkpoint. If the DR database instance fails to obtain the switchover barrier within the specified timeout interval due to reasons such as abnormal remote network, the planned switchover will be canceled.</p>
<p id="p17275132623311"><a name="p17275132623311"></a><a name="p17275132623311"></a><strong id="b17169142717338"><a name="b17169142717338"></a><a name="b17169142717338"></a> Solution: </strong></p>
<a name="ul103067349390"></a><a name="ul103067349390"></a><ul id="ul103067349390"><li>If a planned switchover command times out in the primary database instance, the planned switchover can be reentered between the primary and DR database instances. </li><li>If the DR database instance fails to obtain the switchover barrier after multiple switchover operations are performed, you need to further analyze the log files related to streaming DR.</li></ul>
</td>
</tr>
</tbody>
</table>

#### Database Instance Fault in the DR Cluster

**Table** Error information about database instances in the DR cluster 

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>Symptom</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>Cause and Solution</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>A CM Agent fault occurs in the DR cluster. The DN status on the node is <strong>Unknown</strong>. The status of some first standby DNs is <strong>Main Standby Need repair(Connecting)</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>Cause: </strong>The CM Agent on the node is faulty.
    </p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>The DN status on the node cannot be reported to the CM Server, and the DN instance status is displayed as <strong>Unknown</strong>. </li><li>If the first standby instance (Main Standby) exists on the node, the first standby switchover is triggered. The original first standby instance is normal and has a normal streaming replication relationship with the primary DN in the primary database instance. However, the primary DN in the primary database instance allows only one first standby connection. As a result, the new first standby instance cannot be connected to the primary DN in the primary database instance, and the instance status is displayed as <strong>Main Standby Need repair(Connecting)</strong>. </li></ul>
</p>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a> Solution: </strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>Check the CM Agent alarm ALM_AI_AbnormalCMSProcess in the DR cluster and try to recover the faulty CM Agent. After the fault is rectified, the connection to the new first standby instance is restored. </li><li>If the faulty CM Agent cannot be recovered within a short period of time, run the **gs_ctl stop -D DATADIR or kill** command to manually stop the DN process on the node and recover the node.</li></ul>
</td>
</tr>
