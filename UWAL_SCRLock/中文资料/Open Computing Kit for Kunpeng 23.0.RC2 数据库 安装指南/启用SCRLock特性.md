# 启用SCRLock特性<a name="ZH-CN_TOPIC_0000001684856952"></a>

启用SCRLock特性，需要通过修改配置文件，重启数据库使其生效。

## 前提条件<a name="section1830203416614"></a>

-   主备节点已安装包含SCRLock特性的openGauss版本。
-   已完成SCRLock特性的一键部署。

## 操作步骤<a name="section1490394153919"></a>

1.  以数据库管理用户登录管理节点。
2.  配置数据库的postgresql.conf文件。
    1.  打开postgresql.conf文件。

        ```
        vim postgresql.conf
        ```

    2.  按“i”进入编辑模式，找到如下参数，根据实际情况进行修改。参数说明请参见[表1](#table2032119112819)。

        ```
        ss_enable_scrlock = off
        ss_enable_srclock_sleep_mode = off
        ss_scrlock_server_port = 8000
        ss_scrlock_worker_count = 2
        ss_scrlock_worker_bind_core = ''
        ss_scrlock_server_bind_core = ''
        ```

        **表 1**  SCRLock的配置参数

        <a name="table2032119112819"></a>
        <table><thead align="left"><tr id="row153213142814"><th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.1"><p id="p1032118122817"><a name="p1032118122817"></a><a name="p1032118122817"></a>参数名称</p>
        </th>
        <th class="cellrowborder" valign="top" width="11.32%" id="mcps1.2.6.1.2"><p id="p12321612289"><a name="p12321612289"></a><a name="p12321612289"></a>参数类型</p>
        </th>
        <th class="cellrowborder" valign="top" width="27.68%" id="mcps1.2.6.1.3"><p id="p1792134743014"><a name="p1792134743014"></a><a name="p1792134743014"></a>参数说明</p>
        </th>
        <th class="cellrowborder" valign="top" width="31.869999999999997%" id="mcps1.2.6.1.4"><p id="p03212162814"><a name="p03212162814"></a><a name="p03212162814"></a>取值范围</p>
        </th>
        <th class="cellrowborder" valign="top" width="9.13%" id="mcps1.2.6.1.5"><p id="p133211811288"><a name="p133211811288"></a><a name="p133211811288"></a>缺省值</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row113217112281"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p16921116152919"><a name="p16921116152919"></a><a name="p16921116152919"></a>ss_enable_scrlock</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p33216114289"><a name="p33216114289"></a><a name="p33216114289"></a>布尔型</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p10321616286"><a name="p10321616286"></a><a name="p10321616286"></a>用于开启或关闭SCRLock。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul259918256327"></a><a name="ul259918256327"></a><ul id="ul259918256327"><li>on，表示开启SCRLock。</li><li>off，表示关闭SCRLock。</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p173219132818"><a name="p173219132818"></a><a name="p173219132818"></a>off</p>
        </td>
        </tr>
        <tr id="row1032171132813"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p962235515324"><a name="p962235515324"></a><a name="p962235515324"></a>ss_enable_scrlock_sleep_mode</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p173226192810"><a name="p173226192810"></a><a name="p173226192810"></a>布尔型</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p732212192811"><a name="p732212192811"></a><a name="p732212192811"></a>用于开启或关闭SCRLock睡眠模式。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><a name="ul035519605310"></a><a name="ul035519605310"></a><ul id="ul035519605310"><li>on，表示开启睡眠模式。</li><li>off，表示关闭睡眠模式。</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p432251152820"><a name="p432251152820"></a><a name="p432251152820"></a>on</p>
        </td>
        </tr>
        <tr id="row632219111286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p13393103633316"><a name="p13393103633316"></a><a name="p13393103633316"></a>ss_scrlock_server_port</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p53227110289"><a name="p53227110289"></a><a name="p53227110289"></a>整型</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p13221810289"><a name="p13221810289"></a><a name="p13221810289"></a>表示SCRLock服务端侦听端口号。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p1920015242136"><a name="p1920015242136"></a><a name="p1920015242136"></a>1024～65535</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p18913214346"><a name="p18913214346"></a><a name="p18913214346"></a>8000</p>
        </td>
        </tr>
        <tr id="row832210117286"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p10497618113418"><a name="p10497618113418"></a><a name="p10497618113418"></a>ss_scrlock_worker_count</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p13224115281"><a name="p13224115281"></a><a name="p13224115281"></a>整型</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p332217114288"><a name="p332217114288"></a><a name="p332217114288"></a>表示SCRLock客户端worker数量。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p36595403134"><a name="p36595403134"></a><a name="p36595403134"></a>2～16</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p163223112288"><a name="p163223112288"></a><a name="p163223112288"></a>2</p>
        </td>
        </tr>
        <tr id="row1532261192810"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p8930195020342"><a name="p8930195020342"></a><a name="p8930195020342"></a>ss_scrlock_worker_bind_core</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p1032219172810"><a name="p1032219172810"></a><a name="p1032219172810"></a>字符串</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p1728795315350"><a name="p1728795315350"></a><a name="p1728795315350"></a>表示SCRLock worker占用起止CPU。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p163221915285"><a name="p163221915285"></a><a name="p163221915285"></a>"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p1632214122810"><a name="p1632214122810"></a><a name="p1632214122810"></a>""</p>
        </td>
        </tr>
        <tr id="row632218172820"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.1 "><p id="p4128839123517"><a name="p4128839123517"></a><a name="p4128839123517"></a>ss_scrlock_server_bind_core</p>
        </td>
        <td class="cellrowborder" valign="top" width="11.32%" headers="mcps1.2.6.1.2 "><p id="p73229115286"><a name="p73229115286"></a><a name="p73229115286"></a>字符串</p>
        </td>
        <td class="cellrowborder" valign="top" width="27.68%" headers="mcps1.2.6.1.3 "><p id="p2032210192820"><a name="p2032210192820"></a><a name="p2032210192820"></a>表示SCRLock server占用起止CPU。</p>
        </td>
        <td class="cellrowborder" valign="top" width="31.869999999999997%" headers="mcps1.2.6.1.4 "><p id="p193221162818"><a name="p193221162818"></a><a name="p193221162818"></a>"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"</p>
        </td>
        <td class="cellrowborder" valign="top" width="9.13%" headers="mcps1.2.6.1.5 "><p id="p83223110285"><a name="p83223110285"></a><a name="p83223110285"></a>""</p>
        </td>
        </tr>
        </tbody>
        </table>

    3.  按“Esc”键，输入**:wq!**，按“Enter”保存并退出编辑。

3.  重启数据库使SCRLock特性生效。
    1.  停止openGauss。

        ```
        cm_ctl stop
        ```

    2.  启动openGauss。

        ```
        cm_ctl start
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >如果启动失败请根据openGauss日志目录下的“postgresql-YYYY-MM-DD\_HHMMSS.log”日志信息排查错误。

4.  验证SCRLock特性是否启用成功。

    ```
    gsql -d postgres -p 16600 -c "show ss_enable_scrlock"
    ```

    如果回显如下内容，则启用成功。

    ```
     ss_enable_scrlock
    -------------------
     on
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   -p 16600：16600为数据库端口号，请根据实际情况修改。
    >-   如需查看启用SCRLock特性的日志文件，可以执行以下命令动态查看最后20行。
    >    ```
    >    tail -fn20 ${GAUSSLOG}/pg_log/scrlock*.log
    >    ```

