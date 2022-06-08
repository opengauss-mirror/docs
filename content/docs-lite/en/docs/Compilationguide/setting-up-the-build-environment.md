# Setting up the Build Environment<a name="EN-US_TOPIC_0289899544"></a>

## Hardware Requirements<a name="en-us_topic_0283136407_section11295135645810"></a>

Hardware requirements for building openGauss are as follows:

-   Number of servers: 1
-   Hardware specifications:
    -   CPU: 4U
    -   Memory: 8 GB
    -   Free disk space: 100 GB \(Linux 64-bit\)


## Software Requirements<a name="en-us_topic_0283136407_section77524131504"></a>

**OS Requirements**

The following OSs are supported:

-   CentOS 7.6 \(x86 architecture\)
-   openEuler-20.03-LTS \(AArch64 architecture\)
-   openEuler-20.03-LTS \(x86 architecture\)
-   Kylin-V10 \(AArch64 architecture\)

**Software Dependency Requirements**

[Table 1](#en-us_topic_0283136407_table1212531681911)  describes the openGauss software dependency requirements.

You are advised to use the default installation packages of the following dependent software in the listed OS installation CD-ROMs or sources. If the following software does not exist, refer to the recommended versions of the software.

**Table  1**  Software dependency requirements

<a name="en-us_topic_0283136407_table1212531681911"></a>
<table><thead align="left"><tr id="en-us_topic_0283136407_row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136407_p14178216101910"><a name="en-us_topic_0283136407_p14178216101910"></a><a name="en-us_topic_0283136407_p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136407_p1117815167195"><a name="en-us_topic_0283136407_p1117815167195"></a><a name="en-us_topic_0283136407_p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136407_row17179141619198"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p111791816141910"><a name="en-us_topic_0283136407_p111791816141910"></a><a name="en-us_topic_0283136407_p111791816141910"></a>libaio-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p101791116151915"><a name="en-us_topic_0283136407_p101791116151915"></a><a name="en-us_topic_0283136407_p101791116151915"></a>0.3.109-13</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row1617981631914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p171794161195"><a name="en-us_topic_0283136407_p171794161195"></a><a name="en-us_topic_0283136407_p171794161195"></a>flex</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p1317921651912"><a name="en-us_topic_0283136407_p1317921651912"></a><a name="en-us_topic_0283136407_p1317921651912"></a>2.5.31 or later</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row1017911165191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p1617931661912"><a name="en-us_topic_0283136407_p1617931661912"></a><a name="en-us_topic_0283136407_p1617931661912"></a>bison</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p917919167196"><a name="en-us_topic_0283136407_p917919167196"></a><a name="en-us_topic_0283136407_p917919167196"></a>2.7-4</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row8179181610191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p101791416191912"><a name="en-us_topic_0283136407_p101791416191912"></a><a name="en-us_topic_0283136407_p101791416191912"></a>ncurses-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p0179161651913"><a name="en-us_topic_0283136407_p0179161651913"></a><a name="en-us_topic_0283136407_p0179161651913"></a>5.9-13.20130511</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row10179416191912"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p1117941618198"><a name="en-us_topic_0283136407_p1117941618198"></a><a name="en-us_topic_0283136407_p1117941618198"></a>glibc-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p5179191616190"><a name="en-us_topic_0283136407_p5179191616190"></a><a name="en-us_topic_0283136407_p5179191616190"></a>2.17-111</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row317914169193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p201791916201910"><a name="en-us_topic_0283136407_p201791916201910"></a><a name="en-us_topic_0283136407_p201791916201910"></a>patch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p1018051610198"><a name="en-us_topic_0283136407_p1018051610198"></a><a name="en-us_topic_0283136407_p1018051610198"></a>2.7.1-10</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row136701325154914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p76711825134912"><a name="en-us_topic_0283136407_p76711825134912"></a><a name="en-us_topic_0283136407_p76711825134912"></a>redhat-lsb-core</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p1567262515496"><a name="en-us_topic_0283136407_p1567262515496"></a><a name="en-us_topic_0283136407_p1567262515496"></a>4.1</p>
</td>
</tr>
<tr id="en-us_topic_0283136407_row31481729151515"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136407_p18151829101518"><a name="en-us_topic_0283136407_p18151829101518"></a><a name="en-us_topic_0283136407_p18151829101518"></a>readline-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136407_p191511929131512"><a name="en-us_topic_0283136407_p191511929131512"></a><a name="en-us_topic_0283136407_p191511929131512"></a>7.0-13</p>
</td>
</tr>
<tr id="row12300105819346"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p11300155813414"><a name="p11300155813414"></a><a name="p11300155813414"></a>cmake</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1430015843417"><a name="p1430015843417"></a><a name="p1430015843417"></a>3.18</p>
</td>
</tr>
</tbody>
</table>

## Environment Variables<a name="en-us_topic_0283136407_section1616215293319"></a>

The environment variable configuration for building openGauss Lite has been written into the one-click build and packaging script. Therefore, you do not need to configure the environment variables.

