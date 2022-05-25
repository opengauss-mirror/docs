# 卸载<a name="ZH-CN_TOPIC_0289899737"></a>

卸载openGauss轻量版的过程包含清理openGauss进程和对相关目录的清理。

>![](public_sys-resources/icon-caution.gif) **注意：** 
>手动source分离环境变量文件产生的环境变量需要手动清理，如果没有分离环境变量文件，需要手动把bashrc中的export操作清除，否则会引入脏环境变量。  
>
>数据库升级后，建议使用新版本安装包内卸载脚本进行操作，不建议使用旧版本安装包内的卸载脚本操作，因为可能导致非预期结果。

## 执行卸载<a name="zh-cn_topic_0283136478_section1229131371816"></a>

openGauss轻量版提供了卸载脚本帮助用户完整的卸载轻量版环境。

**操作步骤**

1.  以操作系统用户omm登录数据库主节点。
2.  假定解压包的路径为\~/openGauss,进入解压后目录。

    ```
    cd ~/openGauss
    ```

3.  使用uninstall.sh卸载openGauss轻量版环境。

    ```
    sh uninstall.sh
    ```

    如果需要清理对应的安装和数据目录，需要添加--delete-data参数，如果安装的时候分离了环境变量，且后续没有source环境变量文件使之生效，需要source一下环境变量文件使脚本找到对应的路径。

    ```
    sh uninstall.sh --delete-data 
    ```


**示例**

使用uninstall.sh脚本进行卸载轻量版环境。

```
sh uninstall.sh --delete-data
delete-data is true
cleaning up related processes
clean up related processes success
```

