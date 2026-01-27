# WORKLOAD\_TRANSACTION

当前节点上负载的事务信息。

**表 1**  WORKLOAD\_TRANSACTION字段

<a name="zh-cn_topic_0237122621_table192653201714"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122621_row1243117216171"><th class="cellrowborder" valign="top" width="24.22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122621_p11431127176"><a name="zh-cn_topic_0237122621_p11431127176"></a><a name="zh-cn_topic_0237122621_p11431127176"></a><strong id="zh-cn_topic_0237122621_b243115210177"><a name="zh-cn_topic_0237122621_b243115210177"></a><a name="zh-cn_topic_0237122621_b243115210177"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.61%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122621_p164317231712"><a name="zh-cn_topic_0237122621_p164317231712"></a><a name="zh-cn_topic_0237122621_p164317231712"></a><strong id="zh-cn_topic_0237122621_b10431182201717"><a name="zh-cn_topic_0237122621_b10431182201717"></a><a name="zh-cn_topic_0237122621_b10431182201717"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.17%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122621_p1243116211174"><a name="zh-cn_topic_0237122621_p1243116211174"></a><a name="zh-cn_topic_0237122621_p1243116211174"></a><strong id="zh-cn_topic_0237122621_b13432112161715"><a name="zh-cn_topic_0237122621_b13432112161715"></a><a name="zh-cn_topic_0237122621_b13432112161715"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122621_row443214212176"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p184329291715"><a name="zh-cn_topic_0237122621_p184329291715"></a><a name="zh-cn_topic_0237122621_p184329291715"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p19432424179"><a name="zh-cn_topic_0237122621_p19432424179"></a><a name="zh-cn_topic_0237122621_p19432424179"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p4432924172"><a name="zh-cn_topic_0237122621_p4432924172"></a><a name="zh-cn_topic_0237122621_p4432924172"></a>负载的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row134327251711"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p114321024173"><a name="zh-cn_topic_0237122621_p114321024173"></a><a name="zh-cn_topic_0237122621_p114321024173"></a>commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p1143212215177"><a name="zh-cn_topic_0237122621_p1143212215177"></a><a name="zh-cn_topic_0237122621_p1143212215177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p843232111717"><a name="zh-cn_topic_0237122621_p843232111717"></a><a name="zh-cn_topic_0237122621_p843232111717"></a>用户事务commit数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row243222141720"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p1943252151713"><a name="zh-cn_topic_0237122621_p1943252151713"></a><a name="zh-cn_topic_0237122621_p1943252151713"></a>rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p154320251717"><a name="zh-cn_topic_0237122621_p154320251717"></a><a name="zh-cn_topic_0237122621_p154320251717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p13433162181714"><a name="zh-cn_topic_0237122621_p13433162181714"></a><a name="zh-cn_topic_0237122621_p13433162181714"></a>用户事务rollback数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row13433102131713"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p13433172171715"><a name="zh-cn_topic_0237122621_p13433172171715"></a><a name="zh-cn_topic_0237122621_p13433172171715"></a>resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p134337213177"><a name="zh-cn_topic_0237122621_p134337213177"></a><a name="zh-cn_topic_0237122621_p134337213177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p44339231716"><a name="zh-cn_topic_0237122621_p44339231716"></a><a name="zh-cn_topic_0237122621_p44339231716"></a>用户事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row24330219179"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p184339211714"><a name="zh-cn_topic_0237122621_p184339211714"></a><a name="zh-cn_topic_0237122621_p184339211714"></a>resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p4433926170"><a name="zh-cn_topic_0237122621_p4433926170"></a><a name="zh-cn_topic_0237122621_p4433926170"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p104331228177"><a name="zh-cn_topic_0237122621_p104331228177"></a><a name="zh-cn_topic_0237122621_p104331228177"></a>用户事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row124331427175"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p84333210178"><a name="zh-cn_topic_0237122621_p84333210178"></a><a name="zh-cn_topic_0237122621_p84333210178"></a>resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p1243382191712"><a name="zh-cn_topic_0237122621_p1243382191712"></a><a name="zh-cn_topic_0237122621_p1243382191712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p843422201718"><a name="zh-cn_topic_0237122621_p843422201718"></a><a name="zh-cn_topic_0237122621_p843422201718"></a>用户事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row14434152141713"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p143411291719"><a name="zh-cn_topic_0237122621_p143411291719"></a><a name="zh-cn_topic_0237122621_p143411291719"></a>resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p1643472181710"><a name="zh-cn_topic_0237122621_p1643472181710"></a><a name="zh-cn_topic_0237122621_p1643472181710"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p20434026174"><a name="zh-cn_topic_0237122621_p20434026174"></a><a name="zh-cn_topic_0237122621_p20434026174"></a>用户事务总响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row1543462121718"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p16434192151710"><a name="zh-cn_topic_0237122621_p16434192151710"></a><a name="zh-cn_topic_0237122621_p16434192151710"></a>bg_commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p1143418216173"><a name="zh-cn_topic_0237122621_p1143418216173"></a><a name="zh-cn_topic_0237122621_p1143418216173"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p243419211715"><a name="zh-cn_topic_0237122621_p243419211715"></a><a name="zh-cn_topic_0237122621_p243419211715"></a>后台事务commit数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row1943411211710"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p164349212179"><a name="zh-cn_topic_0237122621_p164349212179"></a><a name="zh-cn_topic_0237122621_p164349212179"></a>bg_rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p943442111717"><a name="zh-cn_topic_0237122621_p943442111717"></a><a name="zh-cn_topic_0237122621_p943442111717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p154351122172"><a name="zh-cn_topic_0237122621_p154351122172"></a><a name="zh-cn_topic_0237122621_p154351122172"></a>后台事务rollback数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row1843510212177"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p14351026175"><a name="zh-cn_topic_0237122621_p14351026175"></a><a name="zh-cn_topic_0237122621_p14351026175"></a>bg_resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p943592121715"><a name="zh-cn_topic_0237122621_p943592121715"></a><a name="zh-cn_topic_0237122621_p943592121715"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p843510218176"><a name="zh-cn_topic_0237122621_p843510218176"></a><a name="zh-cn_topic_0237122621_p843510218176"></a>后台事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row164353251720"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p15435162151714"><a name="zh-cn_topic_0237122621_p15435162151714"></a><a name="zh-cn_topic_0237122621_p15435162151714"></a>bg_resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p164351125170"><a name="zh-cn_topic_0237122621_p164351125170"></a><a name="zh-cn_topic_0237122621_p164351125170"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p13435182161714"><a name="zh-cn_topic_0237122621_p13435182161714"></a><a name="zh-cn_topic_0237122621_p13435182161714"></a>后台事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row1843612161719"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p343615217175"><a name="zh-cn_topic_0237122621_p343615217175"></a><a name="zh-cn_topic_0237122621_p343615217175"></a>bg_resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p114369231718"><a name="zh-cn_topic_0237122621_p114369231718"></a><a name="zh-cn_topic_0237122621_p114369231718"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p174369241717"><a name="zh-cn_topic_0237122621_p174369241717"></a><a name="zh-cn_topic_0237122621_p174369241717"></a>后台事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122621_row94366261715"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122621_p543713241715"><a name="zh-cn_topic_0237122621_p543713241715"></a><a name="zh-cn_topic_0237122621_p543713241715"></a>bg_resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122621_p243720219177"><a name="zh-cn_topic_0237122621_p243720219177"></a><a name="zh-cn_topic_0237122621_p243720219177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122621_p0437172141718"><a name="zh-cn_topic_0237122621_p0437172141718"></a><a name="zh-cn_topic_0237122621_p0437172141718"></a>后台事务总响应时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
