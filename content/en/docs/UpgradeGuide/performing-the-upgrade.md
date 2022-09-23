# Performing the Upgrade<a name="EN-US_TOPIC_0305491427"></a>

This section describes how to perform the in-place upgrade and gray upgrade.

## Procedure<a name="section17506731105516"></a>

1.  Log in to a node as user  **root**.
2.  Create a directory for the new package.

    ```
    mkdir -p /opt/software/gaussdb_upgrade
    ```

3.  Upload the new package to the  **/opt/software/gaussdb\_upgrade**  directory and decompress it.
4.  Go to the  **script**  directory generated after the installation package is decompressed.

    ```
    cd /opt/software/gaussdb_upgrade/script
    ```

5.  Execute the  **gs\_preinstall**  script before in-place upgrade or gray upgrade.

    ```
    ./gs_preinstall -U omm -G dbgrp  -X /opt/software/GaussDB_Kernel/clusterconfig.xml
    ```

6.  Switch to user  **omm**.

    ```
    su - omm
    ```

7.  If the database is normal, run the following command to perform the in-place upgrade or gray upgrade:

    Example 1: Use the  **gs\_upgradectl**  script to perform an in-place upgrade.

    ```
    gs_upgradectl -t auto-upgrade -X /opt/software/GaussDB_Kernel/clusterconfig.xml
    ```

    Example 2: Execute the  **gs\_upgradectl**  script to perform a gray upgrade.

    ```
    gs_upgradectl -t auto-upgrade -X /opt/software/GaussDB_Kernel/clusterconfig.xml --grey
    ```

8.  If the database is normal, run the following command to perform specified nodes upgrade:

    Example 1: Use the  **gs\_upgradectl**  script to perform a specified node upgrade.
 
    ```
    gs_upgradectl -t auto-upgrade -X /opt/software/GaussDB_Kernel/clusterconfig.xml --grey -h hostname0
    ```
    Example 2: Use the  **gs\_upgradectl**  script to perform multiple specified nodes upgrade.

    ```
    gs_upgradectl -t auto-upgrade -X /opt/software/GaussDB_Kernel/clusterconfig.xml --grey -h hostname0,hostname1
    ```

9.  If the database is normal, run the following command to perform the remaining nodes upgrade:

    ```
    gs_upgradectl -t auto-upgrade -X /opt/software/GaussDB_Kernel/clusterconfig.xml --grey --continue
    ```

