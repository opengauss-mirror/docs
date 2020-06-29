# Executing Uninstallation<a name="EN-US_TOPIC_0249784561"></a>

The openGauss provides an uninstallation script to help users uninstall the openGauss.

## Procedure<a name="en-us_topic_0241805812_en-us_topic_0085434635_en-us_topic_0059782049_s7482ec9e651f4d72b00f50f6602ef25b"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Execute the  **gs\_uninstall**  script to uninstall the openGauss.

    ```
    gs_uninstall --delete-data
    ```

    Alternatively, locally uninstall each node of the openGauss.

    ```
    gs_uninstall --delete-data -L
    ```


## Examples<a name="en-us_topic_0241805812_en-us_topic_0085434635_en-us_topic_0059782049_section4381166144439"></a>

Execute the  **gs\_uninstall**  script to uninstall the openGauss.

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

Execute the  **gs\_uninstall**  script to perform single-node uninstallation.

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

## Troubleshooting<a name="en-us_topic_0241805812_en-us_topic_0085434635_en-us_topic_0059782049_s252d364becab43ceaf8c86b309a291df"></a>

If the uninstallation fails, locate faults by following the log information provided in the  _$GAUSSLOG_**/om/gs\_uninstall-**_YYYY_**-**_MM_**-**_DD_**\_**_HHMMSS_**.log**  file.

