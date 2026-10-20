---
description: 本文介绍 openGauss Oracle-\>oGRAC迁移工具openGauss-FullReplicate 的相关内容，涵盖 可获得性、特性简介 等内容。
keywords: [openGauss, Oracle-\>oGRAC迁移工具openGauss-FullReplicate, 特性描述, 可获得性, 特性简介]
---

# Oracle-\>oGRAC迁移工具openGauss-FullReplicate

## 可获得性<a name="section56086982"></a>

本特性自openGauss-FullReplicate 7.0.0 版本开始引入。

## 特性简介<a name="section35020791"></a>

openGauss-FullReplicate 工具是一个基于Java语言的数据复制工具，该工具提供了初始全量数据及对象（视图、触发器、函数、存储过程、序列）的复制能力，可实现数据及对象从Oracle迁移至oGRAC。

## 客户价值<a name="section46751668"></a>

通过使用openGauss-FullReplicate工具，可完成数据从Oracle搬迁至oGRAC数据库。

## 特性描述<a name="section18111828"></a>

openGauss-FullReplicate工具提供数据全量复制功能，使得数据可以从Oracle迁移至oGRAC数据库，数据类型映射见参考文档。

openGauss-FullReplicate 是一款基于Java开发的工具，支持在指定版本的CentOS 7及openEuler 20.03/22.03/24.03系统（x86_64与aarch64架构）上完成纯离线安装部署，无需任何外部网络连接。

openGauss-FullReplicate 工具采用生产者-消费者结构，全量迁移时，生产者查询Oracle数据库中指定用户下表数据，通过内置中间件DataX将数据提取同步到oGRAC数据库。

## 特性约束<a name="section06531946143616"></a>

支持Oracle11-19

## 依赖关系<a name="section57771982"></a>

openGauss-FullReplicate工具需要jdk17及以上。

## 参考文档<a name="section57771982"></a>

openGauss-FullReplicate详细说明和使用文档参考[Oracle-oGRAC全量迁移指南](https://atomgit.com/opengauss/debezium/blob/master/migration-tool/docs/oracle2ograc-readme.md)。
