# 搭建编译环境

## 1. 系统初始化

关闭 SELinux 和防火墙：

```shell
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

## 2. 创建目录和用户

```shell
mkdir -p compile_path
chmod 755 -R compile_path
useradd user_name
passwd user_password
chown -R user_name:user_name compile_path
```

## 3. 安装必要依赖

```shell
yum install -y libaio-devel openssl openssl-devel ndctl-devel \
ncurses ncurses-devel libtirpc-devel expect ant bison iputils \
iproute wget make gcc gcc-c++ gdb gdb-gdbserver python3 python3-devel \
git net-tools cmake automake byacc libtool --skip-broken
```
