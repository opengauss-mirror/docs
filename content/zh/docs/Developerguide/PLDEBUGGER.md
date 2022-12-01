# PLDEBUGGER<a name="ZH-CN_TOPIC_0000001099638822"></a>

## **工具介绍**<a name="section14543144353711"></a>

PLADEBUGGER是一款开源PG存储过程调试工具，经过适配修改，可适用于openGauss。

调试的过程需要两个数据库会话，一个用于执行被调试的存储过程（server端），一个通过调试API控制调试过程（client端），两个扮演不同角色的数据库会话，相互协调，进行调试。

## **如何获取**<a name="section8629135853712"></a>

修改patch、编译脚本以及对应版本源码的获取方式存放在openGauss-third\_party仓库的gpl\_dependency/pldebugger目录下，参照其中的README进行获取、编译、安装此工具。

## **接口说明**<a name="section5942111113813"></a>

pldebugger提供一系列接口，用于捕获、调试相关的存储过程。接口列表如下。

**表 1**  接口说明

<a name="table14411285412"></a>
<table><thead align="left"><tr id="row1841218164111"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p99241231164115"><a name="p99241231164115"></a><a name="p99241231164115"></a>所属角色</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p94121083419"><a name="p94121083419"></a><a name="p94121083419"></a>接口名称</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p823015395417"><a name="p823015395417"></a><a name="p823015395417"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p104120812417"><a name="p104120812417"></a><a name="p104120812417"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="row114131811414"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1441312816415"><a name="p1441312816415"></a><a name="p1441312816415"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p194776684314"><a name="p194776684314"></a><a name="p194776684314"></a>pldbg_on</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p16414148194110"><a name="p16414148194110"></a><a name="p16414148194110"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p167886175484"><a name="p167886175484"></a><a name="p167886175484"></a>启动一个server，无需显示调用。</p>
</td>
</tr>
<tr id="row204141286415"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1441513864118"><a name="p1441513864118"></a><a name="p1441513864118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p316514113435"><a name="p316514113435"></a><a name="p316514113435"></a>pldbg_off</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13415486419"><a name="p13415486419"></a><a name="p13415486419"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p12415082412"><a name="p12415082412"></a><a name="p12415082412"></a>关闭退出pldebugger，会话结束时会自动调用。</p>
</td>
</tr>
<tr id="row841618154114"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1741638124115"><a name="p1741638124115"></a><a name="p1741638124115"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p24163814113"><a name="p24163814113"></a><a name="p24163814113"></a>pldbg_get_proxy_info</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p4416198174116"><a name="p4416198174116"></a><a name="p4416198174116"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1841718824119"><a name="p1841718824119"></a><a name="p1841718824119"></a>获取版本信息。</p>
</td>
</tr>
<tr id="row841758134119"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1741714824110"><a name="p1741714824110"></a><a name="p1741714824110"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p4417484413"><a name="p4417484413"></a><a name="p4417484413"></a>pldbg_get_source</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5471123217466"><a name="p5471123217466"></a><a name="p5471123217466"></a>func oid</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18815154704816"><a name="p18815154704816"></a><a name="p18815154704816"></a>获取指定oid的存储过程的源代码文本。</p>
</td>
</tr>
<tr id="row154183844120"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1341816884118"><a name="p1341816884118"></a><a name="p1341816884118"></a>Server</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p341816814419"><a name="p341816814419"></a><a name="p341816814419"></a>pldbg_oid_debug</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p19881114594616"><a name="p19881114594616"></a><a name="p19881114594616"></a>func oid</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1870114116498"><a name="p1870114116498"></a><a name="p1870114116498"></a>启动一个server，注册调试指定oid的存储过程。当执行此存储过程的时候，存储过程会被暂停住，并生成一个proxy id。</p>
</td>
</tr>
<tr id="row64185814116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p54181584419"><a name="p54181584419"></a><a name="p54181584419"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1741998194113"><a name="p1741998194113"></a><a name="p1741998194113"></a>pldbg_attach_to_port</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1781304164715"><a name="p1781304164715"></a><a name="p1781304164715"></a>Proxy id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p195301512184915"><a name="p195301512184915"></a><a name="p195301512184915"></a>启动一个client，并连接到指定proxy id的server上，同时生成一个session id。</p>
</td>
</tr>
<tr id="row20318101315427"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p19319131313424"><a name="p19319131313424"></a><a name="p19319131313424"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1632031384216"><a name="p1632031384216"></a><a name="p1632031384216"></a>pldbg_continue</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13201113124216"><a name="p13201113124216"></a><a name="p13201113124216"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1732081344211"><a name="p1732081344211"></a><a name="p1732081344211"></a>继续执行，直到遇见断点。</p>
</td>
</tr>
<tr id="row26241617184213"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p162417170424"><a name="p162417170424"></a><a name="p162417170424"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1840954184411"><a name="p1840954184411"></a><a name="p1840954184411"></a>pldbg_abort_target</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p96248178425"><a name="p96248178425"></a><a name="p96248178425"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14813111125115"><a name="p14813111125115"></a><a name="p14813111125115"></a>停止被调试存储过程的执行。</p>
</td>
</tr>
<tr id="row6657112010421"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p365832015423"><a name="p365832015423"></a><a name="p365832015423"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p6658142054213"><a name="p6658142054213"></a><a name="p6658142054213"></a>pldbg_step_into</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p15658202034216"><a name="p15658202034216"></a><a name="p15658202034216"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p10508161245113"><a name="p10508161245113"></a><a name="p10508161245113"></a>进入下层调用。</p>
</td>
</tr>
<tr id="row167016373422"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1370113713429"><a name="p1370113713429"></a><a name="p1370113713429"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1170183754210"><a name="p1170183754210"></a><a name="p1170183754210"></a>pldbg_step_over</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p270213754211"><a name="p270213754211"></a><a name="p270213754211"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14935820115111"><a name="p14935820115111"></a><a name="p14935820115111"></a>执行下一句。</p>
</td>
</tr>
<tr id="row151344044215"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p165161240194214"><a name="p165161240194214"></a><a name="p165161240194214"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p65171340154213"><a name="p65171340154213"></a><a name="p65171340154213"></a>pldbg_set_breakpoint</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p4517104014425"><a name="p4517104014425"></a><a name="p4517104014425"></a>Sess id, func oid, line num</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15158530195118"><a name="p15158530195118"></a><a name="p15158530195118"></a>在oid存储过程的line num行添加断点。</p>
</td>
</tr>
<tr id="row89644311425"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p159774344218"><a name="p159774344218"></a><a name="p159774344218"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p676341424512"><a name="p676341424512"></a><a name="p676341424512"></a>pldbg_drop_breakpoint</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p39744394213"><a name="p39744394213"></a><a name="p39744394213"></a>Sess id, func oid, line num</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p10604164116512"><a name="p10604164116512"></a><a name="p10604164116512"></a>删除函数oid在line num行的断点。</p>
</td>
</tr>
<tr id="row106064615425"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p06113469424"><a name="p06113469424"></a><a name="p06113469424"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p116117467423"><a name="p116117467423"></a><a name="p116117467423"></a>pldbg_get_breakpoints</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p561164664217"><a name="p561164664217"></a><a name="p561164664217"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p11601105065120"><a name="p11601105065120"></a><a name="p11601105065120"></a>展示所有断点。</p>
</td>
</tr>
<tr id="row1975192511459"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p876142517455"><a name="p876142517455"></a><a name="p876142517455"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p99637373454"><a name="p99637373454"></a><a name="p99637373454"></a>pldbg_get_stack</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p187614250458"><a name="p187614250458"></a><a name="p187614250458"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p47711252453"><a name="p47711252453"></a><a name="p47711252453"></a>展示当前堆栈。</p>
</td>
</tr>
<tr id="row1646281455"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p747284450"><a name="p747284450"></a><a name="p747284450"></a>Client</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p104152864518"><a name="p104152864518"></a><a name="p104152864518"></a>pldbg_get_variables</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p145152854520"><a name="p145152854520"></a><a name="p145152854520"></a>Sess id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1999216135213"><a name="p1999216135213"></a><a name="p1999216135213"></a>展示当前执行中的所有变量。</p>
</td>
</tr>
</tbody>
</table>

## **示例**<a name="section3844927173819"></a>

示例1：注册与捕获需要调试的存储过程。

```
--server端，注册并执行需要被调试的存储过程，此处举例存储过程名为compute，其oid为16382。
openGauss=# select plpgsql_oid_debug(16382);
NOTICE:  Pldebugger is started successfully, you are SERVER now.
CONTEXT:  referenced column: plpgsql_oid_debug
 plpgsql_oid_debug
-------------------
                 0
(1 row)
openGauss=# select * from compute(1);
NOTICE:  YOUR PROXY PORT ID IS:0
CONTEXT:  PL/pgSQL function compute(integer) line 3 at assignment

--client端，根据proxy port id捕获server，并生成一个session id。
openGauss=# select * from pldbg_attach_to_port(0);
NOTICE:  Pldebugger is started successfully, you are CLIENT now.
 pldbg_attach_to_port
----------------------
                    1
(1 row)
```

示例2：断点操作，设置、查看、删除断点。

```
openGauss=# select pldbg_set_breakpoint(1, 16382, 6);
 pldbg_set_breakpoint
----------------------
 t
(1 row)

openGauss=# select * from pldbg_get_breakpoints(1);
 func  | linenumber | targetname
-------+------------+------------
 16382 |          6 |
 16382 |         -1 |
(2 rows)

openGauss=# select * from pldbg_drop_breakpoint(1, 16382, 6);
 pldbg_drop_breakpoint
-----------------------
 t
(1 row)
```

示例3：打印变量、堆栈。

```
openGauss=# select * from pldbg_get_variables(1);
                name                | varclass | linenumber | isunique | isconst | isnotnull | dtype | value
------------------------------------+----------+------------+----------+---------+-----------+-------+-------
 i                                  | A        |          0 | t        | f       | f         |    23 | 1
 result_1                           | A        |          0 | t        | f       | f         |    20 | 2
 result_2                           | A        |          0 | t        | f       | f         |    20 | NULL
 __gsdb_sql_cursor_attri_found__    | L        |          0 | t        | f       | f         |    16 | NULL
 __gsdb_sql_cursor_attri_notfound__ | L        |          0 | t        | f       | f         |    16 | NULL
 __gsdb_sql_cursor_attri_isopen__   | L        |          0 | t        | f       | f         |    16 | f
 __gsdb_sql_cursor_attri_rowcount__ | L        |          0 | t        | f       | f         |    23 | NULL
(7 rows)

openGauss=# select * from pldbg_get_stack(1);
 level |    targetname     | func  | linenumber | args
-------+-------------------+-------+------------+------
     0 | compute(integer)  | 16382 |          4 | i=1
(1 row)
```

示例4：单步执行、继续执行、停止执行。

```
openGauss=# select pldbg_step_into(1);
        pldbg_step_into
-------------------------------
 (16382,5,"compute(integer)")
(1 row)

openGauss=# select pldbg_step_over(1);
        pldbg_step_over
-------------------------------
 (16382,6,"compute(integer)")
(1 row)

openGauss=# select * from pldbg_continue(1);

openGauss=# select * from pldbg_abort_target(1);
 pldbg_abort_target
--------------------
 t
(1 row)
```
