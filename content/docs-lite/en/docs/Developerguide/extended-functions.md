# Extended Functions<a name="EN-US_TOPIC_0289900972"></a>

The following table lists the extended functions supported by openGauss. These functions are for reference only.

<a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_table36793338153059"></a>
<table><thead align="left"><tr id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_row8256713153057"><th class="cellrowborder" valign="top" width="13.3%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55113726153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55113726153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55113726153057"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="37.53%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p54844983153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p54844983153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p54844983153057"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="49.17%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p60256628153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p60256628153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p60256628153057"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_row32745771153057"><td class="cellrowborder" rowspan="2" valign="top" width="13.3%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p20706780153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p20706780153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p20706780153057"></a>Access privilege inquiry function</p>
<p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p10365711153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p10365711153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p10365711153057"></a></p>
</td>
<td class="cellrowborder" valign="top" width="37.53%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p39517468153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p39517468153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p39517468153057"></a>has_sequence_privilege(user, sequence, privilege)</p>
</td>
<td class="cellrowborder" valign="top" width="49.17%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p61561361153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p61561361153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p61561361153057"></a>Queries whether a specified user has privilege for sequences.</p>
</td>
</tr>
<tr id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_row42065549153057"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p22676680153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p22676680153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p22676680153057"></a>has_sequence_privilege(sequence, privilege)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p44628232153057"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p44628232153057"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p44628232153057"></a>Queries whether the current user has privilege for sequence.</p>
</td>
</tr>
<tr id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_row38230543183938"><td class="cellrowborder" rowspan="2" valign="top" width="13.3%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58170845184312"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58170845184312"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58170845184312"></a>Trigger function</p>
</td>
<td class="cellrowborder" valign="top" width="37.53%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p25576862183938"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p25576862183938"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p25576862183938"></a>pg_get_triggerdef(oid)</p>
</td>
<td class="cellrowborder" valign="top" width="49.17%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58459942183938"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58459942183938"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p58459942183938"></a>Gets <strong id="b196358237020"><a name="b196358237020"></a><a name="b196358237020"></a>CREATE</strong> [ <strong id="b66449231202"><a name="b66449231202"></a><a name="b66449231202"></a>CONSTRAINT</strong> ] <strong id="b56455231017"><a name="b56455231017"></a><a name="b56455231017"></a>TRIGGER</strong> command for triggers.</p>
</td>
</tr>
<tr id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_row26617459183938"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p3169557183938"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p3169557183938"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p3169557183938"></a>pg_get_triggerdef(oid, boolean)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55407592183938"><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55407592183938"></a><a name="en-us_topic_0283137689_en-us_topic_0237122203_en-us_topic_0075058739_p55407592183938"></a>Gets <strong id="b136072390018"><a name="b136072390018"></a><a name="b136072390018"></a>CREATE</strong> [ <strong id="b46165391104"><a name="b46165391104"></a><a name="b46165391104"></a>CONSTRAINT</strong> ] <strong id="b161714394011"><a name="b161714394011"></a><a name="b161714394011"></a>TRIGGER</strong> command for triggers.</p>
</td>
</tr>
</tbody>
</table>

