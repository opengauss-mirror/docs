# 获取帮助<a name="ZH-CN_TOPIC_0294748948"></a>

## 操作步骤<a name="zh-cn_topic_0059778941_s24c36ac1563e42cb99f9773e8cd9c78c"></a>

-   连接数据库时，可以使用如下命令获取帮助信息。

    ```
    gsql --help
    ```

    显示如下帮助信息：

    ```
    ......
    Usage:
      gsql [OPTION]... [DBNAME [USERNAME]]
    
    General options:
      -c, --command=COMMAND    run only single command (SQL or internal) and exit
      -d, --dbname=DBNAME      database name to connect to (default: "omm")
      -f, --file=FILENAME      execute commands from file, then exit
    ......
    ```

-   连接到数据库后，可以使用如下命令获取帮助信息。

    ```
    help
    ```

    显示如下帮助信息：

    ```
    You are using gsql, the command-line interface to gaussdb.
    Type:  \copyright for distribution terms
           \h for help with SQL commands
           \? for help with gsql commands
           \g or terminate with semicolon to execute query
           \q to quit
    ```


## 任务示例<a name="zh-cn_topic_0059778941_s4dc2aaee2ce54ae1a508fe58125b9995"></a>

1.  使用如下命令连接数据库。

    ```
    gsql -d postgres -p 8000
    ```

    postgres为需要连接的数据库名称，8000为数据库主节点的端口号。

    连接成功后，系统显示类似如下信息：

    ```
    gsql ((openGauss VxxxRxxxCxx build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131）
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    ```

2.  查看gsql的帮助信息。具体执行命令请参见[表1](#zh-cn_topic_0059778941_zh-cn_topic_0058968146_table52020644)。

    **表 1**  使用gsql联机帮助

    <a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_table52020644"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_row35168989"><th class="cellrowborder" valign="top" width="30.86%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="69.14%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"></a>示例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_row11332742"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"></a>查看版权信息</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"></a>\copyright</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778941_r7c9e6b30c75c476a8ed11c601c5875bc"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"><a name="zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a><a name="zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a>查看<span id="zh-cn_topic_0283139272_zh-cn_topic_0231762800_text1489112363585"><a name="zh-cn_topic_0283139272_zh-cn_topic_0231762800_text1489112363585"></a><a name="zh-cn_topic_0283139272_zh-cn_topic_0231762800_text1489112363585"></a><span id="text39202108294"><a name="text39202108294"></a><a name="text39202108294"></a>openGauss</span></span>支持的SQL语句的帮助</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"><a name="zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a><a name="zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a>查看<span id="text426810371176"><a name="text426810371176"></a><a name="text426810371176"></a><span id="text6268183716174"><a name="text6268183716174"></a><a name="text6268183716174"></a>openGauss</span></span>支持的SQL语句的帮助</p>
    <p id="zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"><a name="zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a><a name="zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a>例如，查看<span id="text181111240141719"><a name="text181111240141719"></a><a name="text181111240141719"></a><span id="text151114409178"><a name="text151114409178"></a><a name="text151114409178"></a>openGauss</span></span>支持的所有SQL语句：</p>
    <a name="zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><a name="zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f">openGauss=# \h
    Available help:
      ABORT                            
      ALTER AGGREGATE
      ALTER APP WORKLOAD GROUP                  
    ... ...</pre>
    <p id="zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"><a name="zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"></a><a name="zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"></a>例如，查看CREATE DATABASE命令的参数可使用下面的命令：</p>
    <a name="zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><a name="zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c">openGauss=# \help CREATE DATABASE
    Command:     CREATE DATABASE
    Description: create a new database
    Syntax:
    CREATE DATABASE database_name
         [ [ WITH ] {[ OWNER [=] user_name ]|
               [ TEMPLATE [=] template ]|
               [ ENCODING [=] encoding ]|
               [ LC_COLLATE [=] lc_collate ]|
               [ LC_CTYPE [=] lc_ctype ]|
               [ DBCOMPATIBILITY [=] compatibility_type ]|
               [ TABLESPACE [=] tablespace_name ]|
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_row37254344"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"></a>查看gsql命令的帮助</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"></a><a name="zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"></a>例如，查看gsql支持的命令：</p>
    <a name="zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><a name="zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143">openGauss=# \?
    General
      \copyright             show openGauss usage and distribution terms
      \g [FILE] or ;         execute query (and send results to file or |pipe)
      \h(\help) [NAME]              help on syntax of SQL commands, * for all commands
      \q                     quit gsql
    ... ...</pre>
    </td>
    </tr>
    </tbody>
    </table>


