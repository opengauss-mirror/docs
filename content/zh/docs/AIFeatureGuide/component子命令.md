# component子命令<a name="ZH-CN_TOPIC_0000002293307665"></a>

该子命令可以用于启动DBMind的子组件（或插件），包括可用于监控指标的exporter，以及AI功能等。该命令可以将用户通过命令行传入的命令转发给对应的子组件，故不同的子组件命令需参考其功能的对应说明，详见后文各个子组件对应章节，此处不再赘述。

## 命令参考<a name="zh-cn_topic_0000002242300305_section826919344421"></a>

用户可以通过“--help”选项获得该模式的帮助信息，例如：

```
gs_dbmind component --help
```

```
usage:  component [-h] COMPONENT_NAME ...

positional arguments:
  COMPONENT_NAME  choice a component to start. For centralized/distributed instance: ['anomaly_detection', 'cluster_diagnosis', 'cmd_exporter', 'dkr', 'extract_log', 'index_advisor', 'opengauss_exporter',
                  'reprocessing_exporter', 'slow_query_diagnosis', 'sql_rewriter', 'sqldiag', 'xtuner'], for cloud-native instance: ['opengauss_exporter', 'reprocessing_exporter', 'sqldiag']
  ARGS            arguments for the component to start

optional arguments:
  -h, --help      show this help message and exit
```

**表 1**  gs\_dbmind component 子命令说明

<a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p1129138144517"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p1129138144517"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p1129138144517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p2029181454"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p2029181454"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p2029181454"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p6291382451"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p6291382451"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p6291382451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000002242300305_row16616112314312"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300305_p6616122313314"><a name="zh-cn_topic_0000002242300305_p6616122313314"></a><a name="zh-cn_topic_0000002242300305_p6616122313314"></a>COMPONENT_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300305_p5616423334"><a name="zh-cn_topic_0000002242300305_p5616423334"></a><a name="zh-cn_topic_0000002242300305_p5616423334"></a>子组件（即插件）名。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300305_p62652356253"><a name="zh-cn_topic_0000002242300305_p62652356253"></a><a name="zh-cn_topic_0000002242300305_p62652356253"></a>'opengauss_exporter', 'reprocessing_exporter', 'sqldiag'</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300305_row185495841018"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300305_p279475074419"><a name="zh-cn_topic_0000002242300305_p279475074419"></a><a name="zh-cn_topic_0000002242300305_p279475074419"></a>ARGS</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300305_p179375010446"><a name="zh-cn_topic_0000002242300305_p179375010446"></a><a name="zh-cn_topic_0000002242300305_p179375010446"></a>子组件的参数。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300305_p1979295084412"><a name="zh-cn_topic_0000002242300305_p1979295084412"></a><a name="zh-cn_topic_0000002242300305_p1979295084412"></a>参考子组件的命令说明。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p132968134510"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p132968134510"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p132968134510"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p152474092416"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p152474092416"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p152474092416"></a>帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p94668717174"><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p94668717174"></a><a name="zh-cn_topic_0000002242300305_zh-cn_topic_0283137337_p94668717174"></a>-</p>
</td>
</tr>
</tbody>
</table>

