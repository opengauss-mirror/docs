# Data Processing Based on Extension Connector<a name="EN-US_TOPIC_0311524282"></a>

## Function<a name="section340011111459"></a>

SQL on openGauss is one of the functions of  [Extension Connector](sql-on-anywhere.md#section134436495103). It allows an openGauss database instance to send SQL statements to another openGauss database instance for execution and obtain the execution result. The execution result can be used in the associated query of the local table or imported to the local table or local file system.

## Supported openGauss Data Types<a name="section15300155741218"></a>

Currently, SQL on openGauss supports only the following data types.

**Table  1**  Data types supported by SQL on openGauss

<a name="table73951538161411"></a>
<table><thead align="left"><tr id="row3395938181417"><th class="cellrowborder" valign="top" width="23.072307230723073%" id="mcps1.2.4.1.1"><p id="p439623814146"><a name="p439623814146"></a><a name="p439623814146"></a>General Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="37.72377237723772%" id="mcps1.2.4.1.2"><p id="p143961438151419"><a name="p143961438151419"></a><a name="p143961438151419"></a>Target Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="39.2039203920392%" id="mcps1.2.4.1.3"><p id="p1639618384142"><a name="p1639618384142"></a><a name="p1639618384142"></a>Local Data Type</p>
</th>
</tr>
</thead>
<tbody><tr id="row9396123861416"><td class="cellrowborder" rowspan="7" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p175424221810"><a name="p175424221810"></a><a name="p175424221810"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p173961338111411"><a name="p173961338111411"></a><a name="p173961338111411"></a>TINYINT</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p4266166192418"><a name="p4266166192418"></a><a name="p4266166192418"></a>TINYINT</p>
</td>
</tr>
<tr id="row739663816148"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p187104105249"><a name="p187104105249"></a><a name="p187104105249"></a>SMALLINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p12714710132411"><a name="p12714710132411"></a><a name="p12714710132411"></a>SMALLINT</p>
</td>
</tr>
<tr id="row1396438111420"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p739613381147"><a name="p739613381147"></a><a name="p739613381147"></a>INTEGER</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p107581414142410"><a name="p107581414142410"></a><a name="p107581414142410"></a>INTEGER</p>
</td>
</tr>
<tr id="row53961238151417"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p839673861417"><a name="p839673861417"></a><a name="p839673861417"></a>BIGINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1416231910245"><a name="p1416231910245"></a><a name="p1416231910245"></a>BIGINT</p>
</td>
</tr>
<tr id="row1839610381143"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15396738161413"><a name="p15396738161413"></a><a name="p15396738161413"></a>FLOAT4</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p23432024182420"><a name="p23432024182420"></a><a name="p23432024182420"></a>FLOAT4</p>
</td>
</tr>
<tr id="row03961386141"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7396153811148"><a name="p7396153811148"></a><a name="p7396153811148"></a>FLOAT8</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p79534286240"><a name="p79534286240"></a><a name="p79534286240"></a>FLOAT8</p>
</td>
</tr>
<tr id="row18396133871416"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13961538201419"><a name="p13961538201419"></a><a name="p13961538201419"></a>NUMERIC(p,s)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p5385113552419"><a name="p5385113552419"></a><a name="p5385113552419"></a>NUMERIC(p,s)</p>
</td>
</tr>
<tr id="row178151839131711"><td class="cellrowborder" rowspan="6" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p18409174411209"><a name="p18409174411209"></a><a name="p18409174411209"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p38168392170"><a name="p38168392170"></a><a name="p38168392170"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p4816143931711"><a name="p4816143931711"></a><a name="p4816143931711"></a>CHAR/TEXT</p>
</td>
</tr>
<tr id="row2501124161814"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1950115461813"><a name="p1950115461813"></a><a name="p1950115461813"></a>NCHAR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p950116413189"><a name="p950116413189"></a><a name="p950116413189"></a>NCHAR/TEXT</p>
</td>
</tr>
<tr id="row55017491811"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17501114191816"><a name="p17501114191816"></a><a name="p17501114191816"></a>VARCHAR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p55011743180"><a name="p55011743180"></a><a name="p55011743180"></a>VARCHAR/TEXT</p>
</td>
</tr>
<tr id="row114987129187"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p249814128183"><a name="p249814128183"></a><a name="p249814128183"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1498101220181"><a name="p1498101220181"></a><a name="p1498101220181"></a>VARCHAR2/TEXT</p>
</td>
</tr>
<tr id="row54980121183"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p10498151219186"><a name="p10498151219186"></a><a name="p10498151219186"></a>NVARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p549821213181"><a name="p549821213181"></a><a name="p549821213181"></a>NVARCHAR2/TEXT</p>
</td>
</tr>
<tr id="row1549861221810"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2498712131811"><a name="p2498712131811"></a><a name="p2498712131811"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p114981212131819"><a name="p114981212131819"></a><a name="p114981212131819"></a>TEXT</p>
</td>
</tr>
<tr id="row84988128189"><td class="cellrowborder" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p749819120181"><a name="p749819120181"></a><a name="p749819120181"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p12498151211816"><a name="p12498151211816"></a><a name="p12498151211816"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p8498171211183"><a name="p8498171211183"></a><a name="p8498171211183"></a>BOOLEAN</p>
</td>
</tr>
<tr id="row352631852016"><td class="cellrowborder" rowspan="4" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p65021121132220"><a name="p65021121132220"></a><a name="p65021121132220"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p3526318192015"><a name="p3526318192015"></a><a name="p3526318192015"></a>TIMESTAMP[(p)]</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p5663631122216"><a name="p5663631122216"></a><a name="p5663631122216"></a>TIMESTAMP[(p)]</p>
</td>
</tr>
<tr id="row35267181206"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16138143314226"><a name="p16138143314226"></a><a name="p16138143314226"></a>TIMESTAMP[(p)] WITH TIME ZONE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p9526181822016"><a name="p9526181822016"></a><a name="p9526181822016"></a>TIMESTAMP[(p)] WITH TIME ZONE</p>
</td>
</tr>
<tr id="row1452616182202"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p10526111882010"><a name="p10526111882010"></a><a name="p10526111882010"></a>INTERVAL[FIELDS]</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1443813217238"><a name="p1443813217238"></a><a name="p1443813217238"></a>INTERVAL[FIELDS]</p>
</td>
</tr>
<tr id="row952620181201"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p18526191812202"><a name="p18526191812202"></a><a name="p18526191812202"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p10526181862013"><a name="p10526181862013"></a><a name="p10526181862013"></a>DATE</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>- To receive a type of data returned by openGauss, specify its corresponding data type in the  **AS**  clause. If the returned type of openGauss is not listed in the table or its corresponding data type is not specified, the type conversion may generate an incorrect result or fail. For example,  **VARCHAR \(10\)**  returned by openGauss needs to be received using  **VARCHAR\(**_n_**\)**  \(_n_\>=10\) or  **TEXT**.
>
>-   If the encoding mode of openGauss is set to  **SQL\_ASCII**, the  **length\(\)**  function returns the number of bytes of the string rather than the actual number of characters. For example, run the following statement to query for the length of data returned by  **exec\_on\_extension**:  
>   `select c2,length(c2) from exec_on_extension('libra','select * from a;') as (c1 int, c2 text);`  
>  The second column returned is the number of bytes of the string, rather than the number of characters.
>  
>- For a string of the  **CHAR\(**_n_**\)**  type in openGauss, if its length is less than  _n_, it will be automatically padded with spaces. These spaces will be retained when the string is transferred to openGauss and converted to the  **TEXT**  type.
>
>-   For the  **TIMESTAMP\[\(**_p_**\)\] WITH TIME ZONE**  data type, the time zone of the remote database must be the same as that of the local database. Otherwise, an error may occur.

## Interconnection Configuration<a name="section1179315795514"></a>

SQL on openGauss requires unixODBC-2.3.4 and openGauss ODBC, and openGauss ODBC requires the support of the unixODBC-2.3.0 library. The configuration procedure is similar to that for SQL on Oracle.

1.  <a name="li16860111962113"></a>Log in as the OS user  **omm**  to the primary node of the database.

    Perform steps  [2](#li17974541057)  to  [7](#li119541014192319)  on the node and do not switch to another node in this process.

2.  <a name="li17974541057"></a>\(Optional\) Configure the data source key files.

    The key files are used to encrypt the sensitive fields  **username**  and  **password**  in the data source. If the files are not set, the system uses the  **server.key.cipher**  and  **server.key.rand**  key files in the  __$GAUSSHOME__**/bin**  directory by default.

    1.  Use  **gs\_guc**  to generate key files.

        ```
        gs_guc encrypt –M source –K user key string –D  key file storage directory
        ```

        -   The user key string must contain at least eight characters of three types.
        -   Key files  **datasource.key.cipher**  and  **datasource.key.rand**  are generated. The file name cannot be changed.
        -   The  **datasource.key.cipher**  and  **datasource.key.rand**  files must be placed to the  __$GAUSSHOME__**/bin**  directory on each node of the database instance.

    2.  Save the key files to  __$GAUSSHOME__**/bin**. Then, use the  **gs\_om ec**  tool to send the key files to other nodes of the database instance.

        ```
        gs_om -t ec -m install --key-files --force
        ```

        For details, see "Server Tools \> gs\_om" in  _Tool Reference_.


3.  Prepare  **package.zip**  and put it in  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_. If the path does not exist, create it first.  _$DSN_  indicates a folder naming after the DSN. The DSN name must consist of letters, digits, and underscores \(\_\). The package contains the following files:

    ```
    openGauss-*.*.0-ODBC.tar.gz
    ```

    The package can be obtained by decompressing the installation package. Run the following command to compress it into  **package.zip**:

    ```
    zip -r package.zip openGauss-*.*.0-ODBC.tar.gz
    ```

4.  Configure \(remote\) openGauss database instance listening parameters.
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Set the listening IP address of the remote database instance \(skip this step if you set the listening IP address by running the  **remoteip**  command\).

        Add the IP addresses or host names \(separated by commas\) of the NICs providing external services to the listening list on the DN receiving remote services \(assume that the host name is  **Linux-235**  and the IP address is  **10.11.12.16**\). Generally, the IP addresses are local. If they already exist in the list, you do not need to set them again. Run the following command:

        ```
        gs_guc reload -Z datanode -N Linux-235 -I all -c "listen_addresses='localhost,10.11.12.16'"
        ```

        For details, see  [Configuring a Data Source in the Linux OS](configuring-a-data-source-in-the-linux-os.md)  in  [7](configuring-a-data-source-in-the-linux-os.md#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_l4c0173b8af93447e91aba24005e368e5).

    3.  Set the authentication mode on the DN of the remote database instance.

        Assume that IP addresses of nodes of the local openGauss database instance are  **10.11.12.13**,  **10.11.12.14**, and  **10.11.12.15**. To set the SHA-256 connection authentication mode, perform the following operations on the remote openGauss database instance:

        ```
        gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.13/32 sha256"
        gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.14/32 sha256"
        gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.15/32 sha256"
        ```

        If the local openGauss database instance has multiple nodes and the IP addresses of the nodes are consecutive and in the same network segment, you can set the IP addresses in batches. For example:

        ```
        #Allow accesses from hosts with the IP address 10.11.12.x:
        gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.0/24 sha256"
        #Allow accesses from hosts with the IP address 10.11.x.x:
        gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.0.0/16 sha256"
        ```

        If there are many nodes in the local openGauss database and their IP addresses are inconsecutive or in different network segments, you can specify the IP addresses using the remoteIP function of Extension Connector with each IP address occupying a line. \(Save the IP addresses to a text file that you have the read permission, for example,  **/opt/host/hostfile**. The file path and name can be customized.\) Then run the following command:

        ```
        gs_om -t ec -m add -N /opt/host/hostfile -U username --type=remoteip
        gs_om -t ec -m add -N /opt/host/hostfile -U username --type=remoteip -L  #-L indicates the local mode. You need to perform this step on every node.
        ```

    4.  Restart the remote database instance \(skip this step if you set the IP address by running the  **remoteip**  command\).

        ```
        gs_om -t stop
        gs_om -t start
        ```


5.  <a name="li116928192517"></a>Set the  **DSN.ini**  configuration file.

    Generate the  **DSN.ini**  file in  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_. Ensure that the file content and format are correct. For example:

    ```
    [libra]                              # DSN
    Driver=mppdbDriver                   #Driver name
    Description=Sample PostgreSQL DSN    #Optional description
    Servername=XX.XX.XX.XX               # IP address of the DN of the remote openGauss database instance to be connected
    Database=postgres                    # Database name of the remote openGauss database instance to be connected
    Port=XXXX                            # DN port number of the remote openGauss database instance to be connected
    Sslmode=allow                        #Enable the SSL mode.
    Fetch=10000                          #Amount of data fetched from the remote server each time the server cursor is used. The default value is 100. Adjust the value based on your memory usage and query result.
    ```

6.  <a name="li748683312357"></a>Deploy Extension Connector.

    ```
    gs_om -t ec -m add -N DSN -U username --type=native
    gs_om -t ec -m add -N DSN -U username --type=native -L  #-L indicates the local mode.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the local mode is used, perform steps  [1](#li16860111962113)  to  [5](#li116928192517)  on each node.

7.  <a name="li119541014192319"></a>Run the  **restart**  command of the Extension Connector to restart the database instance and stop the  **om\_monitor**  process so that the openGauss process can detect the change of environment variables.

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L indicates the local mode.
    gs_om -t stop && gs_om -t start         #Run this command only in local mode.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the local mode is used, perform steps  [1](#li16860111962113)  to  [6](#li748683312357)  on each node.
    >-   In local mode, the database instance does not need to be started or stopped. Therefore, you need to manually run the command for starting or stopping the database instance.

8.  Create a data source.

    Connect to a database \(see  [Connecting to a Database](en-us_topic_0289900104.md)\) and create a data source. For example, to create the  **ds\_libra**  data source corresponding to the remote openGauss database instance, run the following command:

    ```
    postgres=# CREATE DATA SOURCE ds_libra type 'MPPDB' OPTIONS (DSN 'libra', USERNAME 'libra_user', PASSWORD 'libra_pwd', ENCODING 'UTF8');
    ```

    The field meanings and modification methods are similar to those in  [9](sql-on-oracle.md#li18691619432)  in "SQL on Oracle".

9.  Connect to the remote openGauss database instance.

    Assume that the  **ds\_libra**  data source has been created. Use  **exec\_on\_extension**  to connect to the remote openGauss database to query the table  **a \(c1 int\)**:

    ```
    postgres=# SELECT * FROM exec_on_extension('ds_libra', 'select * from a;') AS (c1 int);
    ```


## Precautions<a name="section137152213124"></a>

1.  For details about the usage restrictions on the  __$GAUSSHOME__**/utilslib**  directory and the  **env\_ec**  file, see "Server Tools \> gs\_om" in  _Tool Reference_.
2.  Users in the database must have the read and write permissions for the  __$GAUSSHOME__**/utilslib**  directory, its content, and the  __$GAUSSHOME__**/bin/datasource.key.\***  file. You are advised to check user permissions every time before you use  **gs\_om ec**, preventing upgrade and scale-out failures.
3.  Ensure that the content in  **package.zip**  is complete and that the content in the  **DSN.ini**  file is correct. Do not modify them after the installation and deployment are complete. Otherwise, the environment probably cannot be used.
4.  After a database administrator creates a data source \(corresponding to a DSN in the  **odbc.ini**  file\) and grants its use permissions to a user, the user can use  **exec\_on\_extension**  to access the remote database corresponding to the DSN defined in the  **odbc.ini**  file.
5.  The memory of remote DNs is used under the current memory restriction. When a large amount of data is queried, the memory of the remote database instance may be insufficient. As a result, the remote database instance cannot be operated.
6.  During data migration, you need to specify the table structure by using the  **AS**  clause. For example, to migrate data from the  **a \(c1 int\)**  table in the remote openGauss database instance to the local  **b \(c1 int\)**  table, run the following statement:

    ```
    postgres=# CREATE TABLE b AS SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    INSERT 0 1
    ```

7.  omm users cannot establish remote connections.

## Examples<a name="section1699112111585"></a>

```
-- Create a data source.
postgres=# CREATE DATA SOURCE librA OPTIONS (dsn 'odbc_librA', username 'mppcom', password 'Gs@123456');


-- Create a remote table and insert data.
postgres=# SELECT * FROM exec_on_extension('librA', 'create table a (c1 int);') AS (c1 text);
 c1 
----
(0 rows)
postgres=# SELECT * FROM exec_on_extension('librA', 'insert into a values (911);') AS (c1 text);
 c1 
----
(0 rows)
-- View the execution plan. If the plan is displayed in multiple columns in the destination database, the result should contain the same number of columns.
-- Set explain_perf_mode to normal for the remote openGauss database instance.
postgres=# SELECT * FROM exec_on_extension('librA', 'explain select * from a;') AS (c1 text);
                    QUERY PLAN                    
--------------------------------------------------
 Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
   Node/s: All datanodes
(2 rows)
postgres=# SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
 c1  
-----
 911
(1 row)
-- The sent SQL statement returns two columns, but exec_on_extension returns only one column. Match the column on the left first.
postgres=# SELECT * FROM exec_on_extension('librA', 'select * from a a1 inner join a a2 on a1.c1=a2.c1;') AS (c1 int);
 c1  
-----
 911
 911
(2 rows)

-- Associate with the local table.
postgres=# CREATE TABLE b AS SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
INSERT 0 1
postgres=# INSERT INTO b SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
INSERT 0 1
postgres=# SELECT * FROM b WHERE b.c1 in (SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int));
 c1  
-----
 911
 911
(2 rows)

-- Let other users use the data source.
postgres=# CREATE USER tmp_usr IDENTIFIED BY 'Gs@123456';

postgres=# GRANT USAGE ON DATA SOURCE librA TO tmp_usr;

postgres=# \c - tmp_usr
postgres=> SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
 c1  
-----
 911
(1 row)

-- Delete the data source, table, and user.
postgres=>\c - omm
postgres=# SELECT * FROM exec_on_extension('librA', 'drop table a;') AS (c1 text);
 c1 
----
(0 rows)
postgres=# DROP DATA SOURCE librA;

postgres=# DROP TABLE b;

postgres=# DROP USER tmp_usr;
```



## Troubleshooting<a name="section884931314334"></a>

For details about common issues that occur while Extension Connector interconnects with openGauss, see  [Table 2](#en-us_topic_0085032368_table1097865225410).

**Table  2**  Common troubleshooting for interconnection between Extension Connector and openGauss

<a name="en-us_topic_0085032368_table1097865225410"></a>
<table><thead align="left"><tr id="en-us_topic_0085032368_row771153155415"><th class="cellrowborder" valign="top" width="16.669999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0085032368_p8131653175411"><a name="en-us_topic_0085032368_p8131653175411"></a><a name="en-us_topic_0085032368_p8131653175411"></a>Error Type</p>
</th>
<th class="cellrowborder" valign="top" width="36.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0085032368_p10191753165413"><a name="en-us_topic_0085032368_p10191753165413"></a><a name="en-us_topic_0085032368_p10191753165413"></a>Error Information</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="en-us_topic_0085032368_p14258538548"><a name="en-us_topic_0085032368_p14258538548"></a><a name="en-us_topic_0085032368_p14258538548"></a>Troubleshooting</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0085032368_row19311353195413"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085032368_p1143753105414"><a name="en-us_topic_0085032368_p1143753105414"></a><a name="en-us_topic_0085032368_p1143753105414"></a>Deployment error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085032368_p10496115724915"><a name="en-us_topic_0085032368_p10496115724915"></a><a name="en-us_topic_0085032368_p10496115724915"></a>[GAUSS-50201] : The $GAUSSHOME/utilslib/fc_conf/ora/ does not exist.</p>
<p id="en-us_topic_0085032368_p1850175311544"><a name="en-us_topic_0085032368_p1850175311544"></a><a name="en-us_topic_0085032368_p1850175311544"></a></p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085032368_p185711536541"><a name="en-us_topic_0085032368_p185711536541"></a><a name="en-us_topic_0085032368_p185711536541"></a>View automatic deployment logs and rectify the fault based on the error information in the logs. Then perform the deployment again.</p>
<p id="en-us_topic_0085032368_p53344586316"><a name="en-us_topic_0085032368_p53344586316"></a><a name="en-us_topic_0085032368_p53344586316"></a>The log path is as follows:</p>
<a name="en-us_topic_0085032368_ul279530153212"></a><a name="en-us_topic_0085032368_ul279530153212"></a><ul id="en-us_topic_0085032368_ul279530153212"><li>The default path is <em id="i105172209118"><a name="i105172209118"></a><a name="i105172209118"></a>$GAUSSLOG</em><strong id="b351713206112"><a name="b351713206112"></a><a name="b351713206112"></a>/om</strong>.</li><li>If the <strong id="b975511221819"><a name="b975511221819"></a><a name="b975511221819"></a>gs_om</strong> tool is used for automatic deployment and <strong id="b147568221117"><a name="b147568221117"></a><a name="b147568221117"></a>-l</strong> is specified, logs are stored in the specified directory.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0085032368_row6837532545"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085032368_p209155315542"><a name="en-us_topic_0085032368_p209155315542"></a><a name="en-us_topic_0085032368_p209155315542"></a>Connection error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085032368_p14100953175412"><a name="en-us_topic_0085032368_p14100953175412"></a><a name="en-us_topic_0085032368_p14100953175412"></a>ERROR:  source "spark_ds" does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085032368_p18105175313544"><a name="en-us_topic_0085032368_p18105175313544"></a><a name="en-us_topic_0085032368_p18105175313544"></a>Create a data source. For details, see <a href="en-us_topic_0289900178.md">CREATE DATA SOURCE</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0085032368_row1611213537544"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085032368_p912145375413"><a name="en-us_topic_0085032368_p912145375413"></a><a name="en-us_topic_0085032368_p912145375413"></a>Execution error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085032368_p19131125365411"><a name="en-us_topic_0085032368_p19131125365411"></a><a name="en-us_topic_0085032368_p19131125365411"></a>ERROR:  invalid input syntax for integer</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085032368_p1113919539542"><a name="en-us_topic_0085032368_p1113919539542"></a><a name="en-us_topic_0085032368_p1113919539542"></a>Check the LirbA data types supported by Extension Connector. For details, see <a href="sql-on-oracle.md#table11811516202811">Table 1</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0085032368_row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085032368_p28487245319"><a name="en-us_topic_0085032368_p28487245319"></a><a name="en-us_topic_0085032368_p28487245319"></a>Execution error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085032368_p1021071214476"><a name="en-us_topic_0085032368_p1021071214476"></a><a name="en-us_topic_0085032368_p1021071214476"></a>ERROR:  dn_6033_6034: DSN:oracle,Fail to exec SQL with the ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="en-us_topic_0085032368_p1984862418311"><a name="en-us_topic_0085032368_p1984862418311"></a><a name="en-us_topic_0085032368_p1984862418311"></a>DETAIL:  [Oracle][ODBC][Ora]ORA-00942: table or view does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085032368_p20848152453111"><a name="en-us_topic_0085032368_p20848152453111"></a><a name="en-us_topic_0085032368_p20848152453111"></a>If a table or view definition does not exist in the SQL statement to be executed, an error is reported. Extension Connector returns Oracle database errors. If other syntax errors occur during SQL statement execution in the Oracle database, Extension Connector also reruns errors.</p>
</td>
</tr>
</tbody>
</table>

## Helpful Links<a name="section2388125415014"></a>

[CREATE DATA SOURCE](en-us_topic_0289900178.md),  [CREATE DATA SOURCE](en-us_topic_0289900178.md),  [SQL on Oracle](sql-on-oracle.md), and "Server Tools \> gs\_om" in the  _Tool Reference_.

