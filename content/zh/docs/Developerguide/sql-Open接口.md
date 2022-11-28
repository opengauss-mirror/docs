# sql.Open接口<a name="ZH-CN_TOPIC_0000001277168801"></a>

sql.Open接口如下表所示。

<a name="table7220115310349"></a>
<table><tbody><tr id="row1285135317342"><td class="cellrowborder" valign="top" width="35.24%"><p id="p1328575393411"><a name="p1328575393411"></a><a name="p1328575393411"></a><strong id="b328515318347"><a name="b328515318347"></a><a name="b328515318347"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="44.43%"><p id="p92851753153412"><a name="p92851753153412"></a><a name="p92851753153412"></a><strong id="b528518535345"><a name="b528518535345"></a><a name="b528518535345"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.330000000000002%"><p id="p1128520535340"><a name="p1128520535340"></a><a name="p1128520535340"></a><strong id="b7285145317346"><a name="b7285145317346"></a><a name="b7285145317346"></a>返回值</strong></p>
</td>
</tr>
<tr id="row1028511536349"><td class="cellrowborder" valign="top" width="35.24%"><p id="p528565313349"><a name="p528565313349"></a><a name="p528565313349"></a>Open(driverName, dataSourceName string)</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%"><p id="p12285165323416"><a name="p12285165323416"></a><a name="p12285165323416"></a>根据给定的数据库驱动以及驱动专属的数据源来打开一个数据库。</p>
</td>
<td class="cellrowborder" valign="top" width="20.330000000000002%"><p id="p72851353143414"><a name="p72851353143414"></a><a name="p72851353143414"></a>*DB, error</p>
</td>
</tr>
</tbody>
</table>

参数driverName和dataSourceName详解参见[连接数据库](连接数据库.md)。

