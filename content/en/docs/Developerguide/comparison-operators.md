# Comparison Operators<a name="EN-US_TOPIC_0289900789"></a>

Comparison operators are available for the most data types and return Boolean values.

All comparison operators are binary operators. Only data types that are the same or can be implicitly converted can be compared using comparison operators.

[Table 1](#en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_table65067702)  describes comparison operators provided by openGauss.

**Table  1**  Comparison operators

<a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_table65067702"></a>
<table><thead align="left"><tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row57729408"><th class="cellrowborder" valign="top" width="35.870000000000005%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"></a>Operator</p>
</th>
<th class="cellrowborder" valign="top" width="64.13%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row17981635"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"></a>&lt;</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"></a>Less than</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row1157773"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"></a>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"></a>Greater than</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row48528279"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"></a>&lt;=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"></a>Less than or equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row65018208"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"></a>&gt;=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"></a>Greater than or equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row29208940"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"></a>=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"></a>Equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row60935816"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"></a>&lt;&gt;, !=, or ^=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"></a>Not equal to</p>
</td>
</tr>
</tbody>
</table>

Comparison operators are available for all relevant data types. All comparison operators are binary operators that returned values of Boolean type. The calculation priority of the inequality sign is higher than that of the equality sign. If the entered data is different and cannot be implicitly converted, the comparison fails. For example, an expression such as 1<2<3 is invalid because the less-than sign \(<\) cannot be used to compare Boolean values and 3.

