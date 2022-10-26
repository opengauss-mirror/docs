# Creating an XML Configuration File<a name="EN-US_TOPIC_0249784581"></a>

<!-- TOC -->

- [Configuring the Database Name and Directories](#configuring-the-database-name-and-directories)
- [Configuring the Basic Host Information](#configuring-the-basic-host-information)
- [Configuring Primary Database Node Information](#configuring-primary-database-node-information)
- [Examples](#examples)

<!-- /TOC -->

Before installing the openGauss, you need to create the  **clusterconfig.xml**  file. The  **clusterconfig.xml**  file contains the information about the server where the openGauss is deployed, installation path, IP address, and port number. This file is used to guide how to deploy the openGauss. You need to configure the XML configuration file according to the actual deployment requirements.

The following describes how to create an XML configuration file based on the deployment solution of one primary node and one standby node.


## Configuring the Database Name and Directories

Obtain the XML file template from  **script/gspylib/etc/conf/cluster\_config\_template.xml**. The information in bold is only an example. You can replace it as required. Each line of information is commented out.

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
  <!-- Overall information -->
  <CLUSTER>
  <!-- Database name -->
    <PARAM name="clusterName" value="Cluster_template" />  
  <!-- Database node name (hostname) -->
    <PARAM name="nodeNames" value="node1_hostname,node2_hostname" />
  <!-- Database installation directory -->
    <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
  <!-- Log directory -->
    <PARAM name="gaussdbLogPath" value="/var/log/omm" />
  <!-- Temporary file directory -->
    <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
  <!-- Database tool directory -->
    <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
  <!--Directory of the core file of the database -->
    <PARAM name="corePath" value="/opt/huawei/corefile"/>
  <!-- Node IP addresses corresponding to the node names, respectively -->
    <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2"/>
    <!-- Whether to enable automatic primary DN selection -->
    <PARAM name="enable_dcf" value="on"/>
    <!-- Node IP address, port number, and role information after the function is enabled-->
    <PARAM name="dcf_config" value="[{&quot;stream_id&quot;:1,&quot;node_id&quot;:1,&quot;ip&quot;:&quot;8.92.1.85&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;LEADER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:2,&quot;ip&quot;:&quot;8.92.1.86&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:3,&quot;ip&quot;:&quot;8.92.1.87&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;}]"/>
  
  </CLUSTER>
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>-   The  **/opt/huawei/install/om**  directory is used to store tools such as mutual trust. To avoid permission problems, do not store instance data in the directory.
>-   The installation and data directories must be empty or do not exist. Otherwise, the installation may fail.
>-   When configuring database instances, ensure that the configured directories are not coupled with each other. This means that the configured directories must not be associated with each other. If any directory is deleted, the other directories will not be deleted accordingly. For example,  **gaussdbAppPath**  is  **/opt/huawei/install/app**  and  **gaussdbLogPath**  is  **/opt/huawei/install/app/omm**. If the directory specified by  **gaussdbAppPath**  is deleted, that specified by  **gaussdbLogPath**  will also be deleted, causing unexpected problems.
>-   If the installation script is required to automatically create installation users, ensure that the configured directories are not coupled with the default user directories created by the system.
>-   The openGauss and instance paths cannot contain double backslashes \(\\\\\) or the following characters: "|",";","&","$","<",">","`","\\","'","\"","{","}","(",")","[","]","~","*", and "?".
>-   When configuring the database node name, run the  **hostname**  command to obtain the host name of the database node and replace  **node1\_hostname**  and  **node2\_hostname**  in the example with the obtained host name.
>-   During **dcf_config** configuration, the roles include leader, follower, passive, and logger. The roles that can vote include leader, follower, and logger. During role networking configuration, at least three roles can vote. Therefore, at least three nodes are required in DCF mode.

**Table  1**  Parameter description

<a name="en-us_topic_0283136466_table1876635205813"></a>

<table><thead align="left"><tr id="en-us_topic_0283136466_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="16.8016801680168%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.32723272327232%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136466_row2076785215584"><td class="cellrowborder" rowspan="8" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall information</p>
</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a>clusterName</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a>openGauss name.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a>Host name in the openGauss.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_p48031547203112"><a name="en-us_topic_0283136466_p48031547203112"></a><a name="en-us_topic_0283136466_p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a>Installation directory of the openGauss program. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul6325251103320"></a><a name="en-us_topic_0283136466_ul6325251103320"></a><ul id="en-us_topic_0283136466_ul6325251103320"><li>The disk space is greater than 1 GB.</li><li>This directory is independent of other directories required by the database.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136466_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a>Directory that stores run logs and operation logs of the openGauss. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul1986519123412"></a><a name="en-us_topic_0283136466_ul1986519123412"></a><ul id="en-us_topic_0283136466_ul1986519123412"><li>You are advised to plan the disk space based on the number of database nodes on the host. Reserve 1 GB space for database nodes and reserve redundant space.</li><li>This directory is independent of other directories required by the <span id="en-us_topic_0283136466_text108660153411"><a name="en-us_topic_0283136466_text108660153411"></a><a name="en-us_topic_0283136466_text108660153411"></a>openGauss</span>.</li></ul>
<p id="en-us_topic_0283136466_p10866412348"><a name="en-us_topic_0283136466_p10866412348"></a><a name="en-us_topic_0283136466_p10866412348"></a>This directory is optional. If the directory is not specified, <strong id="b128841210101"><a name="b128841210101"></a><a name="b128841210101"></a>$GAUSSLOG/</strong><em id="i1088932111018"><a name="i1088932111018"></a><a name="i1088932111018"></a>Installation username</em> will be specified as the log directory by default during <span id="en-us_topic_0283136466_text6866131173419"><a name="en-us_topic_0283136466_text6866131173419"></a><a name="en-us_topic_0283136466_text6866131173419"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a>tmpMppdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_p79071485351"><a name="en-us_topic_0283136466_p79071485351"></a><a name="en-us_topic_0283136466_p79071485351"></a>Directory for storing temporary database files.</p>
<p id="en-us_topic_0283136466_p29071084358"><a name="en-us_topic_0283136466_p29071084358"></a><a name="en-us_topic_0283136466_p29071084358"></a>If <strong id="b8456541792"><a name="b8456541792"></a><a name="b8456541792"></a>tmpMppdbPath</strong> is not set, the files are stored in <strong id="b427311571695"><a name="b427311571695"></a><a name="b427311571695"></a>/opt/huawei/wisequery/</strong><em id="i1586967181010"><a name="i1586967181010"></a><a name="i1586967181010"></a>installation user name</em><strong id="b8437141218103"><a name="b8437141218103"></a><a name="b8437141218103"></a>_mppdb</strong> by default. In the path, <strong id="b9631521101019"><a name="b9631521101019"></a><a name="b9631521101019"></a>opt/huawei/wisequery</strong> is the default directory for storing database system tools.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a>Directory for storing openGauss system tools. This directory is used to store tools for mutual trust. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul735382813519"></a><a name="en-us_topic_0283136466_ul735382813519"></a><ul id="en-us_topic_0283136466_ul735382813519"><li>The disk space is greater than 100 MB.</li><li>This directory cannot be changed and is independent of other directories required by the database.</li></ul>
<p id="en-us_topic_0283136466_p3353328143519"><a name="en-us_topic_0283136466_p3353328143519"></a><a name="en-us_topic_0283136466_p3353328143519"></a>This directory is optional. If this parameter is not specified, <strong id="b16555347121"><a name="b16555347121"></a><a name="b16555347121"></a>/opt/huawei/wisequery</strong> is specified as the database system tool directory by default during <span id="en-us_topic_0283136466_text03531828163513"><a name="en-us_topic_0283136466_text03531828163513"></a><a name="en-us_topic_0283136466_text03531828163513"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="en-us_topic_0283136466_row10235118121016"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_p192361185103"><a name="en-us_topic_0283136466_p192361185103"></a><a name="en-us_topic_0283136466_p192361185103"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_p16236283104"><a name="en-us_topic_0283136466_p16236283104"></a><a name="en-us_topic_0283136466_p16236283104"></a>Directory for storing the openGauss core file.</p>
</td>
</tr>
<tr id="row12418151285918"><td class="cellrowborder" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="p104180128590"><a name="p104180128590"></a><a name="p104180128590"></a>enable_dcf</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p44181412175911"><a name="p44181412175911"></a><a name="p44181412175911"></a>Determines whether to enable the DCF mode.</p>
</td>
</tr>
<tr id="row490515610593"><td class="cellrowborder" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="p19056695920"><a name="p19056695920"></a><a name="p19056695920"></a>dcf_config</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p16905176195917"><a name="p16905176195917"></a><a name="p16905176195917"></a>DCF startup node information, which is configured when the DCF mode is enabled.</p>
</td>
</tr>
</tbody>
</table>



## Configuring the Basic Host Information

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Each server must contain the following information. The following uses  **node1**  as an example.
>
The content is an example and can be replaced as required. Each line of information has a comment.

**Configure the following information on the host:**

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
<!-- Specifies whether node1 is a cascaded standby node. on indicates that the instance is a cascaded standby node. In addition, the cascaded standby node must be configured with a standby node in the same AZ.-->
<PARAM name="cascadeRole" value="on"/>
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
>
## Configuring Primary Database Node Information

The information in bold is only an example. You can replace it as required. Each line of information is commented out.

**Configure the following information for the primary database node:**

```
<!--DBnode-->
<PARAM name="dataNum" value="1"/>
<!-- Database node port number -->
<PARAM name="dataPortBase" value="15400"/>
<!-- Listening IP address of the database node -->
<PARAM name="dataListenIp1" value="172.31.13.124,172.31.6.198"/>
<!-- Data directory on the primary database node and data directories of standby nodes -->
<PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
<!-- Xlog directories on the primary database node and on the standby database node -->
<PARAM name="dataNodeXlogPath1" value="/home/omm/gauss_xlog,/home/omm/gauss_xlog "/>
<!-- Number of nodes for which the synchronization mode is set on the database node -->
<PARAM name="dataNode1_syncNum" value="0"/>
 <!--Configuration of the DCF data file-->
<PARAM name="dcf_data_path1" value="/opt/huawei/install/data/dn1,/opt/huawei/install/data/dn2"/>
<!--DCF run logs-->
<PARAM name="dcf_log_path1" value="/opt/huawei/install/data/dn1,/opt/huawei/install/data/dn2"/>

```

**Table  1**  Parameter description

<a name="en-us_topic_0283136469_en-us_topic_0241802596_table642932620115"></a>

<table><thead align="left"><tr id="en-us_topic_0283136469_en-us_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136469_row178502422283"><td class="cellrowborder" rowspan="6" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a>Number of database nodes to be deployed on the current host</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_en-us_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"><a name="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a>Basic port number of the database node. The default value is <strong id="b7321183910213"><a name="b7321183910213"></a><a name="b7321183910213"></a>40000</strong>.</p>
</td>
</tr>
<tr id="row196421844162013"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p69281428009"><a name="p69281428009"></a><a name="p69281428009"></a>dataListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p19929152819012"><a name="p19929152819012"></a><a name="p19929152819012"></a>Listening IP address. If this parameter is not set, the value is determined based on <strong id="b15441914105216"><a name="b15441914105216"></a><a name="b15441914105216"></a>backIp1</strong> of the corresponding host.</p>
<p id="p14929182812017"><a name="p14929182812017"></a><a name="p14929182812017"></a>The first and second IP addresses are the IP addresses of the hosts where the primary and standby nodes reside, respectively.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a>Directory for storing data of the database nodes on the current host. It is a data storage directory, and should be on a data disk.</p>
</td>
</tr>
<tr id="row02471711689"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p62485111817"><a name="p62485111817"></a><a name="p62485111817"></a>dataNodeXlogPath1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1124918118811"><a name="p1124918118811"></a><a name="p1124918118811"></a>Path for storing Xlogs in the current database. This parameter is optional. This directory is used to store database Xlogs and can only be an absolute path. If this parameter is not specified, the log file is stored in the <strong id="b0974115932320"><a name="b0974115932320"></a><a name="b0974115932320"></a>pg_xlog</strong> directory of the data directory by default.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_p1725855510222"><a name="en-us_topic_0283136469_p1725855510222"></a><a name="en-us_topic_0283136469_p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_p18258155510227"><a name="en-us_topic_0283136469_p18258155510227"></a><a name="en-us_topic_0283136469_p18258155510227"></a>Number of nodes in synchronous mode in the current database. This parameter is optional. The value ranges from 0 to the number of standby database nodes.</p>
</td>
</tr>
<tr id="row67681815617"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="p15761318175616"><a name="p15761318175616"></a><a name="p15761318175616"></a>dcf_data_path1</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="p7771718105614"><a name="p7771718105614"></a><a name="p7771718105614"></a>Data file directory in DCF mode. This parameter is optional and needs to be configured when the DCF is configured.</p>
</td>
</tr>
<tr id="row4122204045615"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="p12122174018563"><a name="p12122174018563"></a><a name="p12122174018563"></a>dcf_log_path1</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="p712294019565"><a name="p712294019565"></a><a name="p712294019565"></a>Directory for storing run log files in DCF mode. This parameter is optional and needs to be configured when the DCF is configured.</p>
</td>
</tr>
</tbody>
</table>


## Configuring the CM Server (Primary/Non-Primary) Information

**Configure the following information for the non-primary CMS nodes:**

```
<!-- cm -->
<PARAM name="cmServerPortStandby" value="25500"/>
<PARAM name="cmDir" value="/opt/huawei/data/cm"/>
```

```
<!-- cm -->
<PARAM name="cmServerPortStandby" value="25500"/>
<PARAM name="cmDir" value="/opt/huawei/data/cm"/>
```

**table 1**  Parameter Description

<a name="table642932620115"></a>

<table><thead align="left"><tr id="row1543052614113"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.212521252125214%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a><a name="zh-cn_topic_0085434641_zh-cn_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1343016261112"><td class="cellrowborder" rowspan="5" valign="top" width="14.84148414841484%" headers="mcps1.2.4.1.1 "><p id="p1752719501213"><a name="p1752719501213"></a><a name="p1752719501213"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="25.212521252125214%" headers="mcps1.2.4.1.2 "><p id="p138772053175815"><a name="p138772053175815"></a><a name="p138772053175815"></a>cmServerPortBase</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="p08776536586"><a name="p08776536586"></a><a name="p08776536586"></a>Port number of the primary CM server. The default value is 5000.</p>
</td>
</tr>
<tr id="row462419461815"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p3877105311589"><a name="p3877105311589"></a><a name="p3877105311589"></a>cmServerPortStandby</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p487755311588"><a name="p487755311588"></a><a name="p487755311588"></a>Port number of the standby CM server. The default value is 5500.</p>
</td>
</tr>
<tr id="row243013261715"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16877165315584"><a name="p16877165315584"></a><a name="p16877165315584"></a>cmServerListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p7877115312585"><a name="p7877115312585"></a><a name="p7877115312585"></a>IP address used by the CM server to listen to the CM agent connection requests or the database administrator's cluster management requests.</p>
</td>
</tr>
<tr id="row1643082612118"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p4877145395811"><a name="p4877145395811"></a><a name="p4877145395811"></a>cmServerHaIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p18771153115819"><a name="p18771153115819"></a><a name="p18771153115819"></a>IP addresses for communication between the primary and standby CM servers.</p>
<p id="p12877195316581"><a name="p12877195316581"></a><a name="p12877195316581"></a>
In the parameter value, the first and second IP addresses are the IP addresses of the hosts where the primary and standby CM servers reside, respectively. If this parameter is not set, the value is determined based on backIp1 of the hosts where the primary and standby CM servers reside.
</p>
</td>
</tr>
<tr id="row1843010268113"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p128781753205814"><a name="p128781753205814"></a><a name="p128781753205814"></a>cmDir</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p8878135305818"><a name="p8878135305818"></a><a name="p8878135305818"></a>CM data file directory. The directory is used to store the data files and parameter files used by the CM server and CM agent.
</p>
<p id="p1187855355815"><a name="p1187855355815"></a><a name="p1187855355815"></a>This parameter must be set on every host in the cluster.</p>
</td>
</tr>
</tbody>
</table>

**table 2**  Directory Description

| Directory        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| /opt/huawei/data | Directory that stores instance data of the cluster. It is a data storage directory, and should be on a data disk.This directory must meet the following requirements:The disk space is planned according the actual service data volume.Directories for storing data of each instance are independent from each other. The following table lists planning for the data directory of each instance in this document.|

**table 3** Database instance data directories

| Instance Name | Instance Data Directory                                      |
| ------------- | ------------------------------------------------------------ |
| CM            | /opt/huawei/data/cm                                          |
| Primary DN    | /opt/huawei/data/masterXIn the directory, *X* is a consecutive positive integer starting from 1, identifying the Xth DN on the current host. |
| Standby DN    | /opt/huawei/data/slaveXIn the directory, *X* is a consecutive positive integer starting from 1, identifying the Xth standby DN on the current host. |

## Examples

### Configuration File for Single-Instance Deployment<a name="section1698454873416"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname" />
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
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

### Configuration File for Primary/Standby Deployment<a name="section946242113712"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

## Configuration File for Primary/Standby Deployment<a name="en-us_topic_0283136481_section946242113712"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for Primary/Standby/Cascaded Deployment<a name="section19214451895"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
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
    <!-- Information about node deployment on each server -->
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>

	    <!-- Primary CM -->
	    <PARAM name="cmsNum" value="1"/>
	    <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
	    <PARAM name="cmServerPortBase" value="15300"/>
	    <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/>
	    <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3"/>
	    <!-- CM server level. Currently, only 1 is supported. -->
	    <PARAM name="cmServerlevel" value="1"/>
	    <!-- Host names of the primary and standby CMS nodes -->
	    <PARAM name="cmServerRelation" value="node1_hostname,node2_hostname,node3_hostname"/>
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
            <!-- cm -->
            <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
            <PARAM name="cmServerPortStandby" value="15300"/>
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
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

### Configuration File for One Primary and Two Standbys<a name="section5994144164010"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            <!-- CM node deployment information -->
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

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for One Primary and Three Standbys<a name="section165518595406"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            <!-- CM node deployment information -->
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

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname">
            <PARAM name="name" value="node4_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/>
            <PARAM name="sshIp1" value="192.168.0.4"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for One Primary and Four Standbys<a name="section56037824118"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    
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
    
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            <!-- CM node deployment information -->
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

        <!-- Node deployment information on node2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname">
            <PARAM name="name" value="node4_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/>
            <PARAM name="sshIp1" value="192.168.0.4"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>

        <!-- Node deployment information on node5. The value of name is the host name. -->
        <DEVICE sn="node5_hostname">
            <PARAM name="name" value="node5_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.5"/>
            <PARAM name="sshIp1" value="192.168.0.5"/>
            <!-- cm -->
            <PARAM name="cmServerPortStandby" value="15000"/>
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```
