# CREATE FUNCTION<a name="EN-US_TOPIC_0242370568"></a>

## Function<a name="en-us_topic_0237122104_en-us_topic_0059778837_sd4b3500e6b35475aa19a15933fec5720"></a>

**CREATE FUNCTION**  creates a function.

## Precautions<a name="en-us_topic_0237122104_en-us_topic_0059778837_s4e29e167452e4cfda9adebadc939e3fd"></a>

-   If the parameters or return values of a function have precision, the precision is not checked.
-   When creating a function, you are advised to explicitly specify the schemas of tables in the function definition. Otherwise, the function may fail to be executed.
-   **current\_schema**  and  **search\_path**  specified by  **SET**  during function creation are invalid.  **search\_path**  and  **current\_schema**  before and after function execution should be the same.
-   If a function has output parameters, the  **SELECT**  statement uses the default values of the output parameters when calling the function. When the  **CALL**  statement calls the function, it requires that the output parameters must be specified. When the  **CALL**  statement calls an overloaded  **PACKAGE**  function, it can use the default values of the output parameters. For details, see examples in  [CALL](call.md).
-   Only the functions compatible with PostgreSQL or those with the  **PACKAGE**  attribute can be overloaded. After  **REPLACE**  is specified, a new function is created instead of replacing a function if the number of parameters, parameter type, or return value is different.
-   You can use the  **SELECT**  statement to specify different parameters using identical functions, but cannot use the  **CALL**  statement to call identical functions without the  **PACKAGE**  attribute.
-   When you create a function, you cannot insert other agg functions out of the avg function or other functions.
-   By default, the permissions to execute new functions are granted to  **PUBLIC**. For details, see  [GRANT](grant.md). You can revoke the default execution permissions from  **PUBLIC**  and grant them to other users as needed. To avoid the time window during which new functions can be accessed by all users, create functions in transactions and set function execution permissions.

## Syntax<a name="en-us_topic_0237122104_en-us_topic_0059778837_s7109c8eddfba4ea0b3cc85d39d0ab774"></a>

-   Syntax \(compatible with PostgreSQL\) for creating a customized function:

    ```
    CREATE [ OR REPLACE  ] FUNCTION function_name 
        ( [  { argname [ argmode  ] argtype [  { DEFAULT  | :=  | =  } expression  ]}  [, ...]  ] ) 
        [ RETURNS rettype [ DETERMINISTIC  ]  | RETURNS TABLE (  { column_name column_type  }  [, ...] )]
        LANGUAGE lang_name 
        [ 
           {IMMUTABLE  | STABLE  | VOLATILE }
            | {SHIPPABLE | NOT SHIPPABLE}
            | WINDOW
            | [ NOT  ] LEAKPROOF  
            | {CALLED ON NULL INPUT  | RETURNS NULL ON NULL INPUT | STRICT } 
            | {[ EXTERNAL  ] SECURITY INVOKER | [ EXTERNAL  ] SECURITY DEFINER | AUTHID DEFINER  | AUTHID CURRENT_USER} 
            | {fenced | not fenced}
            | {PACKAGE}
    
            | COST execution_cost
            | ROWS result_rows
            | SET configuration_parameter { {TO | =} value | FROM CURRENT }}
         ][...]
        {
            AS 'definition'
        }
    
    ```

-   O syntax of creating a customized function:

    ```
    CREATE [ OR REPLACE  ] FUNCTION function_name 
        ( [  { argname [ argmode  ] argtype [  { DEFAULT | := | =  } expression  ] }  [, ...]  ] )
        RETURN rettype [ DETERMINISTIC  ]
        [ 
            {IMMUTABLE  | STABLE  | VOLATILE } 
            | {SHIPPABLE | NOT SHIPPABLE}
            | {PACKAGE}
            | {FENCED | NOT FENCED}
            | [ NOT  ] LEAKPROOF  
            | {CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT } 
            | {[ EXTERNAL  ] SECURITY INVOKER  | [ EXTERNAL  ] SECURITY DEFINER |
    AUTHID DEFINER | AUTHID CURRENT_USER
    } 
            | COST execution_cost  
            | ROWS result_rows  
            | SET configuration_parameter { {TO | =} value  | FROM CURRENT
    
        ][...] 
    
        { 
          IS  | AS
    } plsql_body
    /
    ```


## Parameter Description<a name="en-us_topic_0237122104_en-us_topic_0059778837_sd944ea321dde4635bf07b637385f13f9"></a>

-   **function\_name**

    Specifies the name of the function to create \(optionally schema-qualified\).

    Value range: a string. It must comply with the naming convention and up to 63 character strings. If there are more than 63 strings, the database will truncate the strings and reserve the first 63 strings as function_name.

-   **argname**

    Specifies the parameter name of the function.

    Value range: a string. It must comply with the naming convention and up to 63 character strings. If there are more than 63 strings, the database will truncate the strings and reserve the first 63 strings as function parameter names.

-   **argmode**

    Specifies the parameter mode of the function.

    Value range:  **IN**,  **OUT**,  **INOUT**, and  **VARIADIC**. The default value is  **IN**. The parameters of  **OUT**  and  **INOUT**  cannot be used in the function definition of  **RETURNS TABLE**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >**VARIADIC**  specifies parameters of the array type.  

-   **argtype**

    Specifies the data type of a function parameter.

-   **expression**

    Specifies the default expression of a parameter.

-   **rettype**

    Specifies the return data type.

    When there is  **OUT**  or  **INOUT**  parameter, the  **RETURNS**  clause can be omitted. If the clause exists, the result type of the clause must be the same as that of the output parameter. If there are multiple output parameters, the result type of the clause is  **RECORD**. Otherwise, the result type of the clause is the same as that of a single output parameter.

    The  **SETOF**  modifier indicates that the function will return a set of items, rather than a single item.

-   **column\_name**

    Specifies the column name.

-   **column\_type**

    Specifies the column type.

- **definition**

    Specifies a string constant defining a function. Its meaning depends on the language. It can be an internal function name, a path pointing to a target file, a SQL query, or text in a procedural language.

-   **DETERMINISTIC**

    Specifies an interface compatible with the SQL syntax. You are not advised to use it.

-   **LANGUAGE lang\_name**

    Specifies the name of the language that is used to implement the function. It can be  **SQL**,  **internal**, or the name of a customized process language. To ensure downward compatibility, the name can use single quotation marks. Contents in single quotation marks must be capitalized.

-   **WINDOW**

    Indicates that this function is a window function. The  **WINDOW**  attribute cannot be changed when replacing an existing function definition.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >For a customized window function, the value of  **LANGUAGE**  can only be  **internal**, and the referenced internal function must be a window function.  

-   **IMMUTABLE**

    Specifies that the function always returns the same result if the parameter values are the same.

-   **STABLE**

    Specifies that the function cannot modify the database, and that within a single table scan it will consistently return the same result for the same parameter value, but its result varies by SQL statements.

-   **VOLATILE**

    Specifies that the function value can change in a single table scan and no optimization is performed.

- **SHIPPABLE | NOT SHIPPABLE**

    Specifies whether the function can be pushed down for execution. This interface is reserved and is not recommended.

- **FENCED | NOT FENCED**

    Specifies whether the user-defined C function is executed in fenced or not-fenced mode. This interface is reserved and is not recommended.

-   **PACKAGE**

    Specifies whether the function can be overloaded. PostgreSQL-style functions can be overloaded, and this parameter is designed for functions of other styles.

    -   All PACKAGE and non-PACKAGE functions cannot be overloaded or replaced.
    -   PACKAGE functions do not support parameters of the VARIADIC type.
    -   The  **PACKAGE**  attribute of functions cannot be modified.

-   **LEAKPROOF**

    Specifies that the function has no side effects.  **LEAKPROOF**  can be set only by the system administrator.

-   **CALLED ON NULL INPUT**

    Declares that some parameters of the function can be invoked in normal mode if the parameter values are null. This parameter can be omitted.

-   **RETURNS NULL ON NULL INPUT**

    **STRICT**

    Specifies that the function always returns null whenever any of its parameters is null. If this parameter is specified, the function is not executed when there are null parameters; instead a null result is returned automatically.

    **RETURNS NULL ON NULL INPUT**  and  **STRICT**  have the same functions.

-   **EXTERNAL**

    The keyword  **EXTERNAL**  is allowed for SQL conformance, but it is optional since, unlike in SQL, this feature applies to all functions not only external ones.

-   **SECURITY INVOKER**

    **AUTHID CURRENT\_USER**

    Specifies that the function will be executed with the permissions of the user who invokes it. This parameter can be omitted.

    **SECURITY INVOKER**  and  **AUTHID CURRENT\_USER**  have the same functions.

-   **SECURITY DEFINER**

    **AUTHID DEFINER**

    Specifies that the function will be executed with the permissions of the user who created it.

    **AUTHID DEFINER**  and  **SECURITY DEFINER**  have the same functions.

-   **COST execution\_cost**

    Estimates the execution cost of a function.

    The unit of  **execution\_cost**  is  **cpu\_operator\_cost**.

    Value range: a positive integer

-   **ROWS result\_rows**

    Estimates the number of rows returned by the function. This is only allowed when the function is declared to return a set.

    Value range: a positive number. The default value is  **1000**.

-   **configuration\_parameter**
    -   **value**

        Sets a specified database session parameter to a specified value. If the value is  **DEFAULT**  or  **RESET**, the default setting is used in the new session.  **OFF**  closes the setting.

        Value range: a string

        -   DEFAULT
        -   OFF
        -   RESET

        Specifies the default value.

    -   **from current**

        Uses the value of  **configuration\_parameter**  of the current session.


-   **plsql\_body**

    Specifies the PL/SQL stored procedure body.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >When a user is created in the function body, the plaintext password is recorded in the log. You are not advised to do it.  


## Examples<a name="en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
-- Define a function as SQL query.
postgres=# CREATE FUNCTION func_add_sql(integer, integer) RETURNS integer
    AS 'select $1 + $2;'
    LANGUAGE SQL
    IMMUTABLE
    RETURNS NULL ON NULL INPUT;

-- Add an integer by parameter name using PL/pgSQL.
postgres=# CREATE OR REPLACE FUNCTION func_increment_plsql(i integer) RETURNS integer AS $$
        BEGIN
                RETURN i + 1;
        END;
$$ LANGUAGE plpgsql;

-- Return the RECORD type.
postgres=# CREATE OR REPLACE FUNCTION func_increment_sql(i int, out result_1 bigint, out result_2 bigint)
returns SETOF RECORD
as $$
begin
    result_1 = i + 1;
    result_2 = i * 10;
return next;
end;
$$language plpgsql;

-- Return a record containing multiple output parameters.
postgres=# CREATE FUNCTION func_dup_sql(in int, out f1 int, out f2 text)
    AS $$ SELECT $1, CAST($1 AS text) || ' is text' $$
    LANGUAGE SQL;

postgres=# SELECT * FROM func_dup_sql(42);

-- Compute the sum of two integers and return the result (if the input is null, the returned result is null).
postgres=# CREATE FUNCTION func_add_sql2(num1 integer, num2 integer) RETURN integer
AS
BEGIN 
RETURN num1 + num2;
END;
/
-- Alter the execution rule of function func_add_sql2 to IMMUTABLE (that is, the same result is returned if the parameter remains unchanged).
postgres=# ALTER FUNCTION func_add_sql2(INTEGER, INTEGER) IMMUTABLE;

-- Alter the name of function func_add_sql2 to add_two_number.
postgres=# ALTER FUNCTION func_add_sql2(INTEGER, INTEGER) RENAME TO add_two_number;

-- Change the owner of function add_two_number to omm.
postgres=# ALTER FUNCTION add_two_number(INTEGER, INTEGER) OWNER TO omm;

-- Delete the function.
postgres=# DROP FUNCTION add_two_number;
postgres=# DROP FUNCTION func_increment_sql;
postgres=# DROP FUNCTION func_dup_sql;
postgres=# DROP FUNCTION func_increment_plsql;
postgres=# DROP FUNCTION func_add_sql;
```

## Helpful Links<a name="en-us_topic_0237122104_en-us_topic_0059778837_sfbe47252e2d24b638c428f7160f181ec"></a>

[ALTER FUNCTION](alter-function.md)  and  [DROP FUNCTION](drop-function.md)

