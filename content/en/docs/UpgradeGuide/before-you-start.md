# Before You Start<a name="EN-US_TOPIC_0305491437"></a>

-   **[Upgrade Solution](#upgrade-solution)**  

-   **[Version Requirements Before the Upgrade \(Upgrade Path\)](#version requirements before the upgrade)**  

-   **[Upgrade Impact and Constraints](#upgrade-impact-and-constraints)**  

## Upgrade Solution

This section describes how to select an upgrade mode.

You can determine whether to upgrade the existing system based on the new features provided by the openGauss and the current database status.

Currently, in-place upgrade and gray upgrade are supported. The upgrade modes are classified into major version upgrade and minor version upgrade.

After you select an upgrade mode, the system automatically determines and selects a proper upgrade policy.

In-place upgrade: During the upgrade, services must be stopped and all nodes must be upgraded at a time.

Gray upgrade: supports operations on all service during the upgrade and upgrades all nodes at a time. \(This function is supported in versions later than openGauss 1.1.0.\)

## Version Requirements Before the Upgrade

[Table 1](#table7961729)  lists the version requirements for upgrading openGauss.

**Table  1**  Version Requirements Before the Upgrade \(Upgrade Path\)

<a name="table7961729"></a>

<table><tbody><tr id="row48398424"><td class="cellrowborder" valign="top" width="41.410000000000004%"><p id="p27958252"><a name="p27958252"></a><a name="p27958252"></a>Version</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%"><p id="p50025933"><a name="p50025933"></a><a name="p50025933"></a>Upgrade Description</p>
</td>
</tr>
<tr id="row5917164"><td class="cellrowborder" valign="top" width="41.410000000000004%"><p id="p138378421424"><a name="p138378421424"></a><a name="p138378421424"></a>Versions earlier than openGauss 1.0.1</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%"><p id="p33594135"><a name="p33594135"></a><a name="p33594135"></a>It can be upgraded to any version earlier than openGauss 1.0.1.</p>
</td>
</tr>
<tr id="row1699043202811"><td class="cellrowborder" valign="top" width="41.410000000000004%"><p id="p16990230282"><a name="p16990230282"></a><a name="p16990230282"></a>openGauss 1.0.1</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%"><p id="p89903322814"><a name="p89903322814"></a><a name="p89903322814"></a>It can be upgraded to openGauss 1.1.0.</p>
</td>
</tr>
<tr id="row10729745336"><td class="cellrowborder" valign="top" width="41.410000000000004%"><p id="p473019455316"><a name="p473019455316"></a><a name="p473019455316"></a>openGauss 1.1.0 and later</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%"><p id="p207301045037"><a name="p207301045037"></a><a name="p207301045037"></a>It can be upgraded to any version later than openGauss 1.1.0.</p>
</td>
</tr>
</tbody>
</table>


>![](C:/Users/lijun/Downloads/openGauss-document-zh-3.0.0/openGauss-document-zh-3.0.0/public_sys-resources/icon-note.gif) **NOTE:** 
>To view the current version, run the following command:
>
>```
>gsql -V | --version
>```

## Upgrade Impact and Constraints

Note the following during the upgrade:

-   Do not perform the upgrade, scale-out, and scale-in at the same time.
-   Virtual IP addresses are not supported.
-   During the upgrade, do not change the values of  **wal\_level**,  **max\_connections**,  **max\_prepared\_transactions**, and  **max\_locks\_per\_transaction**. If the value is changed, the instance fails to be started after the rollback.
-   You are advised to perform upgrade when the database system is idle. You can determine the time \(for example, holidays\) based on experience.
-   Before the upgrade, ensure that the database is normal. You can run the  **gs\_om -t status**  command to query the database status. If the value of  **cluster\_state**  in the query result is  **Normal**, the database is normal.
-   Ensure that the database mutual trust is normal before the upgrade. You can run the  **ssh hostname**  command on any node to connect to another node for verification. If no password is required for the interconnection between hosts, the mutual trust relationship is normal. \(Generally, the mutual trust relationship is normal when the database is running properly.\)
-   The database deployment mode \(configuration files\) cannot be changed before and after the upgrade. Before the upgrade, the deployment mode is verified. If the deployment mode is changed, an error is reported.
-   Ensure that the OS is healthy before the upgrade. You can use the  **gs\_checkos**  tool to check the OS status.
-   Services need to be stopped during in-place upgrade. Online upgrade supports all service operations.
-   The database is running properly and data on the primary DN has been fully synchronized to standby DNs.
-   Do not enable Kerberos during the upgrade.
-   Do not modify the  **version.cfg**  file decompressed from the installation package.
-   If the upgrade fails due to an exception, you need to manually roll back the upgrade. The next upgrade can be performed only after the rollback is successful.
-   If the second upgrade is successful after the rollback, the GUC parameters that are set at the uncommitted stage become invalid.
-   Do not manually set GUC parameters during the upgrade.
-   In gray upgrade, services are interrupted for less than 10s during the upgrade.
-   During the upgrade, ensure that the kernel version is the same as the OM version before OM operations. That is, the kernel code and OM code are from the same software package. If the preinstallation script of an upgrade package is executed but the upgrade fails or the preinstallation script of a baseline package is not executed after the upgrade rollback, the kernel code is inconsistent with the OM code.
-   If new fields are added to the system catalog during the upgrade, you cannot view these new fields by running the  **\\d**  command after the upgrade. In this case, you can run the  **select**  command to query the new fields.
-   The GUC parameter  **enable\_stream\_replication**  must be set to  **on**  for the upgrade. If this parameter is set to  **off**, the upgrade is not allowed.
-   In gray upgrade, ensure that there are less than 200 concurrent reads and 200 concurrent writes.
-   If the MOT is used in a version earlier than openGauss 2.0.0, the version cannot be upgraded to openGauss 2.0.0.

