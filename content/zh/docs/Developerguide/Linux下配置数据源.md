# Linux下配置数据源<a name="ZH-CN_TOPIC_0289900737"></a>

将openGauss提供的ODBC DRIVER（psqlodbcw.so）配置到数据源中便可使用。配置数据源需要配置“odbc.ini”和“odbcinst.ini”两个文件（在编译安装unixODBC过程中生成且默认放在“/usr/local/etc”目录下），并在服务器端进行配置。

## 操作步骤<a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_s0b78a5ac02d949ada15c29b00b5c734d"></a>

1.  获取unixODBC源码包。

    获取参考地址：https://sourceforge.net/projects/unixodbc/files/unixODBC/2.3.9/unixODBC-2.3.9pre.tar.gz/download

    下载后请先按照社区提供的完整性校验算法进行完整性校验。

2.  安装unixODBC。如果机器上已经安装了其他版本的unixODBC，可以直接覆盖安装。

    目前不支持unixODBC-2.2.1版本。以unixODBC-2.3.0版本为例，在客户端执行如下命令安装unixODBC。默认安装到“/usr/local”目录下，生成数据源文件到 “/usr/local/etc”目录下，库文件生成在“/usr/local/lib”目录。

    ```
    tar zxvf unixODBC-2.3.0.tar.gz
    cd unixODBC-2.3.0
    #修改configure文件（如果不存在，那么请修改configure.ac），找到LIB_VERSION
    #将它的值修改为"1:0:0"，这样将编译出*.so.1的动态库，与psqlodbcw.so的依赖关系相同。
    vim configure
    
    ./configure --enable-gui=no #如果要在ARM服务器上编译，请追加一个configure参数： --build=aarch64-unknown-linux-gnu 
    make
    #安装可能需要root权限
    make install
    ```

3.  替换客户端openGauss驱动程序。
    1.  将openGauss-x.x.x-ODBC.tar.gz解压。解压后会得到两个文件夹：lib与odbc，在odbc文件夹中还会有一个lib文件夹。/odbc/lib中会有“psqlodbca.la”，“psqlodbca.so”，“psqlodbcw.la”和“psqlodbcw.so”四个文件，将这四个文件拷贝到“/usr/local/lib”目录下。
    2.  将openGauss-x.x.x-ODBC.tar.gz解压后lib目录中的库拷贝到“/usr/local/lib”目录下。

4.  配置数据源。
    1.  配置ODBC驱动文件。

        在“/usr/local/etc/odbcinst.ini”文件中追加以下内容。

        ```
        [GaussMPP]
        Driver64=/usr/local/lib/psqlodbcw.so
        setup=/usr/local/lib/psqlodbcw.so
        ```

        odbcinst.ini文件中的配置参数说明如[表1](#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_td564f21e7c8e458bbd741b09896f5d91)所示。

        **表 1**  odbcinst.ini文件配置参数

        <a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_td564f21e7c8e458bbd741b09896f5d91"></a>
        <table><thead align="left"><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_rb271d7f472844a738954ee76c1e32380"><th class="cellrowborder" valign="top" width="26.340000000000003%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8250ebf049654830b8253567e694de2e"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8250ebf049654830b8253567e694de2e"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8250ebf049654830b8253567e694de2e"></a>参数</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="38.89%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ace84b030832948cdafb08ca46b7053d4"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ace84b030832948cdafb08ca46b7053d4"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ace84b030832948cdafb08ca46b7053d4"></a>描述</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="34.77%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad3bb948669de4429be3b566882116d70"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad3bb948669de4429be3b566882116d70"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad3bb948669de4429be3b566882116d70"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b696083205917"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b696083205917"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b696083205917"></a>示例</strong></p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r6bdd431c96eb4f7c85664375766de400"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"></a>[DriverName]</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"></a>驱动器名称，对应数据源DSN中的驱动名。</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a>[DRIVER_N]</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r1fbbae158f634be28568c80376a63292"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a>Driver64</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a>驱动动态库的路径。</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a>Driver64=/usr/local/lib/psqlodbcw.so</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r4e8ad74343a849f8a7224716cf20ab57"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a>setup</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a>驱动安装路径，与Driver64中动态库的路径一致。</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"></a>setup=/usr/local/lib/psqlodbcw.so</p>
        </td>
        </tr>
        </tbody>
        </table>

    2.  配置数据源文件。

        在“/usr/local/etc/odbc.ini”文件中追加以下内容。

        ```
        [MPPODBC]
        Driver=GaussMPP
        Servername=10.145.130.26（数据库Server IP）
        Database=postgres  （数据库名）
        Username=omm  （数据库用户名）
        Password=  （数据库用户密码）
        Port=8000 （数据库侦听端口）
        Sslmode=allow
        ```

        odbc.ini文件配置参数说明如[表2](#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_t55845a6555f2454297b64ce47ad3d648)所示。

        **表 2**  odbc.ini文件配置参数

        <a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_t55845a6555f2454297b64ce47ad3d648"></a>
        <table><thead align="left"><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r670b13dddd7d4cf1803d4fb238347e4f"><th class="cellrowborder" valign="top" width="30.570000000000004%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acaf03818449f45a3baf67b847f258487"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acaf03818449f45a3baf67b847f258487"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acaf03818449f45a3baf67b847f258487"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_aa54a5590250c4c4ea04282a93d622454"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_aa54a5590250c4c4ea04282a93d622454"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_aa54a5590250c4c4ea04282a93d622454"></a>参数</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="33.37%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a2996382cc39847f79d6e271605212118"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a2996382cc39847f79d6e271605212118"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a2996382cc39847f79d6e271605212118"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b522969821213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b522969821213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_b522969821213"></a>描述</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="36.059999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"></a><strong id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_abdb053af064f4fd39fba24fd58949b21"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_abdb053af064f4fd39fba24fd58949b21"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_abdb053af064f4fd39fba24fd58949b21"></a>示例</strong></p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r0fb190e64b064cd5bdc4ba6a85b7f5b5"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"></a>[DSN]</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"></a>数据源的名称。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"></a>[MPPODBC]</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r6594d9c7f185417cbb0362b69ff20436"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a>Driver</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a>驱动名，对应odbcinst.ini中的DriverName。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"></a>Driver=DRIVER_N</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ra2915c8c5cb64c31bca0b7cc97b3cb94"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a>Servername</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a>服务器的IP地址。可配置多个IP地址。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"></a>Servername=10.145.130.26</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_rf57dbfc6a8404544a5844f08783f6892"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"></a>Database</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"></a>要连接的数据库的名称。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"></a>Database=postgres</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r478d8852e4294c01bb48cbaaf087df82"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"></a>Username</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a>数据库用户名称。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a>Username=<span id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"></a>omm</span></p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r373830e4fd9c4f8997fcdde5596099f4"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a>Password</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a>数据库用户密码。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a>Password=</p>
        <div class="note" id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"></a>ODBC驱动本身已经对内存密码进行过清理，以保证用户密码在连接后不会再在内存中保留。</p>
        <p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p33900700162423"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p33900700162423"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p33900700162423"></a>但是如果配置了此参数，由于UnixODBC对数据源文件等进行缓存，可能导致密码长期保留在内存中。</p>
        <p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p9307938162511"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p9307938162511"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p9307938162511"></a>推荐在应用程序连接时，将密码传递给相应API，而非写在数据源配置文件中。同时连接成功后，应当及时清理保存密码的内存段。</p>
        </div></div>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r99417f5e349c4f7b89331e2a2d56200d"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a>Port</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a>服务器的端口号。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a>Port=<span id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"></a>8000</span></p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_rd27aa89b945d4ac6b33000b6df5c916e"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a>Sslmode</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"></a>开启SSL模式</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a>Sslmode=allow</p>
        </td>
        </tr>
        <tr id="row115681541336"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p65681140317"><a name="p65681140317"></a><a name="p65681140317"></a>Debug</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p195681543312"><a name="p195681543312"></a><a name="p195681543312"></a>设置为1时，将会打印psqlodbc驱动的mylog，日志生成目录为/tmp/。设置为0时则不会生成。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p205681419316"><a name="p205681419316"></a><a name="p205681419316"></a>Debug=1</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_row3180734193610"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"></a>UseServerSidePrepare</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"></a>是否开启数据库端扩展查询协议。</p>
        <p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p19694134018382"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p19694134018382"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p19694134018382"></a>可选值0或1，默认为1，表示打开扩展查询协议。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"></a>UseServerSidePrepare=1</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_row18741310143913"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"></a>UseBatchProtocol</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"></a>是否开启批量查询协议（打开可提高DML性能）；可选值0或者1，默认为1。</p>
        <p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p20481152784010"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p20481152784010"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p20481152784010"></a>当此值为0时，不使用批量查询协议（主要用于与早期数据库版本通信兼容）。</p>
        <p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p05131728428"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p05131728428"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p05131728428"></a>当此值为1，并且数据库support_batch_bind参数存在且为on时，将打开批量查询协议。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"></a>UseBatchProtocol=1</p>
        </td>
        </tr>
        <tr id="row3254426236"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p725410268312"><a name="p725410268312"></a><a name="p725410268312"></a>ForExtensionConnector</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p1125417269313"><a name="p1125417269313"></a><a name="p1125417269313"></a>这个开关控制着savepoint是否发送，savepoint相关问题可以注意这个开关。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p32542266317"><a name="p32542266317"></a><a name="p32542266317"></a>ForExtensionConnector=1</p>
        </td>
        </tr>
        <tr id="row102684231731"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p6268223637"><a name="p6268223637"></a><a name="p6268223637"></a>UnamedPrepStmtThreshold</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p42681323638"><a name="p42681323638"></a><a name="p42681323638"></a>每次调用SQLFreeHandle释放Stmt时，ODBC都会向server端发送一个Deallocate plan_name语句，业务中存在大量这类语句。为了减少这类语句的发送，我们将        stmt-&gt;plan_name置空，从而使得数据库识别这个为unamed stmt。增加这个参数对unamed stmt的阈值进行控制。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p0268142318319"><a name="p0268142318319"></a><a name="p0268142318319"></a>UnamedPrepStmtThreshold=100</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_row9789524184113"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p182621858115514"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p182621858115514"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p182621858115514"></a>ConnectionExtraInfo</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p1626217582555"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p1626217582555"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p1626217582555"></a>GUC参数connection_info（参见<a href=连接设置.md#zh-cn_topic_0283136886_zh-cn_topic_0237124695_section4834457114318">connection_info</a>）中显示驱动部署路径和进程属主用户的开关。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p42621158185515"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p42621158185515"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p42621158185515"></a>ConnectionExtraInfo=1</p>
        <div class="note" id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_note523613263217"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_note523613263217"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_note523613263217"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p17978439306"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p17978439306"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p17978439306"></a>默认值为0。当设置为1时，ODBC驱动会将当前驱动的部署路径、进程属主用户上报到数据库中，记录在connection_info参数（参见<a href="连接设置.md#zh-cn_topic_0283136886_zh-cn_topic_0237124695_section4834457114318">connection_info</a>）里；同时可以在<a href="PG_STAT_ACTIVITY.md">PG_STAT_ACTIVITY</a>中查询到。</p>
        </div></div>
        </td>
        </tr>
        <tr id="row151219194419"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p1812118199417"><a name="p1812118199417"></a><a name="p1812118199417"></a>BoolAsChar</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p9121419947"><a name="p9121419947"></a><a name="p9121419947"></a>设置为Yes是，Bools值将会映射为SQL_CHAR。如不设置将会映射为SQL_BIT。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p1712114193419"><a name="p1712114193419"></a><a name="p1712114193419"></a>BoolsAsChar = Yes</p>
        </td>
        </tr>
        <tr id="row1295715161419"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p195720163417"><a name="p195720163417"></a><a name="p195720163417"></a>RowVersioning</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p9957191615418"><a name="p9957191615418"></a><a name="p9957191615418"></a>当尝试更新一行数据时，设置为Yes会允许应用检测数据有没有被其他用户进行修改。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p2095791613416"><a name="p2095791613416"></a><a name="p2095791613416"></a>RowVersioning=Yes</p>
        </td>
        </tr>
        <tr id="row1429519142045"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p12954141643"><a name="p12954141643"></a><a name="p12954141643"></a>ShowSystemTables</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p529511142411"><a name="p529511142411"></a><a name="p529511142411"></a>驱动将会默认系统表格为普通SQL表格。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p162955148416"><a name="p162955148416"></a><a name="p162955148416"></a>ShowSystemTables=Yes</p>
        </td>
        </tr>
        </tbody>
        </table>

        其中关于Sslmode的选项的允许值，具体信息见下表：

        **表 3**  Sslmode的可选项及其描述

        <a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_table22136585143846"></a>
        <table><thead align="left"><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row7964795143846"><th class="cellrowborder" valign="top" width="14.87%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"></a>Sslmode</p>
        </th>
        <th class="cellrowborder" valign="top" width="18.87%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"></a>是否会启用SSL加密</p>
        </th>
        <th class="cellrowborder" valign="top" width="66.25999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"></a>描述</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row4599577143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"></a>disable</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"></a>否</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"></a>不使用SSL安全连接。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row10527338143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"></a>allow</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"></a>可能</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"></a>如果数据库服务器要求使用，则可以使用SSL安全加密连接，但不验证数据库服务器的真实性。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row19876694143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"></a>prefer</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"></a>可能</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"></a>如果数据库支持，那么建议使用SSL安全加密连接，但不验证数据库服务器的真实性。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row43737844143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"></a>require</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"></a>必须使用SSL安全连接，但是只做了数据加密，而并不验证数据库服务器的真实性。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row38957604143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p63301190143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p63301190143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p63301190143856"></a>verify-ca</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p27122799143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p27122799143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p27122799143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p49463116143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p49463116143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p49463116143856"></a>必须使用SSL安全连接，并且验证数据库是否具有可信证书机构签发的证书。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row17092427143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"></a>verify-full</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"></a>必须使用SSL安全连接，在verify-ca的验证范围之外，同时验证数据库所在主机的主机名是否与证书内容一致。<span id="text18227139123314"><a name="text18227139123314"></a><a name="text18227139123314"></a>openGauss</span>不支持此模式。</p>
        </td>
        </tr>
        </tbody>
        </table>

5.  （可选）生成SSL证书，具体请参见[证书生成](zh-cn_topic_0289900216.md)。此步骤和[6](#zh-cn_topic_0283136654_li1724551081815)在服务端与客户端通过ssl方式连接的情况下需要执行。非ssl方式连接情况下可以跳过。
6.  <a name="zh-cn_topic_0283136654_li1724551081815"></a>（可选）替换SSL证书，具体请参见[证书替换](zh-cn_topic_0289900549.md)。
7.  SSL模式：

    声明如下环境变量，同时保证client.key\*系列文件为600权限：

    ```
    退回根目录，创建.postgresql目录，并将root.crt，client.crt，client.key，client.key.cipher，client.key.rand，client.req，server.crt，server.key，server.key.cipher，server.key.rand，server.req放在此路径下。
    Unix系统下，server.crt、server.key的权限设置必须禁止任何外部或组的访问，请执行如下命令实现这一点。
    chmod 0600 server.key
    将root.crt以及server开头的证书相关文件全部拷贝进数据库install/data目录下（与postgresql.conf文件在同一路径）。
    修改postgresql.conf文件：
        ssl = on
        ssl_cert_file = 'server.crt'
        ssl_key_file = 'server.key'
        ssl_ca_file = 'root.crt'
    修改完参数后需重启数据库。
    修改配置文件odbc.ini中的sslmode参数（require或verify-ca）。
    ```

8.  <a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_l4c0173b8af93447e91aba24005e368e5"></a>配置数据库服务器。
    1.  以操作系统用户omm登录数据库主节点。
    2.  执行如下命令增加对外提供服务的网卡IP或者主机名（英文逗号分隔），其中NodeName为当前节点名称：

        ```
        gs_guc reload -N NodeName -I all -c "listen_addresses='localhost,192.168.0.100,10.11.12.13'"
        ```

        在DR（Direct Routing，LVS的直接路由DR模式）模式中需要将虚拟IP地址（10.11.12.13）加入到服务器的侦听地址列表中。

        listen\_addresses也可以配置为“\*”或“0.0.0.0”，此配置下将侦听所有网卡，但存在安全风险，不推荐用户使用，推荐用户按照需要配置IP或者主机名，打开侦听。

    3.  执行如下命令在数据库主节点配置文件中增加一条认证规则。（这里假设客户端IP地址为10.11.12.13，即远程连接的机器的IP地址）

        ```
        gs_guc reload -N all -I all -h "host all jack 10.11.12.13/32 sha256"
        ```

        >![](public_sys-resources/icon-note.gif) **说明：**  
        >-   -N all表示openGauss中的所有主机。  
        >-   -I all表示主机中的所有实例。  
        >-   -h表示指定需要在“pg\_hba.conf”增加的语句。  
        >-   all表示允许客户端连接到任意的数据库。  
        >-   jack表示连接数据库的用户。  
        >-   10.11.12.13/_32_表示只允许IP地址为10.11.12.13的主机连接。在使用过程中，请根据用户的网络进行配置修改。32表示子网掩码为1的位数，即255.255.255.255。  
        >-   sha256表示连接时jack用户的密码使用sha256算法加密。  

        如果将ODBC客户端配置在和要连接的数据库主节点在同一台机器上，则可使用local trust认证方式，如下：

        ```
        local all all trust
        ```

        如果将ODBC客户端配置在和要连接的数据库主节点在不同机器上，则需要使用sha256认证方式，如下：

        ```
        host all all xxx.xxx.xxx.xxx/32 sha256
        ```

    4.  重启openGauss。

        ```
        gs_om -t stop
        gs_om -t start
        ```

9.  在客户端配置环境变量。

    ```
    vim ~/.bashrc
    ```

    在配置文件中追加以下内容。

    ```
    export LD_LIBRARY_PATH=/usr/local/lib/:$LD_LIBRARY_PATH
    export ODBCSYSINI=/usr/local/etc
    export ODBCINI=/usr/local/etc/odbc.ini
    ```

10. 执行如下命令使设置生效。

    ```
    source ~/.bashrc
    ```


## 测试数据源配置<a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_scfaeeaa70a9448889e6fdd7e37d172c5"></a>

执行./isql -v MPPODBC（数据源名称）命令。

-   如果显示如下信息，表明配置正确，连接成功。

    ```
    +---------------------------------------+
    | Connected!                            |
    |                                       |
    | sql-statement                         |
    | help [tablename]                      |
    | quit                                  |
    |                                       |
    +---------------------------------------+
    SQL> 
    ```

-   若显示ERROR信息，则表明配置错误。请检查上述配置是否正确。

## 常见问题处理<a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_section29040424163013"></a>

-   \[UnixODBC\]\[Driver Manager\]Can't open lib 'xxx/xxx/psqlodbcw.so' : file not found.

    此问题的可能原因：

    -   odbcinst.ini文件中配置的路径不正确

        确认的方法：'ls'一下错误信息中的路径，以确保该psqlodbcw.so文件存在，同时具有执行权限。

    -   psqlodbcw.so的依赖库不存在，或者不在系统环境变量中

        确认的办法：ldd一下错误信息中的路径，如果是缺少libodbc.so.1等UnixODBC的库，那么按照“操作步骤”中的方法重新配置UnixODBC，并确保它的安装路径下的lib目录添加到了LD\_LIBRARY\_PATH中；如果是缺少其他库，请将ODBC驱动包中的lib目录添加到LD\_LIBRARY\_PATH中。


-   \[UnixODBC\]connect to server failed: no such file or directory

    此问题可能的原因：

    -   配置了错误的/不可达的数据库地址，或者端口

        请检查数据源配置中的Servername及Port配置项。

    -   服务器侦听不正确

        如果确认Servername及Port配置正确，请根据“操作步骤”中数据库服务器的相关配置，确保数据库侦听了合适的网卡及端口。

    -   防火墙及网闸设备

        请确认防火墙设置，将数据库的通信端口添加到可信端口中。

        如果有网闸设备，请确认一下相关的设置。


-   \[unixODBC\]The password-stored method is not supported.

    此问题可能原因：

    数据源中未配置sslmode配置项。

    解决办法：

    请配置该选项至allow或以上选项。此配置的更多信息，见[表3](#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_table22136585143846)。

-   Server common name "xxxx" does not match host name "xxxxx"

    此问题的原因：

    使用了SSL加密的“verify-full”选项，驱动程序会验证证书中的主机名与实际部署数据库的主机名是否一致。

    解决办法：

    碰到此问题可以使用“verify-ca”选项，不再校验主机名；或者重新生成一套与数据库所在主机名相同的CA证书。

-   Driver's SQLAllocHandle on SQL\_HANDLE\_DBC failed

    此问题的可能原因：

    可执行文件（比如UnixODBC的isql，以下都以isql为例）与数据库驱动（psqlodbcw.so）依赖于不同的odbc的库版本：libodbc.so.1或者libodbc.so.2。此问题可以通过如下方式确认：

    ```
    ldd `which isql` | grep odbc
    ldd psqlodbcw.so | grep odbc
    ```

    这时，如果输出的libodbc.so最后的后缀数字不同或者指向不同的磁盘物理文件，那么基本就可以断定是此问题。isql与psqlodbcw.so都会要求加载libodbc.so，这时如果它们加载的是不同的物理文件，便会导致两套完全同名的函数列表，同时出现在同一个可见域里（UnixODBC的libodbc.so.\*的函数导出列表完全一致），产生冲突，无法加载数据库驱动。

    解决办法：

    确定一个要使用的UnixODBC，然后卸载另外一个（比如卸载库版本号为.so.2的UnixODBC），然后将剩下的.so.1的库，新建一个同名但是后缀为.so.2的软链接，便可解决此问题。

-   FATAL: Forbid remote connection with trust method!

    由于安全原因，数据库主节点禁止openGauss内部其他节点无认证接入。

    如果要在openGauss内部访问数据库主节点，请将ODBC程序部署在数据库主节点所在机器，服务器地址使用"127.0.0.1"。建议业务系统单独部署在openGauss外部，否则可能会影响数据库运行性能。

-   \[unixODBC\]\[Driver Manager\]Invalid attribute value

    有可能是unixODBC的版本并非推荐版本，建议通过“odbcinst --version”命令排查环境中的unixODBC版本。

-   authentication method 10 not supported.

    使用开源客户端碰到此问题，可能原因：

    数据库中存储的口令校验只存储了SHA256格式哈希，而开源客户端只识别MD5校验，双方校验方法不匹配报错。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   数据库并不存储用户口令，只存储用户口令的哈希码。  
    >-   数据库当用户更新用户口令或者新建用户时，会同时存储两种格式的哈希码，这时将兼容开源的认证协议。  
    >-   但是当老版本升级到新版本时，由于哈希的不可逆性，所以数据库无法还原用户口令，进而生成新格式的哈希，所以仍然只保留了SHA256格式的哈希，导致仍然无法使用MD5做口令认证。  
    >-   MD5加密算法安全性低，存在安全风险，建议使用更安全的加密算法。  

    要解决该问题，可以更新用户口令（参见[ALTER USER](zh-cn_topic_0289900744.md)）；或者新建一个用户（参见[CREATE USER](zh-cn_topic_0289899951.md)），赋于同等权限，使用新用户连接数据库。

-   unsupported frontend protocol 3.51: server supports 1.0 to 3.0

    目标数据库版本过低，或者目标数据库为开源数据库。请使用对应版本的数据库驱动连接目标数据库。

-   FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    目标数据库主节点的pg\_hba.conf里配置了当前客户端IP使用"gss"方式来做认证，该认证算法不支持用作客户端的身份认证，请修改到"sha256"后再试。配置方法见[8](#zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_l4c0173b8af93447e91aba24005e368e5)。


