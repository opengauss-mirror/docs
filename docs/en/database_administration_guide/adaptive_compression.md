# Adaptive Compression

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:41:56.478Z pushedAt=2026-07-29T07:23:24.313Z -->

## Availability <a name="section33236420"></a>

This feature is introduced since openGauss 1.0.0.

## Feature Description<a name="section30692330"></a>

Data compression is a primary technology adopted by current databases. Different data types are suited to different compression algorithms. For data of the same type, varying data characteristics lead to different compression results when different algorithms are applied. Adaptive compression leverages both data types and data characteristics, employing appropriate compression algorithms to achieve a favorable compression ratio, fast data ingestion performance, and satisfactory query performance.

## Customer Value<a name="section7795517"></a>

The primary application scenarios are data ingestion and frequent massive data queries. In data ingestion scenarios, adaptive compression can significantly reduce data volume, multiply I/O operation efficiency, and classify and compress data to achieve faster ingestion performance. When users perform data queries, fewer I/O operations and fast data decompression accelerate the data retrieval rate, thereby delivering query results in a shorter time.

## Feature Description<a name="section3050790"></a>

Currently, the database has implemented multiple compression algorithms on columnar storage, including RLE, DELTA, BYTEPACK/BITPACK, LZ4, ZLIB, and LOCAL DICTIONARY. The mapping relationship between the data types supported by the database and the compression algorithms is shown in the following table.

<a name="table57174405"></a>

<table><thead align="left"><tr id="row37135808"><th class="cellrowborder" valign="top" width="30.930000000000007%" id="mcps1.1.8.1.1"><p id="p55210503"><a name="p55210503"></a><a name="p55210503"></a>-</p></th>
<th class="cellrowborder" valign="top" width="8.250000000000002%" id="mcps1.1.8.1.2"><p id="p42865721"><a name="p42865721"></a><a name="p42865721"></a>RLE</p></th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.3"><p id="p49571392"><a name="p49571392"></a><a name="p49571392"></a>DELTA</p></th>
<th class="cellrowborder" valign="top" width="16.490000000000002%" id="mcps1.1.8.1.4"><p id="p55859844"><a name="p55859844"></a><a name="p55859844"></a>BITPACK/BYTEPACK</p></th>
<th class="cellrowborder" valign="top" width="9.280000000000001%" id="mcps1.1.8.1.5"><p id="p28353516"><a name="p28353516"></a><a name="p28353516"></a>LZ4</p></th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.6"><p id="p14933473"><a name="p14933473"></a><a name="p14933473"></a>ZLIB</p></th>
<th class="cellrowborder" valign="top" width="14.430000000000003%" id="mcps1.1.8.1.7"><p id="p1651786"><a name="p1651786"></a><a name="p1651786"></a>LOCAL DICTIONARY</p></th>
</tr>
</thead>
<tbody><tr id="row66685840"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p32843930"><a name="p32843930"></a><a name="p32843930"></a>smallint/int/bigint/oid</p>
<p id="p27159916"><a name="p27159916"></a><a name="p27159916"></a>decimal/real/double</p>
<p id="p43112656"><a name="p43112656"></a><a name="p43112656"></a>money/time/date/</p>
<p id="p52469592"><a name="p52469592"></a><a name="p52469592"></a>timestamp</p></td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p22178556"><a name="p22178556"></a><a name="p22178556"></a>√</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p51632641"><a name="p51632641"></a><a name="p51632641"></a>√</p></td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p21494415"><a name="p21494415"></a><a name="p21494415"></a>√</p></td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p63326029"><a name="p63326029"></a><a name="p63326029"></a>√</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p29134691"><a name="p29134691"></a><a name="p29134691"></a>√</p></td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p11099770"><a name="p11099770"></a><a name="p11099770"></a>-</p></td>
</tr>
<tr id="row32789069"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p38668936"><a name="p38668936"></a><a name="p38668936"></a>tinterval/interval/time with time zone/</p></td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p45176087"><a name="p45176087"></a><a name="p45176087"></a>-</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p35384419"><a name="p35384419"></a><a name="p35384419"></a>-</p></td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p47565651"><a name="p47565651"></a><a name="p47565651"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p27612495"><a name="p27612495"></a><a name="p27612495"></a>-</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p22019648"><a name="p22019648"></a><a name="p22019648"></a>√</p></td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p38761102"><a name="p38761102"></a><a name="p38761102"></a>-</p></td>
</tr>
<tr id="row13305603"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="p4012071"><a name="p4012071"></a><a name="p4012071"></a>numeric/char/varchar/text/nvarchar2</p>
<p id="p36108639"><a name="p36108639"></a><a name="p36108639"></a>and other supported data types</p></td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="p39118642"><a name="p39118642"></a><a name="p39118642"></a>√</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="p14493442"><a name="p14493442"></a><a name="p14493442"></a>√</p></td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="p33118134"><a name="p33118134"></a><a name="p33118134"></a>√</p></td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="p65323191"><a name="p65323191"></a><a name="p65323191"></a>√</p></td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="p56687084"><a name="p56687084"></a><a name="p56687084"></a>√</p></td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="p28251069"><a name="p28251069"></a><a name="p28251069"></a>√</p></td>
</tr>
</tbody>
</table>

## Feature Enhancement<a name="section27457110"></a>

Adjustment of different compression levels for compression algorithms is supported.

## Feature Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section45787398"></a>

Open-source compression software LZ4/ZLIB.

## Usage Instructions

Adaptive compression is a feature of column-store tables. When creating a table, the table data storage mode must be specified as column-oriented storage.

The COMPRESSION parameter can be set during use, which determines the compression ratio and compression time of the table data. Generally speaking, the higher the compression level, the greater the compression ratio and the longer the compression time; and vice versa. The actual compression ratio depends on the distribution characteristics of the loaded table data. Valid values are YES/NO/LOW/MIDDLE/HIGH, with the default value being LOW.

## Usage Guidelines

Test Cases

```
-- Create a column-store table.
openGauss=# CREATE TABLE COMPRESS_LOW
(
    ID            INT PRIMARY KEY     NOT NULL,
    NAME          TEXT                NOT NULL,
    AGE           INT                 NOT NULL,
    ADDRESS       CHAR(50)                    ,
    SALARY        REAL
) WITH (ORIENTATION=COLUMN);

openGauss=# INSERT INTO COMPRESS_LOW 
openGauss-# SELECT GENERATE_SERIES(1, 10000) AS KEY,REPEAT( CHR(INT4(RANDOM()*26)+65),4), 
openGauss-# (RANDOM()*(6^2))::INTEGER,NULL,(RANDOM()*(10^4))::INTEGER;

-- Create a column-store table and set COMPRESSION to NO.
openGauss=# CREATE TABLE COMPRESS_NO
(
    ID            INT PRIMARY KEY     NOT NULL,
    NAME          TEXT                NOT NULL,
    AGE           INT                 NOT NULL,
    ADDRESS       CHAR(50)                    ,
    SALARY        REAL
) WITH (ORIENTATION=COLUMN, COMPRESSION=NO);

openGauss=# INSERT INTO COMPRESS_NO 
openGauss-# SELECT GENERATE_SERIES(1, 10000) AS KEY,REPEAT( CHR(INT4(RANDOM()*26)+65),4), 
openGauss-# (RANDOM()*(6^2))::INTEGER,NULL,(RANDOM()*(10^4))::INTEGER;

-- Create a column-store table and set COMPRESSION to MIDDLE.
openGauss=# CREATE TABLE COMPRESS_MID
(
    ID            INT PRIMARY KEY     NOT NULL,
    NAME          TEXT                NOT NULL,
    AGE           INT                 NOT NULL,
    ADDRESS       CHAR(50)                    ,
    SALARY        REAL
) WITH (ORIENTATION=COLUMN, COMPRESSION=MIDDLE);

openGauss=# INSERT INTO COMPRESS_MID 
openGauss-# SELECT GENERATE_SERIES(1, 10000) AS KEY,REPEAT( CHR(INT4(RANDOM()*26)+65),4), 
openGauss-# (RANDOM()*(6^2))::INTEGER,NULL,(RANDOM()*(10^4))::INTEGER;

-- Create a column-store table and set COMPRESSION to HIGH.
openGauss=# CREATE TABLE COMPRESS_HIGH
(
    ID            INT PRIMARY KEY     NOT NULL,
    NAME          TEXT                NOT NULL,
    AGE           INT                 NOT NULL,
    ADDRESS       CHAR(50)                    ,
    SALARY        REAL
) WITH (ORIENTATION=COLUMN, COMPRESSION=HIGH);

openGauss=# INSERT INTO COMPRESS_HIGH 
openGauss-# SELECT GENERATE_SERIES(1, 10000) AS KEY,REPEAT( CHR(INT4(RANDOM()*26)+65),4), 
openGauss-# (RANDOM()*(6^2))::INTEGER,NULL,(RANDOM()*(10^4))::INTEGER;

-- Query the table size.
openGauss=# select pg_size_pretty(pg_relation_size('compress_low')) as size;
  size
--------
 152 kB
 (1 row)

openGauss=# select pg_size_pretty(pg_relation_size('compress_no')) as size;
  size
--------
 240 kB
 (1 row)

openGauss=# select pg_size_pretty(pg_relation_size('compress_mid')) as size;
  size
--------
 128 kB
 (1 row)

openGauss=# select pg_size_pretty(pg_relation_size('compress_high')) as size;
  size
--------
 112 kB
 (1 row)

```