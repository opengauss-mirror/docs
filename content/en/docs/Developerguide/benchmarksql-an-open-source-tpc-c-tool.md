# BenchmarkSQL – An Open-Source TPC-C Tool<a name="EN-US_TOPIC_0260488131"></a>

For example, to test TPCC, the  **BenchmarkSQL**  can****be used, as follows –

-   Download  **benchmarksql**  from the following link –  [https://osdn.net/frs/g\_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip](https://osdn.net/frs/g_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip)
-   Under run/sql.common, adjust the schema creation scripts to MOT syntax and avoid unsupported DDLs.  Alternatively, the adjusted scripts can be directly downloaded from the following link –  [https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/sql.common.opengauss.mot.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/sql.common.opengauss.mot.tar.gz)

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The benchmark test is executed using a standard interactive SQL mode without stored procedures.  

## Setting Up and Running BenchmarkSQL<a name="section894720508114"></a>

The following describes how to set up and run a BenchmarkSQL test:

-   TPCC Configuration

Configure TPC-C as follows:

-   Full Transactions – 5
-   Standard Workload Distribution:
    -   newOrderWeight=45
    -   paymentWeight=43
    -   orderStatusWeight=4
    -   deliveryWeight=4
    -   stockLevelWeight=4

-   Number of Warehouses – 512 Warehouses

## Running the Benchmark<a name="section226214281328"></a>

Anyone can run the benchmark by starting up the server and running the  **benchmarksql**  scripts.

To run the benchmark

1.  Go to the client folder and link  **sql.common**  to  **sql.common.opengauss.mot**  in order to test MOT.
2.  Start up the database server.
3.  Configure the  **props.pg**  file in the client.
4.  Run the benchmark**.**

