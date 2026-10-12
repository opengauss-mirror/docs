# oGRecorder Primary-Standby Parameter Synchronization

## Feature Description<a name="section16406154310471"></a>

This feature supports parameter synchronization based on the primary node through three methods: `grcmd setcfg`, API calls, and configuration file modification. It is not recommended to set synchronization parameters via the standby node.

The synchronized parameters are managed by the `gr_inst.ini` file and include: `MAX_SESSION_NUMS`, `RECV_MSG_POOL_SIZE`, `IP_WHITE_LIST`, `LOG_COMPRESSED`, `DATA_FILE_PATH`, `LOG_LEVEL`, and `GR_NODES_LIST`.

- When `grcmd setcfg` or API calls modify **immediate-effect** parameters, they are immediately loaded into memory and synchronized.
- When **restart-required** parameters are modified, only the configuration file is synchronized; a cluster restart is required for them to take effect.
- For configuration file modifications, there are two cases:
  1. Manually trigger synchronization using `grcmd reload`.
  2. A periodic task with a **10-minute cycle** automatically enters the synchronization flow.

## Feature Constraints<a name="section06531946143616"></a>

- The following parameters are classified as **reserved parameters** and are **not synchronized**: `LOG_HOME`, `LOG_FILE_COUNT`, `INST_ID`, `LISTEN_ADDR`, and all `SSL`-related parameters.
- This feature depends on the `gr_inst.ini` file and **worm storage**.
- When loading configuration files, the parameter type loading rules must be followed: restart-required parameters only take effect after the node is restarted.
- `grcmd setcfg` supports three setting modes — `memory` (memory only), `pfile` (file only), and `both` (memory + file) — and the parameter synchronization feature adapts to all three:
  - If set via `memory` mode, the standby node's memory takes effect but the file does not.
  - If set via `pfile` mode, the standby node's file takes effect but memory does not.
  - If set via `both` mode, the standby node's parameter takes effect in both file and memory.
  - All parameter synchronization is based on the corresponding mode. For example: if the primary node uses `grcmd setcfg` to set the log level to `255` (memory) and `254` (file), the standby node will synchronize this configuration, maintaining the consistent state of `255` in memory and `254` in file.
  - Setting synchronization parameters via `grcmd setcfg pfile/memory` can cause memory-file inconsistency. If a periodic sync is triggered, immediate-effect parameters in the file will be loaded into memory. Therefore, **this method is not recommended** for modifying parameters.
- If a **failover** or **switchover** (primary change) occurs during the synchronization process, the latest parameters can be synchronized in most cases. However, in some extreme scenarios, the user must reconfigure the latest parameters on the new primary node — for example, if the primary node exits abnormally while maintaining the shared configuration file, the shared configuration file content cannot be updated.
- Manual modification of synchronized parameters in the configuration file is **not recommended**. If modified on the primary node, you must execute `grcmd reload` to manually trigger synchronization and ensure the changes are propagated to the standby node. **Modifying synchronized parameters on the standby node is strictly prohibited**, as such operations cannot trigger the synchronization mechanism and will cause parameter inconsistency after a primary-standby restart.

## Basic Principles<a name="section8406461564716"></a>

A shared configuration file is maintained in **worm shared storage**, written by the primary node and **not modifiable** by standby nodes.

After writing to the shared configuration file, the primary node **broadcasts a synchronization message** to all standby nodes. Upon receiving the message, each standby node reads the shared configuration file, updates its local configuration file, and reloads it.

After a primary-standby switchover, the new primary node first updates its local configuration file with the content from the shared configuration file, and then initiates subsequent synchronization flows as the primary.

## Usage Guidelines<a name="section8445461564354"></a>

The system periodically synchronizes the primary node's configuration to standby nodes on a **10-minute cycle**. Users can also trigger synchronization through the following operations:

- **Start the cluster using `cm_ctl start`** — this synchronizes the parameters in the file but does not synchronize the in-memory state of restart-required parameters.
- **Modify configuration parameters using `grcmd setcfg` or the API** on the primary node.
- **Perform a switchover or failover** to trigger a primary change. In this case, the new primary node overwrites its local configuration file with the shared storage configuration file, and then the standby nodes do the same.
- **Add a standby node to the cluster** — the new standby node overwrites its local configuration file with the shared storage configuration file.
- **After manually modifying the primary node's configuration file**, execute the `grcmd reload` command to trigger synchronization.
