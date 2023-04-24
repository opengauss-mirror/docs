# 基于ODBC开发<a name="ZH-CN_TOPIC_0244721233"></a>

-   **[ODBC包及依赖的库和头文件](ODBC包及依赖的库和头文件.md)**  

-   **[Linux下配置数据源](Linux下配置数据源.md)**  

-   **[开发流程](开发流程_ODBC.md)**  

-   **[示例](示例-常用功能和批量绑定.md)**  

-   **[ODBC接口参考](ODBC接口参考.md)**  

ODBC（Open Database Connectivity，开放数据库互连）是由Microsoft公司基于X/OPEN CLI提出的用于访问数据库的应用程序编程接口。应用程序通过ODBC提供的API与数据库进行交互，增强了应用程序的可移植性、扩展性和可维护性。

ODBC的系统结构参见[图1](#fig1255101034110)。

**图 1**  ODBC系统机构<a name="fig1255101034110"></a>  
![](figures/ODBC系统机构.png "ODBC系统机构")

openGauss目前在以下环境中提供对ODBC3.5的支持。

**表 1**  ODBC支持平台

<a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_tcc3bf62098e14505b94680dffaa5940d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_re1a7b791067f4bac9743d0de9f2ae8b6"><th class="cellrowborder" valign="top" width="78.64%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a>操作系统</p>
</th>
<th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a>平台</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_row246633982912"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p55601140183018"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p55601140183018"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p55601140183018"></a><span>CentOS <span>6.4/</span><span>6.5/</span><span>6.6/</span><span>6.7/</span><span>6.8/</span><span>6.9/</span><span>7.0/</span><span>7.1/</span><span>7.2/</span><span>7.3/</span>7.4</span></p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p37001047123019"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p37001047123019"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p37001047123019"></a>x86_64位</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120405_row196422068554"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120405_p12643116125510"><a name="zh-cn_topic_0237120405_p12643116125510"></a><a name="zh-cn_topic_0237120405_p12643116125510"></a>CentOS 7.6</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120405_p864386185519"><a name="zh-cn_topic_0237120405_p864386185519"></a><a name="zh-cn_topic_0237120405_p864386185519"></a>ARM64位</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_row1915312215011"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p826525664919"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p826525664919"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p826525664919"></a>EulerOS 2.0 SP2/SP3</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p93583610509"><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p93583610509"></a><a name="zh-cn_topic_0237120405_zh-cn_topic_0059778944_p93583610509"></a>x86_64位</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120405_row1728515110349"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120405_p1028612118342"><a name="zh-cn_topic_0237120405_p1028612118342"></a><a name="zh-cn_topic_0237120405_p1028612118342"></a>EulerOS 2.0 SP8</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120405_p162863113411"><a name="zh-cn_topic_0237120405_p162863113411"></a><a name="zh-cn_topic_0237120405_p162863113411"></a>ARM64位</p>
</td>
</tr>
</tbody>
</table>

UNIX/Linux系统下的驱动程序管理器主要有unixODBC和iODBC，在这选择驱动管理器unixODBC-2.3.0作为连接数据库的组件。

Windows系统自带ODBC驱动程序管理器，在控制面板-\>管理工具中可以找到数据源（ODBC）选项。

>![](public_sys-resources/icon-note.gif) **说明：**   
>当前数据库ODBC驱动基于开源版本，对于tinyint、smalldatetime、nvarchar、nvarchar2类型，在获取数据类型的时候，可能会出现不兼容。  


