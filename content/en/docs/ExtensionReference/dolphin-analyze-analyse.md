# ANALYZE | ANALYSE<a name="ZH-CN_TOPIC_0289900881"></a>

## Function<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s3b85e88124004279b0fccf70b5953039"></a>

**ANALYZE** collects statistics on ordinary tables in a database, and stores the results in the **PG\_STATISTIC** system catalog. The execution plan generator uses these statistics to determine which one is the most effective execution plan.

If no parameter is specified, **ANALYZE** analyzes each table and partitioned table in the current database. You can also specify **table\_name**, **column**, and **partition\_name** to limit the analysis to a specified table, column, or partitioned table.

**ANALYZE|ANALYSE VERIFY** is used to check whether data files of ordinary tables (row-store tables and column-store tables) in a database are damaged.

## Precautions<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

![](public_sys-resources/icon-note.gif) **NOTE:**
For details about the precautions, see [ANALYZE](../SQLReference/analyze-analyse.md).

## Syntax<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_sd95698dc205444ad9f4bbe049cc5d488"></a>

-   Table Statistics

    ```
    {ANALYZE | ANALYSE} [ VERBOSE ] [ NO_WRITE_TO_BINLOG | LOCAL ] TABLE { [schema.]table_name } [, ... ]
    ```

## Parameter Description<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **NO_WRITE_TO_BINLOG | LOCAL**

    It is used only for syntax and has no actual purpose.

![](public_sys-resources/icon-note.gif) **NOTE:**
For details about the involved parameters, see [ANALYZE](../SQLReference/analyze-analyse.md).

## Examples<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s70741e0e8d4843c29a3d2916af35ad25"></a>

--- Create a table.

```
openGauss=# CREATE TABLE customer_info
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
;
```

--- Creates a partitioned table.

```
openGauss=# CREATE TABLE customer_par
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
PARTITION BY RANGE(WR_RETURNED_DATE_SK)
(
PARTITION P1 VALUES LESS THAN(2452275),
PARTITION P2 VALUES LESS THAN(2452640),
PARTITION P3 VALUES LESS THAN(2453000),
PARTITION P4 VALUES LESS THAN(MAXVALUE)
)
ENABLE ROW MOVEMENT;
```

--- Run **ANALYZE** to update statistics.

```
openGauss=# ANALYZE TABLE customer_info, customer_par;
        Table         |   Op    | Msg_type | Msg_text
----------------------+---------+----------+----------
 public.customer_info | analyze | status   | OK
 public.customer_par  | analyze | status   | OK
(2 row)
```

--- Delete a table.

```
openGauss=# DROP TABLE customer_info;
openGauss=# DROP TABLE customer_par;
```

## Helpful Links<a name="section156744489391"></a>

[ANALYZE](../SQLReference/analyze-analyse.md)
