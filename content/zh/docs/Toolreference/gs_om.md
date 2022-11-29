# gs\_om<a name="ZH-CN_TOPIC_0249632260"></a>

## 背景信息<a name="section431817462"></a>

openGauss提供了gs\_om工具帮助对openGauss进行维护，包括启动openGauss、停止openGauss、查询openGauss状态、查询静态配置、生成静态配置文件、查询openGauss状态详细信息、生成动态配置文件、SSL证书替换、显示帮助信息和显示版本号信息等功能。

## 前提条件<a name="section1372118241094"></a>

需以操作系统用户omm执行gs\_om命令。

## 语法<a name="section1241317667"></a>

-   启动openGauss

    ```
    gs_om -t start [-h HOSTNAME] [-D dataDir] [--time-out=SECS] [--security-mode=MODE] [--cluster-number=None] [-l LOGFILE]
    ```

-   停止openGauss

    ```
    gs_om -t stop [-h HOSTNAME] [-D dataDir]  [--time-out=SECS] [-m MODE] [-l LOGFILE]
    ```

-   重启openGauss

    ```
    gs_om -t restart [-h HOSTNAME] [-D dataDir] [--time-out=SECS] [--security-mode=MODE] [-l LOGFILE] [-m MODE]
    ```

-   查询openGauss状态

    ```
    gs_om -t status [-h HOSTNAME] [-o OUTPUT] [--detail] [--all] [-l LOGFILE]
    ```

- 生成静态配置文件

  ```
  gs_om -t generateconf -X XMLFILE [--distribute] [-l LOGFILE]
  gs_om -t generateconf --old-values=old --new-values=new [--distribute] [-l LOGFILE]
  ```

-   生成动态配置文件，备机failover或switchover成主机后，需要执行此操作

    ```
    gs_om -t refreshconf
    ```

-   查看静态配置

    ```
    gs_om -t view [-o OUTPUT]
    ```

-   查询openGauss状态详细信息

    ```
    gs_om -t query [-o OUTPUT]
    ```

-   SSL证书替换

    ```
    gs_om -t cert --cert-file=CERTFILE [-l LOGFILE]
    gs_om -t cert --rollback
    ```

-   开启、关闭数据库内kerberos认证

    ```
    gs_om -t kerberos -m [install|uninstall] -U USER [-l LOGFILE] [--krb-client|--krb-server]
    ```

-   显示帮助信息

    ```
    gs_om -? | --help
    ```

-   显示版本号信息

    ```
    gs_om -V | --version
    ```


## 参数说明<a name="section16817173615"></a>

gs\_om参数可以分为如下几类：

-   通用参数：
    -   -t

        gs\_om命令的类型。

        取值范围：start、stop、status、generateconf、cert、view、query、refreshconf、kerberos。

    -   -l

        指定日志文件及存放路径。

        默认值：$GAUSSLOG/om/gs\_om-YYYY-MM-DD\_hhmmss.log（virtualip的默认值：/tmp/gs\_virtualip/gs\_om-YYYY-MM-DD\_hhmmss.log）

    -   -?, --help

        显示帮助信息。

    -   -V, --version

        显示版本号信息。


-   启动openGauss参数：
    -   -h

        指定需要启动的服务器名称。一次只能启动一个服务器。

        取值范围：服务器名称。

        不指定服务器名称时，表示启动openGauss。

    -   -D

        指定数据库节点路径。

        取值范围：数据库节点路径。

        不指定数据库节点路径，表示使用静态文件中的数据库节点路径。

        ![](public_sys-resources/icon-note.png) **说明：**
        针对部署了CM工具的集群，如果在对单个实例进行启停时候指定了-D参数，只会启动或者停止数据库进程，不会影响CM相关进程。

        假设当前实例的数据库和CM进程都停止，在启动该实例时候如果指定了-D参数，那么只会尝试拉起数据库进程，此时由于CM进程不存在会导致数据库进程也拉起失败。可以去掉-D参数，启动整个实例。

    -   --time-out=SECS

        指定超时时间，如果超时，om脚本自动退出。单位：s。

        取值范围：正整数，建议值300。

        默认值：300。

    -   --security-mode

        指定是否以安全模式启动数据库。

        取值范围：

        -   on以安全模式启动。
        -   off不以安全模式启动，默认不开启安全模式。

    -   --cluster-number

        指定启动时内核运行版本号。

        取值范围： 内核版本号。


-   停止openGauss参数：
    -   -h

        指定需要停止实例所在的服务器名称。一次只能停止一个服务器。

        取值范围：实例所在的服务器名称。

        不指定服务器名称时，表示停止openGauss。

    -   -m, --mode=MODE

        停止模式设置。

        取值范围：支持两种停止模式。

        -   fast方式：保证有主备关系的实例数据是一致的。
        -   immediate方式：不保证有主备关系的实例数据是一致的。

        默认值：fast方式。

    -   --time-out=SECS

        指定超时时间，如果超时，om脚本自动退出。单位：s。

        取值范围：正整数，建议值300。

        默认值：300。


-   查询状态参数：

    openGauss状态显示结果的参数说明请参见[表1](#table1171617665)。

    -   -h

        指定需要待查询的服务器名称。

        取值范围：服务器名称。

        不指定服务器时，表示查询openGauss。

    -   --az

        指定需要查询的AZ名称，比如--az=AZ1。

        取值范围：AZ名称，不指定AZ名称时，表示查询所有AZ。

    -   -o

        输出到指定的output文件中。

        如果不指定，直接显示在屏幕上。

    -   --detail

        显示详细信息。如果不指定，只提示该服务器是否正常。
    本参数通过在每个数据库节点执行gs_ctl query命令进行查询并汇总结果，来获取openGauss的详细信息。

    + --all

      显示openGauss所有节点信息。
      本参数通过在每个数据库节点执行gsql查询系统表并汇总结果，来获取openGauss所有节点的信息。为保证显示信息的正确性，在使用本参数前请确认gsql可以查询。


-   生成配置文件参数：
    -   -X

        选择openGauss配置文件路径。

        取值范围：clusterconfig.xml的路径。

    - --old-values=old

      需要修改的静态文件中的旧值。

      取值范围：port、ip、hostname，可以输入多个值，用逗号隔开。

    - --new-values=new

      需要修改的静态文件中的新值。

      取值范围：port、ip、hostname，可以输入多个值，用逗号隔开，与old-values一一对应。

    -   --distribute

        将静态配置文件发布到openGauss实例的安装目录。


-   开启、关闭数据库内kerberos认证：
    -   -U

        指定数据库部署用户。

        取值范围：数据库部署用户。

    -   -m

        指定所要进行的操作。

        取值范围：

        install：开启数据库内kerberos认证。

        uninstall：关闭数据库内kerberos认证。

    -   --krb-server安装kerberos服务端认证。
    -   --krb-client安装kerberos客户端认证。

        注：需要先安装--krb-server，卸载时同步卸载不需要该参数。


-   SSL证书替换：
    -   --cert-file

        指定本地SSL证书zip压缩包所在路径。

    - --rollback

      证书回退到上一次成功备份的状态。

    - -L

      制定该参数时，仅对当前节点进行。



**表 1**  状态说明

<a name="table1171617665"></a>
<table><thead align="left"><tr id="row918131719617"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="p18181171612"><a name="p18181171612"></a><a name="p18181171612"></a>字段</p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="p18185171620"><a name="p18185171620"></a><a name="p18185171620"></a>字段含义</p>
</th>
<th class="cellrowborder" valign="top" width="56.08%" id="mcps1.2.4.1.3"><p id="p141817173612"><a name="p141817173612"></a><a name="p141817173612"></a>字段值</p>
</th>
</tr>
</thead>
<tbody><tr id="row1181917465"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p51816176618"><a name="p51816176618"></a><a name="p51816176618"></a>cluster_state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p719161711614"><a name="p719161711614"></a><a name="p719161711614"></a><span id="text1519617664"><a name="text1519617664"></a><a name="text1519617664"></a>openGauss</span>状态。显示<span id="text16191179612"><a name="text16191179612"></a><a name="text16191179612"></a>openGauss</span>是否运行正常。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul13193171467"></a><a name="ul13193171467"></a><ul id="ul13193171467"><li>Normal：表示<span id="text620117961"><a name="text620117961"></a><a name="text620117961"></a>openGauss</span>可用，且数据有冗余备份。所有进程都在运行，主备关系正常。</li><li>Unavailable：表示<span id="text5209175619"><a name="text5209175619"></a><a name="text5209175619"></a>openGauss</span>不可用。</li><li>Degraded：表示<span id="text16202171464"><a name="text16202171464"></a><a name="text16202171464"></a>openGauss</span>可用，但数据没有冗余备份。</li></ul>
</td>
</tr>
<tr id="row020217369"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p8213171167"><a name="p8213171167"></a><a name="p8213171167"></a>redistributing</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p14211017768"><a name="p14211017768"></a><a name="p14211017768"></a>数据重分布状态。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul14218176612"></a><a name="ul14218176612"></a><ul id="ul14218176612"><li>Yes：表示<span id="text42111171767"><a name="text42111171767"></a><a name="text42111171767"></a>openGauss</span>处于数据重分布状态。</li><li>No：表示<span id="text16241517961"><a name="text16241517961"></a><a name="text16241517961"></a>openGauss</span>未处于数据重分步状态。</li></ul>
</td>
</tr>
<tr id="row62461715613"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p4241317861"><a name="p4241317861"></a><a name="p4241317861"></a>balanced</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p22431718616"><a name="p22431718616"></a><a name="p22431718616"></a>平衡状态。显示是否有<span id="text16241317368"><a name="text16241317368"></a><a name="text16241317368"></a>openGauss</span>实例发生过主备切换而导致主机负载不均衡。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul19241171064"></a><a name="ul19241171064"></a><ul id="ul19241171064"><li>Yes：表示<span id="text1248171568"><a name="text1248171568"></a><a name="text1248171568"></a>openGauss</span>处于负载均衡状态。</li><li>No：表示<span id="text9254171960"><a name="text9254171960"></a><a name="text9254171960"></a>openGauss</span>未处于负载均衡状态。</li></ul>
</td>
</tr>
<tr id="row1525317264"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p12581718613"><a name="p12581718613"></a><a name="p12581718613"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p92519171668"><a name="p92519171668"></a><a name="p92519171668"></a>主机名称。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p192515171964"><a name="p192515171964"></a><a name="p192515171964"></a>表示该实例所在的主机名称。多AZ时会显示AZ编号。</p>
</td>
</tr>
<tr id="row122515171668"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p19265171463"><a name="p19265171463"></a><a name="p19265171463"></a>node_ip</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p192614174612"><a name="p192614174612"></a><a name="p192614174612"></a>主机IP。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p15261017061"><a name="p15261017061"></a><a name="p15261017061"></a>表示该实例所在的主机IP。</p>
</td>
</tr>
<tr id="row626181719616"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p192612176611"><a name="p192612176611"></a><a name="p192612176611"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p192611176616"><a name="p192611176616"></a><a name="p192611176616"></a>实例ID。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p7268178613"><a name="p7268178613"></a><a name="p7268178613"></a>表示该实例的ID。</p>
</td>
</tr>
<tr id="row11262171166"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p2271417062"><a name="p2271417062"></a><a name="p2271417062"></a>state</p>
<p id="p14821350153410"><a name="p14821350153410"></a><a name="p14821350153410"></a></p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p172731718619"><a name="p172731718619"></a><a name="p172731718619"></a>实例状态。</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul14274171168"></a><a name="ul14274171168"></a><ul id="ul14274171168"><li>P: 节点的初始角色是Primary，数据库安装后就不再变动，从系统静态文件读取。</li><li>S: 节点的初始角色是Standby，数据库安装后就不再变动，从系统静态文件读取。</li><li>C: 节点的初始角色是Cascade Standby，数据库安装后就不再变动，从系统静态文件读取。</li><li>Primary：表示实例为主实例。</li><li>Standby：表示实例为备实例。</li><li>Cascade Standby：表示实例为级联备实例。</li><li>Pending：表示该实例在仲裁阶段。</li><li>Unknown：表示实例状态未知。</li><li>Down：表示实例处于宕机状态。</li></ul>
</td>
</tr>
</tbody>
</table>


**表 2**  特性ID说明

<a name="table1129417968"></a>
<table><thead align="left"><tr id="row163017171462"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p43010171265"><a name="p43010171265"></a><a name="p43010171265"></a>特性名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p730201711618"><a name="p730201711618"></a><a name="p730201711618"></a>特性ID</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1731817867"><a name="p1731817867"></a><a name="p1731817867"></a><span id="text1631617164"><a name="text1631617164"></a><a name="text1631617164"></a>openGauss</span>产品</p>
</th>
</tr>
</thead>
<tbody><tr id="row16311717760"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16326171465"><a name="p16326171465"></a><a name="p16326171465"></a>多值列</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p10322017260"><a name="p10322017260"></a><a name="p10322017260"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p73241719613"><a name="p73241719613"></a><a name="p73241719613"></a>基础版</p>
</td>
</tr>
<tr id="row73213171562"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13341713616"><a name="p13341713616"></a><a name="p13341713616"></a>JSON</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p83311177618"><a name="p83311177618"></a><a name="p83311177618"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7339174615"><a name="p7339174615"></a><a name="p7339174615"></a>不支持License控制</p>
</td>
</tr>
<tr id="row13317171368"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6331217968"><a name="p6331217968"></a><a name="p6331217968"></a>XML</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p163312174610"><a name="p163312174610"></a><a name="p163312174610"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1734181713611"><a name="p1734181713611"></a><a name="p1734181713611"></a>不支持</p>
</td>
</tr>
<tr id="row1234717868"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p73412172613"><a name="p73412172613"></a><a name="p73412172613"></a>数据存储格式ORC</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1834517061"><a name="p1834517061"></a><a name="p1834517061"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p034131719611"><a name="p034131719611"></a><a name="p034131719611"></a>基础版</p>
</td>
</tr>
<tr id="row143441715615"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13420171616"><a name="p13420171616"></a><a name="p13420171616"></a></p>
<p id="p19346172618"><a name="p19346172618"></a><a name="p19346172618"></a>单机支持一主多备，备机可读</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p123418171266"><a name="p123418171266"></a><a name="p123418171266"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p93513171662"><a name="p93513171662"></a><a name="p93513171662"></a>策略不放开</p>
</td>
</tr>
<tr id="row7355171063"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5351171562"><a name="p5351171562"></a><a name="p5351171562"></a>多维碰撞分析GPU加速</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1135141718619"><a name="p1135141718619"></a><a name="p1135141718619"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2359178613"><a name="p2359178613"></a><a name="p2359178613"></a>高级特性</p>
</td>
</tr>
<tr id="row03541715612"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0353174612"><a name="p0353174612"></a><a name="p0353174612"></a>全文索引</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p20351217568"><a name="p20351217568"></a><a name="p20351217568"></a>8</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p193661715614"><a name="p193661715614"></a><a name="p193661715614"></a>基础版</p>
</td>
</tr>
<tr id="row7361317666"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p53661713617"><a name="p53661713617"></a><a name="p53661713617"></a>EXTENSION_CONNECTOR</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p23617171966"><a name="p23617171966"></a><a name="p23617171966"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p136131710617"><a name="p136131710617"></a><a name="p136131710617"></a>基础版</p>
</td>
</tr>
<tr id="row183610171860"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p203618178616"><a name="p203618178616"></a><a name="p203618178616"></a>EXPRESS_CLUSTER</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p637201715619"><a name="p637201715619"></a><a name="p637201715619"></a>12</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10378171766"><a name="p10378171766"></a><a name="p10378171766"></a>高级版</p>
</td>
</tr>
<tr id="row2378176619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1037171715616"><a name="p1037171715616"></a><a name="p1037171715616"></a>跨DC协同</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p183711171766"><a name="p183711171766"></a><a name="p183711171766"></a>13</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p638191718619"><a name="p638191718619"></a><a name="p638191718619"></a>高级版</p>
</td>
</tr>
<tr id="row133816171762"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p203811713619"><a name="p203811713619"></a><a name="p203811713619"></a>图</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14387178612"><a name="p14387178612"></a><a name="p14387178612"></a>14</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1838171720617"><a name="p1838171720617"></a><a name="p1838171720617"></a>不支持</p>
</td>
</tr>
<tr id="row153919171068"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p33912171465"><a name="p33912171465"></a><a name="p33912171465"></a>时序</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12397179611"><a name="p12397179611"></a><a name="p12397179611"></a>15</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17392017069"><a name="p17392017069"></a><a name="p17392017069"></a>不支持</p>
</td>
</tr>
<tr id="row1339417366"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1240131714616"><a name="p1240131714616"></a><a name="p1240131714616"></a>PostGis对接</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0408171861"><a name="p0408171861"></a><a name="p0408171861"></a>16</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164019171665"><a name="p164019171665"></a><a name="p164019171665"></a>基础版</p>
</td>
</tr>
<tr id="row14401817865"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p184019175620"><a name="p184019175620"></a><a name="p184019175620"></a><span id="text144112171862"><a name="text144112171862"></a><a name="text144112171862"></a>openGauss</span>内高可用-一主多备</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14414171960"><a name="p14414171960"></a><a name="p14414171960"></a>17</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7411317863"><a name="p7411317863"></a><a name="p7411317863"></a>策略不放开</p>
</td>
</tr>
<tr id="row1141181717616"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9418173617"><a name="p9418173617"></a><a name="p9418173617"></a>行级权限控制</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18411517865"><a name="p18411517865"></a><a name="p18411517865"></a>18</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1042201712615"><a name="p1042201712615"></a><a name="p1042201712615"></a>高级版</p>
</td>
</tr>
<tr id="row1042101712611"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1642181712615"><a name="p1642181712615"></a><a name="p1642181712615"></a>透明加密</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p042191720611"><a name="p042191720611"></a><a name="p042191720611"></a>19</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p144215171365"><a name="p144215171365"></a><a name="p144215171365"></a>高级版</p>
</td>
</tr>
<tr id="row4421817165"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5421217169"><a name="p5421217169"></a><a name="p5421217169"></a>私有表</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p144231714618"><a name="p144231714618"></a><a name="p144231714618"></a>20</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1643191710613"><a name="p1643191710613"></a><a name="p1643191710613"></a>高级版</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="section2433171169"></a>

-   启动openGauss。

    ```
    gs_om -t start
    Starting cluster.
    ======================================================================
    .
    ======================================================================

    Successfully started .
    ```

- 停止openGauss。

  ```
  gs_om -t stop
  Stopping cluster.
  =========================================
  Successfully stopped cluster.
  =========================================
  End stop cluster.
  ```

- 查看openGauss详细状态信息，含实例状态信息。

  ```
  gs_om -t status --detail

    [   Cluster State   ]

    cluster_state   : Normal
    redistributing  : No
    current_az      : AZ_ALL

    [  Datanode State   ]

  node                              node_ip         port                 instance                                   state
  -----------------------------------------------------------------------------------------------------------------
  1  pekpopgsci00235  10.244.62.204    5432      6001 /opt/gaussdb/cluster/data/dn1   P Primary Normal
  2  pekpopgsci00238  10.244.61.81      5432      6002 /opt/gaussdb/cluster/data/dn1   S Standby Normal

  ```

- 在openGauss上执行如下命令，生成配置文件。

  ```
  gs_om -t generateconf -X  /opt/software/openGauss/clusterconfig.xml  --distribute
  Generating static configuration files for all nodes.
  Creating temp directory to store static configuration files.
  Successfully created the temp directory.
  Generating static configuration files.
  Successfully generated static configuration files.
  Static configuration files for all nodes are saved in /opt/opengauss/Bigdata/gaussdb/wisequery/script/static_config_files.
  Distributing static configuration files to all nodes.
  Successfully distributed static configuration files.
  ```

  - 在openGauss上执行如下命令，修改配置文件，动态配置文件需要执行gs\_om -t refreshconf 手动刷新，实际端口或者ip生效需要手动修改guc参数。

    ```
    gs_om -t generateconf --old-values=26000,192.168.1.1  --new-values=36000,192.168.1.2  --distribute
    Generating static configuration files for all nodes.
    Creating temp directory to store static configuration files.
    Successfully created the temp directory.
    Generating static configuration files.
    Successfully generated static configuration files.
    Static configuration files for all nodes are saved in /opt/huawei/Bigdata/gaussdb/wisequery/script/static_config_files.
    Distributing static configuration files to all nodes.
    Successfully distributed static configuration files.
    ```

  然后打开生成的配置文件目录，会看到新生成的3个文件。

  ```
  cd /opt/opengauss/Bigdata/gaussdb/wisequery/script/static_config_files
  ll
  total 456
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat1
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat2
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat3
  ```

-   SSL证书回退。

    ```
    gs_om -t cert --rollback
    [plat1] SSL cert files rollback successfully.
    [plat2] SSL cert files rollback successfully.
    [plat3] SSL cert files rollback successfully.
    ```

-   新License注册。

    ```
    gs_om -t license -m register -f MTgsMTkK
    Preparing for the program initialization.
    Lock the OPS operation of OM components.
    Check and make sure the consistency of the license file.
    Backup the license file on all of the cluster hosts.
    Encrypt the product feature information and generate the license file.
    Send message to the 数据库节点 instances to reload the license file.
    Remove the backup license file on all of the cluster hosts.
    License register successfully.
    ```

-   新License反注册。

    ```
    gs_om -t license -m unregister -f MTgsMTkK
    Preparing for the program initialization.
    Lock the OPS operation of OM components.
    Check and make sure the consistency of the license file.
    Backup the license file on all of the cluster hosts.
    Encrypt the product feature information and generate the license file.
    Send message to the 数据库节点 instances to reload the license file.
    Remove the backup license file on all of the cluster hosts.
    License unregister successfully.
    ```
