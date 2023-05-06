# SQL on Oracle<a name="ZH-CN_TOPIC_0311524278"></a>

## **概述**<a name="section18645135181515"></a>

SQL on Oracle是[Extension Connector](SQL-on-Anywhere.md#section134436495103)的功能之一，支持openGauss数据库实例发送SQL语句给Oracle数据库（称为“目标库”）执行，并获取执行结果。执行结果可以参与本地表关联查询或者入本地表及本地文件系统。

## **支持的Oracle版本**<a name="section114531718357"></a>

支持连接Oracle11.2.0.1至Oracle12.2.0.1。

Oracle的odbc驱动版本要求是12.2.0.1.0。

## **支持的Oracle数据类型**<a name="section4991316142711"></a>

Oracle到openGauss的数据类型转换关系如[表1](#table11811516202811)所示。

**表 1**  Oracle到openGauss的数据类型转换关系

<a name="table11811516202811"></a>
<table><thead align="left"><tr id="row1318213167281"><th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.1"><p id="p3182141616285"><a name="p3182141616285"></a><a name="p3182141616285"></a>类型分类</p>
</th>
<th class="cellrowborder" valign="top" width="34%" id="mcps1.2.4.1.2"><p id="p1018261620289"><a name="p1018261620289"></a><a name="p1018261620289"></a>目标Oracle数据类型</p>
</th>
<th class="cellrowborder" valign="top" width="47%" id="mcps1.2.4.1.3"><p id="p418211652820"><a name="p418211652820"></a><a name="p418211652820"></a>本地<span id="text8916132012445"><a name="text8916132012445"></a><a name="text8916132012445"></a>openGauss</span>数据类型</p>
</th>
</tr>
</thead>
<tbody><tr id="row11182141652815"><td class="cellrowborder" rowspan="7" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p17521842163212"><a name="p17521842163212"></a><a name="p17521842163212"></a>NUMERIC</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p1518218169284"><a name="p1518218169284"></a><a name="p1518218169284"></a>NUMBER(p,s), p&lt;=38, s&gt;=0</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1018219168285"><a name="p1018219168285"></a><a name="p1018219168285"></a>NUMERIC(p,s)</p>
</td>
</tr>
<tr id="row318212164289"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1818281611287"><a name="p1818281611287"></a><a name="p1818281611287"></a>NUMBER(p,s), p&lt;=38, s&lt;0</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1118231672812"><a name="p1118231672812"></a><a name="p1118231672812"></a>NUMERIC(p,0)</p>
</td>
</tr>
<tr id="row171822168283"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182916142811"><a name="p15182916142811"></a><a name="p15182916142811"></a>NUMBER(p,0), p&lt;=4</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p201821164289"><a name="p201821164289"></a><a name="p201821164289"></a>SMALLINT</p>
</td>
</tr>
<tr id="row51821816182819"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p8182191622817"><a name="p8182191622817"></a><a name="p8182191622817"></a>NUMBER(p,0), p&lt;=9</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p41825162287"><a name="p41825162287"></a><a name="p41825162287"></a>INTEGER</p>
</td>
</tr>
<tr id="row16182191614286"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182516132814"><a name="p15182516132814"></a><a name="p15182516132814"></a>NUMBER(p,0), p&lt;=18</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p418271602814"><a name="p418271602814"></a><a name="p418271602814"></a>BIGINT</p>
</td>
</tr>
<tr id="row17182171610288"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p8182121632814"><a name="p8182121632814"></a><a name="p8182121632814"></a>BINARY_FLOAT</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p11182161622818"><a name="p11182161622818"></a><a name="p11182161622818"></a>FLOAT4</p>
</td>
</tr>
<tr id="row12182016132810"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p15182141632814"><a name="p15182141632814"></a><a name="p15182141632814"></a>BINARY_DOUBLE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1718271642820"><a name="p1718271642820"></a><a name="p1718271642820"></a>BINARY_DOUBLE</p>
</td>
</tr>
<tr id="row9182216102811"><td class="cellrowborder" rowspan="3" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p83456452331"><a name="p83456452331"></a><a name="p83456452331"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p9182116112817"><a name="p9182116112817"></a><a name="p9182116112817"></a>CHAR</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p390063820331"><a name="p390063820331"></a><a name="p390063820331"></a>TEXT</p>
</td>
</tr>
<tr id="row718241618285"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p51831516112814"><a name="p51831516112814"></a><a name="p51831516112814"></a>CHAR(n)</p>
</td>
</tr>
<tr id="row61832167288"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p131837163289"><a name="p131837163289"></a><a name="p131837163289"></a>VARCHAR2</p>
</td>
</tr>
<tr id="row518313166283"><td class="cellrowborder" rowspan="3" valign="top" width="19%" headers="mcps1.2.4.1.1 "><p id="p7731225840"><a name="p7731225840"></a><a name="p7731225840"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.2 "><p id="p19183201672817"><a name="p19183201672817"></a><a name="p19183201672817"></a>TIMESTAMP[(p)], p&lt;=6</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1918371652818"><a name="p1918371652818"></a><a name="p1918371652818"></a>TIMESTAMP</p>
</td>
</tr>
<tr id="row121832016172819"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1618371611286"><a name="p1618371611286"></a><a name="p1618371611286"></a>TIMESTAMP[(p)] WITH TIME ZONE, p&lt;=6</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p118341632817"><a name="p118341632817"></a><a name="p118341632817"></a>TIMESTAMP WITH TIME ZONE</p>
</td>
</tr>
<tr id="row1910011293418"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1110010273413"><a name="p1110010273413"></a><a name="p1110010273413"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p171000223416"><a name="p171000223416"></a><a name="p171000223416"></a>DATE</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **须知：**  
>
>-   对于Oracle返回的数据类型，需要使用上表中对应的类型去接收，即在AS子句中指定。如果Oracle返回的类型不在上表中，或没有按照指定对应关系去接收，则可能会出现结果不正确或转换失败。比如Oracle的任意数值类型NUMBER是不在支持范围内的。
> 
>-   openGauss的编码方式设置为SQL\_ASCII时，length\(\)函数返回的是字符串数据的字节数，而不是实际的字符数。因此查询exec\_on\_extension返回数据的length时请注意，例如：
>      ```
>     select c2,length\(c2\) from exec\_on\_extension\('oracle','select \* from a;'\) as \(c1 int, c2 text\);
>      ```
>
>-   待返回的Oracle数据中不可含有NAN或INF。
> 
>-   Oracle端数据类型定义为CHAR\(n\)时，对于字符串长度小于n的情况会自动补齐空格，当这种数据传输到openGauss并转换为text类型时，字符串尾部的空格保留。  
>
>
>      返回的第二列就是字符串的字节数，而不是实际字符数。 
> 
> -   对于TIMESTAMP\[\(p\)\] WITH TIME ZONE的数据类型，要求Oracle数据库的时区和本地数据库的时区设置一致，否则可能出现结果错误。

## **使用前的对接配置**<a name="section082131416315"></a>

SQL on Oracle需要使用标准的unixODBC-2.3.6和Oracle ODBC-12.2连接Oracle。使用前需按以下步骤准备：

1.  <a name="li16860111962113"></a>以操作系统用户omm登录数据库主节点。

    在该节点上执行以下步骤2-步骤7，中间不要切换节点。

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


3.  准备package.zip压缩包。安装配置方法可参考如下：
    
    a.  前往Oracle官网（[http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html](http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html)）下载如下三个oracle压缩包。放置于$GAUSSHOME/utilslib/fc\_conf/$DSN下。路径不存在部分用户可自行创建，$DSN是以DSN为名的文件夹。DSN名必须由字母，数字，下划线组成。
        -   oracle-instantclient-basic-linux.x64-12.2.0.1.0.zip
        -   oracle-instantclient-sqlplus-linux.x64-12.2.0.1.0.zip
        -   oracle-instantclient-odbc-linux.x64-12.2.0.1.0.zip

    b.  打包三个oracle压缩至package.zip。

        ```
        cd $GAUSSHOME/utilslib/fc_conf/$DSN
        zip -r package.zip oracle-instantclient-basic-linux.x64-12.2.0.1.0.zip oracle-instantclient-sqlplus-linux.x64-12.2.0.1.0.zip oracle-instantclient-odbc-linux.x64-12.2.0.1.0.zip
        ```


4.  配置Oracle数据库侦听参数并打开侦听进程。

    可参考如下设置。

    a.  设置listener.ora文件（添加侦听列表）：

    ```
    cd $ORACLE_HOME/network/admin
    vim listener.ora
    ```

    在文件中输入类似以下配置信息（如果已有则不用重复添加）：

    ```
    # ORACLE_HOME指定的目录，请根据实际修改。
    # ORCL是Oracle数据库的实例名称，也是准备连接的实例，请根据实际修改。
    SID_LIST_LISTENER =
      (SID_LIST =
        (SID_DESC =
          (SID_NAME = ORCL)
          (ORACLE_HOME =/opt/oracle/db/product/11.1.0/db)
          (PROGRAM = extproc)
        )
        (SID_DESC =
          (SID_NAME = ORCL)
          (ORACLE_HOME =/opt/oracle/db/product/11.1.0/db)
        )
      )
    
    # HOST和PORT分别是Oracle数据库的主机IP地址和端口号，请根据实际修改。
    
    LISTENER =
      (DESCRIPTION_LIST =
        (DESCRIPTION =
          (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
          (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
        )
      )
    
    # /opt/oracle/db是Oracle数据库的安装目录，不是ORACLE_HOME，请根据实际修改。
    ADR_BASE_LISTENER = /opt/oracle/db
    ```

    b.  设置tnsnames.ora文件（添加数据库实例）：

        ```
        cd $ORACLE_HOME/network/admin
        vim tnsnames.ora
        ```
    
        在文件中添加如下数据库实例，（如已有则不用重复添加）：
    
        ```
        # ORCL是数据库实例名称，也是准备连接的实例，请根据实际修改。
        # HOST和PORT分别是Oracle数据库的主机IP地址和端口号，请根据实际修改。
        
        ORCL =
          (DESCRIPTION =
            (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
            (CONNECT_DATA =
              (SERVER = DEDICATED)
              (SERVICE_NAME = ORCL)
            )
          )
        ```

    c.  查看侦听状态：

        通过lsnrctl命令，status是查看状态，start是打开侦听，stop是关闭侦听。以下是数据库实例ORCL处于侦听状态的示例：
    
        ```
        lsnrctl
        LSNRCTL> status
        ...
        Listening Endpoints Summary...
          (DESCRIPTION=(ADDRESS=(PROTOCOL=ipc)(KEY=EXTPROC1521)))
          (DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=linux-ss3q)(PORT=1521)))
        Services Summary...
        Service "orcl" has 1 instance(s).
          Instance "orcl", status READY, has 1 handler(s) for this service...
        Service "orclXDB" has 1 instance(s).
          Instance "orcl", status READY, has 1 handler(s) for this service...
        The command completed successfully
        ```
    
        也可以直接在终端上输入：
    
        ```
        lsnrctl stop      # 停止侦听。
        lsnrctl start     # 打开侦听。
        ```

    d.  **（可选）**配置安全连接：

    以Network Data Encryption为例，详细的配置和可选加密方法请参考Oracle文档：

    [https://docs.oracle.com/cd/E11882\_01/network.112/e40393/asoconfg.htm\#ASOAG020](https://docs.oracle.com/cd/E11882_01/network.112/e40393/asoconfg.htm#ASOAG020)

    下面给出其中一种AES256的配置方法：

    a\) 配置Server端（Oracle数据库）。

    修改配置文件sqlnet.ora

    ```
    cd $ORACLE_HOME/network/admin
    vim sqlnet.ora
    ```

    若要求采用AES256方法加密连接Server，在文件末尾追加内容（如已有则无需重复添加）：

    ```
    SQLNET.ENCRYPTION_SERVER=REQUIRED
    SQLNET.ENCRYPTION_TYPES_SERVER=(AES256)
    ```

    b\) 配置Client端（本地openGauss数据库实例）。

    修改文件$GAUSSHOME/utilslib/instantclient\_12\_2/network/admin/sqlnet.ora，首次需要添加该文件，其中内容如下：

    ```
    # NAMES.DIRECTORY_PATH指定解析方法
    # ADR_BASE是Oracle的本地家目录，就是ODBC的目录
    # 加密方法需要和Server端一致，此处是AES256
    NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
    SQLNET.ENCRYPTION_CLIENT=REQUIRED
    SQLNET.ENCRYPTION_TYPES_CLIENT=(AES256)
    ADR_BASE = $GAUSSHOME/utilslib/instantclient_12_2  # 环境变量需展开为绝对路径
    ```

    修改文件$GAUSSHOME/utilslib/instantclient\_12\_2/network/admin/tnsnames.ora，首次需要添加该文件，其中内容如下：

    ```
    # HOST和PORT分别是Oracle数据库的主机IP地址和端口号
    # SERVICE_NAME=ORCL是Oracle具体实例名称
    # Remote_ORCL是用户自己重命名的实例名，加密连接时需要指定该实例名称
    Remote_ORCL =
      (DESCRIPTION =
        (ADDRESS_LIST=
            (ADDRESS = (PROTOCOL = TCP)(HOST = XX.XX.XX.XX)(PORT = XXXX))
        )
        (CONNECT_DATA =
          (SERVER = DEDICATED)
          (SERVICE_NAME = ORCL)
        )
      )
    ```

    如果是首次添加这两个文件，则需要保证数据库实例用户至少拥有读写权限：

    ```
    cd $GAUSSHOME/utilslib/instantclient_12_2/
    chmod -R 700 network
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >为了数据传输的安全性考虑，建议用户配置此安全连接。


5.  <a name="li1722613520498"></a>设置DSN配置文件。

    进入$GAUSSHOME/utilslib/fc\_conf/$DSN，创建配置文件DSN.ini，文件内容需确保正确，其内容可参考如下。其中$GAUSSHOME和$DSN替换成相应内容。

    -   配置安全连接时，添加内容（'\#'及其后面的内容不要）:

        ```
        [oracle]                               # DSN
        Driver=Oracle ODBC driver              # Oracle ODBC名称
        Servername=Remote_ORCL                 # 用户自定义实例名
        Database=orcl                          # 待连接的Oracle实例名称
        Port=XXXX                              # Oracle的端口号
        ```


    -   不配置安全连接时，添加内容（'\#'及其后面的内容不要）:
    
        ```
        [oracle]                                # DSN
        Driver=Oracle ODBC driver               # Oracle ODBC名称
        Servername=//XX.XX.XX.XX:XXXX/orcl      #//Oracle主机IP地址:端口号/实例名称
        Database=orcl                           # 待连接的Oracle实例名称
        Port=XXXX                               # Oracle的端口号
        ```
    
        创建Data Source时，其中的dsn字段就是此处DNS.ini文件中的"oracle".


6.  <a name="li18491441322"></a>执行如下命令完成自动化部署。

    安装之前确保待分发文件有足够的权限（数据库实例用户至少拥有读写权限）。随后调用命令，命令如下。

    ```
    gs_om -t ec -m add -N DSN -U username --type=oracle
    gs_om -t ec -m add -N DSN -U username --type=oracle -L  # -L为本地模式
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >使用本地模式时，需要在各个节点上分别执[1](#li16860111962113)-[5](#li1722613520498)。

7. 安装unixODBC（仅在Oracle中有中文字符时，EC对接才需要执行此步骤）。

   unixODBC的安装推荐使用源码进行安装。

   源码可在[http://www.unixodbc.org/](http://www.unixodbc.org/)或[https://sourceforge.net/projects/unixodbc/files/unixODBC/](https://sourceforge.net/projects/unixodbc/files/unixODBC/)进行下载。

   建议使用2.3.6版本。推荐如下方法进行unixODBC安装部署：

   a\) 下载并解压。

   ```
   tar -xzvf unixODBC-2.3.6.tar.gz
   cd unixODBC-2.3.6
   ```

   b\) configure（需要gcc）。

   使用以下命令对unixODBC进行configure操作。其中，prefix为用户指定安装目录，此处的安装目录为临时的，建议指定一个空目录。

   ```
   ./configure --enable-gui=no --prefix=/tmp/unixODBC-2.3.6 --enable-iconv=yes --with-iconv-char-enc=enc
   ```

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >
   >+ 实际部署时，编译参数--with-iconv-char-enc=enc中的enc需要替换为Oracle数据库的字符集编码。
   >+ 常见的Oracle数据库中文字符编码有AL32UTF8和ZHS16GBK。
   >+ 如果Oracle字符编码为AL32UTF8，建议编译参数设置为--with-iconv-char-enc=UTF8。
   >+ 如果Oracle字符编码为ZHS16GBK，建议编译参数设置为--with-iconv-char-enc=GB18030。

   

   c\) 编译安装。

   ```
   make
   make install
   ```

   d\) 拷贝unixODBC到指定的安装目录。

   ```
   cd /tmp/unixODBC-2.3.6
   rm -rf $GPHOME/unixodbc/*
   cp -r /tmp/unixODBC-2.3.6/* $GPHOME/unixodbc/
   ```

   e\) 修改$GPHOME/unixodbc/路径下的文件权限和属主。

   ```
   chmod -R 700 $GPHOME/unixodbc/*
   chown -R user:group $GPHOME/unixodbc/*
   ```

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >实际部署时使用数据库实例安装用户和属主替换命令行中的user:group

   f\) 设置unixODBC配置文件 。参考[4](Linux下配置数据源.md#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_l2322ca6025324e47bcaac1859155e566)。\(/usr/local/etc/ 替换成$GPHOME/unixodbc/etc/\)

   g\) 设置环境变量。参考[7](Linux下配置数据源.md#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_l4c0173b8af93447e91aba24005e368e5)

   修改$GAUSSHOME/utilslib/env\_ec，修改或者追加环境变量NLS\_LANG设置。

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >可以登录Oralce数据库，执行如下语句查询NLS\_LANG的值：
   >```
   >SELECT userenv('language') FROM sys_dummy;
   >```

   h\) 把步骤d中的unixODBC文件拷贝到数据库实例的其它数据节点的$GPHOME/unixodbc/路径下，并执行步骤e和步骤f修改文件权限、属主，并配置环境变量。

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >对于OS异构的数据库实例，需要根据OS把节点分组，然后每组单独编译unixODBC（执行步骤b到步骤g）。

8.  执行如下命令，重启数据库实例，终止om\_monitor进程，以使openGauss的进程感知到环境变量的变化。

    ```
    gs_om -t ec -m restart -U username
    gs_om -t ec -m restart -U username -L   #-L为本地模式
    gs_om -t stop && gs_om -t start         #仅本地模式执行
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   使用本地模式时，需要在各个节点上分别执[步骤1](#li16860111962113)-[6](#li18491441322)。
    >-   因为本地模式不启停数据库实例，因此需要手动进行启停数据库实例。

9.  创建Data Source。

    可以参考如下操作：

    a.  [连接数据库](连接数据库.md)。
    b.  创建Data Source。

    ```
    openGauss=# CREATE DATA SOURCE ds_oracle TYPE 'ORACLE' OPTIONS (DSN 'oracle', USERNAME 'oracle_user', PASSWORD 'oracle_pwd', ENCODING 'UTF8');
    ```

    其OPTIONS中DSN字段为odbc.ini中对应Oracle数据库的DSN（在上一个步骤中即是'oracle'），USERNAME和PASSWORD字段分别为Oracle数据库的待访问实例ORCL（odbc.ini中的database）的用户名和密码，ENCODING字段为Oracle字符集的编码方式。

    如果需要修改ds\_oracle中的PASSWORD为'new\_pwd'，则可做如下操作：

    ```
    openGauss=# ALTER DATA SOURCE ds_oracle OPTIONS (SET PASSWORD 'new_pwd');
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   无论用户是否[配置了Data Source密钥文件。](#li17974541057)创建和修改Data Source时，此处提供的Oracle数据库用户名和密码在openGauss数据库实例中都将被加密保存到系统表pg\_extension\_data\_source中。
    >-   如果Oracle的字符集为中文字符集，必须保证data source定义中ENCODING、$GAUSSHOME/utilslib/env\_ec中的NLS\_LANG设置、unixODBC编译参数--with-iconv-char-enc指定的encoding三者完全一致。
    >-   如果Oracle字符集为中文字符集，推荐本地数据库的字符集编码和远端Oracle的字符集编码保持一致，避免因字符集不兼容转码失败导致的作业执行失败。
    >-   Data Source创建后，密钥文件不可更改，否则Data Source将无法使用。
    >-   用户需要保证package.zip中的内容完整，DSN.ini中的内容正确。安装部署完成后不进行修改，否则搭建好的环境有无法正常使用的风险。
    >-   创建的DATA SOURCE需要和odbc.ini中的配置保持一致，不然会导致无法找到数据源。


10. 连接Oracle数据库。

    完成以上配置后，在数据库实例正常的情况下，即可连接openGauss数据库，对Oracle数据库进行SQL操作。比如查询Oracle的一张表a\(c1 number\(9,0\)\)：

    ```
    openGauss=# SELECT * FROM exec_on_extension('ds_oracle', 'select * from a;') AS (c1 int);
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   使用exec\_on\_extension之前需要创建Data Source对象。
    >-   当发送的SQL语句在Oracle执行失败时，连接函数exec\_on\_extension也是执行失败。


## **注意事项**<a name="section1545872813814"></a>

1.  目录$GAUSSHOME/utilslib和其中的文件env\_ec使用约束请参考《工具参考》中“服务端工具 \> gs\_om”章节。
2.  需要注意数据库实例用户对目录$GAUSSHOME/utilslib（包括其中的内容）和文件$GAUSSHOME/bin/datasource.key.\*至少具备读写权限。建议在每次使用gs\_om ec工具之前确保数据库实例用户的读写权限，然后再安装部署，否则可能会引起升级、扩容等操作的失败。
3.  gs\_om ec工具分发的相对位置是指$GAUSSHOME/utilslib/fc\_conf/$DSN（Data Source密钥文件除外），与当前所在位置无关，即：在任一目录下执行下面命令意义一样，都是安装在$GAUSSHOME/utilslib/fc\_conf里面的$DSN下。

    ```
    gs_om -t ec -m add -N DSN -U username --type=oracle
    ```

4.  数据库实例管理员创建一个Data Source对象（对应某一个DSN），然后将该Data Source对象的使用权限赋予某一个用户，则该用户通过exec\_on\_extension就可以访问odbc.ini中这个DSN对应的远端数据库了。

## **示例**<a name="section14228115924218"></a>

```
-- 创建Data Source（这里的username/password是指待连接的Oracle数据库的用户名/密码）
openGauss=# CREATE DATA SOURCE oracle VERSION '11g' OPTIONS (dsn 'oracle', username 'user_ora', password 'pwd_ora', encoding 'utf8');


-- 建远程表、插入数据、查询数据
openGauss=# SELECT * FROM exec_on_extension('oracle', 'create table a (c1 int);') AS (c1 text);
 c1 
----
(0 rows)
openGauss=# SELECT * FROM exec_on_extension('oracle', 'insert into a values (119);') AS (c1 text);
 c1 
----
(0 rows)
openGauss=# SELECT * FROM exec_on_extension('oracle', 'insert into a select * from a;') AS (c1 text);
 c1 
----
(0 rows)
openGauss=# SELECT * FROM exec_on_extension('oracle', 'select * from a;') AS (c1 int);
 c1  
-----
 119
 119
(2 rows)
openGauss=# SELECT * FROM exec_on_extension('oracle', 'select * from a a1 inner join a a2 on a1.c1=a2.c1;') AS (c1 int, c2 int);
 c1  | c2  
-----+-----
 119 | 119
 119 | 119
 119 | 119
 119 | 119
(4 rows)

-- 查询结果入本地表
openGauss=# CREATE TABLE b AS SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'c1' as the distribution column by default.
HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
INSERT 0 1
openGauss=# INSERT INTO b SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
INSERT 0 1

-- 查询结果与本地表关联查询
openGauss=# SELECT * FROM b INNER JOIN (SELECT * FROM exec_on_extension('oracle', 'select * from a;') AS (c1 int)) a ON a.c1=b.c1;
 c1  | c2  
-----+-----
 119 | 119
 119 | 119
 119 | 119
 119 | 119
(4 rows)

-- 其他用户使用该Data Source
openGauss=# CREATE USER tmp_usr IDENTIFIED BY 'Gs@123456';

openGauss=# GRANT USAGE ON DATA SOURCE oracle TO tmp_usr;

openGauss=# \c - tmp_usr
openGauss=#  SELECT * FROM exec_on_extension('oracle', 'select * from a group by c1;') AS (c1 int);
 c1  
-----
 119
(1 row)

-- 清除Data Source、表和用户
openGauss=# \c - omm
openGauss=# SELECT * FROM exec_on_extension('oracle', 'drop table a;') AS (c1 text);
 c1 
----
(0 rows)
openGauss=# DROP DATA SOURCE oracle;

openGauss=# DROP TABLE b;

openGauss=# DROP USER tmp_usr;
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
<p id="p1850175311544"><a name="p1850175311544"></a><a name="p1850175311544"></a></p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p185711536541"><a name="p185711536541"></a><a name="p185711536541"></a>查看自动化部署log，根据日志中的报错信息，处理异常。解决异常后重新进行部署。</p>
<p id="p53344586316"><a name="p53344586316"></a><a name="p53344586316"></a>log所在路径如下：</p>
<a name="ul279530153212"></a><a name="ul279530153212"></a><ul id="ul279530153212"><li>默认路径为$GAUSSLOG/om。</li><li>使用gs_om工具进行自动化部署时，如果指定了-l参数，则日志存放在指定位置。</li></ul>
</td>
</tr>
<tr id="row6837532545"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p209155315542"><a name="p209155315542"></a><a name="p209155315542"></a>连接异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p14100953175412"><a name="p14100953175412"></a><a name="p14100953175412"></a>ERROR:  source "spark_ds" does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p18105175313544"><a name="p18105175313544"></a><a name="p18105175313544"></a>需要创建DATA SOURCE，创建语句请参考<a href="CREATE-DATA-SOURCE.md">CREATE DATA SOURCE</a>。</p>
</td>
</tr>
<tr id="row1611213537544"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p912145375413"><a name="p912145375413"></a><a name="p912145375413"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p19131125365411"><a name="p19131125365411"></a><a name="p19131125365411"></a>ERROR:  invalid input syntax for integer</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p1113919539542"><a name="p1113919539542"></a><a name="p1113919539542"></a>查看EC支持的LirbA数据类型。请参见<a href="#table11811516202811">表1</a>。</p>
</td>
</tr>
<tr id="row68481024133117"><td class="cellrowborder" valign="top" width="16.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p28487245319"><a name="p28487245319"></a><a name="p28487245319"></a>执行异常</p>
</td>
<td class="cellrowborder" valign="top" width="36.33%" headers="mcps1.2.4.1.2 "><p id="p1021071214476"><a name="p1021071214476"></a><a name="p1021071214476"></a>ERROR:  dn_6033_6034: DSN:oracle,Fail to exec SQL with the ODBC connection! Detail can be found in node log of 'dn_6033_6034'.</p>
<p id="p1984862418311"><a name="p1984862418311"></a><a name="p1984862418311"></a>DETAIL:  [Oracle][ODBC][Ora]ORA-00942: table or view does not exist</p>
</td>
<td class="cellrowborder" valign="top" width="47%" headers="mcps1.2.4.1.3 "><p id="p20848152453111"><a name="p20848152453111"></a><a name="p20848152453111"></a>如果执行的SQL中有表或者视图的定义不存在，就会出现这类报错。EC会将Oracle端的错误返回到EC端，如果SQL在Oracle端执行时有其他语法报错，EC也会报出相关错误信息。</p>
</td>
</tr>
</tbody>
</table>

## **相关链接**<a name="section187221926368"></a>

[CREATE DATA SOURCE](CREATE-DATA-SOURCE.md)，[SQL on Spark](SQL-on-Spark.md)，[SQL on other openGauss](SQL-on-other-openGauss.md)，《工具参考》中“服务端工具 \> gs\_om”章节

