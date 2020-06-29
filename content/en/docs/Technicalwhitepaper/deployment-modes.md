# Deployment Modes<a name="EN-US_TOPIC_0251307664"></a>

For details about the standalone and HA cluster deployment modes, see  [Table 1](#en-us_topic_0243295239_en-us_topic_0240782908_table138801827134510).

**Table  1**  Deployment modes in openGauss

<a name="en-us_topic_0243295239_en-us_topic_0240782908_table138801827134510"></a>
<table><thead align="left"><tr id="en-us_topic_0243295239_en-us_topic_0240782908_row88806271452"><th class="cellrowborder" valign="top" width="7.830783078307831%" id="mcps1.2.8.1.1"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"></a>Deployment Mode</p>
</th>
<th class="cellrowborder" valign="top" width="11.561156115611562%" id="mcps1.2.8.1.2"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"></a>Technical Solution</p>
</th>
<th class="cellrowborder" valign="top" width="10.051005100510052%" id="mcps1.2.8.1.3"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"></a>HA</p>
</th>
<th class="cellrowborder" valign="top" width="10.671067106710671%" id="mcps1.2.8.1.4"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"></a>Basic Configuration Requirement</p>
</th>
<th class="cellrowborder" valign="top" width="10.41104110411041%" id="mcps1.2.8.1.5"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"></a>Business Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="20.99209920992099%" id="mcps1.2.8.1.6"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"></a>Characteristics</p>
</th>
<th class="cellrowborder" valign="top" width="28.48284828482848%" id="mcps1.2.8.1.7"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"></a>Technical Specifications</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0243295239_en-us_topic_0240782908_row18811277455"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"></a>Standalone</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"></a>Standalone</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"></a>HA is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"></a>Physical machine (PM)</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"><li>No reliability and availability requirements for the system.</li><li>Used for trial use and commissioning.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"><li>RTO and RPO are uncontrollable.</li><li>Instance-level DR is not supported. The system is unavailable when instance faults occur.</li><li>Lost instance data cannot be restored.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0243295239_en-us_topic_0240782908_row16881142774510"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"></a>Primary/Standby</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"></a>Primary node + Standby node</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"></a>Instance faults can be withstood.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"></a>PM</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"><li>No network latency between nodes.</li><li>Instance faults in the cluster can be withstood.</li><li>Applicable to scenarios without high reliability requirements.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"><li>RPO=0</li><li>Instance fault RTO &lt; 10s</li><li>AZ-level DR is not supported.</li><li>Recommended maximum availability mode</li></ul>
</td>
</tr>
<tr id="en-us_topic_0243295239_en-us_topic_0240782908_row1188192764517"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p12881102744520"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p12881102744520"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p12881102744520"></a>One primary and multiple standbys</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"></a>Primary node + Multiple standby nodes +Quorum</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"></a>Instance faults can be withstood.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"></a>PM</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"><li>No network latency between nodes.</li><li>Instance faults in the cluster can be withstood.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul13758194392316"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul13758194392316"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul13758194392316"><li>RPO=0</li><li>Instance fault RTO &lt; 10s</li><li>AZ-level DR is not supported.</li><li>Primary/Standby synchronization is recommended.</li><li>At least two copies and at most four copies are supported.</li></ul>
</td>
</tr>
</tbody>
</table>

## Hardware and Software Specifications<a name="en-us_topic_0243295239_en-us_topic_0240782908_section9327172719508"></a>

openGauss supports the following CPUs and OSs:

**Table  2**  openGauss software and hardware specifications

<a name="en-us_topic_0243295239_en-us_topic_0240782908_table112131848163420"></a>
<table><thead align="left"><tr id="en-us_topic_0243295239_en-us_topic_0240782908_row1521418485347"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"></a>Delivery Mode</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"></a>CPU</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"></a>OS</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0243295239_en-us_topic_0240782908_row18214144823411"><td class="cellrowborder" rowspan="2" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"></a>Open source and offline</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a>X86</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"></a>CentOS 7.6</p>
</td>
</tr>
<tr id="en-us_topic_0243295239_en-us_topic_0240782908_row221414883410"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a>Kunpeng</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a>openEuler 20.03 LTS</p>
</td>
</tr>
</tbody>
</table>

