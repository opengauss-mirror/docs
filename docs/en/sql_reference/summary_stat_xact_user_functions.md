# SUMMARY\_STAT\_XACT\_USER\_FUNCTIONS<a name="EN-US_TOPIC_0245374714"></a>

**SUMMARY\_STAT\_XACT\_USER\_FUNCTIONS**  displays statistics about function executions in transactions in openGauss. 

**Table  1**  SUMMARY\_STAT\_XACT\_USER\_FUNCTIONS columns

<a name="en-us_topic_0237122610_table159711618712"></a>
<table><thead align="left"><tr id="en-us_topic_0237122610_row11512071070"><th class="cellrowborder" valign="top" width="18.43%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122610_p95111717716"><a name="en-us_topic_0237122610_p95111717716"></a><a name="en-us_topic_0237122610_p95111717716"></a><strong id="b1818214311552"><a name="b1818214311552"></a><a name="b1818214311552"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122610_p852771274"><a name="en-us_topic_0237122610_p852771274"></a><a name="en-us_topic_0237122610_p852771274"></a><strong id="b197979318559"><a name="b197979318559"></a><a name="b197979318559"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.699999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122610_p352167872"><a name="en-us_topic_0237122610_p352167872"></a><a name="en-us_topic_0237122610_p352167872"></a><strong id="b7673114125515"><a name="b7673114125515"></a><a name="b7673114125515"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122610_row6525715715"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122610_p20521713712"><a name="en-us_topic_0237122610_p20521713712"></a><a name="en-us_topic_0237122610_p20521713712"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122610_p135277774"><a name="en-us_topic_0237122610_p135277774"></a><a name="en-us_topic_0237122610_p135277774"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122610_p952478715"><a name="en-us_topic_0237122610_p952478715"></a><a name="en-us_topic_0237122610_p952478715"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0237122610_row155310718714"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122610_p8531071873"><a name="en-us_topic_0237122610_p8531071873"></a><a name="en-us_topic_0237122610_p8531071873"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122610_p1453172714"><a name="en-us_topic_0237122610_p1453172714"></a><a name="en-us_topic_0237122610_p1453172714"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122610_p19531972711"><a name="en-us_topic_0237122610_p19531972711"></a><a name="en-us_topic_0237122610_p19531972711"></a>Function name</p>
</td>
</tr>
<tr id="en-us_topic_0237122610_row253579719"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122610_p45320716711"><a name="en-us_topic_0237122610_p45320716711"></a><a name="en-us_topic_0237122610_p45320716711"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122610_p8531778718"><a name="en-us_topic_0237122610_p8531778718"></a><a name="en-us_topic_0237122610_p8531778718"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122610_p2539719713"><a name="en-us_topic_0237122610_p2539719713"></a><a name="en-us_topic_0237122610_p2539719713"></a>Number of times that the function has been called</p>
</td>
</tr>
<tr id="en-us_topic_0237122610_row1153971479"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122610_p19541372720"><a name="en-us_topic_0237122610_p19541372720"></a><a name="en-us_topic_0237122610_p19541372720"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122610_p1755577716"><a name="en-us_topic_0237122610_p1755577716"></a><a name="en-us_topic_0237122610_p1755577716"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122610_p555197773"><a name="en-us_topic_0237122610_p555197773"></a><a name="en-us_topic_0237122610_p555197773"></a>Total time spent in the function and all other functions called by it</p>
</td>
</tr>
<tr id="en-us_topic_0237122610_row55515719711"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122610_p7559719716"><a name="en-us_topic_0237122610_p7559719716"></a><a name="en-us_topic_0237122610_p7559719716"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122610_p9551571877"><a name="en-us_topic_0237122610_p9551571877"></a><a name="en-us_topic_0237122610_p9551571877"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122610_p13561777719"><a name="en-us_topic_0237122610_p13561777719"></a><a name="en-us_topic_0237122610_p13561777719"></a>Total time spent in the function itself, excluding other functions called by it</p>
</td>
</tr>
</tbody>
</table>

