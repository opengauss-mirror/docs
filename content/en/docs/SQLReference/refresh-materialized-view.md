# REFRESH MATERIALIZED VIEW<a name="EN-US_TOPIC_0289899926"></a>

## Function<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

**REFRESH MATERIALIZED VIEW**  refreshes materialized views in full refresh mode.

## Precautions<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

-   Full refreshing can be performed on both full and fast-refresh materialized views.
-   To refresh a materialized view, you must have the SELECT permission on the base table.

## Syntax<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
REFRESH MATERIALIZED VIEW mv_name;
```

## Parameter Description<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **mv\_name**

    Name of the materialized view to be refreshed.


## Examples<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
-- Create an ordinary table.
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
-- Create a complete-refresh materialized view.
openGauss=# CREATE MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
-- Create an fast-refresh materialized view.
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_imv AS SELECT * FROM my_table;
-- Write data to the base table.
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
-- Refresh the complete-refresh materialized view my_mv.
openGauss=# REFRESH MATERIALIZED VIEW my_mv;
-- Fully refresh the refresh-materialized-view my_imv.
openGauss=# REFRESH MATERIALIZED VIEW my_imv;
```

## Helpful Links<a name="en-us_topic_0283136612_section1922813315464"></a>

[ALTER MATERIALIZED VIEW](alter-materialized-view.md),  [CREATE INCREMENTAL MATERIALIZED VIEW](create-incremental-materialized-view.md),  [CREATE MATERIALIZED VIEW](create-materialized-view.md),  [CREATE TABLE](create-table.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md), and  [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh-incremental-materialized-view.md)

