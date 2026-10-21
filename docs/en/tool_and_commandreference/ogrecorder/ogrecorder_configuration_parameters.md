---
description: This document describes oGRecorder Configuration Parameters in openGauss, covering topics such as Configuration Parameters Overview, Field Descriptions.
keywords: [openGauss, oGRecorder Configuration Parameters, tools and commands, Configuration Parameters Overview, Field Descriptions]
---

# oGRecorder Configuration Parameters

## Configuration Parameters Overview

| Parameter | Default Value | Type | Attribute | Value Range / Options | Sync Status | Effective Mode | Description |
|---------------------------------|-----------------------|---------------------|---------------|-------------------------|------------------|------------------|-------------------------------|
| `LOG_HOME` | Empty | `GS_TYPE_VARCHAR` | Read-only | - | Reserved | Restart Required | Log file storage path |
| `LOG_FILE_COUNT` | `20` | `GS_TYPE_INTEGER` | None | `[0,128]` | Reserved | Immediate | Maximum number of log backup files |
| `INST_ID` | `0` | `GS_TYPE_INTEGER` | Read-only | `[0,64)` | Reserved | Restart Required | Instance ID |
| `LOG_LEVEL` | `255` | `GS_TYPE_INTEGER` | None | `[0,16375]` | Synchronized | Immediate | Log level |
| `MAX_SESSION_NUMS` | `8192` | `GS_TYPE_INTEGER` | Read-only | `[16,16320]` | Synchronized | Restart Required | Maximum number of sessions |
| `GR_NODES_LIST` | `0:127.0.0.1:1611` | `GS_TYPE_VARCHAR` | None | - | Synchronized | Immediate | oGRecorder node list |
| `RECV_MSG_POOL_SIZE` | `48M` | `GS_TYPE_INTEGER` | Read-only | `[9M,1G]` | Synchronized | Restart Required | Receive message pool size |
| `IP_WHITE_LIST` | `TRUE` | `GS_TYPE_BOOLEAN` | Read-only | `FALSE,TRUE` | Synchronized | Restart Required | IP White List switch |
| `LOG_COMPRESSED` | `FALSE` | `GS_TYPE_BOOLEAN` | Read-only | `[FALSE,TRUE]` | Synchronized | Restart Required | Log compression switch |
| `LISTEN_ADDR` | `127.0.0.1:1622` | `GS_TYPE_VARCHAR` | Read-only | - | Reserved | Restart Required | Listen address and port |
| `DATA_FILE_PATH` | `/tmp` | `GS_TYPE_VARCHAR` | Read-only | - | Synchronized | Restart Required | Data file storage path |

---

## Field Descriptions

1. **Attribute**
   - `Read-only`: The parameter cannot be modified dynamically and requires a restart to take effect.
   - `None`: The parameter can be modified dynamically.

2. **Effective Mode**
   - `Immediate`: No service restart is required after modification.
   - `Restart Required`: The service must be restarted for the configuration to take effect.

3. **Sync Status**
   - `Reserved`: Each node retains its own parameter value.
   - `Synchronized`: The parameter supports synchronized configuration across nodes.

4. **Value Range**
   - Numeric parameters use the `[min,max]` format (e.g., `[1,180]`).
   - String-type parameters use `-` to indicate no restriction.
