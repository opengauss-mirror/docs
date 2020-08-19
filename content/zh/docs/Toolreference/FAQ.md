# FAQ<a name="ZH-CN_TOPIC_0249632272"></a>


<!-- TOC -->

- [执行命令报错“Failed to obtain the GPHOME”<a name="ZH-CN_TOPIC_0249632274"></a>](#执行命令报错failed-to-obtain-the-gphomea-namezh-cn_topic_0249632274a)
- [gs\_ctl 重建备实例过程被中断导致秘钥文件不完整恢复方法<a name="ZH-CN_TOPIC_0255515980"></a>](#gs\_ctl-重建备实例过程被中断导致秘钥文件不完整恢复方法a-namezh-cn_topic_0255515980a)

<!-- /TOC -->


## 执行命令报错“Failed to obtain the GPHOME”<a name="ZH-CN_TOPIC_0249632274"></a>

### 问题现象<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

如果在root用户下执行工具命令时，出现如下信息，

```
Failed to obtain the GPHOME.
```

### 原因分析<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

可能是环境变量中GPHOME变量没有配置正确。需要检查环境变量GPHOME是否包含openGaussXML中gaussdbToolPath路径。

### 操作步骤<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

使用如下命令检查$GPHOME路径。

```
echo $GPHOME
```

如果不是安装时默认的路径，请在配置文件中修改GPHOME的路径。

```
vim /etc/profile
```

## gs\_ctl 重建备实例过程被中断导致秘钥文件不完整恢复方法<a name="ZH-CN_TOPIC_0255515980"></a>

### 问题现象<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

用户在重建备实例的过程中被中断，再次重建备实例失败，出现以下报错信息

```
CRC checksum does not match value stored in file, maybe the cipher file is corrupt
non obs cipher file or random parameter file is invalid.
read cipher file or random parameter file failed.
2020-06-18 20:58:12.080 5eeb64e3.1 [unknown] 140697304617088 [unknown] 0 dn_6001_6002 F0000 0 [BACKEND] FATAL:  could not load server certificate file "server.crt": no start line
[2020-06-18 20:58:12.086][24066][dn_6001_6002][gs_ctl]:  waitpid 24446 failed, exitstatus is 256, ret is 2
```

### 原因分析<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

重建中断时证书文件不完整，再次重建会由于证书文件不完整而失败。

### 操作步骤<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

1.  在数据目录下查看证书文件大小

    ```
    ll
    查看秘钥文件大小
    -rw------- 1 omm omm       0 Jun 18 20:58 server.crt
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.cipher
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.rand
    ```

2.  若证书文件大小为0，删除证书文件

    ```
    rm -rf server.crt server.key server.key.cipher server.key.rand
    ```

3.  重建备实例

    ```
    gs_ctl build -D data_dir
    ```


>![](public_sys-resources/icon-note.gif) **说明：** 
>若备机数据库已停止，需要重新生成证书文件或者复制证书文件（$GAUSSHOME/share下的证书文件）到数据目录，启动备机并重建备实例。生成证书文件的相关操作请参见《开发者指南》

