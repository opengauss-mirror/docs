# gs\_loader<a name="ZH-CN_TOPIC_0000001198340778"></a>

## 概述<a name="zh-cn_topic_0000001155217870_section191131516122118"></a>

gs\_loader工具用于进行数据导入。gs\_loader将控制文件支持的语法转换为\\COPY语法，然后利用已有的\\COPY功能，做主要数据导入工作，同时gs\_loader将\\COPY结果记录到日志中。

## 日志等级配置<a name="zh-cn_topic_0000001155217870_section346168183816"></a>

设置日志级别，可以供开发者查看。设置后会在控制台打印工具运行的相应信息。

```
export gs_loader_log_level=debug
export gs_loader_log_level=info
export gs_loader_log_level=warning
export gs_loader_log_level=error
```

## 使用权限<a name="zh-cn_topic_0000001155217870_section1472611151954"></a>

使用者可以是数据库普通用户或管理员用户。当使用者为普通用的时候，需要管理员用户对普通用户赋权。管理员账户可以直接使用。

创建用户。

```
CREATE USER load_user WITH PASSWORD 'example@123';
```

创建相关的表并授权。

```
GRANT ALL ON FUNCTION copy_error_log_create() TO load_user;
GRANT ALL ON SCHEMA public TO load_user;
SELECT copy_error_log_create();
SELECT copy_summary_create();
GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
```

## 使用环境<a name="zh-cn_topic_0000001155217870_section4171702718"></a>

由用户自己将工具路径添加到PATH中。

## 新增系统表<a name="zh-cn_topic_0000001155217870_section1163793633413"></a>

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

## 使用指导<a name="zh-cn_topic_0000001155217870_section2511450105813"></a>

1.  （可选）仅对于普通用户。

    创建用户。

    ```
    CREATE USER load_user WITH PASSWORD 'example@123';
    ```

    创建相关的表并授权。

    ```
    GRANT ALL ON FUNCTION copy_error_log_create() TO load_user;
    GRANT ALL ON SCHEMA public TO load_user;
    SELECT copy_error_log_create();
    SELECT copy_summary_create();
    GRANT ALL PRIVILEGES ON  public.pgxc_copy_error_log To load_user;
    GRANT ALL PRIVILEGES ON  public.gs_copy_summary To load_user;
    ```

2.  创建表和控制文件，准备数据文件。

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

    创建控制文件loader.ctl。

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

    创建数据文件data.csv。

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

3.  进行导入。

    执行导入前，先确认gs\_loader工具有可执行权限。确保当前路径有文件写入权限（gs\_loader在处理过程中会生成一些临时文件，导入完成后自动删除）。

    ```
    gs_loader control=loader.ctl data=data.csv db=postgres bad=loader.bad errors=5 port=8000 passwd=example@123 user=load_user
    ```

    执行结果：

    ```
    gs_loader: version 0.1
     
     5 Rows successfully loaded. 
     
    log file is: 
     loader.log
    ```


## 参数说明<a name="zh-cn_topic_0000001155217870_section790261685316"></a>

**表 1**  gs\_loader参数说明

<a name="zh-cn_topic_0000001155217870_table179851345114513"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001155217870_row1398510451455"><th class="cellrowborder" valign="top" width="17.7017701770177%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001155217870_p13986545134518"><a name="zh-cn_topic_0000001155217870_p13986545134518"></a><a name="zh-cn_topic_0000001155217870_p13986545134518"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="52.465246524652464%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001155217870_p898654564514"><a name="zh-cn_topic_0000001155217870_p898654564514"></a><a name="zh-cn_topic_0000001155217870_p898654564514"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="29.832983298329836%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001155217870_p3986745154513"><a name="zh-cn_topic_0000001155217870_p3986745154513"></a><a name="zh-cn_topic_0000001155217870_p3986745154513"></a>参数类型 : 取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001155217870_row8986114511457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p14986174519451"><a name="zh-cn_topic_0000001155217870_p14986174519451"></a><a name="zh-cn_topic_0000001155217870_p14986174519451"></a>help</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p09861745174518"><a name="zh-cn_topic_0000001155217870_p09861745174518"></a><a name="zh-cn_topic_0000001155217870_p09861745174518"></a>查看帮助信息。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p20986545134518"><a name="zh-cn_topic_0000001155217870_p20986545134518"></a><a name="zh-cn_topic_0000001155217870_p20986545134518"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row3986144594510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p598664511452"><a name="zh-cn_topic_0000001155217870_p598664511452"></a><a name="zh-cn_topic_0000001155217870_p598664511452"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p498664516458"><a name="zh-cn_topic_0000001155217870_p498664516458"></a><a name="zh-cn_topic_0000001155217870_p498664516458"></a>数据库链接用户（与-U等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1898694544520"><a name="zh-cn_topic_0000001155217870_p1898694544520"></a><a name="zh-cn_topic_0000001155217870_p1898694544520"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row0212181404715"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p521211414710"><a name="zh-cn_topic_0000001155217870_p521211414710"></a><a name="zh-cn_topic_0000001155217870_p521211414710"></a>-U</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p172125145472"><a name="zh-cn_topic_0000001155217870_p172125145472"></a><a name="zh-cn_topic_0000001155217870_p172125145472"></a>数据库链接用户（与user等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p52121014154716"><a name="zh-cn_topic_0000001155217870_p52121014154716"></a><a name="zh-cn_topic_0000001155217870_p52121014154716"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row2098694524517"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p79860451459"><a name="zh-cn_topic_0000001155217870_p79860451459"></a><a name="zh-cn_topic_0000001155217870_p79860451459"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p59861945114516"><a name="zh-cn_topic_0000001155217870_p59861945114516"></a><a name="zh-cn_topic_0000001155217870_p59861945114516"></a>用户密码（与-W等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1898684544518"><a name="zh-cn_topic_0000001155217870_p1898684544518"></a><a name="zh-cn_topic_0000001155217870_p1898684544518"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row42933619474"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p192953654716"><a name="zh-cn_topic_0000001155217870_p192953654716"></a><a name="zh-cn_topic_0000001155217870_p192953654716"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p42918364479"><a name="zh-cn_topic_0000001155217870_p42918364479"></a><a name="zh-cn_topic_0000001155217870_p42918364479"></a>用户密码（与passwd等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p3293361479"><a name="zh-cn_topic_0000001155217870_p3293361479"></a><a name="zh-cn_topic_0000001155217870_p3293361479"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row098624517451"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p59869456454"><a name="zh-cn_topic_0000001155217870_p59869456454"></a><a name="zh-cn_topic_0000001155217870_p59869456454"></a>db</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p2986134524514"><a name="zh-cn_topic_0000001155217870_p2986134524514"></a><a name="zh-cn_topic_0000001155217870_p2986134524514"></a>数据库名称（必选，与-d等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1098624511451"><a name="zh-cn_topic_0000001155217870_p1098624511451"></a><a name="zh-cn_topic_0000001155217870_p1098624511451"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row59561220453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p396121294510"><a name="zh-cn_topic_0000001155217870_p396121294510"></a><a name="zh-cn_topic_0000001155217870_p396121294510"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p109631217453"><a name="zh-cn_topic_0000001155217870_p109631217453"></a><a name="zh-cn_topic_0000001155217870_p109631217453"></a>数据库名称（必选与db等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1896121215451"><a name="zh-cn_topic_0000001155217870_p1896121215451"></a><a name="zh-cn_topic_0000001155217870_p1896121215451"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row12986345124519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p12986114515454"><a name="zh-cn_topic_0000001155217870_p12986114515454"></a><a name="zh-cn_topic_0000001155217870_p12986114515454"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p3986194518452"><a name="zh-cn_topic_0000001155217870_p3986194518452"></a><a name="zh-cn_topic_0000001155217870_p3986194518452"></a>指定正在运行服务器的主机名或者Unix域套接字的路径（与-h等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1998617459458"><a name="zh-cn_topic_0000001155217870_p1998617459458"></a><a name="zh-cn_topic_0000001155217870_p1998617459458"></a>参考gsql --host参数</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row17120154013454"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p1512114017451"><a name="zh-cn_topic_0000001155217870_p1512114017451"></a><a name="zh-cn_topic_0000001155217870_p1512114017451"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p13121440194518"><a name="zh-cn_topic_0000001155217870_p13121440194518"></a><a name="zh-cn_topic_0000001155217870_p13121440194518"></a>指定正在运行服务器的主机名或者Unix域套接字的路径（与host等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p71214405452"><a name="zh-cn_topic_0000001155217870_p71214405452"></a><a name="zh-cn_topic_0000001155217870_p71214405452"></a>参考gsql --host参数</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row16986144512453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p998704594520"><a name="zh-cn_topic_0000001155217870_p998704594520"></a><a name="zh-cn_topic_0000001155217870_p998704594520"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p13987144514458"><a name="zh-cn_topic_0000001155217870_p13987144514458"></a><a name="zh-cn_topic_0000001155217870_p13987144514458"></a>数据库服务器端口（与-p等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p798734504512"><a name="zh-cn_topic_0000001155217870_p798734504512"></a><a name="zh-cn_topic_0000001155217870_p798734504512"></a>参考gsql --port参考</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1581794110464"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p1781794174616"><a name="zh-cn_topic_0000001155217870_p1781794174616"></a><a name="zh-cn_topic_0000001155217870_p1781794174616"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p181718418465"><a name="zh-cn_topic_0000001155217870_p181718418465"></a><a name="zh-cn_topic_0000001155217870_p181718418465"></a>数据库服务器端口（与port等价）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p381710413468"><a name="zh-cn_topic_0000001155217870_p381710413468"></a><a name="zh-cn_topic_0000001155217870_p381710413468"></a>参考gsql --port参考</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row4987174511455"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p16987445174518"><a name="zh-cn_topic_0000001155217870_p16987445174518"></a><a name="zh-cn_topic_0000001155217870_p16987445174518"></a>create</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p79871545204510"><a name="zh-cn_topic_0000001155217870_p79871545204510"></a><a name="zh-cn_topic_0000001155217870_p79871545204510"></a>是否创建pgxc_copy_error_log和gs_copy_summary表。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p19871545124517"><a name="zh-cn_topic_0000001155217870_p19871545124517"></a><a name="zh-cn_topic_0000001155217870_p19871545124517"></a>[true, false]，默认true</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1498744515453"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p9987204517454"><a name="zh-cn_topic_0000001155217870_p9987204517454"></a><a name="zh-cn_topic_0000001155217870_p9987204517454"></a>clean</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p1398724511451"><a name="zh-cn_topic_0000001155217870_p1398724511451"></a><a name="zh-cn_topic_0000001155217870_p1398724511451"></a>是否清理上面两张表中的内容。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p12987164518457"><a name="zh-cn_topic_0000001155217870_p12987164518457"></a><a name="zh-cn_topic_0000001155217870_p12987164518457"></a>[true, false]，默认true</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1098711459457"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p159871345104512"><a name="zh-cn_topic_0000001155217870_p159871345104512"></a><a name="zh-cn_topic_0000001155217870_p159871345104512"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p998724524513"><a name="zh-cn_topic_0000001155217870_p998724524513"></a><a name="zh-cn_topic_0000001155217870_p998724524513"></a>数据文件，可以指定多个，或者通配符多字符通配(*)以及单字符通配(?)（必选）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1698734511453"><a name="zh-cn_topic_0000001155217870_p1698734511453"></a><a name="zh-cn_topic_0000001155217870_p1698734511453"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row698715453458"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p159871845184517"><a name="zh-cn_topic_0000001155217870_p159871845184517"></a><a name="zh-cn_topic_0000001155217870_p159871845184517"></a>control</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p16987104594518"><a name="zh-cn_topic_0000001155217870_p16987104594518"></a><a name="zh-cn_topic_0000001155217870_p16987104594518"></a>控制文件名称（必选）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p6987164515458"><a name="zh-cn_topic_0000001155217870_p6987164515458"></a><a name="zh-cn_topic_0000001155217870_p6987164515458"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row19871945124510"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p69876459458"><a name="zh-cn_topic_0000001155217870_p69876459458"></a><a name="zh-cn_topic_0000001155217870_p69876459458"></a>log</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p5987194584512"><a name="zh-cn_topic_0000001155217870_p5987194584512"></a><a name="zh-cn_topic_0000001155217870_p5987194584512"></a>日志文件名称。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p20987745174516"><a name="zh-cn_topic_0000001155217870_p20987745174516"></a><a name="zh-cn_topic_0000001155217870_p20987745174516"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1898724564519"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p0987845174519"><a name="zh-cn_topic_0000001155217870_p0987845174519"></a><a name="zh-cn_topic_0000001155217870_p0987845174519"></a>bad</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p1098774584515"><a name="zh-cn_topic_0000001155217870_p1098774584515"></a><a name="zh-cn_topic_0000001155217870_p1098774584515"></a>出错行记录文件名称，也可以指定目录，根据数据文件名生成。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p4987184518454"><a name="zh-cn_topic_0000001155217870_p4987184518454"></a><a name="zh-cn_topic_0000001155217870_p4987184518454"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1498704574516"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p89881545154517"><a name="zh-cn_topic_0000001155217870_p89881545154517"></a><a name="zh-cn_topic_0000001155217870_p89881545154517"></a>discard</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p598811456452"><a name="zh-cn_topic_0000001155217870_p598811456452"></a><a name="zh-cn_topic_0000001155217870_p598811456452"></a>WHEN匹配失败行记录文件名称，也可以指定目录，根据数据文件名生成。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p1988164564510"><a name="zh-cn_topic_0000001155217870_p1988164564510"></a><a name="zh-cn_topic_0000001155217870_p1988164564510"></a>字符串</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row1798894564511"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p17988134544515"><a name="zh-cn_topic_0000001155217870_p17988134544515"></a><a name="zh-cn_topic_0000001155217870_p17988134544515"></a>errors</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p2988174534512"><a name="zh-cn_topic_0000001155217870_p2988174534512"></a><a name="zh-cn_topic_0000001155217870_p2988174534512"></a>允许数据文件中出现多少出错行。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p79881845174514"><a name="zh-cn_topic_0000001155217870_p79881845174514"></a><a name="zh-cn_topic_0000001155217870_p79881845174514"></a>整数，默认0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row7988154584512"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p1098854584514"><a name="zh-cn_topic_0000001155217870_p1098854584514"></a><a name="zh-cn_topic_0000001155217870_p1098854584514"></a>skip</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p10988154524517"><a name="zh-cn_topic_0000001155217870_p10988154524517"></a><a name="zh-cn_topic_0000001155217870_p10988154524517"></a>允许跳过数据文件的前多少行。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p9988845204511"><a name="zh-cn_topic_0000001155217870_p9988845204511"></a><a name="zh-cn_topic_0000001155217870_p9988845204511"></a>整数，默认0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row898815458452"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p39882045174510"><a name="zh-cn_topic_0000001155217870_p39882045174510"></a><a name="zh-cn_topic_0000001155217870_p39882045174510"></a>bindsize</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p17988345154516"><a name="zh-cn_topic_0000001155217870_p17988345154516"></a><a name="zh-cn_topic_0000001155217870_p17988345154516"></a>仅做语法兼容不实现功能。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p2098814510456"><a name="zh-cn_topic_0000001155217870_p2098814510456"></a><a name="zh-cn_topic_0000001155217870_p2098814510456"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001155217870_row698816455456"><td class="cellrowborder" valign="top" width="17.7017701770177%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001155217870_p15988745134513"><a name="zh-cn_topic_0000001155217870_p15988745134513"></a><a name="zh-cn_topic_0000001155217870_p15988745134513"></a>rows</p>
</td>
<td class="cellrowborder" valign="top" width="52.465246524652464%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001155217870_p7988134504516"><a name="zh-cn_topic_0000001155217870_p7988134504516"></a><a name="zh-cn_topic_0000001155217870_p7988134504516"></a>仅做语法兼容不实现功能。</p>
</td>
<td class="cellrowborder" valign="top" width="29.832983298329836%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001155217870_p898816459459"><a name="zh-cn_topic_0000001155217870_p898816459459"></a><a name="zh-cn_topic_0000001155217870_p898816459459"></a>-</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.gif) **注意：** 
>参数均为小写，不支持大写，同时兼容gsql登录方式：-p端口号，-h主机，-d数据库，-U用户名，-W密码方式。

## 控制文件<a name="zh-cn_topic_0000001155217870_section85571127195813"></a>

-   语法说明：

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
    [ WHEN { (start:end) | column_name } {= | !=} ‘string’ ]
    [(
    col_name [ [ POSITION ({ start:end }) ]  ["sql_string"] ] | [ FILLER [column_type [external] ] ] | [ CONSTANT "string" ] | [ SEQUENCE ( { COUNT | MAX | integer } [, incr] ) ]|[NULLIF (COL=BLANKS)]
    [, ...]
    )]
    ```


-   参数说明：

    -   **CHARACTERSET**

        字符集。

        取值范围：字符串。

    -   **INFILE**

        当前关键字无效，并在控制文件中需要单独占一行，运行时候会忽略该关键字。需要用户在gs\_loader命令行参数中指定对应的数据文件。

    -   **BADFILE**

        当前关键字无效，运行时候会忽略该关键字，如果gs\_laoder 命令行参数没有指定badfile,则会根据对应控制文件名称生成对应的badfile文件。

    -   **INSERT | APPEND | REPLACE | TRUNCATE**

        导入模式。

        **INSERT**：如果表中有数据，则报错。

        **APPEND：**直接插入数据。

        **REPLACE：**如果表中有数据，则全部删除，然后再插入。

        **TRUNCATE：**如果表中有数据，则全部删除，然后再插入。

    -   **table\_name**

        表的名称（可以有模式修饰）。

        取值范围：已存在的表名。

    -   **TERMINATED \[BY\] \{ 'string' \}**

        在文件中分隔各个字段的字符串，分隔符最大长度不超过10个字节。

        取值范围：不允许包含\\.abcdefghijklmnopqrstuvwxyz0123456789中的任何一个字符。

        缺省值：在文本模式下，缺省是水平制表符，在CSV模式下是一个逗号。

    -   **OPTIONALLY ENCLOSED BY \{ 'string' \}**

        CSV格式文件下的引号字符。

        缺省值：双引号。

    -   **TRAILING NULLCOLS**

        当数据加载时，若数据源文件中一行的多个字段缺失的处理方式。

    -   **WHEN \{ \(start:end\) | column\_name \} \{= | !=\}**

        对行中的start到end之间的字符串，或者根据列名进行行过滤。

        取值范围：字符串。

    -   **POSITION \(\{ start:end \}\)**

        对列进行处理，根据start到end范围获取对应字符串。

    -   **"sql\_string"**

        对列进行处理，列表达式，根据表达式计算列的取值。

        取值范围：字符串。

    -   **FILLER**

        对列进行处理，如果出现FILLER，则这个字段跳过。

    -   **CONSTANT**

        对列进行处理，将插入的对应字段设置为常量。

        取值范围：字符串。

    -   **SEQUENCE \( \{ COUNT | MAX | integer \} \[, incr\] \)**

        对列进行处理，生成对应的序列值。

        -   COUNT：表示根据表中数据的行数开始计算。
        -   MAX：表示根据表中这一列的最大值开始计算。
        -   integer：表示从用户指定的值开始计算。
        -   incr：表示每次递增多少。

    -   NULLIF

        设置字段为空，当前只支持 COL POSITION\(\) CHAR NULLIF \(COL=BLANKS\)语法。

    >![](public_sys-resources/icon-caution.gif) **注意：** 
    >OPTIONS ,INFILE,BADFILE不支持，仅在特定场景下不报语法错误。


