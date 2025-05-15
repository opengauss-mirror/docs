# DBMind模式说明<a name="ZH-CN_TOPIC_0000002293420721"></a>

## 关闭HISTORY记录<a name="zh-cn_topic_0000002242300241_section13607179203719"></a>

为了避免指令历史记录的安全隐患，在部署DBMind及其组件的服务之前，必须首先将各主机的history指令关闭。

1.  修改根目录下/etc/profile文件。

    ```
    vim /etc/profile
    ```

2.  设置HISTSIZE值为0。例如，系统中HISTSIZE默认值为1000，将其修改为0。

    ```
    HISTSIZE=0
    ```

3.  保存/etc/profile。

    ```
    :wq
    ```

4.  设置/etc/profile生效。

    ```
    source /etc/profile
    ```

用户在设置环境变量后，可通过gs\_dbmind命令调用DBMind下列基本功能：

-   服务功能：service子命令，包括创建并初始化配置目录、启动后台服务、关闭后台服务等；
-   调用组件：component子命令（如索引推荐、参数调优等）可通过该模式进行调用；
-   设置参数：set子命令，通过该命令，可以一键修改配置目录中的配置文件值；用户也可以通过文本编辑器进行手动修改。

例如，可以通过以下方法设置环境变量：

```
echo PATH=`pwd`/openGauss-DBMind:'$PATH' >> ~/.bashrc
echo 'export PATH' >> ~/.bashrc 

source ~/.bashrc
```

用户可以通过 --help 选项获得上述模式的帮助信息，例如：

```
gs_dbmind --help
```

```
usage: [-h] [-v] {service,set,component,upgrade} ...

openGauss DBMind: An autonomous platform for openGauss

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit

available subcommands:
  {service,set,component,upgrade}
                        type '<subcommand> -h' for help on a specific subcommand
    service             send a command to DBMind to change the status of the service
    set                 set a parameter
    component           pass command line arguments to each sub-component.
    upgrade             update metadatabase and config files for the new dbmind, Notes: upgrade does not support cloud-native scenarios.
```

**表 1**  gs\_dbmind 选项基本说明

<a name="zh-cn_topic_0000002242300241_table228121144819"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000002242300241_row172811194811"><th class="cellrowborder" valign="top" width="33.3033303330333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000002242300241_p7281141184818"><a name="zh-cn_topic_0000002242300241_p7281141184818"></a><a name="zh-cn_topic_0000002242300241_p7281141184818"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.36333633363336%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000002242300241_p1928151114811"><a name="zh-cn_topic_0000002242300241_p1928151114811"></a><a name="zh-cn_topic_0000002242300241_p1928151114811"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000002242300241_p19281114488"><a name="zh-cn_topic_0000002242300241_p19281114488"></a><a name="zh-cn_topic_0000002242300241_p19281114488"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000002242300241_row52810164812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300241_p7940121011519"><a name="zh-cn_topic_0000002242300241_p7940121011519"></a><a name="zh-cn_topic_0000002242300241_p7940121011519"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300241_p17945141410512"><a name="zh-cn_topic_0000002242300241_p17945141410512"></a><a name="zh-cn_topic_0000002242300241_p17945141410512"></a>帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300241_p76275142302"><a name="zh-cn_topic_0000002242300241_p76275142302"></a><a name="zh-cn_topic_0000002242300241_p76275142302"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300241_row6281141134812"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300241_p1349818310513"><a name="zh-cn_topic_0000002242300241_p1349818310513"></a><a name="zh-cn_topic_0000002242300241_p1349818310513"></a>-v, --version</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300241_p142813134819"><a name="zh-cn_topic_0000002242300241_p142813134819"></a><a name="zh-cn_topic_0000002242300241_p142813134819"></a>版本号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300241_p12626714113016"><a name="zh-cn_topic_0000002242300241_p12626714113016"></a><a name="zh-cn_topic_0000002242300241_p12626714113016"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300241_row1028116154811"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300241_p1328141124810"><a name="zh-cn_topic_0000002242300241_p1328141124810"></a><a name="zh-cn_topic_0000002242300241_p1328141124810"></a>service</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300241_p72818194810"><a name="zh-cn_topic_0000002242300241_p72818194810"></a><a name="zh-cn_topic_0000002242300241_p72818194810"></a>服务功能相关的子命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300241_p2062671473019"><a name="zh-cn_topic_0000002242300241_p2062671473019"></a><a name="zh-cn_topic_0000002242300241_p2062671473019"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300241_row1428110116489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300241_p15281151134811"><a name="zh-cn_topic_0000002242300241_p15281151134811"></a><a name="zh-cn_topic_0000002242300241_p15281151134811"></a>component</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300241_p1728171134816"><a name="zh-cn_topic_0000002242300241_p1728171134816"></a><a name="zh-cn_topic_0000002242300241_p1728171134816"></a>调用组件的子命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300241_p196256146304"><a name="zh-cn_topic_0000002242300241_p196256146304"></a><a name="zh-cn_topic_0000002242300241_p196256146304"></a>-</p>
</td>
</tr>
<tr id="row11348171519713"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="p10348215077"><a name="p10348215077"></a><a name="p10348215077"></a>upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="p1234810159714"><a name="p1234810159714"></a><a name="p1234810159714"></a>升降级功能</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1134817151375"><a name="p1134817151375"></a><a name="p1134817151375"></a>云原生当前不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0000002242300241_row1928113114489"><td class="cellrowborder" valign="top" width="33.3033303330333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000002242300241_p151167279507"><a name="zh-cn_topic_0000002242300241_p151167279507"></a><a name="zh-cn_topic_0000002242300241_p151167279507"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="33.36333633363336%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000002242300241_p1115152711506"><a name="zh-cn_topic_0000002242300241_p1115152711506"></a><a name="zh-cn_topic_0000002242300241_p1115152711506"></a>修改配置文件的子命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000002242300241_p36245148307"><a name="zh-cn_topic_0000002242300241_p36245148307"></a><a name="zh-cn_topic_0000002242300241_p36245148307"></a>-</p>
</td>
</tr>
</tbody>
</table>

-   **[service子命令](service子命令.md)**  

-   **[component子命令](component子命令.md)**  

-   **[set子命令](set子命令.md)**  

