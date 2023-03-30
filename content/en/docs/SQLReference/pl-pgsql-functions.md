# PL/pgSQL Functions<a name="EN-US_TOPIC_0289901009"></a>

PL/pgSQL is a loadable procedural language.

The functions created using PL/pgSQL can be used in any place where you can use built-in functions. For example, you can create calculation functions with complex conditions and use them to define operators or use them for index expressions.

SQL is used by most databases as a query language. It is portable and easy to learn. Each SQL statement must be executed independently by a database server.

In this case, when a client application sends a query to the server, it must wait for it to be processed, receive and process the results, and then perform some calculation before sending more queries to the server. If the client and server are not on the same machine, all these operations will cause inter-process communication and increase network loads.

PL/pgSQL enables a whole computing part and a series of queries to be grouped inside a database server. This makes procedural language available and SQL easier to use. In addition, the client/server communication cost is reduced.

-   Extra round-trip communication between clients and servers is eliminated.
-   Intermediate results that are not required by clients do not need to be sorted or transmitted between the clients and servers.
-   Parsing can be skipped in multiple rounds of queries.

PL/pgSQL can use all data types, operators, and functions in SQL. Some common functions, such as gs_extend_library.

For details about the PL/pgSQL syntax for creating functions, see  [CREATE FUNCTION](create-function.md). PL/pgSQL is a loadable procedural language. Its application method is similar to that of  [Stored Procedure](stored-procedure.md). There is only one difference. Stored procedures have no return values but the functions have.

