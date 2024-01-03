# ALTER TABLE INHERIT<a name="EN-US_TOPIC_0289900691"></a>

## Function<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_s7554a451a2e8434ac6abac385bba71e9"></a>

Modify the inheritance table, including changing the regular table to an inheritance table and changing the inheritance table to a regular table.

## Precautions<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_s6a18169201b2335fab67e21579272c81"></a>

-   Only tables that fully contain the parent table structure can be changed to child tables.
-   After terminating the inheritance relationship, although it is no longer a child table, there are still columns with the same name and type inherited from the parent table, and the existing data will not be deleted.
-   Modify the table structure of the parent table, and inherit the table accordingly.
-   Modify the data of the parent table, and the data of the inherited table will be updated together.
-   The not null, default, and check constraints inherited from the parent table cannot be deleted or modified.
-   The parent table deletes a column, the child table's column will not be deleted when using like parent_name clause to create a table.
-   The parent table deletes a column, the child table columns will be deleted when not using like parent_name clause to create a table.
-   Indexes, uniqueness, primary keys, and foreign key constraints which are using include all to inherit from the parent table can be deleted or modified.

## Syntax<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_s54ad19af647d4983a3bc61bb7a645180"></a>

```
ALTER TABLE table_name { inherit | no inherit } parent_name;
```
>
> -   please refer to [alter table](alter-table.md) chapter to get more detailed parameter explanations.

## Parameter Description<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_sfb7a4cb223ab41709a1677119a8d42100"></a>

-   **table\_name**

    Specifies the name of the child table.

    Value range: an existing partitioned table name.

-   **parent\_name**

    Specifies the name of parent table to inherit.

    Value range: an existing partition name.

## Examples<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_s23d0121ee3075db3961f76d2d8e16acc"></a>

```
--Create two parent tables
openGauss=# CREATE TABLE father
(
    id int NOT NULL,
    md_attr CHARACTER VARYING(32) UNIQUE,
    num int DEFAULT 2,
    salary REAL CHECK(SALARY > 0),
    CONSTRAINT pk_father_z83rgvsefn PRIMARY KEY (id)
);
openGauss=# CREATE TABLE father2 (id int);

--Create child tables
openGauss=# CREATE TABLE child (id int);
openGauss=# ALTER TABLE child inherit father2;
openGauss=# CREATE TABLE child2() inherits(father);
openGauss=# CREATE TABLE child3(like father) inherits(father);

--Modify the table structure of the parent table, and the child tables will follow the changes.
openGauss=# ALTER TABLE father alter COLUMN id type CHAR;

--Parent tables drop column
openGauss=# ALTER TABLE father DROP COLUMN if exists salary;

--When not using like parent_name to create child table, the child table columns will be deleted
openGauss=# \d+ child2

--When using like parent_name to create child table, the child table columns will not be deleted
openGauss=# \d+ child3

--Termination of inheritance relationship
openGauss=# ALTER TABLE child no inherit father2;

--drop tables
openGauss=# drop table father cascade;
openGauss=# drop table child cascade;
openGauss=# drop table father2 cascade;
```

**CREATE TABLE INHERITS**.

## Helpful Links<a name="en-us_topic_0283137443_en-us_topic_0237122090_en-us_topic_0059778762_s267aeb502b5546f69f580c79c0a728df"></a>

[CREATE TABLE INHERITS](create-table-inherits.md)  and  [DROP TABLE](drop-table.md)