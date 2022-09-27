# DBE\_PLDEBUGGER Schema<a name="EN-US_TOPIC_0000001101338022"></a>

DBE\_PLDEBUGGER system functions are used to debug stored procedures in a standalone system. This chapter describes the interfaces supported by DBE\_PLDEBUGGER. Only the administrator has the permission to execute these debugging interfaces, but does not have the permission to modify or create functions.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When a user is created in the function body, the plaintext password is returned when attach, next, continue, info\_code, step, info\_breakpoint, backtrace or finish is called. You are not advised to create a user in the function body.

The administrator can run the following command to grant the  **gs\_role\_pldebugger**  role and debugger permissions to a user:

```
GRANT gs_role_pldebugger to user;
```

Two clients are required to connect to the database. One client is responsible for executing the debugging interface as the debug end, and the other client is responsible for executing the debugging function to control the execution of stored procedures on the server. The following is an example.

-   Prepare for debugging.

    Use PG\_PROC to find the OID of the stored procedure to be debugged and execute  **DBE\_PLDEBUGGER.turn\_on\(oid\)**. In this case, the client functions as the server.

    ```
    openGauss=# CREATE OR REPLACE PROCEDURE test_debug ( IN  x INT) 
    AS  
    BEGIN
    	  INSERT INTO t1 (a) VALUES (x);
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


-   Start debugging.

    When the server executes the stored procedure, the server hangs before the first SQL statement in the stored procedure and waits for the debugging message sent by the debug end. Debugging is supported only by directly executing a stored procedure and cannot be achieved by invoking an executed stored procedure through a trigger.

    ```
    openGauss=# call test_debug(1);
    ```

    Start another client as the debug end and invoke  **DBE\_PLDEBUGGER.attach**  to attach with the stored procedure for debugging based on the data returned by  **turn\_on**.

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.attach('datanode',0);
     funcoid |  funcname  | lineno |              query
    ---------+------------+--------+----------------------------------
       16389 | test_debug |      3 |   INSERT INTO t1 (a) VALUES (x);
    (1 row)
    ```

    Execute the next statement on the client where the attach operation is performed.

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.next();
     funcoid |  funcname  | lineno |        query
    ---------+------------+--------+----------------------
       16389 | test_debug |      0 | [EXECUTION FINISHED]
    (1 row)
    ```

    Output all the current variables on the client where the attach command is executed.

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.info_locals();
     varname | vartype | value | package_name
    ---------+---------+-------+--------------
     $1      | int4    | 1     |
    (1 row)
    ```

    Directly execute the stored procedure that is being debugged.

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.continue();
     funcoid |  funcname  | lineno |        query
    ---------+------------+--------+----------------------
       16389 | test_debug |      0 | [EXECUTION FINISHED]
    (1 row)
    ```

    Exit the stored procedure that is being debugged and do not execute statements that have not been executed before.

    ```
    openGauss=# SELECT * FROM DBE_PLDEBUGGER.abort();
     abort
    -------
     t
    (1 row)
    ```

    After the stored procedure is executed, the debugging automatically exits. To debug the stored procedure again, you need to attach again. If the server does not need to be debugged, run the  **turn\_off**  command to disable the debugging or exit the session. For details about the debugging interfaces, see the following table.

    **Table  1**  DBE\_PLDEBUGGER

    <a name="table0523162410321"></a>
    <table><thead align="left"><tr id="row1052312411327"><th class="cellrowborder" valign="top" width="34.599999999999994%" id="mcps1.2.3.1.1"><p id="p125231924143220"><a name="p125231924143220"></a><a name="p125231924143220"></a>Interface</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.4%" id="mcps1.2.3.1.2"><p id="p145231924173213"><a name="p145231924173213"></a><a name="p145231924173213"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1752382419326"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p195231624183214"><a name="p195231624183214"></a><a name="p195231624183214"></a><a href="dbe_pldebugger-turn_on.md">DBE_PLDEBUGGER.turn_on</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p2523324183217"><a name="p2523324183217"></a><a name="p2523324183217"></a>Invoked by the server, indicating that the stored procedure can be debugged. After the interface is invoked, the stored procedure is hung to wait for debugging information.</p>
    </td>
    </tr>
    <tr id="row11523192412328"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p16523524113214"><a name="p16523524113214"></a><a name="p16523524113214"></a><a href="dbe_pldebugger-turn_off.md">DBE_PLDEBUGGER.turn_off</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p14523192414325"><a name="p14523192414325"></a><a name="p14523192414325"></a>Invoked by the server, indicating that debugging the stored procedure is disabled.</p>
    </td>
    </tr>
    <tr id="row15523152413322"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p652382418321"><a name="p652382418321"></a><a name="p652382418321"></a><a href="dbe_pldebugger-local_debug_server_info.md">DBE_PLDEBUGGER.local_debug_server_info</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p6523324173212"><a name="p6523324173212"></a><a name="p6523324173212"></a>Invoked by the server to print all stored procedures that have been turned on in the current session. </p>
    </td>
    </tr>
    <tr id="row952302410328"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p5524132410329"><a name="p5524132410329"></a><a name="p5524132410329"></a><a href="dbe_pldebugger-attach.md">DBE_PLDEBUGGER.attach</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p155241224163215"><a name="p155241224163215"></a><a name="p155241224163215"></a>Invoked by the debug end to attach with the stored procedure that is being debugged.</p>
    </td>
    </tr>
    <tr id="row369102355114"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p127052305111"><a name="p127052305111"></a><a name="p127052305111"></a><a href="dbe_pldebugger-info_locals.md">DBE_PLDEBUGGER.info_locals</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p177032345111"><a name="p177032345111"></a><a name="p177032345111"></a>Invoked by the debug end to print the current values of variables in the stored procedure that is being debugged. </p>
    </td>
    </tr>
    <tr id="row852414242324"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p10524182416320"><a name="p10524182416320"></a><a name="p10524182416320"></a><a href="dbe_pldebugger-next.md">DBE_PLDEBUGGER.next</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p6524124193219"><a name="p6524124193219"></a><a name="p6524124193219"></a>Invoked by the debug end to execute the next step.</p>
    </td>
    </tr>
    <tr id="row16524192418321"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p0524192463215"><a name="p0524192463215"></a><a name="p0524192463215"></a><a href="dbe_pldebugger-continue.md">DBE_PLDEBUGGER.continue</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p9524152453218"><a name="p9524152453218"></a><a name="p9524152453218"></a>Invoked by the debug end to continue the execution until the breakpoint or stored procedure ends.</p>
    </td>
    </tr>
    <tr id="row1152462433216"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p185241824203210"><a name="p185241824203210"></a><a name="p185241824203210"></a><a href="dbe_pldebugger-abort.md">DBE_PLDEBUGGER.abort</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p5524324123216"><a name="p5524324123216"></a><a name="p5524324123216"></a>Invoked by the debug end to stop debugging. The server reports a long jump error.</p>
    </td>
    </tr>
    <tr id="row97981513016"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p47991858020"><a name="p47991858020"></a><a name="p47991858020"></a><a href="dbe_pldebugger-print_var.md">DBE_PLDEBUGGER.print_var</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p279915511013"><a name="p279915511013"></a><a name="p279915511013"></a>Invoked by the debug end to print the current values of specified variables in the stored procedure that is being debugged. </p>
    </td>
    </tr>
    <tr id="row34281710909"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p7428111010014"><a name="p7428111010014"></a><a name="p7428111010014"></a><a href="dbe_pldebugger-info_code.md">DBE_PLDEBUGGER.info_code</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1442813107018"><a name="p1442813107018"></a><a name="p1442813107018"></a>Invoked by the debug end or server to print the source statement of a specified stored procedure and the line number corresponding to each line.</p>
    </td>
    </tr>
    <tr id="row18493441451"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p15849114410454"><a name="p15849114410454"></a><a name="p15849114410454"></a><a href="dbe_pldebugger-step.md">DBE_PLDEBUGGER.step</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1184994416454"><a name="p1184994416454"></a><a name="p1184994416454"></a>Invoked by the debug end to execute step by step.</p>
    </td>
    </tr>
    <tr id="row151012015141414"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p463411486285"><a name="p463411486285"></a><a name="p463411486285"></a><a href="dbe_pldebugger-add_breakpoint.md">DBE_PLDEBUGGER.add_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p121021915101416"><a name="p121021915101416"></a><a name="p121021915101416"></a>Invoked by the debug end to add a breakpoint.</p>
    </td>
    </tr>
    <tr id="row7346134201411"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p1346342151416"><a name="p1346342151416"></a><a name="p1346342151416"></a><a href="dbe_pldebugger-delete_breakpoint.md">DBE_PLDEBUGGER.delete_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p734684214148"><a name="p734684214148"></a><a name="p734684214148"></a>Invoked by the debug end to delete a breakpoint.</p>
    </td>
    </tr>
    <tr id="row183409813150"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p53401081151"><a name="p53401081151"></a><a name="p53401081151"></a><a href="dbe_pldebugger-info_breakpoints.md">DBE_PLDEBUGGER.info_breakpoints</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p634016841518"><a name="p634016841518"></a><a name="p634016841518"></a>Invoked by the debug end to view all breakpoints.</p>
    </td>
    </tr>
    <tr id="row18516252185316"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p20516165275310"><a name="p20516165275310"></a><a name="p20516165275310"></a><a href="dbe_pldebugger-backtrace.md">DBE_PLDEBUGGER.backtrace</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p13516052175320"><a name="p13516052175320"></a><a name="p13516052175320"></a>Invoked by the debug end to check the current call stack.</p>
    </td>
    </tr>
    <tr id="row4326749272"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p732713416277"><a name="p732713416277"></a><a name="p732713416277"></a><a href="dbe_pldebugger-enable_breakpoint.md">DBE_PLDEBUGGER.enable_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1132714413277"><a name="p1132714413277"></a><a name="p1132714413277"></a>Invoked by the debug end to enable breakpoints.</p>
    </td>
    </tr>
    <tr id="row2435191692810"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p204359162284"><a name="p204359162284"></a><a name="p204359162284"></a><a href="dbe_pldebugger-disable_breakpoint.md">DBE_PLDEBUGGER.disable_breakpoint</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p54351316112813"><a name="p54351316112813"></a><a name="p54351316112813"></a>Invoked by the debug end to disable breakpoints.</p>
    </td>
    </tr>
    <tr id="row830972423018"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p20310224133018"><a name="p20310224133018"></a><a name="p20310224133018"></a><a href="dbe_pldebugger-finish.md">DBE_PLDEBUGGER.finish</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p1731022415301"><a name="p1731022415301"></a><a name="p1731022415301"></a>Invoked by the debug end to continue the debugging until the breakpoint is reached or the upper-layer call stack is returned.</p>
    </td>
    </tr>
    <tr id="row8735537113017"><td class="cellrowborder" valign="top" width="34.599999999999994%" headers="mcps1.2.3.1.1 "><p id="p1581201715318"><a name="p1581201715318"></a><a name="p1581201715318"></a><a href="dbe_pldebugger-set_var.md">DBE_PLDEBUGGER.set_var</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="65.4%" headers="mcps1.2.3.1.2 "><p id="p10755616193115"><a name="p10755616193115"></a><a name="p10755616193115"></a>Invoked by the debug end to assign a value to a variable.</p>
    </td>
    </tr>
    </tbody>
    </table>


-   **[DBE\_PLDEBUGGER.turn\_on](dbe_pldebugger-turn_on.md)**  

-   **[DBE\_PLDEBUGGER.turn\_off](dbe_pldebugger-turn_off.md)**  

-   **[DBE\_PLDEBUGGER.local\_debug\_server\_info](dbe_pldebugger-local_debug_server_info.md)**  

-   **[DBE\_PLDEBUGGER.attach](dbe_pldebugger-attach.md)**  

-   **[DBE\_PLDEBUGGER.info\_locals](dbe_pldebugger-info_locals.md)**  

-   **[DBE\_PLDEBUGGER.next](dbe_pldebugger-next.md)**  

-   **[DBE\_PLDEBUGGER.continue](dbe_pldebugger-continue.md)**  

-   **[DBE\_PLDEBUGGER.abort](dbe_pldebugger-abort.md)**  

-   **[DBE\_PLDEBUGGER.print\_var](dbe_pldebugger-print_var.md)**  

-   **[DBE\_PLDEBUGGER.info\_code](dbe_pldebugger-info_code.md)**  

-   **[DBE\_PLDEBUGGER.step](dbe_pldebugger-step.md)**  

-   **[DBE\_PLDEBUGGER.add\_breakpoint](dbe_pldebugger-add_breakpoint.md)**  

-   **[DBE\_PLDEBUGGER.delete\_breakpoint](dbe_pldebugger-delete_breakpoint.md)**  

-   **[DBE\_PLDEBUGGER.enable\_breakpoint](dbe_pldebugger-enable_breakpoint.md)**  

-   **[DBE\_PLDEBUGGER.disable\_breakpoint](dbe_pldebugger-disable_breakpoint.md)**  

-   **[DBE\_PLDEBUGGER.finish](dbe_pldebugger-finish.md)**  

-   **[DBE\_PLDEBUGGER.set\_var](dbe_pldebugger-set_var.md)**  
