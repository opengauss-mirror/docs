# dolphin安装<a name="ZH-CN_TOPIC_0000001201117578"></a>

插件自动安装加载，无须手动安装加载。如果需要手动编译加载插件，步骤如下：
    
## 编译安装

1. [编译安装openGauss](https://gitee.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[dolphin源码](https://gitee.com/opengauss/Plugin/tree/master/contrib/dolphin)拷贝到openGauss-server源码的contrib目录下。

3. 进入dolphin目录执行make install。

4. 创建B库并使用初始用户连接B库。

## OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件：
        dolphin.so 路径： app/lib/postgresql/。
        dolphin.control和dolphin--1.0.sql 路径 app/share/postgresql/Extension。

3. 创建B库并使用初始用户连接B库。