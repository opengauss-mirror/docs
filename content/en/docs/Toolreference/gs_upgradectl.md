# gs\_upgradectl<a name="EN-US_TOPIC_0249632241"></a>

## Context<a name="en-us_topic_0237152425_en-us_topic_0059779035_sca8f0f932903424f8ce649c929720f23"></a>

This tool helps you upgrade the current system based on new features provided by openGauss.

The upgrade mode is in-place minor version upgrade.

In-place minor version upgrade: Services are stopped during the local upgrade, and all nodes in openGauss are upgraded at a time.

## Precautions<a name="en-us_topic_0237152425_en-us_topic_0059779035_s706621cd98574d11aa38de2448930953"></a>

-   Services must be stopped during the upgrade.
-   The openGauss is running properly and data on the database nodes is synchronized.
-   Do not enable Kerberos during the upgrade.
-   Do not modify the  **version.cfg**  file decompressed from the installation package.
-   Original archive log files will become invalid after the upgrade.
-   After the upgrade, the original binary directory will be deleted. Do not store personal data files in the binary directory.
-   If an exception occurs so that the upgrade fails and the automatic rollback fails as well during the upgrade process, you need to manually perform the rollback commands. After the rollback, the GUC parameters set during the upgrade become invalid.
-   During the upgrade, do not change the values of  **wal\_level**,  **max\_connections**,  **max\_prepared\_transactions**, and  **max\_locks\_per\_transaction**.
-   The upgrade can be performed only when the disk usage of the database node is lower than 50%.

## Syntax<a name="en-us_topic_0237152425_en-us_topic_0059779035_sa2c64f98e27946438ecbbb724ca673da"></a>

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

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Currently, in-place minor version upgrade is supported.

-   Automatically upgrade openGauss

    ```
    gs_upgradectl -t auto-upgrade -X XMLFILE  [-l LOGFILE]  
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
    >-   Upgrade submission is suitable only for in-place minor version upgrade of openGauss.
    >-   Once the operation is complete, the rollback operation cannot be performed.


## Parameter Description<a name="en-us_topic_0237152425_en-us_topic_0059779035_sdad8716000e7427a84d26645630bb309"></a>

-   -t

    Specifies the  **gs\_upgradectl**  command type.

    Valid value: chose-strategy, auto-upgrade, auto-rollback, and commit-upgrade

-   -l

    Records log information during the upgrade or rollback.

    Value range: any existing absolute path that can be accessed

    Default value:  **/var/log/gaussdb**_User name_**/om/gs\_upgradectl-YYYY-MM-DD\_hhmmss.log**

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.

-   -X

    Specifies the openGauss configuration file.

    Value range: storage paths of XML files

-   --force

    If openGauss is abnormal and does not support normal rollback, use this parameter to perform a forcible rollback.


## Examples<a name="en-us_topic_0237152425_en-us_topic_0059779035_s6c0afe9e35134c4c9959768123dad038"></a>

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
Setting SCTP service.
Successfully set SCTP service.
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
gs_upgradectl -t auto-upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml 
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
gs_upgradectl -t auto-commit -X /data/xml/3node_3c3d_1m2s_etcd.xml
Old cluster app path is /data/gauss/app_e67b8bcd
Successfully Cleaned old install path.
Commit binary upgrade succeeded.
```

