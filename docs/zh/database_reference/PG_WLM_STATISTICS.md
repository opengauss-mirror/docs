# PG\_WLM\_STATISTICS

PG\_WLM\_STATISTICS视图显示作业结束后或已被处理异常后的负载管理相关信息。查询该视图需要sysadmin权限。

**表 1**  PG\_WLM\_STATISTICS字段

<a name="zh-cn_topic_0059779245_tb4ba52c1570d4859ad3932db8e373d47"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779245_r270f43f8f6154705ac6688b148f84fe2"><th class="cellrowborder" valign="top" width="25.06%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"><a name="zh-cn_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"></a><a name="zh-cn_topic_0059779245_a26ad5c5aa07e4bccb8ebe8c967b77c2e"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.93%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"><a name="zh-cn_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"></a><a name="zh-cn_topic_0059779245_ad2b41af3cfc747a7940b58ff3ac019f2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.010000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779245_a5585614841c045118adde4e69eb16aff"><a name="zh-cn_topic_0059779245_a5585614841c045118adde4e69eb16aff"></a><a name="zh-cn_topic_0059779245_a5585614841c045118adde4e69eb16aff"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779245_r98505238656a4a28a4710a5d38cdeb45"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"><a name="zh-cn_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"></a><a name="zh-cn_topic_0059779245_a3c857bd9098847799b39fbf38b0a4503"></a>statement</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_acddf11135f594d658b354f1458067c09"><a name="zh-cn_topic_0059779245_acddf11135f594d658b354f1458067c09"></a><a name="zh-cn_topic_0059779245_acddf11135f594d658b354f1458067c09"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"><a name="zh-cn_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"></a><a name="zh-cn_topic_0059779245_a963fdc65274e4327a7960965ccbde3a1"></a>执行了异常处理的语句。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_ra8d8cdc0ad4a49cf9c8720f5d8e1bef7"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"><a name="zh-cn_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"></a><a name="zh-cn_topic_0059779245_a8d61284fd78b447bb2be4aa91c28ca70"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"><a name="zh-cn_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"></a><a name="zh-cn_topic_0059779245_a17b0a7d612bf4954a1f8fc477c167a3f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"><a name="zh-cn_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"></a><a name="zh-cn_topic_0059779245_a2ebecec5203f474095ae258e363bc0e7"></a>语句执行前的阻塞时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_r8402be6acab4439d87a7a999d5d16475"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"><a name="zh-cn_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"></a><a name="zh-cn_topic_0059779245_a1adea4da9db244e4ba1104b3ab6631f2"></a>elapsed_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"><a name="zh-cn_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"></a><a name="zh-cn_topic_0059779245_ab0e9f8fa2e294461b6ba162ce8a6e567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"><a name="zh-cn_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"></a><a name="zh-cn_topic_0059779245_a0211e8adaf7f49179fbe5154d49b23b9"></a>语句的实际执行时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_rff375655d2584f219f20ca2a97b51ab1"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"><a name="zh-cn_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"></a><a name="zh-cn_topic_0059779245_aa3d4415324044cf4a61beebb5c098a5a"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"><a name="zh-cn_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"></a><a name="zh-cn_topic_0059779245_a38e4b02045b446efb7cd62a71550c620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"><a name="zh-cn_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"></a><a name="zh-cn_topic_0059779245_a5a9141569d7e46e8a7abfb306d56a3d2"></a>语句执行异常处理时数据库实例上CPU使用的总时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_rd79edc31928b440ea6bb93b811e2e3ca"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_aa3693b6218d1462489b4e92102186efe"><a name="zh-cn_topic_0059779245_aa3693b6218d1462489b4e92102186efe"></a><a name="zh-cn_topic_0059779245_aa3693b6218d1462489b4e92102186efe"></a>qualification_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"><a name="zh-cn_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"></a><a name="zh-cn_topic_0059779245_ab65947bd91fb4a4c969665881026b5d9"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"><a name="zh-cn_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"></a><a name="zh-cn_topic_0059779245_a0b40ba85c78c4a8095d9406689a9c7b6"></a>语句检查倾斜率的时间周期。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_rcf12f2780bcb4bbc940380c7ecbc4459"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"><a name="zh-cn_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"></a><a name="zh-cn_topic_0059779245_acf0f8389d8e44740a43d950929f3ce75"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"><a name="zh-cn_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"></a><a name="zh-cn_topic_0059779245_aca9a5cae562e4a72ab9612c905ecd832"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_a8de5de7ab066486d949b48d819706458"><a name="zh-cn_topic_0059779245_a8de5de7ab066486d949b48d819706458"></a><a name="zh-cn_topic_0059779245_a8de5de7ab066486d949b48d819706458"></a>语句在执行异常处理时数据库实例上CPU使用的倾斜率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_r201440ea6e76450d962be239dfd15d6e"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"><a name="zh-cn_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"></a><a name="zh-cn_topic_0059779245_abb3d8d409da941db86c1647c708a7ced"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_a113318782dcb4250960421adc71d8a7a"><a name="zh-cn_topic_0059779245_a113318782dcb4250960421adc71d8a7a"></a><a name="zh-cn_topic_0059779245_a113318782dcb4250960421adc71d8a7a"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"><a name="zh-cn_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"></a><a name="zh-cn_topic_0059779245_ab1edc1e6100c4ff4b5fff5d6e273f4ed"></a>语句执行异常处理时所使用的Cgroups。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_r918df64590b74ce0aa105b04c3835f2b"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"><a name="zh-cn_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"></a><a name="zh-cn_topic_0059779245_a63ae752c97034b0c8262eb650508f5b7"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"><a name="zh-cn_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"></a><a name="zh-cn_topic_0059779245_adc7faadf069a4ff7878f9bc34c1730eb"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"><a name="zh-cn_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"></a><a name="zh-cn_topic_0059779245_ada2a87a0a21c429ba419f9f89a24b30e"></a>语句执行异常处理后的状态，包括：<a name="zh-cn_topic_0059779245_u70e5f119849345c893d11193a9cace28"></a><a name="zh-cn_topic_0059779245_u70e5f119849345c893d11193a9cace28"></a><ul id="zh-cn_topic_0059779245_u70e5f119849345c893d11193a9cace28"><li>pending：执行前预备状态。</li><li>running：执行进行状态。</li><li>finished：执行正常结束。</li><li>abort：执行异常终止。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0059779245_r26e90f84936b44e9a1199dcda82cbc24"><td class="cellrowborder" valign="top" width="25.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"><a name="zh-cn_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"></a><a name="zh-cn_topic_0059779245_ad96ddeaf2bef49eb845a5fe0d80587d8"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="17.93%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"><a name="zh-cn_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"></a><a name="zh-cn_topic_0059779245_aefacc7a600c14ab0954504e16db03e93"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.010000000000005%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"><a name="zh-cn_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"></a><a name="zh-cn_topic_0059779245_adb1a92ee753b421b818018e2b8c9b77d"></a>语句执行的异常处理动作，包括：<a name="zh-cn_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"></a><a name="zh-cn_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"></a><ul id="zh-cn_topic_0059779245_ued96c56692a241e884c10e9bc1841aa3"><li>abort：执行终止操作。</li><li>adjust：执行Cgroups调整操作，目前只有降级操作。</li><li>finish：正常结束。</li></ul>
</div>
</td>
</tr>
</tbody>
</table>
