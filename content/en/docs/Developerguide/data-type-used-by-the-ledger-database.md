# Data Type Used by the Ledger Database<a name="EN-US_TOPIC_0000001147012469"></a>

The ledger database uses the hash16 data type to store row-level hash digests or table-level hash digests, and uses the hash32 data type to store global hash digests or history table verification hashes.

**Table  1**  Hash type of the ledger database

<a name="en-us_topic_0059778296_en-us_topic_0058965945_table40398258"></a>
<table><thead align="left"><tr id="en-us_topic_0059778296_en-us_topic_0058965945_row60544059"><th class="cellrowborder" valign="top" width="11.8011801180118%" id="mcps1.2.5.1.1"><p id="en-us_topic_0059778296_en-us_topic_0058965945_p5121737"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p5121737"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p5121737"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="30.863086308630862%" id="mcps1.2.5.1.2"><p id="en-us_topic_0059778296_en-us_topic_0058965945_p12207556"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p12207556"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p12207556"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="10.181018101810182%" id="mcps1.2.5.1.3"><p id="en-us_topic_0059778296_en-us_topic_0058965945_p49287955"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p49287955"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p49287955"></a>Storage Space</p>
</th>
<th class="cellrowborder" valign="top" width="47.154715471547156%" id="mcps1.2.5.1.4"><p id="en-us_topic_0059778296_en-us_topic_0058965945_p32901407"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p32901407"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p32901407"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778296_r3050263e19334c3e88817869fc64acf3"><td class="cellrowborder" valign="top" width="11.8011801180118%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"><a name="en-us_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a><a name="en-us_topic_0059778296_ae7b8e76ad5b243cd9fd5522f5ed9f7a4"></a>HASH16</p>
</td>
<td class="cellrowborder" valign="top" width="30.863086308630862%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"><a name="en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a><a name="en-us_topic_0059778296_a55039338bad74e2bac3a5abfeca8d277"></a>Stored as an unsigned 64-bit integer</p>
</td>
<td class="cellrowborder" valign="top" width="10.181018101810182%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"><a name="en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a><a name="en-us_topic_0059778296_abeccdff96ab94fb3bddd0781d38e4ac7"></a>8 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="47.154715471547156%" headers="mcps1.2.5.1.4 "><p id="p288133964118"><a name="p288133964118"></a><a name="p288133964118"></a>0 to +18446744073709551615</p>
</td>
</tr>
<tr id="en-us_topic_0059778296_en-us_topic_0058965945_row47768271"><td class="cellrowborder" valign="top" width="11.8011801180118%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778296_en-us_topic_0058965945_p44024715"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p44024715"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p44024715"></a>HASH32</p>
</td>
<td class="cellrowborder" valign="top" width="30.863086308630862%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778296_en-us_topic_0058965945_p9232188"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p9232188"></a>Stored as a group of 16 unsigned integer elements</p>
</td>
<td class="cellrowborder" valign="top" width="10.181018101810182%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778296_en-us_topic_0058965945_p9609802"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p9609802"></a>16 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="47.154715471547156%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0059778296_en-us_topic_0058965945_p40196508"><a name="en-us_topic_0059778296_en-us_topic_0058965945_p40196508"></a><a name="en-us_topic_0059778296_en-us_topic_0058965945_p40196508"></a>Value range of an unsigned integer array of 16 elements</p>
</td>
</tr>
</tbody>
</table>

The hash16 data type is used to store row-level or table-level hash digests in the ledger database. After obtaining the hash sequence of a 16-character hexadecimal string, the system invokes the  **hash16in**  function to convert the sequence into an unsigned 64-bit integer and stores the integer in a hash16 variable. For example:

```
Hexadecimal string: e697da2eaa3a775b; 64-bit unsigned integer: 16615989244166043483
Hexadecimal string: ffffffffffffffff; 64-bit unsigned integer: 18446744073709551615
```

The hash32 data type is used to store the global hash digest or history table verification hash in the ledger database. After obtaining the hash sequence of a 32-character hexadecimal string, the system invokes the  **hash32in**  function to convert the sequence to an array containing 16 unsigned integer elements. For example:

```
Hexadecimal string: 685847ed1fe38e18f6b0e2b18c00edee
Hash32 array: [104,88,71,237,31,227,142,24,246,176,226,177,140,0,237,238]
```

