# One-Click Deployment of the UWAL Feature<a name="EN-US_TOPIC_0000001686949549"></a>

UWAL allows one-click deployment through a simple deployment script.

## Prerequisites<a name="section1384124462811"></a>

-   openGauss has been deployed.
-   Obtain the UWAL installation package corresponding to the OS and CPU architecture in use, for example,  **OCK\_UWAL\_23.0.0\_openeuler\_22.03-aarch64\_gcc10.tar.gz**.
-   The following directories exist on both the active and standby nodes:
    -   **$\{GAUSSHOME\}/lib**
    -   UWAL file storage path \(value of  **uwal\_devices\_path**\)
    -   UWAL log file storage path \(value of  **uwal\_log\_path**\)

## Procedure<a name="section196307368361"></a>

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

