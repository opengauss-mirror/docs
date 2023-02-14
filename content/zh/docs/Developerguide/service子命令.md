# service子命令

该子命令可用于对配置目录进行初始化，同时也可以实现启动和停止后台任务。

## 配置目录初始化<a name="section47761656204915"></a>

用户可通过 gs\_dbmind service setup 子命令进行配置目录的初始化。该配置文件中可包括DBMind的配置文件、日志等内容。该目录中的部分文件说明：

-   dbmind.conf：DBMind的参数配置文件，用户可通过 gs\_dbmind set 命令进行修改，也可通过文本编辑器进行手动修改。
-   dynamic\_config.db：DBMind服务保存在本地节点的元信息，主要包括算法的超参数、监控阈值等；该文件为DBMind服务元信息，不可由用户直接配置。
-   metric\_map.conf：监控指标映射表，可用于适配到不同采集平台中。例如，在DBMind中，监控到的系统cpu使用率名为os\_cpu\_usage, 而用户自行实现的指标采集工具将cpu使用率命名为my\_cpu\_usage\_rate. 则在该种情况下，如果想要DBMind代表cpu使用率的指标名为my\_cpu\_usage\_rate, 则需要修改该配置选项。即添加“os\_cpu\_usage = my\_cpu\_usage\_rate”配置项进行映射。对于普通用户，建议直接使用DBMind配套的采集组件和方案，则不涉及修改该配置文件。
-   logs: 该目录中用于存储DBMind服务产生的日志。

用户可通过两种方式进行配置目录的初始化，一种为交互式，另一种为非交互式。例如，待初始化的配置目录名为**confpath**, 则分别通过下述方法进行配置：

**交互式模式**

```
gs_dbmind service setup -c confpath --interactive
```

执行完毕上述命令后，用户可通过命令行终端对配置项进行交互式配置。

**非交互式模式**

非交互式模式总共分为三个步骤，即启动配置，修改配置项，初始化配置。其中第二个步骤需要用户通过文本编辑器手动编辑配置文件。具体步骤如下：

1.  启动配置，执行下述命令：

    ```
    gs_dbmind service setup -c confpath
    ```

2. 执行完上述命令后，会在confpath目录下生成dbmind.conf配置文件，用户需要利用文本编辑器进行手动修改。相关参数的说明如下：

   ```
   # TSDB 部分用于指定监控数据库系统的指标存储位置，目前只支持Prometheus.
   # 此处，必填项为Prometheus的IP地址和端口号，其他选项（如username, password, ssl证书信息）取决于用户配置，非必须。
   [TSDB]
   name = prometheus # The type of time-series database. Options: prometheus.
   host = # Address of time-series database.
   port = # Port to connect to time-series database.
   username = (null) # User name to connect to time-series database.
   password = (null) # Password to connect to time-series database.
   ssl_certfile = (null) # The certificate file for ssl connections.
   ssl_keyfile = (null) # Certificate private key file.
   ssl_keyfile_password = (null) # Password for ssl keyfile.
   ssl_ca_file = (null)  # CA certificate to validate requests.

   # METADATABASE 部分用于指定DBMind生成的分析结果的存储位置。
   # 当前支持的数据库类型有SQLite, openGauss以及PostgreSQL. 如果使用openGauss数据库的话，注意Python驱动psycopg2的兼容性问题，用户可以选择使用openGauss官方提供的驱动，也可以通过自行编译或修改GUC参数进行适配。
   # 其他信息为连接到该数据库的连接信息，注意用户需要有数据库创建权限。
   [METADATABASE]
   dbtype = sqlite # Database type. Options: sqlite, opengauss, postgresql.
   host = # Address of meta-data database.
   port = # Port to connect to meta-data database.
   username = # User name to connect to meta-data database.
   password = (null) # Password to connect to meta-data database.
   database = # Database name to connect to meta-data database.

   # WORKER 用于指定DBMind可以使用的worker子进程数量，如果写0则会进行自适应，即尽可能多地使用CPU资源。
   [WORKER]
   process_num = 0  # Number of worker processes on a local node. Less than or equal to zero means adaptive.

   # AGENT 部分用于指定DBMind连接到openGauss Agent的信息。通过使用该Agent，可以让DBMind获取到被监控实例的即时状态，从而提高分析准确性。同时，也可以向数据库实例下发一些变更动作，如结束某条慢SQL语句（这取决于此处配置的用户是否有足够的权限）。
   # 该master_url 地址即为Agent的地址，由于openGauss-exporter承担了Agent的角色，故改地址也就是openGauss-exporter 的地址。
   # 同时，openGauss-exporter是支持Https协议的，所以，此处也可以根据配置指定SSL证书。
   [AGENT]
   master_url =  # The agent URL of the master node. e.g., https://127.0.0.1:9187.
   username = # Username to login the monitoring database. Credential for agent.
   password = # Password to login the monitoring database. Credential for agent.
   ssl_certfile = (null) # The certificate file for ssl connections.
   ssl_keyfile = (null) # Certificate private key file.
   ssl_keyfile_password = (null) # Password for ssl keyfile.
   ssl_ca_file = (null)  # CA certificate to validate requests.

   # SELF-MONITORING 表示“自监控”配置，用于配置监控数据库实例时的参数。
   # detection_interval 表示周期性检查任务的执行频次，单位是秒；
   # last_detection_time 表示每一次检查任务使用的最近数据长度；
   # forecasting_future_time 表示时序预测特性预测未来时间的长度；
   # golden_kpi 表示“黄金KPI”，即重点关注的监控指标；
   # result_storage_retention 表示诊断结果的最长保存时间。
   [SELF-MONITORING]
   detection_interval = 600  # Unit is second. The interval for performing health examination on the openGauss through monitoring metrics.
   last_detection_time = 600  # Unit is second. The time for last detection.
   forecasting_future_time = 3600  # Unit is second. How long the KPI in the future for forecasting. Meanwhile, this is the period for the forecast.
   # The following golden_kpi of monitoring system is vital.
   golden_kpi = os_cpu_usage, os_mem_usage, os_disk_usage, gaussdb_qps_by_instance  # DBMind only measures and detects the golden metrics in the anomaly detection processing.
   result_storage_retention = 604800  # Unit is second. How long should the results retain? If retention is more than the threshold, DBMind will delete them.

   # SELF-OPTIMIZATION 表示“自优化”配置，可以修改下述参数配置，对DBMind的优化结果进行干预，一般使用默认值即可。
   # optimization_interval 的优化任务执行间隔；
   # max_reserved_period 优化结果的最大保存时间；
   # max_index_num 索引建议结果上限；
   # max_index_storage 推荐出的索引的页面占用磁盘空间的上限；
   # max_template_num 索引推荐使用的SQL模板记录SQL语句的上限；
   # kill_slow_query 是否启动慢SQL自动查杀，如果启动慢SQL自动查杀，可以通过set子命令设置查杀阈值，例如将查杀阈值设置为70秒，该值应为正整数，单位是秒：
   # gs_dbmind set slow_sql_threshold max_elapsed_time 70
   [SELF-OPTIMIZATION]
   optimization_interval = 86400  # Unit is second. The interval for generating report.
   max_reserved_period = 100 # Unit is day. Maximum retention time.
   max_index_num = 10 # Maximum number of advised indexes.
   max_index_storage = 100 # Unit is MB.
   max_template_num = 5000 # Maximum number of templates.
   kill_slow_query = false  # Whether to actively check and kill slow query. The default elapsed time of a slow query to be killed is 1 minute.

   # LOG表示设置DMBind的日志记录信息。
   [LOG]
   maxbytes = 10485760 # Default is 10Mb. Maximum size of a single log file. If maxbytes is zero, the file grows indefinitely.
   backupcount = 1 # Number of backups of log files.
   level = INFO  # Options: DEBUG, INFO, WARNING, ERROR.

   # 下列内容表示给用户进行交互配置时的提示信息，用户无需配置。
   [COMMENT]
   worker = The form of executing compute-intensive tasks. Tasks can be executed locally or distributed to multiple nodes for execution.
   tsdb = Configure the data source for time series data, which come from monitoring the openGauss instance.
   metadatabase = Configure the database to record meta-data, which the database can store meta-data for the forecasting and diagnosis process. The database should be an openGauss instance.
   self-monitoring = Set up parameters for monitoring and diagnosing openGauss instance.
   self-optimization = Set up parameters for openGauss optimization.

   ```

3. 待用户手动修改完上述参数后，需要执行下述命令进行配置项的初始化。在该阶段中，DBMind会初步检查配置项的正确性、初始化用于存储结果数据的元数据库表结构和内容，同时也加密配置项中出现的明文密码。

   ```
   gs_dbmind service setup --initialize -c confpath
   ```

4. 完成配置目录初始化过程，可基于该配置目录启动DBMind后台服务。

>![](public_sys-resources/icon-note.png) **说明：**
>1. 配置文件注释信息用于在交互模式下对用户进行提示，有特殊含义不要手动修改或删除；
>2. 需要确保配置项的值与注释信息之间通过空格符分割，否则系统会将注释信息识别为配置项的值；
>3. 配置项中的特殊字符，如果需要转移，则通过转义符“百分号”（%）来转义，例如，用户配置的密码为 "password%", 则应通过“百分号”进行转义，即 "password%%"。

## 启动服务<a name="section165401522192514"></a>

当用户完成配置目录的初始化后，可基于此配置目录启动DBMind后台服务。例如配置目录为confpath，则启动命令如下：

```
gs_dbmind service start -c confpath
```

当执行上述命令后，会提示服务已启动。在未指定任何附加参数时，该命令默认会启动所有的后台任务。如果用户只想启动某一个后台任务，需要添加参数 --only-run. 例如，用户只想启动慢SQL根因分析服务，则为：

```
gs_dbmind service start -c confpath --only-run slow_query_diagnosis
```

## 关闭服务<a name="section5774204123013"></a>

关闭服务与启动服务类似，其命令行结构更加简单，只需指定配置目录的地址即可。例如配置目录为confpath，则为：

```
gs_dbmind service stop -c confpath
```

DBMind服务会在后台执行完正在运行的任务后自行退出。

>![](public_sys-resources/icon-caution.png) **注意：**
>-   \[METADATABASE\]中的元数据库用户需要具有在该数据库下的创表和数据插入更新权限，否则工具执行会出现异常。
>-   当前不支持同一配置文件下分开启动多个服务。
>-   工具提供了requirement.txt文件，用户可以通过该文件安装所需的第三方依赖。

## 命令参考<a name="section272822583215"></a>

用户可以通过 --help 选项获得该模式的帮助信息，例如：

```
gs_dbmind service --help
```

```
usage: service [-h] -c DIRECTORY [--only-run {slow_query_diagnosis,forecast}] [--interactive | --initialize] {setup,start,stop}

positional arguments:
  {setup,start,stop}
                        perform an action for service

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files
  --only-run {slow_query_diagnosis,forecast}
                        explicitly set a certain task running in the backend
  --interactive         configure and initialize with interactive mode
  --initialize          initialize and check configurations after configuring.
```

**表 1**  gs\_dbmind service 子命令说明

<a name="zh-cn_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137337_p1129138144517"><a name="zh-cn_topic_0283137337_p1129138144517"></a><a name="zh-cn_topic_0283137337_p1129138144517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137337_p2029181454"><a name="zh-cn_topic_0283137337_p2029181454"></a><a name="zh-cn_topic_0283137337_p2029181454"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137337_p6291382451"><a name="zh-cn_topic_0283137337_p6291382451"></a><a name="zh-cn_topic_0283137337_p6291382451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row16616112314312"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p6616122313314"><a name="p6616122313314"></a><a name="p6616122313314"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p5616423334"><a name="p5616423334"></a><a name="p5616423334"></a>动作参数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul613179154816"></a><a name="ul613179154816"></a><ul id="ul613179154816"><li>setup：初始化配置目录。</li><li>start：服务启动。</li><li>stop：服务停止。</li></ul>
</td>
</tr>
<tr id="row185495841018"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p116122412518"><a name="p116122412518"></a><a name="p116122412518"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p184721720498"><a name="p184721720498"></a><a name="p184721720498"></a>配置文件目录地址</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7214115063313"><a name="p7214115063313"></a><a name="p7214115063313"></a>-</p>
</td>
</tr>
<tr id="row105517375810"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p195619371187"><a name="p195619371187"></a><a name="p195619371187"></a>--initialize</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1561937283"><a name="p1561937283"></a><a name="p1561937283"></a>配置参数初始化</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p113091138786"><a name="p113091138786"></a><a name="p113091138786"></a>-</p>
</td>
</tr>
<tr id="row03641458113510"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p113642586354"><a name="p113642586354"></a><a name="p113642586354"></a>--interactive</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p133651958103518"><a name="p133651958103518"></a><a name="p133651958103518"></a>交互式输入配置参数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1136545823511"><a name="p1136545823511"></a><a name="p1136545823511"></a>-</p>
</td>
</tr>
<tr id="row106196521215"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p27171031065"><a name="p27171031065"></a><a name="p27171031065"></a>--only-run</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p161918501220"><a name="p161918501220"></a><a name="p161918501220"></a>选择只运行的模块</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul9105143317480"></a><a name="ul9105143317480"></a><ul id="ul9105143317480"><li>forecast：预测模块。</li><li>slow_query_diagnosis：慢SQL根因分析模块。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137337_p132968134510"><a name="zh-cn_topic_0283137337_p132968134510"></a><a name="zh-cn_topic_0283137337_p132968134510"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137337_p152474092416"><a name="zh-cn_topic_0283137337_p152474092416"></a><a name="zh-cn_topic_0283137337_p152474092416"></a>帮助命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137337_p94668717174"><a name="zh-cn_topic_0283137337_p94668717174"></a><a name="zh-cn_topic_0283137337_p94668717174"></a>-</p>
</td>
</tr>
</tbody>
</table>
