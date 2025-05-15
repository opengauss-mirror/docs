# service子命令<a name="ZH-CN_TOPIC_0000002258707500"></a>

该子命令可用于对配置目录进行初始化，同时也可以实现启动和停止后台任务。

## 配置目录初始化<a name="zh-cn_topic_0000002207140354_section47761656204915"></a>

用户可通过“gs\_dbmind service setup”子命令进行配置目录的初始化。该配置文件中可包括DBMind的配置文件、日志等内容。该目录中的部分文件说明：

-   dbmind.conf：DBMind的参数配置文件，用户可通过“gs\_dbmind set”命令进行修改，也可通过文本编辑器进行手动修改。
-   dynamic\_config.db：DBMind服务保存在本地节点的元信息，主要包括算法的超参数、监控阈值等；该文件为DBMind服务元信息，不可由用户直接配置。
-   metric\_map.conf：监控指标映射表，可用于适配到不同采集平台中。例如，在DBMind中，监控到的系统cpu使用率名为os\_cpu\_usage，而用户自行实现的指标采集工具将cpu使用率命名为my\_cpu\_usage\_rate。则在该种情况下，如果想要DBMind中代表cpu使用率的指标名为my\_cpu\_usage\_rate，则需要修改该配置选项。即添加“os\_cpu\_usage = my\_cpu\_usage\_rate”配置项进行映射。对于普通用户，建议直接使用DBMind配套的采集组件和方案，则不涉及修改该配置文件。
-   metric\_value\_range.conf：指定某些具体监控指标的上下限，以防止对该指标进行预测时，超过合理区间；未在该列表中的指标范围默认为\[0, +∞\)。
-   dbmind.pid：该文件保存正在使用该DBMind配置目录的进程PID。
-   dbmind.children.pid：该文件保存DBMind子进程的PID信息，pid之间用逗号隔开。
-   VERSION：生成该配置文件目录的DBMind版本，通过验证版本来避免版本不兼容情况下的使用。
-   logs：该目录用于存储DBMind服务产生的日志，请不要手动修改该目录下的日志文件，否则可能会导致日志变为不可写状态，无法继续更新DBMind操作记录。
-   backtrace.stack：DBMind自身用于定位调试产生的临时文件，包含了当前各个线程的调用栈信息，是通过接收到SIGUSR2信号而产生的。

用户可通过两种方式进行配置目录的初始化，一种为交互式，另一种为非交互式，为保证密码配置过程中的机密性，默认使用交互式。例如，待初始化的配置目录名为confpath，则分别通过下述方法进行配置：

**交互式模式（默认）**

```
gs_dbmind service setup -c confpath
```

执行完毕上述命令后，用户可通过命令行终端对配置项进行交互式配置。

>![](public_sys-resources/icon-caution.gif) **注意：** 
>云原生不支持集群诊断cluster\_diagnose任务。在启动DBMind服务前，需要手动删除DBMind配置文件dbmind.conf中\[TIMED\_TASK\]板块下的task字段中的该任务，否则会导致启动报错。

**非交互式模式（不推荐，会导致敏感数据在初始化加密前明文展示）**

非交互式模式总共分为三个步骤，即创建配置文件、修改配置项、初始化配置。其中第二个步骤需要用户通过文本编辑器手动编辑配置文件。具体步骤如下：

1.  创建配置文件，执行下述命令：

    ```
    gs_dbmind service setup -c confpath --disable-interactive
    ```

2.  执行完上述命令后，会在confpath目录下生成dbmind.conf配置文件，用户需要利用文本编辑器进行手动修改。相关参数的说明如下：

    ```
    # TSDB部分用于配置时序数据库的连接信息。
    # 当前TSDB支持Prometheus，需要在name字段进行相应的选择。
    [TSDB]
    name = prometheus # The type of time-series database. Options: prometheus, influxdb.
    host = # Address of time-series database.
    port = # Port to connect to time-series database.
    username = (null) # User name to connect to time-series database.
    password = (null) # Password to connect to time-series database.
    ssl_certfile = (null) # The certificate file for ssl connections.
    ssl_keyfile = (null) # Certificate private key file.
    ssl_keyfile_password = (null) # Password for ssl keyfile.
    ssl_ca_file = (null)  # CA certificate to validate requests.
    
    # METADATABASE部分用于指定DBMind生成的分析结果的存储位置。
    # 当前支持的数据库类型有SQLite和openGauss。如果使用openGauss数据库，使用时需要注意Python驱动psycopg2的兼容性问题，用户可以选择使用openGauss官方提供的驱动，也可以通过自行编译或修改GUC参数进行适配。
    # 其他信息为连接到该数据库的连接信息，注意用户需要有数据库创建权限。
    [METADATABASE]
    dbtype = sqliteopenGauss # 元数据库类型，选项：openGausssqlite, opengauss
    host = # 元数据库地址，如果配置多个元数据库地址，需要用逗号（,）分隔。
    port = # 元数据库端口，如果配置多个元数据库地址，且port相同，填写一个port即可。如果port不相同，port数量需要和host数量一致，用逗号（,）分隔。
    username = # 元数据库用户名
    password = (null) # 元数据库用户密码
    database = # 元数据库名
    ssl_mode = prefer # SSL连接模式，默认为prefer，选项：disable, prefer, verify-ca.
    
    
    # WORKER用于指定DBMind可以使用的worker子进程数量，如果写0则会进行自适应，即尽可能多地使用CPU资源。
    [WORKER]
    process_num = 0  # 本地节点上的工作进程数，小于或等于零表示自适应，自适应的逻辑为取cpu核数的一半与3的较大值。
    
    # AGENT部分用于指定DBMind连接到openGauss Agent的信息。通过使用该Agent，可以让DBMind获取到被监控实例的即时状态，从而提高分析准确性。同时，也可以向数据库实例下发一些变更动作，如结束某条慢SQL语句（这取决于此处配置的用户是否有足够的权限）。
    # 该master_url地址即为Agent的地址，由于opengauss-exporter承担了Agent的角色，故该地址也就是opengauss-exporter 的地址。
    # 同时，opengauss-exporter是支持HTTPS协议的，所以，此处也可以根据配置指定SSL证书。
    [AGENT]
    distribute_mode = (null) # DBMind微服务模式的开关，配置此处为true时DBMind以微服务模式启动；配置其他内容或空则以全服务的模式启动。在微服务模式下，由于DBMind不做用户管理，因此下列[AGENT]的剩余字段均无需填写。如无特殊说明，后续章节中DBMind的各项组件及功能说明，默认为全服务的模式。云原生形态不支持，配置该字段为true会导致DBMind启动报错退出。
    master_url = # 不配置该参数，即可启动自动发现模式，此时所有在TSDB中注册的代理都会被找到，但是需要配置一套统一的用户名/密码/SSL连接信息。否则，您可以键入主节点的代理 URL，例如，https://127.0.0.1:9187，如果您有多个数据库实例，则需要用逗号（,）分隔它们。
    username =  # 登录监控数据库的用户名。代理凭证。如果配置监控多个数据库实例，且这些数据库实例的用户名和密码不同，则需要输入多组配置用户名，各配置用户名之间用逗号（,）分隔，且需要与上述master_url选项一一对应。
    password = (null) # 监控数据库的登录密码。代理凭证。如果配置监控多个数据库实例，需要用逗号（,）分隔。具体配置方法与上述参数相同。
    ssl_certfile = (null) # SSL连接的证书文件路径。这是可选的。如果配置监控多个数据库实例，需要用逗号（,）分隔。具体配置方法与上述参数相同。
    ssl_keyfile = (null) # SSL连接的私钥文件路径。这是可选的。如果配置监控多个数据库实例，需要用逗号（,）分隔。具体配置方法与上述参数相同。
    ssl_keyfile_password = (null) # SSL私钥文件的密码。这是可选的。如果配置监控多个数据库实例，需要用逗号（,）分隔。
    ssl_ca_file = (null)  # 用于验证请求的CA证书文件路径。这是可选的。如果配置监控多个数据库实例，需要用逗号（,）分隔。具体配置方法与上述参数相同。
    
    [TIMED_TASK_LIST]
    explanation = Configure scheduled tasks including start tasks and intervals # 配置计划任务，包括启动任务和间隔
    current_support_task_list = List of currently supported tasks:  # 当前支持的任务列表
    task1 = anomaly_detection          # 1. 指标异常检测
    task2 = discard_expired_results    # 2. 清理过期数据
    task3 = knob_recommend             # 3. 参数推荐（云原生不支持）
    task4 = slow_query_killer          # 4. 慢SQL查杀（云原生不支持）
    task5 = slow_query_diagnosis       # 5. 慢SQL诊断（云原生不支持）
    task6 = cluster_diagnose           # 6. 集群故障诊断（云原生不支持）
    task7 = agent_update_detect        # 7. 当检测到代理更新时自动更新异常检测器
    task8 = calibrate_security_metrics # 8. 校准security_scenarios.yml提到的安全指标（云原生不支持）
    task9 = check_security_metrics     # 9. 检查security_scenarios.yml提到的安全指标（云原生不支持）
    task10 = update_statistics         # 10. 自动更新指定指标的统计信息
    
    TIMED_TASK表示后台任务配置，通过修改参数启动或停止DBMind运行的后台任务以及任务的运行间隔，单位为秒。
    运行间隔不能低于30秒，最大值为python3支持的整型数字上限，2的63次方减1。
    云原生场景下，仅支持discard_expired_results, anomaly_detection, agent_update_detect, update_statistics四个定时任务，使用不支持的定时任务启动DBMind会导致DBMind报错退出。
    [TIMED_TASK]
    task = discard_expired_results, anomaly_detection, cluster_diagnose, agent_update_detect, update_statistics # 默认reload启动数据清理、异常检测、更新异常检测器和更新指定指标的统计信息任务
    anomaly_detection_interval = 180  # 异常检测任务运行间隔，默认180秒
    slow_query_diagnosis_interval = 120  # 慢SQL诊断任务运行间隔，默认120秒
    knob_recommend_interval = 3600  # 参数推荐任务运行间隔，默认一小时
    slow_query_killer_interval = 30  # 慢SQL查杀任务运行间隔，默认30秒
    cluster_diagnose_interval = 30  # 集群故障诊断运行间隔，默认30秒
    discard_expired_results_interval = 3600  # 数据清理任务运行间隔，默认一小时
    agent_update_detect_interval = 30  # 检测agent更新并自动并自动更新异常检测器间隔，默认30秒
    calibrate_security_metrics_interval = 600 # 校准security_scenarios.yml安全指标间隔，默认10分钟
    check_security_metrics_interval = 600 # 检查security_scenarios.yml安全指标间隔，默认10分钟
    update_statistic_interval = 1800  # 自动更新指定指标统计信息间隔，默认30分钟
    
    # WEB-SERVICE用于DBMind的前台界面展示
    [WEB-SERVICE]
    ssl = true # 默认使用安全的协议，用户需要提供证书路径，否则DBMind服务不能启动；DBMind以微服务模式启动时，该字段强制要求为true
    host = 127.0.0.1  # DBMind-service监听地址
    port = 8080  # DBMind-service监听端口
    ssl_certfile = (null) # SSL连接的证书文件路径；DBMind以微服务模式启动时，该字段必填
    ssl_keyfile = (null) # SSL连接的私钥文件路径；DBMind以微服务模式启动时，该字段必填
    ssl_keyfile_password = (null) # SSl私钥文件的密码，如果没有密码则忽略；DBMind以微服务模式启动时，该字段必填
    ssl_ca_file = (null)  # 用于验证请求的CA证书文件路径；DBMind以微服务模式启动时，该字段必填
    
    # LOG表示设置DBMind的日志记录信息
    [LOG]
    maxbytes = 10485760 # 默认值为10Mb。单个日志文件的最大大小。如果 maxbytes 为零，则文件无限增长
    backupcount = 1 # 日志文件备份数量
    level = INFO  # 日志级别，选项：DEBUG、 INFO,、WARNING,、 ERROR
    log_directory = logs # 日志文件存放的目录
    
    # 下列内容表示给用户进行交互配置时的提示信息，用户无需配置。
    [COMMENT]
    worker = The form of executing compute-intensive tasks. Tasks can be executed locally or distributed to multiple nodes for execution.
    tsdb = Configure the data source for time series data, which come from monitoring the openGauss instance.
    metadatabase = Configure the database to record meta-data, which the database can store meta-data for the forecasting and diagnosis process. The database should be an openGauss instance.
    self-monitoring = Set up parameters for monitoring and diagnosing openGauss instance.
    self-optimization = Set up parameters for openGauss optimization.
    
    [IP_MAP]
    ip_map = (null) # 对于数据ip和管理ip不一致的环境，需要提供对应关系。以下以一主两备数据库实例为例：“primary_data_ip:primary_management_ip,standby1_data_ip:standby1_management_ip,standby2_data_ip:standby2_management_ip”
    ```

3.  待用户手动修改完上述参数后，需要执行下述命令进行配置项的初始化。在该阶段中，DBMind会初步检查配置项的正确性、初始化用于存储结果数据的元数据库表结构和内容，同时也加密配置项中出现的密码。在DBMind运行中，不允许进行该操作。

    ```
    gs_dbmind service setup --initialize -c confpath
    ```

4.  完成配置目录初始化过程，可基于该配置目录启动DBMind后台服务。

>![](public_sys-resources/icon-note.gif) **说明：** 
>1.  配置文件注释信息用于在交互模式下对用户进行提示，有特殊含义不要手动修改或删除；
>2.  需要确保配置项的值与注释信息之间通过空格符分割，否则系统会将注释信息识别为配置项的值；
>3.  配置项中的特殊字符，如果需要转义，则通过转义符“百分号”（%）来转义，例如，用户配置的密码为 “password%”，则应通过“百分号”进行转义，即 “password%%”;
>4.  DBMind Service对外以标准RestfulAPI的方式提供接口，其默认支持https通信，建议用户使用。
>5.  DBMind云侧部署主机目前最小规格8U64G，目前云管控支持容灾主集群纳管，不支持容灾备集群纳管。
>6.  DBMind当前不支持M兼容库作为元数据库进行初始化。
>7.  对于使用ssl证书文件的情况，必须为私钥文件配置密码，在配置文件中为ssl\_keyfile\_password选项。
>8.  DBMind初始化时，会对配置的SSL CA文件及CERT文件进行校验，以确保满足安全要求，检查的范围包括：（1）Public Key Algorithm如果为id-ecpublickey则不能低于224位，如果为rsaencryption则不能低于2048位，如果为dsaencryption则不能低于2048位；（2）Signature Algorithm不能为sha0/md2/md4/md5/sha1/ripemd；（3）证书有效期。
>9.  在对配置项初始化的过程中，DBMind会检查所有涉及密码字段的值的强度，并对明文密码进行加密。如果密码的强弱不符合要求，初始化过程会报错中止。密码的强度校验规则为：（1）长度至少8个字符；（2）至少满足以下两种字符的组合：a）至少一个小写字母；b）至少一个大写字母；c）至少一个数字；d）至少一个特殊字符：\[\~\`!@\#$%^&\*\(\)-\_+\\|\{\};:,<.\>/?\] ；（3）密码不得与用户名相同。

## 启动服务<a name="zh-cn_topic_0000002207140354_section165401522192514"></a>

当用户完成配置目录的初始化后，可基于此配置目录启动DBMind后台服务。例如配置目录为confpath，则启动命令如下：

```
gs_dbmind service start -c confpath
```

DBMind运行过程中如果想启或停止定时任务，首先将配置文件TIMED\_TASK下task中相关功能删除，在执行以下命令，此时DBMind会刷新后台定时任务：

```
gs_dbmind service reload -c confpath
```

如果当前进程已经在运行，用户希望重启该DBMind服务，则可以使用重启命令，即：

```
gs_dbmind service restart -c confpath
```

默认情况下，restart会等待当前DBMind正在执行的任务执行完毕后才会退出并重启服务。如果用户希望强行终止当前正在运行的任务，则可以添加“-f”或“--force”选项，例如：

```
gs_dbmind service restart --force -c confpath
```

## 关闭服务<a name="zh-cn_topic_0000002207140354_section5774204123013"></a>

关闭服务与启动服务类似，其命令行结构更加简单，只需指定配置目录的地址即可。例如配置目录为confpath，则为：

```
gs_dbmind service stop -c confpath
```

DBMind服务会在后台执行完正在运行的任务后自行退出，如需要强行退出，则使用“--force”或“-f”选项。

```
gs_dbmind service -f stop -c confpath
```

>![](public_sys-resources/icon-notice.gif) **须知：** 
>-   \[METADATABASE\]中的元数据库用户需要具有在该数据库下创建表和数据插入更新的权限，否则执行时会出现异常。而且，需要用户提前创建好数据库，否则，会提示无法连接到该数据库的错误。
>-   DBMind尝试为每个配置文件目录启动一个DBMind实例，并通过PID文件记录DBMind实例PID，不支持同一配置文件下启动多个服务。
>-   DBMind提供了requirement.txt文件，用户可以通过该文件安装所需的第三方依赖。
>-   DBMind只支持特定场景的异常修复，对于不能修复的异常则需要云侧进行处理。
>-   DBMind支持元数据库主备切换场景的自动修复，但在修复期间对元数据库的业务操作会执行失败，导致数据无法正常插入、查询或更新。
>-   如果用户在配置目录的dbmind.conf中填写了AGENT下的master\_url，当调用[zh-cn\_topic\_0000002258707524.md](zh-cn_topic_0000002258707524.md)中/v1/api/agents接口更新agent时，如果参数force=true时则不支持更新，该参数只有mater\_url没有填写时支持（会自动查找）。
>-   DBMind当前使用进程池执行特性功能，因此接口侧的响应时间与进程池参数设置和环境等有关，比如用户在confpath目录下的dbmind.conf配置文件中process\_num设置不合理或硬件性能较差等，使进程池负载较重导致[zh-cn\_topic\_0000002258707524.md](zh-cn_topic_0000002258707524.md)中部分接口超时，比如/v1/api/risk-analysis/\{metric\}。

## 命令参考<a name="zh-cn_topic_0000002207140354_section272822583215"></a>

用户可以通过“--help”选项获得该模式的帮助信息，例如：

```
gs_dbmind service --help
```

```
usage:  service [-h] -c DIRECTORY
                [--only-run {discard_expired_results,anomaly_detection,cluster_diagnose,agent_update_detect,update_statistics,knob_recommend,slow_query_killer,slow_query_diagnosis,calibrate_security_metrics,check_security_metrics}]
                [--dry-run] [-f] [--disable-interactive | --initialize]
                {setup,start,stop,restart,reload}

positional arguments:
  {setup,start,stop,restart,reload}
                        perform an action for service

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files
  --only-run {discard_expired_results,anomaly_detection,cluster_diagnose,agent_update_detect,update_statistics,knob_recommend,slow_query_killer,slow_query_diagnosis,calibrate_security_metrics,check_security_metrics}
                        explicitly set a certain task running in the backend
  --dry-run             run the backend task(s) once. the task to run can be specified by the --only-run argument
  -f, --force           force to stop the process and cancel all in-progress tasks
  --disable-interactive
                        edit config file manually
  --initialize          initialize and check configurations after configuring.
```

**表 1**  gs\_dbmind service 子命令说明

<a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="26.412641264126414%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p1129138144517"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p1129138144517"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p1129138144517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="34.583458345834586%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p2029181454"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p2029181454"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p2029181454"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="39.00390039003901%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p6291382451"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p6291382451"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p6291382451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000002207140354_row16616112314312"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_p6616122313314"><a name="zh-cn_topic_0000002207140354_p6616122313314"></a><a name="zh-cn_topic_0000002207140354_p6616122313314"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_p5616423334"><a name="zh-cn_topic_0000002207140354_p5616423334"></a><a name="zh-cn_topic_0000002207140354_p5616423334"></a>动作参数。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0000002207140354_ul613179154816"></a><a name="zh-cn_topic_0000002207140354_ul613179154816"></a><ul id="zh-cn_topic_0000002207140354_ul613179154816"><li>setup：初始化配置目录。</li><li>start：启动服务。</li><li>restart: 重启服务。</li><li>reload: 重新加载配置文件参数。</li><li>stop：停止服务。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000002207140354_row185495841018"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_p116122412518"><a name="zh-cn_topic_0000002207140354_p116122412518"></a><a name="zh-cn_topic_0000002207140354_p116122412518"></a>-c, --conf</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_p184721720498"><a name="zh-cn_topic_0000002207140354_p184721720498"></a><a name="zh-cn_topic_0000002207140354_p184721720498"></a>配置文件目录地址。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002207140354_p7214115063313"><a name="zh-cn_topic_0000002207140354_p7214115063313"></a><a name="zh-cn_topic_0000002207140354_p7214115063313"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002207140354_row105517375810"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_p195619371187"><a name="zh-cn_topic_0000002207140354_p195619371187"></a><a name="zh-cn_topic_0000002207140354_p195619371187"></a>--initialize</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_p1561937283"><a name="zh-cn_topic_0000002207140354_p1561937283"></a><a name="zh-cn_topic_0000002207140354_p1561937283"></a>配置参数初始化。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002207140354_p113091138786"><a name="zh-cn_topic_0000002207140354_p113091138786"></a><a name="zh-cn_topic_0000002207140354_p113091138786"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002207140354_row03641458113510"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_p113642586354"><a name="zh-cn_topic_0000002207140354_p113642586354"></a><a name="zh-cn_topic_0000002207140354_p113642586354"></a>--disable-interactive</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_p133651958103518"><a name="zh-cn_topic_0000002207140354_p133651958103518"></a><a name="zh-cn_topic_0000002207140354_p133651958103518"></a>非交互式输入配置参数。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002207140354_p1136545823511"><a name="zh-cn_topic_0000002207140354_p1136545823511"></a><a name="zh-cn_topic_0000002207140354_p1136545823511"></a>-</p>
</td>
</tr>
<tr id="row12373519102617"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="p11373181982615"><a name="p11373181982615"></a><a name="p11373181982615"></a><span id="ph7773734112716"><a name="ph7773734112716"></a><a name="ph7773734112716"></a>--only-run</span></p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="p4374119172615"><a name="p4374119172615"></a><a name="p4374119172615"></a><span id="ph13639441132712"><a name="ph13639441132712"></a><a name="ph13639441132712"></a>选择只运行的定时任务模块。</span></p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="p03741419162616"><a name="p03741419162616"></a><a name="p03741419162616"></a><span id="ph185301649132717"><a name="ph185301649132717"></a><a name="ph185301649132717"></a>云原生下该参数无效。</span></p>
</td>
</tr>
<tr id="row355813136261"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="p1055871322617"><a name="p1055871322617"></a><a name="p1055871322617"></a><span id="ph14818410102816"><a name="ph14818410102816"></a><a name="ph14818410102816"></a>--dry-run</span></p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="p555891392613"><a name="p555891392613"></a><a name="p555891392613"></a><span id="ph1434315184289"><a name="ph1434315184289"></a><a name="ph1434315184289"></a>只跑一次DBMind的任务，任务执行完毕后退出。</span></p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="p16558181319266"><a name="p16558181319266"></a><a name="p16558181319266"></a><span id="ph17771225202813"><a name="ph17771225202813"></a><a name="ph17771225202813"></a>云原生<span id="ph48529364298"><a name="ph48529364298"></a><a name="ph48529364298"></a>下该参数无效</span>。</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0000002207140354_row10789323132312"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_p187907230230"><a name="zh-cn_topic_0000002207140354_p187907230230"></a><a name="zh-cn_topic_0000002207140354_p187907230230"></a>-f, --force</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_p2790523152318"><a name="zh-cn_topic_0000002207140354_p2790523152318"></a><a name="zh-cn_topic_0000002207140354_p2790523152318"></a>强行退出当前正在执行的任务，可用于restart和stop命令中。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002207140354_p1579032302316"><a name="zh-cn_topic_0000002207140354_p1579032302316"></a><a name="zh-cn_topic_0000002207140354_p1579032302316"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="26.412641264126414%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p132968134510"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p132968134510"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p132968134510"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="34.583458345834586%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p152474092416"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p152474092416"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p152474092416"></a>帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="39.00390039003901%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p94668717174"><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p94668717174"></a><a name="zh-cn_topic_0000002207140354_zh-cn_topic_0283137337_p94668717174"></a>-</p>
</td>
</tr>
</tbody>
</table>

