openGauss具有大对象的功能，大对象接口按照Unix文件系统的接口建模，也有相似的open、read、write、lseek等。所有使用这些函数对大对象的操作都必须发生在一个SQL事务块中，因为大对象文件描述符只在事务期间有效。在执行任何一个这种函数期间如果发生一个错误，该函数将会返回一个其他的不可能值，典型的是0或-1。 一个关于该错误的消息亦会被保存在连接对象中，可以通过PQerrorMessage检索到。使用这些函数的客户端应用应该包括头文件libpq/libpq-fs.h并链接libpq库。当libpq连接处于管道模式时，客户端应用程序不能使用这些函数。

以下为大对象的操作接口：

-   **[lo_creat、lo_create](lo_create.md)**  

-   **[lo_import、lo_import_with_oid](lo_import.md)**   

-   **[lo_export](lo_export.md)**  

-   **[lo_open](lo_open.md)**  

-   **[lo_write](lo_write.md)**  

-   **[lo_read](lo_read.md)**  

-   **[lo_lseek、lo_lseek64](lo_lseek.md)**  

-   **[lo_tell、lo_tell64](lo_tell.md)**  

-   **[lo_truncate、lo_truncate64](lo_truncate.md)**  

-   **[lo_close](lo_close.md)**  

-   **[lo_unlink](lo_unlink.md)**  