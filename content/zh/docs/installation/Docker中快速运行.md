# Docker中快速运行<a name="ZH-CN_TOPIC_0249784529"></a>

Docker中快速运行适合于想快速体验OpenGauss操作的用户.使用Docker在容器中运行OpenGauss,简单易操作，不需要考虑环境配置问题，windows下也可以快速体验。

## 操作步骤

### 安装Docker

a.进入Docker官网[https://www.docker.com/get-started](https://www.docker.com/get-started)

b.在"Docker Desktop"处点击"Download"

c.双击下载下来的exe文件按指示完成安装(需要重启电脑)

>![](public_sys-resources/icon-note.png) **说明：** 

> 部分电脑安装Docker完成后，Docker启动时会弹出提示“WSL 2 installation is incomplete.”，这时点击提示框内的链接，按照链接中的网页进行操作完成后，点击“Restart”即可

### 运行OpenGauss容器

a.在开始菜单输入PowerShell，进入Windows PowerShell；或者输入cmd，进入命令提示符。输入：


```
docker run --name opengauss --privileged=true -d -e GS_PASSWORD=Secretpassword@123 -p 15432:5432 enmotech/opengauss:latest
```

运行命令后容器即开启。
输入命令进入OpenGauss容器:

```
docker exec -it opengauss /bin/sh
```

### 测试使用OpenGauss
进入容器后可以输入命令开始体验

以管理员omm用户登录

```
su - omm
```
连接数据库：

```
gsql
```
连接后显示如下信息:

```
gsql ((openGauss 2.1.0 build 590b0f8e) compiled at 2021-09-30 14:29:04 commit 0 last mr  )
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

omm=#
```
这时候可以操作管理数据库，比如列举数据库

```
omm=# \l
```
输出信息:

```
                              List of databases
   Name    | Owner | Encoding |   Collate   |    Ctype    | Access privileges
-----------+-------+----------+-------------+-------------+-------------------
 omm       | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 postgres  | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0 | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/omm           +
           |       |          |             |             | omm=CTc/omm
 template1 | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/omm           +
           |       |          |             |             | omm=CTc/omm
(4 rows)
```
断开数据库连接:

```
omm=# \q
```


更多此OpenGauss镜像的配置细节及用法，参考[enmotech/opengauss镜像主页](https://hub.docker.com/r/enmotech/opengauss)