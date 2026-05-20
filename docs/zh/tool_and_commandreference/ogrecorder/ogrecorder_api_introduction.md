# oGRecorder SDK API 文档

## 目录

- [初始化与退出](#初始化与退出)
- [实例管理](#实例管理)
- [配置管理](#配置管理)
- [连接与超时](#连接与超时)
- [错误处理](#错误处理)
- [日志](#日志)
- [版本](#版本)
- [VFS 管理](#vfs-管理)
- [文件操作](#文件操作)
- [结构体与枚举](#结构体与枚举)
- [参数说明](#参数说明)

---

## 初始化与退出

### gr_init

**接口描述**  
初始化 SDK，包括日志与定时器等模块。须在调用其他 API 之前执行。

**函数原型**

```c
int gr_init(const gr_param_t param);
```

**参数**

- `param`：`gr_param_t` 类型，初始化参数（见 [gr_param_t](#gr_param_t)）。

**返回值**  
成功返回 `0`，失败返回错误码。可通过 `gr_get_error` 获取详细信息。

---

### gr_exit

**接口描述**  
退出 SDK，释放日志相关资源。

**函数原型**

```c
int gr_exit(void);
```

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 实例管理

### gr_create_inst

**接口描述**  
连接指定 GR 服务并创建实例句柄。

**函数原型**

```c
int gr_create_inst(const char *storageServerAddr, gr_instance_handle *inst_handle);
```

**参数**

- `storageServerAddr`：GR 服务地址，格式为 `IP:端口`（例如 `127.0.0.1:19225`），不可为 `NULL`。
- `inst_handle`：输出参数，返回实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_create_inst_only_primary

**接口描述**  
在多个 GR 服务地址中自动探测并连接**主节点**（`master_id == local_instance_id` 的实例），返回主节点对应的实例句柄。适用于集群部署场景。

**函数原型**

```c
int gr_create_inst_only_primary(const char *serverAddrs, gr_instance_handle *inst_handle);
```

**参数**

- `serverAddrs`：多个服务地址，使用逗号、分号或空格分隔（例如 `192.168.1.1:19225,192.168.1.2:19225`）。
- `inst_handle`：输出参数，返回主节点实例句柄。

**返回值**  
成功返回 `0`；若未找到主节点返回错误码。

**备注**

- 内部会依次连接各地址并调用 `gr_get_inst_status` 判断角色，找到主节点后停止探测。
- 最多解析 8 个地址。

---

### gr_delete_inst

**接口描述**  
删除实例句柄并断开连接。

**函数原型**

```c
int gr_delete_inst(gr_instance_handle inst_handle);
```

**参数**

- `inst_handle`：要删除的实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_get_inst_status

**接口描述**  
查询 GR 服务实例状态与角色信息。

**函数原型**

```c
int gr_get_inst_status(gr_instance_handle inst_handle,
                       int *instance_status_id,
                       int *server_status_id,
                       int *local_instance_id,
                       int *master_id);
```

**参数**

- `inst_handle`：实例句柄。
- `instance_status_id`：输出，实例状态 ID（见 [gr_instance_status_e](#gr_instance_status_e)）。
- `server_status_id`：输出，服务读写状态 ID（见 [gr_rdgr_type_e](#gr_rdgr_type_e)）。
- `local_instance_id`：输出，本节点实例 ID。
- `master_id`：输出，当前主节点实例 ID。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_get_disk_usage

**接口描述**  
查询 GR 服务侧磁盘使用情况。

**函数原型**

```c
int gr_get_disk_usage(gr_instance_handle inst_handle,
                      long long *total_bytes,
                      long long *used_bytes,
                      long long *available_bytes);
```

**参数**

- `inst_handle`：实例句柄。
- `total_bytes`：输出，总容量（字节）。
- `used_bytes`：输出，已用容量（字节）。
- `available_bytes`：输出，可用容量（字节）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_set_main_inst

**接口描述**  
将指定地址对应的 GR 节点设置为主实例（集群管理操作，需具备相应权限）。

**函数原型**

```c
int gr_set_main_inst(const char *storageServerAddr);
```

**参数**

- `storageServerAddr`：目标 GR 服务地址，格式为 `IP:端口`。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 配置管理

### gr_set_conf

**接口描述**  
设置 GR 服务配置项（同时写入内存与配置文件）。

**函数原型**

```c
int gr_set_conf(gr_instance_handle inst_handle, const char *name, const char *value);
```

**参数**

- `inst_handle`：实例句柄。
- `name`：配置项名称，当前支持：
  - `LOG_LEVEL`
  - `LOG_MAX_FILE_SIZE`
  - `LOG_FILE_COUNT`
  - `GR_NODES_LIST`
  - `IP_WHITE_LIST`
- `value`：配置项值（字符串）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_get_conf

**接口描述**  
获取 GR 服务配置项内容。

**函数原型**

```c
int gr_get_conf(gr_instance_handle inst_handle, const char *name, char *value);
```

**参数**

- `inst_handle`：实例句柄。
- `name`：配置项名称（字符串）。
- `value`：输出缓冲区，用于存放配置值（需预先分配足够内存）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 连接与超时

### gr_set_default_conn_timeout

**接口描述**  
设置全局默认连接超时时间（影响后续新建连接）。

**函数原型**

```c
void gr_set_default_conn_timeout(int timeout);
```

**参数**

- `timeout`：超时时间（秒）。`<= 0` 表示永不超时（`GR_CONN_NEVER_TIMEOUT`，即 `-1`）。

---

### gr_set_conn_timeout

**接口描述**  
设置当前进程全局 TCP 连接超时时间。

**函数原型**

```c
int gr_set_conn_timeout(int timeout);
```

**参数**

- `timeout`：超时时间（秒）。`<= 0` 表示永不超时。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_set_conn_opts

**接口描述**  
按线程/地址维度设置连接选项（需在对应线程、建立连接前调用）。

**函数原型**

```c
int gr_set_conn_opts(gr_conn_opt_key_e key, void *value, const char *addr);
```

**参数**

- `key`：选项键，当前支持 `GR_CONN_OPT_TIME_OUT`（值为 `0`）。
- `value`：选项值指针；超时场景下传入 `int32_t *` 指向秒数。
- `addr`：GR 服务地址，用于绑定线程局部连接参数。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 错误处理

### gr_get_error

**接口描述**  
获取最近一次 API 调用的错误码与错误描述。

**函数原型**

```c
int gr_get_error(int *errcode, const char **errmsg);
```

**参数**

- `errcode`：输出参数，返回错误码。
- `errmsg`：输出参数，返回错误描述字符串指针（由 SDK 内部维护，调用方勿释放）。

**返回值**  
成功返回 `0`。

---

## 日志

### gr_register_log_callback

**接口描述**  
注册自定义日志输出回调，由应用接管 GR 日志打印。

**函数原型**

```c
void gr_register_log_callback(gr_log_output cb_log_output, unsigned int log_level);
```

**参数**

- `cb_log_output`：日志回调函数（见 [gr_log_output](#gr_log_output)）。
- `log_level`：日志级别掩码。

---

### gr_set_log_level

**接口描述**  
设置 SDK 日志级别。

**函数原型**

```c
void gr_set_log_level(unsigned int log_level);
```

**参数**

- `log_level`：日志级别（与 `gr_init` 中 `log_level` 语义一致）。

---

### gr_refresh_logger

**接口描述**  
运行时刷新日志相关参数（无需重新 `gr_init`）。

**函数原型**

```c
void gr_refresh_logger(char *log_field, unsigned long long *value);
```

**参数**

- `log_field`：字段名，支持 `LOG_LEVEL`、`LOG_MAX_FILE_SIZE`、`LOG_FILE_COUNT`。
- `value`：新值指针。

---

## 版本

### gr_get_lib_version

**接口描述**  
获取 SDK 库数值版本号（用于版本比较）。

**函数原型**

```c
int gr_get_lib_version(void);
```

**返回值**  
返回编码后的版本整数。

---

### gr_show_version

**接口描述**  
将 SDK 版本字符串写入调用方缓冲区。

**函数原型**

```c
void gr_show_version(char *version);
```

**参数**

- `version`：输出缓冲区，长度建议不小于 `GR_VERSION_MAX_LEN`（256）。

---

## VFS 管理

### gr_vfs_create

**接口描述**  
创建 VFS。

**函数原型**

```c
int gr_vfs_create(gr_instance_handle inst_handle, const char *vfs_name, unsigned long long attrFlag);
```

**参数**

- `inst_handle`：实例句柄。
- `vfs_name`：VFS 名称。
- `attrFlag`：属性标志（当前版本固定为 `0`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_delete

**接口描述**  
删除 VFS。

**函数原型**

```c
int gr_vfs_delete(gr_instance_handle inst_handle, const char *vfs_name, unsigned long long attrFlag);
```

**参数**

- `inst_handle`：实例句柄。
- `vfs_name`：VFS 名称。
- `attrFlag`：属性标志（当前版本固定为 `0`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_mount

**接口描述**  
挂载 VFS 并获取句柄。

**函数原型**

```c
int gr_vfs_mount(gr_instance_handle inst_handle, const char *vfs_name, gr_vfs_handle *vfs_handle);
```

**参数**

- `inst_handle`：实例句柄。
- `vfs_name`：VFS 名称。
- `vfs_handle`：输出参数，返回 VFS 句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_unmount

**接口描述**  
卸载 VFS。

**函数原型**

```c
int gr_vfs_unmount(gr_vfs_handle *vfs_handle);
```

**参数**

- `vfs_handle`：要卸载的 VFS 句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_exist

**接口描述**  
判断指定名称的 VFS（目录）是否存在。

**函数原型**

```c
int gr_vfs_exist(gr_instance_handle inst_handle, const char *vfs_name, bool *is_exist);
```

**参数**

- `inst_handle`：实例句柄。
- `vfs_name`：VFS 名称。
- `is_exist`：输出，`true` 表示存在且类型为目录。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_query_file_num

**接口描述**  
查询已挂载 VFS 内普通文件数量。

**函数原型**

```c
int gr_vfs_query_file_num(gr_vfs_handle vfs_handle, int *file_num);
```

**参数**

- `vfs_handle`：VFS 句柄（须已 `gr_vfs_mount`）。
- `file_num`：输出，文件数量。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_vfs_query_file_info

**接口描述**  
分页列举 VFS 内文件名。服务端对**全目录文件**按字典序排序后分页返回；多次调用可拼出完整有序列表。

**函数原型**

```c
int gr_vfs_query_file_info(gr_vfs_handle vfs_handle, gr_file_item_t *result, bool is_continue);
```

**参数**

- `vfs_handle`：VFS 句柄（须已 `gr_vfs_mount`）。
- `result`：输出数组，长度至少 **100**（与服务端 `GR_MAX_FILE_NUM` 一致），元素类型为 `gr_file_item_t`。
- `is_continue`：是否续页。首次调用传 `false`；后续传 `true`，直到本批无有效文件名。

**返回值**  
成功返回 `0`，失败返回错误码。

**备注**

- 每批最多返回 100 个文件名；`result[i].name[0] == '\0'` 表示本批结束。
- 当某次调用未返回任何文件名时，列举结束。
- 文件名仅为 VFS 内相对名（不含 `vfs_name/` 前缀）。

**示例（伪代码）**

```c
gr_file_item_t batch[100];
bool cont = false;
for (;;) {
    memset(batch, 0, sizeof(batch));
    if (gr_vfs_query_file_info(vfs, batch, cont) != 0) { /* 错误处理 */ }
    int n = 0;
    for (int i = 0; i < 100 && batch[i].name[0] != '\0'; i++) {
        /* 使用 batch[i].name */
        n++;
    }
    if (n == 0) break;
    cont = true;
}
```

---

## 文件操作

### gr_file_create

**接口描述**  
在 VFS 内创建文件。

**函数原型**

```c
int gr_file_create(gr_vfs_handle vfs_handle, const char *name, const FileParameter *param);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `name`：文件名（VFS 内相对路径，不含 `vfs_name/` 前缀）。
- `param`：文件参数（当前版本可传 `NULL`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_delete

**接口描述**  
删除文件。

**函数原型**

```c
int gr_file_delete(gr_vfs_handle vfs_handle, const char *name, unsigned long long attrFlag);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `name`：文件名。
- `attrFlag`：`0` 常规删除；`1` 强制删除（WORM 场景下可能先改权限再删）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_exist

**接口描述**  
判断 VFS 内指定文件是否存在。

**函数原型**

```c
int gr_file_exist(gr_vfs_handle vfs_handle, const char *name, bool *is_exist);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `name`：文件名。
- `is_exist`：输出，是否存在。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_open

**接口描述**  
打开文件并获取句柄。

**函数原型**

```c
int gr_file_open(gr_vfs_handle vfs_handle, const char *name, int flag, gr_file_handle *file_handle);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `name`：文件名。
- `flag`：打开标志，常用：
  - `O_RDONLY`：只读。
  - `O_WRONLY`：只写。
  - `O_RDWR`：读写。
  - `O_EXCL`：与 `O_CREAT` 同用时，文件已存在则失败。
  - `O_APPEND`：追加模式（服务端实现上建议用 `gr_file_append` 追加写）。
  - `O_NONBLOCK`：非阻塞。
  - `O_SYNC`：同步 IO（SDK 会与 `O_SYNC` 组合打开）。
- `file_handle`：输出，文件句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

**备注**

- 禁止通过 `O_CREAT` 在 `open` 时创建文件，应使用 `gr_file_create`。
- WORM 文件系统不支持 `O_TRUNC`。

---

### gr_file_close

**接口描述**  
关闭文件句柄；关闭前会将逻辑文件大小刷入元数据。

**函数原型**

```c
int gr_file_close(gr_vfs_handle vfs_handle, gr_file_handle *file_handle, bool need_lock);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄。
- `need_lock`：`true` 表示关闭后文件进入锁定态；`false` 不进入锁定态（Dorado WORM：初始态、锁定态、追加态、过期态）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_pread

**接口描述**  
按偏移同步读。

**函数原型**

```c
long long int gr_file_pread(gr_vfs_handle vfs_handle, gr_file_handle file_handle,
                            void *buf, unsigned long long count, long long offset);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄（值传递）。
- `buf`：读缓冲区。
- `count`：读取字节数。
- `offset`：起始偏移（字节）。

**返回值**  
成功返回实际读取字节数；失败返回负值错误码。

---

### gr_file_pwrite

**接口描述**  
按偏移同步写。

**函数原型**

```c
long long int gr_file_pwrite(gr_vfs_handle vfs_handle, gr_file_handle *file_handle,
                             const void *buf, unsigned long long count, long long offset);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄指针。
- `buf`：写缓冲区。
- `count`：写入字节数。
- `offset`：起始偏移（字节）。

**返回值**  
成功返回实际写入字节数；失败返回负值错误码。

---

### gr_file_append

**接口描述**  
在文件逻辑末尾追加写入（内部先取 EOF 再 `pwrite`）。

**函数原型**

```c
long long int gr_file_append(gr_vfs_handle vfs_handle, gr_file_handle *file_handle,
                             const void *buf, unsigned long long count);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄指针。
- `buf`：写缓冲区。
- `count`：写入字节数。

**返回值**  
成功返回实际写入字节数；失败返回负值错误码。

---

### gr_file_stat

**接口描述**  
查询文件逻辑大小、状态与过期时间（无需保持文件打开）。

**函数原型**

```c
int gr_file_stat(gr_vfs_handle vfs_handle, const char *fileName,
                 long long *offset, unsigned long long *count, int *mode, char **time);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `fileName`：文件名（VFS 内相对名）。
- `offset`：输出，逻辑已写入偏移/逻辑 EOF（与 `count` 一致）。
- `count`：输出，逻辑文件大小（字节）。
- `mode`：输出，文件状态：`0` 初始态，`1` 锁定态，`2` 追加态，`3` 过期态。
- `time`：输出，过期时间字符串指针（由 SDK 分配，调用方勿释放）。

**返回值**  
成功返回 `0`，失败返回错误码。

**备注**

- 返回的 `count`/`offset` 为**逻辑大小**，可能与磁盘物理大小（O_DIRECT 对齐）不同。
- 文件关闭并卸载 VFS 后再次 `stat`，依赖 `.gr_vfs_meta` 持久化记录；请确保 `gr_file_close` 成功。

---

### gr_file_postpone

**接口描述**  
延长文件过期时间。

**函数原型**

```c
int gr_file_postpone(gr_vfs_handle vfs_handle, const char *file, const char *time);
```

**参数**

- `vfs_handle`：VFS 句柄。
- `file`：文件名。
- `time`：新过期时间，格式 `%Y-%m-%d %H:%M:%S`，须晚于当前过期时间。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 结构体与枚举

### gr_param_t

SDK 初始化参数。

```c
typedef struct st_gr_param {
    char log_home[PATH_MAX];                // 日志目录
    unsigned int log_level;                 // 日志级别（7：运行，255：调试，<=0：关闭）
    unsigned int log_backup_file_count;     // 日志备份份数
    unsigned long long log_max_file_size;   // 单日志文件最大字节数
} gr_param_t;
```

---

### gr_vfs_handle

VFS 句柄，由 `gr_vfs_mount` 填充。

```c
typedef struct gr_vfs_handle {
    gr_instance_handle handle;
    unsigned long long dir_handle;
    char vfs_name[GR_MAX_NAME_LEN];
} gr_vfs_handle;
```

---

### gr_file_handle

文件句柄，由 `gr_file_open` 填充。

```c
typedef struct st_gr_file_handle {
    int fd;
    char file_name[GR_MAX_NAME_LEN];
    unsigned char hash[SHA256_DIGEST_LENGTH_H];
} gr_file_handle;
```

---

### gr_file_item_t

目录列举结果项。

```c
typedef struct st_gr_file_item {
    char name[GR_MAX_NAME_LEN];
} gr_file_item_t;
```

---

### FileParameter

创建文件时的扩展参数（当前可传 `NULL`）。

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

实例状态（`gr_get_inst_status` 的 `instance_status_id`）。

| 值 | 枚举名 | 含义 |
|----|--------|------|
| 0 | `GR_STATUS_PREPARE` | 准备 |
| 1 | `GR_STATUS_RECOVERY` | 恢复 |
| 2 | `GR_STATUS_SWITCH` | 切换 |
| 3 | `GR_STATUS_OPEN` | 开放 |

---

### gr_rdgr_type_e

服务读写状态（`gr_get_inst_status` 的 `server_status_id`）。

| 值 | 枚举名 | 含义 |
|----|--------|------|
| 0 | `GR_STATUS_NORMAL` | 正常 |
| 1 | `GR_STATUS_READONLY` | 只读 |
| 2 | `GR_STATUS_READWRITE` | 读写 |

---

### gr_log_output

日志回调类型。

```c
typedef void (*gr_log_output)(gr_log_id_t log_type, gr_log_level_t log_level,
    const char *code_file_name, unsigned int code_line_num,
    const char *module_name, const char *format, ...);
```

---

### gr_conn_opt_key_e

连接选项键。

```c
typedef enum en_gr_conn_opt_key {
    GR_CONN_OPT_TIME_OUT = 0,
} gr_conn_opt_key_e;
```

---

## 参数说明

### attrFlag

- 在 `gr_vfs_create`、`gr_vfs_delete` 中，当前版本固定为 `0`。
- 在 `gr_file_delete` 中，`0` 为常规删除，`1` 为强制删除。

### 连接超时

- `GR_CONN_NEVER_TIMEOUT` 定义为 `-1`，表示永不超时。
- `gr_set_default_conn_timeout`、`gr_set_conn_timeout` 中 `timeout <= 0` 时按永不超时处理。

### gr_file_truncate

当前公开发布的 `gr_api.h` 中**未导出** `gr_file_truncate`；如需截断能力请与版本说明或后续 SDK 对齐。

---
