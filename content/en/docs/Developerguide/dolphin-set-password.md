# SET PASSWORD 

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Change the user password.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   If no user is specified, the password of the current user is changed.
-   An initial user can change the password of any user (including its own password). REPLACE does not need to be specified to verify the current password.
-   A non-initial user cannot change the password of an initial user.
-   The sysadmin user and users with the createrole permission can change the passwords of other users (non-initialization, non-sysadmin, and non-createrole users). REPLACE does not need to be specified to verify the current password.
-   When the sysadmin user or a user with the createrole permission changes the password, REPLACE must be specified to verify the current password.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SET PASSWORD [FOR user] = password_option [REPLACE 'current_auth_string']

password_option: {
    'auth_string'
  | PASSWORD('auth_string')
}
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[FOR user]**

   **user** supports the following formats:
   
   1. **user** (case insensitive).
   2. **'user'** (case sensitive).
   3. **"user"** (case sensitive)
   4. **'user'@'host'** (case sensitive).
   5. **current_user()/current_user**.

- **auth_string**

   Password to be set.

- **current_auth_string**

   Old password.


## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Changes the password of the specified user.
openGauss=# create user user1 with password 'abcd@123';
CREATE ROLE
openGauss=# set password for user1 = 'abcd@124';
ALTER ROLE

--Changes the password of the current user.
openGauss=# set password = 'abcd@123';
ALTER ROLE
openGauss=# set password for current_user = 'abcd@123';
ALTER ROLE
openGauss=# set password for current_user() = 'abcd@123';
ALTER ROLE
```
