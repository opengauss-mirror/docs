# PQexec<a name="EN-US_TOPIC_0242380577"></a>

## Function<a name="en-us_topic_0241735619_section1294859104916"></a>

PQexec is used to commit a command to the server and wait for the result.

## Prototype<a name="en-us_topic_0241735619_section198401823132712"></a>

```
PGresult *PQexec(PGconn *conn, const char *command);
```

## Parameter<a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQexec parameters

<a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735619_b11519196154513"><a name="en-us_topic_0241735619_b11519196154513"></a><a name="en-us_topic_0241735619_b11519196154513"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735619_b175128194512"><a name="en-us_topic_0241735619_b175128194512"></a><a name="en-us_topic_0241735619_b175128194512"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735619_p23111054217"><a name="en-us_topic_0241735619_p23111054217"></a><a name="en-us_topic_0241735619_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735619_p1393801515211"><a name="en-us_topic_0241735619_p1393801515211"></a><a name="en-us_topic_0241735619_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735619_row12654138171218"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735619_p196562861213"><a name="en-us_topic_0241735619_p196562861213"></a><a name="en-us_topic_0241735619_p196562861213"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735619_p6656788128"><a name="en-us_topic_0241735619_p6656788128"></a><a name="en-us_topic_0241735619_p6656788128"></a>Query string to be executed.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735619_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**PGresult**  indicates the object pointer that contains the query result.

## Precautions<a name="en-us_topic_0241735619_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

The PQresultStatus function should be called to check the return value for any errors \(including the value of a null pointer, in which  **PGRES\_FATAL\_ERROR**  will be returned\). The PQerrorMessage function can be called to obtain more information about such errors.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The command string can contain multiple SQL commands separated by semicolons \(;\). Multiple queries sent in a PQexec call are processed in one transaction, unless there are specific BEGIN/COMMIT commands in the query string to divide the string into multiple transactions. Note that the returned PGresult structure describes only the result of the last command executed from the string. If a command fails, the string processing stops and the returned PGresult describes the error condition.  

## Example<a name="en-us_topic_0241735619_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-3.md).

