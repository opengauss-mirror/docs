# Routine Maintenance<a name="EN-US_TOPIC_0242215052"></a>
<!-- TOC -->

- [Routine Maintenance Check Items](#routine-maintenance-check-items)
- [Checking OS Parameters](#checking-os-parameters)
- [Checking openGauss Health Status](#checking-opengauss-health-status)
- [Checking Database Performance](#checking-database-performance)
- [Checking and Deleting Logs](#checking-and-deleting-logs)
- [Checking Time Consistency](#checking-time-consistency)
- [Checking the Number of Application Connections](#checking-the-number-of-application-connections)
- [Routinely Maintaining Tables](#routinely-maintaining-tables)
- [Routinely Recreating an Index](#routinely-recreating-an-index)
- [Exporting and Viewing the WDR](#exporting-and-viewing-the-wdr)
- [Data Security Maintenance Suggestions](#data-security-maintenance-suggestions)
- [Slow SQL Diagnosis](#slow-sql-diagnosis)

<!-- /TOC -->


## Routine Maintenance Check Items

### Checking openGauss Status<a name="en-us_topic_0237088794_en-us_topic_0059778434_sec4d5eda2fa542ba9fa77a1f284812ed"></a>

openGauss provides tools to check database and instance status, ensuring that databases and instances are running properly to provide data services.

-   Check instance status.

    ```
    gs_check -U omm -i CheckClusterState
    ```

- Check parameters.

  ```
  openGauss=# SHOW parameter_name;
  ```

  In the above command, parameter_name needs to be replaced with a specific parameter name.

-   Modify parameters.

    ```
    gs_guc reload  -D /gaussdb/data/dbnode -c "paraname=value"
    ```


### Checking Lock Information<a name="en-us_topic_0237088794_en-us_topic_0059778434_s8e22677f9faf4758ad39f7d6d1dde863"></a>

The lock mechanism is an important method to ensure data consistency. Information check helps learn database transactions and database running status.

-   Query lock information in the database.

    ```
    openGauss=# SELECT * FROM pg_locks;
    ```

-   Query the status of threads waiting to acquire locks.

    ```
    openGauss=# SELECT * FROM pg_thread_wait_status WHERE wait_status = 'acquire lock';
    ```

-   Kill a system process.

    Search for a system process that is running and run the following command to end the process:

    ```
    ps ux
    kill -9 pid
    ```


### Collecting Event Statistics<a name="en-us_topic_0237088794_en-us_topic_0059778434_s6506801e729943aba510e2fe669ad8a1"></a>

Long-time running of SQL statements will occupy a lot of system resources. You can check event occurrence time and occupied memory to learn about database running status.

-   Query the time points about an event.

    Run the following command to query the thread start time, transaction start time, SQL start time, and status change time of the event:

    ```
    openGauss=# SELECT backend_start,xact_start,query_start,state_change FROM pg_stat_activity;
    ```

-   Query the number of sessions on the current server.

    ```
    openGauss=# SELECT count(*) FROM pg_stat_activity;
    ```

-   Query system-level statistics.

    Run the following command to query information about the session that uses the maximum memory:

    ```
    openGauss=# SELECT * FROM pv_session_memory_detail() ORDER BY usedsize desc limit 10;
    ```


### Checking Objects<a name="en-us_topic_0237088794_en-us_topic_0059778434_s8dae86ca711b4f24a076b0cffaa04b97"></a>

Tables, indexes, partitions, and constraints are key storage objects of a database. A database administrator needs to routinely maintain key information and these objects.

-   View table details.

    ```
    openGauss=# \d+ table_name 
    ```

-   Query table statistics.

    ```
    openGauss=# SELECT * FROM pg_statistic;
    ```

-   View index details.

    ```
    openGauss=# \d+ index_name
    ```

-   Query partitioned table information.

    ```
    openGauss=# SELECT * FROM pg_partition;
    ```

-   Collect statistics.

    Run the  **ANALYZE**  statement to collect related statistics on the database.

    Run the  **VACUUM**  statement to reclaim space and update statistics.

-   Query constraint information.

    ```
    openGauss=# SELECT * FROM pg_constraint;
    ```


### Checking an SQL Report<a name="en-us_topic_0237088794_en-us_topic_0059778434_sb5b215f4b4a6440c97da40f66359217d"></a>

Run the  **EXPLAIN**  statement to view execution plans.

### Backing Up Data<a name="en-us_topic_0237088794_en-us_topic_0059778434_s66738f470526461eb7c137fbe0058c70"></a>

Never forget to back up data. During the routine work, the backup execution and backup data validity need to be checked to ensure data security and encryption security.

-   Export a specified user.

    ```
    gs_dump dbname -p port -f out.sql -U user_name -W password
    ```

-   Export a schema.

    ```
    gs_dump dbname -p port -n schema_name -f out.sql
    ```

-   Export a table.

    ```
    gs_dump dbname -p port -t table_name -f out.sql
    ```


### Checking Basic Information<a name="en-us_topic_0237088794_en-us_topic_0059778434_s35aa1e60db1042848a9f4f06413bcb4f"></a>

Basic information includes versions, components, and patches. Periodic database information checks and records are important for database life cycle management.

-   Check version information.

    ```
    openGauss=# SELECT version();
    ```

-   Check table size and database size.

    ```
    openGauss=# SELECT pg_table_size('table_name');
    openGauss=# SELECT pg_database_size('database_name');
    ```


## Checking OS Parameters

### Check Method<a name="section6317196192210"></a>

Use the  **gs\_checkos**  tool provided by openGauss to check the OS status.

**Prerequisites**

-   The hardware and network are working properly.
-   The trust relationship of user  **root**  among the hosts is normal.
-   Only user  **root**  is authorized to run the  **gs\_checkos**  command.

**Procedure**

1. Log in to a server as user  **root**.

2.  Run the following command to check OS parameters of servers where the openGauss nodes are deployed:

    ```
    gs_checkos -i A
    ```

    The purpose of checking the OS parameters is to ensure that openGauss is preinstalled properly and can ffic²nìÃy operate after it is installed. For details about the check items, see "Server Tools > gs_checkos" in the Tool Reference.


**Examples**

Before running the  **gs\_checkos**  command, execute pre-processing scripts by running  **gs\_preinstall**  to prepare the environment. The following uses parameter  **A**  as an example:

```
gs_checkos -i A
Checking items:
    A1. [ OS version status ]                                   : Normal
    A2. [ Kernel version status ]                               : Normal
    A3. [ Unicode status ]                                      : Normal
    A4. [ Time zone status ]                                    : Normal
    A5. [ Swap memory status ]                                  : Normal
    A6. [ System control parameters status ]                    : Normal
    A7. [ File system configuration status ]                    : Normal
    A8. [ Disk configuration status ]                           : Normal
    A9. [ Pre-read block size status ]                          : Normal
    A10.[ IO scheduler status ]                                 : Normal
    A11.[ Network card configuration status ]                   : Normal
    A12.[ Time consistency status ]                             : Warning
    A13.[ Firewall service status ]                             : Normal
    A14.[ THP service status ]                                  : Normal
Total numbers:14. Abnormal numbers:0. Warning number:1.
```

The following uses parameter  **B**  as an example:

```
gs_checkos -i B
Setting items:
    B1. [ Set system control parameters ]                       : Normal
    B2. [ Set file system configuration value ]                 : Normal
    B3. [ Set pre-read block size value ]                       : Normal
    B4. [ Set IO scheduler value ]                              : Normal
    B5. [ Set network card configuration value ]                : Normal
    B6. [ Set THP service ]                                     : Normal
    B7. [ Set RemoveIPC value ]                                 : Normal
    B8. [ Set Session Process ]                                 : Normal
Total numbers:6. Abnormal numbers:0. Warning number:0.
```

### Exception Handling<a name="section1590120343247"></a>

If you use the  **gs\_checkos**  tool to check the OS and the command output shows  **Abnormal**, run the following command to view detailed error information:

```
gs_checkos -i A --detail
```

The  **Abnormal**  state cannot be ignored because the OS in this state affects cluster installation. The  **Warning**  state does not affect cluster installation and thereby can be ignored.

-   If the check result for OS version status \(**A1**\) is  **Abnormal**, replace OSs out of the mixed programming scope with those within the scope.
-   If the check result for kernel version status \(**A2**\) is  **Warning**, the platform kernel versions in the cluster are inconsistent.
-   If the check result for Unicode status \(**A3**\) is  **Abnormal**, set the same character set for all the hosts. You can add  **export LANG=***unicode*  to the  **/etc/profile**  file.

    ```
    vim /etc/profile
    ```

-   If the check result for time zone status \(**A4**\) is  **Abnormal**, set the same time zone for all the hosts. You can copy the time zone file in the  **/usr/share/zoneinfo/**  directory as the  **/etc/localtime**  file.

    ```
    cp /usr/share/zoneinfo/$primary time zone/$secondary time zone /etc/localtime
    ```

-   If the check result for swap memory status \(**A5**\) is  **Abnormal**, a possible cause is that the swap memory is larger than the physical memory. You can troubleshoot this issue by reducing the swap memory or increasing the physical memory.
-   If the check result for system control parameter status \(**A6**\) is  **Abnormal**, troubleshoot this issue in either of the following two ways:
    -   Run the following command:

        ```
        gs_checkos -i B1
        ```

    -   Modify the  **/etc/sysctl.conf**  file based on the error message and run  **sysctl -p**  to make it take effect.

        ```
        vim /etc/sysctl.conf
        ```



-   If the check result for file system configuration status \(**A7**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B2
    ```

-   If the check result for disk configuration status \(**A8**\) is  **Abnormal**, set the disk mounting format to  **rw,noatime,inode64,allocsize=16m**.

    Run the  **man mount**  command to mount the XFS parameter:

    ```
    rw,noatime,inode64,allocsize=16m
    ```

    You can also set the XFS parameter in the  **/etc/fstab**  file. For example:

    ```
    /dev/data /data xfs rw,noatime,inode64,allocsize=16m 0 0
    ```

-   If the check result for pre-read block size status \(**A9**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B3
    ```

-   If the check result for I/O scheduling status \(**A10**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B4
    ```

-   If the check result for NIC configuration status \(**A11**\) is  **Warning**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B5
    ```

-   If the check result for time consistency status \(**A12**\) is  **Abnormal**, verify that the NTP service has been installed and started and has synchronized time from the NTP clock.
-   If the check result for firewall status \(**A13**\) is  **Abnormal**, disable the firewall. Run the following commands:
    -   SUSE:

        ```
        SuSEfirewall2 stop
        ```

    -   RedHat7:

        ```
        systemctl disable firewalld
        ```

    -   RedHat6:

        ```
        service iptables stop
        ```


-   If the check result for THP service status \(**A14**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B6
    ```


## Checking openGauss Health Status

### Check Method<a name="section1481271716105"></a>

Use the  **gs\_check**  tool provided by openGauss to check the openGauss health status.

**Precautions**

-   Only user  **root**  is authorized to check new nodes added during cluster scale-out. In other cases, the check can be performed only by user  **omm**.
-   Parameter  **-i**  or  **-e**  must be set.  **-i**  specifies a single item to be checked, and  **-e**  specifies an inspection scenario where multiple items will be checked.
-   If  **-i**  is not set to a  **root**  item or no such items are contained in the check item list of the scenario specified by  **-e**, you do not need to enter the name or password of user  **root**.
-   You can run  **--skip-root-items**  to skip  **root**  items.
-   Check the consistency between the new node and existing nodes. Run the  **gs\_check**  command on an existing node and specify the  **--hosts**  parameter. The IP address of the new node needs to be written into the  **hosts**  file.

**Procedure**

Method 1:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database status:

    ```
    gs_check -i CheckClusterState
    ```

    In the command,  **-i**  indicates the check item and is case-sensitive. The format is  **-i CheckClusterState**,  **-i CheckCPU**  or  **-i CheckClusterState,CheckCPU**.

    Checkable items are listed in "Server Tools \> gs\_check \> openGauss status checks" in the  *openGauss Tool Reference*. You can create a check item as needed.


Method 2:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database health status:

    ```
    gs_check -e inspect
    ```

    In the command,  **-e**  indicates the inspection scenario and is case-sensitive. The format is  **-e inspect**  or  **-e upgrade**.

    The inspection scenarios include  **inspect**  \(routine inspection\),  **upgrade**  \(inspection before upgrade\),  **Install**  \(install inspection ),  **binary\_upgrade**  \(inspection before in-place upgrade\), **slow_node**  \(node inspection\), **longtime**  \(time-consuming inspection\) and  **health**  \(health inspection\). You can create an inspection scenario as needed.


The openGauss inspection is performed to check openGauss status during openGauss running or to check the environment and conditions before critical operations, such as upgrade or scale-out. For details about the inspection items and scenarios, see "Server Tools \> gs\_check \> openGauss status checks" in the  *openGauss Tool Reference*.

**Examples**

Check result of a single item:

```
perfadm@lfgp000700749:/opt/huawei/perfadm/tool/script> gs_check -i CheckCPU
Parsing the check items config file successfully
Distribute the context file to remote hosts successfully
Start to health check for the cluster. Total Items:1 Nodes:3

Checking...               [=========================] 1/1
Start to analysis the check result
CheckCPU....................................OK
The item run on 3 nodes.  success: 3

Analysis the check result successfully
Success. All check items run completed. Total:1  Success:1  Failed:0
For more information please refer to /opt/huawei/wisequery/script/gspylib/inspection/output/CheckReport_201902193704661604.tar.gz
```

Local execution result:

```
perfadm@lfgp000700749:/opt/huawei/perfadm/tool/script> gs_check -i CheckCPU -L

2017-12-29 17:09:29 [NAM] CheckCPU
2017-12-29 17:09:29 [STD] Check the CPU usage of the host. If the value of idle is greater than 30% and the value of iowait is less than 30%, this item passes the check. Otherwise, this item fails the check.
2017-12-29 17:09:29 [RST] OK

2017-12-29 17:09:29 [RAW]
Linux 4.4.21-69-default (lfgp000700749)  12/29/17  _x86_64_

17:09:24        CPU     %user     %nice   %system   %iowait    %steal     %idle
17:09:25        all      0.25      0.00      0.25      0.00      0.00     99.50
17:09:26        all      0.25      0.00      0.13      0.00      0.00     99.62
17:09:27        all      0.25      0.00      0.25      0.13      0.00     99.37
17:09:28        all      0.38      0.00      0.25      0.00      0.13     99.25
17:09:29        all      1.00      0.00      0.88      0.00      0.00     98.12
Average:        all      0.43      0.00      0.35      0.03      0.03     99.17
```

Check result of a scenario:

```
[perfadm@SIA1000131072 Check]$ gs_check -e inspect
Parsing the check items config file successfully
The below items require root privileges to execute:[CheckBlockdev CheckIOrequestqueue CheckIOConfigure CheckCheckMultiQueue CheckFirewall CheckSshdService CheckSshdConfig CheckCrondService CheckBootItems CheckFilehandle CheckNICModel CheckDropCache]
Please enter root privileges user[root]:root
Please enter password for user[root]:
Please enter password for user[root] on the node[10.244.57.240]:
Check root password connection successfully
Distribute the context file to remote hosts successfully
Start to health check for the cluster. Total Items:59 Nodes:2

Checking...               [                         ] 21/57
Checking...               [=========================] 59/57
Start to analysis the check result
CheckClusterState...........................OK
The item run on 2 nodes.  success: 2

CheckDBParams...............................OK
The item run on 1 nodes.  success: 1

CheckDebugSwitch............................OK
The item run on 2 nodes.  success: 2

CheckDirPermissions.........................OK
The item run on 2 nodes.  success: 2

CheckReadonlyMode...........................OK
The item run on 1 nodes.  success: 1

CheckEnvProfile.............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
GAUSSHOME        /usr1/gaussdb/app
LD_LIBRARY_PATH  /usr1/gaussdb/app/lib
PATH             /usr1/gaussdb/app/bin


CheckBlockdev...............................OK
The item run on 2 nodes.  success: 2

CheckCurConnCount...........................OK
The item run on 1 nodes.  success: 1

CheckCursorNum..............................OK
The item run on 1 nodes.  success: 1

CheckPgxcgroup..............................OK
The item run on 1 nodes.  success: 1

CheckDiskFormat.............................OK
The item run on 2 nodes.  success: 2

CheckSpaceUsage.............................OK
The item run on 2 nodes.  success: 2

CheckInodeUsage.............................OK
The item run on 2 nodes.  success: 2

CheckSwapMemory.............................OK
The item run on 2 nodes.  success: 2

CheckLogicalBlock...........................OK
The item run on 2 nodes.  success: 2

CheckIOrequestqueue.....................WARNING
The item run on 2 nodes.  warning: 2
The warning[host240,host157] value:
On device (vdb) 'IO Request' RealValue '256' ExpectedValue '32768'
On device (vda) 'IO Request' RealValue '256' ExpectedValue '32768'

CheckMaxAsyIOrequests.......................OK
The item run on 2 nodes.  success: 2

CheckIOConfigure............................OK
The item run on 2 nodes.  success: 2

CheckMTU....................................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
1500

CheckPing...................................OK
The item run on 2 nodes.  success: 2

CheckRXTX...................................NG
The item run on 2 nodes.  ng: 2
The ng[host240,host157] value:
NetWork[eth0]
RX: 256
TX: 256


CheckNetWorkDrop............................OK
The item run on 2 nodes.  success: 2

CheckMultiQueue.............................OK
The item run on 2 nodes.  success: 2

CheckEncoding...............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
LANG=en_US.UTF-8

CheckFirewall...............................OK
The item run on 2 nodes.  success: 2

CheckKernelVer..............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
3.10.0-957.el7.x86_64

CheckMaxHandle..............................OK
The item run on 2 nodes.  success: 2

CheckNTPD...................................OK
host240: NTPD service is running, 2020-06-02 17:00:28
host157: NTPD service is running, 2020-06-02 17:00:06


CheckOSVer..................................OK
host240: The current OS is centos 7.6 64bit.
host157: The current OS is centos 7.6 64bit.


CheckSysParams..........................WARNING
The item run on 2 nodes.  warning: 2
The warning[host240,host157] value:
Warning reason: variable 'net.ipv4.tcp_retries1' RealValue '3' ExpectedValue '5'.
Warning reason: variable 'net.ipv4.tcp_syn_retries' RealValue '6' ExpectedValue '5'.


CheckTHP....................................OK
The item run on 2 nodes.  success: 2

CheckTimeZone...............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
+0800

CheckCPU....................................OK
The item run on 2 nodes.  success: 2

CheckSshdService............................OK
The item run on 2 nodes.  success: 2

CheckSshdConfig.........................WARNING
The item run on 2 nodes.  warning: 2
The warning[host240,host157] value:

Warning reason: UseDNS parameter is not set; expected: no

CheckCrondService...........................OK
The item run on 2 nodes.  success: 2

CheckStack..................................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
8192

CheckSysPortRange...........................OK
The item run on 2 nodes.  success: 2

CheckMemInfo................................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
totalMem: 31.260929107666016G

CheckHyperThread............................OK
The item run on 2 nodes.  success: 2

CheckTableSpace.............................OK
The item run on 1 nodes.  success: 1

CheckSysadminUser...........................OK
The item run on 1 nodes.  success: 1

CheckGUCConsistent..........................OK
All DN instance guc value is consistent.

CheckMaxProcMemory..........................OK
The item run on 1 nodes.  success: 1

CheckBootItems..............................OK
The item run on 2 nodes.  success: 2

CheckHashIndex..............................OK
The item run on 1 nodes.  success: 1

CheckPgxcRedistb............................OK
The item run on 1 nodes.  success: 1

CheckNodeGroupName..........................OK
The item run on 1 nodes.  success: 1

CheckTDDate.................................OK
The item run on 1 nodes.  success: 1

CheckDilateSysTab...........................OK
The item run on 1 nodes.  success: 1

CheckKeyProAdj..............................OK
The item run on 2 nodes.  success: 2

CheckProStartTime.......................WARNING
host157:
STARTED COMMAND
Tue Jun  2 16:57:18 2020 /usr1/dmuser/dmserver/metricdb1/server/bin/gaussdb --single_node -D /usr1/dmuser/dmb1/data -p 22204
Mon Jun  1 16:15:15 2020 /usr1/gaussdb/app/bin/gaussdb -D /usr1/gaussdb/data/dn1 -M standby


CheckFilehandle.............................OK
The item run on 2 nodes.  success: 2

CheckRouting................................OK
The item run on 2 nodes.  success: 2

CheckNICModel...............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
version: 1.0.0
model: Red Hat, Inc. Virtio network device


CheckDropCache..........................WARNING
The item run on 2 nodes.  warning: 2
The warning[host240,host157] value:
No DropCache process is running

CheckMpprcFile..............................NG
The item run on 2 nodes.  ng: 2
The ng[host240,host157] value:
There is no mpprc file

Analysis the check result successfully
Failed. All check items run completed. Total:57   Success:50   Warning:5   NG:2
For more information please refer to /usr1/gaussdb/tool/script/gspylib/inspection/output/CheckReport_inspect611.tar.gz

```

### Exception Handling<a name="section1142619577126"></a>

Troubleshoot exceptions detected in the inspection by following instructions in this section.

**Table  1**  Check of openGauss running status

<a name="en-us_topic_0237088800_t839e243ba9874e4d89255e791cd15811"></a>

<table><thead align="left"><tr id="en-us_topic_0237088800_rb4ac09be678a4c478332b72fc54c86da"><th class="cellrowborder" valign="top" width="20.59%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"><a name="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"></a><a name="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="22.21%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"><a name="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"></a><a name="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="57.199999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"><a name="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"></a><a name="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088800_r8b77c6ca6c9d48cebfe2154085166c41"><td class="cellrowborder" rowspan="2" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"><a name="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"></a><a name="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"></a>CheckClusterState (Checks the <span id="en-us_topic_0237088800_text196493016198"><a name="en-us_topic_0237088800_text196493016198"></a><a name="en-us_topic_0237088800_text196493016198"></a>openGauss</span> status.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"><a name="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"></a><a name="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"></a><span id="en-us_topic_0237088800_text1621114337197"><a name="en-us_topic_0237088800_text1621114337197"></a><a name="en-us_topic_0237088800_text1621114337197"></a>openGauss</span> or openGauss instances are not started.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"><a name="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"></a><a name="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"></a>Run the following command to start <span id="text3363234105110"><a name="text3363234105110"></a><a name="text3363234105110"></a>openGauss</span> and instances:</p>
<pre class="screen" id="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"><a name="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"></a><a name="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"></a><strong id="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"><a name="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"></a><a name="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"></a>gs_om -t start</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_r995473b742fe4e7298afcde8548fab89"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"><a name="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"></a><a name="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"></a>The status of <span id="en-us_topic_0237088800_text11171636201919"><a name="en-us_topic_0237088800_text11171636201919"></a><a name="en-us_topic_0237088800_text11171636201919"></a>openGauss</span> or <span id="text12341109185714"><a name="text12341109185714"></a><a name="text12341109185714"></a>openGauss</span> instances is abnormal.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"><a name="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"></a><a name="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"></a>Check the status of hosts and instances. Troubleshoot this issue based on the status information.</p>
<pre class="screen" id="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"><a name="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"></a><a name="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"></a><strong id="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"><a name="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"></a><a name="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"></a>gs_check -i CheckClusterState</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_r86a2ced234c842c7be39c3323a7fb3a6"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p83146282381"><a name="en-us_topic_0237088800_p83146282381"></a><a name="en-us_topic_0237088800_p83146282381"></a>CheckDBParams (Checks database parameters.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1631619281380"><a name="en-us_topic_0237088800_p1631619281380"></a><a name="en-us_topic_0237088800_p1631619281380"></a>Database parameters have incorrect values.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1731892810380"><a name="en-us_topic_0237088800_p1731892810380"></a><a name="en-us_topic_0237088800_p1731892810380"></a>Use the <strong id="b14369143419511"><a name="b14369143419511"></a><a name="b14369143419511"></a>gs_guc</strong> tool to set the parameters to specified values.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row195311634103914"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p14912850123913"><a name="en-us_topic_0237088800_p14912850123913"></a><a name="en-us_topic_0237088800_p14912850123913"></a>CheckDebugSwitch (Checks debug logs.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1591345053914"><a name="en-us_topic_0237088800_p1591345053914"></a><a name="en-us_topic_0237088800_p1591345053914"></a>The log level is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16915155023918"><a name="en-us_topic_0237088800_p16915155023918"></a><a name="en-us_topic_0237088800_p16915155023918"></a>Use the <strong id="b18371153411511"><a name="b18371153411511"></a><a name="b18371153411511"></a>gs_guc</strong> tool to set <strong id="b9371163475111"><a name="b9371163475111"></a><a name="b9371163475111"></a>log_min_messages</strong> to specified content.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row6896171624012"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p788611257409"><a name="en-us_topic_0237088800_p788611257409"></a><a name="en-us_topic_0237088800_p788611257409"></a>CheckDirPermissions (Checks directory permissions.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p108891525124013"><a name="en-us_topic_0237088800_p108891525124013"></a><a name="en-us_topic_0237088800_p108891525124013"></a>The permission for a directory is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p489262512403"><a name="en-us_topic_0237088800_p489262512403"></a><a name="en-us_topic_0237088800_p489262512403"></a>Change the directory permission to a specified value (<strong id="b193731534145113"><a name="b193731534145113"></a><a name="b193731534145113"></a>750</strong> or <strong id="b10373183415118"><a name="b10373183415118"></a><a name="b10373183415118"></a>700</strong>).</p>
<pre class="screen" id="en-us_topic_0237088800_screen15893132512404"><a name="en-us_topic_0237088800_screen15893132512404"></a><a name="en-us_topic_0237088800_screen15893132512404"></a><strong id="en-us_topic_0237088800_b289782504019"><a name="en-us_topic_0237088800_b289782504019"></a><a name="en-us_topic_0237088800_b289782504019"></a>chmod 750 </strong><em id="en-us_topic_0237088800_i12898162514408"><a name="en-us_topic_0237088800_i12898162514408"></a><a name="en-us_topic_0237088800_i12898162514408"></a>DIR</em></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row119998504408"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p79996504406"><a name="en-us_topic_0237088800_p79996504406"></a><a name="en-us_topic_0237088800_p79996504406"></a>CheckReadonlyMode (Checks the read-only mode.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1499919508407"><a name="en-us_topic_0237088800_p1499919508407"></a><a name="en-us_topic_0237088800_p1499919508407"></a>The read-only mode is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p64041033184214"><a name="en-us_topic_0237088800_p64041033184214"></a><a name="en-us_topic_0237088800_p64041033184214"></a>Verify that the usage of the disk where <span id="en-us_topic_0237088800_text1114721213115"><a name="en-us_topic_0237088800_text1114721213115"></a><a name="en-us_topic_0237088800_text1114721213115"></a>database nodes</span> are located does not exceed the threshold (85% by default) and no other O&amp;M operations are performed.</p>
<pre class="screen" id="en-us_topic_0237088800_screen621121517448"><a name="en-us_topic_0237088800_screen621121517448"></a><a name="en-us_topic_0237088800_screen621121517448"></a><strong id="en-us_topic_0237088800_b84701622114417"><a name="en-us_topic_0237088800_b84701622114417"></a><a name="en-us_topic_0237088800_b84701622114417"></a>gs_check -i CheckDataDiskUsage</strong>
<strong id="en-us_topic_0237088800_b18729929104417"><a name="en-us_topic_0237088800_b18729929104417"></a><a name="en-us_topic_0237088800_b18729929104417"></a>ps ux</strong></pre>
<p id="en-us_topic_0237088800_p09991650174014"><a name="en-us_topic_0237088800_p09991650174014"></a><a name="en-us_topic_0237088800_p09991650174014"></a>Use the <strong id="b17713115312"><a name="b17713115312"></a><a name="b17713115312"></a>gs_guc</strong> tool to disable the read-only mode of <span id="en-us_topic_0237088800_text781373721912"><a name="en-us_topic_0237088800_text781373721912"></a><a name="en-us_topic_0237088800_text781373721912"></a>openGauss</span>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen6249173144516"><a name="en-us_topic_0237088800_screen6249173144516"></a><a name="en-us_topic_0237088800_screen6249173144516"></a><strong id="en-us_topic_0237088800_b153715124518"><a name="en-us_topic_0237088800_b153715124518"></a><a name="en-us_topic_0237088800_b153715124518"></a>gs_guc reload -N all -I all -c 'default_transaction_read_only = off' </strong>
</td>
</tr>
<tr id="en-us_topic_0237088800_row599175395319"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p510012536530"><a name="en-us_topic_0237088800_p510012536530"></a><a name="en-us_topic_0237088800_p510012536530"></a>CheckEnvProfile (Checks environment variables.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p110005325316"><a name="en-us_topic_0237088800_p110005325316"></a><a name="en-us_topic_0237088800_p110005325316"></a>Environment variables are inconsistent.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p610055310537"><a name="en-us_topic_0237088800_p610055310537"></a><a name="en-us_topic_0237088800_p610055310537"></a>Update the environment variable information.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row163163045510"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1763115309555"><a name="en-us_topic_0237088800_p1763115309555"></a><a name="en-us_topic_0237088800_p1763115309555"></a>CheckBlockdev (Checks pre-read blocks.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p6631103017557"><a name="en-us_topic_0237088800_p6631103017557"></a><a name="en-us_topic_0237088800_p6631103017557"></a>The size of a pre-read block is not 16384 KB.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p19256111175917"><a name="en-us_topic_0237088800_p19256111175917"></a><a name="en-us_topic_0237088800_p19256111175917"></a>Use the <strong id="b1537953455111"><a name="b1537953455111"></a><a name="b1537953455111"></a>gs_checkos</strong> tool to set the size of the pre-read block to 16384 KB and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen24791715195913"><a name="en-us_topic_0237088800_screen24791715195913"></a><a name="en-us_topic_0237088800_screen24791715195913"></a><strong id="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"><a name="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"></a><a name="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"></a>gs_checkos -i B3</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row5347173192514"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p153487314252"><a name="en-us_topic_0237088800_p153487314252"></a><a name="en-us_topic_0237088800_p153487314252"></a>CheckCursorNum (Checks the number of cursors.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p193481537259"><a name="en-us_topic_0237088800_p193481537259"></a><a name="en-us_topic_0237088800_p193481537259"></a>The number of cursors fails to be checked.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p3348731258"><a name="en-us_topic_0237088800_p3348731258"></a><a name="en-us_topic_0237088800_p3348731258"></a>Check whether the database is properly connected and whether the <span id="en-us_topic_0237088800_text168091838121910"><a name="en-us_topic_0237088800_text168091838121910"></a><a name="en-us_topic_0237088800_text168091838121910"></a>openGauss</span> status is normal.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row75161117123413"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p10517617103418"><a name="en-us_topic_0237088800_p10517617103418"></a><a name="en-us_topic_0237088800_p10517617103418"></a>CheckPgxcgroup (Checks the data redistribution status.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1551710176342"><a name="en-us_topic_0237088800_p1551710176342"></a><a name="en-us_topic_0237088800_p1551710176342"></a>There are <strong id="b17382163417512"><a name="b17382163417512"></a><a name="b17382163417512"></a>pgxc_group</strong> tables that have not been redistributed.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1451771773411"><a name="en-us_topic_0237088800_p1451771773411"></a><a name="en-us_topic_0237088800_p1451771773411"></a>Proceed with the redistribution.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1876573389"><a name="en-us_topic_0237088800_screen1876573389"></a><a name="en-us_topic_0237088800_screen1876573389"></a><strong id="b6114124181518"><a name="b6114124181518"></a><a name="b6114124181518"></a>gs_expand</strong>, <strong id="b8114184191511"><a name="b8114184191511"></a><a name="b8114184191511"></a>gs_dropnode</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row6380929143913"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p83803290393"><a name="en-us_topic_0237088800_p83803290393"></a><a name="en-us_topic_0237088800_p83803290393"></a>CheckDiskFormat (Checks disk configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p193801629163912"><a name="en-us_topic_0237088800_p193801629163912"></a><a name="en-us_topic_0237088800_p193801629163912"></a>Disk configurations are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p103802298398"><a name="en-us_topic_0237088800_p103802298398"></a><a name="en-us_topic_0237088800_p103802298398"></a>Configure disk specifications to be consistent between nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row7657194664218"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p965714465429"><a name="en-us_topic_0237088800_p965714465429"></a><a name="en-us_topic_0237088800_p965714465429"></a>CheckSpaceUsage (Checks the disk space usage.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p265724624220"><a name="en-us_topic_0237088800_p265724624220"></a><a name="en-us_topic_0237088800_p265724624220"></a>Disk space is insufficient.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16657204654216"><a name="en-us_topic_0237088800_p16657204654216"></a><a name="en-us_topic_0237088800_p16657204654216"></a>Clear or expand the disk for the directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row171664210433"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p4717124284316"><a name="en-us_topic_0237088800_p4717124284316"></a><a name="en-us_topic_0237088800_p4717124284316"></a>CheckInodeUsage (Checks the disk index usage.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p167170425439"><a name="en-us_topic_0237088800_p167170425439"></a><a name="en-us_topic_0237088800_p167170425439"></a>Disk indexes are insufficient.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p87171742144316"><a name="en-us_topic_0237088800_p87171742144316"></a><a name="en-us_topic_0237088800_p87171742144316"></a>Clear or expand the disk for the directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row15876182315493"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1187710234491"><a name="en-us_topic_0237088800_p1187710234491"></a><a name="en-us_topic_0237088800_p1187710234491"></a>CheckSwapMemory (Checks the swap memory.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p178771423144911"><a name="en-us_topic_0237088800_p178771423144911"></a><a name="en-us_topic_0237088800_p178771423144911"></a>The swap memory is greater than the physical memory.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p787872315497"><a name="en-us_topic_0237088800_p787872315497"></a><a name="en-us_topic_0237088800_p787872315497"></a>Reduce or disable the swap memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row196971126135019"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p196971526205014"><a name="en-us_topic_0237088800_p196971526205014"></a><a name="en-us_topic_0237088800_p196971526205014"></a>CheckLogicalBlock (Checks logical blocks.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1697626125016"><a name="en-us_topic_0237088800_p1697626125016"></a><a name="en-us_topic_0237088800_p1697626125016"></a>The size of a logical block is not 512 KB.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p769712685010"><a name="en-us_topic_0237088800_p769712685010"></a><a name="en-us_topic_0237088800_p769712685010"></a>Use the <strong id="b10390103435111"><a name="b10390103435111"></a><a name="b10390103435111"></a>gs_checkos</strong> tool to set the size of the logical block to 512 KB and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1815815388527"><a name="en-us_topic_0237088800_screen1815815388527"></a><a name="en-us_topic_0237088800_screen1815815388527"></a><strong id="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"><a name="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"></a><a name="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1666211011542"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p166371019544"><a name="en-us_topic_0237088800_p166371019544"></a><a name="en-us_topic_0237088800_p166371019544"></a>CheckIOrequestqueue (Checks I/O requests.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19663310115419"><a name="en-us_topic_0237088800_p19663310115419"></a><a name="en-us_topic_0237088800_p19663310115419"></a>The requested I/O is not <strong id="b8391234145112"><a name="b8391234145112"></a><a name="b8391234145112"></a>32768</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1466351016543"><a name="en-us_topic_0237088800_p1466351016543"></a><a name="en-us_topic_0237088800_p1466351016543"></a>Use the <strong id="b73921434165113"><a name="b73921434165113"></a><a name="b73921434165113"></a>gs_checkos</strong> tool to set the requested I/O to <strong id="b6392103475110"><a name="b6392103475110"></a><a name="b6392103475110"></a>32768</strong> and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1411998114112"><a name="en-us_topic_0237088800_screen1411998114112"></a><a name="en-us_topic_0237088800_screen1411998114112"></a><strong id="en-us_topic_0237088800_b16986193163018"><a name="en-us_topic_0237088800_b16986193163018"></a><a name="en-us_topic_0237088800_b16986193163018"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row53211254551"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p6321192515557"><a name="en-us_topic_0237088800_p6321192515557"></a><a name="en-us_topic_0237088800_p6321192515557"></a>CheckCurConnCount (Checks the number of current connections.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p10157112913249"><a name="en-us_topic_0237088800_p10157112913249"></a><a name="en-us_topic_0237088800_p10157112913249"></a>The number of current connections exceeds 90% of the allowed maximum number of connections.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p7321725125516"><a name="en-us_topic_0237088800_p7321725125516"></a><a name="en-us_topic_0237088800_p7321725125516"></a>Break idle <span id="en-us_topic_0237088800_text17990203920177"><a name="en-us_topic_0237088800_text17990203920177"></a><a name="en-us_topic_0237088800_text17990203920177"></a>primary database node</span> connections.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row189075218413"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p889115284112"><a name="en-us_topic_0237088800_p889115284112"></a><a name="en-us_topic_0237088800_p889115284112"></a>CheckMaxAsyIOrequests (Checks the maximum number of asynchronous requests.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p4891195294115"><a name="en-us_topic_0237088800_p4891195294115"></a><a name="en-us_topic_0237088800_p4891195294115"></a>The maximum number of asynchronous requests is less than 104857600 or (Number of database instances on the current node x 1048576).</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p989115526414"><a name="en-us_topic_0237088800_p989115526414"></a><a name="en-us_topic_0237088800_p989115526414"></a>Use the <strong id="b13217120182310"><a name="b13217120182310"></a><a name="b13217120182310"></a>gs_checkos</strong> tool to set the maximum number of asynchronous requests to the larger one between 104857600 and (Number of database instances on the current node x 1048576).</p>
<pre class="screen" id="en-us_topic_0237088800_screen16746775301"><a name="en-us_topic_0237088800_screen16746775301"></a><a name="en-us_topic_0237088800_screen16746775301"></a><strong id="en-us_topic_0237088800_b47501716309"><a name="en-us_topic_0237088800_b47501716309"></a><a name="en-us_topic_0237088800_b47501716309"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row56992315212"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1270033625"><a name="en-us_topic_0237088800_p1270033625"></a><a name="en-us_topic_0237088800_p1270033625"></a>CheckMTU (Checks MTU values.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1070016317217"><a name="en-us_topic_0237088800_p1070016317217"></a><a name="en-us_topic_0237088800_p1070016317217"></a>MTU values are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p177001310218"><a name="en-us_topic_0237088800_p177001310218"></a><a name="en-us_topic_0237088800_p177001310218"></a>Set the MTU value on each node to <strong id="b1239614344516"><a name="b1239614344516"></a><a name="b1239614344516"></a>1500</strong> or <strong id="b1639612341515"><a name="b1639612341515"></a><a name="b1639612341515"></a>8192</strong>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1517605014217"><a name="en-us_topic_0237088800_screen1517605014217"></a><a name="en-us_topic_0237088800_screen1517605014217"></a>ifconfig eth* MTU 1500</pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11920171815580"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p092171819586"><a name="en-us_topic_0237088800_p092171819586"></a><a name="en-us_topic_0237088800_p092171819586"></a>CheckIOConfigure (Checks I/O configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p20921181811582"><a name="en-us_topic_0237088800_p20921181811582"></a><a name="en-us_topic_0237088800_p20921181811582"></a>The I/O mode is not <strong id="b183981234125118"><a name="b183981234125118"></a><a name="b183981234125118"></a>deadline</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p792131875810"><a name="en-us_topic_0237088800_p792131875810"></a><a name="en-us_topic_0237088800_p792131875810"></a>Use the <strong id="b163992341515"><a name="b163992341515"></a><a name="b163992341515"></a>gs_checkos</strong> tool to set the I/O mode to <strong id="b63994341512"><a name="b63994341512"></a><a name="b63994341512"></a>deadline</strong> and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen12875105016019"><a name="en-us_topic_0237088800_screen12875105016019"></a><a name="en-us_topic_0237088800_screen12875105016019"></a><strong id="en-us_topic_0237088800_b1367013423017"><a name="en-us_topic_0237088800_b1367013423017"></a><a name="en-us_topic_0237088800_b1367013423017"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row8957102514412"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p895792513410"><a name="en-us_topic_0237088800_p895792513410"></a><a name="en-us_topic_0237088800_p895792513410"></a>CheckRXTX (Checks the RX/TX value.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17957192511413"><a name="en-us_topic_0237088800_p17957192511413"></a><a name="en-us_topic_0237088800_p17957192511413"></a>The NIC RX/TX value is not <strong id="b74001834115112"><a name="b74001834115112"></a><a name="b74001834115112"></a>4096</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p109571825345"><a name="en-us_topic_0237088800_p109571825345"></a><a name="en-us_topic_0237088800_p109571825345"></a>Use the <strong id="b17691112415278"><a name="b17691112415278"></a><a name="b17691112415278"></a>checkos</strong> tool to set the NIC RX/TX value to <strong id="b16867227122712"><a name="b16867227122712"></a><a name="b16867227122712"></a>4096</strong> for <span id="en-us_topic_0237088800_text16653113991914"><a name="en-us_topic_0237088800_text16653113991914"></a><a name="en-us_topic_0237088800_text16653113991914"></a>openGauss</span>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen91015216301"><a name="en-us_topic_0237088800_screen91015216301"></a><a name="en-us_topic_0237088800_screen91015216301"></a><strong id="en-us_topic_0237088800_b111316521305"><a name="en-us_topic_0237088800_b111316521305"></a><a name="en-us_topic_0237088800_b111316521305"></a>gs_checkos -i B5</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row3308116315"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p030101117314"><a name="en-us_topic_0237088800_p030101117314"></a><a name="en-us_topic_0237088800_p030101117314"></a>CheckPing (Checks whether the network connection is normal.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19301711537"><a name="en-us_topic_0237088800_p19301711537"></a><a name="en-us_topic_0237088800_p19301711537"></a>There are <span id="en-us_topic_0237088800_text1047614051913"><a name="en-us_topic_0237088800_text1047614051913"></a><a name="en-us_topic_0237088800_text1047614051913"></a>openGauss</span> IP addresses that cannot be pinged.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p183011115316"><a name="en-us_topic_0237088800_p183011115316"></a><a name="en-us_topic_0237088800_p183011115316"></a>Check the network settings, network status, and firewall status between the abnormal IP addresses.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row5332175511518"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p123325551256"><a name="en-us_topic_0237088800_p123325551256"></a><a name="en-us_topic_0237088800_p123325551256"></a>CheckNetWorkDrop (Checks the network packet loss rate.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1433213554512"><a name="en-us_topic_0237088800_p1433213554512"></a><a name="en-us_topic_0237088800_p1433213554512"></a>The network packet loss rate is greater than 1%.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p73324555514"><a name="en-us_topic_0237088800_p73324555514"></a><a name="en-us_topic_0237088800_p73324555514"></a>Check the network load and status between the corresponding IP addresses.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row72441472713"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p16244071074"><a name="en-us_topic_0237088800_p16244071074"></a><a name="en-us_topic_0237088800_p16244071074"></a>CheckMultiQueue (Checks the NIC multi-queue function.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1424418712712"><a name="en-us_topic_0237088800_p1424418712712"></a><a name="en-us_topic_0237088800_p1424418712712"></a>Multiqueue is not enabled for the NIC, and NIC interruptions are not bound to different CPU cores.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p192441273720"><a name="en-us_topic_0237088800_p192441273720"></a><a name="en-us_topic_0237088800_p192441273720"></a>Enable multiqueue for the NIC, and bind NIC interruptions to different CPU cores.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row103121887813"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p103129812811"><a name="en-us_topic_0237088800_p103129812811"></a><a name="en-us_topic_0237088800_p103129812811"></a>CheckEncoding (Checks the encoding format.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1312082085"><a name="en-us_topic_0237088800_p1312082085"></a><a name="en-us_topic_0237088800_p1312082085"></a>Encoding formats are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p53121581783"><a name="en-us_topic_0237088800_p53121581783"></a><a name="en-us_topic_0237088800_p53121581783"></a>Write the same encoding format into <strong id="b2406143418516"><a name="b2406143418516"></a><a name="b2406143418516"></a>/etc/profile</strong> for each node.</p>
<pre class="screen" id="en-us_topic_0237088800_screen139872252911"><a name="en-us_topic_0237088800_screen139872252911"></a><a name="en-us_topic_0237088800_screen139872252911"></a><strong id="en-us_topic_0237088800_b69061554381"><a name="en-us_topic_0237088800_b69061554381"></a><a name="en-us_topic_0237088800_b69061554381"></a>echo "export LANG=XXX" &gt;&gt; /etc/profile</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_rca91c9b23806475a890f872d47daf116"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p2027173293713"><a name="en-us_topic_0237088800_p2027173293713"></a><a name="en-us_topic_0237088800_p2027173293713"></a>CheckActQryCount (Checks the archiving mode.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p327143243716"><a name="en-us_topic_0237088800_p327143243716"></a><a name="en-us_topic_0237088800_p327143243716"></a>The archiving mode is enabled, and the archiving directory is not under the <span id="en-us_topic_0237088800_text36791945111715"><a name="en-us_topic_0237088800_text36791945111715"></a><a name="en-us_topic_0237088800_text36791945111715"></a>primary database node</span> directory.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p926183214377"><a name="en-us_topic_0237088800_p926183214377"></a><a name="en-us_topic_0237088800_p926183214377"></a>Disable archiving mode or set the archiving directory to be under the <span id="en-us_topic_0237088800_text195291146121713"><a name="en-us_topic_0237088800_text195291146121713"></a><a name="en-us_topic_0237088800_text195291146121713"></a>primary database node</span> directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row143013810102"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p43016891011"><a name="en-us_topic_0237088800_p43016891011"></a><a name="en-us_topic_0237088800_p43016891011"></a>CheckFirewall (Checks the firewall.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17304812106"><a name="en-us_topic_0237088800_p17304812106"></a><a name="en-us_topic_0237088800_p17304812106"></a>The firewall is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p0309814102"><a name="en-us_topic_0237088800_p0309814102"></a><a name="en-us_topic_0237088800_p0309814102"></a>Disable the firewall.</p>
<pre class="screen" id="en-us_topic_0237088800_screen168681239101015"><a name="en-us_topic_0237088800_screen168681239101015"></a><a name="en-us_topic_0237088800_screen168681239101015"></a><strong id="en-us_topic_0237088800_b13971145173814"><a name="en-us_topic_0237088800_b13971145173814"></a><a name="en-us_topic_0237088800_b13971145173814"></a>redHat(CentOS)7.x: systemctl disable firewalld.service</strong>
<strong id="en-us_topic_0237088800_b797285113388"><a name="en-us_topic_0237088800_b797285113388"></a><a name="en-us_topic_0237088800_b797285113388"></a>redHat(CentOS)6.x: service iptables down</strong>
<strong id="en-us_topic_0237088800_b1597355114383"><a name="en-us_topic_0237088800_b1597355114383"></a><a name="en-us_topic_0237088800_b1597355114383"></a>SuSE: SuSEfirewall2 down</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row139635453144"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1896424513148"><a name="en-us_topic_0237088800_p1896424513148"></a><a name="en-us_topic_0237088800_p1896424513148"></a>CheckKernelVer (Checks kernel versions.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17965445171411"><a name="en-us_topic_0237088800_p17965445171411"></a><a name="en-us_topic_0237088800_p17965445171411"></a>Kernel versions are inconsistent between nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row91332514163"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p171362517162"><a name="en-us_topic_0237088800_p171362517162"></a><a name="en-us_topic_0237088800_p171362517162"></a>CheckMaxHandle (Checks the maximum number of file handles.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1513122561610"><a name="en-us_topic_0237088800_p1513122561610"></a><a name="en-us_topic_0237088800_p1513122561610"></a>The maximum number of handles is less than 1000000.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p213202561616"><a name="en-us_topic_0237088800_p213202561616"></a><a name="en-us_topic_0237088800_p213202561616"></a>Set the soft and hard limits in the <strong id="b641413342514"><a name="b641413342514"></a><a name="b641413342514"></a>91-nofile.conf</strong> or <strong id="b9414143420514"><a name="b9414143420514"></a><a name="b9414143420514"></a>90-nofile.conf</strong> file to <strong id="b7414434115114"><a name="b7414434115114"></a><a name="b7414434115114"></a>1000000</strong>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1968194271716"><a name="en-us_topic_0237088800_screen1968194271716"></a><a name="en-us_topic_0237088800_screen1968194271716"></a><strong id="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"><a name="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"></a><a name="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"></a>gs_checkos -i B2</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row139205692318"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1910456112311"><a name="en-us_topic_0237088800_p1910456112311"></a><a name="en-us_topic_0237088800_p1910456112311"></a>CheckNTPD (Checks the time synchronization service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p8101756122319"><a name="en-us_topic_0237088800_p8101756122319"></a><a name="en-us_topic_0237088800_p8101756122319"></a>The NTPD service is disabled or the time difference is greater than 1 minute.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p17101856122313"><a name="en-us_topic_0237088800_p17101856122313"></a><a name="en-us_topic_0237088800_p17101856122313"></a>Enable the NTPD service and set the time to be consistent.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11180112703514"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p31811427183514"><a name="en-us_topic_0237088800_p31811427183514"></a><a name="en-us_topic_0237088800_p31811427183514"></a>CheckSysParams (Checks OS parameters.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p618112271359"><a name="en-us_topic_0237088800_p618112271359"></a><a name="en-us_topic_0237088800_p618112271359"></a>OS parameter settings do not meet requirements.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p13181827103517"><a name="en-us_topic_0237088800_p13181827103517"></a><a name="en-us_topic_0237088800_p13181827103517"></a>Use the <strong id="b14419123418510"><a name="b14419123418510"></a><a name="b14419123418510"></a>gs_checkos</strong> tool or manually set parameters to values meeting requirements.</p>
<pre class="screen" id="en-us_topic_0237088800_screen6658241153720"><a name="en-us_topic_0237088800_screen6658241153720"></a><a name="en-us_topic_0237088800_screen6658241153720"></a><strong id="en-us_topic_0237088800_b1266274123710"><a name="en-us_topic_0237088800_b1266274123710"></a><a name="en-us_topic_0237088800_b1266274123710"></a>gs_checkos -i B1</strong>
<strong id="en-us_topic_0237088800_b18837153613816"><a name="en-us_topic_0237088800_b18837153613816"></a><a name="en-us_topic_0237088800_b18837153613816"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row489662843819"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1589682816380"><a name="en-us_topic_0237088800_p1589682816380"></a><a name="en-us_topic_0237088800_p1589682816380"></a>CheckTHP (Checks the THP service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p7896728193820"><a name="en-us_topic_0237088800_p7896728193820"></a><a name="en-us_topic_0237088800_p7896728193820"></a>The THP service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1889712883811"><a name="en-us_topic_0237088800_p1889712883811"></a><a name="en-us_topic_0237088800_p1889712883811"></a>Use the <strong id="b44211334185117"><a name="b44211334185117"></a><a name="b44211334185117"></a>gs_checkos</strong> to enable the THP service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen0120925104013"><a name="en-us_topic_0237088800_screen0120925104013"></a><a name="en-us_topic_0237088800_screen0120925104013"></a><strong id="en-us_topic_0237088800_b15124825194015"><a name="en-us_topic_0237088800_b15124825194015"></a><a name="en-us_topic_0237088800_b15124825194015"></a>gs_checkos -i B6</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row27496316404"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p9749173119408"><a name="en-us_topic_0237088800_p9749173119408"></a><a name="en-us_topic_0237088800_p9749173119408"></a>CheckTimeZone (Checks time zones.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p167491731114015"><a name="en-us_topic_0237088800_p167491731114015"></a><a name="en-us_topic_0237088800_p167491731114015"></a>Time zones are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p157491631164019"><a name="en-us_topic_0237088800_p157491631164019"></a><a name="en-us_topic_0237088800_p157491631164019"></a>Set time zones to be consistent between nodes.</p>
<pre class="screen" id="en-us_topic_0237088800_screen916593919411"><a name="en-us_topic_0237088800_screen916593919411"></a><a name="en-us_topic_0237088800_screen916593919411"></a><strong id="b1942363419516"><a name="b1942363419516"></a><a name="b1942363419516"></a>cp /usr/share/zoneinfo/</strong><em id="i18423133413517"><a name="i18423133413517"></a><a name="i18423133413517"></a>$primary time zone/$secondary time zone</em><strong id="b9423113418518"><a name="b9423113418518"></a><a name="b9423113418518"></a> /etc/localtime</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row27701488444"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p877113804418"><a name="en-us_topic_0237088800_p877113804418"></a><a name="en-us_topic_0237088800_p877113804418"></a>CheckCPU (Checks the CPU.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1577188114417"><a name="en-us_topic_0237088800_p1577188114417"></a><a name="en-us_topic_0237088800_p1577188114417"></a>CPU usage is high or I/O waiting time is too long.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p177712086441"><a name="en-us_topic_0237088800_p177712086441"></a><a name="en-us_topic_0237088800_p177712086441"></a>Upgrade CPUs or improve disk performance.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row84714914619"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1748194910469"><a name="en-us_topic_0237088800_p1748194910469"></a><a name="en-us_topic_0237088800_p1748194910469"></a>CheckSshdService (Checks the SSHD service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1048649184612"><a name="en-us_topic_0237088800_p1048649184612"></a><a name="en-us_topic_0237088800_p1048649184612"></a>The SSHD service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p24814914615"><a name="en-us_topic_0237088800_p24814914615"></a><a name="en-us_topic_0237088800_p24814914615"></a>Enable the SSHD service and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen10798193611615"><a name="en-us_topic_0237088800_screen10798193611615"></a><a name="en-us_topic_0237088800_screen10798193611615"></a><strong id="en-us_topic_0237088800_b3683174182517"><a name="en-us_topic_0237088800_b3683174182517"></a><a name="en-us_topic_0237088800_b3683174182517"></a>service sshd start</strong>
<strong id="en-us_topic_0237088800_b768434192519"><a name="en-us_topic_0237088800_b768434192519"></a><a name="en-us_topic_0237088800_b768434192519"></a>echo "server sshd start" &gt;&gt; initFile</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row761012184719"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p8611131811717"><a name="en-us_topic_0237088800_p8611131811717"></a><a name="en-us_topic_0237088800_p8611131811717"></a>CheckSshdConfig (Checks SSHD configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p261131814717"><a name="en-us_topic_0237088800_p261131814717"></a><a name="en-us_topic_0237088800_p261131814717"></a>The SSHD service is incorrectly configured.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p66116181873"><a name="en-us_topic_0237088800_p66116181873"></a><a name="en-us_topic_0237088800_p66116181873"></a>Reconfigure the SSHD service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen07161551184019"><a name="en-us_topic_0237088800_screen07161551184019"></a><a name="en-us_topic_0237088800_screen07161551184019"></a>PasswordAuthentication=no;
MaxStartups=1000;
UseDNS=yes;
ClientAliveInterval=10800/ClientAliveInterval=0</pre>
<p id="en-us_topic_0237088800_p109911155407"><a name="en-us_topic_0237088800_p109911155407"></a><a name="en-us_topic_0237088800_p109911155407"></a>Restart the service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen5262166812"><a name="en-us_topic_0237088800_screen5262166812"></a><a name="en-us_topic_0237088800_screen5262166812"></a><strong id="en-us_topic_0237088800_b16208121182514"><a name="en-us_topic_0237088800_b16208121182514"></a><a name="en-us_topic_0237088800_b16208121182514"></a>server sshd start</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row102017179910"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1020212171913"><a name="en-us_topic_0237088800_p1020212171913"></a><a name="en-us_topic_0237088800_p1020212171913"></a>CheckCrondService (Checks the Crond service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p102023178910"><a name="en-us_topic_0237088800_p102023178910"></a><a name="en-us_topic_0237088800_p102023178910"></a>The Crond service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p764625919914"><a name="en-us_topic_0237088800_p764625919914"></a><a name="en-us_topic_0237088800_p764625919914"></a>Install and enable the Crond service.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row13989162519134"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p5990192511132"><a name="en-us_topic_0237088800_p5990192511132"></a><a name="en-us_topic_0237088800_p5990192511132"></a>CheckStack (Checks the stack size.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1899019257131"><a name="en-us_topic_0237088800_p1899019257131"></a><a name="en-us_topic_0237088800_p1899019257131"></a>The stack size is less than 3072.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16990192510139"><a name="en-us_topic_0237088800_p16990192510139"></a><a name="en-us_topic_0237088800_p16990192510139"></a>Use the <strong id="b043643435113"><a name="b043643435113"></a><a name="b043643435113"></a>gs_checkos</strong> tool to set the stack size to <strong id="b114363344515"><a name="b114363344515"></a><a name="b114363344515"></a>3072</strong> and restart the processes with a smaller stack size.</p>
<pre class="screen" id="en-us_topic_0237088800_screen724123081415"><a name="en-us_topic_0237088800_screen724123081415"></a><a name="en-us_topic_0237088800_screen724123081415"></a><strong id="en-us_topic_0237088800_b1724523061413"><a name="en-us_topic_0237088800_b1724523061413"></a><a name="en-us_topic_0237088800_b1724523061413"></a>gs_checkos -i B2</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1441717382175"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p10417338181711"><a name="en-us_topic_0237088800_p10417338181711"></a><a name="en-us_topic_0237088800_p10417338181711"></a>CheckSysPortRange (Checks OS port configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p164175380179"><a name="en-us_topic_0237088800_p164175380179"></a><a name="en-us_topic_0237088800_p164175380179"></a>OS IP ports are not within the required port range or <span id="en-us_topic_0237088800_text1528414110195"><a name="en-us_topic_0237088800_text1528414110195"></a><a name="en-us_topic_0237088800_text1528414110195"></a>openGauss</span> ports are within the OS IP port range.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1041723851717"><a name="en-us_topic_0237088800_p1041723851717"></a><a name="en-us_topic_0237088800_p1041723851717"></a>Set the OS IP ports within <strong id="b16845153117370"><a name="b16845153117370"></a><a name="b16845153117370"></a>26000</strong> to <strong id="b3427133416374"><a name="b3427133416374"></a><a name="b3427133416374"></a>65535</strong> and set the <span id="en-us_topic_0237088800_text72292425197"><a name="en-us_topic_0237088800_text72292425197"></a><a name="en-us_topic_0237088800_text72292425197"></a>openGauss</span> ports beyond the OS IP port range.</p>
<pre class="screen" id="en-us_topic_0237088800_screen687583717203"><a name="en-us_topic_0237088800_screen687583717203"></a><a name="en-us_topic_0237088800_screen687583717203"></a><strong id="en-us_topic_0237088800_b38842374205"><a name="en-us_topic_0237088800_b38842374205"></a><a name="en-us_topic_0237088800_b38842374205"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row15945155362019"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p79451553112013"><a name="en-us_topic_0237088800_p79451553112013"></a><a name="en-us_topic_0237088800_p79451553112013"></a>CheckMemInfo (Checks the memory information.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19945153142017"><a name="en-us_topic_0237088800_p19945153142017"></a><a name="en-us_topic_0237088800_p19945153142017"></a>Memory sizes are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p18945105320202"><a name="en-us_topic_0237088800_p18945105320202"></a><a name="en-us_topic_0237088800_p18945105320202"></a>Use physical memory of the same specifications between nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11243102619211"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p19243526122113"><a name="en-us_topic_0237088800_p19243526122113"></a><a name="en-us_topic_0237088800_p19243526122113"></a>CheckHyperThread (Checks the hyper-threading.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p192432266214"><a name="en-us_topic_0237088800_p192432266214"></a><a name="en-us_topic_0237088800_p192432266214"></a>The CPU hyper-threading is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p924322615213"><a name="en-us_topic_0237088800_p924322615213"></a><a name="en-us_topic_0237088800_p924322615213"></a>Enable the CPU hyper-threading.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1813414713215"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p171341847202114"><a name="en-us_topic_0237088800_p171341847202114"></a><a name="en-us_topic_0237088800_p171341847202114"></a>CheckTableSpace (Checks tablespaces.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1413454782118"><a name="en-us_topic_0237088800_p1413454782118"></a><a name="en-us_topic_0237088800_p1413454782118"></a>The tablespace path is nested with the <span id="en-us_topic_0237088800_text3379438196"><a name="en-us_topic_0237088800_text3379438196"></a><a name="en-us_topic_0237088800_text3379438196"></a>openGauss</span> path or nested with the path of another tablespace.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1013412471215"><a name="en-us_topic_0237088800_p1013412471215"></a><a name="en-us_topic_0237088800_p1013412471215"></a>Migrate tablespace data to the tablespace with a valid path.</p>
</td>
</tr>
</tbody>
</table>





## Checking Database Performance

### Check Method<a name="section61381340192910"></a>

Use the  **gs\_checkperf**  tool provided by openGauss to check hardware performance.

**Prerequisites**

-   openGauss is running properly.
-   Services are running properly on the database.

**Procedure**

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database performance:

    ```
    gs_checkperf
    ```


For details about performance statistical items, see "Server Tools \> gs\_checkperf \> Performance Check Items" in the  *openGauss Tool Reference*.

**Examples**

Simple performance statistical result is displayed on the screen as follows:

```
gs_checkperf -i pmk -U omm
Cluster statistics information:
    Host CPU busy time ratio                     :    1.43       %
    MPPDB CPU time % in busy time                :    1.88       %
    Shared Buffer Hit ratio                      :    99.96      %
    In-memory sort ratio                         :    100.00     %
    Physical Reads                               :    4
    Physical Writes                              :    25
    DB size                                      :    70         MB
    Total Physical writes                        :    25
    Active SQL count                             :    2
    Session count                                :    3
```

### Exception Handling<a name="section8220151913317"></a>

After you use the  **gs\_checkperf**  tool to check the cluster performance, if the performance is abnormal, troubleshoot the issue by following instructions in this section.

**Table  1**  Cluster-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_ta9bb00b1705f47859f64e64e62901bb4"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r49fa7f9a647d47e78499e596fe8d51bd"><th class="cellrowborder" valign="top" width="25.840000000000003%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.16%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_re2f2450dcb5243f58ca3a595f65ee474"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"></a>High CPU usage of hosts</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"></a>2. Run the <strong id="en-us_topic_0237088803_b842352706213220"><a name="en-us_topic_0237088803_b842352706213220"></a><a name="en-us_topic_0237088803_b842352706213220"></a>top</strong> command to check which system processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b84235270621345"><a name="en-us_topic_0237088803_b84235270621345"></a><a name="en-us_topic_0237088803_b84235270621345"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"></a>top</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_re14ed83118e94cd4878eeb0042af49a2"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"></a>High CPU usage of <span id="en-us_topic_0237088803_text1420410113254"><a name="en-us_topic_0237088803_text1420410113254"></a><a name="en-us_topic_0237088803_text1420410113254"></a>GaussDB Kernel</span></p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"></a>2. Run the <strong id="en-us_topic_0237088803_b01553517288"><a name="en-us_topic_0237088803_b01553517288"></a><a name="en-us_topic_0237088803_b01553517288"></a>top</strong> command to check which database processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b116116562811"><a name="en-us_topic_0237088803_b116116562811"></a><a name="en-us_topic_0237088803_b116116562811"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"></a>top</strong></pre>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"></a>3. Use the <strong id="en-us_topic_0237088803_b4616174712815"><a name="en-us_topic_0237088803_b4616174712815"></a><a name="en-us_topic_0237088803_b4616174712815"></a>gs_expand</strong> tool to add new hosts to lower the CPU usage.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r8e114fc900a04dcab46feb1ec0cb4178"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"></a>Low hit ratio of the shared memory</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"></a>1. Expand the memory.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"></a>2. Run the following command to check the OS configuration file <strong id="en-us_topic_0237088803_b842352706213630"><a name="en-us_topic_0237088803_b842352706213630"></a><a name="en-us_topic_0237088803_b842352706213630"></a>/etc/sysctl.conf</strong> and increase the value of <strong id="en-us_topic_0237088803_b842352706213639"><a name="en-us_topic_0237088803_b842352706213639"></a><a name="en-us_topic_0237088803_b842352706213639"></a>kernel.shmmax</strong>.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rb696a9cd1e274702b0cf2f94b187656c"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"></a>Low in-memory sort ratio</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"></a>Expand the memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r33f8c42af67944649f3721213a5d92a3"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"></a>High I/O and disk usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"></a>1. Replace current disks with high-performance ones.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"></a>2. Adjust the data layout to evenly distribute I/O requests to all the physical disks.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"></a>3. Run <strong id="en-us_topic_0237088803_b842352706213847"><a name="en-us_topic_0237088803_b842352706213847"></a><a name="en-us_topic_0237088803_b842352706213847"></a>VACUUM FULL</strong> for the entire database.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"></a>vacuum full;</strong></pre>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"></a>4. Clean up the disk space.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"></a>5. Reduce the number of concurrent connections.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rc4d4497849014f999b56ca6feb688762"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"></a>Transaction statistics</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"></a>Query the <strong id="en-us_topic_0237088803_b128351155161414"><a name="en-us_topic_0237088803_b128351155161414"></a><a name="en-us_topic_0237088803_b128351155161414"></a>pg_stat_activity</strong> system catalog and disconnect unnecessary connections. (Log in to the database and run the <strong id="en-us_topic_0237088803_b187811961466"><a name="en-us_topic_0237088803_b187811961466"></a><a name="en-us_topic_0237088803_b187811961466"></a>postgres=# \d+ pg_stat_activity;</strong> command.)</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Node-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t1b8a1ca94cde400ba44ab4ce0eb81bd6"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r0bdfef97fc9e470c830a138b33f00f40"><th class="cellrowborder" valign="top" width="25.669999999999998%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.33%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r4c4f805b81e74311b4222bcb8ac8b28b"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"></a>High CPU usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"></a>2. Run the <strong id="en-us_topic_0237088803_b15741809372"><a name="en-us_topic_0237088803_b15741809372"></a><a name="en-us_topic_0237088803_b15741809372"></a>top</strong> command to check which system processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b279180153716"><a name="en-us_topic_0237088803_b279180153716"></a><a name="en-us_topic_0237088803_b279180153716"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"></a>top</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rf18fcfbb99664d8888093a6de5ef3199"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"></a>High memory usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"><a name="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"></a>Expand or clean up the memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r8c887a14e01c44ff9272d6236e49cdfd"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"></a>High I/O usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"></a>1. Replace current disks with high-performance ones.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"><a name="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"></a>2. Clean up the disk space.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"></a>3. Use memory read/write to replace as much disk I/O as possible, putting frequently accessed files or data in the memory.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Session/process-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t803713a284c74d5885e7fcb52813917b"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_rbbc99ba73be6467dbdd58ba220a6d5cd"><th class="cellrowborder" valign="top" width="25.380000000000003%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.62%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r1a46a92c987b4f00a908004d21d52f41"><td class="cellrowborder" valign="top" width="25.380000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"></a>High CPU, memory, and I/O usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.62%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"></a>Check which processes cause high CPU, memory, or I/O usage. If they are unnecessary processes, kill them; otherwise, analyze the specific cause of high usage. For example, if SQL statement execution occupies much memory, check whether the SQL statements need optimization.</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  SSD performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t28cda86dba7a49c899f17955edef6d58"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r9c07b2295ced4359914301ac747cfc29"><th class="cellrowborder" valign="top" width="25.19%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.81%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r54645227d0d54a55958134712e92de36"><td class="cellrowborder" valign="top" width="25.19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"><a name="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"></a>SSD read/write fault</p>
</td>
<td class="cellrowborder" valign="top" width="74.81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"></a>Run the following command to check whether SSD is faulty. If yes, analyze the specific cause.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"></a>gs_checkperf -i SSD -U</strong> <span id="en-us_topic_0237088803_text461533435513"><a name="en-us_topic_0237088803_text461533435513"></a><a name="en-us_topic_0237088803_text461533435513"></a>omm</span></pre>
</td>
</tr>
</tbody>
</table>

## Checking and Deleting Logs

You are advised to check OS logs and database run logs monthly for monitoring system status and troubleshooting, and to delete database run logs monthly for saving disk space.

### Checking OS Logs<a name="section1840033893219"></a>

You are advised to monthly check OS logs to detect and prevent potential OS problems.

**Procedure**

Run the following command to check OS log files:

```
vim /var/log/messages
```

\(Pay attention to words like  **kernel**,  **error**, and  **fatal**  in logs generated within the last month and handle the problems based on the alarm information.\)

### Checking openGauss Run Logs<a name="section12903121173417"></a>

A database can still run when errors occur during the execution of some operations. However, data may be inconsistent before and after the error occurrences. Therefore, you are advised to monthly check openGauss run logs to detect potential problems in time.

**Prerequisites**

-   The host used for collecting logs is running properly, and the network connection is normal. Database installation users trust each other.
-   An OS tool \(for example,  **gstack**\) that the log collection tool requires has been installed. If it is not installed, an error message is displayed, and this collection item is skipped.

**Procedure**

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  <a name="en-us_topic_0237088806_en-us_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab"></a>Run the following command to collect database logs:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    In the command,  **20160616 01:01**  indicates the start time of the log and  **20160616 23:59**  indicates the end time of the log.

3.  Based on command output in  [2](#en-us_topic_0237088806_en-us_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab), access the related log collection directory, decompress collected database logs, and check these logs.

    Assume that collected logs are stored in  **/opt/gaussdb/tmp/gaussdba\_mppdb/collector\_20160726\_105158.tar.gz**.

    ```
    tar -xvzf /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158.tar.gz 
    cd /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158
    ```


**Examples**

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**  and  **--end-time**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files 
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_175615.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-h**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -h plat2
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190225.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-f**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -f /opt/software/gaussdb/output
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files
    All results are stored in /opt/software/gaussdb/output/collector_20160616_190511.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **--keyword**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" --keyword="os"
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190836.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-o**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -o /opt/software/gaussdb/output
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-l**  \(the file name extension must be .log\):

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -l /opt/software/gaussdb/logfile.log
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```


### Cleaning Run Logs<a name="section12607174612366"></a>

A large number of run logs will be generated during database running and occupy huge disk space. You are advised to delete expired run logs and retain logs generated within one month.

**Procedure**

1.  Log in as the OS user  **omm**  to any host in the GaussDB Kernel cluster.
2.  Clean logs.

    a. Back up logs generated over one month ago to other disks.

    b. Access the directory where logs are stored.

    ```
    cd $GAUSSLOG
    ```

    c. Access the corresponding sub-directory and run the following command to delete logs generated one month ago:

    ```
    rm log name
    ```

    The naming convention of a log file is  **postgresql-***year*-*month*-*day***\_HHMMSS**.



## Checking Time Consistency

Database transaction consistency is guaranteed by a logical clock and is not affected by OS time. However, OS time inconsistency will lead to problems, such as abnormal backend O&M and monitoring functions. Therefore, you are advised to monthly check time consistency among nodes.

### Procedure<a name="en-us_topic_0237088808_en-us_topic_0059777703_s7110d1c3f93a4bdea6f206e6709de04f"></a>

1.  Log in as the OS user  **omm**  to any host in the GaussDB Kernel cluster.
2.  Create a configuration file for recording each cluster node. \(You can specify the  *mpphosts*  file directory randomly. It is recommended that the file be stored in the  **/tmp**  directory.\)

    ```
    vim /tmp/mpphosts
    ```

    Add the host name of each node.

    ```
    plat1
    plat2
    plat3
    ```

3.  Save the configuration file.

    ```
    :wq!
    ```

4.  Run the following command and write the time on each node into the  **/tmp/sys\_ctl-os1.log**  file:

    ```
    for ihost in `cat /tmp/mpphosts`; do ssh -n -q $ihost "hostname;date"; done > /tmp/sys_ctl-os1.log
    ```

5.  Check time consistency between the nodes based on the command output. The time difference should not exceed 30s.

    ```
    cat /tmp/sys_ctl-os1.log
    plat1
    Thu Feb  9 16:46:38 CST 2017
    plat2
    Thu Feb  9 16:46:49 CST 2017
    plat3
    Thu Feb  9 16:46:14 CST 2017
    ```


## Checking the Number of Application Connections

If the number of connections between applications and the database exceeds the maximum value, new connections cannot be established. You are advised to daily check the number of connections, release idle connections in time, or increase the allowed maximum number of connections.

### Procedure<a name="en-us_topic_0237088809_en-us_topic_0059777858_s8aaa4c4f54fe4b97b5bf3a874789aad6"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=#  
    ```

3.  Run the following SQL statement to check the number of connections:

    ```
    openGauss=#  SELECT count(*) FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;
    ```

    Information similar to the following is displayed.  **2**  indicates that two applications are connected to the database.

    ```
    count
    -------
         2
    (1 row)
    ```

4.  View the allowed maximum connections.

    ```
    openGauss=# SHOW max_connections;
    ```

    Information similar to the following is displayed.  **200**  indicates the currently allowed maximum number of connections.

    ```
     max_connections 
    -----------------
     200
    (1 row)
    ```


### Exception Handling<a name="en-us_topic_0237088809_en-us_topic_0059777858_sd21b84e4719d479daa8c2a0a7bef2589"></a>

If the number of connections in the command output is close to the value of  **max\_connections**  of the database, delete existing connections or change the upper limit based on site requirements.

1.  Run the following SQL statement to view information about connections whose  **state**  is set to  **idle**, and  **state\_change**  column is not updated for a long time.

    ```
    openGauss=#  SELECT * FROM pg_stat_activity where state='idle' order by state_change;
    ```

    Information similar to the following is displayed:

    ```
     datid | datname  |       pid       | usesysid | usename  | application_name |  client_addr  
     | client_hostname | client_port |         backend_start         | xact_start |          quer
    y_start          |         state_change          | waiting | enqueue | state | resource_pool 
    |                    query                     
    -------+----------+-----------------+----------+----------+------------------+---------------
    -+-----------------+-------------+-------------------------------+------------+--------------
    -----------------+-------------------------------+---------+---------+-------+---------------
    +----------------------------------------------
     13626 | postgres | 140390162233104 |       10 | gaussdba |                  |               
     |                 |          -1 | 2016-07-15 14:08:59.474118+08 |            | 2016-07-15 14
    :09:04.496769+08 | 2016-07-15 14:09:04.496975+08 | f       |         | idle  | default_pool  
    | select count(group_name) from pgxc_group;
     13626 | postgres | 140390132872976 |       10 | gaussdba | cn_5002          | 10.180.123.163
     |                 |       48614 | 2016-07-15 14:11:16.014871+08 |            | 2016-07-15 14
    :21:17.346045+08 | 2016-07-15 14:21:17.346095+08 | f       |         | idle  | default_pool  
    | SET SESSION AUTHORIZATION DEFAULT;RESET ALL;
    (2 rows)
    ```

2.  Release idle connections.

    Check each connection and release them after obtaining approval from the users of the connections. Run the following SQL command to release a connection using  **pid**  obtained in the previous step:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
    ```

    Information similar to the following is displayed:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```

    If no connections can be released, go to the next step.

3.  Increase the maximum number of connections.

    ```
    gs_guc set -D /gaussdb/data/dbnode -c "max_connections= 800"
    ```

    **800**  is the new maximum value.

4.  Restart database services to make the new settings take effect.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The restart results in operation interruption. Properly plan the restart to avoid affecting users.

    ```
    gs_om -t stop && gs_om -t start
    ```


## Routinely Maintaining Tables

To ensure proper database running, after insert and delete operations, you need to routinely run  **VACUUM FULL**  and  **ANALYZE**  as appropriate for customer scenarios and update statistics to obtain better performance.

### Related Concepts<a name="en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section1275717610563"></a>

You need to routinely run  **VACUUM**,  **VACUUM FULL**, and  **ANALYZE**  to maintain tables, because:

-   **VACUUM FULL**  can be used to reclaim disk space occupied by updated or deleted data and combine small-size data files.
-   **VACUUM**  can be used to maintain a visualized mapping for each table to track pages that contain arrays visible to other active transactions. A common index scan uses the mapping to obtain the corresponding arrays and check whether the arrays are visible to the current transaction. If the arrays cannot be obtained, capture a batch of arrays to check the visibility. Therefore, updating the visualized mapping of a table can accelerate unique index scans.
-   Running  **VACUUM**  can avoid original data loss caused by duplicate transaction IDs when the number of executed transactions exceeds the database threshold.
-   **ANALYZE**  can be used to collect statistics on tables in databases. The statistics are stored in the system catalog  **PG\_STATISTIC**. Then the query optimizer uses the statistics to work out the most efficient execution plan.

### Procedure<a name="en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section97581768562"></a>

1.  Run the  **VACUUM**  or  **VACUUM FULL**  command to reclaim disk space.
    -   **VACUUM**:

        Run  **VACUUM**  for a table.

        ```
        openGauss=# VACUUM customer;
        ```

        ```
        VACUUM
        ```

        This statement can be concurrently executed with database operation commands, including  **SELECT**,  **INSERT**,  **UPDATE**, and  **DELETE**; excluding  **ALTER TABLE**.

        Run  **VACUUM**  for the table partition.

        ```
        openGauss=# VACUUM customer_par PARTITION ( P1 );
        ```

        ```
        VACUUM
        ```

    -   **VACUUM FULL**:

        ```
        openGauss=# VACUUM FULL customer;
        ```

        ```
        VACUUM
        ```

        During the command running, exclusive locks need to be added to the table and all other database operations need to be suspended.

2.  Run  **ANALYZE**  to update statistics.

    ```
    openGauss=# ANALYZE customer;
    ```

    ```
    ANALYZE
    ```

    Run  **ANALYZE VERBOSE**  to update statistics and display table information.

    ```
    openGauss=# ANALYZE VERBOSE customer;
    ```

    ```
    ANALYZE
    ```

    You can run  **VACUUM ANALYZE**  at the same time to optimize the query.

    ```
    openGauss=# VACUUM ANALYZE customer;
    ```

    ```
    VACUUM
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**VACUUM**  and  **ANALYZE**  cause a substantial increase in I/O traffic, which may affect other active sessions. Therefore, you are advised to set the cost-based vacuum delay feature by specifying the  **vacuum\_cost\_delay**  parameter. For details, see "GUC Parameters \> Resource Consumption \> Cost-based Vacuum Delay" in the  *Developer Guide*.

3.  Delete a table.

    ```
    openGauss=# DROP TABLE customer;
    openGauss=# DROP TABLE customer_par;
    openGauss=# DROP TABLE part;
    ```

    If the following information is displayed, the tables have been deleted:

    ```
    DROP TABLE
    ```


### Maintenance Suggestions<a name="en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section976110616566"></a>

-   Routinely run  **VACUUM FULL**  for large tables. If the database performance deteriorates, run  **VACUUM FULL**  for the entire database. If the database performance is stable, you are advised to run  **VACUUM FULL**  monthly.
-   Routinely run  **VACUUM FULL**  on system catalogs, especially  **PG\_ATTRIBUTE**.
-   Enable automatic vacuum processes \(**AUTOVACUUM**\) in the system. The processes automatically run the  **VACUUM**  and  **ANALYZE**  statements to reclaim the record space marked as the deleted state and update statistics in the table.

## Routinely Recreating an Index

### Background<a name="en-us_topic_0237088811_en-us_topic_0059779198_sb20e9236c2ee4359bd71385a42b73ce8"></a>

When data deletion is repeatedly performed in the database, index keys will be deleted from the index pages, resulting in index bloat. Recreating an index routinely improves query efficiency.

The database supports B-tree indexes. Recreating a B-tree index routinely helps improve query efficiency.

-   If a large amount of data is deleted, index keys on the index pages will be deleted. As a result, the number of index pages reduces and index bloat occurs. Recreating an index helps reclaim wasted space.
-   In a newly created index, pages with adjacent logical structures tend to have adjacent physical structures. Therefore, a new index achieves a higher access speed than an index that has been updated for multiple times.

### Methods<a name="en-us_topic_0237088811_section1483310439110"></a>

Use either of the following two methods to recreate an index:

- Run the  **DROP INDEX**  statement to delete the index and then run the  **CREATE INDEX**  statement to create an index.

  When you delete an index, a temporary exclusive lock is added in the parent table to block related read/write operations. During index creation, the write operation is locked, whereas the read operation is not locked and can use only sequential scans.
-   Run  **REINDEX**  to recreate an index.
    -   When you run the  **REINDEX TABLE**  statement to recreate an index, an exclusive lock is added to block related read/write operations.
    -   When you run the  **REINDEX INTERNAL TABLE**  statement to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\), an exclusive lock is added to block related read/write operations on the table.


### Procedure<a name="en-us_topic_0237088811_en-us_topic_0059779198_s5066efbb8c0d462694edc169c57822b0"></a>

Assume the ordinary index  **areaS\_idx**  exists in the  **area\_id**  column of the imported table  **areaS**. Use either of the following two methods to recreate an index:

-   Run the  **DROP INDEX**  statement to delete the index and run the  **CREATE INDEX**  statement to create an index.
    1.  Delete the index.

        ```
        openGauss=# DROP INDEX areaS_idx;
        ```
        If the following information is displayed, the deletion is successful:
        ```
        DROP INDEX
        ```

    2.  Create an index

        ```
        openGauss=# CREATE INDEX areaS_idx ON areaS (area_id);
        ```
        If the following information is displayed, the creation is successful:
        ```
        CREATE INDEX
        ```


-   Run  **REINDEX**  to recreate an index.
    -   Run  **REINDEX TABLE**  to recreate an index.

        ```
        openGauss=# REINDEX TABLE areaS;
        ```
        If the following information is displayed, the recreating is successful:
        ```
        REINDEX
        ```

    -   Run  **REINDEX INTERNAL TABLE**  to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\).

        ```
        openGauss=# REINDEX INTERNAL TABLE areaS;
        ```
        If the following information is displayed, the recreating is successful:
        ```
        REINDEX
        ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Before you recreate an index, you can increase the values of  **maintenance\_work\_mem**  and  **psort\_work\_mem**  to accelerate the index recreation.

## Exporting and Viewing the WDR

Accessing WDR snapshot data requires the **sysadmin** or **monadmin** permission. Therefore, to generate a WDR, you must use the **root** account or other accounts with the aforementioned permissions.

1. Run the following command to create a report file:

   ```
   touch  /home/om/wdrTestNode.html
   ```

2. Connect to the Postgres system database.

   ```
   gsql -d postgres -p [*Port number*] -r
   ```

3. Select two different snapshots in the **snapshot.snapshot** table. If no service restart occurs between the two snapshots, use the two snapshots to generate a report.

   ```
   gsql> select * from snapshot.snapshot order by start_ts desc limit 10;
   ```

4. Run the following commands to generate a WDR in HTML format on the local PC:

   1. Run the following commands to set the report format. **\\a** indicates that table row and column symbols are not displayed. **\\t** indicates that column names are not displayed. **\\o** specifies an output file.

      ```
      gsql> \a      
      gsql> \t 
      gsql> \o {*Report path*}
      ```

   2. Run the following command to generate a WDR in HTML format:

      ```
      gsql> select generate_wdr_report(begin_snap_id Oid, end_snap_id Oid, int report_type, int report_scope, int node_name );
      ```

      Example 1: Generate a cluster-level report.

      ```
      select generate_wdr_report(1, 2, 'all', 'cluster',null);
      ```

      Example 2: Generate a report for a node.

      ```
      select generate_wdr_report(1, 2, 'all', 'node', pgxc_node_str()::cstring);
      ```

      >![](public_sys-resources/icon-note.gif) **NOTE:**
      >Currently, the name of the openGauss node is fixed to **dn\_6001\_6002\_6003**. You can also replace it with the actual node name.

      **Table 1** Parameter description

      <a name="table612223716289"></a>

      <table><tbody><tr id="row20172113772815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p1517210378288"><a name="p1517210378288"></a><a name="p1517210378288"></a><strong>Parameter</strong></p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p121721737132819"><a name="p121721737132819"></a><a name="p121721737132819"></a><strong>Description</strong></p>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p117203752815"><a name="p117203752815"></a><a name="p117203752815"></a><strong>Value Range</strong></p>
      </td>
      </tr>
      <tr id="row1317233717281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p141721337112810"><a name="p141721337112810"></a><a name="p141721337112810"></a>begin_snap_id</p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p1717263720289"><a name="p1717263720289"></a><a name="p1717263720289"></a>ID of a snapshot that starts at a performance period (<strong>snapshot_id</strong> in the <strong>snapshot.snaoshot</strong> table)</p>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p141721337182813"><a name="p141721337182813"></a><a name="p141721337182813"></a>-</p>
      </td>
      </tr>
      <tr id="row9172113742815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p51731637132811"><a name="p51731637132811"></a><a name="p51731637132811"></a>end_snap_id</p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p317313762815"><a name="p317313762815"></a><a name="p317313762815"></a>ID of the end snapshot. By default, the value of <strong>end_snap_id</strong> is greater than the value of <strong>begin_snap_id</strong> (<strong>snapshot_id</strong> in the <strong>snapshot.snaoshot</strong> table).</p>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p12173113752819"><a name="p12173113752819"></a><a name="p12173113752819"></a>-</p>
      </td>
      </tr>
      <tr id="row1417312379281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p2173153710282"><a name="p2173153710282"></a><a name="p2173153710282"></a>report_type</p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p71731375280"><a name="p71731375280"></a><a name="p71731375280"></a>Specifies the type of the generated report.</p>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul4132243185013"></a><a name="ul4132243185013"></a><ul id="ul4132243185013"><li><strong>summary</strong></li><li><strong>detail</strong></li><li><strong>all</strong>: Both <strong>summary</strong> and <strong>detail</strong> types are included.</li></ul>
      </td>
      </tr>
      <tr id="row13173937132817"><td class="cellrowborder" valign="top" width="16.04%"><p id="p19173203782815"><a name="p19173203782815"></a><a name="p19173203782815"></a>report_scope</p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p19173153712289"><a name="p19173153712289"></a><a name="p19173153712289"></a>Specifies the scope for the report to be generated.</p>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul18502133435114"></a><a name="ul18502133435114"></a><ul id="ul18502133435114"><li><strong>cluster</strong>: cluster</li><li><strong>node</strong>: a node in the cluster</li></ul>
      </td>
      </tr>
      <tr id="row13173113713282"><td class="cellrowborder" valign="top" width="16.04%"><p id="p17173173712819"><a name="p17173173712819"></a><a name="p17173173712819"></a>node_name</p>
      </td>
      <td class="cellrowborder" valign="top" width="54.690000000000005%"><a name="ul456943795214"></a><a name="ul456943795214"></a><ul id="ul456943795214"><li>When <strong>report_scope</strong> is set to <strong>single node</strong>, set this parameter to the name of the corresponding node. </li><li>When <strong>report_scope</strong> is set to <strong>cluster</strong>, this parameter can be omitted or set to <strong>NULL</strong>.</li></ul>
      </td>
      <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p617314374285"><a name="p617314374285"></a><a name="p617314374285"></a>-</p>
      </td>
      </tr>
      </tbody>
      </table>

5. Run the following command to disable the output options and format the output:

   ```
   \o \a \t 
   ```

6. View the WDR in **/home/om/** as required.

   **Table 2** Main content of the WDR

   <a name="table11575121514110"></a>

   <table><thead align="left"><tr id="row2575515415"><th class="cellrowborder" valign="top" width="27.27%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a><strong>Item</strong></p>
   </th>
   <th class="cellrowborder" valign="top" width="72.72999999999999%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a><strong>Description</strong></p>
   </th>
   </tr>
   </thead>
   <tbody><tr id="row115761915713"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a>Database Stat (cluster scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p15576615117"><a name="p15576615117"></a><a name="p15576615117"></a>Database performance statistics: transactions, read and write operations, row activities, write conflicts, and deadlocks</p>
   </td>
   </tr>
   <tr id="row55761015114"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a>Load Profile (cluster scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p357617151311"><a name="p357617151311"></a><a name="p357617151311"></a>Cluster performance statistics: CPU time, DB time, logical or physical read, I/O performance, login and logout, load strength, and load performance</p>
   </td>
   </tr>
   <tr id="row18576141511115"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a>Instance Efficiency Percentages (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p0576615218"><a name="p0576615218"></a><a name="p0576615218"></a>Cluster-level or node-level cache hit ratio</p>
   </td>
   </tr>
   <tr id="row131525233484"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1315310231485"><a name="p1315310231485"></a><a name="p1315310231485"></a>I/O Profile (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p14153323134813"><a name="p14153323134813"></a><a name="p14153323134813"></a>I/O usage in the cluster or node dimension</p>
   </td>
   </tr>
   <tr id="row115764151812"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a>Top 10 Events by Total Wait Time (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457618151110"><a name="p1457618151110"></a><a name="p1457618151110"></a>Most time-consuming event</p>
   </td>
   </tr>
   <tr id="row175761815718"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a>Wait Classes by Total Wait Time (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p85763154111"><a name="p85763154111"></a><a name="p85763154111"></a>Category of the wait time that is most time-consuming</p>
   </td>
   </tr>
   <tr id="row55764151710"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a>Host CPU (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1557621514116"><a name="p1557621514116"></a><a name="p1557621514116"></a>CPU usage of the host</p>
   </td>
   </tr>
   <tr id="row857661514110"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a>Memory Statistics (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p19576101510115"><a name="p19576101510115"></a><a name="p19576101510115"></a>Kernel memory usage distribution</p>
   </td>
   </tr>
   <tr id="row1116032625515"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1316142615558"><a name="p1316142615558"></a><a name="p1316142615558"></a>Time Model (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p51611226135514"><a name="p51611226135514"></a><a name="p51611226135514"></a>Time distribution information about the statements on a node</p>
   </td>
   </tr>
   <tr id="row469714322313"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p469710321319"><a name="p469710321319"></a><a name="p469710321319"></a>Wait Events (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p869818329318"><a name="p869818329318"></a><a name="p869818329318"></a>Statistics on wait events at the node level</p>
   </td>
   </tr>
   <tr id="row32171134967"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p4217934665"><a name="p4217934665"></a><a name="p4217934665"></a>Cache I/O Stats (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p42171134261"><a name="p42171134261"></a><a name="p42171134261"></a>I/O statistics on user tables and indexes</p>
   </td>
   </tr>
   <tr id="row13684036362"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p136841836962"><a name="p136841836962"></a><a name="p136841836962"></a>Utility Status (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1168423613617"><a name="p1168423613617"></a><a name="p1168423613617"></a>Status information about the replication slot and background checkpoint</p>
   </td>
   </tr>
   <tr id="row185761150118"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a>Object Stats (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457691518114"><a name="p1457691518114"></a><a name="p1457691518114"></a>Performance statistics in the index and table dimensions</p>
   </td>
   </tr>
   <tr id="row145762156112"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a>Configuration settings (node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p657615151715"><a name="p657615151715"></a><a name="p657615151715"></a>Node configuration</p>
   </td>
   </tr>
   <tr id="row4576111519111"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a>SQL Statistics (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p75772015713"><a name="p75772015713"></a><a name="p75772015713"></a>SQL statement performance statistics: end-to-end time, row activities, cache hit, CPU consumption, and time consumption</p>
   </td>
   </tr>
   <tr id="row205775151415"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a>SQL Detail (cluster or node scope)</p>
   </td>
   <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p55772158111"><a name="p55772158111"></a><a name="p55772158111"></a>SQL statement text details</p>
   </td>
   </tr>
   </tbody>
   </table>



## Data Security Maintenance Suggestions

To ensure data security in GaussDB Kernel and prevent accidents, such as data loss and illegal data access, read this section carefully.

### Preventing Data Loss<a name="en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s838b550f384b449bb87e13a200bf04cd"></a>

You are advised to plan routine physical backup and store backup files in a reliable medium. If a serious error occurs in the system, you can use the backup files to restore the system to the state at the backup point.

### Preventing Illegal Data Access<a name="en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s654ff86682394156a57cf0860791b723"></a>

-   You are advised to manage database users based on their permission hierarchies. A database administrator creates users and grants permissions to the users based on service requirements to ensure users properly access the database.
-   You are advised to deploy GaussDB Kernel servers and clients \(or applications developed based on the client library\) in trusted internal networks. If the servers and clients must be deployed in an untrusted network, enable SSL encryption before services are started to ensure data transmission security. Note that enabling the SSL encryption function compromises database performance.

### Preventing System Logs from Leaking Personal Data<a name="en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s2ff16280ae30412c9f531f105fd2d6c6"></a>

-   Delete personal data before sending debug logs to others for analysis.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The log level  **log\_min\_messages**  is set to  **DEBUG***x_  \(*x_  indicates the debug level and the value ranges from 1 to 5\). The information recorded in debug logs may contain personal data.

- Delete personal data before sending system logs to others for analysis. If the execution of a SQL statement fails, the error SQL statement will be recorded in a system log by default. SQL statements may contain personal data.

-   Set  **log\_min\_error\_statement**  to  **PANIC**  to prevent error SQL statements from being recorded in system logs. If this function is disabled, it is difficult to locate fault causes when a fault occurs.

## Slow SQL Diagnosis

### Background<a name="section11436171655914"></a>

If the SQL statement execution performance does not meet expectations, you can view the SQL statement execution information to analyze the behavior and diagnose problems that occur during the execution.

### Prerequisites<a name="section18794625615"></a>

-   The database instance is running properly.
-   The GUC parameter  **track\_stmt\_stat\_level **is properly set for querying the SQL statement information.
-   Only the system administrator and monitor administrator can perform this operation.

```
Run the following command to check the execution information about the SQL statements in the database instance:
gsql> select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
Run the following command to check the execution information about the slow SQL statements in the database instance:
gsql> select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
Check the execution information about the SQL statement on the current primary node.
gsql> select * from statement_history;
Check the execution information about the SQL statement on the current standby node.
gsql> select * from dbe_perf.standby_statement_history(is_only_slow, start_timestamp, end_timestamp);
```
