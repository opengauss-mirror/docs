# gs\_sshexkey<a name="ZH-CN_TOPIC_0249632281"></a>

## 背景信息<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_section15111432124318"></a>

openGauss在安装过程中，需要在openGauss中的节点间进行执行命令、传送文件等操作。因此，安装前需要确保互信是连通的。openGauss提供了gs\_sshexkey工具来帮助用户建立互信。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
> root用户互信可能会存在安全隐患，因此建议用户在使用完成后，立即删除各主机上root用户的互信。
>
>企业版安装场景下，出于安全考虑，预安装完成后会自动删除该工具。
>使用gs\_sshexkey工具建立互信成功之后，会在用户目录下面生成gaussdb\_tmp目录，该目录用于存放ssh-agent进程文件gauss\_socket\_tmp和加密私钥的密码短语文件（随机生成32位密码短语，通过encrypt工具加密），同时用户下会拉起两个ssh-agent进程，此进程用于挂载私钥自动输入对应的密码短语。进程拉起完毕之后，需要source用户的环境变量，才能使互信功能生效。

## 前提条件<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_s3e447292529e46aabd04269511e410b2"></a>

- 确保ssh服务打开。

- 确保ssh端口不会被防火墙关闭。

- 确保xml文件中各主机名称和IP配置正确。

- 确保所有机器节点间网络畅通。

- 如果为普通用户建立互信，需要提前在各主机创建相同用户并设置密码。

- 执行命令前，需要检查是否所有集群节点都支持expect命令，如果不支持请自行下载expect工具，建议使用expect version 5.45。

-   如果各主机安装并启动了SELinux服务，需要确保/root和/home目录安全上下文为默认值（root目录：system\_u:object\_r:home\_root\_t:s0，home目录：system\_u:object\_r:admin\_home\_t:s0）或者关闭掉SELinux服务。

    检查系统SELinux状态的方法：执行命令getenforce，如果返回结果是Enforcing ，说明SELinux安装并启用。

    检查目录安全上下文的命令：

    ```
    ls -ldZ  /root | awk '{print $4}'
    ```

    ```
    ls -ldZ  /home | awk '{print $4}'
    ```

    恢复目录安全上下文命令：

    ```
    restorecon -r -v /home/
    ```

    ```
    restorecon -r -v /root/
    ```


## 语法<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_sa7fde5cce9124d06a6c7caa6abc0070e"></a>

-   建立互信

    ```
    gs_sshexkey -f HOSTFILE  [...] [--skip-hostname-set] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_sshexkey -? | --help
    ```

-   显示版本号信息

    ```
    gs_sshexkey -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_s36a1b85ea7c243e69a825f543215ce01"></a>

-   -f

    主机列表，列出所有需要建立互信主机的IP。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >确保hostfile文件中只配置主机IP（每行只写一个IP），不包含其它信息。

-   -l

    指定日志文件的保存路径。

    取值范围：任意存在的可访问的绝对路径。

-   --skip-hostname-set

    是否将“-f”参数文件中IP与其hostname的映射关系写入“/etc/hosts”文件中。默认写入，如果指定该参数则不写入。普通用户无权限编辑/etc/hosts文件，故有无指定该参数，普通用户均不生成映射关系。

-   --no-deduplicate

    是否在配置互信修改/etc/hosts文件的时候，去除/etc/hosts文件中已经配置过的主机信息，默认是去重复。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_s0925c040c7eb4b0d9fb783ac5c0a8b2b"></a>

如下是为root用户建立互信的示例。仅支持交互式输入密码。

- 用户密码相同情况下，交互式模式使用以下命令建立互信。

  ```
  gs_sshexkey -f /opt/software/hostfile
  Please enter password for current user[root].
  Password: 
  Checking network information.
  All nodes in the network are Normal.
  Successfully checked network information.
  Creating SSH trust.
  Creating the local key file.
  Appending local ID to authorized_keys.
  Successfully appended local ID to authorized_keys.
  Updating the known_hosts file.
  Successfully updated the known_hosts file.
  Appending authorized_key on the remote node.
  Successfully appended authorized_key on all remote node.
  Checking common authentication file content.
  Successfully checked common authentication content.
  Distributing SSH trust file to all node.
  Successfully distributed SSH trust file to all node.
  Verifying SSH trust on all hosts.
  Successfully verified SSH trust on all hosts.
  Successfully created SSH trust.
  ```

  



