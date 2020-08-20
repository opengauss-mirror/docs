# Configuring openGauss Parameters<a name="EN-US_TOPIC_0241704229"></a>
<!-- TOC -->

- [Setting a Client Authentication Policy<a name="EN-US_TOPIC_0241704250"></a>](#setting-a-client-authentication-policya-nameen-us_topic_0241704250a)
    - [Syntax<a name="en-us_topic_0241234206_section19924142981011"></a>](#syntaxa-nameen-us_topic_0241234206_section19924142981011a)
    - [Command Reference<a name="en-us_topic_0241234206_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>](#command-referencea-nameen-us_topic_0241234206_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5fa)
    - [Examples<a name="en-us_topic_0241234206_section196405363211"></a>](#examplesa-nameen-us_topic_0241234206_section196405363211a)
- [Configuring Parameters in Configuration Files<a name="EN-US_TOPIC_0241704251"></a>](#configuring-parameters-in-configuration-filesa-nameen-us_topic_0241704251a)
    - [Syntax<a name="en-us_topic_0241234207_section12202966262"></a>](#syntaxa-nameen-us_topic_0241234207_section12202966262a)
    - [Command Reference<a name="en-us_topic_0241234207_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>](#command-referencea-nameen-us_topic_0241234207_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5fa)
    - [Examples<a name="en-us_topic_0241234207_section53021226153217"></a>](#examplesa-nameen-us_topic_0241234207_section53021226153217a)

<!-- /TOC -->


## Setting a Client Authentication Policy<a name="EN-US_TOPIC_0241704250"></a>

The current default values for parameters in the openGauss configuration file \(**pg\_hba.conf**\) are all in single-instance configuration mode. You can set application parameters by using  **gs\_guc**. For more configurations, see the product documentation.

### Syntax<a name="en-us_topic_0241234206_section19924142981011"></a>

Set a client authentication policy and send semaphores to the database process.

```
gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD authentication-options option" 
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**authmehod-options**  supports the following options:
>**trust**: no authentication. Remote hosts are not allowed to access openGauss in trust mode.
>**reject**: access denied.
>**md5**,  **sha256**, and  **cert**: client certificate authentication.
>**gss**: kerberos authentication.

### Command Reference<a name="en-us_topic_0241234206_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>

-   **set**:

    Modifies only parameters in the configuration file.

-   **reload**:

    Modifies parameters in the configuration file and sends semaphores to the database process for reloading the configuration file.

-   **-N**:

    Specifies the name of the host to be set.

    Value range: name of an existing host

    When this parameter is set to  **ALL**, all the hosts in openGauss are to be set.

-   **-I **_INSTANCE-NAME_:

    Specifies the name of the instance to be set.

    Value range: name of an existing instance

    When this parameter is set to  **ALL**, all the instances in the host are to be set.

- **-D**:

  Specifies the openGauss instance path of the commands to be run. When the  **encrypt**  command is used, this parameter indicates the path for storing the generated password file.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >
  >-   **-D**  cannot be used together with  **-I**.

-   **-h **_host-auth-policy_:

    Specifies the client authentication policy added to the  **pg\_hba.conf**  configuration file.

    Value range:

    -   HOSTTYPE DATABASE USERNAME IPADDR IPMASK \[authmehod-options\]
    -   HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK \[authmehod-options \]
    -   HOSTTYPE DATABASE USERNAME HOSTNAME \[authmehod-options \]

    **HOSTTYPE**  is a mandatory parameter. Value range:

    -   local
    -   host
    -   hostssl
    -   hostnossl

    **local**  is a Unix domain socket.  **host**  is a common or SSL-encrypted TCP/IP socket.  **hostssl**  is an SSL-encrypted TCP/IP socket.  **hostnossl**  is a TCP/IP-only socket.

    **authmehod-options**  is an optional parameter. Value range:

    -   trust
    -   reject
    -   md5
    -   sha256
    -   cert
    -   gss

    For details about the parameters, see their description in the  **pg\_hba.conf**  configuration file.


### Examples<a name="en-us_topic_0241234206_section196405363211"></a>

Set a client authentication policy.

```
gs_guc set -N all -I all -h "host replication testuser 10.252.95.191/32 sha256"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

## Configuring Parameters in Configuration Files<a name="EN-US_TOPIC_0241704251"></a>

The current default values for parameters in the openGauss configuration file \(**postgresql.conf**\) are all in single-instance configuration mode. You can set application parameters by using  **gs\_guc**.

### Syntax<a name="en-us_topic_0241234207_section12202966262"></a>

-   Modify parameters in the configuration file \(**postgresql.conf**\).

    ```
    gs_guc set [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter = value"
    ```

-   Reset parameters to their default values.

    ```
    gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter"
    ```


### Command Reference<a name="en-us_topic_0241234207_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>

-   **set**:

    Modifies only parameters in the configuration file.

-   **reload**:

    Modifies parameters in the configuration file and sends semaphores to the database process for reloading the configuration file.

-   **-N**:

    Specifies the name of the host to be set.

    Value range: name of an existing host

    When this parameter is set to  **ALL**, all the hosts in openGauss are to be set.

-   **-I **_INSTANCE-NAME_:

    Specifies the name of the instance to be set.

    Value range: name of an existing instance

    When this parameter is set to  **ALL**, all the instances in the host are to be set.

- **-D**:

  Specifies the openGauss instance path of the commands to be run. When the  **encrypt**  command is used, this parameter indicates the path for storing the generated password file.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >
  >-   **-D**  cannot be used together with  **-I**.

-   **-c **_parameter_**=**_value_

    Specifies the name and value of the openGauss configuration parameter to be set.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If the parameter is a string variable, use  **-c **_parameter_**="'**_value_**'"**  or  **-c "**_parameter_** = '**_value_**'"**.
    >-   When  **gs\_guc set**  or  **reload**  is set to  **log\_directory**, the default value is restored and set to a specific data directory.

    Value range: all the parameters in the  **postgresql.conf**  file

-   **-U, --keyuser=**_USER_

### Examples<a name="en-us_topic_0241234207_section53021226153217"></a>

Modify database node parameters. For example, modify the maximum number of connections allowed by a database to  **800**. The database must be restarted to make the change take effect.

```
gs_guc set -N all -I all -c "max_connections = 800"

Total instances: 21. Failed instances: 0.
Success to perform gs_guc!
```

