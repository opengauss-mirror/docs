# Check Method<a name="EN-US_TOPIC_0242215055"></a>

Use the  **gs\_checkos**  tool provided by openGauss to check the OS status.

## Prerequisites<a name="en-us_topic_0237088796_en-us_topic_0059777853_s597a23100bfe434fb9c26a164b4d5b9d"></a>

-   The hardware and network are working properly.
-   The trust relationship of user  **root**  among the hosts is normal.
-   Only user  **root**  is authorized to run the  **gs\_checkos**  command.

## Procedure<a name="en-us_topic_0237088796_en-us_topic_0059777853_sde9f8bdf768942b2aea3232eab7d6a7f"></a>

1.  Log in to a server as user  **root**.
2.  Run the following command to check OS parameters of servers where the openGauss nodes are deployed:

    ```
    gs_checkos -i A
    ```

    Check the OS parameters to ensure that openGauss has passed the pre-installation check and can efficiently operate after it is installed. For details about the check items, see "Server Tools \> gs\_checkos" in the  _openGauss Tool Reference_.


## Examples<a name="en-us_topic_0237088796_en-us_topic_0059777853_sb6d3ac772495414da1fb16238a23ceb5"></a>

Before running the  **gs\_checkos**  command, execute pre-processing scripts by running  **gs\_preinstall**  to prepare the environment. The following uses parameter  **A**  as an example:

```
gs_checkos -i A
Checking items:
    A1. [ OS version status ]                                   : Normal
    A2. [ Kernel version status ]                               : Normal
    A3. [ Unicode status ]                                      : Normal
    A4. [ Time zone status ]                                    : Normal
    A5. [ Swap memory status ]                                  : Normal
    A6. [ System control parameters status ]                    : Normal
    A7. [ File system configuration status ]                    : Normal
    A8. [ Disk configuration status ]                           : Normal
    A9. [ Pre-read block size status ]                          : Normal
    A10.[ IO scheduler status ]                                 : Normal
    A11.[ Network card configuration status ]                   : Normal
    A12.[ Time consistency status ]                             : Warning
    A13.[ Firewall service status ]                             : Normal
    A14.[ THP service status ]                                  : Normal
Total numbers:14. Abnormal numbers:0. Warning number:1.
```

The following uses parameter  **B**  as an example:

```
gs_checkos -i B
Setting items:
    B1. [ Set system control parameters ]                       : Normal
    B2. [ Set file system configuration value ]                 : Normal
    B3. [ Set pre-read block size value ]                       : Normal
    B4. [ Set IO scheduler value ]                              : Normal
    B5. [ Set network card configuration value ]                : Normal
    B6. [ Set THP service ]                                     : Normal
Total numbers:6. Abnormal numbers:0. Warning number:0.
```

