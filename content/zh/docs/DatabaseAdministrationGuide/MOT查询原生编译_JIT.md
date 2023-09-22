# MOT查询原生编译（JIT）

原生编译（JIT）是MOT提供极低时延和高吞吐量性能的关键技术之一。支持两种原生编译（使用PREPARE语句）：JIT存储过程（JIT SP）和JIT查询。
以下各节介绍如何在应用程序中使用这两种机制。

## JIT存储过程（JIT SP）
JIT SP是指通过LLVM运行时代码生成和编译库来生成代码、编译和执行存储过程。JIT SP仅对访问MOT表的存储过程可用，对用户完全透明。加速级别取决于存储过程逻辑。例如，一个真实的客户应用程序为不同的存储过程实现了20%、44%、300%和500%的加速，减少了存储过程延迟。
在调用存储过程的查询PREPARE阶段或第一次执行存储过程时，JIT模块尝试将存储过程SQL转换为基于C的函数，并在运行时（使用LLVM）编译。如果连续存储过程调用成功，MOT将执行编译函数，从而获得性能增益。如果无法生成编译函数，存储过程将由标准的PL/pgSQL执行。这两种情况对用户完全透明。

## JIT查询
MOT使您可以在执行之前以原生格式（使用PREPARE语句）准备并分析预编译的完整查询。

这种本机格式以后可以更有效地执行（使用EXECUTE命令）。这种类型的执行效率要高得多，因为在执行期间，本机格式绕过了多个数据库处理层。这种分工避免了重复的解析分析操作。Lite Executor模块负责执行预准备查询，其执行路径比封装执行的常规通用计划要快得多。这是通过LLVM使用实时（JIT）编译来实现的。此外，以伪LLVM的形式提供具有潜在相似性能的类似解决方案。

下面是SQL中的PREPARE语法示例：

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

您可以参考MOT SQL覆盖和限制中的[不支持的JIT功能](MOT-SQL覆盖和限制.md#section4815162910417)。

## JIT存储过程

JIT存储过程（JIT SP）由openGauss MOT引擎（从5.0版本开始）支持，其目标是提供更高的性能和更低的延迟。有关更多详细信息，请参阅[JIT存储过程](JIT存储过程.md)。

