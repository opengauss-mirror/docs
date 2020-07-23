# Query Native Compilation \(JIT\)<a name="EN-US_TOPIC_0260523559"></a>

The Lite Executor module provides the ability to execute simple  **prepared**  queries in a much faster execution path than the regular generic plan made by the envelope. This is achieved using Just-In-Time \(JIT\) compilation via LLVM. In addition, a similar solution that has potentially similar performance is provided in the form of pseudo-LLVM.

To benefit from the JIT compilation in MOT, you should invoke a PREPARE statement and only then execute the query.

The following is an example of PREPARE syntax in SQL

```
PREPARE name [ ( data_type [, ...] ) ] AS statement
```

The following is an example of PREPARE syntax in Java

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

**PREPARE**  creates a prepared statement. A prepared statement is a server-side object that can be used to optimize performance. When the  **PREPARE**  statement is executed, the specified statement is parsed, analyzed and rewritten. When an  **EXECUTE** command is subsequently issued, the prepared statement is planned and executed. This division of labor avoids repetitive parse analysis work, while allowing the execution plan to depend on the specific setting values supplied.

MOT performs a special optimization by compiling the query into IR byte code based on LLVM. Whenever a new query compilation is required, the query is analyzed and a proper tailored IR byte code is generated for the query using the utility GsCodeGen object and standard LLVM JIT API \(IRBuilder\). After byte-code generation is completed, the code is JIT‑compiled into a separate LLVM module. The compiled code results in a C function pointer that can later be invoked for direct execution. Note that this C function can be invoked concurrently by many threads, as long as each thread provides a distinct execution context \(see the details below\). Each such execution context is referred to as JIT Context.

In addition, for availability, the Lite Executor maintains a preallocated pool of JIT sources. Each session preallocates its own session-local pool of JIT context objects \(used for repeated execution of precompiled queries\).

See more details in the  [Supported Queries for Lite Execution](query-native-compilation.md#section23679317151)  and[Supported Queries for Lite Execution](query-native-compilation.md#section1477313021514)  sections.

## JIT Compilation Comparison: openGauss Disk-based vs. MOT tables<a name="section54447313569"></a>

Current openGauss contains two main forms of JIT / CodeGen query optimizations for its disk-based tables: \(1\) Accelerating expression evaluation \(such as in WHERE clauses, target lists, aggregates and projections\), and \(2\) Inlining small function invocations. These optimizations are partial \(in the sense they do not optimize the entire interpreted operator tree or replace it altogether\), and are targeted mostly at CPU-bound complex queries, typically seen in OLAP use cases. The execution of queries is performed in a pull-model \(Volcano-style processing\) using an interpreted operator tree. When activated, the compilation is performed at each query execution. At the moment, caching of the generated LLVM code and its reuse across sessions and queries is not present.

In contrast, MOT JIT optimization provides an LLVM code for entire queries that qualify JIT optimization by MOT.

The result code is used for direct execution over MOT tables, while the interpreted operator model is abandoned completely. The result is a practically hand-written LLVM code generated for specific and entire query execution. Another significant conceptual difference is that MOT LLVM code is generated only for prepared queries, during the PREPARE phase of the query, rather than at query execution. This is especially important for OLTP scenarios due to the rather short runtime of OLTP queries, which cannot allow for code generation and relatively long query compilation time to be performed during each query execution. At last, in PostgreSQL the activation of PREPARE implies reuse the result plan across execution with different parameters in the same session. Similarly, the MOT JIT applies caching policy for its LLVM code results, and extends it for reuse across different sessions. Thus a single query may be compiled just once and its LLVM code reused across many sessions, which again favorable for OLTP scenarios.

