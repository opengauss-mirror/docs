# 命令参考

**表 1**  gs\_dbmind component forecast 命令行说明

<a name="table99309405415"></a>
<table><thead align="left"><tr id="row1693034011419"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p893012401447"><a name="p893012401447"></a><a name="p893012401447"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p129305403416"><a name="p129305403416"></a><a name="p129305403416"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p693018405410"><a name="p693018405410"></a><a name="p693018405410"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row5930174015412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p149307406411"><a name="p149307406411"></a><a name="p149307406411"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p179309401845"><a name="p179309401845"></a><a name="p179309401845"></a>帮助命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p39301240440"><a name="p39301240440"></a><a name="p39301240440"></a>-</p>
</td>
</tr>
<tr id="row12300134621117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87747524110"><a name="p87747524110"></a><a name="p87747524110"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14426194115176"><a name="p14426194115176"></a><a name="p14426194115176"></a>动作参数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul950211292914"></a><a name="ul950211292914"></a><ul id="ul950211292914"><li>show：结果展示</li><li>clean：清理结果</li><li>early-warning：进行报警</li></ul>
</td>
</tr>
<tr id="row11910554101219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1133111208135"><a name="p1133111208135"></a><a name="p1133111208135"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18143163410134"><a name="p18143163410134"></a><a name="p18143163410134"></a>配置目录</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1616065113189"><a name="p1616065113189"></a><a name="p1616065113189"></a>-</p>
</td>
</tr>
<tr id="row1293018401245"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5441135310139"><a name="p5441135310139"></a><a name="p5441135310139"></a>--metric-name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p159301401846"><a name="p159301401846"></a><a name="p159301401846"></a>指定显示指标名，用于过滤</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2620105261812"><a name="p2620105261812"></a><a name="p2620105261812"></a>-</p>
</td>
</tr>
<tr id="row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p25301029171419"><a name="p25301029171419"></a><a name="p25301029171419"></a>--host</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3530729111413"><a name="p3530729111413"></a><a name="p3530729111413"></a>指定服务IP和端口号，用于过滤</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2800853131818"><a name="p2800853131818"></a><a name="p2800853131818"></a>-</p>
</td>
</tr>

<tr id="row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p25301029171419"><a name="p25301029171419"></a><a name="p25301029171419"></a>--labels</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3530729111413"><a name="p3530729111413"></a><a name="p3530729111413"></a>报警信息使用的标签，格式为键值对，以逗号分隔</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2800853131818"><a name="p2800853131818"></a><a name="p2800853131818"></a>-</p>
</td>
</tr>

<tr id="row627105315153"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p192811539157"><a name="p192811539157"></a><a name="p192811539157"></a>--start-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1544145713182"><a name="p1544145713182"></a><a name="p1544145713182"></a>显示开始时间的时间戳，单位毫秒；或日期时间格式为 %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1095712011916"><a name="p1095712011916"></a><a name="p1095712011916"></a>正整数或日期时间格式</p>
</td>
</tr>
<tr id="row81421205167"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1114219081616"><a name="p1114219081616"></a><a name="p1114219081616"></a>--end-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18836027812"><a name="p18836027812"></a><a name="p18836027812"></a>显示开始时间的时间戳，单位毫秒；或日期时间格式为 %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p383632711114"><a name="p383632711114"></a><a name="p383632711114"></a>正整数或日期时间格式</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--retention-days</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>保留结果天数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>非负实数</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--upper</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>报警阈值上限</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>实数</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--lower</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>报警阈值下限</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>实数</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--warning-hours</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>预测值报警的时间范围，单位为小时</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>正整数</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--csv-dump-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>结果导出的csv文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>-</p>
</td>
</tr>
</tbody>
</table>

