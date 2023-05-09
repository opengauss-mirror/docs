# SQLBindCol

## 功能描述<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_s20aba247faad4486a9207cbeafeadb20"></a>

将应用程序数据缓冲区绑定到结果集的列中。

## 原型<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_sc0a085a7e70b42b49cf7383da395ecff"></a>

```
SQLRETURN SQLBindCol(SQLHSTMT       StatementHandle,    
                     SQLUSMALLINT   ColumnNumber,     
                     SQLSMALLINT    TargetType,
                     SQLPOINTER     TargetValuePtr,
                     SQLLEN     BufferLength,
                     SQLLEN     *StrLen_or_IndPtr);
```

## 参数<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_s2841a8589657411785ffbc5592840769"></a>

**表 1**  SQLBindCol参数

<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_t7f7fe1edade94362b89ebdef0b3126a6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_r72a30279067e460fad862a72def9b6e1"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ac7920d1a4420479097098517698b1203"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ac7920d1a4420479097098517698b1203"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ac7920d1a4420479097098517698b1203"></a><strong id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ae3b4440781a24c7d8bed878942b46f96"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ae3b4440781a24c7d8bed878942b46f96"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_ae3b4440781a24c7d8bed878942b46f96"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"></a><strong id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aafeaef49130b4575b44577a4f33cf3f3"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aafeaef49130b4575b44577a4f33cf3f3"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aafeaef49130b4575b44577a4f33cf3f3"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_rfa83bbcc32f142a3a9af948e06e8e0bb"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"></a>语句句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_r4a7ef1c7e62f464ab72600b1db11039c"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"></a>ColumnNumber</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"></a>要绑定结果集的列号。起始列号为0，以递增的顺序计算列号，第0列是书签列。若未设置书签页，则起始列号为1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_r6b8382814fac430c9bf4db6e196bef7f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a840906d6fab14950843227928136f0cd"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a840906d6fab14950843227928136f0cd"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a840906d6fab14950843227928136f0cd"></a>TargetType</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"></a>缓冲区中C数据类型的标识符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_r3f42cec37f3c461ca85429ed0295e46f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aa94b2a92905e405993904c14900f8287"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aa94b2a92905e405993904c14900f8287"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_aa94b2a92905e405993904c14900f8287"></a>TargetValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"></a><strong id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a025432cf0191435aa9581271363602b1"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a025432cf0191435aa9581271363602b1"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a025432cf0191435aa9581271363602b1"></a>输出参数</strong>：指向与列绑定的数据缓冲区的指针。SQLFetch函数返回这个缓冲区中的数据。如果此参数为一个空指针，则StrLen_or_IndPtr是一个有效值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_rb83e445fa64d43acbd64d9d5e18ee436"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"></a>TargetValuePtr指向缓冲区的长度，以字节为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_rc74b270421da4002a3ae9c5f78021e83"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"></a>StrLen_or_IndPtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"></a><strong id="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a9f45f67970c7417b865a2b14be711be6"><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a9f45f67970c7417b865a2b14be711be6"></a><a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_a9f45f67970c7417b865a2b14be711be6"></a>输出参数</strong>：缓冲区的长度或指示器指针。若为空值，则未使用任何长度或指示器值。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_s665d7a82265e43e9912a556d627ce508"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_sf12dfc561de44c8a9e952a9b13eda981"></a>

当SQLBindCol返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_STMT和StatementHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272886_zh-cn_topic_0237120416_zh-cn_topic_0059779335_sd5d16919fd6141598535fc735a91d4df"></a>

参见：[示例](示例-2.md)

