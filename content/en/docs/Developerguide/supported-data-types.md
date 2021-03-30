# Supported Data Types<a name="EN-US_TOPIC_0311524274"></a>

In the current big data area, ORC and Parquet are the mainstream file formats of the HDFS-based file system. openGauss supports the ORC and Parquet file formats as well. You can import data to the HDFS file system through Hive and store data in ORC or Parquet file format. You can use the openGauss to query and analyze data in the ORC or Parquet file. This requires the data type supported by ORC or Parquet file format to match the data type supported by openGauss. The match relationship is shown as follows:

**Table  1**  Data type matching

<a name="en-us_topic_0067563150_table15273186151115"></a>
<table><thead align="left"><tr id="en-us_topic_0067563150_row142741761115"><th class="cellrowborder" valign="top" width="25.650000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0067563150_p1227496101117"><a name="en-us_topic_0067563150_p1227496101117"></a><a name="en-us_topic_0067563150_p1227496101117"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="36.85%" id="mcps1.2.4.1.2"><p id="en-us_topic_0067563150_p1827446171112"><a name="en-us_topic_0067563150_p1827446171112"></a><a name="en-us_topic_0067563150_p1827446171112"></a>Type Supported by HDFS Foreign Tables of <span id="text1391153310424"><a name="text1391153310424"></a><a name="text1391153310424"></a>openGauss</span></p>
</th>
<th class="cellrowborder" valign="top" width="37.5%" id="mcps1.2.4.1.3"><p id="en-us_topic_0067563150_p182754641117"><a name="en-us_topic_0067563150_p182754641117"></a><a name="en-us_topic_0067563150_p182754641117"></a>Hive Table Type When Data Is Imported to an HDFS Foreign Table</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0067563150_row52752671111"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p42751465114"><a name="en-us_topic_0067563150_p42751465114"></a><a name="en-us_topic_0067563150_p42751465114"></a>Integer of 2 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p1727514614113"><a name="en-us_topic_0067563150_p1727514614113"></a><a name="en-us_topic_0067563150_p1727514614113"></a>SMALLINT</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p122761569119"><a name="en-us_topic_0067563150_p122761569119"></a><a name="en-us_topic_0067563150_p122761569119"></a>SMALLINT</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row1127618617118"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p16276566113"><a name="en-us_topic_0067563150_p16276566113"></a><a name="en-us_topic_0067563150_p16276566113"></a>Integer of 4 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p1327686121115"><a name="en-us_topic_0067563150_p1327686121115"></a><a name="en-us_topic_0067563150_p1327686121115"></a>INTEGER</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p142761651113"><a name="en-us_topic_0067563150_p142761651113"></a><a name="en-us_topic_0067563150_p142761651113"></a>INT</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row1927626161115"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p10276136161112"><a name="en-us_topic_0067563150_p10276136161112"></a><a name="en-us_topic_0067563150_p10276136161112"></a>Integer of 8 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p327736121119"><a name="en-us_topic_0067563150_p327736121119"></a><a name="en-us_topic_0067563150_p327736121119"></a>BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p11277156181114"><a name="en-us_topic_0067563150_p11277156181114"></a><a name="en-us_topic_0067563150_p11277156181114"></a>BIGINT</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row1227712621110"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p2027715631112"><a name="en-us_topic_0067563150_p2027715631112"></a><a name="en-us_topic_0067563150_p2027715631112"></a>Single-precision floating point</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p5277764119"><a name="en-us_topic_0067563150_p5277764119"></a><a name="en-us_topic_0067563150_p5277764119"></a>FLOAT4 (REAL)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p15278868111"><a name="en-us_topic_0067563150_p15278868111"></a><a name="en-us_topic_0067563150_p15278868111"></a>FLOAT</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row52780611119"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p2027819641115"><a name="en-us_topic_0067563150_p2027819641115"></a><a name="en-us_topic_0067563150_p2027819641115"></a>Double-precision floating point</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p122785618115"><a name="en-us_topic_0067563150_p122785618115"></a><a name="en-us_topic_0067563150_p122785618115"></a>FLOAT8(DOUBLE PRECISION)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p122785612116"><a name="en-us_topic_0067563150_p122785612116"></a><a name="en-us_topic_0067563150_p122785612116"></a>DOUBLE</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row027886131113"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p6278136121113"><a name="en-us_topic_0067563150_p6278136121113"></a><a name="en-us_topic_0067563150_p6278136121113"></a>Scientific data</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p827917651116"><a name="en-us_topic_0067563150_p827917651116"></a><a name="en-us_topic_0067563150_p827917651116"></a>DECIMAL[p (,s)] (The maximum precision can reach up to 38.)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p1927912617115"><a name="en-us_topic_0067563150_p1927912617115"></a><a name="en-us_topic_0067563150_p1927912617115"></a>DECIMAL (The maximum precision can reach up to 38 for Hive 0.11.)</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row192791862111"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p1027912641111"><a name="en-us_topic_0067563150_p1027912641111"></a><a name="en-us_topic_0067563150_p1027912641111"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p22802681113"><a name="en-us_topic_0067563150_p22802681113"></a><a name="en-us_topic_0067563150_p22802681113"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p11280865113"><a name="en-us_topic_0067563150_p11280865113"></a><a name="en-us_topic_0067563150_p11280865113"></a>DATE</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row1328020681118"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p112801661113"><a name="en-us_topic_0067563150_p112801661113"></a><a name="en-us_topic_0067563150_p112801661113"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p32806611115"><a name="en-us_topic_0067563150_p32806611115"></a><a name="en-us_topic_0067563150_p32806611115"></a>TIMESTAMP</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p1028010611112"><a name="en-us_topic_0067563150_p1028010611112"></a><a name="en-us_topic_0067563150_p1028010611112"></a>TIMESTAMP</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row32807616112"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p42801611110"><a name="en-us_topic_0067563150_p42801611110"></a><a name="en-us_topic_0067563150_p42801611110"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p202801569112"><a name="en-us_topic_0067563150_p202801569112"></a><a name="en-us_topic_0067563150_p202801569112"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p1828015621111"><a name="en-us_topic_0067563150_p1828015621111"></a><a name="en-us_topic_0067563150_p1828015621111"></a>BOOLEAN</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row5280156141110"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p528016618118"><a name="en-us_topic_0067563150_p528016618118"></a><a name="en-us_topic_0067563150_p528016618118"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p12281169116"><a name="en-us_topic_0067563150_p12281169116"></a><a name="en-us_topic_0067563150_p12281169116"></a>CHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p1228113681114"><a name="en-us_topic_0067563150_p1228113681114"></a><a name="en-us_topic_0067563150_p1228113681114"></a>CHAR (n)</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row7281186201110"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p6281567117"><a name="en-us_topic_0067563150_p6281567117"></a><a name="en-us_topic_0067563150_p6281567117"></a>VARCHAR</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p128218621118"><a name="en-us_topic_0067563150_p128218621118"></a><a name="en-us_topic_0067563150_p128218621118"></a>VARCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p928266111115"><a name="en-us_topic_0067563150_p928266111115"></a><a name="en-us_topic_0067563150_p928266111115"></a>VARCHAR (n)</p>
</td>
</tr>
<tr id="en-us_topic_0067563150_row928211617110"><td class="cellrowborder" valign="top" width="25.650000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0067563150_p32829691111"><a name="en-us_topic_0067563150_p32829691111"></a><a name="en-us_topic_0067563150_p32829691111"></a>Character string (big text object)</p>
</td>
<td class="cellrowborder" valign="top" width="36.85%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0067563150_p1628216191120"><a name="en-us_topic_0067563150_p1628216191120"></a><a name="en-us_topic_0067563150_p1628216191120"></a>TEXT(CLOB)</p>
</td>
<td class="cellrowborder" valign="top" width="37.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0067563150_p162821615117"><a name="en-us_topic_0067563150_p162821615117"></a><a name="en-us_topic_0067563150_p162821615117"></a>STRING</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>1.  The openGauss HDFS foreign table supports the  **NULL**  definition, and the Hive data table supports and uses the corresponding  **NULL**  definition.
>2.  The date and time type of the openGauss HDFS foreign tables do not support the time zone definition. Hive does not support the time zone definition as well.
>3.  The date type in Hive contains only date. The date types in openGauss contain date and time.
>4.  In openGauss, ORC files can be compressed in ZLIB, SNAPPY, LZ4, and NONE mode.
>5.  In openGauss, Parquet files can be compressed in SNAPPY and NONE mode.
>6.  The  **FLOAT4**  format itself is not accurate, and the sum operation results in different effect in various environments. You are advised to use the  **DECIMAL**  type in the high-precision scenarios.
>7.  In Teradata-compatible mode, the HDFS foreign table does not support the  **DATE**  type.

