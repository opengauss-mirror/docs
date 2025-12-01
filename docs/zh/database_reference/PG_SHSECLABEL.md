# PG\_SHSECLABEL

PG\_SHSECLABEL系统表存储在共享数据库对象上的安全标签。安全标签可以用SECURITY LABEL命令操作。

查看安全标签的简单点的方法，请参阅[PG\_SECLABELS](PG_SECLABELS.md)。

[PG\_SECLABEL](PG_SECLABEL.md)的作用类似，只是它是用于在单个数据库内部的对象的安全标签的。

不同于大多数的系统表，PG\_SHSECLABEL在openGauss中的所有数据库中共享：每个openGauss只有一个PG\_SHSECLABEL，而不是每个数据库一个。

**表 1**  PG\_SHSECLABEL字段

<a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_tba60076b7fa44497bbb0ef74c9ff01f1"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_rd5ca85b44f734b46aab8ed63f0fb7a14"><th class="cellrowborder" valign="top" width="18.04819518048195%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.028797120287972%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="23.30766923307669%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ab397049b1bd74690b32cc757e7fc3b62"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ab397049b1bd74690b32cc757e7fc3b62"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ab397049b1bd74690b32cc757e7fc3b62"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="46.61533846615338%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_r431e9edbca7c4ea5a40f5e56a9f4590c"><td class="cellrowborder" valign="top" width="18.04819518048195%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"></a>objoid</p>
</td>
<td class="cellrowborder" valign="top" width="12.028797120287972%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="23.30766923307669%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_adf9a8c900e5544fab25fd27cfa692f6f"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_adf9a8c900e5544fab25fd27cfa692f6f"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_adf9a8c900e5544fab25fd27cfa692f6f"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="46.61533846615338%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"></a>这个安全标签所属的对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_rfc2e47110af14defa2be2d47eaccb7d8"><td class="cellrowborder" valign="top" width="18.04819518048195%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"></a>classoid</p>
</td>
<td class="cellrowborder" valign="top" width="12.028797120287972%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="23.30766923307669%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0492c3a49c3b46e297a09f7fde0d58ae"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0492c3a49c3b46e297a09f7fde0d58ae"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0492c3a49c3b46e297a09f7fde0d58ae"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.61533846615338%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"></a>出现这个对象的系统目录的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_r48fe2e5dac594796b2a1e8233e4715c9"><td class="cellrowborder" valign="top" width="18.04819518048195%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"></a>provider</p>
</td>
<td class="cellrowborder" valign="top" width="12.028797120287972%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="23.30766923307669%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_abfe1e6e0cc7b4f5b8cbdaadbfa94e3dd"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_abfe1e6e0cc7b4f5b8cbdaadbfa94e3dd"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_abfe1e6e0cc7b4f5b8cbdaadbfa94e3dd"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.61533846615338%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"></a>与这个标签相关的标签提供程序。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_r152bb9b220694af796342c8c3531a055"><td class="cellrowborder" valign="top" width="18.04819518048195%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"></a>label</p>
</td>
<td class="cellrowborder" valign="top" width="12.028797120287972%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="23.30766923307669%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa4d2762b39ad44d1963de26f6d173ef7"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa4d2762b39ad44d1963de26f6d173ef7"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_aa4d2762b39ad44d1963de26f6d173ef7"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.61533846615338%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"></a><a name="zh-cn_topic_0283136761_zh-cn_topic_0237122316_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"></a>应用于这个对象的安全标签。</p>
</td>
</tr>
</tbody>
</table>

