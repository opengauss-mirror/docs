# DB4AI.CREATE\_SNAPSHOT\_INTERNAL<a name="EN-US_TOPIC_0000001149551352"></a>

**CREATE\_SNAPSHOT\_INTERNAL**  is a built-in execution function of the DB4AI.CREATE\_SNAPSHOT function. The function involves information verification and cannot be directly invoked.

**Table  1**  DB4AI.CREATE\_SNAPSHOT\_INTERNAL input parameters and return values

<a name="table061004318194"></a>
<table><thead align="left"><tr id="row1061034317193"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row261094318196"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p12632919142018"><a name="p12632919142018"></a><a name="p12632919142018"></a>s_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p561034321911"><a name="p561034321911"></a><a name="p561034321911"></a>IN BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1761017433196"><a name="p1761017433196"></a><a name="p1761017433196"></a>Snapshot ID</p>
</td>
</tr>
<tr id="row186101943181910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13325182417204"><a name="p13325182417204"></a><a name="p13325182417204"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1661054315199"><a name="p1661054315199"></a><a name="p1661054315199"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p146101943141916"><a name="p146101943141916"></a><a name="p146101943141916"></a>Namespace storing the snapshot</p>
</td>
</tr>
<tr id="row19610643131916"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p103921129152010"><a name="p103921129152010"></a><a name="p103921129152010"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15610843141911"><a name="p15610843141911"></a><a name="p15610843141911"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1461016431193"><a name="p1461016431193"></a><a name="p1461016431193"></a>Snapshot name</p>
</td>
</tr>
<tr id="row961024331910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p421783313207"><a name="p421783313207"></a><a name="p421783313207"></a>i_commands</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0610204314197"><a name="p0610204314197"></a><a name="p0610204314197"></a>IN TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p0610154311918"><a name="p0610154311918"></a><a name="p0610154311918"></a>SQL commands for obtaining data</p>
</td>
</tr>
<tr id="row10610184318194"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18307236192015"><a name="p18307236192015"></a><a name="p18307236192015"></a>i_comment</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p661084318195"><a name="p661084318195"></a><a name="p661084318195"></a>IN TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19124232183"><a name="p19124232183"></a><a name="p19124232183"></a>Snapshot description</p>
</td>
</tr>
<tr id="row76101243191917"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18462203915204"><a name="p18462203915204"></a><a name="p18462203915204"></a>i_owner</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p878613211977"><a name="p878613211977"></a><a name="p878613211977"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1610114311918"><a name="p1610114311918"></a><a name="p1610114311918"></a>Snapshot owner</p>
</td>
</tr>
</tbody>
</table>

