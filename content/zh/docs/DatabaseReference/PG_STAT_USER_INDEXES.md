# PG\_STAT\_USER\_INDEXES

PG\_STAT\_USER\_INDEXES视图显示数据库中用户自定义普通表和toast表的索引状态信息。

**表 1**  PG\_STAT\_USER\_INDEXES字段

<a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_tc23ffa4000e9413e93247e60610950ea"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r52677772553e458bbb32631d2106401f"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a0bbe50d092484b4190d722baedb8b780"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a0bbe50d092484b4190d722baedb8b780"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a0bbe50d092484b4190d722baedb8b780"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.01%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a4f016f23cf85430ca1efe0acdc6e4173"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a4f016f23cf85430ca1efe0acdc6e4173"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a4f016f23cf85430ca1efe0acdc6e4173"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.14%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1b01f760cd9640fbac6c80ebcb7ec744"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1b01f760cd9640fbac6c80ebcb7ec744"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1b01f760cd9640fbac6c80ebcb7ec744"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_rcfdf435d84e8492e9623e66f926c696e"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a5411778794ec4e8ab55ab0a76684ecea"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a5411778794ec4e8ab55ab0a76684ecea"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a5411778794ec4e8ab55ab0a76684ecea"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae3281bbf41b74dbe99967374a49e6d14"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae3281bbf41b74dbe99967374a49e6d14"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae3281bbf41b74dbe99967374a49e6d14"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a58e8196125664a7ebaebbe81f6da7127"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a58e8196125664a7ebaebbe81f6da7127"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a58e8196125664a7ebaebbe81f6da7127"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ra61b69f88dd64ad98efbc9d70fe44b98"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad3b2600cad884652a3e5a097a06e92c3"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad3b2600cad884652a3e5a097a06e92c3"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad3b2600cad884652a3e5a097a06e92c3"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a6247d1de79634c548a105399ad90738e"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a6247d1de79634c548a105399ad90738e"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a6247d1de79634c548a105399ad90738e"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a78dba76f3fbf4f05a3f75cfae9a5c25d"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a78dba76f3fbf4f05a3f75cfae9a5c25d"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a78dba76f3fbf4f05a3f75cfae9a5c25d"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r05561f77732d461f957d2a634a2a1032"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad07b4a5ae4dd4a0ab72a7bf9d464b248"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad07b4a5ae4dd4a0ab72a7bf9d464b248"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad07b4a5ae4dd4a0ab72a7bf9d464b248"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1367512eaf264b4c828a967afec6ef95"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1367512eaf264b4c828a967afec6ef95"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1367512eaf264b4c828a967afec6ef95"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aed605daf3941470ba56f1acd04969865"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aed605daf3941470ba56f1acd04969865"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aed605daf3941470ba56f1acd04969865"></a>索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_rda8084f8ad88400099c623415d5fc24f"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9a3715776fd04a14b9818150493be116"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9a3715776fd04a14b9818150493be116"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9a3715776fd04a14b9818150493be116"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a62c7fc19022e4155acffedac2a289af8"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a62c7fc19022e4155acffedac2a289af8"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a62c7fc19022e4155acffedac2a289af8"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aabfcffe6713749b2966410d1e38c07d5"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aabfcffe6713749b2966410d1e38c07d5"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aabfcffe6713749b2966410d1e38c07d5"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r2d01715275144937bc0202a486e2d556"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae8bc5c0504ca4d81b2d6f6fbc2b555f7"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae8bc5c0504ca4d81b2d6f6fbc2b555f7"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae8bc5c0504ca4d81b2d6f6fbc2b555f7"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a3bdb69ac5e7f47028b19bbdc4707b2d4"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a3bdb69ac5e7f47028b19bbdc4707b2d4"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a3bdb69ac5e7f47028b19bbdc4707b2d4"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1d46e989df32448ca52696e644c3500b"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1d46e989df32448ca52696e644c3500b"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1d46e989df32448ca52696e644c3500b"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r5202e6e49a0148daaaee2efbe149e498"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ace98df1d447e41d79f6e6622bb5ec3f8"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ace98df1d447e41d79f6e6622bb5ec3f8"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ace98df1d447e41d79f6e6622bb5ec3f8"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9bb7925b1aa64139b31174bc694b682a"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9bb7925b1aa64139b31174bc694b682a"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a9bb7925b1aa64139b31174bc694b682a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aedfa72ce287e438aa6054363778dc2f7"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aedfa72ce287e438aa6054363778dc2f7"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aedfa72ce287e438aa6054363778dc2f7"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r84433138ee464fabb0469c34ba1f9dfa"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aef96230f2332463397c0b9d46637574d"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aef96230f2332463397c0b9d46637574d"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aef96230f2332463397c0b9d46637574d"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aea32d43ecc804f38aefc36cfd2490ecc"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aea32d43ecc804f38aefc36cfd2490ecc"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aea32d43ecc804f38aefc36cfd2490ecc"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aee8fbf0ed5514cc0898c2b4e85312bbd"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aee8fbf0ed5514cc0898c2b4e85312bbd"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_aee8fbf0ed5514cc0898c2b4e85312bbd"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_r86fdae438f4a4374a6fa5151b3d7d508"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad0ecc56776244522ab546384b7001759"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad0ecc56776244522ab546384b7001759"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ad0ecc56776244522ab546384b7001759"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae97baecbe8984fde9ce7ca175321819f"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae97baecbe8984fde9ce7ca175321819f"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_ae97baecbe8984fde9ce7ca175321819f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1a51a2c678444348beba32e5469a794e"><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1a51a2c678444348beba32e5469a794e"></a><a name="zh-cn_topic_0283137388_zh-cn_topic_0237122448_zh-cn_topic_0059777687_a1a51a2c678444348beba32e5469a794e"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

