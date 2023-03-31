# How to Use gsql<a name="EN-US_TOPIC_0294748989"></a>

## Prerequisites<a name="en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

The user using **gsql**  must have the permission to access the database.

## Background<a name="en-us_topic_0059779027_sec8c9233ebad4d6da06846cb31af1f44"></a>

You can use the  **gsql**  command to connect to the local database or remote database. When connecting to the remote database, enable remote connection on the server. For details, see  [Gsql Connection and Usage](../GettingStarted/gsql-connection-and-usage.md).
## Procedure<a name="en-us_topic_0059779027_s88b93467806944068b85cf2ec928ae02"></a>

1.  Connect to the openGauss server using the  **gsql**  tool.

    The  **gsql**  tool uses the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, and the  **-p**  parameter to specify the port number.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the database name is not specified, the default database name generated during initialization will be used. If the database username is not specified, the current OS username will be used by default. If a variable does not belong to any parameter \(such as  **-d**  and  **-U**\), and  **-d**  is not specified, the variable will be used as the database name. If  **-d**  is specified but  **-U**  is not specified, the variable will be used as the database username.

    Example 1: Connect to the 8000 port of the local postgres database as user  **omm**.

    ```
    gsql -d postgres -p 8000
    ```

    Example 2: Connect to the 8000 port of the remote postgres database as user  **jack**.

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000
    ```

    In a centralized cluster, when connecting to the primary DN, you can use commas \(,\) to separate the IP addresses of DNs and add them to the end of  **-h**.  **gsql**  connects to each IP address in sequence to check whether the current DN is the primary DN. If no,  **gsql**  disconnects from the current IP address and attempts to connect to the next IP address until the primary DN is found.

    ```
    gsql -h 10.180.123.163,10.180.123.164,10.180.123,165 -d postgres -U jack -p 8000
    ```

    Example 3:  _postgres_  and  _omm_  do not belong to any parameter, and they are used as the database name and the username, respectively.

    ```
    gsql postgres omm -p 8000
    ```

    **Equals**

    ```
    gsql -d postgres -U omm -p 8000
    ```

    For details about the  **gsql**  parameters, see  [Command Reference](command-reference.md).

2.  Run a SQL statement.

    The following takes creating database  **human\_staff**  as an example:

    ```
    CREATE DATABASE human_staff;
    CREATE DATABASE
    ```

    Ordinarily, input lines end when a command-terminating semicolon is reached. If the command is sent and executed without any error, the command output is displayed on the screen.

3.  Execute gsql meta-commands.

    The following takes all openGauss databases and description information as an example:

    ```
    openGauss=# \l
                                    List of databases
          Name      |  Owner   | Encoding  | Collate | Ctype |   Access privileges   
    ----------------+----------+-----------+---------+-------+-----------------------
     human_resource | omm | SQL_ASCII | C       | C     | 
     postgres       | omm | SQL_ASCII | C       | C     | 
     template0      | omm | SQL_ASCII | C       | C     | =c/omm         +
                    |          |           |         |       | omm=CTc/omm
     template1      | omm | SQL_ASCII | C       | C     | =c/omm          +
                    |          |           |         |       | omm=CTc/omm
     human_staff    | omm | SQL_ASCII | C       | C     | 
    (5 rows)
    ```

    For details about  **gsql**  meta-commands, see  [Meta-Command Reference](meta-command-reference.md).


## Example<a name="en-us_topic_0059779027_sa12a135ee93d4bfa8fcbf57ae87b805d"></a>

The example shows how to spread a command over several lines of input. Note the prompt change:

```
openGauss=# CREATE TABLE HR.areaS(
openGauss(# area_ID   NUMBER,
openGauss(# area_NAME VARCHAR2(25)
openGauss-# )tablespace EXAMPLE;
CREATE TABLE
```

Query the table definition:

```
openGauss=# \d HR.areaS
               Table "hr.areas"
  Column   |         Type          | Modifiers 
-----------+-----------------------+-----------
 area_id   | numeric               | not null
 area_name | character varying(25) | 
```

Insert four lines of data into  **HR.areaS**.

```
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (1, 'Europe');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (2, 'Americas');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (3, 'Asia');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (4, 'Middle East and Africa');
INSERT 0 1
```

Change the prompt.

```
openGauss=# \set PROMPT1 '%n@%m %~%R%#'
omm@[local] openGauss=#
```

Query the table:

```
omm@[local] openGauss=# SELECT * FROM HR.areaS;
 area_id |       area_name        
---------+------------------------
       1 | Europe
       4 | Middle East and Africa
       2 | Americas
       3 | Asia
(4 rows)
```

Use the  **\\pset**  command to display the table in different ways:

```
omm@[local] openGauss=# \pset border 2
Border style is 2.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
```

```
omm@[local] openGauss=# \pset border 0
Border style is 0.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
```

Use the meta-command:

```
omm@[local] openGauss=# \a \t \x
Output format is unaligned.
Showing only tuples.
Expanded display is on.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
area_id|2
area_name|Americas

area_id|1
area_name|Europe

area_id|4
area_name|Middle East and Africa

area_id|3
area_name|Asia
omm@[local] openGauss=#
```

