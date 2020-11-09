# Define Variable<a name="EN-US_TOPIC_0245374611"></a>

This section describes the declaration of variables in the PL/SQL and the scope of this variable in codes.

## Variable Declaration<a name="en-us_topic_0237122221_en-us_topic_0059777427_scd87586ffb304dfca616ff3dff504b81"></a>

For details about the variable declaration syntax, see  [Figure 1](#en-us_topic_0237122221_en-us_topic_0059777427_f6cc941e0c136457aade3860fc682cbbc).

**Figure  1**  declare\_variable::=<a name="en-us_topic_0237122221_en-us_topic_0059777427_f6cc941e0c136457aade3860fc682cbbc"></a>  
![](figures/declare_variable.png "declare_variable")

The above syntax diagram is explained as follows:

-   **variable\_name**  indicates the name of a variable.
-   **type**  indicates the type of a variable.
-   **value**  indicates the initial value of the variable. \(If the initial value is not given, NULL is taken as the initial value.\)  **value**  can also be an expression.

**Examples**

```
postgres=# DECLARE
    emp_id  INTEGER := 7788; -- Define a variable and assign a value to it.
BEGIN
    emp_id := 5*7784; -- Assign a value to the variable.
END;
/
```

In addition to the declaration of basic variable types,  **%TYPE**  and  **%ROWTYPE**  can be used to declare variables related to table columns or table structures.

**%TYPE Attribute**

**%TYPE**  declares a variable to be of the same data type as a previously declared variable \(for example, a column in a table\). For example, if you want to define a  _my\_name_  variable whose data type is the same as the data type of the  **firstname**  column in the  **employee**  table, you can define the variable as follows:

```
my_name employee.firstname%TYPE
```

In this way, you can declare  _my\_name_  without the need of knowing the data type of  **firstname**  in  **employee**, and the data type of  _my\_name_  can be automatically updated when the data type of  **firstname**  changes.

**%ROWTYPE Attribute**

**%ROWTYPE**  declares data types of a set of data. It stores a row of table data or results fetched from a cursor. For example, if you want to define a set of data with the same column names and column data types as the  **employee**  table, you can define the data as follows:

```
my_employee employee%ROWTYPE
```

## Scope of a Variable<a name="en-us_topic_0237122221_en-us_topic_0059777427_s22f3ff2c9c4344a99fd2a028a86620bf"></a>

The scope of a variable indicates the accessibility and availability of the variable in code block. In other words, a variable takes effect only within its scope.

-   To define a function scope, a variable must declare and create a  **BEGIN-END**  block in the declaration section. The necessity of such declaration is also determined by block structure, which requires that a variable has different scopes and lifetime during a process.
-   A variable can be defined multiple times in different scopes, and inner definition can cover outer one.
-   A variable defined in an outer block can also be used in a nested block. However, the outer block cannot access variables in the nested block.

