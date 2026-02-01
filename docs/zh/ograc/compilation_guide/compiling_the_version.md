# oGRAC 编译出包指南

## 1. 文档说明

本文档用于指导开发者在本地环境中完成 **oGRAC 版本的源码编译与安装包生成，并用于两节点安装**。

> **适用范围**
>
> * 支持编译 `release` 与 `debug` 两种版本
> * 默认以 ARM 架构（openEuler）环境为例
> * 适用于开发、测试及版本验证场景

---

## 2. 编译环境准备

### 2.1 系统初始化

在开始编译前，需要关闭可能影响编译或运行的系统安全策略。请在 **root 用户** 下执行以下命令：

```shell
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

> **说明**：
>
> * SELinux 和防火墙可能阻断本地调试或组件通信
> * 建议仅在开发或内网环境中执行上述操作

---

### 2.2 创建编译目录与用户

为保证权限隔离和环境整洁，建议使用**独立的系统用户**进行源码编译和出包操作。

```shell
mkdir -p [compile_path]
chmod 755 -R [compile_path]
useradd [user_name]
passwd [user_name]
chown -R [user_name]:[user_name] [compile_path]
```

> **参数说明**
>
> * `[compile_path]`：oGRAC 源码、三方库及编译产物的统一目录
> * `[user_name]`：专用于编译 oGRAC 的系统用户


---

### 2.3 安装系统依赖

oGRAC 编译依赖较多的系统库及构建工具，请在编译主机上执行以下命令一次性安装：

```shell
yum install -y libaio-devel openssl openssl-devel ndctl-devel \
ncurses ncurses-devel libtirpc-devel expect ant bison iputils \
iproute wget make gcc gcc-c++ gdb gdb-gdbserver python3 python3-devel \
git net-tools cmake automake byacc libtool --skip-broken
```

> **说明**：
>
> * 上述依赖涵盖数据库编译、调试及安装脚本执行所需组件
> * 若存在依赖冲突，`--skip-broken` 可避免安装中断

---

## 3. 编译流程

在完成编译环境准备后，即可开始进行 oGRAC 版本编译与出包。

### 3.1 下载并准备第三方依赖库

oGRAC 依赖 openGauss 提供的第三方二进制库，请先下载并解压至 oGRAC 源码目录。

```bash
su - [user_name]
cd [compile_path]

git clone https://gitcode.com/opengauss/oGRAC.git

cd oGRAC
wget --no-check-certificate \
https://opengauss.obs.cn-south-1.myhuaweicloud.com/6.0.0/binarylibs/gcc10.3/openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz

tar -zxf openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz
```

> **注意**：
>
> * 请确保第三方库解压目录与源码目录同级
> * 不建议随意修改第三方库目录名称

---

### 3.2 执行编译脚本

进入 `build` 目录，通过统一编译脚本生成安装包。

```bash
cd [compile_path]/oGRAC/build
sh build_ograc.sh [release|debug] --with-dss
```

参数说明：

* `release`：编译发布版本，适用于功能验证和交付
* `debug`：编译调试版本，包含调试符号，便于 gdb 调试
* `--with-dss`：启用 DSS 相关组件（两节点及以上部署必须）

> **提示**：
>
> * 编译过程耗时较长，请耐心等待
> * 若编译失败，请优先检查依赖是否完整

---

## 4. 安装包产物说明

当编译成功完成后，生成的安装包将位于以下目录：

```shell
[compile_path]/oGRAC/package/
```

该目录中包含oGRAC 安装包（tar.gz 格式）,开发者可将该安装包分发至目标节点，按照对应的安装文档进行部署。

---

## 5. 总结

至此，oGRAC 的源码编译与出包流程已完成。建议在使用安装包前，确认其对应的编译类型（release/debug）及目标部署环境是否匹配。

如需进行调试部署或集群安装，请参考对应的安装部署文档。
