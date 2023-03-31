# PQfinish<a name="EN-US_TOPIC_0242380573"></a>

## Function<a name="en-us_topic_0241735616_section1251161713252"></a>

PQfinish is used to close the connection to the server and release the memory used by the PGconn object.

## Prototype<a name="en-us_topic_0241735616_section125794723015"></a>

```
void PQfinish(PGconn *conn);
```

## Parameter<a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQfinish parameter

<a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735616_b7156190194719"><a name="en-us_topic_0241735616_b7156190194719"></a><a name="en-us_topic_0241735616_b7156190194719"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735616_b1530713119473"><a name="en-us_topic_0241735616_b1530713119473"></a><a name="en-us_topic_0241735616_b1530713119473"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735616_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735616_p23111054217"><a name="en-us_topic_0241735616_p23111054217"></a><a name="en-us_topic_0241735616_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735616_p1393801515211"><a name="en-us_topic_0241735616_p1393801515211"></a><a name="en-us_topic_0241735616_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
</tbody>
</table>

## Precautions<a name="en-us_topic_0241735616_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

If the server connection attempt fails \(as indicated by PQstatus\), the application should call PQfinish to release the memory used by the PGconn object. The PGconn pointer must not be used again after PQfinish has been called.

## Example<a name="en-us_topic_0241735616_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-3.md).

