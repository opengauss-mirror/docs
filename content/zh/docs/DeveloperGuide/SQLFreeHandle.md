# SQLFreeHandle<a name="ZH-CN_TOPIC_0242371450"></a>

## 功能描述<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_s93f9114d62c04cfa917e8ebc927ec8e9"></a>

释放与指定环境、连接、语句或描述符相关联的资源，它替代了ODBC 2.x函数SQLFreeEnv、SQLFreeConnect及SQLFreeStmt。

## 原型<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_s4914d0218ea7413d8329f30f387e9d20"></a>

```
SQLRETURN SQLFreeHandle(SQLSMALLINT   HandleType,    
                        SQLHANDLE     Handle);
```

## 参数<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_s1f4c6ec0fbe74bdeb4d54275951b273b"></a>

**表 1**  SQLFreeHandle参数

<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_t66a20b0983cd4bdc851236a6b6052b68"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_r5250c653c88a40f0a1df3919130d943b"><th class="cellrowborder" valign="top" width="29.69%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa178f2520013480ba193fd68db0bac40"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa178f2520013480ba193fd68db0bac40"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa178f2520013480ba193fd68db0bac40"></a><strong id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="70.30999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"></a><strong id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a02febd719d614eb5812358d91faae4f4"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a02febd719d614eb5812358d91faae4f4"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a02febd719d614eb5812358d91faae4f4"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_r01fe5cb97f5a4007a4607cbe7fdbb4d5"><td class="cellrowborder" valign="top" width="29.69%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"></a>HandleType</p>
</td>
<td class="cellrowborder" valign="top" width="70.30999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a4360b64617a748a3a7793749add2b498"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a4360b64617a748a3a7793749add2b498"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a4360b64617a748a3a7793749add2b498"></a>SQLFreeHandle要释放的句柄类型。必须为下列值之一：</p>
<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"></a><ul id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"><li>SQL_HANDLE_ENV</li><li>SQL_HANDLE_DBC</li><li>SQL_HANDLE_STMT</li><li>SQL_HANDLE_DESC</li></ul>
<p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"></a>如果HandleType不是这些值之一，SQLFreeHandle返回SQL_INVALID_HANDLE。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_r9cccfc8cd9ff47aaa3c38b05f1fd8969"><td class="cellrowborder" valign="top" width="29.69%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"></a>Handle</p>
</td>
<td class="cellrowborder" valign="top" width="70.30999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"></a><a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"></a>要释放的句柄。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_s97bab15517c347d8854c982f7e8bfae1"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_seb4dad2a49aa45de9411b5f3391d16ea"></a>

如果SQLFreeHandle返回SQL\_ERROR，句柄仍然有效。

## 示例<a name="zh-cn_topic_0238272896_zh-cn_topic_0237120426_zh-cn_topic_0059779231_s877f1d1111e8452fbea6495355622686"></a>

参见：[示例](示例-2.md)

