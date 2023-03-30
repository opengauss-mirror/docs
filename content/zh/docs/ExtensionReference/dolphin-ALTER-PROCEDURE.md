# ALTER PROCEDURE<a name="ZH-CN_TOPIC_0000001197866299"></a>

## 功能描述<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

修改自定义存储过程的属性。

## 注意事项<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

相比于原始的openGauss，dolphin对于ALTER PROCEDURE语法的修改为：

1. 增加可修改 LANGUAGE 选项。

2. 增加可修改项 { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } 。

3. 增加可修改项 SQL SECURITY { DEFINER | INVOKER }。

## 语法格式<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sa4d6f7fca3774a5e9f488937b289bea3"></a>

-   修改自定义存储过程的附加参数。

    ```
    ALTER PROCEDURE procedure_name ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        action [ ... ] [ RESTRICT ];
    ```

    其中附加参数action子句语法为。

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

## 参数说明<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_s72f8af90c9784dc9a16e58974d73a31a"></a>

- **LANGUAGE  lang_name**

  用以实现存储过程的语言的名称，仅语法兼容，实际修改不会生效。

- **SQL SECURITY INVOKER**

​		表明该存储过程将带着调用它的用户的权限执行。该参数可以省略。

​		SQL SECURITY INVOKER和SECURITY INVOKER和AUTHID CURRENT\_USER的功能相同。

- **SQL SECURITY DEFINER**

  声明该存储过程将以创建它的用户的权限执行。

  SQL SECURITY DEFINER和AUTHID DEFINER和SECURITY DEFINER的功能相同。

- **CONTAINS SQL** | **NO SQL** | **READS SQL DATA** | **MODIFIES SQL DATA**

  语法兼容项。

## 示例<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

```
    --指定 NO SQL
    openGauss=# ALTER PROCEDURE proc1() NO SQL;

    --指定 CONTAINS SQL
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL;

    --指定 LANGUAGE SQL
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL LANGUAGE SQL ;

    --指定 MODIFIES SQL DATA
    openGauss=# ALTER PROCEDURE proc1() CONTAINS SQL MODIFIES SQL DATA;

    --指定 SECURITY INVOKER
    openGauss=# ALTER PROCEDURE proc1() SQL SECURITY INVOKER;

```

## 相关链接<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[ALTER PROCEDURE](../SQLReference/ALTER-PROCEDURE.md)