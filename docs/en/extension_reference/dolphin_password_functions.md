# Password Functions<a name="EN-US_TOPIC_0289908887"></a>

- set_native_password\(role text, new_password text, old_password text)

    Description: Set the MySQL native password for a user. The function calculates SHA-1(SHA-1(new_password)) and stores the result in the rolpasswordext column of pg_authid.
    Parameters:
    - role — role name
    - new_password — new MySQL connection password
    - old_password — original password. An empty string can be used when setting the password for the first time. The old password is required when changing the password later.

    Return type: text, a hexadecimal string of SHA-1(SHA-1(new_password))

    Example:

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
