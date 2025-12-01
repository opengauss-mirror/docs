# Date/Time Types<a name="EN-US_TOPIC_0289901014"></a>

[Table 1](#en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_table60826369)  lists the date/time types supported by openGauss. For the operators and built-in functions of the types, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>If the time format of another database is different from that of openGauss, modify the value of the  **DateStyle**  parameter to keep them consistent.

**Table  1**  Date/Time types

<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_table60826369"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_row9729174"><th class="cellrowborder" valign="top" width="27.939999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p49865664"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p49865664"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p49865664"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="45.79%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12587011"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12587011"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12587011"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="26.27%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12914950"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12914950"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p12914950"></a>Storage Space</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_row39478001"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p43601517"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p43601517"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p43601517"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p42061985"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p42061985"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p42061985"></a>Date and time.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p17093938"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p17093938"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p17093938"></a>4 bytes (8 bytes in A compatibility schema)</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf7df75b185474467abfe47780032b3b5"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a937f36adc51e421cbea23cfe8fd893a7"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a937f36adc51e421cbea23cfe8fd893a7"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a937f36adc51e421cbea23cfe8fd893a7"></a>TIME [(p)] [WITHOUT TIME ZONE]</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af3806537f35047619c3b1b9a4c00f5fa"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af3806537f35047619c3b1b9a4c00f5fa"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af3806537f35047619c3b1b9a4c00f5fa"></a>Time within one day.</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68c7cd5ecbf47f89ea709de74873eff"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68c7cd5ecbf47f89ea709de74873eff"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68c7cd5ecbf47f89ea709de74873eff"></a><strong id="b187617110612"><a name="b187617110612"></a><a name="b187617110612"></a>p</strong> indicates the precision after the decimal point. The value ranges from 0 to 6.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a262ae9cbd29b4572ab1bb29ba477a35c"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a262ae9cbd29b4572ab1bb29ba477a35c"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a262ae9cbd29b4572ab1bb29ba477a35c"></a>8 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rd662cd9d461c45ee942d40793015efb8"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ab6b40a6b62974ff1bcf6c1df11cc4c0a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ab6b40a6b62974ff1bcf6c1df11cc4c0a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ab6b40a6b62974ff1bcf6c1df11cc4c0a"></a>TIME [(p)] [WITH TIME ZONE]</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a055beaab7f76453aba3476f3ba2e7211"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a055beaab7f76453aba3476f3ba2e7211"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a055beaab7f76453aba3476f3ba2e7211"></a>Time within one day (with time zone).</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p598278512324"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p598278512324"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p598278512324"></a><strong id="b618511461619"><a name="b618511461619"></a><a name="b618511461619"></a>p</strong> indicates the precision after the decimal point. The value ranges from 0 to 6.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aab32210feed345fdbc8492deadc50495"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aab32210feed345fdbc8492deadc50495"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aab32210feed345fdbc8492deadc50495"></a>12 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rae6cb0ab98d648138d2ed542e5215de1"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a49141d7986404b17b68f8365ea5cdd53"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a49141d7986404b17b68f8365ea5cdd53"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a49141d7986404b17b68f8365ea5cdd53"></a>TIMESTAMP[(p)] [WITHOUT TIME ZONE]</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a0bc109e5c94948639b23f2da1fe703f0"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a0bc109e5c94948639b23f2da1fe703f0"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a0bc109e5c94948639b23f2da1fe703f0"></a>Date and time.</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a117744c87b104079ba903b6c5cfce553"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a117744c87b104079ba903b6c5cfce553"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a117744c87b104079ba903b6c5cfce553"></a><strong id="b1360317571362"><a name="b1360317571362"></a><a name="b1360317571362"></a>p</strong> indicates the precision after the decimal point. The value ranges from 0 to 6.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a34da751f19cc46789c23cb54288c95e3"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a34da751f19cc46789c23cb54288c95e3"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a34da751f19cc46789c23cb54288c95e3"></a>8 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ra3dc8a74972b4e87b70428ea1177ddde"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_accb7dd92e9044548938892b54c4f0dd9"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_accb7dd92e9044548938892b54c4f0dd9"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_accb7dd92e9044548938892b54c4f0dd9"></a>TIMESTAMP[(p)][WITH TIME ZONE]</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4628e23b7e744dfea379219692eee042"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4628e23b7e744dfea379219692eee042"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4628e23b7e744dfea379219692eee042"></a>Date and time (with time zone). TIMESTAMP is also called TIMESTAMPTZ.</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a44dae8bff1e740058eb38a1031dfec47"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a44dae8bff1e740058eb38a1031dfec47"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a44dae8bff1e740058eb38a1031dfec47"></a><strong id="b44901221084"><a name="b44901221084"></a><a name="b44901221084"></a>p</strong> indicates the precision after the decimal point. The value ranges from 0 to 6.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad7b21b151cf04d46b1160866ee0a5237"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad7b21b151cf04d46b1160866ee0a5237"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad7b21b151cf04d46b1160866ee0a5237"></a>8 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r95d7e93d231644798765e24537017ac9"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeb9be387a9434127a1a1a1a6a7c9c841"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeb9be387a9434127a1a1a1a6a7c9c841"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeb9be387a9434127a1a1a1a6a7c9c841"></a>SMALLDATETIME</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a355e0d78a29c4c46a1d8ff5c92264ccb"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a355e0d78a29c4c46a1d8ff5c92264ccb"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a355e0d78a29c4c46a1d8ff5c92264ccb"></a>Date and time (without time zone).</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5b7de3a29efb47188e9614c9b4f16550"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5b7de3a29efb47188e9614c9b4f16550"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5b7de3a29efb47188e9614c9b4f16550"></a>The precision is minute. A duration between 30s and 60s is rounded into 1 minute.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a341a944ffc3b4bf7807cfefd281a850e"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a341a944ffc3b4bf7807cfefd281a850e"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a341a944ffc3b4bf7807cfefd281a850e"></a>8 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r86dfa10687d046afba53a734179db69a"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac800ca24cd4444486f3f3aa1d333fec"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac800ca24cd4444486f3f3aa1d333fec"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac800ca24cd4444486f3f3aa1d333fec"></a>INTERVAL DAY (l) TO SECOND (p)</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2fb26ca154fb47b79f38f17d96dbbb86"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2fb26ca154fb47b79f38f17d96dbbb86"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2fb26ca154fb47b79f38f17d96dbbb86"></a>Time interval (X days X hours X minutes X seconds).</p>
<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5f08bcef9848420fb62a8a5875f61c17"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5f08bcef9848420fb62a8a5875f61c17"></a><ul id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5f08bcef9848420fb62a8a5875f61c17"><li><strong id="b045916325913"><a name="b045916325913"></a><a name="b045916325913"></a>l</strong>: indicates the precision of days. The value ranges from 0 to 6. For compatibility, the precision functions are not supported.</li><li><strong id="b1498213554913"><a name="b1498213554913"></a><a name="b1498213554913"></a>p</strong>: indicates the precision of seconds. The value ranges from 0 to 6. The digit 0 at the end of a decimal number is not displayed.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7fcdc26f838044a8b2883d538118fa1d"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7fcdc26f838044a8b2883d538118fa1d"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7fcdc26f838044a8b2883d538118fa1d"></a>16 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r510306560a9b4dedba4f22ac119ce7b5"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3b305cd085dc496eb55f451259913501"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3b305cd085dc496eb55f451259913501"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3b305cd085dc496eb55f451259913501"></a>INTERVAL [FIELDS] [ (p) ]</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a02ba213b5cd5417692dfc7b47757195a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a02ba213b5cd5417692dfc7b47757195a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a02ba213b5cd5417692dfc7b47757195a"></a>Time interval.</p>
<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u165b042828164958ae4bcb1afa043c27"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u165b042828164958ae4bcb1afa043c27"></a><ul id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u165b042828164958ae4bcb1afa043c27"><li><strong id="b16138163415911"><a name="b16138163415911"></a><a name="b16138163415911"></a>FIELDS</strong>: <strong id="b4503153519109"><a name="b4503153519109"></a><a name="b4503153519109"></a>YEAR</strong>, <strong id="b1633413851017"><a name="b1633413851017"></a><a name="b1633413851017"></a>MONTH</strong>, <strong id="b1316284017101"><a name="b1316284017101"></a><a name="b1316284017101"></a>DAY</strong>, <strong id="b117134221017"><a name="b117134221017"></a><a name="b117134221017"></a>HOUR</strong>, <strong id="b5166184451015"><a name="b5166184451015"></a><a name="b5166184451015"></a>MINUTE</strong>, <strong id="b9281174641016"><a name="b9281174641016"></a><a name="b9281174641016"></a>SECOND</strong>, <strong id="b1132875315109"><a name="b1132875315109"></a><a name="b1132875315109"></a>DAY TO HOUR</strong>, <strong id="b949719579109"><a name="b949719579109"></a><a name="b949719579109"></a>DAY TO MINUTE</strong>, <strong id="b12872010111"><a name="b12872010111"></a><a name="b12872010111"></a>DAY TO SECOND</strong>, <strong id="b1388617112"><a name="b1388617112"></a><a name="b1388617112"></a>HOUR TO MINUTE</strong>, <strong id="b64701791113"><a name="b64701791113"></a><a name="b64701791113"></a>HOUR TO SECOND</strong>, or <strong id="b423918130114"><a name="b423918130114"></a><a name="b423918130114"></a>MINUTE TO SECOND</strong>.</li></ul>
<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ud7c50b05903b4a4f88e913092f63e4b7"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ud7c50b05903b4a4f88e913092f63e4b7"></a><ul id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ud7c50b05903b4a4f88e913092f63e4b7"><li><strong id="b58311727111113"><a name="b58311727111113"></a><a name="b58311727111113"></a>p</strong>: indicates the precision of seconds. The value ranges from 0 to 6. <strong id="b11595103821115"><a name="b11595103821115"></a><a name="b11595103821115"></a>p</strong> takes effect only when <strong id="b533855611916"><a name="b533855611916"></a><a name="b533855611916"></a>FIELDS</strong> is <strong id="b354144117111"><a name="b354144117111"></a><a name="b354144117111"></a>SECOND</strong>, <strong id="b5967124311116"><a name="b5967124311116"></a><a name="b5967124311116"></a>DAY TO SECOND</strong>, <strong id="b17425114691112"><a name="b17425114691112"></a><a name="b17425114691112"></a>HOUR TO SECOND</strong>, or <strong id="b113715141219"><a name="b113715141219"></a><a name="b113715141219"></a>MINUTE TO SECOND</strong>. The digit 0 at the end of a decimal number is not displayed.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a94a50b28e3cd453fbae7368c766674a0"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a94a50b28e3cd453fbae7368c766674a0"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a94a50b28e3cd453fbae7368c766674a0"></a>12 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row144417485416"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p4445748144"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p4445748144"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p4445748144"></a>reltime</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p660982815360"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p660982815360"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p660982815360"></a>Relative time interval. The format is as follows:</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_p844554814414"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p844554814414"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p844554814414"></a><em id="i381264810346"><a name="i381264810346"></a><a name="i381264810346"></a>X</em> years <em id="i1820194814347"><a name="i1820194814347"></a><a name="i1820194814347"></a>X</em> months <em id="i138218489349"><a name="i138218489349"></a><a name="i138218489349"></a>X</em> days <em id="i1822184816344"><a name="i1822184816344"></a><a name="i1822184816344"></a>XX:XX:XX</em></p>
<p id="p95863372713"><a name="p95863372713"></a><a name="p95863372713"></a>The Julian calendar is used. It specifies that a year has 365.25 days and a month has 30 days. The relative time interval needs to be calculated based on the input value. The output format is POSTGRES.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p344517481945"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p344517481945"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p344517481945"></a>4 bytes</p>
</td>
</tr>
<tr id="row838251018150"><td class="cellrowborder" valign="top" width="27.939999999999998%" headers="mcps1.2.4.1.1 "><p id="p135618105514"><a name="p135618105514"></a><a name="p135618105514"></a>abstime</p>
</td>
<td class="cellrowborder" valign="top" width="45.79%" headers="mcps1.2.4.1.2 "><p id="p45611014517"><a name="p45611014517"></a><a name="p45611014517"></a>Date and time. The format is as follows:</p>
<p id="p991812291082"><a name="p991812291082"></a><a name="p991812291082"></a>YYYY-MM-DD hh:mm:ss+timezone</p>
<p id="p340410363717"><a name="p340410363717"></a><a name="p340410363717"></a>The value range is from 1901-12-13 20:45:53 GMT to 2038-01-18 23:59:59 GMT. The precision is second.</p>
</td>
<td class="cellrowborder" valign="top" width="26.27%" headers="mcps1.2.4.1.3 "><p id="p05671019520"><a name="p05671019520"></a><a name="p05671019520"></a>4 bytes</p>
</td>
</tr>
</tbody>
</table>

Example:

```
-- Create a table.
openGauss=# CREATE TABLE date_type_tab(coll date);

-- Insert data.
openGauss=# INSERT INTO date_type_tab VALUES (date '12-10-2010');

-- View data.
openGauss=# SELECT * FROM date_type_tab;
        coll         
---------------------
 2010-12-10 00:00:00
(1 row)

-- Delete the table.
openGauss=# DROP TABLE date_type_tab;

-- Create a table.
openGauss=# CREATE TABLE time_type_tab (da time without time zone ,dai time with time zone,dfgh timestamp without time zone,dfga timestamp with time zone, vbg smalldatetime);

-- Insert data.
openGauss=# INSERT INTO time_type_tab VALUES ('21:21:21','21:21:21 pst','2010-12-12','2013-12-11 pst','2003-04-12 04:05:06');

-- View data.
openGauss=# SELECT * FROM time_type_tab;
    da    |     dai     |        dfgh         |          dfga          |         vbg         
----------+-------------+---------------------+------------------------+---------------------
 21:21:21 | 21:21:21-08 | 2010-12-12 00:00:00 | 2013-12-11 16:00:00+08 | 2003-04-12 04:05:00
(1 row)

-- Delete the table.
openGauss=# DROP TABLE time_type_tab;

-- Create a table.
openGauss=# CREATE TABLE day_type_tab (a int,b INTERVAL DAY(3) TO SECOND (4)); 

-- Insert data.
openGauss=# INSERT INTO day_type_tab VALUES (1, INTERVAL '3' DAY);

-- View data.
openGauss=# SELECT * FROM day_type_tab;
 a |   b    
---+--------
 1 | 3 days
(1 row)

-- Delete the table.
openGauss=# DROP TABLE day_type_tab;

-- Create a table.
openGauss=# CREATE TABLE year_type_tab(a int, b interval year (6));

-- Insert data.
openGauss=# INSERT INTO year_type_tab VALUES(1,interval '2' year);

-- View data.
openGauss=# SELECT * FROM year_type_tab;
 a |    b    
---+---------
 1 | 2 years
(1 row)

-- Delete the table.
openGauss=# DROP TABLE year_type_tab;
```

## Date Input<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_s6223e3ec408141de8c5d3f3ef9b6d842"></a>

Date and time input is accepted in almost any reasonable formats, including ISO 8601, SQL-compatible, and traditional POSTGRES. The system allows you to customize the sequence of day, month, and year in the date input. Set the  **DateStyle**  parameter to  **MDY**  to select month-day-year interpretation,  **DMY**  to select day-month-year interpretation, or  **YMD**  to select year-month-day interpretation.

Remember that any date or time literal input needs to be enclosed with single quotation marks \(''\), and the syntax is as follows:

type \[ \( p \) \] 'value'

The  **p**  that can be selected in the precision statement is an integer, indicating the number of fractional digits in the  **seconds**  column.  [Table 2](#en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_t0606b0d8bec74d34a6440ef1de8d1e67)  shows some possible inputs for the  **date**  type.

**Table  2**  Date input

<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_t0606b0d8bec74d34a6440ef1de8d1e67"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r0855914c427542649353f5ea7b4dbf7c"><th class="cellrowborder" valign="top" width="24.62%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p976581415048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p976581415048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p976581415048"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="75.38%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a42a48e57fa2b4e77b756fe6b747ad8d5"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a42a48e57fa2b4e77b756fe6b747ad8d5"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a42a48e57fa2b4e77b756fe6b747ad8d5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rc93bf0fcf8554c17a24769b4a04ef265"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ace0566ed447f4d49b0ec145dcdcfdfbe"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ace0566ed447f4d49b0ec145dcdcfdfbe"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ace0566ed447f4d49b0ec145dcdcfdfbe"></a>1999-01-08</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fe57ecdea64f348137c63c439a7b66"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fe57ecdea64f348137c63c439a7b66"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fe57ecdea64f348137c63c439a7b66"></a>ISO 8601 (recommended format). January 8, 1999 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ra3276e1668a8416c9e00fa5b7f343c2d"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3366e7d5b50942f092cb5b6b166f007b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3366e7d5b50942f092cb5b6b166f007b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a3366e7d5b50942f092cb5b6b166f007b"></a>January 8, 1999</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p32776215048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p32776215048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p32776215048"></a>Unambiguous in any <strong id="b148333286164"><a name="b148333286164"></a><a name="b148333286164"></a>datestyle</strong> input mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r68268740e97b437bb87e8ee06da30569"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa586b296d8b41eb82c3e9b73f71a094"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa586b296d8b41eb82c3e9b73f71a094"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa586b296d8b41eb82c3e9b73f71a094"></a>1/8/1999</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa9fa92c1cbb64c938833a8f3e3ffe20c"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa9fa92c1cbb64c938833a8f3e3ffe20c"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa9fa92c1cbb64c938833a8f3e3ffe20c"></a>January 8 in <strong id="b10680042131611"><a name="b10680042131611"></a><a name="b10680042131611"></a>MDY</strong> mode. August 1 in <strong id="b41541448121611"><a name="b41541448121611"></a><a name="b41541448121611"></a>DMY</strong> mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rc32939cd18c743d5a4cc4b68b2f0693e"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p449536615048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p449536615048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p449536615048"></a>1/18/1999</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p111462115048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p111462115048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p111462115048"></a>January 18 in <strong id="b89631215172"><a name="b89631215172"></a><a name="b89631215172"></a>MDY</strong> mode, rejected in other modes</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r5b77e741120f42ae9a1beab98f84b842"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac28f1aa4f4a4b18b4fd0059ad611df3"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac28f1aa4f4a4b18b4fd0059ad611df3"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac28f1aa4f4a4b18b4fd0059ad611df3"></a>01/02/03</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5d9f75796bfe4531a84f611e0642c49f"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5d9f75796bfe4531a84f611e0642c49f"></a><ul id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_u5d9f75796bfe4531a84f611e0642c49f"><li>January 2, 2003 in <strong id="b0928171515174"><a name="b0928171515174"></a><a name="b0928171515174"></a>MDY</strong> mode</li><li>February 1, 2003 in <strong id="b15818132719175"><a name="b15818132719175"></a><a name="b15818132719175"></a>DMY</strong> mode</li><li>February 3, 2001 in <strong id="b1897034617175"><a name="b1897034617175"></a><a name="b1897034617175"></a>YMD</strong> mode</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r05fdc7dd3ea2469e88695b44eff3416a"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a377222bf265248008b120b4f43c534bf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a377222bf265248008b120b4f43c534bf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a377222bf265248008b120b4f43c534bf"></a>1999-Jan-08</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a13d4ff073df844bfa165e76b6fac15d1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a13d4ff073df844bfa165e76b6fac15d1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a13d4ff073df844bfa165e76b6fac15d1"></a>January 8 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r062b92971a2e42e992d75aa43cbb360d"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aefa38e5f7b9c41d38d4ae96e821d0b0a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aefa38e5f7b9c41d38d4ae96e821d0b0a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aefa38e5f7b9c41d38d4ae96e821d0b0a"></a>Jan-08-1999</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a794d8203babb47db80f27ec166d1b1c5"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a794d8203babb47db80f27ec166d1b1c5"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a794d8203babb47db80f27ec166d1b1c5"></a>January 8 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rab0f4d0ea0d744acbf426f7f5441195c"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af4d01a6c3fd446feb97955ff0baf3314"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af4d01a6c3fd446feb97955ff0baf3314"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af4d01a6c3fd446feb97955ff0baf3314"></a>08-Jan-1999</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa680ff9a19eb4ab683a479af46574ddb"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa680ff9a19eb4ab683a479af46574ddb"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa680ff9a19eb4ab683a479af46574ddb"></a>January 8 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r6e3674edb316431ea82905deedc36100"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9665c54e993d42f48c3b387577cd58c7"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9665c54e993d42f48c3b387577cd58c7"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9665c54e993d42f48c3b387577cd58c7"></a>99-Jan-08</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4588b5ee2a0d4509ac40068d298e72b8"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4588b5ee2a0d4509ac40068d298e72b8"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4588b5ee2a0d4509ac40068d298e72b8"></a>January 8 in <strong id="b86281746151810"><a name="b86281746151810"></a><a name="b86281746151810"></a>YMD</strong> mode, else error</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_racc29f23d1d248c8a3c153c9c5013266"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa71ab89d4a3a4619a4d43015105fe2db"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa71ab89d4a3a4619a4d43015105fe2db"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa71ab89d4a3a4619a4d43015105fe2db"></a>08-Jan-99</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afa0f5fb460f345158f89fa97dba8c44c"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afa0f5fb460f345158f89fa97dba8c44c"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afa0f5fb460f345158f89fa97dba8c44c"></a>January 8, except error in <strong id="b13893115818189"><a name="b13893115818189"></a><a name="b13893115818189"></a>YMD</strong> mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r3d7d70e2bd634085b707488da328d0bc"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a16fd1c616c0a4ee0820075f563a6927e"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a16fd1c616c0a4ee0820075f563a6927e"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a16fd1c616c0a4ee0820075f563a6927e"></a>Jan-08-99</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a20052f8c6c674aa79607a244b821c0f0"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a20052f8c6c674aa79607a244b821c0f0"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a20052f8c6c674aa79607a244b821c0f0"></a>January 8, except error in <strong id="b19940101261919"><a name="b19940101261919"></a><a name="b19940101261919"></a>YMD</strong> mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r659b46bf58804aaa89615a568b4e707e"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac38075fa6d0d4f538f10740a5650b626"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac38075fa6d0d4f538f10740a5650b626"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac38075fa6d0d4f538f10740a5650b626"></a>19990108</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9cbc9e5121f64c669687bddd965cd158"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9cbc9e5121f64c669687bddd965cd158"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a9cbc9e5121f64c669687bddd965cd158"></a>ISO 8601. January 8, 1999 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r14a8c0ecb3e64d918c249116a63f92da"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adf4fa0ea87274f3b9f52b620c08509b8"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adf4fa0ea87274f3b9f52b620c08509b8"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adf4fa0ea87274f3b9f52b620c08509b8"></a>990108</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa34de3151954ac38b972764b0c4f42d"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa34de3151954ac38b972764b0c4f42d"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aaa34de3151954ac38b972764b0c4f42d"></a>ISO 8601. January 8, 1999 in any mode</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r93b0f7e4c1b245dd9e1c7bdaeb348ae6"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a12556e97adda46f29201dfb1e55802b0"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a12556e97adda46f29201dfb1e55802b0"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a12556e97adda46f29201dfb1e55802b0"></a>1999.008</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2dab040c50c1482b89ea8e4c34217830"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2dab040c50c1482b89ea8e4c34217830"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2dab040c50c1482b89ea8e4c34217830"></a>Year and day of year</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r37f75ace5ac3427890d50081453350bd"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad1cc97df1347439ebffb0b6dbadd26cd"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad1cc97df1347439ebffb0b6dbadd26cd"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad1cc97df1347439ebffb0b6dbadd26cd"></a>J2451187</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fc3457008047bc99c1d0e22205b63f"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fc3457008047bc99c1d0e22205b63f"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a70fc3457008047bc99c1d0e22205b63f"></a>Julian date</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r2e4c88bb616f49b68ce175204f4e9c49"><td class="cellrowborder" valign="top" width="24.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abd549fa4133240799e7b39f934176d2e"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abd549fa4133240799e7b39f934176d2e"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abd549fa4133240799e7b39f934176d2e"></a>January 8, 99 BC</p>
</td>
<td class="cellrowborder" valign="top" width="75.38%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a21809d31de8d4583a6d561b5c1398558"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a21809d31de8d4583a6d561b5c1398558"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a21809d31de8d4583a6d561b5c1398558"></a>Year 99 BC</p>
</td>
</tr>
</tbody>
</table>

Example:

```
-- Create a table.
openGauss=# CREATE TABLE date_type_tab(coll date);

-- Insert data.
openGauss=# INSERT INTO date_type_tab VALUES (date '12-10-2010');

-- View data.
openGauss=# SELECT * FROM date_type_tab;
        coll         
---------------------
 2010-12-10 00:00:00
(1 row)

-- View the date format.
openGauss=# SHOW datestyle;
 DateStyle 
-----------
 ISO, MDY
(1 row)

-- Set the date format.
openGauss=# SET datestyle='YMD';
SET

-- Insert data.
openGauss=# INSERT INTO date_type_tab VALUES(date '2010-12-11');

-- View data.
openGauss=# SELECT * FROM date_type_tab;
        coll         
---------------------
 2010-12-10 00:00:00
 2010-12-11 00:00:00
(2 rows)

-- Delete the table.
openGauss=# DROP TABLE date_type_tab;
```

## Time<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_s6bc199a3d64b43999223aa9a9281a2d1"></a>

The time-of-day types are  **TIME \[\(p\)\] \[WITHOUT TIME ZONE\]**  and  **TIME \[\(p\)\] \[WITH TIME ZONE\]**.  **TIME**  alone is equivalent to  **TIME WITHOUT TIME ZONE**.

If a time zone is specified in the input for  **TIME WITHOUT TIME ZONE**, it is silently ignored.

For details about the time input types, see  [Table 3](#en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_tc5d1089552ca4fb2a9f5ba27767a26b6). For details about time zone input types, see  [Table 4](#en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_te78a582bdc984cd3b5ecac5502f7793e).

**Table  3**  Time input

<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_tc5d1089552ca4fb2a9f5ba27767a26b6"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r2fd7649d3da443eaa4645cda936dd630"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac511385849348aaa068350112bd20a9"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac511385849348aaa068350112bd20a9"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac511385849348aaa068350112bd20a9"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abc4c5854f82e407395d2b019392b232f"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abc4c5854f82e407395d2b019392b232f"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_abc4c5854f82e407395d2b019392b232f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r9d622182b2d444d4bcd3e1d0f51d055e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a200ab904b9604b8d8779eec8bf72e6db"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a200ab904b9604b8d8779eec8bf72e6db"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a200ab904b9604b8d8779eec8bf72e6db"></a>05:06.8</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad9f99cfe29f4411597558e9fce571834"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad9f99cfe29f4411597558e9fce571834"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad9f99cfe29f4411597558e9fce571834"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_re689bc735c3f437e8f8be44818d93bad"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af54d368fe0cf4be79e47979a7b97088b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af54d368fe0cf4be79e47979a7b97088b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af54d368fe0cf4be79e47979a7b97088b"></a>4:05:06</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad8f926bef2fb4842b6589429fa41dd56"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad8f926bef2fb4842b6589429fa41dd56"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad8f926bef2fb4842b6589429fa41dd56"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf20c4910163d4075b899e2491214eaac"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a1b635628c7154b0285b1247bf085bba1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a1b635628c7154b0285b1247bf085bba1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a1b635628c7154b0285b1247bf085bba1"></a>4:05</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa1b7e4def52b4402b6504c1d65744d27"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa1b7e4def52b4402b6504c1d65744d27"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aa1b7e4def52b4402b6504c1d65744d27"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r29ba71d96ccb4bf199fde0a8d92713aa"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a84ebaa61c0034341af6bff13aa0ce3b0"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a84ebaa61c0034341af6bff13aa0ce3b0"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a84ebaa61c0034341af6bff13aa0ce3b0"></a>40506</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee8af76c49964330a4ab9e6d19bc69a6"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee8af76c49964330a4ab9e6d19bc69a6"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee8af76c49964330a4ab9e6d19bc69a6"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r77b51b53cd8c4117bd9658d541e66279"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8f77577766c24abd8bfd61c45e83f317"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8f77577766c24abd8bfd61c45e83f317"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8f77577766c24abd8bfd61c45e83f317"></a>4:05 AM</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a05eb4a03d4614595af06efcbadf6cc13"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a05eb4a03d4614595af06efcbadf6cc13"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a05eb4a03d4614595af06efcbadf6cc13"></a>Same as 04:05. AM does not affect value</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r91b7c518b7ff4abe832f4db1b98cbee7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4b03d0dc423f4512bc7fb2d0192d8ce1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4b03d0dc423f4512bc7fb2d0192d8ce1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4b03d0dc423f4512bc7fb2d0192d8ce1"></a>4:05 PM</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adecfb7ffb0f9453f8cbdaa8af01b9bcf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adecfb7ffb0f9453f8cbdaa8af01b9bcf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adecfb7ffb0f9453f8cbdaa8af01b9bcf"></a>Same as 16:05. Input hour must be &lt;= 12</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf1f86583d7344898939040b5d0351132"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8e68f6d6e36f45cb98ab9d42f25966c1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8e68f6d6e36f45cb98ab9d42f25966c1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8e68f6d6e36f45cb98ab9d42f25966c1"></a>04:05:06.789-8</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b636d3efe334c30b22997e75fa95c5b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b636d3efe334c30b22997e75fa95c5b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b636d3efe334c30b22997e75fa95c5b"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ra6c16734131145eab38755f24a830da7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac605f20ba2cc4bf2b1bd4412169f67c1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac605f20ba2cc4bf2b1bd4412169f67c1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac605f20ba2cc4bf2b1bd4412169f67c1"></a>04:05:06-08:00</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ada21baaff2a1407da1cdc02c21fcd3cf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ada21baaff2a1407da1cdc02c21fcd3cf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ada21baaff2a1407da1cdc02c21fcd3cf"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf020ae9f8bab449aa7ed54fc5d862c6f"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p990957615048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p990957615048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p990957615048"></a>04:05-08:00</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adb1fb05417c64152b894b9745c274c02"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adb1fb05417c64152b894b9745c274c02"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_adb1fb05417c64152b894b9745c274c02"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r5b0bb33888d24c008b2e5b80504c098e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d45b5f8c3fb4656977956e509d2ec0a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d45b5f8c3fb4656977956e509d2ec0a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d45b5f8c3fb4656977956e509d2ec0a"></a>040506-08</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afb05d4a36a6f43a2b997e75241f6479f"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afb05d4a36a6f43a2b997e75241f6479f"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_afb05d4a36a6f43a2b997e75241f6479f"></a>ISO 8601</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r79e8b0d1cb814c49a3d3b53ba427b6e7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad0e2af37f5ad404fa4680e916bc20c76"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad0e2af37f5ad404fa4680e916bc20c76"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ad0e2af37f5ad404fa4680e916bc20c76"></a>04:05:06 PST</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p473172615048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p473172615048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p473172615048"></a>Time zone specified by abbreviation</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r10acb34ee1164aff89455f77df386415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2de0e842cad2414495ba283b12f19a0e"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2de0e842cad2414495ba283b12f19a0e"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2de0e842cad2414495ba283b12f19a0e"></a>2003-04-12 04:05:06 America/New_York</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a35be643d63a74e09bfcd7e2cc905abca"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a35be643d63a74e09bfcd7e2cc905abca"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a35be643d63a74e09bfcd7e2cc905abca"></a>Time zone specified by full name</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Time zone input

<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_te78a582bdc984cd3b5ecac5502f7793e"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r9cf868ff810946afa9edd67e70e3b5b6"><th class="cellrowborder" valign="top" width="40.98%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p662145115048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p662145115048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p662145115048"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="59.019999999999996%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2ad82645f92948e0b84f39744b8fb910"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2ad82645f92948e0b84f39744b8fb910"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2ad82645f92948e0b84f39744b8fb910"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r44c4bea164e94cf1949e21bb43ccd690"><td class="cellrowborder" valign="top" width="40.98%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a286007e7bca84d0787af618eaf0fc068"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a286007e7bca84d0787af618eaf0fc068"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a286007e7bca84d0787af618eaf0fc068"></a>PST</p>
</td>
<td class="cellrowborder" valign="top" width="59.019999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af8f52bca41ad4980a30ca92692e42c7b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af8f52bca41ad4980a30ca92692e42c7b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_af8f52bca41ad4980a30ca92692e42c7b"></a>Abbreviation (for Pacific Standard Time)</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r5b2adb593e414f7a8787b4a3cb18d32e"><td class="cellrowborder" valign="top" width="40.98%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68f5e386bfe4b3d8e906a2a8eca177b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68f5e386bfe4b3d8e906a2a8eca177b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac68f5e386bfe4b3d8e906a2a8eca177b"></a>America/New_York</p>
</td>
<td class="cellrowborder" valign="top" width="59.019999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2e269ebaef734f479ee6790b7c838077"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2e269ebaef734f479ee6790b7c838077"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2e269ebaef734f479ee6790b7c838077"></a>Full time zone name</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r642c8e41a6c5424a90c71e6d598c202b"><td class="cellrowborder" valign="top" width="40.98%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2752e550106c457a81083ac1de9a7186"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2752e550106c457a81083ac1de9a7186"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2752e550106c457a81083ac1de9a7186"></a>-8:00</p>
</td>
<td class="cellrowborder" valign="top" width="59.019999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a46a12cb4e0e94f12a3c9e6311ea5ce2d"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a46a12cb4e0e94f12a3c9e6311ea5ce2d"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a46a12cb4e0e94f12a3c9e6311ea5ce2d"></a>ISO-8601 offset for PST</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r2ed8207410d6489584929b4860d5354c"><td class="cellrowborder" valign="top" width="40.98%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac997dede0ff94d4e942a0f424afdbfde"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac997dede0ff94d4e942a0f424afdbfde"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac997dede0ff94d4e942a0f424afdbfde"></a>-800</p>
</td>
<td class="cellrowborder" valign="top" width="59.019999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f39dadfd5744fc49995386c6debad6a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f39dadfd5744fc49995386c6debad6a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f39dadfd5744fc49995386c6debad6a"></a>ISO-8601 offset for PST</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r1e3acf0c6c924bb0ba2b1cfe70517696"><td class="cellrowborder" valign="top" width="40.98%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8026ff7e63134014969ff5dc54094bf5"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8026ff7e63134014969ff5dc54094bf5"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8026ff7e63134014969ff5dc54094bf5"></a>-8</p>
</td>
<td class="cellrowborder" valign="top" width="59.019999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p514069015048"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p514069015048"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p514069015048"></a>ISO-8601 offset for PST</p>
</td>
</tr>
</tbody>
</table>

Example:

```
openGauss=# SELECT time '04:05:06';
   time   
----------
 04:05:06
(1 row)

openGauss=# SELECT time '04:05:06 PST';
   time   
----------
 04:05:06
(1 row)

openGauss=# SELECT time with time zone '04:05:06 PST';
   timetz    
-------------
 04:05:06-08
(1 row)
```

## Special Values<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_s91b61420accc4a48ae64b23ddd065f5f"></a>

The special values supported by openGauss are converted to common date/time values when being read. For details, see  [Table 5](#en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_t8366745d681748c28d5a76843c7f0d4b).

**Table  5**  Special values

<a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_t8366745d681748c28d5a76843c7f0d4b"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_re0c53a42f330454a876a6888531e4e0d"><th class="cellrowborder" valign="top" width="17.599999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8afe26658dc143c5a1a48a28208f5ddf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8afe26658dc143c5a1a48a28208f5ddf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a8afe26658dc143c5a1a48a28208f5ddf"></a>Input String</p>
</th>
<th class="cellrowborder" valign="top" width="29.43%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f9423dba59f4c4e9d65a9943ddacd0f"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f9423dba59f4c4e9d65a9943ddacd0f"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a6f9423dba59f4c4e9d65a9943ddacd0f"></a>Applicable Type</p>
</th>
<th class="cellrowborder" valign="top" width="52.96999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a439c72bb26784edabaca323ba58ac40a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a439c72bb26784edabaca323ba58ac40a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a439c72bb26784edabaca323ba58ac40a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf40e35b26a2a4204a8b339a6d952735e"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a773379708415436cbf4346aab05b521a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a773379708415436cbf4346aab05b521a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a773379708415436cbf4346aab05b521a"></a>epoch</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a302741ec5ca74b8380d096dc96e675d4"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a302741ec5ca74b8380d096dc96e675d4"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a302741ec5ca74b8380d096dc96e675d4"></a>date and timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a04e838536c1d4aa8996fab736a86f407"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a04e838536c1d4aa8996fab736a86f407"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a04e838536c1d4aa8996fab736a86f407"></a>1970-01-01 00:00:00+00 (Unix system time zero)</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rc7a8212d2dd346cbaea43f84f393baca"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4798818f8bff48b19cf08d0e35e6b004"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4798818f8bff48b19cf08d0e35e6b004"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4798818f8bff48b19cf08d0e35e6b004"></a>infinity</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p279834315023"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p279834315023"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p279834315023"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a81f1b31318f645e2aee4e8746d6fcbda"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a81f1b31318f645e2aee4e8746d6fcbda"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a81f1b31318f645e2aee4e8746d6fcbda"></a>Later than any other timestamps</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r00c8e066761e45acbd0210326bcfa4cd"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p747341315023"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p747341315023"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p747341315023"></a>-infinity</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4abca4c059bc4c4291b62051e62d7fca"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4abca4c059bc4c4291b62051e62d7fca"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4abca4c059bc4c4291b62051e62d7fca"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a58e944bb9cd44ceba9f122298f1e53a1"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a58e944bb9cd44ceba9f122298f1e53a1"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a58e944bb9cd44ceba9f122298f1e53a1"></a>Earlier than any other timestamps</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r654c4b1141bf4068961731e266eb3ff0"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5dc309f4fd604a8881ce507ae8cd3083"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5dc309f4fd604a8881ce507ae8cd3083"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5dc309f4fd604a8881ce507ae8cd3083"></a>now</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b27503fc2bf4146b8b514f6e1b9622a"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b27503fc2bf4146b8b514f6e1b9622a"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7b27503fc2bf4146b8b514f6e1b9622a"></a>date, time, and timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p510099115023"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p510099115023"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p510099115023"></a>Start time of the current transaction</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_r1c3086c78bef42169155feea5f0e2e43"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ae4c1d8e4e7674545be6091067d0a2411"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ae4c1d8e4e7674545be6091067d0a2411"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ae4c1d8e4e7674545be6091067d0a2411"></a>today</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p404532515023"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p404532515023"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_en-us_topic_0058965827_p404532515023"></a>date and timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d622e4587b64044bbac098cfed3d870"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d622e4587b64044bbac098cfed3d870"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a5d622e4587b64044bbac098cfed3d870"></a>Midnight today</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rebe511e0b6dd4f4d89f73fde6ddf1af5"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac7c26c073039404690f36cba47dec27b"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac7c26c073039404690f36cba47dec27b"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_ac7c26c073039404690f36cba47dec27b"></a>tomorrow</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a68e134f6377143e8ac4c04576c11b053"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a68e134f6377143e8ac4c04576c11b053"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a68e134f6377143e8ac4c04576c11b053"></a>date and timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeadfd82b69ef426ab4036569827bff84"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeadfd82b69ef426ab4036569827bff84"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aeadfd82b69ef426ab4036569827bff84"></a>Midnight tomorrow</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rf8aabadc25674a06b0c9c5db09d7b3fe"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2be6302e23f0413caf36f08259d15f59"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2be6302e23f0413caf36f08259d15f59"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a2be6302e23f0413caf36f08259d15f59"></a>yesterday</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4dc709eca5064e6ab6168b033e3ef9bf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4dc709eca5064e6ab6168b033e3ef9bf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a4dc709eca5064e6ab6168b033e3ef9bf"></a>date and timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee115833ef8f448993fd037ff661449e"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee115833ef8f448993fd037ff661449e"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aee115833ef8f448993fd037ff661449e"></a>Midnight yesterday</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_rd6dc4d62791741989c35afc766ad646e"><td class="cellrowborder" valign="top" width="17.599999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac7bc85127824d26b1e5d05a24255fdf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac7bc85127824d26b1e5d05a24255fdf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_aac7bc85127824d26b1e5d05a24255fdf"></a>allballs</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7faa7ea5c263483193e80096cdb7b552"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7faa7ea5c263483193e80096cdb7b552"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_a7faa7ea5c263483193e80096cdb7b552"></a>time</p>
</td>
<td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_add4eca0c469041ababc64e4755f48fbf"><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_add4eca0c469041ababc64e4755f48fbf"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_en-us_topic_0059779229_add4eca0c469041ababc64e4755f48fbf"></a>00:00:00.00 UTC</p>
</td>
</tr>
</tbody>
</table>

## Interval Input<a name="en-us_topic_0283136973_en-us_topic_0237121952_section1947184682711"></a>

The input of  **reltime**  can be any valid interval in text format. It can be a number \(negative numbers and decimals are also allowed\) or a specific time, which must be in SQL standard format, ISO-8601 format, or POSTGRES format. In addition, the text input needs to be enclosed with single quotation marks \(''\).

For details, see  [Table 6 Interval input](#en-us_topic_0283136973_en-us_topic_0237121952_table1747116463276).

**Table  6**  Interval input

<a name="en-us_topic_0283136973_en-us_topic_0237121952_table1747116463276"></a>
<table><thead align="left"><tr id="en-us_topic_0283136973_en-us_topic_0237121952_row146914611277"><th class="cellrowborder" valign="top" width="30.303030303030305%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136973_en-us_topic_0237121952_p174691446172714"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p174691446172714"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p174691446172714"></a>Input</p>
</th>
<th class="cellrowborder" valign="top" width="31.313131313131315%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136973_en-us_topic_0237121952_p446914682711"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p446914682711"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p446914682711"></a>Output</p>
</th>
<th class="cellrowborder" valign="top" width="38.38383838383839%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136973_en-us_topic_0237121952_p124691546122712"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p124691546122712"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p124691546122712"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136973_en-us_topic_0237121952_row5469124611272"><td class="cellrowborder" valign="top" width="30.303030303030305%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p54699468271"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p54699468271"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p54699468271"></a>60</p>
</td>
<td class="cellrowborder" valign="top" width="31.313131313131315%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p34691946152712"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p34691946152712"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p34691946152712"></a>2 mons</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="38.38383838383839%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p346964614279"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p346964614279"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p346964614279"></a>Numbers are used to indicate intervals. The default unit is day. Decimals and negative numbers are allowed. Particularly, a negative interval syntactically means how long before.</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row14691346122719"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1469174617276"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1469174617276"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1469174617276"></a>31.25</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1846924615270"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1846924615270"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1846924615270"></a>1 mons 1 days 06:00:00</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row1246964617272"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p44699467271"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p44699467271"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p44699467271"></a>-365</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p11469124612272"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p11469124612272"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p11469124612272"></a>-12 mons -5 days</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row1146915468274"><td class="cellrowborder" valign="top" width="30.303030303030305%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p18469184618277"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p18469184618277"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p18469184618277"></a>1 years 1 mons 8 days 12:00:00</p>
</td>
<td class="cellrowborder" valign="top" width="31.313131313131315%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p20469446152719"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p20469446152719"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p20469446152719"></a>1 years  1 mons 8 days 12:00:00</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="38.38383838383839%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1469174642719"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1469174642719"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1469174642719"></a>Intervals are in POSTGRES format. They can contain both positive and negative numbers and are case-insensitive. Output is a simplified POSTGRES interval converted from the input.</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row16469246112711"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1646974672712"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1646974672712"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1646974672712"></a>-13 months -10 hours</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1446914467279"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1446914467279"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1446914467279"></a>-1 years -25 days -04:00:00</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row44691346132718"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p0469446122718"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p0469446122718"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p0469446122718"></a>-2 YEARS +5 MONTHS 10 DAYS</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p1346974613278"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1346974613278"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p1346974613278"></a>-1 years -6 mons -25 days -06:00:00</p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row14471144615278"><td class="cellrowborder" valign="top" width="30.303030303030305%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p5469144642716"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p5469144642716"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p5469144642716"></a>P-1.1Y10M</p>
</td>
<td class="cellrowborder" valign="top" width="31.313131313131315%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p104711946162714"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p104711946162714"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p104711946162714"></a>-3 mons -5 days -06:00:00</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="38.38383838383839%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p15471134610272"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p15471134610272"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p15471134610272"></a>Intervals are in ISO-8601 format. They can contain both positive and negative numbers and are case-insensitive. Output is a simplified POSTGRES interval converted from the input.</p>
<p id="en-us_topic_0283136973_en-us_topic_0237121952_p144711546152719"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p144711546152719"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p144711546152719"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283136973_en-us_topic_0237121952_row947114612716"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p04717465272"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p04717465272"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p04717465272"></a>-12H</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136973_en-us_topic_0237121952_p947114611276"><a name="en-us_topic_0283136973_en-us_topic_0237121952_p947114611276"></a><a name="en-us_topic_0283136973_en-us_topic_0237121952_p947114611276"></a>-12:00:00</p>
</td>
</tr>
</tbody>
</table>

Example:

```
-- Create a table.
openGauss=# CREATE TABLE reltime_type_tab(col1 character(30), col2 reltime);

-- Insert data.
openGauss=# INSERT INTO reltime_type_tab VALUES ('90', '90');
openGauss=# INSERT INTO reltime_type_tab VALUES ('-366', '-366');
openGauss=# INSERT INTO reltime_type_tab VALUES ('1975.25', '1975.25');
openGauss=# INSERT INTO reltime_type_tab VALUES ('-2 YEARS +5 MONTHS 10 DAYS', '-2 YEARS +5 MONTHS 10 DAYS');
openGauss=# INSERT INTO reltime_type_tab VALUES ('30 DAYS 12:00:00', '30 DAYS 12:00:00');
openGauss=# INSERT INTO reltime_type_tab VALUES ('P-1.1Y10M', 'P-1.1Y10M');

-- View data.
openGauss=# SELECT * FROM reltime_type_tab;
              col1              |                col2                 
--------------------------------+-------------------------------------
 1975.25                        | 5 years 4 mons 29 days
 -2 YEARS +5 MONTHS 10 DAYS     | -1 years -6 mons -25 days -06:00:00
 P-1.1Y10M                      | -3 mons -5 days -06:00:00
 -366                           | -1 years -18:00:00
 90                             | 3 mons
 30 DAYS 12:00:00               | 1 mon 12:00:00
(6 rows)

-- Delete the table.
openGauss=# DROP TABLE reltime_type_tab;
```

