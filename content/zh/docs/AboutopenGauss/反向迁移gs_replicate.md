# 反向迁移gs_replicate

## 特性简介<a name="section740615433477"></a>

支持openGauss的增量数据在线迁移至MySQL。

## 客户价值<a name="section13406743164715"></a>

反向迁移是指用户将源端数据库迁移到目标数据库，应用切到目标数据库后，再将目标端新产生的数据迁移回源端。反向迁移可满足用户业务迁移逃生的诉求，保持源端、目标端两个库并行运行，在目标端数据库出问题后应用能及时切回源端数据库。

## 特性描述<a name="section16406154310471"></a>

debezium opengauss connector的source端，监控openGauss的xlog日志，并将数据的DML操作以AVRO格式写入到kafka；

debezium opengauss connector的sink端，从kafka读取AVRO格式的数据，在mysql端按表并行回放，从而完成数据的DML操作从openGauss在线迁移至mysql。

## 特性增强<a name="section1340684315478"></a>

- 反向迁移支持迁移进度与回放失败的SQL语句实时上报。
- 反向迁移支持断点续传功能，可满足工具中断重启后数据持续迁移，中断期间的增量数据不遗漏。
- 反向迁移支持jdbc超时重连机制，可在jdbc断连后自动重连，用户无感知。
- 反向迁移支持用户自定义是否在迁移结束后保留逻辑复制槽，若保留逻辑复制槽则可实现断点续传功能。
- 反向迁移增加流量控制能力，可在迁移大批量增量数据时触发流量控制，防止系统崩溃。
- 反向迁移支持使用mppdb_decoding插件进行并行解码，迁移性能较默认插件pgoutput有较大提升，使用方法：
  在对应的`opengauss-source.properties`文件中（或者使用Datakit-数据迁移-迁移参数配置）修改参数
  `plugin.name=mppdb_decoding`，
  当逻辑复制槽为mppdb_decoding时，可设置解码线程并行度：`parallel.decode.num=1~20（默认值：15）`。

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

开源社区地址：[gs_rep_portal](https://gitcode.com/opengauss/openGauss-migration-portal/tree/5.1.0)

详细参考文档： <a href="https://gitcode.com/opengauss/openGauss-migration-portal/blob/5.1.0/README.md ">README.md</a>

反向迁移社区地址：[gs_replicate](https://gitcode.com/opengauss/debezium/tree/5.1.0)

详细参考文档： <a href="https://gitcode.com/opengauss/debezium/blob/5.1.0/README.md ">README.md</a>  