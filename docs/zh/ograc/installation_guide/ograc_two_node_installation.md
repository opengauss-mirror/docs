# oGRAC 两节点部署指南

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
* 共享盘要求：
  * 需要至少4块裸LUN盘（且不能为分区LUN），所在存储节点与两台主机同一个组网，可直接访问；
> **说明**：资源不足可能导致安装阶段失败，尤其是在共享存储和 CM 组件初始化时。

---

### 2.2 操作系统要求

* 支持的操作系统版本：

  * openEuler 20.03 LTS (aarch64)
  * openEuler 22.03 LTS (aarch64)

> **建议**：建议使用上述版本安装包，其余系统环境可自行编译出包，但官方未进行完整兼容性验证。

---

## 3. 安装准备

以下步骤需要 **在两台节点上分别执行，其需要root用户**，除非特别说明。

### 3.1 系统初始化
> **提示**：如下操作建议仅在测试或非生产环境中执行，如生产环境请咨询运维管理人员询问安全策略，请勿直接关闭防火墙。

为避免 SELinux 和防火墙影响节点通信及数据库进程启动，需要对其进行处理。
```shell
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

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

建议新建单独安装目录（本文档以`/data`目录举例），请勿选择`/home`或系统目录下进行包下载或安装，避免权限问题。

```shell
mkdir -p /data/ograc
cd /data/ograc
```

---

### 4.2 下载安装包
通过如下命令，可查看节点对应操作系统，获取对应架构安装包：
```shell
cat /etc/os-release
```

在节点 0，节点 1当前目录下，从如下网址获取所需架构安装包：
```shell
https://download-opengauss.osinfra.cn/archive_test/oGRAC/1.0.0/
```
如节点可以连接外网，可直接通过`wget`命令获得openEuler ARM版本的安装包：
```shell
# 获得openEuler 20.03 ARM系统 oGRAC安装包
wget https://download-opengauss.osinfra.cn/archive_test/oGRAC/1.0.0/openEuler20.03/arm/openGauss-oGRAC-openEuler20.03-aarch64-RELEASE.tgz

# 获得openEuler 22.03 ARM系统 oGRAC安装包
wget https://download-opengauss.osinfra.cn/archive_test/oGRAC/1.0.0/openEuler22.03/arm/openGauss-oGRAC-openEuler22.03-aarch64-RELEASE.tgz
```

---

## 5. 两节点共享存储准备

### 5.1 LUN 规划说明

oGRAC 两节点集群需要使用共享存储，请提前在存储侧准备 **4 个 LUN** 并完成主机组映射，使得两个节点均能访问到这四块盘。

推荐规划如下（示例）：

* 1 × 5G：CM 仲裁盘
* 1 × 4T：Redo 盘
* 2 × 2T：数据盘、归档盘

LUN容量可根据实际业务需要进行适当调整，性能敏感环境应保证数据盘、Redo盘足够大，避免不满足日志、业务数据需要，常规大小次序应满足`数据盘 > Redo盘 > 归档盘 > CM 仲裁盘`。

通过下列命令查询分配的四块盘，得到所分配的四块盘的`scsi`或`wwn`开头的编号:
```shell
ll /dev/disk/by-id
```

随后将四块盘链接到如下目录：
```shell
ln -s /dev/disk/by-id/scsi-disk1 /dev/dss-disk1 #数据盘
ln -s /dev/disk/by-id/scsi-disk2 /dev/dss-disk2 #Redo盘
ln -s /dev/disk/by-id/scsi-disk3 /dev/dss-disk3 #归档盘
ln -s /dev/disk/by-id/scsi-disk4 /dev/gcc-disk #CM仲裁盘
```

四块盘说明用途如下表所示：
| 软链接       | 用途     | DSS 卷   | 建议大小 |
| --------- | ------ | ------- | ---- |
| gcc-disk  | CM 仲裁盘 | 不纳入lun管理组件管理 | 5G   |
| dss-disk1 | 数据盘    | vg1     | 2T   |
| dss-disk2 | Redo 盘 | vg2     | 4T   |
| dss-disk3 | 归档盘    | vg3     | 2T   |

> **说明**：`gcc` 为 CM 组件内部名称，与编译器无关。

---

### 5.2 解压安装文件

在两节点分别执行，其中`os version`为当前所下载架构版本：

```shell
cd /data/ograc
tar -zxvf openGauss-oGRAC-openEuler[os version]-aarch64-RELEASE.tgz
chmod -R 777 ograc_connector
chown -R root:root ograc_connector
```

节点0、节点1均进入 action 目录：

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

* 节点 0 作为时间服务器
* 节点 1 向节点 0 同步时间

**节点 0：**

```shell
sed -i "1i allow all" /etc/chrony.conf
systemctl restart chronyd
sed -i 's/^#local stratum 10/local stratum 10/' /etc/chrony.conf
ss -unlp | grep chronyd
```

**节点 1：**

```shell
sed -i "1i server [节点1 IP地址] iburst" /etc/chrony.conf
systemctl enable --now chronyd
systemctl restart chronyd  #若后续由于其他因素导致时间偏差过大，可通过该命令快速触发强制同步
chronyc tracking
```
---

## 6. 配置安装参数

### 6.1 修改配置文件

进入 action 目录并编辑 `config_params_lun.json`：

```shell
cd /data/ograc/ograc_connector/action
vim config_params_lun.json
```

配置重点注意事项：

1. 两节点 `node_id` 必须分别为 `0` 和 `1`
2. 内存较小的机器(如DCS虚拟机、内存小于300GB的物理机等)请设置 `auto_tune = 1`
3.  `redo_num × redo_size × 2`应小于Redo盘大小；

节点 0 示例（节点 1 仅需将 `node_id` 修改为 `1`）：

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
 其中，各字段含义如下： 
 - deploy_mode：安装模式，当前应使用dss安装； 
 - deploy_user：安装管理用户； 
 - node_id：节点序号，从0开始； 
 - cms_ip：当前业务网络与心跳网络并未分离，填两节点主机IP即可；
 - mes_ssl_switch：mes通信是否通过ssl加密； 
 - db_type：数据库标识，不建议修改； 
 - MAX_ARCH_FILES_SIZE：归档最大文件大小，这里设置建议不超过归档盘大小； 
 - redo_num：redo文件的数量； 
 - redo_size：redo文件的大小，由于首次起库会`dd`抹除盘中所有内容，不建议设置过大，避免初次start时间过久； 
 - auto_tune：是否开启自适应参数配置（小规格机器建议开启）； 
 - dss_vg_list：分别为数据盘、redo盘、归档盘目录； 
 - gcc_home：CM仲裁盘使用目录；

---

## 7. 安装与启动集群
安装部署中遇到的常见问题可以见`oGRAC安装部署常见问题定位与解决`章节。
### 7.1 安装节点

在两节点先后执行，建议等待节点0安装完毕后，再进行节点1安装：

```shell
sh appctl.sh install config_params_lun.json
```

在每次安装过程中，需要在如下阶段设置数据库`sys`用户密码：
```shell
please enter ograc_sys_pwd:
```
密码为字母、数字、特殊符号混合，不要求字母大写，两节点设置密码需相同。

---

### 7.2 启动节点

建议先启动节点 0，再启动节点 1：

```shell
sh appctl.sh start
```
其中，节点 0首次start会创建redo、数据文件，时间较久，请耐心等待。节点 1首次start不涉及该过程，时间相对较小。

---

## 8. 集群状态检查

在任意节点执行如下命令，查询集群状态：

```shell
su -s /bin/bash ograc
cms stat -res db
```

如下图所示：

![查询集群状态示意图](image-集群状态.png)

其中，主要关注`STAT`列，为当前节点状态，两节点为`ONLINE`代表集群节点状态正常。

`PRE_STAT`为先前节点状态，`TARGET_STAT`为理想状态，可作为故障场景下的参考状态。

---

## 9. 重新安装oGRAC
如果需要在该环境上重新部署oGRAC，需要先停止集群后，进行卸载清理，方可重新安装；
### 9.1 停止服务
分别在节点 0、节点 1在`/data/ograc/ograc_connector/action`目录下，以root用户执行以下命令停止节点。
```shell
cd /data/ograc/ograc_connector/action
sh appctl.sh stop
```

### 9.2 卸载清理
随后，分别在节点 0、节点 1执行以下命令进行卸载：
```shell
sh appctl.sh uninstall override
```
随后即可更换包版本或修改配置文件，重新按照文档步骤进行安装。

---

## 10. 总结

至此，以上即为oGRAC部署指南，任何疑问请联系openGauss官方社区，开发人员将给予支撑。
