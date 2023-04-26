# FAQ<a name="ZH-CN_TOPIC_0249632272"></a>


## 执行命令报错“Failed to obtain the GPHOME”<a name="ZH-CN_TOPIC_0249632274"></a>

### 问题现象<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

如果在root用户下执行工具命令时，出现如下信息。

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

用户在重建备实例的过程中被中断，再次重建备实例失败，出现以下报错信息。

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

1.  在数据目录下查看证书文件大小。

    ```
    ll
    查看秘钥文件大小
    -rw------- 1 omm omm       0 Jun 18 20:58 server.crt
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.cipher
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.rand
    ```

2.  若证书文件大小为0，删除证书文件。

    ```
    rm -rf server.crt server.key server.key.cipher server.key.rand
    ```

3.  重建备实例。

    ```
    gs_ctl build -D data_dir
    ```


>![](public_sys-resources/icon-note.png) **说明：** 
>若备机数据库已停止，需要重新生成证书文件或者复制证书文件（$GAUSSHOME/share下的证书文件）到数据目录，启动备机并重建备实例。生成证书文件的相关操作请参见《数据库管理》。



## 使用gs\_om -t status -\-all查询集群状态，长时间没有响应<a name="ZH-CN_TOPIC_0275124283"></a>

### 问题现象<a name="section434872073818"></a>

使用gs\_om -t status -\-all命令后长时间无响应。

### 原因分析<a name="section14354141874411"></a>

可能是gaussdb进程hang住，查询动作会调用gsql或者gs\_ctl工具查询数据库状态，进程hang住后不会给响应，直到超时后退出。

### 操作步骤<a name="section10173163494516"></a>

1. 查看gsql能否访问数据库，出现下面提示说明gaussdb进程hang住，数据库异常。

   ```
   gsql -d postgres -p 29776        
   gsql: wait (null):29776 timeout expired, errno: Success
   ```

2. 查看postgresql-\*.log是否有错误提示，根据提示解决问题。

   ```
   cd $GAUSSLOG/pg_log/dn_6001;grep "ERROR\|FATAL" postgresql-*.log   
   ```

3. 数据库已经hang住，gs\_om命令不起作用，可以直接到每个节点上查找进程pid后kill。

   ```
   ps -ef|grep $GAUSSHOME/bin/gaussdb|grep -v grep       
   kill -9 $pid
   ```

4. 所有节点进程kill完毕后在某一节点执行启动命令。测试环境下可以直接重启数据库，生产商用环境请联系技术支持工程师。

   ```
   gs_om -t start
   ```

## gs\_sshexkey 相同用户不同密码报错<a name="ZH-CN_TOPIC_0309176033"></a>

### 问题现象<a name="section147641250161616"></a>

openEuler环境下，gs\_sshexkey支持相同用户不同密码做互信，但是输入了正确的密码还是报鉴权失败。

### 原因分析<a name="section232313361171"></a>

打开系统日志/var/log/secure,查看到有\*\*pam\_faillock\(sshd:auth\): Consecutive login failures for user\*\*日志，说明当前用户密码试错次数太多被暂时锁定。

### 操作步骤<a name="section952412551818"></a>

在/etc/pam.d目录下修改相关配置文件system-auth、password-auth、password-auth-crond，将文件中deny=3的地方适当放大，待互信全部建立完成后再恢复。