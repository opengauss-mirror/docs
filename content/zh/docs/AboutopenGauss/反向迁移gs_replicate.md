# 反向迁移

## 特性简介<a name="section740615433477"></a>

支持openGauss的增量数据在线迁移至MySQL。

## 客户价值<a name="section13406743164715"></a>

反向迁移是指用户将源端数据库迁移到目标数据库，应用切到目标数据库后，再将目标端新产生的数据迁移回源端。反向迁移可满足用户业务迁移逃生的诉求，保持源端、目标端两个库并行运行，在目标端数据库出问题后应用能及时切回源端数据库。

## 特性描述<a name="section16406154310471"></a>

debezium opengauss connector的source端，监控openGauss的xlog日志，并将数据的DML操作以AVRO格式写入到kafka；

debezium opengauss connector的sink端，从kafka读取AVRO格式的数据，在mysql端按表并行回放，从而完成数据的DML操作从openGauss在线迁移至mysql。

## 特性增强<a name="section1340684315478"></a>

- 反向迁移支持迁移进度与回放失败的SQL语句实时上报。

## 特性约束<a name="section06531946143616"></a>

1.  日志级别的guc参数wal\_level = logical。
2.  仅限能进行逻辑复制的用户进行操作。
3.  不支持DDL操作迁移。
4.  在需要ssl连接的场景，需要前置条件保证guc参数ssl = on。
5.  不允许多个库使用同一个逻辑复制槽。
6.  禁止在使用逻辑复制槽时在其他节点对该复制槽进行操作，可通过参数slot.drop.on.stop控制是否在工具退出时删除逻辑复制槽。

## 依赖关系<a name="section8406643144716"></a>

依赖逻辑复制与发布订阅。

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-migration-portal/tree/master

详细参考文档： [README.md](https://gitee.com/opengauss/openGauss-migration-portal/blob/master/README.md) 

反向迁移社区地址：https://gitee.com/opengauss/debezium/tree/master 

详细参考文档 [README.md](https://gitee.com/opengauss/debezium/blob/master/README.md) 