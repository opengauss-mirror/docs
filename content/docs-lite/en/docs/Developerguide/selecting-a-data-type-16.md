# Selecting a Data Type<a name="EN-US_TOPIC_0289900882"></a>

Use the following principles to select efficient data types:

1.  **Select data types that facilitate data calculation.**

    Generally, the calculation of integers \(including common comparison calculations, such as =, \>, <, ≥, ≤, and ≠ and group by\) is more efficient than that of strings and floating point numbers. For example, if you need to perform a point query on a column-store table whose numeric column is used as a filter condition, the query will take over 10s. If you change the data type from  **NUMERIC**  to  **INT**, the query duration will be reduced to 1.8s.

2.  **Select data types with a short length.**

    Data types with short length reduce both the data file size and the memory used for computing, improving the I/O and computing performance. For example, use  **SMALLINT**  instead of  **INT**, and  **INT**  instead of  **BIGINT**.

3.  **Use the same data type for a join.**

    You are advised to use the same data type for a join. To join columns with different data types, the database needs to convert them to the same type, which leads to additional performance overheads.


