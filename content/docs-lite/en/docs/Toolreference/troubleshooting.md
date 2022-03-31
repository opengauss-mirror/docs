# Troubleshooting<a name="EN-US_TOPIC_0294749066"></a>

## Low Connection Performance<a name="en-us_topic_0078149561_section625869329424"></a>

-   **log\_hostname**  is enabled, but DNS is incorrect.

    Connect to the database, and run  **show log\_hostname**  to check whether  **log\_hostname**  is enabled in the database.

    If it is enabled, the database kernel will use DNS to check the name of the host where the client is deployed. If the host where the database is configured with an incorrect or unreachable DNS server, the database connection will take a long time to set up. For details about this parameter, see the description of  **log\_hostname**  in section "GUC Parameter Description \> Error Reports and Logs \> Log Content" in the  _Developer Guide_.

-   The database kernel slowly runs the initialization statement.

    Problems are difficult to locate in this scenario. Try using the  **strace**  Linux trace command.

    ```
    strace gsql -U MyUserName -d postgres -h 127.0.0.1 -p 23508 -r -c '\q'
    Password for MyUserName:
    ```

    The database connection process will be printed on the screen. If the following statement takes a long time to run:

    ```
    sendto(3, "Q\0\0\0\25SELECT VERSION()\0", 22, MSG_NOSIGNAL, NULL, 0) = 22
    poll([{fd=3, events=POLLIN|POLLERR}], 1, -1) = 1 ([{fd=3, revents=POLLIN}])
    ```

    It indicates that the  **SELECT VERSION\(\)**  statement was run slowly.

    After the database is connected, you can run the  **explain performance select version\(\)**  statement to find the reason why the initialization statement was run slowly. For more information, see "Performance Tuning \> SQL Tuning Guide \> SQL Execution Plan" in the  _Developer Guide_.

    An uncommon scenario is that the disk of the machine where the DN resides is full or faulty, affecting queries and leading to user authentication failures. As a result, the connection process is suspended. To solve this problem, simply clear the data disk space of the DN.

-   TCP connection is set up slowly.

    Adapt the steps of troubleshooting slow initialization statement execution. Use  **strace**. If the following statement is run slowly:

    ```
    connect(3, {sa_family=AF_FILE, path="/home/test/tmp/gaussdb_llt1/.s.PGSQL.61052"}, 110) = 0
    ```

    Or,

    ```
    connect(3, {sa_family=AF_INET, sin_port=htons(61052), sin_addr=inet_addr("127.0.0.1")}, 16) = -1 EINPROGRESS (Operation now in progress)
    ```

    It indicates that the physical connection between the client and the database is set up slowly. In this case, check whether the network is unstable or has high throughput.


## Problems in Setting Up Connections<a name="en-us_topic_0078149561_section3272835810521"></a>

-   gsql: could not connect to server: No route to host

    This problem occurs generally because an unreachable IP address or port number was specified. Check whether the values of  **-h**  and  **-p**  parameters are correct.

-   gsql: FATAL:  Invalid username/password,login denied.

    This problem occurs generally because an incorrect username or password was entered. Contact the database administrator to check whether the username and password are correct.

-   gsql: FATAL:  Forbid remote connection with trust method!

    For security purposes, remote login in trust mode is forbidden. In this case, you need to modify the connection authentication information in the  **pg\_hba.conf**  file. For details, see "Database Security Management \> Client Access Authentication \> Configuration File Reference" in the  _Developer Guide_.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Do not modify the configurations of database hosts in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty. It is recommended that service applications be deployed outside the database instead of inside the database.

-   The DN can connect to the database if  **-h 127.0.0.1**  is specified, and the connection will fail if  **-h 127.0.0.1**  is removed.

    Run the SQL statement  **show unix\_socket\_directory**  to check whether the  **unix socket directory**  used by the DN is the same as that specified by the environment virable  **$PGHOST**  in the  **shell**  directory.

    If they are different, set  **$PGHOST**  to the directory specified by  **unix\_socket\_directory**.

    For more information about  **unix\_socket\_directory**, see "GUC Parameter Description \> Connection and Authentication \> Connection Settings" in the  _Developer Guide_.

-   The "libpq.so" loaded mismatch the version of gsql, please check it.

    This problem occurs because the version of  **libpq.so**  used in the environment does not match that of  **gsql**. Run the  **ldd gsql**  command to check the version of the loaded  **libpq.so**, and then load correct  **libpq.so**  by modifying the environment variable  **LD\_LIBRARY\_PATH**.

-   gsql: symbol lookup error: xxx/gsql: undefined symbol: libpqVersionString

    This problem occurs because the version of  **libpq.so**  used in the environment does not match that of  **gsql**  \(or the PostgreSQL  **libpq.so**  exists in the environment\). Run the  **ldd gsql**  command to check the version of the loaded  **libpq.so**, and then load correct  **libpq.so**  by modifying the environment variable  **LD\_LIBRARY\_PATH**.

-   gsql: connect to server failed: Connection timed out

    Is the server running on host "xx.xxx.xxx.xxx" and accepting TCP/IP connections on port xxxx?

    This problem is caused by network connection faults. Check the network connection between the client and the database server. If you cannot ping from the client to the database server, the network connection is abnormal. Contact network management personnel for troubleshooting.

    ```
    ping -c 4 10.10.10.1
    PING 10.10.10.1 (10.10.10.1) 56(84) bytes of data.
    From 10.10.10.1: icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=3 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=4 Destination Host Unreachable
    --- 10.10.10.1 ping statistics ---
    4 packets transmitted, 0 received, +4 errors, 100% packet loss, time 2999ms
    ```

-   gsql: FATAL:  permission denied for database "postgres"

    DETAIL:  User does not have CONNECT privilege.

    This problem occurs because the user does not have the permission to access the database. To solve this problem, perform the following steps:

    1.  Connect to the database as the system administrator  **dbadmin**.

        ```
        gsql -d postgres -U dbadmin -p 8000
        ```

    2.  Grant the user with the permission to access the database.

        GRANT CONNECT ON DATABASE postgres TO user1;

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >Actually, some common misoperations may also cause a database connection failure, for example, entering an incorrect database name, username, or password. In this case, the client tool will display the corresponding error messages.
        >```
        >gsql -d postgres -p 8000
        >gsql: FATAL:  database "postgres" does not exist
        >gsql -d postgres -U user1 -p 8000
        >Password for user user1:
        >gsql: FATAL:  Invalid username/password, login denied.
        >```


-   gsql: FATAL: sorry, too many clients already, active/non-active: 197/3.

    This problem occurs because the number of system connections exceeds the allowed maximum. Contact the DBA database administrator to release unnecessary sessions.

    You can check the number of connections as described in  [Table 1](#en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585).

    You can view the session status in the  **PG\_STAT\_ACTIVITY**  view. To release unnecessary sessions, use the  **pg\_terminate\_backend**  function.

    ```
    select datid,pid,state from pg_stat_activity;
    ```

    ```
     datid |       pid       | state  
    -------+-----------------+--------
     13205 | 139834762094352 | active
     13205 | 139834759993104 | idle
    (2 rows)
    ```

    The value of  **pid**  is the thread ID of the session. Terminate the session using its thread ID.

    ```
    SELECT PG_TERMINATE_BACKEND(139834759993104);
    ```

    If a command output similar to the following is displayed, the session is successfully terminated.

    ```
    PG_TERMINATE_BACKEND
    ----------------------
     t
    (1 row)
    ```

    **Table  1**  Viewing the number of session connections

    <a name="en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779356_r32046f7f632b492891276dd6f4bf8999"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"><a name="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a><a name="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"><a name="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a><a name="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a>Command</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059779356_rc644c3de5cac4e4891741cccf756b131"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"><a name="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a><a name="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a>View the maximum number of sessions connected to a specific user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"><a name="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a><a name="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a>Run the following command to view the upper limit of the number of <strong id="b842352706143336"><a name="b842352706143336"></a><a name="b842352706143336"></a>USER1</strong>'s session connections. <strong id="b842352706143349"><a name="b842352706143349"></a><a name="b842352706143349"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1930831815143422"><a name="b1930831815143422"></a><a name="b1930831815143422"></a>USER1</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"><a name="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a><a name="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a>SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='user1';
     rolname | rolconnlimit
    ---------+--------------
     user1    |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_rf5d9240299bd47e292727e46ad181e06"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"><a name="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a><a name="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a>View the number of session connections that have been used by a specified user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"><a name="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a><a name="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a>Run the following command to view the number of session connections that have been used by <strong id="b842352706143443"><a name="b842352706143443"></a><a name="b842352706143443"></a>USER1</strong>. <strong id="b842352706143450"><a name="b842352706143450"></a><a name="b842352706143450"></a>1</strong> indicates the number of session connections that have been used by <strong id="b842352706143459"><a name="b842352706143459"></a><a name="b842352706143459"></a>USER1</strong>.</p>
    <pre class="screen" id="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"><a name="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a><a name="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a>SELECT COUNT(*) FROM dv_sessions WHERE USERNAME='user1';
    
     count
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_r3ecf1d5dec914606a843db02e9fbd915"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"><a name="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a><a name="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a>View the maximum number of sessions connected to a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"><a name="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a><a name="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a>Run the following command to view the upper limit of the number of <strong id="b842352706143531"><a name="b842352706143531"></a><a name="b842352706143531"></a>postgres</strong>'s session connections. <strong id="b842352706143545"><a name="b842352706143545"></a><a name="b842352706143545"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1411347486143553"><a name="b1411347486143553"></a><a name="b1411347486143553"></a>postgres</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"><a name="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a><a name="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a>SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';
    
     datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_rdc10c65ce85d49b38dede86bc6dcd1d1"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"><a name="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a><a name="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a>View the number of session connections that have been used by a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"><a name="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a><a name="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a>Run the following command to view the number of session connections that have been used by <strong id="b842352706143634"><a name="b842352706143634"></a><a name="b842352706143634"></a>postgres</strong>. <strong id="b842352706143645"><a name="b842352706143645"></a><a name="b842352706143645"></a>1</strong> indicates the number of session connections that have been used by <strong id="b842352706143711"><a name="b842352706143711"></a><a name="b842352706143711"></a>postgres</strong>.</p>
    <pre class="screen" id="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"><a name="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a><a name="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a>SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';
     count 
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_re1756ad474794d9bacb603dfaa36638b"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"><a name="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a><a name="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a>View the number of session connections that have been used by all users.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"><a name="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a><a name="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a>Run the following command to view the number of session connections that have been used by all users:</p>
    <pre class="screen" id="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"><a name="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a><a name="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a>SELECT COUNT(*) FROM dv_sessions;
     
     count
    -------
         10
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>

-   gsql: wait xxx.xxx.xxx.xxx:xxxx timeout expired

    When  **gsql**  initiates a connection request to the database, a 5-minute timeout period is used. If the database cannot correctly authenticate the client request and client identity within this period,  **gsql**  will exit the connection process for the current session, and will report the above error.

    Generally, this problem is caused by the incorrect host and port \(that is, the  _xxx_  part in the error information\) specified by the  **-h**  and  **-p**  parameters. As a result, the communication fails. Occasionally, this problem is caused by network faults. To resolve this problem, check whether the host name and port number of the database are correct.

-   gsql: could not receive data from server: Connection reset by peer.

    Check whether DN logs contain information similar to "FATAL: cipher file "/data/coordinator/server.key.cipher" has group or world access". This error is usually caused by incorrect tampering with the permissions for data directories or some key files. For details about how to correct the permissions, see related permissions for files on other normal instances.

-   gsql: FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    In  **pg\_hba.conf**  of the target DN, the authentication mode is set to  **gss**  for authenticating the IP address of the current client. However, this authentication algorithm cannot authenticate clients. Change the authentication algorithm to  **sha256**  and try again. For details, see "Database Security Management \> Client Access Authentication \> Configuration File Reference" in the  _Developer Guide_.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Do not modify the configurations of database hosts in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty.
    >-   It is recommended that service applications be deployed outside the database instead of inside the database.


## Other Faults<a name="section1457563481712"></a>

-   There is a core dump or abnormal exit due to the bus error.

    Generally, this problem is caused by changes in loading the shared dynamic library \(.so file in Linux\) during process running. Alternatively, if the process binary file changes, the execution code for the OS to load machines or the entry for loading a dependent library will change accordingly. In this case, the OS kills the process for protection purposes, generating a core dump file.

    To resolve this problem, try again. In addition, do not run service programs in a database during O&M operations, such as an upgrade, preventing such a problem caused by file replacement during the upgrade.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >A possible stack of the core dump file contains dl\_main and its function calling. The file is used by the OS to initialize a process and load the shared dynamic library. If the process has been initialized but the shared dynamic library has not been loaded, the process cannot be considered completely started.


