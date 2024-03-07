# lo_creat<a name="ZH-CN_TOPIC_0242380592"></a>

## 功能描述<a name="zh-cn_topic_0241735619_section696285173714"></a>

创建一个大对象。

## 原型<a name="zh-cn_topic_0241735619_section2021053510594"></a>

```
Oid lo_creat(PGconn* conn, int mode);
```

## 参数<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s3c7b37936d863eabb02ae76fe1cd3c53"></a>

**表 1**  lo\_creat参数

<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834031"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834031"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834031"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834032"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834032"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834032"></a>指定只读、只写或者读写，已弃用、会被忽略，为兼容旧版本而保留参数</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

oid：返回值是分配给新大对象的OID或InvalidOid（0）表示发生错误。

# lo_create

## 功能描述<a name="zh-cn_topic_0241735619_section696285173714"></a>

指定OID创建一个大对象，如果该OID已经被某个大对象使用时则会产生错误。

## 原型<a name="zh-cn_topic_0241735619_section2021053510593"></a>

```
Oid lo_create(PGconn* conn, Oid lobjId);
```

## 参数<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s3c7b37936d863eabb02ae76fe1cd3c53"></a>

**表 1**  lo\_create参数

<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834033"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834033"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834033"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>lobjId</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834034"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834034"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834034"></a>要创建的大对象的oid</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

oid：返回值是分配给新大对象的OID或InvalidOid（0）表示发生错误。

## 示例<a name="zh-cn_topic_0241735638_section724101713155"></a>

请参见[示例](示例-libpq.md)章节。