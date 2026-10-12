# gstrace

## Background<a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_s1d88b9452b2d4c15811c8ad2670b7682"></a>

`gstrace` is a tool provided by openGauss to trace kernel code execution paths, record kernel data structures, and analyze code performance. The trace points and their captured data are fixed in the release and cannot be dynamically added or removed.

>[!WARNING] Warning
>
>1. gstrace dumps specified memory variables from the kernel for diagnostic analysis. It does not directly access arbitrary registers or memory addresses. All memory addresses read are hardcoded during development. There is no arbitrary read or modification of registers or memory.
>2. Trace points may involve sensitive data. Before collecting trace information, you must negotiate with the user and obtain authorization and permission.
>3. openGauss does not place trace points on sensitive information and will not trace user-related data.
>4. Trace is for diagnostic purposes only. Enabling trace will impact performance. The extent of the impact varies depending on the workload and the traced modules.
>5. The permission of the trace tool is 0700, restricted to read, write, and execute by the database user only.

>[!NOTE] Note
> If a process terminates abnormally, residual files named `gstrace\_trace\_cfg\_\*` may remain in the `/dev/shm/` directory. These can be removed manually.

## Syntax<a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_section681720817204"></a>

```
gstrace [start|stop|config|dump|detailcodepath|analyze] [-p <port>][-s <BUFFER_SIZE>] [-f <DUMP_FILE>] [-o <OUTPUT_FILE>] [-t <STEP_SIZE>]
```

## Parameter Description<a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_se0ebdb25733f42f5b4286a1fc7e54a13"></a>

**Table 1**  gstrace Parameter Description

<a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_t23767b731a7a45f09c53aed81e926bc8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r188ffec592514e99abaf1bc732cee3a5"><th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="74.06%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_row11827125619439"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15830145612433"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15830145612433"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15830145612433"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p133635214218"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p133635214218"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p133635214218"></a>Start recording trace.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r65d586da5c9c4f8da0dc5dab60f2c818"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a>Stop trace and release the shared memory trace buffer used to store trace information. Note: Any captured trace information in the trace buffer will be lost.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r8e7b1a27e27d49e9b602e50973b412b3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"></a>config</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p25031714162217"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p25031714162217"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p25031714162217"></a>Display the trace configuration.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r9a81825bfd004895bd49bb565f44e248"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11540121819226"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11540121819226"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11540121819226"></a>dump</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p17479524192216"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p17479524192216"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p17479524192216"></a>Write trace information from the shared memory to the specified file. An error will be reported if trace is not started.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r3a4fdac5e343484e8e1591a6bb878cdf"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p694710363227"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p694710363227"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p694710363227"></a>Parse the dumped binary file into a text file, displaying thread and timing information of trace points.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r2d33c4b669f14e4380c5068a444f0582"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1333212342222"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1333212342222"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1333212342222"></a>codepath</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p14331133462214"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p14331133462214"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p14331133462214"></a>Extract function call information from the dump file and display it in a call stack format.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r61bf02df0d904a1988a04a22027417ec"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p433083419226"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p433083419226"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p433083419226"></a>analyze</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1132963412212"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1132963412212"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p1132963412212"></a>Collect statistics on the execution count, total time, average time, maximum time, and minimum time of each function.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r4cd4463ebb5e4719ba97a9a170e1c336"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15327334122215"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15327334122215"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p15327334122215"></a>-p PORT</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p732613416227"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p732613416227"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p732613416227"></a>Specify the listening port number of the instance where trace is enabled.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_rf78e1c297caa4e1b8c449b6475e9457f"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p33241034112218"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p33241034112218"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p33241034112218"></a>-f DUMP_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p155451829202515"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p155451829202515"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p155451829202515"></a>Specify the trace file exported by dump.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_rf1d87491bb174b2aa6a8008c2ec3e7d3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11321173462215"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11321173462215"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p11321173462215"></a>-o OUTPUT_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p832013402216"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p832013402216"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p832013402216"></a>Specify the output file.</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_zh-cn_topic_0059778103_r96238b14ad9a4a9e886adc9ae0cdd228"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p03185341227"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p03185341227"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p03185341227"></a>-t STEP_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p16317134152214"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p16317134152214"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p16317134152214"></a>Specify the time span (in seconds) for slice analysis, optional. A separate `{OUTPUT_FILE}.step` file will be generated.</p>
</td>
</tr>
<tr id="row19271527135319"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="p22713278539"><a name="p22713278539"></a><a name="p22713278539"></a>-m MASK</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="p1271527145315"><a name="p1271527145315"></a><a name="p1271527145315"></a>Specify which modules and functions need to be traced. This parameter must not be empty.</p>
<p id="p176851402914"><a name="p176851402914"></a><a name="p176851402914"></a>Format:  &lt;COMP_FUNC_PAIR&gt; [,&lt;COMP_FUNC_PAIR&gt;]* </p>
<p id="p476815146299"><a name="p476815146299"></a><a name="p476815146299"></a>Description:</p>
<a name="ul191841558155417"></a><a name="ul191841558155417"></a><ul id="ul191841558155417"><li><strong id="b1695325612511"><a name="b1695325612511"></a><a name="b1695325612511"></a>&lt;COMP_FUNC_PAIR&gt;</strong> -&gt; &lt;COMP_NAME&gt;.&lt;FUNC_NAME&gt; <br/>
COMP_FUNC_PAIR represents a combination of a module and a function.</li>
<li><strong id="b1980614542618"><a name="b1980614542618"></a><a name="b1980614542618"></a>COMP_NAME</strong> represents a module name.</li>
<li><strong id="b146761139285"><a name="b146761139285"></a><a name="b146761139285"></a>&lt;FUNC_NAMES&gt;</strong> -&gt; ALL|[[&lt;FUNC_NAME&gt;[&amp;&lt;FUNC_NAME&gt;]*]<br/>
<strong id="b199731552152717"><a name="b199731552152717"></a><a name="b199731552152717"></a>FUNC_NAMES</strong> can be specified by the user as ALL or one or more function names. Since `FUNC_NAMES` is always combined with `COMP_NAME`, `ALL` means tracing all functions in the module named `COMP_NAME`; if the user specifies one or more function names, it means tracing only the specified `FUNC_NAMEs` in the module named `COMP_NAME`.</li></ul>

<p id="p276921442916"><a name="p276921442916"></a><a name="p276921442916"></a>Examples:</p>
<a name="ul31951366551"></a><a name="ul31951366551"></a><ul id="ul31951366551"><li><strong id="b351614415298"><a name="b351614415298"></a><a name="b351614415298"></a>access.StartTransaction</strong>: Trace the function `StartTransaction` in the module access.</li>
<li><strong id="b1628374782920"><a name="b1628374782920"></a><a name="b1628374782920"></a>executer.ExecutorStart&amp;ExecInitExpr</strong>: Trace the functions `ExecutorStart` and `ExecInitExpr` in the module executer.</li>
<li><strong id="b1140325793010"><a name="b1140325793010"></a><a name="b1140325793010"></a>executer.ExecutorStart,tcop.PortalStart&amp;PortalRun</strong>: Trace the function `ExecutorStart` in the module executer, and the functions `PortalStart` and `PortalRun` in the module tcop.</li>
<li><strong id="b1622513344314"><a name="b1622513344314"></a><a name="b1622513344314"></a>executer.ALL,access.ALL</strong>: Trace all functions in the modules executer and access.</li></ul>

</td>
</tr>
<tr id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_row12693367813"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p43111434122216"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p43111434122216"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p43111434122216"></a>-s BUFFER_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p5310203414226"><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p5310203414226"></a><a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_p5310203414226"></a>Specify the shared memory size for the trace function. The default is 1 GB. If the specified `BUFFER_SIZE` is less than the minimum value of 2048, the system will automatically adjust it to the minimum value. If the specified `BUFFER_SIZE` is not 2^N (power of two), it will be rounded down to 2^N; for example, if `BUFFER_SIZE=3072` is specified, since 2^11 &lt; 3072 &lt; 2^12, the system will adjust it to 2048.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="zh-cn_topic_0287275941_zh-cn_topic_0237152426_section2838131051812"></a>

1. Start trace

    ```
    gstrace start -p 8000
    ```

2. Stop trace

    ```
    gstrace stop -p 8000
    ```

3. View trace configuration

    ```
    gstrace config -p 8000
    ```

4. Dump trace

    ```
    gstrace dump -p 8000 -o /data/8000.dump
    ```

5. Parse dump detail information

    ```
    gstrace detail -f /data/8000.dump -o /data/8000.detail
    ```

6. Parse dump codepath

    ```
    gstrace codepath -f /data/8000.dump -o /data/8000.codepath
    ```

7. Analyze overall performance

    ```
    gstrace analyze -f /data/8000.dump -o /data/8000.perf
    ```

8. Analyze slice performance

    ```
    gstrace analyze -f /data/8000.dump -o /data/8000.perf -t 1
    ```
