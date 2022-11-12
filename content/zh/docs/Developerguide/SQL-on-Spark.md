# SQL on Spark<a name="ZH-CN_TOPIC_0311524279"></a>

## **概述**<a name="section18188841175718"></a>

SQL on Spark为用户提供访问Spark数据库实例的能力：发送SQL语句、处理返回结果。[Extension Connector](SQL-on-Anywhere.md#section134436495103)兼容了之前版本的此功能，并保留了原接口函数exec\_hadoop\_sql\(text, text, text\)。由于exec\_hadoop\_sql存在安全问题，只有赋权后才能使用，建议用户使用exec\_on\_extension函数。

连接Spark数据库实例时，函数exec\_hadoop\_sql和exec\_on\_extension的区别如下：

-   函数参数个数和意义不同：

    exec\_hadoop\_sql\(text,text,text\)参数意义：DSN、SQL、Encoding。

    exec\_on\_extension\(text, text\)参数意义：Data Source对象名称、SQL。

-   需要ODBC配置不同：

    exec\_hadoop\_sql：当前执行节点上配置即可。

    exec\_on\_extension：所有openGauss节点上均需配置。

-   执行方式不同：

    exec\_hadoop\_sql：无需创建Data Source。

    exec\_on\_extension：需要创建Data Source。


## **支持的Spark数据类型**<a name="section326516910482"></a>

SQL on Spark支持的数据类型，见下表。

**表 1**  SQL on Spark支持的Spark数据类型

<a name="table04433613491"></a>
<table><thead align="left"><tr id="row174453610493"><th class="cellrowborder" valign="top" width="23.392339233923394%" id="mcps1.2.4.1.1"><p id="p184414364491"><a name="p184414364491"></a><a name="p184414364491"></a>类型分类</p>
</th>
<th class="cellrowborder" valign="top" width="43.27432743274327%" id="mcps1.2.4.1.2"><p id="p844193613493"><a name="p844193613493"></a><a name="p844193613493"></a>目标Spark数据类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p11441936114913"><a name="p11441936114913"></a><a name="p11441936114913"></a>本地<span id="text0493439162312"><a name="text0493439162312"></a><a name="text0493439162312"></a>openGauss</span>数据类型</p>
</th>
</tr>
</thead>
<tbody><tr id="row12441636194914"><td class="cellrowborder" rowspan="7" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p958594705414"><a name="p958594705414"></a><a name="p958594705414"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1744103615492"><a name="p1744103615492"></a><a name="p1744103615492"></a>TINYINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4443361491"><a name="p4443361491"></a><a name="p4443361491"></a>SMALLINT</p>
</td>
</tr>
<tr id="row1344153654913"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p4441936114920"><a name="p4441936114920"></a><a name="p4441936114920"></a>SMALLINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p2446365497"><a name="p2446365497"></a><a name="p2446365497"></a>SMALLINT</p>
</td>
</tr>
<tr id="row6441636164920"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p34403612492"><a name="p34403612492"></a><a name="p34403612492"></a>INTEGER</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p744113614914"><a name="p744113614914"></a><a name="p744113614914"></a>INTEGER</p>
</td>
</tr>
<tr id="row34433654919"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p54413684919"><a name="p54413684919"></a><a name="p54413684919"></a>BIGINT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p74433611491"><a name="p74433611491"></a><a name="p74433611491"></a>BIGINT</p>
</td>
</tr>
<tr id="row17448361498"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1244236174915"><a name="p1244236174915"></a><a name="p1244236174915"></a>FLOAT</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" headers="mcps1.2.4.1.2 "><p id="p1978495265217"><a name="p1978495265217"></a><a name="p1978495265217"></a>DOUBLE PRECISION</p>
</td>
</tr>
<tr id="row5442365493"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13441936134916"><a name="p13441936134916"></a><a name="p13441936134916"></a>DOUBLE</p>
</td>
</tr>
<tr id="row14412361492"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p114543614918"><a name="p114543614918"></a><a name="p114543614918"></a>DECIMAL</p>
</td>
</tr>
<tr id="row04593664910"><td class="cellrowborder" rowspan="3" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p72281333135419"><a name="p72281333135419"></a><a name="p72281333135419"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1945183620493"><a name="p1945183620493"></a><a name="p1945183620493"></a>STRING</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1792142965318"><a name="p1792142965318"></a><a name="p1792142965318"></a>TEXT</p>
</td>
</tr>
<tr id="row1645143617499"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p13455366499"><a name="p13455366499"></a><a name="p13455366499"></a>VARCHAR</p>
</td>
</tr>
<tr id="row9451536134917"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p7451236164913"><a name="p7451236164913"></a><a name="p7451236164913"></a>CHAR</p>
</td>
</tr>
<tr id="row345143684911"><td class="cellrowborder" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p5451436184914"><a name="p5451436184914"></a><a name="p5451436184914"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p1945836114910"><a name="p1945836114910"></a><a name="p1945836114910"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p124593611490"><a name="p124593611490"></a><a name="p124593611490"></a>BOOLEAN</p>
</td>
</tr>
<tr id="row74573664919"><td class="cellrowborder" rowspan="2" valign="top" width="23.392339233923394%" headers="mcps1.2.4.1.1 "><p id="p1159761485416"><a name="p1159761485416"></a><a name="p1159761485416"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="43.27432743274327%" headers="mcps1.2.4.1.2 "><p id="p10451536114910"><a name="p10451536114910"></a><a name="p10451536114910"></a>TIMESTAMP</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p64543618499"><a name="p64543618499"></a><a name="p64543618499"></a>TIMESTAMP</p>
</td>
</tr>
<tr id="row1245163634918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p545183694916"><a name="p545183694916"></a><a name="p545183694916"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1945636154911"><a name="p1945636154911"></a><a name="p1945636154911"></a>DATE</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.png) **须知：**  
>-   对于Spark返回的数据类型，需要使用上表中对应的类型去接收（在AS子句中指定）。如果Spark返回的类型不在上表中，或没有按照指定对应关系去接收，则可能会出现结果不正确或转换失败。  
>-   当Spark端数据类型定义为CHAR\(n\)时，对于字符串长度小于n的情况会自动补齐空格，当这种数据传输到openGauss并转换为text类型时，字符串尾部的空格保留。  
>-   openGauss的编码方式设置为SQL\_ASCII时，length\(\)函数返回的是字符串数据的字节数，而不是实际的字符数。例如，下面查询exec\_on\_extension返回数据的length时：select c2,length\(c2\) from exec\_on\_extension\('spark','select \* from a;'\) as \(c1 int, c2 text\);  
>    返回的第二列为字符串的字节数，而不是实际字符数。exec\_hadoop\_sql也有此特征。

## **使用前的对接配置**<a name="section72009141218"></a>

以下以使用exec\_on\_extension为例进行说明。以exec\_hadoop\_sql连接Spark时，无需创建Data Source。

1.  <a name="li1343510529592"></a>以操作系统用户omm登录数据库主节点。
2.  准备package.zip压缩包，放置于$GAUSSHOME/utilslib/fc\_conf/$DSN下。路径不存在部分用户可自行创建，$DSN为以DSN为名的文件夹。DSN名必须由字母、数字、下划线组成。压缩包包含如下内容：

    -   KrbClient.zip
    -   datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm
    -   kuser\_1544261037803\_keytab.tar

    执行如下命令生成压缩包：

    ```
    zip -r package.zip KrbClient.zip datasight-hiveodbc-1.0.0-1.el6.x86_64.rpm kuser_1544261037803_keytab.tar
    ```

    其中，KrbClient.zip为需要连接的spark客户端中的kerberos客户端，kuser\_1544261037803\_keytab.tar为需要连接的用户认证凭据，datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm为sparkodbc安装包。具体获取方式参考如下：

    a. 登录要连接的对端Spark数据库实例。

    b. 在主界面点击右上角“更多”选项，选择“下载客户端”进行下载。解压下载好的客户端，得到FusionInsight\_Services\_ClientConfig.tar压缩包，解压后进入FusionInsight\_Services\_ClientConfig目录下，按照准备package.zip包的方式打包KrbClient为KrbClient.zip。

    c. 进入FusionInsight\_Services\_ClientConfig的Spark2x目录下，解压DataSight\_Spark\_V100R002C50RC2SPC200\_HiveODBC.zip。进入解压后生成的Linux目录下，根据操作系统版本选择对应的rpm包。Red Hat/Centos：datasight-hiveodbc-1.0.0-1.el6.x86\_64.rpm。SUSE：datasight-hiveodbc-1.0.0-1.x86\_64.rpm。
    
    d. 在主界面点击最上方的“系统”选项进入用户界面。选择需要连接Spark的用户，点击“更多”选择认证凭据，下载kuser\_1544261037803\_keytab.tar。

3.  <a name="li13407125013577"></a>在$GAUSSHOME/utilslib/fc\_conf/$DSN下生成DSN.ini文件。用户需保证文件内容与格式正确。参考示例如下：

    ```
    [spark]
    MODE=0
    HOST=10.185.178.151
    PORT=23040
    DATABASE=zyl
    PRINCIPAL=spark/hadoop.hadoop.com@HADOOP.COM
    FRAMED=0
    NAMESPACE=sparkthriftserver
    principal="kuser@HADOOP.COM"
    ```

4.  安装datasight-hiveodbc。

    ```
    mkdir $GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

    Red Hat/Centos环境：

    ```
    rpm -ivh --nofiledigest $GAUSSHOME/utilslib/fc_conf/$DSN/datasight-hiveodbc-1.0.0-1.el6.x86_64.rpm --nodeps --force --prefix=$GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

    SUSE环境：

    ```
    rpm -ivh --nofiledigest $GAUSSHOME/utilslib/fc_conf/$DSN/datasight-hiveodbc-1.0.0-1.x86_64.rpm --nodeps --force --prefix=$GAUSSHOME/utilslib/fc_conf/$DSN/sparkodbc
    ```

5.  <a name="li18491441322"></a>执行EC自动化部署命令。部署完成后，在所有节点分别执行kinit命令，生成用户对应的票据。

    ```
    gs_om -t ec -m add -N DSN -U username --type=spark
    gs_om -t ec -m add -N DSN -U username --type=spark -L  # -L为本地模式
    kinit kuser    #这里的kuser指的是对端数据库实例上用来连接访问的用户
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >使用本地模式时，需要在各个节点上分别执行[1](#li1343510529592)-[3](#li13407125013577)。

6.  执行如下命令，重启数据库实例，终止om\_monitor进程，以使openGauss的进程感知到环境变量的变化。

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L为本地模式
    gs_om -t stop && gs_om -t start        # 仅本地模式执行
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   使用本地模式时，需要在各个节点上分别执行[1](#li1343510529592)-[4](#li18491441322)。
    >
    >-   本地模式不启停数据库实例，因此需要手动执行启停命令。

7.  创建Data Source。

    可以参考如下操作：

    a.  [连接数据库](连接数据库.md)。
    
    b.  创建Data Source。

        ```
        openGauss=# CREATE DATA SOURCE spark_ds OPTIONS(DSN 'spark_odbc', encoding 'utf8');
        ```
        
        各字段含义、对象修改方法与SQL on Oracle中的[9](SQL-on-Oracle.md#li18691619432)类似。


8.  连接Spark。

    详见下面[示例](#section15891020125711)。


## **注意事项**<a name="section1335444615416"></a>

1.  采用认证信息和文件连接的方式时，Data Source对象中可以不用提供username和password，若提供则会将此信息传给unixODBC。
2.  用户需要保证package.zip中的内容完整，DSN.ini中的内容正确。安装部署完成后不进行修改，否则搭建好的环境有无法正常使用的风险。
3.  Extension Connector仅支持连接单个Spark数据库实例。若建立多个Spark连接，则会产生认证冲突。
4.  修改Spark数据库实例的用户密码会导致认证凭据失效。需要在主界面点击最上方的“系统”选项进入用户界面。选择需要连接Spark的用户，点击“更多”，选择认证凭据后重新下载。再把下载好的认证凭据上传至GAUSSHOME/utilslib/fc\_conf/DSN/路径下。其中DSN为用户自定义DSN名。然后解压认证凭据替换已有文件。最后修改认证凭据属主为数据库实例用户。
5.  要求Spark ODBC必须用gcc 7.3及以上版本编译。

## **示例**<a name="section15891020125711"></a>

```
-- 假设Spark里已经存在表 t1 (c1 int, c2 string), 内容如下：
-- 1  spark
-- 2  hive
-- 通过 exec_hadoop_sql 函数查询，其中spark_odbc是odbc.ini中对应Spark的DSN，
openGauss=# SELECT * FROM exec_hadoop_sql('spark_odbc', 'select * from t1;', '') AS (c1 int, c2 text);
 c1 |  c2   
----+-------
  1 | spark
  2 | hive
(2 rows)
-- 通过 exec_on_extension 函数查询
openGauss=# CREATE DATA SOURCE spark_ds OPTIONS(dsn 'spark_odbc');
openGauss=# SELECT * FROM exec_on_extension ('spark_ds', 'select * from t1;') AS (c1 int, c2 text);
 c1 |  c2   
----+-------
  1 | spark
  2 | hive
(2 rows)
openGauss=# DROP DATA SOURCE spark_ds;
```

## 异常处理<a name="section12844151163616"></a>

EC对接openGauss时产生的常见异常，请参见[表2](#table1097865225410)。

**表 2**  常见EC对接openGauss的异常处理

<a name="table1097865225410"></a>
<table><thead align="left"><tr id="row771153155415"><th class="cellrowborder" valign="top" width="16.669999999999998%" id="mcps1.2.4.1.1"><p id="p8131653175411"><a name="p8131653175411"></a><a name="p8131653175411"></a>异常分类</p>
</th>
<th class="cellrowborder" valign="top" width="36.33%" id="mcps1.2.4.1.2"><p id="p10191753165413"><a name="p10191753165413"></a><a name="p10191753165413"></a>报错信息</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="p14258538548"><a name="p14258538548"></a><a name="p14258538548"></a>异常处理</p>
</th>
</tr>
</thead>
<tbody><tr id="row19311353195413"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p1143753105414"><a name="p1143753105414"></a><a name="p1143753105414"></a>部署异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p10496115724915"><a name="p10496115724915"></a><a name="p10496115724915"></a>[GAUSS-50201] : The $GAUSSHOME/utilslib/fc_conf/ora/ does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p185711536541"><a name="p185711536541"></a><a name="p185711536541"></a>查看自动化部署log，根据日志中的报错信息，处理异常。解决异常后重新进行部署。</p>
<p id="p53344586316"><a name="p53344586316"></a><a name="p53344586316"></a>log所在路径如下：</p>
<a name="ul279530153212"></a><a name="ul279530153212"></a><ul id="ul279530153212"><li>默认路径为$GAUSSLOG/om。</li><li>使用gs_om工具进行自动化部署时，如果指定了-l参数，则日志存放在指定位置。</li></ul>
</td>
</tr>
<tr id="row6837532545"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p209155315542"><a name="p209155315542"></a><a name="p209155315542"></a>连接异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p14100953175412"><a name="p14100953175412"></a><a name="p14100953175412"></a>ERROR:  source "spark_ds" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p18105175313544"><a name="p18105175313544"></a><a name="p18105175313544"></a>需要创建DATA SOURCE，创建语句请参考<a href="CREATE-DATA-SOURCE.md">CREATE DATA SOURCE</a>。</p>
</td>
</tr>
<tr id="row1611213537544"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p912145375413"><a name="p912145375413"></a><a name="p912145375413"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p19131125365411"><a name="p19131125365411"></a><a name="p19131125365411"></a>ERROR:  invalid input syntax for integer.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1113919539542"><a name="p1113919539542"></a><a name="p1113919539542"></a>查看EC支持的LirbA数据类型。请参见<a href="SQL-on-Oracle.md#table11811516202811">表1</a>。</p>
</td>
</tr>
<tr id="row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p28487245319"><a name="p28487245319"></a><a name="p28487245319"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p1114811534472"><a name="p1114811534472"></a><a name="p1114811534472"></a>ERROR:  dn_6033_6034: DSN:spark2x,Fail to get data from ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="p1984862418311"><a name="p1984862418311"></a><a name="p1984862418311"></a>DETAIL:  SQL_ERROR: cast unexpected type to date/timestamp.</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p63709537537"><a name="p63709537537"></a><a name="p63709537537"></a>如果执行的SQL语句中spark返回的数据类型与预期的数据类型不匹配，就会出现这类报错。</p>
<p id="p20848152453111"><a name="p20848152453111"></a><a name="p20848152453111"></a>如果SQL执行时有其他语法错误，EC也会将spark端的错误信息返回。</p>
</td>
</tr>
</tbody>
</table>


## **相关链接**<a name="section67639236412"></a>

[CREATE DATA SOURCE](CREATE-DATA-SOURCE.md)**，**《工具参考》中“服务端工具 \> gs\_om”章节

