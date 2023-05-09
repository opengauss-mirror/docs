# gs\_upgradectl

## 背景信息<a name="zh-cn_topic_0287275999_zh-cn_topic_0237152425_zh-cn_topic_0059779035_sca8f0f932903424f8ce649c929720f23"></a>

用户根据openGauss提供的新特性和数据库现状，确定是否对现有系统进行升级。

当前支持的升级模式为就地升级和灰度升级。升级方式的策略又分为大版本升级和小版本升级。

用户挑选升级方式后，系统会自动判断并选择合适的升级策略。

就地升级：升级期间需停止业务进行，一次性升级所有节点。

灰度升级：灰度升级支持全业务操作，也是一次性升级所有节点（openGauss1.1.0版本之后的版本支持该功能）。

滚动升级：滚动升级支持全业务操作，可先升级部分指定节点，在升级剩余节点（openGauss3.1.0版本之后的版本支持该功能）。

## 注意事项<a name="zh-cn_topic_0287275999_zh-cn_topic_0237152425_zh-cn_topic_0059779035_s706621cd98574d11aa38de2448930953"></a>

-   升级操作不能和扩容、缩容同时执行。
-   不支持虚拟IP。
-   升级过程中，不允许对wal\_level、max\_connections、max\_prepared\_transactions、max\_locks\_per\_transaction这四个GUC参数的值进行修改。如果修改，会导致回滚后实例启动异常。
-   建议在数据库系统空闲情况下进行升级，尽量避开业务繁忙的时间段（可按照经验判断，如节假日等）。
-   升级前尽可能保证数据库正常。可以通过gs\_om -t status查询，查询结果的cluster\_state为Normal代表数据库正常。
-   升级前保证数据库互信正常，可以在任意节点上，通过ssh hostname命令，连接另外一个节点进行验证。如果各机器间互连不用输入密码，说明互信正常（通常数据库状态正常时，互信一般都是正常的）。
-   升级前后，数据库的部署方式（配置文件）不能发生变化。升级前会对部署方式进行校验，如果改变，会报错。
-   升级前要保证操作系统处于健康状态，通过gs\_checkos工具可以完成操作系统状态检查。
-   就地升级需要停止业务，灰度升级支持全业务操作。
-   数据库运行正常且主数据库节点的数据完全同步到备数据库节点。
-   升级过程中不允许打开kerberos开关。
-   请不要修改安装包中解压出来的version.cfg文件。
-   如果升级过程中出现异常导致升级失败，需用户手动回滚，并且必须回滚成功后才能进行下一次升级。
-   如果升级回滚成功后，再次升级成功，未提交阶段设置的GUC参数将失效。
-   执行升级的过程中请不要手动设置GUC参数。
-   灰度升级中，升级的时候都会产生不超过10s的业务中断。
-   升级过程中，必须保持内核版本与om版本一致才可执行om操作。这里的一致是指，内核代码和om代码都来自同一个软件包。如果执行了升级包的前置脚本却没有升级，或者升级回滚后没有执行基线包的前置脚本，就会造成内核代码和om代码的不一致。
-   升级过程中如果系统表新增了字段，升级后通过**\\d**命令将查看不到这些新增的字段。此时通过**select**命令可以查到这些新增的字段。
-   升级需要guc参数enable\_stream\_replication=on，该参数为off时不允许升级。
-   灰度升级中， 业务并发要小于200并发读加200并发写的情况。
-   建议数据库节点磁盘使用率低于80%时再执行升级操作。
-   执行gs_upgradectl -t auto-upgrade 之后，没有提交之前，不能执行快照生成，即升级过程中不能执行快照生成。

## 语法<a name="zh-cn_topic_0287275999_zh-cn_topic_0237152425_zh-cn_topic_0059779035_sa2c64f98e27946438ecbbb724ca673da"></a>

-   显示帮助信息

    ```
    gs_upgradectl -? | --help
    ```

-   显示版本号信息

    ```
    gs_upgradectl -V | --version
    ```

-   选择升级策略

    ```
    gs_upgradectl -t chose-strategy [-l LOGFILE]
    ```

-   自动升级openGauss

    ```
    gs_upgradectl -t auto-upgrade -X XMLFILE  [-l LOGFILE] [--grey]
    ```

-   自动回滚升级

    ```
    gs_upgradectl -t auto-rollback -X XMLFILE [-l LOGFILE] [--force]
    ```

-   升级提交

    ```
    gs_upgradectl -t commit-upgrade -X XMLFILE [-l LOGFILE]
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   一旦提交操作完成，则不能再执行回滚操作。


## 参数说明<a name="zh-cn_topic_0287275999_zh-cn_topic_0237152425_zh-cn_topic_0059779035_sdad8716000e7427a84d26645630bb309"></a>

-   -t

    gs\_upgradectl命令的类型。

    取值范围：chose-strategy、auto-upgrade、auto-rollback和commit-upgrade。

-   -l

    用于记录升级或回滚过程中的日志信息。

    取值范围：任意存在的可访问的绝对路径。

    默认值：/var/log/gaussdb/用户名/om/gs\_upgradectl-YYYY-MM-DD\_hhmmss.log

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。

-   -X

    指定openGauss配置文件。

    取值范围：xml文件的存储路径。

-   --grey

    使用灰度升级方式来进行升级操作。

-   -h
    升级部分指定节点，必须与--grey连用。

    Value range: 单节点 or 多节点

-   --continue

    升级剩余节点, 必须与--grey连用。

-   --force

    当openGauss状态不正常，无法支持正常回滚时，用此参数进行强制回滚操作。


## 示例<a name="zh-cn_topic_0287275999_zh-cn_topic_0237152425_zh-cn_topic_0059779035_s6c0afe9e35134c4c9959768123dad038"></a>

**示例一**：升级前使用新包进行前置操作。

```
./gs_preinstall -U roach -G users -X /data/xml/3node_3c3d_1m2s_etcd.xml 
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Setting pssh path
Successfully set core path.
Distributing package.
Begin to distribute package to tool path.
Successfully distribute package to tool path.
Begin to distribute package to package path.
Successfully distribute package to package path.
Successfully distributed package.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting pssh path
Successfully set pssh path.
Setting Cgroup.
Successfully set Cgroup.
Set ARM Optimization.
Successfully set ARM Optimization.
Preinstalling secbox.
Successfully installed secbox.
Setting finish flag.
Successfully set finish flag.
PreInstallationGuide succeeded.
```

**示例二：**使用gs\_upgradectl脚本执行就地升级。

```
gs_upgradectl -t upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml 
Static configuration matched with old static configuration files.
Performing inplace rollback.
Rollback succeeded.
Checking upgrade environment.
Successfully checked upgrade environment.
Successfully checked upgrade environment.
Successfully started cluster.
Start to do health check.
Successfully checked cluster status.
Backing up current application and configurations.
Successfully backed up current application and configurations.
Stopping the cluster.
Successfully stopped cluster.
Backing up cluster configuration.
Successfully backup hotpatch config file.
Successfully backed up cluster configuration.
Installing new binary.
Restoring cluster configuration.
Successfully restored cluster configuration.
Modifying the socket path.
Successfully modified socket path.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Successfully started cluster.
Start to do health check.
Successfully checked cluster status.
Upgrade main process has been finished, user can do some check now.
Once the check done, please execute following command to commit upgrade:

    gs_upgradectl -t commit-upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml
```

**示例三：**使用gs\_upgradectl脚本执行自动回滚，撤销已经成功/失败的升级操作（升级回滚）。

```
gs_upgradectl -t auto-rollback -X /data/xml/3node_3c3d_1m2s_etcd.xml
Static configuration matched with old static configuration files.
Performing inplace rollback.
Checking static configuration files.
Successfully checked static configuration files.
Restoring cluster configuration.
Successfully rollback hotpatch config file.
Successfully restored cluster configuration.
Switch symbolic link to old binary directory.
Successfully switch symbolic link to old binary directory.
Stopping the cluster.
Successfully stopped cluster.
Restoring application and configurations.
Successfully restored application and configuration.
Restoring cluster configuration.
Successfully rollback hotpatch config file.
Successfully restored cluster configuration.
Successfully started cluster.
Successfully cleaned new install path.
Rollback succeeded.
```

**示例四：**使用gs\_upgradectl脚本执行升级后提交（升级提交）。

```
gs_upgradectl -t commit -X /data/xml/3node_3c3d_1m2s_etcd.xml
Old cluster app path is /data/gauss/app_e67b8bcd
Successfully Cleaned old install path.
Commit binary upgrade succeeded.
```

**示例五：**使用gs\_upgradectl脚本执行滚动升级。.

升级部分指定节点
```
gs_upgradectl -t auto-upgrade -X /data/node2.xml --grey -h hostname0
Static configuration matched with old static configuration files.
Successfully set upgrade_mode to 0.
Checking upgrade environment.
Successfully checked upgrade environment.
Start to do health check.
Successfully checked cluster status.
Upgrade nodes ['hostname0'].
NOTICE: The directory /data/install/app_oldcommitid will be deleted after commit-upgrade, please make sure there is no personal data.
Performing grey rollback.
No need to rollback.
The directory /data/install/app_oldcommitid will be deleted after commit-upgrade, please make sure there is no personal data.
Installing new binary.
copy certs from /data/install/app_oldcommitid to /data/install/app_newcommitid.
Successfully copy certs from /data/install/app_oldcommitid to /data/install/app_newcommitid.
Successfully backup hotpatch config file.
Sync cluster configuration.
Successfully synced cluster configuration.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Switching all db processes.
Check cluster state.
Create checkpoint before switching.
Switching DN processes.
Ready to grey start cluster.
Grey start cluster successfully.
Wait for the cluster status normal or degrade.
Successfully switch all process version
The nodes ['hostname0'] have been successfully upgraded to new version. Then do health check.
Start to do health check.
Successfully checked cluster status.
The nodes ['hostname0']ve been successfully upgraded.Then can upgrade the remaining nodes.
```

升级剩余节点
```
gs_upgradectl -t auto-upgrade -X /data/node2.xml --grey --continue
Static configuration matched with old static configuration files.
Checking upgrade environment.
['hostname0'] node have been upgrade, can upgrade the remaining nodes.
Successfully checked upgrade environment.
Start to do health check.
Successfully checked cluster status.
Successfully backup hotpatch config file.
Sync cluster configuration.
Successfully synced cluster configuration.
Switch symbolic link to new binary directory.
Successfully switch symbolic link to new binary directory.
Switching all db processes.
Check cluster state.
Create checkpoint before switching.
Switching DN processes.
Ready to grey start cluster.
Grey start cluster successfully.
Wait for the cluster status normal or degrade.
Successfully switch all process version
The nodes ['hostname1'] have been successfully upgraded to new version. Then do health check.
Start to do health check.
Successfully checked cluster status.
Waiting for the cluster status to become normal.
.
The cluster status is normal.
Create checkpoint before switching.
Upgrade main process has been finished, user can do some check now.
Once the check done, please execute following command to commit upgrade:

gs_upgradectl -t commit-upgrade -X /data/node2.xml
Successfully upgrade all nodes.
```

**示例六：**使用gs\_upgradectl脚本执行集群管理组件增量升级。
```
gs_upgradectl -t upgrade-cm --upgarde-package /data/openGauss-3.1.0-CentOS-64bit-cm.tar.gz
Start ot perform the upgrade of CM component in cluster.
Ready to transform CM package to all nodes.
Send CM package to all nodes successfully.
Start to record origin cluster state.
cluster origin state is : [Normal]
Start to prepare CM componet files on all nodes.
Prepare upgrade CM component files successfully.
Start to upgrade CM component on all nodes.
Upgrade CM component files successfully.
Finial check cluster:
Cluster state check unavailale.
Cluster state is : [Normal]
Cluster state is : [Normal]
Cluster state is : [Normal]
The cluster status check is available.
Upgrade CM component successfully.
