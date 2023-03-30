# DROP DATA SOURCE<a name="EN-US_TOPIC_0289900803"></a>

## Function<a name="en-us_topic_0283136822_en-us_topic_0237122135_section324414515172"></a>

**DROP DATA SOURCE**  deletes a data source.

## Precautions<a name="en-us_topic_0283136822_en-us_topic_0237122135_section6945185782115"></a>

Only an owner, system administrator, or initial user can delete a data source.

## Syntax<a name="en-us_topic_0283136822_en-us_topic_0237122135_section1289212618239"></a>

```
DROP DATA SOURCE [IF EXISTS] src_name [CASCADE | RESTRICT];
```

## Parameter Description<a name="en-us_topic_0283136822_en-us_topic_0237122135_section1789010295266"></a>

-   **src\_name**

    Specifies the name of the data source to be deleted.

    Value range: a string. It must comply with the naming convention.

-   **IF EXISTS**

    Reports a notice instead of an error if the specified data source does not exist.

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the data source.
    -   **RESTRICT**: refuses to delete the data source if any objects depend on it. This is the default action.

        Currently, no objects depend on data sources. Therefore,  **CASCADE**  is equivalent to  **RESTRICT**, and they are reserved to ensure backward compatibility.



## Examples<a name="en-us_topic_0283136822_en-us_topic_0237122135_section162746130164"></a>

```
-- Create a data source.
openGauss=# CREATE DATA SOURCE ds_tst1;

-- Delete the data source.
openGauss=# DROP DATA SOURCE ds_tst1 CASCADE;
openGauss=# DROP DATA SOURCE IF EXISTS ds_tst1 RESTRICT; 
```

## Helpful Links<a name="en-us_topic_0283136822_en-us_topic_0237122135_section191190297715"></a>

[CREATE DATA SOURCE](create-data-source.md)  and  [ALTER DATA SOURCE](alter-data-source.md)

