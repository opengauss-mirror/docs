# Tool Overview<a name="EN-US_TOPIC_0289899254"></a>

openGauss provides client and server applications \(tools\) to help users better maintain openGauss.  [Table 1](#en-us_topic_0287276012_en-us_topic_0237152139_table11292939125111)  lists all the tools provided by openGauss. The tools are stored in  **$GPHOME/script**  and  **$GAUSSHOME/bin**  where database servers are installed.

**Table  1**  Tool overview

<a name="en-us_topic_0287276012_en-us_topic_0237152139_table11292939125111"></a>
<table><thead align="left"><tr id="en-us_topic_0287276012_en-us_topic_0237152139_row11292239115117"><th class="cellrowborder" valign="top" width="15.290000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287276012_en-us_topic_0237152139_p1729213925115"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1729213925115"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1729213925115"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287276012_en-us_topic_0237152139_p16292113925120"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p16292113925120"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p16292113925120"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="66.10000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287276012_en-us_topic_0237152139_p1529263985118"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1529263985118"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1529263985118"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287276012_en-us_topic_0237152139_row429233975110"><td class="cellrowborder" rowspan="1" valign="top" width="15.290000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p1629218390514"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1629218390514"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1629218390514"></a><a href="client-tool.md">Client tool</a></p>
</td>
<td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p11292103955117"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p11292103955117"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p11292103955117"></a><a href="gsql.md">gsql</a></p>
</td>
<td class="cellrowborder" valign="top" width="66.10000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778199_p168688291226"><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778199_p168688291226"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778199_p168688291226"></a><strong id="b1675244914401"><a name="b1675244914401"></a><a name="b1675244914401"></a>gsql</strong> is a database connection tool provided by openGauss and runs in the command-line interface (CLI). Users can use <strong id="b107522049124018"><a name="b107522049124018"></a><a name="b107522049124018"></a>gsql</strong> to connect to a server and perform operations and maintenance on the server. In addition to basic functions for performing operations on a database, <strong id="b2753194918407"><a name="b2753194918407"></a><a name="b2753194918407"></a>gsql</strong> provides several advanced features for users.</p>
</td>
</tr>
<tr id="row11852632175112"><td class="cellrowborder" rowspan="14" valign="top" width="15.290000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_p452655620107"><a name="en-us_topic_0287276012_p452655620107"></a><a name="en-us_topic_0287276012_p452655620107"></a><a href="server-tools.md">Server tool</a></p>
</td>
<td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.2 "><p id="p1185315325511"><a name="p1185315325511"></a><a name="p1185315325511"></a><a href="gs_cgroup.md">gs_cgroup</a></p>
</td>
<td class="cellrowborder" valign="top" width="66.10000000000001%" headers="mcps1.2.4.1.3 "><p id="p78531232155117"><a name="p78531232155117"></a><a name="p78531232155117"></a><strong id="b828126114810"><a name="b828126114810"></a><a name="b828126114810"></a>gs_cgroup</strong> is a load management tool provided by <span id="text1053225181018"><a name="text1053225181018"></a><a name="text1053225181018"></a>openGauss</span>. It can create default Cgroups and user-defined Cgroups, delete default and user-defined Cgroups, update resource quotas and limits, display the configuration files of Cgroups and the Cgroup tree, and delete all Cgroups.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_row192408289361"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_p829316397516"><a name="en-us_topic_0287276012_p829316397516"></a><a name="en-us_topic_0287276012_p829316397516"></a><a href="gs_check.md">gs_check</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_p524132815367"><a name="en-us_topic_0287276012_p524132815367"></a><a name="en-us_topic_0287276012_p524132815367"></a><strong id="b147391934201513"><a name="b147391934201513"></a><a name="b147391934201513"></a>gs_check</strong> has been enhanced to incorporate various check tools, such as <a href="gs_check.md"><strong id="b83253481726"><a name="b83253481726"></a><a name="b83253481726"></a>gs_check</strong></a> and <a href="gs_checkos.md"><strong id="b187891251123"><a name="b187891251123"></a><a name="b187891251123"></a>gs_checkos</strong></a>. It helps users fully check openGauss runtime, OS, network, and database running environments, as well as perform comprehensive checks on various environments before major operations in openGauss, ensuring smooth operations.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_row1423719911435"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_p2023869194312"><a name="en-us_topic_0287276012_p2023869194312"></a><a name="en-us_topic_0287276012_p2023869194312"></a><a href="gs_checkos.md">gs_checkos</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_p19238299430"><a name="en-us_topic_0287276012_p19238299430"></a><a name="en-us_topic_0287276012_p19238299430"></a><strong id="b46272261926"><a name="b46272261926"></a><a name="b46272261926"></a>gs_checkos</strong> checks OS information, control parameters, and disk configurations, and configures control parameters, I/O parameters, network parameters, and THP services.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_row1632145311437"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_p53345304316"><a name="en-us_topic_0287276012_p53345304316"></a><a name="en-us_topic_0287276012_p53345304316"></a><a href="gs_checkperf.md">gs_checkperf</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_p033145312431"><a name="en-us_topic_0287276012_p033145312431"></a><a name="en-us_topic_0287276012_p033145312431"></a><strong id="b15507200192514"><a name="b15507200192514"></a><a name="b15507200192514"></a>gs_checkperf</strong> routinely checks openGauss-level performance (host CPU, Gauss CPU, and I/O usage), node-level performance (CPU, memory, and I/O usage), session-/process-level performance (CPU, memory, and I/O usage), and SSD performance (read and write performance). It provides openGauss load information for users so that they can fine-tune database performance accordingly.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row1254801426"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p8254160726"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p8254160726"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p8254160726"></a><a href="gs_collector.md">gs_collector</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778085_p12208556330"><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778085_p12208556330"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059778085_p12208556330"></a>When openGauss is faulty, <strong id="b114205584485"><a name="b114205584485"></a><a name="b114205584485"></a>gs_collector</strong> collects OS information, log information, and configuration file information to locate the fault.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row1624695820115"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p16246145815114"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p16246145815114"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p16246145815114"></a><a href="gs_dump.md">gs_dump</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p589185483411"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p589185483411"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p589185483411"></a><strong id="b365041111514"><a name="b365041111514"></a><a name="b365041111514"></a>gs_dump</strong> exports database information. It can export complete, consistent data of database objects (such as databases, schemas, tables, and views) without affecting the normal access of users to the databases.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row54209567117"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p1942035618119"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1942035618119"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p1942035618119"></a><a href="gs_dumpall.md">gs_dumpall</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p14201756319"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p14201756319"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p14201756319"></a><strong id="b131751711210"><a name="b131751711210"></a><a name="b131751711210"></a>gs_dumpall</strong> exports database information. It can export complete, consistent data of <span id="en-us_topic_0287276012_text1078612577394"><a name="en-us_topic_0287276012_text1078612577394"></a><a name="en-us_topic_0287276012_text1078612577394"></a>openGauss</span> without affecting the normal access of users to the database.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row10597115214118"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p659712521716"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p659712521716"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p659712521716"></a><a href="gs_guc.md">gs_guc</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p247413549146"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p247413549146"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p247413549146"></a><strong id="b536383915165"><a name="b536383915165"></a><a name="b536383915165"></a>gs_guc</strong> is used to set parameters in openGauss configuration files (<strong id="b1936393917163"><a name="b1936393917163"></a><a name="b1936393917163"></a>postgresql.conf</strong> or <strong id="b036483991614"><a name="b036483991614"></a><a name="b036483991614"></a>pg_hba.conf</strong>). The default parameter values in a configuration file are consistent with those for a standalone database.</p>
</td>
</tr>
<tr id="row960781113418"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p36071118341"><a name="p36071118341"></a><a name="p36071118341"></a><a href="gs_encrypt.md">gs_encrypt</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p26072017340"><a name="p26072017340"></a><a name="p26072017340"></a><strong id="b19839952124712"><a name="b19839952124712"></a><a name="b19839952124712"></a>gs_encrypt</strong> is used to encrypt entered plaintext strings.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row119050238114"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p109051023213"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p109051023213"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p109051023213"></a><a href="gs_om.md">gs_om</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777902_p1551179172822"><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777902_p1551179172822"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777902_p1551179172822"></a><strong id="b13942552394"><a name="b13942552394"></a><a name="b13942552394"></a>gs_om</strong>, provided by openGauss, helps you maintain <span id="en-us_topic_0287276012_text10930359193913"><a name="en-us_topic_0287276012_text10930359193913"></a><a name="en-us_topic_0287276012_text10930359193913"></a>openGauss</span>, including starting and stopping <span id="en-us_topic_0287276012_text2479224020"><a name="en-us_topic_0287276012_text2479224020"></a><a name="en-us_topic_0287276012_text2479224020"></a>openGauss</span>, querying the <span id="en-us_topic_0287276012_text181261849403"><a name="en-us_topic_0287276012_text181261849403"></a><a name="en-us_topic_0287276012_text181261849403"></a>openGauss</span> status, generating static configuration files, updating dynamic configuration files, replacing SSL certificates, starting and stopping Kerberos authentication, and displaying help information and version numbers.</p>
</td>
</tr>
<tr id="row2092033215505"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17921232195015"><a name="p17921232195015"></a><a name="p17921232195015"></a><a href="gs_plan_simulator.md">gs_plan_simulator</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p2470113320489"><a name="p2470113320489"></a><a name="p2470113320489"></a><strong id="b18533510154819"><a name="b18533510154819"></a><a name="b18533510154819"></a>gs_plan_simulator</strong> collects data related to execution plans and reproduces execution plans in other environments to locate execution plan problems.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_en-us_topic_0237152139_row179461229712"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_p13946142914116"><a name="en-us_topic_0287276012_en-us_topic_0237152139_p13946142914116"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_p13946142914116"></a><a href="gs_restore.md">gs_restore</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777561_p18915143673517"><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777561_p18915143673517"></a><a name="en-us_topic_0287276012_en-us_topic_0237152139_en-us_topic_0059777561_p18915143673517"></a><strong id="b211523574320"><a name="b211523574320"></a><a name="b211523574320"></a>gs_restore</strong>, provided by openGauss, is used to import data that was exported using <strong id="b1411603554310"><a name="b1411603554310"></a><a name="b1411603554310"></a>gs_dump</strong>. It can also be used to import files exported by <strong id="b1644280202115"><a name="b1644280202115"></a><a name="b1644280202115"></a>gs_dump</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0287276012_row2099819566449"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287276012_p20998856154416"><a name="en-us_topic_0287276012_p20998856154416"></a><a name="en-us_topic_0287276012_p20998856154416"></a><a href="gs_ssh.md">gs_ssh</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287276012_p11998556194411"><a name="en-us_topic_0287276012_p11998556194411"></a><a name="en-us_topic_0287276012_p11998556194411"></a><strong id="b1479194310432"><a name="b1479194310432"></a><a name="b1479194310432"></a>gs_ssh</strong>, provided by openGauss, helps users run the same command on multiple nodes in openGauss.</p>
</td>
</tr>
    </tr>
<tr id="row5469165019518"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1447011501555"><a name="p1447011501555"></a><a name="p1447011501555"></a><a href="gs_sdr.md">gs_sdr</a></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p6470150953"><a name="p6470150953"></a><a name="p6470150953"></a><span id="en-us_topic_0287275995_text1932176615"><a name="en-us_topic_0287275995_text1932176615"></a><a name="en-us_topic_0287275995_text1932176615"></a>openGauss</span><span id="ph0565084812"><a name="ph0565084812"></a><a name="ph0565084812"></a><strong>gs\_sdr</strong>, provided by openGauss, implements cross-region remote DR without using additional storage media. The tool provides functions such as streaming DR establishment, DR switchover, planned primary/standby switchover, DR removal, DR status monitoring, and displaying the help information and version number.</span></p>
</td>
</tr>
</tbody>
</table>
