# gs\_ddr

## 背景信息<a name="zh-cn_topic_0287275995_section431817462"></a>

为了简化手动部署及使用资源池化双集群[网络双集群|dorado存储双集群]的过程，为用户提供更加简单快捷的使用体验，openGauss提供了gs\_ddr工具。

该工具可完成自动化容灾搭建、容灾升主、计划内主备切换、容灾解除、容灾状态监控功能、显示帮助信息和显示版本号信息等功能。

## 约束条件<a name="zh-cn_topic_0287275995_section1372118241094"></a>

-    搭建容灾的两个集群必须是具备cm工具的集群。
-    搭建容灾的主备集群版本号必须相同。
-    容灾双集群搭建前不支持已存在级联备。
-    搭建容灾的两个集群的初始数据库用户及密码必须相同，所有指令需在数据库用户下执行；
-    如果搭建容灾的两个集群存在数据不一致情况，在进行容灾搭建命令执行时，会对灾备集群进行全量build完成初始化，搭建前请确认清楚。
-    容灾搭建指令、计划内主备切换指令执行，需要同时在主备集群（执行节点：集群内主备节点均可）执行对应指令。因为主备集群执行过程会进行交互等待。
-    搭建容灾关系前，主集群需创建容灾用户，用于容灾鉴权，主备集群必须使用相同的容灾用户名和密码，一次容灾搭建后，该用户密码不可修改。若需修改容灾用户名与密码，需要解除容灾，使用新的容灾用户重新进行搭建。容灾用户密码中不可包含以下字符“| ;&$<>`'"{}()[]~*?!\n-空白”。
-    搭建容灾关系时，如果集群副本数<=2，会设置most_available_sync为on，在容灾解除或者failover后此参数不会恢复初始值，持续保证集群为最大可用模式。
-    搭建容灾关系时，会设置synchronous_commit为on，解除容灾或failover升主时恢复初始值。灾备集群可读不可写。
-    灾备集群通过failover命令升主后，和原主集群灾备关系将失效，需要重新搭建容灾关系。
-    在主数据库实例和灾备数据库实例处于normal状态时可进行容灾搭建；在主数据库实例处于normal态并且灾备数据库实例已经升主的情况下，主数据库实例可执行容灾解除，其他数据库实例状态不支持。在主数据库实例和灾备数据库实例处于normal状态时，通过计划内switchover命令，-    主数据库实例可切换为灾备数据库实例，灾备数据库实例可切换为主数据库实例。灾备数据库实例处于非Normal且非Degraded状态时，无法升主，无法作为灾备数据库实例继续提供容灾服务，需要手动修复或重建灾备数据库实例。
-    灾备集群DN多数派故障或者CMS、DN全故障，无法启动容灾，灾备集群无法升主，无法作为灾备集群，需要重建灾备集群。
-    主集群如果进行了强切操作，需要重建灾备集群。
-    主备集群都支持gs_probackup工具中全备和增备。
-    容灾关系搭建之后，不支持DN实例端口修改。
-    建立容灾关系的主数据库实例与灾备数据库实例之间不支持GUC参数的同步。
-    主备集群不支持节点替换、修复、升降副本，DCF模式。
-    当灾备数据库实例为2副本时，灾备数据库实例在1个副本损坏时，仍可以升主对外提供服务，如果剩余的这个副本也损坏，将导致不可避免的数据丢失。
-    容灾状态下仅支持灰度升级，且继承原升级约束，容灾状态下升级需要遵循先升级主集群，再升级备集群，再提交备集群，再提交主集群的顺序。
-    建议对于容灾双集群流复制IP的选择，应考虑尽量使集群内的网络平面与跨集群网络平面分离，便于压力分流并提高安全性。
-    升级过程中不支持容灾搭建、主备切换、容灾升主、容灾查询、容灾解除操作。
-    需以操作系统用户omm执行gs\_ddr命令。

## 语法<a name="section95636533613"></a>

-   容灾搭建

    ```python
    gs_ddr -t start -m [primary|disaster_standby] --disaster_type [dorado|stream] [-X XMLFILE] [--json JSONFILE] [--time-out=SECS] [-l LOGFILE]
    ```

-   容灾升主

    ```python
    gs_ddr -t failover [-l LOGFILE] --disaster_type [dorado|stream]
    ```

-   计划内主备切换

    ```python
    gs_ddr -t switchover -m [primary|disaster_standby] [--time-out=SECS] [-l LOGFILE] --disaster_type [dorado|stream]
    ```

-   容灾解除

    ```python
    gs_ddr -t stop [-X XMLFILE] [--json JSONFILE] [-l LOGFILE]
    ```


-   容灾状态监控

    ```python
    gs_ddr -t query [-l LOGFILE]
    ```


## 参数说明<a name="zh-cn_topic_0287275995_section16817173615"></a>

gs\_ddr参数可以分为如下几类：

-   通用参数：
    -   -t

        gs\_ddr命令的类型。

        取值范围：start、failover、switchover、stop、query。

    -   -l

        指定日志文件及存放路径。

        默认值：$GAUSSLOG/om/gs\_ddr-YYYY-MM-DD\_hhmmss.log

    -   -?, --help

        显示帮助信息。

    -   -V, --version

        显示版本号信息。


-   搭建容灾参数：
    -   -m

        期望该集群在容灾关系中成为的角色

        取值范围：primary\(主集群\)或disaster\_standby\(灾备集群\)

    -   -X

        集群安装时的xml，xml中也可以配置容灾信息用于容灾搭建，即在安装xml的基础上扩展三个字段（"localStreamIpmap1"、"remoteStreamIpmap1"、"remotedataPortBase"）

        新增字段的配置方式如下，加粗字体内容为示例。每行信息均有注释进行说明。

        ```xml
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

        ```json
        {
            "remoteClusterConf": {
                "port": 26000,
                "shards": [[
                    {"ip": "10.244.45.144", "dataIp": "172.31.2.200"},
                    {"ip": "10.244.45.40", "dataIp": "172.31.0.38"},
                    {"ip": "10.244.46.138", "dataIp": "172.31.11.145"},
                    {"ip": "10.244.48.60", "dataIp": "172.31.9.37"},
                    {"ip": "10.244.47.240", "dataIp": "172.31.11.125"}
                ]]
            },
            "localClusterConf": {
                "port": 26000,
                "shards": [[
                    {"ip": "10.244.44.216", "dataIp": "172.31.12.58"},
                    {"ip": "10.244.45.120", "dataIp": "172.31.0.91"}
                ]]
            }
        }
        参数说明：
        # remoteClusterConf：对端集群的dn分片信息。其中port为对端集群主dn的端口，{"ip": "10.244.45.144", "dataIp": "172.31.2.200"}为对端集群dn分片上各节点用于SSH可信通道的IP与流复制的IP映射关系。
        # localClusterConf：本集群的dn分片信息。其中port为本集群主dn的端口，{"ip": "10.244.44.216", "dataIp": "172.31.12.58"}为本集群dn分片上各节点用于SSH可信通道的IP与流复制的IP映射关系。
        ```

        >![](public_sys-resources/icon-note.png) **说明：** 
        >
        >-X与--json参数支持二选一方式进行配置容灾信息，如果命令行中两个参数全部下发，则以json为准。

    -   --time-out=SECS

        指定超时时间，主集群会等待备集群连接的超时时间，超时则判定失败，om脚本自动退出。单位：s。

        取值范围：正整数，建议值1200。

        默认值：1200

        >![](public_sys-resources/icon-note.png) **说明：**
        >
        >需要注意的是，build和start集群都有自己的超时时间设置。对于build集群，默认的超时时间为1209600秒（14天），如果在这个时间内没有完成构建操作，将自动退出。而对于start集群，默认的超时时间为604800秒（一周），即一周内如果没有完成启动操作，将自动退出。如果不指定--time-out=SECS参数，那么在build集群中，超时时间为1200秒后不会自动退出；而在start集群中，超时时间为1200秒后也不会自动退出。

    -   --disaster_type

        指定双集群类型。

-   容灾升主参数：
    
    -   --disaster_type

        指定双集群类型。
    
-   容灾解除参数：
    -   -X

        集群安装时的xml，需要额外配置容灾信息，即扩展三个字段（"localStreamIpmap1"、"remoteStreamIpmap1"、"remotedataPortBase"）

    -   --json

        带有本端及对端容灾信息的json文件。

        >![](public_sys-resources/icon-note.png) **说明：** 
        >
        >-X、--json的配置方式请参考本节容灾搭建参数配置。


-   容灾查询参数：
    -   无
    
    容灾状态查询结果说明如下：


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
<td class="cellrowborder" rowspan="12" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p19358933111319"><a name="p19358933111319"></a><a name="p19358933111319"></a>容灾双集群中数据库实例状态</p>
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
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p199231717184"><a name="p199231717184"></a><a name="p199231717184"></a>标识该数据库实例未参与容灾双集群</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p1919212412160"><a name="p1919212412160"></a><a name="p1919212412160"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row020217369"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1630142871312"><a name="p1630142871312"></a><a name="p1630142871312"></a>full_backup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8909171188"><a name="p8909171188"></a><a name="p8909171188"></a>主数据库实例数据全量复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1694192163015"><a name="p1694192163015"></a><a name="p1694192163015"></a>容灾双集群中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row62461715613"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p9301102814139"><a name="p9301102814139"></a><a name="p9301102814139"></a>archive</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18886172181"><a name="p18886172181"></a><a name="p18886172181"></a>主数据库实例日志复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1452675710199"><a name="p1452675710199"></a><a name="p1452675710199"></a>容灾双集群中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row1525317264"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p0301228171318"><a name="p0301228171318"></a><a name="p0301228171318"></a>backup_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1682453175316"><a name="p1682453175316"></a><a name="p1682453175316"></a>主数据库实例数据全量复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p5193175871910"><a name="p5193175871910"></a><a name="p5193175871910"></a>容灾双集群中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row122515171668"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p73021028101310"><a name="p73021028101310"></a><a name="p73021028101310"></a>archive_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p8836178184"><a name="p8836178184"></a><a name="p8836178184"></a>主数据库实例日志复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1190145871911"><a name="p1190145871911"></a><a name="p1190145871911"></a>容灾双集群中仅主数据库实例有此状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275995_row626181719616"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p13302172816136"><a name="p13302172816136"></a><a name="p13302172816136"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13817176181"><a name="p13817176181"></a><a name="p13817176181"></a>计划内主备倒换中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p171708419168"><a name="p171708419168"></a><a name="p171708419168"></a>容灾双集群中主备数据库实例皆有此状态</p>
</td>
</tr>
<tr id="row18919132101614"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1919102171616"><a name="p1919102171616"></a><a name="p1919102171616"></a>restore</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p16791117121814"><a name="p16791117121814"></a><a name="p16791117121814"></a>灾备数据库实例数据全量恢复中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p6919132117162"><a name="p6919132117162"></a><a name="p6919132117162"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row1617510180165"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p171761318181613"><a name="p171761318181613"></a><a name="p171761318181613"></a>restore_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p13176718131611"><a name="p13176718131611"></a><a name="p13176718131611"></a>灾备数据库实例全备恢复失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p2176121841617"><a name="p2176121841617"></a><a name="p2176121841617"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row159151418175"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p1060191418174"><a name="p1060191418174"></a><a name="p1060191418174"></a>recovery</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p106011461719"><a name="p106011461719"></a><a name="p106011461719"></a>灾备数据库实例日志复制中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p360814151712"><a name="p360814151712"></a><a name="p360814151712"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row424671061713"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p4246710121719"><a name="p4246710121719"></a><a name="p4246710121719"></a>recovery_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p1246181091710"><a name="p1246181091710"></a><a name="p1246181091710"></a>灾备数据库实例日志复制失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p924661021719"><a name="p924661021719"></a><a name="p924661021719"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row73601340177"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p153611411712"><a name="p153611411712"></a><a name="p153611411712"></a>promote</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p15361642176"><a name="p15361642176"></a><a name="p15361642176"></a>灾备数据库实例升主中</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p1036164121712"><a name="p1036164121712"></a><a name="p1036164121712"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row15245270173"><td class="cellrowborder" valign="top" headers="mcps1.1.6.1.1 "><p id="p172452075178"><a name="p172452075178"></a><a name="p172452075178"></a>promote_fail</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.2 "><p id="p18246175179"><a name="p18246175179"></a><a name="p18246175179"></a>灾备数据库实例升主失败</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.6.1.3 "><p id="p14246147171716"><a name="p14246147171716"></a><a name="p14246147171716"></a>容灾双集群中仅灾备数据库实例有此状态</p>
</td>
</tr>
<tr id="row14821817175"><td class="cellrowborder" valign="top" width="16.29162916291629%" headers="mcps1.1.6.1.1 "><p id="p194821316173"><a name="p194821316173"></a><a name="p194821316173"></a>hadr_switchover_stat</p>
</td>
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1648251191717"><a name="p1648251191717"></a><a name="p1648251191717"></a>容灾双集群主备数据库实例计划内倒换进度展示</p>
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
<td class="cellrowborder" valign="top" width="12.49124912491249%" headers="mcps1.1.6.1.2 "><p id="p1590754152317"><a name="p1590754152317"></a><a name="p1590754152317"></a>容灾双集群灾备数据库实例升主进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="10.221022102210222%" headers="mcps1.1.6.1.3 "><p id="p22617589162"><a name="p22617589162"></a><a name="p22617589162"></a>百分比</p>
</td>
<td class="cellrowborder" valign="top" width="32.54325432543255%" headers="mcps1.1.6.1.4 "><p id="p826258151613"><a name="p826258151613"></a><a name="p826258151613"></a>倒换进度展示</p>
</td>
<td class="cellrowborder" valign="top" width="28.45284528452845%" headers="mcps1.1.6.1.5 "><p id="p92685801614"><a name="p92685801614"></a><a name="p92685801614"></a>-</p>
</td>
</tr>
</tbody>
</table>

## 示例1. 资源池化dorado存储双集群<a name="section1428616494387"></a>

-   主集群搭建容灾关系。

    ```shell
    gs_ddr -t start -m primary --json /usr4/og_sf_ff/dc.json --disaster_type dorado
    --------------------------------------------------------------------------------
    Dorado disaster recovery start 09cb445ee6d311ef897e78b46a3ff63e
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully set ss_double_cluster_mode
    Successfully set cm_guc.
    Please ensure that the "Remote Replication Pairs" configured correctly between the primary cluster and the disaster recovery cluster, with Replication Mode in "Synchronous" state.
    Ready to move on (yes/no)? yes
    Waiting for the main standby connection.
    Main standby already connected.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

-   备集群搭建容灾关系。

    ```shell
    gs_ddr -t start -m disaster_standby --json /usr4/og_sf_ff/dc.json --disaster_type dorado
    --------------------------------------------------------------------------------
    Dorado disaster recovery start 0ce99a28e6d311efa82ef82e3f372fc4
    --------------------------------------------------------------------------------
    Start create dorado storage disaster relationship.
    param.stage = None.
    Got the step for action:[start].
    Successfully check cluster status is: Normal.
    Successfully check instance status.
    Start set ss_disaster_mode
    Start update pg_hba config.
    Starting set application_name param
    Successfully set application_name param.
    Stopping the cluster.
    Successfully stopped the cluster.
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Successfully set ss_double_cluster_mode
    Start start dssserver in main standby node.
    Successfully Start dssserver on node [openGauss79]
    Start build main standby datanode in disaster standby cluster.
    Successfully build main standby in disaster standby cluster on node [openGauss79]
    Stop dssserver instance on main standby node.
    Successfully stop dssserver before start cluster on node [openGauss79]
    Start set all dss instance STORAGE_MODE.
    Successfully set dss cfg STORAGE_MODE to CLUSTER_RAID.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_standby.
    Successfully set cm_guc.
    Please ensure that the "Remote Replication Pairs" configured correctly between the primary cluster and the disaster recovery cluster, with Replication Mode in "Synchronous" state.
    Ready to move on (yes/no)? yes
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    Successfully check cluster status is: Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery start.
    ```

-   计划内主集群降备。

    ```shell
    gs_ddr -t switchover -m disaster_standby --time-out=300 --disaster_type dorado
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover fba8f95ee6d511efa2bc78b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Stopping the cluster.
    Successfully stopped the cluster.
    Successfully do_first_stage_for_switchover.
    Please manually switchover the primary and secondary replication relationship of the "Remote Replication Pairs" in Device Manager, and ensure the "Local Resource Role" is Secondary.Ready to move on (yes/no)? yes
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_standby.
    Starting the cluster.
    Successfully started primary instance. Please wait for standby instances.
    Waiting cluster normal.
    Successfully started standby instances.
    The cluster status is Normal.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

-   计划内备集群升主。

    ```shell
    gs_ddr -t switchover -m primary --time-out=300 --disaster_type dorado
    --------------------------------------------------------------------------------
    Dorado disaster recovery switchover 0010eb1ee6d611efae78f82e3f372fc4
    --------------------------------------------------------------------------------
    Start dorado disaster switchover.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Got the step for action:[switchover].
    Waiting for cluster and all instances normal.
    Successfully do_first_stage_for_switchover.
    Please ensure that the "Remote Replication Pairs" configured correctly, and check the "Local Resource Role" is Primary.Ready to move on (yes/no)? yes
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss79]
    Waiting cluster normal.
    Successfully started datanode instances.
    Waiting for the main standby connection.
    Main standby already connected.
    Successfully removed step file.
    Successfully do dorado disaster recovery switchover.
    ```

-   灾备集群容灾升主。

    ```shell
    gs_ddr -t failover --disaster_type dorado
    --------------------------------------------------------------------------------
    Dorado disaster recovery failover 5078895ce6d811ef859678b46a3ff63e
    --------------------------------------------------------------------------------
    Start dorado disaster recovery failover.
    Got the step for action:[failover].
    Successfully check cluster status is: Normal.
    Parse cluster conf from file.
    Successfully parse cluster conf from file.
    Successfully do_first_stage_for_switchover.
    Please ensure that the "Remote Replication Pairs" configured correctly, and check the "Local Resource Role" is Primary.Ready to move on (yes/no)? yes
    Start reload cm_agent and cm_server param.
    Successfully reload cm guc param on all nodes.
    Start set all dss instance CLUSTER_RUN_MODE.
    Successfully set dss cfg CLUSTER_RUN_MODE to cluster_primary.
    Start failover main standby datanode in disaster standby cluster.
    Successfully Failover main standby in disaster standby cluster on node [openGauss115]
    Waiting cluster normal.
    Successfully started datanode instances.
    Successfully removed step file.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery failover.
    ```

-   主集群容灾解除。

    ```shell
    gs_ddr -t stop --json /usr4/og_sf_ff/dc.json
    --------------------------------------------------------------------------------
    Dorado disaster recovery stop f0308324e6d711efa0f9f82e3f372fc4
    --------------------------------------------------------------------------------
    Start remove dorado disaster recovery relationship.
    Got the step for action:[stop].
    Successfully check cluster status is: Normal.
    Check cluster type succeed.
    Starting remove all node dn instances repl infos.
    Successfully remove all node dn instances repl infos.
    Start remove pg_hba config.
    Finished remove pg_hba config.
    Start remove cluster file.
    Finished remove cluster file.
    Successfully check cluster status is: Normal.
    Finished remove streaming dir.
    Successfully do dorado disaster recovery stop.
    ```

-   查询容灾状态。

    ```shell
    gs_ddr -t query
    --------------------------------------------------------------------------------
    Dorado disaster recovery query 6650b2ece6d611ef8cb278b46a3ffcce
    --------------------------------------------------------------------------------
    Start dorado disaster query.
    Start check archive.
    Start check recovery.
    Successfully executed dorado disaster recovery query, result:
    {'ddr_cluster_stat': 'recovery', 'ddr_failover_stat': '', 'ddr_switchover_stat': ''}
    ```
