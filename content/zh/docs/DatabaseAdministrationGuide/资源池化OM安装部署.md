# 资源池化OM安装部署指南

## 内容简介

openGauss资源池化是openGauss推出的一种新型的集群架构。该架构通过DMS和DSS组件，实现集群中多个节点的底层存储数据共享和节点间的内存实时共享，达到节省底层存储资源以及集群内部支持一写多读且可以实时一致性读的目的。
本文主要介绍如何用企业版安装包，使用OM安装资源池化环境。

## 环境预备
  - 两台及以上的物理机
  - 一台企业级集中式存储（比如Huawei Dorado系列）或支持iscsi3协议的集中式存储
  - 两台物理机和存储之间通过光交换机互连，两台物理机之间通过光交换机或以太交换机互连，业务客户端和物理机之间通过光交换机或以太交换机互连

## OM安装指南
 >![](public_sys-resources/icon-note.png) **说明：**   
  > - 存储自身的配置、LUN的划分以及存储节点与物理机的连通配置不在安装指导范围中，此处假定物理机已经可以看到用于安装数据库的LUN。
  > - 一套集群需要(3+N)个LUN，说明如下:
    1. cm_vote, cm投票盘，1套集群1个
    2. cm_shared, cm数据盘，1套集群1个
    3. dss_shared， 数据库数据盘，1套集群1个
    4. dss_private_N， 数据库xlog盘，1套集群中根据节点数量每个节点1个，比如1主1备，就是2个：dss_private_0和dss_private_1，1主2备就是3个：dss_private_0、dss_private_1和dss_private_2，以此类推。

1. 准备软件包以及准备操作系统环境，详情参考：[获取安装包](../GettingStarted/获取安装包.md) 和 [准备软硬件安装环境](../GettingStarted/准备软硬件安装环境.md)

2. 准备安装需要的xml，详情参考：[创建XML配置文件](../InstallationGuide/创建XML配置文件.md)

3. 执行preinstall, 详情参考：[初始化安装环境](../InstallationGuide/初始化安装环境.md)

4. 执行install, 详情参考：[执行安装](../InstallationGuide/执行安装.md)
    
    
