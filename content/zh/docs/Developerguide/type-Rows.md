# type Rows<a name="ZH-CN_TOPIC_0000001277009037"></a>

type Rows如下表所示。

<a name="table20368115713372"></a>
<table><tbody><tr id="row1398757173719"><td class="cellrowborder" valign="top" width="32.83%"><p id="p1839855717379"><a name="p1839855717379"></a><a name="p1839855717379"></a><strong id="b4398205783720"><a name="b4398205783720"></a><a name="b4398205783720"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p4399145715371"><a name="p4399145715371"></a><a name="p4399145715371"></a><strong id="b139975716379"><a name="b139975716379"></a><a name="b139975716379"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1339912571373"><a name="p1339912571373"></a><a name="p1339912571373"></a><strong id="b2039910579374"><a name="b2039910579374"></a><a name="b2039910579374"></a>返回值</strong></p>
</td>
</tr>
<tr id="row3399185753713"><td class="cellrowborder" valign="top" width="32.83%"><p id="p73991157183718"><a name="p73991157183718"></a><a name="p73991157183718"></a>(rs *Rows)Close()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p9399157113710"><a name="p9399157113710"></a><a name="p9399157113710"></a>关闭Rows，停止对数据集的迭代。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p10399145793719"><a name="p10399145793719"></a><a name="p10399145793719"></a>error</p>
</td>
</tr>
<tr id="row3399145773715"><td class="cellrowborder" valign="top" width="32.83%"><p id="p339935773714"><a name="p339935773714"></a><a name="p339935773714"></a>(rs *Rows)ColumnTypes()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p1139935717373"><a name="p1139935717373"></a><a name="p1139935717373"></a>返回列信息。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p839910571378"><a name="p839910571378"></a><a name="p839910571378"></a>[]*ColumnType, error</p>
</td>
</tr>
<tr id="row43991757193712"><td class="cellrowborder" valign="top" width="32.83%"><p id="p13991257123712"><a name="p13991257123712"></a><a name="p13991257123712"></a>(rs *Rows)Columns()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p103991657143713"><a name="p103991657143713"></a><a name="p103991657143713"></a>返回各个列的名字。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p11399115719370"><a name="p11399115719370"></a><a name="p11399115719370"></a>[]string, error</p>
</td>
</tr>
<tr id="row183991457123710"><td class="cellrowborder" valign="top" width="32.83%"><p id="p17399125718376"><a name="p17399125718376"></a><a name="p17399125718376"></a>(rs *Rows)Err()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p439905720378"><a name="p439905720378"></a><a name="p439905720378"></a>返回迭代过程中出现的任何错误。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p13993571372"><a name="p13993571372"></a><a name="p13993571372"></a>error</p>
</td>
</tr>
<tr id="row1239935716371"><td class="cellrowborder" valign="top" width="32.83%"><p id="p1399125717371"><a name="p1399125717371"></a><a name="p1399125717371"></a>(rs *Rows)Next()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p1039911575377"><a name="p1039911575377"></a><a name="p1039911575377"></a>为Scan方法准备好下一个待读取的数据行。如果有进一步的结果集，则返回true，否则返回false。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p7399115763720"><a name="p7399115763720"></a><a name="p7399115763720"></a>bool</p>
</td>
</tr>
<tr id="row20399155718372"><td class="cellrowborder" valign="top" width="32.83%"><p id="p43991257173717"><a name="p43991257173717"></a><a name="p43991257173717"></a>(rs *Rows)Scan(dest ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p17399175783711"><a name="p17399175783711"></a><a name="p17399175783711"></a>将当前被迭代数据行的各个列复制到dest指向的值中。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p123991257173714"><a name="p123991257173714"></a><a name="p123991257173714"></a>error</p>
</td>
</tr>
<tr id="row1239915578377"><td class="cellrowborder" valign="top" width="32.83%"><p id="p13399125716371"><a name="p13399125716371"></a><a name="p13399125716371"></a>(rs *Rows)NextResultSet()</p>
</td>
<td class="cellrowborder" valign="top" width="46.81%"><p id="p143991157113717"><a name="p143991157113717"></a><a name="p143991157113717"></a>判断是否有进一步的结果集</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p19399125719376"><a name="p19399125719376"></a><a name="p19399125719376"></a><span id="ph104485314257"><a name="ph104485314257"></a><a name="ph104485314257"></a>b</span>ool</p>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="section6278171671713"></a>

<a name="table237535733717"></a>
<table><tbody><tr id="row17399557193711"><td class="cellrowborder" valign="top" width="22.2%"><p id="p539965713711"><a name="p539965713711"></a><a name="p539965713711"></a><strong id="b143991357153720"><a name="b143991357153720"></a><a name="b143991357153720"></a>参数</strong></p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p83991573373"><a name="p83991573373"></a><a name="p83991573373"></a><strong id="b239965743713"><a name="b239965743713"></a><a name="b239965743713"></a>参数说明</strong></p>
</td>
</tr>
<tr id="row1439918573371"><td class="cellrowborder" valign="top" width="22.2%"><p id="p12399145716370"><a name="p12399145716370"></a><a name="p12399145716370"></a>dest</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p9399757193711"><a name="p9399757193711"></a><a name="p9399757193711"></a>查询列需要被复制到该参数指向的值</p>
</td>
</tr>
</tbody>
</table>

