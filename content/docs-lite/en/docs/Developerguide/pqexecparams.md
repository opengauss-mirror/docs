# PQexecParams<a name="EN-US_TOPIC_0289900199"></a>

## Function<a name="en-us_topic_0283137633_en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQexecParams is used to run a command to bind one or more parameters.

## Prototype<a name="en-us_topic_0283137633_en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGresult* PQexecParams(PGconn* conn, 
                       const char* command,
                       int nParams,
                       const Oid* paramTypes,
                       const char* const* paramValues,
                       const int* paramLengths,
                       const int* paramFormats, 
                       int resultFormat);
```

## Parameter<a name="en-us_topic_0283137633_en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1**  PQexecParams parameters

<a name="en-us_topic_0283137633_en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0283137633_en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137633_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0283137633_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0283137633_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="b46136602315"><a name="b46136602315"></a><a name="b46136602315"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137633_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0283137633_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0283137633_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="b345784230"><a name="b345784230"></a><a name="b345784230"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137633_en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p1118265455918"><a name="en-us_topic_0283137633_p1118265455918"></a><a name="en-us_topic_0283137633_p1118265455918"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p1443611019420"><a name="en-us_topic_0283137633_p1443611019420"></a><a name="en-us_topic_0283137633_p1443611019420"></a>Connection handle.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row176011820351"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p16506153819167"><a name="en-us_topic_0283137633_p16506153819167"></a><a name="en-us_topic_0283137633_p16506153819167"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p1950523811611"><a name="en-us_topic_0283137633_p1950523811611"></a><a name="en-us_topic_0283137633_p1950523811611"></a>SQL text string.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row584522582711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p10845142519271"><a name="en-us_topic_0283137633_p10845142519271"></a><a name="en-us_topic_0283137633_p10845142519271"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p1984592532712"><a name="en-us_topic_0283137633_p1984592532712"></a><a name="en-us_topic_0283137633_p1984592532712"></a>Number of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row1240824533515"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p13504738181613"><a name="en-us_topic_0283137633_p13504738181613"></a><a name="en-us_topic_0283137633_p13504738181613"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p3503238191611"><a name="en-us_topic_0283137633_p3503238191611"></a><a name="en-us_topic_0283137633_p3503238191611"></a>Types of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row914768706"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p15021138121619"><a name="en-us_topic_0283137633_p15021138121619"></a><a name="en-us_topic_0283137633_p15021138121619"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p13501123811165"><a name="en-us_topic_0283137633_p13501123811165"></a><a name="en-us_topic_0283137633_p13501123811165"></a>Values of parameters to be bound.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row15911611308"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p6500133816168"><a name="en-us_topic_0283137633_p6500133816168"></a><a name="en-us_topic_0283137633_p6500133816168"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p208701046141313"><a name="en-us_topic_0283137633_p208701046141313"></a><a name="en-us_topic_0283137633_p208701046141313"></a>Parameter lengths.</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row18102104010"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p0498938111616"><a name="en-us_topic_0283137633_p0498938111616"></a><a name="en-us_topic_0283137633_p0498938111616"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p1084774610132"><a name="en-us_topic_0283137633_p1084774610132"></a><a name="en-us_topic_0283137633_p1084774610132"></a>Parameter formats (text or binary).</p>
</td>
</tr>
<tr id="en-us_topic_0283137633_row17454514015"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137633_p94963384168"><a name="en-us_topic_0283137633_p94963384168"></a><a name="en-us_topic_0283137633_p94963384168"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137633_p154741386161"><a name="en-us_topic_0283137633_p154741386161"></a><a name="en-us_topic_0283137633_p154741386161"></a>Result format (text or binary).</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283137633_en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGresult pointers

