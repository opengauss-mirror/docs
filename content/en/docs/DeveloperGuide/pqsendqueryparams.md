# PQsendQueryParams<a name="EN-US_TOPIC_0242380583"></a>

## Function<a name="en-us_topic_0241735628_section10518135331919"></a>

PQsendQueryParams is used to commit a command and separate parameters to the server without waiting for the result.

## Prototype<a name="en-us_topic_0241735628_section16481193174814"></a>

```
int PQsendQueryParams(PGconn *conn,
                      const char *command,
                      int nParams,
                      const Oid *paramTypes,
                      const char * const *paramValues,
                      const int *paramLengths,
                      const int *paramFormats,
                      int resultFormat);
```

## Parameter<a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQsendQueryParams parameters

<a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735628_b866612512443"><a name="en-us_topic_0241735628_b866612512443"></a><a name="en-us_topic_0241735628_b866612512443"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735628_b1792667134415"><a name="en-us_topic_0241735628_b1792667134415"></a><a name="en-us_topic_0241735628_b1792667134415"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735628_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p23111054217"><a name="en-us_topic_0241735628_p23111054217"></a><a name="en-us_topic_0241735628_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p1393801515211"><a name="en-us_topic_0241735628_p1393801515211"></a><a name="en-us_topic_0241735628_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p43682026202518"><a name="en-us_topic_0241735628_p43682026202518"></a><a name="en-us_topic_0241735628_p43682026202518"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p188061636131313"><a name="en-us_topic_0241735628_p188061636131313"></a><a name="en-us_topic_0241735628_p188061636131313"></a>Query string to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p1995314182810"><a name="en-us_topic_0241735628_p1995314182810"></a><a name="en-us_topic_0241735628_p1995314182810"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p1195316412818"><a name="en-us_topic_0241735628_p1195316412818"></a><a name="en-us_topic_0241735628_p1195316412818"></a>Parameter quantity.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row771131052816"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p107111082810"><a name="en-us_topic_0241735628_p107111082810"></a><a name="en-us_topic_0241735628_p107111082810"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p107218104285"><a name="en-us_topic_0241735628_p107218104285"></a><a name="en-us_topic_0241735628_p107218104285"></a>Parameter type.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row196171413122814"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p26189137281"><a name="en-us_topic_0241735628_p26189137281"></a><a name="en-us_topic_0241735628_p26189137281"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p76181130289"><a name="en-us_topic_0241735628_p76181130289"></a><a name="en-us_topic_0241735628_p76181130289"></a>Parameter value.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row5325017152810"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p14325131712817"><a name="en-us_topic_0241735628_p14325131712817"></a><a name="en-us_topic_0241735628_p14325131712817"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p155043458298"><a name="en-us_topic_0241735628_p155043458298"></a><a name="en-us_topic_0241735628_p155043458298"></a>Parameter length.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row138182205282"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p14819120132815"><a name="en-us_topic_0241735628_p14819120132815"></a><a name="en-us_topic_0241735628_p14819120132815"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p14972175612911"><a name="en-us_topic_0241735628_p14972175612911"></a><a name="en-us_topic_0241735628_p14972175612911"></a>Parameter format.</p>
</td>
</tr>
<tr id="en-us_topic_0241735628_row1498215426281"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735628_p1598364217282"><a name="en-us_topic_0241735628_p1598364217282"></a><a name="en-us_topic_0241735628_p1598364217282"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735628_p159837427287"><a name="en-us_topic_0241735628_p159837427287"></a><a name="en-us_topic_0241735628_p159837427287"></a>Result format.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735628_section171501851145318"></a>

**int**  indicates the execution result.  **1**  indicates successful execution and  **0**  indicates an execution failure. The failure cause is stored in  **conn-\>errorMessage**.

## Precautions<a name="en-us_topic_0241735628_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

PQsendQueryParams is equivalent to PQsendQuery. The only difference is that query parameters can be specified separately from the query string. PQsendQueryParams parameters are handled in the same way as PQexecParams parameters. Like PQexecParams, PQsendQueryParams cannot work on connections using protocol 2.0 and it allows only one command in the query string.

## Example<a name="en-us_topic_0241735628_section13161655174820"></a>

For details, see  [Example](example-libpq.md).

