# GS\_GLOBAL\_CONFIG<a name="EN-US_TOPIC_0000001111762848"></a>

**GS\_GLOBAL\_CONFIG**  records the parameter values specified by users during database instance initialization. In addition, weak passwords set by users are also stored.

**Table  1**  GS\_GLOBAL\_CONFIG columns

<a name="en-us_topic_0166116567_t749b1c370b1e4c81a41d5c7966458cb2"></a>
<table><thead align="left"><tr id="en-us_topic_0166116567_r3f04445cda964e2aa689b8050dc33b95"><th class="cellrowborder" valign="top" width="10.171017101710172%" id="mcps1.2.4.1.1"><p id="en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"><a name="en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a><a name="en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="9.26092609260926%" id="mcps1.2.4.1.2"><p id="en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"><a name="en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a><a name="en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="80.56805680568057%" id="mcps1.2.4.1.3"><p id="en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"><a name="en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a><a name="en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0166116567_ra2e6f27710074b6898fcbe281ce85455"><td class="cellrowborder" valign="top" width="10.171017101710172%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0166116567_p1029934418416"><a name="en-us_topic_0166116567_p1029934418416"></a><a name="en-us_topic_0166116567_p1029934418416"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="9.26092609260926%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0166116567_p929616441417"><a name="en-us_topic_0166116567_p929616441417"></a><a name="en-us_topic_0166116567_p929616441417"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="80.56805680568057%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0166116567_p131161339171115"><a name="en-us_topic_0166116567_p131161339171115"></a><a name="en-us_topic_0166116567_p131161339171115"></a>Name of the built-in parameter specified by the system during database instance initialization. In the current version, the first row is <strong id="b06742040807"><a name="b06742040807"></a><a name="b06742040807"></a>buckets_len</strong> by default, and the second and later rows store weak password names.</p>
</td>
</tr>
<tr id="en-us_topic_0166116567_rc36abac79c1b4efebbdf9c56c04326a9"><td class="cellrowborder" valign="top" width="10.171017101710172%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0166116567_p5287154419419"><a name="en-us_topic_0166116567_p5287154419419"></a><a name="en-us_topic_0166116567_p5287154419419"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="9.26092609260926%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0166116567_p192806441143"><a name="en-us_topic_0166116567_p192806441143"></a><a name="en-us_topic_0166116567_p192806441143"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="80.56805680568057%" headers="mcps1.2.4.1.3 "><p id="p1157111314127"><a name="p1157111314127"></a><a name="p1157111314127"></a>Value of the built-in parameter specified by the system during database instance initialization. In the current version, the length of the first row is <strong id="b340216591406"><a name="b340216591406"></a><a name="b340216591406"></a>bucketmap</strong> by default. The second line and later rows store weak passwords.</p>
</td>
</tr>
</tbody>
</table>

