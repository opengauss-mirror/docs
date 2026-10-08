# Disaster Recovery Solution Based on Streaming Replication

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:44:18.053Z pushedAt=2026-09-11T07:45:20.866Z -->

## Overview

To implement cross-region disaster recovery, two sets of database instances must be deployed: one primary database instance and one disaster recovery database instance. The primary database instance and the disaster recovery database instance are typically deployed in two different cities located far apart. Full and incremental data synchronization between the database instances is achieved either with or without the aid of storage media. When the primary database instance (i.e., the production database instance) experiences a regional failure and the data cannot be recovered at all, the disaster recovery database instance may be promoted to take over services.

Starting from openGauss 3.1.0, the two-site three-center cross-region disaster recovery solution provides a streaming replication-based remote disaster recovery solution.

## Specifications and Constraints

This section provides a detailed description of the feature specifications and constraints of this solution, which administrators should pay close attention to.

### Feature Specifications

- The network latency within the primary database instance or the disaster recovery database instance must be ≤10 milliseconds, and the cross-region network latency between the primary and standby database instances must be ≤100 milliseconds. Within this latency range, normal disaster recovery operation can be ensured; otherwise, disconnection between the primary and standby database instances may occur.

- When network bandwidth is not a bottleneck and parallel replay is enabled on the disaster recovery database instance, the log generation rates supported by the primary database instance under different hardware specifications are shown in the following table. Under these log generation rates, RPO and RTO can be guaranteed; otherwise, they cannot be guaranteed.

  **Table 1** Log generation rate under typical configurations

  <a name="table17799174017294"></a>

  <table><thead align="left"><tr id="row128001840172918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p38001240152916"><a name="p38001240152916"></a><a name="p38001240152916"></a>Typical Configuration</p>
  </th>
  <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3800204013293"><a name="p3800204013293"></a><a name="p3800204013293"></a>Supported Primary Database Instance Log Generation Rate</p>
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

- If disks are deployed in a mixed configuration, the specifications of the lower-performance component shall apply (for example, if a database instance contains both NVMe and SATA drives, refer to the specifications configured for SATA drives).

- Disaster recovery database instance promotion:

    - Disaster recovery database instance promotion allows a certain amount of data loss, with RPO <= 10 seconds.
    - When the disaster recovery database instance is in the normal state, the RTO for disaster recovery promotion is <= 10 minutes. In superimposed fault scenarios where the database instance is in the degraded state, the RTO for disaster recovery database instance promotion is generally within 20 minutes.
    - The disaster recovery database instance is an independent database instance and cannot perceive the status of the primary database instance, so automatic promotion is not supported. Third-party apps can trigger the promotion of the disaster recovery database instance through API calls. For related operations, see failover for disaster recovery database instance promotion.

- Drill feature: For a planned primary-standby database instance switchover, no data is lost (RPO=0), and RTO is less than or equal to 20 minutes (including two processes: demoting the primary database instance to a disaster recovery instance and promoting the disaster recovery database instance to primary).

>[!TIP] Prerequisites
>Tests show that the maximum SATA SSD write rate is approximately 240 MB/s, SAS SSDs can achieve write speeds above 500 MB/s, and NVMe SSDs perform even better. If the hardware conditions do not meet the above standards, the supported log generation rate of a single shard on the primary database instance should be lowered to ensure RPO and RTO.
>
>When the primary and standby database instances run out of resources such as file handles or memory, RPO and RTO cannot be guaranteed.

### Feature Constraints

- Before setting up a disaster recovery relationship, the primary cluster must create a disaster recovery user with streaming replication privileges for disaster recovery authentication. The primary and standby clusters must use the same disaster recovery username and password. Once the disaster recovery setup is complete, the password of this user cannot be modified. If the disaster recovery username and password need to be changed, the disaster recovery relationship must be removed and re-established using the new disaster recovery user. The disaster recovery user password must not contain the following characters: "| ;&$<>`\'\"{}()[]~*?!\n and whitespace".
- The primary and standby clusters used for disaster recovery setup must have the same version number.
- The existence of a primary standby or cascaded standby is not supported before streaming disaster recovery setup.
- When setting up a disaster recovery relationship, if the number of replicas in the cluster is less than or equal to 2, most_available_sync is set to on. This parameter will not be restored to its initial value after the disaster recovery relationship is removed or a failover occurs, ensuring that the cluster remains in maximum availability mode.
- When a disaster recovery relationship is set up, synchronous_commit is set to on, and it is restored to its initial value upon disaster recovery removal or failover promotion.
- The disaster recovery cluster is readable but not writable.
- After the disaster recovery cluster is promoted to primary via the failover command, its disaster recovery relationship with the original primary cluster becomes invalid, and the disaster recovery relationship must be re-established.
- Disaster recovery setup can be performed when both the primary database instance and the standby database instance are in the normal state. When the primary database instance is in the normal state and the standby database instance has already been promoted, the primary database instance can perform disaster recovery removal; other database instance states are not supported. When both the primary database instance and the standby database instance are in the normal state, the primary database instance can be switched to the standby database instance and the standby database instance can be switched to the primary database instance via the planned switchover command. When the standby database instance is in a state other than Normal or Degraded, it cannot be promoted, cannot continue to provide disaster recovery services as a standby database instance, and must be manually repaired or rebuilt.
- If a majority of DNs in the disaster recovery cluster fail, or if both CMS and all DNs fail, disaster recovery cannot be started, the disaster recovery cluster cannot be promoted, it cannot serve as a disaster recovery cluster, and the disaster recovery cluster must be rebuilt.
- If a forced failover is performed on the primary cluster, the disaster recovery cluster must be rebuilt.
- Both the primary cluster and the disaster recovery cluster support full and incremental backups using the gs_probackup tool. In the disaster recovery state, neither the primary cluster nor the disaster recovery cluster can perform a restore. If the primary database instance needs to be restored, the disaster recovery relationship must be removed first, and then re-established after the backup and restore is completed.
- After the disaster recovery relationship is established, modification of DN instance ports is not supported.
- Synchronization of GUC parameters is not supported between the primary database instance and the disaster recovery database instance that have established a disaster recovery relationship.
- The primary and standby clusters do not support node replacement, repair, replica scaling, or DCF mode.
- When the disaster recovery database instance has two replicas, the instance can still be promoted to primary and provide external services if one replica is damaged. However, if the remaining replica is also damaged, irreversible data loss will occur.
- In the disaster recovery status, only gray upgrades are supported, and the original upgrade constraints are inherited. During an upgrade in the disaster recovery status, the sequence must be followed: upgrade the primary cluster first, then the standby cluster, then commit the standby cluster, and finally commit the primary cluster.
- It is recommended that when selecting the IP address for streaming disaster recovery replication, the intra-cluster network plane and the cross-cluster network plane should be separated as much as possible to facilitate load distribution and improve security.

## GUC Parameter Settings Affecting Disaster Recovery Performance Metrics

### Impact of Checkpoint-Related Parameter Settings<a name="section1564175012403"></a>

- The disaster recovery performance indicators described in the Feature Specifications are all measured under the default values of checkpoint-related parameter settings.
- For descriptions of checkpoint-related parameters, see the "GUC Parameter Description \> Write-Ahead Log \> Checkpoint" section in *Database Reference*. When `enable_incremental_checkpoint` is set to on, the maximum interval between automatic WAL checkpoints is determined by `incremental_checkpoint_timeout`. If the default value is not used and the parameter is increased, a large volume of logs may need to be replayed during instance restart, which will cause the disaster recovery RTO to increase and fail to meet the Feature Specifications.

### Impact of Extreme RTO-Related Parameter Settings<a name="section129219253118"></a>

For descriptions of extreme RTO-related parameters, see the recovery_parse_workers and recovery_redo_workers parameter descriptions in the "GUC Parameter Description \> Write-Ahead Log \> Log Replay" section of *Database Reference*. To enable extreme RTO, the number of logical CPUs on each machine must be at least greater than the number of additional threads started after extreme RTO is enabled (the calculation formula is \(recovery\_parse\_workers \* \(recovery\_redo\_workers + 2\) + 5\) \* the number of DN instances on each machine). Otherwise, thread contention for CPU resources may occur, causing some operations in the disaster recovery process to take longer and preventing the disaster recovery feature specifications from being met.

## Basic Operations

### Disaster Recovery Setup

#### Service Load Assessment of the Primary Database Instance Before Disaster Recovery Setup<a name="section6899193815717"></a>

**Data Volume**:

- The amount of data stored in the primary database instance directly affects the volume of data to be transmitted during disaster recovery setup. Combined with the cross-region network bandwidth, this value directly impacts the duration of disaster recovery setup. A timeout duration can be set using the "time-out" parameter in the disaster recovery setup interface, with a default value of 20 minutes. The timeout duration is evaluated based on the data volume of the primary database instance before disaster recovery setup and the available cross-region bandwidth, using the calculation formula: Data Volume / Transmission Rate = Elapsed Time.

  For example, if the primary database instance has 100 TB of data and the available bandwidth between cross-region database instances is 512 Mbps (with a transmission rate of 64 MB/s), the time required to transfer this data for disaster recovery setup is 1,638,400 seconds (100 × 1024 × 1024 / 64, approximately 19 days).

**Log Generation Rate**:

- This value affects the amount of logs that the primary database instance must retain locally during the disaster recovery setup process. After the disaster recovery database instance completes full data restoration, it will establish a streaming replication relationship with the primary database instance. If the primary database instance does not retain the logs, the streaming replication relationship may fail to be established.

  For example: If the setup process is calculated to last 2 days, the logs generated during these 2 days must be retained on the local disk of the primary database instance before the setup is completed.

- If the log generation rate of the primary database instance exceeds the cross-region transmission bandwidth, or if the log generation rate of the primary database instance exceeds the log replay rate of the disaster recovery database instance even when bandwidth is sufficient — that is, in scenarios exceeding specifications — the RPO/RTO will not be maintained at the feature specification level after the disaster recovery setup is completed.

#### Disaster Recovery Setup Call Interface<a name="section9319195834315"></a>

During disaster recovery setup, a setup request must be sent to the primary and standby database instances. Refer to the gs_sdr tool in *Tool Reference*.

>[!TIP]Prerequisites
>
>- During disaster recovery setup, the same disaster recovery username and password must be used on the primary database instance and the disaster recovery database instance for inter-instance authentication. The privilege of this user is Replication (the Replication attribute is a specific role used only for replication).
>- Before setting up disaster recovery, a disaster recovery user must be created on the primary cluster.
>- After a disaster recovery setup is complete, the password of this user cannot be modified and remains unchanged throughout the entire disaster recovery lifecycle. If the disaster recovery username and password need to be modified, the disaster recovery relationship must be removed and a new disaster recovery user must be used to perform the setup again.
>- During the disaster recovery setup process, a timeout duration can be set using <code>time_out</code>. The current default value is 20 minutes. The evaluation of the timeout duration is related to the data volume of the primary database instance before disaster recovery setup and the available bandwidth between sites. The calculation formula is "Data volume / Transmission rate = Time consumed".
> For example, if the primary database instance has 100 TB of data and the available bandwidth between the remote database instances is 512 Mbps (transmission rate of 64 MB/s), the time required to transfer this data during disaster recovery setup is 1,638,400 seconds (100 * 1024 * 1024 / 64, approximately 19 days).

### Disaster Recovery Database Instance Promotion Failover

Send a request for disaster recovery database instance promotion to the disaster recovery database instance. See the gs_sdr tool in *Tool Reference*.

>[!TIP]Prerequisites
>
>- After the disaster recovery database instance is promoted, disaster recovery information will be cleaned up.
>- If the primary database instance is in normal state and processing services, this command can be executed when the disaster recovery database instance needs to actively remove the disaster recovery relationship. After this command is issued, the disaster recovery database instance will no longer receive logs from the primary host, causing the disaster recovery indicator RPO value to continuously increase until the primary and standby database instances lose contact, at which point the RPO value becomes empty. For querying the RPO value, see Querying the Disaster Recovery Status of Primary-Standby Database Instances.

### Clearing Disaster Recovery Information from the Primary Database Instance

Send a request to clear disaster recovery information from the primary database instance. See the gs_sdr tool in *Tool Reference*.

>[!TIP] Prerequisites
>
>- This operation clears disaster recovery information from the primary database instance.
>- This operation can only be performed on the primary database instance after the disaster recovery database instance has been promoted. Executing this operation before the disaster recovery database instance is promoted will cause the disaster recovery relationship to be damaged.

### Planned Switchover

Send a planned switchover request to the primary-standby database instance. See *Tool Reference* for the gs_sdr tool.

### Querying the Disaster Recovery Status of the Primary-Standby Database Instance

Send a request to the primary-standby database instance to query the disaster recovery status. See the gs_sdr tool in *Tool Reference*.

### Upgrading Primary-Standby Database Instances in Disaster Recovery Status

#### Major Version Upgrade<a name="section02171934143419"></a>

1. The primary database instance is upgraded first. After the primary database instance upgrade is complete, the standby database instance is upgraded.
2. After the upgrade is complete, the disaster recovery database instance is committed first, followed by the primary database instance.

#### Minor Version Upgrade<a name="section132691016174618"></a>

1. The primary and standby database instances can execute the upgrade command simultaneously.
2. After the upgrade is complete, the disaster recovery database instance is committed first, followed by the primary database instance.

>[!TIP]Prerequisites
>
>- Before the standby database instance is committed, the primary database instance must have completed the upgrade.
>- The standby database instance is committed first, and the primary database instance is committed afterward.
>- Once the standby database instance has been committed, the primary database instance cannot be rolled back.
>- During the upgrade of the primary and standby database instances, no switchover between the primary and standby database instances may occur.

## Fault Handling

This section describes common issues that may be encountered when using the disaster recovery solution based on streaming replication, and provides fault handling procedures.

The following table lists the fault symptoms, causes, and solutions for different operations.

### Disaster Recovery Setup Exception<a name="section12239185113"></a>

**Table** Disaster Recovery Setup error message reference

<a name="table1122311841111"></a>

<table><thead align="left"><tr id="row32240187117"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p152248182110"><a name="p152248182110"></a><a name="p152248182110"></a><strong id="b15224171891116"><a name="b15224171891116"></a><a name="b15224171891116"></a>Fault Description</strong></p></th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p62243182118"><a name="p62243182118"></a><a name="p62243182118"></a><strong id="b112248189114"><a name="b112248189114"></a><a name="b112248189114"></a>Cause and Resolution</strong></p></th>
</tr>
</thead>
<tbody><tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>During disaster recovery setup, the primary database instance returns the following error, and the execution times out.</p>
<p id="p622421816118"><a name="p622421816118"></a><a name="p622421816118"></a>Result exception error: Failed to check the primary-standby connection. Because waiting timeout: XXs.</p></td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a>Cause:</strong> When the primary database instance has a large data volume or the remote network bandwidth is limited, the disaster recovery database instance may fail to complete data copy before the primary database instance times out and exits the disaster recovery setup process.</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a>Solution:</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>If the disaster recovery database instance is still in the setup process or has already completed setup, you can directly re-enter the disaster recovery setup process on the primary database instance. The primary database instance will re-enter the state of waiting for the disaster recovery connection. If the timeout parameter can be reset, re-estimate the timeout duration based on the data volume of the primary database instance and the remote network bandwidth before re-entering.</li><li>If the disaster recovery database instance setup process has also failed, troubleshoot the disaster recovery database instance first, and then re-enter the database instance disaster recovery setup process.</li></ul></td>
</tr>
    <tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>During the establishment of the disaster recovery relationship, the disaster recovery setup fails due to a switchover of the primary DN in the primary cluster.</p></td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a>Cause:</strong> The primary DN in the primary cluster has undergone a switchover, causing the disaster recovery cluster to disconnect when connecting to the primary cluster for data build, which results in setup failure.</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a>Solution:</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>Check whether a manual primary-standby switchover operation has been performed within the primary cluster. If so, stop the operation; if not, ignore it. Re-issue the setup command.</li></ul></td>
</tr>
</tbody>
</table>

### Disaster Recovery Promotion Failover Exception<a name="section11920103834912"></a>

**Table** Disaster Recovery Promotion failover error message reference

<a name="table3165100125214"></a>

<table><thead align="left"><tr id="row131654015210"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p131651103522"><a name="p131651103522"></a><a name="p131651103522"></a><strong id="b316511012527"><a name="b316511012527"></a><a name="b316511012527"></a>Fault Description</strong></p></th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p1916513085211"><a name="p1916513085211"></a><a name="p1916513085211"></a><strong id="b121659014521"><a name="b121659014521"></a><a name="b121659014521"></a>Cause and Resolution</strong></p></th>
</tr>
</thead>
<tbody><tr id="row1416617018523"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p01668035216"><a name="p01668035216"></a><a name="p01668035216"></a>A faulty node in the disaster recovery database instance did not participate in the promotion of the disaster recovery database instance.</p></td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p1216618005217"><a name="p1216618005217"></a><a name="p1216618005217"></a><strong id="b1816619055218"><a name="b1816619055218"></a><a name="b1816619055218"></a>Cause:</strong> The node became detached from the disaster recovery database instance due to server downtime, network interruption, or other reasons, and did not participate in the promotion of the disaster recovery database instance.</p>
<div class="p" id="p17166100175215"><a name="p17166100175215"></a><a name="p17166100175215"></a><strong id="b21664012527"><a name="b21664012527"></a><a name="b21664012527"></a>Solution:</strong><a name="ol164751524152310"></a><a name="ol164751524152310"></a><ol id="ol164751524152310"><li>After the faulty node is repaired, rejoin it to the database instance.</li><li>Modify the parameters related to the disaster recovery mode of the database instance in CMS and CMA, and switch back to the primary database instance configuration.<pre class="screen" id="screen158157388235"><a name="screen158157388235"></a><a name="screen158157388235"></a>gs_guc set -Z cmserver -N all -I all -c "backup_open = 0"
gs_guc set -Z cmagent -N all -I all -c "agent_backup_open=0"
gs_guc set -Z cmagent -N all -I all -c "disaster_recovery_type= 0"</pre>
</li><li>Join the faulty node, query the process IDs of CMS and CMA, and use the kill -9 command to terminate the processes. The processes will then be restarted by om_monitor, completing the application of the CMS and CMA parameter modifications.</li><li>After manually repairing the node, use cm_ctl start-n NODEID -D DATADIR.</li></ol>
</div></td>
</tr>
</tbody>
</table>

### Planned Switchover Exception<a name="section1282142716550"></a>

**Table** Error message reference for planned switchover

<a name="table19231757135517"></a>

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>Fault Description</strong></p></th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>Cause and Resolution</strong></p></th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>During a planned switchover, the primary database instance returns the following error when executing the command, indicating that the primary database instance failed to generate a consistency point:</p>
<p id="p6923175745511"><a name="p6923175745511"></a><a name="p6923175745511"></a>Result exception error : Failed to generate switchover barrier before switchover</p></td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>Cause:</strong> After the primary database instance receives the planned switchover command and before it is demoted to a disaster recovery database instance, a consistency point (switchover barrier) is first generated. This is a prerequisite for executing the switchover, ensuring that the logs of all DN shards in both the primary and standby database instances are stopped at the consistency point. If the switchover barrier fails to be generated within the primary database instance due to reasons such as internal network jitter, the planned switchover will be abandoned.</p>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a>Solution:</strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>After the disaster recovery database instance times out and exits while executing the switchover disaster recovery promotion command, the planned switchover can be re-executed on both the primary database instance and the disaster recovery database instance.</li><li>If log truncation fails repeatedly across multiple switchover attempts, further analysis of the streaming disaster recovery log files is required.</li></ul></td>
</tr>
<tr id="row09241574559"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p1892435714553"><a name="p1892435714553"></a><a name="p1892435714553"></a>Result exception error : Failed to do check switchover_barrier on all main standby dn and cn. Because check timeout: XXs</p></td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p99249578555"><a name="p99249578555"></a><a name="p99249578555"></a><strong id="b41411021113310"><a name="b41411021113310"></a><a name="b41411021113310"></a>Cause:</strong> After the disaster recovery database instance receives the planned switchover command and before it is promoted to the primary database instance, a query is first performed on the primary standby DN to check whether the switchover barrier consistency point has been received. This is a prerequisite for executing the switchover, ensuring that the logs of the DNs in both the primary and standby database instances are stopped at the consistency point. If the disaster recovery database instance fails to obtain the switchover barrier within the timeout duration due to reasons such as cross-region network anomalies, the planned switchover will be abandoned.</p>
<p id="p17275132623311"><a name="p17275132623311"></a><a name="p17275132623311"></a><strong id="b17169142717338"><a name="b17169142717338"></a><a name="b17169142717338"></a>Solution:</strong></p>
<a name="ul103067349390"></a><a name="ul103067349390"></a><ul id="ul103067349390"><li>After the primary database instance times out and exits while executing the switchover primary-to-standby demotion command, the planned switchover can be re-executed on both the primary database instance and the disaster recovery database instance.</li><li>If the disaster recovery database instance fails to obtain the switchover barrier repeatedly across multiple switchover attempts, further analysis of the streaming disaster recovery log files is required.</li></ul></td>
</tr>
</tbody>
</table>

### Disaster Recovery Cluster Database Instance Fault

**Table** Disaster Recovery Cluster database instance error message reference fault description

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>Fault Description</strong></p></th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>Cause and Resolution</strong></p></th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>The CM_AGENT on a disaster recovery cluster node is faulty. The DN instance status on this node is displayed as Unknown; some primary standby instances display Main Standby Need repair(Connecting).</p></td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>Cause:</strong> The CM_AGENT on the node has failed.
    </p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>The DN status on this node cannot be reported to CM_SERVER, and the DN instance is displayed as Unknown.</li><li>If a Main Standby instance exists on this node, a Main Standby switchover will be triggered. Since the original Main Standby instance is not faulty and maintains a normal streaming replication relationship with the primary DN of the primary database instance, and the primary DN of that shard in the primary database instance allows only one Main Standby connection, the new Main Standby cannot connect to the primary DN of the primary cluster shard, and the instance status is displayed as Main Standby Need repair(Connecting).</li></ul>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a>Solution:</strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>Wait and observe the CM_AGENT alarm "ALM_AI_AbnormalCMSProcess" on the disaster recovery cluster, and attempt to repair the failed CM_AGENT. After the fault is resolved, the connection of the new Main Standby can be restored.</li><li>If the failed CM_AGENT cannot be repaired in a short time, execute the gs_ctl stop -D DATADIR command or the kill command to manually stop the DN process on this node, and the issue can be resolved.</li></ul></td>
</tr>
</tbody>
</table>