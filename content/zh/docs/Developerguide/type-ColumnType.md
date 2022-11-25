# type ColumnType<a name="ZH-CN_TOPIC_0000001232569192"></a>

type ColumnType如下表所示。

<a name="table10937102713386"></a>
<table><tbody><tr id="row02162816387"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p121328143814"><a name="p121328143814"></a><a name="p121328143814"></a><strong id="b721628133818"><a name="b721628133818"></a><a name="b721628133818"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p1721628193820"><a name="p1721628193820"></a><a name="p1721628193820"></a><strong id="b12222893811"><a name="b12222893811"></a><a name="b12222893811"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p7210283382"><a name="p7210283382"></a><a name="p7210283382"></a><strong id="b132628173819"><a name="b132628173819"></a><a name="b132628173819"></a>返回值</strong></p>
</td>
</tr>
<tr id="row12152823811"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p13222853811"><a name="p13222853811"></a><a name="p13222853811"></a>(ci *ColumnType)DatabaseTypeName()</p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p112528113820"><a name="p112528113820"></a><a name="p112528113820"></a>返回列类型的数据库系统名称。返回空字符串表示该驱动类型名字并未被支持。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p52132817380"><a name="p52132817380"></a><a name="p52132817380"></a>error</p>
</td>
</tr>
<tr id="row122132803810"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p52192813386"><a name="p52192813386"></a><a name="p52192813386"></a>(ci *ColumnType)DecimalSize()</p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p1921328173816"><a name="p1921328173816"></a><a name="p1921328173816"></a>返回小数类型的范围和精度。</p>
<p id="p32202873819"><a name="p32202873819"></a><a name="p32202873819"></a>返回值ok的值为false时，说明给定的类型不可用或者不支持。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p192102811382"><a name="p192102811382"></a><a name="p192102811382"></a>precision, scale int64, ok bool</p>
</td>
</tr>
<tr id="row182152843810"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p17242893815"><a name="p17242893815"></a><a name="p17242893815"></a>(ci *ColumnType)Length()</p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p324288384"><a name="p324288384"></a><a name="p324288384"></a>返回数据列类型长度。返回值ok的值为false时，说明给定的类型不存在长度。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p32172843816"><a name="p32172843816"></a><a name="p32172843816"></a>length int64, ok bool</p>
</td>
</tr>
<tr id="row62162853819"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p172182814384"><a name="p172182814384"></a><a name="p172182814384"></a>(ci *ColumnType)ScanType()</p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p32102883815"><a name="p32102883815"></a><a name="p32102883815"></a>返回一种Go类型，该类型能够在Rows.scan进行扫描时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p82928143819"><a name="p82928143819"></a><a name="p82928143819"></a>reflect.Type</p>
</td>
</tr>
<tr id="row4262873819"><td class="cellrowborder" valign="top" width="39.379999999999995%"><p id="p8262814388"><a name="p8262814388"></a><a name="p8262814388"></a>(ci *ColumnType)Name()</p>
</td>
<td class="cellrowborder" valign="top" width="40.26%"><p id="p4216281386"><a name="p4216281386"></a><a name="p4216281386"></a>返回数据列的名字。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p82152893816"><a name="p82152893816"></a><a name="p82152893816"></a>string</p>
</td>
</tr>
</tbody>
</table>

