# 使用kubernetes部署分布式数据库

## 可获得性<a name="section3594727121215"></a>

本特性自openGauss 2.1.0版本开始引入。

## 特性简介<a name="section49381643132417"></a>

一键式部署分布式数据库。

## 客户价值<a name="section143901154141215"></a>

快速完成分布式数据库搭建，验证和使用分布式能力。

## 特性描述<a name="section57261629139"></a>

通过patroni实现计划内switchover和故障场景自动failover，通过haproxy实现openGauss主备节点读写负载均衡，通过shardingsphere实现分布式能力，所有功能打包至镜像并提供一键式部署脚本。

## 特性增强<a name="section790711851312"></a>

无。

## 特性约束<a name="section8686411191311"></a>

仅支持centos或openEuler操作系统。

## 依赖关系<a name="section185341414141318"></a>

shardingsphere、patroni、haproxy。

