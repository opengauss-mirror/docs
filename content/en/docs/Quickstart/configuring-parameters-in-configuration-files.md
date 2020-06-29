# Configuring Parameters in Configuration Files<a name="EN-US_TOPIC_0241704251"></a>

The current default values for parameters in the openGauss configuration file \(**postgresql.conf**\) are all in single-instance configuration mode. You can set application parameters by using  **gs\_guc**.

## Syntax<a name="en-us_topic_0241234207_section12202966262"></a>

-   Modify parameters in the configuration file \(**postgresql.conf**\).

    ```
    gs_guc set [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter = value"
    ```

-   Reset parameters to their default values.

    ```
    gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter"
    ```


## Command Reference<a name="en-us_topic_0241234207_en-us_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>

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

-   **-D**:

    Specifies the openGauss instance path of the commands to be run. When the  **encrypt**  command is used, this parameter indicates the path for storing the generated password file.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   **-D**  cannot be used together with  **-I**.  

-   **-c **_parameter_**=**_value_

    Specifies the name and value of the openGauss configuration parameter to be set.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   If the parameter is a string variable, use  **-c **_parameter_**="'**_value_**'"**  or  **-c "**_parameter_** = '**_value_**'"**.  
    >-   When  **gs\_guc set**  or  **reload**  is set to  **log\_directory**, the default value is restored and set to a specific data directory.  

    Value range: all the parameters in the  **postgresql.conf**  file

-   **-U, --keyuser=**_USER_

## Examples<a name="en-us_topic_0241234207_section53021226153217"></a>

Modify database node parameters. For example, modify the maximum number of connections allowed by a database to  **800**. The database must be restarted to make the change take effect.

```
gs_guc set -N all -I all -c "max_connections = 800"

Total instances: 21. Failed instances: 0.
Success to perform gs_guc!
```

