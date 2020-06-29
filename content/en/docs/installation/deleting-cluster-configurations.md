# Deleting Cluster Configurations<a name="EN-US_TOPIC_0249784570"></a>

After the openGauss is uninstalled, execute the  **gs\_postuninstall**  script to delete configurations from all servers in the openGauss if you do not need to re-deploy the openGauss using these configurations. These configurations are made by the  **gs\_preinstall**  script.

## Prerequisites<a name="section6881162464116"></a>

-   The openGauss uninstallation task has been successfully executed.
-   User  **root**  is trustworthy and available.
-   Only user  **root**  is authorized to run the  **gs\_postuninstall**  command.

## Procedure<a name="section1932691920415"></a>

1.  Log in to the openGauss server as user  **root**.
2.  Check whether the mutual trust has been established between the users  **root**. If not, manually establish the mutual trust. For details, see  [Establishing Mutual Trust Manually](establishing-mutual-trust-manually.md).

    Run the  **ssh **_Host name_  command to check whether mutual trust has been successfully established. Then, enter  **exit**.

    ```
    plat1:~ # ssh plat2 
    Last login: Tue Jan  5 10:28:18 2016 from plat1 
    Huawei's internal systems must only be used for conducting Huawei's business or for purposes authorized by Huawei management.Use is subject to audit at any time by Huawei management. 
    plat2:~ # exit 
    logout 
    Connection to plat2 closed. 
    plat1:~ # 
    ```

3.  Go to the following path:

    ```
    cd /opt/software/openGauss/script
    ```

4.  Run the  **gs\_postuninstall**  command to clear the environment. If the cluster is installed in environment variable separation mode, run the  **source**  command to obtain the environment variable separation file  **ENVFILE**.

    ```
    ./gs_postuninstall -U omm -X /opt/software/openGauss/clusterconfig.xml --delete-user --delete-group
    ```

    Alternatively, locally use the  **gs\_postuninstall**  tool to clear each openGauss node.

    ```
    ./gs_postuninstall -U omm -X /opt/software/openGauss/clusterconfig.xml --delete-user --delete-group -L
    ```

    **omm**  is the name of the OS user who runs the openGauss, and the path of the openGauss configuration file is  **/opt/software/openGauss/clusterconfig.xml**.

    If the cluster is installed in environment variable separation mode, delete the environment variable separation parameter  **ENV**  obtained by running the  **source**  command.

    unset MPPDB\_ENV\_SEPARATE\_PATH

5.  Delete the mutual trust between the users  **root**  on each openGauss database node. For details, see  [Establishing Mutual Trust Manually](establishing-mutual-trust-manually.md).

## Examples<a name="section688217249417"></a>

Clear the host environment.

```
gs_postuninstall -U omm -X /opt/software/openGauss/clusterconfig.xml --delete-user
Parsing the configuration file.
Successfully parsed the configuration file.
Check log file path.
Successfully checked log file path.
Checking unpreinstallation.
Successfully checked unpreinstallation.
Deleting Cgroup.
Successfully deleted Cgroup.
Deleting the instance's directory.
Successfully deleted the instance's directory.
Deleting the installation directory.
Successfully deleted the installation directory.
Deleting the temporary directory.
Successfully deleted the temporary directory.
Deleting remote OS user.
Successfully deleted remote OS user.
Deleting software packages and environmental variables of other nodes.
Successfully deleted software packages and environmental variables of other nodes.
Deleting logs of other nodes.
Successfully deleted logs of other nodes.
Deleting software packages and environmental variables of the local node.
Successfully deleted software packages and environmental variables of the local nodes.
Deleting local OS user.
Successfully deleted local OS user.
Deleting local node's logs.
Successfully deleted local node's logs.
Successfully cleaned environment.
```

## Troubleshooting<a name="section1588322414413"></a>

If the configuration deletion fails, locate faults by following the log information provided in the  _$GAUSSLOG_**/om/gs\_postuninstall-**_YYYY_**-**_MM_**-**_DD_**\_**_HHMMSS_**.log**  file.

