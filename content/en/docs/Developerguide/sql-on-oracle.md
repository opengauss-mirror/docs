# SQL on Oracle<a name="EN-US_TOPIC_0311524278"></a>

## Overview<a name="section18645135181515"></a>

SQL on Oracle is a function of  [Extension Connector](sql-on-anywhere.md#section134436495103). This function enables the openGauss database instance to send SQL statements to an Oracle database \(called the target database\) for execution and obtain the execution result. The result can be used for join queries on local tables, or be recorded in local tables and file system.

## Supported Oracle Versions<a name="section114531718357"></a>

Oracle11.2.0.1 can be connected to Oracle12.2.0.1.

The Oracle ODBC driver version must be 12.2.0.1.0.

## Supported Oracle Data Types<a name="section4991316142711"></a>

[Table 1](#table11811516202811)  shows the conversion relationship between Oracle data types and openGauss data types.

**Table  1**  Mapping between data types in Oracle and openGauss

<a name="table11811516202811"></a>
<table><thead align="left"><tr id="row1318213167281"><th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.1"><p id="p3182141616285"><a name="p3182141616285"></a><a name="p3182141616285"></a>General Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="34%" id="mcps1.2.4.1.2"><p id="p1018261620289"><a name="p1018261620289"></a><a name="p1018261620289"></a>Oracle Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="p418211652820"><a name="p418211652820"></a><a name="p418211652820"></a>Local <span id="text8926172516306"><a name="text8926172516306"></a><a name="text8926172516306"></a>openGauss</span> Data Type</p>
</th>
</tr>
</thead>
<tbody><tr id="row11182141652815"><td class="cellrowborder" rowspan="7" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p17521842163212"><a name="p17521842163212"></a><a name="p17521842163212"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p1518218169284"><a name="p1518218169284"></a><a name="p1518218169284"></a>NUMBER(p,s), p&lt;=38, s&gt;=0</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1018219168285"><a name="p1018219168285"></a><a name="p1018219168285"></a>NUMERIC(p,s)</p>
</td>
</tr>
<tr id="row318212164289"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1818281611287"><a name="p1818281611287"></a><a name="p1818281611287"></a>NUMBER(p,s), p&lt;=38, s&lt;0</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1118231672812"><a name="p1118231672812"></a><a name="p1118231672812"></a>NUMERIC(p,0)</p>
</td>
</tr>
<tr id="row171822168283"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182916142811"><a name="p15182916142811"></a><a name="p15182916142811"></a>NUMBER(p,0), p&lt;=4</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p201821164289"><a name="p201821164289"></a><a name="p201821164289"></a>SMALLINT</p>
</td>
</tr>
<tr id="row51821816182819"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p8182191622817"><a name="p8182191622817"></a><a name="p8182191622817"></a>NUMBER(p,0), p&lt;=9</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p41825162287"><a name="p41825162287"></a><a name="p41825162287"></a>INTEGER</p>
</td>
</tr>
<tr id="row16182191614286"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182516132814"><a name="p15182516132814"></a><a name="p15182516132814"></a>NUMBER(p,0), p&lt;=18</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p418271602814"><a name="p418271602814"></a><a name="p418271602814"></a>BIGINT</p>
</td>
</tr>
<tr id="row17182171610288"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p8182121632814"><a name="p8182121632814"></a><a name="p8182121632814"></a>BINARY_FLOAT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p11182161622818"><a name="p11182161622818"></a><a name="p11182161622818"></a>FLOAT4</p>
</td>
</tr>
<tr id="row12182016132810"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182141632814"><a name="p15182141632814"></a><a name="p15182141632814"></a>BINARY_DOUBLE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1718271642820"><a name="p1718271642820"></a><a name="p1718271642820"></a>BINARY_DOUBLE</p>
</td>
</tr>
<tr id="row9182216102811"><td class="cellrowborder" rowspan="3" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p83456452331"><a name="p83456452331"></a><a name="p83456452331"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p9182116112817"><a name="p9182116112817"></a><a name="p9182116112817"></a>CHAR</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p390063820331"><a name="p390063820331"></a><a name="p390063820331"></a>TEXT</p>
</td>
</tr>
<tr id="row718241618285"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p51831516112814"><a name="p51831516112814"></a><a name="p51831516112814"></a>CHAR(n)</p>
</td>
</tr>
<tr id="row61832167288"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p131837163289"><a name="p131837163289"></a><a name="p131837163289"></a>VARCHAR2</p>
</td>
</tr>
<tr id="row518313166283"><td class="cellrowborder" rowspan="3" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p7731225840"><a name="p7731225840"></a><a name="p7731225840"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p19183201672817"><a name="p19183201672817"></a><a name="p19183201672817"></a>TIMESTAMP[(p)], p&lt;=6</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1918371652818"><a name="p1918371652818"></a><a name="p1918371652818"></a>TIMESTAMP</p>
</td>
</tr>
<tr id="row121832016172819"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1618371611286"><a name="p1618371611286"></a><a name="p1618371611286"></a>TIMESTAMP[(p)] WITH TIME ZONE, p&lt;=6</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p118341632817"><a name="p118341632817"></a><a name="p118341632817"></a>TIMESTAMP WITH TIME ZONE</p>
</td>
</tr>
<tr id="row1910011293418"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1110010273413"><a name="p1110010273413"></a><a name="p1110010273413"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p171000223416"><a name="p171000223416"></a><a name="p171000223416"></a>DATE</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   To receive a type of data returned by Oracle, specify its corresponding data type in the  **AS**  clause. If the returned type of Oracle is not listed in the table or its corresponding data type is not specified, the type conversion may generate an incorrect result or fail. For example, the Oracle data type  **NUMBER**  cannot be converted.
>-   Data to be returned by Oracle cannot contain NaN or Inf.
>-   For a string of the  **CHAR\(**_n_**\)**  type in Oracle, if its length is less than  _n_, it will be automatically padded with spaces. These spaces will be retained when the string is transferred to openGauss and converted to the  **TEXT**  type.
>-   If the encoding mode of openGauss is set to  **SQL\_ASCII**, the  **length\(\)**  function returns the number of bytes of the string rather than the actual number of characters. For example, run the following statement to query for the length of data returned by  **exec\_on\_extension**:
>    select c2,length\(c2\) from exec\_on\_extension\('oracle','select \* from a;'\) as \(c1 int, c2 text\);
>    The second column returned is the number of bytes of the string, rather than the number of characters.
>-   For the  **TIMESTAMP\[\(**_p_**\)\] WITH TIME ZONE**  data type, the time zone of the Oracle database must be the same as that of the local database. Otherwise, an error may occur.

## Interconnection Configuration<a name="section082131416315"></a>

SQL on Oracle uses the standard unixODBC-2.3.6 and Oracle ODBC-12.2 to connect to the Oracle database. Perform the following steps:

1.  <a name="li16860111962113"></a>Log in as the OS user  **omm**  to the primary node of the database.

    Perform steps 2 to 7 on the node. Do not switch to other nodes.

2.  <a name="li17974541057"></a>\(Optional\) Configure the data source key files.

    The key files are used to encrypt the sensitive fields  **username**  and  **password**  in the data source. If the files are not set, the system uses the  **server.key.cipher**  and  **server.key.rand**  key files in the  __$GAUSSHOME__**/bin**  directory by default.

    1.  Use  **gs\_guc**  to generate key files.

        ```
        gs_guc encrypt –M source –K user key string –D  key file storage directory
        ```

        -   The user key string must contain at least eight characters of three types.
        -   Key files  **datasource.key.cipher**  and  **datasource.key.rand**  are generated. The file name must be fixed and cannot be changed.
        -   The  **datasource.key.cipher**  and  **datasource.key.rand**  files must be placed to the  __$GAUSSHOME__**/bin**  directory on each node of the database instance.

    2.  Save the key files to  __$GAUSSHOME__**/bin**. Then, use the  **gs\_om ec**  tool to send the key files to other nodes of the database instance.

        ```
        gs_om -t ec -m install --key-files --force
        ```

        For details, see "Server Tools \> gs\_om" in  _Tool Reference_.


3.  Prepare the  **package.zip**  package. Install and configure it.
    1.  Download the following packages from the Oracle official website  [http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html](http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html)  and put the packages in the  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_  path. If the path does not exist, create it first.  _$DSN_  indicates a folder naming after the DSN. The DSN name must consist of letters, digits, and underscores \(\_\).
        -   oracle-instantclient-basic-linux.x64-12.2.0.1.0.zip
        -   oracle-instantclient-sqlplus-linux.x64-12.2.0.1.0.zip
        -   oracle-instantclient-odbc-linux.x64-12.2.0.1.0.zip

    2.  Compress the three Oracle packages to  **package.zip**.

        ```
        cd $GAUSSHOME/utilslib/fc_conf/$DSN
        zip -r package.zip oracle-instantclient-basic-linux.x64-12.2.0.1.0.zip oracle-instantclient-sqlplus-linux.x64-12.2.0.1.0.zip oracle-instantclient-odbc-linux.x64-12.2.0.1.0.zip
        ```


4.  Set the listening parameters of Oracle and start the listening process.

    Settings in the following steps are provided for reference.

    1.  Set the  **listener.ora**  file to add configurations to the listening list:

        ```
        cd $ORACLE_HOME/network/admin
        vim listener.ora
        ```

        Add the content similar to the following to the file. Skip this step if the content already exists.

        ```
        #Change the directory specified by ORACLE_HOME as needed.
        #ORCL indicates the name of the Oracle instance to be connected. Change it as needed.
        SID_LIST_LISTENER =
          (SID_LIST =
            (SID_DESC =
              (SID_NAME = ORCL)
              (ORACLE_HOME =/opt/oracle/db/product/11.1.0/db)
              (PROGRAM = extproc)
            )
            (SID_DESC =
              (SID_NAME = ORCL)
              (ORACLE_HOME =/opt/oracle/db/product/11.1.0/db)
            )
          )
        
        #HOST and PORT indicate the IP address and port number of Oracle, respectively. Set them as needed.
        
        LISTENER =
          (DESCRIPTION_LIST =
            (DESCRIPTION =
              (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
              (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
            )
          )
        
        #/opt/oracle/db indicates the installation directory of Oracle, not the value of ORACLE_HOME. Change it as needed.
        ADR_BASE_LISTENER = /opt/oracle/db
        ```

    2.  Run the following command to set the  **tnsnames.ora**  file to add a database instance:

        ```
        cd $ORACLE_HOME/network/admin
        vim tnsnames.ora
        ```

        Add the following database instance to the file. Skip this step if the instance already exists:

        ```
        #ORCL indicates the name of the Oracle instance to be connected. Change it as needed.
        #HOST and PORT indicate the IP address and port number of Oracle, respectively. Set them as needed.
        
        ORCL =
          (DESCRIPTION =
            (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
            (CONNECT_DATA =
              (SERVER = DEDICATED)
              (SERVICE_NAME = ORCL)
            )
          )
        ```

    3.  Check the listening status.

        Run the  **lsnrctl**  command. Use  **status**  to view the status,  **start**  to enable listening, and  **stop**  to stop listening. The following is an example of the listening status of the database instance  **ORCL**:

        ```
        lsnrctl
        LSNRCTL> status
        ...
        Listening Endpoints Summary...
          (DESCRIPTION=(ADDRESS=(PROTOCOL=ipc)(KEY=EXTPROC1521)))
          (DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=linux-ss3q)(PORT=1521)))
        Services Summary...
        Service "orcl" has 1 instance(s).
          Instance "orcl", status READY, has 1 handler(s) for this service...
        Service "orclXDB" has 1 instance(s).
          Instance "orcl", status READY, has 1 handler(s) for this service...
        The command completed successfully
        ```

        You can also enter the following information on the terminal:

        ```
        lsnrctl stop      #Stop listening
        lsnrctl start     #Start listening
        ```

    4.  \(Optional\) Configure a secure connection.

        The following steps take encrypting network data as an example. For details about configurations and other encryption methods, see Oracle documents by visiting the following website:

        [https://docs.oracle.com/cd/E11882\_01/network.112/e40393/asoconfg.htm\#ASOAG020](https://docs.oracle.com/cd/E11882_01/network.112/e40393/asoconfg.htm#ASOAG020)

        Perform the following steps to configure AES256:

        a. Configure the server \(Oracle database\).

        Modify the  **sqlnet.ora **configuration file.

        ```
        cd $ORACLE_HOME/network/admin
        vim sqlnet.ora
        ```

        If AES256 needs to be used, append the following content to the file. Skip this step if the content already exists.

        ```
        SQLNET.ENCRYPTION_SERVER=REQUIRED
        SQLNET.ENCRYPTION_TYPES_SERVER=(AES256)
        ```

        b. Configure the client \(local openGauss database instance\).

        Modify the  __$GAUSSHOME__**/utilslib/instantclient\_12\_2/network/admin/sqlnet.ora**  file as follows \(add the file first if it does not exist\):

        ```
        #NAMES.DIRECTORY_PATH specifies the parsing method.
        #ADR_BASE is the local home directory of Oracle, that is, the directory where ODBC is located.
        #The encryption method must be the same as that on the server. Here it is AES256.
        NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
        SQLNET.ENCRYPTION_CLIENT=REQUIRED
        SQLNET.ENCRYPTION_TYPES_CLIENT=(AES256)
        ADR_BASE = $GAUSSHOME/utilslib/instantclient_12_2  #Environment variables need to specify absolute paths.
        ```

        Modify the  __$GAUSSHOME__**/utilslib/instantclient\_12\_2/network/admin/tnsnames.ora**  file as follows \(add the file first if it does not exist\):

        ```
        #HOST and PORT indicate the IP address and port number of Oracle, respectively.
        #SERVICE_NAME=ORCL indicates the Oracle instance name.
        #Remote_ORCL indicates the instance name set by the user. Specify this name when encrypting the connection.
        Remote_ORCL =
          (DESCRIPTION =
            (ADDRESS_LIST=
                (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
            )
            (CONNECT_DATA =
              (SERVER = DEDICATED)
              (SERVICE_NAME = ORCL)
            )
          )
        ```

        If the two files are used for the first time, ensure that users in the database instance have the read and write permissions on them.

        ```
        cd $GAUSSHOME/utilslib/instantclient_12_2/
        chmod -R 700 network
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >For transmission security purposes, you are advised to configure this secure connection.


5.  <a name="li1722613520498"></a>Set the DSN configuration file.

    Go to the  _$GAUSSHOME_**/utilslib/fc\_conf/**_$DSN_  directory and create the  **DSN.ini**  file. Ensure that the file content is correct. An example is as follows. Replace  _$GAUSSHOME_  and  _$DSN_  with the actual paths.

    -   To configure a secure connection, add the following content \(Omit the number sign \[\#\] and the content following it.\): 

        ```
        [oracle]                               # DSN
        Driver=Oracle ODBC driver              #Oracle ODBC name
        Servername=Remote_ORCL                 #User-defined instance name
        Database=orcl                          #Name of the Oracle instance to be connected
        Port=XXXX                              #Oracle port number
        ```


    -   If a secure connection is not required, add the following content \(Omit the number sign \[\#\] and the content following it.\): 

        ```
        [oracle]                                # DSN
        Driver=Oracle ODBC driver               #Oracle ODBC name
        Servername=//XX.XX.XX.XX:XXXX/orcl      #// Oracle Host IP address: port number/instance name
        Database=orcl                          #Name of the Oracle instance to be connected
        Port=XXXX                               #Oracle port number
        ```

        When you create a data source, the value of  **dsn**  is  **oracle**  defined in the  **DNS.ini**  file.


6.  <a name="li18491441322"></a>Run the following command to perform automatic deployment.

    Before installation, ensure that users in the database instance have read and write permissions on the files to be distributed. Then run the following command:

    ```
    gs_om -t ec -m add -N DSN -U username --type=oracle
    gs_om -t ec -m add -N DSN -U username --type=oracle -L  #-L indicates the local mode.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the local mode is used, perform steps  [1](#li16860111962113)  to  [5](#li1722613520498)  on each node.

7.  Install unixODBC \(this step is required when Extension Connector is used and Chinese characters are used in the Oracle database\).

    You are advised to install unixODBC using the source code.

    The source code is available at http://www.unixodbc.org/ and https://sourceforge.net/projects/unixodbc/files/unixODBC/.

    The 2.3.6 version is recommended. You are advised to install and deploy unixODBC as follows:

    a. Download and decompress the package.

    ```
    tar -xzvf unixODBC-2.3.6.tar.gz
    cd unixODBC-2.3.6
    ```

    b. Run  **configure**  using the GNU Compiler Collection \(GCC\).

    Run the following command to configure unixODBC.  **prefix**  indicates the installation directory specified by the user. The following installation directory is temporary. You are advised to specify an empty directory.

    ```
    ./configure --enable-gui=no --prefix=/tmp/unixODBC-2.3.6 --enable-iconv=yes --with-iconv-char-enc=enc
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Replace  _enc_  in the compilation parameter  **--with-iconv-char-enc=**_enc_  with the character encoding format of the Oracle database.
    >-   The common Chinese character encoding formats of the Oracle database are AL32UTF8 and ZHS16GBK.
    >    -   If the Oracle encoding format is AL32UTF8, you are advised to set  **--with-iconv-char-enc**  to  **UTF8**.
    >    -   If the Oracle encoding format is ZHS16GBK, you are advised to set  **--with-iconv-char-enc**  to  **GB18030**.

    c. Perform compilation.

    ```
    make
    make install
    ```

    d. Copy unixODBC to the specified installation directory.

    ```
    cd /tmp/unixODBC-2.3.6
    rm -rf $GPHOME/unixodbc/*
    cp -r /tmp/unixODBC-2.3.6/* $GPHOME/unixodbc/
    ```

    e. Change the permission and owner of the files in  _$GPHOME_**/unixodbc/**.

    ```
    chmod -R 700 $GPHOME/unixodbc/*
    chown -R user:group $GPHOME/unixodbc/*
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Replace  _user_  and  _group_  in the command with the database instance installation user and owner, respectively.

    f. Set the unixODBC configuration file. For details, see  [4](configuring-a-data-source-in-the-linux-os.md#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_l2322ca6025324e47bcaac1859155e566). Replace  **/usr/local/etc/**  with  _$GPHOME_**/unixodbc/etc/**.

    g. Set environment variables. For details, see  [7](configuring-a-data-source-in-the-linux-os.md#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_l4c0173b8af93447e91aba24005e368e5).

    Modify the environmental variable  _NLS\_LANG_  in the  _$GAUSSHOME_**/utilslib/env\_ec**  file. If the variable does not exist in the file, add it.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You can log in to the Oracle database and run the following statement to query for the value of  _NLS\_LANG_:
    >```
    >SELECT userenv('language') FROM sys_dummy;
    >```

    h. Copy the unixODBC file in step d to the  _$GPHOME_**/unixodbc/**  directory of other data nodes in the database instance. Then perform steps e and f.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For a heterogeneous-OS database instance, group nodes by OS and compile unixODBC for each group separately \(perform steps b to g\).

8.  Run the following command to restart the database instance and stop the  **om\_monitor**  process so that the openGauss process can detect the environment variable change:

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L indicates the local mode.
    gs_om -t stop && gs_om -t start         #Run this command only in local mode.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the local mode is used, perform steps  [1](#li16860111962113)  to  [6](#li18491441322)  on each node.
    >-   In local mode, the database instance does not automatically start and stop. Therefore, you need to manually start and stop the database instance.

9.  Create a data source.

    Perform the following steps:

    1.  Perform the steps in  [Connecting to a Database](en-us_topic_0289900104.md).
    2.  Create a data source.

        ```
        postgres=# CREATE DATA SOURCE ds_oracle TYPE 'ORACLE' OPTIONS (DSN 'oracle', USERNAME 'oracle_user', PASSWORD 'oracle_pwd', ENCODING 'UTF8');
        ```

        The  **DSN**  field for  **OPTIONS**  indicates the DSN of the Oracle database \(the Oracle database connected in the previous step\) in  **odbc.ini**. The  **USERNAME**  and  **PASSWORD**  fields indicate the username and password of the  **ORCL**  instance \(the database specified in  **odbc.ini**\) in the Oracle database, respectively. The  **ENCODING**  field indicates the encoding mode of Oracle character sets.

        To set  **PASSWORD**  in  **ds\_oracle**  to  **new\_pwd**, run the following command:

        ```
        postgres=# ALTER DATA SOURCE ds_oracle OPTIONS (SET PASSWORD 'new_pwd');
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   No matter whether you have performed operations in  [\(Optional\) Configure the data source key files.](#li17974541057), the Oracle username and password provided when you create and modify the data source will be encrypted and then stored in the system catalog  **pg\_extension\_data\_source**  in the openGauss database instance.
        >-   If the character set of the Oracle database is Chinese, ensure that the values of  **ENCODING**  in the data source,  _NLS\_LANG_  in  _$GAUSSHOME_**/utilslib/env\_ec**, and encoding format specified by the unixODBC compilation parameter  **--with-iconv-char-enc**  are consistent.
        >-   If the character set of the Oracle database is Chinese, it is recommended that the character encoding format of the local database be consistent with that of the remote Oracle database to prevent job execution failures caused by incompatible character sets.
        >-   After a data source is created, the key files cannot be modified. Otherwise, the data source cannot be used.
        >-   Ensure that the content in  **package.zip**  is complete and that the content in the  **DSN.ini**  file is correct. Do not modify them after the installation and deployment are complete. Otherwise, the environment probably cannot be used.
        >-   The created data source must be the same as that configured in the  **odbc.ini**  file. Otherwise, the data source cannot be found.


10. Connect to the Oracle database.

    After the preceding configuration is complete, if the database instance is normal, you can connect to the openGauss database and perform SQL operations on the Oracle database. For example, to query a table  **a\(c1 number \(9,0\)\)**  in Oracle, run the following command:

    ```
    postgres=# SELECT * FROM exec_on_extension('ds_oracle', 'select * from a;') AS (c1 int);
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Before using  **exec\_on\_extension**, you need to create a data source.
    >-   If the sent SQL statement fails to be executed in Oracle, the connection function  **exec\_on\_extension**  will also fail to be executed.


## Precautions<a name="section1545872813814"></a>

1.  For details about the usage restrictions on the  __$GAUSSHOME__**/utilslib**  directory and the  **env\_ec**  file, see "Server Tools \> gs\_om" in  _Tool Reference_.
2.  Users in the database must have the read and write permissions for the  __$GAUSSHOME__**/utilslib**  directory, its content, and the  __$GAUSSHOME__**/bin/datasource.key.\***  file. You are advised to check user permissions every time before you use  **gs\_om ec**, preventing upgrade and scale-out failures.
3.  The relative position where  **gs\_om ec**  deploys Extension Connector \(excluding data source key files\) is  __$GAUSSHOME__**/utilslib/fc\_conf/**_$DSN_, which is irrelevant to the current location. No matter in which path you run the command, the tool will be installed in the  _$DSN_  directory in  _$GAUSSHOME_**/utilslib/fc\_conf**.

    ```
    gs_om -t ec -m add -N DSN -U username --type=oracle
    ```

4.  After a database administrator creates a data source \(corresponding to a DSN\) and grants its use permissions to a user, the user can use  **exec\_on\_extension**  to access the remote database corresponding to the DSN defined in the  **odbc.ini**  file.

## Examples<a name="section14228115924218"></a>

```
-- Create a data source. username and password indicate the username and password used for connecting to the Oracle database.
postgres=# CREATE DATA SOURCE oracle VERSION '11g' OPTIONS (dsn 'oracle', username 'user_ora', password 'pwd_ora', encoding 'utf8');


-- Create a remote table, insert data, and query data.
postgres=# SELECT * FROM exec_on_extension('oracle', 'create table a (c1 int);') AS (c1 text);
 c1 
----
(0 rows)
postgres=# SELECT * FROM exec_on_extension('oracle', 'insert into a values (119);') AS (c1 text);
 c1 
----
(0 rows)
postgres=# SELECT * FROM exec_on_extension('oracle', 'insert into a select * from a;') AS (c1 text);
 c1 
----
(0 rows)
postgres=# SELECT * FROM exec_on_extension('oracle', 'select * from a;') AS (c1 int);
 c1  
-----
 119
 119
(2 rows)
postgres=# SELECT * FROM exec_on_extension('oracle', 'select * from a a1 inner join a a2 on a1.c1=a2.c1;') AS (c1 int, c2 int);
 c1  | c2  
-----+-----
 119 | 119
 119 | 119
 119 | 119
 119 | 119
(4 rows)

-- Save the query result to the local table.
postgres=# CREATE TABLE b AS SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
INSERT 0 1
postgres=# INSERT INTO b SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
INSERT 0 1

-- Associate the query result with the local table:
postgres=# SELECT * FROM b INNER JOIN (SELECT * FROM exec_on_extension('oracle', 'select * from a;') AS (c1 int)) a ON a.c1=b.c1;
 c1  | c2  
-----+-----
 119 | 119
 119 | 119
 119 | 119
 119 | 119
(4 rows)

-- Let other users use the data source.
postgres=# CREATE USER tmp_usr IDENTIFIED BY 'Gs@123456';

postgres=# GRANT USAGE ON DATA SOURCE oracle TO tmp_usr;

postgres=# \c - tmp_usr
postgres=#  SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
 c1  
-----
 119
(1 row)

-- Delete the data source, table, and user.
postgres=# \c - omm
postgres=# SELECT * FROM exec_on_extension('oracle', 'drop table a;') AS (c1 text);
 c1 
----
(0 rows)
postgres=# DROP DATA SOURCE oracle;

postgres=# DROP TABLE b;

postgres=# DROP USER tmp_usr;
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
<p id="p1850175311544"><a name="p1850175311544"></a><a name="p1850175311544"></a></p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p185711536541"><a name="p185711536541"></a><a name="p185711536541"></a>View automatic deployment logs and rectify the fault based on the error information in the logs. Then perform the deployment again.</p>
<p id="p53344586316"><a name="p53344586316"></a><a name="p53344586316"></a>The log path is as follows:</p>
<a name="ul279530153212"></a><a name="ul279530153212"></a><ul id="ul279530153212"><li>The default path is <em id="i179603333215"><a name="i179603333215"></a><a name="i179603333215"></a>$GAUSSLOG</em><strong id="b1025853203217"><a name="b1025853203217"></a><a name="b1025853203217"></a>/om</strong>.</li><li>If the <strong id="b525869184"><a name="b525869184"></a><a name="b525869184"></a>gs_om</strong> tool is used for automatic deployment and <strong id="b325815911814"><a name="b325815911814"></a><a name="b325815911814"></a>-l</strong> is specified, logs are stored in the specified directory.</li></ul>
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
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1113919539542"><a name="p1113919539542"></a><a name="p1113919539542"></a>Check the LirbA data types supported by Extension Connector. For details, see <a href="#table11811516202811">Table 1</a>.</p>
</td>
</tr>
<tr id="row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p28487245319"><a name="p28487245319"></a><a name="p28487245319"></a>Execution error</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p1021071214476"><a name="p1021071214476"></a><a name="p1021071214476"></a>ERROR:  dn_6033_6034: DSN:oracle,Fail to exec SQL with the ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="p1984862418311"><a name="p1984862418311"></a><a name="p1984862418311"></a>DETAIL:  [Oracle][ODBC][Ora]ORA-00942: table or view does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p20848152453111"><a name="p20848152453111"></a><a name="p20848152453111"></a>If a table or view definition does not exist in the SQL statement to be executed, an error is reported. Extension Connector returns Oracle database errors. If other syntax errors occur during SQL statement execution in the Oracle database, Extension Connector also reruns errors.</p>
</td>
</tr>
</tbody>
</table>

## Related Links<a name="section187221926368"></a>

[CREATE DATA SOURCE](en-us_topic_0289900178.md),  [SQL on Spark](sql-on-spark.md),  [SQL on openGauss](sql-on-opengauss.md), and "Server Tools \> gs\_om" in the  _Tool Reference_.

