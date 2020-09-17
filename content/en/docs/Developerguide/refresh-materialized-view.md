# REFRESH MATERIALIZED VIEW<a name="EN-US_TOPIC_0273480002"></a>

## Function<a name="en-us_topic_0237122161_en-us_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

**REFRESH MATERIALIZED VIEW**  completely replaces the content of a materialized view. Old content will be discarded.

## Precautions<a name="en-us_topic_0237122161_en-us_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

-   If WITH DATA is specified \(or as the default value\), the support query will be executed to provide new data. If WITH NO DATA is specified, no data will be created.
-   If you want data to be sorted when it is generated, use the  **ORDER BY**  clause in the supported query.

## Syntax<a name="en-us_topic_0237122161_en-us_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
REFRESH MATERIALIZED VIEW mv_name [ WITH [ NO ] DATA ];
```

## Parameter Description<a name="en-us_topic_0237122161_en-us_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **mv\_name**

    Specifies the name of the materialized view to be refreshed.


## Examples<a name="en-us_topic_0237122161_en-us_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
-- Use the query in the definition of the materialized view order_summary to replace the content of the materialized view.
postgres=# REFRESH MATERIALIZED VIEW order_summary;
```

## Helpful Links<a name="section1922813315464"></a>

[DROP MATERIALIZED VIEW](drop-materialized-view.md),  [CREATE MATERIALIZED VIEW](create-materialized-view.md), and  [ALTER MATERIALIZED VIEW](alter-materialized-view.md)

