# curosr.executemany\(query,vars\_list\)<a name="EN-US_TOPIC_0000001080211184"></a>

## Function<a name="section5708152714306"></a>

This method executes an SQL command against all parameter sequences or mappings found in the sequence SQL.

## Prototype<a name="section441681310810"></a>

```
curosr.executemany(query,vars_list)
```

## Parameter<a name="en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  curosr.executemany parameters

<a name="en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.28%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="b1154697563105527"><a name="b1154697563105527"></a><a name="b1154697563105527"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.72%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.28%" headers="mcps1.2.3.1.1 "><p id="p23111054217"><a name="p23111054217"></a><a name="p23111054217"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="76.72%" headers="mcps1.2.3.1.2 "><p id="p1393801515211"><a name="p1393801515211"></a><a name="p1393801515211"></a>SQL statement that you want to execute.</p>
</td>
</tr>
<tr id="row9119201612171"><td class="cellrowborder" valign="top" width="23.28%" headers="mcps1.2.3.1.1 "><p id="p41191016141710"><a name="p41191016141710"></a><a name="p41191016141710"></a>vars_list</p>
</td>
<td class="cellrowborder" valign="top" width="76.72%" headers="mcps1.2.3.1.2 "><p id="p1011981671716"><a name="p1011981671716"></a><a name="p1011981671716"></a>Variable list, which matches the <strong id="b205091216185918"><a name="b205091216185918"></a><a name="b205091216185918"></a>%s</strong> placeholder in the query.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="section899452817814"></a>

None

## Examples<a name="section4160944682"></a>

For details, see  [Example: Common Operations](example-common-operations-psycopg.md).

