# Usage Guide<a name="EN-US_TOPIC_0000001364336309"></a>

Assume the metric collection system is running properly and the configuration file directory  **confpath**  has been initialized. You can run the following command to use this feature:

To analyze the correlation between a specific metric and other metrics within the time range from timestamps1 to timestamps2 on a specific node:

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address
```

To analyze the correlation between a specific metric and other metrics from timestamps1 to timestamps2 on a specific node and save the analysis result as a CSV file:

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --csv-dump-path csv_path
```




>![](public_sys-resources/icon-note.gif) **NOTE:**
>Ensure that start-time is at least 30 seconds earlier than end-time when configuring anomaly_analysis parameters.
