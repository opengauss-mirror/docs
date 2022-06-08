# 常量与宏<a name="ZH-CN_TOPIC_0289900120"></a>

openGauss支持的常量和宏请参见[表1](#zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_table49126904)。

**表 1**  常量和宏

<a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_table49126904"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_row18854685"><th class="cellrowborder" valign="top" width="19.54%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p50834482"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p50834482"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p50834482"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.82%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p23952355"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p23952355"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p23952355"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="46.64%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p11783976"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p11783976"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p11783976"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r6c43e5293f1b49b1869997ebcd307438"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1a8f774700bc4fb3badf09d0d103706a"></a>CURRENT_CATALOG</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39a01c2178d34d1d8be84dfe9579ef3f"></a>当前数据库</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s3de71ea5d96a4d62b0c4ad4d822eb193"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text209472515618"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text209472515618"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text209472515618"></a>openGauss=# </span>SELECT CURRENT_CATALOG;
current_database
------------------
openGauss
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r69b04ba6bd68474684316486294c3bbb"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1739ad3c46eb4285b2a1f4f9ab375773"></a>CURRENT_ROLE</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a6e74d10cb9d84b5a8fcc9d29e56e117d"></a>当前用户</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s35337e4b94984d5c990c636b55c2992f"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text149671469614"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text149671469614"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text149671469614"></a>openGauss=# </span>SELECT CURRENT_ROLE;
current_user
--------------
<span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text10496154310541"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text10496154310541"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text10496154310541"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r46cc2f1d7d454994a1f5f0dc1cb012af"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abd6da69b99894e2f865330968e9ef1b0"></a>CURRENT_SCHEMA</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_af172dcc572974966a2ce075693f72b3c"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_af172dcc572974966a2ce075693f72b3c"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_af172dcc572974966a2ce075693f72b3c"></a>当前数据库模式</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9c214a5a6f054ff483b6f230f0b0af9b"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text582311718613"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text582311718613"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text582311718613"></a>openGauss=# </span>SELECT CURRENT_SCHEMA;
current_schema
----------------
public
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r39526440855445d08af7d403492e9392"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aa41b4b088041421489886e089ec80b3b"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aa41b4b088041421489886e089ec80b3b"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aa41b4b088041421489886e089ec80b3b"></a>CURRENT_USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aeebb98794a2d42958d991978efc81530"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aeebb98794a2d42958d991978efc81530"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_aeebb98794a2d42958d991978efc81530"></a>当前用户</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s9e0b0b725af64eeba0c28ccac3f934d9"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text15595381766"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text15595381766"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text15595381766"></a>openGauss=# </span>SELECT CURRENT_USER;
current_user
--------------
<span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text8713464542"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text8713464542"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text8713464542"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r949a7635f8864b2e9879a1689a93cf67"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a2850e78b7f754121902023268b8227f0"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a2850e78b7f754121902023268b8227f0"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a2850e78b7f754121902023268b8227f0"></a>LOCALTIMESTAMP</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p526945163043"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p526945163043"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_zh-cn_topic_0058965862_p526945163043"></a>当前会话时间（无时区）</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sf268b12d175242b5b23ac9298da0a345"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text132142010165"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text132142010165"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text132142010165"></a>openGauss=# </span>SELECT LOCALTIMESTAMP;
         timestamp
----------------------------
2015-10-10 15:37:30.968538
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r8d95b0315aaa4d39a8b72116cd4b824c"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abcf25d6110ea4ef39b1bcae8782efeb8"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abb4ab0d5e2764f4ebd8284c53fe7ffff"></a>空值</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a045e26bdcff149a48993f681ca7d4b2d"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r44e82ccc8fe444a0a84e2345d4a585cd"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_ae44b8ed3319e415ca25561fe94a79f1c"></a>SESSION_USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7add2ddd31ba41ef91e9ae52360911ec"></a>当前系统用户</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s34bf5f16d65540148090d5dc686e0135"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text199513123616"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text199513123616"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text199513123616"></a>openGauss=# </span>SELECT SESSION_USER;
session_user
--------------
<span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text1835181816175"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text1835181816175"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text1835181816175"></a>omm</span>
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r0b59e79ada6248c2bdce711489ccd184"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a7ab0389384ac4c329bec448e474044b1"></a>SYSDATE</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a1e34ed6be3ad4d58ae81029d36f594f5"></a>当前系统日期</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_s18d721cf96cc4c369783137d3d4d9515"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text14213416160"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text14213416160"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text14213416160"></a>openGauss=# </span>SELECT SYSDATE;
sysdate
---------------------
2015-10-10 15:48:53
(1 row)</pre>
</td>
</tr>
<tr id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_r63dd386b28ed4ab48c229bf8a88d3f5a"><td class="cellrowborder" valign="top" width="19.54%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abc09501a233647c7a35c099340d9f096"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abc09501a233647c7a35c099340d9f096"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_abc09501a233647c7a35c099340d9f096"></a>USER</p>
</td>
<td class="cellrowborder" valign="top" width="33.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_a39f2e54d45934f94ae08bf111815652c"></a>当前用户，此用户为CURRENT_USER的别名。</p>
</td>
<td class="cellrowborder" valign="top" width="46.64%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sef943034d166420a8fad492a854ffcfd"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sef943034d166420a8fad492a854ffcfd"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_zh-cn_topic_0059778360_sef943034d166420a8fad492a854ffcfd"><span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text78841715616"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text78841715616"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text78841715616"></a>openGauss=# </span>SELECT USER;
current_user
--------------
<span id="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text19934330132219"><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text19934330132219"></a><a name="zh-cn_topic_0283136888_zh-cn_topic_0237121963_text19934330132219"></a>omm</span>
(1 row)</pre>
</td>
</tr>
</tbody>
</table>

