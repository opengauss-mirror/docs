# Checking the Number of Database Connections<a name="EN-US_TOPIC_0289900335"></a>

## Background<a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s4018f18115b340a780a46830079d366b"></a>

If the number of connections reaches its upper limit, new connections cannot be created. Therefore, if a user fails to connect a database, the administrator must check whether the number of connections has reached the upper limit. The following are details about database connections:

-   The maximum number of global connections is specified by the  **max\_connections**  parameter.
-   The number of a user's connections is specified by  **CONNECTION LIMIT connlimit**  in the  **CREATE ROLE**  statement and can be changed using  **CONNECTION LIMIT connlimit**  in the  **ALTER ROLE**  statement.
-   The number of a database's connections is specified by the  **CONNECTION LIMIT connlimit**  parameter in the  **CREATE DATABASE**  statement.

## Procedure<a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_sde106f089f2c443e869945d573576c09"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  View the upper limit of the number of global connections.

    ```
    openGauss=# SHOW max_connections;
     max_connections
    -----------------
     800
    (1 row)
    ```

    **800**  is the maximum number of session connections.

4.  View the number of connections that have been used.

    For details, see  [Table 1](#en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_t608a1965463e41f1b6eacd02f97a65ba).

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >
    >Except for database and usernames that are enclosed in double quotation marks \("\) during creation, uppercase letters are not allowed in the database and usernames in the commands in the following table.

    **Table  1**  Viewing the number of session connections

    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_t608a1965463e41f1b6eacd02f97a65ba"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_re474d5b541b5498f9baca663bf6224bc"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a51fddb8e27ca459db31fec04adab6d09"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a51fddb8e27ca459db31fec04adab6d09"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a51fddb8e27ca459db31fec04adab6d09"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aaae4952762a546beb00acadfa603c4e5"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aaae4952762a546beb00acadfa603c4e5"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aaae4952762a546beb00acadfa603c4e5"></a>Command</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_r666cbec5558e439fb7c632c0d4865967"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4ab36a3be5444a29a747e5d7262549ba"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4ab36a3be5444a29a747e5d7262549ba"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4ab36a3be5444a29a747e5d7262549ba"></a>View the maximum number of sessions connected to a specific user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abe47459aff854610bda6e3585c4cbe7d"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abe47459aff854610bda6e3585c4cbe7d"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abe47459aff854610bda6e3585c4cbe7d"></a>Run the following commands to view the upper limit of the number of <strong id="b10885154714246"><a name="b10885154714246"></a><a name="b10885154714246"></a><span id="en-us_topic_0237121094_text53674635013"><a name="en-us_topic_0237121094_text53674635013"></a><a name="en-us_topic_0237121094_text53674635013"></a>omm</span></strong>'s session connections. <strong id="b20444205792410"><a name="b20444205792410"></a><a name="b20444205792410"></a>–1</strong> indicates that no upper limit is set for the number of <strong id="b84447577240"><a name="b84447577240"></a><a name="b84447577240"></a><span id="en-us_topic_0237121094_text2275122085016"><a name="en-us_topic_0237121094_text2275122085016"></a><a name="en-us_topic_0237121094_text2275122085016"></a>omm</span></strong>'s session connections.</p>
    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s6ef5ec790c7642d7809c2b134f4f64c9"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s6ef5ec790c7642d7809c2b134f4f64c9"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s6ef5ec790c7642d7809c2b134f4f64c9">openGauss=#<strong id="b334612613401"><a name="b334612613401"></a><a name="b334612613401"></a> SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='</strong><span id="en-us_topic_0283136582_en-us_topic_0237121094_text62961221155016"><a name="en-us_topic_0283136582_en-us_topic_0237121094_text62961221155016"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_text62961221155016"></a>omm</span><strong id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a44debaef80d74b9ca411688bacdda8a4"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a44debaef80d74b9ca411688bacdda8a4"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a44debaef80d74b9ca411688bacdda8a4"></a>';</strong>
     rolname  | rolconnlimit
    ----------+--------------
     <span id="en-us_topic_0283136582_en-us_topic_0237121094_text16246192217504"><a name="en-us_topic_0283136582_en-us_topic_0237121094_text16246192217504"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_text16246192217504"></a>omm</span> |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_r230b2daf81fe46bf8bc72433c5f7a173"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abc49477247444d32b4bfe5b601dd801e"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abc49477247444d32b4bfe5b601dd801e"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_abc49477247444d32b4bfe5b601dd801e"></a>View the number of session connections that have been used by a user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_afbdde8607a9241d1854e840c0c562471"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_afbdde8607a9241d1854e840c0c562471"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_afbdde8607a9241d1854e840c0c562471"></a>Run the following commands to view the number of session connections that have been used by <strong id="b209510632516"><a name="b209510632516"></a><a name="b209510632516"></a><span id="en-us_topic_0237121094_text2279192513507"><a name="en-us_topic_0237121094_text2279192513507"></a><a name="en-us_topic_0237121094_text2279192513507"></a>omm</span></strong>. <strong id="b1060571414255"><a name="b1060571414255"></a><a name="b1060571414255"></a>1</strong> indicates the number of session connections that have been used by <strong id="b660512141259"><a name="b660512141259"></a><a name="b660512141259"></a><span id="en-us_topic_0237121094_text14366152617508"><a name="en-us_topic_0237121094_text14366152617508"></a><a name="en-us_topic_0237121094_text14366152617508"></a>omm</span></strong>.</p>
    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s8936424e3adf420bb9db8cfc23d6f677"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s8936424e3adf420bb9db8cfc23d6f677"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s8936424e3adf420bb9db8cfc23d6f677">openGauss=# CREATE OR REPLACE VIEW DV_SESSIONS AS
    	       SELECT
    		    sa.sessionid AS SID,
    		    0::integer AS SERIAL#,
    		    sa.usesysid AS USER#,
    		    ad.rolname AS USERNAME
    	        FROM pg_stat_get_activity(NULL) AS sa
    	        LEFT JOIN pg_authid ad ON(sa.usesysid = ad.oid)
    	        WHERE sa.application_name &lt;&gt; 'JobSchedul
    openGauss=# <strong id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_ab300884670ad42e1ad494b667e32f973"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_ab300884670ad42e1ad494b667e32f973"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_ab300884670ad42e1ad494b667e32f973"></a>SELECT COUNT(*) FROM DV_SESSIONS WHERE USERNAME='</strong><span id="en-us_topic_0283136582_en-us_topic_0237121094_text9326192718507"><a name="en-us_topic_0283136582_en-us_topic_0237121094_text9326192718507"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_text9326192718507"></a>omm</span><strong id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4b74e7a62ebe4040b9c5ffc46f50ec2b"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4b74e7a62ebe4040b9c5ffc46f50ec2b"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a4b74e7a62ebe4040b9c5ffc46f50ec2b"></a>';</strong>
    
     count
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_r104cdfb6ed214094a0590e585e5b2e85"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a8409874270f64e5daffdcdec25803217"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a8409874270f64e5daffdcdec25803217"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a8409874270f64e5daffdcdec25803217"></a>View the maximum number of sessions connected to a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aba7c110edf6241cbafeb5ca894c89607"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aba7c110edf6241cbafeb5ca894c89607"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aba7c110edf6241cbafeb5ca894c89607"></a>Run the following commands to view the upper limit of the number of <strong id="b1944419234258"><a name="b1944419234258"></a><a name="b1944419234258"></a>postgres</strong>'s session connections. <strong id="b194229262256"><a name="b194229262256"></a><a name="b194229262256"></a>–1</strong> indicates that no upper limit is set for the number of <strong id="b4422152632512"><a name="b4422152632512"></a><a name="b4422152632512"></a>postgres</strong>'s session connections.</p>
    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s43be919558d045a689ac74d52a7560e4"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s43be919558d045a689ac74d52a7560e4"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s43be919558d045a689ac74d52a7560e4">openGauss=#<strong id="b19476120134212"><a name="b19476120134212"></a><a name="b19476120134212"></a> SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';</strong>
    
     datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_rcb1ea716375e46b8bd4da4deea8c96bf"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_af26907151de64eaeb8caa1eec6bdbd87"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_af26907151de64eaeb8caa1eec6bdbd87"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_af26907151de64eaeb8caa1eec6bdbd87"></a>View the number of session connections that have been used by a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aeab8618dcc114d1ea2f1ed255f200bf7"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aeab8618dcc114d1ea2f1ed255f200bf7"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aeab8618dcc114d1ea2f1ed255f200bf7"></a>Run the following commands to view the number of session connections that have been used by <strong id="b14336830182515"><a name="b14336830182515"></a><a name="b14336830182515"></a>postgres</strong>. <strong id="b683012316251"><a name="b683012316251"></a><a name="b683012316251"></a>1</strong> indicates the number of session connections that have been used by <strong id="b283153192517"><a name="b283153192517"></a><a name="b283153192517"></a>postgres</strong>.</p>
    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s98d199bf39a949ad9e38a71d0b20488f"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s98d199bf39a949ad9e38a71d0b20488f"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_s98d199bf39a949ad9e38a71d0b20488f">openGauss=#<strong id="b1430521617428"><a name="b1430521617428"></a><a name="b1430521617428"></a> SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';</strong>
     count 
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_redc0724fa85d4625a03722251374b298"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aa93c2fc05f144d1f9e56abe24040701c"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aa93c2fc05f144d1f9e56abe24040701c"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_aa93c2fc05f144d1f9e56abe24040701c"></a>View the number of session connections that have been used by all users.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a895ff9baf5744bc8b2ce933084c3388f"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a895ff9baf5744bc8b2ce933084c3388f"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a895ff9baf5744bc8b2ce933084c3388f"></a>Run the following commands to view the number of session connections that have been used by all users:</p>
    <a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_sbf751537822546bbbc3bbd9c1b3e50b1"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_sbf751537822546bbbc3bbd9c1b3e50b1"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_sbf751537822546bbbc3bbd9c1b3e50b1">openGauss=# CREATE OR REPLACE VIEW DV_SESSIONS AS
    	       SELECT
    		    sa.sessionid AS SID,
    		    0::integer AS SERIAL#,
    		    sa.usesysid AS USER#,
    		    ad.rolname AS USERNAME
    	        FROM pg_stat_get_activity(NULL) AS sa
    	        LEFT JOIN pg_authid ad ON(sa.usesysid = ad.oid)
    	        WHERE sa.application_name &lt;&gt; 'JobSchedul
    openGauss=# <strong id="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a6f7981f036c346dca1744ecf7e258a37"><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a6f7981f036c346dca1744ecf7e258a37"></a><a name="en-us_topic_0283136582_en-us_topic_0237121094_en-us_topic_0059779140_a6f7981f036c346dca1744ecf7e258a37"></a>SELECT COUNT(*) FROM DV_SESSIONS;</strong>
     count
    -------
         10
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>


