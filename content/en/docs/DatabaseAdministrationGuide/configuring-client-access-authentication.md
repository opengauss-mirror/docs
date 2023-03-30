# Configuring Client Access Authentication<a name="EN-US_TOPIC_0246507949"></a>

## Background<a name="en-us_topic_0237121090_en-us_topic_0059778856_sa769b5cf486f45fe92aa0397f870561e"></a>

If a host needs to connect to a database remotely, you need to add information about the host in configuration file of the database system and perform client access authentication. The configuration file \(**pg\_hba.conf**  by default\) is stored in the data directory of the database. HBA is short for host-based authentication.

-   The system supports the following three authentication methods, which all require the  **pg\_hba.conf**  file.
    -   Host-based authentication: A server checks the configuration file based on the IP address, username, and target database of the client to determine whether the user can be authenticated.
    -   Password authentication: A password can be an encrypted password for remote connection or a non-encrypted password for local connection.
    -   SSL encryption: The OpenSSL is used to provide a secure connection between the server and the client.

-   In the  **pg\_hba.conf**  file, each record occupies one row and specifies an authentication rule. An empty row or a row started with a number sign \(\#\) is neglected.
-   Each authentication rule consists of multiple columns separated by spaces and forward slashes \(/\), or spaces and tab characters. If a field is enclosed with quotation marks \("\), it can contain spaces. One record cannot span different rows.

## Procedure<a name="en-us_topic_0237121090_en-us_topic_0059778856_seb6a5d2b71a94e6081aecb852a6666c9"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Configure the client authentication mode and enable the client to connect to the host as user  **jack**. User  **omm**  cannot be used for remote connection.

    Assume you are to allow the client whose IP address is  **10.10.0.30**  to access the current host.

    ```
    gs_guc set -N all -I all -h "host all jack 10.10.0.30/32 sha256"
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   Before using user  **jack**, connect to the database locally and run the following command in the database to create user  **jack**:  
    >    ```  sql
    >    CREATE USER jack PASSWORD 'Test@123';  
    >    ```
    >-   **-N all**  indicates all hosts in openGauss.  
    >-   **-I all**  indicates all instances on the host.  
    >-   **-h**  specifies statements that need to be added in the  **pg\_hba.conf**  file.  
    >-   **all**  indicates that a client can connect to any database.  
    >-   **jack**  indicates the user that accesses the database.  
    >-   *10.10.0.30*/*32*  indicates that only the client whose IP address is  **10.10.0.30**  can connect to the host. The specified IP address must be different from those used in openGauss.  **32**  indicates that there are 32 bits whose value is 1 in the subnet mask. That is, the subnet mask is 255.255.255.255.  
    >-   **sha256**  indicates that the password of user  **jack**  is encrypted using the SHA-256 algorithm.  


This command adds a rule to the  **pg\_hba.conf**  file corresponds to the primary node of the database. The rule is used to authenticate clients that access primary node.

Each record in the  **pg\_hba.conf**  file can be in one of the following four formats. For parameter description of the four formats, see  [Configuration File Reference](configuration-file-reference.md).

```
local     DATABASE USER METHOD [OPTIONS]
host      DATABASE USER ADDRESS METHOD [OPTIONS]
hostssl   DATABASE USER ADDRESS METHOD [OPTIONS]
hostnossl DATABASE USER ADDRESS METHOD [OPTIONS]
```

During authentication, the system checks records in the  **pg\_hba.conf**  file in sequence for connection requests, so the record sequence is vital.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Configure records in the  **pg\_hba.conf**  file from top to bottom based on communication and format requirements in the descending order of priorities. The IP addresses of the openGauss cluster and added hosts are of the highest priority and should be configured prior to those manually configured by users. If the IP addresses manually configured by users and those of added hosts are in the same network segment, delete the manually configured IP addresses before the scale-out and configure them after the scale-out.  

The suggestions on configuring authentication rules are as follows:

-   Records placed at the front have strict connection parameters but weak authentication methods.
-   Records placed at the end have weak connection parameters but strict authentication methods.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If a user wants to connect to a specified database, the user must be authenticated by the rules in the  **pg\_hba.conf**  file and have the  **CONNECT**  permission for the database. If you want to restrict a user from connecting to certain databases, you can grant or revoke the user's  **CONNECT**  permission, which is easier than setting rules in the  **pg\_hba.conf**  file.  
>-   The  **trust**  authentication mode is insecure for a connection between the openGauss and a client outside the cluster. In this case, set the authentication mode to  **sha256**.  


## Exception Handling<a name="en-us_topic_0237121090_en-us_topic_0059778856_s8e3246e8f8a749679fddc812719380b9"></a>

There are many reasons for a user authentication failure. You can view an error message returned from a server to a client to determine the exact cause.  [Table 1](#en-us_topic_0237121090_en-us_topic_0059778856_t451d737a3917467b9691ba1306766cdb)  lists common error messages and solutions to these errors.

**Table  1**  Error messages

<a name="en-us_topic_0237121090_en-us_topic_0059778856_t451d737a3917467b9691ba1306766cdb"></a>
<table><thead align="left"><tr id="en-us_topic_0237121090_en-us_topic_0059778856_r9b3ab3881ff84930b74136d5bce3e1ee"><th class="cellrowborder" valign="top" width="50.23%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121090_en-us_topic_0059778856_a116106eff28b4f7f958971720e7f74d8"><a name="en-us_topic_0237121090_en-us_topic_0059778856_a116106eff28b4f7f958971720e7f74d8"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_a116106eff28b4f7f958971720e7f74d8"></a>Symptom</p>
</th>
<th class="cellrowborder" valign="top" width="49.769999999999996%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121090_en-us_topic_0059778856_ac5d55da7f96a4485beee9fbec12a69e9"><a name="en-us_topic_0237121090_en-us_topic_0059778856_ac5d55da7f96a4485beee9fbec12a69e9"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_ac5d55da7f96a4485beee9fbec12a69e9"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121090_en-us_topic_0059778856_r70a8d7b07c7445a4b5cbfb02eb90a9f1"><td class="cellrowborder" valign="top" width="50.23%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_aaf294286227d4eb4bb17535e3268436d"><a name="en-us_topic_0237121090_en-us_topic_0059778856_aaf294286227d4eb4bb17535e3268436d"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_aaf294286227d4eb4bb17535e3268436d"></a>The username or password is incorrect.</p>
<pre class="screen" id="en-us_topic_0237121090_en-us_topic_0059778856_s44fb7ea02c7448cf984be0ac82238605"><a name="en-us_topic_0237121090_en-us_topic_0059778856_s44fb7ea02c7448cf984be0ac82238605"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_s44fb7ea02c7448cf984be0ac82238605"></a>FATAL: invalid username/password,login denied</pre>
</td>
<td class="cellrowborder" valign="top" width="49.769999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_ac98f9b22e2f647159c924583e5704413"><a name="en-us_topic_0237121090_en-us_topic_0059778856_ac98f9b22e2f647159c924583e5704413"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_ac98f9b22e2f647159c924583e5704413"></a>Retry the authentication with the correct username and password.</p>
</td>
</tr>
<tr id="en-us_topic_0237121090_en-us_topic_0059778856_r3aff35e802b449ecaf22ee38ecbdacfd"><td class="cellrowborder" valign="top" width="50.23%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_aa14376fd6e3446e0a49ff0a09bd7582c"><a name="en-us_topic_0237121090_en-us_topic_0059778856_aa14376fd6e3446e0a49ff0a09bd7582c"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_aa14376fd6e3446e0a49ff0a09bd7582c"></a>The database to connect does not exist.</p>
<pre class="screen" id="en-us_topic_0237121090_en-us_topic_0059778856_s2f245ea33081497a8c2115dcc1bad132"><a name="en-us_topic_0237121090_en-us_topic_0059778856_s2f245ea33081497a8c2115dcc1bad132"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_s2f245ea33081497a8c2115dcc1bad132"></a>FATAL: database "TESTDB" does not exist</pre>
</td>
<td class="cellrowborder" valign="top" width="49.769999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_afa4bfedb62f94c90bef9e836e51d72a0"><a name="en-us_topic_0237121090_en-us_topic_0059778856_afa4bfedb62f94c90bef9e836e51d72a0"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_afa4bfedb62f94c90bef9e836e51d72a0"></a>Retry the authentication with the correct database name.</p>
</td>
</tr>
<tr id="en-us_topic_0237121090_en-us_topic_0059778856_r995569b284de488798e7226eafd08919"><td class="cellrowborder" valign="top" width="50.23%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_a301ff52d43ed435c98046dd360a8aec5"><a name="en-us_topic_0237121090_en-us_topic_0059778856_a301ff52d43ed435c98046dd360a8aec5"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_a301ff52d43ed435c98046dd360a8aec5"></a>No matched client record is found.</p>
<pre class="screen" id="en-us_topic_0237121090_en-us_topic_0059778856_s41849e5ee04042d19c3e4143a5361eb9"><a name="en-us_topic_0237121090_en-us_topic_0059778856_s41849e5ee04042d19c3e4143a5361eb9"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_s41849e5ee04042d19c3e4143a5361eb9"></a>FATAL: no pg_hba.conf entry for host "10.10.0.60", user "ANDYM", database "TESTDB"</pre>
</td>
<td class="cellrowborder" valign="top" width="49.769999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121090_en-us_topic_0059778856_aa9c25283ca1c45c4a9387c5c0a63ca9c"><a name="en-us_topic_0237121090_en-us_topic_0059778856_aa9c25283ca1c45c4a9387c5c0a63ca9c"></a><a name="en-us_topic_0237121090_en-us_topic_0059778856_aa9c25283ca1c45c4a9387c5c0a63ca9c"></a>This message indicates that the server is connected but denies the connection request, because it does not find a matched record in <strong id="en-us_topic_0237121090_b10407121317463"><a name="en-us_topic_0237121090_b10407121317463"></a><a name="en-us_topic_0237121090_b10407121317463"></a>pg_hba.conf</strong>. Contact the database administrator to add user information to the <strong id="en-us_topic_0237121090_b3406182113463"><a name="en-us_topic_0237121090_b3406182113463"></a><a name="en-us_topic_0237121090_b3406182113463"></a>pg_hba.conf</strong> file.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0237121090_en-us_topic_0059778856_s6ea1dd5218564334b1c8b6a343273c40"></a>

```
TYPE  DATABASE        USER            ADDRESS                 METHOD

"local" is for Unix domain socket connections only
#Allow only the user specified by the -U parameter during installation to establish a connection from the local server.
local   all             all                                     trust
IPv4 local connections:
#User  jack  is allowed to connect to any database from the 10.10.0.50 host. The SHA-256 algorithm is used to encrypt the password.
host    all           jack             10.10.0.50/32            sha256
#Any user is allowed to connect to any database from a host on the 10.10.0.0/24 network segment. The SHA-256 algorithm is used to encrypt the password and SSL transmission is used.
hostssl    all             all             10.10.0.0/24            sha256
```
