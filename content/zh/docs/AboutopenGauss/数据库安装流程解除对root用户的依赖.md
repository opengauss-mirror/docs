# 数据库安装流程解除对root用户的依赖

## 可获得性<a name="section56086982"></a>

本特性自openGauss 6.0.0-RC1版本开始引入，在openGauss 6.0.0 LTS版本中增强。

## 特性简介<a name="section35020791"></a>

数据库安装流程解除对root用户的依赖，本次涉及的流程有预安装，安装，升级，扩容，校验。所有的这些流程让用户无需使用root用户进行操作，直接使用普通用户就能操作。

由于预安装，校验，扩容这个三个工具都是root用户，其他的工具都已经是普通用户执行。所有本次涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

openGauss 6.0.0-RC1，针对预安装，校验，扩容这三个工具进行适配，确保数据库可以在普通用户下执行。

openGauss 6.0.0 LTS，针对之前预安装还需要一些提前操作进行了优化。

## 客户价值<a name="section46751668"></a>

openGauss的安装流程中，在预安装的时候使用的是root用户，到安装又是子用户，这样导致用户操作起来非常麻烦，而且容易出错；有些用户甚至拿不到root用户的权限。本次数据库安装流程解除对root用户的依赖，让用户无需使用root用户进行相应的操作，直接使用普通用户就能操作。

## 特性描述<a name="section18111828"></a>

数据库安装流程解除对root用户的依赖，本次涉及的流程有预安装，安装，升级，扩容，校验。所有的这些流程让用户无需使用root用户进行操作，直接使用普通用户就能操作。

由于预安装，校验，扩容这个三个工具都是root用户，其他的工具都已经是普通用户执行所有本次涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

openGauss 6.0.0-RC1，针对预安装，校验，扩容这三个工具进行适配，确保数据库可以在普通用户下执行。

openGauss 6.0.0 LTS，针对之前预安装还需要一些提前操作进行了优化；比如：1.取消了使用root建立互信的操作；2.取消了使用root设置内核信号量大小；3.取消了给普通用户赋予定时任务的权限。

## 特性增强<a name="section28788730"></a>

自openGauss 6.0.0-RC1版本，用户可以使用普通用户来安装，校验，扩容数据库，这在一定程度上解决了普通用户没有root用户权限的问题；当然了对于以前使用root操作也可以进行了保留。

openGauss 6.0.0-RC1适配涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

openGauss 6.0.0 LTS适配涉及的工具有：gs_preinstall。

## 特性约束<a name="section06531946143616"></a>

特性需要注意的是：

1.  有些操作，普通用户仍旧没有执行权限，还是需要root用户提前执行，可以参考以下资料。

<a href="../InstallationGuide/前提操作.md">前提操作</a>

2.  如果机器发生重启或者普通用户所有进程丢失，数据库会丢失互信，需要先手动拉起互信进程，再启动数据库。

启动互信进程的命令，需要在所有节点上分别执行。

```
source ENVFILE && python3 ${GPHOME}/script/local/CheckSshAgent.py
```

启动数据库的命令，在主机上执行。

```
source ENVFILE && gs_om -t start 或者 gs_om -t restart
```


## 依赖关系<a name="section57771982"></a>

无

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-OM。

gs_checkos文档：<a href="../ToolandCommandReference/gs_checkos.md">校验</a>

gs_preisntall文档：<a href="../ToolandCommandReference/gs_preinstall.md">预安装</a>

gs_expansion文档：<a href="../ToolandCommandReference/gs_expansion.md">扩容</a>
