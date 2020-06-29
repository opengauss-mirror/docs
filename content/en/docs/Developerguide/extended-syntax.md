# Extended Syntax<a name="EN-US_TOPIC_0242370668"></a>

openGauss provides extended syntax, which is in the beta phase and is for internal use only.

The following table lists the extended syntax supported by openGauss.

**Table  1**  Extended SQL syntax

<a name="en-us_topic_0237122204_en-us_topic_0075052788_table20737187114943"></a>
<table><thead align="left"><tr id="en-us_topic_0237122204_en-us_topic_0075052788_row41283781114943"><th class="cellrowborder" valign="top" width="13.600000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p11512152114943"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="40.660000000000004%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p60069106114943"></a>Keywords</p>
</th>
<th class="cellrowborder" valign="top" width="45.739999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33759437114943"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122204_en-us_topic_0075052788_row4817543115488"><td class="cellrowborder" rowspan="2" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="p3978173725318"><a name="p3978173725318"></a><a name="p3978173725318"></a>Creating a table (CREATE TABLE)</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p15004500154828"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b822773154828"></a>INHERITS ( parent_table [, ... ] )</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p3211661115488"></a>Specifies whether an inherited table is supported.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row9961472105052"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p8953452165324"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p8953452165324"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p8953452165324"></a>table_constraint:</p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p59202703165334"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p59202703165334"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p59202703165334"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b65409779165340"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b65409779165340"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b65409779165340"></a>EXCLUDE [ USING index_method ] ( exclude_element WITH operator [, ... ] )</strong> index_parameters [ WHERE ( predicate ) ] |  <strong id="en-us_topic_0237122204_en-us_topic_0075052788_b54321656165615"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b54321656165615"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b54321656165615"></a>FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]</strong></p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p4086232616560"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4086232616560"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4086232616560"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b19132858165615"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b19132858165615"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b19132858165615"></a>[ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ]</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p31160711155058"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31160711155058"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31160711155058"></a>Specifies that users cannot use <strong id="b1976014285555"><a name="b1976014285555"></a><a name="b1976014285555"></a>EXCLUDE [ USING index_method ] (exclude_element WITH operator [, ... ])</strong> to create an excluding constraint for a table.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row61194818143040"><td class="cellrowborder" rowspan="2" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p2046128017718"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2046128017718"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2046128017718"></a>Altering a table (ALTER TABLE)</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p2403081143514"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2403081143514"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2403081143514"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b18449383143526"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b18449383143526"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b18449383143526"></a>TO { GROUP groupname | NODE ( nodename [, ... ] ) }</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p43048255155330"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p43048255155330"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p43048255155330"></a>Modifies the list of DNs where table data is distributed.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row2123109715535"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4633698715535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4633698715535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4633698715535"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b589807415539"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b589807415539"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b589807415539"></a>DELETE NODE ( nodename [, ... ] )</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p6230848115535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6230848115535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6230848115535"></a>Deletes the DNs on which table data is distributed.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row35399482114943"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44996316142820"></a>Loading a module</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20822959142820"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b53188904142820"></a>CREATE EXTENSION</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p13333950142820"></a>Loads a new module (such as DBLINK) to the current database.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row38637918114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p35276575142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35276575142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35276575142820"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b49053725142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b49053725142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b49053725142820"></a>ALTER EXTENSION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p13928822142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p13928822142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p13928822142820"></a>Modifies the loaded module.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row45377207114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p63915288142820"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b38366683142820"></a>DROP EXTENSION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20693622142820"></a>Deletes the loaded module.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row61995526114943"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p24769162163319"></a>Aggregate functions</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p60145115163319"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4435127163319"></a>CREATE AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p23701020163319"></a>Defines a new aggregate function.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row18853009114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33298692163319"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b31252773163319"></a>ALTER AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48446667163319"></a>Modifies the definition of an aggregate function.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row51713511114943"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10640564163319"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b28656218163319"></a>DROP AGGREGATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p39452355163319"></a>Drops an existing aggregate function.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row55807262163441"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p53965319165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p53965319165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p53965319165035"></a>Operators</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p9114748165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p9114748165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p9114748165035"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b14923874165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b14923874165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b14923874165035"></a>CREATE OPERATOR</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p874315165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p874315165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p874315165035"></a>Defines a new operator.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row39117714163444"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p20743349165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20743349165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p20743349165035"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b52472416165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b52472416165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b52472416165035"></a>ALTER OPERATOR</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p22407307165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p22407307165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p22407307165035"></a>Modifies the definition of an operator.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row2793402916342"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p10719606165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10719606165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10719606165035"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b29367590165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29367590165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29367590165035"></a>DROP OPERATOR</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p29964562165035"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p29964562165035"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p29964562165035"></a>Drops an existing operator from the database.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row51644162163356"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p8518850165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p8518850165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p8518850165242"></a>Operator classes</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p18938254165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p18938254165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p18938254165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b36226562165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b36226562165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b36226562165242"></a>CREATE OPERATOR CLASS</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p48670377165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48670377165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48670377165242"></a>Defines a new operator class.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row10693510163352"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p35075165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35075165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35075165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b315675165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b315675165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b315675165242"></a>ALTER OPERATOR CLASS</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p25569733165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25569733165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25569733165242"></a>Modifies the definition of an operator class.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row23109243163349"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p51963903165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p51963903165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p51963903165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b65021949165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b65021949165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b65021949165242"></a>DROP OPERATOR CLASS</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p32286505165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p32286505165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p32286505165242"></a>Drops an existing operator class.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row62131705165236"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p48759746165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48759746165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p48759746165242"></a>Operator families</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p57225348165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p57225348165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p57225348165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b45266086165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b45266086165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b45266086165242"></a>CREATE OPERATOR FAMILY</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p42674388165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p42674388165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p42674388165242"></a>Defines a new operator family.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row34318621165232"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p9239696165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p9239696165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p9239696165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b16048408165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b16048408165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b16048408165242"></a>ALTER OPERATOR FAMILY</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p24852680165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p24852680165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p24852680165242"></a>Modifies the definition of an operator family.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row35572770165240"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p56387109165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p56387109165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p56387109165242"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b37721938165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b37721938165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b37721938165242"></a>DROP OPERATOR FAMILY</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p35578115165242"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35578115165242"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35578115165242"></a>Deletes an existing operator family.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row29943718173826"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p34197000174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p34197000174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p34197000174032"></a>Text search parsers</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p18493624174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p18493624174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p18493624174032"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b61683997174255"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b61683997174255"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b61683997174255"></a>CREATE TEXT SEARCH PARSER</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p34583445174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p34583445174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p34583445174032"></a>Creates a text search parser.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row12954656173823"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p45507827174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p45507827174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p45507827174032"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b6699095117433"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b6699095117433"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b6699095117433"></a>ALTER TEXT SEARCH PARSER</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p23427706174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p23427706174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p23427706174032"></a>Modifies a text search parser.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row2069115173828"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p33146435174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33146435174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33146435174032"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b58690219174311"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b58690219174311"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b58690219174311"></a>DROP TEXT SEARCH PARSER</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4560691174032"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4560691174032"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4560691174032"></a>Deletes an existing text search parser.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row5861246173811"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p10270243174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10270243174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p10270243174150"></a>Text search templates</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p26583384174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p26583384174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p26583384174150"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b2390512817443"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b2390512817443"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b2390512817443"></a>CREATE TEXT SEARCH TEMPLATE</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p45958180174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p45958180174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p45958180174150"></a>Creates a text search template.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row6006798417388"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p36370944174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p36370944174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p36370944174150"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b25473574174410"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b25473574174410"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b25473574174410"></a>ALTER TEXT SEARCH TEMPLATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p6417478174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6417478174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6417478174150"></a>Modifies a text search template.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row3146221017385"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p49032691174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49032691174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49032691174150"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b64603645174412"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b64603645174412"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b64603645174412"></a>DROP TEXT SEARCH TEMPLATE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p42916399174150"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p42916399174150"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p42916399174150"></a>Deletes an existing text search template.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row62874300165210"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p61997474165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p61997474165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p61997474165646"></a>Collation rules</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p55739516165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p55739516165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p55739516165646"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b31893599165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b31893599165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b31893599165646"></a>CREATE COLLATION</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p33244718165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33244718165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33244718165646"></a>Creates a collation rule.</p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p30767013165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p30767013165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p30767013165646"></a>The collation rule allows users to define data in the column-level, or even the collation rule and character class behaviors at the operation level.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row6278877016564"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p57304480165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p57304480165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p57304480165646"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b45978272165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b45978272165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b45978272165646"></a>ALTER COLLATION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p33252524165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33252524165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p33252524165646"></a>Modifies a collation rule.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row687154516567"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p44991661165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44991661165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44991661165646"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b2271772165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b2271772165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b2271772165646"></a>DROP COLLATION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p49795807165646"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49795807165646"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49795807165646"></a>Deletes a collation rule.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row46398756165614"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p54460387165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p54460387165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p54460387165944"></a>Generating a notification</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p49215220165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49215220165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p49215220165944"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b40283796165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b40283796165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b40283796165944"></a>NOTIFY</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p41762050165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p41762050165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p41762050165944"></a>The <strong id="b14330171062718"><a name="b14330171062718"></a><a name="b14330171062718"></a>NOTIFY</strong> command sends a notification together with an optional "payload" string to each client that has previously executed <strong id="b0336121015277"><a name="b0336121015277"></a><a name="b0336121015277"></a>LISTEN</strong> for a specified channel in the current database.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row4648024165620"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p44219777165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44219777165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44219777165944"></a>Listening for a notification</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p25032147165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25032147165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25032147165944"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b23962737165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b23962737165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b23962737165944"></a>LISTEN</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p61933521165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p61933521165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p61933521165944"></a>Registers a listener for the current session.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row62807469165849"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p52380646165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p52380646165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p52380646165944"></a>Stopping listening for a notification</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p14973947165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p14973947165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p14973947165944"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b547797165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b547797165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b547797165944"></a>UNLISTEN</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p44371624165944"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44371624165944"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p44371624165944"></a>Clears all listeners of this session registration.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row11131163165845"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p2702005617034"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2702005617034"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2702005617034"></a>Loading or reloading a shared library file</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4114092117034"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4114092117034"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4114092117034"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b3472396917034"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b3472396917034"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b3472396917034"></a>LOAD</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p6117811117034"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6117811117034"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6117811117034"></a>Loads a shared library file to the address space of the database server.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row11976482165842"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p2826901517115"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2826901517115"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p2826901517115"></a>Releasing session resources in a database</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p808889817115"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p808889817115"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p808889817115"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b569122317115"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b569122317115"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b569122317115"></a>DISCARD</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5833594217115"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5833594217115"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5833594217115"></a>Releases session resources in a database.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row49720493165852"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p25249590171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25249590171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25249590171450"></a>Procedural languages</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p31950935171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31950935171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31950935171450"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b19122967171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b19122967171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b19122967171450"></a>CREATE LANGUAGE</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5456514171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5456514171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5456514171450"></a>Registers a new language.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row27149812163344"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p12077065171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p12077065171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p12077065171450"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b41584726171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b41584726171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b41584726171450"></a>ALTER LANGUAGE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p12919635171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p12919635171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p12919635171450"></a>Modifies the definition of a procedural language.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row36554751165838"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p65085827171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p65085827171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p65085827171450"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b48901532171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b48901532171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b48901532171450"></a>DROP LANGUAGE</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p1601195171450"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1601195171450"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1601195171450"></a>Deletes a procedural language.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row39439204165834"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p316747171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p316747171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p316747171535"></a>Domains</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p25656579171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25656579171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25656579171535"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b29582621171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29582621171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29582621171535"></a>CREATE DOMAIN</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p47382116171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p47382116171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p47382116171535"></a>Creates a domain.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row31415130165831"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p30968597171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p30968597171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p30968597171535"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b10281925171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b10281925171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b10281925171535"></a>ALTER DOMAIN</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p27529582171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p27529582171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p27529582171535"></a>Modifies the definition of an existing domain.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row13332902165826"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p16302640171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p16302640171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p16302640171535"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b12506036171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b12506036171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b12506036171535"></a>DROP DOMAIN</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p6356032171535"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6356032171535"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6356032171535"></a>Deletes a domain.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row5131404417726"><td class="cellrowborder" rowspan="3" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p6224245217169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6224245217169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p6224245217169"></a>Code conversion</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p847384717169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p847384717169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p847384717169"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b915576417169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b915576417169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b915576417169"></a>CREATE CONVERSION</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p341940917169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p341940917169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p341940917169"></a>Defines the character set conversion.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row5701555517722"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4923492917169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4923492917169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4923492917169"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b4046117817169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4046117817169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4046117817169"></a>ALTER CONVERSION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5613002517169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5613002517169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5613002517169"></a>Modifies the definition of a code conversion.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row41086586163418"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4932369817169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4932369817169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4932369817169"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b4126010517169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4126010517169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b4126010517169"></a>DROP CONVERSION</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5373421817169"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5373421817169"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5373421817169"></a>Deletes a previously defined code conversion.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row30614726171612"><td class="cellrowborder" rowspan="2" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p4161474617233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4161474617233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p4161474617233"></a>Type conversion</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p1535126517233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1535126517233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1535126517233"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b394366017233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b394366017233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b394366017233"></a>CREATE CAST</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5100104717233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5100104717233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5100104717233"></a>Defines a new type conversion. A conversion specifies how to perform a conversion between two data types.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row20671604171618"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p5056349017233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5056349017233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p5056349017233"></a><strong id="en-us_topic_0237122204_en-us_topic_0075052788_b5241822617233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b5241822617233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b5241822617233"></a>DROP CAST</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p1801788617233"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1801788617233"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p1801788617233"></a>Deletes a previously defined type conversion.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row43582246182016"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p40501017182016"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p40501017182016"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p40501017182016"></a>Creating a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p59356916182016"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p59356916182016"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p59356916182016"></a>CURSOR name [ BINARY ] [ <strong id="en-us_topic_0237122204_en-us_topic_0075052788_b29136252182158"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29136252182158"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b29136252182158"></a>INSENSITIVE </strong>] [ [ NO ] <strong id="en-us_topic_0237122204_en-us_topic_0075052788_b1785637418225"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b1785637418225"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b1785637418225"></a>SCROLL </strong>] [ <strong id="en-us_topic_0237122204_en-us_topic_0075052788_b11885856182212"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b11885856182212"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b11885856182212"></a>WITH HOLD</strong> ] FOR query</p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p43180896182016"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p43180896182016"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p43180896182016"></a><strong id="b6456164715488"><a name="b6456164715488"></a><a name="b6456164715488"></a>INSENSITIVE</strong></p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p35452655182958"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35452655182958"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p35452655182958"></a>is used only for being compatible with the SQL standard.</p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p50638445182958"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p50638445182958"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p50638445182958"></a><strong id="b13484183934817"><a name="b13484183934817"></a><a name="b13484183934817"></a>SCROLL</strong> declares that the cursor can be used for reverse search.</p>
<p id="en-us_topic_0237122204_en-us_topic_0075052788_p25004370183037"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25004370183037"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p25004370183037"></a><strong id="b20603221144914"><a name="b20603221144914"></a><a name="b20603221144914"></a>WITH HOLD</strong> indicates that a cursor can still be used after the transaction creating the cursor is successfully committed.</p>
</td>
</tr>
<tr id="en-us_topic_0237122204_en-us_topic_0075052788_row5247254182020"><td class="cellrowborder" valign="top" width="13.600000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p22374400182020"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p22374400182020"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p22374400182020"></a>Moving a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="40.660000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p387094182020"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p387094182020"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p387094182020"></a>MOVE <strong id="en-us_topic_0237122204_en-us_topic_0075052788_b50780822182231"><a name="en-us_topic_0237122204_en-us_topic_0075052788_b50780822182231"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_b50780822182231"></a>BACKWARD</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.739999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122204_en-us_topic_0075052788_p31354690182020"><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31354690182020"></a><a name="en-us_topic_0237122204_en-us_topic_0075052788_p31354690182020"></a>A reverse mobile cursor can be used only when it is used together with SCROLL.</p>
</td>
</tr>
</tbody>
</table>

