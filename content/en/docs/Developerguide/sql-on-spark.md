# SQL on Spark<a name="EN-US_TOPIC_0311524279"></a>

## Overview<a name="section18188841175718"></a>

SQL on Spark allows you to access a Spark database instance, sending SQL statements and processing return results.  [Extension Connector](sql-on-anywhere.md#section134436495103)  is compatible with this function in earlier versions and retains the original interface function  **exec\_hadoop\_sql \(text, text, text\)**. The  **exec\_hadoop\_sql**  function has security risks and can be used only after permission is granted. You are advised to use the  **exec\_on\_extension**  function.

When connecting to a Spark database instance, the  **exec\_hadoop\_sql**  and  **exec\_on\_extension**  functions have the following differences:

-   Parameters and their meanings:

    The three  **text**  in  **exec\_hadoop\_sql\(text,text,text\)**  indicate the DSN, SQL, and encoding, respectively.

    The two  **text**  in  **exec\_on\_extension\(text, text\)**  indicate the data source name and SQL, respectively.

-   Required ODBC configuration:

    **exec\_hadoop\_sql**  must be configured on only the current execution node.

    **exec\_on\_extension**  must be configured on all openGauss nodes.

-   Execution:

    **exec\_hadoop\_sql**  does not require any data source created before its execution.

    **exec\_on\_extension**  requires that a data source be created before its execution.


## Supported Spark Data Types<a name="section326516910482"></a>

The following table lists data types supported by SQL on Spark.

**Table  1**  Data types supported by SQL on Spark

<a name="table04433613491"></a>
<table><thead align="left"><tr id="row174453610493"><th class="cellrowborder" valign="top" width="23.392339233923394%" id="mcps1.2.4.1.1"><p id="p184414364491"><a name="p184414364491"></a><a name="p184414364491"></a>General Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="43.27432743274327%" id="mcps1.2.4.1.2"><p id="p844193613493"><a name="p844193613493"></a><a name="p844193613493"></a>Spark Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p11441936114913"><a name="p11441936114913"></a><a name="p11441936114913"></a>Local <span id="text0493439162312"><a name="text0493439162312"></a><a name="text0493439162312"></a>openGauss</span> Data Type</p>
</th>
</tr>
</thead>
<tbody><tr id="row12441636194914"><td class="cellrowborder" rowspan="7" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p958594705414"><a name="p958594705414"></a><a name="p958594705414"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1744103615492"><a name="p1744103615492"></a><a name="p1744103615492"></a>TINYINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4443361491"><a name="p4443361491"></a><a name="p4443361491"></a>SMALLINT</p>
</td>
</tr>
<tr id="row1344153654913"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p4441936114920"><a name="p4441936114920"></a><a name="p4441936114920"></a>SMALLINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p2446365497"><a name="p2446365497"></a><a name="p2446365497"></a>SMALLINT</p>
</td>
</tr>
<tr id="row6441636164920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p34403612492"><a name="p34403612492"></a><a name="p34403612492"></a>INTEGER</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p744113614914"><a name="p744113614914"></a><a name="p744113614914"></a>INTEGER</p>
</td>
</tr>
<tr id="row34433654919"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p54413684919"><a name="p54413684919"></a><a name="p54413684919"></a>BIGINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p74433611491"><a name="p74433611491"></a><a name="p74433611491"></a>BIGINT</p>
</td>
</tr>
<tr id="row17448361498"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1244236174915"><a name="p1244236174915"></a><a name="p1244236174915"></a>FLOAT</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.4.1.2 "><p id="p1978495265217"><a name="p1978495265217"></a><a name="p1978495265217"></a>DOUBLE PRECISION</p>
</td>
</tr>
<tr id="row5442365493"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13441936134916"><a name="p13441936134916"></a><a name="p13441936134916"></a>DOUBLE</p>
</td>
</tr>
<tr id="row14412361492"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p114543614918"><a name="p114543614918"></a><a name="p114543614918"></a>DECIMAL</p>
</td>
</tr>
<tr id="row04593664910"><td class="cellrowborder" rowspan="3" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p72281333135419"><a name="p72281333135419"></a><a name="p72281333135419"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1945183620493"><a name="p1945183620493"></a><a name="p1945183620493"></a>STRING</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1792142965318"><a name="p1792142965318"></a><a name="p1792142965318"></a>TEXT</p>
</td>
</tr>
<tr id="row1645143617499"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13455366499"><a name="p13455366499"></a><a name="p13455366499"></a>VARCHAR</p>
</td>
</tr>
<tr id="row9451536134917"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7451236164913"><a name="p7451236164913"></a><a name="p7451236164913"></a>CHAR</p>
</td>
</tr>
<tr id="row345143684911"><td class="cellrowborder" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p5451436184914"><a name="p5451436184914"></a><a name="p5451436184914"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1945836114910"><a name="p1945836114910"></a><a name="p1945836114910"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p124593611490"><a name="p124593611490"></a><a name="p124593611490"></a>BOOLEAN</p>
</td>
</tr>
<tr id="row74573664919"><td class="cellrowborder" rowspan="2" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p1159761485416"><a name="p1159761485416"></a><a name="p1159761485416"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p10451536114910"><a name="p10451536114910"></a><a name="p10451536114910"></a>TIMESTAMP</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p64543618499"><a name="p64543618499"></a><a name="p64543618499"></a>TIMESTAMP</p>
</td>
</tr>
<tr id="row1245163634918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p545183694916"><a name="p545183694916"></a><a name="p545183694916"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1945636154911"><a name="p1945636154911"></a><a name="p1945636154911"></a>DATE</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   To receive a type of data returned by Spark, specify its corresponding data type in the  **AS**  clause. If the returned type of Spark is not listed in the table or its corresponding data type is not specified, the type conversion may generate an incorrect result or fail.
>-   For a string of the  **CHAR\(**_n_**\)**  type in Spark, if its length is less than  _n_, it will be automatically padded with spaces. These spaces will be retained when the string is transferred to openGauss and converted to the  **TEXT**  type.
>-   If the encoding mode of openGauss is set to  **SQL\_ASCII**, the  **length\(\)**  function returns the number of bytes of the string rather than the actual number of characters. For example, if you execute  **exec\_on\_extension**  as follows:
>    select c2,length\(c2\) from exec\_on\_extension\('spark','select \* from a;'\) as \(c1 int, c2 text\);
>    The second column returned is the number of bytes of the string, rather than the number of characters. This is similar to  **exec\_hadoop\_sql**.

## Interconnection Configuration<a name="section72009141218"></a>

The following procedure uses  **exec\_on\_extension**  as an example. When using  **exec\_hadoop\_sql**  to connect to Spark, you do not need to create any data sources.

1.  <a name="li1343510529592"></a>Log in as the OS user  **omm**  to the primary node of the database.
2.  Prepare  **package.zip**  and put it in  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_. If the path does not exist, create it first.  _$DSN_  indicates a folder naming after the DSN. The DSN name must consist of letters, digits, and underscores \(\_\). The package contains the following files:

    -   KrbClient.zip
    -   datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm
    -   kuser\_1544261037803\_keytab.tar

    Run the following command to generate the package:

    ```
    zip -r package.zip KrbClient.zip datasight-hiveodbc-1.0.0-1.el6.x86_64.rpm kuser_1544261037803_keytab.tar
    ```

    **KrbClient.zip**  indicates the Kerberos client to connect to Spark,  **kuser\_1544261037803\_keytab.tar**  indicates the user authentication credential used for connection, and  **datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm**  indicates the Spark ODBC installation package. Perform the following steps to obtain the files:

    1.  Log in to the peer Spark database instance to be connected.
    2.  In the upper right corner of the home page, choose  **More**  \>  **Download Client**. Decompress the downloaded client package to obtain the  **FusionInsight\_Services\_ClientConfig.tar**  package. Decompress the package, go to the  **FusionInsight\_Services\_ClientConfig**  directory, and compress  **KrbClient**  to  **KrbClient.zip**  in the method of preparing the  **package.zip**  package.
    3.  Go to the  **Spark2x**  directory in  **FusionInsight\_Services\_ClientConfig**  and decompress  **DataSight\_Spark\_V100R002C50RC2SPC200\_HiveODBC.zip**. Go to the Linux directory generated after the decompression and select the .rpm package based on the OS version. Red Hat/CentOS: datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm; SUSE: datasight-hiveodbc-1.0.0-1.x86\_64.rpm.
    4.  On top of the home page, click  **System**  to go to the user interface. Select the user that is used for connecting to Spark, click  **More**, and select the authentication credential  **kuser\_1544261037803\_keytab.tar**  to download it.

3.  <a name="li13407125013577"></a>Generate the  **DSN.ini**  file in  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_. Ensure that the file content and format are correct. For example:

    ```
    [spark]
    MODE=0
    HOST=10.185.178.151
    PORT=23040
    DATABASE=zyl
    PRINCIPAL=spark/hadoop.hadoop.com@HADOOP.COM
    FRAMED=0
    NAMESPACE=sparkthriftserver
    principal="kuser@HADOOP.COM"
    ```

4.  Install datasight-hiveodbc.

    ```
    mkdir $GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

    Red Hat/CentOS environment:

    ```
    rpm -ivh --nofiledigest $GAUSSHOME/utilslib/fc_conf/$DSN/datasight-hiveodbc-1.0.0-1.el6.x86_64.rpm --nodeps --force --prefix=$GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

    SUSE environment:

    ```
    rpm -ivh --nofiledigest $GAUSSHOME/utilslib/fc_conf/$DSN/datasight-hiveodbc-1.0.0-1.x86_64.rpm --nodeps --force --prefix=$GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

5.  <a name="li18491441322"></a>Run the following command to automatically deploy Extension Connector. After the deployment is complete, run the  **kinit**  command on each node to generate a ticket for the user.

    ```
    gs_om -t ec -m add -N DSN -U username --type=spark
    gs_om -t ec -m add -N DSN -U username --type=spark  -L  #-L indicates the local mode.
    kinit kuser    # The kuser user refers to the user who connects to and accesses the peer database instance.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the local mode is used, perform steps  [1](#li1343510529592)  to  [3](#li13407125013577)  on each node.

6.  Run the following command to restart the database instance and stop the  **om\_monitor**  process so that the openGauss process can detect the environment variable change:

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L indicates the local mode.
    gs_om -t stop && gs_om -t start         #Run this command only in local mode.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the local mode is used, perform steps  [1](#li1343510529592)  to  [4](#li18491441322)  on each node.
    >-   In local mode, the database instance does not need to be started or stopped. Therefore, you need to manually run the command for starting or stopping the database instance.

7.  Create a data source.

    Perform the following steps:

    1.  Perform the steps in  [Connecting to a Database](en-us_topic_0289900104.md).
    2.  Create a data source.

        ```
        postgres=# CREATE DATA SOURCE spark_ds OPTIONS(DSN 'spark_odbc', encoding 'utf8');
        ```

        The field meanings and modification methods are similar to those in  [9](sql-on-oracle.md#li18691619432)  in "SQL on Oracle".


8.  Connect to Spark.

    For details, see  [Examples](#section15891020125711).


## Precautions<a name="section1335444615416"></a>

1.  If you use the required authentication information and file to connect to Spark, you do not need to provide the username and password in the data source. They will be transferred to unixODBC if provided.
2.  Ensure that the content in  **package.zip**  is complete and that the content in the  **DSN.ini**  file is correct. Do not modify them after the installation and deployment are complete. Otherwise, the environment probably cannot be used.
3.  Extension Connector can connect to only one Spark database instance each time. If multiple Spark connections are set up, authentication conflicts occur.
4.  Changing the user password of the Spark database instance will invalidate the authentication credential. On top of the home page, click  **System**  to go to the user interface. Select the user that is used for connecting to Spark, click  **More**, and select the authentication credential to download it again. Upload the downloaded authentication credential to the  _GAUSSHOME_**/utilslib/fc\_conf/**_DSN_**/**  directory.  _DSN_  indicates a user-defined DSN name. Decompress the authentication credential to replace the existing files. Change the owner of the authentication credential to the database instance user.
5.  Spark ODBC must be compiled by using GCC 5.4 or later.

## Examples<a name="section15891020125711"></a>

```
-- Assume that table t1 (c1 int, c2 string) exists in the Spark. The content is as follows:
-- 1  spark
-- 2  hive
--Query data by using the exec_hadoop_sql function. spark_odbc is the DSN of Spark in odbc.ini.
postgres=# SELECT * FROM exec_hadoop_sql('spark_odbc', 'select * from t1;', '') AS (c1 int, c2 text);
 c1 |  c2   
----+-------
  1 | spark
  2 | hive
(2 rows)
--Query data by using the exec_on_extension function.
postgres=# CREATE DATA SOURCE spark_ds OPTIONS(dsn 'spark_odbc');
postgres=# SELECT * FROM exec_on_extension ('spark_ds', 'select * from t1;') AS (c1 int, c2 text);
 c1 |  c2   
----+-------
  1 | spark
  2 | hive
(2 rows)
postgres=# DROP DATA SOURCE spark_ds;
```

## Troubleshooting<a name="section12844151163616"></a>

For details about common issues that occur while Extension Connector interconnects with openGauss, see  [Table 2](#table1097865225410).

**Table  2**  Common troubleshooting for interconnection between Extension Connector and openGauss

<a name="table1097865225410"></a>
<table><thead align="left"><tr id="row771153155415"><th class="cellrowborder" valign="top" width="16.669999999999998%" id="mcps1.2.4.1.1"><p id="p8131653175411"><a name="p8131653175411"></a><a name="p8131653175411"></a>Error Type</p>
</th>
<th class="cellrowborder" valign="top" width="36.33%" id="mcps1.2.4.1.2"><p id="p10191753165413"><a name="p10191753165413"></a><a name="p10191753165413"></a>Error Information</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="p14258538548"><a name="p14258538548"></a><a name="p14258538548"></a>Troubleshooting</p>
</th>
</tr>
</thead>
<tbody><tr id="row19311353195413"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p1143753105414"><a name="p1143753105414"></a><a name="p1143753105414"></a>Deployment error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p10496115724915"><a name="p10496115724915"></a><a name="p10496115724915"></a>[GAUSS-50201] : The $GAUSSHOME/utilslib/fc_conf/ora/ does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p185711536541"><a name="p185711536541"></a><a name="p185711536541"></a>View automatic deployment logs and rectify the fault based on the error information in the logs. Then perform the deployment again.</p>
<p id="p53344586316"><a name="p53344586316"></a><a name="p53344586316"></a>The log path is as follows:</p>
<a name="ul279530153212"></a><a name="ul279530153212"></a><ul id="ul279530153212"><li>The default path is <em id="i5467122114541"><a name="i5467122114541"></a><a name="i5467122114541"></a>$GAUSSLOG</em><strong id="b446812111545"><a name="b446812111545"></a><a name="b446812111545"></a>/om</strong>.</li><li>If the <strong id="b7482162365418"><a name="b7482162365418"></a><a name="b7482162365418"></a>gs_om</strong> tool is used for automatic deployment and <strong id="b16483923145411"><a name="b16483923145411"></a><a name="b16483923145411"></a>-l</strong> is specified, logs are stored in the specified directory.</li></ul>
</td>
</tr>
<tr id="row6837532545"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p209155315542"><a name="p209155315542"></a><a name="p209155315542"></a>Connection error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p14100953175412"><a name="p14100953175412"></a><a name="p14100953175412"></a>ERROR:  source "spark_ds" does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p18105175313544"><a name="p18105175313544"></a><a name="p18105175313544"></a>Create a data source. For details, see <a href="en-us_topic_0289900178.md">CREATE DATA SOURCE</a>.</p>
</td>
</tr>
<tr id="row1611213537544"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p912145375413"><a name="p912145375413"></a><a name="p912145375413"></a>Execution error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p19131125365411"><a name="p19131125365411"></a><a name="p19131125365411"></a>ERROR:  invalid input syntax for integer</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1113919539542"><a name="p1113919539542"></a><a name="p1113919539542"></a>Check the LirbA data types supported by Extension Connector. For details, see <a href="sql-on-oracle.md#table11811516202811">Table 1</a>.</p>
</td>
</tr>
<tr id="row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p28487245319"><a name="p28487245319"></a><a name="p28487245319"></a>Execution error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p1114811534472"><a name="p1114811534472"></a><a name="p1114811534472"></a>ERROR:  dn_6033_6034: DSN:spark2x,Fail to get data from ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="p1984862418311"><a name="p1984862418311"></a><a name="p1984862418311"></a>DETAIL:  SQL_ERROR: cast unexpected type to date/timestamp.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p63709537537"><a name="p63709537537"></a><a name="p63709537537"></a>If the data type returned by Spark in the SQL statement does not match the expected data type, an error is reported.</p>
<p id="p20848152453111"><a name="p20848152453111"></a><a name="p20848152453111"></a>If other syntax errors occur during SQL statement execution, Extension Connector also returns Spark errors.</p>
</td>
</tr>
</tbody>
</table>

## Related Links<a name="section67639236412"></a>

[CREATE DATA SOURCE](en-us_topic_0289900178.md); "Server Tools \> gs\_om" in the  _Tool Reference_

