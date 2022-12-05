# 创建XML配置文件<a name="ZH-CN_TOPIC_0270171699"></a>

安装openGauss前需要创建cluster\_config.xml文件。cluster\_config.xml文件包含部署openGauss的服务器信息、安装路径、IP地址以及端口号等。用于告知openGauss如何部署。用户需根据不同场景配置对应的XML文件。

下面以一主一备的方案为例，说明如何创建XML配置文件。

<!-- TOC -->

- [配置数据库名称及各项目录](#配置数据库名称及各项目录)
- [配置Host基本信息](#配置host基本信息)
- [配置数据库主节点信息](#配置数据库主节点信息)
- [配置CM_SERVER（主、非主）信息](#配置数据库主节点信息)
- [示例](#示例)

<!-- /TOC -->


## 配置数据库名称及各项目录

在script/gspylib/etc/conf/cluster\_config\_template.xml获取XML文件模板。以下配置内容为示例，可自行替换。每行信息均有注释进行说明。

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
  <!-- 整体信息 -->
  <CLUSTER>
  <!-- 数据库名称 -->
    <PARAM name="clusterName" value="Cluster_template" />  
  <!-- 数据库节点名称(hostname) -->
    <PARAM name="nodeNames" value="node1_hostname,node2_hostname" />
  <!-- 数据库安装目录-->
    <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
  <!-- 日志目录-->
    <PARAM name="gaussdbLogPath" value="/var/log/omm" />
  <!-- 临时文件目录-->
    <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
  <!--数据库工具目录-->
    <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
  <!--数据库core文件目录-->
    <PARAM name="corePath" value="/opt/huawei/corefile"/>
  <!-- 节点IP，与nodeNames一一对应 -->
    <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2"/>
    <!-- 是否开启数据库节点自选主 -->
    <PARAM name="enable_dcf" value="on"/>
    <!-- 开启开关后对应的节点IP、PORT和角色信息 -->
    <PARAM name="dcf_config" value="[{&quot;stream_id&quot;:1,&quot;node_id&quot;:1,&quot;ip&quot;:&quot;8.92.1.85&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;LEADER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:2,&quot;ip&quot;:&quot;8.92.1.86&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:3,&quot;ip&quot;:&quot;8.92.1.87&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;}]"/>
    <!-- 共享存储模式开关 -->
    <PARAM name="enable_dss" value="on"/>
    <!-- dss实例目录 -->
    <PARAM name="dss_home" value="/opt/huawei/install/data/dss"/>
    <!-- dss共享卷名 -->
    <PARAM name="ss_dss_vg_name" value="data"/>
    <!-- dss挂载卷组名和卷组信息，包含共享卷 -->
    <PARAM name="dss_vg_info" value="data:/dev/sdb,p0:/dev/sdc,p1:/dev/sdd"/>
    <!-- cm投票卷 -->
    <PARAM name="votingDiskPath" value="/dev/sde"/>
    <!-- cm共享卷 -->
    <PARAM name="shareDiskDir" value="/dev/sdf"/>
    <!-- dss开启ssl认证开关 -->
    <PARAM name="dss_ssl_enable" value="on"/>
    <!-- mes通信协议类型  -->
    <PARAM name="ss_interconnect_type" value="TCP"/>
    <!-- rdma绑定cpu序列  -->
    <PARAM name="ss_rdma_work_config" value="1 7"/>
  
  </CLUSTER>
```

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   “/opt/huawei/install/om”存放互信等工具，为了避免权限问题，不要把实例数据目录放在此目录下。
>-   安装目录和数据目录需为空或者不存在，否则可能导致安装失败。
>-   在对数据库节点的实例进行具体配置时，需确保配置的目录之间不相互耦合。即各个配置目录不关联，删除其中任意一个目录，不会级联删除其它目录。如gaussdbAppPath为"/opt/huawei/install/app"，gaussdbLogPath为"/opt/huawei/install/app/omm"。当gaussdbAppPath目录被删除时，会级联删除gaussdbLogPath目录，从而引起其它问题。
>-   若需要安装脚本自动创建安装用户时，各配置的目录需保证不与系统创建的默认用户目录耦合关联。
>-   配置openGauss路径和实例路径时，路径中不能包含"|",";","&","$","<","\>","\`","\\\\","'","\\"","\{","\}","\(","\)","\[","\]","\~","\*","?"特殊字符。
>-   配置数据库节点名称时，请通过hostname命令获取数据库节点的主机名称，替换示例中的node1\_hostname,node2\_hostname。
>-   配置dcf\_config时，角色的配置有leader，follower，passive，logger，其中可投票的角色有leader，follower，logger，配置角色组网时，可投票的角色不能少于3个，因此dcf模式下至少需要三个节点。
>-   共享存储中请谨慎配置所有包含磁盘信息的参数，安装时工具会低格所有参数中配置的磁盘，所有参数中的磁盘不能重复。
>-   共享存储中的ip和dn的数据ip保持一致，dss的端口是db端口+10，dms的端口是db端口+20。

**表 1**  参数说明

<table><thead align="left"><tr id="zh-cn_topic_0283136466_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="17.87178717871787%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="71.25712571257125%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136466_row2076785215584"><td class="cellrowborder" rowspan="19" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a>整体信息</p>
<p id="p8418171218599"><a name="p8418171218599"></a><a name="p8418171218599"></a></p>
<p id="p090514610594"><a name="p090514610594"></a><a name="p090514610594"></a></p>
<p id="p1982221273714"><a name="p1982221273714"></a><a name="p1982221273714"></a></p>
<p id="p279512353716"><a name="p279512353716"></a><a name="p279512353716"></a></p>
<p id="p45711927193718"><a name="p45711927193718"></a><a name="p45711927193718"></a></p>
<p id="p1039955033919"><a name="p1039955033919"></a><a name="p1039955033919"></a></p>
<p id="p1764777195211"><a name="p1764777195211"></a><a name="p1764777195211"></a></p>
<p id="p1866319125214"><a name="p1866319125214"></a><a name="p1866319125214"></a></p>
<p id="p18535132418528"><a name="p18535132418528"></a><a name="p18535132418528"></a></p>
<p id="p19885415195219"><a name="p19885415195219"></a><a name="p19885415195219"></a></p>
<p id="p13547194445219"><a name="p13547194445219"></a><a name="p13547194445219"></a></p>
<p id="p10362253145215"><a name="p10362253145215"></a><a name="p10362253145215"></a></p>
</td>
<td class="cellrowborder" valign="top" width="17.87178717871787%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"></a>clusterName</p>
</td>
<td class="cellrowborder" valign="top" width="71.25712571257125%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"></a>openGauss名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"></a>openGauss中主机名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_p48031547203112"><a name="zh-cn_topic_0283136466_p48031547203112"></a><a name="zh-cn_topic_0283136466_p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a>主机在后端存储网络中的IP地址（内网IP）。所有openGauss主机使用后端存储网络通讯。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"></a>openGauss程序安装目录。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0283136466_ul6325251103320"></a><a name="zh-cn_topic_0283136466_ul6325251103320"></a><ul id="zh-cn_topic_0283136466_ul6325251103320"><li>磁盘空间&gt;1GB。</li><li>与数据库所需其它路径相互独立，没有包含关系。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"></a>openGauss运行日志和操作日志存储目录。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0283136466_ul1986519123412"></a><a name="zh-cn_topic_0283136466_ul1986519123412"></a><ul id="zh-cn_topic_0283136466_ul1986519123412"><li>磁盘空间建议根据主机上的数据库节点数规划。数据库节点预留1GB空间的基础上，再适当预留冗余空间。</li><li>与<span id="zh-cn_topic_0283136466_text108660153411"><a name="zh-cn_topic_0283136466_text108660153411"></a><a name="zh-cn_topic_0283136466_text108660153411"></a>openGauss</span>所需其它路径相互独立，没有包含关系。</li></ul>
<p id="zh-cn_topic_0283136466_p10866412348"><a name="zh-cn_topic_0283136466_p10866412348"></a><a name="zh-cn_topic_0283136466_p10866412348"></a>此路径可选。不指定的情况下，<span id="zh-cn_topic_0283136466_text6866131173419"><a name="zh-cn_topic_0283136466_text6866131173419"></a><a name="zh-cn_topic_0283136466_text6866131173419"></a>openGauss</span>安装时会默认指定“$GAUSSLOG/安装用户名”作为日志目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a>tmpMppdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_p79071485351"><a name="zh-cn_topic_0283136466_p79071485351"></a><a name="zh-cn_topic_0283136466_p79071485351"></a>数据库临时文件存放目录。</p>
<p id="zh-cn_topic_0283136466_p29071084358"><a name="zh-cn_topic_0283136466_p29071084358"></a><a name="zh-cn_topic_0283136466_p29071084358"></a>若不配置tmpMppdbPath，默认存放在/opt/huawei/wisequery/安装用户名_mppdb目录下，其中"opt/huawei/wisequery"是默认指定的数据库系统工具目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"></a>openGauss系统工具目录，主要用于存放互信工具等。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0283136466_ul735382813519"></a><a name="zh-cn_topic_0283136466_ul735382813519"></a><ul id="zh-cn_topic_0283136466_ul735382813519"><li>磁盘空间&gt;100MB。</li><li>固定目录，与数据库所需其它目录相互独立，没有包含关系。</li></ul>
<p id="zh-cn_topic_0283136466_p3353328143519"><a name="zh-cn_topic_0283136466_p3353328143519"></a><a name="zh-cn_topic_0283136466_p3353328143519"></a>此目录可选。不指定的情况下，<span id="zh-cn_topic_0283136466_text03531828163513"><a name="zh-cn_topic_0283136466_text03531828163513"></a><a name="zh-cn_topic_0283136466_text03531828163513"></a>openGauss</span>安装时会默认指定“/opt/huawei/wisequery”作为数据库系统工具目录。</p>
</td>
</tr>
<tr id="row1980710134314"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2811105433"><a name="p2811105433"></a><a name="p2811105433"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p48151014318"><a name="p48151014318"></a><a name="p48151014318"></a>openGauss core文件的指定目录。</p>
</td>
</tr>
<tr id="row12418151285918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p104180128590"><a name="p104180128590"></a><a name="p104180128590"></a>enable_dcf</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p44181412175911"><a name="p44181412175911"></a><a name="p44181412175911"></a>是否开启DCF模式。</p>
</td>
</tr>
<tr id="row490515610593"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p19056695920"><a name="p19056695920"></a><a name="p19056695920"></a>dcf_config</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16905176195917"><a name="p16905176195917"></a><a name="p16905176195917"></a>开启DCF模式时配置，DCF启动节点信息。</p>
</td>
</tr>
<tr id="row19822181216374"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7822412123718"><a name="p7822412123718"></a><a name="p7822412123718"></a><span id="ph9894173393710"><a name="ph9894173393710"></a><a name="ph9894173393710"></a>enable_dss</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p3822151223719"><a name="p3822151223719"></a><a name="p3822151223719"></a><span id="ph926135011373"><a name="ph926135011373"></a><a name="ph926135011373"></a>共享存储模式开关</span><span id="ph991191210218"><a name="ph991191210218"></a><a name="ph991191210218"></a><span id="ph1716615151418"><a name="ph1716615151418"></a><a name="ph1716615151418"></a>，取值范围on/off，默认为off，</span>共享存储不支持dcf模式。</span></p>
</td>
</tr>
<tr id="row37942023183718"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p779592320372"><a name="p779592320372"></a><a name="p779592320372"></a><span id="ph165120406388"><a name="ph165120406388"></a><a name="ph165120406388"></a>dss_home</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1379592333717"><a name="p1379592333717"></a><a name="p1379592333717"></a><span id="ph17398452123810"><a name="ph17398452123810"></a><a name="ph17398452123810"></a>dss实例目录</span><span id="ph17538195493817"><a name="ph17538195493817"></a><a name="ph17538195493817"></a>，</span><span id="ph132811033543"><a name="ph132811033543"></a><a name="ph132811033543"></a>enable_dss</span><span id="ph172491934242"><a name="ph172491934242"></a><a name="ph172491934242"></a>为on时必选</span><span id="ph1678111928"><a name="ph1678111928"></a><a name="ph1678111928"></a>。</span></p>
</td>
</tr>
<tr id="row1957172718373"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p757112272373"><a name="p757112272373"></a><a name="p757112272373"></a><span id="ph178591726133919"><a name="ph178591726133919"></a><a name="ph178591726133919"></a>ss_dss_vg_name</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p4571112723717"><a name="p4571112723717"></a><a name="p4571112723717"></a><span id="ph12848153203914"><a name="ph12848153203914"></a><a name="ph12848153203914"></a>dss共享卷名</span><span id="ph6120153413916"><a name="ph6120153413916"></a><a name="ph6120153413916"></a>，</span><span id="ph34189422414"><a name="ph34189422414"></a><a name="ph34189422414"></a>enable_dss</span><span id="ph164182042344"><a name="ph164182042344"></a><a name="ph164182042344"></a>为on时必选</span><span id="ph7211316427"><a name="ph7211316427"></a><a name="ph7211316427"></a>。</span></p>
</td>
</tr>
<tr id="row1139818506398"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1399135014392"><a name="p1399135014392"></a><a name="p1399135014392"></a><span id="ph14706515391"><a name="ph14706515391"></a><a name="ph14706515391"></a>dss_vg_info</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p103991850103915"><a name="p103991850103915"></a><a name="p103991850103915"></a><span id="ph129519341407"><a name="ph129519341407"></a><a name="ph129519341407"></a>dss挂载卷组信息，包含一个共享卷</span><span id="ph1364123824016"><a name="ph1364123824016"></a><a name="ph1364123824016"></a>组，</span><span id="ph1102134414413"><a name="ph1102134414413"></a><a name="ph1102134414413"></a>其余</span><span id="ph488332334716"><a name="ph488332334716"></a><a name="ph488332334716"></a>为日志卷组，日志卷组的数量和dn的数量保持一致，集中式每个节点最多有一个dn。</span><span id="ph48251455416"><a name="ph48251455416"></a><a name="ph48251455416"></a>卷组形如“data:/dev/sdb”，卷组和卷组之间以“，”隔开，enable_dss</span><span id="ph382510458410"><a name="ph382510458410"></a><a name="ph382510458410"></a>为on时必选</span><span id="ph986320181424"><a name="ph986320181424"></a><a name="ph986320181424"></a>。</span><span id="ph1383519434138"><a name="ph1383519434138"></a><a name="ph1383519434138"></a>日志卷组磁盘大小需要大于dn参数max_size_for_xlog_prune</span><span id="ph97651948151313"><a name="ph97651948151313"></a><a name="ph97651948151313"></a>的值，</span></p>
</td>
</tr>
<tr id="row146471775525"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p464818765210"><a name="p464818765210"></a><a name="p464818765210"></a><span id="ph581617812523"><a name="ph581617812523"></a><a name="ph581617812523"></a>votingDiskPath</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16487711527"><a name="p16487711527"></a><a name="p16487711527"></a><span id="ph158834811533"><a name="ph158834811533"></a><a name="ph158834811533"></a>cm的投票卷，</span><span id="ph55181509413"><a name="ph55181509413"></a><a name="ph55181509413"></a>enable_dss</span><span id="ph4518105020420"><a name="ph4518105020420"></a><a name="ph4518105020420"></a>为on时必选</span><span id="ph1171812191629"><a name="ph1171812191629"></a><a name="ph1171812191629"></a>。</span></p>
</td>
</tr>
<tr id="row1786611915217"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p208662191525"><a name="p208662191525"></a><a name="p208662191525"></a><span id="ph13888734165212"><a name="ph13888734165212"></a><a name="ph13888734165212"></a>shareDiskDir</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p38665199521"><a name="p38665199521"></a><a name="p38665199521"></a><span id="ph13931218541"><a name="ph13931218541"></a><a name="ph13931218541"></a>cm的共享卷</span><span id="ph111238201023"><a name="ph111238201023"></a><a name="ph111238201023"></a>，<span id="ph13770852340"><a name="ph13770852340"></a><a name="ph13770852340"></a>enable_dss</span><span id="ph677018521245"><a name="ph677018521245"></a><a name="ph677018521245"></a>为on时必选</span>。</span></p>
</td>
</tr>
<tr id="row3885115185213"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17885101519526"><a name="p17885101519526"></a><a name="p17885101519526"></a><span id="ph12203154245213"><a name="ph12203154245213"></a><a name="ph12203154245213"></a>dss_ssl_enable</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p98854159527"><a name="p98854159527"></a><a name="p98854159527"></a><span id="ph18955350185415"><a name="ph18955350185415"></a><a name="ph18955350185415"></a>dss开启ssl认证开关，取值范围on/off，默认为on</span><span id="ph1844720211729"><a name="ph1844720211729"></a><a name="ph1844720211729"></a>。</span></p>
</td>
</tr>
<tr id="row195477449524"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p9547204411523"><a name="p9547204411523"></a><a name="p9547204411523"></a><span id="ph1398217580526"><a name="ph1398217580526"></a><a name="ph1398217580526"></a>ss_interconnect_type</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p354734417527"><a name="p354734417527"></a><a name="p354734417527"></a><span id="ph89401381618"><a name="ph89401381618"></a><a name="ph89401381618"></a>mes通信协议类型，默认值TCP，取值范围</span><span id="ph14853227014"><a name="ph14853227014"></a><a name="ph14853227014"></a>TCP/RDMA，默认为TCP</span><span id="ph103917226213"><a name="ph103917226213"></a><a name="ph103917226213"></a>。</span></p>
</td>
</tr>
<tr id="row1636215345219"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p73629537522"><a name="p73629537522"></a><a name="p73629537522"></a><span id="ph62489207537"><a name="ph62489207537"></a><a name="ph62489207537"></a>ss_rdma_work_config</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1936335316521"><a name="p1936335316521"></a><a name="p1936335316521"></a><span id="ph1859724119315"><a name="ph1859724119315"></a><a name="ph1859724119315"></a>rdma用户态poll占用起止cpu</span><span id="ph17210345531"><a name="ph17210345531"></a><a name="ph17210345531"></a>，</span><span id="ph209312048739"><a name="ph209312048739"></a><a name="ph209312048739"></a>ss_interconnect_type</span><span id="ph88565498320"><a name="ph88565498320"></a><a name="ph88565498320"></a>为RDMA时有效，形如</span><span id="ph28400511657"><a name="ph28400511657"></a><a name="ph28400511657"></a>"10 15"</span><span id="ph128321249878"><a name="ph128321249878"></a><a name="ph128321249878"></a>，中间以空格分隔。</span></p>
</td>
</tr>
</tbody>
</table>



## 配置Host基本信息

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>每台Host服务器都必须有如下信息，如下示例以node1为例。
>
内容为示例，可自行替换。每行信息均有注释进行说明。

**Host配置以下信息。**

```
<!-- 每台服务器上的节点部署信息 -->
<DEVICELIST>
<!-- 节点1上的部署信息 -->
<DEVICE sn="node1_hostname">
<!-- 节点1的主机名称 -->
<PARAM name="name" value="node1_hostname" />
<!-- 节点1所在的AZ及AZ优先级 -->
<PARAM name="azName" value="AZ1"/>
<PARAM name="azPriority" value="1"/>
<!-- 节点1的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
<PARAM name="backIp1" value="192.168.0.1"/>
<PARAM name="sshIp1" value="192.168.0.1"/>
<!-- node1是否为级联备, on表示该实例为级联备，另外级联备机在相同的AZ里需要配有备机 -->
<PARAM name="cascadeRole" value="on"/>
```

**表 1**  参数说明

<a name="zh-cn_topic_0249784567_table1876635205813"></a>
<table><thead align="left"><tr id="zh-cn_topic_0249784567_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.36723672367236%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0249784567_row2076785215584"><td class="cellrowborder" rowspan="5" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a>整体信息</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_p131821197365"><a name="zh-cn_topic_0249784567_p131821197365"></a><a name="zh-cn_topic_0249784567_p131821197365"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="72.36723672367236%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"></a>主机名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p1906425183611"><a name="zh-cn_topic_0249784567_p1906425183611"></a><a name="zh-cn_topic_0249784567_p1906425183611"></a>azName</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_p2085417394617"><a name="zh-cn_topic_0249784567_p2085417394617"></a><a name="zh-cn_topic_0249784567_p2085417394617"></a>指定azName（Available Zone Name），字符串（不能含有特殊字符），例如AZ1、AZ2、AZ3。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p857520312368"><a name="zh-cn_topic_0249784567_p857520312368"></a><a name="zh-cn_topic_0249784567_p857520312368"></a>azPriority</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_p8997131616389"><a name="zh-cn_topic_0249784567_p8997131616389"></a><a name="zh-cn_topic_0249784567_p8997131616389"></a>指定azPriority的优先级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p17976123919369"><a name="zh-cn_topic_0249784567_p17976123919369"></a><a name="zh-cn_topic_0249784567_p17976123919369"></a>backIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a>主机在后端存储网络中的IP地址（内网IP）。所有openGauss主机使用后端存储网络通讯。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p14456479368"><a name="zh-cn_topic_0249784567_p14456479368"></a><a name="zh-cn_topic_0249784567_p14456479368"></a>sshIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"></a><a name="zh-cn_topic_0249784567_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"></a>设置SSH可信通道IP地址（外网IP）。若无外网，则可以不设置该选项或者同backIp1设置相同IP。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>配置文件中所有IP参数（包含backIp、sshIp、listenIp等）均只支持配置一个IP。如果配置第二个IP参数，则不会读取第二个参数的配置值。
>示例：xml配置文件中同时配置backIp1和backIp2参数：
>在解析配置文件时仅读取backIp1参数的配置值，不会读取backIp2参数的配置值。
>```
><PARAM name="backIp1" value="192.168.0.1"/>
><PARAM name="backIp2" value="192.168.0.2"/>
>```
>
## 配置数据库主节点信息

内容为示例，可自行替换。每行信息均有注释进行说明。

**数据库主节点配置以下信息。**

```
<!--DBnode-->
<PARAM name="dataNum" value="1"/>
<!--数据库端口号-->
<PARAM name="dataPortBase" value=""/>
<!--DBnode侦听IP-->
<PARAM name="dataListenIp1" value="172.31.13.124,172.31.6.198"/>
<!--数据库主节点上的数据目录，及备机数据目录-->
<PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
<!--数据库主节点上的xlog目录，及备机xlog目录-->
<PARAM name="dataNodeXlogPath1" value="/home/omm/gauss_xlog,/home/omm/gauss_xlog "/>
<!--数据库节点上设定同步模式的节点数-->
<PARAM name="dataNode1_syncNum" value="0"/>
<!--数据库节点上自定义设定同步模式的节点方式、数量及顺序,hostname根据主机名自行替换-->
<PARAM name="syncNode_hostname" value="ANY 1(node1_hostname，node2_hostname)"/>
```

**表 1**  参数说明

<a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_table642932620115"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136469_row178502422283"><td class="cellrowborder" rowspan="8" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"></a>当前主机上需要部署的数据库节点个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0241802596_p119281928007"><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_p119281928007"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"></a>数据库节点的基础端口号，默认值40000。</p>
</td>
</tr>
<tr id="row196421844162013"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p69281428009"><a name="p69281428009"></a><a name="p69281428009"></a>dataListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p19929152819012"><a name="p19929152819012"></a><a name="p19929152819012"></a>侦听的IP地址。未设置时，使用对应主机上的backIp1生成。</p>
<p id="p14929182812017"><a name="p14929182812017"></a><a name="p14929182812017"></a>第一个IP是主节点所在主机IP，第二个IP是备节点所在主机IP。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136469_row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"></a><a name="zh-cn_topic_0283136469_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"></a>用于指定当前主机上的数据库节点的数据存储目录。此目录为数据库的数据存储目录。应规划到数据盘上。</p>
</td>
</tr>
<tr id="row02471711689"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p62485111817"><a name="p62485111817"></a><a name="p62485111817"></a>dataNodeXlogPath1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1124918118811"><a name="p1124918118811"></a><a name="p1124918118811"></a>可选参数，用于指定当前数据库中xlog存储路径。此目录为数据库xlog日志存储目录，只支持绝对路径。如不指定，则默认存放在数据目录的pg_xlog目录下。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136469_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136469_p1725855510222"><a name="zh-cn_topic_0283136469_p1725855510222"></a><a name="zh-cn_topic_0283136469_p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136469_p18258155510227"><a name="zh-cn_topic_0283136469_p18258155510227"></a><a name="zh-cn_topic_0283136469_p18258155510227"></a>可选参数，与syncNode_hostname参数二选一。如需配置，仅在主机节点下配置。用于指定当前数据库中同步模式的节点数目。取值范围为0~数据库备机节点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136469_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136469_p1725855510222"><a name="zh-cn_topic_0283136469_p1725855510222"></a><a name="zh-cn_topic_0283136469_p1725855510222"></a>syncNode_hostname</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136469_p18258155510227"><a name="zh-cn_topic_0283136469_p18258155510227"></a><a name="zh-cn_topic_0283136469_p18258155510227"></a>可选参数，与dataNode1_syncNum参数二选一。如需配置，需要在所有的节点下同时配置。用于指定当前数据库中同步模式的备机节点方式、数量及顺序。syncNode_hostname中的hostname根据主机名自行替换。参数中指定同步备主机名存在且正确，同步备数量不能超过备选同步备主机个数。参数中FIRST与ANY不可以同时存在，ANY支持组合配置，FIRST不支持组合配置，具体见：一主四备配置文件（支持自定义利用FIRST、ANY设置同步备机）。</p>
</td>
</tr>
</tbody>
</table>




## 配置CM_SERVER（主、非主）信息

**非CMS主节点配置以下信息。**

```
<!-- cm --> 
<PARAM name="cmServerPortStandby" value="25500"/> 
<PARAM name="cmDir" value="/opt/huawei/data/cm"/>
```

**表 1**  参数说明

<a name="table642932620115"></a>

<table><thead align="left"><tr id="row1543052614113"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="25.212521252125214%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1343016261112"><td class="cellrowborder" rowspan="5" valign="top" width="14.84148414841484%" headers="mcps1.2.4.1.1 "><p id="p1752719501213"><a name="p1752719501213"></a><a name="p1752719501213"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="25.212521252125214%" headers="mcps1.2.4.1.2 "><p id="p138772053175815"><a name="p138772053175815"></a><a name="p138772053175815"></a>cmServerPortBase</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="p08776536586"><a name="p08776536586"></a><a name="p08776536586"></a>主CM Server端口号，默认值5000。</p>
</td>
</tr>
<tr id="row462419461815"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p3877105311589"><a name="p3877105311589"></a><a name="p3877105311589"></a>cmServerPortStandby</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p487755311588"><a name="p487755311588"></a><a name="p487755311588"></a>备CM Server端口号，默认值5500。</p>
</td>
</tr>
<tr id="row243013261715"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16877165315584"><a name="p16877165315584"></a><a name="p16877165315584"></a>cmServerListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p7877115312585"><a name="p7877115312585"></a><a name="p7877115312585"></a>CM Server用于侦听CM Agent连接请求或DBA管理请求的IP地址。</p>
</td>
</tr>
<tr id="row1643082612118"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p4877145395811"><a name="p4877145395811"></a><a name="p4877145395811"></a>cmServerHaIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p18771153115819"><a name="p18771153115819"></a><a name="p18771153115819"></a>主、备CM Server间通信的IP地址。</p>
<p id="p12877195316581"><a name="p12877195316581"></a><a name="p12877195316581"></a>Value中左边为主CM Server的主机IP地址，右边为备CM Server的主机IP地址。未设置时，默认根据主、备CM Server所在主机的backIp1生成。</p>
</td>
</tr>
<tr id="row1843010268113"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p128781753205814"><a name="p128781753205814"></a><a name="p128781753205814"></a>cmDir</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p8878135305818"><a name="p8878135305818"></a><a name="p8878135305818"></a>CM数据文件路径。保存CM Server和CM Agent用到的数据文件，参数文件等。</p>
<p id="p1187855355815"><a name="p1187855355815"></a><a name="p1187855355815"></a>各集群主机上均需配置该参数。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  目录说明

<a name="table15788185133410"></a>

<table><thead align="left"><tr id="row278812517346"><th class="cellrowborder" valign="top" width="39.6%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p43366803202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p43366803202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p43366803202410"></a>目录</p>
</th>
<th class="cellrowborder" valign="top" width="60.4%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p23050178202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p23050178202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p23050178202410"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row878819593413"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="p14788157341"><a name="p14788157341"></a><a name="p14788157341"></a>/opt/huawei/data</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p42801081202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p42801081202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p42801081202410"></a>集群实例的数据存储总目录。此目录为数据库的数据存储目录。应规划到数据盘上。</p>
<p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p49665416202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p49665416202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p49665416202410"></a>此目录应满足如下要求：</p>
<a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_ul44335561202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_ul44335561202410"></a><ul id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_ul44335561202410"><li>磁盘空间请根据实际业务数据量大小规划。</li><li>各实例间的数据路径相互独立，彼此间没有包含关系。例如本指南中各实例的数据目录规划如<a href="#table15838192510429">表3</a>所示。</li></ul>
</td>
</tr>
</tbody>
</table>


**表 3**  数据库实例数据目录

<a name="table15838192510429"></a>

<table><thead align="left"><tr id="row14838152510421"><th class="cellrowborder" valign="top" width="39.6%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"></a>实例名称</p>
</th>
<th class="cellrowborder" valign="top" width="60.4%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"></a>实例数据目录</p>
</th>
</tr>
</thead>
<tbody><tr id="row1839122534217"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p66106311202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p66106311202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p66106311202410"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p53010964202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p53010964202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p53010964202410"></a>/opt/huawei/data/cm</p>
</td>
</tr>
<tr id="row8839162524215"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"></a>主DN</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"></a>/opt/huawei/data/masterX</p>
<p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"></a>其中，X为从1开始的连续正整数，用于标识当前主机上的第X个DN。</p>
</td>
</tr>
<tr id="row68397259423"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"></a>备DN</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"></a>/opt/huawei/data/slaveX</p>
<p id="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"></a><a name="zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"></a>其中，X为从1开始的连续正整数，用X标识当前主机上的第X个备DN。</p>
</td>
</tr>
</tbody>
</table>






## 示例

### 单节点配置文件

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- openGauss整体信息 -->
    <CLUSTER>
        <!-- 数据库名称 -->
        <PARAM name="clusterName" value="dbCluster" />
        <!-- 数据库节点名称(hostname) -->
        <PARAM name="nodeNames" value="node1_hostname" />
        <!-- 数据库安装目录-->
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <!-- 日志目录-->
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <!-- 临时文件目录-->
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
        <!-- 数据库工具目录-->
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <!-- 数据库core文件目录-->
        <PARAM name="corePath" value="/opt/huawei/corefile" />
        <!-- 节点IP，与数据库节点名称列表一一对应 -->
        <PARAM name="backIp1s" value="192.168.0.1"/> 
    </CLUSTER>
    <!-- 每台服务器上的节点部署信息 -->
    <DEVICELIST>
        <!-- 节点1上的部署信息 -->
        <DEVICE sn="node1_hostname">
            <!-- 节点1的主机名称 -->
            <PARAM name="name" value="node1_hostname"/>
            <!-- 节点1所在的AZ及AZ优先级 -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 节点1的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
               
	    <!--dbnode-->
	    <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>
    </DEVICELIST>
</ROOT>
```

### 一主一备配置文件

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- openGauss整体信息 -->
    <CLUSTER>
        <!-- 数据库名称 -->
        <PARAM name="clusterName" value="Cluster_template" />
        <!-- 数据库节点名称(hostname) -->
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname" />
        <!-- 数据库安装目录-->
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <!-- 日志目录-->
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <!-- 临时文件目录-->
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/>
        <!-- 数据库工具目录-->
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <!-- 数据库core文件目录-->
        <PARAM name="corePath" value="/opt/huawei/corefile"/>
        <!-- 节点IP，与数据库节点名称列表一一对应 -->
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2"/> 
    </CLUSTER>
    <!-- 每台服务器上的节点部署信息 -->
    <DEVICELIST>
        <!-- 节点1上的部署信息 -->
        <DEVICE sn="node1_hostname">
            <!-- 节点1的主机名称 -->
            <PARAM name="name" value="node1_hostname"/>
            <!-- 节点1所在的AZ及AZ优先级 -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 节点1的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- 节点2上的节点部署信息，其中“name”的值配置为主机名称 -->
        <DEVICE sn="node2_hostname">
            <!-- 节点2的主机名称 -->
            <PARAM name="name" value="node2_hostname"/>
            <!-- 节点2所在的AZ及AZ优先级 -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 节点2的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### 一主一备一级联配置文件

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- openGauss整体信息 -->
    <CLUSTER>
        <PARAM name="clusterName" value="Cluster_template" />
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname,node3_hostname" />
   
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/>
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <PARAM name="corePath" value="/opt/huawei/corefile"/>
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3"/>
    
    </CLUSTER>
    <!-- 每台服务器上的节点部署信息 -->
    <DEVICELIST>
        <!-- node1上的节点部署信息 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            
      	<!-- cm主 --> 
	    <PARAM name="cmsNum" value="1"/> 
	    <PARAM name="cmDir" value="/opt/huawei/install/cm"/> 
	    <PARAM name="cmServerPortBase" value="15300"/> 
	    <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/> 
	    <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/> 
	    <!-- cmServerlevel目前只支持1 --> 
	    <PARAM name="cmServerlevel" value="1"/> 
	    <!-- cms主及所有备的hostname --> 
	    <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname"/>       
	   
       <!--dn-->
         <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="26000"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn"/>
        <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- node2上的节点部署信息，其中“name”的值配置为主机名称 -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
             <!-- cm --> 
            <PARAM name="cmDir" value="/opt/huawei/install/cm"/> 
            <PARAM name="cmServerPortStandby" value="15300"/> 
	</DEVICE>

        <!-- node3上的节点部署信息，其中“name”的值配置为主机名称 -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
            <PARAM name="cascadeRole" value="on"/>
            <!-- cm --> 
            <PARAM name="cmDir" value="/opt/huawei/install/cm"/> 
            <PARAM name="cmServerPortStandby" value="15300"/> 
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

###  一主二备配置文件

```
<?xml version="1.0" encoding="UTF-8"?> 
<ROOT> 
    <!-- openGauss整体信息 --> 
    <CLUSTER> 
        <PARAM name="clusterName" value="Cluster_template" /> 
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname,node3_hostname" /> 
    
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" /> 
        <PARAM name="gaussdbLogPath" value="/var/log/omm" /> 
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/> 
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" /> 
        <PARAM name="corePath" value="/opt/huawei/corefile"/> 
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3"/> 
     
    </CLUSTER> 
    <!-- 每台服务器上的节点部署信息 --> 
    <DEVICELIST> 
        <!-- node1上的节点部署信息 --> 
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.1"/> 
            <PARAM name="sshIp1" value="192.168.0.1"/> 
            <!--CM节点部署信息--> 
            <PARAM name="cmsNum" value="1"/> 
            <PARAM name="cmServerPortBase" value="15000"/> 
            <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/> 
            <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/> 
            <PARAM name="cmServerlevel" value="1"/> 
            <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	    <!--dn--> 
            <PARAM name="dataNum" value="1"/> 
	    <PARAM name="dataPortBase" value="15400"/> 
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn"/> 
            <PARAM name="dataNode1_syncNum" value="0"/> 
        </DEVICE> 
 
        <!-- node2上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node3上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### 一主三备配置文件

```
<?xml version="1.0" encoding="UTF-8"?> 
<ROOT> 
    <!-- openGauss整体信息 --> 
    <CLUSTER> 
        <PARAM name="clusterName" value="Cluster_template" /> 
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname" /> 
    
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" /> 
        <PARAM name="gaussdbLogPath" value="/var/log/omm" /> 
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/> 
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" /> 
        <PARAM name="corePath" value="/opt/huawei/corefile"/> 
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4"/> 
         
    </CLUSTER> 
    <!-- 每台服务器上的节点部署信息 --> 
    <DEVICELIST> 
        <!-- node1上的节点部署信息 --> 
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.1"/> 
            <PARAM name="sshIp1" value="192.168.0.1"/> 
            <!--CM节点部署信息--> 
            <PARAM name="cmsNum" value="1"/> 
            <PARAM name="cmServerPortBase" value="15000"/> 
            <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4"/> 
            <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4"/> 
            <PARAM name="cmServerlevel" value="1"/> 
            <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	    <!--dn--> 
            <PARAM name="dataNum" value="1"/> 
	    <PARAM name="dataPortBase" value="15400"/> 
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn,node4_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE> 
 
        <!-- node2上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node3上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node4上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### 一主四备配置文件

```
<?xml version="1.0" encoding="UTF-8"?> 
<ROOT> 
    <!-- openGauss整体信息 --> 
    <CLUSTER> 
        <PARAM name="clusterName" value="Cluster_template" /> 
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname,node5_hostname" /> 
    
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" /> 
        <PARAM name="gaussdbLogPath" value="/var/log/omm" /> 
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/> 
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" /> 
        <PARAM name="corePath" value="/opt/huawei/corefile"/> 
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
         
    </CLUSTER> 
    <!-- 每台服务器上的节点部署信息 --> 
    <DEVICELIST> 
        <!-- node1上的节点部署信息 --> 
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.1"/> 
            <PARAM name="sshIp1" value="192.168.0.1"/> 
            <!--CM节点部署信息--> 
            <PARAM name="cmsNum" value="1"/> 
            <PARAM name="cmServerPortBase" value="15000"/> 
            <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
            <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
            <PARAM name="cmServerlevel" value="1"/> 
            <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname,node5_hostname"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	    <!--dn--> 
            <PARAM name="dataNum" value="1"/> 
	    <PARAM name="dataPortBase" value="15400"/> 
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn,node4_hostname,/opt/huawei/install/data/dn,node5_hostname,/opt/huawei/install/data/dn"/> 
            <PARAM name="dataNode1_syncNum" value="0"/> 
        </DEVICE> 
 
        <!-- node2上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node3上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node4上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node5上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node5_hostname"> 
            <PARAM name="name" value="node5_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.5"/> 
            <PARAM name="sshIp1" value="192.168.0.5"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### 一主四备配置文件（支持自定义利用FIRST、ANY设置同步备机）

```
<?xml version="1.0" encoding="UTF-8"?> 
<ROOT> 
    <!-- openGauss整体信息 --> 
    <CLUSTER> 
        <PARAM name="clusterName" value="Cluster_template" /> 
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname,node5_hostname" /> 
    
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" /> 
        <PARAM name="gaussdbLogPath" value="/var/log/omm" /> 
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/> 
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" /> 
        <PARAM name="corePath" value="/opt/huawei/corefile"/> 
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
         
    </CLUSTER> 
    <!-- 每台服务器上的节点部署信息 --> 
    <DEVICELIST> 
        <!-- node1上的节点部署信息 --> 
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.1"/> 
            <PARAM name="sshIp1" value="192.168.0.1"/> 
            <!--CM节点部署信息--> 
            <PARAM name="cmsNum" value="1"/> 
            <PARAM name="cmServerPortBase" value="15000"/> 
            <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
            <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3,192.168.0.4,192.168.0.5"/> 
            <PARAM name="cmServerlevel" value="1"/> 
            <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname,node4_hostname,node5_hostname"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	    <!--dn--> 
            <PARAM name="dataNum" value="1"/> 
	    <PARAM name="dataPortBase" value="15400"/> 
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn,node4_hostname,/opt/huawei/install/data/dn,node5_hostname,/opt/huawei/install/data/dn"/> 
            <!-- syncNode_hostname中的hostname替换为自己的主机名称 -->
            <PARAM name="syncNode_node1_hostname" value="ANY 2(node2_hostname, node4_hostname), ANY 1(node3_hostname, node5_hostname)"/> 
        </DEVICE> 
 
        <!-- node2上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- syncNode_hostname中的hostname替换为自己的主机名称 -->
            <PARAM name="syncNode_node2_hostname" value="ANY 2(node1_hostname, node3_hostname), ANY 1(node5_hostname, node4_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node3上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- syncNode_hostname中的hostname替换为自己的主机名称 -->
            <PARAM name="syncNode_node3_hostname" value="FIRST 3(node2_hostname, node1_hostname, node4_hostname, node5_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node4上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- syncNode_hostname中的hostname替换为自己的主机名称 -->
            <PARAM name="syncNode_node4_hostname" value="ANY 2(node2_hostname, node1_hostname, node5_hostname, node3_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- node5上的节点部署信息，其中“name”的值配置为主机名称 --> 
        <DEVICE sn="node5_hostname"> 
            <PARAM name="name" value="node5_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- 如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP --> 
            <PARAM name="backIp1" value="192.168.0.5"/> 
            <PARAM name="sshIp1" value="192.168.0.5"/> 
            <!-- syncNode_hostname中的hostname替换为自己的主机名称 -->
            <PARAM name="syncNode_node5_hostname" value="ANY 1(node1_hostname, node2_hostname, node3_hostname, node4_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```
