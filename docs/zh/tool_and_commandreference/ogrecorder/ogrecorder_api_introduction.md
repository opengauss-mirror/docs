# oGRecorder SDK API 文档

## 目录
- [初始化与退出](#初始化与退出)
- [实例管理](#实例管理)
- [配置管理](#配置管理)
- [错误处理](#错误处理)
- [VFS 管理](#vfs-管理)
- [文件操作](#文件操作)
- [结构体定义](#结构体定义)
- [参数说明](#参数说明)

---

## 初始化与退出

### gr_init
**接口描述**  
初始化 SDK 实例，包括日志和通信模块。

**函数原型**  
```c
int gr_init(const gr_param_t param);
```

**参数**  
- `param`：`wr_param_t` 类型，初始化参数配置（结构体定义）。

**返回值**  
成功返回 `0`，失败返回错误码。错误码可通过 `gr_get_error` 获取详细信息。

--

### gr_exit
**接口描述**  
退出 SDK 实例。

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
获取 WalRecorder 实例句柄。

**函数原型**  
```c
int gr_create_inst(const char *storageServerAddr, gr_instance_handle *inst_handle);
```

**参数**  
- `storageServerAddr`：存储服务器地址（当前版本未使用，可传 `NULL`）。
- `inst_handle`：输出参数，返回实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_delete_inst
**接口描述**  
删除实例句柄。

**函数原型**  
```c
int gr_delete_inst(gr_instance_handle inst_handle);
```

**参数**  
- `inst_handle`：要删除的实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 配置管理

### gr_set_conf
**接口描述**  
设置配置参数。

**函数原型**  
```c
int gr_set_conf(gr_instance_handle inst_handle, const char *name, const char *value);
```

**参数**  
- `inst_handle`：实例句柄。
- `name`：配置项名称（字符串类型）。
- `value`：配置项值（字符串类型）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_get_conf
**接口描述**  
获取配置参数内容。

**函数原型**  
```c
int gr_get_conf(gr_instance_handle inst_handle, const char *name, char *value);
```

**参数**  
- `inst_handle`：实例句柄。
- `name`：配置项名称（字符串类型）。
- `value`：输出参数，返回配置项值的缓冲区（需预先分配内存）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 错误处理

### gr_get_error
**接口描述**  
获取错误码信息。

**函数原型**  
```c
int gr_get_error(int *errcode, const char **errmsg);
```

**参数**  
- `errorCode`：输入的错误码。
- `errmsg`：输出参数，返回错误描述信息的缓冲区（需预先分配内存）。

**返回值**  
成功返回 `0`，失败返回错误码。

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
- `vfs_name`：VFS 名称（字符串类型）。
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
- `vfs_name`：VFS 名称（字符串类型）。
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
- `vfs_name`：VFS 名称（字符串类型）。
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

### gr_vfs_query_file_num
**接口描述**  
查询 VFS 内文件数量。

**函数原型**  
```c
int gr_vfs_query_file_num(gr_vfs_handle vfs_handle, int *file_num);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `file_num`：输出参数，返回文件数量。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 文件操作

### gr_file_create
**接口描述**  
创建文件并获取句柄。

**函数原型**  
```c
int gr_file_create(gr_vfs_handle vfs_handle, const char *name, const FileParameter *param);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `name`：文件名（字符串类型）。
- `param`：文件参数（当前版本固定为 `NULL`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_delete
**接口描述**  
删除文件。

**函数原型**  
```c
int gr_file_delete(gr_vfs_handle vfs_handle, const char *name);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `name`：文件名（字符串类型）。

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
- `name`：文件名（字符串类型）。  
- `flag`：打开标志。  
  - `O_RDONLY`：以只读模式打开文件。  
  - `O_WRONLY`：以只写模式打开文件。  
  - `O_RDWR`：以读写模式打开文件。  
  - `O_EXCL`：与 `O_CREAT` 一起使用时，如果文件已存在，则返回错误。  
  - `O_APPEND`：以追加模式打开文件，写入的数据会追加到文件末尾。  
  - `O_NONBLOCK`：以非阻塞模式打开文件。  
  - `O_SYNC`：以同步模式打开文件，确保数据直接写入存储设备。  
- `file_handle`：输出参数，返回文件句柄。  

**返回值**  
成功返回 `0`，失败返回错误码。  

**备注**  
- 禁止通过调用`O_CREAT`方式创建文件。  
- 在worm文件系统中不支持`O_TRUNC`。

---

### gr_file_close
**接口描述**  
关闭文件句柄。

**函数原型**  
```c
int gr_file_close(gr_vfs_handle vfs_handle, gr_file_handle *file_handle, bool need_lock);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄。
- `need_lock`：文件是否进入锁定态，`true`表示文件进入锁定态，`false`表示文件不进入锁定态（Dorado Worm存储中文件有初始态、锁定态、保护态和过期态四种状态）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_pread
**接口描述**  
同步读操作。

**函数原型**  
```c
long long int gr_file_pread(gr_vfs_handle vfs_handle, gr_file_handle file_handle, void *buf, unsigned long long count, long long offset);
```

**参数** 
- `vfs_handle`：VFS 句柄，用于标识文件系统的上下文。  
- `file_handle`：文件句柄，包含要读取的文件信息。  
- `buf`：读取数据的缓冲区，需预先分配内存，读取的数据将存储在此缓冲区中。  
- `count`：要读取的字节数。  
- `offset`：读取的起始偏移量（单位：字节）。  

**返回值**  
成功返回实际读取的字节数，失败返回负值错误码。  

---

### gr_file_pwrite
**接口描述**  
同步写操作。  

**函数原型**  
```c
long long int gr_file_pwrite(gr_vfs_handle vfs_handle, gr_file_handle *file_handle, const void *buf, unsigned long long count, long long offset);
```

**参数**  
- `vfs_handle`：VFS 句柄，用于标识文件系统的上下文。  
- `file_handle`：文件句柄，包含要写入的文件信息。  
- `buf`：写入数据的缓冲区，需包含要写入的数据内容。  
- `count`：要写入的字节数。  
- `offset`：写入的起始偏移量（单位：字节）。  

**返回值**  
成功返回实际写入的字节数，失败返回负值错误码。

---

### gr_file_truncate
**接口描述**  
调整文件大小。

**函数原型**  
```c
int gr_file_truncate(gr_vfs_handle vfs_handle, gr_file_handle file_handle, int truncateType, long long offset);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `file_handle`：文件句柄。
- `truncateType`：截断类型（当前版本固定为 `0`）。
- `offset`：截断偏移量（单位：字节）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_stat
**接口描述**  
调整文件大小。

**函数原型**  
```c
int gr_file_stat(gr_vfs_handle vfs_handle, const char *fileName, long long *offset, unsigned long long *count, int *mode, char **time);
```

**参数**  
- `vfs_handle`：VFS 句柄。
- `fileName`：文件名称。
- `offset`：输出参数，返回文件已写入偏移量。
- `count`：输出参数，返回文件大小（目前conut与offset结果一致）。
- `mode`：输出参数，返回文件状态（文件有初始态、锁定态、追加态、过期态四种状态，返回0代表文件处于初始态，1代表文件处于锁定态，2代表文件处于追加态，3代表文件处于过期态）。
- `time`：输出参数，返回文件过期时间。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### gr_file_postpone
**接口描述**
延长文件过期时间。

**函数原型**
```c
int gr_file_postpone(gr_vfs_handle vfs_handle, const char *file, const char *time);
```

**参数**
- `vfs_handle`：VFS句柄。
- `file`：文件名称。
- `time`：过期时间，输入参数，格式为`%Y-%m-%d %H:%M:%S`，需要晚于当前文件过期时间。

**返回值**
成功返回 `0`，失败返回错误码。

---

## 结构体定义

### gr_param_t
**结构体定义**  
用于配置 SDK 初始化参数。

```c
typedef struct st_gr_param {
    char log_home[PATH_MAX];                // 日志目录
    unsigned int log_level;                 // 日志级别（7：运行日志，255：调试日志，<=0：关闭日志）
    unsigned int log_backup_file_count;     // 日志文件备份数量
    unsigned long long log_max_file_size;   // 单个日志文件最大大小（单位：字节）
} gr_param_t;
```

---

## 参数说明

### attrFlag
- 在 `gr_vfs_create` 和 `gr_vfs_delete` 中，当前版本固定为 `0`。

### truncateType
- 在 `gr_file_truncate` 中，当前版本固定为 `0`.

---

