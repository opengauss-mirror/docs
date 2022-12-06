# 内置stack工具<a name="ZH-CN_TOPIC_0000001263689564"></a>

## 可获得性<a name="section147531742205517"></a>

本特性自3.0.0版本开始引入。

## 特性简介<a name="section134931562564"></a>

stack工具是获取数据库中各线程的调用栈的工具，用于辅助数据库运维人员定位死锁、hang等问题。

## 客户价值<a name="section1407614175619"></a>

提供函数级别的调用栈信息，提升数据库内核运维人员分析、定位死锁、hang等问题的效率。

## 特性描述<a name="section4283110201212"></a>

可以通过函数gs\_stack\(\)或者工具gs\_ctl stack两种方式获取数据库中线程的调用栈。

1.  gs\_stack\(\)函数方式
    -   select \* from gs\_stack\(pid\)获取指定线程调用栈。

        ```
        openGauss=# select * from gs_stack(139663481165568);
                                      gs_stack
        --------------------------------------------------------------------
         __poll + 0x2d                                                     +
         WaitLatchOrSocket(Latch volatile*, int, int, long) + 0x29f        +
         WaitLatch(Latch volatile*, int, long) + 0x2e                      +
         JobScheduleMain() + 0x90f                                         +
         int GaussDbThreadMain<(knl_thread_role)9>(knl_thread_arg*) + 0x456+
         InternalThreadFunc(void*) + 0x2d                                  +
         ThreadStarterFunc(void*) + 0xa4                                   +
         start_thread + 0xc5                                               +
         clone + 0x6d                                                      +
        (1 row)
        ```

    -   select \* from gs\_stack\(\)获取所有线程的调用栈。

        ```
        openGauss=# select * from gs_stack();
        -[ RECORD 1 ]-------------------------------------------------------------------------------------------------------
        tid   | 139670364324352
        lwtid | 308
        stack | __poll + 0x2d
              | CommWaitPollParam::caller(int (*)(pollfd*, unsigned long, int), unsigned long) + 0x34
              | int comm_socket_call<CommWaitPollParam, int (*)(pollfd*, unsigned long, int)>(CommWaitPollParam*, int (*)(pollfd*, unsigned long
        , int)) + 0x28
              | comm_poll(pollfd*, unsigned long, int) + 0xb1
              | ServerLoop() + 0x72b
              | PostmasterMain(int, char**) + 0x314e
              | main + 0x617
              | __libc_start_main + 0xf5
              | 0x55d38f8db3a7
        [ RECORD 2 ]-------------------------------------------------------------------------------------------------------
        tid   | 139664851859200
        lwtid | 520
        stack | __poll + 0x2d
              | WaitLatchOrSocket(Latch volatile*, int, int, long) + 0x29f
              | SysLoggerMain(int) + 0xc86
              | int GaussDbThreadMain<(knl_thread_role)17>(knl_thread_arg*) + 0x45d
              | InternalThreadFunc(void*) + 0x2d
              | ThreadStarterFunc(void*) + 0xa4
              | start_thread + 0xc5
              | clone + 0x6d
        ```

2.  gs\_ctl stack方式获取调用栈
    -   执行以下命令获取指定线程的调用栈。

        ```
        gs_ctl stack -D data_dir -I lwtid
        ```

        上述命令中-D data\_dir用于指定需要获取调用栈的gaussdb进程的数据目录，-I lwtid用于指定目标线程的lwtid，lwpid可以ls /proc/pid/task/获取。具体步骤如下所示。

        1.  获取gaussdb进程号和数据目录。

            ```
            ps -ux | more
            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            perfadm    308  9.3 10.1 8719348 1649108 ?     Sl   May20  58:58 /xxx/bin/gaussdb -u 92617 -D /xxx/openGauss/cluster/data1/dn1 -M pending
            ```

        2.  通过进程号获取lwtid，task目录下的目录名就是lwtid。

            ```
            ls /proc/308/task/
            1096  505  522  525  529  532  536  539  542  546  549  552  555  558  561  565  569  575  584  833  923  926  929  932  935  938
            ```

        3.  获取指定lwtid的调用栈。

            ```
            gs_ctl stack -D /xxx/openGauss/cluster/data1/dn1 -I 1096
            [2022-05-21 10:52:51.354][24520][][gs_ctl]: gs_stack start:
            tid<140409677575616> lwtid<1096>
            __poll + 0x2d
            CommWaitPollParam::caller(int (*)(pollfd*, unsigned long, int), unsigned long) + 0x34
            int comm_socket_call<CommWaitPollParam, int (*)(pollfd*, unsigned long, int)>(CommWaitPollParam*, int (*)(pollfd*, unsigned long, int)) + 0x28
            comm_poll(pollfd*, unsigned long, int) + 0xb1
            ServerLoop() + 0x72b
            PostmasterMain(int, char**) + 0x329a
            main + 0x617
            __libc_start_main + 0xf5
            0x55cf616e7647
            [2022-05-21 10:52:51.354][24520][][gs_ctl]: gs_stack finished!
            ```

    -   执行以下命令获取所有线程的调用栈。

        ```
        gs_ctl stack -D data_dir
        ```

        上述命令中，-D data\_dir用于指定需要获取调用栈的gaussdb进程的数据目录。具体步骤如下所示。

        1.  获取gaussdb进程号和数据目录。

            ```
            ps -ux | more
            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            perfadm    308  9.3 10.1 8719348 1649108 ?     Sl   May20  58:58 /xxx/bin/gaussdb -u 92617 -D /xxx/openGauss/cluster/data1/dn1 -M pending
            ```

        2.  获取所有线程的调用栈。

            ```
            [panhongchang@euler_phy_194 panhongchang]$ gs_ctl stack -D /xxx/openGauss/cluster/data1/dn1
            [2022-05-21 10:59:44.063][34511][][gs_ctl]: gs_stack start:
            Thread 0 tid<140409677575616> lwtid<21045>
            __poll + 0x2d
            CommWaitPollParam::caller(int (*)(pollfd*, unsigned long, int), unsigned long) + 0x34
            int comm_socket_call<CommWaitPollParam, int (*)(pollfd*, unsigned long, int)>(CommWaitPollParam*, int (*)(pollfd*, unsigned long, int)) + 0x28
            comm_poll(pollfd*, unsigned long, int) + 0xb1
            ServerLoop() + 0x72b
            PostmasterMain(int, char**) + 0x329a
            main + 0x617
            __libc_start_main + 0xf5
            0x55cf616e7647
            
            Thread 1 tid<140405343516416> lwtid<21060>
            __poll + 0x2d
            WaitLatchOrSocket(Latch volatile*, int, int, long) + 0x29f
            SysLoggerMain(int) + 0xc86
            int GaussDbThreadMain<(knl_thread_role)17>(knl_thread_arg*) + 0x45d
            InternalThreadFunc(void*) + 0x2d
            ThreadStarterFunc(void*) + 0xa4
            start_thread + 0xc5
            clone + 0x6d
            ```

            此处省略剩余调用栈。




## 特性增强<a name="section1548515520568"></a>

无。

## 特性约束<a name="section1956417145819"></a>

1.  仅用于gaussdb进程，其他进程，如cms、gtm等不支持。
2.  如果使用SQL的方式执行，则需要CN、DN进程处于正常状态，可连接和执行SQL。
3.  如果使用gs\_ctl的方式执行，则需要CN、DN进程处于可响应信号的状态。
4.  不支持并发，在获取全线程栈的场景，各个线程的调用栈不处于同一时间点。
5.  最多支持128层调用栈，如果实际情况超过128层，则仅保留栈顶的128层。
6.  符号表没有被trip（当前release版本，使用的是strip –d，仅去掉了debug信息，符号表没有被trip，如果改为strip –s，则仅能显示指针，无法显示出符号名）。
7.  SQL执行方式仅支持monadmin、sysadmin用户。
8.  注册了SIGURG信号的线程，才能获取调用栈。
9.  对于屏蔽操作系统SIGUSR2的代码段，无法获取调用栈 ，如果线程没有注册signal\_slot，同样无法获取调用栈。

## 依赖关系<a name="section15876411599"></a>

无。

