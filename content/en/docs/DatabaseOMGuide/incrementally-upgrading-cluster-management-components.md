# Incrementally Upgrading Cluster Management Components<a name=""></a>

This chapter describes how to incrementally upgrade cluster management components.

## Procedure<a name=""></a>

-   **[Preparing for and Checking the Cluster Management Component Upgrade](#preparing-for-and-checking-the-cluster-management-component-upgrade)** 
-   **[Upgrading Cluster Management Components](#upgrading-cluster-management-components)**
-   **[Checking Cluster Management Components After the Upgrade](#checking-cluster-management-components-after-the-upgrade)** 

Precautions for incrementally upgrading cluster management components:

-   The incremental upgrade cannot be performed together with node scaling.
-   Pre-upgrade operations are not required for the incremental upgrade. For details about how to upgrade cluster management components, see example 6 in [gs_upgradectl](../ToolandCommandReference/gs_upgradectl.md).
-   You are advised to upgrade cluster management components during off-peak hours of the database system.
-   The incremental upgrade needs to be performed using the official component package.
-   Before upgrading cluster management components, ensure that nodes in the cluster can communicate with each other. You can run the **ssh** command on each node to check whether the communication is normal.
-   --**--upgrade-package** is a parameter that specifies the path of the cluster management upgrade package. Before the upgrade, check whether the permissions (owner, owner group, and read/write) on the upgrade package are normal.
-   If you add nodes (using gs\_expansion) after the cluster management component is upgraded, you are advised to upgrade the cluster management components again after adding nodes to ensure that the cluster management components of all nodes are consistent.

## Preparing for and Checking the Cluster Management Component Upgrade

**Table 1** Preparations for upgrading cluster management components

<a name="toc218487220"></a>

<table><tbody>
<tr id="row32107897"><td class="cellrowborder" valign="top" width="6.29%"><p id="p09921330173014"><a name="p09921330173014"></a><a name="p09921330173014"></a><b>No.</b></p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p9992930193018"><a name="p9992930193018"></a><a name="p9992930193018"></a><b>Item</b></p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p999253013304"><a name="p999253013304"></a><a name="p999253013304"></a><b>Preparation Content</b></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p199233017302"><a name="p199233017302"></a><a name="p199233017302"></a><b>Recommended Start Time </b></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p39921430143016"><a name="p39921430143016"></a><a name="p39921430143016"></a><b>Time Required (Days/Hours/Minutes)</b></p>
</td>
</tr>
<tr id="row1360191311596"><td class="cellrowborder" valign="top" width="6.29%"><p id="p1061292910599"><a name="p1061292910599"></a><a name="p1061292910599"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p19668321165913"><a name="p19668321165913"></a><a name="p19668321165913"></a>Check whether the installation version supports the upgrade of cluster management components.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p13668182145913"><a name="p13668182145913"></a><a name="p13668182145913"></a>Check whether the help information of gs\_upgrade contains the upgrade-cm function.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p166816214595"><a name="p166816214595"></a><a name="p166816214595"></a>1 hour before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p11669221115916"><a name="p11669221115916"></a>2 minutes</p>
</td>
</tr>
<tr id="row1360191311596"><td class="cellrowborder" valign="top" width="6.29%"><p id="p1061292910599"><a name="p1061292910599"></a><a name="p1061292910599"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p19668321165913"><a name="p19668321165913"></a><a name="p19668321165913"></a>Obtain and verify the cluster management component upgrade package.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p13668182145913"><a name="p13668182145913"></a><a name="p13668182145913"></a>Obtain an upgrade software package and verify its integrity.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p166816214595"><a name="p166816214595"></a><a name="p166816214595"></a>1 hour before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p11669221115916"><a name="p11669221115916"></a><a name="p11669221115916"></a>15 minutes</p>
</td>
</tr>
<tr id="row12711526143011"><td class="cellrowborder" valign="top" width="6.29%"><p id="p961292910598"><a name="p961292910598"></a><a name="p961292910598"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p799383019308"><a name="p799383019308"></a><a name="p799383019308"></a>Check the OS health status.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p299312304302"><a name="p299312304302"></a><a name="p299312304302"></a>Use the gs\_checkos tool to check the OS status.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p6993193013309"><a name="p6993193013309"></a><a name="p6993193013309"></a>1 hour before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p399433083016"><a name="p399433083016"></a><a name="p399433083016"></a>15 minutes</p>
</td>
</tr>
<tr id="row2049422216308"><td class="cellrowborder" valign="top" width="6.29%"><p id="p6612102995913"><a name="p6612102995913"></a><a name="p6612102995913"></a>4</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p999473010306"><a name="p999473010306"></a><a name="p999473010306"></a>Check the disk usage of the database node.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p699412308302"><a name="p699412308302"></a><a name="p699412308302"></a>Run the <strong>df</strong> command to check the disk usage.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1199414300302"><a name="p1199414300302"></a><a name="p1199414300302"></a>1 hour before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p99941830113013"><a name="p99941830113013"></a><a name="p99941830113013"></a>5 minutes</p>
</td>
</tr>
<tr id="row13252584"><td class="cellrowborder" valign="top" width="6.29%"><p id="p29464423430"><a name="p29464423430"></a><a name="p29464423430"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p1267316503111"><a name="p1267316503111"></a><a name="p1267316503111"></a>Check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p1367145173117"><a name="p1367145173117"></a><a name="p1367145173117"></a>Use the gs\_om tool to check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p91307043217"><a name="p91307043217"></a><a name="p91307043217"></a>Pre-upgrade check</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p121309023213"><a name="p121309023213"></a><a name="p121309023213"></a>2 minutes</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **Note:**
>For details about items 2 to 5 in Table 1, see [Preparing for and Checking the Upgrade](preparing-for-and-checking-the-upgrade.md).
## Checking Whether the Installation Version Supports the Upgrade of Cluster Management Components

Log in to the node where cluster management components are upgraded, run the **gs\_upgradectl --help** command, and check whether the value of **-t** in the help information contains the **upgrade-cm** option.


## Upgrading Cluster Management Components
<a name="section17506731105516"></a>

1.  Log in to the node as the cluster user **omm**.
2.  Create an upgrade package directory.

    ```
    mkdir -p /opt/software/cm_upgrade
    ```

3.  Upload the new package to the **/opt/software/cm_upgrade** directory.
4.  Upgrade the cluster management components. (The package **openGauss-3.1.3-CentOS-64bit-cm.tar.gz** is used as an example. During actual operations, use the package uploaded in step 2.)

    ```
    gs_upgradectl -t upgrade-cm --upgrade-package /opt/software/cm_upgrade/openGauss-3.1.3-CentOS-64bit-cm.tar.gz
    ```

## Checking Cluster Management Components After the Upgrade

1.  Use the cm\_ctl tool to check whether the cluster status is the same as that before the upgrade or whether the availability status is higher than that before the upgrade.

    ```
    cm_ctl query -Cvd
    ```

2.  Check whether the backup cluster management component package is generated in the temporary directory of the cluster.

    ```
    ll $PGHOST
    ```

3.  Check the version of the cluster management components.
    ```
    cm_ctl -V
    ```
>![](public_sys-resources/icon-note.gif) **Note:**
>After cluster management components are upgraded and nodes are added, the cluster management components on new nodes are not upgraded. You need to upgrade the cluster management components again to upgrade the components on new nodes.
