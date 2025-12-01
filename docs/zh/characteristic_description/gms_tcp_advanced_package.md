# gms_tcp高级包

## 可获得性<a name="section5309649"></a>

本特性自openGauss 7.0.0-RC1 版本开始引入。

## 特性简介<a name="section47786844"></a>

gms_tcp是一个基于openGauss的网络通信插件，提供TCP/IP级别的网络编程功能，允许数据库直接进行网络通信操作。提供了TCP/IP的连接管理、数据读取和数据写入等功能接口。

## 客户价值<a name="section27428414"></a>

提高兼容性并且方便用户使用该插件进行网络通信操作。

## 特性描述<a name="section45529136"></a>

在安装完数据库后，直接通过create extension gms_tcp;命令加载gms_tcp插件。

该插件目前支持以下接口：
OPEN_CONNECTION    --建立TCP连接，支持指定远程主机、端口、本地主机、端口等参数
CLOSE_CONNECTION   --关闭指定的TCP连接
CLOSE_ALL_CONNECTIONS --关闭所有TCP连接
FLUSH             --立即将输出缓冲区中的数据发送到服务器
READ_LINE         --读取一行数据，可选是否移除换行符
READ_RAW         --读取指定长度的原始二进制数据
READ_TEXT        --读取指定长度的文本数据
GET_LINE         --获取一行数据的底层实现
GET_RAW          --获取原始数据的底层实现
GET_TEXT         --获取文本数据的底层实现
WRITE_LINE       --写入一行数据，自动添加换行符
WRITE_RAW        --写入原始二进制数据
WRITE_TEXT       --写入文本数据
AVAILABLE        --检查TCP连接中可读取的数据字节数

## 特性增强<a name="section7109043"></a>

在本地插件的基础上增加了gms_tcp高级包的插件。

## 特性约束<a name="section06531946143616"></a>

仅支持Create extension命令方式加载插件。

## 依赖关系<a name="section63981393"></a>

无。
