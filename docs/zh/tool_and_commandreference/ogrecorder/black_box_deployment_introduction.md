# 数据保险柜部署介绍

数据保险柜支持单机部署和集群部署两种部署方式。

## 总体安装流程

| 流程               | 说明                                                         |
|--------------------|--------------------------------------------------------------|
| 安装前准备         | 准备软硬件环境，完成相关配置。                               |
| 获取并校验安装包   | 从 openGauss 社区下载并检查安装包内容。                     |
| 配置 JSON 文件     | 创建包含服务器信息、安装路径、IP、端口等的 JSON 配置文件。     |
| 上传安装包和 JSON   | 上传到待安装服务器。                                         |
| 解压安装包         | 使用 tar 命令解压。                                          |
| 初始化安装环境     | 包括上传、解压、使用 gr_om 准备环境。                        |
| 执行安装           | 使用 gr_om 一键安装数据保险柜和 CM 集群。                        |
| 配置 worm          | 配置 worm 存储环境。                                         |

---

## 安装准备

- **获取安装包**
  - 编译方式获取：[参考链接](https://gitcode.com/opengauss/oGRecorder)
  - 社区官网获取：[官网地址](https://opengauss.org/zh/download/)

- **创建安装用户**
  - 在每台服务器上创建用户，例如`omm`，并设置相同密码。
  ```
  useradd omm
  passwd omm
  ```

- **创建互信**
  - 建议 root 用户与 omm 用户互信，可手动或用安装包脚本创建。

- **关闭防火墙**
  - 确保防火墙已关闭或相关端口已开放，以openeuler2403举例：
  ```
  systemctl stop firewalld
  systemctl disable firewalld
  ```

- **同步集群各个节点时间**
  - 确保集群内各个节点时间一致，建议使用ntp服务进行时间同步。

- **安装依赖包**
  - 确保安装了以下依赖包：
  ```bash
  gcc7.3+
  python3.7+
  expect
  ```

- **校验用户各个节点id是否相同**
  - 所有节点安装用户下，查看id应返回相同结果：
  ```bash
  [omm@ogRecorder install]$ id 
  uid=1135(omm) gid=1135(omm) groups=1135(omm)
  ```

## JSON 配置文件格式

以 1 主 1 备两节点为例，json 文件格式如下（仅供参考，需按实际环境调整）：

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

**JSON 配置文件字段：**
- `cluster.name`：集群名称
- `cluster.install_path`：安装路径
- `cluster.env_file`：环境变量文件路径
- `cluster.worm_path`：worm 存储路径
- `ca_path`：CA证书路径，相对于worm_path的相对路径
- `cluster.user`：安装用户
- `cluster.nodes`：节点列表
  - `name`：节点名称（机器hostname）
  - `ip`：节点 IP 地址
  - `gr_port`：oGRecorder 服务端口

---

## restapi 参数配置（可选）

**rest_ssl.properties文件：ssl配置**

- 当前只推荐修改server.port，配置restapi服务端口

```
# SSL Configuration for CM-RestAPI
# This file contains SSL/TLS configuration parameters

# Server port
server.port=8443

# SSL enabled
server.ssl.enabled=true

# Keystore configuration (server certificate)
server.ssl.key-store=${GAUSSHOME}/share/sslcert/restapi/server.p12
server.ssl.key-store-password=
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=rest-server

# Truststore configuration (client certificate verification)
server.ssl.client-auth=need
server.ssl.trust-store=${GAUSSHOME}/share/sslcert/restapi/truststore.jks
server.ssl.trust-store-password=
server.ssl.trust-store-type=JKS
```

**restWhiteList文件：白名单**

- 将要配置的白名单ip，以如下格式写入文件

```
192.168.0.1
192.168.0.2
```

**环境准备**

- 各个节点需要参照链接[restapi环境配置](https://gitcode.com/opengauss/CM-RestAPI?tab=md)提前进行环境配置。

## 数据保险柜集群部署流程

### 1. 以 omm 用户创建安装包存放路径

```bash
[omm@openGauss omm]$ mkdir -p /home/omm/pkg
```

---

### 2. 上传并解压安装包

以 7.0.0RC2 openEuler20.03-aarch64 版本为例，将 `openGauss-oGRecorder-7.0.0-RC2-openEuler20.03-aarch64.tar.gz` 和 `openGauss-CM-7.0.0-RC2-openEuler20.03-aarch64.tar.gz` 上传至 `/home/omm/pkg` 目录下。

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


**说明：**

- 如果需要安装restapi，需要提前准备好安装包与配置各个节点的环境。同时，修改rest_ssl.properties和restWhiteList文件，配置restapi参数。获取安装包与配置环境请参考：[CM-RestAPI](https://gitcode.com/opengauss/CM-RestAPI?tab=md)

---

### 3. 授予安装脚本执行权限

```bash
[omm@openGauss pkg]$ chmod +x ./install/*
```

---

### 4. 切换到 root 用户，建立root用户的互信（重复安装可以跳过）
```bash
[root@openGauss install]$ cd /home/omm/pkg/install
# 根据提示输入用户的密码
[root@openGauss install]# ./gr_om trust -X /home/omm/pkg/cluster.json
Host list does not include current node(openGauss82), adding automatically...
[openGauss82] Generating SSH keys...
[20.20.20.1] Generating SSH keys...

Authorized users only. All activities may be monitored and reported.
root@20.20.20.1's password: 
[20.20.20.2] Generating SSH keys...

Authorized users only. All activities may be monitored and reported.
root@20.20.20.2's password: 
root@20.20.20.1's password: 
id_ed25519.pub                                                                                                                                                     100%   98   927.1KB/s   00:00    
root@20.20.20.2's password: 
id_ed25519.pub                                                                                                                                                     100%   98   638.1KB/s   00:00    
[openGauss82] Configuring authorized_keys and known_hosts...
[20.20.20.1] Configuring authorized_keys and known_hosts...

Authorized users only. All activities may be monitored and reported.
all_keys                                                                                                                                                           100%  293     1.0MB/s   00:00    
known_hosts                                                                                                                                                        100% 2934    17.7MB/s   00:00    

Authorized users only. All activities may be monitored and reported.
[20.20.20.2] Configuring authorized_keys and known_hosts...

Authorized users only. All activities may be monitored and reported.
root@20.20.20.2's password: 
all_keys                                                                                                                                                           100%  293     1.3MB/s   00:00    
known_hosts                                                                                                                                                        100% 2934    15.5MB/s   00:00    

Authorized users only. All activities may be monitored and reported.
root@20.20.20.2's password: 
Verifying mutual trust between nodes...
[openGauss82 → 20.20.20.1] Success
[openGauss82 → 20.20.20.2] Success
[20.20.20.1 → openGauss82] Success
[20.20.20.1 → 20.20.20.2] Success
[20.20.20.2 → openGauss82] Success
[20.20.20.2 → 20.20.20.1] Success
SSH mutual trust configuration completed for all cluster nodes!
```

---

### 5. 切换到 omm 用户，建立omm用户的互信（重复安装可以跳过）
```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
# 根据提示输入用户的密码
[omm@openGauss install]# ./gr_om trust -X /home/omm/pkg/cluster.json
主机列表未包含当前节点(openGauss82)，自动添加...
[openGauss82] 生成SSH密钥...
[20.20.20.1] 生成SSH密钥...

Authorized users only. All activities may be monitored and reported.
omm@20.20.20.1's password: 
[20.20.20.2] 生成SSH密钥...

Authorized users only. All activities may be monitored and reported.
omm@20.20.20.2's password: 
omm@20.20.20.1's password: 
id_ed25519.pub                                                                                                                                                     100%   98   938.5KB/s   00:00    
omm@20.20.20.2's password: 
id_ed25519.pub                                                                                                                                                     100%   98   714.1KB/s   00:00    
[openGauss82] 配置 authorized_keys 和 known_hosts...
[20.20.20.1] 配置 authorized_keys 和 known_hosts...

Authorized users only. All activities may be monitored and reported.
all_keys                                                                                                                                                           100%  293     1.3MB/s   00:00    
known_hosts                                                                                                                                                        100% 2934    13.9MB/s   00:00    

Authorized users only. All activities may be monitored and reported.
[20.20.20.2] 配置 authorized_keys 和 known_hosts...

Authorized users only. All activities may be monitored and reported.
omm@20.20.20.2's password: 
all_keys                                                                                                                                                           100%  293   911.3KB/s   00:00    
known_hosts                                                                                                                                                        100% 2934    16.0MB/s   00:00    

Authorized users only. All activities may be monitored and reported.
omm@20.20.20.2's password: 
验证节点间互信...
[openGauss82 → 20.20.20.1] 成功
[openGauss82 → 20.20.20.2] 成功
[20.20.20.1 → openGauss82] 成功
[20.20.20.1 → 20.20.20.2] 成功
[20.20.20.2 → openGauss82] 成功
[20.20.20.2 → 20.20.20.1] 成功
全集群SSH互信配置完成！
```

### 6. 切换到 root 用户，执行预安装

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

---

### 7. 使用 omm 用户安装 oGRecorder

```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ ./gr_om install -X /home/omm/pkg/cluster.json --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz --cmpkg /home/omm/pkg/openGauss-CM-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
Converted JSON config '/home/omm/pkg/cluster.json' to XML: /tmp/tmp9bjow88e.xml
Using env file from JSON config: /home/omm/envfile
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
Preparing CM path.
Decompressing CM pacakage.
Creating cluster_manual_start file.
Initializing cm_server.
Initializing cm_agent.
Creating CM ca files.
Please input the password for ca cert:
Please input the password for ca cert again:
Setting om_monitor crontab.
Add gr resource.
Starting cluster.
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
Cleaned up temporary XML file: /tmp/tmp9bjow88e.xml
```

**说明：**

- 如果需要安装restapi，需要通过--restpkg参数指定restapi安装包路径。

---

### 8. 停止并卸载数据保险柜集群

```bash
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ cm_ctl stop
cm_ctl: stop cluster. 
cm_ctl: stop nodeid: 1
cm_ctl: stop nodeid: 2
.........
cm_ctl: stop cluster successfully.
[omm@openGauss install]$ gr_om uninstall -X /home/omm/pkg/cluster.json
Start uninstall oGrecorder.
Successfully uninstall oGRecorder.
```

---

### 参数说明

**命令行参数：**
- `-X`：JSON 配置文件路径
- `--grpkg`：oGRecorder Server 安装包路径
- `--cmpkg`：CM 安装包路径
- `--restpkg`: 可选参数，cmrestapi 安装包路径

**安装说明：**
- 预安装主要功能为分发安装包并修改集群安装所需的系统配置
- 安装成功后会自动启动数据保险柜集群并显示集群状态

如有特殊环境或报错，请结合实际回显信息进行排查。