# Logical Operators<a name="EN-US_TOPIC_0289900814"></a>

The usual logical operators include AND, OR, and NOT. SQL uses a three-valued logical system with true, false, and null, which represents "unknown". Their priorities are NOT \> AND \> OR.

[Table 1](#en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_table261968)  lists the calculation rules, where a and b represent logical expressions.

**Table  1**  Operation rules

<a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_table261968"></a>
<table><thead align="left"><tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row14174287"><th class="cellrowborder" valign="top" width="17.858214178582145%" id="mcps1.2.6.1.1"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"></a>a</p>
</th>
<th class="cellrowborder" valign="top" width="16.91830816918308%" id="mcps1.2.6.1.2"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"></a>b</p>
</th>
<th class="cellrowborder" valign="top" width="22.187781221877813%" id="mcps1.2.6.1.3"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"></a>a <strong id="en-us_topic_0237121965_b8430162211297"><a name="en-us_topic_0237121965_b8430162211297"></a><a name="en-us_topic_0237121965_b8430162211297"></a>AND</strong> b Result</p>
</th>
<th class="cellrowborder" valign="top" width="24.047595240475953%" id="mcps1.2.6.1.4"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"></a>a <strong id="en-us_topic_0237121965_b028664262919"><a name="en-us_topic_0237121965_b028664262919"></a><a name="en-us_topic_0237121965_b028664262919"></a>OR</strong> b Result</p>
</th>
<th class="cellrowborder" valign="top" width="18.988101189881014%" id="mcps1.2.6.1.5"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"></a><strong id="en-us_topic_0237121965_b329575692917"><a name="en-us_topic_0237121965_b329575692917"></a><a name="en-us_topic_0237121965_b329575692917"></a>NOT</strong> a Result</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row35808814"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row11193076"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row34418071"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row43573962"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"></a>TRUE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row13720756"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"></a>TRUE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row28321591"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"></a>NULL</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The operators AND and OR are commutative, that is, you can switch the left and right operand without affecting the result.

