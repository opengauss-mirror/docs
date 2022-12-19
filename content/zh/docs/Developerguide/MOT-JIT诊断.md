# MOT JIT诊断



## mot_jit_detail

该内置函数用于查询JIT编译（代码生成）的详细信息。

### 使用示例

```
select * from mot_jit_detail();

select proc_oid, substr(query, 0, 50), namespace, jittable_status, valid_status, last_updated, plan_type, codegen_time from mot_jit_detail();
```

### 输出说明



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



## mot\_jit\_profile

此内置函数用于查找查询或存储过程执行的分析数据（性能数据）。

### 使用示例

```
select * from mot_jit_profile();

select proc_oid, id, parent_id, substr(query, 0, 50), namespace, weight, total, self, child_gross, child_net from mot_jit_profile();
```

### 输出说明

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

## 其他

另外，[PG_PROC](https://docs.opengauss.org/zh/docs/2.0.0/docs/Developerguide/PG_PROC.html)系统表也可用于获取存储过程和函数的有关信息。

例如，存储过程内容的查询如下：

```
select proname,prosrc from pg_proc where proname='sp_call_filter_rules_100_1';
```
