# Pseudocolumn ROWNUM<a name="EN-US_TOPIC_0000001152275227"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.0.1.

## Introduction<a name="section35020791"></a>

ROWNUM is a sequence number generated for each record in the query result. The sequence number starts from 1 and is unique.

## Benefits<a name="section46751668"></a>

-   This feature is compatible with Oracle features, facilitating database migration.
-   Similar to the LIMIT feature, this feature can filter out the first  _n_  records in the result set.

## Description<a name="section18111828"></a>

ROWNUM \(pseudocolumn\), which is used to label the records that meet conditions in the SQL query in sequence. In the query result, the value of  **ROWNUM**  in the first line is  **1**, the value of  **ROWNUM**  in the second line is  **2**, and so on. The value of  **ROWNUM**  in the  _n_th line is  _n_. This feature is used to filter the first  _n_  rows of data in the query result set, which is similar to the LIMIT function in openGauss.

## Enhancements<a name="section28788730"></a>

During internal execution, the optimizer rewrites ROWNUM into LIMIT to accelerate the execution speed.

## Constraints<a name="section06531946143616"></a>

-   Do not use the pseudocolumn ROWNUM as an alias to avoid ambiguity in SQL statements.
-   Do not use ROWNUM when creating an index. Bad example:  **create index index\_name on table\(rownum\);**
-   Do not use ROWNUM as the default value when creating a table. Bad example:  **create table table\_name\(id int default rownum\);**
-   Do not use ROWNUM as an alias in the WHERE clause. Bad example:  **select rownum rn from table where rn < 5;**
-   Do not use ROWNUM when inserting data. Bad example:  **insert into table values \(rownum,'blue'\)**
-   Do not use ROWNUM in a table-less query. Bad example:  **select \* from \(values\(rownum,1\)\), x\(a,b\);**
-   If the HAVING clause contains ROWNUM \(and is not in the aggregate function\), the GROUP BY clause must contain ROWNUM \(and is not in the aggregate function\).

## Dependencies<a name="section57771982"></a>

None.

