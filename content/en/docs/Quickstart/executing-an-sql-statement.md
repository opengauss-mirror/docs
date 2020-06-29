# Executing an SQL Statement<a name="EN-US_TOPIC_0241704267"></a>

Use the client tool to connect to openGauss and execute an SQL statement.

## Prerequisites<a name="en-us_topic_0241234243_en-us_topic_0085434673_en-us_topic_0059782025_section47789530115226"></a>

You have connected to openGauss using the client tool. For details about the connection method, see  [Connecting to a Database Locally](connecting-to-a-database-locally.md).

## Procedure<a name="en-us_topic_0241234243_section69631937151618"></a>

Method 1:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Connect to the openGauss server using the  **gsql**  tool.

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000 -r
    ```

    Use the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, and the  **-p**  parameter to specify the port number.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >If the database name is not specified, the default database name generated during initialization will be used. If the database username is not specified, the current OS username will be used by default. If a variable does not belong to any parameter \(such as  **-d**  and  **-U**\), and  **-d**  is not specified, the variable will be used as the database name. If  **-d**  is specified but  **-U**  is not specified, the variable will be used as the database username.  

3.  Run a SQL statement.

    The following takes creating database  **human\_staff**  as an example:

    ```
    CREATE DATABASE human_staff;
    CREATE DATABASE
    ```

    Ordinarily, input lines end when a command-terminating semicolon is reached. If the command is sent and executed without any error, the command output is displayed on the screen.


Method 2:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following SQL statement:

    ```
    gsql -d postgres -h 10.29.103.168 -U jack -p 8000 -W Gauss@123 -c 'CREATE DATABASE human_staff'
    ```

    The  **gsql**  tool uses the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, the  **-p**  parameter to specify the port number, and the  **-c**  parameter to specify the SQL statement to be executed. To run this statement, you must have corresponding permissions.


