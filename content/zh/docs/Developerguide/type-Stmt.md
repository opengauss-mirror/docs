# type Stmt<a name="ZH-CN_TOPIC_0000001277289573"></a>

type Stmt如下表所示。

<a name="table131291121153716"></a>
<table><tbody><tr id="row117311213375"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p16173621173713"><a name="p16173621173713"></a><a name="p16173621173713"></a><strong id="b101731121113713"><a name="b101731121113713"></a><a name="b101731121113713"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p201731021173713"><a name="p201731021173713"></a><a name="p201731021173713"></a><strong id="b217372183716"><a name="b217372183716"></a><a name="b217372183716"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p2173202118373"><a name="p2173202118373"></a><a name="p2173202118373"></a><strong id="b13173122183717"><a name="b13173122183717"></a><a name="b13173122183717"></a>返回值</strong></p>
</td>
</tr>
<tr id="row141731321163714"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p181731221113720"><a name="p181731221113720"></a><a name="p181731221113720"></a>(s *Stmt)Close()</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p5173192114376"><a name="p5173192114376"></a><a name="p5173192114376"></a>关闭给定的预处理语句。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p71731521103720"><a name="p71731521103720"></a><a name="p71731521103720"></a>error</p>
</td>
</tr>
<tr id="row41732021113717"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p1217352111373"><a name="p1217352111373"></a><a name="p1217352111373"></a>(s *Stmt)Exec(args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p31732214371"><a name="p31732214371"></a><a name="p31732214371"></a>使用给定的参数执行预处理语句，并返回一个Result值。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p18173182115379"><a name="p18173182115379"></a><a name="p18173182115379"></a>Result, error</p>
</td>
</tr>
<tr id="row18173172117372"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p6173122115374"><a name="p6173122115374"></a><a name="p6173122115374"></a>(s *Stmt)ExecContext(ctx context.Context,</p>
<p id="p12173182118372"><a name="p12173182118372"></a><a name="p12173182118372"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p1317492119379"><a name="p1317492119379"></a><a name="p1317492119379"></a>在给定的上下文中，使用给定的参数执行预处理语句，并返回一个Result值。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p18174821143718"><a name="p18174821143718"></a><a name="p18174821143718"></a>Result, error</p>
</td>
</tr>
<tr id="row817410213375"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p18174142112375"><a name="p18174142112375"></a><a name="p18174142112375"></a>(s *Stmt)Query(args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p111741521133719"><a name="p111741521133719"></a><a name="p111741521133719"></a>使用给定的参数执行预处理语句，并以*Rows形式返回查询结果。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p2017492103710"><a name="p2017492103710"></a><a name="p2017492103710"></a>*Rows, error</p>
</td>
</tr>
<tr id="row10174321143718"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p217492153713"><a name="p217492153713"></a><a name="p217492153713"></a>(s *Stmt)QueryContext(ctx context.Context,</p>
<p id="p161740215371"><a name="p161740215371"></a><a name="p161740215371"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p141748210377"><a name="p141748210377"></a><a name="p141748210377"></a>在给定的上下文中，使用给定的参数执行预处理语句，并以*Rows形式返回查询结果。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1517482123719"><a name="p1517482123719"></a><a name="p1517482123719"></a>*Rows, error</p>
</td>
</tr>
<tr id="row151741021143715"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p11741121193717"><a name="p11741121193717"></a><a name="p11741121193717"></a>(s *Stmt)QueryRow(args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p2017414211377"><a name="p2017414211377"></a><a name="p2017414211377"></a>使用给定的参数执行预处理语句，并返回一个*Row作为结果。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p817418217378"><a name="p817418217378"></a><a name="p817418217378"></a>*Row</p>
</td>
</tr>
<tr id="row1417411218373"><td class="cellrowborder" valign="top" width="46.050000000000004%"><p id="p14174192110371"><a name="p14174192110371"></a><a name="p14174192110371"></a>(s *Stmt)QueryRowContext (ctx context.Context,</p>
<p id="p91743213378"><a name="p91743213378"></a><a name="p91743213378"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="33.589999999999996%"><p id="p181741721173716"><a name="p181741721173716"></a><a name="p181741721173716"></a>在给定的上下文中，使用给定的参数执行预处理语句，并返回一个*Row作为结果。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p51741721133716"><a name="p51741721133716"></a><a name="p51741721133716"></a>*Row</p>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="section712133617153"></a>

<a name="table1613822112376"></a>
<table><tbody><tr id="row817472116370"><td class="cellrowborder" valign="top" width="22.2%"><p id="p1174621103716"><a name="p1174621103716"></a><a name="p1174621103716"></a><strong id="b11174021163718"><a name="b11174021163718"></a><a name="b11174021163718"></a>参数</strong></p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p31741621113718"><a name="p31741621113718"></a><a name="p31741621113718"></a><strong id="b9174221113718"><a name="b9174221113718"></a><a name="b9174221113718"></a>参数说明</strong></p>
</td>
</tr>
<tr id="row10174721113714"><td class="cellrowborder" valign="top" width="22.2%"><p id="p19174142133715"><a name="p19174142133715"></a><a name="p19174142133715"></a>ctx</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p1917422163710"><a name="p1917422163710"></a><a name="p1917422163710"></a>表示给定的上下文。</p>
</td>
</tr>
<tr id="row4174112117371"><td class="cellrowborder" valign="top" width="22.2%"><p id="p12174122103719"><a name="p12174122103719"></a><a name="p12174122103719"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p1817422133715"><a name="p1817422133715"></a><a name="p1817422133715"></a>被执行的sql语句。</p>
</td>
</tr>
<tr id="row16174202123717"><td class="cellrowborder" valign="top" width="22.2%"><p id="p181746211373"><a name="p181746211373"></a><a name="p181746211373"></a>args</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p317412143710"><a name="p317412143710"></a><a name="p317412143710"></a>被执行sql语句需要绑定的参数。支持按位置绑定和按名称绑定，详情DB类型中的示例。</p>
</td>
</tr>
</tbody>
</table>

