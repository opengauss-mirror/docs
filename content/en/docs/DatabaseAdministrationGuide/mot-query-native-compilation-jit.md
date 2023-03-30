# MOT Query Native Compilation \(JIT\)<a name="EN-US_TOPIC_0270677721"></a>

Native Compilation (JIT) is one of key technologies of MOT for delivering exceptionally low latency and high throughput performance. Two types of Native Compilation (JIT) are supported (using a PREPARE statement): 1) JIT for Stored Procedures (JIT SP), and 2) JIT for Queries (JIT Query).
The following sections describe how to use both mechanisms in your application.

## JIT SP
JIT SP refers to code generation, compiling and execution of stored procedures (SP) by LLVM runtime code generation and compilation library. JIT SP is available to SPs accessing MOT tables (only) and is completely transparent to users. Acceleration level depends on the SP logic. For example, a real customer application achieved acceleration of 20%, 44%, 300% and 500% for different SPs in latency.
During the PREPARE phase of a query invoking an SP, or the first SP execution, the JIT module performs an attempt to translate the SP SQL into a C-based function and compile it in runtime (using LLVM). If the consecutive SP invocation is successful, MOT will execute a compiled function, leading to performance gains. In case of failure to produce a compiled function, the SP will be executed by standard PGPLSQL. Both scenarios are fully transparent to users.

## JIT Query
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

## Prepare<a name="section183781395019"></a>

**PREPARE**  creates a prepared statement. A prepared statement is a server-side object that can be used to optimize performance. When the  **PREPARE**  statement is executed, the specified statement is parsed, analyzed and rewritten.

If the tables mentioned in the query statement are MOT tables, the MOT compilation takes charge of the object preparation and performs a special optimization by compiling the query into IR byte code based on LLVM.

Whenever a new query compilation is required, the query is analyzed and a proper tailored IR byte code is generated for the query using the utility GsCodeGen object and standard LLVM JIT API \(IRBuilder\). After byte-code generation is completed, the code is JIT‑compiled into a separate LLVM module. The compiled code results in a C function pointer that can later be invoked for direct execution. Note that this C function can be invoked concurrently by many threads, as long as each thread provides a distinct execution context \(details are provided below\). Each such execution context is referred to as  _JIT Context_.

To improve performance further, MOT JIT applies a caching policy for its LLVM code results, enabling them to be reused for the same queries across different sessions.

## Execute<a name="section1860454835014"></a>

When an EXECUTE command is issued, the prepared statement \(described above\) is planned and executed. This division of labor avoids repetitive parse analysis work, while enabling the execution plan to depend on the specific setting values supplied.

When the resulting execute query command reaches the database, it uses the corresponding IR byte code which is executed directly and more efficiently within the MOT engine. This is referred to as  _Lite Execution_.

In addition, for availability, the Lite Executor maintains a preallocated pool of JIT sources. Each session preallocates its own session-local pool of JIT context objects \(used for repeated executions of precompiled queries\).

You may refer to the [Unsupported JIT features](mot-sql-coverage-and-limitations.md#section4815162910417) section in MOT SQL Coverage and Limitations page. 

## JIT for Stored procedures 

JIT for Stored Procedures (JIT SP) is supported by the openGauss MOT engine (starting from 5.0 version), and its goal is deliver even higher performance and lower latency. Refer to[ JIT for SP](JIT for Stored procedures) for more details.

