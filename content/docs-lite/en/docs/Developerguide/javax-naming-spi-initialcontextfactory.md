# javax.naming.spi.InitialContextFactory<a name="EN-US_TOPIC_0289900012"></a>

This section describes  **javax.naming.spi.InitialContextFactory**, the initial context factory interface.

**Table  1**  Support status for javax.naming.spi.InitialContextFactory

<a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_table21819207"></a>
<table><thead align="left"><tr id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_row43026280"><th class="cellrowborder" valign="top" width="46.400000000000006%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p26783784"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p26783784"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p26783784"></a>Method Name</p>
</th>
<th class="cellrowborder" valign="top" width="27.029999999999998%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p37700008"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p37700008"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p37700008"></a>Return Type</p>
</th>
<th class="cellrowborder" valign="top" width="26.57%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p14627870"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p14627870"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p14627870"></a>Support JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_row19064037"><td class="cellrowborder" valign="top" width="46.400000000000006%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p56350250"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p56350250"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p56350250"></a>getInitialContext(Hashtable&lt;?,?&gt; environment)</p>
</td>
<td class="cellrowborder" valign="top" width="27.029999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p51022870"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p51022870"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p51022870"></a>Context</p>
</td>
<td class="cellrowborder" valign="top" width="26.57%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p47052333"><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p47052333"></a><a name="en-us_topic_0283136552_en-us_topic_0238274500_en-us_topic_0237120403_en-us_topic_0213179169_en-us_topic_0189251310_en-us_topic_0059779330_en-us_topic_0058965222_p47052333"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

