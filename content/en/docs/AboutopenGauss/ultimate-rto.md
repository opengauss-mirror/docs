# Ultimate RTO<a name="EN-US_TOPIC_0000001152275221"></a>

## Availability<a name="section57017810"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section43398242"></a>

-   The database host can be quickly restored after being restarted.
-   Logs can be synchronized between the primary and standby nodes to accelerate playback on the standby node.

## Benefits<a name="section55039858"></a>

When the service load is heavy, the playback speed of the standby node cannot catch up with that of the primary node. After the system runs for a long time, logs are accumulated on the standby node. If a host is faulty, data restoration takes a long time and the database is unavailable, which severely affects system availability.

The ultimate recovery time object \(RTO\) is enabled to reduce the data recovery time after a host fault occurs and improve availability.

## Description<a name="section25596675"></a>

After the ultimate RTO function is enabled, multi-level pipelines are established for Xlog log playback to improve the concurrency and log playback speed.

## Enhancements<a name="section29043486"></a>

None.

## Constraints<a name="section27741012910"></a>

The ultimate RTO focuses only on whether the RTO of the standby node meets the requirements. The ultimate RTO removes the built-in flow control and uses the  **recovery\_time\_target**  parameter for flow control. This feature does not support the read operation on the standby node. If you query the standby node, a core dump may occur on the standby node.

## Dependencies<a name="section57771982"></a>

None.

