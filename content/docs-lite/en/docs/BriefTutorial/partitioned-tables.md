# Partitioned Tables<a name="EN-US_TOPIC_0000001210141886"></a>

If a table contains a large amount of data, data query and operation efficiency will be severely affected. openGauss can logically divide a table into multiple shards to avoid processing a large amount of data at a time and then improve the processing efficiency.

openGauss supports the following types of partitioned tables:

-   [Range partitioned table](#section936985843718): One or more columns are divided into multiple ranges. A partition is created for each range to store data. For example, sales data can be partitioned by month.
-   [List partitioned table](#section05611948194510): Partitions are created based on values in a column. For example, sales data is divided by sales store.
-   [Interval partitioned table](#section792613366813): It is a special type of range partitions. The interval value definition is added. If no matched partition is found when a record is inserted, partitions can be automatically created based on the interval.
-   [Hash partitioned table](#section119401959122818): The modulus and remainder are specified for each partition based on a column of the table, and the records to be inserted into the table are allocated to the corresponding partitions.

In addition to creating a partitioned table, you can perform the following operations:

-   [Querying a partitioned table](#section210605213434): Data is queried by partition name or value in a partition.
-   [Importing data](#section4704175612310): Data is imported directly or from an existing table.
-   [Modifying a partitioned table](#section1966814239435): Partitions are added, deleted,split, or combined, or partition names are changed.
-   [Deleting a partitioned table](#section148862013302): The operation is the same as that of deleting a common table.

## Classification of Range Partitioned Tables<a name="section936985843718"></a>

Range partitioned tables are classified into the following types:

-   [VALUES LESS THAN](#section9821913280): specifies the partition range based on the upper limit of each partition. Upper limit of the previous partition ≤ Range of the partition ≤ Upper limit of the current partition.
-   [START END](#section2417444172113): Partitioning is performed in the following methods.
    -   [Providing the start point and end point of the partition](#li9343973444)
    -   [Providing only the start point of the partition](#li15714728114411)
    -   [Providing only the end point of the partition](#li105902358449)
    -   [Providing the interval value within the range after the start point and end point of the partition are provided](#li108701418134416)
    -   Comprehensively using the preceding methods


## Syntax for Creating a VALUES LESS THAN Range Partitioned Table<a name="section9821913280"></a>

```
CREATE TABLE partition_table_name
( [column_name data_type ]
  [, ... ]
)
     PARTITION BY RANGE (partition_key) 
         (
         PARTITION partition_name VALUES LESS THAN (partition_value | MAXVALUE})
         [, ... ]
         ); 
```

## Parameters for Creating a VALUES LESS THAN Range Partitioned Table<a name="section12934121034018"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **column\_name**

    Specifies the name of the column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.


-   **partition\_key**

    Specifies the name of the partition key.

    In this case, a maximum of four partition keys are supported.

-   **partition\_name**

    Specifies the name of a range partition.

-   **VALUES LESS THAN**

    Specifies that the value in the partition must be less than the upper limit value.

-   **partition\_value**

    Specifies the upper limit of a range partition, and the value depends on the type specified by  **partition\_key**.

-   **MAXVALUE**

    Specifies the upper limit of the last range partition.


## Example of Creating a VALUES LESS THAN Range Partitioned Table<a name="section61471944124917"></a>

Example 1: Create the  **sales\_table**  range partitioned table. The table has four partitions and the data type of their partition keys is DATE. The range of the partition is as follows:  **sales\_date**  < 2021-04-01, 2021-04-01 ≤  **sales\_date**  < 2021-07-01, 2021-07-01 ≤  **sales\_date**  < 2021-10-01, and 2021-10-01 ≤  **sales\_date**  <  **MAXVALUE**.

```
-- Create the sales_table partitioned table.
openGauss=# CREATE TABLE sales_table
(
    order_no              INTEGER          NOT NULL,
    goods_name            CHAR(20)         NOT NULL,
    sales_date            DATE             NOT NULL,
    sales_volume          INTEGER,
    sales_store           CHAR(20)
)
PARTITION BY RANGE(sales_date)
(
        PARTITION season1 VALUES LESS THAN('2021-04-01 00:00:00'),
        PARTITION season2 VALUES LESS THAN('2021-07-01 00:00:00'),
        PARTITION season3 VALUES LESS THAN('2021-10-01 00:00:00'),
        PARTITION season4 VALUES LESS THAN(MAXVALUE)
);
-- Insert data into the season1 partition.
openGauss=# INSERT INTO sales_table VALUES(1, 'jacket', '2021-01-10 00:00:00', 3,'Alaska');

-- Insert data into the season2 partition.
openGauss=# INSERT INTO sales_table VALUES(2, 'hat', '2021-05-06 00:00:00', 5,'Clolorado');

-- Insert data into the season3 partition.
openGauss=# INSERT INTO sales_table VALUES(3, 'shirt', '2021-09-17 00:00:00', 7,'Florida');

-- Insert data into the season4 partition.
openGauss=# INSERT INTO sales_table VALUES(4, 'coat', '2021-10-21 00:00:00', 9,'Hawaii');
```

## Syntax for Querying a Partitioned Table<a name="section210605213434"></a>

```
SELECT * FROM partition_table_name PARTITION { ( partition_name ) | FOR (  partition_value [, ...] ) }
```

## Parameters for Querying a Partitioned Table<a name="section690512516237"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **partition\_name**

    Specifies the partition name.


-   **partition\_value**

    Specifies the value of the partition. The partition where the value specified by the  **PARTITION FOR**  clause is located is the partition to be queried.


## Syntax for Querying a Partitioned Table<a name="section198181348131419"></a>

Example 2: Query the  **sales\_table**  partitioned table created in example 1.

```
-- Query data in the sales_table table.
openGauss=# SELECT * FROM sales_table;
 order_no |      goods_name      |     sales_date      | sales_volume |     sale
s_store
----------+----------------------+---------------------+--------------+---------
-------------
        1 | jacket               | 2021-01-10 00:00:00 |            3 | Alaska

        2 | hat                  | 2021-05-06 00:00:00 |            5 | Clolorado

        3 | shirt                | 2021-09-17 00:00:00 |            7 | Florida

        4 | coat                 | 2021-10-21 00:00:00 |            9 | Hawaii

(4 rows)

-- Query the data of the fourth quarter in the sales_table table. sales_table PARTITION (season4) is used to reference the partition where the data of the fourth quarter is located.
openGauss=# SELECT * FROM sales_table PARTITION (season4);
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        4 | coat                 | 2021-10-21 00:00:00 |            9 | Hawaii
(1 row)

-- Query the data of the first quarter in the sales_table table. sales_table PARTITION FOR ('2021-3-21 00:00:00') is used to reference the partition where the data of the first quarter is located. '2021-3-21 00:00:00' is located in the partition where the data of the first quarter is located.
openGauss=# SELECT * FROM sales_table PARTITION FOR ('2021-3-21 00:00:00');
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        1 | jacket               | 2021-01-10 00:00:00 |            3 | Alaska
(1 row)
```

## Syntax for Creating a START END Range Partitioned Table<a name="section2417444172113"></a>

A START END range partitioned table can be created by different methods, and these methods can be combined within a partitioned table.

-   <a name="li9343973444"></a>Method 1: By executing  **START\(partition\_value\) END \(partition\_value | MAXVALUE\)**

    ```
    CREATE TABLE partition_table_name
    ( [column_name data_type ]
      [, ... ]
    )
         PARTITION BY RANGE (partition_key) 
             (
             PARTITION partition_name START(partition_value) END (partition_value | MAXVALUE)
             [, ... ]
             ); 
    ```

-   <a name="li15714728114411"></a>Method 2: By executing  **START\(partition\_value\)**

    ```
    CREATE TABLE partition_table_name
    ( [column_name data_type ]
        [, ... ]
    ] )
         PARTITION BY RANGE (partition_key)  
             (
             PARTITION partition_name START(partition_value) 
             [, ... ]  
             ); 
    ```

-   <a name="li105902358449"></a>Method 3: By executing  **END\(partition\_value | MAXVALUE\)**

    ```
    CREATE TABLE partition_table_name
    ( [column_name data_type ]
        [, ... ]
    ] )
         PARTITION BY RANGE (partition_key)  
             (
             PARTITION partition_name END(partition_value | MAXVALUE) 
             [, ... ]  
             ); 
    ```


-   <a name="li108701418134416"></a>Method 4: By executing  **START\(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)**

    ```
    CREATE TABLE partition_table_name
    ( [column_name data_type ]
        [, ... ]
    ] )
         PARTITION BY RANGE (partition_key)  
             (
             PARTITION partition_name START(partition_value) END (partition_value) EVERY (interval_value)
             [, ... ]  
             ); 
    ```


## Parameters for Creating a START END Range Partitioned Table<a name="section147413468154"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **column\_name**

    Specifies the name of the column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.


-   **partition\_key**

    Specifies the name of the partition key.

    In this case, only one partition key is supported.

-   **partition\_name**

    Specifies the name or prefix of the range partition.

    -   If the definition is in the  **START\(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)**  clause and the value of  **partition\_name**  is  **p1**, the partition names are  **p1\_1**,  **p1\_2**, and so on.

        For example, if  **PARTITION p1 START\(1\) END\(4\) EVERY\(1\)**  is defined, the generated partitions are \[1, 2\), \[2, 3\), and \[3, 4\), and their names are  **p1\_1**,  **p1\_2**, and  **p1\_3**. In this case,  **p1**  is a name prefix.

    -   If the defined statement is in the first place and has  **START**  specified, the range \(_MINVALUE_,  **START**\) will be automatically used as the first actual partition, and its name will be  **p1\_0**. The other partitions are then named  **p1\_1**,  **p1\_2**, and so on.

        For example, if  **PARTITION p1 START\(1\), PARTITION p2 START\(2\)**  is defined, generated partitions are \(_MINVALUE_, 1\), \[1, 2\), and \[2,  _MAXVALUE_\), and their names will be  **p1\_0**,  **p1\_1**, and  **p2**. In this case,  **p1**  is a name prefix and  **p2**  is a partition name.  **MINVALUE**  indicates the minimum value.

    -   In other cases, this parameter specifies the range partition name.

-   **VALUES LESS THAN**

    Specifies that the value in the partition must be less than the upper limit value.

-   **partition\_value**

    Specifies the endpoint value \(start or end point\) of the range partition. The value depends on the type specified by  **partition\_key**.

-   **interval\_value**

    Splits the range specified by  **\[START, END\)**  and specifies the width of each partition after splitting. If the value of  **\(END-START\)**  cannot be exactly divided by the value of  **EVERY**, only the width of the last partition is less than the value of  **EVERY**.

-   **MAXVALUE**

    Specifies the upper limit of the last range partition.


## Example of Creating a START END Range Partitioned Table<a name="section689175113388"></a>

Example 3: Execute  **START\(partition\_value\) END \(partition\_value | MAXVALUE\)**  to create a START END partitioned table named  **graderecord**. There are three partitions, and their partition keys are of the INTEGER type. The partition ranges are as follows: 0 ≤  **grade**  < 60, 60 ≤  **grade**  < 90, and 90 ≤  **grade**  <  **MAXVALUE**.

```
-- Create the graderecord partitioned table.
openGauss=# CREATE TABLE graderecord  
  (  
  number INTEGER,  
  name CHAR(20),  
  class CHAR(20),  
  grade INTEGER
  )  
  PARTITION BY RANGE(grade)  
  (  
  PARTITION pass START(60) END(90),  
  PARTITION excellent START(90) END(MAXVALUE)
  );

-- Insert data into the partition.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
openGauss=# insert into graderecord values('210102','Ben','21.01',62);  
openGauss=# insert into graderecord values('210103','Brain','21.01',26);  
openGauss=# insert into graderecord values('210204','Carl','21.02',77);  
openGauss=# insert into graderecord values('210205','David','21.02',47);  
openGauss=# insert into graderecord values('210206','Eric','21.02',97);  
openGauss=# insert into graderecord values('210307','Frank','21.03',90);  
openGauss=# insert into graderecord values('210308','Gavin','21.03',100);  
openGauss=# insert into graderecord values('210309','Henry','21.03',67);  
openGauss=# insert into graderecord values('210410','Jack','21.04',75);  
openGauss=# insert into graderecord values('210311','Jerry','21.04',60);  

-- Query data in the graderecord table.
openGauss=# SELECT * FROM graderecord;
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(11 rows)

-- Query data in the pass partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass);
ERROR:  partition "pass" of relation "graderecord" does not exist
The query fails.
The cause is that the defined PARTITION pass START(60) END(90), statement is in the first place and has START specified. Therefore, the range (MINVALUE, 60) will be automatically used as the first actual partition, and its name will be pass_0.
The name of the partition with the range of 60 ≤ grade < 90 is pass_1.

-- Query data in the pass_0 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass_0);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
(2 rows)

-- Query data in the pass_1 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass_1);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
(5 rows)

-- Query data in the execllent partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (excellent);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(4 rows)
```

Example 4: Execute  **START\(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)**  to create a START END range partitioned table named  **metro\_ride\_record**. There are seven partitions and their partition keys are of the INTEGER type. The value of  **ride\_stations\_number**  is less than  **21**. Every three stations form a partition.

```
-- Create the metro_ride_record partitioned table. Record the number of passengers, getting-on and getting-off stations, and number of stations. A partition is created for every three stations based on the number of stations.
openGauss=# CREATE TABLE metro_ride_record  
  (  
  record_number INTEGER,  
  name CHAR(20),  
  enter_station CHAR(20),
  leave_station CHAR(20),
  ride_stations_number INTEGER
  )  
  PARTITION BY RANGE(ride_stations_number)  
  (  
  PARTITION cost START(3) END(21)  EVERY (3)
   );

-- Insert data into the partition.
openGauss=# insert into metro_ride_record values('120101','Brain','Tung Chung','Tsing Yi',2);  
openGauss=# insert into metro_ride_record values('120102','David','Po Lam','Yau Tong',4);  
openGauss=# insert into metro_ride_record values('120103','Ben','Yau Ma Tei','Wong Tai Sin',6);  
openGauss=# insert into metro_ride_record values('120104','Carl','Tai Wo Hau','Prince Edward',8);  
openGauss=# insert into metro_ride_record values('120105','Henry','Admiralty','Lai King',10);  
openGauss=# insert into metro_ride_record values('120106','Jack','Chai Wan','Central',12);  
openGauss=# insert into metro_ride_record values('120107','Jerry','Central','Tai Wo Hau',14);  
openGauss=# insert into metro_ride_record values('120108','Alan','Diamond Hill','Kwai Hing',16);  
openGauss=# insert into metro_ride_record values('120109','Eric','Jordan','Shek Kip Mei',18);  
openGauss=# insert into metro_ride_record values('120110','Frank','Lok Fu','Sunny Bay',20);  

-- Query data in the metro_ride_record table.
openGauss=# SELECT * FROM metro_ride_record;
 record_number |         name         |    enter_station     |    leave_station     | ride_stations_number
---------------+----------------------+----------------------+----------------------+----------------------
        120101 | Brain                | Tung Chung           | Tsing Yi             |                    2
        120102 | David                | Po Lam               | Yau Tong             |                    4
        120103 | Ben                  | Yau Ma Tei           | Wong Tai Sin         |                    6
        120104 | Carl                 | Tai Wo Hau           | Prince Edward        |                    8
        120105 | Henry                | Admiralty            | Lai King             |                   10
        120106 | Jack                 | Chai Wan             | Central              |                   12
        120107 | Jerry                | Central              | Tai Wo Hau           |                   14
        120108 | Alan                 | Diamond Hill         | Kwai Hing            |                   16
        120109 | Eric                 | Jordan               | Shek Kip Mei         |                   18
        120110 | Frank                | Lok Fu               | Sunny Bay            |                   20
(10 rows)

The defined PARTITION cost START(3) END(21)  EVERY (3) statement is in the first place and has START specified. Therefore, the range (MINVALUE, 3) will be automatically used as the first actual partition, and its name will be cost_0.
Other partitions are cost_1, ..., and cost_6.

-- Query data in the cost_0 partition of the metro_ride_record table.
openGauss=# SELECT * FROM metro_ride_record PARTITION (cost_0);
 record_number |         name         |    enter_station     |    leave_station     | ride_stations_number
---------------+----------------------+----------------------+----------------------+----------------------
        120101 | Brain                | Tung Chung           | Tsing Yi             |                    2
(1 row)

-- Query data in the cost_1 partition of the metro_ride_record table.
openGauss=# SELECT * FROM metro_ride_record PARTITION (cost_1);
 record_number |         name         |    enter_station     |    leave_station     | ride_stations_number
---------------+----------------------+----------------------+----------------------+----------------------
        120102 | David                | Po Lam               | Yau Tong             |                    4
(1 row)

-- Query data in the cost_6 partition of the metro_ride_record table.
openGauss=# SELECT * FROM metro_ride_record PARTITION (cost_6);
 record_number |         name         |    enter_station     |    leave_station     | ride_stations_number
---------------+----------------------+----------------------+----------------------+----------------------
        120109 | Eric                 | Jordan               | Shek Kip Mei         |                   18
        120110 | Frank                | Lok Fu               | Sunny Bay            |                   20
(2 rows)
```

Example 5: Execute  **START\(partition\_value\)**  to create a START END range partitioned table named  **graderecord**. There are three partitions, and their partition keys are of the INTEGER type. The partition ranges are as follows: 0 ≤  **grade**  < 60, 60 ≤  **grade**  < 90, and 90 ≤  **grade**  <  **MAXVALUE**.

```
-- Create the graderecord partitioned table.
openGauss=# CREATE TABLE graderecord  
  (  
  number INTEGER,  
  name CHAR(20),  
  class CHAR(20),  
  grade INTEGER
  )  
  PARTITION BY RANGE(grade)  
  (  
  PARTITION pass START(60),  
  PARTITION excellent START(90)
  );

-- Insert data into the partition.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
openGauss=# insert into graderecord values('210102','Ben','21.01',62);  
openGauss=# insert into graderecord values('210103','Brain','21.01',26);  
openGauss=# insert into graderecord values('210204','Carl','21.02',77);  
openGauss=# insert into graderecord values('210205','David','21.02',47);  
openGauss=# insert into graderecord values('210206','Eric','21.02',97);  
openGauss=# insert into graderecord values('210307','Frank','21.03',90);  
openGauss=# insert into graderecord values('210308','Gavin','21.03',100);  
openGauss=# insert into graderecord values('210309','Henry','21.03',67);  
openGauss=# insert into graderecord values('210410','Jack','21.04',75);  
openGauss=# insert into graderecord values('210311','Jerry','21.04',60);


-- Query data in the graderecord table.
openGauss=# SELECT * FROM graderecord;
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(11 rows)

-- Query data in the pass partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass);
ERROR:  partition "pass" of relation "graderecord" does not exist
The query fails.
The cause is that the defined PARTITION pass START(60), statement is in the first place and has START specified. Therefore, the range (MINVALUE, 60) will be automatically used as the first actual partition, and its name will be pass_0.
The name of the partition with the range of 60 ≤ grade < 90 is pass_1.

-- Query data in the pass_0 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass_0);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
(2 rows)

-- Query data in the pass_1 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass_1);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
(5 rows)

-- Query data in the execllent partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (excellent);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(4 rows)
```

Example 6: Execute  **END\(partition\_value | MAXVALUE\)**  to create a START END range partitioned table named  **graderecord**. There are three partitions, and their partition keys are of the INTEGER type. The partition ranges are as follows: 0 ≤  **grade**  < 60, 60 ≤  **grade**  < 90, and 90 ≤  **grade**  <  **MAXVALUE**.

```
-- Create the graderecord partitioned table.
openGauss=# CREATE TABLE graderecord  
  (  
  number INTEGER,  
  name CHAR(20),  
  class CHAR(20),  
  grade INTEGER
  )  
  PARTITION BY RANGE(grade)  
  (  
  PARTITION no_pass END(60),  
  PARTITION pass END(90),
  PARTITION excellent END(MAXVALUE)
  );

-- Insert data into the partition.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
openGauss=# insert into graderecord values('210102','Ben','21.01',62);  
openGauss=# insert into graderecord values('210103','Brain','21.01',26);  
openGauss=# insert into graderecord values('210204','Carl','21.02',77);  
openGauss=# insert into graderecord values('210205','David','21.02',47);  
openGauss=# insert into graderecord values('210206','Eric','21.02',97);  
openGauss=# insert into graderecord values('210307','Frank','21.03',90);  
openGauss=# insert into graderecord values('210308','Gavin','21.03',100);  
openGauss=# insert into graderecord values('210309','Henry','21.03',67);  
openGauss=# insert into graderecord values('210410','Jack','21.04',75);  
openGauss=# insert into graderecord values('210311','Jerry','21.04',60);


-- Query data in the graderecord table.
openGauss=# SELECT * FROM graderecord;
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(11 rows)

-- Query data in the no_pass partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (no_pass);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210103 | Brain                | 21.01                |    26
 210205 | David                | 21.02                |    47
(2 rows)

-- Query data in the pass partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (pass);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210102 | Ben                  | 21.01                |    62
 210204 | Carl                 | 21.02                |    77
 210309 | Henry                | 21.03                |    67
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
(5 rows)

-- Query data in the execllent partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (excellent);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210101 | Alan                 | 21.01                |    92
 210206 | Eric                 | 21.02                |    97
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
(4 rows)
```

## Syntax for Creating a List Partitioned Table<a name="section05611948194510"></a>

```
CREATE TABLE partition_table_name
( [column_name data_type ]
  [, ... ]
)
     PARTITION BY LIST (partition_key) 
         (
         PARTITION partition_name VALUES (list_values_clause)
         [, ... ]
         ); 
```

## Parameters for Creating a List Partitioned Table<a name="section750754717556"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **column\_name**

    Specifies the name of the column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.


-   **partition\_key**

    Specifies the name of the partition key.

    The list partitioning policy supports only one column of partition keys.

-   **partition\_name**

    Specifies the name of a range partition.

-   **list\_values\_clause**

    There are one or more key values of the corresponding partition. Use commas \(,\) to separate multiple key values.

-   **VALUES \(DEFAULT\)**

    If the added data contains key values that are not listed in  **list\_values\_clause**, the data is stored in the partition corresponding to  **VALUES \(DEFAULT\)**.

-   **MAXVALUE**

    Specifies the upper limit of the last range partition.


## Example of Creating a List Partitioned Table<a name="section2750189105610"></a>

Example 7: Create the  **graderecord**  list partitioned table. There are four partitions, and their partition keys are of the CHAR type. The partition ranges are 21.01, 21.02, 21.03, and 21.04.

```
-- Create the graderecord partitioned table.
openGauss=# CREATE TABLE graderecord  
  (  
  number INTEGER,  
  name CHAR(20),  
  class CHAR(20),  
  grade INTEGER
  )  
  PARTITION BY LIST(class)  
  (  
  PARTITION class_01 VALUES ('21.01'),  
  PARTITION class_02 VALUES ('21.02'),
  PARTITION class_03 VALUES ('21.03'),
  PARTITION class_04 VALUES ('21.04')
  );

-- Insert data into the partition.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
openGauss=# insert into graderecord values('210102','Ben','21.01',62);  
openGauss=# insert into graderecord values('210103','Brain','21.01',26);  
openGauss=# insert into graderecord values('210204','Carl','21.02',77);  
openGauss=# insert into graderecord values('210205','David','21.02',47);  
openGauss=# insert into graderecord values('210206','Eric','21.02',97);  
openGauss=# insert into graderecord values('210307','Frank','21.03',90);  
openGauss=# insert into graderecord values('210308','Gavin','21.03',100);  
openGauss=# insert into graderecord values('210309','Henry','21.03',67);  
openGauss=# insert into graderecord values('210410','Jack','21.04',75);  
openGauss=# insert into graderecord values('210311','Jerry','21.04',60);


-- Query data in the graderecord table.
openGauss=# SELECT * FROM graderecord;
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
 210307 | Frank                | 21.03                |    90
 210308 | Gavin                | 21.03                |   100
 210309 | Henry                | 21.03                |    67
 210204 | Carl                 | 21.02                |    77
 210205 | David                | 21.02                |    47
 210206 | Eric                 | 21.02                |    97
 210101 | Alan                 | 21.01                |    92
 210102 | Ben                  | 21.01                |    62
 210103 | Brain                | 21.01                |    26
(11 rows)

-- Query data in the class_01 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (class_01);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210101 | Alan                 | 21.01                |    92
 210102 | Ben                  | 21.01                |    62
 210103 | Brain                | 21.01                |    26
(3 rows)

-- Query data in the class_04 partition of the graderecord table.
openGauss=# SELECT * FROM graderecord PARTITION (class_04);
 number |         name         |        class         | grade
--------+----------------------+----------------------+-------
 210410 | Jack                 | 21.04                |    75
 210311 | Jerry                | 21.04                |    60
(2 rows)
```

## Syntax for Creating an Interval Partitioned Table<a name="section792613366813"></a>

Interval partitioning adds the definition of the interval value  **PARTITION BY RANGE \(partition\_key\)**  on the basis of range partitioning.

The syntax of the  **VALUES LESS THAN**  interval partition is as follows:

```
CREATE TABLE partition_table_name
( [column_name data_type ]
  [, ... ]
)
     PARTITION BY RANGE (partition_key) 
         (
         INTERVAL ('interval_expr') 
         PARTITION partition_name VALUES LESS THAN (partition_value | MAXVALUE})
         [, ... ]
         ); 
```

The syntax for creating a START END interval partitioned table is as follows:

Method 1: By executing  **START\(partition\_value\) END \(partition\_value | MAXVALUE\)**

```
CREATE TABLE partition_table_name
( [column_name data_type ]
  [, ... ]
)
     PARTITION BY RANGE (partition_key) 
         (
         INTERVAL ('interval_expr') 
         PARTITION partition_name START(partition_value) END (partition_value | MAXVALUE)
         [, ... ]
         ); 
```

Method 2: By executing  **START\(partition\_value\) END \(partition\_value\) EVERY \(interval\_value\)**

```
CREATE TABLE partition_table_name
( [column_name data_type ]
    [, ... ]
] )
     PARTITION BY RANGE (partition_key)  
         (
         PARTITION partition_name START(partition_value) END (partition_value) EVERY (interval_value)
         [, ... ]  
         ); 
```

Method 3: By executing  **START\(partition\_value\)**

```
CREATE TABLE partition_table_name
( [column_name data_type ]
    [, ... ]
] )
     PARTITION BY RANGE (partition_key)  
         (
         INTERVAL ('interval_expr') 
         PARTITION partition_name START(partition_value) 
         [, ... ]  
         ); 
```

Mwthod 4: By executing  **END\(partition\_value | MAXVALUE\)**

```
CREATE TABLE partition_table_name
( [column_name data_type ]
    [, ... ]
] )
     PARTITION BY RANGE (partition_key)  
         INTERVAL ('interval_expr') 
         (
         PARTITION partition_name END(partition_value | MAXVALUE) 
         [, ... ]  
         ); 
```

## Parameters for Creating an Interval Partitioned Table<a name="section16926136187"></a>

-   **INTERVAL \('interval\_expr'\)**

    Defines interval partitioning. Only the TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\], TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\] and DATE data types are supported.

-   **interval\_expr**

    Specifies the interval for automatically creating partitions, for example, 1 day or 1 month.

-   **partition\_name**

    Specifies the name of a range partition.

    The partitions automatically created by the system are named  **sys\_p1**,  **sys\_p2**,  **sys\_p3**, and the like.


## Syntax for Creating an Interval Partitioned Table<a name="section18923858973"></a>

Example 8: Creating the  **sales\_table**  interval partitioned table.

```
-- Create the sales_table partitioned table.
openGauss=# CREATE TABLE sales_table
(
    order_no              INTEGER          NOT NULL,
    goods_name            CHAR(20)         NOT NULL,
    sales_date            DATE             NOT NULL,
    sales_volume          INTEGER,
    sales_store           CHAR(20)
)
PARTITION BY RANGE(sales_date)
        INTERVAL ('1 month') 
        (
        PARTITION start VALUES LESS THAN('2021-01-01 00:00:00'),
        PARTITION later VALUES LESS THAN('2021-01-10 00:00:00')
        );
-- Insert data into the later partition.
openGauss=# INSERT INTO sales_table VALUES(1, 'jacket', '2021-01-8 00:00:00', 3,'Alaska');

-- If you do not insert data into existing partitions, the system creates the sys_p1 partition.
openGauss=# INSERT INTO sales_table VALUES(2, 'hat', '2021-04-06 00:00:00', 255,'Clolorado');

-- If you do not insert data into existing partitions, the system creates the sys_p2 partition.
openGauss=# INSERT INTO sales_table VALUES(3, 'shirt', '2021-11-17 00:00:00', 7000,'Florida');

-- Insert data into the start partition.
openGauss=# INSERT INTO sales_table VALUES(4, 'coat', '2020-10-21 00:00:00', 9000,'Hawaii');

-- Query data in the sales_table table.
openGauss=# SELECT * FROM sales_table;
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        4 | coat                 | 2020-10-21 00:00:00 |         9000 | Hawaii
        1 | jacket               | 2021-01-08 00:00:00 |            3 | Alaska
        2 | hat                  | 2021-04-06 00:00:00 |          255 | Clolorado
        3 | shirt                | 2021-11-17 00:00:00 |         7000 | Florida
(4 rows)

-- Query data in the start partition of the sales_table table. In this example, sales_table PARTITION (start); is used to reference partitions.
openGauss=# SELECT * FROM sales_table PARTITION (start);
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        4 | coat                 | 2020-10-21 00:00:00 |         9000 | Hawaii
(1 row)

-- Query data in the later partition of the sales_table table. In this example, sales_table PARTITION (later); is used to reference partitions.
openGauss=# SELECT * FROM sales_table PARTITION (later);
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        1 | jacket               | 2021-01-08 00:00:00 |            3 | Alaska
(1 row)

-- Query data in the sys_p1 partition of the sales_table table. In this example, sales_table PARTITION (sys_p1); is used to reference partitions.
openGauss=# SELECT * FROM sales_table PARTITION (sys_p1);
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        2 | hat                  | 2021-04-06 00:00:00 |          255 | Clolorado
(1 row)

-- Query data in the sys_p2 partition of the sales_table table. In this example, sales_table PARTITION (sys_p2); is used to reference partitions.
openGauss=# SELECT * FROM sales_table PARTITION (sys_p2);
 order_no |      goods_name      |     sales_date      | sales_volume |     sales_store
----------+----------------------+---------------------+--------------+----------------------
        3 | shirt                | 2021-11-17 00:00:00 |         7000 | Florida
(1 row)
```

## Syntax for Creating a Hash Partitioned Table<a name="section119401959122818"></a>

```
CREATE TABLE partition_table_name
( [column_name data_type ]
  [, ... ]
)
     PARTITION BY HASH (partition_key) 
        (PARTITION partition_name )
        [, ... ]
    ); 
```

## Parameters for Creating a Hash Partitioned Table<a name="section1941185912820"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **column\_name**

    Specifies the name of the column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.

-   **partition\_key**

    Specifies the name of the partition key. The hash partitioning policy supports only one column of partition keys.

-   **partition\_name**

    Specifies the name of a hash partition. The number of hash partitions to be created is the same as the number of partition names.


## Example of Creating a Hash Partitioned Table<a name="section1194275912810"></a>

Example 9: Create the  **hash\_partition\_table**  hash partitioned table.

```
-- Create the hash_partition_table hash partitioned table.
openGauss=# create table hash_partition_table (
col1 int, 
col2 int)
partition by hash(col1)
(
partition p1,
partition p2
);

-- Insert data.
openGauss=# INSERT INTO hash_partition_table VALUES(1, 1);
INSERT 0 1
openGauss=# INSERT INTO hash_partition_table VALUES(2, 2);
INSERT 0 1
openGauss=# INSERT INTO hash_partition_table VALUES(3, 3);
INSERT 0 1
openGauss=# INSERT INTO hash_partition_table VALUES(4, 4);
INSERT 0 1

-- View the data.
openGauss=# select * from hash_partition_table partition (p1);
 col1 | col2
------+------
    3 |    3
    4 |    4
(2 rows)

openGauss=# select * from hash_partition_table partition (p2);
 col1 | col2
------+------
    1 |    1
    2 |    2
(2 rows)
```

## Syntax for Importing Data<a name="section4704175612310"></a>

Import a single row of data.

```
INSERT INTO partition_table_name [ ( column_name [, ...] ) ]  VALUES [ ( value )[, ...]  ];
```

Import data from an existing table with the same structure.

```
INSERT INTO partition_table_name SELECT * FROM  source_table_name
```

## Parameters for Importing Data<a name="section150105520528"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **column\_name**

    Specifies a column name in the partitioned table. It can be omitted.

-   **value**

    Specifies column values.

    -   If the value of  **column\_name**  is provided, the value provided by the  **value**  clause is associated with the corresponding column from left to right.
    -   If the value of  **column\_name**  is not provided, the value provided by the  **value**  clause is associated with the column specified by  **partition\_table\_name**  from left to right.


## Example of Importing Data<a name="section35261427776"></a>

Example 10:

```
-- Create the employees_table partitioned table.
openGauss=# CREATE TABLE employees_table
(
    employee_id              INTEGER          NOT NULL,
    employee_name            CHAR(20)         NOT NULL,
    onboarding_date          DATE             NOT NULL,
    position                 CHAR(20)         
)
PARTITION BY RANGE(onboarding_date)
(
        PARTITION founders VALUES LESS THAN('2000-01-01 00:00:00'),
        PARTITION senate VALUES LESS THAN('2010-01-01 00:00:00'),
        PARTITION seniors VALUES LESS THAN('2020-01-01 00:00:00'),
        PARTITION newcomer VALUES LESS THAN(MAXVALUE)
);

-- Insert data into the founders partition.
openGauss=# INSERT INTO  employees_table VALUES(1, 'SMITH', '1997-01-10 00:00:00','Manager');

-- View data in the founders partition.
openGauss=# select * from employees_table partition (founders);

-- Create the employees_data_table table.
openGauss=# CREATE TABLE employees_data_table
(
    employee_id              INTEGER          NOT NULL,
    employee_name            CHAR(20)         NOT NULL,
    onboarding_date          DATE             NOT NULL,
    position                 CHAR(20)         
);
-- Insert data.
openGauss=# insert into employees_data_table (employee_id, employee_name, onboarding_date, position) VALUES
(2, 'JONES', '2001-05-06 00:00:00', 'Supervisor'),
(3, 'WILLIAMS', '2011-09-17 00:00:00', 'Engineer'),
(4, 'TAYLOR', '2021-10-21 00:00:00', 'Clerk');

-- View table data.
openGauss=# select * from employees_data_table;

-- Import data to the employees_table table.
openGauss=# INSERT INTO employees_table SELECT * FROM  employees_data_table;

-- View data in the senate partition.
openGauss=# select * from employees_table partition (senate);
 employee_id |    employee_name     |   onboarding_date   |       position
-------------+----------------------+---------------------+----------------------
           2 | JONES                | 2001-05-06 00:00:00 | Supervisor
(1 row)

-- View data in the seniors partition.
openGauss=# select * from employees_table partition (seniors);
 employee_id |    employee_name     |   onboarding_date   |       position
-------------+----------------------+---------------------+----------------------
           3 | WILLIAMS             | 2011-09-17 00:00:00 | Engineer
(1 row)

-- View data in the newcomer partition.
openGauss=# select * from employees_table partition (newcomer);
 employee_id |    employee_name     |   onboarding_date   |       position
-------------+----------------------+---------------------+----------------------
           4 | TAYLOR               | 2021-10-21 00:00:00 | Clerk
(1 row)
```

## Syntax for Modifying a Partitioned Table<a name="section1966814239435"></a>

-   Delete a partition.

    ```
    ALTER TABLE partition_table_name DROP PARTITION partition_name;  
    ```


-   Add a partition.

    ```
    ALTER TABLE partition_table_name ADD {partition_less_than_item | partition_start_end_item| partition_list_item }; 
    ```

-   Rename a partition.

    ```
    ALTER TABLE partition_table_name RENAME PARTITION partition_name TO partition_new_name; 
    ```

-   Split a partition \(Specify the syntax of  **split\_partition\_value**\).

    ```
    ALTER TABLE partition_table_name SPLIT PARTITION partition_name AT ( split_partition_value ) INTO ( PARTITION partition_new_name1, PARTITION partition_new_name2); 
    ```

-   Split a partition \(Specify the syntax of the partition range\).

    ```
    ALTER TABLE partition_table_name SPLIT PARTITION partition_name INTO { ( partition_less_than_item [, ...] ) | ( partition_start_end_item [, ...] ) }; 
    ```

-   Combine partitions.

    ```
    ALTER TABLE partition_table_name MERGE PARTITIONS { partition_name } [, ...] INTO PARTITION partition_name; 
    ```


## Parameters for Modifying a Partitioned Table<a name="section13156172765713"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.

-   **partition\_name**

    Specifies the partition name.

-   **split\_partition\_value**

    Specifies the split point.

-   **PARTITION partition\_new\_name1, PARTITION partition\_new\_name2**

    Specifies the two partitions that are split based on the split point.

-   **partition\_less\_than\_item**

    Specifies the description statement of a partition item. The syntax is as follows:

    ```
    PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE }  [, ...] ) 
    ```

    The usage is the same as that in  [Syntax for Creating a VALUES LESS THAN Range Partitioned Table](#section9821913280).

-   **partition\_start\_end\_item**

    Specifies the description statement of a partition item. The syntax is as follows:

    ```
    PARTITION partition_name {
            {START(partition_value) END (partition_value) EVERY (interval_value)} |
            {START(partition_value) END ({partition_value | MAXVALUE})} |
            {START(partition_value)} |
            {END({partition_value | MAXVALUE})}
    ```

    The usage is the same as that in  [Syntax for Creating a START END Range Partitioned Table](#section2417444172113).

-   **partition\_list\_item**

    Specifies the description statement of a partition item. The syntax is as follows:

    ```
    PARTITION partition_name VALUES (list_values_clause) 
    ```

    The usage is the same as that in  [Syntax for Creating a List Partitioned Table](#section05611948194510).

-   **split\_point\_clause**

    Specifies the split point when a partition is split.

-   **partition\_value**

    Specifies the key value of a partition.


## Example of Modifying a Partitioned Table<a name="section04446211362"></a>

Example 11:

```
-- Create the employees_table partitioned table.
openGauss=# CREATE TABLE employees_table
(
    employee_id              INTEGER          NOT NULL,
    employee_name            CHAR(20)         NOT NULL,
    onboarding_date          DATE             NOT NULL,
    position                 CHAR(20)         
)
PARTITION BY RANGE(onboarding_date)
(
        PARTITION founders VALUES LESS THAN('2000-01-01 00:00:00'),
        PARTITION senate VALUES LESS THAN('2010-01-01 00:00:00'),
        PARTITION seniors VALUES LESS THAN('2020-01-01 00:00:00'),
        PARTITION newcomer VALUES LESS THAN(MAXVALUE)
);

-- Insert data.
openGauss=# INSERT INTO  employees_table VALUES
(1, 'SMITH', '1997-01-10 00:00:00','Manager'),
(2, 'JONES', '2001-05-06 00:00:00', 'Supervisor'),
(3, 'WILLIAMS', '2011-09-17 00:00:00', 'Engineer'),
(4, 'TAYLOR', '2021-10-21 00:00:00', 'Clerk');

View the newcomer partition.
openGauss=# SELECT * FROM employees_table PARTITION (newcomer);
 employee_id |    employee_name     |   onboarding_date   |       position
-------------+----------------------+---------------------+----------------------
           4 | TAYLOR               | 2021-10-21 00:00:00 | Clerk
(1 row)

-- Delete the newcomer partition.
openGauss=# ALTER TABLE employees_table DROP PARTITION newcomer;  
ALTER TABLE

-- View data in the newcomer partition.
openGauss=# select * from employees_table partition (newcomer);
ERROR:  partition "newcomer" of relation "employees_table" does not exist

-- Add the fresh partition.
openGauss=# ALTER TABLE employees_table ADD PARTITION fresh VALUES LESS THAN ('2040-01-01 00:00:00');  
ALTER TABLE

-- Use 2030-01-01 00:00:00 as the split point to split the fresh partition into the current and future partitions.
openGauss=# ALTER TABLE employees_table SPLIT PARTITION fresh AT ('2030-01-01 00:00:00') INTO (PARTITION current, PARTITION future); 
ALTER TABLE

-- Change the name of the current partition to now.
openGauss=# ALTER TABLE employees_table RENAME PARTITION current TO now; 
ALTER TABLE

-- Combine the founders and senate partitions into the original partition.
openGauss=# ALTER TABLE  employees_table MERGE PARTITIONS founders, senate INTO PARTITION original;
 
```

## Syntax for Deleting a Partitioned Table<a name="section148862013302"></a>

```
DROP TABLE partition_table_name;  
```

## Parameters for Deleting a Partitioned Table<a name="section6520166143111"></a>

-   **partition\_table\_name**

    Specifies the name of the partitioned table.


## Example of Deleting a Partitioned Table<a name="section186351032133112"></a>

Example 12:

```
-- Delete the employees_table partitioned table.
openGauss=# DROP TABLE employees_table;
DROP TABLE      
```

