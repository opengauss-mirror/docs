# Resource Pooling Row-Column Fusion Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:37:58.918Z -->

Resource pooling row-column fusion inherits the [standalone/primary-standby row-column fusion parameters](row_and_column_fusion_parameters.md) and adds the following parameters.

## ss\_max\_imcs\_cache<a name="section14941640131"></a>

**Parameter description**: Sets the size of the remote shared memory used by the column cache. This parameter takes effect only in the Lingqu environment.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: integer, 0–INT\_MAX, in KB.

**Default value**: 128 MB

**Setting recommendation**:

Resource pooling HTAP uses the remote shared memory set by `ss_max_imcs_cache` to store the column cache. The setting value is an integer multiple of 128MB. Ensure that the shared memory is large enough. If the shared memory is insufficient, the conversion will fail. For tables that have already been converted, incremental data will be stored in the local memory of the primary node. In this case, it is recommended to cancel the conversion and use local memory for row-column conversion.

## ss\_htap\_cluster\_map<a name="section14941640131"></a>

**Parameter description**: The parameter value is of the string type and must be consistent with `spqplugin.cluster_map`. This parameter specifies the IP address and libcomm port of the compute node. The configured node receives and executes the row-column conversion requests and multi-node column cache query plans delivered by the primary node, and returns the computation results to the primary node. The final results are aggregated and computed by the primary node and returned to the user.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: A string

Format of ss_htap_cluster_map:
pgxc_node_name|ip|port

- pgxc_node_name: Name of the current compute node, which must be consistent with the GUC parameter [pgxc_node_name](../database_reference/opengauss_transaction.md). The node names configured on different compute nodes must be different from each other.
- ip: IP address of the current compute node used for libcomm communication. It is recommended to configure it on a different network segment from the cluster communication IP address to avoid mutual network impact.
- port: Port of the current database.

Taking two nodes as an example, the parameter is configured as follows:

```
ss_htap_cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
```

**Default value**: NULL (empty by default, which means no multi-node is specified, and row-column conversion cannot be performed in this case)

**Setting recommendation**:

## ubs\_mem\_path<a name="section14941640131"></a>

**Parameter description**: Path of the Lingqu shared memory .so file. This parameter takes effect only in the Lingqu environment.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: A string.

**Default value**: `libubsm_sdk.so`
