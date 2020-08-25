# Executing Sql Statements Using  JDBC

<!-- TOC -->

- [JDBC Package and Driver Class](#jdbc-package-and-driver-class)
- [Loading the Driver](#loading-the-driver)
- [Connecting to a Database](#connecting-to-a-database)
- [Examples](#examples)

<!-- /TOC -->

## JDBC Package and Driver Class

-   JDBC Package

    Run  **build.sh**  in the source code directory on Linux OS to obtain the driver JAR package  **postgresql.jar**, which is stored in the source code directory. Obtain the package from the release package named  **openGauss-**_x.x.x-OS version number_**-64bit-Jdbc.tar.gz**.

    The driver package is compatible with PostgreSQL. The class name and structure in the driver are the same as those in the PostgreSQL driver. All applications running on PostgreSQL can be smoothly migrated to the current system.

-   Driver Class

    Before establishing a database connection, load the  **org.postgresql.Driver**  database driver class.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >openGauss is compatible with PostgreSQL in the use of JDBC. Therefore, when two JDBC drivers are used in the same process, class names may conflict.


## Loading the Driver

Load the database driver before creating a database connection.

You can load the driver in the following ways:

-   Before creating a connection, implicitly load the driver in the code:  **Class.forName\("org.postgresql.Driver"\)**
-   During the JVM startup, transfer the driver as a parameter to the JVM:  **java -Djdbc.drivers=org.postgresql.Driver jdbctest**

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**jdbctest**  is the name of a test application.


## Connecting to a Database

**Function Prototype**

JDBC provides the following three database connection methods:

-   DriverManager.getConnection\(String url\);
-   DriverManager.getConnection\(String url, Properties info\);
-   DriverManager.getConnection\(String url, String user, String password\);

**Parameter**

**Table  1**  Database connection parameters

<a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_tfcd5d7b17d27423d9d3b648da394ac52"></a>
<table><thead align="left"><tr id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_r13c3173c830e468eb39e6aa804dfed59"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.3.1.1"><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a5501243843d34369bb879eed773000ae"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a5501243843d34369bb879eed773000ae"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a5501243843d34369bb879eed773000ae"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="87%" id="mcps1.2.3.1.2"><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_re1e62c9744ec489884f418b7f28dafe3"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"></a>url</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"></a><strong id="en-us_topic_0244720262_b195286163115"><a name="en-us_topic_0244720262_b195286163115"></a><a name="en-us_topic_0244720262_b195286163115"></a>postgresql.jar</strong> database connection descriptor. The format is as follows:</p>
<a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ud24eb001d2c147738618d53304180b18"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ud24eb001d2c147738618d53304180b18"></a><ul id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ud24eb001d2c147738618d53304180b18"><li>jdbc:postgresql:database</li><li>jdbc:postgresql://host/database</li><li>jdbc:postgresql://host:port/database</li><li>jdbc:postgresql://host:port/database?param1=value1&amp;param2=value2</li><li>jdbc:postgresql://host1:port1,host2:port2/database?param1=value1&amp;param2=value2</li></ul>
<div class="note" id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"></a><ul id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"><li><strong id="en-us_topic_0244720262_b295112196111"><a name="en-us_topic_0244720262_b295112196111"></a><a name="en-us_topic_0244720262_b295112196111"></a>database</strong> indicates the name of the database to connect.</li><li><strong id="en-us_topic_0244720262_b78900201812"><a name="en-us_topic_0244720262_b78900201812"></a><a name="en-us_topic_0244720262_b78900201812"></a>host</strong> indicates the name or IP address of the database server.<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_p461072082618"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_p461072082618"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_p461072082618"></a>If a machine connected to <span id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text1998119910444"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text1998119910444"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text1998119910444"></a><span id="en-us_topic_0244720262_en-us_topic_0237120381_text202481331142613"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text202481331142613"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text202481331142613"></a><span id="en-us_topic_0244720262_text17015171312"><a name="en-us_topic_0244720262_text17015171312"></a><a name="en-us_topic_0244720262_text17015171312"></a>openGauss</span></span></span> is not in the same network segment as <span id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text17887837132414"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text17887837132414"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_text17887837132414"></a><span id="en-us_topic_0244720262_en-us_topic_0237120381_text12227183612619"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text12227183612619"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text12227183612619"></a><span id="en-us_topic_0244720262_text01235217138"><a name="en-us_topic_0244720262_text01235217138"></a><a name="en-us_topic_0244720262_text01235217138"></a>openGauss</span></span></span>, the IP address specified by <strong id="en-us_topic_0244720262_b66628225113"><a name="en-us_topic_0244720262_b66628225113"></a><a name="en-us_topic_0244720262_b66628225113"></a>host</strong> should be the value of <strong id="en-us_topic_0244720262_b136622221918"><a name="en-us_topic_0244720262_b136622221918"></a><a name="en-us_topic_0244720262_b136622221918"></a>coo.cooListenIp2</strong> (application access IP address) set in Manager.</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p1441610315219"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p1441610315219"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p1441610315219"></a>For security purposes, the <span id="en-us_topic_0244720262_en-us_topic_0237120381_text924214328594"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text924214328594"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text924214328594"></a>primary database node</span> forbids access from other nodes in <span id="en-us_topic_0244720262_en-us_topic_0237120381_text42571145173519"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text42571145173519"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text42571145173519"></a>openGauss</span> without authentication. To access the <span id="en-us_topic_0244720262_en-us_topic_0237120381_text6112765112"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text6112765112"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text6112765112"></a>primary database node</span> from inside <span id="en-us_topic_0244720262_en-us_topic_0237120381_text106581047153514"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text106581047153514"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text106581047153514"></a>openGauss</span>, deploy the JDBC program on the host where the <span id="en-us_topic_0244720262_en-us_topic_0237120381_text414820885115"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text414820885115"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text414820885115"></a>primary database node</span> is located and set <strong id="en-us_topic_0244720262_b890912558369"><a name="en-us_topic_0244720262_b890912558369"></a><a name="en-us_topic_0244720262_b890912558369"></a>host</strong> to <strong id="en-us_topic_0244720262_b183599441053"><a name="en-us_topic_0244720262_b183599441053"></a><a name="en-us_topic_0244720262_b183599441053"></a>127.0.0.1</strong>. Otherwise, the error message "FATAL: Forbid remote connection with trust method!" may be displayed.</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p572510297236"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p572510297236"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_p572510297236"></a>It is recommended that the service system be deployed outside <span id="en-us_topic_0244720262_en-us_topic_0237120381_text512019495351"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text512019495351"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text512019495351"></a>openGauss</span>. If it is deployed inside, database performance may be affected.</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p15116145917295"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p15116145917295"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p15116145917295"></a>By default, the local host is used to connect to the server.</p>
</li><li><strong id="en-us_topic_0244720262_b123201047282"><a name="en-us_topic_0244720262_b123201047282"></a><a name="en-us_topic_0244720262_b123201047282"></a>port</strong> indicates the port number of the database server.<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"></a>By default, the database on port 5431 of the local host is connected.</p>
</li><li><strong id="en-us_topic_0244720262_b20202495815"><a name="en-us_topic_0244720262_b20202495815"></a><a name="en-us_topic_0244720262_b20202495815"></a>param</strong> indicates a database connection attribute.<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p11846133317341"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p11846133317341"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p11846133317341"></a>The parameter can be configured in the URL. The URL starts with a question mark (?), uses an equal sign (=) to assign a value to the parameter, and uses an ampersand (&amp;) to separate parameters. You can also use the attributes of the <strong id="en-us_topic_0244720262_b84565523811"><a name="en-us_topic_0244720262_b84565523811"></a><a name="en-us_topic_0244720262_b84565523811"></a>info</strong> object for configuration. For details, see the example below.</p>
</li><li><strong id="en-us_topic_0244720262_b166265518820"><a name="en-us_topic_0244720262_b166265518820"></a><a name="en-us_topic_0244720262_b166265518820"></a>value</strong> indicates the database connection attribute values.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ref8dd9fc7790450ca15b4f30b96a0a18"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"></a>info</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"></a>Database connection attributes. Common attributes are described as follows:</p>
<a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u8546689def034a5a8257c477a574f39e"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u8546689def034a5a8257c477a574f39e"></a><ul id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_u8546689def034a5a8257c477a574f39e"><li><strong id="en-us_topic_0244720262_b106352582088"><a name="en-us_topic_0244720262_b106352582088"></a><a name="en-us_topic_0244720262_b106352582088"></a>PGDBNAME</strong>: string type. This parameter specifies the database name. (This parameter does not need to be set in the URL. The system automatically parses the URL to obtain its value.)</li><li><strong id="en-us_topic_0244720262_b189982118910"><a name="en-us_topic_0244720262_b189982118910"></a><a name="en-us_topic_0244720262_b189982118910"></a>PGHOST</strong>: string type. This parameter specifies the host IP address. For details, see the example below.</li><li><strong id="en-us_topic_0244720262_b93686715919"><a name="en-us_topic_0244720262_b93686715919"></a><a name="en-us_topic_0244720262_b93686715919"></a>PGPORT</strong>: integer type. This parameter specifies the host port number. For details, see the example below.</li><li><strong id="en-us_topic_0244720262_b20640396919"><a name="en-us_topic_0244720262_b20640396919"></a><a name="en-us_topic_0244720262_b20640396919"></a>user</strong>: string type. This parameter specifies the database user who creates the connection.</li><li><strong id="en-us_topic_0244720262_b18244212294"><a name="en-us_topic_0244720262_b18244212294"></a><a name="en-us_topic_0244720262_b18244212294"></a>password</strong>: string type. This parameter specifies the password of the database user.</li><li><strong id="en-us_topic_0244720262_b619151518918"><a name="en-us_topic_0244720262_b619151518918"></a><a name="en-us_topic_0244720262_b619151518918"></a>loggerLevel</strong>: string type. The following log levels are supported: <strong id="en-us_topic_0244720262_b3277135192316"><a name="en-us_topic_0244720262_b3277135192316"></a><a name="en-us_topic_0244720262_b3277135192316"></a>OFF</strong>, <strong id="en-us_topic_0244720262_b427845117230"><a name="en-us_topic_0244720262_b427845117230"></a><a name="en-us_topic_0244720262_b427845117230"></a>DEBUG</strong>, and <strong id="en-us_topic_0244720262_b192785511234"><a name="en-us_topic_0244720262_b192785511234"></a><a name="en-us_topic_0244720262_b192785511234"></a>TRACE</strong>. The value <strong id="en-us_topic_0244720262_b13660124315267"><a name="en-us_topic_0244720262_b13660124315267"></a><a name="en-us_topic_0244720262_b13660124315267"></a>OFF</strong> indicates that the log function is disabled. <strong id="en-us_topic_0244720262_b982883819263"><a name="en-us_topic_0244720262_b982883819263"></a><a name="en-us_topic_0244720262_b982883819263"></a>DEBUG</strong> and <strong id="en-us_topic_0244720262_b98452040162611"><a name="en-us_topic_0244720262_b98452040162611"></a><a name="en-us_topic_0244720262_b98452040162611"></a>TRACE</strong> logs record information of different levels.</li><li><strong id="en-us_topic_0244720262_b108542491014"><a name="en-us_topic_0244720262_b108542491014"></a><a name="en-us_topic_0244720262_b108542491014"></a>loggerFile</strong>: string type. This parameter specifies the name of a log file. You can specify a directory for storing logs. If no directory is specified, logs are stored in the directory where the client program is running.</li><li><strong id="en-us_topic_0244720262_b1469885516105"><a name="en-us_topic_0244720262_b1469885516105"></a><a name="en-us_topic_0244720262_b1469885516105"></a>allowEncodingChanges</strong>: Boolean type. If this parameter is set to <strong id="en-us_topic_0244720262_b20966157161020"><a name="en-us_topic_0244720262_b20966157161020"></a><a name="en-us_topic_0244720262_b20966157161020"></a>true</strong>, the character set type can be changed. This parameter is used together with <strong id="en-us_topic_0244720262_b1096725751018"><a name="en-us_topic_0244720262_b1096725751018"></a><a name="en-us_topic_0244720262_b1096725751018"></a>characterEncoding=CHARSET</strong> to set the character set. The two parameters are separated by ampersands (&amp;).</li><li><strong id="en-us_topic_0244720262_b1132814013111"><a name="en-us_topic_0244720262_b1132814013111"></a><a name="en-us_topic_0244720262_b1132814013111"></a>currentSchema</strong>: string type. This parameter specifies the schema to be set in <strong id="en-us_topic_0244720262_b104952115111"><a name="en-us_topic_0244720262_b104952115111"></a><a name="en-us_topic_0244720262_b104952115111"></a>search-path</strong>.</li><li><strong id="en-us_topic_0244720262_b20978114111113"><a name="en-us_topic_0244720262_b20978114111113"></a><a name="en-us_topic_0244720262_b20978114111113"></a>hostRecheckSeconds</strong>: integer type. After JDBC attempts to connect to a host, the host status is saved: connection success or connection failure. This status is trusted within the duration specified by <strong id="en-us_topic_0244720262_b17561191711110"><a name="en-us_topic_0244720262_b17561191711110"></a><a name="en-us_topic_0244720262_b17561191711110"></a>hostRecheckSeconds</strong>. After the duration expires, the status becomes invalid. The default value is 10 seconds.</li><li><strong id="en-us_topic_0244720262_b1793571913117"><a name="en-us_topic_0244720262_b1793571913117"></a><a name="en-us_topic_0244720262_b1793571913117"></a>ssl</strong>: Boolean type. This parameter specifies a connection in SSL mode.<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p175682912210"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p175682912210"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p175682912210"></a>When this parameter is set to <strong id="en-us_topic_0244720262_b277320214118"><a name="en-us_topic_0244720262_b277320214118"></a><a name="en-us_topic_0244720262_b277320214118"></a>true</strong>, the NonValidatingFactory channel and certificate mode are supported.</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p1075620296222"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p1075620296222"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p1075620296222"></a>For the NonValidatingFactory channel, configure the username and password and set <strong id="en-us_topic_0244720262_b1533152218114"><a name="en-us_topic_0244720262_b1533152218114"></a><a name="en-us_topic_0244720262_b1533152218114"></a>SSL</strong> to <strong id="en-us_topic_0244720262_b185331022101111"><a name="en-us_topic_0244720262_b185331022101111"></a><a name="en-us_topic_0244720262_b185331022101111"></a>true</strong>.</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p9756122919225"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p9756122919225"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_p9756122919225"></a>In certification mode, configure the client certificate, key, and root certificate, and set <strong id="en-us_topic_0244720262_b11803824101110"><a name="en-us_topic_0244720262_b11803824101110"></a><a name="en-us_topic_0244720262_b11803824101110"></a>SSL</strong> to <strong id="en-us_topic_0244720262_b1180316247114"><a name="en-us_topic_0244720262_b1180316247114"></a><a name="en-us_topic_0244720262_b1180316247114"></a>true</strong>.</p>
</li><li><strong id="en-us_topic_0244720262_b8515122518115"><a name="en-us_topic_0244720262_b8515122518115"></a><a name="en-us_topic_0244720262_b8515122518115"></a>sslmode</strong>: string type. This parameter specifies the SSL authentication mode. The value can be <strong id="en-us_topic_0244720262_b119978276112"><a name="en-us_topic_0244720262_b119978276112"></a><a name="en-us_topic_0244720262_b119978276112"></a>require</strong>, <strong id="en-us_topic_0244720262_b9997727171114"><a name="en-us_topic_0244720262_b9997727171114"></a><a name="en-us_topic_0244720262_b9997727171114"></a>verify-ca</strong>, or <strong id="en-us_topic_0244720262_b14997162741112"><a name="en-us_topic_0244720262_b14997162741112"></a><a name="en-us_topic_0244720262_b14997162741112"></a>verify-full</strong>.<a name="en-us_topic_0244720262_en-us_topic_0237120381_ul460013619316"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_ul460013619316"></a><ul id="en-us_topic_0244720262_en-us_topic_0237120381_ul460013619316"><li><strong id="en-us_topic_0244720262_b982215287113"><a name="en-us_topic_0244720262_b982215287113"></a><a name="en-us_topic_0244720262_b982215287113"></a>require</strong>: The system attempts to set up an SSL connection. If there is a CA file, the system performs verification as if the parameter was set to <strong id="en-us_topic_0244720262_b12822162811115"><a name="en-us_topic_0244720262_b12822162811115"></a><a name="en-us_topic_0244720262_b12822162811115"></a>verify-ca</strong>.</li><li><strong id="en-us_topic_0244720262_b9950134418118"><a name="en-us_topic_0244720262_b9950134418118"></a><a name="en-us_topic_0244720262_b9950134418118"></a>verify-ca</strong>: The system attempts to set up an SSL connection and checks whether the server certificate is issued by a trusted CA.</li><li><strong id="en-us_topic_0244720262_b32552479118"><a name="en-us_topic_0244720262_b32552479118"></a><a name="en-us_topic_0244720262_b32552479118"></a>verify-full</strong>: The system attempts to set up an SSL connection, checks whether the server certificate is issued by a trusted CA, and checks whether the host name of the server is the same as that in the certificate.</li></ul>
</li><li><strong id="en-us_topic_0244720262_b18102498115"><a name="en-us_topic_0244720262_b18102498115"></a><a name="en-us_topic_0244720262_b18102498115"></a>sslcert</strong>: string type. This parameter specifies the complete path of the certificate file. The type of the client and server certificates is <strong id="en-us_topic_0244720262_b166416171217"><a name="en-us_topic_0244720262_b166416171217"></a><a name="en-us_topic_0244720262_b166416171217"></a>End Entity</strong>.</li><li><strong id="en-us_topic_0244720262_b12854351215"><a name="en-us_topic_0244720262_b12854351215"></a><a name="en-us_topic_0244720262_b12854351215"></a>sslkey</strong>: string type. This parameter specifies the complete path of the key file. You must run the following command to convert the client certificate to the DER format:<pre class="screen" id="en-us_topic_0244720262_en-us_topic_0237120381_screen65436268111"><a name="en-us_topic_0244720262_en-us_topic_0237120381_screen65436268111"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_screen65436268111"></a>openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt</pre>
</li><li><strong id="en-us_topic_0244720262_b734817915123"><a name="en-us_topic_0244720262_b734817915123"></a><a name="en-us_topic_0244720262_b734817915123"></a>sslrootcert</strong>: string type. This parameter specifies the name of the SSL root certificate. The root certificate type is CA.</li><li><strong id="en-us_topic_0244720262_b66502123123"><a name="en-us_topic_0244720262_b66502123123"></a><a name="en-us_topic_0244720262_b66502123123"></a>sslpassword</strong>: string type. This parameter is provided for ConsoleCallbackHandler.</li><li><strong id="en-us_topic_0244720262_b171717148124"><a name="en-us_topic_0244720262_b171717148124"></a><a name="en-us_topic_0244720262_b171717148124"></a>sslpasswordcallback</strong>: string type. This parameter specifies the class name of the SSL password provider. The default value is <strong id="en-us_topic_0244720262_b1756661619123"><a name="en-us_topic_0244720262_b1756661619123"></a><a name="en-us_topic_0244720262_b1756661619123"></a>org.postgresql.ssl.jdbc4.LibPQFactory.ConsoleCallbackHandler</strong>.</li><li><strong id="en-us_topic_0244720262_b183291217121219"><a name="en-us_topic_0244720262_b183291217121219"></a><a name="en-us_topic_0244720262_b183291217121219"></a>sslfactory</strong>: string type. This parameter specifies the class name used by SSLSocketFactory to establish an SSL connection.</li><li><strong id="en-us_topic_0244720262_b115938195129"><a name="en-us_topic_0244720262_b115938195129"></a><a name="en-us_topic_0244720262_b115938195129"></a>sslfactoryarg</strong>: string type. The value is an optional parameter of the constructor function of the <strong id="en-us_topic_0244720262_b1529122020124"><a name="en-us_topic_0244720262_b1529122020124"></a><a name="en-us_topic_0244720262_b1529122020124"></a>sslfactory</strong> class and is not recommended.</li><li><strong id="en-us_topic_0244720262_b11720102112123"><a name="en-us_topic_0244720262_b11720102112123"></a><a name="en-us_topic_0244720262_b11720102112123"></a>sslhostnameverifier</strong>: string type. This parameter specifies the class name of the host name verifier. The interface must implement javax.net.ssl.HostnameVerifier. The default value is <strong id="en-us_topic_0244720262_b12123192321210"><a name="en-us_topic_0244720262_b12123192321210"></a><a name="en-us_topic_0244720262_b12123192321210"></a>org.postgresql.ssl.PGjdbcHostnameVerifier</strong>.</li><li><strong id="en-us_topic_0244720262_b106499261120"><a name="en-us_topic_0244720262_b106499261120"></a><a name="en-us_topic_0244720262_b106499261120"></a>loginTimeout</strong>: integer type. This parameter specifies the waiting time for establishing the database connection, in seconds.</li><li><strong id="en-us_topic_0244720262_b154933286126"><a name="en-us_topic_0244720262_b154933286126"></a><a name="en-us_topic_0244720262_b154933286126"></a>connectTimeout</strong>: integer type. This parameter specifies the timeout duration for connecting to a server, in seconds. If the time taken to connect to a server exceeds the value specified, the connection is interrupted. If the value is <strong id="en-us_topic_0244720262_b121161631131213"><a name="en-us_topic_0244720262_b121161631131213"></a><a name="en-us_topic_0244720262_b121161631131213"></a>0</strong>, the timeout mechanism is disabled.</li><li><strong id="en-us_topic_0244720262_b45179321123"><a name="en-us_topic_0244720262_b45179321123"></a><a name="en-us_topic_0244720262_b45179321123"></a>socketTimeout</strong>: integer type. This parameter specifies the timeout duration for a socket read operation, in seconds. If the time taken to read data from a server exceeds the value specified, the connection is closed. If the value is <strong id="en-us_topic_0244720262_b66867348129"><a name="en-us_topic_0244720262_b66867348129"></a><a name="en-us_topic_0244720262_b66867348129"></a>0</strong>, the timeout mechanism is disabled.</li><li><strong id="en-us_topic_0244720262_b3707183610126"><a name="en-us_topic_0244720262_b3707183610126"></a><a name="en-us_topic_0244720262_b3707183610126"></a>cancelSignalTimeout</strong>: integer type. Cancel messages may cause a block. This parameter controls <strong id="en-us_topic_0244720262_b64211737141216"><a name="en-us_topic_0244720262_b64211737141216"></a><a name="en-us_topic_0244720262_b64211737141216"></a>connectTimeout</strong> and <strong id="en-us_topic_0244720262_b2421193761219"><a name="en-us_topic_0244720262_b2421193761219"></a><a name="en-us_topic_0244720262_b2421193761219"></a>socketTimeout</strong> in a cancel message, in seconds. The default value is 10 seconds.</li><li><strong id="en-us_topic_0244720262_b495113861215"><a name="en-us_topic_0244720262_b495113861215"></a><a name="en-us_topic_0244720262_b495113861215"></a>tcpKeepAlive</strong>: Boolean type. This parameter is used to enable or disable TCP keepalive detection. The default value is <strong id="en-us_topic_0244720262_b9703174010128"><a name="en-us_topic_0244720262_b9703174010128"></a><a name="en-us_topic_0244720262_b9703174010128"></a>false</strong>.</li><li><strong id="en-us_topic_0244720262_b11352841161212"><a name="en-us_topic_0244720262_b11352841161212"></a><a name="en-us_topic_0244720262_b11352841161212"></a>logUnclosedConnections</strong>: Boolean type. The client may leak a connection object because it does not call the connection object's close() method. These objects will be collected as garbage and finalized using the finalize() method. If the caller ignores this operation, this method closes the connection.</li><li><strong id="en-us_topic_0244720262_b1311014641214"><a name="en-us_topic_0244720262_b1311014641214"></a><a name="en-us_topic_0244720262_b1311014641214"></a>assumeMinServerVersion</strong>: string type. The client sends a request to set a floating point. This parameter specifies the version of the server to connect, for example, <strong id="en-us_topic_0244720262_b233644911211"><a name="en-us_topic_0244720262_b233644911211"></a><a name="en-us_topic_0244720262_b233644911211"></a>assumeMinServerVersion=9.0</strong>. This parameter can reduce the number of packets to send during connection setup.</li><li><strong id="en-us_topic_0244720262_b676750181210"><a name="en-us_topic_0244720262_b676750181210"></a><a name="en-us_topic_0244720262_b676750181210"></a>ApplicationName</strong>: string type. This parameter specifies the name of the JDBC driver that is being connected. You can query the <strong id="en-us_topic_0244720262_b16713816192414"><a name="en-us_topic_0244720262_b16713816192414"></a><a name="en-us_topic_0244720262_b16713816192414"></a>pg_stat_activity</strong> table on the primary database node to view information about the client that is being connected. The JDBC driver name is displayed in the <strong id="en-us_topic_0244720262_b17719716122420"><a name="en-us_topic_0244720262_b17719716122420"></a><a name="en-us_topic_0244720262_b17719716122420"></a>application_name</strong> column. The default value is <strong id="en-us_topic_0244720262_b12453184332419"><a name="en-us_topic_0244720262_b12453184332419"></a><a name="en-us_topic_0244720262_b12453184332419"></a>PostgreSQL JDBC Driver</strong>.</li><li><strong id="en-us_topic_0244720262_b59021818121316"><a name="en-us_topic_0244720262_b59021818121316"></a><a name="en-us_topic_0244720262_b59021818121316"></a>connectionExtraInfo</strong>: Boolean type. This parameter specifies whether the JDBC driver reports the driver deployment path and process owner to the database.<p id="en-us_topic_0244720262_en-us_topic_0237120381_p126364543506"><a name="en-us_topic_0244720262_en-us_topic_0237120381_p126364543506"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_p126364543506"></a>The value can be <strong id="en-us_topic_0244720262_b836782114131"><a name="en-us_topic_0244720262_b836782114131"></a><a name="en-us_topic_0244720262_b836782114131"></a>true</strong> or <strong id="en-us_topic_0244720262_b4372102119130"><a name="en-us_topic_0244720262_b4372102119130"></a><a name="en-us_topic_0244720262_b4372102119130"></a>false</strong>. The default value is <strong id="en-us_topic_0244720262_b2037372115139"><a name="en-us_topic_0244720262_b2037372115139"></a><a name="en-us_topic_0244720262_b2037372115139"></a>false</strong>. If <strong id="en-us_topic_0244720262_b78401422131313"><a name="en-us_topic_0244720262_b78401422131313"></a><a name="en-us_topic_0244720262_b78401422131313"></a>connectionExtraInfo</strong> is set to <strong id="en-us_topic_0244720262_b1784019223135"><a name="en-us_topic_0244720262_b1784019223135"></a><a name="en-us_topic_0244720262_b1784019223135"></a>true</strong>, the JDBC driver reports the driver deployment path and process owner to the database and displays the information in the <strong id="en-us_topic_0244720262_b2840622131313"><a name="en-us_topic_0244720262_b2840622131313"></a><a name="en-us_topic_0244720262_b2840622131313"></a>connection_info</strong> parameter. In this case, you can query the information from <strong id="en-us_topic_0244720262_b11841192271318"><a name="en-us_topic_0244720262_b11841192271318"></a><a name="en-us_topic_0244720262_b11841192271318"></a>PG_STAT_ACTIVITY</strong>.</p>
</li><li><strong id="en-us_topic_0244720262_b011262481314"><a name="en-us_topic_0244720262_b011262481314"></a><a name="en-us_topic_0244720262_b011262481314"></a>autosave</strong>: string type. The value can be <strong id="en-us_topic_0244720262_b19475172513135"><a name="en-us_topic_0244720262_b19475172513135"></a><a name="en-us_topic_0244720262_b19475172513135"></a>always</strong>, <strong id="en-us_topic_0244720262_b2475162510132"><a name="en-us_topic_0244720262_b2475162510132"></a><a name="en-us_topic_0244720262_b2475162510132"></a>never</strong>, or <strong id="en-us_topic_0244720262_b947602571310"><a name="en-us_topic_0244720262_b947602571310"></a><a name="en-us_topic_0244720262_b947602571310"></a>conservative</strong>. The default value is <strong id="en-us_topic_0244720262_b8476142510138"><a name="en-us_topic_0244720262_b8476142510138"></a><a name="en-us_topic_0244720262_b8476142510138"></a>never</strong>. This parameter specifies the action that the driver should perform upon a query failure. If <strong id="en-us_topic_0244720262_b102154280138"><a name="en-us_topic_0244720262_b102154280138"></a><a name="en-us_topic_0244720262_b102154280138"></a>autosave</strong> is set to <strong id="en-us_topic_0244720262_b18216182819137"><a name="en-us_topic_0244720262_b18216182819137"></a><a name="en-us_topic_0244720262_b18216182819137"></a>always</strong>, the JDBC driver sets a savepoint before each query and rolls back to the savepoint if the query fails. If <strong id="en-us_topic_0244720262_b6966128151314"><a name="en-us_topic_0244720262_b6966128151314"></a><a name="en-us_topic_0244720262_b6966128151314"></a>autosave</strong> is set to <strong id="en-us_topic_0244720262_b896614288131"><a name="en-us_topic_0244720262_b896614288131"></a><a name="en-us_topic_0244720262_b896614288131"></a>never</strong>, there is no savepoint. If <strong id="en-us_topic_0244720262_b128011329151320"><a name="en-us_topic_0244720262_b128011329151320"></a><a name="en-us_topic_0244720262_b128011329151320"></a>autosave</strong> is set to <strong id="en-us_topic_0244720262_b19802152901312"><a name="en-us_topic_0244720262_b19802152901312"></a><a name="en-us_topic_0244720262_b19802152901312"></a>conservative</strong>, a savepoint is set for each query. However, the system rolls back and retries only when there is an invalid statement.</li><li><strong id="en-us_topic_0244720262_b984443019135"><a name="en-us_topic_0244720262_b984443019135"></a><a name="en-us_topic_0244720262_b984443019135"></a>protocolVersion</strong>: integer type. This parameter specifies the connection protocol version. Only version 3 is supported. Note: MD5 encryption is used when this parameter is set. You must use the following command to change the database encryption mode: <strong id="en-us_topic_0244720262_b7611143312137"><a name="en-us_topic_0244720262_b7611143312137"></a><a name="en-us_topic_0244720262_b7611143312137"></a>gs_guc set -N all -I all -c "password_encryption_type=1"</strong>. After <span id="en-us_topic_0244720262_en-us_topic_0237120381_text11512175513513"><a name="en-us_topic_0244720262_en-us_topic_0237120381_text11512175513513"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_text11512175513513"></a>openGauss</span> is restarted, create a user that uses MD5 encryption to encrypt passwords. You must also change the client connection mode to <strong id="en-us_topic_0244720262_b57281458141316"><a name="en-us_topic_0244720262_b57281458141316"></a><a name="en-us_topic_0244720262_b57281458141316"></a>md5</strong> in the <strong id="en-us_topic_0244720262_b4734135821312"><a name="en-us_topic_0244720262_b4734135821312"></a><a name="en-us_topic_0244720262_b4734135821312"></a>pg_hba.conf</strong> file. Log in as the new user (not recommended).</li><li><strong id="en-us_topic_0244720262_b1426219151419"><a name="en-us_topic_0244720262_b1426219151419"></a><a name="en-us_topic_0244720262_b1426219151419"></a>prepareThreshold</strong>: integer type. This parameter specifies the time when the parse statement is sent. The default value is <strong id="en-us_topic_0244720262_b5860163101410"><a name="en-us_topic_0244720262_b5860163101410"></a><a name="en-us_topic_0244720262_b5860163101410"></a>5</strong>. It takes a long time to parse an SQL statement for the first time, but a short time to parse SQL statements later because of cache. If a session runs an SQL statement multiple consecutive times and the number of execution times exceeds the value of <strong id="en-us_topic_0244720262_b55791265142"><a name="en-us_topic_0244720262_b55791265142"></a><a name="en-us_topic_0244720262_b55791265142"></a>prepareThreshold</strong>, JDBC does not send the parse command to the SQL statement.</li><li><strong id="en-us_topic_0244720262_b1660367111415"><a name="en-us_topic_0244720262_b1660367111415"></a><a name="en-us_topic_0244720262_b1660367111415"></a>preparedStatementCacheQueries</strong>: integer type. This parameter specifies the number of queries cached in each connection. The default value is <strong id="en-us_topic_0244720262_b16286139141414"><a name="en-us_topic_0244720262_b16286139141414"></a><a name="en-us_topic_0244720262_b16286139141414"></a>256</strong>. If more than 256 different queries are used in the prepareStatement() call, the least recently used query cache will be discarded. The value <strong id="en-us_topic_0244720262_b1589101113141"><a name="en-us_topic_0244720262_b1589101113141"></a><a name="en-us_topic_0244720262_b1589101113141"></a>0</strong> indicates that the cache function is disabled.</li><li><strong id="en-us_topic_0244720262_b1161115129146"><a name="en-us_topic_0244720262_b1161115129146"></a><a name="en-us_topic_0244720262_b1161115129146"></a>preparedStatementCacheSizeMiB</strong>: integer type. This parameter specifies the maximum cache size of each connection, in MB. The default value is <strong id="en-us_topic_0244720262_b14413191314141"><a name="en-us_topic_0244720262_b14413191314141"></a><a name="en-us_topic_0244720262_b14413191314141"></a>5</strong>. If the size of the cached queries exceeds 5 MB, the least recently used query cache will be discarded. The value <strong id="en-us_topic_0244720262_b746116121417"><a name="en-us_topic_0244720262_b746116121417"></a><a name="en-us_topic_0244720262_b746116121417"></a>0</strong> indicates that the cache function is disabled.</li><li><strong id="en-us_topic_0244720262_b97432166146"><a name="en-us_topic_0244720262_b97432166146"></a><a name="en-us_topic_0244720262_b97432166146"></a>databaseMetadataCacheFields</strong>: integer type. The default value is <strong id="en-us_topic_0244720262_b19594181810142"><a name="en-us_topic_0244720262_b19594181810142"></a><a name="en-us_topic_0244720262_b19594181810142"></a>65536</strong>. This parameter specifies the maximum cache size of each connection. The value <strong id="en-us_topic_0244720262_b1117852020144"><a name="en-us_topic_0244720262_b1117852020144"></a><a name="en-us_topic_0244720262_b1117852020144"></a>0</strong> indicates that the cache function is disabled.</li><li><strong id="en-us_topic_0244720262_b118596202148"><a name="en-us_topic_0244720262_b118596202148"></a><a name="en-us_topic_0244720262_b118596202148"></a>databaseMetadataCacheFieldsMiB</strong>: integer type. The default value is <strong id="en-us_topic_0244720262_b176461021121412"><a name="en-us_topic_0244720262_b176461021121412"></a><a name="en-us_topic_0244720262_b176461021121412"></a>5</strong>. This parameter specifies the maximum cache size of each connection, in MB. The value <strong id="en-us_topic_0244720262_b1237225131411"><a name="en-us_topic_0244720262_b1237225131411"></a><a name="en-us_topic_0244720262_b1237225131411"></a>0</strong> indicates that the cache function is disabled.</li><li>stringtype: string type. The value can be <strong id="en-us_topic_0244720262_b466012250141"><a name="en-us_topic_0244720262_b466012250141"></a><a name="en-us_topic_0244720262_b466012250141"></a>false</strong>, <strong id="en-us_topic_0244720262_b16661162561420"><a name="en-us_topic_0244720262_b16661162561420"></a><a name="en-us_topic_0244720262_b16661162561420"></a>unspecified</strong>, or <strong id="en-us_topic_0244720262_b13661525151410"><a name="en-us_topic_0244720262_b13661525151410"></a><a name="en-us_topic_0244720262_b13661525151410"></a>varchar</strong>. The default value is <strong id="en-us_topic_0244720262_b10662102516146"><a name="en-us_topic_0244720262_b10662102516146"></a><a name="en-us_topic_0244720262_b10662102516146"></a>varchar</strong>. This parameter specifies the type of the <strong id="en-us_topic_0244720262_b2634726161410"><a name="en-us_topic_0244720262_b2634726161410"></a><a name="en-us_topic_0244720262_b2634726161410"></a>PreparedStatement</strong> parameter used by the setString() method. If <strong id="en-us_topic_0244720262_b13634526171410"><a name="en-us_topic_0244720262_b13634526171410"></a><a name="en-us_topic_0244720262_b13634526171410"></a>stringtype</strong> is set to <strong id="en-us_topic_0244720262_b7635162661419"><a name="en-us_topic_0244720262_b7635162661419"></a><a name="en-us_topic_0244720262_b7635162661419"></a>varchar</strong>, these parameters are sent to the server as varchar parameters. If <strong id="en-us_topic_0244720262_b859182712146"><a name="en-us_topic_0244720262_b859182712146"></a><a name="en-us_topic_0244720262_b859182712146"></a>stringtype</strong> is set to <strong id="en-us_topic_0244720262_b6591162711142"><a name="en-us_topic_0244720262_b6591162711142"></a><a name="en-us_topic_0244720262_b6591162711142"></a>unspecified</strong>, these parameters are sent to the server as an untyped value, and the server attempts to infer their appropriate type.</li><li><strong id="en-us_topic_0244720262_b73261129131411"><a name="en-us_topic_0244720262_b73261129131411"></a><a name="en-us_topic_0244720262_b73261129131411"></a>batchMode</strong>: Boolean type. This parameter specifies whether to connect the database in batch mode.</li><li><strong id="en-us_topic_0244720262_b157196307147"><a name="en-us_topic_0244720262_b157196307147"></a><a name="en-us_topic_0244720262_b157196307147"></a>fetchsize</strong>: integer type. This parameter specifies the default fetchsize for statements in the created connection.</li><li><strong id="en-us_topic_0244720262_b374963641418"><a name="en-us_topic_0244720262_b374963641418"></a><a name="en-us_topic_0244720262_b374963641418"></a>reWriteBatchedInserts</strong>: Boolean type. During batch import, this parameter, if set to <strong id="en-us_topic_0244720262_b181331010151516"><a name="en-us_topic_0244720262_b181331010151516"></a><a name="en-us_topic_0244720262_b181331010151516"></a>on</strong>, can combine N insertion statements into one: insert into TABLE_NAME values(values1, ..., valuesN), ..., (values1, ..., valuesN). To use this parameter, set <strong id="en-us_topic_0244720262_b4859133351412"><a name="en-us_topic_0244720262_b4859133351412"></a><a name="en-us_topic_0244720262_b4859133351412"></a>batchMode</strong> to <strong id="en-us_topic_0244720262_b1786493315141"><a name="en-us_topic_0244720262_b1786493315141"></a><a name="en-us_topic_0244720262_b1786493315141"></a>off</strong>.</li><li><strong id="en-us_topic_0244720262_b560422412153"><a name="en-us_topic_0244720262_b560422412153"></a><a name="en-us_topic_0244720262_b560422412153"></a>unknownLength</strong>: integer type. The default value is <strong id="en-us_topic_0244720262_b1604124101514"><a name="en-us_topic_0244720262_b1604124101514"></a><a name="en-us_topic_0244720262_b1604124101514"></a>Integer.MAX_VALUE</strong>. This parameter specifies the length of the unknown length type when the data of some postgresql types (such as TEXT) is returned by functions such as ResultSetMetaData.getColumnDisplaySize and ResultSetMetaData.getPrecision.</li><li><strong id="en-us_topic_0244720262_b62681931181510"><a name="en-us_topic_0244720262_b62681931181510"></a><a name="en-us_topic_0244720262_b62681931181510"></a>defaultRowFetchSize</strong>: integer type. This parameter specifies the number of rows read by fetch in ResultSet at a time. Limiting the number of rows read each time in a database access request can avoid unnecessary memory consumption, thereby avoiding out of memory exception. The default value is <strong id="en-us_topic_0244720262_b1011336111513"><a name="en-us_topic_0244720262_b1011336111513"></a><a name="en-us_topic_0244720262_b1011336111513"></a>0</strong>, indicating that all rows are obtained at a time in ResultSet. There is no negative value.</li><li><strong id="en-us_topic_0244720262_b264583816156"><a name="en-us_topic_0244720262_b264583816156"></a><a name="en-us_topic_0244720262_b264583816156"></a>binaryTransfer</strong>: Boolean type. This parameter specifies whether data is sent and received in binary format. The default value is <strong id="en-us_topic_0244720262_b1343833910152"><a name="en-us_topic_0244720262_b1343833910152"></a><a name="en-us_topic_0244720262_b1343833910152"></a>false</strong>.</li><li><strong id="en-us_topic_0244720262_b173761240121515"><a name="en-us_topic_0244720262_b173761240121515"></a><a name="en-us_topic_0244720262_b173761240121515"></a>binaryTransferEnable</strong>: string type. This parameter specifies the type for which binary transmission is enabled. Every two types are separated by commas (,). You can select either the OID or name, for example, binaryTransferEnable=Integer4_ARRAY,Integer8_ARRAY.<p id="en-us_topic_0244720262_en-us_topic_0237120381_p3778145719527"><a name="en-us_topic_0244720262_en-us_topic_0237120381_p3778145719527"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_p3778145719527"></a>For example, if the OID name is BLOB and the OID number is 88, you can configure the OID as follows:</p>
<p id="en-us_topic_0244720262_en-us_topic_0237120381_p12336192714527"><a name="en-us_topic_0244720262_en-us_topic_0237120381_p12336192714527"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_p12336192714527"></a>binaryTransferEnable=BLOB or binaryTransferEnable=88</p>
</li><li><strong id="en-us_topic_0244720262_b17224514161"><a name="en-us_topic_0244720262_b17224514161"></a><a name="en-us_topic_0244720262_b17224514161"></a>binaryTransferDisEnable</strong>: string type. This parameter specifies the type for which binary transmission is disabled. Every two types are separated by commas (,). You can select either the OID or name. The value of this parameter overwrites the value of <strong id="en-us_topic_0244720262_b53694914167"><a name="en-us_topic_0244720262_b53694914167"></a><a name="en-us_topic_0244720262_b53694914167"></a>binaryTransferEnable</strong>.</li><li><strong id="en-us_topic_0244720262_b32612115160"><a name="en-us_topic_0244720262_b32612115160"></a><a name="en-us_topic_0244720262_b32612115160"></a>blobMode</strong>: string type. This parameter sets the setBinaryStream method to assign values to different types of data. The value <strong id="en-us_topic_0244720262_b2157912111612"><a name="en-us_topic_0244720262_b2157912111612"></a><a name="en-us_topic_0244720262_b2157912111612"></a>on</strong> indicates that values are assigned to blob data. The value <strong id="en-us_topic_0244720262_b1315714120165"><a name="en-us_topic_0244720262_b1315714120165"></a><a name="en-us_topic_0244720262_b1315714120165"></a>off</strong> indicates that values are assigned to bytea data. The default value is <strong id="en-us_topic_0244720262_b115713126169"><a name="en-us_topic_0244720262_b115713126169"></a><a name="en-us_topic_0244720262_b115713126169"></a>on</strong>.</li><li><strong id="en-us_topic_0244720262_b434281316167"><a name="en-us_topic_0244720262_b434281316167"></a><a name="en-us_topic_0244720262_b434281316167"></a>socketFactory</strong>: string type. This parameter specifies the name of the class used to create a socket connection with the server. This class must implement the <strong id="en-us_topic_0244720262_b20888815181610"><a name="en-us_topic_0244720262_b20888815181610"></a><a name="en-us_topic_0244720262_b20888815181610"></a>javax.net.SocketFactory</strong> interface and define a constructor with no parameter or a single string parameter.</li><li><strong id="en-us_topic_0244720262_b1072621641613"><a name="en-us_topic_0244720262_b1072621641613"></a><a name="en-us_topic_0244720262_b1072621641613"></a>socketFactoryArg</strong>: string type. The value is an optional parameter of the constructor function of the socketFactory class and is not recommended.</li><li><strong id="en-us_topic_0244720262_b8540618191615"><a name="en-us_topic_0244720262_b8540618191615"></a><a name="en-us_topic_0244720262_b8540618191615"></a>receiveBufferSize</strong>: integer type. This parameter is used to set <strong id="en-us_topic_0244720262_b5571520171615"><a name="en-us_topic_0244720262_b5571520171615"></a><a name="en-us_topic_0244720262_b5571520171615"></a>SO_RCVBUF</strong> on the connection stream.</li><li><strong id="en-us_topic_0244720262_b1045292101619"><a name="en-us_topic_0244720262_b1045292101619"></a><a name="en-us_topic_0244720262_b1045292101619"></a>sendBufferSize</strong>: integer type. This parameter is used to set <strong id="en-us_topic_0244720262_b1642172216163"><a name="en-us_topic_0244720262_b1642172216163"></a><a name="en-us_topic_0244720262_b1642172216163"></a>SO_SNDBUF</strong> on the connection stream.</li><li><strong id="en-us_topic_0244720262_b6340823191613"><a name="en-us_topic_0244720262_b6340823191613"></a><a name="en-us_topic_0244720262_b6340823191613"></a>preferQueryMode</strong>: string type. The value can be <strong id="en-us_topic_0244720262_b16228124181618"><a name="en-us_topic_0244720262_b16228124181618"></a><a name="en-us_topic_0244720262_b16228124181618"></a>extended</strong>, <strong id="en-us_topic_0244720262_b622902401615"><a name="en-us_topic_0244720262_b622902401615"></a><a name="en-us_topic_0244720262_b622902401615"></a>extendedForPrepared</strong>, <strong id="en-us_topic_0244720262_b17229192451619"><a name="en-us_topic_0244720262_b17229192451619"></a><a name="en-us_topic_0244720262_b17229192451619"></a>extendedCacheEverything</strong>, or <strong id="en-us_topic_0244720262_b4229162411612"><a name="en-us_topic_0244720262_b4229162411612"></a><a name="en-us_topic_0244720262_b4229162411612"></a>simple</strong>. This parameter specifies the query mode. In <strong id="en-us_topic_0244720262_b148711329181614"><a name="en-us_topic_0244720262_b148711329181614"></a><a name="en-us_topic_0244720262_b148711329181614"></a>simple</strong> mode, the query is executed without parsing or binding. In <strong id="en-us_topic_0244720262_b13876202961615"><a name="en-us_topic_0244720262_b13876202961615"></a><a name="en-us_topic_0244720262_b13876202961615"></a>extended</strong> mode, the query is executed and bound. The <strong id="en-us_topic_0244720262_b88762298166"><a name="en-us_topic_0244720262_b88762298166"></a><a name="en-us_topic_0244720262_b88762298166"></a>extendedForPrepared</strong> mode is used for prepared statement extension. In <strong id="en-us_topic_0244720262_b1187752971611"><a name="en-us_topic_0244720262_b1187752971611"></a><a name="en-us_topic_0244720262_b1187752971611"></a>extendedCacheEverything</strong> mode, each statement is cached.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_r8005ff51ee3d40e184a8db722d0f18ae"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a925328f5c60948c98b489a99cbc20017"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a925328f5c60948c98b489a99cbc20017"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a925328f5c60948c98b489a99cbc20017"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"></a>Database user.</p>
</td>
</tr>
<tr id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_rc74336c5bc0640da9b968c8b953ea76d"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"></a><a name="en-us_topic_0244720262_en-us_topic_0237120381_en-us_topic_0213179126_en-us_topic_0189251768_en-us_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"></a>Password of the database user.</p>
</td>
</tr>
</tbody>
</table>

## Examples

-   The following illustrates how to connect database based on openGauss JDBC interfaces.

    ```
    // The following code encapsulates database connection operations into an interface. The database can then be connected using an authorized username and a password.
    public static Connection getConnect(String username, String passwd)
        {
            // Driver class.
            String driver = "org.postgresql.Driver";
            // Database connection descriptor.
            String sourceURL = "jdbc:postgresql://10.10.0.13:8000/postgres";
            Connection conn = null;
            
            try
            {
                // Load the driver.
                Class.forName(driver);
            }
            catch( Exception e )
            {
                e.printStackTrace();
                return null;
            }
            
            try
            {
                 // Create a connection.
                conn = DriverManager.getConnection(sourceURL, username, passwd);
                System.out.println("Connection succeed!");
            }
            catch(Exception e)
            {
                e.printStackTrace();
                return null;
            }
            
            return conn;
        };
    // The following code uses the Properties object as a parameter to establish a connection.
    public static Connection getConnectUseProp(String username, String passwd)
        {
            // Driver class.
            String driver = "org.postgresql.Driver";
            // Database connection descriptor.
            String sourceURL = "jdbc:postgresql://10.10.0.13:8000/postgres?";
            Connection conn = null;
            Properties info = new Properties();
            
            try
            {
                // Load the driver.
                Class.forName(driver);
            }
            catch( Exception e )
            {
                e.printStackTrace();
                return null;
            }
            
            try
            {
                 info.setProperty("user", username);
                 info.setProperty("password", passwd);
                 // Create a connection.
                 conn = DriverManager.getConnection(sourceURL, info);
                 System.out.println("Connection succeed!");
            }
            catch(Exception e)
            {
                e.printStackTrace();
                return null;
            }
            
            return conn;
        };
    ```

-   The following illustrates how to develop applications based on openGauss JDBC interfaces.

    ```
    //DBtest.java
    // This example illustrates the main processes of JDBC-based development, covering database connection creation, table creation, and data insertion.
    
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.sql.CallableStatement;
    
    public class DBTest {
    
      // Create a database connection.
      public static Connection GetConnection(String username, String passwd) {
        String driver = "org.postgresql.Driver";
        String sourceURL = "jdbc:postgresql://localhost:8000/postgres";
        Connection conn = null;
        try {
          // Load the database driver.
          Class.forName(driver).newInstance();
        } catch (Exception e) {
          e.printStackTrace();
          return null;
        }
    
        try {
          // Create a database connection.
          conn = DriverManager.getConnection(sourceURL, username, passwd);
          System.out.println("Connection succeed!");
        } catch (Exception e) {
          e.printStackTrace();
          return null;
        }
    
        return conn;
      };
    
      // Run a common SQL statement to create table customer_t1.
      public static void CreateTable(Connection conn) {
        Statement stmt = null;
        try {
          stmt = conn.createStatement();
    
          // Run a common SQL statement.
          int rc = stmt
              .executeUpdate("CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32));");
    
          stmt.close();
        } catch (SQLException e) {
          if (stmt != null) {
            try {
              stmt.close();
            } catch (SQLException e1) {
              e1.printStackTrace();
            }
          }
          e.printStackTrace();
        }
      }
    
      // Run a prepared statement to insert data in batches.
      public static void BatchInsertData(Connection conn) {
        PreparedStatement pst = null;
    
        try {
          // Generate a prepared statement.
          pst = conn.prepareStatement("INSERT INTO customer_t1 VALUES (?,?)");
          for (int i = 0; i < 3; i++) {
            // Add parameters.
            pst.setInt(1, i);
            pst.setString(2, "data " + i);
            pst.addBatch();
          }
          // Perform batch processing.
          pst.executeBatch();
          pst.close();
        } catch (SQLException e) {
          if (pst != null) {
            try {
              pst.close();
            } catch (SQLException e1) {
            e1.printStackTrace();
            }
          }
          e.printStackTrace();
        }
      }
    
      // Run a prepared statement to update data.
      public static void ExecPreparedSQL(Connection conn) {
        PreparedStatement pstmt = null;
        try {
          pstmt = conn
              .prepareStatement("UPDATE customer_t1 SET c_customer_name = ? WHERE c_customer_sk = 1");
          pstmt.setString(1, "new Data");
          int rowcount = pstmt.executeUpdate();
          pstmt.close();
        } catch (SQLException e) {
          if (pstmt != null) {
            try {
              pstmt.close();
            } catch (SQLException e1) {
              e1.printStackTrace();
            }
          }
          e.printStackTrace();
        }
      }
    
    
    // Run a stored procedure.
      public static void ExecCallableSQL(Connection conn) {
        CallableStatement cstmt = null;
        try {
          
          cstmt=conn.prepareCall("{? = CALL TESTPROC(?,?,?)}");
          cstmt.setInt(2, 50); 
          cstmt.setInt(1, 20);
          cstmt.setInt(3, 90);
          cstmt.registerOutParameter(4, Types.INTEGER);  // Register an OUT parameter of the integer type.
          cstmt.execute();
          int out = cstmt.getInt(4);  // Obtain the OUT parameter.
          System.out.println("The CallableStatment TESTPROC returns:"+out);
          cstmt.close();
        } catch (SQLException e) {
          if (cstmt != null) {
            try {
              cstmt.close();
            } catch (SQLException e1) {
              e1.printStackTrace();
            }
          }
          e.printStackTrace();
        }
      }
      
    
      /**
       *Main process. Call static methods one by one.
       * @param args
      */
      public static void main(String[] args) {
        // Create a database connection.
        Connection conn = GetConnection("tester", "Password1234");
    
        // Create a table.
        CreateTable(conn);
    
        // Insert data in batches.
        BatchInsertData(conn);
    
        // Run a prepared statement to update data.
        ExecPreparedSQL(conn);
    
        // Run a stored procedure.
        ExecCallableSQL(conn);
    
        // Close the connection to the database.
        try {
          conn.close();
        } catch (SQLException e) {
          e.printStackTrace();
        }
    
      }
    
    }
    ```


