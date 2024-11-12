# dsstbox

## 概述<a name="section1377524355216"></a>

openGauss部署资源池化模式且开启ss\_enable\_dss功能情况下，为了对dss管理的文件系统进行分析、修复元数据文件的能力，资源池化提供了dsstbox管理工具。当前dsstbox工具主要有两个功能：
-   ssrepair：提供可以修改DSS元数据的能力。
-   ssminer：解析dss侧历史redo日志信息。

## 命令<a name="section161808461171"></a>

-   显示帮助信息

    ```
    dsstbox -h
    dsstbox --help
    ```

-   显示所有帮助信息

    ```
    dsstbox -a
    dsstbox --all
    ```

-   显示dss的版本号

    ```
    dsstbox -v
    dsstbox --version
    ```

-   修改元数据

    ```
    dsstbox ssrepair <-v vol_path> <-t type> [-i meta_id] [-s au_size] <-k key_value>
    ```
-   打印指定vg的所有有效历史redo信息。

    ```
    dsstbox ssminer <-g vg_name> [-D DSS_HOME]
    ```
-   打印指定vg以start_lsn开始的number条有效历史redo信息。如果不包含number参数，则打印start_lsn开始的所有有效历史redo日志信息。如果start_lsn和number同时为0，则仅打印redo_ctrl信息。
    ```
    dsstbox ssminer <-g vg_name> <-s start_lsn> [-n number] [-D DSS_HOME]
    ```
-   打印指定vg以`index+offset`组合位置开始的number条有效历史redo信息。如果不包含number参数，则打印index+offset组合位置开始的所有有效历史redo日志信息。如果不包含offset参数和number参数，则仅打印index块对应的所有有效历史redo信息。

    ```
    dsstbox ssminer <-g vg_name> <-i index> [-o offset] [-n number] [-D DSS_HOME]
    ```
    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   vol_path: 要修改的磁盘卷组路径。只支持绝对路径，长度不能超过63，字符仅支持数字、大小写字母以及 '_'，'-'，'.'。
    >-   type: 要修改的元数据类型。当前支持的类型包括：core_ctrl、volume_ctrl、root_ft_block、volume_header、software_version、fs_block、ft_block、fs_aux_block。
    >      - core_ctrl、volume_ctrl、root_ft_block 仅位于入口卷上，因此只允许对入口卷做更改；fs_block、ft_block、fs_aux_block、volume_header、software_version 可位于任意卷，因此不限制是否为入口卷。
    >      - software_version 实际上属于 volume_header 的子项，但不允许通过 "-t volume_header -k software_version=*version* 更改 software_version，只允许通过 "-t software_version software_version=*version*"更改。更改的version不能超过当前DSS的版本。
    >      - core_ctrl、volume_ctrl、root_ft_block、volume_header、software_version在卷上的位置固定，因此不需要输入 -i meta_id 和 -s au_size；而fs_block、ft_block、fs_aux_block在卷上的位置不固定，因此必须传入-i meta_id和-s au_size。
    >-   meta_id: 要修改的元数据meta_id。取值范围[0, 2^64 - 1]，用户必须确保meta_id是实际存在的（ssrepair内部不做校验），否则会导致修改失败或者错误的元数据修改。
    >-   au_size: 要修改的磁盘卷组的单个au物理块的大小，单位是KB，取值范围[2048, 65536]，仅用于与-i meta_id一起计算元数据在磁盘内的偏移，不用于设置卷组的AU_SIZE，用户必须确保传入的值与卷组实际的AU大小一致（ssrepair内部不做校验），否则会导致错误的元数据修改。
    >-   key_value: 要修改的元数据字段和修改后的字段内容。支持多个键值对，用','分隔。
    >-   DSS_HOME: $DSS\_HOME所在路径。
    >-   vg_name: 卷组名。长度不能超过63，仅支持数字，大小写字母和部分特殊字符’_','.','-',其他字符不支持。
    >-   start_lsn: 单个redo日志的唯一标志，单调递增。取值范围：整数，[0, 2^64 - 1]。当start_lsn = 0时，number也要为0，否则报错处理。
    >-   number: 需要打印的redo日志数量。取值范围：整数，[0, 2^64 - 1]。当number = 0时，start_lsn也要为0，否则报错处理。
    >-   index: 需要打印的redo块的索引。取值范围：整数，[0, 7]。
    >-   offset: 读取指定redo块时的偏移量。取值范围：整数，[0, 2^64 - 1]，单位为Byte。


    > <img src="public_sys-resources/icon-danger.png"> **警告：**   
    >
    >1、dsstbox ssrepair 修改DSS元数据功能，属于高危操作，请谨慎操作。必须在技术支持人员指导下操作。
    >
    >2、dsstbox ssrepair仅用于极端条件下的逃生手段，只提供修改DSS元数据功能，由于使用场景时已发生多个元数据的损坏，磁盘元数据不可信，只能校验修改字段是否存在以及修改内容的合法性，不能做反向的合理性校验，使用的技术人员需保证修改数据的合理性。
    >
    >3、在dssserver拉起条件下使用dsstbox ssrepair去修改元数据，可能导致修改的数据被二次覆盖，使用dsstbox ssrepair前需要先停止集群。
    >
    >4、dsstbox ssrepair在修改元数据之前，会提示用户确认上述条件，用户确认输入后再继续执行，如果不希望提示确认，可以将环境变量DSS_REPAIR_CONFIRM_QUIET设置为TRUE。


## 使用示例<a name="section192337387165"></a>

-   修改卷/dev/vdb2上meta_id为8919238324529152（v:0,au:10,block:507,item:0）的类型为fs_block的元数据块，修改内容是head.common.type=1,bitmap[1]=18446744073709551615。

    ```
    dsstbox ssrepair -v /dev/vdb2 -t fs_block -i 8919238324529152 -s 8192 -k 'head.common.type=1,bitmap[1]=18446744073709551615'
    ```
-   修改卷/dev/vdb2上meta_id为105553116275712（v:0,au:9,block:6,item:0）的类型为ft_block的元数据块，修改内容是node_num=16。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t ft_block -i 105553116275712 -s 8192 -k 'node_num=16'
    ```
-   修改卷/dev/vdb2上meta_id为9601646138484736（v:0,au:12,item:0）的类型为fs_aux_block的元数据块，修改内容是head.ftid=105553116275712。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t fs_aux_block -i 9601646138484736 -s 8192 -k 'head.ftid=105553116275712'
    ```
-   修改卷/dev/vdb2上的software_version为2。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t software_version -k 'software_version=2'
    ```
-   修改卷/dev/vdb2上的类型为volume_header元数据块，修改内容是vg_name=test_dsstbox。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t volume_header -k 'vg_name=test_dsstbox'
    ```
-   修改卷/dev/vdb2上的类型为root_ft_block的元数据块，修改内容是ft_block.common.version=32,ft_root.fid=5133。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t root_ft_block -k 'ft_block.common.version=32,ft_root.fid=5133'
    ```
-   修改卷/dev/vdb2上的类型为volume_ctrl的元数据块，修改内容是version=79,defs[0].id=0。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t volume_ctrl -k 'version=79,defs[0].id=0'
    ```
-   修改卷/dev/vdb2上的类型为core_ctrl的元数据块，修改内容是au_size=8192,volume_count=1,volume_attrs[0].id=0。
    ```
    dsstbox ssrepair -v /dev/vdb2 -t core_ctrl -k 'au_size=8192,volume_count=1,volume_attrs[0].id=0'
    ```
-   打印data的所有有效历史redo信息。
    ```
    dsstbox ssminer -g data
    ```
-   打印data的redo ctrl信息。
    ```
    dsstbox ssminer -g data -s 0 -n 0
    ```
-   打印data的lsn为2开始的3条redo历史信息。
    ```
    dsstbox ssminer -g data -s 2 -n 3
    ```
-   打印data的index为0,offset 为0开始的3条redo历史信息。
    ```
    dsstbox ssminer -g data -i 0  -o 0 -n 3
    ```
