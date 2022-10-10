# gs\_collector<a name="ZH-CN_TOPIC_0249632249"></a>

## 背景信息<a name="zh-cn_topic_0237152334_zh-cn_topic_0059778085_section1813744893314"></a>

当openGauss发生故障时，使用此工具收集OS信息、日志信息以及配置文件等信息，来定位问题。可以使用-C参数，指定收集不同的信息内容，具体支持收集的内容信息如[表1](#zh-cn_topic_0237152334_table18101312318)所示。

**表 1**  gs\_collector内容收集对照表

<a name="zh-cn_topic_0237152334_table18101312318"></a>

<table><thead align="left"><tr id="zh-cn_topic_0237152334_row21012382317"><th class="cellrowborder" valign="top" width="15.6%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237152334_p171112382318"><a name="zh-cn_topic_0237152334_p171112382318"></a><a name="zh-cn_topic_0237152334_p171112382318"></a>TypeName</p>
</th>
<th class="cellrowborder" valign="top" width="29.470000000000002%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237152334_p21183192318"><a name="zh-cn_topic_0237152334_p21183192318"></a><a name="zh-cn_topic_0237152334_p21183192318"></a>Content</p>
</th>
<th class="cellrowborder" valign="top" width="29.93%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0237152334_p21116316232"><a name="zh-cn_topic_0237152334_p21116316232"></a><a name="zh-cn_topic_0237152334_p21116316232"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0237152334_p12111832231"><a name="zh-cn_topic_0237152334_p12111832231"></a><a name="zh-cn_topic_0237152334_p12111832231"></a>是否默认收集</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152334_row17118322316"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p121114320238"><a name="zh-cn_topic_0237152334_p121114320238"></a><a name="zh-cn_topic_0237152334_p121114320238"></a>System</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p9173483258"><a name="zh-cn_topic_0237152334_p9173483258"></a><a name="zh-cn_topic_0237152334_p9173483258"></a>HardWareInfo</p>
<p id="zh-cn_topic_0237152334_p6181348172513"><a name="zh-cn_topic_0237152334_p6181348172513"></a><a name="zh-cn_topic_0237152334_p6181348172513"></a>RunTimeInfo</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><div class="p" id="zh-cn_topic_0237152334_p698955702519"><a name="zh-cn_topic_0237152334_p698955702519"></a><a name="zh-cn_topic_0237152334_p698955702519"></a>收集现在操作系统的状态信息：<a name="zh-cn_topic_0237152334_ul9921101417234"></a><a name="zh-cn_topic_0237152334_ul9921101417234"></a><ul id="zh-cn_topic_0237152334_ul9921101417234"><li>HardWareInfo</li><li>Cpu（cat /proc/cpuinfo）</li><li>内存（cat /proc/meminfo）</li><li>磁盘（df -h）</li><li>RunTimeInfo：</li><li>topStatus（ps ux）</li><li>ioStat（iostat -xm 2 3）</li><li>网络状态（cat /proc/net/dev）</li><li>内存使用情况（free -m）</li></ul>
</div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p11283122310"><a name="zh-cn_topic_0237152334_p11283122310"></a><a name="zh-cn_topic_0237152334_p11283122310"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row61219372311"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p111263102314"><a name="zh-cn_topic_0237152334_p111263102314"></a><a name="zh-cn_topic_0237152334_p111263102314"></a>Database</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p103186476250"><a name="zh-cn_topic_0237152334_p103186476250"></a><a name="zh-cn_topic_0237152334_p103186476250"></a>具体列表见<a href="gs_collector工具支持收集的系统表和视图列表.md#zh-cn_topic_0237637502_table15624104912196">表1</a>。</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152334_p127501419122615"><a name="zh-cn_topic_0237152334_p127501419122615"></a><a name="zh-cn_topic_0237152334_p127501419122615"></a>收集系统视图或者系统表的内容。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p022210297269"><a name="zh-cn_topic_0237152334_p022210297269"></a><a name="zh-cn_topic_0237152334_p022210297269"></a>是，默认收集pg_locks、pg_stat_activity和 pg_thread_wait_status三个视图的信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row101318382316"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p6133313233"><a name="zh-cn_topic_0237152334_p6133313233"></a><a name="zh-cn_topic_0237152334_p6133313233"></a>Log</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p8657174819262"><a name="zh-cn_topic_0237152334_p8657174819262"></a><a name="zh-cn_topic_0237152334_p8657174819262"></a>DataNode</p>
<p id="zh-cn_topic_0237152334_p46574483267"><a name="zh-cn_topic_0237152334_p46574483267"></a><a name="zh-cn_topic_0237152334_p46574483267"></a>ClusterManager</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><a name="zh-cn_topic_0237152334_ul122531334158"></a><a name="zh-cn_topic_0237152334_ul122531334158"></a><ul id="zh-cn_topic_0237152334_ul122531334158"><li>收集DataNode的pg_log和gs_profile</li><li>收集ClusterManager的日志信息包括：<a name="zh-cn_topic_0237152334_ul19311954111513"></a><a name="zh-cn_topic_0237152334_ul19311954111513"></a><ul id="zh-cn_topic_0237152334_ul19311954111513"><li>om</li><li>gs_ctl</li><li>gs_guc</li><li>gs_initdb</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p1014133162314"><a name="zh-cn_topic_0237152334_p1014133162314"></a><a name="zh-cn_topic_0237152334_p1014133162314"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row71412352318"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p1514135239"><a name="zh-cn_topic_0237152334_p1514135239"></a><a name="zh-cn_topic_0237152334_p1514135239"></a>Config</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p20995135132817"><a name="zh-cn_topic_0237152334_p20995135132817"></a><a name="zh-cn_topic_0237152334_p20995135132817"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><a name="zh-cn_topic_0237152334_ul498532372610"></a><a name="zh-cn_topic_0237152334_ul498532372610"></a><ul id="zh-cn_topic_0237152334_ul498532372610"><li>收集DataNode的配置信息：<a name="zh-cn_topic_0237152334_ul1741811415273"></a><a name="zh-cn_topic_0237152334_ul1741811415273"></a><ul id="zh-cn_topic_0237152334_ul1741811415273"><li>postgresql.conf</li><li>gaussdb.state</li><li>pg_hba.conf</li><li>pg_control</li><li>pg_replslot</li><li>pg_ident.conf</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p515933239"><a name="zh-cn_topic_0237152334_p515933239"></a><a name="zh-cn_topic_0237152334_p515933239"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row181513312235"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p81518317232"><a name="zh-cn_topic_0237152334_p81518317232"></a><a name="zh-cn_topic_0237152334_p81518317232"></a>Gstack</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p979113464295"><a name="zh-cn_topic_0237152334_p979113464295"></a><a name="zh-cn_topic_0237152334_p979113464295"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152334_p41510310234"><a name="zh-cn_topic_0237152334_p41510310234"></a><a name="zh-cn_topic_0237152334_p41510310234"></a>利用gstack命令得到DataNode的当前堆栈信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p12151316239"><a name="zh-cn_topic_0237152334_p12151316239"></a><a name="zh-cn_topic_0237152334_p12151316239"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row1715638237"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p2151038237"><a name="zh-cn_topic_0237152334_p2151038237"></a><a name="zh-cn_topic_0237152334_p2151038237"></a>CoreDump</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p86827507318"><a name="zh-cn_topic_0237152334_p86827507318"></a><a name="zh-cn_topic_0237152334_p86827507318"></a>gs_ctl、gaussdb、GaussMaster、AioWorker、AlarmChecker、Archiver、Auditor、AutoVacLauncher、AutoVacWorker、AuxMain、BackendMode、BgWriter、BootStrap、Catchup、CBMWriter、Checkpointer、CommAuxStream、CommPoolCleane、CommRcvStream、CommRcvWorker、CommSendStream、CpMonitor、DataRcvWriter、DataReceiver、DataSender、ExtremeRTO、FencedUDFMaster、Heartbeater、JobExecutor、JobScheduler、LWLockMonitor、PageWriter、ParallelRecov、PercentileJob、Reaper、RemoteSrv、StartupProcess、StatCollector、Stream、SysLogger、ThdPoolListener、TwoPhaseCleaner、WalRcvWriter、WalReceiver、WalSender、WalWriter、WDRSnapshot、WlmArbiter、WlmCollector、WlmMonitor</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152334_p5229047123010"><a name="zh-cn_topic_0237152334_p5229047123010"></a><a name="zh-cn_topic_0237152334_p5229047123010"></a>通过时间筛选gaussdb进程的core文件。</p>
<div class="caution" id="zh-cn_topic_0237152334_note1316119421297"><a name="zh-cn_topic_0237152334_note1316119421297"></a><a name="zh-cn_topic_0237152334_note1316119421297"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0237152334_p016104214295"><a name="zh-cn_topic_0237152334_p016104214295"></a><a name="zh-cn_topic_0237152334_p016104214295"></a>关于Core的配置和方式请按照如下要求：在/proc/sys/opengauss/core_pattern文件中添加core文件的格式：core-%e-%p-%t。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p181614310230"><a name="zh-cn_topic_0237152334_p181614310230"></a><a name="zh-cn_topic_0237152334_p181614310230"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row41613192315"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p71613318234"><a name="zh-cn_topic_0237152334_p71613318234"></a><a name="zh-cn_topic_0237152334_p71613318234"></a>XLog</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p566195453213"><a name="zh-cn_topic_0237152334_p566195453213"></a><a name="zh-cn_topic_0237152334_p566195453213"></a>DataNode</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152334_p0174312313"><a name="zh-cn_topic_0237152334_p0174312313"></a><a name="zh-cn_topic_0237152334_p0174312313"></a>通过时间筛选收集xlog。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p16174392310"><a name="zh-cn_topic_0237152334_p16174392310"></a><a name="zh-cn_topic_0237152334_p16174392310"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152334_row6136229183317"><td class="cellrowborder" valign="top" width="15.6%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152334_p9138429193316"><a name="zh-cn_topic_0237152334_p9138429193316"></a><a name="zh-cn_topic_0237152334_p9138429193316"></a>Plan</p>
</td>
<td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152334_p713892916335"><a name="zh-cn_topic_0237152334_p713892916335"></a><a name="zh-cn_topic_0237152334_p713892916335"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="29.93%" headers="mcps1.2.5.1.3 "><div class="p" id="zh-cn_topic_0237152334_p45021115203417"><a name="zh-cn_topic_0237152334_p45021115203417"></a><a name="zh-cn_topic_0237152334_p45021115203417"></a>收集计划复现信息：<a name="zh-cn_topic_0237152334_ul16465440162515"></a><a name="zh-cn_topic_0237152334_ul16465440162515"></a><ul id="zh-cn_topic_0237152334_ul16465440162515"><li>用户输入*表示收集所有数据库上的计划复现信息。</li><li>用户输入具体的数据库名称表示收集指定数据库上的计划复现信息。</li></ul>
</div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152334_p8138132953313"><a name="zh-cn_topic_0237152334_p8138132953313"></a><a name="zh-cn_topic_0237152334_p8138132953313"></a>否</p>
</td>
</tr>
</tbody>
</table>




## 前提条件<a name="zh-cn_topic_0237152334_zh-cn_topic_0059778085_s7bffe8e9bdec4735885781573a71fb91"></a>

日志收集工具依赖操作系统工具，例如gstack为其中一种，如果未安装该工具，则提示错误后，跳过该收集项。

## 语法<a name="zh-cn_topic_0237152334_zh-cn_topic_0059778085_s95ba74a509904128ac0326c58acd840c"></a>

-   日志收集（非root用户）

    ```
    gs_collector --begin-time="BEGINTIME" --end-time="ENDTIME" [-h HOSTNAME | -f HOSTFILE] [--keyword=KEYWORD] [--speed-limit=SPEED] [-o OUTPUT] [-l LOGFILE] [-C CONFIGFILE]
    ```

-   显示帮助信息

    ```
    gs_collector -? | --help
    ```

-   显示版本号信息

    ```
    gs_collector -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152334_zh-cn_topic_0059778085_s7ac81eecbbdd4ae28db3ffe0efb5a947"></a>

-   -h

    收集信息的主机名称。

    取值范围：主机名称，如果不指定则默认收集所有主机的信息。

-   -f

    主机名称列表文件。该文件为纯文本格式。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-f和-h参数不能同时使用。

    取值范围：主机名称列表。

-   -o

    将收集日志以压缩包形式输出到指定的文件夹。

    不指定则将检查结果以压缩包形式输出到配置文件中tmpMppdbPath选项所指定的目录中。

    若配置文件中未配置tmpMppdbPath选项，则默认将检查结果以压缩包形式输出到“/tmp/用户名\_mppdb/”目录中。

-   -l

    指定的日志文件以及存放路径。

- -C

  指定待收集内容的配置文件，利用TypeName指定需要收集的信息类型，利用Content指定每一类信息的具体内容，利用Count指定此类信息收集的次数，利用Interval指定收集间隔，单位为秒。

  TypeName和Content不允许缺失或者内容为空。

  Interval和Count可以不指定，如果没有指定Count，则默认收集一次。如果没有指定Interval则表示间隔为0秒，Interval和Count的值不能小于0。

  如果不指定则使用默认的配置文件。

  配置文件格式采用json格式，模板如下：

  ```
  {
      "Collect":
      [
          {"TypeName": "name", "Content":"value","Interval":"seconds", "Count":"count"}
      ]
  }
  ```

  ![](public_sys-resources/icon-note.gif) **说明：**

   TypeName和对应的Content取值范围见表1gs\_collector内容收集对照表。
  对于Log、CoreDump、Config和XLog四种类型，Interval和Count参数不生效。

  默认配置文件内容如下：

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

  包含关键字KEYWORD的日志文件。

  若关键字KEYWORD中含有空格，需要使用双引号包围。

  ![](public_sys-resources/icon-note.gif)  **说明：**
   
  性能日志为二进制日志，关键字搜集功能不支持该日志的搜集。

-   --begin-time

    日志的开始时间。输入格式为“yyyymmdd hh:mm”。

-   --end-time

    日志的结束时间。输入格式为“yyyymmdd hh:mm”。

-   --speed-limit

    日志收集时的收集速率，输入格式为非负整数，单位为MB/s。

    该参数主要是为了防止日志收集过程中产生过高的磁盘或网络IO，导致数据库节点故障（如果它们与$GAUSSLOG/$PGHOST部署在同一个磁盘上）。该值应当不超过openGauss内上述磁盘IO与网络IO速率的最小值的1/3。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152334_zh-cn_topic_0059778085_sc5fc8de2cfd140fcb92d4f3d1b100ace"></a>

执行如下命令收集OS信息和日志信息。

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

查看收集到的统计信息。

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

