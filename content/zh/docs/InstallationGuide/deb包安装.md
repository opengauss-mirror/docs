# deb包安装

本章节主要介绍在Ubuntu和Debian操作系统上，通过apt命令一键安装openGauss数据库。

## 支持的架构和操作系统版本以及对应的openGauss版本

| 操作系统                 | 架构   | openauss版本    |
| ----------------------- | ------ | --------------- |
| Ubuntu 22.04 LTS | ARM64/x86_64  | openGauss 6.0.0 企业版  |
| Debian 12 | x86_64  | openGauss 6.0.0 企业版  |

注意：如果需要其他系统上安装openGauss，请联系华为技术支持。

## 支持特性

-  从openGauss 5.0.1开始，支持兼容性B库，详细参考[dolphin插件](../ExtensionReference/dolphin概述.md)。
  
## 约束

-  openGauss 6.0.0企业版不包含mot，obs和codegen功能，以及om、cm等外部组件，仅有纯数据库功能（支持兼容性B库）。

## 使用限制

- 当前仅在Ubuntu和Debian操作系统上支持apt方式安装，支持arm64和x86_64两种架构。
- 默认安装实例监听127.0.0.1:7654地址和端口。如果需要进行远程连接，需要手动修改postgresql.conf文件中的listen_address。
- 安装数据库默认创建用户opengauss，卸载数据库后不删除该用户。

## 安装方式

以sudo用户安装为例

- 使用apt install安装。
  - Ubuntu安装：

    ```shell
    $ add-apt-repository ppa:opengauss/opengauss
    $ apt update
    $ apt install opengauss
    ```
  - Debian安装：
    ```shell
    $ add-apt-repository ppa:opengauss/opengauss
    $ sed -i 's/bookworm/jammy/g' /etc/apt/sources.list.d/opengauss-ubuntu-opengauss-bookworm.list
    $ apt update
    $ apt install opengauss
    ```
- 安装完成后根据提示启动数据库
  
    ```shell
    $ service opengauss start
    ```
>![](public_sys-resources/icon-note.png) **说明：**
> 由于PPA只支持Ubuntu系统软件包构建，在Debian操作系统上使用时需修改apt源列表文件。

## 卸载方式
- 卸载openGauss
  
  ```shell
  $ apt remove opengauss
  ```
- 删除openGauss PPA仓库
  
  ```shell
  $ add-apt-repository --remove ppa:opengauss/opengauss
  ```

## 使用说明

1. 切换到opengauss用户 `su - opengauss`
   
2. 查看进程 `ps ux`, 可以看到，二进制安装目录在 `/usr/opengauss`下，默认启动的数据目录在`/var/lib/opengauss/data`目录下。

3. 数据库连接 `gsql -d postgres -p 7654 -r`，数据库默认端口为7654。连接到数据库后，可正常使用数据库。
