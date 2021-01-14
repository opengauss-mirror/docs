# Connection Settings<a name="EN-US_TOPIC_0242371485"></a>

This section describes parameters related to client-server connection modes.

## listen\_addresses<a name="en-us_topic_0237124695_en-us_topic_0059777636_sed0adde99a3f47669f5d4ab557b36b35"></a>

**Parameter description**: Specifies the TCP/IP addresses that a server listens to for connections from the client. This parameter specifies the IP address used by the openGauss server to listen on, such as IPv4 address or IPv6 address(if supported). A server may have multiple NICs, and each NIC can be bound with multiple IP address. This parameter specifies the IP addresses which the openGauss server is bound. And the client can use the IP address specified in this parameter to connect to openGauss or send requests to openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:

-   Host name or IP address. Multiple values are separated with commas \(,\).
-   Asterisk \(\*\) or  **0.0.0.0**, indicating that all IP addresses will be listened to, which is not recommended due to potential security risks. This parameter must be used together with valid addresses \(for example, the local IP address\). Otherwise, the build may fail.
-   If the parameter is not specified, the server does not listen to any IP address. In this case, only Unix domain sockets can be used for database connections.

**Default value**:  **localhost**

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>**localhost**  indicates that only local loopback is allowed.  

## local\_bind\_address<a name="en-us_topic_0237124695_en-us_topic_0059777636_s5339247211624017a06e634c85c519d5"></a>

**Parameter description**: Specifies the host IP address bound to the current node for connecting to other nodes in openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**:  **0.0.0.0**  \(The actual value is specified in the configuration file during installation.\)

## port<a name="en-us_topic_0237124695_en-us_topic_0059777636_se9188f6aa8c9487c84d6d540eb470b3f"></a>

**Parameter description**: Specifies the TCP port listened to by openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

After the port parameter is modified, you need to execute the following command to refresh the static configuration file.

```
gs_om -t generateconf -X XMLFILE [--distribute] [-l LOGFILE]
```

**Value range**: an integer ranging from 1 to 65535

**Default value**:  **5432**  \(The actual value is specified in the configuration file during installation.\)

## max\_connections<a name="en-us_topic_0237124695_en-us_topic_0059777636_sa723b719fa70453bb7ec27f323d41c79"></a>

**Parameter description**: Specifies the maximum number of concurrent connections to the database. This parameter influences the concurrent processing capability of openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 262143

**Default value**:  **5000**  for each database node If the default value is greater than the maximum number supported by the kernel \(determined when the  **gs\_initdb**  command is executed\), an error message is displayed.

**Setting suggestions**:

Retain the default value of this parameter on the primary node of the database.

If this parameter is set to a large value, openGauss requires more System V shared memories or semaphores, which may exceed the default maximum configuration of the OS. In this case, modify the value as needed.

## sysadmin\_reserved\_connections<a name="en-us_topic_0237124695_en-us_topic_0059777636_scd9eb4b789bd41c39bc47e632f518c53"></a>

**Parameter description**: Specifies the minimum number of connections reserved for administrators. You are advised not to set this parameter to a large value.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _MIN_  \(which takes the smaller value between  **262143**  and  **max\_connections**\)

**Default value**:  **3**

## unix\_socket\_directory<a name="en-us_topic_0237124695_en-us_topic_0059777636_s29dfb1c7d5124f6aa26c7465d2e43c6d"></a>

**Parameter description**: Specifies the Unix domain socket directory that the openGauss server listens to for connections from the client.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

The parameter length limit varies by OS. If the length is exceeded, the error "Unix-domain socket path xxx is too long" will be reported.

**Value range**: a string

**Default value**: empty. The actual value is specified by the configuration file during installation.

## unix\_socket\_group<a name="en-us_topic_0237124695_en-us_topic_0059777636_s648c56ec371e4f1cb9389a426fcd2e96"></a>

**Parameter description**: Specifies the group of the Unix domain socket \(the user of a socket is the user that starts the server\). This parameter can work with  **[unix\_socket\_permissions](#en-us_topic_0237124695_en-us_topic_0059777636_s09d0cf55124b4f1aa3d401d18b9b4151)**  to control socket access.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. If this parameter is set to an empty string, the default group of the current user is used.

**Default value**: empty

## unix\_socket\_permissions<a name="en-us_topic_0237124695_en-us_topic_0059777636_s09d0cf55124b4f1aa3d401d18b9b4151"></a>

**Parameter description**: Specifies access permissions for the Unix domain socket.

The Unix domain socket uses the usual permission set of the Unix file system. The value of this parameter should be a number \(acceptable for the  **chmod**  and  **umask**  commands\). If a user-defined octal format is used, the number must start with 0.

You are advised to set it to  **0770**  \(only allowing access from users connecting to the database and users in the same group as them\) or  **0700**  \(only allowing access from users connecting to the database\).

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

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

## application\_name<a name="en-us_topic_0237124695_en-us_topic_0059777636_s4314f82316124e848ce16741dead9ae8"></a>

**Parameter description**: Specifies the client name used in the current connection request.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty \(The actual value is the name of the application connected to the backend.\)

## connection\_info<a name="en-us_topic_0237124695_section4834457114318"></a>

**Parameter description**: Specifies the database connection information, including the driver type, driver version, driver deployment path, and process owner.

This parameter is a USERSET parameter used for O&M. You are advised not to change the parameter value.

**Value range**: a string

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   An empty string indicates that the driver connected to the database does not support automatic setting of the  **connection\_info**  parameter or the parameter is not set by users in applications.  
>-   The following is an example of the concatenated value of  **connection\_info**:  
>    ```  
>    {"driver_name":"ODBC","driver_version": "(GaussDB Kernel V500R001C00 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131 debug","driver_path":"/usr/local/lib/psqlodbcw.so","os_user":"omm"}  
>    ```
>    **driver\_name**  and  **driver\_version**  are displayed by default. Whether  **driver\_path**  and  **os\_user**  are displayed is determined by users. For details, see  [Connecting to a Database](connecting-to-a-database-0.md)  and  [Configuring a Data Source in the Linux OS](configuring-a-data-source-in-the-linux-os.md).  

