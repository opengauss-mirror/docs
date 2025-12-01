# Constraints<a name="EN-US_TOPIC_0000001210141896"></a>

Constraint clauses specify constraints that new or updated rows must satisfy for an INSERT or UPDATE operation to succeed. If there is any data behavior that violates the constraints, the behavior is terminated by the constraints.

Constraints can be specified when a table is created \(by executing the CREATE TABLE statement\) or after a table is created \(by executing the ALTER TABLE statement\).

Constraints can be column-level or table-level. Column-level constraints apply only to columns, and table-level constraints apply to the entire table.

The common constraints of openGauss are as follows:

-   NOT NULL: specifies that a column cannot store  **NULL**  values.
-   UNIQUE: ensures that the value of a column is unique.
-   PRIMARY KEY: functions as the combination of NOT NULL and UNIQUE and ensures that a column \(or the combination of two or more columns\) has a unique identifier to help quickly locate a specific record in a table.
-   FOREIGN KEY: ensures the referential integrity for data in one table to match values in another table.
-   CHECK: ensures that values in a column meet specified conditions.

## NOT NULL<a name="section74155314398"></a>

If no constraint is specified during table creation, the default value is  **NULL**, indicating that  **NULL**  values can be inserted into columns. If you do not want a column to be set to  **NULL**, you need to define the NOT NULL constraint on the column to specify that  **NULL**  values are not allowed in the column. When you insert data, if the column contains  **NULL**, an error is reported and the data fails to be inserted.

**NULL**  does not mean that there is no data. It indicates unknown data.

For example, create the  **staff**  table that contains five columns. The  **NAME**  and  **ID**  columns cannot be set to  **NULL**.

```
openGauss=# CREATE TABLE staff(
   ID             INT      NOT NULL,
   NAME           char(8)    NOT NULL,
   AGE            INT     ,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Insert data into the  **staff**  table. When a  **NULL**  value is inserted into the  **ID**  column, the database returns an error.

```
openGauss=# INSERT INTO staff  VALUES (1,'lily',28);
INSERT 0 1
openGauss=# INSERT INTO staff (NAME,AGE) VALUES ('JUCE',28);
ERROR:  null value in column "id" violates not-null constraint
DETAIL:  Failing row contains (null, JUCE    , 28, null, null).
```

## UNIQUE<a name="section11621339171820"></a>

The UNIQUE constraint specifies that a group of one or more columns of a table can contain only unique values.

For the UNIQUE constraint,  **NULL**  is not considered equal.

For example, create the  **staff1**  table that contains five columns, where  **AGE**  is set to  **UNIQUE**. Therefore, you cannot add two records with the same age.

```
openGauss=# CREATE TABLE staff1(
   ID             INT      NOT NULL,
   NAME           char(8)    NOT NULL,
   AGE            INT   NOT NULL  UNIQUE  ,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Insert data into the  **staff1**  table. When two identical data records are inserted into the  **AGE**  column, the database returns an error.

```
openGauss=# INSERT INTO staff1  VALUES (1,'lily',28);
INSERT 0 1
openGauss=# INSERT INTO staff1 VALUES (2, 'JUCE',28);
ERROR:  duplicate key value violates unique constraint "staff1_age_key"
DETAIL:  Key (age)=(28) already exists.
```

## PRIMARY KEY<a name="section1523416278320"></a>

PRIMARY KEY is the unique identifier of each record in a data table. It specifies that a column or multiple columns in a table can contain only unique \(non-duplicate\) and non-**NULL**  values.

PRIMARY KEY is the combination of NOT NULL and UNIQUE. Only one primary key can be specified for a table.

For example, create the  **staff2**  table where  **ID**  indicates the primary key.

```
openGauss=# CREATE TABLE staff2(
   ID             INT     PRIMARY KEY     ,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "staff2_pkey" for table "staff2"
CREATE TABLE
```

## FOREIGN KEY<a name="section73906231756"></a>

The FOREIGN KEY constraint specifies that the value of a column \(or a group of columns\) must match the value in a row of another table. Generally, the FOREIGN KEY constraint in one table points to the UNIQUE KEY constraint in another table. That is, the referential integrity between two related tables is maintained.

For example, create the  **staff3**  table that contains five columns.

```
openGauss=# CREATE TABLE staff3(
   ID             INT    PRIMARY KEY  NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Create the  **DEPARTMENT**  table and add three columns. The  **EMP\_ID**  column indicates the foreign key and it is similar to the  **ID**  column of the  **staff3**  table.

```
openGauss=# CREATE TABLE DEPARTMENT(
   ID INT PRIMARY KEY      NOT NULL,
   DEPT           CHAR(50) NOT NULL,
   EMP_ID         INT      references staff3(ID)
);
```

## CHECK<a name="section420253744116"></a>

The CHECK constraint specifies an expression producing a Boolean result where the INSERT or UPDATE operation of new or updated rows can succeed only when the expression result is  **TRUE**  or  **UNKNOWN**; otherwise, an error is thrown and the database is not altered.

A CHECK constraint specified as a column constraint should reference only the column's value, while an expression in a table constraint can reference multiple columns.  **<\>NULL**  and  **!=NULL**  are invalid in an expression. Change them to  **IS NOT NULL**.

For example, create the  **staff4**  table and add a CHECK constraint to the  **SALARY**  column to ensure that the inserted value is greater than  **0**.

```
openGauss=# CREATE TABLE staff4(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL    CHECK(SALARY > 0)
);
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "staff4_pkey" for table "staff4"
CREATE TABLE
```

Insert data into the  **staff4**  table. When the inserted value of the  **SALARY**  column is not greater than  **0**, the database reports an error.

```
openGauss=# INSERT INTO staff4(ID,NAME,AGE,SALARY) VALUES (2, 'JUCE',16,0);
ERROR:  new row for relation "staff4" violates check constraint "staff4_salary_check"
DETAIL:  N/A
```

