# gs\_upgradectl<a name="ZH-CN_TOPIC_0249632241"></a>

## 背景信息<a name="zh-cn_topic_0237152425_zh-cn_topic_0059779035_sca8f0f932903424f8ce649c929720f23"></a>

用户会根据openGauss提供的新特性，确定是否对现有系统进行升级。

升级方式为就地小版本升级。

就地小版本升级：就地升级需要停止业务进行，会一次性升级openGauss中所有节点。

## 注意事项<a name="zh-cn_topic_0237152425_zh-cn_topic_0059779035_s706621cd98574d11aa38de2448930953"></a>

-   升级需要停止业务。
-   openGauss运行正常且数据库节点的数据完全同步。
-   升级过程中不允许打开kerberos开关。
-   请不要修改安装包中解压出来的version.cfg文件。
-   升级成功后，原归档日志文件将失效。
-   升级成功后，原来的二进制目录将会被删除，请不要在二进制目录中存放个人数据文件。
-   如果升级过程中出现异常导致升级失败，并且自动回滚失败时，需要用户自动执行回滚命令进行手动回滚。升级回滚成功后，升级过程中设置的GUC参数将失效。
-   升级过程中，不允许对wal\_level，max\_connections，max\_prepared\_transactions，max\_locks\_per\_transaction这四个GUC参数的值进行修改。
-   数据库节点磁盘使用率低于50%时才可以执行升级操作。

## 语法<a name="zh-cn_topic_0237152425_zh-cn_topic_0059779035_sa2c64f98e27946438ecbbb724ca673da"></a>

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

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >当前支持就地小版本升级。

-   自动升级openGauss

    ```
    gs_upgradectl -t auto-upgrade -X XMLFILE  [-l LOGFILE]  
    ```

-   自动回滚升级

    ```
    gs_upgradectl -t auto-rollback -X XMLFILE [-l LOGFILE] [--force]
    ```

-   升级提交

    ```
    gs_upgradectl -t commit-upgrade -X XMLFILE [-l LOGFILE]
    ```

    ![](public_sys-resources/icon-note.gif) **说明：**  

    -   升级提交操作只适用于openGauss的就地小版本升级。  

    -   一旦提交操作完成，则不能再执行回滚操作。  


## 参数说明<a name="zh-cn_topic_0237152425_zh-cn_topic_0059779035_sdad8716000e7427a84d26645630bb309"></a>

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

-   --force

    当openGauss状态不正常，无法支持正常回滚回滚时，用此参数进行强制回滚操作。


## 示例<a name="zh-cn_topic_0237152425_zh-cn_topic_0059779035_s6c0afe9e35134c4c9959768123dad038"></a>

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
Setting SCTP service.
Successfully set SCTP service.
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
Preinstallation succeeded.
```

**示例二：**使用gs\_upgradectl脚本执行升级。

```
gs_upgradectl -t auto-upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml 
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

**示例四：**使用gs\_upgradectl脚本执行就地升级后提交（升级提交）。

```
gs_upgradectl -t commit-upgrade -X /data/xml/3node_3c3d_1m2s_etcd.xml
Old cluster app path is /data/gauss/app_e67b8bcd
Successfully Cleaned old install path.
Commit binary upgrade succeeded.
```

