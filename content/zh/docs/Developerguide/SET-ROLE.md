# SET ROLE

## 功能描述<a name="zh-cn_topic_0283137642_zh-cn_topic_0237122188_zh-cn_topic_0059777965_s1907f5458adb46ecbefdfb865dee04c1"></a>

设置当前会话的当前用户标识符。

## 注意事项<a name="zh-cn_topic_0283137642_zh-cn_topic_0237122188_zh-cn_topic_0059777965_s2aaa6c6783344d6f8e8c9aad1f097726"></a>

-   当前会话的用户必须是指定的rolename角色的成员，但系统管理员可以选择任何角色。
-   使用这条命令，它可能会增加一个用户的权限，也可能会限制一个用户的权限。如果会话用户的角色有INHERITS属性，则它自动拥有它能SET ROLE变成的角色的所有权限；在这种情况下，SET ROLE实际上是删除了所有直接赋予会话用户的权限，以及它的所属角色的权限，只剩下指定角色的权限。另一方面，如果会话用户的角色有NOINHERITS属性，SET ROLE删除直接赋予会话用户的权限，而获取指定角色的权限。

## 语法格式<a name="zh-cn_topic_0283137642_zh-cn_topic_0237122188_zh-cn_topic_0059777965_sa7eba2a220a24848a3b9c17cf2547088"></a>

-   设置当前会话的当前用户标识符。

    ```
    SET [ SESSION | LOCAL ] ROLE role_name PASSWORD 'password';
    ```

-   重置当前用户标识为当前会话用户标识符。

    ```
    RESET ROLE;
    ```


## 参数说明<a name="zh-cn_topic_0283137642_zh-cn_topic_0237122188_zh-cn_topic_0059777965_sfdbd23b2a1e5473f956e58a2e49410f4"></a>

-   **SESSION**

    声明这个命令只对当前会话起作用，此参数为缺省值。

-   **LOCAL**

    声明该命令只在当前事务中有效。

-   **role\_name**

    角色名。

    取值范围：字符串，要符合标识符的命名规范。

-   **password**

    角色的密码。要求符合密码的命名规则。

-   **RESET ROLE**

    用于重置当前用户标识。


## 示例<a name="zh-cn_topic_0283137642_zh-cn_topic_0237122188_zh-cn_topic_0059777965_s4d24bf772ecd48528f1a51465a1bce81"></a>

```
--创建角色paul。
openGauss=# CREATE ROLE paul IDENTIFIED BY 'xxxxxxxxx';

--设置当前用户为paul。
openGauss=# SET ROLE paul PASSWORD 'xxxxxxxxx';

--查看当前会话用户，当前用户。
openGauss=# SELECT SESSION_USER, CURRENT_USER;

--重置当前用户。
openGauss=# RESET role;

--删除用户。
openGauss=# DROP USER paul;
```
