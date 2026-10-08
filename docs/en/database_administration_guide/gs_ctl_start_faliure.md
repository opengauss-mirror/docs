# gs_ctl start Failure

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:43:13.706Z pushedAt=2026-09-11T08:16:11.452Z -->

## Symptom

The database fails to start using the gs_ctl start command.

## Cause

The simulated space created by dd is too small, causing the gs_ctl start command to fail.

## Solution

Erase the header file and use the dd command to simulate the block device file again. The simulated block device size should generally be no less than 10 GB, with a recommended size of 20 GB (the simulated block device size is bs*count).

```shell
dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=100 conv=notrunc >/dev/null 2>&1
dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=10240 >/dev/null 2>&1