# oGRecorder SDK API Documentation

## Table of Contents

- [Initialization and Exit](#initialization-and-exit)
- [Instance Management](#instance-management)
- [Configuration Management](#configuration-management)
- [Connection and Timeout](#connection-and-timeout)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Version](#version)
- [VFS Management](#vfs-management)
- [File Operations](#file-operations)
- [Structures and Enumerations](#structures-and-enumerations)
- [Parameter Description](#parameter-description)

---

## Initialization and Exit

### gr_init

**Interface Description**
Initialize the SDK, including modules such as logging and timers. Must be called before any other API.

**Function Prototype**

```c
int gr_init(const gr_param_t param);
```

**Parameters**

- `param`: Type `gr_param_t`, initialization parameters (see [gr_param_t](#gr_param_t)).

**Return Value**
Returns `0` on success, or an error code on failure. Detailed information can be obtained via `gr_get_error`.

---

### gr_exit

**Interface Description**
Exit the SDK and release logging-related resources.

**Function Prototype**

```c
int gr_exit(void);
```

**Return Value**
Returns `0` on success, or an error code on failure.

---

## Instance Management

### gr_create_inst

**Interface Description**
Connect to the specified GR service and create an instance handle.

**Function Prototype**

```c
int gr_create_inst(const char *storageServerAddr, gr_instance_handle *inst_handle);
```

**Parameters**

- `storageServerAddr`: GR service address, in the format `IP:port` (e.g., `127.0.0.1:19225`). Must not be `NULL`.
- `inst_handle`: Output parameter, returns the instance handle.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_create_inst_only_primary

**Interface Description**
Automatically detect and connect to the **primary node** (the instance where `master_id == local_instance_id`) among multiple GR service addresses, and return the instance handle of the primary node. Applicable to clustered deployment scenarios.

**Function Prototype**

```c
int gr_create_inst_only_primary(const char *serverAddrs, gr_instance_handle *inst_handle);
```

**Parameters**

- `serverAddrs`: Multiple service addresses separated by commas, semicolons, or spaces (e.g., `192.168.1.1:19225,192.168.1.2:19225`).
- `inst_handle`: Output parameter, returns the primary node instance handle.

**Return Value**
Returns `0` on success; returns an error code if no primary node is found.

**Remarks**

- Internally, it will sequentially connect to each address and call `gr_get_inst_status` to determine the role, stopping detection once the primary node is found.
- A maximum of 8 addresses will be parsed.

---

### gr_delete_inst

**Interface Description**
Delete the instance handle and disconnect.

**Function Prototype**

```c
int gr_delete_inst(gr_instance_handle inst_handle);
```

**Parameters**

- `inst_handle`: The instance handle to delete.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_get_inst_status

**Interface Description**
Query the status and role information of the GR service instance.

**Function Prototype**

```c
int gr_get_inst_status(gr_instance_handle inst_handle,
                       int *instance_status_id,
                       int *server_status_id,
                       int *local_instance_id,
                       int *master_id);
```

**Parameters**

- `inst_handle`: Instance handle.
- `instance_status_id`: Output, instance status ID (see [gr_instance_status_e](#gr_instance_status_e)).
- `server_status_id`: Output, service read/write status ID (see [gr_rdgr_type_e](#gr_rdgr_type_e)).
- `local_instance_id`: Output, local node instance ID.
- `master_id`: Output, current primary node instance ID.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_get_disk_usage

**Interface Description**
Query disk usage on the GR service side.

**Function Prototype**

```c
int gr_get_disk_usage(gr_instance_handle inst_handle,
                      long long *total_bytes,
                      long long *used_bytes,
                      long long *available_bytes);
```

**Parameters**

- `inst_handle`: Instance handle.
- `total_bytes`: Output, total capacity in bytes.
- `used_bytes`: Output, used capacity in bytes.
- `available_bytes`: Output, available capacity in bytes.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_set_main_inst

**Interface Description**
Set the GR node corresponding to the specified address as the primary instance (a cluster management operation that requires appropriate privileges).

**Function Prototype**

```c
int gr_set_main_inst(const char *storageServerAddr);
```

**Parameters**

- `storageServerAddr`: Target GR service address, in the format `IP:port`.

**Return Value**
Returns `0` on success, or an error code on failure.

---

## Configuration Management

### gr_set_conf

**Interface Description**
Set a GR service configuration item (written to both memory and configuration file).

**Function Prototype**

```c
int gr_set_conf(gr_instance_handle inst_handle, const char *name, const char *value);
```

**Parameters**

- `inst_handle`: Instance handle.
- `name`: Configuration item name. Currently supported:
  - `LOG_LEVEL`
  - `LOG_MAX_FILE_SIZE`
  - `LOG_FILE_COUNT`
  - `GR_NODES_LIST`
  - `IP_WHITE_LIST`
- `value`: Configuration item value (string).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_get_conf

**Interface Description**
Get the content of a GR service configuration item.

**Function Prototype**

```c
int gr_get_conf(gr_instance_handle inst_handle, const char *name, char *value);
```

**Parameters**

- `inst_handle`: Instance handle.
- `name`: Configuration item name (string).
- `value`: Output buffer to store the configuration value (must be pre-allocated with sufficient memory).

**Return Value**
Returns `0` on success, or an error code on failure.

---

## Connection and Timeout

### gr_set_default_conn_timeout

**Interface Description**
Set the global default connection timeout (affects subsequent newly established connections).

**Function Prototype**

```c
void gr_set_default_conn_timeout(int timeout);
```

**Parameters**

- `timeout`: Timeout duration in seconds. `<= 0` means never time out (`GR_CONN_NEVER_TIMEOUT`, i.e., `-1`).

---

### gr_set_conn_timeout

**Interface Description**
Set the global TCP connection timeout for the current process.

**Function Prototype**

```c
int gr_set_conn_timeout(int timeout);
```

**Parameters**

- `timeout`: Timeout duration in seconds. `<= 0` means never time out.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_set_conn_opts

**Interface Description**
Set connection options per thread/address dimension (must be called in the corresponding thread before establishing a connection).

**Function Prototype**

```c
int gr_set_conn_opts(gr_conn_opt_key_e key, void *value, const char *addr);
```

**Parameters**

- `key`: Option key. Currently supports `GR_CONN_OPT_TIME_OUT` (value `0`).
- `value`: Pointer to the option value; for timeout, pass an `int32_t *` pointing to the number of seconds.
- `addr`: GR service address, used to bind thread-local connection parameters.

**Return Value**
Returns `0` on success, or an error code on failure.

---

## Error Handling

### gr_get_error

**Interface Description**
Get the error code and description of the most recent API call.

**Function Prototype**

```c
int gr_get_error(int *errcode, const char **errmsg);
```

**Parameters**

- `errcode`: Output parameter, returns the error code.
- `errmsg`: Output parameter, returns a pointer to the error description string (maintained internally by the SDK; the caller must not free it).

**Return Value**
Returns `0` on success.

---

## Logging

### gr_register_log_callback

**Interface Description**
Register a custom log output callback, allowing the application to take over GR log printing.

**Function Prototype**

```c
void gr_register_log_callback(gr_log_output cb_log_output, unsigned int log_level);
```

**Parameters**

- `cb_log_output`: Log callback function (see [gr_log_output](#gr_log_output)).
- `log_level`: Log level mask.

---

### gr_set_log_level

**Interface Description**
Set the SDK log level.

**Function Prototype**

```c
void gr_set_log_level(unsigned int log_level);
```

**Parameters**

- `log_level`: Log level (same semantics as the `log_level` in `gr_init`).

---

### gr_refresh_logger

**Interface Description**
Refresh logging-related parameters at runtime without needing to re-initialize via `gr_init`.

**Function Prototype**

```c
void gr_refresh_logger(char *log_field, unsigned long long *value);
```

**Parameters**

- `log_field`: Field name. Supported values: `LOG_LEVEL`, `LOG_MAX_FILE_SIZE`, `LOG_FILE_COUNT`.
- `value`: Pointer to the new value.

---

## Version

### gr_get_lib_version

**Interface Description**
Get the numeric version number of the SDK library (for version comparison).

**Function Prototype**

```c
int gr_get_lib_version(void);
```

**Return Value**
Returns the encoded version integer.

---

### gr_show_version

**Interface Description**
Write the SDK version string into the caller-provided buffer.

**Function Prototype**

```c
void gr_show_version(char *version);
```

**Parameters**

- `version`: Output buffer. Recommended length not less than `GR_VERSION_MAX_LEN` (256).

---

## VFS Management

### gr_vfs_create

**Interface Description**
Create a VFS.

**Function Prototype**

```c
int gr_vfs_create(gr_instance_handle inst_handle, const char *vfs_name, unsigned long long attrFlag);
```

**Parameters**

- `inst_handle`: Instance handle.
- `vfs_name`: VFS name.
- `attrFlag`: Attribute flag (fixed to `0` in the current version).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_delete

**Interface Description**
Delete a VFS.

**Function Prototype**

```c
int gr_vfs_delete(gr_instance_handle inst_handle, const char *vfs_name, unsigned long long attrFlag);
```

**Parameters**

- `inst_handle`: Instance handle.
- `vfs_name`: VFS name.
- `attrFlag`: Attribute flag (fixed to `0` in the current version).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_mount

**Interface Description**
Mount a VFS and obtain a handle.

**Function Prototype**

```c
int gr_vfs_mount(gr_instance_handle inst_handle, const char *vfs_name, gr_vfs_handle *vfs_handle);
```

**Parameters**

- `inst_handle`: Instance handle.
- `vfs_name`: VFS name.
- `vfs_handle`: Output parameter, returns the VFS handle.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_unmount

**Interface Description**
Unmount a VFS.

**Function Prototype**

```c
int gr_vfs_unmount(gr_vfs_handle *vfs_handle);
```

**Parameters**

- `vfs_handle`: The VFS handle to unmount.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_exist

**Interface Description**
Check whether a VFS (directory) with the specified name exists.

**Function Prototype**

```c
int gr_vfs_exist(gr_instance_handle inst_handle, const char *vfs_name, bool *is_exist);
```

**Parameters**

- `inst_handle`: Instance handle.
- `vfs_name`: VFS name.
- `is_exist`: Output, `true` if it exists and is of directory type.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_query_file_num

**Interface Description**
Query the number of regular files within a mounted VFS.

**Function Prototype**

```c
int gr_vfs_query_file_num(gr_vfs_handle vfs_handle, int *file_num);
```

**Parameters**

- `vfs_handle`: VFS handle (must have been `gr_vfs_mount`ed).
- `file_num`: Output, number of files.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_vfs_query_file_info

**Interface Description**
List file names within a VFS by pagination. The server sorts all files in the directory lexicographically and returns them by page; multiple calls can piece together a complete ordered list.

**Function Prototype**

```c
int gr_vfs_query_file_info(gr_vfs_handle vfs_handle, gr_file_item_t *result, bool is_continue);
```

**Parameters**

- `vfs_handle`: VFS handle (must have been `gr_vfs_mount`ed).
- `result`: Output array with a length of at least **100** (consistent with the server-side `GR_MAX_FILE_NUM`), element type `gr_file_item_t`.
- `is_continue`: Whether to continue paging. Pass `false` on the first call; pass `true` on subsequent calls until no valid file names are returned in the current batch.

**Return Value**
Returns `0` on success, or an error code on failure.

**Remarks**

- Each batch returns at most 100 file names; `result[i].name[0] == '\0'` indicates the end of the current batch.
- When a call returns no file names, enumeration ends.
- File names are relative names within the VFS (without the `vfs_name/` prefix).

**Example (pseudo-code)**

```c
gr_file_item_t batch[100];
bool cont = false;
for (;;) {
    memset(batch, 0, sizeof(batch));
    if (gr_vfs_query_file_info(vfs, batch, cont) != 0) { /* error handling */ }
    int n = 0;
    for (int i = 0; i < 100 && batch[i].name[0] != '\0'; i++) {
        /* use batch[i].name */
        n++;
    }
    if (n == 0) break;
    cont = true;
}
```

---

## File Operations

### gr_file_create

**Interface Description**
Create a file within a VFS.

**Function Prototype**

```c
int gr_file_create(gr_vfs_handle vfs_handle, const char *name, const FileParameter *param);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `name`: File name (relative path within the VFS, without the `vfs_name/` prefix).
- `param`: File parameters (can be `NULL` in the current version).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_file_delete

**Interface Description**
Delete a file.

**Function Prototype**

```c
int gr_file_delete(gr_vfs_handle vfs_handle, const char *name, unsigned long long attrFlag);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `name`: File name.
- `attrFlag`: `0` for normal deletion; `1` for forced deletion (under WORM scenarios, this may change permissions before deletion).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_file_exist

**Interface Description**
Check whether a specified file exists within a VFS.

**Function Prototype**

```c
int gr_file_exist(gr_vfs_handle vfs_handle, const char *name, bool *is_exist);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `name`: File name.
- `is_exist`: Output, whether the file exists.

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_file_open

**Interface Description**
Open a file and obtain a handle.

**Function Prototype**

```c
int gr_file_open(gr_vfs_handle vfs_handle, const char *name, int flag, gr_file_handle *file_handle);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `name`: File name.
- `flag`: Open flags. Commonly used:
  - `O_RDONLY`: Read-only.
  - `O_WRONLY`: Write-only.
  - `O_RDWR`: Read-write.
  - `O_EXCL`: When used together with `O_CREAT`, fails if the file already exists.
  - `O_APPEND`: Append mode (it is recommended to use `gr_file_append` for append writes at the server implementation level).
  - `O_NONBLOCK`: Non-blocking.
  - `O_SYNC`: Synchronous IO (the SDK will combine this with `O_SYNC` when opening).
- `file_handle`: Output, file handle.

**Return Value**
Returns `0` on success, or an error code on failure.

**Remarks**

- Creating files via `O_CREAT` during `open` is prohibited; use `gr_file_create` instead.
- The WORM file system does not support `O_TRUNC`.

---

### gr_file_close

**Interface Description**
Close the file handle; before closing, the logical file size will be flushed into metadata.

**Function Prototype**

```c
int gr_file_close(gr_vfs_handle vfs_handle, gr_file_handle *file_handle, bool need_lock);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `file_handle`: File handle.
- `need_lock`: `true` means the file enters a locked state after closing; `false` means it does not enter a locked state (Dorado WORM: initial state, locked state, append state, expired state).

**Return Value**
Returns `0` on success, or an error code on failure.

---

### gr_file_pread

**Interface Description**
Read synchronously at a specified offset.

**Function Prototype**

```c
long long int gr_file_pread(gr_vfs_handle vfs_handle, gr_file_handle file_handle,
                            void *buf, unsigned long long count, long long offset);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `file_handle`: File handle (passed by value).
- `buf`: Read buffer.
- `count`: Number of bytes to read.
- `offset`: Starting offset in bytes.

**Return Value**
Returns the actual number of bytes read on success; returns a negative error code on failure.

---

### gr_file_pwrite

**Interface Description**
Write synchronously at a specified offset.

**Function Prototype**

```c
long long int gr_file_pwrite(gr_vfs_handle vfs_handle, gr_file_handle *file_handle,
                             const void *buf, unsigned long long count, long long offset);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `file_handle`: Pointer to the file handle.
- `buf`: Write buffer.
- `count`: Number of bytes to write.
- `offset`: Starting offset in bytes.

**Return Value**
Returns the actual number of bytes written on success; returns a negative error code on failure.

---

### gr_file_append

**Interface Description**
Append data at the logical end of the file (internally obtains the EOF first and then performs a `pwrite`).

**Function Prototype**

```c
long long int gr_file_append(gr_vfs_handle vfs_handle, gr_file_handle *file_handle,
                             const void *buf, unsigned long long count);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `file_handle`: Pointer to the file handle.
- `buf`: Write buffer.
- `count`: Number of bytes to write.

**Return Value**
Returns the actual number of bytes written on success; returns a negative error code on failure.

---

### gr_file_stat

**Interface Description**
Query the logical size, status, and expiration time of a file (no need to keep the file open).

**Function Prototype**

```c
int gr_file_stat(gr_vfs_handle vfs_handle, const char *fileName,
                 long long *offset, unsigned long long *count, int *mode, char **time);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `fileName`: File name (relative name within the VFS).
- `offset`: Output, logically written offset / logical EOF (consistent with `count`).
- `count`: Output, logical file size in bytes.
- `mode`: Output, file status: `0` initial state, `1` locked state, `2` append state, `3` expired state.
- `time`: Output, pointer to the expiration time string (allocated by the SDK; the caller must not free it).

**Return Value**
Returns `0` on success, or an error code on failure.

**Remarks**

- The returned `count`/`offset` is the **logical size**, which may differ from the physical disk size (due to O_DIRECT alignment).
- After closing the file and unmounting the VFS, calling `stat` again relies on the `.gr_vfs_meta` persistent record; please ensure that `gr_file_close` succeeds.

---

### gr_file_postpone

**Interface Description**
Extend the file expiration time.

**Function Prototype**

```c
int gr_file_postpone(gr_vfs_handle vfs_handle, const char *file, const char *time);
```

**Parameters**

- `vfs_handle`: VFS handle.
- `file`: File name.
- `time`: New expiration time, in the format `%Y-%m-%d %H:%M:%S`, must be later than the current expiration time.

**Return Value**
Returns `0` on success, or an error code on failure.

---

## Structures and Enumerations

### gr_param_t

SDK initialization parameters.

```c
typedef struct st_gr_param {
    char log_home[PATH_MAX];                // Log directory
    unsigned int log_level;                 // Log level (7: runtime, 255: debug, <=0: disabled)
    unsigned int log_backup_file_count;     // Number of log backup files
    unsigned long long log_max_file_size;   // Maximum size of a single log file in bytes
} gr_param_t;
```

---

### gr_vfs_handle

VFS handle, populated by `gr_vfs_mount`.

```c
typedef struct gr_vfs_handle {
    gr_instance_handle handle;
    unsigned long long dir_handle;
    char vfs_name[GR_MAX_NAME_LEN];
} gr_vfs_handle;
```

---

### gr_file_handle

File handle, populated by `gr_file_open`.

```c
typedef struct st_gr_file_handle {
    int fd;
    char file_name[GR_MAX_NAME_LEN];
    unsigned char hash[SHA256_DIGEST_LENGTH_H];
} gr_file_handle;
```

---

### gr_file_item_t

Directory listing result item.

```c
typedef struct st_gr_file_item {
    char name[GR_MAX_NAME_LEN];
} gr_file_item_t;
```

---

### FileParameter

Extended parameters for file creation (can be `NULL` in the current version).

```c
typedef struct FileParameter {
    unsigned long long attrFlag;
    unsigned long long fileSize;
    unsigned long long blockSize;
    unsigned long long maxFileSize;
    unsigned long long maxOpenFiles;
    unsigned long long maxOpenFilesPerInstance;
} FileParameter;
```

---

### gr_instance_status_e

Instance status (the `instance_status_id` from `gr_get_inst_status`).

| Value | Enum Name          | Description |
|-------|--------------------|-------------|
| 0     | `GR_STATUS_PREPARE`  | Prepare     |
| 1     | `GR_STATUS_RECOVERY` | Recovery    |
| 2     | `GR_STATUS_SWITCH`   | Switch      |
| 3     | `GR_STATUS_OPEN`     | Open        |

---

### gr_rdgr_type_e

Service read/write status (the `server_status_id` from `gr_get_inst_status`).

| Value | Enum Name           | Description |
|-------|---------------------|-------------|
| 0     | `GR_STATUS_NORMAL`    | Normal      |
| 1     | `GR_STATUS_READONLY`  | Read-only   |
| 2     | `GR_STATUS_READWRITE` | Read-write  |

---

### gr_log_output

Log callback type.

```c
typedef void (*gr_log_output)(gr_log_id_t log_type, gr_log_level_t log_level,
    const char *code_file_name, unsigned int code_line_num,
    const char *module_name, const char *format, ...);
```

---

### gr_conn_opt_key_e

Connection option key.

```c
typedef enum en_gr_conn_opt_key {
    GR_CONN_OPT_TIME_OUT = 0,
} gr_conn_opt_key_e;
```

---

## Parameter Description

### attrFlag

- In `gr_vfs_create` and `gr_vfs_delete`, it is fixed to `0` in the current version.
- In `gr_file_delete`, `0` means normal deletion, and `1` means forced deletion.

### Connection Timeout

- `GR_CONN_NEVER_TIMEOUT` is defined as `-1`, meaning never time out.
- In `gr_set_default_conn_timeout` and `gr_set_conn_timeout`, `timeout <= 0` is treated as never timing out.

### gr_file_truncate

The publicly released `gr_api.h` does **not** export `gr_file_truncate`; if truncation capability is needed, please refer to the version description or a subsequent SDK release.
