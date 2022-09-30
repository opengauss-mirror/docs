# SQL on Anywhere<a name="EN-US_TOPIC_0311524270"></a>

Various types of engine components provide many interfaces for big data processing. However, for traditional database users, the SQL language is still the most familiar and convenient interface. Their operations will be efficient using SQL statements on a client to perform operations on big data components.

openGauss supports SQL on Anywhere and allows to operate Oracle, Spark, and openGauss, building a unified big data computing platform.

## Accessing Data Across Database Instances Based on Extension Connector<a name="section134436495103"></a>

You can use Extension Connector provided by openGauss to send SQL statements to an Oracle, Spark, or other database instances outside the openGauss database, and return the execution result in the current database, implementing data processing.

To use Extension Connector, construct a data source \(containing the connection and encoding information about the target database\), obtain the permission to use the data source, connect to the target database using the standard ODBC API, send SQL statements, and obtain the execution result.

Extension Connector provides a unified connection function  **exec\_on\_extension \(***text***, ***text***\)**, where the first  *text*  specifies the data source name and the second specifies the SQL statement to be sent.

Notice the following issues when using the  **exec\_on\_extension**  function:

-   The permission of  **exec\_on\_extension**  to connect to the target database is controlled by the data source usage permission.
-   The character encoding of  **exec\_on\_extension**  is stored in a data source. The default encoding is  **UTF-8**.
-   **exec\_on\_extension**  returns a value of the record type, that is, a dataset. Therefore,  **AS**  \(table definition\) is required to receive the return value.  **CALL**  is not supported.
-   **exec\_on\_extension**  can send multiple types of SQL statements. The following table shows how to process their result sets.

    <a name="table173552601415"></a>
    <table><thead align="left"><tr id="row536426141418"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.1"><p id="p19365260146"><a name="p19365260146"></a><a name="p19365260146"></a>SQL Statement Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.2"><p id="p1336226131416"><a name="p1336226131416"></a><a name="p1336226131416"></a>Returned Result</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.3"><p id="p13672619140"><a name="p13672619140"></a><a name="p13672619140"></a>AS Clause</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1836126161416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p690895191917"><a name="p690895191917"></a><a name="p690895191917"></a>DDL</p>
    <p id="p1936826191418"><a name="p1936826191418"></a><a name="p1936826191418"></a>(Example: <strong id="b333162463229"><a name="b333162463229"></a><a name="b333162463229"></a>CREATE</strong> and <strong id="b21268186943229"><a name="b21268186943229"></a><a name="b21268186943229"></a>DROP</strong>)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p136112617143"><a name="p136112617143"></a><a name="p136112617143"></a>Empty set: indicates a success.</p>
    <p id="p4602101371619"><a name="p4602101371619"></a><a name="p4602101371619"></a>Non-empty set: indicates a failure.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p436426141419"><a name="p436426141419"></a><a name="p436426141419"></a>Define a column of the <strong id="b8071651993229"><a name="b8071651993229"></a><a name="b8071651993229"></a>TEXT</strong> type.</p>
    <p id="p924695001612"><a name="p924695001612"></a><a name="p924695001612"></a>(c1 text)</p>
    </td>
    </tr>
    <tr id="row136326101413"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p6147178131915"><a name="p6147178131915"></a><a name="p6147178131915"></a>DQL</p>
    <p id="p1836152621410"><a name="p1836152621410"></a><a name="p1836152621410"></a>(Example: <strong id="b13467555803229"><a name="b13467555803229"></a><a name="b13467555803229"></a>SELECT</strong> and <strong id="b19098717403229"><a name="b19098717403229"></a><a name="b19098717403229"></a>FROM</strong>)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p3360263147"><a name="p3360263147"></a><a name="p3360263147"></a>Data tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p536132651419"><a name="p536132651419"></a><a name="p536132651419"></a>Match the type with the return value type by column.</p>
    </td>
    </tr>
    <tr id="row18361126121418"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p557115917199"><a name="p557115917199"></a><a name="p557115917199"></a>DML</p>
    <p id="p18363264141"><a name="p18363264141"></a><a name="p18363264141"></a>(Example: <strong id="b8387781243229"><a name="b8387781243229"></a><a name="b8387781243229"></a>INSERT</strong> and <strong id="b5590840613229"><a name="b5590840613229"></a><a name="b5590840613229"></a>UPDATE</strong>)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p183612617145"><a name="p183612617145"></a><a name="p183612617145"></a>Empty set: indicates a success.</p>
    <p id="p444212283191"><a name="p444212283191"></a><a name="p444212283191"></a>Non-empty set: indicates a failure.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p133602621418"><a name="p133602621418"></a><a name="p133602621418"></a>Define a column of the <strong id="b6656598583229"><a name="b6656598583229"></a><a name="b6656598583229"></a>TEXT</strong> type.</p>
    <p id="p154831854121920"><a name="p154831854121920"></a><a name="p154831854121920"></a>(c1 text)</p>
    </td>
    </tr>
    <tr id="row83672641414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p836226161420"><a name="p836226161420"></a><a name="p836226161420"></a>Text display command</p>
    <p id="p1934192314208"><a name="p1934192314208"></a><a name="p1934192314208"></a>(Example: <strong id="b2291800723229"><a name="b2291800723229"></a><a name="b2291800723229"></a>SHOW</strong> and <strong id="b19431895293229"><a name="b19431895293229"></a><a name="b19431895293229"></a>EXPLAIN</strong>)</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p1536026141411"><a name="p1536026141411"></a><a name="p1536026141411"></a>Several rows and columns</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p103618261143"><a name="p103618261143"></a><a name="p103618261143"></a>Define the text type to match the result. For example, if two text columns are returned, the clause can be defined as <strong id="b1252801862810"><a name="b1252801862810"></a><a name="b1252801862810"></a>(c1 text, c2 text)</strong>.</p>
    </td>
    </tr>
    </tbody>
    </table>


Comply with the following rules to use  **exec\_on\_extension**:

-   **exec\_on\_extension**  first searches for  **USERNAME**  and  **PASSWORD**  in data sources. If they are not found, unixODBC searches the  **odbc.ini**  file. If they are still not found, the connection fails. If  **USERNAME**  and  **PASSWORD**  are incorrect in the data sources but correct in the  **odbc.ini**  file, the connection still fails.
-   In  **SELECT \* FROM exec\_on\_extension\(\) AS \(C1, C2,  ..., C***n_**\)**, the columns specified by the  **AS**  clause are the first  _n*  columns of the data returned by executing the SQL statement. Therefore, the column types should match the first  *n*  columns of the returned data. Otherwise, the result may be incorrect or the execution may fail. Do not use only columns in the middle or end of the returned result. Ensure that columns in the  **AS**  clause are no more than the returned columns.
-   **exec\_on\_extension**  does not check the validity of the SQL statements to be sent. It can send only one SQL statement at a time. You are not advised to send the following statements or commands \(**exec\_hadoop\_sql**  also restricted\):
    -   Do not send commands or SQL statements that are valid only in the current session, for example, the statement for creating a temporary table.
    -   Do not send statements that start a transaction, for example,  **START TRANSACTION**.
    -   Do not send statements that call the  **exec\_on\_extension**  or  **exec\_hadoop\_sql**  function, for example,  **select \* from exec\_on\_extension\('xxx', 'select \* from exec\_on\_extension\(\)...'\)**.
    -   Do not send client commands, for example, the  **SQLPlus**  command of Oracle and meta-commands in "Client Tools \> gsql \> Meta-Command Reference" in the  *Tool Reference*  of the openGauss database instance.
    -   Do not send interactive commands, for example, the commands that require users to enter passwords.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>1.  For compatibility purposes,  **exec\_hadoop\_sql**  used in the earlier version for interconnecting to the Spark database instance is retained. Therefore, both  **exec\_on\_extension**  and  **exec\_hadoop\_sql**  can be used for Spark interconnection. The  **exec\_hadoop\_sql**  function has security risks and can be used only after permission is granted. You are advised to use the  **exec\_on\_extension**  function.
>2.  The  **exec\_on\_extension**  and  **exec\_hadoop\_sql**  functions are not supported in MySQL compatibility scenarios.

-   **[SQL on Hadoop](sql-on-hadoop.md)**  

-   **[SQL on Oracle](sql-on-oracle.md)**  

-   **[SQL on Spark](sql-on-spark.md)**  

-   **[SQL on openGauss](sql-on-opengauss.md)**  
