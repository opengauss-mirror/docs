# 命令参考<a name="ZH-CN_TOPIC_0000002294471365"></a>

**表 1**  gs\_dbmind component slow\_query\_diagnosis 命令行说明

<a name="zh-cn_topic_0000001714948813_table99309405415"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948813_row1693034011419"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714948813_p893012401447"><a name="zh-cn_topic_0000001714948813_p893012401447"></a><a name="zh-cn_topic_0000001714948813_p893012401447"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714948813_p129305403416"><a name="zh-cn_topic_0000001714948813_p129305403416"></a><a name="zh-cn_topic_0000001714948813_p129305403416"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714948813_p693018405410"><a name="zh-cn_topic_0000001714948813_p693018405410"></a><a name="zh-cn_topic_0000001714948813_p693018405410"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948813_row5930174015412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p149307406411"><a name="zh-cn_topic_0000001714948813_p149307406411"></a><a name="zh-cn_topic_0000001714948813_p149307406411"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p179309401845"><a name="zh-cn_topic_0000001714948813_p179309401845"></a><a name="zh-cn_topic_0000001714948813_p179309401845"></a>（可选）帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p39301240440"><a name="zh-cn_topic_0000001714948813_p39301240440"></a><a name="zh-cn_topic_0000001714948813_p39301240440"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row11910554101219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p1133111208135"><a name="zh-cn_topic_0000001714948813_p1133111208135"></a><a name="zh-cn_topic_0000001714948813_p1133111208135"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p18143163410134"><a name="zh-cn_topic_0000001714948813_p18143163410134"></a><a name="zh-cn_topic_0000001714948813_p18143163410134"></a>配置目录。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1616065113189"><a name="zh-cn_topic_0000001714948813_p1616065113189"></a><a name="zh-cn_topic_0000001714948813_p1616065113189"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row691203544017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p13888143916408"><a name="zh-cn_topic_0000001714948813_p13888143916408"></a><a name="zh-cn_topic_0000001714948813_p13888143916408"></a>--instance</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p4888739164010"><a name="zh-cn_topic_0000001714948813_p4888739164010"></a><a name="zh-cn_topic_0000001714948813_p4888739164010"></a>（可选）慢SQL所属实例。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p4888639154012"><a name="zh-cn_topic_0000001714948813_p4888639154012"></a><a name="zh-cn_topic_0000001714948813_p4888639154012"></a>格式为IP:PORT。样例：127.0.0.1:5432。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row10751163816401"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p128881439104017"><a name="zh-cn_topic_0000001714948813_p128881439104017"></a><a name="zh-cn_topic_0000001714948813_p128881439104017"></a>--database</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p128881839144019"><a name="zh-cn_topic_0000001714948813_p128881839144019"></a><a name="zh-cn_topic_0000001714948813_p128881839144019"></a>（可选）慢SQL关联的数据库。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p3888123911405"><a name="zh-cn_topic_0000001714948813_p3888123911405"></a><a name="zh-cn_topic_0000001714948813_p3888123911405"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row1027272717408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p12888133916405"><a name="zh-cn_topic_0000001714948813_p12888133916405"></a><a name="zh-cn_topic_0000001714948813_p12888133916405"></a>--schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p1988811395404"><a name="zh-cn_topic_0000001714948813_p1988811395404"></a><a name="zh-cn_topic_0000001714948813_p1988811395404"></a>（可选）慢SQL关联的schema，默认为public。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p3888639124014"><a name="zh-cn_topic_0000001714948813_p3888639124014"></a><a name="zh-cn_topic_0000001714948813_p3888639124014"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row1293018401245"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p5441135310139"><a name="zh-cn_topic_0000001714948813_p5441135310139"></a><a name="zh-cn_topic_0000001714948813_p5441135310139"></a>--query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p159301401846"><a name="zh-cn_topic_0000001714948813_p159301401846"></a><a name="zh-cn_topic_0000001714948813_p159301401846"></a>（可选）慢SQL文本。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p2620105261812"><a name="zh-cn_topic_0000001714948813_p2620105261812"></a><a name="zh-cn_topic_0000001714948813_p2620105261812"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p192811539157"><a name="zh-cn_topic_0000001714948813_p192811539157"></a><a name="zh-cn_topic_0000001714948813_p192811539157"></a>--start-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p1544145713182"><a name="zh-cn_topic_0000001714948813_p1544145713182"></a><a name="zh-cn_topic_0000001714948813_p1544145713182"></a>（可选）显示开始时间的时间戳，单位毫秒；或格式为 %Y-%m-%d %H:%M:%S 的日期时间。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1095712011916"><a name="zh-cn_topic_0000001714948813_p1095712011916"></a><a name="zh-cn_topic_0000001714948813_p1095712011916"></a>正整数或日期时间格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row81421205167"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p1114219081616"><a name="zh-cn_topic_0000001714948813_p1114219081616"></a><a name="zh-cn_topic_0000001714948813_p1114219081616"></a>--end-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p32119591900"><a name="zh-cn_topic_0000001714948813_p32119591900"></a><a name="zh-cn_topic_0000001714948813_p32119591900"></a>（可选）显示结束时间的时间戳，单位毫秒；或格式为 %Y-%m-%d %H:%M:%S 的日期时间。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p4217596010"><a name="zh-cn_topic_0000001714948813_p4217596010"></a><a name="zh-cn_topic_0000001714948813_p4217596010"></a>正整数或日期时间格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p9930640443"><a name="zh-cn_topic_0000001714948813_p9930640443"></a><a name="zh-cn_topic_0000001714948813_p9930640443"></a>--retention-days</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p7930154013410"><a name="zh-cn_topic_0000001714948813_p7930154013410"></a><a name="zh-cn_topic_0000001714948813_p7930154013410"></a>（可选）清理天数及结果。action为clean时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1595617014197"><a name="zh-cn_topic_0000001714948813_p1595617014197"></a><a name="zh-cn_topic_0000001714948813_p1595617014197"></a>实数（当其小于等于0时，会将结果全部删除）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row4360409379"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p54467115370"><a name="zh-cn_topic_0000001714948813_p54467115370"></a><a name="zh-cn_topic_0000001714948813_p54467115370"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p144462133714"><a name="zh-cn_topic_0000001714948813_p144462133714"></a><a name="zh-cn_topic_0000001714948813_p144462133714"></a>动作参数。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0000001714948813_ul13446151133719"></a><a name="zh-cn_topic_0000001714948813_ul13446151133719"></a><ul id="zh-cn_topic_0000001714948813_ul13446151133719"><li>show：结果展示。</li><li>clean：清理结果。</li><li>diagnosis：交互诊断。</li></ul>
</td>
</tr>
</tbody>
</table>

