# 实例启停

在进行集群维护、故障排查和修复时，可以根据需要对集群和实例进行启停。

cms的各个命令需要切换集群用户后才能执行，请执行以下命令切换用户：

```
# su -s /bin/bash - ograc
```

## 命令说明

使用方法：

```
cms res -start
cms res -start RESOURCE_NAME
cms res -start RESOURCE_NAME -node NODE_ID
cms res -start RESOURCE_NAME TIMEOUT
cms res -stop RESOURCE_NAME
cms res -stop RESOURCE_NAME -node NODE_ID
```

选项参数：

| 参数            | 说明                        |
| ------------- | ------------------------- |
| RESOURCE_NAME | 资源名称，当前仅有db和dss资源         |
| NODE_ID       | 节点id                      |
| TIMEOUT       | 启动超时阈值（启动时间超过阈值会返回，否则会等待，默认值为600秒） |

## 命令参考

1、启动集群或实例

**注意事项**

- 执行该命令前，检查待启动节点的CMS server是否存活（执行ps -ef|grep 'cms server'命令查看是否存在cms server进程来判断）。

- 启动指定节点的资源，默认等待时间为600秒，600秒仍未成功启动，该命令超时报错退出。

启动cms资源（如需后台挂载，则使用 cms server -start &）：

```
$ cms server -start
start resource succeed.
NODE_ID     = 0
CMS_HOME    = /opt/oGRAC/data
GCC_HOME    = /opt/oGRAC/data/gcc_home/gcc_file
CMS GCC_TYPE:FILEVERSION     = oGRAC Debug 25.12 0d24758
cms startup...
MES: LSNR 127.0.0.1:23456
```

启动集群内所有db节点：

```
$ cms res -start db
start resource succeed.
```

启动指定db节点：

```
$ cms res -start db -node 0
start resource succeed.
```

启动集群内所有dss节点：

```
$ cms res -start dss
start resource succeed.
```

启动集群内指定dss节点：

```
$ cms res -start dss -node 0
start resource succeed.
```

指定等待时间启动集群内节点：

```
$ cms res -start db 120000
start resource succeed.
```

2、停止集群或实例
停止cms资源：

```
cms server -stop
stop cms server succeed.
```

停止集群内所有db节点：

```
$ cms res -stop db
stop resource succeed.
```

停止指定db节点：

```
$ cms res -stop db -node 0
stop resource succeed.
```

停止集群内所有dss节点：

```
$ cms res -stop dss
stop resource succeed.
```

停止指定dss节点：

```
$ cms res -stop dss -node 0
stop resource succeed.
```
