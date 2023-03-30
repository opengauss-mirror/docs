# Row-store Compression System Functions<a name="EN-US_TOPIC_0000001331071942"></a>

-   compress\_buffer\_stat\_info\(\)

    Description: Queries the PCA buffer statistics.

    Return type: record

    **Table 1** compress\_buffer\_stat\_info parameters

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.71%" id="mcps1.2.5.1.2"><p id="p193010585511"><a name="p193010585511"></a><a name="p193010585511"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.83%" id="mcps1.2.5.1.3"><p id="p093095865118"><a name="p093095865118"></a><a name="p093095865118"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p139301758195119"><a name="p139301758195119"></a><a name="p139301758195119"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>ctrl_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p2609091130"><a name="p2609091130"></a><a name="p2609091130"></a>pca_page_ctrl_t structure.</p>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>main_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p106751453123515"><a name="p106751453123515"></a><a name="p106751453123515"></a>Total number of main LRU chains in each partition.</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>free_cnt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>Total number of free LRU chains in each partition.</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.71%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>recycle_times</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.83%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>bigint</p>
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
    <tbody><tr id="row1545117994513"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p10451590455"><a name="p10451590455"></a><a name="p10451590455"></a>Input parameter</p>
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

    <a name="table8437142313275"></a>
    <table><thead align="left"><tr id="row1043711239272"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p143752362717"><a name="p143752362717"></a><a name="p143752362717"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p3437112322718"><a name="p3437112322718"></a><a name="p3437112322718"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p11437192312711"><a name="p11437192312711"></a><a name="p11437192312711"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p9437102315277"><a name="p9437102315277"></a><a name="p9437102315277"></a>Description</p>
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
    <tr id="row3437142316276"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1243716235278"><a name="p1243716235278"></a><a name="p1243716235278"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p144373235272"><a name="p144373235272"></a><a name="p144373235272"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p3437223182714"><a name="p3437223182714"></a><a name="p3437223182714"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p443810230277"><a name="p443810230277"></a><a name="p443810230277"></a>Relative path of the file.</p>
    </td>
    </tr>
    <tr id="row943892342719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p5438223162710"><a name="p5438223162710"></a><a name="p5438223162710"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p154386236277"><a name="p154386236277"></a><a name="p154386236277"></a>extent_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p16438112312714"><a name="p16438112312714"></a><a name="p16438112312714"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p18438112315275"><a name="p18438112315275"></a><a name="p18438112315275"></a>Number of extents.</p>
    </td>
    </tr>
    <tr id="row124381523182710"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p14438182302710"><a name="p14438182302710"></a><a name="p14438182302710"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p5438723202714"><a name="p5438723202714"></a><a name="p5438723202714"></a>dispersion_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p154381323162718"><a name="p154381323162718"></a><a name="p154381323162718"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1243852352713"><a name="p1243852352713"></a><a name="p1243852352713"></a>Number of pages containing discrete chunks.</p>
    </td>
    </tr>
    <tr id="row1438172314270"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1438112316274"><a name="p1438112316274"></a><a name="p1438112316274"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p1743819231272"><a name="p1743819231272"></a><a name="p1743819231272"></a>void_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p14438162317278"><a name="p14438162317278"></a><a name="p14438162317278"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p743819239274"><a name="p743819239274"></a><a name="p743819239274"></a>Number of pages containing unacknowledged chunks.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_address\_header\(oid regclass, seg\_id bigint\)

    Description: Views the management information on the file compression page.

    Return type: record

    **Table 4** compress\_address\_header parameters

    <a name="table14224203214274"></a>
    <table><thead align="left"><tr id="row1322413321278"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p1322483262711"><a name="p1322483262711"></a><a name="p1322483262711"></a>Parameter Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.740000000000002%" id="mcps1.2.5.1.2"><p id="p122244329277"><a name="p122244329277"></a><a name="p122244329277"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.799999999999999%" id="mcps1.2.5.1.3"><p id="p1522493219277"><a name="p1522493219277"></a><a name="p1522493219277"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="50.77%" id="mcps1.2.5.1.4"><p id="p132241321272"><a name="p132241321272"></a><a name="p132241321272"></a>Description </p>
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
    <tr id="row622573214279"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p14225163213275"><a name="p14225163213275"></a><a name="p14225163213275"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p132251326278"><a name="p132251326278"></a><a name="p132251326278"></a>extent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p20225143219274"><a name="p20225143219274"></a><a name="p20225143219274"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p322514327278"><a name="p322514327278"></a><a name="p322514327278"></a>ID of the extent.</p>
    </td>
    </tr>
    <tr id="row3225123242713"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p7225183213279"><a name="p7225183213279"></a><a name="p7225183213279"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p42250321275"><a name="p42250321275"></a><a name="p42250321275"></a>nblocks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p4225332122717"><a name="p4225332122717"></a><a name="p4225332122717"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p1843011445406"><a name="p1843011445406"></a><a name="p1843011445406"></a>Number of pages in the extent.</p>
    </td>
    </tr>
    <tr id="row922523232715"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p202257329275"><a name="p202257329275"></a><a name="p202257329275"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p122251132182710"><a name="p122251132182710"></a><a name="p122251132182710"></a>alocated_chunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p1522553211273"><a name="p1522553211273"></a><a name="p1522553211273"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p72251932102717"><a name="p72251932102717"></a><a name="p72251932102717"></a>Number of chunks allocated in the extent.</p>
    </td>
    </tr>
    <tr id="row14225193212714"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p62251532192713"><a name="p62251532192713"></a><a name="p62251532192713"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p11225133216271"><a name="p11225133216271"></a><a name="p11225133216271"></a>chunk_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p11225232122712"><a name="p11225232122712"></a><a name="p11225232122712"></a>integer</p>
    </td>
    	 <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p182256324276"><a name="p182256324276"></a><a name="p182256324276"></a>Chunk size, in bytes.</p>
    </td>
    </tr>
    <tr id="row1822583214271"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p1922563282717"><a name="p1922563282717"></a><a name="p1922563282717"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="25.740000000000002%" headers="mcps1.2.5.1.2 "><p id="p625940193415"><a name="p625940193415"></a><a name="p625940193415"></a>algorithm</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.799999999999999%" headers="mcps1.2.5.1.3 "><p id="p11225132152710"><a name="p11225132152710"></a><a name="p11225132152710"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="50.77%" headers="mcps1.2.5.1.4 "><p id="p131016465427"><a name="p131016465427"></a><a name="p131016465427"></a>Compression algorithm.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   compress\_address\_details\(oid regclass, seg\_id bigint\)

    Description: Detailed information about the usage of page chunks.

    Return type: record

    **Table 5** compress\_address\_details parameters

    <a name="table10991163762710"></a>
    <table><thead align="left"><tr id="row1999219377275"><th class="cellrowborder" valign="top" width="11.690000000000001%" id="mcps1.2.5.1.1"><p id="p69921373277"><a name="p69921373277"></a><a name="p69921373277"></a>Parameter Type </p>
    </th>
    <th class="cellrowborder" valign="top" width="23.87%" id="mcps1.2.5.1.2"><p id="p49922372279"><a name="p49922372279"></a><a name="p49922372279"></a>Parameter Name </p>
    </th>
    <th class="cellrowborder" valign="top" width="11.21%" id="mcps1.2.5.1.3"><p id="p17992637152715"><a name="p17992637152715"></a><a name="p17992637152715"></a>Type </p>
    </th>
    <th class="cellrowborder" valign="top" width="53.23%" id="mcps1.2.5.1.4"><p id="p099233752712"><a name="p099233752712"></a><a name="p099233752712"></a>Description </p>
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
    <tr id="row1699218375275"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p3992123772715"><a name="p3992123772715"></a><a name="p3992123772715"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p15459101973715"><a name="p15459101973715"></a><a name="p15459101973715"></a>extent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p1992133772718"><a name="p1992133772718"></a><a name="p1992133772718"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p3992173752718"><a name="p3992173752718"></a><a name="p3992173752718"></a>ID of the extent.</p>
    </td>
    </tr>
    <tr id="row149925372276"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2992113712711"><a name="p2992113712711"></a><a name="p2992113712711"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p1119147372"><a name="p1119147372"></a><a name="p1119147372"></a>extent_block_number</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p29924379277"><a name="p29924379277"></a><a name="p29924379277"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p208091025183811"><a name="p208091025183811"></a><a name="p208091025183811"></a>Page number in the extent. The value ranges from 0 to 127.</p>
    </td>
    </tr>
    <tr id="row3356114914367"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p935634913361"><a name="p935634913361"></a><a name="p935634913361"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p1916218517379"><a name="p1916218517379"></a><a name="p1916218517379"></a>block_number</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p435784973617"><a name="p435784973617"></a><a name="p435784973617"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p1135784933610"><a name="p1135784933610"></a><a name="p1135784933610"></a>Overall page number.</p>
    </td>
    </tr>
    <tr id="row14992143718278"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p199211372272"><a name="p199211372272"></a><a name="p199211372272"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p1799283710272"><a name="p1799283710272"></a><a name="p1799283710272"></a>alocated_chunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p499311373276"><a name="p499311373276"></a><a name="p499311373276"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p1499323772713"><a name="p1499323772713"></a><a name="p1499323772713"></a>Number of chunks used by the page.</p>
    </td>
    </tr>
    <tr id="row1398116307351"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p8493113417351"><a name="p8493113417351"></a><a name="p8493113417351"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p129813309355"><a name="p129813309355"></a><a name="p129813309355"></a>nchunks</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p199813304359"><a name="p199813304359"></a><a name="p199813304359"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p139828305357"><a name="p139828305357"></a><a name="p139828305357"></a>Number of chunks used by the page. The value cannot be greater than the value of <strong>alocated_chunks</strong>.</p>
    </td>
    </tr>
    <tr id="row6993153722719"><td class="cellrowborder" valign="top" width="11.690000000000001%" headers="mcps1.2.5.1.1 "><p id="p2099310374272"><a name="p2099310374272"></a><a name="p2099310374272"></a>Output parameter </p>
    </td>
    <td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.2.5.1.2 "><p id="p79931837122712"><a name="p79931837122712"></a><a name="p79931837122712"></a>chunknos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.21%" headers="mcps1.2.5.1.3 "><p id="p99931137102719"><a name="p99931137102719"></a><a name="p99931137102719"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.23%" headers="mcps1.2.5.1.4 "><p id="p4993737122716"><a name="p4993737122716"></a><a name="p4993737122716"></a>Number of the used chunks, starting from 1.</p>
    </td>
    </tr>
    </tbody>
    </table>
