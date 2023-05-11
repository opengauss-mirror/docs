# SQLGetDiagRec

## 功能描述<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_s0088b32a977e44f5a1e1e2b1523fc51c"></a>

返回诊断记录的多个字段的当前值，其中诊断记录包含错误、警告及状态信息。

## 原型<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_s75cbaa3f71d04c628d2c1afdf0f4d953"></a>

```
SQLRETURN  SQLGetDiagRec(SQLSMALLINT    HandleType
                         SQLHANDLE      Handle,
                         SQLSMALLINT    RecNumber,
                         SQLCHAR        *SQLState,
                         SQLINTEGER     *NativeErrorPtr,
                         SQLCHAR        *MessageText,
                         SQLSMALLINT    BufferLength
                         SQLSMALLINT    *TextLengthPtr);
```

## 参数<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_sde16d4cd6f674b65822349c34adf7cc5"></a>

**表 1**  SQLGetDiagRec参数

<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_t8a641f9b30084f3f923130e22525006c"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r7652c8a6e25d4f9d957ac5d0bf631e8d"><th class="cellrowborder" valign="top" width="19.12%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"></a><strong id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="80.88%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"></a><strong id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b968289214730"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b968289214730"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b968289214730"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r8421bf5306e14bb4b3b16eea80ce18f7"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"></a>HandleType</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"></a>句柄类型标识符，它说明诊断所要求的句柄类型。必须为下列值之一：</p>
<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"></a><ul id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"><li>SQL_HANDLE_ENV</li><li>SQL_HANDLE_DBC</li><li>SQL_HANDLE_STMT</li><li>SQL_HANDLE_DESC</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_rc8d90a1599c94790a4565c59123d34b4"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"></a>Handle</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"></a>诊断数据结构的句柄，其类型由HandleType来指出。如果HandleType是SQL_HANDLE_ENV，Handle可以是共享的或非共享的环境句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_red32d4c46c5948638f58a2760d26adc0"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"></a>RecNumber</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"></a>指出应用从查找信息的状态记录。状态记录从1开始编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ra322ea6691df4122a8074eca2410384e"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a26626eac3a7b496da37587837bbfea66"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a26626eac3a7b496da37587837bbfea66"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a26626eac3a7b496da37587837bbfea66"></a>SQLState</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa97c820304b849fb8d920f92495255dc"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa97c820304b849fb8d920f92495255dc"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aa97c820304b849fb8d920f92495255dc"></a><strong id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b238522461474"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b238522461474"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b238522461474"></a>输出参数</strong>：指向缓冲区的指针，该缓冲区存储着有关RecNumber的五字符的SQLSTATE码。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r17e7c4dcfaca4983be860787b9e652a5"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"></a>NativeErrorPtr</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"></a><strong id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b195510881471"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b195510881471"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_zh-cn_topic_0058965182_b195510881471"></a>输出参数</strong>：指向缓冲区的指针，该缓冲区存储着本地的错误码。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r69d6871df9b244ef9c89f63234766757"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"></a>MessageText</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"></a>指向缓冲区的指针，该缓冲区存储着诊断信息文本串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r9cfafd4e60c44e6ea2e54feee0538d82"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ab19878b501094807a333e484772c2e02"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ab19878b501094807a333e484772c2e02"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ab19878b501094807a333e484772c2e02"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"></a>MessageText的长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r90031695bb9d40ddbcd2c1571c1bc77c"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a030e52eda27d44138767506dd6a680f0"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a030e52eda27d44138767506dd6a680f0"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a030e52eda27d44138767506dd6a680f0"></a>TextLengthPtr</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"></a><strong id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb1a2e91199946fa8d2ff1de15ff2b76"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb1a2e91199946fa8d2ff1de15ff2b76"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb1a2e91199946fa8d2ff1de15ff2b76"></a>输出参数</strong>：指向缓冲区的指针，返回MessageText中的字节总数。如果返回字节数大于BufferLength，则MessageText中的诊断信息文本被截断成BufferLength减去NULL结尾字符的长度。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_s79113635891145b5b38d04f8c2a8fa71"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_s15c39d4749d544f1bbd489d994427ef7"></a>

SQLGetDiagRec不发布自己的诊断记录。它用下列返回值来报告它自己的执行结果：

-   SQL\_SUCCESS：函数成功返回诊断信息。
-   SQL\_SUCCESS\_WITH\_INFO：MessageText太小以致不能容纳所请求的诊断信息。没有诊断记录生成。
-   SQL\_INVALID\_HANDLE：由HandType和Handle所指出的句柄是不合法句柄。
-   SQL\_ERROR：RecNumber小于等于0或BufferLength小于0。

如果调用ODBC函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO，可调用SQLGetDiagRec返回诊断信息值SQLSTATE，SQLSTATE值的如下表。

**表 2**  SQLSTATE值

<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_t17be0e89f30840a9bcb9830d20727c4d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_rae2dc7b490504d3a9bc41b0a56b01887"><th class="cellrowborder" valign="top" width="20.352035203520348%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"></a>SQLSATATE</p>
</th>
<th class="cellrowborder" valign="top" width="31.983198319831978%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"></a>错误</p>
</th>
<th class="cellrowborder" valign="top" width="47.66476647664767%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_rc3546003493948b286282a2cf83a84e2"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af485e77e78b24d80b902351eaeae6535"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af485e77e78b24d80b902351eaeae6535"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af485e77e78b24d80b902351eaeae6535"></a>HY000</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"></a>一般错误</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"></a>未定义特定的SQLSTATE所产生的一个错误。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r53d2074d51fb4e62b67b527e6507455b"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a1258a17c096541069553adfcdeb136b7"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a1258a17c096541069553adfcdeb136b7"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a1258a17c096541069553adfcdeb136b7"></a>HY001</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"></a>内存分配错误</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"></a>驱动程序不能分配所需要的内存来支持函数的执行或完成。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r91c74c00e0354589a467e60acb4ad252"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"></a>HY008</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"></a>取消操作</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"></a>调用SQLCancel取消执行语句后，依然在StatementHandle上调用函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_reca8ca42a08a43d4b5a4be65504b78c9"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aee97592928914832828e501ef274570c"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aee97592928914832828e501ef274570c"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aee97592928914832828e501ef274570c"></a>HY010</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"></a>函数系列错误</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"></a>在为执行中的所有数据参数或列发送数据前就调用了执行函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_rb37083298b164ec3ac79b18d45abed97"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"></a>HY013</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"></a>内存管理错误</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"></a>不能处理函数调用，可能由当前内存条件差引起。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_r72d9bb5b4d1d44119f67b62518ce3aa7"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"></a>HYT01</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"></a>连接超时</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"></a>数据源响应请求之前，连接超时。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_rfa171d35610c45ef833f549f90d80760"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"></a>IM001</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"></a>驱动程序不支持此函数</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7490bf4e38344511966387267b13ed3c"><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7490bf4e38344511966387267b13ed3c"></a><a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_a7490bf4e38344511966387267b13ed3c"></a>调用了StatementHandle相关的驱动程序不支持的函数。</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0238272900_zh-cn_topic_0237120430_zh-cn_topic_0059778032_sf24dafb7ecbe4978ac9b0c0da42eaa19"></a>

参见：[示例](示例-2.md)

