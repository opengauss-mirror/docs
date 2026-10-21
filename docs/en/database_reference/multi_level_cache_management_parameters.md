---
description: This document describes openGauss Multi-Level Cache Management Parameters in openGauss, covering topics such as enable\_nvm, nvm\_buffers.
keywords: [openGauss, openGauss Multi-Level Cache Management Parameters, database reference, enable\_nvm, nvm\_buffers]
---

# openGauss Multi-Level Cache Management Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:44:55.737Z -->

## enable\_nvm

**Parameter description**: Specifies whether to enable the multi-level cache management feature. This parameter cannot be modified after startup.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: Boolean, `on`/`off`. `on`: Enables the multi-level cache management feature for the current installation. `off`: Disables it.

**Default value**: off

>[!NOTE]Note
>
>- After this parameter is enabled, the original buffer pool is divided into a DRAM buffer pool and an NVM buffer pool. Page migration between cache levels is controlled by access frequency, so that hot data resides in memory, warm data in NVM, and cold data on disk.
>- The parameters `nvm_buffers`, `nvm_file_path`, `bypass_nvm`, and `bypass_dram` take effect only when `enable_nvm` is set to `on`.

## nvm\_buffers

**Parameter description**: Size of the NVM buffer pool.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: Integer, 0–2147483647

**Default value**: 0

## nvm\_file\_path

**Parameter description**: Path of the nvm file.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: A string, the path of the nvm file

>[!NOTE]Note
>
>- The nvm medium (for example, SCM) is exposed to applications through the file system interface in App Direct mode. openGauss implements byte addressing of the nvm medium by mmapping the nvm file, thereby using it as the openGauss cache.

## bypass\_nvm

**Parameter description**: Probability that a page that misses the cache is loaded directly into the DRAM buffer pool, bypassing the NVM buffer pool.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: Floating point, 0.0 to 1.0

**Default value**: 0.5

## bypass\_dram

**Parameter description**: The probability that a page is migrated to the DRAM buffer pool after it hits the NVM buffer pool.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: Float, 0.0 to 1.0

**Default value**: 0.01

>[!NOTE]Note
>
>- Taking the default value 0.01 as an example, after a page hits the NVM buffer pool, there is a 1% probability that it will be migrated to the DRAM buffer pool.
