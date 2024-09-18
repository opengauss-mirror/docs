# 前提操作

本章详细介绍openGauss企业版安装过程中使用普通用户执行预安装，需要用户提前做的一些操作，下面的操作均需要root权限来操作。如果已完成本章节的配置，请忽略。

-   搭建cm集群，需要修改/etc/security/limits.d/*.conf中，最大文件描述符的数量。

    查询/etc/security/limits.d/路径下后缀是nofile.conf的文件，将所有的文件里面的内容加上下面的内容。

    ```shell
    # 建议值是1百万
    xx soft nofile 1000000
    xx hard nofile 1000000

    find /etc/security/limits.d/ -type f -name "*.conf" -exec sh  -c 'echo "xx       soft       nofile       1000000" >> {}' \;
    find /etc/security/limits.d/ -type f -name "*.conf" -exec sh  -c 'echo "xx       hard       nofile       1000000" >> {}' \;

    xx代表:当前普通用户

    # 查询
    ulimit -n
    ```