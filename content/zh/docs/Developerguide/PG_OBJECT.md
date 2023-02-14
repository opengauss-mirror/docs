# PG\_OBJECT

PG\_OBJECT系统表存储限定类型对象（普通表、索引、序列、视图、存储过程和函数）的创建用户、创建时间和最后修改时间。

**表 1**  PG\_OBJECT字段

<a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_table370273621911"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row177034367196"><th class="cellrowborder" valign="top" width="20.13201320132013%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.08180818081808%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.786178617861786%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row770433620196"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a>object_oid</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a>对象标识符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row870533671915"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670683617193"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670683617193"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670683617193"></a>object_type</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13706153610194"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13706153610194"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13706153610194"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p117061136121914"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p117061136121914"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p117061136121914"></a>对象类型：</p>
<a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_ul14461631102216"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_ul14461631102216"></a><ul id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_ul14461631102216"><li>r 表示普通表。</li><li>i 表示索引。</li><li>s 表示序列。</li><li>l 表示Large序列。</li><li>v 表示视图。</li><li>p 表示存储过程和函数。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row470616364192"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p197066366199"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p197066366199"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p197066366199"></a>creator</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4706133631911"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4706133631911"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4706133631911"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p370693681911"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p370693681911"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p370693681911"></a>创建用户的标识符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row3706143601913"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p770713610197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p770713610197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p770713610197"></a>ctime</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9707203619192"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9707203619192"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9707203619192"></a>对象的创建时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row8707183613197"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1870820360196"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1870820360196"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1870820360196"></a>mtime</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4708336141913"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4708336141913"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p4708336141913"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13708143651914"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13708143651914"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p13708143651914"></a>对象的最后修改时间，修改行为包括ALTER操作和GRANT、REVOKE操作。</p>
</td>
</tr>
<tr id="row95518631016"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p148051512368"><a name="p148051512368"></a><a name="p148051512368"></a>createcsn</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p19555691018"><a name="p19555691018"></a><a name="p19555691018"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p105517671010"><a name="p105517671010"></a><a name="p105517671010"></a>对象创建时的CSN。</p>
</td>
</tr>
<tr id="row35161421017"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411016"><a name="p1621411016"></a><a name="p1621411016"></a>changecsn</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410109"><a name="p116141410109"></a><a name="p116141410109"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101012"><a name="p161514101012"></a><a name="p161514101012"></a>对表或索引执行DDL操作时的CSN。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.png) **须知：**
>
>-   无法记录初始化数据库（initdb）过程中所创建或修改的对象，即PG\_OBJECT无法查询到该对象记录。
>-   对于升级前创建的对象，再次修改时会记录其修改时间（mtime），对表或索引执行DDL操作时会记录其所属事务的事务提交序列号（changecsn）。由于无法得知该对象创建时间，因此ctime和createcsn为空。
>-   ctime和mtime所记录的时间为用户当次操作所属事务的起始时间。
>-   由扩容引起的对象修改时间也会被记录。
>-   createcsn和changecsn记录的是用户当次操作所属事务的事务提交序列号。
>-   enable\_gtt\_concurrent\_truncate开启时，truncate全局临时表不会刷新mtime字段。
