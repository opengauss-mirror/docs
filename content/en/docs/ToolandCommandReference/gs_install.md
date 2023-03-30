# gs\_install<a name="EN-US_TOPIC_0249632258"></a>

## Background<a name="en-us_topic_0237152416_en-us_topic_0059778040_section551843134215"></a>

Database deployment is a complex process.  **gs\_install**, provided by openGauss, is used to install and deploy openGauss.

Installation and deployment of openGauss require you to specify a configuration file, in which the program installation path, instance data directory, the primary/standby relationship, the number of instances, and the service IP address of each instance are specified.

## Prerequisites<a name="en-us_topic_0237152416_en-us_topic_0059778040_sde0deda331f04a77b53c25695a919910"></a>

-   You have successfully executed the  **gs\_preinstall**  script.
-   The  **locale**  parameter for each server is set to the same value.
-   openGauss users must be set during the preinstallation process.

## Syntax<a name="en-us_topic_0237152416_en-us_topic_0059778040_sb4663fce66974c9dadbf543e4a7095ba"></a>

-   Install openGauss.

    ```
    gs_install -X XMLFILE [--gsinit-parameter="PARAMETER" [...]] [--dn-guc="PARAMETER" [...]] [--alarm-component=ALARMCOMPONENT] [--time-out=SECS] [-l LOGFILE]  
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 

-   Display help information.

    ```
    gs_install -? | --help
    ```

-   Display version information.

    ```
    gs_install -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152416_en-us_topic_0059778040_s6aa938505b3b45808dbefdd1266efd76"></a>

- -X

  openGauss configuration file.

  Value range:  xml configuration file.

-   -l

    Specifies a log file and its path.

    When  **-l**  is not specified but  **gaussdbLogPath**  is set in the XML file, the default value of the  **-l**  parameter is the combination value of  **gaussdbLogPath/**_User name_**/om/gs\_install-YYYY-MM-DD\_hhmmss.log**.

-   --gsinit-parameter=PARAM

    Specifies the data instance parameters.

    For details about the value range, see parameter description in  [gs\_initdb](gs_initdb.md). Among which, the settings of the  **-A**,  **-D**,  **-U**,  **-C**, and  **-X**  parameters do not take effect.

-   --dn-guc=PARAM

    Set a parameter.

    For details about the value range, see parameter description in  [gs\_guc](gs_guc.md).

-   --time-out=SECS

    Specifies the timeout threshold for startup. Unit: s

    If the value of  **--time-out**  is too small, the instance startup may time out due to a large number of instances. If the instance failed to be started within the specified timeout period, an error will be reported. openGauss still runs at the backend. You can wait for a while and then query the openGauss status to check whether openGauss is started successfully.

    Value range: a positive integer. If there is no special requirement, you do not need to set this parameter. The system automatically adjusts the timeout threshold.

-   --alarm-component=alarm\_component

    Specifies the absolute path of the component to report alarms.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Example<a name="en-us_topic_0237152416_en-us_topic_0059778040_s9f6b00fff4334fdfaa38df725719b248"></a>

Use  **gs\_install**  to install openGauss.

```
gs_install -X /opt/software/openGauss/clusterconfig.xml
Parsing the configuration file.
Check preinstall on every node.
Successfully checked preinstall on every node.
Creating the backup directory.
Successfully created the backup directory.
begin deploy..
Installing the cluster.
begin prepare Install Cluster..
Checking the installation environment on all nodes.
begin install Cluster..
Installing applications on all nodes.
Successfully installed APP.
begin init Instance..
encrypt cipher and rand files for database.
Please enter password for database:
Please repeat for database:
begin to create CA cert files
The sslcert will be generated in /opt/gaussdb/cluster/app/share/sslcert/om
Cluster installation is completed.
Configuring.
Deleting instances from all nodes.
Successfully deleted instances from all nodes.
Checking node configuration on all nodes.
Initializing instances on all nodes.
Updating instance configuration on all nodes.
Check consistence of memCheck and coresCheck on DN nodes.
Successful check consistence of memCheck and coresCheck on all nodes.
Configuring pg_hba on all nodes.
Configuration is completed.
Successfully started cluster.
Successfully installed application.
```

## Helpful Links<a name="en-us_topic_0237152416_en-us_topic_0059778040_s07c0e1fb92454ab4aba383e142e6014d"></a>

[gs\_postuninstall](gs_postuninstall.md),  [gs\_preinstall](gs_preinstall.md), and  [gs\_uninstall](gs_uninstall.md)

