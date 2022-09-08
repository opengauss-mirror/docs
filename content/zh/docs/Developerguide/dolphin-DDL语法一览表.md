# DDL语法一览表<a name="ZH-CN_TOPIC_0289900414"></a>

DDL（Data Definition Language数据定义语言），用于定义或修改数据库中的对象。如：表、索引、视图等。

## 定义表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

表是数据库中的一种特殊数据结构，用于存储数据对象以及对象之间的关系。所涉及的SQL语句，请参考[表1](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605)。

**表 1**  表定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>修改表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## 定义索引<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606)。

**表 2**  索引定义相关SQL
<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>定义索引</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-CREATE-INDEX.md">CREATE INDEX</a></p>
</td>
</tr>
</tr>
</tbody>
</table>