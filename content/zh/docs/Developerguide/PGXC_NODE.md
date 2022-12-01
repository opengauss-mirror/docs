# PGXC\_NODE<a name="ZH-CN_TOPIC_0000001198172421"></a>

PGXC\_NODE系统表存储集群节点信息。PGXC\_NODE系统表仅在分布式场景下有具体含义，openGauss只能查询表定义。

**表 1**  PGXC\_NODE字段

<a name="zh-cn_topic_0059778795_t339768857f2048938c93ef534fbc96c7"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778795_rcea9b6cc9fd743aa92b3c4f794cccea3"><th class="cellrowborder" valign="top" width="22.06%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"><a name="zh-cn_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"></a><a name="zh-cn_topic_0059778795_aa70064f9fb2f4c0aa42c0048972aaa49"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.41%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"><a name="zh-cn_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"></a><a name="zh-cn_topic_0059778795_ac9fbe6d7ef6042d1bc2317145affba0e"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.529999999999994%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"><a name="zh-cn_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"></a><a name="zh-cn_topic_0059778795_a93d9c23aaedb413ab94fdc9f327a1cc7"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row135547387020"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p65541338605"><a name="p65541338605"></a><a name="p65541338605"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p11554113815018"><a name="p11554113815018"></a><a name="p11554113815018"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p125541038507"><a name="p125541038507"></a><a name="p125541038507"></a>行标识符（隐含字段，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_rced836d8f66548b68a592f7441c15f93"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"><a name="zh-cn_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"></a><a name="zh-cn_topic_0059778795_a6cf9862e7b21477691d2be4a0b50f616"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"><a name="zh-cn_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"></a><a name="zh-cn_topic_0059778795_ad4c68e82248e4c04816fdde8fcd996ab"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"><a name="zh-cn_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"></a><a name="zh-cn_topic_0059778795_a5ec066278a4e45918ccc64643083ff69"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_rfc7934910859480792e8b59b2862580b"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"><a name="zh-cn_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"></a><a name="zh-cn_topic_0059778795_a5439cc11a2464528bb6d228be8cc0577"></a>node_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"><a name="zh-cn_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"></a><a name="zh-cn_topic_0059778795_a1dc4cbb83b5f40d1bfaefd183197db3a"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"><a name="zh-cn_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"></a><a name="zh-cn_topic_0059778795_a4db57662e66a4b9194a5a8b1cdd7be78"></a>节点类型。<a name="ul9347195835815"></a><a name="ul9347195835815"></a><ul id="ul9347195835815"><li>C：协调节点。</li><li>D：数据节点。</li><li>S：数据节点的备节点。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r010e7ee9e66d47fd8ed4e858ce96e6bd"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"><a name="zh-cn_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"></a><a name="zh-cn_topic_0059778795_a050034924ae245f7aa241fc4f3f6675c"></a>node_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"><a name="zh-cn_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"></a><a name="zh-cn_topic_0059778795_ae0f84ef20ef3486e9cb2206733702049"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"><a name="zh-cn_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"></a><a name="zh-cn_topic_0059778795_a62a00c5f975d4b44b79388be91df9711"></a>节点的端口号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r647ae3a14d9c482599bb02760629ac54"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a4bb232571965495dbd8054c34a82805d"><a name="zh-cn_topic_0059778795_a4bb232571965495dbd8054c34a82805d"></a><a name="zh-cn_topic_0059778795_a4bb232571965495dbd8054c34a82805d"></a>node_host</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"><a name="zh-cn_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"></a><a name="zh-cn_topic_0059778795_a9100b08244bb475a97a2c43d5cd58caa"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"><a name="zh-cn_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"></a><a name="zh-cn_topic_0059778795_aed85a34bb1a54b53b0015b53f6982f6a"></a>节点的主机名称或者IP（如配置为虚拟IP，则为虚拟IP）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r840250d7bc6e491692c46d9036e9df79"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"><a name="zh-cn_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"></a><a name="zh-cn_topic_0059778795_a4b275ff31ef746c6bc5261d0caeaa09c"></a>node_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"><a name="zh-cn_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"></a><a name="zh-cn_topic_0059778795_a89c2e87f5abe4ec2ac995ba0d5246d15"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"><a name="zh-cn_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"></a><a name="zh-cn_topic_0059778795_ada359d599ae64d8c8a25adf1b41aec5b"></a>复制节点的端口号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_rfa44a1102a0c4fca99c69afcc5d31569"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"><a name="zh-cn_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"></a><a name="zh-cn_topic_0059778795_a32f58e4f1bc84c24b5a6a3ba2cfd9aa6"></a>node_host1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"><a name="zh-cn_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"></a><a name="zh-cn_topic_0059778795_a6981a6c1c2e94035b42713722bf568da"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"><a name="zh-cn_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"></a><a name="zh-cn_topic_0059778795_a73153a714fee4c249dce292bc9fe10c3"></a>复制节点的主机名称或者IP（如配置为虚拟IP，则为虚拟IP）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r2848aa12f15d4defb72da5e607afbd12"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"><a name="zh-cn_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"></a><a name="zh-cn_topic_0059778795_a52620b180efe43afa68ae795a800ef5f"></a>hostis_primary</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"><a name="zh-cn_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"></a><a name="zh-cn_topic_0059778795_ab863dfb623344886a05f7e6884b09e7f"></a><span id="text581312152919"><a name="text581312152919"></a><a name="text581312152919"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"><a name="zh-cn_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"></a><a name="zh-cn_topic_0059778795_ab1fdb5a69fa6462ea56ea15c2475ad6a"></a>表明当前节点是否发生主备切换。</p>
<a name="ul12255125141612"></a><a name="ul12255125141612"></a><ul id="ul12255125141612"><li>t（true）：表示发生。</li><li>f（false）：表示不发生。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_rae9e8e4f20d24b44860845e9bcbd9ee2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"><a name="zh-cn_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"></a><a name="zh-cn_topic_0059778795_a07afd48514bf4db495284ce0e8b74250"></a>nodeis_primary</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"><a name="zh-cn_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"></a><a name="zh-cn_topic_0059778795_a70dfb1ba75fd404fadc69b9b5f9e975e"></a><span id="text1152610217292"><a name="text1152610217292"></a><a name="text1152610217292"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"><a name="zh-cn_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"></a><a name="zh-cn_topic_0059778795_a0e2e85e7d4684dc2b0252452e3169007"></a>在replication表下，是否优选当前节点作为优先执行的节点进行非查询操作。</p>
<a name="ul1769914342913"></a><a name="ul1769914342913"></a><ul id="ul1769914342913"><li>t（true）：表示优选。</li><li>f（false）：表示不优选。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r5ab55a781c4c46a8a9b7c0b614b77573"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"><a name="zh-cn_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"></a><a name="zh-cn_topic_0059778795_a2e96fa15f5a34850ac770ea5b6629080"></a>nodeis_preferred</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"><a name="zh-cn_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"></a><a name="zh-cn_topic_0059778795_abd8e5e40a4194128934e106148a80b8f"></a><span id="text935820342911"><a name="text935820342911"></a><a name="text935820342911"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"><a name="zh-cn_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"></a><a name="zh-cn_topic_0059778795_a7ba426714b6843bd8cc02c0de04388dc"></a>在replication表下，是否优选当前节点作为首选的节点进行查询。</p>
<a name="ul118201358112920"></a><a name="ul118201358112920"></a><ul id="ul118201358112920"><li>t（true）：表示优选。</li><li>f（false）：表示不优选。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r454ef19fb37449fa96d77eb6ac02c6d2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a4950e38292f54860bedf745ff24930a4"><a name="zh-cn_topic_0059778795_a4950e38292f54860bedf745ff24930a4"></a><a name="zh-cn_topic_0059778795_a4950e38292f54860bedf745ff24930a4"></a>node_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a8bbce29ca93f44628743413408a562ae"><a name="zh-cn_topic_0059778795_a8bbce29ca93f44628743413408a562ae"></a><a name="zh-cn_topic_0059778795_a8bbce29ca93f44628743413408a562ae"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"><a name="zh-cn_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"></a><a name="zh-cn_topic_0059778795_a0bc2078fdb4f46c5b2a16ba265d25e37"></a>节点标志符。由node_name经过hash函数计算后得到。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r84e08641ee6344d294ab8c97b85c1ee2"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"><a name="zh-cn_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"></a><a name="zh-cn_topic_0059778795_a799eb6e43dba49ea8b72d26de40fc41f"></a>sctp_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"><a name="zh-cn_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"></a><a name="zh-cn_topic_0059778795_ac2e85c5857a74dd48348c452aa34568e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a8188739e63ac4c16afa711e4e320173f"><a name="a8188739e63ac4c16afa711e4e320173f"></a><a name="a8188739e63ac4c16afa711e4e320173f"></a>主节点使用TCP代理通信库或SCTP通信库的数据通道侦听端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r10ff03124fdb40d4913efe1b7ba0e49a"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"><a name="zh-cn_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"></a><a name="zh-cn_topic_0059778795_af8558fb4a6f44710870c5ce4bcb30749"></a>control_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"><a name="zh-cn_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"></a><a name="zh-cn_topic_0059778795_ac90cb25244664d1eba4fce1e1f0377e6"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a119e9ce1feae4bd284da95f394b2eb76"><a name="a119e9ce1feae4bd284da95f394b2eb76"></a><a name="a119e9ce1feae4bd284da95f394b2eb76"></a>主节点使用TCP代理通信库或SCTP通信库的控制通道侦听端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_rc736b45c01f64aabb49ef593c0b765a7"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"><a name="zh-cn_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"></a><a name="zh-cn_topic_0059778795_a59e54dd12ab247f8a3c35217072dbc48"></a>sctp_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"><a name="zh-cn_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"></a><a name="zh-cn_topic_0059778795_a0d8b082706ba415eb9eca34c9133e0de"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p18149152164720"><a name="p18149152164720"></a><a name="p18149152164720"></a>备节点使用TCP代理通信库或SCTP通信库的数据通道侦听端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778795_r2d71bf5a31b047f081b8116c051204e7"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"><a name="zh-cn_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"></a><a name="zh-cn_topic_0059778795_a08ca526c3adb4bb4bfdb786e3cd72340"></a>control_port1</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778795_a28973ebc040147949a14c022dc672844"><a name="zh-cn_topic_0059778795_a28973ebc040147949a14c022dc672844"></a><a name="zh-cn_topic_0059778795_a28973ebc040147949a14c022dc672844"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="a8d14c20e3f1046808e8ba8deabf57f60"><a name="a8d14c20e3f1046808e8ba8deabf57f60"></a><a name="a8d14c20e3f1046808e8ba8deabf57f60"></a>备节点使用TCP代理通信库或SCTP通信库的控制通道侦听端口。</p>
</td>
</tr>
<tr id="row641750114318"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p18418130104318"><a name="p18418130104318"></a><a name="p18418130104318"></a>nodeis_central</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p9418110154318"><a name="p9418110154318"></a><a name="p9418110154318"></a><span id="text162514492919"><a name="text162514492919"></a><a name="text162514492919"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p44186016437"><a name="p44186016437"></a><a name="p44186016437"></a>表明当前节点是否为中心控制节点，只用于CN，对DN无效。</p>
<a name="ul21561963304"></a><a name="ul21561963304"></a><ul id="ul21561963304"><li>t（true）：表示是。</li><li>f（false）：表示不是。</li></ul>
</td>
</tr>
<tr id="row129545512711"><td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.4.1.1 "><p id="p11955105476"><a name="p11955105476"></a><a name="p11955105476"></a>nodeis_active</p>
</td>
<td class="cellrowborder" valign="top" width="16.41%" headers="mcps1.2.4.1.2 "><p id="p2095617513718"><a name="p2095617513718"></a><a name="p2095617513718"></a><span id="text198461215931"><a name="text198461215931"></a><a name="text198461215931"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="61.529999999999994%" headers="mcps1.2.4.1.3 "><p id="p1995695579"><a name="p1995695579"></a><a name="p1995695579"></a>表明当前节点是否是正常状态，用于标记CN是否被剔除，对DN无效。</p>
<a name="ul18109192519303"></a><a name="ul18109192519303"></a><ul id="ul18109192519303"><li>t（true）：表示是。</li><li>f（false）：表示不是。</li></ul>
</td>
</tr>
</tbody>
</table>
