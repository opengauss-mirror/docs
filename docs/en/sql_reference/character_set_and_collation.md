# Character Set and Collation

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:20:56.253Z -->

A character set is the encoding rule for characters, and a collation is the sorting rule for characters. This chapter mainly introduces character sets and collations in openGauss B compatibility mode and openGauss D compatibility mode (i.e., `sql_compatibility` = 'B' and 'D'). The character set and collation rules and syntax described below are supported only in B and D compatibility modes.

The following notes apply to character sets and collations:

- Each character set has one or more collations, one of which is the default collation.
- Each collation has only one associated character set.
- The same data may produce different sort results when different collations are used.
- In openGauss, `utf8mb4` and `utf8` are the same character set.
- It is recommended that table fields and `server_encoding` use the same character set to avoid performance loss caused by encoding conversion.

The openGauss database supports the following features:

- Storing strings using multiple character sets
- String comparison using collation
- Database-level, schema-level, table-level, and column-level character set and collation
- Mixing strings with different character sets and collations within the same server, same database, same table, or same SQL statement

## Supported Character Sets<a name="supported-character-sets"></a>

For the character sets currently supported by openGauss, see the ENCODING section in [CREATE DATABASE](create_database.md).

Some character sets have default collations in B compatibility mode, as shown below:

| Character Set | Description | Default Collation |
| ------- | -------------------------------- | ------------------ |
| utf8    | Variable-length character encoding for Unicode, with character encoding length of 1 to 4 bytes | utf8_general_ci    |
| utf8mb4 | Same as utf8 | utf8mb4_general_ci      |
| gb18030 | GB Chinese character encoding character set | gb18030_chinese_ci |
| gb18030-2022 | GB Chinese character encoding character set | gb18030_chinese_ci |
| gbk     | GB Chinese character encoding extended character set | gbk_chinese_ci     |
| binary  | Pseudo character set binary | binary             |

[!NOTE]Note

- Currently, the schema-level, table-level, and column-level syntax only supports specifying the above character sets.

## Supported Collations<a name="supported-collations"></a>

For details about all collations supported by openGauss, see the [PG_COLLATION](../database_reference/pg_collation.md) system table.

Some collation rules are only supported in B and D modes, as follows:

| Collation           | Character Set | Description                                                  | Pad Space |
| ------------------- | ------------- | ------------------------------------------------------------ | --------- |
| binary              | binary        | Uses binary collation rule.                                  | Not supported |
| utf8mb4_general_ci  | utf8mb4       | Uses general collation rule.                                 | Supported |
| utf8mb4_unicode_ci  | utf8mb4       | Uses collation rule based on Unicode Collation Algorithm (UCA). | Supported |
| utf8mb4_bin         | utf8mb4       | Uses binary collation rule.                                  | Supported |
| utf8_general_ci     | utf8          | Same as utf8mb4_general_ci.                                  | Supported |
| utf8_unicode_ci     | utf8          | Same as utf8mb4_unicode_ci.                                  | Supported |
| utf8_bin            | utf8          | Same as utf8_bin.                                            | Supported |
| gbk_chinese_ci      | gbk           | Uses Chinese language (Pinyin) collation rule.               | Supported |
| gbk_bin             | gbk           | Uses binary collation rule.                                  | Supported |
| gb18030_chinese_ci  | gb18030       | Uses Chinese language (Pinyin) collation rule.               | Supported |
| gb18030_bin         | gb18030       | Uses binary collation rule.                                  | Supported |

[!NOTE]Note

- The above collations can only be used in B and D modes.
- Collation names begin with the name of the character set they are associated with, usually followed by one or more suffixes indicating other collation characteristics, for example: `_bin` indicates binary collation, and `_ci` indicates case-insensitive.
- When a collation supports the pad space attribute, trailing spaces are ignored during string comparison, for example: 'A  ' = 'A'.

## Detailed Description

### Client Connection Character Set and Collation<a name="client-connection-character-set-and-collation"></a>

Data with character set attributes is automatically converted between the server and the client. After receiving an SQL statement sent by the client, the server converts its encoding from the client character set `client_encoding` to the database character set `server_encoding`. Before query result data is sent to the client, the data is also converted to the client character set `client_encoding`.

#### System Parameter Description

- `server_encoding`

Character set specified when creating the database. For details, see the [CREATE DATABASE](create_database.md) section.

- `client_encoding`

Character set of the client. It can be modified using the SET NAMES statement. For details, see the [SET](set.md) section. For details about this parameter, see [client_encoding](../database_reference/locale_and_formatting.md).

- `character_set_connection`

    Default character set for string constants without a specified character set in SQL statements. For details, see [character_set_connection](../database_reference/platform_and_client_compatibility.md).

- `collation_connection`

    Default collation for string constants without a specified collation in SQL statements. For details, see [collation_connection](../database_reference/platform_and_client_compatibility.md).

[!NOTE]Note

- For an expression where a non-character type object is converted to a character type, the character set and collation of the result are `character_set_connection` and `collation_connection`.
- The character set and collation of a character type bind parameter default to the values set by the system parameters `character_set_connection` and `collation_connection`. Any value input as a bind parameter will be treated as belonging to the above character set.
- During the encoding conversion of character data, the character encoding is validated. If it does not conform, an exception is thrown.

### Database-level Character Set and Collation<a name="database-level-character-set-and-collation"></a>

When creating a new database, the character set and collation of the database can be specified.

```
CREATE DATABASE [IF NOT EXISTS] database_name
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |;
```

#### Syntax Description

- **database_name**

  Database name.

  Value range: A string that conforms to identifier naming conventions.

- **ENCODING \[ = \] encoding**

Specifies the character encoding used by the database. The value can be a string (such as 'SQL\_ASCII') or an integer number.

- **LC\_COLLATE \[ = \] lc\_collate**

Specifies the character set used by the new database. For example, set this parameter through lc\_collate = 'zh\_CN.gbk'.

The use of this parameter affects the sort order of strings (such as when using ORDER BY, and the order of indexes on text columns). By default, the sort order of the template database is used.

Value range: character sets supported by the operating system.

- **LC\_CTYPE \[ = \] lc\_ctype**

  Specifies the character classification used by the new database. For example, this parameter can be set by using lc\_ctype = 'zh\_CN.gbk'. The use of this parameter affects character classification, such as uppercase, lowercase, and digits. By default, the character classification of the template database is used.

  Value range: Character classifications supported by the operating system.

[!NOTE]Note

- The database-level character set and collation syntax is not specific to B compatibility mode and can be used in all modes. For detailed syntax, see [CREATE DATABASE](create_database.md).
- The `lc_colalte` / `lc_ctype` syntax does not support specifying collations specific to B compatibility mode. The value range of the parameters depends on the character sets supported by the local environment, which can be viewed using `locale -a`.
- After the dolphin plugin is loaded, the CREATE DATABASE syntax supports specifying the character set and collation for B compatibility mode. For specific syntax usage, see [CREATE DATABASE](https://docs.opengauss.org/en/docs/latest/extension_reference/extension_reference/plugin/dolphin-CREATE-DATABASE.md).

### Schema-level Character Set and Collation<a name="schema-level-character-set-and-collation"></a>

Creates a schema and specifies the default character set and collation.

```
CREATE SCHEMA schema_name
 [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] 
 [ [DEFAULT] COLLATE [ = ] default_collation ];
```

Modifies the default character set and collation attributes of a schema.

```
ALTER SCHEMA schema_name 
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
```

#### Syntax Description

- **schema_name**

  Schema name.

  Value range: a string that conforms to identifier naming conventions.

- **default_charset**

Specifies the default character set of the schema. When specified separately, the default collation of the schema is set to the default collation of the specified character set.

- **default_collation**

Specifies the default collation of the schema. When specified separately, the default character set of the schema is set to the character set corresponding to the specified collation.

openGauss selects the character set and collation of the schema through the following selection method:

- If both `default_charset` and `default_collation` are specified simultaneously, the character set `default_charset` and collation `default_collation` are used, and `default_charset` and `default_collation` must correspond; otherwise, an error is reported.
- If only `default_charset` is specified, the character set `default_charset` and its default collation are used.
- If only `default_collation` is specified, the collation `default_collation` and its corresponding character set are used.
- If neither `default_charset` nor `default_collation` is specified, the schema has no default character set and no default collation.

[!NOTE]Note

- In openGauss, SCHEMA is equivalent to SCHEMA/DATABASE in MySQL. After the dolphin plugin is loaded, SCHEMA/DATABASE in openGauss has the same meaning as in MySQL. For syntax reference, see [CREATE DATABASE](https://docs.opengauss.org/en/docs/latest/extension_reference/extension_reference/plugin/dolphin-CREATE-DATABASE.md).
- `default_charact` only supports specification as a character set with a default collation. If the specified character set does not have a default collation, an error is reported.
- `default_collation` only supports specification as a collation in B compatibility mode. Specifying other collations reports an error. For details about all B compatibility mode collations, see **Table Collation**.
- When the character set and collation of a newly created SCHEMA differ from the database's `server_encoding`, the `b_format_behavior_compat_options` parameter must first be set to include `enable_multi_charset`.

#### Example

```
-- Set only the character set; the collation is the default collation of the character set.
openGauss=# create schema test charset utf8;

-- Set only the collation; the character set is the character set associated with the collation.
openGauss=# create schema test collate utf8_bin；

-- Set both the character set and collation; the character set and collation need to correspond.
openGauss=# create schema test charset utf8 collate utf8_bin;

-- Modify the default character set of test to utf8mb4 and the default collation to utf8mb4_bin.
openGauss=# alter schema test charset utf8mb4 collate utf8mb4_bin;
```

### Table-level Character Set and Collation<a name="table-level-character-set-and-collation"></a>

Sets the default character set and default collation for a table.

```
CREATE TABLE table_name (column_list)
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]
    [ [DEFAULT] COLLATE [ = ] default_collation ]
```

Modifies the default character set and default collation for a table. The modification does not affect existing columns in the table.

```
ALTER TABLE table_name
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]
    [ [DEFAULT] COLLATE [ = ] default_collation ]
```

Modifies the default character set and default collation for a table to the specified values, sets the character set and collation of all character type columns in the table to the specified values, and converts the data in the columns to the new character set encoding.

```
ALTER TABLE table_name
    CONVERT TO CHARACTER SET | CHARSET charset [ COLLATE collation ]
```

**Parameter Description**

- **table_name**

  Name of the table.

- **default_charset**

  Specifies the default character set of the table. When specified alone, sets the default collation of the table to the default collation of the specified character set.

- **default_collation**

  Specifies the default collation of the table. When specified alone, the default character set of the table is set to the character set corresponding to the specified collation.

openGauss selects the character set and collation of a table through the following methods:

- If both `default_charset` and `default_collation` are specified, the character set `default_charset` and collation `default_collation` are used, and `default_charset` and `default_collation` must correspond to each other. An error is reported if they do not correspond.
- If only `default_charset` is specified, the character set `default_charset` and its default collation are used.
- If only `default_collation` is specified, the collation `default_collation` and its corresponding character set are used.
- If neither `default_charset` nor `default_collation` is specified, the default character set and default collation of the schema where the table resides are used as the default character set and default collation of the table.

[!NOTE]Note

- `default_charact` can only be specified as a character set with a default collation. If the specified character set does not have a default collation, an error is reported.
- `default_collation` can only be specified as a collation in B compatibility mode. Specifying other collations reports an error. For all B compatibility mode collations, see **table collation**.
- When the default character set and default collation of the table differ from the database's `server_encoding`, the `b_format_behavior_compat_options` parameter must first be set to include `enable_multi_charset`.
- If the default collation of a table is `binary`, text types in the table without a specified collation are converted to the corresponding binary types, and the collation is set to `binary`.

#### Example

```
-- Only the character set is set, and the collation is the default collation of the character set.
openGauss=# create table test(c1 text) charset utf8;

-- Only the collation is set, and the character set is the one associated with the collation.
openGauss=# create table test(c1 text) collate utf8_bin;

-- Both the character set and collation are set simultaneously, and they must correspond.
openGauss=# create table test(c1 text)  charset utf8 collate utf8_bin;

-- Convert the data in character type fields of the table to utf8mb4 encoding, and set the table and field collation to utf8mb4_bin.
openGauss=# alter table test convert to charset utf8mb4 collate utf8mb4_bin;

-- Change the default character set of the table to utf8mb4 and the default collation to utf8mb4_bin.
openGauss=# alter table test charset utf8mb4 collate utf8mb4_bin;
```

### Column-level Character Set and Collation<a name="column-level-character-set-and-collation"></a>

Each column of a string type (that is, types such as `CHAR`, `VARCHAR`, `TEXT`, and other string types) can have its character set and collation set.

```
CREATE TABLE table_name (
    column_name data_type
 [ CHARACTER SET | CHARSET charset ]
    [ COLLATE collation ]
);
```

#### Syntax Description

- **table_name**

  Name of the table.

- **data_type**

  Data type of the column. String types support character set and collation syntax.

- **CHARACTER SET | CHARSET charset**

  Specifies the character set for the table field. When specified separately, the collation of the field is set to the default collation of the specified character set.

- **COLLATE collation**

  The COLLATE clause specifies the collation for the column (the data type of the column must support collation). If not specified, the default collation rule is used.

openGauss selects the character set and collation for table fields through the following methods:

- If both `charset` and `collation` are specified, the character set `charset` and collation `collation` are used, and `charset` and `collation` must correspond; an error is reported if they do not correspond.
- If only `charset` is specified, the character set `charset` and its default collation are used.
- If only `collation` is specified, the character set associated with `collation` and the specified collation are used.
- If neither `charset` nor `collation` is specified, the default character set and default collation of the table are used.

[!NOTE]Note

- `default_charact` only supports specifying a character set with a default collation. If the specified character set does not have a default collation, an error is reported.
- `default_collation` only supports specifying a collation in B compatibility mode. Specifying other collations reports an error. For details about all B compatibility mode collations, see **table collation**.
- If a table field is of a text type and the specified collation is `binary`, the text type is converted to the corresponding binary type, and the collation is the specified `binary` collation.
- When the default character set and default collation set for a table field differ from the database character set `server_encoding`, the `b_format_behavior_compat_options` parameter must first be set to include `enable_multi_charset`.
- The character set of the partition key of a partitioned table must be the same as the database character set.

#### Example

```
-- Only the character set is set, and the collation is the default collation of the character set.
openGauss=# create table test(c1 text charset utf8);

-- Only the collation is set, and the character set is the character set associated with the collation.
openGauss=# create table test(c1 text collate utf8_bin);

-- Both the character set and collation are set, and they must correspond to each other.
openGauss=# create table test(c1 text charset utf8 collate utf8_bin);
```

### Character Set and Collation of Character Type Expressions<a name="character-set-and-collation-of-character-type-expressions"></a>

Every character type expression has character set and collation attributes.

In a database in B compatibility mode, if the system parameter `b_format_behavior_compat_options` is set to include the `enable_multi_charset` option, the default character set and collation of string constants are determined by the system parameters `character_set_connection` and `collation_connection`. Otherwise, their default character set is the same as the database character set `server_encoding`, and their default collation is `default`.

#### Character Set Syntax

The following syntax can be used to specify the character set and collation of a string constant:

```
[_charset_name]'string' [COLLATE collation_name]
```

##### Syntax Description

- **\_charset\_name**

    The underscore-prefixed character set name, used to define the character set of this string. It does not convert the encoding of the string.

    This syntax is only available in databases under B compatibility mode, and when the system parameter `b_format_behavior_compat_options` contains the `enable_multi_charset` option.

- **COLLATE collation\_name**

    Specifies the name of the collation, used to set the collation attribute of this string.

The character set and collation of a string are determined using the following method:

- If both character set and collation are specified, the character set `charset_name` and collation `collation_name` are used. `collation_name` must be a collation allowed by `charset_name`.

- If the character set is specified but the collation is not, the character set `charset_name` and its default collation are used.

- If the character set is not specified but the collation is, the character set set by the `character_set_connection` system parameter and the collation specified by `collation_name` are used. `collation_name` must be a collation allowed by the character set set by the `character_set_connection` system parameter.

- If neither a character set nor a collation is specified, the character set and collation specified by the parameters `character_set_connection` and `collation collation_name` are used.

##### Example

```
openGauss=# SELECT _utf8mb4'abc' COLLATE utf8mb4_general_ci;
```

For a hexadecimal or bit string with a non-`binary` character set specified, the expression data type is treated as `text`:

```
openGauss=# SELECT _utf8mb4 X'E9AB98E696AF' COLLATE utf8mb4_general_ci;
openGauss=# SELECT _utf8mb4 B'111010011010101110011000111001101001011010101111' COLLATE utf8mb4_general_ci;
```

For a hexadecimal or bit string without a character set specified, only the `binary` collation can be specified:

```
openGauss=# SELECT X'E9AB98E696AF' COLLATE utf8mb4_general_ci;
openGauss=# SELECT B'111010011010101110011000111001101001011010101111' COLLATE utf8mb4_general_ci;
```

If the specified `charset_name` is `binary`, the data type of this expression is treated as `bytea`. For binary data types, only the `binary` collation can be specified:

```
openGauss=# SELECT _binary 'abc' COLLATE binary;
```

#### Collation Syntax

Expressions of other string types can also specify a collation:

```
expression [COLLATE collation_name]
```

##### Syntax Description

- **COLLATE collation\_name**

    Specifies the name of the collation, used to set the collation attribute of this string.

    The data type of the expression must be a data type that supports collation.

    The specified collation must be a collation allowed by the character set of the expression.

##### Example

Collation and character set mismatch:

```
openGauss=#  SELECT _gbk'abc' COLLATE utf8mb4_bin;
ERROR:  COLLATION "utf8mb4_bin" is not valid for CHARACTER SET "GBK"
```

When an expression requires data type conversion, if the converted data type does not have a collation attribute, the COLLATE syntax is ignored and the character set is not validated. Examples are as follows:

```
openGauss=#  CREATE TABLE test_collate(fint int);
CREATE TABLE

-- When inserting into an int field, the expression is converted to the int data type, and the COLLATE syntax is ignored.
openGauss=#  INSERT INTO test_collate VALUES(_gbk'123' COLLATE utf8mb4_bin);
INSERT 0 1

-- When used as a LIMIT expression, the expression is converted to the int data type, and the COLLATE syntax is ignored.
openGauss=#  SELECT fint FROM test_collate LIMIT _gbk'123' COLLATE utf8mb4_bin;
 fint
------
  123
(1 row)

-- When explicitly converting to the int data type, the COLLATE syntax will be ignored.
 SELECT (_gbk'123' COLLATE utf8mb4_bin)::int;
 int4
------
  123
(1 row)
```

### Character Set and Collation Merging Rules

In a B-compatibility mode database, when the system parameter `b_format_behavior_compat_options` contains the `enable_multi_charset` option, expressions with different character sets and collations can be processed according to a certain precedence to determine the collation used in string comparison operations and the character set of the expression.

#### Collation Precedence

The collation precedence of different expressions, from highest to lowest, is as follows:

- The COLLATE syntax has the highest precedence.
- Expressions with collation conflicts (for example, string concatenation expressions with two different collations).
- Columns of data types that support collation, user-defined variables, stored procedure parameters, CASE expressions, and so on.
- Specific system functions (such as version() and opengauss_version() function expressions).
- String constants and bind parameters.
- NULL expressions.
- An expression whose data type does not support collation has the lowest precedence.

When two expressions have different collations, the collation of the expression with the highest collation precedence is used.

##### Example

```
openGauss=# CREATE TABLE t_utf8(c1 varchar(16) character set utf8mb4 collate utf8mb4_bin);
openGauss=# INSERT INTO t_utf8 VALUES('STRING');

-- -- Use the utf8mb4_bin collation for comparison. The result is false.
openGauss=#  SELECT c1 = _utf8mb4'string' AS result FROM t_utf8;
 result
--------
 f
(1 row)

-- -- Use the utf8mb4_general_ci collation for comparison. The result is true.
openGauss=# SELECT c1 = _utf8mb4'string' COLLATE utf8mb4_general_ci AS result FROM t_utf8;
 result
--------
 t
(1 row)

-- -- Define the collation of the bind parameter "$1" as collation_connection.
openGauss=# PREPARE test_collation(text) AS SELECT c1 = $1 AS result FROM t_utf8;

-- -- The bind parameter collation is at the same level as a string constant. Even if the incoming expression contains an explicit collation, the collation of c1 is still used for comparison. Notably, the incoming expression here uses the GBK character set, while the bind parameter defines the character set as UTF8MB4. Before execution, 'string' undergoes an encoding conversion.
openGauss=# EXECUTE test_collation(_gbk'string' COLLATE gbk_chinese_ci);
 result
--------
 f
(1 row)

-- -- The CASE expression is at the same level as column c1. Even though the expression contains an explicit collation, the comparison still uses the collation of c1. The two are not equal, so "same level" is output.
openGauss=# SELECT CASE _utf8mb4'string' COLLATE utf8mb4_general_ci WHEN c1 THEN 'different level' ELSE 'same level' END AS result FROM t_utf8;
   result
------------
 same level
(1 row)

-- -- The IN subquery is at the same level as column c1. Even though the expression contains an explicit collation, the comparison still uses the collation of c1. The two are not equal.
openGauss=# SELECT c1 FROM t_utf8 WHERE c1 in (SELECT _utf8mb4'string' COLLATE utf8mb4_general_ci);
 c1
----
(0 rows)
```

When two expressions at the same precedence level have different collations, the following approach is used:

- If both have the same character set, the collation with the `_bin` suffix is preferred.
- If both have the same character set, the `default` collation is not preferred.
- If the two have different character sets, the `binary` collation is used preferentially.
- If the two have different character sets, and one is a Unicode character set while the other is not, the expression with the non-Unicode character set needs to be transcoded to the Unicode character set, and the collation of the expression with the Unicode character set is ultimately used.
- If none of the above conditions are met, the two expressions are marked as having a collation conflict, and the collation is marked as invalid.
    - For conflicts arising from the COLLATE syntax specifying different collations for the same character set, an exception is thrown.
    - When the conflicting character set differs from the database character set `server_encoding`, an exception is thrown.
    - If an invalid collation is used in a sorting operation (such as >, <, etc.), an exception is thrown.
        - During string equality comparison, if the collation is invalid, the strings are directly compared as binary for equality.

###### Example

```
openGauss=# CREATE TABLE t_multi_charset(
    c_utf8_bin varchar(16) character set utf8mb4 collate utf8mb4_bin,
    c_utf8_uni varchar(16) character set utf8mb4 collate utf8mb4_unicode_ci,
    c_utf8_gen varchar(16) character set utf8mb4 collate utf8mb4_general_ci,
    c_gbk_chi varchar(16) character set gbk collate gbk_chinese_ci);
openGauss=# INSERT INTO t_multi_charset VALUES('STRING', 'String', 'string', 'STRING');

-- Prefer the utf8mb4_bin collation for comparison. The result is false.
openGauss=# SELECT c_utf8_bin = c_utf8_uni FROM t_multi_charset;

-- Collation conflict. Perform binary comparison. The result is false.
openGauss=# SELECT c_utf8_uni = c_utf8_gen FROM t_multi_charset;

-- Explicitly specified collations conflict. An exception is thrown.
openGauss=# SELECT c_utf8_uni COLLATE utf8mb4_unicode_ci = c_utf8_gen COLLATE utf8mb4_general_ci FROM t_multi_charset;

-- Prefer the utf8mb4_general_ci collation for comparison. The result is true.
openGauss=# SELECT c_utf8_gen = c_gbk_chi FROM t_multi_charset;
```

>[!NOTE]Note

- Only the character set of objects and expressions of string types (excluding `"char"`, `name`, and `clob`) can differ from the database character set.
- Data types such as `ARRAY`, `XML`, `JSON`, and `TSVECTOR` contain text data. The character set of text data in objects and expressions of these data types must be the database character set.
- In the character set and collation merging rules, the collations 'C', 'POSIX', and 'DEFAULT' are considered to correspond to the character set `server_encoding`.
