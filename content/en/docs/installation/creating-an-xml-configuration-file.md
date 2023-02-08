# Creating an XML Configuration File<a name="EN-US_TOPIC_0270171699"></a>

Before installing the openGauss, you need to create the **cluster\_config.xml** file. The **cluster\_config.xml** file contains the information about the server where the openGauss is deployed, installation path, IP address, and port number. This file is used to guide how to deploy the openGauss. You need to configure the XML configuration file according to the actual deployment requirements.

The following describes how to create an XML configuration file based on the deployment solution of one primary node and one standby node.

<!-- TOC -->

- [Configuring the Database Name and Directories](#configuring-the-database-name-and-directories)
- [Configuring the Basic Host Information](#configuring-the-basic-host-information)
- [Configuring Primary Database Node Information](#configuring-primary-database-node-information)
- [Configuring the CM Server (Primary/Non-Primary) Information](#configuring-the-cm-server-primary-non-primary-information)
- [Examples](#examples)

<!-- /TOC -->


## Configuring the Database Name and Directories

Obtain the XML file template from **script/gspylib/etc/conf/cluster\_config\_template.xml**. The following configuration is only an example. You can replace it as required. Each line is described with a comment.

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
    <!-- Whether to enable automatic primary database node selection -->
    <PARAM name="enable_dcf" value="on"/>
    <!-- Node IP address, port number, and role information after the function is enabled -->
    <PARAM name="dcf_config" value="[{&quot;stream_id&quot;:1,&quot;node_id&quot;:1,&quot;ip&quot;:&quot;8.92.1.85&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;LEADER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:2,&quot;ip&quot;:&quot;8.92.1.86&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;},{&quot;stream_id&quot;:1,&quot;node_id&quot;:3,&quot;ip&quot;:&quot;8.92.1.87&quot;,&quot;port&quot;:16683,&quot;role&quot;:&quot;FOLLOWER&quot;}]"/>
    <!-- Enabling or disabling shared storage mode -->
    <PARAM name="enable_dss" value="on"/>
    <!-- DSS instance directory -->
    <PARAM name="dss_home" value="/opt/huawei/install/data/dss"/>
    <!-- DSS shared volume name -->
    <PARAM name="ss_dss_vg_name" value="data"/>
    <!-- Name and other information about the volume groups mounted to DSS, including shared volumes -->
    <PARAM name="dss_vg_info" value="data:/dev/sdb,p0:/dev/sdc,p1:/dev/sdd"/>
    <!-- CM vote volume -->
    <PARAM name="votingDiskPath" value="/dev/sde"/>
    <!-- CM shared volume -->
    <PARAM name="shareDiskDir" value="/dev/sdf"/>
    <!-- Enabling SSL authentication for DSS -->
    <PARAM name="dss_ssl_enable" value="on"/>
    <!-- MES communication protocol type -->
    <PARAM name="ss_interconnect_type" value="TCP"/>
    <!-- CPU sequence bound to the RDMA -->
    <PARAM name="ss_rdma_work_config" value="1 7"/>
  
  </CLUSTER>
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>
>-   The **/opt/huawei/install/om** directory is used to store tools such as the mutual trust tool. To avoid permission problems, do not store instance data in the directory.
>-   The installation and data directories must be empty or do not exist. Otherwise, the installation may fail.
>-   When configuring database instances, ensure that the configured directories are not coupled with each other. This means that the configured directories must not be associated with each other. If any directory is deleted, the other directories will not be deleted accordingly. For example, **gaussdbAppPath** is **/opt/huawei/install/app** and **gaussdbLogPath** is **/opt/huawei/install/app/omm**. When the **gaussdbAppPath** directory is deleted, the **gaussdbLogPath** directory will also be deleted, causing unexpected problems.
>-   If the installation script is required to automatically create installation users, ensure that the configured directories are not coupled with the default user directories created by the system.
>-   The openGauss and instance paths cannot contain the following special characters: "|", ";", "&", "$", "<", "\>", "\`", "\\\\", "'", "\\"", "\{", "\}", "\(", "\)", "\[", "\]", "\~", "\*", and "?".
>-   When configuring the database node name, run the **hostname** command to obtain the host name of the database node and replace **node1\_hostname** and **node2\_hostname** in the example with the obtained host name.
>-   During **dcf\_config** configuration, the roles include leader, follower, passive, and logger. The roles that can vote include leader, follower, and logger. During role networking configuration, at least three roles can vote. Therefore, at least three nodes are required in DCF mode.
>-   Exercise caution when configuring all parameters that contain disk information in the shared storage. During the installation, the tool performs low formatting on the disks configured in all parameters. The disks in all parameters must be unique.
>-   The IP address in the shared storage must be the same as the data IP address of the DN. The DSS port number is the database port number plus 10, and the DMS port number is the database port number plus 20.

**Table 1** Parameter description

<table><thead align="left"><tr id="en-us_topic_0283136466_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="17.87178717871787%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="71.25712571257125%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136466_row2076785215584"><td class="cellrowborder" rowspan="19" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall information</p>
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
<td class="cellrowborder" valign="top" width="71.25712571257125%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32325548101039"></a>openGauss name.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p10113616101039"></a>nodeNames</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p13896585101039"></a>Host name in openGauss.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_p48031547203112"><a name="zh-cn_topic_0283136466_p48031547203112"></a><a name="zh-cn_topic_0283136466_p48031547203112"></a>backIp1s</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p64280946101039"></a>gaussdbAppPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p39374110101039"></a>Installation directory of the openGauss program. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul6325251103320"></a><a name="en-us_topic_0283136466_ul6325251103320"></a><ul id="en-us_topic_0283136466_ul6325251103320"><li>The disk space is greater than 1 GB. </li><li>This directory is independent of other directories required by the database.</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p48241855101039"></a>gaussdbLogPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p15276202101039"></a>Directory that stores run logs and operation logs of the openGauss. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul1986519123412"></a><a name="en-us_topic_0283136466_ul1986519123412"></a><ul id="en-us_topic_0283136466_ul1986519123412"><li>You are advised to plan the disk space based on the number of database nodes on the host. Reserve 1 GB space for database nodes and reserve redundant space. </li><li>This directory is independent of other directories required by openGauss.</li></ul>
<p id="en-us_topic_0283136466_p10866412348"><a name="en-us_topic_0283136466_p10866412348"></a><a name="en-us_topic_0283136466_p10866412348"></a>This path is optional. If the directory is not specified, <strong>$GAUSSLOG/Installation user account</strong> will be specified as the log directory by default during the openGauss installation.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row13251729125910"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p63389166101039"></a>tmpMppdbPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_p79071485351"><a name="en-us_topic_0283136466_p79071485351"></a><a name="en-us_topic_0283136466_p79071485351"></a>Directory for storing temporary database files.</p>
<p id="en-us_topic_0283136466_p29071084358"><a name="en-us_topic_0283136466_p29071084358"></a><a name="en-us_topic_0283136466_p29071084358"></a>If <strong>tmpMppdbPath</strong> is not set, the files are stored in <strong>/opt/huawei/wisequery/Installation user name_mppdb</strong> by default. In the path, <strong>opt/huawei/wisequery</strong> is the default directory for storing database system tools.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136466_row123267298592"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a><a name="zh-cn_topic_0283136466_zh-cn_topic_0085434621_zh-cn_topic_0059782004_p2890619101039"></a>gaussdbToolPath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a><a name="en-us_topic_0283136466_en-us_topic_0085434621_en-us_topic_0059782004_p32813568101039"></a>Directory for storing openGauss system tools. This directory is used to store tools for mutual trust. This directory must meet the following requirements:</p>
<a name="en-us_topic_0283136466_ul735382813519"></a><a name="en-us_topic_0283136466_ul735382813519"></a><ul id="en-us_topic_0283136466_ul735382813519"><li>The disk space is greater than 100 MB. </li><li>This directory cannot be changed and is independent of other directories required by the database.</li></ul>
<p id="en-us_topic_0283136466_p3353328143519"><a name="en-us_topic_0283136466_p3353328143519"></a><a name="en-us_topic_0283136466_p3353328143519"></a>This directory is optional. If this parameter is not specified, <strong>/opt/huawei/wisequery</strong> is specified as the database system tool directory by default during the installation.</p>
</td>
</tr>
<tr id="row1980710134314"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2811105433"><a name="p2811105433"></a><a name="p2811105433"></a>corePath</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p48151014318"><a name="p48151014318"></a><a name="p48151014318"></a>Directory for storing the openGauss core file.</p>
</td>
</tr>
<tr id="row12418151285918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p104180128590"><a name="p104180128590"></a><a name="p104180128590"></a>enable_dcf</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p44181412175911"><a name="p44181412175911"></a><a name="p44181412175911"></a>Determines whether to enable the DCF mode.</p>
</td>
</tr>
<tr id="row490515610593"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p19056695920"><a name="p19056695920"></a><a name="p19056695920"></a>dcf_config</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16905176195917"><a name="p16905176195917"></a><a name="p16905176195917"></a>DCF startup node information, which is configured when the DCF mode is enabled.</p>
</td>
</tr>
<tr id="row19822181216374"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7822412123718"><a name="p7822412123718"></a><a name="p7822412123718"></a><span id="ph9894173393710"><a name="ph9894173393710"></a><a name="ph9894173393710"></a>enable_dss</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p3822151223719"><a name="p3822151223719"></a><a name="p3822151223719"></a><span id="ph926135011373"><a name="ph926135011373"></a><a name="ph926135011373"></a>Determines whether to enable the shared storage mode. </span><span id="ph991191210218"><a name="ph991191210218"></a><a name="ph991191210218"></a><span id="ph1716615151418"><a name="ph1716615151418"></a><a name="ph1716615151418"></a>The value can be <strong>on</strong> or <strong>off</strong>. The default value is <strong>off</strong>. </span>Shared storage does not support the DCF mode.</span></p>
</td>
</tr>
<tr id="row37942023183718"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p779592320372"><a name="p779592320372"></a><a name="p779592320372"></a><span id="ph165120406388"><a name="ph165120406388"></a><a name="ph165120406388"></a>dss_home</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1379592333717"><a name="p1379592333717"></a><a name="p1379592333717"></a><span id="ph17398452123810"><a name="ph17398452123810"></a><a name="ph17398452123810"></a>DSS instance directory. </span>If <strong>enable_dss</strong> is set to <strong>on</strong>, this parameter is mandatory.</span></p>
</td>
</tr>
<tr id="row1957172718373"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p757112272373"><a name="p757112272373"></a><a name="p757112272373"></a><span id="ph178591726133919"><a name="ph178591726133919"></a><a name="ph178591726133919"></a>ss_dss_vg_name</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p4571112723717"><a name="p4571112723717"></a><a name="p4571112723717"></a><span id="ph12848153203914"><a name="ph12848153203914"></a><a name="ph12848153203914"></a>DSS shared volume name. </span>If <strong>enable_dss</strong> is set to <strong>on</strong>, this parameter is mandatory.</span></p>
</td>
</tr>
<tr id="row1139818506398"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1399135014392"><a name="p1399135014392"></a><a name="p1399135014392"></a><span id="ph14706515391"><a name="ph14706515391"></a><a name="ph14706515391"></a>dss_vg_info</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p103991850103915"><a name="p103991850103915"></a><a name="p103991850103915"></a><span id="ph129519341407"><a name="ph129519341407"></a><a name="ph129519341407"></a>Information about the volume groups mounted to DSS, including a shared volume group and log volume groups. </span>The number of log volume groups must be the same as the number of DNs. Each node in the centralized system has a maximum of one DN. An example of the volume group format is <strong>data:/dev/sdb</strong>. Volume groups are separated by commas (,). When <strong>enable_dss</strong> is set to <strong>on</strong>, this parameter is mandatory. </span><span id="ph1383519434138"><a name="ph1383519434138"></a><a name="ph1383519434138"></a>The disk size of the log volume group must be greater than the value of the DN parameter <strong>max_size_for_xlog_prune</strong>.</span></p>
</td>
</tr>
<tr id="row146471775525"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p464818765210"><a name="p464818765210"></a><a name="p464818765210"></a><span id="ph581617812523"><a name="ph581617812523"></a><a name="ph581617812523"></a>votingDiskPath</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16487711527"><a name="p16487711527"></a><a name="p16487711527"></a><span id="ph158834811533"><a name="ph158834811533"></a><a name="ph158834811533"></a>CM vote volume. When <strong>enable_dss</strong> is set to <strong>on</strong>, this parameter is mandatory.</span></p>
</td>
</tr>
<tr id="row1786611915217"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p208662191525"><a name="p208662191525"></a><a name="p208662191525"></a><span id="ph13888734165212"><a name="ph13888734165212"></a><a name="ph13888734165212"></a>shareDiskDir</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p38665199521"><a name="p38665199521"></a><a name="p38665199521"></a><span id="ph13931218541"><a name="ph13931218541"></a><a name="ph13931218541"></a>CM shared volume. When <strong>enable_dss</strong> is set to <strong>on</strong>, this parameter is mandatory.</span></p>
</td>
</tr>
<tr id="row3885115185213"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17885101519526"><a name="p17885101519526"></a><a name="p17885101519526"></a><span id="ph12203154245213"><a name="ph12203154245213"></a><a name="ph12203154245213"></a>dss_ssl_enable</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p98854159527"><a name="p98854159527"></a><a name="p98854159527"></a><span id="ph18955350185415"><a name="ph18955350185415"></a><a name="ph18955350185415"></a>Determines whether to enable SSL authentication for DSS. The value can be <strong>on</strong> or <strong>off</strong>. The default value is <strong>on</strong>.</span><span id="ph1844720211729"><a name="ph1844720211729"></a><a name="ph1844720211729"></a></span></p>
</td>
</tr>
<tr id="row195477449524"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p9547204411523"><a name="p9547204411523"></a><a name="p9547204411523"></a><span id="ph1398217580526"><a name="ph1398217580526"></a><a name="ph1398217580526"></a>ss_interconnect_type</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p354734417527"><a name="p354734417527"></a><a name="p354734417527"></a><span id="ph89401381618"><a name="ph89401381618"></a><a name="ph89401381618"></a>MES communication protocol type. The value can be </span><span id="ph14853227014"><a name="ph14853227014"></a><a name="ph14853227014"></a><strong>TCP</strong> or <strong>RDMA</strong>. The default value is <strong>TCP</strong>.</span><span id="ph103917226213"><a name="ph103917226213"></a><a name="ph103917226213"></a></span></p>
</td>
</tr>
<tr id="row1636215345219"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p73629537522"><a name="p73629537522"></a><a name="p73629537522"></a><span id="ph62489207537"><a name="ph62489207537"></a><a name="ph62489207537"></a>ss_rdma_work_config</span></p>
</td>
</span><span id="ph17210345531"><a name="ph17210345531"></a><a name="ph17210345531"></a> occupied by <td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1936335316521"><a name="p1936335316521"></a><a name="p1936335316521"></a><span id="ph1859724119315"><a name="ph1859724119315"></a><a name="ph1859724119315"></a>Specifies the start and end CPUs used in the RDMA user-mode poll.</span> When <strong>ss_interconnect_type</strong> is set to <strong>RDMA</strong>, this parameter is valid. An example of the format is "10 15" (separated by a space).</span></p>
</td>
</tr>
</tbody>
</table>



## Configuring the Basic Host Information

>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>Each server must contain the following information. The following uses **node1** as an example.
>
The content is an example and can be replaced as required. Each line of information is commented out.

**Configure the following information on the host:**

```
<!-- Information about the node deployment on each server -->
<DEVICELIST>
<!-- Deployment information on node 1 -->
<DEVICE sn="node1_hostname">
<!-- Host name of node 1 -->
<PARAM name="name" value="node1_hostname" />
<!-- AZ where node1 is located and priority of the AZ -->
<PARAM name="azName" value="AZ1"/>
<PARAM name="azPriority" value="1"/>
<!-- IP address of node 1. If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
<PARAM name="backIp1" value="192.168.0.1"/>
<PARAM name="sshIp1" value="192.168.0.1"/>
<!-- Specifies whether node 1 is a cascaded standby node. Thevalue on indicates that the instance is a cascaded standby node. In addition, the cascaded standby node must be configured with a standby node in the same AZ.-->
<PARAM name="cascadeRole" value="on"/>
```

**Table 1** Parameter description

<a name="zh-cn_topic_0249784567_table1876635205813"></a>
<table><thead align="left"><tr id="en-us_topic_0249784567_row476775215811"><th class="cellrowborder" valign="top" width="10.87108710871087%" id="mcps1.2.4.1.1"><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p45714015101039"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p11847771101039"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.36723672367236%" id="mcps1.2.4.1.3"><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p20145362101039"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0249784567_row2076785215584"><td class="cellrowborder" rowspan="5" valign="top" width="10.87108710871087%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p36371799101039"></a>Overall Information</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0249784567_p131821197365"><a name="zh-cn_topic_0249784567_p131821197365"></a><a name="zh-cn_topic_0249784567_p131821197365"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="72.36723672367236%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p25144333101039"></a>Host name.</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1767115215813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p1906425183611"><a name="zh-cn_topic_0249784567_p1906425183611"></a><a name="zh-cn_topic_0249784567_p1906425183611"></a>azName</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784567_p2085417394617"><a name="en-us_topic_0249784567_p2085417394617"></a><a name="en-us_topic_0249784567_p2085417394617"></a>Available zone (AZ) name. The value is a character string that cannot contain special characters, for example, AZ1, AZ2, and AZ3.</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1883518127274"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p857520312368"><a name="zh-cn_topic_0249784567_p857520312368"></a><a name="zh-cn_topic_0249784567_p857520312368"></a>azPriority</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784567_p8997131616389"><a name="en-us_topic_0249784567_p8997131616389"></a><a name="en-us_topic_0249784567_p8997131616389"></a>AZ priority.</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1776745213589"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p17976123919369"><a name="zh-cn_topic_0249784567_p17976123919369"></a><a name="zh-cn_topic_0249784567_p17976123919369"></a>backIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p31230749101039"></a>Intranet IP address of the host in the backend storage network. All the openGauss hosts communicate with each other on this network.</p>
</td>
</tr>
<tr id="zh-cn_topic_0249784567_row1999732255920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0249784567_p14456479368"><a name="zh-cn_topic_0249784567_p14456479368"></a><a name="zh-cn_topic_0249784567_p14456479368"></a>sshIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"></a><a name="en-us_topic_0249784567_en-us_topic_0085434621_en-us_topic_0059782004_p3419464101039"></a>External IP address of the SSH reliable channel. If the external is not used, you can leave it empty or set the same IP address as <strong>backIp1</strong>.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**
>Only one IP address can be configured for all IP parameters (including **backIp**, **sshIp**, and **listenIp**) in the configuration file. Excessive IP addresses are ignored.
>For example, you can configure **backIp1** and **backIp2** in the XML configuration file as follows:
>When the file is parsed, only **backIp1** takes effect.
>```
><PARAM name="backIp1" value="192.168.0.1"/>
><PARAM name="backIp2" value="192.168.0.2"/>
>```
>
## Configuring Primary Database Node Information

The content is an example and can be replaced as required. Each line of information is commented out. 

**Configure the following information for the primary database node:**

```
<!--DBnode-->
<PARAM name="dataNum" value="1"/>
<!-- Database port number -->
<PARAM name="dataPortBase" value=""/>
<!-- Listening IP address of the database node -->
<PARAM name="dataListenIp1" value="172.31.13.124,172.31.6.198"/>
<!-- Data directories on the primary database node and on the standby database node -->
<PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
<!-- Xlog directories on the primary database node and on the standby database node -->
<PARAM name="dataNodeXlogPath1" value="/home/omm/gauss_xlog,/home/omm/gauss_xlog "/>
<!-- Number of nodes for which the synchronization mode is set on the database node -->
<PARAM name="dataNode1_syncNum" value="0"/>
<!-- Set the mode, quantity, and sequence of nodes in synchronization mode on the database node. Replace "hostname" with the actual host name. -->
<PARAM name="syncNode_hostname" value="ANY 1(node1_hostname,node2_hostname)"/>
```

**Table 1** Parameter description

<a name="en-us_topic_0249784583_en-us_topic_0241802596_table642932620115"></a>

<table><thead align="left"><tr id="en-us_topic_0283136469_en-us_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136469_row178502422283"><td class="cellrowborder" rowspan="8" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a>Number of database nodes to be deployed on the current host.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_en-us_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"><a name="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"></a><a name="en-us_topic_0283136469_en-us_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a>Basic port number of the database node. The default value is <strong>40000</strong>.</p>
</td>
</tr>
<tr id="row196421844162013"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p69281428009"><a name="p69281428009"></a><a name="p69281428009"></a>dataListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p19929152819012"><a name="p19929152819012"></a><a name="p19929152819012"></a>Listening IP address. If this parameter is not set, the value is determined based on <strong>backIp1</strong> of the corresponding host.</p>
<p id="p14929182812017"><a name="p14929182812017"></a><a name="p14929182812017"></a>The first and second IP addresses are the IP addresses of the hosts where the primary and standby nodes reside, respectively.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a><a name="en-us_topic_0283136469_en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a>Directory for storing data of the database nodes on the current host. It is a data storage directory, The directory should be planned on the data disk.</p>
</td>
</tr>
<tr id="row02471711689"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p62485111817"><a name="p62485111817"></a><a name="p62485111817"></a>dataNodeXlogPath1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1124918118811"><a name="p1124918118811"></a><a name="p1124918118811"></a>Path for storing Xlogs in the current database. This parameter is optional. This directory is used to store database Xlogs and can only be an absolute path. If this parameter is not specified, the log file is stored in the <strong>pg\_xlog</strong> directory of the data directory by default.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_p1725855510222"><a name="en-us_topic_0283136469_p1725855510222"></a><a name="en-us_topic_0283136469_p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_p18258155510227"><a name="en-us_topic_0283136469_p18258155510227"></a><a name="en-us_topic_0283136469_p18258155510227"></a>You can set either this parameter or <strong>syncNode_hostname<strong>. This parameter can be set only on the primary node. This parameter specifies the number of nodes in synchronization mode in the current database. The value ranges from 0 to the number of standby database nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0283136469_row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136469_p1725855510222"><a name="en-us_topic_0283136469_p1725855510222"></a><a name="en-us_topic_0283136469_p1725855510222"></a>syncNode_hostname</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136469_p18258155510227"><a name="en-us_topic_0283136469_p18258155510227"></a><a name="en-us_topic_0283136469_p18258155510227"></a>You can set either this parameter or <strong>dataNode1_syncNum<strong> This parameter needs to be set on all nodes. This parameter specifies the mode, quantity, and sequence of standby nodes in synchronization mode on the current database. Replace <strong>hostname</strong> in <strong>syncNode_hostname</strong> with the actual host name. Ensure that the names of the synchronization standby hosts specified in the parameter exist. The number of synchronization standby hosts cannot exceed the number of standby hosts. FIRST and ANY cannot coexist. ANY supports combined configuration, but FIRST does not support combined configuration. For details, see the "Configuration file of one primary node and four standby nodes (User-defined FIRST and ANY can be used to synchronize data to the standby node.)".</p>
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

**Table 1** Parameter description

<a name="table642932620115"></a>

<table><thead align="left"><tr id="row1543052614113"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.4.1.1"><p id="en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.212521252125214%" id="mcps1.2.4.1.2"><p id="en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1343016261112"><td class="cellrowborder" rowspan="5" valign="top" width="14.84148414841484%" headers="mcps1.2.4.1.1 "><p id="p1752719501213"><a name="p1752719501213"></a><a name="p1752719501213"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="25.212521252125214%" headers="mcps1.2.4.1.2 "><p id="p138772053175815"><a name="p138772053175815"></a><a name="p138772053175815"></a>cmServerPortBase</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="p08776536586"><a name="p08776536586"></a><a name="p08776536586"></a>Port number of the primary CM server. The default value is <strong>5000</strong>.</p>
</td>
</tr>
<tr id="row462419461815"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p3877105311589"><a name="p3877105311589"></a><a name="p3877105311589"></a>cmServerPortStandby</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p487755311588"><a name="p487755311588"></a><a name="p487755311588"></a>Port number of the standby CM server. The default value is <strong>5500</strong>.</p>
</td>
</tr>
<tr id="row243013261715"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16877165315584"><a name="p16877165315584"></a><a name="p16877165315584"></a>cmServerListenIp1</p>
</td>
IP address used by the <td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p7877115312585"><a name="p7877115312585"></a><a name="p7877115312585"></a>IP address used by the CM server to listen to the CM agent connection requests or the database administrator's cluster management requests.</p>
</td>
</tr>
<tr id="row1643082612118"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p4877145395811"><a name="p4877145395811"></a><a name="p4877145395811"></a>cmServerHaIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p18771153115819"><a name="p18771153115819"></a><a name="p18771153115819"></a>IP addresses for communication between the primary and standby CM servers.</p>
In <p id="p12877195316581"><a name="p12877195316581"></a><a name="p12877195316581"></a>In the parameter value, the first and second IP addresses are the IP addresses of the hosts where the primary and standby CM servers reside, respectively. If this parameter is not set, the value is determined based on <strong>backIp1</strong> of the hosts where the primary and standby CM servers reside.</p>
</td>
</tr>
<tr id="row1843010268113"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p128781753205814"><a name="p128781753205814"></a><a name="p128781753205814"></a>cmDir</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p8878135305818"><a name="p8878135305818"></a><a name="p8878135305818"></a>CM data file directory. The path is used to save the data files and parameter files used by the CM Server and CM Agent.</p>
<p id="p1187855355815"><a name="p1187855355815"></a><a name="p1187855355815"></a>This parameter must be set on every host in the cluster.</p>
</td>
</tr>
</tbody>
</table>

**Table 2** Directory description

<a name="table15788185133410"></a>

<table><thead align="left"><tr id="row278812517346"><th class="cellrowborder" valign="top" width="39.6%" id="mcps1.2.3.1.1"><p id="en-us_topic_0085434665_en-us_topic_0059782055_p43366803202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p43366803202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p43366803202410"></a>Directory</p>
</th>
<th class="cellrowborder" valign="top" width="60.4%" id="mcps1.2.3.1.2"><p id="en-us_topic_0085434665_en-us_topic_0059782055_p23050178202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p23050178202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p23050178202410"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row878819593413"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="p14788157341"><a name="p14788157341"></a><a name="p14788157341"></a>/opt/huawei/data</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p42801081202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p42801081202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p42801081202410"></a>Directory that stores instance data of the cluster. This directory is used to store data of the database. The directory should be planned on the data disk.</p>
<p id="en-us_topic_0085434665_en-us_topic_0059782055_p49665416202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p49665416202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p49665416202410"></a>This directory must meet the following requirements:</p>
<a name="en-us_topic_0085434665_en-us_topic_0059782055_ul44335561202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_ul44335561202410"></a><ul id="en-us_topic_0085434665_en-us_topic_0059782055_ul44335561202410"><li>The disk space is planned according the actual service data volume. </li><li>Directories for storing data of each instance are independent from each other. <a href="#table15838192510429">Table 3</a> lists planning for the data directory of each instance in this document.</li></ul>
</td>
</tr>
</tbody>
</table>


**Table 3** Database instance data directories

<a name="table15838192510429"></a>

<table><thead align="left"><tr id="row14838152510421"><th class="cellrowborder" valign="top" width="39.6%" id="mcps1.2.3.1.1"><p id="en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"></a>Instance Name</p>
</th>
<th class="cellrowborder" valign="top" width="60.4%" id="mcps1.2.3.1.2"><p id="en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"></a>Instance Data Directory</p>
</th>
</tr>
</thead>
<tbody><tr id="row1839122534217"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p66106311202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p66106311202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p66106311202410"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p53010964202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p53010964202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p53010964202410"></a>/opt/huawei/data/cm</p>
</td>
</tr>
<tr id="row8839162524215"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"></a>Primary DN</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"></a>/opt/huawei/data/masterX</p>
<p id="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"></a>In the directory, <strong>X</strong> is a consecutive positive integer starting from 1, identifying the Xth DN on the current host.</p>
</td>
</tr>
<tr id="row68397259423"><td class="cellrowborder" valign="top" width="39.6%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"></a>Standby DN</p>
</td>
<td class="cellrowborder" valign="top" width="60.4%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"></a>/opt/huawei/data/slaveX</p>
<p id="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"></a>In the directory, <strong>X</strong> is a consecutive positive integer starting from 1, identifying the Xth standby DN on the current host.</p>
</td>
</tr>
</tbody>
</table>






## Examples

### Configuration file for a single node

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
    <CLUSTER>
        <!-- Database name -->
        <PARAM name="clusterName" value="dbCluster" />
        <!-- Database node name (hostname) -->
        <PARAM name="nodeNames" value="node1_hostname" />
        <!-- Database installation directory -->
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <!-- Log directory -->
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <!-- Temporary file directory -->
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
        <!-- Database tool directory -->
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <!--Directory of the core file of the database -->
        <PARAM name="corePath" value="/opt/huawei/corefile" />
        <!-- Node IP address, which corresponds to the database node name list -->
        <PARAM name="backIp1s" value="192.168.0.1"/> 
    </CLUSTER>
    <!-- Information about the node deployment on each server -->
    <DEVICELIST>
        <!-- Deployment information on node 1 -->
        <DEVICE sn="node1_hostname">
            <!-- Host name of node 1 -->
            <PARAM name="name" value="node1_hostname"/>
            <!-- AZ where node1 is located and priority of the AZ -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- IP address of node 1. If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
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

### Configuration file for primary/standby nodes

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
    <!-- Overall information about openGauss -->
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
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp"/>
        <!-- Database tool directory -->
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <!--Directory of the core file of the database -->
        <PARAM name="corePath" value="/opt/huawei/corefile"/>
        <!-- Node IP address, which corresponds to the database node name list -->
        <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2"/> 
    </CLUSTER>
    <!-- Information about the node deployment on each server -->
    <DEVICELIST>
        <!-- Deployment information on node 1 -->
        <DEVICE sn="node1_hostname">
            <!-- Host name of node 1 -->
            <PARAM name="name" value="node1_hostname"/>
            <!-- AZ where node1 is located and priority of the AZ -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- IP address of node 1. If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.1"/>
            <PARAM name="sshIp1" value="192.168.0.1"/>
            
	    <!--dn-->
            <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="15400"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn"/>
            <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <!-- Host name of node 2 -->
            <PARAM name="name" value="node2_hostname"/>
            <!-- AZ where node 2 is located and priority of the AZ -->
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- IP address of node 2. If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
	</DEVICE>
    </DEVICELIST>
</ROOT>
```

### Configuration file for primary/standby/cascaded nodes

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
        <!-- Information about node deployment on **node1** -->
        <DEVICE sn="node1_hostname">
            <PARAM name="name" value="node1_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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
	    <PARAM name="dataPortBase" value="26000"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2_hostname,/opt/huawei/install/data/dn,node3_hostname,/opt/huawei/install/data/dn"/>
        <PARAM name="dataNode1_syncNum" value="0"/>
        </DEVICE>

        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname">
            <PARAM name="name" value="node2_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/>
            <PARAM name="sshIp1" value="192.168.0.2"/>
             <!-- cm --> 
            <PARAM name="cmDir" value="/opt/huawei/install/cm"/> 
            <PARAM name="cmServerPortStandby" value="15300"/> 
	</DEVICE>

        <!-- Node deployment information on node 3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname">
            <PARAM name="name" value="node3_hostname"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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

###  Configuration file for one primary node and two standby nodes

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
        <!-- Information about node deployment on **node1** -->
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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
 
        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### Configuration file for one primary node and three standby nodes

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
        <!-- Information about node deployment on **node1** -->
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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
 
        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### Configuration file for one primary node and four standby nodes

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
        <!-- Information about node deployment on **node1** -->
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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
 
        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 5. The value of name is the host name. -->
        <DEVICE sn="node5_hostname"> 
            <PARAM name="name" value="node5_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.5"/> 
            <PARAM name="sshIp1" value="192.168.0.5"/> 
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```

### Configuration file of one primary node and four standby nodes (User-defined FIRST and ANY can be used to synchronize data to the standby node.)

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
        <!-- Information about node deployment on **node1** -->
        <DEVICE sn="node1_hostname"> 
            <PARAM name="name" value="node1_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
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
            <!-- Replace "hostname" in "syncNode_hostname" with your host name. -->
            <PARAM name="syncNode_node1_hostname" value="ANY 2(node2_hostname, node4_hostname), ANY 1(node3_hostname, node5_hostname)"/> 
        </DEVICE> 
 
        <!-- Node deployment information on node 2. The value of name is the host name. -->
        <DEVICE sn="node2_hostname"> 
            <PARAM name="name" value="node2_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.2"/> 
            <PARAM name="sshIp1" value="192.168.0.2"/> 
            <!-- Replace "hostname" in "syncNode_hostname" with your host name. -->
            <PARAM name="syncNode_node2_hostname" value="ANY 2(node1_hostname, node3_hostname), ANY 1(node5_hostname, node4_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 3. The value of name is the host name. -->
        <DEVICE sn="node3_hostname"> 
            <PARAM name="name" value="node3_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.3"/> 
            <PARAM name="sshIp1" value="192.168.0.3"/> 
            <!-- Replace "hostname" in "syncNode_hostname" with your host name. -->
            <PARAM name="syncNode_node3_hostname" value="FIRST 3(node2_hostname, node1_hostname, node4_hostname, node5_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 4. The value of name is the host name. -->
        <DEVICE sn="node4_hostname"> 
            <PARAM name="name" value="node4_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.4"/> 
            <PARAM name="sshIp1" value="192.168.0.4"/> 
            <!-- Replace "hostname" in "syncNode_hostname" with your host name. -->
            <PARAM name="syncNode_node4_hostname" value="ANY 2(node2_hostname, node1_hostname, node5_hostname, node3_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
 
        <!-- Node deployment information on node 5. The value of name is the host name. -->
        <DEVICE sn="node5_hostname"> 
            <PARAM name="name" value="node5_hostname"/> 
            <PARAM name="azName" value="AZ1"/> 
            <PARAM name="azPriority" value="1"/> 
            <!-- If only one NIC is available for the server, set <b>backIP1/<b> and <b>sshIP1</b> to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.5"/> 
            <PARAM name="sshIp1" value="192.168.0.5"/> 
            <!-- Replace "hostname" in "syncNode_hostname" with your host name. -->
            <PARAM name="syncNode_node5_hostname" value="ANY 1(node1_hostname, node2_hostname, node3_hostname, node4_hostname)"/>
            <!-- cm --> 
            <PARAM name="cmServerPortStandby" value="15000"/> 
            <PARAM name="cmDir" value="/opt/huawei/data/cmserver"/> 
	</DEVICE> 
    </DEVICELIST> 
</ROOT>
```
