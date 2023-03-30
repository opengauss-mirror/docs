# ALTER FUNCTION<a name="EN-US_TOPIC_0289900507"></a>

## Function<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

**ALTER FUNCTION**  modifies the attributes of a customized function.

## Precautions<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

Only the function owner or a user granted with the ALTER permission can run the  **ALTER FUNCTION**  command. The system administrator has this permission by default. The following is permission constraints depending on attributes to be modified:

-   If a function involves operations on temporary tables,  **ALTER FUNCTION**  cannot be used.
-   To modify the owner or schema of a function, you must be a function owner or system administrator and a member of the new owner role.
-   Only the system administrator and initial user can change the schema of a function to  **public**.

## Syntax<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa4d6f7fca3774a5e9f488937b289bea3"></a>

-   Modify the additional parameters of the customized function.

    ```
    ALTER FUNCTION function_name ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        action [ ... ] [ RESTRICT ];
    ```

    The syntax of the  **action**  clause is as follows:

    ```
    {CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT}
     | {IMMUTABLE | STABLE | VOLATILE}
     | {SHIPPABLE | NOT SHIPPABLE}
     | {NOT FENCED | FENCED}
     | [ NOT ] LEAKPROOF
     | { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }
     | AUTHID { DEFINER | CURRENT_USER }
     | COST execution_cost
     | ROWS result_rows
     | SET configuration_parameter { { TO | = } { value | DEFAULT }| FROM CURRENT}
     | RESET {configuration_parameter | ALL}
     | COMMENT 'text'
    ```

-   Rename the customized function.

    ```
    ALTER FUNCTION funname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        RENAME TO new_name;
    ```

-   Change the owner of the customized function.

    ```
    ALTER FUNCTION funname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        OWNER TO new_owner;
    ```

-   Modify the schema of the customized function.

    ```
    ALTER FUNCTION funname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        SET SCHEMA new_schema;
    ```


## Parameter Description<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_s72f8af90c9784dc9a16e58974d73a31a"></a>

-   **function\_name**

    Specifies the name of the function to be modified.

    Value range: an existing function name

-   **argmode**

    Specifies whether a parameter is an input or output parameter.

    Value range:  **IN**,  **OUT**,  **INOUT**, and  **VARIADIC**

-   **argname**

    Parameter name.

    Value range: a string. It must comply with the naming convention.

-   **argtype**

    Specifies the data type of a function parameter.

-   **CALLED ON NULL INPUT**

    Declares that some parameters of the function can be invoked in normal mode if the parameter values are null. Omitting this parameter is the same as specifying it.

-   **RETURNS NULL ON NULL INPUT**

    **STRICT**

    Specifies that the function always returns null whenever any of its parameters is null. If  **STRICT**  is specified, the function will not be executed when there are null parameters; instead a null result is assumed automatically.

    **RETURNS NULL ON NULL INPUT**  and  **STRICT**  have the same functions.

-   **IMMUTABLE**

    Specifies that the function always returns the same result if the parameter values are the same.

-   **STABLE**

    Specifies that the function cannot modify the database, and that within a single table scan it will consistently return the same result for the same parameter value, but its result varies by SQL statements.

-   **VOLATILE**

    Specifies that the function value can change in a single table scan and no optimization is performed.

-   **LEAKPROOF**

    Specifies that the function has no side effect and the parameter contains only the return value.  **LEAKPROOF**  can be set only by the system administrator.

-   **EXTERNAL**

    \(Optional\) The purpose is to be compatible with SQL. This feature applies to all functions, not only external functions.

-   **SECURITY INVOKER**

    **AUTHID CURRENT\_USER**

    Specifies that the function will be executed with the permissions of the user who invokes it. Omitting this parameter is the same as specifying it.

    **SECURITY INVOKER**  and  **AUTHID CURRENT\_USER**  have the same functions.

-   **SECURITY DEFINER**

    **AUTHID DEFINER**

    Specifies that the function will be executed with the permissions of the user who created it.

    **AUTHID DEFINER**  and  **SECURITY DEFINER**  have the same function.

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


-   **new\_name**

    Specifies the new name of a function. To change the schema of a function, you must have the  **CREATE**  permission on the new schema.

    Value range: a string. It must comply with the naming convention.

-   **new\_owner**

    Specifies the new owner of a function. To change the owner of a function, the new owner must have the  **CREATE**  permission on the schema to which the function belongs.

    Value range: an existing user role

-   **new\_schema**

    Specifies the new schema of a function.

    Value range: an existing schema

-   **COMMENT 'text'**

    Comment a function object.

## Examples<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

See  [Examples](create-function.md#en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821)  in  **CREATE FUNCTION**.

## Helpful Links<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[CREATE FUNCTION](create-function.md)  and  [DROP FUNCTION](drop-function.md)
