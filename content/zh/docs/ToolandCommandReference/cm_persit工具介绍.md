# cm\_persit工具介绍<a name="ZH-CN_TOPIC_0000001322542352"></a>

## 功能介绍<a name="section125419154813"></a>

cm\_persist工具用来在资源池化设备上实现抢占磁盘锁功能。该工具是系统内部工具，由cm\_server实例自动调用，不建议用户使用。

## 前提条件<a name="section14602518109"></a>

-   确保存储设备支持SCSI-3及CAW协议。
-   确保cm\_persist工具拥有CAP\_SYS\_RAWIO权限，拥有该权限后才可以调用ioctl系统函数操作资源池化设备。

## 语法<a name="section554725769"></a>

-   执行cm\_persist命令

    ```
    cm_persist [DEVICEPATH] [INSTANCE_ID] [OFFSET]
    ```

-   显示帮助信息

    ```
    cm_persist -? | --help
    ```


## 参数说明<a name="section187851955142614"></a>

-   DEVICEPATH

    资源池化设备的路径。

-   INSTANCE\_ID

    cm\_server实例的instance id，可通过cm\_ctl query -Cv命令查询获取。

-   OFFSET

    在指定的磁盘偏移地址上抢占磁盘锁。

-   -?,--help

    打印帮助信息。


