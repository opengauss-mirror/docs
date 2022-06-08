# PQgetCancel<a name="ZH-CN_TOPIC_0289900341"></a>

## 功能描述<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_section5708152714306"></a>

创建一个数据结构，其中包含取消通过特定数据库连接发出的命令所需的信息。

## 原型<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_section441681310810"></a>

```
PGcancel *PQgetCancel(PGconn *conn);
```

## 参数<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQgetCancel参数

<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p23111054217"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p23111054217"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p1393801515211"><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p1393801515211"></a><a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_p1393801515211"></a>指向包含链接信息的对象指针。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_section899452817814"></a>

PGcancel：指向包含cancel信息对象的指针。

## 注意事项<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

PQgetCancel创建一个给定PGconn连接对象的PGcancel对象。如果给定的conn是NULL或无效连接，它将返回NULL。PGcancel对象是一个不透明的结构，应用程序不能直接访问它；它只能传递给PQcancel或PQfreeCancel。

## 示例<a name="zh-cn_topic_0283137506_zh-cn_topic_0241735636_section4160944682"></a>

请参见[示例](示例.md)章节。

