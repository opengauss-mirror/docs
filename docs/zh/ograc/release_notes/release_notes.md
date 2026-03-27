# 发行说明

## 版本介绍

oGRAC(openGauss Real Application Cluster) 7.0.0-RC3是openGauss社区 2026年3月发布的多主数据库创新版本，该版本生命周期为0.5年。本版本为oGRAC的第一个版本。

主要功能如下：

- 支持多读多写

    提供便于扩展成多主架构的内核，数据库实例间通过共享内存服务实现跨节点的事务、页面缓存一致性，各数据库实例共享一份数据存储，以实现各节点同时读写操作、各节点共享存储。

- 标准SQL支持

    支持标准的SQL92/SQL99/SQL2003规范，支持GBK、UTF-8字符集，支持SQL标准函数与分析函数，支持存储过程。

- 数据库存储管理功能

    支持表空间，可以把不同表规划到不同的存储位置。

- 应用程序接口

    支持标准JDBC、ODBC驱动。

### 已修复问题

完整问题清单请参见[完整问题清单](https://gitcode.com/opengauss/oGRAC/issues)。

完整的内核提交记录请参见[提交记录](https://gitcode.com/opengauss/oGRAC/tree/7.0.0-RC3)。

已修复问题请参见下表。

| ISSUE                                                        | 关联仓库                                | 问题描述                                                     |
| ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| [121](https://gitcode.com/opengauss/oGRAC/issues/121) | oGRAC | [Bug]: create table创建数组core |
| [119](https://gitcode.com/opengauss/oGRAC/issues/119) | oGRAC | [Bug]: exists on条件非关联查询产生core |
| [107](https://gitcode.com/opengauss/oGRAC/issues/107) | oGRAC | [Bug]: with as查询产生core |
| [103](https://gitcode.com/opengauss/oGRAC/issues/103) | oGRAC | [Bug]: 修复空指针core |
| [94](https://gitcode.com/opengauss/oGRAC/issues/94)  | oGRAC  | [Bug]: select时sql引擎core |
| [87](https://gitcode.com/opengauss/oGRAC/issues/87)  | oGRAC  | [Bug]: select时计划层产生core |
| [71](https://gitcode.com/opengauss/oGRAC/issues/71)  | oGRAC  | [Bug]: group_concat + order by查询发生core |
| [29](https://gitcode.com/opengauss/oGRAC/issues/29)  | oGRAC  | [Bug]: 执行group_concat用例coredump |
| [26](https://gitcode.com/opengauss/oGRAC/issues/26)  | oGRAC  | [Bug]: tc_group_concat_bound_020执行core |

### 继承功能

  - 基础功能：[SQL基础能力](../about_ograc/product_description/sql_ability.md#sql基础能力概述)、[SQL优化器](../about_ograc/product_description/sql_ability.md#sql优化器能力概述)、[事务管理](../about_ograc/product_architecture/transaction_mechanism.md#事务机制)等。
  - [多写能力](../about_ograc/product_architecture/technical_feature_overview_of_database_multi_write_capability.md#ograc引擎多写技术特性概述)
  - 存储引擎特性
    - [检查点机制](../about_ograc/product_architecture/ckpt.md)，在内存和磁盘之间建立一个同步点，以确保数据的一致性和持久性，并加速数据库的恢复过程。
    - [在线DDL](../about_ograc/product_architecture/online_ddl.md)，在不影响或极小影响数据库正常提供服务的情况下，完成表定义的修改。
    - [redo日志](../about_ograc/product_architecture/redo.md)，保证事务的持久性，即一旦事务提交，它对数据所做的修改就永久不会丢失，即使随后发生系统崩溃。
  - 可维护能力
    - [WSR报告](../about_ograc/maintainability.md#wsr报告)，通过对数据库打快照，利用两个不同时间点的生成的快照中收集到的统计数据，生成这期间的性能分析报告。
    - [统计试图](../about_ograc/maintainability.md#统计视图)，提供了多个视图供用户查看系统信息，按功能维度可以分为DBA视图、用户视图和性能视图，结合这些视图信息可以观察当前数据库内部的运行状态。
  - 应用驱动
    - [JDBC驱动](../developer_guide/jdbc/jdbc_package_driver_class_and_environment_class.md#jdbc包驱动类和环境类)，JDBC（Java Database Connectivity，Java数据库连接）是一种用于执行SQL语句的Java API，可以为多种关系数据库提供统一访问接口，应用程序可基于它操作数据。
    - [ODBC驱动](../developer_guide/odbc/linux_configure_data_source.md#linux下配置数据源)，Open Database Connectivity （ODBC） 是一个被广泛接受的应用程序编程接口（API），用于数据库访问。 它基于开放组和 ISO/IEC 中用于数据库 API 的 Call-Level 接口（CLI）规范，并使用结构化查询语言（SQL）作为其数据库访问语言。

### CVE漏洞

本版本是2026年3月发布的创新版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 版本使用注意事项

- 版本技术规格可以参照《关于oGRAC》中的[规格](../about_ograc/specification/specification.md#表相关规格)。
- 可参照《安装指南》中的[单节点安装](../installation_guide/single_node_guide/local_installation_on_a_single_node.md)或[双节点安装](../installation_guide/two_nodes_guide/ograc_two_node_installation.md) ，选择业务需要的部署架构，保证数据库集群的可靠性和可用性。

## 源代码

oGRAC包含多个代码仓，包括引用开源软件的补丁代码仓、JDBC驱动代码仓、ODBC驱动代码仓、数据库服务器代码仓和文档仓库：

- 开源软件代码仓：[https://gitcode.com/opengauss/openGauss-third\_party](https://gitcode.com/opengauss/openGauss-third_party)
- JDBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-jdbc](https://gitcode.com/opengauss/openGauss-connector-jdbc)
- ODBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-odbc](https://gitcode.com/opengauss/openGauss-connector-odbc)
- 数据库服务器代码仓：[https://gitcode.com/opengauss/oGRAC](https://gitcode.com/opengauss/oGRAC)
- 数据库文档仓库：[https://gitcode.com/opengauss/docs](https://gitcode.com/opengauss/docs)

## 用户须知

oGRAC是一款支持多读多写的开源数据库。采用协议“木兰宽松许可证”（Mulan PSL V2），用户可以自由复制、使用、修改、分发，不论修改与否。

oGRAC的版本号遵循 X.Y.0-RCx 的格式，旨在区分不同类型的版本更新。具体而言：

 + LTS版本（X.0.0）：每两年发布一次，标志着长期稳定支持的版本，适合大规模部署与生产环境使用。社区承诺为每个LTS版本提供为期三年的维护支持，确保其持续稳定与安全。
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 致谢

我们衷心地感谢参与和协助 oGRAC 7.0.0-RC3版本发布的所有开发者和伙伴。是你们的辛勤付出使得版本顺利发布，也为oGRAC更好地发展提供可能。
