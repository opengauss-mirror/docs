# ALTER SEQUENCE<a name="EN-US_TOPIC_0289900494"></a>

## Function<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s806d414edb004fa89cd50a1166d1136e"></a>

**ALTER SEQUENCE**  modifies the parameters of an existing sequence.

## Precautions<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_sfccb497f01564edb804ecee58fe2698c"></a>

-   Only the owner of a sequence, a user granted the ALTER permission on a sequence, or a user granted the ALTER ANY SEQUENCE permission on a sequence can run the **ALTER SEQUENCE** command. The system administrator has this permission by default. To modify a sequence owner, you must be the sequence owner or system administrator and a member of the new owner role.
-   In the current version, you can modify only the step, the maximum value, the minimum value, the start value, the number of cached values, cycle, restart, the owner and the owning column. To modify other parameters, delete the sequence and create it again. Then, use the  **Setval**  function to restore parameter values.
-   **ALTER SEQUENCE MAXVALUE**  cannot be used in functions and stored procedures.
-   After the maximum value of a sequence is changed, the cache of the sequence in all sessions is cleared.
-   If the LARGE identifier is used when a sequence is created, the LARGE identifier must be used when the sequence is altered.
-   The  **ALTER SEQUENCE**  statement blocks the invocation of  **nextval**,  **setval**,  **currval**, and  **lastval**.

## Syntax<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   Change the parameters of a sequence.

    ```
    ALTER [ LARGE ] SEQUENCE [ IF EXISTS ] name [ INCREMENT [ BY ] increment ]
        [ MINVALUE minvalue | NO MINVALUE | NOMINVALUE ] [MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE]
        [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE | NOCYCLE ] [ RESTART [ WITH ] restart ] 
        [ OWNED BY { table_name.column_name | NONE } ] ;
    ```


-   Change the owner of a sequence.

    ```
    ALTER  SEQUENCE [ IF EXISTS ] name OWNER TO new_owner;
    ```


## Parameter Description<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   name

    Specifies the name of the sequence to be modified.

-   IF EXISTS

    Sends a notice instead of an error when you are modifying a nonexisting sequence.

-   INCREMENT

    Specifies the step for the sequence.

-   MINVALUE minvalue | NO MINVALUE| NOMINVALUE
    Specifies the minimum value of the sequence. If  **MINVALUE**  is not declared, or  **NO MINVALUE**  is declared, the default value of the ascending sequence is  **1**, and that of the descending sequence is  **-2<sup>63</sup>+1** or **-2<sup>127</sup>+1** if it's also a LARGE sequence.  **NOMINVALUE**  is equivalent to  **NO MINVALUE**.

-   MAXVALUE maxvalue | NO MAXVALUE| NOMAXVALUE

    Specifies the maximum value of the sequence. If  **MAXVALUE**  is not declared, or  **NO MAXVALUE**  is declared, the default value of the ascending sequence is  **2<sup>63</sup>-1** or **2<sup>127</sup>-1** if it's also a LARGE sequence, and that of the descending sequence is  **-1**.  **NOMAXVALUE**  is equivalent to  **NO MAXVALUE**.

-   START

    Specifies the start value of the sequence.

-   CACHE

    Specifies the number of sequences stored in the memory for quick access purposes. If this parameter is not specified, the old cache value is retained.

-   CYCLE

    Recycles sequences after the number of sequences reaches  **maxvalue**  or  **minvalue**.

    If  **NO CYCLE**  is specified, any invocation of  **nextval**  would return an error after the number of sequences reaches  **maxvalue**  or  **minvalue**.

    **NOCYCLE**  is equivalent to  **NO CYCLE**.

    If  **CYCLE**  is specified, the sequence uniqueness cannot be ensured.

-   RESTART

    Specifies the nextval of the sequence. If the value of restart is not specified, the sequence will restart from its start value by default.

-   OWNED BY

    Associates a sequence with a specified column included in a table. In this way, the sequence will be deleted when you delete its associated column or the table where the column belongs to.

    If the sequence has been associated with another table before you use this option, the new association will overwrite the old one.

    The associated table and sequence must be owned by the same user and in the same schema.

    If  **OWNED BY NONE**  is used, all existing associations will be deleted.

-   new\_owner

    Specifies the username of the new owner of the sequence. To change the owner, you must also be a direct or indirect member of the new role, and this role must have  **CREATE**  permission on the sequence's schema.


## Examples<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
-- Create an ascending sequence named serial, which starts from 101.
openGauss=# CREATE SEQUENCE serial START 101;

-- Create a table and specify default values for the sequence.
openGauss=# CREATE TABLE T1(C1 bigint default nextval('serial'));

-- Change the owning column of serial to T1.C1.
openGauss=# ALTER SEQUENCE serial OWNED BY T1.C1;

--Change the step of serial to 2
openGauss=# ALTER SEQUENCE serial INCREMENT 2;

--Change the minimum value of serial to 90
openGauss=# ALTER SEQUENCE serial MINVALUE 90;

--Change the maximum value of serial to 200
openGauss=# ALTER SEQUENCE serial MAXVALUE 200;

--Change the start value of serial to 90
openGauss=# ALTER SEQUENCE serial START 90;

--Change the number of cached value of serial to 10
openGauss=# ALTER SEQUENCE serial CACHE 10;

--Change serial to be a cycle
openGauss=# ALTER SEQUENCE serial CYCLE;

--Change serial to restart from 100
openGauss=# ALTER SEQUENCE serial RESTART 100;

-- Delete a sequence and a table.
openGauss=# DROP SEQUENCE serial cascade;
openGauss=# DROP TABLE T1;
```

## Helpful Links<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SEQUENCE](create-sequence.md)  and  [DROP SEQUENCE](drop-sequence.md)
