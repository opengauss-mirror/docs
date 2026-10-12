# Data Import and Export

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:38:03.953Z -->

## safe_data_path

**Parameter description**: Sets the path prefix restriction for users other than the initial user, currently including the copy and advanced package path restrictions.

This parameter is of the SIGHUP type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: A string (fewer than 4096 characters)

**Default value**: NULL

## enable_copy_server_files

**Parameter description**: Whether to enable the permission to access server-side files for COPY.

This parameter is of the SIGHUP type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: boolean

- `on`: Enables the permission to access server-side files for COPY.
- `off`: Disables the permission to access server-side files for COPY.

**Default value**: off

## enable_delta_store

**Parameter description**: To improve the performance of importing a single record into a column-store table and to resolve the disk redundancy issue, this parameter determines whether to enable the column-store delta table feature. When this parameter is enabled, data imported into a column-store table is stored in either the delta table or the main table CU storage based on the DELTAROW_THRESHOLD content specified in the "SQL Language Structure and Syntax > SQL Syntax > CREATE TABLE" section of the *SQL Reference* at table definition time. When the data volume is less than [DELTAROW_THRESHOLD](../sql_reference/create_table.md), the data is stored in the delta table.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: boolean

- `on`: Enables the column-store delta table feature.
- `off`: Disables the column-store delta table feature.

**Default value**: off

## partition_max_cache_size

**Parameter description**: To optimize batch inserts into column-store partitioned tables, data is cached and then written to disk in batches during the batch insert process. The `partition_max_cache_size` parameter specifies the size of the data cache area. If this value is set too large, more system memory resources are consumed. If it is set too small, the batch insert performance of column-store partitioned tables is degraded.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**:

Column-store partitioned table: 4096 to INT_MAX / 2, in KB.

**Default value**: 2GB

## partition_mem_batch

**Parameter description**: To optimize batch insert into column-store partitioned tables, data is cached and then written to disk in batches during the batch insert process. The number of cached records can be specified through `partition_mem_batch`. If this value is set too large, more system memory resources are consumed; if it is set too small, the batch insert performance of column-store partitioned tables is reduced.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**:

Column-store partitioned table: 4096 to INT_MAX/2, with KB as the minimum unit.

**Default value**: 2 GB

## raise_errors_if_no_files

**Parameter description**: Specifies whether to distinguish between "the import file record count is empty" and "the import file does not exist" during import. If `raise_errors_if_no_files` is set to `TRUE`, a "file does not exist" error is thrown when the import file does not exist.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: boolean

- `on`: Distinguishes between "the import file record count is empty" and "the import file does not exist" during import.
- `off`: Does not distinguish between "the import file record count is empty" and "the import file does not exist" during import.

**Default value**: off

>[!WARNING]Warning
>
>- If a symbolic link file exists in the `safe_data_path` directory, the file is processed according to the path that the symbolic link actually points to. If the actual path is not under `safe_data_path`, an error is reported.
>
>- If a hard link file exists in the `safe_data_path` directory, it can be used normally. For security purposes, use hard link files with caution. Do not create hard link files in the `safe_data_path` directory that point outside the directory, and ensure that the permissions on the `safe_data_path` directory are minimized.
