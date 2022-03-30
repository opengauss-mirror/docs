# openEuler系统一键安装openGauss<a name="ZH-CN_TOPIC_0000001222174034"></a>

## 可获得性<a name="section15406143204715"></a>

本特性自openEuler 22.03 LTS版本开始支持。

## 特性简介<a name="section740615433477"></a>

在openEuler系统上，可以通过yum install opengauss命令一键安装数据库。

## 客户价值<a name="section1067215172372"></a>

对于开发者，降低了安装openGauss数据库的复杂度，提升了易用性。

## 特性描述<a name="section1017916314374"></a>

将openGauss数据库默认集成到openEuler操作系统上，用户可以在安装openEuler操作系统时候，选择openGauss软件包，或者在安装完操作系统后，通过yum install opengauss命令，快速部署单机版的openGauss数据库实例。提升了安装数据库的易用性。

## 特性约束<a name="section1694165712371"></a>

- 目前仅集成在openEuler 22.03 LTS版本的操作系统上。

- 默认安装的数据库为单实例进程。

