# 加载驱动<a name="ZH-CN_TOPIC_0000001080050160"></a>

-   在使用驱动之前，需要做如下操作：
    1.  先解压版本对应驱动包，使用root用户将psycopg2拷贝到python安装目录下的site-packages文件夹下。
    2.  修改psycopg2目录权限为755。
    3.  将psycopg2目录添加到环境变量$PYTHONPATH，并使之生效。
    4.  对于非数据库用户，需要将解压后的lib目录，配置在LD\_LIBRARY\_PATH中。

-   在创建数据库连接之前，需要先加载如下数据库驱动程序：

    ```
    import  psycopg2
    ```


