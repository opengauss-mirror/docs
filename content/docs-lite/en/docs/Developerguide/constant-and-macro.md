# Constant and Macro<a name="EN-US_TOPIC_0289900120"></a>

[Table 1](#en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_table49126904)  lists the constants and macros that can be used in openGauss.

**Table  1**  Constant and macro

<a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_table49126904"></a>
<table><thead align="left"><tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_row18854685"><th class="cellrowborder" valign="top" width="19.54%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p50834482"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p50834482"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p50834482"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.82%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p23952355"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p23952355"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p23952355"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="46.64%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p11783976"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p11783976"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p11783976"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r6c43e5293f1b49b1869997ebcd307438"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"></a>CURRENT_CATALOG</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"></a>Specifies the current database.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text209472515618"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text209472515618"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text209472515618"></a>openGauss=# </span>SELECT CURRENT_CATALOG;
current_database
------------------
openGauss
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r69b04ba6bd68474684316486294c3bbb"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"></a>CURRENT_ROLE</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"></a>Specifies the current user.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text149671469614"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text149671469614"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text149671469614"></a>openGauss=# </span>SELECT CURRENT_ROLE;
current_user
--------------
<span id="en-us_topic_0283136888_en-us_topic_0237121963_text10496154310541"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text10496154310541"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text10496154310541"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r46cc2f1d7d454994a1f5f0dc1cb012af"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"></a>CURRENT_SCHEMA</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_af172dcc572974966a2ce075693f72b3c"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_af172dcc572974966a2ce075693f72b3c"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_af172dcc572974966a2ce075693f72b3c"></a>Specifies the current database schema.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text582311718613"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text582311718613"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text582311718613"></a>openGauss=# </span>SELECT CURRENT_SCHEMA;
current_schema
----------------
public
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r39526440855445d08af7d403492e9392"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aa41b4b088041421489886e089ec80b3b"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aa41b4b088041421489886e089ec80b3b"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aa41b4b088041421489886e089ec80b3b"></a>CURRENT_USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aeebb98794a2d42958d991978efc81530"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aeebb98794a2d42958d991978efc81530"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_aeebb98794a2d42958d991978efc81530"></a>Specifies the current user.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text15595381766"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text15595381766"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text15595381766"></a>openGauss=# </span>SELECT CURRENT_USER;
current_user
--------------
<span id="en-us_topic_0283136888_en-us_topic_0237121963_text8713464542"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text8713464542"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text8713464542"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r949a7635f8864b2e9879a1689a93cf67"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a2850e78b7f754121902023268b8227f0"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a2850e78b7f754121902023268b8227f0"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a2850e78b7f754121902023268b8227f0"></a>LOCALTIMESTAMP</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p526945163043"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p526945163043"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_en-us_topic_0058965862_p526945163043"></a>Specifies the current session time (without time zone).</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text132142010165"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text132142010165"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text132142010165"></a>openGauss=# </span>SELECT LOCALTIMESTAMP;
         timestamp
----------------------------
2015-10-10 15:37:30.968538
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r8d95b0315aaa4d39a8b72116cd4b824c"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"></a>This parameter is left blank.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r44e82ccc8fe444a0a84e2345d4a585cd"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"></a>SESSION_USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"></a>Specifies the current system user.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text199513123616"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text199513123616"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text199513123616"></a>openGauss=# </span>SELECT SESSION_USER;
session_user
--------------
<span id="en-us_topic_0283136888_en-us_topic_0237121963_text1835181816175"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text1835181816175"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text1835181816175"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r0b59e79ada6248c2bdce711489ccd184"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"></a>SYSDATE</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"></a>Specifies the current system date.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text14213416160"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text14213416160"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text14213416160"></a>openGauss=# </span>SELECT SYSDATE;
sysdate
---------------------
2015-10-10 15:48:53
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_r63dd386b28ed4ab48c229bf8a88d3f5a"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abc09501a233647c7a35c099340d9f096"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abc09501a233647c7a35c099340d9f096"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_abc09501a233647c7a35c099340d9f096"></a>USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"></a>Specifies the current user, also called <strong id="en-us_topic_0237121963_b10276132944011"><a name="en-us_topic_0237121963_b10276132944011"></a><a name="en-us_topic_0237121963_b10276132944011"></a>CURRENT_USER</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sef943034d166420a8fad492a854ffcfd"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sef943034d166420a8fad492a854ffcfd"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136888_en-us_topic_0237121963_en-us_topic_0059778360_sef943034d166420a8fad492a854ffcfd"><span id="en-us_topic_0283136888_en-us_topic_0237121963_text78841715616"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text78841715616"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text78841715616"></a>openGauss=# </span>SELECT USER;
current_user
--------------
<span id="en-us_topic_0283136888_en-us_topic_0237121963_text19934330132219"><a name="en-us_topic_0283136888_en-us_topic_0237121963_text19934330132219"></a><a name="en-us_topic_0283136888_en-us_topic_0237121963_text19934330132219"></a>omm</span>
(1 row)</pre>
</td>
</tr>
</tbody>
</table>

