# MOT Query Native Compilation \(JIT\)<a name="EN-US_TOPIC_0289899928"></a>

MOT enables you to prepare and parse  _pre-compiled full queries_  in a native format \(using a  **PREPARE**  statement\) before they are needed for execution.

This native format can later be executed \(using an  **EXECUTE**  command\) more efficiently. This type of execution is much more efficient because during execution the native format bypasses multiple database processing layers. This division of labor avoids repetitive parse analysis operations. The Lite Executor module is responsible for executing  **prepared**  queries and has a much faster execution path than the regular generic plan performed by the envelope. This is achieved using Just-In-Time \(JIT\) compilation via LLVM. In addition, a similar solution that has potentially similar performance is provided in the form of pseudo-LLVM.

The following is an example of a  **PREPARE**  syntax in SQL –

```
PREPARE name [ ( data_type [, ...] ) ] AS statement 
```

The following is an example of how to invoke a PREPARE and then an EXECUTE statement in a Java application –

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

## Prepare<a name="en-us_topic_0283137432_en-us_topic_0270677721_section183781395019"></a>

**PREPARE**  creates a prepared statement. A prepared statement is a server-side object that can be used to optimize performance. When the  **PREPARE**  statement is executed, the specified statement is parsed, analyzed and rewritten.

If the tables mentioned in the query statement are MOT tables, the MOT compilation takes charge of the object preparation and performs a special optimization by compiling the query into IR byte code based on LLVM.

Whenever a new query compilation is required, the query is analyzed and a proper tailored IR byte code is generated for the query using the utility GsCodeGen object and standard LLVM JIT API \(IRBuilder\). After byte-code generation is completed, the code is JIT‑compiled into a separate LLVM module. The compiled code results in a C function pointer that can later be invoked for direct execution. Note that this C function can be invoked concurrently by many threads, as long as each thread provides a distinct execution context \(details are provided below\). Each such execution context is referred to as  _JIT Context_.

To improve performance further, MOT JIT applies a caching policy for its LLVM code results, enabling them to be reused for the same queries across different sessions.

## Execute<a name="en-us_topic_0283137432_en-us_topic_0270677721_section1860454835014"></a>

When an EXECUTE command is issued, the prepared statement \(described above\) is planned and executed. This division of labor avoids repetitive parse analysis work, while enabling the execution plan to depend on the specific setting values supplied.

When the resulting execute query command reaches the database, it uses the corresponding IR byte code which is executed directly and more efficiently within the MOT engine. This is referred to as  _Lite Execution_.

In addition, for availability, the Lite Executor maintains a preallocated pool of JIT sources. Each session preallocates its own session-local pool of JIT context objects \(used for repeated executions of precompiled queries\).

For more details you may refer to the Supported Queries for Lite Execution and Unsupported Queries for Lite Execution sections.

## JIT Compilation Comparison – openGauss Disk-based vs. MOT Tables<a name="en-us_topic_0283137432_en-us_topic_0270677721_section1176712185116"></a>

Currently, openGauss contains two main forms of JIT / CodeGen query optimizations for its disk-based tables –

-   Accelerating expression evaluation, such as in WHERE clauses, target lists, aggregates and projections
-   Inlining small function invocations.

These optimizations are partial \(in the sense they do not optimize the entire interpreted operator tree or replace it altogether\) and are targeted mostly at CPU-bound complex queries, typically seen in OLAP use cases. The execution of queries is performed in a pull-model \(Volcano-style processing\) using an interpreted operator tree. When activated, the compilation is performed at each query execution. At the moment, caching of the generated LLVM code and its reuse across sessions and queries is not yet provided.

In contrast, MOT JIT optimization provides LLVM code for entire queries that qualify for JIT optimization by MOT. The resulting code is used for direct execution over MOT tables, while the interpreted operator model is abandoned completely. The result is  _practically_  handwritten LLVM code that has been generated for an entire specific query execution.

Another significant conceptual difference is that MOT LLVM code is only generated for prepared queries during the PREPARE phase of the query, rather than at query execution. This is especially important for OLTP scenarios due to the rather short runtime of OLTP queries, which cannot allow for code generation and relatively long query compilation time to be performed during each query execution.

Finally, in PostgreSQL the activation of a PREPARE implies the reuse of the resulting plan across executions with different parameters in the same session. Similarly, the MOT JIT applies a caching policy for its LLVM code results, and extends it for reuse across different sessions. Thus, a single query may be compiled just once and its LLVM code may be reused across many sessions, which again is beneficial for OLTP scenarios.

