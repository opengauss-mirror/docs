# Adding and Removing Standby Nodes

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:41:44.506Z pushedAt=2026-07-29T08:00:42.004Z -->

## Availability <a name="section118411122194813"></a>

This feature is introduced since openGauss 2.0.0.

## Feature Description<a name="section13375160194919"></a>

Supports adding and removing standby nodes.

## Customer Value<a name="section19340161511499"></a>

When the read pressure on the primary database is high, or when users want to enhance the database disaster recovery capability, new standby nodes need to be added. When certain standby nodes in the cluster fail and cannot be repaired within a short period, users can first remove the faulty nodes to ensure that the cluster remains in a normal state.

## Feature Description<a name="section54601932194912"></a>

openGauss supports scaling from a single node or one primary with multiple standbys up to one primary with eight standbys, supports adding cascaded standby nodes, and supports adding standby nodes when faulty standby nodes exist in the cluster. It also supports scaling down from one primary with multiple standbys to a single node, and supports removing a standby node when it is faulty.

Online addition and removal of standby nodes are supported, meaning that standby nodes can be added or removed without affecting primary node services.

## Feature Enhancements<a name="section1658716245019"></a>

None.

## Feature Constraints <a name="section13118121915014"></a>

Constraints for adding a standby node:

- The openGauss image package must exist on the database host.

- Create the same user and user group on the new standby node to be added as those on the host.

- Establish root user mutual trust and database management user mutual trust between the existing database nodes and the new node to be added.

- Configure the XML file correctly. Add the information of the standby nodes to be scaled out based on the existing database configuration files.

- Only the root user can execute the scale-out command.

- Do not execute the gs_dropnode command on the primary node to remove other standby nodes at the same time.

- Import the environment variables of the host database before executing the scale-out command.

- The operating system of the standby node added for scale-out must be consistent with that of the primary node.

- Do not perform primary/standby switchover or failover on other standby nodes during the operation.

Constraints on deleting a standby node:

- The operation of deleting a standby node can only be performed on the primary node.

- Do not perform primary/standby switchover or failover on other standby nodes during the operation.

- Do not run the gs_expansion command for scale-out on the primary node at the same time.

- Do not execute the same gs_dropnode command twice at the same time.

- Before performing the removal operation, ensure that mutual trust between the database management users has been established on the primary and standby nodes.

- Only the database admin user can execute this command.

- Before executing the command, import the environment variables of the host database using the source command.

## Dependency<a name="section24082349505"></a>

None.