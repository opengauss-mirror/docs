# PQexecPreparedBatch<a name="EN-US_TOPIC_0242380697"></a>

## Function<a name="en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQexecPreparedBatch is used to send a request to execute a prepared statement with batches of given parameters and wait for the result.

## Prototype<a name="en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGresult* PQexecPreparedBatch(PGconn* conn, 
                              const char* stmtName, 
                              int nParams,
                              int nBatchCount,
                              const char* const* paramValues,
                              const int* paramLengths,
                              const int* paramFormats,
                              int resultFormat);
```

## Parameter<a name="en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1** 

<a name="en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="b14752715195511"><a name="b14752715195511"></a><a name="b14752715195511"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="b76461711554"><a name="b76461711554"></a><a name="b76461711554"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1118265455918"><a name="p1118265455918"></a><a name="p1118265455918"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1443611019420"><a name="p1443611019420"></a><a name="p1443611019420"></a>Connection handle.</p>
</td>
</tr>
<tr id="row176011820351"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p818113544596"><a name="p818113544596"></a><a name="p818113544596"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p16413301421"><a name="p16413301421"></a><a name="p16413301421"></a><em id="i14527112115517"><a name="i14527112115517"></a><a name="i14527112115517"></a>stmt</em> name, which can be set to "" or NULL to reference an unnamed statement. Otherwise, it must be the name of an existing prepared statement.</p>
</td>
</tr>
<tr id="row1240824533515"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p0159205455917"><a name="p0159205455917"></a><a name="p0159205455917"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p740804583514"><a name="p740804583514"></a><a name="p740804583514"></a>Parameter quantity.</p>
</td>
</tr>
<tr id="row2024611313811"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p12479136813"><a name="p12479136813"></a><a name="p12479136813"></a>nBatchCount</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p32475134810"><a name="p32475134810"></a><a name="p32475134810"></a>Number of batches.</p>
</td>
</tr>
<tr id="row914768706"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1814712811018"><a name="p1814712811018"></a><a name="p1814712811018"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1714713813010"><a name="p1714713813010"></a><a name="p1714713813010"></a>Actual values of parameters.</p>
</td>
</tr>
<tr id="row15911611308"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p39117111903"><a name="p39117111903"></a><a name="p39117111903"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p29111911505"><a name="p29111911505"></a><a name="p29111911505"></a>Actual data lengths of parameters.</p>
</td>
</tr>
<tr id="row18102104010"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1410510708"><a name="p1410510708"></a><a name="p1410510708"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p12112107012"><a name="p12112107012"></a><a name="p12112107012"></a>Parameter formats (text or binary).</p>
</td>
</tr>
<tr id="row17454514015"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p12745135901"><a name="p12745135901"></a><a name="p12745135901"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p16746185907"><a name="p16746185907"></a><a name="p16746185907"></a>Return result format (text or binary).</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGresult pointers

