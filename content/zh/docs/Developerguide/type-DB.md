# type DB<a name="ZH-CN_TOPIC_0000001232409220"></a>

type DB如下表所示。

<a name="table1769731053615"></a>
<table><tbody><tr id="row11759141043612"><td class="cellrowborder" valign="top" width="36.78%"><p id="p87591010123613"><a name="p87591010123613"></a><a name="p87591010123613"></a><strong id="b8759111083615"><a name="b8759111083615"></a><a name="b8759111083615"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p1175919100368"><a name="p1175919100368"></a><a name="p1175919100368"></a><strong id="b1675921013615"><a name="b1675921013615"></a><a name="b1675921013615"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p157591910113611"><a name="p157591910113611"></a><a name="p157591910113611"></a><strong id="b7759111017366"><a name="b7759111017366"></a><a name="b7759111017366"></a>返回值</strong></p>
</td>
</tr>
<tr id="row117591010173617"><td class="cellrowborder" valign="top" width="36.78%"><p id="p5759131023615"><a name="p5759131023615"></a><a name="p5759131023615"></a>(db *DB)Begin()</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p57591710183619"><a name="p57591710183619"></a><a name="p57591710183619"></a>开启一个事务，事务的隔离级别由驱动决定。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p276011100361"><a name="p276011100361"></a><a name="p276011100361"></a>*Tx, error</p>
</td>
</tr>
<tr id="row13760210103611"><td class="cellrowborder" valign="top" width="36.78%"><p id="p18760810103610"><a name="p18760810103610"></a><a name="p18760810103610"></a>(db *DB)BeginTx(ctx context.Context,</p>
<p id="p167601810193615"><a name="p167601810193615"></a><a name="p167601810193615"></a>opts *TxOptions)</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p19760121033611"><a name="p19760121033611"></a><a name="p19760121033611"></a>开启一个给定事务隔离级别的事务，给定的上下文会一直使用到事务提交或回滚为止。若上下文被取消，那么sql包将会对事务进行回滚。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p37601510103615"><a name="p37601510103615"></a><a name="p37601510103615"></a>*Tx, error</p>
</td>
</tr>
<tr id="row9760161016362"><td class="cellrowborder" valign="top" width="36.78%"><p id="p576041033617"><a name="p576041033617"></a><a name="p576041033617"></a>(db *DB)Close()</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p1676013106361"><a name="p1676013106361"></a><a name="p1676013106361"></a>关闭数据库并释放所有已打开的资源。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p476019105362"><a name="p476019105362"></a><a name="p476019105362"></a>error</p>
</td>
</tr>
<tr id="row157609105368"><td class="cellrowborder" valign="top" width="36.78%"><p id="p2076091014360"><a name="p2076091014360"></a><a name="p2076091014360"></a>(db *DB)Exec(query string,</p>
<p id="p77601107366"><a name="p77601107366"></a><a name="p77601107366"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p19760121053619"><a name="p19760121053619"></a><a name="p19760121053619"></a>执行一个不返回数据行的操作。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p3760111063615"><a name="p3760111063615"></a><a name="p3760111063615"></a>Result, error</p>
</td>
</tr>
<tr id="row776013100363"><td class="cellrowborder" valign="top" width="36.78%"><p id="p13760101017365"><a name="p13760101017365"></a><a name="p13760101017365"></a>(db *DB)ExecContext(ctx context.Context,</p>
<p id="p1776017105362"><a name="p1776017105362"></a><a name="p1776017105362"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p147601210193619"><a name="p147601210193619"></a><a name="p147601210193619"></a>在给定上下文中，执行一个不返回数据行的操作。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p157601410133618"><a name="p157601410133618"></a><a name="p157601410133618"></a>Result, error</p>
</td>
</tr>
<tr id="row6760210193615"><td class="cellrowborder" valign="top" width="36.78%"><p id="p9760201033615"><a name="p9760201033615"></a><a name="p9760201033615"></a>(db *DB)Ping()</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p1876061013368"><a name="p1876061013368"></a><a name="p1876061013368"></a>检查数据库连接是否仍然有效，并在有需要时建立一个连接。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p2760010173614"><a name="p2760010173614"></a><a name="p2760010173614"></a>error</p>
</td>
</tr>
<tr id="row97601105366"><td class="cellrowborder" valign="top" width="36.78%"><p id="p1576012103366"><a name="p1576012103366"></a><a name="p1576012103366"></a>(db *DB)PingContext(ctx context.Context)</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p3760810183611"><a name="p3760810183611"></a><a name="p3760810183611"></a>在给定上下文中，检查数据库连接是否仍然有效，并在有需要时建立一个连接。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p19760610203614"><a name="p19760610203614"></a><a name="p19760610203614"></a>error</p>
</td>
</tr>
<tr id="row15760131093611"><td class="cellrowborder" valign="top" width="36.78%"><p id="p776014106364"><a name="p776014106364"></a><a name="p776014106364"></a>(db *DB)Prepare(query string)</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p207601710183610"><a name="p207601710183610"></a><a name="p207601710183610"></a>为以后的查询或执行创建一个预备语句。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p157601410183614"><a name="p157601410183614"></a><a name="p157601410183614"></a>*Stmt, error</p>
</td>
</tr>
<tr id="row976011103365"><td class="cellrowborder" valign="top" width="36.78%"><p id="p8760161043614"><a name="p8760161043614"></a><a name="p8760161043614"></a>(db *DB)PrepareContext(ctx context.Context, query string)</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p12760151033619"><a name="p12760151033619"></a><a name="p12760151033619"></a>在给定的上下文中，为以后的查询或执行创建一个预备语句。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p1676012109364"><a name="p1676012109364"></a><a name="p1676012109364"></a>*Stmt, error</p>
</td>
</tr>
<tr id="row7760191043619"><td class="cellrowborder" valign="top" width="36.78%"><p id="p7760191023613"><a name="p7760191023613"></a><a name="p7760191023613"></a>(db *DB)Query(query string,</p>
<p id="p1076091083615"><a name="p1076091083615"></a><a name="p1076091083615"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p147601910133617"><a name="p147601910133617"></a><a name="p147601910133617"></a>执行一个查询并返回多个数据行。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p11760210123611"><a name="p11760210123611"></a><a name="p11760210123611"></a>*Rows, error</p>
</td>
</tr>
<tr id="row276020105361"><td class="cellrowborder" valign="top" width="36.78%"><p id="p1376051083617"><a name="p1376051083617"></a><a name="p1376051083617"></a>(db *DB)QueryContext(ctx context.Context,</p>
<p id="p476021020360"><a name="p476021020360"></a><a name="p476021020360"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p97601104361"><a name="p97601104361"></a><a name="p97601104361"></a>在给定的上下文中，执行一个查询并返回多个数据行。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p177602102368"><a name="p177602102368"></a><a name="p177602102368"></a>*Rows, error</p>
</td>
</tr>
<tr id="row076021019363"><td class="cellrowborder" valign="top" width="36.78%"><p id="p19761710143617"><a name="p19761710143617"></a><a name="p19761710143617"></a>(db *DB)QueryRow(query string,</p>
<p id="p11761710193611"><a name="p11761710193611"></a><a name="p11761710193611"></a>args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p11761310183618"><a name="p11761310183618"></a><a name="p11761310183618"></a>执行一个只返回一个数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p37613104366"><a name="p37613104366"></a><a name="p37613104366"></a>*Row</p>
</td>
</tr>
<tr id="row776171018362"><td class="cellrowborder" valign="top" width="36.78%"><p id="p19761111017366"><a name="p19761111017366"></a><a name="p19761111017366"></a>(db *DB)QueryRowContext(ctx context.Context,</p>
<p id="p676161063611"><a name="p676161063611"></a><a name="p676161063611"></a>query string, args ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="42.86%"><p id="p11761101014362"><a name="p11761101014362"></a><a name="p11761101014362"></a>在给定上下文中，执行一个只返回一个数据行的查询。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p6761810113618"><a name="p6761810113618"></a><a name="p6761810113618"></a>*Row</p>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="section76542338146"></a>

<a name="table07121410173613"></a>
<table><tbody><tr id="row107611510133611"><td class="cellrowborder" valign="top" width="22.2%"><p id="p2076118106363"><a name="p2076118106363"></a><a name="p2076118106363"></a><strong id="b8761410153614"><a name="b8761410153614"></a><a name="b8761410153614"></a>参数</strong></p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p576118103369"><a name="p576118103369"></a><a name="p576118103369"></a><strong id="b1976115105366"><a name="b1976115105366"></a><a name="b1976115105366"></a>参数说明</strong></p>
</td>
</tr>
<tr id="row87611510133616"><td class="cellrowborder" valign="top" width="22.2%"><p id="p2761131010369"><a name="p2761131010369"></a><a name="p2761131010369"></a>ctx</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p176181012364"><a name="p176181012364"></a><a name="p176181012364"></a>表示给定的上下文。</p>
</td>
</tr>
<tr id="row1761410103611"><td class="cellrowborder" valign="top" width="22.2%"><p id="p476121017363"><a name="p476121017363"></a><a name="p476121017363"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p4761151012365"><a name="p4761151012365"></a><a name="p4761151012365"></a>被执行的sql语句。</p>
</td>
</tr>
<tr id="row20761131017368"><td class="cellrowborder" valign="top" width="22.2%"><p id="p77619103368"><a name="p77619103368"></a><a name="p77619103368"></a>args</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p16761131015364"><a name="p16761131015364"></a><a name="p16761131015364"></a>被执行sql语句需要绑定的参数。支持按位置绑定和按名称绑定，详情见如下示例。</p>
</td>
</tr>
<tr id="row13761210123610"><td class="cellrowborder" valign="top" width="22.2%"><p id="p107618101366"><a name="p107618101366"></a><a name="p107618101366"></a>opts</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p1076116100366"><a name="p1076116100366"></a><a name="p1076116100366"></a>事务隔离级别和事务访问模式，其中事务隔离级别（opts.Isolation）支持范围为sql.LevelReadUncommitted,sql.LevelReadCommitted,sql.LevelRepeatableRead,</p>
<p id="p13761110183620"><a name="p13761110183620"></a><a name="p13761110183620"></a>sql.LevelSerializable。事务访问模式（opts.ReadOnly）支持范围为true（read only）和false（read write）。</p>
</td>
</tr>
</tbody>
</table>

**示例：**

```
func main() {
	str := "host=127.0.0.1 port=1611 user=testuser password=Gauss_234 dbname=postgres sslmode = disable"
	db, err:= sql.Open("opengauss", str)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	// 按位置绑定
	_, err := db.Exec("insert into test(id, name) values(:1, :2)", 1, "张三")
	if err != nil {
		log.Fatal(err)
	}

	// 按名称绑定
	_, err := db.Exec("insert into test(id, name) values(:id, :name)", sql.Named("id", 1), sql.Named("name", "张三"))
	if err != nil {
		log.Fatal(err)
	}
}
```

