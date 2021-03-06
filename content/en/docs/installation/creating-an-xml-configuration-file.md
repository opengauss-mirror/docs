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

The information in bold is only an example. You can replace it as required. Each line of information is commented out.

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
<!-- Overall information -->
  <CLUSTER>
  <!-- Database name -->
    <PARAM name="clusterName" value="Sample1" />  
  <!-- Database node name (hostname) -->
    <PARAM name="nodeNames" value="node1,node2" />
  <!-- Node IP addresses corresponding to the node names, respectively -->
    <PARAM name="backIp1s" value="192.168.0.11,192.168.0.12"/>
  <!-- Database installation path -->
    <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
  <!-- Log directory -->
    <PARAM name="gaussdbLogPath" value="/var/log/omm" />
  <!-- Temporary file directory -->
    <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
  <!-- Database tool directory -->
    <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
  <!--Directory of the core file of the database -->
    <PARAM name="corePath" value="/opt/huawei/corefile"/>
<!-- openGauss deployment type. A single-instance cluster is used as an example here, that is, one primary node and multiple standby nodes are deployed. -->
    <PARAM name="clusterType" value="single-inst"/>
  </CLUSTER>
```

![](public_sys-resources/icon-notice.gif) **NOTICE:**   
-   The  **/opt/huawei/install/om**  directory is used to store tools for mutual trust. To avoid permission problems, do not store instance data in the directory.  
-   The installation and data directories must be empty or do not exist. Otherwise, the installation may fail.  
-   When configuring database instances, ensure that the configured directories are not coupled with each other. This means that the configured directories must not be associated with each other. If any directory is deleted, the other directories will not be deleted accordingly. For example,  **gaussdbAppPath**  is  **/opt/huawei/install/app**  and  **gaussdbLogPath**  is  **/opt/huawei/install/app/omm**. If the directory specified by  **gaussdbAppPath**  is deleted, that specified by  **gaussdbLogPath**  will also be deleted, causing unexpected problems.  
-   If the installation script is required to automatically create installation users, ensure that the configured directories are not coupled with the default user directories created by the system.  
-   The openGauss and instance paths cannot contain double backslashes \(\\\\\) or the following characters: |;&$<\>\`'\\"\{\}\(\)\[\]\~\*?  
-   When configuring the database node name, run the  **hostname**  command to obtain the host name of the database node and replace  **node1**  and  **node2**  in the example with the obtained host name.  

**Table  1**  Parameter description

<a name="table1876635205813"></a>
<table><thead align="left"><tr id="row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="16.8016801680168%" id="mcps1.2.4.1.2"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.32723272327232%" id="mcps1.2.4.1.3"><p id="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row2076785215584"><td class="cellrowborder" rowspan="9" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall information</p>
</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a>clusterName</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a>openGauss name.</p>
</td>
</tr>
<tr id="row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a>Host name in the openGauss.</p>
</td>
</tr>
<tr id="row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p48031547203112"><a name="p48031547203112"></a><a name="p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a>Installation directory of the openGauss program. This directory must meet the following requirements:</p>
<a name="ul6325251103320"></a><a name="ul6325251103320"></a><ul id="ul6325251103320"><li>The disk space is greater than 1 GB.</li><li>This directory is independent of other directories required by the database.</li></ul>
</td>
</tr>
<tr id="row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a>Directory that stores run logs and operation logs of the openGauss. This directory must meet the following requirements:</p>
<a name="ul1986519123412"></a><a name="ul1986519123412"></a><ul id="ul1986519123412"><li>You are advised to plan the disk space based on the number of database nodes on the host. Reserve 1 GB space for database nodes and reserve redundant space.</li><li>This directory is independent of other directories required by the <span id="text108660153411"><a name="text108660153411"></a><a name="text108660153411"></a>openGauss</span>.</li></ul>
<p id="p10866412348"><a name="p10866412348"></a><a name="p10866412348"></a>This directory is optional. If the directory is not specified, <strong id="b128841210101"><a name="b128841210101"></a><a name="b128841210101"></a>$GAUSSLOG/</strong><em id="i1088932111018"><a name="i1088932111018"></a><a name="i1088932111018"></a>Installation username</em> will be specified as the log directory by default during <span id="text6866131173419"><a name="text6866131173419"></a><a name="text6866131173419"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a>tmpdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p79071485351"><a name="p79071485351"></a><a name="p79071485351"></a>Directory for storing temporary database files.</p>
<p id="p29071084358"><a name="p29071084358"></a><a name="p29071084358"></a>If <strong id="b48633129117"><a name="b48633129117"></a><a name="b48633129117"></a>tmpdbPath</strong> is not set, the file is stored in <strong id="b1511512195110"><a name="b1511512195110"></a><a name="b1511512195110"></a>/opt/huawei/wisequery/perfadm_db</strong> by default.</p>
</td>
</tr>
<tr id="row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a>Directory for storing openGauss system tools. This directory is used to store tools for mutual trust. This directory must meet the following requirements:</p>
<a name="ul735382813519"></a><a name="ul735382813519"></a><ul id="ul735382813519"><li>The disk space is greater than 100 MB.</li><li>This directory cannot be changed and is independent of other directories required by the database.</li></ul>
<p id="p3353328143519"><a name="p3353328143519"></a><a name="p3353328143519"></a>This directory is optional. If this parameter is not specified, <strong id="b16555347121"><a name="b16555347121"></a><a name="b16555347121"></a>/opt/huawei/wisequery</strong> is specified as the database system tool directory by default during <span id="text03531828163513"><a name="text03531828163513"></a><a name="text03531828163513"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="row10235118121016"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p192361185103"><a name="p192361185103"></a><a name="p192361185103"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16236283104"><a name="p16236283104"></a><a name="p16236283104"></a>Directory for storing the openGauss core file.</p>
</td>
</tr>
<tr id="row832682915591"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p35349439152452"><a name="p35349439152452"></a><a name="p35349439152452"></a>clusterType</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p6357195112719"><a name="p6357195112719"></a><a name="p6357195112719"></a>openGauss type cluster type. This parameter is optional.</p>
<p id="p1748134115819"><a name="p1748134115819"></a><a name="p1748134115819"></a><strong id="b464353817134"><a name="b464353817134"></a><a name="b464353817134"></a>single-inst</strong> indicates the standalone cluster with one primary node and multiple standby nodes.</p>
</td>
</tr>
</tbody>
</table>

## Configuring the Basic Host Information

![](public_sys-resources/icon-note.gif) **NOTE:** 
Each server must contain the following information. The following uses  **node1**  as an example.

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

![](public_sys-resources/icon-note.gif) **NOTE:**   
Only one IP address can be configured for all IP parameters \(including  **backIp**,  **sshIp**, and  **listenIp**\) in the configuration file. Excessive IP addresses are ignored.  
For example, you can configure  **backIp1**  and  **backIp2**  in the XML configuration file as follows:  
When the file is parsed, only  **backIp1**  takes effect.  
```  
<PARAM name="backIp1" value="192.168.0.11"/>  
<PARAM name="backIp2" value="192.168.0.12"/>  
```

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
<!-- Number of nodes for which the synchronization mode is set on the database node -->
<PARAM name="dataNode1_syncNum" value="0"/>
```

**Table  1**  Parameter description

<a name="en-us_topic_0241802596_table642932620115"></a>
<table><thead align="left"><tr id="en-us_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row178502422283"><td class="cellrowborder" rowspan="6" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a>Number of database nodes to be deployed on the current host.</p>
</td>
</tr>
<tr id="en-us_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802596_p119281928007"><a name="en-us_topic_0241802596_p119281928007"></a><a name="en-us_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a>Basic port number of the database node. The default value is <strong id="b7321183910213"><a name="b7321183910213"></a><a name="b7321183910213"></a>40000</strong>.</p>
</td>
</tr>
<tr id="row196421844162013"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p69281428009"><a name="p69281428009"></a><a name="p69281428009"></a>dataListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p19929152819012"><a name="p19929152819012"></a><a name="p19929152819012"></a>Listening IP address. If this parameter is not set, the value is determined based on <strong id="b15441914105216"><a name="b15441914105216"></a><a name="b15441914105216"></a>backIp1</strong> of the corresponding host.</p>
<p id="p14929182812017"><a name="p14929182812017"></a><a name="p14929182812017"></a>The first and second IP addresses are the IP addresses of the hosts where the primary and standby nodes reside, respectively.</p>
</td>
</tr>
<tr id="row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a>Directory for storing data of the database nodes on the current host. It is a data storage directory, and should be on a data disk.</p>
</td>
</tr>
<tr id="row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1725855510222"><a name="p1725855510222"></a><a name="p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p18258155510227"><a name="p18258155510227"></a><a name="p18258155510227"></a>Number of nodes in synchronous mode in the current cluster. This parameter is optional. The value ranges from 0 to the number of standby database nodes.</p>
</td>
</tr>
</tbody>
</table>


## Examples

### Configuration File for Single-Instance Deployment<a name="section1698454873416"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
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
    <!-- Information about the node deployment on each server -->
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
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
    <!-- Overall information about openGauss -->
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
    <!-- Information about the node deployment on each server -->
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
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for One Primary and Two Standbys<a name="section5994144164010"></a>

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
    <!-- Information about the node deployment on each server -->
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
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for One Primary and Three Standbys<a name="section165518595406"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
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
    <!-- Information about the node deployment on each server -->
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
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
	</DEVICE>

        <!-- Node deployment information on node4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname">
            <PARAM name="name" value="node4_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/>
            <PARAM name="sshIp1" value="192.168.0.4"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration File for One Primary and Four Standbys<a name="section56037824118"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
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
    <!-- Information about the node deployment on each server -->
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
	</DEVICE>

        <!-- Node deployment information on node3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/>
            <PARAM name="sshIp1" value="192.168.0.3"/>
	</DEVICE>

        <!-- Node deployment information on node4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname">
            <PARAM name="name" value="node4_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/>
            <PARAM name="sshIp1" value="192.168.0.4"/>
	</DEVICE>

        <!-- Node deployment information on node5. The value of name is the host name. -->
        <DEVICE sn="node5_hostname">
            <PARAM name="name" value="node5_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.5"/>
            <PARAM name="sshIp1" value="192.168.0.5"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

