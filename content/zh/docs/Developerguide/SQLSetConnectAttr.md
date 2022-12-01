# SQLSetConnectAttr<a name="ZH-CN_TOPIC_0242371455"></a>

## 功能描述<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_se8dc3eed91144d248bfd9c9d9b144b15"></a>

设置控制连接各方面的属性。

## 原型<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_s2c4e3a37799b4f07a9b22c05f4166f27"></a>

```
SQLRETURN SQLSetConnectAttr(SQLHDBC       ConnectionHandle
                            SQLINTEGER    Attribute,
                            SQLPOINTER    ValuePtr,
                            SQLINTEGER    StringLength);
```

## 参数<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_s7729ce590d3c4eef9cbc62b3973d4feb"></a>

**表 1**  SQLSetConnectAttr参数

<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_tade40e51081242c39ed6b9052dd71671"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_r7eb093ebfd84455ca7313d34669fee99"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a667e7535363842138b12773dfea3acd1"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a667e7535363842138b12773dfea3acd1"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a667e7535363842138b12773dfea3acd1"></a><strong id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"></a><strong id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a20d1c40a467346c7b0f9da6d16d8e72e"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a20d1c40a467346c7b0f9da6d16d8e72e"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a20d1c40a467346c7b0f9da6d16d8e72e"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_rcbcb561bbde04c1abab3653b06f8af6f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_ae791a6b139fd429687444e6b313a8376"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_ae791a6b139fd429687444e6b313a8376"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_ae791a6b139fd429687444e6b313a8376"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"></a>连接句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_ref5fb95e1c1e4c70bdca3be2865ea6f6"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"></a>设置属性。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_r10e9ba39ddc74bbe97828a9fe966fbda"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"></a>指向对应Attribute的值。依赖于Attribute的值，ValuePtr是32位无符号整型值或指向以空结束的字符串。注意，如果ValuePtr参数是驱动程序指定值。ValuePtr可能是有符号的整数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_r3de5904d75fd4cfa9accc0752197579a"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af423e7625e0341eaaba023ac05edec20"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af423e7625e0341eaaba023ac05edec20"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_af423e7625e0341eaaba023ac05edec20"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"></a><a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"></a>如果ValuePtr指向字符串或二进制缓冲区，这个参数是*ValuePtr长度，如果ValuePtr指向整型，忽略StringLength。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_s12ee56593ac441249a9f5f184e227202"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。

## 注意事项<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_s78fe87e5aec14489b395f28b33ec0876"></a>

当SQLSetConnectAttr的返回值为SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过借助SQL\_HANDLE\_DBC的HandleType和ConnectionHandle的Handle，调用[SQLGetDiagRec](SQLGetDiagRec.md)可得到相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272901_zh-cn_topic_0237120431_zh-cn_topic_0059777827_s25786d32524c458786d43445baa48941"></a>

参见：[示例](示例-2.md)
