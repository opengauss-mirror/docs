# Users<a name="EN-US_TOPIC_0289900376"></a>

You can use  **CREATE USER**  and  **ALTER USER**  to create and manage database users, respectively. openGauss contains one or more named database users and roles that are shared across openGauss. However, these users and roles do not share data. That is, a user can connect to any database, but after the connection is successful, any user can access only the database declared in the connection request.

In non-[separation-of-duties](en-us_topic_0289900233.md)  scenarios, openGauss user accounts can be created and deleted only by a system administrator or a security administrator with the  **CREATEROLE**  attribute. In separation-of-duties scenarios, a user account can be created only by an initial user or a security administrator.

When a user logs in, openGauss authenticates the user. A user can own databases and database objects \(such as tables\), and grant permissions of these objects to other users and roles. In addition to system administrators, users with the  **CREATEDB**  attribute can create databases and grant permissions on these databases.

## Adding, Modifying, and Deleting Users<a name="en-us_topic_0283136811_en-us_topic_0237121102_en-us_topic_0155089862_section1157510331121"></a>

-   To create a user, use the SQL statement  **[CREATE USER](en-us_topic_0289899951.md)**.

    For example, create a user  **joe**  and set the  **CREATEDB**  attribute for the user.

    ```
    openGauss=# CREATE USER joe WITH CREATEDB PASSWORD "xxxxxxxxx";
    CREATE ROLE
    ```

-   To create a system administrator, use the  **[CREATE USER](en-us_topic_0289899951.md)**  statement with the  **SYSADMIN**  parameter.
-   To delete an existing user, use  **[DROP USER](en-us_topic_0289900387.md)**.
-   To change a user account \(for example, rename the user or change the password\), use  **[ALTER USER](en-us_topic_0289900744.md)**.
-   To view a user list, query the  **[PG\_USER](en-us_topic_0289900531.md)**  view.

    ```
    openGauss=# SELECT * FROM pg_user; 
    ```

-   To view user attributes, query the system catalog  **[PG\_AUTHID](en-us_topic_0289900706.md)**.

    ```
    openGauss=# SELECT * FROM pg_authid; 
    ```


## Private Users<a name="en-us_topic_0283136811_en-us_topic_0237121102_section12234116194510"></a>

If multiple service departments use different database user accounts to perform service operations and a database maintenance department at the same level uses database administrator accounts to perform maintenance operations, service departments may require that database administrators, without specific authorization, can manage \(**DROP**,  **ALTER**, and  **TRUNCATE**\) their data but cannot access \(**INSERT**,  **DELETE**,  **UPDATE**,  **SELECT**, and  **COPY**\) the data. That is, the management permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

In  [separation-of-duties](en-us_topic_0289900233.md)  mode, a database administrator does not have permissions for the tables in schemas of other users. In this case, database administrators have neither management permissions nor access permissions, which does not meet the requirements of the service departments mentioned above. Therefore, openGauss provides private users to solve the problem. That is, create private users with the  **INDEPENDENT**  attribute in non-separation-of-duties mode.

```
openGauss=# CREATE USER user_independent WITH INDEPENDENT IDENTIFIED BY "1234@abc";
```

System administrators and security administrators with the  **CREATEROLE**  attribute can manage \(**DROP**,  **ALTER**, and  **TRUNCATE**\) objects of private users but cannot access \(**INSERT**,  **DELETE**,  **SELECT**,  **UPDATE**,  **COPY**,  **GRANT**,  **REVOKE**, and  **ALTER OWNER**\) the objects before being authorized.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>PG\_STATISTIC and PG\_STATISTIC\_EXT store sensitive information about statistical objects, such as high-frequency MCVs. The system administrator can still access the two system catalogs to obtain the statistics of the tables to which private users belong.

## Permanent User<a name="section107115013215"></a>

openGauss provides the permanent user solution. That is, create a permanent user with the  **PERSISTENCE**  attribute.

```
openGauss=# CREATE USER user_persistence WITH PERSISTENCE IDENTIFIED BY "1234@abc";
```

Only the initial user is allowed to create, modify, and delete permanent users with the  **PERSISTENCE**  attribute.

