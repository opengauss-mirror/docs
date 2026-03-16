# 支持openGauss到openGauss的迁移能力

## 可获得性

本特性自 openGauss 7.0.0-RC3 版本开始引入。

## 特性简介

本特性在 openGauss-FullReplicate 工具中实现了 openGauss 到 openGauss 的数据迁移能力。

## 客户价值

特性主要解决用户在 openGauss 数据库存在升级限制时，无法保留旧版本数据库数据的问题。通过本特性，用户可以将数据从旧版本迁移至新版本，实现数据库的升级。同时解决用户在传统主备数据库与资源池化架构数据库之间迁移数据的问题。

## 特性描述

特性支持将 openGauss 数据库中的数据迁移至新的 openGauss 数据库实例中，支持迁移表、索引、序列、视图、函数、触发器、存储过程。

## 特性约束

- 工具使用 Java 17 编写，需要迁移环境准备 Java 17+ 的运行环境。
- 要求源端openGauss版本为5.0.0+，目标端版本要求不低于源端
- 当前仅支持a、b兼容模式的数据库迁移，且要求源端与目标端兼容模式保持一致
- 外表暂不支持迁移
- openGauss资源池化参数enable_segment默认值为on，传统主备enable_segment默认为off，从传统主备迁移至资源池化时，目的表会自动加上segment=on的属性

## 依赖关系

无

## 参考文档

使用本特性完成 openGauss 迁移，请参考[openGauss-FullReplicate工具使用指导](https://gitcode.com/opengauss/debezium/tree/master/migration-tool)。
