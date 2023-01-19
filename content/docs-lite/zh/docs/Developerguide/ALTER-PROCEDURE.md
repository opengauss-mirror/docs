# ALTER PROCEDURE<a name="ZH-CN_TOPIC_0000001197866299"></a>

## 功能描述<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

修改自定义存储过程的属性。

## 注意事项<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

只有存储过程的所有者或者被授予了存储过程ALTER权限的用户才能执行ALTER PROCEDURE命令，系统管理员默认拥有该权限。针对所要修改属性的不同，还有以下权限约束：

-   如果存储过程中涉及对临时表相关的操作，则无法使用ALTER PROCEDURE。
-   修改存储过程的所有者或修改存储过程的模式，当前用户必须是该存储过程的所有者或者系统管理员，且该用户是新所有者角色的成员。
-   只有系统管理员和初始化用户可以将procedure的schema修改成public。
-   重命名存储过程时，不能与当前模式下已经存在的synonym产生命名冲突。
-   修改存储过程的模式时，不能与新模式下已经存在的synonym产生命名冲突。

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
    ```

-   修改自定义存储过程的名称。

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        RENAME TO new_name;
    ```

-   修改自定义存储过程的所属者。

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        OWNER TO new_owner;
    ```

-   修改自定义存储过程的模式。

    ```
    ALTER PROCEDURE proname ( [ { [ argname ] [ argmode ] argtype} [, ...] ] )
        SET SCHEMA new_schema;
    ```


## 参数说明<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_s72f8af90c9784dc9a16e58974d73a31a"></a>

-   **procedure\_name**

    要修改的存储过程名称。

    取值范围：已存在的存储过程名。

-   **argmode**

    标识该参数是输入、输出参数。

    取值范围：IN/OUT/INOUT/VARIADIC。

-   **argname**

    参数名称。

    取值范围：字符串，符合标识符命名规范。

-   **argtype**

    存储过程参数的类型。

-   **CALLED ON NULL INPUT**

    表明该存储过程的某些参数是NULL的时候可以按照正常的方式调用。缺省时与指定此参数的作用相同。

-   **IMMUTABLE**

    表示该存储过程在给出同样的参数值时总是返回同样的结果。

-   **STABLE**

    表示该存储过程不能修改数据库，对相同参数值，在同一次表扫描里，该函数的返回值不变，但是返回值可能在不同SQL语句之间变化。

-   **VOLATILE**

    表示该存储过程值可以在一次表扫描内改变，不会做任何优化。

-   **LEAKPROOF**

    表示该存储过程没有副作用，指出参数只包括返回值。LEAKPROOF只能由系统管理员设置。

-   **EXTERNAL**

    （可选）目的是和SQL兼容，这个特性适合于所有函数，而不仅是外部函数。

-   **SECURITY INVOKER**

    **AUTHID CURRENT\_USER**

    表明该存储过程将以调用它的用户的权限执行。缺省时与指定此参数的作用相同。

    SECURITY INVOKER和AUTHID CURRENT\_USER的功能相同。

-   **SECURITY DEFINER**

    **AUTHID DEFINER**

    声明该存储过程将以创建它的用户的权限执行。

    AUTHID DEFINER和SECURITY DEFINER的功能相同。

-   **COST execution\_cost**

    用来估计存储过程的执行成本。

    execution\_cost以cpu\_operator\_cost为单位。

    取值范围：正数。

-   **ROWS result\_rows**

    估计存储过程返回的行数。用于存储过程返回的是一个集合。

    取值范围：正数，默认值是1000行。

-   **configuration\_parameter**
    -   **value**

        把指定的数据库会话参数值设置为给定的值。如果value是DEFAULT或者RESET，则在新的会话中使用系统的缺省设置。OFF关闭设置。

        取值范围：字符串。

        -   DEFAULT
        -   OFF
        -   RESET

        指定默认值。

    -   **from current**

        取当前会话中的值设置为configuration\_parameter的值。


-   **new\_name**

    存储过程的新名称。要修改存储过程的所属模式，必须拥有新模式的CREATE权限。

    取值范围：字符串，符合标识符命名规范。

-   **new\_owner**

    存储过程的新所有者。要修改存储过程的所有者，新所有者必须拥有该存储过程所属模式的CREATE权限。

    取值范围：已存在的用户角色。

-   **new\_schema**

    存储过程的新模式。

    取值范围：已存在的模式。

-   **COMMENT 'text'**

    修改存储过程的注释。


## 示例<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

请参见CREATE FUNCTION的[示例](CREATE-FUNCTION.md#zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821)。

## 相关链接<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[CREATE PROCEDURE](CREATE-PROCEDURE.md)，[DROP PROCEDURE](DROP-PROCEDURE.md)

