# PQsendPrepare

## 功能描述<a name="zh-cn_topic_0241735629_section11692173220256"></a>

发送一个请求，创建一个给定参数的预备语句，而不等待结束。

## 原型<a name="zh-cn_topic_0241735629_section8667122125517"></a>

```
int PQsendPrepare(PGconn *conn,
                  const char *stmtName,
                  const char *query,
                  int nParams,
                  const Oid *paramTypes);
```

## 参数<a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQsendPrepare参数

<a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735629_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735629_p23111054217"><a name="zh-cn_topic_0241735629_p23111054217"></a><a name="zh-cn_topic_0241735629_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735629_p1393801515211"><a name="zh-cn_topic_0241735629_p1393801515211"></a><a name="zh-cn_topic_0241735629_p1393801515211"></a>指向包含链接的对象指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735629_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735629_p43682026202518"><a name="zh-cn_topic_0241735629_p43682026202518"></a><a name="zh-cn_topic_0241735629_p43682026202518"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735629_p10403105013320"><a name="zh-cn_topic_0241735629_p10403105013320"></a><a name="zh-cn_topic_0241735629_p10403105013320"></a>需要执行的<em id="i2828137155814"><a name="i2828137155814"></a><a name="i2828137155814"></a>stmt</em>名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735629_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735629_p1995314182810"><a name="zh-cn_topic_0241735629_p1995314182810"></a><a name="zh-cn_topic_0241735629_p1995314182810"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735629_p1737919549321"><a name="zh-cn_topic_0241735629_p1737919549321"></a><a name="zh-cn_topic_0241735629_p1737919549321"></a>需要执行的查询字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735629_row771131052816"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735629_p107111082810"><a name="zh-cn_topic_0241735629_p107111082810"></a><a name="zh-cn_topic_0241735629_p107111082810"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735629_p1247413575323"><a name="zh-cn_topic_0241735629_p1247413575323"></a><a name="zh-cn_topic_0241735629_p1247413575323"></a>参数个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735629_row196171413122814"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735629_p26189137281"><a name="zh-cn_topic_0241735629_p26189137281"></a><a name="zh-cn_topic_0241735629_p26189137281"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735629_p76181130289"><a name="zh-cn_topic_0241735629_p76181130289"></a><a name="zh-cn_topic_0241735629_p76181130289"></a>声明参数类型的数组。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735629_section3976154365516"></a>

int：执行结果为1表示成功，0表示失败，失败原因存到conn-\>errorMessage中。

## 注意事项<a name="zh-cn_topic_0241735629_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

该函数为PQprepare的异步版本：如果能够分派请求，则返回1，否则返回0。调用成功后，调用PQgetResult判断服务端是否成功创建了preparedStatement。函数的参数与PQprepare一样处理。与PQprepare一样，它也不能在2.0协议的连接上工作。

## 示例<a name="zh-cn_topic_0241735629_section1123513455619"></a>

请参见[示例](示例-libpq.md)章节。

