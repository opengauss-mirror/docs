# Overview<a name="EN-US_TOPIC_0246507971"></a>

## Background<a name="en-us_topic_0237121112_en-us_topic_0059778562_sf060bc235e8f4b7c817de579b31cc45a"></a>

Database security is essential for a database system. openGauss writes all user operations in the database to audit logs. Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

You need to know the following about the audit function:

-   The overall audit switch  **[audit\_enabled](audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_sb3d1b703f24c49f096b36087a60fdfcd)**  supports dynamic loading. After you change the switch status when the database is running, the change takes effect immediately and you do not need to restart the database. Its default value is  **on**, indicating that the audit function is enabled.
-   In addition to the overall audit switch, each audit item has an independent switch. The audit function takes effect only after its own switch is enabled.
-   The switch of each audit supports dynamic loading. After changing the switch status of an audit item when the database is running, the modification takes effect immediately and you do not need to restart the database.

[Table 1](#en-us_topic_0237121112_en-us_topic_0059778562_t126500e4696c4a9fadb15d0437679eb0)  describes the audit items supported by openGauss.

**Table  1**  Audit items

<a name="en-us_topic_0237121112_en-us_topic_0059778562_t126500e4696c4a9fadb15d0437679eb0"></a>
<table><thead align="left"><tr id="en-us_topic_0237121112_en-us_topic_0059778562_r0b843d1d06a0484ab0fcf1e550daff80"><th class="cellrowborder" valign="top" width="26.31%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a5c0058a08fed4b39b7323377de447381"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5c0058a08fed4b39b7323377de447381"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5c0058a08fed4b39b7323377de447381"></a>Configuration Item</p>
</th>
<th class="cellrowborder" valign="top" width="73.69%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a8c536fdd99a4428296a5917f9c7cf7a1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8c536fdd99a4428296a5917f9c7cf7a1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8c536fdd99a4428296a5917f9c7cf7a1"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121112_en-us_topic_0059778562_rfe324f6ce2c944ff87b8d858cc1ff586"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab2c7e44b637742808724a5e65c4b89d1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab2c7e44b637742808724a5e65c4b89d1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab2c7e44b637742808724a5e65c4b89d1"></a>User login and logout audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a0e156259cae240eb9ce09913b52ab8ba"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0e156259cae240eb9ce09913b52ab8ba"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0e156259cae240eb9ce09913b52ab8ba"></a>Parameter: <strong id="b192073430466"><a name="b192073430466"></a><a name="b192073430466"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_se04dd9d17c9445579ca268e0f74196fe">audit_login_logout</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_afb8d0844dc70406fa9e5b85d673b0e58"><a name="en-us_topic_0237121112_en-us_topic_0059778562_afb8d0844dc70406fa9e5b85d673b0e58"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_afb8d0844dc70406fa9e5b85d673b0e58"></a>Its default value is <strong>7</strong>, which indicates that the function of user login and logout audit is enabled. <strong>0</strong> indicates that the function of user login and logout audit is disabled. Other values are not recommended.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r79bc503c624b494eb1c9321510058024"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a07b04dbae63243fca93720fc4ce182ac"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a07b04dbae63243fca93720fc4ce182ac"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a07b04dbae63243fca93720fc4ce182ac"></a>Database startup, stop, recovery, and switchover audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a9a7f72f7a99d4609b883c8353db56246"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a9a7f72f7a99d4609b883c8353db56246"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a9a7f72f7a99d4609b883c8353db56246"></a>Parameter: <strong id="b1914016610474"><a name="b1914016610474"></a><a name="b1914016610474"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s07b9d958cde04d6483123181f665ad5c">audit_database_process</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_aa69d93031ef04a2f91e1f22109bc1932"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa69d93031ef04a2f91e1f22109bc1932"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa69d93031ef04a2f91e1f22109bc1932"></a>Its default value is <strong>1</strong>, which indicates that the audit of database startup, stop, recovery, and switchover is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rf92bb8580d024e48a355748ff5227d73"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a655a487adfe54812af53ddec9284e3b2"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a655a487adfe54812af53ddec9284e3b2"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a655a487adfe54812af53ddec9284e3b2"></a>User locking and unlocking audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a37afcb84d7404e00b70f1cd1c289f68b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a37afcb84d7404e00b70f1cd1c289f68b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a37afcb84d7404e00b70f1cd1c289f68b"></a>Parameter: <strong id="b54551418144714"><a name="b54551418144714"></a><a name="b54551418144714"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_sf87eea8d8fd949708f022da99dad9ba0">audit_user_locked</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a09022720e5654f558a40f2ac6a0860cf"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a09022720e5654f558a40f2ac6a0860cf"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a09022720e5654f558a40f2ac6a0860cf"></a>Its default value is <strong id="b85791210165815"><a name="b85791210165815"></a><a name="b85791210165815"></a>1</strong>, which indicates that the audit of user locking and unlocking is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r8433e205485745f58e106fbcc60b0e37"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a0c1475831a3e41d8a59de03beb86a613"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0c1475831a3e41d8a59de03beb86a613"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0c1475831a3e41d8a59de03beb86a613"></a>Unauthorized access audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3153b838b4434fe9881db0890aad80ac"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3153b838b4434fe9881db0890aad80ac"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3153b838b4434fe9881db0890aad80ac"></a>Parameter: <strong id="b1026642604711"><a name="b1026642604711"></a><a name="b1026642604711"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s37b4430358614a999e2bb0404b01d450">audit_user_violation</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a7fce2ecbb9c5473d9b9c9fdc5c559819"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7fce2ecbb9c5473d9b9c9fdc5c559819"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7fce2ecbb9c5473d9b9c9fdc5c559819"></a>Its default value is <strong>0</strong>, which indicates that the audit of unauthorized access is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r11165a83d6674d9fa8bb98767a81bf7d"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p496750517858"><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p496750517858"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p496750517858"></a>Permission granting and revoking audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a4ef9d7a20803442398b8cf50fc222ce6"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4ef9d7a20803442398b8cf50fc222ce6"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4ef9d7a20803442398b8cf50fc222ce6"></a>Parameter: <strong id="b7996153594714"><a name="b7996153594714"></a><a name="b7996153594714"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s052b24b790e04c878234dd665e06b9bb">audit_grant_revoke</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a88f8beac1fbe445a9315d25b76df55e8"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a88f8beac1fbe445a9315d25b76df55e8"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a88f8beac1fbe445a9315d25b76df55e8"></a>Its default value is <strong>1</strong>, which indicates that the audit of permission granting and revoking is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r600272270ca0412886ef56deded334c9"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p749978617858"><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p749978617858"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p749978617858"></a>Audit of <strong id="b3554451165810"><a name="b3554451165810"></a><a name="b3554451165810"></a>CREATE</strong>, <strong id="b96387534585"><a name="b96387534585"></a><a name="b96387534585"></a>ALTER</strong>, and <strong id="b178742552582"><a name="b178742552582"></a><a name="b178742552582"></a>DROP</strong> operations on database objects</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p350291217858"><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p350291217858"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p350291217858"></a>Parameter: <strong id="b14548124612477"><a name="b14548124612477"></a><a name="b14548124612477"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s05a5cf2a231d43d8aa731caae59abb33">audit_system_object</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a639bf531b2164ed9866666fbd104e42f"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a639bf531b2164ed9866666fbd104e42f"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a639bf531b2164ed9866666fbd104e42f"></a>Its default value is <strong id="b19640239115812"><a name="b19640239115812"></a><a name="b19640239115812"></a>12295</strong>, which indicates that the <strong id="b137772375914"><a name="b137772375914"></a><a name="b137772375914"></a>CREATE</strong>, <strong id="b1177717320594"><a name="b1177717320594"></a><a name="b1177717320594"></a>ALTER</strong>, and <strong id="b167771334597"><a name="b167771334597"></a><a name="b167771334597"></a>DROP</strong> operations only on databases, schemas, users, data sources, and node groups are audited.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r6ceb54a7bd094668a24690a160697b02"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a800222e642f94ad8a27ad7b5a44096e6"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a800222e642f94ad8a27ad7b5a44096e6"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a800222e642f94ad8a27ad7b5a44096e6"></a>Audit of <strong>INSERT</strong>, <strong>UPDATE</strong>, and <strong>DELETE</strong> operations on a specific table</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a587721009e6b455e8ee80d238ff5b66e"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a587721009e6b455e8ee80d238ff5b66e"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a587721009e6b455e8ee80d238ff5b66e"></a>Parameter: <strong id="b19820145184717"><a name="b19820145184717"></a><a name="b19820145184717"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s761d19195b7b48e0b74f40375efd4ea7">audit_dml_state</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_aca2ad0a5cb3a46e084c3ee06dc35b667"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aca2ad0a5cb3a46e084c3ee06dc35b667"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aca2ad0a5cb3a46e084c3ee06dc35b667"></a>Its default value is <strong id="b2091410165910"><a name="b2091410165910"></a><a name="b2091410165910"></a>0</strong>, which indicates that the audit of DML operations (except <strong id="b6310191635910"><a name="b6310191635910"></a><a name="b6310191635910"></a>SELECT</strong>) on a specific table is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rb8a8401d098e41f9a8f781607207409f"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a702491703be94186a2f8964a0d844e92"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a702491703be94186a2f8964a0d844e92"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a702491703be94186a2f8964a0d844e92"></a><strong id="b2477161901"><a name="b2477161901"></a><a name="b2477161901"></a>SELECT</strong> operation audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a13d372fcb37e4bb1820b1e0cb797287a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a13d372fcb37e4bb1820b1e0cb797287a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a13d372fcb37e4bb1820b1e0cb797287a"></a>Parameter: <strong id="b0471057204719"><a name="b0471057204719"></a><a name="b0471057204719"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sdfed1641d0c54ed7bf034d9207ad4fc2">audit_dml_state_select</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_af905f9cb14f04dafb9f9b018ff68f810"><a name="en-us_topic_0237121112_en-us_topic_0059778562_af905f9cb14f04dafb9f9b018ff68f810"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_af905f9cb14f04dafb9f9b018ff68f810"></a>Its default value is <strong id="b1329474817594"><a name="b1329474817594"></a><a name="b1329474817594"></a>0</strong>, which indicates that the audit of the <strong id="b182213526599"><a name="b182213526599"></a><a name="b182213526599"></a>SELECT</strong> operation is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r58695781de2b4ba395128044deca1da3"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_adf4f7540742746099a12eb1148ad5b92"><a name="en-us_topic_0237121112_en-us_topic_0059778562_adf4f7540742746099a12eb1148ad5b92"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_adf4f7540742746099a12eb1148ad5b92"></a><strong id="b167862098015"><a name="b167862098015"></a><a name="b167862098015"></a>COPY</strong> operation audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p242752717858"><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p242752717858"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p242752717858"></a>Parameter: <strong id="b930482184819"><a name="b930482184819"></a><a name="b930482184819"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s43b8457f811e417b9ad155b6218517a2">audit_copy_exec</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a7d591140ae774622a05529d8b7bfe454"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7d591140ae774622a05529d8b7bfe454"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7d591140ae774622a05529d8b7bfe454"></a>Its default value is <strong id="b1034016311105"><a name="b1034016311105"></a><a name="b1034016311105"></a>1</strong>, which indicates that the audit of the <strong id="b1353511258113"><a name="b1353511258113"></a><a name="b1353511258113"></a>COPY</strong> operation is abled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rd7ad0e4548514b69a0d9a6e47ea623b7"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aed95bc53745c435094aa935fab07b9d8"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aed95bc53745c435094aa935fab07b9d8"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aed95bc53745c435094aa935fab07b9d8"></a>Execution of stored procedures and customized functions</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_abc837cd944fb418fb2c42c5ae8d5b769"><a name="en-us_topic_0237121112_en-us_topic_0059778562_abc837cd944fb418fb2c42c5ae8d5b769"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_abc837cd944fb418fb2c42c5ae8d5b769"></a>Parameter: <strong id="b112927164811"><a name="b112927164811"></a><a name="b112927164811"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sfdce4770ba2543668b1e7d24d2738c13">audit_function_exec</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_a0462a874eab3424aa48f80c4aa75a9c9"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0462a874eab3424aa48f80c4aa75a9c9"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0462a874eab3424aa48f80c4aa75a9c9"></a>Its default value is <strong>0</strong>, which indicates that no execution audit logs of stored procedures and customized functions are recorded.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r3f0973e63c974dbd90755769fca230e5"><td class="cellrowborder" valign="top" width="26.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_adb0749386fb24914a54bc92e486a9b8c"><a name="en-us_topic_0237121112_en-us_topic_0059778562_adb0749386fb24914a54bc92e486a9b8c"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_adb0749386fb24914a54bc92e486a9b8c"></a><strong id="b1238820455111"><a name="b1238820455111"></a><a name="b1238820455111"></a>SET</strong> operation audit</p>
</td>
<td class="cellrowborder" valign="top" width="73.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a2599ec96fac24907b78d4baeb5dd9f96"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2599ec96fac24907b78d4baeb5dd9f96"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2599ec96fac24907b78d4baeb5dd9f96"></a>Parameter: <strong id="b17686812124811"><a name="b17686812124811"></a><a name="b17686812124811"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e">audit_set_parameter</a></strong></p>
<p id="en-us_topic_0237121112_en-us_topic_0059778562_aa2577fd4c68d4e57a79b72caf258daa2"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa2577fd4c68d4e57a79b72caf258daa2"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa2577fd4c68d4e57a79b72caf258daa2"></a>Its default value is <strong id="b15558952814"><a name="b15558952814"></a><a name="b15558952814"></a>1</strong>, which indicates that the audit of the <strong id="b1491225514113"><a name="b1491225514113"></a><a name="b1491225514113"></a>SET</strong> operation is enabled.</p>
</td>
</tr>
</tbody>
</table>

[Table 2](#en-us_topic_0237121112_en-us_topic_0059778562_t62477343f6ff4b3592c6ae8d040bc607)  lists security-related parameters and their default values.

**Table  2**  Security-related parameters and their default values

<a name="en-us_topic_0237121112_en-us_topic_0059778562_t62477343f6ff4b3592c6ae8d040bc607"></a>

<table><thead align="left"><tr id="en-us_topic_0237121112_en-us_topic_0059778562_r0da70ccd7633483daca2cd35818b4832"><th class="cellrowborder" valign="top" width="30.84%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab5376be6ed9245cb9e022c2ec8b81361"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab5376be6ed9245cb9e022c2ec8b81361"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab5376be6ed9245cb9e022c2ec8b81361"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="14.49%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6326d0f81f5b4ec09c5aa6e777282cb9"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6326d0f81f5b4ec09c5aa6e777282cb9"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6326d0f81f5b4ec09c5aa6e777282cb9"></a>Default Value</p>
</th>
<th class="cellrowborder" valign="top" width="54.669999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a2162892a9d1e47f491cecba3c75b500b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2162892a9d1e47f491cecba3c75b500b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2162892a9d1e47f491cecba3c75b500b"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121112_en-us_topic_0059778562_r6f7fb0ad4b5146c59f1509d3e2cf0082"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p973318015281"><a name="en-us_topic_0237121112_p973318015281"></a><a name="en-us_topic_0237121112_p973318015281"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa">ssl</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a2b81d308ed164247a0a23ffd76212439"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2b81d308ed164247a0a23ffd76212439"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a2b81d308ed164247a0a23ffd76212439"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aa3849ea0e43445e4af62e1afd467a68a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa3849ea0e43445e4af62e1afd467a68a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa3849ea0e43445e4af62e1afd467a68a"></a>Specifies whether the SSL connection is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_row109626571752"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1773110102820"><a name="en-us_topic_0237121112_p1773110102820"></a><a name="en-us_topic_0237121112_p1773110102820"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_section1652594319820">require_ssl</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_p0963157956"><a name="en-us_topic_0237121112_p0963157956"></a><a name="en-us_topic_0237121112_p0963157956"></a>off</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_p896311571759"><a name="en-us_topic_0237121112_p896311571759"></a><a name="en-us_topic_0237121112_p896311571759"></a>Specifies whether the server requires the SSL connection.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r462bf5a7ca25448d9d8c5c7f6c235a81"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1672814042810"><a name="en-us_topic_0237121112_p1672814042810"></a><a name="en-us_topic_0237121112_p1672814042810"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s83e68216730542489adc97d0ba080289">ssl_ciphers</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ae6216ab5b7be4b0699010d7a38ef3263"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae6216ab5b7be4b0699010d7a38ef3263"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae6216ab5b7be4b0699010d7a38ef3263"></a>ALL</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ac9b0b3cd446646d1b2e1d1cd15634228"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac9b0b3cd446646d1b2e1d1cd15634228"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac9b0b3cd446646d1b2e1d1cd15634228"></a>Encryption algorithm list supported by the SSL</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r956f973389bf48fabaabe831fc89caf7"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p972611082819"><a name="en-us_topic_0237121112_p972611082819"></a><a name="en-us_topic_0237121112_p972611082819"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s68c117bf68b5461091ef26231ceb314d">ssl_cert_file</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a1204c96b0db34be5b69e1ac50206f16b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1204c96b0db34be5b69e1ac50206f16b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1204c96b0db34be5b69e1ac50206f16b"></a>server.crt</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a1ad64a9e618b45ccb7c7873e04ec5156"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1ad64a9e618b45ccb7c7873e04ec5156"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1ad64a9e618b45ccb7c7873e04ec5156"></a>File containing the SSL server certificate</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r631e731380f544ffb698a58384c6f560"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p10723100202815"><a name="en-us_topic_0237121112_p10723100202815"></a><a name="en-us_topic_0237121112_p10723100202815"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s102e03361bf949d88525e779b5284404">ssl_key_file</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6cd85f13798d4530b74f5ec478e92dec"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6cd85f13798d4530b74f5ec478e92dec"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6cd85f13798d4530b74f5ec478e92dec"></a>server.key</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab0f78e64c55a435d968075080ac79c94"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab0f78e64c55a435d968075080ac79c94"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab0f78e64c55a435d968075080ac79c94"></a>File containing the SSL private key</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rbd65d91181694adda3363cd4a4732911"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p14720170162816"><a name="en-us_topic_0237121112_p14720170162816"></a><a name="en-us_topic_0237121112_p14720170162816"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_saaa8bf78f4314b5db5a3b6e9f06a96f9">ssl_ca_file</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ad836bf9cba054f998f1d3f4a7e1e1ecc"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ad836bf9cba054f998f1d3f4a7e1e1ecc"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ad836bf9cba054f998f1d3f4a7e1e1ecc"></a>cacert.pem</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab87d8e1921154d41b44e7ce667b5fb94"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab87d8e1921154d41b44e7ce667b5fb94"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab87d8e1921154d41b44e7ce667b5fb94"></a>File containing CA information</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r204da97ece50411fa9b5e3a9d13a2c59"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p371817014282"><a name="en-us_topic_0237121112_p371817014282"></a><a name="en-us_topic_0237121112_p371817014282"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s87be5a616bf444a6925c058dbc82291d">ssl_crl_file</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3f11d2276b614bc0a21013f56a7953ce"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3f11d2276b614bc0a21013f56a7953ce"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3f11d2276b614bc0a21013f56a7953ce"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_af9bc01ea918f4d82b48069efa13cce09"><a name="en-us_topic_0237121112_en-us_topic_0059778562_af9bc01ea918f4d82b48069efa13cce09"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_af9bc01ea918f4d82b48069efa13cce09"></a>File containing CRL information</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r20021aa820764a64ab922bffa950182b"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p7716808283"><a name="en-us_topic_0237121112_p7716808283"></a><a name="en-us_topic_0237121112_p7716808283"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s3db9d0a21a4d48b98ea4afc1f2e44626">password_policy</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a5464ec2fa7ad4bd8bc8a9fabc9433a94"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5464ec2fa7ad4bd8bc8a9fabc9433a94"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5464ec2fa7ad4bd8bc8a9fabc9433a94"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab65fb49368e4413e987d4f502f820620"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab65fb49368e4413e987d4f502f820620"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab65fb49368e4413e987d4f502f820620"></a>Specifies whether to check the password complexity.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r62adbfc193c34d5db17a29b6de8f2976"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p57131208284"><a name="en-us_topic_0237121112_p57131208284"></a><a name="en-us_topic_0237121112_p57131208284"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794">password_reuse_time</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_acbfdb0aafa1943189aa3bd8d3f44d1c3"><a name="en-us_topic_0237121112_en-us_topic_0059778562_acbfdb0aafa1943189aa3bd8d3f44d1c3"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_acbfdb0aafa1943189aa3bd8d3f44d1c3"></a>60</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a256293ad4599430f9083114f229001dc"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a256293ad4599430f9083114f229001dc"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a256293ad4599430f9083114f229001dc"></a>Specifies whether to check the reuse days of a new password.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r93720990d4b84b6e8d038989929a1f7f"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p207107062810"><a name="en-us_topic_0237121112_p207107062810"></a><a name="en-us_topic_0237121112_p207107062810"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53">password_reuse_max</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_afd637f3bb6414682a3303cb621939776"><a name="en-us_topic_0237121112_en-us_topic_0059778562_afd637f3bb6414682a3303cb621939776"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_afd637f3bb6414682a3303cb621939776"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6bfc415149564940869775fb88de133c"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6bfc415149564940869775fb88de133c"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6bfc415149564940869775fb88de133c"></a>Specifies whether to check the reuse times of a new password.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r8e82a4277e91491ca6b02056957f1150"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1870750112819"><a name="en-us_topic_0237121112_p1870750112819"></a><a name="en-us_topic_0237121112_p1870750112819"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s5e488e82235e4bd5b470b57a44a38c27">password_lock_time</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3c759475d3674b1b8af12c194dc0a01b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3c759475d3674b1b8af12c194dc0a01b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3c759475d3674b1b8af12c194dc0a01b"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a620293911aae4157ae89ae96522eab3f"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a620293911aae4157ae89ae96522eab3f"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a620293911aae4157ae89ae96522eab3f"></a>Duration before a locked account is automatically unlocked</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r5862a0f9aed3412a8b1bc7fe08a87313"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p9705130122811"><a name="en-us_topic_0237121112_p9705130122811"></a><a name="en-us_topic_0237121112_p9705130122811"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_sc155ec2258b34e78a2ffcf797e66b959">failed_login_attempts</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aa5335d1e016f4c9198e75ff615246bba"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa5335d1e016f4c9198e75ff615246bba"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa5335d1e016f4c9198e75ff615246bba"></a>10</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a962928831f6949bca24ff2c57fc380e1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a962928831f6949bca24ff2c57fc380e1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a962928831f6949bca24ff2c57fc380e1"></a>If the number of consecutive login attempts with incorrect passwords reaches this value, the account is locked.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r2323b07618114e7b916d5982e6f5a470"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p207021506284"><a name="en-us_topic_0237121112_p207021506284"></a><a name="en-us_topic_0237121112_p207021506284"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_se6b55c35b44945099d33b403a5a43bce">password_encryption_type</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6f5acc48196a45c48c3a703406923dd4"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6f5acc48196a45c48c3a703406923dd4"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6f5acc48196a45c48c3a703406923dd4"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aea60f27799334059b688340396d361c2"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aea60f27799334059b688340396d361c2"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aea60f27799334059b688340396d361c2"></a>Password storage encryption mode</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r44b887b99dd6459f8d5e56d7fb1a994d"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1070080202820"><a name="en-us_topic_0237121112_p1070080202820"></a><a name="en-us_topic_0237121112_p1070080202820"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s17e52632df154eba8c8e622b520b2c34">password_min_uppercase</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a4d6411ee864741c6b15f7011c3a3b22d"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4d6411ee864741c6b15f7011c3a3b22d"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4d6411ee864741c6b15f7011c3a3b22d"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aecb01733786e46a48f54919b4baac158"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aecb01733786e46a48f54919b4baac158"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aecb01733786e46a48f54919b4baac158"></a>Minimum number of uppercase letters in a password</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_re81bfe612c7c4abaa977a351a782b81c"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p13697140152813"><a name="en-us_topic_0237121112_p13697140152813"></a><a name="en-us_topic_0237121112_p13697140152813"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s2e5497c6fbe84f14bab2ff2af8ce651c">password_min_lowercase</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a8674ed3165e14066a063eb86cf37a2be"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8674ed3165e14066a063eb86cf37a2be"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8674ed3165e14066a063eb86cf37a2be"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a27e23b147e10406e9b9c5b3e043fe54a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a27e23b147e10406e9b9c5b3e043fe54a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a27e23b147e10406e9b9c5b3e043fe54a"></a>Minimum number of lowercase letters in a password</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r85f78596cfe048209c2e0915364141de"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p16951101281"><a name="en-us_topic_0237121112_p16951101281"></a><a name="en-us_topic_0237121112_p16951101281"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s3a14167dd99e4dfd8710bd9b03f5cec9">password_min_digital</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab5dbe40ae0c84a6bbe5e8e024eb67266"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab5dbe40ae0c84a6bbe5e8e024eb67266"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab5dbe40ae0c84a6bbe5e8e024eb67266"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6ad5f560744d4db98da40c4c6580dd95"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6ad5f560744d4db98da40c4c6580dd95"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6ad5f560744d4db98da40c4c6580dd95"></a>Minimum number of digits in a password</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rcb9c44603b2f4fc3899b4b14e30690db"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p369118012289"><a name="en-us_topic_0237121112_p369118012289"></a><a name="en-us_topic_0237121112_p369118012289"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_sac086283deba4af790d8d97bc5469d1a">password_min_special</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ace1bb21e4a064443a505833c9453dd10"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ace1bb21e4a064443a505833c9453dd10"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ace1bb21e4a064443a505833c9453dd10"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3260aa3f5d9f42a8a867790ecc4ef940"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3260aa3f5d9f42a8a867790ecc4ef940"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3260aa3f5d9f42a8a867790ecc4ef940"></a>Minimum number of special characters in a password</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rf1d589e94b2849cab0dd19f08fcd7584"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1468613062812"><a name="en-us_topic_0237121112_p1468613062812"></a><a name="en-us_topic_0237121112_p1468613062812"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s80e5b9ae60584d44ac53f5ab2998b26f">password_min_length</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab17118550cde4534938d215e680ff7d8"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab17118550cde4534938d215e680ff7d8"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab17118550cde4534938d215e680ff7d8"></a>8</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a8e0a1aaabe6d4ba0aa938816f819e801"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8e0a1aaabe6d4ba0aa938816f819e801"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a8e0a1aaabe6d4ba0aa938816f819e801"></a>Minimum password length</p>
<div class="note" id="en-us_topic_0237121112_en-us_topic_0059778562_naf4eba9b5be54b5f93032416838d4655"><a name="en-us_topic_0237121112_en-us_topic_0059778562_naf4eba9b5be54b5f93032416838d4655"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_naf4eba9b5be54b5f93032416838d4655"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a93dde089e4f94530acd9e8173924d5f6"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a93dde089e4f94530acd9e8173924d5f6"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a93dde089e4f94530acd9e8173924d5f6"></a>The value of this parameter must be less than or equal to that of <strong>password_max_length</strong>. Otherwise, a password length error message is displayed upon all password-related operations.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rcddfb11294c0415aabb95508cca779cd"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p7835159182815"><a name="en-us_topic_0237121112_p7835159182815"></a><a name="en-us_topic_0237121112_p7835159182815"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_sf837d511c2de48069eb14ebb3afc0c20">password_max_length</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aa9c50d2c62a8466cb6ffde62fe99590e"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa9c50d2c62a8466cb6ffde62fe99590e"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa9c50d2c62a8466cb6ffde62fe99590e"></a>32</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a0c72fa8bfc6041d687d9f8111db69424"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0c72fa8bfc6041d687d9f8111db69424"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0c72fa8bfc6041d687d9f8111db69424"></a>Maximum password length</p>
<div class="note" id="en-us_topic_0237121112_en-us_topic_0059778562_nbc228d7a70e74b17be5e061fd7798789"><a name="en-us_topic_0237121112_en-us_topic_0059778562_nbc228d7a70e74b17be5e061fd7798789"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_nbc228d7a70e74b17be5e061fd7798789"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237121112_en-us_topic_0059778562_a7feab81d2f0a468383a3bcf4ab54c9dd"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7feab81d2f0a468383a3bcf4ab54c9dd"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7feab81d2f0a468383a3bcf4ab54c9dd"></a>The value of this parameter must be greater than or equal to that of <strong>password_min_length</strong>. Otherwise, a password length error message is displayed upon all password-related operations.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rfdc18dfec061472bad69928a07bc8c93"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p118321892286"><a name="en-us_topic_0237121112_p118321892286"></a><a name="en-us_topic_0237121112_p118321892286"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_sfcc6124115734728917a548a8bd8f0d4">password_effect_time</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aabe0d785f7ae48f8841ffff3c48edd5b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aabe0d785f7ae48f8841ffff3c48edd5b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aabe0d785f7ae48f8841ffff3c48edd5b"></a>90</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a02af42f02f294df28acda49e9c1ce336"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a02af42f02f294df28acda49e9c1ce336"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a02af42f02f294df28acda49e9c1ce336"></a>Password validity period</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rcb815c0410b646b294a55d6561dd6a76"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p10829592284"><a name="en-us_topic_0237121112_p10829592284"></a><a name="en-us_topic_0237121112_p10829592284"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s1beab889ab8d49848ef28bf60c10d8f7">password_notify_time</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ae9179f71e5b74b07b4306b20fca7536b"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae9179f71e5b74b07b4306b20fca7536b"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae9179f71e5b74b07b4306b20fca7536b"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6b56a54206554e2397c05bdcf8317b91"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6b56a54206554e2397c05bdcf8317b91"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6b56a54206554e2397c05bdcf8317b91"></a>Number of days prior to account password expiration that a user is notified</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r74a06aaa28e749008c07f4eae3a69528"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p18266910285"><a name="en-us_topic_0237121112_p18266910285"></a><a name="en-us_topic_0237121112_p18266910285"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_sb3d1b703f24c49f096b36087a60fdfcd">audit_enabled</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a045fceee779143d7941eec218a5ee449"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a045fceee779143d7941eec218a5ee449"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a045fceee779143d7941eec218a5ee449"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a75644619fc71475698d13464fbdc4d11"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a75644619fc71475698d13464fbdc4d11"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a75644619fc71475698d13464fbdc4d11"></a>Specifies whether the audit process is enabled or disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_ra053b67bb0b242698be14e2e21b8beba"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p128235952818"><a name="en-us_topic_0237121112_p128235952818"></a><a name="en-us_topic_0237121112_p128235952818"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_sd283781eb52b490db30d6a5549f7db3e">audit_directory</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ac9be9fcfb02b41e4969d632d52befcb6"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac9be9fcfb02b41e4969d632d52befcb6"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac9be9fcfb02b41e4969d632d52befcb6"></a>pg_audit</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p413017171017"><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p413017171017"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_en-us_topic_0058967592_p413017171017"></a>Audit file storage directory</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r39261ab9b86d458e96444c3ab9790de5"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p9820894288"><a name="en-us_topic_0237121112_p9820894288"></a><a name="en-us_topic_0237121112_p9820894288"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_s4738964503be49cb9b7ecf100f25df0d">audit_data_format</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_adc9bff680e614d8c9e1a60e8ad3758b6"><a name="en-us_topic_0237121112_en-us_topic_0059778562_adc9bff680e614d8c9e1a60e8ad3758b6"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_adc9bff680e614d8c9e1a60e8ad3758b6"></a>binary</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a4c3d5d7341784b8fbd67e7b47a1dee6a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4c3d5d7341784b8fbd67e7b47a1dee6a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4c3d5d7341784b8fbd67e7b47a1dee6a"></a>Audit log file format. Currently, only the binary format is supported.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r0d6882eea9ae4ba0982676cd048266e3"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1981716911287"><a name="en-us_topic_0237121112_p1981716911287"></a><a name="en-us_topic_0237121112_p1981716911287"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_s5d4f1e0d25bc4bc7969bde761edabc2a">audit_rotation_interval</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_af31a1dea4f164f98a5a28ac0c69a4f8a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_af31a1dea4f164f98a5a28ac0c69a4f8a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_af31a1dea4f164f98a5a28ac0c69a4f8a"></a>1d</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a47ee079345e349e7a89ab60ca763feb1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a47ee079345e349e7a89ab60ca763feb1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a47ee079345e349e7a89ab60ca763feb1"></a>Time interval of creating an audit log file. If the interval between the creation time of the last audit log file and the current time exceeds the parameter value, the server generates a new audit log file.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rbb930829e5c74128903401ffffdd27a6"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p148138972810"><a name="en-us_topic_0237121112_p148138972810"></a><a name="en-us_topic_0237121112_p148138972810"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_sf2c59b75a61e4e55933029c6b1e4ab96">audit_rotation_size</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ad99588e630954d35a0d0ecb5335ea9c0"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ad99588e630954d35a0d0ecb5335ea9c0"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ad99588e630954d35a0d0ecb5335ea9c0"></a>10MB</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ac92018b99e5e440cb10a8a1ad81525e0"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac92018b99e5e440cb10a8a1ad81525e0"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ac92018b99e5e440cb10a8a1ad81525e0"></a>Maximum capacity of an audit log file. If the total number of messages in an audit log exceeds the value of <strong>audit_rotation_size</strong>, the server will generate a new audit log file.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_row1311537114912"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p6602823112817"><a name="en-us_topic_0237121112_p6602823112817"></a><a name="en-us_topic_0237121112_p6602823112817"></a><a href="audit-switch.md#en-us_topic_0237124745_section939915522551">audit_resource_policy</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_p1911716714490"><a name="en-us_topic_0237121112_p1911716714490"></a><a name="en-us_topic_0237121112_p1911716714490"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_p74001852175510"><a name="en-us_topic_0237121112_p74001852175510"></a><a name="en-us_topic_0237121112_p74001852175510"></a>Policy for determining whether audit logs are preferentially stored by space or time. <strong>on</strong> indicates that audit logs are preferentially stored by space.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_row11858221185318"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p185991323142817"><a name="en-us_topic_0237121112_p185991323142817"></a><a name="en-us_topic_0237121112_p185991323142817"></a><a href="audit-switch.md#en-us_topic_0237124745_section149961828185211">audit_file_remain_time</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_p15858132175317"><a name="en-us_topic_0237121112_p15858132175317"></a><a name="en-us_topic_0237121112_p15858132175317"></a>90</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_p168581213536"><a name="en-us_topic_0237121112_p168581213536"></a><a name="en-us_topic_0237121112_p168581213536"></a>Minimum duration required for recording audit logs. This parameter is valid only when <strong id="b4493183018484"><a name="b4493183018484"></a><a name="b4493183018484"></a><a href="audit-switch.md#en-us_topic_0237124745_section939915522551">audit_resource_policy</a></strong> is set to <strong id="b44931030164817"><a name="b44931030164817"></a><a name="b44931030164817"></a>off</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rbe49ed4dcf4b48d6931105456a55fc5b"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p859614232287"><a name="en-us_topic_0237121112_p859614232287"></a><a name="en-us_topic_0237121112_p859614232287"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_s167d5900250946bca199444c0617c714">audit_space_limit</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ae0ef4cffa14e4ee0b50e0ba8da0c7629"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae0ef4cffa14e4ee0b50e0ba8da0c7629"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ae0ef4cffa14e4ee0b50e0ba8da0c7629"></a>1GB</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a7f809eb9a96e459d86a8c481d0755820"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7f809eb9a96e459d86a8c481d0755820"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7f809eb9a96e459d86a8c481d0755820"></a>Maximum total size of audit log files in a disk</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r72abdc5e530c4203ac1dd8330fb2f98d"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p9593122382811"><a name="en-us_topic_0237121112_p9593122382811"></a><a name="en-us_topic_0237121112_p9593122382811"></a><a href="audit-switch.md#en-us_topic_0237124745_en-us_topic_0059777744_s7fbbb3e514454b11aa33310454965b66">audit_file_remain_threshold</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3ce71c6bf8ba418e83b6e73f44359624"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3ce71c6bf8ba418e83b6e73f44359624"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3ce71c6bf8ba418e83b6e73f44359624"></a>1048576</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aeb9e7e1f2b304f3db98f31c8c6e93e98"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aeb9e7e1f2b304f3db98f31c8c6e93e98"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aeb9e7e1f2b304f3db98f31c8c6e93e98"></a>Maximum number of audit files in the audit directory</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rdbcfdbd18a2b4bfaa70d4f00c5de7937"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1459052362813"><a name="en-us_topic_0237121112_p1459052362813"></a><a name="en-us_topic_0237121112_p1459052362813"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_se04dd9d17c9445579ca268e0f74196fe">audit_login_logout</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ab60cae5b4fff4e97970d67f537e85fb7"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab60cae5b4fff4e97970d67f537e85fb7"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ab60cae5b4fff4e97970d67f537e85fb7"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_abec5e517a3034c55af981f51f6700c25"><a name="en-us_topic_0237121112_en-us_topic_0059778562_abec5e517a3034c55af981f51f6700c25"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_abec5e517a3034c55af981f51f6700c25"></a>Specifies whether to audit user logins (including login successes and failures) and logouts.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r5aec47a5c2ab4f6f91692b2cfb609064"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1258812312820"><a name="en-us_topic_0237121112_p1258812312820"></a><a name="en-us_topic_0237121112_p1258812312820"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s07b9d958cde04d6483123181f665ad5c">audit_database_process</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a1a5f5ecc28054feead61a85d5b6aff20"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1a5f5ecc28054feead61a85d5b6aff20"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a1a5f5ecc28054feead61a85d5b6aff20"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a4c1569e463b74eebbb1ddff9747894ac"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4c1569e463b74eebbb1ddff9747894ac"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a4c1569e463b74eebbb1ddff9747894ac"></a>Specifies whether to audit database startup, stop, switchover, and restoration operations.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rddcbdb1e13ed43d0b9e30b8d1dd4ef99"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p2585112352819"><a name="en-us_topic_0237121112_p2585112352819"></a><a name="en-us_topic_0237121112_p2585112352819"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_sf87eea8d8fd949708f022da99dad9ba0">audit_user_locked</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a055233284e094db29fe4b172e01103d8"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a055233284e094db29fe4b172e01103d8"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a055233284e094db29fe4b172e01103d8"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a041f2a105baa49d7b6e5273eb8f1d309"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a041f2a105baa49d7b6e5273eb8f1d309"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a041f2a105baa49d7b6e5273eb8f1d309"></a>Specifies whether to audit database user locking and unlocking.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r668bc969183542928c20423d9b42378f"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p85821723142816"><a name="en-us_topic_0237121112_p85821723142816"></a><a name="en-us_topic_0237121112_p85821723142816"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s37b4430358614a999e2bb0404b01d450">audit_user_violation</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a579e63ff38f14c179fc18e0043967995"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a579e63ff38f14c179fc18e0043967995"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a579e63ff38f14c179fc18e0043967995"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aa2c928ee6cf140c3a4270ef2b11c8057"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa2c928ee6cf140c3a4270ef2b11c8057"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa2c928ee6cf140c3a4270ef2b11c8057"></a>Specifies whether to audit unauthorized access of database users.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r78b649f51b614de0b9557899ec2657d7"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1558032313281"><a name="en-us_topic_0237121112_p1558032313281"></a><a name="en-us_topic_0237121112_p1558032313281"></a><a href="user-and-permission-audit.md#en-us_topic_0237124746_en-us_topic_0059778731_s052b24b790e04c878234dd665e06b9bb">audit_grant_revoke</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a36b34d53ce32426489164c4061ca4de1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a36b34d53ce32426489164c4061ca4de1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a36b34d53ce32426489164c4061ca4de1"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_ace1b5556de4e4dd9abd949d96ea48b31"><a name="en-us_topic_0237121112_en-us_topic_0059778562_ace1b5556de4e4dd9abd949d96ea48b31"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_ace1b5556de4e4dd9abd949d96ea48b31"></a>Specifies whether to audit user permission granting and reclaiming operations.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r063a4e4aaef5470a860c546a22f7df10"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p1857722317288"><a name="en-us_topic_0237121112_p1857722317288"></a><a name="en-us_topic_0237121112_p1857722317288"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s05a5cf2a231d43d8aa731caae59abb33">audit_system_object</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a19631a9bc8ab4fb7b25f4480d40f0e6a"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a19631a9bc8ab4fb7b25f4480d40f0e6a"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a19631a9bc8ab4fb7b25f4480d40f0e6a"></a>12295</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a47c3431fc51849918ebf75b7735aa96d"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a47c3431fc51849918ebf75b7735aa96d"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a47c3431fc51849918ebf75b7735aa96d"></a>Specifies whether to audit the <strong id="b193167354519"><a name="b193167354519"></a><a name="b193167354519"></a>CREATE</strong>, <strong id="b14351838355"><a name="b14351838355"></a><a name="b14351838355"></a>DROP</strong>, and <strong id="b3156401650"><a name="b3156401650"></a><a name="b3156401650"></a>ALTER</strong> operations on database objects.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_ra5d169acbaf946c6a41e8445b9002044"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p14574172320281"><a name="en-us_topic_0237121112_p14574172320281"></a><a name="en-us_topic_0237121112_p14574172320281"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s761d19195b7b48e0b74f40375efd4ea7">audit_dml_state</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a6fdbc287a3cc4b35ad71d4760110be76"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6fdbc287a3cc4b35ad71d4760110be76"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a6fdbc287a3cc4b35ad71d4760110be76"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_abd92b918a7de4a28b108d59b678d5efc"><a name="en-us_topic_0237121112_en-us_topic_0059778562_abd92b918a7de4a28b108d59b678d5efc"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_abd92b918a7de4a28b108d59b678d5efc"></a>Specifies whether to audit the <strong>INSERT</strong>, <strong>UPDATE</strong>, and <strong>DELETE</strong> operations on a specific table.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r923a528dae2542ef94c8338c7a8169dc"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p135711923192812"><a name="en-us_topic_0237121112_p135711923192812"></a><a name="en-us_topic_0237121112_p135711923192812"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sdfed1641d0c54ed7bf034d9207ad4fc2">audit_dml_state_select</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a7bbbd48713de4f208a6232d304d44817"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7bbbd48713de4f208a6232d304d44817"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a7bbbd48713de4f208a6232d304d44817"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a0e2728fcb03542dbaaae5622ca162515"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0e2728fcb03542dbaaae5622ca162515"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0e2728fcb03542dbaaae5622ca162515"></a>Specifies whether to audit the <strong>SELECT</strong> operation.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_ra35ea14f71a544bf8f8ff69d35d5bed5"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p456818233288"><a name="en-us_topic_0237121112_p456818233288"></a><a name="en-us_topic_0237121112_p456818233288"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s43b8457f811e417b9ad155b6218517a2">audit_copy_exec</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_aa3d73e967a7f4be68be08797ee5fcdcb"><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa3d73e967a7f4be68be08797ee5fcdcb"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_aa3d73e967a7f4be68be08797ee5fcdcb"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a3f5f51c0fe8448a0a9f6cd2f9733457f"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3f5f51c0fe8448a0a9f6cd2f9733457f"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a3f5f51c0fe8448a0a9f6cd2f9733457f"></a>Specifies whether to audit the <strong>COPY</strong> operation.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r2d7b554f742449cb800afe6909bf5071"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p5566923192817"><a name="en-us_topic_0237121112_p5566923192817"></a><a name="en-us_topic_0237121112_p5566923192817"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sfdce4770ba2543668b1e7d24d2738c13">audit_function_exec</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a439aa1af599a40cfa83b51bf2559e7e0"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a439aa1af599a40cfa83b51bf2559e7e0"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a439aa1af599a40cfa83b51bf2559e7e0"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a5b184e4dea8545f1bcf84b17718a8dfa"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5b184e4dea8545f1bcf84b17718a8dfa"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a5b184e4dea8545f1bcf84b17718a8dfa"></a>Specifies whether to record audit information during execution of stored procedures, anonymous blocks, or customized functions (excluding system functions).</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r521b6cb8f9564706acc642af4df164f8"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p16562192316287"><a name="en-us_topic_0237121112_p16562192316287"></a><a name="en-us_topic_0237121112_p16562192316287"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e">audit_set_parameter</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a18a49cf121fe407db32d28daef7043db"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a18a49cf121fe407db32d28daef7043db"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a18a49cf121fe407db32d28daef7043db"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_abc717d60df3a4a4f847832fa0abdd3d1"><a name="en-us_topic_0237121112_en-us_topic_0059778562_abc717d60df3a4a4f847832fa0abdd3d1"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_abc717d60df3a4a4f847832fa0abdd3d1"></a>Specifies whether to audit the <strong>SET</strong> operation.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_r4ac5a50d0869442bb50e3632d48798f5"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p8918142892817"><a name="en-us_topic_0237121112_p8918142892817"></a><a name="en-us_topic_0237121112_p8918142892817"></a><a href="operation-auditing.md#en-us_topic_0237124747_en-us_topic_0059777487_s0a79ea55efa1431d8e3e06e4b8219cd6">enableSeparationOfDuty</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a59eeec41ea734593af8067ea480f6b7d"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a59eeec41ea734593af8067ea480f6b7d"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a59eeec41ea734593af8067ea480f6b7d"></a>off</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_af56b801046b64d2ab98e7b40b5c550c5"><a name="en-us_topic_0237121112_en-us_topic_0059778562_af56b801046b64d2ab98e7b40b5c550c5"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_af56b801046b64d2ab98e7b40b5c550c5"></a>Specifies whether the separation of duties is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_en-us_topic_0059778562_rf57777c1365242a19aa90645f44c98b3"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p19916228112811"><a name="en-us_topic_0237121112_p19916228112811"></a><a name="en-us_topic_0237121112_p19916228112811"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a">session_timeout</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a87369413a4174944b75193f024d21a36"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a87369413a4174944b75193f024d21a36"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a87369413a4174944b75193f024d21a36"></a>10min</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_en-us_topic_0059778562_a0b754b02341745898121b38afa501360"><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0b754b02341745898121b38afa501360"></a><a name="en-us_topic_0237121112_en-us_topic_0059778562_a0b754b02341745898121b38afa501360"></a>If the duration of a connection session exceeds the parameter value, the session is automatically disconnected.</p>
</td>
</tr>
<tr id="en-us_topic_0237121112_row106417436124"><td class="cellrowborder" valign="top" width="30.84%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121112_p139131328102812"><a name="en-us_topic_0237121112_p139131328102812"></a><a name="en-us_topic_0237121112_p139131328102812"></a><a href="security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_section2612143317514">auth_iteration_count</a></p>
</td>
<td class="cellrowborder" valign="top" width="14.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121112_p106524381219"><a name="en-us_topic_0237121112_p106524381219"></a><a name="en-us_topic_0237121112_p106524381219"></a>10000</p>
</td>
<td class="cellrowborder" valign="top" width="54.669999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121112_p66554312122"><a name="en-us_topic_0237121112_p66554312122"></a><a name="en-us_topic_0237121112_p66554312122"></a>Number of iterations during the generation of encrypted information for authentication</p>
</td>
</tr>
</tbody>
</table>


## Procedure<a name="en-us_topic_0237121112_en-us_topic_0059778562_sac0609c817814cceb8e0f0a4a29f623a"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  Check the status of the overall audit switch.
    1.  Run the  **show**  command to view the value of  **audit\_enabled**.

        ```
        postgres=# SHOW audit_enabled;
        ```

        If the status is  **off**, run the  **\\q**  command to exit the database.

    2.  Run the following command to enable the audit function. The parameter settings take effect immediately.

        ```
        gs_guc set -N all -I all -c "audit_enabled=on"
        ```

4.  Configure specific audit items.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   After the audit function is enabled, user operations can be recorded into an audit file.  
    >-   The default parameter value of each audit item meets security standards. You can enable other audit functions, but doing so may affect the system performance.  

    For example, you can enable the audit switch of the  **CREATE**,  **DROP**, and  **ALTER**  operations on all database objects. The methods of modifying other configuration items are similar to it.

    ```
    gs_guc reload -N all -I all -c "audit_system_object=12295"
    ```

    **audit\_system\_object**  indicates the switch of the audit item, and  **12295**  indicates the value of the audit switch.


