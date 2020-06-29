# Configuring the Database Name and Directories<a name="EN-US_TOPIC_0251900899"></a>

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

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   The  **/opt/huawei/install/om**  directory is used to store tools for mutual trust. To avoid permission problems, do not store instance data in the directory.  
>-   The installation and data directories must be empty or do not exist. Otherwise, the installation may fail.  
>-   When configuring database instances, ensure that the configured directories are not coupled with each other. This means that the configured directories must not be associated with each other. If any directory is deleted, the other directories will not be deleted accordingly. For example,  **gaussdbAppPath**  is  **/opt/huawei/install/app**  and  **gaussdbLogPath**  is  **/opt/huawei/install/app/omm**. If the directory specified by  **gaussdbAppPath**  is deleted, that specified by  **gaussdbLogPath**  will also be deleted, causing unexpected problems.  
>-   If the installation script is required to automatically create installation users, ensure that the configured directories are not coupled with the default user directories created by the system.  
>-   The openGauss and instance paths cannot contain double backslashes \(\\\\\) or the following characters: |;&$<\>\`'\\"\{\}\(\)\[\]\~\*?  
>-   When configuring the database node name, run the  **hostname**  command to obtain the host name of the database node and replace  **node1**  and  **node2**  in the example with the obtained host name.  

**Table  1**  Parameter description

<a name="en-us_topic_0249784584_table1876635205813"></a>
<table><thead align="left"><tr id="en-us_topic_0249784584_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="16.8016801680168%" id="mcps1.2.4.1.2"><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.32723272327232%" id="mcps1.2.4.1.3"><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0249784584_row2076785215584"><td class="cellrowborder" rowspan="9" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall information</p>
</td>
<td class="cellrowborder" valign="top" width="16.8016801680168%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63365422101039"></a>clusterName</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a>openGauss name.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a>Host name in the openGauss.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_p48031547203112"><a name="en-us_topic_0249784584_p48031547203112"></a><a name="en-us_topic_0249784584_p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a>Installation directory of the openGauss program. This directory must meet the following requirements:</p>
<a name="en-us_topic_0249784584_ul6325251103320"></a><a name="en-us_topic_0249784584_ul6325251103320"></a><ul id="en-us_topic_0249784584_ul6325251103320"><li>The disk space is greater than 1 GB.</li><li>This directory is independent of other directories required by the database.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0249784584_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a>Directory that stores run logs and operation logs of the openGauss. This directory must meet the following requirements:</p>
<a name="en-us_topic_0249784584_ul1986519123412"></a><a name="en-us_topic_0249784584_ul1986519123412"></a><ul id="en-us_topic_0249784584_ul1986519123412"><li>You are advised to plan the disk space based on the number of database nodes on the host. Reserve 1 GB space for database nodes and reserve redundant space.</li><li>This directory is independent of other directories required by the <span id="en-us_topic_0249784584_text108660153411"><a name="en-us_topic_0249784584_text108660153411"></a><a name="en-us_topic_0249784584_text108660153411"></a>openGauss</span>.</li></ul>
<p id="en-us_topic_0249784584_p10866412348"><a name="en-us_topic_0249784584_p10866412348"></a><a name="en-us_topic_0249784584_p10866412348"></a>This directory is optional. If the directory is not specified, <strong id="en-us_topic_0249784584_b128841210101"><a name="en-us_topic_0249784584_b128841210101"></a><a name="en-us_topic_0249784584_b128841210101"></a>$GAUSSLOG/</strong><em id="en-us_topic_0249784584_i1088932111018"><a name="en-us_topic_0249784584_i1088932111018"></a><a name="en-us_topic_0249784584_i1088932111018"></a>Installation username</em> will be specified as the log directory by default during <span id="en-us_topic_0249784584_text6866131173419"><a name="en-us_topic_0249784584_text6866131173419"></a><a name="en-us_topic_0249784584_text6866131173419"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p63389166101039"></a>tmpdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_p79071485351"><a name="en-us_topic_0249784584_p79071485351"></a><a name="en-us_topic_0249784584_p79071485351"></a>Directory for storing temporary database files.</p>
<p id="en-us_topic_0249784584_p29071084358"><a name="en-us_topic_0249784584_p29071084358"></a><a name="en-us_topic_0249784584_p29071084358"></a>If <strong id="en-us_topic_0249784584_b48633129117"><a name="en-us_topic_0249784584_b48633129117"></a><a name="en-us_topic_0249784584_b48633129117"></a>tmpdbPath</strong> is not set, the file is stored in <strong id="en-us_topic_0249784584_b1511512195110"><a name="en-us_topic_0249784584_b1511512195110"></a><a name="en-us_topic_0249784584_b1511512195110"></a>/opt/huawei/wisequery/perfadm_db</strong> by default.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a><a name="en-us_topic_0249784584_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a>Directory for storing openGauss system tools. This directory is used to store tools for mutual trust. This directory must meet the following requirements:</p>
<a name="en-us_topic_0249784584_ul735382813519"></a><a name="en-us_topic_0249784584_ul735382813519"></a><ul id="en-us_topic_0249784584_ul735382813519"><li>The disk space is greater than 100 MB.</li><li>This directory cannot be changed and is independent of other directories required by the database.</li></ul>
<p id="en-us_topic_0249784584_p3353328143519"><a name="en-us_topic_0249784584_p3353328143519"></a><a name="en-us_topic_0249784584_p3353328143519"></a>This directory is optional. If this parameter is not specified, <strong id="en-us_topic_0249784584_b16555347121"><a name="en-us_topic_0249784584_b16555347121"></a><a name="en-us_topic_0249784584_b16555347121"></a>/opt/huawei/wisequery</strong> is specified as the database system tool directory by default during <span id="en-us_topic_0249784584_text03531828163513"><a name="en-us_topic_0249784584_text03531828163513"></a><a name="en-us_topic_0249784584_text03531828163513"></a>openGauss</span> installation.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row10235118121016"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_p192361185103"><a name="en-us_topic_0249784584_p192361185103"></a><a name="en-us_topic_0249784584_p192361185103"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_p16236283104"><a name="en-us_topic_0249784584_p16236283104"></a><a name="en-us_topic_0249784584_p16236283104"></a>Directory for storing the openGauss core file.</p>
</td>
</tr>
<tr id="en-us_topic_0249784584_row832682915591"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784584_p35349439152452"><a name="en-us_topic_0249784584_p35349439152452"></a><a name="en-us_topic_0249784584_p35349439152452"></a>clusterType</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784584_p6357195112719"><a name="en-us_topic_0249784584_p6357195112719"></a><a name="en-us_topic_0249784584_p6357195112719"></a>openGauss type cluster type. This parameter is optional.</p>
<p id="en-us_topic_0249784584_p1748134115819"><a name="en-us_topic_0249784584_p1748134115819"></a><a name="en-us_topic_0249784584_p1748134115819"></a><strong id="en-us_topic_0249784584_b464353817134"><a name="en-us_topic_0249784584_b464353817134"></a><a name="en-us_topic_0249784584_b464353817134"></a>single-inst</strong> indicates the standalone cluster with one primary node and multiple standby nodes.</p>
</td>
</tr>
</tbody>
</table>

