# PQcancel<a name="ZH-CN_TOPIC_0242380590"></a>

## 功能描述<a name="zh-cn_topic_0241735638_section744771516345"></a>

要求服务器放弃处理当前命令。

## 原型<a name="zh-cn_topic_0241735638_section18974913134"></a>

```
int PQcancel(PGcancel *cancel, char *errbuf, int errbufsize);
```

## 参数<a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQcancel参数

<a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735638_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735638_p23111054217"><a name="zh-cn_topic_0241735638_p23111054217"></a><a name="zh-cn_topic_0241735638_p23111054217"></a>cancel</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735638_p1393801515211"><a name="zh-cn_topic_0241735638_p1393801515211"></a><a name="zh-cn_topic_0241735638_p1393801515211"></a>指向包含cancel信息的对象指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735638_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735638_p43682026202518"><a name="zh-cn_topic_0241735638_p43682026202518"></a><a name="zh-cn_topic_0241735638_p43682026202518"></a>errbuf</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735638_p10403105013320"><a name="zh-cn_topic_0241735638_p10403105013320"></a><a name="zh-cn_topic_0241735638_p10403105013320"></a>出错保存错误信息的buffer。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735638_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735638_p1995314182810"><a name="zh-cn_topic_0241735638_p1995314182810"></a><a name="zh-cn_topic_0241735638_p1995314182810"></a>errbufsize</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735638_p1737919549321"><a name="zh-cn_topic_0241735638_p1737919549321"></a><a name="zh-cn_topic_0241735638_p1737919549321"></a>保存错误信息的buffer大小。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735638_section1512067101414"></a>

int：执行结果为1表示成功，0表示失败，失败原因存到errbuf中。

## 注意事项<a name="zh-cn_topic_0241735638_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   成功发送并不保证请求将产生任何效果。如果取消有效，当前命令将提前终止并返回错误结果。如果取消失败（例如，因为服务器已经处理完命令），无返回结果。
-   如果errbuf是信号处理程序中的局部变量，则可以安全地从信号处理程序中调用PQcancel。就PQcancel而言，PGcancel对象是只读的，因此它也可以从一个线程中调用，这个线程与操作PGconn对象线程是分离的。

## 示例<a name="zh-cn_topic_0241735638_section724101713148"></a>

请参见[示例](示例-3.md)章节。

