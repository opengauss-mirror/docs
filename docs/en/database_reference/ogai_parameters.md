# OGAI Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:45:25.789Z -->

## enable\_async\_ogai

**Parameter description**: Controls whether to enable the OGAI asynchronous vectorized background worker process.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method. After it is enabled, the database starts the OGAI Launcher background process, which is responsible for listening to and scheduling asynchronous vectorization tasks.

**Value range**: Boolean

- `on`: Enables the OGAI asynchronous vectorized background worker process.
- `off`: Disables the OGAI asynchronous vectorized background worker process.

**Default value**: off

## ogai\.hybrid\_search\_ratio

**Parameter description**: Sets the weight ratio between the vector score and the BM25 score in hybrid search.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0.0–1.0.

**Default value**: 0.75
