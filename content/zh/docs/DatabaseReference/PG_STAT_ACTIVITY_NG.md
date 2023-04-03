# PG\_STAT\_ACTIVITY\_NG<a name="ZH-CN_TOPIC_0000001197514779"></a>

PG\_STAT\_ACTIVITY\_NG视图显示在当前用户所属的逻辑数据库实例下，所有查询的相关信息。

**表 1**  PG\_STAT\_ACTIVITY\_NG字段

<a name="zh-cn_topic_0059777972_tee2fe32d5a344ee0bf91021e20828899"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777972_r3ebd4546663a496ea635e034ce55ee0e"><th class="cellrowborder" valign="top" width="33.269999999999996%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777972_a0ad3fea1ca654b24bd7a85477f5c15ff"><a name="zh-cn_topic_0059777972_a0ad3fea1ca654b24bd7a85477f5c15ff"></a><a name="zh-cn_topic_0059777972_a0ad3fea1ca654b24bd7a85477f5c15ff"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.279999999999998%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777972_aa572b0c58cc14891943d2627068c7b14"><a name="zh-cn_topic_0059777972_aa572b0c58cc14891943d2627068c7b14"></a><a name="zh-cn_topic_0059777972_aa572b0c58cc14891943d2627068c7b14"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="48.449999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777972_a2726a44bf01549b4b583dc20a775e677"><a name="zh-cn_topic_0059777972_a2726a44bf01549b4b583dc20a775e677"></a><a name="zh-cn_topic_0059777972_a2726a44bf01549b4b583dc20a775e677"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777972_rf208f03c28194962997d97334eb4ce73"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a3c0d3a92c7334476a0abf65843a2bf6c"><a name="zh-cn_topic_0059777972_a3c0d3a92c7334476a0abf65843a2bf6c"></a><a name="zh-cn_topic_0059777972_a3c0d3a92c7334476a0abf65843a2bf6c"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a5ee316aab1c24766a6d8d6a5113e8ae4"><a name="zh-cn_topic_0059777972_a5ee316aab1c24766a6d8d6a5113e8ae4"></a><a name="zh-cn_topic_0059777972_a5ee316aab1c24766a6d8d6a5113e8ae4"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_ae5a2238d3ac74490b4b57f18552b33ca"><a name="zh-cn_topic_0059777972_ae5a2238d3ac74490b4b57f18552b33ca"></a><a name="zh-cn_topic_0059777972_ae5a2238d3ac74490b4b57f18552b33ca"></a>用户会话在后台连接到的数据库OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r276e7d5e9a0547fb9f264ba45858cae8"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a9239e0bd11e24345989a0ef489e3a8c5"><a name="zh-cn_topic_0059777972_a9239e0bd11e24345989a0ef489e3a8c5"></a><a name="zh-cn_topic_0059777972_a9239e0bd11e24345989a0ef489e3a8c5"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a62b8fb5c877d46ddba97fdb080747314"><a name="zh-cn_topic_0059777972_a62b8fb5c877d46ddba97fdb080747314"></a><a name="zh-cn_topic_0059777972_a62b8fb5c877d46ddba97fdb080747314"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a97fc56f4b16a460c996d42f703180c56"><a name="zh-cn_topic_0059777972_a97fc56f4b16a460c996d42f703180c56"></a><a name="zh-cn_topic_0059777972_a97fc56f4b16a460c996d42f703180c56"></a>用户会话在后台连接到的数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_rb92fde6d03d64f8b8a27137885f86829"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_ae5398d420a3143eb995b80bba6205b4a"><a name="zh-cn_topic_0059777972_ae5398d420a3143eb995b80bba6205b4a"></a><a name="zh-cn_topic_0059777972_ae5398d420a3143eb995b80bba6205b4a"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_ad88acb7c39ed43c7976097a7f1a76a75"><a name="zh-cn_topic_0059777972_ad88acb7c39ed43c7976097a7f1a76a75"></a><a name="zh-cn_topic_0059777972_ad88acb7c39ed43c7976097a7f1a76a75"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a1cd1edb6859941d19b1acc096b0c3b3d"><a name="zh-cn_topic_0059777972_a1cd1edb6859941d19b1acc096b0c3b3d"></a><a name="zh-cn_topic_0059777972_a1cd1edb6859941d19b1acc096b0c3b3d"></a>后台线程ID。</p>
</td>
</tr>
<tr id="row12605252131912"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="p146053528192"><a name="p146053528192"></a><a name="p146053528192"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="p760535291917"><a name="p760535291917"></a><a name="p760535291917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="p76051452111911"><a name="p76051452111911"></a><a name="p76051452111911"></a>会话ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r60579e8eaaf24f51920527f6aaf90092"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a91bbca399b6d43499bbbac8b4c16fdf6"><a name="zh-cn_topic_0059777972_a91bbca399b6d43499bbbac8b4c16fdf6"></a><a name="zh-cn_topic_0059777972_a91bbca399b6d43499bbbac8b4c16fdf6"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a972ad4a8ae3e4b339f528384d6c88d08"><a name="zh-cn_topic_0059777972_a972ad4a8ae3e4b339f528384d6c88d08"></a><a name="zh-cn_topic_0059777972_a972ad4a8ae3e4b339f528384d6c88d08"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a3b81447722cf4f85ac9f9bb338f088a2"><a name="zh-cn_topic_0059777972_a3b81447722cf4f85ac9f9bb338f088a2"></a><a name="zh-cn_topic_0059777972_a3b81447722cf4f85ac9f9bb338f088a2"></a>登录该后台的用户OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r362b02d1b53b45b182fdb0451c702066"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_afdc1be659e8c43298ea84f479c8e95e8"><a name="zh-cn_topic_0059777972_afdc1be659e8c43298ea84f479c8e95e8"></a><a name="zh-cn_topic_0059777972_afdc1be659e8c43298ea84f479c8e95e8"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a6846252afc0a4b16ae788febc9240c5e"><a name="zh-cn_topic_0059777972_a6846252afc0a4b16ae788febc9240c5e"></a><a name="zh-cn_topic_0059777972_a6846252afc0a4b16ae788febc9240c5e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a652555efe5d54ad0bf1440fbb6f07ef1"><a name="zh-cn_topic_0059777972_a652555efe5d54ad0bf1440fbb6f07ef1"></a><a name="zh-cn_topic_0059777972_a652555efe5d54ad0bf1440fbb6f07ef1"></a>登录该后台的用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r5ca459d9313c49d8864803ff9949d86e"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a284c1a65062b4e18bad2fc9ced7aa623"><a name="zh-cn_topic_0059777972_a284c1a65062b4e18bad2fc9ced7aa623"></a><a name="zh-cn_topic_0059777972_a284c1a65062b4e18bad2fc9ced7aa623"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a80433bceb40c429eaceb9b60df7e201b"><a name="zh-cn_topic_0059777972_a80433bceb40c429eaceb9b60df7e201b"></a><a name="zh-cn_topic_0059777972_a80433bceb40c429eaceb9b60df7e201b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a0d408db3c0ea480ea1e02df2861e7514"><a name="zh-cn_topic_0059777972_a0d408db3c0ea480ea1e02df2861e7514"></a><a name="zh-cn_topic_0059777972_a0d408db3c0ea480ea1e02df2861e7514"></a>连接到该后台的应用名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_rec0722281d94405f9deb809325d290d3"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_ae861b2106b7c469aa0f138075b033001"><a name="zh-cn_topic_0059777972_ae861b2106b7c469aa0f138075b033001"></a><a name="zh-cn_topic_0059777972_ae861b2106b7c469aa0f138075b033001"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a0df2ee40bb4b4f578835cdf7e533b600"><a name="zh-cn_topic_0059777972_a0df2ee40bb4b4f578835cdf7e533b600"></a><a name="zh-cn_topic_0059777972_a0df2ee40bb4b4f578835cdf7e533b600"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_ae502af22046347fdb04acde911e56770"><a name="zh-cn_topic_0059777972_ae502af22046347fdb04acde911e56770"></a><a name="zh-cn_topic_0059777972_ae502af22046347fdb04acde911e56770"></a>连接到该后台的客户端的IP地址。如果此字段是null，它表明通过服务器机器上UNIX套接字连接客户端或者这是内部进程，如autovacuum。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r674785086fc446f6b472225c4f45681d"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_ad8296c5dcf504a70ba3f0616dbfee4b0"><a name="zh-cn_topic_0059777972_ad8296c5dcf504a70ba3f0616dbfee4b0"></a><a name="zh-cn_topic_0059777972_ad8296c5dcf504a70ba3f0616dbfee4b0"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a4e60b130e5c24becba30ce25e9b3d887"><a name="zh-cn_topic_0059777972_a4e60b130e5c24becba30ce25e9b3d887"></a><a name="zh-cn_topic_0059777972_a4e60b130e5c24becba30ce25e9b3d887"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_af4e02f01c0e74a08a3182dc94c80a43c"><a name="zh-cn_topic_0059777972_af4e02f01c0e74a08a3182dc94c80a43c"></a><a name="zh-cn_topic_0059777972_af4e02f01c0e74a08a3182dc94c80a43c"></a>客户端的主机名，这个字段是通过client_addr的反向DNS查找得到。这个字段只有在启动log_hostname且使用IP连接时才非空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_row42029231212"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_p182025232120"><a name="zh-cn_topic_0059777972_p182025232120"></a><a name="zh-cn_topic_0059777972_p182025232120"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_p620213232017"><a name="zh-cn_topic_0059777972_p620213232017"></a><a name="zh-cn_topic_0059777972_p620213232017"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_p02031923418"><a name="zh-cn_topic_0059777972_p02031923418"></a><a name="zh-cn_topic_0059777972_p02031923418"></a>客户端用于与后台通讯的TCP端口号，如果使用Unix套接字，则为-1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r541fdd8686da407c96f2509343538540"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a4f52bdbfe93a430ba36479988f21b684"><a name="zh-cn_topic_0059777972_a4f52bdbfe93a430ba36479988f21b684"></a><a name="zh-cn_topic_0059777972_a4f52bdbfe93a430ba36479988f21b684"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_ab807a50bbb4644bb9322b11414d7df23"><a name="zh-cn_topic_0059777972_ab807a50bbb4644bb9322b11414d7df23"></a><a name="zh-cn_topic_0059777972_ab807a50bbb4644bb9322b11414d7df23"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_ac5aed19bdcb44b6291d6e250de35601b"><a name="zh-cn_topic_0059777972_ac5aed19bdcb44b6291d6e250de35601b"></a><a name="zh-cn_topic_0059777972_ac5aed19bdcb44b6291d6e250de35601b"></a>该过程开始的时间，即当客户端连接服务器时。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_row12950520145711"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_p119501720125717"><a name="zh-cn_topic_0059777972_p119501720125717"></a><a name="zh-cn_topic_0059777972_p119501720125717"></a>xact_start</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_p15950420195713"><a name="zh-cn_topic_0059777972_p15950420195713"></a><a name="zh-cn_topic_0059777972_p15950420195713"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_p13950172010576"><a name="zh-cn_topic_0059777972_p13950172010576"></a><a name="zh-cn_topic_0059777972_p13950172010576"></a>启动当前事务的时间，如果没有事务是活跃的，则为null。如果当前查询是首个事务，则这列等同于query_start列。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r4ce382187d6843eda3e0bd45fabf08b6"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a4bc773f3c8654882b500db870447039b"><a name="zh-cn_topic_0059777972_a4bc773f3c8654882b500db870447039b"></a><a name="zh-cn_topic_0059777972_a4bc773f3c8654882b500db870447039b"></a>query_start</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a87c322c7c720487e846ca7f1ee098420"><a name="zh-cn_topic_0059777972_a87c322c7c720487e846ca7f1ee098420"></a><a name="zh-cn_topic_0059777972_a87c322c7c720487e846ca7f1ee098420"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a076a2774541b40bf82ebb09a9fb85b95"><a name="zh-cn_topic_0059777972_a076a2774541b40bf82ebb09a9fb85b95"></a><a name="zh-cn_topic_0059777972_a076a2774541b40bf82ebb09a9fb85b95"></a>开始当前活跃查询的时间，如果state的值不是active，则这个值是上一个查询的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_row53787245015"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_p123781246012"><a name="zh-cn_topic_0059777972_p123781246012"></a><a name="zh-cn_topic_0059777972_p123781246012"></a>state_change</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_p17378102411018"><a name="zh-cn_topic_0059777972_p17378102411018"></a><a name="zh-cn_topic_0059777972_p17378102411018"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_p737818248020"><a name="zh-cn_topic_0059777972_p737818248020"></a><a name="zh-cn_topic_0059777972_p737818248020"></a>上次状态改变的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r4b774825fd364d8e81cc2b5cd234a24a"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a8d76f1f594bc43ef9ea7ddbf051c7a18"><a name="zh-cn_topic_0059777972_a8d76f1f594bc43ef9ea7ddbf051c7a18"></a><a name="zh-cn_topic_0059777972_a8d76f1f594bc43ef9ea7ddbf051c7a18"></a>waiting</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a0ba76922758f4cf99501824247599464"><a name="zh-cn_topic_0059777972_a0ba76922758f4cf99501824247599464"></a><a name="zh-cn_topic_0059777972_a0ba76922758f4cf99501824247599464"></a><span id="text19133555133014"><a name="text19133555133014"></a><a name="text19133555133014"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_abbf0584b0d574fa2943de929b6e976a3"><a name="zh-cn_topic_0059777972_abbf0584b0d574fa2943de929b6e976a3"></a><a name="zh-cn_topic_0059777972_abbf0584b0d574fa2943de929b6e976a3"></a>如果后台当前正等待锁则为true。否则为false。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_rd7bcc0d8b4ea459399825563008727aa"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_abe569fb5c312474dafb1a93dfc0827ce"><a name="zh-cn_topic_0059777972_abe569fb5c312474dafb1a93dfc0827ce"></a><a name="zh-cn_topic_0059777972_abe569fb5c312474dafb1a93dfc0827ce"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a2524ecf47dda42af9f62260198ab727f"><a name="zh-cn_topic_0059777972_a2524ecf47dda42af9f62260198ab727f"></a><a name="zh-cn_topic_0059777972_a2524ecf47dda42af9f62260198ab727f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="ae99c0e5c2ca94a0a80a20fcf84ba6f8e"><a name="ae99c0e5c2ca94a0a80a20fcf84ba6f8e"></a><a name="ae99c0e5c2ca94a0a80a20fcf84ba6f8e"></a>语句当前排队状态。可能值是：<a name="ul1254815291343"></a><a name="ul1254815291343"></a><ul id="ul1254815291343"><li>waiting in queue：表示语句在排队中。</li><li>空：表示语句正在运行。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r243f105d184a4fd48900b27857070c15"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_ab1223e1ca67a4e7dbed54cf7d532683f"><a name="zh-cn_topic_0059777972_ab1223e1ca67a4e7dbed54cf7d532683f"></a><a name="zh-cn_topic_0059777972_ab1223e1ca67a4e7dbed54cf7d532683f"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a0729ad3f1ed741e5a1641d4048cc08f1"><a name="zh-cn_topic_0059777972_a0729ad3f1ed741e5a1641d4048cc08f1"></a><a name="zh-cn_topic_0059777972_a0729ad3f1ed741e5a1641d4048cc08f1"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0059777972_a8b17bdadd4ca49d796ea95bdfa8fcaae"><a name="zh-cn_topic_0059777972_a8b17bdadd4ca49d796ea95bdfa8fcaae"></a><a name="zh-cn_topic_0059777972_a8b17bdadd4ca49d796ea95bdfa8fcaae"></a>该后台当前总体状态。可能值是：<a name="zh-cn_topic_0059777972_u755161387a854b46a73fd5d219a1acc3"></a><a name="zh-cn_topic_0059777972_u755161387a854b46a73fd5d219a1acc3"></a><ul id="zh-cn_topic_0059777972_u755161387a854b46a73fd5d219a1acc3"><li>active：后台正在执行一个查询。</li><li>idle：后台正在等待一个新的客户端命令。</li><li>idle in transaction：后台在事务中，但事务中没有语句在执行。</li><li>idle in transaction (aborted)：后台在事务中，但事务中有语句执行失败。</li><li>fastpath function call：后台正在执行一个fast-path函数。</li><li>disabled：如果后台禁用track_activities，则报告这个状态。</li></ul>
</div>
<div class="note" id="note191674411848"><a name="note191674411848"></a><a name="note191674411848"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p2167841046"><a name="p2167841046"></a><a name="p2167841046"></a>普通用户只能查看到自己帐户所对应的会话状态。即其他帐户的state信息为空。例如以judy用户连接数据库后，在pg_stat_activity中查看到的普通用户joe及初始用户<span id="text1269720217410"><a name="text1269720217410"></a><a name="text1269720217410"></a>omm</span>的state信息为空：</p>
<pre class="screen" id="screen199102016171518"><a name="screen199102016171518"></a><a name="screen199102016171518"></a>SELECT datname, usename, usesysid, state,pid FROM pg_stat_activity_ng;</pre>
<pre class="screen" id="screen5189325101515"><a name="screen5189325101515"></a><a name="screen5189325101515"></a> datname  | usename | usesysid | state  |       pid
----------+---------+----------+--------+-----------------
 postgres | <span id="text97521922204116"><a name="text97521922204116"></a><a name="text97521922204116"></a>omm</span>     |       10 |        | 139968752121616
 postgres | <span id="text1844310236410"><a name="text1844310236410"></a><a name="text1844310236410"></a>omm</span>     |       10 |        | 139968903116560
 db_tpcds | judy    |    16398 | active | 139968391403280
 postgres | <span id="text314672414119"><a name="text314672414119"></a><a name="text314672414119"></a>omm</span>     |       10 |        | 139968643069712
 postgres | <span id="text4778162494110"><a name="text4778162494110"></a><a name="text4778162494110"></a>omm</span>     |       10 |        | 139968680818448
 postgres | joe     |    16390 |        | 139968563377936
(6 rows)</pre>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_r4e79d12189944a3c8873b3cac8fe7511"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a9d1e323ad2fe412fa48735617b6eab71"><a name="zh-cn_topic_0059777972_a9d1e323ad2fe412fa48735617b6eab71"></a><a name="zh-cn_topic_0059777972_a9d1e323ad2fe412fa48735617b6eab71"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_a854bdaa4137a4e5aaa61078d08d74fe0"><a name="zh-cn_topic_0059777972_a854bdaa4137a4e5aaa61078d08d74fe0"></a><a name="zh-cn_topic_0059777972_a854bdaa4137a4e5aaa61078d08d74fe0"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_a1357c82cfea64effaba41d2757ea150e"><a name="zh-cn_topic_0059777972_a1357c82cfea64effaba41d2757ea150e"></a><a name="zh-cn_topic_0059777972_a1357c82cfea64effaba41d2757ea150e"></a>用户使用的资源池。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_raec26980fecd4fa5b245a1a393ff2420"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_a7f9fa24370a54f6b89aa20a83e4f7e4e"><a name="zh-cn_topic_0059777972_a7f9fa24370a54f6b89aa20a83e4f7e4e"></a><a name="zh-cn_topic_0059777972_a7f9fa24370a54f6b89aa20a83e4f7e4e"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_ace8741fb0d77415e8a828f7d1e49bb5b"><a name="zh-cn_topic_0059777972_ace8741fb0d77415e8a828f7d1e49bb5b"></a><a name="zh-cn_topic_0059777972_ace8741fb0d77415e8a828f7d1e49bb5b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_ae131771822e24d5a8dced7776e316af4"><a name="zh-cn_topic_0059777972_ae131771822e24d5a8dced7776e316af4"></a><a name="zh-cn_topic_0059777972_ae131771822e24d5a8dced7776e316af4"></a>查询语句的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777972_row372145635812"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777972_p1472175615813"><a name="zh-cn_topic_0059777972_p1472175615813"></a><a name="zh-cn_topic_0059777972_p1472175615813"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777972_p16721563586"><a name="zh-cn_topic_0059777972_p16721563586"></a><a name="zh-cn_topic_0059777972_p16721563586"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777972_p2072195635818"><a name="zh-cn_topic_0059777972_p2072195635818"></a><a name="zh-cn_topic_0059777972_p2072195635818"></a>该后台的最新查询。如果state状态是active（活跃的），此字段显示当前正在执行的查询。所有其他情况表示上一个查询。</p>
</td>
</tr>
<tr id="row1697320349444"><td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.2.4.1.1 "><p id="p13120145515310"><a name="p13120145515310"></a><a name="p13120145515310"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="18.279999999999998%" headers="mcps1.2.4.1.2 "><p id="p1412065518316"><a name="p1412065518316"></a><a name="p1412065518316"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48.449999999999996%" headers="mcps1.2.4.1.3 "><p id="p1612017551314"><a name="p1612017551314"></a><a name="p1612017551314"></a>语句所属用户对应的逻辑数据库实例。</p>
</td>
</tr>
</tbody>
</table>
