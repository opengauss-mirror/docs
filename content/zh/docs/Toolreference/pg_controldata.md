# pg\_controldata<a name="ZH-CN_TOPIC_0249632253"></a>

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

    共享存储参数，打印指定实例的control文件信息，该参数不指定时打印全部实例的control文件信息

-   --enable-dss

    共享存储参数，开启共享存储功能

-   --socketpath=SOCKETPATH

    共享存储参数，dss实例进程使用的socket文件路径，仅支持绝对路径

-   -V, --version

    显示版本信息。

-   -?,--help

    打印帮助信息。

## 使用举例（非DSS模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_controldata DATADIR
```
**说明：**

在非DSS模式，OPTION的取值不能是共享存储参数。

## 使用举例（DSS模式）<a name="zh-cn_topic_0237152442_section554725769"></a>

```
pg_controldata --enable-dss -I instance_id --socketpath=SOCKETPATH VGDATA
```

**DSS模式使用说明：**

在DSS模式，-I后面的参数为要查看的控制文件对应节点的节点id，VGDATA为集群的共享存储数据目录（例如数据目录为+data）。


