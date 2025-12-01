# Undo System Functions<a name="EN-US_TOPIC_0000001135762588"></a>

-   gs\_undo\_meta\(type, zoneId, location\)

    Description: Specifies metadata of each module in the undo system.

    Parameter description:

    -   **type**  \(metadata type\)

        The value  **0**  indicates the metadata corresponding to  **Undo Zone\(Record\)**.

        The value  **1**  indicates the metadata corresponding to  **Undo Zone\(Transaction Slot\)**.

        The value  **2**  indicates the metadata corresponding to  **Undo Space\(Record\)**.

        The value  **3**  indicates the metadata corresponding to  **Undo Space\(Transaction Slot\)**.

    -   **zoneId**  \(undo zone ID\)

        The value  **–1**  indicates the metadata of all undo zones.

        The value range 0–1024 x 1024 indicates the metadata of the corresponding zone ID.

    -   **location**  \(read location\)

        The value  **0**  indicates that data is read from the current memory.

        The value  **1**  indicates that data is read from a physical file.

    Return type: record

-   gs\_undo\_translot\(location, zoneId\)

    Description: Specifies transaction slot information of the undo system.

    Parameter description:

    -   **location**  \(read location\)

        The value  **0**  indicates that data is read from the current memory.

        The value  **1**  indicates that data is read from a physical file.

    -   **zoneId**  \(undo zone ID\)

        The value  **–1**  indicates the metadata of all undo zones.

        The value range 0–1024 x 1024 indicates the metadata of the corresponding zone ID.

    Return type: record

-   gs\_stat\_undo\(\)

    Description: Undo statistics.

    Return type: record

    **Table  1**  gs\_stat\_undo parameters

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>Category</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p193010585511"><a name="p193010585511"></a><a name="p193010585511"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p093095865118"><a name="p093095865118"></a><a name="p093095865118"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p139301758195119"><a name="p139301758195119"></a><a name="p139301758195119"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>curr_used_zone_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>Number of used undo zones.</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>top_used_zones</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p31022210319"><a name="p31022210319"></a><a name="p31022210319"></a>Information about the first three undo zones with the maximum usage. The output format is as follows:</p>
    <p id="p1010182215310"><a name="p1010182215310"></a><a name="p1010182215310"></a><strong id="b10442150162013"><a name="b10442150162013"></a><a name="b10442150162013"></a>(zoneId1:</strong><em id="i215615362011"><a name="i215615362011"></a><a name="i215615362011"></a>Used size</em><strong id="b333213316202"><a name="b333213316202"></a><a name="b333213316202"></a>; zoneId2:</strong><em id="i1673211317201"><a name="i1673211317201"></a><a name="i1673211317201"></a>Used size</em><strong id="b93321311202"><a name="b93321311202"></a><a name="b93321311202"></a>; zoneId3:</strong><em id="i2045315258201"><a name="i2045315258201"></a><a name="i2045315258201"></a>Used size</em><strong id="b204531225162015"><a name="b204531225162015"></a><a name="b204531225162015"></a>)</strong>.</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>curr_used_undo_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>Total size of the undo tablespace that is being used. The unit is MB.</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>undo_threshold</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>Calculation result of the value of the GUC parameter <strong id="b8908808223"><a name="b8908808223"></a><a name="b8908808223"></a>undo_space_limit_size</strong> x 80%. The unit is MB.</p>
    </td>
    </tr>
    <tr id="row156126595241"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p10613659172410"><a name="p10613659172410"></a><a name="p10613659172410"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p66131659132416"><a name="p66131659132416"></a><a name="p66131659132416"></a>oldest_xid_in_undo</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p66131859182419"><a name="p66131859182419"></a><a name="p66131859182419"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p5810145016516"><a name="p5810145016516"></a><a name="p5810145016516"></a>XID of the transaction recycled to the undo space. The undo records generated by the transaction whose XID is smaller than the value of XID are recycled.</p>
    </td>
    </tr>
    <tr id="row126656371914"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2665113711116"><a name="p2665113711116"></a><a name="p2665113711116"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p366519371213"><a name="p366519371213"></a><a name="p366519371213"></a>oldest_xmin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p46651437314"><a name="p46651437314"></a><a name="p46651437314"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p766515372113"><a name="p766515372113"></a><a name="p766515372113"></a>Oldest active transaction.</p>
    </td>
    </tr>
    <tr id="row187623392013"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p12762193910117"><a name="p12762193910117"></a><a name="p12762193910117"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p12762193914114"><a name="p12762193914114"></a><a name="p12762193914114"></a>total_undo_chain_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p187620393117"><a name="p187620393117"></a><a name="p187620393117"></a>int64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p14762839514"><a name="p14762839514"></a><a name="p14762839514"></a>Total length of all accessed undo chains.</p>
    </td>
    </tr>
    <tr id="row9321124111120"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1232117412014"><a name="p1232117412014"></a><a name="p1232117412014"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p4321134119111"><a name="p4321134119111"></a><a name="p4321134119111"></a>max_undo_chain_len</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p123224411116"><a name="p123224411116"></a><a name="p123224411116"></a>int64</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532212411218"><a name="p1532212411218"></a><a name="p1532212411218"></a>Maximum length of the accessed undo chain.</p>
    </td>
    </tr>
    <tr id="row197899421915"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p478912427113"><a name="p478912427113"></a><a name="p478912427113"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p07891421715"><a name="p07891421715"></a><a name="p07891421715"></a>create_undo_file_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p167893427111"><a name="p167893427111"></a><a name="p167893427111"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p47897421316"><a name="p47897421316"></a><a name="p47897421316"></a>Number of created undo files.</p>
    </td>
    </tr>
    <tr id="row161246451119"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p61247451514"><a name="p61247451514"></a><a name="p61247451514"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p01241545713"><a name="p01241545713"></a><a name="p01241545713"></a>discard_undo_file_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p4124124514113"><a name="p4124124514113"></a><a name="p4124124514113"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1812420456110"><a name="p1812420456110"></a><a name="p1812420456110"></a>Number of deleted undo files.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_undo\_record\(undoptr\)

    Description: Undo record resolution.

    Parameter description:

    -   **undoptr**  \(undo record pointer\)

    Return type: record


