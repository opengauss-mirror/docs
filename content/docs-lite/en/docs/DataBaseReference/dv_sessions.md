# DV\_SESSIONS<a name="EN-US_TOPIC_0000001116241344"></a>

**DV\_SESSIONS**  displays all session information about the current session. By default, only the system administrator can access this view. Common users can access the view only after being authorized.

**Table  1**  DV\_SESSIONS columns

<a name="en-us_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>
<table><thead align="left"><tr id="en-us_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="en-us_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="en-us_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="en-us_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="en-us_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="en-us_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="en-us_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="en-us_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="en-us_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>sid</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="en-us_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="en-us_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="en-us_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="en-us_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>OID of the active backend thread of the current session</p>
</td>
</tr>
<tr id="en-us_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="en-us_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="en-us_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>serial#</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="en-us_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="en-us_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="en-us_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="en-us_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>Sequence number of the backend thread of the current activity, which is <strong id="b2281196104120"><a name="b2281196104120"></a><a name="b2281196104120"></a>0</strong> in <span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span></p>
</td>
</tr>
<tr id="en-us_topic_0059777917_r4f43f04ee2cf4dbca75ce4216116be07"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"><a name="en-us_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"></a><a name="en-us_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"></a>user#</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777917_af9175f2700f14595986eb567026cb6b1"><a name="en-us_topic_0059777917_af9175f2700f14595986eb567026cb6b1"></a><a name="en-us_topic_0059777917_af9175f2700f14595986eb567026cb6b1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"><a name="en-us_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"></a><a name="en-us_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"></a>OID of the user that has logged in to the backend thread. The OID is <strong id="b11960213124214"><a name="b11960213124214"></a><a name="b11960213124214"></a>0</strong> if the backend thread is a global auxiliary thread.</p>
</td>
</tr>
<tr id="en-us_topic_0059777917_rb6bd916cc65247068a5b2f46cc89d629"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777917_a655743001ceb424aa20daaed818626b3"><a name="en-us_topic_0059777917_a655743001ceb424aa20daaed818626b3"></a><a name="en-us_topic_0059777917_a655743001ceb424aa20daaed818626b3"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"><a name="en-us_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"></a><a name="en-us_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"><a name="en-us_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"></a><a name="en-us_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"></a>Name of the user logged in to the backend process. The value is null if the backend thread is a global auxiliary thread.</p>
<p id="p63395261021"><a name="p63395261021"></a><a name="p63395261021"></a><strong id="b131821013434"><a name="b131821013434"></a><a name="b131821013434"></a>application_name</strong> can be identified by associating with <strong id="b121886094318"><a name="b121886094318"></a><a name="b121886094318"></a>pg_stat_get_activity()</strong>.</p>
<p id="p15709171830"><a name="p15709171830"></a><a name="p15709171830"></a>Example:</p>
<p id="p1977515576214"><a name="p1977515576214"></a><a name="p1977515576214"></a>select s.*,a.application_name from DV_SESSIONS as s left join pg_stat_get_activity(NULL) as a on s.sid=a.sessionid;</p>
</td>
</tr>
</tbody>
</table>

