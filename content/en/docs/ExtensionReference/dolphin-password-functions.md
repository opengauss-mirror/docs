# Password Functions<a name="EN-US_TOPIC_0289908887"></a>

- set_native_password\(role text, password text)

    Description: Set native password using sha1(sha1(password)), then stored into rolpasswordex of pg_authid.
    Parameters:
    - role: role name
    - password: new password

    Return type: text, value is hex string of sha1(sha1(password))

    Example:

    ```
    openGauss=# select set_native_password('omm', 'Gauss@123');
        set_native_password            
    ------------------------------------------
    676a8fd5633248f6f59e17d4939f7f6e7093c350
    (1 row)
    ```