# SUMMARY\_STAT\_XACT\_USER\_TABLES<a name="EN-US_TOPIC_0245374711"></a>

**SUMMARY\_STAT\_XACT\_USER\_TABLES**  displays transaction status information about the user tables in namespaces in the cluster. 

**Table  1**  SUMMARY\_STAT\_XACT\_USER\_TABLES columns

<a name="en-us_topic_0237122607_table893275719411"></a>
<table><thead align="left"><tr id="en-us_topic_0237122607_row173419581415"><th class="cellrowborder" valign="top" width="18.95810418958104%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122607_p12341358140"><a name="en-us_topic_0237122607_p12341358140"></a><a name="en-us_topic_0237122607_p12341358140"></a><strong id="b187143539526"><a name="b187143539526"></a><a name="b187143539526"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.21827817218278%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122607_p03418588417"><a name="en-us_topic_0237122607_p03418588417"></a><a name="en-us_topic_0237122607_p03418588417"></a><strong id="b1356145465211"><a name="b1356145465211"></a><a name="b1356145465211"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.82361763823617%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122607_p20347587420"><a name="en-us_topic_0237122607_p20347587420"></a><a name="en-us_topic_0237122607_p20347587420"></a><strong id="b18987155412526"><a name="b18987155412526"></a><a name="b18987155412526"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122607_row143410584416"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p11355581447"><a name="en-us_topic_0237122607_p11355581447"></a><a name="en-us_topic_0237122607_p11355581447"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p153512581742"><a name="en-us_topic_0237122607_p153512581742"></a><a name="en-us_topic_0237122607_p153512581742"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p13352058246"><a name="en-us_topic_0237122607_p13352058246"></a><a name="en-us_topic_0237122607_p13352058246"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row135125819411"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p13555820410"><a name="en-us_topic_0237122607_p13555820410"></a><a name="en-us_topic_0237122607_p13555820410"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p53516581543"><a name="en-us_topic_0237122607_p53516581543"></a><a name="en-us_topic_0237122607_p53516581543"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p635105810414"><a name="en-us_topic_0237122607_p635105810414"></a><a name="en-us_topic_0237122607_p635105810414"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row133513581448"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p83514583411"><a name="en-us_topic_0237122607_p83514583411"></a><a name="en-us_topic_0237122607_p83514583411"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p143512581843"><a name="en-us_topic_0237122607_p143512581843"></a><a name="en-us_topic_0237122607_p143512581843"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p1936195814413"><a name="en-us_topic_0237122607_p1936195814413"></a><a name="en-us_topic_0237122607_p1936195814413"></a>Number of sequential scans initiated on this table</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row133616588420"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p12364585415"><a name="en-us_topic_0237122607_p12364585415"></a><a name="en-us_topic_0237122607_p12364585415"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p43610585414"><a name="en-us_topic_0237122607_p43610585414"></a><a name="en-us_topic_0237122607_p43610585414"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p13612584418"><a name="en-us_topic_0237122607_p13612584418"></a><a name="en-us_topic_0237122607_p13612584418"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row73610581245"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p53617585415"><a name="en-us_topic_0237122607_p53617585415"></a><a name="en-us_topic_0237122607_p53617585415"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p18361258546"><a name="en-us_topic_0237122607_p18361258546"></a><a name="en-us_topic_0237122607_p18361258546"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p153665810418"><a name="en-us_topic_0237122607_p153665810418"></a><a name="en-us_topic_0237122607_p153665810418"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row436195812414"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p93614581946"><a name="en-us_topic_0237122607_p93614581946"></a><a name="en-us_topic_0237122607_p93614581946"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p73755815410"><a name="en-us_topic_0237122607_p73755815410"></a><a name="en-us_topic_0237122607_p73755815410"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p1337558041"><a name="en-us_topic_0237122607_p1337558041"></a><a name="en-us_topic_0237122607_p1337558041"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row123714581843"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p83716584410"><a name="en-us_topic_0237122607_p83716584410"></a><a name="en-us_topic_0237122607_p83716584410"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p537458843"><a name="en-us_topic_0237122607_p537458843"></a><a name="en-us_topic_0237122607_p537458843"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p10377581045"><a name="en-us_topic_0237122607_p10377581045"></a><a name="en-us_topic_0237122607_p10377581045"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row193775817412"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p63711581047"><a name="en-us_topic_0237122607_p63711581047"></a><a name="en-us_topic_0237122607_p63711581047"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p133711581047"><a name="en-us_topic_0237122607_p133711581047"></a><a name="en-us_topic_0237122607_p133711581047"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p1837135811418"><a name="en-us_topic_0237122607_p1837135811418"></a><a name="en-us_topic_0237122607_p1837135811418"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row23814581344"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p183813584418"><a name="en-us_topic_0237122607_p183813584418"></a><a name="en-us_topic_0237122607_p183813584418"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p53825814413"><a name="en-us_topic_0237122607_p53825814413"></a><a name="en-us_topic_0237122607_p53825814413"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p83885815411"><a name="en-us_topic_0237122607_p83885815411"></a><a name="en-us_topic_0237122607_p83885815411"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122607_row143811581148"><td class="cellrowborder" valign="top" width="18.95810418958104%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122607_p2038195815410"><a name="en-us_topic_0237122607_p2038195815410"></a><a name="en-us_topic_0237122607_p2038195815410"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.21827817218278%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122607_p13387581944"><a name="en-us_topic_0237122607_p13387581944"></a><a name="en-us_topic_0237122607_p13387581944"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.82361763823617%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122607_p10386589413"><a name="en-us_topic_0237122607_p10386589413"></a><a name="en-us_topic_0237122607_p10386589413"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
</tbody>
</table>

