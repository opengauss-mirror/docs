# gs\_upgradectl<a name="EN-US_TOPIC_0289899212"></a>

## Context<a name="en-us_topic_0287275999_en-us_topic_0237152425_en-us_topic_0059779035_sca8f0f932903424f8ce649c929720f23"></a>

You can determine whether to upgrade the existing system based on the new features provided by the openGauss and the current database status.

Currently, in-place upgrade and gray upgrade are supported. The upgrade modes are classified into major version upgrade and minor version upgrade.

After you select an upgrade mode, the system automatically determines and selects a proper upgrade policy.

In-place upgrade: During the upgrade, services must be stopped and all nodes must be upgraded at a time.

Gray upgrade: supports operations on all service during the upgrade and upgrades all nodes at a time. \(This function is supported in versions later than openGauss 1.1.0.\)

## Precautions<a name="en-us_topic_0287275999_en-us_topic_0237152425_en-us_topic_0059779035_s706621cd98574d11aa38de2448930953"></a>

-   Do not perform the upgrade, scale-out, and scale-in at the same time.
-   Virtual IP addresses are not supported.
-   During the upgrade, do not change the values of the  **wal\_level**,  **max\_connections**,  **max\_prepared\_transactions**, and  **max\_locks\_per\_transaction**  GUC parameters. If the value is changed, the instance fails to be started after the rollback.
-   You are advised to perform upgrade when the database system is idle. You can determine the upgrade time \(for example, holidays\) based on experience.
-   Before the upgrade, ensure that the database is normal. You can run the  **gs\_om -t status**  command to query the database status. If the value of  **cluster\_state**  in the query result is  **Normal**, the database is normal.
-   Ensure that the database mutual trust is normal before the upgrade. You can run the  **ssh hostname**  command on any node to connect to another node for verification. If no password is required for the interconnection between hosts, the mutual trust relationship is normal. \(Generally, the mutual trust relationship is normal when the database is running properly.\)
-   Before and after the upgrade, the database deployment mode \(configuration file\) cannot be changed. Before the upgrade, the deployment mode is verified. If the deployment mode is changed, an error is reported.
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
-   If new columns are added to the system catalog during the upgrade, you cannot view these new columns by running the  **\\d**  command after the upgrade. However, you can run the  **SELECT**  command to query the new columns.
-   The GUC parameter  **enable\_stream\_replication**  must be set to  **on**  for the upgrade. If this parameter is set to  **off**, the upgrade is not allowed.
-   In gray upgrade, ensure that there are less than 200 concurrent reads and 200 concurrent writes.
-   In a cluster with one primary node and multiple standby nodes, after the cluster is upgraded to a version later than openGauss 1.1.0, if listen_addresses in the configuration file is changed to '*', you need to change values of localport in replconninfo1, ......replconninfo* to the original values plus 5. For example, if the original value is 16000, you need to change it to 16005. Otherwise, the cluster fails to be restarted.
-   You are advised to perform the upgrade when the disk usage of the database node is less than 80%.
-   After execute gs_upgradectl -t auto-upgrade, snapshot generation cannot be performed before it is submitted, that is, snapshot generation cannot be performed during upgrade.

## Syntax<a name="en-us_topic_0287275999_en-us_topic_0237152425_en-us_topic_0059779035_sa2c64f98e27946438ecbbb724ca673da"></a>

-   Display help information.

    ```
    gs_upgradectl -? | --help
    ```

-   Display version information.

    ```
    gs_upgradectl -V | --version
    ```

-   Select an upgrade policy.

    ```
    gs_upgradectl -t chose-strategy [-l LOGFILE]
    ```

-   Automatically upgrade openGauss

    ```
    gs_upgradectl -t auto-upgrade -X XMLFILE  [-l LOGFILE] [--grey]
    ```

-   Automatically roll back the upgrade.

    ```
    gs_upgradectl -t auto-rollback -X XMLFILE [-l LOGFILE] [--force]
    ```

-   Submit the upgrade project.

    ```
    gs_upgradectl -t commit-upgrade -X XMLFILE [-l LOGFILE]
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   Once the operation is complete, the rollback operation cannot be performed.


## Parameter Description<a name="en-us_topic_0287275999_en-us_topic_0237152425_en-us_topic_0059779035_sdad8716000e7427a84d26645630bb309"></a>

-   -t

    Specifies the  **gs\_upgradectl**  command type.

    Valid value: chose-strategy, auto-upgrade, auto-rollback, and commit-upgrade

-   -l

    Records log information during the upgrade or rollback.

    Value range: any existing absolute path that can be accessed

    Default value:  **/var/log/gaussdb/**_User name_**/om/gs\_upgradectl-YYYY-MM-DD\_hhmmss.log**

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.

-   -X

    Specifies the openGauss configuration file.

    Value range: storage paths of XML files

-   --grey

    Perform gray upgrade.

-   -h
    upgrade specified and partial nodes, this parameter must be used with --grey.

    Value range: single node or multiple node

-   --continue

    upgrade the remaining upgrade, this parameter must be used with --grey.

-   --force

    If openGauss is abnormal and does not support normal rollback, use this parameter to perform a forcible rollback.


## Examples<a name="en-us_topic_0287275999_en-us_topic_0237152425_en-us_topic_0059779035_s6c0afe9e35134c4c9959768123dad038"></a>

Example 1: Use the new package to perform pre-upgrade operations.

```
./gs_preinstall -U roach -G users -X /data/xml/3node_3c3d_1m2s_etcd.xml 
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Setting pssh path
Successfully set core path.
Distributing package.
Begin to distribute package to tool path.
Successfully distribute package to tool path.
Begin to distribute package to package path.
Successfully distribute package to package path.
Successfully distributed package.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting pssh path
Successfully set pssh path.
Setting Cgroup.
Successfully set Cgroup.
Set ARM Optimization.
Successfully set ARM Optimization.
Preinstalling secbox.
Successfully installed secbox.
Setting finish flag.
Successfully set finish flag.
Preinstallation succeeded.
```

Example 2: Execute the  **gs\_upgradectl**  script to perform the upgrade.

```
gs_upgradectl -t upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml 
Static configuration matched with old static configuration files.
Performing inplace rollback.
Rollback succeeded.
Checking upgrade environment.
Successfully checked upgrade environment.
Successfully checked upgrade environment.
Successfully started cluster.
Start to do health check.
Successfully checked cluster status.
Backing up current application and configurations.
Successfully backed up current application and configurations.
Stopping the cluster.
Successfully stopped cluster.
Backing up cluster configuration.
Successfully backup hotpatch config file.
Successfully backed up cluster configuration.
Installing new binary.
Restoring cluster configuration.
Successfully restored cluster configuration.
Modifying the socket path.
Successfully modified socket path.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Successfully started cluster.
Start to do health check.
Successfully checked cluster status.
Upgrade main process has been finished, user can do some check now.
Once the check done, please execute following command to commit upgrade:

    gs_upgradectl -t commit-upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml
```

Example 3: Execute the  **gs\_upgradectl**  script to perform automatic rollback on the upgrade.

```
gs_upgradectl -t auto-rollback -X /data/xml/3node_3c3d_1m2s_etcd.xml
Static configuration matched with old static configuration files.
Performing inplace rollback.
Checking static configuration files.
Successfully checked static configuration files.
Restoring cluster configuration.
Successfully rollback hotpatch config file.
Successfully restored cluster configuration.
Switch symbolic link to old binary directory.
Successfully switch symbolic link to old binary directory.
Stopping the cluster.
Successfully stopped cluster.
Restoring application and configurations.
Successfully restored application and configuration.
Restoring cluster configuration.
Successfully rollback hotpatch config file.
Successfully restored cluster configuration.
Successfully started cluster.
Successfully cleaned new install path.
Rollback succeeded.
```

Example 4: Execute the  **gs\_upgradectl**  script to submit the upgrade in in-place mode.

```
gs_upgradectl -t commit -X /data/xml/3node_3c3d_1m2s_etcd.xml
Old cluster app path is /data/gauss/app_e67b8bcd
Successfully Cleaned old install path.
Commit binary upgrade succeeded.
```

Example 5: Execute the  **gs\_upgradectl**  script to perform rolling upgrade.

upgrade specified node
```
gs_upgradectl -t auto-upgrade -X /data/node2.xml --grey -h hostname0
Static configuration matched with old static configuration files.
Successfully set upgrade_mode to 0.
Checking upgrade environment.
Successfully checked upgrade environment.
Start to do health check.
Successfully checked cluster status.
Upgrade nodes ['hostname0'].
NOTICE: The directory /data/install/app_oldcommitid will be deleted after commit-upgrade, please make sure there is no personal data.
Performing grey rollback.
No need to rollback.
The directory /data/install/app_oldcommitid will be deleted after commit-upgrade, please make sure there is no personal data.
Installing new binary.
copy certs from /data/install/app_oldcommitid to /data/install/app_newcommitid.
Successfully copy certs from /data/install/app_oldcommitid to /data/install/app_newcommitid.
Successfully backup hotpatch config file.
Sync cluster configuration.
Successfully synced cluster configuration.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Switching all db processes.
Check cluster state.
Create checkpoint before switching.
Switching DN processes.
Ready to grey start cluster.
Grey start cluster successfully.
Wait for the cluster status normal or degrade.
Successfully switch all process version
The nodes ['hostname0'] have been successfully upgraded to new version. Then do health check.
Start to do health check.
Successfully checked cluster status.
The nodes ['hostname0']ve been successfully upgraded.Then can upgrade the remaining nodes.
```

upgrade the remaining node
```
gs_upgradectl -t auto-upgrade -X /data/node2.xml --grey --continue
Static configuration matched with old static configuration files.
Checking upgrade environment.
['hostname0'] node have been upgrade, can upgrade the remaining nodes.
Successfully checked upgrade environment.
Start to do health check.
Successfully checked cluster status.
Successfully backup hotpatch config file.
Sync cluster configuration.
Successfully synced cluster configuration.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Switching all db processes.
Check cluster state.
Create checkpoint before switching.
Switching DN processes.
Ready to grey start cluster.
Grey start cluster successfully.
Wait for the cluster status normal or degrade.
Successfully switch all process version
The nodes ['hostname1'] have been successfully upgraded to new version. Then do health check.
Start to do health check.
Successfully checked cluster status.
Waiting for the cluster status to become normal.
.
The cluster status is normal.
Create checkpoint before switching.
Upgrade main process has been finished, user can do some check now.
Once the check done, please execute following command to commit upgrade:

gs_upgradectl -t commit-upgrade -X /data/node2.xml
Successfully upgrade all nodes.
```


