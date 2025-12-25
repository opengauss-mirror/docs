# 容器化单节点安装 oGRAC

这里我们提供一个基于 Docker 的安装方式，基于的操作系统为 openEuler 22.03 LTS。

## 1.下载 docker 镜像

```shell
wget https://repo.openeuler.org/openEuler-22.03-LTS/docker_img/aarch64/openEuler-docker.aarch64.tar.xz

docker load < ./openEuler-docker.aarch64.tar.xz
```

## 2. 启动 docker

```shell
docker run --name mirror_name -itd -v /home/uer_name/docker/data:/home --privileged=true --network=host --shm-size=128g IMAGE_ID
```

- -v 是 docker 的挂载，将宿主机的 `/home/uer_name/docker/data` 目录挂载到容器内的 `/home` 目录下
- --shm-size 是 docker 的共享内存大小，这里设置为 128g，建议不要小于128g
- IMAGE_ID 是 docker 镜像的 ID，可以通过 `docker images` 查看

## 3. Docker 镜像内配置

需要配置http代理、git代理(非编译安装不需要)，这里不做详细说明，详情参考git官网等。

3.1 若为编译安装则还需安装依赖：
```shell
yum install -y libaio-devel openssl openssl-devel ndctl-devel \
ncurses ncurses-devel libtirpc-devel expect ant bison iputils \
iproute wget make gcc gcc-c++ gdb gdb-gdbserver python3 python3-devel \
git net-tools cmake automake byacc libtool git unzip vim --skip-broken
```

3.2 若为安装包安装则还需安装依赖：
```bash
yum install -y wget python3 python3-devel iputils iproute --skip-broken
```

## 4. 查看镜像文件

在 root 用户下输入：

```shell
docker images
```

正常情况下会回显如下信息：

```shell
REPOSITORY    TAG        TMAGE ID        CREATED                 SIZE
mirror_name   lastest    xxxx            About a minute ago      3.71GB
```

## 5. 与容器的交互操作

5.1 创建并进入新的容器

```shell
docker run -it --name=mirror_namenode mirror_name /bin/bash
```

--name=mirror_namenode表示规定容器的名字是什么；

mirror_name表示以哪个镜像实例化

5.2 退出并关闭容器

```shell
exit
```

5.3 开启关闭的容器

```shell
docker start mirror_namenode
```

这里输入 TMAGE ID 也可以的。

5.4 删除关闭的容器

```shell
docker rm mirror_namenode
```

这里输入 TMAGE ID 也可以的。

5.5 进入开启中的容器

```shell
docker exec -it mirror_namenode /bin/bash
```

## 6. 编译 oGRAC

经过上述步骤已经解决了从创建镜像到进入容器的过程，接下来就要在容器内编译安装 oGRAC 了。

6.1 下载文件

下载地址为

```shell
git clone https://gitcode.com/opengauss/oGRAC.git
```

6.2 修改 Makefile.sh

目录路径为

使用下面命令替换文件里的USE_PROTECT_VM=ON为USE_PROTECT_VM=OFF

```shell
sed -i 's+USE_PROTECT_VM=ON+USE_PROTECT_VM=OFF+' Makefile.sh
```

6.3 编译安装 oGRAC

在 build 目录下执行下面的命令进行编译安装，示例为编译的 debug 版本，不指定 -b 默认是编译 release 版本；-u 指定安装用户名

```shell
sh local_install.sh prepare

sh local_install.sh compile -b debug

sh local_install.sh install -u user_name
```

至此容器内已编译安装好 oGRAC，后续可以根据需要进行配置和使用。

## 7. 其他补充

在docker容器内除了上述的编译安装oGRAC，还可以使用安装包进行安装。

可以在[openGauss官网](https://docs.opengauss.org/zh/)的`下载`页面进行安装包的下载获取。

下载安装包后，使用tar解压安装包，然后进入`oGRAC/build`目录下，之后执行`sh local_install.sh install -u user_name`即可。