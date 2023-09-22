# SUMMARY\_STAT\_XACT\_USER\_FUNCTIONS

视图包含openGauss内汇聚的本事务内函数执行的统计信息。

**表 1**  SUMMARY\_STAT\_XACT\_USER\_FUNCTIONS字段

<a name="zh-cn_topic_0237122610_table159711618712"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122610_row11512071070"><th class="cellrowborder" valign="top" width="18.43%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122610_p95111717716"><a name="zh-cn_topic_0237122610_p95111717716"></a><a name="zh-cn_topic_0237122610_p95111717716"></a><strong id="zh-cn_topic_0237122610_b7521276720"><a name="zh-cn_topic_0237122610_b7521276720"></a><a name="zh-cn_topic_0237122610_b7521276720"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122610_p852771274"><a name="zh-cn_topic_0237122610_p852771274"></a><a name="zh-cn_topic_0237122610_p852771274"></a><strong id="zh-cn_topic_0237122610_b752371476"><a name="zh-cn_topic_0237122610_b752371476"></a><a name="zh-cn_topic_0237122610_b752371476"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.699999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122610_p352167872"><a name="zh-cn_topic_0237122610_p352167872"></a><a name="zh-cn_topic_0237122610_p352167872"></a><strong id="zh-cn_topic_0237122610_b752076711"><a name="zh-cn_topic_0237122610_b752076711"></a><a name="zh-cn_topic_0237122610_b752076711"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122610_row6525715715"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122610_p20521713712"><a name="zh-cn_topic_0237122610_p20521713712"></a><a name="zh-cn_topic_0237122610_p20521713712"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122610_p135277774"><a name="zh-cn_topic_0237122610_p135277774"></a><a name="zh-cn_topic_0237122610_p135277774"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122610_p952478715"><a name="zh-cn_topic_0237122610_p952478715"></a><a name="zh-cn_topic_0237122610_p952478715"></a>模式的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122610_row155310718714"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122610_p8531071873"><a name="zh-cn_topic_0237122610_p8531071873"></a><a name="zh-cn_topic_0237122610_p8531071873"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122610_p1453172714"><a name="zh-cn_topic_0237122610_p1453172714"></a><a name="zh-cn_topic_0237122610_p1453172714"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122610_p19531972711"><a name="zh-cn_topic_0237122610_p19531972711"></a><a name="zh-cn_topic_0237122610_p19531972711"></a>函数名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122610_row253579719"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122610_p45320716711"><a name="zh-cn_topic_0237122610_p45320716711"></a><a name="zh-cn_topic_0237122610_p45320716711"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122610_p8531778718"><a name="zh-cn_topic_0237122610_p8531778718"></a><a name="zh-cn_topic_0237122610_p8531778718"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122610_p2539719713"><a name="zh-cn_topic_0237122610_p2539719713"></a><a name="zh-cn_topic_0237122610_p2539719713"></a>函数被调用的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122610_row1153971479"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122610_p19541372720"><a name="zh-cn_topic_0237122610_p19541372720"></a><a name="zh-cn_topic_0237122610_p19541372720"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122610_p1755577716"><a name="zh-cn_topic_0237122610_p1755577716"></a><a name="zh-cn_topic_0237122610_p1755577716"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122610_p555197773"><a name="zh-cn_topic_0237122610_p555197773"></a><a name="zh-cn_topic_0237122610_p555197773"></a>函数的总执行时长。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122610_row55515719711"><td class="cellrowborder" valign="top" width="18.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122610_p7559719716"><a name="zh-cn_topic_0237122610_p7559719716"></a><a name="zh-cn_topic_0237122610_p7559719716"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122610_p9551571877"><a name="zh-cn_topic_0237122610_p9551571877"></a><a name="zh-cn_topic_0237122610_p9551571877"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.699999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122610_p13561777719"><a name="zh-cn_topic_0237122610_p13561777719"></a><a name="zh-cn_topic_0237122610_p13561777719"></a>当前线程调用函数的总的时长。</p>
</td>
</tr>
</tbody>
</table>

