# LOAD DATA<a name="EN-US_TOPIC_0289899980"></a>

## Function<a name="en-us_topic_0283136676_en-us_topic_0237122096_en-us_topic_0059778766_s0d743b5d862d4cf1829449f474af6d7z"></a>

**LOAD DATA** copies data from a file to a table.


## Precautions<a name="en-us_topic_0283136676_en-us_topic_0237122096_en-us_topic_0059778766_sc996fd2c14664963bae3e1e0ce655461"></a>

-   When the **enable\_copy\_server\_files** parameter is disabled, only initial users are allowed to run the LOAD DATA command. When the **enable\_copy\_server\_files** parameter is enabled, users with the SYSADMIN permission or users inherited from the built-in role **gs\_role\_copy\_files** are allowed to run the LOAD DATA command. However, the LOAD DATA command cannot be executed on database configuration files, key files, certificate files, or audit logs by default. This prevents users from viewing or modifying sensitive files without authorization.
-   It applies only to tables but not views.
-   Column-store tables and foreign tables are not supported.
-   The INSERT permission of the table to be inserted is required. The **replace** option also requires the DELETE permission of the table.
-   If a list of columns is specified, **LOAD** copies only the data of the specified columns between the file and the table. If a table has any columns that are not in the column list, default values are inserted for those columns.
-   If a data source file is specified, the server must be able to access the file.
-   If any row of the data file contains more or fewer columns than expected, an error is thrown when **dolphin.sql\_mode** is set to strict. In loose mode, NULL is inserted for missing columns. If a column has a NOT NULL constraint, the base value of the type is inserted.
-   **\\N** indicates NULL. To enter the actual data value **\\N**, use **\\\\N**.

## Syntax<a name="en-us_topic_0283136676_en-us_topic_0237122096_en-us_topic_0059778766_s85a73a9ad894403da754c5d6b3d821g2"></a>


```
        LOAD DATA
        INFILE 'file_name'
        [REPLACE | IGNORE]
        INTO TABLE tbl_name
        [CHARACTER SET charset_name]
        [{FIELDS | COLUMNS}
        [TERMINATED BY 'string']
        [[OPTIONALLY] ENCLOSED BY 'char']
        [ESCAPED BY 'char']
        ]
        [LINES
        [STARTING BY 'string']
        [TERMINATED BY 'string']
        ]
        [IGNORE number {LINES | ROWS}]
        [(col_name_or_user_var
        [, col_name_or_user_var] ...)]
```

## Parameter Description<a name="en-us_topic_0283136676_en-us_topic_0237122096_en-us_topic_0059778766_sd35c0a2e8c2f4c18837224240e8c4e6a"></a>

-   **REPLACE**

    The inserted data takes effect only when a primary key or unique key conflict occurs. The system deletes the conflicting rows in the table and then continues to insert data.

-   **IGNORE**

    The inserted data takes effect only when a primary key or unique key conflict occurs. The system ignores the conflicting row file data and then continues to insert subsequent data.

-   **tbl\_name**

    Specifies the name \(possibly schema-qualified\) of an existing table.

    Value range: an existing table name

-   **col\_name**

    Specifies an optional list of columns to be copied.

    Value range: If no column list is specified, all columns of the table will be copied.

-   **ESCAPED BY 'char'**

    Specifies escape characters. The value must be a single-byte character.

    The default value is single quotation marks \(''\). If the value is the same as that of **ENCLOSED BY**, it will be replaced by **'\\0'**.

-   **LINES TERMINATED BY 'string'**

    Specifies the linefeed style of the exported data file.

    Value range: multi-character newline characters within 10 bytes. Common newline characters include  **\\r**  \(0x0D\),  **\\n**  \(0x0A\), and  **\\r\\n **\(0x0D0A\). Special newline characters include  **$**  and  **\#**.
    
    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >   
    >-   The value of **LINES TERMINATED BY** cannot be the same as that of the **delimiter** or null parameter.   
    >-   The value of **LINES TERMINATED BY** cannot contain .abcdefghijklmnopqrstuvwxyz0123456789.

-   **CHARACTER SET 'charset\_name'**
    
    Specifies the name of a file encoding format.
    
    Value range: a valid encoding format
    
    Default value: current encoding format

-   **\[OPTIONALLY\] ENCLOSED BY 'char'**
    
    Specifies the enclosing character. The data in the complete enclosing character is parsed as a column of parameters. OPTIONALLY is meaningless.
    
    Default value: double quotation mark (")
    
    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >
    >-   The **ENCLOSED BY** parameter cannot be the same as the delimiter parameter.
    >-   The value of **ENCLOSED BY** must be a single-byte character.

-   **FIELDS \| COLUMNS TERMINATED BY 'string'**

    The string that separates columns within each row \(line\) of the file, and it cannot be larger than 10 bytes.

    Default: Horizontal tab.

-   **IGNORE number \{LINES \| ROWS\}**

    Specifies that the first *number* rows of the data file are skipped during data export.

## Examples<a name="en-us_topic_0283136676_en-us_topic_0237122096_en-us_topic_0059778766_s30bb80bf2fbd4cb3af1ab84e7cb1e0h8"></a>

```

--Create the load_t1 table.
openGauss=# CREATE TABLE load_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
);
--/home/omm/test.csv
1,a,b,c,d,e
,a,b,c,d,e
3,\N,a,b,c,d
\N,a,b,c,d,e

--Copy data from the /home/omm/test.csv file to the load_t1 table.
openGauss=# LOAD DATA INFILE '/home/omm/test.csv' INTO TABLE load_t1;

--Copy data from the /home/omm/test.csv file to the load_t1 table. The parameters are as follows: '\t' (fields terminated by E'\t') indicates a column separator, '\r' (lines terminated by E'\r') indicates a newline character, and (IGNORE 2 LINES) indicates that the first two lines are skipped.
openGauss=# LOAD DATA INFILE '/home/omm/test.csv' INTO TABLE load_t1 fields terminated by ',' lines terminated by E'\n' IGNORE 2 LINES;

openGauss=# select * from load_t1;
 sm_ship_mode_sk | sm_ship_mode_id  |            sm_type             |  sm_code   |      sm_carrier      |     sm_contract
-----------------+------------------+--------------------------------+------------+----------------------+----------------------
               3 |                  | a                              | b          | c                    | d
               0 | a                | b                              | c          | d                    | e
(2 rows)

--Delete load_t1.
openGauss=# DROP TABLE load_t1;
```
