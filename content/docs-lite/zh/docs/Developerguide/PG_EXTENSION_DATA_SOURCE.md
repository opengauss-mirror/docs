# PG\_EXTENSION\_DATA\_SOURCE<a name="ZH-CN_TOPIC_0289900626"></a>

PG\_EXTENSION\_DATA\_SOURCE系统表存储外部数据源对象的信息。一个外部数据源对象（Data Source）包含了外部数据库的一些口令编码等信息，主要配合Extension Connector使用。

**表 1**  PG\_EXTENSION\_DATA\_SOURCE字段

<a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_table13368458915"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row53681151092"><th class="cellrowborder" valign="top" width="18.9%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p20368135990"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p20368135990"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p20368135990"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.09%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173683512910"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173683512910"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173683512910"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="20.19%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p163682054915"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p163682054915"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p163682054915"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.82%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14368857916"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14368857916"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14368857916"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row1230103951914"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p183063921920"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p183063921920"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p183063921920"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123143981913"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123143981913"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123143981913"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p031339121912"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p031339121912"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p031339121912"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p23116392197"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p23116392197"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p23116392197"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row03685511914"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19368653917"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19368653917"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19368653917"></a>srcname</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43687516914"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43687516914"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43687516914"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436845791"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436845791"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436845791"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p33681151096"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p33681151096"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p33681151096"></a>外部数据源对象的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row6368135295"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p17368459914"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p17368459914"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p17368459914"></a>srcowner</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p11368195796"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p11368195796"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p11368195796"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123691857912"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123691857912"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p123691857912"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p153691351292"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p153691351292"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p153691351292"></a>外部数据源对象的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row17369351494"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1436914510913"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1436914510913"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1436914510913"></a>srctype</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19369135791"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19369135791"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p19369135791"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436975795"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436975795"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p436975795"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14369185793"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14369185793"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p14369185793"></a>外部数据源对象的类型，缺省为空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row12369155192"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43691053912"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43691053912"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p43691053912"></a>srcversion</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p13691355914"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p13691355914"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p13691355914"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173691516911"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173691516911"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p173691516911"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p6369751996"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p6369751996"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p6369751996"></a>外部数据源对象的版本，缺省为空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row1336945193"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p53691951194"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p53691951194"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p53691951194"></a>srcacl</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143694514912"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143694514912"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143694514912"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1536917513915"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1536917513915"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1536917513915"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p4369251092"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p4369251092"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p4369251092"></a>访问权限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_row133691551493"><td class="cellrowborder" valign="top" width="18.9%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p236955795"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p236955795"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p236955795"></a>srcoptions</p>
</td>
<td class="cellrowborder" valign="top" width="18.09%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143691851397"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143691851397"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p143691851397"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="20.19%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1936919513910"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1936919513910"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p1936919513910"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.82%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p12369205199"><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p12369205199"></a><a name="zh-cn_topic_0283137407_zh-cn_topic_0237122289_p12369205199"></a>外部数据源对象的指定选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss提供此系统表，但SQL on Anywhere不可用。

