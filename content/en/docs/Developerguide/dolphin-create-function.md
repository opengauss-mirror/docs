# CREATE FUNCTION

## Function <a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_sd4b3500e6b35475aa19a15933fec5720"></a>

Creates a function.

## Precautions <a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_s4e29e167452e4cfda9adebadc939e3fd"></a>

Compared with the original openGauss, Dolphin modifies the CREATE FUNCTION syntax as follows:

1. The default value **plpgsql** of LANGUAGE is added.

2. The syntax compatibility item [NOT] DETERMINISTIC is added.

3. The syntax compatibility item { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } is added.

4. The syntax compatibility item SQL SECURITY { DEFINER | INVOKER } is added.

## Syntax <a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_s7109c8eddfba4ea0b3cc85d39d0ab774"></a>

After Dolphin is loaded, the format of the CREATE FUNCTION syntax is:

- Syntax (compatible with PostgreSQL) for creating a user-defined function:

  ```
  CREATE [ OR REPLACE  ] FUNCTION function_name
      ( [  { argname [ argmode  ] argtype [  { DEFAULT  | :=  | =  } expression  ]
  }  [, ...]  ] )
      [ RETURNS rettype
          | RETURNS TABLE (  { column_name column_type  }  [, ...] )]
      [
          {IMMUTABLE  | STABLE  | VOLATILE}
          | {SHIPPABLE | NOT SHIPPABLE}
          | [ NOT  ] LEAKPROOF
          | WINDOW
          | {CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT}
          | {[ EXTERNAL| SQL  ] SECURITY INVOKER  | [ EXTERNAL| SQL  ] SECURITY DEFINER | AU
  THID DEFINER  | AUTHID CURRENT_USER}
          | {FENCED | NOT FENCED}
          | {PACKAGE}
          | COST execution_cost
          | ROWS result_rows
          | SET configuration_parameter { {TO | =} value | FROM CURRENT }
          | COMMENT 'text'
          | {DETERMINISTIC | NOT DETERMINISTIC}
          | LANGUAGE lang_name
          | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
      ] [...]
      {
          AS 'definition'
          | AS 'obj_file', 'link_symbol'
      }

-   O syntax of creating a customized function:

    ```
    CREATE [ OR REPLACE  ] FUNCTION function_name
        ( [  { argname [ argmode  ] argtype [  { DEFAULT | := | =  } expression  ] }
      [, ...]  ] )
        RETURN rettype 
        [
            {IMMUTABLE  | STABLE  | VOLATILE }
            | {SHIPPABLE | NOT SHIPPABLE}
            | {PACKAGE}
            | [ NOT  ] LEAKPROOF
            | {CALLED ON NULL INPUT  | RETURNS NULL ON NULL INPUT  | STRICT }
            | {[ EXTERNAL| SQL  ] SECURITY INVOKER  | [ EXTERNAL| SQL  ] SECURITY DEFINER | |
    AUTHID DEFINER  | AUTHID CURRENT_USER}
            | COST execution_cost
            | ROWS result_rows
            | SET configuration_parameter { {TO | =} value | FROM CURRENT }
            | COMMENT 'text'
            | {DETERMINISTIC | NOT DETERMINISTIC}
            | LANGUAGE lang_name
            | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
         ][...]
         {
            IS | AS
         } plsql_body
    /

## Parameter Description<a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_sd944ea321dde4635bf07b637385f13f9"></a>

-   **LANGUAGE  lang_name**

    Specifies the name of the language that is used to implement the function. PostgreSQL function default value: **sql**. O-style default value: **plpgsql**.

- **SQL SECURITY INVOKER**

   Indicates that the function is to be executed with the permissions of the user that calls it. This parameter can be omitted.
   
   The functions of SQL SECURITY INVOKER and SECURITY INVOKER and AUTHID CURRENT\_USER are the same.

- **SQL SECURITY DEFINER**

  Specifies that the function is to be executed with the privileges of the user that created it.

  The functions of SQL SECURITY DEFINER and AUTHID DEFINER and SECURITY DEFINER are the same.

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  Syntax compatibility item.

## Examples <a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
--Specify CONTAINS SQL.
openGauss=# CREATE FUNCTION func_test (s CHAR(20)) RETURNS int  
CONTAINS SQL AS $$ select 1 $$ ;

--Specify DETERMINISTIC.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
CONTAINS SQL DETERMINISTIC  AS $$ select s; $$ ;

--Specify LANGUAGE SQL.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
CONTAINS SQL LANGUAGE SQL AS $$ select s; $$ ;

--Specify NO SQL.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
NO SQL AS $$ select s; $$ ;

--Specify READS SQL DATA.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
CONTAINS SQL  READS SQL DATA  AS $$ select s; $$ ;

--Specify MODIFIES SQL DATA.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
CONTAINS SQL LANGUAGE SQL NO SQL  MODIFIES SQL DATA AS $$ select s; $$ ;

--Specify SECURITY DEFINER.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
NO SQL SQL SECURITY DEFINER AS $$ select s; $$ ;

--Specify SECURITY INVOKER.
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
SQL SECURITY INVOKER  READS SQL DATA LANGUAGE SQL AS $$ select s; $$ ;
```



## Helpful Links<a name="en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_sfbe47252e2d24b638c428f7160f181ec"></a>

[CREATE FUNCTION](CREATE-FUNCTION.md)
