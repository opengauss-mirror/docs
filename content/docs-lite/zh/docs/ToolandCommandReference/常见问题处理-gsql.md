# 常见问题处理<a name="ZH-CN_TOPIC_0294749066"></a>

## 连接性能问题<a name="zh-cn_topic_0078149561_section625869329424"></a>

-   开启了log\_hostname，但是配置了错误的DNS导致的连接性能问题。

    在连接上数据库，通过“show log\_hostname”语句，检查数据库中是否开启了log\_hostname参数。

    如果开启了相关参数，那么数据库内核会通过DNS反查客户端所在机器的主机名。这时如果数据库配置了不正确的/不可达的DNS服务器，那么会导致数据库建立连接过程较慢。此参数的更多信息，详见《数据库参考》中“GUC参数说明 \> 错误报告和日志 \> 记录日志的内容”章节中关于“log\_hostname”的描述。

-   数据库内核执行初始化语句较慢导致的性能问题。

    此种情况定位较难，可以尝试使用Linux的跟踪命令：strace。

    ```
    strace gsql -U MyUserName -d postgres -h 127.0.0.1 -p 23508 -r -c '\q'
    Password for MyUserName：
    ```

    此时便会在屏幕上打印出数据库的连接过程。比如较长时间停留在下面的操作上：

    ```
    sendto(3, "Q\0\0\0\25SELECT VERSION()\0", 22, MSG_NOSIGNAL, NULL, 0) = 22
    poll([{fd=3, events=POLLIN|POLLERR}], 1, -1) = 1 ([{fd=3, revents=POLLIN}])
    ```

    此时便可以确定是数据库执行"SELECT VERSION\(\)"语句较慢。

    在连接上数据库后，便可以通过执行“explain performance select version\(\)”语句来确定初始化语句执行较慢的原因。更多信息，详见《性能调优指南》中“SQL调优指南 \> SQL执行计划介绍”章节。

    另外还有一种场景不太常见：由于DN所在机器的磁盘满或故障，此时所查询等受影响，无法进行用户认证，导致连接过程挂起，表现为假死。解决此问题清理DN的数据盘空间便可。

-   TCP连接创建较慢问题。

    此问题可以参考上面的初始化语句较慢排查的做法，通过strace跟踪，如果长时间停留在：

    ```
    connect(3, {sa_family=AF_FILE, path="/home/test/tmp/gaussdb_llt1/.s.PGSQL.61052"}, 110) = 0
    ```

    或者

    ```
    connect(3, {sa_family=AF_INET, sin_port=htons(61052), sin_addr=inet_addr("127.0.0.1")}, 16) = -1 EINPROGRESS (Operation now in progress)
    ```

    那么说明客户端与数据库端建立物理连接过慢，此时应当检查网络是否存在不稳定、网络吞吐量太大的问题。


## 创建连接故障<a name="zh-cn_topic_0078149561_section3272835810521"></a>

-   gsql: could not connect to server: No route to host

    此问题一般是指定了不可达的地址或者端口导致的。请检查-h参数与-p参数是否添加正确。

-   gsql: FATAL:  Invalid username/password,login denied.

    此问题一般是输入了错误的用户名和密码导致的，请联系数据库管理员，确认用户名和密码的正确性。

-   gsql: FATAL:  Forbid remote connection with trust method!

    数据库由于安全问题，禁止远程登录时使用trust模式。这时需要修改pg\_hba.conf里的连接认证信息。具体的设置信息请参见：《数据库管理指南》中“管理数据库安全 \> 客户端接入认证 \> 配置文件参考”章节。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >请不要修改pg\_hba.conf中数据库主机的相关设置，否则可能导致数据库功能故障。建议业务应用部署在数据库之外，而非数据库内部。

-   在DN连接数据库，添加“-h 127.0.0.1”可以连接，去掉后无法连接问题。

    通过执行SQL语句“show unix\_socket\_directory”检查DN使用的Unix套接字目录，是否与shell中的环境变量$PGHOST一致。

    如果检查结果不一致，那么修改PGHOST环境变量到GUC参数unix\_socket\_directory指向的目录便可。

    关于unix\_socket\_directory的更多信息，详见《数据库参考》中“GUC参数说明 \> 连接和认证 \> 连接设置”章节中的说明。

-   The "libpq.so" loaded mismatch the version of gsql, please check it.

    此问题是由于环境中使用的libpq.so的版本与gsql的版本不匹配导致的，请通过“ldd gsql”命令确认当前加载的libpq.so的版本，并通过修改LD\_LIBRARY\_PATH环境变量来加载正确的libpq.so。

-   gsql: symbol lookup error: xxx/gsql: undefined symbol: libpqVersionString

    此问题是由于环境中使用的libpq.so的版本与gsql的版本不匹配导致的（也有可能是环境中存在PostgreSQL的libpq.so），请通过“ldd gsql”命令确认当前加载的libpq.so的版本，并通过修改LD\_LIBRARY\_PATH环境变量来加载正确的libpq.so。

-   gsql: connect to server failed: Connection timed out

    Is the server running on host "xx.xxx.xxx.xxx" and accepting TCP/IP connections on port xxxx?

    此问题是由于网络连接故障造成。请检查客户端与数据库服务器间的网络连接。如果发现从客户端无法PING到数据库服务器端，则说明网络连接出现故障。请联系网络管理人员排查解决。

    ```
    ping -c 4 10.10.10.1
    PING 10.10.10.1 (10.10.10.1) 56(84) bytes of data.
    From 10.10.10.1: icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=3 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=4 Destination Host Unreachable
    --- 10.10.10.1 ping statistics ---
    4 packets transmitted, 0 received, +4 errors, 100% packet loss, time 2999ms
    ```

-   gsql: FATAL:  permission denied for database "postgres"

    DETAIL:  User does not have CONNECT privilege.

    此问题是由于用户不具备访问该数据库的权限，可以使用如下方法解决。

    1.  使用管理员用户dbadmin连接数据库。

        ```
        gsql -d postgres -U dbadmin -p 8000
        ```

    2.  赋予该用户访问数据库的权限。

        GRANT CONNECT ON DATABASE postgres TO user1;

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >实际上，常见的许多错误操作也可能产生用户无法连接上数据库的现象。如用户连接的数据库不存在，用户名或密码输入错误等。这些错误操作在客户端工具也有相应的提示信息。
        >```
        >gsql -d postgres -p 8000
        >gsql: FATAL:  database "postgres" does not exist
        >gsql -d postgres -U user1 -p 8000
        >Password for user user1:
        >gsql: FATAL:  Invalid username/password,login denied.
        >```


-   gsql: FATAL:  sorry, too many clients already，active/non-active: 197/3.

    此问题是由于系统连接数量超过了最大连接数量。请联系数据库DBA进行会话连接数管理，释放无用会话。

    关于查看用户会话连接数的方法如[表1](#zh-cn_topic_0059779356_t8e166846f0204638bd83f2fd35f44585)。

    会话状态可以在视图PG\_STAT\_ACTIVITY中查看。无用会话可以使用函数pg\_terminate\_backend进行释放。

    ```
    select datid,pid,state from pg_stat_activity;
    ```

    ```
     datid |       pid       | state  
    -------+-----------------+--------
     13205 | 139834762094352 | active
     13205 | 139834759993104 | idle
    (2 rows)
    ```

    其中pid的值即为该会话的线程ID。根据线程ID结束会话。

    ```
    SELECT PG_TERMINATE_BACKEND(139834759993104);
    ```

    显示类似如下信息，表示结束会话成功。

    ```
    PG_TERMINATE_BACKEND
    ----------------------
     t
    (1 row)
    ```

    **表 1**  查看会话连接数

    <a name="zh-cn_topic_0059779356_t8e166846f0204638bd83f2fd35f44585"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059779356_r32046f7f632b492891276dd6f4bf8999"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"><a name="zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a><a name="zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"><a name="zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a><a name="zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a>命令</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059779356_rc644c3de5cac4e4891741cccf756b131"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"><a name="zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a><a name="zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a>查看指定用户的会话连接数上限。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"><a name="zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a><a name="zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a>执行如下命令查看连接到指定用户USER1的会话连接数上限。其中-1表示没有对用户user1设置连接数的限制。</p>
    <pre class="screen" id="zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"><a name="zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a><a name="zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a>SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='user1';
     rolname | rolconnlimit
    ---------+--------------
     user1    |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779356_rf5d9240299bd47e292727e46ad181e06"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"><a name="zh-cn_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a><a name="zh-cn_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a>查看指定用户已使用的会话连接数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"><a name="zh-cn_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a><a name="zh-cn_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a>执行如下命令查看指定用户USER1已使用的会话连接数。其中，1表示USER1已使用的会话连接数。</p>
    <pre class="screen" id="zh-cn_topic_0059779356_s271e08598652464baf8e34937f03fe76"><a name="zh-cn_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a><a name="zh-cn_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a>SELECT COUNT(*) FROM dv_sessions WHERE USERNAME='user1';
    
     count
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779356_r3ecf1d5dec914606a843db02e9fbd915"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"><a name="zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a><a name="zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a>查看指定数据库的会话连接数上限。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"><a name="zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a><a name="zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a>执行如下命令查看连接到指定数据库postgres的会话连接数上限。其中-1表示没有对数据库postgres设置连接数的限制。</p>
    <pre class="screen" id="zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"><a name="zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a><a name="zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a>SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';
    
     datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779356_rdc10c65ce85d49b38dede86bc6dcd1d1"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"><a name="zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a><a name="zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a>查看指定数据库已使用的会话连接数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"><a name="zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a><a name="zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a>执行如下命令查看指定数据库postgres上已使用的会话连接数。其中，1表示数据库postgres上已使用的会话连接数。</p>
    <pre class="screen" id="zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"><a name="zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a><a name="zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a>SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';
     count 
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059779356_re1756ad474794d9bacb603dfaa36638b"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"><a name="zh-cn_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a><a name="zh-cn_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a>查看所有用户已使用会话连接数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"><a name="zh-cn_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a><a name="zh-cn_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a>执行如下命令查看所有用户已使用的会话连接数。</p>
    <pre class="screen" id="zh-cn_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"><a name="zh-cn_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a><a name="zh-cn_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a>SELECT COUNT(*) FROM dv_sessions;
     
     count
    -------
         10
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>

-   gsql: wait xxx.xxx.xxx.xxx:xxxx timeout expired

    gsql在向数据库发起连接的时候，会有5分钟超时机制，如果在这个超时时间内，数据库未能正常的对客户端请求进行校验和身份认证，那么gsql会退出当前会话的连接过程，并报出如上错误。

    一般来说，此问题是由于连接时使用的-h参数及-p参数指定的连接主机及端口有误（即错误信息中的xxx部分），导致通信故障；极少数情况是网络故障导致。要排除此问题，请检查数据库的主机名及端口是否正确。

-   gsql: could not receive data from server: Connection reset by peer.

    同时，检查DN日志中出现类似如下日志“ FATAL: cipher file "/data/coordinator/server.key.cipher" has group or world access”，一般是由于数据目录或部分关键文件的权限被误操作篡改导致。请参照其他正常实例下的相关文件权限，修改回来便可。

-   gsql: FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    目标DN的pg\_hba.conf里配置了当前客户端IP使用"gss"方式来做认证，该认证算法不支持用作客户端的身份认证，请修改到"sha256"后再试。配置方法见《数据库管理指南》中“管理数据库安全 \> 客户端接入认证 \> 配置文件参考”章节 。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   请不要修改pg\_hba.conf中数据库主机的相关设置，否则可能导致数据库功能故障。
    >-   建议业务应用部署在数据库之外，而非数据库内部。


## 其他故障<a name="section1457563481712"></a>

-   出现因“总线错误”（Bus error）导致的core dump或异常退出。

    一般情况下出现此种问题，是进程运行过程中加载的共享动态库（在Linux为.so文件）出现变化；或者进程二进制文件本身出现变化，导致操作系统加载机器的执行码或者加载依赖库的入口发生变化，操作系统出于保护目的将进程杀死，产生core dump文件。

    解决此问题，重试便可。同时请尽可能避免在升级等运维操作过程中，在数据库内部运行业务程序，避免升级时因替换文件产生此问题。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >此故障的core dump文件的可能堆栈是dl\_main及其子调用，它是操作系统用来初始化进程做共享动态库加载的。如果进程已经初始化，但是共享动态库还未加载完成，严格意义上来说，进程并未完全启动。


