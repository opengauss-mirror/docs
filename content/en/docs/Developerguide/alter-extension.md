# ALTER EXTENSION<a name="EN-US_TOPIC_0000001127799415"></a>

## Function<a name="section173831846163116"></a>

ALTER EXTENSION modifies the plug-in extension.

## Precautions<a name="section786041713618"></a>

-   ALTER EXTENSION modifies the definition of an installed extension. Methods are as follows:
-   UPDATE

    The extension is updated to a new version. The extension must be applicable to an update script \(or a series of scripts\) so that the current installation version can be modified to a required version.

-   SET SCHEMA

    The extended object is moved to another schema. This extension must be relocatable to make the command successful.

-   ADD member\_object

    An existing object is added to the extension. This is mainly useful for extension update scripts. This object is then treated as a member of the extension. Obviously, the object can only be canceled by canceling the extension.

-   DROP member\_object

    A member object is removed from the extension. This method is useful in extension update scripts. The object is not canceled, but is simply separated from the extension.

    You must have an extension before using ALTER EXTENSION. You must have the permission on adding or deleting an object before using the ADD or DROP statement.


## Syntax<a name="section1374719912321"></a>

```
ALTER EXTENSION name UPDATE [ TO new_version ]
ALTER EXTENSION name SET SCHEMA new_schema
ALTER EXTENSION name ADD member_object
ALTER EXTENSION name DROP member_object

where member_object is:

  AGGREGATE agg_name (agg_type [, ...] ) |
  CAST (source_type AS target_type) |
  COLLATION object_name |
  CONVERSION object_name |
  DOMAIN object_name |
  EVENT TRIGGER object_name |
  FOREIGN DATA WRAPPER object_name |
  FOREIGN TABLE object_name |
  FUNCTION function_name ( [ [ argmode ] [ argname ] argtype [, ...] ] ) |
  MATERIALIZED VIEW object_name |
  OPERATOR operator_name (left_type, right_type) |
  OPERATOR CLASS object_name USING index_method |
  OPERATOR FAMILY object_name USING index_method |
  [ PROCEDURAL ] LANGUAGE object_name |
  SCHEMA object_name |
  SEQUENCE object_name |
  SERVER object_name |
  TABLE object_name |
  TEXT SEARCH CONFIGURATION object_name |
  TEXT SEARCH DICTIONARY object_name |
  TEXT SEARCH PARSER object_name |
  TEXT SEARCH TEMPLATE object_name |
  TYPE object_name |
  VIEW object_name
```

## Parameter Description<a name="section62781959163314"></a>

-   **name**

    Name of an installed extension.

-   **new\_version**

    Desired extension of a new version. This parameter can be overwritten by identifiers and literal characters. If a new version is not specified, ALTER EXTENSION UPDATE will update the version to an extended control file to display the default version.

-   **new\_schema**

    New extended schema.

-   **object\_name**

    **agg\_name**

    **function\_name**

    **operator\_name**

    The name of the object that is added or removed from the extension, including names of tables, aggregations, fields, outer lists, functions, operators, operator classes, operator families, sequences, text search objects, types, and views that can be schema-qualified.

-   **agg\_type**

    Input data type on an aggregate function operation. Dereference a zero-parameter aggregate function and write an asterisk \(\*\) instead of a list of these input data types.

-   **source\_type**

    Name of the source data type to be forcibly converted.

-   **target\_type**

    Name of the target data type to be forcibly converted.

-   **argmode**

    Model of the function parameter. The value can be  **IN**,  **OUT**,  **INOUT**, or  **VARIADIC**. If this parameter is not set, the default value  **IN**  is used. Note that ALTER EXTENSION does not relate to the  **OUT**  parameter, because you only need to enter parameters to confirm the consistency of functions. Therefore, the  **IN**,  **INOUT**, and  **VARIADIC**  parameters are enough.

-   **argname**

    Name of a function parameter. Note that ALTER EXTENSION does not relate to the parameter name, because only the parameter data type is required to confirm the consistency of the function.

-   **argtype**

    Data type \(optionally schema modified\) of a function parameter.

-   **left\_type**

    **right\_type**

    Data type \(optionally schema modified\) of an operator's parameter. Write NONE for missing parameters of prefix or suffix operators.


## Example<a name="section14411351193419"></a>

Update the hstore extension to version 2.0:

```
ALTER EXTENSION hstore UPDATE TO '2.0';
```

Run the following command to update the hstore extension mode to utils:

```
ALTER EXTENSION hstore SET SCHEMA utils;
```

Add an existing function for hstore extension.

```
ALTER EXTENSION hstore ADD FUNCTION populate_record(anyelement, hstore);
```

