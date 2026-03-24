# SQLAllocConnect<a name="ZH-CN_TOPIC_0242371438"></a>

## 功能描述<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

分配连接句柄，其功能可被SQLAllocHandle函数替代。

## 原型<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```c
SQLRETURN SQLAllocConnect(SQLHENV     EnvironmentHandle,    
                          SQLHDBC     *ConnectionHandle);
```

## 参数<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**表 1**  SQLAllocConnect参数

<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_r95533e861d6f43a6a61550c0fae09557"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"></a>EnvironmentHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_af3af585891f340b49049298be113dce4"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_af3af585891f340b49049298be113dce4"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_af3af585891f340b49049298be113dce4"></a>一个有效的环境句柄，必须由SQLAllocEnv或SQLAllocHandle成功分配。</p>
<p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0214a0e9219d4856874070000e4365ba"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0214a0e9219d4856874070000e4365ba"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a0214a0e9219d4856874070000e4365ba"></a>需先申请环境句柄，再申请连接句柄，连接句柄依赖于环境句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_race60e037af742c4a011f7c18a80d268"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"></a><a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"></a>指向 SQLHDBC 类型变量的指针。函数执行成功后，该变量将存储新分配的连接句柄，后续的 SQLConnect、SQLDisconnect 等函数都会使用这个句柄。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示分配连接句柄失败。
-   SQL\_INVALID\_HANDLE：表示输入的句柄无效。

## 注意事项<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_s9076893176f14464a773531cbd9e81b4"></a>

为了使得代码更健壮并易于维护，建议使用标准化接口SQLAllocHandle替代SQLAllocConnect。

## 示例<a name="zh-cn_topic_0238272884_zh-cn_topic_0237120414_zh-cn_topic_0059778058_sb7bc1f5b242e441583cf7237bb33199b"></a>

参见：[示例](example.md)

