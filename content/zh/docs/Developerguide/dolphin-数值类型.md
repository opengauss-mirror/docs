# 数值类型<a name="ZH-CN_TOPIC_0289900280"></a>

数字操作符和相关的内置函数请参见[数字操作函数和操作符](dolphin-数字操作函数和操作符.md)。

相比于原始的openGauss，dolphin对于数值类型的修改主要为:
1. 新增```INT/TINYINT/SMALLINT/BIGINT```支持可选的修饰符(n)，即支持```TINYINT(n)/SMALLINT(n)/BIGINT(n)```的用法，n无实际意义，不影响任何表现。
2. 新增```MEDIUMINT(n)```数据类型，是INT4的别名，n无实际作用，不影响任何表现。存储空间为4字节，数据范围为```-2,147,483,648 ~ +2,147,483,647```。
3. 新增```FIXED[(p[,s])]```数据类型，是NUMERIC类型的别名。用户声明精度。每四位（十进制位）占用两个字节，然后在整个数据上加上八个字节的额外开销。未指定精度的情况下，小数点前最大131,072位，小数点后最大16,383位。
4. 新增```float4(p[,s])```的方式，等价于```dec(p[,s])```。
5. 新增```double```数据类型，是float8的别名。
6. 新增```float4/float```支持可选的修饰符(n)，即支持```float4(n)/float(n)```的用法，当n在 [1,24]之间时，```float4(n)/float(n)```代表单精度浮点数；当n在 [25,53]之间时，```float4(n)/float(n)```代表双精度浮点数。
7. 对于```decimal```数据类型，在未指定精度的情况下，默认精度为```(10,0)```，即总位数为10，小数位数为0。
8. 新增zerofill属性修饰，只是语法上的支持，实际并没有填充零的效果。与UNSIGNED的作用等价。

**表 1**  整数类型

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_table40398258"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row60544059"><th class="cellrowborder" valign="top" width="17.17171717171717%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p5121737"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p5121737"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p5121737"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="27.27272727272727%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p12207556"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p12207556"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p12207556"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="12.121212121212121%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p49287955"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p49287955"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p49287955"></a>存储空间</p>
</th>
<th class="cellrowborder" valign="top" width="43.43434343434344%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p32901407"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p32901407"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p32901407"></a>范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r3050263e19334c3e88817869fc64acf3"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a>TINYINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a>微整数，别名为INT1。n无实际作用，不影响任何表现。</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a>1字节</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a>0 ~ 255</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row47768271"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a>SMALLINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9232188"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9232188"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9232188"></a>小范围整数，别名为INT2。n无实际作用，不影响任何表现。</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9609802"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9609802"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p9609802"></a>2字节</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a>-32,768 ~ +32,767</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>INTEGER(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"></a>常用的整数，别名为INT4。n无实际作用，不影响任何表现。</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"></a>4字节</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>-2,147,483,648 ~ +2,147,483,647</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>MEDIUMINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57345187"></a>INT4的别名，n无实际作用，不影响任何表现。</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p14448560"></a>4字节</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>-2,147,483,648 ~ +2,147,483,647</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row14545806"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a>BIGINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56810569"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56810569"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56810569"></a>大范围的整数，别名为INT8。n无实际作用，不影响任何表现。</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57196534"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57196534"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p57196534"></a>8字节</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a>-9,223,372,036,854,775,808 ~ +9,223,372,036,854,775,807</p>
</td>
</tr>
</tbody>
</table>

示例：

```
--创建具有TINYINT(n), SMALLINT(n), MEDIUMINT(n), BIGINT(n)类型数据的表。
openGauss=# CREATE TABLE int_type_t1
           (
            IT_COL1 TINYINT(10),
            IT_COL2 SMALLINT(20),
            IT_COL3 MEDIUMINT(30),
            IT_COL4 BIGINT(40),
            IT_COL5 INTEGER(50)
           );

--查看表结构。
openGauss=# \d int_type_t1
   Table "public.int_type_t1"
 Column  |   Type   | Modifiers
---------+----------+-----------
 it_col1 | tinyint  |
 it_col2 | smallint |
 it_col3 | integer  |
 it_col4 | bigint   |
 it_col5 | integer  |

--创建带zerofill属性字段的表。
openGauss=# CREATE TABLE int_type_t2
           (
            IT_COL1 TINYINT(10) zerofill,
            IT_COL2 SMALLINT(20) unsigned zerofill,
            IT_COL3 MEDIUMINT(30) unsigned,
            IT_COL4 BIGINT(40) zerofill,
            IT_COL5 INTEGER(50) zerofill
           );

--查看表结构。
openGauss=# \d int_type_t2
   Table "public.int_type_t2"
 Column  | Type  | Modifiers
---------+-------+-----------
 it_col1 | uint1 |
 it_col2 | uint2 |
 it_col3 | uint4 |
 it_col4 | uint8 |
 it_col5 | uint4 |

--删除表。
openGauss=# DROP TABLE int_type_t1, int_type_t2;
```

**表 2**  任意精度型

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_tc26cbc6c318e4269a7166d2ae36fc896"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r39373e350f934297b4e15eab6190e1f5"><th class="cellrowborder" valign="top" width="16.3%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p568411316312"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p568411316312"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p568411316312"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="24.81%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="27.779999999999998%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"></a>存储空间</p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"></a>范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_rc65c033b21144e32a1ebad0f4e95df37"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"></a>NUMERIC[(p[,s])],</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a>DECIMAL[(p[,s])]</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a>FIXED[(p[,s])]</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2af14772d6264764b27a601ab7010c15"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2af14772d6264764b27a601ab7010c15"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2af14772d6264764b27a601ab7010c15"></a>精度p取值范围为[1,1000]，标度s取值范围为[0,p]。</p>
<div class="note" id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note3170455165843"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note3170455165843"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note3170455165843"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p28534097165843"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p28534097165843"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p28534097165843"></a>p为总位数，s为小数位数。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a156454b1247d422b972fa6459bdea04a"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a156454b1247d422b972fa6459bdea04a"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a156454b1247d422b972fa6459bdea04a"></a>用户声明精度。每四位（十进制位）占用两个字节，然后在整个数据上加上八个字节的额外开销。</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"></a>未指定精度的情况下，等价于(10,0)，即小数点前最大10位，小数点后0位。</p>
</td>
</tr>
</tbody>
</table>

示例：

```
--创建具有FIXED(p,s), FIXED, decimal类型数据的表。
openGauss=# CREATE TABLE dec_type_t1
           (
            DEC_COL1 FIXED,
            DEC_COL2 FIXED(20,5),
            DEC_COL3 DECIMAL
           );

--查看表结构。
openGauss=# \d dec_type_t1
      Table "public.dec_type_t1"
  Column  |     Type      | Modifiers
----------+---------------+-----------
 dec_col1 | numeric(10,0) |
 dec_col2 | numeric(20,5) |
 dec_col3 | numeric(10,0) |

--删除表。
openGauss=# DROP TABLE dec_type_t1;
```

**表 3**  浮点类型

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_t1fd10408876349458b0909ecdc12747d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r97c3d65c71a545a6874c86983a38e7ab"><th class="cellrowborder" valign="top" width="16.3%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="24.81%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="27.779999999999998%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"></a>存储空间</p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"></a>范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r4df97f4960ab416c97e76346bc3007b6"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"></a>FLOAT[(p)],</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"></a>FLOAT4[(p)]</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"></a>浮点数，不精准。精度p取值范围为[1,53]。</p>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"></a>4字节或8字节</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="p9650172216299"><a name="p9650172216299"></a><a name="p9650172216299"></a>当精度p在 [1,24]之间时，选项REAL作为内部表示，当精度p在 [25,53]之间时，选项DOUBLE PRECISION作为内部表示。如不指定精度，内部用REAL表示。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_red8d02a623ff4540ae4d683249162a19"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"></a>DOUBLE PRECISION,</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a>FLOAT8,</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a>DOUBLE</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a21d7011c84364ea881888afe50b80890"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a21d7011c84364ea881888afe50b80890"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a21d7011c84364ea881888afe50b80890"></a>双精度浮点数，不精准。</p>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p606467416346"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p606467416346"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p606467416346"></a>8字节</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"></a>-1.79E+308~1.79E+308，15位十进制数字精度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r7f401d3ca614436eb3f87864972f8b9d"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"></a>FLOAT4(p,s)</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"></a>精度p取值范围为[1,1000]，标度s取值范围为[0,p]。</p>
<div class="note" id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note5927466117522"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note5927466117522"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_note5927466117522"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p6370990817522"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p6370990817522"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_p6370990817522"></a>p为总位数，s为小数位位数。等价于dec(p,s)</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"></a>用户声明精度。每四位（十进制位）占用两个字节，然后在整个数据上加上八个字节的额外开销。</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"></a></p>
</td>
</tr>
</tbody>
</table>

示例：

```
--创建具有float4(p,s), double, float4(n), float(n)类型数据的表。
openGauss=# CREATE TABLE float_type_t1
           (
            F_COL1 FLOAT4(10,4),
            F_COL2 DOUBLE,
            F_COL3 float4(10),
            F_COL4 float4(30),
            F_COL5 float(10),
            F_COL6 float(30)
           );

--查看表结构。
openGauss=# \d float_type_t1
     Table "public.float_type_t1"
 Column |       Type       | Modifiers
--------+------------------+-----------
 f_col1 | numeric(10,4)    |
 f_col2 | double precision |
 f_col3 | real             |
 f_col4 | double precision |
 f_col5 | real             |
 f_col6 | double precision |

--删除表。
openGauss=# DROP TABLE float_type_t1;
```
