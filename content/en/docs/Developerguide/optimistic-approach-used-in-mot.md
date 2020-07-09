# Optimistic Approach – Used in MOT<a name="EN-US_TOPIC_0260488157"></a>

The following is an example of the Optimistic approach.

It describes the situation of creating a MOT table4 and then having two concurrent sessions updating that same MOT table simultaneously

```
create foreign table test (x int, y int, z int, primary key(x));
```

-   The advantage and user experience of OCC is that there are no locks until COMMIT.
-   The disadvantage of using OCC is that the update may fail if another session updates the same record. If the update fails \(in all supported isolation levels\), an entire SESSION \#2 transaction must be retried.
-   Update conflicts are detected by the kernel at commit time by using a version checking mechanism.
-   SESSION \#2 will not wait in its update operation and will be aborted because of conflict detection at commit phase.

**Table  1**  Optimistic Approach Code Example – Used in MOT

<a name="table21598644"></a>
<table><thead align="left"><tr id="row7143942"><th class="cellrowborder" valign="top" width="11.219999999999999%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="41.839999999999996%" id="mcps1.2.4.1.2"><p id="p29418453"><a name="p29418453"></a><a name="p29418453"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="46.94%" id="mcps1.2.4.1.3"><p id="p34084463"><a name="p34084463"></a><a name="p34084463"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="row9378101"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p21428753"><a name="p21428753"></a><a name="p21428753"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p58007400"><a name="p58007400"></a><a name="p58007400"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p978980"><a name="p978980"></a><a name="p978980"></a>Begin</p>
</td>
</tr>
<tr id="row8810828"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p42588442"><a name="p42588442"></a><a name="p42588442"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p27111744"><a name="p27111744"></a><a name="p27111744"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row34455714"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p39449453"><a name="p39449453"></a><a name="p39449453"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p41289100"><a name="p41289100"></a><a name="p41289100"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p56082792"><a name="p56082792"></a><a name="p56082792"></a>Update test set y=300 where x=1;</p>
</td>
</tr>
<tr id="row34983080"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p15057193"><a name="p15057193"></a><a name="p15057193"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p11673115"><a name="p11673115"></a><a name="p11673115"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p5998245"><a name="p5998245"></a><a name="p5998245"></a>y = 300</p>
</td>
</tr>
<tr id="row53984211"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p48506919"><a name="p48506919"></a><a name="p48506919"></a>Commit</p>
</td>
</tr>
<tr id="row33909092"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p5812540"><a name="p5812540"></a><a name="p5812540"></a>ABORT</p>
</td>
</tr>
<tr id="row52312865"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p12316475"><a name="p12316475"></a><a name="p12316475"></a>y = 200</p>
</td>
</tr>
</tbody>
</table>

