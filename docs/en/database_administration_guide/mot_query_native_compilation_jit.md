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

You may refer to the [Unsupported JIT features](mot_sql_coverage_and_limitations.md#section4815162910417) section in MOT SQL Coverage and Limitations page. 

## JIT for Stored procedures 

JIT for Stored Procedures (JIT SP) is supported by the openGauss MOT engine (starting from 5.0 version), and its goal is deliver even higher performance and lower latency. 

JIT SP refers to code generation, compiling and execution of stored procedures (SP) by LLVM runtime code generation and execution library. JIT SP is available to SPs accessing MOT tables (only) and is completely transparent to users. SPs with Cross-Tx usage will be executed by standard PLSQL. Acceleration level depends on the SP logic complexity. For example, a real customer application achieved acceleration of 20%, 44%, 300% and 500% for different SPs, shaving microseconds to tens of milliseconds of the SP latency.

During the PREPARE phase of a query invoking an SP, or the first SP execution, the JIT module performs an attempt to translate the SP SQL into a C-based function and compile it in runtime (using LLVM). If successful, the consecutive SP invocations the MOT will execute a compiled function, leading to performance gains. In case of failure to produce a compiled function, the SP will be executed by standard PLSQL. Both scenarios are fully transparent to users.

You may refer to [JIT Diagnostics](#mot-jit-diagnostics) for useful diagnostics information.

## MOT JIT Diagnostics

### mot_jit_detail

This built-in function is used to query the details about JIT compilation (code generation).

#### Usage Examples

```
select * from mot_jit_detail();

select proc_oid, substr(query, 0, 50), namespace, jittable_status, valid_status, last_updated, plan_type, codegen_time from mot_jit_detail();
```

#### Output Description

<table><thead align="left"><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a>Field</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a>proc_oid</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a>Procedure OID (Real Object ID of the procedure in the database). 0 for queries.</p>
</td>
</tr>
<tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>Query string or stored procedure name.</p>
</td>
</tr>  
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Namespace to which the query or procedure belongs to. For procedures and top level queries, the value will be GLOBAL. For all the invoke queries, sub-queries, this field will show the parent information.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p29314576162914">jittable_status</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><ul>Whether the query or procedure is jittable:<li>jittable – Query or procedure is jittable</li><li>unjittable - Query or procedure is not jittable</li><li>invalid - Invalid state (temporary state after invalidation due to DDL or when JIT compilation is in progress)</li></ul>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a>valid_status</p>
</td>
    <td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p64149272191943">Whether the query or procedure is valid or not:<ul><li>valid – Query or procedure is valid</li><li>unavailable – JIT compilation is in progress</li><li>error – Error state</li><li>dropped – Procedure is dropped</li><li>replaced – Procedure is replaced </li></ul></p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Timestamp when the status was updated last time.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>plan_type</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Whether this is a stored procedure (SP) or query type.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>codegen_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Total time taken for code generation (JIT compilation), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>verify_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM Verification time (internal), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>finalize_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM Finalize time (internal), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>compile_time</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">LLVM Compile time (internal), in micro seconds.</p>
</td>
</tr>
</tbody>
</table>

### mot_jit_profile

This built-in function is used to query the profiling data (performance data) of the query or stored procedure execution.

#### Usage Examples

```
select * from mot_jit_profile();

select proc_oid, id, parent_id, substr(query, 0, 50), namespace, weight, total, self, child_gross, child_net from mot_jit_profile();
```

#### Output Description

<table><thead align="left"><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p404366191511"></a>Field</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p7387596191511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p1877290192147"></a>proc_oid</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p4420997892147"></a>Procedure OID (Real Object ID of the procedure in the database). 0 for queries.</p>
</td>
</tr>
 <tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>Internal ID to manipulate the output.</p>
</td>
</tr> 
  <tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>parent_id</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>Parent ID (Internal ID of the parent). Applicable only for sub-queries and sub-procedures. -1 for top-level queries and procedures.</p>
</td>
</tr> 
<tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>Query string or stored procedure name.</p>
</td>
</tr>  
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Namespace to which the query or procedure belongs to. For procedures and top level queries, the value will be GLOBAL. For all the invoke queries, sub-queries, this field will show the parent information.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p29314576162914">weight</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p>The average number of times the sub-query or sub-procedure was executed (per one parent SP execution), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p553181019183"></a>total</p>
</td>
    <td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p64149272191943">Total time taken to execute the query or procedure, in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>self</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Time taken by the query or procedure excluding the time taken by the sub-queries & sub-procedures, in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>child_gross</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Total time spent in execution of all the sub-queries & sub-procedures (child_net + time spent to prepare for execution of all the sub-queries & sub-procedures), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>child_net</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Total time taken by all the sub-queries & sub-procedures i.e., ∑ (total of child * weight), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>def_vars</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Time taken to define variables (internal), in micro seconds.</p>
</td>
</tr>
<tr id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a><a name="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p11262944162914"></a>init_vars</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="zh-cn_concept_0283139007_zh-cn_topic_0237080634_zh-cn_topic_0231764167_p23234897162914">Time taken to initialize variables (internal), in micro seconds.</p>
</td>
</tr>
</tbody>
</table>

### Miscellaneous

Another useful system table to get information about stored procedures and functions is [**pg_proc**](https://docs.opengauss.org/en/docs/2.0.0/docs/Developerguide/pg_proc.html).

For example, body of a stored procedure can be queried using the following query:

```
select proname,prosrc from pg_proc where proname='sp_call_filter_rules_100_1';
```
