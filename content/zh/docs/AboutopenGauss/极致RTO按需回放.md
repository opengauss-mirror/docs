# 极致RTO按需回放

## 可获得性

本特性自openGauss 5.1.0 版本开始引入。

## 特性简介

-   支撑资源池化部署下数据库主机重启后快速恢复的场景。
-   支撑资源池化部署下备机加速failover，降低RTO。
-   本特性基于现有极致RTO特性演进而来。

## 客户价值

资源池化部署下，备机不再回放主机日志。当主机发生故障后，备机从主机最后一次checkpoint位置开始恢复，恢复过程需要很长时间，数据库不可用，严重影响系统可用性。

开启按需回放极致RTO（Recovery Time Object，恢复时间目标），减少了主机故障后数据库不可用的时间，提高了可用性。

## 特性描述

按需回放极致RTO开关开启后，故障恢复时仅构建恢复所必须的内容，不进行实际回放，之后立即对外提供服务，降低RTO。在对外提供服务后，在后台继续进行日志回放，并由用户需要触发按需回放，保证用户获得数据最新（即结果与未发生故障时前一致）。

按需回放在control文件的Cluster Status项新增两种状态："in on-demand build"、"in on-demand redo"(详见[pg_controldata](../ToolandCommandReference/pg_controldata.md))。开启按需回放功能，发生failover时，新主节点先将控制文件中cluster Status置为"in on-demand build"，进入按需回放的构建阶段，此时集群在构建回放必须信息，不能对外提供服务。构建完成后，会将控制文件中cluster Status置为"in on-demand redo"，进入按需回放的回放阶段，此时可以对外提供服务，同时进行日志回放，直至回放完毕。如果主节点在按需回放两个阶段未能全部完成的情况下退出，作为逃生手段，新主节点会以极致RTO模式进行故障恢复。

## 特性增强

1. 按需回放支持实时构建
   -  本特性自openGauss 6.0.0-RC1版本开始引入。
   -  按需回放支持实时构建，能够在资源池化集群正常运行阶段就构建恢复所必须的内容，进一步降低RTO。
2. 按需回放redo阶段适配部分ddl
   -  本特性自openGauss 6.0.0版本开始引入。
   -  支持在按需回放redo阶段（即failover完成，新主节点已经对外提供服务，但后台还在继续进行日志回放）执行部分DDL语法。
   -  具体而言，本特性支持执行SCHEMA、TABLE、INDEX、VIEW、PROCEDURE的CREATE、DROP、ALTER类型语法，以及DATABASE的ALTER类型语法，其他语法会合理报错。此外本特性支持在按需回放redo阶段执行存储过程，存储过程中包含的语法必须在redo阶段支持语法范围内。
   -  由于本特性需要在执行DDL前检索相关数据库实体的所有未回放日志，并完成回放，可能存在DDL执行时间较长的情况。
3. 实时构建支持流控
   -  本特性自openGauss 7.0.0-RC1版本开始引入，即在资源池化实时构建场景适配recovery_time_target参数。该功能只在资源池化的主节点有效，开启该功能后，备机会定时向主机发送备机实时构建的最新wal日志的lsn，主机根据连续几次接收到的lsn估算RTO，当识别到当前实时构建的构建速度难以满足目标RTO时，会对主机业务做适当限制，以缓解备机实时构建压力，缩短RTO。
   -  资源池化场景recovery_time_target参数只在主机生效，使用本特性需要主机配置recovery_time_target > 0，备机配置ss_ondemand_realtime_build = on，主机就会开始基于备机的xlog构建速度对主机业务进行流控。
   -  本特性在reform期间不生效，即该功能在reform期间会动态关闭，reform结束后会重新生效。
   -  为避免极端场景阻塞业务，资源池化场景recovery_time_target为RTO参考值，主机会基于RTO参考值在识别到备机实时构建速度较慢时适当减缓业务，不会完全阻塞业务，即不能完全保证实际RTO在recovery_time_target配置值以内。

## 特性约束

-   本特性仅支持在资源池化部署下使用。
-   在对外提供服务后，数据库仍在后台进行回放，直到全部内容完成后退出回放，该阶段称为“按需回放阶段”。按需回放阶段仅支持部分类型SQL语法（INSERT/UPDATE/DELETE/SELECT/SET/SHOW）及部分DDL(详见[特性增强](../AboutopenGauss/极致RTO按需回放.md#特性增强))，该状态请使用pg_controldata工具查询。
-   按需回放阶段禁用autovacuum。
-   实时构建能力仅在备机failover场景生效。
-   极致RTO按需回放性能会受磁阵环境影响而波动。
-   本功能会消耗较多的内存空间，仅建议在内存充足且对RTO时间敏感的系统上使用，其余系统建议使用极致RTO回放(详见[极致RTO](../AboutopenGauss/极致RTO.md))。
-   资源池化下回放模式选择，请参考[资源池化高可用系统配置](../DatabaseOMGuide/资源池化高可用系统配置.md)

## 依赖关系

无。

