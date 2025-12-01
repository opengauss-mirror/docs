# 数据库审计

## 确保开启数据库审计功能

### 说明

审计日志记录是安全事件中事后追溯、定位问题原因及划分事故责任的重要手段。推荐开启数据库审计功能，将参数`audit_enabled`设置为`on`。

### 实现

**检查方法：**

检查`audit_enabled`参数值是否为`on`，不为`on`则失败。

```sql
openGauss=# show audit_enabled;
 audit_enabled
---------------
on
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_enabled = on"
```

## 确保开启用户登录和注销审计

### 说明

参数`audit_login_logout`决定是否对用户登录（包括登录成功和登录失败）和注销操作记录审计日志。如果开启此选项可以追溯有哪些用户曾经登录数据库，何时注销登录，否则无法对用户登录和注销情况进行审计。

### 实现

**检查方法：**

检查`audit_login_logout`参数值是否为7，不为7则失败。

```sql
openGauss=# show audit_login_logout;
 audit_login_logout
--------------------
 7
(1 row)
```

**修复方法：**

修改参数值为7，表示用户登录成功、失败和注销均记录审计日志。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_login_logout = 7"
```

## 确保开启数据库启动、停止、恢复和切换审计

### 说明

参数`audit_database_process`决定是否对数据库的启动、停止、切换和恢复操作记录审计日志。开启此选项可以追溯数据库的运行状态变化。

### 实现

**检查方法：**

检查`audit_database_process`参数值是否为1，如果不为1则失败。

```sql
openGauss=# show audit_database_process;
 audit_database_process
------------------------
 1
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_database_process = 1"
```

## 确保开启用户锁定和解锁审计

### 说明

参数`audit_user_locked`决定是否对数据库用户的锁定和解锁操作记录审计日志。

### 实现

**检查方法:**

检查`audit_user_locked`参数值是否为1，如果不为1则失败。

```sql
openGauss=# show audit_user_locked;
 audit_user_locked
-------------------
 1
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_user_locked = 1"
```

## 确保开启权限授予和回收审计

### 说明

参数`audit_grant_revoke`决定是否对数据库用户权限授予和回收的操作记录审计日志。

### 实现

**检查方法：**

检查`audit_grant_revoke`参数值是否为1，如果不为1则失败。

```sql
openGauss=# show audit_grant_revoke;
audit_grant_revoke
--------------------
1
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_grant_revoke = 1"
```

## 确保开启数据库对象的添加、删除、修改审计

### 说明

参数`audit_system_object`决定是否对数据库对象的CREATE、DROP、ALTER操作记录审计日志。这些数据库对象包括DATABASE、USER、SCHEMA、TABLE等。该参数的值由28个二进制位的组合求出，这28个二进制位分别代表openGauss的26类数据库对象（包含两个保留位）。如果对应的二进制位取值为0，表示不审计对应的数据库对象的CREATE、DROP、ALTER操作；取值为1，表示审计对应的数据库对象的CREATE、DROP、ALTER操作。这26个二进制位代表的具体审计内容请参见openGauss的官方文档中对`audit_system_object`参数的说明。

### 实现

**检查方法：**

检查`audit_system_object`参数值配置，如果参数值小于默认值67121159则失败。

```sql
openGauss=# show audit_system_object;
 audit_system_object
---------------------
67121159
(1 row)
```

**修复方法：**

参数`audit_system_object`参数值设置为67121159，表示只对DATABASE、SCHEMA、USER、DATA SOURCE、SQL PATCH这五类数据库对象的CREATE、ALTER、DROP操作进行审计。用户可根据业务需要开启对更多数据库对象DDL操作的审计。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_system_object = 67121159"
```

## 确保开启数据库对象的查询审计

### 说明

参数`audit_dml_state_select`决定是否对数据库对象的SELECT操作进行审计，默认值为0表示不开启。

### 实现

**检查方法：**

检查`audit_dml_state_select`参数值是否为1，如果不为1则失败。

```sql
openGauss=# show audit_dml_state_select;
 audit_dml_state_select
------------------------
 0
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_dml_state_select = 1"
```

## 确保审计优先策略配置正确

### 说明

控制审计日志的保存策略，以空间还是时间限制为优先策略。

### 实现

**检查方法：**

检查`audit_resource_policy`参数值是否为`on`，如果不为`on`则失败。

```sql
openGauss=# show audit_resource_policy;
audit_resource_policy
-----------------------
on
(1 row)
```

**修复方法：**

修改参数`audit_resource_policy`为`on`(空间优先)。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_resource_policy = on"
```

## 确保单个审计文件的最长记录时间配置正确

### 说明

**检查方法:**

检查`audit_rotation_interval`参数值配置，建议配置最长记录时间为1天。

```sql
openGauss=# show audit_rotation_interval;
audit_rotation_interval
-------------------------
1d
(1 row)
```

**修复方法:**

参数`audit_rotation_interval`的单位为分钟（min），修改参数值为1440，即为1天(1d)。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_rotation_interval = 1440"
```

## 确保单个审计日志文件的最大容量配置正确

### 说明

参数`audit_rotation_size`设置单个审计日志文件最大的容量。当审计日志文件达到最大容量时，将自动创建一个新的日志文件。

### 实现

**检查方法:**

检查`audit_rotation_size`参数值配置，建议配置为10MB。

```sql
openGauss=# show audit_rotation_size;
audit_rotation_size
---------------------
10MB
(1 row)
```

**修复方法:**

修改`audit_rotation_size`参数值10MB。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_rotation_size = 10MB"
```

## 确保所有审计日志文件占用的最大磁盘空间配置正确

### 说明

参数`audit_space_limit`设置审计文件所占的最大磁盘空间。当审计文件总量超过最大值时，系统将在数据库日志文件中写入警告信息，并删除最早的审计文件，同时记录审计文件删除信息到审计日志中。

### 实现

**检查方法：**

检查`audit_space_limit`参数值配置。

```sql
openGauss=# show audit_space_limit;
audit_space_limit
-------------------
1GB
(1 row)
```

**修复方法：**

根据实际需要配置参数`audit_space_limit`大小，建议配置不小于1GB。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_space_limit = 1GB"
```

## 确保审计日志文件最大数目配置正确

### 说明

参数`audit_file_remain_threshold`设置审计日志文件的最大保留数量。当审计文件总数超过指定值时，系统将向数据库日志文件中写入警告信息，并删除最早的审计文件，同时记录审计文件删除信息到审计日志中。

### 实现

**检查方法：**

检查`audit_file_remain_threshold`参数值配置，通常建议配置为默认值1048576。

```sql
openGauss=# show audit_file_remain_threshold;
 audit_file_remain_threshold
-----------------------------
 1048576
(1 row)
```

**修复方法：**

修改`audit_file_remain_threshold`参数值为1048576。

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_file_remain_threshold = 1048576"
```
