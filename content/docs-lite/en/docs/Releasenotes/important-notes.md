# Important Notes<a name="EN-US_TOPIC_0289899192"></a>

-   For details about technical specifications, see section "Technical Specifications" in  _Technical White Paper_.
-   Currently, openGauss supports a maximum of eight standby nodes. The lite edition does not have CM management. If one primary node and multiple standby nodes are used and the primary node is faulty, promote a standby node with more logs to primary, preventing other standby nodes from being rebuilt.
-   You are advised to deploy one primary node and two standby nodes to ensure database reliability and availability.

