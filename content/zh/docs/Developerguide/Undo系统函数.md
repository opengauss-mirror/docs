# Undo系统函数<a name="ZH-CN_TOPIC_0000001135762588"></a>

-   gs\_undo\_meta\(type, zoneId, location\)

    描述：Undo各模块元信息。

    参数说明：

    -   type\(元信息类型\)

        0表示Undo Zone\(Record\) 对应的元信息。

        1表示Undo Zone\(Transaction Slot\) 对应的元信息。

        2表示Undo Space\(Record\) 对应的元信息。

        3表示Undo Space\(Transaction Slot\) 对应的元信息。

    -   zoneId\(undo zone编号\)

        -1表示所有undo zone的元信息。

        0-1024\*1024表示对应zoneid的元信息。

    -   location\(读取位置）

        0表示从当前内存中读取。

        1表示从物理文件中读取。

    返回值类型：record

    **表 1**  gs\_undo\_meta\(0,-1,0\)输出示例

    <a name="table2023492254414"></a>
    <table><thead align="left"><tr id="row13234172284416"><th class="cellrowborder" valign="top" width="15.72%" id="mcps1.2.5.1.1"><p id="p14234102244415"><a name="p14234102244415"></a><a name="p14234102244415"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="19.61%" id="mcps1.2.5.1.2"><p id="p02341922154413"><a name="p02341922154413"></a><a name="p02341922154413"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="17.549999999999997%" id="mcps1.2.5.1.3"><p id="p7235142234418"><a name="p7235142234418"></a><a name="p7235142234418"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="47.12%" id="mcps1.2.5.1.4"><p id="p623592264411"><a name="p623592264411"></a><a name="p623592264411"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1023532224418"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p137136111014"><a name="p137136111014"></a><a name="p137136111014"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p1241184310102"><a name="p1241184310102"></a><a name="p1241184310102"></a>zoneId</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p1757585801014"><a name="p1757585801014"></a><a name="p1757585801014"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p10820654117"><a name="p10820654117"></a><a name="p10820654117"></a>undo zone的id。</p>
    </td>
    </tr>
    <tr id="row671914511910"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p47361617102"><a name="p47361617102"></a><a name="p47361617102"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p32411743111020"><a name="p32411743111020"></a><a name="p32411743111020"></a>persistType</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p55751958111019"><a name="p55751958111019"></a><a name="p55751958111019"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p1482013571120"><a name="p1482013571120"></a><a name="p1482013571120"></a>持久化级别。</p>
    </td>
    </tr>
    <tr id="row153518512915"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p738867191011"><a name="p738867191011"></a><a name="p738867191011"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p324194320104"><a name="p324194320104"></a><a name="p324194320104"></a>insert</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p8575185813105"><a name="p8575185813105"></a><a name="p8575185813105"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p108208513119"><a name="p108208513119"></a><a name="p108208513119"></a>下一条插入的undo记录位置。</p>
    </td>
    </tr>
    <tr id="row20387551919"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p6656881017"><a name="p6656881017"></a><a name="p6656881017"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p72412436102"><a name="p72412436102"></a><a name="p72412436102"></a>discard</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p55751958141012"><a name="p55751958141012"></a><a name="p55751958141012"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p138201256110"><a name="p138201256110"></a><a name="p138201256110"></a>普通回收到的undo记录位置。</p>
    </td>
    </tr>
    <tr id="row171016581798"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p1368720811106"><a name="p1368720811106"></a><a name="p1368720811106"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p132411143121016"><a name="p132411143121016"></a><a name="p132411143121016"></a>end</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p45751458171016"><a name="p45751458171016"></a><a name="p45751458171016"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p19820185131111"><a name="p19820185131111"></a><a name="p19820185131111"></a>强制回收掉undo记录位置，小于它的undo记录已经被回收。</p>
    </td>
    </tr>
    <tr id="row20167317101"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p2888159141018"><a name="p2888159141018"></a><a name="p2888159141018"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p324211435107"><a name="p324211435107"></a><a name="p324211435107"></a>used</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p1857535820104"><a name="p1857535820104"></a><a name="p1857535820104"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p10820350119"><a name="p10820350119"></a><a name="p10820350119"></a>已经使用的undo空间。</p>
    </td>
    </tr>
    <tr id="row1739111411103"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p1795621412106"><a name="p1795621412106"></a><a name="p1795621412106"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p62421943141018"><a name="p62421943141018"></a><a name="p62421943141018"></a>lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p457517588107"><a name="p457517588107"></a><a name="p457517588107"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p8820165121112"><a name="p8820165121112"></a><a name="p8820165121112"></a>修改zone的lsn。</p>
    </td>
    </tr>
    <tr id="row474301815107"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.1 "><p id="p964613191105"><a name="p964613191105"></a><a name="p964613191105"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.5.1.2 "><p id="p424216431102"><a name="p424216431102"></a><a name="p424216431102"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.549999999999997%" headers="mcps1.2.5.1.3 "><p id="p5575115811109"><a name="p5575115811109"></a><a name="p5575115811109"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.12%" headers="mcps1.2.5.1.4 "><p id="p138206518119"><a name="p138206518119"></a><a name="p138206518119"></a>zone绑定的进程id。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_translot\(location, zoneId\)

    描述：Undo事务槽信息。

    参数说明：

    -   location\(读取位置\)

        0表示从当前内存中读取。

        1表示从物理文件中读取。

    -   zoneId\(undo zone编号\)

        -1表示所有undo zone的元信息。

        0-1024\*1024表示对应zoneId的元信息。

    返回值类型：record

    **表 2**  gs\_undo\_translot\(0,-1\)输出示例

    <a name="table161103516431"></a>
    <table><thead align="left"><tr id="row13110151114310"><th class="cellrowborder" valign="top" width="13.751375137513753%" id="mcps1.2.5.1.1"><p id="p124731530164516"><a name="p124731530164516"></a><a name="p124731530164516"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.231223122312231%" id="mcps1.2.5.1.2"><p id="p2410183154410"><a name="p2410183154410"></a><a name="p2410183154410"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.890889088908892%" id="mcps1.2.5.1.3"><p id="p1211085112435"><a name="p1211085112435"></a><a name="p1211085112435"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.12651265126512%" id="mcps1.2.5.1.4"><p id="p1311055117430"><a name="p1311055117430"></a><a name="p1311055117430"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1766219910484"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p146636917484"><a name="p146636917484"></a><a name="p146636917484"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p16631597481"><a name="p16631597481"></a><a name="p16631597481"></a>groupId</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p176632944810"><a name="p176632944810"></a><a name="p176632944810"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p1866359114810"><a name="p1866359114810"></a><a name="p1866359114810"></a>使用的undo zone id。</p>
    </td>
    </tr>
    <tr id="row189073464818"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p12907194134812"><a name="p12907194134812"></a><a name="p12907194134812"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p1190720434817"><a name="p1190720434817"></a><a name="p1190720434817"></a>xactId</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p835296145714"><a name="p835296145714"></a><a name="p835296145714"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p7981214201511"><a name="p7981214201511"></a><a name="p7981214201511"></a>事务id。</p>
    </td>
    </tr>
    <tr id="row684656184717"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p3848563475"><a name="p3848563475"></a><a name="p3848563475"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p12841656104713"><a name="p12841656104713"></a><a name="p12841656104713"></a>startUndoPtr</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p28414564477"><a name="p28414564477"></a><a name="p28414564477"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p128485614716"><a name="p128485614716"></a><a name="p128485614716"></a>slot对应事务起始插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row1441113895310"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p10201627195414"><a name="p10201627195414"></a><a name="p10201627195414"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p1341638135315"><a name="p1341638135315"></a><a name="p1341638135315"></a>endUndoPtr</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p1941138125317"><a name="p1941138125317"></a><a name="p1941138125317"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p19732159181518"><a name="p19732159181518"></a><a name="p19732159181518"></a>slot对应事务结束插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row1844895515317"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p4829162714548"><a name="p4829162714548"></a><a name="p4829162714548"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p64483556539"><a name="p64483556539"></a><a name="p64483556539"></a>lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p04482055165310"><a name="p04482055165310"></a><a name="p04482055165310"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p134981731151618"><a name="p134981731151618"></a><a name="p134981731151618"></a>对应slot指针。</p>
    </td>
    </tr>
    <tr id="row19995175195310"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p74981228165419"><a name="p74981228165419"></a><a name="p74981228165419"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.231223122312231%" headers="mcps1.2.5.1.2 "><p id="p799618513533"><a name="p799618513533"></a><a name="p799618513533"></a>slot_states</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.890889088908892%" headers="mcps1.2.5.1.3 "><p id="p1899619517536"><a name="p1899619517536"></a><a name="p1899619517536"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p1499675111532"><a name="p1499675111532"></a><a name="p1499675111532"></a>事务状态，0表示已经提交，1表示正在执行中，2表示回滚中，3表示回滚完成。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_stat\_undo\(\)

    描述：Undo统计信息。

    返回值类型：record

    **表 3**  gs\_stat\_undo参数说明

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p193010585511"><a name="p193010585511"></a><a name="p193010585511"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p093095865118"><a name="p093095865118"></a><a name="p093095865118"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p139301758195119"><a name="p139301758195119"></a><a name="p139301758195119"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>curr_used_zone_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>当前使用的Undo zone数量。</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>top_used_zones</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p31022210319"><a name="p31022210319"></a><a name="p31022210319"></a>前三个使用量最大的Undo zone信息，格式输出为：</p>
    <p id="p1010182215310"><a name="p1010182215310"></a><a name="p1010182215310"></a>(zoneId1:使用大小，zoneId2:使用大小，zoneId3:使用大小)。</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>curr_used_undo_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>当前使用的Undo总空间大小，单位为MB。</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>undo_threshold</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>为guc参数undo_space_limit_size * 80%计算的结果,单位为MB。</p>
    </td>
    </tr>
    <tr id="row156126595241"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p10613659172410"><a name="p10613659172410"></a><a name="p10613659172410"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p66131659132416"><a name="p66131659132416"></a><a name="p66131659132416"></a>oldest_xid_in_undo</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p66131859182419"><a name="p66131859182419"></a><a name="p66131859182419"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p5810145016516"><a name="p5810145016516"></a><a name="p5810145016516"></a>当前Undo空间回收到的事务xid(小于该xid事务产生的Undo记录都已经被回收)。</p>
    </td>
    </tr>
    <tr id="row126656371914"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2665113711116"><a name="p2665113711116"></a><a name="p2665113711116"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p366519371213"><a name="p366519371213"></a><a name="p366519371213"></a>oldest_xmin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p46651437314"><a name="p46651437314"></a><a name="p46651437314"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p766515372113"><a name="p766515372113"></a><a name="p766515372113"></a>最老的活跃事务。</p>
    </td>
    </tr>
    <tr id="row187623392013"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p12762193910117"><a name="p12762193910117"></a><a name="p12762193910117"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p12762193914114"><a name="p12762193914114"></a><a name="p12762193914114"></a>total_undo_chain_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p187620393117"><a name="p187620393117"></a><a name="p187620393117"></a>int64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p14762839514"><a name="p14762839514"></a><a name="p14762839514"></a>所有访问过的Undo链总长度。</p>
    </td>
    </tr>
    <tr id="row9321124111120"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1232117412014"><a name="p1232117412014"></a><a name="p1232117412014"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p4321134119111"><a name="p4321134119111"></a><a name="p4321134119111"></a>max_undo_chain_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p123224411116"><a name="p123224411116"></a><a name="p123224411116"></a>int64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532212411218"><a name="p1532212411218"></a><a name="p1532212411218"></a>最大访问过的Undo链长度。</p>
    </td>
    </tr>
    <tr id="row197899421915"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p478912427113"><a name="p478912427113"></a><a name="p478912427113"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p07891421715"><a name="p07891421715"></a><a name="p07891421715"></a>create_undo_file_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p167893427111"><a name="p167893427111"></a><a name="p167893427111"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p47897421316"><a name="p47897421316"></a><a name="p47897421316"></a>创建的Undo文件数量统计。</p>
    </td>
    </tr>
    <tr id="row161246451119"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p61247451514"><a name="p61247451514"></a><a name="p61247451514"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p01241545713"><a name="p01241545713"></a><a name="p01241545713"></a>discard_undo_file_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p4124124514113"><a name="p4124124514113"></a><a name="p4124124514113"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1812420456110"><a name="p1812420456110"></a><a name="p1812420456110"></a>删除的Undo文件数量统计。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_record\(undoptr\)

    描述：Undo记录解析。

    参数说明：

    -   undoptr\(undo记录指针\)

    返回值类型：record

-   gs\_undo\_dump\_parsepage\_mv\(relpath text, blkno bigint, reltype text, rmem boolean\)

    描述：解析ustore数据表磁盘页面的页头信息，每个元组的头部信息，标识位信息以及所有可以查询到undo历史版本信息。

    返回值类型：text

    备注：必须是系统管理员或者运维管理人员才能执行此函数。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >该接口当前仅支持USTORE数据表。

    **表 4**  gs\_undo\_dump\_parsepage\_mv参数说明

    <a name="table19993133418565"></a>
    <table><thead align="left"><tr id="row2994153425611"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p99941234135610"><a name="p99941234135610"></a><a name="p99941234135610"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p11994153412565"><a name="p11994153412565"></a><a name="p11994153412565"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>relpath</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p54991729453"><a name="p54991729453"></a><a name="p54991729453"></a>ustore表数据文件相对路径，相对路径格式为：tablespace name/database oid/relfilenode，例如base/16603/16384, 表对应数据文件的相对路径查找可以通过pg_relation_filepath('tablename')查询。</p>
    </td>
    </tr>
    <tr id="row17994123411562"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p28201445235"><a name="p28201445235"></a><a name="p28201445235"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>blkno</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><a name="ul173826296448"></a><a name="ul173826296448"></a><ul id="ul173826296448"><li>-1 解析所有block页面。</li><li>0-MaxBlocNumber解析指定的block页面。</li></ul>
    </td>
    </tr>
    <tr id="row29944347562"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2994183415620"><a name="p2994183415620"></a><a name="p2994183415620"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>reltype</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1061215817105"><a name="p1061215817105"></a><a name="p1061215817105"></a>表类型，目前仅支持ustore数据表，取值为uheap。</p>
    </td>
    </tr>
    <tr id="row179951634105614"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p09953342561"><a name="p09953342561"></a><a name="p09953342561"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p13619135414"><a name="p13619135414"></a><a name="p13619135414"></a>rmem</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a><ul id="ul13872183415441"><li>false</li><li>true<p id="p899634715477"><a name="p899634715477"></a><a name="p899634715477"></a>目前仅支持false，从磁盘文件上解析对应的页面。</p>
    </li></ul>
    </td>
    </tr>
    <tr id="row69951834175613"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p20995634195613"><a name="p20995634195613"></a><a name="p20995634195613"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p23213249"><a name="p23213249"></a><a name="p23213249"></a>output</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1999518348564"><a name="p1999518348564"></a><a name="p1999518348564"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p186811215171114"><a name="p186811215171114"></a><a name="p186811215171114"></a>解析结果文件的绝对路径。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_meta\_dump\_zone\(zone\_id int, read\_memory boolean\)

    描述：解析Undo模块中zone的元信息。

    返回值类型：record

    **表 5**  gs\_undo\_meta\_dump\_zone参数说明

    <a name="table5476012141712"></a>
    <table><thead align="left"><tr id="row104767126176"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p194776121179"><a name="p194776121179"></a><a name="p194776121179"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p184777128179"><a name="p184777128179"></a><a name="p184777128179"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p18477712151713"><a name="p18477712151713"></a><a name="p18477712151713"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p1347761231712"><a name="p1347761231712"></a><a name="p1347761231712"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row54771812121715"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p947771211714"><a name="p947771211714"></a><a name="p947771211714"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p847741251712"><a name="p847741251712"></a><a name="p847741251712"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p8477131216176"><a name="p8477131216176"></a><a name="p8477131216176"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><div class="p" id="p7718511394"><a name="p7718511394"></a><a name="p7718511394"></a>Undo zone编号：<a name="ul17210161615193"></a><a name="ul17210161615193"></a><ul id="ul17210161615193"><li>-1：查询所有Undo zone。</li><li>0-1,048,575：查询对应zone_id编号的undo zone元信息。</li></ul>
    </div>
    </td>
    </tr>
    <tr id="row347771281715"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p74778125177"><a name="p74778125177"></a><a name="p74778125177"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p2477101211714"><a name="p2477101211714"></a><a name="p2477101211714"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1947751215172"><a name="p1947751215172"></a><a name="p1947751215172"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><a name="ul17855544201912"></a><a name="ul17855544201912"></a><ul id="ul17855544201912"><li>true：从当前内存中读取。</li><li>false：从物理文件中读取。</li></ul>
    </td>
    </tr>
    <tr id="row6477312101712"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p747731214171"><a name="p747731214171"></a><a name="p747731214171"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p14477412131715"><a name="p14477412131715"></a><a name="p14477412131715"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p166111237152515"><a name="p166111237152515"></a><a name="p166111237152515"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p12477181291720"><a name="p12477181291720"></a><a name="p12477181291720"></a>Undo zone编号。</p>
    </td>
    </tr>
    <tr id="row1547721201716"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1478512141711"><a name="p1478512141711"></a><a name="p1478512141711"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1347816123173"><a name="p1347816123173"></a><a name="p1347816123173"></a>persist_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p947813121179"><a name="p947813121179"></a><a name="p947813121179"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1712875616351"><a name="p1712875616351"></a><a name="p1712875616351"></a>持久化级别：</p>
    <a name="ul1415510192012"></a><a name="ul1415510192012"></a><ul id="ul1415510192012"><li>0：普通表</li><li>1：无日志表</li><li>2：临时表</li></ul>
    </td>
    </tr>
    <tr id="row28361428142312"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p14836112813234"><a name="p14836112813234"></a><a name="p14836112813234"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1883642815239"><a name="p1883642815239"></a><a name="p1883642815239"></a>insert</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9836192816237"><a name="p9836192816237"></a><a name="p9836192816237"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1129164193616"><a name="p1129164193616"></a><a name="p1129164193616"></a>下一条插入的undo记录位置。</p>
    </td>
    </tr>
    <tr id="row15709132419237"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p17091324162317"><a name="p17091324162317"></a><a name="p17091324162317"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p137097249237"><a name="p137097249237"></a><a name="p137097249237"></a>discard</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p12464526133510"><a name="p12464526133510"></a><a name="p12464526133510"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p35401515143612"><a name="p35401515143612"></a><a name="p35401515143612"></a>普通回收到的undo记录位置。</p>
    </td>
    </tr>
    <tr id="row161069207235"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2010618201239"><a name="p2010618201239"></a><a name="p2010618201239"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p141061820122315"><a name="p141061820122315"></a><a name="p141061820122315"></a>forcediscard</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p17164627193516"><a name="p17164627193516"></a><a name="p17164627193516"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p11061620162319"><a name="p11061620162319"></a><a name="p11061620162319"></a>强制回收掉undo记录位置，小于它的undo记录已经被回收。</p>
    </td>
    </tr>
    <tr id="row16819101522315"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p68196154235"><a name="p68196154235"></a><a name="p68196154235"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p3819131516231"><a name="p3819131516231"></a><a name="p3819131516231"></a>lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p98735279355"><a name="p98735279355"></a><a name="p98735279355"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p16819121542314"><a name="p16819121542314"></a><a name="p16819121542314"></a>修改zone的lsn。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_meta\_dump\_spaces\(zone\_id int, read\_memory boolean\)

    描述：解析Undo模块中undo记录空间，undo slot空间的元信息。

    返回值类型：record

    **表 6**  gs\_undo\_meta\_dump\_spaces参数说明

    <a name="table750315249370"></a>
    <table><thead align="left"><tr id="row35031824143712"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p4503132493717"><a name="p4503132493717"></a><a name="p4503132493717"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p145033248377"><a name="p145033248377"></a><a name="p145033248377"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p155032024123715"><a name="p155032024123715"></a><a name="p155032024123715"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p4503224183711"><a name="p4503224183711"></a><a name="p4503224183711"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row12504924123718"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p205041524203712"><a name="p205041524203712"></a><a name="p205041524203712"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p15504172463715"><a name="p15504172463715"></a><a name="p15504172463715"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p850412247379"><a name="p850412247379"></a><a name="p850412247379"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><div class="p" id="p17273141524010"><a name="p17273141524010"></a><a name="p17273141524010"></a>Undo zone编号：<a name="ul811817339200"></a><a name="ul811817339200"></a><ul id="ul811817339200"><li>-1：查询所有Undo zone。</li><li>0-1,048,575：查询对应zone_id编号的undo zone元信息。</li></ul>
    </div>
    </td>
    </tr>
    <tr id="row1950472411379"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p7504152417372"><a name="p7504152417372"></a><a name="p7504152417372"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p3504122473714"><a name="p3504122473714"></a><a name="p3504122473714"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14504142411375"><a name="p14504142411375"></a><a name="p14504142411375"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><a name="ul163752587200"></a><a name="ul163752587200"></a><ul id="ul163752587200"><li>true：从当前内存中读取。</li><li>false：从物理文件中读取。</li></ul>
    </td>
    </tr>
    <tr id="row450422473718"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p175041224143718"><a name="p175041224143718"></a><a name="p175041224143718"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p165044243374"><a name="p165044243374"></a><a name="p165044243374"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1850432418372"><a name="p1850432418372"></a><a name="p1850432418372"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p165041824173719"><a name="p165041824173719"></a><a name="p165041824173719"></a>Undo zone编号。</p>
    </td>
    </tr>
    <tr id="row850416244371"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p3504202483718"><a name="p3504202483718"></a><a name="p3504202483718"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p10504192423711"><a name="p10504192423711"></a><a name="p10504192423711"></a>undorecord_space_tail</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1998161435"><a name="p1998161435"></a><a name="p1998161435"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p7656534114317"><a name="p7656534114317"></a><a name="p7656534114317"></a>Undo record空间的结尾位置。</p>
    </td>
    </tr>
    <tr id="row4504142417379"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1150519246374"><a name="p1150519246374"></a><a name="p1150519246374"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p15618128113913"><a name="p15618128113913"></a><a name="p15618128113913"></a>undorecord_space_head</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p150542412375"><a name="p150542412375"></a><a name="p150542412375"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p134186589436"><a name="p134186589436"></a><a name="p134186589436"></a>Undo record空间的起始位置。</p>
    </td>
    </tr>
    <tr id="row0505162414376"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p7505524113710"><a name="p7505524113710"></a><a name="p7505524113710"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p889971414391"><a name="p889971414391"></a><a name="p889971414391"></a>undorecord_space_lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1250520249370"><a name="p1250520249370"></a><a name="p1250520249370"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p169473196444"><a name="p169473196444"></a><a name="p169473196444"></a>修改Undo record空间lsn。</p>
    </td>
    </tr>
    <tr id="row2505162483711"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p45058246379"><a name="p45058246379"></a><a name="p45058246379"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p150572443712"><a name="p150572443712"></a><a name="p150572443712"></a>undoslot_space_tail</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p85051424113711"><a name="p85051424113711"></a><a name="p85051424113711"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p132391220458"><a name="p132391220458"></a><a name="p132391220458"></a>Undo slot空间的结尾位置。</p>
    </td>
    </tr>
    <tr id="row108202598442"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p672936451"><a name="p672936451"></a><a name="p672936451"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1482095911440"><a name="p1482095911440"></a><a name="p1482095911440"></a>undoslot_space_head</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1754041194510"><a name="p1754041194510"></a><a name="p1754041194510"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p7519532174517"><a name="p7519532174517"></a><a name="p7519532174517"></a>Undo slot空间的起始位置。</p>
    </td>
    </tr>
    <tr id="row1150512473714"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p8505824203713"><a name="p8505824203713"></a><a name="p8505824203713"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p2505324203710"><a name="p2505324203710"></a><a name="p2505324203710"></a>undoreslot_space_lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p7505024103717"><a name="p7505024103717"></a><a name="p7505024103717"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p8560154124516"><a name="p8560154124516"></a><a name="p8560154124516"></a>修改Undo slot空间lsn。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_meta\_dump\_slot\(zone\_id int, read\_memory boolean\)

    描述：解析Undo模块中slot元信息。

    返回值类型：record

    **表 7**  gs\_undo\_meta\_dump\_slot参数说明

    <a name="table1963552810489"></a>
    <table><thead align="left"><tr id="row106351728144811"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p18635102834810"><a name="p18635102834810"></a><a name="p18635102834810"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p1663618283486"><a name="p1663618283486"></a><a name="p1663618283486"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p36364281484"><a name="p36364281484"></a><a name="p36364281484"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p156361228194819"><a name="p156361228194819"></a><a name="p156361228194819"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row66361528104811"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p166361128164816"><a name="p166361128164816"></a><a name="p166361128164816"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p86369289486"><a name="p86369289486"></a><a name="p86369289486"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p19636228124820"><a name="p19636228124820"></a><a name="p19636228124820"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><div class="p" id="p1137101819407"><a name="p1137101819407"></a><a name="p1137101819407"></a>Undo zone编号：<a name="ul572065715213"></a><a name="ul572065715213"></a><ul id="ul572065715213"><li>-1：查询所有Undo zone。</li><li>0-1,048,575：查询对应zone_id编号的undo zone元信息。</li></ul>
    </div>
    </td>
    </tr>
    <tr id="row13636102812482"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p06361528154815"><a name="p06361528154815"></a><a name="p06361528154815"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1763682817483"><a name="p1763682817483"></a><a name="p1763682817483"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1663617282485"><a name="p1663617282485"></a><a name="p1663617282485"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><a name="ul151483131221"></a><a name="ul151483131221"></a><ul id="ul151483131221"><li>true：从当前内存中读取。</li><li>false：从物理文件中读取。</li></ul>
    </td>
    </tr>
    <tr id="row1863642816485"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p963632815483"><a name="p963632815483"></a><a name="p963632815483"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p263662854813"><a name="p263662854813"></a><a name="p263662854813"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9636202874815"><a name="p9636202874815"></a><a name="p9636202874815"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p3636102874815"><a name="p3636102874815"></a><a name="p3636102874815"></a>Undo zone编号。</p>
    </td>
    </tr>
    <tr id="row26361028154815"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p166361728184816"><a name="p166361728184816"></a><a name="p166361728184816"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p14175929114918"><a name="p14175929114918"></a><a name="p14175929114918"></a>allocate</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p66371528144819"><a name="p66371528144819"></a><a name="p66371528144819"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1263722824818"><a name="p1263722824818"></a><a name="p1263722824818"></a>Undo transaction slot分配位置。</p>
    </td>
    </tr>
    <tr id="row1663712819485"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1363720289482"><a name="p1363720289482"></a><a name="p1363720289482"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p12637162818489"><a name="p12637162818489"></a><a name="p12637162818489"></a>recycle</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p763752814484"><a name="p763752814484"></a><a name="p763752814484"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1563742810485"><a name="p1563742810485"></a><a name="p1563742810485"></a>Undo transaction slot回收位置。</p>
    </td>
    </tr>
    <tr id="row1863792816487"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116371428134812"><a name="p116371428134812"></a><a name="p116371428134812"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p2063720289486"><a name="p2063720289486"></a><a name="p2063720289486"></a>frozen_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14637428164814"><a name="p14637428164814"></a><a name="p14637428164814"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1163732810485"><a name="p1163732810485"></a><a name="p1163732810485"></a>frozen xid，用于可见性判断。</p>
    </td>
    </tr>
    <tr id="row1263742874817"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p763722817485"><a name="p763722817485"></a><a name="p763722817485"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p20488174610499"><a name="p20488174610499"></a><a name="p20488174610499"></a>global_frozen_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3637228164819"><a name="p3637228164819"></a><a name="p3637228164819"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p169062775212"><a name="p169062775212"></a><a name="p169062775212"></a>全局最小的frozen xid，小于该xid的事务可见。</p>
    </td>
    </tr>
    <tr id="row863711287480"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116381628164819"><a name="p116381628164819"></a><a name="p116381628164819"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1063882834816"><a name="p1063882834816"></a><a name="p1063882834816"></a>recycle_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3638202894817"><a name="p3638202894817"></a><a name="p3638202894817"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p16381928194818"><a name="p16381928194818"></a><a name="p16381928194818"></a>回收到的xid，小于该xid的事务被回收。</p>
    </td>
    </tr>
    <tr id="row888819568497"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p11503711502"><a name="p11503711502"></a><a name="p11503711502"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p20889145684910"><a name="p20889145684910"></a><a name="p20889145684910"></a>global_recycle_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p10136915175013"><a name="p10136915175013"></a><a name="p10136915175013"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p476415267531"><a name="p476415267531"></a><a name="p476415267531"></a>全局最小的recycle xid，小于该xid的事务被回收。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_translot\_dump\_slot\(zone\_id int, read\_memory boolean\)

    描述：解析zone中的slot。

    返回值类型：record

    **表 8**  gs\_undo\_translot\_dump\_slot参数说明

    <a name="table103190399558"></a>
    <table><thead align="left"><tr id="row17319939105512"><th class="cellrowborder" valign="top" width="13.751375137513753%" id="mcps1.2.5.1.1"><p id="p1131911394556"><a name="p1131911394556"></a><a name="p1131911394556"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.69156915691569%" id="mcps1.2.5.1.2"><p id="p163195396554"><a name="p163195396554"></a><a name="p163195396554"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="5.4305430543054305%" id="mcps1.2.5.1.3"><p id="p7319113905519"><a name="p7319113905519"></a><a name="p7319113905519"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.12651265126512%" id="mcps1.2.5.1.4"><p id="p1231953955518"><a name="p1231953955518"></a><a name="p1231953955518"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row203191739195518"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p203193392550"><a name="p203193392550"></a><a name="p203193392550"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p2053318371639"><a name="p2053318371639"></a><a name="p2053318371639"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p173191039195514"><a name="p173191039195514"></a><a name="p173191039195514"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><div class="p" id="p920717220401"><a name="p920717220401"></a><a name="p920717220401"></a>Undo zone编号：<a name="ul13679158202318"></a><a name="ul13679158202318"></a><ul id="ul13679158202318"><li>-1：查询所有Undo zone。</li><li>0-1,048,575：查询对应zone_id编号的undo zone元信息。</li></ul>
    </div>
    </td>
    </tr>
    <tr id="row183191397557"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p103192039155519"><a name="p103192039155519"></a><a name="p103192039155519"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p167815431637"><a name="p167815431637"></a><a name="p167815431637"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p83191939105511"><a name="p83191939105511"></a><a name="p83191939105511"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><a name="ul2848182532318"></a><a name="ul2848182532318"></a><ul id="ul2848182532318"><li>true：从当前内存中读取。</li><li>false：从物理文件中读取。</li></ul>
    </td>
    </tr>
    <tr id="row17319193915511"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p53191839145510"><a name="p53191839145510"></a><a name="p53191839145510"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p1631916398556"><a name="p1631916398556"></a><a name="p1631916398556"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p1931943919550"><a name="p1931943919550"></a><a name="p1931943919550"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p12888713272"><a name="p12888713272"></a><a name="p12888713272"></a>Undo zone编号。</p>
    </td>
    </tr>
    <tr id="row231943912558"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p4319539145512"><a name="p4319539145512"></a><a name="p4319539145512"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p6319439115514"><a name="p6319439115514"></a><a name="p6319439115514"></a>slot_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p231919399553"><a name="p231919399553"></a><a name="p231919399553"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p83198390551"><a name="p83198390551"></a><a name="p83198390551"></a>事务id。</p>
    </td>
    </tr>
    <tr id="row73191739145515"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p7319739145514"><a name="p7319739145514"></a><a name="p7319739145514"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p331913905515"><a name="p331913905515"></a><a name="p331913905515"></a>start_undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p1731933965510"><a name="p1731933965510"></a><a name="p1731933965510"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p432023905520"><a name="p432023905520"></a><a name="p432023905520"></a>slot对应事务起始插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row3320193913554"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1320133955519"><a name="p1320133955519"></a><a name="p1320133955519"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p13320039125518"><a name="p13320039125518"></a><a name="p13320039125518"></a>end_undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p1632083955518"><a name="p1632083955518"></a><a name="p1632083955518"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p832083965511"><a name="p832083965511"></a><a name="p832083965511"></a>slot对应事务结束插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row128931133142"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p78931633641"><a name="p78931633641"></a><a name="p78931633641"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p4893133843"><a name="p4893133843"></a><a name="p4893133843"></a>lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p1189315331346"><a name="p1189315331346"></a><a name="p1189315331346"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><p id="p48931133848"><a name="p48931133848"></a><a name="p48931133848"></a>修改slot的lsn。</p>
    </td>
    </tr>
    <tr id="row510714307412"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p201071030545"><a name="p201071030545"></a><a name="p201071030545"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.69156915691569%" headers="mcps1.2.5.1.2 "><p id="p1710713017411"><a name="p1710713017411"></a><a name="p1710713017411"></a>slot_states</p>
    </td>
    <td class="cellrowborder" valign="top" width="5.4305430543054305%" headers="mcps1.2.5.1.3 "><p id="p41075308417"><a name="p41075308417"></a><a name="p41075308417"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.12651265126512%" headers="mcps1.2.5.1.4 "><div class="p" id="p17841161410617"><a name="p17841161410617"></a><a name="p17841161410617"></a>事务状态：<a name="ul1118615872414"></a><a name="ul1118615872414"></a><ul id="ul1118615872414"><li>0：已提交</li><li>1：执行中</li><li>2：回滚中</li><li>3：回滚完成</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_translot\_dump\_xid\(slot\_xid xid, read\_memory boolean\)

    描述：根据xid，解析zone中对应的slot。

    返回值类型：record

    **表 9**  gs\_undo\_translot\_dump\_xid参数说明

    <a name="table67406221875"></a>
    <table><thead align="left"><tr id="row157402225715"><th class="cellrowborder" valign="top" width="13.751375137513753%" id="mcps1.2.5.1.1"><p id="p10740172217710"><a name="p10740172217710"></a><a name="p10740172217710"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="17.75177517751775%" id="mcps1.2.5.1.2"><p id="p127407221713"><a name="p127407221713"></a><a name="p127407221713"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.331433143314332%" id="mcps1.2.5.1.3"><p id="p18740142218717"><a name="p18740142218717"></a><a name="p18740142218717"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="54.16541654165417%" id="mcps1.2.5.1.4"><p id="p127401822273"><a name="p127401822273"></a><a name="p127401822273"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row37403221075"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p9740192210714"><a name="p9740192210714"></a><a name="p9740192210714"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p1374012224713"><a name="p1374012224713"></a><a name="p1374012224713"></a>slot_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p137402224720"><a name="p137402224720"></a><a name="p137402224720"></a>xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p1099029393"><a name="p1099029393"></a><a name="p1099029393"></a>需要查询的事务id。</p>
    </td>
    </tr>
    <tr id="row13740022476"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p674110226715"><a name="p674110226715"></a><a name="p674110226715"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p1774117226710"><a name="p1774117226710"></a><a name="p1774117226710"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p3741322878"><a name="p3741322878"></a><a name="p3741322878"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><a name="ul159591729152618"></a><a name="ul159591729152618"></a><ul id="ul159591729152618"><li>true：从当前内存中读取。</li><li>false：从物理文件中读取。</li></ul>
    </td>
    </tr>
    <tr id="row1974182212715"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p974118221575"><a name="p974118221575"></a><a name="p974118221575"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p374120229713"><a name="p374120229713"></a><a name="p374120229713"></a>zone_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p8741182218720"><a name="p8741182218720"></a><a name="p8741182218720"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p67411022573"><a name="p67411022573"></a><a name="p67411022573"></a>Undo zone编号。</p>
    </td>
    </tr>
    <tr id="row1074152217719"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p147411522175"><a name="p147411522175"></a><a name="p147411522175"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p137411822278"><a name="p137411822278"></a><a name="p137411822278"></a>slot_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p57414220718"><a name="p57414220718"></a><a name="p57414220718"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p47411122471"><a name="p47411122471"></a><a name="p47411122471"></a>事务id。</p>
    </td>
    </tr>
    <tr id="row187411822771"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1974115224718"><a name="p1974115224718"></a><a name="p1974115224718"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p77411022273"><a name="p77411022273"></a><a name="p77411022273"></a>start_undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p374162219711"><a name="p374162219711"></a><a name="p374162219711"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p1074192215710"><a name="p1074192215710"></a><a name="p1074192215710"></a>slot对应事务起始插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row1674172213712"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p47422226716"><a name="p47422226716"></a><a name="p47422226716"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p174216221672"><a name="p174216221672"></a><a name="p174216221672"></a>end_undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p9742422579"><a name="p9742422579"></a><a name="p9742422579"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p47421225714"><a name="p47421225714"></a><a name="p47421225714"></a>slot对应事务结束插入undo记录位置。</p>
    </td>
    </tr>
    <tr id="row13742822672"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p137421722575"><a name="p137421722575"></a><a name="p137421722575"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p8742422673"><a name="p8742422673"></a><a name="p8742422673"></a>lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p167427224715"><a name="p167427224715"></a><a name="p167427224715"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><p id="p67428221972"><a name="p67428221972"></a><a name="p67428221972"></a>修改slot的lsn。</p>
    </td>
    </tr>
    <tr id="row1374218221173"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1074210228715"><a name="p1074210228715"></a><a name="p1074210228715"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.75177517751775%" headers="mcps1.2.5.1.2 "><p id="p187428221977"><a name="p187428221977"></a><a name="p187428221977"></a>slot_states</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.331433143314332%" headers="mcps1.2.5.1.3 "><p id="p1274214221878"><a name="p1274214221878"></a><a name="p1274214221878"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.16541654165417%" headers="mcps1.2.5.1.4 "><div class="p" id="p674252218714"><a name="p674252218714"></a><a name="p674252218714"></a>事务状态：<a name="ul18499165813269"></a><a name="ul18499165813269"></a><ul id="ul18499165813269"><li>0 已提交</li><li>1 执行中</li><li>2 回滚中</li><li>3 回滚完成</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_dump\_record\(undoptr bigint\)

    描述：解析undo记录。

    返回值类型：record

    **表 10**  gs\_undo\_dump\_record参数说明

    <a name="table1421185181117"></a>
    <table><thead align="left"><tr id="row202112581115"><th class="cellrowborder" valign="top" width="13.751375137513753%" id="mcps1.2.5.1.1"><p id="p6211359111"><a name="p6211359111"></a><a name="p6211359111"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="20.57205720572057%" id="mcps1.2.5.1.2"><p id="p7217571117"><a name="p7217571117"></a><a name="p7217571117"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="20.192019201920193%" id="mcps1.2.5.1.3"><p id="p11221857111"><a name="p11221857111"></a><a name="p11221857111"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.48454845484548%" id="mcps1.2.5.1.4"><p id="p92216561113"><a name="p92216561113"></a><a name="p92216561113"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16229518115"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p822195151111"><a name="p822195151111"></a><a name="p822195151111"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p16712172610112"><a name="p16712172610112"></a><a name="p16712172610112"></a>undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p172213514115"><a name="p172213514115"></a><a name="p172213514115"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p32218516118"><a name="p32218516118"></a><a name="p32218516118"></a>需要解析的undo记录起始位置。</p>
    </td>
    </tr>
    <tr id="row42265111112"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p18229520115"><a name="p18229520115"></a><a name="p18229520115"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p722854117"><a name="p722854117"></a><a name="p722854117"></a>undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p14662162391512"><a name="p14662162391512"></a><a name="p14662162391512"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p1350718277156"><a name="p1350718277156"></a><a name="p1350718277156"></a>需要解析的undo记录起始位置。</p>
    </td>
    </tr>
    <tr id="row82255121117"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1322252114"><a name="p1322252114"></a><a name="p1322252114"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p10223551113"><a name="p10223551113"></a><a name="p10223551113"></a>xactid</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p2231251117"><a name="p2231251117"></a><a name="p2231251117"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p182311517116"><a name="p182311517116"></a><a name="p182311517116"></a>事务id</p>
    </td>
    </tr>
    <tr id="row19239511111"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p42311520110"><a name="p42311520110"></a><a name="p42311520110"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p1523175171114"><a name="p1523175171114"></a><a name="p1523175171114"></a>cid</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p52375121113"><a name="p52375121113"></a><a name="p52375121113"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p122318517110"><a name="p122318517110"></a><a name="p122318517110"></a>command id</p>
    </td>
    </tr>
    <tr id="row14237515113"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p11231356114"><a name="p11231356114"></a><a name="p11231356114"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p12233513113"><a name="p12233513113"></a><a name="p12233513113"></a>reloid</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p14234512119"><a name="p14234512119"></a><a name="p14234512119"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p182312518116"><a name="p182312518116"></a><a name="p182312518116"></a>relation oid</p>
    </td>
    </tr>
    <tr id="row92395181116"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p17238521116"><a name="p17238521116"></a><a name="p17238521116"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p6239515119"><a name="p6239515119"></a><a name="p6239515119"></a>relfilenode</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p92315181116"><a name="p92315181116"></a><a name="p92315181116"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p1733716019166"><a name="p1733716019166"></a><a name="p1733716019166"></a>文件的relfinode</p>
    </td>
    </tr>
    <tr id="row182314541116"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p92305131117"><a name="p92305131117"></a><a name="p92305131117"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p82395101119"><a name="p82395101119"></a><a name="p82395101119"></a>utype</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p99031217131615"><a name="p99031217131615"></a><a name="p99031217131615"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p18244591111"><a name="p18244591111"></a><a name="p18244591111"></a>undo记录类型</p>
    </td>
    </tr>
    <tr id="row1926494461216"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p75728818156"><a name="p75728818156"></a><a name="p75728818156"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p1226494410125"><a name="p1226494410125"></a><a name="p1226494410125"></a>blkprev</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1979911211169"><a name="p1979911211169"></a><a name="p1979911211169"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p926418448123"><a name="p926418448123"></a><a name="p926418448123"></a>同一个块前一条undo记录的位置。</p>
    </td>
    </tr>
    <tr id="row9388204015122"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1760178141516"><a name="p1760178141516"></a><a name="p1760178141516"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p16388340131213"><a name="p16388340131213"></a><a name="p16388340131213"></a>blockno</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1982611211167"><a name="p1982611211167"></a><a name="p1982611211167"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p33881940191212"><a name="p33881940191212"></a><a name="p33881940191212"></a>块号</p>
    </td>
    </tr>
    <tr id="row5240103731217"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p06311581156"><a name="p06311581156"></a><a name="p06311581156"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p1024013374129"><a name="p1024013374129"></a><a name="p1024013374129"></a>uoffset</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p14855132112165"><a name="p14855132112165"></a><a name="p14855132112165"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p15240163715127"><a name="p15240163715127"></a><a name="p15240163715127"></a>undo记录偏移</p>
    </td>
    </tr>
    <tr id="row1928633415124"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p11649158121514"><a name="p11649158121514"></a><a name="p11649158121514"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p18286734161219"><a name="p18286734161219"></a><a name="p18286734161219"></a>prevurp</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1873202121616"><a name="p1873202121616"></a><a name="p1873202121616"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p82861334121213"><a name="p82861334121213"></a><a name="p82861334121213"></a>前一条undo记录位置。</p>
    </td>
    </tr>
    <tr id="row14628152810120"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p196671485151"><a name="p196671485151"></a><a name="p196671485151"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p1962852810128"><a name="p1962852810128"></a><a name="p1962852810128"></a>payloadlen</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1891221151619"><a name="p1891221151619"></a><a name="p1891221151619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p0628112818129"><a name="p0628112818129"></a><a name="p0628112818129"></a>undo记录数据部分长度。</p>
    </td>
    </tr>
    <tr id="row1571112252128"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p3686128121515"><a name="p3686128121515"></a><a name="p3686128121515"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p7711225171213"><a name="p7711225171213"></a><a name="p7711225171213"></a>oldxactid</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p590962114166"><a name="p590962114166"></a><a name="p590962114166"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p12711725141211"><a name="p12711725141211"></a><a name="p12711725141211"></a>前一个事务id。</p>
    </td>
    </tr>
    <tr id="row19805132241215"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1170418810159"><a name="p1170418810159"></a><a name="p1170418810159"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p480572261213"><a name="p480572261213"></a><a name="p480572261213"></a>partitionoid</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p7927132120169"><a name="p7927132120169"></a><a name="p7927132120169"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p11805142212124"><a name="p11805142212124"></a><a name="p11805142212124"></a>分区oid</p>
    </td>
    </tr>
    <tr id="row192432286139"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p5722185152"><a name="p5722185152"></a><a name="p5722185152"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p524332810134"><a name="p524332810134"></a><a name="p524332810134"></a>tablespace</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p179441721121610"><a name="p179441721121610"></a><a name="p179441721121610"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p1724392810137"><a name="p1724392810137"></a><a name="p1724392810137"></a>表空间</p>
    </td>
    </tr>
    <tr id="row1546710502137"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p177406816150"><a name="p177406816150"></a><a name="p177406816150"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p164674502133"><a name="p164674502133"></a><a name="p164674502133"></a>alreadyread_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p39621215169"><a name="p39621215169"></a><a name="p39621215169"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p646785061315"><a name="p646785061315"></a><a name="p646785061315"></a>读取到的undo记录长度。</p>
    </td>
    </tr>
    <tr id="row295194514133"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1275914810155"><a name="p1275914810155"></a><a name="p1275914810155"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p13953458135"><a name="p13953458135"></a><a name="p13953458135"></a>prev_undorec_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p15981521191612"><a name="p15981521191612"></a><a name="p15981521191612"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p9951745181313"><a name="p9951745181313"></a><a name="p9951745181313"></a>前一条undo记录长度。</p>
    </td>
    </tr>
    <tr id="row467111372136"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1877714891520"><a name="p1877714891520"></a><a name="p1877714891520"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p176711237101312"><a name="p176711237101312"></a><a name="p176711237101312"></a>td_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p189993216161"><a name="p189993216161"></a><a name="p189993216161"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p1167193717139"><a name="p1167193717139"></a><a name="p1167193717139"></a>Transaction Directory的id。</p>
    </td>
    </tr>
    <tr id="row1916114121312"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p87955813152"><a name="p87955813152"></a><a name="p87955813152"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p41611041141313"><a name="p41611041141313"></a><a name="p41611041141313"></a>reserved</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p122032231618"><a name="p122032231618"></a><a name="p122032231618"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p1216214111130"><a name="p1216214111130"></a><a name="p1216214111130"></a>是否保存</p>
    </td>
    </tr>
    <tr id="row4500203420134"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p198144815156"><a name="p198144815156"></a><a name="p198144815156"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p6500834131310"><a name="p6500834131310"></a><a name="p6500834131310"></a>flag</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1840722121611"><a name="p1840722121611"></a><a name="p1840722121611"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p19949547142311"><a name="p19949547142311"></a><a name="p19949547142311"></a>标识1</p>
    </td>
    </tr>
    <tr id="row6148142410131"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p14832148161516"><a name="p14832148161516"></a><a name="p14832148161516"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p19148202491312"><a name="p19148202491312"></a><a name="p19148202491312"></a>flag2</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1659192291612"><a name="p1659192291612"></a><a name="p1659192291612"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p190511578235"><a name="p190511578235"></a><a name="p190511578235"></a>标识2</p>
    </td>
    </tr>
    <tr id="row516117214140"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p7850138201515"><a name="p7850138201515"></a><a name="p7850138201515"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.57205720572057%" headers="mcps1.2.5.1.2 "><p id="p416122118143"><a name="p416122118143"></a><a name="p416122118143"></a>t_hoff</p>
    </td>
    <td class="cellrowborder" valign="top" width="20.192019201920193%" headers="mcps1.2.5.1.3 "><p id="p1778172212164"><a name="p1778172212164"></a><a name="p1778172212164"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.48454845484548%" headers="mcps1.2.5.1.4 "><p id="p8161182151413"><a name="p8161182151413"></a><a name="p8161182151413"></a>Undo记录数据头的长度。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_dump\_xid\(undo\_xid xid\)

    描述：根据xid解析undo记录。

    返回值类型：record

    **表 11**  gs\_undo\_dump\_xid参数说明

    <a name="table199172030162413"></a>
    <table><thead align="left"><tr id="row391873014243"><th class="cellrowborder" valign="top" width="13.751375137513753%" id="mcps1.2.5.1.1"><p id="p2918630112412"><a name="p2918630112412"></a><a name="p2918630112412"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="16.451645164516453%" id="mcps1.2.5.1.2"><p id="p10918430182420"><a name="p10918430182420"></a><a name="p10918430182420"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.98099809980998%" id="mcps1.2.5.1.3"><p id="p18918430112413"><a name="p18918430112413"></a><a name="p18918430112413"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.81598159815981%" id="mcps1.2.5.1.4"><p id="p49181630102410"><a name="p49181630102410"></a><a name="p49181630102410"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row11918163014246"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p189181130202416"><a name="p189181130202416"></a><a name="p189181130202416"></a>输入参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p14939184515253"><a name="p14939184515253"></a><a name="p14939184515253"></a>undo_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1091873002415"><a name="p1091873002415"></a><a name="p1091873002415"></a>xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p51730916279"><a name="p51730916279"></a><a name="p51730916279"></a>事务xid</p>
    </td>
    </tr>
    <tr id="row11918930142415"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p139185309242"><a name="p139185309242"></a><a name="p139185309242"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p7918193092413"><a name="p7918193092413"></a><a name="p7918193092413"></a>undoptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p169181306246"><a name="p169181306246"></a><a name="p169181306246"></a>xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p491911303241"><a name="p491911303241"></a><a name="p491911303241"></a>需要解析的undo记录起始位置。</p>
    </td>
    </tr>
    <tr id="row1591913022417"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1391933062411"><a name="p1391933062411"></a><a name="p1391933062411"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p109197306244"><a name="p109197306244"></a><a name="p109197306244"></a>xactid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p169195306246"><a name="p169195306246"></a><a name="p169195306246"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p12919123014240"><a name="p12919123014240"></a><a name="p12919123014240"></a>事务id</p>
    </td>
    </tr>
    <tr id="row1591963017244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p18919113014244"><a name="p18919113014244"></a><a name="p18919113014244"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p191993018246"><a name="p191993018246"></a><a name="p191993018246"></a>cid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p8919130202418"><a name="p8919130202418"></a><a name="p8919130202418"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1991912308244"><a name="p1991912308244"></a><a name="p1991912308244"></a>command id</p>
    </td>
    </tr>
    <tr id="row5919143015243"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p2091933011245"><a name="p2091933011245"></a><a name="p2091933011245"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p791953015241"><a name="p791953015241"></a><a name="p791953015241"></a>reloid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p139191230142418"><a name="p139191230142418"></a><a name="p139191230142418"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p99191230132411"><a name="p99191230132411"></a><a name="p99191230132411"></a>relation oid</p>
    </td>
    </tr>
    <tr id="row891923018244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p9919143017249"><a name="p9919143017249"></a><a name="p9919143017249"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p10920130182418"><a name="p10920130182418"></a><a name="p10920130182418"></a>relfilenode</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p0920103052412"><a name="p0920103052412"></a><a name="p0920103052412"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p12920163022413"><a name="p12920163022413"></a><a name="p12920163022413"></a>文件的relfinode</p>
    </td>
    </tr>
    <tr id="row15920133016241"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p692018304242"><a name="p692018304242"></a><a name="p692018304242"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p15920530192418"><a name="p15920530192418"></a><a name="p15920530192418"></a>utype</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p4920183014242"><a name="p4920183014242"></a><a name="p4920183014242"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1792019300246"><a name="p1792019300246"></a><a name="p1792019300246"></a>undo记录类型</p>
    </td>
    </tr>
    <tr id="row199205305244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p992013020245"><a name="p992013020245"></a><a name="p992013020245"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p992013016240"><a name="p992013016240"></a><a name="p992013016240"></a>blkprev</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p9920830152418"><a name="p9920830152418"></a><a name="p9920830152418"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1492013019245"><a name="p1492013019245"></a><a name="p1492013019245"></a>同一个块前一条undo记录的位置。</p>
    </td>
    </tr>
    <tr id="row17920193062417"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p11920830142415"><a name="p11920830142415"></a><a name="p11920830142415"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p15920153062420"><a name="p15920153062420"></a><a name="p15920153062420"></a>blockno</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1692020301248"><a name="p1692020301248"></a><a name="p1692020301248"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p7921153092415"><a name="p7921153092415"></a><a name="p7921153092415"></a>块号</p>
    </td>
    </tr>
    <tr id="row69219302249"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p692133013249"><a name="p692133013249"></a><a name="p692133013249"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p10921830112415"><a name="p10921830112415"></a><a name="p10921830112415"></a>uoffset</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1592103042417"><a name="p1592103042417"></a><a name="p1592103042417"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p4921193018246"><a name="p4921193018246"></a><a name="p4921193018246"></a>undo记录偏移</p>
    </td>
    </tr>
    <tr id="row2921143042416"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p16921830182414"><a name="p16921830182414"></a><a name="p16921830182414"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p69217301249"><a name="p69217301249"></a><a name="p69217301249"></a>prevurp</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p14921123022411"><a name="p14921123022411"></a><a name="p14921123022411"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p15921530132416"><a name="p15921530132416"></a><a name="p15921530132416"></a>前一条undo记录位置。</p>
    </td>
    </tr>
    <tr id="row3921173011243"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1692153018248"><a name="p1692153018248"></a><a name="p1692153018248"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p392163013245"><a name="p392163013245"></a><a name="p392163013245"></a>payloadlen</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p149214301248"><a name="p149214301248"></a><a name="p149214301248"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p192117303245"><a name="p192117303245"></a><a name="p192117303245"></a>undo记录数据部分长度。</p>
    </td>
    </tr>
    <tr id="row19921103012243"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p592120306245"><a name="p592120306245"></a><a name="p592120306245"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p2092293012244"><a name="p2092293012244"></a><a name="p2092293012244"></a>oldxactid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1992218302245"><a name="p1992218302245"></a><a name="p1992218302245"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1392293042413"><a name="p1392293042413"></a><a name="p1392293042413"></a>前一个事务id</p>
    </td>
    </tr>
    <tr id="row192263020244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p169221030142419"><a name="p169221030142419"></a><a name="p169221030142419"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p119221230172413"><a name="p119221230172413"></a><a name="p119221230172413"></a>partitionoid</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1922183017244"><a name="p1922183017244"></a><a name="p1922183017244"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1892253015246"><a name="p1892253015246"></a><a name="p1892253015246"></a>分区oid</p>
    </td>
    </tr>
    <tr id="row3922133011240"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p14922143020241"><a name="p14922143020241"></a><a name="p14922143020241"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p29222030122412"><a name="p29222030122412"></a><a name="p29222030122412"></a>tablespace</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p129221630182412"><a name="p129221630182412"></a><a name="p129221630182412"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p692213082410"><a name="p692213082410"></a><a name="p692213082410"></a>表空间</p>
    </td>
    </tr>
    <tr id="row13922830172412"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p18922103012245"><a name="p18922103012245"></a><a name="p18922103012245"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p0922123016240"><a name="p0922123016240"></a><a name="p0922123016240"></a>alreadyread_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1792215301246"><a name="p1792215301246"></a><a name="p1792215301246"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p199231630102411"><a name="p199231630102411"></a><a name="p199231630102411"></a>读取到的undo记录长度。</p>
    </td>
    </tr>
    <tr id="row1992343072418"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p692353092411"><a name="p692353092411"></a><a name="p692353092411"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p169231930152416"><a name="p169231930152416"></a><a name="p169231930152416"></a>prev_undorec_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1392310300246"><a name="p1392310300246"></a><a name="p1392310300246"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p2923153010242"><a name="p2923153010242"></a><a name="p2923153010242"></a>前一条undo记录长度。</p>
    </td>
    </tr>
    <tr id="row20923163013244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p99230306243"><a name="p99230306243"></a><a name="p99230306243"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p692313308247"><a name="p692313308247"></a><a name="p692313308247"></a>td_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p18923130172414"><a name="p18923130172414"></a><a name="p18923130172414"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p159236305248"><a name="p159236305248"></a><a name="p159236305248"></a>Transaction Directory的id。</p>
    </td>
    </tr>
    <tr id="row392303082417"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1592393012244"><a name="p1592393012244"></a><a name="p1592393012244"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p18923153022415"><a name="p18923153022415"></a><a name="p18923153022415"></a>reserved</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p1092393018247"><a name="p1092393018247"></a><a name="p1092393018247"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p10923173032417"><a name="p10923173032417"></a><a name="p10923173032417"></a>是否保留</p>
    </td>
    </tr>
    <tr id="row592319307241"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p1692314302244"><a name="p1692314302244"></a><a name="p1692314302244"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p5924830142418"><a name="p5924830142418"></a><a name="p5924830142418"></a>flag</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p16924133002420"><a name="p16924133002420"></a><a name="p16924133002420"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p7924173022412"><a name="p7924173022412"></a><a name="p7924173022412"></a>标识1</p>
    </td>
    </tr>
    <tr id="row592423020244"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p119241830192420"><a name="p119241830192420"></a><a name="p119241830192420"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p0924133016243"><a name="p0924133016243"></a><a name="p0924133016243"></a>flag2</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p6924123092416"><a name="p6924123092416"></a><a name="p6924123092416"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p19241130152411"><a name="p19241130152411"></a><a name="p19241130152411"></a>标识2</p>
    </td>
    </tr>
    <tr id="row159243303246"><td class="cellrowborder" valign="top" width="13.751375137513753%" headers="mcps1.2.5.1.1 "><p id="p492423013248"><a name="p492423013248"></a><a name="p492423013248"></a>输出参数</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.451645164516453%" headers="mcps1.2.5.1.2 "><p id="p12924103042411"><a name="p12924103042411"></a><a name="p12924103042411"></a>t_hoff</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98099809980998%" headers="mcps1.2.5.1.3 "><p id="p10924133022410"><a name="p10924133022410"></a><a name="p10924133022410"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.81598159815981%" headers="mcps1.2.5.1.4 "><p id="p1692483018249"><a name="p1692483018249"></a><a name="p1692483018249"></a>Undo记录数据头的长度。</p>
    </td>
    </tr>
    </tbody>
    </table>


-   gs\_verify\_undo\_record\(type, startIdx，endIdx, location\)

    描述：校验Undo记录。

    返回值类型：record

    >![](public_sys-resources/icon-note.png) **说明：** 
    >该接口仅为扩展预留接口，禁止使用。


-   gs\_verify\_undo\_translot\(type, startIdx，endIdx, location\)

    描述：校验Undo事务槽。

    返回值类型：record

    >![](public_sys-resources/icon-note.png) **说明：** 
    >该接口仅为扩展预留接口，禁止使用。


-   gs\_verify\_undo\_meta\(type, startIdx，endIdx, location\)

    描述：校验Undo元信息。

    返回值类型：record

    >![](public_sys-resources/icon-note.png) **说明：** 
    >该接口仅为扩展预留接口，禁止使用。


