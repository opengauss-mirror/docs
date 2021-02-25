# gs\_uninstall<a name="EN-US_TOPIC_0249632242"></a>

## Background<a name="en-us_topic_0237152424_en-us_topic_0059778700_section104365437437"></a>

gs\_uninstall, provided by , can be used to uninstall a cluster.

## Syntax<a name="en-us_topic_0237152424_en-us_topic_0059778700_s6f518f13661f4d718c7397ec91f60bdb"></a>

-   Uninstall a cluster.

    ```
    gs_uninstall [--delete-data] [-L] [-l LOGFILE]
    ```

-   Display help information.

    ```
    gs_uninstall -? | --help
    ```

-   Display the version number.

    ```
    gs_uninstall -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152424_en-us_topic_0059778700_s28c128a273dc452781a9fe18176ab9b2"></a>

-   --delete-data

    Deletes the data file.

- -L

  Uninstalls the local host only. If a host in the cluster is uninstalled, the cluster cannot undergo full uninstallation.

  ![](public_sys-resources/icon-note.gif) **NOTE:** 

  After executing gs\_postuninstall, the system will automatically delete the directories related to openGauss \(including $GAUSSLOG\). You are advised to set the log file path to a path outside the openGauss database.

- -l

  Specifies a log file name and its path. A timestamp will be added automatically to the log file name.

  When  **-l**  is not specified and  **gaussdbLogPath**  is not set in the XML file, the default value of the  **-l**  parameter is  **/var/log/gaussdb/om/gs_local-YYYY-MMDD_hhmmss.log**.

  >![](C:/Users/lijun/Desktop/opengauss/docs/content/en/docs/Toolreference/public_sys-resources/icon-note.gif) **NOTE:** 
  >After executing gs\_uninstall, the system will automatically delete the directories related to openGauss \(including $GAUSSLOG\). You are advised to set the log file path to a path outside the openGauss database.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Example<a name="en-us_topic_0237152424_en-us_topic_0059778700_se3158b665fdf47dd929b96da689819df"></a>

Use the gs\_uninstall script to uninstall a cluster.

```
gs_uninstall --delete-data
Checking uninstallation.
Successfully checked uninstallation.
Stopping the cluster.
Successfully stopped the cluster.
Successfully deleted instances.
Uninstalling application.
Successfully uninstalled application.
Uninstallation succeeded.
```

## Related Commands<a name="en-us_topic_0237152424_en-us_topic_0059778700_s81551f14e776431db12f55306b1d2250"></a>

[gs\_install](gs_install.md)  and  [gs\_postuninstall](gs_postuninstall.md)