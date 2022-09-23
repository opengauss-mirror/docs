# gs\_dropnode<a name="EN-US_TOPIC_0293898578"></a>

## Background<a name="section1015619218480"></a>

**gs\_dropnode**, provided by openGauss, is used to drop unnecessary standby nodes from a database with one primary node and multiple standby nodes. You can delete unnecessary standby nodes until only the primary node is left.

## Precautions<a name="section1779345110485"></a>

-   When a standby database instance that can be connected is removed, the database service running on this standby database instance is automatically stopped, and the GRPC certificate \(stored in  *$GAUSSHOME***/share/sslcert/grpc/**\) on the standby database instance is automatically deleted. However, the applications on the standby database instance are not deleted.

-   If only one primary node is left in the database after the deletion, the system prompts you to restart the current node. In this case, you are advised to restart the node based on the service operating environment.
-   If the target standby database instance cannot be connected before the operation, you need to manually stop or delete the database service on the database instance after it is restored, and delete the GRPC certificate \(stored in  *$GAUSSHOME***/share/sslcert/grpc/**\) from the standby database instance.
-   The standby node can be dropped only from the primary/standby database installed in OM mode. The database installed in compilation mode is not supported.
-   If the standby node to be removed is in synchronous replication mode and a transaction is being performed on the primary node when the deletion command is executed, the transaction submission will be suspended for a short period of time. After the deletion is complete, the transaction processing can continue.
-   After the target standby node is removed, if you are not sure whether the target standby node is required anymore, use the following method to reject the remote connection through SSH from the target standby node to avoid misoperations:
    -   On the current primary node, modify the  **/etc/ssh/sshd\_config**  file as user  **root **and add the following record. If a DenyUsers record exists, append the following record after the existing one.

        ```
        `DenyUsers omm@10.11.12.13`
        ```

        After the modification, you need to restart the SSH service for the modification to take effect. After the modification, user  **omm **cannot remotely log in to the primary node from the target standby node.

    -   On the current primary node, add the target standby node to the  **/etc/hosts.deny**  file \(for example,  **sshd:10.11.12.13:deny**\) to reject the remote connection through SSH from the target standby node \(valid for all users\). This method requires that the sshd service be bound to the libwrap library.

-   After the target standby node is removed and is no longer required, run the  **gs\\\_uninstall --delete-data -L**  command on the target standby node to uninstall openGauss. Note that the  **-L **option must be added.

-   When the streaming DR function is used, this tool is not supported.

## Prerequisite<a name="section171227231492"></a>

-   Perform standby node deletion only on the primary node.
-   Do not perform an primary/standby switchover or failover on other standby nodes at the same time.
-   Do not run the  **gs\_expansion **command on the primary node for scale-out at the same time.
-   Do not run the  **gs\_dropnode **command twice at the same time.
-   Before deletion, ensure that the database management user  **omm**  trust relationship has been established between the primary and standby nodes.
-   Run this command as a database administrator, for example,  **omm**.
-   Before running commands, run the  **source**  command to import environment variables of a database on the primary node. If the database is installed in separate environment variable mode, run the  **source**  command to import the separate environment variables. If they are not separated, run the  **source**  command to import the .bashrc configuration file of the sub-user. Generally, the file path is  **/home/\[user\]/.bashrc**.

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
gs_dropnode -U omm -G dbgrp -h 10.11.12.13
The target node to be dropped is (['StandbyNode1'])
Do you want to continue to drop the target node (yes/no)? yes
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
