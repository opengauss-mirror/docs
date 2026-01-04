# oGRecorder 部署与运维指南

## 目录

- [概述](#概述)
- [安装准备](#安装准备)
- [配置文件](#配置文件)
- [部署流程](#部署流程)
- [gr_om 命令参考](#gr_om-命令参考)
- [升级指南](#升级指南)
- [卸载与故障恢复](#卸载与故障恢复)
- [错误码说明](#错误码说明)

---

## 概述

oGRecorder（数据保险柜）支持单机部署和集群部署两种部署方式。本文档介绍如何使用 `gr_om` 运维工具进行集群的安装、升级和管理。

### 总体安装流程

| 流程 | 说明 |
|------|------|
| 安装前准备 | 准备软硬件环境，完成相关配置 |
| 获取并校验安装包 | 从 openGauss 社区下载并检查安装包内容 |
| 配置 JSON 文件 | 创建包含服务器信息、安装路径、IP、端口等的 JSON 配置文件 |
| 上传安装包和 JSON | 上传到待安装服务器 |
| 解压安装包 | 使用 tar 命令解压 |
| 初始化安装环境 | 配置 SSH 互信、执行预安装 |
| 执行安装 | 使用 gr_om 一键安装数据保险柜和 CM 集群 |

### gr_om 命令列表

| 命令 | 说明 |
|------|------|
| `install` | 安装 GR 和 CM 组件 |
| `uninstall` | 卸载集群 |
| `upgrade` | 升级 GR/CM 到新版本 |
| `preinstall` | 预安装（环境准备） |
| `gr_certs` | 生成并分发 GR 证书 |
| `trust` | 配置 SSH 互信 |
| `view` | 查看集群信息 |
| `generate-xml` | 生成 XML 配置文件 |

---

## 安装准备

### 获取安装包

- **编译方式获取**：[参考链接](https://gitcode.com/opengauss/oGRecorder)
- **社区官网获取**：[官网地址](https://opengauss.org/zh/download/)

### 创建安装用户

在每台服务器上创建用户（例如 `omm`），并设置相同密码：

```bash
useradd omm
passwd omm
```

### 关闭防火墙

确保防火墙已关闭或相关端口已开放：

```bash
# 以 openEuler 2403 为例
systemctl stop firewalld
systemctl disable firewalld
```

### 同步集群时间

确保集群内各节点时间一致，建议使用 NTP 服务进行时间同步。

### 安装依赖包

确保安装了以下依赖包：

```bash
gcc7.3+
python3.7+
expect
```

### 校验用户 ID

所有节点安装用户下，查看 id 应返回相同结果：

```bash
[omm@ogRecorder install]$ id 
uid=1135(omm) gid=1135(omm) groups=1135(omm)
```

---

## 配置文件

### JSON 配置文件格式

以 1 主 1 备两节点为例：

```json
{
  "cluster": {
    "name": "cluster",
    "install_path": "/home/omm/install/",
    "env_file": "/home/omm/envfile",
    "worm_path": "/worm_path",
    "ca_path": "CA",
    "user": "omm",
    "nodes": [
      {
        "name": "oGRecorder1",
        "ip": "20.20.20.1",
        "gr_port": 33228
      },
      {
        "name": "oGRecorder2",
        "ip": "20.20.20.2",
        "gr_port": 33228
      }
    ]
  }
}
```

### 配置项说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `cluster.name` | string | 是 | 集群名称 |
| `cluster.install_path` | string | 是 | 安装目录路径 |
| `cluster.env_file` | string | 是 | 环境变量文件路径 |
| `cluster.worm_path` | string | 否 | WORM 存储路径 |
| `cluster.ca_path` | string | 否 | CA 证书目录（相对于 worm_path） |
| `cluster.user` | string | 是 | 安装用户 |
| `cluster.nodes` | array | 是 | 节点列表 |
| `nodes[].name` | string | 是 | 节点主机名（hostname） |
| `nodes[].ip` | string | 是 | 节点 IP 地址 |
| `nodes[].gr_port` | int | 是 | oGRecorder 服务端口 |

### RestAPI 参数配置（可选）

**rest_ssl.properties 文件：SSL 配置**

```properties
# SSL Configuration for CM-RestAPI
server.port=8443
server.ssl.enabled=true
server.ssl.key-store=${GAUSSHOME}/share/sslcert/restapi/server.p12
server.ssl.key-store-password=
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=rest-server
server.ssl.client-auth=need
server.ssl.trust-store=${GAUSSHOME}/share/sslcert/restapi/truststore.jks
server.ssl.trust-store-password=
server.ssl.trust-store-type=JKS
```

**restWhiteList 文件：白名单**

```
192.168.0.1
192.168.0.2
```

---

## 部署流程

### 步骤 1：创建安装包存放路径

```bash
[omm@openGauss omm]$ mkdir -p /home/omm/pkg
```

### 步骤 2：上传并解压安装包

以 7.0.0RC2 openEuler20.03-aarch64 版本为例：

```bash
[omm@openGauss pkg]$ cd /home/omm/pkg
[omm@openGauss pkg]$ tar -zxvf openGauss-oGRecorder-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
oGRecorder-Server.tar.gz
oGRecorder-SDK.tar.gz
[omm@openGauss pkg]$ tar -zxvf oGRecorder-Server.tar.gz
./
./install/
./install/gr_om
./install/py_pstree.py
./install/gr_contrl.sh
./install/rest_contrl.sh
./install/rest_ssl.properties
./install/restWhiteList
./bin/
./bin/grcmd
./bin/grserver
./lib/
./lib/libgrapi.so
```

### 步骤 3：授予安装脚本执行权限

```bash
[omm@openGauss pkg]$ chmod +x ./install/*
```

### 步骤 4：配置 SSH 互信（root 用户）

切换到 root 用户，建立 root 用户的互信：

```bash
[root@openGauss install]$ cd /home/omm/pkg/install
[root@openGauss install]# ./gr_om trust -X /home/omm/pkg/cluster.json
Host list does not include current node(openGauss82), adding automatically...
[openGauss82] Generating SSH keys...
[20.20.20.1] Generating SSH keys...
root@20.20.20.1's password: 
[20.20.20.2] Generating SSH keys...
root@20.20.20.2's password: 
...
SSH mutual trust configuration completed for all cluster nodes!
```

### 步骤 5：配置 SSH 互信（omm 用户）

切换到 omm 用户，建立 omm 用户的互信：

```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
[omm@openGauss install]$ ./gr_om trust -X /home/omm/pkg/cluster.json
...
全集群SSH互信配置完成！
```

### 步骤 6：执行预安装（root 用户）

```bash
[root@openGauss install]$ cd /home/omm/pkg/install
[root@openGauss install]$ ./gr_om preinstall -X /home/omm/pkg/cluster.json
Start preinstall oGRecorder.
Successfully create preinstall directory.
Successfully change permissions.
Successfully add environment variable.
Successfully change permissions.
Successfully add crontab permission.
Successfully set limits.conf.
Successfully preinstall oGRecorder.
```

### 步骤 7：安装 oGRecorder（omm 用户）

```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ ./gr_om install \
    -X /home/omm/pkg/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    --cmpkg /home/omm/pkg/openGauss-CM-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
```

安装成功后输出：

```
Start insatll oGRecorder.
Successfully create install path.
Successfully distribute install gr pkg.
Successfully decompress gr pkg.
Successfully create and write gr config file.
Successfully add gr bin and lib.
Successfully create cluster_manual_walrecord file.
Successfully create gr_res.sh file.
Successfully create gr cert.
Successfully distribute gr_om.
Successfully distribute gr_contrl.sh.
Successfully distribute py_pstree.py.
Successfully install oGRecorder.
Start to install cm tool.
...
[  CMServer State   ]

node           instance state
-------------------------------
1  oGRecorder1 1        Primary
2  oGRecorder2 2        Standby

[ Defined Resource State ]

node           res_name instance  state  
-----------------------------------------
1  oGRecorder1 gr       20001     OnLine  (Primary)
2  oGRecorder2 gr       20002     OnLine  (Standby)

[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
balanced        : No
current_az      : AZ_ALL
enable_walrecord: Yes

Install CM tool success.
```

**说明：** 如需安装 RestAPI，添加 `--restpkg` 参数指定 RestAPI 安装包路径。

---

## gr_om 命令参考

### trust - 配置 SSH 互信

**接口描述**  
自动配置集群节点间的 SSH 互信，使各节点可以免密登录。

**命令格式**
```bash
gr_om trust -X <config_file>
```

**参数说明**

| 参数 | 必填 | 说明 |
|------|------|------|
| `-X <config_file>` | 是 | JSON 配置文件路径 |

**使用示例**
```bash
gr_om trust -X /home/omm/cluster.json
```

---

### preinstall - 预安装

**接口描述**  
执行安装前的环境准备工作，包括创建目录、设置权限、配置环境变量等。

**命令格式**
```bash
gr_om preinstall -X <config_file>
```

**参数说明**

| 参数 | 必填 | 说明 |
|------|------|------|
| `-X <config_file>` | 是 | JSON 配置文件路径 |

**注意事项**
- 需要 root 权限执行

**使用示例**
```bash
gr_om preinstall -X /home/omm/cluster.json
```

---

### install - 安装集群

**接口描述**  
安装 oGRecorder 集群，包括 GR 组件和 CM 组件。

**命令格式**
```bash
gr_om install -X <config_file> --grpkg <gr_package> --cmpkg <cm_package> [--restpkg <rest_package>]
```

**参数说明**

| 参数 | 必填 | 说明 |
|------|------|------|
| `-X <config_file>` | 是 | JSON 配置文件路径 |
| `--grpkg <gr_package>` | 是 | GR 安装包路径（.tar.gz） |
| `--cmpkg <cm_package>` | 是 | CM 安装包路径（.tar.gz） |
| `--restpkg <rest_package>` | 否 | CM-RESTAPI 安装包路径 |

**使用示例**
```bash
gr_om install \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    --cmpkg /home/omm/pkg/CM-7.0.0.tar.gz
```

---

### gr_certs - 证书管理

**接口描述**  
生成 GR 通信证书并分发到所有节点，然后重新加载服务使证书生效。

**命令格式**
```bash
gr_om gr_certs -X <config_file>
```

**参数说明**

| 参数 | 必填 | 说明 |
|------|------|------|
| `-X <config_file>` | 是 | JSON 配置文件路径 |

**使用示例**
```bash
gr_om gr_certs -X /home/omm/cluster.json
```

---

### view - 查看集群信息

**接口描述**  
查看集群配置信息和静态配置。

**命令格式**
```bash
gr_om view <config_file>
```

**使用示例**
```bash
gr_om view /home/omm/cluster.json
```

---

### generate-xml - 生成 XML 配置

**接口描述**  
根据 JSON 配置文件生成 XML 格式的集群配置。

**命令格式**
```bash
gr_om generate-xml <config_file>
```

**使用示例**
```bash
gr_om generate-xml /home/omm/cluster.json
```

---

## 升级指南

### upgrade - 升级集群

**接口描述**  
升级 oGRecorder 集群到新版本。支持以下升级模式：

| 模式 | 参数组合 | 停服要求 | 回滚范围 |
|------|----------|----------|----------|
| GR 滚动升级 | `--grpkg` | 否（逐节点） | 全部已升级节点 |
| GR 指定节点升级 | `--grpkg -n` | 仅指定节点 | 全部已升级节点 |
| CM 集群升级 | `--cmpkg` | 是（全集群） | 全部节点 |
| 联合升级 | `--grpkg --cmpkg` | 是（全集群） | 全部节点 |

**命令格式**
```bash
# GR 滚动升级（所有节点）
gr_om upgrade -X <config_file> --grpkg <gr_package>

# GR 滚动升级（指定节点）
gr_om upgrade -X <config_file> --grpkg <gr_package> -n <node_id1> <node_id2> ...

# CM 集群升级
gr_om upgrade -X <config_file> --cmpkg <cm_package>

# GR + CM 联合升级
gr_om upgrade -X <config_file> --grpkg <gr_package> --cmpkg <cm_package>
```

**参数说明**

| 参数 | 必填 | 说明 |
|------|------|------|
| `-X <config_file>` | 是 | JSON 配置文件路径 |
| `--grpkg <gr_package>` | 否 | 新版本 GR 安装包路径 |
| `--cmpkg <cm_package>` | 否 | 新版本 CM 安装包路径 |
| `-n, --nodeids <ids>` | 否 | 指定要升级的节点 ID（从 1 开始） |

### 滚动升级示例

```bash
# 1. 先升级备节点
gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/oGRecorder-2.0.0.tar.gz \
    -n 2 3

# 2. 再升级主节点
gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/oGRecorder-2.0.0.tar.gz \
    -n 1
```

### 联合升级示例

```bash
gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/oGRecorder-2.0.0.tar.gz \
    --cmpkg /home/omm/CM-2.0.0.tar.gz
```

### 包验证

升级命令会自动验证安装包类型，防止 GR/CM 包混用：

```
============================================================
PACKAGE VERIFICATION
============================================================
  [1/2] Verifying GR package: /home/omm/oGRecorder-2.0.0.tar.gz
        ✓ GR package verification passed.
  [2/2] Verifying CM package: /home/omm/CM-2.0.0.tar.gz
        ✓ CM package verification passed.
============================================================
All package verifications passed!
============================================================
```

### 失败回滚

- 如果任何节点升级失败，工具会自动回滚所有已升级的节点
- 回滚过程包括：恢复软链接、恢复 bin/lib 目录、重启服务
- 回滚失败时会输出手动恢复指南

**建议**：在线滚动升级时，建议指定 nodeids 第一个节点为备机，配合 `gr_create_inst_only_primary` 接口可以实现业务只重连一次。

---

## 卸载与故障恢复

### uninstall - 卸载集群

**接口描述**  
卸载 oGRecorder 集群，清理安装目录和相关配置。

**命令格式**
```bash
gr_om uninstall -X <config_file>
```

**使用示例**
```bash
# 1. 先停止集群
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ cm_ctl stop
cm_ctl: stop cluster. 
cm_ctl: stop nodeid: 1
cm_ctl: stop nodeid: 2
.........
cm_ctl: stop cluster successfully.

# 2. 执行卸载
[omm@openGauss install]$ gr_om uninstall -X /home/omm/pkg/cluster.json
Start uninstall oGrecorder.
Successfully uninstall oGRecorder.
```

**注意事项**
- 卸载前请确保已备份重要数据
- 卸载操作不可逆

### 手动故障恢复

如果升级失败且自动回滚也失败，请按以下步骤手动恢复：

```bash
# 1. 停止服务
cm_ctl stop

# 2. 恢复软链接到旧版本
rm -f /opt/ogrecorder/APP
ln -s /opt/ogrecorder/APP_1.0.0 /opt/ogrecorder/APP

# 3. 从备份恢复 bin/lib（如果有备份）
cp -a /opt/ogrecorder/APP_1.0.0/backup/bin /opt/ogrecorder/APP_1.0.0/
cp -a /opt/ogrecorder/APP_1.0.0/backup/lib /opt/ogrecorder/APP_1.0.0/

# 4. 重启服务
cm_ctl start
```

---

## 错误码说明

### 通用错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1 | 一般错误 |
| 2 | 参数错误 |
| 3 | 配置文件错误 |
| 4 | SSH 连接失败 |

### 包验证错误码

| 错误码 | 说明 |
|--------|------|
| 101 | 包文件不存在 |
| 102 | 包解压失败（可能损坏） |
| 103 | 包类型不匹配（GR/CM 混用） |
| 104 | 无效的 GR 包 |
| 105 | 无效的 CM 包 |
| 106 | 未知的包类型 |

### 包验证错误示例

当用 `--grpkg` 传入 CM 包时：

```
============================================================
PACKAGE VERIFICATION FAILED
============================================================

Error Code: 103
Error Message: Package type mismatch! Expected GR package but found CM package.
  CM signature files found: bin/cm_server, bin/cm_agent
Package Path: /home/omm/CM-1.0.0.tar.gz
Expected Type: GR
Detected Type: CM

Suggestions:
  - You specified --grpkg but provided a CM package
  - Use --cmpkg for this package instead
  - Or provide the correct GR package

============================================================

Upgrade aborted due to package verification failure.
```

---

## 注意事项

1. **权限要求**：`preinstall` 和 `trust`（root 用户）需要 root 权限执行
2. **网络要求**：所有节点间需要网络互通，SSH 端口开放
3. **磁盘空间**：安装前请确保目标目录有足够的磁盘空间
4. **时间同步**：集群各节点时间需保持一致
5. **用户 ID 一致**：所有节点安装用户的 uid/gid 需相同
6. **备份建议**：升级前建议备份重要数据和配置文件
7. **包验证**：工具会自动验证安装包类型，防止 GR/CM 包混用

---

如有特殊环境或报错，请结合实际回显信息进行排查。

