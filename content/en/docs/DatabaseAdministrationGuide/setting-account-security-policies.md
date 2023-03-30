# Setting Account Security Policies<a name="EN-US_TOPIC_0246507967"></a>

## Background<a name="en-us_topic_0237121108_en-us_topic_0151096060_en-us_topic_0085032584_en-us_topic_0059778228_section1763231181417"></a>

For data security purposes, openGauss provides a series of security measures, such as automatically locking and unlocking accounts, manually locking and unlocking abnormal accounts, and deleting accounts that are no longer used.

## Automatically Locking and Unlocking Accounts<a name="en-us_topic_0237121108_en-us_topic_0151096060_en-us_topic_0085032584_en-us_topic_0059778228_section1173585316159"></a>

-   If the number of incorrect password attempts \(**failed\_login\_attempts**\) of an account reaches the upper limit \(**10**  by default\), the system automatically locks the account. Smaller parameter values result in higher account security. However, if the value of this parameter is set too small, inconvenience may occur.
-   If the time during which a user is locked exceeds the preset value \(**password\_lock\_time**, one day by default\), the system automatically unlocks the user. Larger parameter values bring higher account security. However, if the value of this parameter is set too large, inconvenience may occur.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   The integral part of the  **password\_lock\_time**  value indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.  
    >-   If the  **failed\_login\_attempts**  parameter is set to  **0**, an account is never locked due to incorrect password attempts. If the  **password\_lock\_time**  parameter is set to  **0**, an account is quickly unlocked after it is locked due to incorrect password attempts. Therefore, only when both parameters are set to positive values, the following operations can be performed: password failure check, account locking, and account unlocking.  
    >-   The default values of the two parameters meet the security requirements. You can change the parameter values as needed for higher security. You are advised to retain the default values.  


Configure the  **failed\_login\_attempts**  parameter.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  View the current value.

    ```
    postgres=# SHOW failed_login_attempts;
     failed_login_attempts
    -----------------------
     10
    (1 row)
    ```

    If the command output is not  **10**, run the  **\\q**  command to exit the database.

4.  Run the following command to set the parameter to its default value  **10**:

    ```
    gs_guc reload -D /gaussdb/data/dbnode -c "failed_login_attempts=10"
    ```


Configure the  **password\_lock\_time**  parameter.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=#
    ```

3.  View the current value.

    ```
    postgres=# SHOW password_lock_time;
     password_lock_time
    -----------------------
     1
    (1 row)
    ```

    If the command output is not  **1**, run the  **\\q**  command to exit the database.

4.  Run the following command to set the parameter to its default value  **1**:

    ```
    gs_guc reload -N all -I all -c "password_lock_time=1"
    ```


## Manually Locking and Unlocking Accounts<a name="en-us_topic_0237121108_en-us_topic_0151096060_en-us_topic_0085032584_en-us_topic_0059778228_section964105310248"></a>

Once detecting that an account is stolen or the account is used to access the database without being authorized, administrators can manually lock the account.

Administrators can manually unlock the account if the account becomes normal again.

For details about how to create a user, see  [Users](users.md). To manually lock and unlock user  **joe**, run commands in the following format:

-   To manually lock the account, run the following command:

    ```
    postgres=# ALTER USER joe ACCOUNT LOCK;
    ALTER ROLE
    ```

-   To manually unlock the account, run the following command:

    ```
    postgres=# ALTER USER joe ACCOUNT UNLOCK;
    ALTER ROLE
    ```


## Deleting Accounts That Are No Longer Used<a name="en-us_topic_0237121108_en-us_topic_0151096060_en-us_topic_0085032584_en-us_topic_0059778228_sc15cf3af332848c28d65ffcfe307a80b"></a>

Administrators can delete an account that is no longer used. This operation cannot be rolled back.

When an account to be deleted is in the active state, it is deleted after the session is disconnected.

For example, if you want to delete account  **joe**, run the following command:

```
postgres=# DROP USER joe  CASCADE;
DROP ROLE
```

