# Date and Time Processing Functions and Operators<a name="EN-US_TOPIC_0289900496"></a>

## Date and Time Operators<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s0cc044f2acb04adb928696f1f6cfd13d"></a>

>![](public_sys-resources/icon-warning.gif) **WARNING:** 
>When the user uses date/time operators, explicit type prefixes are modified for corresponding operands to ensure that the operands parsed by the database are consistent with what the user expects, and no unexpected results occur.
>For example, abnormal mistakes will occur in the following example without an explicit data type.
>```
>SELECT date '2001-10-01' - '7' AS RESULT;
>```

**Table  1**  Time and date operators

<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_t7627d865a21f4b30ac6e5e866e112945"></a>
<table><thead align="left"><tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r0713ea4802d24f6d9ae252dac1821b56"><th class="cellrowborder" valign="top" width="8%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p124931919640"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p124931919640"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p124931919640"></a>Operator</p>
</th>
<th class="cellrowborder" valign="top" width="92%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p44941419745"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p44941419745"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p44941419745"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_recfea0084b994c9fba55e35ba2458ae0"><td class="cellrowborder" rowspan="6" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p14494819745"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p14494819745"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p14494819745"></a>+</p>
</td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s4db82eb12b6545ba94e9dff751041317"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s4db82eb12b6545ba94e9dff751041317"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s4db82eb12b6545ba94e9dff751041317">openGauss=# SELECT date '2001-9-28' + integer '7' AS RESULT;
   result
------------
 2001-10-05
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r3ce9581f8cd0441ab168b350fbf41982"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sa674683243624ff3b91c72506248bbdf"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sa674683243624ff3b91c72506248bbdf"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sa674683243624ff3b91c72506248bbdf"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text206602157107"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text206602157107"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text206602157107"></a>openGauss=# </span>SELECT date '2001-09-28' + interval '1 hour' AS RESULT;
       result        
---------------------
 2001-09-28 01:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r00366a89aed0433fbf3d00e04fc97e24"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44575bbca543461f8dc2c6d2916753c8"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text115717166103"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text115717166103"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text115717166103"></a>openGauss=# </span>SELECT date '2001-09-28' + time '03:00' AS RESULT;
       result        
---------------------
 2001-09-28 03:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rcfdfd82422b544eaa62e4c8237e94a8d"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s102a8f1640474d89b8a25428e2914bef"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text1266618176103"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text1266618176103"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text1266618176103"></a>openGauss=# </span>SELECT interval '1 day' + interval '1 hour' AS RESULT;
     result     
----------------
 1 day 01:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r83abf0efe923454ea92a09f023822493"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s337f56e1d7a6490699be6db701055445"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s337f56e1d7a6490699be6db701055445"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s337f56e1d7a6490699be6db701055445"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text1648916187105"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text1648916187105"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text1648916187105"></a>openGauss=# </span>SELECT timestamp '2001-09-28 01:00' + interval '23 hours' AS RESULT;
       result        
---------------------
 2001-09-29 00:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r82d8ccf039ef49588efaa24dbb9750e2"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s44ee9c3895294aaa9016d6e7a4381c77"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text77011519141014"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text77011519141014"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text77011519141014"></a>openGauss=# </span>SELECT time '01:00' + interval '3 hours' AS RESULT;
  result  
----------
 04:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r38277996b8124e248d0e856c8051b63c"><td class="cellrowborder" rowspan="8" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p184972191743"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p184972191743"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p184972191743"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s14b49440bb334d4bbd1ec1575e63c132"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text687752019108"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text687752019108"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text687752019108"></a>openGauss=# </span>SELECT date '2001-10-01' - date '2001-09-28' AS RESULT;
 result
--------
  3days
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r181f878386c4439284eb322c01f06f85"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1135dacd169e4d6b8b94bb9757ba1d9d"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text168824214100"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text168824214100"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text168824214100"></a>openGauss=# </span>SELECT date '2001-10-01' - integer '7' AS RESULT;
       result        
---------------------
 2001-09-24 00:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r92be7a85b764414389129f5c055c9a84"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sc231d34fa22749d6b86d8a2f34b5b95d"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text12588182218105"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text12588182218105"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text12588182218105"></a>openGauss=# </span>SELECT date '2001-09-28' - interval '1 hour' AS RESULT;
       result        
---------------------
 2001-09-27 23:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r3861a0553f634989afce9a1b58aeacda"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s1abc070c8a444e6282a444f85ff76501"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text193461923101017"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text193461923101017"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text193461923101017"></a>openGauss=# </span>SELECT time '05:00' - time '03:00' AS RESULT;
  result  
----------
 02:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r2f6666eb2f50408cb24fc2b18b161bbc"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s255d2f1563de4c489a74f3390aee36d2"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text143714248102"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text143714248102"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text143714248102"></a>openGauss=# </span>SELECT time '05:00' - interval '2 hours' AS RESULT;
  result  
----------
 03:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r215d98439aa7420780a627c27865ffbe"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s86a8de2e5e8d48ff84b8846764390853"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text867532491012"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text867532491012"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text867532491012"></a>openGauss=# </span>SELECT timestamp '2001-09-28 23:00' - interval '23 hours' AS RESULT;
       result        
---------------------
 2001-09-28 00:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r3ff49a3cacfe418b8859d2dd150fea7d"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8ec4d1b3d81b4dc4ad777981c680c245"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text319532511015"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text319532511015"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text319532511015"></a>openGauss=# </span>SELECT interval '1 day' - interval '1 hour' AS RESULT;
  result  
----------
 23:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r03b623e831e042499bad774c37a2f3aa"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf96f600605134106b1a2705c9bd5258d"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text2056829131018"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text2056829131018"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text2056829131018"></a>openGauss=# </span>SELECT timestamp '2001-09-29 03:00' - timestamp '2001-09-27 12:00' AS RESULT;
     result     
----------------
 1 day 15:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r454027d9dd8a4073841cf8d560bf545d"><td class="cellrowborder" rowspan="3" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p95013196410"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p95013196410"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p95013196410"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_saa731e375d764ca7a183437aaaef86b2"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text97886257107"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text97886257107"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text97886257107"></a>openGauss=# </span>SELECT 900 * interval '1 second' AS RESULT;
  result  
----------
 00:15:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r246946358d0b473e9eb3d56c5bffea3b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s8694d28925aa452099ba59b19f7b611c"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text14435526201017"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text14435526201017"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text14435526201017"></a>openGauss=# </span>SELECT 21 * interval '1 day' AS RESULT;
 result  
---------
 21 days
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r7eb34827830143e4850428a4c077314f"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s69903105ee884bd781355f84add1f92d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s69903105ee884bd781355f84add1f92d"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s69903105ee884bd781355f84add1f92d"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text13756152716106"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text13756152716106"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text13756152716106"></a>openGauss=# </span>SELECT double precision '3.5' * interval '1 hour' AS RESULT;
  result  
----------
 03:30:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rfaf55a29a3de4817a74d5235d46c7056"><td class="cellrowborder" valign="top" width="8%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p250315194418"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p250315194418"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p250315194418"></a>/</p>
</td>
<td class="cellrowborder" valign="top" width="92%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf57ef2df809e416f981436600a31846b"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf57ef2df809e416f981436600a31846b"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sf57ef2df809e416f981436600a31846b"><span id="en-us_topic_0283136846_en-us_topic_0237121972_text750583417104"><a name="en-us_topic_0283136846_en-us_topic_0237121972_text750583417104"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_text750583417104"></a>openGauss=# </span>SELECT interval '1 hour' / double precision '1.5' AS RESULT;
  result  
----------
 00:40:00
(1 row)</pre>
</td>
</tr>
</tbody>
</table>

## Time/Date Functions<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

-   age\(timestamp, timestamp\)

    Description: Subtracts parameters, producing a result in YYYY-MM-DD format. If the result is negative, the returned result is also negative. The input parameters can contain timezone or not.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT age(timestamp '2001-04-10', timestamp '1957-06-13');
               age           
    -------------------------
     43 years 9 mons 27 days
    (1 row)
    ```

-   age\(timestamp\)

    Description: Minuses the current time with the parameter. The input parameter can contain timezone or not.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT age(timestamp '1957-06-13');
               age           
    -------------------------
     60 years 2 mons 18 days
    (1 row)
    ```

-   clock\_timestamp\(\)

    Description: Specifies the current timestamp of the real-time clock.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT clock_timestamp();
            clock_timestamp        
    -------------------------------
     2017-09-01 16:57:36.636205+08
    (1 row)
    ```

-   current\_date

    Description: Specifies the current date.

    Return type: date

    Example:

    ```
    openGauss=# SELECT current_date;
        date    
    ------------
     2017-09-01
    (1 row)
    ```

-   current\_time

    Description: Specifies the current time.

    Return type: time with time zone

    Example:

    ```
    openGauss=# SELECT current_time;
           timetz       
    --------------------
     16:58:07.086215+08
    (1 row)
    ```

-   current\_timestamp

    Description: Specifies the current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT current_timestamp;
           pg_systimestamp        
    ------------------------------
     2017-09-01 16:58:19.22173+08
    (1 row)
    ```

-   date\_part\(text, timestamp\)

    Description: Obtains the value of a subdomain in date or time, for example, the year or hour. It is equivalent to  **extract\(field from timestamp\)**.

    Timestamp types: abstime, date, interval, reltime, time with time zone, time without time zone, timestamp with time zone, timestamp without time zone

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT date_part('hour', timestamp '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

-   date\_part\(text, interval\)

    Description: Obtains the subdomain value of the date/time value. When obtaining the month value, if the value is greater than 12, obtain the remainder after it is divided by 12. It is equivalent to  **extract\(field from timestamp\)**.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT date_part('month', interval '2 years 3 months');
     date_part 
    -----------
             3
    (1 row)
    ```

-   date\_trunc\(text, timestamp\)

    Description: Truncates to the precision specified by  **text**.

    Return type: interval, timestamp with time zone, timestamp without time zone

    Example:

    ```
    openGauss=# SELECT date_trunc('hour', timestamp  '2001-02-16 20:38:40');
         date_trunc      
    ---------------------
     2001-02-16 20:00:00
    (1 row)
    ```

-   trunc\(timestamp\)

    Description: Truncates to day by default.

    Example:

    ```
    openGauss=# SELECT trunc(timestamp  '2001-02-16 20:38:40');                                                                                                                                                                   trunc
    ---------------------
    2001-02-16 00:00:00
    (1 row)
    ```

-   daterange\(arg1, arg2\)

    Description: Obtains time boundary information. The type of  **arg1**  and  **arg2**  is  **date**.

    Return type: daterange

    Example:

    ```
    openGauss=# select daterange('2000-05-06','2000-08-08');
            daterange        
    -------------------------
     [2000-05-06,2000-08-08)
    (1 row)
    ```

-   daterange\(arg1, arg2, text\)

    Description: Obtains time boundary information. The type of  **arg1**  and  **arg2**  is  **date**, and the type of  **text**  is  **text**.

    Return type: daterange

    Example:

    ```
    openGauss=# select daterange('2000-05-06','2000-08-08','[]');
            daterange        
    -------------------------
     [2000-05-06,2000-08-09)
    (1 row)
    ```

-   extract\(field from timestamp\)

    Description: Obtains the hour.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT extract(hour from timestamp '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

-   extract\(field from interval\)

    Description: Obtains the month. If the value is greater than 12, obtain the remainder after it is divided by 12.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT extract(month from interval '2 years 3 months');
     date_part 
    -----------
             3
    (1 row)
    ```

-   isfinite\(date\)

    Description: Tests for a valid date.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(date '2001-02-16');
     isfinite 
    ----------
     t
    (1 row)
    ```

-   isfinite\(timestamp\)

    Description: Tests for a valid timestamp.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(timestamp '2001-02-16 21:28:30');
     isfinite 
    ----------
     t
    (1 row)
    ```

-   isfinite\(interval\)

    Description: Tests for a valid interval.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isfinite(interval '4 hours');
     isfinite 
    ----------
     t
    (1 row)
    ```

-   justify\_days\(interval\)

    Description: Adjusts intervals to 30-day time periods, which are represented as months.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT justify_days(interval '35 days');
     justify_days 
    --------------
     1 mon 5 days
    (1 row)
    ```

-   justify\_hours\(interval\)

    Description: Sets the time interval in days \(24 hours is one day\).

    Return type: interval

    Example:

    ```
    openGauss=# SELECT JUSTIFY_HOURS(INTERVAL '27 HOURS');
     justify_hours  
    ----------------
     1 day 03:00:00
    (1 row)
    ```

-   justify\_interval\(interval\)

    Description: Adjusts  **interval**  using  **justify\_days**  and  **justify\_hours**.

    Return type: interval

    Example:

    ```
    openGauss=# SELECT JUSTIFY_INTERVAL(INTERVAL '1 MON -1 HOUR');
     justify_interval 
    ------------------
     29 days 23:00:00
    (1 row)
    ```

-   localtime

    Description: Specifies the current time.

    Return type: time

    Example:

    ```
    openGauss=# SELECT localtime AS RESULT;
         result
    ----------------
     16:05:55.664681
    (1 row)
    ```

-   localtimestamp

    Description: Specifies the current date and time.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT localtimestamp;
             timestamp          
    ----------------------------
     2017-09-01 17:03:30.781902
    (1 row)
    ```

-   now\(\)

    Description: Specifies the current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT now();
                  now              
    -------------------------------
     2017-09-01 17:03:42.549426+08
    (1 row)
    ```

-   timenow

    Description: Specifies the current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# select timenow();
            timenow
    ------------------------
     2020-06-23 20:36:56+08
    (1 row)
    ```

-   numtodsinterval\(num, interval\_unit\)

    Description: Converts a number to the interval type.  **num**  is a numeric-typed number.  **interval\_unit**  is a string in the following format: 'DAY' | 'HOUR' | 'MINUTE' | 'SECOND'

    You can set the  [IntervalStyle](en-us_topic_0289900528.md#en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s89302a8dcd7f46ecb7167574d6397dc0)  parameter to  **a**  to be compatible with the interval output format of the function.

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

-   pg\_sleep\(seconds\)

    Description: Specifies the delay time of the server thread in unit of second.

    Return type: void

    Example:

    ```
    openGauss=# SELECT pg_sleep(10);
     pg_sleep 
    ----------
    
    (1 row)
    ```

-   statement\_timestamp\(\)

    Description: Specifies the current date and time.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT statement_timestamp();
          statement_timestamp      
    -------------------------------
     2017-09-01 17:04:39.119267+08
    (1 row)
    ```

-   sysdate

    Description: Specifies the current date and time.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT sysdate;
           sysdate       
    ---------------------
     2017-09-01 17:04:49
    (1 row)
    ```

-   timeofday\(\)

    Description: Specifies the current date and time \(like  **clock\_timestamp**, but returned as a  **text**  string\)

    Return type: text

    Example:

    ```
    openGauss=# SELECT timeofday();
                  timeofday              
    -------------------------------------
     Fri Sep 01 17:05:01.167506 2017 CST
    (1 row)
    ```

-   transaction\_timestamp\(\)

    Description: Specifies the current date and time \(equivalent to  **current\_timestamp**\)

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT transaction_timestamp();
         transaction_timestamp     
    -------------------------------
     2017-09-01 17:05:13.534454+08
    (1 row)
    ```

-   add\_months\(d,n\)

    Description: Returns the date  *date*  plus  *integer*  months.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT add_months(to_date('2017-5-29', 'yyyy-mm-dd'), 11) FROM sys_dummy;
         add_months      
    ---------------------
     2018-04-29 00:00:00
    (1 row)
    ```

-   last\_day\(d\)

    Description: Returns the date of the last day of the month that contains  *date*.

    Return type: timestamp

    Example:

    ```
    openGauss=# select last_day(to_date('2017-01-01', 'YYYY-MM-DD')) AS cal_result;
         cal_result      
    ---------------------
     2017-01-31 00:00:00
    (1 row)
    ```


-   next\_day\(x,y\)

    Description: Calculates the time of the next week y started from x.

    Return type: timestamp

    Example:

    ```
    openGauss=# select next_day(timestamp '2017-05-25 00:00:00','Sunday')AS cal_result;
         cal_result      
    ---------------------
     2017-05-28 00:00:00
    (1 row)
    ```


-   tinterval\(abstime, abstime \)

    Description: Creates a time interval with two pieces of absolute time.

    Return type: tinterval

    Example:

    ```
    openGauss=# call tinterval(abstime 'May 10, 1947 23:59:12', abstime 'Mon May  1 00:30:30 1995');
                          tinterval
    -----------------------------------------------------
     ["1947-05-10 23:59:12+09" "1995-05-01 00:30:30+08"]
    (1 row)
    ```


-   tintervalend\(tinterval\)

    Description: Returns the end time of  **tinterval**.

    Return type: abstime

    Example:

    ```
    openGauss=# select tintervalend('["Sep 4, 1983 23:59:12" "Oct4, 1983 23:59:12"]');
          tintervalend
    ------------------------
     1983-10-04 23:59:12+08
    (1 row)
    ```


-   tintervalrel\(tinterval\)

    Description: Calculates and returns the relative time of  **tinterval**.

    Return type: reltime

    Example:

    ```
    openGauss=# select tintervalrel('["Sep 4, 1983 23:59:12" "Oct4, 1983 23:59:12"]');
     tintervalrel
    --------------
     1 mon
    (1 row)
    ```


-   smalldatetime\_ge

    Description: Checks whether the value of the first parameter is greater than or equal to that of the second parameter.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_cmp

    Description: Compares two smalldatetime values to check whether they are the same.

    Parameter: smalldatetime, smalldatetime

    Return type: integer

-   smalldatetime\_eq

    Description: Compares two smalldatetime values to check whether they are the same.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_gt

    Description: Determines whether the first parameter is greater than the second.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_hash

    Description: Calculates the hash value corresponding to a timestamp.

    Parameter: smalldatetime

    Return type: integer

-   smalldatetime\_in

    Description: Inputs a timestamp.

    Parameter: cstring, oid, integer

    Return type: smalldatetime

-   smalldatetime\_larger

    Description: Returns a larger timestamp.

    Parameter: smalldatetime, smalldatetime

    Return type: smalldatetime

-   smalldatetime\_le

    Description: Checks whether the value of the first parameter is less than or equal to that of the second parameter.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_lt

    Description: Determines whether the first parameter is less than the second parameter.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_ne

    Description: Compares two timestamps to check whether they are different.

    Parameter: smalldatetime, smalldatetime

    Return type: Boolean

-   smalldatetime\_out

    Description: Converts a timestamp into the external form.

    Parameter: smalldatetime

    Return type: cstring

-   smalldatetime\_send

    Description: Converts a timestamp to the binary format.

    Parameter: smalldatetime

    Return type: bytea

-   smalldatetime\_smaller

    Description: Returns a smaller smalldatetime.

    Parameter: smalldatetime, smalldatetime

    Return type: smalldatetime

-   smalldatetime\_to\_abstime

    Description: Converts smalldatetime to abstime.

    Parameter: smalldatetime

    Return type: abstime

-   smalldatetime\_to\_time

    Description: Converts smalldatetime to time.

    Parameter: smalldatetime

    Return type: time without time zone

-   smalldatetime\_to\_timestamp

    Description: Converts smalldatetime to timestamp.

    Parameter: smalldatetime

    Return type: timestamp without time zone

-   smalldatetime\_to\_timestamptz

    Description: Converts smalldatetime to timestamptz.

    Parameter: smalldatetime

    Return type: timestamp with time zone

-   smalldatetime\_to\_varchar2

    Description: Converts smalldatetime to varchar2.

    Parameter: smalldatetime

    Return type: character varying

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >There are multiple methods for obtaining the current time. Select an appropriate API based on the actual service scenario.
    >1.  The following APIs return values based on the start time of the current transaction:
    >  ```
    >  CURRENT_DATE CURRENT_TIME CURRENT_TIME(precision) CURRENT_TIMESTAMP(precision) LOCALTIME LOCALTIMESTAMP LOCALTIME(precision) LOCALTIMESTAMP(precision)
    >  ```
    >  **CURRENT\_TIME** and **CURRENT\_TIMESTAMP(precision)** transfer values with time zones. The values of **LOCALTIME** and **LOCALTIMESTAMP** do not contain time zone information. **CURRENT\_TIME**, **LOCALTIME**, and **LOCALTIMESTAMP** can be optionally attached with a precision parameter, which rounds the second field of the result to the specified decimal place. If there is no precision parameter, the result is given the full precision that can be obtained.
    >  Because these functions all return results by the start time of the current transaction, their values do not change throughout the transaction. We think this is a feature with the purpose to allow a transaction to have a consistent concept at the "current" time, so that multiple modifications in the same transaction can maintain the same timestamp.
    >
    >2.  The following APIs return the start time of the current statement:
    >  ```
    >  transaction_timestamp() statement_timestamp() now()
    >  ```
    >  **transaction\_timestamp\(\)** is equivalent to **CURRENT\_TIMESTAMP(precision)**, and its name clearly reflects its return value. **statement\_timestamp\(\)** returns the start time of the current statement (more accurately, the time when the last instruction is received from the client). The return values of **statement\_timestamp\(\)** and **transaction\_timestamp\(\)** are the same during the execution of the first instruction of a transaction, but may be different in subsequent instructions.
    >  **now\(\)** is equivalent to **transaction\_timestamp\(\)**.
    >  1.  The following APIs return the actual current time when the function is called:
    >      ```
    >      clock_timestamp() timeofday() 
    >      ```
    >      **clock\_timestamp\(\)** returns the actual "current" time, and its value changes even in the same SQL instruction. Similar to **clock\_timestamp\(\)**, **timeofday\(\)** also returns the actual current time. However, the result of **timeofday\(\)** is a formatted text string instead of a timestamp with time zone information.


## TIMESTAMPDIFF<a name="en-us_topic_0283136846_section5629194495516"></a>

-   **TIMESTAMPDIFF\(***unit , timestamp\*expr1, timestamp\_expr2_**\)**

The  **timestampdiff**  function returns the result of  **timestamp\_expr2**  –  **timestamp\_expr1**  in the specified unit.  **timestamp\_expr1**  and  **timestamp\_expr2**  must be value expressions of the  **timestamp**,  **timestamptz**, or** date**  type.  **unit**  determines the unit of the difference between two dates.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This function is valid only when openGauss is compatible with the MY type \(that is, dbcompatibility = 'B'\).

-   year

    Year.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(YEAR, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                  2
    (1 row)
    ```


-   quarter

    Quarter.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(QUARTER, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                  8
    (1 row)
    ```

-   month

    Month.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MONTH, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                 24
    (1 row)
    ```

-   week

    Week.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(WEEK, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                104
    (1 row)
    ```

-   day

    Day.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(DAY, '2018-01-01', '2020-01-01');
     timestamp_diff
    ----------------
                730
    (1 row)
    ```


-   hour

    Hour.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(HOUR, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
                  1
    (1 row)
    
    ```


-   minute

    Minute.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MINUTE, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
                 61
    (1 row)
    
    ```


-   second

    Second.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(SECOND, '2020-01-01 10:10:10', '2020-01-01 11:11:11');
     timestamp_diff
    ----------------
               3661
    (1 row)
    
    
    ```


-   microseconds

    The seconds column, including fractional parts, is multiplied by 1,000,000.

    ```
    openGauss=#  SELECT TIMESTAMPDIFF(MICROSECOND, '2020-01-01 10:10:10.000000', '2020-01-01 10:10:10.111111');
     timestamp_diff
    ----------------
             111111
    (1 row)
    
    ```

-   timestamp\_expr with the time zone

    ```
    openGauss=# SELECT TIMESTAMPDIFF(HOUR,'2020-05-01 10:10:10-01','2020-05-01 10:10:10-03');
     timestamp_diff
    ----------------
                  2
    (1 row)
    ```


## EXTRACT<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_scb40477163d740de80f0e984cad28e7b"></a>

-   **EXTRACT**\(field **FROM** source\)

The  **extract**  function retrieves subcolumns such as year or hour from date/time values.  **source**  must be a value expression of type  **timestamp**,  **time**, or  **interval**. \(Expressions of type  **date**  are cast to  **timestamp**  and can therefore be used as well.\)  **field**  is an identifier or string that selects what column to extract from the source value. The  **extract**  function returns values of type  **double precision**. The following are valid  **field**  names:

-   century

    The first century starts at 0001-01-01 00:00:00 AD. This definition applies to all Gregorian calendar countries. There is no century number 0. You go from  **–1**  century to  **1**  century.

    Example:

    ```
    openGauss=# SELECT EXTRACT(CENTURY FROM TIMESTAMP '2000-12-16 12:21:13');
     date_part 
    -----------
            20
    (1 row)
    ```

-   day
    -   For  **timestamp**  values, the day \(of the month\) column \(1–31\)

        ```
        openGauss=# SELECT EXTRACT(DAY FROM TIMESTAMP '2001-02-16 20:38:40');
         date_part 
        -----------
                16
        (1 row)
        ```

    -   For  **interval**  values, the number of days

        ```
        openGauss=# SELECT EXTRACT(DAY FROM INTERVAL '40 days 1 minute');
         date_part 
        -----------
                40
        (1 row)
        ```


-   decade

    Year column divided by 10

    ```
    openGauss=# SELECT EXTRACT(DECADE FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
           200
    (1 row)
    ```

-   dow

    Day of the week as Sunday \(**0**\) to Saturday \(**6**\)

    ```
    openGauss=# SELECT EXTRACT(DOW FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             5
    (1 row)
    ```

-   doy

    Day of the year \(1–365 or 366\)

    ```
    openGauss=# SELECT EXTRACT(DOY FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            47
    (1 row)
    ```

-   epoch
    -   For  **timestamp with time zone**  values, the number of seconds since 1970-01-01 00:00:00-00 UTC \(can be negative\).

        For  **date**  and  **timestamp**  values, the number of seconds since 1970-01-01 00:00:00-00 local time.

        For  **interval**  values, the total number of seconds in the interval.

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

    -   Way to convert an epoch value back to a timestamp

        ```
        openGauss=# SELECT TIMESTAMP WITH TIME ZONE 'epoch' + 982384720.12 * INTERVAL '1 second' AS RESULT;
                  result          
        ---------------------------
         2001-02-17 12:38:40.12+08
        (1 row)
        ```


-   hour

    Hour column \(0–23\)

    ```
    openGauss=# SELECT EXTRACT(HOUR FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            20
    (1 row)
    ```

-   isodow

    Day of the week \(1–7\)

    Monday is 1 and Sunday is 7.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This is identical to  **dow**  except for Sunday.

    ```
    openGauss=# SELECT EXTRACT(ISODOW FROM TIMESTAMP '2001-02-18 20:38:40');
     date_part 
    -----------
             7
    (1 row)
    ```

-   isoyear

    The ISO 8601 year that the date falls in \(not applicable to intervals\).

    Each ISO year begins with the Monday of the week containing January 4, so in early January or late December the ISO year may be different from the Gregorian year. See the  **week**  column for more information.

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

-   microseconds

    The seconds column, including fractional parts, is multiplied by 1,000,000.

    ```
    openGauss=# SELECT EXTRACT(MICROSECONDS FROM TIME '17:12:28.5');
     date_part 
    -----------
      28500000
    (1 row)
    ```

-   millennium

    Years in the 1900s are in the second millennium. The third millennium started from January 1, 2001.

    ```
    openGauss=# SELECT EXTRACT(MILLENNIUM FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             3
    (1 row)
    ```

-   milliseconds

    Seconds column, including fractional parts, is multiplied by 1000. Note that this includes full seconds.

    ```
    openGauss=# SELECT EXTRACT(MILLISECONDS FROM TIME '17:12:28.5');
     date_part 
    -----------
         28500
    (1 row)
    ```

-   minute

    Minutes column \(0–59\).

    ```
    openGauss=# SELECT EXTRACT(MINUTE FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
            38
    (1 row)
    ```

-   month

    For  **timestamp**  values, the specific month in the year \(1–12\).

    ```
    openGauss=# SELECT EXTRACT(MONTH FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             2
    (1 row)
    ```

    For  **interval**  values, the number of months, modulo 12 \(0–11\).

    ```
    openGauss=# SELECT EXTRACT(MONTH FROM INTERVAL '2 years 13 months');
     date_part 
    -----------
             1
    (1 row)
    ```

-   quarter

    Quarter of the year \(1–4\) that the date is in.

    ```
    openGauss=# SELECT EXTRACT(QUARTER FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             1
    (1 row)
    ```

-   second

    Seconds column, including fractional parts \(0–59\).

    ```
    openGauss=# SELECT EXTRACT(SECOND FROM TIME '17:12:28.5');
     date_part 
    -----------
          28.5
    (1 row)
    ```

-   timezone

    Time zone offset from UTC, measured in seconds. Positive values correspond to time zones east of UTC, negative values to zones west of UTC.

-   timezone\_hour

    Hour component of the time zone offset.

-   timezone\_minute

    Minute component of the time zone offset.

-   week

    Number of the week of the year that the day is in. By definition \(ISO 8601\), the first week of a year contains January 4 of that year. \(The ISO-8601 week starts on Monday.\) In other words, the first Thursday of a year is in week 1 of that year.

    Because of this, it is possible for early January dates to be part of the 52nd or 53rd week of the previous year, and late December dates to be part of the 1st week of the next year. For example,  **2005-01-01**  is part of the 53rd week of year 2004,  **2006-01-01**  is part of the 52nd week of year 2005, and  **2012-12-31**  is part of the 1st week of year 2013. You are advised to use the columns  **isoyear**  and  **week**  together to ensure consistency.

    ```
    openGauss=# SELECT EXTRACT(WEEK FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
             7
    (1 row)
    ```

-   year

    Year column.

    ```
    openGauss=# SELECT EXTRACT(YEAR FROM TIMESTAMP '2001-02-16 20:38:40');
     date_part 
    -----------
          2001
    (1 row)
    ```


## date\_part<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_s099f9ebba99e42e6ad63f7aabdca375d"></a>

The  **date\_part**  function is modeled on the traditional Ingres equivalent to the SQL-standard function  **extract**:

-   **date\_part**\('field', source\)

Note that here the  **field**  parameter needs to be a string value, not a name. The valid field names for  **date\_part**  are the same as for  **extract**. For details, see  [EXTRACT](#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_scb40477163d740de80f0e984cad28e7b).

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

[Table 3](#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_t2e5425ae98464c3dab59352ff3bfa786)  specifies the schema for formatting date and time values.

**Table  3**  Schema for formatting date and time

<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_t2e5425ae98464c3dab59352ff3bfa786"></a>
<table><thead align="left"><tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rbcd082d70e904e25b0d8b382f37fd6d6"><th class="cellrowborder" valign="top" width="15.09%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p18528719541"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p18528719541"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p18528719541"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="26.179999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p35287192045"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p35287192045"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p35287192045"></a>Format</p>
</th>
<th class="cellrowborder" valign="top" width="58.730000000000004%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165281719841"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165281719841"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165281719841"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rab4b29bc7b3440ccbb0a8abf22fb60a1"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p652881912411"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p652881912411"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p652881912411"></a>Hour</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25285191413"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25285191413"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25285191413"></a>HH</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad195111dcbc9494a8836baa904f374a9"></a>Number of hours in one day (01–12)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r6594382a7c814d348992ef5011b617e2"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75285195419"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75285195419"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75285195419"></a>HH12</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad3e61402701b48d4917b807d2e94f5d8"></a>Number of hours in one day (01–12)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r81eba65f857b4f94b54d8f3aebb31372"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96dfff74b17b448a88a69c8b018cdcaa"></a>HH24</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p852917191042"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p852917191042"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p852917191042"></a>Number of hours in one day (00–23)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rd08ad1cd69a84e48a1d367fcb3b808fe"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af22ef02cbd0740fa88214ed5760da9c6"></a>Minute</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p125291019442"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p125291019442"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p125291019442"></a>MI</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85291019742"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85291019742"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85291019742"></a>Minute (00–59)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r90db6f7efabc478aa68116c12fa107ad"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205291719948"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205291719948"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205291719948"></a>Second</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3d1a189d9fb443d6bc9da2c0f607ebc8"></a>SS</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55306191245"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55306191245"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55306191245"></a>Second (00–59)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r58699cf32381467fbdc7473ad44fd281"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a34d8bd7b566e4e91bf7be8e50e9aeb12"></a>FF</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p653091911417"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p653091911417"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p653091911417"></a>Microsecond (000000–999999)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ra8e0d92511444ff383acd7bdf135ff16"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a28ca1a2bd32f410b89695c434f48c78d"></a>SSSSS</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p153116196411"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p153116196411"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p153116196411"></a>Second after midnight (0–86399)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r2e93f172c80647dbb0f7a0c8868c356e"><td class="cellrowborder" rowspan="2" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p20531419646"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p20531419646"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p20531419646"></a>Morning and afternoon</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15312194419"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15312194419"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15312194419"></a>AM or A.M.</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25314191847"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25314191847"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p25314191847"></a>Morning identifier</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rc394aa7936924210bb1d93b722aa0471"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2b943adc54c6476ba802ee615bb004d1"></a>PM or P.M.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75319191442"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75319191442"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p75319191442"></a>Afternoon identifier</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r488c0080f4ab4213876599d703f97cd2"><td class="cellrowborder" rowspan="13" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a82d68aa89a0a41458c767fa1713772ac"></a>Year</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5531519946"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5531519946"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5531519946"></a>Y,YYY</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aed38ccbcf08b43d8a09a6c56372d6800"></a>Year with comma (with four digits or more)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ra564e4d872684982bf4e05adc88b0569"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175312191444"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175312191444"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175312191444"></a>SYYYY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45328191142"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45328191142"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45328191142"></a>Year with four digits BC</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_reb27879df6d242a6a9dfc6ccf67a8e85"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6f00fe3c7298404f9cb135e26ca73fa9"></a>YYYY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2fb2b05b1580494f9e869f1f33028da9"></a>Year (with four digits or more)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rf080ac45a82f44b28112a530f195512a"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165329192410"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165329192410"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165329192410"></a>YYY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165321219442"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165321219442"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p165321219442"></a>Last three digits of a year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rbe7c90a4791346a5af08544a2af45bd4"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a076bab74e2d541048ae0905e12dca865"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a076bab74e2d541048ae0905e12dca865"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a076bab74e2d541048ae0905e12dca865"></a>YY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4a6236fe416b4186ae302211eee849d2"></a>Last two digits of a year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r9f5cb30f4d0c48a2b8c1ccf94abe6d90"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad53dc286217d47cdbfcb16b7f45721a3"></a>Y</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p13533719341"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p13533719341"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p13533719341"></a>Last one digit of a year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rf56e8b7b072045ca804d509c1ea28570"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p10533019844"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p10533019844"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p10533019844"></a>IYYY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p8533219245"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p8533219245"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p8533219245"></a>ISO year (with four digits or more)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r458ddbc8464846c08cb704dfcc0d3477"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae4753f0cc8354d8f8a2cceeda035569c"></a>IYY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af10a9222a1424b84ae624da854de49a1"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af10a9222a1424b84ae624da854de49a1"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_af10a9222a1424b84ae624da854de49a1"></a>Last three digits of an ISO year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rb7ad7ec5876e421fb06d01d9c69becb5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p6534619246"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p6534619246"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p6534619246"></a>IY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55349191041"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55349191041"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p55349191041"></a>Last two digits of an ISO year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r8505ee6e974e4cffb66e7319c3c68550"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45346197413"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45346197413"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p45346197413"></a>I</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15534719148"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15534719148"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15534719148"></a>Last one digit of an ISO year</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rc11aa765e94b493cb3998feaedb27ae6"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p053401911420"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p053401911420"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p053401911420"></a>RR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_abcc8d45a6220434292689224cb6eb076"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_abcc8d45a6220434292689224cb6eb076"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_abcc8d45a6220434292689224cb6eb076"></a>Last two digits of a year (A year of the 20th century can be stored in the 21st century.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r634c2ca0351844f398c031ea22daa27d"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a3412d5f1b0e44a6ea0e7650799daf070"></a>RRRR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85351419044"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85351419044"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85351419044"></a>Capable of receiving a year with four digits or two digits. If there are 2 digits, the value is the same as the returned value of RR. If there are 4 digits, the value is the same as YYYY.</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_raad7e09772aa4f0c960c24d7b030557a"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_ul35357191746"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_ul35357191746"></a><ul id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_ul35357191746"><li>BC or B.C.</li><li>AD or A.D.</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853515191347"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853515191347"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853515191347"></a>Era indicator Before Christ (BC) and After Christ (AD)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r289ad94b8e8f4e27920572bfb448d727"><td class="cellrowborder" rowspan="4" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5fd1ff5935cf42feb29adfc382fbbd44"></a>Month</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_acabd19c36a974a07a8f811744e19b3ea"></a>MONTH</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ad9cfd6c723404daab9a0bc0bae030c21"></a>Full spelling of a month in uppercase (9 characters are filled in if the value is empty.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_re88041f224564a21a604d99ed85ff6e7"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155363191744"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155363191744"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155363191744"></a>MON</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85366191145"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85366191145"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p85366191145"></a>Month in abbreviated format in uppercase (with three characters)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_row3536019442"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15536319343"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15536319343"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15536319343"></a>MM</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253611191445"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253611191445"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253611191445"></a>Month (01–12)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rd911b7e5722b459ab559c892e0d266c5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853717191148"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853717191148"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p853717191148"></a>RM</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195378191940"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195378191940"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195378191940"></a>Month in Roman numerals (I–XII; I=JAN) and uppercase</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r6f82ef58ecab43a98a2727d0f456e5bf"><td class="cellrowborder" rowspan="5" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ae3a9bdf160b84925b70d87a42a743a8a"></a>Day</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa8d5c498486b445399be93eba8ad0228"></a>DAY</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175372196418"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175372196418"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p175372196418"></a>Full spelling of a date in uppercase (9 characters are filled in if the value is empty.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_re51c7ab415914f5ab2a29126750477a1"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5057404a908b43f4ae528bfac895f198"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5057404a908b43f4ae528bfac895f198"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a5057404a908b43f4ae528bfac895f198"></a>DY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p4537819843"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p4537819843"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p4537819843"></a>Day in abbreviated format in uppercase (with three characters)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rb1136801efef4b85bbdbefe4ede8cc46"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15371219944"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15371219944"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15371219944"></a>DDD</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4c42fc06650f45e0a8a3a73aa27b0af2"></a>Day in a year (001–366)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rbb3c90bc9e0a4ae38f4e45277614ddda"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a440084cef552465fa004dcc60eff461a"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a440084cef552465fa004dcc60eff461a"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a440084cef552465fa004dcc60eff461a"></a>DD</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155381519043"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155381519043"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p155381519043"></a>Day in a month (01–31)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r122681f00a9c44cd8b0e543d8ac21af7"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a6fa7a87a42dd45a0a4480115f9bc7e3f"></a>D</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195381219941"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195381219941"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p195381219941"></a>Day in a week (1–7).</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r139eebb8e69f47f4a6ffdd29caba834d"><td class="cellrowborder" rowspan="3" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p185380191140"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p185380191140"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p185380191140"></a>Week</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253871915420"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253871915420"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p253871915420"></a>W</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a1703e31d90dd4c5bbefedf4e3c4c97f7"></a>Week in a month (1–5) (The first week starts from the first day of the month.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r0406314747f14783b3fe90ea841cd109"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ada3dc28ecd694cc89778af0ae76b31ae"></a>WW</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205388193419"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205388193419"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205388193419"></a>Week in a year (1–53) (The first week starts from the first day of the year.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r18e40e0334344f7ab7749f011306a762"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_aa4a9c568b436427fbc8255c0c0c10603"></a>IW</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a4aa8a94c3ae54e3d864ac554dce8a98d"></a>Week in an ISO year (The first Thursday is in the first week.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_rdf408bbb5b224a888c3509a74261acc7"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a38449677477e431e9044064f225ad844"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a38449677477e431e9044064f225ad844"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a38449677477e431e9044064f225ad844"></a>Century</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a96d13a0b2c4d44ddaabd5b54b8a2056d"></a>CC</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ac5562a09da054191b7b959f1e5f0e461"></a>Century (with two digits) (The 21st century starts from 2001-01-01.)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_ra0a469462c784ae69ce3c49f6d74103c"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a659e4aa9f81c48138582b9c8c5b9a5b7"></a>Julian date</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205391019840"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205391019840"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p205391019840"></a>J</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5539219645"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5539219645"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p5539219645"></a>Julian date (starting from January 1 of 4712 BC)</p>
</td>
</tr>
<tr id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_r31fb9c88d1f840f18d5cdd310ac9f3a1"><td class="cellrowborder" valign="top" width="15.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a2faa2aaa167d489eaec4b7cceac1d98e"></a>Quarter</p>
</td>
<td class="cellrowborder" valign="top" width="26.179999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_a94f2e03e536f4980a70c5438f1f2b347"></a>Q</p>
</td>
<td class="cellrowborder" valign="top" width="58.730000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15396191241"><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15396191241"></a><a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_en-us_topic_0058965855_p15396191241"></a>Quarter</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the table, the rules for RR to calculate years are as follows:
>-   If the range of the input two-digit year is between 00 and 49:
>    If the last two digits of the current year are between 00 and 49, the first two digits of the returned year are the same as the first two digits of the current year.
>    If the last two digits of the current year are between 50 and 99, the first two digits of the returned year equal to the first two digits of the current year plus 1.
>-   If the range of the input two-digit year is between 50 and 99:
>    If the last two digits of the current year are between 00 and 49, the first two digits of the returned year equal to the first two digits of the current year minus 1.
>    If the last two digits of the current year are between 50 and 99, the first two digits of the returned year are the same as the first two digits of the current year.
