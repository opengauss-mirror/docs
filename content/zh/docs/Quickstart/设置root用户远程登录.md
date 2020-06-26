# 设置root用户远程登录<a name="ZH-CN_TOPIC_0251900895"></a>

在openGauss安装时需要root帐户远程登录访问权限，本章介绍如何设置使用root用户远程登录。

1.  修改PermitRootLogin配置，允许用户远程登录。
    1.  打开sshd\_config文件。

        ```
        vim /etc/ssh/sshd_config
        ```

    2.  修改权限配置，可以使用以下两种方式实现：
        -   注释掉“PermitRootLogin no”。

            ```
            #PermitRootLogin no
            ```

        -   将“PermitRootLogin“改为“yes“。

            ```
            PermitRootLogin yes
            ```

    3.  执行**:wq**保存并退出编辑页面。

2.  修改Banner配置，去掉连接到系统时，系统提示的欢迎信息。欢迎信息会干扰安装时远程操作的返回结果，影响安装正常执行。
    1.  编辑sshd\_config文件。

        ```
        vim /etc/ssh/sshd_config
        ```

    2.  修改Banner配置，注释掉“Banner”所在的行。

        ```
        #Banner /etc/ssh/welcome.msg
        ```

    3.  执行**:wq**保存并退出编辑页面。

3.  使用如下命令使设置生效。

    ```
    service sshd restart
    ```

    >![](public_sys-resources/icon-caution.gif) **注意：**   
    >若执行命令后返回提示信息“Redirecting to /bin/systemctl restart sshd.service”，请执行命令：/bin/systemctl restart sshd.service。  

4.  以root用户身份重新登录。

    ```
    ssh xxx.xxx.xxx.xxx
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >xxx.xxx.xxx.xxx为安装openGauss环境的ip。  


