# Development Specifications<a name="EN-US_TOPIC_0244720257"></a>

If the connection pool mechanism is used during application development, comply with the following specifications:

-   If GUC parameters are set in the connection, run  **SET SESSION AUTHORIZATION DEFAULT;RESET ALL;**  to clear the connection status before you return the connection to the connection pool.
-   If a temporary table is used, delete the temporary table before you return the connection to the connection pool.

If you do not do so, the connection in the connection pool will be stateful, which affects subsequent operations on the connection pool.

