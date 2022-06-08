# ALTER PROCEDURE<a name="EN-US_TOPIC_0000001197866299"></a>

## Function<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

**ALTER PROCEDURE**  alters the attributes of a customized stored procedure.

## Precautions<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

Only the owner of a stored procedure or a user granted with the  **ALTER**  permission can run the  **ALTER PROCEDURE**  command. The system administrator has this permission by default. The following is permission constraints depending on attributes to be modified:

-   If a stored procedure involves operations on temporary tables,  **ALTER PROCEDURE**  cannot be used.
-   To modify the owner or schema of a stored procedure, you must be the owner of the stored procedure or system administrator and a member of the new owner role.
-   Only the system administrator and initial user can change the schema of a stored procedure to  **public**.

## Syntax<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa4d6f7fca3774a5e9f488937b289bea3"></a>

-   Modify the additional parameters of a customized stored procedure.

    ```
    ALTER PROCEDURE procedure_name ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        action [ ... ] [ RESTRICT ];
    ```

    The syntax of the  **action**  clause is as follows:

    ```
    {CALLED ON NULL INPUT  | STRICT}
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
    ```

-   Modify the name of a customized stored procedure.

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        RENAME TO new_name;
    ```

-   Modify the owner of a customized stored procedure.

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        OWNER TO new_owner;
    ```

-   Modify the schema of a customized stored procedure.

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        SET SCHEMA new_schema;
    ```


## Parameter Description<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_s72f8af90c9784dc9a16e58974d73a31a"></a>

-   **procedure\_name**

    Specifies the name of the stored procedure to be modified.

    Value range: an existing stored procedure name

-   **argmode**

    Specifies whether a parameter is an input or output parameter.

    Value range:  **IN**,  **OUT**,  **INOUT**, and  **VARIADIC**

-   **argname**

    Specifies the parameter name.

    Value range: a string. It must comply with the identifier naming convention.

-   **argtype**

    Specifies the type of the stored procedure parameter.

-   **CALLED ON NULL INPUT**

    Declares that some parameters of the stored procedure can be called in normal mode if the parameter values are null. Omitting this parameter is the same as specifying it.

-   **IMMUTABLE**

    Specifies that the stored procedure always returns the same result if the parameter values are the same.

-   **STABLE**

    Specifies that the stored procedure cannot modify the database, and that within a single table scan it will consistently return the same result for the same parameter value, but its result varies by SQL statements.

-   **VOLATILE**

    Specifies that the stored procedure value can change in a single table scan and no optimization is performed.

-   **LEAKPROOF**

    Specifies that the stored procedure has no side effect and the parameter contains only the return value.  **LEAKPROOF**  can be set only by the system administrator.

-   **EXTERNAL**

    \(Optional\) The purpose is to be compatible with SQL. This feature applies to all functions, not only external functions.

-   **SECURITY INVOKER**

    **AUTHID CURRENT\_USER**

    Specifies that the stored procedure will be executed with the permissions of the user who calls it. Omitting this parameter is the same as specifying it.

    **SECURITY INVOKER**  and  **AUTHID CURRENT\_USER**  have the same functions.

-   **SECURITY DEFINER**

    **AUTHID DEFINER**

    Specifies that the stored procedure will be executed with the permissions of the user who created it.

    **AUTHID DEFINER**  and  **SECURITY DEFINER**  have the same functions.

-   **COST execution\_cost**

    Estimates the execution cost of the stored procedure.

    The unit of  **execution\_cost**  is  **cpu\_operator\_cost**.

    Value range: a positive integer

-   **ROWS result\_rows**

    Estimates the number of rows returned by the stored procedure. This is only allowed when the stored procedure is declared to return a set.

    Value range: a positive number. The default value is  **1000**.

-   **configuration\_parameter**
    -   **value**

        Sets a specified database session parameter to a specified value. If the value is  **DEFAULT**  or  **RESET**, the default setting is used in the new session.  **OFF**  disables the setting.

        Value range: a string.

        -   DEFAULT
        -   OFF
        -   RESET

        Specifies the default value.

    -   **from current**

        Uses the value of  **configuration\_parameter**  of the current session.


-   **new\_name**

    Specifies the new name of the stored procedure. To change the schema of a stored procedure, you must have the  **CREATE**  permission on the new schema.

    Value range: a string. It must comply with the identifier naming convention.

-   **new\_owner**

    Specifies the new owner of the stored procedure. To change the owner of a stored procedure, the new owner must have the CREATE permission on the schema to which the stored procedure belongs.

    Value range: an existing user role

-   **new\_schema**

    Specifies the new schema of the stored procedure.

    Value range: an existing schema


## Examples<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

See  [Examples](create-function.md#en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821)  in  **CREATE FUNCTION**.

## Helpful Links<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[CREATE PROCEDURE](create-procedure.md)  and  [DROP PROCEDURE](drop-procedure.md)

