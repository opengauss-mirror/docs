# spqplugin使用参考

## 加载插件

多机查询特性默认是关闭的，需要新增以下GUC配置参数使能插件：

node1:
```
port = 12300
pgxc_node_name = 'node1'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
spqplugin.enable_spq = on
```
node2:
```
port = 12300
pgxc_node_name = 'node2'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
spqplugin.enable_spq = on
```

## 使用插件

多机并行功能目前支持部分DQL、DDL、DML，详情参考：

[SELECT](spqplugin-SELECT.md)

[CREATE INDEX](spqplugin-CREATE-INDEX.md)

[INSERT](spqplugin-INSERT.md)

[DELETE](spqplugin-DELETE.md)

[UPDATE](spqplugin-UPDATE.md)
