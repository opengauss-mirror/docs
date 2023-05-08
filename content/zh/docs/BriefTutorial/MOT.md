# MOT<a name="ZH-CN_TOPIC_0000001179976288"></a>

openGauss引入了MOT（Memory-Optimized Table，MOT）存储引擎，它是一种事务性行存储，针对多核和大内存服务器进行了优化。MOT是openGauss数据库最先进的生产级特性（Beta版本），它为事务性工作负载提供更高的性能。MOT完全支持ACID特性，并包括严格的持久性和高可用性支持。企业可以在关键任务、性能敏感的在线事务处理（OLTP）中使用MOT，以实现高性能、高吞吐、可预测低延迟以及多核服务器的高利用率。MOT尤其适合在多路和多核处理器的现代服务器上运行，例如基于Arm/鲲鹏处理器的华为TaiShan服务器，以及基于x86的戴尔或类似服务器。

## MOT特性及价值<a name="section15901154673217"></a>

MOT在高性能（查询和事务延迟）、高可扩展性（吞吐量和并发量）甚至在某些情况下成本（高资源利用率）这些方面拥有显著优势。

-   低延迟（Low Latency）：提供快速的查询和事务响应时间。
-   高吞吐量（High Throughput）：支持峰值和持续高用户并发。
-   高资源利用率（High Resource Utilization）：充分利用硬件。

使用了MOT的应用程序可以达到2.5到4倍的吞吐量。例如，在基于Arm/鲲鹏的华为TaiShan服务器和基于英特尔至强的戴尔x86服务器上，执行TPC-C基准测试（交互事务和同步日志）。MOT提供的吞吐率增益在2路服务器上达到2.5倍，4路服务器上达到3.7倍，在4路256核Arm服务器上达到480万tpmC。

在TPC-C基准测试中可观察到，MOT提供更低的延迟将事务速度降低3至5.5倍。

此外，高负载和高争用的情况是所有领先的行业数据库都会遇到的公认问题，而MOT能够在这种情况下极高地利用服务器资源。使用MOT后，4路服务器的资源利用率达到99%，远远领先其他行业数据库。

这种能力在现代的多核服务器上尤为明显和重要。

## MOT关键技术<a name="section3623104533719"></a>

MOT的关键技术如下：

-   内存优化数据结构：以实现高并发吞吐量和可预测的低延迟为目标，所有数据和索引都在内存中，不使用中间页缓冲区，并使用持续时间最短的锁。数据结构和所有算法都是专门为内存设计而优化的。
-   免锁事务管理：MOT在保证严格一致性和数据完整性的前提下，采用乐观的策略实现高并发和高吞吐。在事务过程中，MOT不会对正在更新的数据行的任何版本加锁，从而大大降低了一些大内存系统中的争用。事务中的乐观并发控制（Optimistic Concurrency Control，OCC）语句是在没有锁的情况下实现的，所有的数据修改都是在内存中专门用于私有事务的部分（也称为私有事务内存）中进行的。这就意味着在事务过程中，相关数据在私有事务内存中更新，从而实现了无锁读写；而且只有在提交阶段才会短时间加锁。
-   免锁索引：由于内存表的数据和索引完全存储在内存中，因此拥有一个高效的索引数据结构和算法非常重要。MOT索引机制基于最先进的Masstree，这是一种用于多核系统的快速和可扩展的键值（Key Value，KV）存储索引，以B+树的Trie实现。通过这种方式，高并发工作负载在多核服务器上可以获得卓越的性能。同时MOT应用了各种先进的技术以优化性能，如优化锁方法、高速缓存感知和内存预取。
-   NUMA-aware的内存管理：MOT内存访问的设计支持非统一内存访问（NUMA）感知。NUMA-aware算法增强了内存中数据布局的性能，使线程访问物理上连接到线程运行的核心的内存。这是由内存控制器处理的，不需要通过使用互连（如英特尔QPI）进行额外的跳转。MOT的智能内存控制模块，为各种内存对象预先分配了内存池，提高了性能，减少了锁，保证了稳定性。事务的内存对象的分配始终是NUMA本地的。本地处理的对象会返回到池中。同时在事务中尽量减少系统内存分配（OS malloc）的使用，避免不必要的锁。
-   高效持久性：日志和检查点是实现磁盘持久化的关键能力，也是ACID的关键要求之一（D代表持久性）。目前所有的磁盘（包括SSD和NVMe）都明显慢于内存，因此持久化是基于内存数据库引擎的瓶颈。作为一个基于内存的存储引擎，MOT的持久化设计必须实现各种各样的算法优化，以确保持久化的同时还能达到设计时的速度和吞吐量目标。这些优化包括：
    -   并行日志，所有openGauss磁盘表都支持。
    -   每个事务的日志缓冲和无锁事务准备。
    -   增量更新记录，即只记录变化。
    -   除了同步和异步之外，创新的NUMA感知组提交日志记录。
    -   最先进的数据库检查点（CALC，Checkpointing Asynchronously using Logical Consistency）使内存和计算开销降到最低。

-   高SQL覆盖率和功能集：MOT通过扩展的PostgreSQL外部数据封装（FDW）以及索引，几乎支持完整的SQL范围，包括存储过程、用户定义函数和系统函数调用。
-   使用PREPARE语句的查询原生编译：通过使用PREPARE客户端命令，可以以交互方式执行查询和事务语句。这些命令已被预编译成原生执行格式，也称为Code-Gen或即时（Just-in-Time，JIT）编译。这样可以实现平均30%的性能提升。在可能的情况下，应用编译和轻量级执行；否则，使用标准执行路径处理适用的查询。Cache Plan模块已针对OLTP进行了优化，在整个会话中甚至使用不同的绑定设置以及在不同的会话中重用编译结果。
-   MOT和openGauss数据库的无缝集成：MOT是一个高性能的面向内存优化的存储引擎，已集成在openGauss包中。MOT的主内存引擎和基于磁盘的存储引擎并存，以支持多种应用场景，同时在内部重用数据库辅助服务，如WAL重做日志、复制、检查点和恢复高可用性等。用户可以从基于磁盘的表和MOT的统一部署、配置和访问中受益。根据特定需求，灵活且低成本地选择使用哪种存储引擎。例如，把会导致瓶颈的高度性能敏感数据放入内存中。

## MOT应用场景<a name="section926403410387"></a>

MOT可以根据负载的特点，显著加快应用程序的整体性能。MOT通过提高数据访问和事务执行的效率，并通过消除并发执行事务之间的锁和锁存争用，最大程度地减少重定向，从而提高了事务处理的性能。

MOT的极速不仅因为它在内存中，还因为它围绕并发内存使用管理进行了优化。数据存储、访问和处理算法从头开始设计，以利用内存和高并发计算的最新先进技术。

openGauss允许应用程序随意组合MOT和基于标准磁盘的表。对于启用已证明是瓶颈的最活跃、高争用和对性能敏感的应用程序表，以及需要可预测的低延迟访问和高吞吐量的表来说，MOT特别有用。

MOT可用于各种应用，例如：

-   高吞吐事务处理：这是使用MOT的主要场景，因为它支持海量事务，同时要求单个事务的延迟较低。这类应用的例子有实时决策系统、支付系统、金融工具交易、体育博彩、移动游戏、广告投放等。
-   性能瓶颈加速：存在高争用现象的表可以通过使用MOT受益，即使该表是磁盘表。由于延迟更低、竞争和锁更少以及服务器吞吐量能力增加，此类表（除了相关表和在查询和事务中一起引用的表之外）的转换使得性能显著提升。
-   消除中间层缓存：云计算和移动应用往往会有周期性或峰值的高工作负载。此外，许多应用都有80%以上负载是读负载，并伴有频繁的重复查询。为了满足峰值负载单独要求，以及降低响应延迟提供最佳的用户体验，应用程序通常会部署中间缓存层。这样的附加层增加了开发的复杂性和时间，也增加了运营成本。  MOT提供了一个很好的替代方案，通过一致的高性能数据存储来简化应用架构，缩短开发周期，降低CAPEX和OPEX成本。
-   大规模流数据提取：MOT可以满足云端（针对移动、M2M和物联网）、事务处理（Transactional Processing，TP）、分析处理（Analytical Processing，AP）和机器学习（Machine Learning，ML）的大规模流数据的提取要求。MOT尤其擅长持续快速地同时提取来自许多不同来源的大量数据。这些数据可以在以后进行处理、转换，并在速度较慢的基于磁盘的表中进行移动。另外，MOT还可以查询到一致的、最新的数据，从而得出实时结果。在有许多实时数据流的物联网和云计算应用中，通常会有专门的数据摄取和处理。例如，一个Apache Kafka集群可以用来提取10万个事件/秒的数据，延迟为10ms。一个周期性的批处理任务会将收集到的数据收集起来，并将转换格式，放入关系型数据库中进行进一步分析。MOT可以通过将数据流直接存储在MOT关系表中，为分析和决策做好准备，从而支持这样的场景（同时消除单独的数据处理层）。这样可以更快地收集和处理数据，MOT避免了代价高昂的分层和缓慢的批处理，提高了一致性，增加了分析数据的实时性，同时降低了总拥有成本（Total Cost of Ownership，TCO）。
-   降低TCO：提高资源利用率和消除中间层可以节省30%到90%的TCO。

## 不支持的数据类型<a name="zh-cn_topic_0283137737_zh-cn_topic_0280525140_section41636693"></a>

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
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

## 使用MOT<a name="section16922105712433"></a>

1.  授予用户权限

    以授予数据库用户对MOT存储引擎的访问权限为例。每个数据库用户仅执行一次，通常在初始配置阶段完成。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >MOT通过外部数据封装器（Foreign Data Wrapper，FDW）机制与openGauss数据库集成，所以需要授权用户权限。

    要使特定用户能够创建和访问MOT（DDL、DML、SELECT），以下语句只执行一次：

    ```
    GRANT USAGE ON FOREIGN SERVER mot_server TO <user>;
    ```

    所有关键字不区分大小写。

2.  创建/删除MOT

    只有MOT中的创建和删除表语句与openGauss中基于磁盘的表的语句不同。SELECT、DML和DDL的所有其他命令的语法对于MOT表和openGauss基于磁盘的表是一样的。

    -   创建MOT：

        ```
        create FOREIGN table test(x int) [server mot_server];
        ```

    -   以上语句中：
        -   始终使用FOREIGN关键字引用MOT。
        -   在创建MOT表时，\[server mot\_server\]部分是可选的，因为MOT是一个集成的引擎，而不是一个独立的服务器。
        -   上文以创建一个名为test的内存表（表中有一个名为x的整数列）为例。在下一节（创建索引）中将提供一个更现实的例子。
        -   如果postgresql.conf中开启了增量检查点，则无法创建MOT。因此请在创建MOT前将enable\_incremental\_checkpoint设置为off。

    -   删除名为test的MOT：

        ```
        drop FOREIGN table test;
        ```

3.  为MOT创建索引

    支持标准的openGauss创建和删除索引语句。

    例如：

    ```
    create index  text_index1 on test(x) ;
    ```

    创建一个用于TPC-C的ORDER表，并创建索引：

    ```
    create FOREIGN table bmsql_oorder ( 
      o_w_id       integer      not null, 
      o_d_id       integer      not null, 
      o_id         integer      not null, 
      o_c_id       integer not null, 
      o_carrier_id integer,          
      o_ol_cnt     integer, 
      o_all_local  integer, 
      o_entry_d    timestamp, 
      primary key (o_w_id, o_d_id, o_id) 
    ); 
    create index  bmsql_oorder_index1 on bmsql_oorder(o_w_id, o_d_id, o_c_id, o_id) ;
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >在MOT名字之前不需要指定FOREIGN关键字，因为它仅用于创建和删除表的命令。


## 将磁盘表转换为MOT<a name="section36781485016"></a>

磁盘表直接转换为MOT尚不能实现，这意味着尚不存在将基于磁盘的表转换为MOT的ALTER TABLE语句。

下面介绍如何手动将基于磁盘的表转换为MOT，如何使用gs\_dump工具导出数据，以及如何使用gs\_restore工具导入数据。

-   前置条件检查

    检查待转换为MOT的磁盘表是否包含所有需要的列。

    检查表中是否包含任何不支持的列数据类型，具体参见“不支持的数据类型”。

    如果不支持特定列数据类型，则建议首先创建一个更新了列数据类型的磁盘表。此表内容与原始表相同，只是所有不支持的数据类型都已转换为支持的数据类型。

    使用以下脚本导出该备磁盘表，然后导入到MOT中。

-   转换

    要将基于磁盘的表转换为MOT，请执行以下步骤：

    1.  暂停应用程序活动。
    2.  使用gs\_dump工具将表数据转储到磁盘的物理文件中。请确保使用data only。
    3.  重命名原始基于磁盘的表。
    4.  创建同名同模式的MOT。请确保使用创建FOREIGN关键字指定该表为MOT。
    5.  使用gs\_restore将磁盘文件的数据加载/恢复到数据库表中。
    6.  浏览或手动验证所有原始数据是否正确导入到新的MOT中。下面将举例说明。
    7.  恢复应用程序活动。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >由于表名称保持不变，应用程序查询和相关数据库存储过程将能够无缝访问新的MOT，而无需更改代码。请注意，MOT目前不支持跨引擎多表查询（如使用Join、Union和子查询）和跨引擎多表事务。因此，如果在多表查询、存储过程或事务中访问原始表，则必须将所有相关的磁盘表转换为MOT，或者更改应用程序或数据库中的相关代码。

-   转换示例

    假设要将数据库benchmarksql中一个基于磁盘的表customer迁移到MOT中。

    将customer表迁移到MOT，操作步骤如下：

    1.  检查源表列类型。验证MOT支持所有类型，详情请参阅“不支持的数据类型”章节。

        ```
        benchmarksql-# \d+ customer 
                               Table "public.customer" 
         Column |  Type   | Modifiers | Storage | Stats target | Description 
        --------+---------+-----------+---------+--------------+------------- 
         x      | integer |           | plain   |              | 
         y      | integer |           | plain   |              | 
        Has OIDs: no 
        Options: orientation=row, compression=no
        ```

    2.  请检查源表数据。

        ```
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
         1 | 2 
         3 | 4 
        (2 rows)
        ```

    3.  只能使用gs\_dump转储表数据。

        ```
        $ gs_dump -Fc benchmarksql -a --table customer -f customer.dump -p 16000
        gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: dump database benchmarksql successfully 
        gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: total time: 332  ms
        ```

    4.  重命名源表。

        ```
        benchmarksql=# alter table customer rename to customer_bk; 
        ALTER TABLE
        ```

    5.  创建与源表完全相同的MOT。

        ```
        benchmarksql=# create foreign table customer (x int, y int); 
        CREATE FOREIGN TABLE 
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
        (0 rows)
        ```

    6.  将源转储数据导入到新MOT中。

        ```
        $ gs_restore -C -d benchmarksql customer.dump -p 16000
        restore operation successful 
        total time: 24  ms 
        Check that the data was imported successfully. 
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
         1 | 2 
         3 | 4 
        (2 rows) 
          
        benchmarksql=# \d 
                                        List of relations 
         Schema |    Name     |     Type      | Owner  |             Storage 
        --------+-------------+---------------+--------+---------------------------------- 
         public | customer    | foreign table | aharon | 
         public | customer_bk | table         | aharon | {orientation=row,compression=no} 
        (2 rows)
        ```



