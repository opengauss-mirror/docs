# Row-Column Fusion Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:49:35.134Z -->

## enable\_imcsscan<a name="section14941640131"></a>

**Parameter description**: Enables the column cache query feature.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method. After this feature is enabled, openGauss supports scanning through the column cache, and the execution plan determines whether to ultimately scan through the column cache based on whether the table has undergone row-column conversion and on cost estimation.

**Value range**: Boolean

- `on`: Enables the column cache scan feature.
- `off`: Disables the column cache scan feature.

**Default value**: off

## enable\_parallel\_populate<a name="section14941640131"></a>

**Parameter description**: Enables parallel row-column conversion.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: Boolean

- `on`: Enables parallel row-column conversion.
- `off`: Disables parallel row-column conversion.

**Default value**: on

## max\_imcs\_cache<a name="section14941640131"></a>

**Parameter description**: Sets the size of the buffer used by the column cache.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: integer, 102400–INT\_MAX, in KB.

**Default value**: 100 MB

**Setting recommendation**:

Row-column fusion uses the buffer configured by max\_imcs\_cache to store the column cache. When the max\_imcs\_cache configuration is increased, the size of max\_process\_memory must be increased to satisfy the basic memory logic check. When the data of the row-column conversion table exceeds the configured column cache storage space, the system stores temporary files.

htap_wait_xlog_lsn_timeout

## htap\_wait\_xlog\_lsn\_timeout<a name="section14941640131"></a>

**Parameter description**: Sets the timeout period for waiting for the primary LSN before row-column conversion on the standby node.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md) for the corresponding setting method.

**Value range**: integer, 0–INT\_MAX/1000, in seconds.

**Default value**: 60s
