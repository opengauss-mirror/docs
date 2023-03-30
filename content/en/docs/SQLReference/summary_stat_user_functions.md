# SUMMARY\_STAT\_USER\_FUNCTIONS<a name="EN-US_TOPIC_0245374720"></a>

**SUMMARY\_STAT\_USER\_FUNCTIONS**  displays statistics about user-defined functions on all database nodes. 

**Table  1**  SUMMARY\_STAT\_USER\_FUNCTIONS columns

<a name="en-us_topic_0237122616_table31987521472"></a>
<table><thead align="left"><tr id="en-us_topic_0237122616_row1530485234714"><th class="cellrowborder" valign="top" width="25.14%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122616_p1430495212473"><a name="en-us_topic_0237122616_p1430495212473"></a><a name="en-us_topic_0237122616_p1430495212473"></a><strong id="b29671941511"><a name="b29671941511"></a><a name="b29671941511"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.950000000000003%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122616_p12304195220478"><a name="en-us_topic_0237122616_p12304195220478"></a><a name="en-us_topic_0237122616_p12304195220478"></a><strong id="b56121978513"><a name="b56121978513"></a><a name="b56121978513"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="57.91%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122616_p6304155274716"><a name="en-us_topic_0237122616_p6304155274716"></a><a name="en-us_topic_0237122616_p6304155274716"></a><strong id="b4357171817514"><a name="b4357171817514"></a><a name="b4357171817514"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122616_row183041452104715"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122616_p1030575284718"><a name="en-us_topic_0237122616_p1030575284718"></a><a name="en-us_topic_0237122616_p1030575284718"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122616_p730516521478"><a name="en-us_topic_0237122616_p730516521478"></a><a name="en-us_topic_0237122616_p730516521478"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122616_p130516528473"><a name="en-us_topic_0237122616_p130516528473"></a><a name="en-us_topic_0237122616_p130516528473"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0237122616_row1930512528478"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122616_p330516528470"><a name="en-us_topic_0237122616_p330516528470"></a><a name="en-us_topic_0237122616_p330516528470"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122616_p53053523474"><a name="en-us_topic_0237122616_p53053523474"></a><a name="en-us_topic_0237122616_p53053523474"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122616_p7305195294716"><a name="en-us_topic_0237122616_p7305195294716"></a><a name="en-us_topic_0237122616_p7305195294716"></a>Function name</p>
</td>
</tr>
<tr id="en-us_topic_0237122616_row63051152114714"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122616_p1730513524475"><a name="en-us_topic_0237122616_p1730513524475"></a><a name="en-us_topic_0237122616_p1730513524475"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122616_p163056522477"><a name="en-us_topic_0237122616_p163056522477"></a><a name="en-us_topic_0237122616_p163056522477"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122616_p4305175211474"><a name="en-us_topic_0237122616_p4305175211474"></a><a name="en-us_topic_0237122616_p4305175211474"></a>Number of times that the function has been called</p>
</td>
</tr>
<tr id="en-us_topic_0237122616_row230620529475"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122616_p19306752154713"><a name="en-us_topic_0237122616_p19306752154713"></a><a name="en-us_topic_0237122616_p19306752154713"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122616_p8306175274717"><a name="en-us_topic_0237122616_p8306175274717"></a><a name="en-us_topic_0237122616_p8306175274717"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122616_p530655211474"><a name="en-us_topic_0237122616_p530655211474"></a><a name="en-us_topic_0237122616_p530655211474"></a>Total time spent in this function and all other functions called by it (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122616_row2306165204715"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122616_p3306155214470"><a name="en-us_topic_0237122616_p3306155214470"></a><a name="en-us_topic_0237122616_p3306155214470"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122616_p1830616528477"><a name="en-us_topic_0237122616_p1830616528477"></a><a name="en-us_topic_0237122616_p1830616528477"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122616_p930611521471"><a name="en-us_topic_0237122616_p930611521471"></a><a name="en-us_topic_0237122616_p930611521471"></a>Total time spent in this function, excluding other functions called by it (unit: ms)</p>
</td>
</tr>
</tbody>
</table>

