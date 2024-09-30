# DataVec安装

插件手动安装。如果需要手动编译加载插件最新变更，步骤如下：

## 编译安装

1. [编译安装openGauss](https://gitcode.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[datavec源码](https://gitcode.com/opengauss/Plugin/tree/master/contrib/datavec)拷贝到openGauss-server源码的contrib目录下。

3. 进入DataVec目录执行make install。

4. 初始化数据库后连接创建DataVec。

## OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件： datavec.so 路径： app/lib/postgresql/。 datavec.control和datavec--0.4.4.sql 路径 app/share/postgresql/extension。
