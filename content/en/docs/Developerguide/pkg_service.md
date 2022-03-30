# PKG\_SERVICE<a name="EN-US_TOPIC_0304085685"></a>

[Table 1](#table35465232913)  lists all APIs supported by the  **PKG\_SERVICE**  package.

**Table  1**  PKG\_SERVICE

<a name="table35465232913"></a>
<table><thead align="left"><tr id="row554714252919"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p125470216296"><a name="p125470216296"></a><a name="p125470216296"></a>Interface</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1354716216291"><a name="p1354716216291"></a><a name="p1354716216291"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row2054718219291"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1954719211296"><a name="p1954719211296"></a><a name="p1954719211296"></a>PKG_SERVICE.SQL_IS_CONTEXT_ACTIVE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7547102182919"><a name="p7547102182919"></a><a name="p7547102182919"></a>Checks whether a context is registered.</p>
</td>
</tr>
<tr id="row1154710220294"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1754742142918"><a name="p1754742142918"></a><a name="p1754742142918"></a>PKG_SERVICE.SQL_CLEAN_ALL_CONTEXTS</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p15547162172918"><a name="p15547162172918"></a><a name="p15547162172918"></a>Deregisters all registered contexts.</p>
</td>
</tr>
<tr id="row12547527297"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12547132162912"><a name="p12547132162912"></a><a name="p12547132162912"></a>PKG_SERVICE.SQL_REGISTER_CONTEXT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p954732192910"><a name="p954732192910"></a><a name="p954732192910"></a>Registers a context.</p>
</td>
</tr>
<tr id="row1581764719397"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1881774723919"><a name="p1881774723919"></a><a name="p1881774723919"></a>PKG_SERVICE.SQL_UNREGISTER_CONTEXT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p581754703915"><a name="p581754703915"></a><a name="p581754703915"></a>Deregisters a context.</p>
</td>
</tr>
<tr id="row436811513396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1736875115398"><a name="p1736875115398"></a><a name="p1736875115398"></a>PKG_SERVICE.SQL_SET_SQL</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p129361211292"><a name="p129361211292"></a><a name="p129361211292"></a>Sets a SQL statement for a context. Currently, only the <strong id="b1936275620554"><a name="b1936275620554"></a><a name="b1936275620554"></a>SELECT</strong> statement is supported.</p>
</td>
</tr>
<tr id="row8603135417390"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1760365417392"><a name="p1760365417392"></a><a name="p1760365417392"></a>PKG_SERVICE.SQL_RUN</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17368165110397"><a name="p17368165110397"></a><a name="p17368165110397"></a>Executes the configured SQL statement on a context.</p>
</td>
</tr>
<tr id="row3547142142917"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p135472262913"><a name="p135472262913"></a><a name="p135472262913"></a>PKG_SERVICE.SQL_NEXT_ROW</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p135475252910"><a name="p135475252910"></a><a name="p135475252910"></a>Reads the next row of data in a context.</p>
</td>
</tr>
<tr id="row10547192102916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1547202172920"><a name="p1547202172920"></a><a name="p1547202172920"></a>PKG_SERVICE.SQL_GET_VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p65471920290"><a name="p65471920290"></a><a name="p65471920290"></a>Reads a dynamically defined column value in a context.</p>
</td>
</tr>
<tr id="row1254713216295"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p75472028298"><a name="p75472028298"></a><a name="p75472028298"></a>PKG_SERVICE.SQL_SET_RESULT_TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1954720210298"><a name="p1954720210298"></a><a name="p1954720210298"></a>Dynamically defines a column of a context based on the type OID.</p>
</td>
</tr>
<tr id="row1823123816403"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1223113819408"><a name="p1223113819408"></a><a name="p1223113819408"></a>PKG_SERVICE.JOB_CANCEL</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1823193854010"><a name="p1823193854010"></a><a name="p1823193854010"></a>Removes a scheduled job by job ID.</p>
</td>
</tr>
<tr id="row7522114154010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p552394117407"><a name="p552394117407"></a><a name="p552394117407"></a>PKG_SERVICE.JOB_FINISH</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14523141114014"><a name="p14523141114014"></a><a name="p14523141114014"></a>Disables or enables scheduled job execution.</p>
</td>
</tr>
<tr id="row1179374418400"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1779334444015"><a name="p1779334444015"></a><a name="p1779334444015"></a>PKG_SERVICE.JOB_SUBMIT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p3793154404011"><a name="p3793154404011"></a><a name="p3793154404011"></a>Submits a scheduled job. Job ID can be automatically generated by the system or specified manually.</p>
</td>
</tr>
<tr id="row67931247194013"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p979354724015"><a name="p979354724015"></a><a name="p979354724015"></a>PKG_SERVICE.JOB_UPDATE</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17793134764010"><a name="p17793134764010"></a><a name="p17793134764010"></a>Modifies user-definable attributes of a scheduled job, including the job content, next-execution time, and execution interval.</p>
</td>
</tr>
<tr id="row161710416102"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p15171413107"><a name="p15171413107"></a><a name="p15171413107"></a>PKG_SERVICE.SUBMIT_ON_NODES</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p617641121020"><a name="p617641121020"></a><a name="p617641121020"></a>Submits a job to all nodes. The job ID is automatically generated by the system.</p>
</td>
</tr>
<tr id="row15668114714107"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p106683471100"><a name="p106683471100"></a><a name="p106683471100"></a>PKG_SERVICE.ISUBMIT_ON_NODES</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19668104751014"><a name="p19668104751014"></a><a name="p19668104751014"></a>Submits a job to all nodes. The job ID is specified by the user.</p>
</td>
</tr>
<tr id="row11322164081417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p232274091414"><a name="p232274091414"></a><a name="p232274091414"></a>PKG_SERVICE.SQL_GET_ARRAY_RESULT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p16322184061411"><a name="p16322184061411"></a><a name="p16322184061411"></a>Obtains the array value returned in the context.</p>
</td>
</tr>
<tr id="row328324401412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p7284164441414"><a name="p7284164441414"></a><a name="p7284164441414"></a>PKG_SERVICE.SQL_GET_VARIABLE_RESULT</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6284174441410"><a name="p6284174441410"></a><a name="p6284174441410"></a>Obtains the column value returned in the context.</p>
</td>
</tr>
</tbody>
</table>

-   PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE

    This function checks whether a context is registered. This function transfers the ID of the context to be queried. If the context exists,  **TRUE**  is returned. Otherwise,  **FALSE**  is returned.

    The function prototype of  **PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE**  is as follows:

    ```
    PKG_SERVICE.SQL_IS_CONTEXT_ACTIVE(
     context_id     IN INTEGER 
    )
    RETURN BOOLEAN;
    ```

    **Table  2**  PKG\_SERVICE.SQL\_IS\_CONTEXT\_ACTIVE interface parameters

    <a name="table17293525913"></a>
    <table><thead align="left"><tr id="row19210355595"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p521735185918"><a name="p521735185918"></a><a name="p521735185918"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1622352599"><a name="p1622352599"></a><a name="p1622352599"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1128351593"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p42173575915"><a name="p42173575915"></a><a name="p42173575915"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p163173555917"><a name="p163173555917"></a><a name="p163173555917"></a>ID of the context to be queried</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_CLEAN\_ALL\_CONTEXTS

    This function cancels all contexts.

    The function prototype of  **PKG\_SERVICE.SQL\_CLEAN\_ALL\_CONTEXTS**  is as follows:

    ```
    PKG_SERVICE.SQL_CLEAN_ALL_CONTEXTS(
    )
    RETURN VOID;
    ```

-   PKG\_SERVICE.SQL\_REGISTER\_CONTEXT

    This function opens a context, which is the prerequisite for the subsequent operations in the context. This function does not transfer any parameter. It automatically generates context IDs in an ascending order and returns values to integer variables.

    The function prototype of  **PKG\_SERVICE.SQL\_REGISTER\_CONTEXT**  is as follows:

    ```
    DBE_SQL.REGISTER_CONTEXT(
    )
    RETURN INTEGER;
    ```

-   PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT

    This function closes a context, which is the end of each operation in the context. If this function is not called when the stored procedure ends, the memory is still occupied by the context. Therefore, remember to close a context when you do not need to use it. If an exception occurs, the stored procedure exits but the context is not closed. Therefore, you are advised to include this interface in the exception handling of the stored procedure.

    The function prototype of  **PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT**  is as follows:

    ```
    PKG_SERVICE.SQL_UNREGISTER_CONTEXT(
     context_id     IN INTEGER 
    )
    RETURN INTEGER;
    ```

    **Table  3**  PKG\_SERVICE.SQL\_UNREGISTER\_CONTEXT interface parameters

    <a name="table105061410179"></a>
    <table><thead align="left"><tr id="row551181419177"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1651171418173"><a name="p1651171418173"></a><a name="p1651171418173"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1151914121716"><a name="p1151914121716"></a><a name="p1151914121716"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row20511914111717"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p175111417174"><a name="p175111417174"></a><a name="p175111417174"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p125171410176"><a name="p125171410176"></a><a name="p125171410176"></a>ID of the context to be closed</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_SET\_SQL

    This function parses the query statement of a given context. The input query statement is executed immediately. Currently, only the  **SELECT**  query statement can be parsed. The statement parameters can be transferred only through the  **TEXT**  type. The length cannot exceed 1 GB.

    The function prototype of  **PKG\_SERVICE.SQL\_SET\_SQL**  is as follows:

    ```
    PKG_SERVICE.SQL_SET_SQL(
    context_id     IN INTEGER,
    query_string   IN TEXT,
    language_flag  IN INTEGER
    )
    RETURN BOOLEAN;
    ```

    **Table  4**  PKG\_SERVICE.SQL\_SET\_SQL interface parameters

    <a name="table7984164412224"></a>
    <table><thead align="left"><tr id="row49841944112216"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p18984124417229"><a name="p18984124417229"></a><a name="p18984124417229"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p209842440223"><a name="p209842440223"></a><a name="p209842440223"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1998454417224"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9984204414226"><a name="p9984204414226"></a><a name="p9984204414226"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p59841644142218"><a name="p59841644142218"></a><a name="p59841644142218"></a>ID of the context whose query statement is to be parsed</p>
    </td>
    </tr>
    <tr id="row1098411443223"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p20985174415221"><a name="p20985174415221"></a><a name="p20985174415221"></a>query_string</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p11985744152219"><a name="p11985744152219"></a><a name="p11985744152219"></a>Query statement to be parsed</p>
    </td>
    </tr>
    <tr id="row1898564420220"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1198514412221"><a name="p1198514412221"></a><a name="p1198514412221"></a>language_flag</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19855442224"><a name="p19855442224"></a><a name="p19855442224"></a>Version language number. Currently, only <strong id="b5345358192519"><a name="b5345358192519"></a><a name="b5345358192519"></a>1</strong> is supported.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_RUN

    This function executes a given context. It receives a context ID first, and the data obtained after execution is used for subsequent operations. Currently, only the  **SELECT**  query statement can be executed.

    The function prototype of  **PKG\_SERVICE.SQL\_RUN**  is as follows:

    ```
    PKG_SERVICE.SQL_RUN(
    context_id     IN INTEGER,
    )
    RETURN INTEGER;
    ```

    **Table  5**  PKG\_SERVICE.SQL\_RUN interface parameters

    <a name="table34211352454"></a>
    <table><thead align="left"><tr id="row3428355459"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p17424355450"><a name="p17424355450"></a><a name="p17424355450"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p2042123514511"><a name="p2042123514511"></a><a name="p2042123514511"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1442163564510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p34218351452"><a name="p34218351452"></a><a name="p34218351452"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6420357459"><a name="p6420357459"></a><a name="p6420357459"></a>ID of the context whose query statement is to be parsed</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_NEXT\_ROW

    This function returns the number of data rows that meet query conditions. Each time the interface is executed, the system obtains a set of new rows until all data is read.

    The function prototype of  **PKG\_SERVICE.SQL\_NEXT\_ROW**  is as follows:

    ```
    PKG_SERVICE.SQL_NEXT_ROW(
    context_id     IN INTEGER,
    )
    RETURN INTEGER;
    ```

    **Table  6**  PKG\_SERVICE.SQL\_NEXT\_ROW parameters

    <a name="table19385102812218"></a>
    <table><thead align="left"><tr id="row1538616281022"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p9386142819214"><a name="p9386142819214"></a><a name="p9386142819214"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p13386828624"><a name="p13386828624"></a><a name="p13386828624"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row13861128429"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p438610284219"><a name="p438610284219"></a><a name="p438610284219"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p33861728823"><a name="p33861728823"></a><a name="p33861728823"></a>ID of the context to be executed</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_GET\_VALUE

    This function returns the context element value in a specified position of a context and accesses the data obtained by  **PKG\_SERVICE.SQL\_NEXT\_ROW**.

    The function prototype of  **PKG\_SERVICE.SQL\_GET\_VALUE**  is as follows:

    ```
    PKG_SERVICE.SQL_GET_VALUE(
    context_id          IN    INTEGER,
    pos                 IN    INTEGER,
    col_type            IN    ANYELEMENT
    )
    RETURN ANYELEMENT;
    ```

    **Table  7**  PKG\_SERVICE.SQL\_GET\_VALUE parameters

    <a name="table22882245812"></a>
    <table><thead align="left"><tr id="row18281622155819"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p12281822145813"><a name="p12281822145813"></a><a name="p12281822145813"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1428112214584"><a name="p1428112214584"></a><a name="p1428112214584"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row172842213589"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17282226582"><a name="p17282226582"></a><a name="p17282226582"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p112813223587"><a name="p112813223587"></a><a name="p112813223587"></a>ID of the context to be executed</p>
    </td>
    </tr>
    <tr id="row1928172245813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p82952211581"><a name="p82952211581"></a><a name="p82952211581"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p132972265818"><a name="p132972265818"></a><a name="p132972265818"></a>Position of a dynamically defined column in the query</p>
    </td>
    </tr>
    <tr id="row1929102265819"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p132972212584"><a name="p132972212584"></a><a name="p132972212584"></a>col_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p929142211581"><a name="p929142211581"></a><a name="p929142211581"></a>Variable of any type, which defines the return value type of columns</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE

    This function defines columns returned from a given context and can be used only for contexts defined by  **SELECT**. The defined columns are identified by the relative positions in the query list. The prototype of  **PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE**  is as follows:

    ```
    PKG_SERVICE.SQL_SET_RESULT_TYPE(
    context_id     IN INTEGER,
    pos            IN INTEGER,
    coltype_oid    IN ANYELEMENT,
    maxsize        IN INTEGER 
    )
    RETURN INTEGER;
    ```

    **Table  8**  PKG\_SERVICE.SQL\_SET\_RESULT\_TYPE parameters

    <a name="table62711212164315"></a>
    <table><thead align="left"><tr id="row62721112204320"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p62721012124317"><a name="p62721012124317"></a><a name="p62721012124317"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p527213126432"><a name="p527213126432"></a><a name="p527213126432"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row8272101212438"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16988545194310"><a name="p16988545194310"></a><a name="p16988545194310"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p627211294317"><a name="p627211294317"></a><a name="p627211294317"></a>ID of the context to be executed</p>
    </td>
    </tr>
    <tr id="row627231234317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1327251217437"><a name="p1327251217437"></a><a name="p1327251217437"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p152724124432"><a name="p152724124432"></a><a name="p152724124432"></a>Position of a dynamically defined column in the query</p>
    </td>
    </tr>
    <tr id="row182726127439"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p172721312154313"><a name="p172721312154313"></a><a name="p172721312154313"></a>coltype_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13456912554"><a name="p13456912554"></a><a name="p13456912554"></a>Variable of any type. The OID of the corresponding type can be obtained based on the variable type.</p>
    </td>
    </tr>
    <tr id="row15272012204317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2272151213431"><a name="p2272151213431"></a><a name="p2272151213431"></a>maxsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p52720120435"><a name="p52720120435"></a><a name="p52720120435"></a>Length of a defined column</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.JOB\_CANCEL

    The stored procedure  **CANCEL**  deletes a specified job.

    The function prototype of  **PKG\_SERVICE.JOB\_CANCEL**  is as follows:

    ```
    PKG_SERVICE.JOB_CANCEL(
    job  IN  INTEGER);
    ```

    **Table  9**  PKG\_SERVICE.JOB\_CANCEL parameters

    <a name="en-us_topic_0059779362_table16993201411172"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779362_row1799411144177"><th class="cellrowborder" valign="top" width="10.12%" id="mcps1.2.6.1.1"><p id="en-us_topic_0059779362_p2994181451711"><a name="en-us_topic_0059779362_p2994181451711"></a><a name="en-us_topic_0059779362_p2994181451711"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="10%" id="mcps1.2.6.1.2"><p id="en-us_topic_0059779362_p8540131010218"><a name="en-us_topic_0059779362_p8540131010218"></a><a name="en-us_topic_0059779362_p8540131010218"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.2%" id="mcps1.2.6.1.3"><p id="en-us_topic_0059779362_p740218106212"><a name="en-us_topic_0059779362_p740218106212"></a><a name="en-us_topic_0059779362_p740218106212"></a>Input/Output Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="19.36%" id="mcps1.2.6.1.4"><p id="en-us_topic_0059779362_p1757615310914"><a name="en-us_topic_0059779362_p1757615310914"></a><a name="en-us_topic_0059779362_p1757615310914"></a>Can Be Empty</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.32%" id="mcps1.2.6.1.5"><p id="en-us_topic_0059779362_p599401410176"><a name="en-us_topic_0059779362_p599401410176"></a><a name="en-us_topic_0059779362_p599401410176"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059779362_row129941014191717"><td class="cellrowborder" valign="top" width="10.12%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p129941814171715"><a name="en-us_topic_0059779362_p129941814171715"></a><a name="en-us_topic_0059779362_p129941814171715"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="10%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p163816101226"><a name="en-us_topic_0059779362_p163816101226"></a><a name="en-us_topic_0059779362_p163816101226"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.2%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p153841020221"><a name="en-us_topic_0059779362_p153841020221"></a><a name="en-us_topic_0059779362_p153841020221"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p1786821410914"><a name="en-us_topic_0059779362_p1786821410914"></a><a name="en-us_topic_0059779362_p1786821410914"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.32%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p1099451411173"><a name="en-us_topic_0059779362_p1099451411173"></a><a name="en-us_topic_0059779362_p1099451411173"></a>Specifies the job ID.</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

    ```
    CALL PKG_SERVICE.JOB_CANCEL(101);
    ```

-   PKG\_SERVICE.JOB\_FINISH

    The stored procedure  **FINISH**  disables or enables a scheduled job.

    The function prototype of  **PKG\_SERVICE.JOB\_FINISH**  is as follows:

    ```
    PKG_SERVICE.JOB_FINISH(
    id          IN   INTEGER,
    broken       IN   BOOLEAN,
    next_time    IN   TIMESTAMP  DEFAULT  sysdate);
    ```

    **Table  10**  PKG\_SERVICE.JOB\_FINISH parameters

    <a name="en-us_topic_0059779362_table10994171414178"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779362_row10994161441714"><th class="cellrowborder" valign="top" width="12.97%" id="mcps1.2.6.1.1"><p id="en-us_topic_0059779362_p1995141415174"><a name="en-us_topic_0059779362_p1995141415174"></a><a name="en-us_topic_0059779362_p1995141415174"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.19%" id="mcps1.2.6.1.2"><p id="en-us_topic_0059779362_p1936681622310"><a name="en-us_topic_0059779362_p1936681622310"></a><a name="en-us_topic_0059779362_p1936681622310"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.76%" id="mcps1.2.6.1.3"><p id="en-us_topic_0059779362_p1736614160237"><a name="en-us_topic_0059779362_p1736614160237"></a><a name="en-us_topic_0059779362_p1736614160237"></a>Input/Output Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="7.5200000000000005%" id="mcps1.2.6.1.4"><p id="en-us_topic_0059779362_p1105129710950"><a name="en-us_topic_0059779362_p1105129710950"></a><a name="en-us_topic_0059779362_p1105129710950"></a>Can Be Empty</p>
    </th>
    <th class="cellrowborder" valign="top" width="53.559999999999995%" id="mcps1.2.6.1.5"><p id="en-us_topic_0059779362_p1799517148171"><a name="en-us_topic_0059779362_p1799517148171"></a><a name="en-us_topic_0059779362_p1799517148171"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059779362_row5995101481718"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p0995131471710"><a name="en-us_topic_0059779362_p0995131471710"></a><a name="en-us_topic_0059779362_p0995131471710"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p19366141672315"><a name="en-us_topic_0059779362_p19366141672315"></a><a name="en-us_topic_0059779362_p19366141672315"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p17366816192319"><a name="en-us_topic_0059779362_p17366816192319"></a><a name="en-us_topic_0059779362_p17366816192319"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p5118565110950"><a name="en-us_topic_0059779362_p5118565110950"></a><a name="en-us_topic_0059779362_p5118565110950"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p299514147178"><a name="en-us_topic_0059779362_p299514147178"></a><a name="en-us_topic_0059779362_p299514147178"></a>Specifies the job ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row1899531411177"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p2995141420172"><a name="en-us_topic_0059779362_p2995141420172"></a><a name="en-us_topic_0059779362_p2995141420172"></a>broken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p17366816162319"><a name="en-us_topic_0059779362_p17366816162319"></a><a name="en-us_topic_0059779362_p17366816162319"></a><span id="text1759883862519"><a name="text1759883862519"></a><a name="text1759883862519"></a>Boolean</span></p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p1036719161238"><a name="en-us_topic_0059779362_p1036719161238"></a><a name="en-us_topic_0059779362_p1036719161238"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p1635471610950"><a name="en-us_topic_0059779362_p1635471610950"></a><a name="en-us_topic_0059779362_p1635471610950"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p69951614141719"><a name="en-us_topic_0059779362_p69951614141719"></a><a name="en-us_topic_0059779362_p69951614141719"></a>Specifies the status flag, <strong id="b071711119106"><a name="b071711119106"></a><a name="b071711119106"></a>true</strong> for broken and <strong id="b5722151116102"><a name="b5722151116102"></a><a name="b5722151116102"></a>false</strong> for not broken. The current job is updated based on the parameter value <strong id="b202731513201012"><a name="b202731513201012"></a><a name="b202731513201012"></a>true</strong> or <strong id="b927316130107"><a name="b927316130107"></a><a name="b927316130107"></a>false</strong>. If the parameter is left empty, the job status remains unchanged.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row499521419175"><td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p1499681414173"><a name="en-us_topic_0059779362_p1499681414173"></a><a name="en-us_topic_0059779362_p1499681414173"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.19%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p23679165237"><a name="en-us_topic_0059779362_p23679165237"></a><a name="en-us_topic_0059779362_p23679165237"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.76%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p536717161235"><a name="en-us_topic_0059779362_p536717161235"></a><a name="en-us_topic_0059779362_p536717161235"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.5200000000000005%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p5769349910950"><a name="en-us_topic_0059779362_p5769349910950"></a><a name="en-us_topic_0059779362_p5769349910950"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.559999999999995%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p139962147178"><a name="en-us_topic_0059779362_p139962147178"></a><a name="en-us_topic_0059779362_p139962147178"></a>Specifies the next execution time. The default value is the current system time. If <strong id="b17951193465415"><a name="b17951193465415"></a><a name="b17951193465415"></a>broken</strong> is set to <strong id="b1295712348545"><a name="b1295712348545"></a><a name="b1295712348545"></a>true</strong>, <strong id="b1895773416542"><a name="b1895773416542"></a><a name="b1895773416542"></a>next_time</strong> is updated to <strong id="b995819348547"><a name="b995819348547"></a><a name="b995819348547"></a>'4000-1-1'</strong>. If <strong id="b495873445417"><a name="b495873445417"></a><a name="b495873445417"></a>broken</strong> is set to <strong id="b1795813343547"><a name="b1795813343547"></a><a name="b1795813343547"></a>false</strong> and <strong id="b89580345543"><a name="b89580345543"></a><a name="b89580345543"></a>next_time</strong> is not empty, <strong id="b1958183485416"><a name="b1958183485416"></a><a name="b1958183485416"></a>next_time</strong> is updated for the job. If <strong id="b195915348544"><a name="b195915348544"></a><a name="b195915348544"></a>next_time</strong> is empty, it will not be updated. This parameter can be omitted, and its default value will be used in this case.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.JOB\_SUBMIT

    The stored procedure  **JOB\_SUBMIT**  submits a scheduled job provided by the system.

    The function prototype of  **PKG\_SERVICE.JOB\_SUBMIT**  is as follows:

    ```
    PKG_SERVICE.JOB_SUBMIT(
    id            IN   BIGINT DEFAULT,
    content       IN   TEXT,
    next_date     IN   TIMESTAMP DEFAULT sysdate,
    interval_time IN   TEXT  DEFAULT 'null',
    job           OUT  INTEGER);
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When a scheduled job is created, the system binds the current database and the username to the job by default. This function can be called by using  **call**  or  **select**. If you call this function by using  **select**, there is no need to specify output parameters. To call this function within a stored procedure, use  **perform**. If the committed SQL statement job uses a non-public schema, specify the schema to a job schema or a function schema, or add  **set current\_schema = xxx**  before the SQL statement.

    **Table  11**  PKG\_SERVICE.JOB\_SUBMIT parameters

    <a name="en-us_topic_0059779362_table8990101441711"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779362_row899041461718"><th class="cellrowborder" valign="top" width="14.05%" id="mcps1.2.6.1.1"><p id="en-us_topic_0059779362_p9990201417173"><a name="en-us_topic_0059779362_p9990201417173"></a><a name="en-us_topic_0059779362_p9990201417173"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.9%" id="mcps1.2.6.1.2"><p id="en-us_topic_0059779362_p685019219183"><a name="en-us_topic_0059779362_p685019219183"></a><a name="en-us_topic_0059779362_p685019219183"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.370000000000001%" id="mcps1.2.6.1.3"><p id="en-us_topic_0059779362_p26135218181"><a name="en-us_topic_0059779362_p26135218181"></a><a name="en-us_topic_0059779362_p26135218181"></a>Input/Output Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="10.71%" id="mcps1.2.6.1.4"><p id="en-us_topic_0059779362_p2515812510718"><a name="en-us_topic_0059779362_p2515812510718"></a><a name="en-us_topic_0059779362_p2515812510718"></a>Can Be Empty</p>
    </th>
    <th class="cellrowborder" valign="top" width="52.96999999999999%" id="mcps1.2.6.1.5"><p id="en-us_topic_0059779362_p1199021451717"><a name="en-us_topic_0059779362_p1199021451717"></a><a name="en-us_topic_0059779362_p1199021451717"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1980781410219"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="p16279430203813"><a name="p16279430203813"></a><a name="p16279430203813"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="p2077717217212"><a name="p2077717217212"></a><a name="p2077717217212"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="p2777132112215"><a name="p2777132112215"></a><a name="p2777132112215"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1877782132115"><a name="p1877782132115"></a><a name="p1877782132115"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="p7130545173811"><a name="p7130545173811"></a><a name="p7130545173811"></a>Specifies the job ID. If the input ID is <strong id="b729434771113"><a name="b729434771113"></a><a name="b729434771113"></a>NULL</strong>, a job ID is generated internally.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row17991121411179"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p39911014161710"><a name="en-us_topic_0059779362_p39911014161710"></a><a name="en-us_topic_0059779362_p39911014161710"></a>context</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p12569131617193"><a name="en-us_topic_0059779362_p12569131617193"></a><a name="en-us_topic_0059779362_p12569131617193"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p957081619192"><a name="en-us_topic_0059779362_p957081619192"></a><a name="en-us_topic_0059779362_p957081619192"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p6108459910718"><a name="en-us_topic_0059779362_p6108459910718"></a><a name="en-us_topic_0059779362_p6108459910718"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p3991181416179"><a name="en-us_topic_0059779362_p3991181416179"></a><a name="en-us_topic_0059779362_p3991181416179"></a>Specifies the SQL statement to be executed. One or multiple DMLs, anonymous blocks, and statements for calling stored procedures, or all three combined are supported.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row19991171441719"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p20991181413178"><a name="en-us_topic_0059779362_p20991181413178"></a><a name="en-us_topic_0059779362_p20991181413178"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p1457031681920"><a name="en-us_topic_0059779362_p1457031681920"></a><a name="en-us_topic_0059779362_p1457031681920"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p5570216181917"><a name="en-us_topic_0059779362_p5570216181917"></a><a name="en-us_topic_0059779362_p5570216181917"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p5003400810718"><a name="en-us_topic_0059779362_p5003400810718"></a><a name="en-us_topic_0059779362_p5003400810718"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p2991614141719"><a name="en-us_topic_0059779362_p2991614141719"></a><a name="en-us_topic_0059779362_p2991614141719"></a>Specifies the next time the job will be executed. The default value is the current system time (<strong id="b1532172317384"><a name="b1532172317384"></a><a name="b1532172317384"></a>sysdate</strong>). If the specified time has past, the job is executed at the time it is submitted.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row11991151471712"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p799141415179"><a name="en-us_topic_0059779362_p799141415179"></a><a name="en-us_topic_0059779362_p799141415179"></a>interval_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p157081610197"><a name="en-us_topic_0059779362_p157081610197"></a><a name="en-us_topic_0059779362_p157081610197"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p9571201615194"><a name="en-us_topic_0059779362_p9571201615194"></a><a name="en-us_topic_0059779362_p9571201615194"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p786686410718"><a name="en-us_topic_0059779362_p786686410718"></a><a name="en-us_topic_0059779362_p786686410718"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p119911014171719"><a name="en-us_topic_0059779362_p119911014171719"></a><a name="en-us_topic_0059779362_p119911014171719"></a>Calculates the next time to execute the job. It can be an interval expression, or <strong id="b317452205411"><a name="b317452205411"></a><a name="b317452205411"></a>sysdate</strong> followed by a numeric value, for example, <strong id="b418011295410"><a name="b418011295410"></a><a name="b418011295410"></a>sysdate+1.0/24</strong>. If this parameter is left empty or set to <strong id="b1352713105523"><a name="b1352713105523"></a><a name="b1352713105523"></a>null</strong>, the job will be executed only once, and the job status will change to <strong id="b0528181014522"><a name="b0528181014522"></a><a name="b0528181014522"></a>'d'</strong> afterward.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row49911714171714"><td class="cellrowborder" valign="top" width="14.05%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p9812033124647"><a name="en-us_topic_0059779362_p9812033124647"></a><a name="en-us_topic_0059779362_p9812033124647"></a>job</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.9%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p56577178124647"><a name="en-us_topic_0059779362_p56577178124647"></a><a name="en-us_topic_0059779362_p56577178124647"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.370000000000001%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p19348667124647"><a name="en-us_topic_0059779362_p19348667124647"></a><a name="en-us_topic_0059779362_p19348667124647"></a>OUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p5712707010718"><a name="en-us_topic_0059779362_p5712707010718"></a><a name="en-us_topic_0059779362_p5712707010718"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.96999999999999%" headers="mcps1.2.6.1.5 "><p id="p1819145612223"><a name="p1819145612223"></a><a name="p1819145612223"></a>Specifies the job ID. The value ranges from 1 to 32767. When <strong id="b454516129390"><a name="b454516129390"></a><a name="b454516129390"></a>pkg_service.job_submit</strong> is called using <strong id="b155101218396"><a name="b155101218396"></a><a name="b155101218396"></a>select</strong>, this parameter can be omitted.</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

    ```
    SELECT PKG_SERVICE.JOB_SUBMIT(NULL, 'call pro_xxx();', to_date('20180101','yyyymmdd'),'sysdate+1');
    
    SELECT PKG_SERVICE.JOB_SUBMIT(NULL, 'call pro_xxx();', to_date('20180101','yyyymmdd'),'sysdate+1.0/24');
    
    CALL PKG_SERVICE.JOB_SUBMIT(NULL, 'INSERT INTO T_JOB  VALUES(1);  call pro_1(); call pro_2();', add_months(to_date('201701','yyyymm'),1), 'date_trunc(''day'',SYSDATE) + 1 +(8*60+30.0)/(24*60)' ,:jobid);
    
    SELECT PKG_SERVICE.JOB_SUBMIT (101, 'insert_msg_statistic1;', sysdate, 'sysdate+3.0/24');
    ```

-   PKG\_SERVICE.JOB\_UPDATE

    The stored procedure  **UPDATE**  modifies user-definable attributes of a job, including the job content, next-execution time, and execution interval.

    The function prototype of  **PKG\_SERVICE.JOB\_UPDATE**  is as follows:

    ```
    PKG_SERVICE.JOB_UPDATE(
    id             IN   BIGINT,
    next_time      IN   TIMESTAMP,
    interval_time  IN   TEXT,
    content        IN   TEXT);
    ```

    **Table  12**  PKG\_SERVICE.JOB\_UPDATE parameters

    <a name="en-us_topic_0059779362_table7996914151714"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779362_row1997101411174"><th class="cellrowborder" valign="top" width="11.559999999999999%" id="mcps1.2.6.1.1"><p id="en-us_topic_0059779362_p799711145171"><a name="en-us_topic_0059779362_p799711145171"></a><a name="en-us_topic_0059779362_p799711145171"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.17%" id="mcps1.2.6.1.2"><p id="en-us_topic_0059779362_p77549574233"><a name="en-us_topic_0059779362_p77549574233"></a><a name="en-us_topic_0059779362_p77549574233"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.5%" id="mcps1.2.6.1.3"><p id="en-us_topic_0059779362_p15754257112317"><a name="en-us_topic_0059779362_p15754257112317"></a><a name="en-us_topic_0059779362_p15754257112317"></a>Input/Output Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="11.67%" id="mcps1.2.6.1.4"><p id="en-us_topic_0059779362_p66133554101038"><a name="en-us_topic_0059779362_p66133554101038"></a><a name="en-us_topic_0059779362_p66133554101038"></a>Can Be Empty</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.10000000000001%" id="mcps1.2.6.1.5"><p id="en-us_topic_0059779362_p13997814101716"><a name="en-us_topic_0059779362_p13997814101716"></a><a name="en-us_topic_0059779362_p13997814101716"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059779362_row1699741410179"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p1799841419173"><a name="en-us_topic_0059779362_p1799841419173"></a><a name="en-us_topic_0059779362_p1799841419173"></a>id</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p575417578231"><a name="en-us_topic_0059779362_p575417578231"></a><a name="en-us_topic_0059779362_p575417578231"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p07541657152318"><a name="en-us_topic_0059779362_p07541657152318"></a><a name="en-us_topic_0059779362_p07541657152318"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p28521301101038"><a name="en-us_topic_0059779362_p28521301101038"></a><a name="en-us_topic_0059779362_p28521301101038"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p189981214171714"><a name="en-us_topic_0059779362_p189981214171714"></a><a name="en-us_topic_0059779362_p189981214171714"></a>Specifies the job ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row8998131461711"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p59981143177"><a name="en-us_topic_0059779362_p59981143177"></a><a name="en-us_topic_0059779362_p59981143177"></a>next_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p87541457122314"><a name="en-us_topic_0059779362_p87541457122314"></a><a name="en-us_topic_0059779362_p87541457122314"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p19754155782319"><a name="en-us_topic_0059779362_p19754155782319"></a><a name="en-us_topic_0059779362_p19754155782319"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p10270943101038"><a name="en-us_topic_0059779362_p10270943101038"></a><a name="en-us_topic_0059779362_p10270943101038"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p29287719225110"><a name="en-us_topic_0059779362_p29287719225110"></a><a name="en-us_topic_0059779362_p29287719225110"></a>Specifies the next execution time. If this parameter is left empty, the system does not update the <strong id="b18897162515312"><a name="b18897162515312"></a><a name="b18897162515312"></a>next_time</strong> parameter for the specified job. Otherwise, the system updates the <strong id="b198971725125312"><a name="b198971725125312"></a><a name="b198971725125312"></a>next_time</strong> parameter for the specified job.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059779362_row129980146178"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p17999514191711"><a name="en-us_topic_0059779362_p17999514191711"></a><a name="en-us_topic_0059779362_p17999514191711"></a>interval_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p5754457112314"><a name="en-us_topic_0059779362_p5754457112314"></a><a name="en-us_topic_0059779362_p5754457112314"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p775417572235"><a name="en-us_topic_0059779362_p775417572235"></a><a name="en-us_topic_0059779362_p775417572235"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p18961287101038"><a name="en-us_topic_0059779362_p18961287101038"></a><a name="en-us_topic_0059779362_p18961287101038"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p199991314101716"><a name="en-us_topic_0059779362_p199991314101716"></a><a name="en-us_topic_0059779362_p199991314101716"></a>Specifies the time expression for calculating the next time the job will be executed. If this parameter is left empty, the system does not update the <strong id="b12351163811535"><a name="b12351163811535"></a><a name="b12351163811535"></a>interval_time</strong> parameter for the specified job. Otherwise, the system updates the <strong id="b17358113812533"><a name="b17358113812533"></a><a name="b17358113812533"></a>interval_time</strong> parameter for the specified job after necessary validity check. If this parameter is set to <strong id="b1238164220531"><a name="b1238164220531"></a><a name="b1238164220531"></a>null</strong>, the job will be executed only once, and the job status will change to <strong id="b16244242195319"><a name="b16244242195319"></a><a name="b16244242195319"></a>'d'</strong> afterward.</p>
    </td>
    </tr>
    <tr id="row10639236203016"><td class="cellrowborder" valign="top" width="11.559999999999999%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059779362_p1599891412175"><a name="en-us_topic_0059779362_p1599891412175"></a><a name="en-us_topic_0059779362_p1599891412175"></a>content</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.17%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059779362_p117545575232"><a name="en-us_topic_0059779362_p117545575232"></a><a name="en-us_topic_0059779362_p117545575232"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.5%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059779362_p117543578232"><a name="en-us_topic_0059779362_p117543578232"></a><a name="en-us_topic_0059779362_p117543578232"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.67%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059779362_p55799599101038"><a name="en-us_topic_0059779362_p55799599101038"></a><a name="en-us_topic_0059779362_p55799599101038"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.10000000000001%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059779362_p29987145175"><a name="en-us_topic_0059779362_p29987145175"></a><a name="en-us_topic_0059779362_p29987145175"></a>Specifies the name of the stored procedure or SQL statement block that is executed. If this parameter is left empty, the system does not update the <strong id="b13686174510533"><a name="b13686174510533"></a><a name="b13686174510533"></a>content</strong> parameter for the specified job. Otherwise, the system updates the <strong id="b6692245115312"><a name="b6692245115312"></a><a name="b6692245115312"></a>content</strong> parameter for the specified job.</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

    ```
    CALL PKG_SERVICE.JOB_UPDATE(101, 'call userproc();', sysdate, 'sysdate + 1.0/1440');
    CALL PKG_SERVICE.JOB_UPDATE(101, 'insert into tbl_a values(sysdate);', sysdate, 'sysdate + 1.0/1440');
    ```

-   PKG\_SERVICE.SUBMIT\_ON\_NODES

    The stored procedure  **SUBMIT\_ON\_NODES**  creates a scheduled job on a node. Only users  **sysadmin**  and  **monitor admin**  have this permission.

    The function prototype of  **PKG\_SERVICE.SUBMIT\_ON\_NODES**  is as follows:

    ```
    PKG_SERVICE.SUBMIT_ON_NODES(
    node_name    IN   TEXT,
    database     IN   TEXT
    what         IN   TEXT,
    next_date    IN   TIMESTAMP DEFAULT sysdate,
    job_interval IN   TEXT  DEFAULT 'null',
    job          OUT  INTEGER);
    ```

    **Table  13**  PKG\_SERVICE.SUBMIT\_ON\_NODES parameters

    <a name="table786824514463"></a>
    <table><thead align="left"><tr id="row68691245124619"><th class="cellrowborder" valign="top" width="14.050000000000004%" id="mcps1.2.6.1.1"><p id="p208691845154611"><a name="p208691845154611"></a><a name="p208691845154611"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.480000000000002%" id="mcps1.2.6.1.2"><p id="p1286914459463"><a name="p1286914459463"></a><a name="p1286914459463"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="13.790000000000003%" id="mcps1.2.6.1.3"><p id="p168691745124616"><a name="p168691745124616"></a><a name="p168691745124616"></a>Input/Output Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="10.71%" id="mcps1.2.6.1.4"><p id="p986911458468"><a name="p986911458468"></a><a name="p986911458468"></a>Can Be Empty</p>
    </th>
    <th class="cellrowborder" valign="top" width="52.970000000000006%" id="mcps1.2.6.1.5"><p id="p48691045124613"><a name="p48691045124613"></a><a name="p48691045124613"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row15659812104719"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p11659012164719"><a name="p11659012164719"></a><a name="p11659012164719"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p2660191224720"><a name="p2660191224720"></a><a name="p2660191224720"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p466091234714"><a name="p466091234714"></a><a name="p466091234714"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p9660812144716"><a name="p9660812144716"></a><a name="p9660812144716"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1666013126472"><a name="p1666013126472"></a><a name="p1666013126472"></a>Specifies the node where a job is executed. Currently, the value can be <strong id="b1330181271113"><a name="b1330181271113"></a><a name="b1330181271113"></a>ALL_NODE</strong> (the job is executed on all nodes) or <strong id="b2081342713115"><a name="b2081342713115"></a><a name="b2081342713115"></a>CCN</strong>. (Note: <strong id="b5371314161210"><a name="b5371314161210"></a><a name="b5371314161210"></a>CCN</strong> is invalid in a centralized or lite deployment environment.)</p>
    </td>
    </tr>
    <tr id="row14515188164715"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p951618820471"><a name="p951618820471"></a><a name="p951618820471"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p551613813479"><a name="p551613813479"></a><a name="p551613813479"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p205161819472"><a name="p205161819472"></a><a name="p205161819472"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1351628184720"><a name="p1351628184720"></a><a name="p1351628184720"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1951617884714"><a name="p1951617884714"></a><a name="p1951617884714"></a>Database used by a database instance job. When the node type is <strong id="b1848085514111537"><a name="b1848085514111537"></a><a name="b1848085514111537"></a>'ALL_NODE'</strong>, the value can only be <strong id="b1750424962111537"><a name="b1750424962111537"></a><a name="b1750424962111537"></a>'postgres'</strong>.</p>
    </td>
    </tr>
    <tr id="row1286964524610"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p586924511464"><a name="p586924511464"></a><a name="p586924511464"></a>what</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p7869114594619"><a name="p7869114594619"></a><a name="p7869114594619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p158691545194613"><a name="p158691545194613"></a><a name="p158691545194613"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p148692457461"><a name="p148692457461"></a><a name="p148692457461"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p1686964510463"><a name="p1686964510463"></a><a name="p1686964510463"></a>Specifies the SQL statement to be executed. One or multiple DMLs, anonymous blocks, and statements for calling stored procedures, or all three combined are supported.</p>
    </td>
    </tr>
    <tr id="row08691845184620"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p586934510462"><a name="p586934510462"></a><a name="p586934510462"></a>nextdate</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p5870104584619"><a name="p5870104584619"></a><a name="p5870104584619"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p13870194517467"><a name="p13870194517467"></a><a name="p13870194517467"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p587074515464"><a name="p587074515464"></a><a name="p587074515464"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p148702456461"><a name="p148702456461"></a><a name="p148702456461"></a>Specifies the next time the job will be executed. The default value is the current system time (<strong id="b1098745284"><a name="b1098745284"></a><a name="b1098745284"></a>sysdate</strong>). If the specified time has past, the job is executed at the time it is submitted.</p>
    </td>
    </tr>
    <tr id="row12870174554619"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p38701045164614"><a name="p38701045164614"></a><a name="p38701045164614"></a>job_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p18870164524619"><a name="p18870164524619"></a><a name="p18870164524619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p1487015455462"><a name="p1487015455462"></a><a name="p1487015455462"></a>IN</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p168701245134616"><a name="p168701245134616"></a><a name="p168701245134616"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p187018452469"><a name="p187018452469"></a><a name="p187018452469"></a>Calculates the next time to execute the job. It can be an interval expression, or <strong id="b230926160"><a name="b230926160"></a><a name="b230926160"></a>sysdate</strong> followed by a numeric value, for example, <strong id="b616281659"><a name="b616281659"></a><a name="b616281659"></a>sysdate+1.0/24</strong>. If this parameter is left empty or set to <strong id="b411460022111537"><a name="b411460022111537"></a><a name="b411460022111537"></a>null</strong>, the job will be executed only once, and the job status will change to <strong id="b247865886111537"><a name="b247865886111537"></a><a name="b247865886111537"></a>'d'</strong> afterward.</p>
    </td>
    </tr>
    <tr id="row198701445114618"><td class="cellrowborder" valign="top" width="14.050000000000004%" headers="mcps1.2.6.1.1 "><p id="p1687017454462"><a name="p1687017454462"></a><a name="p1687017454462"></a>job</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.480000000000002%" headers="mcps1.2.6.1.2 "><p id="p1487094520465"><a name="p1487094520465"></a><a name="p1487094520465"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.790000000000003%" headers="mcps1.2.6.1.3 "><p id="p1487084515468"><a name="p1487084515468"></a><a name="p1487084515468"></a>OUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.71%" headers="mcps1.2.6.1.4 "><p id="p1287044511467"><a name="p1287044511467"></a><a name="p1287044511467"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.970000000000006%" headers="mcps1.2.6.1.5 "><p id="p47271715155020"><a name="p47271715155020"></a><a name="p47271715155020"></a>Specifies the job ID. The value ranges from 1 to 32767. When <strong id="b1185934213111537"><a name="b1185934213111537"></a><a name="b1185934213111537"></a>dbms.submit_on_nodes</strong> is called using <strong id="b240736349111537"><a name="b240736349111537"></a><a name="b240736349111537"></a>select</strong>, this parameter can be omitted.</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

    ```
    select pkg_service.submit_on_nodes('ALL_NODE', 'postgres', 'select capture_view_to_json(''dbe_perf.statement'', 0);', sysdate, 'interval ''60 second''');
    select pkg_service.submit_on_nodes('CCN', 'postgres', 'select capture_view_to_json(''dbe_perf.statement'', 0);', sysdate, 'interval ''60 second''');
    ```

-   PKG\_SERVICE.ISUBMIT\_ON\_NODES

    **ISUBMIT\_ON\_NODES**  has the same syntax function as  **SUBMIT\_ON\_NODES**, but the first parameter of  **ISUBMIT\_ON\_NODES**  is an input parameter, that is, a specified job ID. In contrast, that last parameter of  **ISUBMIT\_ON\_NODES**  is an output parameter, indicating the job ID automatically generated by the system. Only users  **sysadmin**  and  **monitor admin**  have this permission.

-   PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT

    This function is used to return the value of the bound OUT parameter of the INT array type and obtain the OUT parameter in a stored procedure.

    The prototype of the  **PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT**  function is as follows:

    ```
    PKG_SERVICE.SQL_GET_ARRAY_RESULT(
        context_id in int,
        pos in VARCHAR2,
        column_value inout anyarray,
        result_type in anyelement
    );
    ```

    **Table  14**  PKG\_SERVICE.SQL\_GET\_ARRAY\_RESULT parameters

    <a name="table1936782142115"></a>
    <table><thead align="left"><tr id="row4367122162117"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1736717211215"><a name="p1736717211215"></a><a name="p1736717211215"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p17367222215"><a name="p17367222215"></a><a name="p17367222215"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row236711215219"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p113672218217"><a name="p113672218217"></a><a name="p113672218217"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13672027214"><a name="p13672027214"></a><a name="p13672027214"></a>ID of the context to be queried.</p>
    </td>
    </tr>
    <tr id="row16389125912235"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1139055902314"><a name="p1139055902314"></a><a name="p1139055902314"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p339014596231"><a name="p339014596231"></a><a name="p339014596231"></a>Name of the bound parameter.</p>
    </td>
    </tr>
    <tr id="row52766716248"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p127677152415"><a name="p127677152415"></a><a name="p127677152415"></a>column_value</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p02775732419"><a name="p02775732419"></a><a name="p02775732419"></a>Return value.</p>
    </td>
    </tr>
    <tr id="row9645103182412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66451317241"><a name="p66451317241"></a><a name="p66451317241"></a>result_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p464513317243"><a name="p464513317243"></a><a name="p464513317243"></a>Return type.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT

    This function is used to return the value of the bound OUT parameter of non-array type and obtain the OUT parameter in a stored procedure.

    The prototype of the  **PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT**  function is as follows:

    ```
    PKG_SERVICE.SQL_GET_VARIABLE_RESULT(
        context_id in int,
        pos in VARCHAR2,
        result_type in anyelement
    )
    RETURNS anyelement;
    ```

    **Table  15**  PKG\_SERVICE.SQL\_GET\_VARIABLE\_RESULT parameters

    <a name="table8698191117218"></a>
    <table><thead align="left"><tr id="row6698121172115"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p12698201162118"><a name="p12698201162118"></a><a name="p12698201162118"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p19698161113218"><a name="p19698161113218"></a><a name="p19698161113218"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row3698101142113"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p136981611152112"><a name="p136981611152112"></a><a name="p136981611152112"></a>context_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5698121116211"><a name="p5698121116211"></a><a name="p5698121116211"></a>ID of the context to be queried.</p>
    </td>
    </tr>
    <tr id="row2371252112717"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p173721252142715"><a name="p173721252142715"></a><a name="p173721252142715"></a>pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p143721952132718"><a name="p143721952132718"></a><a name="p143721952132718"></a>Name of the bound parameter.</p>
    </td>
    </tr>
    <tr id="row195665612712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1356185622718"><a name="p1356185622718"></a><a name="p1356185622718"></a>result_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p165685652710"><a name="p165685652710"></a><a name="p165685652710"></a>Return type.</p>
    </td>
    </tr>
    </tbody>
    </table>


