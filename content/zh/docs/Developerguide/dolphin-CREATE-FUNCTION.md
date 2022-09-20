# CREATE FUNCTION<a name="ZH-CN_TOPIC_0289900779"></a>

## 功能描述<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sd4b3500e6b35475aa19a15933fec5720"></a>

创建一个函数。

## 注意事项<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_s4e29e167452e4cfda9adebadc939e3fd"></a>

相比于原始的openGauss，dolphin对于CREATE FUNCTION语法的修改为：

1. 增加 LANGUAGE 默认值 plpgsql。

2. 增加语法兼容项 [NOT] DETERMINISTIC。

3. 增加语法兼容项 { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } 。

4. 增加语法兼容项 SQL SECURITY { DEFINER | INVOKER }。

## 语法格式<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_s7109c8eddfba4ea0b3cc85d39d0ab774"></a>

dolphin加载后，CREATE FUNCTION 语法的格式为

- 兼容PostgreSQL风格的创建自定义函数语法。

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

-   O风格的创建自定义函数的语法。

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

## 参数说明<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sd944ea321dde4635bf07b637385f13f9"></a>

-   **LANGUAGE  lang_name**

    用以实现函数的语言的名称。PostgreSQL风格函数默认值 sql O风格默认值 plpgsql。

- **SQL SECURITY INVOKER**

   表明该函数将带着调用它的用户的权限执行。该参数可以省略。
   
   SQL SECURITY INVOKER和SECURITY INVOKER和AUTHID CURRENT\_USER的功能相同。

- **SQL SECURITY DEFINER**

  声明该函数将以创建它的用户的权限执行。

  SQL SECURITY DEFINER和AUTHID DEFINER和SECURITY DEFINER的功能相同。

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  语法兼容项。

## 示例<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
--指定 CONTAINS SQL
openGauss=# CREATE FUNCTION func_test (s CHAR(20)) RETURNS int  
CONTAINS SQL AS $$ select 1 $$ ;

--指定 DETERMINISTIC
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
CONTAINS SQL DETERMINISTIC  AS $$ select s; $$ ;

--指定 LANGUAGE SQL
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
CONTAINS SQL LANGUAGE SQL AS $$ select s; $$ ;

--指定 NO SQL
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
NO SQL AS $$ select s; $$ ;

--指定  READS SQL DATA
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
CONTAINS SQL  READS SQL DATA  AS $$ select s; $$ ;

--指定 MODIFIES SQL DATA
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
CONTAINS SQL LANGUAGE SQL NO SQL  MODIFIES SQL DATA AS $$ select s; $$ ;

--指定 SECURITY DEFINER
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int 
NO SQL SQL SECURITY DEFINER AS $$ select s; $$ ;

--指定 SECURITY INVOKER
openGauss=# CREATE FUNCTION func_test (s int) RETURNS int  
SQL SECURITY INVOKER  READS SQL DATA LANGUAGE SQL AS $$ select s; $$ ;
```



## 相关链接<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_sfbe47252e2d24b638c428f7160f181ec"></a>

[CREATE FUNCTION](CREATE-FUNCTION.md)

