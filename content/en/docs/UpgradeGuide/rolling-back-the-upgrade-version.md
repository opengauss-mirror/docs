# Rolling Back the Upgrade Version<a name="EN-US_TOPIC_0305491438"></a>

This section describes how to roll back to the source version.

## Procedure<a name="section779219132168"></a>

1.  Log in to the node as a database user \(for example,  **omm**\).
2.  Run the following command to roll back the kernel code. After the rollback is complete, run the  **gs\_preinstall**  script in the old package to ensure that the kernel version is the same as the OM code version. For details, see  [Execute the gs\_preinstall script](performing-the-upgrade.md#li11593631125811).

    ```
    gs_upgradectl -t auto-rollback  -X /opt/software/GaussDB_Kernel/clusterconfig.xml
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the database is abnormal, run the following command to forcibly roll back the upgrade:
    >```
    >gs_upgradectl -t auto-rollback -X /opt/software/GaussDB_Kernel/clusterconfig.xml --force
    >```
    >openGauss 3.X uses a new method to establish mutual trust relationship.
    >If openGauss 2.X is upgraded to openGauss 3.X and then rolled back, perform the following steps after the rollback command is executed and before running the gs_preinstall command in the old package:
    >1. Delete the **/root/gauss\_om/***Database username* \(for example, **omm**\) directory on each node in the cluster.
    >2. To remove the mutual trust relationship between database users, log in to each node in the cluster, delete the crontab scheduled task, delete** \~/.ssh**, kill the mutual trust process, and delete the SSH\_AUTH\_SOCK and SSH\_AGENT\_PID environment variables.
    
3.  Check the version number after the rollback.

    ```
    gs_om -V | --version
    ```
