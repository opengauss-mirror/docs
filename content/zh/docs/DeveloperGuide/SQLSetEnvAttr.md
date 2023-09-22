# SQLSetEnvAttr

## 功能描述<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s93fc7574cf154704b8cff271a57b9601"></a>

设置控制环境各方面的属性。

## 原型<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sfbbc7fe8e3e34b51af9d3a43dab859fc"></a>

```
SQLRETURN SQLSetEnvAttr(SQLHENV       EnvironmentHandle
                        SQLINTEGER    Attribute,    
                        SQLPOINTER    ValuePtr,     
                        SQLINTEGER    StringLength);
```

## 参数<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  SQLSetEnvAttr参数

<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"></a>EnvironmentHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>环境句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r2088b45aa8374f988b5b381a7e85ae5b"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"></a>需设置的环境属性，可为如下值：</p>
<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"></a><ul id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"><li>SQL_ATTR_ODBC_VERSION：指定ODBC版本。</li><li>SQL_CONNECTION_POOLING：连接池属性。</li><li>SQL_OUTPUT_NTS：指明驱动器返回字符串的形式。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_re3c53307a0b8488f86edbf902499dcd5"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"></a>指向对应Attribute的值。依赖于Attribute的值，ValuePtr可能是32位整型值，或为以空结束的字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_rc78d71a78a944585b1a9275d30efa604"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"></a><a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"></a>如果ValuePtr指向字符串或二进制缓冲区，这个参数是*ValuePtr长度，如果ValuePtr指向整型，忽略StringLength。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s3f23b16e09954cc0b1f5bdb1063fee16"></a>

当SQLSetEnvAttr的返回值为SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过借助SQL\_HANDLE\_ENV的HandleType和EnvironmentHandle的Handle，调用[SQLGetDiagRec](SQLGetDiagRec.md)可得到相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272902_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s54d045c03fcc414bab03c37ea6e4da08"></a>

参见：[示例](示例-2.md)

