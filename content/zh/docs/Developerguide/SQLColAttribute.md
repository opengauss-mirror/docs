# SQLColAttribute

## 功能描述<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_scc387c9cd5a14083903b16db19a589da"></a>

返回结果集中一列的描述符信息。

## 原型<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_se76fe01df92c444b960a085f65094cb8"></a>

```
SQLRETURN SQLColAttibute(SQLHSTMT        StatementHandle,
                         SQLUSMALLINT    ColumnNumber,
                         SQLUSMALLINT    FieldIdentifier,
                         SQLPOINTER      CharacterAtrriburePtr,
                         SQLSMALLINT     BufferLength,
                         SQLSMALLINT     *StringLengthPtr,
                         SQLLEN       *NumericAttributePtr);
```

## 参数<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_sa001ba56cc7645ff9545f1ea44d918ec"></a>

**表 1**  SQLColAttribute参数

<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_tce7a2910d5584220bd6408910e7d1f01"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_r2a507b596db649a78b8b392da81f373a"><th class="cellrowborder" valign="top" width="26.86%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"></a><strong id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1efd08cffa164d57a113d04bf3e7f489"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1efd08cffa164d57a113d04bf3e7f489"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1efd08cffa164d57a113d04bf3e7f489"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="73.14%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"></a><strong id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9d4c05b8c7114b94a22c1176fae1f738"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9d4c05b8c7114b94a22c1176fae1f738"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9d4c05b8c7114b94a22c1176fae1f738"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_rfcf235ef81c347fca4d05a53e2b6a63d"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"></a>语句句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_r94f62d27d6b6493e900251b0ca5c70af"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"></a>ColumnNumber</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"></a>要检索字段的列号，起始为1，依次递增。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_r96436fd340df42b5a3c324c34463f430"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"></a>FieldIdentifier</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a02c238292fcf454d93556259662d7b1f"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a02c238292fcf454d93556259662d7b1f"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a02c238292fcf454d93556259662d7b1f"></a>IRD中ColumnNumber行的字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_r631934448c6a415589ebe69b810287e5"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6ea86985897d4df2af06143be1318079"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6ea86985897d4df2af06143be1318079"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6ea86985897d4df2af06143be1318079"></a>CharacterAttributePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"></a><strong id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a61f8cdee422645a18922ff447c38d190"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a61f8cdee422645a18922ff447c38d190"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a61f8cdee422645a18922ff447c38d190"></a>输出参数</strong>：一个缓冲区指针，返回FieldIdentifier字段值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_redd4bee4cdfe4661a6b1dec8129a9e5b"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_u53a59b98639e49519b7afa77449302e4"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_u53a59b98639e49519b7afa77449302e4"></a><ul id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_u53a59b98639e49519b7afa77449302e4"><li>如果FieldIdentifier是一个ODBC定义的字段，而且CharacterAttributePtr指向一个字符串或二进制缓冲区，则此参数为该缓冲区的长度。</li><li>如果FieldIdentifier是一个ODBC定义的字段，而且CharacterAttributePtr指向一个整数，则会忽略该字段。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_r9bd9eebfe88544e59d20a828ac3d8ba0"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"></a>StringLengthPtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"></a><strong id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_zh-cn_topic_0058965218_b959040514843"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_zh-cn_topic_0058965218_b959040514843"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_zh-cn_topic_0058965218_b959040514843"></a>输出参数</strong>：缓冲区指针，存放*CharacterAttributePtr中字符类型数据的字节总数，对于非字符类型，忽略BufferLength的值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_rc9cce4117dbe45acb4548b8c761b09ff"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"></a>NumericAttributePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_add7da64e8d99477194dd22925df2ed34"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_add7da64e8d99477194dd22925df2ed34"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_add7da64e8d99477194dd22925df2ed34"></a><strong id="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_ac746f062dd0e4667a4e07d4322792fc6"><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_ac746f062dd0e4667a4e07d4322792fc6"></a><a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_ac746f062dd0e4667a4e07d4322792fc6"></a>输出参数</strong>：指向一个整型缓冲区的指针，返回IRD中ColumnNumber行FieldIdentifier字段的值。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_s04cf966285614f118de0fabce2eaeb20"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_s06211cd9d00f43f098b0db65a182c4f4"></a>

当SQLColAttribute返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_STMT和StatementHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272888_zh-cn_topic_0237120418_zh-cn_topic_0059778558_sa0124e0144e742c989a8b2f0e52adfd6"></a>

参见：[示例](示例-2.md)
