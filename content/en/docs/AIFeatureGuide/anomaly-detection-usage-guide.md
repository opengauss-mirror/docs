# Usage Guide<a name="EN-US_TOPIC_0000001364336309"></a>

Assume the metric collection system is running properly and the configuration file directory **confpath** has been initialized. You can run the following commands to enable this feature:

Enable only the anomaly detection function:

```
gs_dbmind service start --conf confpath --only-run anomaly_detection
```

View data for a metric on all nodes from timestamps1 to timestamps2:

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2
```

View data for a metric on a specific node from timestamps1 to timestamps2:

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

View data for a metric on all nodes from timestamps1 to timestamps2 using a specific anomaly detection mode:

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --anomaly anomaly_type
```

View data for a metric on a specific node from timestamps1 to timestamps2 using a specific anomaly detection mode:

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

Visualize data for a metric on all nodes from timestamps1 to timestamps2 using a specific anomaly detection mode:

```
gs_dbmind component anomaly_detection --conf confpath --action plot --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

Stop the running service:

```
gs_dbmind service stop --conf confpath
```

>![](public_sys-resources/icon-note.gif) **NOTE:**
>When configuring anomaly detection parameters, ensure that the start-time is at least 30 seconds earlier than the end-time.
