# gs\_restore<a name="ZH-CN_TOPIC_0249632267"></a>

## Background<a name="en-us_topic_0237152343_en-us_topic_0059777561_section182531928123515"></a>

**gs\_restore**, provided by openGauss, is used to import data that was exported using **gs\_dump**. It can also be used to import files exported by **gs\_dump**.

**gs\_restore** is executed by OS user **omm**.

It has the following functions:

-   Importing data to the database

    If a database is specified, data is imported to the database. For parallel import, the password for connecting to the database is required. During data import, the generated columns are automatically updated and saved as common columns.

-   Importing data to the script file

    If the database storing imported data is not specified, a script containing the SQL statement to recreate the database is created and written to a file or standard output. This script output is equivalent to the plain text output format of **gs\_dump**.


## Command Format<a name="en-us_topic_0237152343_en-us_topic_0059777561_s5a64660d88db4dfb8e2b35d0b4645264"></a>

```
gs_restore [OPTION]... FILE
```

![](public_sys-resources/icon-note.gif) **NOTE:** 

-   **FILE** does not have a short or long parameter. It is used to specify the location for the archive files.

-   The **dbname** or **-l** parameter is required as prerequisites. Users cannot enter **dbname** and **-l** parameters at the same time.

-   gs\_restore incrementally imports data by default. To prevent data exceptions caused by multiple import operations, you are advised to use the **-c** option during the import. Before recreating database objects, delete the database objects that already exist in the database to be restored.

-   There is no option to control log printing. To hide logs, redirect the logs to the log file. If a large amount of table data needs to be restored, the table data will be restored in batches. Therefore, the log indicating that the table data has been imported is generated for multiple times.

## Parameter Description<a name="en-us_topic_0237152343_en-us_topic_0059777561_sc666a8c818084bad8e23afd6e79dd659"></a>

### Common parameters

-   -d, --dbname=NAME

    Connects to the **dbname** database and imports data to the database.

-   -f, --file=FILENAME

    Specifies the output file for the generated script, or uses the output file in the list specified using **-l**.

    The default is the standard output.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    
    >-**-f** cannot be used in conjunction with **-d**.

-   -F, --format=c|d|t

    Specifies the format of the archive. The format does not need to be specified because the *gs\*restore_ determines the format automatically.

    Value range:

    -   **c/custom**: The archive form is the customized format in [gs\_dump](gs_dump.md).
    -   **d/directory**: The archive form is a directory archive format.
    -   **t/tar**: The archive form is a .tar archive format.

-   -l, --list

    Lists the forms of the archive. The operation output can be used for the input of the **-L** parameter. If filtering parameters, such as **-n** or **-t**, are used together with **-l**, they will restrict the listed items.

-   -v, --verbose

    Specifies the verbose mode.

-   -V, --version

    Prints the **gs\_restore** version and exits.

-   -?, --help

    Displays help about **gs\_restore** parameters and exits.

### Parameters for importing data

-   -a, --data-only

    Imports only the data, not the schema \(data definition\). **gs\_restore** incrementally imports data.

-   -c, --clean

    Cleans \(deletes\) existing database objects in the database to be restored before recreating them.

-   -C, --create

    Before data is imported to a database, CREATE DATABASE is used to create the database. (After this option is specified, the database specified by **-d** is only used to execute the **CREATE DATABASE** command, and all data is still imported to the created database.)

-   -e, --exit-on-error

    Exits if an error occurs when you send the SQL statement to the database. If you do not exit, the commands will still be sent and error information will be displayed when the import ends.

-   -I, --index=NAME

    Imports only the definition of the specified index. Multiple indexes can be imported. Enter **-I**_ index_ multiple times to import multiple indexes.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -I Index1 -I Index2 backup/MPPDB_backup.tar
    ```

    In this example, *Index1* and *Index2* will be imported.

-   -j, --jobs=NUM

    Specifies the number of concurrent, the most time-consuming jobs of **gs\_restore** \(such as loading data, creating indexes, or creating constraints\). This parameter can greatly reduce the time to import a large database to a server running on a multiprocessor machine.

    Each job is one process or one thread, depending on the OS; and uses a separate connection to the server.

    The optimal value for this option depends on the server hardware setting, the client, the network, the number of CPU cores, and disk settings. It is recommended that the parameter be set to the number of CPU cores on the server. In addition, a larger value can also lead to faster import in many cases. However, an overly large value will lead to decreased performance because of thrashing.

    This parameter supports custom-format archives only. The input file must be a regular file \(not the pipe file\). This parameter can be ignored when you select the script method rather than connect to a database server. In addition, multiple jobs cannot be used in conjunction with the **--single-transaction** parameter.

-   -L, --use-list=FILENAME

    Imports only archive elements that are listed in **list-file** and imports them in the order that they appear in the file. If filtering parameters, such as **-n** or **-t**, are used in conjunction with **-L**, they will further limit the items to be imported.

    **list-file** is normally created by editing the output of a previous **-l** parameter. File lines can be moved or removed, and can also be commented out by placing a semicolon \(;\) at the beginning of the row.

-   -n, --schema=NAME

    Restores only objects that are listed in schemas.

    This parameter can be used in conjunction with the **-t** parameter to import a specific table.

    Entering **-n ***schemaname* multiple times can import multiple schemas.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -n sch1 -n sch2 backup/MPPDB_backup.tar
    ```

    In this example, **sch1** and **sch2** will be imported.

-   -O, --no-owner

    Do not output commands to set ownership of objects to match the original database. By default, **gs\_restore** issues the **ALTER OWNER** or **SET SESSION AUTHORIZATION** command to set ownership of created schema objects. Unless the system administrator or the user who has all the objects in the script initially accesses the database. Otherwise, the statement will fail. Any username can be used for the initial connection using **-O**, and this user will own all the created objects.

-   -P, --function=NAME\(args\)

    Imports only listed functions. You need to correctly spell the function name and the parameter based on the contents of the dump file in which the function exists.

    Entering **-P** alone means importing all function-name(args) functions in a file. Entering **-P** in conjunction with **-n** means importing the function-name\(args\) functions in a specified schema. Entering **-P** multiple times and using **-n** once means that all imported functions are in the **-n** schema by default.

    You can enter **-n schema-name -P 'function-name\(args\)'** multiple times to import functions in specified schemas.

    For example:

    ```
    gs_restore -h host_name -p port_number -d postgres -n test1 -P 'Func1(integer)' -n test2 -P 'Func2(integer)' backup/MPPDB_backup.tar
    ```

    In this example, both **Func1 \(i integer\)** in the **test1** schema and **Func2 \(j integer\)** in the **test2** schema will be imported.

-   -s, --schema-only

    Imports only schemas \(data definitions\), instead of data \(table content\). The current sequence value will not be imported.

-   -S, --sysadmin=NAME

    Reserved for function extension. The option is not recommended.

- -t, --table=NAME

  Imports only listed table definitions or data, or both. This parameter can be used in conjunction with the **-n** parameter to specify a table object in a schema. When **-n** is not entered, the default schema is PUBLIC. Entering **-n ***schemaname*** -t ***tablename* multiple times can import multiple tables in a specified schema.

  For example:

  Import **table1** in the **PUBLIC** schema.

  ```
  gs_restore -h host_name -p port_number -d postgres -t table1 backup/MPPDB_backup.tar
  ```

  Import **test1** in the **test1** schema and **test2** in the **test2** schema.

  ```
  gs_restore -h host_name -p port_number -d postgres -n test1 -t test1 -n test2 -t test2 backup/MPPDB_backup.tar
  ```

  Import **table1** in the **PUBLIC** schema and **table1** in the **test1** schema.

  ```
  gs_restore -h host_name -p port_number -d postgres -n PUBLIC -t table1 -n test1 -t table1 backup/MPPDB_backup.tar
  ```

  ![](public_sys-resources/icon-note.gif) **NOTE:** 

  -**t** does not support the **schema\_name.table\_name** input format.

-   -T, --trigger=NAME

    This parameter is reserved for extension.

-   -x, --no-privileges/--no-acl

    Prevents the import of access permissions \(**GRANT**/**REVOKE** commands\).

-   -1, --single-transaction

    Executes import as a single transaction \(that is, commands are wrapped in **BEGIN**/**COMMIT**\).

    This parameter ensures that either all the commands are completed successfully or no application is changed. This option means **--exit-on-error**.

-   --disable-triggers

    Reserved for function extension. The option is not recommended.

-   --no-data-for-failed-tables

    By default, table data will be imported even if the statement to create a table fails \(for example, the table exists\). Data in such table is skipped using this parameter. This operation is useful if the target database already contains the desired table contents.

    This parameter takes effect only when you import data directly into a database, not when you output SQL scripts.

-   --no-publications

    No import publications are performed.

-   --no-security-labels

    Reserved for function extension. The option is not recommended.

-   --no-subscriptions

    No import subscriptions are performed.

-   --no-tablespaces

    Does not issue commands to select tablespaces. All objects will be created during the import process no matter which tablespace is selected when using this option.

-   --section=SECTION

    Imports the listed sections \(such as pre-data, data, or post-data\).

-   --use-set-session-authorization

    Is used for plain-text backup.

    Generates the **SET SESSION AUTHORIZATION** statement as the output instead of the **ALTER OWNER** statement to determine object ownership. This parameter makes dump more standards-compatible. If the records of objects in exported files are referenced, import may fail. Only administrators can use the **SET SESSION AUTHORIZATION** statement to dump data, and the administrators must manually change and verify the passwords of exported files by referencing the **SET SESSION AUTHORIZATION** statement before import. The **ALTER OWNER** statement requires lower permissions.

-  --pipeline

  Uses a pipe to transmit the password. This parameter cannot be used on devices.

![](public_sys-resources/icon-notice.gif) **NOTICE:** 

-   If any local additions need to add to the template1 database during the installation, restore the output of **gs\_restore** into an empty database with caution. Otherwise, you are likely to obtain errors due to duplicate definitions of the added objects. To create an empty database without any local additions, copy data from template0 rather than template1. For example:
    ```
    CREATE DATABASE foo WITH TEMPLATE template0;
    ```
-   **gs\_restore** cannot import large objects selectively. For example, it can only import the objects of a specified table. If an archive contains large objects, all large objects will be imported, or none of them will be restored if they are excluded by using **-L**, **-t**, or other parameters.

![](public_sys-resources/icon-note.gif) **NOTE:** 

1. The **-d/--dbname** and **-f/--file** options do not coexist.
2. The **-s/--schema-only** and **-a/--data-only** parameters do not coexist.
3. The **-c/--clean** and **-a/--data-only** parameters do not coexist.
4. When **--single-transaction** is used, **-j/--jobs** must be a single job.
5. **--role** must be used in conjunction with **--rolepassword**.



### Connection parameters:

-   -h, --host=HOSTNAME

    Specifies the host name. If the value begins with a slash (/), it is used as the directory for the Unix domain socket. The default value is taken from the *PGHOST* environment variable. If it is not set, a Unix domain socket connection is attempted.

    This parameter is used only for defining names of the hosts outside openGauss. The names of the hosts inside openGauss must be 127.0.0.1.

-   -p, --port=PORT

    Specifies the TCP port listened on by the server or the local Unix domain socket file name extension to ensure a correct connection. The default value is the *PGPORT* environment variable.

    If the thread pool is enabled, you are advised to use pooler port, that is, the listening port number plus 1.

-   -U, --username=NAME

    Specifies the user name to connect to.

-   -w, --no-password

    Never issues a password prompt. The connection attempt fails if the host requires password verification and the password is not provided in other ways.  This parameter is useful in batch jobs and scripts in which no user password is required.

-   -W, --password=PASSWORD

    User password for database connection. If the host uses the trust authentication policy, the administrator does not need to enter the **-W** option. If the **-W** option is not provided and you are not a system administrator, **gs\_restore** will ask you to enter a password.

-   --role=ROLENAME

    Specifies a role name for the import operation. This parameter causes **gs\_restore** to issue the **SET ROLE** statement after connecting to the database. It is useful when the authenticated user (specified by **-U**) lacks the permissions required by **gs\_restore**. This parameter allows the user to switch to a role with the required permissions. Some installations have a policy against logging in directly as the initial user. This parameter allows data to be imported without violating the policy.

-   --rolepassword=ROLEPASSWORD

    Specifies the password of the specific role.


## Examples<a name="en-us_topic_0237152343_en-us_topic_0059777561_s87e334fd72aa475782287207b9d7fb79"></a>

Special case: Execute the **gsql** tool. Run the following commands to import the **MPPDB\_backup.sql** file in the export folder (in plain-text format) generated by **gs\_dump**/**gs\_dumpall** to the **postgres** database:

```
gsql -d postgres -p 15400 -W Bigdata@123 -f /home/omm/test/MPPDB_backup.sql
SET
SET
SET
SET
SET
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
CREATE INDEX
CREATE INDEX
CREATE INDEX
SET
CREATE INDEX
REVOKE
REVOKE
GRANT
GRANT
total time: 30476  ms
```

**gs\_restore** is used to import the files exported by **gs\_dump**.

Example 1: Execute the **gs\_restore** tool to import the exported **MPPDB\_backup.dmp** file \(custom format\) to the **postgres** database.

```
gs_restore -W Bigdata@123 backup/MPPDB_backup.dmp -p 15400 -d postgres
gs_restore: restore operation successful
gs_restore: total time: 13053  ms
```

Example 2: Execute the **gs\_restore** tool to import the exported **MPPDB\_backup.tar** file \(.tar format\) to the **postgres** database.

```
gs_restore backup/MPPDB_backup.tar -p 15400 -d postgres 
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21203  ms
```

Example 3: Execute the **gs\_restore** tool to import the exported **MPPDB\_backup** file \(directory format\) to the **postgres** database.

```
gs_restore backup/MPPDB_backup -p 15400 -d postgres
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21003  ms
```

Example 4: Execute the  **gs\_restore**  tool and run the following commands to import the  **MPPDB\_backup.dmp**  file \(in custom format\).  Specifically, import all the object definitions and data in the **PUBLIC** schema. Existing objects are deleted from the target database before the import. If an existing object references to an object in another schema, you need to manually delete the referenced object first.

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -n PUBLIC
gs_restore: [archiver (db)] Error while PROCESSING TOC:
gs_restore: [archiver (db)] Error from TOC entry 313; 1259 337399 TABLE table1 gaussdba
gs_restore: [archiver (db)] could not execute query: ERROR:  cannot drop table table1 because other objects depend on it
DETAIL:  view t1.v1 depends on table table1
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
    Command was: DROP TABLE public.table1;
```

Manually delete the referenced object and create it again after the import is complete.

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -n PUBLIC
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 2203  ms
```

Example 5: Execute the **gs\_restore** tool and run the following commands to import the **MPPDB\_backup.dmp** file \(in custom format\). Specifically, import only the definition of **table1** in the **PUBLIC** schema.

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -s -n PUBLIC -t table1
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 21000  ms
```

Example 6: Execute the **gs\_restore** tool and run the following commands to import the **MPPDB\_backup.dmp** file \(in custom format\). Specifically, import only the data of **table1** in the **PUBLIC** schema.

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -a -n PUBLIC -t table1
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore[2017-07-21 19:16:26]: total time: 20203  ms
```

## Related Commands<a name="en-us_topic_0237152343_en-us_topic_0059777561_sd2827da1c60248c0b0bfffc406b9f668"></a>

[gs\_dump](gs_dump.md) and [gs\_dumpall](gs_dumpall.md)
