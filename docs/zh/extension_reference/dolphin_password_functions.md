# dolphin-密码函数

- set_native_password\(role text, new_password text, old_password text)

    描述：设置role的MySQL native密码，加密方式为SHA-1(SHA-1(new_password))，存储在pg_authid的rolpasswordext字段中。

    参数说明：
    - role：待设置密码的用户
    - new_password：输入的新密码
    - old_password：原密码，首次设置时传空字符串，后续修改密码时必须填写旧密码

    返回值类型：text，值为SHA-1(SHA-1(new_password))的hex字符串。

    示例：

    ```
    openGauss=# select set_native_password('test_user', 'Test@123', '');
        set_native_password
    ------------------------------------------
    bcf4f28e525ed7ee4664ffff4dae13ec14a6abe1
    (1 row)

    openGauss=# select set_native_password('test_user', '123456', 'Test@123');
        set_native_password
    ------------------------------------------
    6bb4837eb74329105ee4568dda7dc67ed2ca2ad9
    (1 row)

    ```
