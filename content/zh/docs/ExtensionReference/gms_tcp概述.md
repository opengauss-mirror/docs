# gms_tcp概述

gms_tcp是一个基于openGauss的网络通信插件，提供TCP/IP级别的网络编程功能，允许数据库直接进行网络通信操作。该插件模仿Oracle的UTL_TCP包，提供了类似的功能接口。

目前支持的主要接口有：

连接管理：
- OPEN_CONNECTION    --建立TCP连接，支持指定远程主机、端口、本地主机、端口等参数
- CLOSE_CONNECTION   --关闭指定的TCP连接
- CLOSE_ALL_CONNECTIONS --关闭所有TCP连接
- FLUSH             --立即将输出缓冲区中的数据发送到服务器

数据读取：
- READ_LINE         --读取一行数据，可选是否移除换行符
- READ_RAW         --读取指定长度的原始二进制数据
- READ_TEXT        --读取指定长度的文本数据
- GET_LINE         --获取一行数据的底层实现
- GET_RAW          --获取原始数据的底层实现
- GET_TEXT         --获取文本数据的底层实现

数据写入：
- WRITE_LINE       --写入一行数据，自动添加换行符
- WRITE_RAW        --写入原始二进制数据
- WRITE_TEXT       --写入文本数据

连接状态：
- AVAILABLE        --检查TCP连接中可读取的数据字节数