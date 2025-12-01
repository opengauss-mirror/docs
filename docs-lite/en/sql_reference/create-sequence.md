# CREATE SEQUENCE<a name="EN-US_TOPIC_0289899862"></a>

## Function<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section11152141914129"></a>

**CREATE SEQUENCE**  adds a sequence to the current database. The owner of a sequence is the user who creates the sequence.

## Precautions<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section192715972011"></a>

-   A sequence is a special table that stores arithmetic progressions. It has no actual meaning and is usually used to generate unique identifiers for rows or tables.
-   If a schema name is given, the sequence is created in the specified schema; otherwise, it is created in the current schema. The sequence name must be different from the names of other sequences, tables, indexes, views in the same schema.
-   After the sequence is created, functions  **nextval\(\)**  and  **generate\_series\(1,N\)**  insert data to the table. Make sure that the number of times for invoking  **nextval**  is greater than or equal to N+1. Otherwise, errors will be reported because the number of times for invoking function  **generate\_series\(\)**  is N+1.
-   By default, the maximum value of  **Sequence**  is 2^63 – 1. If a large identifier is used, the maximum value can be 2^127 – 1.
-   A user granted with the  **CREATE ANY SEQUENCE**  permission can create sequences in the public and user schemas.

## Syntax<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section1963019544155"></a>

```
CREATE [ LARGE ] SEQUENCE [ IF NOT EXISTS ] name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE | NOMINVALUE ] [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE] 
    [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE | NOCYCLE ] 
    [ OWNED BY { table_name.column_name | NONE } ];
```

## Parameter Description<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section969884316205"></a>

-   **IF NOT EXISTS**

    If a sequence with the same name already exists, no error will be reported, but a notification will be issued to inform that the sequence already exists.

-   **name**

    Specifies the name of a sequence to be created.

    Value range: a sting containing only lowercase letters, uppercase letters, special characters \#\_$, and digits.

-   **increment**

    Specifies the step for a sequence. A positive number generates an ascending sequence, and a negative number generates a decreasing sequence.

    The default value is  **1**.

-   **MINVALUE minvalue | NO MINVALUE| NOMINVALUE**

    Specifies the minimum value of the sequence. If  **MINVALUE**  is not declared, or  **NO MINVALUE**  is declared, the default value of the ascending sequence is  **1**, and that of the descending sequence is  **-2<sup>63</sup>-1**.  **NOMINVALUE**  is equivalent to  **NO MINVALUE**.

-   **MAXVALUE maxvalue | NO MAXVALUE| NOMAXVALUE**

    Specifies the maximum value of the sequence. If  **MAXVALUE**  is not declared, or  **NO MAXVALUE**  is declared, the default value of the ascending sequence is  **2<sup>63</sup>-1**, and that of the descending sequence is  **-1**.  **NOMAXVALUE**  is equivalent to  **NO MAXVALUE**.

-   **start**

    Specifies the start value of the sequence. The default value for an ascending sequence is  **minvalue**  and that for a descending sequence is  **maxvalue**.

-   **cache**

    Specifies the number of sequences stored in the memory for quick access purposes.

    Default value  **1**  indicates that one sequence can be generated each time.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >It is not recommended that you define  **cache**  and  **maxvalue**  or  **minvalue**  at the same time. The continuity of sequences cannot be ensured after  **cache**  is defined because unacknowledged sequences may be generated, causing waste of sequences.

-   **CYCLE**

    Recycles sequences after the number of sequences reaches  **maxvalue**  or  **minvalue**.

    If  **NO CYCLE**  is specified, any invocation of  **nextval**  would return an error after the number of sequences reaches  **maxvalue**  or  **minvalue**.

    **NOCYCLE**  is equivalent to  **NO CYCLE**.

    The default value is  **NO CYCLE**.

    If  **CYCLE**  is specified, the sequence uniqueness cannot be ensured.

-   **OWNED BY**

    Associates a sequence with a specified column included in a table. In this way, the sequence will be deleted when you delete its associated column or the table where the column belongs to. The associated table and sequence must be owned by the same user and in the same schema.  **OWNED BY**  only establishes the association between a table column and the sequence. Sequences on the column do not increase automatically when data is inserted. 

    The default value  **OWNED BY NONE**  indicates that such association does not exist.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >You are not advised to use the sequence created using  **OWNED BY**  in other tables. If multiple tables need to share a sequence, the sequence must not belong to a specific table.


## Examples<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section17779175211714"></a>

Create an ascending sequence named  **serial**, which starts from 101.

```
openGauss=# CREATE SEQUENCE serial
 START 101
 CACHE 20;
```

Select the next number from the sequence.

```
openGauss=# SELECT nextval('serial');
 nextval 
 ---------
      101
```

Select the next number from the sequence.

```
openGauss=# SELECT nextval('serial');
 nextval 
 ---------
      102
```

Create a sequence associated with the table.

```
openGauss=# CREATE TABLE customer_address
(
    ca_address_sk             integer               not null,
    ca_address_id             char(16)              not null,
    ca_street_number          char(10)                      ,
    ca_street_name            varchar(60)                   ,
    ca_street_type            char(15)                      ,
    ca_suite_number           char(10)                      ,
    ca_city                   varchar(60)                   ,
    ca_county                 varchar(30)                   ,
    ca_state                  char(2)                       ,
    ca_zip                    char(10)                      ,
    ca_country                varchar(20)                   ,
    ca_gmt_offset             decimal(5,2)                  ,
    ca_location_type          char(20)                     
);

openGauss=# CREATE SEQUENCE serial1
 START 101
 CACHE 20
OWNED BY customer_address.ca_address_sk;
-- Delete a table and sequences.
openGauss=# DROP TABLE customer_address;
openGauss=# DROP SEQUENCE serial cascade;
openGauss=# DROP SEQUENCE serial1 cascade;
```

## Helpful Links<a name="en-us_topic_0283137208_en-us_topic_0237122114_en-us_topic_0059778825_section184942174514"></a>

[DROP SEQUENCE](drop-sequence.md)  and  [ALTER SEQUENCE](alter-sequence.md)

