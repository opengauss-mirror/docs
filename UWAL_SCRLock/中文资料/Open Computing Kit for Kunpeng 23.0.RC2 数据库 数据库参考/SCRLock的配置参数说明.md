# SCRLock的配置参数说明<a name="ZH-CN_TOPIC_0000001682825270"></a>

在开启SCRLock特性之前或关闭SCRLock特性时，可以用**vim**方式或**gs\_guc**命令配置以下参数。

**表 1**  SCRLock的配置参数

<a name="table2032119112819"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001684856952_row153213142814"><th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0000001684856952_p1032118122817"><a name="zh-cn_topic_0000001684856952_p1032118122817"></a><a name="zh-cn_topic_0000001684856952_p1032118122817"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.32%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0000001684856952_p12321612289"><a name="zh-cn_topic_0000001684856952_p12321612289"></a><a name="zh-cn_topic_0000001684856952_p12321612289"></a>参数类型</p>
</th>
<th class="cellrowborder" valign="top" width="27.68%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0000001684856952_p1792134743014"><a name="zh-cn_topic_0000001684856952_p1792134743014"></a><a name="zh-cn_topic_0000001684856952_p1792134743014"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="31.869999999999997%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0000001684856952_p03212162814"><a name="zh-cn_topic_0000001684856952_p03212162814"></a><a name="zh-cn_topic_0000001684856952_p03212162814"></a>取值范围</p>
</th>
<th class="cellrowborder" valign="top" width="9.13%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0000001684856952_p133211811288"><a name="zh-cn_topic_0000001684856952_p133211811288"></a><a name="zh-cn_topic_0000001684856952_p133211811288"></a>缺省值</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001684856952_row113217112281"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p16921116152919"><a name="zh-cn_topic_0000001684856952_p16921116152919"></a><a name="zh-cn_topic_0000001684856952_p16921116152919"></a>ss_enable_scrlock</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p33216114289"><a name="zh-cn_topic_0000001684856952_p33216114289"></a><a name="zh-cn_topic_0000001684856952_p33216114289"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p10321616286"><a name="zh-cn_topic_0000001684856952_p10321616286"></a><a name="zh-cn_topic_0000001684856952_p10321616286"></a>用于开启或关闭SCRLock。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="zh-cn_topic_0000001684856952_ul259918256327"></a><a name="zh-cn_topic_0000001684856952_ul259918256327"></a><ul id="zh-cn_topic_0000001684856952_ul259918256327"><li>on，表示开启SCRLock。</li><li>off，表示关闭SCRLock。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p173219132818"><a name="zh-cn_topic_0000001684856952_p173219132818"></a><a name="zh-cn_topic_0000001684856952_p173219132818"></a>off</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001684856952_row1032171132813"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p962235515324"><a name="zh-cn_topic_0000001684856952_p962235515324"></a><a name="zh-cn_topic_0000001684856952_p962235515324"></a>ss_enable_scrlock_sleep_mode</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p173226192810"><a name="zh-cn_topic_0000001684856952_p173226192810"></a><a name="zh-cn_topic_0000001684856952_p173226192810"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p732212192811"><a name="zh-cn_topic_0000001684856952_p732212192811"></a><a name="zh-cn_topic_0000001684856952_p732212192811"></a>用于开启或关闭SCRLock睡眠模式。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="zh-cn_topic_0000001684856952_ul035519605310"></a><a name="zh-cn_topic_0000001684856952_ul035519605310"></a><ul id="zh-cn_topic_0000001684856952_ul035519605310"><li>on，表示开启睡眠模式。</li><li>off，表示关闭睡眠模式。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p432251152820"><a name="zh-cn_topic_0000001684856952_p432251152820"></a><a name="zh-cn_topic_0000001684856952_p432251152820"></a>on</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001684856952_row632219111286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p13393103633316"><a name="zh-cn_topic_0000001684856952_p13393103633316"></a><a name="zh-cn_topic_0000001684856952_p13393103633316"></a>ss_scrlock_server_port</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p53227110289"><a name="zh-cn_topic_0000001684856952_p53227110289"></a><a name="zh-cn_topic_0000001684856952_p53227110289"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p13221810289"><a name="zh-cn_topic_0000001684856952_p13221810289"></a><a name="zh-cn_topic_0000001684856952_p13221810289"></a>表示SCRLock服务端侦听端口号。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001684856952_p1920015242136"><a name="zh-cn_topic_0000001684856952_p1920015242136"></a><a name="zh-cn_topic_0000001684856952_p1920015242136"></a>1024～65535</p>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p18913214346"><a name="zh-cn_topic_0000001684856952_p18913214346"></a><a name="zh-cn_topic_0000001684856952_p18913214346"></a>8000</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001684856952_row832210117286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p10497618113418"><a name="zh-cn_topic_0000001684856952_p10497618113418"></a><a name="zh-cn_topic_0000001684856952_p10497618113418"></a>ss_scrlock_worker_count</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p13224115281"><a name="zh-cn_topic_0000001684856952_p13224115281"></a><a name="zh-cn_topic_0000001684856952_p13224115281"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p332217114288"><a name="zh-cn_topic_0000001684856952_p332217114288"></a><a name="zh-cn_topic_0000001684856952_p332217114288"></a>表示SCRLock客户端worker数量。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001684856952_p36595403134"><a name="zh-cn_topic_0000001684856952_p36595403134"></a><a name="zh-cn_topic_0000001684856952_p36595403134"></a>2～16</p>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p163223112288"><a name="zh-cn_topic_0000001684856952_p163223112288"></a><a name="zh-cn_topic_0000001684856952_p163223112288"></a>2</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001684856952_row1532261192810"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p8930195020342"><a name="zh-cn_topic_0000001684856952_p8930195020342"></a><a name="zh-cn_topic_0000001684856952_p8930195020342"></a>ss_scrlock_worker_bind_core</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p1032219172810"><a name="zh-cn_topic_0000001684856952_p1032219172810"></a><a name="zh-cn_topic_0000001684856952_p1032219172810"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p1728795315350"><a name="zh-cn_topic_0000001684856952_p1728795315350"></a><a name="zh-cn_topic_0000001684856952_p1728795315350"></a>表示SCRLock worker占用起止CPU。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001684856952_p163221915285"><a name="zh-cn_topic_0000001684856952_p163221915285"></a><a name="zh-cn_topic_0000001684856952_p163221915285"></a>"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"</p>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p1632214122810"><a name="zh-cn_topic_0000001684856952_p1632214122810"></a><a name="zh-cn_topic_0000001684856952_p1632214122810"></a>""</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001684856952_row632218172820"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001684856952_p4128839123517"><a name="zh-cn_topic_0000001684856952_p4128839123517"></a><a name="zh-cn_topic_0000001684856952_p4128839123517"></a>ss_scrlock_server_bind_core</p>
</td>
<td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001684856952_p73229115286"><a name="zh-cn_topic_0000001684856952_p73229115286"></a><a name="zh-cn_topic_0000001684856952_p73229115286"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001684856952_p2032210192820"><a name="zh-cn_topic_0000001684856952_p2032210192820"></a><a name="zh-cn_topic_0000001684856952_p2032210192820"></a>表示SCRLock server占用起止CPU。</p>
</td>
<td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001684856952_p193221162818"><a name="zh-cn_topic_0000001684856952_p193221162818"></a><a name="zh-cn_topic_0000001684856952_p193221162818"></a>"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"</p>
</td>
<td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001684856952_p83223110285"><a name="zh-cn_topic_0000001684856952_p83223110285"></a><a name="zh-cn_topic_0000001684856952_p83223110285"></a>""</p>
</td>
</tr>
</tbody>
</table>

