# gs\_uninstall<a name="ZH-CN_TOPIC_0289899255"></a>

## 背景信息<a name="zh-cn_topic_0287275992_zh-cn_topic_0237152424_zh-cn_topic_0059778700_section104365437437"></a>

openGauss提供了gs\_uninstall工具来帮助完成openGauss的卸载。

## 语法<a name="zh-cn_topic_0287275992_zh-cn_topic_0237152424_zh-cn_topic_0059778700_s6f518f13661f4d718c7397ec91f60bdb"></a>

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


## 参数说明<a name="zh-cn_topic_0287275992_zh-cn_topic_0237152424_zh-cn_topic_0059778700_s28c128a273dc452781a9fe18176ab9b2"></a>

-   --delete-data

    删除数据文件。

-   -L

    只卸载本地主机。如果openGauss内某主机做单点卸载后，openGauss不能再做全量卸载。

    -   -l

        指定日志文件名及可访问的绝对路径。在内部会自动给日志名添加一个时间戳。

        -   当既不明确指定-l，又不在XML文件中配置gaussdbLogPath时，默认值为“$GAUSSLOG/om/gs\_uninstall-YYYY-MM-DD\_hhmmss.log”。
        -   当不明确指定-l，但在XML文件中配置了gaussdbLogPath时，默认值为“gaussdbLogPath/用户名/om/gs\_uninstall-YYYY-MM-DD\_hhmmss.log”。

            >![](public_sys-resources/icon-note.png) **说明：** 
            >由于在执行gs\_uninstall时，系统会自动删除openGauss相关目录。因此建议用户通过该参数指定日志文件到非openGauss相关路径。



-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0287275992_zh-cn_topic_0237152424_zh-cn_topic_0059778700_se3158b665fdf47dd929b96da689819df"></a>

使用数据库用户执行gs\_uninstall脚本进行卸载openGauss。

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

## 相关命令<a name="zh-cn_topic_0287275992_zh-cn_topic_0237152424_zh-cn_topic_0059778700_s81551f14e776431db12f55306b1d2250"></a>

[gs\_install](gs_install.md)，[gs\_postuninstall](gs_postuninstall.md)

