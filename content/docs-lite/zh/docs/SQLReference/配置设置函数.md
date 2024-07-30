# 配置设置函数<a name="ZH-CN_TOPIC_0289900255"></a>

配置设置函数是可以用于查询以及修改运行时配置参数的函数。

-   current\_setting\(setting\_name\)

    描述：当前的设置值。

    返回值类型：text

    备注：current\_setting用于以查询形式获取setting\_name的当前值。和SQL语句SHOW是等效的。比如：

    ```
    openGauss=# SELECT current_setting('datestyle');
    
     current_setting
    -----------------
     ISO, MDY
    (1 row)
    ```

-   set\_working\_grand\_version\_num\_manually\(tmp\_version\)

    描述：通过切换授权版本号来更新和升级数据库的新特性。

    返回值类型：void

-   shell\_in\(type\)

    描述： 为shell类型输入路由（那些尚未填充的类型）。

    返回值类型：void

-   shell\_out\(type\)

    描述：为shell 类型输出路由（那些尚未填充的类型）。

    返回值类型：void

-   set\_config\(setting\_name, new\_value, is\_local\)

    描述：设置参数并返回新值。

    返回值类型：text

    备注：set\_config将参数setting\_name设置为new\_value。如果is\_local为true，则new\_value将只应用于当前事务。如果希望new\_value应用于当前会话，可以使用false，和SQL语句SET是等效的。例如：

    ```
    openGauss=# SELECT set_config('log_statement_stats', 'off', false);
    
     set_config
    ------------
     off
    (1 row)
    ```
-   gs\_get\_hba\_conf\(\)

    描述：返回当前hba配置选项。

    返回值类型：record

    **表 1**  gs\_get\_hba\_conf参数说明

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.71%" id="mcps1.2.5.1.2"><p id="p193010585511"><a name="p193010585511"></a><a name="p193010585511"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.83%" id="mcps1.2.5.1.3"><p id="p093095865118"><a name="p093095865118"></a><a name="p093095865118"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p139301758195119"><a name="p139301758195119"></a><a name="p139301758195119"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>连接类型</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p106751453123515"><a name="p106751453123515"></a><a name="p106751453123515"></a>数据库名</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>用户名</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>address</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>IP 地址范围</p>
    </td>
    </tr>
    <tr id="row1782363132517"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>auth-method</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>认证方法</p>
    </td>
    </tr>
    </tbody>
    </table>

 ## 示例<a name="section258851613665"></a>

    ```
    select * from gs_get_hba_conf();
    type  | database | user |   address    | method 
    -------+----------+------+--------------+--------
    local | all      | all  |              | trust
    host  | all      | all  | 127.0.0.1/32 | trust
    host  | all      | all  | ::1/128      | trust
    (4 rows)
    ```

