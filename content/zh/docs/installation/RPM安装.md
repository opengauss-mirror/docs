# RPM安装

本章节主要介绍在openEuler 22.03 LTS操作系统上，通过yum命令一键安装openGauss数据库。

## 支持的架构和操作系统版本

-   x86-64 openEuler 22.03 LTS
-   ARM64 openEuler 22.03 LTS

***仅在openEuler 22.03 LTS版本上支持***

## 使用限制

- 当前仅在openEuler 22.03 LTS 版本的操作系统上支持yum方式安装，支持arm64和x86_64两种架构。
- 集成到openEuler系统上的数据库基于openGauss轻量版的能力构建。
- RPM方式安装的仅为单机版数据库实例，升级时候只能替换二进制，不支持灰度升级。
- 默认安装实例监听127.0.0.1:7654地址和端口。如果需要进行远程连接，需要手动修改postgresql.conf文件中的listen_address。
- 安装数据库默认创建用户openGauss，卸载数据库后不删除该用户。

## 安装方式

- 安装完成操作系统后使用yum install安装。

    `yum install opengauss -y`

- 在安装操作系统过程中，software选择openGauss，安装操作系统时候默认安装上openGauss数据库。

![](figures/soft_select.png)

![](figures/choose_opengauss.png)


## 使用说明

1. 切换到opengauss用户 `su - opengauss`
   
2. 查看进程 `ps ux`, 可以看到，二进制安装目录在 `/usr/local/opengauss`下，默认启动的数据目录在`/var/lib/opengauss/data`目录下。

3. 数据库连接 `gsql -d postgres -p 7654 -r`，数据库默认端口为7654。连接到数据库后，可正常使用数据库。
