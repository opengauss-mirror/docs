---
description: This document describes Delimiter in openGauss, covering topics such as delimiter_name.
keywords: [openGauss, Delimiter, database reference, delimiter_name]
---

# Delimiter

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:38:33.421Z -->

## delimiter_name

**Parameter description**: Stores the name of a delimiter.

When the gsql client recognizes the delimiter, it immediately sends one or more SQL statements entered to the server for execution. This usage is applicable when many statements are entered and the statements contain semicolons, in which case a special symbol can be specified as the terminator.
This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.
This parameter can be set only in the gsql client and can be configured using the DELIMITER command.

**Value range**: A string with a length greater than 0

**Default value**: ";"
