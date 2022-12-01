# PKG\_SERVICE<a name="ZH-CN_TOPIC_0304085685"></a>

PKG\_SERVICE支持的所有接口请参见[表1](#table35465232913)。

**表 1**  PKG\_SERVICE

<a name="table35465232913"></a>
<table><thead align="left"><tr id="row554714252919"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p125470216296"><a name="p125470216296"></a><a name="p125470216296"></a>接口名称</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1354716216291"><a name="p1354716216291"></a><a name="p1354716216291"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row2054718219291"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1954719211296"><a name="p1954719211296"></a><a name="p1954719211296"></a>PKG_SERVICE.SQL_IS_CONTEXT_ACTIVE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7547102182919"><a name="p7547102182919"></a><a name="p7547102182919"></a>确认该CONTEXT是否已注册。</p>
</td>
</tr>
<tr id="row1154710220294"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1754742142918"><a name="p1754742142918"></a><a name="p1754742142918"></a>PKG_SERVICE.SQL_CLEAN_ALL_CONTEXTS</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p15547162172918"><a name="p15547162172918"></a><a name="p15547162172918"></a>取消所有注册的CONTEXT。</p>
</td>
</tr>
<tr id="row12547527297"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12547132162912"><a name="p12547132162912"></a><a name="p12547132162912"></a>PKG_SERVICE.SQL_REGISTER_CONTEXT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p954732192910"><a name="p954732192910"></a><a name="p954732192910"></a>注册一个CONTEXT。</p>
</td>
</tr>
<tr id="row1581764719397"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1881774723919"><a name="p1881774723919"></a><a name="p1881774723919"></a>PKG_SERVICE.SQL_UNREGISTER_CONTEXT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p581754703915"><a name="p581754703915"></a><a name="p581754703915"></a>取消注册该CONTEXT。</p>
</td>
</tr>
<tr id="row436811513396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1736875115398"><a name="p1736875115398"></a><a name="p1736875115398"></a>PKG_SERVICE.SQL_SET_SQL</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p129361211292"><a name="p129361211292"></a><a name="p129361211292"></a>向CONTEXT设置一条SQL语句，目前只支持SELECT。</p>
</td>
</tr>
<tr id="row8603135417390"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1760365417392"><a name="p1760365417392"></a><a name="p1760365417392"></a>PKG_SERVICE.SQL_RUN</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17368165110397"><a name="p17368165110397"></a><a name="p17368165110397"></a>在一个CONTEXT上执行设置的SQL语句。</p>
</td>
</tr>
<tr id="row3547142142917"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p135472262913"><a name="p135472262913"></a><a name="p135472262913"></a>PKG_SERVICE.SQL_NEXT_ROW</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p135475252910"><a name="p135475252910"></a><a name="p135475252910"></a>读取该CONTEXT中的下一行数据。</p>
</td>
</tr>
<tr id="row10547192102916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1547202172920"><a name="p1547202172920"></a><a name="p1547202172920"></a>PKG_SERVICE.SQL_GET_VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p65471920290"><a name="p65471920290"></a><a name="p65471920290"></a>读取该CONTEXT中动态定义的列值</p>
</td>
</tr>
<tr id="row1254713216295"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p75472028298"><a name="p75472028298"></a><a name="p75472028298"></a>PKG_SERVICE.SQL_SET_RESULT_TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1954720210298"><a name="p1954720210298"></a><a name="p1954720210298"></a>根据类型OID动态定义该CONTEXT的一个列。</p>
</td>
</tr>
<tr id="row1823123816403"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1223113819408"><a name="p1223113819408"></a><a name="p1223113819408"></a>PKG_SERVICE.JOB_CANCEL</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1823193854010"><a name="p1823193854010"></a><a name="p1823193854010"></a>通过任务ID来删除定时任务。</p>
</td>
</tr>
<tr id="row7522114154010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p552394117407"><a name="p552394117407"></a><a name="p552394117407"></a>PKG_SERVICE.JOB_FINISH</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14523141114014"><a name="p14523141114014"></a><a name="p14523141114014"></a>禁用或者启用定时任务。</p>
</td>
</tr>
<tr id="row1179374418400"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1779334444015"><a name="p1779334444015"></a><a name="p1779334444015"></a>PKG_SERVICE.JOB_SUBMIT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p3793154404011"><a name="p3793154404011"></a><a name="p3793154404011"></a>提交一个定时任务。作业号由系统自动生成或由用户指定。</p>
</td>
</tr>
<tr id="row67931247194013"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p979354724015"><a name="p979354724015"></a><a name="p979354724015"></a>PKG_SERVICE.JOB_UPDATE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17793134764010"><a name="p17793134764010"></a><a name="p17793134764010"></a>修改定时任务的属性，包括任务内容、下次执行时间、执行间隔。</p>
</td>
</tr>
<tr id="row161710416102"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p15171413107"><a name="p15171413107"></a><a name="p15171413107"></a>PKG_SERVICE.SUBMIT_ON_NODES</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p617641121020"><a name="p617641121020"></a><a name="p617641121020"></a>提交一个任务到所有节点，作业号由系统自动生成。</p>
</td>
</tr>
<tr id="row15668114714107"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p106683471100"><a name="p106683471100"></a><a name="p106683471100"></a>PKG_SERVICE.ISUBMIT_ON_NODES</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19668104751014"><a name="p19668104751014"></a><a name="p19668104751014"></a>提交一个任务到所有节点，作业号由用户指定。</p>
</td>
</tr>
<tr id="row11322164081417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p232274091414"><a name="p232274091414"></a><a name="p232274091414"></a>PKG_SERVICE.SQL_GET_ARRAY_RESULT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p16322184061411"><a name="p16322184061411"></a><a name="p16322184061411"></a>获取该CONTEXT中返回的数组值。</p>
</td>
</tr>
<tr id="row328324401412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p7284164441414"><a name="p7284164441414"></a><a name="p7284164441414"></a>PKG_SERVICE.SQL_GET_VARIABLE_RESULT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6284174441410"><a name="p6284174441410"></a><a name="p6284174441410"></a>获取该CONTEXT中返回的列值。</p>
</td>
</tr>
</tbody>
</table>

-   PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE

    该函数用来确认一个CONTEXT是否已注册。该函数传入想查找的CONTEXT ID，如果该CONTEXT存在返回TRUE，反之返回FALSE。

    PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE函数原型为：

    ```
    PKG_SERVICE.SQL_IS_CONTEXT_ACTIVE(
     context_id     IN INTEGER
    )
    RETURN BOOLEAN;
    ```

    **表 2**  PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE接口说明

    <a name="table17293525913"></a>
    <table><thead align="left"><tr id="row19210355595"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p521735185918"><a name="p521735185918"></a><a name="p521735185918"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1622352599"><a name="p1622352599"></a><a name="p1622352599"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1128351593"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p42173575915"><a name="p42173575915"></a><a name="p42173575915"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p163173555917"><a name="p163173555917"></a><a name="p163173555917"></a>想查找的CONTEXT ID号</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_CLEAN\_ALL\_CONTEXTS

    该函数用来取消所有CONTEXT

    PKG\_SERVICE.SQL\_CLEAN\_ALL\_CONTEXTS函数原型为：

    ```
    PKG_SERVICE.SQL_CLEAN_ALL_CONTEXTS(
    )
    RETURN VOID;
    ```

-   PKG\_SERVICE.SQL\_REGISTER\_CONTEXT

    该函数用来打开一个CONTEXT，是后续对该CONTEXT进行各项操作的前提。该函数不传入任何参数，内部自动递增生成CONTEXT ID，并作为返回值返回给integer定义的变量。

    PKG\_SERVICE.SQL\_REGISTER\_CONTEXT函数原型为：

    ```
    DBE_SQL.REGISTER_CONTEXT(
    )
    RETURN INTEGER;
    ```

-   PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT

    该函数用来关闭一个CONTEXT，是该CONTEXT中各项操作的结束。如果在存储过程结束时没有调用该函数，则该CONTEXT占用的内存仍然会保存，因此关闭CONTEXT非常重要。由于异常情况的发生会中途退出存储过程，导致CONTEXT未能关闭，因此建议存储过程中有异常处理，将该接口包含在内。

    PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT函数原型为：

    ```
    PKG_SERVICE.SQL_UNREGISTER_CONTEXT(
     context_id     IN INTEGER
    )
    RETURN INTEGER;
    ```

    **表 3**  PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT接口说明

    <a name="table105061410179"></a>
    <table><thead align="left"><tr id="row551181419177"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1651171418173"><a name="p1651171418173"></a><a name="p1651171418173"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1151914121716"><a name="p1151914121716"></a><a name="p1151914121716"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row20511914111717"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p175111417174"><a name="p175111417174"></a><a name="p175111417174"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p125171410176"><a name="p125171410176"></a><a name="p125171410176"></a>打算关闭的CONTEXT ID号</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_SET\_SQL

    该函数用来解析给定游标的查询语句，被传入的查询语句会立即执行。目前仅支持SELECT查询语句的解析，且语句参数仅可通过text类型传递，长度不大于1G。

    PKG\_SERVICE.SQL\_SET\_SQL函数的原型为：

    ```
    PKG_SERVICE.SQL_SET_SQL(
    context_id     IN INTEGER,
    query_string   IN TEXT,
    language_flag  IN INTEGER
    )
    RETURN BOOLEAN;
    ```

    **表 4**  PKG\_SERVICE.SQL\_SET\_SQL接口说明

    <a name="table7984164412224"></a>
    <table><thead align="left"><tr id="row49841944112216"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p18984124417229"><a name="p18984124417229"></a><a name="p18984124417229"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p209842440223"><a name="p209842440223"></a><a name="p209842440223"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1998454417224"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9984204414226"><a name="p9984204414226"></a><a name="p9984204414226"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p59841644142218"><a name="p59841644142218"></a><a name="p59841644142218"></a>执行查询语句解析的CONTEXT ID</p>
    </td>
    </tr>
    <tr id="row1098411443223"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p20985174415221"><a name="p20985174415221"></a><a name="p20985174415221"></a>query_string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p11985744152219"><a name="p11985744152219"></a><a name="p11985744152219"></a>执行的查询语句</p>
    </td>
    </tr>
    <tr id="row1898564420220"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1198514412221"><a name="p1198514412221"></a><a name="p1198514412221"></a>language_flag</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19855442224"><a name="p19855442224"></a><a name="p19855442224"></a>版本语言号，目前只支持1</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_RUN

    该函数用来执行一个给定的CONTEXT。该函数接收一个CONTEXT ID，运行后获得的数据用于后续操作。目前仅支持SELECT查询语句的执行。

    PKG\_SERVICE.SQL\_RUN函数的原型为：

    ```
    PKG_SERVICE.SQL_RUN(
    context_id     IN INTEGER,
    )
    RETURN INTEGER;
    ```

    **表 5**  PKG\_SERVICE.SQL\_RUN接口说明

    <a name="table34211352454"></a>
    <table><thead align="left"><tr id="row3428355459"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p17424355450"><a name="p17424355450"></a><a name="p17424355450"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p2042123514511"><a name="p2042123514511"></a><a name="p2042123514511"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1442163564510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p34218351452"><a name="p34218351452"></a><a name="p34218351452"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6420357459"><a name="p6420357459"></a><a name="p6420357459"></a>执行查询语句解析的CONTEXT ID</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_NEXT\_ROW

    该函数返回符合查询条件的数据行数，每一次运行该接口都会获取到新的行数的集合，直到数据读取完毕获取不到新行为止。

    PKG\_SERVICE.SQL\_NEXT\_ROW函数的原型为：

    ```
    PKG_SERVICE.SQL_NEXT_ROW(
    context_id     IN INTEGER,
    )
    RETURN INTEGER;
    ```

    **表 6**  PKG\_SERVICE.SQL\_NEXT\_ROW接口说明

    <a name="table19385102812218"></a>
    <table><thead align="left"><tr id="row1538616281022"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p9386142819214"><a name="p9386142819214"></a><a name="p9386142819214"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p13386828624"><a name="p13386828624"></a><a name="p13386828624"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row13861128429"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p438610284219"><a name="p438610284219"></a><a name="p438610284219"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p33861728823"><a name="p33861728823"></a><a name="p33861728823"></a>执行的CONTEXT ID</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_GET\_VALUE

    该函数用来返回给定CONTEXT中给定位置的CONTEXT元素值，该接口访问的是PKG\_SERVICE.SQL\_NEXT\_ROW获取的数据。

    PKG\_SERVICE.SQL\_GET\_VALUE函数的原型为：

    ```
    PKG_SERVICE.SQL_GET_VALUE(
    context_id          IN    INTEGER,
    pos                 IN    INTEGER,
    col_type            IN    ANYELEMENT
    )
    RETURN ANYELEMENT;
    ```

    **表 7**  PKG\_SERVICE.SQL\_GET\_VALUE接口说明

    <a name="table22882245812"></a>
    <table><thead align="left"><tr id="row18281622155819"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p12281822145813"><a name="p12281822145813"></a><a name="p12281822145813"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1428112214584"><a name="p1428112214584"></a><a name="p1428112214584"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row172842213589"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17282226582"><a name="p17282226582"></a><a name="p17282226582"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p112813223587"><a name="p112813223587"></a><a name="p112813223587"></a>执行的CONTEXT ID</p>
    </td>
    </tr>
    <tr id="row1928172245813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p82952211581"><a name="p82952211581"></a><a name="p82952211581"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p132972265818"><a name="p132972265818"></a><a name="p132972265818"></a>动态定义列在查询中的位置</p>
    </td>
    </tr>
    <tr id="row1929102265819"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p132972212584"><a name="p132972212584"></a><a name="p132972212584"></a>col_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p929142211581"><a name="p929142211581"></a><a name="p929142211581"></a>任意类型变量，定义列的返回值类型</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE

    该函数用来定义从给定CONTEXT返回的列，该接口只能应用于SELECT定义的CONTEXT中。定义的列通过查询列表的相对位置来标识，PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE函数的原型为：

    ```
    PKG_SERVICE.SQL_SET_RESULT_TYPE(
    context_id     IN INTEGER,
    pos            IN INTEGER,
    coltype_oid    IN ANYELEMENT,
    maxsize        IN INTEGER
    )
    RETURN INTEGER;
    ```

    **表 8**  PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE接口说明

    <a name="table62711212164315"></a>
    <table><thead align="left"><tr id="row62721112204320"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p62721012124317"><a name="p62721012124317"></a><a name="p62721012124317"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p527213126432"><a name="p527213126432"></a><a name="p527213126432"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row8272101212438"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16988545194310"><a name="p16988545194310"></a><a name="p16988545194310"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p627211294317"><a name="p627211294317"></a><a name="p627211294317"></a>执行的CONTEXT ID。</p>
    </td>
    </tr>
    <tr id="row627231234317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1327251217437"><a name="p1327251217437"></a><a name="p1327251217437"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p152724124432"><a name="p152724124432"></a><a name="p152724124432"></a>动态定义列在查询中的位置。</p>
    </td>
    </tr>
    <tr id="row182726127439"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p172721312154313"><a name="p172721312154313"></a><a name="p172721312154313"></a>coltype_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13456912554"><a name="p13456912554"></a><a name="p13456912554"></a>任意类型的变量，可根据变量类型得到对应类型OID。</p>
    </td>
    </tr>
    <tr id="row15272012204317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2272151213431"><a name="p2272151213431"></a><a name="p2272151213431"></a>maxsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p52720120435"><a name="p52720120435"></a><a name="p52720120435"></a>定义的列的长度。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.JOB\_CANCEL

    存储过程CANCEL删除指定的定时任务。

    PKG\_SERVICE.JOB\_CANCEL函数原型为：

    ```
    PKG_SERVICE.JOB_CANCEL(
    job  IN  INTEGER);
    ```

    **表 9**  PKG\_SERVICE.JOB\_CANCEL接口参数说明

    <a name="zh-cn_topic_0059779362_table16993201411172"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059779362_row1799411144177"><th class="cellrowborder" valign="top" width="10.12%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0059779362_p2994181451711"><a name="zh-cn_topic_0059779362_p2994181451711"></a><a name="zh-cn_topic_0059779362_p2994181451711"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="10%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0059779362_p8540131010218"><a name="zh-cn_topic_0059779362_p8540131010218"></a><a name="zh-cn_topic_0059779362_p8540131010218"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.2%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0059779362_p740218106212"><a name="zh-cn_topic_0059779362_p740218106212"></a><a name="zh-cn_topic_0059779362_p740218106212"></a>入参/出参</p>
    </th>
    <th class="cellrowborder" valign="top" width="19.36%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0059779362_p1757615310914"><a name="zh-cn_topic_0059779362_p1757615310914"></a><a name="zh-cn_topic_0059779362_p1757615310914"></a>是否可以为空</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.32%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0059779362_p599401410176"><a name="zh-cn_topic_0059779362_p599401410176"></a><a name="zh-cn_topic_0059779362_p599401410176"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059779362_row129941014191717"><td class="cellrowborder" valign="top" width="10.12%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p129941814171715"><a name="zh-cn_topic_0059779362_p129941814171715"></a><a name="zh-cn_topic_0059779362_p129941814171715"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="10%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p163816101226"><a name="zh-cn_topic_0059779362_p163816101226"></a><a name="zh-cn_topic_0059779362_p163816101226"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.2%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p153841020221"><a name="zh-cn_topic_0059779362_p153841020221"></a><a name="zh-cn_topic_0059779362_p153841020221"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p1786821410914"><a name="zh-cn_topic_0059779362_p1786821410914"></a><a name="zh-cn_topic_0059779362_p1786821410914"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.32%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p1099451411173"><a name="zh-cn_topic_0059779362_p1099451411173"></a><a name="zh-cn_topic_0059779362_p1099451411173"></a>指定的作业号。</p>
    </td>
    </tr>
    </tbody>
    </table>

    示例：

    ```
    CALL PKG_SERVICE.JOB_CANCEL(101);
    ```

-   PKG\_SERVICE.JOB\_FINISH

    存储过程FINISH禁用或者启用定时任务。

    PKG\_SERVICE.JOB\_FINISH函数原型为：

    ```
    PKG_SERVICE.JOB_FINISH(
    id          IN   INTEGER,
    finished      IN   BOOLEAN,
    next_time    IN   TIMESTAMP  DEFAULT  sysdate);
    ```

    **表 10**  PKG\_SERVICE.JOB\_FINISH接口参数说明

    <a name="zh-cn_topic_0059779362_table10994171414178"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059779362_row10994161441714"><th class="cellrowborder" valign="top" width="12.97%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0059779362_p1995141415174"><a name="zh-cn_topic_0059779362_p1995141415174"></a><a name="zh-cn_topic_0059779362_p1995141415174"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.19%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0059779362_p1936681622310"><a name="zh-cn_topic_0059779362_p1936681622310"></a><a name="zh-cn_topic_0059779362_p1936681622310"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.76%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0059779362_p1736614160237"><a name="zh-cn_topic_0059779362_p1736614160237"></a><a name="zh-cn_topic_0059779362_p1736614160237"></a>入参/出参</p>
    </th>
    <th class="cellrowborder" valign="top" width="7.5200000000000005%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0059779362_p1105129710950"><a name="zh-cn_topic_0059779362_p1105129710950"></a><a name="zh-cn_topic_0059779362_p1105129710950"></a>是否可以为空</p>
    </th>
    <th class="cellrowborder" valign="top" width="53.559999999999995%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0059779362_p1799517148171"><a name="zh-cn_topic_0059779362_p1799517148171"></a><a name="zh-cn_topic_0059779362_p1799517148171"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059779362_row5995101481718"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p0995131471710"><a name="zh-cn_topic_0059779362_p0995131471710"></a><a name="zh-cn_topic_0059779362_p0995131471710"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p19366141672315"><a name="zh-cn_topic_0059779362_p19366141672315"></a><a name="zh-cn_topic_0059779362_p19366141672315"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p17366816192319"><a name="zh-cn_topic_0059779362_p17366816192319"></a><a name="zh-cn_topic_0059779362_p17366816192319"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p5118565110950"><a name="zh-cn_topic_0059779362_p5118565110950"></a><a name="zh-cn_topic_0059779362_p5118565110950"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p299514147178"><a name="zh-cn_topic_0059779362_p299514147178"></a><a name="zh-cn_topic_0059779362_p299514147178"></a>指定的作业号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row1899531411177"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p2995141420172"><a name="zh-cn_topic_0059779362_p2995141420172"></a><a name="zh-cn_topic_0059779362_p2995141420172"></a>finished</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p17366816162319"><a name="zh-cn_topic_0059779362_p17366816162319"></a><a name="zh-cn_topic_0059779362_p17366816162319"></a><span id="text1759883862519"><a name="text1759883862519"></a><a name="text1759883862519"></a>Boolean</span></p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p1036719161238"><a name="zh-cn_topic_0059779362_p1036719161238"></a><a name="zh-cn_topic_0059779362_p1036719161238"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p1635471610950"><a name="zh-cn_topic_0059779362_p1635471610950"></a><a name="zh-cn_topic_0059779362_p1635471610950"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p69951614141719"><a name="zh-cn_topic_0059779362_p69951614141719"></a><a name="zh-cn_topic_0059779362_p69951614141719"></a>状态标志位，true代表禁用，false代表启用。根据true或false值更新当前job；如果为空值，则不改变原有job的状态。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row499521419175"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p1499681414173"><a name="zh-cn_topic_0059779362_p1499681414173"></a><a name="zh-cn_topic_0059779362_p1499681414173"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p23679165237"><a name="zh-cn_topic_0059779362_p23679165237"></a><a name="zh-cn_topic_0059779362_p23679165237"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p536717161235"><a name="zh-cn_topic_0059779362_p536717161235"></a><a name="zh-cn_topic_0059779362_p536717161235"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p5769349910950"><a name="zh-cn_topic_0059779362_p5769349910950"></a><a name="zh-cn_topic_0059779362_p5769349910950"></a>是</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p139962147178"><a name="zh-cn_topic_0059779362_p139962147178"></a><a name="zh-cn_topic_0059779362_p139962147178"></a>下次运行时间，默认为当前系统时间。如果参数broken状态为true，则更新该参数为'4000-1-1'；如果参数broken状态为false，且如果参数next_time不为空值，则更新指定job的next_time值，如果next_time为空值，则不更新next_time值。该参数可以省略，为默认值。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.JOB\_SUBMIT

    存储过程JOB\_SUBMIT提交一个系统提供的定时任务。

    PKG\_SERVICE.JOB\_SUBMIT函数原型为：

    ```
    PKG_SERVICE.JOB_SUBMIT(
    id            IN   BIGINT DEFAULT,
    content       IN   TEXT,
    next_date     IN   TIMESTAMP DEFAULT sysdate,
    interval_time IN   TEXT  DEFAULT 'null',
    job           OUT  INTEGER);
    ```

    >![](public_sys-resources/icon-note.png) **说明：**
    >当创建一个定时任务（JOB）时，系统默认将当前数据库和用户名与当前创建的定时任务绑定起来。该接口函数可以通过call或select调用，如果通过select调用，可以不填写出参。如果在存储过程中，则需要通过perform调用该接口函数。如果提交的sql语句任务使用到非public的schema，应该指定表或者函数的schema，或者在sql语句前添加set current\_schema = xxx;语句。

    **表 11**  PKG\_SERVICE.JOB\_SUBMIT接口参数说明

    <a name="zh-cn_topic_0059779362_table8990101441711"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059779362_row899041461718"><th class="cellrowborder" valign="top" width="14.05%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0059779362_p9990201417173"><a name="zh-cn_topic_0059779362_p9990201417173"></a><a name="zh-cn_topic_0059779362_p9990201417173"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.9%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0059779362_p685019219183"><a name="zh-cn_topic_0059779362_p685019219183"></a><a name="zh-cn_topic_0059779362_p685019219183"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.370000000000001%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0059779362_p26135218181"><a name="zh-cn_topic_0059779362_p26135218181"></a><a name="zh-cn_topic_0059779362_p26135218181"></a>入参/出参</p>
    </th>
    <th class="cellrowborder" valign="top" width="10.71%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0059779362_p2515812510718"><a name="zh-cn_topic_0059779362_p2515812510718"></a><a name="zh-cn_topic_0059779362_p2515812510718"></a>是否可以为空</p>
    </th>
    <th class="cellrowborder" valign="top" width="52.96999999999999%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0059779362_p1199021451717"><a name="zh-cn_topic_0059779362_p1199021451717"></a><a name="zh-cn_topic_0059779362_p1199021451717"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1980781410219"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="p16279430203813"><a name="p16279430203813"></a><a name="p16279430203813"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="p2077717217212"><a name="p2077717217212"></a><a name="p2077717217212"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="p2777132112215"><a name="p2777132112215"></a><a name="p2777132112215"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1877782132115"><a name="p1877782132115"></a><a name="p1877782132115"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="p7130545173811"><a name="p7130545173811"></a><a name="p7130545173811"></a>作业号。如果传入id为NULL，则内部会生成作业ID。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row17991121411179"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p39911014161710"><a name="zh-cn_topic_0059779362_p39911014161710"></a><a name="zh-cn_topic_0059779362_p39911014161710"></a>context</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p12569131617193"><a name="zh-cn_topic_0059779362_p12569131617193"></a><a name="zh-cn_topic_0059779362_p12569131617193"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p957081619192"><a name="zh-cn_topic_0059779362_p957081619192"></a><a name="zh-cn_topic_0059779362_p957081619192"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p6108459910718"><a name="zh-cn_topic_0059779362_p6108459910718"></a><a name="zh-cn_topic_0059779362_p6108459910718"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p3991181416179"><a name="zh-cn_topic_0059779362_p3991181416179"></a><a name="zh-cn_topic_0059779362_p3991181416179"></a>要执行的SQL语句。支持一个或多个‘DML’，‘匿名块’，‘调用存储过程的语句’或3种混合的场景。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row19991171441719"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p20991181413178"><a name="zh-cn_topic_0059779362_p20991181413178"></a><a name="zh-cn_topic_0059779362_p20991181413178"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p1457031681920"><a name="zh-cn_topic_0059779362_p1457031681920"></a><a name="zh-cn_topic_0059779362_p1457031681920"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p5570216181917"><a name="zh-cn_topic_0059779362_p5570216181917"></a><a name="zh-cn_topic_0059779362_p5570216181917"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p5003400810718"><a name="zh-cn_topic_0059779362_p5003400810718"></a><a name="zh-cn_topic_0059779362_p5003400810718"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p2991614141719"><a name="zh-cn_topic_0059779362_p2991614141719"></a><a name="zh-cn_topic_0059779362_p2991614141719"></a>下次作业运行时间。默认值为当前系统时间（sysdate）。如果是过去时间，在提交作业时表示立即执行。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row11991151471712"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p799141415179"><a name="zh-cn_topic_0059779362_p799141415179"></a><a name="zh-cn_topic_0059779362_p799141415179"></a>interval_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p157081610197"><a name="zh-cn_topic_0059779362_p157081610197"></a><a name="zh-cn_topic_0059779362_p157081610197"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p9571201615194"><a name="zh-cn_topic_0059779362_p9571201615194"></a><a name="zh-cn_topic_0059779362_p9571201615194"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p786686410718"><a name="zh-cn_topic_0059779362_p786686410718"></a><a name="zh-cn_topic_0059779362_p786686410718"></a>是</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p119911014171719"><a name="zh-cn_topic_0059779362_p119911014171719"></a><a name="zh-cn_topic_0059779362_p119911014171719"></a>用来计算下次作业运行时间的时间表达式，可以是interval表达式，也可以是sysdate加上一个numeric值（例如：sysdate+1.0/24）。如果为空值或字符串"null"表示只执行一次，执行后JOB状态STATUS变成'd' 不再执行。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row49911714171714"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p9812033124647"><a name="zh-cn_topic_0059779362_p9812033124647"></a><a name="zh-cn_topic_0059779362_p9812033124647"></a>job</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p56577178124647"><a name="zh-cn_topic_0059779362_p56577178124647"></a><a name="zh-cn_topic_0059779362_p56577178124647"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p19348667124647"><a name="zh-cn_topic_0059779362_p19348667124647"></a><a name="zh-cn_topic_0059779362_p19348667124647"></a>OUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p5712707010718"><a name="zh-cn_topic_0059779362_p5712707010718"></a><a name="zh-cn_topic_0059779362_p5712707010718"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="p1819145612223"><a name="p1819145612223"></a><a name="p1819145612223"></a>作业号。范围为1～32767。当使用select调用pkg_service.job_submit时，该参数可以省略。</p>
    </td>
    </tr>
    </tbody>
    </table>

    示例：

    ```
    SELECT PKG_SERVICE.JOB_SUBMIT(NULL, 'call pro_xxx();', to_date('20180101','yyyymmdd'),'sysdate+1');

    SELECT PKG_SERVICE.JOB_SUBMIT(NULL, 'call pro_xxx();', to_date('20180101','yyyymmdd'),'sysdate+1.0/24');

    CALL PKG_SERVICE.JOB_SUBMIT(NULL, 'INSERT INTO T_JOB  VALUES(1);  call pro_1(); call pro_2();', add_months(to_date('201701','yyyymm'),1), 'date_trunc(''day'',SYSDATE) + 1 +(8*60+30.0)/(24*60)' ,:jobid);

    SELECT PKG_SERVICE.JOB_SUBMIT (101, 'insert_msg_statistic1;', sysdate, 'sysdate+3.0/24');
    ```

-   PKG\_SERVICE.JOB\_UPDATE

    存储过程UPDATE修改定时任务的属性，包括任务内容、下次执行时间、执行间隔。

    PKG\_SERVICE.JOB\_UPDATE函数原型为：

    ```
    PKG_SERVICE.JOB_UPDATE(
    id             IN   BIGINT,
    next_time      IN   TIMESTAMP,
    interval_time  IN   TEXT,
    content        IN   TEXT);
    ```

    **表 12**  PKG\_SERVICE.JOB\_UPDATE接口参数说明

    <a name="zh-cn_topic_0059779362_table7996914151714"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059779362_row1997101411174"><th class="cellrowborder" valign="top" width="11.559999999999999%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0059779362_p799711145171"><a name="zh-cn_topic_0059779362_p799711145171"></a><a name="zh-cn_topic_0059779362_p799711145171"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.17%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0059779362_p77549574233"><a name="zh-cn_topic_0059779362_p77549574233"></a><a name="zh-cn_topic_0059779362_p77549574233"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.5%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0059779362_p15754257112317"><a name="zh-cn_topic_0059779362_p15754257112317"></a><a name="zh-cn_topic_0059779362_p15754257112317"></a>入参/出参</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.67%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0059779362_p66133554101038"><a name="zh-cn_topic_0059779362_p66133554101038"></a><a name="zh-cn_topic_0059779362_p66133554101038"></a>是否可以为空</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.10000000000001%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0059779362_p13997814101716"><a name="zh-cn_topic_0059779362_p13997814101716"></a><a name="zh-cn_topic_0059779362_p13997814101716"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059779362_row1699741410179"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p1799841419173"><a name="zh-cn_topic_0059779362_p1799841419173"></a><a name="zh-cn_topic_0059779362_p1799841419173"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p575417578231"><a name="zh-cn_topic_0059779362_p575417578231"></a><a name="zh-cn_topic_0059779362_p575417578231"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p07541657152318"><a name="zh-cn_topic_0059779362_p07541657152318"></a><a name="zh-cn_topic_0059779362_p07541657152318"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p28521301101038"><a name="zh-cn_topic_0059779362_p28521301101038"></a><a name="zh-cn_topic_0059779362_p28521301101038"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p189981214171714"><a name="zh-cn_topic_0059779362_p189981214171714"></a><a name="zh-cn_topic_0059779362_p189981214171714"></a>指定的作业号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row8998131461711"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p59981143177"><a name="zh-cn_topic_0059779362_p59981143177"></a><a name="zh-cn_topic_0059779362_p59981143177"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p87541457122314"><a name="zh-cn_topic_0059779362_p87541457122314"></a><a name="zh-cn_topic_0059779362_p87541457122314"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p19754155782319"><a name="zh-cn_topic_0059779362_p19754155782319"></a><a name="zh-cn_topic_0059779362_p19754155782319"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p10270943101038"><a name="zh-cn_topic_0059779362_p10270943101038"></a><a name="zh-cn_topic_0059779362_p10270943101038"></a>是</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p29287719225110"><a name="zh-cn_topic_0059779362_p29287719225110"></a><a name="zh-cn_topic_0059779362_p29287719225110"></a>下次运行时间。如果该参数为空值，则不更新指定job的next_time值，否则更新指定job的next_time值。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779362_row129980146178"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p17999514191711"><a name="zh-cn_topic_0059779362_p17999514191711"></a><a name="zh-cn_topic_0059779362_p17999514191711"></a>interval_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p5754457112314"><a name="zh-cn_topic_0059779362_p5754457112314"></a><a name="zh-cn_topic_0059779362_p5754457112314"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p775417572235"><a name="zh-cn_topic_0059779362_p775417572235"></a><a name="zh-cn_topic_0059779362_p775417572235"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p18961287101038"><a name="zh-cn_topic_0059779362_p18961287101038"></a><a name="zh-cn_topic_0059779362_p18961287101038"></a>是</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p199991314101716"><a name="zh-cn_topic_0059779362_p199991314101716"></a><a name="zh-cn_topic_0059779362_p199991314101716"></a>用来计算下次作业运行时间的时间表达式。如果该参数为空值，则不更新指定job的interval_time值；如果该参数不为空值，会校验interval_time是否为有效的时间类型或interval类型，则更新指定job的interval_time值。如果为字符串"null"表示只执行一次，执行后JOB状态STATUS变成'd' 不再执行。</p>
    </td>
    </tr>
    <tr id="row10639236203016"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0059779362_p1599891412175"><a name="zh-cn_topic_0059779362_p1599891412175"></a><a name="zh-cn_topic_0059779362_p1599891412175"></a>content</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0059779362_p117545575232"><a name="zh-cn_topic_0059779362_p117545575232"></a><a name="zh-cn_topic_0059779362_p117545575232"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0059779362_p117543578232"><a name="zh-cn_topic_0059779362_p117543578232"></a><a name="zh-cn_topic_0059779362_p117543578232"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0059779362_p55799599101038"><a name="zh-cn_topic_0059779362_p55799599101038"></a><a name="zh-cn_topic_0059779362_p55799599101038"></a>是</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0059779362_p29987145175"><a name="zh-cn_topic_0059779362_p29987145175"></a><a name="zh-cn_topic_0059779362_p29987145175"></a>执行的存储过程名或者sql语句块。如果该参数为空值，则不更新指定job的content值，否则更新指定job的content值。</p>
    </td>
    </tr>
    </tbody>
    </table>

    示例：

    ```
    CALL PKG_SERVICE.JOB_UPDATE(101, 'call userproc();', sysdate, 'sysdate + 1.0/1440');
    CALL PKG_SERVICE.JOB_UPDATE(101, 'insert into tbl_a values(sysdate);', sysdate, 'sysdate + 1.0/1440');
    ```

-   PKG\_SERVICE.SUBMIT\_ON\_NODES

    存储过程SUBMIT\_ON\_NODES创建一个结点上的定时任务，仅sysadmin/monitor admin有此权限。

    PKG\_SERVICE.SUBMIT\_ON\_NODES函数原型为：

    ```
    PKG_SERVICE.SUBMIT_ON_NODES(
    node_name    IN   TEXT,
    database     IN   TEXT
    what         IN   TEXT,
    next_date    IN   TIMESTAMP DEFAULT sysdate,
    job_interval IN   TEXT  DEFAULT 'null',
    job          OUT  INTEGER);
    ```

    **表 13**  PKG\_SERVICE.SUBMIT\_ON\_NODES接口参数说明

    <a name="table786824514463"></a>
    <table><thead align="left"><tr id="row68691245124619"><th class="cellrowborder" valign="top" width="14.050000000000004%" id="mcps1.2.6.1.1"><p id="p208691845154611"><a name="p208691845154611"></a><a name="p208691845154611"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.480000000000002%" id="mcps1.2.6.1.2"><p id="p1286914459463"><a name="p1286914459463"></a><a name="p1286914459463"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="13.790000000000003%" id="mcps1.2.6.1.3"><p id="p168691745124616"><a name="p168691745124616"></a><a name="p168691745124616"></a>入参/出参</p>
    </th>
    <th class="cellrowborder" valign="top" width="10.71%" id="mcps1.2.6.1.4"><p id="p986911458468"><a name="p986911458468"></a><a name="p986911458468"></a>是否可以为空</p>
    </th>
    <th class="cellrowborder" valign="top" width="52.970000000000006%" id="mcps1.2.6.1.5"><p id="p48691045124613"><a name="p48691045124613"></a><a name="p48691045124613"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row15659812104719"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p11659012164719"><a name="p11659012164719"></a><a name="p11659012164719"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p2660191224720"><a name="p2660191224720"></a><a name="p2660191224720"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p466091234714"><a name="p466091234714"></a><a name="p466091234714"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p9660812144716"><a name="p9660812144716"></a><a name="p9660812144716"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1666013126472"><a name="p1666013126472"></a><a name="p1666013126472"></a>指定作业的执行节点，当前仅支持值为'ALL_NODE'（在所有节点执行）与'CCN'（注：CCN在集中式/小型化环境下无意义）。</p>
    </td>
    </tr>
    <tr id="row14515188164715"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p951618820471"><a name="p951618820471"></a><a name="p951618820471"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p551613813479"><a name="p551613813479"></a><a name="p551613813479"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p205161819472"><a name="p205161819472"></a><a name="p205161819472"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1351628184720"><a name="p1351628184720"></a><a name="p1351628184720"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1951617884714"><a name="p1951617884714"></a><a name="p1951617884714"></a>数据库实例作业所使用的database，节点类型为'ALL_NODE'时仅支持值为'postgres'。</p>
    </td>
    </tr>
    <tr id="row1286964524610"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p586924511464"><a name="p586924511464"></a><a name="p586924511464"></a>what</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p7869114594619"><a name="p7869114594619"></a><a name="p7869114594619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p158691545194613"><a name="p158691545194613"></a><a name="p158691545194613"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p148692457461"><a name="p148692457461"></a><a name="p148692457461"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1686964510463"><a name="p1686964510463"></a><a name="p1686964510463"></a>要执行的SQL语句。支持一个或多个‘DML’，‘匿名块’，‘调用存储过程的语句’或3种混合的场景。</p>
    </td>
    </tr>
    <tr id="row08691845184620"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p586934510462"><a name="p586934510462"></a><a name="p586934510462"></a>nextdate</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p5870104584619"><a name="p5870104584619"></a><a name="p5870104584619"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p13870194517467"><a name="p13870194517467"></a><a name="p13870194517467"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p587074515464"><a name="p587074515464"></a><a name="p587074515464"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p148702456461"><a name="p148702456461"></a><a name="p148702456461"></a>下次作业运行时间。默认值为当前系统时间（sysdate）。如果是过去时间，在提交作业时表示立即执行。</p>
    </td>
    </tr>
    <tr id="row12870174554619"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p38701045164614"><a name="p38701045164614"></a><a name="p38701045164614"></a>job_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p18870164524619"><a name="p18870164524619"></a><a name="p18870164524619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p1487015455462"><a name="p1487015455462"></a><a name="p1487015455462"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p168701245134616"><a name="p168701245134616"></a><a name="p168701245134616"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p187018452469"><a name="p187018452469"></a><a name="p187018452469"></a>用来计算下次作业运行时间的时间表达式，可以是interval表达式，也可以是sysdate加上一个numeric值（例如：sysdate+1.0/24）。如果为空值或字符串"null"表示只执行一次，执行后JOB状态STATUS变成'd'不再执行。</p>
    </td>
    </tr>
    <tr id="row198701445114618"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p1687017454462"><a name="p1687017454462"></a><a name="p1687017454462"></a>job</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p1487094520465"><a name="p1487094520465"></a><a name="p1487094520465"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p1487084515468"><a name="p1487084515468"></a><a name="p1487084515468"></a>OUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1287044511467"><a name="p1287044511467"></a><a name="p1287044511467"></a>否</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p47271715155020"><a name="p47271715155020"></a><a name="p47271715155020"></a>作业号。范围为1～32767。当使用select调用dbms.submit_on_nodes时，该参数可以省略。</p>
    </td>
    </tr>
    </tbody>
    </table>

    示例：

    ```
    select pkg_service.submit_on_nodes('ALL_NODE', 'postgres', 'select capture_view_to_json(''dbe_perf.statement'', 0);', sysdate, 'interval ''60 second''');
    select pkg_service.submit_on_nodes('CCN', 'postgres', 'select capture_view_to_json(''dbe_perf.statement'', 0);', sysdate, 'interval ''60 second''');
    ```

-   PKG\_SERVICE.ISUBMIT\_ON\_NODES

    ISUBMIT\_ON\_NODES与SUBMIT\_ON\_NODES语法功能相同，但其第一个参数是入参，即指定的作业号，SUBMIT最后一个参数是出参，表示系统自动生成的作业号。仅sysadmin/monitor admin有此权限。

-   PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT

    该函数用来返回绑定的数组类型的OUT参数的值，可以用来获取存储过程中的OUT参数。

    PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT函数原型为：

    ```
    PKG_SERVICE.SQL_GET_ARRAY_RESULT(
        context_id in int,
        pos in VARCHAR2,
        column_value inout anyarray,
        result_type in anyelement
    );
    ```

    **表 14**  PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT接口说明

    <a name="table1936782142115"></a>
    <table><thead align="left"><tr id="row4367122162117"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1736717211215"><a name="p1736717211215"></a><a name="p1736717211215"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p17367222215"><a name="p17367222215"></a><a name="p17367222215"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row236711215219"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p113672218217"><a name="p113672218217"></a><a name="p113672218217"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13672027214"><a name="p13672027214"></a><a name="p13672027214"></a>想查找的CONTEXT ID号。</p>
    </td>
    </tr>
    <tr id="row16389125912235"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1139055902314"><a name="p1139055902314"></a><a name="p1139055902314"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p339014596231"><a name="p339014596231"></a><a name="p339014596231"></a>绑定的参数名。</p>
    </td>
    </tr>
    <tr id="row52766716248"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p127677152415"><a name="p127677152415"></a><a name="p127677152415"></a>column_value</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p02775732419"><a name="p02775732419"></a><a name="p02775732419"></a>返回值。</p>
    </td>
    </tr>
    <tr id="row9645103182412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66451317241"><a name="p66451317241"></a><a name="p66451317241"></a>result_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p464513317243"><a name="p464513317243"></a><a name="p464513317243"></a>返回值类型。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT

    该函数用来返回绑定的非数组类型的OUT参数的值，可以用来获取存储过程中的OUT参数。

    PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT函数原型为：

    ```
    PKG_SERVICE.SQL_GET_VARIABLE_RESULT(
        context_id in int,
        pos in VARCHAR2,
        result_type in anyelement
    )
    RETURNS anyelement;
    ```

    **表 15**  PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT接口说明

    <a name="table8698191117218"></a>
    <table><thead align="left"><tr id="row6698121172115"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p12698201162118"><a name="p12698201162118"></a><a name="p12698201162118"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p19698161113218"><a name="p19698161113218"></a><a name="p19698161113218"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row3698101142113"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p136981611152112"><a name="p136981611152112"></a><a name="p136981611152112"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5698121116211"><a name="p5698121116211"></a><a name="p5698121116211"></a>想查找的CONTEXT ID号。</p>
    </td>
    </tr>
    <tr id="row2371252112717"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p173721252142715"><a name="p173721252142715"></a><a name="p173721252142715"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p143721952132718"><a name="p143721952132718"></a><a name="p143721952132718"></a>绑定的参数名。</p>
    </td>
    </tr>
    <tr id="row195665612712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1356185622718"><a name="p1356185622718"></a><a name="p1356185622718"></a>result_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p165685652710"><a name="p165685652710"></a><a name="p165685652710"></a>返回值类型。</p>
    </td>
    </tr>
    </tbody>
    </table>
