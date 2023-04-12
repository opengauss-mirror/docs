# PQsendQueryParams<a name="ZH-CN_TOPIC_0242380583"></a>

## 功能描述<a name="zh-cn_topic_0241735628_section10518135331919"></a>

给服务器提交一个命令和分隔的参数，而不等待结果。

## 原型<a name="zh-cn_topic_0241735628_section16481193174814"></a>

```
int PQsendQueryParams(PGconn *conn,
                      const char *command,
                      int nParams,
                      const Oid *paramTypes,
                      const char * const *paramValues,
                      const int *paramLengths,
                      const int *paramFormats,
                      int resultFormat);
```

## 参数<a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQsendQueryParams参数

<a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735628_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p23111054217"><a name="zh-cn_topic_0241735628_p23111054217"></a><a name="zh-cn_topic_0241735628_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p1393801515211"><a name="zh-cn_topic_0241735628_p1393801515211"></a><a name="zh-cn_topic_0241735628_p1393801515211"></a>指向包含链接的对象指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p43682026202518"><a name="zh-cn_topic_0241735628_p43682026202518"></a><a name="zh-cn_topic_0241735628_p43682026202518"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p188061636131313"><a name="zh-cn_topic_0241735628_p188061636131313"></a><a name="zh-cn_topic_0241735628_p188061636131313"></a>需要执行的查询字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p1995314182810"><a name="zh-cn_topic_0241735628_p1995314182810"></a><a name="zh-cn_topic_0241735628_p1995314182810"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p1195316412818"><a name="zh-cn_topic_0241735628_p1195316412818"></a><a name="zh-cn_topic_0241735628_p1195316412818"></a>参数个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row771131052816"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p107111082810"><a name="zh-cn_topic_0241735628_p107111082810"></a><a name="zh-cn_topic_0241735628_p107111082810"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p107218104285"><a name="zh-cn_topic_0241735628_p107218104285"></a><a name="zh-cn_topic_0241735628_p107218104285"></a>参数类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row196171413122814"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p26189137281"><a name="zh-cn_topic_0241735628_p26189137281"></a><a name="zh-cn_topic_0241735628_p26189137281"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p76181130289"><a name="zh-cn_topic_0241735628_p76181130289"></a><a name="zh-cn_topic_0241735628_p76181130289"></a>参数值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row5325017152810"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p14325131712817"><a name="zh-cn_topic_0241735628_p14325131712817"></a><a name="zh-cn_topic_0241735628_p14325131712817"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p155043458298"><a name="zh-cn_topic_0241735628_p155043458298"></a><a name="zh-cn_topic_0241735628_p155043458298"></a>参数长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row138182205282"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p14819120132815"><a name="zh-cn_topic_0241735628_p14819120132815"></a><a name="zh-cn_topic_0241735628_p14819120132815"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p14972175612911"><a name="zh-cn_topic_0241735628_p14972175612911"></a><a name="zh-cn_topic_0241735628_p14972175612911"></a>参数格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735628_row1498215426281"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735628_p1598364217282"><a name="zh-cn_topic_0241735628_p1598364217282"></a><a name="zh-cn_topic_0241735628_p1598364217282"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735628_p159837427287"><a name="zh-cn_topic_0241735628_p159837427287"></a><a name="zh-cn_topic_0241735628_p159837427287"></a>结果的格式。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735628_section171501851145318"></a>

int：执行结果为1表示成功，0表示失败，失败原因存到conn-\>errorMessage中。

## 注意事项<a name="zh-cn_topic_0241735628_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

该函数等效于PQsendQuery，只是查询参数可以和查询字符串分开声明。函数的参数处理和PQexecParams一样，和PQexecParams类似，它不能在2.0版本的协议连接上工作，并且它只允许在查询字符串里出现一条命令。

## 示例<a name="zh-cn_topic_0241735628_section13161655174820"></a>

请参见[示例](示例-libpq.md)章节。

