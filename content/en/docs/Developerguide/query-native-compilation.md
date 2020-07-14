# Query Native Compilation<a name="EN-US_TOPIC_0260578554"></a>
An additional feature of MOT is the ability to  **compile full queries**  into a more native format, which then bypass multiple database processing layers and perform significantly better. This feature is sometimes called Just-In-Time \(JIT\) query compilation.

Users can benefit from MOT query compilation by calling the  **PREPARE **statement before the query is executed. In this way, queries and transaction statements are executed in an interactive manner. This is accomplished by first by using the PREPARE client command \(which instructs MOT to compile the query or to load already pre-compiled code from a cache\) and then by executing the statement.

The following is an example of  **PREPARE**  syntax in SQL

```
PREPARE name [ ( data_type [, ...] ) ] AS statement
```

**PREPARE**  creates a prepared statement in the database server, which is a server-side object that can be used to optimize performance. Upon its execution, the specified query statement is parsed, analyzed and rewritten. When an  **EXECUTE**  command is subsequently issued, the prepared statement is planned and executed. This division of labor avoids repetitive parse analysis work, while allowing the execution plan to depend on the specific setting values supplied.

If the tables mentioned in the query statement are MOT tables, the MOT compilation takes charge of the object preparation and performs a special optimization by compiling the query into LLVM IR byte code. To improve performance further, MOT JIT applies a caching policy for its LLVM code results, enabling them to be reused for the same queries across different sessions.

When the resulting execute query command reaches the database, it uses the corresponding IR byte code which is executed directly and more efficiently within the MOT engine. This is referred to as  _Lite Execution_.

The following is an example of how to invoke a  **PREPARE**  statement in a Java application

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

## Supported Queries for Lite Execution<a name="section23679317151"></a>

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

## Unsupported Queries for Lite Execution<a name="section1477313021514"></a>

Any special query attribute disqualifies it for Lite Execution. In particular, if any of the following conditions apply, then the query is declared as unsuitable for Lite Execution. You may refer to the  [Unsupported Queries for Native Compilation and Lite Execution](unsupported-queries-for-native-compilation-and-lite-execution.md)  section for more information.

It is important to emphasize that in case a query statement does not fit

native compilation and lite execution, no error is reported to the client and the query will still be executed in a normal and standard manner.

For more information about MOT native compilation capabilities, see either the section about  **Using Query Native Compilation**  or a more detailed information in the  **Query Native Compilation \(JIT\)**  section.

