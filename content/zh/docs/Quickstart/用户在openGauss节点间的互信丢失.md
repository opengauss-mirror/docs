# 用户在openGauss节点间的互信丢失<a name="ZH-CN_TOPIC_0241702867"></a>

## 问题现象<a name="zh-cn_topic_0231761642_zh-cn_topic_0085434670_zh-cn_topic_0059782026_sb8a28e38916d47e4b282e1fb527260f8"></a>

在给某个用户配置好互信之后，有时候信任关系会突然丢失，ssh时提示需要输入密码。

```
sc_ssh@node1:~/.ssh> ssh node2
Password:
```

## 可能原因<a name="zh-cn_topic_0231761642_zh-cn_topic_0085434670_zh-cn_topic_0059782026_s7edc9a91f34b4cdc82799dfd9eaaaa8b"></a>

-   sshd服务未运行。
-   防火墙禁止ssh访问。
-   当前用户对根目录的权限不足。
-   当前用户对公钥文件的权限不足。
-   “known\_hosts”文件里记录的key和IP地址冲突。
-   公钥不匹配。

## 操作步骤<a name="zh-cn_topic_0231761642_zh-cn_topic_0085434670_zh-cn_topic_0059782026_s2a8b95d31f7a4197ad4c9ac8bf9f50e9"></a>

-   确认是否由于sshd服务未运行。
    1.  执行命令service sshd status查看sshd服务状态。
    2.  如果sshd服务关闭，使用service sshd start启动sshd服务。

-   确认是否由于开启了系统防火墙导致ssh互信丢失。
    1.  执行命令Euleros: systemctl status firewalld.service查看openGauss防火墙状态。
    2.  如果显示系统防火墙打开，使用Euleros: systemctl stop firewalld.service命令关闭防火墙。


-   确认是否由于当前用户对根目录的权限不足。
    1.  使用ll命令查看根目录属性，确认目录属组是否为互信用户的属组，同时确认用户对目录是否有读和写权限。
    2.  用chown命令修改文件属组，用chmod命令修改目录权限，使其满足要求。

-   确认是否由于当前用户对公钥文件的权限不足。
    1.  查看“\~/.ssh/id\_rsa.pub”文件，确认文件属组是否为互信用户的属组，同时确认用户对文件是否有读和写权限。
    2.  用chown命令修改文件属组，用chmod命令修改目录权限使其满足要求。


-   确认是否由于“known\_hosts”文件里记录的key和IP地址冲突。

    查看“\~/.ssh/known\_hosts”文件里记录的key和IP地址是否一致，如果不一致，可能是由于所指定的IP发生了变化等原因导致了异常。此时，删除“.ssh/known\_hosts”文件里面原来的公钥信息即可。


-   确认是由于公钥不匹配。

    排除掉上面的所有原因后，如果问题仍存在，可能是公钥不匹配。此时，请删除公钥目录.ssh下的所有文件，按照下面的手工建立互信重新配置。


## 使用脚本建立互信<a name="zh-cn_topic_0231761642_zh-cn_topic_0085434670_zh-cn_topic_0059782026_section12899163762318"></a>

1.  创建一个执行互信脚本所需要的输入文本，并在此文件中添加openGauss中所有主机IP。

    ```
    plat1:/opt/software/openGauss> vim hostfile
    192.168.0.1
    192.168.0.2
    192.168.0.3
    ```

2.  以需要创建互信的用户执行脚本。
3.  执行下面脚本建立互信。

    ```
    plat1:/opt/software/openGauss/script# gs_sshexkey -f /opt/software/hostfile
    ```

    /opt/software/hostfile为主机列表，列出所有需要建立互信机器的主机IP。


## 手工建立互信<a name="zh-cn_topic_0231761642_zh-cn_topic_0085434670_zh-cn_topic_0059782026_section63620881152125"></a>

如果openGauss各主机的root密码不一致，gs\_preinstall脚本无法建立互信，可以手工建立互信。

>![](public_sys-resources/icon-note.gif) **说明：**   
>建立互信的过程中需要生成如下4个文件：authorized\_keys、id\_rsa、id\_rsa.pub、known\_hosts。请勿删除或破坏这些互信相关的文件。  

手工建立信任关系，步骤如下，plat1，plat2，plat3是主机名：

1.  在其中一个主机上，生成root用户的本机授权文件。假设在主机plat1上执行。
    1.  生成密钥。

        ```
        ssh-keygen -t rsa
        ```

        示例如下：

        ```
        plat1:~ # ssh-keygen -t rsa 
        Generating public/private rsa key pair.
        Enter file in which to save the key (/root/.ssh/id_rsa): 
        Created directory '/root/.ssh'.
        Enter passphrase (empty for no passphrase): 
        Enter same passphrase again: 
        Your identification has been saved in /root/.ssh/id_rsa.
        Your public key has been saved in /root/.ssh/id_rsa.pub.
        The key fingerprint is:
        d5:35:46:33:27:22:09:f0:1e:12:a7:87:fa:33:3f:ab root@plat1
        The key's randomart image is:
        +--[ RSA 2048]----+
        |      o.o.....O .|
        |       *  .o + * |
        |      + + . .    |
        |     . + o       |
        |    .   S        |
        |     .           |
        |      +          |
        |       +.        |
        |      E.oo       |
        +-----------------+
        ```

    2.  生成本机授权文件。

        ```
        cat .ssh/id_rsa.pub >> .ssh/authorized_keys
        ```

        示例如下：

        ```
        plat1:~ # cat .ssh/id_rsa.pub >> .ssh/authorized_keys
        ```

2.  收集所有的待建互信主机的公钥，写入到本机的known\_hosts文件中。此步骤需要在步骤1执行的主机上执行。需要收集plat1、plat2、plat3三个主机的公钥。
    1.  收集plat1的公钥，写入到本机known\_hosts文件中。

        ```
        ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts
        ```

        示例如下：

        ```
        plat1:~ # ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts 
        # plat1 SSH-2.0-OpenSSH_5.1 
        ```

    2.  收集plat2的公钥，写入到本机known\_hosts文件中。

        ```
        ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts
        ```

        示例如下：

        ```
        plat1:~ # ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts 
        # plat2 SSH-2.0-OpenSSH_5.1 
        ```

    3.  收集plat3的公钥，写入到本机known\_hosts文件中。

        ```
        ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts
        ```

        示例如下：

        ```
        plat1:~ # ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts 
        # plat3 SSH-2.0-OpenSSH_5.1 
        ```

        >![](public_sys-resources/icon-note.gif) **说明：**   
        >-   当远程主机的公钥被接受以后，它就会被保存在文件$HOME/.ssh/known\_hosts之中。下次再连接这台主机，系统就会认出它的公钥已经保存在本地了，从而跳过警告部分。  
        >-   如果该主机上known\_hosts文件被删除，互信仍然可以使用，但是会有告警提示信息。如果需要规避告警提示信息，请将/etc/ssh/ssh\_config配置文件中，StrictHostKeyChecking参数设置为no。  


3.  将互信文件分发到其它所有主机上。在本例中，需要将plat1上的互信文件分发到plat2和plat3上。

    1、将互信文件分发到plat2上。Password输入拷贝目标主机的密码。

    ```
    scp -r .ssh plat2:~
    ```

    示例如下：

    ```
    plat1:~ # scp -r .ssh plat2:~
    Password: 
    authorized_keys                 100%  796     0.8KB/s   00:00    
    id_rsa                          100% 1675     1.6KB/s   00:00    
    id_rsa.pub                      100%  398     0.4KB/s   00:00    
    known_hosts                     100% 1089     1.1KB/s   00:00    
    ```

    2、将互信文件分发到plat3上。Password输入拷贝目标主机的密码。

    ```
    scp -r .ssh plat3:~
    ```

    示例如下：

    ```
    plat1:~ # scp -r .ssh plat3:~
    Password: 
    authorized_keys                 100%  796     0.8KB/s   00:00    
    id_rsa                          100% 1675     1.6KB/s   00:00    
    id_rsa.pub                      100%  398     0.4KB/s   00:00    
    known_hosts                     100% 1089     1.1KB/s   00:00    
    ```

4.  查看互信是否建成功，可以互相ssh主机名。输入exit退出。

    ```
    plat1:~ # ssh plat2
    Last login: Sat Jun 20 14:01:07 2020
    plat2:~ # exit
    logout
    Connection to plat2 closed.
    plat1:~ # 
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >如果三个以上节点，和上述过程类似。假设节点名为plat1、plat2、plat3、......。第一步，需要在plat1上生成root用户的本机授权文件；第二步，需要收集所有待建互信主机\(plat1、plat2、plat3、......\)的公钥并写入到本机known\_hosts文件中；第三步，需要将互信文件分发到除本机外的所有其它主机\(plat2、plat3、......\)上；第四步，检查互信是否建立成功。  


