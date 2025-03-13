# CM安装_容器

本章节主要介绍通过Docker安装openGauss，方便DevOps用户的安装、配置和环境设置。

## 支持的架构和操作系统版本<a name="zh-cn_topic_0283136491_section1017214481014"></a>

-   x86-64 CentOS 7.6

-   ARM64 openEuler 20.03 LTS

## CM容器化部署

### 创建openGauss docker镜像

下载openGauss-container仓库代码，构建脚本在该仓库中管理。

>-   构建镜像需要openGauss社区发布的企业版本包openGauss-All-X.X.X-CentOS7-x86_64.tar.gz，放到`openGauss-container/dockerfiles`目录下。
>-   运行buildDockerImage.sh脚本时，如果不指定-i参数，此时默认提供SHA256检查，，根据操作系统版本不同修改不同的校验文件，
     Centos： sha256_file_amd64 ，
     openEuler_aarch64： sha256_file_arm64 ，以Centos为例需要您手动将校验结果写入sha256\_file\_amd64文件。
>    ```
>    ## 修改sha256校验文件内容
>    cd `openGauss-container/dockerfiles`
>    sha256sum openGauss-All-X.X.X-CentOS7-x86_64.tar.gz > sha256_file_amd64 
>    ```

>-   对于x86平台，使用社区发布的Centos_x86_64的包；对于arm平台，使用发布的openEuler-arm版本企业包。

构建命令：
```
sh buildDockerImage.sh -v X.X.X -i
```
>![](public_sys-resources/icon-note.png) **说明：**
> 默认创建版本为6.0.0，如需构建6.0.0之后版本，进入dockerfiles目录下修改对应dockerfile_arm或dockerfile_amd中 ENV OPENGAUSS_VERSION 6.0.0为需要版本。
> 因包名变更，如需创建6.0.0之前版本需修改文件中包名称为对应的版本包名。

### 使用社区发布的镜像

最新的容器镜像：

x86_64平台：
```
docker pull swr.cn-south-1.myhuaweicloud.com/opengauss/x86_64/opengauss:X.X.X
docker tag swr.cn-south-1.myhuaweicloud.com/opengauss/x86_64/opengauss:X.X.X opengauss:X.X.X
```

arm平台:
```
docker pull swr.cn-south-1.myhuaweicloud.com/opengauss/arm/opengauss:X.X.X
docker tag swr.cn-south-1.myhuaweicloud.com/opengauss/arm/opengauss:X.X.X opengauss:X.X.X
```

### 启动容器

搭建CM集群至少需要两个容器实例才能使用。

1. 创建容器网络

##### 如果多个容器部署在一台机器上，创建一个普通的容器网络即可：
`docker network create --subnet=172.11.0.0/24 og-network`

##### 如果容器跨多个节点部署，即要求节点间的容器能够进行通信。业界有多种实现方式，这里提供一种作为参考，用户可以自行选择。

选择一台部署progrium/consul容器：
```
docker pull progrium/consul
docker run -d -p 8500:8500 -h consul --name consul progrium/consul -server -bootstrap
```

每个节点的docker都进行修改：
vim /usr/lib/systemd/system/docker.service
在ExecStart一栏后面追加：
```
-H tcp://0.0.0.0:2376 -H unix:///var/run/docker.sock --cluster-store=consul://192.168.0.94:8500 --cluster-advertise=eth0:2376
```
**192.168.0.94** 是部署consul的机器ip。

修改完成后需要重启docker：
```
systemctl daemon-reload
systemctl restart docker
```

创建overlay网络
```
docker network create -d overlay --subnet 10.22.1.0/24  --gateway 10.22.1.1 og-network
```

2. 启动多个容器实例
   
```
# ip需要和容器网络在同一网段，几个实例的ip和节点名称不能重复。如下示例1主2备：

primary_nodeip="172.11.0.2"
standby1_nodeip="172.11.0.3"
standby2_nodeip="172.11.0.4"
primary_nodename=primary
standby1_nodename=standby1
standby2_nodename=standby2

OG_NETWORK=og-network
GS_PASSWORD=test@123

# 启动实例1 
docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-01 --net ${OG_NETWORK} --ip "$primary_nodeip" -h=$primary_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X 

# 启动实例2
docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-02 --net ${OG_NETWORK} --ip "$standby1_nodeip" -h=$standby1_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X

# 启动实例3
docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-03 --net ${OG_NETWORK} --ip "$standby2_nodeip" -h=$standby2_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X
```

3. 使用脚本快速启动1主2备的cm集群容器实例

在`openGauss-container`目录下，执行`sh create_cm_contariners.sh`

```
This script will create three containers with cm on a single node. \n
Please input OG_SUBNET (容器所在网段) [172.11.0.0/24]: 
OG_SUBNET set 172.11.0.0/24
Please input OG_NETWORK (容器网络名称) [og-network]: 
OG_NETWORK set og-network
Please input GS_PASSWORD (定义数据库密码)[test@123]: 
GS_PASSWORD set
Please input openGauss VERSION [X.X.X]: 
openGauss VERSION set X.X.X
starting  create docker containers...
```

会让填入容器网段、容器网络名称、数据库密码、容器版本号。使用默认值得话可以直接回车跳过。
脚本执行完成后，会拉起3个容器实例，组成1主2备的cm集群。

### 进入容器中查看实例状态

1. 进入容器
```
docker exec -ti <containerid> /bin/bash
su - omm
```

2. 查看集群状态
```
cm_ctl query -Cvid
```

3. 连接接数据库
```
gsql -d postgres -r
```

>**说明**
>
>- 1. 构建的容器需要包含操作系统层
>
>- 2. 容器内仅提供CM和数据库内核工具，OM工具无法使用

