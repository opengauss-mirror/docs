# Date/Time Functions and Operators

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:25:56.661Z -->

## Date/Time Operators<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s0cc044f2acb04adb928696f1f6cfd13d"></a>

[!WARNING]Warning

When using date/time operators, use explicit type prefixes for the corresponding operands to ensure that the database parses the operands as expected and does not produce unexpected results. For example, the following example without explicit data types will produce an exception error.

```
SELECT date '2001-10-01' - '7' AS RESULT;
```

**Table 1**  Date/Time operators

<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_t7627d865a21f4b30ac6e5e866e112945"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r0713ea4802d24f6d9ae252dac1821b56"><th class="cellrowborder" valign="top" width="8%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p124931919640"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p124931919640"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p124931919640"></a>Operator</p></th>
<th class="cellrowborder" valign="top" width="92%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p44941419745"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p44941419745"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p44941419745"></a>Example</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_recfea0084b994c9fba55e35ba2458ae0"><td class="cellrowborder" rowspan="6" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p14494819745"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p14494819745"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p14494819745"></a>+</p></td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s4db82eb12b6545ba94e9dff751041317"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s4db82eb12b6545ba94e9dff751041317"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s4db82eb12b6545ba94e9dff751041317">openGauss=# SELECT date '2001-9-28' + integer '7' AS RESULT;
       result
---------------------
 2001-10-05 00:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r3ce9581f8cd0441ab168b350fbf41982"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sa674683243624ff3b91c72506248bbdf"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sa674683243624ff3b91c72506248bbdf"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sa674683243624ff3b91c72506248bbdf"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text206602157107"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text206602157107"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text206602157107"></a>openGauss=# </span>SELECT date '2001-09-28' + interval '1 hour' AS RESULT;
       result        
---------------------
 2001-09-28 01:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r00366a89aed0433fbf3d00e04fc97e24"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text115717166103"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text115717166103"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text115717166103"></a>openGauss=# </span>SELECT date '2001-09-28' + time '03:00' AS RESULT;
       result        
---------------------
 2001-09-28 03:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rcfdfd82422b544eaa62e4c8237e94a8d"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1266618176103"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1266618176103"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1266618176103"></a>openGauss=# </span>SELECT interval '1 day' + interval '1 hour' AS RESULT;
     result     
----------------
 1 day 01:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r83abf0efe923454ea92a09f023822493"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s337f56e1d7a6490699be6db701055445"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s337f56e1d7a6490699be6db701055445"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s337f56e1d7a6490699be6db701055445"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1648916187105"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1648916187105"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text1648916187105"></a>openGauss=# </span>SELECT timestamp '2001-09-28 01:00' + interval '23 hours' AS RESULT;
       result        
---------------------
 2001-09-29 00:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r82d8ccf039ef49588efaa24dbb9750e2"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text77011519141014"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text77011519141014"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text77011519141014"></a>openGauss=# </span>SELECT time '01:00' + interval '3 hours' AS RESULT;
  result  
----------
 04:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r38277996b8124e248d0e856c8051b63c"><td class="cellrowborder" rowspan="8" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p184972191743"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p184972191743"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p184972191743"></a>-</p></td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text687752019108"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text687752019108"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text687752019108"></a>openGauss=# </span>SELECT date '2001-10-01' - date '2001-09-28' AS RESULT;
 result
--------
   3days
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r181f878386c4439284eb322c01f06f85"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text168824214100"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text168824214100"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text168824214100"></a>openGauss=# </span>SELECT date '2001-10-01' - integer '7' AS RESULT;
       result        
---------------------
 2001-09-24 00:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r92be7a85b764414389129f5c055c9a84"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text12588182218105"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text12588182218105"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text12588182218105"></a>openGauss=# </span>SELECT date '2001-09-28' - interval '1 hour' AS RESULT;
       result        
---------------------
 2001-09-27 23:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r3861a0553f634989afce9a1b58aeacda"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text193461923101017"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text193461923101017"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text193461923101017"></a>openGauss=# </span>SELECT time '05:00' - time '03:00' AS RESULT;
  result  
----------
 02:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r2f6666eb2f50408cb24fc2b18b161bbc"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text143714248102"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text143714248102"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text143714248102"></a>openGauss=# </span>SELECT time '05:00' - interval '2 hours' AS RESULT;
  result  
----------
 03:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r215d98439aa7420780a627c27865ffbe"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text867532491012"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text867532491012"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text867532491012"></a>openGauss=# </span>SELECT timestamp '2001-09-28 23:00' - interval '23 hours' AS RESULT;
       result        
---------------------
 2001-09-28 00:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r3ff49a3cacfe418b8859d2dd150fea7d"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text319532511015"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text319532511015"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text319532511015"></a>openGauss=# </span>SELECT interval '1 day' - interval '1 hour' AS RESULT;
  result  
----------
 23:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r03b623e831e042499bad774c37a2f3aa"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text2056829131018"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text2056829131018"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text2056829131018"></a>openGauss=# </span>SELECT timestamp '2001-09-29 03:00' - timestamp '2001-09-27 12:00' AS RESULT;
     result     
----------------
 1 day 15:00:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r454027d9dd8a4073841cf8d560bf545d"><td class="cellrowborder" rowspan="3" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p95013196410"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p95013196410"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p95013196410"></a>*</p></td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text97886257107"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text97886257107"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text97886257107"></a>openGauss=# </span>SELECT 900 * interval '1 second' AS RESULT;
  result  
----------
 00:15:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r246946358d0b473e9eb3d56c5bffea3b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text14435526201017"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text14435526201017"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text14435526201017"></a>openGauss=# </span>SELECT 21 * interval '1 day' AS RESULT;
 result  
---------
 21 days
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r7eb34827830143e4850428a4c077314f"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s69903105ee884bd781355f84add1f92d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s69903105ee884bd781355f84add1f92d"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s69903105ee884bd781355f84add1f92d"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text13756152716106"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text13756152716106"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text13756152716106"></a>openGauss=# </span>SELECT double precision '3.5' * interval '1 hour' AS RESULT;
  result  
----------
 03:30:00
(1 row)</pre></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rfaf55a29a3de4817a74d5235d46c7056"><td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p250315194418"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p250315194418"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p250315194418"></a>/</p></td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf57ef2df809e416f981436600a31846b"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf57ef2df809e416f981436600a31846b"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sf57ef2df809e416f981436600a31846b"><span id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text750583417104"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text750583417104"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_text750583417104"></a>openGauss=# </span>SELECT interval '1 hour' / double precision '1.5' AS RESULT;
  result  
----------
 00:40:00
(1 row)</pre></td>
</tr>
</tbody>
</table>

## Date/Time Functions<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

- age(timestamp, timestamp)

    Description: Subtracts two parameters and returns the result in years, months, and days. If the subtraction result is negative, the function returns a negative value. Both input parameters can either have time zone or not have time zone.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT age(timestamp '2001-04-10', timestamp '1957-06-13');
               age           
    -------------------------
     43 years 9 mons 27 days
    (1 row)
    ```

- age\(timestamp\)

    Description: Subtracts the parameter from the current time. The input parameter can be with or without timezone.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT age(timestamp '1957-06-13');
               age           
    -------------------------
     60 years 2 mons 18 days
    (1 row)
    ```

- clock\_timestamp\(\)

    Description: Current timestamp of the real-time clock.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT clock_timestamp();
            clock_timestamp        
    -------------------------------
     2017-09-01 16:57:36.636205+08
    (1 row)
    ```

- current\_date

    Description: Current date.

    Return type: date

    Example:

    ```
    openGauss=# SELECT current_date;
        date    
    ------------
     2017-09-01
    (1 row)
    ```

- current_time

    Description: Current time.

    Return type: time with time zone

    Example:

    ```
    openGauss=# SELECT current_time;
           timetz       
    --------------------
     16:58:07.086215+08
    (1 row)
    ```

- current\_timestamp

    Description: Current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT current_timestamp;
           pg_systimestamp        
    ------------------------------
     2017-09-01 16:58:19.22173+08
    (1 row)
    ```

- date\_part(text, timestamp)

    Description: Obtains the value of a subfield in a date/time value, such as the year or hour. Equivalent to extract(field from timestamp).

    Timestamp types: abstime, date, interval, reltime, time with time zone, time without time zone, timestamp with time zone, timestamp without time zone.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT date_part('hour', timestamp '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

- date\_part\(text, interval\)

    Description: Obtains the value of a subfield in a date/time value. When obtaining the month value, if the month value is greater than 12, the modulo of 12 is taken. Equivalent to extract(field from timestamp).

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT date_part('month', interval '2 years 3 months');
     date_part 
    -----------
             3
    (1 row)
    ```

- date\_trunc\(text, timestamp\)

    Description: Truncates to the precision specified by the text parameter.

    Return type: interval, timestamp with time zone, timestamp without time zone

    Examples:

    ```
    openGauss=# SELECT date_trunc('hour', timestamp  '2001-02-16 20:38:40');
         date_trunc      
    ---------------------
     2001-02-16 20:00:00
    (1 row)
    ```

- trunc(timestamp)

    Description: Truncates by day by default.

    Example:

    ```
    openGauss=# SELECT trunc(timestamp  '2001-02-16 20:38:40');                                                                                                                                                                   trunc
    ---------------------
    2001-02-16 00:00:00
    (1 row)
    ```

- daterange(arg1, arg2)

    Description: Obtains time boundary information. arg1 and arg2 are of the date type.

    Return type: daterange

    Example:

    ```
    openGauss=# select daterange('2000-05-06','2000-08-08');
            daterange        
    -------------------------
     [2000-05-06,2000-08-08)
    (1 row)
    ```

- daterange\(arg1, arg2, text\)

    Description: Obtains time boundary information. arg1 and arg2 are of the date type, and text is of the text type.

    Return type: daterange

    Example:

    ```
    openGauss=# select daterange('2000-05-06','2000-08-08','[]');
            daterange        
    -------------------------
     [2000-05-06,2000-08-09)
    (1 row)
    ```

- extract\(field from timestamp\)

    Description: Obtains the hour value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT extract(hour from timestamp '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

- extract(field from interval)

    Description: Obtains the month value. If the value is greater than 12, the modulo of 12 is taken.

    Return type: double precision

    Examples:

    ```
    openGauss=# SELECT extract(month from interval '2 years 3 months');
     date_part 
    -----------
             3
    (1 row)
    ```

- isfinite(date)

    Description: Tests whether the date is valid.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(date '2001-02-16');
     isfinite 
    ----------
     t
    (1 row)
    ```

- isfinite(timestamp)

    Description: Tests whether the timestamp is finite.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(timestamp '2001-02-16 21:28:30');
     isfinite 
    ----------
     t
    (1 row)
    ```

- isfinite\(interval\)

    Description: Tests whether the interval is valid.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(interval '4 hours');
     isfinite 
    ----------
     t
    (1 row)
    ```

- justify\_days\(interval\)

    Description: Converts the time interval to units of months (30 days per month).

    Return type: interval

    Example:

    ```
    openGauss=# SELECT justify_days(interval '35 days');
     justify_days 
    --------------
     1 mon 5 days
    (1 row)
    ```

- justify_hours(interval)

    Description: Converts the time interval to units of days (24 hours per day).

    Return type: interval

    Example:

    ```
    openGauss=# SELECT JUSTIFY_HOURS(INTERVAL '27 HOURS');
     justify_hours  
    ----------------
     1 day 03:00:00
    (1 row)
    ```

- justify_interval(interval)

    Description: Combines `justify_days` and `justify_hours` to adjust the interval.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT JUSTIFY_INTERVAL(INTERVAL '1 MON -1 HOUR');
     justify_interval 
    ------------------
     29 days 23:00:00
    (1 row)
    ```

- localtime

    Description: Current time.

    Return type: time

    Example:

    ```
    openGauss=# SELECT localtime AS RESULT;
         result
    ----------------
     16:05:55.664681
    (1 row)
    ```

- localtimestamp

    Description: Current date and time.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT localtimestamp;
             timestamp          
    ----------------------------
     2017-09-01 17:03:30.781902
    (1 row)
    ```

- now()

    Description: Current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT now();
                  now              
    -------------------------------
     2017-09-01 17:03:42.549426+08
    (1 row)
    ```

- timenow

    Description: Current date and time.

    Return type: timestamp with time zone

    Examples:

    ```
    openGauss=# select timenow();
            timenow
    ------------------------
     2020-06-23 20:36:56+08
    (1 row)
    ```

- numtodsinterval(num, interval_unit)

    Description: Converts a number to the interval type. num is a numeric type number, and interval_unit is a fixed-format string ('DAY' | 'HOUR' | 'MINUTE' | 'SECOND').

    You can set the [IntervalStyle](../database_reference/locale_and_formatting.md) parameter to `a` for compatibility with the interval output format of this function.

    Example:

    ```
    openGauss=# SELECT numtodsinterval(100, 'HOUR');
     numtodsinterval 
    -----------------
     100:00:00
    (1 row)
    
    openGauss=# SET intervalstyle = a;
    SET
    openGauss=# SELECT numtodsinterval(100, 'HOUR');
            numtodsinterval
    -------------------------------
     +000000004 04:00:00.000000000
    (1 row)
    ```

- pg\_sleep\(seconds\)

    Description: Delays the server thread for the specified number of seconds.

    Return type: void

    Example:

    ```
    openGauss=# SELECT pg_sleep(10);
     pg_sleep 
    ----------
    
    (1 row)
    ```

- statement\_timestamp\(\)

    Description: Current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT statement_timestamp();
          statement_timestamp      
    -------------------------------
     2017-09-01 17:04:39.119267+08
    (1 row)
    ```

- sysdate

    Description: Current date and time.

    Return type: timestamp

    Examples:

    ```
    openGauss=# SELECT sysdate;
           sysdate       
    ---------------------
     2017-09-01 17:04:49
    (1 row)
    ```

- timeofday\(\)

    Description: Current date and time (like clock_timestamp, but returns text).

    Return type: text

    Examples:

    ```
    openGauss=# SELECT timeofday();
                  timeofday              
    -------------------------------------
     Fri Sep 01 17:05:01.167506 2017 CST
    (1 row)
    ```

- transaction\_timestamp\(\)

    Description: Current date and time, equivalent to `current_timestamp`.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT transaction_timestamp();
         transaction_timestamp     
    -------------------------------
     2017-09-01 17:05:13.534454+08
    (1 row)
    ```

- add_months(d,n)

    Description: Calculates the point in time d plus n months.

    d: A value of the timestamp type, or a value that can be implicitly converted to the timestamp type.

    n: A value of the INTEGER type, or a value that can be implicitly converted to the INTEGER type.

    Return type: timestamp

    Examples:

    ```
    openGauss=# SELECT add_months(to_date('2017-5-29', 'yyyy-mm-dd'), 11) FROM sys_dummy;
         add_months      
    ---------------------
     2018-04-29 00:00:00
    (1 row)
    ```

- last\_day\(d\)

    Description: Calculates the last day of the month for the point in time `d`.

    Return type: timestamp

    Examples:

    ```
    openGauss=# select last_day(to_date('2017-01-01', 'YYYY-MM-DD')) AS cal_result;
         cal_result      
    ---------------------
     2017-01-31 00:00:00
    (1 row)
    ```

- new_time(date, timezone1, timezone2)

    Description: Converts date from `timezone1` to the date and time corresponding to `timezone2`.

    Parameter type: timestamp without time zone, text, text

    Return type: timestamp without time zone

    Example:

    ```
    openGauss=# select new_time('2024-07-22 14:00:00', 'EST', 'PST');
          new_time
    ---------------------
     2024-07-22 11:00:00
    (1 row)
    ```

    > [!NOTE]Note
    >
    > 1. This function is supported only in A compatibility mode, that is, dbcompatibility = 'A'.
    >
    > 2. The input parameter date cannot be of the timestamp with time zone type.

- next\_day\(x,y\)

    Description: Computes the time of the next occurrence of a given weekday (y) starting from point in time x.

    Return type: timestamp

    Example:

    ```
    openGauss=# select next_day(timestamp '2017-05-25 00:00:00','Sunday')AS cal_result;
         cal_result      
    ---------------------
     2017-05-28 00:00:00
    (1 row)
    ```

- tinterval\(abstime, abstime \)

    Description: Creates a time interval using two absolute times.

    Return type: tinterval

    Example:

    ```
    openGauss=# call tinterval(abstime 'May 10, 1947 23:59:12', abstime 'Mon May  1 00:30:30 1995');
                          tinterval
    -----------------------------------------------------
     ["1947-05-10 23:59:12+09" "1995-05-01 00:30:30+08"]
    (1 row)
    ```

- tintervalend\(tinterval\)

    Description: Returns the end time of a tinterval.

    Return type: abstime

    Example:

    ```
    openGauss=# select tintervalend('["Sep 4, 1983 23:59:12" "Oct4, 1983 23:59:12"]');
          tintervalend
    ------------------------
     1983-10-04 23:59:12+08
    (1 row)
    ```

- tintervalrel\(tinterval\)

    Description: Computes and returns the relative time of a tinterval.

    Return type: reltime

    Example:

    ```
    openGauss=# select tintervalrel('["Sep 4, 1983 23:59:12" "Oct4, 1983 23:59:12"]');
     tintervalrel
    --------------
     1 mon
    (1 row)
    ```

- smalldatetime\_ge

    Description: Determines whether the first parameter is greater than or equal to the second parameter.

    Parameters: smalldatetime, smalldatetime

    Return type: boolean

- smalldatetime_cmp

    Description: Compares whether two smalldatetime values are equal.

    Parameters: smalldatetime, smalldatetime

    Return type: integer

- smalldatetime\_eq

    Description: Compares whether two smalldatetime values are equal.

    Parameters: smalldatetime, smalldatetime

    Return type: boolean

- smalldatetime\_gt

    Description: Determines whether the first parameter is greater than the second parameter.

    Parameters: smalldatetime, smalldatetime

    Return type: boolean

- smalldatetime\_hash

  Description: Computes the hash value corresponding to the timestamp.

  Parameters: smalldatetime

  Return type: integer

- smalldatetime\_in

  Description: Inputs a timestamp.

    Parameters: cstring, oid, integer

    Return type: smalldatetime

- smalldatetime\_larger

    Description: Returns the larger timestamp.

    Parameters: smalldatetime, smalldatetime

    Return type: smalldatetime

- smalldatetime\_le

    Description: Determines whether the first parameter is less than or equal to the second parameter.

    Parameters: smalldatetime, smalldatetime

    Return type: boolean

- smalldatetime\_lt

    Description: Determines whether the first argument is less than the second argument.

    Parameters: smalldatetime, smalldatetime

    Return type: boolean

- smalldatetime\_ne

  Description: Compares whether two timestamps are not equal.

  Parameters: smalldatetime, smalldatetime

  Return type: boolean

- smalldatetime\_out

  Description: Converts a timestamp to its external form.

  Parameters: smalldatetime

  Return type: cstring

- smalldatetime\_send

    Description: timestamp is converted to binary format.

    Parameters: smalldatetime

    Return type: bytea

- smalldatetime\_smaller

    Description: Returns the smaller of two smalldatetime values.

    Parameters: smalldatetime, smalldatetime

    Return type: smalldatetime

- smalldatetime_to_abstime

    Description: smalldatetime is converted to abstime.

    Parameters: smalldatetime

    Return type: abstime

- smalldatetime_to_time

    Description: Converts smalldatetime to time.

    Parameter: smalldatetime

    Return type: time without time zone

- smalldatetime\_to\_timestamp

    Description: Converts smalldatetime to timestamp.

    Parameters: <code>smalldatetime</code>

    Return type: <code>timestamp without time zone</code>

- smalldatetime\_to\_timestamptz

    Description: Converts <code>smalldatetime</code> to <code>timestamptz</code>.

    Parameters: <code>smalldatetime</code>

    Return type: timestamp with time zone

- smalldatetime_to_varchar2

    Description: Converts smalldatetime to varchar2.

    Parameters: smalldatetime

    Return type: character varying

    >[!NOTE]Note
    >
    >There are multiple ways to obtain the current time. Select an appropriate interface based on your actual business scenario:
    >
    >1. The following interfaces return values based on the start time of the current transaction:
>
    > ```
    > CURRENT_DATE CURRENT_TIME CURRENT_TIME(precision) CURRENT_TIMESTAMP(precision) LOCALTIME LOCALTIMESTAMP LOCALTIME(precision) LOCALTIMESTAMP(precision)
    >  ```
>
    > Among them, CURRENT_TIME and CURRENT_TIMESTAMP(precision) return values with time zone; LOCALTIME and LOCALTIMESTAMP return values without time zone. CURRENT_TIME, LOCALTIME, and LOCALTIMESTAMP can optionally accept a precision parameter, which causes the seconds field of the result to be rounded to the specified number of decimal places. If no precision parameter is specified, the result is given with the full available precision.
    > Because all these functions return results based on the start time of the current transaction, their values do not change throughout the entire duration of the transaction. This is considered a feature: the purpose is to allow a transaction to have a consistent notion of the "current" time, so that multiple modifications within the same transaction can carry the same timestamp.
    >
    >2. The following interfaces return the start time of the current statement:
>
    > ```
    > transaction_timestamp() statement_timestamp() now()
    >  ```
>
    > transaction_timestamp() is equivalent to CURRENT_TIMESTAMP(precision), but its name clearly reflects what it returns. statement_timestamp() returns the start time of the current statement (more precisely, the time when the last command from the client was received). statement_timestamp() and transaction_timestamp() return the same value during the first command of a transaction, but may differ in subsequent commands.
    > now() is equivalent to transaction_timestamp().
    > 1. The following interfaces return the real current time at the moment the function is called:
>
    >      ```
    >      clock_timestamp() timeofday() 
    >      ```
>
    >      clock_timestamp() returns the real current time, so its value can change even within the same SQL command. timeofday() is similar to clock_timestamp(); timeofday() also returns the real current time, but its result is a formatted text string rather than a timestamp with time zone value.

## TIMESTAMPDIFF<a name="zh-cn_topic_0283136846_section5629194495516"></a>

- **TIMESTAMPDIFF(**_unit, timestamp\_expr1, timestamp\_expr2_**)**

  The TIMESTAMPDIFF function calculates the difference between two date/time values (timestamp\_expr2 - timestamp\_expr1) and returns the result in the unit form. timestamp\_expr1 and timestamp\_expr2 must be value expressions of the timestamp, timestamptz, or date type. unit indicates the unit of the difference between the two dates.

  >[!NOTE]Note
  >
  >This function is only valid when openGauss is in MySQL compatibility mode (that is, dbcompatibility = 'B'). Other compatibility types do not support this function.
  >This function correctly emulates MySQL behavior only when the GUC parameter [dolphin.b_compatibility_mode](https://docs.opengauss.org/zh/docs/latest/extension_reference/extension_reference/plugin/dolphin_guc_parameters.md#section203671436825) is set to true/on.

- year

    Year.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(YEAR, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                  2
    (1 row)
    ```

- quarter

    Quarter.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(QUARTER, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                  8
    (1 row)
    ```

- month

    Month.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MONTH, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                 24
    (1 row)
    ```

- week

    Week.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(WEEK, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                104
    (1 row)
    ```

- day

    Day.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(DAY, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                730
    (1 row)
    ```

- hour

    Hour.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(HOUR, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
                  1
    (1 row)
    
    ```

- minute

    Minute.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MINUTE, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
                 61
    (1 row)
    
    ```

- second

    Second.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(SECOND, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
               3661
    (1 row)
    
    
    ```

- microseconds

    The seconds field (including fractional seconds) multiplied by 1,000,000.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MICROSECOND, '2020-01-01 10:10:10.000000', '2020-01-01 10:10:10.111111');
     timestamp_diff
    ----------------
             111111
    (1 row)
    
    ```

- timestamp\_expr with time zone

    ```
    openGauss=# SELECT TIMESTAMPDIFF(HOUR,'2020-05-01 10:10:10-01','2020-05-01 10:10:10-03');
     timestamp_diff
    ----------------
                  2
    (1 row)
    ```

## EXTRACT<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_scb40477163d740de80f0e984cad28e7b"></a>

- **EXTRACT**(field **FROM** source)

  The extract function retrieves subfields such as year and hour from date/time values. source must be a value expression of the timestamp, time, or interval type. (Expressions of the date type are cast to timestamp and can therefore also be used.) field is an identifier or string that specifies the field to extract from the source data. For most fields, the extract function returns a value of the double precision type. For fields such as TIMEZONE_REGION and TIMEZONE_ABBR, the extract function returns the text type. The value range of field is as follows.

- century

    Century.

    The first century starts from 0001-01-01 00:00:00 AD. This definition applies to all countries using the Gregorian calendar. There is no century 0, going directly from the 1st century BC to the 1st century AD.

    Example:

    ```
    openGauss=# SELECT EXTRACT(CENTURY FROM TIMESTAMP '2000-12-16 12:21:13');
     date_part 
    -----------
            20
    (1 row)
    ```

- day
    - If source is timestamp, indicates the day of the month (1-31).

        ```
        openGauss=# SELECT EXTRACT(DAY FROM TIMESTAMP '2001-02-16 20:38:40');
         date_part 
        -----------
                16
        (1 row)
        ```

    - If source is interval, indicates the number of days.

        ```
        openGauss=# SELECT EXTRACT(DAY FROM INTERVAL '40 days 1 minute');
         date_part 
        -----------
                40
        (1 row)
        ```

- decade

    Year divided by 10.

    ```
    openGauss=# SELECT EXTRACT(DECADE FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
           200
    (1 row)
    ```

- dow

    Day of the week, Sunday (0) to Saturday (6).

    ```
    openGauss=# SELECT EXTRACT(DOW FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             5
    (1 row)
    ```

- doy

    Day of year (1~365/366).

    ```
    openGauss=# SELECT EXTRACT(DOY FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            47
    (1 row)
    ```

- epoch
    - If source is timestamp with time zone, the number of seconds since 1970-01-01 00:00:00-00 UTC (the result may be negative);

        If source is date and timestamp, the number of seconds since 1970-01-01 00:00:00-00 local time;

        If source is interval, the total number of seconds in the interval.

        ```
        openGauss=# SELECT EXTRACT(EPOCH FROM TIMESTAMP WITH TIME ZONE '2001-02-16 20:38:40.12-08');
          date_part   
        --------------
         982384720.12
        (1 row)
        ```

        ```
        openGauss=# SELECT EXTRACT(EPOCH FROM INTERVAL '5 days 3 hours');
         date_part 
        -----------
            442800
        (1 row)
        ```

    - Method for converting epoch values to timestamps.

        ```
        openGauss=# SELECT TIMESTAMP WITH TIME ZONE 'epoch' + 982384720.12 * INTERVAL '1 second' AS RESULT;
                  result          
        ---------------------------
         2001-02-17 12:38:40.12+08
        (1 row)
        ```

- hour

    Hours field (0-23).

    ```
    openGauss=# SELECT EXTRACT(HOUR FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

- isodow

    Day of the week (1-7).

  Monday is 1 and Sunday is 7.

  >[!NOTE]Note
  >
  >This is the same as dow except for Sunday.

  ```
  openGauss=# SELECT EXTRACT(ISODOW FROM TIMESTAMP '2001-02-18 20:38:40');
   date_part 
  -----------
           7
  (1 row)
  ```

- isoyear

  The ISO 8601 standard year in a date (not applicable to intervals).

  Each ISO year begins on the Monday of the week containing January 4, so in early January or late December the ISO year may differ from the Gregorian year. For details, see the description of week below.

    ```
    openGauss=# SELECT EXTRACT(ISOYEAR FROM DATE '2006-01-01');
     date_part 
    -----------
          2005
    (1 row)
    ```

    ```
    openGauss=# SELECT EXTRACT(ISOYEAR FROM DATE '2006-01-02');
     date_part 
    -----------
          2006
    (1 row)
    ```

- microseconds

    The seconds field (including fractional seconds) multiplied by 1,000,000.

    ```
    openGauss=# SELECT EXTRACT(MICROSECONDS FROM TIME '17:12:28.5');
     date_part 
    -----------
      28500000
    (1 row)
    ```

- millennium

    Millennium.

    Years in the 20th century (years 19xx) are in the second millennium. The third millennium began on January 1, 2001 at midnight.

    ```
    openGauss=# SELECT EXTRACT(MILLENNIUM FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             3
    (1 row)
    ```

- milliseconds

    The seconds field (including fractional seconds) multiplied by 1000. Note that it includes the full seconds.

    ```
    openGauss=# SELECT EXTRACT(MILLISECONDS FROM TIME '17:12:28.5');
     date_part 
    -----------
         28500
    (1 row)
    ```

- minute

    Minutes field (0-59).

    ```
    openGauss=# SELECT EXTRACT(MINUTE FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            38
    (1 row)
    ```

- month

    If `source` is of the timestamp type, it indicates the month of the year (1–12).

    ```
    openGauss=# SELECT EXTRACT(MONTH FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             2
    (1 row)
    ```

    If `source` is of the interval type, it indicates the number of months, modulo 12 (0–11).

    ```
    openGauss=# SELECT EXTRACT(MONTH FROM INTERVAL '2 years 13 months');
     date_part 
    -----------
             1
    (1 row)
    ```

- quarter

    The quarter of the year in which the day falls (1–4).

    ```
    openGauss=# SELECT EXTRACT(QUARTER FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             1
    (1 row)
    ```

- second

    Seconds field, including fractional seconds (0-59).

    ```
    openGauss=# SELECT EXTRACT(SECOND FROM TIME '17:12:28.5');
     date_part 
    -----------
          28.5
    (1 row)
    ```

- timezone

    Time zone offset from UTC, in seconds. Positive values correspond to time zones east of UTC, and negative values correspond to time zones west of UTC.

- timezone\_hour

    Supports timestamp type input, such as timestamptz or timetz. For the timestamptz type, the hour component of the time zone offset of the **current session** is returned, rather than the hour component of the input time zone offset. For the timetz type, the hour component of the input time zone offset is returned. For other timestamp types, the input is first converted to timestamptz or timetz, and then the hour component of the time zone offset is returned.

    ```
    SET TIMEZONE TO 'Asia/Beijing';
    SELECT EXTRACT(TIMEZONE_HOUR FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
     date_part 
    -----------
             8
    (1 row)
    ```

- timezone\_minute

    Supports timestamp type input, such as timestamptz or timetz. For the timestamptz type, the minute part of the time zone offset of the **current session** is returned, not the minute part of the input time zone offset. For the timetz type, the minute part of the input time zone offset is returned. For other timestamp types, the input is first converted to timestamptz or timetz, and then the minute part of the time zone offset is returned.

    ```
    SET TIMEZONE TO 'Asia/Beijing';
    SELECT EXTRACT(TIMEZONE_MINUTE FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
     date_part 
    -----------
             0
    (1 row)
    ```

- week

    The number of the week of the year that the day is in. By definition (ISO 8601), the first week of a year contains January 4 of that year. (The ISO-8601 week starts on Monday.) In other words, the first Thursday of a year is in week 1 of that year.

    In the ISO definition, it is possible for early-January dates to be part of the 52nd or 53rd week of the previous year, and for late-December dates to be part of the first week of the next year. For example, 2005-01-01 is part of the 53rd week of year 2004, and 2006-01-01 is part of the 52nd week of year 2005, while 2012-12-31 is part of the first week of 2013. It is recommended that the isoyear field be used together with week to get consistent results.

    ```
    openGauss=# SELECT EXTRACT(WEEK FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             7
    (1 row)
    ```

- year

    Year field.

    ```
    openGauss=# SELECT EXTRACT(YEAR FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
          2001
    (1 row)
    ```

- timezone\_region

    Supports timestamp type input, such as timestamptz or timetz. For the timestamptz type, returns the time zone of the **current session**, rather than the time zone of the input. This is similar to timezone\_hour and timezone\_minute. For the timetz type, since the type itself does not contain time zone location information, Unknown is returned. For other timestamp types, the input is first converted to timestamptz or timetz, and then the corresponding result is returned.

    ```
    SET TIMEZONE TO 'Asia/Beijing';
    SELECT EXTRACT(TIMEZONE_REGION FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
    timezone_extract 
    ------------------
    Asia/Beijing
    (1 row)

    SET TIMEZONE TO 'UTC';
    SELECT EXTRACT(TIMEZONE_REGION FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
    timezone_extract 
    ------------------
    UTC
    (1 row)

    SELECT EXTRACT(TIMEZONE_REGION FROM TIMESTAMPTZ 'infinity');
    timezone_extract
    ------------------
    Unknown
    (1 row)
    ```

- timezone\_abbr

  Similar to `timezone_region`, it supports timestamp type input, such as timestamptz or timetz. For the timestamptz type, the time zone abbreviation of the **current session** is returned, rather than the time zone abbreviation of the input. This is similar to `timezone_hour` and `timezone_minute`. For the timetz type, since the type itself does not contain time zone location information, Unknown is returned. For other timestamp types, the input is first converted to timestamptz or timetz, and then the corresponding result is returned.

    ```
    SET TIMEZONE TO 'Asia/Beijing';
    SELECT EXTRACT(TIMEZONE_ABBR FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
    timezone_extract 
    ------------------
    CST
    (1 row)

    SET TIMEZONE TO 'UTC';
    SELECT EXTRACT(TIMEZONE_ABBR FROM TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
    timezone_extract 
    ------------------
    UTC
    (1 row)

    SELECT EXTRACT(TIMEZONE_ABBR FROM TIMESTAMPTZ 'infinity');
    timezone_extract
    ------------------
    Unknown
    (1 row)
    ```

## date\_part<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s099f9ebba99e42e6ad63f7aabdca375d"></a>

The date\_part function is modeled after the traditional Ingres function (this function is equivalent to the SQL standard function extract):

- **date\_part**\('field', source\)

The field parameter here must be a string, not a name. The valid fields are the same as those for extract. For details, see [EXTRACT](#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_scb40477163d740de80f0e984cad28e7b).

Example:

```
openGauss=# SELECT date_part('day', TIMESTAMP '2001-02-16 20:38:40');
 date_part 
-----------
        16
(1 row)
```

```
openGauss=# SELECT date_part('hour', INTERVAL '4 hours 3 minutes');
 date_part 
-----------
         4
(1 row)
```

[Table 3](#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_t2e5425ae98464c3dab59352ff3bfa786) shows the templates that can be used for formatting date and time values.

**Table 3**  Patterns for date/time formatting

<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_t2e5425ae98464c3dab59352ff3bfa786"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rbcd082d70e904e25b0d8b382f37fd6d6"><th class="cellrowborder" valign="top" width="15.09%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p18528719541"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p18528719541"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p18528719541"></a>Category</p></th>
<th class="cellrowborder" valign="top" width="26.179999999999996%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p35287192045"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p35287192045"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p35287192045"></a>Pattern</p></th>
<th class="cellrowborder" valign="top" width="58.730000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165281719841"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165281719841"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165281719841"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rab4b29bc7b3440ccbb0a8abf22fb60a1"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p652881912411"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p652881912411"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p652881912411"></a>Hour</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25285191413"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25285191413"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25285191413"></a>HH</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"></a>Hour of day (01-12)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r6594382a7c814d348992ef5011b617e2"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75285195419"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75285195419"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75285195419"></a>HH12</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"></a>Hour of day (01-12)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r81eba65f857b4f94b54d8f3aebb31372"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"></a>HH24</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p852917191042"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p852917191042"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p852917191042"></a>Hour of day (00-23)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rd08ad1cd69a84e48a1d367fcb3b808fe"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"></a>Minute</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p125291019442"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p125291019442"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p125291019442"></a>MI</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85291019742"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85291019742"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85291019742"></a>Minute (00-59)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r90db6f7efabc478aa68116c12fa107ad"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205291719948"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205291719948"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205291719948"></a>Second</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"></a>SS</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55306191245"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55306191245"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55306191245"></a>Second (00-59)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r58699cf32381467fbdc7473ad44fd281"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"></a>FF</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p653091911417"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p653091911417"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p653091911417"></a>Microseconds (000000-999999)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ra8e0d92511444ff383acd7bdf135ff16"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"></a>SSSSS</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p153116196411"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p153116196411"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p153116196411"></a>Seconds after midnight (0-86399)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r2e93f172c80647dbb0f7a0c8868c356e"><td class="cellrowborder" rowspan="2" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p20531419646"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p20531419646"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p20531419646"></a>AM/PM indicator</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15312194419"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15312194419"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15312194419"></a>AM or A.M.</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25314191847"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25314191847"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p25314191847"></a>AM indicator</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rc394aa7936924210bb1d93b722aa0471"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"></a>PM or P.M.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75319191442"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75319191442"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p75319191442"></a>PM indicator</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r488c0080f4ab4213876599d703f97cd2"><td class="cellrowborder" rowspan="13" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"></a>Year</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5531519946"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5531519946"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5531519946"></a>Y,YYY</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"></a>Year with comma (4 or more digits)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ra564e4d872684982bf4e05adc88b0569"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175312191444"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175312191444"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175312191444"></a>SYYYY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45328191142"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45328191142"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45328191142"></a>4-digit year with BC indicator</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_reb27879df6d242a6a9dfc6ccf67a8e85"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"></a>YYYY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"></a>Year (4 or more digits)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rf080ac45a82f44b28112a530f195512a"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165329192410"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165329192410"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165329192410"></a>YYY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165321219442"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165321219442"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p165321219442"></a>Last three digits of year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rbe7c90a4791346a5af08544a2af45bd4"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a076bab74e2d541048ae0905e12dca865"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a076bab74e2d541048ae0905e12dca865"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a076bab74e2d541048ae0905e12dca865"></a>YY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"></a>Last two digits of year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r9f5cb30f4d0c48a2b8c1ccf94abe6d90"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"></a>Y</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p13533719341"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p13533719341"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p13533719341"></a>Last digit of year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rf56e8b7b072045ca804d509c1ea28570"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p10533019844"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p10533019844"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p10533019844"></a>IYYY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p8533219245"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p8533219245"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p8533219245"></a>ISO year (4 or more digits)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r458ddbc8464846c08cb704dfcc0d3477"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"></a>IYY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af10a9222a1424b84ae624da854de49a1"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af10a9222a1424b84ae624da854de49a1"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_af10a9222a1424b84ae624da854de49a1"></a>Last three digits of ISO year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rb7ad7ec5876e421fb06d01d9c69becb5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p6534619246"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p6534619246"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p6534619246"></a>IY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55349191041"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55349191041"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p55349191041"></a>Last two digits of ISO year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r8505ee6e974e4cffb66e7319c3c68550"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45346197413"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45346197413"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p45346197413"></a>I</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15534719148"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15534719148"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15534719148"></a>Last digit of ISO year</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rc11aa765e94b493cb3998feaedb27ae6"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p053401911420"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p053401911420"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p053401911420"></a>RR</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_abcc8d45a6220434292689224cb6eb076"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_abcc8d45a6220434292689224cb6eb076"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_abcc8d45a6220434292689224cb6eb076"></a>last two digits of year (can store 20th century years in the 21st century)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r634c2ca0351844f398c031ea22daa27d"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"></a>RRRR</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85351419044"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85351419044"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85351419044"></a>Accepts a 4-digit or 2-digit year. If 2-digit, the return value is the same as RR; if 4-digit, the return value is the same as YYYY.</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_raad7e09772aa4f0c960c24d7b030557a"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_ul35357191746"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_ul35357191746"></a><ul id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_ul35357191746"><li>BC or B.C.</li><li>AD or A.D.</li></ul></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853515191347"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853515191347"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853515191347"></a>Era indicator. BC (Before Christ), AD (Anno Domini).</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r289ad94b8e8f4e27920572bfb448d727"><td class="cellrowborder" rowspan="4" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"></a>Month</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"></a>MONTH</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"></a>Full uppercase month name (blank-padded to 9 characters)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_re88041f224564a21a604d99ed85ff6e7"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155363191744"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155363191744"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155363191744"></a>MON</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85366191145"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85366191145"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p85366191145"></a>Abbreviated uppercase month name (3 characters)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_row3536019442"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15536319343"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15536319343"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15536319343"></a>MM</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253611191445"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253611191445"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253611191445"></a>Month number (01-12)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rd911b7e5722b459ab559c892e0d266c5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853717191148"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853717191148"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p853717191148"></a>RM</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195378191940"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195378191940"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195378191940"></a>Roman numeral month (I-XII; I=JAN) (uppercase)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r6f82ef58ecab43a98a2727d0f456e5bf"><td class="cellrowborder" rowspan="5" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"></a>Day</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"></a>DAY</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175372196418"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175372196418"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p175372196418"></a>Full uppercase day name (blank-padded to 9 characters)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_re51c7ab415914f5ab2a29126750477a1"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5057404a908b43f4ae528bfac895f198"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5057404a908b43f4ae528bfac895f198"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a5057404a908b43f4ae528bfac895f198"></a>DY</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p4537819843"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p4537819843"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p4537819843"></a>Abbreviated uppercase day name (3 characters)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rb1136801efef4b85bbdbefe4ede8cc46"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15371219944"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15371219944"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15371219944"></a>DDD</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"></a>Day of year (001-366)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rbb3c90bc9e0a4ae38f4e45277614ddda"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a440084cef552465fa004dcc60eff461a"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a440084cef552465fa004dcc60eff461a"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a440084cef552465fa004dcc60eff461a"></a>DD</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155381519043"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155381519043"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p155381519043"></a>Day of month (01-31)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r122681f00a9c44cd8b0e543d8ac21af7"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"></a>D</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195381219941"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195381219941"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p195381219941"></a>Day of week (1-7; Sunday is 1)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r139eebb8e69f47f4a6ffdd29caba834d"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p185380191140"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p185380191140"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p185380191140"></a>Week</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253871915420"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253871915420"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p253871915420"></a>W</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"></a>Week of month (1-5) (the first week starts on the first day of the month)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r0406314747f14783b3fe90ea841cd109"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"></a>WW</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205388193419"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205388193419"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205388193419"></a>Week of year (1-53) (the first week starts on the first day of the year)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r18e40e0334344f7ab7749f011306a762"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"></a>IW</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"></a>ISO week number of year (the first Thursday falls in week 1)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_rdf408bbb5b224a888c3509a74261acc7"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a38449677477e431e9044064f225ad844"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a38449677477e431e9044064f225ad844"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a38449677477e431e9044064f225ad844"></a>Century</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"></a>CC</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"></a>Century (2 digits) (the 21st century starts on 2001-01-01)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_ra0a469462c784ae69ce3c49f6d74103c"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"></a>Julian day</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205391019840"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205391019840"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p205391019840"></a>J</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5539219645"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5539219645"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p5539219645"></a>Julian day (number of days since January 1, 4712 BC)</p></td>
</tr>
<tr id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_r31fb9c88d1f840f18d5cdd310ac9f3a1"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"></a>Quarter</p></td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"></a>Q</p></td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15396191241"><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15396191241"></a><a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_zh-cn_topic_0058965855_p15396191241"></a>quarter</p></td>
</tr>
</tbody>
</table>

>[!NOTE]Note
>
>In the preceding table, the rules for RR year calculation are as follows:
>
>- The input two-digit year is between 00 and 49: if the last two digits of the current year are between 00 and 49, the first two digits of the return value year are the same as the first two digits of the current year; if the last two digits of the current year are between 50 and 99, the first two digits of the return value year are the first two digits of the current year plus 1.
>
>- The input two-digit year is between 50 and 99: if the last two digits of the current year are between 00 and 49, the first two digits of the return value year are the first two digits of the current year minus 1; if the last two digits of the current year are between 50 and 99, the first two digits of the return value year are the same as the first two digits of the current year.

## timezone\_extract<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_s099f9ebba99e42e6ad63f7aabdca375d"></a>

timezone_extract is an extension of the EXTRACT function, supporting two new formats: TIMEZONE\_REGION and TIMEZONE\_ABBR. When the TIMEZONE\_REGION and TIMEZONE\_ABBR keywords are used, EXTRACT calls the timezone_extract function. This feature allows extracting the time zone region name (such as "America/New_York") or abbreviation (such as "EST") from a timestamp with time zone information.

- **timezone\_extract\('**_field_**', **_source_**\)**

The field parameter here must be a string, not a name. Valid fields are TIMEZONE\_REGION and TIMEZONE\_ABBR.

Examples:

```
SET TIMEZONE TO 'Asia/Beijing';
SELECT timezone_extract('TIMEZONE_REGION', TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
timezone_extract 
------------------
Asia/Beijing
(1 row)

SET TIMEZONE TO 'UTC';
SELECT timezone_extract('TIMEZONE_REGION', TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
timezone_extract 
------------------
UTC
(1 row)
```

```
SET TIMEZONE TO 'Asia/Beijing';
SELECT timezone_extract('TIMEZONE_ABBR', TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
timezone_extract 
------------------
CST
(1 row)

SET TIMEZONE TO 'UTC';
SELECT timezone_extract('TIMEZONE_ABBR', TIMESTAMPTZ '2024-09-02 10:30:00 Europe/London');
timezone_extract 
------------------
UTC
(1 row)
```
