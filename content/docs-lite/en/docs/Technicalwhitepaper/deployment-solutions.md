# Deployment Solutions<a name="EN-US_TOPIC_0289895652"></a>

openGauss can be deployed in standalone mode or with one primary node and multiple standby nodes. openGauss does not provide the CM. Therefore, the high availability solution in the subsequent description is achieved based on the cluster management, arbitration, and recovery provided by users.

## Common Concepts<a name="en-us_topic_0283139012_section27911144155312"></a>

-   Standalone

    There is only one database instance.

-   Primary/Standby

    There are primary and standby database instances in the system. The primary instance supports read and write, and the standby instance supports read-only.

-   Hot/Cold backup

    Cold backup: There is only a simple backup set that cannot provide services.

    Hot backup: Backup databases can provide services for external systems.


## Deployment Modes<a name="en-us_topic_0283139012_section906197544"></a>

For details about the standalone and primary/standby deployment modes, see  [Table 1](#en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_table138801827134510).

**Table  1**  Deployment modes in openGauss

<a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_table138801827134510"></a>
<table><thead align="left"><tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row88806271452"><th class="cellrowborder" valign="top" width="7.830783078307831%" id="mcps1.2.8.1.1"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9880227184518"></a>Deployment Mode</p>
</th>
<th class="cellrowborder" valign="top" width="11.561156115611562%" id="mcps1.2.8.1.2"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1388836114920"></a>Technical Solution</p>
</th>
<th class="cellrowborder" valign="top" width="10.051005100510052%" id="mcps1.2.8.1.3"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p133131537114919"></a>High Availability</p>
</th>
<th class="cellrowborder" valign="top" width="10.671067106710671%" id="mcps1.2.8.1.4"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6990111871915"></a>Basic Configuration Requirement</p>
</th>
<th class="cellrowborder" valign="top" width="10.41104110411041%" id="mcps1.2.8.1.5"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p103111337154915"></a>Service Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="20.99209920992099%" id="mcps1.2.8.1.6"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p7880132764518"></a>Characteristics</p>
</th>
<th class="cellrowborder" valign="top" width="28.48284828482848%" id="mcps1.2.8.1.7"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1088012784511"></a>Specifications</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row18811277455"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p9881162744520"></a>Standalone</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p288192718457"></a>Standalone</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p17881172714513"></a>HA is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1198919186193"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p868019214187"></a>Physical machine</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"></a><ul id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul61827011712"><li>No system reliability and availability requirements</li><li>Applicable to trial use and commissioning scenarios</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"></a><ul id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul83681420142312"><li>RTO and RPO are uncontrollable.</li><li>Instance-level DR is not supported. The system is unavailable when instance faults occur.</li><li>Lost instance data cannot be restored.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row16881142774510"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p8881192712456"></a>Primary/Standby</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p488172764514"></a>Primary and standby nodes</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p888116276453"></a>Instance faults can be withstood.</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p2988191815196"></a>Single equipment room</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p12948205813196"></a>Physical machine</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"></a><ul id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul617272701813"><li>No network delay between nodes</li><li>Able to withstand instance faults in the database</li><li>Applicable to scenarios without high reliability requirements</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"></a><ul id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_ul15571133112234"><li>RPO = 0</li><li>Instance fault RTO &lt; 10s</li><li>AZ-level DR is not supported.</li><li>The primary and standby nodes in maximum availability mode are recommended.</li></ul>
</td>
</tr>
</tbody>
</table>

## Hardware and Software Specifications<a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_section9327172719508"></a>

openGauss supports the following CPUs and OSs:

**Table  2**  openGauss software and hardware specifications

<a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_table112131848163420"></a>
<table><thead align="left"><tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row1521418485347"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p521474873420"></a>Delivery Mode</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p182145480348"></a>CPU</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1021415481346"></a>OS</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row18214144823411"><td class="cellrowborder" rowspan="2" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p42141148193411"></a>Onsite</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p1214174883410"></a>x86</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p438431555610"><a name="p438431555610"></a><a name="p438431555610"></a>EulerOS V2.0SP10 and SUSE 12.5</p>
</td>
</tr>
<tr id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_row221414883410"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p11214164893414"></a>Arm</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a><a name="en-us_topic_0283139012_en-us_topic_0243295239_en-us_topic_0240782908_p6214348143417"></a>EulerOS V2.0SP10</p>
</td>
</tr>
</tbody>
</table>

## Introduction to Deployment Solutions<a name="en-us_topic_0283139012_section185145125515"></a>

The overall deployment solutions can be classified into two types: standalone and primary/standby.

-   Standalone deployment

    The standalone deployment does not ensure reliability or availability. There is only one data copy. Once data is damaged or lost, only physical backup can be used to restore data. Therefore, this deployment mode applies to scenarios such as experiencing databases and commissioning syntax functions in the test environment. You are not advised to use this mode on the commercial live network.

    **Figure  1**  Standalone deployment<a name="en-us_topic_0283139012_en-us_topic_0243295241_en-us_topic_0243253012_fig1128133574111"></a>  
    

    ![](figures/en-us_image_0283139013.png)

-   Primary/standby deployment

    The primary/standby mode is equivalent to two data copies, one for the primary node and the other for the standby node. The standby node receives logs and plays back the logs.

    **Figure  2**  Primary/standby deployment<a name="en-us_topic_0283139012_en-us_topic_0243295242_en-us_topic_0243253013_fig1843505845112"></a>  
    ![](figures/primary-standby-deployment.png "primary-standby-deployment")


