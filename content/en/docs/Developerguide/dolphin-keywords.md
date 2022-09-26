# Keywords<a name="EN-US_TOPIC_0289900482"></a>

The SQL contains reserved and non-reserved words. Standards require that reserved keywords not be used as other identifiers. Non-reserved keywords have special meanings only in a specific environment and can be used as identifiers in other environments.

The naming rules for identifiers are as follows:

-   An identifier name can only contain letters, underscores, digits (0-9), and dollar signs ($).
-   An identifier name must start with a letter (a to z) or an underscore (\_).

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    > 
    >-   The naming rules are recommended but not mandatory.
    >
    >-   In special cases, double quotation marks (") can be used to avoid special character errors.

Compared with the original openGauss, Dolphin modifies keywords as follows:
1. MEDIUMINT is added as a non-reserved keyword.

**Table 1** SQL keywords

<a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_table28107464"></a>
<table><thead align="left"><tr id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_row32175656"><th class="cellrowborder" valign="top" width="34%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p56091348"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p56091348"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p56091348"></a>Keyword</p>
</th>
<th class="cellrowborder" valign="top" width="22%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p47105336"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p47105336"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p47105336"></a><span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span></p>
</th>
<th class="cellrowborder" valign="top" width="18.75%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p21796427"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p21796427"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p21796427"></a>SQL:1999</p>
</th>
<th class="cellrowborder" valign="top" width="25.25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p20680137"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p20680137"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p20680137"></a>SQL-92</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>FORMAT</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a>Non-reserved (excluding functions and types)</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>IF</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a>Non-reserved (excluding functions and types)</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>KEYS</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a>Non-reserved</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>MEDIUMINT</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a>Non-reserved (excluding functions and types)</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>ZEROFILL</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a><a name="en-us_topic_0283137559_en-us_topic_0237121925_en-us_topic_0059777655_en-us_topic_0058965630_p28396447"></a>Non-reserved</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
</tbody>
</table>
