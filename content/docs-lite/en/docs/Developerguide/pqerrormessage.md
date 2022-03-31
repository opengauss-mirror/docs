# PQerrorMessage<a name="EN-US_TOPIC_0289900569"></a>

## Function<a name="en-us_topic_0283136781_en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQerrorMessage is used to return error information on a connection.

## Prototype<a name="en-us_topic_0283136781_en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
char* PQerrorMessage(const PGconn* conn);
```

## Parameter<a name="en-us_topic_0283136781_en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1** 

<a name="en-us_topic_0283136781_en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0283136781_en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136781_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0283136781_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0283136781_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="en-us_topic_0283136781_b13626953131215"><a name="en-us_topic_0283136781_b13626953131215"></a><a name="en-us_topic_0283136781_b13626953131215"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136781_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0283136781_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0283136781_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="en-us_topic_0283136781_b1396316593125"><a name="en-us_topic_0283136781_b1396316593125"></a><a name="en-us_topic_0283136781_b1396316593125"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136781_en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136781_p153311368316"><a name="en-us_topic_0283136781_p153311368316"></a><a name="en-us_topic_0283136781_p153311368316"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136781_p1443611019420"><a name="en-us_topic_0283136781_p1443611019420"></a><a name="en-us_topic_0283136781_p1443611019420"></a>Connection handle.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283136781_en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

char pointers

## Example<a name="en-us_topic_0283136781_en-us_topic_0059778058_sb7bc1f5b242e441583cf7237bb33199b"></a>

For details, see  [Example](example.md).

