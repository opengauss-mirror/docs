# Monetary Types<a name="EN-US_TOPIC_0289901013"></a>

The money type stores a currency amount with fixed fractional precision.

The range shown in  [Table 1](#en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_t7ceeb3b97d5d489a84770f824d7e017b)  assumes there are two fractional digits. Input is accepted in a variety of formats, including integer and floating-point literals, as well as typical currency formatting, such as "$1,000.00". Output is generally in the last format but depends on the locale.

**Table  1**  Monetary type

<a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_t7ceeb3b97d5d489a84770f824d7e017b"></a>
<table><thead align="left"><tr id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_row1223216837"><th class="cellrowborder" valign="top" width="15.040000000000001%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_aaef24d8917954d51bac11faec487ca5d"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_aaef24d8917954d51bac11faec487ca5d"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_aaef24d8917954d51bac11faec487ca5d"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.42%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a8f237792e77a49e2a71a9649bbc3058b"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a8f237792e77a49e2a71a9649bbc3058b"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a8f237792e77a49e2a71a9649bbc3058b"></a>Storage Space</p>
</th>
<th class="cellrowborder" valign="top" width="16.35%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_ac41c191caac54cf3a1eaa468c9c151f7"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_ac41c191caac54cf3a1eaa468c9c151f7"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_ac41c191caac54cf3a1eaa468c9c151f7"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="50.19%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a7a35010f77d14eb9a510d4e9774094ea"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a7a35010f77d14eb9a510d4e9774094ea"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_a7a35010f77d14eb9a510d4e9774094ea"></a>Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_row82322837"><td class="cellrowborder" valign="top" width="15.040000000000001%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p132327837"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p132327837"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p132327837"></a>money</p>
</td>
<td class="cellrowborder" valign="top" width="18.42%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1223213837"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1223213837"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1223213837"></a>8 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.35%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1623211837"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1623211837"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p1623211837"></a>Currency amount</p>
</td>
<td class="cellrowborder" valign="top" width="50.19%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p62339837"><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p62339837"></a><a name="en-us_topic_0283137734_en-us_topic_0237121928_en-us_topic_0059778615_en-us_topic_0058965764_p62339837"></a>–92233720368547758.08 to +92233720368547758.07</p>
</td>
</tr>
</tbody>
</table>

Values of the numeric, int, and bigint data types can be cast to money. Conversion from the real and double precision data types can be done by casting to numeric first, for example:

```
openGauss=#  SELECT '12.34'::float8::numeric::money;
```

However, this is not recommended. Floating point numbers should not be used to handle money due to the potential for rounding errors.

A money value can be cast to numeric without loss of precision. Conversion to other types could potentially lose precision, and must also be done in two stages:

```
openGauss=#  SELECT '52093.89'::money::numeric::float8;
```

When a money value is divided by another money value, the result is of the double precision type \(that is, a pure number, not money\); the currency units cancel each other out in the division.

