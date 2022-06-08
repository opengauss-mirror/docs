# WLM\_USER\_RESOURCE\_RUNTIME<a name="EN-US_TOPIC_0289900595"></a>

**WLM\_USER\_RESOURCE\_RUNTIME**  displays resource usage of all users. Only administrators can query this view. This view is valid only when the GUC parameter  **use\_workload\_manager**  is set to  **on**.

**Table  1**  WLM\_USER\_RESOURCE\_RUNTIME columns

<a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_t11b74f8fb7cd4bd8b53f72d8a89440c9"></a>
<table><thead align="left"><tr id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_r5842d7f7603e497cb22101dfea845472"><th class="cellrowborder" valign="top" width="24.37%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="21.18%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_abf389d4d152b452d832a966b9c967aec"><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="54.449999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_r3fa5c62a2b324f449e54f1c1a7df2de8"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p10103102071217"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p10103102071217"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p10103102071217"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p04241417123"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p04241417123"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p04241417123"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p639181441214"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p639181441214"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p639181441214"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_rf38881ac52a945d6944ba0502b0e83c4"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1110652110121"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1110652110121"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1110652110121"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p193412140122"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p193412140122"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p193412140122"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1230151411213"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1230151411213"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1230151411213"></a>Used memory (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_en-us_topic_0059778356_rdeb045b57c5440c6876aa5e1fddf3793"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1275719218122"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1275719218122"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1275719218122"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p226191461218"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p226191461218"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p226191461218"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p62251431218"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p62251431218"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p62251431218"></a>Available memory (unit: MB) The value <strong id="en-us_topic_0237122754_b9574121913718"><a name="en-us_topic_0237122754_b9574121913718"></a><a name="en-us_topic_0237122754_b9574121913718"></a>0</strong> indicates that the available memory is not limited and depends on the maximum memory available in the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row0970538191711"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p9971538191717"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p9971538191717"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p9971538191717"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p797217389175"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p797217389175"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p797217389175"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p397263812176"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p397263812176"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p397263812176"></a>Number of CPU cores in use</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row64614276180"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p12894125171811"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p12894125171811"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p12894125171811"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p10894225181817"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p10894225181817"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p10894225181817"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p188951125151817"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p188951125151817"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p188951125151817"></a>Total number of CPU cores of the Cgroup associated with the user on the node</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row10451327201810"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1689592518180"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1689592518180"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1689592518180"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p12895425161810"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p12895425161810"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p12895425161810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p489502517187"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p489502517187"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p489502517187"></a>Used storage space (unit: KB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row134412731818"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1089592520188"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1089592520188"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1089592520188"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p14895192581819"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p14895192581819"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p14895192581819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p13895112513181"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p13895112513181"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p13895112513181"></a>Available storage space (unit: KB) The value <strong id="b1562416811187"><a name="b1562416811187"></a><a name="b1562416811187"></a>-1</strong> indicates that the maximum storage space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row366033117515"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p126615311854"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p126615311854"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p126615311854"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p266113118514"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p266113118514"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p266113118514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p1618419541472"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1618419541472"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p1618419541472"></a>Used temporary space (reserved column; unit: KB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row197631736455"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p147630366520"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p147630366520"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p147630366520"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p17636361954"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p17636361954"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p17636361954"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p4662418811"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p4662418811"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p4662418811"></a>Available temporary storage space (reserved column; unit: KB) The value <strong id="b1632745510335"><a name="b1632745510335"></a><a name="b1632745510335"></a>-1</strong> indicates that the maximum temporary storage space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row158024426515"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p38038421450"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p38038421450"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p38038421450"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p208031342653"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p208031342653"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p208031342653"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p16491541192818"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p16491541192818"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p16491541192818"></a>Used space for storing spilled data (reserved column; unit: KB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136663_en-us_topic_0237122754_row151641471652"><td class="cellrowborder" valign="top" width="24.37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p416464713516"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p416464713516"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p416464713516"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="21.18%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p19164047150"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p19164047150"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p19164047150"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.449999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136663_en-us_topic_0237122754_p95452026810"><a name="en-us_topic_0283136663_en-us_topic_0237122754_p95452026810"></a><a name="en-us_topic_0283136663_en-us_topic_0237122754_p95452026810"></a>Available storage space for spilled data (reserved column; unit: KB) The value <strong id="b175153563410"><a name="b175153563410"></a><a name="b175153563410"></a>-1</strong> indicates that the maximum space for spilled data is not limited.</p>
</td>
</tr>
</tbody>
</table>

