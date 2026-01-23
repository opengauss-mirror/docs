# Anomaly_analysis: Multi_Metric Correlation Analysis<a name="EN-US_TOPIC_0000001195431216"></a>

## Overview<a name="EN-US_TOPIC_0000001311416516"></a>

The Anomaly Analysis multi-metric correlation module is primarily used to analyze the Pearson correlation coefficient of time series data to identify metrics that are most strongly correlated with known anomalies. This module features a decoupled framework and supports time series databases such as Prometheus and InfluxDB.

## Usage Guide<a name="EN-US_TOPIC_0000001364336309"></a>

Assume the metric collection system is running properly and the configuration file directory  **confpath**  has been initialized. You can run the following command to use this feature:

To analyze the correlation between a specific metric and other metrics within the time range from timestamps1 to timestamps2 on a specific node:

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address
```

To analyze the correlation between a specific metric and other metrics from timestamps1 to timestamps2 on a specific node and save the analysis result as a CSV file:

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --csv-dump-path csv_path
```




>[!NOTE]NOTE
>Ensure that start-time is at least 30 seconds earlier than end-time when configuring anomaly_analysis parameters.

## Obtaining Help Information <a name="EN-US_TOPIC_0000001311256720"></a>

You can run the **--help** command to obtain help information. For example:

```
gs_dbmind component anomaly_detection --help
```

The following information will be displayed:
```
usage: anomaly_analysis.py [-h] -c CONF -m METRIC -s START_TIME -e END_TIME -H
                           HOST [--csv-dump-path CSV_DUMP_PATH]

Workload Anomaly analysis: Anomaly analysis of monitored metric.

optional arguments:
  -h, --help            show this help message and exit
  -c CONF, --conf CONF  set the directory of configuration files
  -m METRIC, --metric METRIC
                        set the metric name you want to retrieve
  -s START_TIME, --start-time START_TIME
                        set the start time of for retrieving in ms, supporting
                        UNIX-timestamp with microsecond or datetime format
  -e END_TIME, --end-time END_TIME
                        set the end time of for retrieving in ms, supporting
                        UNIX-timestamp with microsecond or datetime format
  -H HOST, --host HOST  set a host of the metric, ip only or ip and port.
  --csv-dump-path CSV_DUMP_PATH
                        dump the result csv file to the dump path if it is
                        specified.
```
** 

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
<tr id="row1145717795616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p945718755617"><a name="p945718755617"></a><a name="p945718755617"></a>-c, --conf</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p184576712561"><a name="p184576712561"></a><a name="p184576712561"></a>Configuration file directory </p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p3457157205619"><a name="p3457157205619"></a><a name="p3457157205619"></a>-</p>
</td>
</tr>
<tr id="row6457127115618"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p18457779562"><a name="p18457779562"></a><a name="p18457779562"></a>-m, --metric</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p124572079561"><a name="p124572079561"></a><a name="p124572079561"></a>Metric name to display</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1345718775612"><a name="p1345718775612"></a><a name="p1345718775612"></a>-</p>
</td>
</tr>
<tr id="row124571720564"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p124571719563"><a name="p124571719563"></a><a name="p124571719563"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p345827195611"><a name="p345827195611"></a><a name="p345827195611"></a>Data source IP address used for filtering</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1545818725617"><a name="p1545818725617"></a><a name="p1545818725617"></a>IP address or IP address + port</p>
</td>
</tr>
<tr id="row19458157125616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p1845816711568"><a name="p1845816711568"></a><a name="p1845816711568"></a>-s, --start-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p1544145713182"><a name="p1544145713182"></a><a name="p1544145713182"></a>Timestamp of the start time (in milliseconds) or the date-time format %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p1095712011916"><a name="p1095712011916"></a><a name="p1095712011916"></a>Positive integer or date-time format</p>
</td>
</tr>
<tr id="row14581773565"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="p84583710563"><a name="p84583710563"></a><a name="p84583710563"></a>-e, --end-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="p026554719114"><a name="p026554719114"></a><a name="p026554719114"></a>Timestamp of the end time (in milliseconds) or the date-time format %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="p52656471113"><a name="p52656471113"></a><a name="p52656471113"></a>Positive integer or date-time format</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--csv-dump-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Path to the exported CSV file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Troubleshooting<a name="EN-US_TOPIC_0000001364496017"></a>

-   If the analysis scenario fails, check that the configuration file path is correct and the configuration information is complete. Also, verify that the metric name and host address are accurate, and ensure that the metric data is available for the specified start and end times.
