# gs\_loader<a name="EN-US_TOPIC_0000001198340778"></a>

## Overview<a name="en-us_topic_0000001155217870_section191131516122118"></a>

**gs\_loader**  is used to import data.  **gs\_loader**  converts the syntax supported by control files to the \\COPY syntax, uses the existing \\COPY function to import data, and records the \\COPY result in logs.

## Log Level Configuration<a name="en-us_topic_0000001155217870_section346168183816"></a>

Set the log levels for developers to view. After the setting, the tool running information is printed on the console.

```
export gs_loader_log_level=debug
export gs_loader_log_level=info
export gs_loader_log_level=warning
export gs_loader_log_level=error
```

## Permission<a name="en-us_topic_0000001155217870_section1472611151954"></a>

The user can be a common user or the database administrator. If the user is a common user, the administrator needs to grant permissions to the common user. The administrator account can be used directly.

Create a user.

```
CREATE USER load_user WITH PASSWORD 'example@123';
```

Create related tables and grant permissions.

```
GRANT ALL ON FUNCTION copy_error_log_create() TO load_user;
GRANT ALL ON SCHEMA public TO load_user;
SELECT copy_error_log_create();
SELECT copy_summary_create();
GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
```

## Environment<a name="en-us_topic_0000001155217870_section4171702718"></a>

You need to add the tool path to  _PATH_.

## New System Catalogs<a name="en-us_topic_0000001155217870_section1163793633413"></a>

The  **gs\_copy\_summary**  table is added to record the COPY execution result summary, including the number of successful rows, number of error rows, number of ignored rows, and number of empty rows.

The  **copy\_summary\_create**  function is added to create the  **gs\_copy\_summary**  table.

The format of the  **gs\_copy\_summary**  table is as follows:

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

## Usage Guide<a name="en-us_topic_0000001155217870_section2511450105813"></a>

1.  \(Optional\) For common users only.

    Create a user.

    ```
    CREATE USER load_user WITH PASSWORD 'example@123';
    ```

    Create related tables and grant permissions.

    ```
    GRANT ALL ON FUNCTION copy_error_log_create() TO load_user;
    GRANT ALL ON SCHEMA public TO load_user;
    SELECT copy_error_log_create();
    SELECT copy_summary_create();
    GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
    GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
    ```

2.  Create a table and a control file, and prepare a data file.

    Create the  **loader\_tbl**  table.

    ```
    CREATE TABLE  loader_tbl
    (
        ID   NUMBER,
        NAME VARCHAR2(20),
        CON  VARCHAR2(20),
        DT   DATE
    );
    ```

    Create the  **loader.ctl**  control file.

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

    Create the  **data.csv**  data file.

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

3.  Import data.

    Before importing the data, ensure that  **gs\_loader**  has the execute permission. Ensure that the current path has the write permission on files. \(**gs\_loader**  generates some temporary files during processing and automatically deletes them after the import is complete.\)

    ```
    gs_loader control=loader.ctl data=data.csv db=postgres bad=loader.bad errors=5 port=8000 passwd=example@123 user=load_user
    ```

    Execution result:

    ```
    gs_loader: version 0.1
     
     5 Rows successfully loaded. 
     
    log file is: 
     loader.log
    ```


## Parameter Description<a name="en-us_topic_0000001155217870_section790261685316"></a>

**Table  1**  gs\_loader parameter description

<a name="en-us_topic_0000001155217870_table179851345114513"></a>
<table><thead align="left"><tr id="en-us_topic_0000001155217870_row1398510451455"><th class="cellrowborder" valign="top" width="17.7017701770177%" id="mcps1.2.4.1.1"><p id="en-us_topic_0000001155217870_p13986545134518"><a name="en-us_topic_0000001155217870_p13986545134518"></a><a name="en-us_topic_0000001155217870_p13986545134518"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.465246524652464%" id="mcps1.2.4.1.2"><p id="en-us_topic_0000001155217870_p898654564514"><a name="en-us_topic_0000001155217870_p898654564514"></a><a name="en-us_topic_0000001155217870_p898654564514"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="29.832983298329836%" id="mcps1.2.4.1.3"><p id="en-us_topic_0000001155217870_p3986745154513"><a name="en-us_topic_0000001155217870_p3986745154513"></a><a name="en-us_topic_0000001155217870_p3986745154513"></a>Parameter Type/Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0000001155217870_row8986114511457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p14986174519451"><a name="en-us_topic_0000001155217870_p14986174519451"></a><a name="en-us_topic_0000001155217870_p14986174519451"></a>help</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p09861745174518"><a name="en-us_topic_0000001155217870_p09861745174518"></a><a name="en-us_topic_0000001155217870_p09861745174518"></a>Displays help information.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p20986545134518"><a name="en-us_topic_0000001155217870_p20986545134518"></a><a name="en-us_topic_0000001155217870_p20986545134518"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row3986144594510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p598664511452"><a name="en-us_topic_0000001155217870_p598664511452"></a><a name="en-us_topic_0000001155217870_p598664511452"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p498664516458"><a name="en-us_topic_0000001155217870_p498664516458"></a><a name="en-us_topic_0000001155217870_p498664516458"></a>Database connection user (equivalent to <strong id="b1731573221419"><a name="b1731573221419"></a><a name="b1731573221419"></a>-U</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1898694544520"><a name="en-us_topic_0000001155217870_p1898694544520"></a><a name="en-us_topic_0000001155217870_p1898694544520"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row0212181404715"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p521211414710"><a name="en-us_topic_0000001155217870_p521211414710"></a><a name="en-us_topic_0000001155217870_p521211414710"></a>-U</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p172125145472"><a name="en-us_topic_0000001155217870_p172125145472"></a><a name="en-us_topic_0000001155217870_p172125145472"></a>Database connection user (equivalent to <strong id="b1125214496143"><a name="b1125214496143"></a><a name="b1125214496143"></a>user</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p52121014154716"><a name="en-us_topic_0000001155217870_p52121014154716"></a><a name="en-us_topic_0000001155217870_p52121014154716"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row2098694524517"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p79860451459"><a name="en-us_topic_0000001155217870_p79860451459"></a><a name="en-us_topic_0000001155217870_p79860451459"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p59861945114516"><a name="en-us_topic_0000001155217870_p59861945114516"></a><a name="en-us_topic_0000001155217870_p59861945114516"></a>User password (equivalent to <strong id="b265813473315"><a name="b265813473315"></a><a name="b265813473315"></a>-W</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1898684544518"><a name="en-us_topic_0000001155217870_p1898684544518"></a><a name="en-us_topic_0000001155217870_p1898684544518"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row42933619474"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p192953654716"><a name="en-us_topic_0000001155217870_p192953654716"></a><a name="en-us_topic_0000001155217870_p192953654716"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p42918364479"><a name="en-us_topic_0000001155217870_p42918364479"></a><a name="en-us_topic_0000001155217870_p42918364479"></a>User password (equivalent to <strong id="b111114118153"><a name="b111114118153"></a><a name="b111114118153"></a>passwd</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p3293361479"><a name="en-us_topic_0000001155217870_p3293361479"></a><a name="en-us_topic_0000001155217870_p3293361479"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row098624517451"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p59869456454"><a name="en-us_topic_0000001155217870_p59869456454"></a><a name="en-us_topic_0000001155217870_p59869456454"></a>db</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p2986134524514"><a name="en-us_topic_0000001155217870_p2986134524514"></a><a name="en-us_topic_0000001155217870_p2986134524514"></a>Database name (This parameter is mandatory and is equivalent to <strong id="b1064010719159"><a name="b1064010719159"></a><a name="b1064010719159"></a>-d</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1098624511451"><a name="en-us_topic_0000001155217870_p1098624511451"></a><a name="en-us_topic_0000001155217870_p1098624511451"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row59561220453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p396121294510"><a name="en-us_topic_0000001155217870_p396121294510"></a><a name="en-us_topic_0000001155217870_p396121294510"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p109631217453"><a name="en-us_topic_0000001155217870_p109631217453"></a><a name="en-us_topic_0000001155217870_p109631217453"></a>Database name (This parameter is mandatory and is equivalent to <strong id="b76301742181520"><a name="b76301742181520"></a><a name="b76301742181520"></a>db</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1896121215451"><a name="en-us_topic_0000001155217870_p1896121215451"></a><a name="en-us_topic_0000001155217870_p1896121215451"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row12986345124519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p12986114515454"><a name="en-us_topic_0000001155217870_p12986114515454"></a><a name="en-us_topic_0000001155217870_p12986114515454"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p3986194518452"><a name="en-us_topic_0000001155217870_p3986194518452"></a><a name="en-us_topic_0000001155217870_p3986194518452"></a>Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket (equivalent to <strong id="b1937333162"><a name="b1937333162"></a><a name="b1937333162"></a>-h</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1998617459458"><a name="en-us_topic_0000001155217870_p1998617459458"></a><a name="en-us_topic_0000001155217870_p1998617459458"></a>See the <strong id="b982734351618"><a name="b982734351618"></a><a name="b982734351618"></a>gsql --host</strong> parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row17120154013454"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p1512114017451"><a name="en-us_topic_0000001155217870_p1512114017451"></a><a name="en-us_topic_0000001155217870_p1512114017451"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p13121440194518"><a name="en-us_topic_0000001155217870_p13121440194518"></a><a name="en-us_topic_0000001155217870_p13121440194518"></a>Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket (equivalent to <strong id="b1880010586165"><a name="b1880010586165"></a><a name="b1880010586165"></a>host</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p71214405452"><a name="en-us_topic_0000001155217870_p71214405452"></a><a name="en-us_topic_0000001155217870_p71214405452"></a>See the <strong id="b66073569164"><a name="b66073569164"></a><a name="b66073569164"></a>gsql --host</strong> parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row16986144512453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p998704594520"><a name="en-us_topic_0000001155217870_p998704594520"></a><a name="en-us_topic_0000001155217870_p998704594520"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p13987144514458"><a name="en-us_topic_0000001155217870_p13987144514458"></a><a name="en-us_topic_0000001155217870_p13987144514458"></a>Port number of the database server (equivalent to <strong id="b432422018171"><a name="b432422018171"></a><a name="b432422018171"></a>-p</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p798734504512"><a name="en-us_topic_0000001155217870_p798734504512"></a><a name="en-us_topic_0000001155217870_p798734504512"></a>See the <strong id="b4596035121716"><a name="b4596035121716"></a><a name="b4596035121716"></a>gsql --port</strong> parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1581794110464"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p1781794174616"><a name="en-us_topic_0000001155217870_p1781794174616"></a><a name="en-us_topic_0000001155217870_p1781794174616"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p181718418465"><a name="en-us_topic_0000001155217870_p181718418465"></a><a name="en-us_topic_0000001155217870_p181718418465"></a>Port number of the database server (equivalent to <strong id="b1460304711713"><a name="b1460304711713"></a><a name="b1460304711713"></a>port</strong>).</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p381710413468"><a name="en-us_topic_0000001155217870_p381710413468"></a><a name="en-us_topic_0000001155217870_p381710413468"></a>See the <strong id="b14334945171711"><a name="b14334945171711"></a><a name="b14334945171711"></a>gsql --port</strong> parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row4987174511455"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p16987445174518"><a name="en-us_topic_0000001155217870_p16987445174518"></a><a name="en-us_topic_0000001155217870_p16987445174518"></a>create</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p79871545204510"><a name="en-us_topic_0000001155217870_p79871545204510"></a><a name="en-us_topic_0000001155217870_p79871545204510"></a>Specifies whether to create the <strong id="b14267115711174"><a name="b14267115711174"></a><a name="b14267115711174"></a>pgxc_copy_error_log</strong> and <strong id="b4268157101715"><a name="b4268157101715"></a><a name="b4268157101715"></a>gs_copy_summary</strong> tables.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p19871545124517"><a name="en-us_topic_0000001155217870_p19871545124517"></a><a name="en-us_topic_0000001155217870_p19871545124517"></a>The value can be <strong id="b990171817183"><a name="b990171817183"></a><a name="b990171817183"></a>true</strong> or <strong id="b0901218171814"><a name="b0901218171814"></a><a name="b0901218171814"></a>false</strong>. The default value is <strong id="b79115183185"><a name="b79115183185"></a><a name="b79115183185"></a>true</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1498744515453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p9987204517454"><a name="en-us_topic_0000001155217870_p9987204517454"></a><a name="en-us_topic_0000001155217870_p9987204517454"></a>clean</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p1398724511451"><a name="en-us_topic_0000001155217870_p1398724511451"></a><a name="en-us_topic_0000001155217870_p1398724511451"></a>Specifies whether to clear the content in the preceding two tables.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p12987164518457"><a name="en-us_topic_0000001155217870_p12987164518457"></a><a name="en-us_topic_0000001155217870_p12987164518457"></a>The value can be <strong id="b0869193081810"><a name="b0869193081810"></a><a name="b0869193081810"></a>true</strong> or <strong id="b3869193091820"><a name="b3869193091820"></a><a name="b3869193091820"></a>false</strong>. The default value is <strong id="b7869830151813"><a name="b7869830151813"></a><a name="b7869830151813"></a>true</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1098711459457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p159871345104512"><a name="en-us_topic_0000001155217870_p159871345104512"></a><a name="en-us_topic_0000001155217870_p159871345104512"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p998724524513"><a name="en-us_topic_0000001155217870_p998724524513"></a><a name="en-us_topic_0000001155217870_p998724524513"></a>(Mandatory) Data file. You can specify multiple data files or use wildcards (*) and question marks (?) to represent multiple data files.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1698734511453"><a name="en-us_topic_0000001155217870_p1698734511453"></a><a name="en-us_topic_0000001155217870_p1698734511453"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row698715453458"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p159871845184517"><a name="en-us_topic_0000001155217870_p159871845184517"></a><a name="en-us_topic_0000001155217870_p159871845184517"></a>control</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p16987104594518"><a name="en-us_topic_0000001155217870_p16987104594518"></a><a name="en-us_topic_0000001155217870_p16987104594518"></a>(Mandatory) Name of a control file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p6987164515458"><a name="en-us_topic_0000001155217870_p6987164515458"></a><a name="en-us_topic_0000001155217870_p6987164515458"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row19871945124510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p69876459458"><a name="en-us_topic_0000001155217870_p69876459458"></a><a name="en-us_topic_0000001155217870_p69876459458"></a>log</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p5987194584512"><a name="en-us_topic_0000001155217870_p5987194584512"></a><a name="en-us_topic_0000001155217870_p5987194584512"></a>Name of a log file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p20987745174516"><a name="en-us_topic_0000001155217870_p20987745174516"></a><a name="en-us_topic_0000001155217870_p20987745174516"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1898724564519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p0987845174519"><a name="en-us_topic_0000001155217870_p0987845174519"></a><a name="en-us_topic_0000001155217870_p0987845174519"></a>bad</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p1098774584515"><a name="en-us_topic_0000001155217870_p1098774584515"></a><a name="en-us_topic_0000001155217870_p1098774584515"></a>Name of the file recording the error rows. You can also specify a directory to generate the file based on the data file name.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p4987184518454"><a name="en-us_topic_0000001155217870_p4987184518454"></a><a name="en-us_topic_0000001155217870_p4987184518454"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1498704574516"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p89881545154517"><a name="en-us_topic_0000001155217870_p89881545154517"></a><a name="en-us_topic_0000001155217870_p89881545154517"></a>discard</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p598811456452"><a name="en-us_topic_0000001155217870_p598811456452"></a><a name="en-us_topic_0000001155217870_p598811456452"></a>Name of the file recording the rows that fail to be matched by WHEN. You can also specify a directory to generate the file based on the data file name.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p1988164564510"><a name="en-us_topic_0000001155217870_p1988164564510"></a><a name="en-us_topic_0000001155217870_p1988164564510"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row1798894564511"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p17988134544515"><a name="en-us_topic_0000001155217870_p17988134544515"></a><a name="en-us_topic_0000001155217870_p17988134544515"></a>errors</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p2988174534512"><a name="en-us_topic_0000001155217870_p2988174534512"></a><a name="en-us_topic_0000001155217870_p2988174534512"></a>Maximum number of error rows in a data file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p79881845174514"><a name="en-us_topic_0000001155217870_p79881845174514"></a><a name="en-us_topic_0000001155217870_p79881845174514"></a>Integer. Default value: <strong id="b1314823142810"><a name="b1314823142810"></a><a name="b1314823142810"></a>0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row7988154584512"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p1098854584514"><a name="en-us_topic_0000001155217870_p1098854584514"></a><a name="en-us_topic_0000001155217870_p1098854584514"></a>skip</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p10988154524517"><a name="en-us_topic_0000001155217870_p10988154524517"></a><a name="en-us_topic_0000001155217870_p10988154524517"></a>Number of first rows that can be skipped in a data file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p9988845204511"><a name="en-us_topic_0000001155217870_p9988845204511"></a><a name="en-us_topic_0000001155217870_p9988845204511"></a>Integer. Default value: <strong id="b610314520287"><a name="b610314520287"></a><a name="b610314520287"></a>0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row898815458452"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p39882045174510"><a name="en-us_topic_0000001155217870_p39882045174510"></a><a name="en-us_topic_0000001155217870_p39882045174510"></a>bindsize</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p17988345154516"><a name="en-us_topic_0000001155217870_p17988345154516"></a><a name="en-us_topic_0000001155217870_p17988345154516"></a>Only syntax compatibility is implemented, but functions are not implemented.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p2098814510456"><a name="en-us_topic_0000001155217870_p2098814510456"></a><a name="en-us_topic_0000001155217870_p2098814510456"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0000001155217870_row698816455456"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001155217870_p15988745134513"><a name="en-us_topic_0000001155217870_p15988745134513"></a><a name="en-us_topic_0000001155217870_p15988745134513"></a>rows</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001155217870_p7988134504516"><a name="en-us_topic_0000001155217870_p7988134504516"></a><a name="en-us_topic_0000001155217870_p7988134504516"></a>Only syntax compatibility is implemented, but functions are not implemented.</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001155217870_p898816459459"><a name="en-us_topic_0000001155217870_p898816459459"></a><a name="en-us_topic_0000001155217870_p898816459459"></a>-</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>All parameters are in lowercase and are compatible with the  **gsql**  login mode, including  **-p**  port number,  **-h**  host,  **-d**  database,  **-U**  username, and  **-W**  password.

## Control Files<a name="en-us_topic_0000001155217870_section85571127195813"></a>

-   Syntax

    ```
    LOAD [ DATA ]
    [CHARACTERSET char_set_name]
    [INFILE [directory_path] [filename ] ]
    [BADFILE [directory_path] [filename ] ]
    [{ INSERT | APPEND | REPLACE | TRUNCATE }] 
    INTO TABLE table_name
    [{ INSERT | APPEND | REPLACE | TRUNCATE }] 
    TERMINATED [BY] { 'string' }
    OPTIONALLY ENCLOSED BY { 'string' }
    TRAILING NULLCOLS
    [ WHEN { (start:end) | column_name } {= | !=} 'string' ]
    [(
    col_name [ [ POSITION ({ start:end }) ]  ["sql_string"] ] | [ FILLER [column_type [external] ] ] | [ CONSTANT "string" ] | [ SEQUENCE ( { COUNT | MAX | integer } [, incr] ) ]|[NULLIF (COL=BLANKS)]
    [, ...]
    )]
    ```


-   Parameter description

    -   **CHARACTERSET**

        Specifies a character set.

        Value range: a string

    -   **INFILE**

        The current keyword is invalid and needs to occupy a separate row in the control file. The keyword is omitted during running. You need to specify the corresponding data file in the  **gs\_loader**  command line parameters.

    -   **BADFILE**

        The current keyword is invalid and will be omitted during running. If  **BADFILE**  is not specified in the  **gs\_laoder**  command line parameters, a  **BADFILE**  file will be generated based on the name of the corresponding control file.

    -   **INSERT | APPEND | REPLACE | TRUNCATE**

        Specifies the import mode.

        **INSERT**: If the table contains data, an error is reported.

        **APPEND**: Data is inserted directly.

        **REPLACE**: If the table contains data, all data is deleted and then inserted.

        **TRUNCATE**: If the table contains data, all data is deleted and then inserted.

    -   **table\_name**

        Specifies the name \(possibly schema-qualified\) of an existing table.

        Value range: an existing table name

    -   **TERMINATED \[BY\] \{ 'string' \}**

        Specifies the character string that separates columns in a file, which contains a maximum of 10 bytes.

        Value range: The delimiter cannot contain any of the following characters: \\.abcdefghijklmnopqrstuvwxyz0123456789

        Value range: The default value is a tab character in text format and a comma in CSV format.

    -   **OPTIONALLY ENCLOSED BY \{ 'string' \}**

        Specifies a quotation mark in CSV format.

        Default value: single quotation marks \(''\)

    -   **TRAILING NULLCOLS**

        Specifies how to handle the problem that multiple columns of a row in a source data file are lost during data import.

    -   **WHEN \{ \(start:end\) | column\_name \} \{= | !=\}**

        Filters rows by character string between  **start**  and  **end**  or by column name.

        Value range: a string

    -   **POSITION \(\{ start:end \}\)**

        Processes columns and obtains the corresponding character strings between  **start**  and  **end**.

    -   **"sql\_string"**

        Processes columns and calculates column values based on column expressions.

        Value range: a string

    -   **FILLER**

        Processes columns. If  **FILLER**  occurs, this column is skipped.

    -   **CONSTANT**

        Processes columns and sets the inserted columns to constants.

        Value range: a string

    -   **SEQUENCE \( \{ COUNT | MAX | integer \} \[, incr\] \)**

        Processes columns and generates the corresponding sequence values.

        -   **COUNT**: The count starts based on the number of rows in the table.
        -   **MAX**: The count starts from the maximum value of this column in the table.
        -   **integer**: The count starts from the specified value.
        -   **incr**: indicates the increment each time.

    -   NULLIF

        Leaves columns empty. Currently, only the  **COL POSITION\(\) CHAR NULLIF \(COL=BLANKS\)**  syntax is supported.

    >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
    >**OPTIONS**,  **INFILE**, and  **BADFILE**  are not supported. Syntax errors are not reported only in specific scenarios.


