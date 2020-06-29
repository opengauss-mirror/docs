# Replication and High Availability<a name="EN-US_TOPIC_0257867404"></a>

NIR

Since MOT is integrated into openGauss and uses its replication and high availability, both synchronous and asynchronous replication are supported out of the box.

To configure the replication and HA, refer to the relevant openGauss/GaussDB documentation.

MOT also supports HA as part of the envelope. The GaussDB gs\_ctl tool is used for availability control and to operate the cluster. This includes gs\_ctl switchover, gs\_ctl failover, gs\_ctl build and so on.

See the openGauss Tools Reference for more information.

