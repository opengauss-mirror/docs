# PQstatus<a name="EN-US_TOPIC_0242380575"></a>

## Function<a name="en-us_topic_0241735618_section12403151164211"></a>

PQstatus is used to return the connection status.

## Prototype<a name="en-us_topic_0241735618_section5810194710717"></a>

```
ConnStatusType PQstatus(const PGconn *conn);
```

## Parameter<a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQ status parameter

<a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735618_b1196101616116"><a name="en-us_topic_0241735618_b1196101616116"></a><a name="en-us_topic_0241735618_b1196101616116"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735618_b11734417111111"><a name="en-us_topic_0241735618_b11734417111111"></a><a name="en-us_topic_0241735618_b11734417111111"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735618_p23111054217"><a name="en-us_topic_0241735618_p23111054217"></a><a name="en-us_topic_0241735618_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735618_p1393801515211"><a name="en-us_topic_0241735618_p1393801515211"></a><a name="en-us_topic_0241735618_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735618_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**ConnStatusType**  indicates the connection status. The enumerated values are as follows:

```
CONNECTION_STARTED
Waiting for the connection to be established.

CONNECTION_MADE
Connection succeeded; waiting to send

CONNECTION_AWAITING_RESPONSE
Waiting for a response from the server.

CONNECTION_AUTH_OK
Authentication received; waiting for backend startup to complete.

CONNECTION_SSL_STARTUP
Negotiating SSL encryption.

CONNECTION_SETENV
Negotiating environment-driven parameter settings.

CONNECTION_OK
Normal connection.

CONNECTION_BAD
Failed connection.
```

## Precautions<a name="en-us_topic_0241735618_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

The connection status can be one of the preceding values. After the asynchronous connection procedure is complete, only two of them,  **CONNECTION\_OK**  and  **CONNECTION\_BAD**, can return.  **CONNECTION\_OK**  indicates that the connection to the database is normal.  **CONNECTION\_BAD**  indicates that the connection attempt fails. Generally, the  **CONNECTION\_OK**  state remains until PQfinish is called. However, a communication failure may cause the connection status to become to  **CONNECTION\_BAD**  before the connection procedure is complete. In this case, the application can attempt to call PQreset to restore the communication.

## Example<a name="en-us_topic_0241735618_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-libpq.md).

