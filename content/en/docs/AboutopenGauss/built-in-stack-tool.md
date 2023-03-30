# Built-in Stack Tool<a name="EN-US_TOPIC_0000001263689564"></a>

## Availability<a name="section147531742205517"></a>

This feature is available since 3.0.0.

## Introduction<a name="section134931562564"></a>

The stack tool is used to obtain the call stack of each thread in the database. It helps database O&M personnel locate faults such as deadlock and hang.

## Benefits<a name="section1407614175619"></a>

Provides function-level call stack information to improve the efficiency of database kernel O&M personnel in analyzing and locating faults such as deadlock and hang.

## Description<a name="section4283110201212"></a>

You can use the gs\_stack\(\) function or the gs\_ctl stack tool to obtain the call stacks of threads in the database.

1.  gs\_stack\(\) function
    -   Run **select \* from gs\_stack\(pid\)** to obtain the call stack of a specified thread.

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

    -   Run **select \* from gs\_stack\(\)** to obtain the call stacks of all threads.

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

2.  gs\_ctl stack tool
    -   Run the following command to obtain the call stack of a specified thread:

        ```
        gs_ctl stack -D data_dir -I lwtid
        ```

        In the preceding command, **-D data\_dir** specifies the data directory of the GaussDB process whose call stack needs to be obtained, and **-I lwtid** specifies the lwtid of the target thread. You can run the **ls /proc/pid/task/** command to obtain the lwpid. The following specifies the procedure:

        1.  Obtain the GaussDB process ID and data directory.

            ```
            ps -ux | more
            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            perfadm    308  9.3 10.1 8719348 1649108 ?     Sl   May20  58:58 /xxx/bin/gaussdb -u 92617 -D /xxx/openGauss/cluster/data1/dn1 -M pending
            ```

        2.  Obtain the lwtid based on the process ID. The directory name in the **task** directory is the lwtid.

            ```
            ls /proc/308/task/
            1096  505  522  525  529  532  536  539  542  546  549  552  555  558  561  565  569  575  584  833  923  926  929  932  935  938
            ```

        3.  Obtain the call stack based on the specified lwtid.

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

    -   Run the following command to obtain the call stacks of all threads:

        ```
        gs_ctl stack -D data_dir
        ```

        In the preceding command, **-D data\_dir** specifies the data directory of the GaussDB process whose call stack needs to be obtained. The following specifies the procedure:

        1.  Obtain the GaussDB process ID and data directory.

            ```
            ps -ux | more
            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            perfadm    308  9.3 10.1 8719348 1649108 ?     Sl   May20  58:58 /xxx/bin/gaussdb -u 92617 -D /xxx/openGauss/cluster/data1/dn1 -M pending
            ```

        2.  Obtain the call stacks of all threads.

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

            The remaining call stacks are omitted here.




## Enhancements<a name="section1548515520568"></a>

None

## Constraints<a name="section1956417145819"></a>

1.  This tool is used only for the GaussDB process. Other processes, such as CMS and GTM, are not supported.
2.  If you run SQL statements to execute this tool, ensure that the CN and DN processes are running properly and can be connected to execute SQL statements.
3.  If gs\_ctl is used, CN and DN processes must be responsive.
4.  Concurrency is not supported. In the scenario where the call stacks of all threads are obtained, the call stacks of threads are not at the same time point.
5.  A maximum of 128 call stack layers are supported. If there are more than 128 call stack layers, only the top 128 layers are retained.
6.  The symbol table is not tripped. (In the current release, **strip –d** is used, and only the debug information is removed. The symbol table is not tripped. If **strip –s** is used, only the pointer can be displayed, and the symbol name cannot be displayed.)
7.  Only the **monadmin** and **sysadmin** users can execute this tool using SQL statements.
8.  The call stack can be obtained only after the thread has registered the SIGURG signal.
9.  For the code segment that shields the operating system SIGUSR2, the call stack cannot be obtained. If no signal slot has been allocated to the thread, the call stack still cannot be obtained.

## Dependencies<a name="section15876411599"></a>

None
