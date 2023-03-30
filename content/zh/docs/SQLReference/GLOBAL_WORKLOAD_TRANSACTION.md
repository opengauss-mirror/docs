# GLOBAL\_WORKLOAD\_TRANSACTION<a name="ZH-CN_TOPIC_0245374727"></a>

显示各节点上的workload的负载信息。

**表 1**  GLOBAL\_WORKLOAD\_TRANSACTION字段

<a name="zh-cn_topic_0237122623_table12200827141814"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122623_row193680274189"><th class="cellrowborder" valign="top" width="24.22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122623_p13681627111813"><a name="zh-cn_topic_0237122623_p13681627111813"></a><a name="zh-cn_topic_0237122623_p13681627111813"></a><strong id="zh-cn_topic_0237122623_b20368152713188"><a name="zh-cn_topic_0237122623_b20368152713188"></a><a name="zh-cn_topic_0237122623_b20368152713188"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.61%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122623_p12369162710181"><a name="zh-cn_topic_0237122623_p12369162710181"></a><a name="zh-cn_topic_0237122623_p12369162710181"></a><strong id="zh-cn_topic_0237122623_b43697273189"><a name="zh-cn_topic_0237122623_b43697273189"></a><a name="zh-cn_topic_0237122623_b43697273189"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.17%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122623_p173692027191810"><a name="zh-cn_topic_0237122623_p173692027191810"></a><a name="zh-cn_topic_0237122623_p173692027191810"></a><strong id="zh-cn_topic_0237122623_b1236914276188"><a name="zh-cn_topic_0237122623_b1236914276188"></a><a name="zh-cn_topic_0237122623_b1236914276188"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122623_row193696277181"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p16369112718181"><a name="zh-cn_topic_0237122623_p16369112718181"></a><a name="zh-cn_topic_0237122623_p16369112718181"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p1837012713187"><a name="zh-cn_topic_0237122623_p1837012713187"></a><a name="zh-cn_topic_0237122623_p1837012713187"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p113701527191810"><a name="zh-cn_topic_0237122623_p113701527191810"></a><a name="zh-cn_topic_0237122623_p113701527191810"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row8370112701816"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p173707270186"><a name="zh-cn_topic_0237122623_p173707270186"></a><a name="zh-cn_topic_0237122623_p173707270186"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p437022713182"><a name="zh-cn_topic_0237122623_p437022713182"></a><a name="zh-cn_topic_0237122623_p437022713182"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p337032711817"><a name="zh-cn_topic_0237122623_p337032711817"></a><a name="zh-cn_topic_0237122623_p337032711817"></a>负载的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row6371327111816"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p10371102771819"><a name="zh-cn_topic_0237122623_p10371102771819"></a><a name="zh-cn_topic_0237122623_p10371102771819"></a>commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p4371102751812"><a name="zh-cn_topic_0237122623_p4371102751812"></a><a name="zh-cn_topic_0237122623_p4371102751812"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p03711027171812"><a name="zh-cn_topic_0237122623_p03711027171812"></a><a name="zh-cn_topic_0237122623_p03711027171812"></a>用户事务commit数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row8371182741811"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p23712271183"><a name="zh-cn_topic_0237122623_p23712271183"></a><a name="zh-cn_topic_0237122623_p23712271183"></a>rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p9372122751810"><a name="zh-cn_topic_0237122623_p9372122751810"></a><a name="zh-cn_topic_0237122623_p9372122751810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p93721927171813"><a name="zh-cn_topic_0237122623_p93721927171813"></a><a name="zh-cn_topic_0237122623_p93721927171813"></a>用户事务rollback数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row1837210277183"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p837212717186"><a name="zh-cn_topic_0237122623_p837212717186"></a><a name="zh-cn_topic_0237122623_p837212717186"></a>resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p737213272182"><a name="zh-cn_topic_0237122623_p737213272182"></a><a name="zh-cn_topic_0237122623_p737213272182"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p1237372761819"><a name="zh-cn_topic_0237122623_p1237372761819"></a><a name="zh-cn_topic_0237122623_p1237372761819"></a>用户事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row193731274186"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p12373112711186"><a name="zh-cn_topic_0237122623_p12373112711186"></a><a name="zh-cn_topic_0237122623_p12373112711186"></a>resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p1537352751811"><a name="zh-cn_topic_0237122623_p1537352751811"></a><a name="zh-cn_topic_0237122623_p1537352751811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p173731327141818"><a name="zh-cn_topic_0237122623_p173731327141818"></a><a name="zh-cn_topic_0237122623_p173731327141818"></a>用户事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row12373102716181"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p1137492720188"><a name="zh-cn_topic_0237122623_p1137492720188"></a><a name="zh-cn_topic_0237122623_p1137492720188"></a>resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p143747271189"><a name="zh-cn_topic_0237122623_p143747271189"></a><a name="zh-cn_topic_0237122623_p143747271189"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p137472781820"><a name="zh-cn_topic_0237122623_p137472781820"></a><a name="zh-cn_topic_0237122623_p137472781820"></a>用户事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row143742272185"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p1237413270181"><a name="zh-cn_topic_0237122623_p1237413270181"></a><a name="zh-cn_topic_0237122623_p1237413270181"></a>resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p12374427161814"><a name="zh-cn_topic_0237122623_p12374427161814"></a><a name="zh-cn_topic_0237122623_p12374427161814"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p1937552710182"><a name="zh-cn_topic_0237122623_p1937552710182"></a><a name="zh-cn_topic_0237122623_p1937552710182"></a>用户事务总响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row1737520274183"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p15375152731815"><a name="zh-cn_topic_0237122623_p15375152731815"></a><a name="zh-cn_topic_0237122623_p15375152731815"></a>bg_commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p33756272184"><a name="zh-cn_topic_0237122623_p33756272184"></a><a name="zh-cn_topic_0237122623_p33756272184"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p173751027191819"><a name="zh-cn_topic_0237122623_p173751027191819"></a><a name="zh-cn_topic_0237122623_p173751027191819"></a>后台事务commit数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row83751272188"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p15375202710183"><a name="zh-cn_topic_0237122623_p15375202710183"></a><a name="zh-cn_topic_0237122623_p15375202710183"></a>bg_rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p16375132731819"><a name="zh-cn_topic_0237122623_p16375132731819"></a><a name="zh-cn_topic_0237122623_p16375132731819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p2375127131812"><a name="zh-cn_topic_0237122623_p2375127131812"></a><a name="zh-cn_topic_0237122623_p2375127131812"></a>后台事务rollback数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row2375152712186"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p0375112721819"><a name="zh-cn_topic_0237122623_p0375112721819"></a><a name="zh-cn_topic_0237122623_p0375112721819"></a>bg_resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p337502720181"><a name="zh-cn_topic_0237122623_p337502720181"></a><a name="zh-cn_topic_0237122623_p337502720181"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p14376162761814"><a name="zh-cn_topic_0237122623_p14376162761814"></a><a name="zh-cn_topic_0237122623_p14376162761814"></a>后台事务最小响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row1937622711810"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p103761427201816"><a name="zh-cn_topic_0237122623_p103761427201816"></a><a name="zh-cn_topic_0237122623_p103761427201816"></a>bg_resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p163761927141818"><a name="zh-cn_topic_0237122623_p163761927141818"></a><a name="zh-cn_topic_0237122623_p163761927141818"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p11376172712182"><a name="zh-cn_topic_0237122623_p11376172712182"></a><a name="zh-cn_topic_0237122623_p11376172712182"></a>后台事务最大响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row937652721816"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p10376132741811"><a name="zh-cn_topic_0237122623_p10376132741811"></a><a name="zh-cn_topic_0237122623_p10376132741811"></a>bg_resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p837682771811"><a name="zh-cn_topic_0237122623_p837682771811"></a><a name="zh-cn_topic_0237122623_p837682771811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p43761327181816"><a name="zh-cn_topic_0237122623_p43761327181816"></a><a name="zh-cn_topic_0237122623_p43761327181816"></a>后台事务平均响应时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122623_row037672716182"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122623_p33761327111811"><a name="zh-cn_topic_0237122623_p33761327111811"></a><a name="zh-cn_topic_0237122623_p33761327111811"></a>bg_resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122623_p19377827201816"><a name="zh-cn_topic_0237122623_p19377827201816"></a><a name="zh-cn_topic_0237122623_p19377827201816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122623_p1337702781817"><a name="zh-cn_topic_0237122623_p1337702781817"></a><a name="zh-cn_topic_0237122623_p1337702781817"></a>后台事务总响应时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

