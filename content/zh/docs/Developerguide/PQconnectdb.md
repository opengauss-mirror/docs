# PQconnectdb<a name="ZH-CN_TOPIC_0242380571"></a>

## 功能描述<a name="zh-cn_topic_0241735614_section71985281176"></a>

与数据库服务器建立一个新的连接。

## 原型<a name="zh-cn_topic_0241735614_section16892310193010"></a>

```
PGconn *PQconnectdb(const char *conninfo);
```

## 参数<a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQconnectdb参数

<a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735614_p144262583911"><a name="zh-cn_topic_0241735614_p144262583911"></a><a name="zh-cn_topic_0241735614_p144262583911"></a>conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>链接字符串，字符串中的字段见<a href="链接字符.md">链接字符</a>章节。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735614_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

PGconn \*：指向包含链接的对象指针，内存在函数内部申请。

## 注意事项<a name="zh-cn_topic_0241735614_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   这个函数用从一个字符串conninfo来的参数与数据库打开一个新的链接。
-   传入的参数可以为空，表明使用所有缺省的参数，或者可以包含一个或更多个用空白间隔的参数设置，或者它可以包含一个URL。

## 示例<a name="zh-cn_topic_0241735614_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

请参见[示例](示例-20.md)章节。
