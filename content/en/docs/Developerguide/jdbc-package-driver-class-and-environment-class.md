# JDBC Package, Driver Class, and Environment Class<a name="EN-US_TOPIC_0289900723"></a>

## JDBC Package<a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_en-us_topic_0189249669_en-us_topic_0059778950_s9694406852de4db0afcc99b19079f446"></a>

openGauss provides two types of JDBC JAR packages: **postgresql.jar** and **openGauss-jdbc-***x.x.x***.jar**. The two types of JAR packages have the same functions and are used to resolve the JDBC driver package name conflict between openGauss and PostgreSQL.

Run the **build.sh** command in the source code directory on the Linux server to obtain the driver JAR packages **postgresql.jar** and **openGauss-jdbc-***x.x.x***.jar** in the output directory of the source code. You can also obtain the **openGauss-***x.x.x***-JDBC.tar.gz** package from the official website.

The driver package is compatible with PostgreSQL. The class name and structure in the driver are the same as those in the PostgreSQL driver. All applications running on PostgreSQL can be smoothly migrated to the current system.

## Driver Class<a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_en-us_topic_0189249669_en-us_topic_0059778950_s103697559c8d4cb68f396e18e3ae65a9"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>1.  openGauss is compatible with PostgreSQL in the use of JDBC. When the JDBC drivers of PostgreSQL and openGauss with the same name are loaded to the same JVM, the org.postgresql.Driver driver class may conflict.
>2.  Compared with the PostgreSQL driver, the openGauss JDBC driver has the following enhanced features:
>    1.  The SHA256 encryption mode is supported for login.
>    2.  The third-party log framework that implements the sf4j API can be connected.
>    3.  DR failover is supported.

## Environment Class<a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_section20655192913405"></a>

JDK 1.8 must be configured on the client. The configuration method is as follows:

1.  In the MS-DOS window, run  **java -version**  to check the JDK version. Ensure that the version is JDK 1.8. If JDK is not installed, download the installation package from the official website and install it.
2.  Configure system environment variables.
    1.  Right-click  **My computer**  and choose  **Properties**.
    2.  In the navigation pane, choose  **Advanced system settings**.
    3.  In the  **System Properties**  dialog box, click  **Environment Variables**  on the  **Advanced**  tab page.
    4.  In the  **System variables**  area of the  **Environment Variables**  dialog box, click  **New**  or  **Edit**  to configure system variables. For details, see  [Table 1](#en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_table1625616152473).

        **Table  1**  Description

        <a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_table1625616152473"></a>
        <table><thead align="left"><tr id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_row1525719152472"><th class="cellrowborder" valign="top" width="15.701570157015702%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p52573155477"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p52573155477"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p52573155477"></a>Variable</p>
        </th>
        <th class="cellrowborder" valign="top" width="32.753275327532755%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p525713159478"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p525713159478"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p525713159478"></a>Operation</p>
        </th>
        <th class="cellrowborder" valign="top" width="51.54515451545154%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p8257141544718"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p8257141544718"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p8257141544718"></a>Variable Value</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_row925712153479"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p182575153474"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p182575153474"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p182575153474"></a>JAVA_HOME</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul16913207507"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul16913207507"></a><ul id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul16913207507"><li>If the variable exists, click <strong id="b12700112525214"><a name="b12700112525214"></a><a name="b12700112525214"></a>Edit</strong>.</li><li>If the variable does not exist, click <strong id="b77041287523"><a name="b77041287523"></a><a name="b77041287523"></a>New</strong>.</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p0217595132"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p0217595132"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p0217595132"></a>Specifies the Java installation directory.</p>
        <p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1981211652"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1981211652"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1981211652"></a>Example: C:\Program Files\Java\jdk1.8.0_131</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_row5257111564711"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325721584719"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325721584719"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325721584719"></a>Path</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p7257191511477"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p7257191511477"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p7257191511477"></a>Edit</p>
        </td>
        <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul108931343135117"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul108931343135117"></a><ul id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_ul108931343135117"><li>If <em id="i56301426187"><a name="i56301426187"></a><a name="i56301426187"></a>JAVA_HOME</em> is configured, add <strong id="b16696183317522"><a name="b16696183317522"></a><a name="b16696183317522"></a>%JAVA_HOME%\bin</strong> before the variable value.</li><li>If <em id="i153173213818"><a name="i153173213818"></a><a name="i153173213818"></a>JAVA_HOME</em> is not configured, add the full Java installation path before the variable value:<p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p54286393517"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p54286393517"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p54286393517"></a>C:\Program Files\Java\jdk1.8.0_131\bin;</p>
        </li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_row325881510471"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1625812150476"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1625812150476"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1625812150476"></a>CLASSPATH</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p13527826155219"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p13527826155219"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p13527826155219"></a>New</p>
        </td>
        <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325841534712"><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325841534712"></a><a name="en-us_topic_0283136979_en-us_topic_0237120378_en-us_topic_0213179123_p1325841534712"></a>.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar;</p>
        </td>
        </tr>
        </tbody>
        </table>



