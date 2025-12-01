# CREATE TYPE<a name="EN-US_TOPIC_0289900603"></a>

## Function<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

**CREATE TYPE**  registers a new data type for use in the current database. The user who defines a type becomes its owner. Types are designed only for row-store tables.

The following data types can be created: composite type, base type, shell type, enumerated type, and set type.

-   Composite type

    A composite type is specified by a list of attribute names and data types. If the data type of an attribute is collatable, the attribute's collation rule can also be specified. This is essentially the same as the row type of a table, but using  **CREATE TYPE**  avoids the need to create an actual table when all that is wanted is to define a type. A stand-alone composite type is useful as the parameter or return type of a function.

    To create a composite type, you must have the  **USAGE**  permission on all of its attribute types.

-   Base type

    You can create a base type \(scalar type\). Generally, these functions must be written in the underlying language.

-   Shell type

    A shell type is simply a placeholder for a type to be defined later; it is created by issuing  **CREATE TYPE**  with no parameters except for the type name. Shell types are needed as forward references when base types are created.

-   Enumerated type

    An enumerated type is a list of one or more quoted labels, each of which must be 1 to 63 bytes long.

-   Set type

    It is similar to an array but has no length limit. It is mainly used in stored procedures.

-   A user granted with the  **CREATE ANY TYPE**  permission can create types in the public and user schemas.

## Precautions<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

If a schema name is given then the type is created in the specified schema. Otherwise, it is created in the current schema. The type name must be distinct from the name of any existing type or domain in the same schema. \(Because tables have associated data types, the type name must also be distinct from the name of any existing table in the same schema.\)

## Syntax<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE TYPE name AS
    ( [ attribute_name data_type [ COLLATE collation ] [, ... ] ] )

CREATE TYPE name (
    INPUT = input_function,
    OUTPUT = output_function
    [ , RECEIVE = receive_function ]
    [ , SEND = send_function ]
    [ , TYPMOD_IN =
type_modifier_input_function ]
    [ , TYPMOD_OUT =
type_modifier_output_function ]
    [ , ANALYZE = analyze_function ]
    [ , INTERNALLENGTH = { internallength |
VARIABLE } ]
    [ , PASSEDBYVALUE ]
    [ , ALIGNMENT = alignment ]
  [ , STORAGE = storage ]
    [ , LIKE = like_type ]
    [ , CATEGORY = category ]
    [ , PREFERRED = preferred ]
    [ , DEFAULT = default ]
    [ , ELEMENT = element ]
    [ , DELIMITER = delimiter ]
    [ , COLLATABLE = collatable ]
)

CREATE TYPE name

CREATE TYPE name AS ENUM
    ( [ 'label' [, ... ] ] )

CREATE TYPE name AS TABLE OF data_type
```

## Parameter Description<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

Composite type

-   **name**

    Specifies the name \(optionally schema-qualified\) of the type to be created.

-   **attribute\_name**

    Specifies the name of an attribute \(column\) for the composite type.

-   **data\_type**

    Specifies the name of an existing data type to become a column of the composite type. You can use  **%ROWTYPE**  to indirectly reference the type of a table, or  **%TYPE**  to indirectly reference the type of a column in a table or composite type.

-   **collation**

    Specifies the name of an existing collation rule to be associated with a column of the composite type. You can run the  **select \* from pg\_collation**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.


Base type

When creating a base type, you can place parameters in any order. The  **input\_function**  and  **output\_function**  parameters are mandatory, and other parameters are optional.

-   **input\_function**

    Specifies the name of a function that converts data from the type's external textual form to its internal form.

    The input function may be declared as taking one parameter of type cstring or taking three parameters of types cstring, oid, and integer.

    -   The first parameter is the input text as a C string,
    -   the second parameter is the type's own OID \(except for array types, which instead receive their element type's OID\),
    -   and the third is the typmod of the destination column, if known \(**-1**  will be passed if not\).

    The input function must return a value of the data type itself. Usually, an input function should be declared  **STRICT**; if it is not, it will be called with a  **NULL**  first parameter when reading a  **NULL**  input value. The function must still return  **NULL**  in this case, unless it raises an error. \(This case is mainly meant to support domain input functions, which might need to reject  **NULL**  inputs.\)

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The input and output functions can be declared to have results or parameters of the new type, when they have to be created before the new type can be created. The type should first be defined as a shell type, which is a placeholder type that has no attributes except a name and an owner. This is done by issuing the  **CREATE TYPE **_name_  statement, with no additional parameters. Then the I/O functions can be defined referencing the shell type. Finally,  **CREATE TYPE**  with a full definition replaces the shell entry with a complete, valid type definition, after which the new type can be used normally.

-   **output\_function**

    Specifies the name of a function that converts data from the type's internal form to its external textual form.

    The output function must be declared as taking one parameter of the new data type. The output function must return type cstring. Output functions are not invoked for  **NULL**  values.

-   **receive\_function**

    \(Optional\) Specifies the name of a function that converts data from the type's external binary form to its internal form.

    If this function is not supplied, the type cannot participate in binary input. The binary representation should be chosen to be cheap to convert to internal form, while being reasonably portable. \(For example, the standard integer data types use network byte order as the external binary representation, while the internal representation is in the machine's native byte order.\) The receive function should perform adequate checking to ensure that the value is valid.

    The receive function may be declared as taking one parameter of type internal or taking three parameters of types internal, oid, integer.

    -   The first parameter is a pointer to a StringInfo buffer holding the received byte string;
    -   the latter two are the same as for the text input function.

    The receive function must return a value of the data type itself. Usually, a receive function should be declared  **STRICT**; if it is not, it will be called with a  **NULL**  first parameter when reading a  **NULL**  input value. The function must still return  **NULL**  in this case, unless it raises an error. \(This case is mainly meant to support domain receive functions, which might need to reject  **NULL**  inputs.\)

-   **send\_function**

    \(Optional\) Specifies the name of a function that converts data from the type's internal form to its external binary form.

    If this function is not supplied, the type cannot participate in binary output. The send function must be declared as taking one parameter of the new data type. The send function must return type bytea. Send functions are not invoked for  **NULL**  values.

-   **type\_modifier\_input\_function**

    \(Optional\) Specifies the name of a function that converts an array of modifier\(s\) for the type to an internal form.

-   **type\_modifier\_output\_function**

    \(Optional\) Specifies the name of a function that converts the internal form of the type's modifier\(s\) to its external textual form.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**type\_modifier\_input\_function**  and  **type\_modifier\_output\_function**  are needed if the type supports modifiers, that is optional constraints attached to a type declaration, such as char\(5\) or numeric\(30,2\). openGauss allows user-defined types to take one or more simple constants or identifiers as modifiers. However, this information must be capable of being packed into a single non-negative integer value for storage in the system catalogs. The  **type\_modifier\_input\_function**  is passed the declared modifier\(s\) in the form of a cstring array. It must check the values for validity \(throwing an error if they are wrong\), and if they are correct, return a single non-negative integer value that will be stored as the column "typmod". Type modifiers will be rejected if the type does not have a  **type\_modifier\_input\_function**. The  **type\_modifier\_output\_function**  converts the internal integer typmod value back to the correct form for user display. It must return a cstring value that is the exact string to append to the type name; for example numeric's function might return \(30,2\). It is allowed to omit the  **type\_modifier\_output\_function**, in which case the default display format is just the stored typmod integer value enclosed in parentheses.

-   **analyze\_function**

    \(Optional\) Specifies the name of a function that performs statistical analysis for the data type.

    By default,  **ANALYZE**  will attempt to gather statistics using the type's "equals" and "less-than" operators, if there is a default B-tree operator class for the type. For non-scalar types, this behavior is likely to be unsuitable, so it can be overridden by specifying a custom analysis function. The analysis function must be declared to take one parameter of type internal and return a boolean result.

-   **internallength**

    \(Optional\) Specifies the length in bytes of the new type's internal representation. The default assumption is that it is variable-length.

    While the details of the new type's internal representation are only known to the I/O functions and other functions you create to work with the type, there are several attributes of the internal representation that must be declared to openGauss. Foremost of these is  **internallength**. Base data types can be fixed-length, in which case  **internallength**  is a positive integer, or variable length, indicated by setting  **internallength**  to  **VARIABLE**. \(Internally, this is represented by setting  **typlen**  to  **-1**.\) The internal representation of all variable-length types must start with a 4-byte integer giving the total length of this value of the type.

-   **PASSEDBYVALUE**

    \(Optional\) Indicates that values of this data type are passed by value, rather than by reference. You cannot pass by value types whose internal representation is larger than the size of the Datum type \(4 bytes on most machines, 8 bytes on a few\).

-   **alignment**

    \(Optional\) Specifies the storage alignment requirement of the data type. If specified, it must be  **char**,  **int2**,  **int4**, or  **double**; the default is  **int4**.

    The allowed values equate to alignment on 1, 2, 4, or 8 byte boundaries. Note that variable-length types must have an alignment of at least 4, since they necessarily contain an int4 as their first component.

-   **storage**

    \(Optional\) Specifies the storage strategy for the data type.

    If specified, it must be  **plain**,  **external**,  **extended**, or  **main**; the default is  **plain**.

    -   **plain**  specifies that data of the type will always be stored in-line and not compressed. \(Only  **plain**  is allowed for fixed-length types.\)
    -   **extended**  specifies that the system will first try to compress a long data value, and will move the value out of the main table row if it is still too long.
    -   **external**  allows the value to be moved out of the main table, but the system will not try to compress it.
    -   **main**  allows compression, but discourages moving the value out of the main table. \(Data items with this storage strategy might still be moved out of the main table if there is no other way to make a row fit, but they will be kept in the main table preferentially over  **extended**  and  **external**  items.\)

        All  **storage**  values other than  **plain**  imply that the functions of the data type can handle values that have been toasted. The specific other value given merely determines the default  **TOAST**  storage strategy for columns of a toastable data type; users can pick other strategies for individual columns using  **ALTER TABLE SET STORAGE**.


-   **like\_type**

    \(Optional\) Specifies the name of an existing data type that the new type will have the same representation as. The values of  **internallength**,  **passedbyvalue**,  **alignment**, and  **storage**  are copied from that type, unless overridden by explicit specification elsewhere in this  **CREATE TYPE**  statement.

    Specifying representation in this way is especially useful when the low-level implementation of a new type references an existing type.

-   **category**

    \(Optional\) Specifies the category code \(a single ASCII character\) for this type. The default is  **U**  for a user-defined type. You may also choose other ASCII characters to create custom categories.

-   **preferred**

    \(Optional\) Specifies whether a type is preferred within its type category. If it is, the value will be  **TRUE**, else  **FALSE**. The default is  **FALSE**. Be very careful about creating a preferred type within an existing type category, as this could cause surprising changes in behavior.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The  **category**  and  **preferred**  parameters can be used to help control which implicit cast will be applied in ambiguous situations. Each data type belongs to a category named by a single ASCII character, and each type is either preferred or not within its category. The parser will prefer casting to preferred types \(but only from other types within the same category\) when this rule is helpful in resolving overloaded functions or operators. For types that have no implicit casts to or from any other types, it is sufficient to leave these settings at the defaults. However, for a group of related types that have implicit casts, it is often helpful to mark them all as belonging to a category and select one or two of the most general types as being preferred within the category. The  **category**  parameter is especially useful when adding a user-defined type to an existing built-in category, such as the numeric or string types. However, it is also possible to create entirely-user-defined type categories. Select any ASCII character other than an uppercase letter to name such a category.

-   **default**

    \(Optional\) Specifies the default value for the data type. If this is omitted, the default is null.

    A default value can be specified, in case a user wants columns of the data type to default to something other than the null value. Specify the default with the  **DEFAULT**  keyword. \(Such a default can be overridden by an explicit  **DEFAULT**  clause attached to a particular column.\)

-   **element**

    \(Optional\) Specifies the type of array elements when an array type is created. For example, to define an array of 4-byte integers \(int4\), specify  **ELEMENT = int4**.

-   **delimiter**

    \(Optional\) Specifies the delimiter character to be used between values in arrays made of this type.

    **delimiter**  can be set to a specific character. The default delimiter is the comma \(,\). Note that the delimiter is associated with the array element type, not the array type itself.

-   **collatable**

    \(Optional\) Specifies whether this type's operations can use collation information. If they can, the value will be  **TRUE**, else  **FALSE**  \(default\).

    If  **collatable**  is  **TRUE**, column definitions and expressions of the type may carry collation information through use of the  **COLLATE**  clause. It is up to the implementations of the functions operating on the type to actually make use of the collation information; this does not happen automatically merely by marking the type collatable.

-   **label**

    \(Optional\) Represents the textual label associated with one value of an enumerated type. It is a string of 1 to 63 characters.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Whenever a user-defined type is created, openGauss automatically creates an associated array type whose name consists of the element type's name prepended with an underscore \(\_\).

## Examples<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
-- Create a composite type, create a table, insert data, and make a query.
openGauss=# CREATE TYPE compfoo AS (f1 int, f2 text);
openGauss=# CREATE TABLE t1_compfoo(a int, b compfoo);
openGauss=# CREATE TABLE t2_compfoo(a int, b compfoo);
openGauss=# INSERT INTO t1_compfoo values(1,(1,'demo'));
openGauss=# INSERT INTO t2_compfoo select * from t1_compfoo;
openGauss=# SELECT (b).f1 FROM t1_compfoo;
openGauss=# SELECT * FROM t1_compfoo t1 join t2_compfoo t2 on (t1.b).f1=(t1.b).f1;

-- Rename the data type.
openGauss=# ALTER TYPE compfoo RENAME TO compfoo1;

-- Change the owner of the user-defined type compfoo1 to usr1.
openGauss=# CREATE USER usr1 PASSWORD 'xxxxxxxxx';
openGauss=# ALTER TYPE compfoo1 OWNER TO usr1;

-- Change the schema of the user-defined type compfoo1 to usr1.
openGauss=# ALTER TYPE compfoo1 SET SCHEMA usr1;

-- Add a new attribute to the data type.
openGauss=# ALTER TYPE usr1.compfoo1 ADD ATTRIBUTE f3 int;

-- Delete the compfoo1 type.
openGauss=# DROP TYPE usr1.compfoo1 cascade;

-- Delete related tables and users.
openGauss=# DROP TABLE t1_compfoo;
openGauss=# DROP TABLE t2_compfoo;
openGauss=# DROP SCHEMA usr1;
openGauss=# DROP USER usr1;

-- Create an enumerated type.
openGauss=# CREATE TYPE bugstatus AS ENUM ('create', 'modify', 'closed');

-- Add a label.
openGauss=# ALTER TYPE bugstatus ADD VALUE IF NOT EXISTS 'regress' BEFORE 'closed';

-- Rename a label.
openGauss=# ALTER TYPE bugstatus RENAME VALUE 'create' TO 'new';

-- Create a set type.
openGauss=# CREATE TYPE compfoo_table AS TABLE OF compfoo;
```

## Helpful Links<a name="en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER TYPE](alter-type.md)  and  [DROP TYPE](drop-type.md)

