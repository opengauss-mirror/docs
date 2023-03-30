# Starting and Stopping openGauss<a name="EN-US_TOPIC_0242215008"></a>

## Starting openGauss<a name="en-us_topic_0237088789_en-us_topic_0059777680_se84dd72782a34e9b8b1fb962d2842afa"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to start openGauss:

    ```
    gs_om -t start
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >An HA cluster must be started in HA mode. If the cluster is started in standalone mode, you need to restore the HA relationship by running the  **gs\_ctl build**  command. For details about how to use the  **gs\_ctl**  tool, see the  _openGauss Tool Reference_.


## Stopping openGauss<a name="en-us_topic_0237088789_section785041010214"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to stop openGauss:

    ```
    gs_om -t stop
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For details about how to start and stop nodes and availability zones \(AZs\), see "Server Tools \> gs\_om" in the  _openGauss Tool Reference_.


## Examples<a name="en-us_topic_0237088789_en-us_topic_0059777680_s8c57591e1a444d5ea91a783a1a2b74c5"></a>

Start openGauss:

```
gs_om -t start
Starting cluster.
=========================================
=========================================
Successfully started.

```

Stop openGauss:

```
gs_om -t stop
Stopping cluster.
=========================================
Successfully stopped cluster.
=========================================
End stop cluster.
```

## Troubleshooting<a name="en-us_topic_0237088789_en-us_topic_0059777680_se86cdadb17ce4b5fbec281adaf1ccc92"></a>

If starting or stopping openGauss fails, troubleshoot the problem based on log information. For details, see  [Log Reference](log-reference.md).

If the startup fails due to timeout, you can run the following command to set the startup timeout interval, which is 300s by default:

```
gs_om -t start --time-out=300
```

