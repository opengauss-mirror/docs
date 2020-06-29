# Recovery<a name="EN-US_TOPIC_0257867403"></a>

Database recovery, which is also sometimes called a Cold Start, includes MOT tables and is performed automatically with the recovery of the rest of the openGauss database.

The MOT Recovery Module provides all the required functionality for recovering the MOT tables data and is fully integrated into openGauss recovery process. The main objective of the Recovery module is to restore the data and the MOT engine to a consistent state after planned \(maintenance for example\) shut down or unplanned \(power failure for example\) crash.

MOT recovery has two main stages – Checkpoint recovery and WAL recovery \(Redo log\). While WAL recovery is done serially, the Checkpoint recovery can be configured to done in a multi-threaded parallel way. This is controlled by the  **checkpoint\_recovery\_workers**  parameter in the  **mot.conf**. 

