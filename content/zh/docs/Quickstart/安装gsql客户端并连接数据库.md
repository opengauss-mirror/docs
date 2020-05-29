# 安装gsql客户端并连接数据库<a name="ZH-CN_TOPIC_0241704257"></a>

gsql是openGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何安装gsql客户端，使用gsql客户端连接数据库，更多配置请参见openGauss产品文档。

## 前提条件<a name="zh-cn_topic_0241234233_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>

已[确认连接信息](确认连接信息.md)。

## 操作步骤<a name="zh-cn_topic_0241234233_section428894161117"></a>

在客户端机器上，上传客户端工具包并配置gsql的执行环境变量。

1.  以root用户登录客户端机器。
2.  创建“/tmp/tools”目录。

    ```
    mkdir /tmp/tools
    ```

3.  获取软件安装包中的“openGauss 1.0-OPENEULER-64bit-ClientTools.tar.gz”上传到“/tmp/tools”路径下。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   软件包相对位置为安装时所放位置，根据实际情况填写。  
    >-   不同的操作系统，工具包文件名称会有差异。请根据实际的操作系统类型选择对应的工具包。  

4.  解压文件。

    ```
    cd /tmp/tools
    tar -zxvf openGauss 1.0-OPENEULER-64bit-ClientTools.tar.gz
    ```

5.  设置环境变量。

    打开“\~/.bashrc”文件。

    ```
    vi ~/.bashrc
    ```

    在其中输入如下内容后，使用“:wq!”命令保存并退出。

    ```
    export PATH=/tmp/tools/bin:$PATH
    export LD_LIBRARY_PATH=/tmp/tools/lib:$LD_LIBRARY_PATH
    ```

6.  使环境变量配置生效。

    ```
    source ~/.bashrc
    ```

7.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    ```
    gsql -d postgres -h 10.10.0.11 -U jack -p 8000 -W Bigdata@123 -r
    ```

    postgres为需要连接的数据库名称，10.10.0.11为CN所在的服务器IP地址，jack为连接数据库的用户，8000为数据库主节点的端口号，_Bigdata@123_为连接数据库用户jack的密码。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >连接openGauss的机器与openGauss不在同一网段时，-h指定的IP地址应为Manager界面上所设的mpp.coo.cooListenIP2（应用访问IP）的取值。  


