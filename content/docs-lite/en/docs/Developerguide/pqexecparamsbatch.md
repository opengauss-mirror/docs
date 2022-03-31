# PQexecParamsBatch<a name="EN-US_TOPIC_0289899936"></a>

## Function<a name="en-us_topic_0283137435_en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQexecParamsBatch is used to run a command to bind batches of parameters.

## Prototype<a name="en-us_topic_0283137435_en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGresult* PQexecParamsBatch(PGconn* conn, 
                            const char* command,
                            int nParams,
                            int nBatch, 
                            const Oid* paramTypes,
                            const char* const* paramValues,
                            const int* paramLengths,
                            const int* paramFormats,
                            int resultFormat);
```

## Parameter<a name="en-us_topic_0283137435_en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1**  PQexecParamsBatch parameters

<a name="en-us_topic_0283137435_en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0283137435_en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137435_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0283137435_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0283137435_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="b15255226152715"><a name="b15255226152715"></a><a name="b15255226152715"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137435_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0283137435_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0283137435_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="b12401827142710"><a name="b12401827142710"></a><a name="b12401827142710"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137435_en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p1118265455918"><a name="en-us_topic_0283137435_p1118265455918"></a><a name="en-us_topic_0283137435_p1118265455918"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p1443611019420"><a name="en-us_topic_0283137435_p1443611019420"></a><a name="en-us_topic_0283137435_p1443611019420"></a>Connection handle.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row176011820351"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p818113544596"><a name="en-us_topic_0283137435_p818113544596"></a><a name="en-us_topic_0283137435_p818113544596"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p137485324135"><a name="en-us_topic_0283137435_p137485324135"></a><a name="en-us_topic_0283137435_p137485324135"></a>SQL text string.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row278915265284"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p13789102612813"><a name="en-us_topic_0283137435_p13789102612813"></a><a name="en-us_topic_0283137435_p13789102612813"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p13789182611288"><a name="en-us_topic_0283137435_p13789182611288"></a><a name="en-us_topic_0283137435_p13789182611288"></a>Number of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row1240824533515"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p4876164661315"><a name="en-us_topic_0283137435_p4876164661315"></a><a name="en-us_topic_0283137435_p4876164661315"></a>nBatch</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p1875146111317"><a name="en-us_topic_0283137435_p1875146111317"></a><a name="en-us_topic_0283137435_p1875146111317"></a>Number of batch operations.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row914768706"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p108741946131318"><a name="en-us_topic_0283137435_p108741946131318"></a><a name="en-us_topic_0283137435_p108741946131318"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p48731746161317"><a name="en-us_topic_0283137435_p48731746161317"></a><a name="en-us_topic_0283137435_p48731746161317"></a>Types of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row15911611308"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p3872164620137"><a name="en-us_topic_0283137435_p3872164620137"></a><a name="en-us_topic_0283137435_p3872164620137"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p987114610132"><a name="en-us_topic_0283137435_p987114610132"></a><a name="en-us_topic_0283137435_p987114610132"></a>Values of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row18102104010"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p1387024614132"><a name="en-us_topic_0283137435_p1387024614132"></a><a name="en-us_topic_0283137435_p1387024614132"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p208701046141313"><a name="en-us_topic_0283137435_p208701046141313"></a><a name="en-us_topic_0283137435_p208701046141313"></a>Parameter lengths.</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row17454514015"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p13869174616131"><a name="en-us_topic_0283137435_p13869174616131"></a><a name="en-us_topic_0283137435_p13869174616131"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p1084774610132"><a name="en-us_topic_0283137435_p1084774610132"></a><a name="en-us_topic_0283137435_p1084774610132"></a>Parameter formats (text or binary).</p>
</td>
</tr>
<tr id="en-us_topic_0283137435_row20944123121415"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137435_p494463121415"><a name="en-us_topic_0283137435_p494463121415"></a><a name="en-us_topic_0283137435_p494463121415"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137435_p4945163141411"><a name="en-us_topic_0283137435_p4945163141411"></a><a name="en-us_topic_0283137435_p4945163141411"></a>Result format (text or binary).</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283137435_en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGresult pointers

