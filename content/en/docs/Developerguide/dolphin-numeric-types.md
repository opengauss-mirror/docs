# Numeric Types<a name="EN-US_TOPIC_0289900280"></a>

For details about arithmetic operators and related built-in functions, see [Arithmetic Functions and Operators](dolphin-arithmetic-functions-and-operators.md).

Compared with the original openGauss, Dolphin modifies the arithmetic types as follows:

1. The INT, TINYINT, SMALLINT, and BIGINT support the optional modifier (n), that is, the usage of TINYINT(n), SMALLINT(n), and BIGINT(n) is supported. **n** is meaningless and does not affect any performance.
2. The MEDIUMINT(n) data type is added, which is the alias of INT4. **n** is meaningless and does not affect any performance. The storage space is 4 bytes, and the data ranges from -2,147,483,648 to +2,147,483,647.
3. The FIXED[(p[,s])] data type is added, which is the alias of the NUMERIC type. The precision is specified by users. Two bytes are occupied for every four decimals of precision. An extra eight-byte overhead is added for numbers of this type. Up to 131,072 digits before the decimal point and up to 16,383 digits after the decimal point when no precision is specified
4. The float4(p[,s]) mode is added, which is equivalent to dec(p[,s]).
5. The double data type is added, which is the alias of float8.
6. The new float4 and float support the modifier (n). That is, float4(n) and float(n) are supported. When the value range of **n** is [1,24], float4(n) and float(n) indicate a single-precision floating point number. If the value range of **n** is [25,53], float4(n) and float(n) indicate a double-precision floating point number.
7. For the decimal, dec, fixed, and numeric data types, if the precision is not specified, the default precision is (10,0). That is, the total number of digits is 10 and the number of decimal places is 0.
8. The UNSIGNED INT, TINYINT, SMALLINT, and BIGINT types are added. Compared with a common integer, the most significant bit of the UNSIGNED INT, TINYINT, SMALLINT, BIGINT type is a digit bit instead of a sign bit.
9. The zerofill attribute is added, which is supported only in syntax and does not have the effect of filling zeros. It is equivalent to UNSIGNED.
10. The cast function parameters SIGNED and UNSIGNED are added. CAST AS UNSIGNED converts the type to uint8, and CAST AS SIGNED converts the type to int8.

**Table 1** Integer types

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_table40398258"></a>
<table><thead align="left"><tr id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_row60544059"><th class="cellrowborder" valign="top" width="17.17171717171717%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p5121737"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p5121737"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p5121737"></a>Name </p>
</th>
<th class="cellrowborder" valign="top" width="27.27272727272727%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p12207556"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p12207556"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p12207556"></a>Description </p>
</th>
<th class="cellrowborder" valign="top" width="12.121212121212121%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p49287955"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p49287955"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p49287955"></a>Storage Space </p>
</th>
<th class="cellrowborder" valign="top" width="43.43434343434344%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p32901407"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p32901407"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p32901407"></a>Value Range </p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r3050263e19334c3e88817869fc64acf3"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a>TINYINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a>Tiny integer, also called INT1. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a>1 byte</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a>0 ~ 255</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row47768271"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a>SMALLINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a>Small integer, also called INT2. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a>2 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a>-32,768 ~ +32,767</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>INTEGER(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a>Typical choice for integers, also called INT4. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a>4 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>-2,147,483,648 ~ +2,147,483,647</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>MEDIUMINT(n)</p>
</td>
Alias of the <td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a>Alias of INT4. **n** is meaningless and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a>4 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>-2,147,483,648 ~ +2,147,483,647</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row14545806"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a>BIGINT(n)</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"></a>Big integer, also called INT8. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"></a>8 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a>-9,223,372,036,854,775,808 ~ +9,223,372,036,854,775,807</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r3050263e19334c3e88817869fc64acf3"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a>TINYINT(n) UNSIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a>Tiny integer, also called INT1. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a>1 byte</p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a9384b26adfc6434eb2a4b7769468f151"></a>0 ~ 255</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row47768271"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p44024715"></a>SMALLINT(n) UNSIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a>Unsigned small integer, also called UINT2. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a>2 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p40196508"></a>0 ~ +65,535</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>INTEGER(n) UNSIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a>Unsigned integer, also called UINT4. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a>4 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>0 ~ +4,294,967,295</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row26224259"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p43790198"></a>MEDIUMINT(n) UNSIGNED</p>
</td>
Alias of the <td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57345187"></a>Alias of UINT4. **n** is meaningless and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p14448560"></a>4 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p29482693"></a>0 ~ +4,294,967,295</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_row14545806"><td class="cellrowborder" valign="top" width="17.17171717171717%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p56293934"></a>BIGINT(n) UNSIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p56810569"></a>Unsigned large integer, also called UINT8. **n** has no actual meaning and does not affect any performance.</p>
</td>
<td class="cellrowborder" valign="top" width="12.121212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p57196534"></a>8 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="43.43434343434344%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p58014509"></a>0 ~ +18,446,744,073,709,551,615</p>
</td>
</tr>
</tbody>
</table>

Example:

```
--Create a table that contains data of the TINYINT(n), SMALLINT(n), MEDIUMINT(n), and BIGINT(n) types.
openGauss=# CREATE TABLE int_type_t1
           (
            IT_COL1 TINYINT(10),
            IT_COL2 SMALLINT(20),
            IT_COL3 MEDIUMINT(30),
            IT_COL4 BIGINT(40),
            IT_COL5 INTEGER(50)
           );

--View the table structure.
openGauss=# \d int_type_t1
   Table "public.int_type_t1"
 Column  |   Type   | Modifiers
---------+----------+-----------
 it_col1 | tinyint  |
 it_col2 | smallint |
 it_col3 | integer  |
 it_col4 | bigint   |
 it_col5 | integer  |

--Create a table with the zerofill attribute column.
openGauss=# CREATE TABLE int_type_t2
           (
            IT_COL1 TINYINT(10) zerofill,
            IT_COL2 SMALLINT(20) unsigned zerofill,
            IT_COL3 MEDIUMINT(30) unsigned,
            IT_COL4 BIGINT(40) zerofill,
            IT_COL5 INTEGER(50) zerofill
           );

--View the table structure.
openGauss=# \d int_type_t2
   Table "public.int_type_t2"
 Column  | Type  | Modifiers
---------+-------+-----------
 it_col1 | uint1 |
 it_col2 | uint2 |
 it_col3 | uint4 |
 it_col4 | uint8 |
 it_col5 | uint4 |

--Delete a table.
openGauss=# DROP TABLE int_type_t1, int_type_t2;

--Use CAST UNSIGNED to convert an expression to the uint8 type.
openGauss=# select cast(1 - 2 as unsigned);
        uint8
----------------------
 18446744073709551615
(1 row)

--Use CAST SIGNED to convert an expression to the int8 type.
openGauss=# select cast(1 - 2 as signed);
 int8
------
   -1
(1 row)

```

**Table 2** Arbitrary precision types

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_tc26cbc6c318e4269a7166d2ae36fc896"></a>
<table><thead align="left"><tr id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_r39373e350f934297b4e15eab6190e1f5"><th class="cellrowborder" valign="top" width="16.3%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p568411316312"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p568411316312"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p568411316312"></a>Name </p>
</th>
<th class="cellrowborder" valign="top" width="24.81%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a71ec8c8ff4144ea1bed209ca5043afc5"></a>Description </p>
</th>
<th class="cellrowborder" valign="top" width="27.779999999999998%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aad953147426d4212a58c1a1c5c2c68b0"></a>Storage Space </p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a400c9adf43c84427a66ae865d9767ee7"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_rc65c033b21144e32a1ebad0f4e95df37"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a86036f62ed7848ad94bb7ee6e932d720"></a>NUMERIC[(p[,s])],</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a>DECIMAL[(p[,s])]</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_addfde5ae7edc4fc08359bfe6c3e69f27"></a>FIXED[(p[,s])]</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a2af14772d6264764b27a601ab7010c15"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a2af14772d6264764b27a601ab7010c15"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a2af14772d6264764b27a601ab7010c15"></a>The value range of p (precision) is [1,1000], and the value range of s (scale) is [0,p]. </p>
<div class="note" id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note3170455165843"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note3170455165843"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note3170455165843"></a><span class="notetitle"> Note: </span><div class="notebody"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p28534097165843"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p28534097165843"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p28534097165843"></a>p indicates the total digits, and s indicates the decimal digits.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a156454b1247d422b972fa6459bdea04a"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a156454b1247d422b972fa6459bdea04a"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a156454b1247d422b972fa6459bdea04a"></a>The precision is specified by users. Two bytes are occupied for every four decimals of precision. An extra eight-byte overhead is added for numbers of this type.</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae13572ca5e9343d9b40a57e1ee3ceacd"></a>If the precision is not specified, the value is equivalent to (10,0), that is, a maximum of 10 digits before the decimal point and 0 digits after the decimal point.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r1a20a578a55c4f89ba282a4452f1634c"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a36ac973c8a184a63a0a73265ecf2d966"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a36ac973c8a184a63a0a73265ecf2d966"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a36ac973c8a184a63a0a73265ecf2d966"></a>NUMBER[(p[,s])]</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p240989311333"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p240989311333"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p240989311333"></a>Alias of the NUMERIC class.</p>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6be08511dd3c4c0a80bdbb4ec58b0c9e"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6be08511dd3c4c0a80bdbb4ec58b0c9e"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6be08511dd3c4c0a80bdbb4ec58b0c9e"></a>The precision is specified by users. Two bytes are occupied for every four decimals of precision. An extra eight-byte overhead is added for numbers of this type.</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae51f38c437fd456090357f9fb4933dd0"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae51f38c437fd456090357f9fb4933dd0"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ae51f38c437fd456090357f9fb4933dd0"></a>Up to 131,072 digits before the decimal point and up to 16,383 digits after the decimal point when no precision is specified.</p>
</td>
</tr>
</tbody>
</table>

Example:

```
--Create a table with FIXED(p,s), FIXED, decimal, and number data.
openGauss=# CREATE TABLE dec_type_t1
           (
            DEC_COL1 FIXED,
            DEC_COL2 FIXED(20,5),
            DEC_COL3 DECIMAL,
            DEC_COL4 NUMBER
           );

--View the table structure.
openGauss=# \d dec_type_t1
      Table "public.dec_type_t1"
  Column  |     Type      | Modifiers
----------+---------------+-----------
 dec_col1 | numeric(10,0) |
 dec_col2 | numeric(20,5) |
 dec_col3 | numeric(10,0) |
 dec_col4 | numeric       |

--Delete a table.
openGauss=# DROP TABLE dec_type_t1;
```

**Table 3** Floating-point types

<a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_t1fd10408876349458b0909ecdc12747d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_r97c3d65c71a545a6874c86983a38e7ab"><th class="cellrowborder" valign="top" width="16.3%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a1e6c7cf624494f8d90caa1ad7ef8e051"></a>Name </p>
</th>
<th class="cellrowborder" valign="top" width="24.81%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a0617b728009d445a9cc8fa4c9b8faef3"></a>Description </p>
</th>
<th class="cellrowborder" valign="top" width="27.779999999999998%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ada329cdbbaa24e08ac995ad72233be3c"></a>Storage Space </p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_adc744e33c1d8437ba84997bb287b28f8"></a>Value Range </p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r4df97f4960ab416c97e76346bc3007b6"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a2a7203897d124440842a471a07b92249"></a>FLOAT[(p)],</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_zh-cn_topic_0058965945_p423919111191"></a>FLOAT4[(p)]</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a6bc5ac535cad4a529d89c06a75d2959c"></a>Floating point, which is not very precise. The value range of **p** (precision) is [1,53].</p>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_aceb612c3bc5f404aa6f4fb69029952a7"></a>4 bytes or 8 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="p9650172216299"><a name="p9650172216299"></a><a name="p9650172216299"></a> When the precision p is between [1,24], the option REAL is used as the internal identifier. When the precision p is between [25,53], the option DOUBLE PRECISION is used as the internal identifier. If no precision is specified, REAL is used as the internal identifier.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_red8d02a623ff4540ae4d683249162a19"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a3ae1c86c750e4bce8d50ddbbfea00155"></a>DOUBLE PRECISION,</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a>FLOAT8,</p>
<p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_aeaed8f23f3ef4184b2fcdcd0a00763f9"></a>DOUBLE</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a21d7011c84364ea881888afe50b80890"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a21d7011c84364ea881888afe50b80890"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a21d7011c84364ea881888afe50b80890"></a>Double-precision floating point, which is not very precise.</p>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p606467416346"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p606467416346"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_en-us_topic_0058965945_p606467416346"></a>8 bytes </p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_ad83249b27fc64ee1ae95766e2ff8c319"></a>–1.79E+308 to 1.79E+308, 15-bit decimal digits.</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_r7f401d3ca614436eb3f87864972f8b9d"><td class="cellrowborder" valign="top" width="16.3%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a8e82cca8b2524af996f4b500da67af80"></a>FLOAT4(p,s)</p>
</td>
<td class="cellrowborder" valign="top" width="24.81%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a33c2cb7dccbf4ac8b4eb0b37e95e7eb9"></a>The value range of p (precision) is [1,1000], and the value range of s (scale) is [0,p]. </p>
<div class="note" id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note5927466117522"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note5927466117522"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_note5927466117522"></a><span class="notetitle"> Note: </span><div class="notebody"><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p6370990817522"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p6370990817522"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_p6370990817522"></a>p indicates the total digits, and s indicates the decimal digits. It is equivalent to dec(p,s).</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.779999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"></a><a name="en-us_topic_0283136992_en-us_topic_0237121927_en-us_topic_0059778296_a49f41506384d410bbe1c2462dd2903ca"></a>The precision is specified by users. Two bytes are occupied for every four decimals of precision. An extra eight-byte overhead is added for numbers of this type.</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"></a><a name="zh-cn_topic_0283136992_zh-cn_topic_0237121927_zh-cn_topic_0059778296_a5745ec811f4447a786a21fce4b9fab6a"></a></p>
</td>
</tr>
</tbody>
</table>

Example:

```
--Create a table that contains data of the float4(p,s), double, float4(n), and float(n) types.
openGauss=# CREATE TABLE float_type_t1
           (
            F_COL1 FLOAT4(10,4),
            F_COL2 DOUBLE,
            F_COL3 float4(10),
            F_COL4 float4(30),
            F_COL5 float(10),
            F_COL6 float(30)
           );

--View the table structure.
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

--Delete a table.
openGauss=# DROP TABLE float_type_t1;
```
