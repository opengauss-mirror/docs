# gs\_sdr<a name="ZH-CN_TOPIC_0000001263109824"></a>

## 背景信息<a name="zh-cn_topic_0287275995_section431817462"></a>

从openGauss 3.1.0版本开始，openGauss提供了gs\_sdr工具，在不借助额外存储介质的情况下实现跨region的异地容灾。提供流式容灾搭建，灾备升主，计划内主备切换，容灾解除、容灾状态监控功能、显示帮助信息和显示版本号信息等功能。

## 前提条件<a name="zh-cn_topic_0287275995_section1372118241094"></a>

需以操作系统用户omm执行gs\_sdr命令。

## 语法<a name="section95636533613"></a>

-   容灾搭建

    ```
    gs_sdr -t start -m [primary|disaster_standby] [-U DR_USERNAME] [-W DR_PASSWORD] [-X XMLFILE] [--json JSONFILE] [--time-out=SECS] [-l LOGFILE]
    ```

-   灾备升主

    ```
    gs_sdr -t failover [-l LOGFILE] 
    ```

-   计划内主备切换

    ```
    gs_sdr -t switchover -m [primary|disaster_standby] [--time-out=SECS] [-l LOGFILE]
    ```

-   容灾解除

    ```
    gs_sdr -t stop [-X XMLFILE] [--json JSONFILE] [-l LOGFILE]
    ```


-   容灾状态监控

    ```
    gs_sdr -t query [-l LOGFILE]
    ```


## 参数说明<a name="zh-cn_topic_0287275995_section16817173615"></a>

gs\_sdr参数可以分为如下几类：

-   通用参数：
    -   -t

        gs\_sdr命令的类型。

        取值范围：start、failover、switchover、stop、query。

    -   -l

        指定日志文件及存放路径。

        默认值：$GAUSSLOG/om/gs\_sdr-YYYY-MM-DD\_hhmmss.log

    -   -?, --help

        显示帮助信息。

    -   -V, --version

        显示版本号信息。


-   搭建容灾参数：
    -   -m

        期望该集群在容灾关系中成为的角色

        取值范围：primary\(主集群\)或disaster\_standby\(灾备集群\)

    -   -U

        具有流复制权限的容灾用户名称

    -   -W

        容灾用户密码

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >1. 搭建容灾关系前，主集群需创建容灾用户，用于容灾鉴权，主备集群必须使用相同的容灾用户名和密码，一次容灾搭建后，该用户密码不可修改。若需修改容灾用户名与密码，需要解除容灾，使用新的容灾用户重新进行搭建。
        >2. -U、-W 参数如果搭建命令行未带，则在搭建过程中支持交互式输入。

    -   -X

        集群安装时的xml，xml中也可以配置容灾信息用于容灾搭建，即在安装xml的基础上扩展三个字段（"localStreamIpmap1"、"remoteStreamIpmap1"、"remotedataPortBase"）

        新增字段的配置方式如下，加粗字体内容为示例。每行信息均有注释进行说明。

        ```
        <!-- 每台服务器上的节点部署信息 -->
        <DEVICELIST>
        <DEVICE sn="pekpomdev00038">
        <!-- 当前主机上需要部署的主DN个数 -->
        <PARAM name="dataNum" value="1"/>
        <!-- 主DN的基础端口号 -->
        <PARAM name="dataPortBase" value="26000"/>
        <!-- 本集群dn分片各节点用于SSH可信通道的IP与流复制的IP映射关系 -->
        <PARAM name="localStreamIpmap1" value="(10.244.44.216,172.31.12.58),(10.244.45.120,172.31.0.91)"/>
        <!-- 对端集群dn分片各节点用于SSH可信通道的IP与流复制的IP映射关系 -->
        <PARAM name="remoteStreamIpmap1" value="(10.244.45.144,172.31.2.200),(10.244.45.40,172.31.0.38),(10.244.46.138,172.31.11.145),(10.244.48.60,172.31.9.37),(10.244.47.240,172.31.11.125)"/>
        <!-- 对端集群的主dn端口号 -->
        <PARAM name="remotedataPortBase" value="26000"/>
        </DEVICE>
        ```

    -   --json

        带有容灾信息的json文件。

        json文件的配置方式如下，加粗字体内容为示例。

        ```
        {"remoteClusterConf": {"port": 26000, "shards": [[{"ip": "10.244.45.144", "dataIp": "172.31.2.200"}, {"ip": "10.244.45.40", "dataIp": "172.31.0.38"}, {"ip": "10.244.46.138", "dataIp": "172.31.11.145"}, {"ip": "10.244.48.60", "dataIp": "172.31.9.37"}, {"ip": "10.244.47.240", "dataIp": "172.31.11.125"}]]}, "localClusterConf": {"port": 26000, "shards": [[{"ip": "10.244.44.216", "dataIp": "172.31.12.58"}, {"ip": "10.244.45.120", "dataIp": "172.31.0.91"}]]}}
        参数说明：
        # remoteClusterConf：对端集群的dn分片信息。其中port为对端集群主dn的端口，{"ip": "10.244.45.144", "dtaIp": "172.31.2.200"}为对端集群dn分片上各节点用于SSH可信通道的IP与流复制的IP映射关系。
        # localClusterConf：本集群的dn分片信息。其中port为本集群主dn的端口，{"ip": "10.244.44.216", "dtaIp": "172.31.12.58"}为本集群dn分片上各节点用于SSH可信通道的IP与流复制的IP映射关系。
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-X与--json参数支持二选一方式进行配置容灾信息，如果命令行中两个参数全部下发，则以json为准。

    -   --time-out=SECS

        指定超时时间，如果超时，om脚本自动退出。单位：s。

        取值范围：正整数，建议值1200。

        默认值：1200


-   容灾升主参数：
    -   无

-   容灾解除参数：
    -   -X

        集群安装时的xml，需要额外配置容灾信息，即扩展三个字段（"localStreamIpmap1"、"remoteStreamIpmap1"、"remotedataPortBase"）

    -   --json

        带有本端及对端容灾信息的json文件。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-X、--json的配置方式请参考本节容灾搭建参数配置。


-   容灾查询参数：
    -   无。
    -   容灾状态查询结果说明如下：


<a name="zh-cn_topic_0287275995_table1171617665"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275995_row918131719617"><th class="cellrowborder" valign="top" width="16.29162916291629%" id="mcps1.1.6.1.1"><p id="zh-cn_topic_0287275995_p18181171612"><a name="zh-cn_topic_0287275995_p18181171612"></a><a name="zh-cn_topic_0287275995_p18181171612"></a>项目</p>
</th>
<th class="cellrowborder" valign="top" width="12.49124912491249%" id="mcps1.1.6.1.2"><p id="p235823320131"><a name="p235823320131"></a><a name="p235823320131"></a>含义</p>
</th>
<th class="cellrowborder" valign="top" width="10.221022102210222%" id="mcps1.1.6.1.3"><p id="p18300828151317"><a name="p18300828151317"></a><a name="p18300828151317"></a>值</p>
</th>
<th class="cellrowborder" valign="top" width="32.54325432543255%" id="mcps1.1.6.1.4"><p id="zh-cn_topic_0287275995_p18185171620"><a name="zh-cn_topic_0287275995_p18185171620"></a><a name="zh-cn_topic_0287275995_p18185171620"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="28.45284528452845%" id="mcps1.1.6.1.5"><p id="zh-cn_topic_0287275995_p141817173612"><a name="zh-cn_topic_0287275995_p141817173612"></a><a name="zh-cn_topic_0287275995_p141817173612"></a>备注</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275995_row1181917465"><td class="cellrowborder" rowspan="12" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="zh-cn_topic_0287275995_p51816176618"><a name="zh-cn_topic_0287275995_p51816176618"></a><a name="zh-cn_topic_0287275995_p51816176618"></a>hadr_cluster_stat</p>
<p id="p1880163681713"><a name="p1880163681713"></a><a name="p1880163681713"></a></p>
<p id="p18877836101715"><a name="p18877836101715"></a><a name="p18877836101715"></a></p>
<p id="p6875163621715"><a name="p6875163621715"></a><a name="p6875163621715"></a></p>
<p id="p587317364176"><a name="p587317364176"></a><a name="p587317364176"></a></p>
<p id="p1887173613178"><a name="p1887173613178"></a><a name="p1887173613178"></a></p>
<p id="p586993619175"><a name="p586993619175"></a><a name="p586993619175"></a></p>
<p id="p817614184168"><a name="p817614184168"></a><a name="p817614184168"></a></p>
<p id="p46021414173"><a name="p46021414173"></a><a name="p46021414173"></a></p>
<p id="p18246410151717"><a name="p18246410151717"></a><a name="p18246410151717"></a></p>
<p id="p1136134191716"><a name="p1136134191716"></a><a name="p1136134191716"></a></p>
<p id="p1924515721712"><a name="p1924515721712"></a><a name="p1924515721712"></a></p>
</td>
<td class="cellrowborder" rowspan="12" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p19358933111319"><a name="p19358933111319"></a><a name="p19358933111319"></a>流式容灾中数据库实例状态</p>
<p id="p18358123312134"><a name="p18358123312134"></a><a name="p18358123312134"></a></p>
<p id="p1035843311138"><a name="p1035843311138"></a><a name="p1035843311138"></a></p>
<p id="p11359433181316"><a name="p11359433181316"></a><a name="p11359433181316"></a></p>
<p id="p123591033161312"><a name="p123591033161312"></a><a name="p123591033161312"></a></p>
<p id="p133591533191317"><a name="p133591533191317"></a><a name="p133591533191317"></a></p>
<p id="p129190214163"><a name="p129190214163"></a><a name="p129190214163"></a></p>
<p id="p817661811168"><a name="p817661811168"></a><a name="p817661811168"></a></p>
<p id="p1460014181716"><a name="p1460014181716"></a><a name="p1460014181716"></a></p>
<p id="p162468102175"><a name="p162468102175"></a><a name="p162468102175"></a></p>
<p id="p736113415173"><a name="p736113415173"></a><a name="p736113415173"></a></p>
<p id="p18245875178"><a name="p18245875178"></a><a name="p18245875178"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p18301228161319"><a name="p18301228161319"></a><a name="p18301228161319"></a>normal</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p199231717184"><a name="p199231717184"></a><a name="p199231717184"></a>标识该数据库实例未参与流式容灾</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p1919212412160"><a name="p1919212412160"></a><a name="p1919212412160"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row020217369"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1630142871312"><a name="p1630142871312"></a><a name="p1630142871312"></a>full_backup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8909171188"><a name="p8909171188"></a><a name="p8909171188"></a>主数据库实例数据全量复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1694192163015"><a name="p1694192163015"></a><a name="p1694192163015"></a>流式容灾中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row62461715613"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p9301102814139"><a name="p9301102814139"></a><a name="p9301102814139"></a>archive</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18886172181"><a name="p18886172181"></a><a name="p18886172181"></a>主数据库实例日志流式复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1452675710199"><a name="p1452675710199"></a><a name="p1452675710199"></a>流式容灾中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row1525317264"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p0301228171318"><a name="p0301228171318"></a><a name="p0301228171318"></a>backup_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1682453175316"><a name="p1682453175316"></a><a name="p1682453175316"></a>主数据库实例数据全量复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p5193175871910"><a name="p5193175871910"></a><a name="p5193175871910"></a>流式容灾中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row122515171668"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p73021028101310"><a name="p73021028101310"></a><a name="p73021028101310"></a>archive_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8836178184"><a name="p8836178184"></a><a name="p8836178184"></a>主数据库实例日志流式复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1190145871911"><a name="p1190145871911"></a><a name="p1190145871911"></a>流式容灾中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row626181719616"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p13302172816136"><a name="p13302172816136"></a><a name="p13302172816136"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13817176181"><a name="p13817176181"></a><a name="p13817176181"></a>计划内主备倒换中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p171708419168"><a name="p171708419168"></a><a name="p171708419168"></a>流式容灾中主备数据库实例皆有此状态</p>
</td>
</tr>
<tr id="row18919132101614"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1919102171616"><a name="p1919102171616"></a><a name="p1919102171616"></a>restore</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p16791117121814"><a name="p16791117121814"></a><a name="p16791117121814"></a>灾备数据库实例数据全量恢复中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p6919132117162"><a name="p6919132117162"></a><a name="p6919132117162"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row1617510180165"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p171761318181613"><a name="p171761318181613"></a><a name="p171761318181613"></a>restore_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13176718131611"><a name="p13176718131611"></a><a name="p13176718131611"></a>灾备数据库实例全备恢复失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p2176121841617"><a name="p2176121841617"></a><a name="p2176121841617"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row159151418175"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1060191418174"><a name="p1060191418174"></a><a name="p1060191418174"></a>recovery</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p106011461719"><a name="p106011461719"></a><a name="p106011461719"></a>灾备数据库实例日志流式复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p360814151712"><a name="p360814151712"></a><a name="p360814151712"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row424671061713"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p4246710121719"><a name="p4246710121719"></a><a name="p4246710121719"></a>recovery_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1246181091710"><a name="p1246181091710"></a><a name="p1246181091710"></a>灾备数据库实例日志流式复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p924661021719"><a name="p924661021719"></a><a name="p924661021719"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row73601340177"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p153611411712"><a name="p153611411712"></a><a name="p153611411712"></a>promote</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p15361642176"><a name="p15361642176"></a><a name="p15361642176"></a>灾备数据库实例升主中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1036164121712"><a name="p1036164121712"></a><a name="p1036164121712"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row15245270173"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p172452075178"><a name="p172452075178"></a><a name="p172452075178"></a>promote_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18246175179"><a name="p18246175179"></a><a name="p18246175179"></a>灾备数据库实例升主失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p14246147171716"><a name="p14246147171716"></a><a name="p14246147171716"></a>流式容灾中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row14821817175"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p194821316173"><a name="p194821316173"></a><a name="p194821316173"></a>hadr_switchover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1648251191717"><a name="p1648251191717"></a><a name="p1648251191717"></a>流式容灾主备数据库实例计划内倒换进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p148214131710"><a name="p148214131710"></a><a name="p148214131710"></a>百分比</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p948316111170"><a name="p948316111170"></a><a name="p948316111170"></a>倒换进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p13483219177"><a name="p13483219177"></a><a name="p13483219177"></a>-</p>
</td>
</tr>
<tr id="row42595841618"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p8256584165"><a name="p8256584165"></a><a name="p8256584165"></a>hadr_failover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1590754152317"><a name="p1590754152317"></a><a name="p1590754152317"></a>流式容灾灾备数据库实例升主进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p22617589162"><a name="p22617589162"></a><a name="p22617589162"></a>百分比</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p826258151613"><a name="p826258151613"></a><a name="p826258151613"></a>倒换进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p92685801614"><a name="p92685801614"></a><a name="p92685801614"></a>-</p>
</td>
</tr>
<tr id="row17474054111620"><td class="cellrowborder" rowspan="2" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p1047415451616"><a name="p1047415451616"></a><a name="p1047415451616"></a>RTO</p>
<p id="p1148483862115"><a name="p1148483862115"></a><a name="p1148483862115"></a></p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1882919513319"><a name="p1882919513319"></a><a name="p1882919513319"></a>此时发生灾难，数据恢复所需要的时长</p>
<p id="p134842038152120"><a name="p134842038152120"></a><a name="p134842038152120"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p194751454171616"><a name="p194751454171616"></a><a name="p194751454171616"></a>空</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p0475165419163"><a name="p0475165419163"></a><a name="p0475165419163"></a>数据库实例停机，网络异常等导致流式容灾中断</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p15475195421610"><a name="p15475195421610"></a><a name="p15475195421610"></a>流式容灾中仅主数据库实例可查</p>
<p id="p64840389213"><a name="p64840389213"></a><a name="p64840389213"></a></p>
</td>
</tr>
<tr id="row1848333882114"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p12484638152111"><a name="p12484638152111"></a><a name="p12484638152111"></a>非空</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p4484538102113"><a name="p4484538102113"></a><a name="p4484538102113"></a>数据恢复所需要的时长，单位s</p>
</td>
</tr>
<tr id="row5191051121616"><td class="cellrowborder" rowspan="2" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p20192165113165"><a name="p20192165113165"></a><a name="p20192165113165"></a>RPO</p>
<p id="p768414465165"><a name="p768414465165"></a><a name="p768414465165"></a></p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p819245171615"><a name="p819245171615"></a><a name="p819245171615"></a>此时发生灾难，数据库实例丢失的数据时长</p>
<p id="p17675104641612"><a name="p17675104641612"></a><a name="p17675104641612"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p4192751161612"><a name="p4192751161612"></a><a name="p4192751161612"></a>空</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p819210515167"><a name="p819210515167"></a><a name="p819210515167"></a>数据库实例停机，网络异常等导致流式容灾中断</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p91921651151613"><a name="p91921651151613"></a><a name="p91921651151613"></a>流式容灾中仅主数据库实例可查</p>
<p id="p7991201015166"><a name="p7991201015166"></a><a name="p7991201015166"></a></p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row11262171166"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p186731346181611"><a name="p186731346181611"></a><a name="p186731346181611"></a>非空</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13670124611616"><a name="p13670124611616"></a><a name="p13670124611616"></a>数据库实例可能丢失的数据时长，单位s</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="section1428616494387"></a>

-   主集群搭建容灾关系。

    ```
    gs_sdr -t start -m primary -X /opt/install_streaming_primary_cluster.xml --time-out=1200 -U 'hadr_user' -W 'opengauss@123'
    --------------------------------------------------------------------------------
    Streaming disaster recovery start 2b9bc268d8a111ecb679fa163e2f2d28
    --------------------------------------------------------------------------------
    Start create streaming disaster relationship ...
    Got step:[-1] for action:[start].
    Start first step of streaming start.
    Start common config step of streaming start.
    Start generate hadr key files.
    Streaming key files already exist.
    Finished generate and distribute hadr key files.
    Start encrypt hadr user info.
    Successfully encrypt hadr user info.
    Start save hadr user info into database.
    Successfully save hadr user info into database.
    Start update pg_hba config.
    Successfully update pg_hba config.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Successfully check instance status.
    Successfully check cm_ctl is available.
    Successfully check cluster is not under upgrade opts.
    Start checking disaster recovery user.
    Successfully check disaster recovery user.
    Start prepare secure files.
    Start copy hadr user key files.
    Successfully copy secure files.
    Start fourth step of streaming start.
    Starting reload wal_keep_segments value: 16384.
    Successfully reload wal_keep_segments value: 16384.
    Start fifth step of streaming start.
    Successfully set [/omm/CMServer/backup_open][0].
    Start sixth step of streaming start.
    Start seventh step of streaming start.
    Start eighth step of streaming start.
    Waiting main standby connection..
    Main standby already connected.
    Successfully check cluster status is: Normal
    Start ninth step of streaming start.
    Starting reload wal_keep_segments value: {'6001': '128'}.
    Successfully reload wal_keep_segments value: {'6001': '128'}.
    Successfully removed step file.
    Successfully do streaming disaster recovery start.
    ```

-   备集群搭建容灾关系。

    ```
    gs_sdr -t start -m disaster_standby -X /opt/install_streaming_standby_cluster.xml --time-out=1200 -U 'hadr_user' -W 'opengauss@123'
    --------------------------------------------------------------------------------
    Streaming disaster recovery start e34ec1e4d8a111ecb617fa163e77e94a
    --------------------------------------------------------------------------------
    Start create streaming disaster relationship ...
    Got step:[-1] for action:[start].
    Start first step of streaming start.
    Start common config step of streaming start.
    Start update pg_hba config.
    Successfully update pg_hba config.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Successfully check instance status.
    Successfully check cm_ctl is available.
    Successfully check cluster is not under upgrade opts.
    Start build key files from remote cluster.
    Start copy hadr user key files.
    Successfully build and distribute key files to all nodes.
    Start fourth step of streaming start.
    Start fifth step of streaming start.
    Successfully set [/omm/CMServer/backup_open][2].
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Start sixth step of streaming start.
    Start seventh step of streaming start.
    Start eighth step of streaming start.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Start ninth step of streaming start.
    Successfully removed step file.
    Successfully do streaming disaster recovery start.
    ```

-   计划内主集群降备。

    ```
    gs_sdr -t switchover -m disaster_standby
    --------------------------------------------------------------------------------
    Streaming disaster recovery switchover 6897d15ed8a411ec82acfa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster switchover ...
    Streaming disaster cluster switchover...
    Successfully check cluster status is: Normal
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully check cluster is not under upgrade opts.
    Got step:[-1] for action:[switchover].
    Stopping the cluster.
    Successfully stopped the cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Start checking truncation, please wait...
    Stopping the cluster.
    Successfully stopped the cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    .
    The cluster status is Normal.
    Successfully removed step file.
    Successfully do streaming disaster recovery switchover.
    ```

-   计划内备集群升主。

    ```
    gs_sdr -t switchover -m primary
    --------------------------------------------------------------------------------
    Streaming disaster recovery switchover 20542bbcd8a511ecbbdbfa163e77e94a
    --------------------------------------------------------------------------------
    Start streaming disaster switchover ...
    Streaming disaster cluster switchover...
    Waiting for cluster and instances normal...
    Successfully check cluster status is: Normal
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully check cluster is not under upgrade opts.
    Waiting for switchover barrier...
    Got step:[-1] for action:[switchover].
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Successfully removed step file.
    Successfully do streaming disaster recovery switchover.
    ```

-   灾备集群容灾升主。

    ```
    gs_sdr -t failover
    --------------------------------------------------------------------------------
    Streaming disaster recovery failover 65535214d8a611ecb804fa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster failover ...
    Got step:[-1] for action:[failover].
    Successfully check cluster status is: Normal
    Successfully check cluster is not under upgrade opts.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Got step:[-1] for action:[failover].
    Starting drop all node replication slots
    Finished drop all node replication slots
    Stopping the cluster by node.
    Successfully stopped the cluster by node for streaming cluster.
    Start remove replconninfo for instance:6001
    Start remove replconninfo for instance:6002
    Start remove replconninfo for instance:6003
    Start remove replconninfo for instance:6005
    Start remove replconninfo for instance:6004
    Successfully removed replconninfo for instance:6001
    Successfully removed replconninfo for instance:6004
    Successfully removed replconninfo for instance:6003
    Successfully removed replconninfo for instance:6002
    Successfully removed replconninfo for instance:6005
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal...
    Successfully started standby instances.
    Successfully check cluster status is: Normal
    Try to clean hadr user info.
    Successfully clean hadr user info from database.
    Successfully removed step file.
    Successfully do streaming disaster recovery failover.
    ```

-   主集群容灾解除。

    ```
    gs_sdr -t stop -X /opt/install_streaming_standby_cluster.xml
    --------------------------------------------------------------------------------
    Streaming disaster recovery stop dae8539ed8a611ecade9fa163e77e94a
    --------------------------------------------------------------------------------
    Start remove streaming disaster relationship ...
    Got step:[-1] for action:[stop].
    Start first step of streaming stop.
    Start second step of streaming start.
    Successfully check cluster status is: Normal
    Check cluster type succeed.
    Successfully check cluster is not under upgrade opts.
    Start third step of streaming stop.
    Start remove replconninfo for instance:6001
    Start remove replconninfo for instance:6002
    Successfully removed replconninfo for instance:6001
    Successfully removed replconninfo for instance:6002
    Start remove cluster file.
    Finished remove cluster file.
    Start fourth step of streaming stop.
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Start fifth step of streaming start.
    Starting drop all node replication slots
    Finished drop all node replication slots
    Start sixth step of streaming stop.
    Successfully check cluster status is: Normal
    Try to clean hadr user info.
    Successfully clean hadr user info from database.
    Successfully removed step file.
    Successfully do streaming disaster recovery stop.
    ```

-   查询容灾状态。

    ```
    gs_sdr -t query
    --------------------------------------------------------------------------------
    Streaming disaster recovery query 1201b062d8a411eca83efa163e2f2d28
    --------------------------------------------------------------------------------
    Start streaming disaster query ...
    Successfully check cluster is not under upgrade opts.
    Start check archive.
    Start check recovery.
    Start check RPO & RTO.
    Successfully execute streaming disaster recovery query, result:
    {'hadr_cluster_stat': 'archive', 'hadr_failover_stat': '', 'hadr_switchover_stat': '', 'RPO': '0', 'RTO': '0'}
    ```


