# Using a Standby Node to Build a Standby Node<a name="EN-US_TOPIC_0000001223785974"></a>

## Availability<a name="section14707931165614"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section43398242"></a>

A standby node can be built by another standby node to accelerate standby node recovery from faults. The I/O and bandwidth pressure of the primary node can be reduced.

## Benefits<a name="section55039858"></a>

When the service load is heavy, building a standby node by using the primary node increases the resource burden on the primary node. As a result, the performance of the primary node deteriorates and the build becomes slow. Building a standby node by using a standby node does not affect services on the primary node.

## Description<a name="section25596675"></a>

You can run the  **gs\_ctl**  command to specify a standby node to build another standby node to be repaired. For details, see "Tools Used in the Internal System \> gs\_ctl" in  _Tool Reference_.

## Enhancements<a name="section29043486"></a>

None.

## Constraints<a name="section27741012910"></a>

A standby node can only be used to build another standby node. You can only use a specified IP address and port number to build the standby node. Before building the standby node, ensure that the logs of the standby node to be repaired are later than those of the standby node that sends data.

## Dependencies<a name="section57771982"></a>

None.

