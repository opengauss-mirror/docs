# dolphin安装<a name="ZH-CN_TOPIC_0000001201117578"></a>

    插件自动安装加载，无须手动安装加载。如果需要手动编译加载插件，步骤如下：
    
## 编译安装

    1.编译安装openGauss
    2.将dolphin源码拷贝到openGauss源码contrib目录下
    3.进去dolphin目录执行make install
    4.创建B库并使用初始用户或具有初始用户权限的用户连接B库

## OM安装

    1.om安装的openGauss
    2.拷贝插件所需文件：
    2.1 dolphin.so 路径： app/lib/postgresql/
    2.2 dolphin.control和dolphin--1.0.sql 路径 app/share/postgresql/extension
    3.创建B库并使用初始用户或具有初始用户权限的用户连接B库