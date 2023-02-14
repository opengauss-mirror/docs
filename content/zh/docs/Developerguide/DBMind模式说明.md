# DBMind模式说明

用户可通过gs\_dbmind命令调用AI4DB的全部功能，该命令可实现下列基本功能：

-   服务功能：service子命令，包括创建并初始化配置目录、启动后台服务、关闭后台服务等；
-   调用组件：component子命令，AI4DB功能（如索引推荐、参数调优等）可通过该模式进行即时调用；
-   设置参数：set子命令，通过该命令，可以一键修改配置目录中的配置文件值；当然，用户也可以通过文本编辑器进行手动修改；

用户可以通过 --help 选项获得上述模式的帮助信息，例如：

```
gs_dbmind --help
```

```
usage: [-h] [--version] {service,set,component} ...

openGauss DBMind: An autonomous platform for openGauss

optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit

available subcommands:
  {service,set,component}
                        type '<subcommand> -h' for help on a specific subcommand
    service             send a command to DBMind to change the status of the service
    set                 set a parameter
    component           pass command line arguments to each sub-component.
```

**表 1**  gs\_dbmind 选项基本说明

<a name="table228121144819"></a>
<table><thead align="left"><tr id="row172811194811"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="p7281141184818"><a name="p7281141184818"></a><a name="p7281141184818"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="p1928151114811"><a name="p1928151114811"></a><a name="p1928151114811"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p19281114488"><a name="p19281114488"></a><a name="p19281114488"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row52810164812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p7940121011519"><a name="p7940121011519"></a><a name="p7940121011519"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p17945141410512"><a name="p17945141410512"></a><a name="p17945141410512"></a>帮助命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p76275142302"><a name="p76275142302"></a><a name="p76275142302"></a>-</p>
</td>
</tr>
<tr id="row6281141134812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p1349818310513"><a name="p1349818310513"></a><a name="p1349818310513"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p142813134819"><a name="p142813134819"></a><a name="p142813134819"></a>版本号</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12626714113016"><a name="p12626714113016"></a><a name="p12626714113016"></a>-</p>
</td>
</tr>
<tr id="row1028116154811"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p1328141124810"><a name="p1328141124810"></a><a name="p1328141124810"></a>service</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p72818194810"><a name="p72818194810"></a><a name="p72818194810"></a>服务功能相关的子命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2062671473019"><a name="p2062671473019"></a><a name="p2062671473019"></a>-</p>
</td>
</tr>
<tr id="row1428110116489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p15281151134811"><a name="p15281151134811"></a><a name="p15281151134811"></a>component</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1728171134816"><a name="p1728171134816"></a><a name="p1728171134816"></a>调用组件的子命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p196256146304"><a name="p196256146304"></a><a name="p196256146304"></a>-</p>
</td>
</tr>
<tr id="row1928113114489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p151167279507"><a name="p151167279507"></a><a name="p151167279507"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1115152711506"><a name="p1115152711506"></a><a name="p1115152711506"></a>修改配置文件的子命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p36245148307"><a name="p36245148307"></a><a name="p36245148307"></a>-</p>
</td>
</tr>
</tbody>
</table>

-   **[service子命令](service子命令.md)**

-   **[component子命令](component子命令.md)**

-   **[set子命令](set子命令.md)**
