# Network Communication Security<a name="EN-US_TOPIC_0252569397"></a>

SSL can be used to encrypt communication data between the client and server, ensuring communication security between the client and server.

The TLS 1.2 protocol and a highly secure encryption algorithm suite are adopted.  [Table 1](#en-us_topic_0238166170_table13251121491017)  lists the supported encryption algorithm suites.

**Table  1**  Encryption algorithm suites

<a name="en-us_topic_0238166170_table13251121491017"></a>
<table><thead align="left"><tr id="en-us_topic_0238166170_row1625261412109"><th class="cellrowborder" valign="top" width="31.03%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238166170_p99755175105"><a name="en-us_topic_0238166170_p99755175105"></a><a name="en-us_topic_0238166170_p99755175105"></a>IANA Code</p>
</th>
<th class="cellrowborder" valign="top" width="68.97%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238166170_p119751717121010"><a name="en-us_topic_0238166170_p119751717121010"></a><a name="en-us_topic_0238166170_p119751717121010"></a>IANA Suite Name</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238166170_row92521414141017"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p129756178106"><a name="en-us_topic_0238166170_p129756178106"></a><a name="en-us_topic_0238166170_p129756178106"></a>0x00,0x9F</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p697591721018"><a name="en-us_topic_0238166170_p697591721018"></a><a name="en-us_topic_0238166170_p697591721018"></a>TLS_DHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1925251461012"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p5975817131017"><a name="en-us_topic_0238166170_p5975817131017"></a><a name="en-us_topic_0238166170_p5975817131017"></a>0x00,0x9E</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497511781018"><a name="en-us_topic_0238166170_p1497511781018"></a><a name="en-us_topic_0238166170_p1497511781018"></a>TLS_DHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row172523141100"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p597541715109"><a name="en-us_topic_0238166170_p597541715109"></a><a name="en-us_topic_0238166170_p597541715109"></a>0x00,0xA3</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1097581731019"><a name="en-us_topic_0238166170_p1097581731019"></a><a name="en-us_topic_0238166170_p1097581731019"></a>TLS_DHE_DSS_WITH_AES_256_GCM_SHA384</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row11252121414107"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p16975101718106"><a name="en-us_topic_0238166170_p16975101718106"></a><a name="en-us_topic_0238166170_p16975101718106"></a>0x00,0xA2</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497551717109"><a name="en-us_topic_0238166170_p1497551717109"></a><a name="en-us_topic_0238166170_p1497551717109"></a>TLS_DHE_DSS_WITH_AES_128_GCM_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row192521714101013"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p19750173100"><a name="en-us_topic_0238166170_p19750173100"></a><a name="en-us_topic_0238166170_p19750173100"></a>0x00,0x6B</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p497511175106"><a name="en-us_topic_0238166170_p497511175106"></a><a name="en-us_topic_0238166170_p497511175106"></a>TLS_DHE_RSA_WITH_AES_256_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row12524148103"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p297612173109"><a name="en-us_topic_0238166170_p297612173109"></a><a name="en-us_topic_0238166170_p297612173109"></a>0x00,0x67</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p119762017151012"><a name="en-us_topic_0238166170_p119762017151012"></a><a name="en-us_topic_0238166170_p119762017151012"></a>TLS_DHE_RSA_WITH_AES_128_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row15252214111016"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p1897617177107"><a name="en-us_topic_0238166170_p1897617177107"></a><a name="en-us_topic_0238166170_p1897617177107"></a>0x00,0x6A</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p11976141741011"><a name="en-us_topic_0238166170_p11976141741011"></a><a name="en-us_topic_0238166170_p11976141741011"></a>TLS_DHE_DSS_WITH_AES_256_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row112521214131013"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p17976131701016"><a name="en-us_topic_0238166170_p17976131701016"></a><a name="en-us_topic_0238166170_p17976131701016"></a>0x00,0x40</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p19976317161015"><a name="en-us_topic_0238166170_p19976317161015"></a><a name="en-us_topic_0238166170_p19976317161015"></a>TLS_DHE_DSS_WITH_AES_128_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1025317141104"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p1297611179104"><a name="en-us_topic_0238166170_p1297611179104"></a><a name="en-us_topic_0238166170_p1297611179104"></a>0xC0,0x9F</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p3976141761020"><a name="en-us_topic_0238166170_p3976141761020"></a><a name="en-us_topic_0238166170_p3976141761020"></a>TLS_DHE_RSA_WITH_AES_256_CCM</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row16253131471014"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p16976517101012"><a name="en-us_topic_0238166170_p16976517101012"></a><a name="en-us_topic_0238166170_p16976517101012"></a>0xC0,0x9E</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p897671781011"><a name="en-us_topic_0238166170_p897671781011"></a><a name="en-us_topic_0238166170_p897671781011"></a>TLS_DHE_RSA_WITH_AES_128_CCM</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row825321412109"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p89761217121020"><a name="en-us_topic_0238166170_p89761217121020"></a><a name="en-us_topic_0238166170_p89761217121020"></a>0x00,0x39</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1976121751010"><a name="en-us_topic_0238166170_p1976121751010"></a><a name="en-us_topic_0238166170_p1976121751010"></a>TLS_DHE_RSA_WITH_AES_256_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row5253151419107"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p2097631721011"><a name="en-us_topic_0238166170_p2097631721011"></a><a name="en-us_topic_0238166170_p2097631721011"></a>0x00,0x33</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p11976517131019"><a name="en-us_topic_0238166170_p11976517131019"></a><a name="en-us_topic_0238166170_p11976517131019"></a>TLS_DHE_RSA_WITH_AES_128_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1325371412101"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p159761517131013"><a name="en-us_topic_0238166170_p159761517131013"></a><a name="en-us_topic_0238166170_p159761517131013"></a>0x00,0x38</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497691761016"><a name="en-us_topic_0238166170_p1497691761016"></a><a name="en-us_topic_0238166170_p1497691761016"></a>TLS_DHE_DSS_WITH_AES_256_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row72531141108"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p189773178101"><a name="en-us_topic_0238166170_p189773178101"></a><a name="en-us_topic_0238166170_p189773178101"></a>0x00,0x32</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p89771717171013"><a name="en-us_topic_0238166170_p89771717171013"></a><a name="en-us_topic_0238166170_p89771717171013"></a>TLS_DHE_DSS_WITH_AES_128_CBC_SHA</p>
</td>
</tr>
</tbody>
</table>

