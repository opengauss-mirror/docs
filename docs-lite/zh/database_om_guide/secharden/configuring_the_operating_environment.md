# 运行环境配置

## 确保文件权限掩码配置正确

### 说明

在Linux运行环境中，创建文件的默认权限可通过文件权限掩码umask配置。为防止数据库文件被其他用户访问或篡改，应确保umask配置为0077，以确保只有数据库运行用户具有访问权限。umask值一般在`/etc/bashrc`、`/etc/profile`、`$HOME/.bash_profile`或`$HOME/.bashrc`中设置。

### 实现

**检查方法:**

执行umask命令，查询设置值。

```bash
$ umask
0077
```

**修复方法:**

步骤1：以`$HOME/.bashrc`文件为例，通过vi命令编辑文件，配置umask为0077。

```bash
umask 0077
```

步骤2：执行source $HOME/.bashrc使环境变量生效。

```bash
source $HOME/.bashrc
```

## 确保对其他用户隐藏进程信息

### 说明

为防止非数据库运行用户通过ps、top等操作系统命令收集数据库运行时的相关进程信息，建议使用`hidepid`选项对其他用户隐藏进程。这样可以确保只有root用户可以查看所有进程，而普通用户只能看到自己的进程。这样可以避免用户进程信息泄露，提升数据库运行环境的安全性。

### 实现

**检查方法：**

通过如下命令检查`/proc`是否配置了`hidepid`选项，如果配置`hidepid=2`则成功，否则失败。

```bash
# mount | grep "proc on /proc" | grep hidepid
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime,hidepid=2)
```

**修复方法：**

使用root用户执行如下`mount`命令，为`/proc`增加`hidepid=2`选项。

```bash
# mount -o remount,rw,nosuid,nodev,noexec,relatime,hidepid=2 /proc
```

编辑`/etc/fstab`文件，增加或修改配置如下，以便在服务器启动时自动启用保护。

```bash
proc /proc proc defaults,nosuid,nodev,noexec,relatime,hidepid=2 0 0
```

## 确保开启NTP时钟同步

### 说明

NTP（Network Time Protocol，网络时间协议）是同步网络中的各个计算机时间的一种协议。配置NTP可以使计算机的时钟同步到国际标准时间UTC（Universal Time Coordinated，世界协调时），保证数据库服务端的各主机上的系统时间同步。服务端系统时间不同步或时间差异较大可能导致数据库无法正常运行。

### 实现

**检查方法：**

执行如下shell命令，检查ntpd服务是否启动。Active字段返回“active (running)”表示已经启动，返回“inactive (dead)”表示未启动。

```bash
# service ntpd status 2>&1 | grep Active
   Active: inactive (dead)
```

**修复方法：**

在`/etc/ntp.conf`文件中配置合适的NTP服务器，然后执行如下命令重启ntpd服务：

```bash
# service ntpd restart
```
