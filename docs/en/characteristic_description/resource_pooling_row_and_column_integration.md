---
description: This document describes Resource Pooling HTAP Row-Column Fusion in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Resource Pooling HTAP Row-Column Fusion, features, Availability, Feature Overview]
---

# Resource Pooling HTAP Row-Column Fusion

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:25:13.330Z pushedAt=2026-09-22T11:12:32.695Z -->

## Availability<a name="section15406143204715"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section740615433477"></a>

In the resource pooling storage-compute separation scenario (for single-node/primary-standby HTAP, see [row-column fusion](row_and_column_integration.md)), the row-column dual-format memory mode on primary and standby nodes implements the openGauss resource pooling HTAP integrated database architecture. In local memory mode, columnar data is stored in shards on primary and standby nodes. In shared memory (Lingqu shared memory) mode, columnar data is stored in remote shared memory, so that primary and standby nodes share one copy of columnar data. It also supports resource pooling multi-node parallel column cache query, significantly enhancing openGauss data analysis capabilities in large-scale complex OLAP scenarios.

## Customer Benefits<a name="section13406743164715"></a>

As enterprise digital transformation deepens, real-time high-concurrency transaction processing and complex data integration and analysis mixed workloads have become the core requirement of enterprise databases. Business systems are gradually upgraded to the HTAP (Hybrid Transactional/Analytical Processing) database model to respond to new business scenarios, that is, using the same database memory system to support both efficient transaction processing (OLTP) and complex queries (OLAP).

openGauss implements multi-node row-column conversion and column cache data storage in resource pooling scenarios through simple command settings. Leveraging the query advantages of multi-node parallel column store, in scenarios where the data volume is large, the table structure is complex, and users focus only on querying some columns of data, the column cache after row-column conversion can greatly improve the overall query efficiency of enterprises executing large-scale complex OLAP data analysis.

## Feature Description<a name="section16406154310471"></a>

In the openGauss resource pooling scenario, the primary and standby nodes support forming dual-format memory that holds data in both row and column forms.

- Row-column data conversion

    The user sends a row-column conversion request for table data on the primary node:

    - Local memory scenario: Similar to the primary/standby scenario, after receiving a table's row-column conversion request, the primary and standby nodes complete their respective row-column data conversion through the sharding policy, form basic column storage units (Column Units), and batch-insert them into the applied local columnar memory.

    - Shared memory scenario: After receiving a table's row-column conversion request, the primary node stores the columnar data in remote shared memory. The local storage only stores the columnar metadata, and the metadata is sent to the standby nodes through the network channel for caching, so that the primary and standby nodes share the same columnar data.

- DMS-based multi-node row-column cache data synchronization

    To ensure the real-time performance of the standby nodes' column cache data, a DMS-based multi-node column cache data synchronization capability is designed. The primary node's incremental table stores incremental data, and the synchronization background threads update the column storage units (Column Units) and broadcast them to the standby nodes, achieving synchronized updates of columnar data across all nodes.

- Support for scan queries on multi-node parallel column cache

    A new SPQ-CStore-Scan (SPQCStore scan) multi-node parallel column cache query operator is added. Based on the openGauss execution optimizer and cost estimation, a vectorized execution plan containing the multi-node parallel column cache query operator is generated.

## Feature Enhancements<a name="section1340684315478"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

The specification constraints of Resource Pooling HTAP Row-Column Fusion are as follows:

- For row-column fusion constraints, see [Single-Node/Primary-Standby Row-Column Fusion Constraints](row_and_column_integration.md).

- Resource Pooling HTAP depends on the resource pooling multi-node parallel query feature. For related constraints, see [Resource Pooling Multi-Node Parallelism Constraints](resource_pooling_multi_machine_parallelism.md).

- Resource Pooling HTAP uses shared memory to store columnar data and depends on Lingqu to provide the shared memory capability. It cannot be used in non-Lingqu environments.

## Dependencies<a name="section8406643144716"></a>

[Row-Column Fusion Feature](row_and_column_integration.md)

[Resource Pooling Multi-Node Parallelism Feature](resource_pooling_multi_machine_parallelism.md)

## Usage Guide<a name="section20491151513592"></a>

The Resource Pooling HTAP Row-Column Fusion feature allows users to perform row-column conversion on an entire table or specified columns of a table and to clear existing column caches. Partitioned tables are not supported. For descriptions of related parameters, see [Resource Pooling Row-Column Fusion Parameters](../database_reference/resource_pooling_row_column_fusion_parameters.md). To enable multi-node parallel queries, see [spqplugin Usage Instructions](https://docs.opengauss.org/en/docs/latest/extension_reference/extension_reference/plugin/spqplugin.html).

- **Local memory row-column conversion**

    Before starting the database, configure the column cache nodes. All column cache nodes are configured with the following GUC parameters.

    ```
    ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    shared_preload_libraries = 'spqplugin'
    ```

    The local memory conversion commands are the same as those in the primary/standby scenario. See [Row-Column Fusion Usage Guide](row_and_column_integration.md).

- **Shared mmory row-column conversion**

    In the Lingqu environment, before starting the database, configure the column cache nodes, configure the Lingqu shared memory so file path, and configure the available remote shared memory size for columnar storage.

    ```
    ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    shared_preload_libraries = 'spqplugin'
    ubs_mem_path = 'libubsm_sdk.so'
    ss_max_imcs_cache = 10GB
    ```

    - **Conversion method 1: Full-table conversion**

        ```
        ALTER TABLE table_name IMCSTORED WITH SHARE_MEMORY;
        ```

    - **Conversion method 2: Partial-column conversion**

        ```
        ALTER TABLE table_name IMCSTORED(column_name_list) WITH SHARE_MEMORY;
        ```

- **Multi-node parallel columnar scan**

    Log in to the database using gsql.

    ```
    set spqplugin.enable_spq = on;
    set enable_imcsscan = on;
    set spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
    -- View the multi-node parallel query plan, using the SPQCstoreScan operator
    explain select imcstored_columns from table_name;
    ```

- **Clear the converted column cache**

    ```
    ALTER TABLE table_name UNIMCSTORED;
    ```

### Parameter Description<a name="section415419560710"></a>

- **table\_name**

    The name of the table to be converted.

- **column\_name\_list**

    The list of column names in the table to be converted from rows to columns, for example (name, age).

- **imcstored\_columns**

    The names of the columns that have been converted. You can specify the converted column names to perform columnar storage queries.
    
