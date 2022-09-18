# 关键字<a name="ZH-CN_TOPIC_0289900482"></a>

SQL里有保留字和非保留字之分。根据标准，保留字决不能用做其他标识符。非保留字只是在特定的环境里有特殊的含义，而在其他环境里是可以用做标识符的。

标识符的命名需要遵守如下规范：

-   标识符需要为字母、下划线、数字（0-9）或美元符号（$）。
-   标识符必须以字母（a-z）或下划线（\_）开头。

    >![](public_sys-resources/icon-note.gif) **说明：**
    > 
    >-   此命名规范为建议项，非强制项。
    >
    >-   特殊情况下可以使用双引号规避特殊字符报错。

相比于原始的openGauss，dolphin对于关键字的修改主要为:
1. 新增```MEDIUMINT```，作为非保留关键字。
2. 关键字```DATE```可以作为函数使用。
3. 新增```LAST_DAY```，作为保留关键字，用于在语法层面区别openGauss原有LAST_DAY函数和dolphin中LAST_DAY函数。

**表 1**  SQL关键字

<a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_table28107464"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row32175656"><th class="cellrowborder" valign="top" width="34%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p56091348"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p56091348"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p56091348"></a>关键字</p>
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
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留（不能是函数或类型）</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>IF</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留（不能是函数或类型）</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>KEYS</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>MEDIUMINT</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留（不能是函数或类型）</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>SIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留（不能是函数或类型）</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>UNSIGNED</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留（不能是函数或类型）</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_row57374723"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p9835683"></a>ZEROFILL</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p28396447"></a>非保留</p>
</td>
<td class="cellrowborder" valign="top" width="18.75%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p44918252"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a><a name="zh-cn_topic_0283137559_zh-cn_topic_0237121925_zh-cn_topic_0059777655_zh-cn_topic_0058965630_p60037067"></a>-</p>
</td>
</tr>
<tr>
<td>DATE
</td>
<td>非保留(可以是函数或类型)
</td>
<td>-
</td>
<td>-
</td>
</tr>
<tr>
<td>LAST_DAY
</td>
<td>保留
</td>
<td>-
</td>
<td>-
</td>
</tr>
</tbody>
</table>
