# Data Check Tool gs\_datacheck<a name="EN-US_TOPIC_0000001264707837"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 5.0.0.

## Introduction<a name="section35020791"></a>

gs\_datacheck is a tool for checking data from MySQL to openGauss based on the JDK 11 and Spring Boot 2.6.7 framework. This tool provides real-time full and incremental data check capabilities to implement data consistency check from MySQL to openGauss.

## Benefits<a name="section46751668"></a>

You can use the gs\_datacheck tool to check data consistency from the MySQL database to the openGauss database.

## Description<a name="section18111828"></a>

gs\_datacheck provides full and incremental check functions to check data consistency between MySQL and openGauss databases.

- Full data check:

  After full data migration is complete, the extract service extracts data from the source MySQL database and target openGauss database in JDBC mode, normalizes and calculates the data, and pushes the calculated intermediate data to Kafka. Finally, the check service extracts intermediate data from Kafka, constructs a Merkle tree, checks table data through Merkle tree comparison, and outputs the check result.

- Incremental data check:

  The debezium service listens to the incremental data of the source MySQL database to the specified topic. Then, the source extract service processes the incremental data of the topic and triggers the incremental check.


## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   JDK 11 or later is required.
-   The current version supports data check only between the source MySQL database and the target openGauss database.
-   The current version supports only data check and does not support table object check.
-   MySQL 5.7 or later is required.
-   The current version does not support geographical location geometric data check.
-   When row-level filtering rules are configured for data check, only data within the [offset,count] range can be extracted and filtered.
-   When data within the range [10,100] is extracted based on the row-level filtering rule, if data before the range [0,10] is deleted from the source end, then data in the table is offset. As a result, the data check result is different. In this case, set **offset** to a smaller value to expand the range and set **count** to a larger value to increase the number of extracted records, for example, [3,107].
-   If a primary key UPDATE statement is not synchronized to the target end through incremental migration or an error occurs during primary key synchronization, data check is performed. The updated data on the source end and the old data on the target end are two independent data records. When the check difference is processed, two statements are generated to delete the old data and insert the new data. In this scenario, a primary key UPDATE statement is split into two statements (INSERT+DELETE) and executed in two transactions. Atomicity cannot be ensured.
-   Incremental check does not support table-level rules.
-   Incremental check does not support row-level rules.
-   Incremental check supports only data addition, deletion, and modification checks. The consistency of table structures (objects) is not checked.

## Dependencies<a name="section57771982"></a>

None.
