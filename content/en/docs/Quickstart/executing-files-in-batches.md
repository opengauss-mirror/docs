# Executing Files in Batches<a name="EN-US_TOPIC_0241704268"></a>

Use the client tool to connect to openGauss and execute files in batches.

## Prerequisites<a name="en-us_topic_0241234244_en-us_topic_0085434673_en-us_topic_0059782025_section47789530115226"></a>

You have connected to openGauss using the client tool. For details about the connection method, see  [en-us\_topic\_0241704253.md](en-us_topic_0241704253.md)  and  [Connecting to a Database Remotely](connecting-to-a-database-remotely.md).

## Procedure<a name="en-us_topic_0241234244_section69631937151618"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Use  **gsql**  to connect to the target database and use files as the command source instead of interactively-entered commands. After the files are processed,  **gsql**  exits.

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000 -f /home/omm/staff.sql
    ```

    The  **gsql**  tool uses the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, the  **-p**  parameter to specify the port number, and the  **-f**  parameter to specify the file name \(an absolute path or relative path that meets the OS path naming convention\).

    This command is used to connect to port  **8000**  of database  **postgres**  on a remote host as user  **jack**, and the  **staff.sql**  file is used as the command source.


