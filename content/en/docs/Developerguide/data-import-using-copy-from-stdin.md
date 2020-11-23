# Data Import Using COPY FROM STDIN<a name="EN-US_TOPIC_0242370282"></a>

openGauss supports complete database transaction level addition, deletion and modification operations. INSERT is the simplest way to write data. This method is suitable for scenarios where the amount of data written is not large and the concurrency is not high. This method is applicable to low-concurrency scenarios where a small volume of data is to import.

Run the  **COPY FROM STDIN**  statement to import data to openGauss in either of the following ways:

-   Write data into the openGauss database by typing. For details, see  [COPY](copy.md).
-   Import data from a file or database to openGauss through the CopyManager interface driven by JDBC. You can use any parameters in the  **COPY**  syntax.

