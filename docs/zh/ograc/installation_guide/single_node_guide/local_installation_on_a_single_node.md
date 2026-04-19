# oGRAC 单节点本地安装

## 概述

本文档用于指导开发者在**本地环境**中完成 oGRAC 的**单节点编译、安装与调试**。该部署方式主要面向功能验证、源码调试和开发联调场景，不适用于生产环境。

> [!NOTE]说明
>
> * 单节点模式仅支持单实例运行
> * 不包含 `DMS`、`DSS` 等分布式组件能力
> * 不支持多写场景，也无法在当前环境基础上平滑扩展为多节点集群
> * 仅建议用于开发、调试和问题定位

---

## 环境准备

在开始安装前，请确保操作系统和运行环境满足以下前置条件。

### 系统初始化

为了避免系统安全策略或防火墙规则对数据库进程、端口通信以及调试工具造成影响，需要提前关闭 SELinux 和防火墙服务。

执行以下命令完成相关配置：

```bash
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

> [!NOTE]说明
>
> * `setenforce 0`：临时关闭 SELinux 强制策略
> * 修改 `/etc/selinux/config` 可保证系统重启后仍保持关闭状态
> * 防火墙关闭后，请确保当前环境为可信内网或本地环境

---

### 创建目录与用户

为了保证系统安全性和权限隔离，建议使用**独立的系统用户**进行 oGRAC 安装和运行。

1. 创建源码编译及安装目录
2. 创建专用系统用户
3. 将目录权限授予对应用户

示例如下：

```bash
mkdir -p [compile_path]
useradd [user_name]
passwd [user_password]
#建议进行权限设置，否则会出现install阶段权限不足的报错
chmod -R 777 [compile_path]
```

> [!NOTE]说明
>
> * `[compile_path]`：源码下载、编译及安装的统一工作目录
> * `[user_name]`：建议专用于 oGRAC 的系统运行用户

---

### 安装系统依赖

oGRAC 的编译和运行依赖 Python、网络工具及部分基础库，请提前安装以下软件包：

```bash
yum install -y wget python3 python3-devel iputils iproute \
unixODBC-devel unixODBC lz4 lz4-devel patch xz flex --skip-broken
```

> [!NOTE]说明
>
> * `python3 / python3-devel`：用于执行安装脚本和管理工具
> * `iputils / iproute`：用于网络检测与 IP 配置
> * `lz4`：用于数据压缩与解压，要求版本 >= 1.8.3
> * `--skip-broken`：在依赖存在冲突时跳过异常包，避免中断安装

---

## 源码获取与编译

### 获取源码

切换至前文创建的编译目录，拉取 oGRAC 官方源码仓库：

```bash
cd [compile_path]
git clone https://gitcode.com/openGauss/oGRAC.git
```

下载完成后，目录结构中将包含 `build`、`src` 等核心子目录。

随后,进行prepare阶段准备,用于安装环境的依赖信息:

```bash
cd oGRAC/build
sh local_install.sh prepare
```

---

### 编译参数调整

在部分调试或开发场景下（尤其是 Debug 版本编译），需要关闭**虚拟内存保护机制**，否则可能影响调试工具的正常使用。

进入编译配置目录并修改参数：

```bash
cd oGRAC/build
sed -i 's/DUSE_PROTECT_VM=ON/DUSE_PROTECT_VM=OFF/g' Makefile.sh
```

### 进行编译

在`oGRAC/build`目录下进行编译,用于后续二进制安装:

```bash
sh local_install.sh compile -b [release | debug]
```

> [!NOTE]说明
> 
> * `[release | debug]`：指定编译模式，`release` 为默认值，`debug` 为调试模式

---

## 安装流程

### 执行安装脚本

1. 在root用户下, 进入 `oGRAC/build` 目录
2. 使用安装脚本进行部署，并指定安装用户或者兼容性

```bash
sh local_install.sh install -u [user_name]

# sh local_install.sh install -u [user_name] -c A  # 新建兼容性为A的数据库
```

该脚本将自动完成以下工作：

* 校验运行环境和用户权限
* 创建安装用户及 home 目录（如不存在）
* 停止并清理历史残留进程与数据
* 创建数据目录和日志目录


当执行完成后,可以登录到`-u`指定的用户下,使用`ogsql / as sysdba`命令连接数据库,进行使用.

当需要重启时,可以使用如下命令启动数据库:
```shell
/home/[user_name]/install/bin/ogracd -D /home/[user_name]/data &
```
---

### 卸载与清理

如需重新部署或清理环境，可执行卸载脚本：

```bash
sh local_install.sh clean -u [user_name]
```

该操作将停止服务，并删除数据目录、安装目录以及相关环境变量。

---

## Debug 与调试建议

在单节点部署中，系统仍默认包含 `CM`（Cluster Manager）组件。在使用 `gdb` 进行断点调试时，`CM` 可能因心跳超时误判数据库异常并强制终止进程。

为避免该问题，建议在调试前调整 CM 的超时时间参数：

```bash
su - [user_name]
cms res -edit db -attr HB_TIMEOUT=100000000
cms res -edit db -attr CHECK_TIMEOUT=10000000
```

> [!NOTE]说明
>
> * 上述配置仅建议在调试环境中使用
> * 调试完成后可恢复默认配置，避免影响系统行为

---

## 六、结语

至此，oGRAC 单节点本地环境已完成从源码获取、编译、安装到调试配置的完整流程。后续可根据具体需求进行参数调优、功能验证或源码级调试。

如需部署多节点或生产环境，请参考两节点集群部署文档。
