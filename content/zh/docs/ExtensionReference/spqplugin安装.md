# spqplugin安装

插件自动安装，无须手动安装。如果需要手动编译加载插件，步骤如下：

## 编译安装

1. [编译安装openGauss](https://gitcode.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[spqplugin源码](https://gitcode.com/opengauss/Plugin/tree/master/contrib/spq_plugin)拷贝到openGauss-server源码的contrib目录下。

3. 进入spq_plugin目录执行make install。

## OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件： spqplugin.so 路径： app/lib/postgresql/。 spqplugin.control和spqplugin--1.0.sql 路径 app/share/postgresql/extension。
