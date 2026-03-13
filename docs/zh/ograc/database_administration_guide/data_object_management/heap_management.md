# Heap Management

## 简介

Heap Page（堆页） 是OGRAC存储表数据的一种物理存储结构。Heap page中存储的数据没有顺序，行的插入是按需分配的，通常用于无索引的表或非排序表中。当向表中插入数据没有空间时，会以extent为单位进行申请与扩展。

## 段页式结构

OGRAC的表空间层级结构可以分为`TableSpace->Segment->Extent->Page->Row`。
表空间（`TableSpace`）由多个段（`Segment`）组成，常见的段类型由数据段、索引段、回滚段等。`Segment`的下一层级为`Extent`，随后是`Page`，默认`1 extent = 8 Page`。页是数据库磁盘管理的最小操作单元，OGRAC默认页大小为`8K`。
查询当前数据库的`page size`：`SHOW PARAMETER PAGE_SIZE;`。

## Heap page主要结构

`Heap Page`主要由`page_head`，`page_tail`，`itl`，`row_dir`(`row directory`)以及插入的`row`数据组成。

- `Page_head`主要存储页面ID、类型、大小、`SCN`、`table_id`、`user_id`、 `freeBegin`、`freeEnd`、`freeSize`，并且管理`dir`以及`itl`。
- `ITL`列表：管理当前页面上的事务信息，用于事务的隔离性判断，初始数量为2，随着一个页面上并发事务的增加可扩展（`itl`在一个`page`上一旦扩充，其空间不会被还回给页空间）。
- `row_dir`：行数据的偏移地址字典，一个`dir`对应一个`row`，`row`被删除后其对应的dir也会消失，通过`dir`可以找到一个`row`在`page`中的位置。
- `freeBegin`、`freeEnd`、`freeSize`三者用于当前页面上的空闲空间管理。
- `table_id`、`user_id`标识表与用户，特别的，一个页是专属于一个表的，不会出现一个页上的数据跨表存在。在给表分配页空间时，按照`extent`进行分配，也就是默认一次分配给一个表8个`page`。

## Heap page空闲空间

OGRAC 的 `Heap Page` 空闲空间管理机制实现了局部高效利用与全局智能分配的统一，兼顾了性能、灵活性与存储效率。

### Heap page空闲空间管理

动态感知空闲容量：OGRAC的`heap page`主要通过三个属性来管理页面上的空闲空间：`freeBegin`表示空闲空间的起始位置，`freeEnd`表示空闲空间的末尾，`freeSize`表示当前页面总的空闲空间的大小。通常`freeSize >= freeEnd – freeBegin`，因为在页中删除某行数据时只是将`row_header`中的`is_deleted`设置成`TRUE`，实际空间并没有得到重新利用，因此`freeBegin`前还可能存在空闲空间。

按需触发页面压缩：OGRAC使用页面压缩（`page compact`）处理空闲空间，页面压缩的触发时机有两种：
当一条数据`insert`到当前页面时，或者当前页面的某行数据被`update`，但`update`后原有`row`的空间不足，需要进行"行迁移"到页内的空闲空间，假设当前需要的空间为`rowSize`，此时需要经历以下几个阶段：

- 判断当前页面的`freeSize`与`rowSize`的大小关系，如果`freeSize`不足，则该行数据不能插入这个页面；
- 如果`freeSize >= rowSize`，但是`freeEnd – freeBegin`的空间小于`rowSize`，此时需要进行页面压缩，即清理页面中`freeBegin`前已经被删除的行空间，使`freeBegin`提前，达到`freeSize = freeEnd – freeBegin`，随后在`freeBegin`处插入新的数据。

### Heap page空闲空间调度

 单个页面的空间管理是局部优化，而整张表的全局层面通过 Map Tree 结构实现多页面间的智能路由。`Insert` 操作可根据待插入数据大小，快速定位最合适的 `Heap Page`，避免盲目遍历或负载不均。

- Heap page的空闲空间通过`Map Tree`进行维护与管理
- 通常创表完成后，该表不会挂载任何`heap page`，当第一条语句插入后，会从表空间中申请一个`extent`（默认`8 heap page`）的空间分配给该表，其中第一个页面作为`segment`，第二个页面作为`map page`管理`heap page`，`map page`中的`map_node`存储其管理的所有`heap page`的`page_id`，其余作为`heap page`存储数据使用。
- 初始状态下，一个`Map Tree`上只有一个`map page`以及6个`heap page`。
- 每个`map page`初始化时，会初始化6个`list`链表，每个`list`对应不同的空间范围（范围越来越大），后续每个`heap page`会根据其当前`freeSize`的大小，将其`map page`中对应的`map_node`挂载到对应的`list`中（list可能为空），每一个`map_node`与`heap page`是一一对应的关系，也就是说，`map page`通过这个list链表可以清楚的知晓当前所管理的`heap page`的空闲空间的分布情况。
- 一个`map page`最多管理`1014`个`heap page`，随着表插入数据的增加，`page`页的数量增加，超过阈值后将重新申请新的`map page`进行管理，此时层高变为2，`map page`同样需要`root`节点的`map page`进行管理，此时`map_node`存储`map page`的`page_id`，根节点的`map page`在`segment page`上。
- 对于该`Map Tree`的结构，`heap page`只出现在叶子节点，只有每一层的最后一个`map page`可以插入新的下层节点进行扩展，上层管理`map page`的`map page`的list中存储的是`map page`的`map_node`。

### Heap page空闲页面查找

当对表`Insert`一条数据时，具体其插入到哪一个`heap page`上需要根据其`rowSize`通过`Map Tree`找到具有合适`freeSize`的和`heap page`。主要经过以下几个过程：首先通过`rowSize`从计算出其归属于哪一个list中，视为`targetList`；随后从`root`节点开始，对每一个`map page`，从`targetList`到`list[5]`，随机选择一个list中的`map_node`，根据这个`map_node`找到下一层对应的`map page`，循环往复，直至找到一个确定`heap page`。然后将该行数据插入到对应的`heap page`中，并调整该`heap page`所对应的`map_node`所在的`list`的位置。

## Heap page优势与价值

OGRAC中的 `Heap Page` 管理机制在物理存储层为数据库的高性能、高可用和可扩展性提供了坚实支撑。

- 高效的写入性能：插入操作无需维护数据顺序，直接使用 `freeBegin` 指针向后追加，实现低复杂度的快速写入。支持以 Extent（8个Page）为单位批量分配空间，减少频繁申请带来的 I/O 开销，提升批量导入效率。
- 灵活的空间复用机制：页面压缩机制，在需要新空间时才回收已删除行的空间，平衡了清理成本与写入延迟。
- 智能化的空闲空间调度：引入`Map Tree`层级结构，将多个`Heap Page`按照 `freeSize` 分类组织到不同链表中，写数据时可根据 `rowSize` 快速匹配最合适的数据页，避免全表扫描或随机分布造成的单个页面高并发问题，提升 IO 效率。
- 良好的可扩展性：`Map Tree` 支持层级扩展，单个`map page`可管理海量 `Heap Page`，能够以较低层级管理大量数据页。
