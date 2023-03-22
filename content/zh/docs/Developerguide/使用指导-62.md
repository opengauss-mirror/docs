# 使用指导<a name="ZH-CN_TOPIC_0000001240944983"></a>

假设用户已经[初始化配置文件目录confpath](service子命令.md#配置目录初始化)，则可以通过下述命令实现本特性的功能：

-   仅启动慢SQL诊断功能（输出Top3根因），启动命令如下（更多用法参考对service子命令的说明）：

    ```
    gs_dbmind service start -c confpath --only-run slow_query_diagnosis
    ```

-   用户交互式慢SQL诊断，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis show -c confpath --query SQL --start-time timestamps0 --end-time timestamps1
    ```

-   用户手动清理历史预测结果，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis clean -c confpath --retention-days DAYS
    ```

-   停止已启动的服务，命令如下：

    ```
    gs_dbmind service stop -c confpath
    ```

更多示例请参见[慢SQL诊断功能介绍与测试](https://gitee.com/opengauss/openGauss-DBMind/wikis/examples/%E6%85%A2SQL%E8%AF%8A%E6%96%AD%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D%E4%B8%8E%E6%B5%8B%E8%AF%95)。

