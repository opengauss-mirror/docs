# lo_lseek<a name="ZH-CN_TOPIC_0242380595"></a>

## 功能描述<a name="zh-cn_topic_0241735619_section696285173720"></a>

改变一个大对象描述符的当前读或写位置。

## 原型<a name="zh-cn_topic_0241735619_section2021053510598"></a>

```
int lo_lseek(PGconn* conn, int fd, int offset, int whence);
```

## 参数<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  lo\_lseek参数

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
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083796"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083796"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083796"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083792"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083792"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083792"></a>文件描述符</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>offset</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083791"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083791"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083791"></a>将文件描述符的当前位置指针移动到由offset指定的新位置</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>whence</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083795"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083795"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083795"></a>从对象开头定位、从当前位置定位、或从对象末尾定位</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

int：新位置的指针，或者是-1表示出错。

# lo_lseek64

## 功能描述<a name="zh-cn_topic_0241735619_section696285173713"></a>

改变一个\(可能超过2GB大小\)大对象描述符的当前读或写位置。

## 原型<a name="zh-cn_topic_0241735619_section2021053510593"></a>

```
long int lo_lseek64(PGconn *conn, int fd, long int offset, int whence);
```

## 参数<a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  lo\_lseek64参数

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
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083797"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083797"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083797"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083790"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083790"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083790"></a>文件描述符</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>offset</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083798"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083798"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083798"></a>将文件描述符的当前位置指针移动到由offset指定的新位置</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735619_p23111054217"><a name="zh-cn_topic_0241735619_p23111054217"></a><a name="zh-cn_topic_0241735619_p23111054217"></a>whence</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083794"><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083794"></a><a name="zh-cn_topic_0241735619_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab96268715083794"></a>从对象开头定位、从当前位置定位、或从对象末尾定位</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

int：新位置的指针，或者是-1表示出错。

## 示例<a name="zh-cn_topic_0241735638_section724101713155"></a>

请参见[示例](示例-libpq.md)章节。