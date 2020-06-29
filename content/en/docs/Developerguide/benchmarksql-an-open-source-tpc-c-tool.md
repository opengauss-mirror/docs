# BenchmarkSQL – An Open-Source TPC-C Tool<a name="EN-US_TOPIC_0257867417"></a>

For example, to test TPCC, the  **BenchmarkSQL**  can****be used, as follows：

-   Download  **benchmarksql**  from the following link –[https://osdn.net/frs/g\_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip](https://osdn.net/frs/g_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip).
-   Under run/sql.common, adjust the schema creation scripts to MOT syntax and avoid unsupported DDLs.
-   The following attachment is a sql.common that has already been adjusted for MOT. Replace the contents of the sql.common folder with the contents of the following attachment and execute.

![](figures/en-us_image_0257713450.png)

This folder includes all the create tables and indexes with MOT syntax. The only difference is in Tables DDL – create FOREIGN table and drop FOREIGN table, which have an additional FOREIGN****keyword that specifies it as a MOT Table. In case the reader cannot download the embedded file, the required change should added to relevant files in the sql.common folder before their execution. IS THIS CORRECT? GGG

**Note**  – The benchmark test is executed using a standard interactive SQL mode without stored procedures.

