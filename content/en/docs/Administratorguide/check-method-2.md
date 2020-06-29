# Check Method<a name="EN-US_TOPIC_0242215061"></a>

Use the  **gs\_checkperf**  tool provided by openGauss to check hardware performance.

## Prerequisites<a name="en-us_topic_0237088802_en-us_topic_0059778165_s6650627d6b22427cba08818c00054498"></a>

-   openGauss is running properly.
-   Services are running properly on the database.

## Procedure<a name="en-us_topic_0237088802_en-us_topic_0059778165_s6f2b431869b447a68f91c95fb5c5be8d"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to check the openGauss database performance:

    ```
    gs_checkperf
    ```


For details about performance statistical items, see "Server Tools \> gs\_checkperf \> Performance Check Items" in the  _openGauss Tool Reference_.

## Examples<a name="en-us_topic_0237088802_en-us_topic_0059778165_s52d1848c2a5b46f09a72790b85e27f96"></a>

Simple performance statistical result is displayed on the screen as follows:

```
gs_checkperf -i pmk -U omm
Cluster statistics information:
    Host CPU busy time ratio                     :    1.43       %
    MPPDB CPU time % in busy time                :    1.88       %
    Shared Buffer Hit ratio                      :    99.96      %
    In-memory sort ratio                         :    100.00     %
    Physical Reads                               :    4
    Physical Writes                              :    25
    DB size                                      :    70         MB
    Total Physical writes                        :    25
    Active SQL count                             :    2
    Session count                                :    3
```

