# CALL<a name="EN-US_TOPIC_0289900888"></a>

## Function<a name="en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_s17e49a7670334c61978f059adf2cb65d"></a>

**CALL**  calls defined functions and stored procedures.

## Precautions<a name="en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_sdf7f29bdebc44178a9581f41f4257f09"></a>

The owner of a function or stored procedure, users granted with the  **EXECUTE**  permission on the function or stored procedure, or users granted with the  **EXECUTE ANY FUNCTION**  permission can call the function or stored procedure. The system administrator has the permission to call the function or stored procedure by default.

## Syntax<a name="en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_sdf8eb47ae3d945fea7582a7753cdd985"></a>

```
CALL [schema.|package.] {func_name| procedure_name} ( param_expr );
```

## Parameter Description<a name="en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_sf183d9684eb54414b8f5c370a1c7038b"></a>

-   **schema**

    Specifies the name of the schema where a function or stored procedure is located.

-   package

    Specifies the name of the package where a function or stored procedure is located.

-   **func\_name**

    Specifies the name of the function or stored procedure to be called.

    Value range: an existing function name.

-   **param\_expr**

    Specifies a list of parameters. Use := or =\> to separate a parameter name and its value. This method allows parameters to be placed in any order. If only parameter values are in the list, the value order must be the same as that defined in the function or stored procedure.

    Value range: an existing function parameter name or stored procedure parameter name.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >The parameters include input parameters \(whose name and type are separated by IN\) and output parameters \(whose name and type are separated by OUT\). When you run the  **CALL**  statement to call a function or stored procedure, the parameter list must contain an output parameter for non-overloaded functions. You can set the output parameter to a variable or any constant. For details, see  [Examples](#en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_s299dc001fa4b48cd9b56412a73db23c0). For an overloaded package function, the parameter list can have no output parameter, but the function may not be found. If an output parameter is contained, it must be a constant.


## Examples<a name="en-us_topic_0283137636_en-us_topic_0237122088_en-us_topic_0059778236_s299dc001fa4b48cd9b56412a73db23c0"></a>

```
-- Create the func_add_sql function, calculate the sum of two integers, and return the result.
openGauss=# CREATE FUNCTION func_add_sql(num1 integer, num2 integer) RETURN integer
AS
BEGIN
RETURN num1 + num2;
END;
/

-- Transfer by parameter value.
openGauss=# CALL func_add_sql(1, 3);

-- Transfer by naming tag method.
openGauss=# CALL func_add_sql(num1 => 1,num2 => 3);
openGauss=# CALL func_add_sql(num2 := 2, num1 := 3);

-- Delete the function.
openGauss=# DROP FUNCTION func_add_sql;

-- Create a function with output parameters.
openGauss=# CREATE FUNCTION func_increment_sql(num1 IN integer, num2 IN integer, res OUT integer)
RETURN integer
AS
BEGIN
res := num1 + num2;
END;
/

-- Set output parameters to constants.
openGauss=# CALL func_increment_sql(1,2,1);

-- Delete the function.
openGauss=# DROP FUNCTION func_increment_sql;
```

