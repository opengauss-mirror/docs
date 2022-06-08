# Separation of Duties<a name="EN-US_TOPIC_0289900233"></a>

Descriptions in  [Default Permission Mechanism](en-us_topic_0289899957.md)  and  [Administrator](administrator.md)  are about the initial situation after the database system is created. By default, a system administrator with the  **SYSADMIN**  attribute has the highest-level permissions.

In actual service management, you can set separation of duties to prevent system administrators from having excessive centralized permissions, which may cause high risks. Some permissions of the system administrator are transferred to the security administrator and audit administrator, implementing separation of duties among the system administrator, security administrator, and audit administrator.

After separation of duties is enabled, a system administrator does not have the  **CREATEROLE**  attribute \(security administrator\) and  **AUDITADMIN**  attribute \(audit administrator\). That is, the system administrator does not have the permissions to create roles and users and the permissions to view and maintain database audit logs. For details about the  **CREATEROLE**  and  **AUDITADMIN**  attributes, see  [CREATE ROLE](en-us_topic_0283136858.md).

After separation of duties is enabled, system administrators have the permissions only for the objects owned by them.

Separation of duties does not take effect for an initial user. Therefore, you are advised to use an initial user as a database administrator only for database management other than service running.

To enable separation of duties, set  **[enableSeparationOfDuty](en-us_topic_0283136929.md#en-us_topic_0237124747_en-us_topic_0059777487_s0a79ea55efa1431d8e3e06e4b8219cd6)**  to  **on**.

For details about permission changes before and after enabling separation of duties, see  [Table 1](#en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_t58384b51e1fd4e67ab393f4bb6103a16)  and  [Table 2](#en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_t12fe700a5db44d748cb0dc123012289b).

**Table  1**  Default user permissions

<a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_t58384b51e1fd4e67ab393f4bb6103a16"></a>
<table><thead align="left"><tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ra3884803b279446eb86f336e7ce57baf"><th class="cellrowborder" valign="top" width="12.988701129887009%" id="mcps1.2.7.1.1"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4ec2ae4e8c184702b654ccf6d0162366"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4ec2ae4e8c184702b654ccf6d0162366"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4ec2ae4e8c184702b654ccf6d0162366"></a>Object Name</p>
</th>
<th class="cellrowborder" valign="top" width="15.728427157284273%" id="mcps1.2.7.1.2"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p196861971461"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p196861971461"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p196861971461"></a>Initial User (ID: 10)</p>
</th>
<th class="cellrowborder" valign="top" width="26.987301269873008%" id="mcps1.2.7.1.3"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae0c67fc6656646bba6afa6b3503f7727"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae0c67fc6656646bba6afa6b3503f7727"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae0c67fc6656646bba6afa6b3503f7727"></a>System Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="16.50834916508349%" id="mcps1.2.7.1.4"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p19645171183"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p19645171183"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p19645171183"></a>Security Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="15.218478152184781%" id="mcps1.2.7.1.5"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p5645127180"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p5645127180"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p5645127180"></a>Audit Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="12.568743125687432%" id="mcps1.2.7.1.6"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ab2a48febd464405c847eb55d83cb02b5"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ab2a48febd464405c847eb55d83cb02b5"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ab2a48febd464405c847eb55d83cb02b5"></a>Common User</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r7c1918068ec843d2a7d033495375c19c"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a253876e01dc6470fab9cbdf1af8d5f88"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a253876e01dc6470fab9cbdf1af8d5f88"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a253876e01dc6470fab9cbdf1af8d5f88"></a>Tablespaces</p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p1148152315710"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p1148152315710"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p1148152315710"></a>Has all permissions except the one to access private tables.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a29cc6681c850425081d72d2badd3e8cb"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a29cc6681c850425081d72d2badd3e8cb"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a29cc6681c850425081d72d2badd3e8cb"></a>Can create, modify, delete, access, or grant permissions for tablespaces.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p2823133610219"><a name="en-us_topic_0283137357_p2823133610219"></a><a name="en-us_topic_0283137357_p2823133610219"></a>Cannot create, modify, delete, or grant permissions for tablespaces and can access tablespaces if the access permission is granted.</p>
<p id="en-us_topic_0283137357_p782319361329"><a name="en-us_topic_0283137357_p782319361329"></a><a name="en-us_topic_0283137357_p782319361329"></a></p>
<p id="en-us_topic_0283137357_p4822173611219"><a name="en-us_topic_0283137357_p4822173611219"></a><a name="en-us_topic_0283137357_p4822173611219"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r404880984b6048cc8bbde028c8514fb6"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a47be6088675c4057b4a150c4fb3b266a"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a47be6088675c4057b4a150c4fb3b266a"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a47be6088675c4057b4a150c4fb3b266a"></a>Tables</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a151bf13f8400407592523eb3cc08d25e"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a151bf13f8400407592523eb3cc08d25e"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a151bf13f8400407592523eb3cc08d25e"></a>Has permissions for all tables.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p19261205115218"><a name="en-us_topic_0283137357_p19261205115218"></a><a name="en-us_topic_0283137357_p19261205115218"></a>Has all permissions for their own tables, but does not have permissions for other users' tables.</p>
<p id="en-us_topic_0283137357_p152610513214"><a name="en-us_topic_0283137357_p152610513214"></a><a name="en-us_topic_0283137357_p152610513214"></a></p>
<p id="en-us_topic_0283137357_p9261125120214"><a name="en-us_topic_0283137357_p9261125120214"></a><a name="en-us_topic_0283137357_p9261125120214"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r9c36f2e9d2a7491a8341aed23219edf9"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a619eb88af86346fa9d753f472dfb8572"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a619eb88af86346fa9d753f472dfb8572"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a619eb88af86346fa9d753f472dfb8572"></a>Indexes</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a877122e50c104af98cb2c320322d8f79"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a877122e50c104af98cb2c320322d8f79"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a877122e50c104af98cb2c320322d8f79"></a>Can create indexes on all tables.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p792181837"><a name="en-us_topic_0283137357_p792181837"></a><a name="en-us_topic_0283137357_p792181837"></a>Can create indexes on their own tables.</p>
<p id="en-us_topic_0283137357_p79207115310"><a name="en-us_topic_0283137357_p79207115310"></a><a name="en-us_topic_0283137357_p79207115310"></a></p>
<p id="en-us_topic_0283137357_p29201411832"><a name="en-us_topic_0283137357_p29201411832"></a><a name="en-us_topic_0283137357_p29201411832"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r9611a056351e4252a9067660a539b746"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9bdee2f1008646dbb814dbf7e9bc6179"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9bdee2f1008646dbb814dbf7e9bc6179"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9bdee2f1008646dbb814dbf7e9bc6179"></a>Schemas</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a0c263b9b3e3d4b28b75d46aac62ab0f5"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a0c263b9b3e3d4b28b75d46aac62ab0f5"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a0c263b9b3e3d4b28b75d46aac62ab0f5"></a>Has all permissions for all schemas except <strong id="b1729094461914"><a name="b1729094461914"></a><a name="b1729094461914"></a>dbe_perf</strong>.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p15611161416314"><a name="en-us_topic_0283137357_p15611161416314"></a><a name="en-us_topic_0283137357_p15611161416314"></a>Has all permissions for their own schemas, but does not have permissions for other users' schemas.</p>
<p id="en-us_topic_0283137357_p861116146314"><a name="en-us_topic_0283137357_p861116146314"></a><a name="en-us_topic_0283137357_p861116146314"></a></p>
<p id="en-us_topic_0283137357_p16610131420314"><a name="en-us_topic_0283137357_p16610131420314"></a><a name="en-us_topic_0283137357_p16610131420314"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_rf666ddf576174ca481730d4ae57a1b87"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4c71a8b03540412a92dc00abf0c7a2fe"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4c71a8b03540412a92dc00abf0c7a2fe"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4c71a8b03540412a92dc00abf0c7a2fe"></a>Functions</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aa4ab964c4193428ca1e904f1c0b1afc7"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aa4ab964c4193428ca1e904f1c0b1afc7"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aa4ab964c4193428ca1e904f1c0b1afc7"></a>Has all permissions for all functions except those in the <strong id="b879172714241"><a name="b879172714241"></a><a name="b879172714241"></a>dbe_perf</strong> schema.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p15122326635"><a name="en-us_topic_0283137357_p15122326635"></a><a name="en-us_topic_0283137357_p15122326635"></a>Has permissions for their own functions, has the call permission for other users' functions in the <strong id="b168723361561"><a name="b168723361561"></a><a name="b168723361561"></a>public</strong> schema, but does not have permissions for other users' functions in other schemas.</p>
<p id="en-us_topic_0283137357_p41222026034"><a name="en-us_topic_0283137357_p41222026034"></a><a name="en-us_topic_0283137357_p41222026034"></a></p>
<p id="en-us_topic_0283137357_p141225266310"><a name="en-us_topic_0283137357_p141225266310"></a><a name="en-us_topic_0283137357_p141225266310"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r4a1dffaff80344f4a77052f7217d1517"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac376a279c0464bd2b94a985075df9c3b"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac376a279c0464bd2b94a985075df9c3b"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac376a279c0464bd2b94a985075df9c3b"></a>Customized views</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9887543f5895458095b8f8540085ca90"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9887543f5895458095b8f8540085ca90"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9887543f5895458095b8f8540085ca90"></a>Has all permissions on all views except the <strong id="b29385142517"><a name="b29385142517"></a><a name="b29385142517"></a>dbe_perf</strong> schema view.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_p21804485320"><a name="en-us_topic_0283137357_en-us_topic_0237121101_p21804485320"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_p21804485320"></a>Has permissions for their own views, but does not have permissions for other users' views.</p>
<p id="en-us_topic_0283137357_p9691205117320"><a name="en-us_topic_0283137357_p9691205117320"></a><a name="en-us_topic_0283137357_p9691205117320"></a></p>
<p id="en-us_topic_0283137357_p156902511835"><a name="en-us_topic_0283137357_p156902511835"></a><a name="en-us_topic_0283137357_p156902511835"></a></p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_row177919184111"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p3791121871117"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p3791121871117"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p3791121871117"></a>System catalogs and system views</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p8791418201112"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p8791418201112"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p8791418201112"></a>Has permissions to query all system catalogs and views.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_p32116536521"><a name="en-us_topic_0283137357_en-us_topic_0237121101_p32116536521"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_p32116536521"></a>Has permissions to query only some system catalogs and views. For details, see <a href="en-us_topic_0283137589.md">System Catalogs and System Views</a>.</p>
<p id="en-us_topic_0283137357_p16256201112418"><a name="en-us_topic_0283137357_p16256201112418"></a><a name="en-us_topic_0283137357_p16256201112418"></a></p>
<p id="en-us_topic_0283137357_p425619111041"><a name="en-us_topic_0283137357_p425619111041"></a><a name="en-us_topic_0283137357_p425619111041"></a></p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Changes in permissions after separation of duties

<a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_t12fe700a5db44d748cb0dc123012289b"></a>
<table><thead align="left"><tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r6e8e75fa36f44531b77c87dac8403cf2"><th class="cellrowborder" valign="top" width="10.09%" id="mcps1.2.7.1.1"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4255b67c5ec84a81a74de01843e4ea7b"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4255b67c5ec84a81a74de01843e4ea7b"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4255b67c5ec84a81a74de01843e4ea7b"></a>Object Name</p>
</th>
<th class="cellrowborder" valign="top" width="13.8%" id="mcps1.2.7.1.2"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a963f1a302c3b41e398908c082ed8f9ce"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a963f1a302c3b41e398908c082ed8f9ce"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a963f1a302c3b41e398908c082ed8f9ce"></a>Initial User (ID: 10)</p>
</th>
<th class="cellrowborder" valign="top" width="38.05%" id="mcps1.2.7.1.3"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a2a7cfabdc0924ccda2ec1b7fdde7ee62"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a2a7cfabdc0924ccda2ec1b7fdde7ee62"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a2a7cfabdc0924ccda2ec1b7fdde7ee62"></a>System Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="12.5%" id="mcps1.2.7.1.4"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9064d2591f3440688aa30aa8d7ed777f"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9064d2591f3440688aa30aa8d7ed777f"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a9064d2591f3440688aa30aa8d7ed777f"></a>Security Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="12.58%" id="mcps1.2.7.1.5"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4164eb2afd104a50929f3508e29cf06f"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4164eb2afd104a50929f3508e29cf06f"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4164eb2afd104a50929f3508e29cf06f"></a>Audit Administrator</p>
</th>
<th class="cellrowborder" valign="top" width="12.98%" id="mcps1.2.7.1.6"><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_abcd1416053644e879a5182e2a33a2de9"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_abcd1416053644e879a5182e2a33a2de9"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_abcd1416053644e879a5182e2a33a2de9"></a>Common User</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r60bffe13a20e4deabb25b6489631f595"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a666d9e23e2b34280bb58e33477199650"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a666d9e23e2b34280bb58e33477199650"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a666d9e23e2b34280bb58e33477199650"></a>Tablespaces</p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a93ddd6eba08448ab96a8c230d5e76af4"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a93ddd6eba08448ab96a8c230d5e76af4"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a93ddd6eba08448ab96a8c230d5e76af4"></a>N/A</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_p3411193065916"><a name="en-us_topic_0283137357_en-us_topic_0237121101_p3411193065916"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_p3411193065916"></a>Has all permissions except the one to access private tables.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4b1e52e647e64f1b91c5d2470b2bb1e4"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4b1e52e647e64f1b91c5d2470b2bb1e4"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a4b1e52e647e64f1b91c5d2470b2bb1e4"></a>N/A</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p1322053913520"><a name="en-us_topic_0283137357_p1322053913520"></a><a name="en-us_topic_0283137357_p1322053913520"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r26e2222e296440baa89a982b24ca4eda"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a49534b8ae00d42ba80aa74c5267af432"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a49534b8ae00d42ba80aa74c5267af432"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a49534b8ae00d42ba80aa74c5267af432"></a>Tables</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p6531141101516"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p6531141101516"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p6531141101516"></a>Permissions reduced</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a95f9c16384e545a6b3796f3ad41aa880"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a95f9c16384e545a6b3796f3ad41aa880"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a95f9c16384e545a6b3796f3ad41aa880"></a>Has all permissions for their own tables and other users' tables in the <strong id="b2553431274"><a name="b2553431274"></a><a name="b2553431274"></a>public</strong> schema, but does not have permissions for other users' tables in other schemas.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p52207391254"><a name="en-us_topic_0283137357_p52207391254"></a><a name="en-us_topic_0283137357_p52207391254"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r308f54fa959d42db9582be10d3232824"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac2ad033b1e2c47418fc213fed99f47ef"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac2ad033b1e2c47418fc213fed99f47ef"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ac2ad033b1e2c47418fc213fed99f47ef"></a>Indexes</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p7477173610162"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p7477173610162"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p7477173610162"></a>Permissions reduced</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_af29d80b0a30541a9b8c24a55b38a620d"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_af29d80b0a30541a9b8c24a55b38a620d"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_af29d80b0a30541a9b8c24a55b38a620d"></a>Can create indexes for their own tables and other users' tables in the <strong id="b1820621512275"><a name="b1820621512275"></a><a name="b1820621512275"></a>public</strong> schema.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p1722112391359"><a name="en-us_topic_0283137357_p1722112391359"></a><a name="en-us_topic_0283137357_p1722112391359"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_r14c1641edbe84f5e93dddeb3751b2224"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae982b43ee61147ad8a5a5ffa0c8079f2"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae982b43ee61147ad8a5a5ffa0c8079f2"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae982b43ee61147ad8a5a5ffa0c8079f2"></a>Schemas</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p12446216161717"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p12446216161717"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p12446216161717"></a>Permissions reduced</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae113bf8d16ed424a9d6508470fa42a65"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae113bf8d16ed424a9d6508470fa42a65"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_ae113bf8d16ed424a9d6508470fa42a65"></a>Has all permissions for their own schemas, but does not have permissions for other users' schemas.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p5221839256"><a name="en-us_topic_0283137357_p5221839256"></a><a name="en-us_topic_0283137357_p5221839256"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_rd6753ae66463419f8eb9463480aa4287"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aaf1a2697b9ff494e80d30ad9c31f4d9e"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aaf1a2697b9ff494e80d30ad9c31f4d9e"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aaf1a2697b9ff494e80d30ad9c31f4d9e"></a>Functions</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p10587182441717"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p10587182441717"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p10587182441717"></a>Permissions reduced</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aad1a841b6cda496ba7b2223ab8897b13"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aad1a841b6cda496ba7b2223ab8897b13"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_aad1a841b6cda496ba7b2223ab8897b13"></a>Has all permissions for their own functions and other users' functions in the <strong id="b78691521284"><a name="b78691521284"></a><a name="b78691521284"></a>public</strong> schema, but does not have permissions for other users' functions in other schemas.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p1222110391253"><a name="en-us_topic_0283137357_p1222110391253"></a><a name="en-us_topic_0283137357_p1222110391253"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_rbedd832a60b04957811f49804e9e6302"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a20f2a6c45dcb45af81ac623685fa6fe3"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a20f2a6c45dcb45af81ac623685fa6fe3"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a20f2a6c45dcb45af81ac623685fa6fe3"></a>Customized views</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p23393350179"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p23393350179"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p23393350179"></a>Permissions reduced</p>
<p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a1d3d5014611c43148e98a5ac30f94cdb"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a1d3d5014611c43148e98a5ac30f94cdb"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_a1d3d5014611c43148e98a5ac30f94cdb"></a>Has all permissions for their own views and other users' views in the <strong id="b0311161910285"><a name="b0311161910285"></a><a name="b0311161910285"></a>public</strong> schema, but does not have permissions for other users' views in other schemas.</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p13221113914518"><a name="en-us_topic_0283137357_p13221113914518"></a><a name="en-us_topic_0283137357_p13221113914518"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_row7583185092111"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p14583145082110"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p14583145082110"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p14583145082110"></a>System catalogs and system views</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p18583450112110"><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p18583450112110"></a><a name="en-us_topic_0283137357_en-us_topic_0237121101_en-us_topic_0155089861_p18583450112110"></a>N/A</p>
</td>
<td class="cellrowborder" colspan="3" valign="top" headers="mcps1.2.7.1.4 mcps1.2.7.1.5 mcps1.2.7.1.6 "><p id="en-us_topic_0283137357_p32219391455"><a name="en-us_topic_0283137357_p32219391455"></a><a name="en-us_topic_0283137357_p32219391455"></a>N/A</p>
</td>
</tr>
</tbody>
</table>


> ![](C:/Users/liyang/Desktop/latest/docs/content/zh/docs/Developerguide/public_sys-resources/icon-notice.gif) **Notice:**   
>
> PG_STATISTIC system table and PG_STATISTIC_EXT system table store some sensitive information of statistical objects, such as high frequency value MCV. After the separation of powers is carried out, the system administrator can still obtain the information in the statistical information by accessing the two system tables.