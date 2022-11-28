# 使用指导<a name="ZH-CN_TOPIC_0000001240944983"></a>

假设用户已经初始化配置文件目录confpath，则可以通过下述命令实现本特性的功能：

-   仅启动趋势预测功能，启动命令如下（更多用法参考对service子命令的说明）：：

    ```
    gs_dbmind service start -c confpath --only-run forecast
    ```

-   用户交互式趋势预测，查看某一instance的指标metric从timestamps0到timestamps1时间段内的预测结果，命令如下：

    ```
    gs_dbmind component forecast show -c confpath --metric-name metric --host instance --start-time timestamps0 --end-time timestamps1
    ```

-   用户手动清理历史预测结果，命令如下：

    ```
    gs_dbmind component forecast clean -c confpath --retention-days DAYS
    ```

-   用户自定义阈值下限low和上限up同时进行趋势预测，查看某一instance的指标metric从timestamps0到timestamps1时间段内的预测结果并查看预测值是否超出阈值，命令如下：

    ```
    gs_dbmind component forecast early-warning -c confpath --metric-name metric --host instance --start-time timestamps0 --end-time timestamps1 --upper up --lower low
    ```

-   停止已启动的服务，命令如下：

    ```
    gs_dbmind service stop -c confpath
    ```


