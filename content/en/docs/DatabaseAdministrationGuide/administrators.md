# Administrators<a name="EN-US_TOPIC_0246507959"></a>

## Initial Users<a name="en-us_topic_0237121100_section41994915210"></a>

The account automatically generated during openGauss installation is called an initial user. An initial user is the system, monitoring, O&M, and security policy administrator who has the highest-level permissions in the system and can perform all operations. This account has the same name as the OS user used for openGauss installation. You need to manually set the password during the installation. After the first login, change the initial user's password in time.

An initial user bypasses all permission checks. You are advised to use an initial user as a database administrator only for database management other than service running.

## System Administrators<a name="en-us_topic_0237121100_section441452135814"></a>

A system administrator is an account with the  **SYSADMIN**  attribute. By default, a database system administrator has the same permissions as object owners but does not have the object permissions in  **dbe\_perf**  mode.

To create a system administrator, connect to the database as the initial user or a system administrator and run the  **[CREATE USER](../SQLReference/create-user.md)**  or  **[ALTER USER](../SQLReference/alter-user.md)**  statement with  **SYSADMIN**  specified.

```
CREATE USER sysadmin WITH SYSADMIN password "xxxxxxxxx";
```

or

```
ALTER USER joe SYSADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.



## Monitor Administrator<a name="section4709123485918"></a>

A monitor administrator is an account with the  **MONADMIN**  attribute and has the permission to view views and functions in the  **dbe\_perf**  schema. The monitor administrator can also grant or revoke object permissions in the  **dbe\_perf**  schema.

To create a monitor administrator, connect to the database as a system administrator and run the  **[CREATE USER](../SQLReference/create-user.md)**  or  **[ALTER USER](../SQLReference/alter-user.md)**  statement with  **MONADMIN**  specified.

```
postgres=# CREATE USER monadmin WITH MONADMIN password "xxxxxxxxx";
```

or

```
postgres=# ALTER USER joe MONADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

## O&M Administrator<a name="section716203810597"></a>

An O&M administrator is an account with the  **OPRADMIN**  attribute and has the permission to use Roach to perform backup and restoration.

To create an O&M administrator, connect to the database as an initial user and run the  **[CREATE USER](../SQLReference/create-user.md)**  or  **[ALTER USER](../SQLReference/alter-user.md)**  statement with  **OPRADMIN**  specified.

```
postgres=# CREATE USER opradmin WITH OPRADMIN password "xxxxxxxxx";
```

or

```
postgres=# ALTER USER joe OPRADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

## Security Policy Administrator<a name="section319844011593"></a>

A security policy administrator is an account with the  **POLADMIN**  attribute and has the permission to create resource tags, anonymization policies, and unified audit policies.

To create a security policy administrator, connect to the database as an administrator and run the  **[CREATE USER](../SQLReference/create-user.md)**  or  **[ALTER USER](../SQLReference/alter-user.md)**  statement with  **POLADMIN**  specified.

```
postgres=# CREATE USER poladmin WITH POLADMIN password "xxxxxxxxx";
```

or

```
postgres=# ALTER USER joe POLADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.