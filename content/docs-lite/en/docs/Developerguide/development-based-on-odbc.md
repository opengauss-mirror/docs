# Development Based on ODBC<a name="EN-US_TOPIC_0244721233"></a>

Open Database Connectivity \(ODBC\) is a Microsoft API for accessing databases based on the X/OPEN CLI. Applications interact with the database through the APIs provided by ODBC, which enhances their portability, scalability, and maintainability.

[Figure 1](#fig1255101034110)  shows the system structure of ODBC.

**Figure  1**  ODBC system structure<a name="fig1255101034110"></a>  
![](figures/odbc-system-structure.png "odbc-system-structure")

openGauss supports ODBC 3.5 in the following environments.

**Table  1**  OSs Supported by ODBC

<a name="en-us_topic_0237120405_en-us_topic_0059778944_tcc3bf62098e14505b94680dffaa5940d"></a>
<table><thead align="left"><tr id="en-us_topic_0237120405_en-us_topic_0059778944_re1a7b791067f4bac9743d0de9f2ae8b6"><th class="cellrowborder" valign="top" width="78.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120405_en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"><a name="en-us_topic_0237120405_en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a>OS</p>
</th>
<th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120405_en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"><a name="en-us_topic_0237120405_en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a>Platform</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120405_en-us_topic_0059778944_row246633982912"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120405_en-us_topic_0059778944_p55601140183018"><a name="en-us_topic_0237120405_en-us_topic_0059778944_p55601140183018"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_p55601140183018"></a>CentOS 6.4<span>/<span><span>6.5<span>/<span>6.6<span>/<span>6.7<span>/<span>6.8<span>/<span>6.9<span>/<span>7.0<span>/<span>7.1<span>/<span>7.2<span>/<span>7.3<span>/<span>7.4</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120405_en-us_topic_0059778944_p37001047123019"><a name="en-us_topic_0237120405_en-us_topic_0059778944_p37001047123019"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_p37001047123019"></a>x86_64</p>
</td>
</tr>
<tr id="en-us_topic_0237120405_row196422068554"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120405_p12643116125510"><a name="en-us_topic_0237120405_p12643116125510"></a><a name="en-us_topic_0237120405_p12643116125510"></a>CentOS 7.6</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120405_p864386185519"><a name="en-us_topic_0237120405_p864386185519"></a><a name="en-us_topic_0237120405_p864386185519"></a>ARM64</p>
</td>
</tr>
<tr id="en-us_topic_0237120405_en-us_topic_0059778944_row1915312215011"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120405_en-us_topic_0059778944_p826525664919"><a name="en-us_topic_0237120405_en-us_topic_0059778944_p826525664919"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_p826525664919"></a>EulerOS 2.0 SP2/SP3</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120405_en-us_topic_0059778944_p93583610509"><a name="en-us_topic_0237120405_en-us_topic_0059778944_p93583610509"></a><a name="en-us_topic_0237120405_en-us_topic_0059778944_p93583610509"></a>x86_64</p>
</td>
</tr>
<tr id="en-us_topic_0237120405_row1728515110349"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120405_p1028612118342"><a name="en-us_topic_0237120405_p1028612118342"></a><a name="en-us_topic_0237120405_p1028612118342"></a>EulerOS 2.0 SP8</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120405_p162863113411"><a name="en-us_topic_0237120405_p162863113411"></a><a name="en-us_topic_0237120405_p162863113411"></a>ARM64</p>
</td>
</tr>
</tbody>
</table>


The ODBC Driver Manager running on UNIX or Linux can be unixODBC or iODBC. unixODBC-2.3.0 is used as the component for connecting the database.

Windows has a native ODBC Driver Manager. You can locate  **Data Sources \(ODBC\)**  by choosing  **Control Panel**  \>  **Administrative Tools**.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The current database ODBC driver is based on an open-source version and may be incompatible with data types tinyint, smalldatetime, and nvarchar2.  

