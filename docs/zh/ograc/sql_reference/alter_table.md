- drop_parition_clause
  - DROP PARTITION partition_name
    删除一个分区，partition_name 是分区名称。
  - DROP SUBPARTITION subparition_name
    删除二级分区子分区，subpartiion_name为子分区的名字。

- split_partition_clause

  分裂分区，将指定的(子)分区分裂为两个(子)分区，原始分区里的数据将会重新分布到新的分区里。目前只有RANGE分区支持split操作。
  - (sub)partition_name
  将要分裂的（子）分区名称。
  - (sub)part_name1 (sub)part_name2
  分裂后新的（子）分区名称，注意这两个（子）分区名称不能重复。一级分区进行分裂后，只有最后一个新分区可以使用原分区名称。
  - range_value
  分裂的边界值。
  - UPADATE GLOBAL INDEXES
      - 如果指定update global indexes，且分区表有全局索引的时候，则数据重分布之后会自动重建全局索引。
      - 如果不指定，则全局索引处于invalid状态。

- exchange_partition_clause
  交换分区

  - WITH TABLE 设置需要交换的普通表的表名。

  - INCLUDING | EXCLUDING INDEXES 
    - INCLUDING INDEXES
      要交换索引 。
    - EXLUDINGINDEXES
      不需要交换索引。
  - WITH | WITHOUT VALIDATION
    - WITH VALIDATION
      需要校验数据。
    - WITHOUT VALIDATION
      不需要交换数据。

  - partition_clause
    需要交换的分区的信息

    - partition_name
    需要交换的分区名称
    - FOR（part_key value）
     当分区名不易获取的情况下，可以通过设置该分区键值用于指示需要交换的分区。

```
@说明：分区交换的使用约束

1.不支持RCR的表和索引进行交换。

2.不支持涉及外键约束的子句，例如cascade。若交换的两张表的任意表上有外键关系，则交换分区会报错。

3.交换的分区需要判断是否具有压缩、nologging Insert等属性，如果属性不相同则不允许交换。

4.交换的分区存在自增列的时候不允许交换。

6.交换的分区的表定义、索引定义、列定义完全相同时，才允许交换。
```

- modify_partition_clause
修改分区的属性
  - partition_name
     需要修改的分区名称。
  - INITRANS interger 
    对分区的初始数据页面上事务槽的个数进行修改，取值范围是[1,255]。
    - 修改指定分区的INITRANS属性，并且会同步修改该分区的所有子分区的INITRANS。
    - 对于新分配的页面，修改后的新值是有效的，对已经分配的老页面是无效的。
    ```
    @说明：INITRANS使用
       1.高并发oltp系统，当出现频繁的update/insert操作导致事务槽争用时，可以将INITRANS设为4-8(INITRANS=10时)，减少动态扩展开销。
       2.索引块的默认INITRANS=2可能无法满足高并发写入需求，可以将其设置为3。
    ```
    
  - storage_alter_clause
    表的存储空间的最大值。
    - UNLINITED
    说明不限制表存储空间的最大值。
    - interger[K|M|G|T]
    设置表的存储空间最大值，取值范围[1M,1T]。

- coalesce_partition_clause
  - COALESCE PARTITION
  先将最后一个分区的数据插入进前面的某个分区中之后，再将最后一个分区进行删除。
    - 仅限HASH分区的情况才能执行COALESCE_PARTITION语句，并且无需指定分区名称。
    - 如果只剩一个分区，不能执行COALESCE_PARTITION语句，否则会报错。
  - MODIFY_PARTITION partition_name COALESCE SUBPARTITION
  先将某个父分区的最后一个子分区的数据插入进前面某个分区里之后，再将最后一个分区进行删除。
    - 只有当子分区类型为hash分区的时候才能执行COALESCE SUBPARTITION语句，但是需指定需要执行收缩操作的父分区的名字，而子分区的名字无需指定。
    - 如果父分区下面只剩一个子分区，不能执行COALESCE_PARTITION语句，否则会报错。

- enable_disable_clause
启用或禁用约束
  - ENABLE：启动约束
  - DISABLE:禁用约束
  - VALIDATE:启用或禁用约束时，或约束被启用或禁用之后，需要保证已有数据是否符合约束。
  - NOCALIDATE:启用或禁用约束时，或约束被启用或禁用之后，不需要考虑已有数据是否符合约束。

使用VALIDATE或NOVALIDATE时，会对已有记录产生不同影响：无论是在启用或禁用约束的过程中，还是约束生效/失效后执行新增、修改操作时，若指定 VALIDATE，系统会校验已有记录是否符合约束要求；若存在不符合约束的记录，要么约束的启用/禁用操作会直接失败，要么后续新增、修改记录时会返回错误信息。而若使用 NOVALIDATE，无论在启用/禁用约束的环节，还是约束启用/禁用后的操作中，系统都不会检查已有记录是否符合该约束。

VALIDATE与NOVALIDATE的配置，并不会改变新增记录及更新记录的约束检查规则：无论选用 VALIDATE 还是 NOVALIDATE，只要通过ENABLE启用约束，系统都会对新增记录和待更新记录进行约束合规性校验；而一旦通过 DISABLE 禁用约束，系统则不会再对新增记录及更新记录执行该约束的相关检查。

当使用ENABLE启用约束时，若未明确指定NOVALIDATE，系统会默认应用VALIDATE模式，该模式的效果等同于 DISABLE NOVALIDATE：约束会被禁用，约束对应的索引会被删除，且允许对被约束的记录进行修改；而若在启用约束时明确指定 VALIDATE，则会产生如下效果：约束被禁用，约束字段上的索引被删除，同时不允许对任何被约束的记录执行修改操作。

**表 5-20** 关键字组合说明

<a name="zh-cn_topic_0283136979"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136979"><th class="cellrowborder" valign="top" width="15.701570157015702%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>关键字组合</p>
</th>
 <th class="cellrowborder" valign="top" width="32.753275327532755%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_02831369798"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>对已有记录是否进行检查符合约束</p>
</th>
<th class="cellrowborder" valign="top" width="51.54515451545154%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>对新增或修改记录是否进行检查符合约束</p>
</th>
</tr>
</thead>
<tbody>

<tr id="zh-cn_topic_0283136979">
<td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136979"><a name="zh-cn_topic_0283136979"></a><a name="zh-cn_topic_0283136979"></a>ENABLE VALIDATE</p></td>

<td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.4.1.2 "><a name="zh-cn_topic_03"></a><a name="zh-cn_topic_03"></a><a id="zh-cn_topic_03"></a>yes</p></td>
<td class="cellrowborder" valign="top" width="51%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_01"><a name="zh-cn_topic_01"></a><a name="zh-cn_topic_01"></a>yes</p></td>
</tr>

<tr>
    <td rowspan="1">ENABLE NOVALIDATE</td>
    <td>no</td>
    <td>yes</td>
</tr>

<tr>
    <td rowspan="1">DISABLE VALIDATE</td>
    <td>yes</td>
    <td>no</td>
</tr>

<tr>
    <td rowspan="1">DISABLE NOVALIDATE</td>
    <td>no</td>
    <td>no</td>
</tr>

</tbody>
</table>

- [PARITION | SUBPARTITION] NOLOGGING
  - NOLOGGING 
  启用或禁用分区上的NOLOGGING INSERT属性。
  - PARTITION NOLOGGING
  启用或禁用分区上的NOLOGGING INSERT属性。
  - SUBPARTITION NOLOGGING
  启用或禁用子分区上的NOLOGGING INSERT属性。
  表级与分区级的 NOLOGGING INSERT 属性相互独立、互不影响：某个分区是否启用 NOLOGGING INSERT 属性，与表上的该属性配置无关，仅由分区自身的 NOLOGGING INSERT 属性设置决定。而父子分区间的 NOLOGGING INSERT 属性存在关联规则：若父分区开启了 NOLOGGING INSERT 属性，其下所有子分区会同步启用该属性；反之，即使启用子分区的 NOLOGGING INSERT 属性，也不会对父分区的该属性状态产生任何影响。
  
  该特性使用时，需要注意以下约束：
  - NOLOGGING INSERT 该操作的目的是提升大量数据的入库性能，在表或分区上执行Nologging insert操作时，需避免与其他正常业务并发执行。这是因为Nologging insert不会记录 undo日志，若出现并发读取undo的情况，可能会导致正常业务报错。

  - NOLOGGING INSERT 数据入库操作全部完成后，建议及时提交事务，同时手动触发数据刷盘操作；待上述操作执行完毕后，再启动其他相关业务。这样做可有效保障数据安全性，防止因突发掉电情况导致数据丢失，进而避免需重新执行数据入库的重复操作。

  - NOLOGGING INSERT不会记录 undo 数据，因此完成数据导入后，强烈建议先及时提交事务，再开展其他业务操作 —— 这能防止其他业务因无法访问历史数据而出现异常。同时需注意，由于未生成 undo 日志，若同一事务中执行过 NOLOGGING INSERT，后续即便执行 rollback 操作（操作本身可正常执行），数据库内部也不会产生任何数据修改效果。故而，执行过 NOLOGGING INSERT 的事务，无法通过 rollback 操作回退到数据的历史版本。由于没有redo/undo，所以一旦发生任何异常，数据库不能继续保证数据一致性，因此需要删除表数据，重新执行导入操作。

  - Session级别的 NOLOGGING INSERT仅供内部工具使用，客户业务禁止采用该语法。对于客户业务场景，应使用表分区级的 NOLOGGING INSERT，以此替代Session级的NOLOGGING INSERT进行相关操作。

  - 开启逻辑复制或者在主备环境下不允许执行NOLOGGING INSERT。同时若数据库中有表或者分区对象存在NOLOGGING INSERT，则后续不允许动态添加备机。

  - 临时表不支持NOLOGGING INSERT属性的设置，临时表本身就带有不记录redo的属性，所以临时表不支持再设置nologging属性。

  - 若表或分区中已存在原有数据，则不允许启用 NOLOGGING INSERT 操作。关于版本兼容性需注意：支持表分区级 NOLOGGING INSERT 特性的数据库版本，不允许降级至不支持该特性的版本，但可正常升级；若两个数据库版本均支持表分区级 NOLOGGING INSERT 特性，则可不受限制地执行升级或降级操作（暂不考虑其他特性的兼容性影响）。此外，在启动数据库升级或降级流程前，用户需手动核查系统中是否存在 NOLOGGING 对象；若这些对象已无需保留 NOLOGGING 属性，建议先关闭该属性，再开展升级或降级操作。

  - 若在执行备份恢复操作前，未关闭对象的NOLOGGING INSERT属性，会导致该NOLOGGING属性扩散至恢复后的新环境中。用户需提前确认是否需要保留该属性的扩散效果：若无需将NOLOGGING属性同步到新环境，则应在备份操作执行前，先关闭对应对象的NOLOGGING属性。

- logic_replication_caluses
打开表逻辑复制开关或者关闭逻辑复制的开关，支持表级和表分区级逻辑复制开关的打开或关闭。
    - (sub)partition_name
      - 在表名后括号内填写表（子）分区名称，即可完成表分区级逻辑复制开关的设置。该操作支持针对未开启的表分区开关进行多次补充配置，但不支持直接在表级与表分区级开关之间切换。
      - SYS用户不会加载数据字典，基于这一特性，该用户不支持通过多次补充操作开启表分区逻辑复制开关。
    - ADD LOGICAL LOG(PRIMARY KEY)
      根据主键打开表逻辑复制开关。
    - ADD LOGICAL LOG(UNIQUE index_name)
      根据唯一索引打开逻辑复制开关。
    - DROP LOGICAL LOG
      关闭表级和分区级逻辑复制开关。

- rename_cloumn_clause
  修改表名。只能修改自己schama下的表名，不能修改系统表空间下的表名。


- set_interval_caluse
设置间隔分区，仅对分区表有效。
    - SET INTERVAL():将间隔分区表修改为范围分区表。
    - SET INTERVAL(interval_value):修改间隔分区表的间隔值，interval_value表示指定具体的间隔值数值。


示例：

- 添加某列
```
--删除表training
DROP TABLE IF EXISTS test;
--创建表test
CREATE TABLE test(student_id INT NOT NULL, course_name VARCHAR（30)，course_start_date DATETIME, course_end_date DATETIME, score INT);
- 修改列的数据类型
```
ALTER TABLE test MODIFY course_name VARCHAR(20);
```

--添加列full_score
ALTER TABLE test ADD full_score INT;
```
- 删除列
```
ALTER TABLE test DROP score;
```

- 添加约束
```
ALTER TABLE test ADD CONSTRANT test_const1 CHECK(student_id > 0);
ALTER TABLE test ADD CONSTRANT test_const2 UNIQUE(course_name);
```

- 约束重命名
```
ALTER TABLE test RENAME CONSTRANT test_const1 to test_cons3;
```    

- 删除约束
```
ALTER TABLE test DROP CONSTRANT test_const2;
```

- 重命名表
```
ALTER TABLE test RENAME TO test2025;
```

- 创建分区表
```
--删除表test_partition
DROP TABLE IF EXISTS test_partition;
--创建分区表test_partition
CREATE TABLE test_partition(
  student_id INT NOT NULL,
  course_name CHAR(20),
  exam_date DATETIME,
  socre INT)
PARTITION BY RANGE(staff_id)
(
PARTITION test_partition1 VALUES LESS THAN(100);
PARTITION test_partition2 VALUES LESS THAN(200);
PARTITION test_partition3 VALUES LESS THAN(300);
PARTITION test_partition4 VALUES LESS THAN(400);
);
```

- 添加分区test_partition5和test_partition6
```
ALTER TABLE test_partition ADD PARTITION test_partition5 VALUES LESS THAN(450);
ALTER TABLE test_partition ADD PARTITION test_partition6 VALUES LESS THAN(MAXVALUE);
```

- 删除分区test_partition3和test_partition4
```
--删除分区test_partition3
ALTER TABLE test_partition DROP PARTITION test_partition3;

--清空分区test_partition4
ALTER TABLE test_partition TRUNCATE PARTITION test_partition4;
```

- 分裂分区
```
ALTER TABLE test_partition SPILIT PARTITION test_partition5 AT(430) INTO (PARITION p1, PARTITION p2);
```

- 添加联合主键约束
```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(
  student_id int;
  class varchar(8);
  name varchar2(8);
  );
--添加联合主键约束
ALTER TABLE test_partition ADD CONSTRANT pk_test_partition PRIMARY KEY (student_id,name);
```

- 修改表的分区的MAXSIZE值
```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(o_id INT, o_char VARCHAR2(900)) STORAGE (MAXSIZE 5M INITIAL 1M)
PARTITION BY RANGE(o_id)(
PARTITION p1 VALUES LESS THAN(20) STORAGE (MAXSIZE 3M INITIAL 1M);
PARTITION p2 VALUES LESS THAN(50);
);
--修改表的存储空间的MAXSIZE值
ALTER TABLE test_partition STORAGE (MAXSIZE 10M)；
--添加分区，初始大小是5M最小值是2M
ALTER TABLE test_partitiontest ADD PARTITION p3 VALUES LESS THAN(34) STORAGE (MAXSIZE 5M INITIAL 2M);
--修改分区p1的最大值为2M
ALTER TABLE test_partition MODIFY PARTITION p1 STORAGE (MAXSIZE 2M);
```

- 修改表及分区的INITRANS值
```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(o_id INT, o_char VARCHAR2(1000)) INITRANS 10
PARTITION BY RANGE(o_id)(
PARTITION p1 VALUES LESS THAN(2) INITRANS 5;
PARTITION p2 VALUES LESS THAN(3);
);

--修改表的INITRANS值
ALTER TABLE test_partition INITRANS 20;
--修改表的分区的INITRANS值
ALTER TABLE test_partition MODIFY PARTITION p1 INITRANS 10;
```

- 打开或关闭表级的逻辑复制开关
```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(
  student_id INT PRIMARY KEY,
  course_name VARCHAR(50))
PARTITION BY RANGE(student_id)(
PARTITION p1 VALUES LESS THAN(10);
PARTITION p2 VALUES LESS THAN(50);
PARTITION p3 VALUES LESS THAN(100);
);
-- 打开表级的逻辑复制开关
ALTER TABLE test_partition ADD LOGICAL LOG(PRIMARY KEY);
-- 关闭表级的逻辑复制开关
ALTER TABLE test_partition DROP LOGICAL LOG;
```

- 打开或关闭表分区级逻辑复制开关
```
--删除表
DROP TABLE IF EXISTS test_partition;
--创建表
CREATE TABLE test_partition(
  student_id INT PRIMARY KEY,
  course_name VARCHAR(50))
PARTITION BY RANGE(student_id)(
PARTITION p1 VALUES LESS THAN(10);
PARTITION p2 VALUES LESS THAN(50);
PARTITION p3 VALUES LESS THAN(100);
);
-- 打开表分区级的逻辑复制开关
ALTER TABLE test_partition(p1,p2) ADD LOGICAL LOG(PRIMARY KEY);
-- 删除表分区的同时会删除表分区级逻辑复制开关
ALTER TABLE test_partition DROP PARITION p1;
-- 关闭表级的逻辑复制开关
ALTER TABLE test_partition DROP LOGICAL LOG;
```





