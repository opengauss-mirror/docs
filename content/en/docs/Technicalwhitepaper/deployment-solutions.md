# Deployment Solutions<a name="EN-US_TOPIC_0251307662"></a>

The openGauss can be deployed in standalone mode or with one primary node and multiple standby nodes.

## Common Concepts<a name="section8443227204011"></a>

-   Standalone

    There is only one database instance.

- Primary/Standby

  There are primary and standby database instances in the system. The primary instance supports read and write, and the standby instance supports read-only.

- One primary and multiple standbys

  The system has one primary node and multiple standby nodes. Up to  8  standby nodes are supported.

- Hot/Cold backup

  Cold backup: There is only a simple backup set that cannot provide services.

  Hot backup: Backup databases can provide services for external systems.


## Deployment Modes<a name="section189157457406"></a>

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
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p28811277451"></a>Primary node + Multiple standby nodes +Quorum +Paxos</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1965812387151"></a>Instance faults in the database can be withstood.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1098791801920"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p8591412192012"></a>PM</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"></a><ul id="en-us_topic_0243295239_en-us_topic_0240782908_ul1473717417212"><li>No network latency between nodes.</li><li>Instance faults in the database can be withstood.</li></ul>
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
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a>x86</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p19214148183417"></a>CentOS 7.6 , openEuler 20.03 LTS or Asianux 7.6</p>
</td>
</tr>
<tr id="en-us_topic_0243295239_en-us_topic_0240782908_row221414883410"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a>Kunpeng</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a><a name="en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a>openEuler 20.03 LTS , Kirin V10 or Asianux 7.5</p>
</td>
</tr>
</tbody>
</table>


## Introduction to Deployment Solutions<a name="section1368015013424"></a>

The overall deployment solution can be classified into three types: standalone deployment, primary/standby deployment, and one-primary and multiple-standby deployment. For details, see the following sections.

-   Standalone Deployment

    The standalone deployment does not ensure reliability or availability. There is only one data copy. If data is damaged or lost, data can be restored only through physical backup. Therefore, this deployment mode applies to scenarios such as experiencing databases and commissioning syntax functions in the test environment. You are not advised to use this mode on the commercial live network.

    **Figure  1**  Standalone deployment<a name="en-us_topic_0243295241_en-us_topic_0243253012_fig1128133574111"></a>  
    

    ![](figures/en-us_image_0270750231.png)

-   Primary/Standby Deployment

    The primary/standby deployment mode is equivalent to two data copies. The primary and standby nodes each have a data copy. The standby node receives and plays back logs.

    **Figure  2**  Primary/Standby deployment<a name="en-us_topic_0243295242_en-us_topic_0243253013_fig1843505845112"></a>  
    ![](figures/primary-standby-deployment.png "primary-standby-deployment")

-   Deployment with One Primary and Multiple Standbys

    The multi-copy deployment mode provides the capability of defending against instance-level faults. This mode is applicable to scenarios where equipment room DR is not required but some hardware faults need to be prevented.

    Generally, the one-primary and two-standby mode is used for multi-copy deployment. There are three copies in total. The reliability of the three copies is 99.99%, which can meet the reliability requirements of most applications.

    -   In primary/standby DN quorum replication, data is synchronized to at least one standby to ensure the maximum performance.
    -   If any of primary and standby DNs is faulty, services will not be affected.
    -   There are three copies of data. If one node is faulty, the system still has two copies of data. In addition, any standby DN can be promoted to primary.
    -   The primary and standby instances cannot be deployed on the same physical machine.

    **Figure  3**  One-primary and multiple-standby deployment<a name="fig5294135131017"></a>  
    ![](figures/one-primary-and-multiple-standby-deployment.png "one-primary-and-multiple-standby-deployment")

