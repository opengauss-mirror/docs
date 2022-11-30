# set子命令<a name="ZH-CN_TOPIC_0000001199316674"></a>

该命令用于修改配置文件dbmind.conf中的参数值，与用户手动修改配置文件dbmind.conf一般无差异。例如修改配置目录confpath中的配置文件dbmind.conf中TSDB配置部分，host参数的值，并将其设置为 127.0.0.1。则可通过下述命令实现：

```
gs_dbmind set TSDB host 127.0.0.1 -c confpath
```

在修改上述普通参数时，与手动修改配置文件dbmind.conf无差异。但由于DBMind的配置文件中不保存明文密码（如果用户使用明文密码，则DBMind会提示并退出），故当用户想要修改密码项时，有两种方法进行修改，一种是先修改dbmind.conf，并通过以下命令实现配置文件的重新初始化：

```
gs_dbmind service setup --initialize -c confpath
```

另一种方法则是直接通过set子命令进行设置，如：

```
gs_dbmind set METADATABASE password xxxxx -c confpath
```



>![](public_sys-resources/icon-note.png) **说明：**
>
>+ 该命令对于字符串是大小写敏感的，如果输错则可能出现执行过程错误。
>+ 由于set子命令涉及的参数值类型很多，故只会对设置值进行初步检查，用户需要保证输入值的内容正确，如某些值应为正整数而非负数。

## 命令参考<a name="section1636514213451"></a>

用户可以通过 --help 选项获得该模式的帮助信息，例如：

```
gs_dbmind set --help
```

```
usage:  set [-h] -c DIRECTORY section option target

positional arguments:
  section               which section (case sensitive) to set
  option                which option to set
  target                the parameter target to set

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files
```

**表 1**  模块命令行参数说明：python dbmind/ set xxx

<a name="table7211122234813"></a>
<table><thead align="left"><tr id="row3212142264818"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p121217228484"><a name="p121217228484"></a><a name="p121217228484"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1521252210488"><a name="p1521252210488"></a><a name="p1521252210488"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p6212222124812"><a name="p6212222124812"></a><a name="p6212222124812"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row5212152216484"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p621212223483"><a name="p621212223483"></a><a name="p621212223483"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p021242274820"><a name="p021242274820"></a><a name="p021242274820"></a>帮助命令</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p202121522144814"><a name="p202121522144814"></a><a name="p202121522144814"></a>-</p>
</td>
</tr>
<tr id="row52122229485"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p182125225484"><a name="p182125225484"></a><a name="p182125225484"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1921242214488"><a name="p1921242214488"></a><a name="p1921242214488"></a>配置文件目录confpath</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1547014377521"><a name="p1547014377521"></a><a name="p1547014377521"></a>-</p>
</td>
</tr>
<tr id="row122122220489"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p457192417553"><a name="p457192417553"></a><a name="p457192417553"></a>section</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12212192220489"><a name="p12212192220489"></a><a name="p12212192220489"></a>设置区</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p58973412526"><a name="p58973412526"></a><a name="p58973412526"></a>-</p>
</td>
</tr>
<tr id="row7212182211482"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p621213221486"><a name="p621213221486"></a><a name="p621213221486"></a>option</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p162129229482"><a name="p162129229482"></a><a name="p162129229482"></a>设置项</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5891434145218"><a name="p5891434145218"></a><a name="p5891434145218"></a>-</p>
</td>
</tr>
<tr id="row121262294818"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p191851941105514"><a name="p191851941105514"></a><a name="p191851941105514"></a>target</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6212322164815"><a name="p6212322164815"></a><a name="p6212322164815"></a>设置值</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p98753475217"><a name="p98753475217"></a><a name="p98753475217"></a>-</p>
</td>
</tr>
</tbody>
</table>
