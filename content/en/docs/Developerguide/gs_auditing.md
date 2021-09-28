# GS\_AUDITING<a name="EN-US_TOPIC_0306525316"></a>

**GS\_AUDITING**  displays all audit information about database-related operations. Only the users with system administrator or security policy administrator permission can access this view.

**Table  1**  GS\_AUDITING columns

<a name="t8f0334486f934453827d563b90c86711"></a>
<table><thead align="left"><tr id="r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="23%" id="mcps1.2.4.1.1"><p id="a5579cdd06a5645b3862144b2131a8649"><a name="a5579cdd06a5645b3862144b2131a8649"></a><a name="a5579cdd06a5645b3862144b2131a8649"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.000000000000002%" id="mcps1.2.4.1.2"><p id="a1f7bf547d07e4656a132c0e34ba635ca"><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="63%" id="mcps1.2.4.1.3"><p id="a8447f6b31ba54199a8224fea8463c23d"><a name="a8447f6b31ba54199a8224fea8463c23d"></a><a name="a8447f6b31ba54199a8224fea8463c23d"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="a8f18d3f0e5cd44d096020df47ca28e00"><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a>polname</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="aecd744296d7d4b0397b2fe1fd923b6bf"><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a8579d68414bb40968ecb2f54fd50bfa3"><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a>Policy name, which must be unique</p>
</td>
</tr>
<tr id="r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="ad7f3b45edf4748ef8bf45be74968b4ac"><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a>pol_type</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a0b778f8c6817439484fd5f0cb1d91e8b"><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p6131333104318"><a name="p6131333104318"></a><a name="p6131333104318"></a>Audit policy type. The value can be <strong id="b381413117114"><a name="b381413117114"></a><a name="b381413117114"></a>access</strong> or <strong id="b13814213118"><a name="b13814213118"></a><a name="b13814213118"></a>privilege</strong>.</p>
<a name="ul9534444204311"></a><a name="ul9534444204311"></a><ul id="ul9534444204311"><li><strong id="b1535213398175"><a name="b1535213398175"></a><a name="b1535213398175"></a>access</strong>: DML operations are audited.</li><li><strong id="b6942124312176"><a name="b6942124312176"></a><a name="b6942124312176"></a>privilege</strong>: DDL operations are audited.</li></ul>
</td>
</tr>
<tr id="r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p106232332384"><a name="p106232332384"></a><a name="p106232332384"></a>polenabled</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="abe1aa36777e444c48c10c68dea6d28bd"><a name="abe1aa36777e444c48c10c68dea6d28bd"></a><a name="abe1aa36777e444c48c10c68dea6d28bd"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Specifies whether to enable a policy.</p>
<a name="ul21561963304"></a><a name="ul21561963304"></a><ul id="ul21561963304"><li><strong id="b9786252125411"><a name="b9786252125411"></a><a name="b9786252125411"></a>t</strong> (true): enabled</li><li><strong id="b44528520559"><a name="b44528520559"></a><a name="b44528520559"></a>f</strong> (false): disabled</li></ul>
</td>
</tr>
<tr id="ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p13227139193819"><a name="p13227139193819"></a><a name="p13227139193819"></a>access_type</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="p84741447191914"><a name="p84741447191914"></a><a name="p84741447191914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a83dfda58a9ac418fab57f167cd4a8244"><a name="a83dfda58a9ac418fab57f167cd4a8244"></a><a name="a83dfda58a9ac418fab57f167cd4a8244"></a>DML database operation type. For example, SELECT, INSERT, and DELETE.</p>
</td>
</tr>
<tr id="rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p9209164410381"><a name="p9209164410381"></a><a name="p9209164410381"></a>label_name</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a>Resource label name. This column corresponds to the <strong id="b92051391565"><a name="b92051391565"></a><a name="b92051391565"></a>polname</strong> column in the <strong id="b321293911615"><a name="b321293911615"></a><a name="b321293911615"></a>GS_AUDITING_POLICY</strong> system catalog.</p>
</td>
</tr>
<tr id="ra831355d65f64e7b92f51f84021f4947"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p13905154725612"><a name="p13905154725612"></a><a name="p13905154725612"></a>priv_object</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a9193af9c57084a81b157fec2c2935f90"><a name="a9193af9c57084a81b157fec2c2935f90"></a><a name="a9193af9c57084a81b157fec2c2935f90"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p94681158175615"><a name="p94681158175615"></a><a name="p94681158175615"></a>Describes the path of the database asset.</p>
</td>
</tr>
<tr id="rdb4c5c3a41fb4325a8c11787c3af82b1"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="ab44539456dc4418bbfdc32a89a1f2851"><a name="ab44539456dc4418bbfdc32a89a1f2851"></a><a name="ab44539456dc4418bbfdc32a89a1f2851"></a>filter_name</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a17a7c300ce604cd380d8340e5bfa63c3"><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p10707151153"><a name="p10707151153"></a><a name="p10707151153"></a>Logical character string of a filter criterion</p>
</td>
</tr>
</tbody>
</table>

