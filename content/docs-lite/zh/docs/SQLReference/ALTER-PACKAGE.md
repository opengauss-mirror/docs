# ALTER PACKAGE<a name="ZH-CN_TOPIC_0000001242228489"></a>

## 功能描述<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

修改PACKAGE的属性或重编译PACKAGE。当PACKAGE因为依赖的引用对象发生改变而变为失效状态后，直接使用PACKAGE中失效的对象可能会导致错误的执行结果。如PACKAGE中定义存储过程的入参依赖自定义的类型或表字段，对自定义类型或表字段添加新属性后，调用原来的存储过程无法向新添加的属性传参，openGauss支持对这种场景下的PACKAGE进行重新编译，恢复其有效状态。

## 注意事项<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

+ 目前仅支持ALTER PACKAGE OWNER和ALTER PACKAGE COMPILE功能，系统管理员默认拥有该权限，有以下权限约束：
  + 当前用户必须是该PACKAGE的所有者或者系统管理员，且该用户是新所有者角色的成员。
+ 仅有初始化用户可以修改定义者权限的package的owner。 

## 语法格式<a name="section20611644205015"></a>

-   修改PACKAGE的所属者。

    ```
    ALTER PACKAGE package_name OWNER TO new_owner;
    ```

-   重编译PACKAGE。

    ```
    ALTER PACKAGE package_name COMPILE { compile_pkg_opt } ;
    ```

## 参数说明<a name="section379118333433"></a>

-   **package\_name**

    要修改的PACKAGE名称。

    取值范围：已存在的PACKAGE名，仅支持修改单个PACKAGE。

-   **new\_owner**

    PACKAGE的新所有者。要修改函数的所有者，新所有者必须拥有该PACKAGE所属模式的CREATE权限。

    取值范围：已存在的用户角色。

-   **compile\_pkg\_opt**

    重编译PACKAGE的选项，包括SPECIFICATION, BODY, PACKAGE或不指定，不指定时默认选项为PACKAGE。

## 示例<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

请参见[CREATE PACKAGE](CREATE-PACKAGE.md)中示例。

## 相关链接<a name="zh-cn_topic_0283136989_zh-cn_topic_0237122061_zh-cn_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[CREATE PACKAGE](CREATE-PACKAGE.md)，[DROP PACKAGE](DROP-PACKAGE.md)

