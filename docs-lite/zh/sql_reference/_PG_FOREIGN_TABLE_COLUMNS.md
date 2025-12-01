# \_PG\_FOREIGN\_TABLE\_COLUMNS<a name="ZH-CN_TOPIC_0310260669"></a>

显示外部表的列信息。该视图只有sysadmin权限可以查看。

**表 1**  \_PG\_FOREIGN\_TABLE\_COLUMNS字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="29.642964296429643%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.983098309830986%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="29.642964296429643%"><p id="p114615118564"><a name="p114615118564"></a><a name="p114615118564"></a>nspname</p>
</td>
<td class="cellrowborder" valign="top" width="30.983098309830986%"><p id="p14431511175614"><a name="p14431511175614"></a><a name="p14431511175614"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p14633175920315"><a name="p14633175920315"></a><a name="p14633175920315"></a>schema名称。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="29.642964296429643%"><p id="p173712113569"><a name="p173712113569"></a><a name="p173712113569"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="30.983098309830986%"><p id="p434131112566"><a name="p434131112566"></a><a name="p434131112566"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p232121145619"><a name="p232121145619"></a><a name="p232121145619"></a>表名称。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="29.642964296429643%"><p id="p929161105612"><a name="p929161105612"></a><a name="p929161105612"></a>attname</p>
</td>
<td class="cellrowborder" valign="top" width="30.983098309830986%"><p id="p122719112569"><a name="p122719112569"></a><a name="p122719112569"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p1023111175619"><a name="p1023111175619"></a><a name="p1023111175619"></a>列名称。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="29.642964296429643%"><p id="p102051111566"><a name="p102051111566"></a><a name="p102051111566"></a>attfdwoptions</p>
</td>
<td class="cellrowborder" valign="top" width="30.983098309830986%"><p id="p1016131116561"><a name="p1016131116561"></a><a name="p1016131116561"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p491042115713"><a name="p491042115713"></a><a name="p491042115713"></a>外部数据封装器的属性选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
</tbody>
</table>
