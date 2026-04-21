# oGRAC 编译出包指南

## 文档说明

本文档用于指导开发者在本地环境中完成 **oGRAC 版本的源码编译与安装包生成，并用于两节点安装**。

> **适用范围**
>
> * 支持编译 `release` 与 `debug` 两种版本
> * 默认以 ARM 架构（openEuler）环境为例
> * 适用于开发、测试及版本验证场景

> [!WARNING]注意
>
> * 如果本地环境为 openEuler 24.03 LTS (aarch64)，编译出包步骤会有些许差异，具体操作步骤仍可参考本文档，但需要关注下红色字体内容。

---

## 编译环境准备

### 系统初始化

在开始编译前，需要关闭可能影响编译或运行的系统安全策略。请在 **root 用户** 下执行以下命令：

```shell
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

> [!NOTE]说明
>
> * SELinux 和防火墙可能阻断本地调试或组件通信
> * 建议仅在开发或内网环境中执行上述操作

---

### 创建编译目录与用户

为保证权限隔离和环境整洁，建议使用**独立的系统用户**进行源码编译和出包操作。

```shell
mkdir -p [compile_path]
chmod 755 -R [compile_path]
useradd [user_name]
passwd [user_name]
chown -R [user_name]:[user_name] [compile_path]
```

> [!NOTE]说明
>
> * `[compile_path]`：oGRAC 源码、三方库及编译产物的统一目录
> * `[user_name]`：专用于编译 oGRAC 的系统用户

---

### 安装系统依赖

oGRAC 编译依赖较多的系统库及构建工具，请在编译主机上执行以下命令一次性安装：

```shell
yum install -y libaio-devel openssl openssl-devel ndctl-devel unixODBC-devel unixODBC \
ncurses ncurses-devel libtirpc-devel expect ant bison iputils  \
iproute wget make gcc gcc-c++ gdb gdb-gdbserver python3 python3-devel \
git net-tools cmake automake byacc libtool lz4 lz4-devel patch xz flex --skip-broken
```

> [!NOTE]说明
>
> * 上述依赖涵盖数据库编译、调试及安装脚本执行所需组件
> * `cmake`：要求版本 >= 3.12
> * `lz4`：要求版本 >= 1.8.3
> * 若存在依赖冲突，`--skip-broken` 可避免安装中断

> [!WARNING]注意
>
> <span style="color: red;">若为openEuler 24.03 LTS系统版本，则cmake不能使用yum install来安装使用，会因为版本较高而有冲突，这里建议使用10.3.0/10.3.1的gcc来编译cmake，编译cmake步骤如下所示：</span>
> 1. 进入子用户，进入编译cmake的目录，这里以`/home/user_name`为例。
>
>    ```shell
>    su user_name
>    cd /home/user_name
>    ```
>
> 2. 下载gcc这里举例使用了openGauss-third_party仓库的（建议使用的gcc版本为10.3.0/10.3.1）：
> 
>    wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/binarylibs/gcc10.3/openGauss-third_party_binarylibs_openEuler_2403_arm.tar.gz
> 
> 3. 解压该三方库包，得到gcc二进制路径，这里举例路径为：/home/user_name/openGauss-third_party_binarylibs_openEuler_2403_arm/buildtools/gcc10.3/gcc/lib
>
>    ```shell
>    tar -zxvf openGauss-third_party_binarylibs_openEuler_2403_arm.tar.gz
>    ```
>
> 4. 下载cmake源码包，这里举例使用了cmake官方的3.22.1版本：
>
>    wget https://github.com/Kitware/CMake/releases/download/v3.22.1/cmake-3.22.1.tar.gz
>
> 5. 解压cmake源码包，进入cmake源码目录，使用gcc10.3编译cmake：
>
>    ```shell
>    # 解压
>    tar - zxvf cmake-3.22.1.tar.gz
>    cd  cmake-3.22.1
>
>    # 配置编译器
>    export CC=/home/user_name/openGauss-third_party_binarylibs_openEuler_2403_arm/buildtools/gcc10.3/gcc/bin/gcc
>
>    export CXX=/home/user_name/openGauss-third_party_binarylibs_openEuler_2403_arm/buildtools/gcc10.3/gcc/bin/g++
>
>    export LD_LIBRARY_PATH=/home/user_name/openGauss-third_party_binarylibs_openEuler_2403_arm/buildtools/gcc10.3/isl/lib:$LD_LIBRARY_PATH
>
>    export LD_LIBRARY_PATH=/home/user_name/openGauss-third_party_binarylibs_openEuler_2403_arm/buildtools/gcc10.3/mpfr/lib:$LD_LIBRARY_PATH
>
>    # 配置
>    ./bootstrap --prefix=/home/user_name/cmake-3.22.1 --parallel=$(nproc) --no-system-libs
>
>    # 编译安装
>    make -j $(nproc)
>    make install
>
>    # 验证
>    /home/user_name/cmake-3.22.1/bin/cmake --version
>    ```
>
> 7. 验证后有版本号回显说明编译安装成功完成。在`/home/user_name/cmake-3.22.1`目录下会生成cmake的二进制文件，还需要进行如下配置即可继续后续操作流程。
>
>    ```shell
>    export PATH=/home/user_name/cmake-3.22.1/bin:$PATH
>    export LD_LIBRARY_PATH=/home/user_name/cmake-3.22.1/lib:$LD_LIBRARY_PATH
>    export CMAKEROOT=/home/user_name/cmake-3.22.1
>    ```
---

## 编译流程

在完成编译环境准备后，即可开始进行 oGRAC 版本编译与出包。

### 下载并准备第三方依赖库

oGRAC 依赖 openGauss 提供的第三方二进制库，请先下载并解压至 oGRAC 源码目录。

请注意，当前主干分支包含`master`和`1.0.0`两个分支，当前官网文档以`1.0.0`为基线进行安装部署指引。

```bash
su - [user_name]
cd [compile_path]

git clone https://gitcode.com/opengauss/oGRAC.git

cd oGRAC
# 根据所需自行切换分支
# git reset --hard origin/1.0.0
wget --no-check-certificate \
https://opengauss.obs.cn-south-1.myhuaweicloud.com/6.0.0/binarylibs/gcc10.3/openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz

tar -zxf openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz
```

> [!WARNING]注意
>
> * 请确保第三方库解压目录与源码目录同级
> * 不建议随意修改第三方库目录名称

---

### 执行编译脚本

进入 `build` 目录，通过统一编译脚本生成安装包。

> [!NOTE]说明
> * 如果是Debug版本，请关闭保护虚拟内存选项，避免在某些环境上因VM page配置问题起库失败，请执行:
> * cd [compile_path]/oGRAC/build
> * sed -i 's/DUSE_PROTECT_VM=ON/DUSE_PROTECT_VM=OFF/g' Makefile.sh

```bash
cd [compile_path]/oGRAC/build
sh build_ograc.sh [release|debug] --with-dss
```

参数说明：

* `release`：编译发布版本，适用于功能验证和交付
* `debug`：编译调试版本，包含调试符号，便于 gdb 调试
* `--with-dss`：启用 DSS 相关组件（两节点及以上部署必须）

> [!NOTE]说明
>
> * 编译过程耗时较长，请耐心等待
> * 若编译失败，请优先检查依赖是否完整

---

## 安装包产物说明

当编译成功完成后，生成的安装包将位于以下目录：

```shell
[compile_path]/oGRAC/package/
```

该目录中包含oGRAC 安装包（tar.gz 格式）,开发者可将该安装包分发至目标节点，按照对应的安装文档进行部署。

---

## 总结

至此，oGRAC 的源码编译与出包流程已完成。建议在使用安装包前，确认其对应的编译类型（release/debug）及目标部署环境是否匹配。

如需进行调试部署或集群安装，请参考对应的安装部署文档。
