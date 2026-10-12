# Constraints

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:19:48.832Z -->

A constraint clause is used to declare constraints. New or updated rows must satisfy these constraints for the insert or update operation to succeed. If a data operation violates a constraint, the operation is terminated by the constraint.

Constraints can be specified when a table is created (via the CREATE TABLE statement) or after the table is created (via the ALTER TABLE statement).

A constraint can be column-level or table-level. A column-level constraint applies only to a column, while a table-level constraint is applied to the entire table.

The following constraints are commonly used in openGauss:

- NOT NULL: indicates that a column cannot store NULL values.
- UNIQUE: ensures that values in a column are all unique.
- PRIMARY KEY: the combination of NOT NULL and UNIQUE. It ensures that a column (or a combination of two or more columns) has a unique identifier, which helps find a specific record in a table more easily and quickly.
- FOREIGN KEY: ensures the referential integrity of data in one table matching values in another table.
- CHECK: ensures that values in a column meet specified conditions.

## NOT NULL Constraint<a name="section74155314398"></a>

When creating a table, if no constraint is specified, the default value is NULL, meaning that null values are allowed in the column. If you do not want a column to contain NULL values, you need to define a NOT NULL constraint on that column, specifying that NULL values are not allowed in the column. When inserting data, if a NULL value exists in that column, an error is reported and the insertion fails.

NULL is different from having no data; it represents unknown data.

For example, create a table named `staff` with five fields, where the NAME and ID fields are set to not accept null values.

```
openGauss=# CREATE TABLE staff(
   ID             INT      NOT NULL,
   NAME           char(8)    NOT NULL,
   AGE            INT     ,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Insert data into the `staff` table. When a null value is inserted into the ID field, the database returns an error.

```
openGauss=# INSERT INTO staff  VALUES (1,'lily',28);
INSERT 0 1
openGauss=# INSERT INTO staff (NAME,AGE) VALUES ('JUCE',28);
ERROR:  null value in column "id" violates not-null constraint
DETAIL:  Failing row contains (null, JUCE    , 28, null, null).
```

## UNIQUE Constraint<a name="section11621339171820"></a>

A UNIQUE constraint ensures that a field or a combination of fields in a table is unique across the entire table.

For a unique constraint, NULL values are considered distinct from each other.

For example, create table `staff1` with five fields, where AGE is set to UNIQUE. Therefore, two records with the same age cannot be added.

```
openGauss=# CREATE TABLE staff1(
   ID             INT      NOT NULL,
   NAME           char(8)    NOT NULL,
   AGE            INT   NOT NULL  UNIQUE  ,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Insert data into table `staff1`. When two identical values are inserted into the AGE field, the database returns an error.

```
openGauss=# INSERT INTO staff1  VALUES (1,'lily',28);
INSERT 0 1
openGauss=# INSERT INTO staff1 VALUES (2, 'JUCE',28);
ERROR:  duplicate key value violates unique constraint "staff1_age_key"
DETAIL:  Key (age)=(28) already exists.
```

## PRIMARY KEY<a name="section1523416278320"></a>

PRIMARY KEY is the primary key, which serves as the unique identifier for each record in a data table. A primary key constraint declares that one or more fields in a table can only contain unique, non-NULL values.

A primary key is a combination of a NOT NULL constraint and a unique constraint. A table can have only one primary key.

For example, create table `staff2` with `ID` as the primary key.

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

FOREIGN KEY is a foreign key constraint that specifies that the value in a column (or a group of columns) must match a value that appears in a row of another table. Typically, a FOREIGN KEY in one table points to a UNIQUE KEY (the key of a unique constraint) in another table, that is, it maintains referential integrity between two related tables.

For example, create table `staff3`, which contains five fields.

```
openGauss=# CREATE TABLE staff3(
   ID             INT    PRIMARY KEY  NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

Create a `DEPARTMENT` table and add three fields, where `EMP_ID` is the foreign key referencing the `ID` field of `staff3`:

```
openGauss=# CREATE TABLE DEPARTMENT(
   ID INT PRIMARY KEY      NOT NULL,
   DEPT           CHAR(50) NOT NULL,
   EMP_ID         INT      references staff3(ID)
);
```

## CHECK Constraint<a name="section420253744116"></a>

A CHECK constraint specifies a Boolean expression. For each new row to be inserted or each row with updated values, the expression must evaluate to true or unknown for the operation to succeed; otherwise, an exception is thrown and the database is not modified.

A check constraint declared as a column constraint should only reference the column's value, whereas an expression in a table constraint can reference multiple columns. In the expression, writing `<>NULL` or `!=NULL` is invalid; use `is NOT NULL` instead.

For example, create table `staff4` and add a CHECK constraint on column `SALARY` to ensure that values inserted into this column are greater than 0.

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

Insert data into table `staff4`. When the value inserted into column `SALARY` is not greater than 0, the database returns an error.

```
openGauss=# INSERT INTO staff4(ID,NAME,AGE,SALARY) VALUES (2, 'JUCE',16,0);
ERROR:  new row for relation "staff4" violates check constraint "staff4_salary_check"
DETAIL:  N/A
```
