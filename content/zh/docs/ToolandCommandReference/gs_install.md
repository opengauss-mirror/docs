# gs\_install

## 背景信息<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_section551843134215"></a>

数据库的部署是一个复杂的过程。openGauss提供了gs\_install工具来帮助完成openGauss的安装和部署。

openGauss安装部署，要求用户指定配置文件，配置文件中会指定程序安装路径、实例数据目录、主备关系、实例数、各实例的业务IP端口等信息。

## 前提条件<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_sde0deda331f04a77b53c25695a919910"></a>

-   已成功执行前置脚本gs\_preinstall。
-   用户需确保各个节点上的locale保持一致。
-   需要使用前置时设置的openGauss用户进行安装操作。

## 语法<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_sb4663fce66974c9dadbf543e4a7095ba"></a>

-   安装openGauss

    ```
    gs_install -X XMLFILE [--gsinit-parameter="PARAMETER" [...]] [--dn-guc="PARAMETER" [...]] [--alarm-component=ALARMCOMPONENT] [--time-out=SECS] [-l LOGFILE]  
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >安装时若不指定字符集，默认字符集为SQL\_ASCII，为简化和统一区域loacle默认设置为C，若想指定其他字符集和区域，请在安装时使用参数--gsinit-parameter="--locale=LOCALE"来指定，LOCALE为新数据库设置缺省的区域。

-   显示帮助信息

    ```
    gs_install -? | --help
    ```

-   显示版本号信息

    ```
    gs_install -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_s6aa938505b3b45808dbefdd1266efd76"></a>

-   -X

    openGauss配置文件。

    取值范围：xml配置文件。

-   -l

    指定安装日志文件及日志文件存放的路径。

    当不明确指定-l，但在XML文件中配置了gaussdbLogPath时，默认值为“gaussdbLogPath的值、用户名和om/gs\_install-YYYY-MM-DD\_hhmmss.log”的组合。

-   --gsinit-parameter=PARAM

    数据实例参数指定。

    取值范围请参见[gs\_initdb](gs_initdb.md)的参数说明，其中对-A、-D、-U、-C、-X参数的设置不生效。

-   --dn-guc=PARAM

    配置参数。

    取值范围请参见[gs\_guc](gs_guc.md)的参数说明。

-   --time-out=SECS

    启动超时等待时间。单位：s。

    若--time-out取值过小，有可能会因为需要启动的实例数过多而引起超时。若在超时时间内启动不成功，则会报错启动超时，但是openGauss会在后台继续启动。可以等待一段时间后，查询openGauss状态，检查openGauss是否启动成功。

    取值范围：正整数，若无特殊需求，不需要配置该参数，系统会自动调整超时时间。

-   --alarm-component=alarm\_component

    指定告警上报组件的绝对路径。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_s9f6b00fff4334fdfaa38df725719b248"></a>

使用gs\_install脚本进行openGauss安装。

```
gs_install -X /opt/software/openGauss/clusterconfig.xml
Parsing the configuration file.
Check preinstall on every node.
Successfully checked preinstall on every node.
Creating the backup directory.
Successfully created the backup directory.
begin deploy..
Installing the cluster.
begin prepare Install Cluster..
Checking the InstallationGuide environment on all nodes.
begin install Cluster..
Installing applications on all nodes.
Successfully installed APP.
begin init Instance..
encrypt cipher and rand files for database.
Please enter password for database:
Please repeat for database:
begin to create CA cert files
The sslcert will be generated in /opt/gaussdb/cluster/app/share/sslcert/om
Cluster InstallationGuide is completed.
Configuring.
Deleting instances from all nodes.
Successfully deleted instances from all nodes.
Checking node configuration on all nodes.
Initializing instances on all nodes.
Updating instance configuration on all nodes.
Check consistence of memCheck and coresCheck on DN nodes.
Successful check consistence of memCheck and coresCheck on all nodes.
Configuring pg_hba on all nodes.
Configuration is completed.
Successfully started cluster.
Successfully installed application.
```

## 相关命令<a name="zh-cn_topic_0237152416_zh-cn_topic_0059778040_s07c0e1fb92454ab4aba383e142e6014d"></a>

[gs\_postuninstall](gs_postuninstall.md)，[gs\_preinstall](gs_preinstall.md)，[gs\_uninstall](gs_uninstall.md)

