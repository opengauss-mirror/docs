# Delayed Replay<a name="EN-US_TOPIC_0000001091568392"></a>

## Availability<a name="section57017810"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section43398242"></a>

The time for a standby node to replay can be delayed.

## Benefits<a name="section55039858"></a>

By default, the standby server restores the Xlog records from the primary server as soon as possible. This function allows you to delay the time for a standby node to replay Xlog records. In this case, you can query a copy that records data before a period of time, which helps correct errors such as misoperations.

## Description<a name="section25596675"></a>

The GUC parameter  **recovery\_min\_apply\_delay**  can be used to set the delay time so that a standby server can replay Xlog records from the primary server after a delay time.

Value range: an integer ranging from 0 to INT\_MAX. The unit is ms.

Default value:  **0**  \(no delay\)

## Enhancements<a name="section29043486"></a>

None

## Constraints<a name="section27741012910"></a>

-   The  **recovery\_min\_apply\_delay**  parameter is invalid on the primary node. It must be set on the standby node to be delayed.
-   The delay time is calculated based on the timestamp of transaction commit on the primary server and the current time on the standby server. Therefore, ensure that the clocks of the primary and standby servers are the same.
-   Operations without transactions are not delayed.
-   After the primary/standby switchover, if the original primary server needs to be delayed, you need to manually set this parameter.
-   When  **synchronous\_commit**  is set to  **remote\_apply**, synchronous replication is affected by the delay. Each commit message is returned only after the replay on the standby server is complete.
-   Using this feature also delays  **hot\_standby\_feedback**, which may cause the primary server to bloat, so be careful when using both.
-   If a DDL operation \(such as DROP or TRUNCATE\) that holds an AccessExclusive lock is performed on the primary server, the query operation on the operation object on the standby server will be returned only after the lock is released during the delayed replay of the record on the standby server.

## Dependencies<a name="section57771982"></a>

None

