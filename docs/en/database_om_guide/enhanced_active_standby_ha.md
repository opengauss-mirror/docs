# Enhanced Primary/Standby High Availability

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:03:52.206Z -->

## Availability<a name="section14707931165614"></a>

This feature has been available since openGauss 5.1.0.

## Introduction<a name="section43398242"></a>

For scenarios where a standby node is abnormal, this feature optimizes the primary node so that its workloads are not blocked in Maximum Availability mode, and table garbage collection is not affected.

## Customer Value<a name="section55039858"></a>

When a synchronous standby node becomes abnormal—for example, due to a disk failure that causes the standby to be blocked on disk writes for an extended period—and the primary node has `synchronous_commit` set to `on` or higher, the primary's workloads will be blocked. This feature ensures that when the standby's sync log position has not advanced for a long time, the primary no longer needs to wait for that standby to synchronize.

In addition, when `hot_standby_feedback` is enabled, the standby continuously synchronizes `oldestXmin` to the primary. The primary persists this value into the replication slot file. Autovacuum then cleans dirty data earlier than this xmin while retaining later data. If the standby fails, the xmin persisted on the primary cannot advance, making cleanup ineffective and causing table bloat. This feature also ensures that when xmin has not advanced for a long time, the primary's autovacuum ignores that standby's xmin.

## Feature Description<a name="section25596675"></a>

When Maximum Availability mode (`most_available_sync`) is enabled, and depending on the configured `synchronous_commit` level, if the receive/write/flush/replay LSN reported by the synchronous standby does not advance within a configured timeout window, the primary commits transactions without waiting for that standby, so transactions are not affected. Once the standby recovers and the LSN advances, the primary resumes waiting for that standby during transaction commit. The timeout window is controlled by the `ignore_standby_lsn_window` parameter.

For scenarios where `hot_standby_feedback` is enabled, if the xmin reported by the standby does not advance within a timeout window, the primary ignores that standby's xmin and does not affect primary autovacuum. The timeout window is controlled by the `ignore_feedback_xmin_window` parameter.

## Feature Enhancements<a name="section29043486"></a>

None.

## Feature Constraints<a name="section27741012910"></a>

- `ignore_standby_lsn_window` takes effect only when Maximum Availability mode (`most_available_sync`) is enabled.

## Dependencies<a name="section57771982"></a>

None.