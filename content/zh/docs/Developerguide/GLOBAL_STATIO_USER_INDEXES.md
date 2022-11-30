# GLOBAL\_STATIO\_USER\_INDEXES<a name="ZH-CN_TOPIC_0245374778"></a>

GLOBAL\_STATIO\_USER\_INDEXES视图显示各节点的命名空间中所有用户关系表索引的IO状态信息。

**表 1**  GLOBAL\_STATIO\_USER\_INDEXES字段

<a name="zh-cn_topic_0237122674_table1388412429913"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122674_row19731642592"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122674_p19973134218914"><a name="zh-cn_topic_0237122674_p19973134218914"></a><a name="zh-cn_topic_0237122674_p19973134218914"></a><strong id="zh-cn_topic_0237122674_b1397411421497"><a name="zh-cn_topic_0237122674_b1397411421497"></a><a name="zh-cn_topic_0237122674_b1397411421497"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122674_p297494219912"><a name="zh-cn_topic_0237122674_p297494219912"></a><a name="zh-cn_topic_0237122674_p297494219912"></a><strong id="zh-cn_topic_0237122674_b897416428912"><a name="zh-cn_topic_0237122674_b897416428912"></a><a name="zh-cn_topic_0237122674_b897416428912"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122674_p9974842192"><a name="zh-cn_topic_0237122674_p9974842192"></a><a name="zh-cn_topic_0237122674_p9974842192"></a><strong id="zh-cn_topic_0237122674_b59742421918"><a name="zh-cn_topic_0237122674_b59742421918"></a><a name="zh-cn_topic_0237122674_b59742421918"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122674_row79748428914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p119741428914"><a name="zh-cn_topic_0237122674_p119741428914"></a><a name="zh-cn_topic_0237122674_p119741428914"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p9974442791"><a name="zh-cn_topic_0237122674_p9974442791"></a><a name="zh-cn_topic_0237122674_p9974442791"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p497414217917"><a name="zh-cn_topic_0237122674_p497414217917"></a><a name="zh-cn_topic_0237122674_p497414217917"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row189752421090"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p10975154212917"><a name="zh-cn_topic_0237122674_p10975154212917"></a><a name="zh-cn_topic_0237122674_p10975154212917"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p1697516425912"><a name="zh-cn_topic_0237122674_p1697516425912"></a><a name="zh-cn_topic_0237122674_p1697516425912"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p897544212918"><a name="zh-cn_topic_0237122674_p897544212918"></a><a name="zh-cn_topic_0237122674_p897544212918"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row199751421395"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p11975164216917"><a name="zh-cn_topic_0237122674_p11975164216917"></a><a name="zh-cn_topic_0237122674_p11975164216917"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p159753421994"><a name="zh-cn_topic_0237122674_p159753421994"></a><a name="zh-cn_topic_0237122674_p159753421994"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p129754421919"><a name="zh-cn_topic_0237122674_p129754421919"></a><a name="zh-cn_topic_0237122674_p129754421919"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row797524216916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p15976104215916"><a name="zh-cn_topic_0237122674_p15976104215916"></a><a name="zh-cn_topic_0237122674_p15976104215916"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p13976542296"><a name="zh-cn_topic_0237122674_p13976542296"></a><a name="zh-cn_topic_0237122674_p13976542296"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p297618422912"><a name="zh-cn_topic_0237122674_p297618422912"></a><a name="zh-cn_topic_0237122674_p297618422912"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row13976184219919"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p197604218910"><a name="zh-cn_topic_0237122674_p197604218910"></a><a name="zh-cn_topic_0237122674_p197604218910"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p15976642396"><a name="zh-cn_topic_0237122674_p15976642396"></a><a name="zh-cn_topic_0237122674_p15976642396"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p49761542095"><a name="zh-cn_topic_0237122674_p49761542095"></a><a name="zh-cn_topic_0237122674_p49761542095"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row897615426916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p69762421399"><a name="zh-cn_topic_0237122674_p69762421399"></a><a name="zh-cn_topic_0237122674_p69762421399"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p79771428913"><a name="zh-cn_topic_0237122674_p79771428913"></a><a name="zh-cn_topic_0237122674_p79771428913"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p69771421196"><a name="zh-cn_topic_0237122674_p69771421196"></a><a name="zh-cn_topic_0237122674_p69771421196"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row4977184218912"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p3977194216918"><a name="zh-cn_topic_0237122674_p3977194216918"></a><a name="zh-cn_topic_0237122674_p3977194216918"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p1497764216915"><a name="zh-cn_topic_0237122674_p1497764216915"></a><a name="zh-cn_topic_0237122674_p1497764216915"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p129776421496"><a name="zh-cn_topic_0237122674_p129776421496"></a><a name="zh-cn_topic_0237122674_p129776421496"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122674_row69771542391"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122674_p697713427917"><a name="zh-cn_topic_0237122674_p697713427917"></a><a name="zh-cn_topic_0237122674_p697713427917"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122674_p1977104219917"><a name="zh-cn_topic_0237122674_p1977104219917"></a><a name="zh-cn_topic_0237122674_p1977104219917"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122674_p109771421499"><a name="zh-cn_topic_0237122674_p109771421499"></a><a name="zh-cn_topic_0237122674_p109771421499"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>
