# GS\_ENCRYPTED\_PROC<a name="EN-US_TOPIC_0000001151424329"></a>

**GS\_ENCRYPTED\_PROC**  provides information such as the parameters of encrypted functions and stored procedure functions, original data type of return values, and encrypted columns.

**Table  1**  GS\_ENCRYPTED\_PROC columns

<a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_t2f9db447dd184b5c866476d8e26796de"></a>
<table><thead align="left"><tr id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_r87d6b4b73a2047608fd73659991770ae"><th class="cellrowborder" valign="top" width="25.39%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a8738ce8844a94a93b8d77ebede43c9a2"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a8738ce8844a94a93b8d77ebede43c9a2"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a8738ce8844a94a93b8d77ebede43c9a2"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="15.329999999999998%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a34bb7db9f8f840fd9aba28d3e3a681ef"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a34bb7db9f8f840fd9aba28d3e3a681ef"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a34bb7db9f8f840fd9aba28d3e3a681ef"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="59.28%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ab64dfe0cc90843b49869394f60eab1fc"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ab64dfe0cc90843b49869394f60eab1fc"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ab64dfe0cc90843b49869394f60eab1fc"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row2310135071013"><td class="cellrowborder" valign="top" width="25.39%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"><a name="en-us_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a><a name="en-us_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="15.329999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"><a name="en-us_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a><a name="en-us_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.28%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"><a name="en-us_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a><a name="en-us_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a>Row identifier (hidden column)</p>
</td>
</tr>
<tr id="en-us_topic_0283136994_en-us_topic_0237122330_row66864593507"><td class="cellrowborder" valign="top" width="25.39%" headers="mcps1.2.4.1.1 "><p id="p9623101016225"><a name="p9623101016225"></a><a name="p9623101016225"></a>func_id</p>
</td>
<td class="cellrowborder" valign="top" width="15.329999999999998%" headers="mcps1.2.4.1.2 "><p id="p18954195702214"><a name="p18954195702214"></a><a name="p18954195702214"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.28%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136994_en-us_topic_0237122330_p9687195917508"><a name="en-us_topic_0283136994_en-us_topic_0237122330_p9687195917508"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_p9687195917508"></a>OID of the function, corresponding to the OID row identifier in the <strong id="b246215379313"><a name="b246215379313"></a><a name="b246215379313"></a>pg_proc</strong> system catalog</p>
</td>
</tr>
<tr id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ra264416a2ea9459eb3b51dd35fd98150"><td class="cellrowborder" valign="top" width="25.39%" headers="mcps1.2.4.1.1 "><p id="p1482951512216"><a name="p1482951512216"></a><a name="p1482951512216"></a>prorettype_orig</p>
</td>
<td class="cellrowborder" valign="top" width="15.329999999999998%" headers="mcps1.2.4.1.2 "><p id="p1090725318227"><a name="p1090725318227"></a><a name="p1090725318227"></a>int4</p>
</td>
<td class="cellrowborder" valign="top" width="59.28%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ae140c9e4de904c98b075b07b12f8e4e5"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ae140c9e4de904c98b075b07b12f8e4e5"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ae140c9e4de904c98b075b07b12f8e4e5"></a>Original data type of the return value</p>
</td>
</tr>
<tr id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_rb2cb45eeebfa45f09d5f65d4e217fcb1"><td class="cellrowborder" valign="top" width="25.39%" headers="mcps1.2.4.1.1 "><p id="p1655732214221"><a name="p1655732214221"></a><a name="p1655732214221"></a>proargcachedcol</p>
</td>
<td class="cellrowborder" valign="top" width="15.329999999999998%" headers="mcps1.2.4.1.2 "><p id="p1998213508222"><a name="p1998213508222"></a><a name="p1998213508222"></a>oidvector</p>
</td>
<td class="cellrowborder" valign="top" width="59.28%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ac73ffec88fff45eeb4d197fe709c1b20"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ac73ffec88fff45eeb4d197fe709c1b20"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_ac73ffec88fff45eeb4d197fe709c1b20"></a>OID of the encrypted column corresponding to the <strong id="b14828525320"><a name="b14828525320"></a><a name="b14828525320"></a>INPUT</strong> parameter of the function, corresponding to the OID row identifier in the <strong id="b14981158838"><a name="b14981158838"></a><a name="b14981158838"></a>gs_encrypted_columns</strong> system catalog</p>
</td>
</tr>
<tr id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_r2dd412e98d2e4c95b36e62b059427f02"><td class="cellrowborder" valign="top" width="25.39%" headers="mcps1.2.4.1.1 "><p id="p1835743418224"><a name="p1835743418224"></a><a name="p1835743418224"></a>proallargtypes_orig</p>
</td>
<td class="cellrowborder" valign="top" width="15.329999999999998%" headers="mcps1.2.4.1.2 "><p id="p87068446223"><a name="p87068446223"></a><a name="p87068446223"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="59.28%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a9af2d5896f2e46248cc7ec2cbd476743"><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a9af2d5896f2e46248cc7ec2cbd476743"></a><a name="en-us_topic_0283136994_en-us_topic_0237122330_en-us_topic_0059779104_a9af2d5896f2e46248cc7ec2cbd476743"></a>Original data type of all function parameters</p>
</td>
</tr>
</tbody>
</table>

