# pg\_controldata

## 功能介绍<a name="zh-cn_topic_0237152440_section125419154813"></a>

pg\_controldata工具用来显示数据库目录下control文件的信息。

## 前提条件<a name="zh-cn_topic_0237152440_section14602518109"></a>

确保数据目录正确，以及相应数据目录下的pg\_control文件存在。

## 语法<a name="zh-cn_topic_0237152440_section554725769"></a>

```
pg_controldata [OPTION]... DATADIR
```


## 参数说明<a name="zh-cn_topic_0237152440_section187851955142614"></a>

-   DATADIR

    查看control文件信息时所用的参数，DATADIR为实例对应的数据库目录。

OPTION取值如下所示

-   -I, --instance-id=INSTANCE_ID

    资源池化参数，打印指定实例的control文件信息，该参数不指定时打印全部实例的control文件和reformer页信息。当INSTANCE_ID指定为最大INSTANCE_ID+1时，只打印reformer页信息，当前最大INSTANCE_ID为63。

-   --enable-dss

    资源池化参数，开启资源池化功能。

-   --socketpath=SOCKETPATH

    资源池化参数，dss实例进程使用的socket文件路径，仅支持绝对路径。

-   -V, --version

    显示版本信息。

-   -?,--help

    打印帮助信息。

## 使用举例（非资源池化模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_controldata DATADIR
```
**说明：**

在非资源池化模式，OPTION的取值不能是资源池化参数。

## 使用举例（资源池化模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_controldata --enable-dss -I instance_id --socketpath=SOCKETPATH VGDATA
```

**资源池化模式使用说明：**

在资源池化模式，-I后面的参数为要查看的控制文件对应节点的节点id，VGDATA为集群的共享数据目录（例如数据目录为+data）。

当输入包含VGDATA时，会自动开启--enable-dss。

可不指定--socketpath，默认为$DSS_HOME/.dss_unix_d_socket。

使用该工具时请保证dssserver启动，如果使用了cm组件，且本节点处于stop状态时，请先开启dss手动控制模式，再启动dssserver

    ```
    export DSS_MAINTAIN=TRUE    //开启dss手动控制模式
    dssserver -D $DSS_HOME &
    export DSS_MAINTAIN=FALSE   //关闭dss手动控制模式
    ```

本工具支持资源池化集群进行极致RTO按需回放时，查询集群回放状态，使用时请使用该工具查询reformer页信息（即instance_id为64），对应信息如下

| Cluster status        | 集群按需回放状态                                             |
| --------------------- | ------------------------------------------------------------ |
| normal                | 未进行按需回放                                               |
| in on-demand build    | 按需回放中，集群在构建回放必须信息，暂不对外提供服务         |
| in on-demand redo     | 按需回放中，集群对外提供服务，后台进行日志回放，该阶段仅支持部分SQL |

