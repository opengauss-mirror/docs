# About This Document<a name="EN-US_TOPIC_0289900820"></a>

## Overview<a name="en-us_topic_0283137046_en-us_topic_0237649238_section4537382116410"></a>

This document describes how to design, create, query, and maintain a database, including the SQL statements, stored procedures, system catalogs, and views.

## Intended Audience<a name="en-us_topic_0283137046_en-us_topic_0237649238_section4378592816410"></a>

This document provides necessary reference information for programmers who develop C or Java applications based on openGauss.

As an application developer, you need to be familiar with:

-   Knowledge about OSs. This is the foundation of everything.
-   C/Java programming language through which you can develop applications.
-   An IDE of the C/Java language, which is the prerequisite for efficient application development.
-   SQL syntax, using which you can operate databases.

## Symbol Conventions<a name="en-us_topic_0283137046_en-us_topic_0237649238_section133020216410"></a>

The symbols that may be found in this document are defined as follows:

<a name="en-us_topic_0283137046_en-us_topic_0237649238_table2622507016410"></a>
<table><thead align="left"><tr id="en-us_topic_0283137046_en-us_topic_0237649238_row1530720816410"><th class="cellrowborder" valign="top" width="20.580000000000002%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283137046_en-us_topic_0237649238_p6450074116410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p6450074116410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p6450074116410"></a><strong id="b85962057185212"><a name="b85962057185212"></a><a name="b85962057185212"></a>Symbol</strong></p>
</th>
<th class="cellrowborder" valign="top" width="79.42%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283137046_en-us_topic_0237649238_p5435366816410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5435366816410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5435366816410"></a><strong id="b203741158185219"><a name="b203741158185219"></a><a name="b203741158185219"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137046_en-us_topic_0237649238_row1372280416410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p3734547016410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p3734547016410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p3734547016410"></a><a name="en-us_topic_0237649238_image2670064316410"></a><a name="en-us_topic_0237649238_image2670064316410"></a><span><img class="" id="en-us_topic_0237649238_image2670064316410" src="figures/en-us_image_0283137654.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p1757432116410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1757432116410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1757432116410"></a>Indicates a hazard with a high level of risk which, if not avoided, will result in death or serious injury.</p>
</td>
</tr>
<tr id="en-us_topic_0283137046_en-us_topic_0237649238_row466863216410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p1432579516410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1432579516410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1432579516410"></a><a name="en-us_topic_0237649238_image4895582316410"></a><a name="en-us_topic_0237649238_image4895582316410"></a><span><img class="" id="en-us_topic_0237649238_image4895582316410" src="figures/en-us_image_0283137294.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p959197916410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p959197916410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p959197916410"></a>Indicates a hazard with a medium level of risk which, if not avoided, could result in death or serious injury.</p>
</td>
</tr>
<tr id="en-us_topic_0283137046_en-us_topic_0237649238_row123863216410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p1232579516410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1232579516410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1232579516410"></a><a name="en-us_topic_0237649238_image1235582316410"></a><a name="en-us_topic_0237649238_image1235582316410"></a><span><img class="" id="en-us_topic_0237649238_image1235582316410" src="figures/en-us_image_0283137664.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p123197916410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p123197916410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p123197916410"></a>Indicates a hazard with a low level of risk which, if not avoided, could result in minor or moderate injury.</p>
</td>
</tr>
<tr id="en-us_topic_0283137046_en-us_topic_0237649238_row5786682116410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p2204984716410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2204984716410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2204984716410"></a><a name="en-us_topic_0237649238_image4504446716410"></a><a name="en-us_topic_0237649238_image4504446716410"></a><span><img class="" id="en-us_topic_0237649238_image4504446716410" src="figures/en-us_image_0283137114.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p4388861916410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p4388861916410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p4388861916410"></a>Indicates a potentially hazardous situation which, if not avoided, could result in equipment damage, data loss, performance deterioration, or unanticipated results.</p>
<p id="en-us_topic_0283137046_en-us_topic_0237649238_p1238861916410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1238861916410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1238861916410"></a><strong id="b154916151538"><a name="b154916151538"></a><a name="b154916151538"></a>NOTICE</strong> is used to address practices not related to personal injury.</p>
</td>
</tr>
<tr id="en-us_topic_0283137046_en-us_topic_0237649238_row2856923116410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p5555360116410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5555360116410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5555360116410"></a><a name="en-us_topic_0237649238_image799324016410"></a><a name="en-us_topic_0237649238_image799324016410"></a><span><img class="" id="en-us_topic_0237649238_image799324016410" src="figures/en-us_image_0283136864.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p4612588116410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p4612588116410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p4612588116410"></a>Supplements the important information in the main text.</p>
<p id="en-us_topic_0283137046_en-us_topic_0237649238_p1232588116410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1232588116410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1232588116410"></a><strong id="b1059513185532"><a name="b1059513185532"></a><a name="b1059513185532"></a>NOTE</strong> is used to address information not related to personal injury, equipment damage, and environment deterioration.</p>
</td>
</tr>
</tbody>
</table>

## Change History<a name="en-us_topic_0283137046_en-us_topic_0237649238_section2467512116410"></a>

<a name="en-us_topic_0283137046_en-us_topic_0237649238_table1557726816410"></a>
<table><thead align="left"><tr id="en-us_topic_0283137046_en-us_topic_0237649238_row2942532716410"><th class="cellrowborder" valign="top" width="20.72%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283137046_en-us_topic_0237649238_p3778275416410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p3778275416410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p3778275416410"></a>Issue</p>
</th>
<th class="cellrowborder" valign="top" width="26.119999999999997%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283137046_en-us_topic_0237649238_p5627845516410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5627845516410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p5627845516410"></a>Date</p>
</th>
<th class="cellrowborder" valign="top" width="53.16%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283137046_en-us_topic_0237649238_p2382284816410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2382284816410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2382284816410"></a><strong id="b4370122165312"><a name="b4370122165312"></a><a name="b4370122165312"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row625310351785"><td class="cellrowborder" valign="top" width="20.72%" headers="mcps1.1.4.1.1 "><p id="p1551819436819"><a name="p1551819436819"></a><a name="p1551819436819"></a>03</p>
</td>
<td class="cellrowborder" valign="top" width="26.119999999999997%" headers="mcps1.1.4.1.2 "><p id="p17518743686"><a name="p17518743686"></a><a name="p17518743686"></a>2020-09-30</p>
</td>
<td class="cellrowborder" valign="top" width="53.16%" headers="mcps1.1.4.1.3 "><p id="p2518943980"><a name="p2518943980"></a><a name="p2518943980"></a>This is the third official release.</p>
</td>
</tr>
<tr id="row1373130888"><td class="cellrowborder" valign="top" width="20.72%" headers="mcps1.1.4.1.1 "><p id="p131264010818"><a name="p131264010818"></a><a name="p131264010818"></a>02</p>
</td>
<td class="cellrowborder" valign="top" width="26.119999999999997%" headers="mcps1.1.4.1.2 "><p id="p131214406817"><a name="p131214406817"></a><a name="p131214406817"></a>2020-08-31</p>
</td>
<td class="cellrowborder" valign="top" width="53.16%" headers="mcps1.1.4.1.3 "><p id="p163121408814"><a name="p163121408814"></a><a name="p163121408814"></a>This is the second official release.</p>
</td>
</tr>
<tr id="en-us_topic_0283137046_en-us_topic_0237649238_row5947359616410"><td class="cellrowborder" valign="top" width="20.72%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p2149706016410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2149706016410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p2149706016410"></a>01</p>
</td>
<td class="cellrowborder" valign="top" width="26.119999999999997%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p648803616410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p648803616410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p648803616410"></a>2020-05-12</p>
</td>
<td class="cellrowborder" valign="top" width="53.16%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137046_en-us_topic_0237649238_p1946537916410"><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1946537916410"></a><a name="en-us_topic_0283137046_en-us_topic_0237649238_p1946537916410"></a>This issue is the first official release.</p>
</td>
</tr>
</tbody>
</table>

