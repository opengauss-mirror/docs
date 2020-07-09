# Configuring Logging<a name="EN-US_TOPIC_0260488104"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported by the standard openGauss disk engine.

The determination of whether synchronous or asynchronous transaction logging is performed is configured in the  **synchronous\_commit \(On = Synchronous\)**  parameters in the  **postgres.conf**  configuration file.

Set the  **enable\_redo\_log**  parameter to  **True**  in the REDO LOG section of the  **mot.conf **configuration file.

If a synchronous mode of transaction logging has been selected \(**synchronous\_commit**  =  **On**, as described above\), then the  **enable\_group\_commit**  parameter in the mot.conf configuration file determines whether the  **Group Synchronous Redo Logging**  option or the  **Synchronous Redo Logging**  option is used. For  **Group Synchronous Redo Logging**, you must also define in the  **mot.conf**  file which of the following thresholds determine when a group of transactions is recorded in the WAL

-   **group\_commit\_size** ** **The quantity of committed transactions in a group. For example,  **16**  means that when 16 transactions in the same group have been committed by a client application, then an entry is written to disk in the WAL Redo Log for all 16 transactions.
-   **group\_commit\_timeout  **A timeout period in ms. For example,  **10**  means that after 10 ms, an entry is written to disk in the WAL Redo Log for each of the transactions in the same group that have been committed by their client application in the last 10 ms.

You may refer to ++ for more information.

