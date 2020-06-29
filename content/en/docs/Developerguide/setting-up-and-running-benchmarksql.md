# Setting Up and Running BenchmarkSQL<a name="EN-US_TOPIC_0257867419"></a>

The following describes how to set up and run a BenchmarkSQL test.

## TPCC Configuration<a name="en-us_topic_0257713275_section8169112115409"></a>

Configure TPCC as follows:

-   Full Transactions – 5
-   Standard Workload Distribution
    -   newOrderWeight=45
    -   paymentWeight=43
    -   orderStatusWeight=4
    -   deliveryWeight=4
    -   stockLevelWeight=4

-   Number of Warehouses – 512 Warehouses

## RUNNING THE BENCHMARK<a name="en-us_topic_0257713275_section1446914912403"></a>

Anyone can run the benchmark by starting up the server and running the  **benchmarksql**  scripts.

To run the benchmark:

1.  Go to the client folder and create an sql.common link to sql.common.opengauss.mot in order to test MOT or to sql.common.pg in order to test the Postgres tables.
2.  Start up the database server.
3.  Configure the props.pg file in the client.
4.  Run the benchmark**.**

