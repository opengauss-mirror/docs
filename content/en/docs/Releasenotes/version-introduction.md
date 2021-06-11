# Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 2.0.1 is a patch version of openGauss 2.0.0, which is compatible with openGauss 2.0.0 and resolves the following issues:

-   Modified defects:
    -   [I3RCGU](https://gitee.com/opengaussorg/dashboard?issue_id=I3RCGU)  When  **synchronous\_commit**  is set to  **off**, transactions are continuously inserted to the host and are blocked for 1 to 2 seconds at intervals.
    -   [I3R7IZ](https://gitee.com/opengaussorg/dashboard?issue_id=I3R7IZ)  A core error may occur during log switchover because  **walsnd-\>mutex**  is repeatedly obtained.
    -   [I3R7VH](https://gitee.com/opengaussorg/dashboard?issue_id=I3R7VH)  When a large number of transactions are continuously executed, archiving on the standby node fails.
    -   [I3ROC6](https://gitee.com/opengaussorg/dashboard?issue_id=I3ROC6) **000000010000000100000078.00000028.backup**  is generated in the  **pg\_xlog**  directory on the primary node.
    -   [I3RRIC](https://gitee.com/opengaussorg/dashboard?issue_id=I3RRIC)  In a cluster deployed with one primary and three standby nodes, the synchronization list is set to  **ANY 2\(dn\_6002, dn\_6003, dn\_6004\)**, a large number of transactions are continuously executed, and the archiving function of standby node 1 is enabled. After the archiving is disabled and enabled again, the archiving function of standby node 1 is abnormal.
    -   [I3S40U](https://gitee.com/opengaussorg/dashboard?issue_id=I3S40U)  The pg\_xlog of the standby node is not reclaimed.
    -   [I3SPOW](https://gitee.com/opengaussorg/dashboard?issue_id=I3SPOW)  In primary/standby mode,  **gs\_probackup**  fails to back up data when the archiving function is enabled.
    -   [I3SUD0](https://gitee.com/opengaussorg/dashboard?issue_id=I3SUD0)  When a cluster is scaled in to a standalone system,  **no**  is selected for restart, and then all nodes are scaled out, the database fails to be restarted. A message is displayed indicating that the standby node 1 is not in the cluster.
    -   [I3SXC0](https://gitee.com/opengaussorg/dashboard?issue_id=I3SXC0)  The online upgrade fails, and an error message is displayed indicating that the  **upgrade\_from**  parameter fails to be set using gs\_guc.
    -   [I3T1TX](https://gitee.com/opengaussorg/dashboard?issue_id=I3T1TX)  In a cluster deployed with one primary node and one standby node, the synchronization list is set to  **\***  and the synchronization mode is set to  **off**. The archiving function on the standby node fails, though it has been enabled.
    -   [I3T4MG](https://gitee.com/opengaussorg/dashboard?issue_id=I3T4MG)  How do I use the pg\_xlog archiving function on the standby node? Add the document description.
    -   [I3T6IC](https://gitee.com/opengaussorg/dashboard?issue_id=I3T6IC)  OM is installed with one primary node and three standby nodes. The pg\_xlog of the primary node starts from 0001, the pg\_xlog of standby nodes 1 and 3 start from 0003, and the pg\_xlog of standby node 2 starts from 0005. The pg\_xlog of the primary and standby nodes are inconsistent.
    -   [I3TDOA](https://gitee.com/opengaussorg/dashboard?issue_id=I3TDOA)  When  **archive\_command**  for enabling the archiving function on the standby node is set to an incorrect address, the generated .ready files are inconsecutive. After  **archive\_command**  is changed to a correct address, the added archives are still inconsecutive.
    -   [I3R7IZ](https://gitee.com/opengaussorg/dashboard?issue_id=I3R7IZ)  A core error may occur during log switchover because  **walsnd-\>mutex**  is repeatedly obtained.
    -   [I3P07C](https://gitee.com/opengaussorg/dashboard?issue_id=I3P07C)  Multiple nodes in the cluster are faulty, and gs\_dropnode cannot be executed properly.
    -   [I3J6MT](https://gitee.com/opengaussorg/dashboard?issue_id=I3J6MT)  The command for deleting a node fails to be executed, and an error is reported.
    -   [I3RK0C](https://gitee.com/opengaussorg/dashboard?issue_id=I3RK0C)  When RTO is enabled, the node deletion command fails to be executed and an error is reported.
    -   [I3QN9E](https://gitee.com/opengaussorg/dashboard?issue_id=I3QN9E)  Failed to manually run the online scaling command, and an error is reported.
    -   [I3QZUG](https://gitee.com/opengaussorg/dashboard?issue_id=I3QZUG)  When the primary node is stopped, the scaling command fails to be executed and a message is displayed indicating that the command is incomplete.
    -   [I3N0XQ](https://gitee.com/opengaussorg/dashboard?issue_id=I3N0XQ)  A copy fails to be added to GaussDB, and an error is reported.
    -   [I3S40U](https://gitee.com/opengaussorg/dashboard?issue_id=I3S40U)  The pg\_xlog of the standby node is not reclaimed.
    -   [I3R7VH](https://gitee.com/opengaussorg/dashboard?issue_id=I3R7VH)  When a large number of transactions are continuously executed, archiving on the standby node fails.

-   New functions:

    Enhanced the Xlog archiving on the standby node and intelligent index recommendation capabilities.


openGauss is a standalone database. To use openGauss in formal commercial projects, you need to build complete toolchain capabilities such as database monitoring and primary/standby switchover.

openGauss 2.0.0 is maintained every three years.

