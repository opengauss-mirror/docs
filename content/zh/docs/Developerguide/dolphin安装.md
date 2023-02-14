# dolphin安装

插件自动安装加载，无须手动安装加载。如果需要手动编译加载插件，步骤如下：
    
## 编译安装

1. 编译安装openGauss。

2. 将dolphin源码拷贝到openGauss源码contrib目录下。

3. 进去dolphin目录执行make install。

4. 创建B库并使用初始用户连接B库。

## OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件：
        dolphin.so 路径： app/lib/postgresql/。
        dolphin.control和dolphin--1.0.sql 路径 app/share/postgresql/extension。

3. 创建B库并使用初始用户连接B库。