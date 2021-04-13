# 调试工具-PLDEBUGGER

## 工具介绍

PLADEBUGGER是一款开源PG存储过程调试工具，经适配修改，可用于openGauss。

调试的过程需要两个数据库会话，一个用于执行被调试的存储过程(server端)，一个通过调试API控制调试过程(client端)，两个扮演不同角色的数据库会话，相互协调，进行调试。

## 如何获取

修改patch、编译脚本以及对版本应源码的获取方式存放在openGauss-third_party仓库的gpl_dependency/pldebugger目录下。

参照其中的README进行获取、编译、安装此工具。

## 接口说明

pldebugger提供一系列接口，用于捕获、调试相关的存储过程。接口列表如下：

| **所属角色** | **接口名称**          | **参数**                      | **功能**                                                     |
| ------------ | --------------------- | ----------------------------- | ------------------------------------------------------------ |
| -            | pldbg_on              | -                             | 启动一个server，无需显示调用                                 |
| -            | pldbg_off             | -                             | 关闭退出pldebugger，会话结束时会自动调用                     |
| -            | pldbg_get_proxy_info  | -                             | 获取版本信息                                                 |
| -            | pldbg_get_source      | func oid                      | 获取指定oid的存储过程的源代码文本                            |
| Server       | pldbg_oid_debug       | func oid                      | 启动一个server，注册调试指定oid的存储过程，之后当执行此存储过程的时候，会被暂停住，并生成一个proxy id |
| Client       | pldbg_attach_to_port  | Proxy id                      | 启动一个client，并连接到指定proxy id的server上，同时生成一个session id |
| Client       | pldbg_continue        | Sess id                       | 继续执行，直到遇见断点                                       |
| Client       | pldbg_abort_target    | Sess id                       | 停止被调试存储过程的执行                                     |
| Client       | pldbg_step_into       | Sess id                       | 进入下层调用                                                 |
| Client       | pldbg_step_over       | Sess id                       | 执行下一句                                                   |
| Client       | pldbg_set_breakpoint  | Sess id, func  oid,  line num | 在oid存储过程的line num行添加断点                            |
| Client       | pldbg_drop_breakpoint | Sess id, func  oid,  line num | 删除函数oid在line num行的断点                                |
| Client       | pldbg_get_breakpoints | Sess id                       | 展示所有断点                                                 |
| Client       | pldbg_get_stack       | Sess id                       | 展示当前堆栈                                                 |
| Client       | pldbg_get_variables   | Sess id                       | 展示当前执行中的所有变量                                     |


## 示例

示例1：注册与捕获需要调试的存储过程：

```
-- server端，注册并执行需要被调试的存储过程，此处举例存储过程名为compute，其oid为16382。
postgres=# select plpgsql_oid_debug(16382);
NOTICE:  Pldebugger is started successfully, you are SERVER now.
CONTEXT:  referenced column: plpgsql_oid_debug
 plpgsql_oid_debug
-------------------
                 0
(1 row)

postgres=# select * from compute(1);
NOTICE:  YOUR PROXY PORT ID IS:0
CONTEXT:  PL/pgSQL function compute(integer) line 3 at assignment


-- client端，根据proxy port id捕获server，并生成一个session id。
postgres=# select * from pldbg_attach_to_port(0);
NOTICE:  Pldebugger is started successfully, you are CLIENT now.
 pldbg_attach_to_port
----------------------
                    1
(1 row)
```

示例2：断点操作，设置、查看、删除断点：

```
postgres=# select pldbg_set_breakpoint(1, 16382, 6);
 pldbg_set_breakpoint
----------------------
 t
(1 row)

postgres=# select * from pldbg_get_breakpoints(1);
 func  | linenumber | targetname
-------+------------+------------
 16382 |          6 |
 16382 |         -1 |
(2 rows)

postgres=# select * from pldbg_drop_breakpoint(1, 16382, 6);
 pldbg_drop_breakpoint
-----------------------
 t
(1 row)
```

示例3：打印变量、堆栈：

```
postgres=# select * from pldbg_get_variables(1);
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

postgres=# select * from pldbg_get_stack(1);
 level |    targetname     | func  | linenumber | args
-------+-------------------+-------+------------+------
     0 | compute(integer)  | 16382 |          4 | i=1
(1 row)
```

示例4：单步执行、继续执行、停止执行：

```
postgres=# select pldbg_step_into(1);
        pldbg_step_into
-------------------------------
 (16382,5,"compute(integer)")
(1 row)

postgres=# select pldbg_step_over(1);
        pldbg_step_over
-------------------------------
 (16382,6,"compute(integer)")
(1 row)

postgres=# select * from pldbg_continue(1);

postgres=# select * from pldbg_abort_target(1);
 pldbg_abort_target
--------------------
 t
(1 row)
```
