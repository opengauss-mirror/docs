# ALTER TEXT SEARCH CONFIGURATION<a name="EN-US_TOPIC_0289900161"></a>

## Function<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_s9adfe253d8074dff8561df762ecd7460"></a>

**ALTER TEXT SEARCH CONFIGURATION**  modifies the definition of a text search configuration. You can modify its mappings from token types to dictionaries, change the configuration's name or owner, or modify the parameters.

The  **ADD MAPPING FOR**  form installs a list of dictionaries to be consulted for the specified token types; an error will be generated if there is already a mapping for any of the token types.

The  **ALTER MAPPING FOR**  form removes existing mapping for those token types and then adds specified mappings. 

**ALTER MAPPING REPLACE ... ** **WITH ... **  and  **ALTER MAPPING FOR...** **REPLACE ... ** **WITH ...**  options replace  **old\_dictionary**  with  **new\_dictionary**. Note that only when  **pg\_ts\_config\_map**  has tuples corresponding to  **maptokentype**  and  **old\_dictionary**, the update will succeed. If the update fails, no messages are returned.

The  **DROP MAPPING FOR**  form deletes all dictionaries for the specified token types in the text search configuration. If  **IF EXISTS**  is not specified and the string type mapping specified by  **DROP MAPPING FOR**  does not exist in text search configuration, an error will occur in the database.

## Precautions<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_s269e65b549b14fc7b0350b5ff9c25722"></a>

-   If a search configuration is referenced \(to create indexes\), users are not allowed to modify the text search configuration.
-   To use  **ALTER TEXT SEARCH CONFIGURATION**, you must be the owner of the configuration.

## Syntax<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_s4d87827fb0cf409aabcd17379f82b1c3"></a>

-   Add text search configuration string mapping.

```
ALTER TEXT SEARCH CONFIGURATION name 
    ADD MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ];
```

-   Modify the text search configuration dictionary syntax.

```
ALTER TEXT SEARCH CONFIGURATION name 
    ALTER MAPPING FOR token_type [, ... ] REPLACE old_dictionary WITH new_dictionary;
```

-   Modify the text search configuration string.

```
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ];
```

-   Change the text search configuration dictionary.

```
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING REPLACE old_dictionary WITH new_dictionary;
```

-   Remove text search configuration string mapping.

```
ALTER TEXT SEARCH CONFIGURATION name
    DROP MAPPING [ IF EXISTS ] FOR token_type [, ... ];
```

-   Rename the owner of text search configuration.

```
ALTER TEXT SEARCH CONFIGURATION name OWNER TO new_owner;
```

-   Rename the text search configuration.

```
ALTER TEXT SEARCH CONFIGURATION name RENAME TO new_name;
```

-   Rename the namespace of text search configuration.

```
ALTER TEXT SEARCH CONFIGURATION name SET SCHEMA new_schema;
```

-   Modify the attributes of the text search configuration.

```
ALTER TEXT SEARCH CONFIGURATION name SET ( { configuration_option = value } [, ...] );
```

-   Reset the attributes of text search configuration.

```
ALTER TEXT SEARCH CONFIGURATION name RESET ( {configuration_option} [, ...] );
```

## Parameter Description<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_sf1c3321032274c75b33ec6927629ba5a"></a>

-   **name**

    Specifies the name \(optionally schema-qualified\) of an existing text search configuration.

-   **token\_type**

    Specifies the name of a token type that is emitted by the configuration's parser. For details, see  [Parser](parser.md).

-   **dictionary\_name**

    Specifies the name of a text search dictionary. If multiple dictionaries are listed, they are searched in the specified order.

-   **old\_dictionary**

    Specifies the name of a text search dictionary to be replaced in the mapping. 

-   **new\_dictionary**

    Specifies the name of a text search dictionary to be substituted for  **old\_dictionary**.

-   **new\_owner**

    Specifies the new owner of the text search configuration.

-   **new\_name**

    Specifies the new name of the text search configuration. 

-   **new\_schema**

    Specifies the new schema for the text search configuration.

-   **configuration\_option**

    Specifies the text search configuration option. For details, see  [CREATE TEXT SEARCH CONFIGURATION](create-text-search-configuration.md).

-   **value**

    Specifies the value of text search configuration option.


## Examples<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_s5e2c22ccd01e485788ada368262a3447"></a>

```
-- Create a text search configuration.
openGauss=# CREATE TEXT SEARCH CONFIGURATION english_1 (parser=default);
CREATE TEXT SEARCH CONFIGURATION

-- Add text search configuration string mapping.
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ADD MAPPING FOR word WITH simple,english_stem;
ALTER TEXT SEARCH CONFIGURATION

-- Add text search configuration string mapping.
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ADD MAPPING FOR email WITH english_stem, french_stem;
ALTER TEXT SEARCH CONFIGURATION

-- Query information about the text search configuration.
openGauss=# SELECT b.cfgname,a.maptokentype,a.mapseqno,a.mapdict,c.dictname FROM pg_ts_config_map a,pg_ts_config b, pg_ts_dict c WHERE a.mapcfg=b.oid AND a.mapdict=c.oid AND b.cfgname='english_1' ORDER BY 1,2,3,4,5;
  cfgname  | maptokentype | mapseqno | mapdict |   dictname   
-----------+--------------+----------+---------+--------------
 english_1 |            2 |        1 |    3765 | simple
 english_1 |            2 |        2 |   12960 | english_stem
 english_1 |            4 |        1 |   12960 | english_stem
 english_1 |            4 |        2 |   12964 | french_stem
(4 rows)

-- Add text search configuration string mapping.
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ALTER MAPPING REPLACE french_stem with german_stem;
ALTER TEXT SEARCH CONFIGURATION

-- Query information about the text search configuration.
openGauss=# SELECT b.cfgname,a.maptokentype,a.mapseqno,a.mapdict,c.dictname FROM pg_ts_config_map a,pg_ts_config b, pg_ts_dict c WHERE a.mapcfg=b.oid AND a.mapdict=c.oid AND b.cfgname='english_1' ORDER BY 1,2,3,4,5;
  cfgname  | maptokentype | mapseqno | mapdict |   dictname   
-----------+--------------+----------+---------+--------------
 english_1 |            2 |        1 |    3765 | simple
 english_1 |            2 |        2 |   12960 | english_stem
 english_1 |            4 |        1 |   12960 | english_stem
 english_1 |            4 |        2 |   12966 | german_stem
(4 rows)
```

See  [Examples](create-text-search-configuration.md#en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2)  in  **CREATE TEXT SEARCH CONFIGURATION**.

## Helpful Links<a name="en-us_topic_0283137411_en-us_topic_0237122079_en-us_topic_0059778328_sb5eacaaa1ba74a8abb0193ac98c34512"></a>

[CREATE TEXT SEARCH CONFIGURATION](create-text-search-configuration.md)  and  [DROP TEXT SEARCH CONFIGURATION](drop-text-search-configuration.md)

