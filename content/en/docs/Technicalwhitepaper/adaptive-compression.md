# Adaptive Compression<a name="EN-US_CONCEPT_0252569360"></a>

Currently, mainstream databases usually use the data compression technology. Various compression algorithms are used for different data types. If pieces of data of the same type have different characteristics, their compression algorithms and results will also be different. Adaptive compression chooses the suitable compression algorithm for data based on the data type and characteristics, achieving high performance in compression ratio, import, and query.

Importing and frequently querying a huge amount of data are the main application scenarios. When you import data, adaptive compression greatly reduces the data volume, increases I/O operation efficiency several times, and clusters data before storage, achieving fast data import. In this way, only a small number of I/O operations is required and data is quickly decompressed in a query. Data can be quickly retrieved and the query result is quickly returned.

Currently, the database has implemented various compression algorithms, including RLE, DELTA, BYTEPACK/BITPACK, LZ4, ZLIB, and LOCAL DICTIONARY. The following table lists data types and the compression algorithms suitable for them.

<a name="en-us_concept_0238164467_table57174405"></a>
<table><thead align="left"><tr id="en-us_concept_0238164467_row37135808"><th class="cellrowborder" valign="top" width="30.930000000000007%" id="mcps1.1.8.1.1"><p id="en-us_concept_0238164467_p55210503"><a name="en-us_concept_0238164467_p55210503"></a><a name="en-us_concept_0238164467_p55210503"></a>-</p>
</th>
<th class="cellrowborder" valign="top" width="8.250000000000002%" id="mcps1.1.8.1.2"><p id="en-us_concept_0238164467_p42865721"><a name="en-us_concept_0238164467_p42865721"></a><a name="en-us_concept_0238164467_p42865721"></a>RLE</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.3"><p id="en-us_concept_0238164467_p49571392"><a name="en-us_concept_0238164467_p49571392"></a><a name="en-us_concept_0238164467_p49571392"></a>DELTA</p>
</th>
<th class="cellrowborder" valign="top" width="16.490000000000002%" id="mcps1.1.8.1.4"><p id="en-us_concept_0238164467_p55859844"><a name="en-us_concept_0238164467_p55859844"></a><a name="en-us_concept_0238164467_p55859844"></a>BITPACK/BYTEPACK</p>
</th>
<th class="cellrowborder" valign="top" width="9.280000000000001%" id="mcps1.1.8.1.5"><p id="en-us_concept_0238164467_p28353516"><a name="en-us_concept_0238164467_p28353516"></a><a name="en-us_concept_0238164467_p28353516"></a>LZ4</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.6"><p id="en-us_concept_0238164467_p14933473"><a name="en-us_concept_0238164467_p14933473"></a><a name="en-us_concept_0238164467_p14933473"></a>ZLIB</p>
</th>
<th class="cellrowborder" valign="top" width="14.430000000000003%" id="mcps1.1.8.1.7"><p id="en-us_concept_0238164467_p1651786"><a name="en-us_concept_0238164467_p1651786"></a><a name="en-us_concept_0238164467_p1651786"></a>LOCAL DICTIONARY</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0238164467_row66685840"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p32843930"><a name="en-us_concept_0238164467_p32843930"></a><a name="en-us_concept_0238164467_p32843930"></a>Smallint/int/bigint/Oid</p>
<p id="en-us_concept_0238164467_p27159916"><a name="en-us_concept_0238164467_p27159916"></a><a name="en-us_concept_0238164467_p27159916"></a>Decimal/real/double</p>
<p id="en-us_concept_0238164467_p43112656"><a name="en-us_concept_0238164467_p43112656"></a><a name="en-us_concept_0238164467_p43112656"></a>Money/time/date/</p>
<p id="en-us_concept_0238164467_p52469592"><a name="en-us_concept_0238164467_p52469592"></a><a name="en-us_concept_0238164467_p52469592"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p22178556"><a name="en-us_concept_0238164467_p22178556"></a><a name="en-us_concept_0238164467_p22178556"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p51632641"><a name="en-us_concept_0238164467_p51632641"></a><a name="en-us_concept_0238164467_p51632641"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p21494415"><a name="en-us_concept_0238164467_p21494415"></a><a name="en-us_concept_0238164467_p21494415"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p63326029"><a name="en-us_concept_0238164467_p63326029"></a><a name="en-us_concept_0238164467_p63326029"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p29134691"><a name="en-us_concept_0238164467_p29134691"></a><a name="en-us_concept_0238164467_p29134691"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p11099770"><a name="en-us_concept_0238164467_p11099770"></a><a name="en-us_concept_0238164467_p11099770"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0238164467_row32789069"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p38668936"><a name="en-us_concept_0238164467_p38668936"></a><a name="en-us_concept_0238164467_p38668936"></a>Tinterval/interval/Time with time zone/</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p45176087"><a name="en-us_concept_0238164467_p45176087"></a><a name="en-us_concept_0238164467_p45176087"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p35384419"><a name="en-us_concept_0238164467_p35384419"></a><a name="en-us_concept_0238164467_p35384419"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p47565651"><a name="en-us_concept_0238164467_p47565651"></a><a name="en-us_concept_0238164467_p47565651"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p27612495"><a name="en-us_concept_0238164467_p27612495"></a><a name="en-us_concept_0238164467_p27612495"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p22019648"><a name="en-us_concept_0238164467_p22019648"></a><a name="en-us_concept_0238164467_p22019648"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p38761102"><a name="en-us_concept_0238164467_p38761102"></a><a name="en-us_concept_0238164467_p38761102"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0238164467_row13305603"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p4012071"><a name="en-us_concept_0238164467_p4012071"></a><a name="en-us_concept_0238164467_p4012071"></a>Numeric/char/varchar/text/nvarchar2</p>
<p id="en-us_concept_0238164467_p36108639"><a name="en-us_concept_0238164467_p36108639"></a><a name="en-us_concept_0238164467_p36108639"></a>and other supported data types</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p39118642"><a name="en-us_concept_0238164467_p39118642"></a><a name="en-us_concept_0238164467_p39118642"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p14493442"><a name="en-us_concept_0238164467_p14493442"></a><a name="en-us_concept_0238164467_p14493442"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p33118134"><a name="en-us_concept_0238164467_p33118134"></a><a name="en-us_concept_0238164467_p33118134"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p65323191"><a name="en-us_concept_0238164467_p65323191"></a><a name="en-us_concept_0238164467_p65323191"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p56687084"><a name="en-us_concept_0238164467_p56687084"></a><a name="en-us_concept_0238164467_p56687084"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p28251069"><a name="en-us_concept_0238164467_p28251069"></a><a name="en-us_concept_0238164467_p28251069"></a>√</p>
</td>
</tr>
</tbody>
</table>

For example, large integer compression of mobile number-like character strings, large integer compression of the numeric type, and adjustment of the compression algorithm compression level are supported.

