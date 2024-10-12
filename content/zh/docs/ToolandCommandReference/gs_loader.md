# gs\_loader<a name="ZH-CN_TOPIC_0000001705427697"></a>

## 概述<a name="section191131516122118"></a>

gs\_loader工具用于进行数据导入。gs\_loader将控制文件支持的语法转换为\\COPY语法，然后利用已有的\\COPY功能，做主要数据导入工作，同时gs\_loader将\\COPY结果记录到日志中。

使用gs\_loader前请确保gs\_loader版本与gsql版本、数据库版本保持一致。

>![](public_sys-resources/icon-note.gif) **说明：** 
>gs\_loader工具当前不支持M-Compatibility数据库。
>gs\_loader工具当前支持PDB。

## 安装部署<a name="section940725313438"></a>

在存放数据源文件的服务器上，安装并配置gs\_loader客户端工具，方便使用gs\_loader工具进行数据的导入。

1.  创建用于存放gs\_loader工具包的目录。

    ```
    mkdir -p /opt/bin
    ```

2.  将gsql工具包上传至新创建的目录中。

    以上传EULER Linux版本的工具包为例，将软件安装包中的gsql工具包“GaussDB-Kernel\_数据库版本号\_操作系统版本号\_64bit\_gsql.tar.gz”上传至新创建的目录中。

3.  在工具包所在的目录下，解压工具包。

    ```
    cd /opt/bin
    tar -zxvf GaussDB-Kernel_数据库版本号_操作系统版本号_64bit_gsql.tar.gz
    source gsql_env.sh
    ```

4.  验证工具位置及版本信息。

    ```
    which gs_loader
    ```

5.  验证客户端版本信息。

    gs\_loader工具版本与gsql工具版本相对应，直接查询gsql客户端版本即可验证客户端版本信息。

    ```
    gsql -V
    ```

6.  验证数据库版本信息，确保与客户端工具版本保持一致。

    使用gsql工具成功连接数据库后输入：

    ```
    select version();
    ```

## 日志等级配置<a name="section346168183816"></a>

设置日志级别，可以供开发者查看。设置后会在控制台打印工具运行的相应信息。

```
export gs_loader_log_level=debug
export gs_loader_log_level=info
export gs_loader_log_level=warning
export gs_loader_log_level=error
```

## 使用权限<a name="section1472611151954"></a>

使用场景分为三权分立场景下及非三权分立场景下的使用。使用者可以选择将guc参数enableSeparationOfDuty设置为on或者off来控制三权分立功能的开启或关闭。

GUC参数enable\_copy\_error\_log是控制是否使用错误表pgxc\_copy\_error\_log的参数，默认为off、即不使用错误表，错误记录直接记录到gs\_loader的bad文件中。如果该参数设置为on，则会使用错误表pgxc\_copy\_error\_log，将错误记录插入错误表。

默认场景，不开启三权分立（即enableSeparationOfDuty=off）时，使用者可以是数据库普通用户或管理员用户。当使用者为普通用户的时候，需要管理员用户对普通用户赋权。管理员账户可以直接使用。错误表pgxc\_copy\_error\_log通过GUC参数enable\_copy\_error\_log控制开启和关闭，默认关闭。

1.  使用管理员用户创建新的用户：

    ```
    CREATE USER load_user WITH PASSWORD '************';
    ```

2.  将public schema权限赋给新的用户：

    ```
    GRANT ALL ON SCHEMA public TO load_user;
    ```

3.  创建并给新用户授权gs\_copy\_summary表：

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >gs\_copy\_summary表中不能含有RULE、TRIGGER、索引函数、行级访问控制、CHECK约束、GENERATED列、DEFAULT列、ON UPDATE列等可能导致提权的对象，否则将认为是恶意用户创建而报错退出。

    ```
    SELECT copy_summary_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='gs_copy_summary');
    GRANT INSERT,SELECT ON  public.gs_copy_summary To load_user;
    ```

4.  （可选）创建并给新用户授权错误表pgxc\_copy\_error\_log：

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   如果guc参数enable\_copy\_error\_log未设置（默认为off），或者设置为off，则无需使用错误表，无需创建。否则需要创建该错误表。
    >-   pgxc\_copy\_error\_log表中不能含有RULE、TRIGGER、索引函数、行级访问控制、CHECK约束、GENERATED列、DEFAULT列、ON UPDATE列等可能导致提权的对象，否则将认为是恶意用户创建而报错退出。

    ```
    SELECT copy_error_log_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='pgxc_copy_error_log');
    GRANT INSERT,SELECT,DELETE ON  public.pgxc_copy_error_log To load_user;
    ```

开启三权分立（即enableSeparationOfDuty=on）时，使用者可以是数据库普通用户或管理员用户。使用前需要到各自的schema下创建pgxc\_copy\_error\_log表以及gs\_copy\_summary这两张表并添加索引，不需要再进行授权。

1.  使用初始用户创建新用户：

    ```
    CREATE USER load_user WITH PASSWORD '********';
    ```

2.  从初始用户切换为新用户：

    ```
    \c - load_user
    ```

3.  创建gs\_copy\_summary表并添加索引：

    ```
    CREATE TABLE load_user.gs_copy_summary(relname varchar, begintime timestamptz, endtime timestamptz, id bigint, pid bigint, readrows bigint, skiprows bigint, loadrows bigint, errorrows bigint, whenrows bigint, allnullrows bigint, detail text);
    CREATE INDEX gs_copy_summary_idx ON load_user.gs_copy_summary(id);
    ```

4.  （可选）创建pgxc\_copy\_error\_log表并添加索引：

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >1.  如果guc参数enable\_copy\_error\_log未设置（默认为off），或者设置为off，则无需使用错误表，无需创建。否则需要创建该错误表。

    ```
    CREATE TABLE load_user.pgxc_copy_error_log (relname varchar, begintime timestamptz, filename varchar, lineno int8, rawrecord text, detail text);
    CREATE INDEX copy_error_log_relname_idx ON load_user.pgxc_copy_error_log(relname);
    ```

## 使用环境<a name="section4171702718"></a>

由用户自己将工具路径添加到PATH中。gs\_loader支持SSL加密通信，使用方式同gsql方式，具体操作请参考《管理员指南》中“安全管理”章节。

## 新增系统表<a name="section1163793633413"></a>

新增gs\_copy\_summary表，记录COPY执行结果汇总，包括成功行数，出错行数，忽略行数，空行数。

新增函数：copy\_summary\_create用于创建gs\_copy\_summary表。

gs\_copy\_summary表格式如下：

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

## 系统表gs\_copy\_summary字段说明<a name="section114775229118"></a>

**表 1**  gs\_copy\_summary字段说明

<a name="zh-cn_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>字段名称</p>
</th>
<th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>本次导入的目标表名</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1176174741516"><a name="p1176174741516"></a><a name="p1176174741516"></a>begintime</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>导入任务开始时间</p>
</td>
</tr>
<tr id="row867212439206"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1672164372018"><a name="p1672164372018"></a><a name="p1672164372018"></a>endtime</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p5672134311201"><a name="p5672134311201"></a><a name="p5672134311201"></a>导入任务结束时间</p>
</td>
</tr>
<tr id="row1315216487206"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p6152194812208"><a name="p6152194812208"></a><a name="p6152194812208"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1715294802011"><a name="p1715294802011"></a><a name="p1715294802011"></a>本次导入的事务id</p>
</td>
</tr>
<tr id="row1970323914202"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p4382115522018"><a name="p4382115522018"></a><a name="p4382115522018"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p670313962014"><a name="p670313962014"></a><a name="p670313962014"></a>本次导入工作线程id</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>readrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>本次导入任务共计读取的数据行数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>skiprows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1890619360101"><a name="p1890619360101"></a><a name="p1890619360101"></a>本次导入任务共计跳过的数据行数</p>
</td>
</tr>
<tr id="row9261132142111"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1226183219218"><a name="p1226183219218"></a><a name="p1226183219218"></a>loadrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1547354917101"><a name="p1547354917101"></a><a name="p1547354917101"></a>本次导入任务成功导入的数据行数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>errorrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p5599657117"><a name="p5599657117"></a><a name="p5599657117"></a>本次导入任务的错误数据行数</p>
</td>
</tr>
<tr id="row6900256191710"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1190012569173"><a name="p1190012569173"></a><a name="p1190012569173"></a>whenrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p16759202214112"><a name="p16759202214112"></a><a name="p16759202214112"></a>本次导入任务违反when过滤条件的数据行数</p>
</td>
</tr>
<tr id="row157411464172"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p1575184618173"><a name="p1575184618173"></a><a name="p1575184618173"></a>allnullrows</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p1857512465175"><a name="p1857512465175"></a><a name="p1857512465175"></a>全部字段都为空的数据行数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="p455831219181"><a name="p455831219181"></a><a name="p455831219181"></a>detail</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="p58811742191812"><a name="p58811742191812"></a><a name="p58811742191812"></a>本次导入任务的导入情况总结。主要包括成功导入行数、错误数据行数、违反when条件行数和字段全空行数等。</p>
</td>
</tr>
</tbody>
</table>

## 使用指导<a name="section2511450105813"></a>

1.  （非三权分立）仅对于普通用户。
    1.  （在管理员用户下）创建用户：

        ```
        CREATE USER load_user WITH PASSWORD '************';
        ```

    2.  （在管理员用户下）将public schema权限赋给用户：

        ```
        GRANT ALL ON SCHEMA public TO load_user;
        ```

    3.  （在管理员用户下）创建并给用户授权gs\_copy\_summary表：

        ```
        SELECT copy_summary_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='gs_copy_summary');
        GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
        ```

    4.  （可选，在管理员用户下）创建并给用户授权错误表pgxc\_copy\_error\_log：

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >如果guc参数enable\_copy\_error\_log未设置（默认为off），或者设置为off，则无需使用错误表，无需创建。否则需要创建该错误表。

        ```
        SELECT copy_error_log_create() WHERE NOT EXISTS(SELECT * FROM pg_tables WHERE schemaname='public' AND tablename='pgxc_copy_error_log');
        GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
        ```

    5.  切换用户。

        ```
        \c - load_user
        ```

2.  （三权分立）对于普通用户和管理员用户。
    1.  （在初始用户下）创建用户：

        ```
        CREATE USER load_user WITH PASSWORD '********';
        ```

    2.  （在初始用户下）切换为load\_user用户：

        ```
        \c - load_user
        ```

    3.  创建gs\_copy\_summary表并添加索引。

        ```
        CREATE TABLE load_user.gs_copy_summary(relname varchar, begintime timestamptz, endtime timestamptz, id bigint, pid bigint, readrows bigint, skiprows bigint, loadrows bigint, errorrows bigint, whenrows bigint, allnullrows bigint, detail text);
        CREATE INDEX gs_copy_summary_idx ON load_user.gs_copy_summary(id);
        ```

    4.  （可选）创建pgxc\_copy\_error\_log表并添加索引。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >如果guc参数enable\_copy\_error\_log未设置（默认为off），或者设置为off，则无需使用错误表，无需创建。否则需要创建该错误表。

        ```
        CREATE TABLE load_user.pgxc_copy_error_log (relname varchar, begintime timestamptz, filename varchar, lineno int8, rawrecord text, detail text);
        CREATE INDEX copy_error_log_relname_idx ON load_user.pgxc_copy_error_log(relname);
        ```

3.  创建表和控制文件，准备数据文件。

    创建表loader\_tbl。

    ```
    CREATE TABLE  loader_tbl
    (
        ID   NUMBER,
        NAME VARCHAR2(20),
        CON  VARCHAR2(20),
        DT   DATE
    );
    ```

    （在gs\_loader客户端机器上）创建控制文件loader.ctl。

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

    （在gs\_loader客户端机器上）创建guc参数文件guc.txt。

    ```
    set a_format_copy_version='s1';
    ```

    （在gs\_loader客户端机器上）创建数据文件data.csv。

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

4.  进行导入。

    （在gs\_loader客户端机器上）执行导入前，先确认gs\_loader工具有可执行权限。确保当前路径有文件写入权限（gs\_loader在处理过程中会生成一些临时文件，导入完成后自动删除）。

    ```
    gs_loader control=loader.ctl data=data.csv db=testdb bad=loader.bad guc_param=guc.txt errors=5 port=8000 passwd=************ user=load_user
    ```

    执行结果：

    ```
    gs_loader: version 0.1
     
     5 Rows successfully loaded. 
     
    log file is: 
     loader.log
    ```

>![](public_sys-resources/icon-note.gif) **说明：** 
>gs\_copy\_summary用于记录调用的copy语法及其详细情况，_\[badfile\]\_bad.log_文件用于记录错误数据及其详细情况。为防止上一次导入时记录的错误数据以及详细情况被覆盖，建议每次执行导入时使用不同的bad参数。如果使用错误表pgxc\_copy\_error\_log记录错误数据以及详细情况，请开启GUC参数enable\_copy\_error\_log。如需删除表中的数据，可以对上述表执行truncate或者delete操作。

## 参数说明<a name="section790261685316"></a>

**表 2**  gs\_loader参数说明

<a name="table179851345114513"></a>
<table><thead align="left"><tr id="row1398510451455"><th class="cellrowborder" valign="top" width="17.7017701770177%" id="mcps1.2.4.1.1"><p id="p13986545134518"><a name="p13986545134518"></a><a name="p13986545134518"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="50.18501850185019%" id="mcps1.2.4.1.2"><p id="p898654564514"><a name="p898654564514"></a><a name="p898654564514"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="32.11321132113211%" id="mcps1.2.4.1.3"><p id="p3986745154513"><a name="p3986745154513"></a><a name="p3986745154513"></a>参数类型 : 取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row8986114511457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p14986174519451"><a name="p14986174519451"></a><a name="p14986174519451"></a>help</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p09861745174518"><a name="p09861745174518"></a><a name="p09861745174518"></a>查看帮助信息。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p20986545134518"><a name="p20986545134518"></a><a name="p20986545134518"></a>-</p>
</td>
</tr>
<tr id="row3986144594510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p598664511452"><a name="p598664511452"></a><a name="p598664511452"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p498664516458"><a name="p498664516458"></a><a name="p498664516458"></a>数据库链接用户（与-U等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1898694544520"><a name="p1898694544520"></a><a name="p1898694544520"></a>字符串</p>
</td>
</tr>
<tr id="row0212181404715"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p521211414710"><a name="p521211414710"></a><a name="p521211414710"></a>-U</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p172125145472"><a name="p172125145472"></a><a name="p172125145472"></a>数据库链接用户（与user等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p52121014154716"><a name="p52121014154716"></a><a name="p52121014154716"></a>字符串</p>
</td>
</tr>
<tr id="row2098694524517"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p79860451459"><a name="p79860451459"></a><a name="p79860451459"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p59861945114516"><a name="p59861945114516"></a><a name="p59861945114516"></a>用户密码（与-W等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1898684544518"><a name="p1898684544518"></a><a name="p1898684544518"></a>字符串</p>
</td>
</tr>
<tr id="row42933619474"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p192953654716"><a name="p192953654716"></a><a name="p192953654716"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p42918364479"><a name="p42918364479"></a><a name="p42918364479"></a>用户密码（与passwd等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p3293361479"><a name="p3293361479"></a><a name="p3293361479"></a>字符串</p>
</td>
</tr>
<tr id="row098624517451"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p59869456454"><a name="p59869456454"></a><a name="p59869456454"></a>db</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p2986134524514"><a name="p2986134524514"></a><a name="p2986134524514"></a>数据库名称（必选，与-d等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1098624511451"><a name="p1098624511451"></a><a name="p1098624511451"></a>字符串</p>
</td>
</tr>
<tr id="row59561220453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p396121294510"><a name="p396121294510"></a><a name="p396121294510"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p109631217453"><a name="p109631217453"></a><a name="p109631217453"></a>数据库名称（必选与db等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1896121215451"><a name="p1896121215451"></a><a name="p1896121215451"></a>字符串</p>
</td>
</tr>
<tr id="row12986345124519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p12986114515454"><a name="p12986114515454"></a><a name="p12986114515454"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p3986194518452"><a name="p3986194518452"></a><a name="p3986194518452"></a>指定正在运行服务器的主机名、Unix域套接字的路径、或者域名。接受以“,”分隔的字符串来指定多个主机地址，支持指定多个主机地址（与-h等价）。</p>
<p id="p4148711181113"><a name="p4148711181113"></a><a name="p4148711181113"></a>当指定多个主机地址时，默认选择连接到主节点。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1998617459458"><a name="p1998617459458"></a><a name="p1998617459458"></a>参考gsql --host参数</p>
</td>
</tr>
<tr id="row17120154013454"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1512114017451"><a name="p1512114017451"></a><a name="p1512114017451"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1934232093"><a name="p1934232093"></a><a name="p1934232093"></a>指定正在运行服务器的主机名、Unix域套接字的路径、或者域名。接受以“,”分隔的字符串来指定多个主机地址，支持指定多个主机地址（与host等价）。</p>
<p id="p1693419321994"><a name="p1693419321994"></a><a name="p1693419321994"></a>当指定多个主机地址时，默认选择连接到主节点。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p71214405452"><a name="p71214405452"></a><a name="p71214405452"></a>参考gsql --host参数</p>
</td>
</tr>
<tr id="row16986144512453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p998704594520"><a name="p998704594520"></a><a name="p998704594520"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p13987144514458"><a name="p13987144514458"></a><a name="p13987144514458"></a>指定数据库服务器的端口号。可以配置一个或多个，当配置一个时，所有的IP都使用同一个端口连接；当配置多个时，顺序与IP顺序相同，个数必须与IP数相等，当不相等时会报错（与-p等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p798734504512"><a name="p798734504512"></a><a name="p798734504512"></a>参考gsql --port参考</p>
</td>
</tr>
<tr id="row1581794110464"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1781794174616"><a name="p1781794174616"></a><a name="p1781794174616"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p181718418465"><a name="p181718418465"></a><a name="p181718418465"></a>指定数据库服务器的端口号。可以配置一个或多个，当配置一个时，所有的IP都使用同一个端口连接；当配置多个时，顺序与IP顺序相同，个数必须与IP数相等，当不相等时会报错（与port等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p381710413468"><a name="p381710413468"></a><a name="p381710413468"></a>参考gsql --port参考</p>
</td>
</tr>
<tr id="row4987174511455"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p16987445174518"><a name="p16987445174518"></a><a name="p16987445174518"></a>create</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p79871545204510"><a name="p79871545204510"></a><a name="p79871545204510"></a>是否创建pgxc_copy_error_log和gs_copy_summary表。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p19871545124517"><a name="p19871545124517"></a><a name="p19871545124517"></a>[true, false]，默认true</p>
</td>
</tr>
<tr id="row1498744515453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p9987204517454"><a name="p9987204517454"></a><a name="p9987204517454"></a>clean</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1398724511451"><a name="p1398724511451"></a><a name="p1398724511451"></a>是否清除本次错误记录。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p12987164518457"><a name="p12987164518457"></a><a name="p12987164518457"></a>[true, false]，默认false</p>
</td>
</tr>
<tr id="row1098711459457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p159871345104512"><a name="p159871345104512"></a><a name="p159871345104512"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p998724524513"><a name="p998724524513"></a><a name="p998724524513"></a>数据文件，可以指定多个，或者通配符多字符通配(*)以及单字符通配(?)（必选）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1698734511453"><a name="p1698734511453"></a><a name="p1698734511453"></a>字符串</p>
</td>
</tr>
<tr id="row698715453458"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p159871845184517"><a name="p159871845184517"></a><a name="p159871845184517"></a>control</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p16987104594518"><a name="p16987104594518"></a><a name="p16987104594518"></a>控制文件名称（必选）。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p6987164515458"><a name="p6987164515458"></a><a name="p6987164515458"></a>字符串</p>
</td>
</tr>
<tr id="row19871945124510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p69876459458"><a name="p69876459458"></a><a name="p69876459458"></a>log</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p5987194584512"><a name="p5987194584512"></a><a name="p5987194584512"></a>日志文件名称。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p20987745174516"><a name="p20987745174516"></a><a name="p20987745174516"></a>字符串</p>
</td>
</tr>
<tr id="row1898724564519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p0987845174519"><a name="p0987845174519"></a><a name="p0987845174519"></a>bad</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1098774584515"><a name="p1098774584515"></a><a name="p1098774584515"></a>出错行以及详细情况记录文件名称，也可以指定目录，不指定时根据数据文件名生成。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p4987184518454"><a name="p4987184518454"></a><a name="p4987184518454"></a>字符串</p>
</td>
</tr>
<tr id="row1498704574516"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p89881545154517"><a name="p89881545154517"></a><a name="p89881545154517"></a>discard</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p598811456452"><a name="p598811456452"></a><a name="p598811456452"></a>WHEN匹配失败行记录文件名称，也可以指定目录，根据数据文件名生成。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p1988164564510"><a name="p1988164564510"></a><a name="p1988164564510"></a>字符串</p>
</td>
</tr>
<tr id="row1798894564511"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p17988134544515"><a name="p17988134544515"></a><a name="p17988134544515"></a>errors</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p2988174534512"><a name="p2988174534512"></a><a name="p2988174534512"></a>允许数据文件中出现多少出错行。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p79881845174514"><a name="p79881845174514"></a><a name="p79881845174514"></a>整数，默认0</p>
</td>
</tr>
<tr id="row7988154584512"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1098854584514"><a name="p1098854584514"></a><a name="p1098854584514"></a>skip</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p10988154524517"><a name="p10988154524517"></a><a name="p10988154524517"></a>允许跳过数据文件的前多少行。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p9988845204511"><a name="p9988845204511"></a><a name="p9988845204511"></a>整数，默认0</p>
</td>
</tr>
<tr id="row13729115165519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p872919510557"><a name="p872919510557"></a><a name="p872919510557"></a>limit</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1372915565510"><a name="p1372915565510"></a><a name="p1372915565510"></a>指定最多导入的行数。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p187291652551"><a name="p187291652551"></a><a name="p187291652551"></a>整数，默认无限大</p>
</td>
</tr>
<tr id="row898815458452"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p39882045174510"><a name="p39882045174510"></a><a name="p39882045174510"></a>bindsize</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p17988345154516"><a name="p17988345154516"></a><a name="p17988345154516"></a>仅做语法兼容不实现功能。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p2098814510456"><a name="p2098814510456"></a><a name="p2098814510456"></a>-</p>
</td>
</tr>
<tr id="row698816455456"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p15988745134513"><a name="p15988745134513"></a><a name="p15988745134513"></a>rows</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p7988134504516"><a name="p7988134504516"></a><a name="p7988134504516"></a>多行提交参数，指定导入多少行数据后进行一次提交。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p898816459459"><a name="p898816459459"></a><a name="p898816459459"></a>整数，取值范围[1, 2147483647]</p>
</td>
</tr>
<tr id="row173032021164111"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p830316219413"><a name="p830316219413"></a><a name="p830316219413"></a>compatible_nul</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p230310210418"><a name="p230310210418"></a><a name="p230310210418"></a>是否开启数据中nul字符(0x00)兼容，开启后当数据文件中存在nul字符时，会先将nul字符转换成为空格字符' '(0x20)，再进行判断，加工和导入。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p9303122110416"><a name="p9303122110416"></a><a name="p9303122110416"></a>[true, false]，默认true。</p>
</td>
</tr>
<tr id="row178931235103510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p13894143573512"><a name="p13894143573512"></a><a name="p13894143573512"></a>compatible_illegal_chars</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p13894163520358"><a name="p13894163520358"></a><a name="p13894163520358"></a>是否开启非法字符容错功能，与COPY语法中的COMPATIBLE_ILLEGAL_CHARS容错规则和限制相同，详见《SQL参考》的“SQL语言结构和语法 > SQL 语法 >  COPY”章节的COPY_OPTION中COMPATIBLE_ILLEGAL_CHARS参数说明。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p13894135173511"><a name="p13894135173511"></a><a name="p13894135173511"></a>[true, false]，默认false。</p>
</td>
</tr>
<tr id="row1356716301364"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p35671830173619"><a name="p35671830173619"></a><a name="p35671830173619"></a>parallel</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1656873014362"><a name="p1656873014362"></a><a name="p1656873014362"></a>指定并行导入的并发度。当并发度大于1时，表示开启并行导入模式。当并发度等于1时，转化为串行导入。并发度最大值限定不超过客户端CPU核数的两倍。当客户端运行在容器中时，由于获取到的是主机的cpu数量，可能比容器实际能使用的多，并发度建议由用户自行控制在实际能使用的客户端cpu数量的两倍范围内。另外该能力通过多线程并发多个事务实现，实际并发度会受限于服务端的线程池模型，也同时会给服务端增加压力，请按实际情况合理设置并发度。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p10568230163616"><a name="p10568230163616"></a><a name="p10568230163616"></a>整数，取值范围[1, CPU核数两倍]，默认1</p>
</td>
</tr>
<tr id="row1750042010358"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="p1501720133517"><a name="p1501720133517"></a><a name="p1501720133517"></a>binary</p>
</td>
<td class="cellrowborder" valign="top" width="50.18501850185019%" headers="mcps1.2.4.1.2 "><p id="p1250117204357"><a name="p1250117204357"></a><a name="p1250117204357"></a>数据文件是否为通过copy的binary模式导出的二进制文件。</p>
</td>
<td class="cellrowborder" valign="top" width="32.11321132113211%" headers="mcps1.2.4.1.3 "><p id="p4501142073511"><a name="p4501142073511"></a><a name="p4501142073511"></a>[true, false]，默认false。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.gif) **注意：** 
>-   参数均为小写，不支持大写，同时兼容gsql登录方式：-p端口号，-h主机，-d数据库，-U用户名，-W密码方式。
>-   使用rows参数时，提交次数不要超过1000次，否则会对性能产生影响。提交次数约等于数据文件中数据行数除以rows参数取值。不指定rows参数时，rows无默认取值，表现为只进行一次提交，即所有数据都导入表中后进行一次事务提交。
>-   小数据量频繁的提交会影响导入数据的性能，推荐合理配置rows参数的取值，保证每次提交的数据量大于5MB。对于常用的16U128G规格机器，一主两备部署场景下，向5个字段的表内导入13GB数据，排除网络影响，多次提交和单次提交（每次提交5MB数据）的速率基本持平，为10MB/s左右。
>-   compatible\_nul参数实际控制guc参数loader\_support\_nul\_character值的设置：
>    -   compatible\_nul=true对应session级set loader\_support\_nul\_charchter='s2'。
>    -   compatible\_nul=false对应session级set loader\_support\_nul\_character='s1'。
>        建议通过命令行设置此参数且通过compatible\_nul设置优先级高于guc\_param中设置。
>-   当前gs\_loader仅支持数据文件中存在nul字符时的兼容，不支持ctl控制文件中存在nul字符。ctl文件中存在nul字符会存在不可预期的问题。
>-   指定binary参数为true后，有以下行要求：
>    -   数据文件必须为通过\\COPY中BINARY模式导出的二进制格式数据文件，但是该模式导出的数据文件通常兼容性及可移植性较差，建议直接使用\\COPY语句进行导入。
>    -   gs\_loader会将控制文件中语法转换为\\COPY中BINARY模式下最简单的语法，即\\COPY table\_name FROM 'binary\_file\_path' BINARY; 语句。只解析控制文件中导入模式，表名信息和命令行中的control、data、binary、guc\_param及数据库连接参数信息，不对其他参数语法进行解析和生效。
>    -   对于gs\_loader的命令行及控制文件中有以下要求：
>        -   不支持字符集配置。
>        -   不支持WHEN条件过滤及DISCARD生成。
>        -   不支持enable\_copy\_error\_log = off下将错误数据直接写入bad文件。errors默认取值unlimited，会默认记录编码异常数据。
>        -   不支持配置CSV模式，不支持指定分隔符及包裹符，不支持TRAILING NULLCOLS语法。
>        -   不支持数据类型配置、POSITION配置及列表达式使用。
>        -   不支持FILLER、CONSTANT、SEQUENCE、NULLIF参数。
>        -   不支持skip、rows、compatible\_nul、compatible\_illegal\_chars参数。
>-   指定parallel大于1时：
>    -   当同时设置binary参数为true时，parallel参数失效，按串行导入。
>    -   不支持在控制文件中设置OPTIONALLY ENCLOSED BY或者FIELDS CSV。
>    -   不支持在控制文件中设置SEQUENCE列。
>    -   无法保证数据按数据文件中的顺序导入。如果表中存在自增列，导入后自增列值的顺序无法保证与数据文件中顺序一致。
>    -   同时使用errors参数时，errors参数的意义为每个子任务允许出现的最大错误行数。
>    -   同时使用skip参数时，skip参数的意义是在整个数据文件开头跳过的行数。
>    -   同时使用rows参数时，分批提交的批次各子任务独立计算。
>    -   在客户端CPU、内存和服务端CPU、内存、空闲线程以及网络带宽不存在瓶颈时，相比于串行导入，并发度为2/4/8时的性能提升不低于1.5/3/5倍。
>    -   并发度每增加1，大约增加客户端10MB内存，服务端大约35MB内存。
>-   当设置GUC参数support\_zero\_character为on时，表示数据库支持0x00字符的写入和读取，gs\_loader导入数据时，会将0x00按照原始样式导入，而不是受其他兼容性参数影响转换成0x20。

## 控制文件<a name="section85571127195813"></a>

-   语法说明：

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
    [ WHEN { (start:end) | column_name } {= | !=} ‘string’ ]
    [(
    col_name [ [ POSITION ({ start:end }) ]  ["sql_string"] ] | [ FILLER [column_type [external] ] ] | [ CONSTANT "string" ] | [ SEQUENCE ( { COUNT | MAX | integer } [, incr] ) ]|[NULLIF (COL=BLANKS)]
    [, ...]
    )]
    ```

-   参数说明：

    -   **CHARACTERSET**

        字符集。

        取值范围：字符串，目前可指定为，'AL32UTF8','zhs16gbk','zhs32gb18030'。

        注意：控制文件中**CHARACTERSET**指定的字符集，应该和文件的编码格式保持一致，否则会报错或者导入数据乱码。

    -   **INFILE**

        当前关键字无效，并在控制文件中需要单独占一行，运行时候会忽略该关键字。需要用户在gs\_loader命令行参数中指定对应的数据文件。

    -   **BADFILE**

        当前关键字无效，运行时候会忽略该关键字，如果gs\_loader 命令行参数没有指定badfile，则会根据对应控制文件名称生成对应的badfile文件。

    -   **OPTIONS**

        其中只有skip和rows功能生效，skip=n为导入时跳过前n条数据，rows=n为导入多少行数据后进行一次提交。命令行和控制文件同时指定时，命令行优先级更高。

    -   **INSERT | APPEND | REPLACE | TRUNCATE**

        导入模式。

        **INSERT**：如果表中有数据，则报错。

        **APPEND：**直接插入数据。

        **REPLACE：**如果表中有数据，则全部删除，然后再插入。

        **TRUNCATE：**如果表中有数据，则全部删除，然后再插入。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   在写控制文件\(.ctl\)文件时，在INTO TABLE table\_name语句前后都可以指定（导入模式，INSERT | APPEND | REPLACE | TRUNCATE），使用优先级为：在INTO TABLE table\_name语句后面指定导入模式优先级高于在INTO TABLE table\_name语句前面指定导入模式，在INTO TABLE table\_name语句后面指定导入模式会覆盖在前面指定的导入模式。
        >-   当开启多个gs\_loader会话，并发地向同一张表中导入数据时，推荐以APPEND的方式进行导入，以INSERT|REPLACE|TRUNCATE的方式会出现导入报错或数据导入不全的问题。

    -   **FIELDS CSV**

        标识使用copy的CSV模式。在CSV模式下分隔符缺省值为逗号，引号字符的缺省值为双引号。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   当前CSV模式下，被双引号包含的换行符被视为字段数据的一部分。
        >-   CSV模式下，设置了GUC参数a\_format\_copy\_version为's1'时，会跳过字段开头空格。并且当某个字段第一个非空格字符不是enclosed字符时，忽略enclosed设置。当未匹配到关闭enclosed字符，先匹配到行末时，会进行报错。
        >-   CSV模式下，在不打开0字符GUC开关support\_zero\_characters时，如果使用了compatible\_nul或者compatible\_illegal\_chars参数对0x00字符进行兼容，由于0x00转换0x20的行为发生在跳过开头空格的行为之前，因此字段开头的0x00字符会被当作0x20处理被删除掉。

    -   **table\_name**

        表的名称（可以有模式修饰）。

        取值范围：已存在的表名。

    -   **TERMINATED \[BY\] \{ 'string' \}**

        在文件中分隔各个字段的字符串，分隔符最大长度不超过10个字节。

        取值范围：不允许包含\\.abcdefghijklmnopqrstuvwxyz0123456789中的任何一个字符。不支持将nul字符设置为分隔符。

        缺省值：在文本模式下，缺省是水平制表符，在CSV模式下是一个逗号。

        >![](public_sys-resources/icon-caution.gif) **注意：** 
        >开启nul字符兼容，即compatible\_nul=true，如果指定分隔符为' '空格字符\(0x20\)时需要注意，所判断的分隔符为数据文件中已存在的空格字符，并非nul字符转换而来的空格字符。

    -   **OPTIONALLY ENCLOSED BY \{ 'string' \}**

        CSV格式文件下的引号字符。

        仅在使用FIELDS CSV参数明确说明的CSV模式下缺省值：双引号。

        其余模式下无缺省值。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   设置**OPTIONALLY ENCLOSED BY \{ 'string' \}**时，数据左边可以不带引号字符，如果有引号字符，数据左右都必须为奇数个，但个数不必相等。
        >-   当前仅CSV模式支持**OPTIONALLY ENCLOSED BY \{ 'string' \}**。当指定**OPTIONALLY ENCLOSED BY \{ 'string' \}**时，默认进入CSV模式。

    -   **TRAILING NULLCOLS**

        当数据加载时，若数据源文件中一行的多个字段缺失的处理方式。

        当一行数据的最后存在一个或多个字段为空时，按照空值处理将其导入到表中。不设置则会报错字段为空，将这行数据当作错误数据处理。

    -   **WHEN \{ \(start:end\) | column\_name \} \{= | !=\}**

        对行中的start到end之间的字符串，或者根据列名进行行过滤。

        取值范围：字符串。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   当GUC参数enable\_copy\_when\_filler=on（默认）时，支持根据FILLER类型列进行过滤。当GUC参数enable\_copy\_when\_filler=off时，则不支持。
        >-   WHEN条件后的常量字符串中不支持'\\0'、'\\r'等特殊字符。

    -   **POSITION \(\{ start:end \}\)**

        对列进行处理，根据start到end范围获取对应字符串。

    -   **"sql\_string"**

        对列进行处理，列表达式，根据表达式计算列的取值。详见[•列表达式](#li056719112099)。

        取值范围：字符串。

    -   **FILLER**

        对列进行处理，如果出现FILLER，则这个字段跳过。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >当前不支持FILLER与POSITION  **\(\{ start:end \}\)**同时使用。

    -   **column\_type \[external\]**

        在导入数据时，根据不同的数据类型对数据进行处理。详见[•数据类型](#li011619316102)。

    -   **CONSTANT**

        对列进行处理，将插入的对应字段设置为常量。

        取值范围：字符串。

    -   **SEQUENCE \( \{ COUNT | MAX | integer \} \[, incr\] \)**

        对列进行处理，生成对应的序列值。

        -   COUNT：表示根据表中数据的行数开始计算。
        -   MAX：表示根据表中这一列的最大值开始计算。
        -   integer：表示从用户指定的值开始计算。
        -   incr：表示每次递增多少。

    -   **NULLIF**

        在设置a\_format\_copy\_version等于's1'时，当指定列的数据只包含空白字符时返回NULL，否则返回trim\(COL\)，等价于列表达式 "nullif\(trim\(COL\), ''\)"。

        在设置a\_format\_copy\_version不等于's1'时，对列进行处理，在多行导入场景中，若列名后未指定sysdate、constant、position、列表达式等运算时，执行导入操作，表现为未指定NULLIF关键字的列字段设置为空。

        当前只支持COL POSITION\(\) CHAR NULLIF \(COL=BLANKS\)语法。具体使用详见[•NULLIF使用用例](#li1413683033117)。

    >![](public_sys-resources/icon-caution.gif) **注意：** 
    >-   不支持OPTIONS、INFILE、BADFILE，仅在特定场景下不报语法错误。
    >-   gs\_loader使用bad文件来记录出错数据，如果设置guc参数enable\_copy\_error\_log开启错误表，该数据来自错误表的rawrecord字段，由于错误表对于以某种编码无法读起的错误不记录rawrecord，因此bad文件中遇到此情况时记录空行。
    >-   gs\_loader在设置guc参数a\_format\_load\_with\_constraints\_violation开启支持约束冲突不回滚场景时，如果表带有BEFORE/AFTER ROW INSERT触发器，则每次提交行数不能超过1000万行。
    >-   gs\_loader在设置guc参数a\_format\_load\_with\_constraints\_violation开启支持约束冲突不回滚场景时，不支持语句级触发器。

-   bad文件对应数据为空的需要对应错误表的内容参考源文件和行号（不识别某种编码序列，不写bad文件内容，只记录空行）。

    ```
    loader=# select * from pgxc_copy_error_log;
           relname        |           begintime           | filename | lineno | rawrecord |                     detail                      
    ----------------------+-------------------------------+----------+--------+-----------+-------------------------------------------------
     public.test_gsloader | 2023-02-09 09:20:33.646843-05 | STDIN    |      1 |           | invalid byte sequence for encoding "UTF8": 0xb4
    (1 row)
    //如上例子对于loader对应的文件，查找数据文本第一行找出源数据
    ```

-   <a name="li1413683033117"></a>NULLIF使用用例

    ```
    // 建表
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
    // 数据文件 test.csv
    6007 17060072021-09-0360070001102010000000230          1        600700010000218               0        1        1        229465        3
    6007 17060072021-09-0360070001102010000000299          1        600700010000282               0        1        1        230467        3
    6007 17060072021-09-0360070001102010000000242          1        600700010000255               0        1        1        226400        3
    6007 17060072021-09-0360070001102010000000202          1        600700010000288               0        1        1        219107        3
    6007 17060072021-09-0360070001102010000000294          1        600700010000243               0        1        1        204404        3
    6007 17060072021-09-0360070001102010000000217          1        600700010000270               0        1        1        226644        3
    // 控制文件 test.ctl
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
    // 执行导入
    gs_loader -p xxx host=xxx control=test.ctl  data=test.csv -d testdb -W xxx 
    // 导入结果：导入成功
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

    从导入表中的数据可以看出在使用NULLIF关键字后，除指定NULLIF运算和sysdate运算的列执行导入操作后导入字段正常，其余未指定运算的列表现为导入字段为空。

-   <a name="li056719112099"></a>列表达式

    gs\_loader支持对指定列进行表达式转换和场景扩展：

    ```
    ({ column_name [ data_type ] [ AS transform_expr ] } [, ...])
    ```

    其中data\_type指定该列在表达式参数中的数据类型；transform\_expr为目标表达式，返回与表中目标列数据类型一致的结果值。

    示例：

    -   ctl文件中不指定列类型，源数据不满足表中列限制（数据类型限制、数据长度限制）。

        ```
        // 建表
        create table t_test(id int, text varchar(5));
        // 数据文件 test.csv
        addf2,bbbbaaa,20220907,
        // 控制文件 test.ctl
        Load Data
        TRUNCATE INTO TABLE t_test
        fields terminated by ','
        TRAILING NULLCOLS(
        id "length(trim(:id))",
        text "replace(trim(:text),'bbbb','aa')"
        )
        // guc_param file
        set a_format_copy_version='s1';
        // 执行导入
        gs_loader -p xxx host=xxx control=test.ctl  data=test.csv -d testdb -W xxx guc_param=test_guc.txt
        // 导入结果：导入成功
        select * from t_test;
         id | text  
        ----+-------
          5 | aaaaa
        (1 row)
        ```

    -   ctl文件中不指定列类型，隐式类型转换（涉及隐式类型转换，建议加上兼容性参数）。

        ```
        // 建表
        create table test(mes int, mes1 text, mes2 float8, mes3 timestamp with time zone, mes4 INTEGER);
        // 数据文件
        cat load_support_transform.data
        1,mmoo,12.6789,Thu Jan 01 15:04:28 1970 PST,32767
        2,yyds,180.883,Thu Jun 21 19:00:00 2012 PDT,32768
        // 控制文件
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
        //执行导入
        gs_loader -p xxx host=xxx control=load_support_transform.ctl data=load_support_transform.data -d testdb -W xxx guc_param=test_guc.txt 
        // 导入结果：导入成功
        select * from test;
         mes |    mes1     |  mes2   |          mes3          | mes4  
        -----+-------------+---------+------------------------+-------
           1 | mmoo12.6789 | 13.6789 | 1970-01-01 00:00:00+08 | 32767
           2 | yyds180.883 | 181.883 | 2012-01-01 00:00:00+08 | 32768
        ```

-   <a name="li011619316102"></a>数据类型

    对应控制文件中的column\_type \[external\]，在加载数据时，根据不同的数据类型对数据进行处理。gs\_loader中可以将数据类型分为普通数据类型和特殊数据类型。

    -   普通数据类型
        -   CHAR \[\(length\)\]：

            按照字段分隔符读取数据，并转换使用CHAR类型来保存值。length表示单条数据的最大长度，以字节为单位，通常一个字符占用一个字节，并且可以缺省，分为以下几种场景：

            -   缺省对length长度的声明时，length的值会根据POSITION的声明来继承最大长度值。
            -   声明了length的长度，则它会覆盖POSITION中对于最大长度的声明。
            -   缺省了length的声明，同时也缺省了POSITION的声明，length的长度会根据分隔符间长度进行设置。
            -   对于长度声明的优先级：length \> POSITION \> 分隔符。
            -   缺省length，POSITION，分隔符的声明时，会从当前位置读到行结束符为止。
            -   如果实际数据长度超过了length声明的最大长度，会报错。

        -   INTEGER external \[\(length\)\]：

            按照字段分隔符读取数据，并转换使用INTEGER类型来保存值。length的使用规则与CHAR类型中相同。

        -   FLOAT external \[\(length\)\]：

            按照字段分隔符读取数据，并转换使用FLOAT类型来保存值。length的使用规则与CHAR类型中相同。

        -   DECIMAL external \(length\)：

            按照字段分隔符读取数据，并转换使用DECIMAL类型来保存值。length的使用规则与CHAR类型中相同

        -   TIMESTAMP：

            按照字段分隔符读取数据，并转换使用TIMESTAMP类型来保存值。

        -   DATE：

            按照字段分隔符读取数据，并转换使用DATE类型来保存值。

        -   DATE   external：

            按照字段分隔符读取数据，并转换使用DATE类型来保存值。

        -   SYSDATE：

            在数据库执行对应的插入时，取系统时间。该字段对应对应的值无法被引用使用，被引用使用的内容为SYSDATE字符串。

    -   特殊数据类型

        -   INTEGER：

            无视字段分隔符读取四个字节长度的字符，按小端存储逻辑保存，然后将每个字符解析成十六进制ASCII码值，最后将整体转换为十进制数来保存值。

        -   SMALLINT：

            无视字段分隔符读取两个字节长度的字符，按小端存储逻辑保存，然后将每个字符解析成十六进制ASCII码值，最后将整体转换为十进制数来保存值。

            示例：

            ```
            // 建表
            create table t_spec(col1 varchar(10), col2 varchar(10));
            // 数据文件
            cat t_spec.txt
            1234,5678,
            // 控制文件
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
            // 执行导入
            gs_loader -p xxx host=xxx control=t_spec.ctl data=t_spec.txt -d testdb -W xxx guc_param=test_guc.txt
            // 导入结果：导入成功
            select * from t_spec;
               col1    | col2
            -----------+-------
             741618482 | 13612
            (1 row)
            ```

        -   RAW：

            会把每个字符解析成ASCII码值保存，转义字符“\\”不执行转义操作。

            限制：RAW不能使用分隔符。

            示例：

            ```
            // 建表
            create table t_raw(col raw(50));
            // 数据文件
            cat t_raw.txt
            12\n\x78!<~?'k^(%s)>/c[$50]
            // 控制文件
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
            // 执行导入
            gs_loader -p xxx host=xxx control=t_raw.ctl data=t_raw.txt -d testdb -W xxx guc_param=test_guc.txt
            // 导入结果：导入成功
            select * from t_raw;
                                      col
            --------------------------------------------------------
             31325C6E5C783738213C7E3F276B5E282573293E2F635B2435305D
            (1 row)
            ```

        >![](public_sys-resources/icon-caution.gif) **注意：** 
        >-   在多列导入场景中，不指定guc参数时，部分position与分隔符不能同时使用。
        >-   在多列导入场景中，SYSDATE和CONSTANT运算不能和POSITION运算同时使用。
        >-   指定数据类型导入时，包含普通数据类型需要通过guc\_param设置a\_format\_copy\_version参数，包含特殊数据类型则需要通过guc\_param设置a\_format\_copy\_version和a\_format\_dev\_version及a\_format\_version参数。
        >-   列表达式涉及到系统函数时，需要根据对应功能通过guc\_param设置合适的a\_format\_dev\_version及a\_format\_version参数。
        >-   带length数据类型的使用，length需指定为大于0的整数；RAW数据类型作为特殊类型，RAW\(length\)的使用区别于普通类型的使用，如INTEGER EXTERNAL\(length\)的使用，当不指定position时，INTEGER EXTERNAL\(length\)表现为，当length小于文本文件 \(.csv/.txt等\)中对应列数据长度时报错；当length大于文本文件 \(.txt\)中对应列数据长度时，输出INTEGER EXTERNAL类型的结果。RAW\(length\)当不指定position时表现为读取length个字符。
        >-   POSITION使用时，POSITION\(start:end\)，start需设置为大于0的整数，且end值应大于等于start的值。
        >-   指定POSITION时，在处理字段内容时不会省略尾部的空格；不指定POSITION时，处理字段内容时会省略尾部的空格，如果需要保留空格，需要在guc\_param所指定的文件中，已设置好a\_format\_version的前提下，添加 set behavior\_compat\_options='char\_coerce\_compat'; 详细内容请参考管理员指南中behavior\_compat\_options的设置。
        >-   并发导入时，若多个gs\_loader的discard文件名或bad文件名指向同一目录同名文件，则后一个执行的gs\_loader会中止报错。若前一个已经导入完成，则文件被覆盖。
        >    报错如下：
        >    ```
        >    ERROR: An error occurred. Please check logfile.
        >    ```
        >    log文件中：
        >    ```
        >    …lock failed: Resource temporarily unavailable…
        >    ```
        >-   控制文件中对于字段值的部分若不为空且不使用本字段内容，则不占用数据文件的位置。
        >    比如控制文件如下：
        >    ```
        >    Load Data
        >    TRUNCATE INTO TABLE gsloader
        >    fields terminated by ','
        >    TRAILING NULLCOLS(
        >    id "trim(:id)",
        >    text "to_char(SYSDATE,'yyyymmdd')",
        >    gmt_create  "trim(:gmt_create)",
        >    create_str "trim(:create_str)"
        >    )
        >    ```
        >    数据文件如下：
        >    ```
        >    11,22你好,33,
        >    ```
        >    导入结果为：
        >    ```
        >    loader=# select * from gsloader;
        >    id |  text  |     gmt_create      | create_str
        >    ----+--------+---------------------+------------
        >    11 | 2023-02-08 16:00:54 | 22你好 |  33
        >    ```

