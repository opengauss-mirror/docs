# 资源池化 HTAP 行列融合

## 可获得性<a name="section15406143204715"></a>

本特性自 openGauss 7.0.0-RC2 版本开始引入。

## 特性简介<a name="section740615433477"></a>

资源池化存算分离场景下（单机/主备HTAP参考[行列融合](row_and_column_integration.md)），通过主、从节点的行列双格式内存模式，实现openGauss 资源池化 HTAP一体化数据库架构。本地内存模式下，实现列存数据主、从节点分片存储；共享内存（灵衢）模式下，列存数据存储在远端共享内存，实现主、从节点共享一份列存数据。同时支持资源池化多机并行列缓存查询能力，显著增强 openGauss 在大型复杂 OLAP 场景中的数据分析能力。

## 客户价值<a name="section13406743164715"></a>

随着企业数字化变更深入，实时的高并发事务处理及复杂的数据整合、分析混合工作负载成为企业数据库的核心诉求。业务系统逐步通过HTAP（Hybrid Transactional/Analytical Processing）数据库的模式升级来响应新的业务场景，即通过同一套数据库内存系统，同时支持高效的事务处理（OLTP）和复杂查询（OLAP）。

openGauss 通过简单的指令设置，实现资源池化场景下多机行列转换和列缓存数据存储的能力。借助多机并行列存的查询优势，在数据量庞大，表结构复杂，而用户仅关注部分列数据的查询的场景下，行列转换后的列缓存可极大提升企业执行大型复杂OLAP数据分析的整体查询效率。

## 特性描述<a name="section16406154310471"></a>

openGauss资源池化场景下，支持主、从节点形成行列双格式内存形式。

- 行列数据转换

    用户在主节点发送针对表数据的行列转换请求：
    - 本地内存场景：与主备场景类似，主、从节点接收到表的行列转换请求后，通过分片策略完成各自行列数据转换后，形成基础列存储单元（Column Unit），批量插入申请的本地列存内存中。
    - 共享内存场景：主节点接受到表的行列转换请求后，将列存数据存储到远端共享内存中，本地存储仅存储列存元数据，并通过网络通道将元数据发送至从节点进行缓存，实现主、从节点共享同一份列存数据。

- 基于DMS的多机行列缓存数据同步

    为了保障从节点列缓存数据的实时性，设计基于DMS的多机列缓存数据同步能力，主节点增量表存储增量数据，同步后台线程更新列存储单元（Column Unit）并广播至从节点，实现所有节点的列存数据同步更新。

- 支持多机并行列缓存的扫描查询

    新增SPQ-CStore-Scan （SPQCStore scan）多机并行列缓存查询算子，基于openGauss执行优化器及代价估算，生成包含多机并行列缓存查询算子的向量化执行计划。

## 特性增强<a name="section1340684315478"></a>

无。

## 特性约束<a name="section06531946143616"></a>

资源池化 HTAP 行列融合的规格约束如下：

- 行列融合约束参考[单机/主备行列融合特性约束](row_and_column_integration.md)。

- 资源池化 HTAP 依赖资源池化多机并行查询特性，相应约束参考[资源池化多机并行特性约束](resource_pooling_multi_machine_paralleism.md)。

- 资源池化 HTAP 使用共享内存存储列存数据，依赖灵衢提供共享内存能力，非灵衢环境无法使用。

## 依赖关系<a name="section8406643144716"></a>

[行列融合特性](row_and_column_integration.md)

[资源池化多机并行特性](resource_pooling_multi_machine_paralleism.md)

## 使用指导<a name="section20491151513592"></a>

资源池化 HTAP 行列融合特性支持用户针对全表、表指定列进行行列转换及清除已有列缓存操作，不支持分区表。相关参数说明请参考[资源池化行列融合参数](../database_reference/资源池化行列融合参数.md)，开启多机并行查询请参考[spqplugin使用说明](../extension_reference/spqplugin.md)。

- **本地内存行列转换**

    启动数据库前，配置列缓存节点，所有列缓存节点均配置如下guc参数。

    ```
    ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    shared_preload_libraries = 'spqplugin'
    ```

    本地内存转换命令与主备场景一致，请参考[行列融合使用指导](row_and_column_integration.md);

- **共享内存行列转换**

    在灵衢环境下，启动数据库前，配置列缓存节点、配置灵衢共享内存so路径、配置列存可用远端共享内存大小。

    ```
    ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    shared_preload_libraries = 'spqplugin'
    ubs_mem_path = 'libubsm_sdk.so'
    ss_max_imcs_cache = 10GB
    ```

    - **转换方式1：全表转换**

        ```
        ALTER TABLE table_name IMCSTORED WITH SHARE_MEMORY;
        ```

    - **转换方式2：表部分列转换**

        ```
        ALTER TABLE table_name IMCSTORED(column_name_list) WITH SHARE_MEMORY;
        ```

- **多机并行列存扫描**

    使用gsql登录数据库

    ```
    set spqplugin.enable_spq = on；
    set enable_imcsscan = on;
    set spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    -- 查看多机并行查询计划，使用SPQCstoreScan算子
    explain select imcstored_columns from table_name;
    ```

- **清除已转换的列缓存**

    ```
    ALTER TABLE table_name UNIMCSTORED;
    ```
        
### 参数说明<a name="section415419560710"></a>

- **table\_name**

    要转换的表名。
- **column\_name\_list**

    指定表中要行转列的字段名列表，如 （name, age）。

- **imcstored\_columns**

    已经转换的列名，可指定以转换的列名进行列存查询。
