# Explicit Cursor<a name="EN-US_TOPIC_0289900877"></a>

An explicit cursor is used to process query statements, particularly when query results are multiple records.

## Procedure<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_sc5b784c0452149129c10634ecba2baa7"></a>

An explicit cursor performs the following six PL/SQL steps to process query statements:

1.  Define a static cursor: Define a cursor name and its corresponding  **SELECT**  statement.

    [Figure 1](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f3cd97ed9f2474aa785f5626e468a75de)  shows the syntax diagram for defining a static cursor.

    **Figure  1**  static\_cursor\_define::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f3cd97ed9f2474aa785f5626e468a75de"></a>  
    ![](figures/static_cursor_define.jpg "static_cursor_define")

    Parameter description:

    -   _cursor\_name_: defines a cursor name.
    -   _parameter_: specifies cursor parameters. Only input parameters are allowed. Its format is as follows:

        ```
        parameter_name datatype
        ```

    -   _select\_statement_: specifies a query statement.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >The system automatically determines whether the cursor can be used for backward fetching based on the execution plan.

    Define a dynamic cursor: Define a  **ref**  cursor, which means that the cursor can be opened dynamically by a set of static SQL statements. Define the type of the  **ref**  cursor first, and then the cursor variable of this cursor type. Dynamically bind a  **SELECT**  statement through  **OPEN FOR**  when the cursor is opened.

    [Figure 2](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f1579c1867b984124b10da33d032a55b0)  and  [Figure 3](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fceaf870eaa73494496e8a65e7afc8cec)  show the syntax diagrams for defining a dynamic cursor.

    **Figure  2**  cursor\_typename::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f1579c1867b984124b10da33d032a55b0"></a>  
    ![](figures/cursor_typename.png "cursor_typename")

    **Figure  3**  dynamic\_cursor\_define::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fceaf870eaa73494496e8a65e7afc8cec"></a>  
    ![](figures/dynamic_cursor_define.png "dynamic_cursor_define")

2.  Open the static cursor: Execute the  **SELECT**  statement corresponding to the cursor. The query result is placed in the workspace and the pointer directs to the head of the workspace to identify the cursor result set. If the cursor query statement carries the  **FOR UPDATE**  option, the  **OPEN**  statement locks the data rows corresponding to the cursor result set in the database table.

    [Figure 4](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fac5b397fa6184f35a416626255a9280d)  shows the syntax diagram for opening a static cursor.

    **Figure  4**  open\_static\_cursor::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fac5b397fa6184f35a416626255a9280d"></a>  
    ![](figures/open_static_cursor.png "open_static_cursor")

    Open the dynamic cursor: Use the  **OPEN FOR**  statement to open the dynamic cursor and the SQL statement is dynamically bound.

    [Figure 5](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f8e95270034c744b3bec53bd78cf56a22)  shows the syntax diagrams for opening a dynamic cursor.

    **Figure  5**  open\_dynamic\_cursor::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f8e95270034c744b3bec53bd78cf56a22"></a>  
    ![](figures/open_dynamic_cursor.png "open_dynamic_cursor")

    A PL/SQL program cannot use the  **OPEN**  statement to repeatedly open a cursor.

3.  Fetch cursor data: Retrieve data rows in the result set and place them in specified output variables.

    [Figure 6](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f0759ffa7118d4c4481c0f0fd9a600351)  shows the syntax diagrams for fetching cursor data.

    **Figure  6**  fetch\_cursor::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_f0759ffa7118d4c4481c0f0fd9a600351"></a>  
    ![](figures/fetch_cursor.png "fetch_cursor")

4.  Process the record.
5.  Continue to process until the active set has no record.
6.  Close the cursor: After you fetch and process the data in the cursor result set, close the cursor in time to release system resources used by the cursor and invalidate the workspace of the cursor so that the  **FETCH**  statement cannot be used to fetch data any more. A closed cursor can be reopened by an  **OPEN**  statement.

    [Figure 7](#en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fdd13133c237949828f65e55cb3ec2f5b)  shows the syntax diagram for closing a cursor.

    **Figure  7**  close\_cursor::=<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_fdd13133c237949828f65e55cb3ec2f5b"></a>  
    ![](figures/close_cursor.jpg "close_cursor")


## Attributes<a name="en-us_topic_0283137015_en-us_topic_0237122244_en-us_topic_0059778930_s1bdd24dd1cbd463db67fcb2eb8a5dfbd"></a>

Cursor attributes are used to control program procedures or know program status. When a DML statement is executed, the PL/SQL opens a built-in cursor and processes its result. A cursor is a memory segment for maintaining query results. It is opened when a DML statement is executed and closed when the execution is finished. An explicit cursor has the following attributes:

-   **%FOUND**: Boolean attribute, which returns  **TRUE**  if the last fetch returns a row.
-   **%NOTFOUND**: Boolean attribute, which works opposite to the  **%FOUND**  attribute.
-   **%ISOPEN**: Boolean attribute, which returns  **TRUE**  if the cursor has been opened.
-   **%ROWCOUNT**: numeric attribute, which returns the number of records fetched from the cursor.

