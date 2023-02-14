# 扩展FDW与其他openGauss特性

openGauss基于PostgreSQL，而PostgreSQL没有内置存储引擎适配器，如MySQL的handlerton。为了使MOT存储引擎能够集成到openGauss中，我们利用并扩展了现有的FDW机制。随着FDW引入PostgreSQL 9.1，现在可以将这些外表和数据源呈现为统一、本地可访问的关系来访问外部管理的数据库。

和PostgreSQL不同的是，MOT存储引擎是嵌入在openGauss内部的，表由openGauss管理。openGauss规划器和执行器控制表的访问。MOT从openGauss获取日志和检查点服务，并参与openGauss恢复过程和其他过程。

我们把正在使用或正在访问MOT存储引擎的所有组件称为封装。

下图显示了MOT存储引擎如何嵌入到openGauss中及其对数据库功能的双向访问。

**图 1**  openGauss内置MOT存储引擎——外部数据库的FDW访问<a name="fig23070208"></a>
![](figures/MOT-architecture.png "MOT架构")

我们通过扩展和修改FdwRoutine结构来扩展FDW的能力，以便引入在MOT引入之前不需要的特性和调用。例如，新增了对以下功能的支持：添加索引、删除索引/表、截断、真空和表/索引内存统计。重点放在了FdwRoutine结构与openGauss日志、复制和检查点机制的集成，以便通过故障为跨表事务提供一致性。在这种情况下，MOT本身有时会通过FDW层发起对openGauss功能的调用。

## 创建表和索引<a name="section40965770"></a>

为了支持MOT表的创建，重用了标准的FDW语法。

例如，创建FOREIGN表。

MOT DW机制将指令传递给MOT存储引擎，用于实际建表。同样，我们支持创建索引（create index …）。此功能以前在FDW中不可用，因为表由外部管理，不需要此功能。

为了在MOT FDW中支持两者，ValidateTableDef函数实际上创建了指定的表。它还处理该关系的索引创建、DROP TABLE和DROP INDEX以及先前在FDW中不支持的VACUUM和ALTER TABLE。

## 索引规划与执行的使用方法<a name="section33147611"></a>

查询分为两个阶段：规划和执行。在规划阶段（可能在多次执行中才出现一次），选择扫描的最佳索引。该选择基于匹配查询的WHERE子句、JOIN子句和ORDER BY条件。在执行期间，查询迭代相关的表行，并执行各种任务，如每次迭代的更新或删除。插入是一种特殊情况——表将行添加到所有索引中，且不需要扫描。

-   **规划器**：在标准FDW中，将查询传递给外部数据源执行。这意味着索引过滤和实际规划（例如索引的选择）不在数据库中本地执行，而是在外部数据源中执行。在内部，FDW向数据库规划器返回总体计划。MOT表的处理方式与磁盘表类似。这意味着相关的MOT索引得到过滤和匹配，最小化遍历行集的索引被选择并添加到计划中。
-   **执行器**：查询执行器使用所选的MOT索引来迭代表的相关行。每个行都由openGauss封装检查，根据查询条件调用update或delete处理相应的行。

## 持久性、复制性和高可用性<a name="section29893043"></a>

存储引擎负责存储、读取、更新和删除底层内存和存储系统中的数据。存储引擎不处理日志、检查点和恢复，特别是因为某些事务包含多个不同存储引擎的表。因此，为了数据持久化和复制，openGauss封装使用如下高可用性设施：

-   **持久性**：MOT引擎通过WAL记录使数据持久化，WAL记录使用openGauss的XLOG接口。这为openGauss提供了使用相同API进行复制的好处。具体请参见[MOT持久性概念](MOT持久性概念.md)。
-   **检查点设定：**通过向openGauss Checkpointer注册回调来启用MOT检查点每当执行通用数据库检查点时，MOT检查点也被调用。MOT保留了检查点的日志序列号（LSN），以便与openGauss恢复对齐。MOT Checkpointing算法是高度优化的异步算法，不会停止并发事务。具体请参见[MOT检查点概念](MOT检查点概念.md)。
-   **恢复：**启动时，openGauss首先调用MOT回调，通过加载到内存行并创建索引来恢复MOT检查点，然后根据检查点的LSN重放记录来执行WAL恢复。MOT检查点使用多线程并行恢复，每个线程读取不同的数据段。这使MOT检查点在多核硬件上的恢复速度相当快，尽管可能比仅重放WAL记录的基于磁盘的表慢一些。具体请参见[MOT恢复概念](MOT恢复概念.md)。

## VACUUM和DROP<a name="section601931"></a>

为了最大化MOT功能，我们增加了对VACUUM、DROP TABLE和DROP INDEX的支持。这三个操作都使用排他表锁执行，这意味着不允许在表上并发事务。系统VACUUM调用一个新的FDW函数执行MOT真空，而ValidateTableDef\(\)函数中增加了DROP。

## 删除内存池<a name="section5417380"></a>

每个索引和表都跟踪它使用的所有内存池。DROP INDEX命令用于删除元数据。内存池作为单个连续块被删除。MOT VACUUM只对已使用的内存进行压缩，因为内存回收由基于epoch的垃圾收集器（GC）在后台持续进行。为了执行压缩，我们将索引或表切换到新的内存池，遍历所有实时数据，删除每行并使用新池插入数据，最后删除池，就像执行DROP那样。

## 查询本机编译（JIT）<a name="section48756423"></a>

MOT引擎的FDW适配器还包含一个轻量级执行路径，该路径使用LLVM编译器执行JIT编译查询。有关MOT查询本机编译的更多信息可以在[MOT查询原生编译（JIT）](MOT查询原生编译_JIT.md)一节中找到。
