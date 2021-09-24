# SET SESSION AUTHORIZATION<a name="EN-US_TOPIC_0289899948"></a>

## Function<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_se24abe3c44f645b091e061c97d8957e7"></a>

Sets the session user identifier and the current user identifier of the current SQL session to a specified user.

## Precautions<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_s50bdb366a8344d82bd8877b075ead315"></a>

The session identifier can be changed only when the initial session user has the system administrator rights. Otherwise, the system supports the statement only when the authenticated user name is specified.

## Syntax<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_s9c2df0ee86bb4fae9be40201b8ca286e"></a>

-   Set the session user identifier and the current user identifier of the current session.

    ```
    SET [ SESSION | LOCAL ] SESSION AUTHORIZATION role_name PASSWORD 'password';
    ```

-   Reset the identifiers of the session and current users to the initially authenticated user names.

    ```
    {SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
        | RESET SESSION AUTHORIZATION};
    ```


## Parameter Description<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_sb099078e31b74c4bb9d94876d02bc16e"></a>

-   **SESSION**

    Specifies that the specified parameters take effect for the current session.

-   **LOCAL**

    Specifies that the specified statement takes effect only for the current transaction.

-   **role\_name**

    Username

    Value range: a string. It must comply with the identifier naming convention.

-   **password**

    Specifies the password of a role. It must comply with the password convention.

-   **DEFAULT**

    Resets the identifiers of the session and current users to the initially authenticated user names.


## Examples<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_s6407418328e544dc8b8cfcf30db74af1"></a>

```
-- Create a role paul.
openGauss=# CREATE ROLE paul IDENTIFIED BY 'xxxxxxxxx';

-- Set the current user to paul.
openGauss=# SET SESSION AUTHORIZATION paul password 'xxxxxxxxx';

-- View the current session user and the current user.
openGauss=# SELECT SESSION_USER, CURRENT_USER;

-- Reset the current user.
openGauss=# RESET SESSION AUTHORIZATION;

-- Delete the user.
openGauss=# DROP USER paul;
```

## Reference<a name="en-us_topic_0283137463_en-us_topic_0237122189_en-us_topic_0059778193_sc0f2308a64c2470aaac2c18b49a18e95"></a>

[SET ROLE](set-role.md)

