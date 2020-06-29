# HA Transaction Processing<a name="EN-US_TOPIC_0241663029"></a>

openGauss manages transactions and guarantees the ACID properties.

openGauss provides a primary/standby HA mechanism to reduce the service interruption time when the primary node is faulty. It protects key user programs to continuously provide external services, minimizing the impact of hardware, software, and human faults on services, thereby ensuring service continuity.

**Fault rectification**

Node faults can be rectified and the ACID properties still exist after the rectification. openGauss ensures zero data loss after a node is recovered from a fault or restarted.

**Transaction management**

-   Supports transaction blocks. The  **start transaction**  command can be used to start a transaction block explicitly.
-   Supports single-statement transactions. If explicit startup is not performed, a single statement is processed as a transaction.

