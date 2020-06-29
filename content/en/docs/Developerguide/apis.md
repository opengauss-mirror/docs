# APIs<a name="EN-US_TOPIC_0242370179"></a>

You can use standard database APIs, such as  **ODBC**  and  **JDBC**, to develop openGauss-based applications.

## Supported APIs<a name="en-us_topic_0237120293_en-us_topic_0059777757_s3ddc9e88cb7f4367bb98c43d4b658e05"></a>

Each application is an independent openGauss development project. APIs alleviate applications from directly operating in databases, and enhance the database portability, extensibility, and maintainability.  [Table 1](#en-us_topic_0237120293_en-us_topic_0059777757_tc44f4815cb564ea182d5864daa2709b4)  lists the APIs supported by openGauss and the download addresses.

**Table  1**  Database APIs

<a name="en-us_topic_0237120293_en-us_topic_0059777757_tc44f4815cb564ea182d5864daa2709b4"></a>
<table><thead align="left"><tr id="en-us_topic_0237120293_en-us_topic_0059777757_r073d74c6283a460d92711f61bfb41a99"><th class="cellrowborder" valign="top" width="16.919999999999998%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120293_en-us_topic_0059777757_aff1f63cf5f17429e8de6ea5187f60ba7"><a name="en-us_topic_0237120293_en-us_topic_0059777757_aff1f63cf5f17429e8de6ea5187f60ba7"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_aff1f63cf5f17429e8de6ea5187f60ba7"></a>API</p>
</th>
<th class="cellrowborder" valign="top" width="83.08%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120293_en-us_topic_0059777757_a81074fed55284b89a2f8402dbacc62ba"><a name="en-us_topic_0237120293_en-us_topic_0059777757_a81074fed55284b89a2f8402dbacc62ba"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_a81074fed55284b89a2f8402dbacc62ba"></a>How to Obtain</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120293_en-us_topic_0059777757_rccd5382e642246698cea672daed3a3ee"><td class="cellrowborder" valign="top" width="16.919999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120293_en-us_topic_0059777757_a80252008674843189ee6f524e409d065"><a name="en-us_topic_0237120293_en-us_topic_0059777757_a80252008674843189ee6f524e409d065"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_a80252008674843189ee6f524e409d065"></a>ODBC</p>
</td>
<td class="cellrowborder" valign="top" width="83.08%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0237120293_en-us_topic_0059777757_u5ad5416d02c14300a8675b17022ed3a2"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_u5ad5416d02c14300a8675b17022ed3a2"></a><ul id="en-us_topic_0237120293_en-us_topic_0059777757_u5ad5416d02c14300a8675b17022ed3a2"><li>Linux:<p id="en-us_topic_0237120293_en-us_topic_0059777757_aeb64a6ed88014bb9bad215809887bbbe"><a name="en-us_topic_0237120293_en-us_topic_0059777757_aeb64a6ed88014bb9bad215809887bbbe"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_aeb64a6ed88014bb9bad215809887bbbe"></a>Driver: <strong id="b99736191709"><a name="b99736191709"></a><a name="b99736191709"></a><span id="en-us_topic_0237120293_text346117317298"><a name="en-us_topic_0237120293_text346117317298"></a><a name="en-us_topic_0237120293_text346117317298"></a>openGauss-x.x</span>-ODBC.tar.gz</strong></p>
<p id="en-us_topic_0237120293_en-us_topic_0059777757_ae9c1f22341df4ee0a91769e8d90647e0"><a name="en-us_topic_0237120293_en-us_topic_0059777757_ae9c1f22341df4ee0a91769e8d90647e0"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_ae9c1f22341df4ee0a91769e8d90647e0"></a>unixODBC source code package: <a href="http://sourceforge.net/projects/unixodbc/files/unixODBC/2.3.0/unixODBC-2.3.0.tar.gz/download" target="_blank" rel="noopener noreferrer">http://sourceforge.net/projects/unixodbc/files/unixODBC/2.3.0/unixODBC-2.3.0.tar.gz/download</a></p>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237120293_en-us_topic_0059777757_r424aac31ed6449fea384dd79a6ad0cf1"><td class="cellrowborder" valign="top" width="16.919999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120293_en-us_topic_0059777757_aa4ddc323690a4d1ca9b06eed4da2f91e"><a name="en-us_topic_0237120293_en-us_topic_0059777757_aa4ddc323690a4d1ca9b06eed4da2f91e"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_aa4ddc323690a4d1ca9b06eed4da2f91e"></a>JDBC</p>
</td>
<td class="cellrowborder" valign="top" width="83.08%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0237120293_en-us_topic_0059777757_ua42cb60c35a2468c80ac3965a7e26649"></a><a name="en-us_topic_0237120293_en-us_topic_0059777757_ua42cb60c35a2468c80ac3965a7e26649"></a><ul id="en-us_topic_0237120293_en-us_topic_0059777757_ua42cb60c35a2468c80ac3965a7e26649"><li>Driver: <strong id="b3881343805"><a name="b3881343805"></a><a name="b3881343805"></a><span id="en-us_topic_0237120293_text18477673291"><a name="en-us_topic_0237120293_text18477673291"></a><a name="en-us_topic_0237120293_text18477673291"></a>openGauss-x.x</span>-EULER-64bit-Jdbc.tar.gz</strong></li><li>Driver: <strong id="b1790468113610"><a name="b1790468113610"></a><a name="b1790468113610"></a>org.postgresql.Driver</strong></li></ul>
</td>
</tr>
</tbody>
</table>

You can use  **JDBC**  and  **ODBC**  to connect to the database. Therefore, you need to  [configure a remote connection](configuring-a-remote-connection.md)  in openGauss.

For details about more APIs, see  [Application Development Guide](application-development-guide.md).

