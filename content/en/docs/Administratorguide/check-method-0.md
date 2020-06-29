# Check Method<a name="EN-US_TOPIC_0242215058"></a>

Use the  **gs\_check**  tool provided by openGauss to check the openGauss health status.

## Precautions<a name="en-us_topic_0237088799_en-us_topic_0059778216_section25370838114311"></a>

-   Only user  **root**  is authorized to check new nodes added during cluster scale-out. In other cases, the check can be performed only by user  **omm**.
-   Parameter  **-i**  or  **-e**  must be set.  **-i**  specifies a single item to be checked, and  **-e**  specifies an inspection scenario where multiple items will be checked.
-   If  **-i**  is not set to a  **root**  item or no such items are contained in the check item list of the scenario specified by  **-e**, you do not need to enter the name or password of user  **root**.
-   You can run  **--skip-root-items**  to skip  **root**  items.
-   Check the consistency between the new node and existing nodes. Run the  **gs\_check**  command on an existing node and specify the  **--hosts**  parameter. The IP address of the new node needs to be written into the  **hosts**  file.

## Procedure<a name="en-us_topic_0237088799_en-us_topic_0059778216_sb3bfac91042d4d04a88ae0afacb188e7"></a>

Method 1:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database status:

    ```
    gs_check -i CheckClusterState
    ```

    In the command,  **-i**  indicates the check item and is case-sensitive. The format is  **-i CheckClusterState**,  **-i CheckCPU**  or  **-i CheckClusterState,CheckCPU**.

    Checkable items are listed in "Server Tools \> gs\_check \> openGauss status checks" in the  _openGauss Tool Reference_. You can create a check item as needed.


Method 2:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database health status:

    ```
    gs_check -e inspect
    ```

    In the command,  **-e**  indicates the inspection scenario and is case-sensitive. The format is  **-e inspect**  or  **-e upgrade**.

    The inspection scenarios include  **inspect**  \(routine inspection\),  **upgrade**  \(inspection before upgrade\),  **expand**  \(inspection before cluster scale-out\),  **binary\_upgrade**  \(inspection before in-place upgrade\), and  **health**  \(health inspection\). You can create an inspection scenario as needed.


Method 3:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Copy the inspection tool  **gs\_check**  and the  **inspection**  directory to all new hosts.
3.  Write the IP addresses of the new hosts into the  **ipListFile**  file and separate the IP addresses with line feeds.
4.  Run the following command to check the new nodes before cluster scale-out:

    ```
    gs_check -e expand_new_node --hosts ipListFile
    ```

    **-e**  must be set to  **expand\_new\_node**, indicating inspection before cluster scale-out.


The openGauss inspection is performed to check openGauss status during openGauss running or to check the environment and conditions before critical operations, such as upgrade or scale-out. For details about the inspection items and scenarios, see "Server Tools \> gs\_check \> openGauss status checks" in the  _openGauss Tool Reference_.

## Examples<a name="en-us_topic_0237088799_en-us_topic_0059778216_sf0e72278adb3436b921e52bfa2c73a8b"></a>

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
The below items require root privileges to execute:[CheckBlockdev CheckIOrequestqueue CheckIOConfigure CheckCheckMultiQueue CheckFirewall CheckSshdService CheckSshdConfig CheckCrondService CheckNoCheckSum CheckSctpSeProcMemory CheckBootItems CheckFilehandle CheckNICModel CheckDropCache]
Please enter root privileges user[root]:root
Please enter password for user[root]:
Please enter password for user[root] on the node[10.244.57.240]:
Check root password connection successfully
Distribute the context file to remote hosts successfully
Start to health check for the cluster. Total Items:59 Nodes:2

Checking...               [                         ] 21/59
Checking...               [=========================] 59/59
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
Warning reason: variable 'net.sctp.path_max_retrans' RealValue '5' ExpectedValue '10'.
Warning reason: variable 'net.sctp.max_init_retransmits' RealValue '8' ExpectedValue '10'.


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

CheckNoCheckSum.............................OK
The item run on 2 nodes.  success: 2  (consistent)
The success on all nodes value:
Nochecksum value is N,Check items pass.

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

CheckSctpService............................OK
The item run on 2 nodes.  success: 2

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
Failed. All check items run completed. Total:59   Success:52   Warning:5   NG:2
For more information please refer to /usr1/gaussdb/tool/script/gspylib/inspection/output/CheckReport_inspect611.tar.gz

```

