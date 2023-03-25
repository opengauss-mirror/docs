# gs\_dumpall<a name="EN-US_TOPIC_0000001266144741"></a>

## Context<a name="en-us_topic_0059778372_section31221112348"></a>

**gs\_dumpall**, provided by openGauss, is used to export all openGauss database information, including data of the default database postgres, user-defined databases, and common global objects of all openGauss databases.

**gs\_dumpall**  is executed by OS user  **omm**.

When  **gs\_dumpall**  is used to export data, other users can still access \(read or write\) openGauss databases.

**gs\_dumpall**  can export complete, consistent data. For example, if  **gs\_dumpall**  is started to export entire openGauss databases at T1, data of the openGauss databases at that time point will be exported, and modifications on the openGauss databases after T1 will not be exported.

The generated columns are not dumped during  **gs\_dumpall**  is used.

When **gs\_dumpall** is used to export data, generated columns are not dumped.

-   **gs\_dumpall**  exports all global objects, including information about database users and groups, tablespaces, and attributes \(for example, global access permissions\).
-   **gs\_dumpall**  calls  **gs\_dump**  to export SQL scripts from each openGauss database, which contain all the SQL statements required to restore databases.

The exported files are both plain-text SQL scripts. Use  **gsql**  to execute them to restore openGauss databases.

## Precautions<a name="en-us_topic_0059778372_s67532b3f6d2a42e183672fae6c4ba753"></a>

-   Do not modify an exported file or its content. Otherwise, restoration may fail.
-   To ensure the data consistency and integrity,  **gs\_dumpall**  acquires a share lock on a table to be dumped. If another transaction has acquired a share lock on the table,  **gs\_dumpall**  waits until this lock is released and then locks the table for dumping. If the table cannot be locked within the specified time, the dump fails. You can customize the timeout duration to wait for lock release by specifying the  **--lock-wait-timeout**  option.
-   During an export,  **gs\_dumpall**  reads all tables in a database. Therefore, you need to connect to the database as a database administrator to export a complete file. When you use  **gsql**  to execute SQL scripts, administrator permissions are also required to add users and user groups, and create databases.
-   If the database contains time series tables,  **gs\_dumpall**  cannot be used to export data.

## Syntax<a name="en-us_topic_0059778372_s991ca5afb6574130a742db3732d6f577"></a>

```
gs_dumpall [OPTION]...
```

## Parameter Description<a name="en-us_topic_0059778372_s8a1ffa824f1b4371a430896ee8fd2020"></a>

Common parameters:

-   -f, --filename=FILENAME

    Sends the output to the specified file. If this parameter is omitted, the standard output is generated.

-   -v, --verbose

    Specifies the verbose mode. If it is specified,  **gs\_dumpall**  writes detailed object comments and the number of startups/stops to the dump file, and progress messages to standard error.

-   -V, --version

    Prints the  **gs\_dumpall**  version and exits.

-   --lock-wait-timeout=TIMEOUT

    Do not keep waiting to obtain shared table locks at the beginning of the dump. Consider it as failed if you are unable to lock a table within the specified time. The timeout period can be specified in any of the formats accepted by  **SET statement\_timeout**.

-   -?, --help

    Displays help about the command line parameters for  **gs\_dumpall**  and exits.


Dump parameters:

-   -a, --data-only

    Dumps only the data, not the schema \(data definition\).

-   -c, --clean

    Runs SQL statements to delete databases before rebuilding them. Statements for dumping roles and tablespaces are added.

-   -g, --globals-only

    Dumps only global objects \(roles and tablespaces\) but no databases.

-   -o, --oids

    Dumps OIDs as parts of the data in each table. Use this option if your application references the OID columns in some way \(for example, in a foreign key constraint\). If the preceding situation does not occur, do not use this parameter.

-   -O, --no-owner

    Does not output commands to set ownership of objects to match the original database. By default,  **gs\_dumpall**  issues the  **ALTER OWNER**  or  **SET SESSION AUTHORIZATION**  command to set ownership of created schema objects. These statements will fail when the script is running unless it is started by a system administrator \(or the same user that owns all of the objects in the script\). To make a script that can be stored by any user and give the user ownership of all objects, specify  **-O**.

-   -r, --roles-only

    Dumps only roles but not databases or tablespaces.

-   -s, --schema-only

    Dumps only the object definition \(schema\) but not data.

-   -S, --sysadmin=NAME

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   -t, --tablespaces-only

    Dumps only tablespaces but not databases or roles.

-   -x, --no-privileges

    Prevents the dumping of access permissions \(grant/revoke commands\).

-   --column-inserts/--attribute-inserts

    Exports data by running the  **INSERT**  command with explicit column names  **\{INSERT INTO table \(column, ...\) VALUES ...\}**. This will cause a slow restoration. However, since this option generates an independent command for each row, an error in reloading a row causes only the loss of the row rather than the entire table content.

-   --disable-dollar-quoting

    Disables the use of dollar sign \($\) for function bodies, and forces them to be quoted using the SQL standard string syntax.

-   --disable-triggers

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --inserts

    Dumps data when the  **INSERT**  statement \(rather than  **COPY**\) is issued. This will cause a slow restoration. The restoration may fail if you rearrange the column order. The  **--column-inserts**  parameter is safer against column order changes, though even slower.

-   --no-security-labels

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --no-tablespaces

    Does not output statements to create tablespaces or select tablespaces for objects. All the objects will be created during restoration, no matter which tablespace is selected when using this option.

-   --no-unlogged-table-data

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --include-alter-table

    Exports information about deleted columns in the table.

-   --quote-all-identifiers

    Forcibly quotes all identifiers. This parameter is useful when you dump a database for migration to a later version, in which additional keywords may be introduced.

-   --dont-overwrite-file

    Does not overwrite the current file.

-   --use-set-session-authorization

    Specifies that the standard SQL  **SET SESSION AUTHORIZATION**  command rather than  **ALTER OWNER**  is returned to ensure the object ownership. This makes dumping more standard. However, if a dump file contains objects that have historical problems, restoration may fail. A dump using  **SET SESSION AUTHORIZATION**  requires the system administrator permissions, whereas  **ALTER OWNER**  requires lower permissions.

-   --with-encryption=AES128

    Specifies that dumping data needs to be encrypted using AES128.

-   --with-key=KEY

    The AES128 key rules are as follows:

    -   Consists of 8 to 16 characters.
    -   Contains at least three of the following character types: uppercase characters, lowercase characters, digits, and special characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).

-   --include-extensions

    Backs up all  **CREATE EXTENSION**  statements if the  **include-extensions**  parameter is set.

-   --include-templatedb

    Includes template databases during the dump.

-   <sup>--binary-upgrade</sup>

    <sup>Specifies a reserved port for function expansion. This parameter is not recommended.</sup>

-   <sup>--binary-upgrade-usermap="USER1=USER2"</sup>

    <sup>Specifies a reserved port for function expansion. This parameter is not recommended.</sup>

-   --non-lock-table

    This parameter is used only for inter-software API calling.

-   --tablespaces-postfix

    Specifies a reserved port for function expansion. This parameter is not recommended.

-   --parallel-jobs

    Specifies the number of concurrent backup processes. The value range is 1–1000.

-   --pipeline

    Uses a pipe to transmit the password. This parameter cannot be used on devices.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   **-g/--globals-only**  and  **-r/--roles-only**  do not coexist.
>-   **-g/--globals-only**  and  **-t/--tablespaces-only**  do not coexist.
>-   **-r/--roles-only**  and  **-t/--tablespaces-only**  do not coexist.
>-   **-s/--schema-only**  and  **-a/--data-only**  do not coexist.
>-   **-r/--roles-only**  and  **-a/--data-only**  do not coexist.
>-   **-t/--tablespaces-only**  and  **-a/--data-only**  do not coexist.
>-   **-g/--globals-only**  and  **-a/--data-only**  do not coexist.
>-   **--tablespaces-postfix**  must be used in conjunction with  **--binary-upgrade**.
>-   **--binary-upgrade-usermap**  must be used in conjunction with  **--binary-upgrade**.
>-   **--parallel-jobs**  must be used in conjunction with  **-f/--file**.

Connection parameters:

-   -h, --host=HOSTNAME

    Specifies the host name. If the value begins with a slash \(/\), it is used as the directory for the Unix domain socket. The default value is taken from the  **PGHOST**  environment variable. If it is not set, a Unix domain socket connection is attempted.

    This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be  **127.0.0.1**.

    Environment variable:  **PGHOST**

-   -l, --database=DATABASENAME

    Specifies the name of the database connected to dump global objects and discover other databases to be dumped. If this parameter is not specified, the  **postgres**  database will be used. If the  **postgres**  database does not exist,  **template1**  will be used.

-   -p, --port=PORT

    Specifies the TCP port listened on by the server or the local Unix domain socket file name extension to ensure a correct connection. The default value is the  **PGPORT**  environment variable.

    If the thread pool is enabled, you are advised to use  **pooler port**, that is, the listening port number plus 1.

    Environment variable:  **PGPORT**

-   -U, --username=NAME

    Specifies the username for connection.

    Environment variable:  **PGUSER**

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the server requires password for authentication and the password is not provided in other ways. This option is useful in batch jobs and scripts in which no user password is required.

-   -W, --password=PASSWORD

    Specifies the user password for connection. If the host uses the trust authentication policy, the administrator does not need to enter the  **-W**  option. If the  **-W**  option is not provided and you are not a system administrator, the  **Dump Restore**  tool will ask you to enter a password.

-   --role=ROLENAME

    Specifies a role name to be used for creating the dump. If this option is selected, the  **SET ROLE**  command will be issued after the database is connected to  **gs\_dumpall**. It is useful when the authenticated user \(specified by  **-U**\) lacks the permissions required by  **gs\_dumpall**. It allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as a system administrator. This option allows dumping data without violating the policy.

-   --rolepassword=ROLEPASSWORD

    Specifies the password of the specific role.


## Description<a name="en-us_topic_0059778372_sc99dfbcba3eb44e59598baa7edd2d140"></a>

-   **gs\_dumpall**  internally calls  **gs\_dump**. For details about the diagnosis information, see  [gs\_dump](gs_dump.md).
-   Once  **gs\_dumpall**  is restored, it is advised to run  **ANALYZE**  on each database so that the optimizer can provide useful statistics.
-   **gs\_dumpall**  requires all needed tablespace directories to be empty before the restoration. Otherwise, database creation will fail if the databases are in non-default locations.

## Examples<a name="en-us_topic_0059778372_sb56721027dde49e1bf8c5df9685d2f2f"></a>

Use  **gs\_dumpall**  to export all openGauss databases at a time.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**gs\_dumpall**  supports only plain-text format export. Therefore, only  **gsql**  can be used to restore a file exported using  **gs\_dumpall**.

```
gs_dumpall -f backup/bkp2.sql -p 37300
Password:
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:09]: The total objects number is 2371.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:35]: [100.00%] 2371 objects have been dumped.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: dump database dbname='postgres' successfully
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: total time: 55567  ms
gs_dumpall[port='37300'][2018-06-27 09:55:46]: dumpall operation successful
gs_dumpall[port='37300'][2018-06-27 09:55:46]: total time: 56088  ms
In the preceding command, backup/bkp2.sql indicates the exported file, and 37300 indicates the port number of the database server.
```

## Helpful Links<a name="en-us_topic_0059778372_s9ed79eb3e2564786a6823616c460fc00"></a>

[gs\_dump](gs_dump.md)
