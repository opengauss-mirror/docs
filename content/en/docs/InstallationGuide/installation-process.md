# Installation Process<a name="EN-US_TOPIC_0249784563"></a>

This section describes the openGauss installation process.

[Figure 1](#fig18264185162412)  shows the process for installing openGauss.

**Figure  1**  Installation process<a name="fig18264185162412"></a>  
<img src="figures/installation-process.png" title="installation-process" style="zoom: 33%;" />

**Table  1**  Installation process description

<a name="en-us_topic_0241802562_table4134822101416"></a>
<table><thead align="left"><tr id="en-us_topic_0241802562_row16134722161419"><th class="cellrowborder" valign="top" width="19.439999999999998%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241802562_p61348222141"><a name="en-us_topic_0241802562_p61348222141"></a><a name="en-us_topic_0241802562_p61348222141"></a>Step</p>
</th>
<th class="cellrowborder" valign="top" width="80.56%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241802562_p1513482213147"><a name="en-us_topic_0241802562_p1513482213147"></a><a name="en-us_topic_0241802562_p1513482213147"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241802562_row1528811611512"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p192890621511"><a name="en-us_topic_0241802562_p192890621511"></a><a name="en-us_topic_0241802562_p192890621511"></a>Prepare for installation.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241802562_p18521261776"><a name="en-us_topic_0241802562_p18521261776"></a><a name="en-us_topic_0241802562_p18521261776"></a>Before the <span id="text9621733114011"><a name="text9621733114011"></a><a name="text9621733114011"></a>openGauss</span> installation, you need to prepare the software and hardware environment and complete the related configurations.</p>
<p id="en-us_topic_0241802562_p81361743175813"><a name="en-us_topic_0241802562_p81361743175813"></a><a name="en-us_topic_0241802562_p81361743175813"></a>This document provides the minimum requirements for the <span id="text1618917121917"><a name="text1618917121917"></a><a name="text1618917121917"></a>openGauss</span> installation. In the actual installation, plan the installation based on the site requirements.</p>
<p id="p1855332310214"><a name="p1855332310214"></a><a name="p1855332310214"></a>For details, see <a href="preparing-for-installation.md">Preparing for Installation</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row12410032134912"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p1550017555103"><a name="en-us_topic_0241802562_p1550017555103"></a><a name="en-us_topic_0241802562_p1550017555103"></a>Obtain and verify an installation package.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241802562_p65001355141017"><a name="en-us_topic_0241802562_p65001355141017"></a><a name="en-us_topic_0241802562_p65001355141017"></a>You need to download the installation package from the official website and verify the installation package. For details, see <a href="obtaining-and-verifying-an-installation-package.md">Obtaining and Verifying an Installation Package</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row163283014916"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p2500145511012"><a name="en-us_topic_0241802562_p2500145511012"></a><a name="en-us_topic_0241802562_p2500145511012"></a>Configure an XML file.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="p137904334"><a name="p137904334"></a><a name="p137904334"></a>Before installing the openGauss, you need to create a configuration file. The configuration file in the XML format contains the information about the server where the openGauss is deployed, installation path, IP address, and port number. This file is used to guide how to deploy the openGauss. You need to configure the configuration file according to the actual deployment requirements.</p>
<p id="en-us_topic_0241802562_p12584185173313"><a name="en-us_topic_0241802562_p12584185173313"></a><a name="en-us_topic_0241802562_p12584185173313"></a>For details, see <a href="creating-an-xml-configuration-file.md">Creating an XML Configuration File</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row163283014916"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p2500145511012"><a name="en-us_topic_0241802562_p2500145511012"></a><a name="en-us_topic_0241802562_p2500145511012"></a>Upload the installation package and XML file.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p>You need to upload the installation package and XML configuration file to the server where openGauss is to be installed.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row163283014916"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p2500145511012"><a name="en-us_topic_0241802562_p2500145511012"></a><a name="en-us_topic_0241802562_p2500145511012"></a>Decompress the installation package.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p>Run the tar command to decompress the installation package.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row670315277496"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p11500125541018"><a name="en-us_topic_0241802562_p11500125541018"></a><a name="en-us_topic_0241802562_p11500125541018"></a>Initialize the installation environment.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241802562_p050165514102"><a name="en-us_topic_0241802562_p050165514102"></a><a name="en-us_topic_0241802562_p050165514102"></a>To initialize the installation environment, you need to upload the installation package and the XML file, decompress the installation package, and use <strong id="b11413104010545"><a name="b11413104010545"></a><a name="b11413104010545"></a>gs_preinstall</strong> to prepare the installation environment.</p>
<p id="en-us_topic_0241802562_p105401311419"><a name="en-us_topic_0241802562_p105401311419"></a><a name="en-us_topic_0241802562_p105401311419"></a>For details, see <a href="initializing-the-installation-environment.md">Initializing the Installation Environment</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241802562_row143781321144912"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802562_p144519015193"><a name="en-us_topic_0241802562_p144519015193"></a><a name="en-us_topic_0241802562_p144519015193"></a>Execute the installation.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241802562_p64458013199"><a name="en-us_topic_0241802562_p64458013199"></a><a name="en-us_topic_0241802562_p64458013199"></a>You need to use <strong id="b1588155195417"><a name="b1588155195417"></a><a name="b1588155195417"></a>gs_install</strong> to install the openGauss.</p>
<p id="en-us_topic_0241802562_p1276795720412"><a name="en-us_topic_0241802562_p1276795720412"></a><a name="en-us_topic_0241802562_p1276795720412"></a>For details, see <a href="executing-installation.md">Executing Installation</a>.</p>
</td>
</tr>
<tr id="row895121316211"><td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.3.1.1 "><p id="p20952181342111"><a name="p20952181342111"></a><a name="p20952181342111"></a>Set the standby node to readable.</p>
</td>
<td class="cellrowborder" valign="top" width="80.56%" headers="mcps1.2.3.1.2 "><p id="p4952013202112"><a name="p4952013202112"></a><a name="p4952013202112"></a>This operation is optional. After the readable standby node function is enabled, the standby node is readable, meeting data consistency requirements.</p>
</td>
</tr>
</tbody>
</table>
