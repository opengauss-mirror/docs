# 关闭SCRLock特性<a name="ZH-CN_TOPIC_0000001685016672"></a>

关闭SCRLock特性，需要重启数据库使配置生效。

## 操作步骤<a name="section172821619113914"></a>

1.  配置数据库根目录下的postgresql.conf文件。
    1.  打开postgresql.conf文件。

        ```
        vim postgresql.conf
        ```

    2.  按“i”进入编辑模式。将参数“ss\_enable\_scrlock“的值改为“off“，关闭SCRLock特性。

        ```
        ss_enable_scrlock = off
        ```

    3.  按“Esc”键，输入**:wq!**，按“Enter”保存并退出编辑。

2.  停止openGauss。

    ```
    cm_ctl stop
    ```

3.  （可选）如需卸载SCRLock特性可执行此步骤。删除SCRLock动态库文件，并清除环境变量。

    ```
    rm -f /home/omm/lib/libscrlock.so
    unset OCK_SCRLOCK_LIB_PATH
    ```

    其中，“_/home/omm/lib__/_”表示libscrlock.so所在目录的绝对路径。

4.  重启openGauss。

    ```
    cm_ctl start
    ```

