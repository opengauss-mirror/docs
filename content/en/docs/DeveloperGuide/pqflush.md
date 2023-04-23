# PQflush<a name="EN-US_TOPIC_0242380586"></a>

## Function<a name="en-us_topic_0241735631_section1516183316287"></a>

PQflush is used to try to flush any queued output data to the server.

## Prototype<a name="en-us_topic_0241735631_section14331620433"></a>

```
int PQflush(PGconn *conn);
```

## Parameter<a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQflush parameter

<a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735631_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735631_p23111054217"><a name="en-us_topic_0241735631_p23111054217"></a><a name="en-us_topic_0241735631_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735631_p1393801515211"><a name="en-us_topic_0241735631_p1393801515211"></a><a name="en-us_topic_0241735631_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735631_section66534382317"></a>

**int**  indicates the execution result. If the operation is successful \(or the send queue is empty\),  **0**  is returned. If the operation fails,  **-1**  is returned. If all data in the send queue fails to be sent,  **1**  is returned. \(This case occurs only when the connection is non-blocking.\) The failure cause is stored in  **conn-\>error\_message**.

## Precautions<a name="en-us_topic_0241735631_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

Call PQflush after sending any command or data over a non-blocking connection. If  **1**  is returned, wait for the socket to become read- or write-ready. If the socket becomes write-ready, call PQflush again. If the socket becomes read-ready, call PQconsumeInput and then call PQflush again. Repeat the operation until the value  **0**  is returned for PQflush. \(It is necessary to check for read-ready and drain the input using PQconsumeInput. This is because the server can block trying to send us data, for example, notification messages, and will not read our data until we read it.\) Once PQflush returns  **0**, wait for the socket to be read-ready and then read the response as described above.

## Example<a name="en-us_topic_0241735631_section1214255317311"></a>

For details, see  [Example](example-3.md).

