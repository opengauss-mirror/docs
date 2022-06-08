# PG\_STATIO\_ALL\_INDEXES<a name="EN-US_TOPIC_0289900974"></a>

**PG\_STATIO\_ALL\_INDEXES**  contains one row for each index in the current database, showing I/O statistics about accesses to that specific index. 

**Table  1**  PG\_STATIO\_ALL\_INDEXES columns

<a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_tb1b5f27773374cff8610a981d22fc987"></a>
<table><thead align="left"><tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r4baf7fe3af7a4a76817a65490313a998"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aed22650baec54372bc57e7058c5022a9"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aed22650baec54372bc57e7058c5022a9"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aed22650baec54372bc57e7058c5022a9"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="22.650000000000002%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ada64c2b6f1ed48b7bfe91c0b30c5b50b"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ada64c2b6f1ed48b7bfe91c0b30c5b50b"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ada64c2b6f1ed48b7bfe91c0b30c5b50b"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.5%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1b4641d2bbc34c1e8e8a1cf94f06d6ab"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1b4641d2bbc34c1e8e8a1cf94f06d6ab"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1b4641d2bbc34c1e8e8a1cf94f06d6ab"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r11a7cacd1f074481a962df2c50961db0"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a66e0fb2492ca4ee88e587df693e57746"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a66e0fb2492ca4ee88e587df693e57746"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a66e0fb2492ca4ee88e587df693e57746"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae8236d91f8664711aaeb9f3d31427624"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae8236d91f8664711aaeb9f3d31427624"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae8236d91f8664711aaeb9f3d31427624"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0b252a0a7113428887455850d03c0795"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0b252a0a7113428887455850d03c0795"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0b252a0a7113428887455850d03c0795"></a>OID of the table for this index</p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r59b70bf66284463c88ca1e759a6d16f4"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_af3412b731ba849daba317844f39a994e"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_af3412b731ba849daba317844f39a994e"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_af3412b731ba849daba317844f39a994e"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae96601946e2c4aab851c7257e24f37a5"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae96601946e2c4aab851c7257e24f37a5"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae96601946e2c4aab851c7257e24f37a5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5aec60a2e5c74621bf3d44384d4e737c"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5aec60a2e5c74621bf3d44384d4e737c"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5aec60a2e5c74621bf3d44384d4e737c"></a>OID of the index </p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r13a6ff535b9542898a533f4963f8780c"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ac75c56aa5f5c4754873fa07278f5e9a9"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ac75c56aa5f5c4754873fa07278f5e9a9"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ac75c56aa5f5c4754873fa07278f5e9a9"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a7261d4a993d148df82681542a2c7d9c8"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a7261d4a993d148df82681542a2c7d9c8"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a7261d4a993d148df82681542a2c7d9c8"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a8ce3c77eab404b71b9409131f670cfbf"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a8ce3c77eab404b71b9409131f670cfbf"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a8ce3c77eab404b71b9409131f670cfbf"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r495f5b83fad64cb1b6ad87e5176591c7"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5b01e0e7f96846d78d37d260a3c937ee"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5b01e0e7f96846d78d37d260a3c937ee"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a5b01e0e7f96846d78d37d260a3c937ee"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae9f5232e226442f09f246b28006d69d7"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae9f5232e226442f09f246b28006d69d7"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_ae9f5232e226442f09f246b28006d69d7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_afb2ab8f492054451aa5af166413cd12b"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_afb2ab8f492054451aa5af166413cd12b"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_afb2ab8f492054451aa5af166413cd12b"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r4463fcec83634eaca5af4dd572d29616"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a293872866ae1439cb931c6afa3ca8616"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a293872866ae1439cb931c6afa3ca8616"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a293872866ae1439cb931c6afa3ca8616"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aede14d09081a438ea34848e73fc80512"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aede14d09081a438ea34848e73fc80512"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aede14d09081a438ea34848e73fc80512"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a58aff6c0abe3446d837abcf7965fc939"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a58aff6c0abe3446d837abcf7965fc939"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a58aff6c0abe3446d837abcf7965fc939"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r75a285a269c343cd812b1fef2af2bc67"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a17ef6bb58a304590aaa729e3a4db14c6"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a17ef6bb58a304590aaa729e3a4db14c6"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a17ef6bb58a304590aaa729e3a4db14c6"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aef1c77e8a066424a8186b28df0126a33"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aef1c77e8a066424a8186b28df0126a33"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_aef1c77e8a066424a8186b28df0126a33"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0e4c537cb27345df82a1e2ca5d6ad445"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0e4c537cb27345df82a1e2ca5d6ad445"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a0e4c537cb27345df82a1e2ca5d6ad445"></a>Number of disk blocks read from the index</p>
</td>
</tr>
<tr id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_r2ad1a2441b2d416aa4387732b098e164"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a48777b8befe743a095301b23e2113177"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a48777b8befe743a095301b23e2113177"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a48777b8befe743a095301b23e2113177"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="22.650000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1c71095b59f446a1bc1460cf1283d856"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1c71095b59f446a1bc1460cf1283d856"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a1c71095b59f446a1bc1460cf1283d856"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.5%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a86909f29ec2945208f38f2cb746789a8"><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a86909f29ec2945208f38f2cb746789a8"></a><a name="en-us_topic_0283136893_en-us_topic_0237122457_en-us_topic_0059778320_a86909f29ec2945208f38f2cb746789a8"></a>Number of cache hits in the index</p>
</td>
</tr>
</tbody>
</table>

