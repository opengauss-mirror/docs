# 编译安装

## 1. 环境准备

### 1.1 系统初始化

关闭 SELinux 和防火墙：

```bash
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

### 1.2 创建目录和用户

```bash
mkdir -p [compile_path]
chmod 755 -R [compile_path]
useradd [user_name]
passwd [user_password]
chown -R [user_name]:[user_name] [compile_path]
```

### 1.3 安装必要依赖

```bash
yum install -y libaio-devel openssl openssl-devel ndctl-devel \
ncurses ncurses-devel libtirpc-devel expect ant bison iputils \
iproute wget make gcc gcc-c++ gdb gdb-gdbserver python3 python3-devel \
git net-tools cmake automake byacc libtool --skip-broken
```

---

## 2. 源码获取与编译

### 2.1 获取源码

```bash
cd [compile_path]
git clone https://gitcode.com/openGauss/oGRAC.git
```

### 2.2 修改编译配置

如需关闭保护虚拟内存选项(如果编译安装的是debug版本建议关闭保护虚拟内存选项)：

```bash
cd oGRAC/build
sed -i 's/DUSE_PROTECT_VM=ON/DUSE_PROTECT_VM=OFF/g' Makefile.sh
```

---

## 3. 编译与安装流程

### 3.1 准备编译环境

安装所有编译、运行 oGRAC 所需依赖。

```bash
sh local_install.sh prepare
```

### 3.2 编译

```bash
sh local_install.sh compile -b debug
```

- `-b, --build_type=<type>`：指定编译类型（release/debug，默认 release）
- `-d, --deps=no`：不编译依赖

编译产物目录：`oGRAC/oGRAC-DATABASE-*-64bit`

### 3.3 安装

```bash
sh local_install.sh install -u [user_name]
```

- `-u, --user=<user>`：指定安装和运行的系统用户，默认 `ogracdba`

安装过程包括：

- 创建用户及home目录（如不存在）
- 停止旧进程、清理旧数据
- 创建数据目录
- 执行 `install.py` 进行初始化

常用 `install.py` 参数说明：

| 参数                 | 默认值                                | 说明                       |
| ---------------------| ------------------------------------ | -------------------------- |
| -U <user:group>      | ogracdba:ogracdba                    | 安装运行的系统用户和组       |
| -R <install_path>    | '/home/ogracdba/install'             | 软件安装路径               |
| -D <data_path>       | '/home/ogracdba/data'                | 数据文件存放路径           |
| -l <log_path>        | '/home/ogracdba/logs/install.log'    | 安装日志文件路径           |
| -M <mode>            | ogracd_in_cluster                    | 运行模式，ogracd：单机模式；ogracd_in_cluster：集群模式  |
| -N 0                 | 0                                    | 节点 ID，只能是0或1        |
| -W <IP>              | 192.168.0.1                          | 配置数据库IP白名单         |
| -g withoutroot       | withoutroot                          | 表示无root权限允许安装脚本，但必须对安装文件夹有权限，参数值只能为withoutroot，若要使用必须精确使用“-g withoutroot”         |
| -d                   | 无参数值                              | 表示在后台运行                   |
| -c                   | 无参数值                              | 标识不使用基于SSL的安全连接，自动进行配置                   |
| -Z _SYS_PASSWORD=... | _SYS_PASSWORD=huawei@1234            | 管理员账号默认密码，建议自行修改配置   |
| -Z SESSIONS=...     | SESSIONS=1000                        | 最大会话数                 |

经过上述步骤已编译安装好 oGRAC，后续可以根据需要进行配置和使用。

### 3.4 卸载与清理

停止服务并删除数据、安装目录及相关环境变量。

```bash
sh local_install.sh clean -u [user_name]
```