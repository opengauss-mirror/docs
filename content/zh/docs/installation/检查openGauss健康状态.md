# 检查openGauss健康状态<a name="ZH-CN_TOPIC_0244176946"></a>

通过openGauss提供的gs\_checkos工具可以完成操作系统状态检查。

## 前提条件<a name="zh-cn_topic_0085434669_section574475764117"></a>

-   当前的硬件和网络环境正常。
-   各主机间root互信状态正常。
-   只能使用root用户执行gs\_checkos命令。

## 操作步骤<a name="section54111653133815"></a>

1.  以root用户身份登录服务器。
2.  执行如下命令对openGauss节点服务器的OS参数进行检查。

    ```
    gs_checkos -i A
    ```

    检查节点服务器的OS参数的目的是为了保证openGauss正常通过预安装，并且在安装成功后可以安全高效的运行。详细的检查项目请参见《工具参考》gs\_checkos工具的表 1 操作系统检查项，操作系统参数和文件系统参数。


## 示例<a name="zh-cn_topic_0085434669_zh-cn_topic_0069042386_zh-cn_topic_0059777853_sb6d3ac772495414da1fb16238a23ceb5"></a>

执行gs\_checkos前需要先执行前置脚本，准备环境。以参数"A"为例。

```
gs_checkos -i A
Checking items:
    A1. [ OS version status ]                                   : Normal
    A2. [ Kernel version status ]                               : Normal
    A3. [ Unicode status ]                                      : Normal
    A4. [ Time zone status ]                                    : Normal
    A5. [ Swap memory status ]                                  : Normal
    A6. [ System control parameters status ]                    : Normal
    A7. [ File system configuration status ]                    : Normal
    A8. [ Disk configuration status ]                           : Normal
    A9. [ Pre-read block size status ]                          : Normal
    A10.[ IO scheduler status ]                                 : Normal
    A11.[ Network card configuration status ]                   : Normal
    A12.[ Time consistency status ]                             : Warning
    A13.[ Firewall service status ]                             : Normal
    A14.[ THP service status ]                                  : Normal
Total numbers:14. Abnormal numbers:0. Warning number:1.
```

以参数"B"为例。

```
gs_checkos -i B
Setting items:
    B1. [ Set system control parameters ]                       : Normal
    B2. [ Set file system configuration value ]                 : Normal
    B3. [ Set pre-read block size value ]                       : Normal
    B4. [ Set IO scheduler value ]                              : Normal
    B5. [ Set network card configuration value ]                : Normal
    B6. [ Set THP service ]                                     : Normal
Total numbers:6. Abnormal numbers:0. Warning number:0.
```

