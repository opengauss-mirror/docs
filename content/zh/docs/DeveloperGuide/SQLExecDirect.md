# SQLExecDirect<a name="ZH-CN_TOPIC_0242371445"></a>

## 功能描述<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_sa444edc74fad433d8d9beb6eec51f680"></a>

使用参数的当前值，执行一条准备好的语句。对于一次只执行一条SQL语句，SQLExecDirect是最快的执行方式。

## 原型<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_s25b19223d63f497cafffb0216d09a598"></a>

```
SQLRETURN SQLExecDirect(SQLHSTMT         StatementHandle,
                        SQLCHAR         *StatementText,     
                        SQLINTEGER       TextLength);
```

## 参数<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_s2f6abd60356142879f48870a38d40612"></a>

**表 1**  SQLExecDirect参数

<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_t5203fb233a4b4f318bf1c119b929f9d6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_r0e574f15a22c4800b3941984bafe861d"><th class="cellrowborder" valign="top" width="23.580000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a475cea2ebe134ead864d9b7d618138ad"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a475cea2ebe134ead864d9b7d618138ad"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a475cea2ebe134ead864d9b7d618138ad"></a><strong id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_adb9e72ead0c04ab08160b5e1f0f808c0"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_adb9e72ead0c04ab08160b5e1f0f808c0"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_adb9e72ead0c04ab08160b5e1f0f808c0"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.42%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_ac729ff85f7cf4d5b9ad03d225349e107"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_ac729ff85f7cf4d5b9ad03d225349e107"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_ac729ff85f7cf4d5b9ad03d225349e107"></a><strong id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a0c4d88ad07e04214aae84d532f665bb0"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a0c4d88ad07e04214aae84d532f665bb0"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a0c4d88ad07e04214aae84d532f665bb0"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_ra661b71731b3473ba5d1aec30971e67d"><td class="cellrowborder" valign="top" width="23.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a86d67aa437f94695b8dc0c0ad5b4d638"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a86d67aa437f94695b8dc0c0ad5b4d638"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a86d67aa437f94695b8dc0c0ad5b4d638"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a08bc8a467df94afcb2fcccb05616e315"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a08bc8a467df94afcb2fcccb05616e315"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a08bc8a467df94afcb2fcccb05616e315"></a>语句句柄，通过SQLAllocHandle获得。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_r8008d4d61d8d4765bb547320d85a2490"><td class="cellrowborder" valign="top" width="23.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a5ea2be078c354f8ebee10efbf6e270ec"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a5ea2be078c354f8ebee10efbf6e270ec"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a5ea2be078c354f8ebee10efbf6e270ec"></a>StatementText</p>
</td>
<td class="cellrowborder" valign="top" width="76.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a4734d8dd5edd4f78847ab03746074fd0"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a4734d8dd5edd4f78847ab03746074fd0"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a4734d8dd5edd4f78847ab03746074fd0"></a>要执行的SQL语句。不支持一次执行多条语句。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_rec7c2728bd8c4906b45c5fe2fb9880bb"><td class="cellrowborder" valign="top" width="23.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a6810d872caac4ff188126615119b337f"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a6810d872caac4ff188126615119b337f"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a6810d872caac4ff188126615119b337f"></a>TextLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a8f930493fe4b425ea391e14c30e0ac9a"><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a8f930493fe4b425ea391e14c30e0ac9a"></a><a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_a8f930493fe4b425ea391e14c30e0ac9a"></a>StatementText的长度。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_s43b67f6e7de04935897f38b7e40a090f"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_NEED\_DATA：在执行SQL语句前没有提供足够的参数。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。
-   SQL\_STILL\_EXECUTING：表示语句正在执行。
-   SQL\_NO\_DATA：表示SQL语句不返回结果集。

## 注意事项<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_s43188a28e3e94157b04501330c5bb5e5"></a>

当调用SQLExecDirect函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_STMT和StatementHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272891_zh-cn_topic_0237120421_zh-cn_topic_0059778538_s8fbcb12db6c5494e98bac4b4820ecc3c"></a>

参见：[示例](示例-2.md)

