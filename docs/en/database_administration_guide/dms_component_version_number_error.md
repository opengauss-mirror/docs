# DMS Component Version Number Error

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:42:57.300Z pushedAt=2026-09-11T07:45:32.882Z -->

## Symptom

The error message "dms library version is not matched" is displayed at startup.

## Cause

The DMS component version number is incorrect.

## Solution

Check openGauss-server/src/gausskernel/ddes_commit_id, roll back the version number based on the displayed dms_commit_id, and then recompile.