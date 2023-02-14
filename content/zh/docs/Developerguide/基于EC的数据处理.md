# 基于EC的数据处理

## 功能描述<a name="section340011111459"></a>

SQL on other openGauss是[Extension Connector](SQL-on-Anywhere.md#section134436495103)的功能之一，支持openGauss数据库实例发送SQL语句给另一个openGauss数据库实例执行，并获取执行结果，执行结果可以参与本地表关联查询或者入本地表或入本地文件系统。

## 支持openGauss数据类型<a name="section15300155741218"></a>

SQL on other openGauss目前仅支持以下数据类型：

**表 1**  SQL on other openGauss支持的数据类型

<a name="table73951538161411"></a>

<table><thead align="left"><tr id="row3395938181417"><th class="cellrowborder" valign="top" width="23.072307230723073%" id="mcps1.2.4.1.1"><p id="p439623814146"><a name="p439623814146"></a><a name="p439623814146"></a>类型分类</p>
</th>
<th class="cellrowborder" valign="top" width="37.72377237723772%" id="mcps1.2.4.1.2"><p id="p143961438151419"><a name="p143961438151419"></a><a name="p143961438151419"></a>目标数据类型</p>
</th>
<th class="cellrowborder" valign="top" width="39.2039203920392%" id="mcps1.2.4.1.3"><p id="p1639618384142"><a name="p1639618384142"></a><a name="p1639618384142"></a>本地数据类型</p>
</th>
</tr>
</thead>
<tbody><tr id="row9396123861416"><td class="cellrowborder" rowspan="7" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p175424221810"><a name="p175424221810"></a><a name="p175424221810"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p173961338111411"><a name="p173961338111411"></a><a name="p173961338111411"></a>TINYINT</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p4266166192418"><a name="p4266166192418"></a><a name="p4266166192418"></a>TINYINT</p>
</td>
</tr>
<tr id="row739663816148"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p187104105249"><a name="p187104105249"></a><a name="p187104105249"></a>SMALLINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p12714710132411"><a name="p12714710132411"></a><a name="p12714710132411"></a>SMALLINT</p>
</td>
</tr>
<tr id="row1396438111420"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p739613381147"><a name="p739613381147"></a><a name="p739613381147"></a>INTEGER</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p107581414142410"><a name="p107581414142410"></a><a name="p107581414142410"></a>INTEGER</p>
</td>
</tr>
<tr id="row53961238151417"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p839673861417"><a name="p839673861417"></a><a name="p839673861417"></a>BIGINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1416231910245"><a name="p1416231910245"></a><a name="p1416231910245"></a>BIGINT</p>
</td>
</tr>
<tr id="row1839610381143"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15396738161413"><a name="p15396738161413"></a><a name="p15396738161413"></a>FLOAT4</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p23432024182420"><a name="p23432024182420"></a><a name="p23432024182420"></a>FLOAT4</p>
</td>
</tr>
<tr id="row03961386141"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7396153811148"><a name="p7396153811148"></a><a name="p7396153811148"></a>FLOAT8</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p79534286240"><a name="p79534286240"></a><a name="p79534286240"></a>FLOAT8</p>
</td>
</tr>
<tr id="row18396133871416"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13961538201419"><a name="p13961538201419"></a><a name="p13961538201419"></a>NUMERIC(p,s)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p5385113552419"><a name="p5385113552419"></a><a name="p5385113552419"></a>NUMERIC(p,s)</p>
</td>
</tr>
<tr id="row178151839131711"><td class="cellrowborder" rowspan="6" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p18409174411209"><a name="p18409174411209"></a><a name="p18409174411209"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p38168392170"><a name="p38168392170"></a><a name="p38168392170"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p4816143931711"><a name="p4816143931711"></a><a name="p4816143931711"></a>CHAR/TEXT</p>
</td>
</tr>
<tr id="row2501124161814"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1950115461813"><a name="p1950115461813"></a><a name="p1950115461813"></a>NCHAR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p950116413189"><a name="p950116413189"></a><a name="p950116413189"></a>NCHAR/TEXT</p>
</td>
</tr>
<tr id="row55017491811"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p17501114191816"><a name="p17501114191816"></a><a name="p17501114191816"></a>VARCHAR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p55011743180"><a name="p55011743180"></a><a name="p55011743180"></a>VARCHAR/TEXT</p>
</td>
</tr>
<tr id="row114987129187"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p249814128183"><a name="p249814128183"></a><a name="p249814128183"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1498101220181"><a name="p1498101220181"></a><a name="p1498101220181"></a>VARCHAR2/TEXT</p>
</td>
</tr>
<tr id="row54980121183"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p10498151219186"><a name="p10498151219186"></a><a name="p10498151219186"></a>NVARCHAR</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p549821213181"><a name="p549821213181"></a><a name="p549821213181"></a>NVARCHAR/TEXT</p>
</td>
</tr>
<tr id="row54980121183"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p10498151219186"><a name="p10498151219186"></a><a name="p10498151219186"></a>NVARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p549821213181"><a name="p549821213181"></a><a name="p549821213181"></a>NVARCHAR2/TEXT</p>
</td>
</tr>
<tr id="row1549861221810"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2498712131811"><a name="p2498712131811"></a><a name="p2498712131811"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p114981212131819"><a name="p114981212131819"></a><a name="p114981212131819"></a>TEXT</p>
</td>
</tr>
<tr id="row84988128189"><td class="cellrowborder" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p749819120181"><a name="p749819120181"></a><a name="p749819120181"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p12498151211816"><a name="p12498151211816"></a><a name="p12498151211816"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p8498171211183"><a name="p8498171211183"></a><a name="p8498171211183"></a>BOOLEAN</p>
</td>
</tr>
<tr id="row352631852016"><td class="cellrowborder" rowspan="4" valign="top" width="23.072307230723073%" headers="mcps1.2.4.1.1 "><p id="p65021121132220"><a name="p65021121132220"></a><a name="p65021121132220"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p3526318192015"><a name="p3526318192015"></a><a name="p3526318192015"></a>TIMESTAMP[(p)]</p>
</td>
<td class="cellrowborder" valign="top" width="39.2039203920392%" headers="mcps1.2.4.1.3 "><p id="p5663631122216"><a name="p5663631122216"></a><a name="p5663631122216"></a>TIMESTAMP[(p)]</p>
</td>
</tr>
<tr id="row35267181206"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16138143314226"><a name="p16138143314226"></a><a name="p16138143314226"></a>TIMESTAMP[(p)] WITH TIME ZONE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p9526181822016"><a name="p9526181822016"></a><a name="p9526181822016"></a>TIMESTAMP[(p)] WITH TIME ZONE</p>
</td>
</tr>
<tr id="row1452616182202"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p10526111882010"><a name="p10526111882010"></a><a name="p10526111882010"></a>INTERVAL[FIELDS]</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1443813217238"><a name="p1443813217238"></a><a name="p1443813217238"></a>INTERVAL[FIELDS]</p>
</td>
</tr>
<tr id="row952620181201"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p18526191812202"><a name="p18526191812202"></a><a name="p18526191812202"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p10526181862013"><a name="p10526181862013"></a><a name="p10526181862013"></a>DATE</p>
</td>
</tr>
</tbody>
</table>



>![](public_sys-resources/icon-notice.png) **须知：**
>
>-   openGauss的编码方式设置为SQL\_ASCII时，length\(\)函数返回的是字符串数据的字节数，而不是实际的字符数。因此查询exec\_on\_extension返回数据的length时请注意，例如：
>
>     ```
>     select c2,length(c2) from exec_on_extension('libra','select * from a;') as (c1 int, c2 text);
>    ```
>
> -   对于openGauss返回的数据类型，需要使用上表中对应的类型去接收（在AS子句中指定）。如果openGauss返回的类型不在上表中，或没有按照指定对应关系去接收，则可能会出现结果不正确或转换失败。比如openGauss返回类型VARCHAR\(10\)需要使用VARCHAR\(n\)（n\>=10）或TEXT来接收。
>
> -   当openGauss端数据类型定义为CHAR\(n\)时，对于字符串长度小于n的情况会自动补齐空格，当这种数据传输到openGauss并转换为text类型时，字符串尾部的空格保留。返回的第二列就是字符串的字节数，而不是实际字符数。
>
> -   对于TIMESTAMP\[\(p\)\] WITH TIME ZONE的数据类型，要求远端数据库的时区和本地数据库的时区设置一致，否则可能出现结果错误。



## 使用前的对接配置<a name="section1179315795514"></a>

SQL on other openGauss需要unixODBC-2.3.4及openGauss ODBC，openGauss ODBC需要unixODBC-2.3.0的库支撑。主要流程与SQL on Oracle类似（相同的部分此处不予赘述）：

1.  <a name="li16860111962113"></a>以操作系统用户omm登录数据库主节点。

    在该节点上执行以下[2](#li17974541057)-[7](#li119541014192319)，中间不要切换节点。

2.  <a name="li17974541057"></a>（可选）配置Data Source密钥文件。

    该密钥文件将用于加密Data Source对象中的敏感字段username/password。若不配置系统会默认使用$GAUSSHOME/bin中server的密钥文件：server.key.cipher和server.key.rand。

    a.  使用gs\_guc工具生成密钥文件。

    ```
    gs_guc encrypt –M source –K ‘用户密钥串’ –D  ‘密钥文件存放目录’
    ```

    -   用户密钥串需至少包含3种字符，且不少于8个字符。
    -   生成后的密钥文件有两个，分别为datasource.key.cipher和datasource.key.rand。文件名称需固定不可变更。
    -   datasource.key.cipher和datasource.key.rand这两个文件，需分发到数据库实例各节点的$GAUSSHOME/bin下。

    b.  将密钥文件放入指定位置$GAUSSHOME/bin下。然后使用gs\_om ec工具将密钥文件发送到数据库实例其他节点。

    ```
    gs_om -t ec -m install --key-files --force
    ```

    更多详细信息请参考《工具参考》中“服务端工具 \> gs\_om”章节。


3.  准备package.zip压缩包，放置于$GAUSSHOME/utilslib/fc\_conf/$DSN下。路径不存在部分用户可自行创建，$DSN为以DSN为名的文件夹。DSN名必须由字母、数字、下划线组成。压缩包包含如下内容：

    ```
    openGauss-*.*.0-ODBC.tar.gz
    ```

    该压缩包可在安装包解压后找到。执行如下命令，打包为package.zip：

    ```
    zip -r package.zip openGauss-*.*.0-ODBC.tar.gz
    ```

4.  配置（远端）openGauss数据库实例侦听参数。
    a.  以操作系统用户omm登录数据库主节点。
    b.  设置远端数据库实例的侦听IP（通过remoteip设置无需执行此步骤）。

    在需要接受远程服务的DN上（假设其主机名为Linux-235，IP为10.11.12.16），将其对外提供服务的网卡IP或主机名（英文逗号分隔）添加到侦听列表中去（一般为本机IP，如果列表中已有则可以不用设置），如

    ```
    gs_guc reload -Z datanode -N Linux-235 -I all -c "listen_addresses='localhost,10.11.12.16'"
    ```

    更详细的说明请参考章节[Linux下配置数据源](zh-cn_topic_0289900737.md)中的[7](zh-cn_topic_0289900737.md#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_l4c0173b8af93447e91aba24005e368e5)。

    c.  在远端数据库实例DN设置认证方式。

    假定本地openGauss数据库实例的各节点IP地址为：10.11.12.13，10.11.12.14，10.11.12.15，如设置sha256连接认证方式，则可在远端openGauss数据库实例上进行如下设置：

    ```
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.13/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.14/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.15/32 sha256"
    ```

    对于本地openGauss数据库实例有很多节点时，且其IP连续、在一个网段，可进行批量设置，如：

    ```
    # 允许IP为10.11.12.x的任何主机进行连接访问
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.0/24 sha256"
    # 允许IP为10.11.x.x的任何主机进行连接访问
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.0.0/16 sha256"
    ```

    对于本地openGauss数据库实例有很多节点时，且其IP不连续或不在同网段，则用户可用EC的remoteIP功能进行设置（将需要设置的IP放入文本文件中，例：/opt/host/hostfile（文件路径和文件名可变更，但需要确保有读取权限）），其中每行一个IP，然后再执行如下命令设置IP：

    ```
    gs_om -t ec -m add -N /opt/host/hostfile -U username --type=remoteip
    gs_om -t ec -m add -N /opt/host/hostfile -U username --type=remoteip -L  # -L为本地模式，需要在全部节点完成上述步骤并执行该命令。
    ```

    4.  重启远端数据库实例（通过remoteip设置无需执行此步骤）。

        ```
        gs_om -t stop
        gs_om -t start
        ```


5.  <a name="li116928192517"></a>设置DSN.ini配置文件。

    在$GAUSSHOME/utilslib/fc\_conf/$DSN下生成DSN.ini文件。用户需保证文件内容与格式正确。参考示例如下：

    ```
    [libra]                              # DSN
    Driver=mppdbDriver                   # Driver名称
    Description=Sample PostgreSQL DSN    # 描述，可以没有
    Servername=XX.XX.XX.XX               # 待连接的远端openGauss数据库实例的DN的IP地址
    Database=postgres                    # 待连接的远端openGauss数据库实例的数据库名称
    Port=XXXX                            # 待连接的远端openGauss数据库实例的DN端口号
    Sslmode=allow                        # 开启SSL模式
    Fetch=10000                          # 使用服务器游标时，每次从远端拿到的数据量，默认100。可根据内存及查询结果情况调整。
    ```

6.  <a name="li748683312357"></a>执行EC自动化部署命令。

    ```
    gs_om -t ec -m add -N DSN -U username --type=native
    gs_om -t ec -m add -N DSN -U username --type=native -L  # -L为本地模式
    ```

    >![](public_sys-resources/icon-note.png) **说明：**
    >
    >使用本地模式时，需要在各个节点上分别执行[步骤1](#li16860111962113)-[5](#li116928192517)。

7.  <a name="li119541014192319"></a>调用EC的restart命令，重启数据库实例，终止om\_monitor进程，以使openGauss的进程感知到环境变量的变化。

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L为本地模式
    gs_om -t stop && gs_om -t start         #仅本地模式下执行
    ```

    >![](public_sys-resources/icon-note.png) **说明：**
    >-   使用本地模式时，需要在各个节点上分别[步骤1](#li16860111962113)-[6](#li748683312357)。
    >-   本地模式不启停数据库实例，因此需要手动执行启停命令。

8.  创建Data Source对象。

    [连接数据库](连接数据库.md)，并创建Data Source对象。比如创建对应远端openGauss数据库实例的Data Source对象ds\_libra：

    ```
    openGauss=# CREATE DATA SOURCE ds_libra type 'MPPDB' OPTIONS (DSN 'libra', USERNAME 'libra_user', PASSWORD 'libra_pwd', ENCODING 'UTF8');
    ```

    各字段含义、对象修改方法与SQL on Oracle中的[9](SQL-on-Oracle.md#li18691619432)类似。

9.  连接远端openGauss数据库实例。

    假设Data Source对象ds\_libra已经创建好，使用exec\_on\_extension函数进行连接，比如查询远端openGauss数据库实例中一张表a \(c1 int\)：

    ```
    openGauss=# SELECT * FROM exec_on_extension('ds_libra', 'select * from a;') AS (c1 int);
    ```


## 注意事项<a name="section137152213124"></a>

1.  目录$GAUSSHOME/utilslib和其中的文件env\_ec使用约束请参考《工具参考》中“服务端工具 \> gs\_om”章节。
2.  需要注意数据库实例用户对目录$GAUSSHOME/utilslib（包括其中的内容）和文件$GAUSSHOME/bin/datasource.key.\*至少具备读写权限。建议在每次使用gs\_om ec工具之前确保数据库实例用户的读写权限，否则可能会引起升级、扩容等操作的失败。
3.  用户需要保证package.zip中的内容完整，DSN.ini中的内容正确。安装部署完成后不进行修改，否则搭建好的环境有无法正常使用的风险。
4.  数据库实例管理员创建一个Data Source对象（对应odbc.ini中的某一个DSN），然后将该Data Source对象的使用权限赋予某一个用户，则该用户通过exec\_on\_extension就可以访问odbc.ini中这个DSN对应的远端数据库了。
5.  目前内存约束不完善，内存压力放在远端DN。查询大数据场景时，可能导致远端数据库实例内存吃紧，从而导致远端数据库实例无法操作。
6.  数据迁移时需要通过as子句指定表结构才能迁移成功。比如，将远端openGauss数据库实例中表a \(c1 int\)数据迁移至本地表b \(c1 int\)，使用如下语句：

    ```
    openGauss=# CREATE TABLE b AS SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    INSERT 0 1
    ```

7.  omm用户不能进行远程连接。

## 示例<a name="section1699112111585"></a>

```
-- 创建Data Source
openGauss=# CREATE DATA SOURCE librA OPTIONS (dsn 'odbc_librA', username 'mppcom', password 'Gs@123456');


-- 建远程表、插入数据
openGauss=# SELECT * FROM exec_on_extension('librA', 'create table a (c1 int);') AS (c1 text);
 c1
----
(0 rows)
openGauss=# SELECT * FROM exec_on_extension('librA', 'insert into a values (911);') AS (c1 text);
 c1
----
(0 rows)
-- 执行计划，如果计划在目标库是多列显示则此处需要以对应的列数返回
-- 此处远端openGauss数据库实例中参数 explain_perf_mode=normal
openGauss=# SELECT * FROM exec_on_extension('librA', 'explain select * from a;') AS (c1 text);
                    QUERY PLAN
--------------------------------------------------
 Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
   Node/s: All datanodes
(2 rows)
openGauss=# SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
 c1
-----
 911
(1 row)
-- 此处发送的SQL语句返回两列，但函数exec_on_extension只返回一列，注意靠前匹配原则
openGauss=# SELECT * FROM exec_on_extension('librA', 'select * from a a1 inner join a a2 on a1.c1=a2.c1;') AS (c1 int);
 c1
-----
 911
 911
(2 rows)

-- 与本地表关联
openGauss=# CREATE TABLE b AS SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
INSERT 0 1
openGauss=# INSERT INTO b SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
INSERT 0 1
openGauss=# SELECT * FROM b WHERE b.c1 in (SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int));
 c1
-----
 911
 911
(2 rows)

-- 其他用户使用该Data Source
openGauss=# CREATE USER tmp_usr IDENTIFIED BY 'Gs@123456';

openGauss=# GRANT USAGE ON DATA SOURCE librA TO tmp_usr;

openGauss=# \c - tmp_usr
openGauss=> SELECT * FROM exec_on_extension('librA', 'select * from a;') AS (c1 int);
 c1
-----
 911
(1 row)

-- 清除Data Source、表和用户
openGauss=>\c - omm
openGauss=# SELECT * FROM exec_on_extension('librA', 'drop table a;') AS (c1 text);
 c1
----
(0 rows)
openGauss=# DROP DATA SOURCE librA;

openGauss=# DROP TABLE b;

openGauss=# DROP USER tmp_usr;
```

## 异常处理<a name="section884931314334"></a>

EC对接openGauss时产生的常见异常，请参见[表2](#zh-cn_topic_0085032368_table1097865225410)。

**表 2**  常见EC对接openGauss的异常处理

<a name="zh-cn_topic_0085032368_table1097865225410"></a>
<table><thead align="left"><tr id="zh-cn_topic_0085032368_row771153155415"><th class="cellrowborder" valign="top" width="16.669999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0085032368_p8131653175411"><a name="zh-cn_topic_0085032368_p8131653175411"></a><a name="zh-cn_topic_0085032368_p8131653175411"></a>异常分类</p>
</th>
<th class="cellrowborder" valign="top" width="36.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0085032368_p10191753165413"><a name="zh-cn_topic_0085032368_p10191753165413"></a><a name="zh-cn_topic_0085032368_p10191753165413"></a>报错信息</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0085032368_p14258538548"><a name="zh-cn_topic_0085032368_p14258538548"></a><a name="zh-cn_topic_0085032368_p14258538548"></a>异常处理</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0085032368_row19311353195413"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0085032368_p1143753105414"><a name="zh-cn_topic_0085032368_p1143753105414"></a><a name="zh-cn_topic_0085032368_p1143753105414"></a>部署异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085032368_p10496115724915"><a name="zh-cn_topic_0085032368_p10496115724915"></a><a name="zh-cn_topic_0085032368_p10496115724915"></a>[GAUSS-50201] : The $GAUSSHOME/utilslib/fc_conf/ora/ does not exist.</p>
<p id="zh-cn_topic_0085032368_p1850175311544"><a name="zh-cn_topic_0085032368_p1850175311544"></a><a name="zh-cn_topic_0085032368_p1850175311544"></a></p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0085032368_p185711536541"><a name="zh-cn_topic_0085032368_p185711536541"></a><a name="zh-cn_topic_0085032368_p185711536541"></a>查看自动化部署log，根据日志中的报错信息，处理异常。解决异常后重新进行部署。</p>
<p id="zh-cn_topic_0085032368_p53344586316"><a name="zh-cn_topic_0085032368_p53344586316"></a><a name="zh-cn_topic_0085032368_p53344586316"></a>log所在路径如下：</p>
<a name="zh-cn_topic_0085032368_ul279530153212"></a><a name="zh-cn_topic_0085032368_ul279530153212"></a><ul id="zh-cn_topic_0085032368_ul279530153212"><li>默认路径为$GAUSSLOG/om。</li><li>使用gs_om工具进行自动化部署时，如果指定了-l参数，则日志存放在指定位置。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0085032368_row6837532545"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0085032368_p209155315542"><a name="zh-cn_topic_0085032368_p209155315542"></a><a name="zh-cn_topic_0085032368_p209155315542"></a>连接异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085032368_p14100953175412"><a name="zh-cn_topic_0085032368_p14100953175412"></a><a name="zh-cn_topic_0085032368_p14100953175412"></a>ERROR:  source "spark_ds" does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0085032368_p18105175313544"><a name="zh-cn_topic_0085032368_p18105175313544"></a><a name="zh-cn_topic_0085032368_p18105175313544"></a>需要创建DATA SOURCE，创建语句请参考<a href="CREATE-DATA-SOURCE.md">CREATE DATA SOURCE</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032368_row1611213537544"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0085032368_p912145375413"><a name="zh-cn_topic_0085032368_p912145375413"></a><a name="zh-cn_topic_0085032368_p912145375413"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085032368_p19131125365411"><a name="zh-cn_topic_0085032368_p19131125365411"></a><a name="zh-cn_topic_0085032368_p19131125365411"></a>ERROR:  invalid input syntax for integer</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0085032368_p1113919539542"><a name="zh-cn_topic_0085032368_p1113919539542"></a><a name="zh-cn_topic_0085032368_p1113919539542"></a>查看EC支持的LirbA数据类型。请参见<a href="SQL-on-Oracle.md#table11811516202811">表1</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032368_row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0085032368_p28487245319"><a name="zh-cn_topic_0085032368_p28487245319"></a><a name="zh-cn_topic_0085032368_p28487245319"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0085032368_p1021071214476"><a name="zh-cn_topic_0085032368_p1021071214476"></a><a name="zh-cn_topic_0085032368_p1021071214476"></a>ERROR:  dn_6033_6034: DSN:oracle,Fail to exec SQL with the ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="zh-cn_topic_0085032368_p1984862418311"><a name="zh-cn_topic_0085032368_p1984862418311"></a><a name="zh-cn_topic_0085032368_p1984862418311"></a>DETAIL:  [Oracle][ODBC][Ora]ORA-00942: table or view does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0085032368_p20848152453111"><a name="zh-cn_topic_0085032368_p20848152453111"></a><a name="zh-cn_topic_0085032368_p20848152453111"></a>如果执行的SQL中有表或者视图的定义不存在，就会出现这类报错。EC会将Oracle端的错误返回到EC端，如果SQL在Oracle端执行时有其他语法报错，EC也会报出相关错误信息。</p>
</td>
</tr>
</tbody>
</table>

## 相关链接<a name="section2388125415014"></a>

[CREATE DATA SOURCE](CREATE-DATA-SOURCE.md)，[SQL on Oracle](SQL-on-Oracle.md)，《工具参考》中“服务端工具 \> gs\_om”章节
