# PQconnectdbParams<a name="EN-US_TOPIC_0289900592"></a>

## Function<a name="en-us_topic_0283136707_en-us_topic_0241735613_section735013014140"></a>

PQconnectdbParams is used to establish a new connection with the database server.

## Prototype<a name="en-us_topic_0283136707_en-us_topic_0241735613_section42089297235"></a>

```
PGconn *PQconnectdbParams(const char * const *keywords,
                          const char * const *values,
                          int expand_dbname);
```

## Parameter<a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s93d4d32e284e4e32930c5a9c033b6be3"></a>

**Table  1**  PQconnectdbParams parameters

<a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_tc7d6fc98e0094dfdb438ab59460d206d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_rb323017d53364460aff9e3ccc9832912"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><strong id="en-us_topic_0283136707_en-us_topic_0241735613_b186960471879"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b186960471879"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b186960471879"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><strong id="en-us_topic_0283136707_en-us_topic_0241735613_b162052491377"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b162052491377"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b162052491377"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_r13b05b59c65f4a8fb1f61880b8a41c0e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a>keywords</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_p17295102954917"><a name="en-us_topic_0283136707_en-us_topic_0241735613_p17295102954917"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_p17295102954917"></a>An array of strings, each of which is a keyword.</p>
</td>
</tr>
<tr id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_r3191b8b205a145c9b4388d6bf3b1482e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a>values</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_p17291729154911"><a name="en-us_topic_0283136707_en-us_topic_0241735613_p17291729154911"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_p17291729154911"></a>Value assigned to each keyword.</p>
</td>
</tr>
<tr id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_r0c1b3c0fafbf4d7f8dcad213939dd18d"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a>expand_dbname</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136707_en-us_topic_0241735613_p5288132920499"><a name="en-us_topic_0283136707_en-us_topic_0241735613_p5288132920499"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_p5288132920499"></a>When <strong id="en-us_topic_0283136707_en-us_topic_0241735613_b41801547117"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b41801547117"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b41801547117"></a>expand_dbname</strong> is non-zero, the <strong id="en-us_topic_0283136707_en-us_topic_0241735613_b1033141110127"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b1033141110127"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b1033141110127"></a>dbname</strong> keyword value can be recognized as a connection string. Only <strong id="en-us_topic_0283136707_en-us_topic_0241735613_b20723151951413"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b20723151951413"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b20723151951413"></a>dbname</strong> that first appears is expanded in this way, and any subsequent <strong id="en-us_topic_0283136707_en-us_topic_0241735613_b28441181515"><a name="en-us_topic_0283136707_en-us_topic_0241735613_b28441181515"></a><a name="en-us_topic_0283136707_en-us_topic_0241735613_b28441181515"></a>dbname</strong> value is treated as a database name.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**PGconn \***  points to the object pointer that contains a connection. The memory is applied for by the function internally.

## Precautions<a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

This function establishes a new database connection using the parameters taken from two NULL-terminated arrays. Unlike PQsetdbLogin, the parameter set can be extended without changing the function signature. Therefore, use of this function \(or its non-blocking analogs PQconnectStartParams and PQconnectPoll\) is preferred for new application programming.

## Example<a name="en-us_topic_0283136707_en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example.md).

