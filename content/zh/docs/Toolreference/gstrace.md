# gstrace<a name="ZH-CN_TOPIC_0242223720"></a>

## 功能介绍<a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_s1d88b9452b2d4c15811c8ad2670b7682"></a>

gstrace是openGauss提供的用来跟踪内核代码执行路径，记录内核数据结构，分析代码性能的工具。Trace的有限点位和数据在版本中被固化，无法动态添加和删除。

>![](public_sys-resources/icon-warning.gif) **警告：**   
>1.  对内核dump指定内存变量的数据用于诊断分析，不存在直接指定任意寄存器或者内存地址的行为。读取的内存地址均是在开发阶段硬编码，没有任意地读取或者修改寄存器或内存的操作。  
>2.  Trace点可能涉及敏感数据，收集trace信息前需要同用户协商，授权和许可后方可收集。  
>3.  openGauss不会在敏感信息上打点，不会TRACE和用户相关的数据。  
>4.  Trace仅用于诊断目的，开启trace将对性能产生一定影响，影响的大小视负载的高低，trace的模块而不同。  
>5.  Trace工具的权限为0700，仅限于数据库用户读、写和执行。  

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果进程异常终止，/dev/shm/ 目录下将会有gstrace\_trace\_cfg\_\*残留，可以手动清除。  

## 语法<a name="zh-cn_topic_0237152426_section681720817204"></a>

```
gstrace [start|stop|config|dump|detailcodepath|analyze] [-p <pid>] [-m <MASK>] [-s <BUFFER_SIZE>] [-f <DUMP_FILE>] [-o <OUTPUT_FILE>] [-t <STEP_SIZE>]
```

## 参数说明<a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_se0ebdb25733f42f5b4286a1fc7e54a13"></a>

**表 1**  gs\_trace参数说明

<a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_t23767b731a7a45f09c53aed81e926bc8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r188ffec592514e99abaf1bc732cee3a5"><th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a5c967910f28a4a66bb9305b009489d36"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="74.06%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8fefacfdc99f49668d734bb253b62f94"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152426_row11827125619439"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p15830145612433"><a name="zh-cn_topic_0237152426_p15830145612433"></a><a name="zh-cn_topic_0237152426_p15830145612433"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p133635214218"><a name="zh-cn_topic_0237152426_p133635214218"></a><a name="zh-cn_topic_0237152426_p133635214218"></a>开始记录trace</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r65d586da5c9c4f8da0dc5dab60f2c818"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a6a197174fa6845f5a9302430adb2c86e"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a8b800d08df204d4c86033a1a6118d749"></a>停止trace，释放存储信息的共享内存trace buffer。注意：trace buffer中已捕获trace信息会丢失。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r8e7b1a27e27d49e9b602e50973b412b3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_zh-cn_topic_0058968088_p485426916248"></a>config</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p25031714162217"><a name="zh-cn_topic_0237152426_p25031714162217"></a><a name="zh-cn_topic_0237152426_p25031714162217"></a>显示trace的配置信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r9a81825bfd004895bd49bb565f44e248"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p11540121819226"><a name="zh-cn_topic_0237152426_p11540121819226"></a><a name="zh-cn_topic_0237152426_p11540121819226"></a>dump</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p17479524192216"><a name="zh-cn_topic_0237152426_p17479524192216"></a><a name="zh-cn_topic_0237152426_p17479524192216"></a>将共享内存中的trace信息写入指定文件。若没有启动trace将报错。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r3a4fdac5e343484e8e1591a6bb878cdf"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a><a name="zh-cn_topic_0237152426_zh-cn_topic_0059778103_a1d6c85beb1ba433fa3a7ef5105ea1cc6"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p694710363227"><a name="zh-cn_topic_0237152426_p694710363227"></a><a name="zh-cn_topic_0237152426_p694710363227"></a>将dump出来的二进制文件解析成文本文件，显示trace点的线程、时间信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r2d33c4b669f14e4380c5068a444f0582"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p1333212342222"><a name="zh-cn_topic_0237152426_p1333212342222"></a><a name="zh-cn_topic_0237152426_p1333212342222"></a>codepath</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p14331133462214"><a name="zh-cn_topic_0237152426_p14331133462214"></a><a name="zh-cn_topic_0237152426_p14331133462214"></a>提取dump文件中的函数调用信息，按照调用栈的方式显示。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r61bf02df0d904a1988a04a22027417ec"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p433083419226"><a name="zh-cn_topic_0237152426_p433083419226"></a><a name="zh-cn_topic_0237152426_p433083419226"></a>analyze</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p1132963412212"><a name="zh-cn_topic_0237152426_p1132963412212"></a><a name="zh-cn_topic_0237152426_p1132963412212"></a>统计各个函数的执行次数、总耗时、平均耗时、最长耗时、最短耗时</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r4cd4463ebb5e4719ba97a9a170e1c336"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p15327334122215"><a name="zh-cn_topic_0237152426_p15327334122215"></a><a name="zh-cn_topic_0237152426_p15327334122215"></a>-p PID</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p732613416227"><a name="zh-cn_topic_0237152426_p732613416227"></a><a name="zh-cn_topic_0237152426_p732613416227"></a>指定启动trace功能的实例进程号</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_rf78e1c297caa4e1b8c449b6475e9457f"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p33241034112218"><a name="zh-cn_topic_0237152426_p33241034112218"></a><a name="zh-cn_topic_0237152426_p33241034112218"></a>-f DUMP_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p155451829202515"><a name="zh-cn_topic_0237152426_p155451829202515"></a><a name="zh-cn_topic_0237152426_p155451829202515"></a>指定dump导出的trace文件</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_rf1d87491bb174b2aa6a8008c2ec3e7d3"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p11321173462215"><a name="zh-cn_topic_0237152426_p11321173462215"></a><a name="zh-cn_topic_0237152426_p11321173462215"></a>-o OUTPUT_FILE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p832013402216"><a name="zh-cn_topic_0237152426_p832013402216"></a><a name="zh-cn_topic_0237152426_p832013402216"></a>指定写入的文件</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_r96238b14ad9a4a9e886adc9ae0cdd228"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p03185341227"><a name="zh-cn_topic_0237152426_p03185341227"></a><a name="zh-cn_topic_0237152426_p03185341227"></a>-t STEP_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p16317134152214"><a name="zh-cn_topic_0237152426_p16317134152214"></a><a name="zh-cn_topic_0237152426_p16317134152214"></a>指定分片分析的时间跨度（秒）,可选。将生成单独的{OUTPUT_FILE}.step文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_zh-cn_topic_0059778103_rcb882095a95d4701926e29b2389d7316"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p1231583482213"><a name="zh-cn_topic_0237152426_p1231583482213"></a><a name="zh-cn_topic_0237152426_p1231583482213"></a>-m MASK</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p203221034172211"><a name="zh-cn_topic_0237152426_p203221034172211"></a><a name="zh-cn_topic_0237152426_p203221034172211"></a>指定哪些模块、函数需要追踪，如果参数为空，则追踪添加trace接口的所有模块的所有函数。</p>
<p id="zh-cn_topic_0237152426_p176851402914"><a name="zh-cn_topic_0237152426_p176851402914"></a><a name="zh-cn_topic_0237152426_p176851402914"></a>格式:：[comp…][ALL].[func…][ALL]</p>
<p id="zh-cn_topic_0237152426_p476815146299"><a name="zh-cn_topic_0237152426_p476815146299"></a><a name="zh-cn_topic_0237152426_p476815146299"></a>描述：</p>
<a name="zh-cn_topic_0237152426_ol17867103818444"></a><a name="zh-cn_topic_0237152426_ol17867103818444"></a><ol id="zh-cn_topic_0237152426_ol17867103818444"><li>comp 是模块列表，使用‘,’分隔，例如：executer,<span id="text1145103312459"><a name="text1145103312459"></a><a name="text1145103312459"></a>opengauss</span>。也可以使用序号，例如：executer,2</li><li>func 是function列表，使用‘,’ 分隔。 例如：sql_execute_ddl, sql_execute_dcl。也可以使用序号指代模块中第几个function，例如：2</li><li>设置成ALL表示所有模块或所有function被trace。</li></ol>
<p id="zh-cn_topic_0237152426_p276921442916"><a name="zh-cn_topic_0237152426_p276921442916"></a><a name="zh-cn_topic_0237152426_p276921442916"></a>示例：</p>
<a name="zh-cn_topic_0237152426_ol2639601448"></a><a name="zh-cn_topic_0237152426_ol2639601448"></a><ol id="zh-cn_topic_0237152426_ol2639601448"><li>executer,<span id="text840843412455"><a name="text840843412455"></a><a name="text840843412455"></a>opengauss</span>.ALL ：所有定义定义在executer和<span id="text639943504519"><a name="text639943504519"></a><a name="text639943504519"></a>opengauss</span>模块下的function被trace。</li><li>executer,<span id="text203100369453"><a name="text203100369453"></a><a name="text203100369453"></a>opengauss</span>.sql_execute_ddl ：定义在executer 下的Function sql_execute_ddl被trace. <span id="text153928377459"><a name="text153928377459"></a><a name="text153928377459"></a>opengauss</span>模块被忽略，因为下面没有该function 。</li><li>executer,<span id="text1331543812453"><a name="text1331543812453"></a><a name="text1331543812453"></a>opengauss</span>.1 ：定义在模块executer和 <span id="text13551939114511"><a name="text13551939114511"></a><a name="text13551939114511"></a>opengauss</span> 下的第一个function被trace。</li></ol>
<p id="zh-cn_topic_0237152426_p176921422917"><a name="zh-cn_topic_0237152426_p176921422917"></a><a name="zh-cn_topic_0237152426_p176921422917"></a>ALL.1,2 ：定义在所有模块下的第一，二个function被trace。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152426_row12693367813"><td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152426_p43111434122216"><a name="zh-cn_topic_0237152426_p43111434122216"></a><a name="zh-cn_topic_0237152426_p43111434122216"></a>-s BUFFER_SIZE</p>
</td>
<td class="cellrowborder" valign="top" width="74.06%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152426_p5310203414226"><a name="zh-cn_topic_0237152426_p5310203414226"></a><a name="zh-cn_topic_0237152426_p5310203414226"></a>指定用于trace功能的共享内存大小，默认为1G，该值需要为2的倍数，如果不是则会补齐为2的倍数。</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0237152426_section2838131051812"></a>

1.  启动trace

    ```
    gstrace start -p 207787
    ```

2.  停止trace

    ```
    gstarce stop -p 207787
    ```

3.  查看trace配置

    ```
    gstrace config -p 207787
    ```

4.  dump trace

    ```
    gstrace dump -p 207787 -o /data/207787.dump
    ```

5.  解析dump detail信息

    ```
    gstrace detail -f /data/207787.dump -o /data/207787.detail
    ```

6.  解析dump codepath

    ```
    gstrace codepath -f /data/207787.dump -o /data/207787.codepath
    ```

7.  分析全局性能

    ```
    gstrace analyze -f /data/207787.dump -o /data/207787.perf
    ```

8.  分析分片性能

    ```
    gstrace analyze -f /data/207787.dump -o /data/207787.perf -t 1
    ```


