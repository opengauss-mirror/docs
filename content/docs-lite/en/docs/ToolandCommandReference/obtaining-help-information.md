# Obtaining Help Information<a name="EN-US_TOPIC_0294748948"></a>

## Procedure<a name="en-us_topic_0059778941_s24c36ac1563e42cb99f9773e8cd9c78c"></a>

-   When connecting to the database, run the following command to obtain the help information:

    ```
    gsql --help
    ```

    The following help information is displayed:

    ```
    ......
    Usage:
      gsql [OPTION]... [DBNAME [USERNAME]]
    
    General options:
      -c, --command=COMMAND    run only single command (SQL or internal) and exit
      -d, --dbname=DBNAME      database name to connect to (default: "omm")
      -f, --file=FILENAME      execute commands from file, then exit
    ......
    ```

-   When connecting to the database, run the following command to obtain the help information:

    ```
    help
    ```

    The following help information is displayed:

    ```
    You are using gsql, the command-line interface to gaussdb.
    Type:  \copyright for distribution terms
           \h for help with SQL commands
           \? for help with gsql commands
           \g or terminate with semicolon to execute query
           \q to quit
    ```


## Examples<a name="en-us_topic_0059778941_s4dc2aaee2ce54ae1a508fe58125b9995"></a>

1.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and 8000 is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss VxxxRxxxCxx build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    ```

2.  View the  **gsql**  help information. For details, see  [Table 1](#en-us_topic_0059778941_en-us_topic_0058968146_table52020644).

    **Table  1** **gsql**  online help

    <a name="en-us_topic_0059778941_en-us_topic_0058968146_table52020644"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778941_en-us_topic_0058968146_row35168989"><th class="cellrowborder" valign="top" width="30.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="69.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778941_en-us_topic_0058968146_row11332742"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a>Query the copyright.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a>\copyright</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778941_r7c9e6b30c75c476a8ed11c601c5875bc"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"><a name="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a><a name="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a>View help information about SQL statements supported by <span id="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"><a name="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"></a><a name="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"></a><span id="text39202108294"><a name="text39202108294"></a><a name="text39202108294"></a>openGauss</span></span>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"><a name="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a><a name="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a>View help information about SQL statements supported by <span id="text4873448142914"><a name="text4873448142914"></a><a name="text4873448142914"></a><span id="text1687320489290"><a name="text1687320489290"></a><a name="text1687320489290"></a>openGauss</span></span>.</p>
    <p id="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"><a name="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a><a name="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a>For example, view all SQL statements supported by <span id="text358515536298"><a name="text358515536298"></a><a name="text358515536298"></a><span id="text1258519538298"><a name="text1258519538298"></a><a name="text1258519538298"></a>openGauss</span></span>.</p>
    <a name="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><a name="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f">openGauss=# \h
    Available help:
      ABORT                            
      ALTER AGGREGATE
      ALTER APP WORKLOAD GROUP                  
    ... ...</pre>
    <p id="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"><a name="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a><a name="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a>For example, view parameters of the <strong id="b9514310661756"><a name="b9514310661756"></a><a name="b9514310661756"></a>CREATE DATABASE</strong> command:</p>
    <a name="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><a name="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c">openGauss=# \help CREATE DATABASE
    Command:     CREATE DATABASE
    Description: create a new database
    Syntax:
    CREATE DATABASE database_name
         [ [ WITH ] {[ OWNER [=] user_name ]|
               [ TEMPLATE [=] template ]|
               [ ENCODING [=] encoding ]|
               [ LC_COLLATE [=] lc_collate ]|
               [ LC_CTYPE [=] lc_ctype ]|
               [ DBCOMPATIBILITY [=] compatibility_type ]|
               [ TABLESPACE [=] tablespace_name ]|
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059778941_en-us_topic_0058968146_row37254344"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a>View the help information about <strong id="b25419237558"><a name="b25419237558"></a><a name="b25419237558"></a>gsql</strong> commands.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a>For example, view commands supported by <strong id="b842352706161543"><a name="b842352706161543"></a><a name="b842352706161543"></a>gsql</strong>.</p>
    <a name="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><a name="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143">openGauss=# \?
    General
      \copyright             show openGauss usage and distribution terms
      \g [FILE] or ;         execute query (and send results to file or |pipe)
      \h(\help) [NAME]              help on syntax of SQL commands, * for all commands
      \q                     quit gsql
    ... ...</pre>
    </td>
    </tr>
    </tbody>
    </table>


