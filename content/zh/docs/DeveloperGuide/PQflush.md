# PQflush<a name="ZH-CN_TOPIC_0242380586"></a>

## 功能描述<a name="zh-cn_topic_0241735631_section1516183316287"></a>

尝试将任何排队的输出数据刷新到服务器。

## 原型<a name="zh-cn_topic_0241735631_section14331620433"></a>

```
int PQflush(PGconn *conn);
```

## 参数<a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQflush参数

<a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735631_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735631_p23111054217"><a name="zh-cn_topic_0241735631_p23111054217"></a><a name="zh-cn_topic_0241735631_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735631_p1393801515211"><a name="zh-cn_topic_0241735631_p1393801515211"></a><a name="zh-cn_topic_0241735631_p1393801515211"></a>指向包含链接信息的对象指针</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735631_section66534382317"></a>

int：如果成功（或者如果发送队列为空），则返回0；如果由于某种原因失败，则返回-1；如果发送队列中的所有数据都发送失败，则返回1。（此情况只有在连接为非阻塞时才能发生），失败原因存到conn-\>error\_message中。

## 注意事项<a name="zh-cn_topic_0241735631_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

在非阻塞连接上发送任何命令或数据之后，调用PQflush。如果返回1，则等待套接字变为读或写就绪。如果为写就绪状态，则再次调用PQflush。如果已经读到，调用PQconsumeInput，然后再次调用PQflush。重复，直到PQflush返回0。（必须检查读就绪，并用PQconsumeInput排出输入，因为服务器可以阻止试图向我们发送数据，例如，通知信息，直到我们读完它才会读我们的数据。）一旦PQflush返回0，就等待套接字准备好，然后按照上面描述读取响应。

## 示例<a name="zh-cn_topic_0241735631_section1214255317311"></a>

请参见[示例](示例-3.md)章节。

