# Administrator<a name="EN-US_TOPIC_0289900895"></a>

## Initial User<a name="en-us_topic_0283136784_en-us_topic_0237121100_section41994915210"></a>

The account automatically generated during database installation is called an initial user. The initial user has the highest-level permissions in the system and can perform all operations. If the initial username is not specified during installation, the username is the same as the name of the OS user who installs the database. If the password of the initial user is not specified during the installation, the password is empty after the installation. In this case, you need to change the password of the initial user on the gsql client before performing other operations. If the initial user password is empty, you cannot perform other SQL operations, such as upgrade and node replacement, except changing the password.

An initial user bypasses all permission checks. You are advised to use an initial user as a database administrator only for database management other than service running.

## System Administrator<a name="en-us_topic_0283136784_en-us_topic_0237121100_section441452135814"></a>

A system administrator is an account with the  **SYSADMIN**  attribute. By default, a database system administrator has the same permissions as object owners but does not have the object permissions in  **dbe\_perf**  mode.

To create a database administrator, connect to the database as an administrator and run the  **[CREATE USER](create-user.md)**  or  **[ALTER USER](alter-user.md)**  statement with  **SYSADMIN**  specified.

```
openGauss=# CREATE USER sysadmin WITH SYSADMIN password "xxxxxxxxx";
```

Or

```
openGauss=# ALTER USER joe SYSADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

## Monitor Administrator<a name="section4709123485918"></a>

A monitor administrator is an account with the  **MONADMIN**  attribute and has the permission to view views and functions in the  **dbe\_perf**  schema. The monitor administrator can also grant or revoke object permissions in the  **dbe\_perf**  schema.

To create a monitor administrator, connect to the database as a system administrator and run the  **[CREATE USER](create-user.md)**  or  **[ALTER USER](alter-user.md)**  statement with  **MONADMIN**  specified.

```
openGauss=# CREATE USER monadmin WITH MONADMIN password "xxxxxxxxx";
```

or

```
openGauss=# ALTER USER joe MONADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

## O&M Administrator<a name="section716203810597"></a>

An O&M administrator is an account with the  **OPRADMIN**  permission.

To create an O&M administrator, connect to the database as an initial user and run the  **[CREATE USER](create-user.md)**  or  **[ALTER USER](alter-user.md)**  statement with  **OPRADMIN**  specified.

```
openGauss=# CREATE USER opradmin WITH OPRADMIN password "xxxxxxxxx";
```

or

```
openGauss=# ALTER USER joe OPRADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

## Security Policy Administrator<a name="section319844011593"></a>

A security policy administrator is an account with the  **POLADMIN**  attribute and has the permission to create resource tags, anonymization policies, and unified audit policies.

To create a security policy administrator, connect to the database as an administrator and run the  **[CREATE USER](create-user.md)**  or  **[ALTER USER](alter-user.md)**  statement with  **POLADMIN**  specified.

```
openGauss=# CREATE USER poladmin WITH POLADMIN password "xxxxxxxxx";
```

or

```
openGauss=# ALTER USER joe POLADMIN;
```

To run the  **ALTER USER**  statement, the user must exist.

