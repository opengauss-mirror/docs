# gstrace<a name="EN-US_TOPIC_0249632236"></a>

## Function Description<a name="en-us_topic_0237152426_en-us_topic_0059778103_s1d88b9452b2d4c15811c8ad2670b7682"></a>

**gstrace**, provided by openGauss, is used to trace the kernel code execution path, record kernel data structure, and analyze code performance. The number of trace points and data are fixed in the version and cannot be dynamically added or deleted.

>![](public_sys-resources/icon-warning.gif) **WARNING:** 
>1.  The specified memory variables dumped from the kernel are used only for diagnosis and analysis. Registers or memory addresses will not be randomly and directly specified. The read memory addresses are hard-coded in the development, and no register or memory is read or modified randomly.
>2.  Trace points may involve sensitive data. Before collecting information to be traced, you need to obtain authorization and permission from the customer.
>3.  openGauss does not point on sensitive information or trace user-related data.
>4.  The trace is used only for diagnosis. Enabling the trace function affects the performance, and the impact depends on the load and the modules to be traced.
>5.  The permission of the trace tool is  **0700**, which indicates that only database users can read, write, and execute the trace tool.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If the process is stopped abnormally, the  **gstrace\_trace\_cfg\_**_\*_  file will exist in the  **/dev/shm**  directory. You can manually delete the file.

## Syntax<a name="en-us_topic_0237152426_section681720817204"></a>

```
gstrace [start|stop|config|dump|detailcodepath|analyze] [-p <pid>][-s <BUFFER_SIZE>] [-f <DUMP_FILE>] [-o <OUTPUT_FILE>] [-t <STEP_SIZE>]
```

## Parameter Description<a name="en-us_topic_0237152426_en-us_topic_0059778103_se0ebdb25733f42f5b4286a1fc7e54a13"></a>

**Table  1**  gs\_trace parameters

<a name="en-us_topic_0237152426_en-us_topic_0059778103_t23767b731a7a45f09c53aed81e926bc8"></a>
<table><thead align="left"><tr id="en-us_topic_0237152426_en-us_topic_0059778103_r188ffec592514e99abaf1bc732cee3a5"><th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"><a name="en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="74.06%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"><a name="en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152426_row11827125619439"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p15830145612433"><a name="en-us_topic_0237152426_p15830145612433"></a><a name="en-us_topic_0237152426_p15830145612433"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p133635214218"><a name="en-us_topic_0237152426_p133635214218"></a><a name="en-us_topic_0237152426_p133635214218"></a>Starts tracing.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r65d586da5c9c4f8da0dc5dab60f2c818"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"><a name="en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"><a name="en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a>Stops tracing and releases the shared memory trace buffer. Note: This will cause the traced information in the trace buffer to be lost.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r8e7b1a27e27d49e9b602e50973b412b3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"><a name="en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"></a>config</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p25031714162217"><a name="en-us_topic_0237152426_p25031714162217"></a><a name="en-us_topic_0237152426_p25031714162217"></a>Displays configurations of the tracing tool.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r9a81825bfd004895bd49bb565f44e248"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p11540121819226"><a name="en-us_topic_0237152426_p11540121819226"></a><a name="en-us_topic_0237152426_p11540121819226"></a>dump</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p17479524192216"><a name="en-us_topic_0237152426_p17479524192216"></a><a name="en-us_topic_0237152426_p17479524192216"></a>Writes the traced information frm the shared memory to a specified file. If the tracing is not started, an error message will be displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r3a4fdac5e343484e8e1591a6bb878cdf"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"><a name="en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a><a name="en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p694710363227"><a name="en-us_topic_0237152426_p694710363227"></a><a name="en-us_topic_0237152426_p694710363227"></a>Parses the dumped binary file to a text file, so that traced threads and time information are displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r2d33c4b669f14e4380c5068a444f0582"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p1333212342222"><a name="en-us_topic_0237152426_p1333212342222"></a><a name="en-us_topic_0237152426_p1333212342222"></a>codepath</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p14331133462214"><a name="en-us_topic_0237152426_p14331133462214"></a><a name="en-us_topic_0237152426_p14331133462214"></a>Extracts the function calling information from the dumped file and displays the information in the call stack mode.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r61bf02df0d904a1988a04a22027417ec"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p433083419226"><a name="en-us_topic_0237152426_p433083419226"></a><a name="en-us_topic_0237152426_p433083419226"></a>analyze</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p1132963412212"><a name="en-us_topic_0237152426_p1132963412212"></a><a name="en-us_topic_0237152426_p1132963412212"></a>Collects statistics on the number of execution times, total duration, average duration, maximum duration, and minimum duration of each function.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r4cd4463ebb5e4719ba97a9a170e1c336"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p15327334122215"><a name="en-us_topic_0237152426_p15327334122215"></a><a name="en-us_topic_0237152426_p15327334122215"></a>-p PID</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p732613416227"><a name="en-us_topic_0237152426_p732613416227"></a><a name="en-us_topic_0237152426_p732613416227"></a>Specifies the process ID of the instance for which the trace function is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_rf78e1c297caa4e1b8c449b6475e9457f"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p33241034112218"><a name="en-us_topic_0237152426_p33241034112218"></a><a name="en-us_topic_0237152426_p33241034112218"></a>-f DUMP_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p155451829202515"><a name="en-us_topic_0237152426_p155451829202515"></a><a name="en-us_topic_0237152426_p155451829202515"></a>Specifies the trace file to be dumped.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_rf1d87491bb174b2aa6a8008c2ec3e7d3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p11321173462215"><a name="en-us_topic_0237152426_p11321173462215"></a><a name="en-us_topic_0237152426_p11321173462215"></a>-o OUTPUT_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p832013402216"><a name="en-us_topic_0237152426_p832013402216"></a><a name="en-us_topic_0237152426_p832013402216"></a>Specifies the file to be written.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_en-us_topic_0059778103_r96238b14ad9a4a9e886adc9ae0cdd228"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p03185341227"><a name="en-us_topic_0237152426_p03185341227"></a><a name="en-us_topic_0237152426_p03185341227"></a>-t STEP_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p16317134152214"><a name="en-us_topic_0237152426_p16317134152214"></a><a name="en-us_topic_0237152426_p16317134152214"></a>Specifies the time span for segment analysis, in seconds. This parameter is optional. A separate <em id="i1518714141418"><a name="i1518714141418"></a><a name="i1518714141418"></a>{OUTPUT_FILE}</em><strong id="b925810461417"><a name="b925810461417"></a><a name="b925810461417"></a>.step</strong> file will be generated.</p>
</td>
</tr>
<tr id="en-us_topic_0237152426_row12693367813"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152426_p43111434122216"><a name="en-us_topic_0237152426_p43111434122216"></a><a name="en-us_topic_0237152426_p43111434122216"></a>-s BUFFER_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152426_p5310203414226"><a name="en-us_topic_0237152426_p5310203414226"></a><a name="en-us_topic_0237152426_p5310203414226"></a>Specifies the size of the shared memory used for the trace function. The default value is 1 GB. The value must be a multiple of 2. If the value is not a multiple of 2, the value will be supplemented to a multiple of 2.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0237152426_section2838131051812"></a>

1.  Start the tracing.

    ```
    gstrace start -p 207787
    ```

2.  Stop the tracing.

    ```
    gstrace stop -p 207787
    ```

3.  Check the configurations for tracing.

    ```
    gstrace config -p 207787
    ```

4.  dump trace

    ```
    gstrace dump -p 207787 -o /data/207787.dump
    ```

5.  Parses dumped details.

    ```
    gstrace detail -f /data/207787.dump -o /data/207787.detail
    ```

6.  Parse dumped codepath.

    ```
    gstrace codepath -f /data/207787.dump -o /data/207787.codepath
    ```

7.  Analyze the global performance.

    ```
    gstrace analyze -f /data/207787.dump -o /data/207787.perf
    ```

8.  Analyze the segment performance.

    ```
    gstrace analyze -f /data/207787.dump -o /data/207787.perf -t 1
    ```


