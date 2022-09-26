# Preparing for and Checking the Upgrade<a name="EN-US_TOPIC_0305491450"></a>

This section describes preparations before the upgrade.

-   **[Upgrade Preparation Checklist](#upgrade-preparation-checklist)**  

-   **[Collecting Node Information](#collecting-node-information)**  

-   **[Backing Up Data](#backing-up-data)**  

-   **[Obtaining the Upgrade Packages](#obtaining-the-upgrade-packages)**  

-   **[Checking the OS Health Status](#checking-the-os-health-status)**  

-   **[Checking the Disk Usage of the Database Node](#checking-the-disk-usage-of-the-database-node)**  

-   **[Checking the Database Status](#checking-the-database-status)**  

## Upgrade Preparation Checklist

**Table  1**  Upgrade preparation checklist

<a name="toc218487220"></a>

<table><tbody><tr id="row32107897"><td class="cellrowborder" valign="top" width="6.29%"><p id="p09921330173014"><a name="p09921330173014"></a><a name="p09921330173014"></a>No.</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p9992930193018"><a name="p9992930193018"></a><a name="p9992930193018"></a>Item</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p999253013304"><a name="p999253013304"></a><a name="p999253013304"></a>Preparation Content</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p199233017302"><a name="p199233017302"></a><a name="p199233017302"></a>Recommended Start Time</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p39921430143016"><a name="p39921430143016"></a><a name="p39921430143016"></a>Required Time</p>
</td>
</tr>
<tr id="row49544030"><td class="cellrowborder" valign="top" width="6.29%"><p id="p17992330193012"><a name="p17992330193012"></a><a name="p17992330193012"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p599243013301"><a name="p599243013301"></a><a name="p599243013301"></a>Collect node information.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p1799215303302"><a name="p1799215303302"></a><a name="p1799215303302"></a>Collect the names, IP addresses, and passwords of users <strong>root</strong> and <strong>omm</strong> of the nodes involved in the database.
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p899353023018"><a name="p899353023018"></a><a name="p899353023018"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p39931530173020"><a name="p39931530173020"></a><a name="p39931530173020"></a>1 hour</p>
</td>
</tr>
<tr id="row48569804"><td class="cellrowborder" valign="top" width="6.29%"><p id="p193771747164311"><a name="p193771747164311"></a><a name="p193771747164311"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p13453193594318"><a name="p13453193594318"></a><a name="p13453193594318"></a>Set remote login of user <strong id="b64692044222919"><a name="b64692044222919"></a><a name="b64692044222919"></a>root</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p12454193511439"><a name="p12454193511439"></a><a name="p12454193511439"></a>Configure the configuration file to allow user <strong id="b175371140103213"><a name="b175371140103213"></a><a name="b175371140103213"></a>root</strong> to remotely log in.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1580510489499"><a name="p1580510489499"></a><a name="p1580510489499"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1080634812491"><a name="p1080634812491"></a><a name="p1080634812491"></a>2 hours</p>
</td>
</tr>
<tr id="row10345152973019"><td class="cellrowborder" valign="top" width="6.29%"><p id="p7377194712436"><a name="p7377194712436"></a><a name="p7377194712436"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p8993153053014"><a name="p8993153053014"></a><a name="p8993153053014"></a>Back up data.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p189939306304"><a name="p189939306304"></a><a name="p189939306304"></a>For details, see section "Backup and Restoration" in the <em id="i122031043193210"><a name="i122031043193210"></a><a name="i122031043193210"></a>Administrator Guide</em>.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p17993143018306"><a name="p17993143018306"></a><a name="p17993143018306"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p79931230123014"><a name="p79931230123014"></a><a name="p79931230123014"></a>The required time varies according to the backup data volume and solution.</p>
</td>
</tr>
<tr id="row1360191311596"><td class="cellrowborder" valign="top" width="6.29%"><p id="p1061292910599"><a name="p1061292910599"></a><a name="p1061292910599"></a>4</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p19668321165913"><a name="p19668321165913"></a><a name="p19668321165913"></a>Obtain and verify an upgrade software package.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p13668182145913"><a name="p13668182145913"></a><a name="p13668182145913"></a>Obtain an upgrade software package and verify its integrity.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p166816214595"><a name="p166816214595"></a><a name="p166816214595"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p11669221115916"><a name="p11669221115916"></a><a name="p11669221115916"></a>0.5 hours</p>
</td>
</tr>
<tr id="row12711526143011"><td class="cellrowborder" valign="top" width="6.29%"><p id="p961292910598"><a name="p961292910598"></a><a name="p961292910598"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p799383019308"><a name="p799383019308"></a><a name="p799383019308"></a>Check the OS health status.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p299312304302"><a name="p299312304302"></a><a name="p299312304302"></a>Use the <strong id="b755415093315"><a name="b755415093315"></a><a name="b755415093315"></a>gs_checkos</strong> tool to check the OS status.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p6993193013309"><a name="p6993193013309"></a><a name="p6993193013309"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p399433083016"><a name="p399433083016"></a><a name="p399433083016"></a>0.5 hours</p>
</td>
</tr>
<tr id="row2049422216308"><td class="cellrowborder" valign="top" width="6.29%"><p id="p6612102995913"><a name="p6612102995913"></a><a name="p6612102995913"></a>6</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p999473010306"><a name="p999473010306"></a><a name="p999473010306"></a>Check the disk usage of the database node.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p699412308302"><a name="p699412308302"></a><a name="p699412308302"></a>Run the <strong id="b9177087342"><a name="b9177087342"></a><a name="b9177087342"></a>df</strong> command to check the disk usage.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1199414300302"><a name="p1199414300302"></a><a name="p1199414300302"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p99941830113013"><a name="p99941830113013"></a><a name="p99941830113013"></a>0.5 hours</p>
</td>
</tr>
<tr id="row13252584"><td class="cellrowborder" valign="top" width="6.29%"><p id="p29464423430"><a name="p29464423430"></a><a name="p29464423430"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%"><p id="p1267316503111"><a name="p1267316503111"></a><a name="p1267316503111"></a>Check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%"><p id="p1367145173117"><a name="p1367145173117"></a><a name="p1367145173117"></a>Use the gs_om tool to check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p91307043217"><a name="p91307043217"></a><a name="p91307043217"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p121309023213"><a name="p121309023213"></a><a name="p121309023213"></a>0.5 hours</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Time required varies according to the particulars for the site \(such as the data volume and server performance\).

## Collecting Node Information

Contact the database system administrator to obtain names and IP addresses of database nodes. You have obtained the passwords of users  **root**  and  **omm**  for logging in to the nodes, as shown in  [Table 1](#toc218487220).

**Table  1**  Node information

<a name="toc218487220"></a>

<table><thead align="left"><tr id="row32107897"><th class="cellrowborder" valign="top" width="6.34%" id="mcps1.2.7.1.1"><p id="p50602835"><a name="p50602835"></a><a name="p50602835"></a>No.</p>
</th>
<th class="cellrowborder" valign="top" width="15.18%" id="mcps1.2.7.1.2"><p id="p5188953"><a name="p5188953"></a><a name="p5188953"></a>Node Name</p>
</th>
<th class="cellrowborder" valign="top" width="34.72%" id="mcps1.2.7.1.3"><p id="p17652085"><a name="p17652085"></a><a name="p17652085"></a>Node IP Address</p>
</th>
<th class="cellrowborder" valign="top" width="18.12%" id="mcps1.2.7.1.4"><p id="p52539912"><a name="p52539912"></a><a name="p52539912"></a>Password of User <strong id="b33285994722851"><a name="b33285994722851"></a><a name="b33285994722851"></a>root</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.12%" id="mcps1.2.7.1.5"><p id="p27874513"><a name="p27874513"></a><a name="p27874513"></a>Password of User <strong id="b120292277022851"><a name="b120292277022851"></a><a name="b120292277022851"></a>omm</strong></p>
</th>
<th class="cellrowborder" valign="top" width="7.5200000000000005%" id="mcps1.2.7.1.6"><p id="p1635924414169"><a name="p1635924414169"></a><a name="p1635924414169"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="row49544030"><td class="cellrowborder" valign="top" width="6.34%" headers="mcps1.2.7.1.1 "><p id="p53643460"><a name="p53643460"></a><a name="p53643460"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="15.18%" headers="mcps1.2.7.1.2 "><p id="p50153003"><a name="p50153003"></a><a name="p50153003"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.72%" headers="mcps1.2.7.1.3 "><p id="p35861434"><a name="p35861434"></a><a name="p35861434"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="18.12%" headers="mcps1.2.7.1.4 "><p id="p3196531"><a name="p3196531"></a><a name="p3196531"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="18.12%" headers="mcps1.2.7.1.5 "><p id="p57592428"><a name="p57592428"></a><a name="p57592428"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.7.1.6 "><p id="p3359114421610"><a name="p3359114421610"></a><a name="p3359114421610"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Backing Up Data

If the upgrade fails, services may be affected. Back up data in advance so that services can be restored as soon as possible after a failure occurs.

For details, see section "Backup and Restoration" in the  *Administrator Guide*.

## Obtaining the Upgrade Packages

https://opengauss.org/en/download.html

Obtain the upgrade package from the website.

## Checking the OS Health Status

Use the  **gs\_checkos**  tool to check the OS status.

### Prerequisites<a name="section16375145913200"></a>

- The hardware and network are working properly.

- The trust relationship of user  **root**  among the hosts is normal.

- Only user  **root**  is authorized to run the  **gs\_checkos**  command.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >This tool cannot be independently invoked. For security purposes, it is automatically deleted after the preinstallation is complete.


### Procedure<a name="section1990781914214"></a>

1. Log in to a server as user  **root**.

2. Run the following command to check OS parameters of the server:

   ```
   gs_checkos -i A
   ```

   Check the OS parameters to ensure that the database has passed the pre-installation check and can efficiently operate after it is installed. For details about the check items, see "**Server Tools**  \>  **gs\_checkos**  \>  **Table 1 OS check items**" in the  *Tool Reference*.

## Checking the Disk Usage of the Database Node

You are advised to perform the upgrade when the disk usage of the database node is less than 80%.

## Checking the Database Status

This section describes how to query the database status.

### Procedure<a name="section117172026191017"></a>

1. Log in to the node as the database user \(for example,  **omm**\) and run the  **source**  command to set the environment variables.

2. Run the following command to check the database status:

   ```
   gs_om -t status
   ```

3. Ensure that the database is normal.
