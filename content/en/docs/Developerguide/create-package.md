# CREATE PACKAGE<a name="EN-US_TOPIC_0000001114212452"></a>

## Function<a name="section33561436135517"></a>

**CREATE PACKAGE**  creates a package.

## Precautions<a name="section9619125512555"></a>

-   The package can be used only in centralized databases and cannot be used in distributed databases.
-   The functions or stored procedures declared in the package specification must be defined in the package body.
-   During instantiation, the stored procedure with  **commit**  or  **rollback**  cannot be invoked.
-   Package functions cannot be invoked in triggers.
-   Variables in a package cannot be directly used in external SQL statements.
-   Private variables and stored procedures in a package cannot be invoked outside the package.
-   Usage that other stored procedures do not support are not supported. For example, if  **commit**  or  **rollback**  cannot be invoked in a function,  **commit**  or  **rollback**  cannot be invoked in the function of a package.
-   The name of a schema cannot be the same as that of a package.
-   Only A-version stored procedures and function definitions are supported.
-   Variables with the same name in a package, including parameters with the same name in a package, are not supported.
-   The global variables in a package are at the session level. The variables in packages cannot be shared in different sessions.
-   When a function of an autonomous transaction is called in a package, the cursor variables in the package and recursive functions that use the cursor variables in the package are not allowed.
-   The package does not declare the ref cursor variables.
-   The default permission on a package is  **SECURITY INVOKER**. To change the default permission to  **SECURITY DEFINER**, set the GUC parameter  **behavior\_compat\_options**  to  **'plsql\_security\_definer'**.
-   A user granted with the  **CREATE ANY PACKAGE**  permission can create packages in the public and user schemas.
-   If the name of a package to be created contains special characters, the special characters cannot contain spaces. You are advised to set the GUC parameter  **behavior\_compat\_options**  to  **"skip\_insert\_gs\_source"**. Otherwise, an error may occur.

## Syntax<a name="section4157123095714"></a>

-   **CREATE PACKAGE SPECIFICATION**

    ```
    CREATE [ OR REPLACE ] PACKAGE [ schema ] package_name
        [ invoker_rights_clause ] { IS | AS } item_list_1 END package_name;
    
    invoker_rights_clause can be declared as AUTHID DEFINER or AUTHID INVOKER, which indicate the definer permission and invoker permission, respectively.
    item_list_1 can be a declared variable, stored procedure, or function.
    ```

    The package specification declares public variables, functions, and exceptions in a package, which can be invoked by external functions or stored procedures. It can only declare stored procedures and functions but cannot define them.

-   **CREATE PACKAGE BODY**

    ```
    CREATE [ OR REPLACE ] PACKAGE BODY [ schema ] package_name
        { IS | AS } declare_section [ initialize_section ] END package_name;
    ```

    The package body defines private variables and functions in a package. If a variable or function is not declared by the package specification, it is a private variable or function.

    The package body also has an initialization part to initialize the package. For details, see the example.


## Examples<a name="section1114514478590"></a>

-   **CREATE PACKAGE SPECIFICATION**

    ```
    CREATE OR REPLACE PACKAGE emp_bonus IS
    var1 int:=1;-- Public variable
    var2 int:=2;
    PROCEDURE testpro1(var3 int);-- Public stored procedure, which can be called by external systems.
    END emp_bonus;
    /
    ```

-   **CREATE PACKAGE BODY**

    ```
    drop table if exists test1;
    create or replace package body emp_bonus is
    var3 int:=3;
    var4 int:=4;
    procedure testpro1(var3 int)
    is
    begin
    create table if not exists test1(col1 int);
    insert into test1 values(var1);
    insert into test1 values(var5);
    end;
    begin: --The instantiation starts.
    var4:=9;
    testpro1(var4);
    end emp_bonus;
    /
    ```

-   Example of  **ALTER PACKAGE OWNER**

    ```
    ALTER PACKAGE emp_bonus OWNER TO omm;
    -- Change the owner of PACKAGE emp_bonus to omm.
    ```


