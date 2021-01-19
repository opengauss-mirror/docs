# CREATE DATABASE<a name="EN-US_TOPIC_0289900066"></a>

## Function<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

Create a database. By default, a new database is created by copying the standard system database template0. Only template0 can be used to create a new database.

## Precautions<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   A user that has the  **CREATEDB**  permission or a system administrator can create a database.
-   **CREATE DATABASE**  cannot be executed inside a transaction block.
-   Errors along the line of "could not initialize database directory" are most likely related to insufficient permissions on the data directory, a full disk, or other file system problems.

## Syntax<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE database_name
    [ [ WITH ] { [ OWNER [=] user_name ] |
               [ TEMPLATE [=] template ] |
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |
               [ DBCOMPATIBILITY [=] compatibilty_type ] |
               [ TABLESPACE [=] tablespace_name ] |
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## Parameter Description<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    Specifies the database name.

    Value range: a string. It must comply with the naming convention.

-   **OWNER \[ = \] user\_name**

    Specifies the owner of the new database. By default, the owner of a new database is the current user.

    Value range: an existing username

-   **TEMPLATE \[ = \] template**

    Specifies a template name. That is, the template from which the database is created. openGauss creates a database by copying data from a template database. openGauss has two default template databases  **template0**  and  **template1**  and a default user database  **postgres**.

    Value range: template0.

-   **ENCODING \[ = \] encoding**

    Specifies the encoding format used by the new database. The value can be a string \(for example,  **SQL\_ASCII**\) or an integer.

    By default, the encoding format of the template database is used. The encoding formats of the template databases  **template0**  and  **template1**  depend on the OS. The encoding format of  **template1**  cannot be changed. If you need to change the encoding format when creating a database, use  **template0**.

    Common values :  **GBK**,  **UTF8**, and  **Latin1**

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The character set encoding of the new database must be compatible with the local settings \(**LC\_COLLATE**  and  **LC\_CTYPE**\).
    >-   When the specified character encoding set is  **GBK**, some uncommon Chinese characters cannot be directly used as object names. This is because the byte encoding overlaps with the ASCII characters @A-Z\[\\\]^\_\`a-z\{|\} when the second byte of the GBK ranges from 0x40 to 0x7E.  **@\[\\\]^\_'\{|\}**  is an operator in the database. If it is directly used as an object name, a syntax error will be reported. For example, the GBK hexadecimal code is  **0x8240**, and the second byte is  **0x40**, which is the same as the ASCII character @. Therefore, the character cannot be used as an object name. If you do need to use this function, you can add double quotation marks \(""\) to avoid this problem when creating and accessing objects.

-   **LC\_COLLATE \[ = \] lc\_collate**

    Specifies the character set used by the new database. For example, set this parameter by using  **lc\_collate = 'zh\_CN.gbk'**.

    The use of this parameter affects the sort order of strings \(for example, the order of using  **ORDER BY**  for execution and the order of using indexes on text columns\). By default, the sorting order of the template database is used.

    Value range: a valid sorting type

-   **LC\_CTYPE \[ = \] lc\_ctype**

    Specifies the character class used by the new database. For example, set this parameter by using  **lc\_ctype = 'zh\_CN.gbk'**. The use of this parameter affects the classification of characters, such as uppercase letters, lowercase letters, and digits. By default, the character classification of the template database is used.

    Value range: a valid character type

-   **DBCOMPATIBILITY \[ = \] compatibilty\_type**

    Specifies the type of the compatible database.

    Value range: A, B, C, and PG, indicating  **O**,  **MY**,  **TD**  and  **POSTGRES**  databases, respectively.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When  **DBCOMPATIBILITY**  is set to  **A**, an empty string is considered as  **NULL**.

-   **TABLESPACE \[ = \] tablespace\_name**

    Specifies the tablespace of the database.

    Value range: an existing tablespace name

-   **CONNECTION LIMIT \[ = \] connlimit**

    Specifies the maximum number of concurrent connections that can be made to the new database.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The system administrator is not restricted by this parameter.
    >-   connlimit is calculated separately for each primary database node. Number of connections of openGauss = connlimit x Number of normal CN primary database nodes.

    Value range: an integer greater than or equal to -1 The default value is  **-1**, indicating that there is no limit.


The restrictions on character encoding are as follows:

-   If the locale is set to  **C**  \(or  **POSIX**\), all encoding types are allowed. For other locale settings, the character encoding must be the same as that of the locale.
-   The encoding and region settings must match the template database, except that  **template0**  is used as a template. This is because other databases may contain data that does not match the specified encoding, or may contain indexes whose sorting order is affected by  **LC\_COLLATE**  and  **LC\_CTYPE**. Copying this data will invalidate the indexes in the new database.  **template0**  does not contain any data or indexes that may be affected.

## Examples<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
-- Create users jim and tom:
postgres=# CREATE USER jim PASSWORD 'Bigdata@123';
postgres=# CREATE USER tom PASSWORD 'Bigdata@123';

-- Create database music using GBK (the local encoding type is also GBK):
postgres=# CREATE DATABASE music ENCODING 'GBK' template = template0;

-- Create database music2 and specify user jim as its owner:
postgres=# CREATE DATABASE music2 OWNER jim;

-- Create database music3 using template template0 and specify user jim as its owner:
postgres=# CREATE DATABASE music3 OWNER jim TEMPLATE template0;

-- Set the maximum number of connections to database music to 10:
postgres=# ALTER DATABASE music CONNECTION LIMIT= 10;

-- Rename database music to music4:
postgres=# ALTER DATABASE music RENAME TO music4;

-- Change the owner of database music2 to user tom:
postgres=# ALTER DATABASE music2 OWNER TO tom;

-- Set the tablespace of database music3 to PG_DEFAULT:
postgres=# ALTER DATABASE music3 SET TABLESPACE PG_DEFAULT;

-- Disable the default index scan on database music3.
postgres=# ALTER DATABASE music3 SET enable_indexscan TO off;

-- Reset the enable_indexscan parameter.
postgres=# ALTER DATABASE music3 RESET enable_indexscan;

Delete the databases:
postgres=# DROP DATABASE music2;
postgres=# DROP DATABASE music3;
postgres=# DROP DATABASE music4;

-- Delete the jim and tom users.
postgres=# DROP USER jim;
postgres=# DROP USER tom;

-- Create a database compatible with the TD format.
postgres=# CREATE DATABASE td_compatible_db DBCOMPATIBILITY 'C';

-- Create a database compatible with the ORA format.
postgres=# CREATE DATABASE ora_compatible_db DBCOMPATIBILITY 'A';

-- Delete the databases that are compatible with the TD and ORA formats.
postgres=# DROP DATABASE td_compatible_db;
postgres=# DROP DATABASE ora_compatible_db;
```

## Helpful Links<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER DATABASE](en-us_topic_0283136981.md)  and  [DROP DATABASE](en-us_topic_0283137424.md)

## Suggestions<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_section8189694144220"></a>

-   **create database**

    Database cannot be created in a transaction.


-   **ENCODING   LC\_COLLATE     LC\_CTYPE**

    If the new database Encoding, LC-Collate, or LC\_Ctype does not match the template database \(SQL\_ASCII\) \(**'GBK'**,  **'UTF8'**, or  **'LATIN1'**\),  **template \[=\] template0**  must be specified.


