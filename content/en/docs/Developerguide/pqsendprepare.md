# PQsendPrepare<a name="EN-US_TOPIC_0242380584"></a>

## Function<a name="en-us_topic_0241735629_section11692173220256"></a>

PQsendPrepare is used to send a request to create a prepared statement with given parameters, without waiting for completion.

## Prototype<a name="en-us_topic_0241735629_section8667122125517"></a>

```
int PQsendPrepare(PGconn *conn,
                  const char *stmtName,
                  const char *query,
                  int nParams,
                  const Oid *paramTypes);
```

## Parameters<a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQsendPrepare parameters

<a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="b4619815154117"><a name="b4619815154117"></a><a name="b4619815154117"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="b5656171511418"><a name="b5656171511418"></a><a name="b5656171511418"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735629_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735629_p23111054217"><a name="en-us_topic_0241735629_p23111054217"></a><a name="en-us_topic_0241735629_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735629_p1393801515211"><a name="en-us_topic_0241735629_p1393801515211"></a><a name="en-us_topic_0241735629_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735629_row17367126192516"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735629_p43682026202518"><a name="en-us_topic_0241735629_p43682026202518"></a><a name="en-us_topic_0241735629_p43682026202518"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735629_p10403105013320"><a name="en-us_topic_0241735629_p10403105013320"></a><a name="en-us_topic_0241735629_p10403105013320"></a>Name of <strong id="b13745899264"><a name="b13745899264"></a><a name="b13745899264"></a>stmt</strong> to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0241735629_row12952114132818"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735629_p1995314182810"><a name="en-us_topic_0241735629_p1995314182810"></a><a name="en-us_topic_0241735629_p1995314182810"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735629_p1737919549321"><a name="en-us_topic_0241735629_p1737919549321"></a><a name="en-us_topic_0241735629_p1737919549321"></a>Query string to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0241735629_row771131052816"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735629_p107111082810"><a name="en-us_topic_0241735629_p107111082810"></a><a name="en-us_topic_0241735629_p107111082810"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735629_p1247413575323"><a name="en-us_topic_0241735629_p1247413575323"></a><a name="en-us_topic_0241735629_p1247413575323"></a>Parameter quantity.</p>
</td>
</tr>
<tr id="en-us_topic_0241735629_row196171413122814"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735629_p26189137281"><a name="en-us_topic_0241735629_p26189137281"></a><a name="en-us_topic_0241735629_p26189137281"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735629_p76181130289"><a name="en-us_topic_0241735629_p76181130289"></a><a name="en-us_topic_0241735629_p76181130289"></a>Array of the parameter type.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735629_section3976154365516"></a>

**int**  indicates the execution result.  **1**  indicates successful execution and  **0**  indicates an execution failure. The failure cause is stored in  **conn-\>errorMessage**.

## Precautions<a name="en-us_topic_0241735629_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

PQsendPrepare is an asynchronous version of PQprepare. If it can dispatch a request,  **1**  is returned. Otherwise,  **0**  is returned. After a successful calling of PQsendPrepare, call PQgetResult to check whether the server successfully created the prepared statement. PQsendPrepare parameters are handled in the same way as PQprepare parameters. Like PQprepare, PQsendPrepare cannot work on connections using protocol 2.0.

## Example<a name="en-us_topic_0241735629_section1123513455619"></a>

For details, see  [Example](example-3.md).

