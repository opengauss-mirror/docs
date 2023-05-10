# GLOBAL\_USER\_TRANSACTION

GLOBAL\_USER\_TRANSACTION用来统计全局用户执行的事务信息。

**表 1**  GLOBAL\_USER\_TRANSACTION字段

<a name="table192653201714"></a>
<table><thead align="left"><tr id="row1243117216171"><th class="cellrowborder" valign="top" width="24.22%" id="mcps1.2.4.1.1"><p id="p11431127176"><a name="p11431127176"></a><a name="p11431127176"></a><strong id="b243115210177"><a name="b243115210177"></a><a name="b243115210177"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.61%" id="mcps1.2.4.1.2"><p id="p164317231712"><a name="p164317231712"></a><a name="p164317231712"></a><strong id="b10431182201717"><a name="b10431182201717"></a><a name="b10431182201717"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.17%" id="mcps1.2.4.1.3"><p id="p1243116211174"><a name="p1243116211174"></a><a name="p1243116211174"></a><strong id="b13432112161715"><a name="b13432112161715"></a><a name="b13432112161715"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row15345192811185"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p7345152816187"><a name="p7345152816187"></a><a name="p7345152816187"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p1346528181818"><a name="p1346528181818"></a><a name="p1346528181818"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p13461828191817"><a name="p13461828191817"></a><a name="p13461828191817"></a>节点名称。</p>
</td>
</tr>
<tr id="row443214212176"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p184329291715"><a name="p184329291715"></a><a name="p184329291715"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p19432424179"><a name="p19432424179"></a><a name="p19432424179"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p4432924172"><a name="p4432924172"></a><a name="p4432924172"></a>用户的名称。</p>
</td>
</tr>
<tr id="row134327251711"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p114321024173"><a name="p114321024173"></a><a name="p114321024173"></a>commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p1143212215177"><a name="p1143212215177"></a><a name="p1143212215177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p843232111717"><a name="p843232111717"></a><a name="p843232111717"></a>用户事务commit数量。</p>
</td>
</tr>
<tr id="row243222141720"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p1943252151713"><a name="p1943252151713"></a><a name="p1943252151713"></a>rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p154320251717"><a name="p154320251717"></a><a name="p154320251717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p13433162181714"><a name="p13433162181714"></a><a name="p13433162181714"></a>用户事务rollback数量。</p>
</td>
</tr>
<tr id="row13433102131713"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p13433172171715"><a name="p13433172171715"></a><a name="p13433172171715"></a>resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p134337213177"><a name="p134337213177"></a><a name="p134337213177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p44339231716"><a name="p44339231716"></a><a name="p44339231716"></a>用户事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row24330219179"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p184339211714"><a name="p184339211714"></a><a name="p184339211714"></a>resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p4433926170"><a name="p4433926170"></a><a name="p4433926170"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p104331228177"><a name="p104331228177"></a><a name="p104331228177"></a>用户事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row124331427175"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p84333210178"><a name="p84333210178"></a><a name="p84333210178"></a>resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p1243382191712"><a name="p1243382191712"></a><a name="p1243382191712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p843422201718"><a name="p843422201718"></a><a name="p843422201718"></a>用户事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row14434152141713"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p143411291719"><a name="p143411291719"></a><a name="p143411291719"></a>resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p1643472181710"><a name="p1643472181710"></a><a name="p1643472181710"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p20434026174"><a name="p20434026174"></a><a name="p20434026174"></a>用户事务总响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1543462121718"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p16434192151710"><a name="p16434192151710"></a><a name="p16434192151710"></a>bg_commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p1143418216173"><a name="p1143418216173"></a><a name="p1143418216173"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p243419211715"><a name="p243419211715"></a><a name="p243419211715"></a>后台事务commit数量。</p>
</td>
</tr>
<tr id="row1943411211710"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p164349212179"><a name="p164349212179"></a><a name="p164349212179"></a>bg_rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p943442111717"><a name="p943442111717"></a><a name="p943442111717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p154351122172"><a name="p154351122172"></a><a name="p154351122172"></a>后台事务rollback数量。</p>
</td>
</tr>
<tr id="row1843510212177"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p14351026175"><a name="p14351026175"></a><a name="p14351026175"></a>bg_resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p943592121715"><a name="p943592121715"></a><a name="p943592121715"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p843510218176"><a name="p843510218176"></a><a name="p843510218176"></a>后台事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row164353251720"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p15435162151714"><a name="p15435162151714"></a><a name="p15435162151714"></a>bg_resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p164351125170"><a name="p164351125170"></a><a name="p164351125170"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p13435182161714"><a name="p13435182161714"></a><a name="p13435182161714"></a>后台事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1843612161719"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p343615217175"><a name="p343615217175"></a><a name="p343615217175"></a>bg_resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p114369231718"><a name="p114369231718"></a><a name="p114369231718"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p174369241717"><a name="p174369241717"></a><a name="p174369241717"></a>后台事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row94366261715"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="p543713241715"><a name="p543713241715"></a><a name="p543713241715"></a>bg_resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="p243720219177"><a name="p243720219177"></a><a name="p243720219177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="p0437172141718"><a name="p0437172141718"></a><a name="p0437172141718"></a>后台事务总响应时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
