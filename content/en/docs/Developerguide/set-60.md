# set<a name="EN-US_TOPIC_0000001199316674"></a>

This command is used to change the parameter values in the  **dbmind.conf**  configuration file. You can also manually modify the  **dbmind.conf**  configuration file. The two methods have no difference. For example, to change the value of  **host**  in the  **TSDB**  configuration item of the  **dbmind.conf**  file in the  **confpath**  directory to  **127.0.0.1**, run the following command:

```
gs_dbmind set TSDB host 127.0.0.1 -c confpath
```

You can choose either of the methods to modify common parameters. However, the plaintext password cannot be encrypted by manually modifying the configuration file. If you want to change the password, run the following command:

```
gs_dbmind set METADATABASE password xxxxxx -c confpath
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This command is case sensitive to character strings. If you enter an incorrect character string, an error may occur during the command execution.

## Command Reference<a name="section1636514213451"></a>

You can use the  **--help**  option to obtain the help information about this mode. For example:

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

**Table  1**  Parameters of the set subcommand: python dbmind/ set xxx

<a name="table7211122234813"></a>
<table><thead align="left"><tr id="row3212142264818"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p121217228484"><a name="p121217228484"></a><a name="p121217228484"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1521252210488"><a name="p1521252210488"></a><a name="p1521252210488"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p6212222124812"><a name="p6212222124812"></a><a name="p6212222124812"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row5212152216484"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p621212223483"><a name="p621212223483"></a><a name="p621212223483"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p021242274820"><a name="p021242274820"></a><a name="p021242274820"></a>Help information</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p202121522144814"><a name="p202121522144814"></a><a name="p202121522144814"></a>-</p>
</td>
</tr>
<tr id="row52122229485"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p182125225484"><a name="p182125225484"></a><a name="p182125225484"></a>-c, --conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1921242214488"><a name="p1921242214488"></a><a name="p1921242214488"></a>Configuration file directory <strong id="b835385818538"><a name="b835385818538"></a><a name="b835385818538"></a>confpath</strong></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1547014377521"><a name="p1547014377521"></a><a name="p1547014377521"></a>-</p>
</td>
</tr>
<tr id="row122122220489"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p457192417553"><a name="p457192417553"></a><a name="p457192417553"></a>section</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12212192220489"><a name="p12212192220489"></a><a name="p12212192220489"></a>Setting area</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p58973412526"><a name="p58973412526"></a><a name="p58973412526"></a>-</p>
</td>
</tr>
<tr id="row7212182211482"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p621213221486"><a name="p621213221486"></a><a name="p621213221486"></a>option</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p162129229482"><a name="p162129229482"></a><a name="p162129229482"></a>Configuration item</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5891434145218"><a name="p5891434145218"></a><a name="p5891434145218"></a>-</p>
</td>
</tr>
<tr id="row121262294818"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p191851941105514"><a name="p191851941105514"></a><a name="p191851941105514"></a>target</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6212322164815"><a name="p6212322164815"></a><a name="p6212322164815"></a>Set value</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p98753475217"><a name="p98753475217"></a><a name="p98753475217"></a>-</p>
</td>
</tr>
</tbody>
</table>

