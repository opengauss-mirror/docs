# MOT JIT Diagnostics



## mot_jit_detail

This built-in function is used to query the details about JIT compilation (code generation).

### Usage Examples

```
select * from mot_jit_detail();

select proc_oid, substr(query, 0, 50), namespace, jittable_status, valid_status, last_updated, plan_type, codegen_time from mot_jit_detail();
```

### Output Description



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



## mot_jit_profile

This built-in function is used to query the profiling data (performance data) of the query or stored procedure execution.

### Usage Examples

```
select * from mot_jit_profile();

select proc_oid, id, parent_id, substr(query, 0, 50), namespace, weight, total, self, child_gross, child_net from mot_jit_profile();
```

### Output Description

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

## Miscellaneous

Another useful system table to get information about stored procedures and functions is [**pg_proc**](https://docs.opengauss.org/en/docs/2.0.0/docs/Developerguide/pg_proc.html).

For example, body of a stored procedure can be queried using the following query:

```
select proname,prosrc from pg_proc where proname='sp_call_filter_rules_100_1';
```

