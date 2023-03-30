# gs\_collector<a name="ZH-CN_TOPIC_0249632249"></a>

## Background<a name="en-us_topic_0237152334_en-us_topic_0059778085_section1813744893314"></a>

When openGauss is faulty, gs\_collector can be used to collect information about the OS, logs, and configuration file, helping you locate the fault. You can use the **-C** parameter to specify the information to be collected. [Table 1](#en-us_topic_0237152334_table18101312318) describes the information that can be collected.

**Table 1** Information to be collected by gs\_collector

<a name="zh-cn_topic_0237152334_table18101312318"></a>

<table><thead align="left"><tr id="zh-cn_topic_0237152334_row21012382317"><th class="cellrowborder" valign="top" width="15.6%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237152334_p171112382318"><a name="zh-cn_topic_0237152334_p171112382318"></a><a name="zh-cn_topic_0237152334_p171112382318"></a>TypeName</p>
</th>
<th class="cellrowborder" valign="top" width="29.470000000000002%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237152334_p21183192318"><a name="zh-cn_topic_0237152334_p21183192318"></a><a name="zh-cn_topic_0237152334_p21183192318"></a>Content</p>
</th>
<th class="cellrowborder" valign="top" width="29.93%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237152334_p21116316232"><a name="en-us_topic_0237152334_p21116316232"></a><a name="en-us_topic_0237152334_p21116316232"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237152334_p12111832231"><a name="en-us_topic_0237152334_p12111832231"></a><a name="en-us_topic_0237152334_p12111832231"></a>Default Collection</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152334_row17118322316"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p121114320238"><a name="zh-cn_topic_0237152334_p121114320238"></a><a name="zh-cn_topic_0237152334_p121114320238"></a>System</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p9173483258"><a name="zh-cn_topic_0237152334_p9173483258"></a><a name="zh-cn_topic_0237152334_p9173483258"></a>HardWareInfo</p>
<p id="zh-cn_topic_0237152334_p6181348172513"><a name="zh-cn_topic_0237152334_p6181348172513"></a><a name="zh-cn_topic_0237152334_p6181348172513"></a>RunTimeInfo</p>
</td>
Run the <td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><div class="p" id="en-us_topic_0237152334_p698955702519"><a name="en-us_topic_0237152334_p698955702519"></a><a name="en-us_topic_0237152334_p698955702519"></a>Collect the status information about the current OS.<a name="en-us_topic_0237152334_ul9921101417234"></a><a name="en-us_topic_0237152334_ul9921101417234"></a><ul id="en-us_topic_0237152334_ul9921101417234"><li>HardWareInfo</li><li>CPU (cat /proc/cpuinfo) </li><li>Memory (cat /proc/meminfo) </li><li>Disks (df -h) </li><li>RunTimeInfo </li><li>topStatus (ps ux) </li><li>ioStat (iostat -xm 2 3) </li><li>Network status (cat /proc/net/dev) </li><li>Memory usage (free -m) </li></ul>
</div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p11283122310"><a name="en-us_topic_0237152334_p11283122310"></a><a name="en-us_topic_0237152334_p11283122310"></a>Yes </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row61219372311"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p111263102314"><a name="zh-cn_topic_0237152334_p111263102314"></a><a name="zh-cn_topic_0237152334_p111263102314"></a>Database</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237152334_p103186476250"><a name="en-us_topic_0237152334_p103186476250"></a><a name="en-us_topic_0237152334_p103186476250"></a>For details, see table "System catalogs and views supported by gs_collector."</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237152334_p127501419122615"><a name="en-us_topic_0237152334_p127501419122615"></a><a name="en-us_topic_0237152334_p127501419122615"></a>Collect system views or system catalogs.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p022210297269"><a name="en-us_topic_0237152334_p022210297269"></a><a name="en-us_topic_0237152334_p022210297269"></a>Yes. Information about the pg_locks, pg_stat_activity, and pg_thread_wait_status views is collected by default.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row101318382316"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p6133313233"><a name="zh-cn_topic_0237152334_p6133313233"></a><a name="zh-cn_topic_0237152334_p6133313233"></a>Log</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p8657174819262"><a name="zh-cn_topic_0237152334_p8657174819262"></a><a name="zh-cn_topic_0237152334_p8657174819262"></a>DataNode</p>
<p id="zh-cn_topic_0237152334_p46574483267"><a name="zh-cn_topic_0237152334_p46574483267"></a><a name="zh-cn_topic_0237152334_p46574483267"></a>ClusterManager</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0237152334_ul122531334158"></a><a name="en-us_topic_0237152334_ul122531334158"></a><ul id="en-us_topic_0237152334_ul122531334158"><li>Collect pg_log and gs_profile of the data node.</li><li>The ClusterManager log information to be collected: <a name="en-us_topic_0237152334_ul19311954111513"></a><a name="en-us_topic_0237152334_ul19311954111513"></a><ul id="en-us_topic_0237152334_ul19311954111513"><li>om</li><li>gs_ctl</li><li>gs_guc</li><li>gs_initdb</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p1014133162314"><a name="en-us_topic_0237152334_p1014133162314"></a><a name="en-us_topic_0237152334_p1014133162314"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row71412352318"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p1514135239"><a name="zh-cn_topic_0237152334_p1514135239"></a><a name="zh-cn_topic_0237152334_p1514135239"></a>Config</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p20995135132817"><a name="zh-cn_topic_0237152334_p20995135132817"></a><a name="zh-cn_topic_0237152334_p20995135132817"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0237152334_ul498532372610"></a><a name="en-us_topic_0237152334_ul498532372610"></a><ul id="en-us_topic_0237152334_ul498532372610"><li>Collect the data node configuration information: <a name="en-us_topic_0237152334_ul1741811415273"></a><a name="en-us_topic_0237152334_ul1741811415273"></a><ul id="en-us_topic_0237152334_ul1741811415273"><li>postgresql.conf</li><li>gaussdb.state</li><li>pg_hba.conf</li><li>pg_control</li><li>pg_replslot</li><li>pg_ident.conf</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p515933239"><a name="en-us_topic_0237152334_p515933239"></a><a name="en-us_topic_0237152334_p515933239"></a>Yes </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row181513312235"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p81518317232"><a name="zh-cn_topic_0237152334_p81518317232"></a><a name="zh-cn_topic_0237152334_p81518317232"></a>Gstack</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p979113464295"><a name="zh-cn_topic_0237152334_p979113464295"></a><a name="zh-cn_topic_0237152334_p979113464295"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237152334_p41510310234"><a name="en-us_topic_0237152334_p41510310234"></a><a name="en-us_topic_0237152334_p41510310234"></a>Run the <strong>gstack</strong> command to obtain the current stack information of the data node.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p12151316239"><a name="en-us_topic_0237152334_p12151316239"></a><a name="en-us_topic_0237152334_p12151316239"></a>No </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row1715638237"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p2151038237"><a name="zh-cn_topic_0237152334_p2151038237"></a><a name="zh-cn_topic_0237152334_p2151038237"></a>CoreDump</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237152334_p86827507318"><a name="en-us_topic_0237152334_p86827507318"></a><a name="en-us_topic_0237152334_p86827507318"></a>gs_ctl, gaussdb, GaussMaster, AioWorker, AlarmChecker, Archiver, Auditor, AutoVacLauncher, AutoVacWorker, AuxMain, BackendMode, BgWriter, BootStrap, Catchup, CBMWriter, Checkpointer, CommAuxStream, CommPoolCleane, CommRcvStream, CommRcvWorker, CommSendStream, CpMonitor, DataRcvWriter, DataReceiver, DataSender, ExtremeRTO, FencedUDFMaster, Heartbeater, JobExecutor, JobScheduler, LWLockMonitor, PageWriter, ParallelRecov, PercentileJob, Reaper, RemoteSrv, StartupProcess, StatCollector, Stream, SysLogger, ThdPoolListener, TwoPhaseCleaner, WalRcvWriter, WalReceiver, WalSender, WalWriter, WDRSnapshot, WlmArbiter, WlmCollector, WlmMonitor</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237152334_p5229047123010"><a name="en-us_topic_0237152334_p5229047123010"></a><a name="en-us_topic_0237152334_p5229047123010"></a>Filter the core files of the gaussdb process by time.</p>
<div class="caution" id="en-us_topic_0237152334_note1316119421297"><a name="en-us_topic_0237152334_note1316119421297"></a><a name="en-us_topic_0237152334_note1316119421297"></a><span class="cautiontitle"> Note: </span><div class="cautionbody"><p id="en-us_topic_0237152334_p016104214295"><a name="en-us_topic_0237152334_p016104214295"></a><a name="en-us_topic_0237152334_p016104214295"></a>Configure the core as follows: Add the core file format <strong>core-%e-%p-%t</strong> to the <strong>/proc/sys/opengauss/core_pattern</strong> file.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p181614310230"><a name="en-us_topic_0237152334_p181614310230"></a><a name="en-us_topic_0237152334_p181614310230"></a>No </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row41613192315"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p71613318234"><a name="zh-cn_topic_0237152334_p71613318234"></a><a name="zh-cn_topic_0237152334_p71613318234"></a>XLog</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p566195453213"><a name="zh-cn_topic_0237152334_p566195453213"></a><a name="zh-cn_topic_0237152334_p566195453213"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237152334_p0174312313"><a name="en-us_topic_0237152334_p0174312313"></a><a name="en-us_topic_0237152334_p0174312313"></a>Collect Xlogs that are filtered by time.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p16174392310"><a name="en-us_topic_0237152334_p16174392310"></a><a name="en-us_topic_0237152334_p16174392310"></a>No </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row6136229183317"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p9138429193316"><a name="zh-cn_topic_0237152334_p9138429193316"></a><a name="zh-cn_topic_0237152334_p9138429193316"></a>Plan</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p713892916335"><a name="zh-cn_topic_0237152334_p713892916335"></a><a name="zh-cn_topic_0237152334_p713892916335"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><div class="p" id="en-us_topic_0237152334_p45021115203417"><a name="en-us_topic_0237152334_p45021115203417"></a><a name="en-us_topic_0237152334_p45021115203417"></a>Collect planned reproduction information: <a name="en-us_topic_0237152334_ul16465440162515"></a><a name="en-us_topic_0237152334_ul16465440162515"></a><ul id="en-us_topic_0237152334_ul16465440162515"><li>If you enter an asterisk (*), the planned reproduction information of all databases is collected. </li><li>If you enter a specific database name, the planned reproduction information of the specified database is collected. </li></ul>
</div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237152334_p8138132953313"><a name="en-us_topic_0237152334_p8138132953313"></a><a name="en-us_topic_0237152334_p8138132953313"></a>No </p>
</td>
</tr>
</tbody>
</table>




## Prerequisites <a name="en-us_topic_0237152334_en-us_topic_0059778085_s7bffe8e9bdec4735885781573a71fb91"></a>

An OS tool (such as **gstack**) that **gs\_collector** requires has been installed. If it is not installed, an error message is displayed, and this collection item is skipped.

## Syntax <a name="en-us_topic_0237152334_en-us_topic_0059778085_s95ba74a509904128ac0326c58acd840c"></a>

-   Collect logs \(as a non-**root** user\).

    ```
    gs_collector --begin-time="BEGINTIME" --end-time="ENDTIME" [-h HOSTNAME | -f HOSTFILE] [--keyword=KEYWORD] [--speed-limit=SPEED] [-o OUTPUT] [-l LOGFILE] [-C CONFIGFILE]
    ```

-   Display help information.

    ```
    gs_collector -? | --help
    ```

-   Display version information.

    ```
    gs_collector -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152334_en-us_topic_0059778085_s7ac81eecbbdd4ae28db3ffe0efb5a947"></a>

-   -h

    Specifies the name of the host whose information is to be collected.

    Value range: host names. If this parameter is not specified, information about all hosts is collected by default.

-   -f

    Specifies the file of a host name list. The file is a plain text file.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-The **-f** and **-h** parameters cannot be used together.

    Value range: a host name list

-   -o

    Saves collected logs as a package into a specified folder.

    If this parameter is not specified, the check results are saved as a package into the directory specified by **tmpMppdbPath** in the configuration file.

    If **tmpMppdbPath** is not configured in the configuration file, the check results are saved as a package into the **/tmp/***user name***\_mppdb/** directory by default.

-   -l

    Specifies a log file and its save path.

- -C

  Specifies the configuration file of the information to be collected. **TypeName** is used to specify the type of the information to be collected. **Content** is used to specify the content of each type of information. **Count** is used to specify the number of times for collecting the information. **Interval** is used to specify the collection interval, in seconds.

  The values of **TypeName** and **Content** cannot be empty.

  **Interval** and **Count** are optional. If **Count** is not specified, the information is collected once by default. If **Interval** is not specified, the interval is 0s. The values of **Interval** and **Count** cannot be smaller than 0.

  If the preceding parameters are not specified, the default configuration file is used.

  The configuration file is in JSON format. The template is as follows:

  ```
  {
      "Collect":
      [
          {"TypeName": "name", "Content":"value","Interval":"seconds", "Count":"count"}
      ]
  }
  ```

  ![](public_sys-resources/icon-note.gif) **NOTE:** 

   For details about the value ranges of **TypeName** and corresponding **Content**, see Table 1 Information to be collected by gs\_collector.
  The **Interval** and **Count** parameters do not take effect when **TypeName** is set to **Log**, **CoreDump**, **Config**, or **XLog**.

  The content of the default configuration file is as follows:

  ```
  {
  "Collect":
  [
  {"TypeName": "System", "Content":"RunTimeInfo, HardWareInfo","Interval":"0", "Count":"1"},
  {"TypeName": "Log", "Content" : "DataNode,ClusterManager", "Interval":"0", "Count":"1"},
  {"TypeName": "Database", "Content": "pg_locks,pg_stat_activity,pg_thread_wait_status","Interval":"0", "Count":"1"},
  {"TypeName": "Config", "Content": "DataNode", "Interval":"0", "Count":"1"}
  ]
  }
  ```

- --keyword=KEYWORD

  Specifies a log file containing the keyword.

  If the keyword contains spaces, quote the keyword with double quotations marks \(""\).

  >![](public_sys-resources/icon-note.gif) **NOTE:**
  >
  >  Logs about the performance are binary logs. The keyword collection function does not support performance log collection.

-   --begin-time

    Start time of the search time range. The input format: yyyymmdd hh:mm

-   --end-time

    End time of the search time range. The input format: yyyymmdd hh:mm

-   --speed-limit

    Specifies the log collection rate. The value is a non-negative integer in the unit of MB/s.

    This parameter is used to prevent high disk or network I/O from being generated during log collection. If database nodes are deployed on the same disk where the *$GAUSSLOG/$PGHOST* path is located, they may become faulty due to high I/O. The value of this parameter must not exceed 1/3 of the minimum value of the disk and network I/O in openGauss.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Examples<a name="en-us_topic_0237152334_en-us_topic_0059778085_sc5fc8de2cfd140fcb92d4f3d1b100ace"></a>

Run the following command to collect OS and log information:

```
gs_collector --begin-time="20180131 23:00" --end-time="20180201 20:00" -h plat1 
Successfully parsed the configuration file.
create Dir.
Successfully create dir.
do system check interval 0 : count 1
Collecting OS information.
Successfully collected OS information.
do database check interval 0 : count 1
Collecting catalog statistics.
Successfully collected catalog statistics.
do log check interval 0 : count 1
Collecting Log files.
Successfully collected Log files.
do Config check 0:1
Collecting Config files.
Successfully collected Config files.
Collecting files.
Successfully collected files.
All results are stored in $PGHOST/collector_20200624_134541.tar.gz.
```

Run the following command to query the collected statistics:

```
tar -zxvf $PGHOST/collector_20200624_134541.tar.gz
collector_20200624_134541/
collector_20200624_134541/plat1.tar.gz
collector_20200624_134541/Detail.log
collector_20200624_134541/Summary.log
cd collector_20200624_134541
tar -zxvf plat1.tar.gz
plat1/
plat1/catalogfiles/
plat1/catalogfiles/gs_clean_20200624_134548283647.txt
plat1/catalogfiles/dn_6001_pg_locks_20200624_134547746215.csv
plat1/catalogfiles/dn_6001_pg_thread_wait_status_20200624_134548068716.csv
plat1/catalogfiles/dn_6001_pg_stat_activity_20200624_134547851117.csv
plat1/configfiles/
plat1/logfiles/
plat1/logfiles/log_20200624_134548540916.tar.gz
plat1/coreDumpfiles/
plat1/gstackfiles/
plat1/systemfiles/
plat1/systemfiles/OS_information_20200624_134542218134.txt
plat1/systemfiles/database_system_info_20200624_134546282006.txt
plat1/planSimulatorfiles/
plat1/xlogfiles/
cd plat1/logfiles/
tar -zxvf log_20200624_134548540916.tar.gz
./
./om/
./om/gs_preinstall-2020-06-24_113654.log
./om/gs_local-2020-06-24_113710.log
./om/gs_install-2020-06-24_113911.log
./om/gs_checkperf-2020-06-24_114311.log
./om/gs_collector-2020-06-24_114240.log
./om/gs_backup-2020-06-24_114101.log
./om/gs_om-2020-06-24_114052.log
./bin/
./bin/gs_initdb/
./bin/gs_initdb/gs_initdb-2020-06-24_114010-current.log
./bin/gs_guc/
./bin/gs_guc/gs_guc-2020-06-24_114033-current.log
./bin/gs_ctl/
./bin/gs_ctl/gs_ctl-2020-06-24_114041-current.log
./pg_log/
./pg_log/dn_6001/
./pg_log/dn_6001/postgresql-2020-06-24_114043.log
./pg_log/dn_6001/postgresql-2020-06-24_114330.log
./pg_log/dn_6001/postgresql-2020-06-24_114316.log
./gs_profile/
./gs_profile/dn_6001_6002/
./gs_profile/dn_6001_6002/postgresql-2020-06-24_114330.prf
./gs_profile/dn_6001_6002/postgresql-2020-06-24_114316.prf
./gs_profile/dn_6001_6002/postgresql-2020-06-24_114043.prf
```
