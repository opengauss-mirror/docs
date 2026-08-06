# PG\_EXT\_STATS

PG\_EXT\_STATS视图提供对存储在[PG\_STATISTIC\_EXT](PG_STATISTIC_EXT.md)表里面的扩展统计信息的访问。扩展统计信息目前包括多列统计信息。

**表 1**  PG\_EXT\_STATS字段

<a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_t5d5cf251c5ab4fd69c54b9737cc9b030"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_r4e5c02c069264be58cd013193b3e0cb8"><th class="cellrowborder" valign="top" width="18.490000000000002%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a4a453bd5a14947d9803dfbed96da4356"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a4a453bd5a14947d9803dfbed96da4356"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a4a453bd5a14947d9803dfbed96da4356"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.790000000000001%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a165b2f4b5683447587f566bb6dd4a8f3"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a165b2f4b5683447587f566bb6dd4a8f3"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a165b2f4b5683447587f566bb6dd4a8f3"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="23.880000000000003%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a155dbebcca584f60bcf330b83865c3c2"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a155dbebcca584f60bcf330b83865c3c2"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a155dbebcca584f60bcf330b83865c3c2"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.84%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a29b0600283ee4756a41f1b98712adc86"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a29b0600283ee4756a41f1b98712adc86"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a29b0600283ee4756a41f1b98712adc86"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_rfa74629f73ce4845b3c16e3afb18a000"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a10366331564c4167a6d2fc2950a48f44"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a10366331564c4167a6d2fc2950a48f44"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a10366331564c4167a6d2fc2950a48f44"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a71da762e7afb427aab48ab7244e632f8"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a71da762e7afb427aab48ab7244e632f8"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a71da762e7afb427aab48ab7244e632f8"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad90f239d72d147d08d6a46cd4ceef53b"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad90f239d72d147d08d6a46cd4ceef53b"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad90f239d72d147d08d6a46cd4ceef53b"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.nspname</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a8c5116971c114a559e254fc74ce60537"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a8c5116971c114a559e254fc74ce60537"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a8c5116971c114a559e254fc74ce60537"></a>包含表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_rb929868c132f46ce8369a6340761442b"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae6d782adf5bd44af8fb0d2e06feb01f7"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae6d782adf5bd44af8fb0d2e06feb01f7"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae6d782adf5bd44af8fb0d2e06feb01f7"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_acd0027bdcbe2426986975d6589b44650"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_acd0027bdcbe2426986975d6589b44650"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_acd0027bdcbe2426986975d6589b44650"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a2b895cb023b4455e8a17c99644c8373d"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a2b895cb023b4455e8a17c99644c8373d"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a2b895cb023b4455e8a17c99644c8373d"></a><a href="PG_CLASS.md">PG_CLASS</a>.relname</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af4a415c12d44402690d68730d71296e9"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af4a415c12d44402690d68730d71296e9"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af4a415c12d44402690d68730d71296e9"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_row18168535104419"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1116816355446"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1116816355446"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1116816355446"></a>attname</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p816833544417"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p816833544417"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p816833544417"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p171686353448"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p171686353448"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p171686353448"></a><a href="PG_STATISTIC_EXT.md">PG_STATISTIC_EXT</a>.stakey</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p18168203516448"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p18168203516448"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p18168203516448"></a>统计信息扩展的多列信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_re77209b7e4744abfb683f8f23a6fd740"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a382d2ff830d34b7a8c9984289062e6ab"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a382d2ff830d34b7a8c9984289062e6ab"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a382d2ff830d34b7a8c9984289062e6ab"></a>inherited</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae010e8f82d4540dc9406b84cfca86836"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae010e8f82d4540dc9406b84cfca86836"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ae010e8f82d4540dc9406b84cfca86836"></a><span id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_text12386163552911"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_text12386163552911"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_text12386163552911"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a01c781bfc8b4430cba3562d22f9439f4"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a01c781bfc8b4430cba3562d22f9439f4"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a01c781bfc8b4430cba3562d22f9439f4"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a6290d46208f34aeaac31eb514c26d045"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a6290d46208f34aeaac31eb514c26d045"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a6290d46208f34aeaac31eb514c26d045"></a>如果为真，则包含继承的子列，否则只是指定表的字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_rebfb2d58e25a4a0c85f08c3385c420d2"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a04c57e5ea7e745a0a5ecd1f9fb3a881d"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a04c57e5ea7e745a0a5ecd1f9fb3a881d"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a04c57e5ea7e745a0a5ecd1f9fb3a881d"></a>null_frac</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad5dce665751144529704441919a2c4b0"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad5dce665751144529704441919a2c4b0"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad5dce665751144529704441919a2c4b0"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa7f2b08c52ff41518fc015a3f2b024bf"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa7f2b08c52ff41518fc015a3f2b024bf"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa7f2b08c52ff41518fc015a3f2b024bf"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a94a742486d1b4a8e825c3865473dcebb"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a94a742486d1b4a8e825c3865473dcebb"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a94a742486d1b4a8e825c3865473dcebb"></a>记录中字段组合为空的百分比。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_r533f3b488fa148fc981cf26c89b34a11"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a5e3a34d7afaa46549e7e42fe9de2faa9"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a5e3a34d7afaa46549e7e42fe9de2faa9"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a5e3a34d7afaa46549e7e42fe9de2faa9"></a>avg_width</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a75b9363ba73f44849935b36236d95ff2"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a75b9363ba73f44849935b36236d95ff2"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a75b9363ba73f44849935b36236d95ff2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad9e537e10cbe4edeb22bcaa2aac07b04"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad9e537e10cbe4edeb22bcaa2aac07b04"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ad9e537e10cbe4edeb22bcaa2aac07b04"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a62f5f61aeeec49ddb24cd1a01cf78df3"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a62f5f61aeeec49ddb24cd1a01cf78df3"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a62f5f61aeeec49ddb24cd1a01cf78df3"></a>字段组合记录以字节记的平均宽度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_r023e3bddedea499e849346b6ccfef8d0"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a39de0f97b3284a6ea2541a1db3a3a1f1"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a39de0f97b3284a6ea2541a1db3a3a1f1"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a39de0f97b3284a6ea2541a1db3a3a1f1"></a>n_distinct</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a968e104489ae4d80aaa53a1211411629"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a968e104489ae4d80aaa53a1211411629"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a968e104489ae4d80aaa53a1211411629"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a3c4d34ea6e6f43b98392a20a7013392d"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a3c4d34ea6e6f43b98392a20a7013392d"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a3c4d34ea6e6f43b98392a20a7013392d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ubb6e0fe1521b4a32af789e988780396b"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ubb6e0fe1521b4a32af789e988780396b"></a><ul id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ubb6e0fe1521b4a32af789e988780396b"><li>如果大于零，表示字段组合中独立数值的估计数目。</li><li>如果小于零，表示独立数值的数目被行数除的负数。<a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ol1393064418222"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ol1393064418222"></a><ol id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ol1393064418222"><li>用负数形式是因为ANALYZE认为独立数值的数目是随着表增长而增长；</li><li>正数的形式用于在字段看上去好像有固定的可能值数目的情况下。比如，-1表示一个字段组合中独立数值的个数和行数相同。</li></ol>
</li></ul>
<a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ul9851195416453"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ul9851195416453"></a><ul id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_ul9851195416453"><li>如果等于零，表示独立数值的数目未知。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_r4d6c01756ccf4d5d9c8f6d1ba0f5855c"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aebad67b3c8d341a3a86596c95d938077"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aebad67b3c8d341a3a86596c95d938077"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aebad67b3c8d341a3a86596c95d938077"></a>n_dndistinct</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a0ad15fa2483b49faae056d521acf34c8"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a0ad15fa2483b49faae056d521acf34c8"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a0ad15fa2483b49faae056d521acf34c8"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a65f535cb72c54f9d910cf52c3658b531"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a65f535cb72c54f9d910cf52c3658b531"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a65f535cb72c54f9d910cf52c3658b531"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><div class="p" id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_zh-cn_topic_0058966162_p282433895242"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_zh-cn_topic_0058966162_p282433895242"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_zh-cn_topic_0058966162_p282433895242"></a>标识dn1上字段组合中非NULL数据的唯一值的数目。<a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ud633cfa8feb8495fb00a4bba034b0a2a"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ud633cfa8feb8495fb00a4bba034b0a2a"></a><ul id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ud633cfa8feb8495fb00a4bba034b0a2a"><li>如果大于零，表示独立数值的实际数目。</li><li>如果小于零，表示独立数值的数目被行数除的负数。（比如，一个字段组合的数值平均出现概率为两次，则可以表示为n_dndistinct=-0.5）。</li><li>如果等于零，表示独立数值的数目未知。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_rb2f0bc2b2d274f11a416fcab1d20bc73"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a34dabf47061f4c46b6bbce5d02072c76"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a34dabf47061f4c46b6bbce5d02072c76"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a34dabf47061f4c46b6bbce5d02072c76"></a>most_common_vals</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a9a5a4f26390f4e348bca9561880bcd20"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a9a5a4f26390f4e348bca9561880bcd20"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a9a5a4f26390f4e348bca9561880bcd20"></a>anyarray</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ace0e7a000a684398b10b2c2485ad8a6b"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ace0e7a000a684398b10b2c2485ad8a6b"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_ace0e7a000a684398b10b2c2485ad8a6b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2e6ce33435c4db3843d8c71273ae2a2"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2e6ce33435c4db3843d8c71273ae2a2"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2e6ce33435c4db3843d8c71273ae2a2"></a>一个字段组合里最常用数值的列表。如果该字段组合不存在最常用数值，则为NULL。本列保存的多列常用数值均不为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_r3245f78ed5c44102a7fc05f543717bc4"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a422fea08c7414502970f9039dbfcb234"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a422fea08c7414502970f9039dbfcb234"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a422fea08c7414502970f9039dbfcb234"></a>most_common_freqs</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2a96d6446d248609660c13b5db37ec0"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2a96d6446d248609660c13b5db37ec0"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_aa2a96d6446d248609660c13b5db37ec0"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af5887bfdb42a4185b8e4dc2a968f7f17"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af5887bfdb42a4185b8e4dc2a968f7f17"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_af5887bfdb42a4185b8e4dc2a968f7f17"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a1ac2f64c7454495a8dd05af4951a9764"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a1ac2f64c7454495a8dd05af4951a9764"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_a1ac2f64c7454495a8dd05af4951a9764"></a>一个最常用数值组合的频率的列表，也就是说，每个出现的次数除以行数。如果most_common_vals是NULL，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_row481288129300"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p326086409306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p326086409306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p326086409306"></a>most_common_vals_null</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p240541499306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p240541499306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p240541499306"></a>anyarray</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p22290309306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p22290309306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p22290309306"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p463337739306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p463337739306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p463337739306"></a>一个字段组合里最常用数值的列表。如果该字段组合不存在最常用数值，则为NULL。本列保存的多列常用数值中至少有一个值为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_zh-cn_topic_0059779067_rbaf29aa51a5f46989ad8aaee3d511c1b"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p215619499306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p215619499306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p215619499306"></a>most_common_freqs_null</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p16874219306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p16874219306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p16874219306"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p24634229306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p24634229306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p24634229306"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p653194959306"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p653194959306"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p653194959306"></a>一个最常用数值组合的频率的列表，也就是说，每个出现的次数除以行数。如果most_common_vals_null是NULL，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_row13574185135218"><td class="cellrowborder" valign="top" width="18.490000000000002%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1557514510529"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1557514510529"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p1557514510529"></a>histogram_bounds</p>
</td>
<td class="cellrowborder" valign="top" width="14.790000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457515105215"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457515105215"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457515105215"></a>anyarray</p>
</td>
<td class="cellrowborder" valign="top" width="23.880000000000003%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p19575051521"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p19575051521"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p19575051521"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.84%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457616545219"><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457616545219"></a><a name="zh-cn_topic_0283137332_zh-cn_topic_0237122416_p457616545219"></a>直方图的边界值列表。</p>
</td>
</tr>
</tbody>
</table>
