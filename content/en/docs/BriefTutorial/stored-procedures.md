# Stored Procedures<a name="EN-US_TOPIC_0000001224939989"></a>

A stored procedure is a set of SQL statements that can implement a specific function. You can repeatedly call the stored procedure to reduce the number of repeated SQL statements and improve work efficiency.

## Syntax<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

-   Create a stored procedure.

    ```
    CREATE PROCEDURE procedure_name
        [ ( {[ argname ] [ argmode ] argtype [ = expression ]}[,...]) ]
        { IS | AS } 
        BRGIN
          procedure_body
        END
    /
    ```


-   Call a stored procedure.

    ```
    CALL procedure_name ( param_expr );
    ```


-   Delete a stored procedure.

    ```
    DROP PROCEDURE procedure_name ;
    ```


## Parameter Description<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

-   **procedure\_name**

    Specifies the name of the stored procedure to be created.

-   **argname**

    Specifies the parameter name.

-   **argmode**

    Specifies the mode of a parameter. Value range:  **IN**,  **OUT**,  **INOUT**, and  **VARIADIC**.  **VARIADIC**  specifies parameters of array type. The default value is  **IN**.

    -   **IN**

        Specifies an input parameter. The value of the parameter must be specified when the stored procedure is called. If the value of the parameter is changed in the stored procedure, the value cannot be returned.

    -   **OUT**

        Specifies an output parameter. The value can be changed in the stored procedure and can be returned.

    -   **INOUT**

        Specifies input and output parameters. The value can be specified when the stored procedure is called and can be changed and returned.


-   **argtype**

    Specifies the data type of the parameter.

-   **expression**

    Sets the default value.

-   **IS, AS**

    Required for the syntax. One of them must be provided. They have the same function.

-   **BRGIN, END**

    Required for the syntax.

-   **procedure\_bod**y

    Specifies the stored procedure content.

-   **param\_expr**

    Specifies the parameter list. Use commas \(,\) to separate parameters. Use := or =\> to separate parameter names and parameter values.


## Examples<a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
-- Create a table
openGauss=# CREATE TABLE graderecord  
(  
  number INTEGER,  
  name CHAR(20),  
  class CHAR(20),  
  grade INTEGER
);

-- Define a stored procedure.
openGauss=# CREATE PROCEDURE insert_data  (param1 INT = 0, param2 CHAR(20),param3 CHAR(20),param4 INT = 0 ) 
IS
 BEGIN 
 INSERT INTO graderecord VALUES(param1,param2,param3,param4);  
END;
/


-- Call the stored procedure.
openGauss=# CALL  insert_data(param1:=210101,param2:='Alan',param3:='21.01',param4:=92);

-- Delete the stored procedure.
openGauss=# DROP PROCEDURE insert_data;
```

