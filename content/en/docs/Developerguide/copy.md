# COPY<a name="EN-US_TOPIC_0242370560"></a>

## Function<a name="en-us_topic_0237122096_en-us_topic_0059778766_s0d743b5d862d4cf1829449f474af6d9c"></a>

**COPY**  copies data between tables and files.

**COPY FROM**  copies data from a file to a table, and  **COPY TO**  copies data from a table to a file.

## Precautions<a name="en-us_topic_0237122096_en-us_topic_0059778766_sc996fd2c14664963bae3e1e0ce655441"></a>

-   To run the  **COPY FROM FILENAME**  or  **COPY TO FILENAME**  statement, you must have the  **SYSADMIN**  permission. By default, user  **SYSADMIN**  is not allowed to run the  **COPY FROM FILENAME**  or  **COPY TO FILENAME**  statement on database configuration files, key files, certificate files, and audit logs, preventing user  **SYSADMIN**  from viewing or modifying sensitive files without authorization. To grant the permission, you need to change the setting of  **enable\_copy\_server\_files**.
-   **COPY**  applies only to tables but not views.
-   To insert data to a table, you must have the permission to insert data.
-   If a list of columns is specified,  **COPY**  copies only the data of the specified columns between the file and the table. If a table has any columns that are not in the column list,  **COPY FROM**  inserts default values for those columns.
-   If a data source file is specified, the server must be able to access the file. If  **STDIN**  is specified, data flows between the client and the server. When entering data, use the  **TAB**  key to separate the columns of the table and use a backslash and a period \(\\.\) in a new row to indicate the end of the input.
-   **COPY FROM**  throws an error if any row in the data file contains more or fewer columns than expected.
-   The end of the data can be represented by a line that contains only a backslash and a period \(\\.\). If data is read from a file, the end flag is unnecessary. If data is copied between client applications, an end tag must be provided.
-   In  **COPY FROM**,  **\\N**  is an empty string. To enter the actual value  **\\N**, use  **\\\\N**.

-   **COPY FROM**  does not support data preprocessing during data import, such as expression operation and default value filling. If you need to preprocess data during the import, you need to import the data to a temporary table and then run SQL statements to insert the data to the table through operations. However, this method causes I/O expansion and reduces the import performance.
-   When a data format error occurs during  **COPY FROM**  execution, the transaction is rolled back. However, the error information is insufficient, making it difficult to locate the error data from a large amount of raw data.
-   **COPY FROM**  and  **COPY TO**  apply to low concurrency and local import and export of a small amount of data.

## Syntax<a name="en-us_topic_0237122096_en-us_topic_0059778766_s85a73a9ad894403da754c5d6b3d8210f"></a>

-   Copy data from a file to a table.

    ```
    COPY table_name [ ( column_name [, ...] ) ] 
        FROM { 'filename' | STDIN }
        [ [ USING ] DELIMITERS 'delimiters' ]
        [ WITHOUT ESCAPING ]
        [ LOG ERRORS ]
        [ REJECT LIMIT 'limit' ]
        [ WITH ( option [, ...] ) ]
        | copy_option
        | FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) [ ( option [, ...] ) | copy_option [  ...] ] ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >In the syntax,  **FIXED FORMATTER \(\{column\_name\(offset, length\)\} \[, ...\]\)**  and  **\[\(option \[, ...\]\) | copy\_option \[...\]\]**  can be in any sequence.  

-   Copy data from a table to a file.

    ```
    COPY table_name [ ( column_name [, ...] ) ]
        TO { 'filename' | STDOUT }
        [ [ USING ] DELIMITERS 'delimiters' ]
        [ WITHOUT ESCAPING ]
        [ WITH ( option [, ...] ) ]
        | copy_option
        | FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) [ ( option [, ...] ) | copy_option [  ...] ] ];
    
    COPY query
        TO { 'filename' | STDOUT }
        [ WITHOUT ESCAPING ]
        [ WITH ( option [, ...] ) ]
        | copy_option
        | FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) [ ( option [, ...] ) | copy_option [  ...] ] ];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >1.  The syntax constraints of  **COPY TO**  are as follows:  
    >    **\(query\)**  is incompatible with  **\[USING\] DELIMITER**. If the data comes from a query result,  **COPY TO**  cannot specify  **\[USING\] DELIMITERS**.  
    >2.  Use spaces to separate  **copy\_option**  following  **FIXED FORMATTTER**.  
    >3.  **copy\_option**  is the native parameter, while  **option**  is the parameter imported by a compatible foreign table.  
    >4.  In the syntax,  **FIXED FORMATTER \(\{column\_name\(offset, length\)\} \[, ...\]\)**  and  **\[\(option \[, ...\]\) | copy\_option \[...\]\]**  can be in any sequence.  

    The syntax of the optional parameter  **option**  is as follows:

    ```
    FORMAT 'format_name'
    | OIDS [ boolean ]
    | DELIMITER 'delimiter_character'
    | NULL 'null_string'
    | HEADER [ boolean ]
    | FILEHEADER 'header_file_string'
    | FREEZE [ boolean ]
    | QUOTE 'quote_character'
    | ESCAPE 'escape_character'
    | EOL 'newline_character'
    | NOESCAPING [ boolean ]
    | FORCE_QUOTE { ( column_name [, ...] ) | * }
    | FORCE_NOT_NULL ( column_name [, ...] )
    | ENCODING 'encoding_name'
    | IGNORE_EXTRA_DATA [ boolean ]
    | FILL_MISSING_FIELDS [ boolean ]
    | COMPATIBLE_ILLEGAL_CHARS [ boolean ]
    | DATE_FORMAT 'date_format_string'
    | TIME_FORMAT 'time_format_string'
    | TIMESTAMP_FORMAT 'timestamp_format_string'
    | SMALLDATETIME_FORMAT 'smalldatetime_format_string'
    ```

    The syntax of the optional parameter  **copy\_option**  is as follows:

    ```
    OIDS 
    | NULL 'null_string' 
    | HEADER 
    | FILEHEADER 'header_file_string' 
    | FREEZE 
    | FORCE_NOT_NULL column_name [, ...]
    | FORCE_QUOTE { column_name [, ...] | * }
    | BINARY 
    | CSV 
    | QUOTE [ AS ] 'quote_character' 
    | ESCAPE [ AS ] 'escape_character' 
    | EOL 'newline_character'
    | ENCODING 'encoding_name' 
    | IGNORE_EXTRA_DATA 
    | FILL_MISSING_FIELDS
    | COMPATIBLE_ILLEGAL_CHARS 
    | DATE_FORMAT 'date_format_string' 
    | TIME_FORMAT 'time_format_string' 
    | TIMESTAMP_FORMAT 'timestamp_format_string' 
    | SMALLDATETIME_FORMAT 'smalldatetime_format_string'
    ```


## Parameter Description<a name="en-us_topic_0237122096_en-us_topic_0059778766_sd35c0a2e8c2f4c18837224240e8c4e3e"></a>

-   **query**

    Specifies that the results are to be copied.

    Value range: a  **SELECT**  or  **VALUES**  command in parentheses

-   **table\_name**

    Specifies the name \(possibly schema-qualified\) of an existing table.

    Value range: an existing table name

-   **column\_name**

    Specifies an optional list of columns to be copied.

    Value range: any columns. All columns will be copied if no column list is specified.

-   **STDIN**

    Specifies that input comes from the standard input.

-   **STDOUT**

    Specifies that output goes to the standard output.

-   **FIXED**

    Fixes column length. When the column length is fixed,  **DELIMITER**,  **NULL**, and  **CSV**  cannot be specified. When  **FIXED**  is specified,  **BINARY**,  **CSV**, and  **TEXT**  cannot be specified by  **option**  or  **copy\_option**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The definition of fixed length is as follows:  
    >1.  The column length of each record is the same.  
    >2.  Spaces are used for column padding. Columns of the numeric type are left-aligned and columns of the string type are right-aligned.   
    >3.  No delimiters are used between columns.  

-   **\[USING\] DELIMITER 'delimiters'**

    The string that separates columns within each row \(line\) of the file, and it cannot be larger than 10 bytes.

    Value range: The delimiter cannot include any of the following characters: \\.abcdefghijklmnopqrstuvwxyz0123456789

    The default value is a tab character in text format and a comma in CSV format.

-   **WITHOUT ESCAPING**

    Specifies, in text format, whether to escape the backslash \(\\\) and its following characters.

    Value range: text only

-   **LOG ERRORS**

    If this parameter is specified, the error tolerance mechanism for data type errors in the  **COPY FROM**  statement is enabled. Row errors are recorded in the  **public.pgxc\_copy\_error\_log**  table in the database for future reference.

    Value range: a value set while data is imported using  **COPY FROM**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The restrictions of this error tolerance parameter are as follows:  
    >-   This error tolerance mechanism captures only the data type errors \(DATA\_EXCEPTION\) that occur during data parsing of  **COPY FROM**  on the primary node of the database.  
    >-   Before enabling error tolerance for  **COPY FROM**  for the first time in a database, check whether the  **public.pgxc\_copy\_error\_log**  table exists. If not, call the  **copy\_error\_log\_create\(\)**  function to create it. If it does, copy its data elsewhere, delete it, and call the  **copy\_error\_log\_create\(\)**  function to create the table. For details about columns in the  **public.pgxc\_copy\_error\_log**  table, see  [Table 1](other-functions.md#en-us_topic_0237121997_table138318280213).  
    >-   While a  **COPY FROM**  statement with specified  **LOG ERRORS**  is being executed, if  **public.pgxc\_copy\_error\_log**  does not exist or does not have the table definitions compliant with those predefined in  **copy\_error\_log\_create\(\)**, an error will be reported. Ensure that the error table is created using the  **copy\_error\_log\_create\(\)**  function. Otherwise,  **COPY FROM**  statements with error tolerance may fail to be run.  
    >-   If existing error tolerance parameters \(for example,  **IGNORE\_EXTRA\_DATA**\) of the  **COPY**  statement are enabled, the error of the corresponding type will be processed as specified by the parameters and no error will be reported. Therefore, the error table does not contain such error data.  

-   **LOG ERRORS DATA**

    The differences between  **LOG ERRORS DATA**  and  **LOG ERRORS**  are as follows:

    1.  **LOG ERRORS DATA**  fills the  **rawrecord**  field in the error tolerance table.
    2.  Only users with the super permission can use the  **LOG ERRORS DATA**  parameter.

        >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
        >If error content is too complex, it may fail to be written to the error tolerance table by using  **LOG ERRORS DATA**, causing a task failure.  


-   **REJECT LIMIT**'**limit'**

    Used with the  **LOG ERROR**  parameter to set the upper limit of the tolerated errors in the  **COPY FROM**  statement. If the number of errors exceeds the limit, later errors will be reported based on the original mechanism.

    Value range: a positive integer \(1 to  _INTMAX_\) or  **unlimited**

    Default value: If  **LOG ERRORS**  is not specified, an error will be reported. If  **LOG ERRORS**  is specified, the default value is  **0**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >In the error tolerance mechanism described in the description of  **LOG ERRORS**, the count of  **REJECT LIMIT**  is calculated based on the number of data parsing errors on the primary node of the database where the  **COPY FROM**  statement is executed, not based on the number of all errors on the primary node.  

-   **FORMATTER**

    Defines the place of each column in the data file in fixed length mode. Defines the place of each column in the data file in the  **column\(**_offset_,_length_**\)**  format.

    Value range:

    -   The value of  **offset**  must be larger than 0. The unit is byte.
    -   The value of  **length**  must be larger than 0. The unit is byte.

    The total length of all columns must be less than 1 GB.

    Replace columns that are not in the file with null.

-   **OPTION \{ option\_name ' value '  \}**

    Specifies all types of parameters of a compatible foreign table.

    -   FORMAT

        Specifies the format of the source data file in the foreign table.

        Value range:  **CSV**,  **TEXT**,  **FIXED**, and  **BINARY**

        -   The CSV file can process newline characters efficiently, but cannot process certain special characters well.
        -   The TEXT file can process certain special characters efficiently, but cannot process newline characters well.
        -   In FIXED files, the column length of each record is the same. Spaces are used for padding, and the excessive part will be truncated. 
        -   All data in the BINARY file is stored/read as binary format rather than as text. It is faster than the text and CSV formats, but a binary-format file is less portable.

        Default value:  **TEXT**

    -   DELIMITER

        Specifies the character that separates columns within each row \(line\) of the file.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   The value of  **DELIMITER**  cannot be  **\\r**  or  **\\n**.  
        >-   A delimiter cannot be the same as the null value. The delimiter for the CSV format cannot be same as the  **quote**  value.  
        >-   The delimiter for the TEXT format data cannot contain lowercase letters, digits, or special characters \(.\\\).  
        >-   The data length of a single row should be less than 1 GB. A row that has many columns using long delimiters cannot contain much valid data.  
        >-   You are advised to use multi-character delimiters or invisible delimiters. For example, you can use multi-characters \(such as $^&\) and invisible characters \(such as 0x07, 0x08, and 0x1b\).  

        Value range: a multi-character delimiter within 10 bytes

        Default value:

        -   A tab character in TEXT format
        -   A comma \(,\) in CSV format
        -   No delimiter in FIXED format

    -   NULL

        Specifies the string that represents a null value.

        Value range:

        -   A null value cannot be  **\\r**  or  **\\n**. The maximum length is 100 characters.
        -   A null value cannot be the same as the  **DELIMITER**  or  **QUOTE**  value.

        Default value:

        -   The default value for the CSV format is an empty string without quotation marks.
        -   The default value for the TEXT format is  **\\N**.

    -   HEADER

        Specifies whether a file contains a header with the names of each column in the file.  **header**  is available only for CSV and FIXED files.

        When data is imported, if  **header**  is  **on**, the first row of the data file will be identified as the header and ignored. If  **header**  is  **off**, the first row will be identified as a data row.

        When data is exported, if  **header**  is  **on**,  **fileheader**  must be specified. If  **header**  is  **off**, an exported file does not contain a header.

        Value range:  **true/on**  and  **false/off**

        Default value:  **false**

    -   QUOTE

        Specifies a quoted character string for a CSV file.

        Default value: single quotation marks \(''\)

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   The value of  **QUOTE**  cannot be the same as that of  **DELIMITER**  or  **NULL**.  
        >-   The value of  **QUOTE**  must be a single-byte character.  
        >-   Invisible characters are recommended, such as 0x07, 0x08, and 0x1b.  

    -   ESCAPE

        Specifies an escape character for a CSV file. The value must be a single-byte character.

        Default value: single quotation marks \(''\) If the value is the same as that of  **QUOTE**, it will be replaced by  **\\0**.

    -   EOL 'newline\_character'

        Specifies the newline character style of the imported or exported data file.

        Value range: multi-character newline characters within 10 bytes Common newline characters include  **\\r**  \(0x0D\),  **\\n**  \(0x0A\), and \\r\\n\(0x0D0A\). Special newline characters include  **$**  and  **\#**.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   The EOL parameter supports only the TEXT format for data import and export and does not support the CSV or FIXED format for data import. For forward compatibility, the EOL parameter can be set to  **0x0D**  or  **0x0D0A**  for data export in the CSV or FIXED format.  
        >-   The value of  **EOL**  cannot be the same as that of  **DELIMITER**  or  **NULL**.  
        >-   The EOL parameter value cannot contain the following characters: .abcdefghijklmnopqrstuvwxyz0123456789.  

    -   FORCE\_QUOTE \{ \( column\_name \[, ...\] \) | \* \}

        Forces quotation marks to be used for all non-null values in each specified column, in  **CSV COPY TO**  mode. Null values are not quoted.

        Value range: an existing column name

    -   FORCE\_NOT\_NULL \( column\_name \[, ...\] \)

        Assigns a value to a specified column in  **CSV COPY FROM**  mode.

        Value range: an existing column name

    -   ENCODING

        Specifies that the file is encoded in the  **encoding\_name**. If this option is omitted, the current encoding format is used by default.

    -   IGNORE\_EXTRA\_DATA

        Specifies whether to ignore excessive columns when the number of data source files exceeds the number of foreign table columns. This parameter is used only during data import.

        Value range:  **true/on**  and  **false/off**

        -   **true/on**: If the number of columns in a data source file is greater than that defined by the foreign table, the extra columns at the end of a row are ignored.
        -   **false/off**: If the number of columns in a data source file is greater than that defined by the foreign table, the following error message is reported:

            ```
            extra data after last expected column
            ```

        Default value:  **false**

        >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
        >If a newline character at the end of a row is missing and the row and another row are integrated into one, data in another row is ignored after the parameter is set to  **true**.  

    -   COMPATIBLE\_ILLEGAL\_CHARS

        Specifies whether to tolerate invalid characters during data import. The parameter is valid only for data import using  **COPY FROM**.

        Value range:  **true/on**  and  **false/off**

        -   **true/on**: No error message is reported and data import is not interrupted when there are invalid characters. Invalid characters are converted into valid ones, and then imported to the database.
        -   **false/off**: An error occurs when there are invalid characters, and the import stops.

        Default value:  **false/off**

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >The rules for converting invalid characters are as follows:  
        >1.  **\\0**  is converted to a space.  
        >2. Other invalid characters are converted to question marks.  
        >3. When  **compatible\_illegal\_chars**  is set to  **true/on**, after invalid characters such as  **NULL**,  **DELIMITER**,  **QUOTE**, and  **ESCAPE**  are converted to spaces or question marks, an error message stating "illegal chars conversion may confuse COPY escape 0x20" will be displayed to remind you of possible parameter confusion caused by the conversion.  

    -   FILL\_MISSING\_FIELDS

        Specifies how to handle the problem that the last column of a row in a source data file is lost during data import.

        Value range:  **true/on**  and  **false/off**

        Default value:  **false/off**

    -   DATE\_FORMAT

        Specifies the DATE format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid DATE value For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >You can use the  **TIMESTAMP\_FORMAT**  parameter to set the DATE format to  **TIMESTAMP**  for data import. For details, see  **TIMESTAMP\_FORMAT**  below.  

    -   TIME\_FORMAT

        Specifies the TIME format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid TIME value. Time zones are not supported. For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

    -   TIMESTAMP\_FORMAT

        Specifies the TIMESTAMP format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid TIMESTAMP value. Time zones cannot be used. For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

    -   SMALLDATETIME\_FORMAT

        Specifies the SMALLDATETIME format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid SMALLDATETIME value For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).


-   **COPY\_OPTION \{ option\_name ' value '  \}**

    Specifies all types of native parameters of  **COPY**.

    -   NULL null\_string

        Specifies the string that represents a null value.

        >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
        >When using  **COPY FROM**, any data item that matches this string will be stored as a null value, so make sure that you use the same string as you used with  **COPY TO**.  

        Value range:

        -   A null value cannot be  **\\r**  or  **\\n**. The maximum length is 100 characters.
        -   A null value cannot be the same as the  **DELIMITER**  or  **QUOTE**  value.

        Default value:

        -   The default value for the TEXT format is  **\\N**.
        -   The default value for the CSV format is an empty string without quotation marks.

    -   HEADER

        Specifies whether a file contains a header with the names of each column in the file.  **header**  is available only for CSV and FIXED files.

        When data is imported, if  **header**  is  **on**, the first row of the data file will be identified as the header and ignored. If  **header**  is  **off**, the first row will be identified as a data row.

        When data is exported, if  **header**  is  **on**,  **fileheader**  must be specified. If  **header**  is  **off**, an exported file does not contain a header.

    -   FILEHEADER

        Specifies a file that defines the content in the header for exported data. The file contains data description of each column.

        >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
        >-   This parameter is available only when  **header**  is  **on**  or  **true**.  
        >-   **fileheader**  specifies an absolute path.  
        >-   The file can contain only one row of header information, and ends with a newline character. Excess rows will be discarded. \(Header information cannot contain newline characters.\)  
        >-   The length of the file including the newline character cannot exceed 1 MB.  

    -   FREEZE

        Sets the  **COPY**  loaded data row as  **frozen**, like these data have executed  **VACUUM FREEZE**.

        This is a performance option of initial data loading. The data will be frozen only when the following three requirements are met:

        -   The table being loaded has been created or truncated in the current subtransaction before copying.
        -   There are no cursors open in the current transaction.
        -   There are no original snapshots in the current transaction.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >When  **COPY**  is completed, all the other sessions will see the data immediately. However, this violates the general principle of MVCC visibility, and users should understand that this may cause potential risks.  

    -   FORCE NOT NULL column\_name \[, ...\]

        In  **CSV COPY FROM**  mode, the specified column is not null. If the column is null, its value is regarded as a string of 0 characters.

        Value range: an existing column name

    -   FORCE QUOTE \{ column\_name \[, ...\]  | \* \}

        Forces quotation marks to be used for all non-null values in each specified column, in  **CSV COPY TO**  mode. Null values are not quoted.

        Value range: an existing column name

    -   BINARY

        Specifies that data is stored and read in binary mode instead of text mode. In binary mode, you cannot declare  **DELIMITER**,  **NULL**, or  **CSV**. When  **BINARY**  is specified,  **CSV**,  **FIXED**, and  **TEXT**  cannot be specified through  **option**  or  **copy\_option**.

    -   CSV

        Enables the CSV mode. When  **CSV**  is specified,  **BINARY**,  **FIXED**, and  **TEXT**  cannot be specified through  **option**  or  **copy\_option**.

    -   QUOTE \[AS\] 'quote\_character'

        Specifies a quoted character string for a CSV file.

        Default value: single quotation marks \(''\)

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   The value of  **QUOTE**  cannot be the same as that of  **DELIMITER**  or  **NULL**.  
        >-   The value of  **QUOTE**  must be a single-byte character.  
        >-   Invisible characters are recommended, such as 0x07, 0x08, and 0x1b.  

    -   ESCAPE \[AS\] 'escape\_character'

        Specifies an escape character for a CSV file. The value must be a single-byte character.

        The default value is single quotation marks \(''\). If the value is the same as that of  **QUOTE**, it will be replaced by  **\\0**.

    -   EOL 'newline\_character'

        Specifies the newline character style of the imported or exported data file.

        Value range: multi-character newline characters within 10 bytes Common newline characters include  **\\r**  \(0x0D\),  **\\n**  \(0x0A\), and  **\\r\\n **\(0x0D0A\). Special newline characters include  **$**  and  **\#**.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   The  **EOL**  parameter supports only the TEXT format for data import and export and does not support the CSV or FIXED format. For forward compatibility, the EOL parameter can be set to  **0x0D**  or  **0x0D0A**  for data export in the CSV or FIXED format.  
        >-   The value of  **EOL**  cannot be the same as that of  **DELIMITER**  or  **NULL**.  
        >-   The EOL parameter value cannot contain the following characters: .abcdefghijklmnopqrstuvwxyz0123456789.  

    -   ENCODING 'encoding\_name'

        Specifies the name of a file encoding format.

        Value range: a valid encoding format

        Default value: current encoding format

    -   IGNORE\_EXTRA\_DATA

        If the number of columns in a data source file is greater than that defined by the foreign table, the extra columns at the end of a row are ignored. This parameter is used only during data import.

        If this parameter is not used and the number of columns in the data source file is greater than that defined in the foreign table, the following error information is displayed:

        ```
        extra data after last expected column
        ```

    -   COMPATIBLE\_ILLEGAL\_CHARS

        Specifies that invalid characters are tolerated during data import. Invalid characters are converted and then imported to the database. No error is reported and the import is not interrupted. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        If this parameter is not used, an error is reported when invalid characters are encountered during the import, and the import is interrupted.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >The rules for converting invalid characters are as follows:  
        >1.  **\\0**  is converted to a space.  
        >2. Other invalid characters are converted to question marks.  
        >3. When  **compatible\_illegal\_chars**  is set to  **true/on**, after invalid characters such as  **NULL**,  **DELIMITER**,  **QUOTE**, and  **ESCAPE**  are converted to spaces or question marks, an error message stating "illegal chars conversion may confuse COPY escape 0x20" will be displayed to remind you of possible parameter confusion caused by the conversion.  

    -   FILL\_MISSING\_FIELDS

        Specifies how to handle the problem that the last column of a row in a source data file is lost during data import.

        Value range:  **true/on**  and  **false/off**

        Default value:  **false/off**

        >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
        >Do not specify this option. Currently, it does not enable error tolerance, but will make the parser ignore the said errors during data parsing on the primary node of the database. Such errors will not be recorded in the COPY error table \(enabled using  **LOG ERRORS REJECT LIMIT**\) but will be reported later by the database node. Therefore, do not specify this option.  

    -   DATE\_FORMAT 'date\_format\_string'

        Specifies the DATE format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid DATE value For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >You can use the  **TIMESTAMP\_FORMAT**  parameter to set the DATE format to  **TIMESTAMP**  for data import. For details, see  **TIMESTAMP\_FORMAT**  below.  

    -   TIME\_FORMAT 'time\_format\_string'

        Specifies the TIME format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid TIME value. Time zones are not supported. For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

    -   TIMESTAMP\_FORMAT 'timestamp\_format\_string'

        Specifies the TIMESTAMP format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid TIMESTAMP value. Time zones cannot be used. For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

    -   SMALLDATETIME\_FORMAT 'smalldatetime\_format\_string'

        Specifies the SMALLDATETIME format for data import. The BINARY format is not supported. When data of such format is imported, error "cannot specify bulkload compatibility options in BINARY mode" will occur. The parameter is valid only for data import using  **COPY FROM**.

        Value range: a valid SMALLDATETIME value For details, see  [Date and Time Processing Functions and Operators](date-and-time-processing-functions-and-operators.md).

    The following special backslash sequences are recognized by  **COPY FROM**:

    -   **\\b**: Backslash \(ASCII 8\)
    -   **\\f**: Form feed \(ASCII 12\)
    -   **\\n**: Newline character \(ASCII 10\)
    -   **\\r**: Carriage return character \(ASCII 13\)
    -   **\\t**: Tab \(ASCII 9\)
    -   **\\v**: Vertical tab \(ASCII 11\)
    -   **\\digits**: Backslash followed by one to three octal digits specifies that the ASCII value is the character with that numeric code.
    -   **\\xdigits**: Backslash followed by an x and one or two hex digits specifies the character with that numeric code.


## Examples<a name="en-us_topic_0237122096_en-us_topic_0059778766_s30bb80bf2fbd4cb3af1ab84e7cb1e0c9"></a>

```
-- Copy data from the tpcds.ship_mode file to the /home/omm/ds_ship_mode.dat file:
postgres=# COPY tpcds.ship_mode TO '/home/omm/ds_ship_mode.dat';

-- Output tpcds.ship_mode to stdout.
postgres=# COPY tpcds.ship_mode TO stdout;

-- Create the tpcds.ship_mode_t1 table.
postgres=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
)
WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
;

-- Copy data from stdin to the tpcds.ship_mode_t1 table.
postgres=# COPY tpcds.ship_mode_t1 FROM stdin;

-- Copy data from the /home/omm/ds_ship_mode.dat file to the tpcds.ship_mode_t1 table.
postgres=# COPY tpcds.ship_mode_t1 FROM '/home/omm/ds_ship_mode.dat';

-- Copy data from the /home/omm/ds_ship_mode.dat file to the tpcds.ship_mode_t1 table, with the import format set to TEXT (format 'text'), the delimiter set to \t' (delimiter E'\t'), excessive columns ignored (ignore_extra_data 'true'), and characters not escaped (noescaping 'true').
postgres=# COPY tpcds.ship_mode_t1 FROM '/home/omm/ds_ship_mode.dat' WITH(format 'text', delimiter E'\t', ignore_extra_data 'true', noescaping 'true');

-- Copy data from the /home/omm/ds_ship_mode.dat file to the tpcds.ship_mode_t1 table, with the import format set to FIXED, fixed-length format specified (FORMATTER(SM_SHIP_MODE_SK(0, 2), SM_SHIP_MODE_ID(2,16), SM_TYPE(18,30), SM_CODE(50,10), SM_CARRIER(61,20), SM_CONTRACT(82,20))), excessive columns ignored (ignore_extra_data), and headers included (header).
postgres=# COPY tpcds.ship_mode_t1 FROM '/home/omm/ds_ship_mode.dat' FIXED FORMATTER(SM_SHIP_MODE_SK(0, 2), SM_SHIP_MODE_ID(2,16), SM_TYPE(18,30), SM_CODE(50,10), SM_CARRIER(61,20), SM_CONTRACT(82,20)) header ignore_extra_data;

-- Delete the tpcds.ship_mode_t1 table:
postgres=# DROP TABLE tpcds.ship_mode_t1;
```

