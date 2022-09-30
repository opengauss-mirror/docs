# Setting up the Compilation Environment<a name="EN-US_TOPIC_0241496985"></a>

## Hardware Requirements<a name="section63971240179"></a>

Hardware requirements for compiling the openGauss are as follows:

-   Number of servers: 1
-   Hardware specifications:
    -   CPU: 4U \(64-bit\)
    -   Memory: 8 GB
    -   Free disk space: 100 GB


## Software Requirements<a name="section1704182212918"></a>

**OS Requirements**

The following OSs \(Linux 64-bit\) are supported:

-   CentOS 7.6 \(x86_64 architecture\)
-   openEuler-20.03-LTS \(aarch64 architecture\)
-   openEuler-20.03-LTS  \(x86_64 architecture\)
-   Kylin-V10 \(aarch64 architecture\)
-   Asianux 7.6 \(x86_64 architecture\)
-   Asianux 7.5 \(aarch64 architecture\)
-   FusionOS 22 \(aarch64 architecture\)
-   FusionOS 22 \(x86 architecture\)

**Software Dependency Requirements**

[Table Software dependency requirements](#table1212531681911)  lists the software requirements for compiling the openGauss.

You are advised to use the default installation packages of the following dependent software in the listed OS installation CD-ROMs or sources. If the following software does not exist, refer to the recommended versions of the software.

**Table  1**  Software dependency requirements

<a name="table1212531681911"></a>
<table><thead align="left"><tr id="row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p14178216101910"><a name="p14178216101910"></a><a name="p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1117815167195"><a name="p1117815167195"></a><a name="p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody><tr id="row17179141619198"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p111791816141910"><a name="p111791816141910"></a><a name="p111791816141910"></a>libaio-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p101791116151915"><a name="p101791116151915"></a><a name="p101791116151915"></a>0.3.109-13</p>
</td>
</tr>
<tr id="row1617981631914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p171794161195"><a name="p171794161195"></a><a name="p171794161195"></a>flex</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1317921651912"><a name="p1317921651912"></a><a name="p1317921651912"></a>2.5.31 or later</p>
</td>
</tr>
<tr id="row1017911165191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1617931661912"><a name="p1617931661912"></a><a name="p1617931661912"></a>bison</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p917919167196"><a name="p917919167196"></a><a name="p917919167196"></a>2.7-4</p>
</td>
</tr>
<tr id="row8179181610191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p101791416191912"><a name="p101791416191912"></a><a name="p101791416191912"></a>ncurses-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p0179161651913"><a name="p0179161651913"></a><a name="p0179161651913"></a>5.9-13.20130511</p>
</td>
</tr>
<tr id="row10179416191912"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1117941618198"><a name="p1117941618198"></a><a name="p1117941618198"></a>glibc-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5179191616190"><a name="p5179191616190"></a><a name="p5179191616190"></a>2.17-111</p>
</td>
</tr>
<tr id="row317914169193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p201791916201910"><a name="p201791916201910"></a><a name="p201791916201910"></a>patch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1018051610198"><a name="p1018051610198"></a><a name="p1018051610198"></a>2.7.1-10</p>
</td>
</tr>
<tr id="row136701325154914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76711825134912"><a name="p76711825134912"></a><a name="p76711825134912"></a>redhat-lsb_core</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1567262515496"><a name="p1567262515496"></a><a name="p1567262515496"></a>4.1</p>
</td>
</tr>
</tbody>
</table>

## Configuring Environment Variables<a name="section2030312481136"></a>

The environment variable configuration for compiling the openGauss has been written into the one-click compilation and packaging script. Therefore, you do not need to configure the environment variables.

If you do not want to use the one-click compilation script, you need to manually configure environment variables. For details, see  [Software Compilation and Installation](compiling-the-version.md).
