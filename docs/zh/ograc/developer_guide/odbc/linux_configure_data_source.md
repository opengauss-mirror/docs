# Linux下配置数据源<a name="ZH-CN_TOPIC_0289900737"></a>

将ograc提供的ODBC驱动（libogodbc.so）配置到数据源中便可使用。配置数据源需要配置“odbc.ini”和“odbcinst.ini”两个文件（在编译安装unixODBC过程中生成且默认放在“/usr/local/etc”目录下），并在服务器端进行配置。

## 操作步骤<a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_s0b78a5ac02d949ada15c29b00b5c734d"></a>

1.  获取unixODBC源码包。

    要求unixODBC版本不低于2.3.6。以unixODBC-2.3.6版本为例，获取地址：http://www.unixodbc.org/unixODBC-2.3.6.tar.gz

2.  安装unixODBC。如果机器上已经安装了低版本的unixODBC，应先卸载或直接覆盖安装。

    以unixODBC-2.3.6版本为例，在客户端执行如下命令安装unixODBC。默认安装到“/usr/local”目录下，生成数据源文件到 “/usr/local/etc”目录下，库文件生成在“/usr/local/lib”目录。

    ```shell
    tar zxvf unixODBC-2.3.6.tar.gz
    cd unixODBC-2.3.6
    ./configure --enable-gui=no
    make
    #安装可能需要root权限
    make install
    ```

3.  替换客户端odbc驱动程序。
    
    将ograc提供的ODBC驱动libogodbc.so复制到“/usr/local/lib”目录下，查看是否完整。
    
    ```shell
    ldd /usr/local/lib/libogodbc.so
    ```

4.  配置数据源。
    1.  配置ODBC驱动文件。

        在“/usr/local/etc/odbcinst.ini”文件中追加以下内容。

        ```shell
        [OgracMPP]
        Driver64=/usr/local/lib/libogodbc.so
        setup=/usr/local/lib/libogodbc.so
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
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a>[OgracMPP]</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r1fbbae158f634be28568c80376a63292"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a>Driver64</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a>驱动动态库的路径。</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a>Driver64=/usr/local/lib/libogodbc.so</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r4e8ad74343a849f8a7224716cf20ab57"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a>setup</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a>驱动安装路径，与Driver64中动态库的路径一致。</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7f838d6444df4566853f51533341401b"></a>setup=/usr/local/lib/libogodbc.so</p>
        </td>
        </tr>
        </tbody>
        </table>

    2.  配置数据源文件。

        在“/usr/local/etc/odbc.ini”文件中追加以下内容。

        ```shell
        [OgracDB]
        Driver=OgracMPP
        Servername=127.0.0.1
        Port=1611
        Username=test
        Password=test123
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
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p574463221213"></a>[OgracDB]</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r6594d9c7f185417cbb0362b69ff20436"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a>Driver</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a>驱动名，对应odbcinst.ini中的DriverName。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p587420421213"></a>Driver=OgracMPP</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ra2915c8c5cb64c31bca0b7cc97b3cb94"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a>Servername</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a>服务器的IP地址。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p705535321213"></a>Servername=127.0.0.1</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r478d8852e4294c01bb48cbaaf087df82"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p237028621213"></a>Username</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a>数据库用户名称。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a>Username=<span id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text542984584919"></a>test</span></p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r373830e4fd9c4f8997fcdde5596099f4"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a>Password</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a>数据库用户密码。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a>Password=test123</p>
        <div class="note" id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_note66001755162217"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p57144884162217"></a>ODBC驱动本身已经对内存密码进行过清理，以保证用户密码在连接后不会再在内存中保留。</p>
        </div></div>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_r99417f5e349c4f7b89331e2a2d56200d"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a>Port</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a>服务器的端口号。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a>Port=<span id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_text64689595438"></a>1611</span></p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_rd27aa89b945d4ac6b33000b6df5c916e"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a>sslmode</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_zh-cn_topic_0058965230_p462272821213"></a>开启SSL模式</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a>sslmode=VERIFY_CA</p>
        </td>
        </tr>
        <tr id="row115681541336"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p65681140317"><a name="p65681140317"></a><a name="p65681140317"></a>sslca</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p195681543312"><a name="p195681543312"></a><a name="p195681543312"></a>指定为ODBC侧颁发证书的根证书文件，根证书用于验证服务器证书的有效性。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p205681419316"><a name="p205681419316"></a><a name="p205681419316"></a>sslca=/usr/test/certificate/ca.crt</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_row3180734193610"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p91811034123617"></a>sslcert</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p31811134143616"></a>指定ODBC侧证书文件，包含客户端的公钥。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p318163493616"></a>sslcert=/usr/test/certificate/client.crt</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_row18741310143913"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p674191083916"></a>sslkey</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p67427101397"></a>指定ODBC侧私钥文件，用以数字签名和对公钥加密的数据进行解密。</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_p7742101083917"></a>sslkey==/usr/test/certificate/client.key</p>
        </td>
        </tr>
        
        </tbody>
        </table>

        其中关于sslmode的选项的允许值，具体信息见下表：

        **表 3**  sslmode的可选项及其描述

        <a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_table22136585143846"></a>
        <table><thead align="left"><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row7964795143846"><th class="cellrowborder" valign="top" width="14.87%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p44475740143856"></a>sslmode</p>
        </th>
        <th class="cellrowborder" valign="top" width="18.87%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p45765196143856"></a>是否启用SSL加密</p>
        </th>
        <th class="cellrowborder" valign="top" width="66.25999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p15993376143856"></a>描述</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row4599577143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p41388182143856"></a>VERIFY_CA</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p64108423143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p25399806143856"></a>必须使用SSL安全连接，并且验证数据库是否具有可信证书机构签发的证书。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row10527338143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p61520998143856"></a>DISABLED</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p17144918143856"></a>否</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p46561127143856"></a>不使用SSL安全连接。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row19876694143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p53085640143856"></a>PREFERRED</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p4969569143856"></a>可能</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p66990807143856"></a>如果数据库支持，那么建议使用SSL安全加密连接，但不验证数据库服务器的真实性。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row43737844143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p48154267143856"></a>REQUIRED</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p8181559143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p58726539143856"></a>必须使用SSL安全连接，但是只做了数据加密，而并不验证数据库服务器的真实性。</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_row17092427143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p21152121143856"></a>VERIFY_FULL</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p35600232143856"></a>是</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"></a><a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_p65046568143856"></a>必须使用SSL安全连接，在verify-ca的验证范围之外，同时验证数据库所在主机的主机名是否与证书内容一致。<span id="text18227139123314"><a name="text18227139123314"></a><a name="text18227139123314"></a>openGauss</span>不支持此模式。</p>
        </td>
        </tr>
        </tbody>
        </table>
    
5.  SSL模式的用法。

    1. 生成服务器证书。
       
       在安装数据库的服务器上进行如下操作：
    
       ```shell
       #在主机生成CA证书ca.crt和私钥ca.key
       openssl req -newkey rsa:3072 -passout pass:12345678 -keyout ca.key -x509 -days 365 -out ca.crt -subj "/C=CN/ST=BJ/O=huawei/OU=huawei/CN=CA/emailAddress=123456@xxx.com"
       #在主机生成私钥mes.key和证书请求mes.csr
       openssl req -newkey rsa:3072 -nodes -keyout mes.key -out mes.csr -subj "/C=CN/ST=BJ/L=BJ/O=huawei/OU=huawei/CN=Server/emailAddress=123456@xxx.com"
       #在主机生成证书mes.crt
       openssl x509 -req -days 365 -in mes.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out mes.crt
       ```

    2. 服务器参数配置

       在安装数据库的服务器上创建一个目录/opt/ograc/data，将生成的证书ca.crt、ca.key、ca.srl、mes.crt、mes.csr、mes.key都放到该目录下，修改文件夹和证书的权限：

       ```shell
       #修改文件夹权限，其中ogracdba为数据库安装用户
       chmod 700 /opt/ograc/data
       chown ogracdba:ogracdba /opt/ograc/data
       
       #修改证书权限
       chmod 400 /opt/ograc/data/*
       chown ogracdba:ogracdba /opt/ograc/data/*
       ```
       
    3. 添加ssl参数，开启数据库ssl模式。
    
       ```shell
       #登录数据库
       ogsql test/test123@127.0.0.1:1611 -q
       #执行如下sql添加参数
       alter system set SSL_CA = '/opt/ograc/data/ca.crt';
       alter system set SSL_CERT = '/opt/ograc/data/mes.crt';
       alter system set SSL_KEY='/opt/ograc/data/mes.key';
       
       #重启数据库
       cms res -stop db
       cms res -start db
       ```
       重启之后执行sql命令：show parameter ssl，如果查询结果HAVE_SSL的值为TRUE，则说明SSL功能成功打开。
    
    4. ODBC客户端配置SSL连接。

       在ODBC所在客户端机器上任意创建一个目录/usr/test/certificate，使用scp将服务端生成的ca.crt传到ODBC所在客户端机器上，执行如下操作：

       ```shell
       mkdir -p /usr/test/certificate
       cd /usr/test/certificate
       scp root@xxx.xxx.xx.xx:/opt/ograc/data/ca.crt .
       ```
       
       在客户端上生成私钥client.key和证书请求client.csr:

       ```shell
       openssl req -newkey rsa:3072 -nodes -keyout client.key -out client.csr -subj "/C=CN/ST=BJ/L=BJ/O=huawei/OU=huawei/CN=Server/emailAddress=123456@xxx.com"
       ```
       
       使用scp将client.csr传到数据库所在的服务器上/opt/ograc/data路径下：

       ```shell
       scp client.csr root@xxx.xxx.xx.xx:/opt/ograc/data/
       ```

    5. 生成客户端证书。

       在数据库所在服务器的/opt/ograc/data路径下生成证书client.crt，并传到客户端机器上：

       ```shell
       cd /opt/ograc/data
       openssl x509 -req -days 365 -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt
       ```

    6. 将证书传到客户端机器上。
    
       将生成的证书client.crt传到客户端机器上：

       ```shell
       cd /usr/test/certificate
       scp root@xxx.xxx.xx.xx:/opt/ograc/data/client.crt .
       ```
       
    7. 客户端ODBC参数配置
    
       给证书添加权限：

       ```shell
       chmod 400 /usr/test/certificate/*
       ```
       
       在文件odbc.ini中添加参数：

       ```shell
       sslca=/usr/test/certificate/ca.crt
       sslcert=/usr/test/certificate/client.crt
       sslkey=/usr/test/certificate/client.key
       sslmode = VERIFY_CA
       ```

6.  在客户端配置环境变量。

    ```shell
    vim ~/.bashrc
    ```

    在配置文件中追加以下内容。

    ```shell
    export PATH=/usr/local/bin:$PATH
    export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
    ```
    执行如下命令使设置生效。

    ```shell
    source ~/.bashrc
    ```
    
7.  注册驱动。
    
    ```shell
    odbcinst -i -d -f /usr/local/etc/odbcinst.ini
    ```

## 测试数据源配置<a name="zh-cn_topic_0283136654_zh-cn_topic_0237120407_zh-cn_topic_0059778464_scfaeeaa70a9448889e6fdd7e37d172c5"></a>

安装后使用isql命令进行连接验证，执行 isql OgracDB -v test test123 命令 。

-   如果显示如下信息，表明配置正确，连接成功。

    ```shell
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