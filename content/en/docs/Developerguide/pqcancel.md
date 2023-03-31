# PQcancel<a name="EN-US_TOPIC_0242380590"></a>

## Function<a name="en-us_topic_0241735638_section744771516345"></a>

PQcancel is used to request the server to abandon processing of the current command.

## Prototype<a name="en-us_topic_0241735638_section18974913134"></a>

```
int PQcancel(PGcancel *cancel, char *errbuf, int errbufsize);
```

## Parameter<a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQcancel parameters

<a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735638_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735638_p23111054217"><a name="en-us_topic_0241735638_p23111054217"></a><a name="en-us_topic_0241735638_p23111054217"></a>cancel</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735638_p1393801515211"><a name="en-us_topic_0241735638_p1393801515211"></a><a name="en-us_topic_0241735638_p1393801515211"></a>Points to the object pointer that contains the cancel information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735638_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735638_p43682026202518"><a name="en-us_topic_0241735638_p43682026202518"></a><a name="en-us_topic_0241735638_p43682026202518"></a>errbuf</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735638_p10403105013320"><a name="en-us_topic_0241735638_p10403105013320"></a><a name="en-us_topic_0241735638_p10403105013320"></a>Buffer for storing error information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735638_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735638_p1995314182810"><a name="en-us_topic_0241735638_p1995314182810"></a><a name="en-us_topic_0241735638_p1995314182810"></a>errbufsize</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735638_p1737919549321"><a name="en-us_topic_0241735638_p1737919549321"></a><a name="en-us_topic_0241735638_p1737919549321"></a>Size of the buffer for storing error information.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735638_section1512067101414"></a>

**int**  indicates the execution result.  **1**  indicates successful execution and  **0**  indicates an execution failure. The failure cause is stored in  **errbuf**.

## Precautions<a name="en-us_topic_0241735638_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   Successful sending does not guarantee that the request will have any effect. If the cancellation is valid, the current command is terminated early and an error is returned. If the cancellation fails \(for example, because the server has processed the command\), no result is returned.
-   If  **errbuf**  is a local variable in a signal handler, you can safely call PQcancel from the signal handler. For PQcancel, the PGcancel object is read-only, so it can also be called from a thread that is separate from the thread that is operating the PGconn object.

## Example<a name="en-us_topic_0241735638_section724101713148"></a>

For details, see  [Example](example-3.md).

