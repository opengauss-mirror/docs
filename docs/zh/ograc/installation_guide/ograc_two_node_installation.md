# oGRAC 两节点安装指南

## 1. 文档简介

本文档用于指导开发者在 **两台物理机或虚拟机** 上完成 oGRAC 的 **两节点集群安装与部署**。

---

## 2. 安装前须知

### 2.1 硬件要求

oGRAC 两节点部署至少需要两台服务器，推荐硬件规格如下：

* 主机数量：2 台 ARM 架构物理机或 DCS 虚拟机
* 单台主机最低推荐配置：

  * 内存：8 GB
  * CPU：4 核
  * 磁盘可用空间：不少于 100 GB
  * 两台物理机或虚机可以同时直接访问共享盘，且必须要4块；

> **说明**：资源不足可能导致安装阶段失败，尤其是在共享存储和 CM 组件初始化时。

---

### 2.2 操作系统要求

* 支持的操作系统版本：

  * openEuler 20.03 LTS (aarch64)
  * openEuler 22.03 LTS (aarch64)

> **建议**：请优先使用上述版本，其它系统环境未进行完整兼容性验证。

---

## 3. 安装准备

以下步骤需要 **在两台节点上分别执行，其需要root用户**，除非特别说明。

### 3.1 系统初始化

为避免 SELinux 和防火墙影响节点通信及数据库进程启动，需要提前关闭相关功能。

```shell
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

> **提示**：以上操作建议仅在测试或内网环境中执行。

---

### 3.2 创建安装管理用户

两节点均需创建 **安装管理用户**，该用户仅用于安装和调度流程，不作为数据库实际使用用户。

* 数据库运行用户 `ograc` 会在安装过程中自动创建
* 两节点的用户名和密码必须保持一致

```shell
useradd ogdba
passwd ogdba
```

---

### 3.3 安装系统依赖

oGRAC 安装依赖 Python、时间同步和网络工具，请在两节点执行：

```shell
yum install -y wget ntpdate chrony python3 python3-devel iputils iproute --skip-broken
```

---

## 4. 获取并准备安装包

### 4.1 创建安装目录

建议将安装目录放置在 `/data` 等非用户家目录下，以避免权限问题。

```shell
mkdir -p /data/ograc
cd /data/ograc
```

---

### 4.2 下载并分发安装包

1. 从 openGauss OBS 下载 oGRAC 安装包：
   [https://download-opengauss.osinfra.cn/archive_test/oGRAC/1.0.0/](https://download-opengauss.osinfra.cn/archive_test/oGRAC/1.0.0/)

2. 若安装包已下载至节点 1，请同步至节点 2：

```shell
scp /data/ograc/[package_name] root@[ip2]:/data/ograc/[package_name]
```

---

## 5. 两节点共享存储准备

### 5.1 LUN 规划说明

oGRAC 两节点集群需要使用共享存储，请提前在存储侧准备 **4 个 LUN** 并完成映射。

推荐规划如下（示例）：

* 1 × 5G：CM 仲裁盘
* 1 × 4T：Redo 盘
* 2 × 2T：数据盘、归档盘

> **注意**：iscsi 重新登录操作可能影响当前主机的所有存储连接，请谨慎操作。

---

### 5.2 解压安装文件

在两节点分别执行：

```shell
cd /data/ograc
tar -zxvf [package_name]
chmod -R 777 ograc_connector
chown -R root:root ograc_connector
```

节点1、节点2均进入 action 目录：

```shell
cd ograc_connector/action
```

---

### 5.3 时间同步配置

集群环境对时间一致性要求较高，请先执行 date 命令检查各节点时间是否一致，一致则可跳过该步骤，否则请务必完成时间同步。（若使用虚拟机，需先关闭与主机的时间同步策略，防止出现时间跳变问题。）

#### 情况一：节点可访问外网

两节点分别执行：

```shell
ntpdate -u [外网ntp服务器网址]
```

#### 情况二：无外网环境

* 节点 1 作为时间服务器
* 节点 2 向节点 1 同步时间

**节点 1：**

```shell
sed -i "1i allow all" /etc/chrony.conf
systemctl restart chronyd
sed -i 's/^#local stratum 10/local stratum 10/' /etc/chrony.conf
ss -unlp | grep chronyd
```

**节点 2：**

```shell
sed -i "1i server [IP1] iburst" /etc/chrony.conf
systemctl enable --now chronyd
systemctl restart chronyd  #若后续由于其他因素导致时间偏差过大，可通过该命令快速触发强制同步
chronyc tracking
```

---

### 5.4 创建 LUN 软链接（root用户下，两节点一致）

请根据实际盘符（建议使用 `/dev/disk/by-id`）建立统一软链接：

```shell
ln -s /dev/sdxx /dev/dss-disk1
ln -s /dev/sdxx /dev/dss-disk2
ln -s /dev/sdxx /dev/dss-disk3
ln -s /dev/sdxx /dev/gcc-disk
```
![LUN 软连接示意图](image-LUN软链接.png)
| 软链接       | 用途     | DSS 卷   | 建议大小 |
| --------- | ------ | ------- | ---- |
| gcc-disk  | CM 仲裁盘 | 不纳入lun管理组件管理 | 5G   |
| dss-disk1 | 数据盘    | vg1     | 2T   |
| dss-disk2 | Redo 盘 | vg2     | 4T   |
| dss-disk3 | 归档盘    | vg3     | 2T   |

> **说明**：`gcc` 为 CM 组件内部名称，与编译器无关。

---

## 6. 配置安装参数

### 6.1 修改配置文件

进入 action 目录并编辑 `config_params_lun.json`：

```shell
cd /data/ograc/ograc_connector/action
```

配置注意事项：

1. 两节点 `node_id` 必须分别为 `0` 和 `1`
2. 内存较小的机器(如DCS、内存小于300GB的物理机等)请设置 `auto_tune = 1`
3. redo 盘大小需大于 `redo_num × redo_size × 2`

节点 1 示例：

```json
{
  "deploy_mode": "dss",
  "deploy_user": "ogdba:ogdba",
  "node_id": "0",
  "cms_ip": "xx.xx.xx.1;xx.xx.xx.2",
  "db_type": "1",
  "mes_ssl_switch": false,
  "MAX_ARCH_FILES_SIZE": "300G",
  "redo_num": "6",
  "redo_size": "5G",
  "auto_tune": "0",
  "dss_vg_list": {
    "vg1": "/dev/dss-disk1",
    "vg2": "/dev/dss-disk2",
    "vg3": "/dev/dss-disk3"
  },
  "gcc_home": "/dev/gcc-disk"
}
```

节点 2 仅需将 `node_id` 修改为 `1`。

---

## 7. 安装与启动集群
常见问题可以见`oGRAC安装部署常见问题定位与解决`章节。
### 7.1 安装节点

在两节点先后执行，建议等待节点1安装完毕后，再进行节点2安装：

```shell
sh appctl.sh install config_params_lun.json
```

---

### 7.2 启动节点

建议先启动节点 1，再启动节点 2：

```shell
sh appctl.sh start
```

---

## 8. 集群状态检查

在任意节点执行：

```shell
su -s /bin/bash ograc
cms stat -res db
```
![查询集群状态示意图](image-集群状态.png)
若两节点状态均正常，则集群部署成功。

---

## 9. 卸载 oGRAC

### 9.1 停止服务

```shell
sh appctl.sh stop
```

### 9.2 卸载清理

```shell
sh appctl.sh uninstall override
```

---

## 10. 总结

至此，oGRAC 两节点集群的完整安装流程已完成。
