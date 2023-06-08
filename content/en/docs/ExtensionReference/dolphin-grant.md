# GRANT<a name="ZH-CN_TOPIC_0289900150"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

GRANT is used to grant permissions to one or more roles.

## Precautions<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_sf1580b93b5664a7db2c08cf69806faa5"></a>

   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
   The ALTER ROUTINE, CRAETE ROUTINE, CREATE TEMPORARY TABLES, CREATE USER, CREATE TABLESPACE and INDEX permissions are added.
## Syntax<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s5eb0513470714ccbbd425944c1d73c8e"></a>

-   The ALTER ROUTINE permission is added.

The ALTER permission is basically the same as that of the function and procedure.

The syntax after modification is described as follows:

```
GRANT { { EXECUTE | ALTER ROUTINE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
ON {FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} | PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...] | ALL FUNCTIONS IN SCHEMA schema_name [, ...] | ALL PROCEDURE IN SCHEMA schema_name [, ...] | schema_name.*}
TO { [ GROUP ] role_name | PUBLIC } [, ...]
[ WITH GRANT OPTION ];
```
-   The CREATE ROUTINE permission is added.

The permission is basically the same as that of CREATE ANY FUNCTION.

The syntax after modification is described as follows:

```
GRANT { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
  DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | CREATE ROUTINE | EXECUTE ANY FUNCTION |
  CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE } [, ...]
  [ON *.*]
  TO [ GROUP ] role_name [, ...]
  [ WITH ADMIN OPTION ];
  ```

-   The CREATE TEMPORARY TABLES permission is added.

The permission is basically the same as that of TEMPORARY.

The syntax after modification is described as follows:
```
GRANT { { CREATE | CONNECT | CREATE TEMPORARY TABLES | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
    | ALL [ PRIVILEGES ] }
    ON { DATABASE database_name [, ...] | database_name.* }
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
  ```

-   The CREATE USER permission is added.

It controls users' permission to create new users, which is basically the same as the CREATEROLE and NOCREATEROLE permissions of users.

The new syntax is described as follows:
```
GRANT CREATE USER ON *.* TO ROLE_NAME;
```

-   The CREATE TABLESPACE permission is added.

It controls users' permission to create tablespaces.

The new syntax is described as follows:
```
GRANT CREATE TABLESPACE ON *.* TO ROLE_NAME;
```
-   The INDEX permission is added.

The permission is basically the same as that of CREATE ANY INDEX.

The syntax after modification is described as follows:
```
GRANT INDEX 
  ON *.* 
  TO [ GROUP ] role_name [, ...]
  [ WITH ADMIN OPTION ];
```
## Parameter Description<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s54fe58f3f55f4965a6b9370f9edebfdf"></a>

N/A

## Examples<a name="en-us_topic_0283137669_en-us_topic_0237122179_en-us_topic_0059779274_s82ec0652acdd4e6091abc851b909926d"></a>

```
GRANT ALTER ROUTINE ON FUNCTION TEST TO USER_TESTER;
```

```
GRANT CREATE ANY FUNCTION TO USER_TESTER;
```

```
GRANT CREATE TEMPORARY TABLES ON DATABASE DATABASE_TEST TO USER_TESTER; 
```

```
GRANT CREATE USER ON *.* TO USER_TESTER;
```

```
GRANT CREATE TABLESPACE ON *.* TO USER_TESTER;
```

```
GRANT INDEX TO TEST_USER;
```

## Helpful Links<a name="section156744489391"></a>

[GRANT](../SQLReference/GRANT.md)
