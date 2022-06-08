# PQsendQueryPrepared<a name="EN-US_TOPIC_0289900762"></a>

## Function<a name="en-us_topic_0283137362_en-us_topic_0241735630_section1390173422515"></a>

PQsendQueryPrepared is used to send a request to execute a prepared statement with given parameters, without waiting for the result.

## Prototype<a name="en-us_topic_0283137362_en-us_topic_0241735630_section1368952105717"></a>

```
int PQsendQueryPrepared(PGconn *conn,
                        const char *stmtName,
                        int nParams,
                        const char * const *paramValues,
                        const int *paramLengths,
                        const int *paramFormats,
                        int resultFormat);
```

## Parameters<a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQsendQueryPrepared parameters

<a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0283137362_b1463412498414"><a name="en-us_topic_0283137362_b1463412498414"></a><a name="en-us_topic_0283137362_b1463412498414"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0283137362_b8670134918411"><a name="en-us_topic_0283137362_b8670134918411"></a><a name="en-us_topic_0283137362_b8670134918411"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p23111054217"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p23111054217"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p1393801515211"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1393801515211"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row3316185018428"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p931755034217"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p931755034217"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p931755034217"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p1431715054219"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1431715054219"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1431715054219"></a>Name of <strong id="en-us_topic_0283137362_b8311945165718"><a name="en-us_topic_0283137362_b8311945165718"></a><a name="en-us_topic_0283137362_b8311945165718"></a>stmt</strong> to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row4482953194215"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p19483053144212"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p19483053144212"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p19483053144212"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p174838537427"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p174838537427"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p174838537427"></a>Parameter quantity.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row831145720425"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p183111857174215"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p183111857174215"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p183111857174215"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p73121557154217"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p73121557154217"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p73121557154217"></a>Parameter value.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row16597160194319"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p17598603438"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p17598603438"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p17598603438"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p759811024316"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p759811024316"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p759811024316"></a>Parameter length.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row867391714318"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p16731817194314"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p16731817194314"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p16731817194314"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p6673417124318"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p6673417124318"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p6673417124318"></a>Parameter format.</p>
</td>
</tr>
<tr id="en-us_topic_0283137362_en-us_topic_0241735630_row12806112084311"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p138061020164318"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p138061020164318"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p138061020164318"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137362_en-us_topic_0241735630_p1807162015437"><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1807162015437"></a><a name="en-us_topic_0283137362_en-us_topic_0241735630_p1807162015437"></a>Result format.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283137362_en-us_topic_0241735630_section17296198165816"></a>

**int**  indicates the execution result.  **1**  indicates successful execution and  **0**  indicates an execution failure. The failure cause is stored in  **conn-\>errorMessage**.

## Precautions<a name="en-us_topic_0283137362_en-us_topic_0241735630_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

PQsendQueryPrepared is similar to PQsendQueryParams, but the command to be executed is specified by naming a previously-prepared statement, instead of providing a query string. PQsendQueryPrepared parameters are handled in the same way as PQexecPrepared parameters. Like PQexecPrepared, PQsendQueryPrepared cannot work on connections using protocol 2.0.

## Example<a name="en-us_topic_0283137362_en-us_topic_0241735630_section19689722205811"></a>

For details, see  [Example](example.md).

