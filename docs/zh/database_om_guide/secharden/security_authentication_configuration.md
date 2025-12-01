# 安全认证配置

## 确保客户端认证超时时间配置正确

### 说明

参数`authentication_timeout`控制完成客户端认证的时间上限，默认为一分钟。如果一个客户端没有在参数设定时间内完成与服务器端的认证，则服务器自动中断与客户端的连接，这样就避免了出问题的客户端无限制地占用连接数。

### 实现

**检查方法:**

检查`authentication_timeout`参数设置，建议设置为1min。

```sql
openGauss=# show authentication_timeout;
 authentication_timeout
------------------------
 1min
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "authentication_timeout=1min"
```

## 确保认证加密迭代次数配置正确

### 说明

通过`auth_iteration_count`参数配置对认证凭据进行单向哈希时的迭代次数。迭代次数设置过小会降低口令存储的安全性，设置过大会导致创建用户和认证等涉及口令加密的场景性能劣化。请根据实际硬件条件合理设置迭代次数，迭代次数最低应设置为10000次。

### 实现

**检查方法:**

检查`auth_iteration_count`参数配置，如果小于10000则失败。

```sql
openGauss=# show auth_iteration_count;
 auth_iteration_count
----------------------
 10000
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "auth_iteration_count=10000"
```

## 确保账户登录失败尝试次数配置正确

### 说明

通过参数`failed_login_attempts`配置帐户登录失败尝试次数可以防止口令被暴力破解。参数`failed_login_attempts`默认值为10，表示连续认证失败次数超过10次后，帐户将被自动锁定。

### 实现

**检查方法：**

检查`failed_login_attempts`参数值配置，如果参数为0则配置失败。

```sql
openGauss=# show failed_login_attempts;
 failed_login_attempts
-----------------------
 10
(1 row)
```

**修复方法：**

配置`failed_login_attempts`为大于0小于或等于1000的整数值，建议保持默认值10。

```bash
gs_guc reload -Z datanode -N all -I all -c "failed_login_attempts=10"
```

## 确保开启服务端内部Kerberos认证

### 说明

使用`gs_om`工具开启和关闭服务端内部Kerberos认证。如果数据库部署在非安全网络中，通过开启服务端内部Kerberos认证可解决数据库服务端内部节点被仿冒风险。

### 实现

**检查方法：**

可以通过查看DN数据目录下`pg_hba.conf`配置文件，确认服务端内部节点认证方式是否为`gss`，如果为`gss`表示已开启Kerberos认证。执行`cm_ctl query -Cv`查看数据库状态，可以看到Kerberos进程状态。

**修复方法：**

确保数据库处于正常运行状态。首先，执行如下命令停止数据库：

```bash
gs_om -t stop
```

安装server，执行如下命令，其中USER为数据库初始用户，安装服务端，IP1表示主server所在的IP节点，IP2表示备server所在的IP节点。服务端主备IP指定服务端内任意IP即可：

```bash
gs_om -t kerberos -m install -U USER --krb-server IP1 --krb-standby IP2
```

安装client，在服务端内任一节点执行一次命令即可:

```bash
gs_om -t kerberos -m install -U USER --krb-client
```


使环境变量配置生效：

```bash
source ~/.bashrc
```

启动数据库：

```bash
gs_om -t start
```
