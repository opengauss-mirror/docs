# 配置Host基本信息<a name="ZH-CN_TOPIC_0249784567"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>每台Host服务器都必须有如下信息，如下示例以node1为例。

加粗字体内容为示例，可自行替换。每行信息均有注释进行说明。

```
<!-- 每台服务器上的节点部署信息 -->
<DEVICELIST>
<!-- node1上的节点部署信息 -->
<DEVICE sn="1000001">
<!-- node1的hostname -->
<PARAM name="name" value="node1"/>
<!-- node1所在的AZ及AZ优先级 -->
<PARAM name="azName" value="AZ1"/>
<PARAM name="azPriority" value="1"/>
<!-- node1的IP，如果服务器只有一个网卡可用，将backIP1和sshIP1配置成同一个IP -->
<PARAM name="backIp1" value="192.168.0.11"/>
<PARAM name="sshIp1" value="192.168.0.11"/>
```

**表 1**  参数说明

<a name="table1876635205813"></a>
<table><thead align="left"><tr id="row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p45714015101039"></a>实例类型</p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p11847771101039"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.36723672367236%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p20145362101039"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row2076785215584"><td class="cellrowborder" rowspan="5" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p36371799101039"></a>整体信息</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="p131821197365"><a name="p131821197365"></a><a name="p131821197365"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="72.36723672367236%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p25144333101039"></a>主机名称。</p>
</td>
</tr>
<tr id="row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1906425183611"><a name="p1906425183611"></a><a name="p1906425183611"></a>azName</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p2085417394617"><a name="p2085417394617"></a><a name="p2085417394617"></a>指定azName（Available Zone Name），字符串（不能含有特殊字符），例如AZ1、AZ2、AZ3。</p>
</td>
</tr>
<tr id="row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p857520312368"><a name="p857520312368"></a><a name="p857520312368"></a>azPriority</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p8997131616389"><a name="p8997131616389"></a><a name="p8997131616389"></a>指定azPriority的优先级。</p>
</td>
</tr>
<tr id="row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17976123919369"><a name="p17976123919369"></a><a name="p17976123919369"></a>backIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p31230749101039"></a>主机在后端存储网络中的IP地址（内网IP）。所有openGauss主机使用后端存储网络通讯。</p>
</td>
</tr>
<tr id="row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p14456479368"><a name="p14456479368"></a><a name="p14456479368"></a>sshIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"></a><a name="zh-cn_topic_0085434621_zh-cn_topic_0059782004_p3419464101039"></a>设置SSH可信通道IP地址（外网IP）。若无外网，则可以不设置该选项或者同backIp1设置相同IP。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>配置文件中所有IP参数（包含backIp、sshIp、listenIp等）均只支持配置一个IP。如果配置第二个IP参数，则不会读取第二个参数的配置值。
>示例：xml配置文件中同时配置backIp1和backIp2参数：
>在解析配置文件时仅读取backIp1参数的配置值，不会读取backIp2参数的配置值。
>```
><PARAM name="backIp1" value="192.168.0.11"/>
><PARAM name="backIp2" value="192.168.0.12"/>
>```

