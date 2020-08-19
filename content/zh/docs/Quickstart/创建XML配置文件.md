# 创建XML配置文件<a name="ZH-CN_TOPIC_0270171699"></a>

安装openGauss前需要创建cluster\_config.xml文件。cluster\_config.xml文件包含部署openGauss的服务器信息、安装路径、IP地址以及端口号等。用于告知openGauss如何部署。用户需根据不同场配置对应的XML文件。

下面以一主一备的方案为例，说明如何创建XML配置文件。

<!-- TOC -->

- [配置数据库名称及各项目录<a name="ZH-CN_TOPIC_0270171700"></a>](#配置数据库名称及各项目录a-namezh-cn_topic_0270171700a)
- [配置Host基本信息<a name="ZH-CN_TOPIC_0270171701"></a>](#配置host基本信息a-namezh-cn_topic_0270171701a)
- [配置数据库主节点信息<a name="ZH-CN_TOPIC_0270171702"></a>](#配置数据库主节点信息a-namezh-cn_topic_0270171702a)
- [示例<a name="ZH-CN_TOPIC_0270171703"></a>](#示例a-namezh-cn_topic_0270171703a)
    - [单节点配置文件<a name="zh-cn_topic_0249784528_section1698454873416"></a>](#单节点配置文件a-namezh-cn_topic_0249784528_section1698454873416a)
    - [一主一备配置文件<a name="zh-cn_topic_0249784528_section946242113712"></a>](#一主一备配置文件a-namezh-cn_topic_0249784528_section946242113712a)

<!-- /TOC -->


## 配置数据库名称及各项目录<a name="ZH-CN_TOPIC_0270171700"></a>

在script/gspylib/etc/conf/cluster\_config\_template.xml获取XML文件模板。加粗字体内容为示例，可自行替换。每行信息均有注释进行说明。

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
  
  </CLUSTER>
```

>![](public_sys-resources/icon-notice.gif) **须知：** 
>-   “/opt/huawei/install/om”存放互信等工具，避免权限问题，不要把实例数据目录放在此目录下。
>-   安装目录和数据目录需为空或者不存在，否则可能导致安装失败。
>-   在对数据库节点的实例进行具体配置时，需确保配置的目录之间不相互耦合。即各个配置目录不关联，删除其中任意一个目录，不会级联删除其它目录。如gaussdbAppPath为"/opt/huawei/install/app"，gaussdbLogPath为"/opt/huawei/install/app/omm"。当gaussdbAppPath目录被删除时，会级联删除gaussdbLogPath目录，从而引起其它问题。
>-   若需要安装脚本自动创建安装用户时各配置的目录需保证不与系统创建的默认用户目录耦合关联。
>-   配置openGauss路径和实例路径时，路径中不能包含"|",";","&","$","<","\>","\`","\\\\","'","\\"","\{","\}","\(","\)","\[","\]","\~","\*","?"特殊字符。
>-   配置数据库节点名称时，请通过hostname命令获取数据库节点的主机名称，替换示例中的**node1\_hostname**,**node2\_hostname**。

**表 1**  参数说明

<a name="zh-cn_topic_0249784584_table1876635205813"></a>
<table><thead align="left"><tr id="zh-cn_topic_0249784584_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="16.8016801680168%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.32723272327232%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0249784584_row2076785215584"><td class="cellrowborder" rowspan="8" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a>整体信息</p>
</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63365422101039"></a>clusterName</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32325548101039"></a>openGauss名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p13896585101039"></a>openGauss中主机名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_p48031547203112"><a name="zh-cn_topic_0249784584_p48031547203112"></a><a name="zh-cn_topic_0249784584_p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a>主机在后端存储网络中的IP地址（内网IP）。所有openGauss主机使用后端存储网络通讯。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p39374110101039"></a>openGauss程序安装目录。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0249784584_ul6325251103320"></a><a name="zh-cn_topic_0249784584_ul6325251103320"></a><ul id="zh-cn_topic_0249784584_ul6325251103320"><li>磁盘空间&gt;1GB</li><li>与数据库所需其它路径相互独立，没有包含关系。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p15276202101039"></a>openGauss运行日志和操作日志存储目录。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0249784584_ul1986519123412"></a><a name="zh-cn_topic_0249784584_ul1986519123412"></a><ul id="zh-cn_topic_0249784584_ul1986519123412"><li>磁盘空间建议根据主机上的数据库节点数规划。数据库节点预留1GB空间的基础上，再适当预留冗余空间。</li><li>与<span id="zh-cn_topic_0249784584_text108660153411"><a name="zh-cn_topic_0249784584_text108660153411"></a><a name="zh-cn_topic_0249784584_text108660153411"></a>openGauss</span>所需其它路径相互独立，没有包含关系。</li></ul>
<p id="zh-cn_topic_0249784584_p10866412348"><a name="zh-cn_topic_0249784584_p10866412348"></a><a name="zh-cn_topic_0249784584_p10866412348"></a>此路径可选。不指定的情况下，<span id="zh-cn_topic_0249784584_text6866131173419"><a name="zh-cn_topic_0249784584_text6866131173419"></a><a name="zh-cn_topic_0249784584_text6866131173419"></a>openGauss</span>安装时会默认指定“$GAUSSLOG/安装用户名”作为日志目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a>tmpdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_p79071485351"><a name="zh-cn_topic_0249784584_p79071485351"></a><a name="zh-cn_topic_0249784584_p79071485351"></a>数据库临时文件存放目录。</p>
<p id="zh-cn_topic_0249784584_p29071084358"><a name="zh-cn_topic_0249784584_p29071084358"></a><a name="zh-cn_topic_0249784584_p29071084358"></a>若不配置tmpdbPath，默认存放在/opt/huawei/wisequery/perfadm_db目录下。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"></a><a name="zh-cn_topic_0249784584_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p32813568101039"></a>openGauss系统工具目录，主要用于存放互信工具等。此目录应满足如下要求：</p>
<a name="zh-cn_topic_0249784584_ul735382813519"></a><a name="zh-cn_topic_0249784584_ul735382813519"></a><ul id="zh-cn_topic_0249784584_ul735382813519"><li>磁盘空间&gt;100MB</li><li>固定目录，与数据库所需其它目录相互独立，没有包含关系。</li></ul>
<p id="zh-cn_topic_0249784584_p3353328143519"><a name="zh-cn_topic_0249784584_p3353328143519"></a><a name="zh-cn_topic_0249784584_p3353328143519"></a>此目录可选。不指定的情况下，<span id="zh-cn_topic_0249784584_text03531828163513"><a name="zh-cn_topic_0249784584_text03531828163513"></a><a name="zh-cn_topic_0249784584_text03531828163513"></a>openGauss</span>安装时会默认指定“/opt/huawei/wisequery”作为数据库系统工具目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784584_row10235118121016"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784584_p192361185103"><a name="zh-cn_topic_0249784584_p192361185103"></a><a name="zh-cn_topic_0249784584_p192361185103"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784584_p16236283104"><a name="zh-cn_topic_0249784584_p16236283104"></a><a name="zh-cn_topic_0249784584_p16236283104"></a>openGauss core文件的指定目录。</p>
</td>
</tr>
</tbody>
</table>

## 配置Host基本信息<a name="ZH-CN_TOPIC_0270171701"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>每台Host服务器都必须有如下信息，如下示例以node1为例。

加粗字体内容为示例，可自行替换。每行信息均有注释进行说明。

```
<!-- 每台服务器上的节点部署信息 -->
<DEVICELIST>
<!-- node1上的节点部署信息 -->
<DEVICE sn="node1_hostname">
<!-- node1的hostname -->
<PARAM name="name" value="node1_hostname"/>
<!-- node1所在的AZ及AZ优先级 -->
<PARAM name="azName" value="AZ1"/>
<PARAM name="azPriority" value="1"/>
<!-- node1的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
<PARAM name="backIp1" value="192.168.0.1"/>
<PARAM name="sshIp1" value="192.168.0.1"/>
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

## 配置数据库主节点信息<a name="ZH-CN_TOPIC_0270171702"></a>

加粗字体内容为示例，可自行替换。每行信息均有注释进行说明。

**数据库主节点配置以下信息。**

```
<!--DBnode-->
<PARAM name="dataNum" value="1"/>
<!--DBnode端口号-->
<PARAM name="dataPortBase" value="15400"/>
<!--DBnode主节点上数据目录，及备机数据目录-->
<PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
<!--DBnode节点上设定同步模式的节点数-->
<PARAM name="dataNode1_syncNum" value="0"/>
```

**表 1**  参数说明

<a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_table642932620115"></a>
<table><thead align="left"><tr id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0249784583_row178502422283"><td class="cellrowborder" rowspan="4" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p5691720101039"></a>当前主机上需要部署的数据库节点个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_p119281928007"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_p119281928007"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p6187782101039"></a>数据库节点的基础端口号，默认值40000。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784583_row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p59708452101039"></a>用于指定当前主机上的数据库节点的数据存储目录。此目录为数据库的数据存储目录。应规划到数据盘上。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784583_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784583_p1725855510222"><a name="zh-cn_topic_0249784583_p1725855510222"></a><a name="zh-cn_topic_0249784583_p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784583_p18258155510227"><a name="zh-cn_topic_0249784583_p18258155510227"></a><a name="zh-cn_topic_0249784583_p18258155510227"></a>可选参数，用于指定当前集群中同步模式的节点数目。取值范围为0~数据库备机节点数。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  数据库实例数据目录

<a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_table15838192510429"></a>
<table><thead align="left"><tr id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_row14838152510421"><th class="cellrowborder" valign="top" width="39.910000000000004%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p20433411202410"></a>实例名称</p>
</th>
<th class="cellrowborder" valign="top" width="60.089999999999996%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0241802596_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p44493607202410"></a>实例数据目录</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_row8839162524215"><td class="cellrowborder" valign="top" width="39.910000000000004%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p55748877202410"></a>主DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="60.089999999999996%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p19365159202410"></a>/opt/huawei/install/data/xxx</p>
<p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25074029202410"></a>其中，xxx为当前主DBnode的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784583_zh-cn_topic_0241802596_row68397259423"><td class="cellrowborder" valign="top" width="39.910000000000004%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p25356817202410"></a>备DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="60.089999999999996%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p40636326202410"></a>/opt/huawei/install/data/slaveX</p>
<p id="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"></a><a name="zh-cn_topic_0249784583_zh-cn_topic_0085434665_zh-cn_topic_0059782055_p3208132202410"></a>其中，slaveX为当前备DBnode的名称。</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="ZH-CN_TOPIC_0270171703"></a>

### 单节点配置文件<a name="zh-cn_topic_0249784528_section1698454873416"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- openGauss整体信息 -->
    <CLUSTER>
        <PARAM name="clusterName" value="dbCluster" />
        <PARAM name="nodeNames" value="node1_hostname" />
       
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <PARAM name="corePath" value="/opt/huawei/corefile" />
        <PARAM name="backIp1s" value="192.168.0.1"/>
       
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
            
	    <!--dbnode-->
	    <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>
    </DEVICELIST>
</ROOT>
```

### 一主一备配置文件<a name="zh-cn_topic_0249784528_section946242113712"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- openGauss整体信息 -->
    <CLUSTER>
        <PARAM name="clusterName" value="Cluster_template" />
        <PARAM name="nodeNames" value="node1_hostname,node2_hostname" />
        
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/>
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <PARAM name="corePath" value="/opt/huawei/corefile"/>
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2"/>
        
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
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
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
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

