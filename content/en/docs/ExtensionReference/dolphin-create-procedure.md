# CREATE PROCEDURE<a name="ZH-CN_TOPIC_0289900087"></a>

## Function Description<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_s824c141a39964bd39575295aebb98d67"></a>

Creates a stored procedure.

## Precautions <a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_s8e31b13bfac744069adb47a99f52d6fe"></a>

Compared with the original openGauss, Dolphin modifies the CREATE PROCEDURE syntax as follows:

1. The LANGUAGE option is added.

2. The syntax compatibility item [NOT] DETERMINISTIC is added.

3. The syntax compatibility item { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } is added.

4. The syntax compatibility item SQL SECURITY { DEFINER | INVOKER } is added.

## Syntax <a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

```
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    [ ( {[ argname ] [ argmode ] argtype [ { DEFAULT | := | = } expression ]}[,...]) ]
    [
       { IMMUTABLE | STABLE | VOLATILE }
       | { SHIPPABLE | NOT SHIPPABLE }
       | {PACKAGE}
       | [ NOT ] LEAKPROOF
       | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
       | {[ EXTERNAL |SQL ] SECURITY INVOKER | [ EXTERNAL|SQL ] SECURITY DEFINER | AUTHID DEFINER | AUTHID CURRENT_USER}
       | COST execution_cost
       | SET configuration_parameter { TO value | = value | FROM CURRENT }
       | COMMENT text
       | {DETERMINISTIC | NOT DETERMINISTIC}
       | LANGUAGE lang_name
       | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    ][ ... ]
 { IS | AS }
plsql_body
/
```

## Parameter Description<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

- **LANGUAGE  lang_name**

  Name of the language used to implement the stored procedure. Default value: **plpgsql**.

- **SQL SECURITY INVOKER**
 
  Specifies that the stored procedure is to be executed with the permissions of the user that calls it. This parameter can be omitted.

  The functions of SQL SECURITY INVOKER and SECURITY INVOKER and AUTHID CURRENT\_USER are the same.

- **SQL SECURITY DEFINER**

  Specifies that the stored procedure is to be executed with the privileges of the user that created it.

  The functions of SQL SECURITY DEFINER and AUTHID DEFINER and SECURITY DEFINER are the same.

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  Syntax compatibility item.

## Helpful Links<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sfe39b39f278f4933914a438f40c63954"></a>

[CREATE PROCEDURE](../SQLReference/CREATE-PROCEDURE.md)
