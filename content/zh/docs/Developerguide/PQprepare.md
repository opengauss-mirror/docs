# PQprepare<a name="ZH-CN_TOPIC_0242380578"></a>

## 功能描述<a name="zh-cn_topic_0241735620_section1434210205519"></a>

用给定的参数提交请求，创建一个预备语句，然后等待结束。

## 原型<a name="zh-cn_topic_0241735620_section16371223113414"></a>

```
PGresult *PQprepare(PGconn *conn,
                    const char *stmtName,
                    const char *query,
                    int nParams,
                    const Oid *paramTypes);
```

## 参数<a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQprepare参数

<a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735620_p23111054217"><a name="zh-cn_topic_0241735620_p23111054217"></a><a name="zh-cn_topic_0241735620_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735620_p1393801515211"><a name="zh-cn_topic_0241735620_p1393801515211"></a><a name="zh-cn_topic_0241735620_p1393801515211"></a>指向包含链接的对象指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735620_row12654138171218"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735620_p196562861213"><a name="zh-cn_topic_0241735620_p196562861213"></a><a name="zh-cn_topic_0241735620_p196562861213"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735620_p6656788128"><a name="zh-cn_topic_0241735620_p6656788128"></a><a name="zh-cn_topic_0241735620_p6656788128"></a>需要执行的<em id="i2828137155814"><a name="i2828137155814"></a><a name="i2828137155814"></a>stmt</em>名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735620_row208051436101312"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735620_p48063363137"><a name="zh-cn_topic_0241735620_p48063363137"></a><a name="zh-cn_topic_0241735620_p48063363137"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735620_p188061636131313"><a name="zh-cn_topic_0241735620_p188061636131313"></a><a name="zh-cn_topic_0241735620_p188061636131313"></a>需要执行的查询字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735620_row1088264091315"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735620_p18883164041313"><a name="zh-cn_topic_0241735620_p18883164041313"></a><a name="zh-cn_topic_0241735620_p18883164041313"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735620_p3883240141320"><a name="zh-cn_topic_0241735620_p3883240141320"></a><a name="zh-cn_topic_0241735620_p3883240141320"></a>参数个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735620_row76626539135"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735620_p366216534138"><a name="zh-cn_topic_0241735620_p366216534138"></a><a name="zh-cn_topic_0241735620_p366216534138"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735620_p1266320537138"><a name="zh-cn_topic_0241735620_p1266320537138"></a><a name="zh-cn_topic_0241735620_p1266320537138"></a>声明参数类型的数组。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735620_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

PGresult：包含查询结果的对象指针。

## 注意事项<a name="zh-cn_topic_0241735620_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   PQprepare创建一个为PQexecPrepared执行用的预备语句，本特性支持命令的重复执行，不需要每次都进行解析和规划。PQprepare仅在协议3.0及以后的连接中支持，使用协议2.0时，PQprepare将失败。
-   该函数从查询字符串创建一个名为stmtName的预备语句，该查询字符串必须包含一个SQL命令。stmtName可以是""来创建一个未命名的语句，在这种情况下，任何预先存在的未命名的语句都将被自动替换；否则，如果在当前会话中已经定义了语句名称，则这是一个错误。如果使用了任何参数，那么在查询中将它们称为$1,$2等。nParams是在paramTypes\[\]数组中预先指定类型的参数的数量。（当nParams为0时，数组指针可以为NULL）paramTypes\[\]通过OID指定要分配给参数符号的数据类型。如果paramTypes为NULL ，或者数组中的任何特定元素为零，服务器将按照对非类型化字面字符串的相同方式为参数符号分配数据类型。另外，查询可以使用数字高于nParams的参数符号；还将推断这些符号的数据类型。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>通过执行SQLPREPARE语句，还可以创建与PQexecPrepared一起使用的预备语句。此外，虽然没有用于删除预备语句的libpq函数，但是SQL DEALLOCATE语句可用于此目的。  

## 示例<a name="zh-cn_topic_0241735620_section13066285525"></a>

请参见[示例](示例-3.md)章节。

