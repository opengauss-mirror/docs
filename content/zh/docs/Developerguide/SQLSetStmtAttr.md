# SQLSetStmtAttr

## 功能描述<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s289df741daf0491095bd3a6eeb7c3397"></a>

设置相关语句的属性。

## 原型<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s64dcb5b7dc82403a86dfb0b07729723d"></a>

```
SQLRETURN SQLSetStmtAttr(SQLHSTMT      StatementHandle
                         SQLINTEGER    Attribute,
                         SQLPOINTER    ValuePtr,
                         SQLINTEGER    StringLength);
```

## 参数<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s93d4d32e284e4e32930c5a9c033b6be3"></a>

**表 1**  SQLSetStmtAttr参数

<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_tc7d6fc98e0094dfdb438ab59460d206d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_rb323017d53364460aff9e3ccc9832912"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><strong id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><strong id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r13b05b59c65f4a8fb1f61880b8a41c0e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"></a>语句句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r3191b8b205a145c9b4388d6bf3b1482e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"></a>需设置的属性。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r0c1b3c0fafbf4d7f8dcad213939dd18d"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"></a>指向对应Attribute的值。依赖于Attribute的值，ValuePtr可能是32位无符号整型值，或指向以空结束的字符串，二进制缓冲区，或者驱动定义值。注意，如果ValuePtr参数是驱动程序指定值。ValuePtr可能是有符号的整数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_rdc1f6c194f1d4e57bd88d21d62779354"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"></a><a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"></a>如果ValuePtr指向字符串或二进制缓冲区，这个参数是*ValuePtr长度，如果ValuePtr指向整型，忽略StringLength。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

当SQLSetStmtAttr的返回值为SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过借助SQL\_HANDLE\_STMT的HandleType和StatementHandle的Handle，调用[SQLGetDiagRec](SQLGetDiagRec.md)可得到相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272903_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

参见：[示例](示例-2.md)
