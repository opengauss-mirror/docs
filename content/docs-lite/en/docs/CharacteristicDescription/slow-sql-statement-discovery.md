# Slow SQL Statement Discovery<a name="EN-US_TOPIC_0000001105555120"></a>

## Availability<a name="section1420315335481"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section18982185114134"></a>

This feature servers as an SQL statement execution time forecast tool. It forecasts the execution time of SQL statements based on the statement logic similarity and historical execution records without obtaining the SQL statement execution plan using a template.

## Benefits<a name="section1160749171918"></a>

-   This feature does not require users to provide SQL execution plans. Therefore, the database performance is not affected.
-   Different from other algorithms in the industry that are limited to OLAP or OLTP, this feature is more widely used.

## Description<a name="section165492040132317"></a>

The SQLdiag focuses on the historical SQL statements of the database, summarizes the execution performance of the historical SQL statements, and then uses the historical SQL statements to infer unknown services. The execution duration of SQL statements in the database does not differ greatly in a short period of time. SQLdiag can detect the statement result set similar to the executed SQL statements from historical data and predict the execution duration of SQL statements based on the SQL vectorization technology and template-based method.

## Enhancements<a name="section818524702617"></a>

None.

## Constraints<a name="section13678185110268"></a>

-   The historical logs and the format of the workload to be predicted meet the requirements. You can use the GUC parameter of the database to enable the collection or use the monitoring tool to collect logs.
-   To ensure the prediction accuracy, the historical statement logs provided by users should be as comprehensive and representative as possible.
-   The Python environment has been configured as required.

## Dependencies<a name="section11899817102719"></a>

None.

