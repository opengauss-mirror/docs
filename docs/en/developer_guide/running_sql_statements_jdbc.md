# Running SQL Statements<a name="EN-US_TOPIC_0289900186"></a>

## Running a Common SQL Statement<a name="en-us_topic_0283137004_en-us_topic_0237120383_en-us_topic_0213179129_en-us_topic_0189250824_en-us_topic_0059777674_s6d6619f4f2df48198e8e7a32ccc4b47a"></a>

To enable an application to operate data in the database by running SQL statements \(statements that do not need to transfer parameters\), perform the following operations:

1.  Create a statement object by calling the  **createStatement**  method in  **Connection**.

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    Statement stmt = conn.createStatement();
    ```

2.  Run the SQL statement by calling the  **executeUpdate**  method in  **Statement**.

    ```
    int rc = stmt.executeUpdate("CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32));");
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If an execution request \(not in a transaction block\) received in the database contains multiple statements, the request is packed into a transaction.  **VACUUM**  is not supported in a transaction block. If one of the statements fails, the entire request will be rolled back.
    >-   Use semicolons \(;\) to separate statements. Stored procedures, functions, and anonymous blocks do not support multi-statement execution.
    >-   The slash \(/\) can be used as the terminator for creating a single stored procedure, function, or anonymous block.
    >-   When **prepareThreshold** is set to **1**, each SQL statement executed by the statement is cached because cached statements are not evicted by default (default value of **preferQueryMode**). As a result, memory bloat may occur. In this case, set **preferQueryMode** to **extendedCacheEverything** to evict cached statements.


3.  Close the statement object.

    ```
    stmt.close();
    ```


## Running a Prepared SQL Statement<a name="en-us_topic_0283137004_en-us_topic_0237120383_en-us_topic_0213179129_en-us_topic_0189250824_en-us_topic_0059777674_scea08fc60d7c4db0ae5f31990a842a03"></a>

Prepared statements are complied and optimized once but can be used in different scenarios by assigning multiple values. Using prepared statements improves execution efficiency. If you want to run a statement for several times, use a precompiled statement. Perform the following operations:

1.  Create a prepared statement object by calling the prepareStatement method in Connection.

    ```
    PreparedStatement pstmt = con.prepareStatement("UPDATE customer_t1 SET c_customer_name = ? WHERE c_customer_sk = 1");
    ```

2.  Set parameters by calling the setShort method in PreparedStatement.

    ```
    pstmt.setShort(1, (short)2);
    ```

3.  Run the prepared statement by calling the executeUpdate method in PreparedStatement.

    ```
    int rowcount = pstmt.executeUpdate();
    ```

4.  Close the prepared statement object by calling the close method in PreparedStatement.

    ```
    pstmt.close();
    ```


## Calling a Stored Procedure<a name="en-us_topic_0283137004_en-us_topic_0237120383_en-us_topic_0213179129_en-us_topic_0189250824_en-us_topic_0059777674_sed43ac42d9414b01bfad409279941f46"></a>

To call an existing stored procedure through JDBC in openGauss, perform the following operations:

1.  Create a call statement object by calling the  **prepareCall**  method in  **Connection**.

    ```
    Connection myConn = DriverManager.getConnection("url","user","password");
    CallableStatement cstmt = myConn.prepareCall("{? = CALL TESTPROC(?,?,?)}");
    ```

2.  Set parameters by calling the  **setInt**  method in  **CallableStatement**.

    ```
    cstmt.setInt(2, 50); 
    cstmt.setInt(1, 20);
    cstmt.setInt(3, 90);
    ```

3.  Register an output parameter by calling the  **registerOutParameter**  method in  **CallableStatement**.

    ```
    cstmt.registerOutParameter(4, Types.INTEGER);  // Register an OUT parameter of the integer type.
    ```

4.  Call the stored procedure by calling the  **execute**  method in  **CallableStatement**.

    ```
    cstmt.execute();
    ```

5.  Obtain the output parameter by calling the  **getInt**  method in  **CallableStatement**.

    ```
    int out = cstmt.getInt(4);  // Obtain the OUT parameter.
    ```

    Example:

    ```
    // The following stored procedure (containing the OUT parameter) has been created:
    create or replace procedure testproc 
    (
        psv_in1 in integer,
        psv_in2 in integer,
        psv_inout in out integer
    )
    as
    begin
        psv_inout := psv_in1 + psv_in2 + psv_inout;
    end;
    /
    ```

6.  Close the call statement by calling the  **close**  method in  **CallableStatement**.

    ```
    cstmt.close();
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Many database classes such as Connection, Statement, and ResultSet have a close\(\) method. Close these classes after using their objects. Closing Connection will close all the related Statements, and closing a Statement will close its ResultSet.
    >-   Some JDBC drivers support named parameters, which can be used to set parameters by name rather than sequence. If a parameter has the default value, you do not need to specify any parameter value but can use the default value directly. Even though the parameter sequence changes during a stored procedure, the application does not need to be modified. Currently, the openGauss JDBC driver does not support this method.
    >-   openGauss does not support functions containing OUT parameters, or stored procedures and function parameters containing default values.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If JDBC is used to call a stored procedure whose returned value is a cursor, the returned cursor cannot be used.
    >-   A stored procedure and an SQL statement must be run separately.
    >-   Output parameters must be registered for parameters of the inout type in the stored procedure.


## Calling a Stored Procedure When Overloading Is Enabled in Oracle Compatibility Mode<a name="section1430462411108"></a>

After the  **behavior\_compat\_options='proc\_outparam\_override'**  parameter is enabled, perform the following steps to call the stored procedure:

1.  Create a call statement object by calling the  **prepareCall**  method in  **Connection**.

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    CallableStatement cs = conn.prepareCall("{ CALL TEST_PROC(?,?,?) }");
    ```

2.  Set parameters by calling the  **setInt**  method in  **CallableStatement**.

    ```
    PGobject pGobject = new PGobject();
    pGobject.setType("public.compfoo"); // Set the composite type name. The format is "schema.typename".
    pGobject.setValue("(1,demo)"); //: Bind the value of the composite type. The format is "(value1,value2)".
    cs.setObject(1, pGobject);
    ```

3.  Register an output parameter by calling the  **registerOutParameter**  method in  **CallableStatement**.

    ```
    //Register an out parameter of the composite type. The format is "schema.typename".
    cs.registerOutParameter(2, Types.STRUCT, "public.compfoo");  
    ```

4.  Call the stored procedure by calling the  **execute**  method in  **CallableStatement**.

    ```
    cs.execute();
    ```

5.  Obtain the output parameter by calling the  **getObject**  method in  **CallableStatement**.

    ```
    PGobject result = (PGobject)cs.getObject(2);  // Obtain the out parameter.
    result.getValue(); // Obtain the string value of the composite type.
    result.getArrayValue(); // Obtain the array values of the composite type and sort the values according to the sequence of columns of the composite type.
    result.getStruct(); // Obtain the subtype names of the composite type and sort them according to the creation sequence.
    ```

6.  Close the call statement by calling the  **close**  method in  **CallableStatement**.

    ```
    cs.close();
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   After the Oracle compatibility mode is enabled, you must use the  **\{call proc\_name\(?,?,?\)\}**  format to call a stored procedure and use the  **\{? = call func\_name\(?,?\)\}**  format to call a function. The question mark \(?\) on the left of the equal mark is the placeholder for the return value of the function and is used to register the return value of the function.
    >-   After  **behavior\_compat\_options**  is set to  **'proc\_outparam\_override'**, the service needs to re-establish a connection. Otherwise, the stored procedures and functions cannot be correctly called.
    >-   If a function or stored procedure contains a composite type, bind and register parameters in the schema.typename format.


Example:

```
//Create a composite data type in the database.
CREATE TYPE compfoo AS (f1 int, f3 text);
// The following stored procedure (containing the OUT parameter) has been created:
create or replace procedure test_proc
(
    psv_in in compfoo,
    psv_out out compfoo
)
as
begin
    psv_out := psv_in;
end;
/
```

## Batch Processing<a name="en-us_topic_0283137004_en-us_topic_0237120383_en-us_topic_0213179129_en-us_topic_0189250824_en-us_topic_0059777674_sb0c28cebb51d482c8bd996ce7fef3a6c"></a>

When a prepared statement processes multiple pieces of similar data, the database creates only one execution plan. This improves compilation and optimization efficiency. Perform the following operations:

1.  Create a prepared statement object by calling the prepareStatement method in Connection.

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    PreparedStatement pstmt = conn.prepareStatement("INSERT INTO customer_t1 VALUES (?)");
    ```

2.  Call the setShort parameter for each piece of data, and call addBatch to confirm that the setting is complete.

    ```
    pstmt.setShort(1, (short)2);
    pstmt.addBatch();
    ```

3.  Perform batch processing by calling the executeBatch method in PreparedStatement.

    ```
    int[] rowcount = pstmt.executeBatch();
    ```

4.  Close the prepared statement object by calling the close method in PreparedStatement.

    ```
    pstmt.close();
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Do not terminate a batch processing action when it is ongoing; otherwise, database performance will deteriorate. Therefore, disable automatic commit during batch processing. Manually commit several rows at a time. The statement for disabling automatic commit is  **conn.setAutoCommit\(false\);**.
