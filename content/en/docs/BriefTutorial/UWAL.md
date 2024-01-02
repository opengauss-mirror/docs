# UWAL

## Introduction

This chapter describes how to install and use the Unified Write-Ahead Log \(UWAL\) feature of the openGauss database. This feature combines the database and a Huawei-developed UWAL component to improve the performance of active/standby transaction submission as well as streaming replication and transmission, accelerating the Write-Ahead Log \(WAL\) processing efficiency.
## Preparations

### Obtaining the Installation Package
Obtain the UWAL installation package from the openGauss community.

### Environment Requirements

<a name="table9128736162712"></a>
<table><thead align="left"><tr id="row71292036182713"><th class="cellrowborder" valign="top" width="15.010000000000002%" id="mcps1.1.4.1.1"><p id="p1376431594919"><a name="p1376431594919"></a><a name="p1376431594919"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="47.63%" id="mcps1.1.4.1.2"><p id="p1012923612711"><a name="p1012923612711"></a><a name="p1012923612711"></a>Configuration</p>
</th>
<th class="cellrowborder" valign="top" width="37.36%" id="mcps1.1.4.1.3"><p id="p6129133622718"><a name="p6129133622718"></a><a name="p6129133622718"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row667355411393"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p9764141514918"><a name="p9764141514918"></a><a name="p9764141514918"></a>Network adapter</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p1543012207413"><a name="p1543012207413"></a><a name="p1543012207413"></a>The model is subject to the actual environment, for example, Mellanox CX4/CX5 NICs.</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p66743541395"><a name="p66743541395"></a><a name="p66743541395"></a>It must support RDMA and Ethernet, and the RDMA protocol must be enabled. For details, refer to the <em id="i625283015611"><a name="i625283015611"></a><a name="i625283015611"></a>RDMA Network Guide</em>.</p>
</td>
</tr>
<tr id="row9245245530"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p152468415531"><a name="p152468415531"></a><a name="p152468415531"></a>Switch</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p14246134145318"><a name="p14246134145318"></a><a name="p14246134145318"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul108220398209"></a><a name="ul108220398209"></a><ul id="ul108220398209"><li>To enable the RDMA protocol, configure a lossless network.</li><li>You do not need to configure a lossless network for the TCP protocol.</li></ul>
</td>
</tr>
<tr id="row128756223532"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p14875172275315"><a name="p14875172275315"></a><a name="p14875172275315"></a>Server</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p4875172214532"><a name="p4875172214532"></a><a name="p4875172214532"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul17986113313204"></a><a name="ul17986113313204"></a><ul id="ul17986113313204"><li>To enable the RDMA protocol, configure a lossless network.</li><li>You do not need to configure a lossless network for the TCP protocol.</li></ul>
</td>
</tr>
<tr id="row1275520213315"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p1358995611515"><a name="p1358995611515"></a><a name="p1358995611515"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><a name="ul712016229541"></a><a name="ul712016229541"></a><ul id="ul712016229541"><li>Arm<a name="ul39267573548"></a><a name="ul39267573548"></a><ul id="ul39267573548"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li></ul>
</li></ul>
<a name="ul2076474310540"></a><a name="ul2076474310540"></a><ul id="ul2076474310540"><li>x86<a name="ul861716917558"></a><a name="ul861716917558"></a><ul id="ul861716917558"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>CentOS 7.6 x86</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p0498201244918"><a name="p0498201244918"></a><a name="p0498201244918"></a>-</p>
</td>
</tr>
<tr id="row14188461493"><td class="cellrowborder" rowspan="3" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p7764131510492"><a name="p7764131510492"></a><a name="p7764131510492"></a>Software</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p18248418496"><a name="p18248418496"></a><a name="p18248418496"></a>MLNX_OFED_LINUX-5.8-1.1.2.1</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p62424113494"><a name="p62424113494"></a><a name="p62424113494"></a>To enable the RDMA protocol, install the RDMA NIC driver.</p>
</td>
</tr>
<tr id="row4504109124916"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul1724961323"></a><a name="ul1724961323"></a><ul id="ul1724961323"><li>GCC 7.3</li><li>GCC 10.3</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p165046974919"><a name="p165046974919"></a><a name="p165046974919"></a>-</p>
</td>
</tr>
<tr id="row109111629908"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul17257184001813"></a><a name="ul17257184001813"></a><ul id="ul17257184001813"><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc7.tar.gz</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p109125294014"><a name="p109125294014"></a><a name="p109125294014"></a>UWAL installation package. In the package names, <strong id="b11128053133418"><a name="b11128053133418"></a><a name="b11128053133418"></a>openeuler_22.03</strong>/<strong id="b367317550344"><a name="b367317550344"></a><a name="b367317550344"></a>centos-7.6</strong> indicates the OS, <strong id="b1675782619352"><a name="b1675782619352"></a><a name="b1675782619352"></a>aarch64</strong>/<strong id="b1993252911351"><a name="b1993252911351"></a><a name="b1993252911351"></a>x86_64</strong> indicates the server architecture, and <strong id="b8731163933514"><a name="b8731163933514"></a><a name="b8731163933514"></a>gcc10</strong>/<strong id="b125024419358"><a name="b125024419358"></a><a name="b125024419358"></a>gcc7</strong> indicates the GCC version on which the package depends. Select a UWAL installation package as required.</p>
</td>
</tr>
</tbody>
</table>

## Installation and Uninstallation

### One-Click Deployment of the UWAL Feature
UWAL allows one-click deployment through a simple deployment script.

- Prerequisites
    -   openGauss has been deployed.
    -   Obtain the UWAL installation package corresponding to the OS and CPU architecture in use, for example,  **OCK\_UWAL\_23.0.0\_openeuler\_22.03-aarch64\_gcc10.tar.gz**.
    -   The following directories exist on both the active and standby nodes:
        -   **$\{GAUSSHOME\}/lib**
        -   UWAL file storage path \(value of  **uwal\_devices\_path**\)
        -   UWAL log file storage path \(value of  **uwal\_log\_path**\)

- Procedure

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Unless otherwise specified, perform the following operations only on the active node.

    1.  Upload the installation package to the node and run the following command in the directory where the installation package is stored to grant permissions to the openGauss database user:

        ```
        chown omm:dbgrp OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **omm**: database administrator
        >-   **dbgrp**: user group of the database administrator

    2.  Switch to the openGauss database administrator and decompress the installation package.

        ```
        su - omm
        tar -xzvf OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz
        ```

        The following files are extracted.

        <a name="table8507191432716"></a>
        <table><thead align="left"><tr id="row15071414112712"><th class="cellrowborder" valign="top" width="61.18%" id="mcps1.1.3.1.1"><p id="p9507814172716"><a name="p9507814172716"></a><a name="p9507814172716"></a>File</p>
        </th>
        <th class="cellrowborder" valign="top" width="38.82%" id="mcps1.1.3.1.2"><p id="p10507614182712"><a name="p10507614182712"></a><a name="p10507614182712"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row15507714172712"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p8507111419272"><a name="p8507111419272"></a><a name="p8507111419272"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p15071142279"><a name="p15071142279"></a><a name="p15071142279"></a>Source package</p>
        </td>
        </tr>
        <tr id="row1650719141279"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p1550781419273"><a name="p1550781419273"></a><a name="p1550781419273"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.txt</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p25077149277"><a name="p25077149277"></a><a name="p25077149277"></a>Signature file</p>
        </td>
        </tr>
        <tr id="row12507914102713"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p95072014122711"><a name="p95072014122711"></a><a name="p95072014122711"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.cms</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p1050791416279"><a name="p1050791416279"></a><a name="p1050791416279"></a>Description file</p>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Decompress the source package.

        ```
        tar -xzvf OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz
        ```

        The following files are extracted.

        <a name="table1281112820"></a>
        <table><thead align="left"><tr id="row1081912720"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10820127215"><a name="p10820127215"></a><a name="p10820127215"></a>File</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p782121429"><a name="p782121429"></a><a name="p782121429"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row14817121023"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p158312922"><a name="p158312922"></a><a name="p158312922"></a>lib</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14811129214"><a name="p14811129214"></a><a name="p14811129214"></a>SO file</p>
        </td>
        </tr>
        <tr id="row9810121227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p98131217212"><a name="p98131217212"></a><a name="p98131217212"></a>scripts</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p582012928"><a name="p582012928"></a><a name="p582012928"></a>Installation script</p>
        </td>
        </tr>
        <tr id="row981312622"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168171219214"><a name="p168171219214"></a><a name="p168171219214"></a>include</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1688121724"><a name="p1688121724"></a><a name="p1688121724"></a>UWAL header file</p>
        </td>
        </tr>
        <tr id="row10332401714"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p173419401674"><a name="p173419401674"></a><a name="p173419401674"></a>bin</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1341140878"><a name="p1341140878"></a><a name="p1341140878"></a>Signature verification file</p>
        </td>
        </tr>
        </tbody>
        </table>

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >To decompress the source package again, delete the preceding files before performing decompression operations.

    4.  Use the verification binary file in the  **bin**  directory to verify the software package signature.

        ```
        ./bin/verification OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz.cms OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz.txt
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The verification binary file requires three parameters in sequence: source package, signature file, and description file.

        -   If the verification is successful, the console displays the following information:

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
            Verify the source file passed.
            Verify the sha file passed.
            ```

        -   If the verification fails, the console displays the following information:

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
            ...
            Verify the source file failed.
            ```

            Or

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
            ...
            Verify the sha file failed.
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >If the verification fails, the installation package has been tampered with. You are advised to obtain the installation package again and verify it again.

    5.  After the installation package is verified, go to the  **scripts**  directory.

        ```
        cd scripts
        ```

    6.  Run the script to complete the UWAL deployment.

        ```
        sh ock_uwal_install.sh -H '192.168.4.164 192.168.4.165 192.168.4.166' -U omm -D /home/omm/lib
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **-H**: IP addresses in the cluster. Example: '_192.168.4.164 192.168.4.165 192.168.4.166_'
        >-   **-U**: user name of the database administrator. Example:  **omm**
        >-   **-D**: path to the  **$\{GAUSSHOME\}/lib**  library. Example:  **/home/omm/lib**
        >-   **-h**: help information.

    7.  \(Optional\) Kill the om\_monitor process.

        ```
        gs_om -t killmonitor
        ```

    8.  Run the following command to load environment variables:

        ```
        source ~/.bashrc
        ```

        >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
        >This step is also required on the standby node.

    9.  \(Optional\) The UWAL component depends on the HCOM component for RPC communication. Configure the following environment variables as required.

        ```
        export HCOM_FILE_PATH_PREFIX="/home/uds/socket/file"
        export HCOM_OPENSSL_PATH="/home/openssl"
        export HCOM_TRACE_LEVEL=0
        export HCOM_QP_TRAFFIC_CLASS=106
        export HCOM_SHM_EXCHANGE_FD_QUEUE_SIZE=10
        export HCOM_CONNECTION_RETRY_TIMES=5
        export HCOM_CONNECTION_RETRY_INTERVAL_SEC=2
        ```

        The following table describes the parameters.

        <a name="table14176112715159"></a>
        <table><thead align="left"><tr id="row317610276154"><th class="cellrowborder" valign="top" width="30.409999999999997%" id="mcps1.1.6.1.1"><p id="p656518814920"><a name="p656518814920"></a><a name="p656518814920"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="7.960000000000001%" id="mcps1.1.6.1.2"><p id="p1588918155523"><a name="p1588918155523"></a><a name="p1588918155523"></a>Type</p>
        </th>
        <th class="cellrowborder" valign="top" width="44.61%" id="mcps1.1.6.1.3"><p id="p156538994"><a name="p156538994"></a><a name="p156538994"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="9.98%" id="mcps1.1.6.1.4"><p id="p756568792"><a name="p756568792"></a><a name="p756568792"></a>Value Range</p>
        </th>
        <th class="cellrowborder" valign="top" width="7.04%" id="mcps1.1.6.1.5"><p id="p056519819914"><a name="p056519819914"></a><a name="p056519819914"></a>Default Value</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row1817622791516"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p15176192711158"><a name="p15176192711158"></a><a name="p15176192711158"></a>HCOM_FILE_PATH_PREFIX</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p8176102721516"><a name="p8176102721516"></a><a name="p8176102721516"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p14176227161518"><a name="p14176227161518"></a><a name="p14176227161518"></a>Prefix of the path to files generated by HCOM. The prefix ensures that the files are generated and deleted only in the current path (the path must exist).</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p517672751510"><a name="p517672751510"></a><a name="p517672751510"></a>-</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p17176182719156"><a name="p17176182719156"></a><a name="p17176182719156"></a>-</p>
        </td>
        </tr>
        <tr id="row18176172715154"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p41761427161513"><a name="p41761427161513"></a><a name="p41761427161513"></a>HCOM_OPENSSL_PATH</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p1617602721512"><a name="p1617602721512"></a><a name="p1617602721512"></a>Character string</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1417612275152"><a name="p1417612275152"></a><a name="p1417612275152"></a>Path to the OpenSSL library on which HCOM depends. This path is the directory of <strong id="b109531428165510"><a name="b109531428165510"></a><a name="b109531428165510"></a>libssl.so</strong> and <strong id="b1694253515554"><a name="b1694253515554"></a><a name="b1694253515554"></a>libcrypt.so</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p7176627181513"><a name="p7176627181513"></a><a name="p7176627181513"></a>-</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p917622711155"><a name="p917622711155"></a><a name="p917622711155"></a>-</p>
        </td>
        </tr>
        <tr id="row5176192791514"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p117652713154"><a name="p117652713154"></a><a name="p117652713154"></a>HCOM_TRACE_LEVEL</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p11176927111516"><a name="p11176927111516"></a><a name="p11176927111516"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p10463194671715"><a name="p10463194671715"></a><a name="p10463194671715"></a>HCOM trace level. The options are as follows:</p>
        <a name="ul9976655185"></a><a name="ul9976655185"></a><ul id="ul9976655185"><li><strong id="b1889534115614"><a name="b1889534115614"></a><a name="b1889534115614"></a>0</strong>: Disables tracing.</li><li><strong id="b2265021115619"><a name="b2265021115619"></a><a name="b2265021115619"></a>1</strong>: Enables high-priority tracing.</li><li><strong id="b198364256567"><a name="b198364256567"></a><a name="b198364256567"></a>2</strong>: Enables medium-priority tracing.</li><li><strong id="b5883114210239"><a name="b5883114210239"></a><a name="b5883114210239"></a>3</strong>: Enables low-priority tracing.</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p71761527101513"><a name="p71761527101513"></a><a name="p71761527101513"></a>0–3</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p81772027151510"><a name="p81772027151510"></a><a name="p81772027151510"></a>0</p>
        </td>
        </tr>
        <tr id="row4177202751517"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p18177192741511"><a name="p18177192741511"></a><a name="p18177192741511"></a>HCOM_QP_TRAFFIC_CLASS</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p161779272152"><a name="p161779272152"></a><a name="p161779272152"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p18177102710158"><a name="p18177102710158"></a><a name="p18177102710158"></a>Set the priority of the <strong id="b18698218183212"><a name="b18698218183212"></a><a name="b18698218183212"></a>traffic_class</strong> field of the RDMA protocol in HCOM.</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p117713275156"><a name="p117713275156"></a><a name="p117713275156"></a>0–255</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p117792716154"><a name="p117792716154"></a><a name="p117792716154"></a>106</p>
        </td>
        </tr>
        <tr id="row103125325113"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p14312163175118"><a name="p14312163175118"></a><a name="p14312163175118"></a>HCOM_SHM_EXCHANGE_FD_QUEUE_SIZE</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p173941336920"><a name="p173941336920"></a><a name="p173941336920"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p151801513576"><a name="p151801513576"></a><a name="p151801513576"></a>Size of the FDS internal queue sent by HCOM.</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p19312203155119"><a name="p19312203155119"></a><a name="p19312203155119"></a>10–256</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p1331218314515"><a name="p1331218314515"></a><a name="p1331218314515"></a>10</p>
        </td>
        </tr>
        <tr id="row1174613338534"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p13746103345310"><a name="p13746103345310"></a><a name="p13746103345310"></a>HCOM_CONNECTION_RETRY_TIMES</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p6747133310537"><a name="p6747133310537"></a><a name="p6747133310537"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1574703385310"><a name="p1574703385310"></a><a name="p1574703385310"></a>Number of HCOM connection setup retries.</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p7747113311530"><a name="p7747113311530"></a><a name="p7747113311530"></a>0–10</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p8747183311532"><a name="p8747183311532"></a><a name="p8747183311532"></a>5</p>
        </td>
        </tr>
        <tr id="row6700183735315"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p170015375536"><a name="p170015375536"></a><a name="p170015375536"></a>HCOM_CONNECTION_RETRY_INTERVAL_SEC</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p1990564895719"><a name="p1990564895719"></a><a name="p1990564895719"></a>Integer</p>
        </td>
        <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1970033765319"><a name="p1970033765319"></a><a name="p1970033765319"></a>Interval between each HCOM connection setup retry, in seconds.</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p117001376534"><a name="p117001376534"></a><a name="p117001376534"></a>0–60</p>
        </td>
        <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p177006377532"><a name="p177006377532"></a><a name="p177006377532"></a>20</p>
        </td>
        </tr>
        </tbody>
        </table>

### Enabling the UWAL Feature

To enable the UWAL feature, modify the configuration file and restart the database for the modification to take effect.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Once the UWAL feature is enabled, it cannot be disabled.

- Prerequisites
    -   The openGauss version that contains the UWAL feature has been installed on the active and standby nodes.
    -   The UWAL feature has been deployed in one-click mode.

- Procedure

    1.  Log in to the management node as the database administrator.
    2.  Modify the  **postgresql.conf**  file of the database.
        1.  Open the  **postgresql.conf**  file.

            ```
            vim postgresql.conf
            ```

        2.  Press  **i**  to enter the insert mode and add the following parameters to the end of the file. One active node and one standby node are used as an example. Set the parameters based on the actual environment. For details about the parameters, see  [Table 1](#table135651186916).

            ```
            replconninfo1='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.207 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.207 remoteuwalport=9991'
            enable_uwal = on
            uwal_config = '{"uwal_nodeid": 0, "uwal_ip": "10.10.10.201", "uwal_port": 9991, "uwal_protocol": "tcp", "cpu_bind_switch": "true", "cpu_bind_start": 1, "cpu_bind_num": 3}'
            uwal_disk_size = 8589934592
            uwal_devices_path = '/home/Data/uwal/'
            uwal_log_path = '/home/Data/opengauss_master/uwal_log'
            uwal_rpc_compression_switch = true
            uwal_rpc_flowcontrol_switch = true
            uwal_rpc_flowcontrol_value = 128
            uwal_async_append_switch = false
            application_name = 'node201'
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >-   If there are one active node and two standby nodes, add the  **replconninfo2**  parameter to the next line of the  **replconninfo1**  parameter. For example:
            >    ```
            >    replconninfo2='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.208 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.208 remoteuwalport=9991'
            >    ```
            >-   If there are one active node and  _N_  standby nodes, add parameters  **replconninfo2**  to  **replconninfo**_**N**_  in sequence.

            **Table  1**  UWAL configuration parameters

            <a name="table135651186916"></a>
            <table><thead align="left"><tr id="row25651989917"><th class="cellrowborder" valign="top" width="23.126556486302924%" id="mcps1.2.5.1.1"><p id="p656518814920"><a name="p656518814920"></a><a name="p656518814920"></a>Parameter</p>
            </th>
            <th class="cellrowborder" valign="top" width="8.071088974417027%" id="mcps1.2.5.1.2"><p id="p1588918155523"><a name="p1588918155523"></a><a name="p1588918155523"></a>Type</p>
            </th>
            <th class="cellrowborder" valign="top" width="44.60040751641386%" id="mcps1.2.5.1.3"><p id="p156538994"><a name="p156538994"></a><a name="p156538994"></a>Description</p>
            </th>
            <th class="cellrowborder" valign="top" width="24.2019470228662%" id="mcps1.2.5.1.4"><p id="p756568792"><a name="p756568792"></a><a name="p756568792"></a>Value Range</p>
            </th>
            <th class="cellrowborder" valign="top" width="20%" id="mcps1.2.5.1.5"><p id="p756568799"><a name="p756568799"></a><a name="p756568799"></a>Default Value</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1344716210013"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p15447202403"><a name="p15447202403"></a><a name="p15447202403"></a>replconninfo{N}</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p4447122006"><a name="p4447122006"></a><a name="p4447122006"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p12291125152313"><a name="p12291125152313"></a><a name="p12291125152313"></a>Configures the IP address and port number of the remote UWAL node. Add <strong id="b672042117595"><a name="b672042117595"></a><a name="b672042117595"></a>remotenodeid</strong> (<strong id="b3886172635911"><a name="b3886172635911"></a><a name="b3886172635911"></a>uwal_nodeid</strong> of the remote node), <strong id="b12336173695913"><a name="b12336173695913"></a><a name="b12336173695913"></a>remoteuwalhost</strong> (<strong id="b121021840185914"><a name="b121021840185914"></a><a name="b121021840185914"></a>uwal_ip</strong> of the remote node), and <strong id="b172327115014"><a name="b172327115014"></a><a name="b172327115014"></a>remoteuwalport</strong> (<strong id="b2092294606"><a name="b2092294606"></a><a name="b2092294606"></a>uwal_port</strong> of the remote node) to the end of the original parameters. <span class="parmvalue" id="parmvalue10543195803112"><a name="parmvalue10543195803112"></a><a name="parmvalue10543195803112"></a><b>N</b></span> specifies the information about the <em id="i13971812771"><a name="i13971812771"></a><a name="i13971812771"></a>N</em>th node to be listened on and authenticated by the current node.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>Character string. An empty string indicates that no information about the <em id="i13952538174210"><a name="i13952538174210"></a><a name="i13952538174210"></a>N</em>th node is configured.</p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>Empty string</p>
            </td>
            </td>
            </tr>
            <tr id="row14252637115317"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p8252203735311"><a name="p8252203735311"></a><a name="p8252203735311"></a>enable_uwal</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p152521637135313"><a name="p152521637135313"></a><a name="p152521637135313"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p625212379535"><a name="p625212379535"></a><a name="p625212379535"></a>Specifies whether to enable the UWAL feature.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul1730195610532"></a><a name="ul1730195610532"></a><ul id="ul1730195610532"><li><strong id="b1452384910287"><a name="b1452384910287"></a><a name="b1452384910287"></a>on</strong>: enable.</li><li><strong id="b6504818122920"><a name="b6504818122920"></a><a name="b6504818122920"></a>off</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>off</p>
            </td>
            </tr>
            <tr id="row459675018428"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p859675013425"><a name="p859675013425"></a><a name="p859675013425"></a>uwal_config</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p2596195011427"><a name="p2596195011427"></a><a name="p2596195011427"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1473010295313"><a name="p1473010295313"></a><a name="p1473010295313"></a>UWAL configuration.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p059665015426"><a name="p059665015426"></a><a name="p059665015426"></a>Character string of the JSON type.</p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>Empty string</p>
            </td>
            </tr>
            <tr id="row4407698390"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1840715973919"><a name="p1840715973919"></a><a name="p1840715973919"></a>uwal_disk_size</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p1140717915395"><a name="p1140717915395"></a><a name="p1140717915395"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p17407792391"><a name="p17407792391"></a><a name="p17407792391"></a>Disk size occupied by UWAL. The value cannot exceed the total disk size. Unit: byte.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p16829854115014"><a name="p16829854115014"></a><a name="p16829854115014"></a>Minimum value: <strong id="b76064162412"><a name="b76064162412"></a><a name="b76064162412"></a>8589934592</strong></p>
            <p id="p17120172118219"><a name="p17120172118219"></a><a name="p17120172118219"></a>Maximum value: <strong id="b4234201910417"><a name="b4234201910417"></a><a name="b4234201910417"></a>4398046511104</strong></p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>8589934592</p>
            </td>
            </tr>
            <tr id="row124911412194316"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1849211210431"><a name="p1849211210431"></a><a name="p1849211210431"></a>uwal_devices_path</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p949214126432"><a name="p949214126432"></a><a name="p949214126432"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p649211210432"><a name="p649211210432"></a><a name="p649211210432"></a>Path for storing UWAL files. The path must be an existing path. It is the input parameter name when the UwalInit() function is invoked.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p13444115913211"><a name="p13444115913211"></a><a name="p13444115913211"></a>Character string of the file storage path.</p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>Empty string</p>
            </td>
            </tr>
            <tr id="row138231819439"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1138281811439"><a name="p1138281811439"></a><a name="p1138281811439"></a>uwal_log_path</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p11382161815431"><a name="p11382161815431"></a><a name="p11382161815431"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1832318524495"><a name="p1832318524495"></a><a name="p1832318524495"></a>Path for storing UWAL log files. The path must be an existing path.</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p19301132112336"><a name="p19301132112336"></a><a name="p19301132112336"></a>Character string of the file storage path.</p>
            </td>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p19301132112335"><a name="p19301132112335"></a><a name="p19301132112335"></a>Empty string</p>
            </td>
            </tr>
            <tr id="row15325134455119"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p143269444516"><a name="p143269444516"></a><a name="p143269444516"></a>uwal_rpc_compression_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p9792504515"><a name="p9792504515"></a><a name="p9792504515"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p17326344185111"><a name="p17326344185111"></a><a name="p17326344185111"></a>Specifies whether to enable compressed transfer.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul723414185211"></a><a name="ul723414185211"></a><ul id="ul723414185211"><li><strong id="b46211635163012"><a name="b46211635163012"></a><a name="b46211635163012"></a>true</strong>: enable.</li><li><strong id="b1526114493016"><a name="b1526114493016"></a><a name="b1526114493016"></a>false</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>false</p>
            </td>
            </tr>
            <tr id="row20803334125218"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p680363414522"><a name="p680363414522"></a><a name="p680363414522"></a>uwal_rpc_flowcontrol_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p26042047125212"><a name="p26042047125212"></a><a name="p26042047125212"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1560715215815"><a name="p1560715215815"></a><a name="p1560715215815"></a>Specifies whether to enable flow control for the asynchronous standby database. This parameter is set on the active database.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul175600166531"></a><a name="ul175600166531"></a><ul id="ul175600166531"><li><strong id="b3132859183014"><a name="b3132859183014"></a><a name="b3132859183014"></a>on</strong>: enable.</li><li><strong id="b024329143120"><a name="b024329143120"></a><a name="b024329143120"></a>off</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>off</p>
            </td>
            </tr>
            <tr id="row1861817512539"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p106188514539"><a name="p106188514539"></a><a name="p106188514539"></a>uwal_rpc_flowcontrol_value</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p3618115110538"><a name="p3618115110538"></a><a name="p3618115110538"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p176184512531"><a name="p176184512531"></a><a name="p176184512531"></a>Flow control threshold of the asynchronous standby database. Unit: MB.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p637754013113"><a name="p637754013113"></a><a name="p637754013113"></a>8–2048</p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>128</p>
            </td>
            </tr>
            <tr id="row10727151734917"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p177273171495"><a name="p177273171495"></a><a name="p177273171495"></a>uwal_async_append_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p16727181734910"><a name="p16727181734910"></a><a name="p16727181734910"></a>Boolean</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p197271417124919"><a name="p197271417124919"></a><a name="p197271417124919"></a>Specifies whether UWAL uses synchronous write or asynchronous write.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul3411546175514"></a><a name="ul3411546175514"></a><ul id="ul3411546175514"><li><strong id="b23191546183114"><a name="b23191546183114"></a><a name="b23191546183114"></a>true</strong>: Asynchronous write is used.</li><li><strong id="b1279241123217"><a name="b1279241123217"></a><a name="b1279241123217"></a>false</strong>: Synchronous write is used.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>false</p>
            </td>
            </tr>
            <tr id="row152985345311"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p92987341734"><a name="p92987341734"></a><a name="p92987341734"></a>application_name</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p17299143412311"><a name="p17299143412311"></a><a name="p17299143412311"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1529919348319"><a name="p1529919348319"></a><a name="p1529919348319"></a>Specifies the client name used in the current connection request.</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p1529911344310"><a name="p1529911344310"></a><a name="p1529911344310"></a>Any character string.</p>
            </td>
            <td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.5.1.5 "><p id="p4447122007"><a name="p4447122007"></a><a name="p4447122007"></a>Empty string</p>
            </td>
            </tr>
            </tbody>
            </table>

            **Table  2**  uwal\_config parameters

            <a name="table1040322664419"></a>
            <table><thead align="left"><tr id="row04034268441"><th class="cellrowborder" valign="top" width="19.966082532504238%" id="mcps1.2.5.1.1"><p id="p111461143194516"><a name="p111461143194516"></a><a name="p111461143194516"></a>Parameter</p>
            </th>
            <th class="cellrowborder" valign="top" width="11.430186546071225%" id="mcps1.2.5.1.2"><p id="p10146124311459"><a name="p10146124311459"></a><a name="p10146124311459"></a>Type</p>
            </th>
            <th class="cellrowborder" valign="top" width="37.79536461277557%" id="mcps1.2.5.1.3"><p id="p81461543204519"><a name="p81461543204519"></a><a name="p81461543204519"></a>Description</p>
            </th>
            <th class="cellrowborder" valign="top" width="30.808366308648953%" id="mcps1.2.5.1.4"><p id="p4146124313457"><a name="p4146124313457"></a><a name="p4146124313457"></a>Value Range</p>
            </th>
            <th class="cellrowborder" valign="top" width="20%" id="mcps1.2.5.1.5"><p id="p4146124313458"><a name="p4146124313458"></a><a name="p4146124313458"></a>Default Value</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1840492611441"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p159511917154511"><a name="p159511917154511"></a><a name="p159511917154511"></a>uwal_nodeid</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p18951517184518"><a name="p18951517184518"></a><a name="p18951517184518"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p095114178458"><a name="p095114178458"></a><a name="p095114178458"></a>ID of the current UWAL node.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>0–7</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>None</p>
            </td>
            </tr>
            <tr id="row4404142620442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p69511017174510"><a name="p69511017174510"></a><a name="p69511017174510"></a>uwal_ip</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p19511617154512"><a name="p19511617154512"></a><a name="p19511617154512"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p1795101715458"><a name="p1795101715458"></a><a name="p1795101715458"></a>UWAL listening address, which is the input parameter name when the UwalInit() function is invoked.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p795111794512"><a name="p795111794512"></a><a name="p795111794512"></a>IPv4</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>Empty string</p>
            </td>
            </tr>
            <tr id="row44041726104418"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p14951161784518"><a name="p14951161784518"></a><a name="p14951161784518"></a>uwal_port</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p20951317134520"><a name="p20951317134520"></a><a name="p20951317134520"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p895117171458"><a name="p895117171458"></a><a name="p895117171458"></a>UWAL listening port, which is the input parameter name when the UwalInit() function is invoked.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p119516171453"><a name="p119516171453"></a><a name="p119516171453"></a>9000–65535</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>None</p>
            </td>
            </tr>
            <tr id="row14404182611442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p8951161719452"><a name="p8951161719452"></a><a name="p8951161719452"></a>uwal_protocol</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p149511317134514"><a name="p149511317134514"></a><a name="p149511317134514"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p695113171452"><a name="p695113171452"></a><a name="p695113171452"></a>(Optional) Connection protocol of the current node, which is the input parameter name when the UwalInit() function is invoked.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="ul795119174457"></a><a name="ul795119174457"></a><ul id="ul795119174457"><li>tcp</li><li>rdma</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>tcp</p>
            </td>
            </tr>
            <tr id="row7404142611449"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p59524178454"><a name="p59524178454"></a><a name="p59524178454"></a>cpu_bind_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p139521917124511"><a name="p139521917124511"></a><a name="p139521917124511"></a>Character string</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p995281715454"><a name="p995281715454"></a><a name="p995281715454"></a>(Optional) Specifies whether to enable core binding for UWAL core threads.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="ul495219179451"></a><a name="ul495219179451"></a><ul id="ul495219179451"><li><strong id="b333733943320"><a name="b333733943320"></a><a name="b333733943320"></a>true</strong>: enable.</li><li><strong id="b1915194816338"><a name="b1915194816338"></a><a name="b1915194816338"></a>false</strong>: disable.</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>false</p>
            </td>
            </tr>
            <tr id="row19404926124410"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p1695231715458"><a name="p1695231715458"></a><a name="p1695231715458"></a>cpu_bind_start</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p1952317184512"><a name="p1952317184512"></a><a name="p1952317184512"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p199521217134513"><a name="p199521217134513"></a><a name="p199521217134513"></a>(Optional) Start CPU core used for UWAL core binding.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p49528172459"><a name="p49528172459"></a><a name="p49528172459"></a>0–1024</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>1</p>
            </td>
            </tr>
            <tr id="row204058264440"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p4952717194510"><a name="p4952717194510"></a><a name="p4952717194510"></a>cpu_bind_num</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p1095211714511"><a name="p1095211714511"></a><a name="p1095211714511"></a>Integer</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p89529171458"><a name="p89529171458"></a><a name="p89529171458"></a>(Optional) Number of CPU cores bound to UWAL.</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p1795231715454"><a name="p1795231715454"></a><a name="p1795231715454"></a>2–16</p>
            </td>
            <td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.5.1.5 "><p id="p595111754513"><a name="p595111754513"></a><a name="p595111754513"></a>3</p>
            </td>
            </tr>
            </tbody>
            </table>

        3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

    3.  Restart the database to enable the UWAL feature.
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

    4.  Verify that the UWAL feature is successfully enabled.

        ```
        gsql -d postgres -p 16600 -c "show enable_uwal"
        ```

        If the following information is displayed, the feature is enabled successfully:

        ```
        enable_uwal
        -------------------
        on
        (1 row)
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   **-p 16600**:  **16600**  indicates the database port number. Change it based on the actual environment.
        >-   To view UWAL log files, go to the path specified by  **uwal\_log\_path**  and run the following command:
        >    ```
        >    cat uwal*.log
        >    ```

