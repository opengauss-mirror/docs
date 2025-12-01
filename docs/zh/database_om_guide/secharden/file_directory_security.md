# 文件目录安全

## 确保数据库安装目录权限最小化

### 说明

`${GAUSSHOME}` 是 openGauss 的安装目录，为了防止安装目录下的文件被恶意篡改或破坏，此目录应该受到保护，不允许非数据库安装用户访问。正确的权限设置能确保数据库系统的安全性。

### 实现

**检查方法：**

执行如下 shell 命令，如果返回 `${GAUSSHOME}` 目录下的任何文件或目录，则表示权限设置失败。

```bash
find -L ${GAUSSHOME} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

环境变量 `${GAUSSUSER}` 和 `${GAUSSGROUP}` 需要配置为数据库的安装用户和用户组。

**修复方法:**

使用 `chmod` 命令来修改 `${GAUSSHOME}` 目录的权限，确保只有数据库安装用户（所属用户）可以读写和执行目录内的文件，而其他用户和组没有写入权限。

```bash
chmod 0700 ${GAUSSHOME}
```

## 确保共享目录权限最小化

### 说明

`${GAUSSHOME}/share` 目录包含了 openGauss 的共享组件，其中 `${GAUSSHOME}` 为数据库安装目录。为了防止共享组件被恶意篡改或破坏，此目录应该受到保护，不允许非数据库安装用户访问。

### 实现

**检查方法：**

执行如下 shell 命令，如果返回 `${GAUSSHOME}/share` 目录则失败。

```bash
find ${GAUSSHOME}/share -prune -perm /g=rwx,o=rwx
```

**修复方法：**

```bash
chmod  0700 ${GAUSSHOME}/share
```

## 确保二进制文件目录权限最小化

### 说明

`${GAUSSHOME}/bin` 目录包含了数据库的二进制文件，其中 `${GAUSSHOME}` 为数据库安装目录。为了防止二进制文件被恶意篡改或破坏给客户信息安全造成威胁，此目录应该受到保护，不允许非数据库安装用户访问。

### 实现

**检查方法：**

执行如下 shell 命令，如果返回 `${GAUSSHOME}/bin` 目录则失败。

```bash
find ${GAUSSHOME}/bin -prune -perm /g=rwx,o=rwx
```

**修复方法：**

```bash
chmod  0700 ${GAUSSHOME}/bin
```

## 确保数据目录权限最小化

### 说明

数据目录包含了用户数据文件，为了防止数据文件被恶意篡改或破坏给客户的数据信息安全造成威胁，此目录应该受到保护，不允许非数据库安装用户访问。

### 实现

**检查方法:**

执行如下 shell 命令，如果返回数据目录则失败。

```bash
find ${GAUSSDATA} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

其中 `${GAUSSDATA}` 为 DN 的 data 目录，用户可通过 GUC 参数 `data_directory` 查询  DN 的 data 目录。环境变量 `${GAUSSUSER}` 和 `${GAUSSGROUP}` 需要配置为数据库的安装用户和用户组。

**修复方法:**

```bash
chmod 0700 ${GAUSSDATA}
```

其中 `${GAUSSDATA}` 为  DN 的 data 目录。

## 确保日志归档目录权限最小化

### 说明

`${GAUSSHOME}/archive` 目录为日志归档目录，其中 `${GAUSSHOME}` 为数据库安装目录。当 `wal_level` 参数配置为 `archive` 时，该目录权限应该设置为 `0700` 以确保只允许数据库的安装运行用户访问。

### 实现

**检查方法：**

执行如下 shell 命令，如果返回 `${GAUSSHOME}/archive` 目录则失败。如果 `${GAUSSHOME}/archive` 目录不存在则无需进行检查。

```bash
find ${GAUSSHOME}/archive -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

环境变量 `${GAUSSUSER}` 和 `${GAUSSGROUP}` 需要配置为数据库的安装用户和用户组。

**修复方法：**

```bash
chmod 0700 ${GAUSSHOME}/archive
```

## 确保postgresql.conf文件权限最小化

### 说明

配置文件`postgresql.conf`包含数据库运行的配置参数，为了防止配置文件被恶意篡改，此文件应该受到保护，不允许非数据库安装用户访问。

### 实现

**检查方法：**

执行如下shell命令，如果返回`postgresql.conf`文件路径则失败。

```bash
find ${GAUSSDATA}/postgresql.conf \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /u=x,g=rwx,o=rwx \)
```

其中`${GAUSSDATA}`为DN的data目录，用户可通过GUC参数`data_directory`查询DN的data目录。环境变量`${GAUSSUSER}`和`${GAUSSGROUP}`需要配置为数据库的安装用户和用户组。

**修复方法：**

```bash
chmod 0600 ${GAUSSDATA}/postgresql.conf
```
其中`${GAUSSDATA}`为DN的data目录。

## 确保pg_hba.conf文件权限最小化

### 说明

配置文件`pg_hba.conf`包含了连接数据库的配置信息，如客户端认证方法等。为了防止配置文件被恶意篡改，此文件应该受到保护，仅允许数据库的安装用户访问。

### 实现

**检查方法：**

执行如下shell命令，如果返回`pg_hba.conf`文件路径则失败。

```bash
find ${GAUSSDATA}/pg_hba.conf \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /u=x,g=rwx,o=rwx \)
```

其中`${GAUSSDATA}`为DN的data目录，用户可通过GUC参数`data_directory`查询DN的data目录。环境变量`${GAUSSUSER}`和`${GAUSSGROUP}`需要配置为数据库的安装用户和用户组。

**修复方法：**

```bash
chmod 0600 ${GAUSSDATA}/pg_hba.conf
```

其中`${GAUSSDATA}`为DN的data目录。

## 确保日志目录权限最小化

### 说明

`${GAUSSLOG}`为数据库日志目录，目录下日志文件中包含很多运行信息，为了防止日志文件被恶意篡改或破坏给客户的数据信息安全造成威胁，此目录应该受到保护，不允许非数据库安装用户访问。

### 实现

**检查方法：**

执行如下shell命令，如果返回`${GAUSSLOG}`目录则失败。

```bash
find ${GAUSSLOG} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

环境变量`${GAUSSUSER}`和`${GAUSSGROUP}`需要配置为数据库的安装用户和用户组。

**修复方法：**

```bash
chmod 0700 ${GAUSSLOG}
```
