# Resource Pooling

## OCK SCRLock

### Introduction

This chapter describes how to install and use the SCRLock feature of the openGauss database. When resource pooling is enabled, SCRLock can be used to provide the distributed lock capability, improving distributed lock performance.

### Preparations

#### Obtaining the Installation Package

Obtain the UWAL installation package from the openGauss community.

#### Environment Requirements

**Table  1**  Environment requirements

<a name="table4957735203620"></a>
<table><thead align="left"><tr id="row129571235133614"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p16314156113820"><a name="p16314156113820"></a><a name="p16314156113820"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="36.86368636863686%" id="mcps1.2.4.1.2"><p id="p3314269388"><a name="p3314269388"></a><a name="p3314269388"></a>Configuration</p>
</th>
<th class="cellrowborder" valign="top" width="29.8029802980298%" id="mcps1.2.4.1.3"><p id="p1831412633812"><a name="p1831412633812"></a><a name="p1831412633812"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row095713514369"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p143143612389"><a name="p143143612389"></a><a name="p143143612389"></a>Network adapter</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><p id="p2314662389"><a name="p2314662389"></a><a name="p2314662389"></a>The model is subject to the actual environment, for example, Mellanox CX4/CX5 NICs.</p>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="p43144633810"><a name="p43144633810"></a><a name="p43144633810"></a>It must support RDMA and Ethernet, and the RDMA protocol must be enabled. For details, refer to the <em id="i647912313544"><a name="i647912313544"></a><a name="i647912313544"></a>RDMA Network Guide</em>.</p>
</td>
</tr>
<tr id="row19957153511363"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p58101109381"><a name="p58101109381"></a><a name="p58101109381"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><a name="ul1381017104389"></a><a name="ul1381017104389"></a><ul id="ul1381017104389"><li>Arm<a name="ul10810131033818"></a><a name="ul10810131033818"></a><ul id="ul10810131033818"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>openEuler 20.03 LTS SP1</li><li>openEuler 20.03 LTS SP3</li></ul>
</li></ul>
<a name="ul1811151093816"></a><a name="ul1811151093816"></a><ul id="ul1811151093816"><li>x86<a name="ul48111610133812"></a><a name="ul48111610133812"></a><ul id="ul48111610133812"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>openEuler 20.03 LTS SP1</li><li>openEuler 20.03 LTS SP3</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="p8811910113812"><a name="p8811910113812"></a><a name="p8811910113812"></a>For the same SP version, if the kernel minor versions are inconsistent or an incompatibility error is reported during kernel component installation, you need to modify the OS <strong id="b201821433204314"><a name="b201821433204314"></a><a name="b201821433204314"></a>weak-modules</strong> script. For details, refer to the <em id="i242714361010"><a name="i242714361010"></a><a name="i242714361010"></a>Modification of the weak-modules Script for OS Compatibility</em>.</p>
</td>
</tr>
<tr id="row129584352361"><td class="cellrowborder" rowspan="2" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p177171738193816"><a name="p177171738193816"></a><a name="p177171738193816"></a>Software</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><p id="p1545313308386"><a name="p1545313308386"></a><a name="p1545313308386"></a>MLNX_OFED_LINUX</p>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="p1636162317388"><a name="p1636162317388"></a><a name="p1636162317388"></a>To enable the RDMA protocol, install the RDMA NIC driver. For details about the mapping between OS and OFED versions, see <a href="#table14845200152117">Table 2</a>.</p>
</td>
</tr>
<tr id="row1595893515362"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><a name="ul3453430153812"></a><a name="ul3453430153812"></a><ul id="ul3453430153812"><li>OCK_scrlock_openEuler-20.03-LTS-SP1-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP1-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP3-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP3-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-22.03-LTS-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-22.03-LTS-x86_64.tar.gz</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p836152316381"><a name="p836152316381"></a><a name="p836152316381"></a>SCRLock installation package. In the package names, <strong id="b490516438403"><a name="b490516438403"></a><a name="b490516438403"></a>openEuler-22.03-LTS-SP1</strong>/<strong id="b17943165194013"><a name="b17943165194013"></a><a name="b17943165194013"></a>openEuler-22.03-LTS</strong> indicates the OS, and <strong id="b1629410014118"><a name="b1629410014118"></a><a name="b1629410014118"></a>aarch64</strong>/<strong id="b163011174417"><a name="b163011174417"></a><a name="b163011174417"></a>x86_64</strong> indicates the server architecture. Select an SCRLock installation package as required.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Mapping between OS and OFED versions

<a name="table14845200152117"></a>
<table><thead align="left"><tr id="row3845140142111"><th class="cellrowborder" rowspan="2" valign="top" id="mcps1.2.4.1.1"><p id="p884512017214"><a name="p884512017214"></a><a name="p884512017214"></a>OS Version</p>
</th>
<th class="cellrowborder" colspan="2" valign="top" id="mcps1.2.4.1.2"><p id="p88457082119"><a name="p88457082119"></a><a name="p88457082119"></a>OFED Version</p>
</th>
</tr>
<tr id="row1925415052312"><th class="cellrowborder" valign="top" id="mcps1.2.4.2.1"><p id="p82540017236"><a name="p82540017236"></a><a name="p82540017236"></a>x86</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.4.2.2"><p id="p17254170132313"><a name="p17254170132313"></a><a name="p17254170132313"></a>Arm</p>
</th>
</tr>
</thead>
<tbody><tr id="row58452010212"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="p17879182642219"><a name="p17879182642219"></a><a name="p17879182642219"></a>openEuler 20.03 LTS</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="p18879826122218"><a name="p18879826122218"></a><a name="p18879826122218"></a>MLNX_OFED_LINUX-5.4-3.6.8.1-openeuler20.03-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p15879826152218"><a name="p15879826152218"></a><a name="p15879826152218"></a>MLNX_OFED_LINUX-5.4-3.1.0.0-openeuler20.03-aarch64.tgz</p>
</td>
</tr>
<tr id="row11845170102119"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="p1787932610227"><a name="p1787932610227"></a><a name="p1787932610227"></a>openEuler 20.03 LTS SP1</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="p18794268220"><a name="p18794268220"></a><a name="p18794268220"></a>MLNX_OFED_LINUX-5.4-3.6.8.1-openeuler20.03sp1-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p8879102612211"><a name="p8879102612211"></a><a name="p8879102612211"></a>MLNX_OFED_LINUX-5.4-3.1.0.0-openeuler20.03sp1-aarch64.tgz</p>
</td>
</tr>
<tr id="row19846307217"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="p687962642213"><a name="p687962642213"></a><a name="p687962642213"></a>openEuler 20.03 LTS SP3</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="p19879102662211"><a name="p19879102662211"></a><a name="p19879102662211"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler20.03sp3-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p19879192622215"><a name="p19879192622215"></a><a name="p19879192622215"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler20.03sp3-aarch64.tgz</p>
</td>
</tr>
<tr id="row1055117240224"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="p1688042672213"><a name="p1688042672213"></a><a name="p1688042672213"></a>openEuler 22.03 LTS</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="p1488032632210"><a name="p1488032632210"></a><a name="p1488032632210"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler22.03-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p12880112619227"><a name="p12880112619227"></a><a name="p12880112619227"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler22.03-aarch64.tgz</p>
</td>
</tr>
</tbody>
</table>

### Installation and Uninstallation

#### One-Click Deployment of the SCRLock Feature

SCRLock provides a simple deployment script. You can enter the installation path, installation user, and node information to perform one-click deployment.

- Prerequisites

    -   RDMA is enabled. This function depends on the CX4/CX5 NIC.
    -   openGauss has been deployed.
    -   Obtain the SCRLock installation package corresponding to the OS and CPU architecture in use, for example,  **OCK\_scrlock\_openEuler-20.03-LTS-SP1-aarch64.tar.gz**.
    -   The  **$\{GAUSSHOME\}/lib**  directory exists on the active and standby nodes.
    -   Users with the same user name and password are created for servers where SCRLock needs to be deployed. The users must have the permission to run the  **rmmod**,  **rpm**,  **depmod**, and  **modprobe**  commands.

- Procedure

    1.  Log in to the node as  _<SCRLock-install-user\>_  and upload the installation package. Run the following command in the directory where the installation package is stored to decompress the installation package:

        ```
        tar -xzvf OCK_scrlock_openEuler-20.03-LTS-SP1-aarch64.tar.gz
        ```

        The following files are extracted.

        <a name="table8507191432716"></a>
        <table><thead align="left"><tr id="row15071414112712"><th class="cellrowborder" valign="top" width="56.95%" id="mcps1.1.3.1.1"><p id="p9507814172716"><a name="p9507814172716"></a><a name="p9507814172716"></a>File</p>
        </th>
        <th class="cellrowborder" valign="top" width="43.05%" id="mcps1.1.3.1.2"><p id="p10507614182712"><a name="p10507614182712"></a><a name="p10507614182712"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row15507714172712"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p8507111419272"><a name="p8507111419272"></a><a name="p8507111419272"></a>OCK_scrlock_openEuler_aarch64.tar.gz</p>
        </td>
        <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p15071142279"><a name="p15071142279"></a><a name="p15071142279"></a>Source package</p>
        </td>
        </tr>
        <tr id="row1650719141279"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p1550781419273"><a name="p1550781419273"></a><a name="p1550781419273"></a>OCK_scrlock_openEuler_aarch64.tar.gz.txt</p>
        </td>
        <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p25077149277"><a name="p25077149277"></a><a name="p25077149277"></a>Signature file</p>
        </td>
        </tr>
        <tr id="row12507914102713"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p95072014122711"><a name="p95072014122711"></a><a name="p95072014122711"></a>OCK_scrlock_openEuler_aarch64.tar.gz.cms</p>
        </td>
        <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p1050791416279"><a name="p1050791416279"></a><a name="p1050791416279"></a>Description file</p>
        </td>
        </tr>
        </tbody>
        </table>

    2.  Decompress the source package.

        ```
        tar -xzvf OCK_scrlock_openEuler_aarch64.tar.gz
        ```

        The following files are extracted.

        <a name="table1281112820"></a>
        <table><thead align="left"><tr id="row1081912720"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10820127215"><a name="p10820127215"></a><a name="p10820127215"></a>File</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p782121429"><a name="p782121429"></a><a name="p782121429"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row14817121023"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p158312922"><a name="p158312922"></a><a name="p158312922"></a>scrlock_lib</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14811129214"><a name="p14811129214"></a><a name="p14811129214"></a>SO file</p>
        </td>
        </tr>
        <tr id="row9810121227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p98131217212"><a name="p98131217212"></a><a name="p98131217212"></a>scripts</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p582012928"><a name="p582012928"></a><a name="p582012928"></a>Installation script</p>
        </td>
        </tr>
        <tr id="row981312622"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168171219214"><a name="p168171219214"></a><a name="p168171219214"></a>umdk_rpm</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1688121724"><a name="p1688121724"></a><a name="p1688121724"></a>RPM dependency package</p>
        </td>
        </tr>
        <tr id="row10332401714"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p173419401674"><a name="p173419401674"></a><a name="p173419401674"></a>bin</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1341140878"><a name="p1341140878"></a><a name="p1341140878"></a>Signature verification file</p>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Use the verification binary file in the  **bin**  directory to verify the software package signature.

        ```
        ./bin/verification OCK_scrlock_openEuler_aarch64.tar.gz OCK_scrlock_openEuler_aarch64.tar.gz.cms OCK_scrlock_openEuler_aarch64.tar.gz.txt
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The verification binary file requires three parameters in sequence: source package, signature file, and description file.

        -   If the verification is successful, the console displays the following information:

            ```
            Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
            Verify the source file passed.
            Verify the sha file passed.
            ```

        -   If the verification fails, the console displays the following information:

            ```
            Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
            ...
            Verify the source file failed.
            ```

            Or

            ```
            Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
            ...
            Verify the sha file failed.
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >If the verification fails, the installation package has been tampered with. You are advised to obtain the installation package again and verify it again.

    4.  After the installation package is verified, go to the  **scripts**  directory.

        ```
        cd scripts
        ```

    5.  Run the deployment script and enter the password of  _<SCRLock-install-user\>_  as prompted.

        ```
        sh scrlock_install.sh -H '192.168.4.164 192.168.4.165 192.168.4.166' -U omm -G dbgrp -D /home/omm/lib
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **-H**: IP addresses in the cluster. Example: '_192.168.4.164 192.168.4.165 192.168.4.166_'
        >-   **-U**: user name of the database administrator. Example:  **omm**
        >-   **-G**: user group of the database administrator. Example:  **dbgrp**
        >-   **-D**: path to the  **$\{GAUSSHOME\}/lib**  library. Example:  **/home/omm/lib**
        >-   **-h**: help information.
        >Deployment through scripts requires a high-privilege user. After the operations are complete, disable the high-privilege user's permission to remotely log in to the server using SSH to improve system security.

    6.  <a name="li9627181442313"></a>Switch to the database administrator.

        ```
        su - omm
        ```

    7.  \(Optional\) Kill the om\_monitor process.

        ```
        gs_om -t killmonitor
        ```

    8.  <a name="li153702610143"></a>Load environment variables.

        ```
        source ~/.bashrc
        ```

        >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
        >Perform steps  [6](#li9627181442313)  to  [8](#li153702610143)  on the standby node.

#### Enabling the SCRLock Feature

To enable the SCRLock feature, modify the configuration file and restart the database for the modification to take effect.

- Prerequisites

    -   The openGauss version that contains the SCRLock feature has been installed on the active and standby nodes.
    -   The SCRLock feature has been deployed in one-click mode.

- Procedure

    1.  Log in to the management node as the database administrator.
    2.  Modify the  **postgresql.conf**  file of the database.
        1.  Open the  **postgresql.conf**  file.

            ```
            vim postgresql.conf
            ```

        2.  Press  **i**  to enter the insert mode, find the following parameters, and modify them as required.  [Table 1](#table2032119112819)  describes the parameters.

            ```
            ss_enable_scrlock = off
            ss_enable_srclock_sleep_mode = off
            ss_scrlock_server_port = 8000
            ss_scrlock_worker_count = 2
            ss_scrlock_worker_bind_core = ''
            ss_scrlock_server_bind_core = ''
            ```

            **Table  1**  SCRLock configuration parameters

            <a name="table2032119112819"></a>
            <table><thead align="left"><tr id="row153213142814"><th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.1"><p id="p1032118122817"><a name="p1032118122817"></a><a name="p1032118122817"></a>Parameter</p>
            </th>
            <th class="cellrowborder" valign="top" width="11.32%" id="mcps1.2.6.1.2"><p id="p12321612289"><a name="p12321612289"></a><a name="p12321612289"></a>Type</p>
            </th>
            <th class="cellrowborder" valign="top" width="27.68%" id="mcps1.2.6.1.3"><p id="p1792134743014"><a name="p1792134743014"></a><a name="p1792134743014"></a>Description</p>
            </th>
            <th class="cellrowborder" valign="top" width="31.869999999999997%" id="mcps1.2.6.1.4"><p id="p03212162814"><a name="p03212162814"></a><a name="p03212162814"></a>Value Range</p>
            </th>
            <th class="cellrowborder" valign="top" width="9.13%" id="mcps1.2.6.1.5"><p id="p133211811288"><a name="p133211811288"></a><a name="p133211811288"></a>Default Value</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row113217112281"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p16921116152919"><a name="p16921116152919"></a><a name="p16921116152919"></a>ss_enable_scrlock</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p33216114289"><a name="p33216114289"></a><a name="p33216114289"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p10321616286"><a name="p10321616286"></a><a name="p10321616286"></a>Specifies whether to enable SCRLock.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul259918256327"></a><a name="ul259918256327"></a><ul id="ul259918256327"><li><strong id="b43081815165312"><a name="b43081815165312"></a><a name="b43081815165312"></a>on</strong>: enable.</li><li><strong id="b3105142211534"><a name="b3105142211534"></a><a name="b3105142211534"></a>off</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p173219132818"><a name="p173219132818"></a><a name="p173219132818"></a>off</p>
            </td>
            </tr>
            <tr id="row1032171132813"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p962235515324"><a name="p962235515324"></a><a name="p962235515324"></a>ss_enable_scrlock_sleep_mode</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p173226192810"><a name="p173226192810"></a><a name="p173226192810"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p732212192811"><a name="p732212192811"></a><a name="p732212192811"></a>Specifies whether to enable the SCRLock sleep mode.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul035519605310"></a><a name="ul035519605310"></a><ul id="ul035519605310"><li><strong id="b8527124935317"><a name="b8527124935317"></a><a name="b8527124935317"></a>on</strong>: enable.</li><li><strong id="b12367135911538"><a name="b12367135911538"></a><a name="b12367135911538"></a>off</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p432251152820"><a name="p432251152820"></a><a name="p432251152820"></a>on</p>
            </td>
            </tr>
            <tr id="row632219111286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p13393103633316"><a name="p13393103633316"></a><a name="p13393103633316"></a>ss_scrlock_server_port</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p53227110289"><a name="p53227110289"></a><a name="p53227110289"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p13221810289"><a name="p13221810289"></a><a name="p13221810289"></a>Specifies the listening port number of the SCRLock server.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p1920015242136"><a name="p1920015242136"></a><a name="p1920015242136"></a>1024–65535</p>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p18913214346"><a name="p18913214346"></a><a name="p18913214346"></a>8000</p>
            </td>
            </tr>
            <tr id="row832210117286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p10497618113418"><a name="p10497618113418"></a><a name="p10497618113418"></a>ss_scrlock_worker_count</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p13224115281"><a name="p13224115281"></a><a name="p13224115281"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p332217114288"><a name="p332217114288"></a><a name="p332217114288"></a>Specifies the number of workers on the SCRLock client.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p36595403134"><a name="p36595403134"></a><a name="p36595403134"></a>2–16</p>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p163223112288"><a name="p163223112288"></a><a name="p163223112288"></a>2</p>
            </td>
            </tr>
            <tr id="row1532261192810"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p8930195020342"><a name="p8930195020342"></a><a name="p8930195020342"></a>ss_scrlock_worker_bind_core</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p1032219172810"><a name="p1032219172810"></a><a name="p1032219172810"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p1728795315350"><a name="p1728795315350"></a><a name="p1728795315350"></a>Specifies the start and end CPU cores bound to SCRLock workers.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p163221915285"><a name="p163221915285"></a><a name="p163221915285"></a>Format: "Start_CPU_core_index End_CPU_core_index". Separate the two indexes with a space. Example: <strong id="b14503203115170"><a name="b14503203115170"></a><a name="b14503203115170"></a>10 15</strong></p>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p1632214122810"><a name="p1632214122810"></a><a name="p1632214122810"></a>""</p>
            </td>
            </tr>
            <tr id="row632218172820"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p4128839123517"><a name="p4128839123517"></a><a name="p4128839123517"></a>ss_scrlock_server_bind_core</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p73229115286"><a name="p73229115286"></a><a name="p73229115286"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p2032210192820"><a name="p2032210192820"></a><a name="p2032210192820"></a>Specifies the start and end CPU cores bound to the SCRLock server.</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p193221162818"><a name="p193221162818"></a><a name="p193221162818"></a>Format: "Start_CPU_core_index End_CPU_core_index". Separate the two indexes with a space. Example: <strong id="b12881145161714"><a name="b12881145161714"></a><a name="b12881145161714"></a>10 15</strong></p>
            </td>
            <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p83223110285"><a name="p83223110285"></a><a name="p83223110285"></a>""</p>
            </td>
            </tr>
            </tbody>
            </table>

        3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

    3.  Restart the database to enable the SCRLock feature.
        1.  Stop openGauss.

            ```
            cm_ctl stop
            ```

        2.  Start openGauss.

            ```
            cm_ctl start
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >If the startup fails, rectify the fault based on the  **postgresql-**_YYYY-MM-DD\_HHMMSS_**.log**  file in the openGauss log directory.

    4.  Verify that the SCRLock feature is successfully enabled.

        ```
        gsql -d postgres -p 16600 -c "show ss_enable_scrlock"
        ```

        If the following information is displayed, the feature is enabled successfully:

        ```
        ss_enable_scrlock
        -------------------
        on
        (1 row)
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **-p 16600**:  **16600**  indicates the database port number. Change it based on the actual environment.
        >-   To view SCRLock log files, run the following command to view the last 20 lines:
        >    ```
        >    tail -fn20 ${GAUSSLOG}/pg_log/scrlock*.log
        >    ```


#### Disabling the SCRLock Feature

To disable the SCRLock feature, modify the configuration file and restart the database for the configuration to take effect.

- Procedure

    1.  Modify the  **postgresql.conf**  file in the root directory of the database.
        1.  Open the  **postgresql.conf**  file.

            ```
            vim postgresql.conf
            ```

        2.  Press  **i**  to enter the insert mode. Change the value of  **ss\_enable\_scrlock**  to  **off**  to disable the SCRLock feature.

            ```
            ss_enable_scrlock = off
            ```

        3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

    2.  Stop openGauss.

        ```
        cm_ctl stop
        ```

    3.  \(Optional\) To uninstall the SCRLock feature, perform this step. Delete the SCRLock dynamic library file and clear the environment variable.

        ```
        rm -f /home/omm/lib/libscrlock.so
        unset OCK_SCRLOCK_LIB_PATH
        ```

        In the preceding commands,  _/home/omm/lib/_  indicates the absolute path of the directory where  **libscrlock.so**  is located.

    4.  Start openGauss.

        ```
        cm_ctl start
        ```

