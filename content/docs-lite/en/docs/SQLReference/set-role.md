# SET ROLE<a name="EN-US_TOPIC_0289900009"></a>

## Function<a name="en-us_topic_0283137642_en-us_topic_0237122188_en-us_topic_0059777965_s1907f5458adb46ecbefdfb865dee04c1"></a>

Sets the current user identifier of the current session.

## Precautions<a name="en-us_topic_0283137642_en-us_topic_0237122188_en-us_topic_0059777965_s2aaa6c6783344d6f8e8c9aad1f097726"></a>

-   Users of the current session must be members of specified  **rolename**, but the system administrator can choose any roles.
-   Executing this statement may add rights of a user or restrict rights of a user. If the role of a session user has the  **INHERITS**  attribute, it automatically has all rights of roles that  **SET ROLE**  enables the role to be. In this case,  **SET ROLE**  physically deletes all rights directly granted to session users and rights of its belonging roles and only leaves rights of the specified roles. If the role of the session user has the  **NOINHERITS**  attribute,  **SET ROLE**  deletes rights directly granted to the session user and obtains rights of the specified role.

## Syntax<a name="en-us_topic_0283137642_en-us_topic_0237122188_en-us_topic_0059777965_sa7eba2a220a24848a3b9c17cf2547088"></a>

-   Set the current user identifier of the current session.

    ```
    SET [ SESSION | LOCAL ] ROLE role_name PASSWORD 'password';
    ```

-   Reset the current user identifier to that of the current session.

    ```
    RESET ROLE;
    ```


## Parameter Description<a name="en-us_topic_0283137642_en-us_topic_0237122188_en-us_topic_0059777965_sfdbd23b2a1e5473f956e58a2e49410f4"></a>

-   **SESSION**

    Specifies that the statement takes effect only for the current session. This parameter is used by default.

-   **LOCAL**

    Specifies that the specified statement takes effect only for the current transaction.

-   **role\_name**

    Specifies the role name.

    Value range: a string. It must comply with the identifier naming convention.

-   **password**

    Specifies the password of a role. It must comply with the password convention.

-   **RESET ROLE**

    Resets the current user identifier.


## Examples<a name="en-us_topic_0283137642_en-us_topic_0237122188_en-us_topic_0059777965_s4d24bf772ecd48528f1a51465a1bce81"></a>

```
-- Create a role paul.
openGauss=# CREATE ROLE paul IDENTIFIED BY 'xxxxxxxxx';

-- Set the current user to paul.
openGauss=# SET ROLE paul PASSWORD 'xxxxxxxxx';

-- View the current session user and the current user.
openGauss=# SELECT SESSION_USER, CURRENT_USER;

-- Reset the current user.
openGauss=# RESET role;

-- Delete the user.
openGauss=# DROP USER paul;
```

