# 导出单个数据库<a name="ZH-CN_TOPIC_0289900499"></a>

## 导出数据库<a name="ZH-CN_TOPIC_0289899839"></a>

openGauss支持使用gs\_dump工具导出某个数据库级的内容，包含数据库的数据和所有对象定义。可根据需要自定义导出如下信息：

- 导出数据库全量信息，包含数据和所有对象定义。

    使用导出的全量信息可以创建一个与当前库相同的数据库，且库中数据也与当前库相同。

- 仅导出所有对象定义，包括：库定义、函数定义、模式定义、表定义、索引定义和存储过程定义等。

    使用导出的对象定义，可以快速创建一个相同的数据库，但是库中并无原数据库的数据。

- 仅导出数据，不包含所有对象定义。

### 操作步骤<a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_zh-cn_topic_0096392335_s3e29cf3b34314c088216013e01293af6"></a>

1. 以操作系统用户omm登录数据库主节点。
2. 使用gs\_dump导出postgres数据库。

    ```
    gs_dump -U jack -f /home/omm/backup/userdatabase_backup.tar -p 8000 postgres -F t 
    Password:
    ```

    **表 1**  常用参数说明

    <a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_table1781122816253"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p48382816258"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p48382816258"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p48382816258"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p18332812257"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p18332812257"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p18332812257"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p583122816257"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p583122816257"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p583122816257"></a>举例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p3830287252"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p3830287252"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8232111218592"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8232111218592"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8232111218592"></a>连接数据库的用户名。</p>
    <div class="note" id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_note02310422912"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_note02310422912"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_note02310422912"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p152354213910"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p152354213910"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p152354213910"></a>不指定连接数据库的用户名时，默认以安装时创建的初始系统管理员连接。</p>
    </div></div>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1583152842510"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1583152842510"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p89920588539"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p89920588539"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p69431335210"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p69431335210"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p69431335210"></a>指定用户连接的密码。</p>
    <a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul194074341627"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul194074341627"></a><ul id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul194074341627"><li>如果主机的认证策略是trust，则不会对数据库管理员进行密码验证，即无需输入-W选项。</li><li>如果没有-W选项，并且不是数据库管理员，会提示用户输入密码。</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1898043113581"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1898043113581"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row1823810139566"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238171316560"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238171316560"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p323861311565"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p323861311565"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p323861311565"></a>将导出文件发送至指定目录文件夹。如果这里省略，则使用标准输出。如果输出格式为(-F c/-F d/-F t)时，必须指定-f参数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238513175619"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238513175619"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p11238513175619"></a>-f /home/<span id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text550520295319"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text550520295319"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text550520295319"></a>omm</span>/backup/<em id="i189217515234"><a name="i189217515234"></a><a name="i189217515234"></a>postgres</em>_backup.tar</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p84119521250"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p84119521250"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p14838631464"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p14838631464"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p14838631464"></a>指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p341117521853"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p341117521853"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p341117521853"></a>-p <span id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text74171210135017"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text74171210135017"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_text74171210135017"></a>8000</span></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row1362511481379"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8782872280"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8782872280"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1278211752814"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1278211752814"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p1278211752814"></a>需要导出的数据库名称</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p12782147122820"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p12782147122820"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p12782147122820"></a>postgres</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_row1885993510341"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p141711116303"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p141711116303"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p9417511183018"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p9417511183018"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p9417511183018"></a>选择导出文件格式。-F参数值如下：</p>
    <a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul4489102813339"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul4489102813339"></a><ul id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_ul4489102813339"><li>p：纯文本格式</li><li>c：自定义归档</li><li>d：目录归档格式</li><li>t：tar归档格式</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p4417181118302"><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p4417181118302"></a><a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_p4417181118302"></a>-F t</p>
    </td>
    </tr>
    </tbody>
    </table>

    其他参数说明请参见《工具与命令参考》中“服务端工具 \> gs\_dump”章节。

### 示例<a name="zh-cn_topic_0283136854_zh-cn_topic_0237121169_zh-cn_topic_0096392335_s3e34e9e7c7e948d49d1f24d6038514c0"></a>

示例一：执行gs\_dump，导出postgres数据库全量信息，导出文件格式为sql文本格式。

```
gs_dump -U jack -f /home/omm/backup/postgres_backup.sql -p 8000 postgres -F p
Password:
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: total time: 3793  ms
```

示例二：执行gs\_dump，仅导出postgres数据库中的数据，不包含数据库对象定义，导出文件格式为自定义归档格式。

```
gs_dump -U jack -f /home/omm/backup/postgres_data_backup.dmp -p 8000 postgres -a -F c
Password:
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-21 15:36:13]: total time: 3793  ms
```

示例三：执行gs\_dump，仅导出postgres数据库所有对象的定义，导出文件格式为sql文本格式。

```
gs_dump -f /home/omm/backup/postgres_def_backup.sql -p 8000 postgres -s -F p
Password:
gs_dump[port='8000'][postgres][2017-07-20 15:04:14]: dump database postgres successfully
gs_dump[port='8000'][postgres][2017-07-20 15:04:14]: total time: 472 ms
```

示例四：执行gs\_dump，仅导出postgres数据库的所有对象的定义，导出文件格式为文本格式，并对导出文件进行加密。

```
gs_dump -f /home/omm/backup/postgres_def_backup.sql -p 8000 postgres --with-encryption AES128 --with-key xxxxxx -s -F p
Password:
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: dump database postgres successfully
gs_dump[port='8000'][postgres][2018-11-14 11:25:18]: total time: 1161  ms
```

## 导出模式<a name="ZH-CN_TOPIC_0289900343"></a>

openGauss目前支持使用gs\_dump工具导出模式级的内容，包含模式的数据和定义。用户可通过灵活的自定义方式导出模式内容，不仅支持选定一个模式或多个模式的导出，还支持排除一个模式或者多个模式的导出。可根据需要自定义导出如下信息：

- 导出模式全量信息，包含数据和对象定义。
- 仅导出数据，即模式包含表中的数据，不包含对象定义。
- 仅导出模式对象定义，包括：表定义、存储过程定义和索引定义等。

### 操作步骤<a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_zh-cn_topic_0096392705_se1377b9a87714047bb07fd6d163c6734"></a>

1. 以操作系统用户omm登录数据库主节点。
2. 使用gs\_dump同时导出hr和public模式。

    ```
    gs_dump -U jack -f /home/omm/backup/MPPDB_schema_backup -p 8000 human_resource -n hr -n public -F d 
    Password:
    ```

    **表 1**  常用参数说明

    <a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_table1781122816253"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row10837281257"><th class="cellrowborder" valign="top" width="24.169999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p48382816258"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p48382816258"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p48382816258"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.16%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p18332812257"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p18332812257"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p18332812257"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p583122816257"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p583122816257"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p583122816257"></a>举例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row1483528152520"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p3830287252"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p3830287252"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8232111218592"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8232111218592"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8232111218592"></a>连接数据库的用户名。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1583152842510"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1583152842510"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row199295855317"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p89920588539"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p89920588539"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p69431335210"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p69431335210"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p69431335210"></a>指定用户连接的密码。</p>
    <a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul194074341627"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul194074341627"></a><ul id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul194074341627"><li>如果主机的认证策略是trust，则不会对数据库管理员进行密码验证，即无需输入-W选项。</li><li>如果没有-W选项，并且不是数据库管理员，会提示用户输入密码。</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1898043113581"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1898043113581"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row1823810139566"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238171316560"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238171316560"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p323861311565"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p323861311565"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p323861311565"></a>将导出文件发送至指定目录文件夹。如果这里省略，则使用标准输出。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238513175619"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238513175619"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p11238513175619"></a>-f /home/<span id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text1189611819533"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text1189611819533"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text1189611819533"></a>omm</span>/backup/MPPDB<em id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i158581933132416"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i158581933132416"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i158581933132416"></a>_</em>schema_backup</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row9411195215519"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p84119521250"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p84119521250"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14838631464"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14838631464"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14838631464"></a>指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p341117521853"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p341117521853"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p341117521853"></a>-p <span id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text6660142225020"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text6660142225020"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_text6660142225020"></a>8000</span></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row1362511481379"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8782872280"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8782872280"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1278211752814"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1278211752814"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p1278211752814"></a>需要导出的数据库名称</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p12782147122820"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p12782147122820"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p12782147122820"></a>human_resource</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row1280163131716"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14801831178"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14801831178"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p14801831178"></a>-n</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p2391133813175"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p2391133813175"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p2391133813175"></a>只导出与模式名称匹配的模式，此选项包括模式本身和所有它包含的对象。</p>
    <a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul11933635102416"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul11933635102416"></a><ul id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul11933635102416"><li>单个模式：-n <em id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i182341435112017"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i182341435112017"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i182341435112017"></a>schemaname</em></li><li>多个模式：多次输入-n <em id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i65454714206"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i65454714206"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_i65454714206"></a>schemaname</em></li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul13923102591912"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul13923102591912"></a><ul id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul13923102591912"><li>单个模式：-n hr</li><li>多个模式：-n hr -n public</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_row1885993510341"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p141711116303"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p141711116303"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p9417511183018"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p9417511183018"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p9417511183018"></a>选择导出文件格式。-F参数值如下：</p>
    <a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul4489102813339"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul4489102813339"></a><ul id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_ul4489102813339"><li>p：纯文本格式</li><li>c：自定义归档</li><li>d：目录归档格式</li><li>t：tar归档格式</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p4417181118302"><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p4417181118302"></a><a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_p4417181118302"></a>-F d</p>
    </td>
    </tr>
    </tbody>
    </table>

    其他参数说明请参见《工具与命令参考》中“服务端工具 \> gs\_dump”章节。

### 示例<a name="zh-cn_topic_0283136726_zh-cn_topic_0237121170_zh-cn_topic_0096392705_s221cf543e4004d598aa6fafa8b79f843"></a>

示例一：执行gs\_dump，导出hr模式全量信息，导出文件格式为文本格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup.sql -p 8000 human_resource -n hr -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:05:55]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:05:55]: total time: 2425  ms
```

示例二：执行gs\_dump，仅导出hr模式的数据，导出文件格式为tar归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_data_backup.tar -p 8000 human_resource -n hr -a -F t
Password:
gs_dump[port='8000'][human_resource][2018-11-14 15:07:16]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 15:07:16]: total time: 1865  ms
```

示例三：执行gs\_dump，仅导出hr模式的定义，导出文件格式为目录归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_def_backup -p 8000 human_resource -n hr -s -F d
Password:
gs_dump[port='8000'][human_resource][2018-11-14 15:11:34]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 15:11:34]: total time: 1652  ms
```

示例四：执行gs\_dump，导出human\_resource数据库时，排除hr模式，导出文件格式为自定义归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup.dmp -p 8000 human_resource -N hr -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:06:31]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:06:31]: total time: 2522  ms
```

示例五：执行gs\_dump，同时导出hr和public模式，且仅导出模式定义，导出文件格式为tar归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup1.tar -p 8000 human_resource -n hr -n public -s -F t
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:07:16]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:07:16]: total time: 2132  ms
```

示例六：执行gs\_dump，导出human\_resource数据库时，排除hr和public模式，导出文件格式为自定义归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_schema_backup2.dmp -p 8000 human_resource -N hr -N public -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 16:07:55]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 16:07:55]: total time: 2296  ms
```

示例七：执行gs\_dump，导出public模式下所有表（视图、序列和外表）和hr模式中staffs表，包含数据和表定义，导出文件格式为自定义归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_backup3.dmp -p 8000 human_resource -t public.* -t hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: total time: 896  ms
```

## 导出表<a name="ZH-CN_TOPIC_0289900755"></a>

openGauss支持使用gs\_dump工具导出表级的内容，包含表定义和表数据。视图、序列和外表属于特殊的表。用户可通过灵活的自定义方式导出表内容，不仅支持选定一个表或多个表的导出，还支持排除一个表或者多个表的导出。可根据需要自定义导出如下信息：

- 导出表全量信息，包含表数据和表定义。
- 仅导出数据，不包含表定义。
- 仅导出表定义。

### 操作步骤<a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_zh-cn_topic_0096393572_sfe5d77987a274a64aaf2d58f17c4a2b9"></a>

1. 以操作系统用户omm登录数据库主节点。
2. 使用gs\_dump同时导出指定表hr.staffs和hr.employments。

    ```
    gs_dump -U jack -f /home/omm/backup/MPPDB_table_backup -p 8000 human_resource -t hr.staffs -t hr.employments -F d
    Password:
    ```

    **表 1**  常用参数说明

    <a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_table1781122816253"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row10837281257"><th class="cellrowborder" valign="top" width="24.169999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p48382816258"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p48382816258"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p48382816258"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.16%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p18332812257"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p18332812257"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p18332812257"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p583122816257"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p583122816257"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p583122816257"></a>举例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row1483528152520"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p3830287252"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p3830287252"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8232111218592"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8232111218592"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8232111218592"></a>连接数据库的用户名。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1583152842510"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1583152842510"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row199295855317"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p89920588539"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p89920588539"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p69431335210"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p69431335210"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p69431335210"></a>指定用户连接的密码。</p>
    <a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul194074341627"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul194074341627"></a><ul id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul194074341627"><li>如果主机的认证策略是trust，则不会对数据库管理员进行密码验证，即无需输入-W选项。</li><li>如果没有-W选项，并且不是数据库管理员，会提示用户输入密码。</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1898043113581"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1898043113581"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row1823810139566"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238171316560"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238171316560"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238171316560"></a>-f</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p323861311565"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p323861311565"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p323861311565"></a>将导出文件发送至指定目录文件夹。如果这里省略，则使用标准输出。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238513175619"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238513175619"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p11238513175619"></a>-f /home/<span id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text7666916195320"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text7666916195320"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text7666916195320"></a>omm</span>/backup/MPPDB_table_backup</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row9411195215519"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p84119521250"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p84119521250"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14838631464"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14838631464"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14838631464"></a>指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p341117521853"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p341117521853"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p341117521853"></a>-p <span id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text139416479502"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text139416479502"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_text139416479502"></a>8000</span></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row1362511481379"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8782872280"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8782872280"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p8782872280"></a>dbname</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1278211752814"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1278211752814"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p1278211752814"></a>需要导出的数据库名称</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p12782147122820"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p12782147122820"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p12782147122820"></a>human_resource</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row1280163131716"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14801831178"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14801831178"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p14801831178"></a>-t</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p13668104114117"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p13668104114117"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p13668104114117"></a>指定导出的表（或视图、序列、外表），可以使用多个-t选项来选择多个表，也可以使用通配符指定多个表对象。当使用通配符指定多个表对象时，注意给pattern打引号，防止shell扩展通配符。</p>
    <a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul11933635102416"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul11933635102416"></a><ul id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul11933635102416"><li>单个表：-t <em id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i61955817199"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i61955817199"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i61955817199"></a>schema.table</em></li><li>多个表：多次输入-t <em id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i8232465420"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i8232465420"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_i8232465420"></a>schema.table</em></li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul13923102591912"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul13923102591912"></a><ul id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul13923102591912"><li>单个表：-t hr.staffs</li><li>多个表：-t hr.staffs -t hr.employments</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_row1885993510341"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p141711116303"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p141711116303"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p141711116303"></a>-F</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p9417511183018"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p9417511183018"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p9417511183018"></a>选择导出文件格式。-F参数值如下：</p>
    <a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul4489102813339"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul4489102813339"></a><ul id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_ul4489102813339"><li>p：纯文本格式</li><li>c：自定义归档</li><li>d：目录归档格式</li><li>t：tar归档格式</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p4417181118302"><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p4417181118302"></a><a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_p4417181118302"></a>-F d</p>
    </td>
    </tr>
    <tr id="row181041853810"><td class="cellrowborder" valign="top" width="24.169999999999998%" headers="mcps1.2.4.1.1 "><p id="p17105887382"><a name="p17105887382"></a><a name="p17105887382"></a>-T</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"><a name="zh-cn_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"></a><a name="zh-cn_topic_0059777770_a3ed539753f314a7ebb51d23f22142f31"></a>不转储的表（或视图、或序列、或外表）对象列表，可以使用多个-t选项来选择多个表，也可以使用通配符指定多个表对象。</p>
    <p id="zh-cn_topic_0059777770_a823790546d6f47358367ccf300001ab8"><a name="zh-cn_topic_0059777770_a823790546d6f47358367ccf300001ab8"></a><a name="zh-cn_topic_0059777770_a823790546d6f47358367ccf300001ab8"></a>当同时输入-t和-T时，会转储在-t列表中，而不在-T列表中的表对象。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="p1210515817388"><a name="p1210515817388"></a><a name="p1210515817388"></a>-T <em id="zh-cn_topic_0059777770_zh-cn_topic_0058968121_i103466412093"><a name="zh-cn_topic_0059777770_zh-cn_topic_0058968121_i103466412093"></a><a name="zh-cn_topic_0059777770_zh-cn_topic_0058968121_i103466412093"></a>table1</em></p>
    </td>
    </tr>
    </tbody>
    </table>

    其他参数说明请参见《工具与命令参考》中“服务端工具 \> gs\_dump”章节。

### 示例<a name="zh-cn_topic_0283137162_zh-cn_topic_0237121171_zh-cn_topic_0096393572_s2612a8b058f24a14b1dfa8efd6f4c410"></a>

>[!NOTE]说明 
下方示例导出后，在导入恢复前，需要确保存在导出表所在的schema。

示例一：执行gs\_dump，导出表hr.staffs的定义和数据，导出文件格式为文本格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup.sql -p 8000 human_resource -t hr.staffs -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:05:10]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:05:10]: total time: 3116  ms
```

示例二：执行gs\_dump，只导出表hr.staffs的数据，导出文件格式为tar归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_data_backup.tar -p 8000 human_resource -t hr.staffs -a -F t 
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:04:26]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:04:26]: total time: 2570  ms
```

示例三：执行gs\_dump，导出表hr.staffs的定义，导出文件格式为目录归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_def_backup -p 8000 human_resource -t hr.staffs -s -F d 
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:03:09]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:03:09]: total time: 2297  ms 
```

示例四：执行gs\_dump，不导出表hr.staffs，导出文件格式为自定义归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup4.dmp -p 8000 human_resource -T hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:14:11]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:14:11]: total time: 2450  ms
```

示例五：执行gs\_dump，同时导出两个表hr.staffs和hr.employments，导出文件格式为文本格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup1.sql -p 8000 human_resource -t hr.staffs -t hr.employments -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:19:42]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:19:42]: total time: 2414  ms
```

示例六：执行gs\_dump，导出时，排除两个表hr.staffs和hr.employments，导出文件格式为文本格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup2.sql -p 8000 human_resource -T hr.staffs -T hr.employments -F p
Password:
gs_dump[port='8000'][human_resource][2017-07-21 17:21:02]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2017-07-21 17:21:02]: total time: 3165  ms
```

示例七：执行gs\_dump，导出表hr.staffs的定义和数据，只导出表hr.employments的定义，导出文件格式为tar归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup3.tar -p 8000 human_resource -t hr.staffs -t hr.employments --exclude-table-data hr.employments -F t
Password:
gs_dump[port='8000'][human_resource][2018-11-14 11:32:02]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 11:32:02]: total time: 1645  ms
```

示例八：执行gs\_dump，导出表hr.staffs的定义和数据，并对导出文件进行加密，导出文件格式为文本格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup4.sql -p 8000 human_resource -t hr.staffs --with-encryption AES128 --with-key abcdefg_?1234567 -F p
Password:
gs_dump[port='8000'][human_resource][2018-11-14 11:35:30]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-11-14 11:35:30]: total time: 6708  ms
```

示例九：执行gs\_dump，导出public模式下所有表（包括视图、序列和外表）和hr模式中staffs表，包含数据和表定义，导出文件格式为自定义归档格式。

```
gs_dump -f /home/omm/backup/MPPDB_table_backup5.dmp -p 8000 human_resource -t public.* -t hr.staffs -F c
Password:
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: dump database human_resource successfully
gs_dump[port='8000'][human_resource][2018-12-13 09:40:24]: total time: 896  ms
```

示例十： 执行gs\_dump，仅导出依赖于t1模式下的test1表对象的视图信息，导出文件格式为目录归档格式。

```
gs_dump -U jack -f /home/omm/backup/MPPDB_view_backup6 -p 8000 human_resource -t t1.test1 --include-depend-objs --exclude-self -F d
Password:
gs_dump[port='8000'][jack][2018-11-14 17:21:18]: dump database human_resource successfully
gs_dump[port='8000'][jack][2018-11-14 17:21:23]: total time: 4239  ms
```
