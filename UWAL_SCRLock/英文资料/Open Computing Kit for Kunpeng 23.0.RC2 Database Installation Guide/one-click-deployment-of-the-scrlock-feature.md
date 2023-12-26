# One-Click Deployment of the SCRLock Feature<a name="EN-US_TOPIC_0000001721920149"></a>

SCRLock provides a simple deployment script. You can enter the installation path, installation user, and node information to perform one-click deployment.

## Prerequisites<a name="section1584162294611"></a>

-   RDMA is enabled. This function depends on the CX4/CX5 NIC.
-   openGauss has been deployed.
-   Obtain the SCRLock installation package corresponding to the OS and CPU architecture in use, for example,  **OCK\_scrlock\_openEuler-20.03-LTS-SP1-aarch64.tar.gz**.
-   The  **$\{GAUSSHOME\}/lib**  directory exists on the active and standby nodes.
-   Users with the same user name and password are created for servers where SCRLock needs to be deployed. The users must have the permission to run the  **rmmod**,  **rpm**,  **depmod**, and  **modprobe**  commands.

## Procedure<a name="section1854853044610"></a>

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

