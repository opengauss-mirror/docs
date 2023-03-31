# Security and Authentication \(postgresql.conf\)<a name="EN-US_TOPIC_0289899967"></a>

This section describes parameters about client-to-server authentication.

## authentication\_timeout<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sb4f9d01645684c13ae66d6ad858b411a"></a>

**Parameter description**: Specifies the longest duration to wait before the client authentication times out. If a client is not authenticated by the server within the period, the server automatically disconnects from the client so that the client does not occupy connection resources.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 600. The smallest unit is s.

**Default value**:  **1min**

## auth\_iteration\_count<a name="en-us_topic_0283137371_en-us_topic_0237124696_section2612143317514"></a>

**Parameter description**: Specifies the number of iterations during the generation of encryption information for authentication.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2048 to 134217728

**Default value**:  **10000**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If the number of iterations is too small, the password storage security is reduced. If the number of iterations is too large, the performance deteriorates in scenarios involving password encryption, such as authentication and user creation. Set the number of iterations based on actual hardware conditions. You are advised to retain the default value.

## session\_authorization<a name="section2099118013294"></a>

**Parameter description**: Specifies the user ID of the current session.

This parameter is of the USERSET type and can be set only using the  [SET SESSION AUTHORIZATION](../SQLReference/set-session-authorization.md)  syntax.

**Value range**: a string

**Default value**:  **NULL**

## session\_timeout<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a"></a>

**Parameter description**: Specifies the longest duration allowed when no operations are performed on a client after it is connected to the server.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 86400. The smallest unit is s.  **0**  indicates that the timeout is disabled.

**Default value**:  **10min**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The gsql client of openGauss has an automatic reconnection mechanism. For local connection of initialized users, the client reconnects to the server if the connection breaks after the timeout.

## ssl<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa"></a>

**Parameter description**: Specifies whether SSL connections are enabled. Read  [Using gsql to Connect to a Database](../GettingStarted/gsql-connection-and-usage.md)  before setting this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that SSL connections are enabled.
-   **off**  indicates that SSL connections are not enabled.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>To enable SSL connections, you also need to configure parameters such as  **ssl\_cert\_file**,  **ssl\_key\_file**, and  **ssl\_ca\_file**  and the corresponding files. Incorrect configurations may cause startup failure of openGauss.

**Default value**:  **off**

## require\_ssl<a name="en-us_topic_0283137371_en-us_topic_0237124696_section1652594319820"></a>

**Parameter description**: Specifies whether the server requires the SSL connection. This parameter is valid only when  **[ssl](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa)**  is set to  **on**. Read  [Using gsql to Connect to a Database](../GettingStarted/gsql-connection-and-usage.md)  before setting this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the server requires SSL connections.
-   **off**  indicates that the server does not require SSL connections.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>openGauss supports SSL when a client connects to a the primary node of the database. It is recommended that the SSL connection be enabled only on the primary node of the databases.

**Default value**:  **off**

## ssl\_ciphers<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s83e68216730542489adc97d0ba080289"></a>

**Parameter description**: Specifies the list of encryption algorithms supported by SSL. Only the sysadmin user can access the list.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. Separate multiple encryption algorithms by semicolons \(;\). For details about supported encryption algorithms, see  [Establishing Secure TCP/IP Connections in SSL Mode](../DatabaseAdministrationGuide/establishing-secure-tcp-ip-connections-in-ssl-mode.md).

**Default value**:  **ALL**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If ssl\_ciphers is set incorrectly, the database cannot be started properly.

## ssl\_renegotiation\_limit<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s52ca816208d444eca495ad205c3da3cb"></a>

**Parameter description**: Specifies the allowed traffic volume over an SSL-encrypted channel before the session key is renegotiated. The renegotiation mechanism reduces the probability that attackers use the password analysis method to crack the key based on a huge amount of data but causes big performance losses. The traffic indicates the sum of transmitted and received traffic. The SSL renegotiation mechanism has been disabled because of potential risks. This parameter is reserved for version compatibility and does not take effect.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647. The unit is KB.  **0**  indicates that the renegotiation mechanism is disabled.

**Default value**:  **0**

## ssl\_cert\_file<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s68c117bf68b5461091ef26231ceb314d"></a>

**Parameter description:**  Specifies the name of the file that contains the SSL server certificate. The relative path is relative to the data directory.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **server.crt**

## ssl\_key\_file<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s102e03361bf949d88525e779b5284404"></a>

**Parameter description:**  Specifies the name of the file that contains the SSL private key. The relative path is relative to the data directory.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **server.key**

## ssl\_ca\_file<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_saaa8bf78f4314b5db5a3b6e9f06a96f9"></a>

**Parameter description:**  Specifies the name of a file that contains CA information. The relative path is relative to the data directory.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. If it is an empty string, no CA file is loaded and client certificate verification is not performed.

**Default value**:  **cacert.pem**

## ssl\_crl\_file<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s87be5a616bf444a6925c058dbc82291d"></a>

**Parameter description**: Specifies the certificate revocation list \(CRL\). If the certificate of a client is in the list, the certificate is invalid. A relative path must be used. The path depends on the data directory.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that there is no CRL.

**Default value**: empty

## krb\_server\_keyfile<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s640043f6a27941c1b96449530c0495c5"></a>

**Parameter description**: Specifies the location of the main configuration file of the Kerberos service. For details, see  [Configuring Client Access Authentication](../DatabaseAdministrationGuide/configuring-client-access-authentication.md). Only the  **sysadmin**  user can access the file.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss does not provide the Kerberos function.

## krb\_srvname<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s65aefa786b4f481da22dda86c00abb52"></a>

**Parameter description**: Specifies the Kerberos service name. For details, see  [Configuring Client Access Authentication](../DatabaseAdministrationGuide/configuring-client-access-authentication.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **postgres**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss does not provide the Kerberos function.

## krb\_caseins\_users<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s50cf7e3a4a994dc39cfc356cd6eaa1ca"></a>

**Parameter description**: Specifies whether the Kerberos username is case-sensitive.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the Kerberos username is case-insensitive.
-   **off**  indicates that the Kerberos username is case-sensitive.

**Default value**:  **off**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss does not provide the Kerberos function.

## modify\_initial\_password<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sd0b025a227a24d07a94d88e691f748e7"></a>

**Parameter description**: After openGauss is installed, there is only one initial user account \(whose UID is 10\) in the database. When a user logs in to the database using this initial user for the first time, this parameter determines whether the password of the initial user needs to be modified.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If the initial user password is not specified during the installation, the initial user password is empty by default after the installation. Before performing other operations, you need to set the initial user password using the gsql client. This parameter no longer takes effect and is reserved only for compatibility with upgrade scenarios.

**Value range**: Boolean

-   **on**  indicates that the password of the initial user needs to be modified upon the first login after the openGauss is successfully installed.
-   **off**  indicates that the password of the initial user does not need to be modified upon the first login after the openGauss is successfully installed.

**Default value**:  **off**

## password\_policy<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s3db9d0a21a4d48b98ea4afc1f2e44626"></a>

**Parameter description**: Specifies whether to check the password complexity when you run the  **CREATE ROLE/USER**  or  **ALTER ROLE/USER**  command to create or modify an account of openGauss. For details about the password complexity check policy, see  [Setting Password Security Policies](../DatabaseAdministrationGuide/setting-password-security-policies.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>For security purposes, do not disable the password complexity policy.

**Value range**:  **0**  and  **1**

-   **0**  indicates that no password complexity policy is enabled.
-   **1**  indicates that the default password complexity policy is enabled.

**Default value**:  **1**

## password\_reuse\_time<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794"></a>

**Parameter description:**  Specifies whether to check the reuse interval of the new password when you run the  **ALTER USER**  or  **ALTER ROLE**  command to change a user password. For details about the password reuse policy, see  [Setting Password Security Policies](../DatabaseAdministrationGuide/setting-password-security-policies.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When you change the password, the system checks the values of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**.
>-   If the values of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  are both positive numbers, an old password can be reused when it meets either of the reuse restrictions.
>-   If the value of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  is  **0**, password reuse is restricted based on the number of reuse times, and not on the reuse interval.
>-   If the value of  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  is  **0**, password reuse is restricted based on the reuse interval, and not on the number of reuse times.
>-   If the values of both  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  are  **0**, password reuse is not restricted.

**Value range**: a floating point number ranging from 0 to 3650. The unit is day.

-   **0**  indicates that the password reuse interval is not checked.
-   A positive number indicates that a new password cannot be chosen from passwords in history that are newer than the specified number of days.

**Default value**:  **60**

## password\_reuse\_max<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53"></a>

**Parameter description**: Specifies whether to check the reuse times of the new password when you run the  **ALTER USER**  or  **ALTER ROLE**  command to change a user password. Only the  **sysadmin**  user can access this parameter. For details about the password reuse policy, see  [Setting Password Security Policies](../DatabaseAdministrationGuide/setting-password-security-policies.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When you change the password, the system checks the values of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**.
>-   If the values of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  are both positive numbers, an old password can be reused when it meets either of the reuse restrictions.
>-   If the value of  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  is  **0**, password reuse is restricted based on the number of reuse times, and not on the reuse interval.
>-   If the value of  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  is  **0**, password reuse is restricted based on the reuse interval, and not on the number of reuse times.
>-   If the values of both  **[password\_reuse\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)**  and  **[password\_reuse\_max](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)**  are  **0**, password reuse is not restricted.

**Value range**: an integer ranging from 0 to 1000

-   **0**  indicates that the password reuse times are not checked.
-   A positive number indicates that the new password cannot be the one whose reuse times exceed the specified number.

**Default value**:  **0**

## password\_lock\_time<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s5e488e82235e4bd5b470b57a44a38c27"></a>

**Parameter description**: Specifies the duration before a locked account is automatically unlocked. For details about the automatic account locking policy, see  [Setting Password Security Policies](../DatabaseAdministrationGuide/setting-password-security-policies.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The locking and unlocking functions take effect only when the values of  **password\_lock\_time**  and  **[failed\_login\_attempts](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sc155ec2258b34e78a2ffcf797e66b959)**  are positive numbers.

**Value range**: a floating point number ranging from 0 to 365. The unit is day.

-   **0**  indicates that an account is not automatically locked if the password verification fails.
-   A positive number indicates the duration after which a locked account is automatically unlocked.

**Default value**:  **1**

## failed\_login\_attempts<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sc155ec2258b34e78a2ffcf797e66b959"></a>

**Parameter description**: Specifies the maximum number of incorrect password attempts before an account is locked. The account will be automatically unlocked after the time specified by  **password\_lock\_time**. Only the sysadmin user can access the account. The automatic account locking policy applies in scenarios such as login and password modification using the  **ALTER USER**  command. For details about the automatic account locking policy, see  [Setting Password Security Policies](../DatabaseAdministrationGuide/setting-password-security-policies.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The locking and unlocking functions take effect only when the values of  **failed\_login\_attempts**  and  **[password\_lock\_time](#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s5e488e82235e4bd5b470b57a44a38c27)**  are positive numbers.

**Value range**: an integer ranging from 0 to 1000

-   **0**  indicates that the automatic locking function does not take effect.
-   A positive number indicates that an account is locked when the number of incorrect password attempts reaches the specified number.

**Default value**:  **10**

## password\_encryption\_type<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_se6b55c35b44945099d33b403a5a43bce"></a>

**Parameter description**: Specifies the encryption type of a user password. Changing the value of this parameter does not change the password encryption type of existing users. The new encryption type is applied to passwords of new users or passwords modified after the parameter value is changed.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  0, 1, 2, or 3

-   **0**  indicates that passwords are encrypted with MD5.
-   **1**  indicates that passwords are encrypted with SHA-256 and MD5.
-   **2**  indicates that passwords are encrypted with SHA-256.
-   **3**  indicates that the passwords are encrypted in sm3 mode.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The MD5 encryption algorithm is not recommended because it has lower security and poses security risks.

**Default value:** **2**

## password\_min\_length<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s80e5b9ae60584d44ac53f5ab2998b26f"></a>

**Parameter description**: Specifies the minimum length of an account password. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. A password can contain 6 to 999 characters.

**Default value**:  **8**

## password\_max\_length<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sf837d511c2de48069eb14ebb3afc0c20"></a>

**Parameter description**: Specifies the maximum length of an account password. Only the  **sysadmin**  user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. A password can contain 6 to 999 characters.

**Default value**:  **32**

## password\_min\_uppercase<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s17e52632df154eba8c8e622b520b2c34"></a>

**Parameter description**: Specifies the minimum number of uppercase letters that an account password must contain. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 999

-   **0**  means no limit.
-   A positive integer indicates the minimum number of uppercase letters required in a password when you create an account.

**Default value**:  **0**

## password\_min\_lowercase<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s2e5497c6fbe84f14bab2ff2af8ce651c"></a>

**Parameter description**: Specifies the minimum number of lowercase letters that an account password must contain. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 999

-   **0**  means no limit.
-   A positive integer indicates the minimum number of lowercase letters required in a password when you create an account.

**Default value**:  **0**

## password\_min\_digital<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s3a14167dd99e4dfd8710bd9b03f5cec9"></a>

**Parameter description**: Specifies the minimum number of digits that an account password must contain. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 999

-   **0**  means no limit.
-   A positive integer indicates the minimum number of digits required in a password when you create an account.

**Default value**:  **0**

## password\_min\_special<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sac086283deba4af790d8d97bc5469d1a"></a>

**Parameter description**: Specifies the minimum number of special characters that an account password must contain. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 999

-   **0**  means no limit.
-   A positive integer indicates the minimum number of special characters required in a password when you create an account.

**Default value**:  **0**

## password\_effect\_time<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_sfcc6124115734728917a548a8bd8f0d4"></a>

**Parameter description**: Specifies the validity period of an account password.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to 999. The unit is day.

-   **0**  indicates that the validity period restriction is disabled.
-   A floating point number from 1 to 999 indicates the number of days for which an account password is valid. When the password is about to expire or has expired, the system prompts the user to change the password.

**Default value**:  **90**

## password\_notify\_time<a name="en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s1beab889ab8d49848ef28bf60c10d8f7"></a>

**Parameter description**: Specifies how many days in advance a user is notified before a password expires.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 999. The unit is day.

-   **0**  indicates that the reminder is disabled.
-   A positive integer indicates the number of days prior to password expiration that a user will receive a reminder.

**Default value**:  **7**

