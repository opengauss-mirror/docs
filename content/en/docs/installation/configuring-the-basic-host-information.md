# Configuring the Basic Host Information<a name="EN-US_TOPIC_0249784567"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Each server must contain the following information. The following uses  **node1**  as an example.  

The information in bold is only an example. You can replace it as required. Each line of information is commented out.

```
<!-- Information about node deployment on each server -->
<DEVICELIST>
  <!-- Information about the node deployment on node1 -->
<DEVICE sn="1000001">
<!-- Host name of node1 -->
<PARAM name="name" value="node1"/>
<!-- AZ where node1 is located and AZ priority -->
<PARAM name="azName" value="AZ1"/>
<PARAM name="azPriority" value="1"/>
<!-- IP address of node1. If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
<PARAM name="backIp1" value="192.168.0.11"/>
<PARAM name="sshIp1" value="192.168.0.11"/>
```

**Table  1**  Parameter description

<a name="table1876635205813"></a>
<table><thead align="left"><tr id="row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.36723672367236%" id="mcps1.2.4.1.3"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row2076785215584"><td class="cellrowborder" rowspan="5" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall information</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="p131821197365"><a name="p131821197365"></a><a name="p131821197365"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="72.36723672367236%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"></a>Host name.</p>
</td>
</tr>
<tr id="row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1906425183611"><a name="p1906425183611"></a><a name="p1906425183611"></a>azName</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p2085417394617"><a name="p2085417394617"></a><a name="p2085417394617"></a>AZ name. The value is a character string that cannot contain special characters, for example, AZ1, AZ2, and AZ3.</p>
</td>
</tr>
<tr id="row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p857520312368"><a name="p857520312368"></a><a name="p857520312368"></a>azPriority</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p8997131616389"><a name="p8997131616389"></a><a name="p8997131616389"></a>AZ priority.</p>
</td>
</tr>
<tr id="row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17976123919369"><a name="p17976123919369"></a><a name="p17976123919369"></a>backIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p14456479368"><a name="p14456479368"></a><a name="p14456479368"></a>sshIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"></a>External IP address of the SSH reliable channel. If no external network is used, you can leave it empty or set it to the value of <strong>backIp1</strong>.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Only one IP address can be configured for all IP parameters \(including  **backIp**,  **sshIp**, and  **listenIp**\) in the configuration file. Excessive IP addresses are ignored.  
>For example, you can configure  **backIp1**  and  **backIp2**  in the XML configuration file as follows:  
>When the file is parsed, only  **backIp1**  takes effect.  
>```  
><PARAM name="backIp1" value="192.168.0.11"/>  
><PARAM name="backIp2" value="192.168.0.12"/>  
>```  

