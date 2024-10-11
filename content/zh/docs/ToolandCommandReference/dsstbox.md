# dsstbox

## 概述<a name="section1377524355216"></a>

openGauss部署资源池化模式且开启ss\_enable\_dss功能情况下，为了对dss创建的文件系统的各类元数据进行有效的查询、校验、修改能力，资源池化提供了dsstbox管理工具。当前dsstbox工具只支持ssrepair：提供可以修改fs(file space)元数据的能力。

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

-   修改元数据（当前只支持fs_block类型元数据的修改）


    ```
    dsstbox ssrepair <-v vol_path> <-t type> <-i block_id> <-s au_size> <-k key_value>
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   vol_path: 要修改的磁盘卷组路径。
    >-   type: 要修改的元数据类型，当前只支持fs_block类型元数据的修改。
    >-   block_id: 要修改的元数据block_id，用于找到对应偏移的元数据物理位置信息。
    >-   au_size: 要修改的磁盘卷组的单个au物理块的大小，单位是KB。
    >-   key_value: 要修改的元数据字段和修改后的字段内容。

    > <img src="public_sys-resources/icon-danger.png"> **警告：**   
    >
    > 1、dsstbox ssrepair 修改DSS元数据功能，属于高危操作，请谨慎操作。必须在技术支持人员指导下操作。
    >
    >2、dsstbox ssrepair仅用于极端条件下的逃生手段，只提供修改DSS元数据功能，由于使用场景时已发生多个元数据的损坏，磁盘元数据不可信，只能校验修改字段是否存在以及修改内容的合法性，不能做反向的合理性校验，使用的技术人员需保证修改数据的合理性。
    >
    >3、在dssserver拉起条件下使用dsstbox ssrepair去修改元数据，可能导致修改的数据被二次覆盖，使用dsstbox ssrepair前需要先停止集群。


## 使用示例<a name="section192337387165"></a>

-   修改卷/dev/tpcc_adv上block_id为2234207627676672（v:0,au:35,block:127,item:0）的类型为fs_block的元数据块，修改内容是head.common.type=1,bitmap[1]=18446744073709551615。

    ```
    dsscmd ssrepair -v /dev/tpcc_adv -t fs_block -i 2234207627676672 -s 4096 -k 'head.common.type=1,bitmap[1]=18446744073709551615'
    ```
