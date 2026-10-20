---
description: This document describes INST_ID Conflict or Invalidity in openGauss, covering topics such as Symptoms, Cause.
keywords: [openGauss, INST_ID Conflict or Invalidity, database administration, Symptoms, Cause]
---

# INST_ID Conflict or Invalidity

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:43:41.006Z pushedAt=2026-09-11T09:13:39.337Z -->

## Symptoms

When executing the dsscmd command, the following error message appears: "Invalid DSS parameter: the value of 'INST_ID' is invalid".

## Cause

The INST_ID setting in the dss_inst.ini file is invalid or duplicated. The valid range of INST_ID is 0 to 63.

## Solution

Open the dss_inist.ini file and modify INST_ID. Note that both dss0 and dss1 must be checked and modified.

>[!NOTE] Note   
>
> - The dss_inst_ini file is located in the $DSS_HOME/cfg directory.
