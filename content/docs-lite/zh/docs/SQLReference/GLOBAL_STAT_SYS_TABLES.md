# GLOBAL\_STAT\_SYS\_TABLES<a name="ZH-CN_TOPIC_0289900682"></a>

得到各节点pg\_catalog、information\_schema以及pg\_toast模式下所有系统表的统计信息。

**表 1**  GLOBAL\_STAT\_SYS\_TABLES字段

<a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_table1734452764219"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row17644427154212"><th class="cellrowborder" valign="top" width="20.18%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7644227174215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7644227174215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7644227174215"></a><strong id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b11644142719421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b11644142719421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b11644142719421"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p9644172774216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p9644172774216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p9644172774216"></a><strong id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b15644132754214"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b15644132754214"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b15644132754214"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="48.41%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12644122704219"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12644122704219"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12644122704219"></a><strong id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b1364492711421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b1364492711421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_b1364492711421"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row9645152794211"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p6645227154217"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p6645227154217"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p6645227154217"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1164510274422"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1164510274422"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1164510274422"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17645132774212"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17645132774212"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17645132774212"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row4645142724214"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p76451427144211"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p76451427144211"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p76451427144211"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1564572744220"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1564572744220"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1564572744220"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1764515278428"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1764515278428"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1764515278428"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row4645162794213"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56456273424"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56456273424"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56456273424"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1864510271427"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1864510271427"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1864510271427"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18646182712426"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18646182712426"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18646182712426"></a>此表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row116461727164213"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1964612713426"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1964612713426"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1964612713426"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2646327194211"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2646327194211"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2646327194211"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8646627134220"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8646627134220"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8646627134220"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row664652711424"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13646727174215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13646727174215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13646727174215"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p14646162754210"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p14646162754210"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p14646162754210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16646192784216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16646192784216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16646192784216"></a>此表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row864682713429"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p064692784210"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p064692784210"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p064692784210"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2647102764211"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2647102764211"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2647102764211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p264772714428"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p264772714428"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p264772714428"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row96472027194213"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648142711423"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648142711423"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648142711423"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1364816270423"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1364816270423"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1364816270423"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648112754219"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648112754219"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11648112754219"></a>此表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row1648172734217"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136496272421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136496272421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136496272421"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p156496279421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p156496279421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p156496279421"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36497272429"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36497272429"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36497272429"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row364932794214"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11649172712421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11649172712421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11649172712421"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17649172710421"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17649172710421"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17649172710421"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11650162715427"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11650162715427"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p11650162715427"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row156509272426"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36501027184217"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36501027184217"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36501027184217"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13650112712423"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13650112712423"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13650112712423"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06501927124213"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06501927124213"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06501927124213"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row4650192784218"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p106511927164215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p106511927164215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p106511927164215"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p96511727114211"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p96511727114211"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p96511727114211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p126513276422"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p126513276422"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p126513276422"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row166519271426"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465112278426"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465112278426"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465112278426"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p26526275422"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p26526275422"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p26526275422"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465292714219"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465292714219"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p465292714219"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row13652132718428"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18652427114219"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18652427114219"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18652427114219"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13652152724216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13652152724216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13652152724216"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p15652182717428"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p15652182717428"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p15652182717428"></a>估计活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row06521227174213"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p565372734220"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p565372734220"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p565372734220"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136531227194212"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136531227194212"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p136531227194212"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56533273429"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56533273429"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p56533273429"></a>估计死行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row206539278421"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8653102794218"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8653102794218"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p8653102794218"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13654327154219"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13654327154219"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p13654327154219"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1065442794216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1065442794216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1065442794216"></a>最后一次此表是手动清理的（不计算VACUUM FULL）时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row156541227104215"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16541727154211"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16541727154211"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p16541727154211"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1654327114215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1654327114215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1654327114215"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12654132764214"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12654132764214"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p12654132764214"></a>上次被autovacuum守护进程清理的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row1465413272424"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1765582734214"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1765582734214"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1765582734214"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p965542714210"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p965542714210"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p965542714210"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p5655172711425"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p5655172711425"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p5655172711425"></a>上次手动分析这个表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row156551827204218"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p19662132712429"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p19662132712429"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p19662132712429"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17662162711426"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17662162711426"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p17662162711426"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1366582714215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1366582714215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1366582714215"></a>上次被autovacuum守护进程分析的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row116651274422"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06651827154218"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06651827154218"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p06651827154218"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1566582774218"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1566582774218"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p1566582774218"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266518277423"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266518277423"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266518277423"></a>这个表被手动清理的次数（不计算VACUUM FULL）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row18665182714213"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p466662716423"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p466662716423"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p466662716423"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2066652774216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2066652774216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2066652774216"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p0666627184210"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p0666627184210"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p0666627184210"></a>这个表被autovacuum清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row1866682717424"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36661727134212"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36661727134212"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p36661727134212"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266652744210"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266652744210"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p266652744210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7666112794216"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7666112794216"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p7666112794216"></a>这个表被手动分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_row366772754212"><td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18667727104215"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18667727104215"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p18667727104215"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2667927174213"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2667927174213"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p2667927174213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48.41%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p186678272428"><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p186678272428"></a><a name="zh-cn_topic_0283137695_zh-cn_topic_0237122584_p186678272428"></a>这个表被autovacuum守护进程分析的次数。</p>
</td>
</tr>
</tbody>
</table>

