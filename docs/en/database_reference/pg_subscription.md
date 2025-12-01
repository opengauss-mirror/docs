# PG\_SUBSCRIPTION<a name="EN-US_TOPIC_0000001198917452"></a>

**PG\_SUBSCRIPTION**  contains all existing logical replication subscriptions. This system catalog is accessible only to system administrators.

Unlike most system catalogs,  **PG\_SUBSCRIPTION**  is shared across all databases in a database instance. Each database instance has only one copy, not one copy per database.

**Table  1**  PG\_SUBSCRIPTION columns

<a name="table10398182255119"></a>
<table><thead align="left"><tr id="row5400162217515"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p11400152265113"><a name="p11400152265113"></a><a name="p11400152265113"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p19400622165117"><a name="p19400622165117"></a><a name="p19400622165117"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p114006220517"><a name="p114006220517"></a><a name="p114006220517"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row28891944205414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11514618540"><a name="p11514618540"></a><a name="p11514618540"></a>Row identifier (hidden attribute, which must be specified).</p>
</td>
</tr>
<tr id="row10400322175118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540116221516"><a name="p540116221516"></a><a name="p540116221516"></a>subdbid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14011322165117"><a name="p14011322165117"></a><a name="p14011322165117"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8401142219519"><a name="p8401142219519"></a><a name="p8401142219519"></a>OID of the database where the subscription is located.</p>
</td>
</tr>
<tr id="row18401522155113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13401132217516"><a name="p13401132217516"></a><a name="p13401132217516"></a>subname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4401222145118"><a name="p4401222145118"></a><a name="p4401222145118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p114016229518"><a name="p114016229518"></a><a name="p114016229518"></a>Subscription name.</p>
</td>
</tr>
<tr id="row740182215112"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16401112255116"><a name="p16401112255116"></a><a name="p16401112255116"></a>subowner</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p84011222165110"><a name="p84011222165110"></a><a name="p84011222165110"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10401822115111"><a name="p10401822115111"></a><a name="p10401822115111"></a>Subscription owner.</p>
</td>
</tr>
<tr id="row15401112285110"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540132212511"><a name="p540132212511"></a><a name="p540132212511"></a>subenabled</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1340132219511"><a name="p1340132219511"></a><a name="p1340132219511"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164029226515"><a name="p164029226515"></a><a name="p164029226515"></a>If true, the subscription is enabled and should be replicated.</p>
</td>
</tr>
<tr id="row10402162255117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18402152255114"><a name="p18402152255114"></a><a name="p18402152255114"></a>subconninfo</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1840242245116"><a name="p1840242245116"></a><a name="p1840242245116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16402172225120"><a name="p16402172225120"></a><a name="p16402172225120"></a>Information about the connection to the publishing database.</p>
</td>
</tr>
<tr id="row440215228518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19402142211518"><a name="p19402142211518"></a><a name="p19402142211518"></a>subslotname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p740212295115"><a name="p740212295115"></a><a name="p740212295115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p140242210511"><a name="p140242210511"></a><a name="p140242210511"></a>Name of the replication slot in the publishing database. If this parameter is left empty, the value is <strong id="b13621417193610"><a name="b13621417193610"></a><a name="b13621417193610"></a>NONE</strong>.</p>
</td>
</tr>
<tr id="row5366163018614"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p113664301868"><a name="p113664301868"></a><a name="p113664301868"></a>subsynccommit</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3366123015617"><a name="p3366123015617"></a><a name="p3366123015617"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p236618305619"><a name="p236618305619"></a><a name="p236618305619"></a>Value of <strong id="b197509324361"><a name="b197509324361"></a><a name="b197509324361"></a>synchronous_commit</strong> of the subscription worker.</p>
</td>
</tr>
<tr id="row18136114310539"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p913764314533"><a name="p913764314533"></a><a name="p913764314533"></a>subpublications</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p513754355316"><a name="p513754355316"></a><a name="p513754355316"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13137204313536"><a name="p13137204313536"></a><a name="p13137204313536"></a>Array containing names of the subscribed publications. These are referenced publications on the publisher server.</p>
</td>
</tr>
</tbody>
</table>
