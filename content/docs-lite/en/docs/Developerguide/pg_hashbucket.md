# PG\_HASHBUCKET<a name="EN-US_TOPIC_0000001151568200"></a>

**PG\_HASHBUCKET**  records hash bucket information.

**Table  1**  PG\_HASHBUCKET columns

<a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_t553335b97ca24b16be6f2a8fad19d59a"></a>
<table><thead align="left"><tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r77b1feeaf06f47c39276851270d7af5d"><th class="cellrowborder" valign="top" width="16.64%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a52f340d7cc2141db93937ece7a2eb472"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.04%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ab9c8ba4e413e451c80f893467f0a3e4a"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="66.32000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a120f6b19c1784330a7ccd62dcc61e4a5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_rda19630333f04264a89ae62d66ca4941"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a5383bc791c4a4fbc88c372df64f2e0bc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_ae85c6d394a324e95ad384d13b6258e28"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_abdd4dc14fdfb4464849e008632648e3a"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r76daafb9724149938d1681b7ad19a4ef"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p191591415"><a name="p191591415"></a><a name="p191591415"></a>bucketid</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a8d7bf386b14f464c9b7a9f6735ba5003"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p16936349212"><a name="p16936349212"></a><a name="p16936349212"></a>Hash value calculated for a bucket vector. The hash value can be used to accelerate the search for a bucket vector.</p>
</td>
</tr>
<tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r2dfe0cbf429a4350a2fe62e9bab624a4"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p48185910115"><a name="p48185910115"></a><a name="p48185910115"></a>bucketcnt</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a1f04d6c82aa64d05b44d205b6c14b959"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p1793513491113"><a name="p1793513491113"></a><a name="p1793513491113"></a>Number of shards</p>
</td>
</tr>
<tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r34e3244c232740d09d19a1de04094568"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p158155913112"><a name="p158155913112"></a><a name="p158155913112"></a>bucketmapsize</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a6821b1e839444d568f721ba2d8f8458e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p49359491715"><a name="p49359491715"></a><a name="p49359491715"></a>Total number of shards on all DNs</p>
</td>
</tr>
<tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r409491d9b4c9440986aa3f5cc95777ea"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p2715914114"><a name="p2715914114"></a><a name="p2715914114"></a>bucketref</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a9983fb6a42324fb1a342702813c73974"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a9983fb6a42324fb1a342702813c73974"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a9983fb6a42324fb1a342702813c73974"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p99338491713"><a name="p99338491713"></a><a name="p99338491713"></a>Reserved column with <strong id="b8806161932816"><a name="b8806161932816"></a><a name="b8806161932816"></a>1</strong> as its default value</p>
</td>
</tr>
<tr id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_r27223efa87c247cab272f0e9afeb9e1b"><td class="cellrowborder" valign="top" width="16.64%" headers="mcps1.2.4.1.1 "><p id="p19876581613"><a name="p19876581613"></a><a name="p19876581613"></a>bucketvector</p>
</td>
<td class="cellrowborder" valign="top" width="17.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a><a name="en-us_topic_0283137672_en-us_topic_0237122293_en-us_topic_0059777688_a3daad8e698f14ed8ac5579864a14a390"></a>oidvector_extend</p>
</td>
<td class="cellrowborder" valign="top" width="66.32000000000001%" headers="mcps1.2.4.1.3 "><p id="p79311493116"><a name="p79311493116"></a><a name="p79311493116"></a>Records all bucket IDs contained in the bucket information in this row. A unique index is created in this column. Tables with the same bucket ID share the <strong id="b20318102713284"><a name="b20318102713284"></a><a name="b20318102713284"></a>PG_HASHBUCKET</strong> data in the same row.</p>
</td>
</tr>
</tbody>
</table>

