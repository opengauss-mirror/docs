# Using gsql to Connect to a Database<a name="EN-US_TOPIC_0289900019"></a>

gsql is an openGauss-provided database connection tool running in the CLI. **gsql** provides basic and advanced functions of databases to facilitate user operations. This section describes how to use **gsql** to connect to a database. For details about how to use **gsql**, see "Client Tools \> gsql" in *Tool Reference*.

## Precautions<a name="en-us_topic_0283137029_en-us_topic_0237120292_en-us_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>

By default, if a client is in idle state after connecting to a database, the client automatically disconnects from the database in the duration specified by **[session\_timeout](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a)**. To disable the timeout setting, set **[session\_timeout](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a)** to **0**.

## Prerequisites<a name="en-us_topic_0283137029_en-us_topic_0237120292_en-us_topic_0062050379_section2863008216400"></a>

You have **[confirmed connection information](confirming-connection-information.md)**.

## Connecting to a Database Locally

1. Log in as the OS user **omm** to the primary node of the database.

2. Connect to a database.

   After the database is installed, a database named **postgres** is generated by default. When connecting to a database for the first time, you can connect to this database.

   Run the following command to connect to the database:

   ```
   gsql -d postgres -p 8000
   ```

   **postgres** is the name of the database to be connected, and **8000** is the port number of the primary database node. Replace the values as required. You can also run either of the following commands to connect to the database:

   ```
   gsql postgres://omm:Gauss_234@127.0.0.1:8000/postgres -r
   gsql -d "host=127.0.0.1 port=8000 dbname=postgres user=omm password=Gauss_234"
   ```

   If information similar to the following is displayed, the connection succeeds:

   ```
   gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
   Non-SSL connection (SSL connection is recommended when requiring high-security)
   Type "help" for help.
   
   openGauss=# 
   ```

   User **omm** is the administrator, and **DBNAME=\#** is displayed. If you log in to and connect to the database as a common user, **DBNAME=\>** is displayed.

   **Non-SSL connection** indicates that the database is not connected in SSL mode. For higher security considerations, you are advised to [connect to the database in SSL mode](connecting-to-the-database-(using-ssl).md).

3.  You are advised to change the password upon the first login. The command is as follows:

    ```
    openGauss=# ALTER ROLE omm IDENTIFIED BY 'Mypwd123' REPLACE 'XuanYuan@2012';
    ```

4.  Exit the database.

    ```
    openGauss=# \q
    ```

## Connecting to an Encrypted Database

1.  Log in as the OS user **omm** to the primary node of the database.

2.  Connect to a database.

    After the database is installed, a database named **postgres** is generated by default. When connecting to a database for the first time, you can connect to this database.

    Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000 -C
    ```

    -**C** indicates that the encrypted database is enabled and keys and encrypted tables can be created. For details about other parameters, see [Connecting to a Database Locally](#connecting-to-a-database-locally).

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((GaussDB Kernel VxxxRxxxCxxopenGauss x.x.x build 50dc16a6) compiled at 2020-11-24 20:03:57 commit 1093 last mr 1793 debug)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  Exit the database.

    ```
    openGauss=# \q
    ```

## Remote Connecting to a Database

1.  Configure the remote connection. For details, see [Configuring Remote Connection](configuring-remote-connection.md).
2.  On the host \(whose IP address is 10.10.0.30\) where the client resides, upload the client tool package and configure **gsql** environment variables. The openEuler environment is used as an example.

    a.  Log in to the host where the client resides as user **root**.

    b.  Run the following command to create the **/tmp/tools** directory:

    ```
    mkdir /tmp/tools
    ```

    c.  Obtain **openGauss-x.x.x-openEuler-64bit-Libpq.tar.gz** from the software installation package and upload it to the **/tmp/tools** directory.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    > -   The software package is located where you put it before installation. Set it as needed.
    > -   The tool package name may vary in different OSs. Select the tool package suitable for your OS.

    d.  Run the following commands to decompress the package:

    ```
    cd /tmp/tools
    tar -zxvf openGauss-x.x.x-openEuler-64bit-Libpq.tar.gz
    ```

    e.  Log in to the server where the primary database node is located, and copy the **bin** directory in the database installation directory to **/tmp/tools** on the client host.

    ```
    scp -r /opt/huawei/install/app/bin root@10.10.0.30:/tmp/tools
    ```
        
    In the preceding command, **/opt/huawei/install/app** indicates the *\{gaussdbAppPath\}* path configured in the **clusterconfig.xml** file, and **10.10.0.30** indicates the IP address of the client host.

    f.  Log in to the host where the client is installed and set environment variables.

    Run the following command to open the **\~/.bashrc** file:
        
    ```
    vi ~/.bashrc
    ```
        
    Enter the following information and run **:wq!** to save and exit.
        
    ```
    export PATH=/tmp/tools/bin:$PATH
    export LD_LIBRARY_PATH=/tmp/tools/lib:$LD_LIBRARY_PATH
    ```

    g.  Run the following command to make the environment variables take effect:

    ```
    source ~/.bashrc
    ```

3.  Connect to a database.

    After the database is installed, a database named **postgres** is generated by default. When connecting to a database for the first time, you can connect to this database.

    ```
    gsql -d postgres -h 10.10.0.11 -U jack -p 8000 -W Test@123
    ```

    **postgres** is the name of the database, **10.10.0.11** is the IP address of the server where the primary database node resides, **jack** is the user of the database, **8000** is the port number of the primary database node, and **Test@123** is the password of user **jack**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    > 
    >-   If a machine connected to openGauss is not in the same network segment as openGauss, the IP address specified by **-h** should be the value of **coo.cooListenIp2** \(application access IP address\) set in Manager. 
    >-   Do not remotely connect to the database as user **omm**. 