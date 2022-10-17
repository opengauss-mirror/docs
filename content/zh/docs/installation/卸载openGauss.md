# 卸载openGauss<a name="ZH-CN_TOPIC_0249784556"></a>

卸载openGauss的过程包含卸载openGauss和对openGauss服务器的环境做清理。

## 执行卸载<a name="section1229131371816"></a>

openGauss提供了卸载脚本帮助用户完整的卸载openGauss。

**操作步骤**

1.  以操作系统用户omm登录数据库主节点。
2.  使用gs\_uninstall卸载openGauss。

    ```
    gs_uninstall --delete-data
    ```

    或者在openGauss中每个节点执行本地卸载。

    ```
    gs_uninstall --delete-data -L
    ```


**示例**

使用gs\_uninstall脚本进行卸载openGauss。

```
gs_uninstall --delete-data
Checking uninstallation.
Successfully checked uninstallation.
Stopping the cluster.
Successfully stopped the cluster.
Successfully deleted instances.
Uninstalling application.
Successfully uninstalled application.
Uninstallation succeeded.
```

单机卸载场景使用gs\_uninstall脚本进行卸载。

```
gs_uninstall --delete-data
Checking uninstallation.
Successfully checked uninstallation.
Stopping the cluster.
Successfully stopped the cluster.
Successfully deleted instances.
Uninstalling application.
Successfully uninstalled application.
Uninstallation succeeded.
```

**错误排查**

如果卸载失败请根据“$GAUSSLOG/om/gs\_uninstall-YYYY-MM-DD\_HHMMSS.log”中的日志信息排查错误。

## 一键式环境清理<a name="section17735130132112"></a>

在openGauss卸载完成后，如果不需要在环境上重新部署openGauss，可以运行脚本gs\_postuninstall对openGauss服务器上环境信息做清理。openGauss环境清理是对环境准备脚本gs\_preinstall所做设置的清理。

**前提条件**

-   openGauss卸载执行成功。
-   root用户互信可用。
-   只能使用root用户执行gs\_postuninstall命令。

**操作步骤**

1. 以root用户登录openGauss服务器。

2. 查看root用户互信是否建立，如果root用户没有建立互信，需要手工建立root用户互信，操作请参考[手工建立互信](初始化安装环境.md)。

   查看互信是否建成功，可以互相ssh主机名。输入exit退出。

   ```
   plat1:~ # ssh plat2 
   Last login: Tue Jan  5 10:28:18 2016 from plat1 
   Huawei's internal systems must only be used for conducting Huawei's business or for purposes authorized by Huawei management.Use is subject to audit at any time by Huawei management. 
   plat2:~ # exit 
   logout 
   Connection to plat2 closed. 
   plat1:~ # 
   ```

3. 进入script路径下。

   ```
   cd /opt/software/openGauss/script
   ```

4. 使用gs\_postuninstall进行清理。若为环境变量分离的模式安装的数据库需要source环境变量分离文件ENVFILE。

   ```
   ./gs_postuninstall -U omm -X /opt/software/openGauss/cluster_config.xml --delete-user --delete-group
   ```

   或者在openGauss中每个节点执行本地后置清理。

   ```
   ./gs_postuninstall -U omm -X /opt/software/openGauss/cluster_config.xml --delete-user --delete-group -L
   ```

   omm为运行openGauss的操作系统用户名，/opt/software/openGauss/cluster\_config.xml为openGauss配置文件路径。

   若为环境变量分离的模式安装的数据库需删除之前source的环境变量分离的env参数。

   ```
   unset MPPDB\_ENV\_SEPARATE\_PATH
   ```

5. 删除openGauss数据库各节点root用户的互信，操作参考[手工建立互信](初始化安装环境.md)的删除root用户互信部分内容。

6. 注销root用户。

**示例**

清理主机的环境。

```
gs_postuninstall -U omm -X /opt/software/openGauss/cluster_config.xml --delete-user
Parsing the configuration file.
Successfully parsed the configuration file.
Check log file path.
Successfully checked log file path.
Checking unpreinstallation.
Successfully checked unpreinstallation.
Deleting Cgroup.
Successfully deleted Cgroup.
Deleting the instance's directory.
Successfully deleted the instance's directory.
Deleting the installation directory.
Successfully deleted the installation directory.
Deleting the temporary directory.
Successfully deleted the temporary directory.
Deleting remote OS user.
Successfully deleted remote OS user.
Deleting software packages and environmental variables of other nodes.
Successfully deleted software packages and environmental variables of other nodes.
Deleting logs of other nodes.
Successfully deleted logs of other nodes.
Deleting software packages and environmental variables of the local node.
Successfully deleted software packages and environmental variables of the local nodes.
Deleting local OS user.
Successfully deleted local OS user.
Deleting local node's logs.
Successfully deleted local node's logs.
Successfully cleaned environment.
```

**错误排查**

如果一键式环境清理失败请根据“$GAUSSLOG/om/gs\_postuninstall-YYYY-MM-DD\_HHMMSS.log”中的日志信息排查错误。

