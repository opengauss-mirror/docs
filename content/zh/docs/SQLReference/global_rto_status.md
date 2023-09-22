# global\_rto\_status

global\_rto\_status视图显示关于主机和备机的日志流控信息（本节点除外、备DN上不可使用）。

**表 1**  remote\_rto\_status参数说明

<a name="table10801171214386"></a>
<table><thead align="left"><tr id="row1580101219385"><th class="cellrowborder" valign="top" width="16.03160316031603%" id="mcps1.2.4.1.1"><p id="p08016122388"><a name="p08016122388"></a><a name="p08016122388"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="11.941194119411943%" id="mcps1.2.4.1.2"><p id="p208011312193819"><a name="p208011312193819"></a><a name="p208011312193819"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="72.02720272027202%" id="mcps1.2.4.1.3"><p id="p19802101212385"><a name="p19802101212385"></a><a name="p19802101212385"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1180281283818"><td class="cellrowborder" valign="top" width="16.03160316031603%" headers="mcps1.2.4.1.1 "><p id="p128021612193813"><a name="p128021612193813"></a><a name="p128021612193813"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="11.941194119411943%" headers="mcps1.2.4.1.2 "><p id="p1980211223816"><a name="p1980211223816"></a><a name="p1980211223816"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="72.02720272027202%" headers="mcps1.2.4.1.3 "><p id="p1780241243813"><a name="p1780241243813"></a><a name="p1780241243813"></a>节点的名称，包含主机和备机。</p>
</td>
</tr>
<tr id="row48029122388"><td class="cellrowborder" valign="top" width="16.03160316031603%" headers="mcps1.2.4.1.1 "><p id="p1280271213386"><a name="p1280271213386"></a><a name="p1280271213386"></a>rto_info</p>
</td>
<td class="cellrowborder" valign="top" width="11.941194119411943%" headers="mcps1.2.4.1.2 "><p id="p19802412183820"><a name="p19802412183820"></a><a name="p19802412183820"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="72.02720272027202%" headers="mcps1.2.4.1.3 "><p id="p10802121233818"><a name="p10802121233818"></a><a name="p10802121233818"></a>流控的信息，包含了备机当前的日志流控时间（单位：秒），备机通过GUC参数设置的预期流控时间（单位：秒），为了达到这个预期主机所需要的睡眠时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

