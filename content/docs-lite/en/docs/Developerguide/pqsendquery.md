# PQsendQuery<a name="EN-US_TOPIC_0242380582"></a>

## Function<a name="en-us_topic_0241735627_section1650116513199"></a>

PQsendQuery is used to commit a command to the server without waiting for the result. If the query is successful,  **1**  is returned. Otherwise,  **0**  is returned.

## Prototype<a name="en-us_topic_0241735627_section14334747154215"></a>

```
int PQsendQuery(PGconn *conn, const char *command);
```

## Parameter<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQsendQuery parameters

<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735627_b8130103816172"><a name="en-us_topic_0241735627_b8130103816172"></a><a name="en-us_topic_0241735627_b8130103816172"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735627_b7115193921711"><a name="en-us_topic_0241735627_b7115193921711"></a><a name="en-us_topic_0241735627_b7115193921711"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_p1393801515211"><a name="en-us_topic_0241735627_p1393801515211"></a><a name="en-us_topic_0241735627_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735627_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p43682026202518"><a name="en-us_topic_0241735627_p43682026202518"></a><a name="en-us_topic_0241735627_p43682026202518"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_p188061636131313"><a name="en-us_topic_0241735627_p188061636131313"></a><a name="en-us_topic_0241735627_p188061636131313"></a>Query string to be executed.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735627_section05397323539"></a>

**int**  indicates the execution result.  **1**  indicates successful execution and  **0**  indicates an execution failure. The failure cause is stored in  **conn-\>errorMessage**.

## Precautions<a name="en-us_topic_0241735627_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

After PQsendQuery is successfully called, call PQgetResult one or more times to obtain the results. PQsendQuery cannot be called again \(on the same connection\) until PQgetResult returns a null pointer, indicating that the command execution is complete.

## Example<a name="en-us_topic_0241735627_section97034101433"></a>

For details, see  [Example](example-libpq.md).

