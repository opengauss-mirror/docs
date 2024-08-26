# WAL归档配置

## 确保WAL信息记录级别配置正确

### 说明

WAL（Write Ahead Log）即预写式日志，是数据库用于恢复事务持久性的一种机制。`wal_level`决定了写入WAL的信息量。为了在备机上开启只读查询，`wal_level`需要在主机上设置成`hot_standby`，并且备机设置`hot_standby`参数为`on`。

### 实现

**检查方法：**

检查`wal_level`参数是否为默认值`hot_standby`，如果不是则失败。

```sql
openGauss=# show wal_level;
 wal_level
-----------
 hot_standby
(1 row)
```

**修复方法：**

设置参数`wal_level`值为`hot_standby`，并重启数据库使设置生效。

```bash
gs_guc set -Z datanode -N all -I all -c "wal_level=hot_standby"
gs_om -t stop && gs_om -t start
```

## 确保开启归档模式

### 说明

参数`archive_mode`用于设置是否开启归档模式，该参数通常只建议当`wal_level`参数设置为`archive`时使用。当`wal_level`参数设置为`minimal`时，`archive_mode`参数无法使用。如果设置`archive_mode`参数为`on`，需要同时设置`archive_command`参数以指定归档WAL日志的命令。

### 实现

**检查方法：**

1. 先检查`wal_level`参数是否为`archive`。
2. 如果`wal_level`为`archive`，则检查`archive_mode`参数值是否为`on`。
3. 如果`wal_level`配置为`hot_standby`，则无需检查`archive_mode`。

```sql
openGauss=# show wal_level;
wal_level
-----------
hot_standby
(1 row)

openGauss=# show archive_mode;
archive_mode
------------
off
(1 row)
```

**修复方法：**

当`wal_level`参数为`archive时`，设置参数`archive_mode`为`on`，同时设置`archive_command`为归档WAL日志的命令，`archive_command`参数的值仅供参考，其中`--remove-destination`选项作用为拷贝前如果目标文件已存在，会先删除已存在的目标文件，然后执行拷贝操作。

```bash
gs_guc reload -Z datanode -N all -I all -c "archive_mode=on"
gs_guc reload -Z datanode -N all -I all -c "archive_command='cp --remove-destination %p /mnt/server/archive/%f'"
```
