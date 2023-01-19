# CREATE FUNCTION<a name="ZH-CN_TOPIC_0289900779"></a>

## 功能描述<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sd4b3500e6b35475aa19a15933fec5720"></a>

创建一个函数。

## 注意事项<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_s4e29e167452e4cfda9adebadc939e3fd"></a>

-   如果创建函数时参数或返回值带有精度，不进行精度检测。
-   创建函数时，函数定义中对表对象的操作建议都显式指定模式，否则可能会导致函数执行异常。
-   在创建函数时，函数内部通过SET语句设置current\_schema和search\_path无效。执行完函数search\_path和current\_schema与执行函数前的search\_path和current\_schema保持一致。
-   如果函数参数中带有出参，SELECT调用函数必须缺省出参，CALL调用函数必须指定出参，对于调用重载的带有PACKAGE属性的函数，CALL调用函数可以缺省出参，具体信息参见[CALL](CALL.md)的示例。
-   兼容Postgresql风格的函数或者带有PACKAGE属性的函数支持重载。在指定REPLACE的时候，如果参数个数、类型、返回值有变化，不会替换原有函数，而是会建立新的函数。
-   不能创建仅形参名字不同（函数名和参数列表类型都一样）的重载函数。 
-   不能创建与存储过程拥有相同名称和参数列表的函数。
-   在函数内部使用未声明的变量，函数被调用时会报错。
-   SELECT调用可以指定不同参数来进行同名函数调用。由于语法不支持调用不带有PACKAGE属性的同名函数。
-   在创建function时，不能在avg函数外面嵌套其他agg函数或者其他系统函数。
-   新创建的函数默认会给PUBLIC授予执行权限（详见[GRANT](GRANT.md)）。用户可以选择收回PUBLIC默认执行权限，然后根据需要将执行权限授予其他用户，为了避免出现新函数能被所有人访问的时间窗口，应在一个事务中创建函数并且设置函数执行权限。
-   在函数内部调用其它无参数的函数时，可以省略括号，直接使用函数名进行调用。
-   兼容Oracle风格的函数支持参数注释的查看与导出、导入。
-   兼容Oracle风格的函数支持介于IS/AS与plsql\_body之间的注释的查看与导出、导入。
-   不可与同一模式下已存在的synonym产生命名冲突。

## 语法格式<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_s7109c8eddfba4ea0b3cc85d39d0ab774"></a>

- 兼容PostgreSQL风格的创建自定义函数语法。

  ```
  CREATE [ OR REPLACE  ] FUNCTION function_name
      ( [  { argname [ argmode  ] argtype [  { DEFAULT  | :=  | =  } expression  ]
  }  [, ...]  ] )
      [ RETURNS rettype [ DETERMINISTIC  ]
          | RETURNS TABLE (  { column_name column_type  }  [, ...] )]
      LANGUAGE lang_name
      [
          {IMMUTABLE  | STABLE  | VOLATILE}
          | {SHIPPABLE | NOT SHIPPABLE}
          | [ NOT  ] LEAKPROOF
          | WINDOW
          | {CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT}
          | {[ EXTERNAL  ] SECURITY INVOKER  | [ EXTERNAL  ] SECURITY DEFINER | AU
  THID DEFINER  | AUTHID CURRENT_USER}
          | {FENCED | NOT FENCED}
          | {PACKAGE}
          | COST execution_cost
          | ROWS result_rows
          | SET configuration_parameter { {TO | =} value | FROM CURRENT }
          | COMMENT 'text' 
      ] [...]
      {
          AS 'definition'
          | AS 'obj_file', 'link_symbol'
      }
  
  ```

-   O风格的创建自定义函数的语法。

    ```
    CREATE [ OR REPLACE  ] FUNCTION function_name
        ( [  { argname [ argmode  ] argtype [  { DEFAULT | := | =  } expression  ] }
      [, ...]  ] )
        RETURN rettype [ DETERMINISTIC  ]
        [
            {IMMUTABLE  | STABLE  | VOLATILE }
            | {SHIPPABLE | NOT SHIPPABLE}
            | {PACKAGE}
            | [ NOT  ] LEAKPROOF
            | {CALLED ON NULL INPUT  | RETURNS NULL ON NULL INPUT  | STRICT }
            | {[ EXTERNAL  ] SECURITY INVOKER  | [ EXTERNAL  ] SECURITY DEFINER | |
    AUTHID DEFINER  | AUTHID CURRENT_USER}
            | COST execution_cost
            | ROWS result_rows
            | SET configuration_parameter { {TO | =} value | FROM CURRENT }
            | COMMENT 'text' 
         ][...]
         {
            IS | AS
         } plsql_body
    /
    ```


## 参数说明<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sd944ea321dde4635bf07b637385f13f9"></a>

-   **function\_name**

    要创建的函数名称（可以用模式修饰）。

    取值范围：字符串，要符合标识符的命名规范。且最多为63个字符。若超过63个字符，数据库会截断并保留前63个字符当做函数名称。

-   **argname**

    函数参数的名称。

    取值范围：字符串，要符合标识符的命名规范。且最多为63个字符。若超过63个字符，数据库会截断并保留前63个字符当做函数参数名称。

-   **argmode**

    函数参数的模式。

    取值范围：IN、OUT、INOUT或VARIADIC。缺省值是IN。并且OUT和INOUT模式的参数不能用在RETURNS TABLE的函数定义中。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >VARIADIC用于声明数组类型的参数。

-   **argtype**

    函数参数的类型。可以使用%TYPE或%ROWTYPE间接引用变量或表的类型，详细可参考存储过程章节[定义变量](定义变量.md)。

-   **expression**

    参数的默认表达式。

-   **rettype**

    函数返回值的数据类型。

    如果存在OUT或INOUT参数，可以省略RETURNS子句。如果存在，该子句必须和输出参数所表示的结果类型一致：如果有多个输出参数，则为RECORD，否则与单个输出参数的类型相同。

    SETOF修饰词表示该函数将返回一个集合，而不是单独一项。

    与argtype相同，同样可以使用%TYPE或%ROWTYPE间接引用类型。

-   **column\_name**

    字段名称。

-   **column\_type**

    字段类型。

-   **definition**

    一个定义函数的字符串常量，含义取决于语言。它可以是一个内部函数名称、一个指向某个目标文件的路径、一个SQL查询、一个过程语言文本。

-   **DETERMINISTIC**

    SQL语法兼容接口，未实现功能，不推荐使用。

-   **LANGUAGE lang\_name**

    用以实现函数的语言的名称。可以是SQL、internal或者是用户定义的过程语言名称。为了保证向下兼容，该名称可以用单引号（包围）。若采用单引号，则引号内必须为小写。

-   **WINDOW**

    表示该函数是窗口函数。替换函数定义时不能改变WINDOW属性。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >自定义窗口函数只支持LANGUAGE是internal，并且引用的内部函数必须是窗口函数。

-   **IMMUTABLE**

    表示该函数在给出同样的参数值时总是返回同样的结果。

-   **STABLE**

    表示该函数不能修改数据库，对相同参数值，在同一次表扫描里，该函数的返回值不变，但是返回值可能在不同SQL语句之间变化。

-   **VOLATILE**

    表示该函数值可以在一次表扫描内改变，因此不会做任何优化。

-   **SHIPPABLE**|**NOT SHIPPABLE**

    表示该函数是否可以下推执行。预留接口，不推荐使用。

-   **FENCED**|**NOT FENCED**

    声明用户定义的C函数是在保护模式还是非保护模式下执行。预留接口，不推荐使用。

-   **PACKAGE**

    表示该函数是否支持重载。PostgreSQL风格的函数本身就支持重载，此参数主要是针对其它风格的函数。

    -   不允许package函数和非package函数重载或者替换。
    -   package函数不支持VARIADIC类型的参数。
    -   不允许修改函数的package属性。

-   **LEAKPROOF**

    指出该函数的参数只包括返回值。LEAKPROOF只能由系统管理员设置。

-   **CALLED ON NULL INPUT**

    表明该函数的某些参数是NULL的时候可以按照正常的方式调用。该参数可以省略。

-   **RETURNS NULL ON NULL INPUT**

    **STRICT**

    STRICT用于指定如果函数的某个参数是NULL，此函数总是返回NULL。如果声明了这个参数，当有NULL值参数时该函数不会被执行；而只是自动返回一个NULL结果。

    RETURNS NULL ON NULL INPUT和STRICT的功能相同。

-   **EXTERNAL**

    目的是和SQL兼容，是可选的，这个特性适合于所有函数，而不仅是外部函数。

-   **SECURITY INVOKER**

    **AUTHID CURRENT\_USER**

    表明该函数将带着调用它的用户的权限执行。该参数可以省略。

    SECURITY INVOKER和AUTHID CURRENT\_USER的功能相同。

-   **SECURITY DEFINER**

    **AUTHID DEFINER**

    声明该函数将以创建它的用户的权限执行。

    AUTHID DEFINER和SECURITY DEFINER的功能相同。

-   **COST execution\_cost**

    用来估计函数的执行成本。

    execution\_cost以cpu\_operator\_cost为单位。

    取值范围：正数

-   **ROWS result\_rows**

    估计函数返回的行数。用于函数返回的是一个集合。

    取值范围：正数，默认值是1000行。

-   **COMMENT 'text'**

    函数注释。

-   **configuration\_parameter**
    -   **value**

        把指定的数据库会话参数值设置为给定的值。如果value是DEFAULT或者RESET，则在新的会话中使用系统的缺省设置。OFF关闭设置。

        取值范围：字符串

        -   DEFAULT
        -   OFF
        -   RESET

        指定默认值。

    -   **from current**

        取当前会话中的值设置为configuration\_parameter的值。


-   **plsql\_body**

    PL/SQL存储过程体。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >当在函数体中创建用户时，日志中会记录密码的明文。因此不建议用户在函数体中创建用户。


## 示例<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
--定义函数为SQL查询。
openGauss=# CREATE FUNCTION func_add_sql(integer, integer) RETURNS integer
    AS 'select $1 + $2;'
    LANGUAGE SQL
    IMMUTABLE
    RETURNS NULL ON NULL INPUT;

--利用参数名用 PL/pgSQL 自增一个整数。
openGauss=# CREATE OR REPLACE FUNCTION func_increment_plsql(i integer) RETURNS integer AS $$
        BEGIN
                RETURN i + 1;
        END;
$$ LANGUAGE plpgsql;

--返回RECORD类型
openGauss=# CREATE OR REPLACE FUNCTION func_increment_sql(i int, out result_1 bigint, out result_2 bigint)
returns SETOF RECORD
as $$
begin
    result_1 = i + 1;
    result_2 = i * 10;
return next;
end;
$$language plpgsql;

--返回一个包含多个输出参数的记录。
openGauss=# CREATE FUNCTION func_dup_sql(in int, out f1 int, out f2 text)
    AS $$ SELECT $1, CAST($1 AS text) || ' is text' $$
    LANGUAGE SQL;

openGauss=# SELECT * FROM func_dup_sql(42);

--计算两个整数的和，并返回结果。如果输入为null，则返回null。
openGauss=# CREATE FUNCTION func_add_sql2(num1 integer, num2 integer) RETURN integer
AS
BEGIN 
RETURN num1 + num2;
END;
/
--修改函数func_add_sql2的执行规则为IMMUTABLE，即参数不变时返回相同结果。
openGauss=# ALTER FUNCTION func_add_sql2(INTEGER, INTEGER) IMMUTABLE;

--将函数func_add_sql2的名称修改为add_two_number。
openGauss=# ALTER FUNCTION func_add_sql2(INTEGER, INTEGER) RENAME TO add_two_number;

--将函数add_two_number的属者改为omm。
openGauss=# ALTER FUNCTION add_two_number(INTEGER, INTEGER) OWNER TO omm;

--删除函数。
openGauss=# DROP FUNCTION add_two_number;
openGauss=# DROP FUNCTION func_increment_sql;
openGauss=# DROP FUNCTION func_dup_sql;
openGauss=# DROP FUNCTION func_increment_plsql;
openGauss=# DROP FUNCTION func_add_sql;
```

## 相关链接<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sfbe47252e2d24b638c428f7160f181ec"></a>

[ALTER FUNCTION](ALTER-FUNCTION.md)，[DROP FUNCTION](DROP-FUNCTION.md)

