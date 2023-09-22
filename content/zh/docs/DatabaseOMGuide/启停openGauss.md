# 启停openGauss

## 启动openGauss<a name="zh-cn_topic_0237088789_zh-cn_topic_0059777680_se84dd72782a34e9b8b1fb962d2842afa"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  使用以下命令启动openGauss。

    ```
    gs_om -t start
    ```

    >![](public_sys-resources/icon-note.png) **说明：**
    >双机启动必须以双机模式启动，若中间过程以单机模式启动，则必须修复才能恢复双机关系，用gs\_ctl build进行修复，gs\_ctl的使用方法请参见《工具与命令参考》中“系统内部命令 \> gs\_ctl”章节。


## 停止openGauss<a name="zh-cn_topic_0237088789_section785041010214"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  使用以下命令停止openGauss。

    ```
    gs_om -t stop
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >启停节点及AZ的操作请参见《工具与命令参考》中“服务端工具 \> gs\_om”章节。


## 示例<a name="zh-cn_topic_0237088789_zh-cn_topic_0059777680_s8c57591e1a444d5ea91a783a1a2b74c5"></a>

启动openGauss：

```
gs_om -t start
Starting cluster.
=========================================
=========================================
Successfully started.

```

停止openGauss：

```
gs_om -t stop
Stopping cluster.
=========================================
Successfully stopped cluster.
=========================================
End stop cluster.
```

## 错误排查<a name="zh-cn_topic_0237088789_zh-cn_topic_0059777680_se86cdadb17ce4b5fbec281adaf1ccc92"></a>

如果启动openGauss或者停止openGauss服务失败，请根据日志文件中的日志信息排查错误，参见[日志参考](日志参考.md)。

如果是超时导致启动失败，可以执行如下命令，设置启动超时时间，默认超时时间为300s。

```
gs_om -t start --time-out=300
```

