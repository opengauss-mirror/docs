# ALTER DATA SOURCE<a name="EN-US_TOPIC_0289899857"></a>

## Function<a name="en-us_topic_0283136847_en-us_topic_0237122056_section1246564332711"></a>

**ALTER DATA SOURCE**  modifies the attributes and content of the data source.

The attributes include the name and owner. The content includes the type, version, and connection options.

## Precautions<a name="en-us_topic_0283136847_en-us_topic_0237122056_section12438141318319"></a>

-   Only the initial user, system administrator, and owner have the permission to modify data sources.
-   To change the owner, the new owner must be the initial user or a system administrator.
-   If the  **password**  option is displayed, ensure that the  **datasource.key.cipher**  and  **datasource.key.rand**  files exist in the  _$GAUSSHOME_**/bin**  directory of each node in openGauss. If the two files do not exist, use the  **gs\_guc**  tool to generate them and use the  **gs\_ssh**  tool to release them to the  _$GAUSSHOME_**/bin**  directory on each node.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss provides this syntax, but the SQL on Anywhere capabilities are unavailable.

## Syntax<a name="en-us_topic_0283136847_en-us_topic_0237122056_section20592145145512"></a>

```
ALTER DATA SOURCE src_name
    [TYPE  'type_str']
    [VERSION  {'version_str' | NULL}]
    [OPTIONS ( {[ ADD | SET | DROP ] optname ['optvalue']} [, ...] )];
ALTER DATA SOURCE src_name RENAME TO src_new_name;
ALTER DATA SOURCE src_name OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0283136847_en-us_topic_0237122056_section1562551151015"></a>

-   **src\_name**

    Specifies the data source name to be modified.

    Value range: a string. It must comply with the identifier naming convention.

-   **TYPE**

    Changes the original  **TYPE**  value of the data source to the specified value.

    Value range: an empty string or a non-empty string

-   **VERSION**

    Changes the original  **VERSION**  value of the data source to the specified value.

    Value range: an empty string, a non-empty string, or null

-   **OPTIONS**

    Specifies the column to be added, modified, or deleted. The value of  **optname**  should be unique. Comply with the following rules to set this parameter:

    To add a column, you can omit  **ADD**  and simply specify the column name, which cannot be an existing column name.

    To modify a column, specify  **SET**  and an existing column name.

    To delete a column, specify  **DROP**  and an existing column name. Do not set  **optvalue**.

-   **src\_new\_name**

    Specifies the new data source name.

    Value range: a string. It must comply with the naming convention rule.

-   **new\_user**

    Specifies the new owner of an object.

    Value range: a string. It must be a valid username.


## Examples<a name="en-us_topic_0283136847_en-us_topic_0237122056_section96641814616"></a>

```
-- Create an empty data source.
openGauss=# CREATE DATA SOURCE ds_test1;

-- Rename the data source.
openGauss=# ALTER DATA SOURCE ds_test1 RENAME TO ds_test;

-- Change the owner.
openGauss=# CREATE USER user_test1 IDENTIFIED BY 'Gs@123456';
openGauss=# ALTER USER user_test1 WITH SYSADMIN;
openGauss=# ALTER DATA SOURCE ds_test OWNER TO user_test1;

-- Modify TYPE and VERSION.
openGauss=# ALTER DATA SOURCE ds_test TYPE 'MPPDB_TYPE' VERSION 'XXX';

-- Add a column.
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (add dsn 'gaussdb', username 'test_user');

-- Modify a column.
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (set dsn 'unknown');

-- Delete a column.
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (drop username);

-- Delete the data source and user objects.
openGauss=# DROP DATA SOURCE ds_test;
openGauss=# DROP USER user_test1;
```

## Helpful Links<a name="en-us_topic_0283136847_en-us_topic_0237122056_section779812311320"></a>

[CREATE DATA SOURCE](create-data-source.md)  and  [DROP DATA SOURCE](drop-data-source.md)

