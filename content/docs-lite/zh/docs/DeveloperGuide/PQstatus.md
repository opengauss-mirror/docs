# PQstatus<a name="ZH-CN_TOPIC_0242380575"></a>

## 功能描述<a name="zh-cn_topic_0241735618_section12403151164211"></a>

返回链接的状态。

## 原型<a name="zh-cn_topic_0241735618_section5810194710717"></a>

```
ConnStatusType PQstatus(const PGconn *conn);
```

## 参数<a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQstatus参数

<a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735618_p23111054217"><a name="zh-cn_topic_0241735618_p23111054217"></a><a name="zh-cn_topic_0241735618_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735618_p1393801515211"><a name="zh-cn_topic_0241735618_p1393801515211"></a><a name="zh-cn_topic_0241735618_p1393801515211"></a>指向包含链接的对象指针。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735618_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

ConnStatusType：链接状态的枚举，包括：

```
CONNECTION_STARTED
等待进行连接。

CONNECTION_MADE
连接成功；等待发送。

CONNECTION_AWAITING_RESPONSE
等待来自服务器的响应。

CONNECTION_AUTH_OK
已收到认证；等待后端启动结束。

CONNECTION_SSL_STARTUP
协商SSL加密。

CONNECTION_SETENV
协商环境驱动的参数设置。

CONNECTION_OK
链接正常。

CONNECTION_BAD
链接故障。
```

## 注意事项<a name="zh-cn_topic_0241735618_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

状态可以是多个值之一。但是，在异步连接过程之外只能看到其中两个：CONNECTION\_OK和CONNECTION\_BAD。与数据库的良好连接状态为CONNECTION\_OK。与数据库的连接尝试失败为CONNECTION\_BAD。通常，“正常”状态将一直保持到PQfinish，但通信失败可能会导致状态CONNECTION\_BAD过早变为。在这种情况下，应用程序可以尝试通过调用进行恢复PQreset。

## 示例<a name="zh-cn_topic_0241735618_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

请参见[示例](示例-libpq.md)章节。

