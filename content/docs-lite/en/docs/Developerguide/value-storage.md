# Value Storage<a name="EN-US_TOPIC_0289900392"></a>

## Value Storage Type Resolution<a name="en-us_topic_0283136768_en-us_topic_0237122010_en-us_topic_0059778056_s1bb7f384ffea43e49c3d1f7ee4035041"></a>

1.  Search for an exact match with the target column.
2.  Try to convert the expression to the target type. This will succeed if there is a registered cast between the two types. If the expression is an unknown-type literal, the content of the literal string will be fed to the input conversion routine for the target type.
3.  Check to see if there is a sizing cast for the target type. A sizing cast is a cast from that type to itself. If one is found in the  **pg\_cast**  catalog, apply it to the expression before storing into the destination column. The implementation function for such a cast always takes an extra parameter of type  **integer**. The parameter receives the destination column's  **atttypmod**  value \(typically its declared length, although the interpretation of  **atttypmod**  varies for different data types\), and may take a third Boolean parameter that says whether the cast is explicit or implicit. The cast function is responsible for applying any length-dependent semantics such as size checking or truncation.

## Examples<a name="en-us_topic_0283136768_en-us_topic_0237122010_en-us_topic_0059778056_s97e6109e5c0a466d9e2b7bc41992b1f7"></a>

Use the  **character**  storage type conversion as an example. For a target column declared as  **character\(20\)**  the following statement shows that the stored value is sized correctly:

```
openGauss=# CREATE TABLE tpcds.value_storage_t1 (
    VS_COL1 CHARACTER(20)
);
openGauss=# INSERT INTO tpcds.value_storage_t1 VALUES('abcdef');
openGauss=# SELECT VS_COL1, octet_length(VS_COL1) FROM tpcds.value_storage_t1;
       vs_col1        | octet_length 
----------------------+--------------
 abcdef               |           20
(1 row)
)

openGauss=# DROP TABLE tpcds.value_storage_t1;
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>What has happened here is that the two unknown literals are resolved to  **text**  by default, allowing the  **||**  operator to be resolved as  **text**  concatenation. Then the  **text**  result of the operator is converted to  **bpchar**  \("blank-padded char", the internal name of the  **character**  data type\) to match the target column type. Since the conversion from  **text**  to  **bpchar**  is binary-coercible, this conversion does not insert any real function call. Finally, the sizing function  **bpchar\(bpchar, integer, Boolean\)**  is found in the system catalog and used for the operator's result and the stored column length. This type-specific function performs the required length check and addition of padding spaces.

