# RPM安装

本章节主要介绍在openEuler（openEuler版本大于等于22.03 LTS）操作系统上，通过yum命令一键安装openGauss数据库。

## 支持的架构和操作系统版本以及对应的openGauss版本

| 操作系统                | 架构   | openauss版本    |
| ----------------------- | ------ | --------------- |
| openEuler 22.03 LTS     | ARM64  | openGauss 2.1.0 |
| openEuler 22.03 LTS     | x86-64 | openGauss 2.1.0 |
| openEuler 22.03 LTS SP4 | ARM64  | openGauss 5.0.1 |
| openEuler 22.03 LTS SP4 | x86-64 | openGauss 5.0.1 |

注意：上面列举的操作系统对应的openGauss版本，指的是从这个版本的操作系统开始有对应的openGauss版本，向后兼容。

比如：从openEuler 22.03 LTS开始支持openGauss2.1.0，从openEuler 22.03 LTS SP4开始支持openGauss5.0.1，向后兼容。

## 支持特性

-  从openGauss 5.0.1开始，支持兼容性B库，详细参考[dolphin插件](../ExtensionReference/dolphin概述.md)。

## 使用限制

- 当前仅在openEuler操作系统上支持yum方式安装，支持arm64和x86_64两种架构。
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

## 数据库升级

1. 支持从低版本的数据库升级到高版本的数据库。

2. 当前支持手动升级。

3. 升级时，只能升级默认安装下的数据库，并且保证数据库进程正常。

4. 升级的数据库的命令是
    `yum install opengauss -y` 或者 `yum update openguass -y`
