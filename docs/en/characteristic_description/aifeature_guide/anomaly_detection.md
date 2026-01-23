# Anomaly Detection<a name="EN-US_TOPIC_0000001364416149"></a>

## Overview<a name="EN-US_TOPIC_0000001311416516"></a>

The anomaly detection module implements time series data based on statistics methods to detect possible exceptions in the data. The framework of this module is decoupled to flexibly replace different anomaly detection algorithms. In addition, this module can automatically select algorithms based on different features of time series data. It supports anomaly value detection, threshold detection, box plot detection, gradient detection, growth rate detection, fluctuation rate detection, and status conversion detection.

## Usage Guide<a name="EN-US_TOPIC_0000001364336309"></a>

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

>[!NOTE]NOTE
>When configuring anomaly detection parameters, ensure that the start-time is at least 30 seconds earlier than the end-time.

## Obtaining Help Information <a name="EN-US_TOPIC_0000001311256720"></a>

You can run the **--help** command to obtain the help information. For example:

```
gs_dbmind component anomaly_detection --help
```

The following information is displayed:

```
usage: anomaly_detection.py [-h] --action {overview,plot} -c CONF -m METRIC -s
                            START_TIME -e END_TIME [-H HOST] [-a ANOMALY]

Workload Anomaly detection: Anomaly detection of monitored metric.

optional arguments:
  -h, --help            show this help message and exit
  --action {overview,plot}
                        choose a functionality to perform
  -c CONF, --conf CONF  set the directory of configuration files
  -m METRIC, --metric METRIC
                        set the metric name you want to retrieve
  -s START_TIME, --start-time START_TIME
                        set the start time of for retrieving in ms
  -e END_TIME, --end-time END_TIME
                        set the end time of for retrieving in ms
  -H HOST, --host HOST  set a host of the metric, ip only or ip and port.
  -a ANOMALY, --anomaly ANOMALY
                        set a anomaly detector of the metric(increase_rate,
                        level_shift, spike, threshold)

Process finished with exit code 0

```

## Command Reference<a name="EN-US_TOPIC_0000001311096736"></a>

**Table 1** Command Line Parameters

<a name="table1342813795619"></a>
<table><thead align="left"><tr id="row045719711563"><th class="cellrowborder" valign="top" width="28.85858585858586%" id="mcps1.2.4.1.1"><p id="p1245710711563"><a name="p1245710711563"></a><a name="p1245710711563"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="37.80808080808081%" id="mcps1.2.4.1.2"><p id="p184571871566"><a name="p184571871566"></a><a name="p184571871566"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.3"><p id="p9457678569"><a name="p9457678569"></a><a name="p9457678569"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row845747175610"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p945713712568"><a name="p945713712568"></a><a name="p945713712568"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p174574715614"><a name="p174574715614"></a><a name="p174574715614"></a>Help command</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p18457187195615"><a name="p18457187195615"></a><a name="p18457187195615"></a>-</p>
</td>
</tr>
<tr id="row12457167155617"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p745718714569"><a name="p745718714569"></a><a name="p745718714569"></a>--action</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p74571470565"><a name="p74571470565"></a><a name="p74571470565"></a>Action parameter</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p74573775616"><a name="p74573775616"></a><a name="p74573775616"></a><strong>overview</strong></p>
<p id="p1945717714560"><a name="p1945717714560"></a><a name="p1945717714560"></a><strong>plot</strong>: visualization </p>
</td>
</tr>
<tr id="row1145717795616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p945718755617"><a name="p945718755617"></a><a name="p945718755617"></a>-c, --conf</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p184576712561"><a name="p184576712561"></a><a name="p184576712561"></a>Configuration file directory </p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p3457157205619"><a name="p3457157205619"></a><a name="p3457157205619"></a>-</p>
</td>
</tr>
<tr id="row6457127115618"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p18457779562"><a name="p18457779562"></a><a name="p18457779562"></a>-m, --metric-name</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p124572079561"><a name="p124572079561"></a><a name="p124572079561"></a>Metric name to be displayed</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1345718775612"><a name="p1345718775612"></a><a name="p1345718775612"></a>-</p>
</td>
</tr>
<tr id="row124571720564"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p124571719563"><a name="p124571719563"></a><a name="p124571719563"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p345827195611"><a name="p345827195611"></a><a name="p345827195611"></a>Data source IP address used to filter data</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1545818725617"><a name="p1545818725617"></a><a name="p1545818725617"></a>IP address or IP address + port</p>
</td>
</tr>
<tr id="row1645819735616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p2458157195617"><a name="p2458157195617"></a><a name="p2458157195617"></a>-a, --anomaly</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p1645811720569"><a name="p1645811720569"></a><a name="p1645811720569"></a>Anomaly detection mode used for filtering</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p3458178565"><a name="p3458178565"></a><a name="p3458178565"></a>-</p>
</td>
</tr>
<tr id="row19458157125616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p1845816711568"><a name="p1845816711568"></a><a name="p1845816711568"></a>-s, --start-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p1544145713182"><a name="p1544145713182"></a><a name="p1544145713182"></a>Start time as a timestamp in milliseconds, or in the format %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1095712011916"><a name="p1095712011916"></a><a name="p1095712011916"></a>Positive integer or date and time format</p>
</td>
</tr>
<tr id="row14581773565"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p84583710563"><a name="p84583710563"></a><a name="p84583710563"></a>-e, --end-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p026554719114"><a name="p026554719114"></a><a name="p026554719114"></a>End time as a timestamp in milliseconds, or in the format %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p52656471113"><a name="p52656471113"></a><a name="p52656471113"></a>Positive integer or date and time format</p>
</td>
</tr>
</tbody>
</table>

## Troubleshooting<a name="EN-US_TOPIC_0000001364496017"></a>

-   Overview scenario failure: Ensure the configuration file path is correct and the configuration information is complete. Verify the metric name, host IP address, and anomaly detection type are accurate, and check if the metric data exists within the specified start and end times.
-   Visualization scenario failure: Ensure the configuration file path is correct and the configuration information is complete. Verify the metric name, host IP address, and anomaly detection type are accurate, and check if the metric data exists within the specified start and end times.
