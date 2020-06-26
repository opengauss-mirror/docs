# SQLFetch<a name="ZH-CN_TOPIC_0242371447"></a>

## 功能描述<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_se050a9bc14bc47f1bb3b6d4650b37d67"></a>

从结果集中取下一个行集的数据，并返回所有被绑定列的数据。

## 原型<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_s9c799d0d6e0a4ecb91a800e6acdd31dd"></a>

```
SQLRETURN SQLFetch(SQLHSTMT    StatementHandle);
```

## 参数<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_s19f2bee9a4f2459e9496155f5e29600b"></a>

**表 1**  SQLFetch参数

<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_t41ad0c45de864fcc8fbc4c21618c94b6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_r58f5f6f4c39542a6a3be76f92fef9c87"><th class="cellrowborder" valign="top" width="23.119999999999997%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a87934542f19744c4b9194eab9bc38b1e"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a87934542f19744c4b9194eab9bc38b1e"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a87934542f19744c4b9194eab9bc38b1e"></a><strong id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_ad7d886035a98477c9f64831910660d13"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_ad7d886035a98477c9f64831910660d13"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_ad7d886035a98477c9f64831910660d13"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.88000000000001%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_aa79b3721c81f461e8d8741820c91b222"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_aa79b3721c81f461e8d8741820c91b222"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_aa79b3721c81f461e8d8741820c91b222"></a><strong id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_zh-cn_topic_0058965190_b280121351440"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_zh-cn_topic_0058965190_b280121351440"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_zh-cn_topic_0058965190_b280121351440"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_ra4493268c6ea4e09918f7151b802440d"><td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a82994056abe64f8cbc98a3d2110ba6c8"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a82994056abe64f8cbc98a3d2110ba6c8"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a82994056abe64f8cbc98a3d2110ba6c8"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.88000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a43c4cf7648bb45a2b64938ba3da60384"><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a43c4cf7648bb45a2b64938ba3da60384"></a><a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_a43c4cf7648bb45a2b64938ba3da60384"></a>语句句柄，通过SQLAllocHandle获得。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_s08aa46acb7f04acf807438d3b1f0df6f"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_NO\_DATA：表示SQL语句不返回结果集。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。
-   SQL\_STILL\_EXECUTING：表示语句正在执行。

## 注意事项<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_s2e8fa07b761946118f82afbb0443cdf6"></a>

当调用SQLFetch函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_STMT和StatementHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272893_zh-cn_topic_0237120423_zh-cn_topic_0059777989_s297ce23d9b4d4e6ab0f5888390604f41"></a>

参见：[示例](示例-2.md)

