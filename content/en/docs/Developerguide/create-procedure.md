# CREATE PROCEDURE<a name="EN-US_TOPIC_0289900087"></a>

## Function<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_s824c141a39964bd39575295aebb98d67"></a>

**CREATE PROCEDURE**  creates a stored procedure.

## Precautions<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_s8e31b13bfac744069adb47a99f52d6fe"></a>

-   If the parameters or return values of a stored procedure have precision, the precision is not checked.
-   When creating a stored procedure, you are advised to explicitly specify the schemas of all operations on table objects in the stored procedure definition. Otherwise, the stored procedure may fail to be executed.
-   **current\_schema**  and  **search\_path**  specified by  **SET**  during stored procedure creation are invalid.  **search\_path**  and  **current\_schema**  before and after function execution should be the same.
-   If a stored procedure has output parameters, the  **SELECT**  statement uses the default values of the output parameters when calling the procedure. When the  **CALL**  statement calls the stored procedure or a non-overloaded function, output parameters must be specified. When the  **CALL**  statement calls an overloaded  **PACKAGE**  function, it can use the default values of the output parameters. For details, see examples in  [CALL](call.md).
-   A stored procedure with the  **PACKAGE**  attribute can use overloaded functions.
-   You cannot create overloaded functions with different formal parameter names (the function name and parameter list type are the same).
-   You cannot create a function that has the same name and parameter list as a stored procedure.
-   If an undeclared variable is used in a function, an error is reported when the function is invoked.
-   When you create a procedure, you cannot insert aggregate functions or other functions out of the average function.
-   When stored procedures without parameters are called in another stored procedure, you can omit brackets and call stored procedures using their names directly.
-   When functions with output parameters are called in a stored procedure which is an assignment expression, you can omit the output parameters of the called functions.
-   The stored procedure supports viewing, exporting, and importing parameter comments.
-   The stored procedure supports viewing, exporting, and importing parameter comments between IS/AS and plsql\_body.
-   The default permission on a stored procedure is  **SECURITY INVOKER**. If you want to change the default permission to  **SECURITY DEFINER**, you need to set the GUC parameter  **behavior\_compat\_options**  to  **'plsql\_security\_definer'**. For details about the S**ECURITY DEFINER**  permission, see section "Permission Control" in  *Security Hardening Guide*.
-   Users granted with the  **CREATE ANY FUNCTION**  permission can create or replace stored procedures in the user schemas.
-   **out/inout**  must be set to a variable but not a constant.
-   In a centralized environment, if you want to call a stored procedure with the same in parameters but different out parameters, you need to set the GUC parameter  **behavior\_compat\_options**  to  **'proc\_outparam\_override'**. After the parameter is enabled, you must add the out parameters no matter whether you use the SELECT or CALL statement to call the stored procedure. After the parameter is enabled, you cannot use  **perform**  to call a stored procedure or function.

## Syntax<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    [ ( {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...]) ]
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
    ][ ... ]
 { IS | AS } 
plsql_body 
/
```

## Parameter Description<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

-   **OR REPLACE**

    Replaces the original definition when two stored procedures are with the same name.

-   **procedure\_name**

    Specifies the name of the stored procedure that is created \(optionally with schema names\).

    Value range: a string. It must comply with the identifier naming convention.

-   **argmode**

    Specifies the mode of an argument.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >**VARIADIC**  specifies parameters of the array type.

    Value range:  **IN**,  **OUT**,  **INOUT**, and  **VARIADIC**. The default value is  **IN**. Only the parameters in  **OUT**  mode can follow the  **VARIADIC**  parameter.

-   **argname**

    Specifies the argument name.

    Value range: a string. It must comply with the identifier naming convention.

-   **argtype**

    Specifies the type of an argument.  **%TYPE**  or  **%ROWTYPE**  can be used to indirectly reference a variable or table type. For details, see  [Variable Definition Statements](en-us_topic_0289900208.md).

    Value range: a valid data type

-   **configuration\_parameter**
    -   **value**

        Sets the specified configuration parameter to a specified value. If the  **value**  is  **DEFAULT**, the default setting is used in the new session.  **OFF**  disables the setting.

        Value range: a string

        -   DEFAULT
        -   OFF
        -   Specified default value

    -   **from current**

        Uses the value of  **configuration\_parameter**  of the current session.


-   **IMMUTABLE, STABLE,**...

    Specifies a constraint. The function of each parameter is similar to that of  **CREATE FUNCTION**. For details, see  [CREATE FUNCTION](create-function.md).

-   **COMMENT text**

    Comments a stored procedure.   

-   **plsql\_body**

    Specifies the PL/SQL stored procedure body.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >When you create a user, or perform other operations requiring password input in a stored procedure, the system catalog and CSV log record the password in plaintext. Therefore, you are advised not to perform such operations in the stored procedure.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>No specific order is applied to  **argname**  and  **argname**. The following order is advised:  **argname**,  **argmode**, and  **argtype**.

## Helpful Links<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sfe39b39f278f4933914a438f40c63954"></a>

[DROP PROCEDURE](drop-procedure.md)

## Suggestions<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_section60380346161036"></a>

-   analyse | analyze
    -   Do not run  **ANALYZE**  in a transaction or anonymous block.
    -   Do not run  **ANALYZE**  in a function or stored procedure.
