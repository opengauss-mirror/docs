# 获取安装包<a name="ZH-CN_TOPIC_0000001167350521"></a>

openGauss开源社区上提供了安装包的获取方式。

## 操作步骤<a name="zh-cn_topic_0289899746_zh-cn_topic_0283136484_zh-cn_topic_0241802590_zh-cn_topic_0085434667_zh-cn_topic_0059782060_section62223956163549"></a>

1.  从openGauss开源社区下载对应平台的安装包。
2.  检查安装包。

    解压安装包，检查安装目录及文件是否齐全。

    ```
    tar -zxf openGauss-Lite-x.x.x-openEuler-aarch64.tar.gz
    ls -lb
    ```

    执行ls命令，显示类似如下信息：

    ```
    total 147716
    drwx------ 2 root root     4096 Jan  4 21:23 dependency
    -rwx------ 1 root root 73683192 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.bin
    -rwx------ 1 root root 73683192 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.sha256
    -rwx------ 1 root root 73683192 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.tar.gz
    -rw------- 1 root root    29154 Jan  4 21:23 install.sh
    -rw------- 1 root root      724 Jan  4 21:23 opengauss_lite.conf
    -rw------- 1 root root     2727 Jan  4 21:23 uninstall.sh
    -rw------- 1 root root    31304 Jan  4 21:23 upgrade_common.sh
    -rw------- 1 root root      968 Jan  4 21:23 upgrade_config.sh
    -rw------- 1 root root      245 Jan  4 21:23 upgrade_errorcode.sh
    -rw------- 1 root root      768 Jan  4 21:23 upgrade_GAUSSV5.sh
    -rw------- 1 root root       65 Jan  4 21:23 upgrade_sql.sha256
    -rw------- 1 root root   323935 Jan  4 21:23 upgrade_sql.tar.gz
    -rw------- 1 root root       43 Jan  4 21:23 version.cfg
    ```


