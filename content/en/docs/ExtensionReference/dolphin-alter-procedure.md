# ALTER PROCEDURE<a name="ZH-CN_TOPIC_0000001197866299"></a>

## Function Description<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

Alters the attributes of a customized stored procedure.

## Precautions <a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

Compared with the original openGauss, Dolphin modifies the ALTER PROCEDURE syntax as follows:

1. The modifiable LANGUAGE option is added.

2. The modifiable item { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } is added.

3. The modifiable item SQL SECURITY { DEFINER | INVOKER } is added.

## Syntax <a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa4d6f7fca3774a5e9f488937b289bea3"></a>

-   Modify the additional parameters of the customized stored procedure.

    ```
    ALTER PROCEDURE procedure_name ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        action [ ... ] [ RESTRICT ];
    ```

    The syntax of the **action** clause is as follows:

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
     | COMMENT 'text'
     | LANGUAGE lang_name
     | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    ```

## Parameter Description <a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_s72f8af90c9784dc9a16e58974d73a31a"></a>

- **LANGUAGE  lang_name**

  Name of the language used to implement the stored procedure. This parameter is compatible only with the syntax and has no actual effect.

- **SQL SECURITY INVOKER**

​		Specifies that the stored procedure is to be executed with the permissions of the user that calls it. This parameter can be omitted.

​		The functions of SQL SECURITY INVOKER and SECURITY INVOKER and AUTHID CURRENT\_USER are the same.

- **SQL SECURITY DEFINER**

  Specifies that the stored procedure is to be executed with the privileges of the user that created it.

  The functions of SQL SECURITY DEFINER and AUTHID DEFINER and SECURITY DEFINER are the same.

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  Syntax compatibility item.

## Example<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

```
    --Specify NO SQL.
    openGauss=# ALTER PROCEDURE proc1() NO SQL;

    --Specify CONTAINS SQL.
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL;

    --Specify LANGUAGE SQL.
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL LANGUAGE SQL ;

    --Specify MODIFIES SQL DATA.
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL MODIFIES SQL DATA;

    --Specify SECURITY INVOKER.
    openGauss=# ALTER PROCEDURE proc1() SQL SECURITY INVOKER;

```

## Helpful Links<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[ALTER PROCEDURE](ALTER-PROCEDURE.md)
