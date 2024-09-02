# Internal Functions<a name="EN-US_TOPIC_0308046607"></a>

The following functions of openGauss use internal data types, which cannot be directly called by users.

-   Selection rate calculation functions

    <a name="table1762224611243"></a>
    <table><tbody><tr id="row567374612247"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p967334632415"><a name="p967334632415"></a><a name="p967334632415"></a>areajoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5673194617249"><a name="p5673194617249"></a><a name="p5673194617249"></a>areasel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p66731046122416"><a name="p66731046122416"></a><a name="p66731046122416"></a>arraycontjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1067304616244"><a name="p1067304616244"></a><a name="p1067304616244"></a>arraycontsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1167315460244"><a name="p1167315460244"></a><a name="p1167315460244"></a>contjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p136736463245"><a name="p136736463245"></a><a name="p136736463245"></a>contsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1767319461246"><a name="p1767319461246"></a><a name="p1767319461246"></a>eqjoinsel</p>
    </td>
    </tr>
    <tr id="row8673446192419"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2673446182420"><a name="p2673446182420"></a><a name="p2673446182420"></a>eqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2673174602418"><a name="p2673174602418"></a><a name="p2673174602418"></a>iclikejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8673246112419"><a name="p8673246112419"></a><a name="p8673246112419"></a>iclikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p967384615249"><a name="p967384615249"></a><a name="p967384615249"></a>icnlikejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p967318466240"><a name="p967318466240"></a><a name="p967318466240"></a>icnlikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p967394615246"><a name="p967394615246"></a><a name="p967394615246"></a>icregexeqjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18673184610245"><a name="p18673184610245"></a><a name="p18673184610245"></a>icregexeqsel</p>
    </td>
    </tr>
    <tr id="row5673446162417"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16731346132415"><a name="p16731346132415"></a><a name="p16731346132415"></a>icregexnejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p206731846132416"><a name="p206731846132416"></a><a name="p206731846132416"></a>icregexnesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5673114615244"><a name="p5673114615244"></a><a name="p5673114615244"></a>likejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18673194613244"><a name="p18673194613244"></a><a name="p18673194613244"></a>likesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p166739464246"><a name="p166739464246"></a><a name="p166739464246"></a>neqjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1567313467241"><a name="p1567313467241"></a><a name="p1567313467241"></a>neqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1967374642411"><a name="p1967374642411"></a><a name="p1967374642411"></a>nlikejoinsel</p>
    </td>
    </tr>
    <tr id="row1673346102418"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1267394652416"><a name="p1267394652416"></a><a name="p1267394652416"></a>nlikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p106733469241"><a name="p106733469241"></a><a name="p106733469241"></a>positionjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17673194611247"><a name="p17673194611247"></a><a name="p17673194611247"></a>positionsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7673204610247"><a name="p7673204610247"></a><a name="p7673204610247"></a>regexeqjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1567404613244"><a name="p1567404613244"></a><a name="p1567404613244"></a>regexeqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p367414602419"><a name="p367414602419"></a><a name="p367414602419"></a>regexnejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p196741246122412"><a name="p196741246122412"></a><a name="p196741246122412"></a>regexnesel</p>
    </td>
    </tr>
    <tr id="row1667454682412"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p136741246142415"><a name="p136741246142415"></a><a name="p136741246142415"></a>scalargtjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9674134632411"><a name="p9674134632411"></a><a name="p9674134632411"></a>scalargtsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12674124616244"><a name="p12674124616244"></a><a name="p12674124616244"></a>scalarltjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p176741446132410"><a name="p176741446132410"></a><a name="p176741446132410"></a>scalarltsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p567444612246"><a name="p567444612246"></a><a name="p567444612246"></a>tsmatchjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10675204615249"><a name="p10675204615249"></a><a name="p10675204615249"></a>tsmatchsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8508037173214"><a name="p8508037173214"></a><a name="p8508037173214"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Statistics collection functions

    <a name="table51244368229"></a>
    <table><tbody><tr id="row514533682214"><td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p4145143672219"><a name="p4145143672219"></a><a name="p4145143672219"></a>array_typanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p1814593692218"><a name="p1814593692218"></a><a name="p1814593692218"></a>range_typanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p1514514362226"><a name="p1514514362226"></a><a name="p1514514362226"></a>ts_typanalyze</p>
    </td>
    </tr>
    <tr id="row1169117454247"><td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p1769274520244"><a name="p1769274520244"></a><a name="p1769274520244"></a>local_rto_stat</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p6692154522418"><a name="p6692154522418"></a><a name="p6692154522418"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%"><p id="p136929452248"><a name="p136929452248"></a><a name="p136929452248"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions for sorting

    <a name="table1566818177228"></a>
    <table><tbody><tr id="row16696817142212"><td class="cellrowborder" valign="top" width="20%"><p id="p06962179226"><a name="p06962179226"></a><a name="p06962179226"></a>bpchar_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p069651712228"><a name="p069651712228"></a><a name="p069651712228"></a>bytea_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p12696517192216"><a name="p12696517192216"></a><a name="p12696517192216"></a>date_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p126966178224"><a name="p126966178224"></a><a name="p126966178224"></a>numeric_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p1069611712214"><a name="p1069611712214"></a><a name="p1069611712214"></a>timestamp_sortsupport</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions for full-text retrieval

    <a name="table172830446219"></a>
    <table><tbody><tr id="row1337184418212"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p633754482116"><a name="p633754482116"></a><a name="p633754482116"></a>dispell_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p933784410218"><a name="p933784410218"></a><a name="p933784410218"></a>dispell_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19337144416211"><a name="p19337144416211"></a><a name="p19337144416211"></a>dsimple_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p183371544172117"><a name="p183371544172117"></a><a name="p183371544172117"></a>dsimple_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14337134416210"><a name="p14337134416210"></a><a name="p14337134416210"></a>dsnowball_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p103371144102114"><a name="p103371144102114"></a><a name="p103371144102114"></a>dsnowball_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1933774415218"><a name="p1933774415218"></a><a name="p1933774415218"></a>dsynonym_init</p>
    </td>
    </tr>
    <tr id="row433754419217"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p333724416213"><a name="p333724416213"></a><a name="p333724416213"></a>dsynonym_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1233704419216"><a name="p1233704419216"></a><a name="p1233704419216"></a>gtsquery_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1633718448212"><a name="p1633718448212"></a><a name="p1633718448212"></a>gtsquery_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10337134492114"><a name="p10337134492114"></a><a name="p10337134492114"></a>gtsquery_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1633719442217"><a name="p1633719442217"></a><a name="p1633719442217"></a>gtsquery_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13337164419219"><a name="p13337164419219"></a><a name="p13337164419219"></a>gtsquery_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1033764452111"><a name="p1033764452111"></a><a name="p1033764452111"></a>gtsquery_same</p>
    </td>
    </tr>
    <tr id="row17337144402110"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13337344172111"><a name="p13337344172111"></a><a name="p13337344172111"></a>gtsquery_union</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1233764422115"><a name="p1233764422115"></a><a name="p1233764422115"></a>ngram_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1233717446217"><a name="p1233717446217"></a><a name="p1233717446217"></a>ngram_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11337944202111"><a name="p11337944202111"></a><a name="p11337944202111"></a>ngram_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p43381744162116"><a name="p43381744162116"></a><a name="p43381744162116"></a>pound_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1133819449213"><a name="p1133819449213"></a><a name="p1133819449213"></a>pound_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p113381944112116"><a name="p113381944112116"></a><a name="p113381944112116"></a>pound_start</p>
    </td>
    </tr>
    <tr id="row163381044162114"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20338544132118"><a name="p20338544132118"></a><a name="p20338544132118"></a>prsd_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19338124411211"><a name="p19338124411211"></a><a name="p19338124411211"></a>prsd_headline</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19338144412113"><a name="p19338144412113"></a><a name="p19338144412113"></a>prsd_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p933844482117"><a name="p933844482117"></a><a name="p933844482117"></a>prsd_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10338124432110"><a name="p10338124432110"></a><a name="p10338124432110"></a>thesaurus_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14338154462110"><a name="p14338154462110"></a><a name="p14338154462110"></a>thesaurus_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1433814452116"><a name="p1433814452116"></a><a name="p1433814452116"></a>zhprs_end</p>
    </td>
    </tr>
    <tr id="row123381044112115"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p183383442219"><a name="p183383442219"></a><a name="p183383442219"></a>zhprs_getlexeme</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1733894412214"><a name="p1733894412214"></a><a name="p1733894412214"></a>zhprs_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p193381844122110"><a name="p193381844122110"></a><a name="p193381844122110"></a>zhprs_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1619314339342"><a name="p1619314339342"></a><a name="p1619314339342"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p633818443214"><a name="p633818443214"></a><a name="p633818443214"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p833811440210"><a name="p833811440210"></a><a name="p833811440210"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p0338544162117"><a name="p0338544162117"></a><a name="p0338544162117"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal type processing functions

    <a name="table1479618142013"></a>
    <table><tbody><tr id="row12625151814202"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p76251318162013"><a name="p76251318162013"></a><a name="p76251318162013"></a>abstimerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p462591852011"><a name="p462591852011"></a><a name="p462591852011"></a>euc_jis_2004_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p46255188207"><a name="p46255188207"></a><a name="p46255188207"></a>int2recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2062571862011"><a name="p2062571862011"></a><a name="p2062571862011"></a>line_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5625171812018"><a name="p5625171812018"></a><a name="p5625171812018"></a>oidvectorrecv_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p15625121815205"><a name="p15625121815205"></a><a name="p15625121815205"></a>tidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p662501812013"><a name="p662501812013"></a><a name="p662501812013"></a>utf8_to_koi8u</p>
    </td>
    </tr>
    <tr id="row4625518182013"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p262581822017"><a name="p262581822017"></a><a name="p262581822017"></a>anyarray_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p362551815205"><a name="p362551815205"></a><a name="p362551815205"></a>euc_jp_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3625118162017"><a name="p3625118162017"></a><a name="p3625118162017"></a>int2vectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11626141811208"><a name="p11626141811208"></a><a name="p11626141811208"></a>lseg_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1162651842016"><a name="p1162651842016"></a><a name="p1162651842016"></a>path_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1626101812017"><a name="p1626101812017"></a><a name="p1626101812017"></a>time_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p16626191816209"><a name="p16626191816209"></a><a name="p16626191816209"></a>utf8_to_shift_jis_2004</p>
    </td>
    </tr>
    <tr id="row8626101815209"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p962671882019"><a name="p962671882019"></a><a name="p962671882019"></a>array_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11626918162013"><a name="p11626918162013"></a><a name="p11626918162013"></a>euc_jp_to_sjis</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p76261189206"><a name="p76261189206"></a><a name="p76261189206"></a>int4recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10626618102019"><a name="p10626618102019"></a><a name="p10626618102019"></a>macaddr_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1562651802018"><a name="p1562651802018"></a><a name="p1562651802018"></a>pg_node_tree_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p116269181208"><a name="p116269181208"></a><a name="p116269181208"></a>time_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p962601802015"><a name="p962601802015"></a><a name="p962601802015"></a>utf8_to_sjis</p>
    </td>
    </tr>
    <tr id="row196264181200"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p162611819204"><a name="p162611819204"></a><a name="p162611819204"></a>ascii_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12626161817206"><a name="p12626161817206"></a><a name="p12626161817206"></a>euc_jp_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p062614186204"><a name="p062614186204"></a><a name="p062614186204"></a>int8recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17626131816208"><a name="p17626131816208"></a><a name="p17626131816208"></a>mic_to_ascii</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4626171819201"><a name="p4626171819201"></a><a name="p4626171819201"></a>point_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1762651814200"><a name="p1762651814200"></a><a name="p1762651814200"></a>timestamp_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p16626101814203"><a name="p16626101814203"></a><a name="p16626101814203"></a>utf8_to_uhc</p>
    </td>
    </tr>
    <tr id="row1062610187206"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14626018102010"><a name="p14626018102010"></a><a name="p14626018102010"></a>ascii_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1462610188208"><a name="p1462610188208"></a><a name="p1462610188208"></a>euc_kr_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8626111819202"><a name="p8626111819202"></a><a name="p8626111819202"></a>internal_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6626161813209"><a name="p6626161813209"></a><a name="p6626161813209"></a>mic_to_big5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6626191818204"><a name="p6626191818204"></a><a name="p6626191818204"></a>poly_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p7626118142020"><a name="p7626118142020"></a><a name="p7626118142020"></a>timestamp_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1562681810206"><a name="p1562681810206"></a><a name="p1562681810206"></a>utf8_to_win</p>
    </td>
    </tr>
    <tr id="row15626418162018"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1462671816201"><a name="p1462671816201"></a><a name="p1462671816201"></a>big5_to_euc_tw</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p362661813201"><a name="p362661813201"></a><a name="p362661813201"></a>euc_kr_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4627141816207"><a name="p4627141816207"></a><a name="p4627141816207"></a>interval_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1762761812205"><a name="p1762761812205"></a><a name="p1762761812205"></a>mic_to_euc_cn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12627141813203"><a name="p12627141813203"></a><a name="p12627141813203"></a>pound_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1262713183207"><a name="p1262713183207"></a><a name="p1262713183207"></a>timestamptz_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p146271818122018"><a name="p146271818122018"></a><a name="p146271818122018"></a>uuid_recv</p>
    </td>
    </tr>
    <tr id="row10627918152019"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p96273185209"><a name="p96273185209"></a><a name="p96273185209"></a>big5_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1627151812015"><a name="p1627151812015"></a><a name="p1627151812015"></a>euc_tw_to_big5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p176271618102011"><a name="p176271618102011"></a><a name="p176271618102011"></a>interval_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p156274183202"><a name="p156274183202"></a><a name="p156274183202"></a>mic_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16627181816207"><a name="p16627181816207"></a><a name="p16627181816207"></a>prsd_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p126279185204"><a name="p126279185204"></a><a name="p126279185204"></a>timetz_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1962781817201"><a name="p1962781817201"></a><a name="p1962781817201"></a>varbit_recv</p>
    </td>
    </tr>
    <tr id="row1162711802010"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1162731892014"><a name="p1162731892014"></a><a name="p1162731892014"></a>big5_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p36271618172013"><a name="p36271618172013"></a><a name="p36271618172013"></a>euc_tw_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p15627618162016"><a name="p15627618162016"></a><a name="p15627618162016"></a>iso_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1462719187204"><a name="p1462719187204"></a><a name="p1462719187204"></a>mic_to_euc_kr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6627101812016"><a name="p6627101812016"></a><a name="p6627101812016"></a>range_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p146271218192011"><a name="p146271218192011"></a><a name="p146271218192011"></a>tintervalrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p11627718192011"><a name="p11627718192011"></a><a name="p11627718192011"></a>varbit_transform</p>
    </td>
    </tr>
    <tr id="row1162713185208"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p362761810205"><a name="p362761810205"></a><a name="p362761810205"></a>bit_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p166271018162017"><a name="p166271018162017"></a><a name="p166271018162017"></a>euc_tw_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p06271818192017"><a name="p06271818192017"></a><a name="p06271818192017"></a>iso_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5627318172013"><a name="p5627318172013"></a><a name="p5627318172013"></a>mic_to_euc_tw</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1062716183207"><a name="p1062716183207"></a><a name="p1062716183207"></a>rawrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p8627191882011"><a name="p8627191882011"></a><a name="p8627191882011"></a>tsqueryrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p16274188205"><a name="p16274188205"></a><a name="p16274188205"></a>varchar_transform</p>
    </td>
    </tr>
    <tr id="row86271518202019"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1462791872018"><a name="p1462791872018"></a><a name="p1462791872018"></a>boolrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p56271818172013"><a name="p56271818172013"></a><a name="p56271818172013"></a>float4recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11628161813201"><a name="p11628161813201"></a><a name="p11628161813201"></a>iso_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9628171815203"><a name="p9628171815203"></a><a name="p9628171815203"></a>mic_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11628818132017"><a name="p11628818132017"></a><a name="p11628818132017"></a>record_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p4628171812201"><a name="p4628171812201"></a><a name="p4628171812201"></a>tsvectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p176281118162016"><a name="p176281118162016"></a><a name="p176281118162016"></a>varcharrecv</p>
    </td>
    </tr>
    <tr id="row662813188204"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p76281318142016"><a name="p76281318142016"></a><a name="p76281318142016"></a>box_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p662861842010"><a name="p662861842010"></a><a name="p662861842010"></a>float8recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p26281318122010"><a name="p26281318122010"></a><a name="p26281318122010"></a>iso_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p662816184209"><a name="p662816184209"></a><a name="p662816184209"></a>mic_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14628161813204"><a name="p14628161813204"></a><a name="p14628161813204"></a>regclassrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p2628418122010"><a name="p2628418122010"></a><a name="p2628418122010"></a>txid_snapshot_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p14628171812018"><a name="p14628171812018"></a><a name="p14628171812018"></a>void_recv</p>
    </td>
    </tr>
    <tr id="row16628518192013"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p46281618102015"><a name="p46281618102015"></a><a name="p46281618102015"></a>bpcharrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4628161811202"><a name="p4628161811202"></a><a name="p4628161811202"></a>gb18030_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1362821814202"><a name="p1362821814202"></a><a name="p1362821814202"></a>iso8859_1_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p126281118112013"><a name="p126281118112013"></a><a name="p126281118112013"></a>mic_to_latin1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13628618172010"><a name="p13628618172010"></a><a name="p13628618172010"></a>regconfigrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p2628131882010"><a name="p2628131882010"></a><a name="p2628131882010"></a>uhc_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p86287183203"><a name="p86287183203"></a><a name="p86287183203"></a>win_to_utf8</p>
    </td>
    </tr>
    <tr id="row8628518122012"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13628111820207"><a name="p13628111820207"></a><a name="p13628111820207"></a>btoidsortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17628111862012"><a name="p17628111862012"></a><a name="p17628111862012"></a>gbk_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1962821832018"><a name="p1962821832018"></a><a name="p1962821832018"></a>iso8859_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p862881832019"><a name="p862881832019"></a><a name="p862881832019"></a>mic_to_latin2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1062831810207"><a name="p1062831810207"></a><a name="p1062831810207"></a>regdictionaryrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p762818180204"><a name="p762818180204"></a><a name="p762818180204"></a>unknownrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p15628181816206"><a name="p15628181816206"></a><a name="p15628181816206"></a>win1250_to_latin2</p>
    </td>
    </tr>
    <tr id="row126281118172017"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13628101802015"><a name="p13628101802015"></a><a name="p13628101802015"></a>bytearecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p462911862015"><a name="p462911862015"></a><a name="p462911862015"></a>gin_extract_tsvector</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1862931816208"><a name="p1862931816208"></a><a name="p1862931816208"></a>johab_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p96291118112018"><a name="p96291118112018"></a><a name="p96291118112018"></a>mic_to_latin3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1962941815207"><a name="p1962941815207"></a><a name="p1962941815207"></a>regoperatorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p162961820207"><a name="p162961820207"></a><a name="p162961820207"></a>utf8_to_ascii</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1662961819201"><a name="p1662961819201"></a><a name="p1662961819201"></a>win1250_to_mic</p>
    </td>
    </tr>
    <tr id="row4629181882015"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p862911862012"><a name="p862911862012"></a><a name="p862911862012"></a>byteawithoutorderwithequalcolrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p186291618192012"><a name="p186291618192012"></a><a name="p186291618192012"></a>gtsvector_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p462921892014"><a name="p462921892014"></a><a name="p462921892014"></a>json_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1262916188206"><a name="p1262916188206"></a><a name="p1262916188206"></a>mic_to_latin4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p136291918192018"><a name="p136291918192018"></a><a name="p136291918192018"></a>regoperrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p18629181814205"><a name="p18629181814205"></a><a name="p18629181814205"></a>utf8_to_big5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p36291418142019"><a name="p36291418142019"></a><a name="p36291418142019"></a>win1251_to_iso</p>
    </td>
    </tr>
    <tr id="row7629418172010"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p76291418112018"><a name="p76291418112018"></a><a name="p76291418112018"></a>cash_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p262991862018"><a name="p262991862018"></a><a name="p262991862018"></a>gtsvector_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4629181862019"><a name="p4629181862019"></a><a name="p4629181862019"></a>koi8r_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16629418102014"><a name="p16629418102014"></a><a name="p16629418102014"></a>mic_to_sjis</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p162919182207"><a name="p162919182207"></a><a name="p162919182207"></a>regprocedurerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1762918183203"><a name="p1762918183203"></a><a name="p1762918183203"></a>utf8_to_euc_cn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1462961882010"><a name="p1462961882010"></a><a name="p1462961882010"></a>win1251_to_koi8r</p>
    </td>
    </tr>
    <tr id="row1562911812012"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1662981892015"><a name="p1662981892015"></a><a name="p1662981892015"></a>charrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p36291918142013"><a name="p36291918142013"></a><a name="p36291918142013"></a>gtsvector_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2062991811200"><a name="p2062991811200"></a><a name="p2062991811200"></a>koi8r_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13629418102016"><a name="p13629418102016"></a><a name="p13629418102016"></a>mic_to_win1250</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19629171811209"><a name="p19629171811209"></a><a name="p19629171811209"></a>regprocrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p3629518102011"><a name="p3629518102011"></a><a name="p3629518102011"></a>utf8_to_euc_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p156291184205"><a name="p156291184205"></a><a name="p156291184205"></a>win1251_to_mic</p>
    </td>
    </tr>
    <tr id="row1762918188204"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1762901814204"><a name="p1762901814204"></a><a name="p1762901814204"></a>cidr_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1263012189209"><a name="p1263012189209"></a><a name="p1263012189209"></a>gtsvector_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13630131810203"><a name="p13630131810203"></a><a name="p13630131810203"></a>koi8r_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p126308189208"><a name="p126308189208"></a><a name="p126308189208"></a>mic_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2063012188205"><a name="p2063012188205"></a><a name="p2063012188205"></a>regtyperecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p263017185205"><a name="p263017185205"></a><a name="p263017185205"></a>utf8_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1863017186209"><a name="p1863017186209"></a><a name="p1863017186209"></a>win1251_to_win866</p>
    </td>
    </tr>
    <tr id="row26301318162013"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p263041816201"><a name="p263041816201"></a><a name="p263041816201"></a>cidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p56301318192017"><a name="p56301318192017"></a><a name="p56301318192017"></a>gtsvector_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p86301318152019"><a name="p86301318152019"></a><a name="p86301318152019"></a>koi8r_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p863071813207"><a name="p863071813207"></a><a name="p863071813207"></a>mic_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p463091842013"><a name="p463091842013"></a><a name="p463091842013"></a>reltimerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p10630101812018"><a name="p10630101812018"></a><a name="p10630101812018"></a>utf8_to_euc_kr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p9630101862014"><a name="p9630101862014"></a><a name="p9630101862014"></a>win866_to_iso</p>
    </td>
    </tr>
    <tr id="row5630181810209"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12630131872013"><a name="p12630131872013"></a><a name="p12630131872013"></a>circle_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16630618172016"><a name="p16630618172016"></a><a name="p16630618172016"></a>gtsvector_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p563081819207"><a name="p563081819207"></a><a name="p563081819207"></a>koi8r_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p56301618102010"><a name="p56301618102010"></a><a name="p56301618102010"></a>namerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1763081819203"><a name="p1763081819203"></a><a name="p1763081819203"></a>shift_jis_2004_to_euc_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1263010183209"><a name="p1263010183209"></a><a name="p1263010183209"></a>utf8_to_euc_tw</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p76301018102019"><a name="p76301018102019"></a><a name="p76301018102019"></a>win866_to_koi8r</p>
    </td>
    </tr>
    <tr id="row12630141822012"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p186300182209"><a name="p186300182209"></a><a name="p186300182209"></a>cstring_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p863018189206"><a name="p863018189206"></a><a name="p863018189206"></a>gtsvector_union</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p963041813209"><a name="p963041813209"></a><a name="p963041813209"></a>koi8u_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p196300188207"><a name="p196300188207"></a><a name="p196300188207"></a>ngram_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11630171812010"><a name="p11630171812010"></a><a name="p11630171812010"></a>shift_jis_2004_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p11630181816202"><a name="p11630181816202"></a><a name="p11630181816202"></a>utf8_to_gb18030</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p6630418172012"><a name="p6630418172012"></a><a name="p6630418172012"></a>win866_to_mic</p>
    </td>
    </tr>
    <tr id="row563081817207"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p763114184201"><a name="p763114184201"></a><a name="p763114184201"></a>date_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8631418142015"><a name="p8631418142015"></a><a name="p8631418142015"></a>hll_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1263141842019"><a name="p1263141842019"></a><a name="p1263141842019"></a>latin1_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4631718142017"><a name="p4631718142017"></a><a name="p4631718142017"></a>numeric_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19631418202011"><a name="p19631418202011"></a><a name="p19631418202011"></a>sjis_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p3631191817204"><a name="p3631191817204"></a><a name="p3631191817204"></a>utf8_to_gbk</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p156313185209"><a name="p156313185209"></a><a name="p156313185209"></a>win866_to_win1251</p>
    </td>
    </tr>
    <tr id="row15631101882017"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p163111822011"><a name="p163111822011"></a><a name="p163111822011"></a>domain_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8631151832019"><a name="p8631151832019"></a><a name="p8631151832019"></a>hll_trans_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17631141819200"><a name="p17631141819200"></a><a name="p17631141819200"></a>latin2_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p186312187202"><a name="p186312187202"></a><a name="p186312187202"></a>numeric_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3631118192016"><a name="p3631118192016"></a><a name="p3631118192016"></a>sjis_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p863171812020"><a name="p863171812020"></a><a name="p863171812020"></a>utf8_to_iso8859</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1963151813208"><a name="p1963151813208"></a><a name="p1963151813208"></a>xidrecv</p>
    </td>
    </tr>
    <tr id="row1663111892012"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p46315187204"><a name="p46315187204"></a><a name="p46315187204"></a>euc_cn_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6631111842016"><a name="p6631111842016"></a><a name="p6631111842016"></a>hstore_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p76311318112012"><a name="p76311318112012"></a><a name="p76311318112012"></a>latin2_to_win1250</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p26312018142018"><a name="p26312018142018"></a><a name="p26312018142018"></a>nvarchar2recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10631171813204"><a name="p10631171813204"></a><a name="p10631171813204"></a>sjis_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p11631181852017"><a name="p11631181852017"></a><a name="p11631181852017"></a>utf8_to_iso8859_1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1763120180208"><a name="p1763120180208"></a><a name="p1763120180208"></a>xidrecv4</p>
    </td>
    </tr>
    <tr id="row14631118192014"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p06312018142011"><a name="p06312018142011"></a><a name="p06312018142011"></a>euc_cn_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1163191815203"><a name="p1163191815203"></a><a name="p1163191815203"></a>inet_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1063119180207"><a name="p1063119180207"></a><a name="p1063119180207"></a>latin3_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p15631718132010"><a name="p15631718132010"></a><a name="p15631718132010"></a>oidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p116318183201"><a name="p116318183201"></a><a name="p116318183201"></a>smalldatetime_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p12632101882016"><a name="p12632101882016"></a><a name="p12632101882016"></a>utf8_to_johab</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p9632318122019"><a name="p9632318122019"></a><a name="p9632318122019"></a>xml_recv</p>
    </td>
    </tr>
    <tr id="row96321718202016"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p126328183207"><a name="p126328183207"></a><a name="p126328183207"></a>euc_jis_2004_to_shift_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17632151832019"><a name="p17632151832019"></a><a name="p17632151832019"></a>int1recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1263231819203"><a name="p1263231819203"></a><a name="p1263231819203"></a>latin4_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p463201810208"><a name="p463201810208"></a><a name="p463201810208"></a>oidvectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p563221812200"><a name="p563221812200"></a><a name="p563221812200"></a>textrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1763231822016"><a name="p1763231822016"></a><a name="p1763231822016"></a>utf8_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p169911550153418"><a name="p169911550153418"></a><a name="p169911550153418"></a>cstore_tid_out</p>
    </td>
    </tr>
    <tr id="row142703407317"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1380534612313"><a name="p1380534612313"></a><a name="p1380534612313"></a>i16toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1980515461833"><a name="p1980515461833"></a><a name="p1980515461833"></a>int16</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18054465319"><a name="p18054465319"></a><a name="p18054465319"></a>int16_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1427115401234"><a name="p1427115401234"></a><a name="p1427115401234"></a>int16eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p141417541836"><a name="p141417541836"></a><a name="p141417541836"></a>int16div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1595685711316"><a name="p1595685711316"></a><a name="p1595685711316"></a>int16ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p52757113415"><a name="p52757113415"></a><a name="p52757113415"></a>int16gt</p>
    </td>
    </tr>
    <tr id="row139321742047"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p99391911241"><a name="p99391911241"></a><a name="p99391911241"></a>int16in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p57591016545"><a name="p57591016545"></a><a name="p57591016545"></a>int16le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p387212212412"><a name="p387212212412"></a><a name="p387212212412"></a>int16lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p139289261449"><a name="p139289261449"></a><a name="p139289261449"></a>int16mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p143027305412"><a name="p143027305412"></a><a name="p143027305412"></a>int16mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p78813331248"><a name="p78813331248"></a><a name="p78813331248"></a>int16ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1755343715411"><a name="p1755343715411"></a><a name="p1755343715411"></a>int16out</p>
    </td>
    </tr>
    <tr id="row182731242542"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1243414469412"><a name="p1243414469412"></a><a name="p1243414469412"></a>int16pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17561950244"><a name="p17561950244"></a><a name="p17561950244"></a>int16recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1844085411413"><a name="p1844085411413"></a><a name="p1844085411413"></a>int16send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1727314211420"><a name="p1727314211420"></a><a name="p1727314211420"></a>numeric_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7273342448"><a name="p7273342448"></a><a name="p7273342448"></a>int2vectorin_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p22739425410"><a name="p22739425410"></a><a name="p22739425410"></a>int2vectorout_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p172731421248"><a name="p172731421248"></a><a name="p172731421248"></a>int2vectorrecv_extend</p>
    </td>
    </tr>
    <tr id="row2631824153418"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14631724133414"><a name="p14631724133414"></a><a name="p14631724133414"></a>int2vectorsend_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p64031816173612"><a name="p64031816173612"></a><a name="p64031816173612"></a>jsonb_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18562648103613"><a name="p18562648103613"></a><a name="p18562648103613"></a>jsonb_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p88037719379"><a name="p88037719379"></a><a name="p88037719379"></a>jsonb_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5140823153719"><a name="p5140823153719"></a><a name="p5140823153719"></a>jsonb_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p7932124811419"><a name="p7932124811419"></a><a name="p7932124811419"></a>complex_array_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1064182420348"><a name="p1064182420348"></a><a name="p1064182420348"></a>bool_int1</p>
    </td>
    </tr>
    <tr id="row13989614172815"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p179341316433"><a name="p179341316433"></a><a name="p179341316433"></a>bool_int2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18935916436"><a name="p18935916436"></a><a name="p18935916436"></a>bool_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1393516111435"><a name="p1393516111435"></a><a name="p1393516111435"></a>bpchar_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p493551184310"><a name="p493551184310"></a><a name="p493551184310"></a>bpchar_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p29354194319"><a name="p29354194319"></a><a name="p29354194319"></a>bpchar_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p0935121174310"><a name="p0935121174310"></a><a name="p0935121174310"></a>bpchar_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p5935161164315"><a name="p5935161164315"></a><a name="p5935161164315"></a>bpchar_numeric</p>
    </td>
    </tr>
    <tr id="row9865123415"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p88079262435"><a name="p88079262435"></a><a name="p88079262435"></a>bpchar_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1380782611439"><a name="p1380782611439"></a><a name="p1380782611439"></a>f4toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p780752684313"><a name="p780752684313"></a><a name="p780752684313"></a>f8toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p080732694318"><a name="p080732694318"></a><a name="p080732694318"></a>float4_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17807192611435"><a name="p17807192611435"></a><a name="p17807192611435"></a>float4_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p2807162644316"><a name="p2807162644316"></a><a name="p2807162644316"></a>float4_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1480752619431"><a name="p1480752619431"></a><a name="p1480752619431"></a>float8_bpchar</p>
    </td>
    </tr>
    <tr id="row19358932104311"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p69755064619"><a name="p69755064619"></a><a name="p69755064619"></a>float8_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p189751601462"><a name="p189751601462"></a><a name="p189751601462"></a>float8_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p897520094613"><a name="p897520094613"></a><a name="p897520094613"></a>i1tof4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1975170174617"><a name="p1975170174617"></a><a name="p1975170174617"></a>i1tof8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10975190184612"><a name="p10975190184612"></a><a name="p10975190184612"></a>i1toi2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p3975110124617"><a name="p3975110124617"></a><a name="p3975110124617"></a>i1toi4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p59751305467"><a name="p59751305467"></a><a name="p59751305467"></a>i1toi8</p>
    </td>
    </tr>
    <tr id="row172531747134516"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p178232074463"><a name="p178232074463"></a><a name="p178232074463"></a>i2toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p168233754613"><a name="p168233754613"></a><a name="p168233754613"></a>i4toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p48233712469"><a name="p48233712469"></a><a name="p48233712469"></a>i8toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1982320754619"><a name="p1982320754619"></a><a name="p1982320754619"></a>int1_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18230714618"><a name="p18230714618"></a><a name="p18230714618"></a>int1_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p0823578468"><a name="p0823578468"></a><a name="p0823578468"></a>int1_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p19823157154612"><a name="p19823157154612"></a><a name="p19823157154612"></a>int1_numeric</p>
    </td>
    </tr>
    <tr id="row202622037194317"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p073917511474"><a name="p073917511474"></a><a name="p073917511474"></a>int1_nvarchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p167396518473"><a name="p167396518473"></a><a name="p167396518473"></a>int1_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17395594715"><a name="p17395594715"></a><a name="p17395594715"></a>int1_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7739651475"><a name="p7739651475"></a><a name="p7739651475"></a>int1abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1473995154715"><a name="p1473995154715"></a><a name="p1473995154715"></a>int1and</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p197391159474"><a name="p197391159474"></a><a name="p197391159474"></a>int1cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p473955174711"><a name="p473955174711"></a><a name="p473955174711"></a>int1div</p>
    </td>
    </tr>
    <tr id="row11893131784613"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1273915164713"><a name="p1273915164713"></a><a name="p1273915164713"></a>int1eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1473965194710"><a name="p1473965194710"></a><a name="p1473965194710"></a>int1ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p87401656473"><a name="p87401656473"></a><a name="p87401656473"></a>int1gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p117401059474"><a name="p117401059474"></a><a name="p117401059474"></a>int1in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p47408510470"><a name="p47408510470"></a><a name="p47408510470"></a>int1inc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p6740145174712"><a name="p6740145174712"></a><a name="p6740145174712"></a>int1larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p3740115164715"><a name="p3740115164715"></a><a name="p3740115164715"></a>int1le</p>
    </td>
    </tr>
    <tr id="row149669213462"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p37405513472"><a name="p37405513472"></a><a name="p37405513472"></a>int1lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4740185164719"><a name="p4740185164719"></a><a name="p4740185164719"></a>int1mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1374014510479"><a name="p1374014510479"></a><a name="p1374014510479"></a>int1mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p117408518475"><a name="p117408518475"></a><a name="p117408518475"></a>int1mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17403574716"><a name="p17403574716"></a><a name="p17403574716"></a>int1ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p137402544717"><a name="p137402544717"></a><a name="p137402544717"></a>int1not</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p774045174720"><a name="p774045174720"></a><a name="p774045174720"></a>int1or</p>
    </td>
    </tr>
    <tr id="row1625264311455"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1174020516479"><a name="p1174020516479"></a><a name="p1174020516479"></a>int1out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1174111554714"><a name="p1174111554714"></a><a name="p1174111554714"></a>int1pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1474125144715"><a name="p1474125144715"></a><a name="p1474125144715"></a>int1shl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p157419514471"><a name="p157419514471"></a><a name="p157419514471"></a>int1shr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1074114544710"><a name="p1074114544710"></a><a name="p1074114544710"></a>int1smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p17414513475"><a name="p17414513475"></a><a name="p17414513475"></a>int1um</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p47415520479"><a name="p47415520479"></a><a name="p47415520479"></a>int1up</p>
    </td>
    </tr>
    <tr id="row1442144517462"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p974117519477"><a name="p974117519477"></a><a name="p974117519477"></a>int1xor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p77413517476"><a name="p77413517476"></a><a name="p77413517476"></a>int2_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13741153479"><a name="p13741153479"></a><a name="p13741153479"></a>int2_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1374215511474"><a name="p1374215511474"></a><a name="p1374215511474"></a>int2_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p474212518475"><a name="p474212518475"></a><a name="p474212518475"></a>int2_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p147428514717"><a name="p147428514717"></a><a name="p147428514717"></a>int4_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1774216524719"><a name="p1774216524719"></a><a name="p1774216524719"></a>int4_text</p>
    </td>
    </tr>
    <tr id="row24381745184618"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p27421156475"><a name="p27421156475"></a><a name="p27421156475"></a>int4_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p147425517473"><a name="p147425517473"></a><a name="p147425517473"></a>int8_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p474210554710"><a name="p474210554710"></a><a name="p474210554710"></a>int8_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p107421858473"><a name="p107421858473"></a><a name="p107421858473"></a>int8_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2074285184713"><a name="p2074285184713"></a><a name="p2074285184713"></a>int8_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1074295174710"><a name="p1074295174710"></a><a name="p1074295174710"></a>job_submit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p6742550471"><a name="p6742550471"></a><a name="p6742550471"></a>numeric_bpchar</p>
    </td>
    </tr>
    <tr id="row17432154504611"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p174216584712"><a name="p174216584712"></a><a name="p174216584712"></a>numeric_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9742257474"><a name="p9742257474"></a><a name="p9742257474"></a>numeric_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14742456472"><a name="p14742456472"></a><a name="p14742456472"></a>numeric_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p207421515472"><a name="p207421515472"></a><a name="p207421515472"></a>nvarchar2in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1774317513475"><a name="p1774317513475"></a><a name="p1774317513475"></a>nvarchar2out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p8743155134711"><a name="p8743155134711"></a><a name="p8743155134711"></a>nvarchar2send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p6743556472"><a name="p6743556472"></a><a name="p6743556472"></a>oidvectorin_extend</p>
    </td>
    </tr>
    <tr id="row10427164574619"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16743552471"><a name="p16743552471"></a><a name="p16743552471"></a>oidvectorout_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7743155184712"><a name="p7743155184712"></a><a name="p7743155184712"></a>oidvectorsend_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p147432554715"><a name="p147432554715"></a><a name="p147432554715"></a>rawcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12743852477"><a name="p12743852477"></a><a name="p12743852477"></a>raweq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p474320564714"><a name="p474320564714"></a><a name="p474320564714"></a>rawge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p2743851478"><a name="p2743851478"></a><a name="p2743851478"></a>rawgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p147431150473"><a name="p147431150473"></a><a name="p147431150473"></a>rawin</p>
    </td>
    </tr>
    <tr id="row1940465519464"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10743205164718"><a name="p10743205164718"></a><a name="p10743205164718"></a>rawle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p174310554713"><a name="p174310554713"></a><a name="p174310554713"></a>rawlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p147431516474"><a name="p147431516474"></a><a name="p147431516474"></a>rawlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20743115134717"><a name="p20743115134717"></a><a name="p20743115134717"></a>rawne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p167431957479"><a name="p167431957479"></a><a name="p167431957479"></a>rawnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p107433514473"><a name="p107433514473"></a><a name="p107433514473"></a>rawout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p07430516471"><a name="p07430516471"></a><a name="p07430516471"></a>rawsend</p>
    </td>
    </tr>
    <tr id="row439816551469"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1874319544718"><a name="p1874319544718"></a><a name="p1874319544718"></a>text_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1574365184714"><a name="p1574365184714"></a><a name="p1574365184714"></a>text_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p197435519476"><a name="p197435519476"></a><a name="p197435519476"></a>text_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p197431554477"><a name="p197431554477"></a><a name="p197431554477"></a>text_int2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17744252471"><a name="p17744252471"></a><a name="p17744252471"></a>text_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p1874410514476"><a name="p1874410514476"></a><a name="p1874410514476"></a>text_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p274416514710"><a name="p274416514710"></a><a name="p274416514710"></a>text_numeric</p>
    </td>
    </tr>
    <tr id="row16394655134613"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1674413510473"><a name="p1674413510473"></a><a name="p1674413510473"></a>timestamp_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1574418518477"><a name="p1574418518477"></a><a name="p1574418518477"></a>timestamp_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1474455114711"><a name="p1474455114711"></a><a name="p1474455114711"></a>varchar_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1974485174715"><a name="p1974485174715"></a><a name="p1974485174715"></a>varchar_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p117441157475"><a name="p117441157475"></a><a name="p117441157475"></a>varchar_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p14744155154712"><a name="p14744155154712"></a><a name="p14744155154712"></a>varchar_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p1574417594710"><a name="p1574417594710"></a><a name="p1574417594710"></a>varchar_numeric</p>
    </td>
    </tr>
    <tr id="row138945514620"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11744125134716"><a name="p11744125134716"></a><a name="p11744125134716"></a>xidout4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1374415174711"><a name="p1374415174711"></a><a name="p1374415174711"></a>xidsend4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1474519519477"><a name="p1474519519477"></a><a name="p1474519519477"></a>calculate_quantile_of</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p187451455473"><a name="p187451455473"></a><a name="p187451455473"></a>calculate_value_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p137451653473"><a name="p137451653473"></a><a name="p137451653473"></a>large_seq_rollback_ntree</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.175747275817258%"><p id="p127452514718"><a name="p127452514718"></a><a name="p127452514718"></a>large_seq_upgrade_ntree</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.395681295611315%"><p id="p6745185114719"><a name="p6745185114719"></a><a name="p6745185114719"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions for aggregation operations

    <a name="table4674153612160"></a>
    <table><tbody><tr id="row10712173619162"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p57122367165"><a name="p57122367165"></a><a name="p57122367165"></a>array_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17128362162"><a name="p17128362162"></a><a name="p17128362162"></a>array_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17127363162"><a name="p17127363162"></a><a name="p17127363162"></a>bytea_string_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p1871223691612"><a name="p1871223691612"></a><a name="p1871223691612"></a>bytea_string_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p16712136141611"><a name="p16712136141611"></a><a name="p16712136141611"></a>date_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3712123631611"><a name="p3712123631611"></a><a name="p3712123631611"></a>date_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p147121836131615"><a name="p147121836131615"></a><a name="p147121836131615"></a>float4_list_agg_noarg2_transfn</p>
    </td>
    </tr>
    <tr id="row1271283671614"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p147123366162"><a name="p147123366162"></a><a name="p147123366162"></a>float4_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13712153612163"><a name="p13712153612163"></a><a name="p13712153612163"></a>float8_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1771217363167"><a name="p1771217363167"></a><a name="p1771217363167"></a>float8_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p20712436181618"><a name="p20712436181618"></a><a name="p20712436181618"></a>int2_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p6712836121610"><a name="p6712836121610"></a><a name="p6712836121610"></a>int2_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p171223671610"><a name="p171223671610"></a><a name="p171223671610"></a>int4_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1671213691612"><a name="p1671213691612"></a><a name="p1671213691612"></a>int4_list_agg_transfn</p>
    </td>
    </tr>
    <tr id="row11712936141619"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2071293661610"><a name="p2071293661610"></a><a name="p2071293661610"></a>int8_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2712113641612"><a name="p2712113641612"></a><a name="p2712113641612"></a>int8_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p87128362165"><a name="p87128362165"></a><a name="p87128362165"></a>interval_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p117129369168"><a name="p117129369168"></a><a name="p117129369168"></a>interval_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p971263611164"><a name="p971263611164"></a><a name="p971263611164"></a>list_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p137126364167"><a name="p137126364167"></a><a name="p137126364167"></a>list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20712336141614"><a name="p20712336141614"></a><a name="p20712336141614"></a>list_agg_transfn</p>
    </td>
    </tr>
    <tr id="row871393613164"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p87131236171611"><a name="p87131236171611"></a><a name="p87131236171611"></a>median_float8_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1771323611617"><a name="p1771323611617"></a><a name="p1771323611617"></a>median_interval_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p167131736111613"><a name="p167131736111613"></a><a name="p167131736111613"></a>median_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p2713036161610"><a name="p2713036161610"></a><a name="p2713036161610"></a>mode_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p57138365164"><a name="p57138365164"></a><a name="p57138365164"></a>numeric_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7713153611616"><a name="p7713153611616"></a><a name="p7713153611616"></a>numeric_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19713133651620"><a name="p19713133651620"></a><a name="p19713133651620"></a>ordered_set_transition</p>
    </td>
    </tr>
    <tr id="row9713336131613"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1271313631618"><a name="p1271313631618"></a><a name="p1271313631618"></a>percentile_cont_float8_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1971313671620"><a name="p1971313671620"></a><a name="p1971313671620"></a>percentile_cont_interval_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16713143619165"><a name="p16713143619165"></a><a name="p16713143619165"></a>string_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p9713143613163"><a name="p9713143613163"></a><a name="p9713143613163"></a>string_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p271373613168"><a name="p271373613168"></a><a name="p271373613168"></a>timestamp_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3713123620164"><a name="p3713123620164"></a><a name="p3713123620164"></a>timestamp_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2071323614167"><a name="p2071323614167"></a><a name="p2071323614167"></a>timestamptz_list_agg_noarg2_transfn</p>
    </td>
    </tr>
    <tr id="row5175942143517"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2713133631610"><a name="p2713133631610"></a><a name="p2713133631610"></a>timestamptz_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7175104263512"><a name="p7175104263512"></a><a name="p7175104263512"></a>checksumtext_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p717574223519"><a name="p717574223519"></a><a name="p717574223519"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p2175134212351"><a name="p2175134212351"></a><a name="p2175134212351"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p18175194220352"><a name="p18175194220352"></a><a name="p18175194220352"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10175174273517"><a name="p10175174273517"></a><a name="p10175174273517"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p917694273513"><a name="p917694273513"></a><a name="p917694273513"></a>-</p>
    </td>
    </tr>
    <tr id="row1878781851415"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1062912671419"><a name="p1062912671419"></a><a name="p1062912671419"></a>json_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13629192601417"><a name="p13629192601417"></a><a name="p13629192601417"></a>json_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1562912612143"><a name="p1562912612143"></a><a name="p1562912612143"></a>json_object_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p1162992617142"><a name="p1162992617142"></a><a name="p1162992617142"></a>json_object_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p384434210145"><a name="p384434210145"></a><a name="p384434210145"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1184410427146"><a name="p1184410427146"></a><a name="p1184410427146"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6845542101418"><a name="p6845542101418"></a><a name="p6845542101418"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Hash internal functions

    <a name="table5272838141511"></a>
    <table><tbody><tr id="row73024388152"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18302183820158"><a name="p18302183820158"></a><a name="p18302183820158"></a>hashbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p103021738181514"><a name="p103021738181514"></a><a name="p103021738181514"></a>hashbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13031438171516"><a name="p13031438171516"></a><a name="p13031438171516"></a>hashbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1303338131513"><a name="p1303338131513"></a><a name="p1303338131513"></a>hashbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1130393891517"><a name="p1130393891517"></a><a name="p1130393891517"></a>hashcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1430316387158"><a name="p1430316387158"></a><a name="p1430316387158"></a>hashendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p153033384154"><a name="p153033384154"></a><a name="p153033384154"></a>hashgetbitmap</p>
    </td>
    </tr>
    <tr id="row0303193815157"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p15303173861514"><a name="p15303173861514"></a><a name="p15303173861514"></a>hashgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1830313387157"><a name="p1830313387157"></a><a name="p1830313387157"></a>hashinsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p123038384152"><a name="p123038384152"></a><a name="p123038384152"></a>hashmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p330373811158"><a name="p330373811158"></a><a name="p330373811158"></a>hashmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p330303841512"><a name="p330303841512"></a><a name="p330303841512"></a>hashrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p143033380159"><a name="p143033380159"></a><a name="p143033380159"></a>hashrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p130323811159"><a name="p130323811159"></a><a name="p130323811159"></a>hashvacuumcleanup</p>
    </td>
    </tr>
    <tr id="row5303133818156"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2303203812156"><a name="p2303203812156"></a><a name="p2303203812156"></a>hashvarlena</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1892615222363"><a name="p1892615222363"></a><a name="p1892615222363"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p0303193811511"><a name="p0303193811511"></a><a name="p0303193811511"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1730314381156"><a name="p1730314381156"></a><a name="p1730314381156"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p33031538141514"><a name="p33031538141514"></a><a name="p33031538141514"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p193033384157"><a name="p193033384157"></a><a name="p193033384157"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p630319380157"><a name="p630319380157"></a><a name="p630319380157"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions of the B-tree index

    <a name="table187033011814"></a>
    <table><tbody><tr id="row37359011188"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p07356041813"><a name="p07356041813"></a><a name="p07356041813"></a>cbtreebuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6735180171810"><a name="p6735180171810"></a><a name="p6735180171810"></a>cbtreecanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p57357091817"><a name="p57357091817"></a><a name="p57357091817"></a>cbtreecostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p167359014181"><a name="p167359014181"></a><a name="p167359014181"></a>cbtreegetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1473515012187"><a name="p1473515012187"></a><a name="p1473515012187"></a>cbtreegettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p873500141815"><a name="p873500141815"></a><a name="p873500141815"></a>btbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p27357017186"><a name="p27357017186"></a><a name="p27357017186"></a>btbuild</p>
    </td>
    </tr>
    <tr id="row2735120141814"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9735120171815"><a name="p9735120171815"></a><a name="p9735120171815"></a>btbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p0735804181"><a name="p0735804181"></a><a name="p0735804181"></a>btbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p167353020189"><a name="p167353020189"></a><a name="p167353020189"></a>btcanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p1873520031813"><a name="p1873520031813"></a><a name="p1873520031813"></a>btcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p37351402188"><a name="p37351402188"></a><a name="p37351402188"></a>btendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1973518051810"><a name="p1973518051810"></a><a name="p1973518051810"></a>btfloat4sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p157351900185"><a name="p157351900185"></a><a name="p157351900185"></a>btfloat8sortsupport</p>
    </td>
    </tr>
    <tr id="row10735809189"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p673517010187"><a name="p673517010187"></a><a name="p673517010187"></a>btgetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4735903184"><a name="p4735903184"></a><a name="p4735903184"></a>btgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p673510011812"><a name="p673510011812"></a><a name="p673510011812"></a>btinsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p6735130111811"><a name="p6735130111811"></a><a name="p6735130111811"></a>btint2sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1673514021816"><a name="p1673514021816"></a><a name="p1673514021816"></a>btint4sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1573517091818"><a name="p1573517091818"></a><a name="p1573517091818"></a>btint8sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1873500161811"><a name="p1873500161811"></a><a name="p1873500161811"></a>btmarkpos</p>
    </td>
    </tr>
    <tr id="row373512061820"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p167353018184"><a name="p167353018184"></a><a name="p167353018184"></a>btmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p973513091813"><a name="p973513091813"></a><a name="p973513091813"></a>btnamesortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.265720283914826%"><p id="p67351509184"><a name="p67351509184"></a><a name="p67351509184"></a>btrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.305708287513747%"><p id="p13735200141816"><a name="p13735200141816"></a><a name="p13735200141816"></a>btrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p37361404182"><a name="p37361404182"></a><a name="p37361404182"></a>bttextsortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1573618051817"><a name="p1573618051817"></a><a name="p1573618051817"></a>btvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p24872396363"><a name="p24872396363"></a><a name="p24872396363"></a>cbtreeoptions</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions of the GiST index

    <a name="table1512332911135"></a>
    <table><tbody><tr id="row1919512295132"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9195122941314"><a name="p9195122941314"></a><a name="p9195122941314"></a>gist_box_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p519512971318"><a name="p519512971318"></a><a name="p519512971318"></a>gist_box_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3195152917139"><a name="p3195152917139"></a><a name="p3195152917139"></a>gist_box_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17195112941310"><a name="p17195112941310"></a><a name="p17195112941310"></a>gist_box_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17195152920137"><a name="p17195152920137"></a><a name="p17195152920137"></a>gist_box_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1119582915136"><a name="p1119582915136"></a><a name="p1119582915136"></a>gist_box_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p91959298136"><a name="p91959298136"></a><a name="p91959298136"></a>gist_box_union</p>
    </td>
    </tr>
    <tr id="row519516298133"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p519532913132"><a name="p519532913132"></a><a name="p519532913132"></a>gist_circle_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p18195429131316"><a name="p18195429131316"></a><a name="p18195429131316"></a>gist_circle_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1019582910131"><a name="p1019582910131"></a><a name="p1019582910131"></a>gist_point_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p21953292136"><a name="p21953292136"></a><a name="p21953292136"></a>gist_point_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1719532917130"><a name="p1719532917130"></a><a name="p1719532917130"></a>gist_point_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2019522920139"><a name="p2019522920139"></a><a name="p2019522920139"></a>gist_poly_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1119511295132"><a name="p1119511295132"></a><a name="p1119511295132"></a>gist_poly_consistent</p>
    </td>
    </tr>
    <tr id="row17195192911138"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p619592919137"><a name="p619592919137"></a><a name="p619592919137"></a>gistbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p141951529201317"><a name="p141951529201317"></a><a name="p141951529201317"></a>gistbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p191952298133"><a name="p191952298133"></a><a name="p191952298133"></a>gistbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12195142912135"><a name="p12195142912135"></a><a name="p12195142912135"></a>gistbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11951629131314"><a name="p11951629131314"></a><a name="p11951629131314"></a>gistcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p51959294132"><a name="p51959294132"></a><a name="p51959294132"></a>gistendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14195129171318"><a name="p14195129171318"></a><a name="p14195129171318"></a>gistgetbitmap</p>
    </td>
    </tr>
    <tr id="row19195829101318"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17196329101310"><a name="p17196329101310"></a><a name="p17196329101310"></a>gistinsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p141961529161314"><a name="p141961529161314"></a><a name="p141961529161314"></a>gistmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p219615293136"><a name="p219615293136"></a><a name="p219615293136"></a>gistmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1019662981313"><a name="p1019662981313"></a><a name="p1019662981313"></a>gistrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8196132916138"><a name="p8196132916138"></a><a name="p8196132916138"></a>gistrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p219617298133"><a name="p219617298133"></a><a name="p219617298133"></a>gistvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p101961629141316"><a name="p101961629141316"></a><a name="p101961629141316"></a>range_gist_compress</p>
    </td>
    </tr>
    <tr id="row3196929191319"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p151961529191315"><a name="p151961529191315"></a><a name="p151961529191315"></a>range_gist_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p61966299135"><a name="p61966299135"></a><a name="p61966299135"></a>range_gist_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1196182919137"><a name="p1196182919137"></a><a name="p1196182919137"></a>range_gist_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1019642912138"><a name="p1019642912138"></a><a name="p1019642912138"></a>range_gist_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p101961329111318"><a name="p101961329111318"></a><a name="p101961329111318"></a>range_gist_union</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p81961829201319"><a name="p81961829201319"></a><a name="p81961829201319"></a>spg_kd_choose</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p619610291138"><a name="p619610291138"></a><a name="p619610291138"></a>spg_kd_config</p>
    </td>
    </tr>
    <tr id="row101961729131318"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20196122912131"><a name="p20196122912131"></a><a name="p20196122912131"></a>spg_kd_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p219610291138"><a name="p219610291138"></a><a name="p219610291138"></a>spg_quad_choose</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p919662911137"><a name="p919662911137"></a><a name="p919662911137"></a>spg_quad_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p131968293138"><a name="p131968293138"></a><a name="p131968293138"></a>spg_quad_inner_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20196152921318"><a name="p20196152921318"></a><a name="p20196152921318"></a>spg_quad_leaf_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p519672981312"><a name="p519672981312"></a><a name="p519672981312"></a>spg_quad_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p619615294138"><a name="p619615294138"></a><a name="p619615294138"></a>spg_text_choose</p>
    </td>
    </tr>
    <tr id="row5196152911136"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1119618294130"><a name="p1119618294130"></a><a name="p1119618294130"></a>spg_text_inner_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p419632919132"><a name="p419632919132"></a><a name="p419632919132"></a>spg_text_leaf_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p419602911319"><a name="p419602911319"></a><a name="p419602911319"></a>spg_text_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1719620294138"><a name="p1719620294138"></a><a name="p1719620294138"></a>spgbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p01962296137"><a name="p01962296137"></a><a name="p01962296137"></a>spgbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11967298139"><a name="p11967298139"></a><a name="p11967298139"></a>spgbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p5196162951316"><a name="p5196162951316"></a><a name="p5196162951316"></a>spgbulkdelete</p>
    </td>
    </tr>
    <tr id="row191973297135"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19197192951315"><a name="p19197192951315"></a><a name="p19197192951315"></a>spgcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p181971729101316"><a name="p181971729101316"></a><a name="p181971729101316"></a>spgendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p619752991315"><a name="p619752991315"></a><a name="p619752991315"></a>spggetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12197172951313"><a name="p12197172951313"></a><a name="p12197172951313"></a>spggettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p131978293134"><a name="p131978293134"></a><a name="p131978293134"></a>spginsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1519752941320"><a name="p1519752941320"></a><a name="p1519752941320"></a>spgmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17197112911318"><a name="p17197112911318"></a><a name="p17197112911318"></a>spgmerge</p>
    </td>
    </tr>
    <tr id="row171971295139"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8197132931314"><a name="p8197132931314"></a><a name="p8197132931314"></a>spgrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p181975293138"><a name="p181975293138"></a><a name="p181975293138"></a>spgvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p139017534362"><a name="p139017534362"></a><a name="p139017534362"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p151971429191313"><a name="p151971429191313"></a><a name="p151971429191313"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1519712296134"><a name="p1519712296134"></a><a name="p1519712296134"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12197929141312"><a name="p12197929141312"></a><a name="p12197929141312"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19197102912131"><a name="p19197102912131"></a><a name="p19197102912131"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions of the GIN index

    <a name="table830903917233"></a>
    <table><tbody><tr id="row12357183918239"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1135718392237"><a name="p1135718392237"></a><a name="p1135718392237"></a>gin_cmp_prefix</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2357639162311"><a name="p2357639162311"></a><a name="p2357639162311"></a>gin_extract_tsquery</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p4357183972312"><a name="p4357183972312"></a><a name="p4357183972312"></a>gin_tsquery_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8357239142312"><a name="p8357239142312"></a><a name="p8357239142312"></a>gin_tsquery_triconsistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1235713398236"><a name="p1235713398236"></a><a name="p1235713398236"></a>ginarrayconsistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12357939142312"><a name="p12357939142312"></a><a name="p12357939142312"></a>ginarrayextract</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1135712393237"><a name="p1135712393237"></a><a name="p1135712393237"></a>ginarraytriconsistent</p>
    </td>
    </tr>
    <tr id="row9357639132317"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3357153962315"><a name="p3357153962315"></a><a name="p3357153962315"></a>ginbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p173573394239"><a name="p173573394239"></a><a name="p173573394239"></a>ginbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13357193914236"><a name="p13357193914236"></a><a name="p13357193914236"></a>ginbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8357139182318"><a name="p8357139182318"></a><a name="p8357139182318"></a>ginbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p835710396238"><a name="p835710396238"></a><a name="p835710396238"></a>gincostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p735713913234"><a name="p735713913234"></a><a name="p735713913234"></a>ginendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1035783922312"><a name="p1035783922312"></a><a name="p1035783922312"></a>gingetbitmap</p>
    </td>
    </tr>
    <tr id="row183578390232"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p43571639172317"><a name="p43571639172317"></a><a name="p43571639172317"></a>gininsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p113571439142314"><a name="p113571439142314"></a><a name="p113571439142314"></a>ginmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p7357143911232"><a name="p7357143911232"></a><a name="p7357143911232"></a>ginmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p935711391236"><a name="p935711391236"></a><a name="p935711391236"></a>ginqueryarrayextract</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1635763942314"><a name="p1635763942314"></a><a name="p1635763942314"></a>ginrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p193571039162315"><a name="p193571039162315"></a><a name="p193571039162315"></a>ginrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p163576399232"><a name="p163576399232"></a><a name="p163576399232"></a>ginvacuumcleanup</p>
    </td>
    </tr>
    <tr id="row735718396231"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p735820396237"><a name="p735820396237"></a><a name="p735820396237"></a>cginbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p133581397239"><a name="p133581397239"></a><a name="p133581397239"></a>cgingetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p462220583710"><a name="p462220583710"></a><a name="p462220583710"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13358139112315"><a name="p13358139112315"></a><a name="p13358139112315"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p73586398239"><a name="p73586398239"></a><a name="p73586398239"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p835863910232"><a name="p835863910232"></a><a name="p835863910232"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p235843932317"><a name="p235843932317"></a><a name="p235843932317"></a>-</p>
    </td>
    </tr>
    <tr id="row616117751518"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p73274247155"><a name="p73274247155"></a><a name="p73274247155"></a>gin_compare_jsonb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13327152431518"><a name="p13327152431518"></a><a name="p13327152431518"></a>gin_consistent_jsonb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14327152412158"><a name="p14327152412158"></a><a name="p14327152412158"></a>gin_consistent_jsonb_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p73284247159"><a name="p73284247159"></a><a name="p73284247159"></a>gin_extract_jsonb</p>
    <p id="p4328152413151"><a name="p4328152413151"></a><a name="p4328152413151"></a>gin_extract_jsonb_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3702112819157"><a name="p3702112819157"></a><a name="p3702112819157"></a>cginbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8703182871515"><a name="p8703182871515"></a><a name="p8703182871515"></a>gin_extract_jsonb_query</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13703192819152"><a name="p13703192819152"></a><a name="p13703192819152"></a>gin_triconsistent_jsonb</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions of the Psort index

    <a name="table462835441413"></a>
    <table><tbody><tr id="row8645125412142"><td class="cellrowborder" valign="top" width="20%"><p id="p46451254171418"><a name="p46451254171418"></a><a name="p46451254171418"></a>psortbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p664575420147"><a name="p664575420147"></a><a name="p664575420147"></a>psortcanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p964520548142"><a name="p964520548142"></a><a name="p964520548142"></a>psortcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p564565417146"><a name="p564565417146"></a><a name="p564565417146"></a>psortgetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p46451254181419"><a name="p46451254181419"></a><a name="p46451254181419"></a>psortgettuple</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Internal functions of the UBTree index

    <a name="table14674199151417"></a>
    <table><tbody><tr id="row156749916148"><td class="cellrowborder" valign="top" width="20%"><p id="p66741894149"><a name="p66741894149"></a><a name="p66741894149"></a>ubtbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p56742911143"><a name="p56742911143"></a><a name="p56742911143"></a>ubtbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p9674499142"><a name="p9674499142"></a><a name="p9674499142"></a>ubtbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p106741698143"><a name="p106741698143"></a><a name="p106741698143"></a>ubtbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p567413941419"><a name="p567413941419"></a><a name="p567413941419"></a>ubtcanreturn</p>
    </td>
    </tr>
    <tr id="row1866416550156"><td class="cellrowborder" valign="top" width="20%"><p id="p16641355171516"><a name="p16641355171516"></a><a name="p16641355171516"></a>ubtcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p1166413559150"><a name="p1166413559150"></a><a name="p1166413559150"></a>ubtendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p3664655121514"><a name="p3664655121514"></a><a name="p3664655121514"></a>ubtgetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p10664195510151"><a name="p10664195510151"></a><a name="p10664195510151"></a>ubtgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p1166420551153"><a name="p1166420551153"></a><a name="p1166420551153"></a>ubtinsert</p>
    </td>
    </tr>
    <tr id="row2043854471617"><td class="cellrowborder" valign="top" width="20%"><p id="p9439144416168"><a name="p9439144416168"></a><a name="p9439144416168"></a>ubtmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p1943964471617"><a name="p1943964471617"></a><a name="p1943964471617"></a>ubtmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p1143914417166"><a name="p1143914417166"></a><a name="p1143914417166"></a>ubtoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p19439744171615"><a name="p19439744171615"></a><a name="p19439744171615"></a>ubtrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p10439204401611"><a name="p10439204401611"></a><a name="p10439204401611"></a>ubtrestrpos</p>
    </td>
    </tr>
    <tr id="row53741437171718"><td class="cellrowborder" valign="top" width="20%"><p id="p5375183717173"><a name="p5375183717173"></a><a name="p5375183717173"></a>ubtvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p737513731717"><a name="p737513731717"></a><a name="p737513731717"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p137583761710"><a name="p137583761710"></a><a name="p137583761710"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p937543761719"><a name="p937543761719"></a><a name="p937543761719"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="20%"><p id="p18375113720177"><a name="p18375113720177"></a><a name="p18375113720177"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   plpgsql internal function

    plpgsql\_inline\_handler

-   Set-related internal functions

    <a name="table862970155517"></a>
    <table><tbody><tr id="row186304015511"><td class="cellrowborder" valign="top" width="17.41%"><p id="p789412378560"><a name="p789412378560"></a><a name="p789412378560"></a>array_indexby_delete</p>
    </td>
    <td class="cellrowborder" valign="top" width="17%"><p id="p035613965613"><a name="p035613965613"></a><a name="p035613965613"></a>array_indexby_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="18.58%"><p id="p1463011095514"><a name="p1463011095514"></a><a name="p1463011095514"></a>array_integer_deleteidx</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.37%"><p id="p56301601552"><a name="p56301601552"></a><a name="p56301601552"></a>array_integer_exists</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.709999999999999%"><p id="p55859442563"><a name="p55859442563"></a><a name="p55859442563"></a>array_integer_first</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.93%"><p id="p109111246185614"><a name="p109111246185614"></a><a name="p109111246185614"></a>array_integer_last</p>
    </td>
    </tr>
    <tr id="row8313645135817"><td class="cellrowborder" valign="top" width="17.41%"><p id="p183139455585"><a name="p183139455585"></a><a name="p183139455585"></a>array_integer_next</p>
    </td>
    <td class="cellrowborder" valign="top" width="17%"><p id="p231384545811"><a name="p231384545811"></a><a name="p231384545811"></a>array_integer_prior</p>
    </td>
    <td class="cellrowborder" valign="top" width="18.58%"><p id="p1831314517585"><a name="p1831314517585"></a><a name="p1831314517585"></a>array_varchar_deleteidx</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.37%"><p id="p113131945175811"><a name="p113131945175811"></a><a name="p113131945175811"></a>array_varchar_exists</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.709999999999999%"><p id="p83141545195815"><a name="p83141545195815"></a><a name="p83141545195815"></a>array_varchar_first</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.93%"><p id="p203149459584"><a name="p203149459584"></a><a name="p203149459584"></a>array_varchar_last</p>
    </td>
    </tr>
    <tr id="row1329263912213"><td class="cellrowborder" valign="top" width="17.41%"><p id="p1729293917219"><a name="p1729293917219"></a><a name="p1729293917219"></a>array_varchar_next</p>
    </td>
    <td class="cellrowborder" valign="top" width="17%"><p id="p82921239723"><a name="p82921239723"></a><a name="p82921239723"></a>array_varchar_prior</p>
    </td>
    <td class="cellrowborder" valign="top" width="18.58%"><p id="p82926395212"><a name="p82926395212"></a><a name="p82926395212"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.37%"><p id="p329219391422"><a name="p329219391422"></a><a name="p329219391422"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.709999999999999%"><p id="p1329213398213"><a name="p1329213398213"></a><a name="p1329213398213"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.93%"><p id="p172926391429"><a name="p172926391429"></a><a name="p172926391429"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   External table-related internal functions

    <a name="table132232029113011"></a>
    <table><tbody><tr id="row11252729183014"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17252029193012"><a name="p17252029193012"></a><a name="p17252029193012"></a>dist_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p13253129183015"><a name="p13253129183015"></a><a name="p13253129183015"></a>roach_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12253142913309"><a name="p12253142913309"></a><a name="p12253142913309"></a>streaming_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p16253142918300"><a name="p16253142918300"></a><a name="p16253142918300"></a>dist_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p225316293308"><a name="p225316293308"></a><a name="p225316293308"></a>file_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p925332915309"><a name="p925332915309"></a><a name="p925332915309"></a>file_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1625372914301"><a name="p1625372914301"></a><a name="p1625372914301"></a>log_fdw_handler</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Auxiliary function for the primary  database node  to remotely read the data page from the standby  database node.

    **gs\_read\_block\_from\_remote**  is used to read the pages of a non-segment-page table file. By default, only the initial user can view the data. Other users can use the data only after being granted with permissions.

    **pg\_read\_binary\_file\_blocks** is used to read data. Non-compressed tables return actual data, and compressed tables return compressed data. By default, only the initial user can view the data. Other users can use the data only after being granted with permissions.


    **gs\_read\_segment\_block\_from\_remote**  is used to read the pages of a segment-page table file. By default, only the initial user can view the data. Other users can use the data only after being granted with permissions.

-   Auxiliary function for the primary  database node  to remotely read the data file from the standby  database node.

    The  **gs\_read\_file\_from\_remote**  command is used to read a specified file. After obtaining the file size using the  **gs\_read\_file\_size\_from\_remote**  function,  **gs\_repair\_file**  reads the remote file segment by segment using this function. By default, only the initial user can view the data. Other users can use the data only after being granted with permissions.

    The  **gs\_read\_file\_size\_from\_remote**  command is used to read the size of a specified file. This command is used to read the size of a specified file. Before using the  **gs\_repair\_file**  function to repair a file, you need to obtain the size of the file from the remote end to verify the missing file information and repair the missing files one by one. By default, only the initial user can view the data. Other users can use the data only after being granted with permissions.

-   Ledger database functions

    get\_dn\_hist\_relhash

-   AI feature functions

    <a name="table35161338161513"></a>
    <table><tbody><tr id="row1251643810158"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1426312914165"><a name="p1426312914165"></a><a name="p1426312914165"></a>create_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p437269201613"><a name="p437269201613"></a><a name="p437269201613"></a>create_snapshot_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14384183814173"><a name="p14384183814173"></a><a name="p14384183814173"></a>prepare_snapshot_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14442548131711"><a name="p14442548131711"></a><a name="p14442548131711"></a>prepare_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p20789101819182"><a name="p20789101819182"></a><a name="p20789101819182"></a>manage_snapshot_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p741882531819"><a name="p741882531819"></a><a name="p741882531819"></a>archive_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p148481728191810"><a name="p148481728191810"></a><a name="p148481728191810"></a>publish_snapshot</p>
    </td>
    </tr>
    <tr id="row5483113941816"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1875745816185"><a name="p1875745816185"></a><a name="p1875745816185"></a>purge_snapshot_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p43067431919"><a name="p43067431919"></a><a name="p43067431919"></a>purge_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p71913153193"><a name="p71913153193"></a><a name="p71913153193"></a>sample_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p84841339141816"><a name="p84841339141816"></a><a name="p84841339141816"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p948433917184"><a name="p948433917184"></a><a name="p948433917184"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1348413914188"><a name="p1348413914188"></a><a name="p1348413914188"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2484143901811"><a name="p2484143901811"></a><a name="p2484143901811"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

    -   Functions of  **PKG\_SERVICE**

    <a name="table10132104324312"></a>
    <table><tbody><tr id="row81335439432"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p81331343144311"><a name="p81331343144311"></a><a name="p81331343144311"></a>isubmit_on_nodes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p84821021174410"><a name="p84821021174410"></a><a name="p84821021174410"></a>submit_on_nodes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p124371127144416"><a name="p124371127144416"></a><a name="p124371127144416"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1443642774419"><a name="p1443642774419"></a><a name="p1443642774419"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p66715296449"><a name="p66715296449"></a><a name="p66715296449"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p0670162913442"><a name="p0670162913442"></a><a name="p0670162913442"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p266919299449"><a name="p266919299449"></a><a name="p266919299449"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Other functions

    <a name="table16950103316454"></a>
    <table><tbody><tr id="row12951233104513"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p11878115864515"><a name="p11878115864515"></a><a name="p11878115864515"></a>to_tsvector_for_batch</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p179511533164517"><a name="p179511533164517"></a><a name="p179511533164517"></a>value_of_percentile</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p29519334454"><a name="p29519334454"></a><a name="p29519334454"></a>disable_conn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1335564113460"><a name="p1335564113460"></a><a name="p1335564113460"></a>bind_variable</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p09515334452"><a name="p09515334452"></a><a name="p09515334452"></a>job_update</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1460764414474"><a name="p1460764414474"></a><a name="p1460764414474"></a>job_cancel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p2232146114717"><a name="p2232146114717"></a><a name="p2232146114717"></a>job_finish</p>
    </td>
    </tr>
    <tr id="row395118332454"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p820214824715"><a name="p820214824715"></a><a name="p820214824715"></a>similar_escape</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p17861035115119"><a name="p17861035115119"></a><a name="p17861035115119"></a>table_skewness (unavailable)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p49523334454"><a name="p49523334454"></a><a name="p49523334454"></a>timetz_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p12952933184510"><a name="p12952933184510"></a><a name="p12952933184510"></a>time_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p9952193313452"><a name="p9952193313452"></a><a name="p9952193313452"></a>reltime_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8952133144510"><a name="p8952133144510"></a><a name="p8952133144510"></a>abstime_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p179527338451"><a name="p179527338451"></a><a name="p179527338451"></a>*pg*keysequal</p>
    </td>
    </tr>
    <tr id="row2158313164916"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p620314317259"><a name="p620314317259"></a><a name="p620314317259"></a>analyze_query</p>
    <p id="p11158121324917"><a name="p11158121324917"></a><a name="p11158121324917"></a>(unavailable)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p71581013124914"><a name="p71581013124914"></a><a name="p71581013124914"></a>analyze_workload (unavailable)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p131581613194914"><a name="p131581613194914"></a><a name="p131581613194914"></a>ssign_table_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p31588136499"><a name="p31588136499"></a><a name="p31588136499"></a>gs_comm_proxy_thread_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p10158201317497"><a name="p10158201317497"></a><a name="p10158201317497"></a>gs_txid_oldestxmin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p8158101394918"><a name="p8158101394918"></a><a name="p8158101394918"></a>pg_cancel_session</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1115891324911"><a name="p1115891324911"></a><a name="p1115891324911"></a>pg_stat_segment_space_info</p>
    </td>
    </tr>
    <tr id="row137901214505"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1790111115011"><a name="p1790111115011"></a><a name="p1790111115011"></a>remote_segment_space_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p19790116507"><a name="p19790116507"></a><a name="p19790116507"></a>set_cost_params</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p57903111506"><a name="p57903111506"></a><a name="p57903111506"></a>set_weight_params</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p14790151165018"><a name="p14790151165018"></a><a name="p14790151165018"></a>start_collect_workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1579017185014"><a name="p1579017185014"></a><a name="p1579017185014"></a>tdigest_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p87903110508"><a name="p87903110508"></a><a name="p87903110508"></a>tdigest_merge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1079019116506"><a name="p1079019116506"></a><a name="p1079019116506"></a>tdigest_merge_to_one</p>
    </td>
    </tr>
    <tr id="row68523517512"><td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p168511356518"><a name="p168511356518"></a><a name="p168511356518"></a>tdigest_mergep</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1985835195116"><a name="p1985835195116"></a><a name="p1985835195116"></a>tdigest_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p3861835165115"><a name="p3861835165115"></a><a name="p3861835165115"></a>pg_get_delta_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p986193575120"><a name="p986193575120"></a><a name="p986193575120"></a>disable_conn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p6210337192311"><a name="p6210337192311"></a><a name="p6210337192311"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p1228301014227"><a name="p1228301014227"></a><a name="p1228301014227"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%"><p id="p128633520518"><a name="p128633520518"></a><a name="p128633520518"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>
