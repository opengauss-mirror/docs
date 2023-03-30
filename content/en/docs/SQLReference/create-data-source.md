# CREATE DATA SOURCE<a name="EN-US_TOPIC_0289900178"></a>

## Function<a name="en-us_topic_0283137069_en-us_topic_0237122100_section1697927113919"></a>

**CREATE DATA SOURCE**  creates an external data source, which defines the information about the database that openGauss will connect to.

## Precautions<a name="en-us_topic_0283137069_en-us_topic_0237122100_section106551466418"></a>

-   The data source name must be unique in the database and comply with the identifier naming rules. Its length cannot exceed 63 bytes. Otherwise, it will be truncated.
-   Only the system administrator or initial user has the permission to create data sources. The user who creates the object is the default owner of the object.
-   If the  **password**  option is displayed, ensure that the  **datasource.key.cipher**  and  **datasource.key.rand**  files exist in the  _$GAUSSHOME_**/bin**  directory of each node in openGauss. If the two files do not exist, use the  **gs\_guc**  tool to generate them and use the  **gs\_ssh**  tool to release them to the  _$GAUSSHOME_**/bin**  directory on each node.

## Syntax<a name="en-us_topic_0283137069_en-us_topic_0237122100_section1673654518413"></a>

```
CREATE DATA SOURCE src_name
    [TYPE 'type_str']
    [VERSION {'version_str' | NULL}]
    [OPTIONS (optname 'optvalue' [, ...])];
```

## Parameter Description<a name="en-us_topic_0283137069_en-us_topic_0237122100_section1520523385620"></a>

-   **src\_name**

    Specifies the name of the new data source, which must be unique in the database.

    Value range: a string compliant with the identifier naming convention

-   **TYPE**

    Specifies the type of the data source. This parameter can be left empty, and its default value will be used.

    Value range: an empty string or a non-empty string

-   **VERSION**

    Specifies the version number of the new data source. This parameter can be left empty or set to null.

    Value range: an empty string, a non-empty string, or null

-   **OPTIONS**

    Specifies the options of the data source. This parameter can be left empty or specified using the following keywords:

    -   optname

        Specifies the option name.

        Value range:  **dsn**,  **username**,  **password**, and  **encoding**. The value is case-insensitive.

        -   **dsn**  corresponds to the DSN in the ODBC configuration file.
        -   **username**/**password**  indicates the username and password for connecting to the destination database.

            The user name and password entered by the user are encrypted in the openGauss background to ensure security. The key file required for encryption must be generated using the  **gs\_guc**  tool and released to the  _$GAUSSHOME_**/bin**  directory of each node in openGauss using the  **gs\_ssh**  tool. The user name and password cannot contain the prefix "encryptOpt". Otherwise, they are considered as encrypted ciphertext.

        -   **encoding**  indicates the character string encoding mode used for interaction with the destination database \(including the sent SQL statements and returned data of the character type\). Its validity is not checked during object creation. Whether data can be encoded and decoded depends on whether the encoding you specified can be used in the database.

    -   optvalue

        Specifies the option value.

        Value range: an empty string or a non-empty string



## Examples<a name="en-us_topic_0283137069_en-us_topic_0237122100_section459639151114"></a>

```
-- Create an empty data source that does not contain any information.
openGauss=# CREATE DATA SOURCE ds_test1;

-- Create a data source with TYPE information and VERSION being null.
openGauss=# CREATE DATA SOURCE ds_test2 TYPE 'MPPDB' VERSION NULL;

-- Create a data source that contains only OPTIONS.
openGauss=#  CREATE DATA SOURCE ds_test3 OPTIONS (dsn 'openGauss', encoding 'utf8');

-- Create a data source that contains TYPE, VERSION, and OPTIONS.
openGauss=# CREATE DATA SOURCE ds_test4 TYPE 'unknown' VERSION '11.2.3' OPTIONS (dsn 'openGauss', username 'userid', password 'pwd@123456', encoding '');

-- Delete the data source.
openGauss=# DROP DATA SOURCE ds_test1;
openGauss=# DROP DATA SOURCE ds_test2;
openGauss=# DROP DATA SOURCE ds_test3;
openGauss=# DROP DATA SOURCE ds_test4;
```

## Helpful Links<a name="en-us_topic_0283137069_en-us_topic_0237122100_section45538169227"></a>

[ALTER DATA SOURCE](alter-data-source.md)  and  [DROP DATA SOURCE](drop-data-source.md)

