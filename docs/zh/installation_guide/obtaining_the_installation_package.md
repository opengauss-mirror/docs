# 获取安装包

openGauss开源社区上提供了安装包的获取方式。

> [NOTE]说明
>
> 下载安装包前，需要先注册并登录。

## 操作步骤<a name="zh-cn_topic_0289899746_zh-cn_topic_0283136484_zh-cn_topic_0241802590_zh-cn_topic_0085434667_zh-cn_topic_0059782060_section62223956163549"></a>

1. 从openGauss开源社区下载对应平台的安装包。

    a.  通过[https://opengauss.org/zh/download/](https://opengauss.org/zh/download/)登录openGauss开源社区，选择对应平台的极简版安装包。

    b.  单击“下载”。

2. 检查安装包。

    解压安装包，检查安装目录及文件是否齐全。在安装包所在目录执行以下命令：

    ```sh
    tar -jxf openGauss-Server-x.x.x-openEuler20.03-x86_64.tar.bz2
    ls -lb
    ```

    执行ls命令，显示类似如下信息：

    ```txt
    total 90296
    drwx------ 3 root root     4096 Mar 31 21:18 bin
    drwx------ 3 root root     4096 Mar 31 21:18 etc
    drwx------ 3 root root     4096 Mar 31 21:18 include
    drwx------ 4 root root     4096 Mar 31 21:18 jre
    drwx------ 5 root root     4096 Mar 31 21:18 lib
    -rw------- 1 root root 92427499 Apr  1 09:43 openGauss-Server-x.x.x-openEuler20.03-x86_64.tar.bz2
    drwx------ 5 root root     4096 Mar 31 21:18 share
    drwx------ 2 root root     4096 Mar 31 21:18 simpleInstall
    -rw------- 1 root root       32 Mar 31 21:18 version.cfg
    ```

## 安装包完整性校验

为了确认软件包在传输过程中由于网络原因或者存储设备原因是否出现下载不完整的问题，在获取到软件包后，需要对软件包的完整性进行校验，通过了校验的软件包才能被部署。
这里通过对比校验文件中记录的校验值和手动方式计算的文件校验值，判断软件包是否完整。若两个值相同，说明文件完整，否则，文件完整性被破坏，请重新获取发布包。

### 指导操作

文完整性校验操作步骤如下：

1. 计算文件的sha256校验值。linux执行命令如下：

    ```sh
    sha256sum openGauss-OM-6.0.0-openEuler20.03-aarch64.tar.gz
    sha256sum openGauss-Server-6.0.0-openEuler20.03-aarch64.tar.bz2
    ```

    命令执行完成后，输出校验值。

2. 判断步骤1计算的两个校验值分别与校验文件1和校验文件2中的值是否一致。
如果校验值一致说明文件完整性没有破坏，如果校验值不一致则可以确认文件完整性已被破坏，需要重新获取。
