# PQconnectStart<a name="EN-US_TOPIC_0242380691"></a>

## Function<a name="en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQconnectStart is used to establish a non-blocking connection with the database server.

## Prototype<a name="en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGconn* PQconnectStart(const char* conninfo);
```

## Parameters<a name="en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1** 

<a name="en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="b17991173482712"><a name="b17991173482712"></a><a name="b17991173482712"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="b0115183582718"><a name="b0115183582718"></a><a name="b0115183582718"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p917285714319"><a name="p917285714319"></a><a name="p917285714319"></a>conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1443611019420"><a name="p1443611019420"></a><a name="p1443611019420"></a>String of connection information. This parameter can be left empty. In this case, the default value is used. It can contain one or more values separated by spaces or contain a URL.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGconn pointers

