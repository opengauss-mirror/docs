# gs\_dropnode<a name="EN-US_TOPIC_0293898578"></a>

## Background<a name="section1015619218480"></a>

**gs\_dropnode**, provided by openGauss, is used to drop unnecessary standby nodes from a cluster with one primary node and multiple standby nodes. You can delete unnecessary standby nodes until only the primary node is left.

## Precautions<a name="section1779345110485"></a>

-   If a connecting standby node is dropped from a primary/standby cluster, the database services running on the target standby node are automatically stopped, but the applications on the standby node are not deleted.

-   If only one primary node is left in the cluster after the deletion, the system prompts you to restart the current node. In this case, you are advised to restart the node based on the service running environment.
-   If the target standby node is disconnected before the operation, manually stop or delete the database service on the target standby server after the target standby server is restored.
-   The standby node can be dropped only from the primary/standby cluster installed in OM mode. The cluster installed in compilation mode is not supported.
-   If the target standby node is in the synchronous replication mode and there are transactions waiting committed during the **gs\_dropnode** operation, the transactions will be stucked shortly and recover until the target standby node deleted.
-   If the target standby node is left as standalone after it is deleted from the cluster, please add the record of the target standby to the file /etc/hosts.deny on the other nodes (e.g: sshd:10.11.12.13:deny) as root to reject the SSH connection from the target standby, which can avoid misoperation on the target standby.
-   If the target standby node is not needed any more after it is deleted from the cluster, please uninstall the openGauss with **gs\_uninstall --delete-data -L** on the target standby. Note that '-L' must be added.

## Prerequisite<a name="section171227231492"></a>

-   Perform standby node deletion only on the primary node.
-   Do not perform an primary/standby switchover or failover on other standby nodes at the same time.
-   Do not run **gs\_expansion** command on the primary node at the same time.
-   Do not run **gs\_dropnode** command with same parameters at the same time.
-   Before deletion, ensure that the database management user  **omm**  trust relationship has been established between the primary and standby nodes.
-   Log in to the OS as the OS user  **omm**  to run the  **gs\_dropnode**  command.
-   Before running commands, run the  **source**  command to import environment variables of a database on the primary node. If the database cluster is installed in separate environment variable mode, run the  **source**  command to import the separate environment variables. If they are not separated, run the  **source**  command to import the .bashrc configuration file of the sub-user. Generally, the file path is  **/home/\[user\]/.bashrc**.

## Syntax<a name="section4295914175012"></a>

-   Drop a standby node.

```
gs_dropnode -U USER -G GROUP -h hostlist  
```

-   Display help information.

```
gs_dropnode -? | --help
```

-   Display version information.

```
gs_dropnode -V | --version
```

## Parameter Description<a name="section1473361065420"></a>

-   -U

    Specifies the OS username of openGauss.


-   -G

    Specifies the OS user group of openGauss.


-   -h

    Specifies IP address of the standby node to be dropped. If there are multiple nodes, use commas \(,\) to separate them.


-   -?, --help

    Displays help information.


-   -V, --version

    Displays version information.


## Example<a name="section11522956105012"></a>

Use  **gs\_dropnode**  to drop nodes.

```
$ gs_dropnode -U omm -G dbgrp -h 10.11.12.13
[gs_dropnode]Start to drop nodes of the cluster.
[gs_dropnode]Start to stop the target node StandbyNode3.
[gs_dropnode]End of stop the target node StandbyNode3.
[gs_dropnode]Start to backup parameter config file on PrimaryNode.
[gs_dropnode]End to backup parameter config file on PrimaryNode.
[gs_dropnode]The backup file of PrimaryNode is /tmp/gs_dropnode_backup20201119205019/parameter_PrimaryNode.tar
[gs_dropnode]Start to parse parameter config file on PrimaryNode.
[gs_dropnode]End to parse parameter config file on PrimaryNode.
[gs_dropnode]Start to parse backup parameter config file on PrimaryNode.
[gs_dropnode]End to parse backup parameter config file on PrimaryNode.
[gs_dropnode]Start to set postgresql config file on PrimaryNode.
[gs_dropnode]End of set postgresql config file on PrimaryNode.
[gs_dropnode]Start to backup parameter config file on StandbyNode2.
[gs_dropnode]End to backup parameter config file on StandbyNode2.
[gs_dropnode]The backup file of StandbyNode2 is /tmp/gs_dropnode_backup20201119205019/parameter_StandbyNode2.tar
[gs_dropnode]Start to parse parameter config file on StandbyNode2.
[gs_dropnode]End to parse parameter config file on StandbyNode2.
[gs_dropnode]Start to parse backup parameter config file on StandbyNode2.
[gs_dropnode]End to parse backup parameter config file on StandbyNode2.
[gs_dropnode]Start to set postgresql config file on StandbyNode2.
[gs_dropnode]End of set postgresql config file on StandbyNode2.
[gs_dropnode]Start to get repl slot on PrimaryNode.
[gs_dropnode]Start to set repl slot on PrimaryNode.
[gs_dropnode]End of set repl slot on PrimaryNode.
[gs_dropnode]Start to set pg_hba config file on PrimaryNode.
[gs_dropnode]End of set pg_hba config file on PrimaryNode.
[gs_dropnode]Start to modify the cluster static conf.
[gs_dropnode]End of modify the cluster static conf. 
[gs_dropnode]Success to drop the target nodes.
```

## Helpful Links<a name="section12811914185219"></a>

[gs\_expansion](gs_expansion.md),  [gs\_ctl](gs_ctl.md)

