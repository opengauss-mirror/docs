# Xlog no Lock Flush<a name="EN-US_TOPIC_0000001209317775"></a>

## Availability<a name="section3480125215575"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section5814521587"></a>

Canceled the WalInsertLock contention and dedicated WalWriter disk write thread.

## Benefits<a name="section148987345811"></a>

The system performance is further improved on the basis that the original Xlog functions remain unchanged.

## Description<a name="section117041846581"></a>

This feature optimizes the WalInsertLock mechanism by using log sequence numbers \(LSNs\) and log record counts \(LRCs\) to record the copy progress of each backend. The backend can directly copy logs to the WalBuffer without contending for the WalInsertLock. In addition, a dedicated WALWriter thread is used to write logs, and the backend thread does not need to ensure the Xlog flushing.

## Enhancements<a name="section21149265913"></a>

None.

## Constraints<a name="section51513617597"></a>

None.

## Dependencies<a name="section20491151513592"></a>

None.

