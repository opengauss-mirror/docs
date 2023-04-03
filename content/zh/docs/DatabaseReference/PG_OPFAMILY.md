# PG\_OPFAMILY<a name="ZH-CN_TOPIC_0289900724"></a>

PG\_OPFAMILY系统表定义操作符族。

每个操作符族是一个操作符和相关支持例程的集合，其中的例程实现为一个特定的索引访问方式指定的语义。另外，族中的操作符都是“兼容的”，通过由访问方式指定的方法。操作符族的概念允许交叉数据类型操作符和索引一起使用，并且合理的使用访问方式的语义的知识。

**表 1**  PG\_OPFAMILY字段

<a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_t260df90c3c004f98b7c6ff5952483c38"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_rbc8135bf47e846d88333f51b9114cd83"><th class="cellrowborder" valign="top" width="20.110000000000003%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.970000000000004%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="29.51%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8d16db01ed684f43911c6c356929955a"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8d16db01ed684f43911c6c356929955a"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8d16db01ed684f43911c6c356929955a"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="37.410000000000004%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_raa07dd2d84854bad947e5e086e3c3928"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a7c18523519fe457da07cf1005e123b33"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a7c18523519fe457da07cf1005e123b33"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a7c18523519fe457da07cf1005e123b33"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_rfd57d97bbf734bbb82d0ce87e4a37228"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af80d41b65553486a87f9ff3e35571128"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af80d41b65553486a87f9ff3e35571128"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af80d41b65553486a87f9ff3e35571128"></a>opfmethod</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"></a><a href="PG_AM.md">PG_AM</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"></a>操作符族使用的索引方法。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_rf897d9754fd54aab83824d3cfe0c33cf"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa80c02144149474596c5909de9136f02"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa80c02144149474596c5909de9136f02"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa80c02144149474596c5909de9136f02"></a>opfname</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"></a>这个操作符族的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_rd5de3158cf2440b2a8030604dbfd9292"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"></a>opfnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af2551a225a4f4670ab853d3aea684924"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af2551a225a4f4670ab853d3aea684924"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_af2551a225a4f4670ab853d3aea684924"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a50400062ab4548b48392794dece28b9c"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a50400062ab4548b48392794dece28b9c"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a50400062ab4548b48392794dece28b9c"></a>这个操作符的名称空间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_rccd470d52d7e495fb7020b8394d7ce63"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"></a>opfowner</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"></a><a name="zh-cn_topic_0283137129_zh-cn_topic_0237122305_zh-cn_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"></a>操作符族的所有者。</p>
</td>
</tr>
</tbody>
</table>

定义一个操作符族的大多数信息不在它的PG\_OPFAMILY行里面，而是在相关的行[PG\_AMOP](PG_AMOP.md)，[PG\_AMPROC](PG_AMPROC.md)和[PG\_OPCLASS](PG_OPCLASS.md)里。

