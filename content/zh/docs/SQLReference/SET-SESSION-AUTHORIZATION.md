# SET SESSION AUTHORIZATION

## 功能描述<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_se24abe3c44f645b091e061c97d8957e7"></a>

把当前会话里的会话用户标识和当前用户标识都设置为指定的用户。

## 注意事项<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_s50bdb366a8344d82bd8877b075ead315"></a>

只有在初始会话用户有系统管理员权限的时候，会话用户标识符才能改变。否则，只有在指定了被认证的用户名的情况下，系统才接受该命令。

## 语法格式<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_s9c2df0ee86bb4fae9be40201b8ca286e"></a>

-   为当前会话设置会话用户标识符和当前用户标识符。

    ```
    SET [ SESSION | LOCAL ] SESSION AUTHORIZATION role_name PASSWORD 'password';
    ```

-   重置会话和当前用户标识符为初始认证的用户名。

    ```
    {SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
        | RESET SESSION AUTHORIZATION};
    ```


## 参数说明<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_sb099078e31b74c4bb9d94876d02bc16e"></a>

-   **SESSION**

    声明这个命令只对当前会话起作用。

-   **LOCAL**

    声明该命令只在当前事务中有效。

-   **role\_name**

    用户名。

    取值范围：字符串，要符合标识符的命名规范。

-   **password**

    角色的密码。要求符合密码的命名规则。

-   **DEFAULT**

    重置会话和当前用户标识符为初始认证的用户名。


## 示例<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_s6407418328e544dc8b8cfcf30db74af1"></a>

```
--创建角色paul。
openGauss=# CREATE ROLE paul IDENTIFIED BY 'xxxxxxxxx';

--设置当前用户为paul。
openGauss=# SET SESSION AUTHORIZATION paul password 'xxxxxxxxx';

--查看当前会话用户，当前用户。
openGauss=# SELECT SESSION_USER, CURRENT_USER;

--重置当前用户。
openGauss=# RESET SESSION AUTHORIZATION;

--删除用户。
openGauss=# DROP USER paul;
```

## 相关参考<a name="zh-cn_topic_0283137463_zh-cn_topic_0237122189_zh-cn_topic_0059778193_sc0f2308a64c2470aaac2c18b49a18e95"></a>

[SET ROLE](SET-ROLE.md)

