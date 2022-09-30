# Intelligent Cardinality Estimation<a name="EN-US_TOPIC_0000001321634298"></a>

## Availability<a name="section1420315335481"></a>

This feature is available since openGauss 3.1.0.

## Introduction<a name="section18982185114134"></a>

Intelligent cardinality estimation uses lightweight algorithms in databases to model multi-column data distribution and provides the capability of multi-column equality cardinality estimation. In scenarios where data skew occurs and columns are closely related, more accurate estimation results can be obtained to provide accurate cost reference for the optimizer, improving plan generation accuracy and database query execution efficiency.

## Benefits<a name="section1160749171918"></a>

Users can create intelligent statistics to improve the accuracy of multi-column statistics and improve the query optimization performance.

## Description<a name="section165492040132317"></a>

The intelligent estimation cardinality first uses data samples in the database to model data distribution, and compresses and stores the model in the database. The optimizer triggers intelligent estimation in the execution plan generation phase to estimate the cost more accurately and generate a better plan.

## Enhancements<a name="section818524702617"></a>

None

## Constraints<a name="section13678185110268"></a>

-   The database is running properly and resources are sufficient.
-   Only the following data types are supported: FLOAT8, Double Precision, FlOAT4, REAL, INT16, BIGINT, INTEGER, VARCHAR, CHARACTER VARYING, CHAR, CHARACTER, and NUMERIC.
-   Only query cardinality estimation with no more than 64 columns is supported.
-   To ensure system performance, model creation uses only a maximum of 200,000 data samples. If the data is too sparse, the estimation result may be inaccurate.
-   To make full use of the limited memory for model access acceleration, you are advised to create a maximum of 30 AI statistics columns. Otherwise, memory replacement may be triggered.
-   If data of the variable-length string type is too long, the creation and estimation performance of cardinality estimation model may be affected.
-   In the current version, if both MCV and Bayesian networks are created, the cardinality estimation performance is low. Therefore, you are not advised to create MCV and Bayesian networks.

## Dependencies<a name="section11899817102719"></a>

It depends on the multi-column statistics creation syntax and data sampling algorithms in databases.
