# dsscmd<a name="ZH-CN_TOPIC_0000001321698602"></a>

## 概述<a name="section1377524355216"></a>

openGauss部署资源池化模式且开启ss\_enable\_dss功能情况下，经常需要对基于磁阵实现的集群文件系统进行各种查询，操作和管理。为了对dss创建的文件系统进行有效的管理，资源池化提供了dsscmd管理工具。

## 命令<a name="section161808461171"></a>

-   显示帮助信息

    ```
    dsscmd -h
    dsscmd --help
    ```

-   显示dss的版本号

    ```
    dsscmd -v
    dsscmd --version
    ```

-   创建卷组

    ```
    dsscmd cv <-g vg_name> <-v vol_name> [-s au_size] [-D DSS_HOME]
    ```

    此处的vg\_name为卷组名，命名长度不能超过64，仅支持数字，大小写字母，和部分特殊字符 '_ ' , ' . ' , ' - ' 。其他字符不支持。

-   显示卷组和磁盘使用信息

    ```
    dsscmd lsvg [-m measure_type] [-t show_type] [-U UDS:socket_domain]
    ```

-   卷组中添加卷

    ```
    dsscmd adv <-g vg_name> <-v vol_name> [-U UDS:socket_domain]
    ```

    此处的vg\_name为卷组名，不需要以‘+’开头。

-   新建目录

    ```
    dsscmd mkdir <-p path> <-d dir_name> [-U UDS:socket_domain]
    ```

-   创建文件

    ```
    dsscmd touch <-p path> [-U UDS:socket_domain]
    ```

-   显示路径下文件信息

    ```
    dsscmd ls <-p path> [-m measure_type] [-U UDS:socket_domain]
    ```

-   将源文件复制到目标文件

    ```
    dsscmd cp <-s src_file> <-d dest_file> [-U UDS:socket_domain]
    ```

    此处的src_file和dest_file为带路径的文件名，使用限制参考“参数说明”部分的path。

-   删除卷组文件

    ```
    dsscmd rm <-p path> [-U UDS:socket_domain]
    ```

-   删除卷组中的卷

    ```
    dsscmd rmv <-g vg_name> <-v vol_name> [-U UDS:socket_domain]
    ```

    此处的vg_name为卷组名，不需要以‘+’开头。

-   删除目录及其内容

    ```
    dsscmd rmdir <-p path> [-r] [-U UDS:socket_domain path]
    ```

    此处-r代表级联删除。

-   查询LUN/注册信息

    ```
    dsscmd inq  <-t inq_type>
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >inq_type表示查询信息的类型。取值如下：
    >-   lun: 查询LUN信息。
    >-   reg: 查询reservations信息。

-   查询该节点是否注册

    ```
    dsscmd inq_reg  <-i inst_id> [-D DSS_HOME]
    ```

-   显示客户端信息

    ```
    dsscmd lscli
    ```

-   从集群中踢出非当前节点，第一个参数是要移除的节点id

    ```
    dsscmd kickh <-i inst_id> [-D DSS_HOME]
    ```

-   将节点添加到集群，不走服务端

    ```
    dsscmd reghl [-D DSS_HOME]
    ```

-   将节点从集群中移除，不走服务端

    ```
    dsscmd unreghl [-t type] [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   type: 值为int类型，0表示不使用vg锁，非0表示使用vg锁，默认值为1。

-   扫描并打开指定路径下指定用户和属组的盘符，不走服务端

    ```
    dsscmd scandisk <-t type> <-p path> <-u user_name> <-g group_name>
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   type: 盘符类型，当前只支持block块设备。
    >-   [path][user_name][group_name]: 该字段中不能含有命令注入安全隐患的非法字符：
    >'|'， ';'， '&'， '$'， '<'， '>'， '`'， '\\\'， '\\''， '\\"'， '{'， '}'， '('， ')'， '['， ']'， '~'， '*'， '?'， ' '， '!'， '\n'。
    >-   user_name: 操作系统的用户名。
    >-   group_name: 操作系统的属组。

-   设置dss节点的auid

    ```
    dsscmd auid <-a auid>
    ```

    此处的auid是一个64位的值。

-   读取dss文件内容

    ```
    dsscmd examine <-p path> <-o offset> <-f format> [-s read_size] [-D DSS_HOME] [-U UDS:socket_domain]
    ```

    此处format为读取文件内容的格式，取值范围为：c char、h unsigned short、u unsigned int、l unsigned long、s string、x hex。

-   读取磁阵文件内容

    ```
    dsscmd dev <-p path> <-o offset> <-f format> [-D DSS_HOME]
    ```

    此处format为读取文件内容的格式，取值范围为：c char、h unsigned short、u unsigned int、l unsigned long、s string、x hex。

-   显示磁盘信息

    ```
    dsscmd showdisk <-g vg_name> <-s struct_name> [-D DSS_HOME]
    dsscmd showdisk <-g vg_name> <-b block_id> <-n node_id> [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   struct_name: 指定输出信息的文件类型。取值范围: core\_ctrl、vg\_header、volume\_ctrl、root\_ft\_block。
    >-   如果指定参数-b block_id，则需指定-n node_id。
    >-   blocl_id是一个64位的值，前10位是volume_id，34位是au_id，17位是block_id,最后3位是预留。

-   重命名文件名

    ```
    dsscmd rename <-o old_name> <-n new_name> [-U UDS:socket_domain]
    ```

    此处的old_name和new_name为带路径的文件名，使用限制参考“参数说明”部分的path。

-   显示带有可选参数的文件/目录的磁盘使用情况

    ```
    dsscmd du <-p path> [-f format] [-U UDS:socket_domain]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >format：支持3种参数，参数之间不需要任何分隔符。
    >-   B|K|M|G|T
    >    B: Byte, K: KB ,M: MB , G: GB, T: TB。
    >-   s|a
    >    s :目录，a：计算所有文件，而不仅仅是目录。
    >-   S
    >    对于目录不包括子目录的大小。

-   按文件名查找文件所在路径

    ```
    dsscmd find <-p path> <-n name> [-U UDS:socket_domain]
    ```

-   创建软连接

    ```
    dsscmd ln <-s src_path> <-t target_path> [-U UDS:socket_domain]
    ```

    此处的src_path和target_path是目录或者带路径的文件名，使用限制参考“参数说明”部分的path。

-   显示文件链接信息

    ```
    dsscmd readlink <-p path> [-U UDS:socket_domain]
    ```

-   取消软连接

    ```
    dsscmd unlink <-p path> [-U UDS:socket_domain]
    ```

-   加密

    ```
    dsscmd encrypt
    ```

-   设置配置项

    ```
    dsscmd setcfg <-n name> <-v value> [-s scope] [-U UDS:socket_domain]
    ```

-   获取配置项信息

    ```
    dsscmd getcfg <-n name> [-U UDS:socket_domain]
    ```

-   通知dss服务端进行优雅退出，异步关闭dssserver进程

    ```
    dsscmd stopdss [-U UDS:socket_domain]
    ```

-   清理dss内部的锁资源

    ```
    dsscmd clean_vglock [-D DSS_HOME]
    ```


## 参数说明<a name="zh-cn_topic_0059777958_s2d970209405e437385b0b3d8666e825e"></a>

-   show\_type

    d显示详细信息，t显示表中的信息。

-   au\_size：

    au的大小，单位KB，范围为2MB-64MB。

-   vg\_name

    卷组名。

-   measure\_type

    显示文件大小的单位。例如，B:Byte,  K:KB,  M:MB,  G:GB,  T:TB。

    默认为Byte。

-   path

    表示目录或带路径的文件，需要带'+'且不支持使用相对路径，命名长度不能超过1K，仅支持数字，大小写字母，和部分特殊字符 ' \_ ' , ' . ' , ' - ' ,'\\'，其中'\\'是分隔符。其他字符不支持。文件名本身长度不能超过63位，仅支持数字，大小写字母，和部分特殊字符 '_ ' , ' . ' , ' - ', 其他字符不支持。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >dsscmd命令使用UDS:socket_domain的时候，需要与服务端通信，由于客户端和服务端通信的报文最长为1024，所以实际path支持的长度可能会少于1K。

-   dir\_name

    目录名，命名长度不能超过64，仅支持数字，大小写字母，和部分特殊字符 ' \_ ' , ' . ' , ' - ' 。其他字符不支持。

-   vol\_name

    卷名。文件命名长度不能超过1K（包括目录），仅支持数字，大小写字母，和部分特殊字符 ' \_ ' , ' . ' , ' - ' ,'\\'，其中'\\'是分隔符。其他字符不支持。

-   -D

    $DSS\_HOME所在路径。

-   -U UDS:socket\_domain

    dss实例进程使用的socket文件路径。

-   inst\_id |kicked\_inst\_id

    集群中dss实例id。

-   addr

    volume上锁的起始地址。

-   read\_size

    读取长度。

-   name:

    配置项名称。

-   value

    配置项的值。

-   scope

    配置项生效的范围。

    取值范围：memory、pfile或both。

    -   memory：表示在内存中进行修改，立即生效。
    -   pfile：表示在pfile中进行修改，修改后需要重启数据库才能生效。
    -   both：表示既在内存也在pfile中进行修改。


## 使用示例<a name="section192337387165"></a>

-   创建卷组，卷组名为data和log，au大小分别为2048和65536，-D指定dss\_home。

    ```
    dsscmd cv -g data -v /dev/tpcc_data -s 2048 -D /home/ss_test/dss_home
    dsscmd cv -g log -v /dev/tpcc_log -s 65536 -D /home/ss_test/dss_home
    ```


-   创建文件夹pg\_xlog0 ，UDS指定dss进程的socket文件。

    ```
    dsscmd mkdir -p +log -d pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   文件复制，将data中的文件复制到log中。

    ```
    dsscmd cp -s +data/pg_xlog0/000000010000000000000001 -d +log/pg_xlog0/000000010000000000000001 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   文件删除，删除data中文件。

    ```
    dsscmd rm -p +data/pg_xlog0/000000010000000000000001 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   删除data中文件夹pg\_xlog0/archive\_status（文件夹为空，若文件夹内有文件需要级联删除，需要加-r）。

    ```
    dsscmd rmdir -p +data/pg_xlog0/archive_status -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```

-   创建软链接。

    ```
    dsscmd ln -s +log/pg_xlog0 -t +data/pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   查看data中pg\_xlog0目录下的文件信息。

    ```
    dsscmd ls -p +data/pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


