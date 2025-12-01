# Separation of Control and Access Permissions<a name="EN-US_TOPIC_0000001088726276"></a>

## Availability<a name="section17746747"></a>

This feature is available as of openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

The control permissions and the access permissions can be separated.

## Benefits<a name="section28200442"></a>

The control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

## Description<a name="section52477394"></a>

If multiple business departments use different database users to perform service operations and a database maintenance department at the same level uses database administrators to perform O&M operations, the business departments may require that database administrators can only perform control operations \(**DROP**,  **ALTER**, and  **TRUNCATE**\) and cannot perform access operations \(**INSERT**,  **DELETE**,  **UPDATE**,  **SELECT**, and  **COPY**\) without authorization. That is, the control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

In separation-of-duties mode, a database administrator does not have permissions for the tables in schemas of other users. In this case, database administrators have neither control permissions nor access permissions. This does not meet the requirements of the business departments mentioned above. Therefore, GaussDB Kernel provides private users to solve the problem. That is, create private users with the  **INDEPENDENT**  attribute in non-separation-of-duties mode. Users with the CREATEROLE permission or the system administrator permission can create private users or change the attributes of common users to private users. Common users can also change their own attributes to private users.

```
openGauss=# CREATE USER user_independent WITH INDEPENDENT IDENTIFIED BY "1234@abc";
```

System administrators can manage \(**DROP**,  **ALTER**, and  **TRUNCATE**\) table objects of private users but cannot access \(**INSERT**,  **DELETE**,  **SELECT**,  **UPDATE**,  **COPY**,  **GRANT**,  **REVOKE**, and  **ALTER OWNER**\) the objects before being authorized.

## Enhancements<a name="section2534498"></a>

None

## Constraints<a name="section06531946143616"></a>

For a table owned by a private user, grant the trigger permission of the table to other users with caution to prevent other users from using the trigger to view the data of the private user.

If permissions related to private user tables are granted to non-private users, the system administrator will obtain the same permissions.

## Dependencies<a name="section22810484"></a>

None

