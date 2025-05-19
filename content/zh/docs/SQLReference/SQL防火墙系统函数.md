# SQL防火墙系统函数

-   gs\_create\_sql\_limit\(limit\_name, limit\_type, work\_node, max\_concurrency, start\_time, end\_time, limit\_opt, databases, users)

    描述：新增SQL防火墙规则。

    返回值类型：int8

    **表 1**  gs\_create\_sql\_limit参数说明

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
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>limit_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>规则名称</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>limit_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p106751453123515"><a name="p106751453123515"></a><a name="p106751453123515"></a>规则类型。支持sqlid、select、update、insert、delete。</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>work_node</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>规则生效节点。0表示生效主/备节点；1表示生效主节点；2表示生效备节点。其他值表示生效备节点。</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>max_concurrency</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则最大并发数。-1表示规则不启用；>=0表示限制并发数。</p>
    </td>
    </tr>
    <tr id="row1782363132511"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>start_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>timestampTz</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效起始时间。NULL表示不限制。</p>
    </td>
    </tr>
    <tr id="row1782363132512"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>end_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>timestampTz</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效结束时间。NULL表示不限制。</p>
    </td>
    </tr>
    <tr id="row1782363132513"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>limit_opt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>text[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则详细信息。sqlid类型，填写'{722996022}'，表示限制unique_sql_id为722996022的SQL语句。select、update、insert、delete类型，填写'{select,from,t1}'，表示限制执行的SQL语句为select * from t1。</p>
    </td>
    </tr>
    <tr id="row1782363132514"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>databases</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>name[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效数据库列表。可以为NULL，表示所有数据库生效。</p>
    </td>
    </tr>
    <tr id="row1782363132515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>users</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>name[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效用户列表。可以为NULL，表示所有用户生效。系统用户不受规则限制。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_update\_sql\_limit\(limit\_id, limit\_name, work\_node, max\_concurrency, start\_time, end\_time, limit\_opt, databases, users)

    描述：更新SQL防火墙规则。

    返回值类型：boolean

    **表 2**  gs\_update\_sql\_limit参数说明

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
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>limit_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>规则id。通过gs_sql_limit系统表查询或者gs_select_sql_limit()函数获取。</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>limit_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p106751453123515"><a name="p106751453123515"></a><a name="p106751453123515"></a>规则名称。</p>
    </td>

    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>work_node</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>规则生效节点。0表示生效主/备节点；1表示生效主节点；2表示生效备节点。其他值表示生效备节点。</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>max_concurrency</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则最大并发数。-1表示规则不启用；>=0表示限制并发数。</p>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>start_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>timestampTz</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效起始时间。NULL表示不限制。</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>end_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>timestampTz</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效结束时间。NULL表示不限制。</p>
    </td>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>limit_opt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>text[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则详细信息。sqlid类型，填写'{722996022}'，表示限制unique_sql_id为722996022的SQL语句。select、update、insert、delete类型，填写'{select,from,t1}'，表示限制执行的SQL语句为select * from t1。</p>
    </td>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>databases</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>name[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效数据库列表。可以为NULL，表示所有数据库生效。</p>
    </td>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>users</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>name[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>规则生效用户列表。可以为NULL，表示所有用户生效。系统用户不受规则限制。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_select\_sql\_limit(limit\_id)

    描述：查询指定limit_id的规则。

    返回值类型：boolean

    **表 3**  gs\_select\_sql\_limit参数说明

    <a name="table8437142313275"></a>
    <table><thead align="left"><tr id="row1043711239272"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p143752362717"><a name="p143752362717"></a><a name="p143752362717"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p3437112322718"><a name="p3437112322718"></a><a name="p3437112322718"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p11437192312711"><a name="p11437192312711"></a><a name="p11437192312711"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p9437102315277"><a name="p9437102315277"></a><a name="p9437102315277"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row0523112724713"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1752312714471"><a name="p1752312714471"></a><a name="p1752312714471"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1952322715470"><a name="p1952322715470"></a><a name="p1952322715470"></a>limit_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p752310274473"><a name="p752310274473"></a><a name="p752310274473"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p35595374713"><a name="p35595374713"></a><a name="p35595374713"></a>规则id。</p>
    </td>
    </tr>
    <tr id="row89971884719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p499714817479"><a name="p499714817479"></a><a name="p499714817479"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5997168204717"><a name="p5997168204717"></a><a name="p5997168204717"></a>limit_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p199974817479"><a name="p199974817479"></a><a name="p199974817479"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p39979819479"><a name="p39979819479"></a><a name="p39979819479"></a>规则id。</p>
    </td>
    </tr>
    <tr id="row3437142316276"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1243716235278"><a name="p1243716235278"></a><a name="p1243716235278"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p144373235272"><a name="p144373235272"></a><a name="p144373235272"></a>is_valid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3437223182714"><a name="p3437223182714"></a><a name="p3437223182714"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p443810230277"><a name="p443810230277"></a><a name="p443810230277"></a>规则是否生效。</p>
    </td>
    </tr>
    <tr id="row943892342719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p5438223162710"><a name="p5438223162710"></a><a name="p5438223162710"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p154386236277"><a name="p154386236277"></a><a name="p154386236277"></a>work_node</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p16438112312714"><a name="p16438112312714"></a><a name="p16438112312714"></a>int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p18438112315275"><a name="p18438112315275"></a><a name="p18438112315275"></a>规则生效节点。</p>
    </td>
    </tr>
    <tr id="row124381523182710"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p14438182302710"><a name="p14438182302710"></a><a name="p14438182302710"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5438723202714"><a name="p5438723202714"></a><a name="p5438723202714"></a>max_concurrency</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p154381323162718"><a name="p154381323162718"></a><a name="p154381323162718"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1243852352713"><a name="p1243852352713"></a><a name="p1243852352713"></a>规则最大并发数。</p>
    </td>
    </tr>
    <tr id="row1438172314271"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1438112316274"><a name="p1438112316274"></a><a name="p1438112316274"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1743819231272"><a name="p1743819231272"></a><a name="p1743819231272"></a>hit_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14438162317278"><a name="p14438162317278"></a><a name="p14438162317278"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p743819239274"><a name="p743819239274"></a><a name="p743819239274"></a>规则被命中的次数。</p>
    </td>
    </tr>
    <tr id="row1438172314272"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1438112316274"><a name="p1438112316274"></a><a name="p1438112316274"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1743819231272"><a name="p1743819231272"></a><a name="p1743819231272"></a>reject_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14438162317278"><a name="p14438162317278"></a><a name="p14438162317278"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p743819239274"><a name="p743819239274"></a><a name="p743819239274"></a>拦截SQL的次数。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_select\_sql\_limit()

    描述：查询所有的规则。

    返回值类型：boolean

    **表 4**  gs\_select\_sql\_limit参数说明

    <a name="table8437142313275"></a>
    <table><thead align="left"><tr id="row1043711239272"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p143752362717"><a name="p143752362717"></a><a name="p143752362717"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p3437112322718"><a name="p3437112322718"></a><a name="p3437112322718"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p11437192312711"><a name="p11437192312711"></a><a name="p11437192312711"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p9437102315277"><a name="p9437102315277"></a><a name="p9437102315277"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    </tr>
    <tr id="row89971884719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p499714817479"><a name="p499714817479"></a><a name="p499714817479"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5997168204717"><a name="p5997168204717"></a><a name="p5997168204717"></a>limit_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p199974817479"><a name="p199974817479"></a><a name="p199974817479"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p39979819479"><a name="p39979819479"></a><a name="p39979819479"></a>规则id。</p>
    </td>
    </tr>
    <tr id="row3437142316276"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1243716235278"><a name="p1243716235278"></a><a name="p1243716235278"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p144373235272"><a name="p144373235272"></a><a name="p144373235272"></a>is_valid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3437223182714"><a name="p3437223182714"></a><a name="p3437223182714"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p443810230277"><a name="p443810230277"></a><a name="p443810230277"></a>规则是否生效。</p>
    </td>
    </tr>
    <tr id="row943892342719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p5438223162710"><a name="p5438223162710"></a><a name="p5438223162710"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p154386236277"><a name="p154386236277"></a><a name="p154386236277"></a>work_node</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p16438112312714"><a name="p16438112312714"></a><a name="p16438112312714"></a>int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p18438112315275"><a name="p18438112315275"></a><a name="p18438112315275"></a>规则生效节点。</p>
    </td>
    </tr>
    <tr id="row124381523182710"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p14438182302710"><a name="p14438182302710"></a><a name="p14438182302710"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5438723202714"><a name="p5438723202714"></a><a name="p5438723202714"></a>max_concurrency</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p154381323162718"><a name="p154381323162718"></a><a name="p154381323162718"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1243852352713"><a name="p1243852352713"></a><a name="p1243852352713"></a>规则最大并发数。</p>
    </td>
    </tr>
    <tr id="row1438172314271"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1438112316274"><a name="p1438112316274"></a><a name="p1438112316274"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1743819231272"><a name="p1743819231272"></a><a name="p1743819231272"></a>hit_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14438162317278"><a name="p14438162317278"></a><a name="p14438162317278"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p743819239274"><a name="p743819239274"></a><a name="p743819239274"></a>规则被命中的次数。</p>
    </td>
    </tr>
    <tr id="row1438172314272"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1438112316274"><a name="p1438112316274"></a><a name="p1438112316274"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1743819231272"><a name="p1743819231272"></a><a name="p1743819231272"></a>reject_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14438162317278"><a name="p14438162317278"></a><a name="p14438162317278"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p743819239274"><a name="p743819239274"></a><a name="p743819239274"></a>拦截SQL的次数。</p>
    </td>
    </tr>
    </tbody>
    </table>



-   gs\_delete\_sql\_limit(limit\_id)

    描述：删除指定id的规则。

    返回值类型：boolean

    **表 5**  gs\_delete\_sql\_limit参数说明

    <a name="table8437142313275"></a>
    <table><thead align="left"><tr id="row1043711239272"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p143752362717"><a name="p143752362717"></a><a name="p143752362717"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p3437112322718"><a name="p3437112322718"></a><a name="p3437112322718"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p11437192312711"><a name="p11437192312711"></a><a name="p11437192312711"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p9437102315277"><a name="p9437102315277"></a><a name="p9437102315277"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1752312714471"><a name="p1752312714471"></a><a name="p1752312714471"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1952322715470"><a name="p1952322715470"></a><a name="p1952322715470"></a>limit_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p752310274473"><a name="p752310274473"></a><a name="p752310274473"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p35595374713"><a name="p35595374713"></a><a name="p35595374713"></a>规则id。</p>
    </td>
    </tr>
    </tbody>
    </table>


