# 开启RemoveIPC引起的core问题<a name="ZH-CN_TOPIC_0289900135"></a>

## 问题现象<a name="zh-cn_topic_0283136554_section54529241124"></a>

操作系统配置中RemoveIPC参数设置为yes，数据库运行过程中出现宕机，并显示如下日志消息。

```
FATAL: semctl(1463124609, 3, SETVAL, 0) failed: Invalid argument
```

## 原因分析<a name="zh-cn_topic_0283136554_section444545621213"></a>

当RemoveIPC参数设置为yes时，操作系统会在对应用户退出时删除IPC资源（共享内存和信号量），从而使得openGauss服务器使用的IPC资源被清理，引发数据库宕机。

## 处理分析<a name="zh-cn_topic_0283136554_section10754612151312"></a>

设置RemoveIPC参数为no。设置方法请参考《安装指南》中“安装准备\>准备软硬件安装环境\>修改操作系统配置”章节。
