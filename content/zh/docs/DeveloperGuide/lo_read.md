# lo_read

## 功能描述<a name="zh-cn_topic_0241735622_section696285173719"></a>

从一个大对象读取数据。

## 原型<a name="zh-cn_topic_0241735622_section2021053510600"></a>

```
int lo_read(PGconn* conn, int fd, char* buf, size_t len);
```

## 参数<a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  lo\_read参数

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
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487180"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487180"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487180"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487181"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487181"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487181"></a>文件描述符</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>buf</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487182"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487182"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487182"></a>从大对象描述符中读取最多len字节到buf</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735622_p23111054217"><a name="zh-cn_topic_0241735622_p23111054217"></a><a name="zh-cn_topic_0241735622_p23111054217"></a>len</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487193"><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487193"></a><a name="zh-cn_topic_0241735622_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aa96268756487193"></a>要读取的数据长度</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

int：实际读出的字节数将被返回，如果先到达了大对象的末尾返回值可能会小于len。出错时返回值为-1。

## 示例<a name="zh-cn_topic_0241735622_section185045611593"></a>

请参见[示例](示例-libpq.md)章节。