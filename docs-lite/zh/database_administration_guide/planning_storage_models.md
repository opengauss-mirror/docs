# 规划存储模型

## 可获得性<a name="section18007590"></a>

openGauss支持行列混合存储，此特性自openGauss 1.0.0版本开始引入。

## 特性简介<a name="section27850590"></a>

openGauss支持行存储和列存储两种存储模型，用户可以根据具体的使用场景，建表时选择行存储还是列存储表。

一般情况下，如果表的字段比较多（即大宽表），查询中涉及到列不很多的情况下，适合列存储。列存储方式如[图1](#fig114741818102620)所示。如果表的字段个数比较少，查询大部分字段，那么选择行存储比较好。

**图 1**  列存储示意图<a name="fig114741818102620"></a>  

![](figures/8-3行列混存引擎.png)

## 客户价值<a name="section49328722"></a>

在大宽表、数据量比较大的场景中，查询经常关注某些列，行存储引擎查询性能比较差。例如，气象局的场景，单表有200\~800个列，查询经常访问10个列，在类似这样的场景下，向量化执行技术和列存储引擎可以极大的提升性能和减少存储空间。

## 特性描述<a name="section41305314"></a>

表有行存表和列存表两种存储模型。两种存储模型各有优劣，建议根据实际情况选择。通常openGauss用于OLTP（联机事务处理）场景的数据库，默认使用行存储，仅对执行复杂查询且数据量大的OLAP（联机分析处理）场景时，才使用列存储。

- 行存表

    默认创建表的类型。数据按行进行存储，即一行数据紧挨着存储。行存表支持完整的增删改查。适用于对数据需要经常更新的场景。

- 列存表

    数据按列进行存储，即一列所有数据紧挨着存储。单列查询IO小，比行存表占用更少的存储空间。适合数据批量插入、更新较少和以查询为主统计分析类的场景。列存表不适合点查询，insert插入单条记录性能差。

行存储是指将表按行存储到硬盘分区上，列存储是指将表按列存储到硬盘分区上。默认情况下，创建的表为行存储。行存储和列存储的差异请参见[图1](#zh-cn_topic_0237120296_fig1417354233018)。

**图 1**  行存储和列存储的差异<a name="zh-cn_topic_0237120296_fig1417354233018"></a>  

![](figures/zh-cn_image_0289900299.png)

上图中，左上为行存表，右上为行存表在硬盘上的存储方式。左下为列存表，右下为列存表在硬盘上的存储方式。

行、列存储有如下优缺点：

<a name="zh-cn_topic_0237120296_table8447131119519"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120296_row16451411125113"><th class="cellrowborder" valign="top" width="14.14141414141414%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0237120296_p7453131117518"><a name="zh-cn_topic_0237120296_p7453131117518"></a><a name="zh-cn_topic_0237120296_p7453131117518"></a><strong id="zh-cn_topic_0237120296_b2453151113516"><a name="zh-cn_topic_0237120296_b2453151113516"></a><a name="zh-cn_topic_0237120296_b2453151113516"></a>存储模型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.39393939393939%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0237120296_p199221916145119"><a name="zh-cn_topic_0237120296_p199221916145119"></a><a name="zh-cn_topic_0237120296_p199221916145119"></a><strong id="zh-cn_topic_0237120296_b183421054185116"><a name="zh-cn_topic_0237120296_b183421054185116"></a><a name="zh-cn_topic_0237120296_b183421054185116"></a>优点</strong></p>
</th>
<th class="cellrowborder" valign="top" width="46.464646464646464%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0237120296_p164535117512"><a name="zh-cn_topic_0237120296_p164535117512"></a><a name="zh-cn_topic_0237120296_p164535117512"></a><strong id="zh-cn_topic_0237120296_b1463713025117"><a name="zh-cn_topic_0237120296_b1463713025117"></a><a name="zh-cn_topic_0237120296_b1463713025117"></a>缺点</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120296_row445671111516"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0237120296_p124571811115110"><a name="zh-cn_topic_0237120296_p124571811115110"></a><a name="zh-cn_topic_0237120296_p124571811115110"></a>行存</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0237120296_p1654125142613"><a name="zh-cn_topic_0237120296_p1654125142613"></a><a name="zh-cn_topic_0237120296_p1654125142613"></a>数据被保存在一起。INSERT/UPDATE容易。</p>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0237120296_p1727415115212"><a name="zh-cn_topic_0237120296_p1727415115212"></a><a name="zh-cn_topic_0237120296_p1727415115212"></a>选择（Selection）时即使只涉及某几列，所有数据也都会被读取。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120296_row1546241120517"><td class="cellrowborder" valign="top" width="14.14141414141414%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0237120296_p6462111105112"><a name="zh-cn_topic_0237120296_p6462111105112"></a><a name="zh-cn_topic_0237120296_p6462111105112"></a>列存</p>
</td>
<td class="cellrowborder" valign="top" width="39.39393939393939%" headers="mcps1.1.4.1.2 "><a name="zh-cn_topic_0237120296_ul1556111817542"></a><a name="zh-cn_topic_0237120296_ul1556111817542"></a><ul id="zh-cn_topic_0237120296_ul1556111817542"><li>查询时只有涉及到的列会被读取。</li><li>投影（Projection）很高效。</li><li>任何列都能作为索引。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="46.464646464646464%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0237120296_ul1796819916297"></a><a name="zh-cn_topic_0237120296_ul1796819916297"></a><ul id="zh-cn_topic_0237120296_ul1796819916297"><li>选择完成时，被选择的列要重新组装。</li><li>INSERT/UPDATE比较麻烦。</li></ul>
</td>
</tr>
</tbody>
</table>

一般情况下，如果表的字段比较多（大宽表），查询中涉及到的列不多的情况下，适合列存储。如果表的字段个数比较少，查询大部分字段，那么选择行存储比较好。

<a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_table3891877"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_row12104456"><th class="cellrowborder" valign="top" width="19.73%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p40936856"><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p40936856"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p40936856"></a><strong>存储类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="80.27%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p46632853"><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p46632853"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p46632853"></a><strong>适用场景</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_row38265132"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p12468015"><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p12468015"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p12468015"></a>行存</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul61112063105242"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul61112063105242"></a><ul id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul61112063105242"><li>点查询（返回记录少，基于索引的简单查询）。</li><li>增、删、改操作较多的场景。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_row64051613"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p20798169"><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p20798169"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_p20798169"></a>列存</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.1.3.1.2 "><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul38359637105253"></a><a name="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul38359637105253"></a><ul id="zh-cn_topic_0237120296_zh-cn_topic_0097078338_ul38359637105253"><li>统计分析类查询（关联、分组操作较多的场景）。</li><li>即席查询（查询条件不确定，行存表扫描难以使用索引）。</li></ul>
</td>
</tr>
</tbody>
</table>

## 特性约束<a name="section06531946143616"></a>

列存的规格约束如下：

- 表
    - 不支持全局临时表。
    - 不支持继承表。
    - 不支持create table of typename。
    - 不支持二级分区。
    - 列存仅支持范围分区。
    - 支持的分布表类型：REPLICATION分布、RANGE分布、LIST分布、HASH分布。

- 索引

    - 支持索引的类型：psort、btree、gin。

- SQL语法
    - insert/update/delete returning语句不支持。
    - rownum、start with connect by采用了转换成行存支持实现。

- 存储过程

    - 列存cursor不支持BACKWARD、PRIOR等涉及反向获取操作。

- 数据类型。支持以下基础类型及对应的数组类型：
    - 数值类型：TINYINT SMALLINT INTEGER BIGINT OID REAL DOUBLE NUMERIC。
    - 布尔类型：BOOLEAN。
    - 字符类型：CHAR\(n\) VARCHAR\(n\) NVARCHAR2\(n\) TEXT CLOB。
    - 日期/时间类型：DATE TIME TIMESTAMP SMALLDATETIME INTERVAL tinterval reltime abstime。
    - 网络地址类型：CIDR INET。
    - 货币类型：MONEY。
    - 位串类型：BIT\(n\) BIT VARYING\(n\)。
    - HLL数据类型：HLL HLL\_HASHVAL。
    - 二进制类型：BYTEA BYTEAWITHOUTORDERCOL BYTEAWITHOUTORDERWITHEQUALCOL。
    - 其他类型（包括自定义类型）均不支持。

- 存储&事务
    - 不支持闪回。
    - 不支持逻辑解码。
    - 不支持PITR。
    - 不支持发布订阅。
    - 不支持回收站。
    - 不支持段页式管理。
    - 不支持极致RTO。
    - 不支持并发更新同一行。
    - 不支持主备页面和文件自动修复。

- 其他
    - 不支持透明加密（TDE）。
    - 列存表目前只支持rank和row\_number两个函数（其他窗口函数会先转换成行存再处理）。
    - 不支持增量物化视图。
    - 不支持虚拟索引
    - Delta表不支持索引。

## 使用指导<a name="section20491151513592"></a>

### 语法格式<a name="zh-cn_topic_0283136734_zh-cn_topic_0237120296_zh-cn_topic_0066331191_zh-cn_topic_0059778293_s0420ba4662e14672b8ec55415ddca941"></a>

```
CREATE TABLE table_name 
    (column_name data_type [, ... ])
    [ WITH ( ORIENTATION  = value) ];
```

### 参数说明<a name="section415419560710"></a>

-   **table\_name**

    要创建的表名。

-   **column\_name**

    新表中要创建的字段名。

-   **data\_type**

    字段的数据类型。

-   **ORIENTATION**

    指定表数据的存储方式，即行存方式、列存方式，该参数设置成功后就不再支持修改。

    取值范围：

    -   ROW，表示表的数据将以行式存储。

        行存储适合于OLTP业务，适用于点查询或者增删操作较多的场景，目前使用Astore，Ustore作为行存储引擎。

    -   COLUMN，表示表的数据将以列式存储。

        列存储适合于数据仓库业务，此类型的表上会做大量的汇聚计算，且涉及的列操作较少，目前使用Cstore作为列存储引擎。

### 行存表<a name="zh-cn_topic_0237120296_zh-cn_topic_0066331191_zh-cn_topic_0059778293_s0420ba4662e14672b8ec55415ddca941"></a>

默认创建表的类型。数据按行进行存储，即一行数据是连续存储。适用于对数据需要经常更新的场景。不指定ORIENTATION参数时，表默认为行存表。

```sql
openGauss=# CREATE TABLE customer_t1
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
);

--删除表
openGauss=# DROP TABLE customer_t1;
```

### 列存表<a name="zh-cn_topic_0237120296_zh-cn_topic_0066331191_zh-cn_topic_0059778293_s05b88010070445598ab2a86454e5d88b"></a>

数据按列进行存储，即一列所有数据是连续存储的。单列查询IO小，比行存表占用更少的存储空间。适合数据批量插入、更新较少和以查询为主统计分析类的场景。列存表不适合点查询。创建列存表时，需要指定ORIENTATION参数。

```sql
openGauss=# CREATE TABLE customer_t2
(
  state_ID   CHAR(2),
  state_NAME VARCHAR2(40),
  area_ID    NUMBER
)
WITH (ORIENTATION = COLUMN);

--删除表
openGauss=# DROP TABLE customer_t2;
```

## 行存表和列存表的选择<a name="zh-cn_topic_0237120296_zh-cn_topic_0066331191_zh-cn_topic_0059778293_s120c7d1deb9046bb96d3d187117b1d2c"></a>

- 更新频繁程度

    数据如果频繁更新，选择行存表。

- 插入频繁程度

    频繁的少量插入，选择行存表。一次插入大批量数据，选择列存表。

- 表的列数

    表的列数很多，选择列存表。

- 查询的列数

    如果每次查询时，只涉及了表的少数（<50%总列数）几个列，选择列存表。

- 压缩率

    列存表比行存表压缩率高。但高压缩率会消耗更多的CPU资源。
