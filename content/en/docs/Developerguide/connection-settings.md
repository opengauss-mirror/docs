# Connection Settings<a name="EN-US_TOPIC_0289900801"></a>

This section describes parameters related to client-server connection modes.

## listen\_addresses<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_sed0adde99a3f47669f5d4ab557b36b35"></a>

**Parameter description**: Specifies the TCP/IP address of the client for a server to listen on.

This parameter specifies the IP address used by the openGauss server for listening, for example, IPv4  or IPv6 \(if supported\). Multiple NICs may exist on the host and each NIC can be bound to multiple IP addresses. This parameter specifies the IP addresses to which openGauss is bound. The client can use the IP address specified by this parameter to connect to or send requests to openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:

-   Host name or IP address. Multiple values are separated with commas \(,\).
-   Asterisk \(\*\) or  **0.0.0.0**, indicating that all IP addresses will be listened to, which is not recommended due to potential security risks. This parameter must be used together with valid addresses \(for example, the local IP address\). Otherwise, the build may fail. In primary/standby mode, if the value is set to  **\\\***  or  **0.0.0.0**, the value of  **localport**  in the  **postgresql.conf**  file of the database on the primary node cannot be the value of  **dataPortBase + 1**. Otherwise, the database cannot be started.
-   If the parameter is not specified, the server does not listen on any IP address. In this case, only Unix domain sockets can be used for database connections.

**Default value**: After the database instance is installed, the default value is configured according to the IP address of different instances in the XML configuration file. The default value for the DN instance is  **'x.x.x.x'**.

## local\_bind\_address<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s5339247211624017a06e634c85c519d5"></a>

**Parameter description**: Specifies the host IP address bound to the current node for connecting to other nodes in openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: After the database instance is installed, the default value is configured according to the IP address of different instances in the XML configuration file. The default value for the DN instance is  **'x.x.x.x'**.

## port<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_se9188f6aa8c9487c84d6d540eb470b3f"></a>

**Parameter description**: Specifies the TCP port listened on by the openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter is specified in the configuration file during installation. Do not modify this parameter unless absolutely necessary. Otherwise, database communication will be affected.

**Value range**: an integer ranging from 1 to 65535

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   When setting the port number, ensure that the port number is not in use. When setting the port numbers of multiple instances, ensure that the port numbers do not conflict.
>-   Ports 1 to 1023 are reserved for the operating system. Do not use them.
>-   When the database instance is installed using the configuration file, pay attention to the ports reserved in the communication matrix in the configuration file. For example,  _dataPortBase_  + 1 needs to be reserved as the port used by internal tools, and  _dataPortBase_  + 6 needs to be reserved as the communication port of the flow engine message queue. Therefore, during database instance installation, the maximum port number is  **65529**  for DNs. Ensure that the port number does not conflict with each other.

**Default value**:  **5432**  \(The actual value is specified in the configuration file during installation.\)

## max\_connections<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_sa723b719fa70453bb7ec27f323d41c79"></a>

**Parameter description**: Specifies the maximum number of concurrent connections to the database. This parameter influences the concurrent processing capability of openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The minimum value is  **10**  \(greater than the value of  _max\_wal\_senders_\). The theoretical maximum value is  **262143**. The actual maximum value is a dynamic value, which is calculated using the formula 262143 – value of  _job\_queue\_processes_  – value of  _autovacuum\_max\_workers_  – value of  _AUXILIARY\_BACKENDS_  – value of  _AV\_LAUNCHER\_PROCS_. The values of  [_job\_queue\_processes_](en-us_topic_0000001083527348.md#en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section10342177134137),  _[autovacuum\_max\_workers](en-us_topic_0289900634.md#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673)_, and  _[max\_inner\_tool\_connections](#en-us_topic_0283136886_section132711513143211)_  depend on the settings of the corresponding GUC parameters.  _AUXILIARY\_BACKENDS_  indicates the number of reserved auxiliary threads, which is fixed at 20.  _AV\_LAUNCHER\_PROCS_  indicates the number of reserved launcher threads for autovacuum, which is fixed at 2.

**Default value**:

-   **200**: Applicable when the database is installed in build or simplified mode.
-   **5000**: Applicable when the database is installed using the OM tool.

**Setting suggestions**:

Retain the default value of this parameter on the primary node of the databases.

**Impact of incorrect configuration:**

-   If the value of  _max\_connections_  is too large and exceeds the dynamic maximum value described in the formula, the node fails to be started and the error message " invalid value for parameter "max\_connections"" is displayed.
-   If only the value of  _max\_connections_  is increased while the memory parameter is not adjusted in proportion according to the external egress specifications, when the service load is heavy, the memory may be insufficient, and the error message "memory is temporarily unavailable" is displayed.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   If the number of connections of the administrator exceeds the value of  _max\_connections_, the administrator can still connect to the database after the connections are used up by common users. If the number of connections exceeds the value of  _sysadmin\_reserved\_connections_, an error is reported. That is, the maximum number of connections of the administrator is equal to the value of  _max\_connections_  +  _sysadmin\_reserved\_connections_.
>-   For common users, internal jobs use some connections. Therefore, the value of this parameter is slightly less than that of  _max\_connections_. The value depends on the number of internal connections.

## max\_inner\_tool\_connections<a name="en-us_topic_0283136886_section132711513143211"></a>

**Parameter description**: Specifies the maximum number of concurrent connections of a tool which is allowed to connect to the database. This parameter influences the concurrent connection capability of the openGauss tool.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _MIN_  \(which takes the smaller value between  **262143**  and  _max\_connections_\). For details about how to calculate the value of  _max\_connections_, see the preceding description.

**Default value**:  **50**  for each database node. If the default value is greater than the maximum value supported by the kernel \(determined when the  **gs\_initdb**  command is executed\), an error message is displayed.

**Setting suggestions**:

Retain the default value of this parameter on the primary node of the databases.

If this parameter is set to a large value, openGauss requires more System V shared memories or semaphores, which may exceed the default maximum configuration of the OS. In this case, modify the value as needed.

## sysadmin\_reserved\_connections<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_scd9eb4b789bd41c39bc47e632f518c53"></a>

**Parameter description**: Specifies the minimum number of connections reserved for administrators. You are advised not to set this parameter to a large value. This parameter is used together with the  _max\_connections_  parameter. The maximum number of connections of the administrator is equal to the value of  _max\_connections_  +  _sysadmin\_reserved\_connections_.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _MIN_  \(which takes the smaller value between  **262143**  and  _max\_connections_\). For details about how to calculate the value of  _max\_connections_, see the preceding description.

**Default value**:  **3**

## unix\_socket\_directory<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s29dfb1c7d5124f6aa26c7465d2e43c6d"></a>

**Parameter description**: Specifies the Unix domain socket directory for the openGauss server to listen to connections from the client.

This parameter is a  **POSTMASTER**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

The parameter length limit varies by OS. If the length is exceeded, the error "Unix-domain socket path xxx is too long" will be reported.

**Value range**: a string

**Default value**: empty. The actual value is specified by the configuration file during installation.

## unix\_socket\_group<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s648c56ec371e4f1cb9389a426fcd2e96"></a>

**Parameter description**: Specifies the group of the Unix domain socket \(the user of a socket is the user that starts the server\). This parameter can work with  **[unix\_socket\_permissions](#en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s09d0cf55124b4f1aa3d401d18b9b4151)**  to control socket access.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. If this parameter is set to an empty string, the default group of the current user is used.

**Default value**: empty

## unix\_socket\_permissions<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s09d0cf55124b4f1aa3d401d18b9b4151"></a>

**Parameter description**: Specifies access permissions for the Unix domain socket.

The Unix domain socket uses the usual permission set of the Unix file system. The value of this parameter should be a number \(acceptable for the  **chmod**  and  **umask**  commands\). If a user-defined octal format is used, the number must start with 0.

You are advised to set it to  **0770**  \(only allowing access from users connecting to the database and users in the same group as them\) or  **0700**  \(only allowing access from users connecting to the database\).

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0000 to 0777

**Default value**:  **0700**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Linux OS, a document has one document attribute and nine permission attributes, which consists of the read \(r\), write \(w\), and execute \(x\) permissions of the Owner, Group, and Others groups.
>The r, w, and x permissions are represented by the following numbers:
>r: 4
>w: 2
>x: 1
>-: 0
>The three attributes in a group are accumulative.
>For example,  **-rwxrwx---**  indicates the following permissions:
>owner = rwx = 4+2+1 = 7
>group = rwx = 4+2+1 = 7
>others = --- = 0+0+0 = 0
>The permission of the file is 0770.

## application\_name<a name="en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_s4314f82316124e848ce16741dead9ae8"></a>

**Parameter description**: Specifies the client name used in the current connection request.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

When a standby node requests to replicate logs on the primary node, if this parameter is not an empty string, it is used as the name of the streaming replication slot of the standby node on the primary node. In this case, if the length of this parameter exceeds 61 bytes, only the first 61 bytes are used as the streaming replication slot name.

**Value range:**  a string

**Default value**: empty \(The actual value is the name of the application connected to the backend.\)

## connection\_info<a name="en-us_topic_0283136886_en-us_topic_0237124695_section4834457114318"></a>

**Parameter description**: Specifies the database connection information, including the driver type, driver version, driver deployment path, and process owner.

This parameter is a USERSET parameter used for O&M. You are advised not to change the parameter value.

**Value range:**  a string

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   An empty string indicates that the driver connected to the database does not support automatic setting of the  **connection\_info**  parameter or the parameter is not set by users in applications.
>-   The following is an example of the concatenated value of  **connection\_info**:
>    ```
>    {"driver_name":"ODBC","driver_version": "(openGauss X.X.X build 13b34b53) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131 release","driver_path":"/usr/local/lib/psqlodbcw.so","os_user":"omm"}
>    ```
>    **driver\_name**  and  **driver\_version**  are displayed by default. Whether  **driver\_path**  and  **os\_user**  are displayed is determined by users. For details, see  [Connecting to a Database](en-us_topic_0289900896.md)  and  [Configuring a Data Source in the Linux OS](en-us_topic_0289900737.md).

