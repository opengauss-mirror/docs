# Development Specifications<a name="EN-US_TOPIC_0289900537"></a>

If the connection pool mechanism is used during application development, comply with the following specifications:

-   If GUC parameters are set in the connection, run  **SET SESSION AUTHORIZATION DEFAULT;RESET ALL;**  to clear the connection status before you return the connection to the connection pool.
-   If a temporary table is used, delete the temporary table before you return the connection to the connection pool.

If you do not do so, the connection in the connection pool will be stateful, which affects subsequent operations on the connection pool.

Compatibility:

-   The new driver is forward compatible with the database. To use the new features added to the driver and database, you must upgrade the database.
-   Setting  **behavior\_compat\_options**  to  **'proc\_outparam\_override'**  is applicable only in A-compatible mode.

