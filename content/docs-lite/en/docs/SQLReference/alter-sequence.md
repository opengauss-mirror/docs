# ALTER SEQUENCE<a name="EN-US_TOPIC_0289900494"></a>

## Function<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s806d414edb004fa89cd50a1166d1136e"></a>

**ALTER SEQUENCE**  modifies the parameters of an existing sequence.

## Precautions<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_sfccb497f01564edb804ecee58fe2698c"></a>

-   Only the owner of a sequence, a user granted the ALTER permission on a sequence, or a user granted the ALTER ANY SEQUENCE permission on a sequence can run the **ALTER SEQUENCE** command. The system administrator has this permission by default. To modify a sequence owner, you must be the sequence owner or system administrator and a member of the new owner role.
-   In the current version, you can modify only the owner, owning column, and maximum value. To modify other parameters, delete the sequence and create it again. Then, use the  **Setval**  function to restore parameter values.
-   **ALTER SEQUENCE MAXVALUE**  cannot be used in transactions, functions, and stored procedures.
-   After the maximum value of a sequence is changed, the cache of the sequence in all sessions is cleared.
-   If the LARGE identifier is used when a sequence is created, the LARGE identifier must be used when the sequence is altered.
-   The  **ALTER SEQUENCE**  statement blocks the invocation of  **nextval**,  **setval**,  **currval**, and  **lastval**.

## Syntax<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   Change the owning column of a sequence.

    ```
    ALTER [ LARGE ] SEQUENCE [ IF EXISTS ] name 
        [MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE | CACHE cache]
        [ OWNED BY { table_name.column_name | NONE } ] ;
    ```


-   Change the owner of a sequence.

    ```
    ALTER [ LARGE ] SEQUENCE [ IF EXISTS ] name OWNER TO new_owner;
    ```


## Parameter Description<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   name

    Specifies the name of the sequence to be modified.

-   IF EXISTS

    Sends a notice instead of an error when you are modifying a nonexisting sequence.

-   CACHE

    Specifies the number of sequences stored in the memory for quick access purposes. If this parameter is not specified, the old cache value is retained.

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

-- Delete a sequence and a table.
openGauss=# DROP SEQUENCE serial cascade;
openGauss=# DROP TABLE T1;
```

## Helpful Links<a name="en-us_topic_0283137303_en-us_topic_0237122071_en-us_topic_0062358310_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SEQUENCE](create-sequence.md)  and  [DROP SEQUENCE](drop-sequence.md)
