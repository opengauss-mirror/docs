# Forecast<a name="EN-US_TOPIC_0000001195431216"></a>

## Overview<a name="EN-US_TOPIC_0000001240671135"></a>

The trend prediction module predicts the future time series change trend based on historical time series data. The framework of this module has been decoupled to flexibly change prediction algorithms. This module can automatically select algorithms for different feature time series. The LR regression algorithm for linear feature time series prediction and the ARIMA algorithm for non-linear feature prediction are supported. At present, this module can cover the accurate prediction of linear time series, non-linear time series and periodic time series.

## Environment Deployment <a name="EN-US_TOPIC_0000001195591192"></a>

The metric collection system is running properly.

## Usage Guide<a name="EN-US_TOPIC_0000001240944983"></a>

Assume that the  **confpath**  configuration file directory has been initialized.

- Run the following command to start only the slow SQL diagnosis function (the number of root causes for slow SQL diagnosis is determined by the algorithm running result and is not fixed). For more usage, see the description of the **service** subcommand.

    ```
    gs_dbmind service start -c confpath --only-run slow_query_diagnosis
    ```

- Run the following command to query the diagnosis history of slow SQL statements:

    ```
    gs_dbmind component slow_query_diagnosis show -c confpath --query SQL --start-time timestamps0 --end-time timestamps1
    ```

- Run the following command to diagnose slow SQL statements in interactive mode:

    ```
    gs_dbmind component slow_query_diagnosis diagnosis -c confpath --database dbname --schema schema_name --query SQL
    ```

- Run the following command to manually clear historical prediction results:

    ```
    gs_dbmind component slow_query_diagnosis clean -c confpath --retention-days DAYS
    ```

- Run the following command to stop the services that have been started:

    ```
    gs_dbmind service stop -c confpath
    ```

## Obtaining Help Information<a name="EN-US_TOPIC_0000001240351149"></a>

You can run the  **--help**  command to obtain the help information. For example:

```
gs_dbmind component forecast --help
```

```
usage: forecast.py [-h] -c DIRECTORY [--metric-name METRIC_NAME] [--host HOST]
                   [--labels LABELS] [--start-time TIMESTAMP_IN_MICROSECONDS]
                   [--end-time TIMESTAMP_IN_MICROSECONDS]
                   [--retention-days DAYS] [--upper UPPER] [--lower LOWER]
                   [--warning-hours WARNING-HOURS]
                   [--csv-dump-path CSV_DUMP_PATH]
                   {show,clean,early-warning}

Workload Forecasting: Forecast monitoring metrics

positional arguments:
  {show,clean,early-warning}
                        Choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        Set the directory of configuration files
  --metric-name METRIC_NAME
                        Set a metric name you want to retrieve
  --host HOST           Set a host you want to retrieve. IP only or IP with
                        port.
  --labels LABELS       A list of label (format is label=name) separated by
                        comma(,). Using in warning.
  --start-time TIMESTAMP_IN_MICROSECONDS
                        Set a start time for retrieving, supporting UNIX-
                        timestamp with microsecond or datetime format
  --end-time TIMESTAMP_IN_MICROSECONDS
                        Set an end time for retrieving, supporting UNIX-
                        timestamp with microsecond or datetime format
  --retention-days DAYS
                        Clear historical diagnosis results and set the maximum
                        number of days to retain data
  --upper UPPER         The upper value of early-warning. Using in warning.
  --lower LOWER         The lower value of early-warning. Using in warning.
  --warning-hours WARNING-HOURS
                        warning length, unit is hour.
  --csv-dump-path CSV_DUMP_PATH
                        Dump the result CSV file to the path if it is
                        specified. Use in warning.
```

## Command Reference<a name="EN-US_TOPIC_0000001195271250"></a>

**Table  1**  gs\_dbmind component forecast parameters

<a name="table99309405415"></a>
<table><thead align="left"><tr id="row1693034011419"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p893012401447"><a name="p893012401447"></a><a name="p893012401447"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p129305403416"><a name="p129305403416"></a><a name="p129305403416"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p693018405410"><a name="p693018405410"></a><a name="p693018405410"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row5930174015412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p149307406411"><a name="p149307406411"></a><a name="p149307406411"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p179309401845"><a name="p179309401845"></a><a name="p179309401845"></a>Help information</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p39301240440"><a name="p39301240440"></a><a name="p39301240440"></a>-</p>
</td>
</tr>
<tr id="row12300134621117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87747524110"><a name="p87747524110"></a><a name="p87747524110"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14426194115176"><a name="p14426194115176"></a><a name="p14426194115176"></a>Action parameter</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul950211292914"></a><a name="ul950211292914"></a><ul id="ul950211292914"><li><strong id="b2015101719218"><a name="b2015101719218"></a><a name="b2015101719218"></a>show</strong>: displays results.</li><li><strong id="b319914201826"><a name="b319914201826"></a><a name="b319914201826"></a>clean</strong>: clears results.</li></ul>
</td>
</tr>
<tr id="row11910554101219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1133111208135"><a name="p1133111208135"></a><a name="p1133111208135"></a>-c, --conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18143163410134"><a name="p18143163410134"></a><a name="p18143163410134"></a>Configuration directory</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1616065113189"><a name="p1616065113189"></a><a name="p1616065113189"></a>-</p>
</td>
</tr>
<tr id="row1293018401245"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5441135310139"><a name="p5441135310139"></a><a name="p5441135310139"></a>--metric-name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p159301401846"><a name="p159301401846"></a><a name="p159301401846"></a>Specifies the metric name to be displayed, which is used for filtering.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2620105261812"><a name="p2620105261812"></a><a name="p2620105261812"></a>-</p>
</td>
</tr>
<tr id="row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p25301029171419"><a name="p25301029171419"></a><a name="p25301029171419"></a>--host</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3530729111413"><a name="p3530729111413"></a><a name="p3530729111413"></a>Specifies the service IP address and port number, which is used for filtering.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2800853131818"><a name="p2800853131818"></a><a name="p2800853131818"></a>-</p>
</td>
</tr>
<tr id="row627105315153"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p192811539157"><a name="p192811539157"></a><a name="p192811539157"></a>--start-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1544145713182"><a name="p1544145713182"></a><a name="p1544145713182"></a>Timestamp of the start time, in milliseconds. Alternatively, the date and time format is %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1095712011916"><a name="p1095712011916"></a><a name="p1095712011916"></a>Positive integer or date and time format</p>
</td>
</tr>
<tr id="row81421205167"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1114219081616"><a name="p1114219081616"></a><a name="p1114219081616"></a>--end-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18836027812"><a name="p18836027812"></a><a name="p18836027812"></a>Timestamp of the start time, in milliseconds. Alternatively, the date and time format is %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18836027812"><a name="p18836027812"></a><a name="p18836027812"></a>Timestamp of the start time, in milliseconds. Alternatively, the date and time format is %Y-%m-%d %H:%M:%S.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--retention-days</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Number of days retaining results</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>Non-negative real number</p>
</td>
</tr>
</tbody>
</table>

## Troubleshooting<a name="EN-US_TOPIC_0000001240471119"></a>

- Considering the actual service and model prediction effect, you are advised to set the trend prediction duration to a value greater than 3600 seconds. \(If the metric collection period is 15 seconds, the number of data records collected is 240.\) Otherwise, the prediction effect will deteriorate, and the service will be abnormal when the data volume is extremely small. The default value is 3600 seconds.
- After the parameters in the configuration file are reset, you need to restart the service process for the settings to take effect.
