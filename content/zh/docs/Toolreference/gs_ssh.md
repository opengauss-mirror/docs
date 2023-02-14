# gs\_ssh

## 背景信息<a name="zh-cn_topic_0237152344_zh-cn_topic_0059777951_section12241205518358"></a>

openGauss提供了gs\_ssh工具帮助用户在openGauss各节点上执行相同的命令。

## 注意事项

- gs_ssh只可以执行当前数据库用户有权限执行的命令。
- gs_ssh所执行的命令不会对当前执行的会话产生影响，比如类似cd或source的命令，只会在执行的进程环境中产生影响，而不会影响到当前执行的会话环境。

## 前提条件<a name="zh-cn_topic_0237152344_zh-cn_topic_0059777951_sa146d07733084d8292706efa87117d57"></a>

-   各个主机间互信正常。
-   openGauss已经正确安装部署。
-   调用命令可用which查询到且在当前用户下有执行权限。
-   需以操作系统用户omm执行gs\_ssh命令。

## 语法<a name="zh-cn_topic_0237152344_zh-cn_topic_0059777951_s1b40498eb43141dcb07e36a6a51325f1"></a>

-   同步执行命令

    ```
    gs_ssh -c cmd
    ```

-   显示帮助信息

    ```
    gs_ssh -? | --help
    ```

-   显示版本号信息

    ```
    gs_ssh -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152344_zh-cn_topic_0059777951_s1c5e9dfd204245b4a2f0191f9db1116f"></a>

-   -c

    指定需要在openGauss各主机上执行的linux shell命令名。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152344_zh-cn_topic_0059777951_s1cb93e63c1a247459e187aba833e8133"></a>

在openGauss各主机上执行相同命令。以执行“hostname”命令为例。

```
gs_ssh -c "hostname"
Successfully execute command on all nodes.
Output:
[SUCCESS] plat1:
plat1
[SUCCESS] plat2:
plat2
[SUCCESS] plat3:
plat3
[SUCCESS] plat4:
plat4
```
