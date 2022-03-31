# Adaptive Compression<a name="EN-US_TOPIC_0000001105235300"></a>

## Availability<a name="section33236420"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section30692330"></a>

Data compression is the major technology used in current databases. Various compression algorithms are used for different data types. If pieces of data of the same type have different characteristics, their compression algorithms and results will also be different. Adaptive compression chooses the suitable compression algorithm for data based on the data type and characteristics, achieving high performance in compression ratio, import, and query.

## Benefits<a name="section7795517"></a>

Importing and frequently querying a huge amount of data are the main application scenarios. When you import data, adaptive compression greatly reduces the data volume, increases I/O operation efficiency several times, and clusters data before storage, achieving fast data import. In this way, only a small number of I/O operations is required and data is quickly decompressed in a query. Data can be quickly retrieved and the query result is quickly returned.

## Description<a name="section3050790"></a>

Currently, the database has implemented various compression algorithms on column store, including RLE, DELTA, BYTEPACK/BITPACK, LZ4, ZLIB, and LOCAL DICTIONARY. The following table lists data types and the compression algorithms suitable for them.

<a name="table57174405"></a>
<table><thead align="left"><tr id="row37135808"><th class="cellrowborder" valign="top" width="30.930000000000007%" id="mcps1.1.8.1.1"><p id="p55210503"><a name="p55210503"></a><a name="p55210503"></a>-</p>
</th>
<th class="cellrowborder" valign="top" width="8.250000000000002%" id="mcps1.1.8.1.2"><p id="p42865721"><a name="p42865721"></a><a name="p42865721"></a>RLE</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.3"><p id="p49571392"><a name="p49571392"></a><a name="p49571392"></a>DELTA</p>
</th>
<th class="cellrowborder" valign="top" width="16.490000000000002%" id="mcps1.1.8.1.4"><p id="p55859844"><a name="p55859844"></a><a name="p55859844"></a>BITPACK/BYTEPACK</p>
</th>
<th class="cellrowborder" valign="top" width="9.280000000000001%" id="mcps1.1.8.1.5"><p id="p28353516"><a name="p28353516"></a><a name="p28353516"></a>LZ4</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.6"><p id="p14933473"><a name="p14933473"></a><a name="p14933473"></a>ZLIB</p>
</th>
<th class="cellrowborder" valign="top" width="14.430000000000003%" id="mcps1.1.8.1.7"><p id="p1651786"><a name="p1651786"></a><a name="p1651786"></a>LOCAL DICTIONARY</p>
</th>
</tr>
</thead>
<tbody><tr id="row66685840"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p32843930"><a name="p32843930"></a><a name="p32843930"></a>Smallint/Int/Bigint/Oid</p>
<p id="p27159916"><a name="p27159916"></a><a name="p27159916"></a>Decimal/Real/Double</p>
<p id="p43112656"><a name="p43112656"></a><a name="p43112656"></a>Money/Time/Date/</p>
<p id="p52469592"><a name="p52469592"></a><a name="p52469592"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p22178556"><a name="p22178556"></a><a name="p22178556"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p51632641"><a name="p51632641"></a><a name="p51632641"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p21494415"><a name="p21494415"></a><a name="p21494415"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p63326029"><a name="p63326029"></a><a name="p63326029"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p29134691"><a name="p29134691"></a><a name="p29134691"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p11099770"><a name="p11099770"></a><a name="p11099770"></a>-</p>
</td>
</tr>
<tr id="row32789069"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p38668936"><a name="p38668936"></a><a name="p38668936"></a>Tinterval/Interval/Time with time zone/</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p45176087"><a name="p45176087"></a><a name="p45176087"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p35384419"><a name="p35384419"></a><a name="p35384419"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p47565651"><a name="p47565651"></a><a name="p47565651"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p27612495"><a name="p27612495"></a><a name="p27612495"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p22019648"><a name="p22019648"></a><a name="p22019648"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p38761102"><a name="p38761102"></a><a name="p38761102"></a>-</p>
</td>
</tr>
<tr id="row13305603"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p4012071"><a name="p4012071"></a><a name="p4012071"></a>Numeric/Char/Varchar/Text/Nvarchar2</p>
<p id="p36108639"><a name="p36108639"></a><a name="p36108639"></a>and other supported data types</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p39118642"><a name="p39118642"></a><a name="p39118642"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p14493442"><a name="p14493442"></a><a name="p14493442"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p33118134"><a name="p33118134"></a><a name="p33118134"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p65323191"><a name="p65323191"></a><a name="p65323191"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p56687084"><a name="p56687084"></a><a name="p56687084"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p28251069"><a name="p28251069"></a><a name="p28251069"></a>√</p>
</td>
</tr>
</tbody>
</table>

## Enhancements<a name="section27457110"></a>

The compression level of compression algorithms can be adjusted.

## Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section45787398"></a>

It depends on LZ4 or ZLIB.

