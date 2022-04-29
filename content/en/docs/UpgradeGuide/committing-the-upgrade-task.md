# Committing the Upgrade Task<a name="EN-US_TOPIC_0305491456"></a>

After the upgrade is complete, if no problem is found during the verification, you can commit the upgrade task.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Once the committal is complete, no rollback can be performed.

## Procedure<a name="section779219132168"></a>

1.  Log in to the node as a database user \(for example,  **omm**\).
2.  Run the following command to commit the upgrade task:

    ```
    gs_upgradectl -t commit-upgrade  -X /opt/software/GaussDB_Kernel/clusterconfig.xml
    ```


