# Preparing the Software and Hardware Installation Environment<a name="EN-US_TOPIC_0000001223947253"></a>

This section describes the preparations for installation. It is recommended that servers to be deployed on openGauss have the same software and hardware configurations.

## Hardware requirements<a name="section113764326018"></a>

[Table 1](#en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_t62cd0eed17004265b1b8ad98f302a4bc)  lists the minimum hardware requirements of the openGauss server. When planning the hardware configuration of a product, consider the data scale and expected database response speed. Plan hardware as required.

**Table  1**  Hardware requirements

<a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_t62cd0eed17004265b1b8ad98f302a4bc"></a>
<table><thead align="left"><tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_r22159407d305418785de8468729ae773"><th class="cellrowborder" valign="top" width="12.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb26fbf45f264229a75a015d5e872c73"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb26fbf45f264229a75a015d5e872c73"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb26fbf45f264229a75a015d5e872c73"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="87.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ae6742eb120254caba0d2e3e8d78d3ce6"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ae6742eb120254caba0d2e3e8d78d3ce6"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ae6742eb120254caba0d2e3e8d78d3ce6"></a>Configuration Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_r6e9f20e9463c41fa8ce77903aa38e901"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aac597314796e4f32be5624781db96791"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aac597314796e4f32be5624781db96791"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aac597314796e4f32be5624781db96791"></a>Memory</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"></a>It is recommended that the memory be 32 GB or above for function debugging.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_p2733433132815"><a name="en-us_topic_0283136474_en-us_topic_0241802565_p2733433132815"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_p2733433132815"></a>In performance tests and commercial deployment, it is recommended that the memory be 128 GB or above for single-instance deployment.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ab636748c0876485b987945069966473e"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ab636748c0876485b987945069966473e"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ab636748c0876485b987945069966473e"></a>Complex queries require much more memory, and therefore, the memory may be insufficient in high-concurrency scenarios. In this case, it is recommended that a large-memory server or load management be used to restrict concurrency on the system.</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_row18457708163752"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"></a>It is recommended at least one 8-core 2.0 GHz CPU be used for function debugging.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_p655107143013"><a name="en-us_topic_0283136474_en-us_topic_0241802565_p655107143013"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_p655107143013"></a>In performance tests and commercial deployment, it is recommended that one 16-core 2.0 GHz CPU be used.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"></a>You can set CPUs to hyper-threading or non-hyper-threading mode.</p>
<div class="note" id="note478320195520"><a name="note478320195520"></a><a name="note478320195520"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p127209169344"><a name="p127209169344"></a><a name="p127209169344"></a>For individual developers, the minimum configuration is 2 cores and 4 GB memory, and the recommended configuration is 4 cores and 8 GB memory.</p>
<p id="p57837193513"><a name="p57837193513"></a><a name="p57837193513"></a>Currently, openGauss supports only the CPUs of Kunpeng servers and x86_64-based universal PC servers.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rc2f89a29186544e79e7995d19878a617"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"></a>Disk</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"></a>Hard disks used for installing <span id="en-us_topic_0283136474_text434316502057"><a name="en-us_topic_0283136474_text434316502057"></a><a name="en-us_topic_0283136474_text434316502057"></a>openGauss</span> must meet the following requirements:</p>
<a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ul38458483154057"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ul38458483154057"></a><ul id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_ul38458483154057"><li>At least 1 GB is used to install the <span id="en-us_topic_0283136474_text119716545518"><a name="en-us_topic_0283136474_text119716545518"></a><a name="en-us_topic_0283136474_text119716545518"></a>openGauss</span> applications.</li><li>About 300 MB is used for each host to store metadata.</li><li>More than 70% of available disk space is reserved to store data.</li></ul>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p1864232295654"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p1864232295654"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p1864232295654"></a>You are advised to configure the system disk to RAID 1 and data disk to RAID 5 and plan four groups of RAID 5 data disks for installing <span id="en-us_topic_0283136474_text977517418"><a name="en-us_topic_0283136474_text977517418"></a><a name="en-us_topic_0283136474_text977517418"></a>openGauss</span>. RAID configuration is not described in this document. You can configure RAID by following instructions in the hardware vendors' manuals or using common methods found on the Internet. Set <strong id="b14599640941754"><a name="b14599640941754"></a><a name="b14599640941754"></a>Disk Cache Policy</strong> to <strong id="b137840606641754"><a name="b137840606641754"></a><a name="b137840606641754"></a>Disabled</strong> to avoid data loss in an unexpected power-off.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p32157354152912"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p32157354152912"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p32157354152912"></a><span id="text379135143"><a name="text379135143"></a><a name="text379135143"></a>openGauss</span> supports using an SSD with the SAS API and NVMe protocol deployed in RAID mode as the primary storage device of the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rfd1c9b77d83d4ffba092bdfbdc322881"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a176cf03cd96e4828a9fcb162c5013968"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a176cf03cd96e4828a9fcb162c5013968"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a176cf03cd96e4828a9fcb162c5013968"></a>Network Requirements</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a3f99d3fb009c4aeaae03e63a481f33ff"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a3f99d3fb009c4aeaae03e63a481f33ff"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a3f99d3fb009c4aeaae03e63a481f33ff"></a>Minimum 300 Mbit/s Ethernet is required.</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p64430430154726"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p64430430154726"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p64430430154726"></a>You are advised to bond two NICs for redundancy. The configuration is not described in this document. You can configure it by following instructions in the manual provided by the hardware manufacturer.</p>
</td>
</tr>
</tbody>
</table>

## **Software Requirements**<a name="section12785165215260"></a>

**Table  2**  Software requirements

<a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_tfb195a8129b24c709d238b091e57405a"></a>
<table><thead align="left"><tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rbb0bb8c17c0c49fc9666f58bdd5487bb"><th class="cellrowborder" valign="top" width="25.230000000000004%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="74.77000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"></a>Configuration Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rd18980a861d444ad8e87a077e7785e40"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"></a><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"></a>Linux OS</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136474_ul2800840102316"></a><a name="en-us_topic_0283136474_ul2800840102316"></a><ul id="en-us_topic_0283136474_ul2800840102316"><li>Arm:<a name="en-us_topic_0283136474_ul177759349286"></a><a name="en-us_topic_0283136474_ul177759349286"></a><ul id="en-us_topic_0283136474_ul177759349286"><li>openEuler 20.3 LTS (recommended)</li><li>Kirin V10</li><li>Asianux 7.5</li></ul>
</li><li>x86:<a name="en-us_topic_0283136474_ul851564911283"></a><a name="en-us_topic_0283136474_ul851564911283"></a><ul id="en-us_topic_0283136474_ul851564911283"><li>openEuler 20.3LTS</li><li>CentOS 7.6</li><li>Asianux 7.6<div class="note" id="en-us_topic_0283136474_note222515135376"><a name="en-us_topic_0283136474_note222515135376"></a><a name="en-us_topic_0283136474_note222515135376"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136474_p1225613103712"><a name="en-us_topic_0283136474_p1225613103712"></a><a name="en-us_topic_0283136474_p1225613103712"></a>The current installation package can be used only on the English operating system.</p>
</div></div>
</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rf52ebb45df8e4f57882a97bef3b36ca6"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a>Linux file system</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p537517310381"><a name="en-us_topic_0283136474_p537517310381"></a><a name="en-us_topic_0283136474_p537517310381"></a>It is recommended that the number of remaining inodes be greater than 1.5 billion.</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row128032214310"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p682172212430"><a name="en-us_topic_0283136474_p682172212430"></a><a name="en-us_topic_0283136474_p682172212430"></a>Tool</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p582112294311"><a name="en-us_topic_0283136474_p582112294311"></a><a name="en-us_topic_0283136474_p582112294311"></a>bzip2</p>
</td>
</tr>
</tbody>
</table>


## **Software Dependency Requirements**<a name="section13116317142718"></a>

[Table 3](#en-us_topic_0283136474_table1212531681911)  describes the openGauss software dependency requirements.

You are advised to use the default installation packages of the following dependent software in the listed OS installation CD-ROMs or sources. If the following software does not exist, refer to the recommended versions of the software.

**Table  3**  Software dependency requirements

<a name="en-us_topic_0283136474_table1212531681911"></a>
<table><thead align="left"><tr id="en-us_topic_0283136474_row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136474_p14178216101910"><a name="en-us_topic_0283136474_p14178216101910"></a><a name="en-us_topic_0283136474_p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136474_p1117815167195"><a name="en-us_topic_0283136474_p1117815167195"></a><a name="en-us_topic_0283136474_p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136474_row17179141619198"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p111791816141910"><a name="en-us_topic_0283136474_p111791816141910"></a><a name="en-us_topic_0283136474_p111791816141910"></a>libaio-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p101791116151915"><a name="en-us_topic_0283136474_p101791116151915"></a><a name="en-us_topic_0283136474_p101791116151915"></a>0.3.109-13</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row1617981631914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p171794161195"><a name="en-us_topic_0283136474_p171794161195"></a><a name="en-us_topic_0283136474_p171794161195"></a>flex</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p1317921651912"><a name="en-us_topic_0283136474_p1317921651912"></a><a name="en-us_topic_0283136474_p1317921651912"></a>2.5.31 or later</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row1017911165191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p1617931661912"><a name="en-us_topic_0283136474_p1617931661912"></a><a name="en-us_topic_0283136474_p1617931661912"></a>bison</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p917919167196"><a name="en-us_topic_0283136474_p917919167196"></a><a name="en-us_topic_0283136474_p917919167196"></a>2.7-4</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row8179181610191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p101791416191912"><a name="en-us_topic_0283136474_p101791416191912"></a><a name="en-us_topic_0283136474_p101791416191912"></a>ncurses-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p0179161651913"><a name="en-us_topic_0283136474_p0179161651913"></a><a name="en-us_topic_0283136474_p0179161651913"></a>5.9-13.20130511</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row10179416191912"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p1117941618198"><a name="en-us_topic_0283136474_p1117941618198"></a><a name="en-us_topic_0283136474_p1117941618198"></a>glibc-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p5179191616190"><a name="en-us_topic_0283136474_p5179191616190"></a><a name="en-us_topic_0283136474_p5179191616190"></a>2.17-111</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row317914169193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p201791916201910"><a name="en-us_topic_0283136474_p201791916201910"></a><a name="en-us_topic_0283136474_p201791916201910"></a>patch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p1018051610198"><a name="en-us_topic_0283136474_p1018051610198"></a><a name="en-us_topic_0283136474_p1018051610198"></a>2.7.1-10</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row136701325154914"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p76711825134912"><a name="en-us_topic_0283136474_p76711825134912"></a><a name="en-us_topic_0283136474_p76711825134912"></a>redhat-lsb-core</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p1567262515496"><a name="en-us_topic_0283136474_p1567262515496"></a><a name="en-us_topic_0283136474_p1567262515496"></a>4.1</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row9187524151412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p1718842421419"><a name="en-us_topic_0283136474_p1718842421419"></a><a name="en-us_topic_0283136474_p1718842421419"></a>readline-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p0189112418140"><a name="en-us_topic_0283136474_p0189112418140"></a><a name="en-us_topic_0283136474_p0189112418140"></a>7.0-13</p>
</td>
</tr>
<tr id="row81995715810"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p182008785810"><a name="p182008785810"></a><a name="p182008785810"></a>libnsl (in the openEuler + x86 environment)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p720057175817"><a name="p720057175817"></a><a name="p720057175817"></a>2.28-36</p>
</td>
</tr>
</tbody>
</table>
