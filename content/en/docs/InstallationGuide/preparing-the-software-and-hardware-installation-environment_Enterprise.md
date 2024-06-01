# Preparing the Software and Hardware Installation Environment<a name="EN-US_TOPIC_0000001120590728"></a>

This section describes the preparations for installation.

## Software and Hardware Requirements<a name="section113764326018"></a>

This section describes hardware and software requirements of openGauss Lite. It is recommended that servers to be deployed on openGauss Lite have the same software and hardware configurations.

**Hardware Requirements**

[Table 1](#en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_t62cd0eed17004265b1b8ad98f302a4bc)  describes the minimum hardware requirements of openGauss Lite. When planning the hardware configuration of a product, consider the data scale and expected database response speed. Plan hardware as required.

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
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a1eb44a187b20406fa74eee0a502319b1"></a>It is recommended that the size of a single instance be greater than 4 GB.</p>
<div class="note" id="note12351110184713"><a name="note12351110184713"></a><a name="note12351110184713"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="ul13478193013813"></a><a name="ul13478193013813"></a><ul id="ul13478193013813"><li>If the database and other applications run on the server at the same time, it is recommended that you set the value of <strong id="b19459115010239"><a name="b19459115010239"></a><a name="b19459115010239"></a>shamax</strong> to half of the physical memory size. If only the database runs on the server, it is recommended that you set the value of <strong id="b229316111245"><a name="b229316111245"></a><a name="b229316111245"></a>shamax</strong> to 80% of the physical memory size.</li><li>If the memory usage increases due to a database exception and reaches the upper limit 4 GB, an OOM occurs. After OOM, the database stops and does not respond to services.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_row18457708163752"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p18679412163752"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p36637388163752"></a>One 8-core 2.0 GHz CPU is recommended. Model: 2658A v3; specifications: 4 GB</p>
<p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p2939854163851"></a>You can set CPUs to hyper-threading or non-hyper-threading mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rc2f89a29186544e79e7995d19878a617"><td class="cellrowborder" valign="top" width="12.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_aeb29f61cf13345269542500c96fa3370"></a>Disk</p>
</td>
<td class="cellrowborder" valign="top" width="87.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"></a><a name="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_p27815444154057"></a>Hard disks used for installing <span id="text82744084919"><a name="text82744084919"></a><a name="text82744084919"></a><span id="text17175507184"><a name="text17175507184"></a><a name="text17175507184"></a>openGauss</span></span> <span id="text469153010158"><a name="text469153010158"></a><a name="text469153010158"></a>Lite</span> must meet the following requirements:</p>
<p id="p2064323811818"><a name="p2064323811818"></a><a name="p2064323811818"></a>Disk space: 120 GB</p>
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

**Software Requirements**

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
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136474_ul2800840102316"></a><a name="en-us_topic_0283136474_ul2800840102316"></a><ul id="en-us_topic_0283136474_ul2800840102316"><li>Arm:<a name="en-us_topic_0283136474_ul177759349286"></a><a name="en-us_topic_0283136474_ul177759349286"></a><ul id="en-us_topic_0283136474_ul177759349286"><li>openEuler 20.03 LTS</li><li>openEuler 22.03 LTS</li></ul>
</li><li>x86:<a name="en-us_topic_0283136474_ul851564911283"></a><a name="en-us_topic_0283136474_ul851564911283"></a><ul id="en-us_topic_0283136474_ul851564911283"><li>Centos 7.6</li><li>openEuler 20.03 LTS</li><li>openEuler 22.03 LTS</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136474_en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rf52ebb45df8e4f57882a97bef3b36ca6"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a><a name="en-us_topic_0283136474_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a>Linux file system</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"><a name="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"></a><a name="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"></a>The ext4 file system is recommended for openEuler.</p>
<p id="en-us_topic_0283136474_p537517310381"><a name="en-us_topic_0283136474_p537517310381"></a><a name="en-us_topic_0283136474_p537517310381"></a>It is recommended that the number of remaining inodes be greater than 1.5 billion.</p>
</td>
</tr>
<tr id="en-us_topic_0283136474_row128032214310"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p682172212430"><a name="en-us_topic_0283136474_p682172212430"></a><a name="en-us_topic_0283136474_p682172212430"></a>Tool</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p582112294311"><a name="en-us_topic_0283136474_p582112294311"></a><a name="en-us_topic_0283136474_p582112294311"></a>bzip2</p>
</td>
</tr>
<tr id="row149893529588"><td class="cellrowborder" valign="top" width="25.230000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0289899729_en-us_topic_0283136474_p075762219324"><a name="en-us_topic_0289899729_en-us_topic_0283136474_p075762219324"></a><a name="en-us_topic_0289899729_en-us_topic_0283136474_p075762219324"></a>Python</p>
</td>
<td class="cellrowborder" valign="top" width="74.77000000000001%" headers="mcps1.2.3.1.2 "><a name="en-us_concept_0283139016_ul1537120034117"></a><a name="en-us_concept_0283139016_ul1537120034117"></a><ul id="en-us_concept_0283139016_ul1537120034117"><li>Python 3.6 or later</li></ul>
</td>
</tr>
</tbody>
</table>

**Software Dependency Requirements**

[Table 3](#en-us_topic_0283136474_table1212531681911)  lists the software dependency requirements for openGauss Lite.

You are advised to use the default installation packages of the following dependent software in the listed OS installation CD-ROMs or sources. If the following software does not exist, refer to the recommended versions of the software.

**Table  3**  Software dependency requirements

<a name="en-us_topic_0283136474_table1212531681911"></a>
<table><thead align="left"><tr id="en-us_topic_0283136474_row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136474_p14178216101910"><a name="en-us_topic_0283136474_p14178216101910"></a><a name="en-us_topic_0283136474_p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136474_p1117815167195"><a name="en-us_topic_0283136474_p1117815167195"></a><a name="en-us_topic_0283136474_p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0283136474_row9187524151412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136474_p1718842421419"><a name="en-us_topic_0283136474_p1718842421419"></a><a name="en-us_topic_0283136474_p1718842421419"></a>readline-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136474_p0189112418140"><a name="en-us_topic_0283136474_p0189112418140"></a><a name="en-us_topic_0283136474_p0189112418140"></a>7.0-13</p>
</td>
</tr>
<tr id="row81995715810"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p182008785810"><a name="p182008785810"></a><a name="p182008785810"></a>expect</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p720057175817"><a name="p720057175817"></a><a name="p720057175817"></a>--</p>
</td>
</tr>
<tr id="row121763514385"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p111768515384"><a name="p111768515384"></a><a name="p111768515384"></a>libaio-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p61761516386"><a name="p61761516386"></a><a name="p61761516386"></a>Recommended version: 0.3 or later</p>
</td>
</tr>
</tbody>
</table>

## Modifying OS Configuration<a name="section231319141039"></a>

**Disabling the OS Firewall**

To ensure that openGauss Lite can work properly when the firewall is enabled, Lite-related services, protocols, IP addresses, and ports need to be added to the firewall whitelist of the host.

openEuler  is used as an example, the openGauss Lite information is as shown in  [Table 4](#en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_table4312170510523).

**Table  4**  openGauss information

<a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_table4312170510523"></a>
<table><thead align="left"><tr id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row3906252510523"><th class="cellrowborder" valign="top" width="19.36%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"></a>Host Name</p>
</th>
<th class="cellrowborder" valign="top" width="30.64%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"></a>Internal IP Address</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"></a>External IP Address</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row3853509710523"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"></a>plat1</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"></a>192.168.0.11</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"></a>10.10.0.11</p>
</td>
</tr>
<tr id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row8271151181015"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"></a>Management network</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"></a><a name="en-us_topic_0283136490_en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"></a>10.10.64.236</p>
</td>
</tr>
</tbody>
</table>

Currently, the installation can be performed only when the firewall is disabled.

1. <a name="en-us_topic_0283136490_en-us_topic_0241802566_li17785744465"></a>Change the value of **SELINUX** in the **/etc/selinux/config** file to **disabled**.

   a. Run the **vim** command to open the **config** file.

   ```
   vim /etc/selinux/config
   ```

   b. Change the value of **SELINUX** to **disabled** and run the **:wq** command to save the change and exit.

   ```
   SELINUX=disabled
   ```

2.  Restart the OS.

    ```
    reboot
    ```

3.  Check whether the firewall is disabled.

    ```
    systemctl status firewalld
    ```

    If the firewall status is  **active \(running\)**, the firewall is not disabled. Go to step  [4](#en-us_topic_0283136490_li17330102819394).

    If the firewall status is  **inactive \(dead\)**, you do not need to disable the firewall.

4.  <a name="en-us_topic_0283136490_li17330102819394"></a>Disable the firewall service.

    ```
    systemctl disable firewalld.service
    systemctl stop firewalld.service
    ```

5.  Repeat  [1](#en-us_topic_0283136490_en-us_topic_0241802566_li17785744465)  to  [4](#en-us_topic_0283136490_li17330102819394)  on other hosts.

**Setting Character Set Parameters**

Set the same character set for all database nodes. You can add  **export LANG=** *Unicode*  to the  **/etc/profile**  file.

```
vim /etc/profile
```

**Setting the Time Zone and Time**

Ensure that the time zone and time on each database node are consistent.

1.  Run the following command to check whether the time and time zone of each database node are consistent: If not, perform steps  [2](#en-us_topic_0283136490_li1238816343545)  to  [3](#en-us_topic_0283136490_li153615819546).

    ```
    date
    ```

2.  <a name="en-us_topic_0283136490_li1238816343545"></a>Run the following command to copy the  **/etc/localtime**  file to the  **/usr/share/zoneinfo/**  directory of each database node:

    ```
    cp /usr/share/zoneinfo/$Locale/$Time zone /etc/localtime
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >*$Locale/$Time zone*  indicates the locale and time zone to be set, for example,  **Asia/Shanghai**.

3.  <a name="en-us_topic_0283136490_li153615819546"></a>Run the  **date -s**  command to set the time of each database node to the same time. For example:

    ```
    date -s "Sat Sep 27 16:00:07 CST 2020"
    ```


**\(Optional\) Disabling the Swap Memory**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Disabling the swap memory ensures the access performance of the database and prevents the buffer memory of the database from being evicted to the disk. If the server memory is small and the memory is overloaded, you can enable the swap memory to ensure normal running.

Run the  **swapoff -a**  command on each database node to disable the swap memory.

```
swapoff -a
```

**Disabling RemoveIPC**

On each database node, disable  **RemoveIPC**.

1. <a name="en-us_topic_0283136490_en-us_topic_0241802566_li17785744466"></a> Change the value of **RemoveIPC** in **/etc/systemd/logind.conf** to **no**.

   a. Run the **vim** command to open the **logind.conf** file.

   ```
   vim  /etc/systemd/logind.conf
   ```

   b. Change the value of **RemoveIPC** to **no**.

   ```
   RemoveIPC=no
   ```

2. Change the value of **RemoveIPC** in the **/usr/lib/systemd/system/systemd-logind.service** file to **no**.

   a. Run the **vim** command to open the **systemd-logind.service** file.

   ```
   vim /usr/lib/systemd/system/systemd-logind.service
   ```

   b. Change the value of **RemoveIPC** to **no**.

   ```
   RemoveIPC=no
   ```

3.  Reload configuration parameters.

    ```
    systemctl daemon-reload
    systemctl restart systemd-logind
    ```

4.  <a name="en-us_topic_0283136490_en-us_topic_0241802566_li17785744467"></a>Check whether the modification takes effect.

    ```
    loginctl show-session | grep RemoveIPC
    systemctl show systemd-logind | grep RemoveIPC
    ```

5.  Repeat Step 1 (#en-us_topic_0283136490_en-us_topic_0241802566_li17785744466) to Step 4 (#en-us_topic_0283136490_en-us_topic_0241802566_li17785744467) on other hosts.

### Disabling the History Command

>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>To prevent security risks caused by historical records, you need to disable the history command on each host.

Step 1 Modify the **/etc/profile** file in the root directory.

```
vim /etc/profile
```

Step 2 Set **HISTSIZE** to **0**. For example, if the default value of **HISTSIZE** is **1000**, change it to **0**.

```
HISTSIZE=0
```

Step 3 Save the **/etc/profile** file.

```
:wq
```

Step 4 Make the **/etc/profile** file take effect.

```
source /etc/profile
```

**----End**

## Setting Remote Login as User **root**

During the openGauss installation, the user **root** is required for remote login. This section describes how to set the user **root** for remote login.

>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>The remote connection function is enabled only when mutual trust between users **root** is required in the database. After the operations and verifications are complete on each host, log out of the system as user **root** in a timely manner to prevent misoperations.

1. Modify the **PermitRootLogin** configuration to enable remote login of user **root**.

    a. Open the **sshd\_config** file.

   ```
   vim /etc/ssh/sshd_config
   ```

   b. Modify permissions of user **root** using either of the following methods:

   - Comment out **PermitRootLogin no**.

     ```
     #PermitRootLogin no
     ```

   - Change the value of **PermitRootLogin** to **yes**.

     ```
     PermitRootLogin yes
     ```

   c. Run the **:wq** command to save the modification and exit.

2. Modify the **Banner** configuration to delete the welcome information displayed when you connect to the system. The welcome information affects the return result of remote operations during the installation.

   a. Edit the **sshd\_config** file.

   ```
   vim /etc/ssh/sshd_config
   ```

   b. Comment out the line where **Banner** is.

   ```
   #Banner XXXX
   ```

   c. Run the **:wq** command to save the modification and exit.

3. Run the following command to validate the settings:

   ```
   systemctl restart sshd.service
   ```

4. Re-log in to the system as user **root**.

   ```
   ssh xxx.xxx.xxx.xxx
   ```

   > ![](public_sys-resources/icon-note.gif) **NOTE:**
   >
   > *xxx.xxx.xxx.xxx* is the IP address for installing the openGauss environment.
