# PG\_SUBSCRIPTION\_REL<a name="EN-US_TOPIC_0000001198917452"></a>

The system catalog PG\_SUBSCRIPTION\_REL contains the status of each replicated table in each subscription. It is a many-to-many mapping.

This system catalog contains only tables known to the subscription after running [CREATE SUBSCRIPTION](../SQLReference/create-subscription.md) or [ALTER SUBSCRIPTION... REFRESH PUBLICATION](../SQLReference/alter-subscription.md).

**Table 1** PG\_SUBSCRIPTION\_REL columns

<a name="table10398182255119"></a>
<table><thead align="left"><tr id="row5400162217515"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p11400152265113"><a name="p11400152265113"></a><a name="p11400152265113"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p19400622165117"><a name="p19400622165117"></a><a name="p19400622165117"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p114006220517"><a name="p114006220517"></a><a name="p114006220517"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row28891944205414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137298_en-us_topic_0237122310_p1333112917367"><a name="en-us_topic_0283137298_en-us_topic_0237122310_p1333112917367"></a><a name="en-us_topic_0283137298_en-us_topic_0237122310_p1333112917367"></a>srsubid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137298_en-us_topic_0237122310_p1433462923615"><a name="en-us_topic_0283137298_en-us_topic_0237122310_p1433462923615"></a><a name="en-us_topic_0283137298_en-us_topic_0237122310_p1433462923615"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11514618540"><a name="p11514618540"></a><a name="p11514618540"></a>Identifier of the subscription.</p>
</td>
</tr>
<tr id="row10400322175118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540116221516"><a name="p540116221516"></a><a name="p540116221516"></a>srrelid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14011322165117"><a name="p14011322165117"></a><a name="p14011322165117"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8401142219519"><a name="p8401142219519"></a><a name="p8401142219519"></a>Subscription relationship ID.</p>
</td>
</tr>
<tr id="row18401522155113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13401132217516"><a name="p13401132217516"></a><a name="p13401132217516"></a>srsubstate</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4401222145118"><a name="p4401222145118"></a><a name="p4401222145118"></a>char</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p114016229518"><a name="p114016229518"></a><a name="p114016229518"></a>Subscription status. <li><strong>i</strong>: Initialization.</li><li><strong>d</strong>: Basic data being replicated.</li><li><strong>f</strong>: Basic data replication completed.</li><li><strong>s</strong>: Progress synchronized with incremental replication.</li><li><strong>r</strong>: Incremental replication ready.</p>
</td>
</tr>
<tr id="row740182215112"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16401112255116"><a name="p16401112255116"></a><a name="p16401112255116"></a>srcsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p84011222165110"><a name="p84011222165110"></a><a name="p84011222165110"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10401822115111"><a name="p10401822115111"></a><a name="p10401822115111"></a>Snapshot CSN during basic data replication.</p>
</td>
</tr>
<tr id="row15401112285110"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540132212511"><a name="p540132212511"></a><a name="p540132212511"></a>srsublsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1340132219511"><a name="p1340132219511"></a><a name="p1340132219511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164029226515"><a name="p164029226515"></a><a name="p164029226515"></a>Remote LSN used to synchronize the incremental replication progress in the <strong>s</strong> or <strong>r</strong> state. Otherwise, the value is null.</p>
</td>
</tr>
</tbody>
</table>
