# 查询原生编译

## 概述

MOT的另一个特性是，在预编译的完整查询需要执行之前，能够以原生格式（使用PREPARE语句）准备并解析这些查询。

这种原生格式方便后续更有效地执行（使用EXECUTE命令）。这种执行类型速度要快得多，因为原生格式在执行期间绕过多个数据库处理层，从而获得更好的性能。

这种分工避免了重复的解析分析操作。查询和事务语句可以交互执行。此功能有时称为即时（Just-In-Time，JIT）查询编译。

### 查询编译：PREPARE语句<a name="section66676052"></a>

若要使用MOT的原生查询编译，请在执行查询之前调用PREPARE客户端语句。MOT将预编译查询和（或）从缓存预加载先前预编译的代码。

下面是SQL中PREPARE语法的示例：

```
PREPARE name [ ( data_type [, ...] ) ] AS statement 
```

PREPARE在数据库服务器中创建一个预处理语句，该语句是一个可用于优化性能的服务器端对象。

### 运行命令<a name="section63213558"></a>

发出EXECUTE命令时，将解析、分析、重写和执行预处理语句。这种分工避免了重复的解析分析操作，同时使执行计划依赖于特定的设置值。

下面是在Java应用程序中调用PREPARE和EXECUTE语句的示例。

```
conn = DriverManager.getConnection(connectionUrl, connectionUser, connectionPassword); 

// Example 1: PREPARE without bind settings 
String query = "SELECT * FROM getusers";  
PreparedStatement prepStmt1 = conn.prepareStatement(query); 
ResultSet rs1 = pstatement.executeQuery()) 
while (rs1.next()) {…} 

// Example 2: PREPARE with bind settings 
String sqlStmt = "SELECT * FROM employees where first_name=? and last_name like ?"; 
PreparedStatement prepStmt2 = conn.prepareStatement(sqlStmt); 
prepStmt2.setString(1, "Mark"); // first name “Mark” 
prepStmt2.setString(2, "%n%"); // last name contains a letter “n” 
ResultSet rs2 = prepStmt2.executeQuery()) 
while (rs2.next()) {…}
```

MOT编译支持的特性和不支持的特性见下文。

### 轻量执行支持的查询<a name="section32051116"></a>

以下查询类型适合轻量执行：

- 简单点查询
    - SELECT \(including SELECT for UPDATE\)
    - UPDATE
    - DELETE

- INSERT查询
- 引用主键的完整前缀的范围UPDATE查询
- 引用主键的完整前缀的范围SELECT查询
- JOIN查询，其中一部分或两部分重叠为点查询
- 引用每个连接表中主键的完整前缀的JOIN查询

### 轻量执行不支持的查询<a name="section20024589"></a>

任何特殊的查询属性都不适用于轻量执行。特别是如果以下条件中的任何一项适用，则该查询不适合轻量执行。有关更多信息，请参阅“原生编译和轻量执行不支持的查询”。

需要强调一点，如果查询语句不适用原生编译和轻量执行，不向客户端报告错误，查询仍以正常和规范的方式执行。

有关MOT原生编译功能的详细信息，请参阅 “查询原生编译”或“查询原生编译（JIT）”的有关内容。

## JIT存储过程

JIT存储过程（JIT SP）由openGauss MOT引擎（从5.0版本开始）支持，其目标是提供更高的性能和更低的延迟。

JIT SP是指通过LLVM运行时代码生成和执行库来生成代码、编译和执行存储过程。JIT SP仅对访问MOT表的存储过程可用，对用户完全透明。跨引擎事务的存储过程将由标准的PL/pgSQL执行。加速级别取决于存储过程逻辑复杂度。例如，一个真实的客户应用程序为不同的存储过程实现了20%、44%、300%和500%的加速，将存储过程延迟减少到数十毫秒。

在调用存储过程的查询PREPARE阶段或第一次执行存储过程时，JIT模块尝试将存储过程SQL转换为基于C的函数，并在运行时（使用LLVM）编译。如果成功，连续存储过程调用，MOT将执行编译函数，从而获得性能增益。如果无法生成编译函数，存储过程将由标准的PL/pgSQL执行。这两种情况对用户完全透明。

您可以参考[MOT JIT诊断](#mot-jit诊断)了解有用的诊断信息。

## MOT JIT诊断

### mot_jit_detail

该内置函数用于查询JIT编译（代码生成）的详细信息。

#### 使用示例

```
select * from mot_jit_detail();

select proc_oid, substr(query, 0, 50), namespace, jittable_status, valid_status, last_updated, plan_type, codegen_time from mot_jit_detail();
```

#### 输出说明

<table><thead align="left"><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a>字段</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a>proc_oid</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a>过程OID（数据库中过程的真实对象ID）。0表示查询。</p>
</td>
</tr>
<tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>查询字符串或存储过程名称。</p>
</td>
</tr>  
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">查询或过程所属的命名空间。对于过程和顶级查询，值为GLOBAL。对于所有调用查询、子查询，此字段将显示父信息。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p29314576162914">jittable_status</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><ul>是否为JIT查询或过程：<li><strong>jittable</strong>：JIT查询或过程</li><li><strong>unjittable</strong>：不是JIT查询或过程</li><li><strong>invalid</strong>：无效状态（DDL或JIT编译进行中导致失效后的临时状态）</li></ul>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a>valid_status</p>
</td>
    <td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p64149272191943">查询或过程是否有效：<ul><li><strong>valid</strong>：查询或过程有效</li><li><strong>unavailable</strong>：JIT编译进行中</li><li><strong>error</strong>：错误状态</li><li><strong>dropped</strong>：过程已删除</li><li><strong>replaced</strong>：过程已替换</li></ul></p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">上次更新状态时的时间戳。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>plan_type</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">表示存储过程或查询类型。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>codegen_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">代码生成（JIT编译）所需的总时间，单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>verify_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM验证时间（内部），单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>finalize_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM完成时间（内部），单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>compile_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM编译时间（内部），单位为微秒。</p>
</td>
</tr>
</tbody>
</table>

### mot_jit_profile

此内置函数用于查找查询或存储过程执行的分析数据（性能数据）。

#### 使用示例

```
select * from mot_jit_profile();

select proc_oid, id, parent_id, substr(query, 0, 50), namespace, weight, total, self, child_gross, child_net from mot_jit_profile();
```

#### 输出说明

<table><thead align="left"><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a>字段</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a>proc_oid</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a>过程OID（数据库中过程的真实对象ID）。0表示查询。</p>
</td>
</tr>
 <tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>用于操控输出的内部ID。</p>
</td>
</tr> 
  <tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>parent_id</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>父ID（内部ID）。仅适用于子查询和子过程。<strong>-1</strong>用于顶级查询和过程。</p>
</td>
</tr> 
<tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>查询字符串或存储过程名称。</p>
</td>
</tr>  
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">查询或过程所属的命名空间。对于过程和顶级查询，值为GLOBAL。对于所有调用查询、子查询，此字段将显示父信息。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p29314576162914">weight</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p>执行子查询或子过程的平均次数（每执行一次父存储过程），单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a>total</p>
</td>
    <td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p64149272191943">执行查询或过程所需的总时间，单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>self</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">查询或过程所花费的时间，不包括子查询和子过程所花费的时间，单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>child_gross</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">执行所有子查询和子过程所花费的总时间（child_net+准备执行所有子查询和子过程所花费的时间），单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>child_net</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">所有子查询和子过程所花费的总时间，即，∑（child总数*weight），单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>def_vars</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">定义变量（内部）所需的时间，单位为微秒。</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>init_vars</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">初始化变量（内部）所需的时间，单位为微秒。</p>
</td>
</tr>
</tbody>
</table>

### 其他

另外，[PG_PROC](../database_reference/PG_PROC.md)系统表也可用于获取存储过程和函数的有关信息。

例如，存储过程内容的查询如下：

```
select proname,prosrc from pg_proc where proname='sp_call_filter_rules_100_1';
```
