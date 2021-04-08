# Adding or Deleting a Standby Server<a name="EN-US_TOPIC_0000001091887980"></a>

## Availability<a name="section118411122194813"></a>

This feature is available since openGauss 2.0.0.

## Introduction<a name="section13375160194919"></a>

Standby servers can be added and deleted.

## Benefits<a name="section19340161511499"></a>

If the read pressure of the primary server is high or you want to improve the disaster recovery capability of the database, you need to add a standby server. If some standby nodes in a cluster are faulty and cannot be recovered within a short period of time, you can delete the faulty nodes to ensure that the cluster is running properly.

## Description<a name="section54601932194912"></a>

openGauss can be scaled out from a single server or one primary and multiple standbys to one primary and eight standbys. Cascaded standby servers can be added. Standby nodes can be added when a faulty standby server exists in the cluster. One primary and multiple standbys can be scaled in to a single server. A faulty standby server can be deleted.

Standby nodes can be added or deleted online without affecting the primary server.

## Enhancements<a name="section1658716245019"></a>

None

## Constraints<a name="section13118121915014"></a>

For adding a standby server:

-   Ensure that the openGauss image package exists on the primary server.

-   Ensure that the same users and user groups as those on the primary server have been created on the new standby server.

-   Ensure that the mutual trust of user  **root**  and the database management user has been established between the existing database nodes and the new nodes.

-   Ensure that the XML file has been properly configured and information about the standby server to be scaled has been added to the installed database configuration file.

-   Ensure that only user  **root**  is authorized to run the scale-out command.

-   Do not run the  **gs\_dropnode**  command on the primary server to delete other standby nodes at the same time.
-   Ensure that the environment variables of the primary server have been imported before the scale-out command is run.

-   Ensure that the operating system of the new standby server is the same as that of the primary server.

-   Do not perform an primary/standby switchover or failover on other standby nodes at the same time.

For deleting a standby server:

-   Delete the standby node only on the primary node.
-   Do not perform an primary/standby switchover or failover on other standby nodes at the same time.
-   Do not run the  **gs\_expansion**  command on the primary node for scale-out at the same time.
-   Do not run the  **gs\_dropnode**  command twice at the same time.
-   Before deletion, ensure that the database management user trust relationship has been established between the primary and standby nodes.
-   Run this command as a database administrator.
-   Before running commands, run the  **source**  command to import environment variables of the primary server.

## Dependencies<a name="section24082349505"></a>

None

