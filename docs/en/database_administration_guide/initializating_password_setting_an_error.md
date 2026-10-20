---
description: This document describes Password Setting Error During Database Initialization in openGauss, covering topics such as Symptom, Cause.
keywords: [openGauss, Password Setting Error During Database Initialization, database administration, Symptom, Cause]
---

# Password Setting Error During Database Initialization

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:43:34.458Z pushedAt=2026-09-11T09:13:34.912Z -->

## Symptom

The error message "passwd must contain at least eight characters" appears during gs_initdb.

## Cause

The initialization password is incorrect.

## Solution

Set a valid password that contains at least three different character types and is at least eight characters long.
