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

-   gs\_stat\_undo\(\)

    描述：Undo统计信息。

    返回值类型：record

    **表 1**  gs\_stat\_undo参数说明

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
