# Upgrade Preparation Checklist<a name="EN-US_TOPIC_0305491442"></a>

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
<td class="cellrowborder" valign="top" width="32.29%"><p id="p1799215303302"><a name="p1799215303302"></a><a name="p1799215303302"></a>Collect names and IP addresses of database nodes and passwords of users <strong id="b11976123763215"><a name="b11976123763215"></a><a name="b11976123763215"></a>root</strong> and <strong id="b1197663793210"><a name="b1197663793210"></a><a name="b1197663793210"></a>omm</strong>.</p>
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
