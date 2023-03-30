# Query Native Compilation<a name="EN-US_TOPIC_0270402397"></a>

An additional feature of MOT is the ability to prepare and parse  _pre-compiled full queries_  in a native format \(using a PREPARE statement\) before they are needed for execution.

This native format can later be executed \(using an EXECUTE command\) more efficiently. This type of execution is much quicker because the native format bypasses multiple database processing layers during execution and thus enables better performance.

This division of labor avoids repetitive parse analysis operations. In this way, queries and transaction statements are executed in an interactive manner. This feature is sometimes called  _Just-In-Time \(JIT\)_  query compilation.

## Query Compilation – PREPARE Statement<a name="section25681763321"></a>

To use MOT’s native query compilation, call the PREPARE client statement before the query is executed. This instructs MOT to pre-compile the query and/or to pre-load previously pre-compiled code from a cache.

The following is an example of PREPARE syntax in SQL –

```
PREPARE name [ ( data_type [, ...] ) ] AS statement 
```

PREPARE creates a prepared statement in the database server, which is a server-side object that can be used to optimize performance.

## Execute Command<a name="section18641173363213"></a>

When an EXECUTE command is subsequently issued, the prepared statement is parsed, analyzed, rewritten and executed. This division of labor avoids repetitive parse analysis operations, while enabling the execution plan to depend on specific provided setting values.

The following is an example of how to invoke a PREPARE and then an EXECUTE statement in a Java application.

```
conn = DriverManager.getConnection(connectionUrl, connectionUser, connectionPassword);
 
// Example 1: PREPARE without bind settings
String query = "SELECT * FROM getusers"; 
PreparedStatement prepStmt1 = conn.prepareStatement(query);
ResultSet rs1 = pstatement.executeQuery())
while (rs1.next()) {…}
 
// Example 2: PREPARE with bind settings
String sqlStmt = "SELECT * FROM employees where first_name=? and last_name like ?";
PreparedStatement prepStmt2 = conn.prepareStatement(sqlStmt);
prepStmt2.setString(1, "Mark"); // first name “Mark”
prepStmt2.setString(2, "%n%"); // last name contains a letter “n”
ResultSet rs2 = prepStmt2.executeQuery())
while (rs2.next()) {…}
```

The following describes the supported and unsupported features of MOT compilation.

## Supported Queries for Lite Execution<a name="section043478113319"></a>

The following query types are suitable for lite execution –

-   Simple point queries –
    -   SELECT \(including SELECT for UPDATE\)
    -   UPDATE
    -   DELETE

-   INSERT query
-   Range UPDATE queries that refer to a full prefix of the primary key
-   Range SELECT queries that refer to a full prefix of the primary key
-   JOIN queries where one or both parts collapse to a point query
-   JOIN queries that refer to a full prefix of the primary key in each joined table

## Unsupported Queries for Lite Execution<a name="section28009205347"></a>

Any special query attribute disqualifies it for Lite Execution. In particular, if any of the following conditions apply, then the query is declared as unsuitable for Lite Execution. You may refer to the Unsupported Queries for Native Compilation and Lite Execution section for more information.

It is important to emphasize that in case a query statement does not fit

native compilation and lite execution, no error is reported to the client and the query will still be executed in a normal and standard manner.

For more information about MOT native compilation capabilities, see either the section about Query Native Compilation or a more detailed information in the Query Native Compilation \(JIT\) section.

