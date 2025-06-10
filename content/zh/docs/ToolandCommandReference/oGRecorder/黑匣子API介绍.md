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

### wr_init
**接口描述**  
初始化 SDK 实例，包括日志和通信模块。

**函数原型**  
```c
int wr_init(const wr_param_t param);
```

**参数**  
- `param`：`wr_param_t` 类型，初始化参数配置（结构体定义）。

**返回值**  
成功返回 `0`，失败返回错误码。错误码可通过 `wr_get_error` 获取详细信息。

---

### wr_exit
**接口描述**  
退出 SDK 实例。

**函数原型**  
```c
int wr_exit(void);
```

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 实例管理

### wr_create_inst
**接口描述**  
获取 WalRecorder 实例句柄。

**函数原型**  
```c
int wr_create_inst(const char *storageServerAddr, wr_instance_handle *InstHandle);
```

**参数**  
- `storageServerAddr`：存储服务器地址（当前版本未使用，可传 `NULL`）。
- `InstHandle`：输出参数，返回实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_delete_inst
**接口描述**  
删除实例句柄。

**函数原型**  
```c
int wr_delete_inst(wr_instance_handle InstHandle);
```

**参数**  
- `InstHandle`：要删除的实例句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 配置管理

### wr_set_conf
**接口描述**  
设置配置参数。

**函数原型**  
```c
int wr_set_conf(wr_instance_handle InstHandle, const char *para, const char *value);
```

**参数**  
- `InstHandle`：实例句柄。
- `para`：配置项名称（字符串类型）。
- `value`：配置项值（字符串类型）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_get_conf
**接口描述**  
获取配置参数内容。

**函数原型**  
```c
int wr_get_conf(wr_instance_handle InstHandle, const char *para, char *value);
```

**参数**  
- `InstHandle`：实例句柄。
- `para`：配置项名称（字符串类型）。
- `value`：输出参数，返回配置项值的缓冲区（需预先分配内存）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 错误处理

### wr_get_error
**接口描述**  
获取错误码信息。

**函数原型**  
```c
int wr_get_error(int errorCode, char* errmsg);
```

**参数**  
- `errorCode`：输入的错误码。
- `errmsg`：输出参数，返回错误描述信息的缓冲区（需预先分配内存）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## VFS 管理

### wr_vfs_create
**接口描述**  
创建 VFS。

**函数原型**  
```c
int wr_vfs_create(wr_instance_handle InstHandle, const char *vfsName, uint64_t attrFlag);
```

**参数**  
- `InstHandle`：实例句柄。
- `vfsName`：VFS 名称（字符串类型）。
- `attrFlag`：属性标志（当前版本固定为 `0`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_vfs_delete
**接口描述**  
删除 VFS。

**函数原型**  
```c
int wr_vfs_delete(wr_instance_handle InstHandle, const char *vfsName, uint64_t attrFlag);
```

**参数**  
- `InstHandle`：实例句柄。
- `vfsName`：VFS 名称（字符串类型）。
- `attrFlag`：属性标志（当前版本固定为 `0`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_vfs_mount
**接口描述**  
挂载 VFS 并获取句柄。

**函数原型**  
```c
int wr_vfs_mount(wr_instance_handle InstHandle, const char *vfsName, wr_vfs_handle vfs);
```

**参数**  
- `InstHandle`：实例句柄。
- `vfsName`：VFS 名称（字符串类型）。
- `vfs`：输出参数，返回 VFS 句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_vfs_unmount
**接口描述**  
卸载 VFS。

**函数原型**  
```c
int wr_vfs_unmount(wr_vfs_handle vfs);
```

**参数**  
- `vfs`：要卸载的 VFS 句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_vfs_query_file_num
**接口描述**  
查询 VFS 内文件数量。

**函数原型**  
```c
int wr_vfs_query_file_num(wr_instance_handle InstHandle, const char *vfsName, uint32_t *fileNum);
```

**参数**  
- `InstHandle`：实例句柄。
- `vfsName`：VFS 名称（字符串类型）。
- `fileNum`：输出参数，返回文件数量。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 文件操作

### wr_file_create
**接口描述**  
创建文件并获取句柄。

**函数原型**  
```c
int wr_file_create(wr_vfs_handle vfs, const char *fileName, const FileParameter *param);
```

**参数**  
- `vfs`：VFS 句柄。
- `fileName`：文件名（字符串类型）。
- `param`：文件参数（当前版本固定为 `NULL`）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_file_delete
**接口描述**  
删除文件。

**函数原型**  
```c
int wr_file_delete(wr_vfs_handle vfs, const char *fileName);
```

**参数**  
- `vfs`：VFS 句柄。
- `fileName`：文件名（字符串类型）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_file_open
**接口描述**  
打开文件并获取句柄。

**函数原型**  
```c
int wr_file_open(wr_vfs_handle vfs, const char *fileName, int32_t flags, wr_file_handle *file_handle);
```

**参数**  
- `vfs`：VFS 句柄。  
- `fileName`：文件名（字符串类型）。  
- `flags`：打开标志。  
  - `O_RDONLY`：以只读模式打开文件。  
  - `O_WRONLY`：以只写模式打开文件。  
  - `O_RDWR`：以读写模式打开文件。  
  - `O_CREAT`：如果文件不存在，则创建文件。  
  - `O_EXCL`：与 `O_CREAT` 一起使用时，如果文件已存在，则返回错误。  
  - `O_TRUNC`：如果文件已存在且以写模式打开，则清空文件内容。  
  - `O_APPEND`：以追加模式打开文件，写入的数据会追加到文件末尾。  
  - `O_NONBLOCK`：以非阻塞模式打开文件。  
  - `O_SYNC`：以同步模式打开文件，确保数据直接写入存储设备。  
- `file_handle`：输出参数，返回文件句柄。  

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_file_close
**接口描述**  
关闭文件句柄。

**函数原型**  
```c
int wr_file_close(wr_vfs_handle vfs, wr_file_handle *file_handle);
```

**参数**  
- `vfs`：VFS 句柄。
- `file_handle`：文件句柄。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_file_pread
**接口描述**  
同步读操作。

**函数原型**  
```c
long long int wr_file_pread(wr_vfs_handle vfs_handle, wr_file_handle file_handle, const void *buf, unsigned long long count, long long offset);
```

**参数**  
- `vfs_handle`：VFS 句柄，用于标识文件系统的上下文。  
- `fd`：文件句柄，包含要读取的文件信息。  
- `buf`：读取数据的缓冲区，需预先分配内存，读取的数据将存储在此缓冲区中。  
- `count`：要读取的字节数。  
- `offset`：读取的起始偏移量（单位：字节）。  

**返回值**  
成功返回实际读取的字节数，失败返回负值错误码。  

---

### wr_file_pwrite
**接口描述**  
同步写操作。  

**函数原型**  
```c
long long int wr_file_pwrite(wr_vfs_handle vfs_handle, wr_file_handle *file_handle, const void *buf, unsigned long long count, long long offset);
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

### wr_file_truncate
**接口描述**  
调整文件大小。

**函数原型**  
```c
int wr_file_truncate(wr_vfs_handle vfs, wr_file_handle file_handle, int32_t truncateType, int64_t offset);
```

**参数**  
- `vfs`：VFS 句柄。
- `file_handle`：文件句柄。
- `truncateType`：截断类型（当前版本固定为 `0`）。
- `offset`：截断偏移量（单位：字节）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

### wr_file_stat
**接口描述**  
调整文件大小。

**函数原型**  
```c
int wr_file_stat(wr_vfs_handle vfs_handle, const char *fileName, long long *offset, unsigned long long *count);
```

**参数**  
- `vfs`：VFS 句柄。
- `fileName`：文件名称。
- `offset`：输出参数，返回文件已写入偏移量。
- `count`：输出参数，返回文件大小（目前conut与offset结果一致）。

**返回值**  
成功返回 `0`，失败返回错误码。

---

## 结构体定义

### wr_param_t
**结构体定义**  
用于配置 SDK 初始化参数。

```c
typedef struct st_wr_param {
    char log_home[PATH_MAX];                // 日志文件存放目录路径
    unsigned int log_level;                 // 日志级别（7：运行日志，255：调试日志，<=0：关闭日志）
    unsigned int log_backup_file_count;     // 日志文件最大保留个数
    unsigned long long log_max_file_size;   // 单个日志文件最大大小（单位：字节）
} wr_param_t;
```

---

## 参数说明

### attrFlag
- 在 `wr_vfs_create` 和 `wr_vfs_delete` 中，当前版本固定为 `0`。

### truncateType
- 在 `wr_file_truncate` 中，当前版本固定为 `0`.

---