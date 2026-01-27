# 获取安装包

openGauss开源社区上提供了安装包的获取方式。

## 操作步骤<a name="zh-cn_topic_0241802590_zh-cn_topic_0085434667_zh-cn_topic_0059782060_section62223956163549"></a>

1. 从openGauss开源社区下载对应平台的安装包。  

     a.通过[https://opengauss.org/zh/download/](https://opengauss.org/zh/download/)登录openGauss开源社区，选择对应平台的企业版安装包。

     b.单击“立即下载”。　　
2. 检查安装包。

    解压安装包，检查安装目录及文件是否齐全。在安装包所在目录执行以下命令：

    ```
   tar -zxvf openGauss-All-x.x.x-openEuler20.03-x86_64.tar.gz
   ls -lb
   ```

    执行ls命令，显示类似如下信息：

     ```
     total 143M
     -rwx------  1 omm omm    0 Sep 25 09:29 openGauss-CM-x.x.x-openEuler20.03-x86_64.sha256
     -rwx------  1 omm omm  22M Sep 25 09:29 openGauss-CM-x.x.x-openEuler20.03-x86_64.tar.gz
     -rwx------  1 omm omm   65 Sep 25 09:28 openGauss-OM-x.x.x-openEuler20.03-x86_64.sha256
     -rwx------  1 omm omm  23M Sep 25 09:28 openGauss-OM-x.x.x-openEuler20.03-x86_64.tar.gz
     -rwx------  1 omm omm   65 Sep 25 09:29 openGauss-Server-x.x.x-openEuler20.03-x86_64.sha256
     -rwx------  1 omm omm 105M Sep 25 09:29 openGauss-Server-x.x.x-openEuler20.03-x86_64.tar.bz2
     -rwx------  1 omm omm   65 Sep 25 09:26 upgrade_sql.sha256
     -rwx------  1 omm omm 552K Sep 25 09:26 upgrade_sql.tar.gz
    ```

## 安装包完整性校验

为了确认软件包在传输过程中由于网络原因或者存储设备原因是否出现下载不完整的问题，在获取到软件包后，需要对软件包的完整性进行校验，通过了校验的软件包才能被部署。
这里通过对比校验文件中记录的校验值和手动方式计算的文件校验值，判断软件包是否完整。若两个值相同，说明文件完整，否则，文件完整性被破坏，请重新获取发布包。

### 指导操作

文完整性校验操作步骤如下：

1. 计算文件的sha256校验值。linux执行命令如下：

    ```
    sha256sum openGauss-OM-6.0.0-openEuler20.03-aarch64.tar.gz
    sha256sum openGauss-Server-6.0.0-openEuler20.03-aarch64.tar.bz2
    ```

    命令执行完成后，输出校验值。

2. 判断步骤1计算的两个校验值分别与校验文件1和校验文件2中的值是否一致。
如果校验值一致说明文件完整性没有破坏，如果校验值不一致则可以确认文件完整性已被破坏，需要重新获取。
