# MOT SQL覆盖和限制<a name="ZH-CN_TOPIC_0289900340"></a>

MOT设计几乎能够覆盖SQL和未来特性集。例如，大多数支持标准的Postgres SQL，也支持常见的数据库特性，如存储过程、自定义函数等。

下面介绍各种SQL覆盖和限制。

## 不支持的特性<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section59525326"></a>

MOT不支持以下特性：

-   跨引擎操作：不支持跨引擎（磁盘+MOT）的查询、视图或事务。计划于2021年实现该特性。
-   MVCC、隔离：不支持没有快照/可序列化隔离。计划于2021年实现该特性。
-   原生编译（JIT）：SQL覆盖有限。此外，不支持存储过程的JIT编译。
-   本地内存限制为1GB。一个事务只能更改小于1GB的数据。
-   容量（数据+索引）受限于可用内存。未来将提供Anti-caching和数据分层功能。
-   不支持全文检索索引。
-   不支持逻辑复制。

此外，下面详细列出了MOT、MOT索引、查询和DML语法的各种通用限制，以及查询原生编译的特点和限制。

## MOT限制<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section65965888"></a>

MOT功能限制：

-   按范围分区
-   AES加密
-   流操作
-   自定义类型
-   子事务
-   DML触发器
-   DDL触发器

## 不支持的DDL操作<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section56822082"></a>

-   修改表结构
-   创建including表
-   创建as select表
-   按范围分区
-   创建无日志记录子句（no-logging clause）的表
-   创建可延迟约束主键（DEFERRABLE）
-   重新索引
-   表空间
-   使用子命令创建架构

## 不支持的数据类型<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section41636693"></a>

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
-   NVARCHAR\(n\)
-   Clob
-   Name
-   Blob
-   Raw
-   Path
-   Circle
-   Reltime
-   Bit varying\(10\)
-   Tsvector
-   Tsquery
-   JSON
-   Box
-   Text
-   Line
-   Point
-   LSEG
-   POLYGON
-   INET
-   CIDR
-   MACADDR
-   Smalldatetime
-   BYTEA
-   Bit
-   Varbit
-   OID
-   Money
-   无限制的varchar/character varying
-   HSTORE

## 不支持的索引DDL和索引<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section39185923"></a>

-   在小数和数值类型上创建索引
-   在可空列上创建索引
-   单表创建索引总数\>9
-   在键大小\>256的表上创建索引

    键大小包括以字节为单位的列大小+列附加大小，这是维护索引所需的开销。下表列出了不同列类型的列附加大小。

    此外，如果索引不是唯一的，额外需要8字节。

    下面是伪代码计算键大小：

    ```
    keySize =0; 
      
    for each (column in index){ 
          keySize += (columnSize + columnAddSize); 
    } 
    if (index is non_unique) { 
          keySize += 8; 
    }
    ```

    <a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_table4434407"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row30989376"><th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p27111510"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p27111510"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p27111510"></a>列类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48548738"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48548738"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48548738"></a>列大小</p>
    </th>
    <th class="cellrowborder" valign="top" width="32.653265326532654%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40133673"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40133673"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40133673"></a>列附加大小</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row29602101"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48960014"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48960014"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48960014"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6338203"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6338203"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6338203"></a>N</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p43632453"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p43632453"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p43632453"></a>4</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row57147760"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p65565839"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p65565839"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p65565839"></a>tinyint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9232767"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9232767"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9232767"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9656680"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9656680"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p9656680"></a>1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row19801257"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60397945"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60397945"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60397945"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60395349"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60395349"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60395349"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60185126"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60185126"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p60185126"></a>1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row4795230"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p52869369"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p52869369"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p52869369"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p54560509"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p54560509"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p54560509"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p57325072"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p57325072"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p57325072"></a>1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row46163608"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48264776"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48264776"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p48264776"></a>longint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p17132764"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p17132764"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p17132764"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p45576637"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p45576637"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p45576637"></a>1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row7536549"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6480739"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6480739"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p6480739"></a>float</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p55177890"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p55177890"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p55177890"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40224138"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40224138"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p40224138"></a>2</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_row26472924"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p63932115"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p63932115"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p63932115"></a>double</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p11118855"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p11118855"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p11118855"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p28212063"><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p28212063"></a><a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_p28212063"></a>3</p>
    </td>
    </tr>
    </tbody>
    </table>


上表中未指定的类型，列附加大小为零（例如时间戳）。

## 不支持的DML<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section17128987"></a>

-   Merge into
-   Select into
-   Lock table
-   Copy from table

## 原生编译和轻量执行不支持的查询<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section19943160"></a>

-   查询涉及两个以上的表
-   查询有以下任何一个情况：
    -   非原生类型的聚合
    -   窗口功能
    -   子查询子链接
    -   Distinct-ON修饰语（distinct子句来自DISTINCT ON）
    -   递归（已指定WITH RECURSIVE）
    -   修改CTE（WITH中有INSERT/UPDATE/DELETE）


以下子句不支持轻量执行：

-   Returning list
-   Group By clause
-   Grouping sets
-   Having clause
-   Windows clause
-   Distinct clause
-   Sort clause that does not conform to native index order
-   Set operations
-   Constraint dependencies

