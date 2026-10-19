---
description: This document describes One-Stop Installation Guide in openGauss, covering topics such as Prerequisites, Steps.
keywords: [openGauss, One-Stop Installation Guide, installation, Prerequisites, Steps]
---

# One-Stop Installation Guide

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:51:02.857Z pushedAt=2026-07-14T07:15:07.670Z -->

This section details the one-stop installation of openGauss, which allows you to easily configure XML files through an interactive interface, significantly reducing the time required for database installation. If you use one-stop installation, you can skip creating the XML configuration file and initializing the installation.

## Prerequisites<a name="section9955194683210"></a>

- All server operating systems and networks are running properly.

- You have read, write, and execute permissions on the paths where the database package is decompressed and installed, with the installation path left unspecified.

- You have execute permissions on the downloaded openGauss package.

- If using the Chinese interface for installation, check whether the local character set supports Chinese (e.g., zh_CN.UTF-8).

## Steps<a name="section4241123615573"></a>

1. Download and decompress the software package as user `root` or a regular user. Navigate to the script directory and perform the pre-installation. Take version 6.0.0 as an example:

    ```
    tar -zxvf openGauss-All-6.0.0-openEuler20.03-aarch64.tar -C targetDir
    cd targetDir
    tar -zxvf openGauss-OM-6.0.0-openEuler20.03-aarch64.tar.gz
    cd script
    ./gs_preinstall -U omm -G dbgroup --one-stop-install --sep-env-file=ENVFILE
    ```

    Remove --sep-env-file if environment separation is not required. targetDir is the storage path after the package is decompressed.

2. After execution, the program first checks the local default character set. Based on the configured language settings, it displays a navigation bar in the corresponding language. The user then selects the language to use for the subsequent installation (supported: Chinese, English).

    You can check the language settings of the local operating system with the following command:

    ```
    echo $LANG
    ```

    If the displayed value contains "en_US", the navigation bar will be in English.

    ```
    Please choose whether to generate an XML file with one click navigation in English or Chinese?
    >> 1) chinese
    2) english
    ```

    If the displayed value contains "zh_CN", the language is Chinese, and the navigation bar will be in Chinese. Otherwise, you can run the following command to change the language setting to Chinese:

    ```
    export LANG=zh_CN.UTF-8
    ```

    ```
    请选择是英文还是中文导航一键式生成xml文件?
    >> 1) 中文
    2) 英文
    ```

3. Enter the path and file name for the XML file (default: `./cluster.xml`).

If the XML file path entered exists, the system checks whether the input contains illegal characters, whether it is a file, and whether the current user has the required permissions. If the XML file path does not exist, no check is performed. By default, the generated `cluster.xml` file will be located at `script/base_utils/template/cluster.xml` under the package decompression path.

4. Enter the database installation directory (default: `/opt/openGauss/install`).

If the database installation directory entered exists, the system checks whether the directory contains illegal characters, whether it is an empty directory, and whether the current user has the required permissions. If the directory does not exist, no check is performed.

5. Enter the database port (default: `15000`).

Enter a port ranging from 1024 to 65535. Digits only.

6. Select whether to deploy in primary/standby mode.

    Users can choose primary/standby deployment or standalone deployment. Standalone deployment will write the local IP and hostname into the XML file by default, and the subsequent steps will be skipped. Primary/standby deployment requires performing the subsequent steps.

7. Select whether to pool resources.

    Pooling resources will deploy CM by default. Skipping pooling resources will require performing the subsequent steps.

8. Select whether to deploy CM.

    Deploy CM as needed.

9. Enter the CM server port (default: `15400`).

    The port must range from 1024 to 65535, must be digits, different from the database port configured above, and at least 10 apart from the database port.

10. Enter the number of nodes. One primary and a maximum of eight standby nodes are supported, i.e., 9 nodes (default: one primary and two standby nodes).

    The values must range from 1 to 9 and must be digits.

11. Enter the host node IP and node name (e.g., 192.168.0.1 hostname1;192.168.0.2 hostname2).

    The node IPs and names entered must match in quantity. Separate an IP and a hostname by a space, and each IP-hostname pair by a semicolon. Each entered IP must be unique.

12. The generated XML path is `/xxx/script/base_utils/template/cluster.xml`.

    The default generated XML path is script/base_utils/template/cluster.xml.

13. Enter the SSH port (default: `22`).

    In addition to the default port 22, user-defined ports must be digits between 1024 and 65535. If ports differ across nodes, separate them with commas, for example: 22,2222. If the port is the same for all nodes, enter it once, for example, 22.

14. Check the XML content.

    ```xml
    <ROOT>
        <CLUSTER>
            <PARAM name="clusterName" value="Cluster_template" />
            <PARAM name="nodeNames" value="hostname1,hostname2,hostname3" />
            <PARAM name="gaussdbAppPath" value="/opt/openGauss/install/app" />
            <PARAM name="gaussdbLogPath" value="/opt/openGauss/install/log" />
            <PARAM name="tmpMppdbPath" value="/opt/openGauss/install/tmp" />
            <PARAM name="gaussdbToolPath" value="/opt/openGauss/install/tool" />
            <PARAM name="corePath" value="/opt/openGauss/install/corefile" />
            <PARAM name="backIp1s" value="192.168.0.1,192.168.0.2,192.168.0.3" />
            </CLUSTER>

        <DEVICELIST>
            <DEVICE sn="node1_hostname">
                <PARAM name="name" value="hostname1" />
                <PARAM name="azName" value="AZ1" />
                <PARAM name="azPriority" value="1" />
                <PARAM name="backIp1" value="192.168.0.1" />
                <PARAM name="sshIp1" value="192.168.0.1" />
                <PARAM name="sshPort" value="22" />
                <PARAM name="cmsNum" value="1" />
                <PARAM name="cmServerPortBase" value="15000" />
                <PARAM name="cmServerListenIp1" value="192.168.0.1,192.168.0.2,192.168.0.3" />
                <PARAM name="cmServerHaIp1" value="192.168.0.1,192.168.0.2,192.168.0.3" />
                <PARAM name="cmServerlevel" value="1" />
                <PARAM name="cmServerRelation" value="hostname1,hostname2,hostname3" />
                <PARAM name="cmDir" value="/opt/openGauss/install/data/cmserver" />
                <PARAM name="dataNum" value="1" />
                <PARAM name="dataPortBase" value="15000" />
                <PARAM name="dataNode1" value="/opt/openGauss/install/data/dn1,hostname2,/opt/openGauss/install/data/dn1,hostname3,/opt/openGauss/install/data/dn1" />
                <PARAM name="dataNode1_syncNum" value="0" />
            </DEVICE>

            <DEVICE sn="node2_hostname">
                <PARAM name="name" value="hostname2" />
                <PARAM name="azName" value="AZ1" />
                <PARAM name="azPriority" value="1" />
                <PARAM name="backIp1" value="192.168.0.2" />
                <PARAM name="sshIp1" value="192.168.0.2" />
                <PARAM name="sshPort" value="22" />
                <PARAM name="cmServerPortStandby" value="15000" />
                <PARAM name="cmDir" value="/opt/openGauss/install/data/cmserver" />
            </DEVICE>

            <DEVICE sn="node3_hostname">
                <PARAM name="name" value="hostname3" />
                <PARAM name="azName" value="AZ1" />
                <PARAM name="azPriority" value="1" />
                <PARAM name="backIp1" value="192.168.0.3" />
                <PARAM name="sshIp1" value="192.168.0.3" />
                <PARAM name="sshPort" value="22" />
                <PARAM name="cmServerPortStandby" value="15000" />
                <PARAM name="cmDir" value="/opt/openGauss/install/data/cmserver" />
            </DEVICE>

            </DEVICELIST>
    </ROOT>
    ```

15.     Confirm whether the XML content is correct. If it is correct, enter yes. If not, make changes and then enter yes.

The generated XML is first presented for user confirmation. If it is correct, enter y or yes to proceed. If not, open a new window to modify the generated XML. After making the changes, return to the current window and enter y or yes to continue.
