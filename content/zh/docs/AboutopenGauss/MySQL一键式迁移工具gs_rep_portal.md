﻿# MySQL一键式迁移工具gs_rep_portal

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_rep_portal是一个用Java编写的，在linux系统上运行的，集成了全量迁移、增量迁移、反向迁移、数据校验的工具。gs_rep_portal支持以上工具的一键式安装上述工具，设定迁移任务，任务根据用户设定的执行计划顺序的调用相应工具完成每个迁移步骤，并能实时展示每个步骤的状态、进度、异常原因等。

## 客户价值<a name="section46751668"></a>

通过使用gs_rep_portal工具，可完成一键启动包含多个迁移工具的迁移计划，可以同时开启多个迁移计划。

## 特性描述<a name="section18111828"></a>

gs_rep_portal是一个用Java编写的，在linux系统上运行的，集成了全量迁移、增量迁移、反向迁移、数据校验的工具。gs_rep_portal支持以上工具的一键式安装上述工具，设定迁移任务，任务根据用户设定的执行计划顺序的调用相应工具完成每个迁移步骤，并能实时展示每个步骤的状态、进度、异常原因等。
gs_rep_portal支持全量迁移工具在指定版本和架构的系统上进行离线安装。

## 特性增强<a name="section28788730"></a>

无。

## 特性约束<a name="section06531946143616"></a>

- portal在执行增量迁移、反向迁移、增量校验时需要使用curl工具。

- 同一个迁移计划的增量迁移和反向迁移不会同时开启，如果一个计划中包含了增量迁移和反向迁移，那么需要用户手动停止增量迁移，启动反向迁移。当用户启动反向迁移之后，无法再启动增量迁移。

- portal使用的workspace.id只能为小写字母与数字的组合。

- portal在启动多个计划时，需要保证MySQL数据库实例各不相同，openGauss端数据库各不相同，且同一个MySQL数据库实例和openGauss端数据库的增量迁移和反向迁移不能同时开启。

## 依赖关系<a name="section57771982"></a>

依赖各迁移工具可以正常使用。

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitcode.com/opengauss/openGauss-migration-portal/tree/master

详细参考文档： [README.md](https://gitcode.com/opengauss/openGauss-migration-portal/blob/5.1.0/README.md) 、 [命令行参数名称及说明.md](https://gitcode.com/opengauss/openGauss-migration-portal/blob/5.1.0/命令行参数名称及说明.md)