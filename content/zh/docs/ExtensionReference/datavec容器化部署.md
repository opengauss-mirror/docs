# datavec容器化部署

本章节主要介绍使用Docker实现openGauss搭载datavec的容器化部署，简化DevOps用户的安装、配置和环境设置。

## 容器架构和操作系统版本支持<a name="zh-cn_topic_0283136491_section1017214481014"></a>

opengauss-datavec 镜像支持以下架构和操作系统版本：

-   **x86-64 openEuler 20.03 LTS**：
```bash
$ docker pull swr.cn-north-4.myhuaweicloud.com/opengauss-x86-64/opengauss-datavec:7.0.0-rc1
```

-   **ARM64 openEuler 20.03 LTS**：
```bash
$ docker pull swr.cn-north-4.myhuaweicloud.com/opengauss-aarch64/opengauss-datavec:7.0.0-rc1
```

## 验证镜像状态<a name="zh-cn_topic_0283136491_section148176206211"></a>
成功拉取镜像后，查看镜像状态：
```bash
$ docker images
```

输出示例：
```
REPOSITORY                                                             TAG                 IMAGE ID            CREATED             SIZE
swr.cn-north-4.myhuaweicloud.com/opengauss-aarch64/opengauss-datavec   7.0.0-rc1           0a41cd806e05        40 hours ago        1.07GB
```

### 修改镜像名称<a name="zh-cn_topic_0283136491_section14764166174816"></a>
使用`docker tag`命令更改镜像名称或标签：
```bash
$ docker tag swr.cn-north-4.myhuaweicloud.com/opengauss-aarch64/opengauss-datavec:7.0.0-rc1 opengauss-datavec:7.0.0-rc1
```

## 启动实例<a name="zh-cn_topic_0283136491_section148176206211"></a>

以openGauss-datavec 7.0.0-rc1 版本为例，以下命令将启动数据库并映射宿主机的端口到容器：

```bash
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=YourPassoword -p 8888:5432 opengauss-datavec:7.0.0-rc1
```
### 启动参数
-   `--name opengauss`：为容器命名为`opengauss`
-   `--privileged=true`: 授予容器特权模式
-   `-d`: 以后台模式运行容器
-   `-p 8888:5432`: 将容器的5432端口映射到宿主机的8888端口

#### 必选容器内环境变量
-   `-e GS_PASSWORD=YourPassoword`：设置数据库超级用户`omm`密码

使用 openGauss 镜像的时候，必须设置该参数，且不能为空或未定义。该参数用于设置 openGauss 数据库的超级用户`omm`。安装过程中将默认创建omm超级用户，该用户名目前无法更改。

openGauss 镜像配置了本地信任机制，因此在容器内连接数据库时无需密码，但若从容器外部（其它主机或者容器）连接，则必须要输入密码。

##### **密码要求**

-   密码长度必须至少为8个字符。
-   必须同时包含大写字母、小写字母、数字、以及特殊符号。
-   支持的特殊符号仅包含`\#?!@$%^&\*-`（其中`!$&`需使用转义符号”\“)。

#### 可选容器内环境变量
-   `-e GS_NODENAME=YourNodeName`：指定数据库节点名称，默认为`gaussdb`
-   `-e GS_USERNAME=YourUserName`：指定数据库连接用户名，默认为测试用户`gaussdb`
-   `-e GS_USERPASSWORD=YourUserPassword`：指定用户`$GS_USERNAME`密码，默认为`$GS_PASSWORD`
-   `-e GS_PORT=YourPort`：指定容器内数据库端口，默认为`5432`
-   `-e GS_DB=YourDbName`：在容器内创建数据库，默认为`postgres`

## 验证容器状态<a name="zh-cn_topic_0283136491_section148176206211"></a>
查看运行中的容器：
```bash
$ docker ps 
```
输出示例：
```
CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS              PORTS                    NAMES
4e6af13075bb        opengauss-datavec:7.0.0-rc1   "entrypoint.sh gauss…"   4 seconds ago       Up 3 seconds        0.0.0.0:8888->5432/tcp   opengauss
```

## 连接数据库<a name="zh-cn_topic_0283136491_section148176206211"></a>

### 容器内部连接数据库<a name="zh-cn_topic_0283136491_section148176206211"></a>

进入容器：
```
$ docker exec -it <CONTAINER ID> bash
```

登录`omm`超级用户，并创建`datavec`插件（仅`omm`用户有权限创建插件）：
```
$ su omm
$ gsql -d postgres -p 5432
openGauss=# create extension datavec;
```

### 从宿主机连接数据库<a name="zh-cn_topic_0283136491_section53753141964"></a>

宿主机可以通过以下命令连接数据库（需安装`gsql`客户端）：
```shell
$ gsql -d postgres -U gaussdb -W YourPassoword -h your-host-ip -p 8888 
```

## 数据持久化<a name="zh-cn_topic_0283136491_section973016196416"></a>

通过以下命令，将宿主机的`/opengauss`目录挂载到容器的`/var/lib/opengauss`目录，实现数据的持久化存储：
```bash
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=YourPassoword -v /opengauss:/var/lib/opengauss opengauss-datavec:7.0.0-rc1
```

## 参数配置<a name="zh-cn_topic_0283136491_section973016196416"></a>
容器内的配置文件路径：
```
/var/lib/opengauss/data/postgresql.conf
```

修改完配置文件后，请使用以下命令重启容器以使更改生效：
```bash
docker restart <CONTAINER ID>
```
若在容器外配置参数，需要挂载宿主机路径到容器内部的`/var/lib/opengauss`目录。

有关具体参数的修改，请参考：
**[GUC参数说明](../DatabaseReference/GUC参数说明.md)**  