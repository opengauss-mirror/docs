# Upgrade Impact and Constraints<a name="EN-US_TOPIC_0305491361"></a>

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

