# connection.cursor\(\)<a name="EN-US_TOPIC_0000001127310747"></a>

## Function<a name="section5708152714306"></a>

This method returns a new cursor object.

## Prototype<a name="section441681310810"></a>

```
cursor(name=None, cursor_factory=None, scrollable=None, withhold=False)
```

## Parameter<a name="en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  connection.cursor parameters

<a name="en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="b135541526205417"><a name="b135541526205417"></a><a name="b135541526205417"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="b1286015278545"><a name="b1286015278545"></a><a name="b1286015278545"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p23111054217"><a name="p23111054217"></a><a name="p23111054217"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1393801515211"><a name="p1393801515211"></a><a name="p1393801515211"></a>Cursor name. The default value is <strong id="b1025153465414"><a name="b1025153465414"></a><a name="b1025153465414"></a>None</strong>.</p>
</td>
</tr>
<tr id="row9119201612171"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p41191016141710"><a name="p41191016141710"></a><a name="p41191016141710"></a>cursor_factory</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1011981671716"><a name="p1011981671716"></a><a name="p1011981671716"></a>Creates a non-standard cursor. The default value is <strong id="b175821614115314"><a name="b175821614115314"></a><a name="b175821614115314"></a>None</strong>.</p>
</td>
</tr>
<tr id="row10206172741720"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1720682713174"><a name="p1720682713174"></a><a name="p1720682713174"></a>scrollable</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p17206227121719"><a name="p17206227121719"></a><a name="p17206227121719"></a>Sets the SCROLL option. The default value is <strong id="b15780142215312"><a name="b15780142215312"></a><a name="b15780142215312"></a>None</strong>.</p>
</td>
</tr>
<tr id="row9558132361711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15558152311177"><a name="p15558152311177"></a><a name="p15558152311177"></a>withhold</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p055862318177"><a name="p055862318177"></a><a name="p055862318177"></a>Sets the HOLD option. The default value is <strong id="b63827296538"><a name="b63827296538"></a><a name="b63827296538"></a>False</strong>.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="section899452817814"></a>

Cursor object \(used for cusors that are programmed using Python in the entire database\)

## Examples<a name="section4160944682"></a>

For details, see  [Example: Common Operations](example-common-operations-psycopg.md).

