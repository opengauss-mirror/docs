# Planning Resources<a name="EN-US_TOPIC_0000001147834736"></a>

Before configuring resource load management, plan tenant resources based on service models. After services run for a period of time, you can adjust the configurations based on resource usage.

Assume that two departments in a large enterprise use the same cluster. openGauss puts system resources used by the same department in a group to isolate resources for different departments.  [Table 1](#table65031957184315)  describes the resource plan.

**Table  1**  Tenant resource plan

<a name="table65031957184315"></a>
<table><thead align="left"><tr id="row115181157114318"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="p0518165716436"><a name="p0518165716436"></a><a name="p0518165716436"></a>Tenant Name</p>
</th>
<th class="cellrowborder" valign="top" width="36%" id="mcps1.2.4.1.2"><p id="p165181857124313"><a name="p165181857124313"></a><a name="p165181857124313"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="42%" id="mcps1.2.4.1.3"><p id="p185187579437"><a name="p185187579437"></a><a name="p185187579437"></a><strong id="b842352706162919_1"><a name="b842352706162919_1"></a><a name="b842352706162919_1"></a>Example Value</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row195181457114317"><td class="cellrowborder" rowspan="6" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p1799971812487"><a name="p1799971812487"></a><a name="p1799971812487"></a>Tenant A</p>
</td>
<td class="cellrowborder" valign="top" width="36%" headers="mcps1.2.4.1.2 "><p id="p175181057144310"><a name="p175181057144310"></a><a name="p175181057144310"></a>Sub-Class Cgroup</p>
</td>
<td class="cellrowborder" valign="top" width="42%" headers="mcps1.2.4.1.3 "><p id="p165181571431"><a name="p165181571431"></a><a name="p165181571431"></a>class_a</p>
</td>
</tr>
<tr id="row103291178311"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p0329571434"><a name="p0329571434"></a><a name="p0329571434"></a>Workload Cgroup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul89077212245"></a><a name="ul89077212245"></a><ul id="ul89077212245"><li>workload_a1</li><li>workload_a2</li></ul>
</td>
</tr>
<tr id="row55751516115619"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p6575111695613"><a name="p6575111695613"></a><a name="p6575111695613"></a>Group resource pool</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p157514169567"><a name="p157514169567"></a><a name="p157514169567"></a>resource_pool_a</p>
</td>
</tr>
<tr id="row1751820572434"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p165186571434"><a name="p165186571434"></a><a name="p165186571434"></a>Service resource pool</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul7142870243"></a><a name="ul7142870243"></a><ul id="ul7142870243"><li>resource_pool_a1</li><li>resource_pool_a2</li></ul>
</td>
</tr>
<tr id="row201731314587"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p101734141386"><a name="p101734141386"></a><a name="p101734141386"></a>Group user</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p121730140817"><a name="p121730140817"></a><a name="p121730140817"></a>tenant_a</p>
</td>
</tr>
<tr id="row115161431174810"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p145461425164511"><a name="p145461425164511"></a><a name="p145461425164511"></a>Service user</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul1898617116247"></a><a name="ul1898617116247"></a><ul id="ul1898617116247"><li>tenant_a1</li><li>tenant_a2</li></ul>
</td>
</tr>
<tr id="row118451473485"><td class="cellrowborder" rowspan="6" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p17466925610"><a name="p17466925610"></a><a name="p17466925610"></a>Tenant B</p>
</td>
<td class="cellrowborder" valign="top" width="36%" headers="mcps1.2.4.1.2 "><p id="p1564210501334"><a name="p1564210501334"></a><a name="p1564210501334"></a>Sub-Class Cgroup</p>
</td>
<td class="cellrowborder" valign="top" width="42%" headers="mcps1.2.4.1.3 "><p id="p1664225010310"><a name="p1664225010310"></a><a name="p1664225010310"></a>class_b</p>
</td>
</tr>
<tr id="row78015432319"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1864295012316"><a name="p1864295012316"></a><a name="p1864295012316"></a>Workload Cgroup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul136891815172411"></a><a name="ul136891815172411"></a><ul id="ul136891815172411"><li>workload_b1</li><li>workload_b2</li></ul>
</td>
</tr>
<tr id="row19513104514565"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p35132045135615"><a name="p35132045135615"></a><a name="p35132045135615"></a>Group resource pool</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1551310459564"><a name="p1551310459564"></a><a name="p1551310459564"></a>resource_pool_b</p>
</td>
</tr>
<tr id="row5845875486"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13530171144812"><a name="p13530171144812"></a><a name="p13530171144812"></a>Service resource pool</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul1067320214242"></a><a name="ul1067320214242"></a><ul id="ul1067320214242"><li>resource_pool_b1</li><li>resource_pool_b2</li></ul>
</td>
</tr>
<tr id="row38278915911"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p148270916912"><a name="p148270916912"></a><a name="p148270916912"></a>Group user</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p198271694919"><a name="p198271694919"></a><a name="p198271694919"></a>tenant_b</p>
</td>
</tr>
<tr id="row6296155612482"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p11765165913485"><a name="p11765165913485"></a><a name="p11765165913485"></a>Service user</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><a name="ul1957912265246"></a><a name="ul1957912265246"></a><ul id="ul1957912265246"><li>tenant_b1</li><li>tenant_b2</li></ul>
</td>
</tr>
</tbody>
</table>

