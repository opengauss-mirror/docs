# DROP CAST<a name="EN-US_TOPIC_0000001127460523"></a>

## Function<a name="section173831846163116"></a>

DROP CAST deletes a type conversion.

## Precautions<a name="section786041713618"></a>

DROP CAST deletes a previously defined type conversion.

To delete a type conversion, you must have a source or destination data type. This is the same permission as creating a type conversion.

## Syntax<a name="section1374719912321"></a>

```
DROP CAST [ IF EXISTS ] (source_type AS target_type) [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section62781959163314"></a>

-   I**F EXISTS**

    Do not throw an error if the specified conversion does not exist. A notice is issued in this case.

-   **source\_type**

    Source data type in the type conversion.

-   **target\_type**

    Type of the target data in the type conversion.

-   **CASCADE**

    **RESTRICT**

    These keys have no effect because there is no dependency on type conversion.


## Example<a name="section14411351193419"></a>

Delete the conversion from text to int.

```
DROP CAST (text AS int);
```

## Compatibility<a name="section75182291579"></a>

DROP CAST complies with the SQL standard.

