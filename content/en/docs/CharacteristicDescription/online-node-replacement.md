# Online Node Replacement<a name="EN-US_TOPIC_0000001088278196"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section740615433477"></a>

If a node in a database is unavailable or the instance status is abnormal due to a hardware fault and the database is not locked, you can replace the node or rectify the instance fault to restore the database. During the restoration, DML operations are supported. DDL operations are supported in limited scenarios only.

## Benefits<a name="section13406743164715"></a>

Currently, the scale of enterprise data is increasing, the number of nodes increases sharply, and the probability of hardware damage increases accordingly. The traditional offline node replacement mode cannot meet customer requirements for uninterrupted services. During routine O&M, frequent service interruption will bring great loss to customers. However, the current database products in the industry cannot meet the requirements of physical node replacement in large-scale data scenarios without service interruption. Services need to be interrupted, or only some operations are allowed when services are not interrupted.

## Description<a name="section16406154310471"></a>

If a node in a database is unavailable or the instance status is abnormal due to a hardware fault, you can replace the node or rectify the instance fault to restore the database. During the restoration, DML operations are supported. DDL operations are supported in limited scenarios only.

## Enhancements<a name="section15227174218371"></a>

None

## Constraints<a name="section06531946143616"></a>

Currently, online DDL operations are supported during node replacement.

-   During node replacement, DML operations are supported and DDL operations are supported in certain scenarios.

## Dependencies<a name="section8406643144716"></a>

None

