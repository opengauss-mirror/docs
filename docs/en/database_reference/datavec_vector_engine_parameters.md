---
description: This document describes DataVec Vector Engine Parameters in openGauss, covering topics such as hnsw_ef_search, ivfflat_probes.
keywords: [openGauss, DataVec Vector Engine Parameters, database reference, hnsw_ef_search, ivfflat_probes]
---

# DataVec Vector Engine Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:38:58.126Z -->

## hnsw_ef_search<a name="section14941640131"></a>

**Parameter description**: The size of the dynamic candidate set used during HNSW index scan.

This parameter can only be set using method 3 in [Table 1](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, 1–1000

**Setting recommendation**: During HNSW index scan, the number of SQL results is limited by `Limit`. `hnsw_ef_search` specifies the initial scan set size. If data of the required `Limit` size is not obtained, `hnsw_ef_search` is automatically expanded to continue scanning. This value can be set within the value range.

**Default value**: 40

>[!NOTE]Note
> If more than 500 results are required, use the `IVFFLAT` index.

## ivfflat_probes<a name="section14941640131"></a>

**Parameter description**: The dynamic candidate set size during an IVFFLAT index scan.

This parameter can only be set using method 3 in [Table 1](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, 1–32768

**Setting recommendation**: `sqrt(lists)`, where `list` is the input parameter when the IVFFLAT index is built. For details, see [Vector Index](https://docs.opengauss.org/en/docs/latest/datavec/vector_index.html).

**Default value**: 1

>[!NOTE]Note
>
> A higher value improves query recall rate, but query speed will decrease.

## hnsw_earlystop_threshold<a name="section14941640131"></a>

**Parameter description**: When PQ is enabled for the HNSW index, sets the maximum number of consecutive iterations for graph search in the early-stop strategy.

This parameter can only be set using method 3 in [Table 1](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, 160 to INT32_MAX

**Default value**: INT32_MAX

>[!NOTE]Note
>
>The default value actually means the early-stop strategy is disabled. A lower value can improve query speed, but may reduce the recall rate. If the recall rate is not high enough, increase the parameter value appropriately.

## ivfpq_kreorder<a name="section14941640131"></a>

**Parameter description**: Sets the size of the reranking candidate set when PQ is enabled for an IVFFLAT index.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: Integer type, 0 to INT_MAX

**Default value**: 0

>[!NOTE]Note
>
>The default value disables this feature. A higher value improves the query recall rate, but the query speed decreases.<br>
>The recommended value is `k*ivfflat_probes`, where `k` is the `limit k` set in the user query SQL. If the value of `ivfpq_kreorder` is smaller than the `limit k` set in the user query SQL, the number of returned records equals the actual size of the reranking candidate set.<br>
>When creating an IVFPQ index, not setting the `ivfpq_kreorder` parameter or setting it to an unreasonable value causes the query results to be out of order.

## enable_ivfflat_npu<a name="section14941640131"></a>

**Parameter description**: Specifies whether the index enables the IVFFLAT-NPU acceleration feature.

This parameter is of the POSTMASTER type. See [Table 2](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: Boolean type, `on`/`off`

**Default value**: off

>[!NOTE]Note
>
> Before enabling the IVFFLAT-NPU acceleration feature, you must install the `libnputurbo.so` NPU acceleration package and correctly configure the `DATAVEC_NPU_LIB_PATH` environment variable. Otherwise, the database cannot start normally.

## ivfflat_npubind_info<a name="section14941640131"></a>

**Parameter description**: Sets the NPU card number used by the IVFFLAT-NPU acceleration feature. `enable_ivfflat_npu` must also be set to `on`.

This parameter is of the POSTMASTER type. See [Table 2](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Setting method**: 1. '(ivfflat_npubind_info: 1, 2)' uses NPU cards numbered 1 and 2; 2. '(ivfflat_npubind_info: 0-7)' uses NPU cards numbered 0 to 7.

**Default value**: 0

## cache_data_on_npu<a name="section14941640131"></a>

**Parameter description**: Specifies whether to cache raw vector data in NPU memory during retrieval. Setting it to `on` improves retrieval performance, while setting it to `off` saves NPU memory. `enable_ivfflat_npu` must also be set to `on`.

This parameter is of the POSTMASTER type. See [Table 2](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: Boolean type, `on`/`off`

**Default value**: off

## diskann_probes<a name="section14941640131"></a>

**Parameter description**: The dynamic candidate set size used during DISKANN index scan.

This parameter can be set only by using method 3 in [Table 2](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, 1–32768

**Setting recommendation**: During DISKANN index scan, the number of SQL results is limited by `Limit`. `diskann_probes` specifies the initial scan set size. It is recommended that this value be set to a value greater than `Limit`.

**Default value**: 128

>[!NOTE]Note
>
> A higher value improves query recall rate, but query speed decreases.

## enable_mmap<a name="section14941640131"></a>

**Parameter description**: HNSW retrieval can be accelerated by enabling the MMAP feature. This parameter is used to initialize the Hashmap for MMAP. It is currently a beta feature.

This parameter is of the POSTMASTER type. See [Table 2](../database_administration_guide/reset_parameters.md) for the corresponding setting method. It takes effect only after a restart.

**Value range**: Boolean type, `on`/`off`

**Default value**: off
>[!NOTE]Note
>The MMAP feature temporarily supports only the ARM architecture.<br>
>The MMAP feature temporarily supports only HNSW indexes.<br>
>The MMAP feature temporarily supports loading only one index, and DML operations cannot be performed on an index loaded with MMAP. To switch the loaded index, a restart is required.<br>

## hnsw_use_mmap<a name="section14941640131"></a>

**Parameter description**: Specifies whether the current session can use Mmap to load the HNSW index.

This parameter belongs to the USERSET type parameter and takes effect only for the current session. It can be enabled only when `enable_mmap=on`. Please refer to [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: Boolean type, `on`/`off`

**Default value**: off

## rbq_refinek<a name="section14941640131"></a>

**Parameter description**: Selects the candidate pool range for refined ranking. Generally, a higher value results in lower QPS but higher recall rate.

This parameter supports setting through methods 1, 2, and 3 in [Table 2](../database_administration_guide/reset_parameters.md).

**Value range**: floating-point type. The default value is 5, and the range is [1-1000].

**Default value**: 5.0

## rbq_query_bits<a name="section14941640131"></a>

**Parameter description**: Specifies whether to perform additional scalar quantization on the query vector. Proper configuration can improve the recall rate.

This parameter can only be set using method 3 in [Table 2](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, defaults to 8, range [1-8]

**Default value**: 8

## rbq_sample_rows<a name="section14941640131"></a>

**Parameter description**: In the scenario where the index is built before data is inserted, this parameter can be used to set the number of data rows that triggers delayed indexing. Because the rabitq algorithm requires a certain amount of data for training when building an index, creating an index without data affects the vector query recall rate. This parameter can be used to adjust the threshold condition for delayed indexing. If data is inserted before the index is built, no setting is required. The default value is 1000, and the range is [1000-INX_MAX].

This parameter can only be set using method 3 in [Table 2](../database_administration_guide/reset_parameters.md).

**Value range**: Integer type, default 1000, range [1000-2,000,000,000].

**Default value**: 1000
