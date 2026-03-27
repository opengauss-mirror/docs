# oGRecorder（数据保险柜）

## 可获得性<a name="section3480125215575"></a>

本特性自openGauss 7.0.0-RC2版本开始引入。

## 特性简介<a name="section5814521587"></a>

GR（oGRecorder）是一款数据库日志保护软件。其典型部署场景是运行于virtCCA中，南向对接Dorado Worm存储，北向通过oGRecorderSDK对接数据库，实现对数据库WAL日志的实时同步，形成对用户数据库系统的日志安全保护的软硬一体组合方案。

## 客户价值<a name="section148987345811"></a>

实现对数据库预写式日志的保护，构建安全防勒索方案。

## 特性描述<a name="section117041846581"></a>

其中virtCCA基于硬件硬隔离和机密计算能力，为oGRecorder的运行提供隔离于宿主机、REE的安全TEE计算环境；Dorado Worm存储提供Write Once Read Many技术，对数据存储只能新增、禁止删改，实现数据库日志的防篡改保护，防止出现数据库文件、备份数据发生勒索攻击时数据无法恢复；oGRecorder实现类vfs系统支持数据的高效写入和读取，支持和SDK之间安全认证、数据安全写入；而oGRecorderSDK提供完备的文件操作API，供第三方软件调用，进而实现对数据库日志的实时同步、灾备回放。

## 特性增强<a name="section21149265913"></a>

- openGauss 7.0.0-RC3：支持在线滚动升级与离线升级。
- openGauss 7.0.0-RC3：支持[主备参数同步](../../tool_and_commandreference/ogrecorder/ogrecorder_primary_standby_sync.md)。
- openGauss 7.0.0-RC3：[oGRecorder API优化](../../tool_and_commandreference/ogrecorder/ogrecorder_restapi.md)
- openGauss 7.0.0-RC3：[oGRecorder 密钥同步](../../tool_and_commandreference/ogrecorder/ogrecorder_sry_key_sync.md)

## 特性约束<a name="section51513617597"></a>

无。

## 依赖关系<a name="section20491151513592"></a>

无。
