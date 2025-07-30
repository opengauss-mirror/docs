# 自适应压缩<a name="ZH-CN_TOPIC_0000001105235300"></a>

## 可获得性<a name="section33236420"></a>

本特性自openGauss 1.0.0版本开始引入。

## 特性简介<a name="section30692330"></a>

数据压缩是当前数据库采用的主要技术。数据类型不同，适用于它的压缩算法不同。对于相同类型的数据，其数据特征不同，采用不同的压缩算法达到的效果也不相同。自适应压缩正是从数据类型和数据特征出发，采用相应的压缩算法，实现了良好的压缩比、快速的入库性能以及良好的查询性能。

## 客户价值<a name="section7795517"></a>

数据入库和频繁的海量数据查询是用户的主要应用场景。 在数据入库场景中，自适应压缩可以大幅度地减少数据量，成倍提高IO操作效率，将数据簇集存储，从而获得快速的入库性能。当用户进行数据查询时，少量的IO操作和快速的数据解压可以加快数据获取的速率，从而在更短的时间内得到查询结果。

## 特性描述<a name="section3050790"></a>

目前，数据库已实现了列存储上RLE、DELTA、BYTEPACK/BITPACK、LZ4、ZLIB、LOCAL DICTIONARY等多种压缩算法。数据库支持的数据类型与压缩算法的映射关系如下表所示。

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
<p id="p36108639"><a name="p36108639"></a><a name="p36108639"></a>以及其他支持数据类型</p>
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

## 特性增强<a name="section27457110"></a>

支持对压缩算法进行不同压缩水平的调整。

## 特性约束<a name="section06531946143616"></a>

无。

## 依赖关系<a name="section45787398"></a>

开源压缩软件LZ4/ZLIB。

## 使用说明

自适应压缩是列存表的功能，在创建表时需要指定表数据存储方式为列式存储。

使用时可设置COMPRESSION参数，它决定了表数据的压缩比以及压缩时间。一般来讲，压缩级别越高，压缩比也越大，压缩时间也越长；反之亦然。实际压缩比取决于加载的表数据的分布特征。有效值为YES/NO/LOW/MIDDLE/HIGH，默认值为LOW。

## 使用指导

测试用例

```
-- 创建列存表。
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

-- 创建列存表，并设置COMPRESSION为NO。
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

-- 创建列存表，并设置COMPRESSION为MIDDLE。
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

-- 创建列存表，并设置COMPRESSION为HIGH。
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

-- 查询表大小。
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
