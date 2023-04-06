# PG\_WLM\_STATISTICS<a name="EN-US_TOPIC_0000001105362250"></a>

**PG\_WLM\_STATISTICS**  displays information about workload management after the task is complete or the exception has been handled. Only the user with sysadmin permission can query this view.

**Table  1**  PG\_WLM\_STATISTICS columns

<a name="en-us_topic_0059779245_tb4ba52c1570d4859ad3932db8e373d47"></a>
<table><thead align="left"><tr id="en-us_topic_0059779245_r270f43f8f6154705ac6688b148f84fe2"><th class="cellrowborder" valign="top" width="25.06%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"><a name="en-us_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"></a><a name="en-us_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.93%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"><a name="en-us_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"></a><a name="en-us_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.010000000000005%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779245_a5585614841c045118adde4e69eb16aff"><a name="en-us_topic_0059779245_a5585614841c045118adde4e69eb16aff"></a><a name="en-us_topic_0059779245_a5585614841c045118adde4e69eb16aff"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779245_r98505238656a4a28a4710a5d38cdeb45"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"><a name="en-us_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"></a><a name="en-us_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"></a>statement</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_acddf11135f594d658b354f1458067c09"><a name="en-us_topic_0059779245_acddf11135f594d658b354f1458067c09"></a><a name="en-us_topic_0059779245_acddf11135f594d658b354f1458067c09"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"><a name="en-us_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"></a><a name="en-us_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"></a>Statement executed for exception handling.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_ra8d8cdc0ad4a49cf9c8720f5d8e1bef7"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"><a name="en-us_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"></a><a name="en-us_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"><a name="en-us_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"></a><a name="en-us_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"><a name="en-us_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"></a><a name="en-us_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"></a>Block time before the statement is executed.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_r8402be6acab4439d87a7a999d5d16475"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"><a name="en-us_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"></a><a name="en-us_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"></a>elapsed_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"><a name="en-us_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"></a><a name="en-us_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"><a name="en-us_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"></a><a name="en-us_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"></a>Elapsed time when the statement is executed.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_rff375655d2584f219f20ca2a97b51ab1"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"><a name="en-us_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"></a><a name="en-us_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"><a name="en-us_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"></a><a name="en-us_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"><a name="en-us_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"></a><a name="en-us_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"></a>Total time used by the CPU on the database instance when the statement is executed for exception handling.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_rd79edc31928b440ea6bb93b811e2e3ca"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_aa3693b6218d1462489b4e92102186efe"><a name="en-us_topic_0059779245_aa3693b6218d1462489b4e92102186efe"></a><a name="en-us_topic_0059779245_aa3693b6218d1462489b4e92102186efe"></a>qualification_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"><a name="en-us_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"></a><a name="en-us_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"><a name="en-us_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"></a><a name="en-us_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"></a>Period when the statement checks the skew.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_rcf12f2780bcb4bbc940380c7ecbc4459"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"><a name="en-us_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"></a><a name="en-us_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"><a name="en-us_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"></a><a name="en-us_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_a8de5de7ab066486d949b48d819706458"><a name="en-us_topic_0059779245_a8de5de7ab066486d949b48d819706458"></a><a name="en-us_topic_0059779245_a8de5de7ab066486d949b48d819706458"></a>CPU usage skew on the database instance when the statement is executed for exception handling.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_r201440ea6e76450d962be239dfd15d6e"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"><a name="en-us_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"></a><a name="en-us_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_a113318782dcb4250960421adc71d8a7a"><a name="en-us_topic_0059779245_a113318782dcb4250960421adc71d8a7a"></a><a name="en-us_topic_0059779245_a113318782dcb4250960421adc71d8a7a"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"><a name="en-us_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"></a><a name="en-us_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"></a>Cgroup used when the statement is executed for exception handling.</p>
</td>
</tr>
<tr id="en-us_topic_0059779245_r918df64590b74ce0aa105b04c3835f2b"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"><a name="en-us_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"></a><a name="en-us_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"><a name="en-us_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"></a><a name="en-us_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"><a name="en-us_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"></a><a name="en-us_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"></a>Statement status after statement are executed for exception handling, including:<a name="en-us_topic_0059779245_u70e5f119849345c893d11193a9cace28"></a><a name="en-us_topic_0059779245_u70e5f119849345c893d11193a9cace28"></a><ul id="en-us_topic_0059779245_u70e5f119849345c893d11193a9cace28"><li><strong id="b12772204695519"><a name="b12772204695519"></a><a name="b12772204695519"></a>pending</strong>: waiting to be executed.</li><li><strong id="b200307595944716"><a name="b200307595944716"></a><a name="b200307595944716"></a>running</strong>: being executed.</li><li><strong id="b17353105014619"><a name="b17353105014619"></a><a name="b17353105014619"></a>finished</strong>: finished normally.</li><li><strong id="b5893102155712"><a name="b5893102155712"></a><a name="b5893102155712"></a>abort</strong>: terminated unexpectedly.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0059779245_r26e90f84936b44e9a1199dcda82cbc24"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"><a name="en-us_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"></a><a name="en-us_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"><a name="en-us_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"></a><a name="en-us_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"><a name="en-us_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"></a><a name="en-us_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"></a>Actions when statements are executed for exception handling, including:<a name="en-us_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"></a><a name="en-us_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"></a><ul id="en-us_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"><li><strong id="b797363925710"><a name="b797363925710"></a><a name="b797363925710"></a>abort</strong>: terminating the operation.</li><li><strong id="b6886104915712"><a name="b6886104915712"></a><a name="b6886104915712"></a>adjust</strong>: executing the Cgroup adjustment operations. Currently, you can only perform the demotion operation.</li><li><strong id="b1748765385719"><a name="b1748765385719"></a><a name="b1748765385719"></a>finish</strong>: finished normally.</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

