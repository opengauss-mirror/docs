# PQgetvalue<a name="EN-US_TOPIC_0242380699"></a>

## Function<a name="en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

PQgetvalue is used to return a single field value of one row of a PGresult. Row and column numbers start from 0. The caller should not release the result directly. The result will be released when the associated PGresult handle is passed to PQclear.

## Prototype<a name="en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
char *PQgetvalue(const PGresult *res,
                 int row_number,
                 int column_number);
```

## Parameter<a name="en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1** 

<a name="en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="b450816833313"><a name="b450816833313"></a><a name="b450816833313"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="b578111914333"><a name="b578111914333"></a><a name="b578111914333"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1055674764215"><a name="p1055674764215"></a><a name="p1055674764215"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p13897154573014"><a name="p13897154573014"></a><a name="p13897154573014"></a>Operation result handle.</p>
</td>
</tr>
<tr id="row132562545428"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p172561354194217"><a name="p172561354194217"></a><a name="p172561354194217"></a>row_number</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p112561954114212"><a name="p112561954114212"></a><a name="p112561954114212"></a>Number of rows.</p>
</td>
</tr>
<tr id="row21181859174214"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15118359134213"><a name="p15118359134213"></a><a name="p15118359134213"></a>column_number</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1118859134210"><a name="p1118859134210"></a><a name="p1118859134210"></a>Number of columns.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

For data in text format, the value returned by PQgetvalue is a null-terminated string representation of the field value.

For binary data, the value is a binary representation determined by the typsend and typreceive functions of the data type.

If this field is left blank, an empty string is returned.

## Example<a name="en-us_topic_0059778058_sb7bc1f5b242e441583cf7237bb33199b"></a>

For details, see  [Example](example-3.md).

