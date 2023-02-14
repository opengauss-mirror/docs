# PQconnectdbParams

## 功能描述<a name="zh-cn_topic_0241735613_section735013014140"></a>

与数据库服务器建立一个新的连接。

## 原型<a name="zh-cn_topic_0241735613_section42089297235"></a>

```
PGconn *PQconnectdbParams(const char * const *keywords,
                          const char * const *values,
                          int expand_dbname);
```

## 参数<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s93d4d32e284e4e32930c5a9c033b6be3"></a>

**表 1**  PQconnectdbParams参数

<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_tc7d6fc98e0094dfdb438ab59460d206d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_rb323017d53364460aff9e3ccc9832912"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><strong id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><strong id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_zh-cn_topic_0058965267_b552450314741"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r13b05b59c65f4a8fb1f61880b8a41c0e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a>keywords</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735613_p17295102954917"><a name="zh-cn_topic_0241735613_p17295102954917"></a><a name="zh-cn_topic_0241735613_p17295102954917"></a>定义为一个字符串的数组，每个都成为一个关键字。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r3191b8b205a145c9b4388d6bf3b1482e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a>values</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735613_p17291729154911"><a name="zh-cn_topic_0241735613_p17291729154911"></a><a name="zh-cn_topic_0241735613_p17291729154911"></a>给每个关键字一个值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_r0c1b3c0fafbf4d7f8dcad213939dd18d"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a><a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a>expand_dbname</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735613_p5288132920499"><a name="zh-cn_topic_0241735613_p5288132920499"></a><a name="zh-cn_topic_0241735613_p5288132920499"></a>当expand_dbname是非零的时，允许将dbname的关键字值看做一个连接字符串。只有第一个出现的dbname是这样展开的，任何随后的dbname值作为纯数据库名处理。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

PGconn \*：指向包含链接的对象指针，内存在函数内部申请。

## 注意事项<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

这个函数用从两个NULL结束的数组中来的参数打开一个新的数据库连接。与PQsetdbLogin不同的是，可以不必更换函数签名（名字）就可以扩展参数集，所以建议应用程序中使用这个函数（或者它的类似的非阻塞变种PQconnectStartParams和PQconnectPoll）。

## 示例<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

请参见[示例](示例-3.md)章节。
