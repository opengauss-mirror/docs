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

3.  Check the version number after the rollback.

    ```
    gs_om -V | --version
    ```


