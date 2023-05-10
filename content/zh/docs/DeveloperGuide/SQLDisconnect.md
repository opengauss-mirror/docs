# SQLDisconnect

## 功能描述<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_sf1f063f9cda741e3bddd12ffff9982ea"></a>

关闭一个与特定连接句柄相关的连接。

## 原型<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_sa94159f087b8453d91742bd037a4dd23"></a>

```
SQLRETURN SQLDisconnect(SQLHDBC    ConnectionHandle);
```

## 参数<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_sed5e3f43dc554fcf87bcc0319da72ef0"></a>

**表 1**  SQLDisconnect参数

<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_tf92662a862a94bb8a2ea829cbf5f90af"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_r28fb5700eaa54698a4340424276b87f4"><th class="cellrowborder" valign="top" width="24.5%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_ac9627e06109f453bac21c00c96534d27"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_ac9627e06109f453bac21c00c96534d27"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_ac9627e06109f453bac21c00c96534d27"></a><strong id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="75.5%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a514195d887524d04b3ecee1f113764cb"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a514195d887524d04b3ecee1f113764cb"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a514195d887524d04b3ecee1f113764cb"></a><strong id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_zh-cn_topic_0058965244_b447479391436"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_zh-cn_topic_0058965244_b447479391436"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_zh-cn_topic_0058965244_b447479391436"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_r0a0928672b2646d0a261d3ef7e26b596"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"></a><a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"></a>连接句柄，通过SQLAllocHandle获得。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_sec718cedec224638b6f21c68a66c165d"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_s62c3955fb6e942f58a6e780478d90554"></a>

当调用SQLDisconnect函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_DBC和ConnectionHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272890_zh-cn_topic_0237120420_zh-cn_topic_0059778556_sb7797f4e64534d1f85c319d5433804d4"></a>

参见：[示例](示例-2.md)

