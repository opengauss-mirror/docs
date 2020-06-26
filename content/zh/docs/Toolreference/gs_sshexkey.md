# gs\_sshexkey<a name="ZH-CN_TOPIC_0249632281"></a>

## 背景信息<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_section15111432124318"></a>

openGauss在安装过程中，需要在openGauss中的节点间执行命令，传送文件等操作。因此，安装前需要确保互信是连通的。openGauss提供了gs\_sshexkey工具来帮助用户建立互信。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>root用户互信可能会存在安全隐患，因此建议用户在使用完成后，立即删除各主机上root用户的互信。  

## 前提条件<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_s3e447292529e46aabd04269511e410b2"></a>

-   确保ssh服务打开。
-   确保ssh端口不会被防火墙关闭。
-   确保xml文件中各主机名称和IP配置正确。
-   确保所有机器节点间网络畅通。
-   如果为普通用户建立互信，需要提前在各主机创建相同用户并设置密码。
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
    restorecon -r -vv /home/
    ```

    ```
    restorecon -r -vv /root/
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

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >确保hostfile文件中只配置正确的主机IP，不包含其它信息。  

-   -l

    指定日志文件的保存路径。

    取值范围：任意存在的可访问的绝对路径。

-   --skip-hostname-set

    是否将“-f”参数文件中IP与其hostname的映射关系写入“/etc/hosts”文件中。默认写入，如果指定该参数则不写入。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例<a name="zh-cn_topic_0237152423_zh-cn_topic_0059778349_s0925c040c7eb4b0d9fb783ac5c0a8b2b"></a>

如下是为root用户建立互信的示例。仅支持交互式输入密码。

-   用户密码相同情况下，交互式模式使用以下命令建立互信。

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

-   用户密码不同情况下，交互式模式使用以下命令建立互信。

    ```
    gs_sshexkey -f /opt/software/hostfile
    Please enter password for current user[root].
    Password: 
    Notice :The password of some nodes is incorrect.
    Please enter password for current user[root] on the node[10.180.10.112].
    Password: 
    Please enter password for current user[root] on the node[10.180.10.113].
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


