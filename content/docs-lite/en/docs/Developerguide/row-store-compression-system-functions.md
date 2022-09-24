# Row-store Compression System Functions<a name="EN-US_TOPIC_0000001382371333"></a>

-   compress\_buffer\_stat\_info\(\)

    Description: Queries the PCA buffer statistics.

    Return type: record

    **Table 1** compress\_buffer\_stat\_info parameters

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>Parameter Type</p>
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
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>ctrl_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>pca_page_ctrl_t structure.</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>main_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p106751453123515"><a name="p106751453123515"></a><a name="p106751453123515"></a>Total number of main LRU chains in each partition.</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>free_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>Total number of free LRU chains in each partition.</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>recycle_times</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>Number of times that the buffer eliminates LRUs.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_ratio\_info\(file\_path text\)

    Description: Views the file compression rate.

    Return type: record

    **Table 2** compress\_ratio\_info parameters

    <a name="table158403391218"></a>
    <table><thead align="left"><tr id="row1484183181211"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p984113321214"><a name="p984113321214"></a><a name="p984113321214"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p68412331216"><a name="p68412331216"></a><a name="p68412331216"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p11841203161220"><a name="p11841203161220"></a><a name="p11841203161220"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p138417312124"><a name="p138417312124"></a><a name="p138417312124"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row17221559155"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p10451590455"><a name="p10451590455"></a><a name="p10451590455"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p24511799454"><a name="p24511799454"></a><a name="p24511799454"></a>file_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p945112918451"><a name="p945112918451"></a><a name="p945112918451"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1845189114515"><a name="p1845189114515"></a><a name="p1845189114515"></a>Relative file path.</p>
    </td>
    </tr>
    <tr id="row48411337124"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p184173181219"><a name="p184173181219"></a><a name="p184173181219"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p38410361210"><a name="p38410361210"></a><a name="p38410361210"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p284117315126"><a name="p284117315126"></a><a name="p284117315126"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p107442403498"><a name="p107442403498"></a><a name="p107442403498"></a>Relative path of the file.</p>
    </td>
    </tr>
    <tr id="row084110301214"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p084112313122"><a name="p084112313122"></a><a name="p084112313122"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p18419381218"><a name="p18419381218"></a><a name="p18419381218"></a>is_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3841334127"><a name="p3841334127"></a><a name="p3841334127"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p468416413498"><a name="p468416413498"></a><a name="p468416413498"></a>Determines whether the file is a compressed file.</p>
    </td>
    </tr>
    <tr id="row984118391220"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p284119391215"><a name="p284119391215"></a><a name="p284119391215"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p884113361211"><a name="p884113361211"></a><a name="p884113361211"></a>file_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9841534120"><a name="p9841534120"></a><a name="p9841534120"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p3841939126"><a name="p3841939126"></a><a name="p3841939126"></a>Number of contained segment files.</p>
    </td>
    </tr>
    <tr id="row10841183101215"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p784183101216"><a name="p784183101216"></a><a name="p784183101216"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p178422312129"><a name="p178422312129"></a><a name="p178422312129"></a>logic_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p20842530126"><a name="p20842530126"></a><a name="p20842530126"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p284211320122"><a name="p284211320122"></a><a name="p284211320122"></a>Logical size, in bytes.</p>
    </td>
    </tr>
    <tr id="row178429311128"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p188429320121"><a name="p188429320121"></a><a name="p188429320121"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5842934121"><a name="p5842934121"></a><a name="p5842934121"></a>physic_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p9842936127"><a name="p9842936127"></a><a name="p9842936127"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p11842936125"><a name="p11842936125"></a><a name="p11842936125"></a>Actual physical size, in bytes.</p>
    </td>
    </tr>
    <tr id="row1227811325479"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1778273511477"><a name="p1778273511477"></a><a name="p1778273511477"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p16278203224719"><a name="p16278203224719"></a><a name="p16278203224719"></a>compress_ratio</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p112781532104711"><a name="p112781532104711"></a><a name="p112781532104711"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p827853284710"><a name="p827853284710"></a><a name="p827853284710"></a>File compression rate.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_statistic\_info\(file\_path text, step smallint\)

    Description: Collects statistics on the dispersion of compressed files.

    Return type: record

    **Table 3** compress\_statistic\_info parameters

    <a name="table81811434484"></a>
    <table><thead align="left"><tr id="row1918115342816"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p14181234786"><a name="p14181234786"></a><a name="p14181234786"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p818119341817"><a name="p818119341817"></a><a name="p818119341817"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p171817341186"><a name="p171817341186"></a><a name="p171817341186"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p151818341283"><a name="p151818341283"></a><a name="p151818341283"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row0523112724713"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1752312714471"><a name="p1752312714471"></a><a name="p1752312714471"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1952322715470"><a name="p1952322715470"></a><a name="p1952322715470"></a>file_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p752310274473"><a name="p752310274473"></a><a name="p752310274473"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p35595374713"><a name="p35595374713"></a><a name="p35595374713"></a>Relative path of the file.</p>
    </td>
    </tr>
    <tr id="row89971884719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p499714817479"><a name="p499714817479"></a><a name="p499714817479"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5997168204717"><a name="p5997168204717"></a><a name="p5997168204717"></a>step</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p199974817479"><a name="p199974817479"></a><a name="p199974817479"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p39979819479"><a name="p39979819479"></a><a name="p39979819479"></a>Sampling statistics step.</p>
    </td>
    </tr>
    <tr id="row181812341885"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p118217347810"><a name="p118217347810"></a><a name="p118217347810"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p20182203411814"><a name="p20182203411814"></a><a name="p20182203411814"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p81821134688"><a name="p81821134688"></a><a name="p81821134688"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p11182183414814"><a name="p11182183414814"></a><a name="p11182183414814"></a>Relative path of the file.</p>
    </td>
    </tr>
    <tr id="row17182153417816"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p418243415811"><a name="p418243415811"></a><a name="p418243415811"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p181824341884"><a name="p181824341884"></a><a name="p181824341884"></a>extent_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p318217341988"><a name="p318217341988"></a><a name="p318217341988"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p61829343810"><a name="p61829343810"></a><a name="p61829343810"></a>Number of extents.</p>
    </td>
    </tr>
    <tr id="row1518213341680"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p131827342816"><a name="p131827342816"></a><a name="p131827342816"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p101821341181"><a name="p101821341181"></a><a name="p101821341181"></a>dispersion_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p918293420810"><a name="p918293420810"></a><a name="p918293420810"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p121828341484"><a name="p121828341484"></a><a name="p121828341484"></a>Number of pages containing discrete chunks.</p>
    </td>
    </tr>
    <tr id="row01829341482"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1018212341284"><a name="p1018212341284"></a><a name="p1018212341284"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p218211341084"><a name="p218211341084"></a><a name="p218211341084"></a>void_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p11826341784"><a name="p11826341784"></a><a name="p11826341784"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1618220341683"><a name="p1618220341683"></a><a name="p1618220341683"></a>Number of pages containing unacknowledged chunks.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_address\_header\(oid regclass, seg\_id bigint\)

    Description: Views the management information on the file compression page.

    Return type: record

    **Table 4** compress\_address\_header parameters

    <a name="table393710214411"></a>
    <table><thead align="left"><tr id="row29381126413"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1593815213411"><a name="p1593815213411"></a><a name="p1593815213411"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p15938020417"><a name="p15938020417"></a><a name="p15938020417"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p13938927413"><a name="p13938927413"></a><a name="p13938927413"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p0938728414"><a name="p0938728414"></a><a name="p0938728414"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row447115017485"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p184717500485"><a name="p184717500485"></a><a name="p184717500485"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p947111503487"><a name="p947111503487"></a><a name="p947111503487"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p174711504481"><a name="p174711504481"></a><a name="p174711504481"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p7471155014819"><a name="p7471155014819"></a><a name="p7471155014819"></a>reloid of the table to which the file belongs.</p>
    </td>
    </tr>
    <tr id="row432144610489"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2321846134818"><a name="p2321846134818"></a><a name="p2321846134818"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p14321546154811"><a name="p14321546154811"></a><a name="p14321546154811"></a>seg_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p12322184612489"><a name="p12322184612489"></a><a name="p12322184612489"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2322846154810"><a name="p2322846154810"></a><a name="p2322846154810"></a>Sequence number of a segment file.</p>
    </td>
    </tr>
    <tr id="row3938325413"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p893862045"><a name="p893862045"></a><a name="p893862045"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1938621448"><a name="p1938621448"></a><a name="p1938621448"></a>extent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1293812645"><a name="p1293812645"></a><a name="p1293812645"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p193811215410"><a name="p193811215410"></a><a name="p193811215410"></a>ID of the extent.</p>
    </td>
    </tr>
    <tr id="row49381227417"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p20938124412"><a name="p20938124412"></a><a name="p20938124412"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p18938921449"><a name="p18938921449"></a><a name="p18938921449"></a>nblocks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p0938202847"><a name="p0938202847"></a><a name="p0938202847"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p99391021140"><a name="p99391021140"></a><a name="p99391021140"></a>Number of pages in the extent.</p>
    </td>
    </tr>
    <tr id="row12939128419"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p149391820413"><a name="p149391820413"></a><a name="p149391820413"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1493919215419"><a name="p1493919215419"></a><a name="p1493919215419"></a>alocated_chunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p10939162244"><a name="p10939162244"></a><a name="p10939162244"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p99391121646"><a name="p99391121646"></a><a name="p99391121646"></a>Number of chunks allocated in the extent.</p>
    </td>
    </tr>
    <tr id="row209391826413"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1593911212413"><a name="p1593911212413"></a><a name="p1593911212413"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p593912148"><a name="p593912148"></a><a name="p593912148"></a>chunk_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1939112549"><a name="p1939112549"></a><a name="p1939112549"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p9939421243"><a name="p9939421243"></a><a name="p9939421243"></a>Chunk size, in bytes.</p>
    </td>
    </tr>
    <tr id="row10939821543"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1493919217411"><a name="p1493919217411"></a><a name="p1493919217411"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p199391620415"><a name="p199391620415"></a><a name="p199391620415"></a>algorithm</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p13939421040"><a name="p13939421040"></a><a name="p13939421040"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p9939152644"><a name="p9939152644"></a><a name="p9939152644"></a>Compression algorithm.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_address\_details\(oid regclass, seg\_id bigint\)

    Description: Detailed information about the usage of page chunks.

    Return type: record

    **Table 5** compress\_address\_details parameters

    <a name="table10486345216"></a>
    <table><thead align="left"><tr id="row4486440220"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p17486174124"><a name="p17486174124"></a><a name="p17486174124"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="23.87%" id="mcps1.2.5.1.2"><p id="p1548619417216"><a name="p1548619417216"></a><a name="p1548619417216"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.21%" id="mcps1.2.5.1.3"><p id="p164871941822"><a name="p164871941822"></a><a name="p164871941822"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="53.23%" id="mcps1.2.5.1.4"><p id="p34871845212"><a name="p34871845212"></a><a name="p34871845212"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1334720378509"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p163487374506"><a name="p163487374506"></a><a name="p163487374506"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p23481137155013"><a name="p23481137155013"></a><a name="p23481137155013"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p133481837165010"><a name="p133481837165010"></a><a name="p133481837165010"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p19670836145317"><a name="p19670836145317"></a><a name="p19670836145317"></a>reloid of the table to which the file belongs.</p>
    </td>
    </tr>
    <tr id="row59396334506"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p593913319507"><a name="p593913319507"></a><a name="p593913319507"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p793913338508"><a name="p793913338508"></a><a name="p793913338508"></a>seg_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p7939133318501"><a name="p7939133318501"></a><a name="p7939133318501"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p6939033115018"><a name="p6939033115018"></a><a name="p6939033115018"></a>Sequence number of a segment file.</p>
    </td>
    </tr>
    <tr id="row148715419220"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p9487144325"><a name="p9487144325"></a><a name="p9487144325"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p7487741923"><a name="p7487741923"></a><a name="p7487741923"></a>extent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p17487948211"><a name="p17487948211"></a><a name="p17487948211"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p104876416216"><a name="p104876416216"></a><a name="p104876416216"></a>ID of the extent.</p>
    </td>
    </tr>
    <tr id="row548710418214"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p448734123"><a name="p448734123"></a><a name="p448734123"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p0487144022"><a name="p0487144022"></a><a name="p0487144022"></a>extent_block_number</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p134871342027"><a name="p134871342027"></a><a name="p134871342027"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p15487348220"><a name="p15487348220"></a><a name="p15487348220"></a>Page number in the extent. The value ranges from 0 to 127.</p>
    </td>
    </tr>
    <tr id="row10487164722"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19487445215"><a name="p19487445215"></a><a name="p19487445215"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p1048754623"><a name="p1048754623"></a><a name="p1048754623"></a>block_number</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p44871841424"><a name="p44871841424"></a><a name="p44871841424"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p12487741329"><a name="p12487741329"></a><a name="p12487741329"></a>Overall page number.</p>
    </td>
    </tr>
    <tr id="row34878411216"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p74881241326"><a name="p74881241326"></a><a name="p74881241326"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p144881746210"><a name="p144881746210"></a><a name="p144881746210"></a>alocated_chunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p184881541210"><a name="p184881541210"></a><a name="p184881541210"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p24885416212"><a name="p24885416212"></a><a name="p24885416212"></a>Number of chunks used by the page.</p>
    </td>
    </tr>
    <tr id="row14488649217"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p648844825"><a name="p648844825"></a><a name="p648844825"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p1748854922"><a name="p1748854922"></a><a name="p1748854922"></a>nchunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p1448815410212"><a name="p1448815410212"></a><a name="p1448815410212"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p44881346214"><a name="p44881346214"></a><a name="p44881346214"></a>Number of chunks used by the page. The value cannot be greater than the value of <strong>alocated_chunks</strong>.</p>
    </td>
    </tr>
    <tr id="row1488174126"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p124881418212"><a name="p124881418212"></a><a name="p124881418212"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p64886418216"><a name="p64886418216"></a><a name="p64886418216"></a>chunknos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p1848834227"><a name="p1848834227"></a><a name="p1848834227"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p74881841721"><a name="p74881841721"></a><a name="p74881841721"></a>Number of the used chunks, starting from 1.</p>
    </td>
    </tr>
    </tbody>
    </table>
