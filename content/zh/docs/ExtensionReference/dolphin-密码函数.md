# dolphin-密码函数

-   set_native_password\(role text, password text)

    描述：设置role的密码，加密方式为sha1(sha1(password)), 存储在pg_authid的rolpasswordext字段中。

    参数说明：
    - role: 待设置密码的用户 
    - password: 输入的新密码

    返回值类型：text, 值为sha1(sha1(password)的hex字符串

    示例：

    ```
    openGauss=# select set_native_password('omm', 'Gauss@123');
        set_native_password            
    ------------------------------------------
    676a8fd5633248f6f59e17d4939f7f6e7093c350
    (1 row)

    ```