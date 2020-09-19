# 在docker上安装openGuass
Docker构建文件，方便DevOps用户的安装、配置和环境设置。

## 怎么创建和运行
这个项目提供了简单的 Dockerfiles for:

 * openGauss_1.0.0

构建docker镜像，可以用 [buildDockerImage.sh](dockerfiles/buildDockerImage.sh) 脚本. 下边是说明和帮助。

`buildDockerImage.sh` 是一个方便以用的shell脚本，提供MD5的检查，对于初学者来说更容易上手。

### 创建openGauss docker 镜像
**重要:** 你要提供openGauss二进制安装包，放到 `dockerfiles/<version>` 文件夹. 不需要解压. 二进制包可以从 [opengauss.org](https://opengauss.org/en/download.html)下载,  确保有正确的yum源. 如果你手动解压安装包会导致运行失败!

在创建镜像前请确保提供了正确的二进制安装包并把他们放到了正确的文件夹 进入 **dockerfiles** 文件夹  运行 **buildDockerImage.sh** 脚本:

    [root@localhost dockerfiles]$ ./buildDockerImage.sh -h
    Usage: buildDockerImage.sh -v [version]  [-i]  [Docker build option]
    Builds a Docker Image for openGauss.
      
    Parameters:
    -v: version to build
       Choose one of: 1.0.0  SingleInstance  
    -i: ignores the MD5 checksums

### 环境变量
为了更灵活的使用openGuass镜像，可以设置额外的参数。未来我们会扩充更多的可控制参数，当前版本支持以下变量的设定。

#### `GS_PASSWORD`
在你使用openGauss镜像的时候，必须设置该参数。该参数值不能为空或者不定义。该参数设置了openGauss数据库的超级用户omm以及测试用户gaussdb的密码。openGauss安装时默认会创建omm超级用户，该用户名暂时无法修改。测试用户gaussdb是在[docker-entry
point.sh]中自定义创建的用户。

openGauss镜像配置了本地信任机制，因此在容器内连接数据库无需密码，但是如果要从容器外部（其它主机或者其它容器）连接则必须要输入密码。

**openGauss的密码有复杂度要求，需要：密码长度8个字符以上，必须同时包含英文字母，数字，以及特殊符号**

#### `GS_NODENAME`

指定数据库节点名称，默认为gaussdb。

#### `GS_USERNAME`

指定数据库连接用户名，默认为gaussdb。

#### `GS_PORT`
指定数据库端口，默认为5432。


### 支持的架构和操作系统版本

x86-64 CentOS 7.6  
ARM64 openEuler 20.03 LTS


### 开启实例

```console
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 opengauss:1.0.0
```

### 从操作系统层面连接数据库

```console
$ docker run −−name opengauss −−privileged=true −d −e GSPASSWORD=secretpassword@123 \
  −p8888:5432 opengauss:1.0.0 gsql -d postgres -U gaussdb -W'secretpassword@123' \
  -h your-host-ip -p8888
```

### 数据持久化

```console
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 \
  -v /opengauss:/var/lib/opengauss opengauss:1.0.0
```


