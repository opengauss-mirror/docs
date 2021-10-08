# CREATE PACKAGE<a name="ZH-CN_TOPIC_0000001114212452"></a>

## 功能描述<a name="section33561436135517"></a>

创建一个新的PACKAGE。

## 注意事项<a name="section9619125512555"></a>

-   由于升级的限制，在V5R2C00版本中，即使在不同的Package间，也无法创建同名同参的存储过程。
-   package只支持集中式，无法在分布式中使用。
-   在package specification中声明过的函数或者存储过程，必须在package body中找到定义。
-   在实例化中，无法调用带有commit/rollback的存储过程。
-   不能在Trigger中调用package函数。
-   不能在外部SQL中直接使用package当中的变量。
-   不允许在package外部调用package的私有变量和存储过程。
-   不支持其它存储过程不支持的用法，例如，在function中不允许调用commit/rollback，则package的function中同样无法调用commit/rollback。
-   不支持schema与package同名。
-   只支持A风格的存储过程和函数定义。
-   不支持package内有同名变量，包括包内同名参数。
-   package的全局变量为session级，不同session之间package的变量不共享。
-   package中调用自治事务的函数，不允许使用公有变量，以及递归的使用公有变量的函数。
-   package中不支持声明ref cursor类型。

## 语法格式<a name="section4157123095714"></a>

-   CREATE PACKAGE SPECIFICATION语法格式

    ```
    CREATE [ OR REPLACE ] PACKAGE [ schema ] package_name
        [ invoker_rights_clause ] { IS | AS } item_list_1 END package_name;
    
    invoker_rights_clause可以被声明为AUTHID DEFINER或者AUTHID INVOKER，分别为定义者权限和调用者权限。
    item_list_1可以为声明的变量或者存储过程以及函数。
    ```

    PACKAGE SPECIFICATION\(包规格\)声明了包内的公有变量、函数、异常等，可以被外部函数或者存储过程调用。在PACKAGE SPECIFICATION中只能声明存储过程、函数，不能定义存储过程或者函数。

-   CREATE PACKAGE BODY语法格式。

    ```
    CREATE [ OR REPLACE ] PACKAGE BODY [ schema ] package_name
        { IS | AS } declare_section [ initialize_section ] END package_name;
    ```

    PACKAGE BODY\(包体内\)定义了包的私有变量、函数等。如果变量或者函数没有在PACKAGE SPECIFICATION中声明过，那么这个变量或者函数则为私有变量或者函数。

    PACKAGE BODY也可以声明实例化部分，用来初始化package，详见示例。


## 示例<a name="section1114514478590"></a>

-   CREATE PACKAGE SPECIFICATION示例

    ```
    CREATE OR REPLACE PACKAGE emp_bonus IS
    var1 int:=1;--公有变量
    var2 int:=2;
    PROCEDURE testpro1(var3 int);--公有存储过程，可以被外部调用
    END emp_bonus;
    /
    ```

-   CREATE PACKAGE BODY示例

    ```
    drop table if exists test1;
    create or replace package body emp_bonus is
    var3 int:=3;
    var4 int:=4;
    procedure testpro1(var5 int)
    is
    begin
    create table if not exists test1(col1 int);
    insert into test1 values(var1);
    insert into test1 values(var5);
    end;
    begin  --实例化开始
    var4:=9;
    testpro1(var4);
    end emp_bonus;
    /
    ```


