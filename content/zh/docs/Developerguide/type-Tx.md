# type Tx<a name="ZH-CN_TOPIC_0000001232729080"></a>

type Tx如下表所示。

<a name="table14289941193720"></a>
<table><tbody><tr id="row1033524193713"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p933584133714"><a name="p933584133714"></a><a name="p933584133714"></a><strong id="b533519417373"><a name="b533519417373"></a><a name="b533519417373"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p11336141113712"><a name="p11336141113712"></a><a name="p11336141113712"></a><strong id="b1333618416372"><a name="b1333618416372"></a><a name="b1333618416372"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p12336441163718"><a name="p12336441163718"></a><a name="p12336441163718"></a><strong id="b1633624110377"><a name="b1633624110377"></a><a name="b1633624110377"></a>返回值</strong></p>
</td>
</tr>
<tr id="row11336341163716"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p1833618412379"><a name="p1833618412379"></a><a name="p1833618412379"></a>(tx *Tx)Commit()</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p3336184153715"><a name="p3336184153715"></a><a name="p3336184153715"></a>提交事务。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1233664113713"><a name="p1233664113713"></a><a name="p1233664113713"></a>error</p>
</td>
</tr>
<tr id="row93361341203718"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p19336184111374"><a name="p19336184111374"></a><a name="p19336184111374"></a>(tx *Tx)Exec(query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p14336154112374"><a name="p14336154112374"></a><a name="p14336154112374"></a>执行一个不返回数据行的操作。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p4336184133719"><a name="p4336184133719"></a><a name="p4336184133719"></a>Result, error</p>
</td>
</tr>
<tr id="row17336174112370"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p14336114143713"><a name="p14336114143713"></a><a name="p14336114143713"></a>(tx *Tx)ExecContext(ctx context.Context,</p>
<p id="p1633684118379"><a name="p1633684118379"></a><a name="p1633684118379"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p1333664116375"><a name="p1333664116375"></a><a name="p1333664116375"></a>在给定上下文中，执行一个不返回数据行的操作。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1333664173715"><a name="p1333664173715"></a><a name="p1333664173715"></a>Result, error</p>
</td>
</tr>
<tr id="row11336154143718"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p16336641153712"><a name="p16336641153712"></a><a name="p16336641153712"></a>(tx *Tx)Prepare(query string)</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p133361641203714"><a name="p133361641203714"></a><a name="p133361641203714"></a>为以后的查询或执行创建一个预备语句。返回的语句将在事务中执行，并且一旦事务被提交或回滚就不能再使用。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1933611419373"><a name="p1933611419373"></a><a name="p1933611419373"></a>*Stmt, error</p>
</td>
</tr>
<tr id="row5336541123718"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p4336144110370"><a name="p4336144110370"></a><a name="p4336144110370"></a>(tx *Tx)PrepareContext(ctx context.Context,</p>
<p id="p11336241123715"><a name="p11336241123715"></a><a name="p11336241123715"></a>query string)</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p9336641143710"><a name="p9336641143710"></a><a name="p9336641143710"></a>为以后的查询或执行创建一个预备语句。返回的语句将在事务中执行，并且一旦事务被提交或回滚就不能再使用。</p>
<p id="p233613413378"><a name="p233613413378"></a><a name="p233613413378"></a>给定的上下文将用于预备阶段，而不是事务执行阶段。该方法返回的语句将在事务上下文中执行。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p8336104103712"><a name="p8336104103712"></a><a name="p8336104103712"></a>*Stmt, error</p>
</td>
</tr>
<tr id="row7336164193712"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p6336184103715"><a name="p6336184103715"></a><a name="p6336184103715"></a>(tx *Tx)Query(query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p2033654183716"><a name="p2033654183716"></a><a name="p2033654183716"></a>执行一个返回数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1336134117371"><a name="p1336134117371"></a><a name="p1336134117371"></a>*Rows, error</p>
</td>
</tr>
<tr id="row12336941103717"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p53369414372"><a name="p53369414372"></a><a name="p53369414372"></a>(tx *Tx)QueryContext(ctx context.Context,</p>
<p id="p13361341203715"><a name="p13361341203715"></a><a name="p13361341203715"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p6336184143716"><a name="p6336184143716"></a><a name="p6336184143716"></a>在给定上下文中，执行一个返回数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p183361441143711"><a name="p183361441143711"></a><a name="p183361441143711"></a>*Rows, error</p>
</td>
</tr>
<tr id="row3336154193713"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p1433611414373"><a name="p1433611414373"></a><a name="p1433611414373"></a>(tx *Tx)QueryRow(query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p10336154163716"><a name="p10336154163716"></a><a name="p10336154163716"></a>执行一个只返回一个数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1833617410379"><a name="p1833617410379"></a><a name="p1833617410379"></a>*Row</p>
</td>
</tr>
<tr id="row233684112376"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p633694118378"><a name="p633694118378"></a><a name="p633694118378"></a>(tx *Tx)QueryRowContext(ctx context.Context,</p>
<p id="p733612411378"><a name="p733612411378"></a><a name="p733612411378"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p1533617415375"><a name="p1533617415375"></a><a name="p1533617415375"></a>在给定上下文中，执行一个只返回一个数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p133613413379"><a name="p133613413379"></a><a name="p133613413379"></a>*Row</p>
</td>
</tr>
<tr id="row203361541203710"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p83369417379"><a name="p83369417379"></a><a name="p83369417379"></a>(tx *Tx) Rollback()</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p1033624193718"><a name="p1033624193718"></a><a name="p1033624193718"></a>事务回滚。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1533654173717"><a name="p1533654173717"></a><a name="p1533654173717"></a>error</p>
</td>
</tr>
<tr id="row163371641133717"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p13337154114372"><a name="p13337154114372"></a><a name="p13337154114372"></a>(tx *Tx)Stmt(stmt *Stmt)</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p166151992169"><a name="p166151992169"></a><a name="p166151992169"></a>为已有的语句返回一个事务专用的预备语句。</p>
<p id="p1933744111376"><a name="p1933744111376"></a><a name="p1933744111376"></a>示例：</p>
<pre class="screen" id="screen231920150168"><a name="screen231920150168"></a><a name="screen231920150168"></a>str, err := db.Prepare("insert into t1 values(:1, :2)")
tx, err := db.Begin()
res, err := tx.Stmt(str).Exec(1, "aaa")</pre>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p5337174112379"><a name="p5337174112379"></a><a name="p5337174112379"></a>*Stmt</p>
</td>
</tr>
<tr id="row4337124163718"><td class="cellrowborder" valign="top" width="46.910000000000004%"><p id="p103371741173710"><a name="p103371741173710"></a><a name="p103371741173710"></a>(tx *Tx)StmtContext(ctx context.Context, stmt *Stmt)</p>
</td>
<td class="cellrowborder" valign="top" width="32.73%"><p id="p18337194153714"><a name="p18337194153714"></a><a name="p18337194153714"></a>在给定上下文中，为已有的语句返回一个事务专用的预备语句。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p15337114173718"><a name="p15337114173718"></a><a name="p15337114173718"></a>*Stmt</p>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="section163126239169"></a>

<a name="table1629911413378"></a>
<table><tbody><tr id="row13372041153714"><td class="cellrowborder" valign="top" width="22.2%"><p id="p1233713418376"><a name="p1233713418376"></a><a name="p1233713418376"></a><strong id="b10337124116371"><a name="b10337124116371"></a><a name="b10337124116371"></a>参数</strong></p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p163375419375"><a name="p163375419375"></a><a name="p163375419375"></a><strong id="b1433794111373"><a name="b1433794111373"></a><a name="b1433794111373"></a>参数说明</strong></p>
</td>
</tr>
<tr id="row1833720411370"><td class="cellrowborder" valign="top" width="22.2%"><p id="p53371741143712"><a name="p53371741143712"></a><a name="p53371741143712"></a>ctx</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p333713411372"><a name="p333713411372"></a><a name="p333713411372"></a>表示给定的上下文。</p>
</td>
</tr>
<tr id="row18337104183718"><td class="cellrowborder" valign="top" width="22.2%"><p id="p143371041103717"><a name="p143371041103717"></a><a name="p143371041103717"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p1337194112377"><a name="p1337194112377"></a><a name="p1337194112377"></a>被执行的sql语句。</p>
</td>
</tr>
<tr id="row7337194143717"><td class="cellrowborder" valign="top" width="22.2%"><p id="p63372041173718"><a name="p63372041173718"></a><a name="p63372041173718"></a>args</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p1433724117374"><a name="p1433724117374"></a><a name="p1433724117374"></a>被执行sql语句需要绑定的参数。支持按位置绑定和按名称绑定，详情DB类型中的示例。</p>
</td>
</tr>
<tr id="row8337184119372"><td class="cellrowborder" valign="top" width="22.2%"><p id="p7337441143716"><a name="p7337441143716"></a><a name="p7337441143716"></a>stmt</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p4337141173712"><a name="p4337141173712"></a><a name="p4337141173712"></a>已有的预处理语句，一般指prepare语句返回的预处理语句。</p>
</td>
</tr>
</tbody>
</table>

