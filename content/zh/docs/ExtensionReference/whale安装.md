# whale安装

插件自动安装加载，无须手动安装加载。如果需要手动编译加载插件，步骤如下：
    
## 编译安装

1. [编译安装openGauss](https://gitee.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[whale源码](https://gitee.com/opengauss/Plugin/tree/master/contrib/whale)拷贝到openGauss-server源码的contrib目录下。

3. 进入whale目录执行make install。

4. 创建A库并使用初始用户连接A库。

```
openGauss=# create database db_name dbcompatibility 'A';
```

5. 创建插件。

```
db_name=# create extension whale;
```

## OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件：
        whale.so 路径： app/lib/postgresql/。
        whale.control和whale--1.0.sql 路径 app/share/postgresql/Extension。

3. 创建A库并使用初始用户连接A库，再使用create extension whale;加载whale插件。