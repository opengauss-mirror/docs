# DBE\_PLDEBUGGER Schema

DBE\_PLDEBUGGER下系统函数用于单机下调试存储过程，目前支持的接口及其描述如下所示。仅管理员有权限执行这些调试接口，且无权限修改和创建新函数。

>![](public_sys-resources/icon-notice.png) **须知：** 
>当在函数体中创建用户时，调用attach、next、continue、 info\_code、step、info\_breakpoint、backtrace、 finish中会返回密码的明文。因此不建议用户在函数体中创建用户。

对应权限角色为gs\_role\_pldebugger，可以由管理员用户通过如下命令将debugger权限赋权给该用户。

```
GRANT gs_role_pldebugger to user;
```

需要有两个客户端连接数据库，一个客户端负责执行调试接口作为debug端，另一个客户端执行调试函数，控制server端存储过程执行。示例如下。

-   准备调试

    通过PG\_PROC，查找到待调试存储过程的oid，并执行DBE\_PLDEBUGGER.turn\_on\(oid\)。本客户端就会作为server端使用。调试匿名块时，执行DBE\_PLDEBUGGER.turn\_on\(0\)。

    ```
    openGauss=# CREATE OR REPLACE PROCEDURE test_debug ( IN  x INT) 
    AS  
    BEGIN
        INSERT INTO t1 (a) VALUES (x);
        DELETE FROM t1 WHERE a = x;
    END;
    /
    CREATE PROCEDURE
    openGauss=# SELECT OID FROM PG_PROC WHERE PRONAME='test_debug';
      oid
    -------
     16389
    (1 row)
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.turn_on(16389);
     nodename | port
    ----------+------
     datanode |    0
    (1 row)
    ```


-   开始调试

    server端执行存储过程，会在存储过程内第一条SQL语句前hang住，等待debug端发送的调试消息。仅支持直接执行存储过程的调试，不支持通过trigger调用执行的存储过程调试。匿名块在turn_on后输入执行即可。

    ```
    openGauss=# call test_debug(1);

    # 匿名块
    openGauss=# do $$
    declare
       # declaration_section
    begin
       # executable_section
    end;
    $$
    LANGUAGE plpgsql;
    ```

    再起一个客户端，作为debug端，通过turn\_on返回的数据，调用DBE\_PLDEBUGGER.attach关联到该存储过程上进行调试。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.attach('datanode',0);
     funcoid |  funcname  | lineno |              query
    ---------+------------+--------+----------------------------------
       16389 | test_debug |      3 |   INSERT INTO t1 (a) VALUES (x);
    (1 row)
    ```

    在执行attach的客户端调试，执行下一条statement。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.next();
     funcoid |  funcname  | lineno |        query
    ---------+------------+--------+----------------------
       16389 | test_debug |      0 | [EXECUTION FINISHED]
    (1 row)
    ```

    在执行attach的客户端调试，可以执行以下变量操作

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.info_locals(); --打印全部变量
     varname | vartype | value | package_name | isconst
    ---------+---------+-------+--------------+---------
     x       | int4    | 1     |              | f
    (1 row)
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.set_var('x', 2); --变量赋值
     set_var
    ---------
     t
    (1 row)
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.print_var('x'); --打印单个变量
     varname | vartype | value | package_name | isconst
    ---------+---------+-------+--------------+---------
     x       | int4    | 2     |              | f
    (1 row)
    
    ```

    直接执行完成当前正在调试的存储过程。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.continue();
     funcoid |  funcname  | lineno |        query
    ---------+------------+--------+----------------------
       16389 | test_debug |      0 | [EXECUTION FINISHED]
    (1 row)
    ```

    直接退出当前正在调试的存储过程，不执行尚未执行的语句。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.abort();
     abort
    -------
     t
    (1 row)
    ```

    client端查看代码信息并识别可以设置断点行号。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.info_code(16389);
     lineno |                           query                           | canbreak
    --------+-----------------------------------------------------------+----------
            | CREATE OR REPLACE PROCEDURE public.test_debug( IN  x INT) | f
          1 | AS  DECLARE                                               | f
          2 | BEGIN                                                     | f
          3 |     INSERT INTO t1 (a) VALUES (x);                        | t
          4 |     DELETE FROM t1 WHERE a = x;                           | t
          5 | END;                                                      | f
          6 | /                                                         | f
    (7 rows)
    ```

    设置断点。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.add_breakpoint(16389,4);
     lineno |                           query                           | canbreak
    --------+-----------------------------------------------------------+----------
            | CREATE OR REPLACE PROCEDURE public.test_debug( IN  x INT) | f
          1 | AS  DECLARE                                               | f
          2 | BEGIN                                                     | f
          3 |     INSERT INTO t1 (a) VALUES (x);                        | t
          4 |     DELETE FROM t1 WHERE a = x;                           | t
          5 | END;                                                      | f
          6 | /                                                         | f
    (7 rows)
    ```

    查看断点信息。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.info_breakpoints();
     breakpointno | funcoid | lineno |              query              | enable
    --------------+---------+--------+---------------------------------+--------
                0 |   16389 |      4 |     DELETE FROM t1 WHERE a = x; | t
    (1 row)
    ```

    执行至断点。

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.continue();
     funcoid |  funcname  | lineno |              query
    ---------+------------+--------+---------------------------------
       16389 | test_debug |      4 |     DELETE FROM t1 WHERE a = x;
    (1 row)
    ```

    存储过程执行结束后，调试会自动退出，再进行调试需要重新attach关联。如果server端不需要继续调试，可执行turn\_off关闭，或退出session。具体调试接口请见下面列表。

    **表 1**  DBE\_PLDEBUGGER

    <a name="table0523162410321"></a>
    <table><thead align="left"><tr id="row1052312411327"><th class="cellrowborder" valign="top" width="34.599999999999994%" id="mcps1.2.3.1.1"><p id="p125231924143220"><a name="p125231924143220"></a><a name="p125231924143220"></a>接口名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.4%" id="mcps1.2.3.1.2"><p id="p145231924173213"><a name="p145231924173213"></a><a name="p145231924173213"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1752382419326"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p195231624183214"><a name="p195231624183214"></a><a name="p195231624183214"></a><a href="DBE_PLDEBUGGER-turn_on.md">DBE_PLDEBUGGER.turn_on</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p2523324183217"><a name="p2523324183217"></a><a name="p2523324183217"></a>server端调用，标记存储过程可以调试，调用后执行该存储过程时会hang住等待调试信息。</p>
    </td>
    </tr>
    <tr id="row11523192412328"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p16523524113214"><a name="p16523524113214"></a><a name="p16523524113214"></a><a href="DBE_PLDEBUGGER-turn_off.md">DBE_PLDEBUGGER.turn_off</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p14523192414325"><a name="p14523192414325"></a><a name="p14523192414325"></a>server端调用，标记存储过程关闭调试。</p>
    </td>
    </tr>
    <tr id="row15523152413322"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p652382418321"><a name="p652382418321"></a><a name="p652382418321"></a><a href="DBE_PLDEBUGGER-local_debug_server_info.md">DBE_PLDEBUGGER.local_debug_server_info</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p6523324173212"><a name="p6523324173212"></a><a name="p6523324173212"></a>server端调用，打印本session内所有已turn_on的存储过程。</p>
    </td>
    </tr>
    <tr id="row952302410328"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p5524132410329"><a name="p5524132410329"></a><a name="p5524132410329"></a><a href="DBE_PLDEBUGGER-attach.md">DBE_PLDEBUGGER.attach</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p155241224163215"><a name="p155241224163215"></a><a name="p155241224163215"></a>debug端调用，关联到正在调试存储过程。</p>
    </td>
    </tr>
    <tr id="row369102355114"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p127052305111"><a name="p127052305111"></a><a name="p127052305111"></a><a href="DBE_PLDEBUGGER-info_locals.md">DBE_PLDEBUGGER.info_locals</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p177032345111"><a name="p177032345111"></a><a name="p177032345111"></a>debug端调用，打印正在调试的存储过程中的变量当前值。</p>
    </td>
    </tr>
    <tr id="row852414242324"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p10524182416320"><a name="p10524182416320"></a><a name="p10524182416320"></a><a href="DBE_PLDEBUGGER-next.md">DBE_PLDEBUGGER.next</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p6524124193219"><a name="p6524124193219"></a><a name="p6524124193219"></a>debug端调用，单步执行。</p>
    </td>
    </tr>
    <tr id="row16524192418321"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p0524192463215"><a name="p0524192463215"></a><a name="p0524192463215"></a><a href="DBE_PLDEBUGGER-continue.md">DBE_PLDEBUGGER.continue</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p9524152453218"><a name="p9524152453218"></a><a name="p9524152453218"></a>debug端调用，继续执行，直到断点或存储过程结束。</p>
    </td>
    </tr>
    <tr id="row1152462433216"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p185241824203210"><a name="p185241824203210"></a><a name="p185241824203210"></a><a href="DBE_PLDEBUGGER-abort.md">DBE_PLDEBUGGER.abort</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p5524324123216"><a name="p5524324123216"></a><a name="p5524324123216"></a>debug端调用，停止调试，server端报错长跳转。</p>
    </td>
    </tr>
    <tr id="row97981513016"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p47991858020"><a name="p47991858020"></a><a name="p47991858020"></a><a href="DBE_PLDEBUGGER-print_var.md">DBE_PLDEBUGGER.print_var</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p279915511013"><a name="p279915511013"></a><a name="p279915511013"></a>debug端调用，打印正在调试的存储过程中指定的变量当前值。</p>
    </td>
    </tr>
    <tr id="row34281710909"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p7428111010014"><a name="p7428111010014"></a><a name="p7428111010014"></a><a href="DBE_PLDEBUGGER-info_code.md">DBE_PLDEBUGGER.info_code</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1442813107018"><a name="p1442813107018"></a><a name="p1442813107018"></a>debug和server端都可以调用，打印指定存储过程的源语句和各行对应的行号。info_code(0)可查看正在调试中的匿名块源语句和各行对应的行号。</p>
    </td>
    </tr>
    <tr id="row18493441451"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p15849114410454"><a name="p15849114410454"></a><a name="p15849114410454"></a><a href="DBE_PLDEBUGGER-step.md">DBE_PLDEBUGGER.step</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1184994416454"><a name="p1184994416454"></a><a name="p1184994416454"></a>debug端调用，单步进入执行。</p>
    </td>
    </tr>
    <tr id="row151012015141414"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p463411486285"><a name="p463411486285"></a><a name="p463411486285"></a><a href="DBE_PLDEBUGGER-add_breakpoint.md">DBE_PLDEBUGGER.add_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p121021915101416"><a name="p121021915101416"></a><a name="p121021915101416"></a>debug端调用，新增断点。</p>
    </td>
    </tr>
    <tr id="row7346134201411"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p1346342151416"><a name="p1346342151416"></a><a name="p1346342151416"></a><a href="DBE_PLDEBUGGER-delete_breakpoint.md">DBE_PLDEBUGGER.delete_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p734684214148"><a name="p734684214148"></a><a name="p734684214148"></a>debug端调用，删除断点。</p>
    </td>
    </tr>
    <tr id="row183409813150"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p53401081151"><a name="p53401081151"></a><a name="p53401081151"></a><a href="DBE_PLDEBUGGER-info_breakpoints.md">DBE_PLDEBUGGER.info_breakpoints</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p634016841518"><a name="p634016841518"></a><a name="p634016841518"></a>debug端调用，查看当前的所有断点。</p>
    </td>
    </tr>
    <tr id="row18516252185316"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p20516165275310"><a name="p20516165275310"></a><a name="p20516165275310"></a><a href="DBE_PLDEBUGGER-backtrace.md">DBE_PLDEBUGGER.backtrace</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p13516052175320"><a name="p13516052175320"></a><a name="p13516052175320"></a>debug端调用，查看当前的调用栈。</p>
    </td>
    </tr>
    <tr id="row4326749272"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p732713416277"><a name="p732713416277"></a><a name="p732713416277"></a><a href="DBE_PLDEBUGGER-enable_breakpoint.md">DBE_PLDEBUGGER.enable_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1132714413277"><a name="p1132714413277"></a><a name="p1132714413277"></a>debug端调用，激活被禁用的断点。</p>
    </td>
    </tr>
    <tr id="row2435191692810"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p204359162284"><a name="p204359162284"></a><a name="p204359162284"></a><a href="DBE_PLDEBUGGER-disable_breakpoint.md">DBE_PLDEBUGGER.disable_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p54351316112813"><a name="p54351316112813"></a><a name="p54351316112813"></a>debug端调用，禁用已激活的断点。</p>
    </td>
    </tr>
    <tr id="row830972423018"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p20310224133018"><a name="p20310224133018"></a><a name="p20310224133018"></a><a href="DBE_PLDEBUGGER-finish.md">DBE_PLDEBUGGER.finish</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1731022415301"><a name="p1731022415301"></a><a name="p1731022415301"></a>debug端调用，继续调试，直到断点或返回上一层调用栈。</p>
    </td>
    </tr>
    <tr id="row8735537113017"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p1581201715318"><a name="p1581201715318"></a><a name="p1581201715318"></a><a href="DBE_PLDEBUGGER-set_var.md">DBE_PLDEBUGGER.set_var</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p10755616193115"><a name="p10755616193115"></a><a name="p10755616193115"></a>debug端调用，为变量进行赋值操作。</p>
    </td>
    </tr>
    </tbody>
    </table>





