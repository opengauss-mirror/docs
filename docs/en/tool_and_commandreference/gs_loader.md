# gs\_loader<a name="ZH-CN_TOPIC_0000001705427697"></a>

## Overview<a name="section191131516122118"></a>

The gs\_loader tool is used for data import. `gs\_loader` converts the syntax supported by the control file into `\COPY` syntax, and then uses the existing `\COPY` functionality to perform the main data import work. At the same time, `gs\_loader` records the `\COPY` results in log files.

Before using `gs\_loader`, ensure that the `gs\_loader` version is consistent with the gsql version and the database version.

>[!NOTE] Note
> The `gs\_loader` tool does not support M-Compatibility databases.
> The `gs\_loader` tool supports PDB.

## Installation and Deployment<a name="section940725313438"></a>

Install and configure the `gs\_loader` client on the server where the data source files are stored, so that you can use the `gs\_loader` tool to import data.

1. Create a directory to store the `gs\_loader` tool package.

    ```
    mkdir -p /opt/bin
    ```

2. Upload the gsql tool package to the newly created directory.

    Take uploading the EULER Linux version tool package as an example. Upload the gsql tool package "GaussDB-Kernel\_*Database\_Version\_Number*\_*OS\_Version\_Number*\_64bit\_gsql.tar.gz" from the software installation package to the newly created directory.

3. In the directory where the tool package is located, decompress the tool package.

    ```
    cd /opt/bin
    tar -zxvf GaussDB-Kernel_Database_Version_Number_OS_Version_Number_64bit_gsql.tar.gz
    source gsql_env.sh
    ```

4. Verify the tool location and version information.

    ```
    which gs_loader
    ```

5. Verify the client version information.

    The `gs\_loader` tool version corresponds to the gsql tool version. You can directly query the gsql client version to verify the client version information.

    ```
    gsql -V
    ```

6. Verify the database version information to ensure consistency with the client tool version.

    After successfully connecting to the database using the gsql tool, enter:

    ```
    select version();
    ```

## Log Level Configuration<a name="section346168183816"></a>

Setting the log level allows developers to view related information. After setting, the corresponding information of the tool's runtime will be printed on the console.

```
export gs_loader_log_level=debug
export gs_loader_log_level=info
export gs_loader_log_level=warning
export gs_loader_log_level=error
```

## Usage Permissions<a name="section1472611151954"></a>

Usage scenarios are divided into scenarios with separation of duties enabled and scenarios without separation of duties enabled. Users can set the GUC parameter `enableSeparationOfDuty` to `on` or `off` to control the enabling or disabling of the separation of duties feature.

The GUC parameter `enable_copy_error_log` controls whether to use the error table `pgxc_copy_error_log`. The default value is `off`, which means the error table is not used, and error records are directly recorded in the bad file of `gs\_loader`. If this parameter is set to `on`, the error table `pgxc_copy_error_log` will be used, and error records will be inserted into the error table.

In the default scenario, when separation of duties is not enabled (i.e., `enableSeparationOfDuty=off`), the user can be a database ordinary user or an administrator user. When the user is an ordinary user, the administrator user needs to grant permissions to the ordinary user. Administrator accounts can be used directly. The error table `pgxc_copy_error_log` is controlled by the GUC parameter `enable_copy_error_log` to enable or disable, and is disabled by default.

1. Create a new user using the administrator user:

    ```
    CREATE USER load_user WITH PASSWORD '************';
    ```

2. Grant permissions on the public schema to the new user:

    ```
    GRANT ALL ON SCHEMA public TO load_user;
    ```

3. Create the `gs_copy_summary` table and grant permissions to the new user:

    >[!NOTE] Note
    > The `gs_copy_summary` table must not contain objects such as RULE, TRIGGER, index functions, row-level access control, CHECK constraints, GENERATED columns, DEFAULT columns, or ON UPDATE columns that may cause privilege escalation. Otherwise, it will be considered as created by a malicious user and an error will be reported and the process will exit.

    ```
    SELECT copy_summary_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='gs_copy_summary');
    GRANT INSERT,SELECT ON  public.gs_copy_summary To load_user;
    ```

4. (Optional) Create the `pgxc_copy_error_log` error table and grant permissions to the new user:

    >[!NOTE] Note
    > - If the GUC parameter `enable_copy_error_log` is not set (default is off), or is set to off, the error table is not needed and does not need to be created. Otherwise, this error table needs to be created.
    > - The `pgxc_copy_error_log` table must not contain objects such as RULE, TRIGGER, index functions, row-level access control, CHECK constraints, GENERATED columns, DEFAULT columns, or ON UPDATE columns that may cause privilege escalation. Otherwise, it will be considered as created by a malicious user and an error will be reported and the process will exit.

    ```
    SELECT copy_error_log_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='pgxc_copy_error_log');
    GRANT INSERT,SELECT,DELETE ON  public.pgxc_copy_error_log To load_user;
    ```

When separation of duties is enabled (i.e., `enableSeparationOfDuty=on`), the user can be a database ordinary user or an administrator user. Before use, you need to create the `pgxc_copy_error_log` table and the `gs_copy_summary` table under their respective schemas and add indexes. No further authorization is required.

1. Create a new user using the initial user:

    ```
    CREATE USER load_user WITH PASSWORD '********';
    ```

2. Switch from the initial user to the new user:

    ```
    \c - load_user
    ```

3. Create the `gs_copy_summary` table and add an index:

    ```
    CREATE TABLE load_user.gs_copy_summary(relname varchar, begintime timestamptz, endtime timestamptz, id bigint, pid bigint, readrows bigint, skiprows bigint, loadrows bigint, errorrows bigint, whenrows bigint, allnullrows bigint, detail text);
    CREATE INDEX gs_copy_summary_idx ON load_user.gs_copy_summary(id);
    ```

4. (Optional) Create the `pgxc_copy_error_log` table and add an index:

    >[!NOTE] Note
    > 1. If the GUC parameter `enable_copy_error_log` is not set (default is off), or is set to off, the error table is not needed and does not need to be created. Otherwise, this error table needs to be created.

    ```
    CREATE TABLE load_user.pgxc_copy_error_log (relname varchar, begintime timestamptz, filename varchar, lineno int8, rawrecord text, detail text);
    CREATE INDEX copy_error_log_relname_idx ON load_user.pgxc_copy_error_log(relname);
    ```

## Usage Environment<a name="section4171702718"></a>

Users need to add the tool path to the PATH environment variable by themselves. gs\_loader supports SSL encrypted communication. The usage method is the same as that of gsql. For specific operations, please refer to the "Security Management" chapter in the *Administrator Guide*.

## New System Tables<a name="section1163793633413"></a>

A new `gs_copy_summary` table is added to record the COPY execution result summary, including the number of successful rows, error rows, skipped rows, and all-null rows.

New function: `copy_summary_create` is used to create the `gs_copy_summary` table.

The format of the `gs_copy_summary` table is as follows:

```
relname     | public.sqlldr_tbl
begintime   | 2021-09-03 16:00:11.7129-04
endtime     | 2021-09-03 16:00:15.259908-04
id          | 21870
pid         | 47582725060352
readrows    | 100000
skiprows    | 0
loadrows    | 111
errorrows   | 0
whenrows    | 99889
allnullrows | 0
detail      | 111 Rows successfully loaded.
            | 0 Rows not loaded due to data errors.
            | 99889 Rows not loaded because all WHEN clauses were failed.
            | 0 Rows not loaded because all fields were null.
            |
```

## Field Description of the System Table gs\_copy\_summary<a name="section114775229118"></a>

**Table 1** Field Description of gs\_copy\_summary

<a name="zh-cn_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>Field</p>
</th>
<th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>Target table name for this import</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1176174741516"><a name="p1176174741516"></a><a name="p1176174741516"></a>begintime</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>Start time of the import task</p>
</td>
</tr>
<tr id="row867212439206"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1672164372018"><a name="p1672164372018"></a><a name="p1672164372018"></a>endtime</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p5672134311201"><a name="p5672134311201"></a><a name="p5672134311201"></a>End time of the import task</p>
</td>
</tr>
<tr id="row1315216487206"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p6152194812208"><a name="p6152194812208"></a><a name="p6152194812208"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1715294802011"><a name="p1715294802011"></a><a name="p1715294802011"></a>Transaction ID of this import</p>
</td>
</tr>
<tr id="row1970323914202"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p4382115522018"><a name="p4382115522018"></a><a name="p4382115522018"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p670313962014"><a name="p670313962014"></a><a name="p670313962014"></a>Worker thread ID of this import</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>readrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>Total number of data rows read in this import task</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>skiprows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1890619360101"><a name="p1890619360101"></a><a name="p1890619360101"></a>Total number of data rows skipped in this import task</p>
</td>
</tr>
<tr id="row9261132142111"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1226183219218"><a name="p1226183219218"></a><a name="p1226183219218"></a>loadrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1547354917101"><a name="p1547354917101"></a><a name="p1547354917101"></a>Number of data rows successfully imported in this import task</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>errorrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p5599657117"><a name="p5599657117"></a><a name="p5599657117"></a>Number of error data rows in this import task</p>
</td>
</tr>
<tr id="row6900256191710"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1190012569173"><a name="p1190012569173"></a><a name="p1190012569173"></a>whenrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p16759202214112"><a name="p16759202214112"></a><a name="p16759202214112"></a>Number of data rows that violated the WHEN filter condition in this import task</p>
</td>
</tr>
<tr id="row157411464172"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1575184618173"><a name="p1575184618173"></a><a name="p1575184618173"></a>allnullrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1857512465175"><a name="p1857512465175"></a><a name="p1857512465175"></a>Number of data rows where all fields are null</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p455831219181"><a name="p455831219181"></a><a name="p455831219181"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p58811742191812"><a name="p58811742191812"></a><a name="p58811742191812"></a>Summary of the import situation for this import task. It mainly includes the number of successfully imported rows, error data rows, rows violating the WHEN condition, and rows with all fields being null.</p>
</td>
</tr>
</tbody>
</table>

## Usage Guide<a name="section2511450105813"></a>

1. (Without separation of duties) For ordinary users only.
    1. (Under the administrator user) Create a user:

        ```
        CREATE USER load_user WITH PASSWORD '************';
        ```

    2. (Under the administrator user) Grant permissions on the public schema to the user:

        ```
        GRANT ALL ON SCHEMA public TO load_user;
        ```

    3. (Under the administrator user) Create the `gs_copy_summary` table and grant permissions to the user:

        ```
        SELECT copy_summary_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='gs_copy_summary');
        GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
        ```

    4. (Optional, under the administrator user) Create the `pgxc_copy_error_log` error table and grant permissions to the user:

        >[!NOTE] Note
        > If the GUC parameter `enable_copy_error_log` is not set (default is off), or is set to off, the error table is not needed and does not need to be created. Otherwise, this error table needs to be created.

        ```
        SELECT copy_error_log_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='pgxc_copy_error_log');
        GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
        ```

    5. Switch user.

        ```
        \c - load_user
        ```

2. (With separation of duties) For both ordinary users and administrator users.
    1. (Under the initial user) Create a user:

        ```
        CREATE USER load_user WITH PASSWORD '********';
        ```

    2. (Under the initial user) Switch to the `load_user` user:

        ```
        \c - load_user
        ```

    3. Create the `gs_copy_summary` table and add an index.

        ```
        CREATE TABLE load_user.gs_copy_summary(relname varchar, begintime timestamptz, endtime timestamptz, id bigint, pid bigint, readrows bigint, skiprows bigint, loadrows bigint, errorrows bigint, whenrows bigint, allnullrows bigint, detail text);
        CREATE INDEX gs_copy_summary_idx ON load_user.gs_copy_summary(id);
        ```

    4. (Optional) Create the `pgxc_copy_error_log` table and add an index.

        >[!NOTE] Note
        > If the GUC parameter `enable_copy_error_log` is not set (default is off), or is set to off, the error table is not needed and does not need to be created. Otherwise, this error table needs to be created.

        ```
        CREATE TABLE load_user.pgxc_copy_error_log (relname varchar, begintime timestamptz, filename varchar, lineno int8, rawrecord text, detail text);
        CREATE INDEX copy_error_log_relname_idx ON load_user.pgxc_copy_error_log(relname);
        ```

3. Create tables and control files, and prepare data files.

    Create the `loader_tbl` table.

    ```
    CREATE TABLE  loader_tbl
    (
        ID   NUMBER,
        NAME VARCHAR2(20),
        CON  VARCHAR2(20),
        DT   DATE
    );
    ```

    (On the gs\_loader client machine) Create the control file `loader.ctl`.

    ```
    LOAD DATA
    truncate into table loader_tbl
    WHEN (2:2) = ','
    fields terminated by ','
    trailing nullcols
    (
        id integer external,
        name char(32),
        con ":id || '-' || :name",
        dt date
    )
    ```

    (On the gs\_loader client machine) Create the GUC parameter file `guc.txt`.

    ```
    set a_format_copy_version='s1';
    ```

    (On the gs\_loader client machine) Create the data file `data.csv`.

    ```
    1,OK,,2007-07-8
    2,OK,,2008-07-8
    3,OK,,2009-07-8
    4,OK,,2007-07-8
    43,DISCARD,,2007-07-8
    ,,,
    32,DISCARD,,2007-07-8
    a,ERROR int,,2007-07-8
    8,ERROR date,,2007-37-8
    ,,,,
     ,
    8,ERROR fields,,2007-37-8
    ,,,
    5,OK,,2021-07-30
    ```

4. Perform the import.

    (On the gs\_loader client machine) Before executing the import, first confirm that the gs\_loader tool has executable permissions. Ensure that the current path has file write permissions (gs\_loader generates some temporary files during processing, which are automatically deleted after the import is completed).

    ```
    gs_loader control=loader.ctl data=data.csv db=testdb bad=loader.bad guc_param=guc.txt errors=5 port=8000 passwd=************ user=load_user
    ```

    Execution result:

    ```
    gs_loader: version 0.1

     5 Rows successfully loaded.

    log file is:
     loader.log
    ```

>[!NOTE] Note
> `gs_copy_summary` is used to record the called COPY syntax and its details. The `_bad.log` file is used to record error data and its details. To prevent error data and details recorded during the previous import from being overwritten, it is recommended to use different bad parameters each time you perform an import. If you use the error table `pgxc_copy_error_log` to record error data and its details, please enable the GUC parameter `enable_copy_error_log`. If you need to delete data in the above tables, you can perform the `truncate` or `delete` operation on these tables.

## Parameter Description<a name="section790261685316"></a>

**Table 2** gs\_loader Parameter Description

<a name="table179851345114513"></a>
<table><thead align="left"><tr id="row1398510451455"><th class="cellrowborder" valign="top" width="17.7017701770177%" id="mcps1.2.4.1.1"><p id="p13986545134518"><a name="p13986545134518"></a><a name="p13986545134518"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="50.18501850185019%" id="mcps1.2.4.1.2"><p id="p898654564514"><a name="p898654564514"></a><a name="p898654564514"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.11321132113211%" id="mcps1.2.4.1.3"><p id="p3986745154513"><a name="p3986745154513"></a><a name="p3986745154513"></a>Parameter Type : Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row8986114511457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p14986174519451"><a name="p14986174519451"></a><a name="p14986174519451"></a>help</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p09861745174518"><a name="p09861745174518"></a><a name="p09861745174518"></a>View help information.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p20986545134518"><a name="p20986545134518"></a><a name="p20986545134518"></a>-</p>
</td>
</tr>
<tr id="row3986144594510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p598664511452"><a name="p598664511452"></a><a name="p598664511452"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p498664516458"><a name="p498664516458"></a><a name="p498664516458"></a>Database connection user (equivalent to -U).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1898694544520"><a name="p1898694544520"></a><a name="p1898694544520"></a>String</p>
</td>
</tr>
<tr id="row0212181404715"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p521211414710"><a name="p521211414710"></a><a name="p521211414710"></a>-U</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p172125145472"><a name="p172125145472"></a><a name="p172125145472"></a>Database connection user (equivalent to user).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p52121014154716"><a name="p52121014154716"></a><a name="p52121014154716"></a>String</p>
</td>
</tr>
<tr id="row2098694524517"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p79860451459"><a name="p79860451459"></a><a name="p79860451459"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p59861945114516"><a name="p59861945114516"></a><a name="p59861945114516"></a>User password (equivalent to -W).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1898684544518"><a name="p1898684544518"></a><a name="p1898684544518"></a>String</p>
</td>
</tr>
<tr id="row42933619474"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p192953654716"><a name="p192953654716"></a><a name="p192953654716"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p42918364479"><a name="p42918364479"></a><a name="p42918364479"></a>User password (equivalent to passwd).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p3293361479"><a name="p3293361479"></a><a name="p3293361479"></a>String</p>
</td>
</tr>
<tr id="row098624517451"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p59869456454"><a name="p59869456454"></a><a name="p59869456454"></a>db</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p2986134524514"><a name="p2986134524514"></a><a name="p2986134524514"></a>Database name (mandatory, equivalent to -d).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1098624511451"><a name="p1098624511451"></a><a name="p1098624511451"></a>String</p>
</td>
</tr>
<tr id="row59561220453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p396121294510"><a name="p396121294510"></a><a name="p396121294510"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p109631217453"><a name="p109631217453"></a><a name="p109631217453"></a>Database name (mandatory, equivalent to db).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1896121215451"><a name="p1896121215451"></a><a name="p1896121215451"></a>String</p>
</td>
</tr>
<tr id="row12986345124519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p12986114515454"><a name="p12986114515454"></a><a name="p12986114515454"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p3986194518452"><a name="p3986194518452"></a><a name="p3986194518452"></a>Specifies the host name, Unix domain socket path, or domain name of the running server. Accepts a comma-separated string to specify multiple host addresses. Supports specifying multiple host addresses (equivalent to -h).</p>
<p id="p4148711181113"><a name="p4148711181113"></a><a name="p4148711181113"></a>When multiple host addresses are specified, the connection to the primary node is selected by default.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1998617459458"><a name="p1998617459458"></a><a name="p1998617459458"></a>Refer to gsql --host parameter</p>
</td>
</tr>
<tr id="row17120154013454"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1512114017451"><a name="p1512114017451"></a><a name="p1512114017451"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1934232093"><a name="p1934232093"></a><a name="p1934232093"></a>Specifies the host name, Unix domain socket path, or domain name of the running server. Accepts a comma-separated string to specify multiple host addresses. Supports specifying multiple host addresses (equivalent to host).</p>
<p id="p1693419321994"><a name="p1693419321994"></a><a name="p1693419321994"></a>When multiple host addresses are specified, the connection to the primary node is selected by default.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p71214405452"><a name="p71214405452"></a><a name="p71214405452"></a>Refer to gsql --host parameter</p>
</td>
</tr>
<tr id="row16986144512453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p998704594520"><a name="p998704594520"></a><a name="p998704594520"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p13987144514458"><a name="p13987144514458"></a><a name="p13987144514458"></a>Specifies the port number of the database server. You can configure one or more ports. When one port is configured, all IPs use the same port for connection. When multiple ports are configured, the order is the same as the IP order, and the number must be equal to the number of IPs. An error will be reported if they are not equal (equivalent to -p).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p798734504512"><a name="p798734504512"></a><a name="p798734504512"></a>Refer to gsql --port reference</p>
</td>
</tr>
<tr id="row1581794110464"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1781794174616"><a name="p1781794174616"></a><a name="p1781794174616"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p181718418465"><a name="p181718418465"></a><a name="p181718418465"></a>Specifies the port number of the database server. You can configure one or more ports. When one port is configured, all IPs use the same port for connection. When multiple ports are configured, the order is the same as the IP order, and the number must be equal to the number of IPs. An error will be reported if they are not equal (equivalent to port).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p381710413468"><a name="p381710413468"></a><a name="p381710413468"></a>Refer to gsql --port reference</p>
</td>
</tr>
<tr id="row4987174511455"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p16987445174518"><a name="p16987445174518"></a><a name="p16987445174518"></a>create</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p79871545204510"><a name="p79871545204510"></a><a name="p79871545204510"></a>Whether to create the pgxc_copy_error_log and gs_copy_summary tables.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p19871545124517"><a name="p19871545124517"></a><a name="p19871545124517"></a>[true, false], default true</p>
</td>
</tr>
<tr id="row1498744515453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p9987204517454"><a name="p9987204517454"></a><a name="p9987204517454"></a>clean</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1398724511451"><a name="p1398724511451"></a><a name="p1398724511451"></a>Whether to clear the error records of this import.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p12987164518457"><a name="p12987164518457"></a><a name="p12987164518457"></a>[true, false], default false</p>
</td>
</tr>
<tr id="row1098711459457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p159871345104512"><a name="p159871345104512"></a><a name="p159871345104512"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p998724524513"><a name="p998724524513"></a><a name="p998724524513"></a>Data file. You can specify multiple files, or use multi-character wildcards (*) and single-character wildcards (?) (mandatory).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1698734511453"><a name="p1698734511453"></a><a name="p1698734511453"></a>String</p>
</td>
</tr>
<tr id="row698715453458"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p159871845184517"><a name="p159871845184517"></a><a name="p159871845184517"></a>control</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p16987104594518"><a name="p16987104594518"></a><a name="p16987104594518"></a>Control file name (mandatory).</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p6987164515458"><a name="p6987164515458"></a><a name="p6987164515458"></a>String</p>
</td>
</tr>
<tr id="row19871945124510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p69876459458"><a name="p69876459458"></a><a name="p69876459458"></a>log</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p5987194584512"><a name="p5987194584512"></a><a name="p5987194584512"></a>Log file name.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p20987745174516"><a name="p20987745174516"></a><a name="p20987745174516"></a>String</p>
</td>
</tr>
<tr id="row1898724564519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p0987845174519"><a name="p0987845174519"></a><a name="p0987845174519"></a>bad</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1098774584515"><a name="p1098774584515"></a><a name="p1098774584515"></a>File name for recording error rows and details. You can also specify a directory. If not specified, it will be generated based on the data file name.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p4987184518454"><a name="p4987184518454"></a><a name="p4987184518454"></a>String</p>
</td>
</tr>
<tr id="row1498704574516"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p89881545154517"><a name="p89881545154517"></a><a name="p89881545154517"></a>discard</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p598811456452"><a name="p598811456452"></a><a name="p598811456452"></a>File name for recording rows that failed the WHEN match. You can also specify a directory. Generated based on the data file name.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1988164564510"><a name="p1988164564510"></a><a name="p1988164564510"></a>String</p>
</td>
</tr>
<tr id="row1798894564511"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p17988134544515"><a name="p17988134544515"></a><a name="p17988134544515"></a>errors</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p2988174534512"><a name="p2988174534512"></a><a name="p2988174534512"></a>Number of error rows allowed in the data file.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p79881845174514"><a name="p79881845174514"></a><a name="p79881845174514"></a>Integer, default 0</p>
</td>
</tr>
<tr id="row7988154584512"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1098854584514"><a name="p1098854584514"></a><a name="p1098854584514"></a>skip</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p10988154524517"><a name="p10988154524517"></a><a name="p10988154524517"></a>Number of rows to skipp at the beginning of the data file.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p9988845204511"><a name="p9988845204511"></a><a name="p9988845204511"></a>Integer, default 0</p>
</td>
</tr>
<tr id="row13729115165519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p872919510557"><a name="p872919510557"></a><a name="p872919510557"></a>limit</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1372915565510"><a name="p1372915565510"></a><a name="p1372915565510"></a>Specifies the maximum number of rows to import.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p187291652551"><a name="p187291652551"></a><a name="p187291652551"></a>Integer, default unlimited</p>
</td>
</tr>
<tr id="row898815458452"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p39882045174510"><a name="p39882045174510"></a><a name="p39882045174510"></a>bindsize</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p17988345154516"><a name="p17988345154516"></a><a name="p17988345154516"></a>Syntax compatibility only, no functional implementation.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p2098814510456"><a name="p2098814510456"></a><a name="p2098814510456"></a>-</p>
</td>
</tr>
<tr id="row698816455456"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p15988745134513"><a name="p15988745134513"></a><a name="p15988745134513"></a>rows</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p7988134504516"><a name="p7988134504516"></a><a name="p7988134504516"></a>Multi-row commit parameter. Specifies how many rows of data to import before performing a commit.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p898816459459"><a name="p898816459459"></a><a name="p898816459459"></a>Integer, value range [1, 2147483647]</p>
</td>
</tr>
<tr id="row173032021164111"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p830316219413"><a name="p830316219413"></a><a name="p830316219413"></a>compatible_nul</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p230310210418"><a name="p230310210418"></a><a name="p230310210418"></a>Whether to enable NUL character (0x00) compatibility in data. When enabled, when a NUL character exists in the data file, it will first be converted to a space character ' ' (0x20), and then judgment, processing, and import will be performed.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p9303122110416"><a name="p9303122110416"></a><a name="p9303122110416"></a>[true, false], default true.</p>
</td>
</tr>
<tr id="row178931235103510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p13894143573512"><a name="p13894143573512"></a><a name="p13894143573512"></a>compatible_illegal_chars</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p13894163520358"><a name="p13894163520358"></a><a name="p13894163520358"></a>Whether to enable illegal character fault tolerance. The fault tolerance rules and restrictions are the same as those of the `COMPATIBLE_ILLEGAL_CHARS` parameter in the COPY syntax. For details, see `COMPATIBLE_ILLEGAL_CHARS` in `COPY_OPTION` in **SQL Reference > SQL Syntax > COPY**.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p13894135173511"><a name="p13894135173511"></a><a name="p13894135173511"></a>[true, false], default false.</p>
</td>
</tr>
<tr id="row1356716301364"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p35671830173619"><a name="p35671830173619"></a><a name="p35671830173619"></a>parallel</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1656873014362"><a name="p1656873014362"></a><a name="p1656873014362"></a>Specifies the concurrency degree of parallel import. When the concurrency degree is greater than 1, it indicates that parallel import mode is enabled. When the concurrency degree is equal to 1, it is converted to serial import. The maximum concurrency degree is limited to no more than twice the number of CPU cores on the client. When the client runs in a container, since the number of CPUs obtained is that of the host, which may be more than what the container can actually use, it is recommended that users control the concurrency degree within twice the number of CPUs that the client can actually use. In addition, this capability is implemented through multi-threaded concurrent transactions, and the actual concurrency degree will be limited by the thread pool model of the server, and will also increase the pressure on the server. Please set the concurrency degree reasonably according to the actual situation.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p10568230163616"><a name="p10568230163616"></a><a name="p10568230163616"></a>Integer, value range [1, twice the number of CPU cores], default 1</p>
</td>
</tr>
<tr id="row1750042010358"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1501720133517"><a name="p1501720133517"></a><a name="p1501720133517"></a>binary</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1250117204357"><a name="p1250117204357"></a><a name="p1250117204357"></a>Whether the data file is a binary file exported through the binary mode of COPY.</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p4501142073511"><a name="p4501142073511"></a><a name="p4501142073511"></a>[true, false], default false.</p>
</td>
</tr>
</tbody>
</table>

>[!WARNING] Warning
>
>- All parameters are lowercase and uppercase is not supported. At the same time, it is compatible with the gsql login methods: -p port number, -h host, -d database, -U username, -W password.
>- When using the `rows` parameter, the number of commits should not exceed 1000, otherwise it will affect performance. The number of commits is approximately equal to the number of data rows in the data file divided by the value of the `rows` parameter. When the `rows` parameter is not specified, there is no default value for `rows`. It behaves as a single commit, that is, a transaction commit is performed after all data is imported into the table.
>- Frequent commits with small amounts of data will affect the performance of importing data. It is recommended to configure the value of the `rows` parameter reasonably to ensure that the amount of data committed each time is greater than 5MB. For a commonly used 16U128G specification machine, in a one-primary-two-standby deployment scenario, importing 13GB of data into a table with 5 fields, excluding network impact, the rate of multiple commits and a single commit (committing 5MB of data each time) is basically the same, around 10MB/s.
>- The `compatible_nul` parameter actually controls the setting of the GUC parameter `loader_support_nul_character` value:
> - `compatible_nul=true` corresponds to session-level `set loader_support_nul_character='s2'`.
> - `compatible_nul=false` corresponds to session-level `set loader_support_nul_character='s1'`.
>        It is recommended to set this parameter through the command line, and setting it through `compatible_nul` has a higher priority than setting it in `guc_param`.
>- Currently, gs\_loader only supports compatibility when NUL characters exist in data files, and does not support NUL characters in ctl control files. If NUL characters exist in ctl files, unpredictable problems will occur.
>- After specifying `binary=true`, the following requirements apply:
> - The data file must be a binary format data file exported through the BINARY mode in `\COPY`. However, the data files exported in this mode usually have poor compatibility and portability. It is recommended to use the `\COPY` statement directly for import.
> - gs\_loader will convert the syntax in the control file into the simplest syntax in BINARY mode of `\COPY`, that is, `\COPY table_name FROM 'binary_file_path' BINARY;` statement. Only the import mode, table name information in the control file, and the `control`, `data`, `binary`, `guc_param`, and database connection parameter information in the command line are parsed, and other parameter syntax is not parsed or takes effect.
> - The following requirements apply to the gs\_loader command line and control file:
>        - Character set configuration is not supported.
>        - WHEN condition filtering and DISCARD generation are not supported.
>        - Writing error data directly to the bad file when `enable_copy_error_log = off` is not supported. The default value of `errors` is unlimited, and encoding exception data will be recorded by default.
>        - CSV mode configuration is not supported. Specifying delimiters and enclosure characters is not supported. The `TRAILING NULLCOLS` syntax is not supported.
>        - Data type configuration, POSITION configuration, and column expression usage are not supported.
>        - FILLER, CONSTANT, SEQUENCE, and NULLIF parameters are not supported.
>        - The `skip`, `rows`, `compatible_nul`, and `compatible_illegal_chars` parameters are not supported.
>- When `parallel` is specified to be greater than 1:
> - When `binary=true` is also set, the `parallel` parameter becomes invalid and falls back to serial import.
> - Specifying `OPTIONALLY ENCLOSED BY` or `FIELDS CSV` in the control file is not supported.
> - Specifying `SEQUENCE` columns in the control file is not supported.
> - The order of data import cannot be guaranteed to be the same as the order in the data file. If there is an auto-increment column in the table, the order of the auto-increment column values after import cannot be guaranteed to be consistent with the order in the data file.
> - When used together with the `errors` parameter, the meaning of the `errors` parameter is the maximum number of error rows allowed for each subtask.
> - When used together with the `skip` parameter, the meaning of the `skip` parameter is the number of rows skipped at the beginning of the entire data file.
> - When used together with the `rows` parameter, batch commits are calculated independently by each subtask.
> - When there is no bottleneck in client CPU, memory, server CPU, memory, idle threads, and network bandwidth, compared to serial import, the performance improvement when the concurrency degree is 2/4/8 is not less than 1.5/3/5 times.
> - For each increase of 1 in concurrency, the client memory increases by about 10MB, and the server memory increases by about 35MB.
>- When the GUC parameter `support_zero_character` is set to `on`, it means that the database supports writing and reading of 0x00 characters. When gs\_loader imports data, 0x00 will be imported as it is, instead of being affected by other compatibility parameters and converted to 0x20.

## Control File<a name="section85571127195813"></a>

- Syntax Description:

    ```
    LOAD [ DATA ]
    [CHARACTERSET char_set_name]
    [INFILE [directory_path] [filename ] ]
    [BADFILE [directory_path] [filename ] ]
    [OPTIONS(name=value)]
    [{ INSERT | APPEND | REPLACE | TRUNCATE }]
    INTO TABLE table_name
    [{ INSERT | APPEND | REPLACE | TRUNCATE }]
    [FIELDS CSV]
    [TERMINATED [BY] { 'string' }]
    [OPTIONALLY ENCLOSED BY { 'string' }]
    [TRAILING NULLCOLS]
    [ WHEN { (start:end) | column_name } {= | !=} 'string' ]
    [(
    col_name [ [ POSITION ({ start:end }) ]  ["sql_string"] ] | [ FILLER [column_type [external] ] ] | [ CONSTANT "string" ] | [ SEQUENCE ( { COUNT | MAX | integer } [, incr] ) ]|[NULLIF (COL=BLANKS)]
    [, ...]
    )]
    ```

- Parameter Description:

    - **CHARACTERSET**

        Character set.

        Value range: String. Currently, it can be specified as 'AL32UTF8', 'zhs16gbk', 'zhs32gb18030'.

        Note: The character set specified by **CHARACTERSET** in the control file should be consistent with the encoding format of the file, otherwise an error will be reported or garbled data will be imported.

    - **INFILE**

        This keyword is currently invalid and needs to occupy a separate line in the control file. It will be ignored during runtime. Users need to specify the corresponding data file in the gs\_loader command line parameters.

    - **BADFILE**

        This keyword is currently invalid and will be ignored during runtime. If the badfile is not specified in the gs\_loader command line parameters, the corresponding badfile will be generated based on the corresponding control file name.

    - **OPTIONS**

        Among them, only the `skip` and `rows` functions take effect. `skip=n` means skipping the first n pieces of data during import, and `rows=n` means performing a commit after importing n rows of data. When both the command line and the control file are specified, the command line has a higher priority.

    - **INSERT | APPEND | REPLACE | TRUNCATE**

        Import mode.

        **INSERT**: If there is data in the table, an error will be reported.

        **APPEND:** Insert data directly.

        **REPLACE:** If there is data in the table, delete all data and then insert.

        **TRUNCATE:** If there is data in the table, delete all data and then insert.

        >[!NOTE] Note
        >- When writing the control file (.ctl), the import mode (INSERT | APPEND | REPLACE | TRUNCATE) can be specified both before and after the `INTO TABLE table_name` statement. The priority is: specifying the import mode after the `INTO TABLE table_name` statement has a higher priority than specifying it before the `INTO TABLE table_name` statement. The import mode specified after the `INTO TABLE table_name` statement will override the import mode specified before.
        >- When multiple gs\_loader sessions are opened to concurrently import data into the same table, it is recommended to import in APPEND mode. Using INSERT | REPLACE | TRUNCATE may cause import errors or incomplete data import.

    - **FIELDS CSV**

        Identifies the use of the CSV mode of COPY. In CSV mode, the default delimiter is a comma, and the default quote character is a double quote.

        >[!NOTE] Note
        >- In the current CSV mode, newline characters contained in double quotes are treated as part of the field data.
        >- In CSV mode, when the GUC parameter `a_format_copy_version` is set to 's1', leading spaces will be skipped. And when the first non-space character of a field is not an enclosed character, the enclosed setting is ignored. When the closing enclosed character is not matched and the end of the line is encountered first, an error will be reported.
        >- In CSV mode, when the GUC switch `support_zero_characters` for 0 characters is not turned on, if the `compatible_nul` or `compatible_illegal_chars` parameter is used to be compatible with the 0x00 character, since the conversion of 0x00 to 0x20 occurs before the skipping of leading spaces, the 0x00 character at the beginning of the field will be treated as 0x20 and deleted.

    - **table\_name**

        Name of the table (can be schema-qualified).

        Value range: Existing table name.

    - **TERMINATED [BY] \{ 'string' \}**

        String that separates fields in the file. The maximum length of the delimiter cannot exceed 10 bytes.

        Value range: Cannot contain any of the characters \.abcdefghijklmnopqrstuvwxyz0123456789. Setting the NUL character as a delimiter is not supported.

        Default: In text mode, the default is a horizontal tab. In CSV mode, it is a comma.

        >[!WARNING] Warning
        > When NUL character compatibility is enabled, i.e., `compatible_nul=true`, if the delimiter is specified as a space character ' ' (0x20), note that the delimiter to be judged is the space character already existing in the data file, not the space character converted from the NUL character.

    - **OPTIONALLY ENCLOSED BY \{ 'string' \}**

        Quote character in CSV format files.

        Default value: Double quote, only in CSV mode explicitly specified using the FIELDS CSV parameter.

        No default value in other modes.

        >[!NOTE] Note
        >- When setting **OPTIONALLY ENCLOSED BY \{ 'string' \}**, the left side of the data can be without a quote character. If there is a quote character, there must be an odd number of quote characters on both sides of the data, but the numbers do not have to be equal.
        >- Currently, only CSV mode supports **OPTIONALLY ENCLOSED BY \{ 'string' \}**. When **OPTIONALLY ENCLOSED BY \{ 'string' \}** is specified, it defaults to entering CSV mode.

    - **TRAILING NULLCOLS**

        How to handle multiple missing fields at the end of a line in the data source file during data loading.

        When the last one or more fields of a row of data are empty, they are treated as null values and imported into the table. If not set, an error will be reported that the field is empty, and this row of data will be treated as erroneous data.

    - **WHEN \{ \(start:end\) | column\_name \} \{= | !=\}**

        Filters rows based on the string from start to end, or filters by column name.

        Value range: String.

        >[!NOTE] Note
        >- When the GUC parameter `enable_copy_when_filler=on` (default), filtering based on FILLER type columns is supported. When the GUC parameter `enable_copy_when_filler=off`, it is not supported.
        >- Special characters such as '\0' and '\r' are not supported in the constant string after the WHEN condition.

    - **POSITION \((\{ start:end \})\)**

        Processes columns and obtains the corresponding string according to the range from start to end.

    - **"sql\_string"**

        Processes columns. Column expression. Calculates the value of the column according to the expression. See [Column Expressions](#li056719112099) for details.

        Value range: String.

    - **FILLER**

        Processes columns. If FILLER appears, this field is skipped.

        >[!NOTE] Note
        > Currently, FILLER cannot be used together with POSITION **\({ start:end }\)**.

    - **column\_type [external]**

        When importing data, different data types are used to process the data. See [Data Types](#li011619316102) for details.

    - **CONSTANT**

        Processes columns. Sets the inserted corresponding field to a constant.

        Value range: String.

    - **SEQUENCE \( \{ COUNT | MAX | integer \} \[, incr\] \)**

        Processes columns. Generates corresponding sequence values.

        - COUNT: Indicates calculation starting from the number of rows in the table.
        - MAX: Indicates calculation starting from the maximum value of this column in the table.
        - integer: Indicates calculation starting from the value specified by the user.
        - incr: Indicates the increment value each time.

    - **NULLIF**

        When `a_format_copy_version` is set to 's1', it returns NULL when the specified column data contains only blank characters, otherwise it returns trim(COL), which is equivalent to the column expression "nullif(trim(COL), '')".

        When `a_format_copy_version` is not set to 's1', it processes columns. In multi-row import scenarios, if no operations such as sysdate, constant, position, or column expressions are specified after the column name, the import operation will result in empty fields for columns where the NULLIF keyword is not specified.

        Currently, only the syntax `COL POSITION() CHAR NULLIF (COL=BLANKS)` is supported. For specific usage, see [NULLIF Usage Example](#li1413683033117).

    >[!WARNING] Warning
    >- OPTIONS, INFILE, and BADFILE are not supported, except in specific scenarios where no syntax error is reported.
    >- gs\_loader uses bad files to record error data. If the GUC parameter `enable_copy_error_log` is set to enable the error table, this data comes from the `rawrecord` field of the error table. Since the error table does not record `rawrecord` for errors that cannot be read with a certain encoding, an empty line is recorded in the bad file when this happens.
    >- When gs\_loader sets the GUC parameter `a_format_load_with_constraints_violation` to enable support for scenarios where constraint violations do not roll back, if the table has BEFORE/AFTER ROW INSERT triggers, the number of rows committed each time cannot exceed 10 million rows.
    >- When gs\_loader sets the GUC parameter `a_format_load_with_constraints_violation` to enable support for scenarios where constraint violations do not roll back, statement-level triggers are not supported.

- Corresponding data for empty bad files refers to the content of the error table by source file and line number (encoding sequences that cannot be recognized are not written to the bad file content, only empty lines are recorded).

    ```
    loader=# select * from pgxc_copy_error_log;
           relname        |           begintime           | filename | lineno | rawrecord |                     detail
    ----------------------+-------------------------------+----------+--------+-----------+-------------------------------------------------
     public.test_gsloader | 2023-02-09 09:20:33.646843-05 | STDIN    |      1 |           | invalid byte sequence for encoding "UTF8": 0xb4
    (1 row)
    // As shown in the above example, for the file corresponding to the loader, find the source data in the first line of the data text.
    ```

- <a name="li1413683033117"></a>NULLIF Usage Example

    ```
    // Create table
    create table gsloader_test_nullif(
    col1   varchar2(100) not null enable,
    col2   number(5,0) not null enable,
    col3   varchar2(200) not null enable,
    col4   varchar2(34) not null enable,
    col5   varchar2(750),
    col6   number(20,0),
    col7   varchar2(4000),
    col8   varchar2(200)
    );
    // Data file test.csv
    6007 17060072021-09-0360070001102010000000230          1        600700010000218               0        1        1        229465        3
    6007 17060072021-09-0360070001102010000000299          1        600700010000282               0        1        1        230467        3
    6007 17060072021-09-0360070001102010000000242          1        600700010000255               0        1        1        226400        3
    6007 17060072021-09-0360070001102010000000202          1        600700010000288               0        1        1        219107        3
    6007 17060072021-09-0360070001102010000000294          1        600700010000243               0        1        1        204404        3
    6007 17060072021-09-0360070001102010000000217          1        600700010000270               0        1        1        226644        3
    // Control file test.ctl
    LOAD DATA
    CHARACTERSET UTF8
    TRUNCATE
    INTO TABLE gsloader_test_nullif
    TRAILING NULLCOLS
    (COL1 POSITION(1:10) CHAR NULLIF (COL1 = BLANKS),
    COL2  POSITION(11:14) CHAR NULLIF (COL2 = BLANKS),
    COL3  POSITION(21:30) CHAR NULLIF (COL3 = BLANKS),
    COL4  POSITION(31:40) CHAR NULLIF (COL4 = BLANKS),
    COL5  sysdate,
    COL6,
    COL7,
    COL8 POSITION(71:80) CHAR NULLIF (COL8 = BLANKS))
    // Execute import
    gs_loader -p xxx host=xxx control=test.ctl  data=test.csv -d testdb -W xxx
    // Import result: Import successful
    loader=# select * from gsloader_test_nullif;
        col1    | col2 |    col3    |    col4    |        col5         | col6 | col7 |   col8
    ------------+------+------------+------------+---------------------+------+------+-----------
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000218
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000282
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000255
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000288
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000243
     6007 17060 |  720 | 0360070001 | 1020100000 | 2023-05-17 20:32:03 |      |      | 010000270
    (6 rows)
    ```

    From the data in the imported table, it can be seen that after using the NULLIF keyword, the columns specified with NULLIF operation and sysdate operation are imported normally, while the columns without specified operations have empty imported fields.

- <a name="li056719112099"></a>Column Expressions

    gs\_loader supports expression transformation and scenario extension for specified columns:

    ```
    ({ column_name [ data_type ] [ AS transform_expr ] } [, ...])
    ```

    Where `data_type` specifies the data type of the column in the expression parameters; `transform_expr` is the target expression, returning a result value consistent with the data type of the target column in the table.

    Examples:

    - Do not specify column type in the ctl file, source data does not meet column restrictions in the table (data type restrictions, data length restrictions).

        ```
        // Create table
        create table t_test(id int, text varchar(5));
        // Data file test.csv
        addf2,bbbbaaa,20220907,
        // Control file test.ctl
        Load Data
        TRUNCATE INTO TABLE t_test
        fields terminated by ','
        TRAILING NULLCOLS(
        id "length(trim(:id))",
        text "replace(trim(:text),'bbbb','aa')"
        )
        // guc_param file
        set a_format_copy_version='s1';
        // Execute import
        gs_loader -p xxx host=xxx control=test.ctl  data=test.csv -d testdb -W xxx guc_param=test_guc.txt
        // Import result: Import successful
        select * from t_test;
         id | text
        ----+-------
          5 | aaaaa
        (1 row)
        ```

    - Do not specify column type in the ctl file, implicit type conversion (involving implicit type conversion, it is recommended to add compatibility parameters).

        ```
        // Create table
        create table test(mes int, mes1 text, mes2 float8, mes3 timestamp with time zone, mes4 INTEGER);
        // Data file
        cat load_support_transform.data
        1,mmoo,12.6789,Thu Jan 01 15:04:28 1970 PST,32767
        2,yyds,180.883,Thu Jun 21 19:00:00 2012 PDT,32768
        // Control file
        cat load_support_transform.ctl
        Load Data
        TRUNCATE INTO TABLE test
        fields terminated by ','
        TRAILING NULLCOLS(
        mes,
        mes1 "mes1 || mes2",
        mes2 "mes2 + 1",
        mes3 "date_trunc('year', mes3)",
        mes4
        )
        // guc_param file
        cat test_guc.txt
        set a_format_copy_version='s1';
        set a_format_dev_version='s2';
        set a_format_version='10c';
        //Execute import
        gs_loader -p xxx host=xxx control=load_support_transform.ctl data=load_support_transform.data -d testdb -W xxx guc_param=test_guc.txt
        // Import result: Import successful
        select * from test;
         mes |    mes1     |  mes2   |          mes3          | mes4
        -----+-------------+---------+------------------------+-------
           1 | mmoo12.6789 | 13.6789 | 1970-01-01 00:00:00+08 | 32767
           2 | yyds180.883 | 181.883 | 2012-01-01 00:00:00+08 | 32768
        ```

- <a name="li011619316102"></a>Data Types

    Corresponding to `column_type [external]` in the control file. When loading data, different data types are used to process the data. In gs\_loader, data types can be divided into ordinary data types and special data types.

    - Ordinary Data Types
        - CHAR [(length)]:

            Reads data according to the field delimiter and converts it to the CHAR type to save the value. `length` indicates the maximum length of a single piece of data, in bytes. Usually, one character occupies one byte, and it can be omitted. It is divided into the following scenarios:

            - When the declaration of `length` is omitted, the value of `length` will inherit the maximum length value according to the declaration of `POSITION`.
            - When the length of `length` is declared, it will override the declaration of the maximum length in `POSITION`.
            - When the declaration of `length` and the declaration of `POSITION` are omitted, the length of `length` will be set according to the length between delimiters.
            - For the priority of length declaration: `length` > `POSITION` > delimiter.
            - When the declarations of `length`, `POSITION`, and delimiter are omitted, it will read from the current position to the end-of-line character.
            - If the actual data length exceeds the maximum length declared by `length`, an error will be reported.

        - INTEGER external [(length)]:

            Reads data according to the field delimiter and converts it to the INTEGER type to save the value. The usage rules of `length` are the same as those in the CHAR type.

        - FLOAT external [(length)]:

            Reads data according to the field delimiter and converts it to the FLOAT type to save the value. The usage rules of `length` are the same as those in the CHAR type.

        - DECIMAL external (length):

            Reads data according to the field delimiter and converts it to the DECIMAL type to save the value. The usage rules of `length` are the same as those in the CHAR type.

        - TIMESTAMP:

            Reads data according to the field delimiter and converts it to the TIMESTAMP type to save the value.

        - DATE:

            Reads data according to the field delimiter and converts it to the DATE type to save the value.

        - DATE external:

            Reads data according to the field delimiter and converts it to the DATE type to save the value.

        - SYSDATE:

            When the corresponding insertion is executed in the database, the system time is taken. The value corresponding to this field cannot be referenced and used. The referenced content is the SYSDATE string.

    - Special Data Types

        - INTEGER:

            Ignores the field delimiter, reads 4 bytes of characters, saves them according to little-endian storage logic, then parses each character into a hexadecimal ASCII code value, and finally converts the whole to a decimal number to save the value.

        - SMALLINT:

            Ignores the field delimiter, reads 2 bytes of characters, saves them according to little-endian storage logic, then parses each character into a hexadecimal ASCII code value, and finally converts the whole to a decimal number to save the value.

            Example:

            ```
            // Create table
            create table t_spec(col1 varchar(10), col2 varchar(10));
            // Data file
            cat t_spec.txt
            1234,5678,
            // Control file
            cat t_spec.ctl
            Load Data
            TRUNCATE INTO TABLE t_spec
            fields terminated by ','
            TRAILING NULLCOLS(
            col1 position(2:6) integer,
            col2 position(5:8) smallint
            )
            // guc_param file
            cat test_guc.txt
            set a_format_copy_version='s1';
            set a_format_dev_version='s2';
            set a_format_version='10c';
            // Execute import
            gs_loader -p xxx host=xxx control=t_spec.ctl data=t_spec.txt -d testdb -W xxx guc_param=test_guc.txt
            // Import result: Import successful
            select * from t_spec;
               col1    | col2
            -----------+-------
             741618482 | 13612
            (1 row)
            ```

        - RAW:

            Parses each character into an ASCII code value for storage. The escape character "\" does not perform escape operations.

            Restriction: RAW cannot use delimiters.

            Example:

            ```
            // Create table
            create table t_raw(col raw(50));
            // Data file
            cat t_raw.txt
            12\n\x78!<~?'k^(%s)>/c[$50]
            // Control file
            cat t_raw.ctl
            Load Data
            TRUNCATE INTO TABLE t_raw
            TRAILING NULLCOLS(
            col position(1:50) raw
            )
            // guc_param file
            cat test_guc.txt
            set a_format_copy_version='s1';
            set a_format_dev_version='s2';
            set a_format_version='10c';
            // Execute import
            gs_loader -p xxx host=xxx control=t_raw.ctl data=t_raw.txt -d testdb -W xxx guc_param=test_guc.txt
            // Import result: Import successful
            select * from t_raw;
                                      col
            --------------------------------------------------------
             31325C6E5C783738213C7E3F276B5E282573293E2F635B2435305D
            (1 row)
            ```

        >[!WARNING] Warning
        >- In multi-column import scenarios, when GUC parameters are not specified, position and delimiters cannot be used simultaneously for some cases.
        >- In multi-column import scenarios, SYSDATE and CONSTANT operations cannot be used together with POSITION operations.
        >- When specifying data types for import, ordinary data types require setting the `a_format_copy_version` parameter through `guc_param`, while special data types require setting `a_format_copy_version`, `a_format_dev_version`, and `a_format_version` parameters through `guc_param`.
        >- When column expressions involve system functions, appropriate `a_format_dev_version` and `a_format_version` parameters need to be set through `guc_param` according to the corresponding functions.
        >- For the use of data types with length, `length` must be specified as an integer greater than 0; the use of `RAW(length)` as a special type is different from that of ordinary types, such as `INTEGER EXTERNAL(length)`. When `position` is not specified, `INTEGER EXTERNAL(length)` behaves as follows: when `length` is less than the corresponding column data length in the text file (.csv/.txt, etc.), an error is reported; when `length` is greater than the corresponding column data length in the text file (.txt), the result of the `INTEGER EXTERNAL` type is output. `RAW(length)` behaves as reading `length` characters when `position` is not specified.
        >- When using `POSITION`, for `POSITION(start:end)`, `start` must be set to an integer greater than 0, and the `end` value should be greater than or equal to the `start` value.
        >- When `POSITION` is specified, trailing spaces are not omitted when processing field content; when `POSITION` is not specified, trailing spaces are omitted when processing field content. If you need to preserve spaces, you need to add `set behavior_compat_options='char_coerce_compat';` in the file specified by `guc_param`, provided that `a_format_version` has been set. For details, please refer to the setting of `behavior_compat_options` in the Administrator Guide.
        >- During concurrent import, if the discard file name or bad file name of multiple gs\_loader instances points to the same file in the same directory, the subsequently executed gs\_loader will abort with an error. If the previous import has been completed, the file will be overwritten.
        > The error is as follows:
        >
        > ```
        > ERROR: An error occurred. Please check logfile.
        > ```
        >
        > In the log file:
        >
        > ```
        > …lock failed: Resource temporarily unavailable…
        > ```
        >
        >- For the control file, if the part of the field value is not empty and does not use the content of this field, it does not occupy the position of the data file.
        > For example, the control file is as follows:
        >
        > ```
        > Load Data
        > TRUNCATE INTO TABLE gsloader
        > fields terminated by ','
        > TRAILING NULLCOLS(
        > id "trim(:id)",
        > text "to_char(SYSDATE,'yyyymmdd')",
        > gmt_create  "trim(:gmt_create)",
        > create_str "trim(:create_str)"
        > )
        > ```
        >
        > The data file is as follows:
        >
        > ```
        > 11,22hello,33,
        > ```
        >
        > The import result is:
        >
        > ```
        > loader=# select * from gsloader;
        > id |  text  |     gmt_create      | create_str
        > ----+--------+---------------------+------------
        > 11 | 2023-02-08 16:00:54 | 22hello |  33
        > ```
