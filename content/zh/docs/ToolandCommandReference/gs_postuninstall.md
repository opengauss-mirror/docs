# gs\_postuninstall

## 背景信息<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_section1822511168423"></a>

openGauss提供了gs\_postuninstall工具来帮助清理准备openGauss环境阶段所做配置，使得卸载后的环境得到清理。

## 前提条件<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_sdd9f70f91f8442b4bade64056b9c5b42"></a>

-   openGauss卸载执行成功。
-   root用户互信可用。
-   只能使用root用户执行gs_postuninstall命令(执行前需source安装用户的环境变量)
-   若为环境变量分离的模式安装的数据库，root用户在使用该工具前都需要source环境变量分离文件ENVFILE；
-   若为环境变量不分离的模式，root用户在使用该工具时需要source安装用户的.bashrc文件

## 语法<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_sad653bfd058a483ab93629bd7b66fc5d"></a>

-   openGauss清理用户、用户组以及虚拟IP清理

    ```
    gs_postuninstall -U USER -X XMLFILE [-L] [--delete-user] [--delete-group] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_postuninstall -? | --help
    ```

-   显示版本号信息

    ```
    gs_postuninstall -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_sb28b510af9974e7497677c1008506ace"></a>

-   -U

    运行openGauss的操作系统用户名。

    取值范围：字符串，要符合标识符的命名规范。

-   -X

    openGauss配置文件路径。

    取值范围：xml文件的存储路径。

-   -L

    只清理本主机的环境。

    如果openGauss内某主机做单机环境清理后，openGauss不能再做全量环境清理。

-   --delete-user

    删除-U参数指定的操作系统用户。

    如果在Redhat环境下，且用户名与用户组名相同，选择此项必须指定--delete-group参数。

-   --delete-group

    删除操作系统用户所在的用户组（选择此选项必须指定--delete-user参数）。

- -l

  指定日志文件名及路径。在内部会自动给日志名添加一个时间戳。

  当既不明确指定-l，又不在XML文件中配置gaussdbLogPath时，默认值为：“/var/log/gaussdb/om/gs_local-YYYY-MMDD_hhmmss.log”。

  >![](public_sys-resources/icon-note.png) **说明：** 
  >由于在执行gs\_postuninstall后，系统会自动删除openGauss相关目录（包含$GAUSSLOG目录）。因此建议用户通过该参数指定日志文件到非openGauss相关路径。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_s0a095ace681e435cabeab950321a1ae3"></a>

清理主机的环境

```
source /home/omm/om_env #环境变量分离模式；#环境变量不分离模式 source /home/omm/.bashrc 
gs_postuninstall -U omm -X /opt/software/openGauss/clusterconfig.xml --delete-user --delete-group
Parsing the configuration file.
Successfully parsed the configuration file.
Creating SSH trust for the root permission user.
Are you sure you want to create trust for root (yes/no)?yes
Please enter password for root.
Please enter password for current user[root].
Password: 
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
Successfully created the local key files.
Appending local ID to authorized_keys.
Successfully appended local ID to authorized_keys.
Updating the known_hosts file.
Successfully updated the known_hosts file.
Appending authorized_key on the remote node.
Successfully appended authorized_key on all remote node.
Checking common authentication file content.
Successfully checked common authentication content.
Distributing SSH trust file to all node.
Distributing trust keys file to all node successfully.
Successfully distributed SSH trust file to all node.
Verifying SSH trust on all hosts.
Verifying SSH trust on all hosts by ip.
Successfully verified SSH trust on all hosts by ip.
Verifying SSH trust on all hosts by hostname.
Successfully verified SSH trust on all hosts by hostname.
Successfully verified SSH trust on all hosts.
Start set cron for root
Successfully to set cron for root
Successfully created SSH trust.
Successfully created SSH trust for the root permission user.
Check log file path.
Successfully checked log file path.
Checking unpreinstallation.
Successfully checked unpreinstallation.
check and clean cgroup
Successfully clean cgroup.
Deleting the instance's directory.
Successfully deleted the instance's directory.
Deleting the temporary directory.
Successfully deleted the temporary directory.
Deleting remote OS user.
Successfully deleted remote OS user.
Deleting logs of other nodes.
Successfully deleted logs of other nodes.
Deleting software packages and environmental variables of other nodes.
Successfully deleted software packages and environmental variables of other nodes.
Deleting software packages and environmental variables of the local node.
Successfully deleted software packages and environmental variables of the local nodes.
Deleting local OS user.
Successfully deleted local OS user.
Deleting local node's logs.
Successfully deleted local node's logs.
Successfully cleaned environment.
clean over.
```

## 相关命令<a name="zh-cn_topic_0237152418_zh-cn_topic_0059778816_s2ce69a080cb14656845238b0d1ee73c1"></a>

[gs\_preinstall](gs_preinstall.md)，[gs\_uninstall](gs_uninstall.md)

