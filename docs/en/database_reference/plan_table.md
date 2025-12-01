# PLAN\_TABLE<a name="EN-US_TOPIC_0289900817"></a>

**PLAN\_TABLE**  displays plan information collected by  **EXPLAIN PLAN**. Plan information is in a session-level lifecycle. After a session exits, the data will be deleted. Data is isolated between sessions and between users.

**Table  1**  PLAN\_TABLE columns

<a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_t749b1c370b1e4c81a41d5c7966458cb2"></a>
<table><thead align="left"><tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_r3f04445cda964e2aa689b8050dc33b95"><th class="cellrowborder" valign="top" width="27.82278227822782%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9fa986027c4d4b52959cc20d3d659b64"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.432643264326426%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a66e3551d1ca3439996075c0c819cf4d5"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.744574457445744%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_acb3888cb80e34b90838ca9997ad5ed3f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ra2e6f27710074b6898fcbe281ce85455"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_afe83cc327ee0475fabec1673bda65595"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_afe83cc327ee0475fabec1673bda65595"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_afe83cc327ee0475fabec1673bda65595"></a>statement_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ad3c3498d91c147cbae52e1f8c2e604bc"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a32415b1f05f9415cafd5f32ef3e6d299"></a>Query tag specified by a user</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_rc36abac79c1b4efebbdf9c56c04326a9"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac6af0b524e5a4e058a27cc1a6a7abfec"></a>plan_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a478948b974a54260ac7f2e7929861b45"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a478948b974a54260ac7f2e7929861b45"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a478948b974a54260ac7f2e7929861b45"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8386817f56444b72973a8b7412ec087e"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8386817f56444b72973a8b7412ec087e"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8386817f56444b72973a8b7412ec087e"></a>Query ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_rbd63bb1c1d7e472a9a21a92687340407"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a8c297e6d26174c2dbf37213f151b0643"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a9b99cdd724714bb4840767ac6fcaa2e9"></a>ID of each operator in a generated plan</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_r2d5cced298194ebba8ae1d4072fd42cb"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a>operation</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_a929c132f4f9e47bcb7517b0999960b68"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_ac59071a9a0114d1f927d80e98685d0b6"></a>Operation description of an operator in a plan</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_row623118217128"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p46189573117"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p46189573117"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p46189573117"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p5618105771111"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p5618105771111"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p5618105771111"></a>varchar2(255)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176181357151118"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176181357151118"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176181357151118"></a>Operation action</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_row72293251210"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p561875761112"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p561875761112"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p561875761112"></a>object_name</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p12619185716117"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p12619185716117"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p12619185716117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p361913573118"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p361913573118"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p361913573118"></a>Object name corresponding to the operation, which is not the object alias used in the query. The object name is defined by users.</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_row18228823125"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p16619135711113"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p16619135711113"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p16619135711113"></a>object_type</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p648441711132"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p648441711132"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p648441711132"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p56197578112"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p56197578112"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p56197578112"></a>Object type</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_row11226192131210"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176191157171111"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176191157171111"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p176191157171111"></a>object_owner</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p261955741117"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p261955741117"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p261955741117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p76191957171113"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p76191957171113"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p76191957171113"></a>Schema to which the object belongs. It is defined by users.</p>
</td>
</tr>
<tr id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_row12827103193212"><td class="cellrowborder" valign="top" width="27.82278227822782%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p111633243217"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p111633243217"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p111633243217"></a>projection</p>
</td>
<td class="cellrowborder" valign="top" width="26.432643264326426%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p163861239173218"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p163861239173218"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p163861239173218"></a>varchar2(4000)</p>
</td>
<td class="cellrowborder" valign="top" width="45.744574457445744%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p121639223213"><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p121639223213"></a><a name="en-us_topic_0283136778_en-us_topic_0237122502_en-us_topic_0165900117_p121639223213"></a>Returned column information</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   A valid  **object\_type**  value consists of a relkind type defined in  [PG\_CLASS](pg_class.md)  \(**TABLE**,  **INDEX**,  **SEQUENCE**,  **VIEW**,  **COMPOSITE TYPE**, or  **TOASTVALUE TOAST**\) and the rtekind type used in the plan \(**SUBQUERY**,  **JOIN**,  **FUNCTION**,  **VALUES**,  **CTE**, or  **REMOTE\_QUERY**\).
>-   For RangeTableEntry \(RTE\),  **object\_owner**  is the object description used in the plan. Non-user-defined objects do not have  **object\_owner**.
>-   Information in the  **statement\_id**,  **object\_name**,  **object\_owner**, and  **projection**  columns is stored in letter cases specified by users and information in other columns is stored in uppercase.
>-   **PLAN\_TABLE**  supports only  **SELECT**  and  **DELETE**  and does not support other DML operations.

