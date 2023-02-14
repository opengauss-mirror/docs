# MOT查询原生编译（JIT）

MOT使您可以在执行之前以原生格式（使用PREPARE语句）准备并分析预编译的完整查询。

这种本机格式以后可以更有效地执行（使用EXECUTE命令）。这种类型的执行效率要高得多，因为在执行期间，本机格式绕过了多个数据库处理层。这种分工避免了重复的解析分析操作。Lite Executor模块负责执行预准备查询，其执行路径比封装执行的常规通用计划要快得多。这是通过LLVM使用实时（JIT）编译来实现的。此外，以伪LLVM的形式提供具有潜在相似性能的类似解决方案。

下面是SQL中的PREPARE语法示例–

```
PREPARE name [ ( data_type [, ...] ) ] AS statement
```

下面是一个如何在Java应用程序中调用PREPARE和EXECUTE语句的示例：

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

## Prepare<a name="section48891955"></a>

**Prepare**创建一个预处理语句。预处理语句是服务器端对象，可用于优化性能。执行PREPARE语句时，将解析、分析和重写指定的语句。

如果查询语句中提到的表是MOT表，则MOT编译负责对象准备，并基于LLVM将查询编译成IR字节码进行特殊优化。

每当需要新的查询编译时，都会分析查询，并使用实用程序GsCodeGen对象和标准LLVM JIT API（IRBuilder）为查询生成合适的IR字节代码。完成字节代码生成后，代码将被JIT编译到单独的LLVM模块中。编译的代码生成一个C函数指针，以后可以调用该指针直接执行。请注意，这个C函数可以被许多线程并发调用，只要每个线程提供不同的执行上下文（详细信息如下）。每个这样的执行上下文称为“JIT上下文”。

为了进一步提高性能，MOT JIT对其LLVM代码结果应用缓存策略，使它们能够被在不同会话中的相同查询重用。

## 执行<a name="section37374419"></a>

当发出EXECUTE命令时，会计划并执行预准备语句（上文所述）。这种分工避免了重复的解析分析工作，同时使执行计划依赖于提供的特定设置值。

当生成的执行查询命令到达数据库时，它使用相应的IR字节代码，在MOT引擎中直接执行该代码，并且执行效率更高。这称为“轻量级执行”。

此外，为了可用性，Lite Executor维护了一个预先分配的JIT源池。每个会话预分配自己的会话本地JIT上下文对象池（用于重复执行预编译查询）。

有关更多详细信息，请参阅“支持Lite执行的查询”和“不支持Lite执行的查询”部分。

## JIT编译对比-openGauss盘表与MOT表<a name="section825456"></a>

目前，openGauss包含针对其基于磁盘的表的JIT/CodeGen查询优化的两种主要形式：

-   加速表达式计算，例如在WHERE子句、目标列表、聚合和投影中。
-   内联小函数调用。

这些优化是局部的（从某种意义上说，它们不优化整个解释的运算符树或完全替换它），并且主要针对CPU绑定的复杂查询，通常在OLAP用例中可见。查询的执行是在使用解释运算符树的拉模型（Volcano样式处理）中执行的。激活后，每次执行查询时都会执行编译。目前，尚未提供生成的LLVM代码的缓存及其跨会话和查询的重用。

相反，MOT JIT优化为符合MOT JIT优化条件的整个查询提供了LLVM代码。结果代码用于直接执行MOT表，而解释的运算符模型则完全放弃。结果实际上是为整个特定查询执行生成的手写LLVM代码。

另一个显着的概念差异是MOT LLVM代码只在查询的PREPARE阶段为准备查询生成，而不是在查询执行时生成。由于OLTP查询的运行时间相当短，因此这对于OLTP场景尤其重要，这无法在每次查询执行期间生成代码和执行较长的查询编译时间。

最后，在openGauss中，激活PREPARE意味着于同一个会话中具有不同参数的执行之间重用生成的计划。同样，MOT JIT对其LLVM代码结果应用了缓存策略，并扩展了缓存策略，以便在不同会话之间重用。因此，单个查询可以只编译一次，其LLVM代码可以在多个会话中重用，这同样有利于OLTP场景。
