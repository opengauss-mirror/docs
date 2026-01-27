# 资源池化行列融合参数

资源池化行列融合继承[单机/主备行列融合参数](row_and_column_fusion_parameters.md)，并新增如下参数。

## ss\_max\_imcs\_cache<a name="section14941640131"></a>

**参数说明**：设置列缓存所使用的远端共享内存的大小，仅在灵衢环境下有效。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0\~INT\_MAX，单位为kB。

**默认值**： 128MB

**设置建议**：

资源池化HTAP使用ss_max_imcs_cache设置的远端共享内存进行列缓存的存储，设置值为128MB的整数倍。
需要保证共享内存足够大，若共享内存不足，将会转换失败，已经转换的表，增量数据将存储在主节点本地内存中，此时建议取消转换，使用本地内存进行行列转换。

## ss\_htap\_cluster\_map<a name="section14941640131"></a>

**参数说明**：参数值为字符串类型，需要与spqplugin.cluster_map保持一致。该参数用于指定计算节点ip地址及libcomm端口，配置的节点将接收和执行来自于主节点下发的行列转换请求以及多机列缓存查询计划并将计算结果返回给主节点，最终结果由主节点汇总计算返回给用户。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：字符串

ss_htap_cluster_map格式：
pgxc_node_name|ip|port

- pgxc_node_name 当前计算节点名称，与guc参数[pgxc_node_name](../database_reference/opengauss_transaction.md)一致。且各个计算节点配置的节点名称应互不相同。
- ip 当前计算节点用于libcomm通信的ip地址，建议与集群通信ip配置为不同网段，避免相互之间网络影响。
- port 当前数据库端口。

以两节点为例，参数配置为：

```
ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
```

**默认值**：NULL（默认为空值，即不指定多机节点，此时无法进行行列转换）

**设置建议**：

## ubs\_mem\_path<a name="section14941640131"></a>

**参数说明**： 灵衢共享内存so文件路径, 仅在灵衢环境有效。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串。

**默认值**： libubsm_sdk.so
