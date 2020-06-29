# PQreset<a name="EN-US_TOPIC_0242380574"></a>

## Function<a name="en-us_topic_0241735617_section396721820257"></a>

PQreset is used to reset the communication port to the server.

## Prototype<a name="en-us_topic_0241735617_section13831650155"></a>

```
void PQreset(PGconn *conn);
```

## Parameter<a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQreset parameter

<a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735617_b1053411147710"><a name="en-us_topic_0241735617_b1053411147710"></a><a name="en-us_topic_0241735617_b1053411147710"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735617_b79621515172"><a name="en-us_topic_0241735617_b79621515172"></a><a name="en-us_topic_0241735617_b79621515172"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735617_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735617_p23111054217"><a name="en-us_topic_0241735617_p23111054217"></a><a name="en-us_topic_0241735617_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735617_p1393801515211"><a name="en-us_topic_0241735617_p1393801515211"></a><a name="en-us_topic_0241735617_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
</tbody>
</table>

## Precautions<a name="en-us_topic_0241735617_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

This function will close the connection to the server and attempt to establish a new connection to the same server by using all the parameters previously used. This function is applicable to fault recovery after a connection exception occurs.

## Example<a name="en-us_topic_0241735617_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-3.md).

