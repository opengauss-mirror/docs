# Geometric<a name="EN-US_TOPIC_0289900156"></a>

[Table 1](#en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_td12ab9adf8514c2cbd4b5b6aace3ab7e)  lists the geometric types that can be used in openGauss. The most fundamental type, the point, forms the basis for all of the other types.

**Table  1**  Geometric types

<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_td12ab9adf8514c2cbd4b5b6aace3ab7e"></a>
<table><thead align="left"><tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r056719618a434daab0231ae1405fdc9d"><th class="cellrowborder" valign="top" width="12.408759124087592%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a61eccb09ae3b4086944edb63c8d2b9de"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a61eccb09ae3b4086944edb63c8d2b9de"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a61eccb09ae3b4086944edb63c8d2b9de"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.858214178582145%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d5ec132240f4a0da1e63a36a6d3b07c"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d5ec132240f4a0da1e63a36a6d3b07c"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d5ec132240f4a0da1e63a36a6d3b07c"></a>Storage Space</p>
</th>
<th class="cellrowborder" valign="top" width="38.15618438156184%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a74f2e9fff6224039b5a331f3abd54c82"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a74f2e9fff6224039b5a331f3abd54c82"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a74f2e9fff6224039b5a331f3abd54c82"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="31.576842315768427%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af0b379659f244a9ba02320bdfef9ed94"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af0b379659f244a9ba02320bdfef9ed94"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af0b379659f244a9ba02320bdfef9ed94"></a>Representation</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r7075ce6a8f0f4022a3e039f36ab78c0f"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a34c307672fc34e0492d2db7ba857d4d8"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a34c307672fc34e0492d2db7ba857d4d8"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a34c307672fc34e0492d2db7ba857d4d8"></a>point</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a48e8cf8fae324dc89eda7c3c2ac1e465"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a48e8cf8fae324dc89eda7c3c2ac1e465"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a48e8cf8fae324dc89eda7c3c2ac1e465"></a>16 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a10f33233da8f49d196811d9bac63fbdf"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a10f33233da8f49d196811d9bac63fbdf"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a10f33233da8f49d196811d9bac63fbdf"></a>Point on a plane</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae7d7a39ea7a9497ab3c19873410ac61c"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae7d7a39ea7a9497ab3c19873410ac61c"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae7d7a39ea7a9497ab3c19873410ac61c"></a>(x,y)</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r5629589c2e214eabb09ef06036799316"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p52867012825"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p52867012825"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p52867012825"></a>lseg</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad1b570e58c594304aa16547108e27348"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad1b570e58c594304aa16547108e27348"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad1b570e58c594304aa16547108e27348"></a>32 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d11f16b6bed40b08a2041776abdd56e"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d11f16b6bed40b08a2041776abdd56e"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0d11f16b6bed40b08a2041776abdd56e"></a>Finite line segment</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a3f09354bd2bd40428b8be21f6f85459b"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a3f09354bd2bd40428b8be21f6f85459b"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a3f09354bd2bd40428b8be21f6f85459b"></a>((x1,y1),(x2,y2))</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r9647c19dc57e49a28ad4a5a4155ef16f"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad782c171c1d6488bb710a9fca368b748"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad782c171c1d6488bb710a9fca368b748"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ad782c171c1d6488bb710a9fca368b748"></a>box</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_abdd021f6ae43412792d21af1fcee3983"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_abdd021f6ae43412792d21af1fcee3983"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_abdd021f6ae43412792d21af1fcee3983"></a>32 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a962263c4404a417f9a432ecf9232533d"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a962263c4404a417f9a432ecf9232533d"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a962263c4404a417f9a432ecf9232533d"></a>Rectangle</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af15b6bd2980748009c87b9d3b1291d93"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af15b6bd2980748009c87b9d3b1291d93"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_af15b6bd2980748009c87b9d3b1291d93"></a>((x1,y1),(x2,y2))</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_rf15fa7b568e64500bfc79662333fb1a4"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa26cd096ae4640a094a262db6616946e"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa26cd096ae4640a094a262db6616946e"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa26cd096ae4640a094a262db6616946e"></a>path</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a00371de1dc9a455c93ffe548839aec4e"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a00371de1dc9a455c93ffe548839aec4e"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a00371de1dc9a455c93ffe548839aec4e"></a>16+16n bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a5aaea237093b46d0b9f7536442fbd64a"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a5aaea237093b46d0b9f7536442fbd64a"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a5aaea237093b46d0b9f7536442fbd64a"></a>Closed path (similar to polygon)</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_afb3667f61f2c4c7fa28cdefaa8864308"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_afb3667f61f2c4c7fa28cdefaa8864308"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_afb3667f61f2c4c7fa28cdefaa8864308"></a>((x1,y1),...)</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r50cf2fb0f0ca48168caff91550ff86e3"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac3af3a1875664ef1bb4ab5cd0135eb95"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac3af3a1875664ef1bb4ab5cd0135eb95"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac3af3a1875664ef1bb4ab5cd0135eb95"></a>path</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aacc8d264b7c24e5f93ec96fde63eb041"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aacc8d264b7c24e5f93ec96fde63eb041"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aacc8d264b7c24e5f93ec96fde63eb041"></a>16+16n bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a505d25ca83024e168bba1b17a71dc1e7"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a505d25ca83024e168bba1b17a71dc1e7"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a505d25ca83024e168bba1b17a71dc1e7"></a>Open path</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac17558cd35594f67bbb4b55b0faf2ff7"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac17558cd35594f67bbb4b55b0faf2ff7"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ac17558cd35594f67bbb4b55b0faf2ff7"></a>[(x1,y1),...]</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_r28fb07e8fbd6453a86215d0ae03e9e36"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa3c66c0f195a4b8dab2b8e8ef135cbb1"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa3c66c0f195a4b8dab2b8e8ef135cbb1"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_aa3c66c0f195a4b8dab2b8e8ef135cbb1"></a>polygon</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p557120812825"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p557120812825"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p557120812825"></a>40+16n bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a92766d79c23b44029968c60596f40166"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a92766d79c23b44029968c60596f40166"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a92766d79c23b44029968c60596f40166"></a>Polygon (similar to closed path)</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae5ff916dc33f42afae2fd24783cb06c2"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae5ff916dc33f42afae2fd24783cb06c2"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae5ff916dc33f42afae2fd24783cb06c2"></a>((x1,y1),...)</p>
</td>
</tr>
<tr id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_rb0df03b419e447e299607a0ac121674d"><td class="cellrowborder" valign="top" width="12.408759124087592%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p122783312825"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p122783312825"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_en-us_topic_0058966287_p122783312825"></a>circle</p>
</td>
<td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0c44bdb826fb4bb89c87f5691552f3e5"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0c44bdb826fb4bb89c87f5691552f3e5"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a0c44bdb826fb4bb89c87f5691552f3e5"></a>24 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="38.15618438156184%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a664ae79dc17442148ed24447fc409a4e"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a664ae79dc17442148ed24447fc409a4e"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_a664ae79dc17442148ed24447fc409a4e"></a>Circle</p>
</td>
<td class="cellrowborder" valign="top" width="31.576842315768427%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae97e5678003c481492eb7e4945ec047c"><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae97e5678003c481492eb7e4945ec047c"></a><a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_ae97e5678003c481492eb7e4945ec047c"></a>&lt;(x,y),r&gt; (center point and radius)</p>
</td>
</tr>
</tbody>
</table>

A rich set of functions and operators is available in openGauss to perform various geometric operations, such as scaling, translation, rotation, and determining intersections. For details, see  [Geometric Functions and Operators](geometric-functions-and-operators.md).

## Points<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_s9ae9a12a122d4391a7c1551baa656056"></a>

Points are the fundamental two-dimensional building block for geometric types. Values of the  **point**  type are specified using either of the following syntax:

```
( x , y )
x , y
```

where x and y are the respective coordinates, as floating-point numbers.

Points are output using the first syntax.

## Line Segments<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_s3be08f7ef9ef44b98602b8ae796c7896"></a>

Line segments \(**lseg**\) are represented by pairs of points. Values of the  **lseg**  type are specified using any of the following syntax:

```
[ ( x1 , y1 ) , ( x2 , y2 ) ]
( ( x1 , y1 ) , ( x2 , y2 ) )
( x1 , y1 ) , ( x2 , y2 )
x1 , y1   ,   x2 , y2
```

where \(x1,y1\) and \(x2,y2\) are the end points of the line segment.

Line segments are output using the first syntax.

## Boxes<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_s5a08b01de8cc44028c67fca656c50658"></a>

Boxes are represented by pairs of points that are opposite corners of the box. Values of the  **box**  type are specified using any of the following syntax:

```
( ( x1 , y1 ) , ( x2 , y2 ) )
( x1 , y1 ) , ( x2 , y2 )
x1 , y1   ,   x2 , y2
```

where \(x1,y1\) and \(x2,y2\) are any two opposite corners of the box.

Boxes are output using the second syntax.

Any two opposite corners can be supplied on input, but in this order, the values will be reordered as needed to store the upper right and lower left corners.

## Paths<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_sd4845791bda344eeb958bfc99f9ef6ca"></a>

Paths are represented by lists of connected points. Paths can be open, where the first and last points in the list are considered not connected, or closed, where the first and last points are considered connected.

Values of the  **path**  type are specified using any of the following syntax:

```
[ ( x1 , y1 ) , ... , ( xn , yn ) ]
( ( x1 , y1 ) , ... , ( xn , yn ) )
( x1 , y1 ) , ... , ( xn , yn )
( x1 , y1   , ... ,   xn , yn )
x1 , y1   , ... ,   xn , yn
```

where the points are the end points of the line segments comprising the path. Square brackets \(\[\]\) indicate an open path, while parentheses \(\(\)\) indicate a closed path. When the outermost parentheses are omitted, as in the third through fifth syntax, a closed path is assumed.

Paths are output using the first or second syntax.

## Polygons<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_sc4e268a07a784869ad29572d4a85c0bd"></a>

Polygons are represented by lists of points \(the vertexes of the polygon\). Polygons are very similar to closed paths, but are stored differently and have their own set of support functions.

Values of the  **polygon**  type are specified using any of the following syntax:

```
( ( x1 , y1 ) , ... , ( xn , yn ) )
( x1 , y1 ) , ... , ( xn , yn )
( x1 , y1   , ... ,   xn , yn )
x1 , y1   , ... ,   xn , yn
```

where the points are the end points of the line segments comprising the boundary of the polygon.

Polygons are output using the first syntax.

## Circles<a name="en-us_topic_0283137602_en-us_topic_0237121953_en-us_topic_0059779139_s1956890f64144daa99a4c13709e1ded6"></a>

Circles are represented by a center point and radius. Values of the  **circle**  type are specified using any of the following syntax:

```
< ( x , y ) , r >
( ( x , y ) , r )
( x , y ) , r
x , y   , r
```

where  **\(x,y\)**  is the center point and  **r**  is the radius of the circle.

Circles are output using the first syntax.

