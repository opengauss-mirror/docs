# 一主两备不带cm安装_容器

本章节主要介绍通过Docker安装和升级一主两备不带cm的openGauss，方便用户了解步骤。

## Docker安装一主两备不带cm的openGauss步骤

主备部署脚本和配置在路径 `https://gitee.com/opengauss/openGauss-server/tree/master/docker/deploy` 下面。

1.  以root身份登录节点。
2.  创建openGauss docker镜像(参考单节点容器安装镜像创建)

    ```
    sh buildDockerImage.sh -v 6.0.0 -i
    ```
    
3. 提前创建容器网络
   
    如果主备部署在同一个节点，创建一个容器网络就可以。
    如果部署在不同节点，需要提前配置跨节点容器网络互通。

4. 修改配置文件 og_config.ini
    
    各配置说明：

    | 配置项 | 说明 |
    | -----  |----- |
    | opengauss_image |  opengauss容器镜像名称， 如opengauss:6.0.0 |
    | dockernetwork   |  创建的容器网络名称。                     |
    | node_names      |  主备的所有容器名称信息，逗号分割。       |
    | node_ips        |  划分的主备所有容器ip信息，逗号分割。和node_names需要一一对应。 |
    | server_port_maps|  数据库容器内部端口(5432)映射到宿主机上的端口，逗号分割。和node_names需要一一对应。 |
    | docker_vols     |  数据目录映射到宿主机上的路径，逗号分割。和node_names需要一一对应。 |
    | ogpassword      |  管理用户密码。需要包含大小写字母、数字、特殊字符至少3种，长度在8-16位。 |



5. 启动主机

    ```
    sh og_docker_deploy.sh -m primary -node node1 -f ./og_config.ini 
    ```


    **-m**  指定该实例的角色。 primary 或 standby。 先启动一个主机，在启动多个备机。

    **-node** 指定容器的名称。对应于配置文件里面的node_names。各个节点不同。
    
    **-f** 指定配置文件。

    **备注**
    
    如果只有一个节点，则启动后是单机模式。当然，单机也可以快速启动：
    ```
    docker run --name opengauss --net=ognetwork --privileged=true -p 8000:5432 -d -e GS_PASSWORD=Test@123 -v /data/ogvol:/var/lib/opengauss opengauss:6.0.0
    ```


6. 启动备机

    有几个备机就需要拉起几个：

    ```
    ## 备机节点2
    sh og_docker_deploy.sh -m standby -node node2 -f ./og_config.ini

    ## 备机节点3
    sh og_docker_deploy.sh -m standby -node node3 -f ./og_config.ini
    ```

7. 查询
   
   在指定的容器名称里面查询实例状态：
    ```
    docker exec node1 su - omm -c "gs_ctl query -D /var/lib/opengauss/data"
    ```
    
## Docker升级一主两备不带cm的openGauss步骤

1.  以root身份登录节点。
2.  创建一主两备不带cm容器集群(参考上述安装步骤)
3.  创建希望升级版本的openGauss docker镜像
4.  准备升级工具目录及新包(以数据库3.0.5升级6.0.0为例)

    创建upgrade目录，在upgrade目录中将新版本升级脚本和版本文件放在其中，即复制目标版本号目录下的upgrade_sql.*、version.cfg到pkg_new下
    
    以`/opt/test/docker/upgrade`路劲为例，该目录下有以下文件和目录：

    ```
    pkg_new
    README.md
    upgrade_common.sh
    upgrade_errorcode.sh
    upgrade.sh
    ```
    
    `/opt/test/docker/upgrade/pkg_new`路径下为：

    ```
    upgrade_sql.sha256
    upgrade_sql.tar.gz
    version.cfg
    ```
    
6.  将升级工具包拷贝到容器内

    ```
    docker cp /opt/test/docker/upgrade dn_6001:/var/lib/opengauss/
    docker exec dn_6001 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6001 ls -al /var/lib/opengauss/upgrade
    
    docker cp /opt/test/docker/upgrade dn_6002:/var/lib/opengauss/
    docker cp /opt/test/docker/upgrade dn_6003:/var/lib/opengauss/
    
    docker exec dn_6002 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6002 ls -al /var/lib/opengauss/upgrade
    
    docker exec dn_6003 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6003 ls -al /var/lib/opengauss/upgrade
    ```
    
7.  所有节点执行前置升级

    ```
    docker exec dn_6001 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"

    docker exec dn_6002 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"

    docker exec dn_6003 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"
    ```
    
8.  停掉所有容器

    ```
    docker exec dn_6003 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    docker exec dn_6002 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    docker exec dn_6001 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    ```
    
9.  启动新版本容器并执行

    分别开3个窗口执行，不要退出，后续还需要在这里执行

    ```
    docker run --network net_305 --ip 172.11.0.101 --privileged=true --name dn_6001_600 -h dn_6001 -p 4432:4432 -v /opt/test/dn_6001:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"

    docker run --network net_305 --ip 172.11.0.102 --privileged=true --name dn_6002_600 -h dn_6002 -p 6432:6432 -v /opt/test/dn_6002:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"

    docker run --network net_305 --ip 172.11.0.103 --privileged=true --name dn_6003_600 -h dn_6002 -p 7432:7432 -v /opt/test/dn_6003:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"
    ```
    
10. 所有节点执行后置升级

    ```
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_post"
    ```
    
11. 回退操作(可选)

    在新版本容器中

    ```
    #已执行upgrade_post动作
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_post"

    #已执行upgrade_bin动作
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_bin"
    ```
    
    退出新版本容器，通过`docker ps -a`命令找到旧版本容器`CONTAINER ID`

    ```
    #启动旧版本容器
    docker start <CONTAINER ID>
    
    #进入容器
    docker exec -ti <CONTAINER ID> /bin/bash
    
    #已执行upgrade_pre动作
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_pre"
    ```

12. 升级提交

    ```
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_commit"
    ```
