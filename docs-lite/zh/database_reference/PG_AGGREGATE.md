# PG\_AGGREGATE<a name="ZH-CN_TOPIC_0289900746"></a>

PG\_AGGREGATE系统表存储与聚集函数有关的信息。PG\_AGGREGATE里的每条记录都是一条pg\_proc里面的记录的扩展。PG\_PROC记录承载该聚集的名称、输入和输出数据类型，以及其它一些和普通函数类似的信息。

**表 1**  PG\_AGGREGATE字段

<a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_t78348f63ee1d413abe2de0904b31eff5"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_r6f4b35ae2e6e452a9f6edadd9d513dc0"><th class="cellrowborder" valign="top" width="19.55%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a19582f8192204642b048ba6e8797a25b"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a19582f8192204642b048ba6e8797a25b"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a19582f8192204642b048ba6e8797a25b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="13.530000000000001%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa99a45fc42a445aebb8976f1996d4ff8"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa99a45fc42a445aebb8976f1996d4ff8"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa99a45fc42a445aebb8976f1996d4ff8"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="27.82%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7a77c327b4844e869145c59951ec4ff2"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7a77c327b4844e869145c59951ec4ff2"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7a77c327b4844e869145c59951ec4ff2"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="39.1%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a1f0cd8edd8b740cfa6f6efe73652afdb"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a1f0cd8edd8b740cfa6f6efe73652afdb"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a1f0cd8edd8b740cfa6f6efe73652afdb"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_r3b022eb846fb4c0c97ed1f81c87e5446"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ad6b6de6abce74084a1c560fa3ea05394"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ad6b6de6abce74084a1c560fa3ea05394"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ad6b6de6abce74084a1c560fa3ea05394"></a>aggfnoid</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac737df4a04874512836097580d7e353f"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac737df4a04874512836097580d7e353f"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac737df4a04874512836097580d7e353f"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a4a1a0492f6b842d5baf94c9f1048429f"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a4a1a0492f6b842d5baf94c9f1048429f"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a4a1a0492f6b842d5baf94c9f1048429f"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p73401827141214"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p73401827141214"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p73401827141214"></a>此聚集函数的<a href="PG_PROC.md">PG_PROC</a> proname。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_rbab82d27081a471d9b5e4c0cb26dfa91"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae1530e82b0184a08af60efd9a0d89f13"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae1530e82b0184a08af60efd9a0d89f13"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae1530e82b0184a08af60efd9a0d89f13"></a>aggtransfn</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa6e7924dca2f4288913052cb4f802bf2"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa6e7924dca2f4288913052cb4f802bf2"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa6e7924dca2f4288913052cb4f802bf2"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9ef57d1d15d9453a8dc3c8db6cc2c9cc"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9ef57d1d15d9453a8dc3c8db6cc2c9cc"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9ef57d1d15d9453a8dc3c8db6cc2c9cc"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a44d743e0231846c6b8e5d55510c9ea01"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a44d743e0231846c6b8e5d55510c9ea01"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a44d743e0231846c6b8e5d55510c9ea01"></a>转换函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_r59a6cefbfeb34b71b33910a4e09de7fb"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a09dedc63c6204f48b39be056b677c0e2"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a09dedc63c6204f48b39be056b677c0e2"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a09dedc63c6204f48b39be056b677c0e2"></a>aggcollectfn</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab608734f3b0543729e71a5956caa18ac"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab608734f3b0543729e71a5956caa18ac"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab608734f3b0543729e71a5956caa18ac"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab4684d84497845c2ad1cfea43a56dd72"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab4684d84497845c2ad1cfea43a56dd72"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ab4684d84497845c2ad1cfea43a56dd72"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a0cae7f1ae562404e864e68024ae8da54"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a0cae7f1ae562404e864e68024ae8da54"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a0cae7f1ae562404e864e68024ae8da54"></a>收集函数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_rcc027b919ab54c4abf9c1b923522be48"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a989677b72f5244fdaae36b2122c76458"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a989677b72f5244fdaae36b2122c76458"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a989677b72f5244fdaae36b2122c76458"></a>aggfinalfn</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a71190dd8423541df847374f2e5bf66e8"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a71190dd8423541df847374f2e5bf66e8"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a71190dd8423541df847374f2e5bf66e8"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ada972480e7ef4ddab0cdf6fa502f9a96"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ada972480e7ef4ddab0cdf6fa502f9a96"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ada972480e7ef4ddab0cdf6fa502f9a96"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a703bd0aac55b40dd839dcf6dc791a210"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a703bd0aac55b40dd839dcf6dc791a210"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a703bd0aac55b40dd839dcf6dc791a210"></a>最终处理函数（如果没有则为零）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_rf7682b0b8f724925a09e14f27a37b454"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9298093344dc4d249f28641d17cf8d5a"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9298093344dc4d249f28641d17cf8d5a"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a9298093344dc4d249f28641d17cf8d5a"></a>aggsortop</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a5683c3c1a25341f0b41858e79a791922"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a5683c3c1a25341f0b41858e79a791922"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a5683c3c1a25341f0b41858e79a791922"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7f0248b191714edbbec6aed7f696f7f0"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7f0248b191714edbbec6aed7f696f7f0"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7f0248b191714edbbec6aed7f696f7f0"></a><a href="PG_OPERATOR.md">PG_OPERATOR</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa946374548ce4624aeebdb7bf55983ed"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa946374548ce4624aeebdb7bf55983ed"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_aa946374548ce4624aeebdb7bf55983ed"></a>关联排序操作符（如果没有则为零）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ra97edffba17641c9b3cd7a5e43ad01e8"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a8afb91f50dd1429d9fe89d73b3af0a77"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a8afb91f50dd1429d9fe89d73b3af0a77"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a8afb91f50dd1429d9fe89d73b3af0a77"></a>aggtranstype</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae6cad39facca4bad8752d4f3d25cca97"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae6cad39facca4bad8752d4f3d25cca97"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae6cad39facca4bad8752d4f3d25cca97"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac2065ff72197433e8ffd8eb22822b8fa"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac2065ff72197433e8ffd8eb22822b8fa"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ac2065ff72197433e8ffd8eb22822b8fa"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a3eec720a4a954a93a7c009ce378b12e8"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a3eec720a4a954a93a7c009ce378b12e8"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a3eec720a4a954a93a7c009ce378b12e8"></a>此聚集函数的内部转换（状态）数据的数据类型。</p>
<p id="p1149103473811"><a name="p1149103473811"></a><a name="p1149103473811"></a>可能取值及其描述见于系统表pg_type或查看源码中的pg_type.h文件中type定义，主要分为多态（isPolymorphicType）和非多态两类。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_r2d73907919b448a287cbcae422f2e01e"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7fa5dcd0dbac4c539d73c81435f1dd5e"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7fa5dcd0dbac4c539d73c81435f1dd5e"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a7fa5dcd0dbac4c539d73c81435f1dd5e"></a>agginitval</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af160bbef970d44f58d54f3bc8f424bfc"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af160bbef970d44f58d54f3bc8f424bfc"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af160bbef970d44f58d54f3bc8f424bfc"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a64c67b6ae2ef4bd9b28cde575c1d1d32"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a64c67b6ae2ef4bd9b28cde575c1d1d32"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a64c67b6ae2ef4bd9b28cde575c1d1d32"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a397acde1a6774ac9b724802a948b0b90"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a397acde1a6774ac9b724802a948b0b90"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_a397acde1a6774ac9b724802a948b0b90"></a>转换状态的初始值。这是一个文本数据域，它包含初始值的外部字符串表现形式。如果数据域是null，则转换状态值从null开始。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_re36650e3c8064a8fa49e6e9998bb29ee"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af87c2136b8ca4d17955bbc8c4cc00c9e"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af87c2136b8ca4d17955bbc8c4cc00c9e"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_af87c2136b8ca4d17955bbc8c4cc00c9e"></a>agginitcollect</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae85898fbefeb4d618d4c41199a26aaa2"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae85898fbefeb4d618d4c41199a26aaa2"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_ae85898fbefeb4d618d4c41199a26aaa2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_adab7fbf03fb8486aa94f3b208fc5584d"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_adab7fbf03fb8486aa94f3b208fc5584d"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_adab7fbf03fb8486aa94f3b208fc5584d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_afacf9055489f4e68a3734ce70a1b4aa3"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_afacf9055489f4e68a3734ce70a1b4aa3"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_zh-cn_topic_0059777833_afacf9055489f4e68a3734ce70a1b4aa3"></a>收集状态的初始值。这是一个文本数据域，它包含初始值的外部字符串表现形式。如果数据域是null，则收集状态值从null开始。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_row13583185155216"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p17583951195211"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p17583951195211"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p17583951195211"></a>aggkind</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p195839513525"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p195839513525"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p195839513525"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1158375125213"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1158375125213"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1158375125213"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><div class="p" id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p14944809242"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p14944809242"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p14944809242"></a>此聚集函数类型：<a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_ul173372515244"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_ul173372515244"></a><ul id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_ul173372515244"><li>'n' ：表示Normal Agg</li><li>'o' ：表示Ordered Set Agg</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_row10557174195811"><td class="cellrowborder" valign="top" width="19.55%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p10558174205818"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p10558174205818"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p10558174205818"></a>aggnumdirectargs</p>
</td>
<td class="cellrowborder" valign="top" width="13.530000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1855817419581"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1855817419581"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p1855817419581"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="27.82%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p105582410586"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p105582410586"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p105582410586"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.1%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p3895449276"><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p3895449276"></a><a name="zh-cn_topic_0283137420_zh-cn_topic_0237122266_p3895449276"></a>Ordered Set Agg类型聚集函数的直接参数（非聚集相关参数）数量。对Normal Agg类型聚集函数，该值为0。</p>
</td>
</tr>
</tbody>
</table>

