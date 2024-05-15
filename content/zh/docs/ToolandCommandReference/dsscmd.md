# dsscmd

## 概述<a name="section1377524355216"></a>

openGauss部署资源池化模式且开启ss\_enable\_dss功能情况下，经常需要对基于磁阵实现的集群文件系统进行各种查询，操作和管理。为了对dss创建的文件系统进行有效的管理，资源池化提供了dsscmd管理工具。

## 命令<a name="section161808461171"></a>

-   显示帮助信息

    ```
    dsscmd -h
    dsscmd --help
    ```

-   显示所有帮助信息

    ```
    dsscmd -a
    dsscmd --all
    ```

-   显示dss的版本号

    ```
    dsscmd -v
    dsscmd --version
    ```

-   创建卷组

    ```
    dsscmd cv <-g vg_name> <-v vol_name> [-s au_size]  [-D DSS_HOME]
    ```

    此处的vg\_name为卷组名，命名长度不能超过63，仅支持数字，大小写字母，和部分特殊字符 '_ ' , ' . ' , ' - ' 。其他字符不支持。

-   显示卷组和磁盘使用信息

    ```
    dsscmd lsvg [-m measure_type] [-t show_type] [-U UDS:socket_domain]
    ```

-   卷组中添加卷

    ```
    dsscmd adv <-g vg_name> <-v vol_name> [-f] [-D DSS_HOME] [-U UDS:socket_domain]
    ```
    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   此处的vg\_name为卷组名，不需要以‘+’开头。
    >-   dsscmd adv支持在线和全离线操作。-f参数表示强制离线，全离线由用户侧保证，可通过cm_ctl query -Cvid进行查询。
    >-   在不带CM的集群的场景（即维护模式）下，在线adv之后需要用户手动注册（dsscmd reghl)。

-   新建目录

    ```
    dsscmd mkdir <-p path> <-d dir_name> [-U UDS:socket_domain]
    ```

-   创建文件

    ```
    dsscmd touch <-p path> [-U UDS:socket_domain]
    ```

-   显示API调用时间

    ```
    dsscmd ts [-U UDS:socket_domain]
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
    dsscmd rmv <-g vg_name> <-v vol_name> [-f] [-D DSS_HOME] [-U UDS:socket_domain]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   此处的vg\_name为卷组名，不需要以‘+’开头。
    >-   dsscmd rmv支持在线和全离线操作。-f参数表示强制离线，全离线由用户侧保证，可通过cm_ctl query -Cvid进行查询。
    >-   rmv删除的是未被使用的是非入口盘（即dsscmd adv命令添加的卷）。

-   替换卷组中的卷

    ```
    dsscmd repl <-g vg_name> <-o old_vol> <-n new_vol> [-f] [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   此处的vg\_name为卷组名，不需要以‘+’开头。
    >-   dsscmd repl只支持全离线操作。-f参数表示强制离线，未输入报错返回。全离线由用户侧保证，可通过cm_ctl query -Cvid进行查询。
    >-   repl执行之前，需要用户手动将old_vol拷贝到new_vol，需要用户保证拷贝的准确性和完整性，new_vol的大小不能小于old_vol的水位线。
    >-   入口盘（即dsscmd cv命令添加的卷）被替换之后，需要用户手动修改每个节点的配置项信息dss_vg_conf.ini。

-   若离线adv/rmv/repl元数据修改失败，回滚卷组。

    ```
    dsscmd rollback <-g vg_name> [-f] [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   此处的vg\_name为卷组名，不需要以‘+’开头。
    >-   dsscmd rollback只支持全离线操作。-f参数表示强制离线，未输入报错返回。全离线由用户侧保证，可通过cm_ctl query -Cvid进行查询。

-   删除目录及其内容

    ```
    dsscmd rmdir <-p path> [-r] [-U UDS:socket_domain path]
    ```

    此处-r代表级联删除。

-   查询LUN/注册信息

    ```
    dsscmd inq  <-t inq_type> [-D DSS_HOME]
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

-   展示auid。主要用于日志分析和问题定位。

    ```
    dsscmd auid <-a auid>
    ```

    auid: 值为uint64类型，取值范围：0-18446744073709551615(即2^64-1)

-   读取dss文件内容

    ```
    dsscmd examine <-p path> <-o offset> <-f format> [-s read_size] [-D DSS_HOME] [-U UDS:socket_domain]
    ```

    此处format为读取文件内容的格式，取值范围为：c char、h unsigned short、u unsigned int、l unsigned long、s string、x hex。

-   读取磁阵文件内容

    ```
    dsscmd dev <-p path> <-o offset> <-f format>
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   format为读取文件内容的格式，取值范围为：c char、h unsigned short、u unsigned int、l unsigned long、s string、x hex。
    >-   path指定的为路径为路径为磁盘路径，可通过$DSS_HOME/cfg/dss_vg_conf.ini文件获取磁盘路径。

-   显示磁盘信息

    ```
    dsscmd showdisk <-g vg_name> <-s struct_name> [-D DSS_HOME]
    dsscmd showdisk <-g vg_name> <-b block_id> <-n node_id> [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   struct_name: 指定输出信息的文件类型。取值范围: core\_ctrl、vg\_header、volume\_ctrl、root\_ft\_block。
    >-   如果指定参数-b block_id，则需指定-n node_id。
    >-   block_id是一个64位的值，前10位是volume_id，34位是au_id，17位是block_id,最后3位是预留。

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

-   生成加密密码密文和密钥组件

    ```
    dsscmd encrypt
    ```
    > <img src="public_sys-resources/icon-danger.png"> **警告：**   
    >
    > 生成加密密码密文和密钥组件属于高危操作，每次执行时，会产生新的加密密码密文和密钥组件。输入需和证书加密密码一致，否则会导致节点启动异常。
-   设置配置项

    ```
    dsscmd setcfg <-n name> <-v value> [-s scope] [-U UDS:socket_domain]
    ```
    >![](public_sys-resources/icon-note.png) **说明：** 
    >目前可以通过该接口设置的参数有：
    _LOG_LEVEL，
    _LOG_MAX_FILE_SIZE，
    _LOG_BACKUP_FILE_COUNT，
    _AUDIT_LEVEL，
    _AUDIT_MAX_FILE_SIZE，
    _AUDIT_BACKUP_FILE_COUNT，
    CLUSTER_RUN_MODE。

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

-   au\_size

    au的大小，单位KB，范围为2MB-64MB，默认大小为2MB。

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

    目录名，命名长度不能超过63，仅支持数字，大小写字母，和部分特殊字符 ' \_ ' , ' . ' , ' - ' 。其他字符不支持。

-   vol\_name|old\_vol|new\_vol

    卷名。文件命名长度不能超过63（包括目录），仅支持数字，大小写字母，和部分特殊字符 ' \_ ' , ' . ' , ' - ' ,'\\'，其中'\\'是分隔符。其他字符不支持。

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

-   offset

    偏移长度，只能是512的整数倍。

-   scope

    配置项生效的范围。

    取值范围：memory、pfile或both。

    -   memory：表示在内存中进行修改，立即生效。
    -   pfile：表示在pfile中进行修改，修改后需要重启数据库才能生效。
    -   both：表示既在内存也在pfile中进行修改。
-   -f

    用于表示在线还是离线。默认不加-f，表示在线。


## 使用示例<a name="section192337387165"></a>

-   创建卷组，卷组名为data和log，au大小分别为2048和65536，-D指定dss\_home。

    ```
    dsscmd cv -g data -v /dev/tpcc_data -s 2048 -D /home/ss_test/dss_home
    dsscmd cv -g log -v /dev/tpcc_log -s 65536 -D /home/ss_test/dss_home
    ```

-   离线创建卷组中的卷dev/tpcc_adv，/dev/tpcc_adv的大小为512M，-D指定dss\_home。

    ```
    dsscmd adv -g data -v /dev/tpcc_adv -f -D /home/ss_test/dss_home
    ```

-   离线替换卷组中的卷dev/tpcc_adv，-D指定dss\_home。

    ```
    dd if=/dev/tpcc_adv bs=1024 count=500000 of=/dev/tpcc_repl conv=notrunc
    dsscmd repl -g data -o /dev/tpcc_adv -n /dev/tpcc_repl -f -D /home/ss_test/dss_home
    ```
-   离线删除卷组中的卷dev/tpcc_repl，-D指定dss\_home。

    ```
    dsscmd rmv -g data -v /dev/tpcc_repl -f -D /home/ss_test/dss_home
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

-   显示dss节点的auid。

    ```
    dsscmd auid -a 1
    ```
-   生成加密密码密文和密钥组件。
    执行如下命令生成SSL私钥，并在$DSS_HOME/dss_protect目录下生成密钥组件文件server.key.rand。

    ```
    dsscmd encrypt
    Please enter password to encrypt:
    *********
    Please input password again:
    *********
    ```
-   显示共享内存信息

    ```
    dsscmd showmem <-g vg_name> <-s struct_name> [-U UDS:socket_domain]
    dsscmd showmem <-g vg_name> <-b block_id> <-i index_id> [-U UDS:socket_domain]
    dsscmd showmem <-g vg_name> <-f fid> <-n node_id> [-o offset] [-z size] [-U UDS:socket_domain]
    dsscmd showmem <-p path> [-o offset] [-z size] [-U UDS:socket_domain]

    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   struct_name: 指定输出信息的文件类型。取值范围: core\_ctrl、vg\_header、volume\_ctrl、root\_ft\_block。
    >-   block_id是一个64位的值，前10位是volume_id，34位是au_id，17位是block_id,最后3位是预留。
    >-   如果指定参数-b block_id，则需指定-i index_id。如果要查找的block_id是ft_block， 则index_id取值为0；如果要查找的block_id是fs_block，则index_id取值为[0, 2041)。
    >-   path为待查询的全路径。

-   从黑匣子中生成的共享内存文件获取共享内存信息

    ```
    dsscmd fshowmem <-m memory_file_path> <-g vg_name> <-s struct_name> [-D DSS_HOME]
    dsscmd fshowmem <-m memory_file_path> <-g vg_name> <-b block_id> <-i index_id> [-D DSS_HOME]
    dsscmd fshowmem <-m memory_file_path> <-g vg_name> <-f fid> <-n node_id> [-o offset] [-z size] [-D DSS_HOME]
    dsscmd fshowmem <-m memory_file_path> <-g vg_name> <-p path> [-o offset] [-z size] [-D DSS_HOME]

    ```
    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   struct_name: 指定输出信息的文件类型。取值范围: core\_ctrl、vg\_header、volume\_ctrl、root\_ft\_block。
    >-   block_id是一个64位的值，前10位是volume_id，34位是au_id，17位是block_id,最后3位是预留。
    >-   如果指定参数-b block_id，则需指定-i index_id。如果要查找的block_id是ft_block， 则index_id取值为0；如果要查找的block_id是fs_block，则index_id取值为[0, 2041)。
    >-   path为待查询的全路径。如果path的中间节点为link类型，则不支持查询。
    >-   memory_file_path: 指定输入的黑匣子文件路径。