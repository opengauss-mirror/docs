# lo_export

## 功能描述<a name="zh-cn_topic_0241735622_section696285173716"></a>

把一个大对象导出到一个服务器端的操作系统文件。

## 原型<a name="zh-cn_topic_0241735622_section2021053510596"></a>

```
int lo_export(PGconn* conn, Oid lobjId, const char* filename);
```

## 参数<a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  lo\_export参数

<a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183798"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183798"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183798"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>lobjId</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183797"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183797"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183797"></a>要导出的大对象的OID</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>filename</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183799"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183799"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96269725183799"></a>要导出的文件路径</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

int：成功时返回1，失败时返回-1。

## 示例<a name="zh-cn_topic_0241735622_section185045611593"></a>

请参见[示例](示例-libpq.md)章节。