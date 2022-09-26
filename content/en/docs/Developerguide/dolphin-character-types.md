# Character Types<a name="EN-US_TOPIC_0289900587"></a>

Compared with the original openGauss, Dolphin modifies the character types as follows:

1. The meaning of **n** of the CHARACTER/NCHAR type is modified. **n** indicates the character length instead of the byte length.
2. During comparison of all character data types, spaces at the end are ignored, for example, in the WHERE and JOIN scenarios. For example, **'a'::text = 'a'::text** is true. For the VARCHAR, VARCHAR2, NVARCHAR2, NVARCHAR, TEXT, and CLOB types, HASH JOIN and HASH AGG ignore spaces at the end only when **string\_hash\_compatible** is set to **on**.
3. The optional modifier (n) is added for TEXT. That is, the usage of TEXT(n) is supported. **n** is meaningless and does not affect any performance.
4. The TINYTEXT(n)/MEDIUMTEXT(n)/LONGTEXT(n) data type is added, which is the alias of TEXT. **n** is meaningless and does not affect any performance.

**Table 1** Character types

<a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_table29186418"></a>
<table><thead align="left"><tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row3929052"><th class="cellrowborder" valign="top" width="26%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"></a>Name </p>
</th>
<th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"></a>Description </p>
</th>
<th class="cellrowborder" valign="top" width="21%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"></a>Storage Space </p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_row47407823"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"></a>CHAR(n)</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>CHARACTER(n)</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a>NCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"></a>Character string with fixed length. Empty characters are filled in with blank spaces. **n** indicates the string length. If it is not specified, the default precision **1** is used.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_row61434756"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"></a>TEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>TINYTEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>MEDIUMTEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>LONGTEXT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"></a>Character string with variable length. **n** has no actual meaning and does not affect any performance. </p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_p179753542501"><a name="en-us_topic_0283136755_p179753542501"></a><a name="en-us_topic_0283136755_p179753542501"></a>The maximum size is 1 GB - 1 byte. However, the size of the column description header and the size of the tuple (less than 1 GB - 1 byte) where the column is located must also be considered. Therefore, the maximum size of the TEXT type may be less than 1 GB - 1 byte.</p>
</td>
</tr>

</tbody>
</table>

Example:
```
--Create a table.
openGauss=# CREATE TABLE char_type_t1 
(
    CT_COL1 CHARACTER(4),
    CT_COL2 TEXT(10),
    CT_COL3 TINYTEXT(11),
    CT_COL4 MEDIUMTEXT(12),
    CT_COL5 LONGTEXT(13)
);

--View a table structure.
openGauss=# \d char_type_t1 
    Table "public.char_type_t1"
 Column  |     Type     | Modifiers
---------+--------------+-----------
 ct_col1 | character(4) |
 ct_col2 | text         |
 ct_col3 | text         |
 ct_col4 | text         |
 ct_col5 | text         |

--Insert data.
openGauss=# INSERT INTO char_type_t1 VALUES ('Four characters');
openGauss=# INSERT INTO char_type_t1 VALUES('e   ');

--View data.
openGauss=# SELECT CT_COL1,length(CT_COL1) FROM char_type_t1;
 ct_col1  | length
----------+--------
 Four characters | 4
 e        |      1
(2 rows)

--Filter data.
openGauss=# SELECT CT_COL1 FROM char_type_t1 WHERE CT_COL1 = 'e';
 ct_col1
---------
 e
(1 row)

openGauss=# SELECT CT_COL1 FROM char_type_t1 WHERE CT_COL1 = 'e ';
 ct_col1
---------
 e
(1 row)

--Delete the table.
openGauss=# DROP TABLE char_type_t1;
```
