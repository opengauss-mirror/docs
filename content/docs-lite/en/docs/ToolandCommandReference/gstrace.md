# gstrace<a name="EN-US_TOPIC_0000001197872989"></a>

## Function<a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_s1d88b9452b2d4c15811c8ad2670b7682"></a>

**gstrace**  is used to trace the kernel code execution path, record the kernel data structure, and analyze code performance. The limited trace points and data are fixed in the version and cannot be dynamically added or deleted.

>![](public_sys-resources/icon-warning.gif) **WARNING:** 
>1.  The data of the memory variable specified by the kernel dump is used for diagnosis and analysis. There is no behavior of directly specifying any register or memory address. The read memory addresses are hard-coded in the development phase, and no register or memory is read or modified randomly.
>2.  Trace points may involve sensitive data. Before collecting trace information, you need to negotiate with the customer and obtain authorization and permission.
>3.  openGauss does not dot sensitive information, and therefore does not trace user-related data.
>4.  The trace function is used only for diagnosis. Enabling the trace function affects the performance. The impact varies depending on the load and the trace module.
>5.  The permission of the Trace tool is  **0700**, which indicates read, write, and execution by database users only.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If the process is stopped abnormally, the  **gstrace\_trace\_cfg\_\***  file will exist in the  **/dev/shm**  directory. You can manually delete the file.

## Syntax<a name="en-us_topic_0287275941_en-us_topic_0237152426_section681720817204"></a>

```
gstrace [start|stop|config|dump|detailcodepath|analyze] [-p <port>][-s <BUFFER_SIZE>] [-f <DUMP_FILE>] [-o <OUTPUT_FILE>] [-t <STEP_SIZE>]
```

## Parameter Description<a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_se0ebdb25733f42f5b4286a1fc7e54a13"></a>

**Table  1**  gs\_trace parameters

<a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_t23767b731a7a45f09c53aed81e926bc8"></a>
<table><thead align="left"><tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r188ffec592514e99abaf1bc732cee3a5"><th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.3.1.1"><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="74.06%" id="mcps1.2.3.1.2"><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275941_en-us_topic_0237152426_row11827125619439"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p15830145612433"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p15830145612433"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p15830145612433"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p133635214218"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p133635214218"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p133635214218"></a>Starts to record trace information.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r65d586da5c9c4f8da0dc5dab60f2c818"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a>Stops the trace process and releases the shared memory trace buffer for storing information. Note: The trace information captured in the trace buffer will be lost.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r8e7b1a27e27d49e9b602e50973b412b3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_en-us_topic_0058968088_p485426916248"></a>config</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p25031714162217"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p25031714162217"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p25031714162217"></a>Displays trace configuration information.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r9a81825bfd004895bd49bb565f44e248"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p11540121819226"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p11540121819226"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p11540121819226"></a>dump</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p17479524192216"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p17479524192216"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p17479524192216"></a>Writes trace information in the shared memory to a specified file. If the trace is not started, an error is reported.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r3a4fdac5e343484e8e1591a6bb878cdf"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p694710363227"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p694710363227"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p694710363227"></a>Parses the dump binary file into a text file and displays the thread and time information of the trace point.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r2d33c4b669f14e4380c5068a444f0582"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p1333212342222"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p1333212342222"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p1333212342222"></a>codepath</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p14331133462214"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p14331133462214"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p14331133462214"></a>Extracts the function call information from the dump file and displays the information in the call stack mode.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r61bf02df0d904a1988a04a22027417ec"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p433083419226"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p433083419226"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p433083419226"></a>analyze</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p1132963412212"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p1132963412212"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p1132963412212"></a>Collects statistics on the number of execution times, total duration, average duration, maximum duration, and minimum duration of each function.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r4cd4463ebb5e4719ba97a9a170e1c336"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p15327334122215"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p15327334122215"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p15327334122215"></a>-p PORT</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p732613416227"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p732613416227"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p732613416227"></a>Specifies the listening port number of an instance on which the trace function is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_rf78e1c297caa4e1b8c449b6475e9457f"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p33241034112218"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p33241034112218"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p33241034112218"></a>-f DUMP_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p155451829202515"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p155451829202515"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p155451829202515"></a>Specifies the trace file exported by dump.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_rf1d87491bb174b2aa6a8008c2ec3e7d3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p11321173462215"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p11321173462215"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p11321173462215"></a>-o OUTPUT_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p832013402216"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p832013402216"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p832013402216"></a>Specifies the file to be written.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_en-us_topic_0059778103_r96238b14ad9a4a9e886adc9ae0cdd228"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p03185341227"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p03185341227"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p03185341227"></a>-t STEP_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p16317134152214"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p16317134152214"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p16317134152214"></a>Time span for fragment analysis, in seconds. This parameter is optional. A separate <strong id="b956564710291"><a name="b956564710291"></a><a name="b956564710291"></a>{OUTPUT_FILE}.step</strong> file will be generated.</p>
</td>
</tr>
<tr id="row19271527135319"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="p22713278539"><a name="p22713278539"></a><a name="p22713278539"></a>-m MASK</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="p1271527145315"><a name="p1271527145315"></a><a name="p1271527145315"></a>Specifies the modules and functions to be traced. If the parameter is left blank, all functions of all modules to which the trace interface is added are traced.</p>
<p id="p176851402914"><a name="p176851402914"></a><a name="p176851402914"></a>Format: [comp...] [ALL]. [func...] [ALL]</p>
<p id="p476815146299"><a name="p476815146299"></a><a name="p476815146299"></a>Description:</p>
<a name="ol17867103818444"></a><a name="ol17867103818444"></a><ol id="ol17867103818444"><li><strong id="b200380464161610"><a name="b200380464161610"></a><a name="b200380464161610"></a>comp</strong> indicates the module list, which is separated by commas (,), for example, <strong id="b30817595261610"><a name="b30817595261610"></a><a name="b30817595261610"></a>executer,kernel</strong>. You can also use a sequence number, for example, <strong id="b18541033103116"><a name="b18541033103116"></a><a name="b18541033103116"></a>executer,2</strong>.</li><li><strong id="b587231953519"><a name="b587231953519"></a><a name="b587231953519"></a>func</strong> indicates a function list, which is separated by commas (,). for example, <strong id="b5294105113213"><a name="b5294105113213"></a><a name="b5294105113213"></a>sql_execute_ddl, sql_execute_dcl</strong>. You can also use a sequence number to indicate the sequence of a function in a module, for example, <strong id="b113754020327"><a name="b113754020327"></a><a name="b113754020327"></a>2</strong>.</li><li>The value <strong id="b14730114316324"><a name="b14730114316324"></a><a name="b14730114316324"></a>ALL</strong> indicates that all modules or functions are traced.</li></ol>
<p id="p276921442916"><a name="p276921442916"></a><a name="p276921442916"></a>Example:</p>
<a name="ol2639601448"></a><a name="ol2639601448"></a><ol id="ol2639601448"><li><strong id="b186294855661610"><a name="b186294855661610"></a><a name="b186294855661610"></a>executer,kernel.ALL</strong>: All functions defined in the executer and kernel modules are traced.</li><li><strong id="b18528172683510"><a name="b18528172683510"></a><a name="b18528172683510"></a>executer,kernel.sql_execute_ddl</strong>: The function <strong id="b195281726163510"><a name="b195281726163510"></a><a name="b195281726163510"></a>sql_execute_ddl</strong> defined under executer is traced. The kernel module is ignored because it does not have the function.</li><li><strong id="b142601632461610"><a name="b142601632461610"></a><a name="b142601632461610"></a>executer,kernel.1</strong>: The first function in the executer and kernel modules is traced.</li></ol>
<p id="p176921422917"><a name="p176921422917"></a><a name="p176921422917"></a><strong id="b34565291961610"><a name="b34565291961610"></a><a name="b34565291961610"></a>ALL.1,2</strong>: The first and second functions in all modules are traced.</p>
</td>
</tr>
<tr id="en-us_topic_0287275941_en-us_topic_0237152426_row12693367813"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p43111434122216"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p43111434122216"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p43111434122216"></a>-s BUFFER_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275941_en-us_topic_0237152426_p5310203414226"><a name="en-us_topic_0287275941_en-us_topic_0237152426_p5310203414226"></a><a name="en-us_topic_0287275941_en-us_topic_0237152426_p5310203414226"></a>Specifies the size of the shared memory used for the trace function. The default value is 1 GB. If the specified value of BUFFER_SIZE is less than the minimum value 2048, the system automatically adjusts the value to the minimum value. If the value specified by BUFFER_SIZE is not 2^N (2 to the power of N), 2^N is aligned downwards. For example, if BUFFER_SIZE is set to 3072, the system changes the value to 2048 because 2^11 &lt; 3072 &lt; 2^12.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0287275941_en-us_topic_0237152426_section2838131051812"></a>

1.  Start the trace function.

    ```
    gstrace start -p 8000
    ```

2.  Stop the trace function.

    ```
    gstrace stop -p 8000
    ```

3.  Check the trace configuration information.

    ```
    gstrace config -p 8000
    ```

4.  dump trace

    ```
    gstrace dump -p 8000 -o /data/8000.dump
    ```

5.  Parse dump details.

    ```
    gstrace detail -f /data/8000.dump -o /data/8000.detail
    ```

6.  Parse dump codepath.

    ```
    gstrace codepath -f /data/8000.dump -o /data/8000.codepath
    ```

7.  Analyze global performance.

    ```
    gstrace analyze -f /data/8000.dump -o /data/8000.perf
    ```

8.  Analyze fragment performance.

    ```
    gstrace analyze -f /data/8000.dump -o /data/8000.perf -t 1
    ```


