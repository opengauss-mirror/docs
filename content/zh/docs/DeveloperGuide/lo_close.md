# lo_close

## 功能描述<a name="zh-cn_topic__section696285173723"></a>

关闭一个大对象描述符。

## 原型<a name="zh-cn_topic__section2021053510595"></a>

```
int lo_close(PGconn* conn, int fd);
```

## 参数<a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  lo\_close参数

<a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62331c835d67791aadc239f71f22"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62331c835d67791aadc239f71f22"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62331c835d67791aadc239f71f22"></a><strong id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_r29c2816f105840058d4a248137b3cc09"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic__p23111054217"><a name="zh-cn_topic__p23111054217"></a><a name="zh-cn_topic__p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834235"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834235"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834235"></a>一个数据库连接</p>
</td>
</tr>
<tr id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_r29c2816f105840058d4a248137b3cc09"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic__p23111054217"><a name="zh-cn_topic__p23111054217"></a><a name="zh-cn_topic__p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834236"><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834236"></a><a name="zh-cn_topic__zh-cn_topic_0237120432_zh-cn_topic_0059778852_ab962697251834236"></a>文件描述符</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735613_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

int：成功时返回0，失败时返回-1。

## 示例<a name="zh-cn_topic__section185045611593"></a>

请参见[示例](示例-libpq.md)章节。