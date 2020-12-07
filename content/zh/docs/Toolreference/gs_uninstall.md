# gs\_uninstall<a name="ZH-CN_TOPIC_0249632242"></a>

## 背景信息<a name="zh-cn_topic_0237152424_zh-cn_topic_0059778700_section104365437437"></a>

openGauss提供了gs\_uninstall工具来帮助完成openGauss的卸载。

## 语法<a name="zh-cn_topic_0237152424_zh-cn_topic_0059778700_s6f518f13661f4d718c7397ec91f60bdb"></a>

-   卸载openGauss

    ```
    gs_uninstall [--delete-data] [-L] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_uninstall -? | --help
    ```

-   显示版本号信息

    ```
    gs_uninstall -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152424_zh-cn_topic_0059778700_s28c128a273dc452781a9fe18176ab9b2"></a>

-   --delete-data

    删除数据文件。

- -L

  只卸载本地主机。如果openGauss内某主机做单点卸载后，openGauss不能再做全量卸载。

  ![](public_sys-resources/icon-note.gif) **说明：**

  由于在执行gs_uninstall时，系统自动会删除openGauss相关目录。因此建议用户通过该参数指定日志文件到非openGauss相关路径。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152424_zh-cn_topic_0059778700_se3158b665fdf47dd929b96da689819df"></a>

使用集群用户执行gs\_uninstall脚本进行卸载openGauss。

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

## 相关命令<a name="zh-cn_topic_0237152424_zh-cn_topic_0059778700_s81551f14e776431db12f55306b1d2250"></a>

[gs\_install](gs_install.md)，[gs\_postuninstall](gs_postuninstall.md)

