# service子命令<a name="ZH-CN_TOPIC_0000001243876531"></a>

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

2.  执行完上述命令后，会在confpath目录下生成dbmind.conf配置文件，用户需要利用文本编辑器进行手动修改。需要修改的配置部分为“指标数据源数据库信息区【TSDB】”、“预测结果存储数据库信息区【METADATABASE】”和“自监控参数配置区【SELF-MONITORING】”相关参数的说明如下：

    ```
    [TSDB] # 时序数据库相关信息，即指标数据源信息
    name = prometheus # 时序数据库类型. 当前仅支持选择'prometheus'.
    host = # 时序数据库IP地址.
    port = # 时序数据库端口号.
     
    [METADATABASE] # 元数据库相关信息，及预测结果存储方式
    dbtype = # 元数据库类型. 可选择: sqlite, opengauss, postgresql。若该配置项名为opengauss, 需关注Python驱动事宜，可参考下文中关于Python驱动的提示。
    host = # 元数据库地址.
    port = # 元数据库端口号.
    username = # 元数据库用户信息.
    password =  # 元数据库密码，将会被加密存储
    database =  # 元数据库库名. 如果选择的数据库类型为SQLite, 则无需填写上述配置项，仅需填写此处。DBMind会根据database配置项的内容，在配置目录中生成对应文件名的SQLite数据库文件。
     
    [SELF-MONITORING] # 自监控参数配置
    detection_interval = 600  # 单位秒. 对openGauss进行健康检查的时间间隔（仅慢SQL根因诊断使用）.
    last_detection_time = 600  # 单位秒. 用于健康检查的监控数据长度（仅慢SQL根因诊断使用）.
    forecasting_future_time = 3600  # 单位秒，时序预测的长度（供时序预测特性使用），同时也是预测功能调度周期
    # 待时序预测进行预测的关键指标项（仅供时序预测特性使用）
    golden_kpi = os_cpu_usage, os_mem_usage, gaussdb_qps_by_instance
     
    [LOG] # 日志相关信息
    maxbytes = 10485760 # 默认值为 10Mb, 单个日志文件的最大大小.如果 maxbytes 为零，则文件无限增长（建议该值不要设置太小，默认即可）.
    backupcount = 1 # 日志文件最大数量.
    level = INFO  # 日志级别，也可配置为 DEBUG, INFO, WARNING, ERROR模式。
    ```

3.  待用户手动修改完上述参数后，需要执行下述命令进行配置项的初始化。在该阶段中，DBMind会初步检查配置项的正确性、加密配置项中出现的明文密码、同时初始化用于存储结果数据的元数据库。

    ```
    gs_dbmind service setup --initialize -c confpath
    ```

4.  完成配置目录初始化过程，可基于该配置目录启动DBMind后台服务。

>![](public_sys-resources/icon-note.gif) **说明：** 
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

>![](public_sys-resources/icon-caution.gif) **注意：** 
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

