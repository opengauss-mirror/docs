openGauss has a large object facility, large object interface is modeled after the Unix file-system interface, with analogues of open, read, write, lseek, etc. All large object manipulation using these functions must take place within an SQL transaction block, since large object file descriptors are only valid for the duration of a transaction. If an error occurs while executing any one of these functions, the function will return an otherwise-impossible value, typically 0 or -1. A message describing the error is stored in the connection object and can be retrieved with PQerrorMessage. Client applications that use these functions should include the header file libpq/libpq-fs.h and link with the libpq library. Client applications cannot use these functions while a libpq connection is in pipeline mode.

The following are the operation interfaces for large objects:

-   **[lo_creat and lo_create](lo_create.md)**  

-   **[lo_import and lo_import_with_oid](lo_import.md)**   

-   **[lo_export](lo_export.md)**  

-   **[lo_open](lo_open.md)**  

-   **[lo_write](lo_write.md)**  

-   **[lo_read](lo_read.md)**  

-   **[lo_lseek and lo_lseek64](lo_lseek.md)**  

-   **[lo_tell and lo_tell64](lo_tell.md)**  

-   **[lo_truncate and lo_truncate64](lo_truncate.md)**  

-   **[lo_close](lo_close.md)**  

-   **[lo_unlink](lo_unlink.md)**  