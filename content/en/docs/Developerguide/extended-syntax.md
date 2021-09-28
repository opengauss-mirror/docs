# Extended Syntax<a name="EN-US_TOPIC_0289900434"></a>

openGauss provides the following extended syntax:

**Table  1**  Extended SQL syntax

<a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_table20737187114943"></a>
<table><thead align="left"><tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row41283781114943"><th class="cellrowborder" valign="top" width="13.600000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="40.660000000000004%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"></a>Keywords</p>
</th>
<th class="cellrowborder" valign="top" width="45.739999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row4817543115488"><td class="cellrowborder" rowspan="2" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_p3978173725318"><a name="en-us_topic_0283137193_p3978173725318"></a><a name="en-us_topic_0283137193_p3978173725318"></a>Creating a table</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"></a>INHERITS ( parent_table [, ... ] )</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"></a>Specifies whether an inherited table is supported.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row9961472105052"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p141025671220"><a name="p141025671220"></a><a name="p141025671220"></a>column_constraint:</p>
<p id="p341035641215"><a name="p341035641215"></a><a name="p341035641215"></a><strong id="b1883161111319"><a name="b1883161111319"></a><a name="b1883161111319"></a>REFERENCES reftable</strong></p>
<p id="p12410185617128"><a name="p12410185617128"></a><a name="p12410185617128"></a><strong id="b290261191317"><a name="b290261191317"></a><a name="b290261191317"></a>[ ( refcolumn ) ] [ MATCH</strong></p>
<p id="p3410155651211"><a name="p3410155651211"></a><a name="p3410155651211"></a><strong id="b2926131171315"><a name="b2926131171315"></a><a name="b2926131171315"></a>FULL | MATCH PARTIAL |</strong></p>
<p id="p14410165612122"><a name="p14410165612122"></a><a name="p14410165612122"></a><strong id="b49282114139"><a name="b49282114139"></a><a name="b49282114139"></a>MATCH SIMPLE ][ ON</strong></p>
<p id="p14101856141217"><a name="p14101856141217"></a><a name="p14101856141217"></a><strong id="b6929131191316"><a name="b6929131191316"></a><a name="b6929131191316"></a>DELETE action ] [ ON</strong></p>
<p id="p14410956131219"><a name="p14410956131219"></a><a name="p14410956131219"></a><strong id="b3932111141316"><a name="b3932111141316"></a><a name="b3932111141316"></a>UPDATE action ]</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p12950182813132"><a name="p12950182813132"></a><a name="p12950182813132"></a>You can run <strong id="b41801819816"><a name="b41801819816"></a><a name="b41801819816"></a>REFERENCES reftable[(</strong><em id="i022215236115"><a name="i022215236115"></a><a name="i022215236115"></a>refcolumn</em><strong id="b1617116371716"><a name="b1617116371716"></a><a name="b1617116371716"></a>)] [MATCH FULL |MATCH PARTIAL | MATCH SIMPLE] [ON DELETE action] [ON UPDATE action]</strong> to create foreign key constraints for tables.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row35399482114943"><td class="cellrowborder" rowspan="2" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"></a>Loading a module</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"></a>CREATE EXTENSION</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"></a>Loads a new module (such as DBLINK) to the current database.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row45377207114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"></a>DROP EXTENSION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"></a>Deletes the loaded module.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row61995526114943"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"></a>Aggregate functions</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"></a>CREATE AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"></a>Defines a new aggregation function.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row18853009114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"></a>ALTER AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"></a>Modifies the definition of an aggregate function.</p>
</td>
</tr>
<tr id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_row51713511114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"></a><strong id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"></a>DROP AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"></a><a name="en-us_topic_0283137193_en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"></a>Drops an existing function.</p>
</td>
</tr>
</tbody>
</table>

