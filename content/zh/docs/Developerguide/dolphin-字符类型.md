# 字符类型<a name="ZH-CN_TOPIC_0289900587"></a>

相比于原始的openGauss，dolphin对于字符类型的修改主要为：

1. 修改```CHARACTER/NCHAR```类型n的含义，n是指字符长度而不是字节长度。
2. 所有的字符数据类型在对比时，均忽略尾部空格，如where条件过滤场景、join场景等。例如 'a'::text = 'a  '::text 为真。需要特别注意的是，对于VARCHAR、VARCHAR2、NVARCHAR2、NVARCHAR、TEXT、CLOB类型，只有GUC参数 string_hash_compatible 为on的情况下，hash join以及hash agg才会忽略尾部空格。
3. 新增```TEXT```支持可选的修饰符(n)，即支持```TEXT(n)```的用法，n无实际意义，不影响任何表现。
4. 新增```TINYTEXT(n)/MEDIUMTEXT(n)/LONGTEXT(n)```数据类型，是```TEXT```的别名，n无实际作用，不影响任何表现。

**表 1**  字符类型

<a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_table29186418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_row3929052"><th class="cellrowborder" valign="top" width="26%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p49817820"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p49817820"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p49817820"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p8711637"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p8711637"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p8711637"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="21%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p34553966"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p34553966"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p34553966"></a>存储空间</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_row47407823"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p14828449"></a>CHAR(n)</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>CHARACTER(n)</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a>NCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p60253707"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p60253707"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p60253707"></a>定长字符串，不足补空格。n是指字符长度，如不带精度n，默认精度为1。</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p48712118"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p48712118"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p48712118"></a>最大为10MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_row61434756"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p51104240"></a>TEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>TINYTEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>MEDIUMTEXT(n),</p>
<p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>LONGTEXT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p32527216"><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p32527216"></a><a name="zh-cn_topic_0283136755_zh-cn_topic_0237121950_zh-cn_topic_0059777889_zh-cn_topic_0058966269_p32527216"></a>变长字符串。n无实际含义，不影响任何表现</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136755_p179753542501"><a name="zh-cn_topic_0283136755_p179753542501"></a><a name="zh-cn_topic_0283136755_p179753542501"></a>最大为1GB-1，但还需要考虑到列描述头信息的大小， 以及列所在元组的大小限制（也小于1GB-1），因此TEXT类型最大大小可能小于1GB-1。</p>
</td>
</tr>

</tbody>
</table>

示例：
```
--创建表。
openGauss=# CREATE TABLE char_type_t1 
(
    CT_COL1 CHARACTER(4),
    CT_COL2 TEXT(10),
    CT_COL3 TINYTEXT(11),
    CT_COL4 MEDIUMTEXT(12),
    CT_COL5 LONGTEXT(13)
);

--查看表结构
openGauss=# \d char_type_t1 
    Table "public.char_type_t1"
 Column  |     Type     | Modifiers
---------+--------------+-----------
 ct_col1 | character(4) |
 ct_col2 | text         |
 ct_col3 | text         |
 ct_col4 | text         |
 ct_col5 | text         |

--插入数据
openGauss=# INSERT INTO char_type_t1 VALUES('四个字符');
openGauss=# INSERT INTO char_type_t1 VALUES('e   ');

--查看数据
openGauss=# SELECT CT_COL1,length(CT_COL1) FROM char_type_t1;
 ct_col1  | length
----------+--------
 四个字符 |      4
 e        |      1
(2 rows)

--过滤数据
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

--删除表
openGauss=# DROP TABLE char_type_t1;
```