# gs\_postuninstall<a name="EN-US_TOPIC_0249632244"></a>

## Background<a name="en-us_topic_0237152418_en-us_topic_0059778816_section1822511168423"></a>

**gs\_postuninstall**, provided by openGauss, is used to delete data configured before openGauss installation.

## Prerequisites<a name="en-us_topic_0237152418_en-us_topic_0059778816_sdd9f70f91f8442b4bade64056b9c5b42"></a>

-   The uninstallation of openGauss is successful.
-   User  **root**  is trustworthy and available.
-   Only user  **root**  is authorized to run the  **gs\_postuninstall**  command.

## Syntax<a name="en-us_topic_0237152418_en-us_topic_0059778816_sad653bfd058a483ab93629bd7b66fc5d"></a>

-   Delete the user, user group, and virtual IP address in openGauss.

    ```
    gs_postuninstall -U USER -X XMLFILE [-L] [--delete-user] [--delete-group] [-l LOGFILE]
    ```

-   Display help information.

    ```
    gs_postuninstall -? | --help
    ```

-   Display version information.

    ```
    gs_postuninstall -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152418_en-us_topic_0059778816_sb28b510af9974e7497677c1008506ace"></a>

-   -U

    Specifies the OS username of openGauss.

    Value range: a string. It must comply with the naming convention.

-   -X

    Specifies the path of the openGauss configuration file.

    Value range: storage paths of XML files

-   -L

    Clears only the host environment.

    If a host environment in openGauss is cleared, openGauss cannot perform full environment clearance.

-   --delete-user

    Deletes the OS user specified by the  **-U**  parameter.

    In the Red Hat environment, the username and the user group name are the same. If this parameter is specified, the  **--delete-group**  parameter must be specified.

-   --delete-group

    Deletes the user group where the OS user belongs to \(the  **--delete-user**  parameter must be specified when selecting this option\).

- -l

  Specifies a log file name and its path. A timestamp will be added automatically to the log file name.

  When  **-l**  is not specified and  **gaussdbLogPath**  is not set in the XML file, the default value of the  **-l**  parameter is  **/var/log/gaussdb/om/gs_local-YYYY-MMDD_hhmmss.log**.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >After executing gs\_postuninstall, the system will automatically delete the directories related to openGauss \(including $GAUSSLOG\). You are advised to set the log file path to a path outside the openGauss database.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Example<a name="en-us_topic_0237152418_en-us_topic_0059778816_s0a095ace681e435cabeab950321a1ae3"></a>

Clear the host environment.

```
gs_postuninstall -U omm  -X /opt/software/openGauss/clusterconfig.xml --delete-user
Parsing the configuration file.
Successfully parsed the configuration file.
Check log file path.
Successfully checked log file path.
Checking unpreinstallation.
Successfully checked unpreinstallation.
Deleting the instance's directory.
Successfully deleted the instance's directory.
Deleting the installation directory.
Successfully deleted the installation directory.
Deleting the temporary directory.
Successfully deleted the temporary directory.
Deleting remote OS user.
Successfully deleted remote OS user.
Deleting software packages and environmental variables of other nodes.
Successfully deleted software packages and environmental variables of other nodes.
Deleting logs of other nodes.
Successfully deleted logs of other nodes.
Deleting software packages and environmental variables of the local node.
Successfully deleted software packages and environmental variables of the local nodes.
Deleting local OS user.
Successfully deleted local OS user.
Deleting local node's logs.
Successfully deleted local node's logs.
Successfully cleaned environment.
```

## Helpful Links<a name="en-us_topic_0237152418_en-us_topic_0059778816_s2ce69a080cb14656845238b0d1ee73c1"></a>

[gs\_preinstall](gs_preinstall.md)  and  [gs\_uninstall](gs_uninstall.md)

