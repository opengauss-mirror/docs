# PQsendQueryPrepared<a name="ZH-CN_TOPIC_0242380585"></a>

## 功能描述<a name="zh-cn_topic_0241735630_section1390173422515"></a>

发送一个请求执行带有给出参数的预备语句，不等待结果。

## 原型<a name="zh-cn_topic_0241735630_section1368952105717"></a>

```
int PQsendQueryPrepared(PGconn *conn,
                        const char *stmtName,
                        int nParams,
                        const char * const *paramValues,
                        const int *paramLengths,
                        const int *paramFormats,
                        int resultFormat);
```

## 参数<a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQsendQueryPrepared参数

<a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735630_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p23111054217"><a name="zh-cn_topic_0241735630_p23111054217"></a><a name="zh-cn_topic_0241735630_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p1393801515211"><a name="zh-cn_topic_0241735630_p1393801515211"></a><a name="zh-cn_topic_0241735630_p1393801515211"></a>指向包含链接信息的对象指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row3316185018428"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p931755034217"><a name="zh-cn_topic_0241735630_p931755034217"></a><a name="zh-cn_topic_0241735630_p931755034217"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p1431715054219"><a name="zh-cn_topic_0241735630_p1431715054219"></a><a name="zh-cn_topic_0241735630_p1431715054219"></a>需要执行的stmt名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row4482953194215"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p19483053144212"><a name="zh-cn_topic_0241735630_p19483053144212"></a><a name="zh-cn_topic_0241735630_p19483053144212"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p174838537427"><a name="zh-cn_topic_0241735630_p174838537427"></a><a name="zh-cn_topic_0241735630_p174838537427"></a>参数个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row831145720425"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p183111857174215"><a name="zh-cn_topic_0241735630_p183111857174215"></a><a name="zh-cn_topic_0241735630_p183111857174215"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p73121557154217"><a name="zh-cn_topic_0241735630_p73121557154217"></a><a name="zh-cn_topic_0241735630_p73121557154217"></a>参数值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row16597160194319"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p17598603438"><a name="zh-cn_topic_0241735630_p17598603438"></a><a name="zh-cn_topic_0241735630_p17598603438"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p759811024316"><a name="zh-cn_topic_0241735630_p759811024316"></a><a name="zh-cn_topic_0241735630_p759811024316"></a>参数长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row867391714318"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p16731817194314"><a name="zh-cn_topic_0241735630_p16731817194314"></a><a name="zh-cn_topic_0241735630_p16731817194314"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p6673417124318"><a name="zh-cn_topic_0241735630_p6673417124318"></a><a name="zh-cn_topic_0241735630_p6673417124318"></a>参数格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735630_row12806112084311"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735630_p138061020164318"><a name="zh-cn_topic_0241735630_p138061020164318"></a><a name="zh-cn_topic_0241735630_p138061020164318"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735630_p1807162015437"><a name="zh-cn_topic_0241735630_p1807162015437"></a><a name="zh-cn_topic_0241735630_p1807162015437"></a>结果的格式。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735630_section17296198165816"></a>

int：执行结果为1表示成功，0表示失败，失败原因存到conn-\>error\_message中。

## 注意事项<a name="zh-cn_topic_0241735630_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

该函数类似于PQsendQueryParams，但是要执行的命令是通过命名一个预先准备的语句来指定的，而不是提供一个查询字符串。该函数的参数与PQexecPrepared一样处理。和PQexecPrepared一样，它也不能在2.0协议的连接上工作。

## 示例<a name="zh-cn_topic_0241735630_section19689722205811"></a>

请参见[示例](示例-3.md)章节。
