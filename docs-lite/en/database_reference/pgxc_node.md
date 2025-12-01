# PGXC\_NODE<a name="EN-US_TOPIC_0000001198172421"></a>

**PGXC\_NODE**  records information about cluster nodes. The  **PGXC\_NODE**  system catalog has specific meanings only in distributed scenarios. openGauss can only query the table definition.

**Table  1**  PGXC\_NODE columns

<a name="en-us_topic_0059778795_t339768857f2048938c93ef534fbc96c7"></a>
<table><thead align="left"><tr id="en-us_topic_0059778795_rcea9b6cc9fd743aa92b3c4f794cccea3"><th class="cellrowborder" valign="top" width="22.06%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"><a name="en-us_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"></a><a name="en-us_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.41%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"><a name="en-us_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"></a><a name="en-us_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="61.529999999999994%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"><a name="en-us_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"></a><a name="en-us_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row135547387020"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p65541338605"><a name="p65541338605"></a><a name="p65541338605"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p11554113815018"><a name="p11554113815018"></a><a name="p11554113815018"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p125541038507"><a name="p125541038507"></a><a name="p125541038507"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_rced836d8f66548b68a592f7441c15f93"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"><a name="en-us_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"></a><a name="en-us_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"><a name="en-us_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"></a><a name="en-us_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"><a name="en-us_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"></a><a name="en-us_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_rfc7934910859480792e8b59b2862580b"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"><a name="en-us_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"></a><a name="en-us_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"></a>node_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"><a name="en-us_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"></a><a name="en-us_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"><a name="en-us_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"></a><a name="en-us_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"></a>Node type<a name="ul9347195835815"></a><a name="ul9347195835815"></a><ul id="ul9347195835815"><li><strong id="b163555173917"><a name="b163555173917"></a><a name="b163555173917"></a>C</strong>: coordinator node (CN)</li><li><strong id="b8617636333398"><a name="b8617636333398"></a><a name="b8617636333398"></a>D</strong>: data node (DN)</li><li><strong id="b7000989333398"><a name="b7000989333398"></a><a name="b7000989333398"></a>S</strong>: standby node</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0059778795_r010e7ee9e66d47fd8ed4e858ce96e6bd"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"><a name="en-us_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"></a><a name="en-us_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"></a>node_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"><a name="en-us_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"></a><a name="en-us_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"><a name="en-us_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"></a><a name="en-us_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"></a>Port number of the node</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r647ae3a14d9c482599bb02760629ac54"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a4bb232571965495dbd8054c34a82805d"><a name="en-us_topic_0059778795_a4bb232571965495dbd8054c34a82805d"></a><a name="en-us_topic_0059778795_a4bb232571965495dbd8054c34a82805d"></a>node_host</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"><a name="en-us_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"></a><a name="en-us_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"><a name="en-us_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"></a><a name="en-us_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"></a>Host name or IP address of a node. (If a virtual IP address is configured, its value is a virtual IP address.)</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r840250d7bc6e491692c46d9036e9df79"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"><a name="en-us_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"></a><a name="en-us_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"></a>node_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"><a name="en-us_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"></a><a name="en-us_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"><a name="en-us_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"></a><a name="en-us_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"></a>Port number of a replication node</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_rfa44a1102a0c4fca99c69afcc5d31569"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"><a name="en-us_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"></a><a name="en-us_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"></a>node_host1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"><a name="en-us_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"></a><a name="en-us_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"><a name="en-us_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"></a><a name="en-us_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"></a>Host name or IP address of a replication node. (If a virtual IP address is configured, its value is a virtual IP address.)</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r2848aa12f15d4defb72da5e607afbd12"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"><a name="en-us_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"></a><a name="en-us_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"></a>hostis_primary</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"><a name="en-us_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"></a><a name="en-us_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"></a><span id="text581312152919"><a name="text581312152919"></a><a name="text581312152919"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"><a name="en-us_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"></a><a name="en-us_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"></a>Whether a primary/standby switchover occurs on the current node</p>
<a name="ul12255125141612"></a><a name="ul12255125141612"></a><ul id="ul12255125141612"><li><strong id="b13600490523398"><a name="b13600490523398"></a><a name="b13600490523398"></a>t</strong> (true): yes</li><li><strong id="b5342457543398"><a name="b5342457543398"></a><a name="b5342457543398"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778795_rae9e8e4f20d24b44860845e9bcbd9ee2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"><a name="en-us_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"></a><a name="en-us_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"></a>nodeis_primary</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"><a name="en-us_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"></a><a name="en-us_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"></a><span id="text1152610217292"><a name="text1152610217292"></a><a name="text1152610217292"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"><a name="en-us_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"></a><a name="en-us_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"></a>Whether the current node is preferred to execute non-query operations in the <strong id="b842352706155720"><a name="b842352706155720"></a><a name="b842352706155720"></a>replication</strong> table</p>
<a name="ul1769914342913"></a><a name="ul1769914342913"></a><ul id="ul1769914342913"><li><strong id="b2751794793398"><a name="b2751794793398"></a><a name="b2751794793398"></a>t</strong> (true): yes</li><li><strong id="b19306612493398"><a name="b19306612493398"></a><a name="b19306612493398"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778795_r5ab55a781c4c46a8a9b7c0b614b77573"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"><a name="en-us_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"></a><a name="en-us_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"></a>nodeis_preferred</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"><a name="en-us_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"></a><a name="en-us_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"></a><span id="text935820342911"><a name="text935820342911"></a><a name="text935820342911"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"><a name="en-us_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"></a><a name="en-us_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"></a>Whether the current node is preferred to execute queries in the <strong id="b1650049416"><a name="b1650049416"></a><a name="b1650049416"></a>replication</strong> table</p>
<a name="ul118201358112920"></a><a name="ul118201358112920"></a><ul id="ul118201358112920"><li><strong id="b78041022184214"><a name="b78041022184214"></a><a name="b78041022184214"></a>t</strong> (true): yes</li><li><strong id="b1013432518424"><a name="b1013432518424"></a><a name="b1013432518424"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778795_r454ef19fb37449fa96d77eb6ac02c6d2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a4950e38292f54860bedf745ff24930a4"><a name="en-us_topic_0059778795_a4950e38292f54860bedf745ff24930a4"></a><a name="en-us_topic_0059778795_a4950e38292f54860bedf745ff24930a4"></a>node_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a8bbce29ca93f44628743413408a562ae"><a name="en-us_topic_0059778795_a8bbce29ca93f44628743413408a562ae"></a><a name="en-us_topic_0059778795_a8bbce29ca93f44628743413408a562ae"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"><a name="en-us_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"></a><a name="en-us_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"></a>Node identifier. The value is obtain by calculating the value of <strong id="b286246243398"><a name="b286246243398"></a><a name="b286246243398"></a>node_name</strong> using the hash function.</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r84e08641ee6344d294ab8c97b85c1ee2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"><a name="en-us_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"></a><a name="en-us_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"></a>sctp_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"><a name="en-us_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"></a><a name="en-us_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a8188739e63ac4c16afa711e4e320173f"><a name="a8188739e63ac4c16afa711e4e320173f"></a><a name="a8188739e63ac4c16afa711e4e320173f"></a>Port used by the TCP proxy communication library or SCTP communication library of the primary node to listen to the data channel</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r10ff03124fdb40d4913efe1b7ba0e49a"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"><a name="en-us_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"></a><a name="en-us_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"></a>control_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"><a name="en-us_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"></a><a name="en-us_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a119e9ce1feae4bd284da95f394b2eb76"><a name="a119e9ce1feae4bd284da95f394b2eb76"></a><a name="a119e9ce1feae4bd284da95f394b2eb76"></a>Port used by the TCP proxy communication library or SCTP communication library of the primary node to listen to the control channel</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_rc736b45c01f64aabb49ef593c0b765a7"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"><a name="en-us_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"></a><a name="en-us_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"></a>sctp_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"><a name="en-us_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"></a><a name="en-us_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p18149152164720"><a name="p18149152164720"></a><a name="p18149152164720"></a>Port used by the TCP proxy communication library or SCTP communication library of the standby node to listen to the data channel</p>
</td>
</tr>
<tr id="en-us_topic_0059778795_r2d71bf5a31b047f081b8116c051204e7"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"><a name="en-us_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"></a><a name="en-us_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"></a>control_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778795_a28973ebc040147949a14c022dc672844"><a name="en-us_topic_0059778795_a28973ebc040147949a14c022dc672844"></a><a name="en-us_topic_0059778795_a28973ebc040147949a14c022dc672844"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a8d14c20e3f1046808e8ba8deabf57f60"><a name="a8d14c20e3f1046808e8ba8deabf57f60"></a><a name="a8d14c20e3f1046808e8ba8deabf57f60"></a>Port used by the TCP proxy communication library or SCTP communication library of the standby node to listen to the control channel</p>
</td>
</tr>
<tr id="row641750114318"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p18418130104318"><a name="p18418130104318"></a><a name="p18418130104318"></a>nodeis_central</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p9418110154318"><a name="p9418110154318"></a><a name="p9418110154318"></a><span id="text162514492919"><a name="text162514492919"></a><a name="text162514492919"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p44186016437"><a name="p44186016437"></a><a name="p44186016437"></a>Whether the current node is a CN. It is used only for CNs and is invalid for DNs.</p>
<a name="ul21561963304"></a><a name="ul21561963304"></a><ul id="ul21561963304"><li><strong id="b5407842463398"><a name="b5407842463398"></a><a name="b5407842463398"></a>t</strong> (true): yes</li><li><strong id="b19190852813398"><a name="b19190852813398"></a><a name="b19190852813398"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="row129545512711"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p11955105476"><a name="p11955105476"></a><a name="p11955105476"></a>nodeis_active</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p2095617513718"><a name="p2095617513718"></a><a name="p2095617513718"></a><span id="text198461215931"><a name="text198461215931"></a><a name="text198461215931"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p1995695579"><a name="p1995695579"></a><a name="p1995695579"></a>Whether the current node is normal. It is used to mark whether the CN is removed and is invalid for DNs.</p>
<a name="ul18109192519303"></a><a name="ul18109192519303"></a><ul id="ul18109192519303"><li><strong id="b7565414123398"><a name="b7565414123398"></a><a name="b7565414123398"></a>t</strong> (true): yes</li><li><strong id="b20332199793398"><a name="b20332199793398"></a><a name="b20332199793398"></a>f</strong> (false): no</li></ul>
</td>
</tr>
</tbody>
</table>

