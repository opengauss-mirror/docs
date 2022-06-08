# Best Practices of Data Import<a name="EN-US_TOPIC_0000001119812468"></a>

## Using COPY to Import Data<a name="section6169828135512"></a>

The  **COPY**  statement imports data from local and remote databases in parallel.  **COPY**  imports large amounts of data more efficiently than using  **INSERT**  statements.

For details about how to use the  **COPY**  statement, see  [Running the COPY FROM STDIN Statement to Import Data](running-the-copy-from-stdin-statement-to-import-data.md).

## Using a gsql Meta-Command to Import Data<a name="section346516473558"></a>

The  **\\copy**  command can be used to import data after you log in to a database through any  **psql**  client. Different from the  **COPY**  statement, the  **\\copy**  command reads data from or writes to a file.

Data read or written using the  **COPY**  statement is transferred through the connection between the server and the client and may not be efficient. The  **COPY**  statement is recommended when the amount of data is large.

For details about how to use the  **\\copy**  command, see  [Using a gsql Meta-Command to Import Data](using-a-gsql-meta-command-to-import-data.md).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**\\copy**  applies only to small-scale data import in good format. It does not preprocess invalid characters or provide error tolerance. Therefore,  **\\copy**  cannot be used in scenarios where abnormal data exists.  **COPY**  is preferred for data import.

## Using INSERT to Insert Multiple Rows<a name="section106965235123"></a>

If the  **\\copy**  command cannot be used for insertion and you need to insert SQL statements, you can use the  **INSERT**  statement for multiple rows as required. If you use a column-store table and insert one or more rows at a time, the data compression efficiency is low.

Multi-row inserts improve performance by bulk inserts. The following example inserts three rows into a three-column table using a single  **INSERT**  statement. This is still a small insert, shown simply to illustrate the syntax of a multi-row insert. For details about how to create a table, see  [Creating and Managing Tables](creating-and-managing-tables.md).

To insert multiple rows of data to the table  **customer\_t1**, run the following command:

```
openGauss=# insert into customer_t1 values 
(68, 'a1', 'zhou','wang'),
(43, 'b1', 'wu', 'zhao'),
(95, 'c1', 'zheng', 'qian');
```

For more details and examples, see  [INSERT](insert.md).

## Using INSERT for Bulk Insert<a name="s95f70783c7444e69b510ac69e04be503"></a>

Use a bulk insert operation with a  **SELECT**  clause for high-performance data insertion.

Use the  **[INSERT](insert.md)**  and  **[CREATE TABLE AS](create-table-as.md)**  statements when you need to move data or a subset of data from one table into another.

Assume that you have created a backup table  **customer\_t2**  for table  **customer\_t1**. To insert data from  **customer\_t1**  to  **customer\_t2**, run the following statements:

```
openGauss=# CREATE TABLE customer_t2
(
    c_customer_sk             integer,
    c_customer_id             char(5),
    c_first_name              char(6),
    c_last_name               char(8)
);
openGauss=# INSERT INTO customer_t2 SELECT * FROM customer_t1;
```

The preceding example is equivalent to:

```
openGauss=# CREATE TABLE customer_t2 AS SELECT * FROM customer_t1;
```

